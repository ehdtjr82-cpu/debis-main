/*amd /ui/ac/fi/fixedaset/fi_302_02_01b.xml 66669 2e3edcd6b19d6e98c67cac7dc030f1386777c7be516990cf0ad2bb90af69bb9a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDtSt',name:'작성시작일자',dataType:''}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'작성종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_out_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fiSlipNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSum',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecApprvTrgtYn',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_history',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndCd',name:'자산종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'자산종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bookAmt',name:'잔존가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용년수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'내용월수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'histQty',name:'이력수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서(이관전부서)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdAmt',name:'자본적지출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'histRate',name:'비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dispAmt',name:'매각금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dispPrflos',name:'매각손익',dataType:'number'}},{T:1,N:'w2:column',A:{id:'capExpdAmt2',name:'자본적지출금액2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dispAmt2',name:'매각금액2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'disuseAmt',name:'폐기금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tranAmt',name:'이관금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reappraiseAmt',name:'재평가금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tranAfAcctDeptCd',name:'이관후귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfAcctDeptNm',name:'이관후부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfFixedAsetNo',name:'이관후자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col33',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixedAsetHist'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromClsCd',name:'출처구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'증빙파일종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetApprvYn',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out_input',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fiSlipNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSum',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecApprvTrgtYn',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileList',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prmrNo',name:'구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'출처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'FILE크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmkregId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtmmodId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetPrmrNo',name:'자산증빙구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'영수여부(1:예,0:아니오)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'숨겨진값',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileUploadGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prmrNo',name:'구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'출처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'FILE크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetPrmrNo',name:'자산증빙구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'숨겨진값',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileDeleteGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prmrNo',name:'구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'출처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'FILE크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetPrmrNo',name:'자산증빙구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'숨겨진값',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_evidClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetPrmrNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prmrNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixedAsetNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixedAsetHistClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixedAsetHistClsCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipKndCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_apprvReqNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_fileRetrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fileOut","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:'',target:'data:json,[{"id":"ds_fileOut","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_fileRetrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.fixedaset.RetreiveeAssetsEvidenceSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_history',action:'/ac.fi.fixedaset.RetreiveeAssetsEvidenceHistListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fixedAsetHist","key":"IN_DS1"},{"id":"ds_history","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_history","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_history_submitdone','ev:submiterror':'scwin.sbm_history_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admit',action:'/ac.fi.fixedaset.SaveAssetsEvidenceInfoAdmitCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_out_input","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_admit_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admit2',action:'/ac.fi.fixedaset.SaveAssetsEvidenceInfoAdmitCnclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_out_input","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_admit2_submitdone','ev:submiterror':'scwin.sbm_admit2_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fileCreate',action:'/ac.fi.fixedaset.SaveAssetsEvidenceInfoAttachFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_fileUploadGDS","key":"IN_DS1"},{"id":"dma_evidClsCd","key":"IN_DS2"},{"id":"dma_fixedAsetNo","key":"fixedAsetNo"},{"id":"dma_fixedAsetHistClsCd","key":"fixedAsetHistClsCd"},{"id":"dma_slipNo","key":"slipNo"},{"id":"dma_slipKndCd","key":"slipKndCd"},{"id":"dma_apprvReqNo","key":"apprvReqNo"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fileCreate_submitdone','ev:submiterror':'scwin.sbm_fileCreate_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fileDelete',action:'/ac.fi.fixedaset.DeleteAssetsEvidenceInfoAttachFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_fileDeleteGDS","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fileDelete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.empNo = $c.data.getMemInfo($p, "empNm"); // 사용자 아이디

scwin.isSubCompany;
scwin.pWinClose;

// hidden 컴포넌트
scwin.txtCoClsCd = "";
scwin.txt_slipNo;
scwin.ed_coCd;
scwin.fixedAsetNo;
scwin.fixedAsetHistClsCd;
scwin.slipNo;
scwin.slipKndCd;
scwin.apprvReqNo;
scwin.fixedAsetApprvYn;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  //scwin.f_createHeader();
  scwin.f_setCompanyInfo();
  scwin.f_setFileUpDownFrame('1', '1', '1', '1', '1', '1');
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//-------------------------------------------------------------------------

scwin.f_Setting = function () {
  acb_apprvCd.getSelectedIndex(0);
  ed_slipDtSt.setValue(WebSquare.date.getCurrentServerDate().substring(0, 6) + "01");
  ed_slipDtEnd.setValue(WebSquare.date.getCurrentServerDate());
  ed_slipDtSt.focus();
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
  scwin.ed_coCd = scwin.vLoginCoCd;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function (row) {
  if (await $c.gus.cfIsNull($p, ed_slipDtSt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작성일자 From"]); //MSG_CM_ERR_002	@은(는) 필수 입력 항목입니다.;
    return;
  }
  if (await $c.gus.cfIsNull($p, ed_slipDtEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작성일자 To"]);
    return;
  }
  /*
  if (!await $c.gus.cfValidate([ed_slipDtSt, ed_slipDtEnd])) {
      return false;
  }
  */

  if (!(await $c.gus.cfIsAfterDate($p, ed_slipDtSt.getValue().trim(), ed_slipDtEnd.getValue().trim()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_slipDtSt.focus();
    return false;
  }
  dma_search.set("fixedAsetNo", ed_fixedAsetNo.getValue());
  dma_search.set("slipNo", ed_slipNo.getValue());
  dma_search.set("apprvCd", acb_apprvCd.getValue());
  dma_search.set("coCd", scwin.ed_coCd);
  await $c.sbm.execute($p, sbm_retrieve);
  scwin.f_RetrieveHistory();
};

//-------------------------------------------------------------------------
// 자산정보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveHistory = function () {
  if (ds_out.getRowPosition() == -1) return;
  dma_fixedAsetHist.set("slipNo", ds_out.getCellData(ds_out.getRowPosition(), "slipNo"));
  dma_fixedAsetHist.set("slipKndCd", ds_out.getCellData(ds_out.getRowPosition(), "slipKndCd"));
  // ds_fixedAsetHist.UseChangeInfo = false;
  //dataSetDebug(ds_fixedAsetHist, true);

  $c.sbm.execute($p, sbm_history);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (flag, check) {
  // debugger;
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 부서조회 
      var param = "," + scwin.ed_coCd + "," + scwin.txtCoClsCd + ",0";
      rtnList = udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_acctDeptCd,txt_acctDeptNm,rtnList);
      break;

    /*case '2':
    // 거래처	   
    var param="";
        
    rtnList = cfCommonPopUp('retrieveClntList',ed_clntNo.text.trim(),txt_clntNm.value,null,null,null,null,param,null,null,null,null); 
    f_resultPopEd(ed_clntNo,txt_clntNm,rtnList);	
    break;   */

    case '3':
      // 사원
      var param = '';
      param = scwin.ed_coCd + "," + scwin.txtCoClsCd;
      rtnList = udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNo_callBackFunc, ed_drawEmpNo.getValue().trim(), ed_drawEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_drawEmpNo,txt_drawEmpNm,rtnList);
      break;
    case '4':
      // 전표종류
      rtnList = udc_slipKndCd.cfCommonPopUp(scwin.udc_slipKndCd_callBackFunc, ed_slipKndCd.getValue().trim(), ed_slipKndNm.getValue(), check, null, null, null, null, "0", null, null, null, null);
      // f_resultPopEd(ed_slipKndCd,txt_slipKndNm,rtnList);
      break;
    case '5':
      // 사원-승인담당자
      var param = '';
      param = scwin.ed_coCd + "," + scwin.txtCoClsCd;
      rtnList = udc_drawEmpNo2.cfCommonPopUp(scwin.udc_drawEmpNo2_callBackFunc, ed_empNo.getValue().trim(), ed_empNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_empNo,txt_empNm,rtnList);
      break;
    default:
      break;
  }
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_acctDeptCd, ed_acctDeptNm, rtnList);
};
scwin.udc_drawEmpNo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_drawEmpNo, ed_drawEmpNm, rtnList);
};
scwin.udc_slipKndCd_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_slipKndCd, ed_slipKndNm, rtnList);
};
scwin.udc_drawEmpNo2_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_empNo, ed_empNm, rtnList);
};
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------

scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
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
// 승인
//-------------------------------------------------------------------------
scwin.f_Admit = async function () {
  if (ds_out.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }
  var nRow = 0;
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "1") {
      nRow = nRow + 1;
    }
  }
  if (nRow == 0) {
    await $c.gus.cfAlertMsg($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  if ((await scwin.f_chkAdmit()) == true) {
    return;
  }
  if ((await $c.win.confirm($p, "선택하신 전표를 승인처리하시겠습니까?")) == true) {
    ds_out_input.setJSON(gr_out.getCheckedJSON("chk"));
    ds_out_input.modifyAllStatus("U");
    $c.sbm.execute($p, sbm_admit);
  }
};
scwin.f_chkAdmit = async function () {
  var retVal = false;
  var chkCnt = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "1") {
      chkCnt = chkCnt + 1;
      if (ds_out.getCellData(i, "fixedAsetApprvYn") == "1") {
        //1:승인상태
        await $c.gus.cfAlertMsg($p, "승인된 전표가 포함되어있어 승인처리가 불가합니다.");
        ds_out.setRowPosition(i);
        retVal = true;
        break;
      }
    }
  }
  return retVal;
};

//-------------------------------------------------------------------------
// 승인취소
//-------------------------------------------------------------------------
scwin.f_AdmitCncl = async function () {
  if (ds_out.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }
  var nRow = 0;
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "1") {
      nRow = nRow + 1;
    }
  }
  if (nRow == 0) {
    await $c.gus.cfAlertMsg($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  if ((await scwin.f_chkAdmitCncl()) == true) {
    return;
  }
  if ((await $c.win.confirm($p, "선택하신 전표를 승인취소처리하시겠습니까?")) == true) {
    ds_out_input.setJSON(gr_out.getCheckedJSON("chk"));
    ds_out_input.modifyAllStatus("U");
    await $c.sbm.execute($p, sbm_admit2);
  }
};
scwin.f_chkAdmitCncl = async function () {
  var retVal = false;
  var chkCnt = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "1") {
      chkCnt = chkCnt + 1;
      if (ds_out.getCellData(i, "fixedAsetApprvYn") == "0") {
        //1:미승인상태
        await $c.gus.cfAlertMsg($p, "미승인된 전표가 포함되어있어 승인처리가 불가합니다.");
        ds_out.setRowPosition(i);
        retVal = true;
        break;
      }
    }
  }
  return retVal;
};

//-------------------------------------------------------------------------
// 첨부화일정보
//-------------------------------------------------------------------------
scwin.f_setFileUpDownFrame = function (fixedAsetNo, fixedAsetHistClsCd, slipNo, slipKndCd, apprvReqNo, fixedAsetApprvYn) {
  /*
      console.log("fixedAsetNo : " + fixedAsetNo);
      console.log("fixedAsetHistClsCd : " + fixedAsetHistClsCd);
      console.log("slipNo : " + slipNo);
      console.log("slipKndCd : " + slipKndCd);
      console.log("apprvReqNo : " + apprvReqNo);
      console.log("fixedAsetApprvYn : " + fixedAsetApprvYn);
  */
  var obj = {
    "dataObject": {
      "type": "json",
      "name": "wframeParam",
      "data": {
        "fixedAsetNo": fixedAsetNo,
        "fixedAsetHistClsCd": fixedAsetHistClsCd,
        "slipNo": slipNo,
        "slipKndCd": slipKndCd,
        "apprvReqNo": apprvReqNo,
        "fixedAsetApprvYn": fixedAsetApprvYn
      }
    }
  };
  let url = "/ui/ac/fi/fixedaset/fi_302_02_01p.xml";
  FileUpDownFrame.setSrc(url, obj);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_out.getRowConut == 0) {
    return;
  }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    var options = {
      fileName: "전표정보",
      sheetName: "전표정보"
    };
    $c.data.downloadGridViewExcel($p, gr_out, options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel2 = async function () {
  if (ds_history.getRowCount() == 0) {
    return;
  }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    var options = {
      fileName: "자산정보",
      sheetName: "자산정보"
    };
    $c.data.downloadGridViewExcel($p, gr_history, options);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  // $c.gus.cfHideDSWaitMsg(gr_out);
  var rowcnt = ds_out.getRowCount();
  ed_totalRow.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  } else {
    gr_out.focus();
  }
};
scwin.sbm_history_submitdone = function (e) {
  // $c.gus.cfHideDSWaitMsg(gr_history);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ed_totalRow2.setValue(ds_history.getTotalRow());
    if (ds_history.getTotalRow() != 0) {
      var row = 0;
      if (!$c.gus.cfIsNull($p, ds_history.getRowPosition())) {
        row = ds_history.getRowPosition();
      }
      scwin.fixedAsetNo = ds_history.getCellData(row, "fixedAsetNo");
      scwin.fixedAsetHistClsCd = ds_history.getCellData(row, "fixedAsetHistClsCd");
      scwin.slipNo = ds_history.getCellData(row, "slipNo");
      scwin.slipKndCd = ds_history.getCellData(row, "slipKndCd");
      scwin.apprvReqNo = ds_history.getCellData(row, "apprvReqNo");
      scwin.fixedAsetApprvYn = ds_history.getCellData(row, "fixedAsetApprvYn");
      scwin.f_setFileUpDownFrame(scwin.fixedAsetNo, scwin.fixedAsetHistClsCd, scwin.slipNo, scwin.slipKndCd, scwin.apprvReqNo, scwin.fixedAsetApprvYn);
    }
  }
};
scwin.sbm_admit_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_admit2_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.udc_slipKndCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'T');
};
scwin.udc_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'T');
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};
scwin.udc_drawEmpNo2_onclickEvent = function (e) {
  scwin.f_openPopUp('5', 'T');
};
scwin.udc_slipKndCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipKndCd, ed_slipKndNm, '4');
};
scwin.udc_slipKndCd_onblurNameEvent = function (e) {
  scwin.f_checkPopEd(ed_slipKndNm, ed_slipKndCd, '4');
};
scwin.udc_drawEmpNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_drawEmpNo, ed_drawEmpNm, '3');
};
scwin.udc_drawEmpNo_onblurNameEvent = function (e) {
  scwin.f_checkPopEd(ed_drawEmpNm, ed_drawEmpNo, '3');
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '1');
};
scwin.udc_srchAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptNm, ed_acctDeptCd, '1');
};
scwin.udc_drawEmpNo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_empNo, ed_empNm, '5');
};
scwin.udc_drawEmpNo2_onblurNameEvent = function (e) {
  scwin.f_checkPopEd(ed_empNm, ed_empNo, '5');
};
scwin.gr_out_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    await $c.gus.cfShowSlipInfo($p, ds_out.getCellData(rowIndex, "slipNo"));
  }
};
scwin.ds_out_onrowpositionchange = function (info) {
  if (info.newRowIndex == null) return;
  $c.util.setTimeout($p, () => {
    scwin.f_RetrieveHistory();
  }, {
    delay: 200
  });
};
scwin.gr_history_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.fixedAsetNo = ds_history.getCellData(rowIndex, "fixedAsetNo");
  scwin.fixedAsetHistClsCd = ds_history.getCellData(rowIndex, "fixedAsetHistClsCd");
  scwin.slipNo = ds_history.getCellData(rowIndex, "slipNo");
  scwin.slipKndCd = ds_history.getCellData(rowIndex, "slipKndCd");
  scwin.apprvReqNo = ds_history.getCellData(rowIndex, "apprvReqNo");
  scwin.fixedAsetApprvYn = ds_history.getCellData(rowIndex, "fixedAsetApprvYn");
  scwin.f_setFileUpDownFrame(scwin.fixedAsetNo, scwin.fixedAsetHistClsCd, scwin.slipNo, scwin.slipKndCd, scwin.apprvReqNo, scwin.fixedAsetApprvYn);
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_admit_onclick = function (e) {
  scwin.f_Admit();
};
scwin.btn_admit2_onclick = function (e) {
  scwin.f_AdmitCncl();
};
scwin.fixedAsetApprvYnFormat = function (value) {
  if (value == "0") {
    return "미승인";
  } else {
    return "승인";
  }
};
scwin.sbm_fileRetrieve_submitdone = function (e) {
  ds_fileList.removeAll();
  for (let i = 0; i < ds_fileOut.getTotalRow(); i++) {
    ds_fileList.insertRow();
    var attachFilePath = ds_fileOut.getCellData(i, "filePath");
    var fileStoredPath = attachFilePath.substr(0, attachFilePath.lastIndexOf('/') + 1);
    var storedFileNm = attachFilePath.substr(attachFilePath.lastIndexOf('/') + 1);
    ds_fileList.setCellData(i, "chk", "0"); // 체크
    ds_fileList.setCellData(i, "FILE_STORED_PATH", fileStoredPath); // 파일저장경로
    ds_fileList.setCellData(i, "STORED_FILE_NM", storedFileNm);
    ds_fileList.setCellData(i, "ORIGIN_FILE_NM", ds_fileOut.getCellData(i, "fileName")); // 원본파일명
    ds_fileList.setCellData(i, "FILE_EXPLAIN", ""); // 파일설명
    ds_fileList.setCellData(i, "FILE_SIZE", ds_fileOut.getCellData(i, "fileSize")); // 파일사이즈
    ds_fileList.setCellData(i, "slipNo", ds_fileOut.getCellData(i, "slipNo")); // 전표번호
    ds_fileList.setCellData(i, "slipKndNm", ds_fileOut.getCellData(i, "slipKndNm")); // 전표구분명
    if ($c.gus.cfIsNull($p, ds_fileOut.getCellData(i, "evidClsCd"))) {
      ds_fileList.setCellData(i, "evidClsNm", "00"); // 증빙구분명
    } else {
      ds_fileList.setCellData(i, "evidClsNm", ds_fileOut.getCellData(i, "evidClsCd")); // 증빙구분명
    }
    ds_fileList.setCellData(i, "rowStatus", ds_fileOut.getCellData(i, "rowStatus")); // rowStatus
    var hiddenKey = ds_fileOut.getCellData(i, "prmrNo") + "||" + ds_fileOut.getCellData(i, "fromClsCd") + "||" + ds_fileOut.getCellData(i, "fixedAsetNo") + "||" + ds_fileOut.getCellData(i, "fixedAsetHistClsCd") + "||" + ds_fileOut.getCellData(i, "slipNo") + "||" + ds_fileOut.getCellData(i, "fixedAsetPrmrNo") + "||" + ds_fileOut.getCellData(i, "slipKndCd");
    ds_fileList.setCellData(i, "hiddenKey", hiddenKey); // rowStatus
  }
  udc_fileUpload.setData(ds_fileList.getAllJSON());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_calendar',refDataMap:'dma_search',refEdDt:'slipDtEnd',refStDt:'slipDtSt',style:'',edFromId:'ed_slipDtSt',edToId:'ed_slipDtEnd',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_slipKndCd',nameId:'ed_slipKndNm',popupID:'',popupTitle:'',selectID:'retrieveSlipKndCd',style:'',validTitle:'',id:'udc_slipKndCd',refDataCollection:'dma_search',btnId:'btn_slipKndCd',code:'slipKndCd',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_slipKndCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipKndCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',maxlengthCode:'3',beforeAllowCharCode:'a-zA-Z',afterAllowCharCode:'0-9',allowCharCodeLength:'1','ev:onblurNameEvent':'scwin.udc_slipKndCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_drawEmpNo',nameId:'ed_drawEmpNm',popupID:'',popupTitle:'',selectID:'retrieveAcEmpInfo',style:'',validTitle:'',id:'udc_drawEmpNo',refDataCollection:'dma_search',code:'drawEmpNo','ev:onclickEvent':'scwin.udc_drawEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_drawEmpNo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',maxlengthCode:'6',allowCharCode:'0-9','ev:onblurNameEvent':'scwin.udc_drawEmpNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'',allowChar:'0-9',maxlength:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산귀속부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_acctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',nameId:'ed_acctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurNameEvent':'scwin.udc_srchAcctDeptCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fixedAsetNo',style:'',allowChar:'0-9',maxlength:'10'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_empNo',nameId:'ed_empNm',popupID:'',popupTitle:'',selectID:'retrieveAcEmpInfo',style:'',validTitle:'',id:'udc_drawEmpNo2',refDataCollection:'dma_search',code:'empNo','ev:onclickEvent':'scwin.udc_drawEmpNo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_drawEmpNo2_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurNameEvent':'scwin.udc_drawEmpNo2_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인상태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_apprvCd',style:'width: 200px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_out',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_out',style:'',autoFit:'allColumn',id:'gr_out',visibleRowNum:'5',class:'wq_gvw','ev:oncellclick':'scwin.gr_out_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'전표번호2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'작성부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column3',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'전표종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column51',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'작성자사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column39',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column37',value:'자산이력승인담당자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column35',value:'자산이력승인담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'결재요청번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetApprvYn',value:'',displayMode:'label',displayFormatter:'scwin.fixedAsetApprvYnFormat',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue;',id:'slipNo',value:'',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fiSlipNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'drawAcctDeptCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'drawAcctDeptNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'slipKndCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'drSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crSum',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'drawEmpNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'fixedAsetApprvId',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'fixedAsetApprvNm',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'apprvReqNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'sum(\'drSum\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',expression:'sum(\'crSum\')',dataType:'number',displayFormat:'#,###',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'자산정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownFn:'scwin.f_Excel2',gridID:'gr_history',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_history',style:'',autoFit:'none',id:'gr_history',visibleRowNum:'4',class:'wq_gvw','ev:oncellclick':'scwin.gr_history_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'',style:'',id:'column1',value:'자산이력구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'전표종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'자산유형코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'자산유형명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'자산종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'자산종류명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column45',value:'자산명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'취득일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'취득가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column39',value:'잔존가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column37',value:'원취득금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'내용<br/>년수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'내용<br/>월수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'이력<br/>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column77',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column75',value:'귀속부서<br/>(이관전부서)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column73',value:'자본적지출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'비율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column69',value:'매각금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column67',value:'매각손익',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column65',value:'자본적지출금액2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column63',value:'매각금액2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'폐기금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column59',value:'이관금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column57',value:'재평가금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'이관후귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column53',value:'이관후부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column91',value:'이관후자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column89',value:'전표종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column87',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column85',value:'결재요청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'',style:'',id:'fixedAsetHistClsCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetHistClsNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'slipKndCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetPatternCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'asetPatternNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetKndCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'asetKndNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'fixedAsetNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'acqDt',value:'',displayMode:'label',textAlign:'center',readOnly:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acqAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'bookAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'orgAcqAmt',value:'',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'svcLife',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'svcLifeMonth',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'histQty',value:'',displayMode:'label',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'capExpdAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'histRate',value:'',displayMode:'label',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'dispAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'dispPrflos',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'capExpdAmt2',value:'',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'dispAmt2',value:'',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'disuseAmt',value:'',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'tranAmt',value:'',displayMode:'label',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'reappraiseAmt',value:'',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',excelCellType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'tranAfAcctDeptCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'tranAfAcctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'tranAfFixedAsetNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'col33',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',hidden:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'apprvReqNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetApprvYn',value:'',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_admit2',style:'',type:'button','ev:onclick':'scwin.btn_admit2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_admit',style:'',type:'button','ev:onclick':'scwin.btn_admit_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'FileUpDownFrame',class:'row-gap-8'}}]}]}]}]}]})