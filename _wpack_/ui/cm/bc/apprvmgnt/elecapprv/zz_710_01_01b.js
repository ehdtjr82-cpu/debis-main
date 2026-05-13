/*amd /ui/cm/bc/apprvmgnt/elecapprv/zz_710_01_01b.xml 318068 99e8f45a284956eb0baad1a3024fcf51ceffe701be79295984df6e704bea33c0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_receptYn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'receptYn',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fromClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromClsCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_evidClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_retrieveSlipNo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성부서',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_code'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_slipChk'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltrCd1',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap5'},E:[{T:1,N:'w2:keyInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_approveList',repeatNode:'map',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_approveList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKnd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postReqDt',name:'회계요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'회계부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroYn',name:'e세로등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmtFcrc',name:'차변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmtFcrc',name:'대변금액(외)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'역발행여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGbn',name:'전결위임구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postNo',name:'회계처리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSummary',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidTypeChk',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidFileChk',name:'name60',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_approveDetail',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromSlipDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toSlipDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd2',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd3',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd4',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvDocKndCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postReqDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name32',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_editAuth',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_getEvidClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_getVatCount'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_create'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'receptYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_getEvidCount'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipFiList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_getMaxCloseYm',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approveList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromSlipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toSlipDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'작성부서1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd2',name:'작성부서2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd3',name:'작성부서3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd4',name:'작성부서4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approveDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromSlipDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toSlipDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqNo',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_reqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'결재문서종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'결재요청자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'EP사용자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'결재제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'결재상세정보',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipList',name:'결재대상 전표목록',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postReqDtList',name:'회계요청일자 목록',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtmList',name:'수정일자 목록',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appattach',name:'결재 첨부여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text',defaultValue:'YES'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_ds_getVatCount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_ds_getEvidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prmrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNoSeq',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroId',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rnk',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsbYn',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsBusiNo',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsBusiNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisSpplyDt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroSpplyDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supAmt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisTotAmt',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroTotAmt',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisSupAmt',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroSupAmt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisVatAmt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroVatAmt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisCnt',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroCnt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapTotAmt',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapSupAmt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapVatAmt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnClsNm',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxId',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapCnt',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regYn',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNoSeq',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprReqNo',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selPchCls',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxKind',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDate',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemName',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailUserNo',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailUserNm',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt2',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat2',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt2',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'countNonFileClsCd',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'countSalesPurchaseClsCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count1',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count2',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count3',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count4',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count5',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count6',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count7',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count8',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count9',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'countSum',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroCount',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidFileRegYn',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileRegYn',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroRegYn',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkPostDt',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dateClsCd',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setNo',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroSumAmt',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerDeptIncluYn',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnYn',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transferDate',name:'name108',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'test_dlt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_approveList',action:'/cm.bc.apprvmgnt.elecapprv.RetrieveSlipApproveRequestTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_approveList ',target:'data:json,{"id":"ds_approveList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_approveDetail',action:'/cm.bc.apprvmgnt.elecapprv.RetrieveSlipApproveRequestDetailForMobileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_approveDetail',target:'data:json,{"id":"ds_approveDetail","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_code',action:'/cm.zz.RetrieveEditAuthCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_code","key":"IN_DS1"}, {"id":"ds_editAuth","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_editAuth","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_slipChk',action:'/cm.zz.RetrieveEditAuthCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_slipChk","key":"IN_DS1"}, {"id":"ds_slipFiList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipFiList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fileUploadGDS","key":"IN_DS1"},{"action":"modified","id":"ds_approveList","key":"IN_DS2"},{"id":"dma_receptYn","key":"receptYn"},{"id":"dma_fromClsCd","key":"fromClsCd"},{"id":"dma_evidClsCd","key":"evidClsCd"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSlipNo',action:'/ds.fs.adjm.pchsadjmdcsn.RetrieveSlipInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveSlipNo","key":"IN_DS1"}, {"id":"ds_retrieveSlipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveSlipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSlipNo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getEvidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_getEvidClsCd',target:'data:json,{"id":"dlt_ds_getEvidClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getVatCount',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_getVatCount',target:'data:json,{"id":"dlt_ds_getVatCount","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getEvidCount',action:'/cm.bc.apprvmgnt.elecapprv.RetrieveSlipEvidCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getEvidCount_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reqApprove',action:'/cm.bc.apprvmgnt.elecapprv.RequestSlipApproveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_reqApprove',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DSystemCode.js',type:'text/javascript',scopeVariable:'DSystemCode'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 파일업로드 참고화면 fs_101_01_03b

// 전자결재요청 함수 제거함 (현재 사용하지 않는 함수, 전환 불필요)
// f_getSSOInfo
scwin.memJson = $c.data.getMemInfo($p);
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 20251201 서버시간 기준 해당 월 가장 첫날
scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.strFromDate); // 31
scwin.strToDate = scwin.strFromDate.substring(0, 6) + scwin.strLastDate; // 20251231 서버시간 기준 해당 월 가장 마지막날
scwin.vAcctDeptNm = scwin.memJson.acctDeptNm;
scwin.vUserNm = scwin.memJson.userNm;
scwin.vUserId = scwin.memJson.userId;
scwin.vAcctDeptCd = scwin.memJson.acctDeptCd;

// 아래 전역변수 어떤 데이터로 맞추어야하는지 불확실함.
scwin.vEpUserId = scwin.memJson.epId;
scwin.vSlipKndNm = "";
scwin.vApprvReqNo = "";
scwin.epSlipKndCd = "";
scwin.epDtlDspGbn = "0";
scwin.chkReceptYn = 0;
scwin.checkNonEvidence = "true"; //
scwin.progressStop = "false"; //진행여부
scwin.nonEvidenceCount = 0; //부적격증빙 카운트
scwin.vCoCd = scwin.memJson.coCd;
scwin.vCoNm = ""; //회사명 
scwin.vRetrieveSlipNo = null;
scwin.changeTitle = "";
scwin.onpageload = async function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = async function () {
  let todayDate = WebSquare.date.getCurrentServerDate();
  scwin.strFileDate = todayDate.slice(0, 6);
  scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;

  // 2026-05-06 : 파일경로 수정 - FI/electaxinvc/evid/yyyymm/ + 파일명
  scwin.systemPathVal = DSystemCode.FI + "/electaxinvc/evid/" + scwin.strFileDate + "/";
  console.log("scwin.systemPathKey : " + scwin.systemPathKey);
  console.log("scwin.systemPathVal : " + scwin.systemPathVal);
  scwin.path = "/WEB-INF/struts_config/pt/co.xml";
  lc_evidClsCd.setValue("00");
  $c.gus.cfEnableObj($p, searchReqNo, false);
  lc_slipKndCd.setSelectedIndex(0);
  lc_acctCd.setSelectedIndex(0);
  await scwin.getCheckCode();
  chk_receptYn.setValue("0");
  scwin.f_PopUpCompanyInfo();
  await scwin.getMaxCloseYm(); //마감년월 가져오기

  scwin.vRetrieveSlipNo = $c.data.getParameter($p, "slipNo");

  // 전표번호 넘어오면 일자, 작성부서 먼저 조회 (scwin.vRetrieveSlipNo 무슨 데이터인지 확인해야됨.)
  if (scwin.vRetrieveSlipNo != null) {
    ds_retrieveSlipNo.insertRow();
    ds_retrieveSlipNo.setCellData(0, "slipNo", scwin.vRetrieveSlipNo);
    $c.sbm.execute($p, sbm_retrieveSlipNo);
  }
  console.log("----------- onUdcCompleted");
  // fromSlipDt.setValue(scwin.strFromDate);
  // toSlipDt.setValue(scwin.strToDate);
  drawEmpNo.setValue(scwin.vUserId);
  drawEmpNm.setValue(scwin.vUserNm);
};

//-------------------------------------------------------------------------
// 상신처리전 예외처리 전표 종류 데이터 조회 
//-------------------------------------------------------------------------
scwin.getCheckCode = async function () {
  //전자결재전표종류체크가능
  ds_code.set("grpCd", "ZZ025");
  await scwin.submitExcute(sbm_code); // $c.sbm.execute(sbm_code);

  //전자결재재경팀필수전표
  ds_slipChk.set("grpCd", "ZZ028");
  ds_slipChk.set("fltrCd1", scwin.vCoCd);
  await scwin.submitExcute(sbm_slipChk); // $c.sbm.execute(sbm_slipChk);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // let vFromSlipDt = fromSlipDt.getValue().trim();
  // let vToSlipDt = toSlipDt.getValue().trim();

  // tobe에서 조회할때 날짜에 / 가 들어가서 조회가 안됨. 20260101 로 들어가야하는데 2026/01/01 이렇게 들어가서 조회가 안됨
  // 원래 위에 작동했는데 갑자기 안되어서 아래로 수정함.
  let vFromSlipDt = fromSlipDt.getValue().trim().replace(/\D/g, "");
  let vToSlipDt = toSlipDt.getValue().trim().replace(/\D/g, "");
  lc_evidClsCd.setValue("00");
  if (vFromSlipDt != "" && vFromSlipDt.length < 8) {
    $c.win.alert($p, "생성시작일자를 정확하게 입력해 주십시오.");
    fromSlipDt.focus();
    return false;
  }
  if (vToSlipDt != "" && vToSlipDt.length < 8) {
    $c.win.alert($p, "생성종료일자를 정확하게 입력해 주십시오.");
    toSlipDt.focus();
    return false;
  }
  if (vFromSlipDt != "" && vToSlipDt != "" && vFromSlipDt > vToSlipDt) {
    $c.win.alert($p, "생성일 종료일자가 시작일자보다 이전입니다.");
    toSlipDt.focus();
    return false;
  }
  let vDrawAcctDeptCd = drawAcctDeptCd.getValue(); // 사원귀속부서
  let vDrawAcctDeptCd2 = drawAcctDeptCd2.getValue(); // 사원귀속부서2
  let vDrawAcctDeptCd3 = drawAcctDeptCd3.getValue(); // 사원귀속부서3
  let vDrawAcctDeptCd4 = drawAcctDeptCd4.getValue(); // 사원귀속부서4
  let vDrawEmpNo = drawEmpNo.getValue(); // 사원번호
  let vSlipKndCd = lc_slipKndCd.getValue(); // 전표구분
  scwin.epSlipKndCd = lc_slipKndCd.getValue(); // 전표구분
  let vAcctCd = lc_acctCd.getValue(); // 계정과목
  let vApprvDocKndCd = lc_apprvDocKndCd.getValue(); // 결재요청구분
  let vSlipNo = searchSlipNo.getValue(); // 전표번호
  scwin.vReqNo = searchReqNo.getValue(); // 요청번호

  if (scwin.vCoCd == "023" && vSlipKndCd == "A17") {} else {
    if (vDrawAcctDeptCd == "" && vDrawAcctDeptCd2 == "" && vDrawAcctDeptCd3 == "" && vDrawAcctDeptCd4 == "" && vDrawEmpNo == "") {
      $c.win.alert($p, "작성부서1 또는 작성자 둘중 하나를 입력해 주세요");
      return;
    }
    if (vDrawAcctDeptCd2 != "" || vDrawAcctDeptCd3 != "" || vDrawAcctDeptCd4 != "") {
      if (vDrawEmpNo != "") {
        $c.win.alert($p, "작성부서2,3,4와 작성자는 함께 조회할 수 없습니다");
        return;
      }
    }
    if (vDrawAcctDeptCd2 != "" || vDrawAcctDeptCd3 != "" || vDrawAcctDeptCd4 != "") {
      if (vDrawAcctDeptCd == "") {
        $c.win.alert($p, "부서로 조회할 경우 작성부서1을 입력해 주세요");
        return;
      }
    }
  }
  let rowData = {};
  rowData = {
    "fromSlipDt": vFromSlipDt,
    "toSlipDt": vToSlipDt,
    "drawAcctDeptCd": vDrawAcctDeptCd,
    "drawAcctDeptCd2": vDrawAcctDeptCd2,
    "drawAcctDeptCd3": vDrawAcctDeptCd3,
    "drawAcctDeptCd4": vDrawAcctDeptCd4,
    "slipKndCd": vSlipKndCd,
    "acctCd": vAcctCd,
    "apprvDocKndCd": vApprvDocKndCd,
    "slipNo": vSlipNo,
    "reqNo": scwin.vReqNo
  };
  if (scwin.vRetrieveSlipNo != null) {
    drawEmpNo.setValue(""); //사원번호
    drawEmpNm.setValue(""); //사원명
  } else {
    rowData["drawEmpNo"] = vDrawEmpNo;
  }
  dma_approveList.setJSON(rowData);
  scwin.submitExcute(sbm_approveList);
};

//-------------------------------------------------------------------------
// 전자결재팝업 상세
//-------------------------------------------------------------------------
scwin.f_RetrieveForMobile = async function () {
  let vFromSlipDt = fromSlipDt.getValue().trim().replace(/\D/g, "");
  let vToSlipDt = toSlipDt.getValue().trim().replace(/\D/g, "");
  let vDrawAcctDeptCd = drawAcctDeptCd.getValue(); // 사원귀속부서
  let vDrawAcctDeptCd2 = drawAcctDeptCd2.getValue(); // 사원귀속부서2
  let vDrawAcctDeptCd3 = drawAcctDeptCd3.getValue(); // 사원귀속부서3		
  let vDrawAcctDeptCd4 = drawAcctDeptCd4.getValue(); // 사원귀속부서4				
  let vDrawEmpNo = drawEmpNo.getValue(); // 사원번호
  let vSlipKndCd = lc_slipKndCd.getValue(); // 전표구분
  scwin.epSlipKndCd = lc_slipKndCd.getValue(); // 전표구분
  let vAcctCd = lc_acctCd.getValue(); // 계정과목
  let vApprvDocKndCd = lc_apprvDocKndCd.getValue(); // 결재요청구분
  let vSlipNo = searchSlipNo.getValue(); // 전표번호
  scwin.vReqNo = searchReqNo.getValue(); // 요청번호

  let rowData = {};
  rowData = {
    "fromSlipDt": vFromSlipDt,
    "toSlipDt": vToSlipDt,
    "drawAcctDeptCd": vDrawAcctDeptCd,
    "drawAcctDeptCd2": vDrawAcctDeptCd2,
    "drawAcctDeptCd3": vDrawAcctDeptCd3,
    "drawAcctDeptCd4": vDrawAcctDeptCd4,
    "drawEmpNo": vDrawEmpNo,
    "slipKndCd": vSlipKndCd,
    "acctCd": vAcctCd,
    "apprvDocKndCd": vApprvDocKndCd,
    "slipNo": vSlipNo,
    "reqNo": scwin.vReqNo
  };
  dma_approveDetail.setJSON(rowData);
  await scwin.submitExcute(sbm_approveDetail);
};

//-------------------------------------------------------------------------
// 선택된 전표번호 상신정보
//-------------------------------------------------------------------------
scwin.f_CheckedSlipListInfo = async function () {
  let vCountRow = ds_approveList.getTotalRow();
  let vSlipNoList = ""; // 전표번호 목록
  let vPostReqDtList = ""; // 회계요청일자 목록
  let vModDtmList = ""; // 수정일자 목록
  let vTotalDrAmt = 0; // 차변금액총액
  let vTotalCrAmt = 0; // 대변금액총액
  let vClntNm = ""; // 거래처명
  let vDrAcctNm = ""; // 차변계정명
  let vCrAcctNm = ""; // 대변계정명
  let vTotSlipCnt = 0; // 총건수
  let vApprvGbn = ""; // 전결위임구분
  let vApprvAmt = 0; // 전결위임금액
  let vTmpDrAcctNm = "";
  let vTmpCrAcctNm = "";
  let vTmpChk = "";
  let vTmpClntNm = "";
  let vTmpTotalCnt = 0;
  let vTmpApprvGbn = ""; //전결위임구분
  let vReturnArray;
  if (vCountRow > 0) {
    for (let i = 0; i < vCountRow; i++) {
      let vChk = ds_approveList.getCellData(i, "chk");
      if (vChk == "T") {
        let vBfSlipNo = "";
        vTmpApprvGbn = ds_approveList.getCellData(i, "apprvGbn");
        if (vTmpChk == "") {
          vTmpClntNm = ds_approveList.getCellData(i, "mgntClntNm");
          if (vTmpClntNm.trim() != "") {
            //alert (vTmpClntNm);
            vTmpChk = vChk;
          }
        }
        if (i > 0) {
          vBfSlipNo = ds_approveList.getCellData(i - 1, "slipNo");
        }
        let vSlipNo = ds_approveList.getCellData(i, "slipNo");
        if (vSlipNo != vBfSlipNo) {
          vSlipNoList += ds_approveList.getCellData(i, "slipNo") + "_";
          let vTmpPostReqDt = ds_approveList.getCellData(i, "postReqDt"); // to-do ??... scwin으로 해야되는지 아닌지 불확실
          vPostReqDtList += ds_approveList.getCellData(i, "postReqDt") + "_";
          vModDtmList += ds_approveList.getCellData(i, "modDtm") + "_";
          vTmpTotalCnt++;
        }
        let vDrAmt = ds_approveList.getCellData(i, "drAmt"); //차변금액
        let vCrAmt = ds_approveList.getCellData(i, "crAmt"); //대변금액

        if (vDrAmt > 0) {
          if (vTmpDrAcctNm == "") {
            vTmpDrAcctNm = ds_approveList.getCellData(i, "acctNm");
          }
        }
        if (vCrAmt > 0) {
          if (vTmpCrAcctNm == "") {
            vTmpCrAcctNm = ds_approveList.getCellData(i, "acctNm");
          }
        }
        vTotalDrAmt += Number(vDrAmt);
        vTotalCrAmt += Number(vCrAmt);
        if (vTmpApprvGbn.trim() != "") {
          if (vApprvAmt < vDrAmt) {
            vApprvGbn = vTmpApprvGbn; //전결위임구분
            vApprvAmt = vDrAmt;
          }
        }
      }
    }
    if (vTmpTotalCnt > 0) {
      if (vTmpClntNm.trim() != "") {
        vClntNm = vTmpClntNm + " 外"; //거래처명
      } else {
        vClntNm = " - "; //거래처명
      }
      vDrAcctNm = vTmpDrAcctNm + " 外"; // 차변계정명
      vCrAcctNm = vTmpCrAcctNm + " 外"; // 대변계정명
      vTotSlipCnt = vTmpTotalCnt; // 총건수

      vReturnArray = new Array(10); // 8 -> 10
      vReturnArray[0] = vDrAcctNm; // 차변계정명
      vReturnArray[1] = vCrAcctNm; // 대변계정명
      vReturnArray[2] = vClntNm; // 거래처명
      vReturnArray[3] = vTotSlipCnt + "  건"; // 총건수
      vReturnArray[4] = $c.gus.cfInsertComma($p, Number(vTotalCrAmt)); // 대변총금액
      vReturnArray[5] = $c.gus.cfInsertComma($p, Number(vTotalDrAmt)); // 차변총금액
      vReturnArray[6] = vSlipNoList; // 전표목록
      vReturnArray[7] = vPostReqDtList; // 회계요청번호 목록
      vReturnArray[8] = vModDtmList; // 수정일자 목록
      vReturnArray[9] = vApprvGbn; // 전결위임구분

      let info = "";
      if (vTmpClntNm.trim() != "") {
        info = "거래처명:" + vTmpClntNm + " 外\n";
      } else {
        info = "거래처명:" + " - \n";
      }
      info += "총건수:" + vTmpTotalCnt + "\n";
      info += "대변총금액:" + vReturnArray[4] + "\n";
      info += "차변총금액:" + vReturnArray[5] + "\n";
      await $c.win.alert($p, info);
    }
    return vReturnArray;
  }
};

//-------------------------------------------------------------------------
// 동일한 전표번호 체크박스상태 동일하게 유지
//-------------------------------------------------------------------------
scwin.f_ChangeCheckBoxStatus = function (pRow, pVal) {
  let vCountRow = ds_approveList.getTotalRow();
  let vCurrentRowSlipNo = ds_approveList.getCellData(pRow, "slipNo");
  let vSearchRowUnit = 10; // 전표검색시 한 전표의 갯수가 계정항목갯수가 n개 이상인 경우 n개 이상으로 변경
  let vSearchStartRow = pRow - vSearchRowUnit;
  let vAdaptVal = pVal;
  let vTmpCompareCheck = "";
  if (pRow > 0) {
    if (vSearchStartRow < 0) {
      vSearchStartRow = 0;
    }
    // out: // ??
    for (let i = vSearchStartRow; i < vCountRow; i++) {
      let vTmpSlipNo = ds_approveList.getCellData(i, "slipNo");
      if (vCurrentRowSlipNo == vTmpSlipNo) {
        ds_approveList.setCellData(i, "chk", vAdaptVal);
        vTmpCompareCheck = vAdaptVal;
      } else if (vTmpCompareCheck != "" && vCurrentRowSlipNo != vTmpSlipNo) {
        break;
      }
    }
  }
};

//-------------------------------------------------------------------------
// 회계요청일자 입력창 Enable, Disable
//-------------------------------------------------------------------------
scwin.f_CheckPostReqDtInputYn = function (vRow) {
  let vCurrentRowSlipNo = ds_approveList.getCellData(vRow, "slipNo");
  let vFirstYn = true;
  let vEqualSplitNo = 0;
  for (let i = 0; i < vRow; i++) {
    let vTmpSlipNo = ds_approveList.getCellData(i, "slipNo");
    if (vCurrentRowSlipNo == vTmpSlipNo) {
      vEqualSplitNo++;
    }
  }
  if (vEqualSplitNo > 0) {
    vFirstYn = false;
  }
  if (vFirstYn) {
    // gr_approveList.UrlImages = CALENDAR_BTN;
    gr_approveList.setCellReadOnly(vRow, "postReqDt", false);
    gr_approveList.setCellInputType(vRow, "postReqDt", {
      inputType: "textImage"
    });
  } else {
    gr_approveList.setCellReadOnly(vRow, "postReqDt", true);
    gr_approveList.setCellInputType(vRow, "postReqDt", {
      inputType: ""
    });
  }
};

//-------------------------------------------------------------------------
// 선택된 전표의 회계요청일자 입력체크 
//-------------------------------------------------------------------------
scwin.f_CheckSlectedSlipPostReqDt = async function () {
  let vCountRow = ds_approveList.getTotalRow();
  let vReturnMsg = "* 전자결재 요청 시 아래전표의 회계요청일자는 필수 입력 사항입니다. \n\n";
  let vBlankRowCnt = 0;
  let vSpplyDt = "";
  for (let i = 0; i < vCountRow; i++) {
    let vCheck = ds_approveList.getCellData(i, "chk");
    let vSlipNo = ds_approveList.getCellData(i, "slipNo");
    if (vCheck == "T") {
      let vTmpPostReqDt = ds_approveList.getCellData(i, "postReqDt");
      let vBeforeSlipNo = ds_approveList.getCellData(i - 1, "slipNo");
      let vSlipDt = ds_approveList.getCellData(i, "slipDt");
      vSpplyDt = ds_approveList.getCellData(i, "spplyDt");
      if (lc_apprvDocKndCd.getValue() == "001") {
        if (vSlipDt.substring(0, 6) != vTmpPostReqDt.substring(0, 6)) {
          vReturnMsg = "전표일자와 회계요청일자 의 년월이 같아야 합니다.";
          return vReturnMsg;
        }
        if (vSpplyDt != "" && vSpplyDt.substring(0, 8) > vTmpPostReqDt.substring(0, 8)) {
          vReturnMsg = "회계요청일는 공급일자(" + vSpplyDt.substring(0, 8) + ")보다 커야 합니다.";
          return vReturnMsg;
        }
      }
      if (i > 1) {
        if (vBeforeSlipNo != vSlipNo) {
          if (vTmpPostReqDt.trim() == "") {
            vReturnMsg += " - 전표번호 : " + vSlipNo + "  \n";
            vBlankRowCnt++;
          }
        }
      } else {
        if (vTmpPostReqDt.trim() == "") {
          vReturnMsg += " - 전표번호 : " + vSlipNo + "  \n";
          vBlankRowCnt++;
        }
      }
    }
  }
  if (vBlankRowCnt > 0) {
    return vReturnMsg;
  } else {
    return "0";
  }
};

//-------------------------------------------------------------------------
// 선택된 전표의 전표종류체크 
//-------------------------------------------------------------------------
scwin.f_CheckSlectedSlipKnd = async function () {
  let vCountRow = ds_approveList.getTotalRow();
  let vReturnMsg = "※ 전자결재 요청 시 아래전표의 전표종류가 틀립니다. \n\n";
  let vBlankRowCnt = 0;
  let first_slipKndCd = "";
  let first_slipKnd = "";
  let slipKnd_is_complex = false;

  // 체크된 항목의 갯수 
  let vCountI = 0;
  scwin.epDtlDspGbn = "0"; // 거래일시 setting 구분자 

  for (let i = 0; i < vCountRow; i++) {
    let vCheck = ds_approveList.getCellData(i, "chk");
    let vSlipNo = ds_approveList.getCellData(i, "slipNo");
    if (vCheck == "T") {
      scwin.epSlipKndCd = ds_approveList.getCellData(i, "slipKndCd"); // 전표종류코드
      if (scwin.epSlipKndCd == "A17" || scwin.epSlipKndCd == "A26") {
        // 개인형 법인카드가 포함돼어 있는 경우 거래일자 결재상신내역에 표시 
        scwin.epDtlDspGbn = "1";
      }

      // 첫번째 행이라면, 첫번째 행의 전표 종류를 [전역변수에]저장한다. 
      if (vCountI == 0) {
        first_slipKndCd = ds_approveList.getCellData(i, "slipKndCd"); // 전표종류코드
        first_slipKnd = ds_approveList.getCellData(i, "slipKnd"); // 전표종류명칭
        scwin.vSlipKndNm = ds_approveList.getCellData(i, "slipKnd"); // 전표종류명칭

        // 첫번째 행이 같은 전표종류가 아니어도 괜찬은 전표종류들에 해당 되는 전표 라면, 체크 
        for (let j = 0; j < ds_editAuth.getTotalRow(); j++) {
          if (ds_editAuth.getCellData(j, "cd") == first_slipKndCd) {
            slipKnd_is_complex = true;
            j = ds_editAuth.getTotalRow();
          } else {
            slipKnd_is_complex = false;
          }
        }
      }
      let vSlipKnd = ds_approveList.getCellData(i, "slipKnd"); // 전표종류
      let vSlipKndCd = ds_approveList.getCellData(i, "slipKndCd"); // 전표종류코드			

      // 전표종류가 공통코드 zz025 결재전표종류 체크가능 전표종류라면 
      if (slipKnd_is_complex == true) {
        let opset = false;
        for (let j = 0; j < ds_editAuth.getTotalRow(); j++) {
          if (ds_editAuth.getCellData(j, "cd") == vSlipKndCd) {
            opset = true;
            j = ds_editAuth.getTotalRow();
          }
        }
        if (opset == false) {
          vReturnMsg += " - 전표번호 : " + vSlipNo + "  \n";
          vBlankRowCnt++;
        }
      }
      // 그외라면 
      else {
        //alert("===================== 그외입니다. ===============================");
        // 그외는 첫번째 행과 그외 선택 행의 전표종류가 틀리면, 전표번호를 기입하고, 이상 행의 숫자를 증가한다. 
        if (first_slipKndCd != vSlipKndCd) {
          vReturnMsg += " - 전표번호 : " + vSlipNo + "  \n";
          vBlankRowCnt++;
        }
      }
      // 체크된 항목갯수 증가 
      vCountI++;
    }
  }
  if (vBlankRowCnt > 0) {
    return vReturnMsg;
  } else {
    return "0";
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function () {
  await udc_company.cfCommonPopUp(rtnList => {
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      scwin.vCoNm = rtnList[5]; // 회사명 
    }
  }, scwin.vCoCd, "", "T", null, null, null, null, null, null, null, null, null);
};

// 귀속부서팝업 클릭 이벤트
scwin.udc_comCode_onclickEvent = function (e) {
  scwin.f_openDeptPopUp();
};

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp = function (gb) {
  let vTitle = "작성부서, 작성부서코드, 작성부서명";
  let rtnList = new Array();
  let pCode = drawAcctDeptCd.getValue();
  let pName = drawAcctDeptNm.getValue();
  switch (gb) {
    case "1":
      $c.gus.cfClearPairObj($p, drawAcctDeptNm);
      break;
    case "2":
      $c.gus.cfClearPairObj($p, drawAcctDeptCd);
      break;
    default:
      break;
  }
  rtnList = udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, pCode, pName, "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //
};

// 귀속부서팝업 콜백
scwin.udc_comCode_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, drawAcctDeptCd, drawAcctDeptNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    drawEmpNo.setValue(""); //사원번호
    drawEmpNm.setValue(""); //사원명
  }
};

// 귀속부서팝업2 클릭 이벤트
scwin.udc_comCode2_onclickEvent = function () {
  scwin.f_openDeptPopUp2();
};

//-------------------------------------------------------------------------
// 귀속부서팝업2
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp2 = function (gb) {
  let vTitle = "귀속부서, 귀속부서코드, 귀속부서명";
  let rtnList = new Array();
  let pCode = drawAcctDeptCd2.getValue();
  let pName = drawAcctDeptNm2.getValue();
  switch (gb) {
    case "1":
      $c.gus.cfClearPairObj($p, drawAcctDeptNm2);
      break;
    case "2":
      $c.gus.cfClearPairObj($p, drawAcctDeptCd2);
      break;
    default:
      break;
  }
  rtnList = udc_comCode2.cfCommonPopUp(scwin.udc_comCode2_callBackFunc, pCode, pName, "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //
};

// 귀속부서팝업2 콜백
scwin.udc_comCode2_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, drawAcctDeptCd2, drawAcctDeptNm2);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    drawEmpNo.setValue(""); //사원번호
    drawEmpNm.setValue(""); //사원명
  }
};

// 귀속부서팝업3 클릭 이벤트
scwin.udc_comCode3_onclickEvent = function () {
  scwin.f_openDeptPopUp3();
};

//-------------------------------------------------------------------------
// 귀속부서팝업3 (2017년 9월 추가)
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp3 = function (gb) {
  let vTitle = "귀속부서, 귀속부서코드, 귀속부서명";
  let rtnList = new Array();
  let pCode = drawAcctDeptCd3.getValue();
  let pName = drawAcctDeptNm3.getValue();
  switch (gb) {
    case "1":
      $c.gus.cfClearPairObj($p, drawAcctDeptNm3);
      break;
    case "2":
      $c.gus.cfClearPairObj($p, drawAcctDeptCd3);
      break;
    default:
      break;
  }
  rtnList = udc_comCode3.cfCommonPopUp(scwin.udc_comCode3_callBackFunc, pCode, pName, "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //
};

// 귀속부서팝업3 콜백
scwin.udc_comCode3_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, drawAcctDeptCd3, drawAcctDeptNm3);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    drawEmpNo.setValue(""); //사원번호
    drawEmpNm.setValue(""); //사원명
  }
};

// 귀속부서팝업4 클릭 이벤트
scwin.udc_comCode4_onclickEvent = function () {
  scwin.f_openDeptPopUp4();
};

//-------------------------------------------------------------------------
// 귀속부서팝업4 (2017년 9월 추가)
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp4 = function (gb) {
  let vTitle = "귀속부서, 귀속부서코드, 귀속부서명";
  let rtnList = new Array();
  let pCode = drawAcctDeptCd4.getValue();
  let pName = drawAcctDeptNm4.getValue();
  switch (gb) {
    case "1":
      $c.gus.cfClearPairObj($p, drawAcctDeptNm4);
      break;
    case "2":
      $c.gus.cfClearPairObj($p, drawAcctDeptCd4);
      break;
    default:
      break;
  }
  rtnList = udc_comCode4.cfCommonPopUp(scwin.udc_comCode4_callBackFunc, pCode, pName, "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //
  $c.gus.cfSetReturnValue($p, rtnList, drawAcctDeptCd4, drawAcctDeptNm4);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    drawEmpNo.setValue(""); //사원번호
    drawEmpNm.setValue(""); //사원명
  }
};

// 귀속부서팝업4 콜백
scwin.udc_comCode4_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, drawAcctDeptCd4, drawAcctDeptNm4);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    drawEmpNo.setValue(""); //사원번호
    drawEmpNm.setValue(""); //사원명
    //drawAcctDeptCd.readOnly = false;
  }
};
scwin.udc_emp_onblurCodeEvent = function (e) {
  scwin.f_openEmpPopUp();
};
scwin.udc_emp_onblurNameEvent = function (e) {
  scwin.f_openEmpPopUp();
};

// 사원팝업 돋보기 클릭 이벤트
scwin.udc_emp_onclickEvent = function () {
  scwin.f_openEmpPopUp();
};

//-------------------------------------------------------------------------
// 사원팝업
//-------------------------------------------------------------------------
scwin.f_openEmpPopUp = function (gb) {
  let vTitle = "사원팝업, 사원번호, 사원명";
  let rtnList = new Array();
  let pCode = drawEmpNo.getValue();
  let pName = drawEmpNm.getValue();
  switch (gb) {
    case "1":
      $c.gus.cfClearPairObj($p, drawEmpNm);
      break;
    case "2":
      $c.gus.cfClearPairObj($p, drawEmpNo);
      break;
    default:
      break;
  }
  rtnList = udc_emp.cfCommonPopUp(scwin.udc_emp_callBackFunc, pCode, pName, "T", null, null, "150,176", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //  사원코드
  $c.gus.cfSetReturnValue($p, rtnList, drawEmpNo, drawEmpNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
  }
};

// 사원팝업 콜백
scwin.udc_emp_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, drawEmpNo, drawEmpNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
  }
};
scwin.excelDown = function () {
  scwin.f_runExcel(gr_approveList);
};

//-----------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  let grdObj = gr_approveList;
  if ($c.gus.cfIsNull($p, grdObj)) return;
  let totCnt = ds_approveList.getTotalRow();
  let sheetTitle = "전자결재요청";
  if (totCnt != 0) {
    let messageStr = "EXCEL로 다운로드 받으시겠습니까?";
    let cfrm = await $c.win.confirm($p, messageStr);
    if (cfrm) {
      // $c.data.downloadGridViewExcel(grid, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
      const infoArr = [];
      const options = {
        fileName: sheetTitle + ".xlsx",
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업 
//-------------------------------------------------------------------------  	
scwin.f_evidPopUp = function () {
  let valueObject = new Object();
  valueObject.slipNo = ds_approveList.getCellData(ds_approveList.rowPosition, "slipNo");
  valueObject.slipKndCd = ds_approveList.getCellData(ds_approveList.rowPosition, "slipKndCd");
  let v_url = "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml";
  let opts = {
    id: "pupup",
    popupName: "증빙등록조회",
    modal: true,
    type: "browserPopup",
    width: 885,
    height: 790,
    title: ""
  };
  let returnValue = $c.win.openPopup($p, v_url, opts, valueObject);
  if (returnValue == "Y") {
    scwin.f_Retrieve();
  }
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_getEvidClsCd:
      break;
    case sbm_getVatCount:
      break;
    case sbm_create:
      await scwin.sbm_create_submitdone(e);
      break;
    case sbm_code:
      break;
    case sbm_slipChk:
      break;
    case sbm_getMaxCloseYm:
      await scwin.sbm_getMaxCloseYm_submitdone(e);
      break;
    case sbm_approveList:
      await scwin.sbm_approveList_submitdone(e);
      break;
    case sbm_approveDetail:
      break;
    default:
      break;
  }
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

//-------------------------------------------------------------------------
// 첨부파일 일괄 업로드
//-------------------------------------------------------------------------  	
scwin.fileSubmit = async function () {
  let countChk = 0;
  let vatCount = 0;
  let evidClsCd = "";
  for (i = 0; i < ds_approveList.getTotalRow(); i++) {
    if (ds_approveList.getCellData(i, "chk") == "T") {
      countChk++;
    }
  }
  if (countChk == 0) {
    $c.win.alert($p, "선택한 전표가 없습니다.");
    return;
  }
  let vBlankSlipKnd = await scwin.f_CheckSlectedSlipKnd();
  if (vBlankSlipKnd != "0") {
    await $c.win.alert($p, vBlankSlipKnd);
    return false;
  }
  if (lc_evidClsCd.getValue() == "00") {
    await $c.win.alert($p, "증빙파일종류를 선택해 주시기 바랍니다. ('증빙 일괄 업로드' 버튼 옆)");
    return;
  }
  for (i = 0; i < ds_approveList.getTotalRow(); i++) {
    if (ds_approveList.getCellData(i, "chk") == "T") {
      let checkSlipNo = ds_approveList.getCellData(i, "slipNo");
      let checkEmpNm = ds_approveList.getCellData(i, "drawEmpNm");
      if (scwin.vAcctDeptCd != '00009' && scwin.vUserNm != ds_approveList.getCellData(i, "drawEmpNm")) {
        await $c.win.alert($p, "전표[" + checkSlipNo + "] 의 증빙은 등록자[" + checkEmpNm + "] 만 등록 가능 합니다.");
        $c.data.undoRow($p, ds_approveList);
        return;
      }
    }
  }
  if (scwin.chkReceptYn == 1) {
    for (i = 0; i < ds_approveList.getTotalRow(); i++) {
      if (ds_approveList.getCellData(i, "chk") == "T") {
        let slipNo = ds_approveList.getCellData(i, "slipNo");
        let checkEvidClsCd = 0;
        await scwin.getVatCount(slipNo); // 부가세자료 여부 Count
        await scwin.getEvidClsCd(slipNo); //전표의 증빙구분 가지고 오기

        vatCount = dlt_ds_getVatCount.getCellData(0, "col1");
        evidClsCd = dlt_ds_getEvidClsCd.getCellData(0, "col1");
        if (vatCount > '0') {
          if (["10", "20", "30"].includes(evidClsCd)) {
            checkEvidClsCd++;
          }
          if (checkEvidClsCd == '0') {
            $c.win.alert($p, "전표[" + slipNo + "] \n" + "영수구분 등록 가능 부가세 증빙종류 : \n" + "세금계산서, 영세율세금계산서, 계산서\n\n" + "이 외의 증빙종류는 영수구분 파일등록 불가 합니다.");
            return;
          }
        } else if (vatCount == '0') {
          $c.win.alert($p, "전표[" + slipNo + "] \n" + "영수구분 등록 가능 부가세 증빙종류 : \n" + "매입 부가세 중 세금계산서, 영세율세금계산서, 계산서\n\n" + "현재 부가세 데이터 미존재 또는 매입 부가세 전표가 아닙니다.");
          return;
        }
      }
    }
  }
  let uploadConfirm = await $c.win.confirm($p, "증빙파일 일괄 업로드 하시겠습니까?");
  if (!uploadConfirm) {
    return;
  }
  console.log("startFileUpload");
  udc_fielUpload.startFileUpload();
};
scwin.udc_fielUpload_onFileUploadDone = function (isSuccess) {
  scwin.uploadComplete();
};
scwin.uploadComplete = function () {
  scwin.f_saveFile();
};
scwin.f_saveFile = async function () {
  // 파일 업로드 데이터 초기화
  ds_fileUploadGDS.removeAll();

  // 증빙구분은 체크 row마다 동일하므로 for문 밖에서 한 번만 가져온다
  let evidClsCd = lc_evidClsCd.getValue();

  // 체크된 행이 있는지 확인용
  let checkedCnt = 0;

  // 체크된 row 개수만 확인한다
  for (let i = 0; i < ds_approveList.getTotalRow(); i++) {
    if (ds_approveList.getCellData(i, "chk") == "T") {
      checkedCnt++;
    }
  }

  // 체크된 전표가 없으면 저장하지 않음
  if (checkedCnt == 0) {
    await $c.win.alert($p, "선택한 전표가 없습니다.");
    return;
  }

  // 업로드된 파일 목록은 체크 row 반복문 밖에서 한 번만 가져온다
  const uploadAllData = udc_fielUpload.getData();

  // 업로드된 파일이 없으면 저장하지 않음
  if (uploadAllData == null || uploadAllData.length == 0) {
    await $c.win.alert($p, "업로드할 파일이 없습니다.");
    return;
  }

  // 파일 데이터는 체크 개수와 상관없이 업로드된 파일 수만큼만 insert
  for (let j = 0; j < uploadAllData.length; j++) {
    const rowData = uploadAllData[j];
    const insertIdx = ds_fileUploadGDS.insertRow();
    const insertData = {};
    insertData.fileName = rowData.ORIGIN_FILE_NM;
    insertData.fileSize = rowData.FILE_SIZE;
    insertData.filePath = scwin.systemPathVal + rowData.STORED_FILE_NM;
    console.log("insertData.filePath : " + insertData.filePath);
    ds_fileUploadGDS.setRowJSON(insertIdx, insertData, true);
  }

  // 체크된 row마다 동일하게 들어갈 값이므로 한 번만 세팅
  dma_receptYn.set("receptYn", scwin.chkReceptYn);
  dma_fromClsCd.set("fromClsCd", "30");
  dma_evidClsCd.set("evidClsCd", evidClsCd);

  // 저장 서브미션은 무조건 한 번만 실행
  sbm_create.action = "/ac.fi.taxbiz.evidmgnt.SaveEvidMgntImage2CMD.do";
  await scwin.submitExcute(sbm_create);

  // ds_fileUploadGDS.removeAll();

  // for (i = 0; i < ds_approveList.getTotalRow(); i++) {
  //     if (ds_approveList.getCellData(i, "chk") == "T") {
  //         const uploadAllData = udc_fielUpload.getData();
  //         let evidClsCd = lc_evidClsCd.getValue();

  //         for (let j = 0; j < uploadAllData.length; j++) {
  //             const rowData = uploadAllData[j];
  //             const insertIdx = ds_fileUploadGDS.insertRow();
  //             const insertData = {};

  //             insertData.fileName = rowData.ORIGIN_FILE_NM;
  //             insertData.fileSize = rowData.FILE_SIZE;
  //             insertData.filePath = scwin.systemPathVal + rowData.STORED_FILE_NM;

  //             // insertData.filePath = rowData.FILE_STORED_PATH + rowData.STORED_FILE_NM;
  //             console.log("insertData.filePath : " + insertData.filePath);

  //             ds_fileUploadGDS.setRowJSON(insertIdx, insertData, true);

  //         };

  //         dma_receptYn.set("receptYn", scwin.chkReceptYn);
  //         dma_fromClsCd.set("fromClsCd", "30");
  //         dma_evidClsCd.set("evidClsCd", evidClsCd);
  //     }
  // }

  // sbm_create.action = "/ac.fi.taxbiz.evidmgnt.SaveEvidMgntImage2CMD.do";
  // await scwin.submitExcute(sbm_create);
};

// 다른 crud가 하나의 서브미션을 태울때 처리방법 (예. 업데이트, 삭제가 서브미션이 같을때) (예제화면: se_102_01_01b   bulk booking)
/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

// -----------------------------------------------------------------------------
//     G A U C E   C O M P O N E N T' S   E V E N T S  
// -----------------------------------------------------------------------------
// for="tr_create" event="OnSuccess()"
scwin.sbm_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  await $c.win.alert($p, "업로드가 완료 되었습니다.");
  udc_fielUpload.setGridClear();
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// TB_FI304 데이터 조회
//-------------------------------------------------------------------------
scwin.getEvidClsCd = async function (slipNo) {
  // 주의점 PARAM값이 너무 길면 쿼리 결과가 매핑이 되지 않는다. ~!!1
  // SELECT 절 
  let param1 = "A.EVID_CLS_CD 	as COL1 " + ",''     		 	as COL2 " + ",'' 		     	as COL3 " + ",'' 			 	as COL4 " + ",'' 				as COL5 " + ",'' 				as COL6 " + ",'' 				as COL7 " + ",'' 				as COL8 " + ",'' 				as COL9 " + ",'' 				as COL10 ";

  // 대상테이블 	
  let param2 = " TB_FI304 A ";

  // 조건절	  
  let param3 = " AND A.SLIP_NO = '" + slipNo + "'";

  // 정렬    
  let param4 = " A.SLIP_NO ";
  ds_getEvidClsCd.set("sysCd", "CommonEBC");
  ds_getEvidClsCd.set("queryId", "dinymicQueryTest");
  ds_getEvidClsCd.set("param1", param1);
  ds_getEvidClsCd.set("param2", param2);
  ds_getEvidClsCd.set("param3", param3);
  ds_getEvidClsCd.set("param4", param4);
  // $c.sbm.execute(sbm_getEvidClsCd);

  await scwin.submitExcute(sbm_getEvidClsCd);
};

//-------------------------------------------------------------------------
// TB_FI304 데이터 조회
//-------------------------------------------------------------------------
scwin.getVatCount = async function (slipNo) {
  // 주의점 PARAM값이 너무 길면 쿼리 결과가 매핑이 되지 않는다. ~!!1
  // SELECT 절 
  let param1 = " COUNT(*) 		as COL1 " + ",''     		 	as COL2 " + ",'' 		     	as COL3 " + ",'' 			 	as COL4 " + ",'' 				as COL5 " + ",'' 				as COL6 " + ",'' 				as COL7 " + ",'' 				as COL8 " + ",'' 				as COL9 " + ",'' 				as COL10 ";

  // 대상테이블 	
  let param2 = " TB_FI304 A ";

  // 조건절	  
  let param3 = " AND A.SLIP_NO = '" + slipNo + "'";

  // 정렬    
  let param4 = " A.SLIP_NO ";
  ds_getVatCount.set("sysCd", "CommonEBC");
  ds_getVatCount.set("queryId", "dinymicQueryTest");
  ds_getVatCount.set("param1", param1);
  ds_getVatCount.set("param2", param2);
  ds_getVatCount.set("param3", param3);
  ds_getVatCount.set("param4", param4);
  // $c.sbm.execute(sbm_getVatCount);
  await scwin.submitExcute(sbm_getVatCount);
};
scwin.ChkBoxEvent = function (value) {
  if (value.checked == true) {
    scwin.chkReceptYn = 1;
  } else {
    scwin.chkReceptYn = 0;
  }
};

// 호출하는곳 없는거같음
//-------------------------------------------------------------------------
// 선택된 전표 적격증빙첨부 여부 확인
//-------------------------------------------------------------------------
scwin.f_checkNonEvidence = async function () {
  scwin.nonEvidenceCount = 0;
  for (i = 0; i < ds_approveList.getTotalRow(); i++) {
    if (ds_approveList.getCellData(i, "chk") == "T") {
      if (scwin.checkNonEvidence != "false") {
        ds_getEvidCount.set("slipNo", ds_approveList.getCellData(i, "slipNo"));
        $c.sbm.execute($p, sbm_getEvidCount);
      }
    }
  }
  if (scwin.nonEvidenceCount > 0) {
    let confirmYn = await $c.win.confirm($p, "본 전표[" + ds_getEvidCount.get("slipNo") + "]외 " + scwin.nonEvidenceCount + "건은  적격증빙이 미첨부되어 지급이 제한됩니다. 그래도 상신하겠습니까?");
    if (confirmYn == true) {
      scwin.checkNonEvidence = "true";
      scwin.progressStop = "false";
    } else {
      scwin.checkNonEvidence = "false";
      scwin.progressStop = "true";
    }
  }
};

// 선택된 전표의 전자결재재경팀필수 유무 체크 
scwin.f_CheckFiTeamApprv = function () {
  let vCheckApprvYn = false; //재경팀필수결재 전표 포함여부
  let _slipKndCd = "";
  for (let i = 0; i < ds_approveList.getTotalRow(); i++) {
    let vCheck = ds_approveList.getCellData(i, "chk");
    if (vCheck == "T") {
      _slipKndCd = ds_approveList.getCellData(i, "slipKndCd"); // 전표종류코드
      for (let j = 0; j < ds_slipFiList.getTotalRow(); j++) {
        if (ds_slipFiList.getCellData(j, "cdNm") == _slipKndCd) {
          vCheckApprvYn = true;
          return true;
        } else {
          vCheckApprvYn = false;
        }
      }
    }
  }
  return vCheckApprvYn;
};

// for="ds_approveList" event=OnLoadCompleted(rowcnt)
scwin.sbm_approveList_submitdone = async function (e) {
  let vRealCount = 0;
  chk_receptYn.setValue(0);
  let rowcnt = ds_approveList.getTotalRow();
  if (rowcnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    // gr_approveList.Editable = true;
    // gr_approveList.setReadOnly("grid", false); // 주석처리함.
    let vTmpSlipNo = "";
    for (let i = 0; i < rowcnt; i++) {
      let vSlipNo = ds_approveList.getCellData(i, "slipNo");
      if (vTmpSlipNo != vSlipNo) {
        vTmpSlipNo = vSlipNo;
        vRealCount++;
      }
    }
    totalRows.setValue(vRealCount); // 
  }

  // 전표번호, 증빙개수 글씨 파랑 + 밑줄
  gr_approveList.setColumnStyle("slipNo", "color", "blue");
  gr_approveList.setColumnStyle("slipNo", "text-decoration", "underline");
  gr_approveList.setColumnStyle("evidenceCnt", "color", "blue");
  gr_approveList.setColumnStyle("evidenceCnt", "text-decoration", "underline");
  await scwin.f_RetrieveForMobile();
};
scwin.gr_approveList_onheaderclick = function (headerId) {
  if (headerId == "chk_header") {
    let vChk = bCheck == 1 ? "T" : "F";
    let vCountRow = ds_approveList.getTotalRow();
    if (vCountRow > 50) {
      vCountRow = 50;
    }
    let Colid = gr_approveList.getColumnID(0); // chk
    if (vCountRow > 0) {
      if (Colid == "chk") {
        if (vChk == 'T') {
          let checkElecAuthTrgtYn1 = '0';
          let checkElecAuthTrgtYn2 = '0';
          for (let t = 0; t < ds_approveList.getTotalRow(); t++) {
            if (ds_approveList.getCellData(t, "elecAuthTrgtYn") == 'N') {
              checkElecAuthTrgtYn1++;
            }
          }
          for (let t = 0; t < ds_approveList.getTotalRow(); t++) {
            if (ds_approveList.getCellData(t, "elecAuthTrgtYn") == 'Y') {
              checkElecAuthTrgtYn2++;
            }
          }
          if (checkElecAuthTrgtYn1 >= '1' && checkElecAuthTrgtYn2 >= '1') {
            $c.win.alert($p, "전자결재 요청 시 매입계산서역발행 거래처는" + "\n매입계산서 역발행 거래처 끼리만 전자결재 요청이 가능 합니다." + "\n매입계산서 역발행 여부는 거래처관리 화면에서 가능 합니다.");

            // gr_approveList.ColumnProp("chk", "HeadCheck") = "false"; // to-do

            for (let i = 0; i < vCountRow; i++) {
              ds_approveList.setCellData(i, "chk", 'F');
            }
            return false;
          }
        }
        for (let i = 0; i < vCountRow; i++) {
          ds_approveList.setCellData(i, "chk", vChk);
        }
      }
    }
  }
};

// for=gr_approveList event=OnCheckClick(Row,Colid,Check)
scwin.gr_approveList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // to-do 
  // oncellclick 안에 두개의 함수가 들어감. 어떤게 먼저 실행되어야하는지는 as-is와 비교하면서 확인필요

  // event=OnClick(row,colid) 시작
  let row = gr_approveList.getTotalRow();
  if (row > 0) {
    if (columnId == "chk") {
      let vChkVal = ds_approveList.getCellData(rowIndex, "chk");
      if (vChkVal == "T") {
        scwin.f_ChangeCheckBoxStatus(rowIndex, 'T');
      } else {
        scwin.f_ChangeCheckBoxStatus(rowIndex, 'F');
      }
    }
  }
  // event=OnClick(row,colid) 끝

  // event=OnCheckClick(Row,Colid,Check) 시작

  if (columnId == "chk") {
    // rowIndex
    let chkVal = ds_approveList.getCellData(rowIndex, "chk");
    if (chkVal == '1') {
      // Check -> chkVal
      if (ds_approveList.getCellData(rowIndex, "elecAuthTrgtYn") == 'Y') {
        let checkElecAuthTrgtYn1 = '0';
        for (let t = 0; t < ds_approveList.getTotalRow(); t++) {
          if (ds_approveList.getCellData(t, "chk") == 'T' && ds_approveList.getCellData(t, "elecAuthTrgtYn") == 'N') {
            checkElecAuthTrgtYn1++;
          }
        }
        if (checkElecAuthTrgtYn1 >= '1') {
          $c.win.alert($p, "전표번호 : " + ds_approveList.getCellData(rowIndex, "slipNo") + "\n" + "거래처명 : " + ds_approveList.getCellData(rowIndex, "mgntClntNm") + "\n\n" + "해당 전표는 매입계산서역발행 거래처 입니다." + "\n매입계산서역발행 거래처 끼리만 전자결재 요청이 가능 합니다." + "\n매입계산서 역발행 여부는 거래처관리 화면에서 가능 합니다.");
          ds_approveList.setCellData(rowIndex, "chk", 'F');
          return false;
        }
      } else if (ds_approveList.getCellData(rowIndex, "elecAuthTrgtYn") == 'N') {
        let checkElecAuthTrgtYn2 = '0';
        for (let t = 0; t < ds_approveList.getTotalRow(); t++) {
          if (ds_approveList.getCellData(t, "chk") == 'T' && ds_approveList.getCellData(t, "elecAuthTrgtYn") == 'Y') {
            checkElecAuthTrgtYn2++;
          }
        }
        if (checkElecAuthTrgtYn2 >= '1') {
          $c.win.alert($p, "전표번호 : " + ds_approveList.getCellData(rowIndex, "slipNo") + "\n" + "거래처명 : " + ds_approveList.getCellData(rowIndex, "mgntClntNm") + "\n\n" + "매입계산서역발행 거래처 끼리만 전자결재 요청이 가능 합니다.\n매입계산서 역발행 여부는 거래처관리 화면에서 가능 합니다.");
          ds_approveList.setCellData(rowIndex, "chk", "F");
          return false;
        }
      }
    } else if (chkVal == '0') {
      // Check -> chkVal
      ds_approveList.setCellData(rowIndex, "chk", 'F');
    }
  } else {
    // 체크 박스가 아닌 다른셀이 클릭 되었을때 (전표번호클릭시)
    // for=gr_approveList event=OnClick(Row,Colid)
    if (columnId == "slipNo" && rowIndex >= 0) {
      await $c.gus.cfShowSlipInfo($p, ds_approveList.getCellData(rowIndex, "slipNo"));
    }
    if (columnId == "evidenceCnt" && rowIndex >= 0) {
      scwin.f_evidPopUp();
    }
  }
  // event=OnCheckClick(Row,Colid,Check) 끝

  // ASIS - OnColumnPosChanged -> TOBE - gr_approveList_onaftercolumnmove
  // for=gr_approveList event=OnColumnPosChanged(row,colid)
  if (columnId == "postReqDt") {
    // colid -> info.columnId
    scwin.f_CheckPostReqDtInputYn(rowIndex); // row -> info.rowIndex
  }
};

// for=gr_approveList event=OnColumnPosChanged(row,colid)
// scwin.gr_approveList_onaftercolumnmove = function (info) {
//     if (info.columnId == "postReqDt") { // colid -> info.columnId
//         scwin.f_CheckPostReqDtInputYn(info.rowIndex); // row -> info.rowIndex
//     }
// };

// for="apprvDocKndCd" event=onSelChange()
scwin.lc_apprvDocKndCd_onchange = function (info) {
  let vApprvDocKndCd = lc_apprvDocKndCd.getValue();
  if (vApprvDocKndCd == "001") {
    b_Request.setValue("전자결재요청(승인)");
    searchReqNo.setValue("");
    $c.gus.cfEnableObj($p, searchReqNo, false);
  } else if (vApprvDocKndCd == "002") {
    $c.win.alert($p, "[현 작업은 실제 전표회계처리 취소와는 무관합니다. 전자결재와는 별도로 해당전표를 생성한 화면에서 반드시 취소작업을 해야합니다]");
    b_Request.setValue("전자결재요청(승인취소)");
    $c.gus.cfEnableObj($p, searchReqNo, true);
  }
  ds_approveList.removeAll(); // ds_approveList.ClearData();
};

// for=ds_approveList event=onColumnChanged(row,colid)
scwin.ds_approveList_oncelldatachange = function (info) {
  if (info.colID == "postReqDt" && ds_approveList.getCellData(info.rowIndex, "chk") == "T") {
    for (i = 0; i < ds_approveList.getTotalRow(); i++) {
      if (ds_approveList.getCellData(i, "chk") == "T") {
        let postReqDtVal = ds_approveList.getCellData(info.rowIndex, "postReqDt");
        ds_approveList.setCellData(i, "postReqDt", postReqDtVal);
      }
    }
  }
};

// 결재요청 전표가 무증빙인 경우
// for=ds_getEvidCount event=OnLoadCompleted(rowcnt)
scwin.sbm_getEvidCount_submitdone = function (e) {
  let payStsCd = "N";
  // 증빙종류가 법인카드인 경우 증빙유무를 체크하지 않음
  if (ds_getEvidCount.get("companyCardYn") == 0) {
    // 1. 증빙구분이 세금계산서, 영세율세금계산서-일반, 영세율세금계산서-기타, 계산서 일 경우
    if (ds_getEvidCount.get("taxInvoiceYn") > 0 || ds_getEvidCount.get("zeroTaxInvoiceNormalYn") > 0 || ds_getEvidCount.get("zeroTaxInvoiceEtcYn") > 0 || ds_getEvidCount.get("billYn") > 0) {
      // 1.1 영수증빙 등록: 증빙 갯수만 체크
      if (ds_getEvidCount.get("receptYn") > 0) {
        if (ds_getEvidCount.get("totalEvidCount") == 0) {
          payStsCd = "Y"; //  무증빙 상태로 세팅
        }
      }

      // 1.2 세금계산서: 종이세금계산서 or e세로 매핑 증빙 존재 해야함
      else if (ds_getEvidCount.get("taxInvoiceYn") > 0) {
        if (ds_getEvidCount.get("paperTaxInvoiceYn") == 0 && ds_getEvidCount.get("eseroRegYn") == 0) {
          payStsCd = "Y"; //  무증빙 상태로 세팅
        }
      }

      // 1.3 영세율세금계산서-일반: e세로 매핑 증빙 존재 해야함
      else if (ds_getEvidCount.get("zeroTaxInvoiceNormalYn") > 0) {
        if (ds_getEvidCount.get("eseroRegYn") == 0) {
          payStsCd = "Y"; //  무증빙 상태로 세팅
        }
      }

      // 1.4 영세율세금계산서-기타: INVOICE 존재 해야함
      else if (ds_getEvidCount.get("zeroTaxInvoiceEtcYn") > 0) {
        if (ds_getEvidCount.get("invoiceYn") == 0) {
          payStsCd = "Y"; //  무증빙 상태로 세팅
        }
      }

      // 1.5 계산서: 종이계산서, e세로 매핑 증빙 존재 해야함
      else if (ds_getEvidCount.get("billYn") > 0) {
        if (ds_getEvidCount.get("paperBillYn") == 0 && ds_getEvidCount.get("eseroRegYn") == 0) {
          payStsCd = "Y"; //  무증빙 상태로 세팅
        }
      }
    }

    // 2. 이외의 증빙구분 (기타증빙): 증빙등록 유무만 체크
    else {
      // if(ds_getEvidCount.getCellData(1,"OtherEvidYn") > 0){

      // 2.1 이외의 증빙구분 중 전표종류가 수탁금, 위수탁상계 그리고 전표가 자동전표 일 경우 증빙유무 체크하지 않음
      if (ds_getEvidCount.get("exceptSlipYn") == 0 && ds_getEvidCount.get("autoSlipYn") == 0) {
        if (ds_getEvidCount.get("totalEvidCount") == 0) {
          payStsCd = "Y"; //  무증빙 상태로 세팅
        }
      }
    }
  }
  if (payStsCd == "Y") {
    scwin.nonEvidenceCount++;
  }
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = async function () {
  // 마감년월 조회 조건
  ds_search2.set("coCd", "000");
  await scwin.submitExcute(sbm_getMaxCloseYm); // $c.sbm.execute(sbm_getMaxCloseYm);
};
scwin.sbm_getMaxCloseYm_submitdone = async function (e) {
  let thisYm = scwin.strToDate; // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  let closeYmVal = ds_getMaxCloseYm.getCellData(0, "closeYm");
  if (closeYmVal != thisYm.slice(0, 6)) {
    let closeYm = closeYmVal;
    let firstDay = closeYm.slice(0, 4) + "/" + closeYm.slice(4, 6) + "/" + "01"; // 1일
    let lastDay = closeYm.slice(0, 4) + "/" + closeYm.slice(4, 6) + "/" + new Date(closeYm.slice(0, 4), closeYm.slice(4, 6), 0).getDate(); // 마지막날
    toSlipDt.setValue(lastDay); //작성일자 셋팅
    fromSlipDt.setValue(firstDay);
  } else {
    let firstDay = thisYm.slice(0, 4) + "/" + thisYm.slice(4, 6) + "/" + "01"; //당월 1일
    let lastDay = thisYm.slice(0, 4) + "/" + thisYm.slice(4, 6) + "/" + new Date(thisYm.slice(0, 4), thisYm.slice(4, 6), 0).getDate(); //당월 마지막날
    toSlipDt.setValue(lastDay); //작성일자 셋팅
    fromSlipDt.setValue(firstDay);
  }

  // test 데이터 
  // drawAcctDeptCd.setValue("00009");
  // fromSlipDt.setValue("20250101");
  // toSlipDt.setValue("20251231");
};

// 전표 정보 조회 완료 후 해당 정보로 조회
// for=tr_retrieveSlipNo event=OnSuccess()
scwin.sbm_retrieveSlipNo_submitdone = function (e) {
  if (ds_retrieveSlipNo.getTotalRow() > 0) {
    // ds_retrieveSlipNo.CountRow > 0
    searchSlipNo.setValue(scwin.vRetrieveSlipNo);
    drawAcctDeptCd.setValue(ds_retrieveSlipNo.getCellData(0, "drawAcctDeptCd"));
    fromSlipDt.setValue(ds_retrieveSlipNo.getCellData(0, "slipDt"));
    toSlipDt.setValue(ds_retrieveSlipNo.getCellData(0, "slipDt"));
    scwin.f_Retrieve();
  }
};
scwin.udc_comCode_onblurCodeEvent = function (e) {
  scwin.udc_comCode_onclickEvent();
};
scwin.udc_comCode2_onblurCodeEvent = function (e) {
  scwin.udc_comCode2_onclickEvent();
};
scwin.udc_comCode3_onblurCodeEvent = function (e) {
  scwin.udc_comCode3_onclickEvent();
};
scwin.udc_comCode4_onblurCodeEvent = function (e) {
  scwin.udc_comCode4_onclickEvent();
};
scwin.udc_comCode_onblurNameEvent = function (e) {
  scwin.udc_comCode_onclickEvent();
};
scwin.udc_comCode2_onblurNameEvent = function (e) {
  scwin.udc_comCode2_onclickEvent();
};
scwin.udc_comCode3_onblurNameEvent = function (e) {
  scwin.udc_comCode3_onclickEvent();
};
scwin.udc_comCode4_onblurNameEvent = function (e) {
  scwin.udc_comCode4_onclickEvent();
};
scwin.btn_clear1_onclick = function (e) {
  $c.gus.cfInitObjects($p, [drawAcctDeptCd, drawAcctDeptNm]);
};
scwin.btn_clear2_onclick = function (e) {
  $c.gus.cfInitObjects($p, [drawAcctDeptCd2, drawAcctDeptNm2]);
};
scwin.btn_clear3_onclick = function (e) {
  $c.gus.cfInitObjects($p, [drawAcctDeptCd3, drawAcctDeptNm3]);
};
scwin.btn_clear4_onclick = function (e) {
  $c.gus.cfInitObjects($p, [drawAcctDeptCd4, drawAcctDeptNm4]);
};
scwin.btn_clear_writer_onclick = function (e) {
  $c.gus.cfInitObjects($p, [drawEmpNo, drawEmpNm]);
};
scwin.btn_clearAll_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_RequestElectronicApprove = async function () {
  try {
    scwin.checkNonEvidence = "true";
    scwin.progressStop = "false";
    scwin.epSlipKndCd = lc_slipKndCd.getValue(); // 전표구분
    ////////////////////////////////////////////////////////////////////////////
    // 임시 조정 -- 전표 건수가 30건을 넘으면 수행 못하도록 수정
    var count = 0;
    for (let i = 0; i < ds_approveList.getTotalRow(); i++) {
      if (ds_approveList.getCellData(i, "chk") == "T") count++;
    }
    if (count > 50) {
      await $c.gus.cfAlertMsg($p, "50건 이상의 전표를 한번에 전자결재 요청하실 수 없습니다.");
      return;
    }
    let validVal = await $c.gus.cfValidate($p, [gr_approveList]);
    if (!validVal) return false;
    let vReqApprvDocKndCd = lc_apprvDocKndCd.getValue(); // 결재문서종류 

    let checkRet = await scwin.f_CheckFiTeamApprv();
    if (checkRet) {
      //재경팀 결재 필수전표이면 문서종류 변경

      if (lc_apprvDocKndCd.getValue() == "001") {
        //전표승인
        vReqApprvDocKndCd = "040";
      } else if (lc_apprvDocKndCd.getValue() == "002") {
        //전표승인취소
        vReqApprvDocKndCd = "041";
      }
    }
    let vReqUserId = scwin.vUserId; // 데비스 사용자 아이디
    // let vEpUsrId = "<%=epId%>"; //vEpUserId;  // EP사용자 ID ()
    let vEpUsrId = scwin.vEpUserId;
    let vReqApprvTitle = apprvTitle.getValue(); //결재제목 

    // if (vEpUserId == "") {
    //	alert(" EP사용자 ID정보가 없습니다. EP사이트에 먼저 로그인해주십시오.");
    //	return false;
    // }

    if (vReqApprvTitle.trim() == "") {
      await $c.win.alert($p, "전표결재요청제목은 필수입력사항입니다.");
      apprvTitle.focus();
      return false;
    }

    //전표결재요청 제목 100바이트 이내로 작성
    if (vReqApprvTitle != "") {
      var gByte = 0;
      for (var i = 0; i < vReqApprvTitle.length; ++i) {
        // 기본 한글 3바이트 처리
        vReqApprvTitle.charCodeAt(i) > 127 ? gByte += 3 : gByte++;
      }
      if (gByte > 100) {
        await $c.win.alert($p, "전표결재요청제목이 100byte를 초과합니다. 제목을 줄여주세요");
        apprvTitle.focus();
        return false;
      }
    }

    //특수문자 &입력 시 오류가 발생함에 따라 상신 전 제목 체크 2022.07.25
    if (vReqApprvTitle.indexOf("&") >= 0) {
      await $c.win.alert($p, "제목에 특수문자 &를 입력할 수 없습니다.\n수정 후 다시 결재 요청 하시길 바랍니다.");
      apprvTitle.focus();
      return false;
    }
    let countPchsReverse = 0;
    scwin.changeTitle = '';
    var evidFileYn = ""; //국제운영팀 증빙구분이 영세율세금계산서-기타 이면서 증빙파일 인보이스(청구) 미 등록 시 상신 못하도록 제어

    for (var z = 0; z < ds_approveList.getTotalRow(); z++) {
      if (ds_approveList.getCellData(z, "chk") == "T") {
        if (ds_approveList.getCellData(z, "elecAuthTrgtYn") == 'Y') {
          countPchsReverse++;
        }
        //결재요청구분-전표승인 > 전표작성부서가 국제운영팀이면서 물류매입전표인경우

        if (lc_apprvDocKndCd.getValue() == "001" && ds_approveList.getCellData(z, "drawAcctDeptCd") == "00839" && ds_approveList.getCellData(z, "slipKndCd") == "F02") {
          if (ds_approveList.getCellData(z, "evidTypeChk") == 'Y') {
            //증빙종류가 영세율세금계산서-기타 인 경우
            if (ds_approveList.getCellData(z, "evidFileChk") == 'N') {
              // 증빙파일종류-INVOICE(청구) 내역이 없을경우
              await $c.win.alert($p, "증빙누락으로 인한 결재요청불가");
              return false;
            }
          }
        }
      }
    }
    if (countPchsReverse >= 1) {
      scwin.changeTitle = 'Y';
    }
    var vBlankPostReqDt = await scwin.f_CheckSlectedSlipPostReqDt();
    if (vBlankPostReqDt != "0") {
      await $c.win.alert($p, vBlankPostReqDt);
      return false;
    }
    var vBlankSlipKnd = await scwin.f_CheckSlectedSlipKnd();
    //$c.win.alert(epSlipKndCd);

    if (vBlankSlipKnd != "0") {
      await $c.win.alert($p, vBlankSlipKnd);
      return false;
    }
    var vReqApprvInfo = await scwin.f_CheckedSlipListInfo();
    if (vReqApprvInfo == undefined || vReqApprvInfo.length < 1) {
      await $c.win.alert($p, "전자결재를 요청할 전표를 선택해 주십시오.");
      return false;
    }

    //적격증빙여부 체크
    //f_checkNonEvidence();

    //결재진행 여부
    if (scwin.progressStop == "true") {
      return;
    }
    ds_approveDetail.undoAll();

    // 전자 결재 상세 목록 내역 세팅 부분 

    for (var z = 0; z < ds_approveList.getTotalRow(); z++) {
      if (ds_approveList.getCellData(z, "chk") == "T") {
        if (ds_approveList.getCellData(z, "postReqDt") != "") {
          var vSlipNo = ds_approveList.getCellData(z, "slipNo");
          var vPostReqDt = ds_approveList.getCellData(z, "postReqDt");
          for (var s = 0; s < ds_approveDetail.getTotalRow(); s++) {
            if (ds_approveDetail.getCellData(s, "slipNo") == vSlipNo) {
              ds_approveDetail.setCellData(s, "chk", "T");
              ds_approveDetail.setCellData(s, "postReqDt", vPostReqDt);
              ds_approveDetail.setCellData(s, "postDt", vPostReqDt);
            }
          }
        }
      }
    }
    var checkInterDataYn = 0;
    for (var z = 0; z < ds_approveList.getTotalRow(); z++) {
      if (ds_approveList.getCellData(z, "chk") == "T") {
        if (ds_approveList.getCellData(z, "postReqDt") != "") {
          for (var t = 0; t < ds_approveDetail.getTotalRow(); t++) {
            if (ds_approveList.getCellData(z, "slipNo") == ds_approveDetail.getCellData(t, "slipNo") && ds_approveDetail.getCellData(t, "interDataYn") == 'Y') {
              checkInterDataYn++;
            }
          }
        }
      }
    }

    //$c.win.alert("checkInterDataYn >> " + checkInterDataYn);
    // 결재상세정보
    var vApprvDtlInfo = "<table cellpadding='0' cellspacing='0' border='0' width='1000'>";
    vApprvDtlInfo += " <tr><td height='5px'></td></tr>";
    vApprvDtlInfo += " <tr valign='top' align='center'>";
    vApprvDtlInfo += "   <td>";
    vApprvDtlInfo += "     <table cellpadding='0' cellspacing='0' border='0' width='1000'>";
    vApprvDtlInfo += "       <tr><td><img src='https://debis.dongwon.com/common/images/boxT800.gif' width='1000'></td></tr>";
    vApprvDtlInfo += "		<tr valign='middle'>";
    vApprvDtlInfo += "           <td background='https://debis.dongwon.com/common/images/boxM890.gif' width='1000' style='padding: 0 0 5px 23px; '>                             ";
    vApprvDtlInfo += "           <table width='100%'>                                                                                                                    ";
    vApprvDtlInfo += "               <tr>                                                                                                                                ";
    vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'>상신내역요약</td>                        ";
    vApprvDtlInfo += "                   <td align='right' style='padding: 0px 12px 0px 0px;font-size: 12px; vertical-align: bottom;' valign='bottom'>(단위 : 원)</td>     ";
    vApprvDtlInfo += "               </tr>                                                                                                                               ";
    vApprvDtlInfo += "           </table>                                                                                                                                ";
    vApprvDtlInfo += "           </td>                                                                                                                                       ";
    vApprvDtlInfo += "		</tr>";
    vApprvDtlInfo += "      <tr valign='top'>";
    vApprvDtlInfo += "         <td background='https://debis.dongwon.com/common/images/boxM890.gif' width='1000' style='padding:5px 0 5px 10px'  >";
    vApprvDtlInfo += "           <table cellpadding='0' cellspacing='0' border='1' width='950' bordercolor='black' style='table-layout:fixed;border:2 solid black;border-collapse:collapse'>";
    vApprvDtlInfo += "             <col width='20%'>";
    vApprvDtlInfo += "             <col width='20%'>";
    vApprvDtlInfo += "             <col width='30%'>";
    vApprvDtlInfo += "             <col width='30%'>";
    vApprvDtlInfo += "             <tr height='30' valign='middle' >";
    vApprvDtlInfo += "					<td width=222 align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>거래처</td>";
    vApprvDtlInfo += "					<td width=73 align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>총건수</td>";
    vApprvDtlInfo += "					<td width=144 align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>차변총금액</td>";
    vApprvDtlInfo += "					<td width=144 align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>대변총금액</td>";
    vApprvDtlInfo += "             </tr>";
    vApprvDtlInfo += "             <tr height='50' align='left'>";
    vApprvDtlInfo += "					<td width=222 align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>";
    vApprvDtlInfo += vReqApprvInfo[2];
    vApprvDtlInfo += "									</td>";
    vApprvDtlInfo += "					<td width=73  align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>";
    vApprvDtlInfo += vReqApprvInfo[3];
    vApprvDtlInfo += "									 </td>";
    vApprvDtlInfo += "					<td width=144  align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>";
    vApprvDtlInfo += vReqApprvInfo[4];
    vApprvDtlInfo += "									 </td>";
    vApprvDtlInfo += "					<td  width=144 align=center style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;'>";
    vApprvDtlInfo += vReqApprvInfo[5];
    vApprvDtlInfo += "									</td>";
    vApprvDtlInfo += "             </tr>";
    vApprvDtlInfo += "           </table>";
    vApprvDtlInfo += "         </td>";
    vApprvDtlInfo += "       </tr>";
    vApprvDtlInfo += "       <tr><td><img src='https://debis.dongwon.com/common/images/boxB800.gif' width='1000'></td></tr>";
    vApprvDtlInfo += "     </table>";
    vApprvDtlInfo += "   </td>";
    vApprvDtlInfo += " </tr>";
    vApprvDtlInfo += " <tr><td height='5px'></td></tr>";
    vApprvDtlInfo += " <tr valign='top' align='center'>";
    vApprvDtlInfo += "   <td>";
    vApprvDtlInfo += "     <table cellpadding='0' cellspacing='0' border='0' width='1000'>";
    vApprvDtlInfo += "       <tr><td><img src='https://debis.dongwon.com/common/images/boxT800.gif'  width='1000'></td></tr>";
    vApprvDtlInfo += "       <tr valign='middle'>";
    vApprvDtlInfo += "         <td height='25' background='https://debis.dongwon.com/common/images/boxM890.gif' width='1100' style='padding:0 0 5px 23px;font-size:15px;font-weight:bold;color:black;font-family:돋움체;' align= 'left'>";
    vApprvDtlInfo += "         </td>";
    vApprvDtlInfo += "       </tr>";
    vApprvDtlInfo += "		<tr valign='middle'>";
    vApprvDtlInfo += "           <td background='https://debis.dongwon.com/common/images/boxM890.gif' width='1000' style='padding: 0 0 5px 23px; '>                             ";
    vApprvDtlInfo += "           <table width='100%'>                                                                                                                    ";
    vApprvDtlInfo += "               <tr>                                                                                                                                ";
    vApprvDtlInfo += "                   <td style='font-size: 15px; font-weight: bold; color: black; font-family: 돋움체;' align='left'>상신전표상세목록</td>                        ";
    vApprvDtlInfo += "                   <td align='right' style='padding: 0px 12px 0px 0px;font-size: 12px; vertical-align: bottom;' valign='bottom'>(단위 : 원)</td>     ";
    vApprvDtlInfo += "               </tr>                                                                                                                               ";
    vApprvDtlInfo += "           </table>                                                                                                                                ";
    vApprvDtlInfo += "           </td>                                                                                                                                       ";
    vApprvDtlInfo += "		</tr>";
    vApprvDtlInfo += "       <tr valign='middle'>";
    vApprvDtlInfo += "         <td background='https://debis.dongwon.com/common/images/boxM890.gif' width='1000' style='padding:0 0 5px 10px' align= 'center'>";
    vApprvDtlInfo += "           <table cellpadding='0' cellspacing='0' border='1' bordercolor='black' width='950' style='table-layout:fixed;border:2 solid black;border-collapse:collapse'>";
    vApprvDtlInfo += "             <col width='160'>"; // 계정명
    vApprvDtlInfo += "             <col width='100'>"; // 차변금액     
    vApprvDtlInfo += "             <col width='100'>"; // 대변금액       
    vApprvDtlInfo += "             <col width='100'>"; // 귀속부서명         
    vApprvDtlInfo += "             <col width='120'>"; // 거래처명   
    //vApprvDtlInfo += "             <col width='6%'>";  // 과세구분    

    if (scwin.epDtlDspGbn == "1") {
      // 개인형 법인카드(A17)가 포함돼어 있는 경우 거래일자 결재상신내역에 표시 
      vApprvDtlInfo += "             <col width='60'>"; // 거래일
    }
    vApprvDtlInfo += "             <col width='160'>"; // 적요
    vApprvDtlInfo += "             <col width='45'>"; // 작성자    
    vApprvDtlInfo += "             <col width='70'>"; // 증빙

    if (checkInterDataYn > 0) {
      vApprvDtlInfo += "             <col width='4%'>"; // 지급조건
    }
    vApprvDtlInfo += "             <tr height='40' align='center'>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 계정명";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체; letter-spacing: -2px;'>";
    vApprvDtlInfo += "                 차변금액";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;letter-spacing: -2px;'>";
    vApprvDtlInfo += "                 대변금액<br>";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 귀속부서명";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 거래처명";
    vApprvDtlInfo += "               </td>";
    //vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    //vApprvDtlInfo += "                 과세구분";
    //vApprvDtlInfo += "               </td>";

    if (scwin.epDtlDspGbn == "1") {
      // 개인형 법인카드(A17)가 포함돼어 있는 경우 거래일자 결재상신내역에 표시 
      vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
      vApprvDtlInfo += "                 거래일";
      vApprvDtlInfo += "               </td>";
    }
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 적요";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 작성자";
    vApprvDtlInfo += "               </td>";
    vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
    vApprvDtlInfo += "                 증빙";
    vApprvDtlInfo += "               </td>";
    if (checkInterDataYn > 0) {
      vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;color:black;font-family: 돋움체;'>";
      vApprvDtlInfo += "                 지급조건";
      vApprvDtlInfo += "               </td>";
    }
    vApprvDtlInfo += "             </tr>";
    var j = 0;
    var vSlipNo = "";
    for (var m = 0; m < ds_approveDetail.getTotalRow(); m++) {
      if (ds_approveDetail.getCellData(m, "chk") == "T") {
        //$c.win.alert("데이타 한줄 만들어짐");
        vSlipNo = ds_approveDetail.getCellData(m, 'slipNo');
        vApprvDtlInfo += "             <tr align='center'>";

        // 계정명
        vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;word-wrap:break-word;padding-right:10px;color:black;font-family: 돋움체' align='left'>";
        vApprvDtlInfo += ds_approveDetail.getCellData(m, "acctNm");
        vApprvDtlInfo += "               </td>";

        // 차변금액
        vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;word-wrap:break-word;padding-right:10px;color:black;font-family: 돋움체'align='right'>";
        vApprvDtlInfo += $c.gus.cfInsertComma($p, Math.round(ds_approveDetail.getCellData(m, "drAmt")));
        vApprvDtlInfo += "               </td>";

        // 대변금액
        vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;word-wrap:break-word;padding-right:10px;color:black;font-family: 돋움체'align='right'>";
        vApprvDtlInfo += $c.gus.cfInsertComma($p, Math.round(ds_approveDetail.getCellData(m, "crAmt")));
        vApprvDtlInfo += "               </td>";

        // 귀속부서명
        vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;word-wrap:break-word;color:black;font-family: 돋움체;'align='left'>";
        vApprvDtlInfo += ds_approveDetail.getCellData(m, "slipAcctDeptNm");
        vApprvDtlInfo += "               </td>";

        // 거래처명
        vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;word-wrap:break-word;color:black;font-family: 돋움체;'align='left'>";
        vApprvDtlInfo += ds_approveDetail.getCellData(m, "mgntClntNm");
        vApprvDtlInfo += "               </td>";

        // 과세구분
        //vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;'align='center'>";	
        //vApprvDtlInfo +=                    ds_approveDetail.getCellData(m, "taxnClsNm");					
        //vApprvDtlInfo += "               </td>";

        // 거래일
        if (scwin.epDtlDspGbn == "1") {
          // 개인형 법인카드(A17)가 포함돼어 있는 경우 거래일자 결재상신내역에 표시 
          vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;'align='center'>";
          vApprvDtlInfo += ds_approveDetail.getCellData(m, "approveDate");
          vApprvDtlInfo += "               </td>";
        }

        // 적요
        vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;word-wrap:break-word;color:black;font-family: 돋움체;'align='left'>";
        vApprvDtlInfo += ds_approveDetail.getCellData(m, "summary");
        vApprvDtlInfo += "               </td>";

        // 작성자
        vApprvDtlInfo += "               <td style='font-size:13px;font-weight:bold;word-wrap:break-word;color:black;font-family: 돋움체;'align='center'>";
        vApprvDtlInfo += ds_approveDetail.getCellData(m, "drawEmpNm");
        vApprvDtlInfo += "               </td>";

        // 증빙
        vApprvDtlInfo += "               <td style='font-size:12px;font-weight:bold;word-wrap:break-word;color:black;font-family: 돋움체;'align='center'>";
        vApprvDtlInfo += "                  <a href='https://debis.dongwon.com/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.jsp?slipNo=" + vSlipNo + "&fromClsCd=PORTE&sabun=" + scwin.vUserId + "' target='_blank'> " + vSlipNo + " </a> ";
        vApprvDtlInfo += "               </td>";

        // 지급조건
        if (checkInterDataYn > 0) {
          vApprvDtlInfo += "               <td style='font-size:12px;font-weight:bold;'align='center'>";
          vApprvDtlInfo += ds_approveDetail.getCellData(m, "interDataYn");
          vApprvDtlInfo += "               </td>";
        }
        vApprvDtlInfo += "             </tr>";
      }
    }
    vApprvDtlInfo += "           </table>";
    vApprvDtlInfo += "         </td>";
    vApprvDtlInfo += "       </tr>";
    vApprvDtlInfo += "       <tr><td><img src='https://debis.dongwon.com/common/images/boxB800.gif'  width='1000'></td></tr>";
    vApprvDtlInfo += "     </table>";
    //vApprvDtlInfo += "   </td>";
    //vApprvDtlInfo += " </tr>";
    //vApprvDtlInfo += "</table>";

    dma_reqApprove.set("apprvDocKndCd", vReqApprvDocKndCd);
    dma_reqApprove.set("reqUserId", vReqUserId);
    dma_reqApprove.set("epUserId", vEpUsrId);
    dma_reqApprove.set("coNm", scwin.vCoNm);
    // 문서명
    if (scwin.changeTitle == 'Y') {
      dma_reqApprove.set("apprvTitle", scwin.vSlipKndNm + "/역발행]" + vReqApprvTitle);
    } else {
      dma_reqApprove.set("apprvTitle", scwin.vSlipKndNm + "]" + vReqApprvTitle);
    }
    dma_reqApprove.set("apprvDtlInfo", vApprvDtlInfo);
    dma_reqApprove.set("slipList", vReqApprvInfo[6]);
    dma_reqApprove.set("postReqDtList", vReqApprvInfo[7]);
    dma_reqApprove.set("modDtmList", vReqApprvInfo[8]);

    //2013.11.25 - 재경팀 요청으로 기간계 결재 상신 시 첨부파일 버튼 없애는 기능 추가함
    //로직은 현재 jsp에서 셋팅 -> RequestSlipApproveCMD 에서 받고 -> approve.jsp 에서 받아서 PORTE로 넘김
    dma_reqApprove.set("bmodifyattach", "N");

    //2016.06.02 - 재경팀 요청으로 기간계 결재 상신 시 결재첨부 버튼 없애는 기능 추가함
    dma_reqApprove.set("appattach", "N");

    // frmReqApprove.target = "test111.jsp";
    // frmReqApprove.submit();

    let url = "/cm.bc.apprvmgnt.elecapprv.RequestSlipApproveCMD.do";
    let targetName = "aprvPopup"; // 고정 이름(재사용)

    var data = dma_reqApprove.getJSON() || {};
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = targetName;

    // 팝업 차단 회피: 사용자 클릭 이벤트 안에서 실행되어야 함
    const win = window.open("", targetName); // about:blank 대신 빈 문자열로 재사용
    // 팝업이 막히면 win이 null일 수 있음
    if (!win) {
      // 여기서 그냥 location 이동하거나 alert 처리 등
      console.warn("Popup blocked");
    }
    Object.keys(data).forEach(key => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = (data[key] ?? "").toString();
      form.appendChild(input);
    });
    document.body.appendChild(form);
    console.log("POST keys:", Object.keys(data));
    console.log("epUserId:", data.epUserId);
    console.log("apprvDtlInfo length:", (data.apprvDtlInfo || "").length);
    console.log("apprvTitle:", data.apprvTitle);
    form.submit();
    document.body.removeChild(form);
  } catch (e) {
    console.log("f_aprv : " + e);
  }
};

// //-------------------------------------------------------------------------
// // 전자결재요청
// //-------------------------------------------------------------------------
// scwin.f_RequestElectronicApprove = async function (e) {

//     scwin.checkNonEvidence = "true";
//     scwin.progressStop = "false";
//     // epSlipKndCd = slipKndCd.valueOfIndex("code",slipKndCd.Index);  // 전표구분
//     scwin.epSlipKndCd = lc_slipKndCd.getItemText(lc_slipKndCd.getSelectedIndex());

//     ////////////////////////////////////////////////////////////////////////////
//     // 임시 조정 -- 전표 건수가 30건을 넘으면 수행 못하도록 수정
//     let count = 0;
//     for (i = 0; i < ds_approveList.getTotalRow(); i++) {
//         if (ds_approveList.getCellData(i, "chk") == "T") count++;
//     }
//     if (count > 50) {
//         $c.gus.cfAlertMsg("50건 이상의 전표를 한번에 전자결재 요청하실 수 없습니다.");
//         return;
//     }
//     ////////////////////////////////////////////////////////////////////////////

//     // 전자결재요청 SSO TO-BE에서 사용하지 않음.
//     // let EXIST_YN = "";
//     // let EP_sabun = "<%=sabun%>";
//     // let EP_mailaddr = "";
//     // let EP_username = "";
//     // let EP_info = "";

//     // if (EP_sabun != "")
//     //     EXIST_YN = 1;
//     // else {
//     //     try {
//     //         EXIST_YN = SSOCheck.IsExist("GROUP");
//     //         EP_sabun = SSOCheck.GetETC("GROUP", "F14");		// 사번      
//     //         EP_mailaddr = SSOCheck.GetETC("GROUP", "F13");	// 사용자 메일주소   
//     //         EP_username = SSOCheck.GetETC("GROUP", "F2");	// 사용자 명      	

//     //     } catch (exception) {
//     //         EXIST_YN = 0;
//     //     }
//     // }

//     // if (!cfValidate([gr_approveList])) return false;

//     // if (EXIST_YN != 1) {
//     //     alert("현재 포털(PORTE)에 접속하지 않은 상태 입니다.\n전자결재를 위해서은 반드시 PORTE에 접속하셔야 합니다.");
//     //     return;
//     // }
//     // EP_info = "PORTE Mail:" + EP_mailaddr;
//     // EP_info += "\nPORTE 사번:" + EP_sabun;
//     // EP_info += "\nPORTE 이름:" + EP_username;
//     // EP_info += "\nPORTE 인증:" + EXIST_YN;

//     // let vReqApprvDocKndCd = apprvDocKndCd.valueOfIndex("code", apprvDocKndCd.Index);  // 결재문서종류 
//     let vReqApprvDocKndCd = lc_apprvDocKndCd.getValue();  // 결재문서종류 
//     let vReqUserId = scwin.vUserId; // 결재요청자 ID
//     let vEpUsrId = scwin.vEpUserId;  // EP사용자 ID ()
//     let vReqApprvTitle = apprvTitle.getValue();  //결재제목 

//     if (vReqApprvTitle.trim() == "") {
//         $c.win.alert("전표결재요청제목은 필수입력사항입니다.");
//         apprvTitle.focus();
//         return false;
//     }

//     let vBlankPostReqDt = await scwin.f_CheckSlectedSlipPostReqDt();

//     if (vBlankPostReqDt != "0") {
//         $c.win.alert(vBlankPostReqDt);
//         // postReqDt
//         let rowIndex = ds_approveDetail.getRowPosition();
//         gr_approveList.setFocusedCell(rowIndex, "postReqDt", false);
//         return false;
//     }

//     let vReqApprvInfo = await scwin.f_CheckedSlipListInfo();

//     if (vReqApprvInfo == undefined || vReqApprvInfo.length < 1) {
//         $c.win.alert("전자결재를 요청할 전표를 선택해 주십시오.");
//         return false;
//     }

//     // 결재상세정보
//     let vApprvDtlInfo = '<table border=1 width=87% id=tb_border cellspacing=0 height=52>';
//     vApprvDtlInfo += '<tr>';
//     vApprvDtlInfo += '<td width=222 align=center><font face=궁서>거래처</font></td>';
//     vApprvDtlInfo += '<td width=73 align=center><font face=궁서>총건수</font></td>';
//     vApprvDtlInfo += '<td width=144 align=center><font face=궁서>차변총금액</font><font face=궁서>(원)</font></td>';
//     vApprvDtlInfo += '<td align=center><font face=궁서>대변총금액</font><font face=궁서>(원)</font></td>';
//     vApprvDtlInfo += '</tr>';
//     vApprvDtlInfo += '<tr>';
//     vApprvDtlInfo += '<td width=222 align=center>' + vReqApprvInfo[2] + '</td>';
//     vApprvDtlInfo += '<td width=73  align=center>' + vReqApprvInfo[3] + '</td>';
//     vApprvDtlInfo += '<td width=144  align=center>' + vReqApprvInfo[4] + '</td>';
//     vApprvDtlInfo += '<td  align=center>' + vReqApprvInfo[5] + '</td>';
//     vApprvDtlInfo += '</tr>';
//     vApprvDtlInfo += '</table>';

//     dma_reqApprove.set("apprvDocKndCd", vReqApprvDocKndCd)
//     dma_reqApprove.set("reqUserId", vReqUserId)
//     dma_reqApprove.set("epUserId", vEpUsrId)
//     dma_reqApprove.set("apprvTitle", vReqApprvTitle)
//     dma_reqApprove.set("apprvDtlInfo", vApprvDtlInfo)
//     dma_reqApprove.set("slipList", vReqApprvInfo[6])
//     dma_reqApprove.set("postReqDtList", vReqApprvInfo[7])
//     dma_reqApprove.set("modDtmList", vReqApprvInfo[8])

//     $c.sbm.execute(sbm_reqApprove)
//     // frmReqApprove.target = "tmpIfrm";
//     // frmReqApprove.submit();
// };

scwin.saveFile = async function () {

  // let ret = await $c.win.confirm("저장 하시겠습니까?");
  // if (ret) {
  //     udc_fielUpload.startFileUpload();
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo',codeId:'drawAcctDeptCd',popupID:'',validTitle:'',nameId:'drawAcctDeptNm',style:'',id:'udc_comCode','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_onblurNameEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_clear1',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_clear1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'drawAcctDeptCd2',selectID:'retrieveAcctDeptCdInfo',popupID:'',validTitle:'',nameId:'drawAcctDeptNm2',style:'','ev:onclickEvent':'scwin.udc_comCode2_onclickEvent',id:'udc_comCode2','ev:onblurCodeEvent':'scwin.udc_comCode2_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode2_onblurNameEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_clear2',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_clear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',ref:'',style:'width: 200px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가지급신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가지급금정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대체전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용만기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용해지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일용직임금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물화전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'소득세/주민세지급요청전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업소세지급요청전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대체전표(외부패키지)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'리스전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화환산전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A15'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인형법인카드정산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A17'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대손충당(IFRS)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A18'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'시설사용전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A19'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업소득전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A21'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타소득전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일용직임금(자동)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A23'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용유동성대체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A24'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인형법인카드정산(엑셀업로드)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A25'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인형법인카드정산(통제)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A26'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인차량정산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A27'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산취득'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본적지출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산매각'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산폐기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산이관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본적지출(렌터)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본적지출(정비)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산상각전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산재평가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자부동산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재고자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재고자산 매각'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산손상차손'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산손상차손환입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계좌이체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통장입출금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'받을어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금지급확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이체지급확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어음수표지급확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자어음지급확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자어음교환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상계처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급어음만기처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차입원장등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가수금처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C15'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차입금상환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권매각관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C17'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권대손관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C18'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권잡손관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C19'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예적금불입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예적금이자처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C21'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예적금해지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차입이자/보증료처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C23'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가수금자동전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C24'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'집금전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C25'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권취득'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C26'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권시가평가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C27'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권매각'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C28'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결제현금지급확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C29'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인카드지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C30'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어음차입등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C31'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'급여이체확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C32'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인카드대체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C33'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인카드정리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C34'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'받을어음지급확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C35'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동이체확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C42'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변동비성전도금정산전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C43'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'받을어음 전환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C44'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가수금자동전표(가상계좌)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C45'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수금전표(인터페이스)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C46'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C47'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권잡익관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C48'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권계정전환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C49'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정급여채무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정급여_퇴직연금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C51'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유급휴가채무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C52'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가상계좌수금처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C53'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차입금유동성대체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C54'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정매출확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'감가상각계상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용계상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영수매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금담보전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위수탁대납전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위수탁상계전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류상계전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류대납전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'알선수탁금_생성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'알선수탁금_감소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'알선수탁금_전환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'알선수탁금_잔액송금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'알선수탁금-채권상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정보처리용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'G01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인사급상여전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'G02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외주수선비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장품소모대체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타이어비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량검사비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정비부품이관전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류보관수수료매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류지급수수료매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류운반비매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H15'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류원가전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류카드수수료매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H17'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS유류매출조정전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H18'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS정비매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H21'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS정비매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS정비리워드전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H23'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS정비직판매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H24'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS정비직판매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H25'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS대급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H31'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카매출(장기)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카매출(단기)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보험(신규)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보험(지급요청)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가수금잡이익처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용차료(렌터카)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운반비(렌터카)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정비소모품구매전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표-렌터카변동비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카차량원가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매표매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'월말매표수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널임대료관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'창고매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매표수탁금지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매표수탁금수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정유사유류입고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직매주유소유류매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용차료전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유류출고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반주유소주유'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J15'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관주유소주유수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속원천세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J17'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속복후비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J18'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관회사주입수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J19'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전세버스매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수하물표구매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J21'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통행카드구매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수하물표사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J23'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통행카드사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J24'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객기타매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J25'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부품구매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J26'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수하물용역수수료전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J27'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표-고속변동비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J28'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업소운영수수료지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J29'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사경비전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사급상여전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파주운송대납전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파주운송상계전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파주운송매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파주운송매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파주운송일괄상계전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BNMT 매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대성TLS 지급전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BIDC매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BIDC매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K13'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차세대물류 매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K14'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차세대물류 매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K15'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동화매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동화매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K17'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규대출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K18'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대출상환전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K19'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복합창고매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'광양창고매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K21'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'황금창고매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사물류매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K23'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사물류매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K24'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사영수매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K25'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'OPUS 매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K26'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'OPUS 매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K27'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 신용매출_고객별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 선착개인_영업소별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 용품매출_영업소별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 선착개인_사원별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 상조회비_발생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 선착매출_고객별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 COD_발생(영업소별)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 패널티(일반)_발생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 사고금(선급)_발생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 COD_발생(사원별)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 선착불_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 선수금_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S21'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 COD_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S22'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 사고금_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S41'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 용품비_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S43'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 용차비_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S46'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 패널티(일반)_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S48'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 패널티(코리아)_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S49'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 보증금_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S51'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 임차료_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S52'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 장비(스캐너)_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S55'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 장비(프린터)_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S56'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 대여금_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S58'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 임차료(월)_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S61'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 상조회비_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S66'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 영업소수수료_정상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S71'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 영업소수수료_비사업자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S72'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 직영수수료_정상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S73'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 직영수수료_비사업자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S74'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 콜밴수수료_정상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S75'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 콜밴수수료_비사업자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S76'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 수수료_지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S81'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표-택배변동비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S83'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배 기타_상계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S99'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복운매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복운매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복운정산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DKCT매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'U01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'냉장창고매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'V01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'W01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제택배매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'W02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이관전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'X00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외부팩키지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'X01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출입통관매출전표-인천'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS400 매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Z01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS400 하역매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Z02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'AS400수금채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Z03'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100',id:'searchSlipNo',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서3',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'drawAcctDeptCd3','ev:onclickEvent':'scwin.udc_comCode3_onclickEvent',id:'udc_comCode3',nameId:'drawAcctDeptNm3',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'','ev:onblurCodeEvent':'scwin.udc_comCode3_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode3_onblurNameEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear3',style:'',type:'button','ev:onclick':'scwin.btn_clear3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서4',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'drawAcctDeptCd4','ev:onclickEvent':'scwin.udc_comCode4_onclickEvent',id:'udc_comCode4',nameId:'drawAcctDeptNm4',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'','ev:onblurCodeEvent':'scwin.udc_comCode4_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode4_onblurNameEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear4',style:'',type:'button','ev:onclick':'scwin.btn_clear4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재요청구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvDocKndCd',style:'width: 200px;',submenuSize:'fixed',ref:'','ev:onchange':'scwin.lc_apprvDocKndCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'001'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표승인취소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'002'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100',id:'searchReqNo',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',style:'',id:'',refEdDt:'',refDataMap:'',edFromId:'fromSlipDt',edToId:'toSlipDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'drawEmpNo','ev:onclickEvent':'scwin.udc_emp_onclickEvent',id:'udc_emp',nameId:'drawEmpNm',popupID:'',selectID:'retrieveEmpInfo',style:'',validTitle:'','ev:onblurCodeEvent':'scwin.udc_emp_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_emp_onblurNameEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear_writer',style:'',type:'button','ev:onclick':'scwin.btn_clear_writer_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정과목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctCd',ref:'',style:'width:280px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1000000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1100000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금및현금성자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110121'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금-환전'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110122'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금-말일수입금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110123'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금-왕복발권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110124'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전도금-탁송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110125'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌예금-실물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110131'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌예금-전자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110132'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110133'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보통예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보통예금-전도금(일반)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110141'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화당좌예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화보통예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현금및현금성자산-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기투자자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-정기예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-정기적금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-외화정기예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-외화정기적금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-단자예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110250'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-MMDA'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110260'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-MMF'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110270'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-특정현금과예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110280'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기금융상품-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110290'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌예금(구)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110291'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보통예금(구)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110292'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화당좌예금(구)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110293'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화보통예금(구)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110294'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화정기(구)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110295'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권-매도가능증권　　　'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권-주식'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권-국공사채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권-단기매매증권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권-만기보유증권(유동)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110350'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110360'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110405'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-용인F/F'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110411'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-위수탁'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110412'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-택배(개인)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110413'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-택배(법인)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110414'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110415'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-미출고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'받을어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'받을어음-실물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110431'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'받을어음-전자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110432'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110460'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-어음대여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-업무가지급금(일반)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-업무가지급금(급여)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110531'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-매표가지급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110540'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-대급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110550'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-과태료대급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110560'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-위수탁대급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110561'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110570'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주주종업원대여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주주종업원대여금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-과입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110720'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110730'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-과제예치금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110735'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-택배(임대료)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110740'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-택배(송장매출)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110750'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-택배(COD)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110760'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-택배(사업종료)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110770'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수수익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수수익-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대손충당금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물어음-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110920'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자어음-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110930'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추심어음-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110940'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기대여금-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110950'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대급금-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110960'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수금-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110970'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미수수익-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110980'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부도어음-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110990'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-일반(대충)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110991'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-어음(대충)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110992'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매출채권-대충'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110993'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미수금-일반(대충)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110995'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미수금-어음(대충)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1110997'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급금-유통'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급비용-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부가세대급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부가세대급금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급법인세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급법인세-법인세분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선급법인세-지방소득세분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당기손익공정가치금융상품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당기손익공정가치금융상품-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111401'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의유동자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의유동자산-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의유동자산-파생상품자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1111520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재고자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장품-부품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장품-타이어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장품-경유'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장품-잡유'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장품-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품-부품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품-타이어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품-유류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120250'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품-AP/요소수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120260'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제품-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재공품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재공품-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원재료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원재료-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용지-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반제품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반제품-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의재고자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의재고자산-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1120801'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비유동자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1200000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자자산  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품-장기성예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품-정기예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품-정기적금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품-외화정기예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품-외화정기적금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품-특정현금과예금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기금융상품-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자유가증권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자유가증권-매도가능증권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자유가증권-기타포괄손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210211'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자유가증권-당기손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210212'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자유가증권-국공사채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자유가증권-만기보유증권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자유가증권-지분법적용주식'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기대여금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자부동산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자부동산-토지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자부동산-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금-전세권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금-전신전화가입권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금-영업보증금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210540'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금-임차보증금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210550'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210560'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보증금-공탁금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210570'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현재가치할인차금(자산)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210580'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현재가치할인차금-보증금(자산)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210585'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부도어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부도어음-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직보험예치금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직보험예치금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미수금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미수금-일반(현할차)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미수금-어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210830'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미수금-어음(현할차)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210840'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매출채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매출채권-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매출채권-일반(현할차)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1210920'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이연법인세자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이연법인세자산-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의투자자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의투자자산-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대손충당금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관계기업투자자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관계기업투자주식'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종속기업투자자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종속기업투자주식-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종속기업투자주식-MMT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1211420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산  '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'토지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-토지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'구축물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-구축물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기계장치'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-기계장치'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-시설장치'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220411'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량운반구　　　　　'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-차량운반구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공구와기구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-공구와기구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-비품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'IT자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-IT자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1220910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'건설중인자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'건설중인자산-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'건물감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'구축물감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기계감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'시설장치감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221131'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선박감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공기구감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비품감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안전용품감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221175'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'IT자산감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자부동산-건물감가상각누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'토지 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221205'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'건물 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'구축물 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기계 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선박 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221250'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공기구 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221260'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비품 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221270'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비품 국고보조금(안전용품)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221275'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'IT자산 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221280'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비품(안전용품)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산-비품(안전용품)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1221310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-산업재산권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-라이센스/프랜차이즈'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-저작권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-컴퓨터소프트웨어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-개발비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-임차권리금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-광업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-어업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-영업권　　　'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-사용수익권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230201'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-회원권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산-회원권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230211'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컴퓨터소프트웨어 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개발비 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용수익권 국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1230330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용권자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1235000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'감가상각누계액-사용권자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1235100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타비유동자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1240000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의기타비유동자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1240100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타비유동자산-장기선급비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1240110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대손충당금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1240200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2000000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입채무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매입금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급어음-실물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100121'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급어음-전자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100122'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매입금-미출고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매입금-위수탁'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매입금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌차월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌차월-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기차입금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기차입금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기차입금-어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기차입금-관계회사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기차입금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급금-어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급금-외화'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급금-카드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100440'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-예매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-과입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-T/M'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100540'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-가수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100550'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-담보'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100560'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-국고보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100562'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100570'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-코리아'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100580'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금-항만안전관리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100590'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-근로소득세(정규)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100601'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-근로소득세(일용)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100602'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-지방소득세(근로/정규)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100603'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-지방소득세(근로/일용)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100604'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-연말정산(환급/소득세)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100605'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-연말정산(환급/지방소득)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100606'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-퇴직소득세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100607'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-지방소득세(퇴직)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100608'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-이자소득세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100609'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-지방소득세(이자)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100611'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-COD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100612'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-기타소득세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100613'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-기타주민세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100614'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-사업소득세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100615'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-사업소득주민세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100616'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-중도정산(환급/소득세)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100617'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예수금-중도정산(환급/지방소득)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100618'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부가세예수금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부가세예수금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-사원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-법인카드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100830'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-급여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100840'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100850'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-전도금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100860'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100870'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-렌터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100880'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-개인형법인카드정산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100890'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급비용-이자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100891'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급법인세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기미지급금 현할차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100903'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급법인세-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2100910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101001'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기부채-장기차입금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기부채-장기미지급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기부채-리스부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101022'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기부채-사채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성장기부채-사채할인발행차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성유동화부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동성유동화부채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101051'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급배당금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미지급배당금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수수익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수수익-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수수익-포인트(고속)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입보증금(유동)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입보증금-일반(유동)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입보증금-부동산임대(유동)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수탁금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수탁금-매표수탁금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수탁금-알선수탁금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기성부채충당금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기성부채충당금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의유동부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의유동부채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의유동부채-파생상품부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101620'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용권부채(유동)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2101700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비유동부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사채할인발행차금-사채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신주인수권조정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기차입금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기차입금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기차입금-외화'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기차입금현할차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매입채무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매입채무-외상매입금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매입채무-외상매입현할차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200311'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매입채무-실물지급어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매입채무-실물어음현할차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200321'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매입채무-전자지급어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기매입채무-전자어음현할차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200331'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미지급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미지급금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미지급금-어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미지급금-리스부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기미지급금현할차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200440'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직급여충당부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직급여충당부채-정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직급여충당부채-장기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200515'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직급여충당부채-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국민연금전환금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국민연금전환금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직보험예치금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직보험예치금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이연법인세부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이연법인세부채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동화부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유동화부채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2200910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의비유동부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의비유동부채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금융보증부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금융보증부채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입보증금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입보증금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입보증금-부동산임대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사채할인발행차금(비유동부채)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현재가치할인차금(부채)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현재가치할인차금-보증금(부채)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용권부채(비유동)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기종업원급여부채'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기종업원급여부채-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2201810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3000000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3100000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보통주자본금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3100100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우선주자본금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3100200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본잉여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3200000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본잉여금-주식발행초과금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3200100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본잉여금-감자차익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3200200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본잉여금-자기주식처분이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3200300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본잉여금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3200400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본잉여금-신주인수권대가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3200500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이익잉여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3300000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이익잉여금-이익준비금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3300100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이익잉여금-기타법정적립금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3300200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이익잉여금-임의적립금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3300300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이익잉여금-수정후전기이월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3300400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이익잉여금-당기순이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3300500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이익잉여금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3300600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본조정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본조정-주식할인발행차금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본조정-배당건설이자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본조정-자기주식'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본조정-미교부주식배당금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익-매가증권평가손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익-해외사업환산대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자본조정-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3400700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익누계액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3500000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익-지분법자본변동'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3500100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익-파생상품평가손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3500200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3500300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익-보험수리적손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3500400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타포괄손익-재평가잉여금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3500500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부채와자본계'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3900000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'총매출액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4100000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일반매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'시설사용매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상가임대매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장비사용매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수화물매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자판기매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매표수수료매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101070'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주유수수료매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101080'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'박차료매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101090'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무수탁료매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용차매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량대차매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위수탁관리매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포워딩매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포워딩매출-해상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101151'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포워딩매출-항공'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101152'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포워딩매출-운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101153'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포워딩매출-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101154'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'광고매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'교통카드수수료매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통관매출-해상운임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통관매출-육상운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101192'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통관매출-검역료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101194'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통관매출-DOC'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101196'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품매출-유류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품매출-타이어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101212'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품매출-부품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101214'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품매출-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101216'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품매출-수출(렌터)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101218'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품매출-AP/요소수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'택배매출-쇼핑몰'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포인트매출(고속)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항만안전관리매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4101250'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미출고매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4103000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미출고매출-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4103010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출원가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)인건비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)장비임차료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유류비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)급료와임금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)본봉'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)승무수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)대기수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)야간근로수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)휴일근로수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)급료와임금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)급료와임금-항운상용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)급료와임금-해외현지체제비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)초과근로수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소급분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200191'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)당직수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200192'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)제수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)제수당-년월차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)제수당-상여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)제수당-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)제수당-PI'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡급-일용직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡급-검수원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡급-경비원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡급-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)퇴직급여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)퇴직급여-정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)퇴직급여-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)퇴직급여-장기종업원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)경상연구개발비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)경상연구개발비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)명예퇴직급여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)명예퇴직급여-정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200521'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)명예퇴직급여-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200522'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복리후생비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-정기지급식대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200611'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-식대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200612'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-피복비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200613'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-학자금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200614'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-체력단련비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200615'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-김장보조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200616'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-국민건강보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200617'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-산재보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200618'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-고용보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200619'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-국민연금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200620'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-경조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200621'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-포상비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200622'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-당숙직비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200623'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-행사지원비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200624'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-음료수대금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200625'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-임금채권부담금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200626'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-건강검진비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200627'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-사택'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200628'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200629'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)복후비-선택적복리후생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200630'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)현장복리후생비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)현장복후비-현장직복후비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200711'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)현장복후비-단거리식대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200712'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)현장복후비-비연고지숙박식대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200713'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)현장복후비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200714'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)여비교통비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)여비교통비-시내교통비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)여비교통비-국내출장비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)여비교통비-해외출장비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200830'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)여비교통비-부임여비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200840'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)여비교통비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200850'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)접대비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)접대비-법인카드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'세금계산서'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'계산서'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)접대비-개인카드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200920'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)접대비-현금영수증'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200930'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)접대비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200940'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)접대비-경조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4200950'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)회의비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)회의비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)노무복지비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)노무복지비-노임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)노무복지비-물량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)노무복지비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)작업노임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)작업노임-상용직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)작업노임-일용직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)작업노임-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용차료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용차료-육송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용차료-해송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용차료-철송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용차료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용선료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용선료-정기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용선료-항해'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)용선료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해운운항비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201450'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)해운운항비-연료비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201451'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)해운운항비-항비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201452'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)해운운항비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201453'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)선박관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201470'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)선박관리비-선원비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201471'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)선박관리비-보급비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201472'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)선박관리비-검사비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201473'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)선박관리비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201474'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)중기임차료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)중기임차료-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)중기임차료-CNTR철송조작료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)중기임차료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)기타장비임차료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)기타장비임차료-장비성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)기타장비임차료-소모성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201620'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)경유비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)경유비-영업용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)경유비-중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201720'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)경유비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201730'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)경유비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201740'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡유비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡유비-영업용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡유비-중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡유비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201830'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)잡유비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201840'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)타이어비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)타이어비-영업용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)타이어비-중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201920'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)타이어비-스노우타이어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201930'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)타이어비-외주(고속)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201940'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)타이어비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4201950'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비부품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비부품비-영업용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비부품비-중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비부품비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비부품비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비소모품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비소모품비-영업용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비소모품비-중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비소모품비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)정비소모품비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급수수료-일반수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-소송진행비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202211'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-매표수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202212'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-알선수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202213'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-자문수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202214'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-정보처리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202215'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-기타용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202216'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202217'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-정비용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202218'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-판매촉진비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202219'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)일반지급수수료-렌터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급수수료-물류수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-보관수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202311'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-변동수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202312'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-고박비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202313'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-화물입출항료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202314'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-검정검수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202315'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-부두경비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202316'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-청소료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202317'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-시설사용료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202318'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-철도검수비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202319'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-화주대납금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-하역위탁료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202321'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)물류지급수수료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202322'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급수수료-택배외주수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-배달수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202331'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-집하수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202332'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-직영집하'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202333'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-콜밴집하'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202334'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-기동팀'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202335'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202336'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-용역수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202337'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-직영배달'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202338'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배외주수수료-콜밴배달'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202339'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급수수료-택배수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배수수료-용역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202341'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배수수료-판매수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202342'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배수수료-유지보수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202343'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배수수료-운영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202344'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배수수료-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202345'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배수수료-판매촉진비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202346'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급수수료-TOC수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-작업노임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-노임성복후비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-장비사용료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-직원인건비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202440'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-직원복후비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202450'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-지급임차료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202460'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202470'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202480'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-고정비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202481'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-변동비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202482'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-상용인건비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202483'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-상용복후비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202484'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)TOC수수료-상용기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202485'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-자동차보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202511'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202512'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-영업배상책임보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202513'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-보증보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202514'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-재산종합보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202515'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-해양종합보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202516'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-근로자재해보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202517'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202518'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)보험료-동산종합보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202519'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전교육비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)교육훈련비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)교육훈련비-사외위탁교육'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)교육훈련비-사내교육'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202720'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)교육훈련비-국내연수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202730'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)교육훈련비-해외연수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202740'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)교육훈련비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202750'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)도서인쇄비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)도서인쇄비-서적인쇄비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)도서인쇄비-도서구입비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)도서인쇄비-정기간행물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202830'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)도서인쇄비-적하목록대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202840'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)도서인쇄비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202850'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소모품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소모품비-일반소모품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소모품비-용지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202920'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소모품비-전산소모품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202930'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소모품비-안전용품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202940'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소모품비-작업도구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202950'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)소모품비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4202960'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)사무용품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)사무용품비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비-직통전화료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비-T/T,FAX'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비-전용회선료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비-교환원용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비-통신비지원금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통신비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수도광열비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수도광열비-상하수도료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수도광열비-전기료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수도광열비-난방비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수도광열비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수도광열비-물류변동전기료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-자동차세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203411'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-재산세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203412'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-주민세 종업원분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203413'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-면허세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203414'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-주민세 사업소분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203415'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-환경개선부담금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203416'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-과징금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203417'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-협회/조합비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203418'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203419'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세금과공과-개별소비세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급임차료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급임차료-토지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급임차료-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급임차료-리스료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급임차료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203540'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급임차료-토지/건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203550'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)지급임차료-업무용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203560'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량유지비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량유지비-유류비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량유지비-수리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203620'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량유지비-보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203630'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량유지비-기사용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203640'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량유지비-오디지원금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203650'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량유지비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203660'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-구축물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203720'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-기계장치'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203730'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203740'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203750'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-공기구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203760'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-비품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203770'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-IT자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203780'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유형자산상각비-안전용품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203790'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-산업재산권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203811'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-라이센스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203812'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-저작권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203813'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-컴퓨터SW'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203814'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-개발비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203815'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-임차권리금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203816'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-광업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203817'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-어업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203818'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-영업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203819'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-사용수익권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)무형자산상각비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203821'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)감가상각비-사용권자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203850'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-토지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203911'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203912'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-구축물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203913'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-기계장치'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203914'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203915'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-차량운반구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203916'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-공기구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203917'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-비품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203918'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-IT자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203919'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-임차자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203920'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203921'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)수선비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4203922'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)외주수선비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)외주수선비-렌터카'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)외주수선비-정비공장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)외주수선비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)광고선전비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)광고선전비-광고매체비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)광고선전비-선전물인쇄비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)광고선전비-광고물설치비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)광고선전비-적립금(렌터)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204131'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)광고선전비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)재료비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)재료비-자판기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)재료비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)재료비-택배소모품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)변상금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)변상금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통행료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)통행료-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세차비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세차비-영업용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세차비-중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)세차비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량검사비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량검사비-영업용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량검사비-중기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204620'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)차량검사비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204630'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)운반비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)운반비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배운반비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204720'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배운반비-간선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204721'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배운반비-라우팅'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204722'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배운반비-용차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204723'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배운반비-센터라우팅'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204724'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)택배운반비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204725'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)창업비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204730'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)창업비-지급수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204731'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)창업비-접대비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204732'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)창업비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204733'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품매출원가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204740'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)상품매출원가-유류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204741'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)상품매출원가-타이어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204742'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)상품매출원가-부품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204743'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)상품매출원가-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204744'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)상품매출원가-AP/요소수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204745'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)상품매출원가-수출(렌터)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204746'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FMS수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204750'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)FMS수수료-카드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204751'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)FMS수수료-공임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204752'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)해외시장개척비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204760'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)해외시장개척비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204761'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)선임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)선임-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항공운임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항공운임-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4204910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)미확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4205000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류배송비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-배송용역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-배송유류비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-배송통행료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-배송기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-용차배송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-용차고정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-납품대행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-용차택배'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-배송직배'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류이고비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-이고수송용역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-이고수송유류비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-이고수송통행료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-이고수송기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-용차이고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206250'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-용차수송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206260'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-이고수송해상'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206270'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-이고수송항공'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206280'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류하역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-피킹'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-컨테이너상하차비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-관리보조'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-지게차인건비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-지게차렌탈료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206350'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류기타용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-사무보조'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-청소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-유통가공비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-보세창고원가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206440'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류지급수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-정기점검료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-건물관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-기타지급수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-폐기물처리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206540'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-기타환경유지비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206550'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류수송비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-수송지입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-수송용차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206620'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-수송유류비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206630'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)유통물류-수송기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4206640'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비-용품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비-시설비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비-진단비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비-교육비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비-건강관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비-행사비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)안전보건관리비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207070'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비-위탁하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4207080'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4208000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비-시설비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4208010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비-인건비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4208020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비-행사비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4208030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비-교육비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4208040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비-항만안전기금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4208050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'원)항만안전관리비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4208060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출총이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4900000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판매관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)인건비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000001'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)임원급여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)임원급여-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000011'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-본봉'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-승무수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-대기수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-야간근로수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-휴일근로수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-초과근로수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와금금-소급분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)급료와임금-당직수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)제수당'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)제수당-년월차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)제수당-상여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)제수당-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)제수당-PI'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)잡급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)잡급-일용직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)잡급-검수원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)잡급-경비원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)잡급-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)퇴직급여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)퇴직급여-정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)퇴직급여-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)퇴직급여-장기종업원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)경상연구개발비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)경상연구개발비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)명예퇴직급여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)명예퇴직급여-정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000521'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)명예퇴직급여-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000522'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복리후생비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-정기지급식대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000611'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-식대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000612'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-피복비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000613'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-학자금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000614'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-국민건강보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000615'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-산재보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000616'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-고용보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000617'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-국민연금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000618'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-경조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000619'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-포상비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000620'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-당숙직비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000621'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-행사지원비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000622'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-음료수대금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000623'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-임금채권부담금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000624'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-건강검진비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000625'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-사택'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000626'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000627'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-단체상해보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000628'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)복후비-선택적복리후생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000629'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)여비교통비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)여비교통비-시내교통비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)여비교통비-국내출장비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000720'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)여비교통비-해외출장비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000730'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)여비교통비-부임여비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000740'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)여비교통비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000750'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)접대비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)접대비-법인카드,세금계산서,계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)접대비-개인카드'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)접대비-현금영수증'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000830'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)접대비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000840'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)접대비-경조금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000850'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)회의비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)회의비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5000910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-소송진행비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-매표수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-알선수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-자문수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-정보처리용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-기타용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001070'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급수수료-판매수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001080'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료-자동차보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료-영업배상책임보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료-보증보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료-재산종합보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료-해양종합보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료-근로자재해보험'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)보험료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전교육비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전교육비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비-사외위탁교육'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001310'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비-사내교육'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비-국내연수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001330'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비-해외연수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001340'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001350'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비-그룹교육'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001360'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)교육훈련비-채용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001370'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)도서인쇄비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)도서인쇄비-서적인쇄비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001410'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)도서인쇄비-도서구입비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)도서인쇄비-정기간행물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001430'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)도서인쇄비-적하목록대'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001440'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)도서인쇄비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001450'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)소모품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)소모품비-일반소모품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)소모품비-용지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)소모품비-전산소모품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)소모품비-안전용품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001540'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)소모품비-작업도구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001550'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)소모품비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001560'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)사무용품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)사무용품비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)통신비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)통신비-직통전화료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)통신비-T/T,FAX'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001720'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)통신비-전용회선료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001730'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)통신비-교환원용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001740'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)통신비-통신비지원금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001750'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)통신비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001760'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수도광열비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수도광열비-상하수도료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수도광열비-전기료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수도광열비-난방비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001830'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수도광열비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001840'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-자동차세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001911'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-재산세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001912'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-주민세 종업원분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001913'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-면허세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001914'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-주민세 사업소분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001915'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-환경개선부담금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001916'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-과징금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001917'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-협회/조합비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001918'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)세금과공과-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5001919'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급임차료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급임차료-토지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급임차료-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급임차료-리스료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급임차료-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급임차료-토지/건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)지급임차료-업무용차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)차량유지비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)차량유지비-유류비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)차량유지비-수리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)차량유지비-보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)차량유지비-기사용역비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)차량유지비-오디지원금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)차량유지비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-구축물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-기계장치'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002250'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-공기구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002260'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-비품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002270'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-IT자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002280'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)유형자산상각비-안전용품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002290'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002300'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-산업재산권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002311'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-라이센스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002312'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-저작권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002313'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-컴퓨터SW'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002314'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-개발비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002315'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-임차권리금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002316'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-광업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002317'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-어업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002318'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-영업권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002319'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-사용수익권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002320'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)무형자산상각비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002321'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)감가상각비-사용권자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002350'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002400'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-토지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002411'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-건물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002412'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-구축물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002413'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-기계장치'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002414'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-선박'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002415'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-차량운반구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002416'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-공기구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002417'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-비품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002418'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-IT자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002419'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-임차자산'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002420'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)수선비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002421'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)광고선전비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002500'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)광고선전비-광고매체비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002510'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)광고선전비-선전물인쇄비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002520'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)광고선전비-광고물설치비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002530'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)광고선전비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002540'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)변상금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002600'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)변상금-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002610'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)운반비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002700'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)운반비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002710'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)대손상각비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002800'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)대손상각비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002810'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)대손충당금환입-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002820'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)해외시장개척비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)해외시장개척비-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002910'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)해외시장개척비-접대비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5002920'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비-용품비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비-시설비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비-진단비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비-교육비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비-건강관리비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비-행사비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)안전보건관리비-기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5003070'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'판)명예퇴직급여-정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5220521'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5900000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업외손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6100000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업외수익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입이자와할인료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유가증권이자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입배당금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타전입수익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입임대료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금융보증수익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110055'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기투자자산처분이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외환차익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110070'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화환산이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110080'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입보험금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110090'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인세환급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기투자자산평가이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의대손충당금환입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지분법이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기투자증권손상차손환입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사채상환이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산처분이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산처분이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자자산처분이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타자산처분이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전기오류수정이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종속기업투자처분이익-MMT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'잡이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'잡이익-일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110231'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'잡이익-기타면책/범칙/위약금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110232'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파생상품평가이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6110240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영업외비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급이자와할인료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급이자와할인료-사용권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120015'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사채이자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'단기투자자산처분손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출채권처분손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금융보증비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120045'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의대손상각비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120050'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의지급수수료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120055'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타전입비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120060'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지분법손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120070'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기투자증권손상차손'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120080'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외화환산손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120090'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외환차손'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120100'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기부금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120110'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인세추납액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120120'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공정가치측정금융상품평가손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120130'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재고자산감모손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120140'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산폐기손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120150'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산처분손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120160'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산처분손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120170'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'투자자산처분손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120180'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타자산처분손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120190'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전기오류수정손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120200'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사채상환손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120210'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'잡손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120220'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파생상품평가손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120230'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유형자산손상차손'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120240'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'무형자산손상차손'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6120250'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특별손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6200000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특별이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6210000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공정가치측정금융상품평가이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6210010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채무면제이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6210020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보험차익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6210030'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의특별이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6210040'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특별손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6220000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재해손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6220010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타의특별손실'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6220020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계속사업손익법인세비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6300000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인세비용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6300010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주민세'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6300020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중단사업손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6600000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인세비용차감전계속사업손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6700000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'법인세차감전순이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6800000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계속사업이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6900000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당기순이익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6910000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주당손익'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6920000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리계정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9000000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부매입-집하'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9000009'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부매입-분류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9000010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부매입-배송간선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9000011'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부매입-배송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9000012'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제운영비율'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9700016'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clearAll',style:'',type:'button','ev:onclick':'scwin.btn_clearAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표결재요청',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner',style:'margin-right: 150px;'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'전표결재 요청제목',class:'req'}},{T:1,N:'xf:input',A:{style:'width: 400px;',id:'apprvTitle',placeholder:'',class:'w400'}}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_RequestElectronicApprove',style:'width:150px',id:'b_Request',type:'button',class:'btn '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결재요청(승인)'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_approveList',gridDownFn:'scwin.f_runExcel',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_approveList',defaultCellHeight:'24',evenRowBackgroundColor:'#F8FFF8',id:'gr_approveList',oddEvenColorDisplay:'true',rowNumHeaderValue:'No',rowNumVisible:'false',rowNumWidth:'40',showSortableImage:'true',sortable:'true',visibleRowNum:'10',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_approveList_onheaderclick','ev:oncellclick':'scwin.gr_approveList_oncellclick','ev:onaftercolumnmove':'scwin.gr_approveList_onaftercolumnmove',fixedColumnNoMove:'true',fixedColumn:'4',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk_header',inputType:'checkbox',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'other',value:'check'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작성부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'전표종류코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'전표종류',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'차변금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'대변금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'회계요청일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'회계부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'증빙개수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'e세로등록여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'차변금액(외)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'대변금액(외)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'작성자',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'거래처명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'역발행여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',style:'',value:'전결위임구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'회계처리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'공급일자',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'적요',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',value:'',width:'100',excelCellType:'date',excelFormat:'yyyy/MM/dd',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',textAlign:'left',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawAcctDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'slipKndCd',inputType:'text',width:'100',hidden:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'slipKnd',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'drAmt',inputType:'text',width:'100',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'crAmt',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postReqDt',inputType:'calendar',style:'',value:'',width:'120',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postAcctDeptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidenceCnt',inputType:'text',style:'',value:'',width:'100',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eseroYn',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drAmtFcrc',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,###.00',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crAmtFcrc',inputType:'text',style:'',value:'',width:'120',displayFormat:'#,###.00',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'elecAuthTrgtYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvGbn',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postNo',inputType:'text',style:'',value:'',width:'120',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',dataType:'number',expression:'sum(\'drAmt\')',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',dataType:'number',textAlign:'right',expression:'sum(\'crAmt\')',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'column67',value:'',displayMode:'label',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'column66',value:'',displayMode:'label',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',displayFormat:'#,###.00',dataType:'number',expression:'sum(\'drAmtFcrc\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column62',value:'',displayMode:'label',displayFormat:'#,###.00',dataType:'number',expression:'sum(\'crAmtFcrc\')',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'',validTitle:'',nameId:'',style:'display: none;',id:'udc_company'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'file-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'증빙 일괄 업로드',class:'tit',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right',style:'width:200px;margin-right: 150px;'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner',style:'margin-right:50px;'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'증빙파일종류',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_evidClsCd',class:'',direction:'auto',ref:'',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이거래명세서(청구서)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'품의서/보고서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공문'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산내역(Excel)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'INVOICE(청구서)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물증빙보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타증빙'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이세금계산서(RPA)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chk_receptYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',falseValue:'0','ev:onviewchange':'scwin.ChkBoxEvent'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영수구분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.fileSubmit',style:'display: none;',id:'btn_upload',type:'button',class:'btn '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙 일괄 업로드'}]}]}]}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',saveFn:'scwin.fileSubmit',id:'udc_fielUpload',explainYn:'N','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone',saveButtonId:'btn_upload',saveButtonName:'증빙 일괄 업로드',subDir:'FI/electaxinvc/evid/',subDirYearMonthYn:'Y'}}]},{T:1,N:'xf:group',A:{id:'grp_infoList',class:'info-list'},E:[{T:1,N:'xf:group',A:{id:'grp_infoRow1',class:'info-row'},E:[{T:1,N:'w2:textbox',A:{id:'txt_infoTitle1',label:'※ 회계요청일자 란 :',class:'info-title',tagname:'span',style:'color: #138a2e;'}},{T:1,N:'w2:textbox',A:{id:'txt_infoDesc1',label:'전자결재 최종승인이 나면 회계처리 요청일자로 회계처리가 되는 일자 입니다.',class:'info-desc',tagname:'span',style:'color: #2d36ff;'}}]},{T:1,N:'xf:group',A:{id:'grp_infoRow2',class:'info-row'},E:[{T:1,N:'w2:textbox',A:{id:'txt_infoTitle2',label:'※ 전표승인취소 :',class:'info-title',tagname:'span',style:'color: #138a2e;'}},{T:1,N:'w2:textbox',A:{id:'txt_infoDesc2',label:'실제 전표회계처리 취소와는 무관합니다. 전자결재와는 별도로 해당전표를 생성한 화면에서 반드시 취소작업을 해야합니다.',class:'info-desc',tagname:'span',style:'color: #2d36ff;'}}]},{T:1,N:'xf:group',A:{id:'grp_infoRow3',class:'info-row'},E:[{T:1,N:'w2:textbox',A:{id:'txt_infoTitle3',label:'※ 증빙 일괄 업로드 :',class:'info-title',tagname:'span',style:'color: #138a2e;'}},{T:1,N:'w2:textbox',A:{id:'txt_infoDesc3',label:'하나의 증빙 파일을 여러 건의 전표에 일괄 등록 합니다. 증빙삭제는 증빙개수의 숫자 클릭 후 팝업 화면에서 가능 합니다.',class:'info-desc',tagname:'span',style:'color: #2d36ff;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'width:200px; height:200px; ',id:''}}]}]}]})