/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_01b.xml 107437 649ae06d6b092358d26be41eefc09fb86a2ee09893649d14465f6f745a856241 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'확정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'출항;처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'등록;점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차;담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'계약처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선;관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'선박/항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'TS선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCdPortcnt',name:'TS선박/항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDtm',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDtm',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hayukYn',name:'본선완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo2',name:'계약거래처코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm2',name:'계약거래처2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BK/BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternNm',name:'작업유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'취소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemNm',name:'취소항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDtm',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'완료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'오더생성일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'20E',name:'20E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20e',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr20e',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'20F',name:'20F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr20f',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr20f',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'40E',name:'40E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40e',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr40e',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'40F',name:'40F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr40f',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr40f',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'4HE',name:'4HE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr4he',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr4he',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'4HF',name:'4HF',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr4hf',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr4hf',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'45E',name:'45E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr45e',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr45e',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'45F',name:'45F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntr45f',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uncompleteCntr45f',name:'미완료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderRetrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrDtFrom',name:'오더기간 From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDtTo',name:'오더기간 To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrWrkDtFrom',name:'출발일자 From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrWrkDtTo',name:'출발일자 To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regBranNm',name:'등록점소명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicNm',name:'배차담당자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPatternCd',name:'작업유형코드 (기본)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workPatternCd',name:'작업유형코드 (추가)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'autoOrderYn',name:'자동오더조회여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stvOdrClsCd',name:'하역오더구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageClsCd',name:'화면구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'salesPurchaseType',name:'매출입여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_batchOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_batchOutDtl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'adptExchRtDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'alloccarPicId'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'alloccarPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'arvDtl'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'arvOprCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'arvTmlVsslPortcnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'arvZip'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'bilgClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'bilgClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'bilgLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'bilgLodeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'bkNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'bondTransExpireDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'chClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'clntMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'closeDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'closeHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'cntrDsgYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'cntrRtrnDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'cntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name25',id:'ctrtClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name26',id:'ctrtClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name27',id:'ctrtNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name28',id:'cvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name29',id:'demDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name30',id:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name31',id:'doNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name32',id:'dptDtl'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name33',id:'dptOprCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name34',id:'dptTmlVsslPortcnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name35',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name36',id:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name37',id:'dptZip'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name38',id:'expDeclarNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name39',id:'freeDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name40',id:'fwdCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name41',id:'hsn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name42',id:'impExpDomesticClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name43',id:'lduldDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name44',id:'lduldDtl'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name45',id:'lduldHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name46',id:'lduldPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name47',id:'lduldPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name48',id:'lduldWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name49',id:'lduldWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name50',id:'lduldZip'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name51',id:'liVanTerm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name52',id:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name53',id:'lineNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name54',id:'masterKey'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name55',id:'mcomAssgnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name56',id:'mgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name57',id:'mrn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name58',id:'msn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name59',id:'nonCtrtYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name60',id:'odrClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name61',id:'odrCtrlClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name62',id:'odrDcsnYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name63',id:'odrDelYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name64',id:'odrDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name65',id:'odrKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name66',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name67',id:'offPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name68',id:'offPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name69',id:'onPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name70',id:'onPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name71',id:'oprBlNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name72',id:'oprDoNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name73',id:'oprImpexpClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name74',id:'portcnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name75',id:'railroadAdptDstCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name76',id:'railroadArvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name77',id:'railroadArvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name78',id:'railroadDptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name79',id:'railroadDptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name80',id:'realMchtClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name81',id:'regBranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name82',id:'reqClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name83',id:'reqClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name84',id:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name85',id:'rsnCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name86',id:'rsnTxt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name87',id:'selfClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name88',id:'sellLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name89',id:'sellLodeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name90',id:'sellYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name91',id:'shpCoClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name92',id:'shpCoClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name93',id:'taxnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name94',id:'transCargoClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name95',id:'transCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name96',id:'transhipYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name97',id:'trnsCnsgMchtClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name98',id:'trnsCnsgMchtClntTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name99',id:'trnsRealMchtClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name100',id:'trnsRealMchtClntTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name101',id:'tsCvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name102',id:'tsPortcnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name103',id:'tsVsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name104',id:'tsVsslNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name105',id:'vsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name106',id:'vsslNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name107',id:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name108',id:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name109',id:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name110',id:'wrkStHh'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'arrvlportDtm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'bookingNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'c2ClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'ciClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'ciOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'cntrWrkClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'cntrWrkShapeCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'ctrtWrkPathNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'ctrtWrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'currPosCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'cxClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'cxOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'cyEmptyYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'destPortNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name25',id:'expDeclarNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name26',id:'expSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name27',id:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name28',id:'impDangerCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name29',id:'impSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name30',id:'impTemper'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name31',id:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name32',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name33',id:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name34',id:'portNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name35',id:'reqNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name36',id:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name37',id:'scAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name38',id:'sellAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name39',id:'sellAmt1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name40',id:'sellAmt2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name41',id:'sellItemCd1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name42',id:'sellItemCd2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name43',id:'selpchItemNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name44',id:'socYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name45',id:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name46',id:'unno'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name47',id:'wrkRsltsNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name48',id:'wt'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_batchCndt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'name1',id:'batch_run'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndOdrNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'name1',id:'odrNo'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveOrderPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderRetrieve","key":"IN_DS1"},{"id":"ds_orderList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.ConfirmOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_odrInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_autoSel',action:'/ds.op.rscconfirm.transrscconfirm.ExcuteAutoSellingProcCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_batchCndt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveNcall',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveBasicOdrListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_cntrInfo","key":"OUT_DS2"},{"id":"ds_odrInfo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveNcall_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',src:'/ui/ds/co/constants/DsConstants.js'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hid_chkCvsslMgntNo = ""; // 본선관리번호
scwin.hid_chkLineCd = ""; // LINE
scwin.hid_chkBilgClntNo = ""; // 청구처
scwin.hid_chkRegId = ""; // 등록자 ID
scwin.hid_chkRegBranCd = ""; // 등록점소코드
scwin.hid_autoOrderYn = ""; // 자동오더조회 여부
scwin.hid_autoOdrYn = ""; // 자동오더여부
scwin.hid_checkOrder = ""; // 오더정보조회 확인
scwin.hid_pageClsCd = "D"; // 화면구분코드(D:DONGBU)

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -7);
scwin.strBulkOrderUrl = "ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
scwin.strContainerOrderUrl = "ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
scwin.strContainerOrderUrl2 = "ui/ds/sd/odrmgnt/odrreg/sd_402_01_61b.xml";
scwin.ntisUrl = "http://ntis.dongwon.com";
scwin.debisUrl = "http://debis.dongwon.com";
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.userNm = $c.data.getMemInfo($p, "userNm");
scwin.userEmail = $c.data.getMemInfo($p, "email");
scwin.retrieveSuccess = false;
scwin.checkOrder = false;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP194",
    compID: "lc_impExpDomesticClsCd"
  }, {
    grpCd: "OP190",
    compID: "lc_transCargoClsCd"
  }, {
    grpCd: "SD113",
    compID: "lc_odrKndCd"
  }, {
    grpCd: "SD114",
    compID: "lc_selfClsCd"
  }, {
    grpCd: "SD164",
    compID: "lc_stvOdrClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callbackCombo);
};
scwin.callbackCombo = function () {
  scwin.insertDatalist(dlt_commonCodeOP194);
  scwin.insertDatalist(dlt_commonCodeOP190);
  scwin.insertDatalist(dlt_commonCodeSD113);
  scwin.insertDatalist(dlt_commonCodeSD114);
  scwin.insertDatalist(dlt_commonCodeSD164);

  // 초기값 이벤트발생안해서 호출
  scwin.f_checkAuctoOrder();
};
scwin.onUdcCompleted = function () {
  txt_cvsslMgntNm.hide();

  // 초기화
  scwin.f_defaultValue();
  if (scwin.userId == "281776") {
    btnAutoSel.hide();
  }

  // 초기값 이벤트발생안해서 호출
  scwin.lc_odrSearchDt_onchange();
  scwin.lc_bookingBl_onchange();
};

// 조회
scwin.f_Retrieve = async function (e) {
  if (lc_odrSearchDt.getSelectedIndex() == 0) {
    // 오더기간 From - To 입력 확인
    if (!(await $c.gus.cfValidate($p, [ed_odrDtFrom, ed_odrDtTo]))) {
      return;
    }

    // 오더기간 범위 확인  
    if (!(await $c.gus.cfIsAfterDate($p, ed_odrDtFrom.getValue(), ed_odrDtTo.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["오더기간 From", "오더기간 To"]);
      ed_odrDtFrom.focus();
      return false;
    }
    let diffObj = await $c.gus.cfDifferBetween($p, ed_odrDtFrom.getValue(), ed_odrDtTo.getValue());

    // 오더기간이 1달 이상인경우 확인
    if (diffObj.year > 0 || diffObj.month > 0 && !scwin.checkOrder) {
      let chk = await $c.win.confirm($p, "오더기간 이 1개월이 넘습니다.조회하시겠습니까?");
      if (!chk) {
        ed_odrDtFrom.focus();
        return false;
      }
    }
  } else if (lc_odrSearchDt.getSelectedIndex() == 1) {
    // 출발일자 From - To 입력 확인
    if (!(await $c.gus.cfValidate($p, [ed_odrWrkDtFrom, ed_odrWrkDtTo]))) {
      return;
    }

    // 오더기간 범위 확인
    if (!(await $c.gus.cfIsAfterDate($p, ed_odrWrkDtFrom.getValue(), ed_odrWrkDtTo.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["출발일자 From", "출발일자 To"]);
      ed_odrWrkDtFrom.focus();
      return false;
    }
    let diffObj = await $c.gus.cfDifferBetween($p, ed_odrWrkDtFrom.getValue(), ed_odrWrkDtTo.getValue());

    // 출발일자기간이 1달 이상인경우 확인
    if (diffObj.year > 0 || diffObj.month > 0) {
      let chk = await $c.win.confirm($p, "출발일자 기간이 1개월이 넘습니다.조회하시겠습니까?");
      if (!chk) {
        ed_odrWrkDtFrom.focus();
        return false;
      }
    }
  }

  // 오더번호가 입력된 경우 오더번호 형식 확인
  if (ed_odrNo.getValue().length > 0) {
    if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) {
      return false;
    }
  }
  scwin.checkOrder = false;
  dma_orderRetrieve.set("autoOrderYn", scwin.hid_autoOrderYn);
  dma_orderRetrieve.set("pageClsCd", scwin.hid_pageClsCd);
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  lc_odrSearchDt.setSelectedIndex(0, true);
  ed_odrDtFrom.setValue(scwin.strPreDate);
  ed_odrDtTo.setValue(scwin.strCurDate);
  lc_odrKndCd.focus();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  dma_orderRetrieve.setEmptyValue();
  scwin.f_FieldClear();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  scwin.f_setGridColumn();
};

//-------------------------------------------------------------------------
// GRID 초기화
//-------------------------------------------------------------------------
scwin.f_setGridColumn = function (code) {
  switch (code) {
    case DsConstants.DOMESTIC_CD:
      gr_orderList.setColumnVisible("cvsslMgntNo", false); // 본선관리번호
      gr_orderList.setColumnVisible("vsslCdPortcnt", false); // 선박/항차
      gr_orderList.setColumnVisible("lineCd", false); // LINE
      gr_orderList.setColumnVisible("dmndNm", true); // 수요가
      gr_orderList.setColumnVisible("blBk", false); // BL(BK)
      gr_orderList.setColumnVisible("clntMgntNo", true); // 화주오더번호
      gr_orderList.setColumnVisible("wrkPatternNm", true); // 작업유형
      gr_orderList.setColumnVisible("odrCnclYn", true); // 취소
      gr_orderList.setColumnVisible("odrCnclItemNm", true); // 취소항목
      gr_orderList.setColumnVisible("cntr20e", false); // 20E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr20f", false); // 20F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40e", false); // 40E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40f", false); // 40F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4he", false); // 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4hf", false); // 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("cntr45e", false); // 45E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", false); // 45F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20e", false); // 미완료 20E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20f", false); // 미완료 20F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40e", false); // 미완료 40E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40f", false); // 미완료 40F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4he", false); // 미완료 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4hf", false); // 미완료 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("uncompleteCntr45e", false); // 미완료 45E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", false); // 미완료 45F 컨테이너 개수
      gr_orderList.setColumnVisible("hayukYn", true); // 하역완료여부
      gr_orderList.setColumnVisible("tsVsslNm", false); // TS모선명
      gr_orderList.setColumnVisible("tsVsslCdPortcnt", false); // TS모선/항차  
      gr_orderList.setColumnVisible("selYn", false); // 출항처리

      break;
    case DsConstants.ODR_BULK:
      gr_orderList.setColumnVisible("cvsslMgntNo", true); // 본선관리번호
      gr_orderList.setColumnVisible("vsslCdPortcnt", true); // 선박/항차
      gr_orderList.setColumnVisible("lineCd", true); // LINE
      gr_orderList.setColumnVisible("dmndNm", false); // 수요가
      gr_orderList.setColumnVisible("blBk", false); // BL(BK)
      gr_orderList.setColumnVisible("clntMgntNo", false); // 화주오더번호
      gr_orderList.setColumnVisible("wrkPatternNm", false); // 작업유형
      gr_orderList.setColumnVisible("odrCnclYn", false); // 취소
      gr_orderList.setColumnVisible("odrCnclItemNm", false); // 취소항목
      gr_orderList.setColumnVisible("cntr20e", false); // 20E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr20f", false); // 20F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40e", false); // 40E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40f", false); // 40F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4he", false); // 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4hf", false); // 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("cntr45e", false); // 45E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr45f", false); // 45F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", false); // 45F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20e", false); // 미완료 20E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20f", false); // 미완료 20F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40e", false); // 미완료 40E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40f", false); // 미완료 40F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4he", false); // 미완료 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4hf", false); // 미완료 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("uncompleteCntr45e", false); // 미완료 45E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", false); // 미완료 45F 컨테이너 개수
      gr_orderList.setColumnVisible("hayukYn", true); // 하역완료여부
      gr_orderList.setColumnVisible("tsVsslNm", false); // TS모선명
      gr_orderList.setColumnVisible("tsVsslCdPortcnt", false); // TS모선/항차
      gr_orderList.setColumnVisible("selYn", false); // 출항처리

      break;
    case DsConstants.ODR_CNTR:
      gr_orderList.setColumnVisible("cvsslMgntNo", true); // 본선관리번호
      gr_orderList.setColumnVisible("vsslCdPortcnt", true); // 선박/항차
      gr_orderList.setColumnVisible("lineCd", true); // LINE
      gr_orderList.setColumnVisible("dmndNm", false); // 수요가
      gr_orderList.setColumnVisible("blBk", false); // BL(BK)
      gr_orderList.setColumnVisible("clntMgntNo", true); // 화주오더번호
      gr_orderList.setColumnVisible("wrkPatternNm", false); // 작업유형
      gr_orderList.setColumnVisible("odrCnclYn", false); // 취소
      gr_orderList.setColumnVisible("odrCnclItemNm", false); // 취소항목
      gr_orderList.setColumnVisible("cntr20e", true); // 20E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr20f", true); // 20F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40e", true); // 40E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40f", true); // 40F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4he", true); // 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4hf", true); // 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("cntr45e", true); // 45E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr45f", true); // 45F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", true); // 45F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20e", true); // 미완료 20E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20f", true); // 미완료 20F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40e", true); // 미완료 40E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40f", true); // 미완료 40F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4he", true); // 미완료 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4hf", true); // 미완료 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("uncompleteCntr45e", true); // 미완료 45E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", true); // 미완료 45F 컨테이너 개수
      gr_orderList.setColumnVisible("hayukYn", true); // 하역완료여부
      gr_orderList.setColumnVisible("tsVsslNm", true); // TS모선명
      gr_orderList.setColumnVisible("tsVsslCdPortcnt", true); // TS모선/항차
      gr_orderList.setColumnVisible("selYn", true); // 출항처리

      break;
    default:
      gr_orderList.setColumnVisible("cvsslMgntNo", true); // 본선관리번호
      gr_orderList.setColumnVisible("vsslCdPortcnt", true); // 선박/항차
      gr_orderList.setColumnVisible("lineCd", true); // LINE
      gr_orderList.setColumnVisible("dmndNm", false); // 수요가
      gr_orderList.setColumnVisible("blBk", false); // BL(BK)
      gr_orderList.setColumnVisible("clntMgntNo", true); // 화주오더번호
      gr_orderList.setColumnVisible("wrkPatternNm", false); // 작업유형
      gr_orderList.setColumnVisible("odrCnclYn", false); // 취소
      gr_orderList.setColumnVisible("odrCnclItemNm", false); // 취소항목
      gr_orderList.setColumnVisible("cntr20e", true); // 20E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr20f", true); // 20F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40e", true); // 40E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr40f", true); // 40F 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4he", true); // 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("cntr4hf", true); // 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("cntr45e", true); // 45E 컨테이너 개수
      gr_orderList.setColumnVisible("cntr45f", true); // 45F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", true); // 45F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20e", true); // 미완료 20E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr20f", true); // 미완료 20F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40e", true); // 미완료 40E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr40f", true); // 미완료 40F 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4he", true); // 미완료 4HE 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr4hf", true); // 미완료 4HF 컨테이너 개수  			
      gr_orderList.setColumnVisible("uncompleteCntr45e", true); // 미완료 45E 컨테이너 개수
      gr_orderList.setColumnVisible("uncompleteCntr45f", true); // 미완료 45F 컨테이너 개수
      gr_orderList.setColumnVisible("hayukYn", true); // 하역완료여부
      gr_orderList.setColumnVisible("tsVsslNm", true); // TS모선명
      gr_orderList.setColumnVisible("tsVsslCdPortcnt", true); // TS모선/항차 
      gr_orderList.setColumnVisible("selYn", true); // 출항처리

      break;
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let pWhere = "";
  switch (disGubun) {
    case 1:
      // 본선관리번호	
      pWhere = dlt_commonCodeSD113.getCellData(lc_odrKndCd.getSelectedIndex(), "fltrCd2"); // 수출입구분코드 : SD060 - 수입(I), 수출(E)

      let data = new Array(2);
      data[0] = pCode;
      data[1] = pWhere;
      let opt = {
        id: "op_204_01_07p",
        title: "본선관리번호검색팝업",
        popupName: "본선관리번호검색팝업",
        modal: true,
        center: "yes",
        type: "browserPopup",
        width: "1200px",
        height: "620px",
        scroll: "yes",
        resizable: "yes",
        status: "no"
      };
      let rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", opt, data);
      $c.gus.cfSetReturnValue($p, rtnList, ed_cvsslMgntNo, null);
      scwin.hid_chkCvsslMgntNo = rtnList[2];
      break;
    case 2:
      // LINE
      udc_line.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
      } // XML상의 SELECT ID	
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
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 청구처
      udc_bilgClnt.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm);
      } // XML상의 SELECT ID	
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
      , "청구 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 등록자
      udc_reg.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_regId, txt_regNm);
      } // XML상의 SELECT ID	
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
      , "등록자,사용자ID,사용자명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 등록점소
      pWhere = ",,,T"; // 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)

      udc_regBran.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_regBranCd, txt_regBranNm);
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "등록점소,점소코드,점소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      // 배차담당자
      udc_alloccarPic.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, txt_alloccarPicNm);
      } // XML상의 SELECT ID	
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
      , "배차담당자,담당자ID,담당자명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = async function () {
  let row = ds_orderList.getRowPosition();
  let strOrderDetailUrl = "";
  let rowJson = ds_orderList.getRowJSON(row);
  if (row >= 0) {
    // 선택된 오더 정보 : 오더번호 / 오더유형
    let v_odrNo = rowJson.odrNo;
    let v_odrKndCd = rowJson.odrKndCd;
    let v_transCargoClsCd = rowJson.transCargoClsCd;
    let param = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    let options = {
      "openAction": "exist"
    };
    if (v_transCargoClsCd == DsConstants.ODR_BULK) {
      strOrderDetailUrl = scwin.strBulkOrderUrl;
      $c.win.openMenu($p, "벌크오더", strOrderDetailUrl, "sd_402_01_02t.xml", param, options);
    } else {
      if (v_odrKndCd == "C2" && (scwin.userId == "030448" || scwin.userId == "pchang" || scwin.userId == "dsadmin")) {
        strOrderDetailUrl = scwin.strContainerOrderUrl2;
        $c.win.openMenu($p, "컨테이너오더", strOrderDetailUrl, "sd_402_01_61b.xml", param, options);
      } else {
        strOrderDetailUrl = scwin.strContainerOrderUrl;
        $c.win.openMenu($p, "컨테이너오더", strOrderDetailUrl, "sd_402_01_11t.xml", param, options);
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더현황"]);
    return;
  }
};

//-------------------------------------------------------------------------
// Suppress 필드  Count
//-------------------------------------------------------------------------
scwin.f_countSuppressCol = function (colid) {
  let count_row = 0;
  let t_colValue = "";
  for (i = 0; i < ds_orderList.getRowCount(); i++) {
    if (t_colValue != ds_orderList.getCellData(i, colid)) {
      count_row++;
      t_colValue = ds_orderList.getCellData(i, colid);
    }
  }
  return count_row;
};

//-------------------------------------------------------------------------
// 자동 오더 CHECK
//-------------------------------------------------------------------------
scwin.f_checkAuctoOrder = function () {
  dlt_commonCodeSD113.removeColumnFilterAll();
  if (chb_autoOrderYn.getValue() == "1") {
    scwin.hid_autoOrderYn = "0";
    $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd3 == '0'");
  } else {
    scwin.hid_autoOrderYn = "1";
    $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd3 == '1'");
  }
  scwin.insertDatalist(dlt_commonCodeSD113);
  lc_odrKndCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 오더별 컨테이너 작업현황 링크
//-------------------------------------------------------------------------
scwin.f_orderCntrDetail = async function (e) {
  let row = ds_orderList.getRowPosition();
  let strOrderDetailUrl = "ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_06b.xml";
  let rowJson = ds_orderList.getRowJSON(row);
  if (row >= 0) {
    // 선택된 오더 정보 : 오더번호 / 오더유형
    let v_odrNo = rowJson.odrNo;
    let v_transCargoClsCd = rowJson.transCargoClsCd;
    let param = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    let options = {
      "openAction": "exist"
    };
    if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
      $c.win.openMenu($p, "오더별 컨테이너 작업현황", strOrderDetailUrl, "as_102_01_06b.xml", param, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
    return;
  }
};
scwin.f_autoSelBatch = async function () {
  let chk = await $c.win.confirm($p, "출항처리 배치를 돌리겠습니까?");
  if (chk) {
    dma_batchCndt.setEmptyValue();
    dma_batchCndt.set("batch_run", "Y");
    $c.sbm.execute($p, sbm_autoSel);
  }
};

// 오더확정
scwin.f_confirm = async function () {
  let chk = await $c.win.confirm($p, "오더확정을(를) 적용하시겠습니까?");
  if (chk) {
    for (let i = 0; i < ds_orderList.getRowCount(); i++) {
      let rowJson = ds_orderList.getRowJSON(i);
      if (rowJson.chk == "T" && rowJson.odrDcsnYn == 0) {
        scwin.f_updateOdrInfo(i);
      }
    }

    // scwin.f_login("debis");
  }
};

// NCALL 오더조회
scwin.f_retrieveOdrInfo = function (idx) {
  dma_cndOdrNo.setEmptyValue();
  dma_cndOdrNo.set("odrNo", ds_orderList.getCellData(idx, "odrNo"));
  $c.sbm.execute($p, sbm_retrieveNcall);
};
scwin.f_confirmOrder = function () {
  // 작업경로가 지정된 경우만 오더확정 가능
  if (ds_odrInfo.getRowCount() > 0) {
    ds_odrInfo.setCellData(0, "odrDcsnYn", "1");
    $c.sbm.execute($p, sbm_update);
  }
};
scwin.f_updateOdrInfo = function (idx) {
  // 엔콜 로그인 성공하면 오더 retrieve, 오더 retrieve 성공하면 오더 update
  // await scwin.f_ssoLogin();

  scwin.f_retrieveOdrInfo(idx);
};
scwin.f_ssoLogin = function () {
  /* dma_oGDS_ssologin.setEmptyValue();
  dma_oGDS_ssologin.set("empNo", scwin.userId);
  dma_oGDS_ssologin.set("empNm", scwin.userNm);
  dma_oGDS_ssologin.set("email", scwin.userEmail);
  dma_oGDS_ssologin.set("authLoginYn", "0");
   $c.sbm.execute(sbm_ssologin); */
};
scwin.f_login = function (gubun) {
  /* if (ds_oGDS_ssologin_result.getCellData(0, "userId") == "" || ds_oGDS_ssologin_result.getCellData(0, "userId") == null) return;
   dma_oGDS_login.setEmptyValue();
  dma_oGDS_login.set("userId", ds_oGDS_ssologin_result.getCellData(0, "userId"));
  dma_oGDS_login.set("passwd", ds_oGDS_ssologin_result.getCellData(0, "decPasswd"));
   if (gubun == "ntis") {
      sbm_login.serverIP = scwin.ntisUrl;
  } else if (gubun == "debis") {
      sbm_login.serverIP = scwin.debisUrl;
  }
   $c.sbm.execute(sbm_login); */
};

// 조회 콜백
scwin.sbm_Retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_orderList.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    return;
  } else {
    for (let i = 0; i < rowCnt; i++) {
      let rowJson = ds_orderList.getRowJSON(i);
      ds_orderList.setCellData(i, "ctrtClntNo2", rowJson.ctrtClntNo);
      ds_orderList.setCellData(i, "clntNm2", rowJson.clntNm);
      if (rowJson.odrDcsnYn == "0") {
        gr_orderList.setCellColor(i, "odrDcsnYn", "red");
      }
      if (rowJson.odrDcsnYn == "1" && rowJson.odrCompleteYn == "0") {
        gr_orderList.setCellColor(i, "odrCompleteYn", "red");
      }
      if (rowJson.hayukYn == "0") {
        gr_orderList.setCellColor(i, "hayukYn", "red");
      }
    }
    ds_orderList.sort("odrNo", 1);
    ds_orderList.setRowPosition(0);
    scwin.hid_checkOrder = scwin.hid_autoOrderYn;
  }
  if (lc_odrKndCd.getValue().substring(0, 1) == DsConstants.DOMESTIC_CD || lc_impExpDomesticClsCd.getValue() == DsConstants.DOMESTIC_CD) {
    scwin.f_setGridColumn(DsConstants.DOMESTIC_CD);
  } else {
    if (lc_transCargoClsCd.getValue() == DsConstants.ODR_CNTR) {
      scwin.f_setGridColumn(DsConstants.ODR_CNTR);
    } else if (lc_transCargoClsCd.getValue() == DsConstants.ODR_BULK) {
      scwin.f_setGridColumn(DsConstants.ODR_BULK);
    } else {
      scwin.f_setGridColumn();
    }
  }
  totalRows.setValue(rowCnt);
};
scwin.sbm_update_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.checkOrder = true;
  scwin.f_Retrieve();
};
scwin.sbm_retrieveNcall_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.retrieveSuccess = true;
  if (scwin.retrieveSuccess) {
    scwin.f_confirmOrder();
    scwin.retrieveSuccess = false;
  }
};

// 더블클릭 이벤트
scwin.gr_orderList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.hid_checkOrder == "1") {
    scwin.f_orderDetail(rowIndex);
  }
};
scwin.udc_cvsslMgnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_cvsslMgntNo, txt_cvsslMgntNm, 1, true);
};
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 2, true);
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 3, true);
};
scwin.udc_reg_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regId, txt_regNm, 4, true);
};
scwin.udc_regBran_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regBranCd, txt_regBranNm, 5, true);
};
scwin.udc_alloccarPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicId, txt_alloccarPicNm, 6, true);
};
scwin.lc_odrSearchDt_onchange = function (info) {
  let v_index = lc_odrSearchDt.getSelectedIndex();
  if (v_index == 0) {
    udc_fromToCalendar1.show("");
    udc_fromToCalendar2.hide();
    ed_odrDtFrom.setValue(scwin.strPreDate);
    ed_odrDtTo.setValue(scwin.strCurDate);
    ed_odrWrkDtFrom.setValue("");
    ed_odrWrkDtTo.setValue("");
  } else {
    udc_fromToCalendar2.show("");
    udc_fromToCalendar1.hide();
    ed_odrWrkDtFrom.setValue(scwin.strPreDate);
    ed_odrWrkDtTo.setValue(scwin.strCurDate);
    ed_odrDtFrom.setValue("");
    ed_odrDtTo.setValue("");
  }
};
scwin.lc_bookingBl_onchange = function (info) {
  let v_index = lc_bookingBl.getSelectedIndex();
  if (v_index == 0) {
    ed_bookingNo.show("");
    ed_blNo.hide();
    ed_bookingNo.setValue("");
    ed_blNo.setValue("");
  } else {
    ed_blNo.show("");
    ed_bookingNo.hide();
    ed_bookingNo.setValue("");
    ed_blNo.setValue("");
  }
};
scwin.lc_impExpDomesticClsCd_onchange = function (info) {
  let v_impExpDomesticClsCd = lc_impExpDomesticClsCd.getValue();
  let v_transCargoClsCd = lc_transCargoClsCd.getValue();
  dlt_commonCodeSD113.removeColumnFilterAll();
  if (scwin.hid_autoOrderYn == "0") {
    if (!$c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
      if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
        if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '0'");
        } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '0'");
        } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '0'");
        }
      } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
        if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '0'");
        } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '0'");
        } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '0'");
        }
      } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
        if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '0'");
        } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '0'");
        } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '0'");
        }
      }
    } else {
      if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd3 == '0'");
      } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd3 == '0'");
      } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd3 == '0'");
      }
    }
  } else {
    if (!$c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
      if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
        if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '1'");
        } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '1'");
        } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '1'");
        }
      } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
        if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '1'");
        } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '1'");
        } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '1'");
        }
      } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
        if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '1'");
        } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '1'");
        } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '1'");
        }
      }
    } else {
      if ($c.gus.cfIsNull($p, v_transCargoClsCd)) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd3 == '1'");
      } else if (v_transCargoClsCd == DsConstants.ODR_BULK) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd3 == '1'");
      } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd3 == '1'");
      }
    }
  }
  scwin.insertDatalist(dlt_commonCodeSD113);
  lc_odrKndCd.setSelectedIndex(0);
};
scwin.lc_transCargoClsCd_onchange = function (info) {
  let v_impExpDomesticClsCd = lc_impExpDomesticClsCd.getValue();
  let v_transCargoClsCd = lc_transCargoClsCd.getValue();
  dlt_commonCodeSD113.removeColumnFilterAll();
  if (scwin.hid_autoOrderYn == "0") {
    if (!$c.gus.cfIsNull($p, v_transCargoClsCd)) {
      if (v_transCargoClsCd == DsConstants.ODR_BULK) {
        if ($c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd3 == '0'");
        } else if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '0'");
        } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '0'");
        } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '0'");
        }
      } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
        if ($c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd3 == '0'");
        } else if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '0'");
        } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '0'");
        } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '0'");
        }
      }
    } else {
      if ($c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd3 == '0'");
      } else if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '0'");
      } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '0'");
      } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '0'");
      }
    }
  } else {
    if (!$c.gus.cfIsNull($p, v_transCargoClsCd)) {
      if (v_transCargoClsCd == DsConstants.ODR_BULK) {
        if ($c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd3 == '1'");
        } else if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '1'");
        } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '1'");
        } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_BULK + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '1'");
        }
      } else if (v_transCargoClsCd == DsConstants.ODR_CNTR) {
        if ($c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd3 == '1'");
        } else if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '1'");
        } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '1'");
        } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
          $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd1 == '" + DsConstants.ODR_CNTR + "' && fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '1'");
        }
      }
    } else {
      if ($c.gus.cfIsNull($p, v_impExpDomesticClsCd)) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd3 == '1'");
      } else if (v_impExpDomesticClsCd == DsConstants.IMP_CD) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.IMP_CD + "' && fltrCd3 == '1'");
      } else if (v_impExpDomesticClsCd == DsConstants.EXP_CD) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.EXP_CD + "' && fltrCd3 == '1'");
      } else if (v_impExpDomesticClsCd == DsConstants.DOMESTIC_CD) {
        $c.data.dataListFilter($p, dlt_commonCodeSD113, "fltrCd2 == '" + DsConstants.DOMESTIC_CD + "' && fltrCd3 == '1'");
      }
    }
  }
  scwin.insertDatalist(dlt_commonCodeSD113);
  lc_odrKndCd.setSelectedIndex(0);
};
scwin.udc_cvsslMgnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_cvsslMgntNo.getValue(), "", "F", "F");
};
scwin.udc_line_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, 2, false);
};
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_lineCd.getValue(), txt_lineNm.getValue(), "F", "F");
};
scwin.udc_bilgClnt_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_bilgClntNm, ed_bilgClntNo, 3, false);
};
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), "F", "F");
};
scwin.udc_reg_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_regNm, ed_regId, 4, false);
};
scwin.udc_reg_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_regId.getValue(), txt_regNm.getValue(), "F", "F");
};
scwin.udc_regBran_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_regBranNm, ed_regBranCd, 5, false);
};
scwin.udc_regBran_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_regBranCd.getValue(), txt_regBranNm.getValue(), "F", "F");
};
scwin.udc_alloccarPic_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_alloccarPicNm, ed_alloccarPicId, 6, false);
};
scwin.udc_alloccarPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_alloccarPicId.getValue(), txt_alloccarPicNm.getValue(), "F", "F");
};
scwin.f_excel = function () {
  let options = {
    fileName: "오더현황" + ".xlsx",
    sheetName: "오더현황"
  };
  $c.data.downloadGridViewExcel($p, gr_orderList, options);
};
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.ed_cvsslMgntNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.ed_bookingNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.ed_blNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.insertDatalist = function (dataList) {
  dataList.insertRow(0);
  dataList.setCellData(0, "cd", "");
  dataList.setCellData(0, "cdNm", "전체");
};
scwin.customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colId = this.getColumnID(colIndex);
  if (colId == "odrDcsnYn") {
    let value = "미확정";
    if (data == "1") {
      value = "확정";
    }
    return value;
  } else if (colId == "odrCompleteYn") {
    let value = "";
    if (data == "0") {
      value = "미완료";
    } else if (data == "1") {
      value = "완료";
    } else if (data == "2") {
      value = "취소";
    }
    return value;
  } else if (colId == "selYn") {
    let value = "";
    if (data == "0") {
      value = "미완료";
    } else if (data == "1") {
      value = "완료";
    } else if (data == "") {
      value = "출항대상아님";
    }
    return value;
  } else if (colId == "hayukYn") {
    let value = "";
    if (data == "0") {
      value = "미완료";
    } else if (data == "1") {
      value = "완료";
    }
    return value;
  } else if (colId == "odrCnclYn") {
    let value = "";
    if (data == "1") {
      value = "취소";
    }
    return value;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:' req',editType:'select',id:'lc_odrSearchDt',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',objType:'data','ev:onchange':'scwin.lc_odrSearchDt_onchange',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더기간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출발일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'odrDtFrom',refDataMap:'dma_orderRetrieve',style:'',id:'udc_fromToCalendar1',refEdDt:'odrDtTo',objType:'data',validExp:'오더기간 To:yes',edToId:'ed_odrDtTo',edFromId:'ed_odrDtFrom',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'오더기간 From',titleTo:'오더기간 To'}},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_odrWrkDtFrom',edToId:'ed_odrWrkDtTo',id:'udc_fromToCalendar2',objType:'Data',refDataMap:'dma_orderRetrieve',refEdDt:'odrWrkDtTo',refStDt:'odrWrkDtFrom',style:'',validExp:'오더기간 To:yes:date=YYYYMMDD&length=8',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'출발일자 From',titleTo:'출발일자 To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'13',allowChar:'a-zA-Z0-9',ref:'data:dma_orderRetrieve.odrNo',validateOnInput:'true','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup',fixLength:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_impExpDomesticClsCd',search:'start',style:'width: 110px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_orderRetrieve.impExpDomesticClsCd','ev:onchange':'scwin.lc_impExpDomesticClsCd_onchange',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_transCargoClsCd',search:'start',style:'width: 110px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_orderRetrieve.transCargoClsCd','ev:onchange':'scwin.lc_transCargoClsCd_onchange',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width: 200px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_orderRetrieve.odrKndCd',visibleRowNum:'25',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeSD113'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',cols:'1',id:'chb_autoOrderYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',class:'chk-grp',falseValue:'0','ev:onchange':'scwin.f_checkAuctoOrder',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동오더'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',btnId:'img_PopUp10',codeId:'ed_cvsslMgntNo',id:'udc_cvsslMgnt',maxlengthCode:'8',nameId:'txt_cvsslMgntNm',objTypeCode:'data',objTypeName:'data',popupGridHeadTitle:'LINE코드,LINE명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'',popupTitle:'LINE,LINE코드,LINE명',selectID:'',style:'',UpperFlagCode:'1',code:'cvsslMgntNo',refDataCollection:'dma_orderRetrieve','ev:onblurCodeEvent':'scwin.udc_cvsslMgnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc_cvsslMgnt_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',nameId:'txt_lineNm',btnId:'img_PopUp8',id:'udc_line',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLineInfoList',popupTitle:'LINE,LINE코드,LINE명',popupGridHeadTitle:'LINE코드,LINE명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',code:'lineCd',refDataCollection:'dma_orderRetrieve',name:'lineNm','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_line_onblurNameEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgClntNo',objTypeCode:'data',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',nameId:'txt_bilgClntNm',id:'udc_bilgClnt',objTypeName:'data',refDataCollection:'dma_orderRetrieve',code:'bilgClntNo',name:'bilgClntNm',selectID:'retrieveClntInfo',popupTitle:'청구 거래처,거래처코드,거래처명',popupGridHeadTitle:'거래처코드,거래처명,거래처구분,거래처구분명,거래처주소',popupGridHiddenColumn:'5,6,7,8,9,10',btnId:'img_PopUp3','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgClnt_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrDcsnYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_orderRetrieve.odrDcsnYn',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrCompleteYn',search:'start',style:'width: 110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_orderRetrieve.odrCompleteYn',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출항처리미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',maxlengthCode:'10',codeId:'ed_regId',btnId:'img_PopUp1',nameId:'txt_regNm',id:'udc_reg',objTypeName:'data',objTypeCode:'data',refDataCollection:'dma_orderRetrieve',code:'regId',name:'regNm',selectID:'retrieveUserInfo',popupTitle:'등록자,사용자ID,사용자명',popupGridHeadTitle:'사용자ID,사용자명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',allowCharCode:'a-zA-Z0-9','ev:onblurCodeEvent':'scwin.udc_reg_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_reg_onblurNameEvent','ev:onclickEvent':'scwin.udc_reg_onclickEvent',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록점소 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_regBranCd',nameId:'txt_regBranNm',id:'udc_regBran',btnId:'img_PopUp12',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',refDataCollection:'dma_orderRetrieve',code:'regBranCd',name:'regBranNm',selectID:'retrieveLogisDeptInfo',popupGridHeadTitle:'점소코드,점소명',popupTitle:'등록점소,점소코드,점소명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_regBran_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_regBran_onblurNameEvent','ev:onclickEvent':'scwin.udc_regBran_onclickEvent',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_selfClsCd',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:dma_orderRetrieve.selfClsCd',chooseOption:'',allOption:'',visibleRowNum:'10',sortOption:'value'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_bookingBl',search:'start',style:'width: 70px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.lc_bookingBl_onchange',sortOption:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BK'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:':',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_bookingNo',placeholder:'',style:'width:150px;',objType:'data',validExp:'BL번호:yes:length=16',ref:'data:dma_orderRetrieve.bookingNo',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.ed_bookingNo_oneditkeyup'}},{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',class:'',id:'ed_blNo',maxlength:'20',objType:'data',placeholder:'',ref:'data:dma_orderRetrieve.blNo',style:'width:150px;',validExp:'BL번호:yes:length=16',validateOnInput:'true','ev:oneditkeyup':'scwin.ed_blNo_oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'img_PopUp13',code:'alloccarPicId',codeId:'ed_alloccarPicId',id:'udc_alloccarPic',maxlengthCode:'10',name:'alloccarPicNm',nameId:'txt_alloccarPicNm',objTypeCode:'data',objTypeName:'data',popupGridHeadTitle:'사용자ID,사용자명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'',popupTitle:'배차담당자,담당자ID,담당자명',refDataCollection:'dma_orderRetrieve',selectID:'retrieveUserInfo',style:'',allowCharCode:'a-zA-Z0-9','ev:onblurCodeEvent':'scwin.udc_alloccarPic_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_alloccarPic_onblurNameEvent','ev:onclickEvent':'scwin.udc_alloccarPic_onclickEvent',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하역구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_stvOdrClsCd',objType:'data',ref:'data:dma_orderRetrieve.stvOdrClsCd',search:'start',style:'width: 110px;',submenuSize:'auto',allOption:'',chooseOption:'',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_salesPurchaseType',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_orderRetrieve.salesPurchaseType',disableEdit:'true',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더등록현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_excel',gridID:'gr_orderList',id:'udc_top',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_orderList',fixedColumn:'0',id:'gr_orderList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',editModeEvent:'onclick',readOnly:'true','ev:oncelldblclick':'scwin.gr_orderList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'column137',value:'',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'오더번호',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column243',value:'오더유형코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'오더종류',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'확정',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'완료',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'출항처리',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column246',value:'등록점소코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'등록점소',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column249',value:'등록자ID',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'등록자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column252',value:'배차담당자ID',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column38',inputType:'text',value:'배차 담당자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column255',value:'자가구분코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column39',inputType:'text',value:'자가구분',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column258',value:'운송화물구분',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column261',value:'계약거래처코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column264',value:'계약처',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'본선관리번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column267',value:'선박코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'선박명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column270',value:'항차',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'선박/항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column273',value:'출발작업장코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'출발지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'출발상세',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'TS선박명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'TS선박/항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column276',value:'도착작업장코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'도착지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',value:'도착상세',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column54',value:'출발일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column56',value:'도착일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',value:'본선완료',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',value:'LINE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column279',value:'수요가코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column282',value:'수요가',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column285',value:'계약거래처코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',value:'계약거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column288',value:'청구거래처코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',value:'청구처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'BK/BL',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',value:'거래처번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column291',value:'작업유형코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',value:'작업유형',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',value:'취소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column242',value:'오더취소항목',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column294',value:'취소항목',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column66',value:'확정일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column64',value:'완료일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column62',value:'오더생성일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column108',value:'20E',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column104',value:'20F',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column100',value:'40E',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column96',value:'40F',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column134',value:'40HE',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column128',value:'40HF',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column921',value:'45E',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'76',inputType:'text',id:'column92',value:'45F',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column82',value:'특이사항',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column124',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column123',value:'미완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column122',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column121',value:'미완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column119',value:'미완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column118',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',value:'미완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column135',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column132',value:'미완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column129',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column126',value:'미완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column116',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column115',value:'미완료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',value:'전체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'76',inputType:'text',id:'column113',value:'미완료',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'chk',displayMode:'label',readOnly:'false',valueType:'other',falseValue:'F',trueValue:'T',defaultValue:'F'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'150',class:'linktype',style:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrKndCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrKndNm',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrDcsnYn',inputType:'text',removeBorderStyle:'false',width:'100',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrCompleteYn',inputType:'text',removeBorderStyle:'false',width:'100',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'text',width:'100',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regBranCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'alloccarPicId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarPicNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selfClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfClsNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transCargoClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vsslCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portcnt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCdPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptWrkPlCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tsVsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tsVsslCdPortcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvWrkPlCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',id:'wrkStDtm',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd HH:mm',inputType:'text',ioFormat:'yyyyMMddHHmmss'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'wrkEndDtm',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd HH:mm',ioFormat:'yyyyMMddHHmmss'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hayukYn',displayMode:'label',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dmndNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dmndNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtClntNo2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookingNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPatternCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPatternNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCnclYn',displayMode:'label',hidden:'true',customFormatter:'scwin.customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCnclItemCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrCnclItemNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'odrDcsnDtm',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd HH:mm',ioFormat:'yyyyMMddHHmmss'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'odrCompleteDtm',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd HH:mm',ioFormat:'yyyyMMddHHmmss'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'regDtm',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd HH:mm',ioFormat:'yyyyMMddHHmmss'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr20e',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'uncompleteCntr20e',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr20f',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'uncompleteCntr20f',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr40e',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'uncompleteCntr40e',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr40f',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'uncompleteCntr40f',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr4he',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'uncompleteCntr4he',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr4hf',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'uncompleteCntr4hf',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr45e',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'uncompleteCntr45e',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntr45f',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'76',inputType:'text',id:'uncompleteCntr45f',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'rmk',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:button',A:{class:'btn link',id:'btnOdrCntrDetail',label:'오더별 컨테이너 작헙현황',style:'',userAuth:'U','ev:onclick':'scwin.f_orderCntrDetail'}},{T:1,N:'w2:button',A:{class:'btn',id:'btnAutoSel',label:'출항배치','ev:onclick':'scwin.f_autoSelBatch',userAuth:'C',style:'display: none;'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_confirmOdr',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_confirm'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더확정'}]}]}]}]}]}]}]}]}]})