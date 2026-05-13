/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_405_01_08b.xml 63413 346a5ba17af8337cf00b4fef68eb83076f91d88fd0f24afbc623767f4cf8a83c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'doIssueDdStDt',name:'DO발급일from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'doIssueDdEndDt',name:'DO발급일to',dataType:'text'}},{T:1,N:'w2:key',A:{id:'doNo',name:'D/O',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslNm',name:'선명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ds_List2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrCrryoutCloseDt',name:'반출기한',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrRtrnDt',name:'반납기한',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'blno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'doNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'doIssueDd',name:'입항일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copinoId',name:'COPINO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'callsignCd',name:'callsign',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslNm',name:'nm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslPortcnt',name:'voyage',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslArrvlportDtm',name:'모선입항일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너 NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNrm',name:'SIZ/TP 규격',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsmbrkPlcCd',name:'하선지',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dropPort',name:'적재항',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dchrPort',name:'양륙항',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendMchtNm1',name:'CONSIGNEE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntMchtNm',name:'SHIPPER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmkDesc',name:'특이사항',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_doIssueDdDt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'doIssueDdStDt',name:'입항일시From',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'doIssueDdEndDt',name:'입항일시To',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_list',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_list_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'refNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecDocCd',name:'elecDocCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docCd',name:'docCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docNo',name:'docNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docKnd',name:'docKnd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL/NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRtrnDt',name:'반납기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNrm',name:'SIZ/TP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copinoId',name:'송신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col16',name:'COPINO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateOutDtm',name:'Gate Out',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCrryoutCloseDt',name:'반출기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateInDtm',name:'Gate In',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateResult',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmkDesc',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refItm',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emcTransCoId',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateSts',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socCls',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doOutbrShpCo',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslPortcnt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslTmlPortcnt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callsignCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfYn',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoId',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portClsCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnPlcCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doIssueDd',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutCloseDd',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslArrvlportDtm',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickUpDt',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntMchtCoCd',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntMchtNm',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntMchtNm2',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntMchtAddr1',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntMchtAddr2',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntMchtAddr3',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faxno',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntMchtPic',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMchtCoCd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMchtNm1',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMchtNm2',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMchtAddr',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMchtAddr2',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendMchtAddr3',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlCoCd',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlNm1',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlNm2',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr1',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr2',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr3',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitId',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitPicTel',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitPicNm',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blPackCnt',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packMark',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blTotWt',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blCbm',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRef',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnTrYn',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWt',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'width',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hei',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temperUnit',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo2',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo3',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCntSht',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRtrnDdCnt',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depotCd',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnPlcNm1',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnPlcNm2',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnPlcAddr1',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnPlcAddr2',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnPlcAddr3',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnPlcTel',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtrnPlcCntctPl',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDtm',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procCls',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSetoffProcDtm',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyCls',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyDtm',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvPort',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dropPort',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPort',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copinoId_copy',name:'name107',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:onrowpositionchange':'scwin.ds_list_onrowpositionchange',id:'ds_list_origin',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'refNo',name:'refNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'elecDocCd',name:'elecDocCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'docCd',name:'docCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'docNo',name:'docNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'seq',name:'seq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'docKnd',name:'docKnd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'MRN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'MSN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'HSN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'BL/NO'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrRtrnDt',name:'반납기한'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'컨테이너'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNrm',name:'SIZ/TP'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copinoId',name:'송신자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col16',name:'COPINO'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateOutDtm',name:'Gate Out'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrCrryoutCloseDt',name:'반출기한'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateInDtm',name:'Gate In'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateResult',name:'name20'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmkDesc',name:'name28'}},{T:1,N:'w2:column',A:{dataType:'text',id:'refItm',name:'name29'}},{T:1,N:'w2:column',A:{dataType:'text',id:'doNo',name:'name30'}},{T:1,N:'w2:column',A:{dataType:'text',id:'emcTransCoId',name:'name32'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateSts',name:'name34'}},{T:1,N:'w2:column',A:{dataType:'text',id:'socCls',name:'name37'}},{T:1,N:'w2:column',A:{dataType:'text',id:'doOutbrShpCo',name:'name38'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslPortcnt',name:'name42'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslTmlPortcnt',name:'name43'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tmlCd',name:'name44'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shpCoNm',name:'name45'}},{T:1,N:'w2:column',A:{dataType:'text',id:'callsignCd',name:'name46'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'name47'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfYn',name:'name48'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCoId',name:'name49'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCoNm',name:'name50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portClsCd',name:'name51'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'name52'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portNm',name:'name53'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dsmbrkPlcCd',name:'name54'}},{T:1,N:'w2:column',A:{dataType:'text',id:'assgnPlcCd',name:'name55'}},{T:1,N:'w2:column',A:{dataType:'text',id:'doIssueDd',name:'name56'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryoutCloseDd',name:'name57'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslArrvlportDtm',name:'name58'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pickUpDt',name:'name59'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntMchtCoCd',name:'name60'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntMchtNm',name:'name61'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntMchtNm2',name:'name62'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntMchtAddr1',name:'name63'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntMchtAddr2',name:'name64'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntMchtAddr3',name:'name65'}},{T:1,N:'w2:column',A:{dataType:'text',id:'faxno',name:'name66'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntMchtPic',name:'name67'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sendMchtCoCd',name:'name68'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sendMchtNm1',name:'name69'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sendMchtNm2',name:'name70'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sendMchtAddr',name:'name71'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sendMchtAddr2',name:'name72'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sendMchtAddr3',name:'name73'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ntcPlCoCd',name:'name74'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ntcPlNm1',name:'name75'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ntcPlNm2',name:'name76'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ntcPlAddr1',name:'name77'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ntcPlAddr2',name:'name78'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ntcPlAddr3',name:'name79'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitId',name:'name80'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitPicTel',name:'name81'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitPicNm',name:'name82'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blPackCnt',name:'name83'}},{T:1,N:'w2:column',A:{dataType:'text',id:'packMark',name:'name84'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blTotWt',name:'name85'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blCbm',name:'name86'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrRef',name:'name88'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnTrYn',name:'name89'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWt',name:'name90'}},{T:1,N:'w2:column',A:{dataType:'text',id:'len',name:'name91'}},{T:1,N:'w2:column',A:{dataType:'text',id:'width',name:'name92'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hei',name:'name93'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'name94'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temperUnit',name:'name95'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sealNo1',name:'name96'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sealNo2',name:'name97'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sealNo3',name:'name98'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCntSht',name:'name99'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrRtrnDdCnt',name:'name102'}},{T:1,N:'w2:column',A:{dataType:'text',id:'depotCd',name:'name103'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnPlcNm1',name:'name104'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnPlcNm2',name:'name105'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnPlcAddr1',name:'name106'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnPlcAddr2',name:'name107'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnPlcAddr3',name:'name108'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnPlcTel',name:'name109'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rtrnPlcCntctPl',name:'name110'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rcvDtm',name:'name111'}},{T:1,N:'w2:column',A:{dataType:'text',id:'procCls',name:'name112'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrSetoffProcDtm',name:'name113'}},{T:1,N:'w2:column',A:{dataType:'text',id:'replyCls',name:'name114'}},{T:1,N:'w2:column',A:{dataType:'text',id:'replyDtm',name:'name115'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvPort',name:'name116'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dropPort',name:'name117'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dchrPort',name:'name118'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'name119'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'name120'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'name122'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'name123'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlNm',name:'name124'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copinoId_copy',name:'name107'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveESLCntrGateInOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ds_condition","key":"IN_DS1"},{"id":"ds_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_insert',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveSitcDoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_ds_List2","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.op.wrkrslts.cywrkrslts.UpdateESLDoCntrCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/rc/rccommon.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();

  // test
  // dma_doIssueDdDt.set("doIssueDdStDt", "20250101");
  // dma_doIssueDdDt.set("doIssueDdEndDt", "20250630");
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.tr_actionKind; //조회/수정 구분
  scwin.pos_rowSts = 0; //현재 행저장
  scwin.isBatch = 0; //일괄생성작업여부

  scwin.today = $c.date.getServerDateTime($p, 'yyyyMMdd');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = async function () {
  $c.gus.cfDisableObjects($p, [ed_txt_lineNm]);
  $c.gus.cfDisableObjects($p, [tb_retrieveData]);
  $c.gus.cfDisableBtn($p, [btn_b_UpdateBatch, btn_b_Update, btn_b_Save]);
  dma_doIssueDdDt.set("doIssueDdStDt", scwin.today);
  dma_doIssueDdDt.set("doIssueDdEndDt", scwin.today);
  acb_ed_lineCd.setSelectedIndex(0);
  scwin.acb_ed_lineCd_onselected();
};

/**
 * @method 
 * @name f_initEditable 
 * @description 컬럼 수정여부 초기화
 */
scwin.f_initEditable = function (gubun) {
  switch (gubun) {
    case "Y":
      //일괄수정일때 checkBox 보여줌
      gr_list.removeHeaderClass("chkHeader", "dis-none");
      gr_list.setColumnReadOnly("chk", false);

      // 컬럼EDIT설정(반출기한, 반납기한)
      gr_list.setColumnReadOnly("cntrCrryoutCloseDt", false);
      gr_list.setColumnReadOnly("cntrRtrnDt", false);
      break;
    case "N":
      //일괄수정일때 checkBox 가려줌
      gr_list.setHeaderClass("chkHeader", "dis-none");
      gr_list.setColumnReadOnly("chk", true);

      // //컬럼EDIT설정(반출기한, 반납기한)
      gr_list.setColumnReadOnly("cntrCrryoutCloseDt", true);
      gr_list.setColumnReadOnly("cntrRtrnDt", true);
      break;
  }
  ;
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 
  // 해당 Text Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.

  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  const pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 조회 팝업
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (pName == null) pName = "";
  let callbackFunc,
    compObj,
    pWhere = null;
  switch (disGubun) {
    case 2:
      //선명항차;
      callbackFunc = scwin.vsslCallBack;
      compObj = udc_vssl;
      break;
    case 3:
      //작업장
      callbackFunc = scwin.arvWrkPlCallBack;
      compObj = udc_arvWrkPl;
      break;
  }
  compObj.cfCommonPopUp(callbackFunc,
  //SQL SELECT ID;
  pCode,
  //조회조건 CODE;
  pName,
  //조회조건 CODE_NAME;
  pClose,
  //1건일경우 자동 닫기 여부(T:자동닫기, F:보여주기);
  null, null, null, null, pWhere,
  //SQL WHERE조건에 들어가는 INPUT PARAMETER;
  null, null, null, null);
};

/**
 * @method 
 * @name vsslCallBack 
 * @description VSSL NM (선명항차) 팝업 콜백
 */
scwin.vsslCallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, txt_vsslNm, null);
};

/**
 * @method 
 * @name vsslCallBack 
 * @description VSSL NM (선명항차) 팝업 콜백
 */
scwin.arvWrkPlCallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, txt_arvWrkPlNm, null);
  let selectIdx = ds_list.getRowPosition();

  //반납지를 수정하였을 때 Org값과 비교하여 변경되었다면 체크박스를 체크한다.
  let val = ed_arvWrkPlCd.getValue();
  let val2 = txt_arvWrkPlNm.getValue();
  let orgVal = ds_list_origin.getCellData(selectIdx, "arvWrkPlCd");
  let orgVal2 = ds_list_origin.getCellData(selectIdx, "arvWrkPlNm");
  if (val != orgVal || val2 != orgVal2) {
    ds_list.setCellData(selectIdx, "chk", 1);
  } else {
    ds_list.setCellData(selectIdx, "chk", 0);
  }
  ;
};

/**
 * @method 
 * @name f_mandatoryChange 
 * @description 필수항목/타이틀 변경
 */
scwin.f_mandatoryChange = function (flag) {
  //반납지
  let mandatory = flag == 1;
  udc_arvWrkPl.mandatoryCode = mandatory;
};

/**
 * @method 
 * @name f_toExcel 
 * @description 그리드 데이터 엑셀로 다운
 */
scwin.f_toExcel = async function () {
  const totCnt = ds_list.getRowCount();
  if (totCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!retConfirm) return;
  let options = {
    sheetName: "Sitc 반출입 관리 현황",
    fileName: "Sitc 반출입 관리 현황.xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_list, options);
};

/**
 * @event 
 * @name sbm_retrieve_submit 
 * @description 조회 Submission 요청 전 선처리. return false시 submission 수행 안함.
 */
scwin.sbm_retrieve_submit = function (e) {
  let jsonData = {
    "lineCd": acb_ed_lineCd.getValue(),
    "doIssueDdStDt": dma_doIssueDdDt.get("doIssueDdStDt"),
    "doIssueDdEndDt": dma_doIssueDdDt.get("doIssueDdEndDt"),
    "doNo": ed_ed_doNo.getValue(),
    "mrn": ed_mrn.getValue(),
    "cntrNo": ed_cntrNo.getValue(),
    "vsslNm": txt_vsslNm.getValue()
  };
  dma_ds_condition.setJSON(jsonData);
};

/**
 * @event 
 * @name sbm_retrieve_submitdone 
 * @description 조회 Response Status 코드 값이 정상 일 경우 동작.
 */
scwin.sbm_retrieve_submitdone = function (e) {
  let allData = ds_list.getAllJSON();
  let rowData = {};
  for (let i = 0; i < allData.length; i++) {
    rowData = allData[i];
    ds_list.setCellData(i, "copinoId_copy", rowData["copinoId"]);
  }
  ;
  ds_list_origin.setJSON(allData);
  ds_list.initRowStatus();
  ds_list_origin.initRowStatus();
  let rowCnt = ds_list.getTotalRow();
  scwin.txt_countRow = rowCnt;

  // 일괄수정일때 HeadCheckShow 보여줌
  gr_list.removeHeaderClass("chkHeader", "dis-none");
  txt_totalRowsGrid1.setValue(rowCnt); // 총 조회건수 표시

  // 조회결과가 0인경우
  if (rowCnt == 0) {
    $c.gus.cfDisableBtn($p, [btn_b_UpdateBatch, btn_b_Update, btn_b_Save]);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); //("조회결과가 존재하지 않습니다.");
    return;
  } else {
    $c.gus.cfDisableBtn($p, [btn_b_Save]);
  }
  ;

  // 기존행 포커스
  gr_list.setFocusedCell(scwin.pos_rowSts, 0);

  // 선택, 반출일자, 반납기한 수정불가능
  scwin.f_initEditable("N");
};

/**
 * @event 
 * @name ds_list_onrowpositionchange 
 * @description 행의 인덱스가 변경된 경우에 발생
 */
scwin.ds_list_onrowpositionchange = function (info) {
  let vRowStatus = ds_list.getRowStatusValue(ds_list.getRowPosition());
  // TODO - 작동 조건 확인 필요
  // if (info.newRowIndex != ds_list.getRowPosition()) {
  //수정시 로우가 변경되었을 경우
  if (vRowStatus == 0) {
    if (scwin.isBatch == 0) {
      $c.gus.cfDisableObjects($p, tb_retrieveData);
      $c.gus.cfDisableBtn($p, [btn_b_Save]);
    }
    ;
  } else if (vRowStatus == 1) {
    $c.gus.cfDisableBtn($p, [btn_b_Update, btn_b_UpdateBatch]);
  }
  ;

  //로우가 변경시 반납지 필수항목제거
  scwin.f_mandatoryChange(2);
  // };
};

/**
 * @event 
 * @name sbm_update_submitdone 
 * @description 수정 Response Status 코드 값이 정상 일 경우 동작.
 */
scwin.sbm_update_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  $c.gus.cfDisableObjects($p, tb_retrieveData);
  scwin.btn_retrieve_onclick();
};

/**
 * @event 
 * @name sbm_insert_submitdone 
 * @description 저장 Response Status 코드 값이 정상 일 경우 동작.
 */
scwin.sbm_insert_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  $c.gus.cfDisableObjects($p, tb_retrieveData);
  scwin.btn_retrieve_onclick();
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 초기화 버튼 클릭
 */
scwin.btn_fieldClear_onclick = function (e) {
  // 초기화 - f_InitObjects
  $c.gus.cfInitObjects($p, tb_queryList, null);
  acb_ed_lineCd.setValue("SITC");
  ed_txt_lineNm.setValue("SITC CONTAINER LINES CO.,LTD.");
  dma_doIssueDdDt.set("doIssueDdStDt", scwin.today);
  dma_doIssueDdDt.set("doIssueDdEndDt", scwin.today);
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭
 */
scwin.btn_retrieve_onclick = async function (e) {
  // 조회 - f_Retrieve
  if (!(await $c.gus.cfValidate($p, [tb_queryList, doIssueDdStDt, doIssueDdEndDt]))) {
    return;
  }
  ;
  const startDay = dma_doIssueDdDt.get("doIssueDdStDt");
  const endDay = dma_doIssueDdDt.get("doIssueDdEndDt");
  if (!$c.gus.cfIsAfterDate($p, startDay, endDay)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    doIssueDdStDt.focus();
    return;
  }
  ;
  await $c.sbm.execute($p, sbm_retrieve); // tr_retrieve

  //HeadCheck 초기화
  ds_list.setColumnDefaultValue("chk", 0);
};

/**
 * @event 
 * @name udc_vssl_onblurCodeEvent 
 * @description VSSL NM code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_vssl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, txt_vsslNm, 2, true);
};

/**
 * @event 
 * @name udc_vssl_onviewchangeNameEvent 
 * @description VSSL NM code name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_vssl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_vsslNm, ed_vsslCd, 2, false);
};

/**
 * @event 
 * @name udc_vssl_onclickEvent 
 * @description VSSL NM 검색 버튼 클릭
 */
scwin.udc_vssl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_vsslCd.getValue(), txt_vsslNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_arvWrkPl_onclickEvent 
 * @description 반납자 검색 버튼 클릭
 */
scwin.udc_arvWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_arvWrkPlCd.Text, txt_arvWrkPlNm.value, 'F', 'T');
};

/**
 * @event 
 * @name btn_b_Update_onclick 
 * @description 수정 버튼 클릭 (f_Update)
 */
scwin.btn_b_Update_onclick = function (e) {
  scwin.tr_actionKind = "UPDATE";
  scwin.isBatch = 0;
  $c.gus.cfEnableObjects($p, [ica_ed_cntrRtrnDt,
  // 반납기한
  ica_ed_cntrCrryoutCloseDt // 반출기한
  ]);

  //반납지가 있는 경우에만 수정가능하도록
  if (ed_arvWrkPlCd.getValue() != "") {
    $c.gus.cfEnableObjects($p, [udc_arvWrkPl]);
    //반납지를 필수항목으로
    scwin.f_mandatoryChange(1);
  }
  ;

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_b_Save]);
  $c.gus.cfDisableBtn($p, [btn_b_Update, btn_b_UpdateBatch]);
};

/**
 * @event 
 * @name btn_b_UpdateBatch_onclick 
 * @description 일괄수정 버튼 클릭 (f_UpdateBatch)
 */
scwin.btn_b_UpdateBatch_onclick = function (e) {
  scwin.tr_actionKind = "UPDATE";
  scwin.isBatch = 1;

  //선택, 반출일자, 반납기한 수정가능
  scwin.f_initEditable("Y");

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_b_Save]);
  $c.gus.cfDisableBtn($p, [btn_b_Update, btn_b_UpdateBatch]);
};

/**
 * @event 
 * @name btn_b_Save_onclick 
 * @description 저장 버튼 클릭 (f_Save)
 */
scwin.btn_b_Save_onclick = async function (e) {
  debugger;
  //현재 행저장
  scwin.pos_rowSts = ds_list.getRowPosition();
  if (ds_list.getModifiedIndex().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['컨테이너 진행현황']);
    return false;
  }
  ;
  let chkCnt = 0; //체크수
  let rowCnt = ds_list.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_list.getCellData(i, "chk") == 1) {
      chkCnt++;
    }
    ;
  }
  ;
  if (chkCnt == 0) {
    $c.gus.cfAlertMsg($p, "선택된 행이 없습니다. 저장하려는 데이터를 선택하세요.");
    return false;
  }
  ;

  //Mandatory 항목이 누락하지 않았는지 체크한다.
  if (!(await $c.gus.cfValidate($p, [tb_retrieveData]))) {
    return;
  }
  ;

  // todo - asis에선 ica_ed_cntrRtrnDt만 확인하여 수정
  // if (!await $c.gus.cfValidate([ica_ed_cntrCrryoutCloseDt] ||
  if (!(await $c.gus.cfValidate($p, [ica_ed_cntrRtrnDt]))) {
    return;
  }
  ;

  // $c.win.confirm("저장하시겠습니까?", "scwin.saveCallBack");

  let ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret == true) {
    if (scwin.tr_actionKind == "INSERT") {
      // $c.sbm.execute(sbm_insert); // tr_insert
    } else if (scwin.tr_actionKind == "UPDATE") {
      $c.sbm.execute($p, sbm_update); // tr_update
    }
    ;
  }
};

/**
 * @method 
 * @name saveCallBack 
 * @description 저장 콜백
 */
scwin.saveCallBack = function (e) {
  if (!e.clickValue) return;

  // INSERT 쓰는 곳 없음
  // const rowData = ds_list.getRowJSON(ds_list.rowPosition);
  // let insertData = {
  //     //수정 + 저장
  //     "cntrCrryoutCloseDt": rowData["cntrCrryoutCloseDt"],
  //     "cntrRtrnDt": rowData["cntrRtrnDt"],
  //     "arvWrkPlCd": rowData["arvWrkPlCd"],

  //     //저장
  //     "doNo": rowData["doNo"],
  //     "blNo": rowData["blNo"],
  //     "doIssueDd": ica_ed_doIssueDd.getValue(),
  //     "copinoId": ed_copinoId2.getValue(),
  //     "callsignCd": ed_txt_callsignCd.getValue().toUpperCase(),
  //     "vsslNm": ed_txt_vsslNm2.getValue().toUpperCase(),
  //     "vsslPortcnt": ed_txt_vsslPortcnt.getValue().toUpperCase(),
  //     "vsslArrvlportDtm": ica_ed_vsslArrvlportDtm.getValue(),
  //     "cntrNo": ed_cntrNo2.getValue(),
  //     "cntrNrm": ed_txt_cntrNrm.getValue().toUpperCase(),
  //     "mrn": ed_txt_mrn.getValue().toUpperCase(),
  //     "msn": ed_msn.getValue(),
  //     "dsmbrkPlcCd": rowData["dsmbrkPlcCd"].toUpperCase(),
  //     "dropPort": ed_txt_dropPort.getValue().toUpperCase(),
  //     "dchrPort": ed_txt_dchrPort.getValue().toUpperCase(),
  //     "sendMchtNm1": ed_txt_sendMchtNm1.getValue().toUpperCase(),
  //     "cntMchtNm": ed_txt_cntMchtNm.getValue().toUpperCase(),
  //     "rmkDesc": ed_txt_rmkDesc.getValue(),
  // };

  // dma_ds_List2.setJSON(insertData);

  if (scwin.tr_actionKind == "INSERT") {
    // $c.sbm.execute(sbm_insert); // tr_insert
  } else if (scwin.tr_actionKind == "UPDATE") {
    $c.sbm.execute($p, sbm_update); // tr_update
  }
  ;
};

/**
 * @event 
 * @name acb_ed_lineCd_onselected 
 * @description 라인 선택 항목 목록에서 항목이 클릭된 이후에 발생
 */
scwin.acb_ed_lineCd_onselected = function () {
  const strLine = acb_ed_lineCd.getValue();
  let lineVal = "";
  switch (strLine) {
    case "ESL":
      lineVal = "ESL CONTAINER LINES CO.,LTD.";
      break;
    case "SWIL":
      lineVal = "SWIL CONTAINER LINES CO.,LTD.";
      break;
    default:
      break;
  }
  ;
  ed_txt_lineNm.setValue(lineVal);
};

/**
 * @event 
 * @name acb_ed_lineCd_onblur 
 * @description 라인 선택에서 포커스가 빠져나갈 때 발생
 */
scwin.acb_ed_lineCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(this, ed_txt_lineNm, 1, true);
};

/**
 * @event 
 * @name ed_txt_lineNm_onchange 
 * @description 라인 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.ed_txt_lineNm_onchange = function (info) {
  scwin.f_chkOpenCommonPopUp(this, acb_ed_lineCd, 1, false);
};

/**
 * @event 
 * @name ica_ed_cntrRtrnDt_onchange 
 * @description 반납기한 날짜 선택 시 발생
 * @param {String} date
 * @param {Object} dateObject
 */
scwin.ica_ed_cntrRtrnDt_ondateselect = function (date, dateObject) {
  let rowIdx = ds_list.getRowPosition();
  let val = ica_ed_cntrRtrnDt.getValue();
  let orgVal = ds_list_origin.getCellData(rowIdx, "cntrRtrnDt");
  let val2 = ica_ed_cntrCrryoutCloseDt.getValue();
  let orgVal2 = ds_list_origin.getCellData(rowIdx, "cntrCrryoutCloseDt");
  let chkVal = 0;
  if (val != orgVal || val2 != orgVal2) chkVal = 1;
  ds_list.setCellData(rowIdx, "chk", chkVal);
  ds_list.setCellData(rowIdx, "cntrRtrnDt", val);
  ds_list.setCellData(rowIdx, "cntrCrryoutCloseDt", val2);
};

/**
 * @event 
 * @name ica_ed_cntrRtrnDt_onblur 
 * @description 반납기한 포커스를 잃었을 때 발생
 */
scwin.ica_ed_cntrRtrnDt_onblur = function (e) {
  scwin.ica_ed_cntrRtrnDt_ondateselect();
};

/**
 * @event 
 * @name ica_ed_cntrRtrnDt_onchange 
 * @description 반출기한 날짜 선택 시 발생
 * @param {String} date
 * @param {Object} dateObject
 */
scwin.ica_ed_cntrCrryoutCloseDt_ondateselect = function (date, dateObject) {
  scwin.ica_ed_cntrRtrnDt_ondateselect();
};

/**
 * @event 
 * @name ica_ed_cntrCrryoutCloseDt_onblur 
 * @description 반출기한 포커스를 잃었을 때 발생
 */
scwin.ica_ed_cntrCrryoutCloseDt_onblur = function (e) {
  scwin.ica_ed_cntrCrryoutCloseDt_ondateselect();
};

/**
 * @event 
 * @name gr_list_onheaderclick 
 * @description 헤더가 클릭된 경우 발생
 * @param {String} headerId
 */
scwin.gr_list_onheaderclick = function (headerId) {
  if (headerId == "chkHeader") {
    const check = gr_list.getHeaderValue(headerId);
    let rowCnt = ds_list.getRowCount();

    //행이 0보다 크고, B/L, CNTR_NO항목이 NULL이 아닐 경우에만 체크 가능
    if (rowCnt <= 0) return;
    for (let i = 0; i < rowCnt; i++) {
      let rowData = ds_list.getRowJSON(i);
      if (rowData["blNo"] != "" && rowData["cntrNo"] != "") {
        if (check == 1) {
          //상태를 UPDATE로 변경한다.
          ds_list.modifyRowStatus(i, 'U');
        } else {
          ds_list.undoRow(i);
        }
        ;
      }
      ;
    }
    ;
  }
  ;
};

/**
 * @event 
 * @name gr_list_oncellindexchange 
 * @description 선택된 셀이 변경되었을 때 발생
 * @param {String} rowIndex
 * @param {String} columnIndex
 * @param {String} oldRow
 * @param {String} oldColumnIndex
 */
scwin.gr_list_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  let rowData = ds_list.getRowJSON(rowIndex);
  let columnId = gr_list.getColumnID(columnIndex);
  if (columnId == "chk") {
    const check = rowData["chk"];
    if (check == 1) {
      if (rowData["blNo"] != "" && rowData["cntrNo"] != "") {
        //상태를 UPDATE로 변경한다.
        // ds_list.UserStatus(row) = 3	//UPDATE
      } else {
        $c.gus.cfAlertMsg($p, "B/L번호와 컨테이너번호가 존재하지 않아  체크할 수 없습니다.");
        // ds_list.Undo(row);
      }
    } else if (check == 0) {
      if (rowData["blNo"] != "" && rowData["cntrNo"] != "") {
        // ds_list.Undo(row);
      }
    }
    ;
  }
  ;

  // 데이터 바인딩
  ed_txt_rmkDesc.setValue(rowData["rmkDesc"]);
  ed_doNo.setValue(rowData["doNo"]);
  ed_blNo.setValue(rowData["blNo"]);
  ed_cntrNo2.setValue(rowData["cntrNo"]);
  ed_txt_cntrNrm.setValue(rowData["cntrNrm"]);
  ed_txt_mrn.setValue(rowData["mrn"]);
  ed_msn.setValue(rowData["msn"]);
  ed_txt_vsslPortcnt.setValue(rowData["vsslPortcnt"]);
  ed_txt_callsignCd.setValue(rowData["callsignCd"]);
  ed_txt_dsmbrkPlcCd.setValue(rowData["dsmbrkPlcCd"]);
  ica_ed_doIssueDd.setValue(rowData["doIssueDd"]);
  ica_ed_vsslArrvlportDtm.setValue(rowData["vsslArrvlportDtm"]);
  ed_txt_sendMchtNm1.setValue(rowData["sendMchtNm1"]);
  ed_txt_cntMchtNm.setValue(rowData["cntMchtNm"]);
  ica_ed_cntrCrryoutCloseDt.setValue(rowData["cntrCrryoutCloseDt"]);
  ica_ed_cntrRtrnDt.setValue(rowData["cntrRtrnDt"]);
  ed_txt_dropPort.setValue(rowData["dropPort"]);
  ed_txt_dchrPort.setValue(rowData["dchrPort"]);
  ed_copinoId2.setValue(rowData["copinoId"]);
  ed_txt_vsslNm2.setValue(rowData["vsslNm"]);
  ed_arvWrkPlCd.setValue(rowData["arvWrkPlCd"]);
  txt_arvWrkPlNm.setValue(rowData["arvWrkPlNm"]);
};

/**
 * @event 
 * @name gr_list_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @asis for="gr_list" event=OnExit(row,colid,data)
 */
scwin.gr_list_oneditend = function (rowIndex, columnIndex, value) {
  let colId = this.getColumnID(columnIndex);
  let dataList = this._dataList;
  switch (colId) {
    case 'cntrCrryoutCloseDt':
    case 'cntrRtrnDt':
      //첫번째 행이면 반출일자 혹은 반납일자로 컬럼 세팅
      if (rowIndex == 0) {
        const rowCnt = dataList.getRowCount();
        for (let i = 0; i < rowCnt; i++) {
          ds_list.setCellData(i, colId, value);
        }
        ;
      }
      ;
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_list_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for=gr_list event=OnCheckClick(row,colid,check)
 */
scwin.gr_list_oncellclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case 'chk':
      let rowData = this._dataList.getRowJSON(rowIndex);
      const check = rowData['chk'];
      if (check == 1) {
        if (rowData["blNo"] != "" && rowData["cntrNo"] != "") {
          //상태를 UPDATE로 변경한다.
          this._dataList.modifyRowStatus(rowIndex, 'U');
        } else {
          $c.gus.cfAlertMsg($p, "B/L번호와 컨테이너번호가 존재하지 않아  체크할 수 없습니다.");
          this._dataList.undoRow(rowIndex);
        }
        ;
        return;
      }
      ;
      if (rowData["blNo"] != "" && rowData["cntrNo"] != "") {
        this._dataList.undoRow(rowIndex);
      }
      ;
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_queryList',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'라인',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_ed_lineCd',search:'start',style:'width: 120px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'','ev:onblur':'scwin.acb_ed_lineCd_onblur',displayMode:'label','ev:onselected':'scwin.acb_ed_lineCd_onselected',emptyIndex:'-1',emptyItem:'true',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ESL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ESL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SWIL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SWIL'}]}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_lineNm',placeholder:'',style:'','ev:onchange':'scwin.ed_txt_lineNm_onchange'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일시 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_doIssueDd',refDataMap:'dma_doIssueDdDt',refEdDt:'doIssueDdEndDt',refStDt:'doIssueDdStDt',style:'',edToId:'doIssueDdStDt',objTypeFrom:'data',mandatoryFrom:'true',edFromId:'doIssueDdEndDt',objTypeTo:'data',mandatoryTo:'true',titleFrom:'입항일자',titleTo:'입항일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL_NO',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ed_doNo',placeholder:'',style:'width:230px;',allowChar:'a-zA-Z0-9',validateOnInput:'true',UpperFlag:'1','ev:onkeyup':'scwin.upperFlag',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:250px;',allowChar:'a-zA-Z0-9',validateOnInput:'true',UpperFlag:'1','ev:onkeyup':'scwin.upperFlag',maxlength:'11'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너 번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:208px;',allowChar:'a-zA-Z0-9',validateOnInput:'true',UpperFlag:'1','ev:onkeyup':'scwin.upperFlag',maxlength:'11'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VSSL NM',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',nameId:'txt_vsslNm',codeId:'ed_vsslCd',id:'udc_vssl',selectID:'retrieveOrdVsslInfo',btnId:'btn_vssl','ev:onclickEvent':'scwin.udc_vssl_onclickEvent',objTypeCode:'Data',objTypeName:'Data',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vssl_onviewchangeNameEvent',progressBarSwitch:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너 진행현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_grdBtn',gridID:'gr_list',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'f_toExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_list',style:'',autoFit:'lastColumn',id:'gr_list',visibleRowNum:'7',class:'wq_gvw',fixedColumn:'1','ev:onheaderclick':'scwin.gr_list_onheaderclick',focusMode:'row','ev:oncellindexchange':'scwin.gr_list_oncellindexchange','ev:oneditend':'scwin.gr_list_oneditend',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_list_oncellclick',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chkHeader',value:'선택',displayMode:'label',class:'txt-blue dis-none',checkboxLabel:'선택',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column40',value:'BL/NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'반납기한',displayMode:'label',class:'txt-red bold'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column34',value:'컨테이너',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'SIZ/TP',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'송신자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'COPINO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',value:'Gate Out',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'반출기한',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column46',value:'Gate In',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'chk',displayMode:'label',colSpan:'1',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mrn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'msn',displayMode:'label',dataType:'number',readOnly:'true',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hsn',displayMode:'label',readOnly:'true',excelCellType:'number',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'blNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'cntrRtrnDt',displayMode:'label',readOnly:'true',class:'bold'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntrNrm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'copinoId_copy',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'copinoId',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'gateOutDtm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'cntrCrryoutCloseDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column47',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column48',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_totalRowsGrid1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'D/O 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'tb_retrieveData',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'BL/NO',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'',allowChar:'a-zA-Z0-9',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'DO NO',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_doNo',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입항일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_doIssueDd',pickerType:'dynamic',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'반납지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvWrkPlCd',nameId:'txt_arvWrkPlNm',id:'udc_arvWrkPl',btnId:'btn_arvWrkPl','ev:onclickEvent':'scwin.udc_arvWrkPl_onclickEvent',mandatoryCode:'false',validExpCode:'반납지:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'송신자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_copinoId2',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'반납기한',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'','ev:onblur':'scwin.ica_ed_cntrRtrnDt_onblur','ev:ondateselect':'scwin.ica_ed_cntrRtrnDt_ondateselect',id:'ica_ed_cntrRtrnDt',pickerType:'dynamic',style:'',mandatory:'true',title:'반납기한'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'반출기한',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'','ev:onblur':'scwin.ica_ed_cntrCrryoutCloseDt_onblur','ev:ondateselect':'scwin.ica_ed_cntrCrryoutCloseDt_ondateselect',id:'ica_ed_cntrCrryoutCloseDt',pickerType:'dynamic',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'CALLSIGN',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_callsignCd',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'VSSL NM',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_vsslNm2',placeholder:'',style:'',allowChar:'a-zA-Z0-9',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'VOYAGE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_vsslPortcnt',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'모선입항일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_vsslArrvlportDtm',pickerType:'dynamic',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'컨테이너 NO',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo2',placeholder:'',style:'',allowChar:'a-zA-Z0-9',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'규격',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_cntrNrm',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'MRN',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_mrn',placeholder:'',style:'',allowChar:'a-zA-Z0-9',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'MSN',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하선장소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_dsmbrkPlcCd',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적재항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_dropPort',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'양륙항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_dchrPort',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'CONSIGNEE',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_sendMchtNm1',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'SHIPPER',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_cntMchtNm',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특이사항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_rmkDesc',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_b_UpdateBatch',label:'저장',style:'',type:'button',objType:'bCreate','ev:onclick':'scwin.btn_b_UpdateBatch_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_b_Update',label:'저장',style:'',type:'button',objType:'bUpdate','ev:onclick':'scwin.btn_b_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_b_Save',label:'저장',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.btn_b_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})