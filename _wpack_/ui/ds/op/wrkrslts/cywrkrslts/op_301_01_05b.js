/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05b.xml 218855 51ae12ab83574653ace87af7fc2952609a4076fcfc068bcf9a2a2f6894305f80 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inGrid'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo2',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptArvWrkPlCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSpec',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portCnt',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutYn',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndQry',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gateInslYn',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hveqAtmtYn',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gateAtmtYn',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'preInfoSndYn',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gateinoutCls',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outGrid',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_outGrid_onrowpositionchange','ev:oncelldatachange':'scwin.ds_outGrid_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gridChkBox',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'I/O',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socChkBox',name:'SOC확인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEALNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'출도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SZ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateinDth',name:'반출입일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDthh',name:'반입예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'검색기여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlClsCd',name:'검색기전반입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfGubun',name:'R/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'목적항구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiFlag',name:'반입EDI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiFlag',name:'반출EDI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dummy',name:'정산여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'셔틀',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'cntrSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'wrkPathSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copinoResponse',name:'COPINO오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarNo',name:'COPINO오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarSeq',name:'COPINO오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'COPINO오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqSeq',name:'COPINO오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClsCd',name:'COPINO오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaCntrNo',name:'PDA_CNTR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaSealNo',name:'PDA_SEAL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaChassisNo',name:'PDA_샤시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkFlag',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiType',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiType',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendNo',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq1',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNoYn',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoSndYn',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlClsCd',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransDemDt',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'masterKey',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisEqCd',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellOdrNo',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgsetNo',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisChkYn',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvEmpNo',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxOdrNo',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictDth',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfSpotClsCd',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCntrNoYn',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkRsltsSeq',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransEndDt',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransStDt',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateoutDth',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransCoClntNm',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransCoClntNo',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqGoodsSeq',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indvdlAlloccarYn',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lctnDcsnYn',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNoChangeYn',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gatelogSndYn',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondZoneCd',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c2ClntNo',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxClntNo',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvPreInfoSndYn',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateAtmtYn',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciOdrNo',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDoorCd',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateInslYn',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlCd',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copinoAutoSndYn',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinGatelogNo',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liVanTerm',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depotYn',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name138',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'name140',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'name141',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciClntNo',name:'name142',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortNo',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqAtmtYn',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutPrgsStsCd',name:'name145',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgsetYn',name:'name146',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name147',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name148',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvRange',name:'name149',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'name150',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name151',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvBondZoneCd',name:'name152',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col153',name:'name153',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_block'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bay',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tier',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_row',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_block',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_chassisNoChangeInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logisLnkEqCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chassisNoChangeResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cntrNoChangeInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSeq',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNoYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPathSeq',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpSeq',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gateinoutCls',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cntrNoSeqInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarSeq',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptArvWrkPlCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrNoChangeInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrCntrNoYn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutYn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgsetYn',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name37',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_preInfoSndYn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_preInfoSndYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transWrkIndictNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'value',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inWrkpath'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outWrkpath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inManagementItem'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crryinoutIntendNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSeq',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPathSeq',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpSeq',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cmpstcrgKndCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logisLnkEqCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outManagementItem',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrLineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrLineCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpYn',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateinDth',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNoYn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupOdrYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'detention',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfYn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gateinoutDth',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisChk',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDth',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inBay'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outBay',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inRow'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outRow',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inTier'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outTier',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inFullEmptyChangeInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gateinoutCls',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outFullEmptyChangeInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CntrNoSeqInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inCntrPositionInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lblock',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lbay',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lrow',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ltier',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outCntrPositionInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_outGridSave',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'gridChkBox',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'컨테이너'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinoutClsCd',name:'I/O'}},{T:1,N:'w2:column',A:{dataType:'text',id:'socChkBox',name:'SOC확인'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sealNo',name:'SEALNO'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineCd',name:'LINE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'F/E'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'출도착지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'SZ'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'TP'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclIdCardNo',name:'차량ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclNo',name:'차량번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chassisNo',name:'샤시번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateinDth',name:'반출입일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinoutDthh',name:'반입예정일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWrkClsCd',name:'특이사항'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drvTelNo',name:'연락처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'onReqNo',name:'상차요청번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bookingNo',name:'부킹번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpSeq',name:'작업단계;순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'xrayLupTrgtYn',name:'검색기여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rettlClsCd',name:'검색기전반입여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rfGubun',name:'R/F'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lblock',name:'LBLOCK'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lbay',name:'LBAY'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lrow',name:'LROW'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ltier',name:'LTIER'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wt',name:'중량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portNm',name:'목적항구'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinEdiFlag',name:'반입EDI'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryoutEdiFlag',name:'반출EDI'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dummy',name:'정산여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpCd',name:'셔틀'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'종류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfClsCd',name:'자가'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSeq',name:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPathSeq',name:'wrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copinoResponse',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarNo',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarSeq',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqNo',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqSeq',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClsCd',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pdaCntrNo',name:'PDA_CNTR'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pdaSealNo',name:'PDA_SEAL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pdaChassisNo',name:'PDA_샤시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transWrkIndictNo',name:'name48'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chkFlag',name:'name49'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinEdiType',name:'name50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryoutEdiType',name:'name51'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'name52'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinoutIntendNo',name:'name53'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqCd',name:'name54'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cmpstcrgKndCd',name:'name55'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpSeq1',name:'name56'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNoYn',name:'name57'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'name58'}},{T:1,N:'w2:column',A:{dataType:'text',id:'term',name:'name59'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offRtrnClsCd',name:'name60'}},{T:1,N:'w2:column',A:{id:'preInfoSndYn',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptArvWrkPlClsCd',name:'name62',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_CntrNoChangeInfo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'gridChkBox',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'컨테이너'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinoutClsCd',name:'I/O'}},{T:1,N:'w2:column',A:{dataType:'text',id:'socChkBox',name:'SOC확인'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sealNo',name:'SEALNO'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineCd',name:'LINE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'F/E'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'출도착지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'SZ'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'TP'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclIdCardNo',name:'차량ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclNo',name:'차량번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chassisNo',name:'샤시번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateinDth',name:'반출입일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinoutDthh',name:'반입예정일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWrkClsCd',name:'특이사항'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drvTelNo',name:'연락처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'onReqNo',name:'상차요청번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bookingNo',name:'부킹번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpSeq',name:'작업단계;순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'xrayLupTrgtYn',name:'검색기여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rettlClsCd',name:'검색기전반입여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rfGubun',name:'R/F'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lblock',name:'LBLOCK'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lbay',name:'LBAY'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lrow',name:'LROW'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ltier',name:'LTIER'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wt',name:'중량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portNm',name:'목적항구'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinEdiFlag',name:'반입EDI'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryoutEdiFlag',name:'반출EDI'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dummy',name:'정산여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpCd',name:'셔틀'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'종류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfClsCd',name:'자가'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSeq',name:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPathSeq',name:'wrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copinoResponse',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarNo',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarSeq',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqNo',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqSeq',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClsCd',name:'COPINO오류내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pdaCntrNo',name:'PDA_CNTR'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pdaSealNo',name:'PDA_SEAL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pdaChassisNo',name:'PDA_샤시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transWrkIndictNo',name:'name48'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chkFlag',name:'name49'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinEdiType',name:'name50'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryoutEdiType',name:'name51'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'name52'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinoutIntendNo',name:'name53'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqCd',name:'name54'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cmpstcrgKndCd',name:'name55'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpSeq1',name:'name56'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNoYn',name:'name57'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'name58'}},{T:1,N:'w2:column',A:{dataType:'text',id:'term',name:'name59'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offRtrnClsCd',name:'name60'}},{T:1,N:'w2:column',A:{dataType:'text',id:'preInfoSndYn',name:'name61'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptArvWrkPlClsCd',name:'name62'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfTransDemDt',name:'name63'}},{T:1,N:'w2:column',A:{dataType:'text',id:'realMchtClntNo',name:'name64'}},{T:1,N:'w2:column',A:{dataType:'text',id:'masterKey',name:'name65'}},{T:1,N:'w2:column',A:{dataType:'text',id:'leaseYn',name:'name66'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrWrkStpSeq',name:'name67'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'name68'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chassisEqCd',name:'name69'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlCd',name:'name70'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtClntNo',name:'name71'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNo',name:'name72'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellOdrNo',name:'name73'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dangerCd',name:'name74'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgsetNo',name:'name75'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drvNm',name:'name76'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'name77'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chassisChkYn',name:'name78'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'name79'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copCoClntNo',name:'name80'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drvEmpNo',name:'name81'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineClntNo',name:'name82'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfClsNm',name:'name83'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cxOdrNo',name:'name84'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrDsgYn',name:'name85'}},{T:1,N:'w2:column',A:{dataType:'text',id:'overHeight',name:'name86'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkIndictDth',name:'name87'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdMgntNo',name:'name88'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfSpotClsCd',name:'name89'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCntrNoYn',name:'name90'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transWrkRsltsSeq',name:'name91'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bondTransEndDt',name:'name92'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bondTransStDt',name:'name93'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpClsCd',name:'name94'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateoutDth',name:'name95'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfTransCoClntNm',name:'name96'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'name97'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfTransCoClntNo',name:'name98'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'name99'}},{T:1,N:'w2:column',A:{dataType:'text',id:'onReqGoodsSeq',name:'name100'}},{T:1,N:'w2:column',A:{dataType:'text',id:'socYn',name:'name101'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'name102'}},{T:1,N:'w2:column',A:{dataType:'text',id:'indvdlAlloccarYn',name:'name103'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdDueDt',name:'name104'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lctnDcsnYn',name:'name105'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNoChangeYn',name:'name106'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgLodeptCd',name:'name107'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'name108'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cargoProcMthdCd',name:'name109'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gatelogSndYn',name:'name110'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'name111'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bondZoneCd',name:'name112'}},{T:1,N:'w2:column',A:{dataType:'text',id:'c2ClntNo',name:'name113'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dryYn',name:'name114'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWtCondCd',name:'name115'}},{T:1,N:'w2:column',A:{dataType:'text',id:'overWidth',name:'name116'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cxClntNo',name:'name117'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptArvPreInfoSndYn',name:'name118'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateAtmtYn',name:'name119'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlClsCd',name:'name120'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ciOdrNo',name:'name121'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDoorCd',name:'name122'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gateInslYn',name:'name123'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptArvWrkPlCd',name:'name124'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'name125'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'name126'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mcomAssgnClsCd',name:'name127'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copinoAutoSndYn',name:'name128'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinGatelogNo',name:'name129'}},{T:1,N:'w2:column',A:{dataType:'text',id:'liVanTerm',name:'name130'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'name131'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shpCoClntNo',name:'name132'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'name133'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellLodeptCd',name:'name134'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trsNo',name:'name135'}},{T:1,N:'w2:column',A:{dataType:'text',id:'depotYn',name:'name136'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclNrmCd',name:'name137'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'name138'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'name139'}},{T:1,N:'w2:column',A:{dataType:'text',id:'overLength',name:'name140'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkLobranCd',name:'name141'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ciClntNo',name:'name142'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclShortNo',name:'name143'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hveqAtmtYn',name:'name144'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinoutPrgsStsCd',name:'name145'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgsetYn',name:'name146'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortCd',name:'name147'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNo',name:'name148'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drvRange',name:'name149'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclKndCd',name:'name150'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCondCd',name:'name151'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptArvBondZoneCd',name:'name152'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name153'}},{T:1,N:'w2:column',A:{id:'col2',name:'name154',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name155',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveGateinIntendInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inGrid',target:'data:json,{"id":"ds_outGrid","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_block',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_block',target:'data:json,{"id":"ds_block","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_block_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_chassisNoChangeInfo',action:'/ds.op.wrkrslts.cywrkrslts.ProcessChassisNumberChangeContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_chassisNoChangeInfo","key":"IN_DS1"},{"id":"ds_chassisNoChangeResult","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_chassisNoChangeResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_chassisNoChangeInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_containerSeqInfo',action:'/tn.os.odrrslts.odrrslts.RetrieveContainerSeqInformationCMD.do',method:'options',mediatype:'application/json',ref:'data:json,dma_cntrNoSeqInfo',target:'data:json,{"id":"ds_cntrNoSeqInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_containerSeqInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cntrNoChangeInfo',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveContainerNumberChangeInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_cntrNoChangeInfo',target:'data:json,{"id":"ds_cntrNoChangeInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cntrNoChangeInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_preInfoSndYn',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_preInfoSndYn',target:'data:json,{"id":"ds_preInfoSndYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_preInfoSndYn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_gateIn',action:'/ds.op.wrkrslts.cywrkrslts.ProcessGateinCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_outGrid","key":"IN_DS1"},{"id":"ds_transWrkIndictNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_transWrkIndictNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_gateIn_submitdone','ev:submiterror':'scwin.sbm_gateIn_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.op.wrkrslts.cywrkrslts.DeleteCarryInOutIntendInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_outGrid","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkpath',action:'/ds.op.wrkrslts.cywrkrslts.UpdateWorkPathCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inWrkpath',target:'data:json,{"id":"ds_outWrkpath","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkpath_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_managementItem',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveManagementItemCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inManagementItem',target:'data:json,{"id":"ds_outManagementItem","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_managementItem_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_managementItem1',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveManagementItemCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inManagementItem',target:'data:json,{"id":"ds_outManagementItem","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bay',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inBay',target:'data:json,{"id":"ds_outBay","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_row',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inRow',target:'data:json,{"id":"ds_outRow","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tier',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inTier',target:'data:json,{"id":"ds_outTier","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fullEmptyChangeInfo',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveFullEmptyChangeInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inFullEmptyChangeInfo',target:'data:json,{"id":"ds_outFullEmptyChangeInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fullEmptyChangeInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cntrPositionInfo',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveShippingWeightPositionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inCntrPositionInfo',target:'data:json,{"id":"ds_outCntrPositionInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cntrPositionInfo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pre_RowPosition = 0;
scwin.LOBRAN_CD = "";
scwin.GATE_INSL_YN = "";
scwin.HVEQ_ATMT_YN = "";
scwin.GATE_ATMT_YN = "";
scwin.PRE_INFO_SND_YN = "";
scwin.blnWrkPathChg = true; //C1,CS 오더, 컨테이너번호로 조회결과 없는경우 작업경로 변경 popup창 띄울지 여부
scwin.badChassisNo = false;
scwin.copinoSndYn = 0;
scwin.copinoAutoSndYn = 0;
scwin.copinoManualSndYn = 0; //COPINO 팝업 여부
scwin.copinoRowPosition = 0; //COPINO 팝업전송 하는 ROWPOSITION

scwin.hid_tlvehclNo = ""; // <!-- TL번호 --> 
scwin.hid_posnClsCd = ""; // <!--소속구분 -->
scwin.hid_eqCd = ""; // <!-- TL번호 --> 
scwin.hid_bondTransStDt = ""; // <!--보세운송시작일자 -->
scwin.hid_bondTransEndDt = ""; // <!-- 보세운송종료일자 --> 
scwin.hid_drvEmpNo = ""; // <!--기사사원번호 -->
scwin.hid_drvNm = ""; // <!-- 기사명 --> 
scwin.hid_drvTelNo = ""; // <!--기사전화번호 -->
scwin.hid_trsNo = ""; // <!-- TS번호 --> 
scwin.hid_vehclIdCardNo = ""; // <!--차량ID카드번호 -->
scwin.hid_chassisEqCd = ""; // <!-- 샤시장비번호 --> 
scwin.hid_chassisNo = ""; // <!--샤시번호 -->
scwin.hid_vehclKndCd = ""; // <!-- 차량종류코드 --> 
scwin.hid_vehclNrmCd = ""; // <!--차량규격코드 -->
scwin.hid_selfSpotClsCd = ""; // <!-- 자가SPOT차량구분 --> 
scwin.hid_copCoClntNo = ""; // <!--협력업체거래처번호 -->
scwin.processFlag = 0;
scwin.wrkPlCd = ""; //작업장
scwin.odrNo = ""; //오더번호
scwin.cntrNo = ""; //컨테이너번호
scwin.oldValue = "";
scwin.sortStatus = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.nowYYYYMMDD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.nowYYYYMMDDHH = WebSquare.date.getCurrentServerDate("yyyyMMddHH");

  // 세션정보
  scwin.loginId = $c.data.getMemInfo($p, "userId");
  scwin.sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn");
  scwin.params = $c.data.getParameter($p);
  scwin.wrkPlCd = scwin.params.wrkPlCd; //작업장
  scwin.odrNo = scwin.params.odrNo; //오더번호
  scwin.cntrNo = scwin.params.cntrNo; //컨테이너번호

  const codeOptions = [{
    grpCd: "OP197",
    compID: "lc_crryInOutCd,gr_gridView:crryinoutClsCd"
  }, {
    grpCd: "SD165",
    compID: "gr_gridView:cntrWrkClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "CarryInAndCarryOutInformationEBC",
    param2: "retrieveCntrSpecInfo",
    compID: "lc_cntrSpec"
  }];
  $c.data.setGauceUtil($p, codeOptions);
  if (scwin.wrkPlCd != "" && typeof scwin.wrkPlCd != "undefined") {
    ed_wrkPlCd.setValue(scwin.wrkPlCd);
    txt_odrNo.setValue(scwin.odrNo);
    txt_cntrNo.setValue(scwin.cntrNo);
    dma_block.set("sysCd", "WorkPlaceEachGoodsEBC");
    dma_block.set("queryId", "retrivecBlockList");
    dma_block.set("param1", ed_wrkPlCd.getValue());
    $c.sbm.execute($p, sbm_block);
  }
  if (scwin.wrkPlCd == "" || typeof scwin.wrkPlCd === "undefined") {
    $p.setTimeout(function () {
      ed_wrkPlCd.focus();
    }, {
      "delay": 100
    });
  }
};
scwin.sbm_block_submitdone = function (e) {
  if (scwin.wrkPlCd != "" && typeof scwin.wrkPlCd != "undefined") {
    scwin.wrkPlCd = "";
    scwin.f_retrieve("0");
    $p.setTimeout(function () {
      ed_wrkPlCd.focus();
    }, {
      "delay": 100
    });
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_queryList, null);
};

//-------------------------------------------------------------------------
// 컨테이너번호 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear2_onclick = function (e) {
  txt_cntrNo.setValue("");
  txt_cntrNo2.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve("1");
};
scwin.f_retrieve = async function (gubun) {
  scwin.badChassisNo = false;
  let ret1 = await $c.gus.cfValidate($p, [ed_wrkPlCd]); // 작업장
  if (!ret1) {
    return;
  }
  if (gubun == "1") {
    if ($c.util.isEmpty($p, txt_vehclNo.getValue()) && $c.util.isEmpty($p, txt_cntrNo.getValue()) && $c.util.isEmpty($p, txt_odrNo.getValue())) {
      let confirm = await $c.win.confirm($p, "조회 조건이 작업장 뿐일 경우는 오랜 시간이 소요됩니다. 그래도 검색하시겠습니까?");
      if (!confirm) {
        return;
      }
    }
  }
  var str_odrKndQry = "";
  var odrKndQry = DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR + "," + DsConstants.ODR_KND_CD_TS_ODR; // C1,CT

  if (txt_odrKndQry.getValue() == "1") {
    str_odrKndQry = odrKndQry;
  } else {
    str_odrKndQry = "";
  }
  dma_inGrid.set("odrKndQry", str_odrKndQry);
  dma_inGrid.set("gateInslYn", scwin.GATE_INSL_YN);
  dma_inGrid.set("hveqAtmtYn", scwin.HVEQ_ATMT_YN);
  dma_inGrid.set("gateAtmtYn", scwin.GATE_ATMT_YN);
  dma_inGrid.set("preInfoSndYn", scwin.PRE_INFO_SND_YN);
  dma_inGrid.set("gateinoutCls", "I");
  scwin.sortStatus = gr_gridView.getSortableStatus(); // sort 유지 테스트

  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  /*
      if (scwin.sortStatus.length != 0) {
          ds_outGrid.clearSort();
          var sIndex = "";
          var sOrder = "";
  
          for (var i = 0; i < scwin.sortStatus.length; i++) {
  
              sIndex = sIndex + scwin.sortStatus[i].colID + " ";
              sOrder = sOrder + scwin.sortStatus[i].sortOrder + " ";
          }
          var options = {};
          options.sortIndex = sIndex;
          options.sortOrder = sOrder;
  
          ds_outGrid.multisort(options);
      }
  */
  if (ds_outGrid.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    if (txt_cntrNo.getValue().length == 11) {
      dma_inWrkpath.set("wrkPlCd", ed_wrkPlCd.getValue());
      dma_inWrkpath.set("cntrNo", txt_cntrNo.getValue());
      $c.sbm.execute($p, sbm_wrkpath);
    }
  } else {
    for (var i = 0; i < ds_outGrid.getRowCount(); i++) {
      if (ds_outGrid.getCellData(i, 'xrayLupTrgtYn') == "1") {
        gr_gridView.setCellReadOnly(i, "rettlClsCd", false);
      } else {
        gr_gridView.setCellReadOnly(i, "rettlClsCd", true);
      }
    }
  }
  gr_gridView.setFocusedCell(0, 0);
  totalRows.setValue(ds_outGrid.getRowCount());
};
scwin.sbm_wrkpath_submitdone = function (e) {
  let rowCnt = ds_outWrkpath.getRowCount();
  if (ds_outWrkpath.getRowCount() == 1 && scwin.blnWrkPathChg) {
    scwin.f_workPathMod(ds_outWrkpath.getCellData(rowCnt - 1, 'odrNo'), ds_outWrkpath.getCellData(rowCnt - 1, 'cntrSeq'));
    scwin.blnWrkPathChg = false;
  } else if (ds_outWrkpath.getRowCount() > 1) {}
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  //    $c.gus.cfClearPairObj(pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case '1':
      if (cbx_selfCar.getValue() == "1") {
        return;
      }
      // 차량번호
      udc_vehclCd.cfCommonPopUp(scwin.udc_vehclCd_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "차량번호,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case '2':
      // 출도착지
      udc_dptArvWrkPlCd.cfCommonPopUp(scwin.udc_dptArvWrkPlCd_callBackFunc
      //                $c.gus.cfSetReturnValue(rtnList, ed_dptArvWrkPlCd, txt_dptArvWrkPlNm)		// XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "출도착지,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case '3':
      udc_lineCd.cfCommonPopUp(scwin.udc_lineCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case '4':
      udc_vsslCd.cfCommonPopUp(scwin.udc_vsslCd_callBackFunc
      //                $c.gus.cfSetReturnValue(rtnList, ed_vsslCd, txt_vsslNm)		// XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case '5':
      scwin.f_vehclSearch('T');
      break;
    case '6':
      // 작업장코드
      udc_wrkPlCd.setSelectId("retriveGateWrkPlCd");
      udc_wrkPlCd.ilCommonPopUp(function (ret) {
        $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, txt_wrkPlNm);
        scwin.udc_wrkPlCd_callBackFunc(ret);
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      break;
    case 'CS':
      // 샤샤
      pCode = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "chassisNo");
      if (pCode.length >= 4) pCode = pCode.substring(pCode.length - 4, pCode.length);
      pName = "";
      udc_wrkPlCdG1.setSelectId("retrieveChassis2");
      udc_wrkPlCdG1.ilCommonPopUp(function (ret) {
        scwin.udc_CS_callBackFunc(ret);
      }, pCode, pName, pClose, null, null, null, null, "TL", null, null, null, null, null, pAllSearch, null);
      break;
    case '7':
      scwin.f_eqCdSearch('T');
      break;
    default:
      break;
  }
};
scwin.udc_CS_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    if (rtnList[0] != "N/A") {
      if ((scwin.hid_posnClsCd == "W" || scwin.hid_posnClsCd == "J") && rtnList[9] != "J") {
        $c.win.alert($p, "당사소유차량(트랙터)에 대해서 당사 소유의 트레일러만 입력 가능 합니다.");
        ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", "");
        return false;
      } else if ((scwin.hid_posnClsCd == "W" || scwin.hid_posnClsCd == "J") && rtnList[9] == "J" && rtnList[1] == "협력11샤1111") {
        $c.win.alert($p, "당사소유차량(트랙터)에 대해서 협력11샤1111  입력 불가능 합니다.");
        ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", "");
        return false;
      }
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", rtnList[1]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisEqCd", rtnList[4]);

      //다른차량 연결상태 검사 및 물류장비코드 업데이트
      ds_chassisNoChangeResult.setData([]);
      dma_chassisNoChangeInfo.set('eqCd', ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'eqCd'));
      dma_chassisNoChangeInfo.set('logisLnkEqCd', ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisEqCd'));
      $c.sbm.execute($p, sbm_chassisNoChangeInfo);
    } else {
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", "");
      scwin.badChassisNo = true;
    }
  } else {
    ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", "");
    scwin.badChassisNo = true;
  }
};

//-------------------------------------------------------------------------
// function name : f_vehclSearch
// function desc : 차량조회
//-------------------------------------------------------------------------
scwin.f_eqCdSearch = function (bCloseFlag) {
  if ($c.util.isEmpty($p, bCloseFlag)) {
    bCloseFlag = "T";
  }
  var arrParam = new Array();
  var lobranCd = scwin.LOBRAN_CD;
  var v_vehclShortCd = "";
  v_vehclShortCd = txt_eqCd.getValue();
  var nowDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  if ($c.util.isEmpty($p, lobranCd) || lobranCd == null) {
    $c.gus.cfAlertMsg($p, "작업장을 먼저 선택해주세요.");
    return;
  } else if ($c.util.isEmpty($p, v_vehclShortCd) || v_vehclShortCd == null) {
    $c.gus.cfAlertMsg($p, "차량단축번호를  입력해주세요.");
    return;
  }
  arrParam0 = new Array(lobranCd, "", "", "C", nowDate, v_vehclShortCd, "", "", "GATEINOUT", "TR"); //검색조건
  arrParam1 = new Array("", bCloseFlag, "D"); //보세운송만료일자
  arrParam.push(arrParam0);
  arrParam.push(arrParam1);
  let opts = {
    id: "vehclSearch",
    popupName: "가용차량조회",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 700,
    title: "가용차량조회",
    callbackFn: "scwin.f_vehclSearch_callback"
  };

  // 팝업 호출 (프로젝트 팝업 규격에 맞게 openPopup 사용)
  $c.win.openPopup($p, "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05p3.xml", opts, arrParam).then(function (rtnList) {
    scwin.f_vehclSearch_callback(rtnList);
  });
};
scwin.f_vehclSearch_callback = async function (rtnList) {
  if (rtnList == null || rtnList[0][0] == null && rtnList[0] == "N/A") {
    txt_eqCd.setValue("");
    txt_eqNo.setValue("");
    return;
  }
  var firstList = new Array();
  for (var i = 0; i < rtnList.length; i++) {
    firstList = rtnList[0];

    //컨테이너는 트렉터만 배차 가능
    if (firstList[12] != "TR") {
      await $c.gus.cfAlertMsg($p, "컨테이너는 트렉터만 배차 가능합니다. \n\n트렉터 차량을 선택하세요.");
      txt_eqCd.setValue("");
      txt_eqNo.setValue("");
      return;
    }
    scwin.hid_eqCd = firstList[0];
    txt_eqNo.setValue(firstList[1]); // 차량번호
    txt_eqCd.setValue(firstList[2]); // 단축번호
    scwin.hid_bondTransStDt = firstList[3];
    scwin.hid_bondTransEndDt = firstList[4];
    scwin.hid_drvEmpNo = firstList[5];
    scwin.hid_drvNm = firstList[6];
    scwin.hid_drvTelNo = firstList[7];
    scwin.hid_trsNo = firstList[8];
    scwin.hid_vehclIdCardNo = firstList[9];
    scwin.hid_chassisEqCd = firstList[10];
    scwin.hid_chassisNo = firstList[11];
    scwin.hid_vehclKndCd = firstList[12];
    scwin.hid_vehclNrmCd = firstList[13];
    scwin.hid_selfSpotClsCd = firstList[14];
    scwin.hid_copCoClntNo = firstList[15];
    scwin.hid_posnClsCd = firstList[16];
  }
  return false;
};

//-------------------------------------------------------------------------
// udc_wrkPlCd : 작업장 팝업열기
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, '6', true);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, '6', false);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openPopUp('6', ed_wrkPlCd.getValue(), txt_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_wrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    ed_wrkPlCd.setValue(rtnList[0]); // 코드
    txt_wrkPlNm.setValue(rtnList[1]); // 명
    scwin.LOBRAN_CD = rtnList[2];
    scwin.GATE_INSL_YN = rtnList[4];
    scwin.HVEQ_ATMT_YN = rtnList[5];
    scwin.GATE_ATMT_YN = rtnList[6];
    scwin.PRE_INFO_SND_YN = rtnList[7];
  } else {
    ed_wrkPlCd.setValue(""); // 코드
    txt_wrkPlNm.setValue(""); // 명
    scwin.LOBRAN_CD = "";
    scwin.GATE_INSL_YN = "";
    scwin.HVEQ_ATMT_YN = "";
    scwin.GATE_ATMT_YN = "";
    scwin.PRE_INFO_SND_YN = "";
  }
  dma_block.set("sysCd", "WorkPlaceEachGoodsEBC");
  dma_block.set("queryId", "retrivecBlockList");
  dma_block.set("param1", ed_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_block);
};

//-------------------------------------------------------------------------
// udc_vehclCd : 차량번호 팝업열기
//-------------------------------------------------------------------------
scwin.udc_vehclCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_vehclShortCd, txt_vehclNo, '1', true);
};
scwin.udc_vehclCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_vehclNo, txt_vehclShortCd, '1', false);
};
scwin.udc_vehclCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', txt_vehclShortCd.getValue(), txt_vehclNo.getValue(), 'F', 'F');
};
scwin.udc_vehclCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    txt_vehclShortCd.setValue(rtnList[0]); // 코드
    txt_vehclNo.setValue(rtnList[1]); // 명
  } else {
    txt_vehclShortCd.setValue(""); // 코드
    txt_vehclNo.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// udc_dptArvWrkPlCd : 출도착지 팝업열기
//-------------------------------------------------------------------------
scwin.udc_dptArvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptArvWrkPlCd, txt_dptArvWrkPlNm, '2', true);
};
scwin.udc_dptArvWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_dptArvWrkPlNm, ed_dptArvWrkPlCd, '2', false);
};
scwin.udc_dptArvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_dptArvWrkPlCd.getValue(), txt_dptArvWrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_dptArvWrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    ed_dptArvWrkPlCd.setValue(rtnList[0]); // 코드
    txt_dptArvWrkPlNm.setValue(rtnList[1]); // 명
  } else {
    ed_dptArvWrkPlCd.setValue(""); // 코드
    txt_dptArvWrkPlNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// udc_lineCd : Line 팝업열기
//-------------------------------------------------------------------------
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, '3', true);
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, '3', false);
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'T');
};
scwin.udc_lineCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    ed_lineCd.setValue(rtnList[0]); // 코드
    txt_lineNm.setValue(rtnList[1]); // 명
  } else {
    ed_lineCd.setValue(""); // 코드
    txt_lineNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// udc_vsslCd : 선박 팝업열기
//-------------------------------------------------------------------------
scwin.udc_vsslCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, txt_vsslNm, '4', false);
};
scwin.udc_vsslCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_vsslNm, ed_vsslCd, '4', false);
};
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_vsslCd.getValue(), txt_vsslNm.getValue(), 'F', 'T');
};
scwin.udc_vsslCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList != "N/A") {
    ed_vsslCd.setValue(rtnList[0]); // 코드
    txt_vsslNm.setValue(rtnList[1]); // 명
  } else {
    ed_vsslCd.setValue(""); // 코드
    txt_vsslNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// function name : f_vehclSearch
// function desc : 차량조회
//-------------------------------------------------------------------------
scwin.f_vehclSearch = function (bCloseFlag) {
  scwin.pre_RowPosition = ds_outGrid.getRowPosition();
  bCloseFlag = bCloseFlag == null ? 'T' : bCloseFlag;
  let v_vehclShortCd = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "vehclNo");
  if (v_vehclShortCd.length >= 4) {
    v_vehclShortCd = v_vehclShortCd.substring(v_vehclShortCd.length - 4, v_vehclShortCd.length);
  }
  var arrParam = new Array();
  arrParam0 = new Array(scwin.LOBRAN_CD, "", "", "C", scwin.nowYYYYMMDD, v_vehclShortCd, "", "", "GATEINOUT", "TR"); //검색조건
  arrParam1 = new Array("", bCloseFlag, "D"); //보세운송만료일자
  arrParam.push(arrParam0);
  arrParam.push(arrParam1);
  let opts = {
    id: "vehclSearch",
    popupName: "가용차량조회",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 700,
    title: "가용차량조회",
    callbackFn: "scwin.f_vehclSearch_callBackFunc"
  };
  $c.win.openPopup($p, "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05p3.xml", opts, arrParam).then(function (rtnList) {
    scwin.f_vehclSearch_callBackFunc(rtnList);
  });
};
scwin.f_vehclSearch_callBackFunc = function (rtnList) {
  if (rtnList == null) {
    ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclNo", ""); // 코드
    ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclShortNo", ""); // 명
    return;
  } else {
    //TODO : ASIS 기준 rtnList[0] 만 사용하기 때문에 for 문 삭제 무방
    for (var i = 0; i < rtnList.length; i++) {
      //컨테이너는 트렉터만 배차 가능
      if (rtnList[0][12] != "TR") {
        $c.gus.cfAlertMsg($p, "컨테이너는 트렉터만 배차 가능합니다. \n\n트렉터 차량을 선택하세요.");
        ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclNo", "");
        ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclShortNo", "");
        return;
      }
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "eqCd", rtnList[0][0]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclNo", rtnList[0][1]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclShortNo", rtnList[0][2]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "bondTransStDt", rtnList[0][3]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "bondTransEndDt", rtnList[0][4]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "drvEmpNo", rtnList[0][5]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "drvNm", rtnList[0][6]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "drvTelNo", rtnList[0][7]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "trsNo", rtnList[0][8]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclIdCardNo", rtnList[0][9]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisEqCd", rtnList[0][10]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", rtnList[0][11]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclKndCd", rtnList[0][12]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "vehclNrmCd", rtnList[0][13]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "selfSpotClsCd", rtnList[0][14]);
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "copCoClntNo", rtnList[0][15]);
      scwin.hid_posnClsCd = rtnList[0][16];
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_allApply
// function desc : 차량번호 일괄적용
//-------------------------------------------------------------------------
scwin.f_allApply = async function () {
  var v_eqNo = txt_eqNo.getValue().trim();
  if (v_eqNo == null || $c.util.isEmpty($p, v_eqNo)) {
    $c.gus.cfAlertMsg($p, "차량번호를 조회하여 주십시오.");
    return;
  }
  if (ds_outGrid.getRowCount() > 0) {
    if (!$c.gus.cfIsNull($p, ed_gateInDth.getValue())) {
      let ret1 = await $c.gus.cfValidate($p, [ed_gateInDth]);
      if (!ret1) {
        return;
      }
      if (!$c.date.isDate($p, ed_gateInDth.getValue().substr(0, 8))) {
        $c.gus.cfAlertMsg($p, "날짜를 확인하여 주십시오.");
        ed_gateInDth.focus();
        return;
      }
      if (!$c.date.isDate($p, ed_gateInDth.getValue(), true)) {
        $c.gus.cfAlertMsg($p, "시분을 확인하십시오.");
        ed_gateInDth.focus();
        return;
      }
    }
    let confirm = await $c.win.confirm($p, "차량번호를 일괄적용 하시겠습니까?");
    if (confirm) {
      ds_outGrid.setBroadcast(false);
      for (var j = 0; j < ds_outGrid.getRowCount(); j++) {
        ds_outGrid.setCellData(j, "eqCd", scwin.hid_eqCd);
        ds_outGrid.setCellData(j, "vehclNo", v_eqNo);
        ds_outGrid.setCellData(j, "vehclShortNo", txt_eqCd.getValue());
        ds_outGrid.setCellData(j, "bondTransStDt", scwin.hid_bondTransStDt);
        ds_outGrid.setCellData(j, "bondTransEndDt", scwin.hid_bondTransEndDt);
        ds_outGrid.setCellData(j, "drvEmpNo", scwin.hid_drvEmpNo);
        ds_outGrid.setCellData(j, "drvNm", scwin.hid_drvNm);
        ds_outGrid.setCellData(j, "drvTelNo", scwin.hid_drvTelNo);
        ds_outGrid.setCellData(j, "trsNo", scwin.hid_trsNo);
        ds_outGrid.setCellData(j, "vehclIdCardNo", scwin.hid_vehclIdCardNo);
        ds_outGrid.setCellData(j, "chassisEqCd", scwin.hid_chassisEqCd);
        ds_outGrid.setCellData(j, "chassisNo", scwin.hid_chassisNo);
        ds_outGrid.setCellData(j, "vehclKndCd", scwin.hid_vehclKndCd);
        ds_outGrid.setCellData(j, "vehclNrmCd", scwin.hid_vehclNrmCd);
        ds_outGrid.setCellData(j, "selfSpotClsCd", scwin.hid_selfSpotClsCd);
        ds_outGrid.setCellData(j, "copCoClntNo", scwin.hid_copCoClntNo);
        ds_outGrid.setCellData(j, "gateinDth", ed_gateInDth.getValue());
      }
      ds_outGrid.setBroadcast(true, true);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, ["데이터", "조회"]);
    return;
  }
};

//-------------------------------------------------------------------------
// function name : f_chassisSearch
// function desc : 샤시조회
//-------------------------------------------------------------------------
scwin.f_chassisSearch = function (bCloseFlag) {
  bCloseFlag = bCloseFlag == null ? 'T' : bCloseFlag;
  pClose = "F";
  let pCode = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "chassisNo");
  let pName = "";
  if (pCode.length >= 4) {
    pCode = pCode.substring(pCode.length - 4, pCode.length);
  }
  scwin.f_openPopUp('CS', pCode, pName, bCloseFlag, 'T');
};
scwin.f_chassisSearch_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", rtnList[1]); // 코드
    ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisEqCd", rtnList[4]); // 명

    scwin.pre_chassisNo = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisNo');
    ds_chassisNoChangeResult.setData([]);
    dma_chassisNoChangeInfo.set("eqCd", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "eqCd"));
    dma_chassisNoChangeInfo.set("logisLnkEqCd", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "chassisEqCd"));
    $c.sbm.execute($p, sbm_chassisNoChangeInfo);
  } else {
    ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "chassisNo", "");
    scwin.badChassisNo = true;
  }
};
scwin.sbm_chassisNoChangeInfo_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_chassisNoChangeResult.getCellData(0, 'value') == "1") {
      let confirm = await $c.win.confirm($p, "해당 샤시장비는 이미 다른 차량에 등록되어 있습니다.\n계속 진행 하시겠습니까?");
      if (confirm) {
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'chassisChkYn', '1');
      } else {
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'chassisNo', scwin.pre_chassisNo);
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'chassisEqCd', scwin.pre_chassisEqCd);
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'chassisChkYn', '0');
      }
    }
  } else {
    ds_outGrid.setCellData(scwin.pre_RowPosition, 'chassisNo', scwin.pre_chassisNo);
    ds_outGrid.setCellData(scwin.pre_RowPosition, 'chassisEqCd', scwin.pre_chassisEqCd);
  }
};

//-------------------------------------------------------------------------
// function name : f_cntrSearch
// function desc : 컨테이너번호조회
//-------------------------------------------------------------------------
scwin.f_cntrSearch = function (bCloseFlag) {
  scwin.f_cntrSeqSearch();
  bCloseFlag = bCloseFlag == null ? 'T' : bCloseFlag;
  pClose = bCloseFlag;
  pClose = "F";
  var odrNo = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "odrNo");
  var wrkPlCd = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "wrkPlCd");
  var crryinoutIntendNo = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "crryinoutIntendNo");
  var cntrSizCd = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrSizCd");
  var cntrTypCd = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrTypCd");
  var cntrNo = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrNo");
  udc_wrkPlCd.setSelectId("retrieveGateInOutCntrNo");
  udc_wrkPlCd.cfCommonPopUp(scwin.udc_GateInOut_callBackFunc, "", "", pClose, null, "컨테이너 No,입항일시,SIZE,TYPE,F/E,COL6,COL7,COL8,COL9,Info" // Title순서	
  , "100,100,60,60,60,10,10,10,10,10" // 보여주는 각 컬럼들의 폭	
  , "6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
  , odrNo + "," + wrkPlCd + "," + crryinoutIntendNo + "," + cntrSizCd + "," + cntrTypCd // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "T" // 전체검색허용여부("F")
  , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  , null, null);
};
scwin.udc_GateInOut_callBackFunc = async function (rtnList) {
  if (rtnList == null || rtnList[0][0] == null && rtnList[0] == "N/A") {
    ds_outGrid.setCellData(scwin.pre_RowPosition, "cntrNo", scwin.pre_cntrNo);
    //            ds_outGrid.ColumnProp("gridChkBox", "Edit") = "true";
    return;
  }
  if (!$c.util.isEmpty($p, rtnList)) {
    if (rtnList[0] != "N/A") {
      dma_cntrNoChangeInfo.set("wrkPlCd", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "wrkPlCd"));
      dma_cntrNoChangeInfo.set("crryinoutClsCd", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "crryinoutClsCd"));
      dma_cntrNoChangeInfo.set("cntrNo", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrNo"));
      dma_cntrNoChangeInfo.set("odrNo", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "odrNo"));
      dma_cntrNoChangeInfo.set("cntrSeq", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrSeq"));
      dma_cntrNoChangeInfo.set("cntrNoYn", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrNoYn"));
      dma_cntrNoChangeInfo.set("wrkPathSeq", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "wrkPathSeq"));
      dma_cntrNoChangeInfo.set("wrkStpSeq", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "wrkStpSeq"));
      dma_cntrNoChangeInfo.set("gateinoutCls", "O");
      await $c.sbm.execute($p, sbm_cntrNoChangeInfo);
    }
  }
};
scwin.f_cntrSearch_callBackFunc = async function (rtnList) {
  console.log("### f_cntrSearch_callBackFunc : ");
  if (rtnList == null) {
    ds_outGrid.setCellData(ds_outGrid.getRowPosition(), "cntrNo", scwin.pre_cntrNo);
    //gr_gridView.setCellStyle(rowIndex, "gridChkBox", styleName, styleValue);
    return;
  } else {
    let row = ds_outGrid.getRowPosition();
    ds_outGrid.setCellData(row, "cntrNo", rtnList[0]);
    dma_cntrNoChangeInfo.set("wrkPlCd", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "wrkPlCd"));
    dma_cntrNoChangeInfo.set("crryinoutClsCd", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "crryinoutClsCd"));
    dma_cntrNoChangeInfo.set("cntrNo", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrNo"));
    dma_cntrNoChangeInfo.set("odrNo", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "odrNo"));
    dma_cntrNoChangeInfo.set("cntrSeq", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrSeq"));
    dma_cntrNoChangeInfo.set("cntrNoYn", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrNoYn"));
    dma_cntrNoChangeInfo.set("wrkPathSeq", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "wrkPathSeq"));
    dma_cntrNoChangeInfo.set("wrkStpSeq", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "wrkStpSeq"));
    dma_cntrNoChangeInfo.set("gateinoutCls", "O");
    await $c.sbm.execute($p, sbm_cntrNoChangeInfo);
  }
};
scwin.sbm_cntrNoChangeInfo_submitdone = async function (e) {
  var rowCnt = ds_cntrNoChangeInfo.getRowCount();
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrNoYn') == "1") {
      //컨테이너번호지정된 상태에서 컨테이너번호 수정인 경우(가배차)\
      if (rowCnt == 0 || ds_cntrNoChangeInfo.getCellData(0, 'odrCntrNoYn') == "0") {
        //컨테이너정보(TB_SD404) 또는 오더 컨테이너(TB_SD403)에 컨테이너 번호 미등록된 경우
        if (rowCnt == 0) {
          $c.gus.cfAlertMsg($p, "컨테이너정보에 없는 컨테이너 번호입니다.\n컨테이너 번호를 확인하십시요.");
        } else {
          $c.gus.cfAlertMsg($p, "오더에 미등록된 컨테이너 번호입니다.\n컨테이너 번호를 확인하십시요.");
        }
        ds_outGrid.setRowPosition(scwin.pre_RowPosition);
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
        gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
      } else if (ds_cntrNoChangeInfo.getCellData(0, 'crryinoutYn') > "0") {
        //반출입이 발생한 경우
        $c.gus.cfAlertMsg($p, "이미 반입 또는 반출된  컨테이너 번호입니다.\n컨테이너 번호를 확인하십시요.");
        ds_outGrid.setRowPosition(scwin.pre_RowPosition);
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
        gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
      } else if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'odrKndCd') != DsConstants.ODR_KND_CD_EMPTY_POSITION_ODR && ds_cntrNoChangeInfo.getCellData(0, 'odrCntrNoYn') == '1' && ds_outGrid.getCellData(scwin.pre_RowPosition, 'odrKndCd') != "C4") {
        //오더컨테이너 같은종류오더에 컨테이너 번호 중복인 경우
        $c.gus.cfAlertMsg($p, "같은 오더 또는 같은 종류의 오더에 같은 컨테이너번호가 있습니다.");
        ds_outGrid.setRowPosition(scwin.pre_RowPosition);
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
        gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
      } else if (scwin.pre_cntrNo != ds_cntrNoChangeInfo.getCellData(0, 'cntrNo')) {
        if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrSizCd') != ds_cntrNoChangeInfo.getCellData(0, 'cntrSizCd') || ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrTypCd') != ds_cntrNoChangeInfo.getCellData(0, 'cntrTypCd')) {
          $c.gus.cfAlertMsg($p, "컨테이너 SIZE, TYPE, F/E 가 일치하지 않습니다.\n컨테이너 번호를 확인하십시요.");
          ds_outGrid.setRowPosition(scwin.pre_RowPosition);
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
          gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
          return;
        }
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNoChangeYn', "1");
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', ds_cntrNoChangeInfo.getCellData(0, 'cntrNo'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'extdDueDt', ds_cntrNoChangeInfo.getCellData(0, 'extdDueDt'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'extdMgntNo', ds_cntrNoChangeInfo.getCellData(0, 'extdMgntNo'));
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'xrayLupTrgtYn', ds_cntrNoChangeInfo.getCellData(0, 'xrayLupTrgtYn'));
        }
        //ds_outGrid.setCellData(scwin.pre_RowPosition, 'impExpClsCd', ds_cntrNoChangeInfo.getCellData(0, 'impExpClsCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrSizCd', ds_cntrNoChangeInfo.getCellData(0, 'cntrSizCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrTypCd', ds_cntrNoChangeInfo.getCellData(0, 'cntrTypCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'fullEmptyClsCd', ds_cntrNoChangeInfo.getCellData(0, 'fullEmptyClsCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'commCd', ds_cntrNoChangeInfo.getCellData(0, 'commCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'sealNo', ds_cntrNoChangeInfo.getCellData(0, 'sealNo'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'dangerCd', ds_cntrNoChangeInfo.getCellData(0, 'dangerCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'temper', ds_cntrNoChangeInfo.getCellData(0, 'temper'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'wt', ds_cntrNoChangeInfo.getCellData(0, 'wt'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'overLength', ds_cntrNoChangeInfo.getCellData(0, 'overLength'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'overHeight', ds_cntrNoChangeInfo.getCellData(0, 'overHeight'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'overWidth', ds_cntrNoChangeInfo.getCellData(0, 'overWidth'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'mgsetYn', ds_cntrNoChangeInfo.getCellData(0, 'mgsetYn'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cargoProcMthdCd', ds_cntrNoChangeInfo.getCellData(0, 'cargoProcMthdCd'));
        //			ds_outGrid.setCellData(scwin.pre_RowPosition, 'bookingNo', ds_cntrNoChangeInfo.getCellData(0, 'bookingNo'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'blNo', ds_cntrNoChangeInfo.getCellData(0, 'blNo'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'mrn', ds_cntrNoChangeInfo.getCellData(0, 'mrn'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'msn', ds_cntrNoChangeInfo.getCellData(0, 'msn'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'hsn', ds_cntrNoChangeInfo.getCellData(0, 'hsn'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'portCd', ds_cntrNoChangeInfo.getCellData(0, 'portCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'term', ds_cntrNoChangeInfo.getCellData(0, 'term'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'leaseYn', ds_cntrNoChangeInfo.getCellData(0, 'leaseYn'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrSeq', ds_cntrNoChangeInfo.getCellData(0, 'cntrSeq'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'dptArvWrkPlCd', ds_cntrNoChangeInfo.getCellData(0, 'dptArvWrkPlCd'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'wrkStDt', ds_cntrNoChangeInfo.getCellData(0, 'wrkStDt'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'wrkStHh', ds_cntrNoChangeInfo.getCellData(0, 'wrkStHh'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'wrkEndDt', ds_cntrNoChangeInfo.getCellData(0, 'wrkEndDt'));
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'wrkEndHh', ds_cntrNoChangeInfo.getCellData(0, 'wrkEndHh'));
        scwin.pre_cntrNo = ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrNo');
      }
    } else if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrNoYn') == "0") {
      //컨테이너번호 미지정.(컨테이너 번호 등록인 경우)
      if (rowCnt == 0) {
        $c.gus.cfAlertMsg($p, "오더번호, 컨테이너순번 또는 오더의 품명을 확인하십시요.");
        ds_outGrid.setRowPosition(scwin.pre_RowPosition);
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
        gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
        return;
      }
      if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'odrKndCd') != DsConstants.ODR_KND_CD_EMPTY_POSITION_ODR && ds_cntrNoChangeInfo.getCellData(0, 'odrCntrNoYn') == "1" && ds_outGrid.getCellData(scwin.pre_RowPosition, 'odrKndCd') != "C4") {
        $c.gus.cfAlertMsg($p, "같은 오더 또는 같은 종류의 오더에 같은 컨테이너번호가 있습니다.");
        ds_outGrid.setRowPosition(scwin.pre_RowPosition);
        ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
        gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
        return;
      }
      if (ds_cntrNoChangeInfo.getCellData(0, 'cntrNo') == "") {
        //컨테이너정보(TB_SD404)에 컨테이너 번호 미등록된 경우
        if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN) {
          //반입인 경우
          //ON HIRE오더(C5) 인 경우(20060317) 또는 수출일반오더(C4) 이면서 당사영업(LS)인 경우 컨테이너번호 신규등록 가능(20060323)
          if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'odrKndCd') == DsConstants.ODR_KND_CD_ON_HIRE_ODR || ds_outGrid.getCellData(scwin.pre_RowPosition, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && ds_outGrid.getCellData(scwin.pre_RowPosition, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_SALES) {

            //컨테이너번호 신규등록 가능.
          } else {
            $c.gus.cfAlertMsg($p, "미 등록된 컨테이너 입니다. 컨테이너 번호를 확인하십시요.");
            ds_outGrid.setRowPosition(scwin.pre_RowPosition);
            gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
            return;
          }
          let confirm = await $c.win.confirm($p, "컨테이너 번호가 등록되어 있지 않습니다.\n컨테이너 번호를 등록 하시겠습니까?");
          if (confirm) {
            if (!scwin.cf_CheckCntrNo(ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrNo'))) {
              $c.gus.cfAlertMsg($p, "유효한 컨테이너 번호가 아닙니다. 컨테이너 번호를 확인하십시요.");
              ds_outGrid.setRowPosition(scwin.pre_RowPosition);
              gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
            }
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNoChangeYn', '2');
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'transCondCd', ds_cntrNoChangeInfo.getCellData(0, 'transCondCd'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrWtCondCd', ds_cntrNoChangeInfo.getCellData(0, 'cntrWtCondCd'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'destPortCd', ds_cntrNoChangeInfo.getCellData(0, 'destPortCd'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'portCd', ds_cntrNoChangeInfo.getCellData(0, 'portCd'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'blNo', ds_cntrNoChangeInfo.getCellData(0, 'blNo'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'mrn', ds_cntrNoChangeInfo.getCellData(0, 'mrn'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'msn', ds_cntrNoChangeInfo.getCellData(0, 'msn'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'hsn', ds_cntrNoChangeInfo.getCellData(0, 'hsn'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'bookingNo', ds_cntrNoChangeInfo.getCellData(0, 'bookingNo'));
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'arrvlportDtm', "999999999999"); //입항일시(임시) = (현재일시 PBC에서 setting)
          } else {
            ds_outGrid.setRowPosition(scwin.pre_RowPosition);
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
            gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
          }
        } else if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT) {
          //반출인 경우
          $c.gus.cfAlertMsg($p, "적재된 컨테이너가 없습니다.\n컨테이너 번호를 확인하십시요.");
          ds_outGrid.setRowPosition(scwin.pre_RowPosition);
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
          gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
        }
      } else if (ds_cntrNoChangeInfo.getCellData(0, 'cntrNo') != "") {
        //컨테이너정보(TB_SD404)에 컨테이너 번호 등록된 경우
        if (ds_cntrNoChangeInfo.getCellData(0, 'crryinoutYn') > 0) {
          //반출입이 발생한 경우
          $c.gus.cfAlertMsg($p, "이미 반입 또는 반출된  컨테이너 번호입니다.\n컨테이너 번호를 확인하십시요.");
          ds_outGrid.setRowPosition(scwin.pre_RowPosition);
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
          gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
        } else if (scwin.pre_cntrNo != ds_cntrNoChangeInfo.getCellData(0, 'cntrNo')) {
          //ON HIRE오더(C5)인 경우 컨테이너너 마스터(TB_SD404)에 소멸되지 않은  컨테이너 번호가 존재할 경우 에러!
          if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'odrKndCd') == DsConstants.ODR_KND_CD_ON_HIRE_ODR) {
            $c.gus.cfAlertMsg($p, "이미 컨테이너가 존재합니다.\n확인후 처리 바랍니다.");
            ds_outGrid.setRowPosition(scwin.pre_RowPosition);
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
            gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
            return;
          }
          if (ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrSizCd') != ds_cntrNoChangeInfo.getCellData(0, 'cntrSizCd') || ds_outGrid.getCellData(scwin.pre_RowPosition, 'cntrTypCd') != ds_cntrNoChangeInfo.getCellData(0, 'cntrTypCd')
          /*|| ds_outGrid.getCellData(scwin.pre_RowPosition, 'fullEmptyClsCd') != ds_cntrNoChangeInfo.getCellData(0, 'fullEmptyClsCd')*/) {
            $c.gus.cfAlertMsg($p, "컨테이너 SIZE, TYPE, F/E 가 일치하지 않습니다.\n컨테이너 번호를 확인하십시요.");
            ds_outGrid.setRowPosition(scwin.pre_RowPosition);
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNo', scwin.pre_cntrNo);
            gr_gridView.setFocusedCell(scwin.pre_RowPosition, 'cntrNo', true);
            return;
          }
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrNoChangeYn', '1');
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'transCondCd', ds_cntrNoChangeInfo.getCellData(0, 'transCondCd'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'cntrWtCondCd', ds_cntrNoChangeInfo.getCellData(0, 'cntrWtCondCd'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'destPortCd', ds_cntrNoChangeInfo.getCellData(0, 'destPortCd'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'portCd', ds_cntrNoChangeInfo.getCellData(0, 'portCd'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'blNo', ds_cntrNoChangeInfo.getCellData(0, 'blNo'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'mrn', ds_cntrNoChangeInfo.getCellData(0, 'mrn'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'msn', ds_cntrNoChangeInfo.getCellData(0, 'msn'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'hsn', ds_cntrNoChangeInfo.getCellData(0, 'hsn'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'bookingNo', ds_cntrNoChangeInfo.getCellData(0, 'bookingNo'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'arrvlportDtm', ds_cntrNoChangeInfo.getCellData(0, 'arrvlportDtm'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'extdDueDt', ds_cntrNoChangeInfo.getCellData(0, 'extdDueDt'));
          ds_outGrid.setCellData(scwin.pre_RowPosition, 'extdMgntNo', ds_cntrNoChangeInfo.getCellData(0, 'extdMgntNo'));
          if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
            ds_outGrid.setCellData(scwin.pre_RowPosition, 'xrayLupTrgtYn', ds_cntrNoChangeInfo.getCellData(0, 'xrayLupTrgtYn'));
          }
        }
      }
    }
  }
};
scwin.f_gateinProcess = async function (p_gubun) {
  let gridChkYn = 0;
  scwin.copinoAutoSndYn = 0;
  scwin.copinoManualSndYn = 0;
  ds_outGridSave.setData([]);
  for (var i = 0; i < ds_outGrid.getRowCount(); i++) {
    if (ds_outGrid.getCellData(i, 'gridChkBox') == "1") {
      gridChkYn++;
    }
    var iRow = i + 1;
    //G/I 에서 컨테이너번호가 미지정 되어 있고, 반출인 경우는 컨테이너번호 입력은 옵션.(나머지는 필수 입력)
    if (ds_outGrid.getCellData(i, 'gridChkBox') == "1" && $c.util.isEmpty($p, ds_outGrid.getCellData(i, 'cntrNo'))) {
      if (ds_outGrid.getCellData(i, 'cntrNoYn') == "0" && ds_outGrid.getCellData(i, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT) {} else {
        $c.win.alert($p, iRow + "번째 데이터에서 컨테이너번호는 필수 입력 항목입니다.");
        return;
      }
    }
    if (ds_outGrid.getCellData(i, 'gridChkBox') == "1" && ds_outGrid.getCellData(i, 'gateinDth').length != 12) {
      $c.win.alert($p, iRow + "번째 데이터에서 반입일시를 확인 하십시요.");
      return;
    }
    if (ds_outGrid.getCellData(i, 'gridChkBox') == "1" && ds_outGrid.getCellData(i, 'chkFlag') == "C") {
      $c.win.alert($p, iRow + "번째 항목은 이미 반입완료된 항목 입니다.");
      return;
    }

    //SOC컨테이너 체크 
    if (ds_outGrid.getCellData(i, 'gridChkBox') == "1" && (ed_wrkPlCd.getValue() == "6C01" || ed_wrkPlCd.getValue() == "6C24" || ed_wrkPlCd.getValue() == "6C08" || ed_wrkPlCd.getValue() == "6C09" || ed_wrkPlCd.getValue() == "6C16" || ed_wrkPlCd.getValue() == "6C26" || ed_wrkPlCd.getValue() == "4C02") && ds_outGrid.getCellData(i, 'socYn') == "1" && ds_outGrid.getCellData(i, 'odrKndCd') != DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
      if (ds_outGrid.getCellData(i, 'socChkBox') == "0") {
        $c.win.alert($p, iRow + "번째 항목은 SOC컨테이너이며 반입할 수 없습니다. SOC구분을 수정하시고 반입하세요.");
        return;
      }
    }
    if (p_gubun == "Auto" && ds_outGrid.getCellData(i, 'preInfoSndYn') == "1" && ds_outGrid.getCellData(i, 'dptArvWrkPlClsCd') != DsConstants.WRK_PL_CLS_CD_CY && ds_outGrid.getCellData(i, 'gridChkBox') == "1") {
      ds_outGrid.setCellData(i, 'copinoAutoSndYn', "1");
      scwin.copinoAutoSndYn = 1;
    }
    if (p_gubun == "Manual" && ds_outGrid.getCellData(i, 'preInfoSndYn') == "1" && ds_outGrid.getCellData(i, 'dptArvWrkPlClsCd') != DsConstants.WRK_PL_CLS_CD_CY && ds_outGrid.getCellData(i, 'gridChkBox') == "1") {
      scwin.copinoManualSndYn++;
      scwin.copinoRowPosition = i;
    }

    //COPINO 팝업전송인 경우 두가지 이상 선택 불가.+출발작업장이 코피노 전송여부인지 체크
    if (p_gubun == "Manual" && ds_outGrid.getCellData(i, 'dptArvWrkPlClsCd') == "6M14" && ds_outGrid.getCellData(i, 'selfClsCd') != DsConstants.SELF_CLS_CD_SELF_CRRYOUT && ds_outGrid.getCellData(i, 'gridChkBox') == "1") {
      var arvWrkPlCd = ds_outGrid.getCellData(i, "dptArvWrkPlCd");
      dma_preInfoSndYn.set("sysCd", "StationEachRailroadResultsEBC");
      dma_preInfoSndYn.set("queryId", "RetrievePreInfoSndYnForJSP");
      dma_preInfoSndYn.set("param1", arvWrkPlCd);
      $c.sbm.execute($p, sbm_preInfoSndYn);
    }
  }
  if (p_gubun == "Auto" && scwin.copinoAutoSndYn == 0) {
    $c.gus.cfAlertMsg($p, "COPINO 전송 대상이 없습니다.");
    return;
  }
  if (p_gubun == "Manual") {
    if (gridChkYn > 1) {
      $c.gus.cfAlertMsg($p, "M/S인 경우 한건만 선택 할 수 있습니다.");
      return;
    }
    if (scwin.copinoManualSndYn == 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항중 COPINO 전송대상이 포함되어 있지 않습니다.");
      return;
    }
  }
  if (gridChkYn == 0) {
    $c.gus.cfAlertMsg($p, "선택된 사항이 없습니다.");
    return;
  }
  if (ds_outGrid.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "선택된 사항이 없습니다.");
  } else {
    let confirm = await $c.win.confirm($p, "Gate In 처리 하시겠습니까?");
    if (confirm) {
      $c.sbm.execute($p, sbm_gateIn);
    }
  }
};
scwin.sbm_preInfoSndYn_submitdone = function (e) {
  if (ds_preInfoSndYn.getCellData(0, "code") == "1") {
    scwin.copinoManualSndYn++;
    scwin.copinoRowPosition = i;
  }
};
scwin.sbm_gateIn_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_outGrid.getCellData(scwin.copinoRowPosition, 'preInfoSndYn') == "1" && ds_outGrid.getCellData(scwin.copinoRowPosition, 'dptArvWrkPlClsCd') != DsConstants.WRK_PL_CLS_CD_CY && scwin.copinoManualSndYn == 1) {
      var copinoWrkIndictNo = ds_outGrid.getCellData(scwin.copinoRowPosition, 'transWrkIndictNo');
      if ($c.util.isEmpty($p, copinoWrkIndictNo)) {
        copinoWrkIndictNo = ds_transWrkIndictNo.getCellData(0, 'value');
      }
      scwin.f_crryInOutEDI(true, false, false, scwin.copinoRowPosition, false, copinoWrkIndictNo);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
    }

    //COPINO 팝업전송인 경우 두가지 이상 선택 불가.+출발작업장이 코피노 전송여부인지 체크
    if (ds_outGrid.getCellData(scwin.copinoRowPosition, 'dptArvWrkPlClsCd') == "6M14" && ds_outGrid.getCellData(scwin.copinoRowPosition, 'selfClsCd') != DsConstants.SELF_CLS_CD_SELF_CRRYOUT && scwin.copinoManualSndYn == 1) {
      var copinoWrkIndictNo = ds_outGrid.getCellData(scwin.copinoRowPosition, 'transWrkIndictNo');
      if ($c.util.isEmpty($p, copinoWrkIndictNo)) {
        copinoWrkIndictNo = ds_transWrkIndictNo.getCellData(0, 'value');
      }
      scwin.f_crryInOutEDI(true, false, false, scwin.copinoRowPosition, false, copinoWrkIndictNo);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
    }
    scwin.f_retrieve('0');
  }
};

//-------------------------------------------------------------------------
// 할인할증등록
//-------------------------------------------------------------------------
scwin.btn_dcsn_onclick = function (e) {
  var row = ds_outGrid.getRowPosition();
  var len = ds_outGrid.getCellData(row, "vehclNo").length;
  let src = "/ui/ds/op/wrkrslts/transwrkrslts/op_304_03_01b.xml";
  let menuNm = "운송할인할증등록";
  let menuId = "op_304_03_01b";
  paramObj = {};
  paramObj = {
    transWrkIndictNo: ds_outGrid.getCellData(row, "transWrkIndictNo"),
    lobranCd: ds_outGrid.getCellData(row, "wrkLobranCd"),
    wrkStDt: ds_outGrid.getCellData(row, "dptDt"),
    vehclNo: ds_outGrid.getCellData(row, "vehclNo"),
    vehclNoCd: ds_outGrid.getCellData(row, "vehclNo").substring(len - 4, len),
    eqCd: ds_outGrid.getCellData(row, "eqCd")
  };
  if (ds_outGrid.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  $c.win.openMenu($p, menuNm, src, menuId, paramObj);
};

//-------------------------------------------------------------------------
// 차량번호변경
//-------------------------------------------------------------------------
scwin.btn_vehclNoOpen_onclick = function (e) {
  var row = ds_outGrid.getRowPosition();
  var data = {
    paramTitle: "차량변경등록",
    transWrkIndictNo: ds_outGrid.getCellData(row, "transWrkIndictNo"),
    transRsltsSeq: ds_outGrid.getCellData(row, "transWrkRsltsSeq"),
    eqCd: ds_outGrid.getCellData(row, "eqCd"),
    vehclNo: ds_outGrid.getCellData(row, "vehclNo"),
    odrNo: ds_outGrid.getCellData(row, "odrNo"),
    cntrSeq: ds_outGrid.getCellData(row, "cntrSeq"),
    wrkPathSeq: ds_outGrid.getCellData(row, "wrkPathSeq"),
    wrkStpSeq: ds_outGrid.getCellData(row, "wrkStpSeq"),
    cntrNo: ds_outGrid.getCellData(row, "cntrNo"),
    wrkStpNm: "",
    cntrBulkDiv: "C",
    callbackFn: scwin.f_vehclNoOpen_callBackFunc
  };
  var opts = {
    id: "smpPop",
    popupName: "차량변경등록화면",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,

    title: "Win pop" //Layer pop
    ,

    width: 800,
    height: 370
  };
  if ($c.util.isEmpty($p, ds_outGrid.getCellData(row, "transWrkIndictNo"))) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["조회한 DATA"]);
    return;
  }
  $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_05p.xml", opts, data);
};

//-------------------------------------------------------------------------
// 출력(상차/하차 지시서 인쇄)
//-------------------------------------------------------------------------
scwin.btn_ozprint_onclick = async function (e) {
  var row = ds_outGrid.getRowPosition();
  var check = ds_outGrid.getCellData(row, "gridChkBox");
  var totRow = ds_outGrid.getRowCount();
  var crryinoutIntendNo = "";
  for (i = 0; i < totRow; i++) {
    check = ds_outGrid.getCellData(i, "gridChkBox");
    if (check == "1") {
      crryinoutIntendNo = crryinoutIntendNo + "TO_CHAR(" + ds_outGrid.getCellData(i, "crryinoutIntendNo") + "),";
    }
  }
  crryinoutIntendNo = crryinoutIntendNo.substring(0, crryinoutIntendNo.length - 1);
  if (crryinoutIntendNo.length == 0) {
    $c.gus.cfAlertMsg($p, "선택된 항목이 없습니다.");
    return;
  }
  let odiName = "op_301_01_05r";
  let reportFile = "/ds/op/wrkplan/transwrkplan/op_301_01_05r.ozr";
  let mode = "print";
  let data = {
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiName: odiName,
    reportName: reportFile,
    odiParam: {
      crryinoutIntendNo: crryinoutIntendNo
    },
    viewerParam: {
      viewer: 100,
      // 배율 설정
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      mode: mode
    },
    formParam: {}
  };
  let opts = {
    type: 'viewer',
    printMode: 'view',
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf',
    exportMode: 'view'
  };
  $c.ext.printOzReport($p, data, opts);
};

//-------------------------------------------------------------------------
// 작업경로 변경 팝업
//-------------------------------------------------------------------------
scwin.btn_change_onclick = function (e) {
  let odrNo = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "odrNo");
  let cntrSeq = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrSeq");
  scwin.f_workPathMod(odrNo, cntrSeq);
};
scwin.f_workPathMod = function (odrNo, cntrSeq) {
  var data = new Array(odrNo, cntrSeq);
  var opts = {
    id: "smpPop",
    popupName: "작업경로상세정보변경(컨테이너)",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,

    title: "Win pop" //Layer pop
    ,

    width: 1200,
    height: 750
  };
  let pURL = DsConstants.URL_CONTAINER_WORK_PATH_DETAIL_CHANGE_POPUP;
  $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_26p.xml", opts, data).then(function (rtnList) {
    scwin.f_workPathMod_callBackFunc(rtnList);
  });
};
scwin.f_workPathMod_callBackFunc = function () {
  scwin.f_retrieve('0');
};

//-------------------------------------------------------------------------
// function name : f_crryInOutEDI
// function desc : 반출입예정정보EDI등록
//-------------------------------------------------------------------------
scwin.btn_crryInOutEDI_onclick = function (e) {
  // f_crryInOutEDI(true, false, false, copinoRowPosition, false, copinoWrkIndictNo);
  scwin.f_crryInOutEDI(true, false, false, ds_outGrid.getRowPosition(), false, '');
};
scwin.f_crryInOutEDI = function (bAlertFlag, bSaveFlag, bTransferFlag, row, bDeleteFlag, transWrkIndictNo) {
  if (ds_outGrid.getRowCount() == 0) {
    return;
  }
  if (ds_outGrid.getCellData(row, "chkFlag") != "C" && scwin.copinoManualSndYn == "0") {
    $c.gus.cfAlertMsg($p, "미처리된 항목입니다. 처리된 항목만 전송 할 수 있습니다.");
    return;
  }
  if (ds_outGrid.getCellData(row, "crryinEdiType") == "N" && ds_outGrid.getCellData(row, "crryoutEdiType") == "N") {
    $c.gus.cfAlertMsg($p, "EDI전송 대상이 아닙니다..");
    return;
  }
  if ($c.util.isEmpty($p, ds_outGrid.getCellData(row, "vehclNo"))) {
    if (bAlertFlag) {
      $c.gus.cfAlertMsg($p, "운송차량이 없습니다");
    }
    return false;
  }
  var dptWrkPlCd = "";
  var arvWrkPlCd = "";
  var dptWrkPlNm = "";
  var arvWrkPlNm = "";
  if (ds_outGrid.getCellData(row, 'crryinoutClsCd') == "I") {
    dptWrkPlCd = ds_outGrid.getCellData(row, "dptArvWrkPlCd");
    arvWrkPlCd = ds_outGrid.getCellData(row, "wrkPlCd");
    dptWrkPlNm = ds_outGrid.getCellData(row, "wrkPlNm");
    arvWrkPlNm = txt_wrkPlNm.getValue();
  } else if (ds_outGrid.getCellData(row, 'crryinoutClsCd') == "O") {
    dptWrkPlCd = ds_outGrid.getCellData(row, "wrkPlCd");
    arvWrkPlCd = ds_outGrid.getCellData(row, "dptArvWrkPlCd");
    dptWrkPlNm = txt_wrkPlNm.getValue();
    arvWrkPlNm = ds_outGrid.getCellData(row, "wrkPlNm");
  }
  if ($c.util.isEmpty($p, transWrkIndictNo)) {
    transWrkIndictNo = ds_outGrid.getCellData(row, "transWrkIndictNo");
  }
  if ($c.util.isEmpty($p, transWrkIndictNo) || transWrkIndictNo == null) {
    transWrkIndictNo = ds_transWrkIndictNo.getCellData(0, 'value');
  }
  var arrParam = new Array();
  arrParam[0] = new Array("1" //조회구분 ("" : 운송작업지시, "1" : 반출입)
  , transWrkIndictNo, ds_outGrid.getCellData(row, "odrNo"), ds_outGrid.getCellData(row, "cntrSeq"), ds_outGrid.getCellData(row, "wrkPathSeq"), ds_outGrid.getCellData(row, "wrkStpSeq"), ds_outGrid.getCellData(row, "vehclShortNo"), ds_outGrid.getCellData(row, "vehclNo"), ds_outGrid.getCellData(row, "vehclIdCardNo"), ds_outGrid.getCellData(row, "wrkStDt"), ds_outGrid.getCellData(row, "wrkEndDt"), ds_outGrid.getCellData(row, "cntrNo"), dptWrkPlCd, arvWrkPlCd, dptWrkPlNm, arvWrkPlNm, ds_outGrid.getCellData(row, "crryoutEdiType"), ds_outGrid.getCellData(row, "crryinEdiType"));
  let data = {
    crryoutEdiType: ds_outGrid.getCellData(row, "crryoutEdiType"),
    crryinEdiType: ds_outGrid.getCellData(row, "crryinEdiType")
  };
  arrParam[1] = new Array(transWrkIndictNo, ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "vehclNo"), ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "vehclIdCardNo"), ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "drvNm"), ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "drvTelNo"), "", "", ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "gateinDth").substring(0, 8), ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "gateinDth").substring(8, 12), ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "vehclShortNo"), ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "eqCd"));
  data.arrParam = arrParam;
  var opts = {
    id: "smpPop",
    popupName: "반출입정보EDI등록",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,

    title: "Win pop" //Layer pop
    ,

    width: 1000,
    height: 950
  };
  $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_21p.xml", opts, data).then(function (rtnList) {
    scwin.f_crryInOutEDI_callBackFunc(rtnList);
  });
};
scwin.f_crryInOutEDI_callBackFunc = function () {};
scwin.btn_saveAuto_onclick = function (e) {
  scwin.f_gateinProcess('Auto');
};
scwin.btn_SaveManual_onclick = function (e) {
  scwin.f_gateinProcess('Manual');
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_gateinProcess('');
};
scwin.f_intendPop_callBackFunc = function () {};

//-------------------------------------------------------------------------
// 예정정보 삭제
//-------------------------------------------------------------------------
scwin.btn_delete_onclick = async function (e) {
  var gridChkYn = 0;
  for (var i = 0; i < ds_outGrid.getRowCount(); i++) {
    if (ds_outGrid.getCellData(i, 'gridChkBox') == "1") {
      gridChkYn++;
    }

    //자가의 경우만 삭제가 가능
    if (ds_outGrid.getCellData(i, 'gridChkBox') == "1" && !(ds_outGrid.getCellData(i, 'selfClsCd') == 'JE')) {
      $c.win.alert($p, '자가운송의 경우에만 예정정보 삭제가 가능합니다.');
      return;
    }
  }
  if (gridChkYn == 0) {
    $c.gus.cfAlertMsg($p, "선택된 사항이 없습니다.");
    return;
  }
  let confirm = await $c.win.confirm($p, "삭제된 예정정보는 복구할 수 없습니다. 반출입예정정보를 삭제하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_delete);
  }
};
scwin.sbm_delete_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
  scwin.f_retrieve('0');
};

//-------------------------------------------------------------------------
// function name : f_RetrieveOdrNo
// function desc : 컨테이너오더정보조회
//-------------------------------------------------------------------------
scwin.f_retrieveOdrNo = async function () {
  let src = "";
  let menuNm = "";
  let menuId = "1111";
  var v_odrNo = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "odrNo");
  src = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
  menuNm = "컨테이너오더";
  menuId = "sd_402_01_11t";
  var paramObj = {};
  paramObj = {
    odrNo: v_odrNo,
    linkPage: "odrList"
  };
  $c.win.openMenu($p, menuNm, src, menuId, paramObj);
};

//-------------------------------------------------------------------------
// function name : f_RetrieveCntrNo
// function desc : 컨테이너 화물추적
//-------------------------------------------------------------------------   
scwin.f_retrieveCntrNo = function () {
  let src = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml";
  let menuNm = "컨테이너 화물추적";
  let menuId = "as_102_01_02b";
  paramObj = {};
  paramObj = {
    cntrNo: ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrNo")
  };
  $c.win.openMenu($p, menuNm, src, menuId, paramObj);
};

//-------------------------------------------------------------------------
// function name : f_RetrieveCrryinout
// function desc : 반출입정보 수정
//-------------------------------------------------------------------------   
scwin.f_retrieveCrryinout = function () {
  let src = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_17b.xml";
  let menuNm = "반출입 정보 수정";
  let menuId = "op_301_01_17b";
  paramObj = {};
  paramObj = {
    lobranCd: scwin.LOBRAN_CD,
    wrkPlCd: ed_wrkPlCd.getValue(),
    cntrNo: ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "cntrNo"),
    odrNo: ds_outGrid.getCellData(ds_outGrid.getRowPosition(), "odrNo")
  };
  $c.win.openMenu($p, menuNm, src, menuId, paramObj);
};

//-------------------------------------------------------------------------
// function name : f_customFormatter
// function desc : Grid 내 Column 의 Value 를 Decode 해서 Return 한다.
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = gr_gridView.getColumnID(colIndex);
  let data1 = "";
  let data2 = "";
  let rtnVal = "";
  if (columnId == "xrayLupTrgtYn") {
    rtnVal = $c.gus.decode($p, data, "1", "Y", "N");
  } else if (columnId == "crryoutEdiFlag") {
    data = ds_outGrid.getCellData(rowIndex, "crryoutEdiFlag");
    data2 = ds_outGrid.getCellData(rowIndex, "crryoutEdiType");
    rtnVal = $c.gus.decode($p, data, "", "미등록", "3", "미전송", "1", "전송완료", "0", "전송대기", "5", "필수항목오류", "") + $c.gus.decode($p, data, "CO", "(COPINO)", "CD", "(COPI_CODECO)", "");
  } else if (columnId == "crryinEdiFlag") {
    data = ds_outGrid.getCellData(rowIndex, "crryinEdiFlag");
    data2 = ds_outGrid.getCellData(rowIndex, "crryinEdiType");
    rtnVal = $c.gus.decode($p, data, "", "미등록", "3", "미전송", "1", "전송완료", "0", "전송대기", "5", "필수항목오류", "") + $c.gus.decode($p, data2, "CO", "(COPINO)", "CD", "(COPI_CODECO)", "");
  } else if (columnId == "reqClsCd") {
    data2 = ds_outGrid.getCellData(rowIndex, "reqClsCd");
    rtnVal = $c.gus.decode($p, data2, "A", "지정", "B", "미지정", "C", "지정(범위)", "D", "첫배차");
  }
  return rtnVal;
};

//-------------------------------------------------------------------------
// function name : f_onToolTip
// function desc : Grid 내 특정 Column 에 ToolTip 을 Display 한다.
//-------------------------------------------------------------------------
scwin.f_onToolTip = function (rowIndex, colIndex, label, isOverflow, type) {
  var value = "";
  var id = gr_gridView.getColumnID(colIndex);
  if (id == 'cntrSizCd') {
    value = "더블클릭 - 컨테이너화물추적";
  }
  if (id == 'cntrTypCd') {
    if (ds_outGrid.getCellData(rowIndex, 'cntrTypCd') == "RF") {
      value = "냉동컨테이너등록";
    }
  }
  if (id == 'lineCd') {
    if (ds_outGrid.getCellData(rowIndex, 'chkFlag') == "C") {
      value = "더블클릭 - 반출입정보 수정";
    }
  }
  if (id == 'odrNo') {
    value = "더블클릭 - 컨테이너 오더정보 조회";
  }
  return value;
};

// 그리드 셀 원 클릭 이벤트
scwin.gr_gridView_oncellclick = function (rowIndex, columnIndex, columnId) {
  let colid = columnId;
  gr_gridView.setCellReadOnly(rowIndex, "cntrNo", false);
  gr_gridView.setCellReadOnly(rowIndex, "sealNo", false);
  gr_gridView.setCellReadOnly(rowIndex, "gateinDth", false);
  gr_gridView.setCellReadOnly(rowIndex, "chassisNo", false);
  if (colid != "rettlClsCd") {
    gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", false);
  }
  gr_gridView.setCellReadOnly(rowIndex, "lblock", false);
  gr_gridView.setCellReadOnly(rowIndex, "lbay", false);
  gr_gridView.setCellReadOnly(rowIndex, "lrow", false);
  gr_gridView.setCellReadOnly(rowIndex, "ltier", false);
  if (colid == "cntrNo") {
    //컨테이너번호가 미등록 되어 있거나, 셔틀이 아니고 반출이고, 가배차이고, C2오더(수입일반오더)인 경우 컨테이너 번호 수정 가능

    if (ds_outGrid.getCellData(rowIndex, 'chkFlag') != "C" && ds_outGrid.getCellData(rowIndex, 'cntrNoYn') == "0" && ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN || ds_outGrid.getCellData(rowIndex, 'selfClsCd') != DsConstants.SELF_CLS_CD_SELF_CRRYOUT && ds_outGrid.getCellData(rowIndex, 'wrkStpCd') != DsConstants.WRK_STP_CD_SHUTTLE && ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(rowIndex, 'indvdlAlloccarYn') == DsConstants.INDVDL_ALLOCCAR_TEMPORARY && ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      gr_gridView.setCellReadOnly(rowIndex, "cntrNo", false);
    } else {
      gr_gridView.setCellReadOnly(rowIndex, "cntrNo", true);
    }

    //셔틀이 아니고 반출이고, 가배차이고, C2오더(수입일반오더)인 경우 컨테이너 번호 팝업조회
    if (ds_outGrid.getCellData(rowIndex, 'selfClsCd') != DsConstants.SELF_CLS_CD_SELF_CRRYOUT && ds_outGrid.getCellData(rowIndex, 'wrkStpCd') != DsConstants.WRK_STP_CD_SHUTTLE && ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(rowIndex, 'indvdlAlloccarYn') == DsConstants.INDVDL_ALLOCCAR_TEMPORARY && ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      var info = {
        inputType: "textImage"
      };
      gr_gridView.setCellInputType(rowIndex, "cntrNo", info);
    } else {
      var info = {
        inputType: "text"
      };
      gr_gridView.setCellInputType(rowIndex, "cntrNo", info);
    }
  } else if (colid == "vehclNo" || colid == "chassisNo") {
    //오더유형(자가구분)이 자가반출("JE") 인 경우 차량 번호 팝업X, 샤시번호 입력불가
    if (ds_outGrid.getCellData(rowIndex, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {
      gr_gridView.setCellReadOnly(rowIndex, "chassisNo", true);
    } else {
      gr_gridView.setCellReadOnly(rowIndex, "chassisNo", false);
    }
  } else if (colid == "rettlClsCd") {
    //검색기 대상인경우만 검색기전반입 체크 가능.
    if (ds_outGrid.getCellData(rowIndex, 'xrayLupTrgtYn') == "1") {
      gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", false);
    } else {
      ds_outGrid.setCellData(rowIndex, "rettlClsCd", "0");
      gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", true);
    }
  }

  //block, bay, row, tier 변경
  var v_wrkPlCd = ds_outGrid.getCellData(rowIndex, "wrkPlCd");
  var v_block = ds_outGrid.getCellData(rowIndex, "lblock");
  var v_bay = ds_outGrid.getCellData(rowIndex, "lbay");
  var v_row = ds_outGrid.getCellData(rowIndex, "lrow");
  var v_tier = ds_outGrid.getCellData(rowIndex, "ltier");
  if (colid == "lblock") {} else if (colid == "lbay") {
    ds_outBay.setData([]);
    ds_outRow.setData([]);
    ds_outTier.setData([]);
    if (ds_outGrid.getCellData(rowIndex, 'lblock') == "") return;
    dma_inBay.set("sysCd", "WorkPlaceEachGoodsEBC");
    dma_inBay.set("queryId", "retrivecBayList");
    dma_inBay.set("param1", v_wrkPlCd);
    dma_inBay.set("param2", v_block);
    $c.sbm.execute($p, sbm_bay);
  } else if (colid == "lrow") {
    ds_outRow.setData([]);
    ds_outTier.setData([]);
    if (ds_outGrid.getCellData(rowIndex, 'lbay') == "") return;
    dma_inRow.set("sysCd", "WorkPlaceEachGoodsEBC");
    dma_inRow.set("queryId", "retrivecRowList");
    dma_inRow.set("param1", v_wrkPlCd);
    dma_inRow.set("param2", v_block);
    dma_inRow.set("param3", v_bay);
    $c.sbm.execute($p, sbm_row);
  } else if (colid == "ltier") {
    ds_outTier.setData([]);
    if (ds_outGrid.getCellData(rowIndex, 'lrow') == "") return;
    dma_inTier.set("sysCd", "WorkPlaceEachGoodsEBC");
    dma_inTier.set("queryId", "retrivecTierList");
    dma_inTier.set("param1", v_wrkPlCd);
    dma_inTier.set("param2", v_block);
    dma_inTier.set("param3", v_bay);
    dma_inTier.set("param4", v_row);
    dma_inTier.set("param5", "GATEIN");
    $c.sbm.execute($p, sbm_tier);
  }
  if (ds_outGrid.getCellData(rowIndex, 'chkFlag') == "C" || ds_outGrid.getCellData(rowIndex, 'gridChkBox') == "1") {
    gr_gridView.setCellReadOnly(rowIndex, "cntrNo", true);
    gr_gridView.setCellReadOnly(rowIndex, "sealNo", true);
    gr_gridView.setCellReadOnly(rowIndex, "gateinDth", true);
    gr_gridView.setCellReadOnly(rowIndex, "chassisNo", true);
    gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", true);
    gr_gridView.setCellReadOnly(rowIndex, "lblock", true);
    gr_gridView.setCellReadOnly(rowIndex, "lbay", true);
    gr_gridView.setCellReadOnly(rowIndex, "lrow", true);
    gr_gridView.setCellReadOnly(rowIndex, "ltier", true);
  }
  if (columnId == "vehclNo") {
    if (ds_outGrid.getCellData(rowIndex, "wrkStpCd") == "0001") {
      gr_gridView.setCellReadOnly(rowIndex, "vehclNo", false);
    } else {
      gr_gridView.setCellReadOnly(rowIndex, "vehclNo", true);
    }
  }
  var makeString = "";
  if (ds_outGrid.getCellData(rowIndex, "leaseYn") == "1") {
    makeString = makeString + "LES : Y";
  } else {
    makeString = makeString + "LES : N";
  }
  if (ds_outGrid.getCellData(rowIndex, "socYn") == "1") {
    makeString = makeString + " , SOC : Y";
  } else {
    makeString = makeString + " , SOC : N";
  }
  makeString = makeString + " , TERM : " + ds_outGrid.getCellData(rowIndex, "term");
  if (ds_outGrid.getCellData(rowIndex, "offRtrnClsCd") == "1") {
    makeString = makeString + " , OFF반납 : DOOR반납";
  } else if (ds_outGrid.getCellData(rowIndex, "offRtrnClsCd") == "2") {
    makeString = makeString + " , OFF반납 : CY반납";
  } else if (ds_outGrid.getCellData(rowIndex, "offRtrnClsCd") == "3") {
    makeString = makeString + " , OFF반납 : 부두반납";
  } else {
    makeString = makeString + " , OFF반납 : " + ds_outGrid.getCellData(rowIndex, "offRtrnClsCd");
  }
  var str = $c.str.replaceAll($p, ds_outGrid.getCellData(rowIndex, "rmk"), "\\", "￦");
  makeString = makeString + " , RMK : " + str;
  sp_rmk.setValue(makeString);

  // columns 별 로직 처리
  if (columnId == "odrNo") {} else if (columnId == "cntrTypCd") {
    if (ds_outGrid.getCellData(rowIndex, 'cntrTypCd') != "RF") return;
    if (ds_outGrid.getCellData(rowIndex, 'cntrNo') == "") {
      $c.gus.cfAlertMsg($p, "컨테이너번호를 입력하세요.");
      return;
    }
    var data = {
      detailInfo: ds_outGrid.getAllJSON(),
      rowPos: rowIndex,
      callbackFn: scwin.f_intendPop_callBackFunc
    };
    var opts = {
      id: "smpPop",
      popupName: "설정온도, 위험물코드",
      modal: true,
      type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
      ,

      popupTitle: "냉동컨테이너등록" //Layer pop
      ,

      width: 500,
      height: 400
    };
    $c.win.openPopup($p, "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05p2.xml", opts, data).then(function (rtnList) {
      ds_outGrid.setCellData(rowIndex, "temper", rtnList[1]);
      ds_outGrid.setCellData(rowIndex, "dangerCd", rtnList[2]);
      if (ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == "I" //반입
      && ds_outGrid.getCellData(rowIndex, 'cntrTypCd') == "RF" //RF컨테이너
      && ds_outGrid.getCellData(rowIndex, 'fullEmptyClsCd') == "F" //Full
      && ds_outGrid.getCellData(rowIndex, 'temper') != "") {
        //설정온도가 설정되어 있는경우 냉동컨테이너.
        ds_outGrid.setCellData(rowIndex, 'rfGubun', "1");
      } else {
        ds_outGrid.setCellData(rowIndex, 'rfGubun', "0");
      }
    });
  } else if (columnId == "gridChkBox") {
    if (ds_outGrid.getCellData(rowIndex, 'gridChkBox') == "1") {
      var d = new Date().getMinutes().toString();
      if (d.length == 1) d = "0" + d;
      var nowDate = new Date().format("YYYYMMDDHH").toString();
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'cntrNoYn') == "0") {
        //GateIn 반출 에서 컨테이너 미지정은 제어항목 체크사항 없음.
        if (ds_outGrid.getCellData(rowIndex, 'gateinDth') == "") {
          ds_outGrid.setCellData(rowIndex, 'gateinDth', nowDate + d);
        }
        return;
      }

      //제어항목 체크
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chkFlag') == "C") {
        //$c.gus.cfAlertMsg("이미 처리된 항목입니다.");
        //ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
        return;
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'cntrNo') == "") {
        $c.gus.cfAlertMsg($p, "컨테이너번호가 없습니다.");
        ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
        return;
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'vehclNo') == "") {
        $c.gus.cfAlertMsg($p, "차량번호가 없습니다.");
        ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
        return;
      }

      //SPOT차량이거나 자가반출("JE")인 경우 샤시번호 체크 생략
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisNo') == "") {
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
          $c.gus.cfAlertMsg($p, "샤시 번호가 없습니다.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'eqCd') == "") {
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
          $c.gus.cfAlertMsg($p, "장비코드가 없습니다.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisEqCd') == "") {
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
          $c.gus.cfAlertMsg($p, "샤시장비코드가 없습니다.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
      }
      //반입 에서 C1,C2,C3,C4 오더이면서 FULL인경우 SEAL NO 필수항목
      if (ds_outGrid.getCellData(rowIndex, 'fullEmptyClsCd') == "F" && (ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR || ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) && ds_outGrid.getCellData(rowIndex, 'sealNo') == "") {
        $c.gus.cfAlertMsg($p, "SEAL NO가 없습니다.");
        ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
        return;
      }

      //컨테이너번호 신규등록인 경우 LINE_CD 체크생략.
      if (ds_outGrid.getCellData(rowIndex, 'cntrNoChangeYn') == "2") {
        if (ds_outGrid.getCellData(rowIndex, 'gateinDth') == "") {
          ds_outGrid.setCellData(rowIndex, 'gateinDth', nowDate + d);
        }
        return;
      }
      if (ds_outGrid.getCellData(rowIndex, 'arrvlportDtm').length != 12) {
        $c.gus.cfAlertMsg($p, "입항일시가 없습니다. 또는 유효하지 않은 컨테이너 번호입니다. 컨테이너 번호를 확인하십시요.");
        ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
        return;
      }
      if (ds_outGrid.getCellData(rowIndex, 'cmpstcrgKndCd') == DsConstants.CMPSTCRG_KND_CD_DD && !(ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && ds_outGrid.getCellData(rowIndex, 'wrkStpCd') == DsConstants.WRK_STP_CD_RETRV)) {
        $c.gus.cfAlertMsg($p, "직도어 복화 입니다. 직도어 복화인 경우 C4 오더 DOOR 회수만 수행 하시기 바랍니다.");
        ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
        return;
      }
      dma_inManagementItem.set("crryinoutIntendNo", ds_outGrid.getCellData(rowIndex, 'crryinoutIntendNo'));
      dma_inManagementItem.set("arrvlportDt", ds_outGrid.getCellData(rowIndex, 'arrvlportDtm'));
      dma_inManagementItem.set("cntrNo", ds_outGrid.getCellData(rowIndex, 'cntrNo'));
      dma_inManagementItem.set("crryinoutClsCd", ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd'));
      dma_inManagementItem.set("odrNo", ds_outGrid.getCellData(rowIndex, 'odrNo'));
      dma_inManagementItem.set("cntrSeq", ds_outGrid.getCellData(rowIndex, 'cntrSeq'));
      dma_inManagementItem.set("wrkPathSeq", ds_outGrid.getCellData(rowIndex, 'wrkPathSeq'));
      dma_inManagementItem.set("wrkStpSeq", ds_outGrid.getCellData(rowIndex, 'wrkStpSeq'));
      dma_inManagementItem.set("transWrkIndictNo", ds_outGrid.getCellData(rowIndex, 'transWrkIndictNo'));
      dma_inManagementItem.set("cmpstcrgKndCd", ds_outGrid.getCellData(rowIndex, 'cmpstcrgKndCd'));
      dma_inManagementItem.set("eqCd", ds_outGrid.getCellData(rowIndex, 'eqCd'));
      dma_inManagementItem.set("logisLnkEqCd", ds_outGrid.getCellData(rowIndex, 'chassisEqCd'));
      $c.sbm.execute($p, sbm_managementItem);
    }
  }
};
scwin.sbm_managementItem_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    let blnGateProcessOk = true;
    if (scwin.processFlag == 0) {
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {
        ds_outGrid.setCellData(ds_outGrid.getRowPosition(), 'vehclShortNo', "0000"); //NOTNULL필드 자가반출인 경우만
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'cntrNoYn') == "0") {
        //GateIn 반출 에서 컨테이너 미지정은 해당사항 없음.
        return;
      }
      var rowCnt = ds_outManagementItem.getRowCount();
      if (rowCnt == 0) {
        $c.gus.cfAlertMsg($p, "제어항목 체크중 데이타오류");
        ds_outGrid.setCellData(ds_outGrid.getRowPosition(), 'gridChkBox', "0");
      } else {
        rowCnt--;
        var confirmMsg = "";
        //OFF 반납구분이 DOOR 반납구분일때 반납못하도록  제어함.
        if (ds_outGrid.getCellData(rowCnt, 'odrKndCd') != DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR && ds_outManagementItem.getCellData(rowCnt, 'offRtrnClsCd') == "1") {
          confirmMsg += "OFF-반납입니다. 라인담당자에게  문의하세요!!!";
          blnGateProcessOk = false;
        }
        if (ds_outManagementItem.getCellData(rowCnt, 'odrDcsnYn') != "1") {
          confirmMsg += "\n반입불가\n오더가 미확정 되어 있습니다.\n오더 담당자에게 연락바랍니다.\n";
          blnGateProcessOk = false;
        }
        if (ds_outManagementItem.getCellData(rowCnt, 'cntrLineCd') != ds_outManagementItem.getCellData(rowCnt, 'odrLineCd')) {
          confirmMsg += "\n반입불가\n컨테이너 LINE정보가 불일치 합니다.\n오더 담당자에게 연락바랍니다.\n";
          blnGateProcessOk = false;
        }
        if (ds_outManagementItem.getCellData(rowCnt, 'wrkStpYn') == "0") {
          //작업단계정상 체크
          confirmMsg += "\n반입불가\n이전 작업단계가 완료되지 않았습니다.\n오더 담당자에게 연락바랍니다.\n";
          var sysAdminYn = $c.data.getMemInfo($p, "sysAdminYn");
          var loginId = $c.data.getMemInfo($p, "userId");
          if (sysAdminYn != "1") {
            if (sysAdminYn != "1" && loginId != "mig101" && loginId != "snowmoon" && loginId != "dunky" && loginId != "pjooni" && loginId != "cmh0313" && loginId != "twkim" && loginId != "im7998" && loginId != "forhalee" && loginId != "msok" && loginId != "bnpark" && loginId != "newsdw" && loginId != "origin" && loginId != "030428") {
              blnGateProcessOk = false;
            }
          }
        }

        //이전작업단계 도착일시, 출발일시 체크(자가반출은 제외 20060422)
        var gateinDtm = "";
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'gateinDth') != "") {
          gateinDtm = ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'gateinDth');
        } else {
          gateinDtm = ds_outManagementItem.getCellData(rowCnt, 'gateinDth');
        }
        if (ds_outManagementItem.getCellData(rowCnt, 'dptDtm') != "") {
          if (!$c.util.isEmpty($p, gateinDtm)) {
            if (ds_outManagementItem.getCellData(rowCnt, 'dptDtm') >= gateinDtm) {
              confirmMsg += "\n반입불가\n반입일시가 이전 작업단계 출발일시 이전입니다." + "\n";
              blnGateProcessOk = false;
            }
          }
        }
        if (ds_outManagementItem.getCellData(rowCnt, 'arvDtm') != "") {
          if (!$c.util.isEmpty($p, gateinDtm)) {
            if (ds_outManagementItem.getCellData(rowCnt, 'arvDtm') > gateinDtm) {
              confirmMsg += "\n반입불가\n반입일시가 이전 작업단계 도착일시 이전입니다." + "\n";
              blnGateProcessOk = false;
            }
          }
        }
        if (ds_outManagementItem.getCellData(rowCnt, 'cntrNoYn') == "1") {
          //반입 에서 동일오더에 이미 반입된 컨테이너 존재유무 체크
          confirmMsg += "\n반입불가\n이미 반입처리된 컨테이너 입니다.\n재고현황을 확인 바랍니다.\n";
          blnGateProcessOk = false;
        }
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'xrayLupTrgtYn') == "1" && ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR && ds_outManagementItem.getCellData(rowCnt, 'xrayLupOdrYn') == "0") {
          confirmMsg += "\n반입불가\n검색기 컨테이너 입니다. 검색기 오더가 없습니다.\n검색기 오더를 확인하세요.\n";
          blnGateProcessOk = false;
        }

        //detention관련 반입체크
        if (ds_outManagementItem.getCellData(rowCnt, 'detention') == "DETENTION(반입불가)") {
          confirmMsg += "\n반입불가\nDETENTION 제어 컨테이너 입니다.\n 관련 비용을 체크하시고 기본정보수정에서 DETENTION항목을 제어안함으로 바꾼후 진행하세요\n";
          blnGateProcessOk = false;
        }
        //TSL detention관련 반입체크
        if (ds_outManagementItem.getCellData(rowCnt, 'detention') == "DETENTION(TSL)") {
          confirmMsg += "\n반입불가\n 선사에서 DETENTION 제어된 컨테이너 입니다.\n 선사에 DETENTION 문의 하시고  반납기한 을 재지정 받으셔야 합니다.\n";
          blnGateProcessOk = false;
        }
        if (ds_outManagementItem.getCellData(rowCnt, 'rfYn') > 0) {
          confirmMsg += "\n반입주의!!!\n\n EVER에서 HOLD(반출하지않도록)요청한  RF(RH) 컨테이너 입니다.\n";
        }
        //C1, C2 오더인 경우 CY보세반출입 기 신고여부 체크
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
          if (ds_outManagementItem.getCellData(rowCnt, 'declarYn') == "1") {
            //confirmMsg += "\n반출불가\n이미 CY보세 반출입 신고가 완료된 컨테이너 입니다."+"\n";
            //blnGateProcessOk = false;
          }
        }

        //blnGateProcessOk = true;	//todo 임시용임 삭제해야함!
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'gateinDth') == "" && blnGateProcessOk) {
          ds_outGrid.setCellData(ds_outGrid.getRowPosition(), 'gateinDth', ds_outManagementItem.getCellData(rowCnt, 'gateinoutDth'));
        }
        if (confirmMsg != "") {
          $c.gus.cfAlertMsg($p, confirmMsg);
        }
        if (blnGateProcessOk) {
          if (ds_outManagementItem.getCellData(rowCnt, 'chassisChk') == "1" && ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisChkYn') != "1") {
            let confirm = await $c.win.confirm($p, "해당 샤시장비는 이미 다른 차량에 등록되어 있습니다.\n계속 진행 하시겠습니까?");
            if (confirm) {} else {
              ds_outGrid.setCellData(ds_outGrid.getRowPosition(), 'gridChkBox', "0");
            }
          }
        } else {
          ds_outGrid.setCellData(ds_outGrid.getRowPosition(), 'gridChkBox', "0");
        }
      }
    }
  }
};

// 그리드 키 다운 이벤트
scwin.gr_gridView_onkeydown = function (e) {
  console.log("### gr_gridView_onkeydown : " + JSON.stringify(e));
  var v_Row = ds_outGrid.getRowPosition();
  var v_Colid = ds_outGrid.getCellData(v_Row, "gridChkBox");

  //e.keycode ( 13 : ENTER / 27 : ESC / 32 : SPACE BAR )
  if (v_Row > 0 && v_Colid == "1" && e.keycode == "32") {
    if (ds_outGrid.getCellData(v_Row, 'gridChkBox') == "1") {
      var d = new Date().getMinutes().toString();
      if (d.length == 1) d = "0" + d;
      var nowDate = new Date().format("YYYYMMDDHH").toString();
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'cntrNoYn') == "0") {
        //GateIn 반출 에서 컨테이너 미지정은 제어항목 체크사항 없음.
        if (ds_outGrid.getCellData(v_Row, 'gateinDth') == "") {
          ds_outGrid.setCellData(v_Row, 'gateinDth', nowDate + d);
        }
        return;
      }

      //제어항목 체크
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chkFlag') == "C") {
        //$c.gus.cfAlertMsg("이미 처리된 항목입니다.");
        //ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
        return;
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'cntrNo') == "") {
        $c.gus.cfAlertMsg($p, "컨테이너번호가 없습니다.");
        ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
        return;
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'vehclNo') == "") {
        $c.gus.cfAlertMsg($p, "차량번호가 없습니다.");
        ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
        return;
      }
      //SPOT차량이거나 자가반출("JE")인 경우 샤시번호 체크 생략
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisNo') == "") {
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
          $c.gus.cfAlertMsg($p, "샤시 번호가 없습니다.");
          ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
          return;
        }
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'eqCd') == "") {
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
          $c.gus.cfAlertMsg($p, "장비코드가 없습니다.");
          ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
          return;
        }
      }
      if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisEqCd') == "") {
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
          $c.gus.cfAlertMsg($p, "샤시장비코드가 없습니다.");
          ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
          return;
        }
      }
      //반입 에서 C1,C2,C3,C4 오더이면서 FULL인경우 SEAL NO 필수항목
      if (ds_outGrid.getCellData(v_Row, 'fullEmptyClsCd') == "F" && (ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR || ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) && ds_outGrid.getCellData(v_Row, 'sealNo') == "") {
        $c.gus.cfAlertMsg($p, "SEAL NO가 없습니다.");
        ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
        return;
      }
      //수입인 경우 BL넘버, 수출일반(C4)오더인 경우 BOOKING 넘버 필수 체크.
      if (ds_outGrid.getCellData(v_Row, 'impExpClsCd') == DsConstants.IMP_EXP_CLS_CD_IMP) {
        if (ds_outGrid.getCellData(v_Row, 'blNo') == "") {
          $c.gus.cfAlertMsg($p, "BL넘버가 없습니다.");
          ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
          return;
        }
      }
      if (ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
        if (ds_outGrid.getCellData(v_Row, 'bookingNo') == "") {
          $c.gus.cfAlertMsg($p, "BOOKING넘버가 없습니다.");
          ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
          return;
        }
      }

      //C1(Full/Empty), C2(Full) 오더인 경우에는 mrn 필수사항.
      if (ds_outGrid.getCellData(v_Row, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN && ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
        if (ds_outGrid.getCellData(v_Row, 'mrn') == "") {
          $c.gus.cfAlertMsg($p, "MRN 이 없습니다.");
          ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
          return;
        }
      }
      if (ds_outGrid.getCellData(v_Row, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN && ds_outGrid.getCellData(v_Row, 'fullEmptyClsCd') == "F" && ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
        if (ds_outGrid.getCellData(v_Row, 'mrn') == "") {
          $c.gus.cfAlertMsg($p, "MRN 이 없습니다.");
          ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
          return;
        }
      }

      //컨테이너번호 신규등록인 경우 LINE_CD 체크생략.
      if (ds_outGrid.getCellData(v_Row, 'cntrNoChangeYn') == "2") {
        if (ds_outGrid.getCellData(v_Row, 'gateinDth') == "") {
          ds_outGrid.setCellData(v_Row, 'gateinDth', nowDate + d);
        }
        return;
      }
      if (ds_outGrid.getCellData(v_Row, 'arrvlportDtm').length != 12) {
        $c.gus.cfAlertMsg($p, "입항일시가 없습니다. 또는 유효하지 않은 컨테이너 번호입니다. 컨테이너 번호를 확인하십시요.");
        ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
        return;
      }
      if (ds_outGrid.getCellData(v_Row, 'cmpstcrgKndCd') == DsConstants.CMPSTCRG_KND_CD_DD && !(ds_outGrid.getCellData(v_Row, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && ds_outGrid.getCellData(v_Row, 'wrkStpCd') == DsConstants.WRK_STP_CD_RETRV)) {
        $c.gus.cfAlertMsg($p, "직도어 복화 입니다. 직도어 복화인 경우 C4 오더 DOOR 회수만 수행 하시기 바랍니다.");
        ds_outGrid.setCellData(v_Row, 'gridChkBox', "0");
        return;
      }
      dma_inManagementItem.set("crryinoutIntendNo", ds_outGrid.getCellData(v_Row, 'crryinoutIntendNo'));
      dma_inManagementItem.set("arrvlportDt", ds_outGrid.getCellData(v_Row, 'arrvlportDtm'));
      dma_inManagementItem.set("cntrNo", ds_outGrid.getCellData(v_Row, 'cntrNo'));
      dma_inManagementItem.set("crryinoutClsCd", ds_outGrid.getCellData(v_Row, 'crryinoutClsCd'));
      dma_inManagementItem.set("odrNo", ds_outGrid.getCellData(v_Row, 'odrNo'));
      dma_inManagementItem.set("cntrSeq", ds_outGrid.getCellData(v_Row, 'cntrSeq'));
      dma_inManagementItem.set("wrkPathSeq", ds_outGrid.getCellData(v_Row, 'wrkPathSeq'));
      dma_inManagementItem.set("wrkStpSeq", ds_outGrid.getCellData(v_Row, 'wrkStpSeq'));
      dma_inManagementItem.set("transWrkIndictNo", ds_outGrid.getCellData(v_Row, 'transWrkIndictNo'));
      dma_inManagementItem.set("cmpstcrgKndCd", ds_outGrid.getCellData(v_Row, 'cmpstcrgKndCd'));
      dma_inManagementItem.set("eqCd", ds_outGrid.getCellData(v_Row, 'eqCd'));
      dma_inManagementItem.set("logisLnkEqCd", ds_outGrid.getCellData(v_Row, 'chassisEqCd'));
      $c.sbm.execute($p, sbm_managementItem);
    }
  }
};

// 그리드 셀 더블 클릭 이벤트
scwin.gr_gridView_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "odrNo") {
    scwin.f_retrieveOdrNo();
  } else if (columnId == "cntrSizCd") {
    scwin.f_retrieveCntrNo();
  } else if (columnId == "lineCd") {
    if (ds_outGrid.getCellData(rowIndex, 'chkFlag') == "C") {
      scwin.f_retrieveCrryinout();
    } else {
      //$c.gus.cfAlertMsg("미처리된 내역 입니다.");
      //return;
    }
  } else if (columnId == "pdaCntrNo" || columnId == "pdaSealNo" || columnId == "pdaChassisNo" || columnId == "sealNo") {
    var pre_cntr = ds_outGrid.getCellData(rowIndex, "cntrNo");
    var pre_chassis = ds_outGrid.getCellData(rowIndex, "chassisNo");
    var pda_cntr = ds_outGrid.getCellData(rowIndex, "pdaCntrNo");
    var pda_chassis = ds_outGrid.getCellData(rowIndex, "pdaChassisNo");
    if (pda_cntr == "") return true;
    scwin.pre_RowPosition = rowIndex;
    if (pre_cntr != pda_cntr) {
      //gr_gridView.setCellReadOnly(rowIndex,"gridChkBox", "Edit") = "none";
      ds_outGrid.setCellData(rowIndex, "CntrNo", ds_outGrid.getCellData(rowIndex, "pdaCntrNo"));

      //셔틀이 아니고 반출이고, 가배차이고, C2오더(수입일반오더)인 경우 컨테이너 번호 팝업조회
      if (ds_outGrid.getCellData(rowIndex, 'wrkStpCd') != DsConstants.WRK_STP_CD_SHUTTLE && ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(rowIndex, 'indvdlAlloccarYn') == DsConstants.INDVDL_ALLOCCAR_TEMPORARY && ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
        scwin.f_cntrSearch('T');
      } else {
        dma_cntrNoChangeInfo.set("wrkPlCd", ds_outGrid.getCellData(rowIndex, "wrkPlCd"));
        dma_cntrNoChangeInfo.set("crryinoutClsCd", ds_outGrid.getCellData(rowIndex, "crryinoutClsCd"));
        dma_cntrNoChangeInfo.set("cntrNo", ds_outGrid.getCellData(rowIndex, "cntrNo"));
        dma_cntrNoChangeInfo.set("odrNo", ds_outGrid.getCellData(rowIndex, "odrNo"));
        dma_cntrNoChangeInfo.set("cntrSeq", ds_outGrid.getCellData(rowIndex, "cntrSeq"));
        dma_cntrNoChangeInfo.set("cntrNoYn", ds_outGrid.getCellData(rowIndex, "cntrNoYn"));
        dma_cntrNoChangeInfo.set("wrkPathSeq", ds_outGrid.getCellData(rowIndex, "wrkPathSeq"));
        dma_cntrNoChangeInfo.set("wrkStpSeq", ds_outGrid.getCellData(rowIndex, "wrkStpSeq"));
        dma_cntrNoChangeInfo.set("gateinoutCls", "I");
        await $c.sbm.execute($p, sbm_cntrNoChangeInfo);
      }
    }
    if (pre_chassis != pda_chassis) {
      if (pda_chassis == "") {
        return true;
      }
      ds_outGrid.setCellData(rowIndex, "chassisNo", ds_outGrid.getCellData(rowIndex, "pdaChassisNo"));
      scwin.f_chassisSearch('T');
      if (badChassisNo) {
        ds_outGrid.setCellData(rowIndex, "chassisNo", "");
      }
      if (ds_outGrid.getCellData(rowIndex, 'chassisEqCd') == "") {
        ds_outGrid.setCellData(rowIndex, "chassisNo", "");
      }
    }
    ds_outGrid.setCellData(rowIndex, "sealNo", ds_outGrid.getCellData(rowIndex, "pdaSealNo"));
  }
};

//그리드 이미지(돋보기) 클릭 이벤트
scwin.gr_gridView_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_gridView.getColumnID(columnIndex);
  let data = ds_outGrid.getCellData(rowIndex, colId);
  if (colId == "vehclNo") {
    //차량번호

    //오더유형(자가구분)이 자가반출("JE") 인 경우 차량 번호 팝업X
    if (ds_outGrid.getCellData(rowIndex, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) return;
    scwin.f_vehclSearch('T');
  } else if (colId == "chassisNo") {
    //샤시번호
    scwin.pre_RowPosition = rowIndex;
    scwin.pre_chassisNo = data;
    scwin.pre_chassisEqCd = ds_outGrid.getCellData(scwin.pre_RowPosition, 'chassisEqCd');
    scwin.f_chassisSearch('F');
  } else if (colId == "cntrNo") {
    //컨테이너번호
    //셔틀이 아니고 반출이고, 가배차이고, C2오더(수입일반오더)인 경우 컨테이너 번호 팝업조회
    if (ds_outGrid.getCellData(rowIndex, 'wrkStpCd') != DsConstants.WRK_STP_CD_SHUTTLE && ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(rowIndex, 'indvdlAlloccarYn') == DsConstants.INDVDL_ALLOCCAR_TEMPORARY && ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      scwin.pre_RowPosition = rowIndex;
      scwin.f_cntrSearch('F');
    }
  }
};

//그리드 이벤트 발생 전
scwin.gr_gridView_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldValue = value;
  var colId = gr_gridView.getColumnID(columnIndex);
  if (colId == 'cntrNo') {
    if (ds_outGrid.getCellData(rowIndex, 'cntrNo') == "") return true;
    scwin.pre_RowPosition = rowIndex;
    scwin.pre_cntrNo = value;
  } else if (colId == 'vehclNo') {
    if (ds_outGrid.getCellData(rowIndex, 'vehclNo') == "") return true;

    //오더유형(자가구분)이 자가반출("JE") 인 경우 차량 번호 팝업X
    if (ds_outGrid.getCellData(rowIndex, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) return;
    scwin.pre_RowPosition = rowIndex;
    scwin.pre_vehclNo = value;
  } else if (colId == 'chassisNo') {
    if (ds_outGrid.getCellData(rowIndex, 'chassisNo') == "") return true;
    scwin.pre_RowPosition = rowIndex;
    scwin.pre_chassisNo = value;
    scwin.pre_chassisEqCd = ds_outGrid.getCellData(scwin.pre_RowPosition, 'chassisEqCd');
  }
};

//그리드 이벤트 발생 후 : OnExit(row,colid,olddata)
scwin.gr_gridView_onafteredit = async function (rowIndex, columnIndex, value) {
  if (scwin.oldValue == value) return true;
  var colId = gr_gridView.getColumnID(columnIndex);
  if (colId == 'cntrNo') {
    //        scwin.pre_RowPosition = rowIndex;

    await scwin.f_cntrSeqSearch(rowIndex);
    if (ds_outGrid.getCellData(rowIndex, 'cntrNo') == "") return true;
    scwin.pre_RowPosition = rowIndex;
    //		pre_cntrNo = olddata;
    if (scwin.pre_cntrNo != ds_outGrid.getCellData(rowIndex, 'cntrNo')) {
      //gr_gridView.setCellReadOnly(rowIndex,"gridChkBox", "Edit") = "none";
      //            gr_gridView.setColumnReadOnly("gridChkBox", true);

      //셔틀이 아니고 반출이고, 가배차이고, C2오더(수입일반오더)인 경우 컨테이너 번호 팝업조회
      if (ds_outGrid.getCellData(rowIndex, 'wrkStpCd') != DsConstants.WRK_STP_CD_SHUTTLE && ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(rowIndex, 'indvdlAlloccarYn') == DsConstants.INDVDL_ALLOCCAR_TEMPORARY && ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
        scwin.f_cntrSearch('T');
      } else {
        dma_cntrNoChangeInfo.set("wrkPlCd", ds_outGrid.getCellData(rowIndex, "wrkPlCd"));
        dma_cntrNoChangeInfo.set("crryinoutClsCd", ds_outGrid.getCellData(rowIndex, "crryinoutClsCd"));
        dma_cntrNoChangeInfo.set("cntrNo", ds_outGrid.getCellData(rowIndex, "cntrNo"));
        dma_cntrNoChangeInfo.set("odrNo", ds_outGrid.getCellData(rowIndex, "odrNo"));
        dma_cntrNoChangeInfo.set("cntrSeq", ds_outGrid.getCellData(rowIndex, "cntrSeq"));
        dma_cntrNoChangeInfo.set("cntrNoYn", ds_outGrid.getCellData(rowIndex, "cntrNoYn"));
        dma_cntrNoChangeInfo.set("wrkPathSeq", ds_outGrid.getCellData(rowIndex, "wrkPathSeq"));
        dma_cntrNoChangeInfo.set("wrkStpSeq", ds_outGrid.getCellData(rowIndex, "wrkStpSeq"));
        dma_cntrNoChangeInfo.set("gateinoutCls", "I");
        await $c.sbm.execute($p, sbm_cntrNoChangeInfo);
      }
    }
    scwin.pre_cntrNo = ds_outGrid.getCellData(rowIndex, 'cntrNo');
  } else if (colId == 'vehclNo') {
    if (ds_outGrid.getCellData(rowIndex, 'vehclNo') == "") return true;

    //오더유형(자가구분)이 자가반출("JE") 인 경우 차량 번호 팝업X
    if (ds_outGrid.getCellData(rowIndex, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) return;
    if (scwin.pre_vehclNo != ds_outGrid.getCellData(rowIndex, 'vehclNo')) {
      scwin.f_vehclSearch('T');
    }
  } else if (colId == 'chassisNo') {
    if (ds_outGrid.getCellData(rowIndex, 'chassisNo') == "") return true;
    if (scwin.pre_chassisNo != ds_outGrid.getCellData(rowIndex, 'chassisNo')) {
      scwin.f_chassisSearch('T');
    }
  } else if (colId == 'gateinDth') {
    if (ds_outGrid.getCellData(rowIndex, 'gateinDth') == "") return;
    if (ds_outGrid.getCellData(rowIndex, 'gateinDth').length != 12) {
      $c.gus.cfAlertMsg($p, "반입일시는 12자리 입니다.");
      ds_outGrid.setCellData(rowIndex, 'gateinDth', "");
      gr_gridView.setFocusedCell(rowIndex, 'gateinDth', true);
      return;
    }
    /*        
            if (!cf_gidHourCheck(ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(8, 4))) {
                $c.gus.cfAlertMsg("시분을 확인하십시요.");
                ds_outGrid.setCellData(rowIndex, 'gateinDth', "");
                //gr_gridView.SetColumn('gateinDth');
                //gr_gridView.Focus();
                return;
            }
    */
    if ($c.num.parseInt($p, ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(4, 2), 0) < 1 || $c.num.parseInt($p, ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(4, 2), 0) > 12) {
      $c.gus.cfAlertMsg($p, "월을 확인하십시요." + ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(4, 4));
      ds_outGrid.setCellData(rowIndex, 'gateinDth', "");
      gr_gridView.setFocusedCell(rowIndex, 'gateinDth', true);
      return;
    }
    if ($c.date.getDateQuarterDirection($p, ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(0, 4), ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(4, 2), "L").substr(6, 2) < ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(6, 2) || $c.num.parseInt($p, ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(6, 2), 0) < 1) {
      $c.gus.cfAlertMsg($p, "일자를 확인하십시요." + ds_outGrid.getCellData(rowIndex, 'gateinDth').substr(4, 4));
      ds_outGrid.setCellData(rowIndex, 'gateinDth', "");
      gr_gridView.setFocusedCell(rowIndex, 'gateinDth', true);
      return;
    }
    if (ds_outGrid.getCellData(rowIndex, "gateinDth") != "" && ed_wrkPlCd.getValue() == "4C02") {
      ds_outGrid.setCellData(rowIndex, 'gridChkBox', "1");
      if (ds_outGrid.getCellData(rowIndex, 'gridChkBox') == "1") {
        var d = new Date().getMinutes().toString();
        if (d.length == 1) d = "0" + d;
        var nowDate = new Date().format("YYYYMMDDHH").toString();
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'cntrNoYn') == "0") {
          //GateIn 반출 에서 컨테이너 미지정은 제어항목 체크사항 없음.
          if (ds_outGrid.getCellData(rowIndex, 'gateinDth') == "") {
            ds_outGrid.setCellData(rowIndex, 'gateinDth', nowDate + d);
          }
          return;
        }

        //제어항목 체크
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chkFlag') == "C") {
          //$c.gus.cfAlertMsg("이미 처리된 항목입니다.");
          //ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'cntrNo') == "") {
          $c.gus.cfAlertMsg($p, "컨테이너번호가 없습니다.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'vehclNo') == "") {
          $c.gus.cfAlertMsg($p, "차량번호가 없습니다.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
        //SPOT차량이거나 자가반출("JE")인 경우 샤시번호 체크 생략
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisNo') == "") {
          if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
            $c.gus.cfAlertMsg($p, "샤시 번호가 없습니다.");
            ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
            return;
          }
        }
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'eqCd') == "") {
          if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
            $c.gus.cfAlertMsg($p, "장비코드가 없습니다.");
            ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
            return;
          }
        }
        if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'chassisEqCd') == "") {
          if (ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(ds_outGrid.getRowPosition(), 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
            $c.gus.cfAlertMsg($p, "샤시장비코드가 없습니다.");
            ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
            return;
          }
        }
        //반입 에서 C1,C2,C3,C4 오더이면서 FULL인경우 SEAL NO 필수항목
        if (ds_outGrid.getCellData(rowIndex, 'fullEmptyClsCd') == "F" && (ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR || ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) && ds_outGrid.getCellData(rowIndex, 'sealNo') == "") {
          $c.gus.cfAlertMsg($p, "SEAL NO가 없습니다.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
        //수입인 경우 BL넘버, 수출일반(C4)오더인 경우 BOOKING 넘버 필수 체크.
        if (ds_outGrid.getCellData(rowIndex, 'impExpClsCd') == DsConstants.IMP_EXP_CLS_CD_IMP) {
          if (ds_outGrid.getCellData(rowIndex, 'blNo') == "") {
            $c.gus.cfAlertMsg($p, "BL넘버가 없습니다.");
            ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
            return;
          }
        }
        if (ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
          if (ds_outGrid.getCellData(rowIndex, 'bookingNo') == "") {
            $c.gus.cfAlertMsg($p, "BOOKING넘버가 없습니다.");
            ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
            return;
          }
        }

        //C1(Full/Empty), C2(Full) 오더인 경우에는 mrn 필수사항.
        if (ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN && ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
          if (ds_outGrid.getCellData(rowIndex, 'mrn') == "") {
            $c.gus.cfAlertMsg($p, "MRN 이 없습니다.");
            ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
            return;
          }
        }
        if (ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN && ds_outGrid.getCellData(rowIndex, 'fullEmptyClsCd') == "F" && ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
          if (ds_outGrid.getCellData(rowIndex, 'mrn') == "") {
            $c.gus.cfAlertMsg($p, "MRN 이 없습니다.");
            ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
            return;
          }
        }

        //컨테이너번호 신규등록인 경우 LINE_CD 체크생략.
        if (ds_outGrid.getCellData(rowIndex, 'cntrNoChangeYn') == "2") {
          if (ds_outGrid.getCellData(rowIndex, 'gateinDth') == "") {
            ds_outGrid.setCellData(rowIndex, 'gateinDth', nowDate + d);
          }
          return;
        }
        if (ds_outGrid.getCellData(rowIndex, 'arrvlportDtm').length != 12) {
          $c.gus.cfAlertMsg($p, "입항일시가 없습니다. 또는 유효하지 않은 컨테이너 번호입니다. 컨테이너 번호를 확인하십시요.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
        if (ds_outGrid.getCellData(rowIndex, 'cmpstcrgKndCd') == DsConstants.CMPSTCRG_KND_CD_DD && !(ds_outGrid.getCellData(rowIndex, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && ds_outGrid.getCellData(rowIndex, 'wrkStpCd') == DsConstants.WRK_STP_CD_RETRV)) {
          $c.gus.cfAlertMsg($p, "직도어 복화 입니다. 직도어 복화인 경우 C4 오더 DOOR 회수만 수행 하시기 바랍니다.");
          ds_outGrid.setCellData(rowIndex, 'gridChkBox', "0");
          return;
        }
        dma_inManagementItem.set("crryinoutIntendNo", ds_outGrid.getCellData(rowIndex, 'crryinoutIntendNo'));
        dma_inManagementItem.set("arrvlportDt", ds_outGrid.getCellData(rowIndex, 'arrvlportDtm'));
        dma_inManagementItem.set("cntrNo", ds_outGrid.getCellData(rowIndex, 'cntrNo'));
        dma_inManagementItem.set("crryinoutClsCd", ds_outGrid.getCellData(rowIndex, 'crryinoutClsCd'));
        dma_inManagementItem.set("odrNo", ds_outGrid.getCellData(rowIndex, 'odrNo'));
        dma_inManagementItem.set("cntrSeq", ds_outGrid.getCellData(rowIndex, 'cntrSeq'));
        dma_inManagementItem.set("wrkPathSeq", ds_outGrid.getCellData(rowIndex, 'wrkPathSeq'));
        dma_inManagementItem.set("wrkStpSeq", ds_outGrid.getCellData(rowIndex, 'wrkStpSeq'));
        dma_inManagementItem.set("transWrkIndictNo", ds_outGrid.getCellData(rowIndex, 'transWrkIndictNo'));
        dma_inManagementItem.set("cmpstcrgKndCd", ds_outGrid.getCellData(rowIndex, 'cmpstcrgKndCd'));
        dma_inManagementItem.set("eqCd", ds_outGrid.getCellData(rowIndex, 'eqCd'));
        dma_inManagementItem.set("logisLnkEqCd", ds_outGrid.getCellData(rowIndex, 'chassisEqCd'));
        $c.sbm.execute($p, sbm_managementItem);
      }
    }
  }
};

//조건에 따른 그리드 칼럼 속성 변경
scwin.gr_gridView_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {

  /*
      //block, bay, row, tier 변경
      let v_wrkPlCd = ds_outGrid.getCellData(rowIndex, "wrkPlCd");
      let v_block = ds_outGrid.getCellData(rowIndex, "lblock");
      let v_bay = ds_outGrid.getCellData(rowIndex, "lbay");
      let v_row = ds_outGrid.getCellData(rowIndex, "lrow");
      let v_tier = ds_outGrid.getCellData(rowIndex, "ltier");
  
      if (colId == "lblock") {
  
      } else if (colId == "lbay") {
          dma_inBay.setEmptyValue();
          ds_outBay.removeAll();
          dma_inRow.setEmptyValue();
          ds_outRow.removeAll();
          dma_inTier.setEmptyValue();
          ds_outTier.removeAll();
  
          if (ds_outGrid.getCellData(rowIndex, "lblock") == "") return;
  
          dma_inBay.set("sysCd", "WorkPlaceEachGoodsEBC");
          dma_inBay.set("queryId", "retrivecBayList");
          dma_inBay.set("param1", v_wrkPlCd);
          dma_inBay.set("param2", v_block);
  
          $c.sbm.execute(sbm_bay);
      } else if (colId == "lrow") {
          dma_inRow.setEmptyValue();
          ds_outRow.removeAll();
          dma_inTier.setEmptyValue();
          ds_outTier.removeAll();
  
          if (ds_outGrid.getCellData(rowIndex, "lbay") == "") return;
  
          dma_inRow.set("sysCd", "WorkPlaceEachGoodsEBC");
          dma_inRow.set("queryId", "retrivecRowList");
          dma_inRow.set("param1", v_wrkPlCd);
          dma_inRow.set("param2", v_block);
          dma_inRow.set("param3", v_bay);
  
          $c.sbm.execute(sbm_row);
      } else if (colId == "ltier") {
          dma_inTier.setEmptyValue();
          ds_outTier.removeAll();
  
          if (ds_outGrid.getCellData(rowIndex, "lrow") == "") return;
  
          dma_inTier.set("sysCd", "WorkPlaceEachGoodsEBC");
          dma_inTier.set("queryId", "retrivecTierList");
          dma_inTier.set("param1", v_wrkPlCd);
          dma_inTier.set("param2", v_block);
          dma_inTier.set("param3", v_bay);
          dma_inTier.set("param4", v_row);
          dma_inTier.set("param5", "GATEIN");
  
          $c.sbm.execute(sbm_tier);
      }
  */
};
scwin.sbm_fullEmptyChangeInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_outFullEmptyChangeInfo.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, "품명코드 오류");
      //gr_gridView.SetColumn('fullEmptyClsCd');
      ds_outGrid.setCellData(scwin.pre_RowPosition, 'fullEmptyClsCd', scwin.pre_fullEmptyClsCd);
      //gr_gridView.Focus();
    } else {
      ds_outGrid.setCellData(scwin.pre_RowPosition, 'commCd', ds_outFullEmptyChangeInfo.getCellData(0, 'commCd'));
    }
  }
};
scwin.sbm_cntrPositionInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_outCntrPositionInfo.getRowCount() > 0) {
      $c.gus.cfAlertMsg($p, "해당로케이션에 컨테이너번호(" + ds_outCntrPositionInfo.getCellData(ds_outCntrPositionInfo.getRowPosition(), 'cntrNo') + ")가 이미 적재되어 있습니다.");
      //gr_gridView.SetColumn('ltier');
      ds_outGrid.setCellData(ds_outGrid.getRowPosition(), 'ltier', "");
      //gr_gridView.Focus();
    }
  }
};
scwin.gr_gridView_onheaderclick = async function (headerId) {
  var chk = gr_gridView.getHeaderValue(headerId); // == true ? "1" : "0");
  var cr = ds_outGrid.getRowCount();
  if (chk == "1") {
    gr_gridView.setHeaderDisabled("gridChkBox", true);
    gr_gridView.setHeaderValue("gridChkBox", true);
    for (var i = 0; i < cr; i++) {
      gr_gridView._dataList.setCellData(i, "gridChkBox", "0");
    }
    gr_gridView.setHeaderDisabled("gridChkBox", false);
  }
  if (cr > 0) {
    if (headerId == "gridChkBox") {
      if (chk == "1") {
        for (var i = 0; i < cr; i++) {
          //                    ds_outGrid.setRowPosition(i);

          var d = WebSquare.date.getCurrentServerDate("HH");

          //                    if (d.length == 1) d = "0" + d;

          var nowDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");

          //제어항목 체크
          if (ds_outGrid.getCellData(i, 'chkFlag') == "C") {
            continue;
          }
          if (ds_outGrid.getCellData(i, 'cntrNo') == "") {
            continue;
          }
          if (ds_outGrid.getCellData(i, 'vehclNo') == "") {
            continue;
          }
          //SPOT차량이거나 자가반출("JE")인 경우 샤시번호 체크 생략
          if (ds_outGrid.getCellData(i, 'chassisNo') == "") {
            if (ds_outGrid.getCellData(i, 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(i, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
              continue;
            }
          }
          if (ds_outGrid.getCellData(i, 'eqCd') == "") {
            if (ds_outGrid.getCellData(i, 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(i, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
              continue;
            }
          }
          if (ds_outGrid.getCellData(i, 'chassisEqCd') == "") {
            if (ds_outGrid.getCellData(i, 'selfSpotClsCd') == "1" || ds_outGrid.getCellData(i, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {} else {
              continue;
            }
          }
          //반입 에서 C1,C2,C3,C4 오더이면서 FULL인경우 SEAL NO 필수항목
          if (ds_outGrid.getCellData(i, 'fullEmptyClsCd') == "F" && (ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR || ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR || ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) && ds_outGrid.getCellData(i, 'sealNo') == "") {
            continue;
          }
          //수입인 경우 BL넘버, 수출일반(C4)오더인 경우 BOOKING 넘버 필수 체크.
          if (ds_outGrid.getCellData(i, 'impExpClsCd') == DsConstants.IMP_EXP_CLS_CD_IMP) {
            if (ds_outGrid.getCellData(i, 'blNo') == "") {
              continue;
            }
          }
          if (ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
            if (ds_outGrid.getCellData(i, 'bookingNo') == "") {
              continue;
            }
          }

          //C1(Full/Empty), C2(Full) 오더인 경우에는 mrn 필수사항.
          if (ds_outGrid.getCellData(i, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN && ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
            if (ds_outGrid.getCellData(i, 'mrn') == "") {
              continue;
            }
          }
          if (ds_outGrid.getCellData(i, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_IN && ds_outGrid.getCellData(i, 'fullEmptyClsCd') == "F" && ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
            if (ds_outGrid.getCellData(i, 'mrn') == "") {
              continue;
            }
          }

          //컨테이너번호 신규등록인 경우 LINE_CD 체크생략.
          if (ds_outGrid.getCellData(i, 'cntrNoChangeYn') == "2") {
            if (ds_outGrid.getCellData(i, 'gateinDth') == "") {
              ds_outGrid.setCellData(i, 'gateinDth', nowDate + d);
            }
            continue;
          }
          var strText = ds_outGrid.getCellData(i, 'arrvlportDtm');
          if (strText.length != 12) {
            continue;
          }
          if (ds_outGrid.getCellData(i, 'cmpstcrgKndCd') == DsConstants.CMPSTCRG_KND_CD_DD && !(ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && ds_outGrid.getCellData(i, 'wrkStpCd') == DsConstants.WRK_STP_CD_RETRV)) {
            continue;
          }
          dma_inManagementItem.set("crryinoutIntendNo", ds_outGrid.getCellData(i, 'crryinoutIntendNo'));
          dma_inManagementItem.set("arrvlportDt", ds_outGrid.getCellData(i, 'arrvlportDtm'));
          dma_inManagementItem.set("cntrNo", ds_outGrid.getCellData(i, 'cntrNo'));
          dma_inManagementItem.set("crryinoutClsCd", ds_outGrid.getCellData(i, 'crryinoutClsCd'));
          dma_inManagementItem.set("odrNo", ds_outGrid.getCellData(i, 'odrNo'));
          dma_inManagementItem.set("cntrSeq", ds_outGrid.getCellData(i, 'cntrSeq'));
          dma_inManagementItem.set("wrkPathSeq", ds_outGrid.getCellData(i, 'wrkPathSeq'));
          dma_inManagementItem.set("wrkStpSeq", ds_outGrid.getCellData(i, 'wrkStpSeq'));
          dma_inManagementItem.set("transWrkIndictNo", ds_outGrid.getCellData(i, 'transWrkIndictNo'));
          dma_inManagementItem.set("cmpstcrgKndCd", ds_outGrid.getCellData(i, 'cmpstcrgKndCd'));
          dma_inManagementItem.set("eqCd", ds_outGrid.getCellData(i, 'eqCd'));
          dma_inManagementItem.set("logisLnkEqCd", ds_outGrid.getCellData(i, 'chassisEqCd'));
          scwin.processFlag = 1;
          await $c.sbm.execute($p, sbm_managementItem1);
          scwin.processFlag = 0;
          var blnGateProcessOk = true;
          var rowCnt = ds_outManagementItem.getRowCount();
          if (ds_outGrid.getCellData(i, 'selfClsCd') == DsConstants.SELF_CLS_CD_SELF_CRRYOUT) {
            ds_outGrid.setCellData(i, 'vehclShortNo', "0000"); //NOTNULL필드 자가반출인 경우만
          }
          if (ds_outGrid.getCellData(i, 'crryinoutClsCd') == DsConstants.CRRYINOUT_CLS_CD_OUT && ds_outGrid.getCellData(i, 'cntrNoYn') == "0") {
            //GateIn 반출 에서 컨테이너 미지정은 해당사항 없음.
            continue;
          }
          if (rowCnt == 0) {
            continue;
          } else {
            rowCnt--;
            if (ds_outManagementItem.getCellData(rowCnt, 'odrDcsnYn') != "1") {
              blnGateProcessOk = false;
              continue;
            }
            if (ds_outManagementItem.getCellData(rowCnt, 'cntrLineCd') != ds_outManagementItem.getCellData(rowCnt, 'odrLineCd')) {
              blnGateProcessOk = false;
              continue;
            }
            if (ds_outManagementItem.getCellData(rowCnt, 'wrkStpYn') == "0") {
              //작업단계정상 체크
              continue;
              //                            var loginId = $c.data.getMemInfo("userId");
              //                            var sysAdminYn = $c.data.getMemInfo("sysAdminYn");
            }
            var gateinDtm = "";
            // //이전작업단계 도착일시, 출발일시 체크(자가반출은 제외 20060422)
            if (!$c.util.isEmpty($p, ds_outGrid.getCellData(i, 'gateinDth'))) {
              gateinDtm = ds_outGrid.getCellData(i, 'gateinDth');
            } else {
              gateinDtm = ds_outManagementItem.getCellData(rowCnt, 'gateinDth');
            }
            if (ds_outManagementItem.getCellData(rowCnt, 'dptDtm') != "") {
              if (!$c.util.isEmpty($p, gateinDtm)) {
                if (ds_outManagementItem.getCellData(rowCnt, 'dptDtm') > gateinDtm) {
                  blnGateProcessOk = false;
                  continue;
                }
              }
            }
            if (ds_outManagementItem.getCellData(rowCnt, 'arvDtm') != "") {
              if (!$c.util.isEmpty($p, gateinDtm)) {
                if (ds_outManagementItem.getCellData(rowCnt, 'arvDtm') > gateinDtm) {
                  blnGateProcessOk = false;
                  continue;
                }
              }
            }
            if (ds_outManagementItem.getCellData(rowCnt, 'cntrNoYn') == "1") {
              //반입 에서 동일오더에 이미 반입된 컨테이너 존재유무 체크
              blnGateProcessOk = false;
              continue;
            }
            if (ds_outGrid.getCellData(i, 'xrayLupTrgtYn') == "1" && ds_outGrid.getCellData(i, 'odrKndCd') == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR && ds_outManagementItem.getCellData(rowCnt, 'xrayLupOdrYn') == "0") {
              blnGateProcessOk = false;
              continue;
            }

            //detention관련 반입체크
            if (ds_outManagementItem.getCellData(rowCnt, 'detention') == "DETENTION(반입불가)") {
              blnGateProcessOk = false;
              continue;
            }
            var confirmMsg = "";
            //OFF 반납구분이 DOOR 반납구분일때 반납못하도록  제어함.
            if (ds_outManagementItem.getCellData(rowCnt, 'offRtrnClsCd') == "1") {
              confirmMsg += "OFF-반납입니다. 라인담당자에게  문의하세요!!!";
              blnGateProcessOk = false;
            }
            if (!$c.util.isEmpty($p, confirmMsg)) {
              await $c.gus.cfAlertMsg($p, confirmMsg);
            }
            if ($c.util.isEmpty($p, ds_outGrid.getCellData(i, 'gateinDth')) && blnGateProcessOk) {
              ds_outGrid.setCellData(i, 'gateinDth', ds_outManagementItem.getCellData(rowCnt, 'gateinoutDth'));
            }
            if (blnGateProcessOk) {
              if (ds_outManagementItem.getCellData(rowCnt, 'chassisChk') == "1" && ds_outGrid.getCellData(i, 'chassisChkYn') != "1") {
                continue;
              }
            } else {
              continue;
            }
          }
          ds_outGrid.setCellData(i, "gridChkBox", "1");
        }
      } else {
        ds_outGrid.setBroadcast(false);
        for (var i = 0; i < cr; i++) {
          ds_outGrid.setCellData(i, "gridChkBox", chk);
        }
        ds_outGrid.setBroadcast(true, true);
      }
    }
  }
};
scwin.udc_dptArvWrkPlCd_onkeyup = function (e) {
  var val = e.target.value;
  val = val.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
  this.setValue(val);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_outGrid.getRowCount();
  var sheetTitle = "Gate In 예정정보";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle,
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_gridView, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.txt_cntrNo_onkeyup = function (e) {
  txt_cntrNo.setValue(txt_cntrNo.getValue().toUpperCase());
};
scwin.txt_cntrNo2_onkeyup = function (e) {
  txt_cntrNo2.setValue(txt_cntrNo2.getValue().toUpperCase());
};
scwin.txt_odrNo_onkeyup = function (e) {
  txt_odrNo.setValue(txt_odrNo.getValue().toUpperCase());
};
scwin.txt_portCnt_onkeyup = function (e) {
  txt_portCnt.setValue(txt_portCnt.getValue().toUpperCase());
};
scwin.txt_eqCd_onkeyup = function (e) {
  txt_eqCd.setValue(txt_eqCd.getValue().toUpperCase());
};
scwin.txt_eqCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_eqCd, txt_eqNo, '7', true);
};
scwin.btn_allApp_onclick = function (e) {
  scwin.f_allApply();
};

//-------------------------------------------------------------------------
// 그리드 운행상태 customFormatter
//-------------------------------------------------------------------------
scwin.cntrNoExp = function (data, formatData, rowIdx, colIdx) {
  if (ds_outGrid.getCellData(rowIdx, "cntrNoYn") == "0") {
    if (ds_outGrid.getCellData(rowIdx, "crryinoutClsCd") == DsConstants.CRRYINOUT_CLS_CD_IN) {
      gr_gridView.setCellStyle(rowIdx, colIdx, "color", "blue");
    }
  } else if (ds_outGrid.getCellData(rowIdx, "cntrNoYn") == "1") {
    if (ds_outGrid.getCellData(rowIdx, "selfClsCd") != "JE") {
      if (ds_outGrid.getCellData(rowIdx, "indvdlAlloccarYn") == DsConstants.INDVDL_ALLOCCAR_TEMPORARY) {
        if (ds_outGrid.getCellData(rowIdx, "wrkStpCd") != DsConstants.WRK_STP_CD_SHUTTLE) {
          if (ds_outGrid.getCellData(rowIdx, "crryinoutClsCd") == DsConstants.GATE_INOUT_CLS_CD_OUT) {
            if (ds_outGrid.getCellData(rowIdx, "odrKndCd") == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
              if (ds_outGrid.getCellData(rowIdx, "chkFlag") == "I") {
                gr_gridView.setCellStyle(rowIdx, colIdx, "color", "blue");
              }
            }
          }
        }
      }
    }
  }
  return data;
};
scwin.lineCdExp = function (data, formatData, rowIdx, colIdx) {
  if (ds_outGrid.getCellData(rowIdx, "chkFlag") == "C") {
    gr_gridView.setCellStyle(rowIdx, colIdx, "color", "blue");
    gr_gridView.setCellClass(rowIdx, colIdx, "linktype");
  }
  return data;
};
scwin.cntrTypCdExp = function (data, formatData, rowIdx, colIdx) {
  if (ds_outGrid.getCellData(rowIdx, "cntrTypCd") == "RF") {
    gr_gridView.setCellStyle(rowIdx, colIdx, "color", "blue");
    gr_gridView.setCellClass(rowIdx, colIdx, "linktype");
  }
  return data;
};
scwin.wrkStpSeq = function (data, formatData, rowIdx, colIdx) {
  return ds_outGrid.getCellData(rowIdx, "wrkStpSeq");
};
scwin.ds_outGrid_onrowpositionchange = function (info) {
  var rowIndex = info.newRowIndex;
  if (ds_outGrid.getCellData(rowIndex, 'xrayLupTrgtYn') == "1") {
    gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", false);
  } else {
    gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", true);
  }
};
scwin.ds_outGrid_oncelldatachange = function (info) {
  var rowIndex = info.rowIndex;
  var colID = info.colID;
  if (colID == "xrayLupTrgtYn") {
    if (ds_outGrid.getCellData(rowIndex, 'xrayLupTrgtYn') == "1") {
      gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", false);
    } else {
      gr_gridView.setCellReadOnly(rowIndex, "rettlClsCd", true);
    }
  }
  if (colID == "ltier") {
    if (ds_outGrid.getCellData(rowIndex, 'ltier') == "") return;
    dma_inCntrPositionInfo.set("wrkPlCd", ds_outGrid.getCellData(rowIndex, 'wrkPlCd'));
    dma_inCntrPositionInfo.set("lblock", ds_outGrid.getCellData(rowIndex, 'lblock'));
    dma_inCntrPositionInfo.set("lbay", ds_outGrid.getCellData(rowIndex, 'lbay'));
    dma_inCntrPositionInfo.set("lrow", ds_outGrid.getCellData(rowIndex, 'lrow'));
    dma_inCntrPositionInfo.set("ltier", ds_outGrid.getCellData(rowIndex, 'ltier'));
    $c.sbm.execute($p, sbm_cntrPositionInfo);
  }
};
scwin.f_cntrSeqSearch = function (row) {
  if ($c.util.isEmpty($p, row)) {
    row = ds_outGrid.getRowPosition();
  }
  if (ds_outGrid.getCellData(row, 'cntrSeq') == "0" && !$c.util.isEmpty($p, ds_outGrid.getCellData(row, 'cntrNo')) && ("B" == ds_outGrid.getCellData(row, 'reqClsCd') || "C" == ds_outGrid.getCellData(row, 'reqClsCd'))) {
    dma_cntrNoSeqInfo.set("cntrNo", ds_outGrid.getCellData(row, 'cntrNo'));
    dma_cntrNoSeqInfo.set("odrNo", ds_outGrid.getCellData(row, 'odrNo'));
    dma_cntrNoSeqInfo.set("alloccarNo", ds_outGrid.getCellData(row, 'alloccarNo'));
    dma_cntrNoSeqInfo.set("alloccarSeq", ds_outGrid.getCellData(row, 'alloccarSeq'));
    dma_cntrNoSeqInfo.set("reqClsCd", ds_outGrid.getCellData(row, 'reqClsCd'));
    dma_cntrNoSeqInfo.set("dptArvWrkPlCd", ds_outGrid.getCellData(row, 'dptArvWrkPlCd'));
    $c.sbm.execute($p, sbm_block);
  }
};
scwin.sbm_containerSeqInfo_submitdone = function (e) {
  var row = ds_outGrid.getRowPosition();
  if (ds_CntrNoSeqInfo.getCellData(0, 'cntrSeq') == "0" || $c.util.isEmpty($p, ds_CntrNoSeqInfo.getCellData(0, 'cntrSeq'))) {
    ds_outGrid.setCellData(row, 'gridChkBox', "0");
    $c.gus.cfAlertMsg($p, "오더 번호를 확인하십시요.");
  } else {
    ds_outGrid.setCellData(row, 'cntrSeq', ds_CntrNoSeqInfo.getCellData(0, 'cntrSeq'));
    ds_outGrid.setCellData(row, 'wrkPathSeq', ds_CntrNoSeqInfo.getCellData(0, 'wrkPathSeq'));
    ds_outGrid.setCellData(row, 'wrkStpSeq', ds_CntrNoSeqInfo.getCellData(0, 'wrkStpSeq'));
    ds_outGrid.setCellData(row, 'arrvlportDtm', ds_CntrNoSeqInfo.getCellData(0, 'arrvlportDtm'));
    if (!$c.util.isEmpty($p, ds_CntrNoSeqInfo.getCellData(0, 'cntrNo'))) {
      ds_outGrid.setCellData(row, 'cntrNoYn', "1");
    }
  }
};
scwin.sbm_gateIn_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.udc_wrkPlCd_onblurNameEvent = function (e) {};
scwin.cf_CheckCntrNo = function (parCntrNo) {
  var tempData = "1012131415161718192021232425262728293031323435363738";
  var cntrNo = parCntrNo.trim();
  if (cntrNo == "" || cntrNo.length != 11) {
    //cfAlertMsg(MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
    return false;
  } else {
    var re = /[A-Z]{4}[0-9]{7}/;
    if (!re.test(cntrNo)) {
      //cfAlertMsg(MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
      return false;
    }
    var tempPos1 = tempData.substr((cntrNo.charCodeAt(0) - 65) * 2, 2) * 1;
    var tempPos2 = tempData.substr((cntrNo.charCodeAt(1) - 65) * 2, 2) * 2;
    var tempPos3 = tempData.substr((cntrNo.charCodeAt(2) - 65) * 2, 2) * 4;
    var tempPos4 = tempData.substr((cntrNo.charCodeAt(3) - 65) * 2, 2) * 8;
    var tempSum = tempPos1 + tempPos2 + tempPos3 + tempPos4 + cntrNo.substr(4, 1) * 16 + cntrNo.substr(5, 1) * 32 + cntrNo.substr(6, 1) * 64 + cntrNo.substr(7, 1) * 128 + cntrNo.substr(8, 1) * 256 + cntrNo.substr(9, 1) * 512;
    var tempMod = tempSum % 11 + "";
    if (cntrNo.substr(10, 1) != tempMod.charAt(tempMod.length - 1)) {
      //cfAlertMsg(MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
      return false;
    }
  }
  return true;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_queryList',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',btnId:'btn_wrkPlCd',code:'wrkPlCd',codeId:'ed_wrkPlCd',id:'udc_wrkPlCd',maxlengthCode:'5',nameId:'txt_wrkPlNm',onChange:'if(ed_hhlodcd.Text==\'\'){f_OpenCommonPopUp(\'Loading\',\'F\',\'F\',\'F\')}',onClick:'f_OpenCommonPopUp(\'Loading\',\'F\',\'F\',\'F\')',popupID:'',refDataCollection:'dma_inGrid',selectID:'',style:'',validTitle:'작업장',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',codeWidth:'70',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호(',style:''}},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_selfCar',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:')',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'txt_vehclShortCd',nameId:'txt_vehclNo',popupID:'',popupTitle:'',selectID:'retrieveVehiclesNo',style:'',btnId:'btn_vehclCd',id:'udc_vehclCd',refDataCollection:'dma_inGrid','ev:onblurCodeEvent':'scwin.udc_vehclCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_vehclCd_onclickEvent',UpperFlagCode:'1',maxlengthCode:'4',name:'vehclNo',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w120',id:'txt_cntrNo',placeholder:'',style:'',ref:'data:dma_inGrid.cntrNo','ev:onkeyup':'scwin.txt_cntrNo_onkeyup',maxlength:'11',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'or',style:''}},{T:1,N:'xf:input',A:{class:'form-control w120',id:'txt_cntrNo2',placeholder:'',style:'',ref:'data:dma_inGrid.cntrNo2','ev:onkeyup':'scwin.txt_cntrNo2_onkeyup',maxlength:'11',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear2',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출/반입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w120',editType:'select',id:'lc_crryInOutCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_inGrid.crryinoutClsCd'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w110',id:'txt_odrNo',style:'',ref:'data:dma_inGrid.odrNo','ev:onkeyup':'scwin.txt_odrNo_onkeyup',maxlength:'15',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출도착지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_dptArvWrkPlCd',nameId:'txt_dptArvWrkPlNm',popupID:'',popupTitle:'',selectID:'retrieveWrkPlInfo',style:'',btnId:'btn_dptArvWrkPlCd',id:'udc_dptArvWrkPlCd',refDataCollection:'dma_inGrid',code:'dptArvWrkPlCd','ev:onblurCodeEvent':'scwin.udc_dptArvWrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dptArvWrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptArvWrkPlCd_onclickEvent','ev:onkeyup':'scwin.udc_dptArvWrkPlCd_onkeyup',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',UpperFlagName:'1',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_lineCd',nameId:'txt_lineNm',popupID:'',popupTitle:'',selectID:'retrieveLineInfo',style:'',id:'udc_lineCd',btnId:'btn_lineCd',refDataCollection:'dma_inGrid',code:'lineCd','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w120',editType:'select',id:'lc_cntrSpec',search:'start',style:'',submenuSize:'auto',ref:'data:dma_inGrid.cntrSpec',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vsslCd',nameId:'txt_vsslNm',popupID:'',popupTitle:'',selectID:'retrieveOrdVsslInfo',style:'',btnId:'btn_vsslCd',id:'udc_vsslCd',refDataCollection:'dma_inGrid',code:'vsslCd','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vsslCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',progressBarSwitch:'N',codeWidth:'70'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w110',id:'txt_portCnt',style:'',ref:'data:dma_inGrid.portCnt','ev:onkeyup':'scwin.txt_portCnt_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반입완료여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w120',editType:'select',id:'lc_crryinoutYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_inGrid.crryinoutYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반출입예정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반입완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',btnId:'btn_wrkPlCdG1',codeId:'ed_wrkPlCdG1',id:'udc_wrkPlCdG1',maxlengthCode:'5',nameId:'txt_wrkPlNmG1',onChange:'if(ed_hhlodcd.Text==\'\'){f_OpenCommonPopUp(\'Loading\',\'F\',\'F\',\'F\')}',onClick:'f_OpenCommonPopUp(\'Loading\',\'F\',\'F\',\'F\')',popupID:'',selectID:'',style:';display:none;',validTitle:'작업장'}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_wrkPlCd',codeId:'ed_wrkPlCdG',id:'udc_wrkPlCdG',mandatoryCode:'true',mandatoryName:'작업장',maxlengthCode:'5',nameId:'txt_wrkPlNmG',popupID:'',popupTitle:'',progressBarSwitch:'N',selectID:'',style:';display:none;',validTitle:'작업장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'txt_odrKndQry',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:';margin-right:10px;padding-right:10px;border-spacing:5px;text-align:center;',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선 오더제외(C1,CT)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Gate In 예정정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입일시',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:'form-control cal',id:'ed_gateInDth',style:'',mandatory:'true',title:'반출입일시'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'form-control w50',id:'txt_eqCd',placeholder:'',style:'','ev:onkeyup':'scwin.txt_eqCd_onkeyup','ev:onblur':'scwin.txt_eqCd_onblur'}},{T:1,N:'xf:input',A:{class:'form-control w100',id:'txt_eqNo',style:'',disabled:'true'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_allApp',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_allApp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_gridView',grdDownOpts:'{"fileName" : "Gate In 예정정보.xlsx" }',gridUpYn:'N',btnUser:'Y',btnPlusYn:'Y',gridDownYn:'Y',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_outGrid',id:'gr_gridView',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_gridView_oncellclick',tooltipFormatter:'scwin.f_onToolTip',tooltipDisplay:'true',tooltipShowAlways:'true','ev:onkeydown':'scwin.gr_gridView_onkeydown','ev:oncelldblclick':'scwin.gr_gridView_oncelldblclick','ev:ontextimageclick':'scwin.gr_gridView_ontextimageclick','ev:oneditend':'scwin.gr_gridView_oneditend','ev:oncellindexchange':'scwin.gr_gridView_oncellindexchange','ev:onafteredit':'scwin.gr_gridView_onafteredit','ev:onheaderclick':'scwin.gr_gridView_onheaderclick',rowStatusVisible:'true',rowStatusWidth:'25',ignoreNonEditableCellTabEnter:'true',keyMoveEditMode:'true',columnMove:'false','ev:onbeforeedit':'scwin.gr_gridView_onbeforeedit',moveKeyEditModeAll:'true',fixedColumnNoMove:'true',fixedColumn:'1',moveKeyEditMode:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gridChkBox',inputType:'checkbox',value:'',width:'30',fixColumnWidth:'true',trueValue:'1',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'컨테이너',width:'100',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'I/O',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SOC<br/>확인',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'SEAL<br/>NO',width:'70',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'F/E',width:'70',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출도착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'SZ',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'TP',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column65',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'차량ID',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'차량번호',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'샤시번호',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',value:'반출입일시',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'반입예정일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'특이사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column51',value:'연락처',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'상차요청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'부킹번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'작업단계<br/>순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'검색기<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'검색기전<br/>반입여부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'R/F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'BLOCK',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'BAY',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'ROW',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'TIER',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'목적항구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'반입EDI',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'반출EDI',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'정산여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',value:'셔틀',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',value:'자가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column81',value:'cntrSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'wrkPathSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column77',value:'COPINO오류내역',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column75',value:'구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'column73',value:'PDA_CNTR',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'column67',value:'PDA_SEAL',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'PDA_샤시',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gridChkBox',inputType:'checkbox',width:'30',fixColumnWidth:'true',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100',textAlign:'left',maxLength:'11',customFormatter:'scwin.cntrNoExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutClsCd',inputType:'select',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socChkBox',inputType:'checkbox',width:'70',textAlign:'center',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'70',textAlign:'left',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',readOnly:'true',textAlign:'center',customFormatter:'scwin.lineCdExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70',class:'linktype',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70',class:'',textAlign:'center',readOnly:'true',customFormatter:'scwin.cntrTypCdExp'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'odrNo',displayMode:'label',class:'linktype',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclIdCardNo',displayMode:'label',textAlign:'center',maxLength:'12'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'vehclNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'chassisNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'gateinDth',displayMode:'label',dataType:'date',calendarValueType:'yearMonthDateTime'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'crryinoutDthh',displayMode:'label',dataType:'date',calendarValueType:'yearMonthDateTime',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'cntrWrkClsCd',displayMode:'label',textAlign:'left',readOnly:'true',class:'',style:';color:#FF0000;'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'drvTelNo',displayMode:'label',textAlign:'left',maxLength:'30'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onReqNo',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookingNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpSeq',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'xrayLupTrgtYn',displayMode:'label',customFormatter:'scwin.f_customFormatter',class:'',textAlign:'center',readOnly:'true',style:';color:#FF0000;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'rettlClsCd',displayMode:'label',trueValue:'1',falseValue:'0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'rfGubun',displayMode:'label',readOnly:'true',trueValue:'1',falseValue:'0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'lblock',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_block'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'lbay',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'lrow',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'ltier',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portNm',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinEdiFlag',displayMode:'label',textAlign:'left',customFormatter:'scwin.f_customFormatter',class:'',readOnly:'true',style:';color:#FF0000;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryoutEdiFlag',displayMode:'label',textAlign:'left',customFormatter:'scwin.f_customFormatter',class:'',readOnly:'true',style:';color:#FF0000;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dummy',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStpCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrKndCd',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfClsCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntrSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPathSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'copinoResponse',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'reqClsCd',displayMode:'label',textAlign:'left',readOnly:'true',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'pdaCntrNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'pdaSealNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pdaChassisNo',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'mt4 mb4 txt-blue',style:'height:100%;',tagname:'h3'},E:[{T:1,N:'w2:span',A:{style:'',label:'',id:'sp_rmk',class:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_dcsn',style:'',type:'button','ev:onclick':'scwin.btn_dcsn_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인/할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_vehclNoOpen',style:'',type:'button','ev:onclick':'scwin.btn_vehclNoOpen_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량변경'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ozprint',style:'',type:'button','ev:onclick':'scwin.btn_ozprint_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상차/하차 지시서 인쇄'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_change',style:'',type:'button','ev:onclick':'scwin.btn_change_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업경로수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_crryInOutEDI',style:'',type:'button','ev:onclick':'scwin.btn_crryInOutEDI_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반입정보EDI등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_saveAuto',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_saveAuto_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'G/I(A/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_SaveManual',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_SaveManual_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'G/I(M/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'G/I 처리'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예정정보삭제'}]}]}]}]}]}]}]}]}]})