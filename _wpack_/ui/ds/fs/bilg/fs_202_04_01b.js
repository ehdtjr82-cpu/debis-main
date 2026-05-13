/*amd /ui/ds/fs/bilg/fs_202_04_01b.xml 200350 ece4acd3b142c99d3f72c6a5fa8d6cbbdcbd6b1c01ca8b91589c2ffd41543ab5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_formulasellitemlist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellItemNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dtlfmlapattern',saveRemovedData:'true','ev:ondataload':'scwin.ds_dtlfmlapattern_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certidetail',saveRemovedData:'true','ev:ondataload':'scwin.ds_certidetail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNoSeq',name:'거래명세서번호순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'실적적용환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exchRtAdptDt',name:'환율적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrNoSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number',length:''}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'보관차수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'상차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOn',name:'운송구간_상차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOff',name:'운송구간_하차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDst',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'선박코드_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntFrom',name:'항차_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'선박코드_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntTo',name:'항차_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'회수예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingDt',name:'선적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpSellItemNm',name:'거래명세서표기매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNmX',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsArDepPortDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'EDI전송대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ediSndClsCd',name:'EDI전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldSpplyAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'화재보험료금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exchSellAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDtl',name:'DOOR상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name86',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderselling_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcgCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onWrkPlCd',name:'상차작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offWrkPlCd',name:'하차작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receptClsCd',name:'수령구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prebilgYn',name:'선청구대상여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chkAppend',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transDst',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'activePgmId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellSeq',name:'매출순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'name33',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptNm',name:'name34',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'name36',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd2',name:'name38',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chkSumDc',name:'name36',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_parent',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcgCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineCd',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'onWrkPlCd',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offWrkPlCd',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qryConKnd',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiPatternCd',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'receptClsCd',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'prebilgYn',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'DECIMALpgmId',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fmlaClsCd',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fmlaPatternCd',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiNo',name:'name14'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpDomesticClsCd',name:'name15'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chkAppend',name:'name16'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsCd',name:'name17'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transDst',name:'name18'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'name19'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCargoClsCd',name:'name20'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellItemCd',name:'name21'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCommCd',name:'name22'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'name23'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'name24'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellLodeptCd',name:'name25'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chkSumDc',name:'name26'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'name27'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgLodeptCd',name:'name28'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNo',name:'name29'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qryConCd',name:'name30'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qryConDtFm',name:'name31'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qryConDtTo',name:'name32'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellCommNo',name:'name33'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certicommon',saveRemovedData:'true','ev:ondataload':'scwin.ds_certicommon_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgMgntNo',name:'상위거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainCertiNo',name:'주요거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'청구담당자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNm',name:'청구담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRtAdptDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'certiCnt',name:'거래명세서건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsCd',name:'증빙정상구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'실적적용환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgExchRt',name:'BILL환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'환율적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtInscrpYn',name:'적용환율표기여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totWt',name:'계산서금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'공급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntWtCbm',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneNm',name:'화재보험료금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billCoverPatternSeq',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'외화청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'청구금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgInscrpAmtFcrc',name:'BILL표기금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'원화확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'선청구대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'표기선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslEngNm',name:'표기선박영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'표기항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCertiNo',name:'선박코드_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'항차_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'선박코드_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'항차_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col45',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'BILLCOVER유형순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billTitleNm',name:'BILLTITLE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subTitleNm1',name:'SUB_TITLE명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subTitleNm2',name:'SUB_TITLE명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subTitleNm3',name:'SUB_TITLE명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAggrTitle',name:'BILL집계TITLE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAggrSeq',name:'BILL집계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'담보관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgIntendDt',name:'청구예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNoInscrpYn',name:'계좌번호표기여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ediSndDt',name:'OFFSET번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetNo2',name:'OFFSET번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndReqDt',name:'EDI전송요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetVatNo',name:'EDI전송대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offsetNo1',name:'EDI전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetUpperCertiNo',name:'EDI전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndHh',name:'EDI전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiAutoCreatClsCd',name:'거래명세서자동생성구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBilgDocNo',name:'거래처청구서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refkey',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col81',name:'총금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmtOri',name:'#N/A',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgYn',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetVatno',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCdNm',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'name94',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_appendrow',saveRemovedData:'true','ev:ondataload':'scwin.ds_appendrow_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNoSeq',name:'거래명세서번호순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'실적적용환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exchRtAdptDt',name:'환율적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrNoSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'보관차수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'상차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOn',name:'운송구간_상차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOff',name:'운송구간_하차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDst',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'선박코드_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntFrom',name:'항차_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'선박코드_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntTo',name:'항차_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'회수예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingDt',name:'선적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpSellItemNm',name:'거래명세서표기매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNmX',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsArDepPortDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'EDI전송대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ediSndClsCd',name:'EDI전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldSpplyAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'화재보험료금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exchSellAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDtl',name:'DOOR상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name86',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_sellitemnamelist',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'key2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'key3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'key4',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_formulasellitemlist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fmlapattern'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'name4',dataType:'text',defaultValue:'CertiFormulaEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name5',dataType:'text',defaultValue:'retrieveProgramEachCertiFormulaList'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fmlapattern',saveRemovedData:'true','ev:ondataload':'scwin.ds_fmlapattern_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dtlfmlapattern'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'CertiFormulaEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrieveProgramEachCertiFormulaList'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certicommonsavepost',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'certiNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_appendrow',action:'/ds.fs.bilg.bilg.RetrieveOrderTransSellingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderselling_con","key":"IN_DS1"},{"id":"ds_certicommon","key":"OUT_DS1"},{"id":"ds_appendrow","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_certicommon","key":"OUT_DS1"},{"id":"ds_appendrow","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_appendrow_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_orderselling',action:'/ds.fs.bilg.bilg.RetrieveOrderTransSellingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderselling_con","key":"IN_DS1"},{"id":"ds_certicommon","key":"OUT_DS1"},{"id":"ds_certidetail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_certicommon","key":"OUT_DS1"},{"id":"ds_certidetail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_orderselling_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fmlapattern',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveProgramEachCertiFormulaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_fmlapattern',target:'data:json,{"id":"ds_fmlapattern","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fmlapattern_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_formulasellitemlist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaEachSellingItemListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_formulasellitemlist_con","key":"IN_DS1"},{"id":"ds_formulasellitemlist","key":"OUT_DS1"},{"id":"ds_sellitemnamelist","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_formulasellitemlist","key":"OUT_DS1"},{"id":"ds_sellitemnamelist","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_certi_retrieve',action:'/ds.fs.bilg.bilg.RetrieveCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderselling_con","key":"IN_DS1"},{"id":"ds_certicommon","key":"OUT_DS1"},{"id":"ds_certidetail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_certicommon","key":"OUT_DS1"},{"id":"ds_certidetail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_certi_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Dtlfmlapattern',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveProgramEachCertiFormulaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_dtlfmlapattern',target:'data:json,{"id":"ds_dtlfmlapattern","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_certi_saveReg',action:'/ds.fs.bilg.bilg.RegistCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_certidetail","key":"IN_DS1"},{"id":"ds_certicommon","key":"IN_DS2"},{"id":"ds_certicommonsavepost","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_certicommonsavepost","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_certi_saveReg_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_certi_SaveUpdate',action:'/ds.fs.bilg.bilg.UpdateCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_certidetail","key":"IN_DS1"},{"id":"ds_certicommon","key":"IN_DS2"},{"id":"ds_certicommonsavepost","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_certicommonsavepost","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_certi_SaveUpdate_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_certi_delete',action:'/ds.fs.bilg.bilg.DeleteCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_certidetail","key":"IN_DS1"},{"id":"ds_certicommon","key":"IN_DS2"},{"id":"ds_certicommonsavepost","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_certicommonsavepost","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_certi_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_certi_save_submitdone','ev:submiterror':'',id:'sbm_certi_save',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_certidetail","key":"IN_DS1"},{"id":"ds_certicommon","key":"IN_DS2"},{"id":"ds_certicommonsavepost","key":"OUT_DS1"}]',replace:'',target:'data:json,{"id":"ds_certicommonsavepost","key":"OUT_DS1"}',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 특이사항
// 해당 프로그램만 활성화 할때와 타 프로그램에서 호출할때 시점차이가 발생하여 로직이 다소 복잡해집니다.
// asis에는 202_bilgCommon이 import되어있으나 Tobe에서 정상적으로 구동되지 않아 bilgcommon에서 사용하는 이벤트 및 함수들을 해당 프로그램에 이식한 상태이며, 해당사항 인스웨이브측과 PL측에 공유되어있습니다.
//-------------------------------------------------------------------------

// 페이지내 사용 전역변수 선연
scwin.addflag = ""; // 신규입력/수정 구분자
scwin.delflag = ""; // 삭제 구분자        
scwin.appflag = ""; // 추가구분 구분자   
scwin.certiPatternCd = "V"; // 거래명세서유형코드
scwin.receptClsCd = "02"; // 수령구분코드  
scwin.prebilgYn = 0; // 선청구여부    
scwin.pgmId = "fs_202_04_01b.jsp"; // 프로그램ID           
scwin.fmlaClsCd = "01"; // 서식구분코드            
scwin.fmlaPatternCd = "01"; // 서식유형코드                  
scwin.upperCertiNo = "0"; // 상위거래명세서번호                  
scwin.pldgMgntNo = ""; // 담보증번호   
scwin.chkFlag = true; // N건선택 Flag
scwin.dcsnClsCd = "2";
scwin.count = 0;

// 호출 화면에서 파라미터 받음r
scwin.param = "";
scwin.flag = "";
scwin.dma_orderselling_con = "";
scwin.certiNo = "";
scwin.link = "";
scwin.bilgLodeptCd = "";

// 화면단 hidden 컴포넌트 선언
scwin.ed_lineNm = "";
scwin.ed_vsslNm = "";
scwin.ed_sellCommNo = "";
scwin.ed_dtl_oldCertiNo = "";
scwin.dtl_lineCd = "";
scwin.dtl_size = "";
scwin.dtl_crcCd = "";
scwin.dtl_vsslCd = "";
scwin.dtl_portcnt = "";
scwin.ed_adptExchRt = "";
scwin.dtl_billTitleNm = "";
scwin.dtl_upperCertiNo = "";
scwin.rd_selTsVsslCd = "";
scwin.dtl_FmTsVsslCd = "";
scwin.dtl_ToTsVsslCd = "";
scwin.acb_lc_gubun = "";
scwin.ed_diffAmt = "";
scwin.ed_fireInsrRateAmt = "";
scwin.dtl_offsetUpperCertiNo = "";
scwin.MSG_FS_WRN_011 = "청구부서를 먼저 선택해야 합니다.";
scwin.MSG_FS_WRN_010 = "변경된 사항을 먼저 저장해야 합니다.";
scwin.MSG_FS_WRN_002 = "거래명세서가 존재하지 않습니다.";
scwin.MSG_FS_WRN_001 = "적용환율이 2개 이상이면 거래명세서 작성이 불가합니다.";
scwin.MSG_FS_WRN_018 = "EDI전송된 건입니다. 삭제하시겠습니까?";
scwin.MSG_FS_WRN_009 = "청구처 조건이 내용과 일치하지 않습니다.";
scwin.MSG_FS_WRN_015 = "이미 확정된 거래명세서(CERTI)입니다.";
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 호출
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_odrKndCd"
  },
  // 셀렉트
  {
    grpCd: "SD070",
    compID: "acb_taxnClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.param = $c.data ? $c.data.getParameter($p) : "";
  scwin.flag = scwin.param.flag;
  scwin.certiNo = scwin.param.certiNo;
  scwin.bilgLodeptCd = scwin.param.bilgLodeptCd;
  scwin.link = scwin.param.link;

  // asis flag = bodyFrame1    

  // if(scwin.param.dma_orderselling_con != null) {
  //     scwin.count = 1;
  // }

  dma_orderselling_con.setJSON(scwin.param.dma_orderselling_con);
};

//-------------------------------------------------------------------------
// 컴포넌트 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// UDC 로딩시
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  udc_fromToCalendar1.setInitDate(scwin.strPreDate, scwin.strCurDate);
  // ed_bilgLodeptCd.focus();

  gr_certidetail.setColumnVisible('unitCd', false);
  cbx_previewCheck.setValue("1");
  cbx_sumCheck.setValue("1");

  // await scwin.f_RetrieveFmalPattern();
  // // (상세-하단) 거래명세서 유형 가져오기 - fs_202_bilgcommon.jsp
  // await scwin.f_RetrieveDtlFmalPattern();	

  ed_lineNm.hide();
  ica_confirmDt.setValue(scwin.strCurDate);
  ica_bilgIntendDt.setValue(scwin.strCurDate);
  rd_transCargoClsCd.setValue("C"); //컨테이너
  rd_prebilgYn.setValue("0"); //청구
  acb_taxnClsCd.setValue("0"); //과세
  div_qryConKnd2.setStyle("display", "none");
  div_qryConKnd5.setStyle("display", "none");
  acb_qryConKnd2.setValue("품목");
};

//-------------------------------------------------------------------------
// 공통 코드 조회시
//-------------------------------------------------------------------------
scwin.ondataload = async function () {
  await scwin.f_RetrieveFmalPattern();
  // await scwin.f_RetrieveDtlFmalPattern();	
  // (상세-하단) 거래명세서 유형 가져오기 - fs_202_bilgcommon.jsp

  /* if(scwin.certiNo != "" && scwin.link == "true") {
      //CERTI 조회 - fs_202_bilgcommon.jsp
      await scwin.f_CertiRetrieve();
  }
   //거래명세서일괄작성에서 호출시
  if (scwin.flag != "" && scwin.flag != undefined) {
      // dma_orderselling_con.setJSON(scwin.param.dma_orderselling_con);
      await scwin.f_wholeRetrieve();
  } */
};

//-------------------------------------------------------------------------
// 거래명세서일괄작성에서 호출시 조회
//-------------------------------------------------------------------------
scwin.f_wholeRetrieve = async function () {
  ed_bilgLodeptCd.setValue(dma_orderselling_con.get("bilgLodeptCd"));
  // ed_bilgLodeptCd.focus();
  ed_bilgLodeptNm.setValue(dma_orderselling_con.get("bilgLodeptNm"));
  ed_bilgClntNo.setValue(dma_orderselling_con.get("bilgClntNo"));
  // ed_bilgClntNo.focus();
  ed_bilgClntNm.setValue(dma_orderselling_con.get("bilgClntNm"));
  acb_qryConKnd.setValue(dma_orderselling_con.get("qryConKnd"));
  if (dma_orderselling_con.get("sumQryYn") == "Y") {
    cbx_sumDc.checkAll(true);
  } else {
    cbx_sumDc.checkAll(false);
  }
  if (dma_orderselling_con.get("qryConKnd") == "오더") {
    div_qryConKnd1.setStyle("display", "none");
    div_qryConKnd2.setStyle("display", "block");
  } else {
    div_qryConKnd1.setStyle("display", "block");
    div_qryConKnd2.setStyle("display", "none");
  }
  acb_qryConKnd2.setValue(dma_orderselling_con.get("qryConKnd2"));
  ed_qryConCd2.setValue(dma_orderselling_con.get("qryConCd2"));
  acb_odrKndCd.setValue(dma_orderselling_con.get("odrKndCd"));
  acb_impExpDomesticClsCd.setValue(dma_orderselling_con.get("impExpDomesticClsCd"));
  acb_taxnClsCd.setValue(dma_orderselling_con.get("taxnClsCd"));
  acb_fmlaPatternCd.setValue(dma_orderselling_con.get("fmlaPatternCd"));
  ed_qryConCd.setValue(dma_orderselling_con.get("qryConCd"));
  ed_qryConDtFm.setValue(dma_orderselling_con.get("qryConDtFm"));
  ed_qryConDtTo.setValue(dma_orderselling_con.get("qryConDtTo"));
  rd_transCargoClsCd.setValue(dma_orderselling_con.get("transCargoClsCd"));

  // console.log("=======[1] fmlaPatternCd:"+dma_orderselling_con.get("fmlaPatternCd")+", acb_fmlaPatternCd:"+acb_fmlaPatternCd.getValue());

  await scwin.btn_retrieve_onClick();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function () {
  //validation check       
  //combo의 조건에 따라 조회 필수 입력값이 달라짐 

  if (acb_qryConKnd.getValue() == "배차" || acb_qryConKnd.getValue() == "오더일자" || acb_qryConKnd.getValue() == "청구인식일" || acb_qryConKnd.getValue() == "실적일자") {
    if (cbx_chkAppend.getValue() == "1") {
      if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_qryConDtFm, ed_qryConDtTo]))) return;
    } else {
      if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_bilgClntNo, ed_qryConDtFm, ed_qryConDtTo]))) return;
    }
  } else {
    if (cbx_chkAppend.getValue() == "1") {
      if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_qryConCd]))) return;
    } else {
      if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_bilgClntNo, ed_qryConCd]))) return;
    }
  }

  //추가구분일경우 청구처 일치여부 체크 
  if (cbx_chkAppend.getValue() == "1") {
    if (ds_certicommon.getTotalRow() > 0 && ed_bilgClntNo.getValue() != ed_dtl_bilgClntNo.getValue()) {
      $c.win.alert($p, scwin.MSG_FS_WRN_009);
      return;
    }
    if (ds_certicommon.getTotalRow() == 0 || ds_certicommon.getCellData(0, "sellVatNo") != "") {
      $c.win.alert($p, scwin.MSG_FS_WRN_015);
      return;
    }
  }
  dma_orderselling_con.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  if (cbx_chkAppend.getValue() == "1") {
    if (ds_certidetail.getTotalRow() > 0) {
      dma_orderselling_con.set("bilgClntNo", ed_dtl_bilgClntNo.getValue());
    } else {
      dma_orderselling_con.set("bilgClntNo", ed_bilgClntNo.getValue());
    }
  } else {
    dma_orderselling_con.set("bilgClntNo", ed_bilgClntNo.getValue());
  }
  dma_orderselling_con.set("qryConCd", ed_qryConCd.getValue());
  dma_orderselling_con.set("qryConDtFm", ed_qryConDtFm.getValue());
  dma_orderselling_con.set("qryConDtTo", ed_qryConDtTo.getValue());
  dma_orderselling_con.set("lineCd", ed_lineCd.getValue());
  dma_orderselling_con.set("vsslCd", ed_vsslCd.getValue());
  dma_orderselling_con.set("onWrkPlCd", ed_onWrkPlCd.getValue());
  dma_orderselling_con.set("offWrkPlCd", ed_offWrkPlCd.getValue());
  dma_orderselling_con.set("taxnClsCd", acb_taxnClsCd.getValue());
  dma_orderselling_con.set("qryConKnd", acb_qryConKnd.getValue());
  dma_orderselling_con.set("certiPatternCd", scwin.certiPatternCd);
  dma_orderselling_con.set("receptClsCd", scwin.receptClsCd);
  dma_orderselling_con.set("prebilgYn", rd_prebilgYn.getValue());
  dma_orderselling_con.set("pgmId", scwin.pgmId);
  dma_orderselling_con.set("fmlaClsCd", scwin.fmlaClsCd);
  dma_orderselling_con.set("fmlaPatternCd", acb_fmlaPatternCd.getValue());
  dma_orderselling_con.set("impExpDomesticClsCd", acb_impExpDomesticClsCd.getValue());
  dma_orderselling_con.set("transDst", acb_transDst.getValue());
  dma_orderselling_con.set("odrKndCd", acb_odrKndCd.getValue());
  dma_orderselling_con.set("transCargoClsCd", rd_transCargoClsCd.getValue());
  dma_orderselling_con.set("sellItemCd", acb_sellItemCd.getValue());
  dma_orderselling_con.set("regId", ed_regId.getValue());
  dma_orderselling_con.set("modId", ed_modId.getValue());
  dma_orderselling_con.set("sellLodeptCd", ed_sellLodeptCd.getValue());
  if (cbx_sumDc.getValue() == "1") {
    dma_orderselling_con.set("chkSumDc", "Y");
  } else {
    dma_orderselling_con.set("chkSumDc", "N");
  }
  if (acb_qryConKnd2.getValue() == "품명") {
    dma_orderselling_con.set("sellCommNo", ed_qryConCd2.getValue());
    dma_orderselling_con.set("upperCommCd", "");
    dma_orderselling_con.set("kcgCd", "");
    dma_orderselling_con.set("blNo", "");
  } else if (acb_qryConKnd2.getValue() == "품목") {
    dma_orderselling_con.set("sellCommNo", "");
    dma_orderselling_con.set("upperCommCd", ed_qryConCd2.getValue());
    dma_orderselling_con.set("kcgCd", "");
    dma_orderselling_con.set("blNo", "");
  } else if (acb_qryConKnd2.getValue() == "화종") {
    dma_orderselling_con.set("sellCommNo", "");
    dma_orderselling_con.set("upperCommCd", "");
    dma_orderselling_con.set("kcgCd", ed_qryConCd2.getValue());
    dma_orderselling_con.set("blNo", "");
  } else if (acb_qryConKnd2.getValue() == "BL") {
    dma_orderselling_con.set("sellCommNo", "");
    dma_orderselling_con.set("upperCommCd", "");
    dma_orderselling_con.set("kcgCd", "");
    dma_orderselling_con.set("blNo", ed_qryConCd3.getValue());
  } else if (acb_qryConKnd2.getValue() == "CNTR") {
    dma_orderselling_con.set("sellCommNo", ed_qryConCd3.getValue());
    dma_orderselling_con.set("upperCommCd", "");
    dma_orderselling_con.set("kcgCd", "");
    dma_orderselling_con.set("blNo", "");
  }
  if (cbx_chkAppend.getValue() == "1") {
    //dma_orderselling_con.set("chkAppend") = "CHECK");     	
    $c.sbm.execute($p, sbm_appendrow);
  } else {
    //dma_orderselling_con.set("chkAppend") = "";     	
    $c.sbm.execute($p, sbm_orderselling);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_MySave = function () {
  if (ds_certidetail.getTotalRow() < 1) {
    $c.win.alert($p, MSG_CM_WRN_001, ["DATA"]);
    return;
  }
  if (scwin.addflag != "MOD" && scwin.appflag == "TRUE") {
    scwin.addflag = "REG";
  } else if (scwin.addflag == "MOD" && scwin.appflag == "TRUE") {
    scwin.addflag = "MOD";
  }

  //삭제구분
  scwin.delflag = "";
  if (scwin.addflag == "REG") {
    //validation check        
    if (!$c.gus.cfValidate($p, [ed_confirmDt, dtl_fmlaPatternCd])) return;
  } else if (scwin.addflag == "" || scwin.addflag == "MOD") {
    //validation check        
    if (!$c.gus.cfValidate($p, [ed_certiNo, ed_confirmDt, dtl_fmlaPatternCd])) return;
  }
  ds_certicommon.setCellData(0, "fmlaClsCd", scwin.fmlaClsCd);
  ds_certicommon.setCellData(0, "upperCertiNo", scwin.upperCertiNo);
  ds_certicommon.setCellData(0, "pldgMgntNo", pldgMgntNo);
  ds_certicommon.setCellData(0, "pgmId", pgmId);
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (separation) {
  //날짜형식 체크
  if (!(await $c.gus.cfValidate($p, [ica_confirmDt]))) {
    return;
  }

  //거래명세서번호순번  Value 세팅
  var j = 0;
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certidetail.setCellData(i, "certiNoSeq", j);
      j = j + 1;
    }
  }
  if (j == 0) {
    $c.win.alert($p, MSG_FS_WRN_012);
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
  ds_certicommon.setCellData(0, "confirmDt", ica_confirmDt.getValue()); // 확인일자
  ds_certicommon.setCellData(0, "fmlaPatternCd", acb_dtl_fmlaPatternCd.getValue()); // 서식유형코드 
  ds_certicommon.setCellData(0, "bankAcntNoInscrpYn", rd_bankAcntNoInscrpYn.getValue()); // 계좌번호표기여부 
  ds_certicommon.setCellData(0, "summary", ed_dtl_summary.getValue()); // 적요 
  ds_certicommon.setCellData(0, "spplyAmt", ed_spplyAmt.getValue()); // 공급금액 
  ds_certicommon.setCellData(0, "fireInsrRateAmt", scwin.ed_fireInsrRateAmt); // 화재보험금액
  ds_certicommon.setCellData(0, "spplyAmtFcrc", scwin.ed_spplyAmtFcrc); // 공급금액_외화 
  ds_certicommon.setCellData(0, "vatAmt", ed_vatAmt.getValue()); // 부가세금액
  ds_certicommon.setCellData(0, "prebilgYn", rd_prebilgYn.getValue()); // 선청구여부					
  ds_certicommon.setCellData(0, "certiNo", ed_certiNo.getValue()); // 거래명세서번호
  ds_certicommon.setCellData(0, "oldCertiNo", scwin.ed_dtl_oldCertiNo); // 거래명세서번호
  ds_certicommon.setCellData(0, "vsslCd", ds_certidetail.setCellData(0, "vsslCd")); // 선박코드
  ds_certicommon.setCellData(0, "portcnt", ds_certidetail.setCellData(0, "portcnt")); // 항차
  ds_certicommon.setCellData(0, "arDepPortDt", scwin.ed_arDepPortDt); // 입출항일자
  ds_certicommon.setCellData(0, "billTitleNm", scwin.dtl_billTitleNm); // BILLTITLE명 
  ds_certicommon.setCellData(0, "dcsnClsCd", scwin.dcsnClsCd); // 확정구분코드	

  //통화코드 Value 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
        ds_certicommon.setCellData(0, "crcCd", "KRW");
      } else {
        ds_certicommon.setCellData(0, "crcCd", ds_certidetail.getCellData(i, "crcCd"));
        break;
      }
    }
  }

  //적용환율 Value 비교/ 세팅
  var pre_i = 0;
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T" && ds_certidetail.getCellData(i, "crcCd") == "USD") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "adptExchRt") == ds_certidetail.getCellData(pre_i, "adptExchRt")) {
          ds_certicommon.setCellData(0, "adptExchRt", ds_certidetail.getCellData(i, "adptExchRt"));
          pre_i = i;
        } else {
          if (pre_i != 0) {
            //ds_certidetail.NameValue(0, "adptExchRt")하고 비교해서 제외
            ds_certicommon.setCellData(0, "adptExchRt", "0");
            $c.win.alert($p, scwin.MSG_FS_WRN_001);
            return;
          }
        }
      } else {
        pre_i = i;
        ds_certicommon.setCellData(0, "adptExchRt", ds_certidetail.setCellData(i, "adptExchRt"));
      }
    }
  }

  //환율적용일자 Value 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "crcCd") != "KRW") {
      ds_certicommon.setCellData(0, "exchRtAdptDt", ds_certidetail.getCellData(i, "exchRtAdptDt"));
      break;
    }
  }

  //수출입구분코드 Value 세팅	
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (i >= 1) {
      if (ds_certidetail.getCellData(i, "impExpDomesticClsCd") == ds_certidetail.getCellData(i - 1, "impExpDomesticClsCd")) {
        ds_certicommon.setCellData(0, "impExpDomesticClsCd", ds_certidetail.getCellData(i, "impExpDomesticClsCd"));
      } else {
        ds_certicommon.setCellData(0, "impExpDomesticClsCd", "");
        break;
      }
    } else {
      ds_certicommon.setCellData(0, "impExpDomesticClsCd", ds_certidetail.getCellData(i, "impExpDomesticClsCd"));
    }
  }

  //사업부문코드 Value 세팅	
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "sellGoodsPatternCd") == "01" || ds_certidetail.getCellData(i, "sellGoodsPatternCd") == "02") {
      ds_certicommon.setCellData(0, "transCargoClsCd", ds_certidetail.getCellData(i, "transCargoClsCd"));
      break;
    }
  }

  //SIZE코드 Value 세팅			
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "cntrSizCd") == ds_certidetail.getCellData(i - 1, "cntrSizCd")) {
          ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
        } else {
          ds_certicommon.setCellData(0, "cntrSizCd", '');
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
      }
    }
  }

  //TYPE코드 Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "cntrTypCd") == ds_certidetail.getCellData(i - 1, "cntrTypCd")) {
          ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
        } else {
          ds_certicommon.setCellData(0, "cntrTypCd", "");
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
      }
    }
  }

  // E/F코드 Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "fullEmptyClsCd") == ds_certidetail.getCellData(i - 1, "fullEmptyClsCd")) {
          ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
        } else {
          ds_certicommon.setCellData(0, "fullEmptyClsCd", "");
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
      }
    }
  }

  //MRN Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.setCellData(i, "mrn") == ds_certidetail.getCellData(i - 1, "mrn")) {
          ds_certicommon.setCellData(0, "mrn", ds_certidetail.getCellData(i, "mrn"));
        } else {
          ds_certicommon.setCellData(0, "mrn", "");
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "mrn", ds_certidetail.getCellData(i, "mrn"));
      }
    }
  }

  //MSN Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "msn") == ds_certidetail.getCellData(i - 1, "msn")) {
          ds_certicommon.setCellData(0, "msn", ds_certidetail.getCellData(i, "msn"));
        } else {
          ds_certicommon.setCellData(0, "msn", 0);
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "msn", ds_certidetail.getCellData(i, "msn"));
      }
    }
  }

  //HSN Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "hsn") == ds_certidetail.getCellData(i - 1, "hsn")) {
          ds_certicommon.setCellData(0, "hsn", ds_certidetail.getCellData(i, "hsn"));
        } else {
          ds_certicommon.setCellData(0, "hsn", 0);
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "hsn", ds_certidetail.getCellData(i, "hsn"));
      }
    }
  }

  //모선코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "vsslCd", ds_certidetail.getCellData(i, "vsslCdFrom"));
      break;
    }
  }

  //항차코드 Value 세팅											
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "portcnt", ds_certidetail.getCellData(i, "portcntFrom"));
      break;
    }
  }

  //From모선코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "vsslCdFrom", ds_certidetail.getCellData(i, "vsslCdFrom"));
      break;
    }
  }

  //To모선코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "vsslCdTo", ds_certidetail.getCellData(i, "vsslCdto"));
      break;
    }
  }

  //From항차코드 Value 세팅											
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "portcntFrom", ds_certidetail.getCellData(i, "portcntFrom"));
      break;
    }
  }

  //To항차코드 Value 세팅											
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "portcntTo", ds_certidetail.getCellData(i, "portcntTo"));
      break;
    }
  }

  //표기선박코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (scwin.rd_selTsVsslCd == 'F') {
        ds_certicommon.setCellData(0, "inscrpVsslCd", ds_certidetail.getCellData(i, "vsslCdFrom"));
        break;
      } else if (scwin.rd_selTsVsslCd == 'T') {
        ds_certicommon.setCellData(0, "inscrpVsslCd", ds_certidetail.getCellData(i, "vsslCdTo"));
        break;
      }
    }
  }

  //표기항차코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (scwin.rd_selTsVsslCd == 'F') {
        ds_certicommon.setCellData(0, "inscrpPortcnt", ds_certidetail.getCellData(i, "portcntFrom"));
        break;
      } else if (scwin.rd_selTsVsslCd == 'T') {
        ds_certicommon.setCellData(0, "inscrpPortcnt", ds_certidetail.getCellData(i, "portcntTo"));
        break;
      }
    }
  }

  // ??
  // 01 : 원화확정, 02 : 외화확정, 03 : 원화외화 확정 - 환종 확정은 계약요율의 근거가 됨(채권관리 시 필요)
  if (ds_certicommon.getCellData(0, "taxnClsCd") == '01' || ds_certicommon.getCellData(0, "taxnClsCd") == '04') {
    ds_certicommon.setCellData(0, "bilgAmt", Number(ed_spplyAmt.getValue()) + Number(ed_vatAmt.getValue()));
    ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '01'); // 원화확정구분코드
    ds_certicommon.setCellData(0, "crcCd", 'KRW');
  } else {
    //원화확정구분코드 Value 세팅		 		
    for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
      if (ds_certidetail.getCellData(i, "choice") == "T") {
        if (i >= 1) {
          if (ds_certidetail.getCellData(i, "crcCd") == ds_certidetail.getCellData(i - 1, "crcCd")) {
            if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
              ds_certicommon.setCellData(0, "wcrcDcsnClsCd", "01");
            } else if (ds_certidetail.getCellData(i, "crcCd") == "USD") {
              ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '02');
            }
          } else {
            ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '03');
            break;
          }
        } else {
          if (ds_certidetail.getCellData(i, "crcCd", "KRW")) {
            ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '01');
          } else {
            ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '02');
          }
        }
      }
    }

    // 청구금액, 외화청구금액, 청구금액외화 Value 세팅		 		
    var bilgAmt = 0;
    var fcrcBilgAmt = 0;
    var bilgAmtFcrc = 0;
    for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
      if (ds_certidetail.getCellData(i, "choice") == "T") {
        if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
          bilgAmt = bilgAmt + Number(ds_certidetail.getCellData(i, "spplyAmt"));
          ds_certicommon.setCellData(0, "bilgAmt", bilgAmt);
        } else if (ds_certidetail.getCellData(i, "crcCd") == "USD") {
          fcrcBilgAmt = fcrcBilgAmt + Number(ds_certidetail.getCellData(i, "spplyAmt"));
          bilgAmtFcrc = bilgAmtFcrc + Number(ds_certidetail.getCellData(i, "spplyAmtFcrc"));
          ds_certicommon.setCellData(0, "fcrcBilgAmt", fcrcBilgAmt);
          ds_certicommon.setCellData(0, "bilgAmtFcrc", bilgAmtFcrc);
        }
      }
    }
  }

  //EDI전송구분
  if (rd_ediSndTrgtYn.getValue() == "1") {
    //ds_certicommon.setCellData(0, "ediSndReqDt")  = "<%=strCurDate%>";
    ds_certicommon.setCellData(0, "ediSndTrgtYn", "1");
    ds_certicommon.setCellData(0, "ediSndClsCd", "0");
    for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
      ds_certidetail.setCellData(i, "ediSndTrgtYn", "1");
      ds_certidetail.setCellData(i, "ediSndClsCd", "0");
    }
  }

  // ds_certidetail.UseChangeInfo = "false";
  // ds_certicommon.UseChangeInfo = "false";		

  if (separation == 'true') {
    scwin.f_SaveCertiSeparation();
  } else {
    //신규 입력
    if (scwin.addflag == "REG") {
      $c.sbm.setAction($p, sbm_certi_save, "/ds.fs.bilg.bilg.RegistCertiCMD.do");
      $c.sbm.execute($p, sbm_certi_save);
      //수정
    } else if (scwin.addflag == "" || scwin.addflag == "MOD") {
      $c.sbm.setAction($p, sbm_certi_save, "/ds.fs.bilg.bilg.UpdateCertiCMD.do");
      $c.sbm.execute($p, sbm_certi_save);
    }
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (청구부서)
//-------------------------------------------------------------------------
scwin.udc_bilgLodept_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_bilgLodept_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.udc_bilgLodept_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(청구부서)
//-------------------------------------------------------------------------
scwin.udc_bilgLodept_CallBack = async function (rtnList) {
  await $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
  // console.log("===========scwin.udc_bilgLodept_CallBack:"+rtnList);
  if (scwin.param.dma_orderselling_con != null) {
    scwin.count = 1;
  }
  if (rtnList != null && rtnList[0] != "N/A") {
    //거래명세서 유형 가져오기
    await scwin.f_RetrieveFmalPattern();
    //상세 거래명세서 유형 가져오기
    await scwin.f_RetrieveDtlFmalPattern();
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (청구처)
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClnt_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
};
scwin.udc_bilgClnt_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 2, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(청구처)
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgClntNo, ed_bilgClntNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(품명코드)
//-------------------------------------------------------------------------
scwin.udc_qryCon2_onclickEvent = function (e) {
  scwin.f_QryConPopUp(1);
};
scwin.udc_qryCon2_onblurCodeEvent = function (e) {
  if (acb_qryConKnd2.getValue() == "품명") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd2, ed_qryConNm2, 11);
  } else if (acb_qryConKnd2.getValue() == "품목") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd2, ed_qryConNm2, 13);
  } else if (acb_qryConKnd2.getValue() == "화종") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd2, ed_qryConNm2, 12);
  } else if (acb_qryConKnd2.getValue() == "BL") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd2, ed_qryConNm3, 10);
  } else if (acb_qryConKnd2.getValue() == "CNTR") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd2, ed_qryConNm3, 17);
  }
};
scwin.udc_qryCon2_onviewchangeNameEvent = function (info) {
  scwin.f_ChangPopUp(1);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(품명코드)
//-------------------------------------------------------------------------
scwin.udc_qryCon2_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_qryConCd2, ed_qryConNm2);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (BL/NO or CNTR/NO)
//-------------------------------------------------------------------------
scwin.udc_qryCon3_onclickEvent = function (e) {
  scwin.f_QryConPopUp(1);
};
scwin.udc_qryCon3_onblurCodeEvent = function (e) {};
scwin.udc_qryCon3_onviewchangeNameEvent = function (info) {};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (BL/NO or CNTR/NO)
//-------------------------------------------------------------------------
scwin.udc_qryCon3_CallBack = function (rtnList) {
  //cfSetReturnValue(rtnList, ed_qryConCd3, ed_qryConNm3);  // B/L코드, B/L명				
  if (rtnList != undefined) {
    $c.gus.cfSetValue($p, ed_qryConCd3, rtnList[1]);
    $c.gus.cfSetHiddenValue($p, ed_qryConCd3, rtnList[1]);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (LINE)
//-------------------------------------------------------------------------
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_lineCd.getValue(), ed_lineNm, 'F', 'F');
};
scwin.udc_line_onblurCodeEvent = function (e) {
  if (scwin.acb_lc_gubun == "CLNT") {
    scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 18);
  } else {
    scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 6);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (LINE)
//-------------------------------------------------------------------------
scwin.udc_line_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, ed_lineNm); // 라인코드, 라인명				

  if (rtnList != null && rtnList[0] != "N/A") {
    //매출항목 가져오기
    scwin.f_RetrieveFormulasellitem(ed_lineCd.getValue());
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (모선) 이벤트 asis에 없음
//-------------------------------------------------------------------------
scwin.udc_vssl_onviewchangeNameEvent = function (info) {};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (모선)
//-------------------------------------------------------------------------
scwin.udc_vssl_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vsslCd);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업구간 from)
//-------------------------------------------------------------------------
scwin.udc_onWrkPl_onclickEvent = function (e) {
  scwin.f_QryConPopUp(2);
};
scwin.udc_onWrkPl_onblurCodeEvent = function (e) {
  if (acb_transDst.getValue() == "작업장") {
    scwin.f_chkOpenCommonPopUp(ed_onWrkPlCd, ed_onWrkPlNm, 8);
  } else if (acb_transDst.getValue() == "권역") {
    scwin.f_chkOpenCommonPopUp(ed_onWrkPlCd, ed_onWrkPlNm, 15);
  }
};
scwin.udc_onWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_ChangPopUp(2);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (작업구간 from)
//-------------------------------------------------------------------------
scwin.udc_onWrkPl_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_onWrkPlCd, ed_onWrkPlNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (작업구간 To)
//-------------------------------------------------------------------------
scwin.udc_offWrkPl_onclickEvent = function (e) {
  scwin.f_QryConPopUp(3);
};
scwin.udc_offWrkPl_onblurCodeEvent = function (e) {
  if (acb_transDst.getValue() == "작업장") {
    scwin.f_chkOpenCommonPopUp(ed_offWrkPlCd, ed_offWrkPlNm, 9);
  } else if (acb_transDst.getValue() == "권역") {
    scwin.f_chkOpenCommonPopUp(ed_offWrkPlCd, ed_offWrkPlNm, 16);
  }
};
scwin.udc_offWrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_QryConPopUp(3);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (작업구간 from)
//-------------------------------------------------------------------------
scwin.udc_offWrkPl_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_offWrkPlCd, ed_offWrkPlNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (매출부서)
//-------------------------------------------------------------------------
scwin.udc_sellLodept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(19, ed_sellLodeptCd.getValue(), ed_sellLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_sellLodept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd, ed_sellLodeptNm, 19);
};
scwin.udc_sellLodept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_sellLodeptNm, ed_sellLodeptCd, 19, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (매출부서)
//-------------------------------------------------------------------------
scwin.udc_sellLodept_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sellLodeptCd, ed_sellLodeptNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (오더등록자)
//-------------------------------------------------------------------------
scwin.udc_reg_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(20, ed_regId.getValue(), ed_regNm.getValue(), 'F', 'F');
};
scwin.udc_reg_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regId, ed_regNm, 20, true);
};
scwin.udc_reg_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_regNm, ed_regId, 20, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (오더등록자)
//-------------------------------------------------------------------------
scwin.udc_reg_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_regId, ed_regNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (오더수정자)
//-------------------------------------------------------------------------
scwin.udc_mod_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(21, ed_modId.getValue(), ed_modNm.getValue(), 'F', 'F');
};
scwin.udc_mod_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_modId, ed_modNm, 21, true);
};
scwin.udc_mod_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_modNm, ed_modId, 21, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백 (오더수정자)
//-------------------------------------------------------------------------
scwin.udc_mod_CallBack = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_modId, ed_modNm);
};

//-------------------------------------------------------------------------
// 조회조건에 따른 팝업창 띄우기
//-------------------------------------------------------------------------	
scwin.f_QryConPopUp = function (flag) {
  if (flag == "1") {
    if (acb_qryConKnd2.getValue() == "품명") {
      scwin.f_openCommonPopUp(11, ed_qryConCd2.getValue(), ed_qryConNm2.getValue(), "F", "F");
    } else if (acb_qryConKnd2.getValue() == "품목") {
      scwin.f_openCommonPopUp(13, ed_qryConCd2.getValue(), ed_qryConNm2.getValue(), "F", "F");
    } else if (acb_qryConKnd2.getValue() == "화종") {
      scwin.f_openCommonPopUp(12, ed_qryConCd2.getValue(), ed_qryConNm2.getValue(), "F", "F");
    } else if (acb_qryConKnd2.getValue() == "BL") {
      scwin.f_openCommonPopUp(10, ed_qryConCd3.getValue(), ed_qryConNm3.getValue(), 'F', 'F');
    } else if (acb_qryConKnd2.getValue() == "CNTR") {
      scwin.f_openCommonPopUp(17, ed_qryConCd3.getValue(), ed_qryConNm3.getValue(), 'F', 'F');
    }
  } else if (flag == "2") {
    if (acb_transDst.getValue() == "권역") {
      scwin.f_openCommonPopUp(15, ed_onWrkPlCd.getValue(), ed_onWrkPlNm.getValue(), "F", "F");
    } else if (acb_transDst.getValue() == "작업장") {
      scwin.f_openCommonPopUp(8, ed_onWrkPlCd.getValue(), ed_onWrkPlNm.getValue(), "F", "F");
    }
  } else if (flag == "3") {
    if (acb_transDst.getValue() == "권역") {
      scwin.f_openCommonPopUp(16, ed_offWrkPlCd.getValue(), ed_offWrkPlNm.getValue(), "F", "F");
    } else if (acb_transDst.getValue() == "작업장") {
      scwin.f_openCommonPopUp(9, ed_offWrkPlCd.getValue(), ed_offWrkPlNm.getValue(), "F", "F");
    }
  } else if (flag == "4") {
    if (scwin.acb_lc_gubun == "CLNT") {
      scwin.f_openCommonPopUp(18, ed_lineCd.getValue(), ed_lineNm.getValue(), "F", "F");
    } else if (scwin.acb_lc_gubun.getValue() == "LINE") {
      scwin.f_openCommonPopUp(6, ed_lineCd.getValue(), ed_lineNm.getValue(), "F", "F");
    }
  } else {
    if (acb_qryConKnd.getValue() == "오더") {
      scwin.f_OrderPopUp();
    } else if (acb_qryConKnd.getValue() == "CNTR") {
      // div_qryConKnd3.style.display = 'none';		
      scwin.f_openCommonPopUp(14, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
    } else if (acb_qryConKnd.getValue() == "품명") {
      // div_qryConKnd3.style.display = 'none';		
      scwin.f_openCommonPopUp(4, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
    }
  }
};

//-------------------------------------------------------------------------
// 조회조건에 따른 팝업창 띄우기
//-------------------------------------------------------------------------	
scwin.f_ChangPopUp = function (flag) {
  if (flag == "1") {
    if (acb_qryConKnd2.getValue() == "품명") {
      scwin.f_chkOpenCommonPopUp(ed_qryConNm2, ed_qryConCd2, 11, false);
    } else if (acb_qryConKnd2.getValue() == "품목") {
      scwin.f_chkOpenCommonPopUp(ed_qryConNm2, ed_qryConCd2, 13, false);
    } else if (acb_qryConKnd2.getValue() == "화종") {
      scwin.f_chkOpenCommonPopUp(ed_qryConNm2, ed_qryConCd2, 12, false);
    } else if (acb_qryConKnd2.getValue() == "BL") {
      scwin.f_chkOpenCommonPopUp(ed_qryConNm3, ed_qryConCd3, 10, false);
    } else if (acb_qryConKnd2.getValue() == "CNTR") {
      scwin.f_chkOpenCommonPopUp(ed_qryConNm3, ed_qryConCd3, 17, false);
    }
  } else if (flag == "2") {
    if (acb_transDst.getValue() == "권역") {
      scwin.f_chkOpenCommonPopUp(ed_onWrkPlNm, ed_onWrkPlCd, 15, false);
    } else if (acb_transDst.getValue() == "작업장") {
      scwin.f_chkOpenCommonPopUp(ed_onWrkPlNm, ed_onWrkPlCd, 8, false);
    }
  } else if (flag == "3") {
    if (acb_transDst.getValue() == "권역") {
      scwin.f_chkOpenCommonPopUp(ed_offWrkPlNm, ed_offWrkPlCd, 16, false);
    } else if (acb_transDst.getValue() == "작업장") {
      scwin.f_chkOpenCommonPopUp(ed_offWrkPlNm, ed_offWrkPlCd, 9, false);
    }
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) {
    if (pairObj.id == 'ed_lineNm') {
      scwin.f_RetrieveFormulasellitem(ed_lineCd.getValue());
    }
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    await scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    await scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var clntNo = ed_bilgClntNo.getValue();
  switch (disGubun) {
    case 1:
      //청구부서코드팝업			
      await udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      //청구처코드팝업			
      await udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;

    // case 4:
    //     // 품명코드 팝업			
    //     rtnList = cfCommonPopUp(
    //         "retrieveCommInfo"
    //         ,pCode.trim()
    //         ,pName
    //         ,pClose
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,",,4,,"
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,pAllSearch
    //         ,"품명,품명코드,품명");	  				  			

    //     break;

    // case 5:
    //     // 화종코드 팝업			
    //     rtnList = cfCommonPopUp(
    //         "retrieveKcgInfo",pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);	  				  			

    //     cfSetReturnValue(rtnList, ed_kcgCd, ed_kcgNm);  //화종코드, 화종명				
    //     break;

    case 6:
      // 라인코드 팝업
      udc_line.cfCommonPopUp(scwin.udc_line_CallBack, pCode.trim(), "", pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;

    // case 7:
    //     // 선박코드 팝업			
    //     rtnList = cfCommonPopUp(
    //         "retrieveVsslCdInfo"
    //         ,pCode.trim()
    //         ,pName
    //         ,pClose
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,null
    //         ,pAllSearch
    //         ,null);	  				  			

    // cfSetReturnValue(rtnList, ed_vsslCd, ed_vsslNm);  // 선박코드, 선박명				
    // break;

    case 8:
      // 작업장코드 팝업		
      udc_onWrkPl.setSelectId("retrieveWrkPlInfo");
      udc_onWrkPl.cfCommonPopUp(scwin.udc_onWrkPl_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 9:
      // 작업장코드 팝업		
      udc_offWrkPl.setSelectId("retrieveWrkPlInfo");
      udc_offWrkPl.cfCommonPopUp(scwin.udc_offWrkPl_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 10:
      // B/L코드 팝업			
      udc_qryCon3.setSelectId("retrieveBlNoList");
      udc_qryCon3.cfCommonPopUp(scwin.udc_qryCon3_CallBack, pCode.trim(), pName, pClose, null, "MRN, H B/L, 컬럼3, 컬럼4", null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 11:
      // 품명코드 팝업	
      param = "2,4,,," + "";
      parma1 = "";
      param2 = ed_qryConCd2.getValue();
      //pClose = "T";
      pAllSearch = "F";
      udc_qryCon2.setSelectId("retrieveCommInfo");
      udc_qryCon2.cfCommonPopUp(scwin.udc_qryCon2_CallBack, parma1, param2, "T", "3", "품목／품명코드,품목／품명,구분", "120,170,70", "4,5,6,7,8,9,10", param, "440", "500", null, null, null, null, "품목／품명,품목／품명코드,품목／품명");
      break;
    case 12:
      // 화종코드 팝업	
      udc_qryCon2.setSelectId("retrieveKcgInfo");
      udc_qryCon2.cfCommonPopUp(scwin.udc_qryCon2_CallBack, pCode.trim(), pName, pClose, null, null, null, null, "1", null, null, null, null, null, pAllSearch, null);
      break;
    case 13:
      // 품목코드 팝업

      param = "2,4,,," + "";
      parma1 = "";
      param2 = ed_qryConCd2.getValue();
      //pClose = "T";
      pAllSearch = "F";
      udc_qryCon2.setSelectId("retrieveCommInfo");
      udc_qryCon2.cfCommonPopUp(scwin.udc_qryCon2_CallBack, parma1, param2, "T", "3", "품목／품명코드,품목／품명,구분", "120,170,70", "4,5,6,7,8,9,10", param, "440", "500", null, null, null, null, "품목／품명,품목／품명코드,품목／품명");
      break;
    case 14:
      // CNTR-NO코드 팝업			
      rtnList = cfCommonPopUp("retrieveConteinerNo", pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm); // CNTR-NO코드, CNTR-NO명
      break;
    case 15:
      // 권역코드 팝업		
      udc_onWrkPl.setSelectId("retrieveDistrictList");
      udc_onWrkPl.cfCommonPopUp(scwin.udc_onWrkPl_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 16:
      // 권역코드 팝업
      udc_offWrkPl.setSelectId("retrieveDistrictList");
      udc_offWrkPl.cfCommonPopUp(scwin.udc_offWrkPl_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 17:
      // CNTR-NO코드 팝업			
      udc_qryCon3.setSelectId("retrieveConteinerNo");
      udc_qryCon3.cfCommonPopUp(scwin.udc_qryCon3_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 18:
      //청구처코드팝업			
      rtnList = cfCommonPopUp("retrieveClntInfo",
      //pSelectID
      pCode,
      //pCode
      pName,
      //pName
      pClose,
      //pWinCloseTF
      "9",
      //pDispCnt
      "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,",
      //pTitle
      "100,100,0,120,100,0,100,100,100,0",
      //pWidth
      "3,10",
      //pHidden
      ",,CTRT",
      //pWhere
      "800",
      //pW
      "600",
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      null,
      //pAllSearchTF - 전체검색허용여부	("F")
      "청구 거래처,거래처코드,거래처명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      null //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      );
      cfSetReturnValue(rtnList, ed_lineCd, ed_lineNm); // 청구처코드, 청구처명
      if (rtnList != undefined) {
        if (rtnList[0] == "100002" || rtnList[0] == "100003") {
          //특정거래명세유형 세팅
          scwin.f_SetFmalPattern("B1");
        } else if (rtnList[0] == "100001") {
          scwin.f_SetFmalPattern("A4");
        }
      }
      break;
    case 19:
      //매출부서코드팝업			
      udc_sellLodept.cfCommonPopUp(scwin.udc_sellLodept_CallBack, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 20:
      // 등록자
      udc_reg.cfCommonPopUp(scwin.udc_reg_CallBack // XML상의 SELECT ID	
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
    case 21:
      // 수정자
      udc_mod.cfCommonPopUp(scwin.udc_mod_CallBack // XML상의 SELECT ID	
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
      , "수정자,사용자ID,사용자명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 오더 조회 
//------------------------------------------------------------------------- 
scwin.ed_qryConCd_onClick = function (e) {
  scwin.f_QryConPopUp();
};

//-------------------------------------------------------------------------
// 오더 조회 팝업창 
//------------------------------------------------------------------------- 
scwin.f_OrderPopUp = async function () {
  let opts = {
    id: "fs_204_02_55p.jsp",
    popupName: "오더 조회",
    modal: true,
    // 모달 여부
    title: "Win pop",
    width: 1280,
    height: 630
  };
  //상차요청번호 Pop up

  let pURL = "/ui/ds/fs/bilg/fs_204_02_55p.xml";
  let arrParam = "";
  let returnValue = await $c.win.openPopup($p, pURL, opts, arrParam);
  if (returnValue != undefined) {
    ed_bilgLodeptCd.setValue(returnValue[0]);
    ed_bilgClntNo.setValue(returnValue[1]);
    scwin.ed_lineCd = returnValue[2];
    ed_qryConCd.setValue(returnValue[3]);
    scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
    scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
  }
};

//-------------------------------------------------------------------------
// 매출항목 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveFormulasellitem = function (lineCd) {
  dma_formulasellitemlist_con.set("bilgLoofcCd", ed_bilgLodeptCd.getValue());
  dma_formulasellitemlist_con.set("fmlaPatternCd", acb_fmlaPatternCd.getValue());
  dma_formulasellitemlist_con.set("fmlaClsCd", scwin.fmlaClsCd);
  if (lineCd == '') {
    dma_formulasellitemlist_con.set("clntNo", "0");
  } else {
    dma_formulasellitemlist_con.set("clntNo", "0");
  }
  $c.sbm.execute($p, sbm_formulasellitemlist_retrieve);
};

//-------------------------------------------------------------------------
// 조회조건 일자 / 오더번호 변경시
//-------------------------------------------------------------------------
scwin.acb_qryConKnd_onviewchange = function (info) {
  if (acb_qryConKnd.getValue() == "배차") {
    div_qryConKnd1.setStyle("display", "block");
    div_qryConKnd2.setStyle("display", "none");
  } else if (acb_qryConKnd.getValue() == "청구인식일") {
    div_qryConKnd1.setStyle("display", "block");
    div_qryConKnd2.setStyle("display", "none");
  } else if (acb_qryConKnd.getValue() == "오더일자") {
    div_qryConKnd1.setStyle("display", "block");
    div_qryConKnd2.setStyle("display", "none");
  } else if (acb_qryConKnd.getValue() == "오더") {
    div_qryConKnd2.show("block");
    div_qryConKnd1.setStyle("display", "none");
    div_qryConKnd2.setStyle("display", "block");
  } else if (acb_qryConKnd.getValue() == "CNTR") {
    div_qryConKnd1.setStyle("display", "none");
    div_qryConKnd2.setStyle("display", "block");
  }
  ed_qryConCd.setValue("");
};

//-------------------------------------------------------------------------
// 조회조건 일자 / 품명, 화종, BL, CNTR
//-------------------------------------------------------------------------
scwin.acb_qryConKnd2_onchange = function (info) {
  if (acb_qryConKnd2.getValue() == "BL") {
    div_qryConKnd4.setStyle("display", "none");
    div_qryConKnd5.setStyle("display", "block");
  } else if (acb_qryConKnd2.getValue() == "CNTR") {
    div_qryConKnd4.setStyle("display", "none");
    div_qryConKnd5.setStyle("display", "block");
  } else {
    div_qryConKnd4.setStyle("display", "block");
    div_qryConKnd5.setStyle("display", "none");
  }
  ed_qryConCd2.setValue("");
  ed_qryConNm2.setValue("");
  ed_qryConCd3.setValue("");
  ed_qryConNm3.setValue("");
};

//-------------------------------------------------------------------------
// CERTI 조회
//-------------------------------------------------------------------------
scwin.f_CertiRetrieve = async function () {
  // 링크조회시

  if (scwin.bilgLodeptCd != undefined && scwin.bilgLodeptCd != ed_bilgLodeptCd.getValue()) {
    ed_bilgLodeptCd.setValue(scwin.bilgLodeptCd);
    udc_bilgLodept.cfCommonPopUpAsync(scwin.udc_bilgLodept_CallBack, ed_bilgLodeptCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, "F", null);
    // await scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
  }
  if (scwin.certiNo != undefined && scwin.certiNo != ed_certiNo.getValue()) {
    ed_certiNo.setValue(scwin.certiNo);
  }

  // ed_bilgLodeptCd.setValue(scwin.bilgLodeptCd);			
  // ed_certiNo.setValue(scwin.certiNo);

  //validation check        
  if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_certiNo, ica_confirmDt]))) {
    return;
  }
  if (ed_bilgLodeptCd.getValue() != "") {
    dma_orderselling_con.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  } else {
    dma_orderselling_con.set("bilgLodeptCd", scwin.bilgLodeptCd);
  }
  if (scwin.certiNo == "") {
    dma_orderselling_con.set("certiNo", ed_certiNo.getValue());
  } else {
    dma_orderselling_con.set("certiNo", scwin.certiNo);
  }
  dma_orderselling_con.set("certiNo", ed_certiNo.getValue());
  if (scwin.pgmId == "fs_202_04_01b.jsp" || scwin.pgmId == "fs_202_05_01b.jsp") {
    if (cbx_sumDc.getValue() == "1") {
      dma_orderselling_con.set("sumDc", "Y");
    } else {
      dma_orderselling_con.set("sumDc", "N");
    }
  }

  // scwin.certiNo = "";
  // scwin.bilgLodeptCd = "";
  await $c.sbm.execute($p, sbm_certi_retrieve);

  // link = ""; 							// 링크구분자 초기화
  // ds_certicommonsavepost.ClearData();
};
scwin.acb_transDst_onchange = function (info) {
  ed_onWrkPlCd.setValue("");
  ed_offWrkPlCd.setValue("");
  ed_onWrkPlNm.setValue("");
  ed_offWrkPlNm.setValue("");
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_bilgLodeptCd, ed_bilgLodeptNm, ed_bilgClntNo, ed_bilgClntNm, acb_qryConKnd, ed_qryConDtFm, ed_qryConDtTo, ed_qryConCd, acb_impExpDomesticClsCd]);
  rd_transCargoClsCd.setValue("C");
  rd_prebilgYn.setValue("0");
};

//-------------------------------------------------------------------------
// 조회 서브미션 1
//-------------------------------------------------------------------------
scwin.sbm_appendrow_submitdone = function (e) {
  ed_bilgLodeptCd.focus();
  ed_bilgClntNo.focus();
  if (ds_certicommon.getRowCount() > 0) {
    scwin.appflag = "TRUE";
    $c.gus.cfDisableKeyData($p);
  } else {
    // 사용이 가능할지 확인 필요
    scwin.f_clearCerti();
    $c.gus.cfEnableKeyData($p);
  }
};

//-------------------------------------------------------------------------
// 조회조건 서브미션 2
//-------------------------------------------------------------------------
scwin.sbm_orderselling_submitdone = function (e) {
  ed_bilgLodeptCd.focus();
  ed_bilgClntNo.focus();
  if (ds_certicommon.getRowCount() > 0) {
    scwin.addflag = "REG";
    $c.gus.cfDisableKeyData($p);
    ed_certiNo.setValue("");
    scwin.f_sumAmt();
  } else {
    // 사용이 가능할지 확인 필요
    scwin.f_ClearCerti();
    $c.gus.cfEnableKeyData($p);
  }
};

//-------------------------------------------------------------------------
// 금액 계산
//-------------------------------------------------------------------------
scwin.f_sumAmt = function () {
  var spplyAmtFcrc = 0;
  var spplyAmt = 0;
  var totAmt = 0;
  var fireInsrRateAmt = 0;
  var totVol = 0;
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      spplyAmtFcrc = spplyAmtFcrc + parseInt(ds_certidetail.getCellData(i, "spplyAmtFcrc"));
      // spplyAmtFcrc = spplyAmtFcrc + Number(ds_certidetail.getCellData(i, "spplyAmtFcrc"));			
      if (ds_certidetail.getCellData(i, "sellYn") == "0") {
        fireInsrRateAmt = fireInsrRateAmt + parseInt(ds_certidetail.getCellData(0, "spplyAmt"));
        // fireInsrRateAmt = fireInsrRateAmt + Number(ds_certidetail.getCellData(0, "spplyAmt"));				
      } else {
        spplyAmt = spplyAmt + parseInt(ds_certidetail.getCellData(i, "spplyAmt"));
        // spplyAmt        = spplyAmt + Number(ds_certidetail.getCellData(i, "spplyAmt"));				
      }
      totAmt = totAmt + parseInt(ds_certidetail.getCellData(i, "totAmt"));
      totVol = totVol + parseInt(ds_certidetail.getCellData(i, "sellVol"));
      // totAmt       = totAmt   + Number(ds_certidetail.getCellData(i, "totAmt"));
      // totVol       = totVol + Number(ds_certidetail.getCellData(i, "sellVol"));				
    }
  }
  spplyAmtFcrc = Math.round(spplyAmtFcrc * 100) / 100; // 소수점 셋째 자리에서 반올림처리 (53.69*120 결과가 6442.79999999로 나오는 경우에 반올림 처리 해 줄 수있도록 함 )
  ed_spplyAmtFcrc.setValue(spplyAmtFcrc);
  ed_spplyAmt.setValue(spplyAmt);
  //ed_totAmt2.setValue(spplyAmt);
  scwin.ed_fireInsrRateAmt = fireInsrRateAmt;
  ed_totAmt.setValue(totAmt);
  ed_vatAmt.setValue(totAmt - spplyAmt - fireInsrRateAmt);
  if (ds_certicommon.getCellData(0, "crcCd") == "USD") {
    scwin.ed_diffAmt = spplyAmt - Math.floor(ds_certidetail.getCellData(0, "adptExchRt") * spplyAmtFcrc);
  } else {
    scwin.ed_diffAmt = 0;
  }
  if (ed_vatAmt.getValue() == 0) {
    ed_vatAmtDiff.setValue("0");
  } else {
    ed_vatAmtDiff.setValue(totAmt - spplyAmt - fireInsrRateAmt - Math.floor(spplyAmt * 0.1));
  }
  ed_diffVolAmt.setValue(spplyAmt - Math.round(ds_certidetail.getCellData(0, "sellUpr") * totVol));
};

//-------------------------------------------------------------------------
// 조회 데이터 로드시
//-------------------------------------------------------------------------
scwin.ds_certicommon_ondataload = function () {
  // ed_bilgLodeptCd.focus();
  // ed_bilgClntNo.focus();
  if (ds_certicommon.getTotalRow() > 0) {
    ed_dtl_bilgLodeptNm.setValue(ds_certicommon.getCellData(0, "bilgLodeptNm"));
    ed_dtl_bilgClntNo.setValue(ds_certicommon.getCellData(0, "bilgClntNo"));
    ed_dtl_bilgClntNm.setValue(ds_certicommon.getCellData(0, "bilgClntNm"));
    ica_confirmDt.setValue($c.gus.cfIsNull($p, ds_certicommon.getCellData(0, "confirmDt")) ? scwin.strCurDate : ds_certicommon.getCellData(0, "confirmDt"));
    ed_dtl_taxnClsNm.setValue(ds_certicommon.getCellData(0, "taxnClsNm"));
    ed_dtl_assgnBondZoneNm.setValue(ds_certicommon.getCellData(0, "assgnBondZoneNm"));
    ed_dtl_blNo.setValue(ds_certicommon.getCellData(0, "blNo"));
    ed_dtl_cntWtCbm.setValue(ds_certicommon.getCellData(0, "cntWtCbm"));
    ed_spplyAmt.setValue(ds_certicommon.getCellData(0, "spplyAmt"));
    ed_vatAmt.setValue(ds_certicommon.getCellData(0, "vatAmt"));
    ed_totAmt.setValue(ds_certicommon.getCellData(0, "totAmt"));
    rd_bankAcntNoInscrpYn.setValue(ds_certicommon.getCellData(0, "bankAcntNoInscrpYn"));
    scwin.dtl_lineCd = ds_certicommon.getCellData(0, "lineCd") + "/" + ds_certicommon.getCellData(0, "bilgClntNm");
    scwin.dtl_billTitleNm = ds_certicommon.getCellData(0, "billTitleNm");
    if (ed_certiNo.getValue() == "") {
      acb_dtl_fmlaPatternCd.setValue(acb_fmlaPatternCd.getValue());
    } else {
      acb_dtl_fmlaPatternCd.setValue(ds_certicommon.getCellData(0, "fmlaPatternCd"));
    }
    ed_dtl_summary.setValue(ds_certicommon.getCellData(0, "summary"));
    ed_dtl_sellVatNo.setValue(ds_certicommon.getCellData(0, "sellVatNo"));
    scwin.dtl_upperCertiNo = ds_certicommon.getCellData(0, "upperCertiNo");
    rd_ediSndTrgtYn.setValue(ds_certicommon.getCellData(0, "ediSndTrgtYn"));
    ed_dtl_offsetVatNo.setValue(ds_certicommon.getCellData(0, "offsetVatNo"));
    ed_dtl_dcsnClsCdNm.setValue(ds_certicommon.getCellData(0, "dcsnClsCdNm"));
    ed_dtl_offsetNo1.setValue(ds_certicommon.getCellData(0, "offsetNo1"));
    scwin.dtl_offsetUpperCertiNo = ds_certicommon.getCellData(0, "offsetUpperCertiNo");

    //EDI전송여부 설정
    if (ed_certiNo.getValue() == "") {
      if (ds_certicommon.getCellData(0, "ediClntYn") == "Y") {
        rd_ediSndTrgtYn.setDisabled(false);
      } else {
        rd_ediSndTrgtYn.setDisabled(true);
      }
    } else {
      if (ds_certicommon.getCellData(0, "ediClntYn") == "Y") {
        if (ds_certicommon.getCellData(0, "ediSndTrgtYn") == 1) {
          rd_ediSndTrgtYn.setDisabled(true);
        } else {
          rd_ediSndTrgtYn.setDisabled(false);
        }
      } else {
        rd_ediSndTrgtYn.setDisabled(true);
      }
    }
    scwin.ed_fireInsrRateAmt = ds_certicommon.getCellData(0, "fireInsrRateAmt");
    ed_dtl_bilgClntNo.setValue(ds_certicommon.getCellData(0, "bilgClntNo"));
    scwin.rd_selTsVsslCd = "F";
  }
};

//-------------------------------------------------------------------------
// 조회 데이터 로드시
//-------------------------------------------------------------------------
scwin.ds_certidetail_ondataload = function () {
  let rowCnt = ds_certidetail.getTotalRow();
  spa_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if (scwin.delflag != "DEL") {
      $c.win.alert($p, MSG_CM_WRN_002);
    }
    $c.gus.cfDisableBtnOnly($p, [btn_MySave, btn_Delete]);
  } else {
    scwin.f_SetCertiCommon(ds_certidetail);
  }
  // gr_certidetail.ReDraw = "True";
  gr_certidetail.setFocusedCell(0, 0);
  if (rd_transCargoClsCd.getValue() == "B") {
    gr_certidetail.setColumnVisible("invoiceNo", true);
  } else {
    gr_certidetail.setColumnVisible("invoiceNo", false);
  }
  let options = {
    sortIndex: "certiInscrpSellItemNm sellCommNo commNm wrkStDt wrkEndDt retrvDt shippingDt transDst blNo odrNo sellLodeptCd",
    sortOrder: "0 0 0 0 0 0 0 0 0 0 0"
  };
  ds_certidetail.multisort(options);
  scwin.f_sumAmt();
};

//-------------------------------------------------------------------------
// 추가구분 체크시 조회되는 데이터
//-------------------------------------------------------------------------
scwin.ds_appendrow_ondataload = function () {
  let rowcnt = ds_certidetail.getTotalRow();
  if (ds_certidetail.getTotalRow() == 0 && rowcnt == 0) {
    if (scwin.delflag != "DEL") {
      $c.win.alert($p, MSG_CM_WRN_002);
    }
    $c.gus.cfDisableBtnOnly($p, [btn_MySave, btn_Delete]);
  } else {
    scwin.f_SetCertiCommon(ds_appendrow);
    var app_mod = '';
    // gr_certidetail.data = '';
    for (var app_idx = 0; app_idx < ds_appendrow.getTotalRow(); app_idx++) {
      app_mod = '';
      for (var org_idx = 0; org_idx < ds_certidetail.getTotalRow(); org_idx++) {
        if (ds_certidetail.getCellData(org_idx, "odrNo") == ds_appendrow.getCellData(app_idx, "odrNo") && ds_certidetail.getCellData(org_idx, "sellSeq") == ds_appendrow.getCellData(app_idx, "sellSeq")) {
          ds_certidetail.setJSON(ds_appendrow.getAllJSON());
          app_mod = '수정';
          break;
        }
      }
      if (app_mod != '수정') {
        if (ds_certidetail.getTotalRow() < 1) {
          ds_certidetail.setJSON(ds_appendrow.getAllJSON());
        }
        let insertRow = ds_certidetail.insertRow();
        ds_certidetail.setRowJSON(insertRow, ds_appendrow.getRowJSON(app_idx));
        ds_certidetail.setCellData(insertRow, "certiNo", ed_certiNo.getValue());
      }
    }
  }
  scwin.f_sumAmt();
  spa_totalRows.setValue(ds_certidetail.getTotalRow());
};

//-------------------------------------------------------------------------
// 상세데이타 조회 후 공통화면 세팅
//-------------------------------------------------------------------------
scwin.f_SetCertiCommon = function (ds_certidetail) {
  if (ed_dtl_sellVatNo.getValue() != "" || scwin.dtl_upperCertiNo != "" && scwin.dtl_upperCertiNo != 0) {
    gr_certidetail.setReadOnly("grid", true);
    $c.gus.cfDisableBtnOnly($p, [btn_MySave, btn_Delete]);
  } else {
    gr_certidetail.setReadOnly("grid", false);
    $c.gus.cfEnableBtnOnly($p, [btn_MySave, btn_Delete]);
  }
  if (ds_certidetail.getCellData(0, "sellGoodsPatternCd") == "01") {
    gr_certidetail.setHeaderValue('commNm', "CNTR-NO");
    gr_certidetail.setColumnVisible('unitCd', false);
  } else {
    gr_certidetail.setHeaderValue('commNm', "품명명");
    gr_certidetail.setColumnVisible('unitCd', true);
  }

  //세부 SIZE 값 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (i >= 1) {
      if (ds_certidetail.getCellData(i, "cntrSizCd") == ds_certidetail.getCellData(i - 1, "cntrSizCd")) {
        ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
      } else {
        ds_certicommon.setCellData(0, "cntrSizCd", "");
        break;
      }
    } else {
      ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
    }
  }

  //세부 TYPE 값 세팅				
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (i >= 1) {
      if (ds_certidetail.getCellData(i, "cntrTypCd") == ds_certidetail.getCellData(i - 1, "cntrTypCd")) {
        ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
      } else {
        ds_certicommon.setCellData(0, "cntrTypCd", "");
        break;
      }
    } else {
      ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
    }
  }

  //세부 E/F 값 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (i >= 1) {
      if (ds_certidetail.getCellData(i, "fullEmptyClsCd") == ds_certidetail.getCellData(i - 1, "fullEmptyClsCd")) {
        ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
      } else {
        ds_certicommon.setCellData(0, "fullEmptyClsCd", "");
        break;
      }
    } else {
      ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
    }
  }

  //세부 환종 값 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "crcCd") == 'KRW') {
      ds_certicommon.setCellData(0, "crcCd", "KRW");
    } else {
      ds_certicommon.setCellData(0, "crcCd", "USD");
      break;
    }
  }

  //세부 B/L-NO 값 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (i >= 1) {
      if (ds_certidetail.getCellData(i, "blNo") == ds_certidetail.getCellData(i - 1, "blNo")) {
        ds_certicommon.setCellData(0, "blNo", ds_certidetail.getCellData(i, "blNo"));
      } else {
        ds_certicommon.setCellData(0, "blNo", '');
        break;
      }
    } else {
      ds_certicommon.setCellData(0, "blNo", ds_certidetail.getCellData(i, "blNo"));
    }
  }

  //세부 입출항일 값 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (i >= 1) {
      if (ds_certidetail.getCellData(i, "arDepPortDt") == ds_certidetail.getCellData(i - 1, "arDepPortDt")) {
        ds_certicommon.setCellData(0, "arDepPortDt", ds_certidetail.getCellData(i, "arDepPortDt"));
      } else {
        ds_certicommon.setCellData(0, "arDepPortDt", '');
        break;
      }
    } else {
      ds_certicommon.setCellData(0, "arDepPortDt", ds_certidetail.getCellData(i, "arDepPortDt"));
    }
  }
  scwin.dtl_size = ds_certicommon.getCellData(0, "cntrSizCd") + "/" + ds_certicommon.getCellData(0, "cntrTypCd") + "/" + ds_certicommon.getCellData(0, "fullEmptyClsCd");
  scwin.dtl_crcCd = ds_certicommon.getCellData(0, "crcCd");
  scwin.ed_adptExchRt = ds_certidetail.getCellData(0, "adptExchRt");
  scwin.dtl_vsslCd = ds_certidetail.getCellData(0, "vsslCd");
  scwin.dtl_portcnt = ds_certidetail.getCellData(0, "portcnt");
  ed_dtl_blNo.setValue(ds_certicommon.getCellData(0, "blNo"));
  scwin.ed_arDepPortDt = ds_certicommon.getCellData(0, "arDepPortDt");
  if (scwin.rd_selTsVsslCd == 'T') {
    if (ed_certiNo.getValue() == "") {
      scwin.dtl_vsslCd = ds_certidetail.getCellData(0, "vsslCdTo");
      scwin.dtl_portcnt = ds_certidetail.getCellData(0, "portcntTo");
    } else {
      scwin.dtl_vsslCd = ds_certicommon.getCellData(0, "inscrpVsslCd");
      scwin.dtl_portcnt = ds_certicommon.getCellData(0, "inscrpPortcnt");
    }
    scwin.dtl_FmTsVsslCd = ds_certidetail.getCellData(0, "vsslCdFrom") + '-' + ds_certidetail.getCellData(0, "portcntFrom");
    scwin.dtl_ToTsVsslCd = ds_certidetail.getCellData(0, "vsslCdTo") + '-' + ds_certidetail.getCellData(0, "portcntTo");
  } else {
    if (ed_certiNo.text == "") {
      scwin.dtl_vsslCd = ds_certidetail.getCellData(0, "vsslCdFrom");
      scwin.dtl_portcnt = ds_certidetail.getCellData(0, "portcntFrom");
    } else {
      scwin.dtl_vsslCd = ds_certicommon.getCellData(0, "inscrpVsslCd");
      scwin.dtl_portcnt = ds_certicommon.getCellData(0, "inscrpPortcnt");
    }
    scwin.dtl_FmTsVsslCd = ds_certidetail.getCellData(0, "vsslCdFrom") + '-' + ds_certidetail.getCellData(0, "portcntFrom");
    scwin.dtl_ToTsVsslCd = ds_certidetail.getCellData(0, "vsslCdTo") + '-' + ds_certidetail.getCellData(0, "portcntTo");
  }
};

//-------------------------------------------------------------------------
// 조건 서식구분 콤보 조회 - 거래명세서유형
//-------------------------------------------------------------------------
scwin.f_RetrieveFmalPattern = async function () {
  // console.log("================[2] scwin.f_RetrieveFmalPattern:"+scwin.count);
  if (scwin.count == 1) {
    return;
  }
  var p_bilgLodeptCd = ed_bilgLodeptCd.getValue() == "" ? dma_orderselling_con.get("bilgLodeptCd") : ed_bilgLodeptCd.getValue();
  var p_pgmId = scwin.pgmId;
  var p_fmlaClsCd = scwin.fmlaClsCd;
  dma_fmlapattern.set("bilgLodeptCd", p_bilgLodeptCd);
  dma_fmlapattern.set("pgmId", p_pgmId);
  dma_fmlapattern.set("fmlaClsCd", p_fmlaClsCd);
  await $c.sbm.execute($p, sbm_fmlapattern);
};

//-------------------------------------------------------------------------
// 상세 서식구분 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDtlFmalPattern = async function () {
  console.log("================[3] scwin.f_RetrieveDtlFmalPattern:" + scwin.count);

  // if(scwin.count == 1) {
  //     scwin.count = 0;
  //     return;
  // }
  var p_bilgLodeptCd = ed_bilgLodeptCd.getValue() == "" ? dma_orderselling_con.get("bilgLodeptCd") : ed_bilgLodeptCd.getValue();
  var p_pgmId = scwin.pgmId;
  var p_fmlaClsCd = scwin.fmlaClsCd;
  dma_dtlfmlapattern.set("bilgLodeptCd", p_bilgLodeptCd);
  dma_dtlfmlapattern.set("pgmId", p_pgmId);
  dma_dtlfmlapattern.set("fmlaClsCd", p_fmlaClsCd);
  $c.sbm.execute($p, sbm_Dtlfmlapattern);
};

//-------------------------------------------------------------------------
// certi 조회
//-------------------------------------------------------------------------
scwin.f_CertiNoPopUp = async function (e) {
  let opts = {
    id: "fs_204_02_51p.jsp",
    popupName: "거래명세서 팝업",
    modal: true,
    // 모달 여부
    title: "Win pop",
    width: 1180,
    height: 750
  };
  //상차요청번호 Pop up

  var strPath = "/ui/ds/fs/bilg/fs_204_02_51p.xml";
  var p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
  var p_bilgLodeptNm = ed_bilgLodeptNm.getValue();
  var p_pgmId = scwin.pgmId;
  var param = new Array(p_bilgLodeptCd, p_bilgLodeptNm, p_pgmId);
  if (ed_bilgLodeptCd.getValue() == "") {
    $c.win.alert($p, scwin.MSG_FS_WRN_011);
    ed_bilgLodeptCd.focus();
    return;
  }

  // $c.win.openPopup(url, opts, param, tp)
  let rtnList = await $c.win.openPopup($p, strPath, opts, param);
  if (rtnList != null) {
    ed_certiNo.setValue(rtnList);
    scwin.ed_dtl_oldCertiNo = rtnList;
    scwin.f_CertiRetrieve();
  }
};

//-------------------------------------------------------------------------
// N건선택 (shift 나 ctrl로 그리드 로우선택후 체크박스 표시)
//-------------------------------------------------------------------------		
scwin.f_multiChoice = function (e) {
  let focusedRow = gr_certidetail.getAllFocusedRowIndex();
  if (scwin.chkFlag) {
    for (i = 0; i < focusedRow.length; i++) {
      ds_certidetail.setCellData(focusedRow[i], "choice", "T");
    }
  } else {
    for (i = 0; i < focusedRow.length; i++) {
      ds_certidetail.setCellData(focusedRow[i], "choice", "F");
    }
    scwin.chkFlag = true;
    return;
  }
  scwin.chkFlag = false;
};

//-------------------------------------------------------------------------
// certi 조회 후 
//-------------------------------------------------------------------------	
scwin.sbm_certi_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    scwin.addflag = "MOD";
    scwin.f_sumAmt();
    $c.gus.cfDisableKeyData($p);
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 CNTR 데이터 포맷터
//-------------------------------------------------------------------------	
scwin.commNm = function (data, formattedData, rowIndex, colIndex) {
  let changeData = data.substring(0, 11);
  let colId = gr_certidetail.getColumnID(colIndex);

  // ds_certidetail.setCellData(rowIndex, colId, changeData);

  return changeData;
};

//-------------------------------------------------------------------------
// 그리드 CNTR 데이터 포맷터
//-------------------------------------------------------------------------	
scwin.cntrSizCd = function (data, formattedData, rowIndex, colIndex) {
  let commNm = ds_certidetail.getCellData(rowIndex, "commNm");
  let colid = gr_certidetail.getColumnID(colIndex);
  let len = commNm.length;
  let changeData = commNm.substring(len - 3, len);
  // ds_certidetail.setCellData(rowIndex, colid, changeData);

  return changeData;
};

//-------------------------------------------------------------------------
// 세금계산서 생성 f_SlipPopUp
//-------------------------------------------------------------------------
scwin.btn_SlipPopup_onClick = async function (e) {
  if (ds_certidetail.getModifiedIndex().length != 0) {
    $c.win.alert($p, scwin.MSG_FS_WRN_010);
    return;
  }
  if (scwin.addflag == "MOD") {
    // var style = "center:yes; dialogwidth:630px; dialogheight:735px; scroll:no; resizable:no; status:yes;";
    // var strPath = "fs_202_06_03p.jsp";
    // var pram = {};

    let opts = {
      id: "fs_202_06_03p.jsp",
      popupName: "세금계산서 생성",
      modal: true,
      // 모달 여부
      title: "Win pop",
      width: 850,
      height: 900
    };

    // 1번 분기는 받는곳에서 정의도 안되어있어서 사용되는지는 확인필요
    if (ds_certicommonsavepost.getTotalRow() > 0 && ed_dtl_sellVatNo.getValue() == '') {
      param = {
        "ds_certicommonsavepost": ds_certicommonsavepost,
        "ds_certiCommon": ds_certicommon,
        sellItemNm: ds_certidetail.getCellData(0, "certiInscrpSellItemNm")
      };
    } else {
      param = {
        "ds_certicommonsavepost": "",
        "ds_certiCommon": ds_certicommon,
        sellItemNm: ds_certidetail.getCellData(0, "certiInscrpSellItemNm")
      };
    }
    var returnValue = await $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_202_06_03p.xml", opts, param);
    if (returnValue.length == 0) {
      return;
    }
    if (returnValue[0] != undefined) {
      dtl_sellVatNo.value = returnValue[0];
    }
    if (returnValue[1] == "TRUE") {
      scwin.f_CertiRetrieve();
    }
  } else {
    $c.win.alert($p, scwin.MSG_FS_WRN_002);
    return;
  }
};

//-------------------------------------------------------------------------
// 이메일 등록
//------------------------------------------------------------------------- 
scwin.btn_regstEmail_onclick = function (e) {
  $c.win.openMenu($p, "전자세금계산서거래처관리 ", "/ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml", "fi_100_01_03b.xml");
};

//-------------------------------------------------------------------------
// 발행 버튼
//------------------------------------------------------------------------- 
scwin.btn_print_onclick = async function (e) {
  if (scwin.addflag != "MOD") {
    $c.win.alert($p, scwin.MSG_FS_WRN_002);
    return;
  }
  if (!(await $c.win.confirm($p, "인쇄하시겠습니까?"))) {
    return;
  }
  if (ds_certicommon.getCellData(0, "inscrpFmlaPatternCd") == undefined) {
    scwin.f_CertiRetrieve();
  }

  //할증 합계 표시 유무
  let sumCheck = "";
  if (cbx_sumCheck.getValue() == "1") {
    sumCheck = "Y";
  } else {
    sumCheck = "N";
  }

  //거래명세서 실작업중량 표기 유무
  let wt = "";
  if (cbx_wt.getValue() == "1") {
    wt = "Y";
  } else {
    wt = "N";
  }

  //거래명세서 항목란에 B/L 표기 유무
  let bl = "";
  if (cbx_bl.getValue() == "1") {
    bl = "Y";
  } else {
    bl = "N";
  }

  //오더-컨테이너별 합치기 유무
  let sumDc = "";
  if (cbx_sumDc.getValue() == "1") {
    sumDc = "Y";
  } else {
    sumDc = "N";
  }
  var odi1 = "01";
  var odi2 = ds_certicommon.getCellData(0, "inscrpFmlaPatternCd");

  //세관검사료, 단건, 수입통관운송
  if ("0028" == ds_certidetail.getCellData(0, "sellItemCd") && 1 == ds_certidetail.getRowCount() && "02" == odi2) {
    var data = {
      odiName: "fs_202_06_10_01_12.ozr",
      reportName: "/ds/fs/fs_202_06_10_01_12.ozr",
      odiParam: {
        bilgLodeptCd: ds_certicommon.getCellData(0, "bilgLodeptCd"),
        bilgClntNo: ed_dtl_bilgClntNo.getValue(),
        qryConKnd: "02",
        confirmDtFm: "",
        confirmDtTo: "",
        spplyDtFm: "",
        spplyDtTo: "",
        modId: "",
        printFg: "",
        certiAggregateFg: "",
        dcsnClsCd: "",
        certiNo: ed_certiNo.getValue(),
        fmlaClsCd: ds_certicommon.getCellData(0, "fmlaClsCd"),
        fmlaPatternCd: ds_certicommon.getCellData(0, "fmlaPatternCd"),
        upperFmlaClsCd: "",
        upperFmlaPatternCd: "",
        sellVatNo: "",
        spplyFg: acb_print.getValue(),
        inscrpFmlaPatternCd: ds_certicommon.getCellData(0, "inscrpFmlaPatternCd"),
        ozNo: acb_ozNo.getValue(),
        sumGbn: sumCheck,
        wtGbn: wt,
        blGbn: bl,
        sumDcGbn: sumDc
      },
      viewerParam: {},
      formParam: {}
    };
    if (cbx_bondedTransDeclar.getValue() == "1") {
      scwin.f_bondedTransDeclarPrint();
    }
    if (cbx_previewCheck.getValue() == "1") {
      // 미리보기 체크된 경우

      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'view' // silent, view,
      };
      // $c.ext.openOzReport(data, {});
      scwin.openPopup(data);
    } else if (cbx_printCheck.getValue() == "1") {
      // 인쇄옵션만 체크된 경우
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'view' // silent, view
      };
      $c.ext.printOzReport($p, data, {});
    }
  } else {
    var data = {
      odiName: "fs_202_06_10_" + odi1 + "_" + odi2,
      reportName: "/ds/fs/fs_202_06_10_" + odi1 + "_" + odi2 + ".ozr",
      odiParam: {
        bilgLodeptCd: ds_certicommon.getCellData(0, "bilgLodeptCd"),
        bilgClntNo: ed_dtl_bilgClntNo.getValue(),
        qryConKnd: "02",
        confirmDtFm: "",
        confirmDtTo: "",
        spplyDtFm: "",
        spplyDtTo: "",
        modId: "",
        printFg: "",
        certiAggregateFg: "",
        dcsnClsCd: "",
        certiNo: ed_certiNo.getValue(),
        fmlaClsCd: ds_certicommon.getCellData(0, "fmlaClsCd"),
        fmlaPatternCd: ds_certicommon.getCellData(0, "fmlaPatternCd"),
        upperFmlaClsCd: "",
        upperFmlaPatternCd: "",
        sellVatNo: "",
        spplyFg: acb_print.getValue(),
        inscrpFmlaPatternCd: ds_certicommon.getCellData(0, "inscrpFmlaPatternCd"),
        ozNo: acb_ozNo.getValue(),
        sumGbn: sumCheck,
        wtGbn: wt,
        blGbn: bl,
        sumDcGbn: sumDc
      },
      viewerParam: {},
      formParam: {}
    };
    if (cbx_bondedTransDeclar.getValue() == "1") {
      scwin.f_bondedTransDeclarPrint();
    }
    if (cbx_previewCheck.getValue() == "1") {
      // 미리보기 체크된 경우

      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'view' // silent, view
      };
      // $c.ext.openOzReport(data, {});
      scwin.openPopup(data);
    } else if (cbx_printCheck.getValue() == "1") {
      // 인쇄옵션만 체크된 경우
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'view' // silent, view
      };
      $c.ext.printOzReport($p, data, {});
    }
  }
};
scwin.openPopup = async function (data) {
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

//-------------------------------------------------------------------------
// 보세운송 신고필증 발행 / asis에서 발행부수를 같이 파라미터로 보내긴 하는데 선언 안되어있어서 스크립트 오류남
//-------------------------------------------------------------------------
scwin.f_bondedTransDeclarPrint = function () {
  var odi = "sd_401_05_01";

  // var ozMode = "";
  // if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") { // 인쇄옵션, 미리보기 둘다 체크된 경우
  //     ozMode = "preview";
  // } else if (cbx_printCheck.getValue() == "1") { // 인쇄옵션만 체크된 경우
  //     ozMode = "print";
  // } else if (cbx_previewCheck.getValue() == "1") { // 미리보기만 체크된 경우
  //     ozMode = "preview";
  // }4

  for (i = 0; i < ds_certidetail.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_certidetail.getCellData(i, "blNo"))) {
      continue;
    }
    if (i == 0 || i > 1 && ds_certidetail.getCellData(i, "blNo") != ds_certidetail.getCellData(i - 1, "blNo")) {
      var data = {
        odiName: odi,
        reportName: "/ds/sd/odrmgnt/odrprewrk/sd_401_05_01_2.ozr",
        odiParam: {
          blNo: ds_certidetail.getCellData(i, "blNo"),
          declarDt: "",
          declarSeq: ""
        }
        // ,
        // viewerParam: {
        //     useprogressbar: false, // 프로그레스바 쓸지 말지
        //     zoom: 100, // 배율 설정
        //     mode: ozMode
        // },
        // formParam: {

        // }
      };
      if (cbx_previewCheck.getValue() == "1") {
        // 미리보기 체크된 경우

        let opts = {
          type: 'viewer',
          // viewer, print, download
          printMode: 'view' // silent, view
        };
        $c.ext.openOzReport($p, data, opts);
      } else if (cbx_printCheck.getValue() == "1") {
        // 인쇄옵션만 체크된 경우
        let opts = {
          type: 'print',
          // viewer, print, download
          printMode: 'view' // silent, view
        };
        $c.ext.printOzReport($p, data, opts);
      } else {
        let opts = {
          type: 'viewer',
          // viewer, print, download
          printMode: 'view' // silent, view
        };
        $c.ext.openOzReport($p, data, opts);
      }
    }
  }
};
scwin.openPopup = async function (data) {
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

//-------------------------------------------------------------------------
// 신규 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_create_onclick = async function (e) {
  scwin.addflag = "REG";
  scwin.f_ClearCerti();
  $c.gus.cfEnableKeyData($p);
  ed_dtl_bilgLodeptNm.setDisabled(true);
  ed_dtl_offsetNo1.setDisabled(true);
  ed_dtl_sellVatNo.setDisabled(true);
  ed_dtl_offsetVatNo.setDisabled(true);
};

//-------------------------------------------------------------------------
// 거래명세서 공통정보 ,상세정보 Clear
//------------------------------------------------------------------------- 
scwin.f_ClearCerti = function () {
  var skipArr = new Array(3);
  skipArr[0] = ica_confirmDt.getValue();
  skipArr[1] = scwin.ed_arDepPortDt;
  skipArr[2] = ica_bilgIntendDt.getValue();

  // asis엔 있는데 DOM에 직접 접근하는 함수라서 제외
  // scwin.f_ClearData(ed_certiNo,ed_totAmt,skipArr);
  ds_certicommon.removeAll();
  ds_certidetail.removeAll();
  // $c.gus.cfShowTotalRows(spa_totalRow, 0);  	
  spa_totalRows.setValue("0");
  // 바인딩 불가
  ed_certiNo.setValue("");
  ed_dtl_bilgLodeptNm.setValue("");
  ed_dtl_bilgClntNo.setValue("");
  ed_dtl_bilgClntNm.setValue("");
  ed_dtl_taxnClsNm.setValue("");
  ed_spplyAmt.setValue("");
  ed_vatAmt.setValue("");
  ed_totAmt.setValue("");
  // rd_bankAcntNoInscrpYn.setValue("");
  acb_dtl_fmlaPatternCd.setValue("");
  ed_dtl_summary.setValue("");
  ed_dtl_sellVatNo.setValue("");
  // rd_ediSndTrgtYn.setValue("");
  ed_dtl_offsetVatNo.setValue("");
  ed_dtl_dcsnClsCdNm.setValue("");
  ed_dtl_offsetNo1.setValue("");
  scwin.ed_fireInsrRateAmt = "";
  ed_dtl_bilgClntNo.setValue("");
  scwin.ed_ediSndDt = "";
  scwin.rd_selTsVsslCd = "";
  scwin.ed_dtl_assgnBondZoneNm = "";
  scwin.dtl_blNo = "";
  scwin.dtl_cntWtCbm = "";
  scwin.dtl_lineCd = "";
  scwin.dtl_billTitleNm = "";
  scwin.dtl_upperCertiNo = "";
  scwin.dtl_offsetUpperCertiNo = "";
};

//-------------------------------------------------------------------------
// 저장 확인
//------------------------------------------------------------------------- 
scwin.btn_MySave_onclick = async function (e) {
  if (ds_certidetail.getTotalRow() == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_001, "DATA"));
    return;
  }

  //추가구분시 입력,수정 구분
  if (scwin.addflag != "MOD" && scwin.appflag == "TRUE") {
    scwin.addflag = "REG";
  } else if (scwin.addflag == "MOD" && scwin.appflag == "TRUE") {
    scwin.addflag = "MOD";
  }
  //삭제구분
  scwin.delflag = "";
  if (scwin.addflag == "REG") {
    if (!(await $c.gus.cfValidate($p, [ica_confirmDt, acb_dtl_fmlaPatternCd]))) return;
  } else if (scwin.addflag == "" || scwin.addflag == "MOD") {
    //validation check        
    if (!(await $c.gus.cfValidate($p, [ed_certiNo, ica_confirmDt, acb_dtl_fmlaPatternCd]))) return;
  }
  ds_certicommon.setCellData(0, "fmlaClsCd", scwin.fmlaClsCd);
  ds_certicommon.setCellData(0, "upperCertiNo", scwin.upperCertiNo);
  ds_certicommon.setCellData(0, "pldgMgntNo", scwin.pldgMgntNo);
  ds_certicommon.setCellData(0, "pgmId", scwin.pgmId);

  // 공통코드에 있어서 안됨
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (separation) {
  //날짜형식 체크
  if (!(await $c.gus.cfValidate($p, [ica_confirmDt]))) {
    return;
  }

  //거래명세서번호순번  Value 세팅
  var j = 0;
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certidetail.setCellData(i, "certiNoSeq", j);
      j = j + 1;
    }
  }
  if (j == 0) {
    $c.win.alert($p, MSG_FS_WRN_012);
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
  ds_certicommon.setCellData(0, "confirmDt", ica_confirmDt.getValue()); // 확인일자
  ds_certicommon.setCellData(0, "fmlaPatternCd", acb_dtl_fmlaPatternCd.getValue()); // 서식유형코드 
  ds_certicommon.setCellData(0, "bankAcntNoInscrpYn", rd_bankAcntNoInscrpYn.getValue()); // 계좌번호표기여부 
  ds_certicommon.setCellData(0, "summary", ed_dtl_summary.getValue()); // 적요 
  ds_certicommon.setCellData(0, "spplyAmt", ed_spplyAmt.getValue()); // 공급금액 
  ds_certicommon.setCellData(0, "fireInsrRateAmt", scwin.ed_fireInsrRateAmt); // 화재보험금액
  ds_certicommon.setCellData(0, "spplyAmtFcrc", scwin.ed_spplyAmtFcrc); // 공급금액_외화 
  ds_certicommon.setCellData(0, "vatAmt", ed_vatAmt.getValue()); // 부가세금액
  ds_certicommon.setCellData(0, "prebilgYn", rd_prebilgYn.getValue()); // 선청구여부					
  ds_certicommon.setCellData(0, "certiNo", ed_certiNo.getValue()); // 거래명세서번호
  ds_certicommon.setCellData(0, "oldCertiNo", scwin.dtl_oldCertiNo); // 거래명세서번호
  ds_certicommon.setCellData(0, "vsslCd", ds_certidetail.setCellData(0, "vsslCd")); // 선박코드
  ds_certicommon.setCellData(0, "portcnt", ds_certidetail.setCellData(0, "portcnt")); // 항차
  ds_certicommon.setCellData(0, "arDepPortDt", scwin.ed_arDepPortDt); // 입출항일자
  ds_certicommon.setCellData(0, "billTitleNm", scwin.dtl_billTitleNm); // BILLTITLE명 
  ds_certicommon.setCellData(0, "dcsnClsCd", scwin.dcsnClsCd); // 확정구분코드	

  //통화코드 Value 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
        ds_certicommon.setCellData(0, "crcCd", "KRW");
      } else {
        ds_certicommon.setCellData(0, "crcCd", ds_certidetail.getCellData(i, "crcCd"));
        break;
      }
    }
  }

  //적용환율 Value 비교/ 세팅
  var pre_i = 0;
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T" && ds_certidetail.getCellData(i, "crcCd") == "USD") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "adptExchRt") == ds_certidetail.getCellData(pre_i, "adptExchRt")) {
          ds_certicommon.setCellData(0, "adptExchRt", ds_certidetail.getCellData(i, "adptExchRt"));
          pre_i = i;
        } else {
          if (pre_i != 0) {
            //ds_certidetail.NameValue(0, "adptExchRt")하고 비교해서 제외
            ds_certicommon.setCellData(0, "adptExchRt", "0");
            $c.win.alert($p, scwin.MSG_FS_WRN_001);
            return;
          }
        }
      } else {
        pre_i = i;
        ds_certicommon.setCellData(0, "adptExchRt", ds_certidetail.setCellData(i, "adptExchRt"));
      }
    }
  }

  //환율적용일자 Value 세팅
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "crcCd") != "KRW") {
      ds_certicommon.setCellData(0, "exchRtAdptDt", ds_certidetail.getCellData(i, "exchRtAdptDt"));
      break;
    }
  }

  //수출입구분코드 Value 세팅	
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (i >= 1) {
      if (ds_certidetail.getCellData(i, "impExpDomesticClsCd") == ds_certidetail.getCellData(i - 1, "impExpDomesticClsCd")) {
        ds_certicommon.setCellData(0, "impExpDomesticClsCd", ds_certidetail.getCellData(i, "impExpDomesticClsCd"));
      } else {
        ds_certicommon.setCellData(0, "impExpDomesticClsCd", "");
        break;
      }
    } else {
      ds_certicommon.setCellData(0, "impExpDomesticClsCd", ds_certidetail.getCellData(i, "impExpDomesticClsCd"));
    }
  }

  //사업부문코드 Value 세팅	
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "sellGoodsPatternCd") == "01" || ds_certidetail.getCellData(i, "sellGoodsPatternCd") == "02") {
      ds_certicommon.setCellData(0, "transCargoClsCd", ds_certidetail.getCellData(i, "transCargoClsCd"));
      break;
    }
  }

  //SIZE코드 Value 세팅			
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "cntrSizCd") == ds_certidetail.getCellData(i - 1, "cntrSizCd")) {
          ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
        } else {
          ds_certicommon.setCellData(0, "cntrSizCd", '');
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "cntrSizCd", ds_certidetail.getCellData(i, "cntrSizCd"));
      }
    }
  }

  //TYPE코드 Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "cntrTypCd") == ds_certidetail.getCellData(i - 1, "cntrTypCd")) {
          ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
        } else {
          ds_certicommon.setCellData(0, "cntrTypCd", "");
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "cntrTypCd", ds_certidetail.getCellData(i, "cntrTypCd"));
      }
    }
  }

  // E/F코드 Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "fullEmptyClsCd") == ds_certidetail.getCellData(i - 1, "fullEmptyClsCd")) {
          ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
        } else {
          ds_certicommon.setCellData(0, "fullEmptyClsCd", "");
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "fullEmptyClsCd", ds_certidetail.getCellData(i, "fullEmptyClsCd"));
      }
    }
  }

  //MRN Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.setCellData(i, "mrn") == ds_certidetail.getCellData(i - 1, "mrn")) {
          ds_certicommon.setCellData(0, "mrn", ds_certidetail.getCellData(i, "mrn"));
        } else {
          ds_certicommon.setCellData(0, "mrn", "");
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "mrn", ds_certidetail.getCellData(i, "mrn"));
      }
    }
  }

  //MSN Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "msn") == ds_certidetail.getCellData(i - 1, "msn")) {
          ds_certicommon.setCellData(0, "msn", ds_certidetail.getCellData(i, "msn"));
        } else {
          ds_certicommon.setCellData(0, "msn", 0);
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "msn", ds_certidetail.getCellData(i, "msn"));
      }
    }
  }

  //HSN Value 세팅							
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (i >= 1) {
        if (ds_certidetail.getCellData(i, "hsn") == ds_certidetail.getCellData(i - 1, "hsn")) {
          ds_certicommon.setCellData(0, "hsn", ds_certidetail.getCellData(i, "hsn"));
        } else {
          ds_certicommon.setCellData(0, "hsn", 0);
          break;
        }
      } else {
        ds_certicommon.setCellData(0, "hsn", ds_certidetail.getCellData(i, "hsn"));
      }
    }
  }

  //모선코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "vsslCd", ds_certidetail.getCellData(i, "vsslCdFrom"));
      break;
    }
  }

  //항차코드 Value 세팅											
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "portcnt", ds_certidetail.getCellData(i, "portcntFrom"));
      break;
    }
  }

  //From모선코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "vsslCdFrom", ds_certidetail.getCellData(i, "vsslCdFrom"));
      break;
    }
  }

  //To모선코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "vsslCdTo", ds_certidetail.getCellData(i, "vsslCdto"));
      break;
    }
  }

  //From항차코드 Value 세팅											
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "portcntFrom", ds_certidetail.getCellData(i, "portcntFrom"));
      break;
    }
  }

  //To항차코드 Value 세팅											
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      ds_certicommon.setCellData(0, "portcntTo", ds_certidetail.getCellData(i, "portcntTo"));
      break;
    }
  }

  //표기선박코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (scwin.rd_selTsVsslCd == 'F') {
        ds_certicommon.setCellData(0, "inscrpVsslCd", ds_certidetail.getCellData(i, "vsslCdFrom"));
        break;
      } else if (scwin.rd_selTsVsslCd == 'T') {
        ds_certicommon.setCellData(0, "inscrpVsslCd", ds_certidetail.getCellData(i, "vsslCdTo"));
        break;
      }
    }
  }

  //표기항차코드 Value 세팅									
  for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
    if (ds_certidetail.getCellData(i, "choice") == "T") {
      if (scwin.rd_selTsVsslCd == 'F') {
        ds_certicommon.setCellData(0, "inscrpPortcnt", ds_certidetail.getCellData(i, "portcntFrom"));
        break;
      } else if (scwin.rd_selTsVsslCd == 'T') {
        ds_certicommon.setCellData(0, "inscrpPortcnt", ds_certidetail.getCellData(i, "portcntTo"));
        break;
      }
    }
  }

  // ??
  // 01 : 원화확정, 02 : 외화확정, 03 : 원화외화 확정 - 환종 확정은 계약요율의 근거가 됨(채권관리 시 필요)
  if (ds_certicommon.getCellData(0, "taxnClsCd") == '01' || ds_certicommon.getCellData(0, "taxnClsCd") == '04') {
    ds_certicommon.setCellData(0, "bilgAmt", Number(ed_spplyAmt.getValue()) + Number(ed_vatAmt.getValue()));
    ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '01'); // 원화확정구분코드
    ds_certicommon.setCellData(0, "crcCd", 'KRW');
  } else {
    //원화확정구분코드 Value 세팅		 		
    for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
      if (ds_certidetail.getCellData(i, "choice") == "T") {
        if (i >= 1) {
          if (ds_certidetail.getCellData(i, "crcCd") == ds_certidetail.getCellData(i - 1, "crcCd")) {
            if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
              ds_certicommon.setCellData(0, "wcrcDcsnClsCd", "01");
            } else if (ds_certidetail.getCellData(i, "crcCd") == "USD") {
              ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '02');
            }
          } else {
            ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '03');
            break;
          }
        } else {
          if (ds_certidetail.getCellData(i, "crcCd", "KRW")) {
            ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '01');
          } else {
            ds_certicommon.setCellData(0, "wcrcDcsnClsCd", '02');
          }
        }
      }
    }

    // 청구금액, 외화청구금액, 청구금액외화 Value 세팅		 		
    var bilgAmt = 0;
    var fcrcBilgAmt = 0;
    var bilgAmtFcrc = 0;
    for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
      if (ds_certidetail.getCellData(i, "choice") == "T") {
        if (ds_certidetail.getCellData(i, "crcCd") == "KRW") {
          bilgAmt = bilgAmt + Number(ds_certidetail.getCellData(i, "spplyAmt"));
          ds_certicommon.setCellData(0, "bilgAmt", bilgAmt);
        } else if (ds_certidetail.getCellData(i, "crcCd") == "USD") {
          fcrcBilgAmt = fcrcBilgAmt + Number(ds_certidetail.getCellData(i, "spplyAmt"));
          bilgAmtFcrc = bilgAmtFcrc + Number(ds_certidetail.getCellData(i, "spplyAmtFcrc"));
          ds_certicommon.setCellData(0, "fcrcBilgAmt", fcrcBilgAmt);
          ds_certicommon.setCellData(0, "bilgAmtFcrc", bilgAmtFcrc);
        }
      }
    }
  }

  //EDI전송구분
  if (rd_ediSndTrgtYn.getValue() == "1") {
    //ds_certicommon.setCellData(0, "ediSndReqDt")  = "<%=strCurDate%>";
    ds_certicommon.setCellData(0, "ediSndTrgtYn", "1");
    ds_certicommon.setCellData(0, "ediSndClsCd", "0");
    for (i = 0; i < ds_certidetail.getTotalRow(); i++) {
      ds_certidetail.setCellData(i, "ediSndTrgtYn", "1");
      ds_certidetail.setCellData(i, "ediSndClsCd", "0");
    }
  }

  // ds_certidetail.UseChangeInfo = "false";
  // ds_certicommon.UseChangeInfo = "false";		

  if (separation == 'true') {
    scwin.f_SaveCertiSeparation();
  } else {
    //신규 입력
    if (scwin.addflag == "REG") {
      $c.sbm.setAction($p, sbm_certi_save, "/ds.fs.bilg.bilg.RegistCertiCMD.do");
      $c.sbm.execute($p, sbm_certi_save);
    } else if (scwin.addflag == "" || scwin.addflag == "MOD") {
      //수정
      $c.sbm.setAction($p, sbm_certi_save, "/ds.fs.bilg.bilg.UpdateCertiCMD.do");
      $c.sbm.execute($p, sbm_certi_save);
    }
  }
};

//-------------------------------------------------------------------------
// 저장 성공시 saveReg
//-------------------------------------------------------------------------
scwin.sbm_certi_saveReg_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    scwin.addflag = "REG";
    if (ds_certicommonsavepost.getRowCount() > 0) {
      ed_certiNo.setValue(ds_certicommonsavepost.getCellData(0, "certiNo"));
    }
    //cfEnableBtnOnly([bCreate2]);

    // scwin.delflag = "DEL"
    if (scwin.delflag == "DEL") {
      $c.win.alert($p, MSG_CM_INF_004);
      scwin.btn_create_onclick();
      scwin.delflag = "";
    } else {
      await $c.win.alert($p, MSG_CM_INF_001);
      await scwin.f_CertiRetrieve();
    }
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 성공시 saveUpdate
//-------------------------------------------------------------------------
scwin.sbm_certi_SaveUpdate_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    scwin.addflag = "MOD";
    if (ds_certicommonsavepost.getRowCount() > 0) {
      ed_certiNo.setValue(ds_certicommonsavepost.getRowCount(0, "certiNo"));
    }
    //cfEnableBtnOnly([bCreate2]);
    if (scwin.delflag == "DEL") {
      $c.win.alert($p, MSG_CM_INF_004);
      scwin.btn_create_onclick();
      scwin.delflag = "";
    } else {
      $c.win.alert($p, MSG_CM_INF_001);
      scwin.f_CertiRetrieve();
    }
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제 f_Delete
//------------------------------------------------------------------------- 
scwin.btn_Delete_onclick = async function (e) {
  if (ds_certidetail.getTotalRow() == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_004, "DATA"));
    return;
  }
  if (ed_certiNo.getValue() == "") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_004, "CERTI-NO"));
    return;
  }
  if (scwin.pgmId == "fs_202_04_01b.jsp" && ica_ediSndDt.getValue() != "") {
    if (!(await $c.win.confirm($p, scwin.MSG_FS_WRN_018))) {
      return;
    } else {
      ds_certicommon.setCellData(0, "certiNo", ed_certiNo.getValue());
      scwin.delflag = "DEL";
      $c.sbm.setAction($p, sbm_certi_save, "/ds.fs.bilg.bilg.DeleteCertiCMD.do");
      $c.sbm.execute($p, sbm_certi_save);
    }
  } else {
    if (!(await $c.win.confirm($p, MSG_CM_CRM_004))) {
      return;
    } else {
      ds_certicommon.setCellData(0, "certiNo", ed_certiNo.getValue());
      scwin.delflag = "DEL";
      $c.sbm.setAction($p, sbm_certi_save, "/ds.fs.bilg.bilg.DeleteCertiCMD.do");
      $c.sbm.execute($p, sbm_certi_save);
      // $c.sbm.execute(sbm_certi_delete);
    }
  }
};

//-------------------------------------------------------------------------
// 삭제 완료시
//------------------------------------------------------------------------- 
scwin.sbm_certi_delete_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    scwin.addflag = "MOD";
    if (ds_certicommonsavepost.getRowCount() > 0) {
      ed_certiNo.setValue(ds_certicommonsavepost.getRowCount(0, "certiNo"));
    }
    //cfEnableBtnOnly([bCreate2]);
    if (scwin.delflag == "DEL") {
      await $c.win.alert($p, MSG_CM_INF_004);
      await scwin.btn_create_onclick();
      scwin.delflag = "";
    } else {
      $c.win.alert($p, MSG_CM_INF_001);
      scwin.f_CertiRetrieve();
    }
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 클릭 이벤트
//------------------------------------------------------------------------- 
scwin.gr_certidetail_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "choice" && rowIndex >= 0) {
    scwin.f_sumAmt();
  }
};

//-------------------------------------------------------------------------
// 그리드 더블 클릭 이벤트
//------------------------------------------------------------------------- 
scwin.gr_certidetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let data = ds_certidetail.getCellData(rowIndex, columnId);
  let changeData = data.substring(0, 11);
  if (rowIndex >= 0) {
    if (columnId == "cntrNo" && ds_certidetail.getCellData(rowIndex, "cntrNo") != "") {
      scwin.f_cntrNoDetail(changeData);
    }
    if (columnId == "commNm" && ds_certidetail.getCellData(rowIndex, "commNm") != "") {
      scwin.f_cntrNoDetail(changeData);
    }
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 cntrNo 세부정보 확인 : 해당 cntrNo 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_cntrNoDetail = function (cntrNo) {
  let condition = {};
  let opts = {
    id: "taxPop",
    type: "",
    menuName: "컨테이너 화물추적"
  };
  var strCertiNoDetailUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml";
  var title = "컨테이너 화물추적";
  // 선택된 certiNo 정보 : bilgLodeptCd , certiNo

  condition = {
    cntrNo: cntrNo
  };
  $c.win.openMenu($p, title, strCertiNoDetailUrl, "as_102_01_02b.xml", condition, opts);
};

//-------------------------------------------------------------------------
// 그리드 셀 편집
//------------------------------------------------------------------------- 
scwin.gr_certidetail_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_certidetail.getColumnID(columnIndex);
  if (colid == "totAmt") {
    ds_certidetail.setCellData(rowIndex, "vatAmt", Number(ds_certidetail.getCellData(rowIndex, "totAmt")) - Number(ds_certidetail.getCellData(rowIndex, "spplyAmt")));
    scwin.f_sumAmt();
  }
  if (colid == "vatAmt") {
    ds_certidetail.setCellData(rowIndex, "totAmt", Number(ds_certidetail.getCellData(rowIndex, "spplyAmt")) + Number(ds_certidetail.getCellData(rowIndex, "vatAmt")));
    scwin.f_sumAmt();
  }
  if (colid == "spplyAmt") {
    if (ds_certicommon.getCellData(0, "taxnClsCd") == '01' || ds_certicommon.getCellData(0, "taxnClsCd") == '04') {
      ds_certidetail.setCellData(rowIndex, "vatAmt", Number(ds_certidetail.getCellData(rowIndex, "totAmt")) - Number(ds_certidetail.getCellData(rowIndex, "spplyAmt")));
    } else {
      ds_certidetail.setCellData(rowIndex, "vatAmt", "0");
    }
    ds_certidetail.setCellData(rowIndex, "totAmt", Number(ds_certidetail.getCellData(rowIndex, "spplyAmt")) - Number(ds_certidetail.getCellData(rowIndex, "vatAmt")));
    scwin.f_sumAmt();
  }
};

//-------------------------------------------------------------------------
// 거래명세서 유형 로드 및 값 변경시
//------------------------------------------------------------------------- 
scwin.sbm_fmlapattern_submitdone = async function (e) {
  // console.log("==========[2] scwin.sbm_fmlapattern_submitdone:"+ed_lineCd.getValue());
  if (scwin.certiNo != "" && scwin.link == "true") {
    //CERTI 조회 - fs_202_bilgcommon.jsp
    await scwin.f_CertiRetrieve();
  }

  //거래명세서일괄작성에서 호출시
  if (scwin.flag != "" && scwin.flag != undefined) {
    // dma_orderselling_con.setJSON(scwin.param.dma_orderselling_con);
    await scwin.f_wholeRetrieve();
  }
  scwin.f_RetrieveFormulasellitem(ed_lineCd.getValue());
};
scwin.acb_fmlaPatternCd_onchange = function (info) {
  scwin.f_RetrieveFormulasellitem(ed_lineCd.getValue());
};
scwin.orderFormat = function (data, formattedData, rowIndex, colIndex) {
  let odrNo = data;
  let sellSeq = ds_certidetail.getCellData(rowIndex, "sellSeq");
  return odrNo + "-" + sellSeq;
};
scwin.ds_fmlapattern_ondataload = function () {
  if (scwin.param.dma_orderselling_con != null) {
    acb_fmlaPatternCd.setValue(scwin.param.dma_orderselling_con.fmlaPatternCd);
    // console.log("=======[ds_fmlapattern_ondataload] fmlaPatternCd:"+dma_orderselling_con.get("fmlaPatternCd")+", acb_fmlaPatternCd:"+acb_fmlaPatternCd.getValue()+"::"+scwin.param.dma_orderselling_con.fmlaPatternCd);
  }
};
scwin.ds_dtlfmlapattern_ondataload = function () {
  if (scwin.param.dma_orderselling_con != null) {
    acb_dtl_fmlaPatternCd.setValue(scwin.param.dma_orderselling_con.fmlaPatternCd);
  }
};
scwin.gr_certidetail_onheaderclick = function (headerId) {
  scwin.f_sumAmt();
};

//-------------------------------------------------------------------------
// 저장, 수정, 삭제 모두 동일하게 진행함
//------------------------------------------------------------------------- 
scwin.sbm_certi_save_submitdone = async function (e) {
  scwin.addflag = "MOD";
  if (ds_certicommonsavepost.getTotalRow() > 0) {
    ed_certiNo.setValue(ds_certicommonsavepost.getCellData(0, "certiNo"));
  }
  //cfEnableBtnOnly([bCreate2]);
  if (scwin.delflag == "DEL") {
    await $c.win.alert($p, MSG_CM_INF_004);
    await scwin.btn_create_onclick();
    scwin.delflag = "";
  } else {
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_CertiRetrieve();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'flex_gvw',id:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',id:'udc_bilgLodept',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'4',validExpCode:'청구부서:yes',selectID:'retrieveOpDeptCdInfo','ev:onclickEvent':'scwin.udc_bilgLodept_onClick','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onChangeName',validTitle:'청구부서','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCode'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgClntNo',id:'udc_bilgClnt',nameId:'ed_bilgClntNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'6',validExpCode:'청구서:yes',selectID:'retrieveClntInfo','ev:onclickEvent':'scwin.udc_bilgClnt_onClick','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onChangeName',validTitle:'청구처','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCode'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w100 req',editType:'select',id:'acb_qryConKnd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label','ev:onviewchange':'scwin.acb_qryConKnd_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적일자'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'배차'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더일자'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구인식일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'청구인식일'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'div_qryConKnd1',class:'form-group'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:'div_qryConKnd2',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w120',editType:'select','ev:onkeyup':'scwin.onkeyup',id:'ed_qryConCd',maxlength:'15',objType:'Data',placeholder:'',style:'',title:'선조회항목',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.ed_qryConCd_onClick',id:'trigger9',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래명세서유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_fmlaPatternCd',search:'start',style:'',submenuSize:'auto',mandatory:'true','ev:oneditkeyup':'scwin.onkeyup',delimiter:'-',displayMode:'value delim label',allOption:'',chooseOption:'',ref:'',visibleRowNum:'20',selectedData:'false','ev:onviewchange':'scwin.acb_fmlaPatternCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_fmlapattern'},E:[{T:1,N:'w2:label',A:{ref:'fmlaNm'}},{T:1,N:'w2:value',A:{ref:'fmlaPatternCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_transCargoClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cntr'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control ',editType:'select',id:'acb_odrKndCd',search:'start',style:'width: 150px;',submenuSize:'auto',visibleRowNum:'20',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w120',editType:'select',id:'acb_impExpDomesticClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'form-control w100',editType:'select',id:'acb_qryConKnd2',ref:'',search:'start',style:'',submenuSize:'auto',displayMode:'label','ev:oneditkeyup':'scwin.onkeyup','ev:onchange':'scwin.acb_qryConKnd2_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'품명'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'품목'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화종코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'화종'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BL-NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CNTR-NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CNTR'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'div_qryConKnd4'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'8',editTypeCode:'select','ev:onviewchangeNameEvent':'scwin.udc_qryCon2_onviewchangeNameEvent',popupID:'',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_qryCon2_onclickEvent',allowCharCode:'A-Za-z0-9',codeId:'ed_qryConCd2',selectID:'retrieveCommInfo',nameId:'ed_qryConNm2',style:'',id:'udc_qryCon2','ev:onblurCodeEvent':'scwin.udc_qryCon2_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{id:'div_qryConKnd5'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'25',editTypeCode:'select','ev:onviewchangeNameEvent':'scwin.udc_qryCon3_onviewchangeNameEvent',popupID:'',UpperFlagCode:'1',hideName:'true','ev:onclickEvent':'scwin.udc_qryCon3_onclickEvent',allowCharCode:'A-Za-z0-9',codeId:'ed_qryConCd3',selectID:'retrieveBlNoList',nameId:'ed_qryConNm3',style:'',id:'udc_qryCon3','ev:onblurCodeEvent':'scwin.udc_qryCon3_onblurCodeEvent',codeWidth:'110'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE/모선',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',nameId:'ed_vsslCd',selectID:'retrieveLineInfo',id:'udc_line',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_line_onclickEvent','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vssl_onviewchangeNameEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lineNm',style:';visibility:hidden;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control ',editType:'select',id:'acb_sellItemCd',search:'start',style:'width: 200px;',submenuSize:'auto',displayMode:'value delim label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체',visibleRowNum:'20',sortOption:'value',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_formulasellitemlist'},E:[{T:1,N:'w2:label',A:{ref:'sellItemNm'}},{T:1,N:'w2:value',A:{ref:'sellItemCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선청구여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_prebilgYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'form-control w120',editType:'select',id:'acb_transDst',ref:'',search:'start',style:'',submenuSize:'auto',displayMode:'label','ev:onchange':'scwin.acb_transDst_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업구간-권역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'권역'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업구간-작업장'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'작업장'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_onWrkPlCd',nameId:'ed_onWrkPlNm',id:'udc_onWrkPl',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'5',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_onWrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_onWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_onWrkPl_onviewchangeNameEvent'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_offWrkPlCd',nameId:'ed_offWrkPlNm',id:'udc_offWrkPl',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'5',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_offWrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_offWrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_offWrkPl_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분코드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'form-control w85',editType:'select',id:'acb_taxnClsCd',ref:'',search:'start',style:'',submenuSize:'auto',displayMode:'label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_sellLodeptCd',nameId:'ed_sellLodeptNm',id:'udc_sellLodept',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'4',objTypeCode:'Data',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_sellLodept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sellLodept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_sellLodept_onviewchangeNameEvent',selectID:'retrieveOpDeptCdInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더등록자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_regId',nameId:'ed_regNm',id:'udc_reg',maxlengthCode:'10',objTypeCode:'Data',editTypeCode:'select',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_reg_onclickEvent','ev:onblurCodeEvent':'scwin.udc_reg_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_reg_onviewchangeNameEvent',selectID:'retrieveUserInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더수정자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_modId',nameId:'ed_modNm',id:'udc_mod',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',objTypeCode:'Data','ev:onclickEvent':'scwin.udc_mod_onclickEvent','ev:onblurCodeEvent':'scwin.udc_mod_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mod_onviewchangeNameEvent',selectID:'retrieveUserInfo'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_chkAppend',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가구분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_sumDc',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출항목 병합'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더통합매출 조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래명세서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group col6',id:''},E:[{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_certiNo',placeholder:'',style:'',mandatory:'true',objType:'key',editType:'select','ev:onkeyup':'scwin.onkeyup',maxlength:'13',allowChar:'a-zA-Z0-9',title:'거래명세서',validExp:'거래명세서번호:yes'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_certiNo',style:'',type:'button','ev:onclick':'scwin.f_CertiNoPopUp("V")'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',id:'btn_CertiRetrieve',style:'',type:'button',objType:'bCreate2',userAuth:'R','ev:onclick':'scwin.f_CertiRetrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col6',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dtl_bilgLodeptNm',placeholder:'',style:'',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dtl_offsetNo1',placeholder:'',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'확인일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_confirmDt',style:'',mandatory:'true',editType:'select',title:'확인일자',delimiter:'/'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group col6'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_dtl_bilgClntNo',placeholder:'',class:'form-control w85',readOnly:'true'}},{T:1,N:'xf:input',A:{style:'',id:'ed_dtl_bilgClntNm',placeholder:'',class:'form-control ',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분/확정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col6',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dtl_taxnClsNm',placeholder:'',style:'',readOnly:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dtl_dcsnClsCdNm',placeholder:'',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col6',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dtl_sellVatNo',placeholder:'',style:'',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dtl_offsetVatNo',placeholder:'',style:'',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래명세서유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control col6',editType:'select',id:'acb_dtl_fmlaPatternCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'',ref:'',title:'거래명세서유형',chooseOptionLabel:'$blank',visibleRowNum:'20'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_dtlfmlapattern'},E:[{T:1,N:'w2:label',A:{ref:'fmlaNm'}},{T:1,N:'w2:value',A:{ref:'fmlaPatternCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입출항일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_arDepPortDt',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EDI전송여부/EDI전송일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-8'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_ediSndTrgtYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_ediSndDt',class:'form-control cal',calendarValueType:'yearMonthDate',readOnly:'true',editType:'select',delimiter:'/'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_dtl_blNo',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량/중량/용적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_dtl_cntWtCbm',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정창고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_dtl_assgnBondZoneNm',placeholder:'',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계좌번호표기여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_bankAcntNoInscrpYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_dtl_summary',placeholder:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_bilgIntendDt',style:'',delimiter:'/'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급가액합계 원화/외화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col6',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_spplyAmt',placeholder:'',style:'',maxlength:'13',editType:'select',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_spplyAmtFcrc',placeholder:'',style:'',maxlength:'13.2',editType:'select',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세합계/부가세차액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col6',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_vatAmt',placeholder:'',style:'',readOnly:'true',maxlength:'13',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_vatAmtDiff',placeholder:'',style:'',maxlength:'13',editType:'select',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액합계/물량차액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col6',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_totAmt',placeholder:'',style:'',readOnly:'true',maxlength:'11.2',editType:'select',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_diffVolAmt',placeholder:'',style:'',editType:'select',maxlength:'11.2',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_retDelHistory',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_multiChoice',objType:'ctrlBtn',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N건 선택'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-type1',id:'',label:'(Ctrl, Shift 버튼을 사용하여 N건 선택)',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger4',style:';visibility:hidden;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_certidetail',grdDownOpts:'{"fileName":"수출입거래명세서.xlsx", "sheetName":"수출입거래명세서"}',gridUpYn:'N',btnUser:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_certidetail',evenRowBackgroundColor:'#F8FFF8',id:'gr_certidetail',oddEvenColorDisplay:'true',rowNumHeaderValue:'No',rowNumVisible:'false',rowNumWidth:'40',showSortableImage:'true',sortable:'true',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true','ev:oncellclick':'scwin.gr_certidetail_oncellclick','ev:oncelldblclick':'scwin.gr_certidetail_oncelldblclick','ev:onafteredit':'scwin.gr_certidetail_onafteredit',initFixedHeightByRowNum:'5',useShiftKey:'true',visibleRowNum:'2',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_certidetail_onheaderclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chkHeader',inputType:'checkbox',width:'50',sortable:'false',readOnly:'true',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'매출항목',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'품명코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'CNTR-NO',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'SIZE',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'작업일자(Fm)',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'작업구간',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'DOOR',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'적용기준',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'할증율(%)',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'물량',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'단가',sortable:'true',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',sortable:'true',value:'공급가액<br/>(원화)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'공급가액<br/>(외화)',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column49',inputType:'text',style:'',sortable:'true',value:'부가세',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column46',inputType:'text',style:'',value:'금액',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'수량',sortable:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'중량',sortable:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'CBM',sortable:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'송장번호',sortable:'true',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'환종',sortable:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'환율',sortable:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',style:'',value:'BL-NO/BK-NO',sortable:'true',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',style:'',value:'라인',sortable:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column76',inputType:'text',style:'',value:'ORDER-NO',sortable:'true',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',style:'',value:'작업일자(TO)',sortable:'true',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'도어출발일자',sortable:'true',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'선적일자',sortable:'true',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',style:'',value:'매출부서',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column61',inputType:'text',style:'',sortable:'true',value:'적요',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'SIZE',sortable:'true',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column85',inputType:'text',style:'',value:'E/F',sortable:'true',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'choice',inputType:'checkbox',width:'50',valueType:'other',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiInscrpSellItemNm',inputType:'text',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellCommNo',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',readOnly:'true',colMerge:'true',textAlign:'left',customFormatter:'scwin.commNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'SizCd',inputType:'text',width:'70',colMerge:'true',upperColumn:'commNm',customFormatter:'scwin.cntrSizCd',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'wrkStDt',inputType:'text',width:'120',readOnly:'true',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'transDst',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'doorDtl',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unitCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scRt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'18.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVol',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'18.3',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'float',maxLength:'18.2',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmtFcrc',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'float',maxLength:'18.2',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',maxLength:'13',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',maxLength:'13',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,##0.000[floor]',maxLength:'15.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,##0.000[floor]',maxLength:'15.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'invoiceNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptExchRt',inputType:'text',style:'',value:'',width:'70',readOnly:'true',textAlign:'right',dataType:'float',displayFormat:'#,##0.0000',maxLength:'18.4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'140',textAlign:'left',readOnly:'true',customFormatter:'scwin.orderFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',style:'',value:'',width:'120',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'retrvDt',inputType:'text',style:'',value:'',width:'120',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shippingDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'expression',style:'',value:'',width:'70',expression:'sum("sellVol")',dataType:'number',displayFormat:'#,##0.000',maxLength:'18.3',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'expression',style:'',value:'',width:'100',expression:'sum("spplyAmt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'expression',style:'',value:'',width:'100',expression:'sum("spplyAmtFcrc")',dataType:'number',displayFormat:'#,##0.00',maxLength:'18.2',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'expression',style:'',value:'',width:'70',expression:'sum("vatAmt")',dataType:'number',displayFormat:'#,##0',textAlign:'right',maxLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'expression',style:'',value:'',width:'70',expression:'sum("totAmt")',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column81',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column75',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'',width:'70'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom justify-between',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section flex-col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_SlipPopup',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_SlipPopup_onClick',objType:'bCreate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'세금계산서 생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_regstEmail',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_regstEmail_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'E-mail등록'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_sumCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인할증집계여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bondedTransDeclar',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보세운송신고필증'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_wt',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중량 환산 처리여부(KG -> TON)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bl',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목 B/L표기여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_print',class:'form-control w150',allOption:'',chooseOption:'',ref:'',displayMode:'label','ev:oneditkeyup':'scwin.onkeyup'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공급받는자 보관용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'receive'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공급자 보관용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'spply'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_ozNo',class:'form-control w150',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송시작일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송종료일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'도어출발일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DOOR회수 출발일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DOOR운송 출발일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',label:'저장',style:'',type:'button',objType:'bUpdate',userAuth:'P','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_MySave',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_MySave_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]}]}]})