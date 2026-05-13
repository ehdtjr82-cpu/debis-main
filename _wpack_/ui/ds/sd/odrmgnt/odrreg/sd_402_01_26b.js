/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml 281759 59f9e0659a44062377b3e1788a14f6450a4a198bf18ca6a44f22cf7fde09964b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndOdrNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNoYn',name:'B/L번호조회',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offSetYn',name:'상계포함',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_odrInfo',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_odrInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'name19',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col54',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col61',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplCoClsCd',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndYn',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOdrNo',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name138',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name140',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'name141',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortNm',name:'name142',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'name145',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'name146',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name147',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'name148',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'name149',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRequestCnt',name:'name150',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'name156',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'name157',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'name158',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNonm',name:'name159',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoclsCd',name:'name160',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'name161',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispPchsClsCd',name:'name162',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_sellInfo',repeatNode:'map',saveRemovedData:'true',style:'','ev:onrowpositionchange':'scwin.ds_sellInfo_onrowpositionchange','ev:oncelldatachange':'scwin.ds_sellInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addHang',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출물량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'원화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlNm',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlYn',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgCreatYn',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wtUnitCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'frvanQty',name:'FRVAN수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellMainMainPattern1',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellMainMainPattern2',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellMainMainRsn',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addYn',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retroactSellUpr',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retroactSellAmtFcrc',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retroactSellAmt',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retroactVatAmt',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgIntendDt',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetOdrNo1',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetSellSeq1',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetOdrNo2',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetSellSeq2',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoShiftingRsltsSeq',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqUseRateSeq',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unsettledCloseYn',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCyRetrvDt',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrShippingDt',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtOdrNo',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtSellSeq',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtRsltsDt',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scDcsnYn',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'name138',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name142',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkRsltsClsCd',name:'name148',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoDdCnt',name:'name149',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rofDdCnt',name:'name150',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name151',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name152',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name153',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name154',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name155',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name156',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtSellItemCd',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNodeCtrtTrfSeq',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indpCtrtTrfSeq',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellWrkRsltsNo',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendSeq',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgUnitCd',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetOdrNo_1',name:'name159',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetSellSeq_1',name:'name160',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetOdrNo_2',name:'name161',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetSellSeq_2',name:'name162',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name173',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name202',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellMainMainPattern_1',name:'name230',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellMainMainPattern_2',name:'name231',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col232',name:'name232',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col233',name:'name233',dataType:'text'}},{T:1,N:'w2:column',A:{id:'valmTrf',name:'name234',dataType:'text'}},{T:1,N:'w2:column',A:{id:'meraTrf',name:'name235',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisDdCnt',name:'name236',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volAmtDivsClsCd',name:'name237',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creatProcessClsCd',name:'name238',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'name252',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_pchsInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_pchsInfo_onrowpositionchange','ev:oncelldatachange':'scwin.ds_pchsInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stndPcostYn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name7',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsCommNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDeptNm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCnt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNO',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmTrgtYn',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnit',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtUnit',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsMainMainPattern',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsMainMainRsn',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addYn',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternNm',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidVol',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDeptCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name110',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_profitLossInfo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellInternalTxnYn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellOpntDeptNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellOpntDeptCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsInternalTxnYn',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsOpntDeptCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsOpntDeptNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommNo',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommNm',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUnitCd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVol',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsStndPcostYn',name:'name41',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_intnlInfo',repeatNode:'map',saveRemovedData:'true',style:'','ev:oncelldatachange':'scwin.ds_intnlInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalGoodsPatternCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalCommNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'name6',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalUpr',name:'name8',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchDeptNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntDeptNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnStsClsNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoCommNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addYn',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnSeq',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col22',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repBilgClntNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkPathSeq',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkStpSeq',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkWrkPathSeq',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkWrkStpSeq',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmTrgtYn',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptRgnCd',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRgnCd',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchDeptCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntDeptCd',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetOdrNo1',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetInternalTxnSeq_1',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetOdrNo2',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetInternalTxnSeq_2',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnStsClsCd',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsRfslYn',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellSeq',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetInternalTxnSeq2',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetInternalTxnSeq1',name:'name88',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveAdjustmentInformation',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_adjustmentInformation',style:'',repeatNode:'map',saveRemovedData:'true','ev:onremoverow':'scwin.ds_adjustmentInformation_onremoverow','ev:onrowpositionchange':'scwin.ds_adjustmentInformation_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatNo',name:'계산서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgDt',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNm',name:'청구담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoConfirmDt',name:'업체확인일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitDt',name:'매입청구일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPic',name:'매입청구담당자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_adjustmentInformation',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'certiNo',name:'거래명세서'}},{T:1,N:'w2:key',A:{dataType:'text',id:'pchsVatNo',name:'계산서'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgDt',name:'청구일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgPicNm',name:'청구담당자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'copCoConfirmDt',name:'업체확인일'}},{T:1,N:'w2:key',A:{dataType:'text',id:'pchsAdmitDt',name:'매입청구일'}},{T:1,N:'w2:key',A:{dataType:'text',id:'pchsPic',name:'매입청구담당자'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_updateRsnInfo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sellMainMainPattern1',name:'수정삭제사유코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellMainMainRsn',name:'수정삭제사유',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndCtrtNo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivBukYn',name:'사업부문벌크여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ctrtNo2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'empNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_client',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchangeRate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_volAmtSub',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'goodsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volRndClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'resultAmt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'balUnpaidRndClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareTonAdptRt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volBalUnpaidProcUnitClscd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareTonAdptUnitClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'balUnpaidProcUnitClsCd',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map','ev:onrowpositionchange':'scwin.ds_odrInfo_onrowpositionchange',id:'dma_odrInfo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'ctrtNo',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'ctrtClntNo',name:'name2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'ctrtClntNm',name:'name3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'reqClntNo',name:'name4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'reqClntNm',name:'name5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgClntNo',name:'name6'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgClntNm',name:'name7'}},{T:1,N:'w2:key',A:{dataType:'text',id:'realMchtClntNo',name:'name8'}},{T:1,N:'w2:key',A:{dataType:'text',id:'lineCd',name:'name9'}},{T:1,N:'w2:key',A:{dataType:'text',id:'shpCoClntNm',name:'name10'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cvsslMgntNo',name:'name11'}},{T:1,N:'w2:key',A:{dataType:'text',id:'impExpDomesticClsCd',name:'name12'}},{T:1,N:'w2:key',A:{dataType:'text',id:'vsslCd',name:'name13'}},{T:1,N:'w2:key',A:{dataType:'text',id:'portcnt',name:'name14'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgLodeptCd',name:'name15'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgLodeptNm',name:'name16'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sellLodeptCd',name:'name17'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sellLodeptNm',name:'name18'}},{T:1,N:'w2:key',A:{dataType:'number',id:'adptExchRt',name:'name19',defaultValue:'0'}},{T:1,N:'w2:key',A:{dataType:'text',id:'adptExchRtDt',name:'name20'}},{T:1,N:'w2:key',A:{dataType:'text',id:'crcCd',name:'name21'}},{T:1,N:'w2:key',A:{dataType:'text',id:'taxnClsCd',name:'name22'}},{T:1,N:'w2:key',A:{dataType:'text',id:'totSellAmt',name:'name23'}},{T:1,N:'w2:key',A:{dataType:'text',id:'totPchsAmt',name:'name24'}},{T:1,N:'w2:key',A:{dataType:'text',id:'totStdAmt',name:'name25'}},{T:1,N:'w2:key',A:{dataType:'text',id:'totPchsPrflosAmt',name:'name26'}},{T:1,N:'w2:key',A:{dataType:'text',id:'totStdPrflosAmt',name:'name27'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrKndNm',name:'name28'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrNo',name:'name29'}},{T:1,N:'w2:key',A:{dataType:'text',id:'repClntNo',name:'name35'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dmndNo',name:'name36'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptWrkPlCd',name:'name39'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvWrkPlCd',name:'name40'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptDtl',name:'name41'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvDtl',name:'name42'}},{T:1,N:'w2:key',A:{dataType:'text',id:'wrkStDt',name:'name43'}},{T:1,N:'w2:key',A:{dataType:'text',id:'wrkStHh',name:'name44'}},{T:1,N:'w2:key',A:{dataType:'text',id:'wrkEndDt',name:'name45'}},{T:1,N:'w2:key',A:{dataType:'text',id:'wrkEndHh',name:'name46'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sellYn',name:'name47'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cntrDsgYn',name:'name51'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrKndCd',name:'name52'}},{T:1,N:'w2:key',A:{dataType:'text',id:'transCargoClsCd',name:'name53'}},{T:1,N:'w2:key',A:{dataType:'text',id:'col54',name:'name54'}},{T:1,N:'w2:key',A:{dataType:'text',id:'selfClsCd',name:'name55'}},{T:1,N:'w2:key',A:{dataType:'text',id:'transCondCd',name:'name56'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cntrWtCondCd',name:'name57'}},{T:1,N:'w2:key',A:{dataType:'text',id:'chClsCd',name:'name58'}},{T:1,N:'w2:key',A:{dataType:'text',id:'wrkPatternCd',name:'name59'}},{T:1,N:'w2:key',A:{dataType:'text',id:'coshippingYn',name:'name60'}},{T:1,N:'w2:key',A:{dataType:'text',id:'col61',name:'name61'}},{T:1,N:'w2:key',A:{dataType:'text',id:'shpCoClntNo',name:'name62'}},{T:1,N:'w2:key',A:{dataType:'text',id:'destPortCd',name:'name63'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bondTransExpireDt',name:'name64'}},{T:1,N:'w2:key',A:{dataType:'text',id:'mcomAssgnClsCd',name:'name65'}},{T:1,N:'w2:key',A:{dataType:'text',id:'clntMgntNo',name:'name66'}},{T:1,N:'w2:key',A:{dataType:'text',id:'onPicNm',name:'name67'}},{T:1,N:'w2:key',A:{dataType:'text',id:'onPicTelNo',name:'name68'}},{T:1,N:'w2:key',A:{dataType:'text',id:'offPicNm',name:'name69'}},{T:1,N:'w2:key',A:{dataType:'text',id:'offPicTelNo',name:'name70'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrPicNm',name:'name71'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrPicTelNo',name:'name72'}},{T:1,N:'w2:key',A:{dataType:'text',id:'salesPicNm',name:'name73'}},{T:1,N:'w2:key',A:{dataType:'text',id:'salesPicTelNo',name:'name74'}},{T:1,N:'w2:key',A:{dataType:'text',id:'transCoNm',name:'name75'}},{T:1,N:'w2:key',A:{dataType:'text',id:'transCoTelNo',name:'name76'}},{T:1,N:'w2:key',A:{dataType:'text',id:'tsCvsslMgntNo',name:'name78'}},{T:1,N:'w2:key',A:{dataType:'text',id:'portCd',name:'name81'}},{T:1,N:'w2:key',A:{dataType:'text',id:'tsVsslCd',name:'name82'}},{T:1,N:'w2:key',A:{dataType:'text',id:'tsPortcnt',name:'name83'}},{T:1,N:'w2:key',A:{dataType:'text',id:'tsPortCd',name:'name84'}},{T:1,N:'w2:key',A:{dataType:'text',id:'tplCoClsCd',name:'name86'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrClsCd',name:'name87'}},{T:1,N:'w2:key',A:{dataType:'text',id:'smsSndYn',name:'name88'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sndDt',name:'name89'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sndHh',name:'name90'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrDcsnYn',name:'name91'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrDcsnDt',name:'name92'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrDcsnHh',name:'name93'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCompleteYn',name:'name94'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCompleteDt',name:'name95'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCompleteHh',name:'name96'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCnclYn',name:'name97'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCnclDt',name:'name98'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCnclHh',name:'name99'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCnclItemCd',name:'name100'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCnclRsn',name:'name101'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrDelYn',name:'name102'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrDelDt',name:'name103'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrDelHh',name:'name104'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rmk',name:'name105'}},{T:1,N:'w2:key',A:{dataType:'text',id:'upperOdrNo',name:'name106'}},{T:1,N:'w2:key',A:{dataType:'text',id:'regBranCd',name:'name107'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrDt',name:'name108'}},{T:1,N:'w2:key',A:{dataType:'text',id:'pchsCreatYn',name:'name109'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgOdrKndCd',name:'name110'}},{T:1,N:'w2:key',A:{dataType:'text',id:'closeDt',name:'name111'}},{T:1,N:'w2:key',A:{dataType:'text',id:'closeHh',name:'name112'}},{T:1,N:'w2:key',A:{dataType:'text',id:'alloccarPicId',name:'name113'}},{T:1,N:'w2:key',A:{dataType:'text',id:'autoOdrYn',name:'name114'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptOprCd',name:'name115'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvOprCd',name:'name116'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptTmlVsslPortcnt',name:'name117'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvTmlVsslPortcnt',name:'name118'}},{T:1,N:'w2:key',A:{dataType:'text',id:'oprBlNo',name:'name119'}},{T:1,N:'w2:key',A:{dataType:'text',id:'oprDoNo',name:'name120'}},{T:1,N:'w2:key',A:{dataType:'text',id:'oprImpexpClsCd',name:'name121'}},{T:1,N:'w2:key',A:{dataType:'text',id:'regId',name:'name122'}},{T:1,N:'w2:key',A:{dataType:'text',id:'regDtm',name:'name123'}},{T:1,N:'w2:key',A:{dataType:'text',id:'modId',name:'name124'}},{T:1,N:'w2:key',A:{dataType:'text',id:'modDtm',name:'name125'}},{T:1,N:'w2:key',A:{dataType:'text',id:'realMchtClntNm',name:'name130'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dmndNm',name:'name131'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptWrkPlNm',name:'name134'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvWrkPlNm',name:'name135'}},{T:1,N:'w2:key',A:{dataType:'text',id:'lineNm',name:'name136'}},{T:1,N:'w2:key',A:{dataType:'text',id:'destPortNm',name:'name138'}},{T:1,N:'w2:key',A:{dataType:'text',id:'vsslNm',name:'name139'}},{T:1,N:'w2:key',A:{dataType:'text',id:'portNm',name:'name140'}},{T:1,N:'w2:key',A:{dataType:'text',id:'tsVsslNm',name:'name141'}},{T:1,N:'w2:key',A:{dataType:'text',id:'tsPortNm',name:'name142'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptWrkLobranCd',name:'name143'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptWrkLobranNm',name:'name144'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvWrkLobranCd',name:'name145'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvWrkLobranNm',name:'name146'}},{T:1,N:'w2:key',A:{dataType:'text',id:'internalSellLodeptCd',name:'name147'}},{T:1,N:'w2:key',A:{dataType:'text',id:'internalSellLodeptNm',name:'name148'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrWrkPathCnt',name:'name149'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrRequestCnt',name:'name150'}},{T:1,N:'w2:key',A:{dataType:'text',id:'alloccarPicNm',name:'name156'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrCtrlClsCd',name:'name157'}},{T:1,N:'w2:key',A:{dataType:'text',id:'trfAdptCd',name:'name158'}},{T:1,N:'w2:key',A:{dataType:'text',id:'clntMgntNonm',name:'name159'}},{T:1,N:'w2:key',A:{dataType:'text',id:'mgntNoclsCd',name:'name160'}},{T:1,N:'w2:key',A:{dataType:'text',id:'demDt',name:'name161'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dispPchsClsCd',name:'name162'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveUnitySellpurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"},{"id":"ds_pchsInfo","key":"OUT_DS3"},{"id":"ds_profitLossInfo","key":"OUT_DS4"},{"id":"ds_intnlInfo","key":"OUT_DS5"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"},{"id":"ds_pchsInfo","key":"OUT_DS3"},{"id":"ds_profitLossInfo","key":"OUT_DS4"},{"id":"ds_intnlInfo","key":"OUT_DS5"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:'','ev:submit':'scwin.sbm_retrieve_submit'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAdjustmentInformation',action:'/ds.op.adjmbd.unitypchsmgnt.RetrieveAdjustmentInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveAdjustmentInformation","key":"IN_DS1"},{"id":"ds_adjustmentInformation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_adjustmentInformation","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOdrInfo',action:'/ds.sd.odrmgnt.odrreg.UpdateOrderUnitySellpurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_odrInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_saveOdrInfo_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveSellInfo',action:'/ds.sd.odrmgnt.odrreg.UpdateUnitySellpurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_sellInfo","key":"IN_DS1"},{"id":"dma_updateRsnInfo","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePchsInfo',action:'/ds.op.adjmbd.unitypchsmgnt.SaveControlUnityPurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_pchsInfo","key":"IN_DS1"},{"id":"dma_updateRsnInfo","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveIntnlInfo',action:'/ds.op.adjmbd.unitypchsmgnt.SaveControlInternalTransactionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_intnlInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_unit',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=LO102',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_unit","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_client',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=SD610',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_client","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exchangeRate',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_volAmtSub","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_volAmtSub',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_volAmtSub","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.addYnFormat,scwin.checkUpdated,scwin.f_AmtSet,scwin.f_AmtSet,scwin.f_OnLoad,scwin.f_OnLoad,scwin.f_addRow,scwin.f_addRow,scwin.f_addRow,scwin.f_changeAdptDt,scwin.f_dataSetInit,scwin.f_exchangeRateSet,scwin.f_initSetTab,scwin.f_openCommonPopUp,scwin.f_openPgm,scwin.f_openPopUpBefore,scwin.f_openPopUpBefore,scwin.f_openPopUpByCvsslMgmtNo,scwin.f_openPopUpGridBefore,scwin.f_openPopUpGridBefore,scwin.f_openPopUpGridLineCd,scwin.f_openPopUpGridLineCd,scwin.f_openPopUpGridLineCd,scwin.f_openPopUpGridLineCd,scwin.f_openPopUpOdrNo,scwin.f_openPopUpOdrNo_trans,scwin.f_retrieve,scwin.f_retrieveAdjustmentInformation,scwin.f_retrieveCtrtNo2,scwin.f_retrieveCtrtNo2,scwin.f_rpaDPCT,scwin.f_set,scwin.f_set,scwin.f_setActiveImgPopUp,scwin.f_setDsPchsUpdateRsn,scwin.f_setDsUpdateRsn,scwin.f_setGridColumnPropEdit,scwin.f_setPchsInfoByDcsnClsCd,scwin.f_setSellInfoByDcsnClsCd,scwin.f_update,scwin.f_update,scwin.f_validatePchsInfo,scwin.globalVars,scwin.gr_intnlInfo_format,scwin.gr_profitLossInfo_format,scwin.gr_sellInfo_format'}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DCSS.js',type:'text/javascript',scopeVariable:'DCSS'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
  scwin.globalVars();
  const gauceUtillOption = [{
    method: "getGridCombo",
    param1: "FS500",
    param2: true,
    compID: "gr_sellInfo:dcsnClsCd"
  }, {
    method: "getGridCombo",
    param1: "FS250",
    param2: false,
    compID: "gr_sellInfo:sellGoodsPatternCd"
  }, {
    method: "getGridCombo",
    param1: "ZZ006",
    param2: false,
    compID: "gr_sellInfo:crcCd"
  }, {
    method: "getGridCombo",
    param1: "SD070",
    param2: true,
    compID: "gr_sellInfo:taxnClsCd"
  }, {
    method: "getGridCombo",
    param1: "OP476",
    param2: false,
    compID: "gr_sellInfo:ctrlYn"
  }, {
    method: "getGridCombo",
    param1: "OP476",
    param2: false,
    compID: "gr_sellInfo:prebilgCreatYn"
  }, {
    method: "getGridCombo",
    param1: "SD180",
    param2: false,
    compID: "gr_sellInfo:sellMainMainPattern1"
  }, {
    method: "getGridCombo",
    param1: "SD180",
    param2: false,
    compID: "gr_sellInfo:sellMainMainPattern2"
  }, {
    method: "getGridComboByUpperCd",
    param1: "LO102",
    param2: "01",
    param3: false,
    compID: "gr_sellInfo:qtyUnitCd"
  }, {
    method: "getGridComboByUpperCd",
    param1: "LO102",
    param2: "02",
    param3: false,
    compID: "gr_sellInfo:wtUnitCd"
  }, {
    method: "getGridCombo",
    param1: "FS500",
    param2: true,
    compID: "gr_pchsInfo:dcsnClsCd"
  }, {
    method: "getGridCombo",
    param1: "FS250",
    param2: true,
    compID: "gr_pchsInfo:pchsGoodsPatternCd"
  }, {
    method: "getGridCombo",
    param1: "SD180",
    param2: false,
    compID: "gr_pchsInfo:pchsMainMainPattern"
  }, {
    method: "getGridComboByUpperCd",
    param1: "LO102",
    param2: "01",
    param3: false,
    compID: "gr_pchsInfo:qtyUnit"
  }, {
    method: "getGridComboByUpperCd",
    param1: "LO102",
    param2: "02",
    param3: false,
    compID: "gr_pchsInfo:wtUnit"
  }, {
    method: "getGridCombo",
    param1: "FS250",
    param2: true,
    compID: "gr_intnlInfo:internalGoodsPatternCd"
  }];
  $c.data.setGauceUtil($p, gauceUtillOption);
  const codeOptions = [{
    grpCd: 'ZZ006',
    compID: 'acb_crcCd'
  }, {
    grpCd: 'SD070',
    compID: 'acb_taxnClsCd'
  }, {
    grpCd: 'SD180',
    compID: 'acb_sellMainMainPattern1, acb_pchsMainMainPattern'
  }, {
    grpCd: 'SD060',
    compID: 'acb_impExpDomesticClsCd'
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.f_OnLoad);
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.odrNo = $c.data.getParameter($p, 'odrNo') ?? '';
  const loginDTO = $c.data.getMemInfo($p);
  scwin.userId = loginDTO.userId;
  scwin.scrooling_tempRow = 0;
  scwin.SELL_ADD_ROW = 0;
  scwin.dcsnClsCdCntChk = 1;
  scwin.MSG_SD_CRM_001 = '본번 수정시 모선/항차도 일괄 수정됩니다. 수정하시겠습니까?';
  scwin.MSG_SD_ERR_001 = '해당 오더는 무매출 오더입니다.';
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = async function () {
  // 컬럼 헤더 컬러 초기값 설정 
  const initPchsInfo = ["selpchItemNm", "pchsGoodsPatternCd", "rsltsStdDt", "vol", "unitCd", "pchsUpr", "pchsAmt", "pchsClntNm", "vat", "copCoClntNm", "bizDomNm", "pchsDeptNm"];
  initPchsInfo.forEach(colId => {
    gr_pchsInfo.setHeaderColor(colId + 'Header', 'red');
  });
  acb_pchsMainMainPattern.addItem('== 선택 ==', '', '', 0);
  acb_sellMainMainPattern1.addItem('== 선택 ==', '', '', 0);
  acb_pchsMainMainPattern.setSelectedIndex(0);
  acb_sellMainMainPattern1.setSelectedIndex(0);
  lay_odrKndNm.setValue('');
  scwin.f_initSetTab(); //tab세팅
  scwin.f_set('INIT');
  ed_odrNo.setValue(scwin.odrNo);
  if (ed_odrNo.getValue() != '') scwin.f_retrieve();

  // 단위 - 매출: sellUnitCd, 매입: unitCd
  await scwin.submitExcute(sbm_unit);

  // 실적수정불가 거래처
  await scwin.submitExcute(sbm_client);
  ed_odrNo.focus();

  // ed_odrNo.setValue('BC21512170001');
  // ed_odrNo.setValue('BC22501020001');
  // ed_odrNo.setValue('DC22507290015');
  // ed_odrNo.setValue('LCI2010050088');
  // ed_odrNo.setValue('DC22603250001');
  // ed_odrNo.setValue('ILA2603060001');
  // ed_odrNo.setValue('IDJ2507020069');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 조회조건 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_cndArea, null);
};

/**
 * @method 
 * @name f_initSetTab 
 * @description 탭 초기화
 */
scwin.f_initSetTab = function () {
  tr_tab_center.enableTab(0);
  tr_tab_center.enableTab(1);
  tr_tab_center.enableTab(2);
  tr_tab_center.setSelectedTabIndex(0);
};

/**
 * @method 
 * @name f_setActiveImgPopUp 
 * @description 팝업버튼활성/비활성화
 * @param {string} gubun
 */
scwin.f_setActiveImgPopUp = function (gubun) {
  let targetObjs = [img_reqClntNo, img_bilgClntNo, img_sellLodeptCd, btn_line, btn_cvsslMgntNo];
  switch (gubun) {
    //활성
    case 'E':
      $c.gus.cfEnableObjects($p, targetObjs);
      break;
    //비활성
    case 'D':
      $c.gus.cfDisableObjects($p, targetObjs);
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_set 
 * @description
 * @param {string} gubun1
 * @param {string} gubun2
 */
scwin.f_set = function (gubun1, gubun2) {
  let targetObjs = [tbl_odrInfoArea, tbl_odrBtnArea, tbl_sellGridBtn, tbl_pchsInfoArea, tbl_pchsGridBtn, tbl_intnlGridBtn];
  switch (gubun1) {
    case 'INIT':
      //초기화
      $c.gus.cfDisableObjects($p, targetObjs);
      $c.gus.cfDisableBtnOnly($p, [btn_updateSell, btn_saveSell, btn_updatePchs, btn_savePchs, btn_updateIntnl, btn_saveIntnl]);
      let initGroup = [tbl_cndArea, tbl_odrInfoArea, tbl_pchsInfoArea];
      initGroup.forEach(group => {
        $c.gus.cfInitObjects($p, group);
      });
      $c.gus.cfInitHidVal($p, [tbl_odrInfoArea]);
      gr_sellInfo.setGridReadOnly(true);
      gr_pchsInfo.setGridReadOnly(true);
      gr_intnlInfo.setGridReadOnly(true);
      break;
    case 'RETRIEVE':
      //조회모드
      $c.gus.cfDisableObjects($p, targetObjs);
      $c.gus.cfEnableBtnOnly($p, [btn_updateOrder, btn_updateSell, btn_updatePchs, btn_updateIntnl]);
      $c.gus.cfDisableBtnOnly($p, [btn_saveSell, btn_savePchs, btn_saveIntnl]);
      gr_sellInfo.setGridReadOnly(true);
      gr_pchsInfo.setGridReadOnly(true);
      gr_intnlInfo.setGridReadOnly(true);
      scwin.f_selectTabMenu(0);
      break;
    case 'UPDATE':
      //수정모드
      switch (gubun2) {
        case 'O':
          $c.gus.cfEnableObjects($p, [tbl_odrInfoArea, tbl_odrBtnArea]);
          $c.gus.cfDisableObjects($p, [ed_ctrtClntNo, ed_ctrtClntNm, ed_ctrtNo, ed_shpCoClntNm, tbl_sellGridBtn, tbl_pchsInfoArea, ed_totSellAmt, ed_totPchsAmt, ed_totStdAmt, ed_totPchsPrflosAmt, ed_totStdPrflosAmt]);
          $c.gus.cfDisableBtnOnly($p, [btn_saveSell]);
          $c.gus.cfEnableBtnOnly($p, [btn_saveOrder, btn_updateSell]);
          scwin.f_setActiveImgPopUp('E');
          gr_sellInfo.setGridReadOnly(true);
          gr_pchsInfo.setGridReadOnly(true);
          if (scwin.dcsnClsCdCntChk > 0) {
            if (acb_crcCd.getValue() == 'KRW') {
              $c.gus.cfDisableObjects($p, [ed_adptExchRt]);
            } else {
              $c.gus.cfDisableObjects($p, [ed_adptExchRt, ica_adptExchRtDt]);
            }
            ;
          }
          ;
          break;
        case 'S':
          $c.gus.cfDisableObjects($p, [tbl_odrInfoArea, tbl_odrBtnArea, tbl_pchsInfoArea]);
          $c.gus.cfEnableObjects($p, [tbl_sellGridBtn]);
          $c.gus.cfEnableBtnOnly($p, [btn_updateOrder, btn_saveSell]);
          $c.gus.cfDisableBtnOnly($p, [btn_saveOrder, btn_updateSell]);
          gr_sellInfo.setGridReadOnly(false);
          scwin.f_setSellInfoByDcsnClsCd();
          break;
        case 'P':
          $c.gus.cfDisableObjects($p, [tbl_odrInfoArea, tbl_odrBtnArea, tbl_pchsInfoArea]);
          $c.gus.cfEnableObjects($p, [tbl_pchsGridBtn]);
          $c.gus.cfEnableBtnOnly($p, [btn_updateOrder, btn_savePchs]);
          $c.gus.cfDisableBtnOnly($p, [btn_saveOrder, btn_updatePchs]);
          gr_pchsInfo.setGridReadOnly(false);
          scwin.f_setPchsInfoByDcsnClsCd();
          break;
        case 'D':
          $c.gus.cfDisableObjects($p, [tbl_odrInfoArea, tbl_odrBtnArea, tbl_pchsInfoArea]);
          $c.gus.cfEnableObjects($p, [tbl_intnlGridBtn]);
          $c.gus.cfEnableBtnOnly($p, [btn_updateOrder, btn_saveIntnl]);
          $c.gus.cfDisableBtnOnly($p, [btn_saveOrder, btn_updateIntnl]);
          gr_intnlInfo.setGridReadOnly(false);
          break;
      }
      ;
      break;
    default:
      break;
  }
  ;
};

// /**
//  * @method 
//  * @name gridReadOnly 
//  * @description 그리드 컬럼 readonly 처리
//  * @param {object} grid
//  * @param {boolean} readOnlyVal
//  */
//  .setGridReadOnly(function)(grid, readOnlyVal) {

//     let colCnt = grid.getTotalCol();

//     for (let i = 0; i < colCnt; i++) {
//         grid.setColumnReadOnly(i, readOnlyVal);
//     };

// };

/**
 * @method 
 * @name f_set 
 * @description Tab Menu 선택시 처리
 * @param {number} idx
 */
scwin.f_selectTabMenu = function (idx) {
  let targetGrid;
  switch (idx) {
    case 0:
      //매출tab
      targetGrid = gr_sellInfo;
      scwin.moveRowPosition(0, gr_sellInfo);
      break;
    case 1:
      //매입tab
      targetGrid = gr_pchsInfo;
      scwin.moveRowPosition(0, gr_pchsInfo);
      break;
    case 2:
      //내부거래 및 손익tab
      ds_adjustmentInformation.removeAll();
      return;
  }
  ;
  scwin.f_retrieveAdjustmentInformation(targetGrid._dataList);
};

/**
 * @method 
 * @name checkUpdated 
 * @description 매출에 수정사항이 있는지 체크
 * @param {string} gubun
 */
scwin.checkUpdated = async function (gubun) {
  let confirmArray = [];
  switch (gubun) {
    case 'O':
      //오더기본정보
      if (dma_odrInfo.getModifiedIndex().length > 0) {
        confirmArray.push('오더정보');
      }
      ;
      break;
    case 'S':
      //매출정보
      if (ds_sellInfo.getModifiedIndex().length > 0) {
        confirmArray.push('매출정보');
        break;
      }
      ;
      return true;
    case 'P':
      //매입정보
      if (ds_pchsInfo.getModifiedIndex().length > 0) {
        confirmArray.push('매입정보');
      }
      ;
      break;
    case 'D':
      //내부거래 및 손익
      if (ds_intnlInfo.getModifiedIndex().length > 0) {
        confirmArray.push('내부거래');
      }
      break;
    default:
      break;
  }
  ;
  if (confirmArray.length == 0) return;

  //@은(는) 변경사항이 있습니다. + 저장하시겠습니까?
  let confirmMsg = $c.data.getMessage($p, MSG_CM_ERR_030, confirmArray) + MSG_CM_CRM_015;
  const retConfirm = await $c.win.confirm($p, confirmMsg);
  if (!retConfirm) return;
  let validVal, rowCnt;
  switch (gubun) {
    case 'O':
      if (!e.clickValue) {
        ds_odrInfo.undoRow(0);
        return;
      }
      ;

      // YES
      validVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea]);
      if (validVal) await scwin.submitExcute(sbm_saveOdrInfo);
      return;
    case 'S':
      if (!e.clickValue) {
        $c.data.undoAll($p, ds_sellInfo);
        return true;
      }
      ;

      // YES
      if (!scwin.f_validateSellInfo()) return;
      rowCnt = ds_sellInfo.getRowCount();
      let Cnt = 0;
      for (i = 0; i < rowCnt; i++) {
        if (ds_sellInfo.getCellData(i, 'bilgClntNo') == ed_bilgClntNo.getValue()) {
          Cnt++;
        }
        ;
      }
      ;
      if (Cnt > 0) {
        validVal = await $c.gus.cfValidate($p, [gr_sellInfo]);
        if (validVal) await scwin.submitExcute(sbm_saveSellInfo);
      } else {
        await $c.gus.cfAlertMsg($p, '오더청구처와 매출청구처가 1개 이상 일치해야 합니다.');
        return false;
      }
      ;
      return true;
    case 'P':
      if (!e.clickValue) {
        $c.data.undoAll($p, ds_pchsInfo);
        return;
      }
      ;

      // YES
      validVal = await $c.gus.cfValidate($p, [gr_pchsInfo]);
      if (!validVal) return;
      if (!scwin.f_validatePchsInfo()) return;
      rowCnt = ds_pchsInfo.getRowCount();
      for (i = 0; i < rowCnt; i++) {
        let rowData = ds_pchsInfo.getRowJSON(i);

        //운송료,하불임만 && 입력된행만 체크
        if (['0010', '0131'].includes(rowData['selpchItemCd']) && ds_pchsInfo.getRowStatusValue(i) == 1) {
          if (!$c.gus.cfIsNull($p, rowData['vehclNo']) || rowData['vehclNo'] != '') return;
          await $c.win.alert($p, '행추가하신 ' + rowData['selpchItemNm'] + ' -> ' + i + '번의 차량번호를 입력해주세요.');
          gr_pchsInfo.setFocusedCell(i, 'vehclNo');
          return;
        }
      }
      ;
      await scwin.submitExcute(sbm_savePchsInfo);
      return;
    case 'D':
      if (!e.clickValue) {
        $c.data.undoAll($p, ds_intnlInfo);
        return;
      }
      ;

      // YES
      validVal = await $c.gus.cfValidate($p, [gr_intnlInfo]);
      if (!validVal) return;
      await scwin.submitExcute(sbm_saveIntnlInfo);
      return;
  }
  ;
  return retVal;
};

/**
 * @method 
 * @name f_retrieve 
 * @description 조회
 */
scwin.f_retrieve = async function () {
  let retVal = await $c.gus.cfValidate($p, [tbl_cndArea]);
  if (!retVal) return;
  let odrNo = ed_odrNo.getValue();
  scwin.f_dataSetInit();
  dma_cndOdrNo.setEmptyValue();
  dma_cndOdrNo.set('odrNo', odrNo);
  dma_cndOdrNo.set('offSetYn', cbx_offSetYn.getValue());
  dma_cndOdrNo.set('blNoYn', cbx_blNoYn.getValue());
  await scwin.submitExcute(sbm_retrieve);
};

/**
 * @method 
 * @name f_dataSetInit 
 * @description 데이타셋 초기화
 */
scwin.f_dataSetInit = function () {
  //통합매출입조정 조회 : 오더기본정보 DataSet
  ds_odrInfo.removeAll();

  //통합매출입조정 조회 : 매출정보 DataSet
  ds_sellInfo.removeAll();

  //통합매출입조정 조회 : 매입정보 DataSet
  ds_pchsInfo.removeAll();

  //검색조건 통합매출입조정 의 정산정보조회 조회
  dma_retrieveAdjustmentInformation.setEmptyValue();

  //통합매출입조정 의 정산정보조회 DataSet
  ds_adjustmentInformation.removeAll();
  // scwin.sbm_retrieveAdjustmentInformation_submitdone();

  //통합매출입조정 조회 : 내부거래정보 DataSet
  ds_intnlInfo.removeAll();

  //통합매출입조정 조회 : 손익정보 DataSet
  ds_profitLossInfo.removeAll();

  //환율정보 데이타셋
  ds_exchangeRate.removeAll();

  //끝전처리 데이타셋
  ds_volAmtSub.removeAll();
};

/**
 * @method 
 * @name f_update 
 * @description 수정
 * @param {string} gubun
 */
scwin.f_update = async function (gubun) {
  switch (gubun) {
    case 'O':
      //오더정보
      //수정사항이있는지 체크
      if (!(await scwin.checkUpdated('S'))) return;
      await scwin.checkUpdated('P'); //수정사항이있는지 체크
      await scwin.checkUpdated('D'); //수정사항이있는지 체크
      scwin.f_set('UPDATE', 'O');
      break;
    case 'S':
      //매출정보
      scwin.f_set('UPDATE', 'S');
      scwin.checkUpdated('O'); //수정사항이있는지 체크
      break;
    case 'P':
      //매입정보
      scwin.f_set('UPDATE', 'P');
      scwin.checkUpdated('O'); //수정사항이있는지 체크
      break;
    case 'D':
      //내수거래/손익 정보
      scwin.f_set('UPDATE', 'D');
      scwin.checkUpdated('O'); //수정사항이있는지 체크
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_update 
 * @description 저장
 * @param {string} gubun
 */
scwin.f_save = async function (gubun) {
  let validVal;

  //고객사 요청으로 오더의 청구처가 공통거래처이면 통합매출입 수정 불가
  if (ed_bilgClntNo.getValue() == '999901') {
    $c.gus.cfAlertMsg($p, '청구처는 공통거래처를 사용할 수 없습니다.');
    return;
  }
  ;
  switch (gubun) {
    case 'S':
      //매출정보
      // Grid의 필수 입력 항목에 대해서 Check 한다.
      validVal = await $c.gus.cfValidate($p, [gr_sellInfo]);
      if (!validVal) return;
      if (!scwin.f_setDsUpdateRsn()) return;
      break;
    default:
      break;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  let rowCnt, rowData, allData;
  switch (gubun) {
    case 'O':
      //오더기본정보
      if (dma_odrInfo.getModifiedIndex().length == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['오더정보']); //@은(는) 변경된 사항이 없습니다.
        return;
      }
      ;
      validVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea]);
      if (validVal) await scwin.submitExcute(sbm_saveOdrInfo);
      break;
    case 'S':
      //매출정보
      if (ds_sellInfo.getModifiedIndex().length == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['통합매출조정']); //@은(는) 변경된 사항이 없습니다.
        return;
      }
      ;
      if (!scwin.f_validateSellInfo()) return;
      rowCnt = ds_sellInfo.getRowCount();
      allData = ds_sellInfo.getAllJSON();
      bilgClntNoVal = ed_bilgClntNo.getValue();
      let Cnt = 0;
      let TCnt = 0;
      for (let i = 0; i < rowCnt; i++) {
        rowData = allData[i];

        //삭제인 건 제외하고 청구처 체크
        //RowStatus 0:Nomal, 1:insert, 2:Delete, 3:Update, 4:Logical
        if ([2, 4].includes(ds_sellInfo.getRowStatusValue(i))) continue;
        if (rowData['bilgClntNo'] == bilgClntNoVal) Cnt++;
        TCnt++; //삭제인 건 제외하고 남은 행개수 체크

        //20200423 정은숙 자가하차관리비 수기 입력 *추후 삭제
        if (rowData['sellItemCd'] == '1221' && rowData['sellCommNm'].length == 5) {
          ds_sellInfo.setCellData(i, 'cntrSizCd', rowData['sellCommNm'].slice(0, 2));
          ds_sellInfo.setCellData(i, 'cntrTypCd', rowData['sellCommNm'].slice(2, 4));
          ds_sellInfo.setCellData(i, 'fullEmptyClsCd', rowData['sellCommNm'].slice(4, 5));
        }
        ;
      }
      ;
      if (Cnt > 0 || TCnt == 0) {
        //오더청구처와 매출청구처가 1개 이상 일치하는 경우와 매출 전체 삭제하는 경우에만 저장가능
        validVal = await $c.gus.cfValidate($p, [gr_sellInfo]);
        if (!validVal) return;
        await scwin.submitExcute(sbm_saveSellInfo);
      } else {
        await $c.gus.cfAlertMsg($p, '오더청구처와 매출청구처가 1개 이상 일치해야 합니다.');
      }
      ;
      break;
    case 'P':
      //매입정보
      const validSetDspch = await scwin.f_setDsPchsUpdateRsn();
      if (!validSetDspch) return;
      if (ds_pchsInfo.getModifiedIndex().length == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['통합매입조정']); //@은(는) 변경된 사항이 없습니다.
        return;
      }
      ;
      if (!(await $c.gus.cfValidate($p, [gr_pchsInfo]))) return;
      if (!scwin.f_validatePchsInfo()) return;
      rowCnt = ds_pchsInfo.getRowCount();
      allData = ds_pchsInfo.getAllJSON();
      for (i = 0; i < rowCnt; i++) {
        rowData = allData[i];

        //운송료,하불임만 입력된행만 체크
        if (['0010', '0131'].includes(rowData['selpchItemCd']) && ds_pchsInfo.getRowStatusValue(i) == '1') {
          if ($c.gus.cfIsNull($p, rowData['vehclNo']) || rowData['vehclNo'] == '') {
            $c.win.alert($p, '행추가하신 ' + rowData['selpchItemNm'] + ' -> ' + i + '번의 차량번호를 입력해주세요.');
            gr_pchsInfo.setFocusedCell(i, 'vehclNo');
            return;
          }
          ;
        }
        ;
      }
      ;
      await scwin.submitExcute(sbm_savePchsInfo);
      break;
    case 'D':
      //내수거래/손익 정보
      if (ds_intnlInfo.getModifiedIndex().length == 0) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['내부거래']); //@은(는) 변경된 사항이 없습니다.
        return;
      }
      ;
      validVal = await $c.gus.cfValidate($p, [gr_intnlInfo]);
      if (!validVal) return;
      await scwin.submitExcute(sbm_saveIntnlInfo);
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name f_setDsUpdateRsn 
 * @description
 */
scwin.f_setDsUpdateRsn = function () {
  let sellMainMainRsn = ed_sellMainMainRsn.getValue();
  let transOdrNo = ed_trans_odrNo.getValue();
  let sellMainMainPattern1 = acb_sellMainMainPattern1.getValue();
  if ($c.gus.cfIsNull($p, transOdrNo)) {
    if ($c.gus.cfIsNull($p, sellMainMainPattern1)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['수정(삭제)사유']); //@은(는) 필수 입력 항목입니다
      acb_sellMainMainPattern1.focus();
      return false;
    }
    ;
    if (sellMainMainPattern1 == '99' && $c.gus.cfIsNull($p, sellMainMainRsn)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['수정(삭제)사유코드가 기타면 수정(삭제)수정사유']); //@은(는) 필수 입력 항목입니다
      ed_sellMainMainRsn.focus();
      return false;
    }
    ;
  }
  ;
  dma_updateRsnInfo.setEmptyValue();
  dma_updateRsnInfo.set('sellMainMainPattern1', sellMainMainPattern1);
  let retVal = $c.gus.cfIsNull($p, transOdrNo) ? sellMainMainRsn : transOdrNo;
  dma_updateRsnInfo.set('sellMainMainRsn', retVal);
  return true;
};

/**
 * @method 
 * @name f_setDsPchsUpdateRsn 
 * @description
 */
scwin.f_setDsPchsUpdateRsn = async function () {
  let pchsMainMainPattern = acb_pchsMainMainPattern.getValue();
  let pchsMainMainRsn = ed_pchsMainMainRsn.getValue();
  if ($c.gus.cfIsNull($p, pchsMainMainPattern)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['수정(삭제)사유']); //@은(는) 필수 입력 항목입니다
    acb_pchsMainMainPattern.focus();
    return false;
  }
  ;
  if (pchsMainMainPattern == '99' && $c.gus.cfIsNull($p, pchsMainMainRsn)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['수정(삭제)사유코드가 기타면 수정(삭제)수정사유']); //@은(는) 필수 입력 항목입니다
    ed_pchsMainMainRsn.focus();
    return false;
  }
  dma_updateRsnInfo.setEmptyValue();
  dma_updateRsnInfo.set('sellMainMainPattern1', pchsMainMainPattern);
  dma_updateRsnInfo.set('sellMainMainRsn', pchsMainMainRsn);
  return true;
};

/**
 * @method 
 * @name f_addRow 
 * @description 행추가
 */
scwin.f_addRow = async function () {
  let rowCnt, data, rowData, row, insertRows, insertRow, insertIdx, rowArray, colCnt;
  let odrInfo = ds_odrInfo.getRowJSON(0);
  switch (tr_tab_center.getSelectedTabIndex()) {
    case 0:
      //매출정보
      if (odrInfo['sellYn'] != 1) {
        await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_001);
        return;
      }
      ;
      rowCnt = ds_sellInfo.getRowCount();
      if (rowCnt == 0) {
        data = {
          'dcsnClsCd': '1',
          'bilgTrgtYn': 1,
          'addYn': 1,
          'odrNo': odrInfo['odrNo'],
          //정은숙 자가하차료 청구용 추가
          'sellYn': 1
        };
        const insertIdx = ds_sellInfo.insertRow();
        ds_sellInfo.setRowJSON(insertIdx, data, true);
        scwin.f_setSellInfoByDcsnClsCd();
        scwin.SELL_ADD_ROW = 0;
        return;
      }
      ;
      insertRows = [];
      for (i = 0; i < rowCnt; i++) {
        rowData = ds_sellInfo.getRowJSON(i);
        if (rowData['addHang'] == 'T') {
          ds_sellInfo.setCellData(i, 'addHang', '');
          scwin.SELL_ADD_ROW = 1;
          let vatAmtVal = rowData['vatAmt'];
          if (rowData['taxnClsCd'] == '01') {
            let nSellAmt = $c.num.parseFloat($p, rowData['sellAmt'], 0);
            vatAmtVal = Math.round(nSellAmt * 0.1);
          }
          ;
          insertRows.push({
            'odrNo': odrInfo['odrNo'],
            'sellItemCd': rowData['sellItemCd'],
            'dcScCd': rowData['dcScCd'],
            'sellUpr': rowData['sellUpr'],
            'sellAmtFcrc': rowData['sellAmtFcrc'],
            'sellAmt': rowData['sellAmt'],
            'retroactSellUpr': rowData['retroactSellUpr'],
            'retroactSellAmtFcrc': rowData['retroactSellAmtFcrc'],
            'retroactSellAmt': rowData['retroactSellAmt'],
            'retroactVatAmt': rowData['retroactVatAmt'],
            'crcCd': rowData['crcCd'],
            'qtyUnitCd': rowData['qtyUnitCd'],
            'wtUnitCd': rowData['wtUnitCd'],
            'qty': rowData['qty'],
            'wt': rowData['wt'],
            'cbm': rowData['cbm'],
            'sellVol': rowData['sellVol'],
            'sellUnitCd': rowData['sellUnitCd'],
            'unitClsCd': rowData['unitClsCd'],
            'sellGoodsPatternCd': rowData['sellGoodsPatternCd'],
            'sellCommNo': rowData['sellCommNo'],
            'bilgLodeptCd': odrInfo['bilgLodeptCd'],
            'sellLodeptCd': odrInfo['sellLodeptCd'],
            'bizDomCd': rowData['bizDomCd'],
            'lineCd': odrInfo['lineCd'],
            'rsltsStdDt': rowData['rsltsStdDt'],
            'wrkStDt': rowData['wrkStDt'],
            'wrkStHh': rowData['wrkStHh'],
            'bilgIntendDt': rowData['bilgIntendDt'],
            'offsetOdrNo1': rowData['offsetOdrNo1'],
            'offsetSellSeq1': rowData['offsetSellSeq1'],
            'offsetOdrNo2': rowData['offsetOdrNo2'],
            'offsetSellSeq2': rowData['offsetSellSeq2'],
            'vehclNo': rowData['vehclNo'],
            'invoiceNo': rowData['invoiceNo'],
            'arrowDdCnt': rowData['arrowDdCnt'],
            'freeday': rowData['freeday'],
            'jdgAmt': rowData['jdgAmt'],
            'cstmdtAmt': rowData['cstmdtAmt'],
            'strDeg': rowData['strDeg'],
            'scRt': rowData['scRt'],
            'wrkEndDt': rowData['wrkEndDt'],
            'wrkEndHh': rowData['wrkEndHh'],
            'eqNrmCd': rowData['eqNrmCd'],
            'onWrkPlCd': odrInfo['dptWrkPlCd'],
            'offWrkPlCd': odrInfo['arvWrkPlCd'],
            'cntrSizCd': rowData['cntrSizCd'],
            'cntrTypCd': rowData['cntrTypCd'],
            'fullEmptyClsCd': rowData['fullEmptyClsCd'],
            'rmk': rowData['rmk'],
            'cargoShiftingRsltsSeq': rowData['cargoShiftingRsltsSeq'],
            'hveqUseRateSeq': rowData['hveqUseRateSeq'],
            'unsettledCloseYn': rowData['unsettledCloseYn'],
            'mrn': rowData['mrn'],
            'msn': rowData['msn'],
            'hsn': rowData['hsn'],
            'bookingNo': rowData['bookingNo'],
            'cntrCyRetrvDt': rowData['cntrCyRetrvDt'],
            'cntrShippingDt': rowData['cntrShippingDt'],
            'bilgTrgtYn': 1,
            //rowData['bilgTrgtYn']
            'commCd': rowData['commCd'],
            'ctrtClntNo': odrInfo['ctrtClntNo'],
            'reqClntNo': odrInfo['reqClntNo'],
            'bilgClntNo': rowData['bilgClntNo'],
            'taxnClsCd': rowData['taxnClsCd'],
            'frvanQty': rowData['frvanQty'],
            'odrDt': odrInfo['odrDt'],
            'vsslCd': odrInfo['vsslCd'],
            'portcnt': odrInfo['portcnt'],
            'tsVsslCd': odrInfo['tsVsslCd'],
            'tsPortcnt': odrInfo['tsPortcnt'],
            'sellYn': 1,
            //rowData['sellYn']
            'bilgTrgtOdrNo': rowData['bilgTrgtOdrNo'],
            'bilgTrgtSellSeq': rowData['bilgTrgtSellSeq'],
            'bilgTrgtRsltsDt': rowData['bilgTrgtRsltsDt'],
            'scDcsnYn': 1,
            //rowData['scDcsnYn']
            'onWrkPlCd': rowData['onWrkPlCd'],
            'onWrkPlNm': rowData['onWrkPlNm'],
            'offWrkPlNm': rowData['offWrkPlCd'],
            'offWrkPlNm': rowData['offWrkPlNm'],
            'dptDistrictCd': rowData['dptDistrictCd'],
            'arvDistrictCd': rowData['arvDistrictCd'],
            'dptDistrictNm': rowData['dptDistrictNm'],
            'arvDistrictNm': rowData['arvDistrictNm'],
            'impExpClsCd': odrInfo['impExpDomesticClsCd'],
            'pchsSeq': rowData['pchsSeq'],
            'sellLodeptCd': rowData['sellLodeptCd'],
            'sellLodeptNm': rowData['sellLodeptNm'],
            'ctrlYn': rowData['ctrlYn'],
            'prebilgCreatYn': rowData['prebilgCreatYn'],
            'sellWrkRsltsClsCd': rowData['sellWrkRsltsClsCd'],
            'shpCoDdCnt': rowData['shpCoDdCnt'],
            'rofDdCnt': rowData['rofDdCnt'],
            'arrvlportDtm': rowData['arrvlportDtm'],
            'delYn': rowData['delYn'],
            'regId': rowData['regId'],
            'regDtm': rowData['regDtm'],
            'modId': rowData['modId'],
            'modDtm': rowData['modDtm'],
            'sellCommNm': rowData['sellCommNm'],
            'sellItemNm': rowData['sellItemNm'],
            'bilgClntNm': rowData['bilgClntNm'],
            'bilgLodeptNm': rowData['bilgLodeptNm'],
            'bizDomNm': rowData['bizDomNm'],
            'dcScNm': rowData['dcScNm'],
            'commSeq': rowData['commSeq'],
            'vatAmt': vatAmtVal,
            'dcsnClsCd': '1',
            'addYn': 1
          });
          scwin.f_setSellInfoByDcsnClsCd();
          scwin.SELL_ADD_ROW = 0;
        }
        ;
      }
      ;
      ds_sellInfo.insertJSON(rowCnt, insertRows);
      scwin.moveRowPosition(rowCnt, gr_sellInfo);
      break;
    case 1:
      //매입정보
      row = ds_pchsInfo.getRowPosition();
      rowData = ds_pchsInfo.getRowJSON(row);
      rowCnt = ds_pchsInfo.getRowCount();

      // 사업영역이 운송이 아닐 때 || 사업영역이 운송일 때, 운송료 하불임이 아니면 
      let selpchItemCdVal = '',
        selpchItemNmVal = '';
      if (rowData['bizDomCd'] != '120' || !['0010', '0131'].includes(rowData['selpchItemCd'])) {
        selpchItemCdVal = rowData['selpchItemCd'];
        selpchItemNmVal = rowData['selpchItemNm'];
      }
      ;
      insertIdx = ds_pchsInfo.insertRow();
      insertRow = {
        'odrNo': odrInfo['odrNo'],
        'stndPcostYn': 0,
        'selpchItemCd': selpchItemCdVal,
        'selpchItemNm': selpchItemNmVal,
        'dcScCd': rowData['dcScCd'],
        'dcScNm': rowData['dcScNm'],
        'pchsGoodsPatternCd': rowData['pchsGoodsPatternCd'],
        'pchsGoodsPatternNm': rowData['pchsGoodsPatternNm'],
        'pchsCommNo': rowData['pchsCommNo'],
        'commCd': rowData['commCd'],
        'pchsCommNm': rowData['pchsCommNm'],
        'unitCd': rowData['unitCd'],
        'vol': rowData['vol'],
        'pchsUpr': rowData['pchsUpr'],
        'pchsAmt': rowData['pchsAmt'],
        'vat': rowData['vat'],
        'pchsClntNo': rowData['pchsClntNo'],
        'pchsClntNm': rowData['pchsClntNm'],
        'copCoClntNo': rowData['copCoClntNo'],
        'copCoClntNm': rowData['copCoClntNm'],
        'rsltsStdDt': rowData['rsltsStdDt'],
        'bizDomCd': rowData['bizDomCd'],
        'bizDomNm': rowData['bizDomNm'],
        'pchsDeptCd': rowData['pchsDeptCd'],
        'pchsDeptNm': rowData['pchsDeptNm'],
        'adjmDeptNm': rowData['adjmDeptNm'],
        'lineNm': rowData['lineNm'],
        'vsslNm': rowData['vsslNm'],
        'commNm': rowData['commNm'],
        'dptWrkPlCd': odrInfo['dptWrkPlCd'],
        'arvWrkPlCd': odrInfo['arvWrkPlCd'],
        'dptDistrictCd': rowData['dptDistrictCd'],
        'arvDistrictCd': rowData['arvDistrictCd'],
        'dptDistrictNm': rowData['dptDistrictNm'],
        'arvDistrictNm': rowData['arvDistrictNm'],
        'vsslCd': odrInfo['vsslCd'],
        'portcnt': odrInfo['portcnt'],
        'wrkStDt': odrInfo['wrkStDt'],
        'wrkStHh': odrInfo['wrkStHh'],
        'wrkEndDt': odrInfo['wrkEndDt'],
        'wrkEndHh': odrInfo['wrkEndHh'],
        'adjmTrgtYn': 1,
        'dcsnClsCd': '1',
        //미확정
        'qtyUnit': rowData['qtyUnit'],
        'wtUnit': rowData['wtUnit'],
        'qty': rowData['qty'],
        'wt': rowData['wt'],
        'cbm': rowData['cbm'],
        //2014.09.01 hurrah 매입건 차량번호 copy추가
        'vehclNo': rowData['vehclNo'],
        'addYn': 1
      };
      ds_pchsInfo.setRowJSON(insertIdx, insertRow, true);

      // 추가된 값 기본값으로 설정
      rowArray = ds_pchsInfo.getRowData(insertIdx);
      colCnt = ds_pchsInfo.getTotalCol();
      for (let i = 0; i < colCnt; i++) {
        ds_pchsInfo.setOriginalCellData(insertIdx, i, rowArray[i]);
      }
      scwin.moveRowPosition(insertIdx, gr_pchsInfo);

      // vsslNm 없음
      let arrColumn1 = ['stndPcostYn', 'selpchItemNm', 'dcScNm', 'pchsGoodsPatternCd', 'pchsCommNo', 'vol', 'unitCd', 'pchsUpr', 'pchsAmt', 'vat', 'pchsClntNm', 'copCoClntNm', 'rsltsStdDt', 'bizDomNm', 'pchsDeptNm', 'adjmDeptNm', 'lineNm', 'portcnt', 'commNm', 'adjmTrgtYn', 'qtyUnit', 'wtUnit', 'qty', 'wt', 'cbm', 'vehclNo'];
      scwin.f_setGridColumnPropEdit(gr_pchsInfo, arrColumn1, false);
      break;
    case 2:
      //내부거래/손익 정보
      if (ds_intnlInfo.getRowCount() > 0) {
        $c.gus.cfCopyRecord($p, gr_intnlInfo);
        const focusedIdx = ds_intnlInfo.getRowPosition();
        rowCnt = ds_intnlInfo.getRowCount();
        insertIdx = rowCnt - 1;
        ds_intnlInfo.setCellData(insertIdx, 'internalTxnSeq', 0);
        ds_intnlInfo.setCellData(insertIdx, 'internalTxnStsClsCd', '0');
        ds_intnlInfo.setCellData(focusedIdx, 'addYn', 1);
        scwin.moveRowPosition(focusedIdx, gr_intnlInfo);
      } else {
        insertIdx = ds_intnlInfo.insertRow();
        insertRow = {
          'odrNo': odrInfo['odrNo'],
          'internalTxnSeq': 0,
          'ctrtClntNo': odrInfo['ctrtClntNo'],
          'internalTxnStsClsCd': '0',
          'ctrtClntNo': odrInfo['ctrtClntNo'],
          'reqClntNo': odrInfo['reqClntNo'],
          'bilgClntNo': odrInfo['bilgClntNo'],
          'taxnClsCd': odrInfo['taxnClsCd'],
          'dptWrkPlCd': odrInfo['dptWrkPlCd'],
          'arvWrkPlCd': odrInfo['arvWrkPlCd'],
          'vsslCd': odrInfo['vsslCd'],
          'portcnt': odrInfo['portcnt'],
          'selpchDeptCd': odrInfo['sellLodeptCd'],
          'selpchDeptNm': odrInfo['sellLodeptNm'],
          'bizDomCd': '',
          'addYn': 1
        };
        ds_intnlInfo.setRowJSON(insertIdx, insertRow, true);
        scwin.moveRowPosition(insertIdx, gr_intnlInfo);
      }

      // 추가된 값 기본값으로 설정
      rowArray = ds_intnlInfo.getRowData(insertIdx);
      colCnt = ds_intnlInfo.getTotalCol();
      for (let i = 0; i < colCnt; i++) {
        ds_intnlInfo.setOriginalCellData(insertIdx, i, rowArray[i]);
      }
      ;
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_deleteRow 
 * @description 행삭제
 */
scwin.f_deleteRow = function () {
  let gridObj, validColID, validVal;
  switch (tr_tab_center.getSelectedTabIndex()) {
    case 0:
      //매출정보
      gridObj = gr_sellInfo;
      validColID = 'dcsnClsCd';
      validVal = '1';
      break;
    case 1:
      //매입정보
      gridObj = gr_pchsInfo;
      validColID = 'dcsnClsCd';
      validVal = '1';
      break;
    case 2:
      //내부거래/손익 정보
      gridObj = gr_intnlInfo;
      validColID = 'internalTxnStsClsCd';
      validVal = '0';
      break;
    default:
      break;
  }
  ;
  const dltObj = gridObj._dataList;
  let focusedIdx = dltObj.getRowPosition();
  if (dltObj.getCellData(focusedIdx, validColID) == validVal) {
    $c.data.deleteRow($p, dltObj);
    const focusIdx = dltObj.getRowPosition();
    scwin.moveRowPosition(focusIdx == -1 ? 0 : focusIdx, gridObj);
  }
  ;
};

/**
 * @method 
 * @name f_undoRow 
 * @description 행취소
 */
scwin.f_undoRow = function () {
  let gridObj;
  switch (tr_tab_center.getSelectedTabIndex()) {
    case 0:
      //매출정보
      gridObj = ds_sellInfo;
      break;
    case 1:
      //매입정보
      gridObj = ds_pchsInfo;
      break;
    case 2:
      //내부거래/손익 정보
      return;
    default:
      return;
  }
  ;
  $c.data.undoRow($p, gridObj);
};

/**
 * @method 
 * @name f_setSellInfoByDcsnClsCd 
 * @description 매출정보에서 확정구분에 따른 매출그리드 Row별 세팅
 */
scwin.f_setSellInfoByDcsnClsCd = function () {
  const editCols = ["sellVol", "sellUnitCd", "qty", "sellUpr", "crcCd", "sellAmtFcrc", "sellAmt", "vatAmt", "bilgClntNm", "rsltsStdDt", "bizDomCd", "sellLodeptNm", "bizDomNm", "bilgLodeptNm", "taxnClsCd", "sellItemNm", "sellGoodsPatternCd", "wrkStDt", "sellCommNm", "wt", "cbm", "mrn", "msn", "hsn", "bookingNo", "lineCd", "commSeq"];
  const readOnlyCols = ["bilgTrgtYn", "sellItemNm", "sellGoodsPatternCd", "sellCommNo", "sellCommNm", "sellUnitCd", "rsltsStdDt", "sellVol", "qty", "sellUpr", "crcCd", "sellAmtFcrc", "sellAmt", "vatAmt", "bilgClntNm", "bilgLodeptNm", "sellLodeptNm", "vsslCd", "portcnt", "onWrkPlNm", "offWrkPlNm", "sellYn", "dcsnClsCd", "certiNo", "taxnClsCd", "qtyUnitCd", "bizDomNm", "wt", "wtUnitCd", "cbm", "lineCd", "mrn", "msn", "hsn", "bookingNo", "wrkStDt"];
  const focusedIdx = ds_sellInfo.getRowPosition();
  const focusedData = ds_sellInfo.getRowJSON(focusedIdx ?? 0);
  const dcsnClsCd = focusedData["dcsnClsCd"];
  const rowStatus = ds_sellInfo.getRowStatusValue(focusedIdx ?? 0);
  if (dcsnClsCd == 1) {
    // 미확인
    // 그리드 전체 readonly 반영을 위해 수정 
    scwin.f_setGridColumnPropEdit(gr_sellInfo, editCols, gr_sellInfo.getGridReadOnly());
    scwin.f_setGridColumnPropEdit(gr_sellInfo, ["bilgTrgtYn", "dcsnClsCd"], true);

    // 추가행
    if (rowStatus == 2) {
      const patternCd = focusedData["sellGoodsPatternCd"];
      const commEditType = ["02", "03"].includes(patternCd) ? true : false;
      gr_sellInfo.setColumnReadOnly("sellCommNm", commEditType);
    }
    ;
  } else {
    // 확인(2), 계산서(3), 전표(4)
    scwin.f_setGridColumnPropEdit(gr_sellInfo, ["commSeq"], false);
    scwin.f_setGridColumnPropEdit(gr_sellInfo, readOnlyCols, true);

    // grid의 readonly가 column에 영향을 받는 것으로 보임
    if (gr_sellInfo.getGridReadOnly()) {
      gr_sellInfo.setColumnReadOnly("commSeq", true);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_setPchsInfoByDcsnClsCd  
 * @description 매출정보에서 확정구분에 따른 매출그리드 Row별 세팅
 */
scwin.f_setPchsInfoByDcsnClsCd = function () {
  let arrColumn1, arrColumn2;
  let focusedIdx = ds_pchsInfo.getRowPosition();
  let focusedData = ds_pchsInfo.getRowJSON(focusedIdx);
  // 1-미확인 | 2-확인 | 3-계산서작성 | 4-전표작성
  let dcsnClsCd = focusedData['dcsnClsCd']; //확정구분코드

  switch (dcsnClsCd) {
    case '1':
      // 미확인
      arrColumn1 = ['selpchItemNm', 'dcScNm', 'pchsGoodsPatternCd', 'pchsCommNo', 'rsltsStdDt', 'vol', 'unitCd', 'pchsUpr', 'pchsAmt', 'pchsClntNm', 'vat', 'copCoClntNm', 'bizDomNm', 'pchsDeptNm', 'adjmDeptNm', 'lineNm', 'vsslCd', 'portCnt', 'dptWrkPlNm', 'arvWrkPlNm', 'qty', 'qtyUnit', 'wt', 'wtUnit', 'cbm'];
      arrColumn2 = ['vehclNo'];

      //추가행인 경우
      let readOnlyVal = true;
      if (ds_pchsInfo.getRowStatus(focusedIdx) == 'C') {
        arrColumn1.push('vehclNo');
        scwin.f_setGridColumnPropEdit(gr_pchsInfo, arrColumn1, false);
        let pchsGoodsPatternCd = focusedData['pchsGoodsPatternCd'];
        let readOnlyVal = ['02', '03'].includes(pchsGoodsPatternCd);
        gr_pchsInfo.setColumnReadOnly('pchsCommNo', readOnlyVal);
        return;
      }
      ;

      // 그리드 readonly 반영 위해 수정
      scwin.f_setGridColumnPropEdit(gr_pchsInfo, arrColumn1, gr_pchsInfo.getGridReadOnly());
      scwin.f_setGridColumnPropEdit(gr_pchsInfo, arrColumn2, readOnlyVal);
      break;
    case '2':
      // 확인
      arrColumn1 = [];
      arrColumn2 = ['selpchItemNm', 'dcScNm', 'pchsGoodsPatternCd', 'pchsCommNo', 'rsltsStdDt', 'vol', 'unitCd', 'pchsUpr', 'pchsAmt', 'pchsClntNm', 'vat', 'copCoClntNm', 'bizDomNm', 'pchsDeptNm', 'adjmDeptNm', 'lineNm', 'vsslCd', 'portCnt', 'dptWrkPlNm', 'arvWrkPlNm', 'qty', 'qtyUnit', 'wt', 'wtUnit', 'cbm', 'vehclNo'];
      scwin.f_setGridColumnPropEdit(gr_pchsInfo, arrColumn2, true);
      break;
    case '3': // 계산서작성
    case '4':
      // 전표작성
      arrColumn1 = [];
      arrColumn2 = ['selpchItemNm', 'dcScNm', 'pchsGoodsPatternCd', 'pchsCommNo', 'rsltsStdDt', 'vol', 'unitCd', 'pchsUpr', 'pchsAmt', 'pchsClntNm', 'vat', 'copCoClntNm', 'bizDomNm', 'pchsDeptNm', 'adjmDeptNm', 'lineNm', 'vsslCd', 'portCnt', 'dptWrkPlNm', 'arvWrkPlNm', 'qty', 'qtyUnit', 'wt', 'wtUnit', 'cbm', 'vehclNo'];
      scwin.f_setGridColumnPropEdit(gr_pchsInfo, arrColumn2, true);
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_openPopUpBefore
 * @description EMEDIT상자에서 팝업열기전 작업
 * (f_openPopUpTextBefore, f_openPopUpEmeditBefore 통합함)
 */
scwin.f_openPopUpBefore = function (gubun, nmObj, cdObj, pWinCloseTF) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, cdObj, nmObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, nmObj);
  scwin.f_openPopUpText(gubun, nmObj, cdObj, pWinCloseTF);
};

/**
 * @method 
 * @name f_openPopUpBefore
 * @description text상자팝업열기(코드(emedit)와 코드명(getValue()) object가 있는경우
 * @param {number} gubun
 * @param {object} nmObj
 * @param {object} cdObj
 * @param {string} pWinCloseTF
 * @todo hideVal 관련 삭제함 확인 필요
 */
scwin.f_openPopUpText = function (gubun, nmObj, cdObj, pWinCloseTF) {
  let pCode = '',
    pName = '';
  let compObj,
    pWtitleSearch = '',
    pDispCnt = '',
    pTitle = null;
  let pWhere = null;
  pCode = cdObj.getValue();
  pName = nmObj.getValue();
  switch (gubun) {
    case 1:
      // 청구처
      compObj = udc_bilgClntNo;
      pWtitleSearch = '청구처,청구처코드,청구처';
      pDispCnt = '5';
      break;
    case 2:
      // 요청처
      compObj = udc_reqClntNo;
      pWtitleSearch = '요청처,요청처코드,요청처';
      pDispCnt = '5';
      break;
    case 3:
      // 매출부서
      compObj = udc_sellLodeptCd;
      pWtitleSearch = '매출부서,매출부서코드,매출부서';
      pDispCnt = '2';
      pWhere = ',,,,,,1,';
      break;
    case 4:
      // Line
      compObj = udc_lineCd;
      pWtitleSearch = 'Line,Line코드,Line명';
      pTitle = 'Line코드,Line명, Line거래처번호, Line거래처명, 선사거래처번호, 선사거래처명';
      pDispCnt = '6';
      pName = ''; //hidden으로 해두었으므로 여기서 다시 ''으로 만들어줌
      break;
    case 5:
      // 청구부서
      compObj = udc_bilgLodeptCd;
      pWtitleSearch = '청구부서,청구부서코드,청구부서';
      pDispCnt = '2';
      pWhere = ',,,,,,,1';
      break;
    default:
      break;
  }
  ;
  compObj.cfCommonPopUp(rtnList => {
    if ($c.gus.cfIsNull($p, rtnList)) {
      $c.gus.cfInitObjects($p, [cdObj, nmObj]);
      $c.gus.cfInitHidVal($p, [cdObj, nmObj]);
      if (gubun == 4) {
        ed_shpCoClntNm.setValue(''); //선사거래처
      }
      ;
      return;
    }
    ;
    if (rtnList[0] == 'N/A') {
      //팝업에서 닫기버튼 클릭시
      $c.gus.cfSetReturnValue($p, rtnList, cdObj, nmObj);
      if (gubun == 4) ed_shpCoClntNm.setValue(''); //선사거래처
      return;
    }
    ;
    cdObj.setValue(rtnList[0]);
    nmObj.setValue(rtnList[1]);
    if (gubun == 4) ed_shpCoClntNm.setValue(rtnList[4]); //선사거래처

    // 2007.12.06 관리거래처체크 추가
    if (gubun == 1) scwin.f_retrieveCtrtNo2(); // 불량거래처 조회
  }, pCode,
  //pCode
  pName,
  //pName
  pWinCloseTF,
  //pWinCloseTF
  pDispCnt,
  //pDispCnt
  pTitle,
  //pTitle
  null,
  //pWidth
  null,
  //pHidden
  pWhere,
  //pWhere
  null,
  //pW
  null,
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	('F')
  null,
  //pAllSearchTF - 전체검색허용여부	('F')
  pWtitleSearch //pWtitleSearch - POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
  );
};

/**
 * @method 
 * @name f_openPopUpGridBefore
 * @description 그리드에서 팝업오픈하기전 작업(코드와 코드명이 있는 경우)
 * @param {string} colGubun
 * @param {object} ds
 * @param {string} cdColid
 * @param {string} nmColid
 * @param {string} olddata
 * @param {number} gubun
 * @param {string} pWinCloseTF
 */
scwin.f_openPopUpGridBefore = async function (colGubun, ds, cdColid, nmColid, olddata, gubun, pWinCloseTF) {
  let focusedIdx = ds.getRowPosition();
  let cdVal = ds.getCellData(focusedIdx, cdColid);
  let nmVal = ds.getCellData(focusedIdx, nmColid);
  switch (colGubun) {
    case 'CD':
      if (cdVal == '') {
        ds.setCellData(focusedIdx, nmColid, '');
        return;
      }
      ;
      if (nmVal != olddata) {
        ds.setCellData(focusedIdx, nmColid, '');
        await scwin.f_openPopUpGrid(ds, cdColid, nmColid, gubun, pWinCloseTF);
      }
      ;
      break;
    case 'NM':
      if (nmVal == '') {
        ds.setCellData(focusedIdx, cdColid, '');
        return;
      }
      ;
      if (nmVal != olddata) {
        ds.setCellData(focusedIdx, cdColid, '');
        await scwin.f_openPopUpGrid(ds, cdColid, nmColid, gubun, pWinCloseTF);
      }
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_openPopUpGrid
 * @description 그리드에서 팝업오픈
 * @param {object} ds
 * @param {string} cdColid
 * @param {string} nmColid
 * @param {number} gubun
 * @param {string} pWinCloseTF
 */
scwin.f_openPopUpGrid = async function (ds, cdColid, nmColid, gubun, pWinCloseTF) {
  let pCode = '',
    pName = '';
  let pWtitleSearch = null;
  let pDispCnt = null;
  let pHidden = null;
  let pWhere = null;
  let focusedIdx = ds.getRowPosition();
  let focusedData = ds.getRowJSON(focusedIdx);
  switch (gubun) {
    case 7:
    case 8:
      let cnt = focusedData[nmColid].indexOf(']');
      pCode = focusedData[cdColid];
      pName = focusedData[nmColid].substr(cnt + 1);
      break;
    case 13:
    case 14:
      pCode = focusedData[cdColid] + '';
      pName = focusedData[nmColid] + '';
      break;
    case 15:
      pCode = '';
      pName = focusedData[nmColid] + '';
      break;
    default:
      pCode = focusedData[cdColid];
      pName = focusedData[nmColid];
      break;
  }
  ;
  switch (gubun) {
    case 1:
      // 매출그리드 -청구처
      pSelectID = 'retrieveClntInfo';
      pWtitleSearch = '청구처,청구처코드,청구처';
      break;
    case 2:
      // 매출그리드 -청구부서
      pSelectID = 'retrieveLogisDeptInfo';
      pWtitleSearch = '청구부서,청구부서코드,청구부서';
      pWhere = ',,,,,,,1';
      break;
    case 3:
      // 매출그리드 -매출항목
      pSelectID = 'retrieveSelpchItemPchsInfo';
      pWtitleSearch = '매출항목,매출항목코드,매출항목';
      pDispCnt = '2';
      pHidden = '3,4,5,6,7,8,9,10';
      pWhere = ',,1,1';
      break;
    case 4: // 매출그리드 -사업영역
    case 94:
      pSelectID = 'retrieveBizDomCdInfo';
      pWtitleSearch = '사업영역,사업영역코드,사업영역';
      break;
    case 5:
      // 매입항목
      pSelectID = 'retrieveSelpchItemPchsInfo';
      pWtitleSearch = '매입항목,매입항목코드,매입항목';
      pDispCnt = '2';
      pHidden = '3,4,5,6,7,8,9,10';
      pWhere = '1,,1,';
      break;
    case 6:
      // 할인할증
      pSelectID = 'retrieveSelpchItemPchsInfo';
      pWtitleSearch = '할인할증,할인할증코드,할인할증';
      pDispCnt = '2';
      pHidden = '3,4,5,6,7,8,9,10';
      pWhere = ',,1,';
      break;
    case 7:
      // 협력업체
      pSelectID = 'retrieveCoopList';
      pWtitleSearch = '협력업체,협력업체번호,협력업체';
      break;
    case 8:
      // 매입거래처
      pSelectID = 'retrieveCoopList';
      pWtitleSearch = '매입거래처,매입거래처번호,매입거래처';
      break;
    case 9: // 부서
    case 99:
      pSelectID = 'retrieveOpDeptCdInfo';
      pWtitleSearch = '부서,부서코드,부서';
      pWhere = ',1';
      break;
    case 10:
      // 품명
      pSelectID = 'retrieveCommInfo';
      pWtitleSearch = '품명,품명코드,품명';
      pWhere = '2,4,,,ZZZZ';
      break;
    case 11:
      // 매출부서
      pSelectID = 'retrieveLogisDeptInfo';
      pWtitleSearch = '매출부서,매출부서코드,매출부서';
      pWhere = ',,,,,,1,';
      break;
    case 12:
      // 작업장
      pSelectID = 'retrieveWrkPlInfo';
      pWtitleSearch = '작업장,작업장코드,작업장';
      break;
    case 13:
      // 오더작업경로
      pSelectID = 'retrieveOdrWrkPathList';
      pWhere = focusedData['odrNo'];
      break;
    case 14:
      // 오더작업단계
      pSelectID = 'retrieveOdrWrkPathEachWrkStpList';
      if (focusedData['cntrSizCd'] != '') {
        pWhere = focusedData['odrNo'] + ',' + focusedData['cntrWrkPathSeq'];
      } else {
        pWhere = focusedData['odrNo'] + ',' + focusedData['bulkWrkPathSeq'];
      }
      break;
    case 15:
      // 차량조회
      pSelectID = 'retrieveVehclList';
      pWtitleSearch = '차량번호조회,차량단축번호,차량번호';
      pDispCnt = '1';
      pWhere = focusedData['pchsClntNo'];
      break;
    default:
      break;
  }
  ;
  udc_gridComCode.setSelectId(pSelectID);
  await udc_gridComCode.cfCommonPopUpAsync(async rtnList => {
    if (rtnList == null) {
      ds.setCellData(focusedIdx, cdColid, '');
      ds.setCellData(focusedIdx, nmColid, '');
      return;
    }
    ;
    if (rtnList[0] == 'N/A') {
      //팝업에서 닫기버튼 클릭시
      const preCode = ds.getCellData(focusedIdx, cdColid);
      const preName = ds.getCellData(focusedIdx, nmColid);
      ds.setCellData(focusedIdx, cdColid, preCode);
      ds.setCellData(focusedIdx, nmColid, preName);
      return;
    }
    ;
    switch (gubun) {
      case 7:
      case 8:
        ds.setCellData(focusedIdx, cdColid, rtnList[0]);
        ds.setCellData(focusedIdx, nmColid, '[' + rtnList[0] + ']' + rtnList[1]);
        break;
      case 9:
        ds.setCellData(focusedIdx, cdColid, rtnList[0]);
        ds.setCellData(focusedIdx, nmColid, rtnList[1]);
        ds.setCellData(focusedIdx, 'bizDomCd', rtnList[2]);
        ds.setCellData(focusedIdx, 'bizDomNm', rtnList[3]);
        break;
      case 99:
        ds.setCellData(focusedIdx, cdColid, rtnList[0]);
        ds.setCellData(focusedIdx, nmColid, rtnList[1]);
        ds.setCellData(focusedIdx, 'bizDomCd', rtnList[2]);
        ds.setCellData(focusedIdx, 'bizDomNm', rtnList[3]);
        if (ds.getRowStatusValue(focusedIdx) == 2 && rtnList[2] == '120' && ['0010', '0131'].includes(focusedData['selpchItemCd'])) {
          $c.win.alert($p, '사업영역이 운송일 경우 운송료, 하불임은 통합매출입에서 추가할 수 없습니다.');
          ds.setCellData(focusedIdx, 'selpchItemCd', '');
          ds.setCellData(focusedIdx, 'selpchItemNm', '');
        }
        break;
      case 94:
        // 사업영역
        ds.setCellData(focusedIdx, cdColid, rtnList[0]);
        ds.setCellData(focusedIdx, nmColid, rtnList[1]);
        if (ds.getRowStatusValue(focusedIdx) == 2 && rtnList[0] == '120' && ['0010', '0131'].includes(focusedData['selpchItemCd'])) {
          $c.win.alert($p, '사업영역이 운송일 경우 운송료,하불임은 통합매출입에서 추가할 수 없습니다.');
          ds.setCellData(focusedIdx, 'selpchItemCd', '');
          ds.setCellData(focusedIdx, 'selpchItemNm', '');
        }
        break;
      case 5:
        ds.setCellData(focusedIdx, cdColid, rtnList[0]);
        ds.setCellData(focusedIdx, nmColid, rtnList[1]);
        if (ds.getRowStatus(focusedIdx) == "C" && ['0010', '0131'].includes(rtnList[0])) {
          if (focusedData['bizDomCd'] === '120') {
            await $c.win.alert($p, '운송료, 하불임은 통합매출입에서 추가할 수 없습니다.');
            ds.setCellData(focusedIdx, cdColid, '');
            ds.setCellData(focusedIdx, nmColid, '');
            return;
          }
          if (focusedData['bizDomCd'] === '') {
            await $c.win.alert($p, '사업영역이 운송일 경우 운송료, 하불임은 통합매출입에서 추가할 수 없습니다.' + '\n사업영역이 운송이 아닌경우 사업영역을 먼저 선택하십시오');
            ds.setCellData(focusedIdx, cdColid, '');
            ds.setCellData(focusedIdx, nmColid, '');
            return;
          }
          ;
        }
        ;
        ds.setCellData(focusedIdx, cdColid, rtnList[0]);
        ds.setCellData(focusedIdx, nmColid, rtnList[1]);
        break;
      default:
        ds.setCellData(focusedIdx, cdColid, rtnList[0]);
        ds.setCellData(focusedIdx, nmColid, rtnList[1]);
        break;
    }
    ;
  }, pCode,
  //pCode
  pName,
  //pName
  pWinCloseTF,
  //pWinCloseTF
  pDispCnt,
  //pDispCnt
  null,
  //pTitle
  null,
  //pWidth
  pHidden,
  //pHidden
  pWhere,
  //pWhere
  null,
  //pW
  null,
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	('F')
  'F',
  //pAllSearchTF - 전체검색허용여부	('F')
  pWtitleSearch //pWtitleSearch - POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
  );
};

/**
 * @method 
 * @name f_openPopUpByCvsslMgmtNo
 * @description 
 */
scwin.f_openPopUpByCvsslMgmtNo = async function () {
  let impExpClsCd = acb_impExpDomesticClsCd.getValue();
  let arrParam = [ed_cvsslMgntNo.getValue(), impExpClsCd];
  const retConfirm = await $c.win.confirm($p, scwin.MSG_SD_CRM_001);
  if (!retConfirm) return;
  let url = '/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml';
  let options = {
    type: 'browserPopup',
    width: '1200px',
    height: '620px',
    popupName: '본선관리번호검색팝업'
  };
  let data = arrParam;
  const returnVal = await $c.win.openPopup($p, url, options, data);
  if (returnVal != null) {
    ed_cvsslMgntNo.setValue(returnVal[0]);
    ed_vsslCd.setValue(returnVal[1]); //선박코드
    ed_portcnt.setValue(returnVal[11]); //선사항차
    dma_odrInfo.set('portCd', returnVal[2]); //항구코드
    $c.gus.cfEnableObjects($p, [btn_openPgm]);
  } else {
    $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_portcnt]);
    $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
    dma_odrInfo.set('portCd', ''); //항구코드
    $c.gus.cfDisableObjects($p, [btn_openPgm]);
  }
  ;
};

/**
 * @method 
 * @name f_openPopUpGridLineCd
 * @description 그리드 Line 팝업
 * @param {string} pWinCloseTF
 */
scwin.f_openPopUpGridLineCd = function (pWinCloseTF) {
  let focusedIdx = ds_sellInfo.getRowPosition();
  let focusedData = ds_sellInfo.getRowJSON(focusedIdx);
  udc_gridComCode.setSelectId('retrieveLineInfoList');
  udc_gridComCode.cfCommonPopUp(rtnList => {
    if (rtnList == null) {
      ds_sellInfo.setCellData(focusedIdx, 'lineCd', '');
      return;
    }
    ;
    if (rtnList[0] == 'N/A') {
      //팝업에서 닫기버튼 클릭시
      ds_sellInfo.setCellData(focusedIdx, 'lineCd', focusedData['lineCd']);
      return;
    }
    ;
    ds_sellInfo.setCellData(focusedIdx, 'lineCd', rtnList[0]);
  }, ds_sellInfo.getCellData(focusedIdx, 'lineCd'),
  //pCode
  '',
  //pName
  pWinCloseTF,
  //pWinCloseTF
  null,
  //pDispCnt
  null,
  //pTitle
  null,
  //pWidth
  null,
  //pHidden
  null,
  //pWhere
  null,
  //pW
  null,
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	('F')
  null,
  //pAllSearchTF - 전체검색허용여부	('F')
  'Line,Line코드,Line명' //pWtitleSearch - POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
  );
};

/**
 * @method 
 * @name f_openPopUpGridLineCd
 * @description 그리드에서 매출품목유형에서 품명단위를 선택시 품명팝업 열기
 * @param {object} ds
 * @param {string} colid
 * @param {object} aryGrd
 */
scwin.f_openPopUpCommInfo = async function (ds, colid, aryGrd) {
  let focusedIdx = ds.getRowPosition();
  let focusedData = ds.getRowJSON(focusedIdx);
  udc_gridComCode.setSelectId('retrieveCommInfo');
  await udc_gridComCode.cfCommonPopUpAsync(async rtnList => {
    if (rtnList == null) {
      ds.setCellData(focusedIdx, aryGrd[0], '');
      ds.setCellData(focusedIdx, aryGrd[1], '');
      ds.setCellData(focusedIdx, aryGrd[2], '');
      return;
    }
    ;
    if (rtnList[0] == 'N/A') {
      //팝업에서 닫기버튼 클릭시
      ds.setCellData(focusedIdx, aryGrd[0], focusedData[aryGrd[0]]);
      ds.setCellData(focusedIdx, aryGrd[1], focusedData[aryGrd[1]]);
      ds.setCellData(focusedIdx, aryGrd[2], focusedData[aryGrd[2]]);
    }
    ;
    ds.setCellData(focusedIdx, aryGrd[0], rtnList[0]);
    ds.setCellData(focusedIdx, aryGrd[1], '[' + rtnList[0] + ']' + rtnList[1]);
    ds.setCellData(focusedIdx, aryGrd[2], rtnList[0]);
  }, '',
  //pCode
  '',
  //pName
  'T',
  //pWinCloseTF
  null,
  //pDispCnt
  null,
  //pTitle
  '160,167',
  //pWidth
  null,
  //pHidden
  '2,4,,,ZZZZ',
  //pWhere
  null,
  //pW
  null,
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	('F')
  null,
  //pAllSearchTF - 전체검색허용여부	('F')
  '품명,품명코드,품명' //pWtitleSearch - POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
  );
};

/**
 * @method 
 * @name f_openPopUpGridLineCd
 * @description 그리드에서 매출품목유형에서 장비단위를 선택시 품명팝업 열기
 * @param {object} ds
 * @param {string} colid
 * @param {object} aryGrd
 */
scwin.f_openPopUpKndVehcl = function (ds, colid, aryGrd) {
  let focusedIdx = ds.getRowPosition();
  let focusedData = ds.getRowJSON(focusedIdx);
  udc_gridComCode.setSelectId('retrieveKndVehclListInfo');
  udc_gridComCode.cfCommonPopUp(rtnList => {
    if (rtnList == null) {
      ds.setCellData(focusedIdx, aryGrd[0], '');
      ds.setCellData(focusedIdx, aryGrd[1], '');
      ds.setCellData(focusedIdx, aryGrd[2], '');
    }
    ;
    if (rtnList[0] == 'N/A') {
      //팝업에서 닫기버튼 클릭시
      ds.setCellData(focusedIdx, aryGrd[0], focusedData[aryGrd[0]]);
      ds.setCellData(focusedIdx, aryGrd[1], focusedData[aryGrd[1]]);
      ds.setCellData(focusedIdx, aryGrd[2], focusedData[aryGrd[2]]);
    }
    ;
    ds.setCellData(focusedIdx, aryGrd[0], rtnList[0]);
    ds.setCellData(focusedIdx, aryGrd[1], '[' + rtnList[0] + ']' + rtnList[1]);
    ds.setCellData(focusedIdx, aryGrd[2], rtnList[0]);
  }, '',
  //pCode
  '',
  //pName
  'T',
  //pWinCloseTF
  '2',
  //pDispCnt
  null,
  //pTitle
  null,
  //pWidth
  null,
  //pHidden
  'LO,LH,',
  //pWhere
  null,
  //pW
  null,
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	('F')
  null,
  //pAllSearchTF - 전체검색허용여부	('F')
  '가용자원,가용자원코드,가용자원' //pWtitleSearch - POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
  );
};

/**
 * @method 
 * @name f_openPopUpGridLineCd
 * @description validation 체크
 */
scwin.f_validateSellInfo = function () {
  let rowData, dcsnClsCd, unitClsCd;
  let rowCnt = ds_sellInfo.getRowCount();
  for (i = 0; i < rowCnt; i++) {
    rowData = ds_sellInfo.getRowJSON(i);
    dcsnClsCd = rowData['dcsnClsCd']; //확정구분코드
    unitClsCd = rowData['unitClsCd']; //단위구분코드(01:수량, 02:중량, 04:cbm)

    // todo - CurLevel 확인필요
    // if (ds_sellInfo.CurLevel == 0) {
    // if (!$c.date.isDate(rowData['wrkStDt'], false)) {
    //     $c.gus.cfAlertMsg(MSG_CM_ERR_018, ['작업일자 ']); //@은(는) 유효한 날짜가 아닙니다.
    //     return false;
    // };
    // }; 

    // 소계 체크용인 것으로 보임 tobe에선 소계가 포함되지 않아 주석
    // todo - ds_sellInfo.RowLevel(i) == 0  
    // if ([0, 2].includes(ds_sellInfo.getRowStatusValue(i))) continue;

    switch (dcsnClsCd) {
      case '1':
        //미확인인 경우
        if ($c.gus.cfIsNull($p, rowData['sellItemNm'])) {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['매출항목 ']); //@은(는) 필수 입력 항목입니다
          return false;
        }
        ;

        //무매출 입력 불가 체크
        if (rowData['sellItemCd'] == '0000') {
          //@의 @번째 데이터에서 유효한 @가 아닙니다.
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_038, ['매출정보', i, '매출항목']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['sellGoodsPatternCd'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['매출품목유형 ']);
          return false;
        }
        ;

        /*2006.03.17 수정 */
        if ($c.gus.cfIsNull($p, rowData['sellCommNo']) && rowData['sellGoodsPatternCd'] == '02') {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['품명 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['sellVol'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['매출물량 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['sellUnitCd'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['단위 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['crcCd'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['통화 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['bilgClntNm'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['청구처 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['rsltsStdDt'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['실적일 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['bizDomNm'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['사업영역 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['bilgLodeptNm'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['청구부서 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['taxnClsCd'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['과세 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['taxnClsCd'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['과세 ']);
          return false;
        }
        ;
        ds_sellInfo.setCellData(i, 'sellMainMainPattern1', acb_sellMainMainPattern1.getValue());
        ds_sellInfo.setCellData(i, 'sellMainMainRsn', ed_sellMainMainRsn.getValue());

        /* 할인할증코드 초기화 시키기 (2008.04.29 )*/
        let dcScCd = rowData['dcScCd'];

        // 숫자이외 문자일 경우 체크
        if (!$c.num.isNumber($p, dcScCd)) {
          ds_sellInfo.setCellData(i, 'dcScCd', '');
        }
        ;
        break;
      case '2':
        //확인인 경우
        if ($c.gus.cfIsNull($p, rowData['rsltsStdDt'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['실적일 ']);
          return false;
        }
        ;
        if ($c.gus.cfIsNull($p, rowData['bizDomNm'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['사업영역 ']);
          return false;
        }
        break;
      default:
        //계산서작성 또는 전표작성인 경우
        if ($c.gus.cfIsNull($p, rowData['rsltsStdDt'])) {
          //@은(는) 필수 입력 항목입니다
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['실적일 ']);
          return false;
        }
        break;
    }
    ;
  }
  ;
  return true;
};

/**
 * @method 
 * @name f_validatePchsInfo
 * @description validation 체크 (통합매입 수정및 신규 정보)
 */
scwin.f_validatePchsInfo = function () {
  let rowData;
  let rowCnt = ds_pchsInfo.getRowCount();
  for (i = 0; i < rowCnt; i++) {
    rowData = ds_pchsInfo.getRowJSON(i);
    // todo - RowLevel 확인필요
    // if (ds_pchsInfo.RowLevel(i) == 0) { //소계가 아닌경우만 추리기 위함

    //행추가 및 수정 상태인 경우 체크 / ds_pchsInfo.RowStatus(i) != 1 지움
    if (![2, 3].includes(ds_pchsInfo.getRowStatusValue(i))) continue;
    if ($c.gus.cfIsNull($p, rowData['selpchItemNm'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['매입항목 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['pchsGoodsPatternCd'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['매입품목유형 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['unitCd'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['단위 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['vol'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['수량 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['pchsUpr'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['단가 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['pchsAmt'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['금액 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['vat'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['부가세 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    if ($c.gus.cfIsNull($p, rowData['pchsClntNm'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['매입거래처 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['copCoClntNm'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['협력업체 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['rsltsStdDt'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['실적일 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['bizDomNm'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['사업영역 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    if ($c.gus.cfIsNull($p, rowData['pchsDeptNm'])) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['부서 ']); //@은(는) 필수 입력 항목입니다
      return false;
    }
    ;
    ds_pchsInfo.setCellData(i, 'pchsMainMainPattern', acb_pchsMainMainPattern.getValue());
    ds_pchsInfo.setCellData(i, 'pchsMainMainRsn', ed_pchsMainMainRsn.getValue());

    // }
  }
  ;
  return true;
};

/**
 * @method 
 * @name f_setGridColumnPropEdit
 * @description 그리드 속성 Edit 수정
 * @param {object} grObj
 * @param {string[]} arrColumn
 * @param {boolean} value
 */
scwin.f_setGridColumnPropEdit = function (grObj, arrColumn, value) {
  for (let i in arrColumn) {
    if (arrColumn[i] == null) continue;
    grObj.setColumnReadOnly(arrColumn[i], value);
    let headerId = arrColumn[i] + 'Header';
    grObj.setHeaderColor(headerId, value ? '' : 'red');
  }
  ;
};

/**
 * @method 
 * @name f_openPopUpOdrNo
 * @description 오더번호검색 팝업창 띄우기
 */
scwin.f_openPopUpOdrNo = async function () {
  if (cbx_blNoYn.getValue() == 1) {
    scwin.f_openCommonPopUp(1, ed_odrNo.getValue(), '', 'F', 'F');
    return;
  }
  ;
  let args = ['']; //오더번호
  let url = '/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml';
  let options = {
    'type': 'browserPopup',
    'width': '1134px',
    'height': '532px',
    'popupName': '오더번호검색'
  };
  let rtnValues = await $c.win.openPopup($p, url, options, args);
  if (rtnValues != null) {
    ed_odrNo.setValue(rtnValues[0]); // 오더번호
  }
  ;
};

/**
 * @method 
 * @name f_openPopUpOdrNo_trans
 * @description 전환(삭제후 청구) 오더번호 팝업창 띄우기 
 */
scwin.f_openPopUpOdrNo_trans = async function () {
  let args = ['']; //오더번호
  let url = '/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml';
  let options = {
    'type': 'browserPopup',
    'width': '1134px',
    'height': '532px',
    'popupName': '오더번호검색'
  };
  let rtnValues = await $c.win.openPopup($p, url, options, args);
  if (rtnValues != null) {
    ed_trans_odrNo.setValue(rtnValues[0]); // 오더번호
  }
  ;
};

/**
 * @method 
 * @name f_openCommonPopUp
 * @description 팝업창 처리
 * @param {number} disGubun
 * @param {string} pCode
 * @param {string} pName
 * @param {string} pClose
 * @param {string} pAllSearch
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // B/L코드팝업(OC_HBLH)
      udc_gridComCode.setSelectId('retrieveBlNoList2');
      udc_gridComCode.cfCommonPopUp(rtnList => {
        if (rtnList != undefined) {
          ed_odrNo.setValue(rtnList[1]);
        }
        ;
      }, pCode.trim(), pName, pClose, null, null, null, null, '0' //0:매/출입, 1:매출, 2:매입
      , null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_exchangeRateSet
 * @description 환율적용일자 변경시 호출
 */
scwin.f_exchangeRateSet = async function () {
  let strCrcCd = ds_odrInfo.getCellData(0, 'crcCd');
  let strAdptExchRtDt = ica_adptExchRtDt.getValue();
  sbm_exchangeRate.action = '/cm.zz.RetrieveCommonPopupCMD.do?' + 'sysCd=CommonEBC' + '&queryId=retrieveExchangeRate' + '&param1=' + strCrcCd + '&param2=' + strAdptExchRtDt;
  await scwin.submitExcute(sbm_exchangeRate);
};

/**
 * @method 
 * @name f_changeAdptDt
 * @description 환율적용일자 변경시 호출
 */
scwin.f_changeAdptDt = function () {
  let odrData = ds_odrInfo.getRowJSON(0);
  let rowCnt = ds_sellInfo.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_sellInfo.getRowJSON(i);
    if (odrData['crcCd'] == rowData['crcCd'] && rowData['crcCd'] != 'KRW') {
      let nAdptExchRt = $c.num.parseFloat($p, odrData['adptExchRt'], 0);
      let nSellUpr = $c.num.parseFloat($p, rowData['sellUpr'], 0);
      let nSellVol = $c.num.parseFloat($p, rowData['sellVol'], 0);
      ds_sellInfo.setCellData(i, 'sellAmt', nAdptExchRt * nSellUpr * nSellVol);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_AmtSet
 * @description 끝전 처리
 * @param {object} dsObj
 * @param {number} row
 * @param {string} colid
 * @param {string} sellPchGubun
 */
scwin.f_AmtSet = async function (dsObj, row, colid, sellPchGubun) {
  let clntColumn = '';
  if (sellPchGubun == 'PCHS') {
    clntColumn = 'pchsClntNo';
    //itemColumn = 'sellItemCd';  //기존 매출항목이었는데
    itemColumn = 'selpchItemCd'; //매입항목으로 수정  ( 2007.05.15 수정 )
    goodsCdColumn = 'commCd';
    AmtColumn = 'pchsAmt';
    unitColumn = 'unitCd';
  } else {
    clntColumn = 'bilgClntNo';
    itemColumn = 'sellItemCd';
    goodsCdColumn = 'commCd';
    AmtColumn = 'sellAmt';
    unitColumn = 'sellUnitCd';
  }
  ;
  let rowData = dsObj.getRowJSON(row);

  //끝전처리 로직
  sbm_exchangeRate.action = '/ds.lo.comninfomgnt.RetrieveAmountVolumeManagementPatternCMD.do?' + 'clntNo=' + rowData[clntColumn] + '&selpchItemCd=' + rowData[itemColumn] + '&goodsCd=' + rowData[goodsCdColumn] + '&volAmtGubun=AMT' + '&resultAmt=' + rowData[AmtColumn] + '&weightUnitClsCd=' + rowData[unitColumn];
  await scwin.submitExcute(sbm_exchangeRate);
  if (ds_volAmtSub.getRowCount() > 0) {
    dsObj.setCellData(row, colid, ds_volAmtSub.getCellData(0, 'resultAmt'));
  }
  ;
};

/**
 * @method 
 * @name f_AmtSet
 * @description 엑셀출력
 */
scwin.f_GridToExcel = function () {
  let arrGrdNm = ['매출목록', '매입목록', '내부거래목록'];
  let arrGrdId = [gr_sellInfo, gr_pchsInfo, gr_intnlInfo];
  let tabIdx = tr_tab_center.getSelectedTabIndex();
  let excelName = arrGrdNm[tabIdx];
  let options = {
    sheetName: excelName,
    fileName: excelName + ".xlsx"
  };
  $c.data.downloadGridViewExcel($p, arrGrdId[tabIdx], options);
};

/**
 * @method 
 * @name f_retrieveAdjustmentInformation
 * @description 정산정보 조회
 * @param {object} objDs
 */
scwin.f_retrieveAdjustmentInformation = async function (objDs) {
  let focusedData = objDs.getRowJSON(objDs.getRowPosition());
  dma_retrieveAdjustmentInformation.setEmptyValue();
  dma_retrieveAdjustmentInformation.set('odrNo', focusedData['odrNo']);
  dma_retrieveAdjustmentInformation.set('certiNo', focusedData['certiNo']);

  //정산정보 조회
  await scwin.submitExcute(sbm_retrieveAdjustmentInformation);
};

/**
 * @method 
 * @name f_openPgm
 * @description 모선단위환율 수정
 */
scwin.f_openPgm = function () {
  let menuNm = '환율일괄조정';
  let url = '/ui/ds/sd/odrmgnt/odrreg/sd_402_01_27b.xml';
  let menuCode = 'sd_402_01_27b.xml';
  let paramObj = {
    'cvsslMgntNo': ed_cvsslMgntNo.getValue(),
    'impExpClsCd': acb_impExpDomesticClsCd.getValue()
  };
  let option = {
    menuType: 'retrieve'
  };
  $c.win.openMenu($p, menuNm, url, menuCode, paramObj, option);
};

/**
 * @method 
 * @name f_retrieveCtrtNo2
 * @description 청구처 조회해서 관리거래처 체크
 */
scwin.f_retrieveCtrtNo2 = async function () {
  dma_cndCtrtNo.setEmptyValue();

  //검색조건값 세팅
  dma_cndCtrtNo.set('ctrtClntNo', ed_bilgClntNo.getValue()); //계약거래처

  //조회
  await scwin.submitExcute(sbm_retrieveCtrtNo2);
};

/**
 * @method 
 * @name f_retrieveCtrtNo2
 * @description 실적 일괄생성된 거래처인지 체크
 * @param {string} tClient
 */
scwin.f_retrieveAutoCreateYn = function (tClient) {
  let rowCnt = ds_client.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (tClient == ds_client.getCellData(i, 'cd')) {
      return false;
    }
    ;
  }
  ;
  return true;
};

/**
 * @method 
 * @name f_rpaDPCT
 * @description 매출항목이 DPCT위험물장치료(0037)일 경우 
 * CNTR/품명 코드 그리드 상에 입력한 컨테이너번호에 해당되는 매출 로우 복사
 * (21.02.18 RPA개발로 인한 추가요청)
 * @param {number} index
 */
scwin.f_rpaDPCT = function (index) {
  let row = index;
  let odrData = ds_odrInfo.getRowJSON(0);
  let rowData = ds_sellInfo.getRowJSON(row);
  let focusedIdx = ds_sellInfo.getRowPosition();
  scwin.SELL_ADD_ROW = 1;
  ds_sellInfo.setCellData(row, 'addHang', '');
  let vatAmtVal;
  let nSellAmt = $c.num.parseFloat($p, rowData['sellAmt'], 0);
  if (rowData['taxnClsCd'] == '01') vatAmtVal = Math.round(nSellAmt * 0.1);else vatAmtVal = rowData['vatAmt'];
  let insertData = {
    'odrNo': odrData['odrNo'],
    'dcScCd': rowData['dcScCd'],
    'sellUpr': rowData['sellUpr'],
    'sellAmtFcrc': rowData['sellAmtFcrc'],
    'sellAmt': rowData['sellAmt'],
    'retroactSellUpr': rowData['retroactSellUpr'],
    'retroactSellAmtFcrc': rowData['retroactSellAmtFcrc'],
    'retroactSellAmt': rowData['retroactSellAmt'],
    'retroactVatAmt': rowData['retroactVatAmt'],
    'crcCd': rowData['crcCd'],
    'qtyUnitCd': rowData['qtyUnitCd'],
    'wtUnitCd': rowData['wtUnitCd'],
    'qty': rowData['qty'],
    'wt': rowData['wt'],
    'cbm': rowData['cbm'],
    'sellVol': rowData['sellVol'],
    'sellUnitCd': rowData['sellUnitCd'],
    'unitClsCd': rowData['unitClsCd'],
    'sellGoodsPatternCd': rowData['sellGoodsPatternCd'],
    'bilgLodeptCd': odrData['bilgLodeptCd'],
    'sellLodeptCd': odrData['sellLodeptCd'],
    'bizDomCd': rowData['bizDomCd'],
    'lineCd': odrData['lineCd'],
    'rsltsStdDt': rowData['rsltsStdDt'],
    'wrkStDt': rowData['wrkStDt'],
    'wrkStHh': rowData['wrkStHh'],
    'bilgIntendDt': rowData['bilgIntendDt'],
    'offsetOdrNo1': rowData['offsetOdrNo1'],
    'offsetSellSeq1': rowData['offsetSellSeq1'],
    'offsetOdrNo2': rowData['offsetOdrNo2'],
    'offsetSellSeq2': rowData['offsetSellSeq2'],
    'vehclNo': rowData['vehclNo'],
    'invoiceNo': rowData['invoiceNo'],
    'arrowDdCnt': rowData['arrowDdCnt'],
    'freeday': rowData['freeday'],
    'jdgAmt': rowData['jdgAmt'],
    'cstmdtAmt': rowData['cstmdtAmt'],
    'strDeg': rowData['strDeg'],
    'scRt': rowData['scRt'],
    'wrkEndDt': rowData['wrkEndDt'],
    'wrkEndHh': rowData['wrkEndHh'],
    'eqNrmCd': rowData['eqNrmCd'],
    'onWrkPlCd': odrData['dptWrkPlCd'],
    'offWrkPlCd': odrData['arvWrkPlCd'],
    'cntrSizCd': rowData['cntrSizCd'],
    'cntrTypCd': rowData['cntrTypCd'],
    'fullEmptyClsCd': rowData['fullEmptyClsCd'],
    'rmk': rowData['rmk'],
    'cargoShiftingRsltsSeq': rowData['cargoShiftingRsltsSeq'],
    'hveqUseRateSeq': rowData['hveqUseRateSeq'],
    'unsettledCloseYn': rowData['unsettledCloseYn'],
    'mrn': rowData['mrn'],
    'msn': rowData['msn'],
    'hsn': rowData['hsn'],
    'bookingNo': rowData['bookingNo'],
    'cntrCyRetrvDt': rowData['cntrCyRetrvDt'],
    'cntrShippingDt': rowData['cntrShippingDt'],
    'bilgTrgtYn': 1,
    //rowData['bilgTrgtYn']
    'commCd': rowData['commCd'],
    'ctrtClntNo': odrData['ctrtClntNo'],
    //다시 백
    'reqClntNo': odrData['reqClntNo'],
    //다시 
    'bilgClntNo': rowData['bilgClntNo'],
    'taxnClsCd': rowData['taxnClsCd'],
    'frvanQty': rowData['frvanQty'],
    'odrDt': odrData['odrDt'],
    //다시
    'vsslCd': odrData['vsslCd'],
    //다시
    'portcnt': odrData['portcnt'],
    //다시
    'tsVsslCd': odrData['tsVsslCd'],
    'tsPortcnt': odrData['tsPortcnt'],
    'sellYn': 1,
    //rowData['sellYn']
    'bilgTrgtOdrNo': rowData['bilgTrgtOdrNo'],
    'bilgTrgtSellSeq': rowData['bilgTrgtSellSeq'],
    'bilgTrgtRsltsDt': rowData['bilgTrgtRsltsDt'],
    'scDcsnYn': 1,
    //rowData['scDcsnYn']
    'onWrkPlCd': rowData['onWrkPlCd'],
    'onWrkPlNm': rowData['onWrkPlNm'],
    'offWrkPlNm': rowData['offWrkPlCd'],
    'offWrkPlNm': rowData['offWrkPlNm'],
    'dptDistrictCd': rowData['dptDistrictCd'],
    'arvDistrictCd': rowData['arvDistrictCd'],
    'dptDistrictNm': rowData['dptDistrictNm'],
    'arvDistrictNm': rowData['arvDistrictNm'],
    'impExpClsCd': odrData['impExpDomesticClsCd'],
    'pchsSeq': rowData['pchsSeq'],
    'sellLodeptCd': rowData['sellLodeptCd'],
    'sellLodeptNm': rowData['sellLodeptNm'],
    'ctrlYn': rowData['ctrlYn'],
    'prebilgCreatYn': rowData['prebilgCreatYn'],
    'sellWrkRsltsClsCd': rowData['sellWrkRsltsClsCd'],
    'shpCoDdCnt': rowData['shpCoDdCnt'],
    'rofDdCnt': rowData['rofDdCnt'],
    'arrvlportDtm': rowData['arrvlportDtm'],
    'delYn': rowData['delYn'],
    'regId': rowData['regId'],
    'regDtm': rowData['regDtm'],
    'modId': rowData['modId'],
    'modDtm': rowData['modDtm'],
    'sellCommNm': rowData['sellCommNm'],
    'bilgClntNm': rowData['bilgClntNm'],
    'bilgLodeptNm': rowData['bilgLodeptNm'],
    'bizDomNm': rowData['bizDomNm'],
    'dcScNm': rowData['dcScNm'],
    'commSeq': rowData['commSeq'],
    'vatAmt': vatAmtVal,
    'dcsnClsCd': '1',
    'addYn': 1
  };
  ds_sellInfo.setRowJSON(focusedIdx, insertData, true);
  scwin.f_setSellInfoByDcsnClsCd();
  scwin.SELL_ADD_ROW = 0;
};

/**
 * @method 
 * @name addYnFormat
 * @description 행추가 format
 * @param {string} data
 */
scwin.addYnFormat = function (data) {
  if (data == '1') return 'Y';
  return '';
};

/**
 * @event 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * @method 
 * @name moveRowPosition 
 * @description 포지션 이동 시 동작 제어
 */
scwin.moveRowPosition = function (rowIndex, targetGrid) {
  // 첫번째 visible 되어있는 컬럼 확인
  const totalCol = targetGrid.getTotalCol();
  let firstVisibleColIdx = 0;
  for (let i = 0; i < totalCol; i++) {
    if (targetGrid.getColumnVisible(i)) {
      firstVisibleColIdx = i;
      break;
    }
    ;
  }
  ;

  // 기존 포커스 된 컬럼 확인
  const focusedColIdx = targetGrid.getFocusedColumnIndex() ?? -1;
  const newColIdx = focusedColIdx < 0 ? firstVisibleColIdx : focusedColIdx;
  const newRowIdx = rowIndex < 0 ? 0 : rowIndex;

  // 실제 포커스
  targetGrid.setFocusedCell(newRowIdx, newColIdx);
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
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieveAdjustmentInformation:
      await scwin.sbm_retrieveAdjustmentInformation_submitdone(e);
      break;
    case sbm_retrieve:
      await scwin.sbm_retrieve_submitdone(e);
      break;
    case sbm_saveSellInfo:
      await scwin.sbm_saveSellInfo_submitdone(e);
      break;
    case sbm_saveOdrInfo:
      await scwin.sbm_saveOdrInfo_submitdone(e);
      break;
    case sbm_exchangeRate:
      await scwin.sbm_exchangeRate_submitdone(e);
      break;
    case sbm_retrieveCtrtNo2:
      await scwin.sbm_retrieveCtrtNo2_submitdone(e);
      break;
    case sbm_savePchsInfo:
      await scwin.sbm_savePchsInfo_submitdone(e);
      break;
    case sbm_saveIntnlInfo:
      await scwin.sbm_saveIntnlInfo_submitdone(e);
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name sbm_retrieve_submitdone 
 * @description 조회 : 통합매출, 통합매입, 내부거래 내역 조회 Transation 정상
 * @asis for=tr_retrieve event=OnFail()
 * @asis for=tr_retrieve event=OnSuccess()
 */
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) {
    scwin.f_set('INIT');
    return;
  }
  ;

  // 정렬 옵션 적용
  ds_profitLossInfo.sort('lobranNm', 0);

  // 그리드 초기 포커스 설정
  gr_pchsInfo.setFocusedCell(0, 0);
  gr_profitLossInfo1.setFocusedCell(0, 2);
  gr_profitLossInfo2.setFocusedCell(0, 1);
  gr_profitLossInfo3.setFocusedCell(0, 1);
  gr_intnlInfo.setFocusedCell(0, 0);

  // 반환된 리스트 데이터를 datamap으로 복사
  dma_odrInfo.setJSON(ds_odrInfo.getRowJSON(0));

  // 변경값 초기화
  ds_sellInfo.modifyAllStatus('R');
  dma_odrInfo.reform();
  if (ds_odrInfo.getRowCount() > 0) {
    scwin.f_set('RETRIEVE');
    lay_odrKndNm.setValue(ds_odrInfo.getCellData(0, 'odrKndNm'));
    if (ds_sellInfo.getRowCount() > 0) {
      let rowData = ds_sellInfo.getRowJSON(0);
      dma_retrieveAdjustmentInformation.setEmptyValue();
      dma_retrieveAdjustmentInformation.set('odrNo', rowData['odrNo']);
      dma_retrieveAdjustmentInformation.set('certiNo', rowData['certiNo']);

      //정산정보 조회
      await scwin.submitExcute(sbm_retrieveAdjustmentInformation);
    }
    ;
  } else {
    if (cbx_blNoYn.getValue() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_046, ['오더번호']); //존재하지 않는 @입니다.
      scwin.f_set('INIT');
      ed_odrNo.focus();
    }
    ;
  }
  ;

  // 그리드 총 건수 표시
  let rowCnt = ds_sellInfo.getRowCount();
  let rowCnt2 = ds_pchsInfo.getRowCount();
  let rowCnt3 = ds_intnlInfo.getRowCount();
  let rowCnt4 = ds_profitLossInfo.getRowCount();
  sellTotalRows.setValue(rowCnt);
  sellTotalRows2.setValue(rowCnt2);
  sellTotalRows3.setValue(rowCnt3);
  sellTotalRows4.setValue(rowCnt4);
  ed_trans_odrNo.setValue('');
  acb_sellMainMainPattern1.setValue('');
  ed_sellMainMainRsn.setValue('');
  await scwin.ds_odrInfo_OnLoadCompleted();
  await scwin.ds_sellInfo_OnLoadCompleted();
  ds_sellInfo.modifyAllStatus('R');
};

/**
 * @event 
 * @name ds_odrInfo_OnLoadCompleted 
 * @description 오더기본정보를 조회한 후 환율조회
 */
scwin.ds_odrInfo_OnLoadCompleted = async function () {
  // for=ds_odrInfo event=OnLoadCompleted(rowcnt)
  if (ds_odrInfo.getRowCount() == 0) return;
  if (ds_odrInfo.getCellData(0, 'cvsslMgntNo') == '') {
    $c.gus.cfDisableObjects($p, [btn_openPgm]);
  }
  ;
};

/**
 * @event 
 * @name ds_sellInfo_OnLoadCompleted 
 * @description 매출정보 조회 완료
 */
scwin.ds_sellInfo_OnLoadCompleted = function () {
  let options = {
    sortIndex: 'sellItemCd sellGoodsPatternCd sellCommNo',
    sortOrder: '1 1 1'
  };
  ds_sellInfo.multisort(options);
  ds_sellInfo.setJSON(ds_sellInfo.getAllJSON(), false);
  gr_sellInfo.setFocusedCell(0, 1);
  let rowCnt = ds_sellInfo.getRowCount();
  let dcsnClsCdCnt = 0;
  for (let i = 0; i < rowCnt; i++) {
    if (ds_sellInfo.getCellData(i, 'dcsnClsCd') >= '2') {
      dcsnClsCdCnt++;
    }
    ;
  }
  ;
  if (dcsnClsCdCnt > 0) {
    $c.gus.cfDisableObjects($p, [ed_adptExchRt, ica_adptExchRtDt]);
    scwin.dcsnClsCdCntChk = 1;
  } else {
    scwin.dcsnClsCdCntChk = 0;
  }
};

/**
 * @event 
 * @name sbm_saveOdrInfo_submit 
 * @description 저장 : 오더기본정보 저장 Transation 요청 전
 */
scwin.sbm_saveOdrInfo_submit = function (e) {
  const odrInfoData = dma_odrInfo.getJSON();
  ds_odrInfo.setRowJSON(0, odrInfoData, true);
};

/**
 * @event 
 * @name sbm_saveOdrInfo_submitdone 
 * @description 저장 : 오더기본정보 저장 Transation 정상
 */
scwin.sbm_saveOdrInfo_submitdone = async function (e) {
  // for=tr_saveOdrInfo event=OnFail()
  if (e.responseJSON.resultDataSet[0].Code == -1) {
    ds_odrInfo.removeAll();
    return;
  }
  ;

  // for=tr_saveOdrInfo event=OnSuccess()
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, 'odrNo'));
  if (ds_sellInfo.getModifiedIndex() > 0) {
    await scwin.submitExcute(sbm_saveSellInfo);
  }
  ;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_retrieve();
};

/**
 * @event 
 * @name sbm_saveSellInfo_submitdone 
 * @description 저장 : 매출정보 저장 Transation 정상
 */
scwin.sbm_saveSellInfo_submitdone = async function (e) {
  // for=tr_saveOdrInfo event=OnFail()
  if (e.responseJSON.resultDataSet[0].Code == -1) return;

  // for=tr_saveOdrInfo event=OnSuccess()
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, 'odrNo'));
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_retrieve();
};

/**
 * @event 
 * @name sbm_retrieveAdjustmentInformation_submitdone 
 * @description 조회 : 통합매입 정산정보조회 Transation 정상
 */
scwin.sbm_retrieveAdjustmentInformation_submitdone = function (e) {
  dma_adjustmentInformation.setJSON(ds_adjustmentInformation.getRowJSON(0));
};

/**
 * @event 
 * @name ds_adjustmentInformation_onremoverow 
 * @description 조회 : 통합매입 정산정보조회 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.ds_adjustmentInformation_onremoverow = function (info) {
  const exsitDma = $p.getComponentById('dma_adjustmentInformation');
  if (exsitDma == undefined) return;
  dma_adjustmentInformation.setEmptyValue();
};

/**
 * @event 
 * @name sbm_savePchsInfo_submitdone 
 * @description 저장 : 통합매입정보 저장 Transation 정상
 */
scwin.sbm_savePchsInfo_submitdone = async function (e) {
  // for=tr_savePchsInfo event=OnFail()
  if (e.responseJSON.resultDataSet[0].Code == -1) return;

  // for=tr_savePchsInfo event=OnSuccess()
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.

  // todo - asis에선 재조회 동작이 일어나 수정
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, 'odrNo'));
  await scwin.f_retrieve();
  tr_tab_center.setSelectedTabIndex(1);
};

/**
 * @event 
 * @name sbm_saveIntnlInfo_submitdone 
 * @description 저장 : 통합매입정보 저장 Transation 정상
 */
scwin.sbm_saveIntnlInfo_submitdone = async function (e) {
  // for=tr_saveIntnlInfo event=OnFail()
  if (e.responseJSON.resultDataSet[0].Code == -1) return;

  // for=tr_saveIntnlInfo event=OnSuccess()
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.

  // todo - asis에선 재조회 동작이 일어나 수정
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, 'odrNo'));
  await scwin.f_retrieve();
  tr_tab_center.setSelectedTabIndex(2);
};

/**
 * @event 
 * @name sbm_retrieveCtrtNo2_submitdone 
 * @description 저장 : 통합매입정보 저장 Transation 정상
 */
scwin.sbm_retrieveCtrtNo2_submitdone = async function (e) {
  // for=tr_retrieveCtrtNo2 event=OnFail()
  if (e.responseJSON.resultDataSet[0].Code == -1) return;

  // for=tr_retrieveCtrtNo2 event=OnSuccess()
  let ctrtNoRows = ds_ctrtNo2.getRowCount();
  if (ctrtNoRows > 0) {
    //계약번호가 서로 다른 것이 있는 경우, 선택을 default로 보여주기 위한 process
    let sameYn = 'N';
    for (i = 0; i < ctrtNoRows; i++) {
      if (ds_ctrtNo2.getCellData(i, 'mgntTrgtClntYn') == 1) {
        sameYn = 'Y';
        break;
      }
      ;
    }
    ;
    if (sameYn == 'Y') {
      await $c.gus.cfAlertMsg($p, '청구처가 불량거래처로 관리된 거래처입니다.');
      ed_bilgClntNo.setValue('');
      txt_bilgClntNm.setValue('');
      ed_bilgClntNo.focus();
    } else {
      let sellRows = ds_sellInfo.getRowCount();

      //2021.07.22 채권팀 요청 사항 : 배차지시 (실적)이 없는 경우 청구처 변경 불가
      if (sellRows == '0') {
        await $c.gus.cfAlertMsg($p, '매출입 정보가 없습니다. 청구처 변경이 불가합니다.');
        ed_bilgClntNo.setValue('');
        txt_bilgClntNm.setValue('');
      } else {
        await $c.gus.cfAlertMsg($p, '통합매출/입의 청구거래처가 일괄 수정됩니다.');
      }
      ;
    }
    ;
  } else {
    await $c.gus.cfAlertMsg($p, '청구처가  관리대상 거래처 입니다.');
    ed_bilgClntNo.setValue('');
    txt_bilgClntNm.setValue('');
  }
  ;
};

/**
 * @event 
 * @name sbm_exchangeRate_submitdone 
 * @description 비율 콤보 조회 정상
 */
scwin.sbm_exchangeRate_submitdone = function (e) {
  // for=ds_exchangeRate event=OnLoadCompleted(rowcnt)
  scwin.ds_exchangeRate_OnLoadCompleted();
};

/**
 * @event 
 * @name ds_exchangeRate_OnLoadCompleted 
 * @description 
 */
scwin.ds_exchangeRate_OnLoadCompleted = function () {
  if (ds_odrInfo.getRowCount() == 0) return;
  let keyID = 'adptExchRt';
  dma_odrInfo.set(keyID, ds_exchangeRate.getCellData(0, 'col3'));
  dma_odrInfo.modifyKeyStatus(keyID, false);
  scwin.f_changeAdptDt();
};

/**
 * @event 
 * @name ds_odrInfo_onrowpositionchange 
 * @description 행의 인덱스가 변경된 경우에 발생
 */
scwin.ds_odrInfo_onrowpositionchange = function (info) {
  // for=ds_odrInfo event=OnRowPosChanged(row)
  let colArr = ['reqClntNo', 'reqClntNm', 'bilgClntNo', 'bilgClntNm', 'lineCd', 'lineNm', 'shpCoClntNm', 'cvsslMgntNo', 'vsslCd', 'portcnt', 'portCd', 'sellLodeptCd', 'sellLodeptNm', 'bilgLodeptCd', 'bilgLodeptNm'];
  $c.gus.cfPrepareHidVal($p, ds_odrInfo, row, colArr);
};

/**
 * @event 
 * @name ds_sellInfo_onrowpositionchange 
 * @description 행의 인덱스가 변경된 경우에 발생
 */
scwin.ds_sellInfo_onrowpositionchange = function (info) {
  // for=ds_sellInfo event=OnRowPosChanged(row)
  if (ds_sellInfo.getRowCount() > 0) scwin.f_setSellInfoByDcsnClsCd();
};

/**
 * @event 
 * @name ds_sellInfo_oncelldatachange 
 * @description 하나의 셀에 대한 값이 변경된 경우 발생
 */
scwin.ds_sellInfo_oncelldatachange = async function (info) {
  // for=ds_sellInfo event=OnColumnChanged(row,colid)
  if (scwin.SELL_ADD_ROW == 1) return;
  let colID = info.colID;
  let row = info.rowIndex;
  let rowData = this.getRowJSON(row);
  let nNewValue = $c.num.parseFloat($p, info.newValue, 0);
  let nSellUpr = $c.num.parseFloat($p, rowData['sellUpr'], 0);
  let nSellVol = $c.num.parseFloat($p, rowData['sellVol'], 0);
  let nCol3 = $c.num.parseFloat($p, ds_exchangeRate.getCellData(0, 'col3'), 0);
  switch (colID) {
    case 'sellAmt':
      if (rowData['taxnClsCd'] == '01') {
        ds_sellInfo.setCellData(row, 'vatAmt', Math.round(nNewValue * 0.1));
      }
      ;
      break;
    case 'sellAmtFcrc':
      if (rowData['crcCd'] == 'KRW') return;
      let odrInfoAdptExchrt = ds_odrInfo.getCellData(0, 'adptExchRt');
      if (odrInfoAdptExchrt != '') {
        let sellAmt = nNewValue * $c.num.parseFloat($p, odrInfoAdptExchrt, 0);
        ds_sellInfo.setCellData(row, 'sellAmt', sellAmt);
      } else if (ica_adptExchRtDt.getValue() != '') {
        let strCrcCd = rowData['crcCd'];
        let strAdptExchRtDt = ica_adptExchRtDt.getValue();
        sbm_exchangeRate.action = '/cm.zz.RetrieveCommonPopupCMD.do?' + 'sysCd=CommonEBC' + '&queryId=retrieveExchangeRate' + '&param1=' + strCrcCd + '&param2=' + strAdptExchRtDt;
        await scwin.submitExcute(sbm_exchangeRate);
        let sellAmt = nNewValue * nCol3;
        ds_sellInfo.setCellData(row, 'sellAmt', sellAmt);
      }
      ;
      break;
    case 'sellVol':
      if (rowData['crcCd'] == 'KRW') {
        ds_sellInfo.setCellData(row, 'sellAmt', info.newValue * nSellUpr);
        scwin.f_AmtSet(ds_sellInfo, row, 'sellAmt', 'SELL');
        return;
      }
      ;
      ds_sellInfo.setCellData(row, 'sellAmtFcrc', info.newValue * nSellUpr);
      break;
    case 'sellUpr':
      if (rowData['crcCd'] == 'KRW') {
        ds_sellInfo.setCellData(row, 'sellAmt', info.newValue * nSellVol);
        scwin.f_AmtSet(ds_sellInfo, row, 'sellAmt', 'SELL');
        return;
      }
      ;
      ds_sellInfo.setCellData(row, 'sellAmtFcrc', info.newValue * nSellVol);
      break;
    case 'crcCd':
      if (rowData['crcCd'] == 'KRW') {
        ds_sellInfo.setCellData(row, 'sellAmtFcrc', 0);
        ds_sellInfo.setCellData(row, 'sellAmt', nSellVol * nSellUpr);
        scwin.f_AmtSet(ds_sellInfo, row, 'sellAmt', 'SELL');
        return;
      }
      ;
      let nSellAmtFcrc = nSellUpr * nSellVol;
      let nOdrAdptExchRt = $c.num.parseFloat($p, ds_odrInfo.getCellData(0, 'adptExchRt'), 0);
      ds_sellInfo.setCellData(row, 'sellAmtFcrc', nSellAmtFcrc);
      if (ds_odrInfo.getCellData(0, 'adptExchRt') != '') {
        let sellAmt = nSellAmtFcrc * nOdrAdptExchRt;
        ds_sellInfo.setCellData(row, 'sellAmt', sellAmt);
      } else if (ica_adptExchRtDt.getValue() != '') {
        let strCrcCd = rowData['crcCd'];
        let strAdptExchRtDt = ica_adptExchRtDt.getValue();
        sbm_exchangeRate.action = '/cm.zz.RetrieveCommonPopupCMD.do?' + 'sysCd=CommonEBC' + '&queryId=retrieveExchangeRate' + '&param1=' + strCrcCd + '&param2=' + strAdptExchRtDt;
        await scwin.submitExcute(sbm_exchangeRate);
        let sellAmt = nSellAmtFcrc * nCol3;
        ds_sellInfo.setCellData(row, 'sellAmt', sellAmt);
      }
      ;
      break;
    case 'bilgLodeptNm':
      // 청구부서
      if (rowData['bilgLodeptCd'] == '4A6') {
        //청구부서가 인천북항인 경우 매출부서 동일하게기본셋팅 적용
        ds_sellInfo.setCellData(row, 'sellLodeptCd', rowData['bilgLodeptCd']);
        ds_sellInfo.setCellData(row, 'sellLodeptNm', rowData['bilgLodeptNm']);
      }
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name ds_pchsInfo_onrowpositionchange 
 * @description 행의 인덱스가 변경된 경우에 발생
 */
scwin.ds_pchsInfo_onrowpositionchange = function (info) {
  // for=ds_pchsInfo event=OnRowPosChanged(row)
  if (info.newRowIndex > -1) scwin.f_setPchsInfoByDcsnClsCd();
};

/**
 * @event 
 * @name ds_pchsInfo_oncelldatachange 
 * @description 하나의 셀에 대한 값이 변경된 경우 발생
 */
scwin.ds_pchsInfo_oncelldatachange = function (info) {
  // for=ds_pchsInfo event=OnColumnChanged(row,colid)
  // 매입 데이타셋 데이타 변경
  let colID = info.colID;
  let row = info.rowIndex;
  let rowData = this.getRowJSON(row);
  let nNewValue = $c.num.parseFloat($p, info.newValue, 0);
  switch (colID) {
    case 'pchsAmt':
      ds_pchsInfo.setCellData(row, 'vat', Math.round(info.newValue * 0.1));
      break;
    case 'vol':
      ds_pchsInfo.setCellData(row, 'pchsAmt', nNewValue * $c.num.parseFloat($p, rowData['pchsUpr'], 0));
      scwin.f_AmtSet(ds_pchsInfo, row, 'pchsAmt', 'PCHS');
      break;
    case 'pchsUpr':
      ds_pchsInfo.setCellData(row, 'pchsAmt', nNewValue * $c.num.parseFloat($p, rowData['vol'], 0));
      scwin.f_AmtSet(ds_pchsInfo, row, 'pchsAmt', 'PCHS');
      break;
    case 'pchsSeq':
      if (info.newValue == "") {
        ds_pchsInfo.setCellData(row, colID, 0);
      }
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name ds_intnlInfo_oncelldatachange 
 * @description 적용일 키보드 또는 마우스 조작을 통해 값이 변경된 경우 발생.
 */
scwin.ds_intnlInfo_oncelldatachange = function (info) {
  // for=ds_intnlInfo event=OnColumnChanged(row,colid)
  let colID = info.colID;
  let row = info.rowIndex;
  let rowData = this.getRowJSON(row);
  let nNewValue = $c.num.parseFloat($p, info.newValue, 0);
  switch (colID) {
    case 'vol':
      ds_intnlInfo.setCellData(row, 'sellAmt', nNewValue * $c.num.parseFloat($p, rowData['internalUpr']), 0);
      break;
    case 'internalUpr':
      ds_intnlInfo.setCellData(row, 'sellAmt', nNewValue * $c.num.parseFloat($p, rowData['vol'], 0));
      break;
    default:
      break;
  }
  ;
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_sellInfo_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 */
scwin.gr_sellInfo_oneditend = function (rowIndex, columnIndex, value) {
  // for=gr_sellInfo event=OnCloseUp(row,colid)
  // for=gr_sellInfo event=OnExit(row,colid,olddata)
  let gridDlt = this._dataList;
  let rowData = gridDlt.getRowJSON(rowIndex);
  let colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'sellGoodsPatternCd':
      let colArray = ['sellCommNo', 'sellCommNm', 'commCd'];
      switch (value) {
        case '02':
          // 품명단위
          this.setColumnReadOnly('sellCommNo', true);
          gridDlt.setCellData(rowIndex, 'sellCommNo', '');
          scwin.f_openPopUpCommInfo(gridDlt, colID, colArray); //품명팝업띄우기
          break;
        case '03':
          // 장비단위
          this.setColumnReadOnly('sellCommNo', true);
          scwin.f_openPopUpKndVehcl(gridDlt, colID, colArray); //장비팝업띄우기
          break;
        default:
          this.setColumnReadOnly('sellCommNo', false);
          gridDlt.setCellData(rowIndex, 'sellCommNo', '');
          gridDlt.setCellData(rowIndex, 'sellCommNm', '');
          break;
      }
      ;
    case 'sellUnitCd':
      scwin.f_AmtSet(gridDlt, rowIndex, 'sellAmt', 'SELL');
      break;
    case 'taxnClsCd':
      let retVatAmt;
      let nSellAmt = $c.num.parseFloat($p, rowData['sellAmt'], 0);
      if (['01', '04'].includes(value)) retVatAmt = Math.round(nSellAmt * 0.1);else retVatAmt = 0; //gridDlt.OrgNameValue(gridDlt.RowPosition, 'vatAmt');

      gridDlt.setCellData(rowIndex, 'vatAmt', retVatAmt);
      break;
    case 'sellCommNo':
      //품명 코드	
      //21.02.18 RPA개발로 인한 추가요청 : 매출항목이 DPCT위험물장치료(0037)일 경우 입력한 컨테이너번호에 해당되는 매출 로우 복사
      if (scwin.userId == '811160' && rowData['addYn'] == 1 && rowData['sellItemCd'] == '0037') {
        let columnRow = rowIndex;
        let columnRowOri = columnRow;
        let rowCnt = ds_sellInfo.getRowCount();
        for (let i = columnRow; i < rowCnt; i++) {
          //기본 매출항목인 하선지경유TSCHG(0164)가 아니면 그 다음 row값 검색
          if (rowData['sellItemCd'] != '0164') {
            //루프 다돌았는데 TSCHG가 없으면 맨 처음 로우값으로 재설정
            if (i == ds_sellInfo.getRowCount()) {
              columnRow = columnRowOri;
              break;
            } else {
              columnRow = columnRow + 1;
              continue;
            }
            ;
          }
          ;
          if (ds_sellInfo.getCellData(columnRow, 'sellItemCd') == '0164') {
            break;
          }
          ;
        }
        ;
        scwin.f_rpaDPCT(columnRow);
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
 * @name gr_sellInfo_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 */
scwin.gr_sellInfo_onafteredit = function (rowIndex, columnIndex, value) {
  let gridDlt = this._dataList;
  let colID = this.getColumnID(columnIndex);
  let oldData = gridDlt.getOriginalCellData(rowIndex, colID);
  if (oldData == value) return;
  switch (colID) {
    case 'commSeq':
    case 'sellVol':
    case 'sellUpr':
    case 'sellAmtFcrc':
    case 'sellAmt':
    case 'vatAmt':
    case 'msn':
    case 'hsn':
    case 'qty':
    case 'wt':
    case 'cbm':
    case 'frvanQty':
      if (value == '') gridDlt.setCellData(rowIndex, colID, 0);
      break;

    // 팝업관련
    case 'sellItemNm':
      //매출항목
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'sellItemCd', colID, oldData, 3, 'T');
      break;
    case 'bilgClntNm':
      //청구처
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'bilgClntNo', colID, oldData, 1, 'T');
      break;
    case 'bilgLodeptNm':
      // 청구부서
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'bilgLodeptCd', colID, oldData, 2, 'T');
      break;
    case 'bizDomNm':
      //사업영역
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'bizDomCd', colID, oldData, 4, 'T');
      break;
    case 'lineCd':
      //라인코드
      let lineCd = value;
      if (lineCd != '' && lineCd != oldData) {
        scwin.f_openPopUpGridLineCd('T');
      }
      ;
      break;
    case 'sellLodeptNm':
      //매출부서
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'sellLodeptCd', colID, oldData, 11, 'T');
      break;
    case 'onWrkPlNm':
      //출발작업장
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'onWrkPlCd', colID, oldData, 12, 'T');
      break;
    case 'offWrkPlNm':
      //도착작업장
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'offWrkPlCd', colID, oldData, 12, 'T');
      break;
  }
};

/**
 * @event 
 * @name gr_pchsInfo_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 */
scwin.gr_pchsInfo_oneditend = function (rowIndex, columnIndex, value) {
  // for=gr_pchsInfo event=OnCloseUp(row,colid)
  // for=gr_pchsInfo event=OnExit(row,colid,olddata)

  let colID = this.getColumnID(columnIndex);
  let gridDlt = this._dataList;
  switch (colID) {
    case 'pchsGoodsPatternCd':
      let colArray = ['pchsCommNo', 'pchsCommNm', 'commCd'];
      switch (value) {
        case '02':
          // 품명단위
          this.setColumnReadOnly('pchsCommNo', true);
          scwin.f_openPopUpCommInfo(gridDlt, colID, colArray); //품명팝업띄우기
          break;
        case '03':
          // 장비단위
          this.setColumnReadOnly('pchsCommNo', true);
          scwin.f_openPopUpCommInfo(gridDlt, colID, colArray); //품명팝업띄우기
          break;
        default:
          break;
      }
      ;
      break;
    case 'unitCd':
      scwin.f_AmtSet(gridDlt, rowIndex, 'pchsAmt', 'PCHS');
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_pchsInfo_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 */
scwin.gr_pchsInfo_onafteredit = function (rowIndex, columnIndex, value) {
  let colID = this.getColumnID(columnIndex);
  let gridDlt = this._dataList;
  const olddata = gridDlt.getOriginalCellData(rowIndex, colID);
  if (olddata == value) return;
  switch (colID) {
    case 'selpchItemNm':
      // 매입항목
      scwin.f_openPopUpGrid(gridDlt, 'selpchItemCd', colID, 5, 'F');
      break;
    case 'dcScNm':
      //할인할증
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'dcScCd', colID, olddata, 6, 'T');
      break;
    case 'bizDomNm':
      //사업영역
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'bizDomCd', colID, olddata, 94, 'T');
      break;
    case 'pchsClntNm':
      //매입거래처
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'pchsClntNo', colID, olddata, 8, 'T');
      break;
    case 'copCoClntNm':
      //협력업체
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'copCoClntNo', colID, olddata, 7, 'T');
      break;
    case 'pchsDeptNm':
      //부서
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'pchsDeptCd', colID, olddata, 99, 'T');
      break;
    case 'commNm':
      //품명
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'commCd', colID, olddata, 10, 'T');
      break;
    case 'dptWrkPlNm':
      //출발작업장
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'dptWrkPlCd', colID, olddata, 12, 'T');
      break;
    case 'arvWrkPlNm':
      //도착작업장
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'arvWrkPlCd', colID, olddata, 12, 'T');
      break;
    case 'vehclNo':
      //차량번호
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'vehclNo', colID, olddata, 15, 'F');
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name gr_sellInfo_oncellclick 
 * @description 셀이 클릭된 경우 발생
 */
scwin.gr_sellInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  // for=gr_sellInfo event=OnClick(row,colid)
  // todo - && ds_sellInfo.RowLevel(i) 생략 확인필요
  let gridDlt = gr_sellInfo._dataList;
  let focusedData = gridDlt.getRowJSON(gridDlt.getRowPosition());
  if (rowIndex > -1 && ds_sellInfo.getRowStatusValue(rowIndex) == 0) {
    scwin.f_retrieveAdjustmentInformation(gridDlt);
  }
  ;
  switch (columnId) {
    case 'sellCommNo':
      // CNTR/품명 : 코드	
      //21.02.18 RPA개발로 인한 추가요청 : 매출항목이 DPCT위험물장치료(0037)일 경우 CNTR/품명 내의 코드 수정할 수 있도록
      if (scwin.userId == '811160' && focusedData['addYn'] == 1 && focusedData['sellItemCd'] == '0037') {
        this.setColumnReadOnly('sellCommNo', true);
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
 * @name gr_sellInfo_ontextimageclick 
 * @description inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 */
scwin.gr_sellInfo_ontextimageclick = async function (rowIndex, columnIndex) {
  //  for=gr_sellInfo event=OnPopup(row,colid,data)
  let colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'bilgClntNm':
      //청구처
      await scwin.f_openPopUpGrid(ds_sellInfo, 'bilgClntNo', colID, 1, 'F');
      break;
    case 'bilgLodeptNm':
      //청구부서
      await scwin.f_openPopUpGrid(ds_sellInfo, 'bilgLodeptCd', colID, 2, 'F');
      break;
    case 'sellItemNm':
      //매출항목
      await scwin.f_openPopUpGrid(ds_sellInfo, 'sellItemCd', colID, 3, 'F');
      break;
    case 'bizDomNm':
      //사업영역
      await scwin.f_openPopUpGrid(ds_sellInfo, 'bizDomCd', colID, 4, 'F');
      break;
    case 'lineCd':
      //라인코드
      scwin.f_openPopUpGridLineCd('F');
      break;
    case 'sellLodeptNm':
      //매출부서
      await scwin.f_openPopUpGrid(ds_sellInfo, 'sellLodeptCd', colID, 11, 'F');
      break;
    case 'onWrkPlNm':
      //출발작업장
      await scwin.f_openPopUpGrid(ds_sellInfo, 'onWrkPlCd', colID, 12, 'F');
      break;
    case 'offWrkPlNm':
      //도착작업장
      await scwin.f_openPopUpGrid(ds_sellInfo, 'offWrkPlCd', colID, 12, 'F');
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_pchsInfo_oncellclick 
 * @description 셀이 클릭된 경우 발생
 */
scwin.gr_pchsInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  // for=gr_pchsInfo event=OnClick(row,colid)
  scwin.f_retrieveAdjustmentInformation(gr_pchsInfo._dataList);
};

/**
 * @event 
 * @name gr_pchsInfo_ontextimageclick 
 * @description inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 */
scwin.gr_pchsInfo_ontextimageclick = async function (rowIndex, columnIndex) {
  //  for=gr_pchsInfo event=OnPopup(row,colid,data)
  let colID = this.getColumnID(columnIndex);
  let gridDlt = this._dataList;
  switch (colID) {
    case 'selpchItemNm':
      //매입항목
      await scwin.f_openPopUpGrid(gridDlt, 'selpchItemCd', colID, 5, 'F');
      break;
    case 'dcScNm':
      //할인할증
      await scwin.f_openPopUpGrid(gridDlt, 'dcScCd', colID, 6, 'F');
      break;
    case 'bizDomNm':
      //사업영역
      await scwin.f_openPopUpGrid(gridDlt, 'bizDomCd', colID, 94, 'F');
      break;
    case 'rsltsStdDt':
      //실적일
      cfOpenCalendar(this, rowIndex, colID);
      break;
    case 'pchsClntNm':
      //매입거래처
      await scwin.f_openPopUpGrid(gridDlt, 'pchsClntNo', colID, 8, 'F');
      break;
    case 'copCoClntNm':
      //협력업체
      await scwin.f_openPopUpGrid(gridDlt, 'copCoClntNo', colID, 7, 'F');
      break;
    case 'pchsDeptNm':
      //부서
      await scwin.f_openPopUpGrid(gridDlt, 'pchsDeptCd', colID, 99, 'F');
      break;
    case 'commNm':
      //품명
      await scwin.f_openPopUpGrid(gridDlt, 'commCd', colID, 10, 'F');
      break;
    case 'dptWrkPlNm':
      //출발작업장
      await scwin.f_openPopUpGrid(gridDlt, 'dptWrkPlCd', colID, 12, 'F');
      break;
    case 'arvWrkPlNm':
      //도착작업장
      await scwin.f_openPopUpGrid(gridDlt, 'arvWrkPlCd', colID, 12, 'F');
      break;
    case 'vehclNo':
      //차량번호
      await scwin.f_openPopUpGrid(gridDlt, 'vehclNo', colID, 15, 'F');
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_intnlInfo_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @asis for=gr_intnlInfo event=OnCloseUp(row,colid)
 */
scwin.gr_intnlInfo_oneditend = async function (rowIndex, columnIndex, value) {
  let colID = this.getColumnID(columnIndex);
  let gridDlt = this._dataList;
  let rowData = gridDlt.getRowJSON(rowIndex);
  switch (colID) {
    case 'internalGoodsPatternCd':
      let colArray = ['internalCommNo', 'commNm', 'commCd'];
      switch (value) {
        case '02':
          // 품명단위
          this.setColumnReadOnly('internalCommNo', true);
          scwin.f_openPopUpCommInfo(gridDlt, colID, colArray); //품명팝업띄우기
          break;
        case '03':
          // 장비단위
          this.setColumnReadOnly('internalCommNo', true);
          scwin.f_openPopUpKndVehcl(gridDlt, colID, colArray); //장비팝업띄우기
          break;
        default:
          this.setColumnReadOnly('internalCommNo', false);
          gridDlt.setCellData(rowIndex, 'internalCommNo', '');
          gridDlt.setCellData(rowIndex, 'commNm', '');
          break;
      }
      ;
      break;
    case 'taxnClsCd':
      let vatAmtVal = 0;
      let nSellAmt = $c.num.parseFloat($p, rowData['sellAmt'], 0);
      if (rowData['taxnClsCd'] == '01') vatAmtVal = Math.round(nSellAmt * 0.1);
      ds_sellInfo.setCellData(rowIndex, 'vatAmt', vatAmtVal);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_intnlInfo_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 * @asis for=gr_intnlInfo event=OnExit(row,colid,olddata)
 */
scwin.gr_intnlInfo_onafteredit = async function (rowIndex, columnIndex, value) {
  let colID = this.getColumnID(columnIndex);
  let gridDlt = this._dataList;
  const oldData = gridDlt.getOriginalCellData(rowIndex, colID);
  if (oldData == value) return;
  switch (colID) {
    case 'vol':
      if (value == '') gridDlt.setCellData(rowIndex, 'vol', '0');
      break;
    case 'internalUpr':
      if (value == '') gridDlt.setCellData(rowIndex, 'internalUpr', '0');
      break;

    // OnExit
    case 'selpchItemNm':
      // 매입항목
      await scwin.f_openPopUpGrid(gridDlt, 'selpchItemCd', colID, 5, 'F');
      break;
    case 'selpchDeptNm':
      // 부서
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'selpchDeptCd', colID, oldData, 9, 'T');
      break;
    case 'opntDeptNm':
      // 부서
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'opntDeptCd', colID, oldData, 9, 'T');
      break;
    case 'commNm':
      // 품명
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'commCd', colID, oldData, 10, 'T');
      break;
    case 'dptWrkPlNm':
      // 출발작업장
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'dptWrkPlCd', colID, oldData, 12, 'T');
      break;
    case 'arvWrkPlNm':
      // 도착작업장
      scwin.f_openPopUpGridBefore('NM', gridDlt, 'arvWrkPlCd', colID, oldData, 12, 'T');
      break;
    case 'stdWrkPathNm':
      // 작업경로
      if (gridDlt.getCellData(rowIndex, 'cntrSizCd') != '') {
        scwin.f_openPopUpGridBefore('NM', gridDlt, 'cntrWrkPathSeq', colID, oldData, 13, 'T');
      } else {
        scwin.f_openPopUpGridBefore('NM', gridDlt, 'bulkWrkPathSeq', colID, oldData, 13, 'T');
      }
      ;
      break;
    case 'wrkStpNm':
      // 작업단계
      if (gridDlt.getCellData(rowIndex, 'cntrSizCd') != '') {
        scwin.f_openPopUpGridBefore('NM', gridDlt, 'cntrWrkStpSeq', colID, oldData, 14, 'T');
      } else {
        scwin.f_openPopUpGridBefore('NM', gridDlt, 'bulkWrkStpSeq', colID, oldData, 14, 'T');
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
 * @name gr_intnlInfo_ontextimageclick 
 * @description inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 */
scwin.gr_intnlInfo_ontextimageclick = async function (rowIndex, columnIndex) {
  //  for=gr_intnlInfo event=OnPopup(row,colid,data)
  let gridDlt = this._dataList;
  let colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'selpchItemNm':
      //매입항목
      // after, click 동일하여 주석
      // await scwin.f_openPopUpGrid(gridDlt, 'selpchItemCd', colID, 5, 'F');
      break;
    case 'selpchDeptNm':
      //매출부서
      await scwin.f_openPopUpGrid(gridDlt, 'selpchDeptCd', colID, 9, 'F');
      break;
    case 'opntDeptNm':
      //매입부서
      await scwin.f_openPopUpGrid(gridDlt, 'opntDeptCd', colID, 9, 'F');
      break;
    case 'commNm':
      //품명
      await scwin.f_openPopUpGrid(gridDlt, 'commCd', colID, 10, 'F');
      break;
    case 'dptWrkPlNm':
      //출발작업장
      await scwin.f_openPopUpGrid(gridDlt, 'dptWrkPlCd', colID, 12, 'F');
      break;
    case 'arvWrkPlNm':
      //도착작업장
      await scwin.f_openPopUpGrid(gridDlt, 'arvWrkPlCd', colID, 12, 'F');
      break;
    case 'stdWrkPathNm':
      // 작업경로
      if (gridDlt.getCellData(rowIndex, 'cntrSizCd') != '') {
        await scwin.f_openPopUpGrid(gridDlt, 'cntrWrkPathSeq', colID, 13, 'F');
      } else {
        await scwin.f_openPopUpGrid(gridDlt, 'bulkWrkPathSeq', colID, 13, 'F');
      }
      ;
      break;
    case 'wrkStpNm':
      // 작업단계
      if (gridDlt.getCellData(rowIndex, 'cntrSizCd') != '') {
        await scwin.f_openPopUpGrid(gridDlt, 'cntrWrkStpSeq', colID, 14, 'F');
      } else {
        await scwin.f_openPopUpGrid(gridDlt, 'bulkWrkStpSeq', colID, 14, 'F');
      }
      ;
      break;
  }
  ;
};

/**
 * @event 
 * @name ed_odrNo_onkeyup 
 * @description 오더번호 키보드에서 키를 눌렀다 놓았을 때 발생한다.
 */
scwin.ed_odrNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
  if (e.code == 13) scwin.f_retrieve();
};

/**
 * @event 
 * @name ed_odrNo_onblur 
 * @description 오더번호 포커스를 잃었을 때 발생한다.
 */
scwin.ed_odrNo_onblur = function (e) {
  if (cbx_blNoYn.getValue() == 1) {
    scwin.f_openCommonPopUp(1, ed_odrNo.getValue(), '', 'T', 'F');
  }
  ;
};

/**
 * @event 
 * @name ed_cvsslMgntNo_onviewchange 
 * @description 본번/수출입 키보드 또는 마우스 조작을 통해 값이 변경된 경우 발생.
 * 스크립트를 통해 값이 변경된 경우에는 발생하지 않음.
 */
scwin.ed_cvsslMgntNo_onviewchange = async function (info) {
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!retConfirm) return;
  const cvsslMgntNo = info.newValue;
  if (cvsslMgntNo == '') {
    $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_portcnt]);
    $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
  } else {
    scwin.f_openPopUpByCvsslMgmtNo(ed_cvsslMgntNo, 'T');
  }
  ;
};

/**
 * @event 
 * @name ed_adptExchRt_onviewchange 
 * @description 환율 키보드 또는 마우스 조작을 통해 값이 변경된 경우 발생.
 * 스크립트를 통해 값이 변경된 경우에는 발생하지 않음. (native onchange 이벤트와 유사함.)
 */
scwin.ed_adptExchRt_onviewchange = function (info) {
  scwin.f_changeAdptDt();
};

/**
 * @event 
 * @name ed_adptExchRt_onviewchange 
 * @description 적용일 키보드 또는 마우스 조작을 통해 값이 변경된 경우 발생.
 * 스크립트를 통해 값이 변경된 경우에는 발생하지 않음. (native onchange 이벤트와 유사함.)
 */
scwin.ica_adptExchRtDt_onviewchange = function (info) {
  scwin.f_exchangeRateSet(); // 환율정보조회
};

/**
 * @event 
 * @name acb_taxnClsCd_onchange 
 * @description 통화/과세 선택 항목을 변경할 경우 발생.
 */
scwin.acb_taxnClsCd_onchange = function (info) {
  let rowCnt = ds_sellInfo.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_sellInfo.getRowJSON(i);
    if (rowData['dcsnClsCd'] == '1') {
      let nSellAmt = $c.num.parseFloat($p, rowData['sellAmt'], 0);
      let vatAmtVal = Math.round(nSellAmt * 0.1);
      if (acb_taxnClsCd.getValue() != '01') vatAmtVal = 0;
      ds_sellInfo.setCellData(i, 'taxnClsCd', acb_taxnClsCd.getValue());
      ds_sellInfo.setCellData(i, 'vatAmt', vatAmtVal);
    }
    ;
  }
  ;
};

/**
 * @event 
 * @name acb_crcCd_onchange 
 * @description 통화/과세 선택 항목을 변경할 경우 발생.
 */
scwin.acb_crcCd_onchange = function (info) {
  // for=acb_crcCd event=OnCloseUp()
  let rowCnt = ds_sellInfo.getRowCount();
  scwin.f_exchangeRateSet();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_sellInfo.getRowJSON(i);
    if (rowData['dcsnClsCd'] == '1' && rowData['crcCd'] != acb_crcCd.getValue()) {
      ds_sellInfo.setCellData(i, 'crcCd', acb_crcCd.getValue());
      let nSellVol = $c.num.parseFloat($p, rowData['sellVol'], 0);
      let nSellUpr = $c.num.parseFloat($p, rowData['sellUpr'], 0);
      let nAdptExchRt = $c.num.parseFloat($p, ed_adptExchRt.getValue(), 0);
      if (rowData['crcCd'] != 'KRW') {
        ds_sellInfo.setCellData(i, 'sellAmtFcrc', nSellVol * nSellUpr);
        ds_sellInfo.setCellData(i, 'sellAmt', nSellVol * nSellUpr * nAdptExchRt);
      } else {
        ds_sellInfo.setCellData(i, 'sellAmt', nSellVol * nSellUpr);
        scwin.f_AmtSet(ds_sellInfo, i, 'sellAmt', 'SELL');
      }
      ;
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name gr_sellInfo_format 
 * @description gr_sellInfo_format customFormatter
 */
scwin.gr_sellInfo_format = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  let rowData = this._dataList.getRowJSON(rowIndex);
  switch (colID) {
    case 'cntrSizCd':
      return data + ' ' + rowData['cntrTypCd'] + ' ' + rowData['fullEmptyClsCd'];
  }
  ;
};

/**
 * @method 
 * @name gr_profitLossInfo_format 
 * @description gr_profitLossInfo customFormatter
 */
scwin.gr_profitLossInfo_format = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case 'sellInternalTxnYn':
    case 'pchsInternalTxnYn':
      return data == '1' ? 'Y' : '';
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name gr_intnlInfo_format 
 * @description gr_intnlInfo customFormatter
 */
scwin.gr_intnlInfo_format = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case 'addYn':
      return data == '1' ? 'Y' : '';
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name udc_bilgClntNo_onblurCodeEvent 
 * @description 청구처 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUpBefore(1, txt_bilgClntNm, ed_bilgClntNo, 'T', ds_odrInfo.getCellData(0, 'bilgClntNo'));
};

/**
 * @event 
 * @name udc_bilgClntNo_onviewchangeNameEvent 
 * @description 청구처 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_bilgClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpBefore(1, txt_bilgClntNm, ed_bilgClntNo, 'T');
};

/**
 * @event 
 * @name udc_bilgClntNo_onclickEvent 
 * @description 청구처 검색버튼 클릭 시 발생
 */
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openPopUpText(1, txt_bilgClntNm, ed_bilgClntNo, 'F');
};

/**
 * @event 
 * @name udc_reqClntNo_onblurCodeEvent 
 * @description 요청처 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_reqClntNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUpBefore(2, txt_reqClntNm, ed_reqClntNo, 'T', ds_odrInfo.getCellData(0, 'reqClntNo'));
};

/**
 * @event 
 * @name udc_reqClntNo_onviewchangeNameEvent 
 * @description 요청처 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_reqClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpBefore(2, txt_reqClntNm, ed_reqClntNo, 'T');
};

/**
 * @event 
 * @name udc_reqClntNo_onclickEvent 
 * @description 요청처 검색버튼 클릭 시 발생
 */
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openPopUpText(2, txt_reqClntNm, ed_reqClntNo, 'F');
};

/**
 * @event 
 * @name udc_lineCd_onblurCodeEvent 
 * @description LINE/선사 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUpBefore(4, hid_lineNm, ed_lineCd, 'T', ds_odrInfo.getCellData(0, 'lineCd'));
};

/**
 * @event 
 * @name btn_line_onclick 
 * @description LINE/선사 검색버튼 클릭 시 발생
 */
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openPopUpText(4, hid_lineNm, ed_lineCd, 'F');
};

/**
 * @event 
 * @name btn_cvsslMgntNo_onclick 
 * @description 본번/수출입 검색버튼 클릭 시 발생
 */
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUpByCvsslMgmtNo(ed_cvsslMgntNo, 'F');
};

/**
 * @event 
 * @name udc_sellLodeptCd_onblurCodeEvent 
 * @description 매출부서 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_sellLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUpBefore(3, txt_sellLodeptNm, ed_sellLodeptCd, 'T', ds_odrInfo.getCellData(0, 'sellLodeptCd'));
};

/**
 * @event 
 * @name udc_sellLodeptCd_onviewchangeNameEvent 
 * @description 매출부서 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_sellLodeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpBefore(3, txt_sellLodeptNm, ed_sellLodeptCd, 'T');
};

/**
 * @event 
 * @name udc_sellLodeptCd_onclickEvent 
 * @description 매출부서 검색버튼 클릭 시 발생
 */
scwin.udc_sellLodeptCd_onclickEvent = function (e) {
  scwin.f_openPopUpText(3, txt_sellLodeptNm, ed_sellLodeptCd, 'F');
};

/**
 * @event 
 * @name udc_bilgLodeptCd_onblurCodeEvent 
 * @description 청구부서 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUpBefore(5, txt_bilgLodeptNm, ed_bilgLodeptCd, 'T', ds_odrInfo.getCellData(0, 'bilgLodeptCd'));
};

/**
 * @event 
 * @name udc_bilgLodeptCd_onviewchangeNameEvent 
 * @description 청구부서 name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_bilgLodeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpBefore(5, txt_bilgLodeptNm, ed_bilgLodeptCd, 'T');
};

/**
 * @event 
 * @name udc_bilgLodeptCd_onclickEvent 
 * @description 청구부서 검색버튼 클릭 시 발생
 */
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openPopUpText(5, txt_bilgLodeptNm, ed_bilgLodeptCd, 'F');
};

/**
 * @event 
 * @name btn_updateOrder_onclick 
 * @description 오더 버튼영역 수정 버튼 클릭 시 발생
 */
scwin.btn_updateOrder_onclick = function (e) {
  scwin.f_update('O');
};

/**
 * @event 
 * @name btn_updateOrder_onclick 
 * @description 오더 버튼영역 저장 버튼 클릭 시 발생
 */
scwin.btn_saveOrder_onclick = function (e) {
  scwin.f_save('O');
};

/**
 * @event 
 * @name btn_updateOrder_onclick 
 * @description 매출 탭 수정 버튼 클릭 시 발생
 */
scwin.btn_updateSell_onclick = function (e) {
  scwin.f_update('S');
};

/**
 * @event 
 * @name btn_updateOrder_onclick 
 * @description 매출 탭 저장 버튼 클릭 시 발생
 */
scwin.btn_saveSell_onclick = function (e) {
  scwin.f_save('S');
};

/**
 * @event 
 * @name btn_updatePchs_onclick 
 * @description 매입 탭 수정 버튼 클릭 시 발생
 */
scwin.btn_updatePchs_onclick = function (e) {
  scwin.f_update('P');
};

/**
 * @event 
 * @name btn_savePchs_onclick 
 * @description 매입 탭 저장 버튼 클릭 시 발생
 */
scwin.btn_savePchs_onclick = function (e) {
  scwin.f_save('P');
};

/**
 * @event 
 * @name btn_updateIntnl_onclick 
 * @description 내부거래/손익 탭 수정 버튼 클릭 시 발생
 */
scwin.btn_updateIntnl_onclick = function (e) {
  scwin.f_update('D');
};

/**
 * @event 
 * @name btn_updateIntnl_onclick 
 * @description 내부거래/손익 탭 저장 버튼 클릭 시 발생
 */
scwin.btn_saveIntnl_onclick = function (e) {
  scwin.f_save('D');
};

/**
 * @event 
 * @name tr_tab_center_onchange 
 * @description 내부거래/손익 탭 저장 버튼 클릭 시 발생
 */
scwin.tr_tab_center_onchange = function (tabId, index, userTabId) {
  scwin.f_selectTabMenu(index);
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭시 발생하는 이벤트
 */
scwin.btn_retrieve_onclick = async function (e) {
  await scwin.f_retrieve();

  // 탭 초기화
  tr_tab_center.setSelectedTabIndex(0);
};

/**
 * @event 
 * @name stndPcostYn_formatter 
 * @description 표준 formatter
 */
scwin.stndPcostYn_formatter = function (data) {
  return data == 1 ? 'Y' : 'N';
};
scwin.zeroToEmpty = function (data) {
  if (data == '') return 0;
  return data;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L조회',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_blNoYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계포함 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_offSetYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',checkMaxByteOnInput:' ',class:'',id:'ed_odrNo',mandatory:'true',maxlength:'20',objType:'Data',placeholder:'',style:'width: 150px;','ev:onkeyup':'scwin.ed_odrNo_onkeyup','ev:onblur':'scwin.ed_odrNo_onblur',title:'오더번호'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openPopUpOdrNo',style:'',id:'btn_PopUp1',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_odrInfoArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrKndNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_ctrtClntNo',class:'',objType:'key',maxlength:'6',allowChar:'A-Z0-9',title:'계약처',ref:'data:dma_odrInfo.ctrtClntNo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtClntNm',style:'width:100px;',objType:'key',mandatory:'true',ref:'data:dma_odrInfo.ctrtClntNm'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_ctrtNo',style:'',objType:'key',mandatory:'true',editFormat:'A########-##',allowChar:'A-Z0-9',ref:'data:dma_odrInfo.ctrtNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveClntInfo',style:'',maxlengthCode:'6',objTypeCode:'data',validExpCode:'청구처:yes',UpperFlagCode:'1',id:'udc_bilgClntNo',mandatoryName:'true',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_bilgClntNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',btnId:'img_bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent',validTitle:'청구처',refDataCollection:'dma_odrInfo',code:'bilgClntNo',name:'bilgClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_reqClntNo',nameId:'txt_reqClntNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveClntInfo',style:'',objTypeCode:'data',validExpCode:'요청처:yes',maxlengthCode:'6',UpperFlagCode:'1',objTypeName:'data',mandatoryName:'true',btnId:'img_reqClntNo',id:'udc_reqClntNo','ev:onviewchangeNameEvent':'scwin.udc_reqClntNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent',validTitle:'요청처',refDataCollection:'dma_odrInfo',code:'reqClntNo',name:'reqClntNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE/선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'4',objTypeCode:'data',popupID:'',UpperFlagCode:'1',onloadCallbackFunc:'',btnId:'btn_line',codeId:'ed_lineCd',selectID:'retrieveLineInfoList',popupTitle:'',nameId:'hid_lineNm',style:'',id:'udc_lineCd',hideName:'true','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',code:'lineCd',refDataCollection:'dma_odrInfo'}},{T:1,N:'xf:group',A:{id:'',style:'display: none;'},E:[{T:1,N:'xf:input',A:{ref:'',maxlength:'4',style:'width: 85px;',id:'',placeholder:'',allowChar:'A-Z0-9',class:'',objType:'data'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_line_onclick',style:'',id:'',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_shpCoClntNm',style:'',objType:'key',ref:'data:dma_odrInfo.shpCoClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본번/수출입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',ref:'data:dma_odrInfo.cvsslMgntNo',style:'width: 85px;',objType:'data',maxlength:'8',allowChar:'A-Z0-9','ev:onblur':'scwin.ed_cvsslMgntNo_onblur','ev:onviewchange':'scwin.ed_cvsslMgntNo_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_impExpDomesticClsCd',search:'start',style:'',submenuSize:'auto',objType:'data',ref:'data:dma_odrInfo.impExpDomesticClsCd',emptyIndex:'-1',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vsslCd',style:'width: 85px;',objType:'data',allowChar:'A-Z0-9',maxlength:'4',ref:'data:dma_odrInfo.vsslCd'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',style:'width: 70px;',objType:'data',allowChar:'A-Z0-9',maxlength:'10',ref:'data:dma_odrInfo.portcnt'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sellLodeptCd',nameId:'txt_sellLodeptNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveLogisDeptInfo',style:'',objTypeCode:'data',validExpCode:'매출부서:yes',maxlengthCode:'4',UpperFlagCode:'1',objTypeName:'data',mandatoryName:'true',btnId:'img_sellLodeptCd',id:'udc_sellLodeptCd','ev:onviewchangeNameEvent':'scwin.udc_sellLodeptCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_sellLodeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sellLodeptCd_onblurCodeEvent',validTitle:'매출부서',refDataCollection:'dma_odrInfo',code:'sellLodeptCd',name:'sellLodeptNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환율/적용일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_adptExchRtDt',class:'',calendarValueType:'yearMonthDate',objType:'data',validExp:'적용일:no:date=YYYYMMDD&length=8','ev:onviewchange':'scwin.ica_adptExchRtDt_onviewchange',ref:'data:dma_odrInfo.adptExchRtDt',displayFormat:'yyyy/MM/dd'}},{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_adptExchRt',class:'tar',objType:'data',allowChar:'a-zA-Z0-9',dataType:'number','ev:onviewchange':'scwin.ed_adptExchRt_onviewchange',ref:'data:dma_odrInfo.adptExchRt',displayFormatter:'scwin.zeroToEmpty'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bb0',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bb0',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totSellAmt',style:'max-width:150px;',objType:'data',allowChar:'A-Z0-9',dataType:'number',displayFormat:'#,###',ref:'data:dma_odrInfo.totSellAmt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입원가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totPchsAmt',style:'max-width:150px;',objType:'data',allowChar:'A-Z0-9',displayFormat:'#,###',ref:'data:dma_odrInfo.totPchsAmt',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th bb0',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'손익',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totPchsPrflosAmt',style:'max-width:150px;',objType:'data',allowChar:'A-Z0-9',displayFormat:'#,###',ref:'data:dma_odrInfo.totPchsPrflosAmt',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'표준원가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totStdAmt',style:'max-width:150px;',objType:'data',allowChar:'A-Z0-9',dataType:'number',displayFormat:'#,###',ref:'data:dma_odrInfo.totStdAmt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totStdPrflosAmt',style:'max-width:150px;',objType:'data',allowChar:'A-Z0-9',dataType:'number',displayFormat:'#,###',ref:'data:dma_odrInfo.totStdPrflosAmt'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveLogisDeptInfo',style:'',btnId:'img_sellLodeptCd',id:'udc_bilgLodeptCd',objTypeName:'data',objTypeCode:'data',validExpCode:'매출부서:yes',maxlengthCode:'4',UpperFlagCode:'1',mandatoryName:'true','ev:onviewchangeNameEvent':'scwin.udc_bilgLodeptCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent',validTitle:'청구부서',refDataCollection:'dma_odrInfo',code:'bilgLodeptCd',name:'bilgLodeptNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화/과세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group4',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'acb_crcCd',class:'',objType:'data',mandatory:'false','ev:onchange':'scwin.acb_crcCd_onchange',displayMode:'label',allOption:'',chooseOption:'',ref:'data:dma_odrInfo.crcCd',sortOption:'value',sortMethod:'ascending',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_taxnClsCd',search:'start',style:'width:100px;',submenuSize:'auto',objType:'data','ev:onchange':'scwin.acb_taxnClsCd_onchange',displayMode:'label',allOption:'',chooseOption:'',ref:'data:dma_odrInfo.taxnClsCd',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'tbl_odrBtnArea',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_updateOrder',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_updateOrder_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_saveOrder',type:'button',class:'btn',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.btn_saveOrder_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'청구/정산',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_pchsInfoArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_certi',style:'',objType:'data',ref:'data:dma_adjustmentInformation.certiNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계산서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_taxinvc',style:'',objType:'data',ref:'data:dma_adjustmentInformation.pchsVatNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_bilgDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:dma_adjustmentInformation.bilgDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_bilgPicNm',style:'',objType:'data',ref:'data:dma_adjustmentInformation.bilgPicNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체확인일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_coConfirmDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:dma_adjustmentInformation.copCoConfirmDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입승인일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_pchsAdmitDt',style:'',object:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:dma_adjustmentInformation.pchsAdmitDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_pchsPicNm',style:'',object:'',objType:'data',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{class:'wq_tab',id:'tr_tab_center',style:'','ev:onchange':'scwin.tr_tab_center_onchange',alwaysDraw:'false'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center0',label:'매출',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center1',label:'매입',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tr_tab_center2',label:'내부거래/손익'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'grd_section1'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'N',grp:'grd_section1',templateYn:'N',style:'',gridDownUserAuth:'X',gridID:'gr_sellInfo',id:'udc_topGrdBtn2',btnUser:'Y',gridDownFn:'f_GridToExcel',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oneditend':'scwin.gr_sellInfo_oneditend','ev:oncellclick':'scwin.gr_sellInfo_oncellclick','ev:ontextimageclick':'scwin.gr_sellInfo_ontextimageclick',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_sellInfo',style:'',columnMove:'true',id:'gr_sellInfo',visibleRowNum:'5',columnMoveWithFooter:'true',class:'wq_gvw',mergeExcludeValue:'$blank',rowStatusVisible:'true',syncRowPositionOption:'style','ev:onafteredit':'scwin.gr_sellInfo_onafteredit',rowStatusWidth:'40'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption12',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'70',inputType:'text',id:'sellSeqHeader',value:'매출<br/>순번',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',dataType:'text',width:'40',inputType:'checkbox',checkboxLabel:'행<br/>선<br/>택',id:'addHangHeader',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'40',inputType:'text',id:'bilgTrgtYnHeader',value:'청구',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'dcsnClsCdHeader',value:'확정<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'120',inputType:'text',id:'sellItemCdHeader',value:'매출항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellItemNmHeader',value:'매출항목',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'100',inputType:'text',id:'dcScCdHeader',value:'할인<br/>할증코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'dcScNmHeader',value:'할인할증',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellGoodsPatternCdHeader',value:'매출<br/>품목유형',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'3',width:'210',inputType:'text',id:'col19',sortable:'false',value:'CNTR/품명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'rsltsStdDtHeader',value:'실적일',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellVolHeader',value:'매출물량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'sellUnitCdHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellUprHeader',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'crcCdHeader',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellAmtFcrcHeader',value:'외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellAmtHeader',value:'원화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'bilgClntNoHeader',value:'청구처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'bilgClntNmHeader',value:'청구처',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'vatAmtHeader',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'100',inputType:'text',id:'bizDomCdHeader',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'bizDomNmHeader',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'100',inputType:'text',id:'bilgLodeptCdHeader',value:'청구부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'bilgLodeptNmHeader',value:'청구부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellLodeptNmHeader',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'vsslCdHeader',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'portcntHeader',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'taxnClsCdHeader',value:'과세',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'80',inputType:'text',id:'lineCdHeader',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'mrnHeader',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'msnHeader',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'hsnHeader',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'bookingNoHeader',value:'BOOKING NO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'onWrkPlNmHeader',value:'출발작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'offWrkPlNmHeader',value:'도착작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'dptDistrictNmHeader',value:'출발권역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'arvDistrictNmHeader',value:'도착권역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'wrkStDtHeader',value:'작업일자<br/>(Fm)',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'wrkEndDtHeader',value:'작업일자<br/>(To)',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'sellYnHeader',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'cntrSizCdHeader',value:'규격<br/>속성',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'ctrlYnHeader',value:'조정여부',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'prebilgCreatYnHeader',value:'선청구<br/>생성여부',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'vehclNoHeader',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'certiNoHeader',value:'거래명세서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'qtyHeader',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'qtyUnitCdHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'wtHeader',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'wtUnitCdHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'cbmHeader',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'frvanQtyHeader',value:'FRVAN수량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellMainMainPattern1Header',value:'매출수정<br/>사유코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'100',inputType:'text',id:'sellMainMainPattern2Header',value:'매출삭제<br/>사유코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellMainMainRsnHeader',value:'매출수정<br/>사유',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'addYnHeader',value:'행추가<br/>여부',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commSeqHeader',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sellCommNoHeader',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sellCommNmHeader',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'70',inputType:'text',id:'sellSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'40',inputType:'checkbox',id:'addHang',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'40',inputType:'checkbox',readOnly:'true',id:'bilgTrgtYn',displayMode:'label',colMerge:'false',upperColumn:'sellItemNm'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'select',readOnly:'true',id:'dcsnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'120',inputType:'text',id:'sellItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',colMerge:'false',inputType:'textImage',readOnly:'true',id:'sellItemNm',displayMode:'label',upperColumn:'dcScNm'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'100',inputType:'text',id:'dcScCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',readOnly:'true',id:'dcScNm',displayMode:'label',colMerge:'false',upperColumn:'sellGoodsPatternCd'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'select',id:'sellGoodsPatternCd',displayMode:'value delim label',colMerge:'false',upperColumn:'sellCommNo'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'commSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'Left',width:'90',inputType:'text',id:'sellCommNo',displayMode:'label',colMerge:'false',upperColumn:'sellCommNm'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'90',inputType:'text',id:'sellCommNm',displayMode:'label',colMerge:'false',upperColumn:'sellCommNo'}},{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',width:'80',displayFormat:'yyyy/MM/dd',inputType:'calendar',id:'rsltsStdDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.000',inputType:'text',id:'sellVol',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'select',id:'sellUnitCd',displayMode:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_unit'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.00',inputType:'text',id:'sellUpr',displayMode:'label',excelCellType:'number',value:''}},{T:1,N:'w2:column',A:{selectedData:'false',textAlign:'center',width:'70',inputType:'select',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.00',inputType:'text',id:'sellAmtFcrc',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'sellAmt',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',readOnly:'true',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'textImage',id:'bilgClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0',inputType:'text',id:'vatAmt',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'70',inputType:'text',id:'bizDomCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'textImage',id:'bizDomNm',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'70',inputType:'text',id:'bilgLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'bilgLodeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'textImage',id:'sellLodeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'vsslCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'portcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'select',id:'taxnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'80',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'mrn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'msn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'hsn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'bookingNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'onWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'textImage',id:'offWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',readOnly:'true',id:'dptDistrictNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',readOnly:'true',id:'arvDistrictNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',width:'70',displayFormat:'yyyy/MM/dd',inputType:'calendar',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',width:'70',displayFormat:'yyyy/MM/dd',inputType:'text',readOnly:'true',id:'wrkEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'checkbox',id:'sellYn',displayMode:'label'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.gr_sellInfo_format',textAlign:'center',width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'select',readOnly:'true',id:'ctrlYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'select',readOnly:'true',id:'prebilgCreatYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',readOnly:'true',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'qty',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'select',id:'qtyUnitCd',displayMode:'label',selectedData:'false'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.000',inputType:'text',id:'wt',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',emptyItem:'true',inputType:'select',id:'wtUnitCd',displayMode:'label',selectedData:'false'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.000',inputType:'text',id:'cbm',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',displayFormat:'#,##0',inputType:'text',id:'frvanQty',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'select',readOnly:'true',id:'sellMainMainPattern1',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'left',width:'100',inputType:'select',readOnly:'true',id:'sellMainMainPattern2',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',readOnly:'true',id:'sellMainMainRsn',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.addYnFormat',textAlign:'center',width:'100',inputType:'text',readOnly:'true',id:'addYn',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'sellGoodsPatternCd',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column314',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column313',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column312',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column311',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column310',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column309',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column308',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column307',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column306',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column305',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column304',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column303',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column302',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'sellVol\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.000',inputType:'expression',id:'column301',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column300',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column299',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column298',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'sellAmtFcrc\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.00',inputType:'expression',id:'column297',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{expression:'SUM(\'sellAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',id:'column296',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column295',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column294',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'vatAmt\')',textAlign:'right',width:'100',inputType:'expression',id:'column293',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column292',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column291',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column290',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column289',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column288',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column287',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column286',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column285',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column284',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column283',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column282',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column281',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column280',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column279',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column278',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column277',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column276',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column275',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column274',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column273',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column272',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column271',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column270',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column269',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column268',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column267',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column266',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'wt\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.000',inputType:'expression',id:'column265',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column264',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'cbm\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.000',inputType:'expression',id:'column263',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{expression:'SUM(\'frvanQty\')',textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',id:'column262',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column261',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column260',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column259',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column258',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column253',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column252',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column251',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column250',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column249',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column248',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column247',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column246',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column245',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column244',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column243',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column242',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column241',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column240',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column239',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column238',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column237',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'sellAmtFcrc\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.00',inputType:'expression',id:'column236',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{expression:'SUM(\'sellAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',id:'column235',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column234',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column233',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'vatAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'expression',id:'column232',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column231',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column230',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column229',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column257',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column228',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column227',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column226',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column224',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column223',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column221',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column220',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column219',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column218',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column217',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column216',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column215',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column214',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column213',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column212',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column211',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column210',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column209',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column208',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column207',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column206',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column205',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column204',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,###.##0',inputType:'text',id:'column203',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column202',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,###.##0',inputType:'text',id:'column201',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,###',inputType:'text',id:'column200',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column199',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column198',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column197',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column196',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'sellTotalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{cancelFunction:'f_undoRow',rowDelFunction:'f_deleteRow',rowAddObjType:'ctrlBtn',rowAddFunction:'f_addRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',id:'tbl_sellGridBtn',btnDelYn:'N',cancelObjType:'ctrlBtn',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'전환(삭제후 청구) 오더번호',class:''}},{T:1,N:'xf:group',A:{style:'',id:'grp_group16',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'','ev:onblur':'scwin.emit_onblurCodeEvent',maxlength:'20','ev:onkeyup':'scwin.ed_codeU_onkeyup','ev:onviewchange':'scwin.emit_onviewchangeCodeEvent',style:'',id:'ed_trans_odrNo',placeholder:'',allowChar:'A-Z0-9',title:'전환오더번호',class:' w100',objType:'Data'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openPopUpOdrNo_trans',style:'',id:'btn_PopUp2',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'수정(삭제)사유',class:'req'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',ref:'',chooseOption:'',editType:'select',style:'width: 150px;',id:'acb_sellMainMainPattern1',visibleRowNum:'9',allOption:'',class:'',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]},{T:1,N:'xf:input',A:{maxlength:'30',style:'width: 150px;',id:'ed_sellMainMainRsn',placeholder:'',class:'',objType:'data'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.f_openPgm',style:'display: none;',id:'btn_openPgm',type:'button',class:'btn white',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모선단위환율수정'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_updateSell_onclick',style:'',id:'btn_updateSell',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_saveSell_onclick',style:'',id:'btn_saveSell',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'\'행추가\'시 \'매출\'탭 아래 그리드 좌편 맨 앞에있는 \'행선택\'을 선택(해당행 또는 복수건 또는 전체선택 가능)후 \'행추가\' 버튼 누르시면 됩니다',class:'info-txt txt-red'}}]}]},{T:1,N:'w2:content',A:{id:'content2',style:'',alwaysDraw:'true'},E:[{T:1,N:'xf:group',A:{id:'grd_section2'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'N',grp:'grd_section2',templateYn:'N',style:'',gridDownUserAuth:'X',gridID:'gr_pchsInfo',id:'udc_topGrdBtn3',btnUser:'Y',gridDownFn:'f_GridToExcel',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oneditend':'scwin.gr_pchsInfo_oneditend','ev:oncellclick':'scwin.gr_pchsInfo_oncellclick','ev:ontextimageclick':'scwin.gr_pchsInfo_ontextimageclick',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_pchsInfo',style:'',id:'gr_pchsInfo',visibleRowNum:'5',class:'wq_gvw',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_pchsInfo_onafteredit',syncRowPositionOption:'style',dataName:'통합매입'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption14',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'stndPcostYnHeader',value:'표준',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'90',inputType:'text',id:'dcsnClsCdHeader',value:'확정<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'selpchItemNmHeader',value:'매입항목',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'dcScNmHeader',value:'할인할증',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'pchsGoodsPatternCdHeader',value:'품목유형',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'100',inputType:'text',id:'upperCommNmHeader',value:'품목',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'3',width:'210',inputType:'text',id:'column19',sortable:'false',value:'CNTR/품명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'rsltsStdDtHeader',value:'실적일',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'volHeader',value:'매입물량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'unitCdHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'pchsUprHeader',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'pchsAmtHeader',value:'매입금액',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'pchsClntNmHeader',value:'매입거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'vatHeader',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'copCoClntNmHeader',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'bizDomNmHeader',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'pchsDeptNmHeader',value:'매입부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'adjmDeptNmHeader',value:'정산부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'lineNmHeader',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'vsslCdHeader',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'portCntHeader',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'120',inputType:'text',id:'dptWrkPlCdHeader',value:'출발작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'120',inputType:'text',id:'arvWrkPlCdHeader',value:'도착작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'dptWrkPlNmHeader',value:'출발작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'arvWrkPlNmHeader',value:'도착작업장명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'dptDistrictNmHeader',value:'출발권역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'arvDistrictNmHeader',value:'도착권역',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'wrkStDtHeader',value:'작업일자<br/>(Fm)',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'wrkEndDtHeader',value:'작업일자<br/>(To)',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'vehclNoHeader',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'blNoHeader',value:'BL NO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'bookingNOHeader',value:'BOOKING NO',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'commNmHeader',value:'규격<br/>속성',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'adjmTrgtYnHeader',value:'정산대상<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'qtyHeader',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'qtyUnitHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'wtHeader',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'wtUnitHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'cbmHeader',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'pchsMainMainPatternHeader',value:'매입수정<br/>사유코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'pchsMainMainRsnHeader',value:'매입수정<br/>사유',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'addYnHeader',value:'행추가<br/>여부',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsSeqHeader',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsCommNoHeader',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsCommNmHeader',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayFormatter:'scwin.stndPcostYn_formatter',textAlign:'center',width:'70',inputType:'text',readOnly:'true',id:'stndPcostYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'90',inputType:'select',readOnly:'true',id:'dcsnClsCd',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'textImage',id:'selpchItemNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'dcScNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'select',id:'pchsGoodsPatternCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'upperCommNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'pchsSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',id:'pchsCommNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',readOnly:'true',id:'pchsCommNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',width:'100',displayFormat:'yyyy/MM/dd',inputType:'calendar',id:'rsltsStdDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.000',inputType:'text',id:'vol',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'select',id:'unitCd',displayMode:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_unit'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.00',inputType:'text',id:'pchsUpr',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',id:'pchsAmt',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'textImage',id:'pchsClntNm',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',id:'vat',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'textImage',id:'copCoClntNm',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'bizDomNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'leftr',width:'100',inputType:'textImage',id:'pchsDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',id:'adjmDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',id:'lineNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'vsslCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'portcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'dptWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'textImage',id:'dptWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'textImage',id:'arvWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',readOnly:'true',id:'dptDistrictNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',readOnly:'true',id:'arvDistrictNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',width:'70',displayFormat:'yyyy/MM/dd',inputType:'text',readOnly:'true',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',dataType:'date',width:'70',displayFormat:'yyyy/MM/dd',inputType:'text',readOnly:'true',id:'wrkEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'textImage',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',readOnly:'true',id:'blNo',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',readOnly:'true',id:'bookingNO',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'checkbox',readOnly:'true',id:'adjmTrgtYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'qty',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'select',id:'qtyUnit',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.000',inputType:'text',id:'wt',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'select',id:'wtUnit',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.000',inputType:'text',id:'cbm',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'select',readOnly:'true',id:'pchsMainMainPattern',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',readOnly:'true',id:'pchsMainMainRsn',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.addYnFormat',textAlign:'center',width:'100',inputType:'text',readOnly:'true',id:'addYn',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'upperCommNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column317',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column316',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column315',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column314',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'column313',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column312',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column311',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'targetColValue()',textAlign:'left',width:'70',inputType:'expression',id:'column310'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column309',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column308',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'vol\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###.##0',inputType:'expression',id:'column307',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column306',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column305',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'pchsAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',id:'column304',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column303',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'vat\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',id:'column302',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column301',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column300',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column299',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column298',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column297',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column296',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column295',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column294',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column293',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column292',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column291',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column290',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column289',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column288',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column287',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column286',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column285',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column284',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column283',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column282',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column281',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column280',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'wt\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,###.##0',inputType:'expression',id:'column279',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column278',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'cbm\')',textAlign:'right',dataType:'number',width:'70',displayFormat:'#,###.##0',inputType:'expression',id:'column277',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column276',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column275',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column274',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column253',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column250',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column248',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column246',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column245',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column257',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column244',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column243',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column242',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column241',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'vol\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###.##0',inputType:'expression',id:'column240',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column239',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column238',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'pchsAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',id:'column237',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column236',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'vat\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',id:'column235',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column234',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column233',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column228',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column261',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column265',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column227',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column226',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column217',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column216',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column269',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column273',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column215',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column214',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column213',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column212',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column211',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column210',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column209',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column208',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column207',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column205',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column204',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column203',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column202',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column201',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column199',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column198',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column196',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'sellTotalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{rowDelFunction:'f_deleteRow',cancelFunction:'f_undoRow',rowAddObjType:'ctrlBtn',btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',rowAddFunction:'f_addRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',id:'tbl_pchsGridBtn',cancelObjType:'ctrlBtn'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'수정(삭제)사유',class:'req'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',ref:'',chooseOption:'',editType:'select',style:'width:150px;',id:'acb_pchsMainMainPattern',visibleRowNum:'9',allOption:'',class:'',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]},{T:1,N:'xf:input',A:{maxlength:'30',style:'width:150px;',id:'ed_pchsMainMainRsn',placeholder:'',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_updatePchs_onclick',style:'',id:'btn_updatePchs',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_savePchs_onclick',style:'',id:'btn_savePchs',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{id:'grd_section3'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'}},{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더손익',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'N',gridDownYn:'N',gridID:'',gridUpYn:'N',grp:'grd_section3',id:'udc_topGrdBtn4',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'xf:group',A:{style:'gap:0',id:'',class:'lybox col3 wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{syncScroll:'true',dataName:'오더손익',readOnly:'true',syncScrollId:'gr_profitLossInfo2, gr_profitLossInfo3',syncRowPositionOption:'style',overflowY:'hidden',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_profitLossInfo',style:'',id:'gr_profitLossInfo1',visibleRowNum:'4',class:'wq_gvw',overflowX:'scroll',autoFitMinWidth:'685'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption16',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'0',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'100',inputType:'text',id:'odrNoHeader',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'9',width:'700',inputType:'text',id:'column19',sortable:'false',value:'매출',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellInternalTxnYnHeader',value:'내부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellSeqHeader',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellItemNmHeader',value:'매출항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellCommNmHeader',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmtHeader',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVolHeader',value:'물량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellUnitCdHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUprHeader',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellOpntDeptNmHeader',value:'원가부서',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.gr_profitLossInfo_format',textAlign:'center',width:'70',inputType:'text',id:'sellInternalTxnYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'sellSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'sellItemNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'sellCommNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'text',id:'sellAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###.##0',inputType:'text',id:'sellVol',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'sellUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###.#0',inputType:'text',id:'sellUpr',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'sellOpntDeptNm',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'lobranNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'sellAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'width: 200px;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{syncScroll:'true',dataName:'오더손익',readOnly:'true',syncScrollId:'gr_profitLossInfo1,gr_profitLossInfo3',syncRowPositionOption:'style',overflowY:'hidden',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_profitLossInfo',style:'',id:'gr_profitLossInfo2',visibleRowNum:'4',autoFit:'allColumn',class:'wq_gvw',overflowX:'scroll',autoFitMinWidth:'200'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption18',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'0',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'140',inputType:'text',id:'column1',sortable:'false',value:'기준',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lobranNmHeader',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'99',inputType:'text',id:'wrkStpNmHeader',value:'작업단계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',colMerge:'true',inputType:'text',id:'lobranNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'99',inputType:'text',id:'wrkStpNm',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'lobranNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'99',inputType:'text',id:'column31',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{syncRowPositionOption:'style',syncScroll:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_profitLossInfo',style:'',readOnly:'true',id:'gr_profitLossInfo3',visibleRowNum:'4',class:'wq_gvw',syncScrollId:'gr_profitLossInfo1,gr_profitLossInfo2',overflowX:'scroll',autoFitMinWidth:'685'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption17',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',width:'100',inputType:'text',id:'odrNoHeader',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'9',width:'700',inputType:'text',id:'column19',sortable:'false',value:'매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column20',sortable:'false',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsInternalTxnYnHeader',value:'내부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsSeqHeader',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsItemNmHeader',value:'매입항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsCommNmHeader',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmtHeader',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsVolHeader',value:'물량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsUnitCdHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsUprHeader',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsOpntDeptNmHeader',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsStndPcostYnHeader',value:'표준원가여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.gr_profitLossInfo_format',textAlign:'center',width:'70',inputType:'text',id:'pchsInternalTxnYn',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'pchsSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'pchsItemNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'pchsCommNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'text',id:'pchsAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,###.##0',inputType:'text',id:'pchsVol',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'70',inputType:'text',id:'pchsUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###.#0',inputType:'text',id:'pchsUpr',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'pchsOpntDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'pchsStndPcostYn',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'lobranNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'pchsAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column79',displayMode:'label'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'sellTotalRows4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'}}]}]}]},{T:1,N:'xf:group',A:{id:'grd_section4',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'내부거래 ',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'N',grp:'grd_section4',templateYn:'N',style:'',gridDownUserAuth:'X',gridID:'gr_intnlInfo',id:'udc_topGrdBtn5',btnUser:'Y',gridDownFn:'f_GridToExcel',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oneditend':'scwin.gr_intnlInfo_oneditend','ev:ontextimageclick':'scwin.gr_intnlInfo_ontextimageclick',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_intnlInfo',style:'',dataName:'내부거래',id:'gr_intnlInfo',visibleRowNum:'2',class:'wq_gvw','ev:onafteredit':'scwin.gr_intnlInfo_onafteredit',rowStatusVisible:'true',syncRowPositionOption:'style'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption15',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'selpchItemNmHeader',value:'내부항목',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'internalGoodsPatternCdHeader',class:'col-type1',value:'품목유형',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'210',inputType:'text',id:'column19',sortable:'false',value:'CNTR/품명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'rsltsStdDtHeader',value:'실적<br/>기준일',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'volHeader',value:'내부물량',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'unitCdHeader',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'internalUprHeader',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'sellAmtHeader',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',width:'200',inputType:'text',id:'column55',sortable:'false',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'stdWrkPathNmHeader',value:'경로',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'wrkStpNmHeader',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'internalTxnStsClsNmHeader',value:'내부거래<br/>상태구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'dptWrkPlNmHeader',value:'출발작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'arvWrkPlNmHeader',value:'도착작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'120',inputType:'text',id:'cargoCommNoHeader',value:'화물품명번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'addYnHeader',value:'행추가<br/>여부',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'internalCommNoHeader',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNmHeader',value:'명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'selpchDeptNmHeader',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'opntDeptNmHeader',value:'매입',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'textImage',id:'selpchItemNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'internalGoodsPatternCd',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'commNm',textAlign:'Left',width:'90',colMerge:'true',inputType:'text',id:'internalCommNo',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'internalCommNo',textAlign:'left',width:'100',colMerge:'true',inputType:'text',readOnly:'true',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'calendar',id:'rsltsStdDt',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0.000',inputType:'text',id:'vol',displayMode:'label',defaultValue:'0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'unitCd',displayMode:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_unit'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'70',displayFormat:'#,##0.00',inputType:'text',id:'internalUpr',displayMode:'label',maxLength:'13',ignoreChar:'.',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',id:'sellAmt',displayMode:'label',maxLength:'13',ignoreChar:'.',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'selpchDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'opntDeptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'stdWrkPathNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'textImage',id:'wrkStpNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',readOnly:'true',id:'internalTxnStsClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'textImage',id:'dptWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'textImage',id:'arvWrkPlNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'cargoCommNo',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.addYnFormat',customFormatter:'scwin.gr_intnlInfo_format',textAlign:'center',width:'100',inputType:'text',readOnly:'true',id:'addYn',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column253',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column245',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column243',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column242',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column241',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'vol\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###.##0',inputType:'expression',id:'column240',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column239',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column238',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'sellAmt\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',id:'column237',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column236',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column235',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column234',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column233',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column261',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column269',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column273',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column198',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column196',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'sellTotalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{rowDelFunction:'f_deleteRow',cancelFunction:'f_undoRow',rowAddObjType:'ctrlBtn',btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',rowAddFunction:'f_addRow',rowDelObjType:'ctrlBtn',btnCancelYn:'Y',style:'',gridID:'gr_intnlInfo',btnRowAddYn:'Y',id:'tbl_intnlGridBtn',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_updateIntnl_onclick',style:'',id:'btn_updateIntnl',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_saveIntnl_onclick',style:'',id:'btn_saveIntnl',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'udc_gridComCode'}}]}]}]}]})