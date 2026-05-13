/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_03b.xml 194435 2e66fd8dd2ef3ab2c10af356b43a343b59afe971628bb958913a665b416e0d50 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transPrd',name:'운송기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCntShtCd1',name:'운송수단코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCntShtCd2',name:'운송수단코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendBondZoneCd',name:'발송보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendBondZoneNm',name:'발송보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viaBondZoneCd',name:'경유보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viaBondZoneNm',name:'발송보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvBondZoneCd',name:'경유보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvBondZoneNm',name:'발송보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCstmCd',name:'신고세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCstmNm',name:'신고세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSecCd',name:'신고과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSecNm',name:'신고과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frgtCharCd',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndProcWay',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procClsCd',name:'처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainClsCd',name:'정정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'신고과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'신고과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnYn',name:'반송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmStateItm',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchMblNo',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchHblNo',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchMrn',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchMsn',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srchHsn',name:'전송처리방식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtClsCd',name:'하선물품구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주상호코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNmCmpy',name:'화주상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당자NM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerYn',name:'위험물여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'casYn',name:'유해화학물여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transTyp',name:'운송수단유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'정정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarAdmitClsCd',name:'신고승인구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNoSeq',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarClsCd',name:'신고구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRepoYn',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspMthd',name:'name76',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_arrive',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_arrive_onrowpositionchange','ev:oncelldatachange':'scwin.ds_arrive_oncelldatachange','ev:onremoverow':'scwin.ds_arrive_onremoverow','ev:oninsertrow':'scwin.ds_arrive_oninsertrow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvBondZoneCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvBondZoneNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ucomWrkPlApprNo',name:'타장허가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'정정순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntr',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_cntr_onrowpositionchange','ev:oninsertrow':'scwin.ds_cntr_oninsertrow','ev:onremoverow':'scwin.ds_cntr_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspMthd',name:'검사통보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRepoYn',name:'도착보고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'정정순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mainMain',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_mainMain_onrowpositionchange','ev:oncelldatachange':'scwin.ds_mainMain_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'정정차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainClsCd',name:'정정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainRsnCd',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfDeclarPrd',name:'운송기한(Fr)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afDeclarPrd',name:'운송기한(to)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndProcWay',name:'전송방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procClsCd',name:'처리구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainDeclarDt',name:'신고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rofPicCd',name:'귀책자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcRsnNm',name:'기타 사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarAdmitClsCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNoSeq',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainRsn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarCstmCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSecCd',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_arrive2',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_arrive2_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfArvBondZoneCd',name:'변경전도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfArvBondZoneNm',name:'변경전도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afArvBondZoneCd',name:'변경후도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afArvBondZoneNm',name:'변경후도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainSeq',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediTrgtYn',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'procClsCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mbl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_arvTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bondZone',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_custom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_section',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mrn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_SD106'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_SD217',repeatNode:'map',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rowStatus',name:'name9'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransDeclarationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_arrive","key":"OUT_DS2"},{"id":"ds_cntr","key":"OUT_DS3"},{"id":"ds_mainMain","key":"OUT_DS4"},{"id":"ds_arrive2","key":"OUT_DS5"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_arrive","key":"OUT_DS2"},{"id":"ds_cntr","key":"OUT_DS3"},{"id":"ds_mainMain","key":"OUT_DS4"},{"id":"ds_arrive2","key":"OUT_DS5"}]',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre','ev:submitdone':'scwin.submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_search1',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransDeclaration1CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master1","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_mbl',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mbl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_arvTemp',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_arvTemp","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cntrTemp',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_cntrTemp","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bondZone',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bondZone","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_custom',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_custom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_section',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_section","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mrn',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mrn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/SdConstants.js',type:'text/javascript',scopeVariable:'SdConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGlobalValue.js',type:'text/javascript',scopeVariable:'DGlobalValue'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
scwin.onUdcCompleted = function () {
  const codeOptions1 = [{
    method: 'getGridCombo',
    param1: 'SD016',
    param2: false,
    compID: 'gr_arrive:packUnitCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP101',
    param2: false,
    compID: 'gr_arrive:cntrSizCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP479',
    param2: false,
    compID: 'gr_arrive:inspMthd'
  }, {
    method: 'getGridCombo',
    param1: 'SD112',
    param2: false,
    compID: 'gr_mainMain:mainMainClsCd'
  }, {
    method: 'getGridCombo',
    param1: 'SD217',
    param2: false,
    compID: 'gr_mainMain:mainMainRsnCd'
  }, {
    method: 'getGridCombo',
    param1: 'SD135',
    param2: false,
    compID: 'gr_mainMain:sndProcWay'
  }, {
    method: 'getGridCombo',
    param1: 'SD103',
    param2: false,
    compID: 'gr_mainMain:procClsCd'
  }, {
    method: 'getGridCombo',
    param1: 'SD218',
    param2: false,
    compID: 'gr_mainMain:rofPicCd'
  }, {
    method: 'getCodeList',
    param1: 'OP266',
    param2: 1,
    param3: 'USE',
    compID: 'acb_dsmbrkFrgtClsCd'
  }];
  $c.data.setGauceUtil($p, codeOptions1, () => {
    // acb_dsmbrkFrgtClsCd.addItem('선택안함', '', '', 0);
    acb_dsmbrkFrgtClsCd.setSelectedIndex(0);
  });
  const codeOptions2 = [{
    grpCd: 'SD106',
    compID: 'acb_transCntShtCd1, acb_transCntShtCd2'
  },
  // 운송수단
  {
    grpCd: 'OP137',
    compID: 'acb_frgtCharCd'
  },
  // 물품특성
  {
    grpCd: 'SD112',
    compID: 'acb_mainMainClsCd'
  },
  // 정정구분
  {
    grpCd: 'SD103',
    compID: 'lc_procClsCd'
  } // 처리구분
  // { grpCd: 'SD217' }, // 정정 후       
  ];
  $c.data.setCommonCode($p, codeOptions2, () => {
    // acb_transCntShtCd1.addItem('선택안함', '', '', 0);
    // acb_transCntShtCd2.addItem('선택안함', '', '', 0);
    // acb_frgtCharCd.addItem('선택안함', '', '', 0);

    acb_transCntShtCd1.setSelectedIndex(0);
    acb_transCntShtCd2.setSelectedIndex(0);
    acb_frgtCharCd.setSelectedIndex(0);
    lc_procClsCd.setSelectedIndex(0);
    let dltStr = dlt_commonCodeSD106;
    let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
    dlt_SD106.setJSON(dlt.getAllJSON());

    // dltStr = dlt_commonCodeSD217;
    // dlt = $c.gus.object(dltStr); // 데이터 리스트 객체
    // dlt_SD217.setJSON(dlt.getAllJSON());

    scwin.globalVars();
    scwin.ondataload();
  });
};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = async function () {
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = async function () {
  const paramData = $c.data.getParameter($p);
  const loginDTO = $c.data.getMemInfo($p);
  scwin.lobranCd = loginDTO.lobranCd;
  scwin.userId = loginDTO.userId;

  //전송방식
  scwin.SEND_PROC_BATCH = SdConstants.EDI_SEND_PROC_BATCH;
  scwin.SEND_PROC_IMMEDIATE = SdConstants.EDI_SEND_PROC_IMMEDIATE;

  //처리구분
  scwin.PROC_CLS_NOT_SEND = SdConstants.EDI_PROC_CLS_NOT_SEND; //미전송
  scwin.PROC_CLS_SEND_COMPLETE = SdConstants.EDI_PROC_CLS_SEND_COMPLETE; //전송완료
  scwin.PROC_CLS_ACCEPT = SdConstants.EDI_PROC_CLS_ACCEPT; //접수
  scwin.PROC_CLS_DENIED = SdConstants.EDI_PROC_CLS_DENIED; //거절
  scwin.PROC_CLS_ERROR = SdConstants.EDI_PROC_CLS_ERROR; //오류
  scwin.PROC_CLS_REPAIR = SdConstants.EDI_PROC_CLS_REPAIR; //수리
  scwin.PROC_CLS_OK = SdConstants.EDI_PROC_CLS_OK; //승인
  scwin.PROC_CLS_REJECT = SdConstants.EDI_PROC_CLS_REJECT; //기각
  scwin.PROC_CLS_SUSPEND = SdConstants.EDI_PROC_CLS_SUSPEND; //보류

  //정정구분
  scwin.MAIN_MAIN_TRANS_PRD = SdConstants.MAIN_MAIN_CLS_TRANS_PRD; //운송기한 정정
  scwin.MAIN_MAIN_ARRIVE = SdConstants.MAIN_MAIN_CLS_ARRIVE; //도착지 정정
  scwin.MAIN_MAIN_ALL_CANCEL = SdConstants.MAIN_MAIN_CLS_ALL_CANCEL; //전체취하
  scwin.MAIN_MAIN_PART_CANCEL = SdConstants.MAIN_MAIN_CLS_PART_CANCEL; //부분취하
  scwin.MAIN_MAIN_ARV_TRANS_CNT_SHT = SdConstants.MAIN_MAIN_CLS_ARV_TRANS_CNT_SHT; //도착지운송수단정정
  scwin.MAIN_MAIN_VIA_TRANS_CNT_SHT = SdConstants.MAIN_MAIN_CLS_VIA_TRANS_CNT_SHT; //경유지운송수단정정
  scwin.MAIN_MAIN_VIA = SdConstants.MAIN_MAIN_CLS_VIA; //경유지정정
  scwin.MAIN_MAIN_DPT = SdConstants.MAIN_MAIN_CLS_DPT; //출발지정정
  scwin.MAIN_MAIN_PLDG_AMT = SdConstants.MAIN_MAIN_CLS_PLDG_AMT; //담보금액정정

  //정정사유구분
  scwin.MAIN_MAIN_ETC = '14'; //기타화주요청

  //서버일자
  scwin.SYSTEM_DATE = $c.date.getServerDateTime($p, 'yyyyMMdd');
  scwin.gv_paramMapKey = paramData['key'] ?? '';
  scwin.gv_paramMapCnt = paramData['cnt'] ?? '0';
  scwin.gv_paramDeclarNo = paramData['declarNo'] ?? '';
  scwin.gv_paramDeclarDt = paramData['declarDt'] ?? '';
  scwin.gv_paramDeclarSeq = paramData['declarSeq'] ?? '0';
  scwin.gv_paramBondZoneCd = paramData['bondZoneCd'] ?? '0';
  scwin.gv_paramBondZoneNm = paramData['bondZoneNm'] ?? '0';
  scwin.gv_praramMainMainClsCd = paramData['mainMainClsCd'] ?? '0';
  scwin.gv_paramMainMainRsnCd = paramData['mainMainRsnCd'] ?? '0';
  scwin.declarSeq = scwin.gv_paramDeclarSeq;

  //편집모드에 따라 화면의 상태, 버튼의 상태, TR 컴포넌트의 Action 및 KeyValue를 설정
  scwin.EDIT_MODE_INIT = '0';
  scwin.EDIT_MODE_RETRIEVE = '1';
  scwin.EDIT_MODE_NEW = '2';
  scwin.EDIT_MODE_UPDATE = '3';
  scwin.EDIT_MODE_MAIN_MAIN = '4';
  scwin.EDIT_MODE_DELETE = '5';
  scwin.gv_editMode = scwin.EDIT_MODE_INIT;

  //  작동안하여 임시조치
  scwin.DGlobalValue = {
    TRUE: 1,
    FALSE: 0
  };

  //메인 버튼의 상태 상수
  scwin.MAIN_BTN_ALL_DISABLE = '1';
  scwin.MAIN_BTN_ALL_ENABLE = '2';
  scwin.MAIN_BTN_NEW_ONLY = '3';
  scwin.MAIN_BTN_NEW_UPDATE = '4';
  scwin.MAIN_BTN_UPDATE_DISABLE = '5';
  scwin.MAIN_BTN_NEW_SEND = '6';
  scwin.MAIN_BTN_NEW_SAVE = '7';
  scwin.MAIN_BTN_DELETE = '8';
  scwin.check = 0;
  scwin.curTime = $c.date.getServerDateTime($p, 'yyyyMMddHHmm').slice(-4);
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = async function () {
  // 기본값 세팅
  chb_printCheck.setValue('1');
  chb_previewCheck.setValue('1');
  btn_addRow.hide();
  scwin.f_SetEditMode(scwin.EDIT_MODE_INIT);
  scwin.f_ClearSummary();
  scwin.f_FieldClear();
  //  scwin.f_ProcRequest(); 

  if (scwin.lobranCd == '4BB' || ['pchang', 'seokjy', 'zampion'].includes(scwin.userId)) {
    authTd.show('');
  } else {
    authTd.hide();
  }
  ;
  lc_dangerYn.setSelectedIndex(0);
  lc_casYn.setSelectedIndex(0);
  ds_master.initRowStatus(0);

  // 테스트 데이터
  // ica_srchDeclarDt.setValue('20250731');
  // ed_srchDeclarSeq.setValue('1');
  // ed_srchDeclarNo.setValue('030D1010007025006772');

  // ica_srchDeclarDt.setValue('20260401');
  // ed_srchDeclarSeq.setValue('15');
  // ed_srchDeclarNo.setValue('030D8010007026000015');
  await scwin.f_ProcRequest();
  //    await scwin.btn_search_onclick();
};

/**
 * @method 
 * @name f_ProcRequest 
 * @description 다른 화면에서의 요청을 처리
 */
scwin.f_ProcRequest = async function () {
  //HashMap의 키가 전달된 경우
  if (!$c.gus.cfIsNull($p, scwin.gv_paramMapKey)) {
    scwin.f_SetTransferedData(scwin.gv_paramMapKey, scwin.gv_paramMapCnt);
  }
  ;
  //debugger;
  //저장된 데이터의 키가 전달된 경우
  if (!$c.gus.cfIsNull($p, scwin.gv_paramDeclarNo)) {
    ed_srchDeclarNo.setValue(scwin.gv_paramDeclarNo);
    ica_srchDeclarDt.setValue(scwin.gv_paramDeclarDt);
    ed_srchDeclarSeq.setValue(scwin.gv_paramDeclarSeq);
    await scwin.f_Retrieve();
  }
  ;
};

/**
 * @method 
 * @name f_SetTransferedData 
 * @description 보세운송 승인대상 데이터를 Map에 꺼내서 데이터셋에 설정
 */
scwin.f_SetTransferedData = function (transferKey, transferCnt) {
  scwin.f_New();
  for (let i = 0; i < transferCnt; i++) {
    let insertIdx = ds_arrive.insertRow();
    ds_arrive.setRowJSON(insertIdx, transferKey[i]);
    scwin.f_ResetContainer();
  }
  ;
  ds_arrive.setRowPosition(1);
  $c.gus.cfPrepareHidVal($p, ds_arrive, ds_arrive.getRowPosition(), scwin.f_GetGridColumns(gr_arrive));
  if (!$c.gus.cfIsNull($p, scwin.gv_paramBondZoneCd)) {
    scwin.f_SetSendBondZone(scwin.gv_paramBondZoneCd, scwin.gv_paramBondZoneNm);
  }
  ;
  ica_declarDt.focus();
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 조회 필드 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchDeclarDt]);
  scwin.f_SetSrchDefault();
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search, [ica_srchDeclarDt]);
  ica_srchDeclarDt.setValue(scwin.SYSTEM_DATE);
  ica_srchDeclarDt.focus();
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 테이블 또는 Objects 중 조회조건이 하나라도 입력되었는 지 여부를 반환
 * @param {object} inObj
 */
scwin.f_IsAllEmpty = function (inObj) {
  let objArray = inObj;
  if (!Array.isArray(objArray)) {
    objArray = $c.util.getChildren($p, inObj, {
      excludePlugin: "body calendar textbox output image span trigger anchor group",
      recursive: true
    }) ?? inObj;
  }
  ;
  for (let i = 0; i < objArray.length; i++) {
    if (!$c.gus.cfIsNull($p, objArray[i].getValue())) return false;
  }
  ;
  return true;
};

/**
 * @method 
 * @name f_PreRetrieve 
 * @description 데이터를 조회하기 전 조회 조건 및 복수의 자료가 있는 지 체크
 */
scwin.f_PreRetrieve = async function () {
  let validVal;
  if (scwin.f_IsAllEmpty(tbl_search)) {
    await $c.gus.cfAlertMsg($p, '신고일자/신고순번, 신고번호, M B/L, H B/L번호 중 하나 이상 입력해 주십시요.');
    ica_srchDeclarDt.focus();
    return false;
  }
  ;
  validVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!validVal) return;
  if (!$c.gus.cfIsNull($p, ica_srchDeclarDt.getValue()) && $c.gus.cfIsNull($p, ed_srchDeclarSeq.getValue())) {
    await $c.gus.cfAlertMsg($p, '신고일자와 신고순번 조회조건은 함께 지정되어야 합니다.');
    ica_srchDeclarDt.focus();
    return false;
  }
  ;
  if (scwin.f_IsAllEmpty([ica_srchDeclarDt, ed_srchDeclarSeq, ed_srchDeclarNo]) && !scwin.f_IsAllEmpty([ed_mblNo, ed_hblNo])) {
    // 조회 체크 팝업 - f_srchPrePopUp
    udc_searchComCode.setSelectId('retrieveBondedTransInfoByBL');
    udc_searchComCode.cfCommonPopUp(async rtnList => {
      if (rtnList == null || rtnList[0] == 'N/A') {
        await $c.gus.cfAlertMsg($p, '조회 대상이 없거나 선택하지 않았습니다.');
        return false;
      }
      ;
      ed_mblNo.setValue(rtnList[0]);
      ed_hblNo.setValue(rtnList[1]);
      ica_srchDeclarDt.setValue(rtnList[2]);
      ed_srchDeclarSeq.setValue(rtnList[3]);
      ed_srchDeclarNo.setValue(rtnList[4]);
    }, ed_mblNo.getValue(), nameObj.getValeu(), 'T', null, null, null, null, '0', '850', null, null, null, null, 'T', null);
  }
  ;
  scwin.f_Retrieve();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회 : 데이터를 조회한다.
 */
scwin.f_Retrieve = async function () {
  let validVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!validVal) return;
  if (scwin.check == 1) {
    dma_search.setEmptyValue(); // todo - 동작 상이하여 추가
    ica_srchDeclarDt.setValue(scwin.SYSTEM_DATE);
    ed_srchDeclarSeq.setValue(scwin.declarSeq);
  }
  ;
  await scwin.submitExcute(sbm_search);
  scwin.check = 0;
};

/**
 * @method 
 * @name f_Save 
 * @description 저장 :
 */
scwin.f_Save = async function (msg, sndProcWay) {
  const retConfirm = await $c.win.confirm($p, msg + MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.f_PreparePost(sndProcWay);
  await scwin.submitExcute(sbm_master);
};

/**
 * @method 
 * @name f_SendImmediate 
 * @description 전송
 */
scwin.f_SendImmediate = async function () {
  scwin.curTime = $c.date.getServerDateTime($p, 'yyyyMMddHHmm').slice(-4);
  let msg = '즉시 전송됩니다.\n\n';
  let nCurTime = $c.num.parseInt($p, scwin.curTime, 0);

  // 20160114 이수영씨 요청으로 이수영씨 아이디는 제어품
  if ((nCurTime < 900 || nCurTime > 1759) && scwin.userId != '141028') {
    await $c.win.alert($p, '전송은 업무시간에만 가능합니다.\n' + '전송 가능시간 : 9:00 ~ 17:59 ');
    return false;
  }
  ;
  if (!(await scwin.f_Validation())) return false;
  if ((await scwin.f_IsMainMainMode()) || (await scwin.f_ExistMainMain())) {
    //정정내역이 삭제된 경우이면
    if (scwin.f_IsDeleteRow(ds_mainMain, scwin.f_GetMaxRow())) {
      await $c.gus.cfAlertMsg($p, '정정 신고내역 삭제는 EDI전송대상이 아닙니다.');
      return;
    }
    ;
  }
  ;
  scwin.f_Save(msg, scwin.SEND_PROC_IMMEDIATE);
};

/**
 * @method 
 * @name f_SendBatch 
 * @description 전송
 */
scwin.f_SendBatch = function (gubun) {
  switch (gubun) {
    case 1:
      _save();
      break;
    case 2:
      _delete();
      break;
    default:
      break;
  }
  ;
  async function _save() {
    let msg = '추후 일괄전송됩니다.\n\n';
    let validVal = await scwin.f_Validation();
    if (!validVal) return false;

    //정정내역이 삭제된 경우
    if ((scwin.f_IsMainMainMode() || scwin.f_ExistMainMain()) && scwin.f_IsDeleteRow(ds_mainMain, scwin.f_GetMaxRow())) {
      msg = '';
    }
    ;

    // 신고일자 && 신고순번
    if (dma_search.get('declarDt') != '' && dma_search.get('declarSeq') != '') {
      await scwin.submitExcute(sbm_search1);
      let masterData = ds_master1.getRowJSON(0);
      if (masterData['procClsCd'] == 1 && !scwin.f_IsProcErr(lc_procClsCd.getValue()) && !scwin.f_IsProcRepair(lc_procClsCd.getValue())) {
        await $c.gus.cfAlertMsg($p, '이미 해당 신고번호로 전송된 상태입니다.\n' + '조회 후 확인 하시기 바랍니다.');
        return;
      }
      ;
    }
    ;
    scwin.f_Save(msg, scwin.SEND_PROC_BATCH);
  }
  ;
  async function _delete() {
    let msg = '삭제 하시겠습니까 ? \n';
    const retConfirm = await $c.win.confirm($p, msg);
    if (!retConfirm) return;
    scwin.f_AllDelete();
  }
  ;
};

/**
 * @method 
 * @name f_SendBatch 
 * @description EDI 전송방식을 설정
 * @param {string} sndProcWay;
 */
scwin.f_PreparePost = async function (sndProcWay) {
  const validMode = await scwin.f_IsMainMainMode();
  const validExist = await scwin.f_ExistMainMain();
  if (validMode || validExist) {
    ds_mainMain.setCellData(scwin.f_GetMaxRow(), 'sndProcWay', sndProcWay);
    await scwin.f_PreparePostArrive2();
    return;
  }
  ;
  if (scwin.f_IsProcErr(lc_procClsCd.getValue())) {
    lc_procClsCd.setValue(scwin.PROC_CLS_NOT_SEND);
  }
  ;
  ds_master.setCellData(ds_master.getRowPosition(), 'sndProcWay', sndProcWay);
};

/**
 * @method 
 * @name f_PreparePostArrive2 
 * @description 정정신고인 경우 정정 구분에 따라 필요한 정보만 저장되도록 설정
 */
scwin.f_PreparePostArrive2 = async function () {
  const validExist = await scwin.f_ExistMainMain();
  if (!validExist) return;
  let mainMainCls = scwin.f_GetMaxMainMainCls();
  let ediTrgtYn = scwin.DGlobalValue.FALSE;
  let rowCnt = ds_arrive2.getRowCount();
  if (!scwin.f_IsNotSend(scwin.f_GetMaxProcCls())) return;

  //도착지 정정
  if (scwin.f_IsArrive(mainMainCls)) {
    for (let i = 0; i < rowCnt; i++) {
      ediTrgtYn = ds_arrive2.getCellData(i, 'ediTrgtYn');
      if (ediTrgtYn == scwin.DGlobalValue.TRUE) continue;
      let retVal = scwin.DGlobalValue.FALSE;
      //도착지를 정정한 행이면
      if (scwin.f_IsUpdateRow(ds_arrive2, i)) retVal = scwin.DGlobalValue.TRUE;
      ds_arrive2.setCellData(i, 'ediTrgtYn', retVal);
    }
    ;
  }

  //부분취하
  else if (scwin.f_IsPartCancel(mainMainCls)) {
    for (let i = 0; i < rowCnt; i++) {
      ediTrgtYn = ds_arrive2.getCellData(i, 'ediTrgtYn');
      if (ediTrgtYn == scwin.DGlobalValue.TRUE) continue;
      let retVal = scwin.DGlobalValue.FALSE;
      if (scwin.f_IsDeleteRow(ds_arrive2, i)) {
        //취하된 도착지이면
        ds_arrive2.undoRow(i);
        retVal = scwin.DGlobalValue.TRUE;
      }
      ;
      ds_arrive2.setCellData(i, 'ediTrgtYn', retVal);
      ds_arrive2.setCellData(i, 'afArvBondZoneCd', '');
      ds_arrive2.setCellData(i, 'afArvBondZoneNm', '');
    }
    ;
  } else {
    for (let i = 0; i < rowCnt; i++) {
      ds_arrive2.setCellData(i, 'ediTrgtYn', scwin.DGlobalValue.FALSE);
      ds_arrive2.setCellData(i, 'afArvBondZoneCd', '');
      ds_arrive2.setCellData(i, 'afArvBondZoneNm', '');
    }
    ;
  }
};

/**
 * @method 
 * @name f_Validation 
 * @description Validation :
 */
scwin.f_Validation = async function () {
  if ((await scwin.f_IsMainMainMode()) || (await scwin.f_ExistMainMain())) {
    return await scwin.f_ValidateMainMain();
  }
  ;
  return await scwin.f_ValidateDeclar();
};

/**
 * @method 
 * @name f_ValidateDeclar 
 * @description 원 신고정보 Validation
 */
scwin.f_ValidateDeclar = async function () {
  let validVal;

  //승인정보 입력 검증
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ['승인정보']);
    return false;
  }
  ;
  validVal = await $c.gus.cfValidate($p, [tbl_master]);
  if (!validVal) return false;
  if (!scwin.f_CheckHidVal([ed_sendBondZoneCd, ed_viaBondZoneCd, ed_declarCstmCd, ed_declarSecCd])) return false;
  if (!$c.gus.cfIsNull($p, ed_viaBondZoneCd.getValue()) && $c.gus.cfIsNull($p, acb_transCntShtCd2.getValue())) {
    await $c.gus.cfAlertMsg($p, '경유지 입력 시 두번째 운송수단도 입력하셔야 합니다');
    acb_transCntShtCd2.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_viaBondZoneCd.getValue()) && !$c.gus.cfIsNull($p, acb_transCntShtCd2.getValue())) {
    await $c.gus.cfAlertMsg($p, '두번째 운송수단 입력 시 경유지도 입력하셔야 합니다.');
    ed_viaBondZoneCd.focus();
    return false;
  }
  ;

  //도착지 입력 검증
  if (ds_arrive.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ['도착지내역']);
    return false;
  }
  ;
  validVal = await $c.gus.cfValidate($p, [gr_arrive]);
  if (!validVal) return false;
  for (let i = 0; i < ds_arrive.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_arrive.getCellData(i, 'arvBondZoneCd'))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ['도착지']);
      return false;
    }
    ;
  }
  ;
  validVal = await $c.gus.cfValidate($p, [gr_cntr]);
  if (!validVal) return false;
  return true;
};

/**
 * @method 
 * @name f_ValidateMainMain 
 * @description 정정 내역 Validation
 */
scwin.f_ValidateMainMain = async function () {
  let validVal;

  // 정정 입력 검증
  if (!scwin.f_ExistMainMain()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ['정정내역']);
    return false;
  }
  ;
  validVal = await $c.gus.cfValidate($p, [gr_mainMain], null, true);
  if (!validVal) return false;

  // 정정 내역이 삭제된 경우는 다른 검증을 하지 않는다.
  if (scwin.f_IsDeleteRow(ds_mainMain, scwin.f_GetMaxRow())) return true;
  let row = scwin.f_GetMaxRow();
  let mainMainCls = scwin.f_GetMaxMainMainCls(); // 정정구분코드를 가져온다.
  let mainMainRsnCd = scwin.f_GetMaxMainMainRsnCd(); // 정정사유코드를 가져온다.

  // 운송기한 체크
  if (scwin.f_IsTransPrd(mainMainCls)) {
    let bfDeclarPrd = ds_mainMain.getCellData(row, 'bfDeclarPrd');
    if ($c.gus.cfIsNull($p, bfDeclarPrd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ['운송기한(Fr)']);
      return false;
    }
    ;
    let afDeclarPrd = ds_mainMain.getCellData(row, 'afDeclarPrd');
    if ($c.gus.cfIsNull($p, afDeclarPrd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ['운송기한(to)']);
      return false;
    }
    ;
    if ($c.date.diffDate($p, bfDeclarPrd, afDeclarPrd) < 0) {
      await $c.gus.cfAlertMsg($p, '운송기한(to)이 운송기한(Fr)보다 이후여야 합니다.');
      return false;
    }
    ;
  }
  ;

  //변경전 도착지와 변경후 도착지가 동일한 지 여부 체크
  let rowCnt = ds_arrive2.getRowCount();
  if (scwin.f_IsArrive(mainMainCls)) {
    validVal = await $c.gus.cfValidate($p, [gr_arrive2]);
    if (!validVal) return false;
    for (let i = 0; i < rowCnt; i++) {
      let rowData = ds_arrive2.getRowJSON(i);
      if (rowData['afArvBondZoneCd'] == rowData['bfArvBondZoneCd']) {
        return false;
      }
      ;
    }
    ;

    //도착지 변경 여부 체크
    for (let i = 0; i < rowCnt; i++) {
      if (!$c.gus.cfIsNull($p, ds_arrive2.getCellData(i, 'afArvBondZoneNm'))) {
        return true;
      }
      ;
    }
    ;
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ['변경 후 도착지']);
    return false;
  } else if (scwin.f_IsPartCancel(mainMainCls)) {
    for (let i = 0; i < rowCnt; i++) {
      if (scwin.f_IsDeleteRow(ds_arrive2, i)) {
        return true;
      }
      ;
    }
    ;
    await $c.gus.cfAlertMsg($p, '취하된 도착지가 없습니다.');
    return false;
  } else if (scwin.f_IsEtcRsnNm(mainMainRsnCd)) {
    //정정사유가 기타화주요청일 경우  기타사유 입력은 필수
    if (!$c.gus.cfIsNull($p, ds_mainMain.getCellData(row, 'etcRsnNm'))) return true;
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ['기타 사유']);
    return false;
  }
  ;
  return true;
};

/**
 * @method 
 * @name f_IsDataUpdated 
 * @description 데이터셋의 자료 변경 여부를 반환 :
 * @param {object[]} dataSetArray
 */
scwin.f_IsDataUpdated = async function (dataSetArray) {
  if (dataSetArray == null) return false;
  for (let i = 0; i < dataSetArray.length; i++) {
    if (dataSetArray[i].getModifiedIndex().length > 0) return true;
  }
  ;
  return false;
};

/**
 * @method 
 * @name f_SetEditMode 
 * @description 화면의 상태에 따라 입력컨트롤/그리드/버튼의 상태, TR 컴포넌트의 Action/KeyValue를 설정
 * @param {string} editMode
 */
scwin.f_SetEditMode = function (editMode) {
  scwin.gv_editMode = editMode;
  switch (editMode) {
    case scwin.EDIT_MODE_NEW:
      _editModeNew();
      break;
    case scwin.EDIT_MODE_UPDATE:
      _editModeUpdate();
      break;
    case scwin.EDIT_MODE_MAIN_MAIN:
      _editModeMainMain();
      break;
    case scwin.EDIT_MODE_RETRIEVE:
      _editModeRetrieve();
      break;
    case scwin.EDIT_MODE_DELETE:
      _editModeDelete();
      break;
    default:
      _editModeInit();
      break;
  }
  ;
  scwin.f_SetDisplayOnly();

  // 신규
  function _editModeNew() {
    scwin.f_ToggleObj(true, [tbl_master, gr_arrive, gr_cntr]);
    scwin.f_ToggleMainMainEdit(false);
    scwin.f_ToggleArriveBtn(true);
    scwin.f_ToggleArriveSrch(true);
    scwin.f_ToggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
    sbm_master.action = '/ds.sd.odrmgnt.odrprewrk.RegistBondedTransDeclarationCMD.do';
    sbm_master.ref = 'data:json,[' + '{"id":"ds_master", "key":"IN_DS1"}' + ',' + '{"id":"ds_arrive", "key":"IN_DS2"}' + ',' + '{"id":"ds_cntr", "key":"IN_DS3"}' + ',' + '{"id":"ds_result", "key":"OUT_DS1"}' + ']';
    sbm_master.target = 'data:json,{"id":"ds_result", "key":"OUT_DS1"}';
  }
  ;

  // 수정
  function _editModeUpdate() {
    scwin.f_ToggleObj(true, [tbl_master, gr_arrive, gr_cntr]);
    scwin.f_ToggleObj(false, [ica_declarDt, ed_declarCstmCd, btn_declarCstmCd, ed_declarCstmNm, ed_declarSecCd, btn_declarSecCd, ed_declarSecNm, ed_sendBondZoneCd, ed_sendBondZoneNm, btn_sendBondZoneCd]);
    scwin.f_ToggleMainMainEdit(false);
    scwin.f_ToggleArriveBtn(true);
    scwin.f_ToggleArriveSrch(true);
    scwin.f_ToggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
    sbm_master.action = '/ds.sd.odrmgnt.odrprewrk.UpdateBondedTransDeclarationCMD.do';
    sbm_master.ref = 'data:json,[' + '{"id":"ds_master", "key":"IN_DS1"}' + ',' + '{"id":"ds_arrive", "key":"IN_DS2"}' + ',' + '{"id":"ds_cntr", "key":"IN_DS3"}' + ']';
    sbm_master.target = '';
  }
  ;

  // 정정
  function _editModeMainMain() {
    scwin.f_ToggleObj(false, [tbl_master, gr_arrive, gr_cntr]);
    scwin.f_ToggleMainMainEdit(true);
    scwin.f_ToggleArriveBtn(false);
    scwin.f_ToggleArriveSrch(false);
    scwin.f_ToggleObj(true, [ed_arvBondZoneCd, ed_arvBondZoneNm, btn_arvBondZoneCd, btn_arvBondZoneCd1]);
    scwin.f_ToggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
    sbm_master.action = '/ds.sd.odrmgnt.odrprewrk.SaveBondedTransDeclarationMainMainCMD.do';
    sbm_master.ref = 'data:json,[' + '{"id":"ds_mainMain", "key":"IN_DS1"}' + ',' + '{"action":"all", "id":"ds_arrive2", "key":"IN_DS2"}' + ']';
    sbm_master.target = '';
  }
  ;

  //조회
  function _editModeRetrieve() {
    scwin.f_ToggleObj(false, [tbl_master, gr_arrive, gr_cntr]);
    scwin.f_ToggleMainMainEdit(false);
    scwin.f_ToggleArriveBtn(false);
    scwin.f_ToggleArriveSrch(false);
    scwin.f_SetMainBtnState();
    sbm_master.action = '';
    sbm_master.ref = '';
    sbm_master.target = '';
  }
  ;

  //삭제
  function _editModeDelete() {
    scwin.f_ToggleObj(true, [tbl_master, gr_arrive, gr_cntr]);
    scwin.f_ToggleMainMainEdit(false);
    scwin.f_ToggleArriveBtn(true);
    scwin.f_ToggleArriveSrch(true);
    scwin.f_ToggleMainBtn(scwin.MAIN_BTN_UPDATE_DISABLE);
    sbm_master.action = '/ds.sd.odrmgnt.odrprewrk.DeleteBondedTransDeclarationCMD.do';
    sbm_master.ref = 'data:json,[' + '{"id":"ds_master", "key":"IN_DS1"}' + ']';
    sbm_master.target = '';
  }
  ;

  //초기화
  function _editModeInit() {
    scwin.f_ToggleObj(false, [tbl_master, tbl_summary, gr_arrive, gr_cntr]);
    scwin.f_ToggleMainMainEdit(false);
    scwin.f_ToggleArriveBtn(false);
    scwin.f_ToggleArriveSrch(false);
    scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_ONLY);
    sbm_master.action = '';
    sbm_master.ref = '';
    sbm_master.target = '';
  }
  ;
};

/**
 * @method 
 * @name f_New 
 * @description 신규
 */
scwin.f_New = async function () {
  const isUpdate = await scwin.f_IsDataUpdated([ds_master, ds_arrive, ds_cntr, ds_mainMain, ds_arrive2]);
  if (isUpdate) {
    const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_005);
    if (!retConfirm) return;
  }
  ;
  scwin.f_FieldClear();
  ds_master.removeAll();
  $c.gus.cfInitObjects($p, tbl_master);
  ds_arrive.removeAll();
  ds_cntr.removeAll();
  ds_mainMain.removeAll();
  ds_arrive2.removeAll();
  scwin.f_ClearSummary();
  ds_master.insertRow();
  ds_master.setRowPosition(0);
  ica_declarDt.setValue(scwin.SYSTEM_DATE);
  scwin.f_SetTransPrd();
  lc_procClsCd.setSelectedIndex(0);
  scwin.f_ResetSection();
  scwin.f_SetEditMode(scwin.EDIT_MODE_NEW);
  lc_dangerYn.setSelectedIndex(0);
  lc_casYn.setSelectedIndex(0);
  ica_declarDt.focus();
};

/**
 * @method 
 * @name f_Update 
 * @description 수정
 */
scwin.f_Update = function () {
  let procClsCd = lc_procClsCd.getValue();
  if (scwin.f_IsNotSend(procClsCd) || scwin.f_IsProcErr(procClsCd)) {
    //미전송, 오류
    scwin.f_SetEditMode(scwin.EDIT_MODE_UPDATE);
    return;
  }
  ;
  if (scwin.f_IsProcRepair(procClsCd)) {
    //수리
    scwin.f_SetEditMode(scwin.EDIT_MODE_MAIN_MAIN);
    return;
  }
  ;
  scwin.f_SetEditMode(scwin.EDIT_MODE_NEW);
};

/**
 * @method 
 * @name f_AllDelete 
 * @description 삭제
 */
scwin.f_AllDelete = async function () {
  let procClsCd = lc_procClsCd.getValue();
  let focusedData = ds_master.getRowJSON(ds_master.getRowPosition());
  if (focusedData['declarDt'] == '' || focusedData['declarSeq'] == '') {
    await $c.win.alert($p, '삭제할 정보가 없습니다.');
    return;
  }
  ;
  if (scwin.f_IsNotSend(procClsCd) || scwin.f_IsProcErr(procClsCd)) {
    scwin.f_SetEditMode(scwin.EDIT_MODE_DELETE);
    const rowCnt = ds_master.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      ds_master.deleteRow(i);
    }
    ;
    scwin.check = 1;
    await scwin.submitExcute(sbm_master);
  }
  ;
};

/**
 * @method 
 * @name f_Add 
 * @description 도착지 추가
 */
scwin.f_Add = function () {
  let row = ds_arrive.getRowPosition();
  ds_arrive.insertRow();
  if (row <= 0) return;
  let firstData = ds_arrive.getRowJSON(0);
  ds_arrive.setCellData(row, 'arvBondZoneCd', firstData['arvBondZoneCd']);
  ds_arrive.setCellData(row, 'arvBondZoneNm', firstData['arvBondZoneNm']);
  ds_arrive.setCellData(row, 'ucomWrkPlApprNo', firstData['ucomWrkPlApprNo']);
};

/**
 * @method 
 * @name f_Delete 
 * @description 도착지 삭제
 */
scwin.f_Delete = function () {
  const cntrCnt = ds_cntr.getTotalRow();
  for (let i = cntrCnt - 1; i >= 0; i--) {
    const isFilterd = ds_cntr.getFilteredRowIndex(i);
    if (typeof isFilterd == "undefined") continue;
    ds_cntr.removeRow(i);
  }
  ;
  $c.data.deleteRow($p, gr_arrive);
};

/**
 * @method 
 * @name f_Cancel 
 * @description
 */
scwin.f_Cancel = function () {
  $c.data.undoAll($p, ds_arrive);
  $c.data.undoAll($p, ds_cntr);
};

/**
 * @method 
 * @name f_AddMainMain 
 * @description 정정 추가
 */
scwin.f_AddMainMain = async function () {
  if (await scwin.f_IsDataUpdated([ds_arrive2])) {
    await $c.gus.cfAlertMsg($p, MSG_CM_CRM_005);
    return;
  }
  ;
  let mainMainSeq = scwin.f_GetMaxSeq();
  if (mainMainSeq == 0) {
    scwin.f_CopyArvFromOrg(mainMainSeq);
  } else if (mainMainSeq > 0) {
    if (!scwin.f_CanAddMainMain()) {
      await $c.gus.cfAlertMsg($p, '승인된 자료 중 전체취하가 아닌 경우만\n' + '정정내역을 추가 할 수 있습니다.');
      return;
    }
    ;
    scwin.f_CopyArvFromPrev(mainMainSeq);
  }
  ;
  let targetRow = ds_mainMain.insertRow(0);
  let sourceRow = ds_master.getRowPosition();
  let sourceColumns = ['declarDt', 'declarSeq', 'declarAdmitClsCd', 'declarNo', 'declarCstmCd', 'declarSecCd'];
  scwin.f_CopyDataRow(ds_master, ds_mainMain, sourceRow, targetRow, sourceColumns);
  ds_mainMain.setCellData(targetRow, 'mainMainSeq', mainMainSeq + 1);
  ds_mainMain.setCellData(targetRow, 'procClsCd', scwin.PROC_CLS_NOT_SEND);
  ds_mainMain.setCellData(targetRow, 'mainMainDeclarDt', scwin.SYSTEM_DATE);
  gr_mainMain.setFocusedCell(0, 0);
  totalCnt_mainMain.setValue(gr_mainMain._dataList.getRowCount());
  scwin.ds_arrive2_OnFilter();
  scwin.f_ToggleObj(false, [btn_addMainMain]);
  scwin.f_ToggleMainMainEdit(true);
};

/**
 * @method 
 * @name f_CopyDataRow 
 * @description 데이터셋 Row 복사
 */
scwin.f_CopyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw '원본 데이터셋이 정의되지 않았습니다.';
    if (targetDataset == null) throw '대상 데이터셋이 정의되지 않았습니다.';
    if (targetColumns == null) targetColumns = sourceColumns;
    let sourceRowData = sourceDataset.getRowJSON(sourceRow);
    targetDataset.setRowJSON(targetRow, sourceRowData, true);
    return;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, '[scwin.f_CopyDataRow]' + e);
  }
  ;
};

/**
 * @method 
 * @name f_CopyArvFromPrev 
 * @description 이전 정정차수의 도착지를 정정 도착지로 복사
 * @param {number} mainMainSeq
 */
scwin.f_CopyArvFromPrev = async function (mainMainSeq) {
  if (scwin.f_IsDataUpdated([ds_arrive2])) {
    await $c.gus.cfAlertMsg($p, MSG_CM_CRM_005);
    return;
  }
  ;
  if (mainMainSeq == 0) return;
  ds_arvTemp.removeAll();
  $c.gus.cfCopyDataSetHeader($p, ds_arrive2, ds_arvTemp);
  let commonColumns = ['declarDt', 'declarSeq', 'mrn', 'msn', 'hsn'];
  let sourceColumns = commonColumns.concat(['bfArvBondZoneCd', 'bfArvBondZoneNm']);
  let targetColumns = sourceColumns;
  let afterAction = true;

  //도착지 => 임시테이터셋으로 복사
  scwin.f_CopyDataSet(ds_arrive2, ds_arvTemp, sourceColumns, targetColumns, afterAction, mainMainSeq);

  //임시 => 도착지데이터셋으로 복사
  sourceColumns = sourceColumns.concat(['mainMainSeq', 'ediTrgtYn']);
  targetColumns = sourceColumns;
  scwin.f_CopyDataSet(ds_arvTemp, ds_arrive2, sourceColumns, targetColumns, afterAction, mainMainSeq);
  ds_arrive2.modifyAllStatus('R');
};

/**
 * @method 
 * @name f_CopyArvFromOrg 
 * @description 원신고의 도착지를 정정 도착지로 복사
 * @param {number} mainMainSeq
 */
scwin.f_CopyArvFromOrg = function (mainMainSeq) {
  if (mainMainSeq > 0) return;
  let commonColumns = ['declarDt', 'declarSeq', 'mrn', 'msn', 'hsn'];
  let sourceColumns = commonColumns.concat(['arvBondZoneCd', 'arvBondZoneNm']);
  let targetColumns = commonColumns.concat(['bfArvBondZoneCd', 'bfArvBondZoneNm']);
  let afterAction = true;
  scwin.f_CopyDataSet(ds_arrive, ds_arrive2, sourceColumns, targetColumns, afterAction, mainMainSeq);
  ds_arrive2.modifyAllStatus('R');
};

/**
 * @method 
 * @name f_CopyDataSet 
 * @description 데이터셋 복사
 * @param {object} sourceDataset
 * @param {object} targetDataset
 * @param {string[]} sourceColumns
 * @param {string[]} targetColumns
 * @param {boolean} afterAction
 * @param {string} mainMainSeq
 */
scwin.f_CopyDataSet = async function (sourceDataset, targetDataset, sourceColumns, targetColumns, afterAction, mainMainSeq) {
  try {
    if (sourceDataset == null) throw '원본 데이터셋이 정의되지 않았습니다.';
    if (targetDataset == null) throw '대상 데이터셋이 정의되지 않았습니다.';
    if (targetColumns == null) targetColumns = sourceColumns;
    let sourceAllData = sourceDataset.getAllJSON();
    let filterAllData = sourceAllData.map(item => {
      let filterRow = {};

      // 데이터셋 Row 복사 - f_CopyDataRow 대체
      sourceColumns.forEach((colID, i) => {
        if (Object.hasOwn(item, colID)) {
          let targetColID = targetColumns[i];
          filterRow[targetColID] = item[colID];
        }
        ;
      });

      // 정정 도착지 정정순번 설정 - f_SetMainMainSeq 대체
      if (afterAction) {
        filterRow['mainMainSeq'] = mainMainSeq + 1;
        filterRow['ediTrgtYn'] = scwin.DGlobalValue.FALSE;
      }
      ;
      return filterRow;
    });
    targetDataset.setJSON(filterAllData, false);
    return;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, '[scwin.f_CopyDataSet]' + e);
  }
  ;
};

/**
 * @method 
 * @name f_DelMainMain 
 * @description 정정 삭제
 */
scwin.f_DelMainMain = async function () {
  let focusedIdx = ds_mainMain.getRowPosition();
  if (ds_mainMain.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, '삭제할 대상이 없습니다.');
    return;
  }
  if (focusedIdx < 0 || focusedIdx != scwin.f_GetMaxRow()) {
    await $c.gus.cfAlertMsg($p, '정정차수가 가장 큰  자료를 선택해 주십시요.');
    return;
  }
  ;
  if (!scwin.f_IsNotSend(scwin.f_GetMaxProcCls())) {
    await $c.gus.cfAlertMsg($p, '처리구분이 미전송인 경우만 삭제할 수 있습니다.');
    return;
  }
  ;
  $c.data.deleteRow($p, gr_mainMain);
  ds_arrive2.modifyAllStatus('D');
  totalCnt_mainMain.setValue(ds_mainMain.getRowCount());
  totalCnt_arrive2.setValue(ds_arrive2.getRowCount());
  scwin.f_ToggleObj(scwin.f_CanAddMainMain(), [btn_addMainMain]);
  scwin.f_ToggleObj(scwin.f_CanDelMainMain(), [btn_delMainMain]);
  scwin.f_ToggleObj(false, [btn_send]);
};

/**
 * @method 
 * @name f_DelMainMainArv 
 * @description 정정 도착지 목록 삭제
 */
scwin.f_DelMainMainArv = async function () {
  let focusedIdx = ds_arrive2.getRowPosition();
  if (focusedIdx < 0) {
    await $c.gus.cfAlertMsg($p, '삭제할 대상을 선택해 주십시요.');
    return;
  }
  ;
  if (!scwin.f_IsPartCancel(scwin.f_GetMaxMainMainCls())) {
    await $c.gus.cfAlertMsg($p, '부분취하일 경우만 삭제하실 수 있습니다.');
    return;
  }
  ;
  ds_arrive2.removeRow(focusedIdx);
};

/**
 * @method 
 * @name f_DelMainMain 
 * @description Array 여부를 반환
 */
scwin.f_IsArray = function (inObj) {
  return inObj instanceof Array;
};

/**
 * @method 
 * @name f_CheckHidVal 
 * @description 코드와 Hidden 값이 같은 지 여부를 반환
 */
scwin.f_CheckHidVal = async function (inObj) {
  if (scwin.f_IsArray(inObj)) {
    for (let i = 0; i < inObj.length; i++) {
      if (scwin.f_CheckHidVal(inObj[i]) == false) return false;
    }
  } else {
    if ($c.gus.cfIsNull($p, inObj.getValue)) return true;
    if (inObj.getValue() != inObj.options.hidVal) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, objName);
      inObj.focus();
      return false;
    }
    ;
  }
  ;
  return true;
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
// function f_EventCheck() {
//     if (window.event == null) return 'F';

//     let tagName = window.event.srcElement.tagName.toUpperCase();
//     if (tagName == 'IMG' || tagName == 'A')
//         return 'F';
//     else
//         return 'T';
// }

/**
 * @method 
 * @name f_addArriveByMblNo 
 * @description Master B/L로 도착지 정보 자동 입력
 */
scwin.f_addArriveByMblNo = async function () {
  let mblNo = ed_srchMblNo.getValue();
  if ($c.gus.cfIsNull($p, mblNo)) {
    await $c.gus.cfAlertMsg($p, 'Master B/L 번호를 입력하십시요.');
    return;
  }
  ;

  // MB/L No로 B/L 도착지 데이터셋을 Reset - (f_ResetMbl)
  if ($c.gus.cfIsNull($p, mblNo)) return;
  scwin.f_ResetCommon(sbm_mbl, 'retrieveMasterBLInfo', [mblNo]);
};

/**
 * @method 
 * @name f_customPopUp 
 * @description 세관팝업
 */
scwin.f_customPopUp = function (pWinCloseTF, isName) {
  const winCloseVal = pWinCloseTF ?? 'T';
  const codeObj = ed_declarCstmCd;
  const nameObj = ed_declarCstmNm;

  // todo - cfCanOpenPopup 체크가 이상함
  let nameVal = nameObj.getValue();
  if (isName && nameVal == "") {
    codeObj.setValue('');
  }
  ;
  if (pWinCloseTF == 'T' && !$c.gus.cfCanOpenPopup($p, codeObj, nameObj) && nameVal == "") return;

  // f_CallCommonPopUp
  udc_declarCstmCd.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
  }, codeObj.getValue(), nameVal, winCloseVal, null, null, null, null, null, null, null, null, null, null, 'T', null, null);
};

/**
 * @method 
 * @name f_customPopUp 
 * @description 세관과팝업
 */
scwin.f_sectionPopUp = function (pWinCloseTF, nameChk) {
  let codeObj = ed_declarSecCd;
  let nameObj = ed_declarSecNm;
  let winCloseVal = pWinCloseTF ?? 'T';

  // todo - cfCanOpenPopup 체크가 이상함
  let nameVal = nameObj.getValue();
  if (nameChk && nameVal == "") {
    codeObj.setValue('');
  }
  ;
  if (pWinCloseTF == 'T' && !$c.gus.cfCanOpenPopup($p, codeObj, nameObj) && nameVal == "") return;
  udc_declarSecCd.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
  }, codeObj.getValue(), nameVal, winCloseVal, null, null, null, null, null, null, null, null, null, null, 'T', null);
};

/**
 * @method 
 * @name f_bondZonePopUp 
 * @description 보세구역코드 팝업
 */
scwin.f_bondZonePopUp = function (gubun, pWinCloseTF, isName) {
  let codeObj, nameObj, udcObj;
  switch (gubun) {
    case '1':
      codeObj = ed_sendBondZoneCd;
      nameObj = ed_sendBondZoneNm;
      udcObj = udc_sendBondZoneCd;
      break;
    case '2':
      codeObj = ed_viaBondZoneCd;
      nameObj = ed_viaBondZoneNm;
      udcObj = udc_viaBondZoneCd;
      break;
    case '3':
      codeObj = ed_arvBondZoneCd;
      nameObj = ed_arvBondZoneNm;
      udcObj = udc_arvBondZoneCd;
      break;
  }
  ;
  const winCloseVal = pWinCloseTF ?? 'T';

  // todo - cfCanOpenPopup 체크가 이상함
  let nameVal = nameObj.getValue();
  if (isName && nameVal == "") {
    codeObj.setValue('');
  }
  ;
  if (pWinCloseTF == 'T' && !$c.gus.cfCanOpenPopup($p, codeObj, nameObj) && nameVal == "") return;
  udcObj.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
    if (rtnList != null && rtnList[0] != 'N/A' && gubun == '1') {
      scwin.f_ResetCustom(rtnList[0].slice(0, 3));
    }
    ;

    //신고과 자동셋팅
    if (gubun != '1') return;
    let declarSecCd;
    switch (rtnList[0]) {
      case '03012312':
      case '03012226':
      case '03077016':
      case '03012240':
      case '03012343':
      case '03086311':
      case '03077083':
      case '02010014':
      case '02077010':
      case '02010621':
      case '02010043':
      case '02019701':
      case '02010010':
      case '02010039':
      case '02010028':
      case '02070001':
      case '02012007':
      case '02077002':
      case '03012010':
        declarSecCd = 'D8';
        break;
      case '03012312':
      case '03012226':
        declarSecCd = '09';
        break;
      default:
        declarSecCd = 'D1';
        break;
    }
    ;
    ed_declarSecCd.setValue(declarSecCd);
    scwin.f_sectionPopUp();
  }, codeObj.getValue(), nameVal, winCloseVal, null, null, null, null, null, null, null, null, null, null, 'F', null, null);
};

/**
 * @method 
 * @name f_NameValueRowEx 
 * @description 데이터셋의 NameString 메소드를 확장 (여러개의 컬럼 값을 연결한 값을 반환)
 * @param {object} dataSet
 * @param {string} row
 * @param {string|string[]} columns
 */
scwin.f_NameStringEx = function (dataSet, row, columns) {
  let key = '';
  if (scwin.f_IsArray(columns)) {
    for (let i = 0; i < columns.length; i++) {
      key += dataSet.getCellData(row, columns[i]);
    }
    ;
  } else {
    key = dataSet.getCellData(row, columns);
  }
  ;
  return key;
};

/**
 * @method 
 * @name f_NameValueRowEx 
 * @description 데이터셋의 columns 값을 연결한 문자열이 key와 같은 RowPosition을 반환
 * @param {object} dataSet
 * @param {string} key
 * @param {string|string[]} columns
 */
scwin.f_NameValueRowEx = function (dataSet, key, columns) {
  let rowCnt = dataSet.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (key == scwin.f_NameStringEx(dataSet, i, columns)) return i;
  }
  ;
  return -1;
};

/**
 * @method 
 * @name f_NameValueRowEx 
 * @description 그리드의 모든 컬럼명을 배열로 반환
 * @param {object} grid
 */
scwin.f_GetGridColumns = async function (grid) {
  try {
    let dataListID = grid.getDataList();
    if (grid == null) throw '그리드가 정의되지 않았습니다.';
    if ($c.gus.cfIsNull($p, dataListID)) throw '그리드의 dataList 속성이 정의되지 않았습니다.';
    let rtnArray = [];
    let dataSet = $p.getComponentById(dataListID);
    let colCnt = dataSet.getTotalCol();
    for (let i = 0; i < colCnt; i++) {
      let colID = grid.getColumnID(i);
      if (colID != null) rtnArray.push(colID);
    }
    ;
    if (rtnArray.length == 0) return null;else return rtnArray;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, '[scwin.f_GetGridColumns] ' + e);
  }
  ;
};

/**
 * @method 
 * @name f_mrnPopUp
 * @description 적하목록 팝업
 */
scwin.f_mrnPopUp = async function () {
  if ($c.gus.cfIsNull($p, ed_srchMrn.getValue())) {
    await $c.gus.cfAlertMsg($p, 'MRN을 입력해 주십시요.');
    ed_srchMrn.focus();
    return;
  }
  let codeObj = ed_srchMrn;
  let nameObj = ed_srchMsn;
  let pWhere = '';
  if (!$c.gus.cfIsNull($p, ed_srchHsn.getValue())) {
    pWhere = ',' + ed_srchHsn.getValue();
  }
  udc_searchComCode.setSelectId('retrieveBondedTransBLInfo');
  udc_searchComCode.cfCommonPopUp(rtnList => {
    if (rtnList == null || rtnList[0] == 'N/A') return;
    codeObj.setValue(rtnList[0]);
    nameObj.setValue(rtnList[1]);
    ed_srchHsn.setValue(rtnList[2]);
  }, codeObj.getValue(), nameObj.getValue(), 'T', null, null, null, null, pWhere, '560', null, null, null, null, 'F', null, null);
};

/**
 * @method 
 * @name f_hblPopUp
 * @description H B/L 팝업
 */
scwin.f_hblPopUp = async function () {
  let dataSet = ds_arrive;
  if ($c.gus.cfIsNull($p, ed_srchHblNo.getValue())) {
    await $c.gus.cfAlertMsg($p, 'H B/L 번호를 입럭하십시요.');
    ed_srchHblNo.focus();
    return;
  }
  ;
  let nameObj = ed_srchHblNo;
  let colArray = ['mblNo', 'hblNo', 'mrn', 'msn', 'hsn', 'commNm', 'packUnitCd', 'packCnt', 'totWt'];
  udc_arriveComCode.setSelectId('retrieveBondedTransBLInfo2');
  udc_arriveComCode.cfCommonPopUp(async rtnList => {
    if (rtnList == null || rtnList[0] == 'N/A') return;
    let row = dataSet.insertRow();
    nameObj.setValue(rtnList[1]);
    let existRow = scwin.f_NameValueRowEx(dataSet, rtnList[2] + rtnList[3] + rtnList[4], ['mrn', 'msn', 'hsn']);
    if (existRow > 0) {
      await $c.gus.cfAlertMsg($p, '이미 추가된 자료입니다.');
      dataSet.setRowPosition(existRow);
      return;
    }
    scwin.f_ResetBondZone(rtnList[9]); //발송지 설정
    $c.gus.f_SetGridColumn($p, dataSet, row, colArray, rtnList);
    dataSet.setRowPosition(row);
    scwin.f_ResetContainer();
  }, '', nameObj.getValue(), 'T', null, null, null, null, null, '580', null, null, null, null, null, null, 'F');
};

/**
 * @method 
 * @name f_hblPopUp
 * @description 도착지 그리드 팝업
 * @param {object} dataSet
 * @param {string} pWinCloseTF
 * @param {string} pAllSearchTF
 * @param {string} colid
 * @param {string} colArray
 */
scwin.f_bondZoneGridPopUp = function (dataSet, pWinCloseTF, pAllSearchTF, colid, colArray) {
  let row = dataSet.getRowPosition();
  if (row == null) return;
  let newData = dataSet.getCellData(row, colid);
  let oldData = dataSet.getOriginalCellData(row, colid);
  if (pWinCloseTF == 'T' && !$c.gus.f_CanGridPopup($p, dataSet, colid, newData, oldData, colArray)) {
    return false;
  }
  ;
  udc_gridCode.setSelectId('retrieveBondZoneRound');
  udc_gridCode.cfCommonPopUp(rtnList => {
    $c.gus.f_SetGridReturnValue($p, rtnList, dataSet, row, colArray);
  }, '', newData, pWinCloseTF, null, null, null, null, null, null, null, null, null, null, pAllSearchTF, null, null);
};

/**
 * @method 
 * @name f_clntNoPopUp
 * @description 화주코드팝업
 */
scwin.f_clntNoPopUp = function (pWinCloseTF, isName) {
  let codeObj = ed_clntNo;
  let nameObj = ed_mchtNmCmpy;
  let winCloseVal = pWinCloseTF ?? 'T';
  let objArray = ['', ed_mchtNm];

  // todo - cfCanOpenPopup 체크가 이상함
  let nameVal = nameObj.getValue();
  if (isName && nameVal == "") {
    codeObj.setValue('');
  }
  ;
  if (pWinCloseTF == 'T' && !$c.gus.cfCanOpenPopup($p, codeObj, nameObj) && nameVal == "") return;
  udc_clntNo.setSelectId('retrieveClntCrnList');
  udc_clntNo.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj, objArray);
    ed_mchtNm.setValue(rtnList[1]);
  }, codeObj.getValue(), nameVal, winCloseVal, null, null, null, null, null, null, null, null, null, null, 'F', null, null);
};

/**
 * @method 
 * @name f_ToggleObj
 * @description Object enable/disbale
 */
scwin.f_ToggleObj = function (mode, obj) {
  if ($c.gus.cfIsNull($p, obj)) return;
  if (scwin.f_IsArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      // 그리드는 그리드 자체가 아닌 컬럼 전체를 disable 해야함
      if (obj[i].getPluginName() == 'gridView') {
        let gridComp = obj[i];
        gridComp.setGridReadOnly(!mode);
      } else {
        obj[i].setDisabled(!mode);
      }
    }
    ;
    return;
  }
  ;
  if (obj.getPluginName() == 'gridView') {
    let gridComp = obj;
    scwin.gridChangeReadOnly(gridComp, !mode);
  } else {
    obj.setDisabled(!mode);
  }
  ;
  let tagname = obj.getPluginName();
  if (tagname != null && tagname.toUpperCase() == 'TABLE') {
    scwin.f_ToggleImg(mode, obj);
  }
  ;
};

/**
 * @method 
 * @name gridChangeReadOnly
 * @description Object enable/disbale
 * @param {object} gridComp
 * @param {boolean} mode
 */
scwin.gridChangeReadOnly = function (gridComp, readOnly) {
  let colCnt = gridComp.getTotalCol();
  for (let j = 0; j < colCnt; j++) {
    gridComp.setColumnReadOnly(j, readOnly);
  }
  ;
};

/**
 * @method 
 * @name f_ToggleImg
 * @description 이미지 enable/disbale
 * @todo 동작 확인 필요
 */
scwin.f_ToggleImg = function (mode, obj) {
  if ($c.gus.cfIsNull($p, obj)) return;
  if (scwin.f_IsArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      scwin.f_ToggleImg(mode, obj[i]);
    }
    ;
    return;
  }
  ;
  if (obj.options.tagName == null) return;
  let objType = obj.options.tagName.toUpperCase();
  if (objType == 'BUTTON') {
    scwin.f_ToggleObj(mode, obj);
  } else if (objType == 'GROUP') {
    let groupCompLen = $c.util.getChildren($p, obj, {
      excludePlugin: "body calendar textbox output image span trigger anchor group",
      recursive: true
    });
    for (let i = 0; i < groupCompLen; i++) {
      scwin.f_ToggleImg(mode, obj[i]);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_SetDisplayOnly
 * @description 기본적으로 disable 상태로  설정해야 하는 objects
 */
scwin.f_SetDisplayOnly = function () {
  scwin.f_ToggleObj(false, [ed_declarNo, ed_declarSeq, ed_regId, ed_regNm, acb_mainMainClsCd, ica_admitDt,
  //lc_procClsCd,
  tbl_summary]);
};

/**
 * @method 
 * @name f_ToggleMainMainEdit
 * @description 정정 편집 enable/disable
 * @param {boolean} mode
 */
scwin.f_ToggleMainMainEdit = function (mode) {
  if (!scwin.f_IsMainMainMode()) mode = false;
  if (!mode) {
    // 정정 추가/삭제 버튼 enable/disable
    scwin.f_ToggleObj(mode, [btn_addMainMain, btn_delMainMain, btn_delArrive2]);
    scwin.f_ToggleObj(mode, [gr_mainMain, gr_arrive2]);
    return;
  }
  ;
  scwin.f_ToggleObj(scwin.f_CanAddMainMain(), [btn_addMainMain]);
  scwin.f_ToggleObj(scwin.f_CanDelMainMain(), [btn_delMainMain]);
  scwin.f_ToggleObj(mode, [gr_mainMain]);
  scwin.f_SetMainMainRowEdit(ds_mainMain, scwin.f_GetMaxRow());
};

/**
 * @method 
 * @name f_ToggleMainBtn
 * @description 메인 버튼 enable/disable
 * @param {string} btnState
 */
scwin.f_ToggleMainBtn = function (btnState) {
  switch (btnState) {
    case scwin.MAIN_BTN_ALL_DISABLE:
      scwin.f_ToggleObj(false, [btn_new, btn_update, btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_ALL_ENABLE:
      scwin.f_ToggleObj(true, [btn_new, btn_update, btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_NEW_ONLY:
      scwin.f_ToggleObj(true, [btn_new]);
      scwin.f_ToggleObj(false, [btn_update, btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_NEW_UPDATE:
      scwin.f_ToggleObj(true, [btn_new, btn_update]);
      scwin.f_ToggleObj(false, [btn_send, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_UPDATE_DISABLE:
      scwin.f_ToggleObj(true, [btn_new, btn_send, btn_save, btn_delete]);
      scwin.f_ToggleObj(false, [btn_update]);
      break;
    case scwin.MAIN_BTN_NEW_SEND:
      scwin.f_ToggleObj(true, [btn_new, btn_send]);
      scwin.f_ToggleObj(false, [btn_update, btn_save, btn_delete]);
      break;
    case scwin.MAIN_BTN_NEW_SAVE:
      scwin.f_ToggleObj(true, [btn_new, btn_save, btn_delete]);
      scwin.f_ToggleObj(false, [btn_update, btn_send]);
      break;
    case scwin.MAIN_BTN_DELETE:
      scwin.f_ToggleObj(true, [btn_new, btn_send]);
      scwin.f_ToggleObj(false, [btn_save, btn_update, btn_delete]);
      break;
  }
  ;
};

/**
 * @method 
 * @name f_ToggleArriveBtn
 * @description 도착지 추가/삭제 버튼 enable/disable
 * @param {string} btnState
 */
scwin.f_ToggleArriveBtn = function (mode) {
  scwin.f_ToggleObj(mode, [btn_deleteRow, btn_cancelRow]);
};

/**
 * @method 
 * @name f_SetMainBtnState
 * @description 처리구분에 따라 버튼을 enable/disbale
 */
scwin.f_SetMainBtnState = async function () {
  const existMainMain = await scwin.f_ExistMainMain();
  if (!existMainMain) {
    let focusedIdx = ds_master.getRowPosition();
    let orgProcCls = ds_master.getCellData(focusedIdx, 'procClsCd');
    if (scwin.f_IsNotSend(orgProcCls) || scwin.f_IsProcErr(orgProcCls)) {
      scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_UPDATE);
    } else if (scwin.f_IsProcRepair(orgProcCls)) {
      scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_UPDATE);
    } else {
      scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_ONLY);
    }
    ;
    return;
  }
  ;
  let procCls = scwin.f_GetMaxProcCls();
  let mainMainCls = scwin.f_GetMaxMainMainCls();
  const notSend = scwin.f_IsNotSend(procCls);
  const procErr = scwin.f_IsProcErr(procCls);
  if (notSend || procErr) {
    scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_UPDATE);
  } else if (scwin.f_IsProcOk(procCls) || scwin.f_IsProcRepair(procCls)) {
    if (scwin.f_IsAllCancel(mainMainCls)) {
      scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_ONLY);
    } else {
      scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_UPDATE);
    }
  } else {
    scwin.f_ToggleMainBtn(scwin.MAIN_BTN_NEW_ONLY);
  }
  ;
};

/**
 * @method 
 * @name f_ToggleArriveSrch
 * @description Master B/L 조회를 enable/disable
 * @param {boolean} mode
 */
scwin.f_ToggleArriveSrch = function (mode) {
  scwin.f_ToggleObj(mode, [ed_srchMblNo, btn_srchMblNo, ed_srchHblNo, btn_srchHblNo, ed_srchMrn, ed_srchMsn, ed_srchHsn, btn_srchMrn]);
};

/**
 * @method 
 * @name f_ComputeSummary
 * @description 컨테이너 집계 내역을 계산
 */
scwin.f_ComputeSummary = function () {
  scwin.f_ComputeBLSummary();
  scwin.f_ComputeTotSummary();
};

/**
 * @method 
 * @name f_ComputeBLSummary
 * @description 컨테이너 선택된 BL에 대한 집계 내역을 계산
 */
scwin.f_ComputeBLSummary = function () {
  let cntrArray = new Array();
  let cntrSizArray = new Array();
  let rowCnt = ds_cntr.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_cntr.getRowJSON(i);
    cntrArray[i] = rowData['cntrNo'];
    cntrSizArray[cntrArray[i]] = rowData['cntrSizCd'];
  }
  ;
  let sortedArray = cntrArray.sort();
  let cntrCnt = feet20 = feet40 = feet45 = 0;
  let prevCntrNo = '';
  for (let j = 0; j < sortedArray.length; j++) {
    let cntrNo = sortedArray[j];
    if (!$c.gus.cfIsNull($p, cntrNo) && prevCntrNo != cntrNo) {
      cntrCnt++;
      switch (cntrSizArray[cntrNo]) {
        case '20':
          feet20++;
          break;
        case '40':
          feet40++;
          break;
        case '45':
          feet45++;
          break;
      }
      prevCntrNo = sortedArray[j];
    }
    ;
  }
  ;
  let focusedIdx = ds_arrive.getRowPosition();
  let focuesdData = ds_arrive.getRowJSON(focusedIdx);
  ed_20FeetCnt.setValue(feet20);
  ed_40FeetCnt.setValue(feet40);
  ed_45FeetCnt.setValue(feet45);
  ed_cntrCnt.setValue(cntrCnt);
  ed_packCntSum.setValue(focuesdData['packCnt']);
  ed_wtSum.setValue(focuesdData['totWt']);
};

/**
 * @method 
 * @name f_ComputeTotSummary
 * @description 컨테이너 집계 내역을 계산
 */
scwin.f_ComputeTotSummary = function () {
  let cntrCntTot = feet20Tot = feet40Tot = feet45Tot = 0;
  const allData = ds_cntr.getAllJSON();
  const uniqueCntrSet = new Set();
  allData.forEach(rowData => {
    if ($c.gus.cfIsNull($p, rowData.cntrNo) || uniqueCntrSet.has(rowData.cntrNo)) {
      return;
    }
    uniqueCntrSet.add(rowData.cntrNo);
    cntrCntTot++;
    switch (rowData.cntrSizCd) {
      case '20':
        feet20Tot++;
        break;
      case '40':
        feet40Tot++;
        break;
      case '45':
        feet45Tot++;
        break;
    }
  });
  let packCntArray = ds_arrive.getColData('packCnt');
  let sumPackCnt = packCntArray.reduce((prevVal, curVal) => {
    nPrev = $c.num.parseFloat($p, prevVal, 0);
    nCur = $c.num.parseFloat($p, curVal, 0);
    return nPrev + nCur;
  }, 0);
  let totWTArray = ds_arrive.getColData('totWt');
  let sumTotWt = totWTArray.reduce((prevVal, curVal) => {
    nPrev = $c.num.parseFloat($p, prevVal, 0);
    nCur = $c.num.parseFloat($p, curVal, 0);
    return nPrev + nCur;
  }, 0);
  ed_20FeetCntTot.setValue(feet20Tot);
  ed_40FeetCntTot.setValue(feet40Tot);
  ed_45FeetCntTot.setValue(feet45Tot);
  ed_cntrCntTot.setValue(cntrCntTot);
  ed_packCntSumTot.setValue(sumPackCnt);
  ed_wtSumTot.setValue(sumTotWt);
};

/**
 * @method 
 * @name f_ClearSummary
 * @description 컨테이너 집계 내역을 초기화
 */
scwin.f_ClearSummary = function () {
  ed_20FeetCnt.setValue(0);
  ed_40FeetCnt.setValue(0);
  ed_45FeetCnt.setValue(0);
  ed_cntrCnt.setValue(0);
  ed_packCntSum.setValue(0);
  ed_wtSum.setValue(0);
  ed_20FeetCntTot.setValue(0);
  ed_40FeetCntTot.setValue(0);
  ed_45FeetCntTot.setValue(0);
  ed_cntrCntTot.setValue(0);
  ed_packCntSumTot.setValue(0);
  ed_wtSumTot.setValue(0);
};

/**
 * @method 
 * @name f_SetArvBondZoneAll
 * @description 도착지 일괄 적용
 */
scwin.f_SetArvBondZoneAll = async function () {
  let dataSet = ds_arrive;
  let codeObj = ed_arvBondZoneCd;
  let nameObj = ed_arvBondZoneNm;
  if (!scwin.f_IsMainMainMode()) {
    dataSet = ds_arrive2;
    codeCol = 'afArvBondZoneCd';
    nameCol = 'afArvBondZoneNm';
  } else if ([scwin.EDIT_MODE_NEW, scwin.EDIT_MODE_UPDATE].includes(scwin.gv_editMode)) {
    dataSet = ds_arrive;
    codeCol = 'arvBondZoneCd';
    nameCol = 'arvBondZoneNm';
  } else {
    await $c.gus.cfAlertMsg($p, '신규 또는 수정 상태일 때만 도착지를 수정할 수 있습니다.');
    return false;
  }
  ;
  if ($c.gus.cfIsNull($p, codeObj.getValue())) {
    await $c.gus.cfAlertMsg($p, '도착지코드를 입력하십시오');
    codeObj.focus();
    return false;
  }
  ;
  if ($c.gus.cfIsNull($p, nameObj.getValue())) {
    await $c.gus.cfAlertMsg($p, '도착지명을 입력하십시오');
    nameObj.focus();
    return false;
  }
  ;
  if (!scwin.f_CheckHidVal(codeObj)) return false;
  let rowCnt = dataSet.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, '적용할 도착지내역이 없습니다.');
    return false;
  }
  ;
  for (let i = 0; i < rowCnt; i++) {
    dataSet.setCellData(i, codeCol, codeObj.getValue());
    dataSet.setCellData(i, nameCol, nameObj.getValue());
  }
  ;
};

/**
 * @method 
 * @name f_SetTransPrd
 * @description 운송기한을 설정
 */
scwin.f_SetTransPrd = function () {
  let declarDt = ica_declarDt.getValue();
  if (declarDt == '') return;
  if (!$c.date.isDate($p, declarDt, false)) return;

  // 반송 체크
  let offset = 10;
  if (chk_returnYn.getValue() == 1) offset = 7;
  ica_transPrd.setValue($c.date.addDate($p, declarDt, offset));
};

/**
 * @method 
 * @name f_SetMainMainRowEdit
 * @description 정정구분에 따라 정정 목록 그리드의 편집 상태를 설정
 * @param {object} dataSet
 * @param {number} row
 */
scwin.f_SetMainMainRowEdit = function (dataSet, row) {
  let rowData = dataSet.getRowJSON(row);
  let rowCnt = gr_mainMain._dataList.getRowCount();
  let mainMainCls = rowData['mainMainClsCd'];
  let procCls = rowData['procClsCd'];
  let mainMainRsnCd = rowData['mainMainRsnCd'];
  let colClsCd = gr_mainMain.getCellInfo('mainMainClsCd').options;
  let colRsnCd = gr_mainMain.getCellInfo('mainMainRsnCd').options;
  let colBfDeclarPrd = gr_mainMain.getCellInfo('bfDeclarPrd').options;
  let colAfDeclarPrd = gr_mainMain.getCellInfo('afDeclarPrd').options;
  let colDeclarDt = gr_mainMain.getCellInfo('mainMainDeclarDt').options;
  let colRofPicCd = gr_mainMain.getCellInfo('rofPicCd').options;
  let colEtcRsnNm = gr_mainMain.getCellInfo('etcRsnNm').options;

  //4세대 국종망 관련 정정항목그리드 정정전/후 에디트스타일수정 황창기 20160222
  if (scwin.f_IsNotSend(procCls) || scwin.f_IsProcErr(procCls)) {
    if (scwin.f_IsTransPrd(mainMainCls)) {
      gr_mainMain.setHeaderValue('bfDeclarPrdHeader', '운송기한(From)');
      gr_mainMain.setHeaderValue('afDeclarPrdHeader', '운송기한(From)');

      // 운송기한(Fr), 운송기한(To)
      let info = {
        inputType: 'calendar',
        options: {
          dataType: 'date',
          displayFormat: 'yyyy/MM/dd'
        }
      };
      for (let i = 0; i < rowCnt; i++) {
        gr_mainMain.setCellInputType(i, 'bfDeclarPrd', info);
        gr_mainMain.setCellInputType(i, 'afDeclarPrd', info);
      }
      ;
      gr_mainMain.setColumnReadOnly('bfDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);

      // 검증 설정
      colClsCd.mandatory = true;
      colRsnCd.mandatory = true;
      colBfDeclarPrd.mandatory = true; // 어째선지 체크 함
      colAfDeclarPrd.mandatory = true; // 어째선지 체크 함
      colDeclarDt.mandatory = true;
      colRofPicCd.mandatory = true;
      colEtcRsnNm.mandatory = false;
      gr_mainMain.options.validExp = "mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,bfDeclarPrd:운송기한(Fr):no:date=YYYYMMDD,afDeclarPrd:운송기한(To):no:date=YYYYMMDD,,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no";
    } else if (scwin.f_IsArrive(mainMainCls)) {
      // 정정 전, 정정 후 (운송기한(Fr), 운송기한(To))
      gr_mainMain.setHeaderValue('bfDeclarPrdHeader', '정정 전');
      gr_mainMain.setHeaderValue('afDeclarPrdHeader', '정정 후');
      let info = {
        inputType: 'text',
        options: {
          dataType: 'text',
          displayFormat: ''
        }
      };
      for (let i = 0; i < rowCnt; i++) {
        gr_mainMain.setCellInputType(i, 'bfDeclarPrd', info);
        gr_mainMain.setCellInputType(i, 'afDeclarPrd', info);
      }
      ;

      // 편집 설정
      gr_mainMain.setColumnReadOnly('mainMainSeq', true);
      gr_mainMain.setColumnReadOnly('bfDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('sndProcWay', true);
      gr_mainMain.setColumnReadOnly('procClsCd', true);
      gr_mainMain.setColumnReadOnly('mainMainDeclarDt', '');
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);

      // 검증 설정
      colClsCd.mandatory = true;
      colRsnCd.mandatory = true;
      colBfDeclarPrd.mandatory = true;
      colAfDeclarPrd.mandatory = true;
      colDeclarDt.mandatory = true;
      colRofPicCd.mandatory = false;
      colEtcRsnNm.mandatory = false;
      gr_mainMain.options.validExp = "mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no";
    } else if (scwin.f_IsArvTransCntSht(mainMainCls)) {
      // 정정 전, 정정 후 (운송기한(Fr), 운송기한(To))
      gr_mainMain.setHeaderValue('bfDeclarPrdHeader', '정정 전');
      gr_mainMain.setHeaderValue('afDeclarPrdHeader', '정정 후');
      let info = {
        inputType: 'select',
        options: {
          textAlign: 'left',
          emptyItem: true,
          emptyValue: ""
        },
        itemSet: {
          nodeset: "data:dlt_SD106",
          label: "cdNm",
          value: "cd"
        }
      };
      let info2 = {
        inputType: 'select',
        options: {
          textAlign: 'left',
          emptyItem: true,
          emptyValue: ""
        },
        itemSet: {
          nodeset: "data:dlt_SD106",
          label: "cdNm",
          value: "cd"
        }
      };
      for (let i = 0; i < rowCnt; i++) {
        gr_mainMain.setCellInputType(i, 'bfDeclarPrd', info);
        gr_mainMain.setCellInputType(i, 'afDeclarPrd', info2);
      }
      ;

      // const codeOptions = [
      //     { grpCd: 'SD106', compID: 'gr_mainMain:bfDeclarPrd' }, // 정정 전
      //     { grpCd: 'SD217', compID: 'gr_mainMain:afDeclarPrd' }, // 정정 후
      // ];
      // $c.data.setCommonCode(codeOptions);

      gr_mainMain.setColumnReadOnly('bfDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);

      // 검증 설정
      colClsCd.mandatory = true;
      colRsnCd.mandatory = true;
      colBfDeclarPrd.mandatory = false;
      colAfDeclarPrd.mandatory = false;
      colDeclarDt.mandatory = true;
      colRofPicCd.mandatory = true;
      colEtcRsnNm.mandatory = false;
      gr_mainMain.options.validExp = "mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no";
    } else if (scwin.f_IsViaTransCntSht(mainMainCls)) {
      // 정정 전, 정정 후 (운송기한(Fr), 운송기한(To))
      gr_mainMain.setHeaderValue('bfDeclarPrdHeader', '정정 전');
      gr_mainMain.setHeaderValue('afDeclarPrdHeader', '정정 후');
      let info = {
        inputType: 'select',
        options: {
          textAlign: 'left',
          emptyItem: true,
          emptyValue: ""
        },
        itemSet: {
          nodeset: "data:dlt_SD106",
          label: "cdNm",
          value: "cd"
        }
      };
      for (let i = 0; i < rowCnt; i++) {
        gr_mainMain.setCellInputType(i, 'bfDeclarPrd', info);
        gr_mainMain.setCellInputType(i, 'afDeclarPrd', info);
      }
      ;

      // const codeOptions = [
      //     { grpCd: 'SD106', compID: 'gr_mainMain:bfDeclarPrd' }, // 정정 전
      //     { grpCd: 'SD106', compID: 'gr_mainMain:afDeclarPrd' }, // 정정 후
      // ];
      // $c.data.setCommonCode(codeOptions);

      gr_mainMain.setColumnReadOnly('bfDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);

      // 검증 설정
      colClsCd.mandatory = true;
      colRsnCd.mandatory = true;
      colBfDeclarPrd.mandatory = false;
      colAfDeclarPrd.mandatory = false;
      colDeclarDt.mandatory = true;
      colRofPicCd.mandatory = true;
      colEtcRsnNm.mandatory = false;
      gr_mainMain.options.validExp = "mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no";
    } else if (scwin.f_IsVia(mainMainCls)) {
      const codeOptions = [];
      $c.data.setCommonCode($p, codeOptions);

      // 정정 전, 정정 후 (운송기한(Fr), 운송기한(To))
      gr_mainMain.setHeaderValue('bfDeclarPrdHeader', '정정 전');
      gr_mainMain.setHeaderValue('afDeclarPrdHeader', '정정 후');
      let info = {
        inputType: 'text',
        options: {
          dataType: 'text',
          displayFormat: ''
        }
      };
      for (let i = 0; i < rowCnt; i++) {
        gr_mainMain.setCellInputType(i, 'bfDeclarPrd', info);
        gr_mainMain.setCellInputType(i, 'afDeclarPrd', info);
      }
      ;

      // 편집 설정
      gr_mainMain.setColumnReadOnly('mainMainSeq', true);
      gr_mainMain.setColumnReadOnly('bfDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('sndProcWay', true);
      gr_mainMain.setColumnReadOnly('procClsCd', true);
      gr_mainMain.setColumnReadOnly('mainMainDeclarDt', '');
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);

      // 검증 설정
      colClsCd.mandatory = true;
      colRsnCd.mandatory = true;
      colBfDeclarPrd.mandatory = false;
      colAfDeclarPrd.mandatory = false;
      colDeclarDt.mandatory = true;
      colRofPicCd.mandatory = true;
      colEtcRsnNm.mandatory = false;
      gr_mainMain.options.validExp = "mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no";
    } else if (scwin.f_IsDpt(mainMainCls)) {
      const codeOptions = [];
      $c.data.setCommonCode($p, codeOptions);

      // 정정 전, 정정 후 (운송기한(Fr), 운송기한(To))
      gr_mainMain.setHeaderValue('bfDeclarPrdHeader', '정정 전');
      gr_mainMain.setHeaderValue('afDeclarPrdHeader', '정정 후');
      let info = {
        inputType: 'text',
        options: {
          dataType: 'text',
          displayFormat: ''
        }
      };
      for (let i = 0; i < rowCnt; i++) {
        gr_mainMain.setCellInputType(i, 'bfDeclarPrd', info);
        gr_mainMain.setCellInputType(i, 'afDeclarPrd', info);
      }
      ;

      // 편집 설정
      gr_mainMain.setColumnReadOnly('mainMainSeq', true);
      gr_mainMain.setColumnReadOnly('bfDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('sndProcWay', true);
      gr_mainMain.setColumnReadOnly('procClsCd', true);
      gr_mainMain.setColumnReadOnly('mainMainDeclarDt', '');
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);

      // 검증 설정
      colClsCd.mandatory = true;
      colRsnCd.mandatory = true;
      colBfDeclarPrd.mandatory = false;
      colAfDeclarPrd.mandatory = false;
      colDeclarDt.mandatory = true;
      colRofPicCd.mandatory = true;
      colEtcRsnNm.mandatory = false;
      gr_mainMain.options.validExp = "mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no";
    } else if (scwin.f_IsPldgAmt(mainMainCls)) {
      const codeOptions = [];
      $c.data.setCommonCode($p, codeOptions);

      // 정정 전, 정정 후 (운송기한(Fr), 운송기한(To))
      gr_mainMain.setHeaderValue('bfDeclarPrdHeader', '정정 전');
      gr_mainMain.setHeaderValue('afDeclarPrdHeader', '정정 후');
      let info = {
        inputType: 'text',
        options: {
          dataType: 'text',
          displayFormat: ''
        }
      };
      for (let i = 0; i < rowCnt; i++) {
        gr_mainMain.setCellInputType(i, 'bfDeclarPrd', info);
        gr_mainMain.setCellInputType(i, 'afDeclarPrd', info);
      }
      ;

      // 편집 설정
      gr_mainMain.setColumnReadOnly('mainMainSeq', true);
      gr_mainMain.setColumnReadOnly('bfDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('afDeclarPrd', '');
      gr_mainMain.setColumnReadOnly('sndProcWay', true);
      gr_mainMain.setColumnReadOnly('procClsCd', true);
      gr_mainMain.setColumnReadOnly('mainMainDeclarDt', '');
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);

      // 검증 설정
      colClsCd.mandatory = true;
      colRsnCd.mandatory = true;
      colBfDeclarPrd.mandatory = false;
      colAfDeclarPrd.mandatory = false;
      colDeclarDt.mandatory = true;
      colRofPicCd.mandatory = true;
      colEtcRsnNm.mandatory = false;
      gr_mainMain.options.validExp = "mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no";
    } else {
      gr_mainMain.setColumnReadOnly('bfDeclarPrd', true);
      gr_mainMain.setColumnReadOnly('afDeclarPrd', true);
      gr_mainMain.setColumnReadOnly('afArvBondZoneNm', true);
    }
    ;

    //정정사유가 기타화주 요청일 경우 기타 사유 편집 상태를 설정 -20131129 추가
    if (scwin.f_IsEtcRsnNm(mainMainRsnCd)) {
      gr_mainMain.setColumnReadOnly('etcRsnNm', '');
    } else {
      gr_mainMain.setColumnReadOnly('etcRsnNm', true);
      dataSet.setCellData(row, 'etcRsnNm', '');
    }
    ;
    scwin.f_SetMainMainArvEdit(mainMainCls);
  } else {
    scwin.f_ToggleObj(false, [gr_mainMain, gr_arrive2]);
  }
  ;
};

/**
 * @method 
 * @name f_SetMainMainArvEdit
 * @description 정정구분에 따라 정정도착지 목록 그리드의 편집 상태를 설정
 * @param {string} mainMainCls
 */
scwin.f_SetMainMainArvEdit = function (mainMainCls) {
  let objArray = [ed_arvBondZoneCd, ed_arvBondZoneNm, btn_arvBondZoneCd1, btn_arvBondZoneCd];
  if (scwin.f_IsPartCancel(mainMainCls)) {
    scwin.f_ToggleObj(false, gr_arrive2);
    scwin.f_ToggleObj(false, objArray);
    scwin.f_ToggleObj(true, btn_delArrive2);
  } else if (scwin.f_IsArrive(mainMainCls)) {
    scwin.f_ToggleObj(true, gr_arrive2);
    scwin.f_ToggleObj(true, objArray);
    scwin.f_ToggleObj(false, btn_delArrive2);
  } else {
    scwin.f_ToggleObj(false, gr_arrive2);
    scwin.f_ToggleObj(false, objArray);
    scwin.f_ToggleObj(false, btn_delArrive2);
  }
  ;
  ds_arrive2.undoAll();
};

/**
 * @method 
 * @name f_AddRowGrCntr
 * @description 정정구분에 따라 정정도착지 목록 그리드의 편집 상태를 설정
 * @param {string} mainMainCls
 */
scwin.f_AddRowGrCntr = async function () {
  if (ds_cntr.getRowCount() == 0) {
    await $c.win.alert($p, '화물정보 입력 후 행추가 하실수 있습니다.');
    return;
  }
  ;
  let arriveData = ds_arrive.getRowJSON(0);
  const insertIdx = ds_cntr.insertRow();
  ds_cntr.setCellData(insertIdx, 'mrn', arriveData['mrn']);
  ds_cntr.setCellData(insertIdx, 'msn', arriveData['msn']);
  ds_cntr.setCellData(insertIdx, 'hsn', arriveData['hsn']);
  ds_cntr.setCellData(insertIdx, 'cntrSeq', 0);
  ds_cntr.setCellData(insertIdx, 'hblNo', arriveData['hblNo']);
};

/**
 * @method 
 * @name f_IsMainMainMode
 * @description 편집모드가 정정 입력 상태인 지 여부를 반환한다.
 */
scwin.f_IsMainMainMode = async function () {
  return scwin.gv_editMode == scwin.EDIT_MODE_MAIN_MAIN;
};

/**
 * @method 
 * @name f_ExistMainMain
 * @description 정정 존재 여부를 반환
 */
scwin.f_ExistMainMain = async function () {
  return ds_mainMain.getRowCount() > 0;
};

/**
 * @method 
 * @name f_IsTransPrd
 * @description 운송기한정정 여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsTransPrd = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_TRANS_PRD;
};

/**
 * @method 
 * @name f_IsArrive
 * @description 도착지정정 여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsArrive = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_ARRIVE;
};

/**
 * @method 
 * @name f_IsPartCancel
 * @description 부분취하 여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsPartCancel = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_PART_CANCEL;
};

/**
 * @method 
 * @name f_IsArvTransCntSh
 * @description 출발지운송수단여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsArvTransCntSht = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_ARV_TRANS_CNT_SHT;
};

/**
 * @method 
 * @name f_IsViaTransCntSht
 * @description 경유지운송수단여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsViaTransCntSht = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_VIA_TRANS_CNT_SHT;
};

/**
 * @method 
 * @name f_IsVia
 * @description 경유지여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsVia = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_VIA;
};

/**
 * @method 
 * @name f_IsDpt
 * @description 출발지여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsDpt = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_DPT;
};

/**
 * @method 
 * @name f_IsPldgAmt
 * @description 담보금액여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsPldgAmt = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_PLDG_AMT;
};

/**
 * @method 
 * @name f_IsAllCancel
 * @description 전체취하 여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_IsAllCancel = function (mainMainCls) {
  return mainMainCls == scwin.MAIN_MAIN_ALL_CANCEL;
};

/**
 * @method 
 * @name f_IsAllCancel
 * @description 정정을 추가할 수 있는 지 여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_CanAddMainMain = function () {
  if (scwin.f_IsProcRepair(lc_procClsCd.getValue()) && ds_mainMain.getRowCount() == 0 || scwin.f_IsProcRepair(scwin.f_GetMaxProcCls())) {
    return true;
  }
  ;
  return scwin.f_IsProcOk(scwin.f_GetMaxProcCls()) && !scwin.f_IsAllCancel(scwin.f_GetMaxMainMainCls());
};

/**
 * @method 
 * @name f_IsAllCancel
 * @description 정정을 삭제할 수 있는 지 여부를 반환한다.
 * @param {string} mainMainCls
 */
scwin.f_CanDelMainMain = function () {
  if (ds_mainMain.getRowCount() == 0) return false;
  return scwin.f_IsNotSend(scwin.f_GetMaxProcCls());
};

/**
 * @method 
 * @name f_IsAllCancel
 * @description 최대 정정차수 의 정정 처리구분을 구한다.
 * @param {string} mainMainCls
 */
scwin.f_GetMaxProcCls = function () {
  return ds_mainMain.getCellData(scwin.f_GetMaxRow(), 'procClsCd');
};

/**
 * @method 
 * @name f_GetMaxSeq
 * @description 정정차수 최대값을 구한다.
 */
scwin.f_GetMaxSeq = function () {
  let reduceArray = ds_mainMain.getColData('mainMainSeq');
  let maxMainSeq = reduceArray.reduce((prevVal, curVal) => {
    let nCur = $c.num.parseFloat($p, curVal, 0);
    return prevVal > nCur ? prevVal : nCur;
  }, 0);
  return maxMainSeq;
};

/**
 * @method 
 * @name f_GetMaxRow
 * @description 최대 정정차수 RowPosition을 구한다.
 */
scwin.f_GetMaxRow = function () {
  let colDataArray = ds_mainMain.getColData('mainMainSeq');
  let maxVal = scwin.f_GetMaxSeq();
  let maxIdx = colDataArray.findIndex(item => {
    return item == maxVal;
  });
  return maxIdx;
};

/**
 * @method 
 * @name f_GetMaxMainMainCls
 * @description 최대 정정차수의 정정구분을 구한다.
 */
scwin.f_GetMaxMainMainCls = function () {
  return ds_mainMain.getCellData(scwin.f_GetMaxRow(), 'mainMainClsCd');
};

/**
 * @method 
 * @name f_GetMaxMainMainRsnCd
 * @description 최대 정정차수의 정정사유를 구한다. 이규형
 */
scwin.f_GetMaxMainMainRsnCd = function () {
  return ds_mainMain.getCellData(scwin.f_GetMaxRow(), 'mainMainRsnCd');
};

/**
 * @method 
 * @name f_IsNotSend
 * @description 미전송 여부를 반환한다.
 * @param {string} procClsCd
 */
scwin.f_IsNotSend = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_NOT_SEND;
};

/**
 * @method 
 * @name f_IsProcErr
 * @description 전송 오류 여부를 반환한다.
 * @param {string} procClsCd
 */
scwin.f_IsProcErr = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_ERROR;
};

/**
 * @method 
 * @name f_IsProcRepair
 * @description 전송 수리 여부를 반환한다.
 * @param {string} procClsCd
 */
scwin.f_IsProcRepair = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_REPAIR;
};

/**
 * @method 
 * @name f_GetMaxRow
 * @description 전송 승인 여부를 반환한다.
 * @param {string} procClsCd
 */
scwin.f_IsProcOk = function (procClsCd) {
  return procClsCd == scwin.PROC_CLS_OK;
};

/**
 * @method 
 * @name f_IsEtcRsnNm
 * @description 정정사유의 기타화주요청 여부를 반환한다 .
 * @param {string} procClsCd
 */
scwin.f_IsEtcRsnNm = function (procClsCd) {
  return procClsCd == scwin.MAIN_MAIN_ETC;
};

/**
 * @method 
 * @name f_ResetCommon
 * @description 공통팝업 쿼리로 부터 테이터를  조회한다.
 * @param {object} dataSet
 * @param {string} qryId
 * @param {string[]} paramArray
 */
scwin.f_ResetCommon = async function (dataSet, qryId, paramArray) {
  try {
    if (dataSet == null) throw '공통팝업 쿼리 데이터셋이 정의되지 않았습니다.';
    if ($c.gus.cfIsNull($p, qryId)) throw '공통팝업 쿼리 ID가 정의되지 않았습니다.';
    let path = '/cm.zz.RetrieveCommonPopupCMD.do?' + 'sysCd=CommonEBC&queryId=' + qryId;
    let paramStr = '';
    if (paramArray == null || paramArray.length == 0) {
      paramStr += '&param1=&param2=';
    } else if (paramArray.length == 1) {
      paramStr += '&param1=' + paramArray[0] + '&param2=';
    } else {
      for (let i = 0; i < paramArray.length; i++) {
        paramStr += '&param' + (i + 1) + '=' + (paramArray[i] == null ? '' : paramArray[i]);
      }
      ;
    }
    ;
    dataSet.action = path + paramStr;
    await scwin.submitExcute(dataSet);
  } catch (e) {
    await $c.gus.cfAlertMsg($p, e);
  }
  ;
};

/**
 * @method 
 * @name f_ResetMrn
 * @description 적하목록번호이 있는 지 여부를 체크하기 위한  데이터셋을 Reset
 */
scwin.f_ResetMrn = async function () {
  if ($c.gus.cfIsNull($p, ed_srchMrn.getValue())) {
    await $c.gus.cfAlertMsg($p, 'MRN을 입력해 주십시요.');
    ed_srchMrn.focus();
    return;
  }
  ;
  sbm_mrn.action = '/cm.zz.RetrieveCommonPopupCMD.do?sysCd=BondedTransEBC' + '&queryId=retrieveExistenceOfBL' + '&param1=' + ed_srchMrn.getValue() + '&param2=' + ed_srchMsn.getValue();
  await scwin.submitExcute(sbm_mrn);
};

/**
 * @method 
 * @name f_ResetArriveByMrn
 * @description 적하목록번호로 B/L 도착지 데이터셋을 Reset
 * @param {string} mrn
 * @param {string} msn
 * @param {string} hsn
 */
scwin.f_ResetArriveByMrn = function (mrn, msn, hsn) {
  scwin.f_ResetCommon(sbm_arvTemp, 'retrieveBondedTransBLInfo', [mrn, msn, '', hsn]);
};

/**
 * @method 
 * @name f_ResetArriveByMBL
 * @description B/L 도착지 데이터셋을 Reset
 * @param {string} mblNo
 */
scwin.f_ResetArriveByMBL = function (mblNo) {
  if ($c.gus.cfIsNull($p, mblNo)) return;
  scwin.f_ResetCommon(sbm_arvTemp, 'retrieveBondedTransBLInfo', ['', '', mblNo]);
};

/**
 * @method 
 * @name f_ResetContainer
 * @description B/L 컨테이너 데이터셋을 Reset
 */
scwin.f_ResetContainer = async function () {
  let masterRow = ds_arrive.getRowPosition();
  let rowData = ds_arrive.getRowJSON(masterRow);
  let param2 = rowData['mrn'];
  let param3 = rowData['msn'];
  let param4 = rowData['hsn'];
  // return;
  await scwin.f_ResetCommon(sbm_cntrTemp, 'retrieveBLContainerInfo', ['', param2, param3, param4]);
};

/**
 * @method 
 * @name f_ResetBondZone
 * @description 보세구역 데이터셋을 리셋
 * @param {string} bondZoneCd
 */
scwin.f_ResetBondZone = function (bondZoneCd) {
  if ($c.gus.cfIsNull($p, bondZoneCd)) return;
  if (!$c.gus.cfIsNull($p, ed_sendBondZoneCd.getValue())) return;
  scwin.f_ResetCommon(sbm_bondZone, 'retrieveBondZoneRound', [bondZoneCd]);

  //신고과 자동셋팅
  if (['03012312', '03012226', '03077016', '03012240', '03012343', '03086311', '03077083', '02010014', '02077010', '02010621', '02010043', '02019701', '02010010', '02010039', '02010028', '02070001', '02012007', '02077002', '03012010'].includes(bondZoneCd)) {
    ed_declarSecCd.setValue('D8');
  } else if (['02012016', '02012014'].includes(bondZoneCd)) {
    ed_declarSecCd.setValue('09');
  } else {
    ed_declarSecCd.setValue('D1');
  }
  ;
  scwin.f_sectionPopUp();
};

/**
 * @method 
 * @name f_ResetCustom
 * @description 신고 세관 데이터셋을 리셋
 * @param {string} code
 */
scwin.f_ResetCustom = function (code) {
  scwin.f_ResetCommon(sbm_custom, 'retrieveCustomInfo', [code]);
};

/**
 * @method 
 * @name f_ResetSection
 * @description 세관 신고과 데이터셋을 리셋
 */
scwin.f_ResetSection = function () {
  scwin.f_ResetCommon(sbm_section, 'retrieveCustomSectionInfo');
};

/**
 * @method 
 * @name f_ResetAlloccarPicId
 * @description
 */
scwin.f_ResetAlloccarPicId = function () {
  let codeObj = ed_alloccarPicId;
  let nameObj = ed_alloccarPicNm;
  udc_alloccarPicId.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
  }, codeObj.getValue(), nameObj.getValue(), 'T', null, null, null, null, '0', '450', null, null, null, null, 'T', null, null);
};

/**
 * @method 
 * @name f_CopyTempToArrive
 * @description B/L 도착지 임시 데이터셋의 데이터를 원본 데이터셋으로 복사
 * @param {object} dataSet
 */
scwin.f_CopyTempToArrive = async function (dataSet) {
  let sourceColumns = $c.gus.f_GetColumnNames($p, dataSet);
  let keyColumns = ['mrn', 'msn', 'hsn'];
  let targetColumns = ['mrn', 'msn', 'hsn', 'mblNo', 'hblNo', 'commNm', 'packUnitCd', 'packCnt', 'totWt'];
  let rowCnt = dataSet.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = dataSet.getRowJSON(i);
    let key = rowData['col1'] + rowData['col2'] + rowData['col3'];
    let existRow = scwin.f_NameValueRowEx(ds_arrive, key, keyColumns);
    if (existRow > -1 && rowCnt > 0) {
      // if (rowCnt > 0) continue; // 동작 달라 주석
      await $c.gus.cfAlertMsg($p, '이미 추가된 자료입니다.');
      dataSet.setRowPosition(existRow);
      return;
    }
    ;
    let insertIdx = ds_arrive.insertRow();
    for (let j = 0; j < targetColumns.length; j++) {
      ds_arrive.setCellData(insertIdx, targetColumns[j], dataSet.getCellData(i, sourceColumns[j + 2]));
    }
    ;
    ds_arrive.setRowPosition(insertIdx);
    await scwin.f_ResetContainer();
    scwin.f_ResetBondZone(rowData['col10']);
  }
  ;
};

/**
 * @method 
 * @name f_CopyTempToCntr
 * @description B/L 컨테이너 임시 데이터셋의 데이터를 원본 데이터셋으로 복사
 * @param {object} dataSet
 */
scwin.f_CopyTempToCntr = async function () {
  let focusedIdx = ds_arrive.getRowPosition();
  let fcsRowData = ds_arrive.getRowJSON(focusedIdx);
  let mblNo = fcsRowData['mblNo'];
  let hblNo = fcsRowData['hblNo'];
  const cntrCnt = ds_cntr.getRowCount();
  for (let i = cntrCnt - 1; i >= 0; i--) {
    ds_cntr.removeRow(i);
  }
  ;
  let colArray = ['cntrNo', 'mrn', 'msn', 'hsn', 'cntrSeq', 'sealNo1', 'packCnt', 'wt', 'cntrSizCd'];
  await scwin.f_CopyFromCommon(ds_cntrTemp, ds_cntr, colArray);
  let rowCnt = ds_cntr.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    ds_cntr.setCellData(i, 'mblNo', mblNo);
    ds_cntr.setCellData(i, 'hblNo', hblNo);
  }
  ;
};

/**
 * @method 
 * @name f_CopyFromCommon
 * @description 공통팝업 쿼리로부터 테이터를 읽어와서 데이터셋에 복사
 * @param {object} dataSet
 */
scwin.f_CopyFromCommon = async function (source, target, colArray) {
  try {
    let colArrayLength = colArray.length;
    if (source == null) throw '소스 데이터셋이 정의 되지 않았습니다.';
    if (target == null) throw '대상 데이터셋이 정의 되지 않았습니다.';
    if (colArray == null) throw '복사할 컬럼이 정의 되지 않았습니다.';
    if (colArrayLength > 9) throw '최대 복사 컬럼의 수를 초과하였습니다.';
    let rowCnt = source.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      let rowData = source.getRowJSON(i);
      let insertIdx = target.insertRow();
      for (let j = 0; j < colArrayLength; j++) {
        if (!$c.gus.cfIsNull($p, colArray[j])) {
          target.setCellData(insertIdx, colArray[j], rowData['col' + (j + 1)]);
        }
        ;
      }
      ;
    }
    ;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, e);
  }
  ;
};

/**
 * @method 
 * @name f_IsUpdateRow
 * @description 데이터셋의 Row가 업데이트 되었는 지 여부를 반환한다.
 * @param {object} dataSet
 * @param {number} row
 */
scwin.f_IsUpdateRow = function (dataSet, row) {
  return dataSet.getRowStatusValue(row) == 3;
};

/**
 * @method 
 * @name f_IsDeleteRow
 * @description 데이터셋의 Row가 삭제되었는 지 여부를 반환한다.
 * @param {object} dataSet
 * @param {number} row
 */
scwin.f_IsDeleteRow = function (dataSet, row) {
  return dataSet.getRowStatusValue(row) == 3;
};

/**
 * @method 
 * @name f_SetSendBondZone
 * @description 발송지를 설정한다.
 * @param {string} bondZoneCd
 * @param {string} bondZoneNm
 */
scwin.f_SetSendBondZone = function (bondZoneCd, bondZoneNm) {
  scwin.f_SetValueEx(ed_sendBondZoneCd, bondZoneCd);
  scwin.f_SetValueEx(ed_sendBondZoneNm, bondZoneNm);
  scwin.f_ResetCustom(bondZoneCd.slice(0, 3));
};

/**
 * @method 
 * @name f_SetValueEx
 * @description 확장.setValue(Object의 값과 Hidden Value를 설정한).
 * @param {object} inObj
 * @param {string} inVal
 */
scwin.f_SetValueEx = function (inObj, inVal) {
  inObj.setValue(inVal);
  $c.gus.cfSetHiddenValue($p, inObj, inVal);
};

/**
 * @method 
 * @name f_SetMasterObjHidVal
 * @description 승인정보의 Hidden Value를 설정한다.
 * @param {number} row
 */
scwin.f_SetMasterObjHidVal = function (row) {
  let colArray = ['declarCstmCd', 'declarCstmNm', 'declarSecCd', 'declarSecNm', 'sendBondZoneCd', 'sendBondZoneNm', 'viaBondZoneCd', 'viaBondZoneNm'];
  let objArray = [ed_declarCstmCd, ed_declarCstmNm, ed_declarSecCd, ed_declarSecNm, ed_sendBondZoneCd, ed_sendBondZoneNm, ed_viaBondZoneCd, ed_viaBondZoneNm];
  $c.gus.cfPrepareObjectHidVal($p, ds_master, row, colArray, objArray);
};

/**
 * @method 
 * @name f_OzReport
 * @description 발행
 * @param {string} param
 */
scwin.f_OzReport = async function (param) {
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  ;
  if ($c.gus.cfIsNull($p, ed_declarNo.getValue())) {
    await $c.gus.cfAlertMsg($p, '등록되지 않은 자료입니다.');
    return false;
  }
  ;
  let odiName = "";
  let odiParam = {},
    viewerParam = {},
    formParam = {};
  let row = ds_master.getRowPosition();
  let rowData = ds_master.getRowJSON(row);

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  odiParam.sysPath = 'dbl.ds.sd.odrmgnt.odrprewrk';
  odiParam.declarDt = rowData['declarDt'];
  odiParam.declarSeq = rowData['declarSeq'];

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  viewerParam.useprogressbar = false;
  viewerParam.ismultidocassub = false;
  viewerParam.smartframesize = true;

  // formParam.dispName0 = '';
  const dispNames = ['신청인용', '반입신고용', '보관용'];
  let reportName = [];
  if (param == '') {
    odiName = 'sd_401_05_01';
    reportName.push('/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_1.ozr');
    reportName.push('/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr');
    reportName.push('/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_3.ozr');
  } else {
    odiName = 'sd_401_05_04';
    reportName.push('/ds/sd/odrmgnt/odrprewrk/sd_401_05_04_1.ozr');
    reportName.push('/ds/sd/odrmgnt/odrprewrk/sd_401_05_04_2.ozr');
    reportName.push('/ds/sd/odrmgnt/odrprewrk/sd_401_05_04_3.ozr');
    let viaBondZoneCode = {
      code: acb_viaBondZoneCd.getValue(),
      label: acb_viaBondZoneCd.getText(true)
    };
    odiParam.viaBondZoneCd = '[' + viaBondZoneCode.code + '] ' + viaBondZoneCode.label;
    await $c.win.alert($p, 'B===>' + rowData['declarDt'] + ',' + rowData['declarSeq']);
  }
  ;
  formParam.odiName = odiName;
  let data = [];
  dispNames.forEach((dispName, index) => {
    data.push({
      displayName: dispName,
      reportName: reportName[index],
      odiName: odiName,
      odiParam: odiParam,
      formParam: formParam,
      viewerParam: viewerParam
    });
  });
  const options = {
    exportMode: '',
    // silent, view
    exportConfirmsave: 'false',
    printMode: '',
    // silent, view
    printCopies: 1,
    // printSize: 'A5',
    // exportFilename: 'DEBIS_SAMPLE_OZ_DOWNLOAD',
    // exportPath: 'C:\\OZExport',
    // exportFormat: 'pdf'
    viewerFocus_doc_index: data.length - 1,
    globalConcatpage: 'false'
  };
  const printVal = chb_printCheck.getValue();
  const previewVal = chb_previewCheck.getValue();
  if (printVal == 1 && previewVal == 0) {
    // await $c.ext.printOzReport(data, options);
    // asis 동작안함 
  } else {
    await $c.ext.openMultiOzReport($p, data, options);
  }
  ;
};

/**
 * @method 
 * @name gr_cntr_customFormat 
 * @description gr_cntr customFormatter
 */
scwin.gr_cntr_customFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  let decodeFnc = {
    'arvRepoYn': value => {
      switch (value) {
        case '1':
          return '완료';
        default:
          return '미완료';
      }
    }
  };
  switch (colID) {
    case 'arvRepoYn':
      return decodeFnc['arvRepoYn'](data);
  }
  ;
};

/**
 * @method 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

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

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitPre 
 * @description submit 요청전
 */
scwin.submitPre = function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_search:
      // 조회 전 총 건수 초기화
      totalCnt_arrive.setValue(0);
      totalCnt_arrive2.setValue(0);
      totalCnt_cntr.setValue(0);
      totalCnt_mainMain.setValue(0);
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_search:
      // 조회 TR 
      // for=tr_search event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      _searchProcess();
      break;
    case sbm_search1:
      // for=tr_search1 event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      break;
    case sbm_master:
      // CUD TR  
      // for=tr_master event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // for=ds_result event=OnLoadCompleted(rowCnt)
      scwin.ds_result_OnLoadCompleted(ds_result.getRowCount());
      await _masterProcess();
      break;
    case sbm_mbl:
      // for=ds_mbl event=OnLoadCompleted(rowCnt)
      scwin.ds_mbl_OnLoadCompleted(ds_mbl.getRowCount());
      break;
    case sbm_mrn:
      // for=ds_mrn event=OnLoadCompleted(rowCnt)
      scwin.ds_mrn_OnLoadCompleted(ds_mrn.getRowCount());
      break;
    case sbm_bondZone:
      // for=ds_bondZone event=OnLoadCompleted(rowCnt)
      scwin.ds_bondZone_OnLoadCompleted(ds_bondZone.getRowCount());
      break;
    case sbm_custom:
      // for=ds_custom event=OnLoadCompleted(rowCnt)
      scwin.ds_custom_OnLoadCompleted(ds_custom.getRowCount());
      break;
    case sbm_section:
      // for=ds_section event=OnLoadCompleted(rowCnt)
      scwin.ds_section_OnLoadCompleted(ds_section.getRowCount());
      break;
    case sbm_arvTemp:
      // for=ds_arvTemp event=OnLoadError()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // for=ds_arvTemp event=OnLoadCompleted(rowCnt)
      scwin.ds_arvTemp_OnLoadCompleted(ds_arvTemp.getRowCount());
      break;
    case sbm_cntrTemp:
      // for=ds_cntrTemp event=OnLoadCompleted(rowCnt)
      scwin.ds_cntrTemp_OnLoadCompleted(ds_cntrTemp.getRowCount());
      break;
    default:
      break;
  }
  function _searchProcess() {
    _initDltRowPosition([ds_master, ds_arrive, ds_cntr, ds_mainMain, ds_arrive2]);
    let rowCnt = ds_master.getRowCount();

    // for=tr_search event=OnSuccess()
    if (rowCnt > 0) scwin.f_SetEditMode(scwin.EDIT_MODE_RETRIEVE);else scwin.f_SetEditMode(scwin.EDIT_MODE_INIT);
    scwin.f_ComputeSummary();

    // for=ds_master event=OnLoadCompleted(rowCnt)
    scwin.ds_master_OnLoadCompleted(rowCnt);

    // for=ds_arrive event=OnLoadCompleted(rowCnt)
    rowCnt = ds_arrive.getRowCount();
    scwin.ds_arrive_OnLoadCompleted(rowCnt);

    // for=ds_mainMain event=OnLoadCompleted(rowCnt)
    rowCnt = ds_mainMain.getRowCount();
    scwin.ds_mainMain_OnLoadCompleted(rowCnt);
    totalCnt_arrive.setValue(ds_arrive.getRowCount());
    totalCnt_mainMain.setValue(ds_mainMain.getRowCount());
    totalCnt_arrive2.setValue(ds_arrive2.getRowCount());
    gr_mainMain.setFocusedCell(0, 0);
    gr_arrive2.setFocusedCell(0, 0);
  }
  ;
  async function _masterProcess() {
    //for=tr_master event=OnSuccess()
    if (scwin.check == 1) {
      await $c.win.alert($p, '성공적으로 삭제되었습니다.');
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    }
    ;
    ica_srchDeclarDt.setValue(ica_declarDt.getValue());
    ed_srchDeclarSeq.setValue(ed_declarSeq.getValue());
    ed_srchDeclarNo.setValue(ed_declarNo.getValue());
    ed_hblNo.setValue('');
    scwin.f_Retrieve();
  }
  ;
  function _initDltRowPosition(dltArray) {
    dltArray.forEach(dataList => {
      dataList.setRowPosition(0);
    });
  }
};

/**
 * @method 
 * @name ds_master_OnLoadCompleted 
 * @description
 */
scwin.ds_master_OnLoadCompleted = async function (rowCnt) {
  if (rowCnt != 0) return;
  if ($c.gus.cfCheckCreateFlag($p)) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ;
};

/**
 * @event 
 * @name ds_master_onrowpositionchange 
 * @description
 */
scwin.ds_master_onrowpositionchange = function (info) {
  if (info.newRowIndex < 0) return;
  scwin.f_SetMasterObjHidVal(info.newRowIndex);
};

/**
 * @method 
 * @name ds_arrive_OnLoadCompleted 
 * @description
 */
scwin.ds_arrive_OnLoadCompleted = function (rowCnt) {
  if (rowCnt > 0) gr_arrive.setFocusedCell(0, 0);
  gr_arrive.setColumnReadOnly('mrn', true);
};

/**
 * @method 
 * @name ds_arrive_OnLoadCompleted 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.ds_arrive_onremoverow = function (info) {
  totalCnt_arrive.setValue(ds_arrive.getRowCount());
};

/**
 * @method 
 * @name ds_arrive_OnLoadCompleted 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.ds_arrive_oninsertrow = function (info) {
  totalCnt_arrive.setValue(ds_arrive.getRowCount());
};

/**
 * @method 
 * @name ds_arrive_onrowpositionchange 
 * @description
 */
scwin.ds_arrive_onrowpositionchange = function (info) {
  if (info.newRowIndex < 0) return;
  $c.gus.cfPrepareHidVal($p, ds_arrive, info.newRowIndex, scwin.f_GetGridColumns(gr_arrive));

  // f_ComputeSummary > ds_cntr_OnFilter안으로 이동
  scwin.ds_cntr_OnFilter();
};

/**
 * @method 
 * @name ds_arrive_oncelldatachange 
 * @description 
 * [for=ds_arrive event=OnColumnChanged(row,colid)]
 * @param {string} info.oldValue
 * @param {string} info.newValue
 * @param {number} info.rowIndex
 * @param {number} info.colID
 */
scwin.ds_arrive_oncelldatachange = async function (info) {
  let colID = info.colID;
  let row = info.rowIndex;
  if (colID == 'afArvBondZoneNm') {
    let rowData = ds_arrive.getRowJSON(row);
    if (rowData['bfArvBondZoneCd'] == rowData['afArvBondZoneCd']) {
      await $c.gus.cfAlertMsg($p, '변경전 도착지와 변경후 도착지가 동일합니다.');
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name ds_cntr_oninsertrow 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.ds_cntr_oninsertrow = function (info) {
  totalCnt_cntr.setValue(ds_cntr.getRowCount());
};

/**
 * @method 
 * @name ds_cntr_oninsertrow 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.ds_cntr_onremoverow = function (info) {
  totalCnt_cntr.setValue(ds_cntr.getRowCount());
};

/**
 * @method 
 * @name ds_cntr_onrowpositionchange 
 * @description
 */
scwin.ds_cntr_onrowpositionchange = function (info) {
  if (info.newRowIndex < 0) return;
  $c.gus.cfPrepareHidVal($p, ds_cntr, info.newRowIndex, scwin.f_GetGridColumns(gr_cntr));
};

/**
 * @method 
 * @name ds_cntr_OnFilter 
 * @description (for=ds_cntr event=OnFilter(row))
 */
scwin.ds_cntr_OnFilter = function (row) {
  let masterRow = ds_arrive.getRowPosition();
  let masterData = ds_arrive.getRowJSON(masterRow);
  if ($c.gus.cfIsNull($p, masterData['mrn']) || $c.gus.cfIsNull($p, masterData['msn'])) {
    return false;
  }
  ;

  // 필터전 초기화
  ds_cntr.clearFilter();
  let colArray = ['mrn', 'msn', 'hsn'];
  for (let i = 0; i < colArray.length; i++) {
    let colID = colArray[i];
    ds_cntr.setColumnFilter({
      type: 'row',
      colIndex: colID,
      key: masterData[colID],
      condition: 'and',
      exactMatch: true
    });
  }
  ;

  // 행 갯수 표기
  totalCnt_cntr.setValue(ds_cntr.getRowCount());
  gr_cntr.setFocusedCell(0, gr_cntr.getColumnIndex('cntrNo'));
  scwin.f_ComputeSummary();
};

/**
 * @method 
 * @name ds_mainMain_OnLoadCompleted 
 * @description 정정 DataSet 
 */
scwin.ds_mainMain_OnLoadCompleted = function (rowCnt) {
  if (rowCnt < 0) return;
  let totalRow = ds_cntr.getRowCount();
  for (let i = 0; i < totalRow; i++) {
    scwin.f_SetMainMainRowEdit(ds_mainMain, i);
  }
  ;
};

/**
 * @method 
 * @name ds_mainMain_onrowpositionchange 
 * @description 정정 DataSet 행의 인덱스가 변경된 경우에 발생
 */
scwin.ds_mainMain_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  let rowData = ds_mainMain.getRowJSON(row);
  if (row < 0) return;
  let colArray = ['mainMainClsCd', 'mainMainRsnCd', 'bfDeclarPrd', 'afDeclarPrd', 'mainMainDeclarDt', 'rofPicCd', 'etcRsnNm'];
  $c.gus.cfPrepareHidVal($p, ds_mainMain, row, colArray);
  let editBool = false;
  if (scwin.f_IsMainMainMode() || scwin.f_ExistMainMain()) {
    editBool = scwin.f_GetMaxSeq() == rowData['mainMainSeq'];
  }
  ;
  scwin.f_ToggleMainMainEdit(editBool);
  scwin.ds_arrive2_OnFilter();
};

/**
 * @method 
 * @name ds_mainMain_oncelldatachange 
 * @description 하나의 셀에 대한 값이 변경된 경우 발생
 * [for=ds_mainMain	event=OnColumnChanged(row,colid)]
 * @param {string} info.oldValue
 * @param {string} info.newValue
 * @param {number} info.rowIndex
 * @param {number} info.colID
 */
scwin.ds_mainMain_oncelldatachange = function (info) {
  let colID = info.colID;
  let row = info.rowIndex;
  if (['mainMainClsCd', 'mainMainRsnCd'].includes(colID)) {
    scwin.f_SetMainMainRowEdit(ds_mainMain, row);
    let rowData = ds_mainMain.getRowJSON(row);

    // 정정구분 변경시 정정정보를 재설정
    let newMainMainCls = rowData['mainMainClsCd'];
    let oldMainMainCls = rowData['mainMainClsCd'];
    if (colID == 'mainMainClsCd') newMainMainCls = info.newValue;
    let rowCnt = ds_arrive2.getRowCount();
    if (newMainMainCls == oldMainMainCls) {
      ds_mainMain.setCellData(row, 'bfDeclarPrd', rowData['bfDeclarPrd']);
      ds_mainMain.setCellData(row, 'afDeclarPrd', rowData['afDeclarPrd']);
      for (let i = 0; i < rowCnt; i++) {
        ds_arrive2.setCellData(i, 'ediTrgtYn', rowData['ediTrgtYn']);
      }
      ;
    } else {
      ds_mainMain.setCellData(row, 'bfDeclarPrd', '');
      ds_mainMain.setCellData(row, 'afDeclarPrd', '');
      for (let i = 0; i < rowCnt; i++) {
        ds_arrive2.setCellData(i, 'ediTrgtYn', scwin.DGlobalValue.FALSE);
      }
      ;
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name ds_arrive2_onrowpositionchange 
 * @description 정정 도착지 DataSet 행의 인덱스가 변경된 경우에 발생
 * [for=ds_arrive2 event=OnRowPosChanged(row)]
 * @param {number} info.oldRowIndex
 * @param {number} info.newRowIndex
 */
scwin.ds_arrive2_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (row < 0) return;
  let colArray = ['afArvBondZoneCd', 'afArvBondZoneNm'];
  $c.gus.cfPrepareHidVal($p, ds_arrive2, row, colArray);

  //신고 시의 도착지의 Row를 동기화
  let colArray2 = ['mrn', 'msn', 'hsn'];
  let key = scwin.f_NameStringEx(ds_arrive2, row, colArray2);
  let orgRow = scwin.f_NameValueRowEx(ds_arrive, key, colArray2);
  if (orgRow > -1) ds_arrive.setRowPosition(orgRow);
};

/**
 * @method 
 * @name ds_arrive2_OnFilter 
 * @description 정정 도착지 DataSet Filter
 * @param {number} info.oldRowIndex
 * @param {number} info.newRowIndex
 * @asis for=ds_arrive2 event=OnFilter(row)
 */
scwin.ds_arrive2_OnFilter = function (row) {
  let colArray = ['declarDt', 'declarSeq', 'mainMainSeq'];
  let masterIdx = ds_mainMain.getRowPosition();
  let masterData = ds_mainMain.getRowJSON(masterIdx);
  for (let i = 0; i < colArray.length; i++) {
    let colID = colArray[i];

    // 필터전 초기화
    ds_arrive2.clearFilter();
    ds_arrive2.setColumnFilter({
      type: 'row',
      colIndex: colID,
      key: masterData[colID],
      condition: 'and',
      exactMatch: true
    });
  }
  ;
  totalCnt_arrive2.setValue(ds_arrive2.getRowCount());
  gr_arrive2.setFocusedCell(0, 0);
};

/**
 * @method 
 * @name ds_mbl_OnLoadCompleted 
 * @description Master B/L DataSet
 * [for=ds_mbl event=OnLoadCompleted(rowCnt)]
 */
scwin.ds_mbl_OnLoadCompleted = async function (rowCnt) {
  ds_mbl.setRowPosition(0);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, 'Master B/L 정보가 없습니다.');
    return;
  }
  ;
  if (rowCnt > 1) {
    await $c.gus.cfAlertMsg($p, 'Master B/L 정보가 1건 이상입니다.\n\n' + '정확하게 일치하는 Master B/L 번호를 입력해 주십시요.');
    return;
  }
  ;
  scwin.f_ResetArriveByMBL(ds_mbl.getCellData(ds_mbl.getRowPosition(), 'col1'));
};

/**
 * @method 
 * @name ds_mrn_OnLoadCompleted 
 * @description 적하목록 DataSet
 * [for=ds_mrn event=OnLoadCompleted(rowCnt)]
 */
scwin.ds_mrn_OnLoadCompleted = async function (rowCnt) {
  let mrnVal = ed_srchMrn.getValue();
  let msnVal = ed_srchMsn.getValue();
  let hsnVal = ed_srchHsn.getValue();
  if (rowCnt == 0) {
    scwin.f_mrnPopUp();
  } else if (rowCnt == 1) {
    scwin.f_ResetArriveByMrn(mrnVal, msnVal, hsnVal);
  } else if (rowCnt > 1) {
    await $c.gus.cfAlertMsg($p, 'Master B/L 정보가 1건 이상입니다.\n\n' + '정확하게 일치하는 Master B/L 번호를 입력해 주십시요.');
    scwin.f_ResetArriveByMrn(mrnVal, msnVal, hsnVal);
  }
  ;
};

/**
 * @method 
 * @name ds_bondZone_OnLoadCompleted 
 * @description 보세구역 DataSet
 * [for=ds_bondZone event=OnLoadCompleted(rowCnt)]
 */
scwin.ds_bondZone_OnLoadCompleted = function (rowCnt) {
  if (rowCnt > 0) {
    let rowData = ds_bondZone.getRowJSON(0);
    let bondZoneCd = rowData['col1'];
    let bondZoneNm = rowData['col2'];
    scwin.f_SetSendBondZone(bondZoneCd, bondZoneNm);
  }
  ;
};

/**
 * @method 
 * @name ds_custom_OnLoadCompleted 
 * @description 신고세관 DataSet
 * [for=ds_custom event=OnLoadCompleted(rowCnt)]
 */
scwin.ds_custom_OnLoadCompleted = function (rowCnt) {
  if (rowCnt > 0) {
    let rowData = ds_custom.getRowJSON(0);
    scwin.f_SetValueEx(ed_declarCstmCd, rowData['col1']);
    scwin.f_SetValueEx(ed_declarCstmNm, rowData['col2']);
  }
  ;
};

/**
 * @method 
 * @name ds_section_OnLoadCompleted 
 * @description 신고세관 DataSet
 * [for=ds_section event=OnLoadCompleted(rowCnt)]
 */
scwin.ds_section_OnLoadCompleted = function (rowCnt) {
  if (rowCnt > 0) {
    let rowData = ds_section.getRowJSON(0);
    scwin.f_SetValueEx(ed_declarSecCd, rowData['col1']);
    scwin.f_SetValueEx(ed_declarSecNm, rowData['col2']);
  }
  ;
};

/**
 * @method 
 * @name ds_arvTemp_OnLoadCompleted 
 * @description B/L 컨테이너 임시 DataSet
 * @asis for=ds_arvTemp event=OnLoadCompleted(rowCnt)
 */
scwin.ds_arvTemp_OnLoadCompleted = async function (rowCnt) {
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, '화물정보가 없습니다.');
  } else {
    scwin.f_CopyTempToArrive(ds_arvTemp);
  }
  ;
};

/**
 * @method 
 * @name ds_cntrTemp_OnLoadCompleted 
 * @description B/L 컨테이너 임시 DataSet
 * @asis for=ds_cntrTemp event=OnLoadCompleted(rowCnt)
 */
scwin.ds_cntrTemp_OnLoadCompleted = async function (rowCnt) {
  switch (rowCnt) {
    case 0: //await $c.gus.cfAlertMsg('컨테이너 내역이 없습니다.'); break;
    default:
      await scwin.f_CopyTempToCntr();
      break;
  }
  ;
  scwin.f_ComputeSummary();
};

/**
 * @method 
 * @name ds_cntrTemp_OnLoadCompleted 
 * @description 저장결과 DataSet
 * [for=ds_result event=OnLoadCompleted(rowCnt)]
 */
scwin.ds_result_OnLoadCompleted = function (rowCnt) {
  if (rowCnt < 1) return;
  ds_result.setRowPosition(0);
  let masterIdx = ds_master.getRowPosition();
  let resultIdx = ds_result.getRowPosition();
  let resultData = ds_result.getRowJSON(resultIdx);
  ds_master.setCellData(masterIdx, 'declarDt', resultData['declarDt']);
  ds_master.setCellData(masterIdx, 'declarSeq', resultData['declarSeq']);
  ds_master.setCellData(masterIdx, 'declarNo', resultData['declarNo']);
  ds_master.setCellData(masterIdx, 'regId', resultData['regId']);
  ds_master.setCellData(masterIdx, 'regNm', resultData['regNm']);
  resultData = ds_result.getRowJSON(0);
  ed_declarNo.setValue(resultData['declarNo']);
  ed_regId.setValue(resultData['regId']);
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_arrive_ontextimageclick 
 * @description B/L도착지 Grid inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 */
scwin.gr_arrive_ontextimageclick = function (rowIndex, columnIndex) {
  let colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'arvBondZoneNm':
      scwin.f_bondZoneGridPopUp(ds_arrive, 'F', 'F', colID, ['arvBondZoneCd', 'arvBondZoneNm']);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_arrive_onafteredit 
 * @description B/L도착지 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생
 */
scwin.gr_arrive_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = this.getColumnID(columnIndex);
  switch (colid) {
    case 'arvBondZoneNm':
      scwin.f_bondZoneGridPopUp(ds_arrive, 'T', 'F', colid, ['arvBondZoneCd', 'arvBondZoneNm']);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_cntr_oneditend 
 * @description B/L 컨테이너 Grid 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 */
scwin.gr_cntr_oneditend = function (rowIndex, columnIndex, value) {
  let colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'cntrNo':
      scwin.f_ComputeSummary();
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_arrive2_ontextimageclick 
 * @description 정정 도착지 Grid inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 */
scwin.gr_arrive2_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = this.getColumnID(columnIndex);
  switch (colId) {
    case 'bfArvBondZoneNm':
      scwin.f_bondZoneGridPopUp(ds_arrive2, 'F', 'F', colId, ['bfArvBondZoneCd', 'bfArvBondZoneNm']);
      break;
    case 'afArvBondZoneNm':
      scwin.f_bondZoneGridPopUp(ds_arrive2, 'F', 'F', colId, ['afArvBondZoneCd', 'afArvBondZoneNm']);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_arrive2_oneditend 
 * @description 정정 도착지 Grid 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 */
scwin.gr_arrive2_oneditend = function (rowIndex, columnIndex, value) {
  let colId = this.getColumnID(columnIndex);
  switch (colId) {
    case 'bfArvBondZoneNm':
      scwin.f_bondZoneGridPopUp(ds_arrive2, 'T', 'F', colId, ['bfArvBondZoneCd', 'bfArvBondZoneNm']);
      break;
    case 'afArvBondZoneNm':
      scwin.f_bondZoneGridPopUp(ds_arrive2, 'T', 'F', colId, ['afArvBondZoneCd', 'afArvBondZoneNm']);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name btn_init_onclick 
 * @description 조회 조건 초기화
 */
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_search_onclick 
 * @description 조회 버튼 클릭
 */
scwin.btn_search_onclick = function (e) {
  scwin.f_PreRetrieve();
};

/**
 * @event 
 * @name ica_declarDt_onchange 
 * @description component의 value가 변경되었을 때 발생하는 이벤트로 focus out 시점에 발생한다.
 */
scwin.ica_declarDt_onchange = function () {
  scwin.f_SetTransPrd();
};

/**
 * @event 
 * @name chk_returnYn_onchange 
 * @description 사용자가 반송 항목을 선택/변경하거나 API를 이용하여 value를 설정할 경우 발생. 
 */
scwin.chk_returnYn_onchange = function (info) {
  scwin.f_SetTransPrd();
};

/**
 * @event 
 * @name chk_bulkYn_onchange 
 * @description 사용자가 벌크 항목을 선택/변경하거나 API를 이용하여 value를 설정할 경우 발생. 
 */
scwin.chk_bulkYn_onchange = function (info) {
  scwin.f_SetTransPrd();
};

/**
 * @event 
 * @name udc_sendBondZoneCd_onblurCodeEvent 
 * @description 발생지 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_sendBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_bondZonePopUp('1');
};

/**
 * @event 
 * @name udc_sendBondZoneCd_onblurNameEvent 
 * @description 발생지 name 포커스를 잃었을 때 발생한다.
 */
scwin.udc_sendBondZoneCd_onviewchangeNameEvent = function (info) {
  scwin.f_bondZonePopUp('1', 'T', true);
};

/**
 * @event 
 * @name udc_sendBondZoneCd_onclickEvent 
 * @description 발생지 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_sendBondZoneCd_onclickEvent = function (e) {
  scwin.f_bondZonePopUp('1', 'F');
};

/**
 * @event 
 * @name udc_viaBondZoneCd_onblurCodeEvent 
 * @description 경유지 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_viaBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_bondZonePopUp('2');
};

/**
 * @event 
 * @name udc_viaBondZoneCd_onviewchangeNameEvent 
 * @description 경유지 name 컴포넌트의 value가 변경되었을 때 발생한다
 */
scwin.udc_viaBondZoneCd_onviewchangeNameEvent = function (info) {
  scwin.f_bondZonePopUp('2');
};

/**
 * @event 
 * @name udc_viaBondZoneCd_onclickEvent 
 * @description 경유지 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_viaBondZoneCd_onclickEvent = function (e) {
  scwin.f_bondZonePopUp('2', 'F');
};

/**
 * @event 
 * @name udc_declarCstmCd_onblurCodeEvent 
 * @description 신고세관 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_declarCstmCd_onblurCodeEvent = function (e) {
  scwin.f_customPopUp();
};

/**
 * @event 
 * @name udc_declarCstmCd_onviewchangeNameEvent 
 * @description 신고세관 name 컴포넌트의 value가 변경되었을 때 발생한다
 */
scwin.udc_declarCstmCd_onviewchangeNameEvent = function (info) {
  scwin.f_customPopUp('T', true);
};

/**
 * @event 
 * @name udc_declarCstmCd_onclickEvent 
 * @description 신고세관 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_declarCstmCd_onclickEvent = function (e) {
  scwin.f_customPopUp('F');
};

/**
 * @event 
 * @name udc_declarSecCd_onblurCodeEvent 
 * @description 신고과 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_declarSecCd_onblurCodeEvent = function (e) {
  scwin.f_sectionPopUp();
};

/**
 * @event 
 * @name udc_declarSecCd_onviewchangeNameEvent 
 * @description 신고과 name 컴포넌트의 value가 변경되었을 때 발생한다
 */
scwin.udc_declarSecCd_onviewchangeNameEvent = function (info) {
  scwin.f_sectionPopUp('T', true);
};

/**
 * @event 
 * @name udc_declarSecCd_onclickEvent 
 * @description 신고과 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_declarSecCd_onclickEvent = function (e) {
  scwin.f_sectionPopUp('F');
};

/**
 * @event 
 * @name udc_arvBondZoneCd_onblurCodeEvent 
 * @description 일괄적용도착지 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_arvBondZoneCd_onblurCodeEvent = function (e) {
  scwin.f_bondZonePopUp('3');
};

/**
 * @event 
 * @name udc_arvBondZoneCd_onviewchangeNameEvent 
 * @description 일괄적용도착지 name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_arvBondZoneCd_onviewchangeNameEvent = function (info) {
  scwin.f_bondZonePopUp('3');
};

/**
 * @event 
 * @name udc_arvBondZoneCd_onclickEvent 
 * @description 일괄적용도착지 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_arvBondZoneCd_onclickEvent = function (e) {
  scwin.f_bondZonePopUp('3', 'F');
};

/**
 * @event 
 * @name btn_arvBondZoneCd_onclick 
 * @description 일괄적용도착지 적용 버튼 클릭 시 발생한다.
 */
scwin.btn_arvBondZoneCd_onclick = function (e) {
  scwin.f_SetArvBondZoneAll();
};

/**
 * @event 
 * @name udc_clntNo_onblurCodeEvent 
 * @description 일괄적용도착지 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_clntNoPopUp();
};

/**
 * @event 
 * @name udc_clntNo_onviewchangeCodeEvent 
 * @description 일괄적용도착지 name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_clntNoPopUp('T', true);
};

/**
 * @event 
 * @name udc_clntNo_onclickEvent 
 * @description 일괄적용도착지 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_clntNoPopUp('F');
};

/**
 * @event 
 * @name udc_alloccarPicId_onblurCodeEvent 
 * @description 배차담당자 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_ResetAlloccarPicId();
};

/**
 * @event 
 * @name udc_alloccarPicId_onclickEvent 
 * @description 배차담당자 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_ResetAlloccarPicId();
};

/**
 * @event 
 * @name btn_srchMblNo_onclick 
 * @description MB/L 검색 버튼 클릭 시 발생한다.
 */
scwin.btn_srchMblNo_onclick = function (e) {
  scwin.f_addArriveByMblNo();
};

/**
 * @event 
 * @name btn_srchMblNo_onclick 
 * @description HB/L 검색 버튼 클릭 시 발생한다.
 */
scwin.btn_srchHblNo_onclick = function (e) {
  scwin.f_hblPopUp();
};

/**
 * @event 
 * @name btn_srchMrn_onclick 
 * @description HSN 검색 버튼 클릭 시 발생한다.
 */
scwin.btn_srchMrn_onclick = function (e) {
  scwin.f_ResetMrn();
};

/**
 * @event 
 * @name btn_srchArrive_onclick 
 * @description 화물 정보 초기화
 */
scwin.btn_srchArrive_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_srchArrive, null);
};

/**
 * @event 
 * @name btn_printM_onclick 
 * @description 집단화지역 버튼 클릭
 */
scwin.btn_printM_onclick = function (e) {
  scwin.f_OzReport('M');
};

/**
 * @event 
 * @name btn_print_onclick 
 * @description 발행 버튼 클릭
 */
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport('');
};

/**
 * @event 
 * @name btn_send_onclick 
 * @description 전송 버튼 클릭
 */
scwin.btn_send_onclick = function (e) {
  scwin.f_SendImmediate();
};

/**
 * @event 
 * @name btn_new_onclick 
 * @description 신규 버튼 클릭
 */
scwin.btn_new_onclick = function (e) {
  scwin.f_New();
};

/**
 * @event 
 * @name btn_update_onclick 
 * @description 수정 버튼 클릭
 */
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};

/**
 * @event 
 * @name btn_save_onclick 
 * @description 수정 버튼 클릭
 */
scwin.btn_save_onclick = function (e) {
  scwin.f_SendBatch(1);
};

/**
 * @event 
 * @name btn_delete_onclick 
 * @description 삭제 버튼 클릭
 */
scwin.btn_delete_onclick = function (e) {
  scwin.f_SendBatch(2);
};

/**
 * @event 
 * @name btn_addMainMain_onclick 
 * @description 정정추가 버튼 클릭
 */
scwin.btn_addMainMain_onclick = function (e) {
  scwin.f_AddMainMain();
};

/**
 * @event 
 * @name btn_addMainMain_onclick 
 * @description 정정삭제 버튼 클릭
 */
scwin.btn_delMainMain_onclick = function (e) {
  scwin.f_DelMainMain();
};

/**
 * @event 
 * @name btn_delArrive2_onclick 
 * @description 도착지삭제 버튼 클릭
 */
scwin.btn_delArrive2_onclick = function (e) {
  scwin.f_DelMainMainArv();
};

/**
 * @event 
 * @name ed_srchMblNo_onclick 
 * @description MB/L 검색 버튼 클릭
 */
scwin.ed_srchMblNo_onclick = function (e) {
  scwin.f_addArriveByMblNo();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table',adaptive:'layout',adaptiveThreshold:'768'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_srchDeclarDt',style:'',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:dma_search.declarDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고순번 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srchDeclarSeq',placeholder:'',style:'width:50px;',maxlength:'13',allowChar:'0-9',objType:'data',ref:'data:dma_search.declarSeq'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_srchDeclarNo',placeholder:'',style:'width:160px;',maxlength:'24',objType:'data',editFormat:'XXXXX-######-#-########',ref:'data:dma_search.declarNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'M B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblNo',placeholder:'',style:'width:150px;',maxlength:'20',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:dma_search.mblNo','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'H B/L',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hblNo',placeholder:'',style:'width:150px;',maxlength:'20',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:dma_search.hblNo','ev:onkeyup':'scwin.upperFlag'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'보세운송 신고정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_master',style:'',tagname:'table',adaptive:'layout',adaptiveThreshold:'768'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세관신고번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_declarNo',placeholder:'',style:'width:250px;',editFormat:'XXXXX-######-#-########',ref:'data:ds_master.declarNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_declarDt',class:'',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',objType:'data','ev:onchange':'scwin.ica_declarDt_onchange',ref:'data:ds_master.declarDt'}},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'순번',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_declarSeq',placeholder:'',class:'w50',maxlength:'3',allowChar:'0-9',editFormat:'###',ref:'data:ds_master.declarSeq'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운송기한',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_transPrd',class:'',calendarValueType:'yearMonthDate',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_master.transPrd'}},{T:1,N:'xf:select',A:{ref:'data:ds_master.returnYn',appearance:'full',style:'',id:'chk_returnYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'data',falseValue:'0','ev:onchange':'scwin.chk_returnYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_bulkYn',objType:'data',ref:'data:ds_master.bulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0','ev:onchange':'scwin.chk_bulkYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운송수단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width: 250px;'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_transCntShtCd1',style:'',submenuSize:'auto',search:'start',mandatory:'true',disableEdit:'true',displayMode:'value delim label',ref:'data:ds_master.transCntShtCd1',title:'운송수단',emptyItem:'true',emptyIndex:'0',emptyValue:'선택안함',allOption:'',chooseOption:'true',chooseOptionLabel:'선택안함'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{disableEdit:'true',editType:'select',id:'acb_transCntShtCd2',mandatory:'false',search:'start',style:'',submenuSize:'auto',displayMode:'value delim label',ref:'data:ds_master.transCntShtCd2',allOption:'',chooseOption:'true',chooseOptionLabel:'선택안함'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발송지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_sendBondZoneCd',nameId:'ed_sendBondZoneNm',id:'udc_sendBondZoneCd',objTypeName:'data',objTypeCode:'data',btnId:'btn_sendBondZoneCd',maxlengthCode:'10',mandatoryCode:'true',maxlengthName:'30','ev:onblurCodeEvent':'scwin.udc_sendBondZoneCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_sendBondZoneCd_onclickEvent',validTitle:'발송지',hidVal:'',selectID:'retrieveBondZoneRound',refDataCollection:'ds_master',code:'sendBondZoneCd',name:'sendBondZoneNm',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_sendBondZoneCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'경유지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_viaBondZoneCd',nameId:'ed_viaBondZoneNm',maxlengthName:'30',objTypeName:'data',objTypeCode:'data',maxlengthCode:'10',id:'udc_viaBondZoneCd','ev:onblurCodeEvent':'scwin.udc_viaBondZoneCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_viaBondZoneCd_onclickEvent',validTitle:'경유지','ev:onviewchangeNameEvent':'scwin.udc_viaBondZoneCd_onviewchangeNameEvent',hidVal:'',selectID:'retrieveBondZoneRound',refDataCollection:'ds_master',code:'viaBondZoneCd',name:'viaBondZoneNm',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고세관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_declarCstmCd',nameId:'ed_declarCstmNm',btnId:'btn_declarCstmCd',id:'udc_declarCstmCd',mandatoryCode:'true',mandatoryName:'true',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',maxlengthCode:'3',maxlengthName:'30',validTitle:'신고세관','ev:onblurCodeEvent':'scwin.udc_declarCstmCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_declarCstmCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_declarCstmCd_onviewchangeNameEvent',hidVal:'',selectID:'retrieveCustomInfo',refDataCollection:'ds_master',code:'declarCstmCd',name:'declarCstmNm',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_declarSecCd',nameId:'ed_declarSecNm',id:'udc_declarSecCd',objTypeName:'data',objTypeCode:'data',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'2',maxlengthName:'30',UpperFlagCode:'1',btnId:'btn_declarSecCd','ev:onblurCodeEvent':'scwin.udc_declarSecCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_declarSecCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_declarSecCd_onclickEvent',hidVal:'',selectID:'retrieveCustomSectionInfo',refDataCollection:'ds_master',code:'declarSecCd',name:'declarSecNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'물품특성',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{disableEdit:'true',editType:'select',id:'acb_frgtCharCd',mandatory:'false',search:'start',style:'width: 250px;',submenuSize:'auto',displayMode:'value delim label',ref:'data:ds_master.frgtCharCd',allOption:'',chooseOption:'true',chooseOptionLabel:'선택안함'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하선물품특성',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{disableEdit:'true',editType:'select',id:'acb_dsmbrkFrgtClsCd',mandatory:'false',search:'start',style:'width: 250px;',submenuSize:'auto',displayMode:'value delim label',ref:'data:ds_master.dsmbrkFrgtClsCd',allOption:'',chooseOption:'true',chooseOptionLabel:'선택안함'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_admitDt',style:'',displayFormat:'yyyy/MM/dd',objType:'key',ref:'data:ds_master.admitDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group ',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_regId',placeholder:'',class:'',objType:'key',maxlength:'30',ref:'data:ds_master.regId'}},{T:1,N:'xf:input',A:{style:'',id:'ed_regNm',placeholder:'',class:'',maxlength:'30',objType:'key',ref:'data:ds_master.regNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'위험물여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dangerYn',style:'width:85px;',submenuSize:'auto',mandatory:'true',ref:'data:ds_master.dangerYn',title:'위험물여부',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유해화학여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_casYn',style:'width:85px;',submenuSize:'auto',ref:'data:ds_master.casYn',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송차량유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transTyp',style:'width:170px;',submenuSize:'auto',ref:'data:ds_master.transTyp',displayMode:'value delim label',chooseOptionLabel:'해당없음'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직영차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'위수탁계약(지입)차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력업체(알선차량)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_procClsCd',style:'width:250px;',submenuSize:'auto',objType:'key',displayMode:'label',emptyItem:'true',ref:'data:ds_master.procClsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세관기재사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cstmStateItm',placeholder:'',style:'width: 250px;',objType:'data',maxByteLength:'50',ref:'data:ds_master.cstmStateItm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일괄적용도착지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_arvBondZoneCd',nameId:'ed_arvBondZoneNm',id:'udc_arvBondZoneCd',btnId:'btn_arvBondZoneCd1',maxlengthCode:'8',allowCharCode:'0-9',objTypeName:'data',objTypeCode:'data',maxlengthName:'30','ev:onblurCodeEvent':'scwin.udc_arvBondZoneCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arvBondZoneCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_arvBondZoneCd_onviewchangeNameEvent',selectID:'retrieveBondZoneRound',refDataCollection:'ds_master',code:'arvBondZoneCd',name:'arvBondZoneNm'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_arvBondZoneCd',title:'엑셀 UP',type:'button',class:'btn','ev:onclick':'scwin.btn_arvBondZoneCd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mchtNm',placeholder:'',style:'width:250px;',maxlength:'50',objType:'data',ref:'data:ds_master.mchtNm',mandatory:'true',title:'성명'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주상호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_clntNo',maxlengthCode:'6',allowCharCode:'0-9',nameId:'ed_mchtNmCmpy',id:'udc_clntNo',maxlengthName:'30',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',selectID:'retrieveClntCrnList',btnId:'btn_clntNo',refDataCollection:'ds_master',code:'clntNo',name:'mchtNmCmpy',validTitle:'화주상호',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',objTypeCode:'data',objTypeName:'data',codeId:'ed_alloccarPicId',nameId:'ed_alloccarPicNm',id:'udc_alloccarPicId',maxlengthCode:'6',maxlengthName:'30','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent',selectID:'retrieveUserEmpInfo',refDataCollection:'ds_master',code:'alloccarPicId',name:'alloccarPicNm',allowCharCode:'0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix',id:'grd_section1'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'화물 정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'tbl_srchArrive'},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MB/L',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'',id:'ed_srchMblNo',placeholder:'',style:'width:140px;',objType:'data',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:ds_master.srchMblNo','ev:onkeyup':'scwin.upperFlag'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_srchMblNo',style:'',type:'button','ev:onclick':'scwin.btn_srchMblNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HB/L',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'',id:'ed_srchHblNo',placeholder:'',style:'width:140px;',objType:'data',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:ds_master.srchHblNo','ev:onkeyup':'scwin.upperFlag'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_srchHblNo',style:'',type:'button','ev:onclick':'scwin.btn_srchHblNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'',id:'ed_srchMrn',placeholder:'',style:'width:100px;',objType:'data',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:ds_master.srchMrn','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN ',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'',id:'ed_srchMsn',placeholder:'',style:'width:50px;',objType:'data',allowChar:'0-9',maxlength:'4',ref:'data:ds_master.srchMsn'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HSN ',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'',id:'ed_srchHsn',placeholder:'',style:'width: 50px;',objType:'data',allowChar:'0-9',maxlength:'4',ref:'data:ds_master.srchHsn'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_srchMrn',style:'',type:'button','ev:onclick':'scwin.btn_srchMrn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn refresh ico',id:'btn_srchArrive',style:'',type:'button','ev:onclick':'scwin.btn_srchArrive_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_arrive',id:'gr_arrive',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',gridName:'화물목록','ev:ontextimageclick':'scwin.gr_arrive_ontextimageclick',syncRowPositionOption:'style','ev:onafteredit':'scwin.gr_arrive_onafteredit',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'200',value:'M B/L'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'200',value:'H B/L'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'110',value:'MRN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'70',value:'MSN'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'HSN',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'도착지코드',width:'100',class:'col-type1',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'도착지',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'타장허가번호',width:'120',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'포장단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'포장개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'총중량',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mblNo',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left',readOnly:'true',maxLength:'16'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hblNo',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left',readOnly:'true',maxLength:'16'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'110',textAlign:'left',readOnly:'true',maxLength:'11',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'msn',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true',textAlign:'center',maxLength:'4',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hsn',inputType:'text',width:'70',readOnly:'true',textAlign:'center',maxLength:'4',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvBondZoneCd',inputType:'text',width:'100',textAlign:'center',maxLength:'10',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvBondZoneNm',inputType:'textImage',width:'120',textAlign:'left',maxLength:'11',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ucomWrkPlApprNo',inputType:'text',width:'120',textAlign:'center',maxLength:'16',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'packUnitCd',displayMode:'label',readOnly:'true',textAlign:'center',selectedData:'false',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'packCnt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'totWt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalCnt_arrive',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowDelFunction:'f_Delete',cancelFunction:'f_Cancel',rowDelUserAuth:'D',cancelObjType:'ctrlBtn',btnCancelObj:'btn_deleteRow',btnRowDelObj:'btn_cancelRow',btnRowAddObj:'btn_addRow',btnCancelYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',btnRowAddYn:'N',EngYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 30%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너 정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_cntr',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntr',id:'gr_cntr',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',gridName:'컨테이너목록','ev:oneditend':'scwin.gr_cntr_oneditend',rowStatusVisible:'true',autoFit:'lastColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'120',value:'MRN',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'70',value:'MSN',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'70',value:'HSN',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'140',value:'M B/L',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'H B/L',width:'140',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'순번',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'컨테이너',width:'100',class:'col-type1',hidden:'false',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'중량',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'포장개수',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'컨테이너크기',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'검사통보',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'봉인번호',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'도착보고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'msn',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hsn',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mblNo',inputType:'text',removeBorderStyle:'false',width:'140',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblNo',inputType:'text',width:'140',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100',mandatory:'true',textAlign:'center',readOnly:'false',maxLength:'11',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'100',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packCnt',inputType:'text',width:'100',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrSizCd',displayMode:'label',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inspMthd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sealNo1',displayMode:'label',textAlign:'center',readOnly:'false',maxLength:'6',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvRepoYn',displayMode:'label',textAlign:'left',readOnly:'true',customFormatter:'scwin.gr_cntr_customFormat'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalCnt_cntr',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너 집계',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_summary',style:'',tagname:'table',adaptive:'layout',adaptiveThreshold:'768'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20 Feet',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_20FeetCnt',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40 Feet',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_40FeetCnt',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'45 Feet',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_45FeetCnt',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너 개수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cntrCnt',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장개수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_packCntSum',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_wtSum',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###.###',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20 Feet 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_20FeetCntTot',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40 Feet 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_40FeetCntTot',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'45 Feet 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_45FeetCntTot',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cntrCntTot',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장개수 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_packCntSumTot',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총중량 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_wtSumTot',placeholder:'0',style:'',maxlength:'13',displayFormat:'#,###.###',dataType:'number'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:group',A:{id:'authTd',class:'left'},E:[{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_printM_onclick',style:'',id:'btn_printM',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'집단화지역'}]}]},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',search:'start',ref:'',chooseOption:'',editType:'select',style:'width: 100px;',id:'acb_viaBondZoneCd',allOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'한진 CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13111027'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현대 CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13111001'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KCTC CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13111041'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대한통운 CFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13111058'}]}]}]}]}]},{T:1,N:'xf:select',A:{falseValue:'0',ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{falseValue:'0',ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_send',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_send_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',label:'저장',style:'',type:'button',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.btn_new_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',label:'저장',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'저장',style:'',type:'button',userAuth:'U',objType:'bDelete','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix',id:'grd_section2',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'신고 정정 내역',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_mainMain',id:'gr_mainMain',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',gridName:'보세운송정정목록',setCellInputTypeCustom:'true',syncRowPositionOption:'style',rowStatusVisible:'true',dataName:'보세운송정정목록',validExp:'mainMainClsCd:정정구분:yes,mainMainRsnCd:정정사유:yes:maxByteLength=50,bfDeclarPrd:운송기한(Fr):no:date=YYYYMMDD,afDeclarPrd:운송기한(To):no:date=YYYYMMDD,,mainMainDeclarDt:신고일자:yes:date=YYYYMMDD,rofPicCd:귀책자:yes,etcRsnNm:기타 사유:no'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'정정차수'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'정정구분',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'170',value:'정정사유',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bfDeclarPrdHeader',inputType:'text',removeBorderStyle:'false',width:'140',value:'운송기한 (From)',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afDeclarPrdHeader',inputType:'text',value:'운송기한 (To)',width:'140',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'전송방법',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'처리구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'신고일자',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'귀책자',width:'80',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'기타사유',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mainMainSeq',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true',maxLength:'3'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mainMainClsCd',inputType:'select',removeBorderStyle:'false',width:'100',mandatory:'true',maxByteLength:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mainMainRsnCd',inputType:'select',removeBorderStyle:'false',width:'170',textAlign:'left',mandatory:'true',maxByteLength:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bfDeclarPrd',inputType:'custom',removeBorderStyle:'false',width:'100',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:'false',maxByteLength:'8',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afDeclarPrd',inputType:'custom',width:'100',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:'false',maxByteLength:'8',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sndProcWay',inputType:'select',width:'100',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procClsCd',inputType:'select',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mainMainDeclarDt',inputType:'calendar',width:'100',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rofPicCd',inputType:'select',width:'80',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etcRsnNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalCnt_mainMain',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'btn_addMainMain',style:'',type:'button','ev:onclick':'scwin.btn_addMainMain_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정정추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'btn_delMainMain',style:'',type:'button','ev:onclick':'scwin.btn_delMainMain_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정정삭제'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 40%'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정정 도착지',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_arrive2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_arrive2',id:'gr_arrive2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_arrive2_ontextimageclick','ev:oneditend':'scwin.gr_arrive2_oneditend',syncRowPositionOption:'style',autoFit:'allColumn',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'MRN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'60',value:'MSN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'60',value:'HSN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'140',value:'변경전도착지코드',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'변경전도착지',width:'140',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'변경후도착지코드',width:'140',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'변경후도착지',width:'140',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'msn',inputType:'text',removeBorderStyle:'false',width:'60',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hsn',inputType:'text',removeBorderStyle:'false',width:'60',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bfArvBondZoneCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',maxByteLength:'10',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfArvBondZoneNm',inputType:'textImage',width:'140',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afArvBondZoneCd',inputType:'text',width:'100',readOnly:'true',maxByteLength:'10',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afArvBondZoneNm',inputType:'textImage',width:'140',maxByteLength:'50'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalCnt_arrive2',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'btn_delArrive2',style:'',type:'button','ev:onclick':'scwin.btn_delArrive2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도착지삭제'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'',id:'udc_searchComCode'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_arriveComCode',nameId:'',popupID:'',selectID:'',style:'',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_gridCode',nameId:'',popupID:'',selectID:'',style:'',validTitle:''}},{T:1,N:'w2:autoComplete',A:{disableEdit:'true',editType:'select',id:'acb_mainMainClsCd',mandatory:'false',search:'start',style:'width: 250px;',submenuSize:'auto',objType:'key'}}]},{T:1,N:'w2:autoComplete',A:{disableEdit:'true',displayMode:'label',editType:'select',id:'test',mandatory:'false',search:'start',style:'width: 250px;',submenuSize:'auto'}}]}]}]}]})