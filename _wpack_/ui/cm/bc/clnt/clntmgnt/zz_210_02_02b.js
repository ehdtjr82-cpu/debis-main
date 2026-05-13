/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_02_02b.xml 268560 b2feb97f90b51c2b8e9bc4f7e5fd56d7570517931de6a4282fb1eec1d30484bb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'sysCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'qryCntn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'clntLupCond',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtFrom',name:'regDtFrom',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtTo',name:'regDtTo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regModCond',name:'regModCond',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regModCntn',name:'regModCntn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDelYn',name:'clntDelYn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'coClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizType',name:'bizType',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_judge'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_judge',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_purchase',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsClntClsCd',name:'구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_collMoneyCond',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_collMoneyCond_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'adptDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'collMoneyAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'collMoneyAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'stmtPrdClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'stmtPrdDd',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'collMoneyCntShtCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCnt',name:'draftDdCnt',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyCrcCd',name:'collMoneyCrcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyBankbookNo',name:'collMoneyBankbookNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'confirmYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_payCond',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_payCond_onrowpositionchange','ev:oncelldatachange':'scwin.ds_payCond_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'adptDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptCd',name:'payAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptNm',name:'payAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'회원제차량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'mchtClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntNm',name:'mchtClntNm',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payCycCd',name:'payCycCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'payDd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCntShtCd',name:'payCntShtCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'draftDdCntCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'payCrcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashRt',name:'cashRt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftRt',name:'draftRt',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'confirmYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payDtChgYn',name:'지급일자변경여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_payAcnt',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_payAcnt_onrowpositionchange','ev:oncelldatachange':'scwin.ds_payAcnt_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'adptDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'payClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'bankCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'bankNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'bankAcntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'dpstrNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transfCmisDeductYn',name:'transfCmisDeductYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecStmtBankCd',name:'elecStmtBankCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'payCrcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'confirmYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_logisticsCustomer',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_logisticsCustomer_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNo',name:'upperClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNm',name:'upperClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'bilgClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'bilgClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'clntBusiClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'clntTelNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'clntMpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'clntEmail',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'clntFaxNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'clntDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersPstNm',name:'clntPersPstNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'clntPersNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomPicEmpNo',name:'mcomPicEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'deptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplGrpCd',name:'tplGrpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'zip',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'addr1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'addr2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr',name:'busiAddr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'busiNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'mgntTrgtClntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtRegDt',name:'mgntTrgtRegDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtRsnCd',name:'mgntTrgtRsnCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntClsCd',name:'sellClntClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'bizDivCntrYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'bizDivBulkYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTplYn',name:'bizDomTplYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStrYn',name:'bizDomStrYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomTransYn',name:'bizDomTransYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomStvYn',name:'bizDomStvYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomInatYn',name:'bizDomInatYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intrlnsClsCd',name:'intrlnsClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transBizYn',name:'transBizYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transIntcdBizYn',name:'transIntcdBizYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntYn',name:'sellClntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntYn',name:'pchsClntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'biztypeNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'bizcondNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'repstNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfLnkYn',name:'trfLnkYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDelYn',name:'clntDelYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldClntNo',name:'oldClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstTxnDt',name:'firstTxnDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoEstmtYn',name:'copCoEstmtYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inatPartnerYn',name:'inatPartnerYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'elecAuthTrgtYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEngNm',name:'clntEngNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntState',name:'clntState',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNationCd',name:'clntNationCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNationNm',name:'clntNationNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPlace',name:'clntPlace',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntStreet',name:'clntStreet',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccfeeAdptYn',name:'ccfeeAdptYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntScacCd',name:'clntScacCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCstmCd',name:'clntCstmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr1',name:'engAddr1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr2',name:'engAddr2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr3',name:'engAddr3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr4',name:'engAddr4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrIataCd',name:'carrIataCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrEngCd',name:'carrEngCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrAdjmInfoFreight',name:'carrAdjmInfoFreight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrAdjmInfoCommission',name:'carrAdjmInfoCommission',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrAdjmInfoRate',name:'carrAdjmInfoRate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrAdjmInfoVat',name:'carrAdjmInfoVat',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrAdjmInfoDiscount',name:'carrAdjmInfoDiscount',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inchnClntNo',name:'inchnClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDtChgYn',name:'payDtChgYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inatPayYn',name:'inatPayYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receiveSellingYn',name:'receiveSellingYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndCd',name:'clntKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regHomeDeptNm',name:'regHomeDeptNm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_contractFileDetail',baseNode:'list',repeatNode:'map','ev:ondataload':'scwin.ds_contractFileDetail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regSeq',name:'regSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'ctrtClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFileNm',name:'ctrtFileNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFilePath',name:'ctrtFilePath',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtType',name:'ctrtType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFromDt',name:'ctrtFromDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'ctrtEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'empNm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_customerFileDetail',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileRegDt',name:'fileRegDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileTypeCd',name:'fileTypeCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'ctrtClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'fileNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regSeq',name:'regSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'filePath',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_rcptDca',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'bankCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDca',name:'rcptDca',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_payDd',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'grpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'fltrCd1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'fltrCd2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'fltrCd3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'sortSeq',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_payCycCd',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_pchsClntClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveClntCrnInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_commonCodeLO117',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'cd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'cdNm'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_FileImport',action:'/cm.bc.clnt.clntmgnt.SaveNcallFileImportCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_contractFileDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_contractFileDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_FileImport_submitdone','ev:submiterror':'scwin.sbm_FileImport_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveBorrowAcqKindInfo&param1=ZZ023',method:'get',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_judge","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_judge_submitdone','ev:submiterror':'scwin.sbm_judge_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_logisticsCustomer',action:'/cm.bc.clnt.clntmgnt.RetrieveLogisticsCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_condition',target:'data:json,{"id":"ds_logisticsCustomer","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_logisticsCustomer_submitdone','ev:submiterror':'scwin.sbm_logisticsCustomer_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveLogisticsCustomerList',action:'/cm.bc.clnt.clntmgnt.RetrieveCollMoneyPayCondAcntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_condition,{"id":"ds_collMoneyCond","key":"OUT_DS1"},{"id":"ds_payCond","key":"OUT_DS2"},{"id":"ds_payAcnt","key":"OUT_DS3"},{"id":"ds_purchase","key":"OUT_DS4"},{"id":"ds_contractFileDetail","key":"OUT_DS6"},{"id":"ds_rcptDca","key":"OUT_DS7"},{"id":"ds_customerFileDetail","key":"OUT_DS8"}',target:'data:json,{"id":"ds_collMoneyCond","key":"OUT_DS1"},{"id":"ds_payCond","key":"OUT_DS2"},{"id":"ds_payAcnt","key":"OUT_DS3"},{"id":"ds_purchase","key":"OUT_DS4"},{"id":"ds_contractFileDetail","key":"OUT_DS6"},{"id":"ds_rcptDca","key":"OUT_DS7"},{"id":"ds_customerFileDetail","key":"OUT_DS8"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveLogisticsCustomerList_submitdone','ev:submiterror':'scwin.sbm_RetrieveLogisticsCustomerList_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_customerFileDetail',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_customerFileDetail","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveLogisticsCustomer',action:'/cm.bc.clnt.clntmgnt.SaveLogisticsCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_logisticsCustomer","key":"IN_DS1"},{"action":"modified","id":"ds_payCond","key":"IN_DS2"},{"action":"modified","id":"ds_payAcnt","key":"IN_DS3"},{"action":"modified","id":"ds_purchase","key":"IN_DS4"},{"action":"modified","id":"ds_collMoneyCond","key":"IN_DS5"},{"action":"modified","id":"ds_customerFileDetail","key":"IN_DS6"},{"action":"modified","id":"ds_contractFileDetail","key":"IN_DS7"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveLogisticsCustomer_submitdone','ev:submiterror':'scwin.sbm_saveLogisticsCustomer_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_payCycCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payDd',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : zz_210_02_02b
// 이름     : 물류거래처관리
// 경로     : 공통/거래처/거래처관리 (물류 거래처)
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-28
// 사용계정 : 내부
// 비고     : 항목이 너무 많아 id값들은 as-is 것을 그대로 쓰고 테스트 완료 후에 to-be 네이밍규칙대로 변경하는 것으로 ....
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.params;
scwin.clntNo = "";
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.pos_clnt = "";
scwin.gJudgeYn = "0";
scwin.g_sLoginDept = "";
scwin.isSubCompany = false;
scwin.lobranCd = "";
scwin.vAdminYn = ""; // 어드민여부
scwin.userEmpNo = ""; // 사용자번호
scwin.cashRt = "";
scwin.draftRt = "";

//hidden 세팅
scwin.txt_clntNoValChk = "0";
scwin.txt_clntNo = "0";
scwin.txt_clntLupCond = "0";
scwin.txt_sysCls = "0";
scwin.txt_payIdx = "";
scwin.txt_createYn = "0";
scwin.txt_updateYn = "0";
scwin.txt_rowCount = "-1";
scwin.txt_saveType = "-1";
scwin.txtCoClsCd;
scwin.params = $c.data.getParameter($p);
if (scwin.params != "" && scwin.params != undefined) {
  scwin.clntNo = scwin.params["clntNo"] == null ? "" : scwin.params["clntNo"]; //팝업으로 넘어온
}

// 회원정보를 json 데이터로 모두 받음
let memJson = $c.data.getMemInfo($p);

// 로그인 정보 추출
let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
let userId = $c.data.getMemInfo($p, "userId");
let privAdmin = $c.data.getMemInfo($p, "privAdmin");
let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
let lobranCd = $c.data.getMemInfo($p, "lobranCd");
scwin.pos_clnt = 0;
scwin.vLoginCoCd = coCd;
scwin.vLoginCoClsCd = coClsCd;
scwin.gJudgeYn = "0";
scwin.vUserHomeClsCd = userHomeClsCd;
scwin.vCoCd = coCd;
scwin.g_sLoginDept = acctDeptCd;
scwin.lobranCd = lobranCd;
scwin.privAdmin = privAdmin;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI018",
    compID: "clntBusiClsCd"
  }, {
    grpCd: "ZZ602",
    compID: "intrlnsClsCd"
  }, {
    grpCd: "LO111",
    compID: "sellClntClsCd"
  }, {
    grpCd: "SD124",
    compID: "tplGrpCd"
  }, {
    grpCd: "FM051",
    compID: "ccfeeAdptYn"
  }, {
    grpCd: "ZZ291",
    compID: "carrAdjmInfoFreight"
  }, {
    grpCd: "ZZ292",
    compID: "carrAdjmInfoCommission, carrAdjmInfoRate, carrAdjmInfoVat, carrAdjmInfoDiscount"
  }, {
    grpCd: "LO117",
    compID: "lc_fileTypeCd,gr_tb_Grid7:fileTypeCd"
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
      range: "3,99"
    }
  }, {
    grpCd: "FM019",
    compID: "gr_tb_Grid3:payClsCd"
  }, {
    grpCd: "FM063",
    compID: "gr_tb_Grid3:elecStmtBankCd"
  }, {
    grpCd: "LO113",
    compID: "gr_tb_Grid5:ctrtClsCd"
  }, {
    grpCd: "LO112",
    compID: "gr_purchase:pchsClntClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    dlt_commonCodeLO117.insertRow(0);
    dlt_commonCodeLO117.setCellData(0, "cd", "");
    dlt_commonCodeLO117.setCellData(0, "cdNm", "전체");
  });
};

//-------------------------------------------------------------------------
// function desc : udc 가 모두 로딩 후
//-------------------------------------------------------------------------    
scwin.onUdcCompleted = async function () {
  //임시
  //ed_coCd.setValue("000");
  //ed_coNm.setValue("동원로엑스(주)");

  await scwin.f_setCompanyInfo();
  await scwin.f_ContentsDisable();
  await scwin.f_retrieveJudge();

  //, btDeleteRow, btUndoRow, btFilePopup, btFileImport

  var vBeforeAWeekDay = scwin.f_SetDate("2", 30);
  var vToday = scwin.f_SetDate("1", 0);
  regFileDtFrom.setValue(vBeforeAWeekDay);
  regFileDtTo.setValue(vToday);
  //scwin.f_ContentsEnable();

  if (scwin.g_sLoginDept != "00009") {
    // 채권팀
    gr_tb_Grid1_btn.hide();
  } else {
    gr_tb_Grid1_btn.show();
  }
};
scwin.ondataload = function () {
  scwin.txt_payIdx = "1";
  //tb_Grid5.TitleHeight = "20";
  //setLogisticsCustomerHeader();
  //setPurchaseClntHeader();
  //setPayAccntHeader();
  //setPayCondHeader();
  //setRcptDcaHeader();		
  //setCollMoneyCondHeader();
  //setContractFileDetailHeader();
  //setCustomerFileDetailHeader();
  $c.gus.cfDisableBtn($p, [b_Update, b_Cancel, b_Save, b_Update2, b_Cancel2, b_Save2, btAddRow, btDeleteRow, btUndoRow, btFilePopup, btFileImport, bAddRow, bUpdateRow, bDeleteRow, bAddRow1, bUpdateRow1, bDeleteRow1, bAddRow2, bUpdateRow2, bDeleteRow2, bAddRow3, bUpdateRow3, bDeleteRow3, bAddRow4, bUpdateRow4, bDeleteRow4, bAddRow5, bUpdateRow5, bDeleteRow5]);
  // debugger;

  console.log($c.data.getMemInfo($p));

  // debugger;
  var memberInfo = $c.data.getMemInfo($p);

  //if("1G34" != memberInfo.lobranCd && "1G36" != memberInfo.lobranCd){
  //mxTab_page7.style.display = 'none';
  // 거래처자료탭 숨김
  tac_tab.hideTab(6);
  //}
  qryCntn.focus();

  //거래처자료 탭 lobrandCd 값에 따라 보이기
  if ("1G34" == scwin.lobranCd || "1G36" == scwin.lobranCd) {
    tac_tab.showTab(6);
  }
  //AsIs index component index 설정값 ToBe는 해당 옵션 없음
  lux_sysCls.setValue(1);
  chb_printCheck.checkAll(true);
};
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_logisticsCustomer.getRowCount();
  if (vResultCountRow > 0) {
    //cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");
    ret = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (ret) {
      //cfGridToExcel(gr_logisticsCustomerExcel, "물류거래처리스트", "물류거래처", 2+4+8+16);	
      let sheetTitle = "물류거래처리스트";
      //let gridId = gr_logisticsCustomerExcel;// AsIs는 히든 그리드 다운이지만 ToBe는 보이는 거
      let gridId = gr_logisticsCustomer;
      let infoArr = [];
      let options = {
        fileName: '물류거래처' + ".xlsx",
        // + ".xls",
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
    }
  } else {
    $c.win.alert($p, "거래처목록이 없습니다.");
    return false;
  }
};

//-------------------------------------------------------------------------
// 날짜설정
//-------------------------------------------------------------------------
scwin.f_SetDate = function (pSetType, pDayCnt) {
  //유형 1:현재일, 2:이전일, 3:이후일
  var vReturnDate = "";
  if (pSetType == "1") {
    vReturnDate = new Date().format("YYYYMMDD");
  } else if (pSetType == "2") {
    vReturnDate = new Date().before(0, 0, pDayCnt).format("YYYYMMDD");
  } else if (pSetType == "3") {
    vReturnDate = new Date().after(0, 0, pDayCnt).format("YYYYMMDD");
  }
  return vReturnDate;
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  //alert("scwin.vLoginCoCd =>" + scwin.vLoginCoCd);
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
  }
};

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  //asis 소스
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  //     , ed_coCd.text, ed_coNm.value
  //     , pWinCloseTF, null, null, null, null
  //     , null, null, null, null, null);
  // // SET
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     ed_coCd.setValue = rtnList[0]; // 코드
  //     ed_coNm.value = rtnList[5]; // 회사명
  //     ed_coCd.hidVal = rtnList[0]; // 히든값
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분
  // } else {
  //     ed_coCd.setValue = "";
  //     ed_coNm.value = "";
  //     ed_coCd.hidVal = "";
  //     scwin.txtCoClsCd = "";
  // }

  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callbackfunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callbackfunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
    ed_coCd.hidVal = ret[0]; // 히든값
    scwin.txtCoClsCd = ret[1]; // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.btFilePopup_onclick = function (e) {
  scwin.f_fileSet();
};

//-------------------------------------------------------------------------
// function desc : 계약서 파일 첨부하기
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function () {
  let rowIndex = ds_contractFileDetail.getRowPosition() ? ds_contractFileDetail.getRowPosition() : 0;
  /**
  let data = {
      "contractFileNm"        : ds_contractFileDetail.getCellData(rowIndex, "ctrtFileNm"),
      "contractFilePath"      : ds_contractFileDetail.getCellData(rowIndex, "contractFilePath"),
      "contractCtrtClsCd"     : ds_contractFileDetail.getCellData(rowIndex, "contractCtrtClsCd"),
      "contractCtrtType"      : ds_contractFileDetail.getCellData(rowIndex, "contractCtrtType"),
      "contractCtrtFromDt"    : ds_contractFileDetail.getCellData(rowIndex, "contractCtrtFromDt"),
      "contractCtrtEndDt"     : ds_contractFileDetail.getCellData(rowIndex, "contractCtrtEndDt"),
      "contractRmk"           : ds_contractFileDetail.getCellData(rowIndex, "contractRmk"),
  };
   */
  let data = {
    "contractFileNm": ds_contractFileDetail.getCellData(rowIndex, "ctrtFileNm"),
    "contractFilePath": ds_contractFileDetail.getCellData(rowIndex, "ctrtFilePath"),
    "contractCtrtClsCd": ds_contractFileDetail.getCellData(rowIndex, "ctrtClsCd"),
    "contractCtrtType": ds_contractFileDetail.getCellData(rowIndex, "ctrtType"),
    "contractCtrtFromDt": ds_contractFileDetail.getCellData(rowIndex, "ctrtFromDt"),
    "contractCtrtEndDt": ds_contractFileDetail.getCellData(rowIndex, "ctrtEndDt"),
    "contractRmk": ds_contractFileDetail.getCellData(rowIndex, "rmk")
  };

  /*
  var argPath = "";
  var dialSize = "";
  argPath = "./zz_210_02_02p_2.jsp";
  dialSize = "dialogWidth:500px; dialogHeight:350px; status:no; scroll:yes";
  
  var resultList = window.showModalDialog(argPath, argObject, dialSize);
  */

  let win_url = "/ui/cm/bc/clnt/clntmgnt/zz_210_02_02p_2.xml";
  let opts = {
    id: "smpPop",
    popupName: "첨부파일 등록",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 600,
    title: "첨부파일 등록"
  };

  // var style = "center:yes; dialogwidth:840px; dialogheight:540px; scroll:no; resizable:no; status:yes;";
  // var strPath = "fi_201_01_03p.jsp";
  // var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;

  let resultList = await $c.win.openPopup($p, win_url, opts, data);
  console.log('callback filepop');
  console.log(resultList);
  // debugger;
  if (resultList != null) {
    // debugger;
    if (resultList[0] != "" && resultList[0] != "undefined") {
      // debugger;
      let filePath = resultList[0];
      let fileName = resultList[1];
      if (fileName != "") {
        fileName = fileName + filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 6);
      }
      ds_contractFileDetail.setCellData(rowIndex, "ctrtFilePath", filePath);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtFileNm", fileName);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtClsCd", resultList[2]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtType", resultList[3]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtFromDt", resultList[4]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtEndDt", resultList[5]);
      ds_contractFileDetail.setCellData(rowIndex, "rmk", resultList[6]);
    } else {
      ds_contractFileDetail.setCellData(rowIndex, "ctrtFilePath", resultList[0]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtFileNm", resultList[1]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtClsCd", resultList[2]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtType", resultList[3]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtFromDt", resultList[4]);
      ds_contractFileDetail.setCellData(rowIndex, "ctrtEndDt", resultList[5]);
      ds_contractFileDetail.setCellData(rowIndex, "rmk", resultList[6]);
    }
  }
};
scwin.btFileImport_onclick = function (e) {
  scwin.f_fileImport();
};

//-------------------------------------------------------------------------
// function desc : 엔콜자료 가져오기
//-------------------------------------------------------------------------    
scwin.f_fileImport = async function () {
  let ret;
  let rowIndex = ds_logisticsCustomer.getRowPosition();
  ret = await $c.win.confirm($p, "엔콜자료를 저장하시겠습니까?");
  if (ret) {
    //f_NcallHeader();
    dma_search.set("clntNo", ds_logisticsCustomer.getCellData(rowIndex, "clntNo"));

    //tr_FileImport.Action="/cm.bc.clnt.clntmgnt.SaveNcallFileImportCMD.do";
    //tr_FileImport.Post();  
    $c.sbm.execute($p, sbm_FileImport);
  }
};

//-------------------------------------------------------------------------
// function name : f_Download
//-------------------------------------------------------------------------
scwin.f_Download = function (row) {
  if (row < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  } else {
    let fileName = ds_contractFileDetail.getCellData(row, "ctrtFileNm");
    let filePath = ds_contractFileDetail.getCellData(row, "ctrtFilePath");
    let vRow = row + 1;
    if (filePath.trim().length == 0) {
      $c.win.alert($p, "선택하신 " + vRow + "행에 파일이 등록되어 있지 않습니다.");
    } else {
      if (filePath.indexOf(".") > 0) {
        //fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".")+4);
        $c.gus.cfDownloadFile($p, fileName, filePath);
      }
    }
  }
};

//-------------------------------------------------------------------------
// function desc : 엔콜자료 가져오기 : submitdone
//-------------------------------------------------------------------------    
scwin.sbm_FileImport_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, "엔콜자료를 성공적으로 저장하였습니다."); // 성공적으로 저장하였습니다

  //let vCreateYn = ed_createYn.getValue();
  let vCreateYn = scwin.txt_createYn;
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [b_Cancel, b_Save, b_Cancel2, b_Save2, btFilePopup, btFileImport, bAddRow, bUpdateRow, bDeleteRow, bAddRow1, bUpdateRow1, bDeleteRow1, bAddRow2, bUpdateRow2, bDeleteRow2, bAddRow3, bUpdateRow3, bDeleteRow3, bAddRow4, bUpdateRow4, bDeleteRow4, bAddRow5, bUpdateRow5, bDeleteRow5]);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// function desc : 엔콜자료 가져오기 : submiterror
//-------------------------------------------------------------------------    
scwin.sbm_FileImport_submiterror = function (e) {
  //$c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
  $c.gus.cfAlertMsg($p, "등록된 엔콜거래처 매입계약서가 없습니다.");
};

//-------------------------------------------------------------------------
// 수금, 지급조건, 지급계좌 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCollPayAcnt = function () {
  //var vClntNo = ds_logisticsCustomer.NameString(ds_logisticsCustomer.RowPosition, "clntNo");

  //tr_RetrieveLogisticsCustomerList.Action = "/cm.bc.clnt.clntmgnt.RetrieveCollMoneyPayCondAcntListCMD.do?clntNo=" + vClntNo+"&bizType=logistics";  
  //tr_RetrieveLogisticsCustomerList.Post();
  //alert("f_RetrieveCollPayAcnt 진입");
  let vClntNo = ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "clntNo");
  dma_condition.set("clntNo", vClntNo);
  dma_condition.set("bizType", "logistics");
  //alert("f_RetrieveCollPayAcnt  vClntNo =>" + vClntNo);
  //sbm_RetrieveLogisticsCustomerList.action = "/cm.bc.clnt.clntmgnt.RetrieveCollMoneyPayCondAcntListCMD.do";
  $c.sbm.execute($p, sbm_RetrieveLogisticsCustomerList);
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function (e) {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, bilgClntNo_search, true); // 청구거래처번호 이미지 활성화
  $c.gus.cfEnableObj($p, upperClnt_search, true); // 상위거래처번호 이미지 활성화
  $c.gus.cfEnableObj($p, crn_search, true); // 사업자등록번호 이미지 활성화
  $c.gus.cfEnableObj($p, zip_search, true); // 우편번호찾기 이미지 활성화
  // cfEnableObj(crn_regist, true);  // 사업자등록번호 이미지 활성화
  // cfEnableObj(clntDelYn, true);  // 거래사용여부

  $c.gus.cfEnableObj($p, clntBusiClsCd, true); // 거래처사업자구분코드
  $c.gus.cfEnableObj($p, tplGrpCd, true); // 3자물류그룹코드
  $c.gus.cfEnableObj($p, intrlnsClsCd, true); // 계열구분
  $c.gus.cfEnableObj($p, sellClntClsCd, false); // 매출거래처구분
  $c.gus.cfEnableObj($p, zip, true); // 우편번호
  $c.gus.cfEnableObj($p, mcomPicEmpNo, true); // 담당자 코드
  $c.gus.cfEnableObj($p, emp_search, true); // 담당자조회 이미지
  $c.gus.cfEnableObj($p, empNm, true); // 담당자명
  $c.gus.cfEnableObj($p, clntBusiClsCd, false); // 거래처사업자구분코드

  /*
  tb_Grid1.Editable = true;
  tb_Grid2.Editable = true;
  tb_Grid3.Editable = true;
  tb_Grid5.Editable = true;
  tb_Grid6.Editable = true;
  */
  gr_tb_Grid1.setGridReadOnly(false);
  gr_tb_Grid2.setGridReadOnly(false);
  gr_tb_Grid3.setGridReadOnly(false);
  gr_tb_Grid5.setGridReadOnly(false);
  gr_tb_Grid6.setGridReadOnly(false);
  scwin.f_gridControlDetail();
};
scwin.f_gridControlDetail = function () {
  //gr_tb_Grid1.data:ds_collMoneyCond
  for (var idx = 0; idx < ds_collMoneyCond.getTotalRow(); idx++) {
    console.log(ds_collMoneyCond.getRowStatus(idx));
    if (ds_collMoneyCond.getRowStatus(idx) != "C") {
      // 신규가 아니면 수정 제한되는 부분
      gr_tb_Grid1.setRowReadOnly(idx, true);
      gr_tb_Grid1.setCellReadOnly(idx, "regId", false); // 등록자
      gr_tb_Grid1.setCellReadOnly(idx, "modId", false); // 수정자
    }
  }
  //gr_tb_Grid2.data:ds_payCond
  for (var idx = 0; idx < ds_payCond.getTotalRow(); idx++) {
    console.log(ds_payCond.getRowStatus(idx));
    if (ds_payCond.getRowStatus(idx) != "C") {
      // 신규가 아니면 수정 제한되는 부분
      gr_tb_Grid2.setRowReadOnly(idx, true);
      gr_tb_Grid2.setCellReadOnly(idx, "payDtChgYn", false); // 지급일자 변경여부
    }
  }

  //gr_tb_Grid3.data:ds_payAcnt
  for (var idx = 0; idx < ds_payAcnt.getTotalRow(); idx++) {
    console.log(ds_payCond.getRowStatus(idx));
    if (ds_payAcnt.getRowStatus(idx) != "C") {
      // 신규가 아니면 수정 제한되는 부분
      gr_tb_Grid3.setRowReadOnly(idx, true);
      gr_tb_Grid3.setCellReadOnly(idx, "adptDt", false); // 적용일자
      gr_tb_Grid3.setCellReadOnly(idx, "payClsCd", false); // 지급구분
      gr_tb_Grid3.setCellReadOnly(idx, "payCrcCd", false); // 지급화폐
      gr_tb_Grid3.setCellReadOnly(idx, "bankNm", false); // 은행명
      gr_tb_Grid3.setCellReadOnly(idx, "bankAcntNo", false); // 계좌번호
      gr_tb_Grid3.setCellReadOnly(idx, "dpstrNm", false); // 예금주
    }
  }

  //gr_tb_Grid5.data:data:ds_contractFileDetail //매입계약 팝업에서 수정
  /**
  for(var idx = 0; idx < ds_payAcnt.getTotalRow(); idx++ ){
      console.log(ds_payCond.getRowStatus(idx));
      if(ds_payAcnt.getRowStatus(idx) != "C"){// 신규가 아니면 수정 제한되는 부분
          gr_tb_Grid5.setRowReadOnly(idx, true);
          //gr_tb_Grid5.setCellReadOnly(idx, "payCrcCd", false);//지급화폐
      }
  }
  */
  //data:ds_rcptDca 가상계좌도 전부 수정 불가
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  //cfDisableKeyData();
  //objType="data" 인것 disable 처리
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, bilgClntNo_search, false); // 상위거래처번호 이미지 비활성화
  $c.gus.cfEnableObj($p, upperClnt_search, false); // 상위거래처번호 이미지 비활성화
  $c.gus.cfEnableObj($p, crn_search, false); // 사업자등록번호 이미지 비활성화
  $c.gus.cfEnableObj($p, zip_search, false); // 우편번호찾기 이미지 비활성화
  //cfEnableObj(crn_regist, false);  // 사업자등록번호 이미지 비활성화
  $c.gus.cfEnableObj($p, clntDelYn, false); // 거래사용여부
  $c.gus.cfEnableObj($p, clntBusiClsCd, false); // 거래처사업자구분코드
  $c.gus.cfEnableObj($p, tplGrpCd, false); // 3자물류그룹코드
  $c.gus.cfEnableObj($p, intrlnsClsCd, false); // 계열구분
  $c.gus.cfEnableObj($p, sellClntClsCd, false); // 매출거래처구분
  $c.gus.cfEnableObj($p, zip, false); // 우편번호
  $c.gus.cfEnableObj($p, emp_search, false); // 담당자조회 이미지

  $c.gus.cfEnableObj($p, clntNo, false);
  $c.gus.cfEnableObj($p, crn, false);
  $c.gus.cfEnableObj($p, bizcondNm, false);
  $c.gus.cfEnableObj($p, biztypeNm, false);
  $c.gus.cfEnableObj($p, repstNm, false);
  $c.gus.cfEnableObj($p, busiAddr, false);
  $c.gus.cfEnableObj($p, addr1, false);
  $c.gus.cfEnableObj($p, upperClntNm, false);
  $c.gus.cfEnableObj($p, bilgClntNm, false);
  $c.gus.cfEnableObj($p, trfLnkYn, false);
  $c.gus.cfEnableObj($p, deptNm, false);
  $c.gus.cfEnableObj($p, mcomPicEmpNo, false);
  $c.gus.cfEnableObj($p, emp_search, false);
  $c.gus.cfEnableObj($p, empNm, false);
  $c.gus.cfEnableObj($p, mgntTrgtRsnCd, false);
  $c.gus.cfEnableObj($p, regId, false);
  $c.gus.cfEnableObj($p, regDtm, false);
  $c.gus.cfEnableObj($p, modId, false);
  $c.gus.cfEnableObj($p, modDtm, false);

  /*
  tb_Grid1.Editable = false;
  tb_Grid2.Editable = false;
  tb_Grid3.Editable = false;
  tb_Grid6.Editable = false;       
  tb_Grid5.Editable = false;
  */

  gr_tb_Grid1.setReadOnly("grid", true);
  gr_tb_Grid2.setReadOnly("grid", true);
  gr_tb_Grid3.setReadOnly("grid", true);
  gr_tb_Grid5.setReadOnly("grid", true);
  gr_tb_Grid6.setReadOnly("grid", true);
};
scwin.sellClntYn_onviewchange = function (info) {
  if (info.value == 1) scwin.f_checkPurchaseClntType('0');
};
scwin.pchsClntYn_onviewchange = function (info) {
  if (info.value == 1) scwin.f_checkPurchaseClntType('1');
};

//-------------------------------------------------------------------------
// 매출, 매입 거래처 체크박스
//-------------------------------------------------------------------------
scwin.f_checkPurchaseClntType = function (idx) {
  if (idx == "0") {
    //매출

    //if(sellClntYn.checked==true){  
    if (sellClntYn.getValue() == 1) {
      //sellClntClsCd.Enable = true;
      $c.gus.cfEnable($p, [sellClntClsCd]);
      sellClntClsCd.setSelectedIndex(1);
      elecAuthTrgtYn.setValue(0);
      $c.gus.cfDisableObjects($p, [elecAuthTrgtYn]);
    } else {
      //sellClntClsCd.Enable = true;
      $c.gus.cfEnable($p, [sellClntClsCd]);
      sellClntClsCd.setSelectedIndex(1);
    }
    if (pchsClntYn.checked == true && sellClntYn.checked == true) {
      $c.gus.cfEnableObjects($p, [elecAuthTrgtYn]);
    }
  } else if (idx == "1") {
    // 매입	
    //if(pchsClntYn.checked==true){  
    if (pchsClntYn.getValue() == 1) {
      gr_purchase.setGridReadOnly(false);
      $c.gus.cfEnableBtnOnly($p, [btAddRow, btDeleteRow, btUndoRow, bAddRow, bUpdateRow, bDeleteRow, btFilePopup, btFileImport]); // 매입거래처 버튼
      $c.gus.cfEnableObjects($p, [elecAuthTrgtYn]);
    } else {
      $c.gus.cfDisableBtnOnly($p, [bAddRow, bUpdateRow, bDeleteRow, btAddRow, btDeleteRow, btUndoRow, btFilePopup, btFileImport]); // 매입거래처 버튼
      scwin.fn_undo(ds_purchase);
      //ds_purchase.UndoAll();
      gr_purchase.setGridReadOnly(true);
      elecAuthTrgtYn.setValue(0);
      $c.gus.cfDisableObjects($p, [elecAuthTrgtYn]);
    }
  }
};

//-------------------------------------------------------------------------
// 수금조건, 지급조건, 지급계좌 전체 데이터 비교
//-------------------------------------------------------------------------
scwin.f_CompareCollMoneyPayCondAcnt = function (pDataSet) {
  //let vDataSet =  $w.data[pDataSet];
  let vDataSet = $c.gus.object($p, pDataSet);
  let vCountRow = vDataSet.getRowCount();
  let vReturnCount = 0;
  let vSize = 0;
  if (pDataSet == "ds_collMoneyCond") vSize = 8;
  if (pDataSet == "ds_payCond") vSize = 11;
  if (pDataSet == "ds_payAcnt") vSize = 7;
  for (var h = 0; h < vCountRow; h++) {
    let tmpReturnVal = scwin.f_RowCompareCollMoneyPayCondAcnt(pDataSet, h, vSize);
    //alert( "vReturnCount =>" + vReturnCount );
    if (tmpReturnVal > 0) vReturnCount++;
  }
  return vReturnCount;
};

//-------------------------------------------------------------------------
// 수금조건, 지급조건, 지급계좌 한로우 데이터 비교
//-------------------------------------------------------------------------
scwin.f_RowCompareCollMoneyPayCondAcnt = function (pDataSet, pRow, pSize) {
  //let vDataSet =  $w.data[pDataSet];
  let vDataSet = $c.gus.object($p, pDataSet);
  let vCountRow = vDataSet.getRowCount();
  var vCol = new Array(pSize);
  var vTmpCol = new Array(pSize);
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
    vCol[2] = ds_payCond.getCellData(pRow, "mbssysVehclYn");
    vCol[3] = ds_payCond.getCellData(pRow, "mchtClntNo");
    vCol[4] = ds_payCond.getCellData(pRow, "payCycCd");
    vCol[5] = ds_payCond.getCellData(pRow, "payDd");
    vCol[6] = ds_payCond.getCellData(pRow, "payCntShtCd");
    vCol[7] = ds_payCond.getCellData(pRow, "draftDdCntCd");
    vCol[8] = ds_payCond.getCellData(pRow, "payCrcCd");
    vCol[9] = ds_payCond.getCellData(pRow, "cashRt");
    vCol[10] = ds_payCond.getCellData(pRow, "draftRt");
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
  var vDuplCount = 0;
  for (var i = 1; i <= vCountRow; i++) {
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
      vTmpCol[2] = ds_payCond.getCellData(i, "mbssysVehclYn");
      vTmpCol[3] = ds_payCond.getCellData(i, "mchtClntNo");
      vTmpCol[4] = ds_payCond.getCellData(i, "payCycCd");
      vTmpCol[5] = ds_payCond.getCellData(i, "payDd");
      vTmpCol[6] = ds_payCond.getCellData(i, "payCntShtCd");
      vTmpCol[7] = ds_payCond.getCellData(i, "draftDdCntCd");
      vTmpCol[8] = ds_payCond.getCellData(i, "payCrcCd");
      vTmpCol[9] = ds_payCond.getCellData(i, "cashRt");
      vTmpCol[10] = ds_payCond.getCellData(i, "draftRt");
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
// 지급조건의 회원제차량인 경우 화주거래처번호 입력체크
//-------------------------------------------------------------------------
scwin.f_CheckMembersVehcl = function () {
  let vCountRow = ds_payCond.getRowCount();
  let vCheckRowInfo = "";
  let vSetCheckRow = 0;
  let vReturnVal = true;
  for (var i = 0; i < vCountRow; i++) {
    let vMbssysVehclYn = ds_payCond.getCellData(i, "mbssysVehclYn");
    if (vMbssysVehclYn == 1) {
      let vMchtClntNo = ds_payCond.getCellData(i, "mchtClntNo");
      if (vMchtClntNo.trim() == "") {
        if (vCheckRowInfo == "") {
          vSetCheckRow = i;
          vCheckRowInfo += "회원제차량인 경우 지급조건의 아래 행의 화주거래처 입력은 필수사항입니다.\n\n";
        }
        vCheckRowInfo += "- " + i + " 번째 행\n";
      }
    }
  }
  if (vSetCheckRow > 0) {
    //$c.win.alert( vCheckRowInfo);
    ds_payCond.setRowPosition(vSetCheckRow);

    //tb_Grid2.SetColumn("mchtClntNm");
    //문제가 있을시 alert => position 이동 => 컬럼에 포커스
    //gr_tb_Grid2.setFocusedCell( vSetCheckRow , "mchtClntNm");
    vReturnVal = false;
  }
  return vReturnVal;
};
scwin.b_Rtrieve_onclick = function (e) {
  scwin.f_clntHist();
};
scwin.b_move1_onclick = function (e) {
  scwin.f_move1();
};
scwin.b_move2_onclick = function (e) {
  scwin.f_move2();
};
scwin.b_move3_onclick = function (e) {
  scwin.f_move3();
};
scwin.b_move4_onclick = function (e) {
  scwin.f_move4();
};
scwin.b_move5_onclick = function (e) {
  scwin.f_move5();
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.(그리드용)
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = function (e) {
  //심사권한 조회
  /*
  ds_judge.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
                                  + "&queryId=retrieveBorrowAcqKindInfo&param1=ZZ023";
  ds_judge.Reset();
  */

  /*
  dma_judge.set("sysCd", "CommonEBC");
  dma_judge.set("queryId", "retrieveBorrowAcqKindInfo");
  dma_judge.set("param1", "ZZ023");
  */
  $c.sbm.execute($p, sbm_judge);
};
scwin.sbm_judge_submitdone = function (e) {
  scwin.gJudgeYn = "0";
  //alert( "ds_judge.getRowCount() =>" + ds_judge.getRowCount() );
  for (var i = 0; i < ds_judge.getRowCount(); i++) {
    if (scwin.g_sLoginDept == ds_judge.getCellData(i, "col1")) {
      scwin.gJudgeYn = "1";
    }
  }

  //팝업으로넘어올시
  //var clntNo = "<%=clntNo%>";
  if (scwin.clntNo != "") {
    lux_clntLupCond.setSelectedIndex(1);
    qryCntn.setValue(scwin.clntNo);
    scwin.f_Retrieve();
  }
};
scwin.sbm_judge_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/*
<!-- 물류거래처 등록이 성공했을 경우 -->
<!-- 저장 TR -->         
*/
scwin.sbm_saveLogisticsCustomer_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  let vCreateYn = scwin.txt_createYn;
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [b_Cancel, b_Save, b_Cancel2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, btFilePopup, btFileImport]);

  //if(vCreateYn=="1"){
  scwin.f_Retrieve();
  //}

  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";
};
scwin.sbm_saveLogisticsCustomer_submiterror = function (e) {
  //cfShowError(tr_saveLogisticsCustomer);
  // $c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";
};
scwin.sbm_RetrieveLogisticsCustomerList_submitdone = function (e) {
  if (e.responseJSON.OUT_DS8 == undefined) {
    ds_customerFileDetail.removeAll();
  }
  ed_totalRows2.setValue(ds_purchase.getRowCount()); // 매입거래처 Grid
  ed_totalRows3.setValue(ds_collMoneyCond.getRowCount()); // 수금조건 Grid
  ed_totalRows4.setValue(ds_payCond.getRowCount()); // 지급조건 Grid
  ed_totalRows5.setValue(ds_payAcnt.getRowCount()); // 지급계좌 Grid
  ed_totalRows6.setValue(ds_rcptDca.getRowCount()); // 매입계약서 Grid
  ed_totalRows7.setValue(ds_customerFileDetail.getRowCount()); // 가상계좌 Grid
  scwin.bind_logisticsCustomer();
  //alert("ds_collMoneyCond.CountRow =>" + ds_collMoneyCond.getRowCount() );
  //alert("임시 sbm_RetrieveLogisticsCustomerList_submitdone success");
};
scwin.sbm_RetrieveLogisticsCustomerList_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//사업자번호//
scwin.f_move1 = async function (e) {
  if (ds_logisticsCustomer.getTotalRow() > 0) {
    let rowPosition = ds_logisticsCustomer.getRowPosition();
    let data = {
      "flag": "N",
      "crn": ds_logisticsCustomer.getCellData(rowPosition, "crn"),
      "compNm": ds_logisticsCustomer.getCellData(rowPosition, "clntNm")
    };
    let win_url = "/ui/ac/fi/stdinfomgnt/fi_100_02_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "사업자번호등록",
      modal: true,
      type: "browserPopup",
      width: 1400,
      height: 1200,
      title: "사업자번호"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  } else {
    let data = {
      "flag": "",
      "crn": "",
      "compNm": ""
    };
    let win_url = "/ui/ac/fi/stdinfomgnt/fi_100_02_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "사업자번호등록",
      modal: true,
      type: "browserPopup",
      width: 1400,
      height: 1200,
      title: "사업자번호"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  }
};

//거래처정보관리//
scwin.f_move2 = async function (e) {
  if (ds_logisticsCustomer.getTotalRow() > 0) {
    let rowIndex = ds_logisticsCustomer.getRowPosition();
    let data = {
      "flag": "Y",
      "crn": ds_logisticsCustomer.getCellData(rowIndex, "crn"),
      "compNm": ds_logisticsCustomer.getCellData(rowIndex, "clntNm"),
      "busiNm": ds_logisticsCustomer.getCellData(rowIndex, "busiNm")
    };
    let win_url = "/ui/ac/fi/electaxinvc/fi_900_01_02b.xml";
    let opts = {
      id: "smpPop",
      popupName: "전자세금계산서거래처정보관리",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 650,
      title: "전자세금계산서거래처정보관리"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  } else {
    let data = {
      "flag": "",
      "crn": "",
      "compNm": "",
      "busiNm": ""
    };
    let win_url = "/ui/ac/fi/electaxinvc/fi_900_01_02b.xml";
    let opts = {
      id: "smpPop",
      popupName: "전자세금계산서거래처정보관리",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 650,
      title: "전자세금계산서거래처정보관리"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  }
};

//사업자별 여신한도 조회//
scwin.f_move3 = async function (e) {
  if (ds_logisticsCustomer.getTotalRow() > 0) {
    let rowIndex = ds_logisticsCustomer.getRowPosition();
    let data = {
      "flag": "Y",
      "crn": ds_logisticsCustomer.getCellData(rowIndex, "crn"),
      "compNm": ds_logisticsCustomer.getCellData(rowIndex, "clntNm"),
      "busiNm": ds_logisticsCustomer.getCellData(rowIndex, "busiNm")
    };
    let win_url = "/ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_02_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "사업자별여신한도조회",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 650,
      title: "사업자별여신한도조회"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  } else {
    let data = {
      "flag": "",
      "crn": "",
      "compNm": "",
      "busiNm": ""
    };
    let win_url = "/ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_02_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "사업자별여신한도조회",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 650,
      title: "사업자별여신한도조회"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  }
};

//관리거래처대상등록//
scwin.f_move4 = async function (e) {
  if (ds_logisticsCustomer.getTotalRow() > 0) {
    let rowIndex = ds_logisticsCustomer.getRowPosition();
    let data = {
      "flag": "Y",
      "crn": ds_logisticsCustomer.getCellData(rowIndex, "crn"),
      "clntNo": ds_logisticsCustomer.getCellData(rowIndex, "clntNo"),
      "compNm": ds_logisticsCustomer.getCellData(rowIndex, "clntNm"),
      "busiNm": ds_logisticsCustomer.getCellData(rowIndex, "busiNm")
    };
    let win_url = "/ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "관리거래처대상등록",
      modal: true,
      type: "browserPopup",
      width: 1010,
      height: 650,
      title: "관리거래처대상등록"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  } else {
    let data = {
      "flag": "",
      "crn": "",
      "clntNo": "",
      "compNm": "",
      "busiNm": ""
    };
    let win_url = "/ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "관리거래처대상등록",
      modal: true,
      type: "browserPopup",
      width: 1010,
      height: 650,
      title: "관리거래처대상등록"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  }
};

//채권현황조회//
scwin.f_move5 = async function (e) {
  if (ds_logisticsCustomer.getTotalRow() > 0) {
    let rowIndex = ds_logisticsCustomer.getRowPosition();
    let data = {
      "flag": "Y",
      "crn": ds_logisticsCustomer.getCellData(rowIndex, "crn"),
      "clntNo": ds_logisticsCustomer.getCellData(rowIndex, "clntNo"),
      "compNm": ds_logisticsCustomer.getCellData(rowIndex, "clntNm"),
      "busiNm": ds_logisticsCustomer.getCellData(rowIndex, "busiNm")
    };
    let win_url = "/ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "채권 현황 조회",
      modal: true,
      type: "browserPopup",
      width: 1010,
      height: 650,
      title: "관리거래처대상등록"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  } else {
    let data = {
      "flag": "",
      "crn": "",
      "clntNo": "",
      "compNm": "",
      "busiNm": ""
    };
    let win_url = "/ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_01b.xml";
    let opts = {
      id: "smpPop",
      popupName: "채권 현황 조회",
      modal: true,
      type: "browserPopup",
      width: 1010,
      height: 650,
      title: "관리거래처대상등록"
    };
    let resultList = await $c.win.openPopup($p, win_url, opts, data);
  }
};

//-------------------------------------------
// 휴대전화번호 입력 : '숫자', '-'
//-------------------------------------------
scwin.f_checkCharacter = function (e) {
  let key = e.keyCode;

  // 숫자(48~57), 하이픈(45) 외 입력 차단
  if (key !== 45 && (key < 48 || key > 57)) {
    $c.win.alert($p, "휴대전화번호는 '숫자', '-' 만 입력 가능합니다.");
    e.preventDefault(); // WebSquare 방식 차단
  }
};
scwin.btCustomerFileSearch_onclick = function (e) {
  scwin.f_customerFileSearch();
};
scwin.udc_comCode_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_comCode_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_reset_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
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
// 물류 거래처 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  scwin.txt_saveType = "2"; // 0:신규, 1:수정, 2:조회    <= hidden
  scwin.txt_payIdx = "1";

  //mxTab.ActiveIndex  = "1";
  tac_tab.setEventPause("onchange", true);
  tac_tab.setSelectedTabIndex(0, false);
  tac_tab.setEventPause("onchange", false);
  scwin.f_ContentsDisable();
  $c.gus.cfDisableObjects($p, [mgntTrgtClntYn]); // 관리거래처여부 수정 X

  let vRegDtFrom = regDtFrom.getValue().trim();
  let vRegDtTo = regDtTo.getValue().trim();
  let vRegModCntn = regModCntn.getValue().trim();
  if (vRegDtFrom != "" && vRegDtFrom.length < 8) {
    $c.win.alert($p, "등록시작일자를 정확하게 입력해 주십시오.");
    regDtFrom.focus();
    return false;
  }
  if (vRegDtTo != "" && vRegDtTo.length < 8) {
    $c.win.alert($p, "등록종료일자를 정확하게 입력해 주십시오.");
    regDtTo.focus();
    return false;
  }
  if (vRegDtTo != "" && vRegDtFrom == "") {
    $c.win.alert($p, "등록시작일자를 입력해 주십시오");
    regDtFrom.focus();
    return false;
  }
  if (vRegDtFrom != "" && vRegDtTo != "" && vRegDtFrom > vRegDtTo) {
    $c.win.alert($p, "등록일 종료일자가 시작일자보다 이전입니다.");
    regDtTo.focus();
    return false;
  }
  let txt_qryCntn = qryCntn.getValue().trimAll();
  if (scwin.bytelength(txt_qryCntn) < 2) {
    msgArr = new Array(2);
    msgArr[0] = "검색어";
    msgArr[1] = "글자(숫자) 한(두)";
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_011, msgArr);
    qryCntn.focus();
    return false;
  }
  let vClntDelYn = "0";

  //if(chk_clntDelYn.checked){
  //$c.win.alert( "미사용 체크박=>" + chk_clntDelYn.getValue() );
  if (chk_clntDelYn.getValue()) {
    vClntDelYn = "1";
  }

  /*
  var condition = "?";
  condition += "sysCls="+ lux_sysCls.valueOfIndex("code",lux_sysCls.Index) 
              + "&qryCntn="+ qryCntn.value
              + "&clntLupCond=" + lux_clntLupCond.valueOfIndex("code",lux_clntLupCond.Index) 
              + "&regDtFrom=" + vRegDtFrom 
              + "&regDtTo=" + vRegDtTo 
              + "&regModCond=" + lux_regModCond.valueOfIndex("code",lux_regModCond.Index) 
              + "&regModCntn="+ vRegModCntn
              + "&clntDelYn=" + vClntDelYn 
              + "&coCd=" 		+ ed_coCd.text 
              + "&coClsCd=" 	+ txtCoClsCd.value 
              ;
  */
  dma_condition.set("sysCls", lux_sysCls.getValue());
  dma_condition.set("qryCntn", qryCntn.getValue());
  dma_condition.set("clntLupCond", lux_clntLupCond.getValue());
  dma_condition.set("regDtFrom", vRegDtFrom);
  dma_condition.set("regDtTo", vRegDtTo);
  dma_condition.set("regModCond", lux_regModCond.getValue());
  dma_condition.set("regModCntn", vRegModCntn);
  dma_condition.set("clntDelYn", vClntDelYn);
  dma_condition.set("coCd", ed_coCd.getValue());
  dma_condition.set("coClsCd", scwin.txtCoClsCd);

  //ds_logisticsCustomer.DataID = "/cm.bc.clnt.clntmgnt.RetrieveLogisticsCustomerListCMD.do" + condition; 
  //ds_logisticsCustomer.Reset();

  //alert("ds_logisticsCustomer => " + ds_logisticsCustomer.Text);
  //dataSetDebug(ds_logisticsCustomer,true);

  //alert("\n=>"+ ds_logisticsCustomer.NameString(1, "busiNm") ); 
  ds_logisticsCustomer.removeAll(); // rowposition 변경 이벤트 방지 // ds_logisticsCustomer.Reset();
  $c.sbm.execute($p, sbm_logisticsCustomer);
};

// 물류거래처 조회
scwin.sbm_logisticsCustomer_submitdone = function (e) {
  //$c.gus.cfAlertMsg( "ds_logisticsCustomer.getRowCount() =>"+ds_logisticsCustomer.getRowCount() );
  let rowCnt = ds_logisticsCustomer.getRowCount();
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    qryCntn.focus();
    scwin.f_ContentsDisable();
  } else {
    scwin.txt_clntNo = ds_logisticsCustomer.getCellData(0, "clntNo");
    scwin.txt_rowCount = rowCnt;
  }

  // 조회후 버튼 Enable, Disable
  if (rowCnt < 1) {
    $c.gus.cfDisableBtn($p, [b_Update, b_Cancel, b_Save, b_Update2, b_Cancel2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, btAddRow, btDeleteRow, btUndoRow, btFilePopup, elecAuthTrgtYn, btFileImport]);
  } else {
    // $c.gus.cfDisableBtn([b_Create, b_Update, b_Create2, b_Update2]);
    // $c.gus.cfEnableBtnOnly( [b_Cancel, b_Save, b_Cancel2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, btAddRow, btDeleteRow, btUndoRow, btFilePopup, elecAuthTrgtYn, btFileImport] );
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save, b_Cancel2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, btAddRow, btDeleteRow, btUndoRow, btFilePopup, elecAuthTrgtYn, btFileImport]);
  }
  //$c.gus.cfGoPrevPosition(ds_logisticsCustomer, scwin.pos_clnt);  // 저장 이전 로우

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  //cfShowTotalRows(totalRows,rowCnt);
  ed_totalRows.setValue(rowCnt);
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";

  //alert('1');
  ds_logisticsCustomer.setRowPosition(0); // 강제로 첫로우 지정
  gr_logisticsCustomer.setFocusedCell(0, 0, false);
  scwin.bind_logisticsCustomer();
};
scwin.bind_logisticsCustomer = function () {
  let row;
  if (ds_logisticsCustomer.getRowCount() == 1) row = 0;else row = ds_logisticsCustomer.getRowPosition();
  clntNo.setValue(ds_logisticsCustomer.getCellData(row, "clntNo")); // 거래처번호
  upperClntNo.setValue(ds_logisticsCustomer.getCellData(row, "upperClntNo")); // 상위거래처번호
  upperClntNm.setValue(ds_logisticsCustomer.getCellData(row, "upperClntNm"));
  clntNm.setValue(ds_logisticsCustomer.getCellData(row, "clntNm"));
  bilgClntNo.setValue(ds_logisticsCustomer.getCellData(row, "bilgClntNo"));
  bilgClntNm.setValue(ds_logisticsCustomer.getCellData(row, "bilgClntNm"));
  clntBusiClsCd.setValue(ds_logisticsCustomer.getCellData(row, "clntBusiClsCd"));
  clntTelNo.setValue(ds_logisticsCustomer.getCellData(row, "clntTelNo"));
  clntMpNo.setValue(ds_logisticsCustomer.getCellData(row, "clntMpNo"));
  clntEmail.setValue(ds_logisticsCustomer.getCellData(row, "clntEmail"));
  clntFaxNo.setValue(ds_logisticsCustomer.getCellData(row, "clntFaxNo"));
  clntDeptNm.setValue(ds_logisticsCustomer.getCellData(row, "clntDeptNm"));
  clntPersPstNm.setValue(ds_logisticsCustomer.getCellData(row, "clntPersPstNm"));
  clntPersNm.setValue(ds_logisticsCustomer.getCellData(row, "clntPersNm"));
  mcomPicEmpNo.setValue(ds_logisticsCustomer.getCellData(row, "mcomPicEmpNo"));
  empNm.setValue(ds_logisticsCustomer.getCellData(row, "empNm"));
  deptNm.setValue(ds_logisticsCustomer.getCellData(row, "deptNm"));
  tplGrpCd.setValue(ds_logisticsCustomer.getCellData(row, "tplGrpCd"));
  zip.setValue(ds_logisticsCustomer.getCellData(row, "zip"));
  addr1.setValue(ds_logisticsCustomer.getCellData(row, "addr1"));
  addr2.setValue(ds_logisticsCustomer.getCellData(row, "addr2"));
  busiAddr.setValue(ds_logisticsCustomer.getCellData(row, "busiAddr"));
  crn.setValue(ds_logisticsCustomer.getCellData(row, "crn"));
  mgntTrgtClntYn.setValue(ds_logisticsCustomer.getCellData(row, "mgntTrgtClntYn"));
  mgntTrgtRegDt.setValue(ds_logisticsCustomer.getCellData(row, "mgntTrgtRegDt"));
  mgntTrgtRsnCd.setValue(ds_logisticsCustomer.getCellData(row, "mgntTrgtRsnCd"));
  sellClntClsCd.setValue(ds_logisticsCustomer.getCellData(row, "sellClntClsCd"));
  bizDivCntrYn.setValue(ds_logisticsCustomer.getCellData(row, "bizDivCntrYn"));
  bizDivBulkYn.setValue(ds_logisticsCustomer.getCellData(row, "bizDivBulkYn"));
  bizDomTplYn.setValue(ds_logisticsCustomer.getCellData(row, "bizDomTplYn"));
  bizDomStrYn.setValue(ds_logisticsCustomer.getCellData(row, "bizDomStrYn"));
  bizDomTransYn.setValue(ds_logisticsCustomer.getCellData(row, "bizDomTransYn"));
  bizDomStvYn.setValue(ds_logisticsCustomer.getCellData(row, "bizDomStvYn"));
  bizDomInatYn.setValue(ds_logisticsCustomer.getCellData(row, "bizDomInatYn"));
  intrlnsClsCd.setValue(ds_logisticsCustomer.getCellData(row, "intrlnsClsCd"));
  transBizYn.setValue(ds_logisticsCustomer.getCellData(row, "transBizYn"));
  transIntcdBizYn.setValue(ds_logisticsCustomer.getCellData(row, "transIntcdBizYn"));
  sellClntYn.setValue(ds_logisticsCustomer.getCellData(row, "sellClntYn"));
  pchsClntYn.setValue(ds_logisticsCustomer.getCellData(row, "pchsClntYn"));
  biztypeNm.setValue(ds_logisticsCustomer.getCellData(row, "biztypeNm"));
  bizcondNm.setValue(ds_logisticsCustomer.getCellData(row, "bizcondNm"));
  repstNm.setValue(ds_logisticsCustomer.getCellData(row, "repstNm"));
  trfLnkYn.setValue(ds_logisticsCustomer.getCellData(row, "trfLnkYn"));
  regId.setValue(ds_logisticsCustomer.getCellData(row, "regId"));
  regDtm.setValue(ds_logisticsCustomer.getCellData(row, "regDtm"));
  modId.setValue(ds_logisticsCustomer.getCellData(row, "modId"));
  modDtm.setValue(ds_logisticsCustomer.getCellData(row, "modDtm"));
  clntDelYn.setValue(ds_logisticsCustomer.getCellData(row, "clntDelYn"));
  oldClntNo.setValue(ds_logisticsCustomer.getCellData(row, "oldClntNo"));
  firstTxnDt.setValue(ds_logisticsCustomer.getCellData(row, "firstTxnDt"));
  copCoEstmtYn.setValue(ds_logisticsCustomer.getCellData(row, "copCoEstmtYn"));
  inatPartnerYn.setValue(ds_logisticsCustomer.getCellData(row, "inatPartnerYn"));
  elecAuthTrgtYn.setValue(ds_logisticsCustomer.getCellData(row, "elecAuthTrgtYn"));
  clntEngNm.setValue(ds_logisticsCustomer.getCellData(row, "clntEngNm"));
  clntState.setValue(ds_logisticsCustomer.getCellData(row, "clntState"));
  clntNationCd.setValue(ds_logisticsCustomer.getCellData(row, "clntNationCd"));
  clntNationNm.setValue(ds_logisticsCustomer.getCellData(row, "clntNationNm"));
  clntPlace.setValue(ds_logisticsCustomer.getCellData(row, "clntPlace"));
  clntStreet.setValue(ds_logisticsCustomer.getCellData(row, "clntStreet"));
  ccfeeAdptYn.setValue(ds_logisticsCustomer.getCellData(row, "ccfeeAdptYn"));
  clntScacCd.setValue(ds_logisticsCustomer.getCellData(row, "clntScacCd"));
  clntCstmCd.setValue(ds_logisticsCustomer.getCellData(row, "clntCstmCd"));
  engAddr1.setValue(ds_logisticsCustomer.getCellData(row, "engAddr1"));
  engAddr2.setValue(ds_logisticsCustomer.getCellData(row, "engAddr2"));
  engAddr3.setValue(ds_logisticsCustomer.getCellData(row, "engAddr3"));
  engAddr4.setValue(ds_logisticsCustomer.getCellData(row, "engAddr4"));
  carrIataCd.setValue(ds_logisticsCustomer.getCellData(row, "carrIataCd"));
  carrEngCd.setValue(ds_logisticsCustomer.getCellData(row, "carrEngCd"));
  carrAdjmInfoFreight.setValue(ds_logisticsCustomer.getCellData(row, "carrAdjmInfoFreight"));
  carrAdjmInfoCommission.setValue(ds_logisticsCustomer.getCellData(row, "carrAdjmInfoCommission"));
  carrAdjmInfoRate.setValue(ds_logisticsCustomer.getCellData(row, "carrAdjmInfoRate"));
  carrAdjmInfoVat.setValue(ds_logisticsCustomer.getCellData(row, "carrAdjmInfoVat"));
  carrAdjmInfoDiscount.setValue(ds_logisticsCustomer.getCellData(row, "carrAdjmInfoDiscount"));
  inchnClntNo.setValue(ds_logisticsCustomer.getCellData(row, "inchnClntNo"));
  payDtChgYn.setValue(ds_logisticsCustomer.getCellData(row, "payDtChgYn"));
  inatPayYn.setValue(ds_logisticsCustomer.getCellData(row, "inatPayYn"));
  receiveSellingYn.setValue(ds_logisticsCustomer.getCellData(row, "receiveSellingYn"));
};
scwin.sbm_logisticsCustomer_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);

  //cfHideDSWaitMsg(gr_logisticsCustomer);
  //cfShowError(ds_logisticsCustomer);

  //hidden
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";
};

// language=JavaScript for=ds_logisticsCustomer event=OnRowPosChanged(row)>
scwin.ds_logisticsCustomer_onrowpositionchange = async function (info) {
  let row = info.newRowIndex;
  let vCountRow = ds_logisticsCustomer.getRowCount();
  let vChgCount = 0;
  let vChgRow = 0;
  for (let i = 0; i < vCountRow; i++) {
    let vCurRowStatus = ds_logisticsCustomer.getRowStatus(i);
    if (vCurRowStatus == "C" || vCurRowStatus == "U") {
      vChgCount++;
      vChgRow = i;
    }
  }
  if (vChgCount > 0 && row != vChgRow) {
    if (!(await $c.win.alert($p, "거래처 신규등록이나 변경사항을 저장하신 후에 다른 거래처정보로 이동하실수 있습니다."))) {
      gr_logisticsCustomer.setFocusedCell(vChgRow, 0, false);
      return false;
    }
  }
  let vClntRowPosi = ds_logisticsCustomer.getRowPosition();
  let vRealCount = scwin.txt_rowCount;
  let vClntNo = ds_logisticsCustomer.getCellData(row, "clntNo");
  let vClntKndCd = ds_logisticsCustomer.getCellData(row, "clntKndCd");
  let vRowStatus = ds_logisticsCustomer.getRowStatus(row);
  if (vClntKndCd == "LO") {
    //gr_logisticsCustomer.Editable  = true;
    //tb_Grid1.Editable  = true;
    //tb_Grid2.Editable  = true;
    //tb_Grid3.Editable  = true;
    //tb_Grid6.Editable  = true;			
    //tb_Grid5.Editable  = true;
    //HDG 이거 해봤자 cell이 edit false 고 포커스만 풀린다.
    //gr_logisticsCustomer.setGridReadOnly(false);
    gr_tb_Grid1.setGridReadOnly(false);
    gr_tb_Grid2.setGridReadOnly(false);
    gr_tb_Grid3.setGridReadOnly(false);
    gr_tb_Grid6.setGridReadOnly(false);
    gr_tb_Grid5.setGridReadOnly(false);
  } else {
    /*
    gr_logisticsCustomer.Editable  = false;
    tb_Grid1.Editable  = false;
    tb_Grid2.Editable  = false;
    tb_Grid3.Editable  = false;
    tb_Grid6.Editable  = false;
    tb_Grid5.Editable  = false;
    */
    gr_logisticsCustomer.setGridReadOnly(true);
    gr_tb_Grid1.setGridReadOnly(true);
    gr_tb_Grid2.setGridReadOnly(true);
    gr_tb_Grid3.setGridReadOnly(true);
    gr_tb_Grid6.setGridReadOnly(true);
    gr_tb_Grid5.setGridReadOnly(true);
    $c.gus.cfDisableBtn($p, [b_Update, b_Cancel, b_Save, b_Update2, b_Cancel2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, btFilePopup, btFileImport]);
  }
  if (vCountRow != 0) scwin.f_RetrieveCollPayAcnt();
  if (vRowStatus == "R") {
    scwin.f_ContentsDisable();
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save, b_Cancel2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, bAddRow1, bUpdateRow1, bDeleteRow1, bAddRow2, bUpdateRow2, bDeleteRow2, bAddRow3, bUpdateRow3, bDeleteRow3, bAddRow4, bUpdateRow4, bDeleteRow4, btFilePopup, btFileImport]);
  } else {
    scwin.f_ContentsEnable();
    // debugger;
    $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Create2, b_Update2]);
    // debugger;
  }
};
scwin.crn_regist_onclick = function (e) {
  scwin.f_registCrn('N');
};

//<!-- 거래처 번호 입력시 -->
scwin.cLntNo_onblur = function (e) {
  clntNo.setValue($c.gus.cfGetLeftPad($p, clntNo.getValue(), '6'));
};

//<!-- 사업자구분 선택시 -->
// language=JavaScript for=clntBusiClsCd event=OnSelChange()>
scwin.clntBusiClsCd_onchange = function (info) {
  var vClntBusiClsCdIndex = clntBusiClsCd.getSelectedIndex();
  var vClntNo = ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "clntNo");

  //debugger;
  if (vClntBusiClsCdIndex == 0) {
    //법인사업자
    //crn.mandatory = "true";			
    //crn.validExp="사업자번호:yes";

    udc_crn.mandatoryCode = true;
    udc_crn.validExpCode = "사업자번호:yes";

    //cfRefreshMandSign();
  } else if (vClntBusiClsCdIndex == 1) {
    //개인사업자
    //crn.mandatory = "true";			
    //crn.validExp="사업자번호:yes";

    udc_crn.mandatoryCode = true;
    udc_crn.validExpCode = "사업자번호:yes";

    //cfRefreshMandSign();
  } else if (vClntBusiClsCdIndex == 2 || vClntBusiClsCdIndex == 3) {
    //crn.mandatory = "false";			
    //crn.validExp="";

    udc_crn.mandatoryCode = false;
    udc_crn.validExpCode = "";

    //cfRefreshMandSign();
  }
};

/*
<!-- 수금조건 그리드 컬럼 선택시 이미지변경  -->
 language="javascript"  for=tb_Grid1  event=OnColumnPosChanged(Row,Colid)>
*/
scwin.gr_tb_Grid1_onaftercolumnmove = function (info) {
  /*
      switch (Colid) {
          case "collMoneyAcctDeptNm":
            tb_Grid1.UrlImages = SEARCH_BTN; break;
          case "collMoneyBankbookNo":
            tb_Grid1.UrlImages = SEARCH_BTN; break;
          case "adptDt":
            tb_Grid1.UrlImages = CALENDAR_BTN; break;
          } 
   */
};

/*
<!-- 수금조건로우 선택시 -->
 language=JavaScript for=ds_collMoneyCond event=OnRowPosChanged(row)>
*/
scwin.ds_collMoneyCond_onrowpositionchange = function (info) {
  let row = info.newIndex;
  let vConfirmYn = ds_collMoneyCond.getCellData(row, "confirmYn");

  //gr_tb_Grid1.setPro  .setColumnProperty("adptDt", "edit", false);

  if (vConfirmYn == "1") {
    gr_tb_Grid1.setColumnDisabled("adptDt", true);
    gr_tb_Grid1.setColumnDisabled("collMoneyAcctDeptNm", true);
    gr_tb_Grid1.setColumnDisabled("stmtPrdClsCd", true);
    gr_tb_Grid1.setColumnDisabled("stmtPrdDd", true);
    gr_tb_Grid1.setColumnDisabled("collMoneyCntShtCd", true);
    gr_tb_Grid1.setColumnDisabled("draftDdCnt", true);
    gr_tb_Grid1.setColumnDisabled("collMoneyCrcCd", true);
    gr_tb_Grid1.setColumnDisabled("collMoneyBankbookNo", true);
  } else {
    if (ds_collMoneyCond.getRowStatus(row) != "R") gr_tb_Grid1.setColumnDisabled("adptDt", false);else gr_tb_Grid1.setColumnDisabled("adptDt", true);
    gr_tb_Grid1.setColumnDisabled("collMoneyAcctDeptNm", true);
    gr_tb_Grid1.setColumnDisabled("stmtPrdClsCd", false);
    gr_tb_Grid1.setColumnDisabled("stmtPrdDd", false);
    gr_tb_Grid1.setColumnDisabled("collMoneyCntShtCd", false);
    gr_tb_Grid1.setColumnDisabled("draftDdCnt", "Edit", false);
    gr_tb_Grid1.setColumnDisabled("collMoneyCrcCd", false);
    gr_tb_Grid1.setColumnDisabled("collMoneyBankbookNo", false);
  }
};

/*
<!-- 지급조건로우 선택시 -->
 language=JavaScript for=ds_payCond event=OnRowPosChanged(row)>
*/
scwin.ds_payCond_onrowpositionchange = function (info) {
  let row = info.newIndex;
  let vConfirmYn = ds_payCond.getCellData(row, "confirmYn");
  if (vConfirmYn == "1") {
    gr_tb_Grid2.setColumnDisabled("adptDt", true);
    gr_tb_Grid2.setColumnDisabled("payAcctDeptNm", true);
    gr_tb_Grid2.setColumnDisabled("mbssysVehclYn", true);
    gr_tb_Grid2.setColumnDisabled("mchtClntNm", true);
    gr_tb_Grid2.setColumnDisabled("payCycCd", true);
    gr_tb_Grid2.setColumnDisabled("payDd", true);
    gr_tb_Grid2.setColumnDisabled("payCntShtCd", true);
    gr_tb_Grid2.setColumnDisabled("draftDdCntCd", true);
    gr_tb_Grid2.setColumnDisabled("payCrcCd", true);
    gr_tb_Grid2.setColumnDisabled("cashRt", true);
    gr_tb_Grid2.setColumnDisabled("draftRt", true);
  } else {
    // adptDt는 row 상태에 따라 enable/disable
    if (ds_payCond.getRowStatus(row) != "R") {
      gr_tb_Grid2.setColumnDisabled("adptDt", false); // ANY
    } else {
      gr_tb_Grid2.setColumnDisabled("adptDt", true); // None
    }

    // 아래 컬럼들은 모두 Edit = ANY 이므로 → disabled = false
    gr_tb_Grid2.setColumnDisabled("payAcctDeptNm", false);
    gr_tb_Grid2.setColumnDisabled("mbssysVehclYn", false);
    gr_tb_Grid2.setColumnDisabled("mchtClntNm", false);
    gr_tb_Grid2.setColumnDisabled("payCycCd", false);
    gr_tb_Grid2.setColumnDisabled("payDd", false);
    gr_tb_Grid2.setColumnDisabled("payCntShtCd", false);
    gr_tb_Grid2.setColumnDisabled("draftDdCntCd", false);
    gr_tb_Grid2.setColumnDisabled("payCrcCd", false);
    gr_tb_Grid2.setColumnDisabled("cashRt", false);
    gr_tb_Grid2.setColumnDisabled("draftRt", false);
  }
};

/*
<!-- 지급계좌로우 선택시 -->
 language=JavaScript for=ds_payAcnt event=OnRowPosChanged(row)>
 */
scwin.ds_payAcnt_onrowpositionchange = function (info) {
  let row = info.newIndex;
  let vConfirmYn = ds_payAcnt.getCellData(row, "confirmYn");
  if (vConfirmYn == "1") {
    gr_tb_Grid3.setColumnDisabled("adptDt", true);
    gr_tb_Grid3.setColumnDisabled("payClsCd", true);
    gr_tb_Grid3.setColumnDisabled("bankNm", true);
    gr_tb_Grid3.setColumnDisabled("bankAcntNo", true);
    gr_tb_Grid3.setColumnDisabled("dpstrNm", true);
    gr_tb_Grid3.setColumnDisabled("transfCmisDeductYn", true);
    gr_tb_Grid3.setColumnDisabled("elecStmtBankCd", true);
  } else {
    // adptDt는 RowStatus에 따라 enable/disable
    if (ds_payAcnt.getRowStatus(row) != "R") {
      gr_tb_Grid3.setColumnDisabled("adptDt", false); // ANY
    } else {
      gr_tb_Grid3.setColumnDisabled("adptDt", true); // None
    }

    // 아래 컬럼들은 모두 Edit = ANY → disabled = false
    gr_tb_Grid3.setColumnDisabled("payClsCd", false);
    gr_tb_Grid3.setColumnDisabled("bankNm", false);
    gr_tb_Grid3.setColumnDisabled("bankAcntNo", false);
    gr_tb_Grid3.setColumnDisabled("dpstrNm", false);
    gr_tb_Grid3.setColumnDisabled("transfCmisDeductYn", false);
    gr_tb_Grid3.setColumnDisabled("elecStmtBankCd", false);
  }
};

/*
<!-- 우편번호 입력시 -->
 language=JavaScript for=zip event=onKillFocus()>
*/
scwin.udc_zipPopup_onblurCodeEvent = function (e) {
  let vZip = zip.getValue();
  if (vZip.trim() != "") {
    scwin.f_openZipPopUp();
  }
};
scwin.udc_zipPopup_onclickEvent = function (e) {
  scwin.f_openZipPopUp();
};

//-------------------------------------------------------------------------
// 우편번호 코드조회 팝업
//-------------------------------------------------------------------------
scwin.f_openZipPopUp = async function (e) {
  /*
  var rtnList = new Array();
  var popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.jsp", "", 
              "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");
          
  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
      if (rtnList[0] == "N/A") return;
      
      zip.Text = popupResult.zip;
      addr1.value = popupResult.addr1;
      addr2.focus();
                  
  }else{
      zip.Text = "";
      addr1.value = "";
      addr2.value = "";
  }
  */

  let data = {};
  let win_url = "/ui/cm/zz/newzipcodePopup.xml";
  let opts = {
    id: "smpPop",
    popupName: "우편번호",
    modal: true,
    type: "browserPopup",
    width: 530,
    height: 400,
    title: "우편번호"
  };

  // var style = "center:yes; dialogwidth:840px; dialogheight:540px; scroll:no; resizable:no; status:yes;";
  // var strPath = "fi_201_01_03p.jsp";
  // var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;

  let popupResult = await $c.win.openPopup($p, win_url, opts, data);

  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
    if (popupResult[0] == "N/A") return;
    zip.setValue(popupResult.zip);
    addr1.setValue(popupResult.addr1);
    addr2.focus();
  } else {
    zip.setValue("");
    addr1.setValue("");
    addr2.setValue("");
  }
};
scwin.udc_mcomPicEmpNo_onclickEvent = function (e) {
  scwin.f_openEmpPopUp();
};

//-------------------------------------------------------------------------
// 사원팝업 
//-------------------------------------------------------------------------
scwin.f_openEmpPopUp = async function () {
  await udc_mcomPicEmpNo.cfCommonPopUp(scwin.udc_mcomPicEmpNo_callbackfunc, '', '', "T", null, null, "100,100,0,130", "3,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  사원코드
};
scwin.udc_mcomPicEmpNo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    mcomPicEmpNo.setValue(rtnList[0]); //사원번호
    empNm.setValue(rtnList[1]); //사원명
  }
};
scwin.udc_clntNationCd_onclickEvent = function (e) {
  scwin.f_clntNationPopUp();
};

//-------------------------------------------------------------------------
// 거래처 소속 국가 팝업 
//-------------------------------------------------------------------------
scwin.f_clntNationPopUp = function () {
  udc_clntNationCd.cfCommonPopUp(scwin.udc_clntNationCd_callbackfunc, '', '', 'T', null, null, null, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 거래처 소속 국가 팝업  텍스트 입력시 
//-------------------------------------------------------------------------
scwin.f_clntNationChk = function (calVal) {
  var VclntNationCd = clntNationCd.getValue();
  var VclntNationNm = clntNationNm.getValue();
  if (calVal == 'Cd') {
    clntNationNm.setValue("");
    if (VclntNationCd.length > 0) {
      udc_clntNationCd.cfCommonPopUp(scwin.udc_clntNationCd_callbackfunc, VclntNationCd, '', 'T', null, null, null, null, null, null, null, null, null, null, null, null);
    }
  } else if (calVal == 'Nm') {
    clntNationCd.setValue("");
    if (VclntNationNm.length > 0) {
      udc_clntNationCd.cfCommonPopUp(scwin.udc_clntNationCd_callbackfunc, '', VclntNationNm, 'T', null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }
};
scwin.udc_clntNationCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    clntNationCd.setValue(rtnList[0]); //국가코드
    clntNationNm.setValue(rtnList[1]); //국가명
    $c.gus.cfSetReturnValue($p, rtnList, clntNationCd, clntNationNm);
  }
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp();
};

//-------------------------------------------------------------------------
// 사업자등록정보 공통팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function () {
  udc_crn.setSelectId("retrieveCrnInfo");
  udc_crn.cfCommonPopUp(scwin.udc_crn_callbackfunc, '', '', "F", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null); //  사업자등록번호
};
scwin.udc_crn_callbackfunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    let vCrn = crn.getValue();
    let vClntNm = clntNm.getValue();
    let vZip = "";
    let vBusiAddr = "";
    let vTmpZip = zip.getValue();
    let vTmpAddr1 = addr1.getValue();
    let vTmpAddr2 = addr1.getValue();
    // debugger;

    crn.setValue(rtnList[0]); //사업자등록번호
    // debugger;

    if (vClntNm.trimAll() == "") {
      clntNm.setValue(rtnList[1]); //사업자명
    }
    clntBusiClsCd.setValue(rtnList[2]);
    repstNm.setValue(rtnList[3]);
    bizcondNm.setValue(rtnList[4]); //업태
    biztypeNm.setValue(rtnList[5]); //업종

    if (vTmpZip.trim() == "" && vTmpAddr1.trim() == "" && vTmpAddr2.trim() == "") {
      zip.setValue(rtnList[6]);
      addr1.setValue(rtnList[7]);
      addr2.setValue(rtnList[8]);
    }
    if (rtnList[6] != "" && rtnList[6].length > 5) {
      vZip = "(" + rtnList[6].substr(0, 3) + "-" + rtnList[6].substr(3, 6) + ") ";
    }
    vBusiAddr = vZip + rtnList[7] + "  " + rtnList[8];
    busiAddr.setValue(vBusiAddr);
    // debugger;
    ds_logisticsCustomer.setCellData(ds_logisticsCustomer.getRowPosition(), "clntNm", rtnList[1]);
    // 사업자등록번호가 거래처로 등록여부에 대한 메시지
    // scwin.udc_crn_checkPopup();
    for (var i = 0; i < ds_logisticsCustomer.getTotalRow(); i++) {
      if (ds_logisticsCustomer.getCellData(i, "crn") == crn.getValue()) {
        await $c.win.alert($p, "사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
        return false;
      }
    }
    // debugger;
  }
};
scwin.udc_crn_checkPopup = function () {
  udc_crn.setSelectId("retrieveClntCrnInfo");
  udc_crn.cfCommonPopUp(scwin.udc_retrieveClntCrnInfo_callbackfunc, crn.getValue(), "", null, null, null, null, null, null, null, null, null, null, "T", null, null); //  거래처정보
};
scwin.udc_retrieveClntCrnInfo_callbackfunc = async function (rtnList2) {
  console.log("rtnList2 rtnList2 : " + rtnList2);
  if (rtnList2 > 0) {
    await $c.win.alert($p, "사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
  }
};
scwin.udc_crn_callbackfunc2 = function (rtnList2) {
  if (rtnList2 > 0) {
    $c.win.alert($p, "사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
  } else {}
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
  let vPayCountRow = 0;
  let dl;
  if (vTabIndex == 1) {
    vPayCountRow = ds_collMoneyCond.getRowCount();
    dl = $c.gus.object($p, ds_collMoneyCond);
  } else if (vTabIndex == 2) {
    vPayCountRow = ds_payCond.getRowCount();
    dl = $c.gus.object($p, ds_payCond);
  } else if (vTabIndex == 3) {
    vPayCountRow = ds_payAcnt.getRowCount();
    dl = $c.gus.object($p, ds_payAcnt);
  }
  if (vPayCountRow > 0) {
    for (i = 0; i < vPayCountRow; i++) {
      vTmpVal = dl.getCellData(i, "seq");
      if (vTmpVal > vTmpSeq) {
        vTmpSeq = vTmpVal;
      }
    }
  }
  return Number(vTmpSeq) + 1;
};
scwin.f_clntHist = async function (e) {
  /*    
  if(ds_logisticsCustomer.CountRow <1)
  {
      alert("조회 먼저 하십시요.");
      return;
  }
  var clntNo=ds_logisticsCustomer.NameValue(ds_logisticsCustomer.RowPosition,'clntNo');		
  var rtnList = window.showModalDialog('/cm/bc/clnt/clntmgnt/zz_210_02_02p.jsp?paramTitle=거래처이력조회&clntNo='+clntNo
                                          ,null
                                          ,"dialogWidth:920px; dialogHeight:700px; status:No");		
  if(rtnList != null) {
      // = rtnValues[0];
  }
  */

  if (ds_logisticsCustomer.getRowCount() < 0) {
    $c.win.alert($p, "조회 먼저 하십시요.");
    return;
  }
  let rowCount = ds_logisticsCustomer.getRowPosition();
  let clntNo = ds_logisticsCustomer.getCellData(rowCount, 'clntNo');
  let data = {
    "paramTitle": "거래처이력조회",
    "clntNo": clntNo
  };
  let win_url = "/ui/cm/bc/clnt/clntmgnt/zz_210_02_02p.xml";
  let opts = {
    id: "smpPop",
    popupName: "거래처이력조회",
    modal: true,
    type: "browserPopup",
    width: 920,
    height: 700,
    title: "거래처이력조회"
  };
  let resultList = await $c.win.openPopup($p, win_url, opts, data);
};
scwin.udc_upperClntNo_onclickEvent = function (e) {
  scwin.f_openUpperClntPopUp();
};

//-------------------------------------------------------------------------
// 상위 거래처정보
//-------------------------------------------------------------------------
scwin.f_openUpperClntPopUp = function () {
  udc_upperClntNo.cfCommonPopUp(scwin.udc_upperClntNo_callbackfunc, '', '', "T", null, null, null, null, ",UPPER_CLNT", null, null, null, null, null, null, null); //  거래처정보
};
scwin.udc_upperClntNo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    upperClntNo.setValue(rtnList[0]); //거래처번호
    upperClntNm.setValue(rtnList[1]); //거래처명
  }
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openBligClntNoPopUp();
};

//-------------------------------------------------------------------------
// 청구 거래처정보
//-------------------------------------------------------------------------
scwin.f_openBligClntNoPopUp = function () {
  udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callbackfunc, '', '', "T", null, null, null, null, null, null, null, null, null, null, null, null); //  거래처정보
};
scwin.udc_bilgClntNo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    bilgClntNo.setValue(rtnList[0]); //거래처번호
    bilgClntNm.setValue(rtnList[1]); //거래처명
  }
};
scwin.sellClntYn_onchange = function (info) {
  console.log(info);
};

//-------------------------------------------------------------------------
// 달력 팝업
//-------------------------------------------------------------------------
scwin.f_PopupCalendar = function (target, dest) {
  // 입력창이 비활성 상태면 팝업 안됨
  if (!target.enable) return;

  //$c.gus.cfOpenCalendar(gr_emp, rowIndex, colid);

  //cfOpenCalendar(target);

  // 입력후 포커스 이동
  if (dest != null) dest.focus();
};
scwin.btCustomerFilePopup_onclick = function (e) {
  scwin.f_customerFileSet();
};
scwin.f_customerFileSet = async function () {
  let rowIndex = ds_customerFileDetail.getRowPosition() || 0;
  let data = {
    "fileNm": ds_customerFileDetail.getCellData(rowIndex, "fileNm"),
    "filePath": ds_customerFileDetail.getCellData(rowIndex, "filePath"),
    "fileTypeCd": ds_customerFileDetail.getCellData(rowIndex, "fileTypeCd"),
    "fileRegDt": ds_customerFileDetail.getCellData(rowIndex, "fileRegDt"),
    "rmk": ds_customerFileDetail.getCellData(rowIndex, "rmk")
  };

  /*
  var argPath = "";
  var dialSize = "";
  argPath = "./zz_210_02_02p_3.jsp";
  dialSize = "dialogWidth:500px; dialogHeight:350px; status:no; scroll:yes";
  
  var resultList = window.showModalDialog(argPath, argObject, dialSize);
  */

  let win_url = "/ui/cm/bc/clnt/clntmgnt/zz_210_02_02p_3.xml";
  let opts = {
    id: "smpPop",
    popupName: "첨부파일등록",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 800,
    popupTitle: "거래처 파일 등록"
  };
  let resultList = await $c.win.openPopup($p, win_url, opts, data);
  if (resultList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      let filePath = resultList[0];
      let fileName = resultList[1];
      if (fileName != "") {
        fileName = fileName + filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 6);
      }
      ds_customerFileDetail.setCellData(rowIndex, "filePath", filePath);
      ds_customerFileDetail.setCellData(rowIndex, "fileNm", fileName);
      ds_customerFileDetail.setCellData(rowIndex, "fileTypeCd", resultList[2]);
      ds_customerFileDetail.setCellData(rowIndex, "fileRegDt", resultList[3]);
      ds_customerFileDetail.setCellData(rowIndex, "rmk", resultList[4]);
    } else {
      ds_customerFileDetail.setCellData(rowIndex, "filePath", resultList[0]);
      ds_customerFileDetail.setCellData(rowIndex, "fileNm", resultList[1]);
      ds_customerFileDetail.setCellData(rowIndex, "fileTypeCd", resultList[2]);
      ds_customerFileDetail.setCellData(rowIndex, "fileRegDt", resultList[3]);
    }
  }
};
scwin.f_customerFileSearch = function () {
  let rowIndex = ds_logisticsCustomer.getRowPosition();
  let vClntNo = ds_logisticsCustomer.getCellData(rowIndex, "clntNo");
  let vRegFileDtFrom = regFileDtFrom.getValue().trim();
  let vRegFileDtTo = regFileDtTo.getValue().trim();
  let vFileTypeCd = lc_fileTypeCd.getValue();

  //ds_customerFileDetail.SyncLoad = true;
  //ds_customerFileDetail.DataID =  "/cm.bc.clnt.clntmgnt.RetrieveCustomerFileListCMD.do?clntNo=" + vClntNo+"&regFileDtFrom="+vRegFileDtFrom+"&regFileDtTo="+vRegFileDtTo+"&fileTypeCd="+vFileTypeCd;
  //ds_customerFileDetail.Reset();
  sbm_customerFileDetail.action = "/cm.bc.clnt.clntmgnt.RetrieveCustomerFileListCMD.do?clntNo=" + vClntNo + "&regFileDtFrom=" + vRegFileDtFrom + "&regFileDtTo=" + vRegFileDtTo + "&fileTypeCd=" + vFileTypeCd;
  $c.sbm.execute($p, sbm_customerFileDetail);
};

//-------------------------------------------------------------------------
// function name : f_Download
//-------------------------------------------------------------------------
scwin.f_DownloadCustomerFile = function (row) {
  if (row < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  } else {
    let fileName = ds_customerFileDetail.getCellData(row, "fileNm");
    var filePath = ds_customerFileDetail.getCellData(row, "filePath");
    if (filePath.trim().length == 0) {
      $c.win.alert($p, "선택하신 " + row + "행에 파일이 등록되어 있지 않습니다.");
    } else {
      if (filePath.indexOf(".") > 0) {
        //fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".")+4);
        $c.gus.cfDownloadFile($p, fileName, filePath);
      }
    }
  }
};

//-----------------------------------------------------------------------------
//  지급주기 조회.
//-----------------------------------------------------------------------------
scwin.f_payCycCdDsSet = async function (grpCd) {
  ds_payCycCd.removeAll();
  // 상의 하의 일체형 구분 별로 사이즈  조회.

  //ds_payCycCd.SyncLoad = true;
  //ds_payCycCd.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd="+grpCd+"&cd=&cdNm=";
  //ds_payCycCd.Reset();
  //ds_payCycCd

  const codeOptions = [{
    grpCd: grpCd,
    compID: ds_payCycCd
  }];
  let actionUrl = "/cm.zz.RetrieveCodeCMD.do?grpCd=" + grpCd + "&cd=&cdNm=";
  sbm_payCycCd.action = actionUrl;
  //sbm_customerFileDetail.action = "/cm.bc.clnt.clntmgnt.RetrieveCustomerFileListCMD.do?clntNo=" + vClntNo+"&regFileDtFrom="+vRegFileDtFrom+"&regFileDtTo="+vRegFileDtTo+"&fileTypeCd="+vFileTypeCd;
  var res = await $c.sbm.execute($p, sbm_payCycCd);
  if (res.responseJSON.resultDataSet[0].Code == "0") {
    ds_payCycCd.setJSON(res.responseJSON.GAUCE);
  }
  //$c.data.setCommonCode(codeOptions);
};

//-----------------------------------------------------------------------------
//  지급일자 조회.
//-----------------------------------------------------------------------------
scwin.f_payDdDsSet = async function (grpCd) {
  // 상의 하의 일체형 구분 별로 사이즈  조회.
  //ds_payDd.SyncLoad = true;
  //ds_payDd.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd="+grpCd+"&cd=&cdNm=&fltrCd1="+checkNum+"&fltrCd2=1";
  //ds_payDd.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd="+grpCd+"&cd=&cdNm=&fltrCd1="+checkNum;
  //ds_payDd.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd="+grpCd+"&cd=&cdNm=";
  //ds_payDd.Reset();
  /* const codeOptions = [
      { grpCd: grpCd, compID: ds_payDd }
  ];
  $c.data.setCommonCode(codeOptions); */
  /** 
  const codeOptions = [
      { grpCd: grpCd, compID: "gr_tb_Grid2:payDd" }
  ];
  $c.data.setCommonCode(codeOptions); 
  */
  ds_payDd.removeAll();
  let actionUrl = "/cm.zz.RetrieveCodeCMD.do?grpCd=" + grpCd + "&cd=&cdNm=";
  sbm_payDd.action = actionUrl;
  var res = await $c.sbm.execute($p, sbm_payDd);
  if (res.responseJSON.resultDataSet[0].Code == "0") {
    ds_payDd.setJSON(res.responseJSON.GAUCE);
  }
};
scwin.btn_OzReport_onclick = function (e) {
  scwin.f_OzReport();
};

//-------------------------------------------------------------------------
// 오즈 출력
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  //과거
  /**
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  var odiParam = new ODIParam("fm_100_08_01");
  odiParam.add("P_CLNT_NO", ds_logisticsCustomer.NameValue(ds_logisticsCustomer.RowPosition,"clntNo"));
  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  var formParam = new FormParam();
  //formParam.add("form1","폼1");
  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  var viewerParam = new ViewerParam();
  cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fm/stdinfomgnt/fm_100_08_01.ozr", odiParam, viewerParam, formParam);
  //	cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_05_01_2.ozr", odiParam, viewerParam, formParam);   
  */
  //cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fm/stdinfomgnt/fm_100_08_01.ozr", odiParam, viewerParam, formParam);

  var clntNo = ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "clntNo");
  let data = {
    reportName: "/ac/fm/stdinfomgnt/fm_100_08_01.ozr",
    odiName: "fm_100_08_01",
    odiParam: {
      "P_CLNT_NO": clntNo
      //"pClntNo": clntNo
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

/*
<!-- 수금수단 Combo 선택 -->
 language=JavaScript for=tb_Grid1 event=OnCloseUp(row,colid)>
*/
scwin.gr_tb_Grid1_oneditend = function (rowIndex, columnIndex, value) {
  let vCollMoneyCntShtCd = ds_collMoneyCond.getCellData(rowIndex, "collMoneyCntShtCd"); // 수금수단

  var colid = ds_collMoneyCond.getColumnID(columnIndex);
  if (colid == "collMoneyCntShtCd") {
    if (vCollMoneyCntShtCd == "20") {
      // 수금수단이 어음인 경우
      ds_collMoneyCond.setCellData(rowIndex, "draftDdCnt", 0);
      gr_tb_Grid1.setCellReadOnly(rowIndex, "draftDdCnt", true);
    } else {
      // 수금수단이 현금인 경우
      ds_collMoneyCond.setCellData(rowIndex, "draftDdCnt", 0);
      gr_tb_Grid1.setCellReadOnly(rowIndex, "draftDdCnt", false);
    }
  } else if (colid == "stmtPrdClsCd") {
    let vstmtPrdClsCd = ds_collMoneyCond.getCellData(rowIndex, "stmtPrdClsCd");

    //tb_Grid1.ColumnProp("stmtPrdDd","Edit") = "ANY";		
    //ds_collMoneyCond.NameValue(row,"stmtPrdDd") = "30";

    gr_tb_Grid1.setCellReadOnly(rowIndex, "stmtPrdDd", false);
    ds_collMoneyCond.setCellData(rowIndex, "stmtPrdDd", 30);
  }
};

/*
<!-- 지급주기 Combo 선택 -->
 language=JavaScript for=tb_Grid2 event=OnDropDown(row,colid)>
*/
scwin.gr_tb_Grid2_onbeforeedit = async function (rowIndex, columnIndex, value) {
  let checkNum = 0;
  let row = rowIndex;
  let colid = gr_tb_Grid2.getColumnID(columnIndex);
  let payCycCd = ds_payCond.getCellData(row, "payCycCd");
  if (colid == "payDd") {
    await scwin.f_payCycCdDsSet("FM041");
    for (i = 0; i < ds_payCycCd.getRowCount(); i++) {
      if (payCycCd == ds_payCycCd.getCellData(row, "cd")) {
        checkNum = ds_payCycCd.getCellData(i, "fltrCd1");
      }
    }
    if (checkNum == 1) {
      await scwin.f_payDdDsSet("ZZ522");
    } else if (checkNum == 2) {
      await scwin.f_payDdDsSet("ZZ548");
    }
  } else if (colid == "cashRt") {
    scwin.cashRt = value;
  } else if (colid == "draftRt") {
    scwin.draftRt = value;
  }
};
scwin.gr_tb_Grid2_onafteredit = async function (rowIndex, columnIndex, value) {
  let colid = gr_tb_Grid2.getColumnID(columnIndex);
  if (colid == "cashRt") {
    if (ds_payCond.getCellData(rowIndex, "cashRt") < 0 || ds_payCond.getCellData(rowIndex, "cashRt") > 100) {
      await $c.win.alert($p, "현금비율은 입력값이 100보다 클 수 없습니다.");
      ds_payCond.setCellData(rowIndex, "cashRt", scwin.cashRt);
      return;
    }
    ds_payCond.setCellData(rowIndex, "draftRt", 100 - ds_payCond.getCellData(rowIndex, "cashRt"));
  } else if (colid == "draftRt") {
    if (ds_payCond.getCellData(rowIndex, "draftRt") < 0 || ds_payCond.getCellData(rowIndex, "draftRt") > 100) {
      await $c.win.alert($p, "어음비율은 입력값이 100보다 클 수 없습니다.");
      ds_payCond.setCellData(rowIndex, "draftRt", scwin.draftRt);
      return;
    }
    ds_payCond.setCellData(rowIndex, "cashRt", 100 - ds_payCond.getCellData(rowIndex, "draftRt"));
  }
};

/*
<!-- 지급일 Combo 선택 -->
 language=JavaScript for=tb_Grid2 event=OnCloseUp(row,colid)>
*/
scwin.gr_tb_Grid2_oneditend = async function (rowIndex, columnIndex, value) {
  let row = rowIndex;
  let colid = gr_tb_Grid2.getColumnID(columnIndex);
  let payDd = ds_payCond.getCellData(row, "payDd");
  let payCycCd = ds_payCond.getCellData(row, "payCycCd"); // AsIs 바뀐 후 값 우린 전값 value 가 바뀐후 값이다.
  let payCondRowPosition = ds_payCond.getRowPosition();
  let vPayCntShtCd = ds_payCond.getCellData(row, "payCntShtCd");
  let checkNum = 0;

  // 지급주기(payCycCd) 변경 시
  if (colid == "payCycCd") {
    if (value == 0) {
      // 수시인 경우
      // tb_Grid2.ColumnProp("payDd","Edit") = "None";
      // ▶ WebSquare 변환
      gr_tb_Grid2.setCellReadOnly(row, "payDd", true);

      // ds_payCond.NameValue(row,"payDd") = "";
      ds_payCond.setCellData(row, "payDd", "");
    } else {
      // tb_Grid2.ColumnProp("payDd","Edit") = "ANY";
      gr_tb_Grid2.setCellReadOnly(row, "payDd", false);

      // ds_payCond.NameValue(row,"payDd") = "30";
      ds_payCond.setCellData(row, "payDd", "30");
    }

    // f_payCycCdDsSet("FM041");
    await scwin.f_payCycCdDsSet("FM041");
    for (let i = 0; i < ds_payCycCd.getRowCount(); i++) {
      if (value == ds_payCycCd.getCellData(i, "cd")) {
        checkNum = ds_payCycCd.getCellData(i, "fltrCd1");
      }
    }
    if (checkNum == 1) {
      await scwin.f_payDdDsSet("ZZ522");
    } else if (checkNum == 2) {
      await scwin.f_payDdDsSet("ZZ548");
    }
  }

  // 지급구분(payCntShtCd) 변경 시
  else if (colid == "payCntShtCd") {
    if (value == "25" || value == "50") {
      // tb_Grid2.ColumnProp("draftDdCntCd","Edit") = "ANY";
      gr_tb_Grid2.setCellReadOnly(row, "draftDdCntCd", false);
    } else {
      // tb_Grid2.ColumnProp("draftDdCntCd","Edit") = "none";
      gr_tb_Grid2.setCellReadOnly(row, "draftDdCntCd", true);
      ds_payCond.setCellData(row, "draftDdCntCd", "");
    }
  }
};

// 지급계좌 수정 체크
scwin.gr_tb_Grid3_onafteredit = function (rowIndex, columnIndex, value) {
  let row = ds_payAcnt.getRowPosition();
  let colid = gr_tb_Grid3.getColumnID(columnIndex);
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
      return false;
    }
  }
};

/*
<!-- 수금조건 PopUp 호출  -->
 language=JavaScript for=tb_Grid1 event=OnPopup(Row,Colid,data)>
OnPopup(Row,Colid,data)	
GridColumn의 EditStyle이 Popup Style로 정의되어 있는 경우, 
PopupDialog를 실행시키기 위하여 해당 Column의 Popup Button을 Click할 때 발생한다.	
"그리드 셀 속성 inputType =textImage로 변경하고
imageClickFunction에 메소드 작성"
*/
scwin.gr_tb_Grid1_ontextimageclick = function (rowIndex, columnIndex) {
  let Colid = gr_tb_Grid1.getColumnID(columnIndex);
  let Row = rowIndex;
  if (Colid == "adptDt") {
    //cfOpenCalendar(tb_Grid1, Row, Colid); // 달력팝업
    for (var i = 0; i < ds_collMoneyCond.getRowCount(); i++) {
      if (Row != i && ds_collMoneyCond.getCellData(Row, "adptDt") == ds_collMoneyCond.getCellData(i, "adptDt")) {
        $c.win.alert($p, "선택하신 적용일자가 이미 입력이 되어있습니다.");
        ds_collMoneyCond.setCellData(Row, "adptDt", "");
        return false;
      }
    }
  } else if (Colid == "collMoneyAcctDeptNm") {
    scwin.f_openDeptPopUp4CollMoney(); // 귀속부서팝업(수금조건용)
  } else if (Colid == "collMoneyBankbookNo") {
    scwin.f_openBankBookPopUp(); // 통장번호팝업
  }
};

/*
<!-- 지급조건 PopUp 호출  -->
 language=JavaScript for=tb_Grid2 event=OnPopup(Row,Colid,data)>
*/
scwin.gr_tb_Grid2_ontextimageclick = function (rowIndex, columnIndex) {
  let Colid = gr_tb_Grid2.getColumnID(columnIndex);
  if (Colid == "adptDt") {
    //cfOpenCalendar(tb_Grid2, Row, Colid); // 달력팝업
  } else if (Colid == "payAcctDeptNm") {
    scwin.f_openDeptPopUp(); // 귀속부서팝업
  } else if (Colid == "mchtClntNm") {
    scwin.f_openMchtClntPopUp(); // 화주명팝업
  }
};

//-------------------------------------------------------------------------
// 통장번호팝업
//-------------------------------------------------------------------------
scwin.f_openBankBookPopUp = function () {
  udc_BankBookCdInfo.setSelectId("retrieveBankBookCdInfo");
  udc_BankBookCdInfo.cfCommonPopUp(scwin.udc_BankBookCdInfo_callbackfunc, '', '', "T", null, null, "80,10,128,100,120,60,120,100,60,70", "2,4,6,9,10", null, null, null, null, null, null, null, null, null); //  
};
scwin.udc_BankBookCdInfo_callbackfunc = function (rtnList) {
  //통장코드
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    let collMoneyCondRowPosi = ds_collMoneyCond.getRowPosition();
    ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyBankbookNo", rtnList[0]); //통장번호
  }
};

//-------------------------------------------------------------------------
// 은행팝업
//-------------------------------------------------------------------------
scwin.f_openBankPopUp = function () {
  udc_BankCdInfo.setSelectId("retrieveBankCdInfo");
  udc_BankCdInfo.cfCommonPopUp(scwin.udc_BankCdInfo_callbackfunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  
};
scwin.udc_BankCdInfo_callbackfunc = function (e) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    let payCondRowPosi = ds_payAcnt.getRowPosition();
    ds_payAcnt.setCellData(payCondRowPosi, "bankCd", rtnList[0]); //은행코드
    ds_payAcnt.setCellData(payCondRowPosi, "bankNm", rtnList[1]); //은행명
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp = async function (idx) {
  vTitle = "지급부서, 지급부서코드, 지급부서명";
  udc_DeptCdInfo.setSelectId("retrieveAcctDeptCdInfo");
  udc_DeptCdInfo.cfCommonPopUp(scwin.udc_DeptCdInfo2_callbackfunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //  
};
scwin.udc_DeptCdInfo2_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    ds_payCond.setCellData(ds_payCond.getRowPosition(), "payAcctDeptCd", rtnList[0]); // 지급계약부서코드
    ds_payCond.setCellData(ds_payCond.getRowPosition(), "payAcctDeptNm", rtnList[1]); // 지급계약부서코드
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업 (수금조건용)
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp4CollMoney = async function () {
  let vTitle = "수금부서, 수금부서코드, 수금부서명";
  udc_DeptCdInfo.setSelectId("retrieveAcctDeptCdInfo");
  rtnList = udc_DeptCdInfo.cfCommonPopUp(scwin.udc_DeptCdInfo_callbackfunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //  
};
scwin.udc_DeptCdInfo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    collMoneyCondRowPosi = ds_collMoneyCond.getRowPosition();
    ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptCd", rtnList[0]); //수금귀속부서코드
    ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptNm", rtnList[1]); //수금귀속부서명
  } else {
    collMoneyCondRowPosi = ds_collMoneyCond.getRowPosition();
    ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptCd", ""); //수금귀속부서코드
    ds_collMoneyCond.setCellData(collMoneyCondRowPosi, "collMoneyAcctDeptNm", ""); //수금귀속부서명
  }
};

//-------------------------------------------------------------------------
// 화주팝업
//-------------------------------------------------------------------------
scwin.f_openMchtClntPopUp = function () {
  udc_ClntList.setSelectId("retrieveClntList");
  udc_ClntList.cfCommonPopUp(scwin.udc_ClntList_callbackfunc, '', '', "T", null, null, null, null, null, null, null, null, null, null, null, "화주거래처,거래처번호,화주거래처명"); // 화주거래처
};
scwin.udc_ClntList_callbackfunc = function () {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    ds_payCond.setCellData(ds_payCond.getRowPosition(), "mchtClntNo", rtnList[0]); // 화주거래처번호
    ds_payCond.setCellData(ds_payCond.getRowPosition(), "mchtClntNm", rtnList[1]); // 화주거래처명
  }
};

/*
<!-- Gauce Tab선택시 행추가, 행수정, 행삭제 버튼 활성화 비활성화  -->
 language=JavaScript for=mxTab event=OnSelChanged(index)>
*/
scwin.tac_tab_onchange = function (tabId, index, userTabId) {
  if (index == 0) {
    if (scwin.g_sLoginDept == "00009") {
      //채권팀
      btn_table0.show();
    } else {
      btn_table0.hide();
    }
    scwin.txt_payIdx = "1";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      // 0:신규, 1:수정, 2:조회, 3:저장
      $c.gus.cfEnableBtnOnly($p, [bAddRow, bUpdateRow, bDeleteRow]);
    }
    tac_tab.hideTab(6);
  } else if (index == 1) {
    btn_table0.show();
    scwin.txt_payIdx = "2";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      // 0:신규, 1:수정, 2:조회, 3:저장
      $c.gus.cfEnableBtnOnly($p, [bAddRow1, bUpdateRow1, bDeleteRow1]);
    }
    tac_tab.hideTab(6);
  } else if (index == 2) {
    btn_table0.show();
    scwin.txt_payIdx = "3";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      $c.gus.cfEnableBtnOnly($p, [bAddRow2, bUpdateRow2, bDeleteRow2]);
    }
    tac_tab.hideTab(6);
  } else if (index == 3) {
    btn_table0.show();
    scwin.txt_payIdx = "4";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      $c.gus.cfEnableBtnOnly($p, [bAddRow3, bUpdateRow3, bDeleteRow3]);
    }
    tac_tab.hideTab(6);
  } else if (index == 4) {
    //매입거래처
    btn_table0.show();
    scwin.txt_payIdx = "5";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      $c.gus.cfEnableBtnOnly($p, [bAddRow4, bUpdateRow4, bDeleteRow4]);
    }
    //mxTab_page7.style.display = 'none';
    tac_tab.hideTab(6);
  } else if (index == 5) {
    // 가상계좌
    gr_tb_Grid6_btn.hide();
  } else if (index == 6) {
    btn_table0.show();
    $c.gus.cfEnableObj($p, lc_fileTypeCd, true); // 자료구분
    scwin.txt_payIdx = "7";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      $c.gus.cfEnableBtnOnly($p, [bAddRow5, bUpdateRow5, bDeleteRow5, btCustomerFilePopup]);
    } else {
      $c.gus.cfDisableBtn($p, [btCustomerFilePopup]);
    }
    //mxTab_page7.style.display = 'block';
    tac_tab.showTab(6);
  }
  if (index == 3) {
    btn_table0.hide(); // ToBe랑 AsIs 버튼 영역이 다르다.
  } else {
    btn_table0.show(); //
  }
};

/*
<!-- LuxCombo 조회조건 선택  -->
 language=JavaScript for="lux_sysCls" event=onSelChange()>
*/
scwin.lux_sysCls_onchange = function (info) {
  scwin.txt_sysCls = lux_sysCls.getValue();
};

/*
<!-- LuxCombo 조회조건2 선택  -->
 language=JavaScript for="lux_clntLupCond" event=onSelChange()>
*/
scwin.lux_clntLupCond_onchange = function (info) {
  scwin.txt_clntLupCond = lux_clntLupCond.getValue();
};
scwin.b_Copy2_onclick = function (e) {
  scwin.f_Copy();
};
scwin.b_Create2_onclick = function (e) {
  scwin.f_Create();
};
scwin.b_Update2_onclick = function (e) {
  scwin.f_Update();
};
scwin.b_Cancel2_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.b_Save2_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 매입거래처 SEQ할당
//-------------------------------------------------------------------------
scwin.f_SetPurchClntSEQ = function () {
  let vTmpSeq = 0;
  let vTmpVal = 0;
  let vPurchClntCountRow = ds_purchase.getRowCount();
  if (vPurchClntCountRow > 1) {
    for (i = 0; i < ds_purchase.getRowCount(); i++) {
      vTmpVal = ds_purchase.getCellData(i, "seq");
      if (vTmpVal > vTmpSeq) {
        vTmpSeq = vTmpVal;
      }
    }
  }
  return Number(vTmpSeq) + 1;
};

//-------------------------------------------------------------------------
// 매입거래처 신규
//-------------------------------------------------------------------------
scwin.f_PurchAddRow = function (e) {
  gr_purchase.setGridReadOnly(false);
  let row = ds_purchase.insertRow();
  let vPurchClntSeq = 0;
  vPurchClntSeq = scwin.f_SetPurchClntSEQ();
  //alert( vPurchClntSeq );

  // 지급조건과 지급계약에 거래처번호와 SEQ 할당
  //let purchaseRowPosi = ds_purchase.getRowPosition();
  let vClntNo = ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "clntNo");
  ds_purchase.setCellData(row, "clntNo", vClntNo);
  ds_purchase.setCellData(row, "seq", vPurchClntSeq);
  ed_totalRows2.setValue(ds_purchase.getRowCount()); // 매입거래처 Grid
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_PurchDelMarked = function () {
  //ds_purchase.DeleteMarked();
  $c.data.deleteRow($p, ds_purchase);
  ed_totalRows2.setValue(ds_purchase.getRowCount()); // 매입거래처 Grid
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_PurchUndo = function () {
  //ds_purchase.UndoAll();
  //ds_purchase.undoAll();
  scwin.fn_undo(ds_purchase);
  ed_totalRows2.setValue(ds_purchase.getRowCount()); // 매입거래처 Grid
};

//-------------------------------------------------------------------------
// 지급조건, 지급계좌 신규
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (scwin.txt_createYn == "0" && scwin.txt_updateYn == "0") {
    $c.win.alert($p, "추가하시기전 신규등록모드나 수정모드로 전환하십시오.");
    return false;
  }
  let idx = scwin.txt_payIdx;
  let row;
  if (idx == 1) {
    //수금조건
    scwin.txt_payIdx = "1";
    row = ds_collMoneyCond.insertRow();
    ds_collMoneyCond.setRowPosition(row);

    // 지급조건과 지급계약에 거래처번호와 SEQ 할당
    let collMoneyCondRowPos = ds_collMoneyCond.getRowPosition();
    ds_collMoneyCond.setCellData(collMoneyCondRowPos, "clntNo", clntNo.getValue());
    if (collMoneyCondRowPos == 0) {
      ds_collMoneyCond.setCellData(collMoneyCondRowPos, "seq", 1);
    } else {
      ds_collMoneyCond.setCellData(collMoneyCondRowPos, "seq", scwin.f_SetSEQ());
    }
    ds_collMoneyCond.setCellData(collMoneyCondRowPos, "collMoneyCrcCd", "KRW");
    ds_collMoneyCond.setCellData(collMoneyCondRowPos, "confirmYn", "0");
  } else if (idx == 2) {
    //지급조건
    row = ds_payCond.insertRow();
    ds_payCond.setRowPosition(row);

    // 지급조건과 지급계약에 거래처번호와 SEQ 할당
    let payCondRowPos = ds_payCond.getRowPosition();
    ds_payCond.setCellData(payCondRowPos, "clntNo", clntNo.getValue());
    ds_payCond.setCellData(payCondRowPos, "cashRt", 100);
    if (payCondRowPos == 0) {
      ds_payCond.setCellData(payCondRowPos, "seq", 1);
    } else {
      ds_payCond.setCellData(payCondRowPos, "seq", scwin.f_SetSEQ());
    }
    ds_payCond.setCellData(payCondRowPos, "payCrcCd", "KRW");
    gr_tb_Grid2.setCellReadOnly(payCondRowPos, "confirmYn", true);
  } else if (idx == 3) {
    //지급계좌
    row = ds_payAcnt.insertRow();
    ds_payAcnt.setRowPosition(row);
    let payAcntRowPos = ds_payAcnt.getRowPosition();
    ds_payAcnt.setCellData(payAcntRowPos, "clntNo", clntNo.getValue());
    if (payAcntRowPos == 0) {
      ds_payAcnt.setCellData(payAcntRowPos, "seq", 1);
    } else {
      ds_payAcnt.setCellData(payAcntRowPos, "seq", scwin.f_SetSEQ());
    }
    ds_payAcnt.setCellData(payAcntRowPos, "confirmYn", "0");
  } else if (idx == 5) {
    //매입계약서
    row = ds_contractFileDetail.insertRow();
    ds_contractFileDetail.setRowPosition(row);
    let contractFileDetailRowPos = ds_contractFileDetail.getRowPosition();
    ds_contractFileDetail.setCellData(contractFileDetailRowPos, "clntNo", clntNo.getValue());
  } else if (idx == 7) {
    row = ds_customerFileDetail.insertRow();
    ds_customerFileDetail.setRowPosition(row);
    let customerFileDetailRowPos = ds_customerFileDetail.getRowPosition();
    ds_customerFileDetail.setCellData(customerFileDetailRowPos, "clntNo", clntNo.getValue());
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtnOnly($p, [b_Create, b_Create2]);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delMarked = function () {
  if (scwin.txt_payIdx == 1) {
    if (ds_collMoneyCond.getCellData(ds_collMoneyCond.getRowPosition(), "confirmYn") == "1") $c.gus.cfAlertMsg($p, "확인된 건은 삭제 할 수 없습니다.");else $c.data.deleteRow($p, ds_collMoneyCond);
  } else if (scwin.txt_payIdx == 2) {
    if (ds_payCond.getCellData(ds_payCond.getRowPosition(), "confirmYn") == "1") $c.gus.cfAlertMsg($p, "확인된 건은 삭제 할 수 없습니다.");else $c.data.deleteRow($p, ds_payCond);
  } else if (scwin.txt_payIdx == 3) {
    if (ds_payAcnt.getCellData(ds_payAcnt.getRowPosition(), "confirmYn") == "1") $c.gus.cfAlertMsg($p, "확인된 건은 삭제 할 수 없습니다.");else $c.data.deleteRow($p, ds_payAcnt);
  } else if (scwin.txt_payIdx == 5) {
    $c.gus.cfAlertMsg($p, "등록된 계약서 내용은 삭제 할 수 없습니다.");
  } else if (scwin.txt_payIdx == 7) {
    $c.data.deleteRow($p, ds_customerFileDetail);
  }
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  var rp;
  var rs;
  if (scwin.txt_payIdx == 1) {
    rs = ds_collMoneyCond.getRowStatus(ds_collMoneyCond.getRowPosition());
    rp = ds_collMoneyCond.getRowPosition();
    if (rs != "C") {
      ds_collMoneyCond.undoRow(rp);
    } else {
      ds_collMoneyCond.removeRow(rp);
      if (rp >= ds_collMoneyCond.getRowCount() - 1) {
        var maxIdx = ds_collMoneyCond.getRowCount() - 1;
        ds_collMoneyCond.setRowPosition(maxIdx);
        gr_tb_Grid1.setFocusedCell(maxIdx, 0, false);
      }
    }
  } else if (scwin.txt_payIdx == 2) {
    rs = ds_payCond.getRowStatus(ds_payCond.getRowPosition());
    rp = ds_payCond.getRowPosition();
    if (rs != "C") {
      ds_payCond.undoRow(rp);
    } else {
      ds_payCond.removeRow(rp);
      if (rp >= ds_payCond.getRowCount() - 1) {
        var maxIdx = ds_payCond.getRowCount() - 1;
        ds_payCond.setRowPosition(maxIdx);
        gr_tb_Grid2.setFocusedCell(maxIdx, 0, false);
      }
    }
  } else if (scwin.txt_payIdx == 3) {
    rs = ds_payAcnt.getRowStatus(ds_payAcnt.getRowPosition());
    rp = ds_payAcnt.getRowPosition();
    if (rs != "C") {
      ds_payAcnt.undoRow(rp);
    } else {
      ds_payAcnt.removeRow(rp);
      if (rp >= ds_payAcnt.getRowCount() - 1) {
        var maxIdx = ds_payAcnt.getRowCount() - 1;
        ds_payAcnt.setRowPosition(maxIdx);
        gr_tb_Grid3.setFocusedCell(maxIdx, 0, false);
      }
    }
  } else if (scwin.txt_payIdx == 5) {
    rs = ds_contractFileDetail.getRowStatus(ds_contractFileDetail.getRowPosition());
    rp = ds_contractFileDetail.getRowPosition();
    if (rs != "C") {
      ds_contractFileDetail.undoRow(rp);
    } else {
      ds_contractFileDetail.removeRow(rp);
      if (rp >= ds_contractFileDetail.getRowCount() - 1) {
        var maxIdx = ds_contractFileDetail.getRowCount() - 1;
        ds_contractFileDetail.setRowPosition(maxIdx);
        gr_tb_Grid5.setFocusedCell(maxIdx, 0, false);
      }
    }
  } else if (scwin.txt_payIdx == 7) {
    rs = ds_customerFileDetail.getRowStatus(ds_customerFileDetail.getRowPosition());
    rp = ds_customerFileDetail.getRowPosition();
    if (rs != "C") {
      ds_customerFileDetail.undoRow(rp);
    } else {
      ds_customerFileDetail.removeRow(rp);
      if (rp >= ds_customerFileDetail.getRowCount() - 1) {
        var maxIdx = ds_customerFileDetail.getRowCount() - 1;
        ds_customerFileDetail.setRowPosition(maxIdx);
        gr_tb_Grid7.setFocusedCell(maxIdx, 0, false);
      }
    }
    // ds_customerFileDetail.undoRow(ds_customerFileDetail.getRowPosition());
  }
};
scwin.b_Copy_onclick = function (e) {
  scwin.f_Copy();
};
scwin.b_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.b_Update_onclick = function (e) {
  scwin.f_Update();
};
scwin.b_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.b_Save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_ContentsEnable();
  let row = ds_logisticsCustomer.insertRow();
  ds_logisticsCustomer.setRowPosition(row);
  gr_logisticsCustomer.setFocusedCell(row, 0, false);

  //setPurchaseClntHeader();
  //setContractFileDetailHeader();

  scwin.txt_createYn = "1";
  scwin.txt_updateYn = "0";
  scwin.txt_saveType = "0"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소

  //sellClntYn.checked= true;
  /*
  bizDivCntrYn.checked= true;
  transBizYn.checked= true;
  bizDomTransYn.checked= true;
  */
  bizDivCntrYn.setValue(1);
  transBizYn.setValue(1);
  bizDomTransYn.setValue(1);
  $c.gus.cfEnableObj($p, sellClntClsCd, true); // 매출거래처구분

  //intrlnsClsCd.Enable =true;
  //intrlnsClsCd.Index = 0;

  intrlnsClsCd.setReadOnly(false);
  intrlnsClsCd.setSelectedIndex(0);
  clntBusiClsCd.setSelectedIndex(0);
  sellClntClsCd.setSelectedIndex(1);
  tplGrpCd.setSelectedIndex(0);
  clntDelYn.setValue(0); // 삭제여부(사용여부: 예)
  copCoEstmtYn.setValue(1); // 협력업체평가여부 (예)
  inatPartnerYn.setValue(0); // 국제물류파트너 (아니오)
  elecAuthTrgtYn.setValue(0); // 매입계산서역발행여부 (미적용)
  $c.gus.cfEnableObj($p, elecAuthTrgtYn, false); // 매입계산서역발행여부
  receiveSellingYn.setValue(0); // 영수거래처 여부
  mgntTrgtClntYn.setValue(0); // 관리거래처여부 (아니오)
  $c.gus.cfDisableObjects($p, [mgntTrgtClntYn]);

  /*
  tb_Grid1.Editable = true;
  tb_Grid2.Editable = true;
  tb_Grid3.Editable = true;
  tb_Grid6.Editable = true;    
  tb_Grid5.Editable = true;
  */
  gr_tb_Grid1.setGridReadOnly(false);
  gr_tb_Grid2.setGridReadOnly(false);
  gr_tb_Grid3.setGridReadOnly(false);
  gr_tb_Grid6.setGridReadOnly(false);
  gr_tb_Grid5.setGridReadOnly(false);

  // debugger;

  $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Copy, b_Create2, b_Update2, b_Copy2, btAddRow, btDeleteRow, btUndoRow, btFilePopup, btFileImport]);

  // debugger;

  if (tac_tab.getSelectedTabIndex() == 6) {
    $c.gus.cfEnableBtnOnly($p, [btCustomerFilePopup]);
  }
  if (scwin.g_sLoginDept != "00009") {
    //채권팀
    $c.gus.cfEnableObj($p, sellClntYn, false); // 매출 비활성화
    //btn_table0.style.visibility = 'hidden';
    btn_table0.hide();
  } else {
    //btn_table0.style.visibility = 'visible';
    btn_table0.show();
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.f_ContentsEnable();
  $c.gus.cfDisableObjects($p, [mgntTrgtClntYn]); // 비활성화
  let vSellClntYn = ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "sellClntYn"); // 매출거래처 여부
  let vPchsClntYn = ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "pchsClntYn"); // 매입거래처 여부

  if (vSellClntYn == 1) {
    $c.gus.cfEnableObj($p, sellClntClsCd, true); // 매출거래처구분
    $c.gus.cfDisableBtn($p, [bAddRow, bUpdateRow, bDeleteRow, bAddRow1, bUpdateRow1, bDeleteRow1, bAddRow2, bUpdateRow2, bDeleteRow2, bAddRow3, bUpdateRow3, bDeleteRow3, bAddRow4, bUpdateRow4, bDeleteRow4, bAddRow5, bUpdateRow5, bDeleteRow5, btAddRow, btDeleteRow, btUndoRow, btFilePopup, btFileImport, btCustomerFilePopup]);
  }
  if (vPchsClntYn == 1) {
    $c.gus.cfEnableObjects($p, [elecAuthTrgtYn]);
    $c.gus.cfEnableObj($p, sellClntClsCd, true); // 매출거래처구분- 매입거래처도 함께사용
    gr_purchase.setGridReadOnly(false);
    $c.gus.cfEnableBtnOnly($p, [bAddRow, bUpdateRow, bDeleteRow, bAddRow1, bUpdateRow1, bDeleteRow1, bAddRow2, bUpdateRow2, bDeleteRow2, bAddRow3, bUpdateRow3, bDeleteRow3, bAddRow4, bUpdateRow4, bDeleteRow4, bAddRow5, bUpdateRow5, bDeleteRow5, btAddRow, btDeleteRow, btUndoRow, btFilePopup, btFileImport, btCustomerFilePopup]); // 매입거래처 버튼
  }

  /* 2014 07 28 조정욱 : 관리거래처여부 수정불가하도록 요청
  if(mgntTrgtClntYn.CodeValue == 1){
      cfEnableObjects([mgntTrgtClntYn]);
  }else{
      cfDisableObjects([mgntTrgtClntYn]);
  }
  */
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "1"; // 수정인경우
  scwin.txt_saveType = "1"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소

  $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Copy, b_Create2, b_Update2, b_Copy2]);
  let cnt = 0;
  for (var i = 0; i < ds_payCond.getRowCount(); i++) {
    if (ds_payCond.getCellData(i, "confirmYn") == 1) {
      cnt++;
    }
  }
  if (cnt > 0) {
    $c.gus.cfEnableObj($p, payDtChgYn, false);
  } else {
    $c.gus.cfEnableObj($p, payDtChgYn, true);
  }
  if (scwin.g_sLoginDept != "00009") {
    //채권팀
    gr_tb_Grid1.setReadOnly("grid", true);
    $c.gus.cfEnableObj($p, sellClntYn, false); // 매출 비활성화
    $c.gus.cfEnableObj($p, receiveSellingYn, false); // 영수거래처 비활성화

    if (vSellClntYn == 1 && vPchsClntYn == 1 || vSellClntYn == 0 && vPchsClntYn == 1) {
      $c.gus.cfEnableObj($p, clntDelYn, true); // 거래사용여부
    } else if (vSellClntYn == 1 && vPchsClntYn == 0) {
      $c.gus.cfEnableObj($p, clntDelYn, false); // 거래사용여부
    }
    if (vSellClntYn == 0 && vPchsClntYn == 1) {
      $c.gus.cfEnableObj($p, receiveSellingYn, true); // 영수거래처 활성화
    }
  } else {
    $c.gus.cfEnableObj($p, clntDelYn, true); // 거래사용여부
  }
  if (tac_tab.getSelectedTabIndex() == 6) {
    $c.gus.cfEnableBtnOnly($p, [btCustomerFilePopup]);
  }

  //사업자번호 관련 수정 Disable
  $c.gus.cfEnableObj($p, crn_search, false);
  $c.gus.cfEnableObj($p, crn, false);
};

//-------------------------------------------------------------------------
// 거래처 등록, 수정 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  scwin.f_ContentsDisable();

  // 취소 확인
  let vLogisticsCustomerCount = ds_logisticsCustomer.getRowCount();
  scwin.fn_undo(ds_logisticsCustomer);
  scwin.fn_undo(ds_purchase);
  scwin.fn_undo(ds_contractFileDetail);

  /** 
      for( var idx = 0; idx < ds_logisticsCustomer.getRowCount();idx++){
          var rStat = ds_logisticsCustomer.getRowStatus(idx);
          if(rStat == 'C') {
              //신규면 삭제
              ds_logisticsCustomer.removeRow(idx);
          } else if(rStat == 'U') {
              ds_logisticsCustomer.undoRow(idx);
          }
      }
      */

  //ds_logisticsCustomer.undoAll();
  //ds_purchase.undoAll();
  //ds_contractFileDetail.undoAll();

  $c.gus.cfDisableObjects($p, [elecAuthTrgtYn]);
  if (ds_logisticsCustomer.getRowCount() > 0) {
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Save, b_Cancel2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, bAddRow1, bUpdateRow1, bDeleteRow1, bAddRow2, bUpdateRow2, bDeleteRow2, bAddRow3, bUpdateRow3, bDeleteRow3, bAddRow4, bUpdateRow4, bDeleteRow4, btUndoRow, btAddRow, btDeleteRow, btFilePopup, btFileImport]);
  } else {
    $c.gus.cfDisableBtn($p, [b_Cancel, b_Update, b_Copy, b_Save, b_Cancel2, b_Update2, b_Copy2, b_Save2, bAddRow, bUpdateRow, bDeleteRow, bAddRow1, bUpdateRow1, bDeleteRow1, bAddRow2, bUpdateRow2, bDeleteRow2, bAddRow3, bUpdateRow3, bDeleteRow3, bAddRow4, bUpdateRow4, bDeleteRow4, btUndoRow, btAddRow, btDeleteRow, btFilePopup, btFileImport]);
  }
  scwin.txt_saveType = "4"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소

  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";
};

//-------------------------------------------------------------------------
// 거래처 복사
//-------------------------------------------------------------------------
scwin.f_Copy = async function () {
  let vCountRow = ds_logisticsCustomer.getRowCount();
  let vCurrentRow = ds_logisticsCustomer.getRowPosition();
  if (vCountRow < 1) {
    $c.win.alert($p, "복사할 거래처를 먼저 조회해주시기 바랍니다.");
    qryCntn.focus();
    return false;
  }
  if (ds_logisticsCustomer.getCellData(vCurrentRow, "clntNo") > "999900") {
    $c.win.alert($p, "해당거래처는  복사를 할 수 없습니다..");
    return;
  }
  let vCopyConfirm = await $c.win.confirm($p, "선택하신 거래처를 복사 하시겠습니까?");
  if (vCopyConfirm) {
    let vClntNm = ds_logisticsCustomer.getCellData(vCurrentRow, "clntNm");
    let vUpperClntNo = ds_logisticsCustomer.getCellData(vCurrentRow, "upperClntNo");
    let vUpperClntNm = ds_logisticsCustomer.getCellData(vCurrentRow, "upperClntNm");
    let vBilgClntNo = ds_logisticsCustomer.getCellData(vCurrentRow, "bilgClntNo");
    let vBilgClntNm = ds_logisticsCustomer.getCellData(vCurrentRow, "bilgClntNm");
    let vClntBusiClsCd = ds_logisticsCustomer.getCellData(vCurrentRow, "clntBusiClsCd");
    let vClntTelNo = ds_logisticsCustomer.getCellData(vCurrentRow, "clntTelNo");
    let vClntMpNo = ds_logisticsCustomer.getCellData(vCurrentRow, "clntMpNo");
    let vClntEmail = ds_logisticsCustomer.getCellData(vCurrentRow, "clntEmail");
    let vClntFaxNo = ds_logisticsCustomer.getCellData(vCurrentRow, "clntFaxNo");
    let vClntDeptNm = ds_logisticsCustomer.getCellData(vCurrentRow, "clntDeptNm");
    let vClntPersPstNm = ds_logisticsCustomer.getCellData(vCurrentRow, "clntPersPstNm");
    let vClntPersNm = ds_logisticsCustomer.getCellData(vCurrentRow, "clntPersNm");
    let vMcomPicEmpNo = ds_logisticsCustomer.getCellData(vCurrentRow, "mcomPicEmpNo");
    let vEmpNm = ds_logisticsCustomer.getCellData(vCurrentRow, "empNm");
    let vDeptNm = ds_logisticsCustomer.getCellData(vCurrentRow, "deptNm");
    let vTplGrpCd = ds_logisticsCustomer.getCellData(vCurrentRow, "tplGrpCd");
    let vZip = ds_logisticsCustomer.getCellData(vCurrentRow, "zip");
    let vAddr1 = ds_logisticsCustomer.getCellData(vCurrentRow, "addr1");
    let vAddr2 = ds_logisticsCustomer.getCellData(vCurrentRow, "addr2");
    let vBusiAddr = ds_logisticsCustomer.getCellData(vCurrentRow, "busiAddr");
    let vCrn = ds_logisticsCustomer.getCellData(vCurrentRow, "crn");
    let vMgntTrgtClntYn = ds_logisticsCustomer.getCellData(vCurrentRow, "mgntTrgtClntYn");
    let vMgntTrgtRegDt = ds_logisticsCustomer.getCellData(vCurrentRow, "mgntTrgtRegDt");
    let vMgntTrgtRsnCd = ds_logisticsCustomer.getCellData(vCurrentRow, "mgntTrgtRsnCd");
    let vSellClntClsCd = ds_logisticsCustomer.getCellData(vCurrentRow, "sellClntClsCd");
    let vBizDivCntrYn = ds_logisticsCustomer.getCellData(vCurrentRow, "bizDivCntrYn");
    let vBizDivBulkYn = ds_logisticsCustomer.getCellData(vCurrentRow, "bizDivBulkYn");
    let vBizDomTplYn = ds_logisticsCustomer.getCellData(vCurrentRow, "bizDomTplYn");
    let vBizDomStrYn = ds_logisticsCustomer.getCellData(vCurrentRow, "bizDomStrYn");
    let vBizDomTransYn = ds_logisticsCustomer.getCellData(vCurrentRow, "bizDomTransYn");
    let vBizDomStvYn = ds_logisticsCustomer.getCellData(vCurrentRow, "bizDomStvYn");
    let vBizDomInatYn = ds_logisticsCustomer.getCellData(vCurrentRow, "bizDomInatYn");
    let vIntrlnsClsCd = ds_logisticsCustomer.getCellData(vCurrentRow, "intrlnsClsCd");
    let vTransBizYn = ds_logisticsCustomer.getCellData(vCurrentRow, "transBizYn");
    let vTransIntcdBizYn = ds_logisticsCustomer.getCellData(vCurrentRow, "transIntcdBizYn");
    let vSellClntYn = ds_logisticsCustomer.getCellData(vCurrentRow, "sellClntYn");
    let vPchsClntYn = ds_logisticsCustomer.getCellData(vCurrentRow, "pchsClntYn");
    let vBiztypeNm = ds_logisticsCustomer.getCellData(vCurrentRow, "biztypeNm");
    let vBizcondNm = ds_logisticsCustomer.getCellData(vCurrentRow, "bizcondNm");
    let vRepstNm = ds_logisticsCustomer.getCellData(vCurrentRow, "repstNm");
    let vTrfLnkYn = ds_logisticsCustomer.getCellData(vCurrentRow, "trfLnkYn");
    let vOldClntNo = ds_logisticsCustomer.getCellData(vCurrentRow, "oldClntNo");
    let vFirstTxnDt = ds_logisticsCustomer.getCellData(vCurrentRow, "firstTxnDt");
    let vCopCoEstmtYn = ds_logisticsCustomer.getCellData(vCurrentRow, "copCoEstmtYn");
    let vInatPartnerYn = ds_logisticsCustomer.getCellData(vCurrentRow, "inatPartnerYn");
    let vElecAuthTrgtYn = ds_logisticsCustomer.getCellData(vCurrentRow, "elecAuthTrgtYn");
    let vInchnClntNo = ds_logisticsCustomer.getCellData(vCurrentRow, "inchnClntNo");
    scwin.f_ContentsEnable();
    let newRow = ds_logisticsCustomer.insertRow();

    /*
    tb_Grid1.Editable = true;
    tb_Grid2.Editable = true;
    tb_Grid3.Editable = true;
    tb_Grid6.Editable = true;
    tb_Grid5.Editable = true;
    */
    gr_tb_Grid1.setGridReadOnly(false);
    gr_tb_Grid2.setGridReadOnly(false);
    gr_tb_Grid3.setGridReadOnly(false);
    gr_tb_Grid6.setGridReadOnly(false);
    gr_tb_Grid5.setGridReadOnly(false);
    scwin.txt_createYn = "1";
    scwin.txt_updateYn = "0";
    scwin.txt_saveType = "0"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소
    clntDelYn.setValue(0);

    // 현재 로우의 값을 복사 		
    ds_logisticsCustomer.setCellData(newRow, "clntNm", vClntNm);
    ds_logisticsCustomer.setCellData(newRow, "upperClntNo", vUpperClntNo);
    ds_logisticsCustomer.setCellData(newRow, "upperClntNm", vUpperClntNm);
    ds_logisticsCustomer.setCellData(newRow, "bilgClntNo", vBilgClntNo);
    ds_logisticsCustomer.setCellData(newRow, "bilgClntNm", vBilgClntNm);
    ds_logisticsCustomer.setCellData(newRow, "clntBusiClsCd", vClntBusiClsCd);
    ds_logisticsCustomer.setCellData(newRow, "clntTelNo", vClntTelNo);
    ds_logisticsCustomer.setCellData(newRow, "clntMpNo", vClntMpNo);
    ds_logisticsCustomer.setCellData(newRow, "clntEmail", vClntEmail);
    ds_logisticsCustomer.setCellData(newRow, "clntFaxNo", vClntFaxNo);
    ds_logisticsCustomer.setCellData(newRow, "clntDeptNm", vClntDeptNm);
    ds_logisticsCustomer.setCellData(newRow, "clntPersPstNm", vClntPersPstNm);
    ds_logisticsCustomer.setCellData(newRow, "clntPersNm", vClntPersNm);
    ds_logisticsCustomer.setCellData(newRow, "mcomPicEmpNo", vMcomPicEmpNo);
    ds_logisticsCustomer.setCellData(newRow, "empNm", vEmpNm);
    ds_logisticsCustomer.setCellData(newRow, "deptNm", vDeptNm);
    ds_logisticsCustomer.setCellData(newRow, "tplGrpCd", vTplGrpCd);
    ds_logisticsCustomer.setCellData(newRow, "zip", vZip);
    ds_logisticsCustomer.setCellData(newRow, "addr1", vAddr1);
    ds_logisticsCustomer.setCellData(newRow, "addr2", vAddr2);
    ds_logisticsCustomer.setCellData(newRow, "busiAddr", vBusiAddr);
    ds_logisticsCustomer.setCellData(newRow, "crn", vCrn);
    ds_logisticsCustomer.setCellData(newRow, "mgntTrgtClntYn", vMgntTrgtClntYn);
    ds_logisticsCustomer.setCellData(newRow, "mgntTrgtRegDt", vMgntTrgtRegDt);
    ds_logisticsCustomer.setCellData(newRow, "mgntTrgtRsnCd", vMgntTrgtRsnCd);
    ds_logisticsCustomer.setCellData(newRow, "sellClntClsCd", vSellClntClsCd);
    ds_logisticsCustomer.setCellData(newRow, "bizDivCntrYn", vBizDivCntrYn);
    ds_logisticsCustomer.setCellData(newRow, "bizDivBulkYn", vBizDivBulkYn);
    ds_logisticsCustomer.setCellData(newRow, "bizDomTplYn", vBizDomTplYn);
    ds_logisticsCustomer.setCellData(newRow, "bizDomStrYn", vBizDomStrYn);
    ds_logisticsCustomer.setCellData(newRow, "bizDomTransYn", vBizDomTransYn);
    ds_logisticsCustomer.setCellData(newRow, "bizDomStvYn", vBizDomStvYn);
    ds_logisticsCustomer.setCellData(newRow, "bizDomInatYn", vBizDomInatYn);
    ds_logisticsCustomer.setCellData(newRow, "intrlnsClsCd", vIntrlnsClsCd);
    ds_logisticsCustomer.setCellData(newRow, "transBizYn", vTransBizYn);
    ds_logisticsCustomer.setCellData(newRow, "transIntcdBizYn", vTransIntcdBizYn);
    ds_logisticsCustomer.setCellData(newRow, "sellClntYn", vSellClntYn);
    ds_logisticsCustomer.setCellData(newRow, "pchsClntYn", vPchsClntYn);
    ds_logisticsCustomer.setCellData(newRow, "biztypeNm", vBiztypeNm);
    ds_logisticsCustomer.setCellData(newRow, "bizcondNm", vBizcondNm);
    ds_logisticsCustomer.setCellData(newRow, "repstNm", vRepstNm);
    ds_logisticsCustomer.setCellData(newRow, "trfLnkYn", vTrfLnkYn);
    ds_logisticsCustomer.setCellData(newRow, "clntKndCd", "LO");
    ds_logisticsCustomer.setCellData(newRow, "oldClntNo", vOldClntNo);
    ds_logisticsCustomer.setCellData(newRow, "firstTxnDt", vFirstTxnDt);
    ds_logisticsCustomer.setCellData(newRow, "copCoEstmtYn", vCopCoEstmtYn);
    ds_logisticsCustomer.setCellData(newRow, "inatPartnerYn", vInatPartnerYn);
    ds_logisticsCustomer.setCellData(newRow, "elecAuthTrgtYn", vElecAuthTrgtYn);
    ds_logisticsCustomer.setCellData(newRow, "inchnClntNo", vInchnClntNo);
    ds_logisticsCustomer.setRowPosition(newRow);
    gr_logisticsCustomer.setFocusedCell(newRow, 0, false);
    $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Copy, b_Create2, b_Update2, b_Copy2, btAddRow, btDeleteRow, btUndoRow]);
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 매출입구분
  let vSellClntYn = sellClntYn.getValue(); // 매출
  let vPchsClntYn = pchsClntYn.getValue(); // 매입

  // 사업부문
  let vBizDivCntrYn = bizDivCntrYn.getValue(); // 벌크
  let vBizDivBulkYn = bizDivBulkYn.getValue(); // 컨테이너

  // 운송사업구분
  let vTransBizYn = transBizYn.checked; // 운송사업
  var vTransIntcdBizYn = transIntcdBizYn.getValue(); // 운송주선업	

  // 사업영역
  let vBizDomTransYn = bizDomTransYn.getValue(); // 운송
  let vBizDomStvYn = bizDomStvYn.getValue(); // 하역
  let vBizDomStrYn = bizDomStrYn.getValue(); // 보관
  let vBizDomTplYn = bizDomTplYn.getValue(); // 3자물류
  let vBizDomInatYn = bizDomInatYn.getValue(); // 국제

  if (scwin.g_sLoginDept != "00009") {
    //채권팀
    if (scwin.txt_saveType == "0") {
      if (vSellClntYn) {
        $c.win.alert($p, "매출거래처는 신규저장을 할수 없습니다. 전자결재를 이용해 결재요청을 하시기바랍니다.");
        return;
      }
    }
  }

  // 결제구분은 Bill 수령후를 선택할 수 없게함
  if (ds_collMoneyCond.getCellData(0, 'stmtPrdClsCd') == "02") {
    $c.win.alert($p, "결제 구분은 Bill 수령후를 선택하실 수 없습니다.");
    return 0;
  }
  if (clntDelYn.getValue() == 1 && trfLnkYn.getValue() == "Y") {
    $c.win.alert($p, "요율연결 된 거래처는 사용여부를 '아니오'로 할 수 없습니다.");
    return;
  }
  let ret;

  // 수정시에는 삭제여부가 1(True)인경우는 체크하지 않음.
  if (clntDelYn.getValue() == 0) {
    ret = await $c.gus.cfValidate($p, [chkRegistInfo]);
    if (!ret) {
      return false;
    }
  }
  if (!$c.gus.cfIsNull($p, clntTelNo.getValue())) {
    if (!scwin.covTelNumberValidator_validate(clntTelNo.getValue())) {
      return false;
    }
  }
  if (!$c.gus.cfIsNull($p, clntMpNo.getValue())) {
    if (!scwin.covTelNumberValidator_validate(clntMpNo.getValue())) {
      return false;
    }
  }
  if (!$c.gus.cfIsNull($p, clntFaxNo.getValue())) {
    if (!scwin.covTelNumberValidator_validate(clntFaxNo.getValue())) {
      return false;
    }
  }

  // 신규로 등록시에는 수금조건을 필수입력해야된다.
  if (scwin.txt_createYn == "1" && sellClntYn.getValue() == true) {
    if (ds_collMoneyCond.getRowCount() <= 0) {
      $c.win.alert($p, "거래처를 신규로 등록시 수금조건은 필수입력사항입니다.");
      return false;
    }
  }
  //수금조건 필수 체크(2006.12월 추가) 
  if (vSellClntYn == true)
    // '매출이 선택된 경우 '
    {
      if (intrlnsClsCd.getValue() != "02" && sellClntClsCd.getValue() == "02" && tplGrpCd.getValue() == "") {} else {
        if (ds_collMoneyCond.getRowCount() < 1) {
          $c.win.alert($p, "수금조건을 입력해주세요");
          ds_collMoneyCond.insertRow();
        }
      }
    } else if (vPchsClntYn == true) {//매입만 선택된 경우 skip by '최승은' order by '박병길' 
  }
  if (vSellClntYn == true)
    // '매출이 선택된 경우 '
    {
      if (intrlnsClsCd.getValue() != "02" && sellClntClsCd.getValue() == "02" && tplGrpCd.getValue() == "") {} else {
        if (ds_collMoneyCond.getCellData(ds_collMoneyCond.getRowPosition(), "collMoneyAcctDeptNm") == "" || ds_collMoneyCond.getCellData(ds_collMoneyCond.getRowPosition(), "collMoneyAcctDeptNm") == null) {
          //수금부서 필수 조건 삭제 20090518 하재민과장요청 박범민 수정
          //alert(ds_collMoneyCond.RowPosition+"번째 행에서 수금부서는 필수입력사항입니다.");
          //return;
        }
      }
    } else if (vPchsClntYn == true) {//매입만 선택된 경우 skip by '최승은' order by '박병길' 
  }

  // 수금조건 필수항목 체크
  // if(! await $c.gus.cfValidate([gr_tb_Grid1])) {
  //     return false;
  // }
  if (ds_collMoneyCond.getRowCount() > 0) {
    for (var i = 0; i < ds_collMoneyCond.getRowCount(); i++) {
      let sRow = i + 1;
      if (ds_collMoneyCond.getCellData(i, "adptDt") == "" || ds_collMoneyCond.getCellData(i, "adptDt") == null) {
        $c.win.alert($p, "수금조건의 " + sRow + "번째 적용일자는 필수입력 항목입니다.");
        return false;
      }
      if (ds_collMoneyCond.getCellData(i, "stmtPrdClsCd") == "" || ds_collMoneyCond.getCellData(i, "stmtPrdClsCd") == null) {
        $c.win.alert($p, "수금조건의 " + sRow + "번째 결제조건(구분)는 필수입력 항목입니다.");
        return false;
      }
      if (ds_collMoneyCond.getCellData(i, "stmtPrdDd") == "" || ds_collMoneyCond.getCellData(i, "stmtPrdDd") == null) {
        $c.win.alert($p, "수금조건의 " + sRow + "번째 결제조건(결제기한)는 필수입력 항목입니다.");
        return false;
      }
    }
  }
  // 지급조건 필수항목 체크
  // if(! await $c.gus.cfValidate([gr_tb_Grid2])){
  //     return false;
  // }
  if (ds_payCond.getRowCount() > 0) {
    for (var i = 0; i < ds_payCond.getRowCount(); i++) {
      let sRow2 = i + 1;
      if (ds_payCond.getCellData(i, "adptDt") == "" || ds_payCond.getCellData(i, "adptDt") == null) {
        $c.win.alert($p, "지급조건의 " + sRow2 + "번째 적용일자는 필수입력 항목입니다.");
        return false;
      }
    }
  }

  // 지급수단 실물어음,전자결재일경우 어음일수 필수입력 체크
  payCondRowPosi = ds_payCond.getRowPosition();
  payCntShtCd = ds_payCond.getCellData(payCondRowPosi, "payCntShtCd");
  cashRt = ds_payCond.getCellData(payCondRowPosi, "cashRt");
  var vDraftDdCntCd = ds_payCond.getCellData(payCondRowPosi, "draftDdCntCd");
  var vCashRt = ds_payCond.getCellData(payCondRowPosi, "cashRt");
  var vPayCycCd = ds_payCond.getCellData(payCondRowPosi, "payCycCd");
  if (payCntShtCd == "50" && vDraftDdCntCd == "") {
    $c.win.alert($p, "지급수단 실물어음,전자결제일경우 어음일수를 입력하셔야 합니다.");
    return false;
  }
  if (payCntShtCd == "25" && vDraftDdCntCd == "" && vCashRt != "100") {
    $c.win.alert($p, "지급수단 실물어음,전자결제일경우 어음일수를 입력하셔야 합니다.");
    return false;
  }
  if (vPayCycCd == "6" && ds_payCond.getCellData(payCondRowPosi, "payAcctDeptNm") == "") {
    $c.win.alert($p, "지급주기가 선적일인경우, 계약부서를 입력하셔야 합니다.");
    return false;
  }
  if (vPayCycCd == "7" && ds_payCond.getCellData(payCondRowPosi, "payAcctDeptNm") == "") {
    $c.win.alert($p, "지급주기가 입항일인경우, 계약부서를 입력하셔야 합니다.");
    return false;
  }

  // 지급계좌 필수항목 체크
  // if(!$c.gus.cfValidate([gr_tb_Grid3])){
  //     return false;
  // }
  if (ds_payAcnt.getRowCount() > 0) {
    for (var i = 0; i < ds_payAcnt.getRowCount(); i++) {
      let sRow3 = i + 1;
      if (ds_payAcnt.getCellData(i, "adptDt") == "" || ds_payAcnt.getCellData(i, "adptDt") == null) {
        $c.win.alert($p, "지급계좌의 " + sRow3 + "번째 적용일자는 필수입력 항목입니다.");
        return false;
      }
      if (ds_payAcnt.getCellData(i, "payClsCd") == "" || ds_payAcnt.getCellData(i, "payClsCd") == null) {
        $c.win.alert($p, "지급계좌의 " + sRow3 + "번째 지급구분는 필수입력 항목입니다.");
        return false;
      }
      if (ds_payAcnt.getCellData(i, "bankNm") == "" || ds_payAcnt.getCellData(i, "bankNm") == null) {
        $c.win.alert($p, "지급계좌의 " + sRow3 + "번째 은행명는 필수입력 항목입니다.");
        return false;
      }
      if (ds_payAcnt.getCellData(i, "bankAcntNo") == "" || ds_payAcnt.getCellData(i, "bankAcntNo") == null) {
        $c.win.alert($p, "지급계좌의 " + sRow3 + "번째 계좌번호는 필수입력 항목입니다.");
        return false;
      }
    }
  }

  // 매출입구분 항목 체크
  if (vSellClntYn == false && vPchsClntYn == false) {
    $c.win.alert($p, "매출입구분은 필수입력 사항입니다.");
    // 		sellClntYn.checked= true;
    $c.gus.cfEnableObj($p, sellClntClsCd, true); // 매출거래처구분
    sellClntClsCd.setSelectedIndex(1);
    return false;
  }

  // 사업부문 항목 체크
  if (sellClntClsCd.getSelectedIndex() < 1) {
    $c.win.alert($p, "거래처구분은 필수입력 사항입니다.");
    sellClntClsCd.setSelectedIndex(1);
    return false;
  }

  //매출거래처 필수 항목
  if (vSellClntYn) {
    // 사업부문 항목 체크
    if (vBizDivCntrYn == false && vBizDivBulkYn == false) {
      $c.win.alert($p, "사업부문은 매출거래처 필수입력 사항입니다.");
      bizDivCntrYn.setValue(true);
      return false;
    }

    // 사업영역 항목 체크
    if (vBizDomTransYn == false && vBizDomStvYn == false && vBizDomStrYn == false && vBizDomTplYn == false && vBizDomInatYn == false) {
      $c.win.alert($p, "사업영역은 매출거래처 필수입력 사항입니다.");
      bizDomTransYn.setValue(true);
      return false;
    }
    if ($c.gus.cfIsNull($p, sellClntClsCd.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["거래처구분"]);
      return false;
    }
  }

  //매입거래처 필수 항목
  if (vPchsClntYn) {
    // 운송사업구분 항목 체크
    if (vTransBizYn == false && vTransIntcdBizYn == false) {
      $c.win.alert($p, "운송사업구분은 매입거래처 필수입력 사항입니다.");
      transBizYn.setValue(true);
      return false;
    }

    //if(ds_logisticsCustomer.IsUpdated==true){
    if (ds_logisticsCustomer.getModifiedIndex().length > 0) {
      if (ds_contractFileDetail.getRowCount() < 1) {
        $c.win.alert($p, "등록된 매입계약서가 없습니다. 매입계약서를 등록하세요.");
        return;
      }
    }
  }

  // 매입거래처 입력중복 체크
  var vDupInsert = scwin.f_ChkPurchClntInsert();
  if (vDupInsert > 0) {
    $c.win.alert($p, "매입거래처 등록이 중복되었습니다.");
    return false;
  }

  // 수금조건 중복데이터 조회
  let vCollMoneyCondCount = scwin.f_CompareCollMoneyPayCondAcnt("ds_collMoneyCond");
  let vPayCondCount = scwin.f_CompareCollMoneyPayCondAcnt("ds_payCond");
  let vPayAcntCount = scwin.f_CompareCollMoneyPayCondAcnt("ds_payAcnt");
  if (vCollMoneyCondCount > 0) {
    $c.win.alert($p, "동일한 수금조건정보가 있습니다.");
    //mxTab.ActiveIndex = 1; 
    tac_tab.activateTab(0);
    return false;
  }
  if (vPayCondCount > 0) {
    $c.win.alert($p, "동일한 지급조건정보가 있습니다.");
    //mxTab.ActiveIndex = 2;
    tac_tab.activateTab(1);
    return false;
  }
  if (vPayAcntCount > 0) {
    $c.win.alert($p, "동일한 지급계좌정보가 있습니다.");
    //mxTab.ActiveIndex = 3;
    tac_tab.activateTab(2);
    return false;
  }

  // 회원제차량인 경우 화주거래처등록 필수 체크
  let vMembersVehclYn = scwin.f_CheckMembersVehcl();
  if (!vMembersVehclYn) {
    //mxTab.ActiveIndex = 2; 
    tac_tab.activateTab(1);
    return false;
  }
  let vCreateYn = scwin.txt_createYn;
  if (vCreateYn == "1") {
    lux_sysCls.setSelectedIndex(1);
    lux_clntLupCond.setSelectedIndex(0);
    qryCntn.setValue(ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "clntNm"));
  }
  ret = await $c.gus.cfValidate($p, [firstTxnDt]);
  if (!ret) return;

  // 	dataSetDebug(ds_contractFileDetail,true);
  // 	dataSetDebug(ds_customerFileDetail,true);

  //변경한 데이터가 있는지 체크한다. 
  if (ds_logisticsCustomer.getModifiedIndex().length == 0 && ds_payCond.getModifiedIndex().length == 0 && ds_payAcnt.getModifiedIndex().length == 0 && ds_purchase.getModifiedIndex().length == 0 && ds_collMoneyCond.getModifiedIndex().length == 0 && ds_contractFileDetail.getModifiedIndex().length == 0 && ds_customerFileDetail.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "inchnClntNo") != "") {
    if (ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "inchnClntNo").length != 6) {
      $c.win.alert($p, "인천회계거래처 " + ds_logisticsCustomer.getCellData(ds_logisticsCustomer.getRowPosition(), "inchnClntNo") + "는 6자리로 입력해야 합니다.");
      return false;
    }
  }
  if (clntBusiClsCd.getValue() == 0) {
    $c.win.alert($p, "사업자구분이 설정되지 않았습니다. 사업자등록번호 란의 등록 버튼을 눌러 사업자정보를 새로 등록해주십시오.");
    return false;
  }

  /*
  if(clntBusiClsCd.BindColVal == "1" || clntBusiClsCd.BindColVal == "2"){ // 1 = 법인사업자, 2 = 개인사업자
      if(crn.value == ""){
          alert("사업자번호는 필수 입력사항입니다.");
          return false;
      }
  }
  */

  // 매출입구분 항목 체크 (공통거래처)
  if (vSellClntYn == true && vPchsClntYn == true) {
    // 수금조건 추가시 팝업창 출력
    let vSysCount = 0;
    for (i = 0; i < ds_collMoneyCond.getRowCount(); i++) {
      if (ds_collMoneyCond.getRowStatus(ds_collMoneyCond.getRowPosition()) == "C") {
        vSysCount++;
      }
    }
    if (vSysCount > 0) {
      $c.win.alert($p, "공통거래처 가상계좌 발급은 재경팀에 요청하세요");
    }
  }

  //지급계좌 외화시 지급화폐구분 체크
  if (ds_payAcnt.getModifiedIndex().length > 0) {
    for (i = 0; i < ds_payAcnt.getRowCount(); i++) {
      if (ds_payAcnt.getCellData(i, "payClsCd") == "60" && (ds_payAcnt.getRowStatus(i) == "C" || ds_payAcnt.getRowStatus(i) == "D")) {
        if (ds_payAcnt.getCellData(i, "payCrcCd") == "KRW") {
          $c.win.alert($p, i + "행 : 지급구분이 외화일경우 지급화폐는 원화(KRW)가 아닌값으로 입력하여 주세요.");
          return false;
        }
        if (ds_payAcnt.getCellData(i, "payCrcCd") == "") {
          $c.win.alert($p, i + "행 : 지급구분이 외화일경우 지급화폐는 필수입력 입니다.");
          return false;
        }
      } else if (ds_payAcnt.getCellData(i, "payClsCd") != "60" && (ds_payAcnt.getRowStatus(i) == "C" || ds_payAcnt.getRowStatus(i) == "D")) {
        if (ds_payAcnt.getCellData(i, "payCrcCd") != "KRW" && ds_payAcnt.getCellData(i, "payCrcCd") != "") {
          $c.win.alert($p, i + "행 : 지급구분이 외화가 아닐경우 지급화폐는 원화(KRW)로 입력하여 주세요.");
          return false;
        }
      }
    }
  }

  // 저장확인 
  ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret) {
    pos_clnt = ds_logisticsCustomer.getRowPosition();
    if (qryCntn.getValue().trimAll() == "") {
      qryCntn.setValue(clntNm.getValue());
    }
    //alert(ds_logisticsCustomer.exportData(1, ds_logisticsCustomer.countRow, true));
    //tr_saveLogisticsCustomer.Action ="/cm.bc.clnt.clntmgnt.SaveLogisticsCustomerCMD.do";
    //tr_saveLogisticsCustomer.Post();

    $c.sbm.execute($p, sbm_saveLogisticsCustomer);
  }
};

//-------------------------------------------------------------------------
// 매입거래처 중복선택 체크
//-------------------------------------------------------------------------
scwin.f_ChkPurchClntInsert = function () {
  let vTmpSeq = 0;
  let vTmpVal;
  let vCompareVal;
  let vPurchClntCountRow = ds_purchase.getRowCount();
  for (i = 0; i < vPurchClntCountRow; i++) {
    vTmpVal = ds_purchase.getCellData(i, "pchsClntClsCd");
    for (j = i + 1; j < vPurchClntCountRow; j++) {
      vCompareVal = ds_purchase.getCellData(j, "pchsClntClsCd");
      if (vTmpVal == vCompareVal) {
        vTmpSeq++;
      }
    }
  }
  return vTmpSeq;
};
scwin.gr_tb_Grid5_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "ctrtFileNm") {
    scwin.f_Download(rowIndex);
  }
};

// 파일 총건수
scwin.ds_contractFileDetail_ondataload = function () {
  txt_contractFileCnt.setValue(ds_contractFileDetail.getRowCount());
};
scwin.fn_undo = function (paramObj) {
  for (var idx = paramObj.getRowCount() - 1; idx > -1; idx--) {
    var rStat = paramObj.getRowStatus(idx);
    if (rStat == 'C') {
      //신규면 삭제
      paramObj.removeRow(idx);
    } else if (rStat == 'U') {
      paramObj.undoRow(idx);
    }
  }
};
scwin.f_downExcelSheet = async function () {
  var vDsIdx = scwin.txt_payIdx;
  var vObjGrd;
  var sheetTitle;
  if (vDsIdx == "1") {
    if (ds_collMoneyCond.getRowCount() < 1) {
      $c.win.alert($p, "수금조건내역이 없습니다.");
      return false;
    }
    vObjGrd = "gr_tb_Grid1";
    sheetTitle = "수금조건";
  } else if (vDsIdx == "2") {
    if (ds_payCond.getRowCount() < 1) {
      $c.win.alert($p, "지급조건내역이 없습니다.");
      return false;
    }
    vObjGrd = "gr_tb_Grid2";
    sheetTitle = "지급조건";
  } else if (vDsIdx == "3") {
    if (ds_payAcnt.getRowCount() < 1) {
      $c.win.alert($p, "지급계좌내역이 없습니다.");
      return false;
    }
    vObjGrd = "gr_tb_Grid3";
    sheetTitle = "지급계좌";
  } else if (vDsIdx == "5") {
    if (ds_contractFileDetail.getRowCount() < 1) {
      $c.win.alert($p, "계약서 파일이 없습니다.");
      return false;
    }
    vObjGrd = "gr_tb_Grid5";
    sheetTitle = "계약서 파일";
  } else if (vDsIdx == "7") {
    if (ds_contractFileDetail.getRowCount() < 1) {
      $c.win.alert($p, "거래처자료가 없습니다.");
      return false;
    }
    vObjGrd = "gr_tb_Grid7";
    sheetTitle = "거래처자료";
  }
  var objGrd = eval(vObjGrd);
  ret = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (ret) {
    //cfGridToExcel(objGrd, sheetTitle, sheetTitle, 2+4+8+16);	
    let gridId = objGrd;
    let infoArr = [];
    let options = {
      fileName: sheetTitle + ".xlsx",
      // + ".xls",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
  }
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
scwin.udc_clntNationCd_onviewchangeCodeEvent = function (info) {
  console.log('scwin.udc_clntNationCd_onviewchangeCodeEvent');
  scwin.f_clntNationChk('Cd');
};
scwin.udc_clntNationCd_onviewchangeNameEvent = function (info) {
  scwin.f_clntNationChk('Nm');
};
scwin.gr_tb_Grid7_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "fileNm") {
    scwin.f_DownloadCustomerFile(rowIndex);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물류거래처관리 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사조회','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_regModCond',style:'width: 100px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록자ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록자명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정자ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정자ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'regModCntn',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'<xf:select1 allOption="false" appearance="minimal" chooseOption="false" class="" direction="auto" disabled="false" disabledClass="w2selectbox_disabled" id="lc_selectbox2" style="width: 100px;" submenuSize="fixed"></xf:select1>',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'regDtFrom',edToId:'regDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_clntDelYn',ref:'data:dma_condition.clntDelYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시스템 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_sysCls',style:'width: 100px;',submenuSize:'fixed',ref:'','ev:onchange':'scwin.lux_sysCls_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lux_clntLupCond',style:'width: 100px;',submenuSize:'fixed',ref:'','ev:onchange':'scwin.lux_clntLupCond_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표자명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'qryCntn',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_BankBookCdInfo',style:'display:none;'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_BankCdInfo',style:'display:none;'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_DeptCdInfo',style:'display:none;'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_ClntList',style:'display:none;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 600px'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물류거래처 ',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_logisticsCustomer',gridDownFn:'scwin.f_logisDownLoadExcelSheet',btnUser:'Y',gridDownYn:'Y',gridDownUserAuth:'X',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw gvwfix',dataList:'data:ds_logisticsCustomer',id:'gr_logisticsCustomer',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',readOnly:'true',rowStatusVisible:'true',visibleRowNum:'18'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'담당자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntDeptNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntPersNm',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입거래처 ',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_purchase',focusMode:'row',id:'gr_purchase',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'거래처번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'순번',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'pchsClntClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeLO112'},E:[{T:1,N:'w2:label',A:{ref:'[cd] cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',btnRowAddObj:'btAddRow',btnCancelObj:'btUndoRow',rowAddFunction:'scwin.f_PurchAddRow',rowDelFunction:'scwin.f_PurchDelMarked',cancelFunction:'scwin.f_PurchUndo',rowAddUserAuth:'C',rowAddObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',rowDelUserAuth:'D',btnRowDelObj:'btDeleteRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처정보',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(이전거래처',class:''}},{T:1,N:'xf:input',A:{class:'',id:'oldClntNo',style:'width: 100px;',ref:'data:ds_logisticsCustomer.oldClntNo',objType:'data',maxlength:'70'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:')',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'right btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.b_Copy2_onclick',style:'',id:'b_Copy2',type:'button',class:'btn',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.b_Create2_onclick',style:'',id:'b_Create2',type:'button',class:'btn',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.b_Update2_onclick',style:'',id:'b_Update2',type:'button',class:'btn',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.b_Cancel2_onclick',style:'',id:'b_Cancel2',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.b_Save2_onclick',style:'',id:'b_Save2',type:'button',class:'btn',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'chkRegistInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'clntNo',class:'',ref:'data:ds_logisticsCustomer.clntNo','ev:onblur':'scwin.cLntNo_onblur'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(자동부여)',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'clntNm',style:'width: 150px;',objType:'data',ref:'data:ds_logisticsCustomer.clntNm',title:'거래처명',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'crn',id:'udc_crn',nameId:'clntNm',onloadCallbackFunc:'',popupGridHeadTitle:'사업자번호,사업자명',popupID:'retrieveCrnClntInfoPopup',popupTitle:'사업자번호조회,사업자번호,사업자명',style:'width: 150px;',btnId:'crn_search','ev:onclickEvent':'scwin.udc_crn_onclickEvent',objType:'data',hideName:'true',refDataCollection:'ds_logisticsCustomer',code:'crn',allowCharCode:'0-9',validTitle:'사업자번호',mandatoryCode:'true'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'crn_regist',style:'',type:'button','ev:onclick':'scwin.crn_regist_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'clntBusiClsCd',style:'width: 150px;',submenuSize:'fixed','ev:onchange':'scwin.clntBusiClsCd_onchange',chooseOptionLabel:'[] 선택',ref:'data:ds_logisticsCustomer.clntBusiClsCd',title:'사업자구분'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'bizcondNm',style:'width: 200px;',ref:'data:ds_logisticsCustomer.bizcondNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'biztypeNm',style:'width: 200px;',ref:'data:ds_logisticsCustomer.biztypeNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'repstNm',style:'width: 100px;',ref:'data:ds_logisticsCustomer.repstNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntDeptNm',style:'width:150px;',objType:'data',ref:'data:ds_logisticsCustomer.clntDeptNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처직원직위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'clntPersPstNm',style:'width: 150px;',objType:'data',ref:'data:ds_logisticsCustomer.clntPersPstNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처직원명',ref:'',style:'',userData2:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntPersNm',style:'width:150px;',objType:'data',ref:'data:ds_logisticsCustomer.clntPersNm',title:'거래처직원명',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유선전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'clntTelNo',class:'',objType:'data',ref:'data:ds_logisticsCustomer.clntTelNo',maxlength:'20',validExp:'유선전화번호:no:telNumber'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(\'-\' 포함)',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'E-mail',ref:'',style:'',userData2:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'clntEmail',style:'width: 200px;',objType:'data',ref:'data:ds_logisticsCustomer.clntEmail'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'clntMpNo',class:'',objType:'data',ref:'data:ds_logisticsCustomer.clntMpNo',maxlength:'20',validExp:'휴대전화번호:no:telNumber'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(\'-\' 포함)',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FAX번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'clntFaxNo',style:'width: 150px;',objType:'data',ref:'data:ds_logisticsCustomer.clntFaxNo',maxlength:'20',validExp:'FAX번호:no:telNumber'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(\'-\' 포함)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'busiAddr',style:'',ref:'data:ds_logisticsCustomer.busiAddr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'zip',selectID:'',popupID:'',validTitle:'주소',nameId:'addr1',style:'',id:'udc_zipPopup',btnId:'zip_search','ev:onblurCodeEvent':'scwin.udc_zipPopup_onblurCodeEvent',objType:'data',refDataCollection:'ds_logisticsCustomer',code:'zip',name:'addr1',mandatoryCode:'true',mandatoryName:'true','ev:onclickEvent':'scwin.udc_zipPopup_onclickEvent',maxlengthCode:'6',allowCharCode:'0-9'}},{T:1,N:'xf:input',A:{style:'width: 300px;',id:'addr2',objType:'data',mandatory:'true',title:'상세주소',ref:'data:ds_logisticsCustomer.addr2',maxlength:'20'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처분류',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'b_Rtrieve',type:'button',class:'btn','ev:onclick':'scwin.b_Rtrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처이력'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_logisticsCustomer.sellClntYn',appearance:'full',style:'',id:'sellClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onviewchange':'scwin.sellClntYn_onviewchange','ev:onchange':'scwin.sellClntYn_onchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:ds_logisticsCustomer.pchsClntYn',appearance:'full',style:'',id:'pchsClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onviewchange':'scwin.pchsClntYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계열구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'intrlnsClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_logisticsCustomer.intrlnsClsCd',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sellClntClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_logisticsCustomer.sellClntClsCd',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'3자물류그룹',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'tplGrpCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_logisticsCustomer.tplGrpCd',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부문',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDivCntrYn',ref:'data:ds_logisticsCustomer.bizDivCntrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDivBulkYn',ref:'data:ds_logisticsCustomer.bizDivBulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송사업구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'transBizYn',ref:'data:ds_logisticsCustomer.transBizYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송사업  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'transIntcdBizYn',ref:'data:ds_logisticsCustomer.transIntcdBizYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송주선업  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomTransYn',ref:'data:ds_logisticsCustomer.bizDomTransYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomStvYn',ref:'data:ds_logisticsCustomer.bizDomStvYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomStrYn',ref:'data:ds_logisticsCustomer.bizDomStrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomTplYn',ref:'data:ds_logisticsCustomer.bizDomTplYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'bizDomInatYn',ref:'data:ds_logisticsCustomer.bizDomInatYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'upperClntNo',validTitle:'',nameId:'upperClntNm',style:'width:250px;',id:'udc_upperClntNo',btnId:'upperClnt_search','ev:onclickEvent':'scwin.udc_upperClntNo_onclickEvent',objType:'data',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_logisticsCustomer',allowCharCode:'0-9',maxlengthCode:'6',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'bilgClntNo',nameId:'bilgClntNm',popupID:'',selectID:'retrieveClntList',style:'width:250px;',validTitle:'',id:'udc_bilgClntNo',btnId:'bilgClntNo_search','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',objtype:'data',objTypeCode:'data',refDataCollection:'ds_logisticsCustomer',maxlengthCode:'6',allowCharCode:'0-9',code:'bilgClntNo',name:'bilgClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요율연결여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'trfLnkYn',style:'width: 85px;',ref:'data:ds_logisticsCustomer.trfLnkYn'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'clntDelYn',ref:'data:ds_logisticsCustomer.clntDelYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초거래일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'firstTxnDt',style:'',objType:'data',ref:'data:ds_logisticsCustomer.firstTxnDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체평가여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'copCoEstmtYn',ref:'data:ds_logisticsCustomer.copCoEstmtYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인천회계거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'inchnClntNo',style:'width: 85px;',objType:'data',maxlength:'6',allowChar:'0-9',ref:'data:ds_logisticsCustomer.inchnClntNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'국제물류파트너',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'inatPartnerYn',ref:'data:ds_logisticsCustomer.inatPartnerYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입계산서역발행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'elecAuthTrgtYn',ref:'data:ds_logisticsCustomer.elecAuthTrgtYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영수거래처 여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'receiveSellingYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'담당정보',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자부서/직위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'deptNm',style:'width: 200px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcEmpInfoPopup',selectID:'retrieveAcEmpInfo',codeId:'mcomPicEmpNo',validTitle:'',nameId:'empNm',style:'width: 250px;',id:'udc_mcomPicEmpNo',btnId:'emp_search','ev:onclickEvent':'scwin.udc_mcomPicEmpNo_onclickEvent',objType:'data',maxlengthCode:'10',maxlengthName:'10'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'관리정보',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'mgntTrgtClntYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data',ref:'data:ds_logisticsCustomer.mgntTrgtClntYn',readOnly:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리대상사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'mgntTrgtRsnCd',style:'width: 250px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리대상등록일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'mgntTrgtRegDt',style:'width: 150px;',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true',ref:'data:ds_logisticsCustomer.mgntTrgtRegDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'변경정보',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'w250',id:'regId',style:'width:150px;',ref:'data:ds_logisticsCustomer.regId'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w250',id:'regDtm',style:'width:150px;',ref:'data:ds_logisticsCustomer.regDtm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w250',id:'modId',style:'width:150px;',ref:'data:ds_logisticsCustomer.modId'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w250',id:'modDtm',style:'width:150px;',ref:'data:ds_logisticsCustomer.modDtm'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',style:'',id:'tac_tab',class:'wq_tab','ev:onchange':'scwin.tac_tab_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'수금조건'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'지급조건'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'지급계좌'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs4',label:'국제물류추가정보'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs5',label:'매입 계약서'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs6',label:'가상계좌'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs7',label:'거래처자료'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content1'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_tb_Grid1',gridDownYn:'Y',btnUser:'Y',gridDownUserAuth:'X',gridDownFn:'scwin.f_downExcelSheet',gridUpYn:'N',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oneditend':'scwin.gr_tb_Grid1_oneditend','ev:onaftercolumnmove':'scwin.gr_tb_Grid1_onaftercolumnmove','ev:ontextimageclick':'scwin.gr_tb_Grid1_ontextimageclick',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_collMoneyCond',style:'',autoFit:'allColumn',id:'gr_tb_Grid1',visibleRowNum:'5',class:'wq_gvw',gridName:'수금조건',validExp:'adptDt:적용일자:yes&stmtPrdClsCd:결제구분:yes&stmtPrdDd:결제기한:yes:maxNumber=60',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',colSpan:'',width:'120',inputType:'text',style:'',id:'column1',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',colSpan:'',width:'130',inputType:'text',style:'',id:'column17',value:'등록부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column15',class:'txt-red',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column55',class:'txt-red',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column52',value:'등록부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'170',inputType:'text',style:'',id:'column49',value:'결제조건',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'170',inputType:'text',style:'',id:'column43',value:'결제방식',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column37',value:'화폐',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column34',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column31',value:'수정자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column13',value:'확인',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',class:'txt-red',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',class:'txt-red',value:'결제기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',class:'txt-blue',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',class:'txt-blue',value:'지급기한',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'collMoneyAcctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',mandatory:'true',validExp:'적용일자:yes'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'collMoneyAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'stmtPrdClsCd',value:'',displayMode:'label',mandatory:'true',validExp:'결제구분:yes'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stmtPrdDd',value:'',displayMode:'label',allowChar:'0-9',validExp:'maxNumber=60',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'collMoneyCntShtCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftDdCnt',value:'',displayMode:'label',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'collMoneyCrcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'confirmYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'gr_tb_Grid1_btn',cancelFunction:'scwin.f_Undo',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',btnRowDelObj:'bUpdateRow',btnCancelObj:'bDeleteRow',btnRowAddObj:'bAddRow',rowDelUserAuth:'D',EngYn:'N',btnDelYn:'N',rowAddUserAuth:'C',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',class:'',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content2'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_tb_Grid2',gridDownFn:'scwin.f_downExcelSheet',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oneditend':'scwin.gr_tb_Grid2_oneditend',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_payCond','ev:onbeforeedit':'scwin.gr_tb_Grid2_onbeforeedit',style:'',autoFit:'allColumn',id:'gr_tb_Grid2',visibleRowNum:'5',class:'wq_gvw',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_tb_Grid2_onafteredit','ev:ontextimageclick':'scwin.gr_tb_Grid2_ontextimageclick',setCellInputTypeCustom:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column80',class:'txt-red',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column75',class:'txt-red',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column72',value:'지급부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column69',value:'계약부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'120',inputType:'text',style:'',id:'column66',value:'회원제차량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column60',value:'화주번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column63',value:'화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column93',value:'지급주기',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column90',value:'지급일',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column87',value:'지급수단',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column84',value:'어음일수',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column78',value:'지급화폐',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'140',inputType:'text',style:'',id:'column81',value:'적용비율(%)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column96',value:'확인',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column99',value:'지급일자</br>변경여부',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'현금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column103',value:'어음',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';display:non;',id:'payAcctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'payAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'mbssysVehclYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mchtClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'mchtClntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCycCd',value:'',displayMode:'label',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'payDd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_payDd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCntShtCd',value:'',displayMode:'label',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftDdCntCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCrcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cashRt',value:'',displayMode:'label',displayFormat:'#,###',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'draftRt',value:'',displayMode:'label',displayFormat:'#,###',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'confirmYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payDtChgYn',value:'',displayMode:'label',maxLength:'1'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{cancelFunction:'scwin.f_Undo',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',btnRowDelObj:'bUpdateRow1',btnCancelObj:'bDeleteRow1',btnRowAddObj:'bAddRow1',rowDelUserAuth:'D',EngYn:'N',btnDelYn:'N',rowAddUserAuth:'C',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',class:'',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridID:'gr_tb_Grid3',gridDownFn:'scwin.f_downExcelSheet',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section4',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_payAcnt',style:'',autoFit:'allColumn',id:'gr_tb_Grid3',visibleRowNum:'5',class:'wq_gvw',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_tb_Grid3_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption8',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column103',class:'txt-red',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',class:'txt-red',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',class:'txt-red',value:'지급구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'지급화폐',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column118',value:'은행코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column116',class:'txt-red',value:'은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',class:'txt-red',value:'계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'예금주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column106',value:'전자결제은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column108',value:'수수료공제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column110',value:'확인',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payClsCd',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCrcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankAcntNo',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dpstrNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'elecStmtBankCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'transfCmisDeductYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'confirmYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows5',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{cancelFunction:'scwin.f_Undo',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',btnRowDelObj:'bUpdateRow2',btnCancelObj:'bDeleteRow2',btnRowAddObj:'bAddRow2',rowDelUserAuth:'D',EngYn:'N',btnDelYn:'N',rowAddUserAuth:'C',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',class:'',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content4'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처(영문)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'clntEngNm',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처STATE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'clntState',class:'',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소1(영문)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'engAddr1',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처NATION',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{'ev:onclickEvent':'scwin.udc_clntNationCd_onclickEvent',codeId:'clntNationCd',selectID:'retrieveCountryCodeInfo',popupID:'',validTitle:'',nameId:'clntNationNm',style:'',id:'udc_clntNationCd',btnId:'emp_search',objType:'data',code:'clntNationCd',name:'clntNationNm',refDataCollection:'ds_logisticsCustomer','ev:onviewchangeCodeEvent':'scwin.udc_clntNationCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNationCd_onviewchangeNameEvent',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',maxlengthCode:'2'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처PLACE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'clntPlace',class:'',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소2(영문)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'engAddr2',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처STREET',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'clntStreet',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'CCFEE적용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;',allOption:'',id:'ccfeeAdptYn',class:'',objType:'data',direction:'auto',ref:'data:ds_logisticsCustomer.ccfeeAdptYn',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소3(영문)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'engAddr3',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처세관코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'clntCstmCd',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처SCAC코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'clntScacCd',class:'',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주소4(영문)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'engAddr4',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급일자 변경여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'',submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 200px;',allOption:'',id:'payDtChgYn',class:'',objType:'data',direction:'auto',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가능'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'불가능'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'국제 지급 여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_logisticsCustomer.inatPayYn',submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 200px;',allOption:'',id:'inatPayYn',class:'',objType:'data',direction:'auto',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제 지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'항공사정산정보 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항공사IATA코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:200px;',id:'carrIataCd',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항공사코드(영문)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'carrEngCd',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Freight',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;',allOption:'',id:'carrAdjmInfoFreight',class:'',objType:'data',direction:'auto',chooseOptionLabel:'선택',ref:''},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Commission',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;',allOption:'',id:'carrAdjmInfoCommission',class:'',objType:'data',direction:'auto',chooseOptionLabel:'선택',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Rate',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;',allOption:'',id:'carrAdjmInfoRate',class:'',objType:'data',direction:'auto',chooseOptionLabel:'선택',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Vat',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;',allOption:'',id:'carrAdjmInfoVat',class:'',objType:'data',direction:'auto',chooseOptionLabel:'선택',ref:''},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Discount',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 200px;',allOption:'',id:'carrAdjmInfoDiscount',class:'',objType:'data',direction:'auto',chooseOptionLabel:'선택',ref:''},E:[{T:1,N:'xf:choices'}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content5'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section5',style:'',gridID:'gr_tb_Grid5',gridDownFn:'scwin.f_downExcelSheet',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section5',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_contractFileDetail',style:'',autoFit:'allColumn','ev:oncelldblclick':'scwin.gr_tb_Grid5_oncelldblclick',id:'gr_tb_Grid5',visibleRowNum:'5',class:'wq_gvw',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption9',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'120',inputType:'text',style:'',id:'column1',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column17',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column15',value:'등록구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column46',value:'사유',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column43',value:'첨부문서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column40',value:'계약서</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column37',value:'계약</br>시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column34',value:'계약</br>종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'120',inputType:'text',style:'',id:'column31',value:'첨부문서경로',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'140',inputType:'text',style:'',id:'column9',value:'등록자',displayMode:'label',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'이름',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'ctrtClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtFileNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'ctrtType',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'갱신대상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자동연장'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtFromDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ctrtFilePath',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'emp',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_contractFileCnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{cancelFunction:'scwin.f_Undo',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',btnRowDelObj:'bUpdateRow3',btnCancelObj:'bDeleteRow3',btnRowAddObj:'bAddRow3',rowDelUserAuth:'D',EngYn:'N',btnDelYn:'N',rowAddUserAuth:'C',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',class:'',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btFilePopup',type:'button',class:'btn','ev:onclick':'scwin.btFilePopup_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약서등록'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btFileImport_onclick',style:'',id:'btFileImport',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엔콜자료 가져오기'}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content6'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group19',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_rcptDca',style:'',autoFit:'allColumn',id:'gr_tb_Grid6',visibleRowNum:'5',class:'wq_gvw',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column1',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'계좌번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bankCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rcptDca',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows6',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'gr_tb_Grid6_btn',cancelFunction:'scwin.f_Undo',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',btnRowDelObj:'bUpdateRow4',btnCancelObj:'bDeleteRow4',btnRowAddObj:'bAddRow4',rowDelUserAuth:'D',EngYn:'N',btnDelYn:'N',rowAddUserAuth:'C',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',class:'',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content7'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section7',style:'',gridID:'gr_tb_Grid7',gridDownFn:'scwin.f_downExcelSheet',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section7',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_customerFileDetail',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_tb_Grid7',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true','ev:oncelldblclick':'scwin.gr_tb_Grid7_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption12',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'120',inputType:'text',id:'column12',value:'거래처번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column33',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column30',value:'자료<br/>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'120',inputType:'text',style:'',id:'column27',value:'Remark',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column24',value:'첨부문서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column21',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'140',inputType:'text',style:'',id:'column18',value:'등록자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'130',inputType:'text',id:'column11',value:'첨부문서경로',blockSelect:'false',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'이름',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fileRegDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'fileTypeCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fileNm',value:'',displayMode:'label',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'empNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',id:'filePath',blockSelect:'false',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows7',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelObj:'bDeleteRow5',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'bAddRow5',btnRowAddYn:'Y',btnRowDelObj:'bUpdateRow5',btnRowDelYn:'Y',cancelFunction:'scwin.f_Undo',class:'',rowAddFunction:'scwin.f_AddRow',rowAddObjType:'ctrlBtn',rowAddUserAuth:'C',rowDelFunction:'scwin.f_delMarked',rowDelObjType:'ctrlBtn',rowDelUserAuth:'D',style:'',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btCustomerFilePopup_onclick',style:'',id:'btCustomerFilePopup',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자료등록'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'등록일',class:''}},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',edFromId:'regFileDtFrom',edToId:'regFileDtTo',style:'width:%; height:px; ',id:'udc_fromToCalendar2',refEdDt:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'구분',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_fileTypeCd',class:'',objType:'data',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_commonCodeLO117'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btCustomerFileSearch_onclick',style:'',id:'btCustomerFileSearch',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자료검색'}]}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'btn_table0',label:'수금조건/계약서 수정은 "수정"버튼 후 행추가하여 등록하셔야 합니다. ',class:'txt-dot txt-red '}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'btn_table1',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_OzReport',type:'button',class:'btn','ev:onclick':'scwin.btn_OzReport_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'b_Copy',type:'button',class:'btn','ev:onclick':'scwin.b_Copy_onclick',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Create',style:'',type:'button','ev:onclick':'scwin.b_Create_onclick',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Update',style:'',type:'button','ev:onclick':'scwin.b_Update_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Cancel',style:'',type:'button','ev:onclick':'scwin.b_Cancel_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save',style:'',type:'button','ev:onclick':'scwin.b_Save_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'b_move1',style:'',type:'button','ev:onclick':'scwin.b_move1_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_move2',style:'',type:'button','ev:onclick':'scwin.b_move2_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서거래처정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_move3',style:'',type:'button','ev:onclick':'scwin.b_move3_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자별여신한도조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_move4',style:'',type:'button','ev:onclick':'scwin.b_move4_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리거래처대상등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_move5',style:'',type:'button','ev:onclick':'scwin.b_move5_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권현황조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'hide_components',style:'display: none;height: 100px;'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',codeId:'ed_retrieveClntCrnInfo','ev:onclickEvent':'scwin.udc_crn_onclickEvent',hideName:'true',mandatoryCode:'true',nameId:'ed_retrieveClntCrnInfoNm',objType:'data',onloadCallbackFunc:'',popupGridHeadTitle:'사업자번호,사업자명',popupID:'',popupTitle:'사업자번호조회,사업자번호,사업자명',selectID:'retrieveClntCrnInfo',style:'width: 150px;',id:'udc_retrieveClntCrnInfo',btnId:'btn_retrieveClntCrnInfo',code:'col1',name:'col2',refDataCollection:'ds_retrieveClntCrnInfo'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_logisticsCustomer',id:'gr_logisticsCustomerExcel',readOnly:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:''},E:[{T:1,N:'w2:caption',A:{id:'caption13',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'대표자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'매입',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',style:'',value:'매출',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'거래처부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',style:'',value:'거래처직원명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'전화번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',style:'',value:'우편번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'주소1',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',style:'',value:'주소2',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'요율연결여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',style:'',value:'등록점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'수정점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',style:'',value:'등록자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'등록시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',style:'',value:'수정자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'수정시간',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',readOnly:'true',style:'',value:'',width:'120',headers:'gr_logisticsCustomerExcel_column1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repstNm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntYn',inputType:'select',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column5',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'O'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntYn',inputType:'select',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column6',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'O'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntDeptNm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntPersNm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntTelNo',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zip',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr1',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column11'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr2',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column12',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfLnkYn',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regHomeDeptNm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column14'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modrHomeDeptNm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column15'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column16'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column17'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column18'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',readOnly:'true',style:'',value:'',width:'100',headers:'gr_logisticsCustomerExcel_column19'}}]}]}]}]}]}]}]}]})