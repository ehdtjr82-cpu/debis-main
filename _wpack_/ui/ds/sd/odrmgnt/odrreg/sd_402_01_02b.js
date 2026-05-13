/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_02b.xml 354687 b068549c774e5a63e7315d957d066a28a3027ca911f155380d39b188d500c530 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'name2',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name3',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name4',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name5',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name6',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name7',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name8',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name9',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'name10',dataType:'number',length:'5'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'name11',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name12',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'name13',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'name14',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndCtrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처 번호',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부 ',dataType:'number',length:'1'}},{T:1,N:'w2:key',A:{id:'bizDivBukYn',name:'사업부문벌크여부    ',dataType:'number',length:'1'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드              ',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드     ',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_order_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약처',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'number',length:'9.4'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'합적여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자명',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자명',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'오더담당자명',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'오더담당자전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송회사명',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송회사전화번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'tsPortCd',name:'TS항구코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'tplCoClsCd',name:'3자물류업체구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'smsSndYn',name:'SMS전송여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'오더취소일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'오더취소시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'오더취소사유',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'오더삭제일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'오더삭제시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'upperOdrNo',name:'상위오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'청구오더종류코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드   ',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구물류부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출물류부서명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text',length:'0'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사거래처명',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'입항일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'입항시간',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'clntOdrNo',name:'거래처오더번호',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'오더작업경로 갯수',dataType:'number',length:'3.0'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'clntMgntNonm',name:'거래처관리번호명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'mgntNoclsCd',name:'관리번호구분코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'dispPchsClsCd',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortNm',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRequestCnt',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name136',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderCommodity',saveRemovedData:'true','ev:ondataload':'scwin.ds_orderCommodity_ondataload','ev:oninsertrow':'scwin.ds_orderCommodity_oninsertrow','ev:onremoverow':'scwin.ds_orderCommodity_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number',length:'3'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL 번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'commIdx',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',length:'15.0'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'number',length:'18.3'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'number',length:'18.3'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number',length:'10.3'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number',length:'10.2'}},{T:1,N:'w2:column',A:{id:'cstmrMgntNo',name:'고객관리번호',dataType:'text',length:'30'}},{T:1,N:'w2:column',A:{id:'paletYn',name:'팔레트',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'cnclYn',name:'취소여부',dataType:'number',length:'1'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'벌크오더별작업지시번호',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathYn',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name43',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderBillOfLading',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',length:'4'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'number',length:'4'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호     ',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드  ',dataType:'text',length:'8'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ctrtComm',repeatNode:'map',saveRemovedData:'true',getMatchedFromAllData:'true',validateAllItemsetData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'value',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'label',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitUpperCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'index',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidden',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveCtrtClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처 번호',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부 ',dataType:'number',length:'1'}},{T:1,N:'w2:key',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'number',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호 ',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명 ',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자 ',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약시작일자 ',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'empNm',name:'계약담당자 사원명 ',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고 ',dataType:'text',length:'500'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'계약등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'계약등록점소',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'화폐',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'label',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'value',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'label',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'value',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_realMchtClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'label',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'value',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_orderSearch',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text',length:'13'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_manifestQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number',length:'4'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'number',length:'4'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'HOUSE_BL번호',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'tsYn',name:'TS 여부',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'bulkYn',name:'벌크 여부',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billOfLading',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'long'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'long'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'MASTER_BL번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'HOUSE_BL번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairNo',name:'하선신고수리번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'BL_TYPE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyMark',name:'선박대리점부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyNm',name:'선박대리점명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shipwgtPortCd',name:'적재항구코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bodCd',name:'BOD코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선품목코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtNm',name:'하선품목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'하선보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneNm',name:'하선보세구역명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'배정보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneNm',name:'배정보세구역명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'배정구분명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'적하목록품명명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'long'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'double'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총용적',dataType:'double'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'LC번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark1',name:'특수화물부호1',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark2',name:'특수화물부호2',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark3',name:'특수화물부호3',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bondTransCoMark',name:'보세운송업체부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'화물속성코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairDtm',name:'하선신고수리일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'검색일시FROM',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'검색일시TO',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'검색기위치코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprNmCmpy',name:'송하인상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprAddr',name:'송하인주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprTelNo',name:'송하인전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr',name:'수하인주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnTelNo',name:'수하인사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnCrn',name:'수하인사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'통지처상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr',name:'통지처주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlTelNo',name:'통지처전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlCrn',name:'통지처사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'LCL여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cvsslOdrCreatYn',name:'본선오더생성여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'gnrlOdrCreatYn',name:'일반오더생성여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'cvsslOdrNo',name:'본선오더번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'gnrlOdrNo',name:'일반오더번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnt20Feet',name:'20FEET개수',dataType:'int'}},{T:1,N:'w2:column',A:{id:'cnt40Feet',name:'40FEET개수',dataType:'int'}},{T:1,N:'w2:column',A:{id:'cnt45Feet',name:'45FEET개수',dataType:'int'}},{T:1,N:'w2:column',A:{id:'impCvsslOrderYn',name:'수입본선오더 여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'impGnrlOrderYn',name:'수입본선오더 여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'lodCvsslOrder',name:'수입본선오더 여부',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impCvsslOrder',name:'수입본선오더 여부',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impGnrlOrder',name:'수입본선오더 여부',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'하선장소코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcNm',name:'하선장소명 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정창고코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'배정창고명 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doYn',name:'DO여부 ',dataType:'int'}},{T:1,N:'w2:column',A:{id:'doConfirmDt',name:'DO확인일자 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmHh',name:'DO확인시간 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmPicId',name:'DO확인담당자ID ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드     ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사Line코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineNm',name:'당사Line명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'transPrd',name:'보세운송만료일자(운송기한) ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcNm',name:'당사하선장소코드명  ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'odrYn',name:'오더존재여부 ',dataType:'long'}},{T:1,N:'w2:column',A:{id:'stdBlYn',name:'기준BL여부 ',dataType:'long'}},{T:1,N:'w2:column',A:{id:'doConfirmPicNm',name:'DO확인담당자명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsNm',name:'당사구분코드명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'callsignCd',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dischgPortCd',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dischgPortNm',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'colorVal',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'입항일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'입항시간',dataType:'String'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두코드명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cntrSizeCd',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cntrTypeCd',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mfReplyCd',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'blProcYn',name:'B/L처리여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'btProcYn',name:'BT처리여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'fioProcYn',name:'FIO처리여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'changeCheck',name:'당사배정구분,배정창고,배정구분 변화 여부체크',dataType:'int'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcChangeCheck',name:'당사하선장소 변화여부 체크',dataType:'int'}},{T:1,N:'w2:column',A:{id:'blCheck',name:' ',dataType:'int'}},{T:1,N:'w2:column',A:{id:'che',name:' ',dataType:'int'}},{T:1,N:'w2:column',A:{id:'impCtOrder',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impCsOrder',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcClsCd',name:'',dataType:'String'}},{T:1,N:'w2:column',A:{id:'autoSetting',name:'',dataType:'int'}},{T:1,N:'w2:column',A:{id:'serCd',name:'선사서비스코드',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billOfLadingCommodity',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'MASTER_BL번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'HOUSE_BL번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairNo',name:'하선신고수리번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'BL_TYPE코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyMark',name:'선박대리점부호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyNm',name:'선박대리점명 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shipwgtPortCd',name:'적재항구코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bodCd',name:'BOD코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'하선보세구역코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'배정보세구역코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'적하목록품명명 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수 ',dataType:'long'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'packUnitNm',name:'포장단위 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량 ',dataType:'double'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM ',dataType:'double'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'LC 번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark1',name:'특수화물부호1 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark2',name:'특수화물부호2 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark3',name:'특수화물부호3 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bondTransCoMark',name:'보세운송업체부호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'화물속성코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairDtm',name:'하선신고수리일시 ',dataType:'Date'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'검색일시FROM ',dataType:'Date'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'검색일시TO ',dataType:'Date'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'검색기위치코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprNmCmpy',name:'송하인상호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprAddr',name:'송하인주소 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprTelNo',name:'송하인전화번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnCrn',name:'수하인사업자등록번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인상호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr',name:'수하인주소 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnTelNo',name:'수하인전화번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlCrn',name:'통지처사업자등록번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'통지처상호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr',name:'통지처주소 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlTelNo',name:'통지처전화번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO_BT구분코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'LCL여부 ',dataType:'int'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'int'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시 ',dataType:'Date'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시 ',dataType:'Date'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'하선장소코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정창고코드 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doYn',name:'DO여부 ',dataType:'int'}},{T:1,N:'w2:column',A:{id:'doConfirmDt',name:'DO확인일자 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmHh',name:'DO확인시간 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO번호 ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmPicId',name:'DO확인담당자ID ',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드     ',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderSelling',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobranQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text',length:'2'}},{T:1,N:'w2:key',A:{id:'deptmentCd',name:'부서조건',dataType:'text',length:'1'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranSales',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptmentCd',name:'부서조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranTrans',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptmentCd',name:'부서조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dsCommonUtil_acb_odrKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc1',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc2',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name7',dataType:'text',importFormatter:'scwin.etc1ToFltrCd1Formatter'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name8',dataType:'text',importFormatter:'scwin.etc2ToFltrCd2Formatter'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveContractInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndCtrtNo","key":"IN_DS1"},{"action":"modified","id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveExport',action:'/ds.sd.odrmgnt.odrreg.RegistExportBulkOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_order","key":"IN_DS1"},{"action":"modified","id":"ds_orderCommodity","key":"IN_DS2"},{"action":"modified","id":"ds_orderSearch","key":"OUT_DS1"},{"action":"modified","id":"ds_orderSelling","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_orderSearch","key":"OUT_DS1"},{"id":"ds_orderSelling","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveExport_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveImport',action:'/ds.sd.odrmgnt.odrreg.RegistImportBulkOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_order","key":"IN_DS1"},{"action":"modified","id":"ds_orderBillOfLading","key":"IN_DS2"},{"action":"modified","id":"ds_orderCommodity","key":"IN_DS3"},{"id":"ds_orderSearch","key":"OUT_DS1"},{"action":"modified","id":"ds_orderSelling","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_orderSearch","key":"OUT_DS1"},{"id":"ds_orderSelling","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveImport_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveExportBulkOrderContractCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"action":"modified","id":"ds_order","key":"OUT_DS1"},{"action":"modified","id":"ds_orderCommodity","key":"OUT_DS2"},{"action":"modified","id":"ds_orderBillOfLading","key":"OUT_DS3"},{"action":"modified","id":"ds_ctrtNo","key":"OUT_DS4"},{"action":"modified","id":"ds_reqClntNo","key":"OUT_DS5"},{"action":"modified","id":"ds_realMchtClntNo","key":"OUT_DS6"},{"action":"modified","id":"ds_bilgClntNo","key":"OUT_DS7"},{"action":"modified","id":"ds_ctrtComm","key":"OUT_DS8"},{"action":"modified","id":"ds_orderSelling","key":"OUT_DS9"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_orderCommodity","key":"OUT_DS2"},{"id":"ds_orderBillOfLading","key":"OUT_DS3"},{"id":"ds_ctrtNo","key":"OUT_DS4"},{"id":"ds_reqClntNo","key":"OUT_DS5"},{"id":"ds_realMchtClntNo","key":"OUT_DS6"},{"id":"ds_bilgClntNo","key":"OUT_DS7"},{"id":"ds_ctrtComm","key":"OUT_DS8"},{"id":"ds_orderSelling","key":"OUT_DS9"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtClnt',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveCtrtClnt","key":"IN_DS1"},{"action":"modified","id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtClnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo',action:'/ds.sd.odrmgnt.odrreg.RetrieveContractInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_reqClntNo","key":"OUT_DS1"},{"action":"modified","id":"ds_realMchtClntNo","key":"OUT_DS2"},{"action":"modified","id":"ds_bilgClntNo","key":"OUT_DS3"},{"action":"modified","id":"ds_ctrtComm","key":"OUT_DS4"},"dma_retrieveContractInfo"]',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_realMchtClntNo","key":"OUT_DS2"},{"id":"ds_bilgClntNo","key":"OUT_DS3"},{"id":"ds_ctrtComm","key":"OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtNo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirmOrder',action:'/ds.sd.odrmgnt.odrreg.ConfirmOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_order","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirmOrder_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirmOrderUn',action:'/ds.sd.odrmgnt.odrreg.ConfirmOrderUnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_order","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_confirmOrderUn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.sd.odrmgnt.odrreg.DeleteOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_orderCommodity","key":"IN_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mainfestBillOfLading',action:'/ds.sd.odrmgnt.odrreg.RetrieveVsslCdPortcntBulkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_manifestQueryCondition","key":"IN_DS1"},{"action":"modified","id":"ds_billOfLading","key":"OUT_DS1"},{"action":"modified","id":"ds_billOfLadingCommodity","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_billOfLading","key":"OUT_DS1"},{"id":"ds_billOfLadingCommodity","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mainfestBillOfLading_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLobranSales',action:'/ds.sd.odrmgnt.odrreg.RetrieveLogisticsBranchDepartmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_lobranQueryCondition","key":"IN_DS1"},{"action":"modified","id":"ds_lobranSales","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lobranSales","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveLobranSales_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLobranTrans',action:'/ds.sd.odrmgnt.odrreg.RetrieveLogisticsBranchDepartmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_lobranQueryCondition","key":"IN_DS1"},{"action":"modified","id":"ds_lobranTrans","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lobranTrans","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveLobranTrans_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/SdConstants.js',type:'text/javascript',scopeVariable:'SdConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DSystemCode.js',type:'text/javascript',scopeVariable:'DSystemCode'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGauceConstants.js',type:'text/javascript',scopeVariable:'DGauceConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//btn_PopUp11, btn_PopUp15는 캘린터 버튼이라 id할당 못함, btn_PopUp15 중복 udc_clntMgnt의 버튼

scwin.vaildObj = new Array(); // Vaildation 확인 Object 설정
scwin.validExp = ""; // GRID Vaildation 수식 설정
scwin.gridValidateInfo = [];
scwin.v_row = 0; // GRID 선택 ROW
scwin.mgntTrgtClntYn = 0; //거래처 관리대상여부
scwin.mulitRowSelYn = "F"; // B/L 다중선택 지원여부
scwin.v_count = 0;
scwin.v_rtnList = 0;
scwin.v_gubun = "";
scwin.bizDivCntrYn = "0";
scwin.bizDivBulkYn = "0";
scwin.regId = null;
scwin.WorkPathMessage = null;
scwin.strCurDate = null;
scwin.sUserClsCd = null;
scwin.lobranCd = null;
scwin.callbackCnt = 0; //공통코드 조회와 UDC초기화가 비동기라서 완료되는것 카운트하기위한 변수
scwin.clearCtrtClntNoInfo = false;

/**
 * event
 * @name onpageload
 * @description 화면 로딩 후 이벤트
 */
scwin.onpageload = async function () {
  scwin.bizDivCntrYn = DsConstants.YN_NO.toString(); // 사업부문컨테이너여부
  scwin.bizDivBulkYn = DsConstants.YN_YES.toString(); // 사업부문벌크여부

  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

  //사용자 정보 가져오기
  scwin.regId = $c.data.getMemInfo($p, "userId") ?? "";
  scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd") ?? "";
  scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd") ?? "";
  let codeOptions = [{
    grpCd: "OP518",
    compID: "acb_trfAdptCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.chkInitCallback);
  codeOptions = [{
    method: "getGridComboByUpperCd",
    param1: "LO102",
    param2: "01",
    param3: true,
    compID: "gr_orderCommodity:qtyUnitCd"
  }, {
    method: "getGridComboByUpperCd",
    param1: "LO102",
    param2: "02",
    param3: true,
    compID: "gr_orderCommodity:unitCd"
  }, {
    method: "getGridComboByUpperCd",
    param1: "LO102",
    param2: "04",
    param3: true,
    compID: "lc_unitCd04"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.onGauceUtilCode);
  codeOptions = [{
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_BULK,
    outputFields: ["CD", "CD_NM"]
  }, {
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_ALL,
    outputFields: ["CD", "CD_NM"]
  }, {
    compID: "acb_odrKndCd",
    method: "getCodeList",
    param1: "SD113",
    param2: [1, 3],
    param3: [DsConstants.ODR_BULK, "1"],
    outputFields: ["CD", "CD_NM", "FLTR_CD_1",, "FLTR_CD_2"]
  }];
  $c.data.setDsCommonUtil($p, codeOptions, scwin.chkInitCallback);
  $c.data.getDMessage($p, "SD", "W0077").then(rtn => scwin.WorkPathMessage = rtn); // 출발지 또는 도착지가 변경되어 작업경로가 삭제됩니다.

  //필수입력 표시를 동적으로 변경하기 위해 스크립트로 추가한다.
  tbx_cvsslMgntNo_01.addClass("req");
  tbx_vsslCd_01.addClass("req");
  tbx_portcnt.addClass("req");
  gr_orderCommodity.setColumnReadOnly("commCd", true);

  //숨겨진 컴포넌트 초기화
  hid_bizDivCntrYn.setValue(scwin.bizDivCntrYn);
  hid_bizDivBulkYn.setValue(scwin.bizDivBulkYn);
  hid_sellYn.setValue(DsConstants.YN_YES);
  hid_cntrDsgYn.setValue(DsConstants.YN_NO);
  hid_selfClsCd.setValue(DsConstants.SELF_CLS_CD_MCOM_TRANS);
  hid_smsSndYn.setValue(DsConstants.YN_NO);
  hid_transCargoClsCd.setValue(DsConstants.ODR_BULK);
  hid_bulkYn.setValue(scwin.bizDivBulkYn);
  hid_msn.setValue("-1");
  hid_hsn.setValue("0");
};

/**
 * event
 * @name onUdcCompleted
 * @description UDC 초기화 후 이벤트
 */
scwin.onUdcCompleted = function () {
  $p.parent().tab_mxTab_page.activateTab(1);
  scwin.chkInitCallback();
};

/**
 * method
 * @name onGauceUtilCode
 * @description
 */
scwin.onGauceUtilCode = function () {
  dlt_gauceUtil_gr_orderCommodity_unitCd.setJSON(dlt_dsCommonUtil_lc_selfClsCd.getAllJSON(), true);
  scwin.chkInitCallback();
};

/**
 * method
 * @name chkInitCallback
 * @description 초기화 완료 체크
 */
scwin.chkInitCallback = function () {
  //공통 코드조회 3회 + udc초기화 로 4번 호출되는것 체크
  ++scwin.callbackCnt;
  if (scwin.callbackCnt === 4) {
    scwin.onInitCompleted();
  }
};

/**
 * method
 * @name onInitCompleted
 * @description 초기화 완료 이후에 실행될 기능
 */
scwin.onInitCompleted = function () {
  scwin.f_defaultOdrKndSetting();

  // 초기값 설정
  scwin.f_defaultValue();
  scwin.v_count = 0;
  scwin.v_rtnList = 0;
  if (!$c.gus.cfIsNull($p, $p.parent().hid_odrKndCd.getValue())) {
    acb_odrKndCd.setValue($p.parent().hid_odrKndCd.getValue());
    // hid_odrKndCd.setValue(acb_odrKndCd.getValue());  // 오더종류
    scwin.f_setDisplayOdrKndCd(acb_odrKndCd.getValue());
  }
  scwin.acb_odrKndCd_onviewchange();
  $p.parent().scwin.tab_mxTab_page_onchange("tab_mxTab_page", 0, "tab_mxTab_page0");
};

/**
 * method
 * @name f_defaultValue
 * @description 초기값 설정  :  Grid  설정 - ID 별로 보여지는 필드 정의
 */
scwin.f_defaultValue = function () {
  scwin.v_count = 0;
  scwin.v_rtnList = 0;
  // DataSet Header 초기화
  ds_orderSearch.removeAll(); // 조회
  ds_orderSearch.insertRow();
  ed_odrNo.setValue("");
  scwin.f_dsLobranQueryConditionHeader(); // 물류점소

  // 출발일자, 도착일자 초기값 설정
  ed_wrkStDt.setValue(scwin.strCurDate);
  ed_wrkEndDt.setValue(scwin.strCurDate);

  // 오더 담당 정보 설정
  ed_odrPicNm.setValue($c.data.getMemInfo($p, "userNm") ?? "");
  ed_odrPicTelNo.setValue($c.data.getMemInfo($p, "userMpNo") ?? "");
  hid_tsYn.setValue("0"); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)

  // KeyData 비활성화
  $c.gus.cfDisableKeyData($p);

  // 그리드 행추가 / 삭제 /취소 버튼 비활성화
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfEnableBtnOnly($p, [btn_Create]);

  // 입력 Object 중 한글입력 항목의 IME Mode를 설정한다.
  // $c.gus.cfSetIMEModeActiveObjects([ed_ctrtClntNm, ed_dmndNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_lineNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_onPicNm, ed_offPicNm, ed_odrPicNm, ta_rmk]);

  // PopUp 이미지 버튼을 비활성화 시킨다.
  scwin.f_DisablePopUpObj();

  // 오더 확정 버튼 보이기 / 오더 미확정 버튼 감추기
  dscommon.cf_ShowObject([btn_ConfirmOrder1, btn_ConfirmOrder2, btn_DcSc, btn_UnitySelling /* btn_BulkAlloccarIndict */]); // 화면 삭제되어 버튼 관련기능 제거

  // 오더 확정 버튼 비활성화
  $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2, btn_DcSc, btn_UnitySelling /* btn_OrderCopyDomestic */ /* btn_BulkAlloccarIndict */,,]); // 화면 삭제되어 버튼 관련기능 제거

  // Tab 오더정보 초기화
  scwin.f_clearTabOrderInfo();

  // 오더 종류에 따른 화면 설정
  scwin.f_defaultOdrKndSetting();

  // 오더번호 EMEDIT 로 focus 이동
  ed_odrNo.focus();

  // 로그인 대상자가 협력업체인 경우 계약거래처 변경을 하지 못하도록 한다.
  if (scwin.sUserClsCd != "01") {
    $c.gus.cfEnableObj($p, ed_ctrtClntNo, false); // 계약거래처코드 비활성화
    $c.gus.cfEnableObj($p, ed_ctrtClntNm, false); // 계약거래처명 비활성화
    $c.gus.cfEnableObj($p, btn_PopUp1, false); // 계약거래처 PopUp  버튼 비활성화
  }
};

/**
 * method
 * @name f_defaultOdrKndSetting
 * @description 오더종류 초기화 처리  :  오더종류를 초기화 한다.
 */
scwin.f_defaultOdrKndSetting = function () {
  // 오더종류 설정 - default  :  내수운송공장내
  let odrKndCd = $c.gus.getMapValue($p, "ODR_KND_CD");
  if ($c.gus.cfIsNull($p, odrKndCd)) {
    odrKndCd = DsConstants.ODR_KND_CD_DOMESTIC_BASE_INSIDE_ODR;
  }
  acb_odrKndCd.setValue(odrKndCd);
  scwin.acb_odrKndCd_onviewchange();
  scwin.f_setDisplayOdrKndCd(acb_odrKndCd.getValue());
  hid_odrKndCd.setValue(acb_odrKndCd.getValue());
  hid_transCargoClsCd.setValue(dlt_dsCommonUtil_acb_odrKndCd.getCellData(acb_odrKndCd.getSelectedIndex(), "fltrCd1"));
  hid_impExpDomesticClsCd.setValue(dlt_dsCommonUtil_acb_odrKndCd.getCellData(acb_odrKndCd.getSelectedIndex(), "fltrCd2"));
  hid_selfClsCd.setValue(DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분코드 - 벌크오더(당사운송 : LI)

  // 관리대상여부 초기화
  scwin.mgntTrgtClntYn = 0;
  scwin.mulitRowSelYn = "F";
};

/**
 * method
 * @name f_setDisplayOdrKndCd
 * @description 선택된 오더 유형별 화면 설정을 변경한다.
 */
scwin.f_setDisplayOdrKndCd = function (odrKndCd) {
  switch (odrKndCd) {
    case DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR:
      // 벌크 수입본선오더
      dscommon.cf_ShowObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_HideObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("E");
      dscommon.cf_ShowObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_HideObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_ShowObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_ShowObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박
      tbx_cvsslMgntNo_01.setValue("본번");
      dscommon.cf_HideObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("접안부두");
      dscommon.cf_HideObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 작업일자, 작업시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      dscommon.cf_HideObject([tbx_selfCls_01, grp_selfCls_02]); // 자가구분

      dscommon.cf_HideObject([btn_SelectBL]);
      // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      tbx_wrkStDtHh_01.setValue("입항일시");
      tbx_wrkEndDtHh_01.setValue("출항일시");
      tbx_clntMchtNo.setValue("");
      dscommon.cf_HideObject([ed_clntMgntNo, ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("");
      dscommon.cf_HideObject([acb_trfAdptCd]);
      hid_hsn.setValue(0);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.
      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", false);
      gr_orderCommodity.setColumnVisible("netWt", false);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", false);
      gr_orderCommodity.setColumnVisible("paletYn", false);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", false);
      gr_orderCommodity.setColumnVisible("wrkStDt", false);
      gr_orderCommodity.setColumnVisible("wrkStHh", false);
      gr_orderCommodity.setColumnVisible("wrkEndDt", false);
      gr_orderCommodity.setColumnVisible("wrkEndHh", false);
      gr_orderCommodity.setColumnVisible("rmk", false);
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", true); //None
      // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
      gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", true); //None
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", true); //None
      gr_orderCommodity.setColumnReadOnly("paletYn", true); //None
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkStDt", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkStHh", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", true); //None
      gr_orderCommodity.setColumnReadOnly("rmk", true); //None

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "입항일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "입항시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "출항일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "출항시간");
      ed_wrkStDt.options.mandatory = false;
      ed_wrkStHh.options.mandatory = false;
      ed_wrkEndDt.options.mandatory = false;
      ed_wrkEndHh.options.mandatory = false;
      ed_wrkStDt.options.title = "입항일자";
      ed_wrkStHh.options.title = "입항시간";
      ed_wrkEndDt.options.title = "출항일자";
      ed_wrkEndHh.options.title = "출항시간";
      // ed_wrkStDt.validExp = "입항일자 : no : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "입항시간 : no : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "출항일자 : no : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "출항시간 : no : date=HHmm&length=4";

      $c.sbm.setAction($p, sbm_mainfestBillOfLading, "/ds.sd.odrmgnt.odrreg.RetrieveVsslCdPortcntBulkListCMD.do");

      //본선관리 번호 Validation / Mandantory 설정
      ed_cvsslMgntNo.options.mandatory = true;
      ed_vsslCd.options.mandatory = true;
      ed_portcnt.options.mandatory = true;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_lineCd, ed_cvsslMgntNo, ed_vsslCd, ed_portcnt, ed_dptWrkPlCd, ed_dptDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation
      scwin.gridValidateInfo = [{
        id: "commCd",
        mandatory: true
      },
      //품명코드
      {
        id: "wrkStDt",
        isDate: true
      },
      //입항일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //입항일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //입항시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //출항일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //출항일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      } //출항시간
      ];
      hid_fioBtClsCd.setValue(DsConstants.BT); // FIO_BT 여부 (FO  :  FIO_PROC_YN = 1, BT  :  BT_PROC_YN = 1, FB  :   FIO_PROC_YN= 1 or BT_PROC_YN = 1)

      // gr_orderCommodity.style.height = "230px";

      hid_tsYn.setValue(DsConstants.YN_NO); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      break;
    case DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR:
      // 벌크 수입일반
      dscommon.cf_ShowObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_HideObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("D");
      dscommon.cf_ShowObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_ShowObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_ShowObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_ShowObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박
      tbx_cvsslMgntNo_01.setValue("본번/입항");
      dscommon.cf_ShowObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("From ~ To");
      dscommon.cf_ShowObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 출발일자, 출발시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      tbx_selfCls_01.setValue("자가구분");
      dscommon.cf_ShowObject([tbx_selfCls_01, grp_selfCls_02]); // 자가구분
      dscommon.cf_HideObject([grp_bk]);
      dscommon.cf_ShowObject([btn_SelectBL]);
      // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      hid_hsn.setValue(-1);
      tbx_wrkStDtHh_01.setValue("출발일시");
      tbx_wrkEndDtHh_01.setValue("도착일시");
      tbx_clntMchtNo.setValue("Ref 번호");
      dscommon.cf_ShowObject([ed_clntMgntNo]);
      dscommon.cf_HideObject([ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("");
      dscommon.cf_HideObject([acb_trfAdptCd]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", true);
      gr_orderCommodity.setColumnVisible("netWt", false);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", false);
      gr_orderCommodity.setColumnVisible("paletYn", false);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("wrkStDt", true);
      gr_orderCommodity.setColumnVisible("wrkStHh", true);
      gr_orderCommodity.setColumnVisible("wrkEndDt", true);
      gr_orderCommodity.setColumnVisible("wrkEndHh", true);
      gr_orderCommodity.setColumnVisible("rmk", false);
      gr_orderCommodity.setColumnReadOnly("blNo", false); //"Upper"
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", true); //None
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", true); //None
      gr_orderCommodity.setColumnReadOnly("paletYn", true); //None
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("wrkStDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkStHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("rmk", true); //None

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "출발일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "출발시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "도착일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "도착시간");
      ed_wrkStDt.options.mandatory = true;
      ed_wrkStHh.options.mandatory = true;
      ed_wrkEndDt.options.mandatory = true;
      ed_wrkEndHh.options.mandatory = true;
      ed_wrkStDt.options.title = "출발일자";
      ed_wrkStHh.options.title = "출발시간";
      ed_wrkEndDt.options.title = "도착일자";
      ed_wrkEndHh.options.title = "도착시간";
      // ed_wrkStDt.validExp = "출발일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "출발시간 : yes : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "도착일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "도착시간 : yes : date=HHmm&length=4";

      $c.sbm.setAction($p, sbm_mainfestBillOfLading, "/ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingBulkListCMD.do");

      //본선관리 번호 Validation / Mandantory 설정
      ed_cvsslMgntNo.options.mandatory = true;
      ed_vsslCd.options.mandatory = true;
      ed_portcnt.options.mandatory = true;
      ed_lineCd.validExp = "false";
      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_realMchtClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_lineCd, ed_cvsslMgntNo, ed_closeDt, ed_closeHh, ed_vsslCd, ed_portcnt, ed_dptWrkPlCd, ed_dptDtl, ed_arvWrkPlCd, ed_arvDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);
      scwin.gridValidateInfo = [{
        id: "blNo",
        mandatory: true
      },
      //BL번호
      {
        id: "blNo",
        key: true
      },
      //BL번호
      {
        id: "commCd",
        mandatory: true
      },
      //품명코드
      // { id: "commNm", mandatory: true }, //품명
      {
        id: "commIdx",
        mandatory: true
      },
      //품명
      {
        id: "wrkStDt",
        isDate: true
      },
      //입항일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //입항일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //입항시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //출항일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //출항일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      } //출항시간
      ];
      hid_fioBtClsCd.setValue(DsConstants.FB); // FIO_BT 여부 (FO  :  FIO_PROC_YN = 1, BT  :  BT_PROC_YN = 1, FB  :   FIO_PROC_YN= 1 or BT_PROC_YN = 1)
      // gr_orderCommodity.style.height = "210px";

      hid_tsYn.setValue(DsConstants.YN_NO); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      break;
    case DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR:
      // 벌크 수출본선오더
      dscommon.cf_HideObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_HideObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("E");
      dscommon.cf_ShowObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_HideObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_ShowObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_ShowObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박
      tbx_cvsslMgntNo_01.setValue("본번");
      dscommon.cf_HideObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("접안부두");
      dscommon.cf_HideObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 작업일자, 작업시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      dscommon.cf_HideObject([tbx_selfCls_01, grp_selfCls_02]); // 자가구분

      tbx_wrkStDtHh_01.setValue("입항일시");
      tbx_wrkEndDtHh_01.setValue("출항일시");
      tbx_clntMchtNo.setValue("");
      dscommon.cf_HideObject([ed_clntMgntNo, ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("");
      dscommon.cf_HideObject([acb_trfAdptCd]);
      dscommon.cf_HideObject([btn_SelectBL]);
      // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", false);
      gr_orderCommodity.setColumnVisible("netWt", false);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", false);
      gr_orderCommodity.setColumnVisible("paletYn", false);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", false);
      gr_orderCommodity.setColumnVisible("wrkStDt", false);
      gr_orderCommodity.setColumnVisible("wrkStHh", false);
      gr_orderCommodity.setColumnVisible("wrkEndDt", false);
      gr_orderCommodity.setColumnVisible("wrkEndHh", false);
      gr_orderCommodity.setColumnVisible("rmk", false);
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", true); //None
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", true); //None
      gr_orderCommodity.setColumnReadOnly("paletYn", true); //None
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkStDt", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkStHh", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", true); //None
      gr_orderCommodity.setColumnReadOnly("rmk", true); //None

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "입항일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "입항시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "출항일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "출항시간");
      ed_wrkStDt.options.mandatory = false;
      ed_wrkStHh.options.mandatory = false;
      ed_wrkEndDt.options.mandatory = false;
      ed_wrkEndHh.options.mandatory = false;
      ed_wrkStDt.options.title = "입항일자";
      ed_wrkStHh.options.title = "입항시간";
      ed_wrkEndDt.options.title = "출항일자";
      ed_wrkEndHh.options.title = "출항시간";
      // ed_wrkStDt.validExp = "입항일자 : no : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "입항시간 : no : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "출항일자 : no : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "출항시간 : no : date=HHmm&length=4";

      //본선관리 번호 Validation / Mandantory 설정
      ed_cvsslMgntNo.options.mandatory = true;
      ed_vsslCd.options.mandatory = true;
      ed_portcnt.options.mandatory = true;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_lineCd, ed_cvsslMgntNo, ed_vsslCd, ed_portcnt, ed_dptWrkPlCd, ed_dptDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation Exp
      scwin.gridValidateInfo = [{
        id: "commCd",
        mandatory: true
      },
      //품명코드
      {
        id: "wrkStDt",
        isDate: true
      },
      //입항일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //입항일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //입항시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //출항일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //출항일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      } //출항시간
      ];
      // gr_orderCommodity.style.height = "230px";

      hid_tsYn.setValue(DsConstants.YN_NO); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      break;
    case DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR:
      // 벌크 수출일반오더
      dscommon.cf_ShowObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_HideObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("E");
      dscommon.cf_ShowObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_ShowObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_ShowObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_ShowObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박
      tbx_cvsslMgntNo_01.setValue("본번/입항");
      dscommon.cf_HideObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("From ~ To");
      dscommon.cf_ShowObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 출발일자, 출발시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      tbx_selfCls_01.setValue("자가/BK");
      dscommon.cf_ShowObject([tbx_selfCls_01, grp_selfCls_02, grp_bk]); // 자가구분

      dscommon.cf_HideObject([btn_SelectBL]);
      // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.

      tbx_wrkStDtHh_01.setValue("출발일시");
      tbx_wrkEndDtHh_01.setValue("도착일시");
      tbx_clntMchtNo.setValue("Ref 번호");
      dscommon.cf_ShowObject([ed_clntMgntNo]);
      dscommon.cf_HideObject([ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("");
      dscommon.cf_HideObject([acb_trfAdptCd]);

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", false);
      gr_orderCommodity.setColumnVisible("netWt", false);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", false);
      gr_orderCommodity.setColumnVisible("paletYn", false);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("wrkStDt", true);
      gr_orderCommodity.setColumnVisible("wrkStHh", true);
      gr_orderCommodity.setColumnVisible("wrkEndDt", true);
      gr_orderCommodity.setColumnVisible("wrkEndHh", true);
      gr_orderCommodity.setColumnVisible("rmk", false);
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", true); //None
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", true); //None
      gr_orderCommodity.setColumnReadOnly("paletYn", true); //None
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("wrkStDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkStHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("rmk", true); //None

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "출발일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "출발시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "도착일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "도착시간");
      ed_wrkStDt.options.mandatory = true;
      ed_wrkStHh.options.mandatory = true;
      ed_wrkEndDt.options.mandatory = true;
      ed_wrkEndHh.options.mandatory = true;
      ed_wrkStDt.options.title = "출발일자";
      ed_wrkStHh.options.title = "출발시간";
      ed_wrkEndDt.options.title = "도착일자";
      ed_wrkEndHh.options.title = "도착시간";
      // ed_wrkStDt.validExp = "출발일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "출발시간 : yes : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "도착일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "도착시간 : yes : date=HHmm&length=4";

      //본선관리 번호 Validation / mandatory 설정
      ed_cvsslMgntNo.options.mandatory = false;
      ed_vsslCd.options.mandatory = false;
      ed_portcnt.options.mandatory = false;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_realMchtClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_lineCd, ed_cvsslMgntNo, ed_vsslCd, ed_portcnt, ed_dptWrkPlCd, ed_dptDtl, ed_arvWrkPlCd, ed_arvDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation Exp
      scwin.gridValidateInfo = [{
        id: "commCd",
        mandatory: true
      },
      //품명코드
      {
        id: "wrkStDt",
        isDate: true
      },
      //출발일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //출발일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //출발시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //도착일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //도착일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      } //도착시간
      ];
      // gr_orderCommodity.style.height = "210px";

      hid_tsYn.setValue(DsConstants.YN_NO); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      break;
    case DsConstants.ODR_KND_CD_DOMESTIC_BASE_INSIDE_ODR: // 내수 거점내 오더
    case DsConstants.ODR_KND_CD_BULK_CARGO_SHIFTING_ODR:
      // 벌크 이적
      dscommon.cf_HideObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_ShowObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("D");
      dscommon.cf_HideObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_ShowObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_HideObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_HideObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박명
      tbx_cvsslMgntNo_01.setValue("본번");
      dscommon.cf_HideObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("From");
      dscommon.cf_HideObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 출발일자, 출발시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      dscommon.cf_HideObject([tbx_selfCls_01, grp_selfCls_02]); // 자가구분

      dscommon.cf_HideObject([btn_SelectBL]);
      // 화면 삭제되어 버튼 관련기능 제거
      // if (odrKndCd == DsConstants.ODR_KND_CD_BULK_CARGO_SHIFTING_ODR) {
      //     dscommon.cf_HideObject([btn_OrderCopyDomestic]);
      // } else {
      //     dscommon.cf_ShowObject([btn_OrderCopyDomestic]);
      // }

      tbx_wrkStDtHh_01.setValue("출발일시");
      tbx_wrkEndDtHh_01.setValue("도착일시");
      tbx_clntMchtNo.setValue("관리번호");
      dscommon.cf_ShowObject([ed_clntMgntNo, ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("요율적용");
      dscommon.cf_ShowObject([acb_trfAdptCd]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", false);
      gr_orderCommodity.setColumnVisible("netWt", true);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", true);
      gr_orderCommodity.setColumnVisible("paletYn", true);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", false);
      gr_orderCommodity.setColumnVisible("wrkStDt", true);
      gr_orderCommodity.setColumnVisible("wrkStHh", true);
      gr_orderCommodity.setColumnVisible("wrkEndDt", true);
      gr_orderCommodity.setColumnVisible("wrkEndHh", true);
      gr_orderCommodity.setColumnVisible("rmk", true);
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", false); //"RealNumeric"
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", false); //"AlphaNum"
      gr_orderCommodity.setColumnReadOnly("paletYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkStDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkStHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("rmk", false); //"ANY"

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "출발일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "출발시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "도착일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "도착시간");
      ed_wrkStDt.options.mandatory = true;
      ed_wrkStHh.options.mandatory = true;
      ed_wrkEndDt.options.mandatory = true;
      ed_wrkEndHh.options.mandatory = true;
      ed_wrkStDt.options.title = "출발일자";
      ed_wrkStHh.options.title = "출발시간";
      ed_wrkEndDt.options.title = "도착일자";
      ed_wrkEndHh.options.title = "도착시간";
      // ed_wrkStDt.validExp = "출발일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "출발시간 : yes : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "도착일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "도착시간 : yes : date=HHmm&length=4";

      //본선관리 번호 Validation / Mandantory 설정
      ed_cvsslMgntNo.options.mandatory = true;
      ed_vsslCd.options.mandatory = true;
      ed_portcnt.options.mandatory = true;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_dptWrkPlCd, ed_dptDtl, ed_arvDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation Exp
      scwin.gridValidateInfo = [{
        id: "commCd",
        mandatory: true
      },
      //품명코드
      {
        id: "cstmrMgntNo",
        byteLength: "30"
      },
      //고객관리번호
      {
        id: "wrkStDt",
        isDate: true
      },
      //출발일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //출발일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //출발시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //도착일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //도착일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      },
      //도착시간
      {
        id: "rmk",
        byteLength: "100"
      } //설명
      ];
      // gr_orderCommodity.style.height = "230px";

      hid_tsYn.setValue(DsConstants.YN_NO); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      break;
    case DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR:
      // 벌크 장치장 경유 수입 TS 오더
      dscommon.cf_ShowObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_HideObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("E");
      dscommon.cf_ShowObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_ShowObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_ShowObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_ShowObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박
      tbx_cvsslMgntNo_01.setValue("본번/입항");
      dscommon.cf_ShowObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("From ~ To");
      dscommon.cf_ShowObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 출발일자, 출발시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      tbx_selfCls_01.setValue("자가구분");
      dscommon.cf_ShowObject([tbx_selfCls_01, grp_selfCls_02]); // 자가구분
      dscommon.cf_HideObject([grp_bk]);
      dscommon.cf_ShowObject([btn_SelectBL]);
      // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      hid_hsn.setValue(-1);
      tbx_wrkStDtHh_01.setValue("출발일시");
      tbx_wrkEndDtHh_01.setValue("도착일시");
      tbx_clntMchtNo.setValue("");
      dscommon.cf_HideObject([ed_clntMgntNo, ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("");
      dscommon.cf_HideObject([acb_trfAdptCd]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", true);
      gr_orderCommodity.setColumnVisible("netWt", false);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", false);
      gr_orderCommodity.setColumnVisible("paletYn", false);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("wrkStDt", true);
      gr_orderCommodity.setColumnVisible("wrkStHh", true);
      gr_orderCommodity.setColumnVisible("wrkEndDt", true);
      gr_orderCommodity.setColumnVisible("wrkEndHh", true);
      gr_orderCommodity.setColumnVisible("rmk", false);
      gr_orderCommodity.setColumnReadOnly("blNo", false); //"Upper"
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", true); //None
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", true); //None
      gr_orderCommodity.setColumnReadOnly("paletYn", true); //None
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("wrkStDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkStHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("rmk", true); //None

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "출발일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "출발시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "도착일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "도착시간");
      ed_wrkStDt.options.mandatory = true;
      ed_wrkStHh.options.mandatory = true;
      ed_wrkEndDt.options.mandatory = true;
      ed_wrkEndHh.options.mandatory = true;
      ed_wrkStDt.options.title = "출발일자";
      ed_wrkStHh.options.title = "출발시간";
      ed_wrkEndDt.options.title = "도착일자";
      ed_wrkEndHh.options.title = "도착시간";
      // ed_wrkStDt.validExp = "출발일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "출발시간 : yes : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "도착일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "도착시간 : yes : date=HHmm&length=4";

      $c.sbm.setAction($p, sbm_mainfestBillOfLading, "/ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingBulkListCMD.do");

      //본선관리 번호 Validation / Mandantory 설정
      ed_cvsslMgntNo.options.mandatory = true;
      ed_vsslCd.options.mandatory = true;
      ed_portcnt.options.mandatory = true;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_realMchtClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_lineCd, ed_cvsslMgntNo, ed_closeDt, ed_closeHh, ed_vsslCd, ed_portcnt, ed_dptWrkPlCd, ed_dptDtl, ed_arvWrkPlCd, ed_arvDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation Exp
      scwin.gridValidateInfo = [{
        id: "blNo",
        mandatory: true
      },
      //BL번호
      {
        id: "blNo",
        key: true
      },
      //BL번호
      {
        id: "commCd",
        mandatory: true
      },
      //품명코드
      // { id: "commNm", mandatory: true }, //품명코드
      {
        id: "commIdx",
        mandatory: true
      },
      //품명
      {
        id: "wrkStDt",
        isDate: true
      },
      //출발일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //출발일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //출발시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //도착일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //도착일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      } //도착시간
      ];

      // gr_orderCommodity.style.height = "210px";

      hid_hsn.setValue(-1); // hsn 초기화
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      hid_tsYn.setValue(DsConstants.YN_YES); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      break;
    case DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR:
      // 벌크 장치장 경유 수출 TS 오더
      dscommon.cf_ShowObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_HideObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("E");
      dscommon.cf_ShowObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_ShowObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_ShowObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_ShowObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박
      tbx_cvsslMgntNo_01.setValue("본번/입항");
      dscommon.cf_HideObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("From ~ To");
      dscommon.cf_ShowObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 출발일자, 출발시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      tbx_selfCls_01.setValue("자가/BK");
      dscommon.cf_ShowObject([tbx_selfCls_01, grp_selfCls_02, grp_bk]); // 자가구분

      dscommon.cf_HideObject([btn_SelectBL]);
      // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      tbx_wrkStDtHh_01.setValue("출발일시");
      tbx_wrkEndDtHh_01.setValue("도착일시");
      tbx_clntMchtNo.setValue("");
      dscommon.cf_HideObject([ed_clntMgntNo, ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("");
      dscommon.cf_HideObject([acb_trfAdptCd]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", false);
      gr_orderCommodity.setColumnVisible("netWt", false);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", false);
      gr_orderCommodity.setColumnVisible("paletYn", false);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("wrkStDt", true);
      gr_orderCommodity.setColumnVisible("wrkStHh", true);
      gr_orderCommodity.setColumnVisible("wrkEndDt", true);
      gr_orderCommodity.setColumnVisible("wrkEndHh", true);
      gr_orderCommodity.setColumnVisible("rmk", false);
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", true); //None
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", true); //None
      gr_orderCommodity.setColumnReadOnly("paletYn", true); //None
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("wrkStDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkStHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("rmk", true); //None

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "출발일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "출발시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "도착일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "도착시간");
      ed_wrkStDt.options.mandatory = true;
      ed_wrkStHh.options.mandatory = true;
      ed_wrkEndDt.options.mandatory = true;
      ed_wrkEndHh.options.mandatory = true;
      ed_wrkStDt.options.title = "출발일자";
      ed_wrkStHh.options.title = "출발시간";
      ed_wrkEndDt.options.title = "도착일자";
      ed_wrkEndHh.options.title = "도착시간";
      // ed_wrkStDt.validExp = "출발일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "출발시간 : yes : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "도착일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "도착시간 : yes : date=HHmm&length=4";

      //본선관리 번호 Validation / mandatory 설정
      ed_cvsslMgntNo.options.mandatory = false;
      ed_vsslCd.options.mandatory = false;
      ed_portcnt.options.mandatory = false;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_realMchtClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_lineCd, ed_cvsslMgntNo, ed_vsslCd, ed_portcnt, ed_dptWrkPlCd, ed_dptDtl, ed_arvWrkPlCd, ed_arvDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation Exp
      scwin.gridValidateInfo = [{
        id: "commCd",
        mandatory: true
      },
      //품명코드
      {
        id: "wrkStDt",
        isDate: true
      },
      //출발일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //출발일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //출발시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //도착일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //도착일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      } //도착시간
      ];
      // gr_orderCommodity.style.height = "210px";

      hid_hsn.setValue(-1); // hsn 초기화
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      hid_tsYn.setValue(DsConstants.YN_YES); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      break;
    case DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR:
      // 벌크 부두간 TS 오더
      dscommon.cf_HideObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_HideObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("E");
      dscommon.cf_ShowObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_HideObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_ShowObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_ShowObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박
      tbx_cvsslMgntNo_01.setValue("본번");
      dscommon.cf_HideObject([grp_closeDtm]); // 입항일시
      dscommon.cf_ShowObject([grp_tsCvsslMgntNo]); // TS 본번

      dscommon.cf_ShowObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 작업일자, 작업시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      dscommon.cf_HideObject([tbx_selfCls_01, grp_selfCls_02]); // 자가구분

      dscommon.cf_HideObject([btn_SelectBL]);
      // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      hid_hsn.setValue(0);
      tbx_wrkStDtHh_01.setValue("입항일시");
      tbx_wrkEndDtHh_01.setValue("출항일시");
      tbx_clntMchtNo.setValue("");
      dscommon.cf_HideObject([ed_clntMgntNo, ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("");
      dscommon.cf_HideObject([acb_trfAdptCd]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 벌크 부두간 TS 오더인 경우 품명 - Editing 할수 없음.

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", false);
      gr_orderCommodity.setColumnVisible("netWt", false);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", false);
      gr_orderCommodity.setColumnVisible("paletYn", false);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("wrkStDt", false);
      gr_orderCommodity.setColumnVisible("wrkStHh", false);
      gr_orderCommodity.setColumnVisible("wrkEndDt", false);
      gr_orderCommodity.setColumnVisible("wrkEndHh", false);
      gr_orderCommodity.setColumnVisible("rmk", false);
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", true); //None
      // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
      gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", true); //None
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", true); //None
      gr_orderCommodity.setColumnReadOnly("paletYn", true); //None
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("wrkStDt", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkStHh", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", true); //None
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", true); //None
      gr_orderCommodity.setColumnReadOnly("rmk", true); //None

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "입항일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "입항시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "출항일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "출항시간");
      ed_wrkStDt.options.mandatory = false;
      ed_wrkStHh.options.mandatory = false;
      ed_wrkEndDt.options.mandatory = false;
      ed_wrkEndHh.options.mandatory = false;
      ed_wrkStDt.options.title = "입항일자";
      ed_wrkStHh.options.title = "입항시간";
      ed_wrkEndDt.options.title = "출항일자";
      ed_wrkEndHh.options.title = "출항시간";
      // ed_wrkStDt.validExp = "입항일자 : no : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "입항시간 : no : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "출항일자 : no : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "출항시간 : no : date=HHmm&length=4";

      $c.sbm.setAction($p, sbm_mainfestBillOfLading, "/ds.sd.odrmgnt.odrreg.RetrieveVsslCdPortcntBulkListCMD.do");

      //본선관리 번호 Validation / Mandantory 설정
      ed_cvsslMgntNo.options.mandatory = true;
      ed_vsslCd.options.mandatory = true;
      ed_portcnt.options.mandatory = true;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_lineCd, ed_cvsslMgntNo, ed_vsslCd, ed_portcnt, ed_dptWrkPlCd, ed_arvWrkPlCd, ed_dptDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation Exp
      scwin.gridValidateInfo = [{
        id: "commCd",
        mandatory: true
      },
      //품명코드
      {
        id: "wrkStDt",
        isDate: true
      },
      //출발일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //출발일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //출발시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //도착일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //도착일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      } //도착시간
      ];

      // gr_orderCommodity.style.height = "230px";

      hid_hsn.setValue(-1); // hsn 초기화
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      hid_tsYn.setValue(DsConstants.YN_YES); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      break;
    default:
      /**
      * 기타 벌크 오더 + 내수 오더
      *
      * public static final String ODR_KND_CD_BULK_YARD_SHTL_ODR = "B5";	// 벌크 장치장셔틀오더
      * public static final String ODR_KND_CD_BULK_LDULD_ODR = "BL";	// 벌크 상하차오더
      * public static final String ODR_KND_CD_BULK_STORAGE_ODR = "BM";	// 벌크 보관오더
      * public static final String ODR_KND_CD_BULK_YARD_VIA_TS_ODR = "BS";	// 벌크 장치장경유 TS 오더
      * public static final String ODR_KND_CD_BULK_PIER_TS_ODR = "BT";	//  벌크 부두간 TS 오더
      *
      * public static final String ODR_KND_CD_DOMESTIC_BASE_INSIDE_ODR = "D1";	// 내수 거점내 오더
      * public static final String ODR_KND_CD_DOMESTIC_BASE_OUTSIDE_ODR = "D2";	// 내수 거점간 오더
      * public static final String ODR_KND_CD_DOMESTIC_FCTY_CRRYOUT_ODR = "D3";	// 내수 공장반출 오더
      * public static final String ODR_KND_CD_DOMESTIC_LOGIS_BASE_CRRYOUT_ODR = "D4";	// 내수 물류기지반출 오더
      * public static final String ODR_KND_CD_DOMESTIC_BASE_INSIDE_RETRV_ODR = "D5";	// 내수 거점간회수 오더
      * public static final String ODR_KND_CD_DOMESTIC_FCTY_OUTSIDE_RETRV_ODR = "D6";	//  내수 공장회수 오더
      * public static final String ODR_KND_CD_DOMESTIC_LOGIS_BASE_RETRV_ODR = "D7";		// 내수 물류기지회수 오더
      * public static final String ODR_KND_CD_DOMESTIC_LDULD_ODR = "DL";	// 내수 상하차 오더
      * public static final String ODR_KND_CD_DOMESTIC_STR_ODR = "DM";	// 내수 보관 오더
      * public static final String ODR_KND_CD_PIER_WAGES_ODR = "L1";	// 부두노임 오더
      * public static final String ODR_KND_CD_PIER_YARD_WAGES_ODR = "L2";	// 부두 장치장 노임 오더
      * public static final String ODR_KND_CD_COMMON_USE_YARD_WAGES_ODR = "L3";	// 상용 장치장 노임 오더
      * public static final String ODR_KND_CD_MONTH_PUBLIC_CHARGES_WAGES_ODR = "L4";	// 월 제세공과성 노임 오더
      * public static final String ODR_KND_CD_PACK_ODR = "P1";	// 포장 오더
      **/

      dscommon.cf_HideObject([tbx_realMchtClntNo_01, grp_realMchtClntNo_02]); // 실화주
      dscommon.cf_ShowObject([tbx_dmndNo_01, grp_dmndNo_02]); // 수요가

      scwin.f_setLineCd("D");
      dscommon.cf_HideObject([tbx_lineCd_01, grp_lineCd_02]); // LINE / 선사

      dscommon.cf_ShowObject([grp_picNm_picTelNo]); // 상차담당, 하차담당, 오더담당

      dscommon.cf_HideObject([grp_blNo_cvsslMgntNo]); // B/L , 본번, 항차,
      dscommon.cf_HideObject([tbx_vsslCd_01, grp_vsslCd_02]); // 선박명
      tbx_cvsslMgntNo_01.setValue("본번");
      dscommon.cf_HideObject([grp_closeDtm]); // 입항일시
      dscommon.cf_HideObject([grp_tsCvsslMgntNo]); // TS 본번

      tbx_fromTo.setValue("From ~ To");
      dscommon.cf_ShowObject([grp_arvWrkPlCd]); // 도착작업장

      dscommon.cf_ShowObject([tbx_wrkStDtHh_01, grp_wrkStDtHh_02]); // 출발일자, 출발시간
      dscommon.cf_ShowObject([tbx_wrkEndDtHh_01, grp_wrkEndDtHh_02]); // 도착일자, 도착시간

      dscommon.cf_HideObject([tbx_selfCls_01, grp_selfCls_02]); // 자가구분

      dscommon.cf_HideObject([btn_SelectBL]);
      // dscommon.cf_ShowObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거

      tbx_wrkStDtHh_01.setValue("출발일시");
      tbx_wrkEndDtHh_01.setValue("도착일시");
      tbx_clntMchtNo.setValue("관리번호");
      dscommon.cf_ShowObject([ed_clntMgntNo, ed_clntMgntNonm, btn_PopUp15]);
      tbx_trfAdptCd.setValue("요율적용");
      dscommon.cf_ShowObject([acb_trfAdptCd]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선인 경우 품명 - Editing 할수 없음.

      // 그리드 항목 설정
      gr_orderCommodity.setColumnVisible("blNo", false);
      gr_orderCommodity.setColumnVisible("netWt", true);
      gr_orderCommodity.setColumnVisible("cstmrMgntNo", true);
      gr_orderCommodity.setColumnVisible("paletYn", true);
      gr_orderCommodity.setColumnVisible("dptWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("arvWrkPlCd", true);
      gr_orderCommodity.setColumnVisible("wrkStDt", true);
      gr_orderCommodity.setColumnVisible("wrkStHh", true);
      gr_orderCommodity.setColumnVisible("wrkEndDt", true);
      gr_orderCommodity.setColumnVisible("wrkEndHh", true);
      gr_orderCommodity.setColumnVisible("rmk", true);
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("coshippingPsblYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("netWt", false); //"RealNumeric"
      gr_orderCommodity.setColumnReadOnly("cstmrMgntNo", false); //"AlphaNum"
      gr_orderCommodity.setColumnReadOnly("paletYn", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("dptWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("arvWrkPlCd", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("wrkStDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkStHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndDt", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("wrkEndHh", false); //"Numeric"
      gr_orderCommodity.setColumnReadOnly("rmk", false); //"ANY"

      gr_orderCommodity.setHeaderValue("wrkStDtHeader", "출발일자");
      gr_orderCommodity.setHeaderValue("wrkStHhHeader", "출발시간");
      gr_orderCommodity.setHeaderValue("wrkEndDtHeader", "도착일자");
      gr_orderCommodity.setHeaderValue("wrkEndHhHeader", "도착시간");
      ed_wrkStDt.options.mandatory = true;
      ed_wrkStHh.options.mandatory = true;
      ed_wrkEndDt.options.mandatory = true;
      ed_wrkEndHh.options.mandatory = true;
      ed_wrkStDt.options.title = "출발일자";
      ed_wrkStHh.options.title = "출발시간";
      ed_wrkEndDt.options.title = "도착일자";
      ed_wrkEndHh.options.title = "도착시간";
      // ed_wrkStDt.validExp = "출발일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkStHh.validExp = "출발시간 : yes : date=HHmm&length=4";
      // ed_wrkEndDt.validExp = "도착일자 : yes : date=YYYYMMDD&length=8";
      // ed_wrkEndHh.validExp = "도착시간 : yes : date=HHmm&length=4";

      //본선관리 번호 Validation / Mandantory 설정
      ed_cvsslMgntNo.options.mandatory = true;
      ed_vsslCd.options.mandatory = true;
      ed_portcnt.options.mandatory = true;

      // Vaildation 확인용 Object 설정
      scwin.vaildObj = new Array(acb_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_bilgClntNo, ed_sellLodeptCd, ed_bilgLodeptCd, ed_dptWrkPlCd, ed_dptDtl, ed_arvWrkPlCd, ed_arvDtl, ed_onPicNm, ed_onPicTelNo, ed_offPicNm, ed_offPicTelNo, ed_odrPicNm, ed_odrPicTelNo, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ta_rmk);

      // 오더 품명 GRID Vaildation Exp
      scwin.gridValidateInfo = [{
        id: "commCd",
        mandatory: true
      },
      //품명코드
      {
        id: "cstmrMgntNo",
        byteLength: "30"
      },
      //품명코드
      {
        id: "wrkStDt",
        isDate: true
      },
      //출발일자
      {
        id: "wrkStDt",
        calendarLength: "8"
      },
      //출발일자
      {
        id: "wrkStHh",
        calendarLength: "4"
      },
      //출발시간
      {
        id: "wrkEndDt",
        isDate: true
      },
      //도착일자
      {
        id: "wrkEndDt",
        calendarLength: "8"
      },
      //도착일자
      {
        id: "wrkEndHh",
        calendarLength: "4"
      },
      //도착시간
      {
        id: "rmk",
        byteLength: "100"
      } //품명코드
      ];
      // gr_orderCommodity.style.height = "230px";

      hid_tsYn.setValue(DsConstants.YN_NO); // TS 여부 (1 :  화물구분 T : 통과화물 만 조회), 0  :  화물구분 T : 통과화물 만 제외)
      if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
        ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분 - 당사운송
      }
      break;
  }
  if ($c.gus.cfIsNull($p, ed_odrNo.getValue().trim())) {
    scwin.f_setSellAndBilgDept(odrKndCd);
  }
  scwin.f_cfRefreshMandSign();
};

/**
 * method
 * @name f_cfRefreshMandSign
 * @description 필수입력 표시 변경
 */
scwin.f_cfRefreshMandSign = function () {
  let compArr = [{
    comp: ed_cvsslMgntNo,
    target: tbx_cvsslMgntNo_01
  }, {
    comp: ed_vsslCd,
    target: tbx_vsslCd_01
  }, {
    comp: ed_portcnt,
    target: tbx_portcnt
  }];
  for (let item of compArr) {
    if (item.comp.options.mandatory.toString() == "true") {
      if (!item.target.hasClass("req")) {
        item.target.addClass("req");
      }
    } else {
      if (item.target.hasClass("req")) {
        item.target.removeClass("req");
      }
    }
  }
};

/**
 * method
 * @name f_retrieveCtrtNo2
 * @description
 */
scwin.f_retrieveCtrtNo2 = function () {
  dma_cndCtrtNo.setEmptyValue();
  //검색조건값 세팅
  dma_cndCtrtNo.set("ctrtClntNo", ed_bilgClntNo.getValue()); //계약거래처
  dma_cndCtrtNo.set("bizDivCntrYn", "1"); //사업부문컨테이너여부
  dma_cndCtrtNo.set("bizDivBulkYn", ""); //사업부문벌크여부
  dma_cndCtrtNo.set("odrKndCd", odrKndCd); //사업부문벌크여부
  dma_cndCtrtNo.set("impExpDomesticClsCd", impExpClsCd); //수출입내수구분코드

  //조회
  $c.sbm.execute($p, sbm_retrieveCtrtNo2);
};

/**
 * method
 * @name f_dsManifestQueryConditionHeader
 * @description 적하목록조회조건 (BL / 선사항차별 품명 조회 조건 ) 초기화
 */
scwin.f_dsManifestQueryConditionHeader = function () {
  dma_manifestQueryCondition.setEmptyValue();
  hid_odrKndCd.setValue("");
  hid_hblNo.setValue("");
  ed_cvsslMgntNo.setValue("");
  hid_impExpDomesticClsCd.setValue("");
  hid_fioBtClsCd.setValue("");
  hid_commCd.setValue("");
  hid_tsYn.setValue("");

  // 조회 DataSet 초기화
  dma_manifestQueryCondition.set("msn", -1);
  hid_msn.setValue(-1);
  dma_manifestQueryCondition.set("hsn", -1);
  hid_hsn.setValue(-1);
  dma_manifestQueryCondition.set("bulkYn", scwin.bizDivBulkYn);
  hid_bulkYn.setValue(scwin.bizDivBulkYn);
};

/**
 * method
 * @name f_dsLobranQueryConditionHeader
 * @description 물류점소 영업부서 조회조건 초기화
 */
scwin.f_dsLobranQueryConditionHeader = function () {
  dma_lobranQueryCondition.setEmptyValue();
  dma_lobranQueryCondition.set("lobranCd", scwin.lobranCd);
  dma_lobranQueryCondition.set("lobranClsCd", "T");
  dma_lobranQueryCondition.set("deptmentCd", DsConstants.SALES_DEPARTMENT);
  dma_lobranQueryCondition.set("useYn", DsConstants.YN_YES);
};

/**
 * method
 * @name f_clearTabOrderInfo
 * @description Tab 페이지의 오더 정보를 초기화 한다.
 */
scwin.f_clearTabOrderInfo = function () {
  if ($c.gus.cfIsNull($p, $p.parent().hid_chkReterieve.getValue())) {
    $p.parent().hid_odrNo.setValue("");
  }
};

/**
 * method
 * @name f_setTabOrderInfo
 * @description Tab 페이지의 오더 정보를 설정 한다.
 */
scwin.f_setTabOrderInfo = function (odrNo) {
  if (!$c.gus.cfIsNull($p, odrNo)) {
    $p.parent().hid_odrNo.setValue(odrNo);
  }
};

/**
 * method
 * @name f_clearData
 * @description Data 초기화 (HTML INPUT)
 */
scwin.f_clearData = function () {
  // Order Master DataSet 값 초기화
  for (let i = 0; i < ds_order.getTotalCol(); i++) {
    ds_order.setCellData(ds_order.getRowPosition(), ds_order.getColumnID(i), "");
  }
  ed_lane.setValue("");
  ed_ctrtClntNm.setValue("");
  ed_bilgLodeptNm.setValue("");
  ed_sellLodeptNm.setValue("");
  ed_lineNm.setValue("");
  ed_shpCoClntNm.setValue("");
  ed_dptWrkPlNm.setValue("");
  ed_arvWrkPlNm.setValue("");
  ed_ctrtClntNm.options.hidVal = "";
  ed_bilgLodeptNm.options.hidVal = "";
  ed_sellLodeptNm.options.hidVal = "";
  ed_lineNm.options.hidVal = "";
  ed_shpCoClntNm.options.hidVal = "";
  ed_dptWrkPlNm.options.hidVal = "";
  ed_arvWrkPlNm.options.hidVal = "";
  ed_clntMgntNo.setValue("");
  ed_clntMgntNo.options.hidVal = "";
  hid_mgntNoclsCd.setValue(""); // 관리번호구분코드

  hid_odrKndCd.setValue(acb_odrKndCd.getValue()); // 오더종류
  hid_selfClsCd.setValue(DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분코드 - 벌크오더(당사운송 : LI)
  lc_selfClsCd.setValue(DsConstants.SELF_CLS_CD_MCOM_TRANS);
  hid_bizDivCntrYn.setValue(scwin.bizDivCntrYn); // 사업부문컨테이너여부
  hid_bizDivBulkYn.setValue(scwin.bizDivBulkYn); // 사업부문벌크여부
  hid_sellYn.setValue(DsConstants.YN_YES); // 매출여부
  rd_sellYn.setValue(DsConstants.YN_YES); // 매출여부
  rd_coshippingYn.setValue(DsConstants.YN_NO); // 합적여부
  hid_cntrDsgYn.setValue(DsConstants.YN_NO); // 컨테이너지정여부
  hid_transCargoClsCd.setValue(DsConstants.ODR_BULK); // 운송화물구분코드
  hid_impExpDomesticClsCd.setValue(dlt_dsCommonUtil_acb_odrKndCd.getCellData(acb_odrKndCd.getSelectedIndex(), "fltrCd2")); // 수출입내수구분코드

  hid_odrClsCd.setValue(DsConstants.YN_NO); // 오더구분코드
  hid_smsSndYn.setValue(DsConstants.YN_NO); // SMS전송여부
  hid_coshippingYn.setValue(DsConstants.YN_NO); // 합적여부
  hid_odrDcsnYn.setValue(DsConstants.YN_NO); // 오더확정여부
  hid_odrCnclYn.setValue(DsConstants.YN_NO); // 오더취소여부
  hid_odrDelYn.setValue(DsConstants.YN_NO); // 오더삭제여부
  hid_odrCompleteYn.setValue(DsConstants.YN_NO); // 오더완료여부
  hid_regBranCd.setValue(scwin.lobranCd); // 등록점소 - 사용자 설정 물류점소

  hid_wrkPatternCd.setValue("00"); // 작업유형 default 값

  // EMEDIT 팝업 확인을 위한 HIDDEN 초기화
  hid_chkCtrtClntNo.setValue(""); // 계약처
  hid_chkReqClntNo.setValue(""); // 요청처
  hid_chkBilgClntNo.setValue(""); // 청구처
  hid_chkRealMchtClntNo.setValue(""); // 실화주
  hid_chkDmndNo.setValue(""); // 수요가
  hid_chkSellLodeptCd.setValue(""); // 매출부서
  hid_chkBilgLodeptCd.setValue(""); // 청구부서
  hid_chkLineCd.setValue(""); // LINE
  hid_chkBlNo.setValue(""); // B/L 번호
  hid_chkCvsslMgntNo.setValue(""); // 본선관리번호
  hid_chkDptWrkPlCd.setValue(""); // 출발작업장
  hid_chkArvWrkPlCd.setValue(""); // 도착작업장

  hid_ctrtNo.setValue("");
  hid_chkReterieve.setValue(""); // 조회 성공여부 초기값

  // 출발일자, 도착일자 초기값 설정
  ed_wrkStDt.setValue(scwin.strCurDate);
  ed_wrkEndDt.setValue(scwin.strCurDate);

  // 오더 담당 정보 설정
  ed_odrPicNm.setValue($c.data.getMemInfo($p, "userNm") ?? "");
  ed_odrPicTelNo.setValue($c.data.getMemInfo($p, "userMpNo") ?? "");
};

/**
 * method
 * @name f_clearDataSetAll
 * @description 전체 DataSet 을 초기화 한다.
 */
scwin.f_clearDataSetAll = function () {
  // 오더기본정보 DataSet 초기화
  ds_order.removeAll();
  let row = ds_order.insertRow();
  ds_order.setRowPosition(row);

  // 오더 품목 정보  DataSet 초기화
  ds_orderCommodity.removeAll();
  tbx_totalRows1.setValue(ds_orderCommodity.getRowCount());

  // 계약  품명 조회 (ds_ctrtComm) 기본 DataSet 초기화
  ds_ctrtComm.removeAll();

  // 계약 거래처 정보 (dma_retrieveCtrtClnt) DataSet 초기화
  scwin.f_clearDataSetRetrieveCtrtClnt();

  // 계약번호 (ds_ctrtNo) DataSet 초기화
  ds_ctrtNo.removeAll();

  // 요청 거래처 정보 (ds_reqClntNo) DataSet 초기화
  ds_reqClntNo.removeAll();

  // 청구 거래처 정보 (ds_bilgClntNo) DataSet 초기화
  ds_bilgClntNo.removeAll();

  // 실화주 정보 (ds_realMchtClntNo) DataSet 초기화
  ds_realMchtClntNo.removeAll();

  // 매출정보 DataSet 초기화
  ds_orderSelling.removeAll();

  // 오더 B/L DataSet 초기화
  ds_orderBillOfLading.removeAll();
  scwin.f_dsManifestQueryConditionHeader(); // 적하목록조회조건 (BL / 선사항차별 품명 조회 조건 )

  // HIDDEN 값 초기화
  scwin.f_clearData();
  scwin.mgntTrgtClntYn = 0;
};

/**
 * method
 * @name f_clearDataSetRetrieveCtrtClnt
 * @description DataSet 초기화 처리  :  계약거래처 DataSet 을 초기화 한다.
 */
scwin.f_clearDataSetRetrieveCtrtClnt = function () {
  // 계약거래처 DataSet 을 초기화
  dma_retrieveCtrtClnt.setEmptyValue();
  hid_odrKndCd.setValue("");
  ed_ctrtClntNo.setValue("");

  // 계약거래처 DataSet 기본값 설정
  dma_retrieveCtrtClnt.set("bizDivCntrYn", scwin.bizDivCntrYn);
  hid_bizDivCntrYn.setValue(scwin.bizDivCntrYn);
  dma_retrieveCtrtClnt.set("bizDivBulkYn", scwin.bizDivBulkYn);
  hid_bizDivBulkYn.setValue(scwin.bizDivBulkYn);
};

/**
 * method
 * @name f_clearClntDataSet
 * @description DataSet 초기화 처리  :  요청거래처, 실화주, 청구거래처 DataSet 을 초기화 한다.
 */
scwin.f_clearClntDataSet = function () {
  ds_reqClntNo.removeAll(); // 요청거래처
  ds_realMchtClntNo.removeAll(); // 실화주
  ds_bilgClntNo.removeAll(); // 청구거래처

  ed_reqClntNo.setValue("");
  ed_realMchtClntNo.setValue("");
  ed_bilgClntNo.setValue("");
  hid_ctrtNo.setValue("");
};

/**
 * method
 * @name f_Retrieve
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  if (await $c.gus.cfValidate($p, [ed_odrNo])) {
    let odrNo = ed_odrNo.getValue().replace(/\s*$/, '');

    // DataSet 초기화
    scwin.f_clearDataSetAll();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfEnableBtnOnly($p, [btn_Create]);
    scwin.f_DisablePopUpObj();
    ds_orderSearch.setCellData(0, "odrNo", odrNo);
    hid_chkMode.setValue("");
    hid_odrJobType.setValue("");
    $c.sbm.execute($p, sbm_retrieve);
  }
};

/**
 * method
 * @name f_FieldClear
 * @description 조회 조건 초기화
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_odrNo]);
  ed_odrNo.focus();
};

/**
 * method
 * @name f_Create
 * @description 신규
 */
scwin.f_Create = function () {
  //데이터 헤더만 가져오기 위함을 알린다.
  //그래야 OnLoadCompleted event에서 메세지 나오지 않도록 할수 있다.
  $c.gus.cfTurnCreateFlag($p, true);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableAllBtn($p);
  if (hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR && hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
    $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_AddRow, btn_DeleteRow, btn_UndoMark]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  }
  $c.gus.cfEnableObjects($p, btn_SelectBL);

  // PopUp 이미지 버튼을 활성화 시킨다.
  scwin.f_EnablePopUpObj();

  // DataSet 초기화
  scwin.f_clearDataSetAll();
  scwin.setGrdOrderCommodityReadOnly(false);

  // row Count 초기화
  tbx_totalRows1.setValue(ds_orderCommodity.getRowCount());
  tbx_totalRows2.setValue(ds_orderSelling.getRowCount());

  // 매출목록 감추기
  dscommon.cf_HideObject([grp_odrSelItem_01, grp_odrSelItem_02]);

  // 오더 종류 기본값 설정
  scwin.f_defaultOdrKndSetting();

  // 신규시 tr_saveExport Object의 Action 변경
  $c.sbm.setAction($p, sbm_saveExport, "/ds.sd.odrmgnt.odrreg.RegistExportBulkOrderCMD.do");
  $c.sbm.setAction($p, sbm_saveImport, "/ds.sd.odrmgnt.odrreg.RegistImportBulkOrderCMD.do");
  hid_odrJobType.setValue(DGauceConstants.TB_JOB_INSERT);
  tbx_odrDcsnYn.setValue("");
  tbx_odrCompleteYn.setValue("");

  // 초기 입력 항목 focus
  acb_odrKndCd.focus();
  hid_chkMode.setValue("create");
  $p.parent().hid_chkReterieve.setValue("");
  scwin.f_clearTabOrderInfo();
};

/**
 * method
 * @name setGrdOrderCommodityReadOnly
 * @description 그리드 readonly설정
 */
scwin.setGrdOrderCommodityReadOnly = function (readOnly) {
  //그리드의 readOnly설정시 적용 우선순위 때문에 그리드만이 아니라 각 칼럼에도 설정함
  gr_orderCommodity.setReadOnly("grid", readOnly);
  let arrCol = ["blNo", "commCd",
  // "commNm",
  "commIdx", "coshippingPsblYn", "netWt", "cstmrMgntNo", "paletYn", "dptWrkPlCd", "arvWrkPlCd", "wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh", "rmk"];
  for (let colId of arrCol) {
    gr_orderCommodity.setColumnReadOnly(colId, readOnly);
  }
};

/**
 * method
 * @name f_Update
 * @description 수정
 */
scwin.f_Update = function () {
  $c.gus.cfTurnCreateFlag($p, false);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableAllBtn($p);
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
    $c.gus.cfDisableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]); // 수입 본선, 부두간 TS 인 경우 품명 - Editing 할수 없음.
    $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Save, btn_Delete]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Save, btn_Delete, btn_AddRow, btn_DeleteRow, btn_UndoMark]);
  }
  $c.gus.cfEnableObjects($p, btn_SelectBL);

  // PopUp 이미지 버튼을 활성화 시킨다.
  scwin.f_EnablePopUpObj();

  // 계약거래처 및 계약번호 비활성화
  $c.gus.cfEnableObj($p, acb_odrKndCd, false); // 계약거래처코드 비활성화
  $c.gus.cfEnableObj($p, ed_ctrtClntNo, false); // 계약거래처코드 비활성화
  $c.gus.cfEnableObj($p, ed_ctrtClntNm, false); // 계약거래처명 비활성화
  $c.gus.cfEnableObj($p, btn_PopUp1, false); // 계약거래처 PopUp  버튼 비활성화

  if (hid_odrWrkPathCnt.getValue() > 0 && hid_odrWrkPathCnt.getValue() >= ds_orderCommodity.getRowCount() && hid_odrDcsnYn.getValue() != DsConstants.YN_YES) {
    // 오더 확정 버튼 활성화
    $c.gus.cfEnableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2]);
  }

  //작업경로 생성시, 매출여부 비활성화
  if (hid_odrWrkPathCnt.getValue() > 0) {
    $c.gus.cfDisableObjects($p, [rd_sellYn, rd_coshippingYn]);
  } else {
    //작업경로가 지정되지 않은 경우
    $c.gus.cfEnableObjects($p, [rd_sellYn, rd_coshippingYn]);
  }
  $c.gus.cfEnableObj($p, lc_ctrtNo, false); // 계약번호 비활성화

  scwin.setGrdOrderCommodityReadOnly(false);

  // 수정시 sbm_saveExport / sbm_saveImport Object의 Action 변경
  $c.sbm.setAction($p, sbm_saveExport, "/ds.sd.odrmgnt.odrreg.UpdateExportBulkOrderCMD.do");
  $c.sbm.setAction($p, sbm_saveImport, "/ds.sd.odrmgnt.odrreg.UpdateImportBulkOrderCMD.do");
  hid_odrJobType.setValue(DGauceConstants.TB_JOB_UPDATE);

  // 실적 발생여부를 조회하여 수정항목을 설정한다.
  if (scwin.f_chkResultsConfirmation()) {
    // 수정불가 항목을 Disable 한다.
    // 수정 불가항목  :  오더번호, 오더종류, 계약거래처, 계약번호, 대표거래처
    //				, 출발작업장, 도착작업장, 작업시작일자, 작업시작시간, 작업종료일자, 작업종료시간
    //				, 자가구분, 작업유형, 합적여부 (벌크오더 화면에는 해당되지 않는다.
    $c.gus.cfDisableObjects($p, [ed_dptWrkPlCd, ed_dptWrkPlNm, btn_PopUp12, ed_arvWrkPlCd, ed_arvWrkPlNm, btn_PopUp13, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, rd_coshippingYn]); //btn_PopUp14
    $c.gus.cfDisableBtnOnly($p, [btn_Delete]);
  }
  let commodityRow = gr_orderCommodity.getFocusedRowIndex();
  // 품명별 실적 생성여부를 확인한다.
  // 해당 품명의 실적 발생여부를 확인하여 수정 가능 항목을 설정한다.
  // 실적 발생시 수정할 수 없다.
  // 실적 발생여부를 조회하여 수정항목을 설정한다.
  if (commodityRow >= 0) {
    if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
      if (scwin.f_chkResultsConfirmationCommodity(commodityRow)) {
        scwin.setGrdOrderCommodityReadOnly(true);
        $c.gus.cfDisableBtnOnly($p, [btn_DeleteRow]);
      } else {
        scwin.setGrdOrderCommodityReadOnly(false);
        if (hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR && hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
          $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]);
        }
      }
    }

    // 품명별 작업경로 생성여부를 확인한다.
    // 작업경로가 생성된 품명은 품명을 변경할수 없다.
    if (ds_orderCommodity.getCellData(commodityRow, "odrWrkPathYn") == DsConstants.YN_YES) {
      if (!gr_orderCommodity.getReadOnly("grid")) {
        gr_orderCommodity.setColumnReadOnly("blNo", true); //None
        gr_orderCommodity.setColumnReadOnly("commCd", true); //None
        // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
        gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
      }
    }
  }

  // 요청거래처 EMEDIT 로 focus 이동
  ed_reqClntNo.focus();

  // 그리드 품명 필드에 Focus이동
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
    gr_orderCommodity.setFocusedCell(commodityRow, "blNo", true);
  } else {
    gr_orderCommodity.setFocusedCell(commodityRow, "commCd", true);
  }
  hid_chkMode.setValue("");
};

/**
 * method
 * @name f_Save
 * @description 저장 (수출/내수운송)
 */
scwin.f_Save = async function () {
  let gubunCode = dlt_dsCommonUtil_acb_odrKndCd.getCellData(acb_odrKndCd.getSelectedIndex(), "fltrCd2");
  if ($c.gus.cfIsNull($p, hid_odrKndCd.getValue())) {
    hid_odrKndCd.setValue(acb_odrKndCd.getValue());
  }

  //동부메탈 오더번호 셋팅 20100910
  if (!$c.gus.cfIsNull($p, $p.parent().hid_buyOrdNo.getValue())) {
    ds_order.setCellData(1, "clntMgntNo", $p.parent().hid_buyOrdNo.getValue());
  }
  if (gubunCode == DsConstants.IMP_CD) {
    await scwin.f_SaveImportBulk();
  } else {
    await scwin.f_SaveExportBulk();
  }
};

/**
 * method
 * @name f_Delete
 * @description 삭제
 */
scwin.f_Delete = async function () {
  if (await $c.win.confirm($p, "오더번호  :  " + MSG_CM_CRM_008.replace("%1", ed_odrNo.getValue()))) {
    $c.sbm.execute($p, sbm_delete);
  }
  hid_chkMode.setValue("");
};

/**
 * method
 * @name f_SaveExportBulk
 * @description 저장 (수출/내수운송)
 */
scwin.f_SaveExportBulk = async function () {
  // 작업구분에 따른 확인
  if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT) {
    // INSERT
  } else {
    // UPDATE
    if (!ds_order.getModifiedIndex().length && !ds_orderCommodity.getModifiedIndex().length) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("오더정보"));
      return false;
    }
  }

  // 필수 입력사항을 체크
  if ((await scwin.f_validChk()) && (await scwin.f_validChkGrid())) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001.replace("%1", "오더품목정보"))) {
      hid_chkMode.setValue("");
      ds_orderSearch.setCellData(0, "odrNo", ed_odrNo.getValue().replace(/\s*$/, ''));
      $c.sbm.execute($p, sbm_saveExport);
    }
  }
};

/**
 * method
 * @name f_SaveImportBulk
 * @description 저장 (수입)
 */
scwin.f_SaveImportBulk = async function () {
  // 작업구분에 따른 확인
  if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT) {
    // INSERT
  } else {
    // UPDATE
    if (!ds_order.getModifiedIndex().length && !ds_orderCommodity.getModifiedIndex().length) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("오더정보"));
      return false;
    }
  }

  // 필수 입력사항을 체크
  if ((await scwin.f_validChk()) && (await scwin.f_validChkGrid())) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001.replace("%1", "오더품목정보"))) {
      hid_chkMode.setValue("");
      ds_orderSearch.setCellData(0, "odrNo", ed_odrNo.getValue().replace(/\s*$/, ''));
      $c.sbm.execute($p, sbm_saveImport);
    }
  }
};

/**
 * method
 * @name f_validChk
 * @description 저장전 validation check - 오더 정보
 */
scwin.f_validChk = async function () {
  if (!(await $c.gus.cfValidate($p, scwin.vaildObj))) {
    return false;
  }

  // 대표 거래처 정보 설정
  if ($c.gus.cfIsNull($p, hid_repClntNo.getValue())) {
    hid_repClntNo.setValue(ed_ctrtClntNo.getValue());
  }
  if (lc_ctrtNo.getValue() == "선택") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
    return false;
  }
  if ($c.gus.cfIsNull($p, hid_regBranCd.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002 + "\n 사용자 정보[물류점소]를 확인하시기 바랍니다.", new Array("등록점소코드"));
    return false;
  }

  // 벌크 이적오더, 내수 거점내 오더인 경우 출발작업장을 도착 작업장으로 자동 설정
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_DOMESTIC_BASE_INSIDE_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_CARGO_SHIFTING_ODR) {
    if (!$c.gus.cfIsNull($p, ed_dptWrkPlCd.getValue().trim())) {
      ed_arvWrkPlCd.setValue(ed_dptWrkPlCd.getValue());
    }
  }
  const orderRow = ds_order.getRowPosition();
  let order = ds_order.getRowJSON(orderRow);
  // 수정모드일 경우 - 작업경로가 생성된 경우 출발지, 도착지 정보가 변경되면 작업경로가 삭제된다.
  if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
    if (hid_odrWrkPathCnt.getValue() > 0 && hid_odrWrkPathCnt.getValue() >= ds_orderCommodity.getRowCount()) {
      // 작업경로가 생성된 경우
      if (order.dptWrkPlCd != ds_order.getOriginalCellData(orderRow, "dptWrkPlCd") || order.arvWrkPlCd != ds_order.getOriginalCellData(orderRow, "arvWrkPlCd")) {
        // 출발지, 도착지 정보가 변경된 경우
        await $c.gus.cfAlertMsg($p, scwin.WorkPathMessage);
      }
    }
  }
  if (grp_wrkEndDtHh_02.getStyle("display") !== "none") {
    // 출발일자, 도착일자 확인

    // 출발작업일자가 도착작업일자보다 큰 경우
    if (ed_wrkStDt.getValue().trim() > ed_wrkEndDt.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, new Array("도착작업일자", "출발작업일자"));
      ed_wrkEndDt.focus();
      return false;
    }

    // 출발작업시간이 도착작업시간보다 큰 경우
    if (ed_wrkStDt.getValue().trim() == ed_wrkEndDt.getValue().trim() && ed_wrkStHh.getValue().trim() >= ed_wrkEndHh.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, new Array("도착작업시간", "출발작업시간"));
      ed_wrkEndHh.focus();
      return false;
    }
  }

  // 상차, 하차, 오더 담당 전화번호 유효성 확인
  if (grp_picNm_picTelNo.getStyle("display") !== "none") {
    if (ed_onPicTelNo.getValue() != "") {
      if (!dscommon.cf_PhoneCheck(ed_onPicTelNo)) {
        return false;
      }
    }
    if (ed_offPicTelNo.getValue() != "") {
      if (!dscommon.cf_PhoneCheck(ed_offPicTelNo)) {
        return false;
      }
    }
    if (ed_odrPicTelNo.getValue() != "") {
      if (!dscommon.cf_PhoneCheck(ed_odrPicTelNo)) {
        return false;
      }
    }
  }

  // 자가구분코드가 설정되지 않은 경우 당사운송(LI)으로 설정
  if ($c.gus.cfIsNull($p, ds_order.getCellData(ds_order.getRowPosition(), "selfClsCd"))) {
    ds_order.setCellData(ds_order.getRowPosition(), "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분코드 - 벌크오더(당사운송 : LI)
  }

  // 품명 1건인 경우 합적할수 없습니다.
  if (ds_orderCommodity.getRowCount() <= 1 && rd_coshippingYn.getValue() == "1") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, new Array("오더품목정보가 1건 이하인 경우", "합적"));
    return false;
  }
  return true;
};

/**
 * method
 * @name f_validChkGrid
 * @description 저장전 validation check - 오더 정보
 */
scwin.f_validChkGrid = async function () {
  if (!ds_orderCommodity.getRowCount()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("오더품목정보"));
    return false;
  }
  if (!(await $c.gus.cfValidateGrid($p, "gr_orderCommodity", null, null, scwin.gridValidateInfo, gr_orderCommodity.getUserData("gridName")))) {
    return false;
  }
  let rowObj = null;
  // 일자, 시간 확인
  for (let idx = 0; idx < ds_orderCommodity.getRowCount(); idx++) {
    rowObj = ds_orderCommodity.getRowJSON(idx);
    // BL 입력에 따른 오류 확인
    // 벌크 수입일반, 벌크 장치장 경유 수입 TS 오더
    if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR && hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
      // 저장된 오더 B/L 정보에 존재하는 BL 번호인지 확인
      if ($c.gus.cfIsNull($p, rowObj.blNo)) {
        await $c.gus.cfAlertMsg($p, "BL 번호가 입력되지 않았습니다.");
        gr_orderCommodity.setFocusedCell(idx, "blNo", true);
        return false;
      }
      let chkBlNo = false;
      for (let i = 0; i < ds_orderBillOfLading.getRowCount(); i++) {
        if (rowObj.blNo == ds_orderBillOfLading.getCellData(idx, "blNo")) {
          chkBlNo = true;
          break;
        }
      }
      if (!chkBlNo) {
        await $c.gus.cfAlertMsg($p, "BL 번호가 잘못 입력되었습니다. \n BL 번호를 확인해 주시기 바랍니다.");
        gr_orderCommodity.setFocusedCell(idx, "blNo", true);
        return false;
      }
    }

    // 수량, 중량, CBM 중 한가지는 입력하여야 합니다.
    if (rowObj.qty == 0 && rowObj.grossWt == 0 && rowObj.cbm == 0) {
      await $c.gus.cfAlertMsg($p, "수량, 중량, CBM 중 한가지는 입력하셔야 합니다.");
      gr_orderCommodity.setFocusedCell(idx, "qty", true);
      return false;
    }
    //수량이 0 이면
    if (rowObj.qty == 0 || rowObj.qty == "" || $c.gus.cfIsNull($p, rowObj.qty)) {
      ds_orderCommodity.setCellData(idx, "qty", 0);
      rowObj.qty = "0";
    }

    // 수량 단위 선택 확인
    if (rowObj.qty > 0 && $c.gus.cfIsNull($p, rowObj.qtyUnitCd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, new Array("수량단위"));
      gr_orderCommodity.setFocusedCell(idx, gr_orderCommodity.getFocusedColumnIndex() ?? 3, false);
      return false;
    }

    // 수량입력 확인
    if (rowObj.qty == 0 && !$c.gus.cfIsNull($p, rowObj.qtyUnitCd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, new Array("수량"));
      gr_orderCommodity.setFocusedCell(idx, "qty", true);
      return false;
    }

    // 중량 단위 선택 확인
    if (rowObj.grossWt > 0 && $c.gus.cfIsNull($p, rowObj.unitCd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, new Array("중량단위"));
      gr_orderCommodity.setFocusedCell(idx, gr_orderCommodity.getFocusedColumnIndex() ?? 3, false);
      return false;
    }

    // 중량입력 확인
    if (rowObj.grossWt == 0 && !$c.gus.cfIsNull($p, rowObj.unitCd)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, new Array("중량"));
      gr_orderCommodity.setFocusedCell(idx, "qty", true);
      return false;
    }

    // 수량 유효성 확인
    if (rowObj.qty < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, new Array("수량", "0"));
      gr_orderCommodity.setFocusedCell(idx, "qty", true);
      return false;
    }

    // 중량 유효성 확인
    if (rowObj.grossWt < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, new Array("중량", "0"));
      gr_orderCommodity.setFocusedCell(idx, "qty", true);
      return false;
    }

    // CBM 유효성 확인
    if (rowObj.cbm < 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, new Array("CBM", "0"));
      gr_orderCommodity.setFocusedCell(idx, "qty", true);
      return false;
    }
    if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
      // 수입 본선,  수출 본선, 부두간 TS 오더인 경우 - 품명별 출,도착일시를 자동 설정한다,
      // 품명 출발 작업일자가 NULL 인경우 오더 정보의 출발 작업일자를 설정
      if (rowObj.wrkStDt.trim() == "") {
        ds_orderCommodity.setCellData(idx, "wrkStDt", ed_wrkStDt.getValue().trim());
      }
      // 품명 출발 작업시간이 NULL 인경우 오더 정보의 출발 작업시간를 설정
      if (rowObj.wrkStHh.trim() == "") {
        ds_orderCommodity.setCellData(idx, "wrkStHh", ed_wrkStHh.getValue().trim());
      }
      // 품명 도착 작업일자가 NULL 인경우 오더 정보의 도착 작업일자를 설정
      if (rowObj.wrkEndDt.trim() == "") {
        ds_orderCommodity.setCellData(idx, "wrkEndDt", ed_wrkEndDt.getValue().trim());
      }
      // 품명 도착 작업시간이 NULL 인경우 오더 정보의 도착 작업시간를 설정
      if (rowObj.wrkEndHh.trim() == "") {
        ds_orderCommodity.setCellData(idx, "wrkEndHh", ed_wrkEndHh.getValue().trim());
      }
      rowObj = ds_orderCommodity.getRowJSON(idx);
    } else {
      const msg = MSG_CM_ERR_031 + MSG_CM_ERR_061.replace("%1", "%3").replace("%2", "%4");
      if (grp_wrkEndDtHh_02.getStyle("display") !== "none") {
        // 품명 출발 작업일자가 NULL 인경우 오더 정보의 출발 작업일자를 설정
        if (rowObj.wrkStDt.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkStDt", ed_wrkStDt.getValue().trim());
        }
        // 품명 출발 작업시간이 NULL 인경우 오더 정보의 출발 작업시간를 설정
        if (rowObj.wrkStHh.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkStHh", ed_wrkStHh.getValue().trim());
        }
        // 품명 도착 작업일자가 NULL 인경우 오더 정보의 도착 작업일자를 설정
        if (rowObj.wrkEndDt.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkEndDt", ed_wrkEndDt.getValue().trim());
        }
        // 품명 도착 작업시간이 NULL 인경우 오더 정보의 도착 작업시간를 설정
        if (rowObj.wrkEndHh.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkEndHh", ed_wrkEndHh.getValue().trim());
        }
        rowObj = ds_orderCommodity.getRowJSON(idx);
        //오더정보의 출발작업일자/시간과 품명목록의 출발작업일자/시간 비교
        if (!scwin.f_chkTime(ed_wrkStDt.getValue().trim(), ed_wrkStHh.getValue().trim(), rowObj.wrkStDt, rowObj.wrkStHh)) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 출발작업일자/시간", "오더정보의 출발작업일자/시간 이후"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkStDt", true);
          return false;
        }

        //오더정보의 도착작업일자/시간과 품명목록의 도착작업일자/시간 비교
        if (!scwin.f_chkTime(rowObj.wrkEndDt, rowObj.wrkEndHh, ed_wrkEndDt.getValue().trim(), ed_wrkEndHh.getValue().trim())) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 도착작업일자/시간", "오더정보의 도착작업일자/시간 이전"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkEndDt", true);
          return false;
        }

        // 품명별 출발작업일자/시간과 도착작업일자/시간 비교
        if (!scwin.f_chkTimeNotEqual(rowObj.wrkStDt, rowObj.wrkStHh, rowObj.wrkEndDt, rowObj.wrkEndHh)) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 출발작업일자/시간", "도착작업일자/시간 이전"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkEndDt", true);
          return false;
        }

        // 오더정보의 출발작업일자/시간과 품명목록의 출발작업일자/시간 일치 확인
        if (!scwin.f_chkTimeEqual(ed_wrkStDt.getValue().trim(), ed_wrkStHh.getValue().trim(), rowObj.wrkStDt, rowObj.wrkStHh)) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 출발작업일자/시간", "오더정보의 출발작업일자/시간"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkStDt", true);
          return false;
        }

        //오더정보의 도착작업일자/시간과 품명목록의 도착작업일자/시간 일치 확인
        if (!scwin.f_chkTimeEqual(rowObj.wrkEndDt, rowObj.wrkEndHh, ed_wrkEndDt.getValue().trim(), ed_wrkEndHh.getValue().trim())) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 도착작업일자/시간", "오더정보의 도착작업일자/시간"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkEndDt", true);
          return false;
        }
      } else {
        // 품명 작업시작일자가 NULL 인경우 오더 정보의 작업시작일자를 설정
        if (rowObj.wrkStDt.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkStDt", ed_wrkStDt.getValue().trim());
        }
        // 품명 작업시작시간이 NULL 인경우 오더 정보의 작업시작시간를 설정
        if (rowObj.wrkStHh.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkStHh", ed_wrkStHh.getValue().trim());
        }
        // 품명 작업종료일자가 NULL 인경우 오더 정보의 작업시작일자를 설정
        if (rowObj.wrkEndDt.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkEndDt", ed_wrkEndDt.getValue().trim());
        }
        // 품명 작업종료시간이 NULL 인경우 오더 정보의 작업시작시간를 설정
        if (rowObj.wrkEndHh.trim() == "") {
          ds_orderCommodity.setCellData(idx, "wrkEndHh", ed_wrkEndHh.getValue().trim());
        }
        rowObj = ds_orderCommodity.getRowJSON(idx);
        //오더정보의 작업시작일자/시간과 품명목록의 작업시작일자/시간 비교
        if (!scwin.f_chkTime(ed_wrkStDt.getValue().trim(), ed_wrkStHh.getValue().trim(), rowObj.wrkStDt, rowObj.wrkStHh)) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 작업시작일자/시간", "오더정보의 작업시작일자/시간 이후"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkStDt", true);
          return false;
        }

        // 품명별 작업시작일자/시간과 작업완료일자/시간 비교
        if (!scwin.f_chkTimeNotEqual(rowObj.wrkStDt, rowObj.wrkStHh, rowObj.wrkEndDt, rowObj.wrkEndHh)) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 작업시작일자/시간", "작업완료일자/시간 이전"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkEndDt", true);
          return false;
        }

        // 오더정보의 작업시작일자/시간과 품명목록의 작업시작일자/시간 일치 확인
        if (!scwin.f_chkTimeEqual(ed_wrkStDt.getValue().trim(), ed_wrkStHh.getValue().trim(), rowObj.wrkStDt, rowObj.wrkStHh)) {
          await $c.gus.cfAlertMsg($p, msg, ["품명목록", idx + 1, "품명의 작업시작일자/시간", "오더정보의 작업시작일자/시간"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_orderCommodity.setFocusedCell(idx, "wrkStDt", true);
          return false;
        }
      }
    }
    const orderRow = ds_order.getRowPosition();
    let order = ds_order.getRowJSON(orderRow);
    // 출발지 정보 변경시 오더품명 출발지 정보 변경
    if ($c.gus.cfIsNull($p, rowObj.dptWrkPlCd.trim()) || order.dptWrkPlCd != ds_order.getOriginalCellData(ds_order.getRowPosition(), "dptWrkPlCd")) {
      // 출발작업장코드 자동 설정
      ds_orderCommodity.setCellData(idx, "dptWrkPlCd", ed_dptWrkPlCd.getValue().trim());
    }

    // 도착지 정보 변경시 오더품명 도착지 정보 변경
    if ($c.gus.cfIsNull($p, rowObj.arvWrkPlCd.trim()) || order.arvWrkPlCd != ds_order.getOriginalCellData(ds_order.getRowPosition(), "arvWrkPlCd")) {
      // 도착작업장코드 자동 설정
      ds_orderCommodity.setCellData(idx, "arvWrkPlCd", ed_arvWrkPlCd.getValue().trim());
    }
  }
  return true;
};

/**
 * method
 * @name f_RmkIfno
 * @description Rmk 정보입력 화면 팝업
 */
scwin.f_RmkIfno = async function () {
  let odrNo = ds_order.getCellData(ds_order.getRowPosition(), "odrNo");
  if ($c.gus.cfIsNull($p, odrNo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("오더정보"));
    return false;
  }
  let arrParam = new Array(10);
  arrParam[0] = odrNo; //오더번호
  arrParam[1] = "B";
  let options = {
    id: "sd_402_01_29p_popup",
    popupName: "특이사항수정",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 800,
    height: 500
  };

  //상세화면 호출
  rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_45p.xml", options, arrParam);
};

/**
 * method
 * @name f_AddRow
 * @description 그리드 행추가
 */
scwin.f_AddRow = function () {
  scwin.v_count = 0;
  scwin.v_rtnList = 0;
  let data = {
    // 출발지/도착지 설정
    "dptWrkPlCd": ed_dptWrkPlCd.getValue().replace(/\s*$/, ''),
    "dptWrkPlNm": ed_dptWrkPlNm.getValue(),
    "commIdx": "",
    "qty": "0",
    "grossWt": "0",
    "netWt": "0",
    "cbm": "0",
    "len": "0"
  };
  if (grp_arvWrkPlCd.getStyle("display") !== "none") {
    data.arvWrkPlCd = ed_arvWrkPlCd.getValue().replace(/\s*$/, '');
    data.arvWrkPlNm = ed_arvWrkPlNm.getValue();
  }

  // 출발일시/도착일시 설정
  if (grp_wrkStDtHh_02.getStyle("display") !== "none") {
    data.wrkStDt = ed_wrkStDt.getValue().replace(/\s*$/, '');
    data.wrkStHh = ed_wrkStHh.getValue().replace(/\s*$/, '');
  }
  if (grp_wrkEndDtHh_02.getStyle("display") !== "none") {
    data.wrkEndDt = ed_wrkEndDt.getValue().replace(/\s*$/, '');
    data.wrkEndHh = ed_wrkEndHh.getValue().replace(/\s*$/, '');
  }
  let odrNo = ed_odrNo.getValue().replace(/\s*$/, '');
  // 수정시 오더번호 설정
  if (!$c.gus.cfIsNull($p, odrNo)) {
    data.odrNo = odrNo;
  }
  ds_orderCommodity.insertJSON(ds_orderCommodity.getRowCount(), [data]);
  gr_orderCommodity.setFocusedCell(ds_orderCommodity.getRowCount() - 1, gr_orderCommodity.getFocusedColumnIndex() ?? 3, false);
  tbx_totalRows1.setValue(ds_orderCommodity.getRowCount());
};

/**
 * method
 * @name f_DeleteRow
 * @description 그리드 행삭제
 */
scwin.f_DeleteRow = async function () {
  let row = gr_orderCommodity.getFocusedRowIndex();
  let rowObj = null;
  if (row >= 0) {
    rowObj = ds_orderCommodity.getRowJSON(row);
    if (!$c.gus.cfIsNull($p, rowObj.wrkRsltsNo.trim())) {
      // 실적이 존재하는 경우
      await $c.gus.cfAlertMsg($p, "실적이 발생한 품명은 삭제할수 없습니다."); //"실적이 발생한 품명은 삭제할수 없습니다."
    } else {
      // 수입본선 , 수입일반 오더의 경우  B/L 정보도 삭제 하여야 한다.

      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR) {
        // 수입 본선 오더인 경우 - 품명코드가 동일한 BL 삭제
        let matched = ds_orderBillOfLading.getMatchedIndex("commCd", rowObj.commCd, true);
        if (matched.length) {
          scwin.deleteRows(ds_orderBillOfLading, matched);
        }
      } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
        // 수입 일반 오더인 경우 - BL번호가 동일한 BL 삭제
        let matched = ds_orderBillOfLading.getMatchedIndex("blNo", rowObj.blNo, true);
        if (matched.length) {
          scwin.deleteRows(ds_orderBillOfLading, matched);
        }
      }

      // 품명 삭제
      scwin.deleteRow(ds_orderCommodity, row);
      let rowCnt = ds_orderCommodity.getRowCount();
      if (rowCnt <= row) {
        row = 0;
      }
      if (rowCnt) {
        gr_orderCommodity.setFocusedCell(row, gr_orderCommodity.getFocusedColumnIndex() ?? 3, false);
      }
    }
  }
  if (!ds_orderCommodity.getRowCount()) {
    ed_lineNm.setValue("");
    hid_chkLineCd.setValue(""); // LINE
    ed_lineCd.setValue(""); //LINE 코드
    ed_lineCd.options.hidVal = ""; //LINE 코드
    ed_shpCoClntNm.setValue("");
    hid_shpCoClntNo.setValue("");
  }

  // 여기 수정....20061031 박홍준...
  // 저장된 B/L 정보와 품명 B/L 정보를 조회하여 사용하지않는 오더 B/L 정보를 삭제한다. - 수입본선, 부두간 TS 제외
  scwin.deleteUnuseOrderBillOfLading();
  tbx_totalRows1.setValue(ds_orderCommodity.getRowCount());
};

/**
 * method
 * @name f_UndoRow
 * @description 그리드 취소
 */
scwin.f_UndoRow = function () {
  let row = gr_orderCommodity.getFocusedRowIndex();
  // 수입본선 , 수입일반 오더의 경우  B/L 정보도 삭제 하여야 한다.
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR) {
    // 수입 일반 오더인 경우 - 품명코드가 동일한 BL 삭제
    let matched = ds_orderBillOfLading.getMatchedIndex("commCd", rowObj.commCd, true);
    if (matched.length) {
      scwin.deleteRows(ds_orderBillOfLading, matched);
    }
  } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
    let row = gr_orderCommodity.getFocusedRowIndex();
    let blNo = ds_orderCommodity.getCellData(row, "blNo");
    // 수입 일반 오더인 경우 - BL번호가 동일한 BL 삭제
    for (let i = ds_orderBillOfLading.getRowCount() - 1; i >= 0; i--) {
      if (blNo == ds_orderBillOfLading.getCellData(i, "blNo")) {
        scwin.deleteRow(ds_orderBillOfLading, i);
        if (!ds_orderBillOfLading.getRowCount() && !ds_orderCommodity.getRowCount()) {
          ed_lineNm.setValue("");
          hid_chkLineCd.setValue(""); // LINE
          ed_lineCd.setValue(""); //LINE 코드
          ed_lineCd.options.hidVal = ""; //LINE 코드
          ed_shpCoClntNm.setValue("");
          hid_shpCoClntNo.setValue("");
        }
      }
    }
  }
  scwin.undoMarked(gr_orderCommodity, ds_orderCommodity);
  let rowCnt = ds_orderCommodity.getRowCount();
  if (rowCnt <= row) {
    row = 0;
  }
  if (rowCnt) {
    gr_orderCommodity.setFocusedCell(row, gr_orderCommodity.getFocusedColumnIndex() ?? 3, false);
  }
  if (!ds_orderBillOfLading.getRowCount() && !ds_orderCommodity.getRowCount()) {
    ed_lineNm.setValue("");
    hid_chkLineCd.setValue(""); // LINE
    ed_lineCd.setValue(""); //LINE 코드
    ed_lineCd.options.hidVal = ""; //LINE 코드
    ed_shpCoClntNm.setValue("");
    hid_shpCoClntNo.setValue("");
  }

  // 저장된 B/L 정보와 품명 B/L 정보를 조회하여 사용하지않는 오더 B/L 정보를 삭제한다. - 수입본선, 부두간 TS 제외
  scwin.deleteUnuseOrderBillOfLading();
  tbx_totalRows1.setValue(ds_orderCommodity.getRowCount());
};

/**
 * method
 * @name f_confirmOrder
 * @description 오더 확정
 */
scwin.f_confirmOrder = async function () {
  if (await $c.win.confirm($p, MSG_CM_CRM_010.replace("%1", "오더확정"))) {
    $c.sbm.execute($p, sbm_confirmOrder);
  }
};

/**
 * method
 * @name f_confirmOrderUn
 * @description 오더 미확정
 */
scwin.f_confirmOrderUn = async function () {
  if (await $c.win.confirm($p, MSG_CM_CRM_010.replace("%1", "오더미확정"))) {
    $c.sbm.execute($p, sbm_confirmOrderUn);
  }
};

/**
 * method
 * @name f_chkBlList
 * @description 선박코드코드 / 항차 정보 입력시 BL 정보 조회 (수입본선벌크 오더일 경우)
 */
scwin.f_chkBlList = function () {
  let gubunCode = dlt_dsCommonUtil_acb_odrKndCd.getCellData(acb_odrKndCd.getSelectedIndex(), "fltrCd2");
  hid_commCd.setValue("");
  if (gubunCode == DsConstants.IMP_CD && hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR) {
    if (!$c.gus.cfIsNull($p, ed_vsslCd.getValue().trim()) && !$c.gus.cfIsNull($p, ed_portcnt.getValue().trim())) {
      // 선박코드,항차 정보로 적하목록 BL 품명 정보를 조회한다.
      scwin.executeMainfestBillOfLading();
    }
  } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
    if (!$c.gus.cfIsNull($p, ed_vsslCd.getValue().trim()) && !$c.gus.cfIsNull($p, ed_portcnt.getValue().trim())) {
      // 선박코드,항차 정보로 적하목록 BL 품명 정보를 조회한다.
      scwin.executeMainfestBillOfLading();
    }
  }
};

/**
 * method
 * @name f_openCommonPopUp
 * @description 공통 Popup 처리  :  Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 오더 종류 누락시 재 설정
  if ($c.gus.cfIsNull($p, hid_odrKndCd.getValue())) {
    hid_odrKndCd.setValue(acb_odrKndCd.getValue());
  }

  // 선언부
  let rtnList = null; // 공통POP-UP -> 요청화면
  let options = null;
  let pValue = "";
  let districtGrpCd = ""; // 계약권역 구분코드
  if (ds_ctrtNo.getRowCount()) {
    let rowObj = ds_ctrtNo.getRowJSON(lc_ctrtNo.getSelectedIndex());
    districtGrpCd = rowObj.ctrtDistrictCd;
  }
  let pWhere = "";
  let arrParam = new Array(2);
  switch (disGubun) {
    case 1:
      pWhere = ",CTRT";
      // 계약 거래처코드팝업
      udc_ctrtClnt.cfCommonPopUp(scwin.udc_ctrtClnt_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "계약 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 2:
      // 요청 거래처코드팝업
      udc_clntInfo.cfCommonPopUp(scwin.udc_clntInfo_popup_callback1, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "요청 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 3:
      // 청구 거래처코드팝업
      udc_clntInfo.cfCommonPopUp(scwin.udc_clntInfo_popup_callback2, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "청구 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 4:
      // 실화주 코드팝업
      udc_clntInfo.cfCommonPopUp(scwin.udc_clntInfo_popup_callback3, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "실화주,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 5:
      pWhere = ed_ctrtClntNo.getValue().trim();
      let v_clntNm = ed_ctrtClntNm.getValue().trim();
      // 수요가 코드팝업
      udc_dmnd.cfCommonPopUp(scwin.udc_dmnd_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , v_clntNm + " 수요가,수요가번호,수요가명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 6:
      // 매출 부서코드팝업
      pValue = "T,J,,,,T,1"; // 물류점소구분코드  :  LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
      udc_sellLodept.cfCommonPopUp(scwin.udc_sellLodept_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pValue // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "매출부서,부서코드,부서명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 7:
      // 청구 부서코드팝업
      pValue = "T,J,,,,,,1"; // 물류점소구분코드  :  LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
      udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pValue // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "청구부서,부서코드,부서명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 9:
      // 선박 팝업
      pWtitleSearch = "선박, 선박코드, 선박명";
      pNoDataCloseTF = "F";
      udc_vssl.cfCommonPopUp(scwin.udc_vssl_popup_callback, pCode,
      //pCode
      pName,
      //pName
      pClose,
      //pClose
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
      //pExistTF - 중복체크여부	("F")
      pAllSearch,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴 : "N/A"
      null);
      break;
    case 10:
      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
        if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
          await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
          $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_closeDt, ed_closeHh, ed_wrkStDt, ed_wrkStHh, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_lane, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
          $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
          break;
        }
      }

      // 본선관리번호
      pWhere = dlt_dsCommonUtil_acb_odrKndCd.getCellData(acb_odrKndCd.getSelectedIndex(), "fltrCd2"); // 수출입구분코드  :  SD060 - 수입(I), 수출(E)
      arrParam[0] = pCode; // 본선관리번호
      arrParam[1] = pWhere; // 수출입구분코드

      // 팝업 옵션 설정
      options = {
        id: "op_204_01_07p_popup",
        popupName: "본선관리번호검색팝업",
        modal: true,
        type: "browserPopup",
        //화면 오픈 타입 ("pageFramePopup", "browserPopup")
        width: 1100,
        height: 650
      };
      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
        // 벌크 수출 일반 오더인 경우
        $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_lane, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
        $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
        hid_portCd.setValue("");
      } else {
        // 벌크 수출 일반 오더 가 아닌경우
        $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_closeDt, ed_closeHh, ed_wrkStDt, ed_wrkStHh, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_lane, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
        $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
        hid_portCd.setValue("");
      }

      //상세화면 호출
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, arrParam);
      /******************
      *	본선관리번호 Return List
      * rtnValues[0] //본선관리번호
      * rtnValues[1] //선박코드
      * rtnValues[2] //선박명
      * rtnValues[3] //마감일자
      * rtnValues[4] //마감시간
      * rtnValues[5] //도착(입항)일자
      * rtnValues[6] //도착(입항)시간
      * rtnValues[7] //출발(출항)일자
      * rtnValues[8] //출발(출항)시간
      * rtnValues[9] //선사항차
      * rtnValues[10] //항로
      * rtnValues[11] //항구코드
      * rtnValues[12] //부두코드
      * rtnValues[13] //부두코드명
      * rtnValues[14] //LINE 코드
      ******************/

      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          if (hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
            // 벌크 수출 일반 오더 가 아닌경우

            // 본선관리번호 변경시 품명 , B/L 정보 삭제
            scwin.f_clearBillOfLadingCommodity();
          }
          ed_cvsslMgntNo.setValue(rtnList[0]); //본선관리번호
          ed_cvsslMgntNo.options.hidVal = rtnList[0]; //본선관리번호
          ed_vsslCd.setValue(rtnList[1]); //선박코드
          ed_vsslNm.setValue(rtnList[2]); //선박명
          ed_portcnt.setValue(rtnList[9]); //선사항차
          ed_lane.setValue(rtnList[10]); //항로
          hid_portCd.setValue(rtnList[11]); //항구코드

          if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
            ed_lineCd.setValue(""); //Line코드
            ed_lineCd.options.hidVal = ""; //Line코드
            ed_shpCoClntNm.setValue("");
            hid_shpCoClntNo.setValue("");
            //PCY
            ed_lineCd.setValue(rtnList[14]); //Line코드
            ed_lineCd.options.hidVal = rtnList[14]; //Line코드
          } else {
            ed_lineCd.setValue(rtnList[14]); //Line코드
            ed_lineCd.options.hidVal = rtnList[14]; //Line코드
          }

          //Line명과 선사거래처 가져오기
          if (!$c.gus.cfIsNull($p, ed_lineCd.getValue())) {
            await scwin.f_openCommonPopUp(14, ed_lineCd.getValue(), "", "T", "F");
          }

          // 오더종류별 설정
          if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR) {
            // 수출본선오더인 경우
            ed_wrkStDt.setValue(rtnList[5]); //출발일자	<- 도착(입항)일자
            ed_wrkStHh.setValue(rtnList[6]); //출발시간 <- 도착(입항)시간
            ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명

            ed_wrkEndDt.setValue(rtnList[7]); //도착일자 <- 출발(출항)일자
            ed_wrkEndHh.setValue(rtnList[8]); //도착시간 <- 출발(출항)시간
          } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR) {
            // 수입본선오더인 경우
            ed_wrkStDt.setValue(rtnList[5]); //출발일자	<- 도착(입항)일자
            ed_wrkStHh.setValue(rtnList[6]); //출발시간 <- 도착(입항)시간
            ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명

            ed_wrkEndDt.setValue(rtnList[7]); //도착일자 <- 출발(출항)일자
            ed_wrkEndHh.setValue(rtnList[8]); //도착시간 <- 출발(출항)시간
          } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
            // 수입일반오더인 경우
            ed_closeDt.setValue(rtnList[5]); //입항일자
            ed_closeHh.setValue(rtnList[6]); //입항시간
          } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
            // 수출일반오더인 경우 - 설정 안함.
          } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
            // 수입TS 오더인 경우
            ed_closeDt.setValue(rtnList[5]); //입항일자
            ed_closeHh.setValue(rtnList[6]); //입항시간

            ed_wrkStDt.setValue(rtnList[5]); //출발일자	<- 도착(입항)일자
            ed_wrkStHh.setValue(rtnList[6]); //출발시간 <- 도착(입항)시간
            ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명
          } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
            // 부두간 TS오더인 경우
            ed_wrkStDt.setValue(rtnList[5]); //출발일자
            ed_wrkStHh.setValue(rtnList[6]); //출발시간
            ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명
          } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR) {
            // 수출TS 오더인 경우
            ed_wrkEndDt.setValue(rtnList[3]); //마감일자
            ed_wrkEndHh.setValue(rtnList[4]); //마감시간
            ed_arvWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_arvWrkPlNm.setValue(rtnList[13]); //부두코드명
          }
        }
      } else {
        if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
          // 벌크 수출 일반 오더인 경우
          $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_lane, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
          $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
          hid_portCd.setValue("");
        } else {
          // 벌크 수출 일반 오더 가 아닌경우
          $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_closeDt, ed_closeHh, ed_wrkStDt, ed_wrkStHh, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_lane, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
          $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
          hid_portCd.setValue("");
        }
      }

      // 수입본선, 벌크 부두간 TS 오더인 경우선박코드,항차,항구 정보로 적하목록 BL 품명 정보를 조회한다.
      scwin.f_chkBlList();
      break;
    case 11:
      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
        // 벌크 수입일반, 계약 권역에 따른 작업장 조회(선석제외)
        pWhere = districtGrpCd + "," + SdConstants.WRK_PL_CLS_CD_BERTH;
      } else {
        pWhere = districtGrpCd; // 계약 권역에 따른 작업장 조회
      }

      // 출발작업장 코드팝업
      udc_dptWrkPl.cfCommonPopUp(scwin.udc_dptWrkPl_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "출발작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 12:
      pWhere = districtGrpCd; // 계약 권역에 따른 작업장 조회
      // 도착작업장 코드팝업
      udc_arvWrkPl.cfCommonPopUp(scwin.udc_arvWrkPl_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "도착작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 13:
      // TS 본선관리번호
      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
        pWhere = DsConstants.EXP_CD; // 수출(O)
      } else {
        pWhere = dlt_dsCommonUtil_acb_odrKndCd.getCellData(acb_odrKndCd.getSelectedIndex(), "fltrCd2"); // 수출입구분코드  :  SD060 - 수입(I), 수출(O)
      }
      arrParam[0] = pCode;
      arrParam[1] = pWhere;

      // 팝업 옵션 설정
      options = {
        id: "op_204_01_07p_popup",
        popupName: "TS 본선관리번호검색팝업",
        modal: true,
        type: "browserPopup",
        //화면 오픈 타입 ("pageFramePopup", "browserPopup")
        width: 1100,
        height: 650
      };
      $c.gus.cfInitObjects($p, [ed_tsCvsslMgntNo, ed_tsVsslCd, ed_tsVsslNm, ed_tsPortcnt, ed_closeDt, ed_closeHh, ed_wrkEndDt, ed_wrkEndHh, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_tsLane]);
      $c.gus.cfInitHidVal($p, [ed_tsCvsslMgntNo]);
      hid_portCd.setValue("");

      //상세화면 호출
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, arrParam);
      /******************
      *	본선관리번호 Return List
      * rtnValues[0] //본선관리번호
      * rtnValues[1] //선박코드
      * rtnValues[2] //선박명
      * rtnValues[3] //마감일자
      * rtnValues[4] //마감시간
      * rtnValues[5] //도착(입항)일자
      * rtnValues[6] //도착(입항)시간
      * rtnValues[7] //출발(출항)일자
      * rtnValues[8] //출발(출항)시간
      * rtnValues[9] //선사항차
      * rtnValues[10] //항로
      * rtnValues[11] //항구코드
      * rtnValues[12] //부두코드
      * rtnValues[13] //부두코드명
      * rtnValues[14] //LINE 코드
      ******************/

      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          ed_tsCvsslMgntNo.setValue(rtnList[0]); //TS본선관리번호
          ed_tsCvsslMgntNo.options.hidVal = rtnList[0]; //TS본선관리번호
          ed_tsVsslCd.setValue(rtnList[1]); //TS선박코드
          ed_tsVsslNm.setValue(rtnList[2]); //TS선박명
          ed_tsPortcnt.setValue(rtnList[9]); //TS항차
          ed_tsLane.setValue(rtnList[10]); //TS항로
          hid_tsPortCd.setValue(rtnList[11]); //TS항구코드

          // 벌크 부두간 TS 오더인 경우 설정 - 부두코드를 도착지로 세팅
          if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
            ed_wrkEndDt.setValue(rtnList[3]); //마감일자
            ed_wrkEndHh.setValue(rtnList[4]); //마감시간
            ed_arvWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_arvWrkPlNm.setValue(rtnList[13]); //부두코드명
          }
        }
      } else {
        $c.gus.cfInitObjects($p, [ed_tsCvsslMgntNo, ed_tsVsslCd, ed_tsVsslNm, ed_tsPortcnt, ed_closeDt, ed_closeHh, ed_wrkEndDt, ed_wrkEndHh, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_tsLane]);
        $c.gus.cfInitHidVal($p, [ed_tsCvsslMgntNo]);
        hid_portCd.setValue("");
      }
      break;
    case 8:
      // LINE 코드팝업
      udc_line.setSelectId("retrieveLineInfoList");
      udc_line.cfCommonPopUp(scwin.udc_line_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 14:
      if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
        ed_cvsslMgntNo.setValue("");
        break;
      }

      // LINE 조회 -  자동 CLOSE
      ed_lineCd.options.hidVal = pCode;
      $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
      $c.gus.cfInitHidVal($p, [ed_lineNm, ed_shpCoClntNm]);
      hid_shpCoClntNo.setValue("");
      pValue = "T";

      // LINE 코드팝업
      udc_line.setSelectId("retrieveLineInfo");
      udc_line.cfCommonPopUp(scwin.udc_line_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pValue // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 15:
      let pClntNo = ed_ctrtClntNo.getValue();

      // 거래처관리번호 조회 -  자동 CLOSE
      $c.gus.cfInitObjects($p, [ed_clntMgntNonm]);
      pValue = pClntNo;

      //  코드팝업
      udc_clntMgnt.cfCommonPopUp(scwin.udc_clntMgnt_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pValue // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "거래처관리번호,관리번호,관리번호명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    default:
      break;
  }
};

/**
 * method
 * @name udc_ctrtClnt_popup_callback
 * @description 계약 거래처 코드팝업 콜백
 */
scwin.udc_ctrtClnt_popup_callback = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ed_ctrtClntNo.setValue(rtnList[0]); //계약 거래처코드
      ed_ctrtClntNm.setValue(rtnList[1]); //계약 거래처명
      ed_ctrtClntNm.options.hidVal = rtnList[1]; //계약 거래처명

      hid_chkCtrtClntNo.setValue(rtnList[0]); //계약 거래처코드
      hid_repClntNo.setValue(rtnList[2]); // 대표 거래처코드

      if (ed_ctrtClntNo.getValue() == "124994") {
        ed_sellLodeptCd.setValue("4A5");
        ed_bilgLodeptCd.setValue("4A5");
        await scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd, ed_sellLodeptNm, 6, true);
        await scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 7, true);
      }

      // 계약 거래처 - 계약정보 조회
      // 1. 계약번호
      // 2. 계약번호 별 - 요청거래처, 실화주, 청구거래처 조회
      dma_retrieveCtrtClnt.setJSON({
        "odrKndCd": hid_odrKndCd.getValue(),
        "ctrtClntNo": ed_ctrtClntNo.getValue(),
        "bizDivCntrYn": hid_bizDivCntrYn.getValue(),
        "bizDivBulkYn": hid_bizDivBulkYn.getValue()
      });
      $c.sbm.execute($p, sbm_retrieveCtrtClnt);
    } else {
      ed_ctrtClntNo.setValue(hid_chkCtrtClntNo.getValue());
      ed_ctrtClntNm.setValue(ed_ctrtClntNm.options.hidVal);
      scwin.clearOnEmptyCtrtClntNoInfo();
    }
  } else {
    ed_ctrtClntNo.setValue(""); //계약 거래처코드
    ed_ctrtClntNm.setValue(""); //계약 거래처명
    ed_ctrtClntNm.options.hidVal = ""; //계약 거래처명

    hid_chkCtrtClntNo.setValue(""); //계약 거래처코드
    hid_repClntNo.setValue(""); // 대표 거래처코드

    // 계약 거래처 - 계약정보 조회
    dma_retrieveCtrtClnt.setJSON({
      "odrKndCd": hid_odrKndCd.getValue(),
      "ctrtClntNo": ed_ctrtClntNo.getValue(),
      "bizDivCntrYn": hid_bizDivCntrYn.getValue(),
      "bizDivBulkYn": hid_bizDivBulkYn.getValue()
    });
    $c.sbm.execute($p, sbm_retrieveCtrtClnt);
  }
};
scwin.clearOnEmptyCtrtClntNoInfo = function () {
  if (!scwin.clearCtrtClntNoInfo) {
    return;
  }
  ;
  scwin.clearCtrtClntNoInfo = false;
  if (ed_ctrtClntNo.getValue().trim() == "") {
    // 계약 거래처 정보 (dma_retrieveCtrtClnt) DataSet 초기화
    scwin.f_clearDataSetRetrieveCtrtClnt();

    // 계약번호 (ds_ctrtNo) DataSet 초기화
    ds_ctrtNo.removeAll();

    // 요청 거래처 정보 (ds_reqClntNo) DataSet 초기화
    ds_reqClntNo.removeAll();
    ed_reqClntNo.setValue("");
    ed_reqClntNo.options.hidVal = "";
    // 실화주 정보 (ds_realMchtClntNo) DataSet 초기화
    ds_realMchtClntNo.removeAll();
    ed_realMchtClntNo.setValue("");
    ed_realMchtClntNo.options.hidVal = "";
    // 청구 거래처 정보 (ds_bilgClntNo) DataSet 초기화
    ds_bilgClntNo.removeAll();
    ed_bilgClntNo.setValue("");
    ed_bilgClntNo.options.hidVal = "";
  }
};

/**
 * method
 * @name udc_clntInfo_popup_callback1
 * @description 요청 거래처 코드팝업 콜백
 */
scwin.udc_clntInfo_popup_callback1 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      let matched = ds_reqClntNo.getMatchedIndex("clntNo", rtnList[0], true);
      if (!matched.length) {
        ds_reqClntNo.insertJSON(ds_reqClntNo.getRowCount(), [{
          "clntNo": rtnList[0],
          //실화주코드
          "clntNm": rtnList[1] //실화주명
        }]);
      }
      lc_reqClntNm.setValue(rtnList[0]);
      ed_reqClntNo.setValue(rtnList[0]); //요청 거래처코드
      hid_chkReqClntNo.setValue(rtnList[0]); //요청 거래처코드
    } else {
      ed_reqClntNo.setValue(hid_chkReqClntNo.getValue());
    }
  } else {
    ed_reqClntNo.setValue(""); //요청 거래처코드
    hid_chkReqClntNo.setValue(""); //요청 거래처코드
    lc_reqClntNm.setValue("");
  }
};

/**
 * method
 * @name udc_clntInfo_popup_callback2
 * @description 청구 거래처 코드팝업 콜백
 */
scwin.udc_clntInfo_popup_callback2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      let matched = ds_bilgClntNo.getMatchedIndex("clntNo", rtnList[0], true);
      if (!matched.length) {
        ds_bilgClntNo.insertJSON(ds_bilgClntNo.getRowCount(), [{
          "clntNo": rtnList[0],
          //청구 거래처코드
          "clntNm": rtnList[1] //청구 거래처명
        }]);
      }
      ed_bilgClntNo.setValue(rtnList[0]); //청구 거래처코드
      lc_bilgClntNm.setValue(rtnList[0]);
      hid_chkBilgClntNo.setValue(rtnList[0]); //청구 거래처코드
    } else {
      ed_bilgClntNo.setValue(hid_chkBilgClntNo.getValue());
    }
  } else {
    ed_bilgClntNo.setValue(""); //청구 거래처코드
    hid_chkBilgClntNo.setValue(""); //청구 거래처코드
    lc_bilgClntNm.setValue("");
  }
};

/**
 * method
 * @name udc_clntInfo_popup_callback3
 * @description 실화주 코드팝업 콜백
 */
scwin.udc_clntInfo_popup_callback3 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      let matched = ds_realMchtClntNo.getMatchedIndex("clntNo", rtnList[0], true);
      if (!matched.length) {
        ds_realMchtClntNo.insertJSON(ds_realMchtClntNo.getRowCount(), [{
          "clntNo": rtnList[0],
          //실화주코드
          "clntNm": rtnList[1] //실화주명
        }]);
      }
      ed_realMchtClntNo.setValue(rtnList[0]); //실화주코드
      lc_realMchtClntNm.setValue(rtnList[0]);
      hid_chkRealMchtClntNo.setValue(rtnList[0]); //실화주코드
    } else {
      ed_realMchtClntNo.setValue(hid_chkRealMchtClntNo.getValue());
    }
  } else {
    ed_realMchtClntNo.setValue(""); //실화주코드
    hid_chkRealMchtClntNo.setValue(""); //실화주코드
    lc_realMchtClntNm.setValue("");
  }
};

/**
 * method
 * @name udc_dmnd_popup_callback
 * @description 수요가 코드팝업 콜백
 */
scwin.udc_dmnd_popup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dmndNo, ed_dmndNm); // 수요가번호, 수요가명, 대표 거래처 번호, 수요가 순번
};

/**
 * method
 * @name udc_vssl_popup_callback
 * @description 선박 코드팝업 콜백
 */
scwin.udc_vssl_popup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

/**
 * method
 * @name udc_dptWrkPl_popup_callback
 * @description 출발작업장 코드팝업 콜백
 */
scwin.udc_dptWrkPl_popup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
  scwin.f_setSellLodeptCd(hid_odrKndCd.getValue(), ed_dptWrkPlCd.getValue());
};

/**
 * method
 * @name udc_arvWrkPl_popup_callback
 * @description 도착작업장 코드팝업 콜백
 */
scwin.udc_arvWrkPl_popup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvWrkPlNm);
};

/**
 * method
 * @name udc_line_popup_callback
 * @description LINE 코드팝업 콜백
 */
scwin.udc_line_popup_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ed_lineCd.setValue(rtnList[0]); //LINE 코드
      ed_lineCd.options.hidVal = rtnList[0]; //LINE 코드
      ed_lineNm.setValue(rtnList[1]); //LINE 명
      ed_lineNm.options.hidVal = rtnList[1]; //LINE 명

      if (udc_line.options.selectID === "retrieveLineInfo") {
        hid_shpCoClntNo.setValue(rtnList[4]); //선사코드
        ed_shpCoClntNm.setValue(rtnList[5]); //선사명
        ed_shpCoClntNm.options.hidVal = rtnList[5]; //선사명
      } else if (udc_line.options.selectID === "retrieveLineInfoList") {
        hid_shpCoClntNo.setValue(rtnList[2]); //선사코드
        ed_shpCoClntNm.setValue(rtnList[3]); //선사명
        ed_shpCoClntNm.options.hidVal = rtnList[3]; //선사명
      }
      hid_chkLineCd.setValue(rtnList[0]); //LINE 코드
    } else {
      ed_lineCd.setValue(ed_lineCd.options.hidVal);
      ed_shpCoClntNm.setValue(ed_shpCoClntNm.options.hidVal);
    }
  } else {
    ed_lineCd.setValue(""); //LINE 코드
    ed_lineCd.options.hidVal = ""; //LINE 코드
    ed_lineNm.setValue(""); //LINE 명
    ed_lineNm.options.hidVal = ""; //LINE 명

    hid_shpCoClntNo.setValue(""); //선사코드
    ed_shpCoClntNm.setValue(""); //선사명
    ed_shpCoClntNm.options.hidVal = ""; //선사명

    hid_chkLineCd.setValue(""); //LINE 코드
  }
};

/**
 * method
 * @name udc_clntMgnt_popup_callback
 * @description 관련번호 코드팝업 콜백
 */
scwin.udc_clntMgnt_popup_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      hid_mgntNoclsCd.setValue(rtnList[0]); //관리번호구분코드
      ed_clntMgntNo.setValue(rtnList[1]); //거래처관리번호
      ed_clntMgntNonm.setValue(rtnList[2]); //거래처관리번호명
    } else {
      hid_mgntNoclsCd.setValue("");
      ed_clntMgntNonm.setValue(""); //거래처관리번호명
    }
  } else {
    hid_mgntNoclsCd.setValue("");
    ed_clntMgntNonm.setValue(""); //거래처관리번호명
  }
};

/**
 * method
 * @name f_openCommPopUpGrid
 * @description 품명 조회 Popup 처리  :  그리드에서 입력된 코드정보로 품명을 조회
 */
scwin.f_openCommPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  // 오더 종류 누락시 재 설정
  if ($c.gus.cfIsNull($p, hid_odrKndCd.getValue())) {
    hid_odrKndCd.setValue(acb_odrKndCd.getValue());
  }

  // 선언부
  let rtnList = null; // 공통POP-UP -> 요청화면
  let options = null;
  let v_clntNo = ""; //품명 팝업시 거래처와 상관없이 될 수 있도록 수정
  let v_clntNm = ed_ctrtClntNm.getValue(); // 계약거래처 명
  let pWhere = ",,,T3," + v_clntNo; // 거래처별 품명 조회
  let districtGrpCd = ""; // 계약권역 구분코드
  if (ds_ctrtNo.getRowCount()) {
    let rowObj = ds_ctrtNo.getRowJSON(lc_ctrtNo.getSelectedIndex());
    districtGrpCd = rowObj.ctrtDistrictCd;
  }
  switch (disGubun) {
    case 1:
      ds_orderCommodity.setCellData(row, "blNo", "");
      // BL 번호 팝업
      let arrParam = new Array(10);
      arrParam[0] = pCode; //bl번호
      arrParam[1] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
      arrParam[2] = ""; //배정구분코드
      arrParam[3] = hid_impExpDomesticClsCd.getValue(); //bulkYn  :  수출입구분코드
      arrParam[4] = scwin.bizDivBulkYn; //bulkYn  :  0-컨테이너, 1-벌크
      arrParam[5] = ed_lineCd.getValue().trim(); //LINE 코드
      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR) {
        arrParam[6] = DsConstants.YN_YES; // TS 오더인 경우 (TS 여부  :  1)
      } else {
        arrParam[6] = DsConstants.YN_NO; // TS 오더가 아닌경우 (TS 여부  :  0)
      }
      arrParam[7] = "T"; // 다중 선택
      arrParam[8] = "E"; // Full / Empty 선택조건 (F :  Full 만선택, E  :  모두 선택)
      arrParam[9] = hid_fioBtClsCd.getValue(); // FIO/BT 처리구분  :  FIO_BT 여부 (FO  :  FIO_PROC_YN = 1, BT  :  BT_PROC_YN = 1, FB  :   FIO_PROC_YN= 1 or BT_PROC_YN = 1)
      scwin.mulitRowSelYn = "T";
      options = {
        id: "sd_402_01_29p_popup",
        popupName: "BL조회",
        modal: true,
        type: "browserPopup",
        //화면 오픈 타입 ("pageFramePopup", "browserPopup")
        width: 1300,
        height: 650
      };

      //상세화면 호출
      rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml", options, arrParam);
      if (rtnList != null) {
        scwin.v_rtnList = rtnList.length;
        for (i = 0; i < rtnList.length; i++) {
          checkFlg = 0;
          let arrCol = rtnList[i];
          hid_hblNo.setValue(arrCol[3]); //HOUSE_BL번호
          hid_hsn.setValue(arrCol[2]); //HSN

          if (await scwin.f_chkBillOfLading(arrCol[3])) {
            scwin.v_gubun = "A";
            //BL번호로 적하목록 BL 품명 정보를 조회한다.
            scwin.f_retrieveBillOfLadingBulk(row);
          }
        }
      } else {
        hid_hblNo.setValue("");
        ds_orderCommodity.setCellData(row, "blNo", "");

        // BL 목록 초기화
        scwin.f_clearBillOfLadingBulk(row);
      }
      scwin.f_chkeckBLEdit(row);
      break;
    case 2:
      scwin.gr_orderCommodityRow = row;
      ds_orderCommodity.setCellData(row, "commCd", ""); //품명코드
      ds_orderCommodity.setCellData(row, "commNm", ""); //품명
      ds_orderCommodity.setCellData(row, "commIdx", ""); //품명
      // 품명 코드팝업
      await udc_grdCommInfo.cfCommonPopUpAsync(scwin.udc_grdCommInfo_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , v_clntNm + " 품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 3:
      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
        // 벌크 수입일반, 계약 권역에 따른 작업장 조회(선석제외)
        pWhere = districtGrpCd + "," + SdConstants.WRK_PL_CLS_CD_BERTH;
      } else {
        pWhere = districtGrpCd; // 계약 권역에 따른 작업장 조회
      }
      scwin.gr_orderCommodityRow = row;
      ds_orderCommodity.setCellData(row, "dptWrkPlCd", ""); //출발지코드
      ds_orderCommodity.setCellData(row, "dptWrkPlNm", ""); //출발지명
      // 출발지 코드팝업
      await udc_grdWrkPl.cfCommonPopUpAsync(scwin.udc_grdWrkPl_popup_callback1, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , v_clntNm + " 품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 4:
      scwin.gr_orderCommodityRow = row;
      ds_orderCommodity.setCellData(row, "arvWrkPlCd", ""); //출발지코드
      ds_orderCommodity.setCellData(row, "arvWrkPlNm", ""); //출발지명
      // 도착지 코드팝업
      await udc_grdWrkPl.cfCommonPopUpAsync(scwin.udc_grdWrkPl_popup_callback2, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX : 8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , v_clntNm + " 품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
  }
  return false;
};

/**
 * method
 * @name udc_grdCommInfo_popup_callback
 * @description 품명 코드팝업 콜백
 */
scwin.udc_grdCommInfo_popup_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commCd", rtnList[0]); //품명코드

      let matched = ds_ctrtComm.getMatchedJSON("commCd", rtnList[0], true);
      let commIdx = "";
      if (!matched.length) {
        commIdx = ds_ctrtComm.insertRow();
        ds_ctrtComm.setCellData(commIdx, "commCd", rtnList[0]); //품명코드
        ds_ctrtComm.setCellData(commIdx, "commNm", rtnList[1]); //품명
        ds_ctrtComm.setCellData(commIdx, "index", commIdx.toString()); //품명인덱스
      } else {
        commIdx = scwin.findCommIdx(rtnList[1]);
      }
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commCd", rtnList[0]); //품명코드
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commNm", rtnList[1]); //품명
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commIdx", commIdx.toString()); //품명인덱스

      hid_commCd.setValue(rtnList[0]); //품명코드

      scwin.f_retrieveCommCdBillOfLadingBulk();
    } else {
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commCd", ds_orderCommodity.getOriginalCellData(scwin.gr_orderCommodityRow, "commCd"));
    }
    return true;
  } else {
    ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commCd", ""); //품명코드
    ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commNm", ""); //품명
    ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "commIdx", ""); //품명인덱스
  }
};

/**
 * method
 * @name udc_grdWrkPl_popup_callback1
 * @description 출발지 코드팝업 콜백
 */
scwin.udc_grdWrkPl_popup_callback1 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "dptWrkPlCd", rtnList[0]); //출발지코드
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "dptWrkPlNm", rtnList[0]); //출발지명
    } else {
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "dptWrkPlCd", ds_orderCommodity.getOriginalCellData(scwin.gr_orderCommodityRow, "dptWrkPlCd"));
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "dptWrkPlNm", ds_orderCommodity.getOriginalCellData(scwin.gr_orderCommodityRow, "dptWrkPlNm"));
    }
    return true;
  } else {
    ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "dptWrkPlCd", ""); //출발지코드
    ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "dptWrkPlNm", ""); //출발지명
  }
};

/**
 * method
 * @name udc_grdWrkPl_popup_callback2
 * @description 도착지 코드팝업 콜백
 */
scwin.udc_grdWrkPl_popup_callback2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "arvWrkPlCd", rtnList[0]); //출발지코드
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "arvWrkPlNm", rtnList[0]); //출발지명
    } else {
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "arvWrkPlCd", ds_orderCommodity.getOriginalCellData(scwin.gr_orderCommodityRow, "arvWrkPlCd"));
      ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "arvWrkPlNm", ds_orderCommodity.getOriginalCellData(scwin.gr_orderCommodityRow, "arvWrkPlNm"));
    }
    return true;
  } else {
    ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "arvWrkPlCd", ""); //출발지코드
    ds_orderCommodity.setCellData(scwin.gr_orderCommodityRow, "arvWrkPlNm", ""); //출발지명
  }
};

/**
 * method
 * @name f_retrieveBillOfLadingBulk
 * @description BL번호에 따른 품명,컨테이너조회
 */
scwin.f_retrieveBillOfLadingBulk = function (row) {
  scwin.v_row = row;
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
    if (!$c.gus.cfIsNull($p, hid_hblNo.getValue().trim())) {
      // 선박코드,항차 정보로 적하목록 BL 품명 정보를 조회한다.
      scwin.executeMainfestBillOfLading();
    }
  }
};

/**
 * method
 * @name f_clearBillOfLadingBulk
 * @description BL번호에 따른 품명,컨테이너조회
 */
scwin.f_clearBillOfLadingBulk = function (row) {
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR && hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
    // BL 번호 초기화
    hid_hblNo.setValue("");
    ds_orderCommodity.setCellData(row, "blNo", "");
  }
};

/**
 * method
 * @name f_retrieveCommCdBillOfLadingBulk
 * @description 품명코드에 따른 BL정보 조회
 */
scwin.f_retrieveCommCdBillOfLadingBulk = function (row) {
  scwin.v_row = row;
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
    if (!$c.gus.cfIsNull($p, hid_commCd.getValue().trim())) {
      // 본선관리번호, 품명코드 정보로 적하목록 BL 품명 정보를 조회한다.
      scwin.executeMainfestBillOfLading();
    }
  }
};

/**
 * method
 * @name f_chkOpenCommonPopUp
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

/**
 * method
 * @name f_setBillOfLadingCommdityToOrderCommodity
 * @description BL 품명 정보를 품명 목록에 설정한다. 이전에 설정된 BL정보는 삭제한다.
 */
scwin.f_setBillOfLadingCommdityToOrderCommodity = async function () {
  let v_wrkStDt = ed_wrkStDt.getValue();
  let v_wrkStHh = ed_wrkStHh.getValue();
  let v_wrkEndDt = ed_wrkEndDt.getValue();
  let v_wrkEndHh = ed_wrkEndHh.getValue();
  if (await scwin.f_copyBillOfLading()) {
    const odrNo = ds_order.getCellData(ds_order.getRowPosition(), "odrNo");
    let addData = null;
    let blRow = ds_billOfLadingCommodity.getRowPosition();
    if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
      // 수입본선 오더, 부두간 TS 오더 인 경우
      if ($c.gus.cfIsNull($p, hid_commCd.getValue())) {
        scwin.deleteAll(ds_orderCommodity); // 설정된 이전 품명은 모두 삭제한다.
        addData = ds_billOfLadingCommodity.getAllJSON();
      } else {
        //품명 검색인 경우 삭제하지 않는다.
        addData = [ds_billOfLadingCommodity.getRowJSON(blRow)];
      }
      addData = addData.map(item => {
        return {
          "odrNo": odrNo,
          // 오더번호
          "blNo": item.hblNo,
          // HOUSE BL 번호
          "commCd": item.commCd,
          // 품명코드
          "commNm": item.commNm,
          // 품명
          "commIdx": scwin.findCommIdx(item.commNm),
          // 품명
          "unitCd": DsConstants.BASIC_UNIT_CD_WT_KG,
          // 중량단위코드
          "qty": item.packCnt,
          // 수량
          "grossWt": item.totWt,
          // GROSS중량
          "cbm": item.totCbm,
          // CBM
          "wrkStDt": v_wrkStDt,
          // 작업시작일자
          "wrkStHh": v_wrkStHh,
          // 작업시작시간
          "wrkEndDt": v_wrkEndDt,
          // 작업종료일자
          "wrkEndHh": v_wrkEndHh // 작업종료시간
        };
      });
      ds_orderCommodity.insertJSON(ds_orderCommodity.getRowCount(), addData);
    } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
      // 수입일반오더, 수입 TS 오더인 경우
      let commodityRow = gr_orderCommodity.getFocusedRowIndex();
      if (scwin.v_gubun == "B") {
        commodityRow = ds_orderCommodity.insertRow();
      }
      ++scwin.v_count;
      ds_orderCommodity.setCellData(commodityRow, "odrNo", odrNo); // 오더번호
      ds_orderCommodity.setCellData(commodityRow, "blNo", ds_billOfLadingCommodity.getCellData(blRow, "hblNo")); // HOUSE BL 번호
      ds_orderCommodity.setCellData(commodityRow, "commCd", ds_billOfLadingCommodity.getCellData(blRow, "commCd")); // 품명코드
      let commNm = ds_billOfLadingCommodity.getCellData(blRow, "commNm");
      ds_orderCommodity.setCellData(commodityRow, "commNm", commNm); // 품명
      ds_orderCommodity.setCellData(commodityRow, "commIdx", scwin.findCommIdx(commNm)); // 품명
      ds_orderCommodity.setCellData(commodityRow, "unitCd", DsConstants.BASIC_UNIT_CD_WT_KG); // 중량단위코드
      ds_orderCommodity.setCellData(commodityRow, "qty", ds_billOfLadingCommodity.getCellData(blRow, "packCnt")); // 수량
      ds_orderCommodity.setCellData(commodityRow, "grossWt", ds_billOfLadingCommodity.getCellData(blRow, "totWt")); // GROSS중량
      ds_orderCommodity.setCellData(commodityRow, "cbm", ds_billOfLadingCommodity.getCellData(blRow, "totCbm")); // CBM
      ds_orderCommodity.setCellData(commodityRow, "wrkStDt", v_wrkStDt); // 작업시작일자
      ds_orderCommodity.setCellData(commodityRow, "wrkStHh", v_wrkStHh); // 작업시작시간
      ds_orderCommodity.setCellData(commodityRow, "wrkEndDt", v_wrkEndDt); // 작업종료일자
      ds_orderCommodity.setCellData(commodityRow, "wrkEndHh", v_wrkEndHh); // 작업종료시간
      scwin.setSumFooter();
      if (scwin.mulitRowSelYn == "T" && scwin.v_count < scwin.v_rtnList && scwin.v_gubun == "A") {
        ds_orderCommodity.insertRow(); // B/L 다중선택시 row 추가
      }
    }
    let rowCnt = ds_orderCommodity.getRowCount();
    gr_orderCommodity.setFocusedCell(rowCnt - 1, gr_orderCommodity.getFocusedColumnIndex() ?? 3, true);
    tbx_totalRows1.setValue(rowCnt);
    scwin.f_chkeckBLEdit(ds_orderCommodity.getRowPosition());
  }

  // 저장된 B/L 정보와 품명 B/L 정보를 조회하여 사용하지않는 오더 B/L 정보를 삭제한다. - 수입본선, 부두간 TS 제외
  scwin.deleteUnuseOrderBillOfLading();
};

/**
 * method
 * @name deleteUnuseOrderBillOfLading
 * @description 저장된 B/L 정보와 품명 B/L 정보를 조회하여 사용하지않는 오더 B/L 정보를 삭제한다. - 수입본선, 부두간 TS 제외
 */
scwin.deleteUnuseOrderBillOfLading = function () {
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
    return;
  }
  ;
  let blNo = null;
  let chkBl = null;
  let rowObj = null;
  for (let j = 0; j < ds_orderBillOfLading.getRowCount(); j++) {
    chkBl = false;
    blNo = ds_orderBillOfLading.getCellData(j, "blNo");
    for (let k = 0; k < ds_orderCommodity.getRowCount(); k++) {
      rowObj = ds_orderCommodity.getRowJSON(row);
      if (!$c.gus.cfIsNull($p, rowObj.blNo) && rowObj.blNo == blNo) {
        chkBl = true;
        break;
      }
    }
    if (!chkBl) {
      scwin.deleteRow(ds_orderBillOfLading, i);
    }
  }
};

/**
 * method
 * @name f_EnablePopUpObj
 * @description PopUp 이미지를 활성화 시킨다.
 */
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [btn_PopUp1, btn_PopUp2, btn_PopUp3, btn_PopUp4, btn_PopUp5, btn_PopUp6, btn_PopUp7, btn_PopUp8, btn_PopUp9, btn_PopUp10, btn_PopUp12, btn_PopUp13, btn_PopUp15]); //btn_PopUp11, btn_PopUp14
};

/**
 * method
 * @name f_DisablePopUpObj
 * @description PopUp 이미지를 비활성화 시킨다.
 */
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [btn_PopUp1, btn_PopUp2, btn_PopUp3, btn_PopUp4, btn_PopUp5, btn_PopUp6, btn_PopUp7, btn_PopUp8, btn_PopUp9, btn_PopUp10, btn_PopUp12, btn_PopUp13, btn_PopUp15]); //btn_PopUp11, btn_PopUp14
};

/**
 * method
 * @name f_chkTime
 * @description 시작시간, 종료시간 유효성 체크 - 동일한 경우 포함
 */
scwin.f_chkTime = function (strDate, strTime, endDate, endTime) {
  if (endDate + endTime >= strDate + strTime) {
    return true;
  }
  return false;
};

/**
 * method
 * @name f_chkTimeNotEqual
 * @description 시작시간, 종료시간 유효성 체크 - 동일한 경우 오류
 */
scwin.f_chkTimeNotEqual = function (strDate, strTime, endDate, endTime) {
  if (endDate + endTime > strDate + strTime) {
    return true;
  } else {
    return false;
  }
};

/**
 * method
 * @name f_chkTimeEqual
 * @description 시작시간, 종료시간 유효성 체크 - 동일하지 않은경우 오류
 */
scwin.f_chkTimeEqual = function (strDate, strTime, endDate, endTime) {
  if (endDate + endTime == strDate + strTime) {
    return true;
  } else {
    return false;
  }
};

/**
 * method
 * @name f_showOdrSelItem
 * @description 매출목록 보이기
 */
scwin.f_showOdrSelItem = function () {
  dscommon.cf_ShowObject([grp_odrSelItem_02, grp_odrSelItem_btn]);
  btn_odrSelItemArrowDn.hide();
  btn_odrSelItemArrowUp.show("");
  // gr_orderCommodity.style.height = "95px";
};

/**
 * method
 * @name f_hideOdrSelItem
 * @description 매출목록 감추기
 */
scwin.f_hideOdrSelItem = function () {
  dscommon.cf_HideObject([grp_odrSelItem_02, grp_odrSelItem_btn]);
  btn_odrSelItemArrowDn.show("");
  btn_odrSelItemArrowUp.hide();
  // gr_orderCommodity.style.height = "215px";
};

/**
 * method
 * @name f_chkResultsConfirmation
 * @description 실적 발생여부를 확인
 */
scwin.f_chkResultsConfirmation = function () {
  for (let i = 0; i < ds_orderCommodity.getRowCount(); i++) {
    if (!$c.gus.cfIsNull($p, ds_orderCommodity.getCellData(i, "wrkRsltsNo").trim())) {
      return true; // 실적이 존재하는 경우
    }
  }
  return false; // 실적이 존재하지 않는 경우
};

/**
 * method
 * @name f_chkResultsConfirmationCommodity
 * @description 해당품명의 실적 발생여부를 확인
 */
scwin.f_chkResultsConfirmationCommodity = function (row) {
  if (!$c.gus.cfIsNull($p, ds_orderCommodity.getCellData(row, "wrkRsltsNo").trim())) {
    return true; // 실적이 존재하는 경우
  }
  return false; // 실적이 존재하지 않는 경우
};

/**
 * method
 * @name f_copyBillOfLading
 * @description 조회된 B/L 정보를 오더 B/L 에 추가
 */
scwin.f_copyBillOfLading = async function () {
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR && $c.gus.cfIsNull($p, hid_commCd.getValue())) {
    scwin.deleteAll(ds_orderBillOfLading); // 설정된 이전 품명은 모두 삭제한다.
  }
  if (!ds_billOfLading.getRowCount()) {
    return false;
  }
  let rtn = true;
  const ordNo = ds_order.getCellData(ds_order.getRowPosition(), "odrNo");
  let addArr = [];
  let allData = ds_billOfLading.getAllJSON();
  for (let item of allData) {
    if (await scwin.f_chkBillOfLading(item.hblNo)) {
      addArr.push({
        "odrNo": ordNo,
        // 오더번호
        "mrn": item.mrn,
        // 적하목록관리번호
        "msn": item.msn,
        // MSN
        "hsn": item.hsn,
        // HSN
        "blNo": item.hblNo,
        // BL번호
        "commCd": item.commCd // 품명코드
      });
    } else {
      rtn = false;
      break;
    }
  }
  ds_orderBillOfLading.setJSON(addArr, true);
  return rtn;
};

/**
 * method
 * @name f_chkBillOfLading
 * @description 조회된 B/L 이 중복되는지 확인
 */
scwin.f_chkBillOfLading = async function (blNo) {
  let row = gr_orderCommodity.getFocusedRowIndex();
  let matched = ds_orderBillOfLading.getMatchedIndex("blNo", blNo, true);
  if (matched.length) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_011, ["BL 번호-->  :  [" + blNo + "] "]); // "이미 존재하는 @입니다.
    ds_orderCommodity.setCellData(row, "blNo", ds_orderCommodity.getOriginalCellData(row, "blNo"));
    return false;
  }
  return true;
};

/**
 * method
 * @name f_selectBL
 * @description B/L 선택 Popup 호출 - 다중선택 지원
 */
scwin.f_selectBL = async function () {
  // 오더 종류 누락시 재 설정
  if ($c.gus.cfIsNull($p, hid_odrKndCd.getValue())) {
    hid_odrKndCd.setValue(acb_odrKndCd.getValue());
  }

  // BL 번호 팝업 - 다중 선택지원
  let arrParam = new Array(10);
  arrParam[0] = ""; //bl번호
  arrParam[1] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
  arrParam[2] = ""; //배정구분코드
  arrParam[3] = hid_impExpDomesticClsCd.getValue(); //bulkYn  :  수출입구분코드
  arrParam[4] = scwin.bizDivBulkYn; //bulkYn  :  0-컨테이너, 1-벌크
  arrParam[5] = ed_lineCd.getValue().trim(); //LINE 코드
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR) {
    arrParam[6] = DsConstants.YN_YES; // TS 오더인 경우 (TS 여부  :  1)
  } else {
    arrParam[6] = DsConstants.YN_NO; // TS 오더가 아닌경우 (TS 여부  :  0)
  }
  arrParam[7] = "T"; // 다중 선택
  arrParam[8] = "E"; // Full / Empty 선택조건 (F :  Full 만선택, E  :  모두 선택)
  arrParam[9] = hid_fioBtClsCd.getValue(); // FIO/BT 처리구분  :  FIO_BT 여부 (FO  :  FIO_PROC_YN = 1, BT  :  BT_PROC_YN = 1, FB  :   FIO_PROC_YN= 1 or BT_PROC_YN = 1)
  scwin.mulitRowSelYn = "T";
  let options = {
    id: "sd_402_01_29p_popup",
    popupName: "BL조회",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 1300,
    height: 650
  };

  //상세화면 호출
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml", options, arrParam);
  /*
  arrRtnValList[0] //mrn
  arrRtnValList[1] //msn
  arrRtnValList[2] //hsn
  arrRtnValList[3] //bl번호
  arrRtnValList[4] //당사Line코드
  arrRtnValList[5] //당사배정구분코드
  arrRtnValList[6] //본선관리번호
  arrRtnValList[7] //선사항차
  arrRtnValList[8] //선박코드
  arrRtnValList[9] //선박명
  arrRtnValList[10] //항구코드
  arrRtnValList[11] //보세운송만료일자(운송기한)
  arrRtnValList[12] //하선장소코드
  arrRtnValList[13] //하선장소명
  arrRtnValList[14] //입항일자
  arrRtnValList[15] //입항시간
  arrRtnValList[16] //부두코드
  arrRtnValList[17] //부두코드명
  arrRtnValList[18] //배정코드
  arrRtnValList[19] //배정코드명
  */

  if (rtnList == null) {
    hid_hblNo.setValue("");
    return;
  }
  if (!rtnList.length) {
    return;
  }
  for (let idx = 0; idx < rtnList.length; idx++) {
    let rtnRecord = rtnList[idx];
    if (rtnRecord[0] == "N/A") {
      continue;
    }
    hid_hblNo.setValue(rtnRecord[3]); //HOUSE_BL번호
    hid_hsn.setValue(rtnRecord[2]); //HSN

    if (idx === 0) {
      if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
        ed_lineCd.setValue(rtnRecord[4]); //Line코드
        ed_lineCd.options.hidVal = rtnRecord[4];
      }
      if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue())) {
        ed_cvsslMgntNo.setValue(rtnRecord[6]); //본선관리번호
        ed_cvsslMgntNo.options.hidVal = rtnRecord[6]; //본선관리번호
      }
      if ($c.gus.cfIsNull($p, ed_vsslCd.getValue())) {
        ed_vsslCd.setValue(rtnRecord[8]); //선박코드
      }
      if ($c.gus.cfIsNull($p, ed_vsslNm.getValue())) {
        ed_vsslNm.setValue(rtnRecord[9]); //선박명
      }
      if ($c.gus.cfIsNull($p, ed_portcnt.getValue())) {
        ed_portcnt.setValue(rtnRecord[7]); //선사항차
      }
      if ($c.gus.cfIsNull($p, hid_portCd.getValue())) {
        hid_portCd.setValue(rtnRecord[10]); //항구코드
      }
      // 오더종류별 설정
      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
        // 수입일반오더인 경우
        if ($c.gus.cfIsNull($p, ed_closeDt.getValue())) {
          ed_closeDt.setValue(rtnRecord[14]); //입항일자
        }
        if ($c.gus.cfIsNull($p, ed_closeHh.getValue())) {
          ed_closeHh.setValue(rtnRecord[15]); //입항시간
        }
      } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
        // 수입TS 오더인 경우
        if ($c.gus.cfIsNull($p, ed_closeDt.getValue())) {
          ed_closeDt.setValue(rtnRecord[14]); //입항일자
        }
        if ($c.gus.cfIsNull($p, ed_closeHh.getValue())) {
          ed_closeHh.setValue(rtnRecord[15]); //입항시간
        }
        if ($c.gus.cfIsNull($p, ed_wrkStDt.getValue())) {
          ed_wrkStDt.setValue(rtnRecord[14]); //출발일자	<- 도착(입항)일자
        }
        if ($c.gus.cfIsNull($p, ed_wrkStDt.getValue())) {
          ed_wrkStHh.setValue(rtnRecord[15]); //출발시간 <- 도착(입항)시간
        }
        if ($c.gus.cfIsNull($p, ed_dptWrkPlCd.getValue())) {
          ed_dptWrkPlCd.setValue(rtnRecord[16]); //부두코드
        }
        if ($c.gus.cfIsNull($p, ed_dptWrkPlNm.getValue())) {
          ed_dptWrkPlNm.setValue(rtnRecord[17]); //부두코드명
        }
        // 첫번째 BL 의 하선장소 코드 설정
        if ($c.gus.cfIsNull($p, ed_arvWrkPlCd.getValue())) {
          ed_arvWrkPlCd.setValue(rtnRecord[12]); //하선장소코드
        }
        if ($c.gus.cfIsNull($p, ed_arvWrkPlNm.getValue())) {
          ed_arvWrkPlNm.setValue(rtnRecord[13]); //하선장소명
        }
      } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR) {
        // 수출TS 오더인 경우
        if ($c.gus.cfIsNull($p, ed_arvWrkPlCd.getValue())) {
          ed_arvWrkPlCd.setValue(rtnRecord[16]); //부두코드
        }
        if ($c.gus.cfIsNull($p, ed_arvWrkPlCd.getValue())) {
          ed_arvWrkPlNm.setValue(rtnRecord[17]); //부두코드명
        }
      }

      //Line명과 선사거래처 가져오기
      if (!$c.gus.cfIsNull($p, ed_lineCd.getValue())) {
        scwin.f_openCommonPopUp(14, ed_lineCd.getValue(), "", "T", "F");
      }
    }
    if (await scwin.f_chkBillOfLading(rtnRecord[3])) {
      //BL번호로 적하목록 BL 품명 정보를 조회한다.
      scwin.v_gubun = "B";
      scwin.f_retrieveBillOfLadingBulk(ds_orderCommodity.getRowCount());
    } else {
      hid_hblNo.setValue("");
    }
  }
};

/**
 * method
 * @name f_clearBillOfLadingCommodity
 * @description 본선 관리번호 변경에 따른 품명, B/L 정보 초기화
 */
scwin.f_clearBillOfLadingCommodity = function () {
  // 오더 B/L 삭제
  scwin.deleteAll(ds_orderBillOfLading); // 설정된 이전 품명은 모두 삭제한다.
  // 오더 품명 삭제
  scwin.deleteAll(ds_orderCommodity); // 설정된 이전 품명은 모두 삭제한다.
  tbx_totalRows1.setValue(ds_orderCommodity.getRowCount());
};

/**
 * method
 * @name f_setLineCd
 * @description Line코드 활성/비활성
 */
scwin.f_setLineCd = function (gubun) {
  if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT || hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
    if (gubun == "E") {
      $c.gus.cfEnableObj($p, ed_lineCd, true); //Line코드
      $c.gus.cfEnableObj($p, ed_lineNm, true); //Line명
      $c.gus.cfEnableObjects($p, [btn_PopUp8]); //Line팝업이미지
    } else if (gubun == "D") {
      $c.gus.cfEnableObj($p, ed_lineCd, false); //Line코드
      $c.gus.cfEnableObj($p, ed_lineNm, false); //Line명
      $c.gus.cfDisableObjects($p, [btn_PopUp8]); //Line팝업이미지
    }
  }
};

/**
 * method
 * @name f_chkeckBLEdit
 * @description BL 번호 입력에 따른 품명코드, 품명 수정모드 설정
 */
scwin.f_chkeckBLEdit = function (row) {
  // BL 번호 존재 여부에 따라 품목 정보 수정모드를 설정한다.
  if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
    // 수입일반 오더 / 수입TS 오더
    if (!gr_orderCommodity.getReadOnly("grid") && $c.gus.cfIsNull($p, ds_orderCommodity.getCellData(row, "blNo"))) {
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
    } else {
      gr_orderCommodity.setColumnReadOnly("commCd", true); //None
      // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
      gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
    }
  } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
    // 수입본선 오더 / 부두간TS 오더
    gr_orderCommodity.setColumnReadOnly("commCd", true); //None
    // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
    gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
  } else {
    if (!gr_orderCommodity.getReadOnly("grid")) {
      gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
      // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
      gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
    }
  }
};

/**
 * method
 * @name f_discountSurcharge
 * @description 할인할증 선택
 */
scwin.f_discountSurcharge = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) {
    return;
  }
  // 선택된 오더 정보  :  오더번호
  let param = {
    odrNo: ed_odrNo.getValue().replace(/\s*$/, ''),
    type: "retrieve"
  };
  $c.win.openMenu($p, "할인할증", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_24b.xml", "sd_402_01_24b", param, {
    openAction: "exist"
  });
};

/**
 * method
 * @name f_unitySelling
 * @description
 */
scwin.f_unitySelling = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) {
    return;
  }
  // 선택된 오더 정보  :  오더번호
  let param = {
    odrNo: ed_odrNo.getValue().replace(/\s*$/, ''),
    type: "retrieve"
  };
  $c.win.openMenu($p, "통합매출입조정", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml", "sd_402_01_26b", param, {
    openAction: "exist"
  });
};

/**
 * method
 * @name f_bulkAlloccarIndict
 * @description 중장거리운송작업지시등록(벌크)
 */
scwin.f_bulkAlloccarIndict = async function () {
  // 화면 삭제되어 버튼 관련기능 제거
  return;
  if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) {
    return;
  }
  // 선택된 오더 정보  :  오더번호
  let param = {
    odrNo: ed_odrNo.getValue().replace(/\s*$/, ''),
    lobranCd: ds_order.getCellData(0, "regBranCd"),
    wrkStDt: ds_order.getCellData(0, "wrkStDt"),
    wrkEndDt: ds_order.getCellData(0, "wrkEndDt"),
    type: "retrieve"
  };
  $c.win.openMenu($p, "중장거리운송작업지시등록(벌크)", "/ui/ds/op/wrkplan/transwrkplan/op_202_02_04b.xml", "op_202_02_04b", param, {
    openAction: "exist"
  });
};

/**
 * method
 * @name f_openCommonPopUpNoDataClose
 * @params {Number} gubun  :  팝업 구분
 * @params {String} pCode  :  화면에서의 ??? Code Element의	Value
 * @params {String} pName  :  화면에서의 ??? Name Element의	Value
 * @params {String} pClose  :  결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
 * @params {String} pAllSearch  :  전체검색허용여부	("F")
 * @params {String} pNoDataCloseTF  :  Data건수가 0건일때 Window를 뛰우지 않음 리턴  :  "N/A" 또는 null
 * @description 작업장 정보를 조회한다.
 * @example scwin.f_openCommonPopUpNoDataClose(1, pCode, '', 'T', 'F', 'T')
 */
scwin.f_openCommonPopUpNoDataClose = function (gubun, pCode, pName, pClose, pAllSearch, pNoDataCloseTF) {
  // 조회조건이 아닌경우 종료
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName)) {
    return;
  }
  switch (gubun) {
    case 1:
      // 매출 부서코드팝업
      udc_sellLodept.cfCommonPopUp(scwin.udc_sellLodept_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , "T,J,,,T,T,1" // 물류점소구분코드  :  LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "매출부서,부서코드,부서명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data건수가 0건일때 Window를 뛰우지 않음 리턴  :  "N/A" 또는 null
      , null);
      break;
    case 2:
      // 청구 부서코드팝업
      udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_popup_callback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T : Close,F : Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX : 10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , "T,J,,,T,,,1" // 물류점소구분코드  :  LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "청구부서,부서코드,부서명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data건수가 0건일때 Window를 뛰우지 않음 리턴  :  "N/A" 또는 null
      , null);
      break;
  }
};

/**
 * method
 * @name udc_sellLodept_popup_callback
 * @description 매출 부서코드팝업 콜백
 */
scwin.udc_sellLodept_popup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sellLodeptCd, ed_sellLodeptNm);
};

/**
 * method
 * @name udc_bilgLodept_popup_callback
 * @description 청구 부서코드팝업 콜백
 */
scwin.udc_bilgLodept_popup_callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
};

/**
 * method
 * @name f_setSellAndBilgDept
 * @description 매출부서, 청구부서 세팅
 * 처리규칙  :  오더등록자의 등록점소의 첫째 둘째자리 + 부서종류
 * 1.벌크 장치장 셔틀(B5) 	 :  매출부서 - 운송(2),	청구부서 - 운송(2)
 * 2.벌크 오더 (B1, B2, B3, B4, BS, BT, BW)		 :  매출부서 - 미지정,	청구부서 - 하역(4)
 * 3.내수 오더	(D1, D2, D3, D4, D5, D6, D7)	 :  매출부서 - 운송(2),	청구부서 - 운송(2)
 */
scwin.f_setSellAndBilgDept = function (odrKndCd) {
  let deptCd1 = $c.data.getMemInfo($p, "lobranCd") ?? ""; //등록점소 - 사용자 설정 물류점소
  if (deptCd1.length <= 2) {
    return;
  }
  let sellLodeptCd = ""; // 매출부서 코드
  let bilgLodeptCd = ""; // 청구부서 코드
  deptCd1 = deptCd1.substr(0, 2);
  // 매출부서, 청구부서 	값 초기화
  $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm, ed_bilgLodeptCd, ed_sellLodeptNm]);
  $c.gus.cfInitHidVal($p, [ed_sellLodeptCd, ed_sellLodeptNm, ed_bilgLodeptCd, ed_sellLodeptNm]);
  switch (odrKndCd) {
    case DsConstants.ODR_KND_CD_BULK_YARD_SHTL_ODR:
      // 벌크 장치장 셔틀 (B5)
      sellLodeptCd = deptCd1 + "2"; // 운송
      bilgLodeptCd = deptCd1 + "2"; // 운송
      break;
    case DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR: // 벌크 수입본선 (B1)
    case DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR: // 벌크 수입일반 (B2)
    case DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR: // 벌크 수출본선 (B3)
    case DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR: // 벌크 수출일반 (B4)
    case DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR: // 벌크 수입 TS (BS)
    case DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR: // 벌크 부두간 TS (BT)
    case DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR:
      //  벌크 수출 TS (BW)
      sellLodeptCd = ""; // 미지정
      bilgLodeptCd = deptCd1 + "4"; // 하역
      break;
    default:
      sellLodeptCd = deptCd1 + "2"; // 운송
      bilgLodeptCd = deptCd1 + "2"; // 운송
      break;
  }

  //매출부서 세팅
  if (sellLodeptCd.length == 3) {
    ed_sellLodeptCd.setValue(sellLodeptCd);
    scwin.f_openCommonPopUpNoDataClose(1, sellLodeptCd, '', 'T', 'F', 'T');
  }

  //청구부서 세팅
  if (bilgLodeptCd.length == 3) {
    ed_bilgLodeptCd.setValue(bilgLodeptCd);
    scwin.f_openCommonPopUpNoDataClose(2, bilgLodeptCd, '', 'T', 'F', 'T');
  }
};

/**
 * method
 * @name f_setSellLodeptCd
 * @description 매출부서 미지정시 출발작업장을 매출 부서로 설정한다.
 * 설명  :  벌크 오더 (B1, B2, B3, B4, BS, BT, BW)		 :  매출부서 - 미지정,	청구부서 - 하역(4)
 */
scwin.f_setSellLodeptCd = function (odrKndCd, dptWrkPlCd) {
  if ($c.gus.cfIsNull($p, odrKndCd) || $c.gus.cfIsNull($p, dptWrkPlCd)) {
    return;
  }
  switch (odrKndCd) {
    case DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR: // 벌크 수입본선 (B1)
    case DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR: // 벌크 수입일반 (B2)
    case DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR: // 벌크 수출본선 (B3)
    case DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR: // 벌크 수출일반 (B4)
    case DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR: // 벌크 수입 TS (BS)
    case DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR: // 벌크 부두간 TS (BT)
    case DsConstants.ODR_KND_CD_BULK_YARD_VIA_EXP_TS_ODR:
      //  벌크 수출 TS (BW)

      // 출발 작업장 - 매출부서 세팅
      if (dptWrkPlCd.length >= 3) {
        ed_sellLodeptCd.setValue(dptWrkPlCd);
        scwin.f_openCommonPopUpNoDataClose(1, dptWrkPlCd, '', 'T', 'F', 'T');
      }
      break;
    default:
      break;
  }
};

/**
 * method
 * @name f_setLcOdrKndCd
 * @description 오더 종류 설정
 */
scwin.f_setLcOdrKndCd = function (odrKndCd) {
  acb_odrKndCd.setValue(odrKndCd);
  scwin.acb_odrKndCd_onviewchange();
};

/**
 * method
 * @name f_clearDataByClntNos
 * @description 청구/요청거래처/실화주거래처 정보 clear
 */
scwin.f_clearDataByClntNos = function () {
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  ds_realMchtClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_bilgClntNo, ed_realMchtClntNo]);
  $c.gus.cfInitHidVal($p, [ed_reqClntNo, ed_bilgClntNo, ed_realMchtClntNo]);
};

/**
 * method
 * @name f_copyOrderDomestic
 * @description 내수 오더 오더 복사
 */
scwin.f_copyOrderDomestic = async function () {
  // 화면 삭제되어 버튼 관련기능 제거
  return;
  dma_cndCtrtNo.setEmptyValue();

  //검색조건값 세팅
  if (ed_bilgClntNo.getValue() == "" || ed_bilgClntNo.getValue() == null) {
    await $c.win.alert($p, "관리거래처는 복사하실수 없습니다.");
    return false;
  }
  dma_cndCtrtNo.set("ctrtClntNo", ed_bilgClntNo.getValue()); //계약거래처
  dma_cndCtrtNo.set("bizDivCntrYn", "1"); //사업부문컨테이너여부
  dma_cndCtrtNo.set("bizDivBulkYn", ""); //사업부문벌크여부
  dma_cndCtrtNo.set("odrKndCd", ""); //사업부문벌크여부
  dma_cndCtrtNo.set("impExpDomesticClsCd", ""); //수출입내수구분코드

  //조회
  $c.sbm.execute($p, sbm_retrieveCtrtNo2);
  let sameYn = "N";
  for (j = 0; j < ds_ctrtNo2.getRowCount(); j++) {
    if (1 == ds_ctrtNo2.getCellData(j, "mgntTrgtClntYn")) {
      sameYn = "Y";
      break;
    }
  }
  if (sameYn == "Y") {
    await $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.");
    return false;
  }
  const odrNo = ds_order.getCellData(ds_order.getRowPosition(), "odrNo");
  if ($c.gus.cfIsNull($p, odrNo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("오더정보"));
    return false;
  }
  let arrParam = new Array(10);
  arrParam[0] = odrNo; //오더번호

  let options = {
    id: "sd_402_01_29p_popup",
    popupName: "BL조회",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 900,
    height: 750
  };

  //상세화면 호출
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02p.xml", options, arrParam);
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_odrNo.setValue(rtnList[0]); // 오더번호 설정
      await scwin.f_Retrieve();
    }
  }
};

/**
 * method
 * @name executeMainfestBillOfLading
 * @description
 */
scwin.executeMainfestBillOfLading = function () {
  dma_manifestQueryCondition.setJSON({
    odrKndCd: hid_odrKndCd.getValue(),
    msn: hid_msn.getValue(),
    hsn: hid_hsn.getValue(),
    hblNo: hid_hblNo.getValue(),
    cvsslMgntNo: ed_cvsslMgntNo.getValue(),
    impExpClsCd: hid_impExpDomesticClsCd.getValue(),
    fioBtClsCd: hid_fioBtClsCd.getValue(),
    commCd: hid_commCd.getValue(),
    tsYn: hid_tsYn.getValue(),
    bulkYn: hid_bulkYn.getValue()
  });
  $c.sbm.execute($p, sbm_mainfestBillOfLading);
};

/**
 * event
 * @name sbm_retrieveCtrtClnt_submitdone
 * @description
 */
scwin.sbm_retrieveCtrtClnt_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  //for=ds_ctrtNo
  if (!ds_ctrtNo.getRowCount() && scwin.mgntTrgtClntYn != 1) {
    await $c.gus.cfAlertMsg($p, "거래처 " + ed_ctrtClntNm.getValue() + "의 " + MSG_CM_ERR_049, new Array("계약번호"));
  }

  // 계약번호 조회후 계약정보 조회
  if (!ds_ctrtNo.getRowCount()) {
    scwin.f_clearClntDataSet();
  } else {
    scwin.sortCtrtNo();
    scwin.lc_ctrtNo_onviewchange();
  }
  scwin.clearOnEmptyCtrtClntNoInfo();
};

/**
 * event
 * @name sbm_saveExport_submitdone
 * @description
 */
scwin.sbm_saveExport_submitdone = async function (e) {
  scwin.saveImportAndSaveExport_submitdone(e);
};

/**
 * event
 * @name sbm_saveImport_submitdone
 * @description
 */
scwin.sbm_saveImport_submitdone = async function (e) {
  scwin.saveImportAndSaveExport_submitdone(e);
};

/**
 * method
 * @name saveImportAndSaveExport_submitdone
 * @description
 */
scwin.saveImportAndSaveExport_submitdone = async function (e) {
  //서비스 에러시 submitDone 실행 방지
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }

  //for=ds_orderSearch
  const ordNo = ds_orderSearch.getCellData(0, "odrNo");
  ed_odrNo.setValue(ordNo);
  scwin.f_setTabOrderInfo(ordNo);

  //for=ds_orderSelling
  let rowCnt = ds_orderSelling.getRowCount();
  if (rowCnt) {
    gr_odrSelItem.setFocusedCell(0, gr_odrSelItem.getFocusedColumnIndex() ?? 0, false);
  }
  tbx_totalRows2.setValue(rowCnt);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  $c.gus.putMapValue($p, "ODR_KND_CD", acb_odrKndCd.getValue());
  await scwin.f_Retrieve();
  let tab2_hid_chkReterieve = $p.parent().tab_mxTab_page.getFrame(1).getObj("hid_chkReterieve");
  if (typeof tab2_hid_chkReterieve?.setValue === "function") {
    tab2_hid_chkReterieve.setValue(""); // 재조회 - 작업경로
  }
};

/**
 * method
 * @name addCommIndexValue
 * @description
 */
scwin.addCommIndexValue = function () {
  //그리드 내부 콤보의 value가 중복되지 않도록 처리하기위해
  let allData = ds_ctrtComm.getAllJSON();
  allData.forEach((item, idx) => item.index = idx.toString());
  ds_ctrtComm.setJSON(allData, false);
};

/**
 * method
 * @name findCommIdx
 * @description
 */
scwin.findCommIdx = function (commNm, append = false, commCd = "") {
  let matched = ds_ctrtComm.getMatchedJSON("commNm", commNm, true);
  let ret = "";
  if (matched.length) {
    ret = matched[0].index;
  } else if (append) {
    let commIdx = ds_ctrtComm.insertRow();
    ret = commIdx.toString();
    ds_ctrtComm.setCellData(commIdx, "commCd", commCd);
    ds_ctrtComm.setCellData(commIdx, "commNm", commNm);
    ds_ctrtComm.setCellData(commIdx, "index", ret);
    ds_ctrtComm.setCellData(commIdx, "hidden", "1");
  }
  return ret;
};

/**
 * event
 * @name sbm_retrieve_submitdone
 * @description
 */
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }

  //for=ds_order
  let rowCnt = ds_order.getRowCount();
  if (!rowCnt) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("오더정보"));
    $c.gus.cfDisableKeyData($p);
    scwin.f_FieldClear();
    // dscommon.cf_HideObject([btn_OrderCopyDomestic]); // 화면 삭제되어 버튼 관련기능 제거
  } else {
    ds_order.setRowPosition(0);
    let data = ds_order.getRowJSON(0);
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfDisableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark, btn_Save, btn_Delete]);

    // HIDDEN VALUE 설정
    ed_ctrtClntNm.options.hidVal = data.ctrtClntNm;
    ed_bilgLodeptNm.options.hidVal = data.bilgLodeptNm;
    ed_sellLodeptNm.options.hidVal = data.sellLodeptNm;
    ed_lineNm.options.hidVal = data.lineNm;
    ed_shpCoClntNm.options.hidVal = data.shpCoClntNm;
    ed_dptWrkPlNm.options.hidVal = data.dptWrkPlNm;
    ed_arvWrkPlNm.options.hidVal = data.arvWrkPlNm;
    if (!$c.gus.cfIsNull($p, data.clntMgntNo)) {
      ed_clntMgntNo.options.hidVal = data.clntMgntNo;
    }
    hid_chkCtrtClntNo.setValue(data.ctrtClntNo); // 계약처
    hid_chkReqClntNo.setValue(data.reqClntNo); // 요청처
    hid_chkBilgClntNo.setValue(data.bilgClntNo); // 청구처
    hid_chkRealMchtClntNo.setValue(data.realMchtClntNo); // 실화주
    hid_chkDmndNo.setValue(data.dmndNo); // 수요가
    hid_chkSellLodeptCd.setValue(data.sellLodeptCd); // 매출부서
    hid_chkBilgLodeptCd.setValue(data.bilgLodeptCd); // 청구부서
    hid_chkLineCd.setValue(data.lineCd); // LINE
    hid_chkBlNo.setValue(data.hblNo); // B/L 번호
    hid_chkCvsslMgntNo.setValue(data.cvsslMgntNo); // 본선관리번호
    hid_chkDptWrkPlCd.setValue(data.dptWrkPlCd); // 출발작업장
    hid_chkArvWrkPlCd.setValue(data.arvWrkPlCd); // 도착작업장

    if (data.odrDcsnYn == DsConstants.YN_NO) {
      tbx_odrDcsnYn.setValue("미확정");
    } else if (data.odrDcsnYn == DsConstants.YN_YES) {
      tbx_odrDcsnYn.setValue("확정");
    } else {
      tbx_odrDcsnYn.setValue("");
    }
    if (data.odrCompleteYn == DsConstants.YN_NO) {
      tbx_odrCompleteYn.setValue(" / 미완료");
    } else if (data.odrCompleteYn == DsConstants.YN_YES) {
      tbx_odrCompleteYn.setValue(" / 완료");
    } else {
      tbx_odrCompleteYn.setValue("");
    }
    if (data.odrCnclYn == DsConstants.YN_YES) {
      tbx_odrCnclYn.setValue(" / 취소");
    } else {
      tbx_odrCnclYn.setValue("");
    }
    hid_odrKndCd.setValue(data.odrKndCd);
    acb_odrKndCd.setValue(hid_odrKndCd.getValue());
    scwin.acb_odrKndCd_onviewchange();

    // 자가구분코드 설정
    hid_selfClsCd.setValue(data.selfClsCd);
    lc_selfClsCd.setValue(hid_selfClsCd.getValue());
    hid_chkReterieve.setValue("retrieveIn"); // 조회 성공여부
  }
  scwin.addCommIndexValue();

  //for=ds_orderCommodity
  if (e?.responseJSON?.OUT_DS2?.length) {
    //그리드 내부 콤보에 표시되는 데이터 문제로 commIdx값 추가
    e.responseJSON.OUT_DS2.forEach(item => item.commIdx = scwin.findCommIdx(item.commNm, true, item.commCd));
    $c.data.dataListFilter($p, ds_ctrtComm, "hidden!='1'");
    ds_orderCommodity.setJSON(e.responseJSON.OUT_DS2, false);
  }
  gr_orderCommodity.setFocusedCell(0, 3, false);
  let rowCnt2 = ds_orderCommodity.getRowCount();
  tbx_totalRows1.setValue(rowCnt2);
  if (rowCnt2 == 0 && rowCnt) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("오더품명 조회결과"));
  } else {
    scwin.setGrdOrderCommodityReadOnly(true);
  }
  let commodityRow = gr_orderCommodity.getFocusedRowIndex();
  // 품명별 실적 생성여부를 확인한다.
  // 실적 발생시 수정할 수 없다.
  if (commodityRow >= 0) {
    if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
      if (scwin.f_chkResultsConfirmationCommodity(commodityRow)) {
        scwin.setGrdOrderCommodityReadOnly(true);
        $c.gus.cfDisableBtnOnly($p, [btn_DeleteRow]);
      }
    } else {
      $c.gus.cfDisableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]);
    }

    // 품명별 작업경로 생성여부를 확인한다.
    // 작업경로가 생성된 품명은 품명을 변경할수 없다.
    if (ds_orderCommodity.getCellData(commodityRow, "odrWrkPathYn") == DsConstants.YN_YES) {
      if (!gr_orderCommodity.getReadOnly("grid")) {
        gr_orderCommodity.setColumnReadOnly("blNo", true); //None
        gr_orderCommodity.setColumnReadOnly("commCd", true); //None
        // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
        gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
      }
    }
  }

  //for=ds_ctrtNo
  if (!ds_ctrtNo.getRowCount() && scwin.mgntTrgtClntYn != 1) {
    await $c.gus.cfAlertMsg($p, "거래처 " + ed_ctrtClntNm.getValue() + "의 " + MSG_CM_ERR_049, new Array("계약번호"));
  }
  scwin.sortCtrtNo();
  scwin.lc_ctrtNo_onviewchange();

  //for=ds_reqClntNo, //for=ds_realMchtClntNo, //for=ds_bilgClntNo
  scwin.sbm_retrieveCtrtNo_submitdone(e);

  //for=ds_orderSelling
  rowCnt2 = ds_orderSelling.getRowCount();
  if (rowCnt2) {
    gr_odrSelItem.setFocusedCell(0, gr_odrSelItem.getFocusedColumnIndex() ?? 0, false);
  }
  tbx_totalRows2.setValue(rowCnt2);
  tbx_totalRows2.setValue(ds_orderSelling.getRowCount());

  //for=sbm_retrieve
  const ordNo = ds_orderSearch.getCellData(0, "odrNo");
  scwin.f_setTabOrderInfo(ordNo);

  // 출발일자, 도착일자 초기값 설정
  if ($c.gus.cfIsNull($p, ed_wrkStDt.getValue())) {
    ed_wrkStDt.setValue(scwin.strCurDate);
  }
  if ($c.gus.cfIsNull($p, ed_wrkEndDt.getValue())) {
    ed_wrkEndDt.setValue(scwin.strCurDate);
  }
  dscommon.cf_ShowObject([btn_DcSc, btn_UnitySelling /* btn_BulkAlloccarIndict */]); // 화면 삭제되어 버튼 관련기능 제거
  $c.gus.cfEnableObjects($p, [btn_DcSc, btn_UnitySelling]);
  if (hid_odrWrkPathCnt.getValue() > 0 && hid_odrWrkPathCnt.getValue() >= ds_orderCommodity.getRowCount()) {
    // 작업경로가 지정된 경우
    if (hid_odrDcsnYn.getValue() != DsConstants.YN_YES) {
      // 오더가 확정되지 않은 경우
      dscommon.cf_ShowObject([btn_ConfirmOrder1, btn_ConfirmOrder2]);
      $c.gus.cfEnableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update]);
    } else {
      // 오더가 확정된 경우
      $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      if (hid_odrCompleteYn.getValue() != DsConstants.YN_YES) {} else {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      }
    }
  } else {
    // 작업경로가 지정되지 않은 경우
    dscommon.cf_ShowObject([btn_ConfirmOrder1, btn_ConfirmOrder2]);
    $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2]);
  }

  // 매출목록 보이기
  dscommon.cf_ShowObject([grp_odrSelItem_01, grp_odrSelItem_02]);
  // gr_orderCommodity.style.height = "95px";

  if (hid_odrWrkPathCnt.getValue() > 0 && hid_odrWrkPathCnt.getValue() >= ds_orderCommodity.getRowCount() && hid_odrDcsnYn.getValue() != DsConstants.YN_YES) {
    // 오더 확정 버튼 활성화
    $c.gus.cfEnableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2]);
  }
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update]);
  $c.gus.cfDisableObjects($p, btn_SelectBL);

  // 오더가 확정된 경우
  if (hid_odrDcsnYn.getValue() == DsConstants.YN_YES) {
    $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2]);
  }
  // 오더가 완료된 경우
  if (hid_odrCompleteYn.getValue() == DsConstants.YN_YES) {
    $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2]);
    $c.gus.cfDisableBtnOnly($p, [btn_Update]);
  }
  // 오더가 취소된 경우
  if (hid_odrCnclYn.getValue() == DsConstants.YN_YES) {
    $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2, btn_DcSc, btn_UnitySelling]);
    $c.gus.cfDisableBtnOnly($p, [btn_Update]);
  }
  // 오더가 삭제된 경우
  if (hid_odrDelYn.getValue() == DsConstants.YN_YES) {
    $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2, btn_DcSc, btn_UnitySelling]);
    $c.gus.cfDisableBtnOnly($p, [btn_Update]);
  }

  // 오더요청횟수가 0이상인 경우  :  오더요청으로 생성된 오더는 수정 및 삭제 할수 없습니다.
  if (ds_order.getRowCount()) {
    if (ds_order.getCellData(ds_order.getRowPosition(), "odrRequestCnt") > 0) {
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Save, btn_Delete]);
    }
  }

  // 화면 삭제되어 버튼 관련기능 제거
  // 내수 오더인 경우 오더복사(내수) 버튼 활성화
  // if (hid_impExpDomesticClsCd.getValue() == DsConstants.DOMESTIC_CD) {
  //     dscommon.cf_ShowObject([btn_OrderCopyDomestic]);
  //     $c.gus.cfEnableObjects([btn_OrderCopyDomestic]);
  // }

  // 합적인 경우 벌크 배차지시 활성화  coshippingYn
  // $c.gus.cfEnableObjects([btn_BulkAlloccarIndict]); // 화면 삭제되어 버튼 관련기능 제거

  // 관리대상인 경우 수정모드 불가
  if (scwin.mgntTrgtClntYn == 1) {
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2, btn_DcSc, btn_UnitySelling]);
    $c.gus.cfEnableBtnOnly($p, [btn_Create]);
  }

  // 자가구분코드 설정
  hid_selfClsCd.setValue(ds_order.getCellData(ds_order.getRowPosition(), "selfClsCd"));
  lc_selfClsCd.setValue(hid_selfClsCd.getValue());
  hid_chkReterieve.setValue("retrieveIn"); // 조회 성공여부
};

/**
 * event
 * @name sbm_confirmOrder_submitdone
 * @description
 */
scwin.sbm_confirmOrder_submitdone = async function (e) {
  //서비스 에러시 submitDone 실행 방지
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_010, new Array("오더확정")); // 성공적으로 저장하였습니다
  await scwin.f_Retrieve();
};

/**
 * event
 * @name sbm_confirmOrderUn_submitdone
 * @description
 */
scwin.sbm_confirmOrderUn_submitdone = async function (e) {
  //서비스 에러시 submitDone 실행 방지
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_010, new Array("오더미확정")); // 성공적으로 저장하였습니다
  await scwin.f_Retrieve();
};

/**
 * event
 * @name sbm_delete_submitdone
 * @description
 */
scwin.sbm_delete_submitdone = async function (e) {
  //서비스 에러시 submitDone 실행 방지
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_011, new Array(ed_odrNo.getValue())); // 삭제되었습니다.

  // 초기화
  scwin.f_defaultValue();

  // KeyData 비활성화
  $c.gus.cfDisableKeyData($p);

  // 그리드 행추가 / 삭제 /취소 버튼 비활성화
  $c.gus.cfDisableAllBtn($p);
  scwin.f_Create(); // 신규 모드
  $p.parent().tab_mxTab_page.getFrame(1).getObj("hid_chkReterieve").setValue(""); // 재조회 - 작업경로
};

/**
 * event
 * @name sbm_mainfestBillOfLading_submitdone
 * @description
 */
scwin.sbm_mainfestBillOfLading_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  //for=ds_billOfLadingCommodity
  if (!ds_billOfLadingCommodity.getRowCount()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("B/L 품명 조회결과"));
  } else {
    ds_billOfLadingCommodity.setRowPosition(0);
    await scwin.f_setBillOfLadingCommdityToOrderCommodity(); // BL 품명 정보를 오더 품명 으로 복사
  }
};

/**
 * event
 * @name sbm_retrieveLobranSales_submitdone
 * @description
 */
scwin.sbm_retrieveLobranSales_submitdone = function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  //for=ds_lobranSales
  if (!ds_lobranSales.getRowCount()) {
    return;
  }
  let rowObj = ds_lobranSales.getRowJSON(0);
  // 청구부서 설정 < - 영업부서
  ed_bilgLodeptCd.setValue(rowObj.lobranCd);
  ed_bilgLodeptCd.options.hidVal = rowObj.lobranCd;
  ed_bilgLodeptNm.setValue(rowObj.lobranNm);
  ed_bilgLodeptNm.options.hidVal = rowObj.lobranNm;
};

/**
 * event
 * @name sbm_retrieveLobranTrans_submitdone
 * @description
 */
scwin.sbm_retrieveLobranTrans_submitdone = function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  //for=ds_lobranTrans
  if (!ds_lobranTrans.getRowCount()) {
    return;
  }
  let rowObj = ds_lobranTrans.getRowJSON(0);
  // 매출부서 설정 < -운송부서
  ed_sellLodeptCd.setValue(rowObj.lobranCd);
  ed_sellLodeptCd.options.hidVal = rowObj.lobranCd;
  ed_sellLodeptNm.setValue(rowObj.lobranNm);
  ed_sellLodeptNm.options.hidVal = rowObj.lobranNm;
};

/**
 * event
 * @name sbm_retrieveCtrtNo_submitdone
 * @description
 */
scwin.sbm_retrieveCtrtNo_submitdone = function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  scwin.addCommIndexValue();

  //그리드 내부 콤보에 표시되는 데이터 문제로 commIdx값 추가됨
  //ds_ctrtComm 새로 조회했으니 ds_orderCommodity데이터의 commIdx값 갱신
  let allData = ds_orderCommodity.getAllJSON();
  allData.forEach((item, idx) => ds_orderCommodity.setCellData(idx, "commIdx", scwin.findCommIdx(item.commNm, true, item.commCd)));
  $c.data.dataListFilter($p, ds_ctrtComm, "hidden!='1'");

  //for=ds_reqClntNo
  if (ds_reqClntNo.getRowCount()) {
    lc_reqClntNm.setSelectedIndex(0);
    ed_reqClntNo.setValue(lc_reqClntNm.getValue());
  }
  scwin.lc_reqClntNm_onviewchange();

  //for=ds_realMchtClntNo
  if (ds_realMchtClntNo.getRowCount()) {
    lc_realMchtClntNm.setSelectedIndex(0);
    ed_bilgClntNo.setValue(lc_realMchtClntNm.getValue());
  }
  scwin.lc_realMchtClntNm_onviewchange();

  //for=ds_bilgClntNo
  if (ds_bilgClntNo.getRowCount()) {
    lc_bilgClntNm.setSelectedIndex(0);
    ed_realMchtClntNo.setValue(lc_bilgClntNm.getValue());
  }
  scwin.lc_bilgClntNm_onviewchange();
};

/**
 * event
 * @name ds_order_onbeforerowpositionchange
 * @description
 */
scwin.ds_order_onbeforerowpositionchange = function (info) {
  $c.gus.cfPrepareObjectHidVal($p, ds_order, info.rowIndex, ["ctrtClntNo", "ctrtClntNm", "reqClntNo", "bilgClntNo", "realMchtClntNo", "dmndNo", "dmndNm", "bilgLodeptCd", "bilgLodeptNm", "sellLodeptCd", "sellLodeptNm", "lineCd", "lineNm", "shpCoClntNm", "dptWrkPlCd", "dptWrkPlNm", "arvWrkPlCd", "arvWrkPlNm", "cvsslMgntNo", "vsslCd"], [ed_ctrtClntNo, ed_ctrtClntNm, ed_reqClntNo, ed_bilgClntNo, ed_realMchtClntNo, ed_dmndNo, ed_dmndNm, ed_bilgLodeptCd, ed_bilgLodeptNm, ed_sellLodeptCd, ed_sellLodeptNm, ed_lineCd, ed_lineNm, ed_shpCoClntNm, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_cvsslMgntNo, ed_vsslCd]);
};

/**
 * event
 * @name gr_orderCommodity_oncellindexchange
 * @description
 */
scwin.gr_orderCommodity_onrowindexchange = function (row, oldRow) {
  if (!btn_Update.getDisabled()) {
    return;
  }
  ;

  // 해당 품명의 실적 발생여부를 확인하여 수정 가능 항목을 설정한다.
  // 실적 발생시 수정할 수 없다.
  // 실적 발생여부를 조회하여 수정항목을 설정한다.
  if (scwin.f_chkResultsConfirmationCommodity(row)) {
    scwin.setGrdOrderCommodityReadOnly(true);
    $c.gus.cfDisableBtnOnly($p, [btn_DeleteRow]);
  } else {
    scwin.setGrdOrderCommodityReadOnly(false);
    if (hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR && hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow, btn_DeleteRow, btn_UndoMark]);
    }
  }
  scwin.f_chkeckBLEdit(row);

  // 품명별 작업경로 생성여부를 확인한다.
  // 작업경로가 생성된 품명은 품명을 변경할수 없다.
  if (ds_orderCommodity.getCellData(row, "odrWrkPathYn") == DsConstants.YN_YES) {
    if (!gr_orderCommodity.getReadOnly("grid")) {
      gr_orderCommodity.setColumnReadOnly("blNo", true); //None
      gr_orderCommodity.setColumnReadOnly("commCd", true); //None
      // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
      gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
    }
  } else {
    if (!gr_orderCommodity.getReadOnly("grid")) {
      gr_orderCommodity.setColumnReadOnly("blNo", false); //"ANY"

      if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
        // 수입일반 오더 / 수입TS 오더
        if ($c.gus.cfIsNull($p, ds_orderCommodity.getCellData(row, "blNo"))) {
          gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
          // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
          gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
        } else {
          gr_orderCommodity.setColumnReadOnly("commCd", true); //None
          // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
          gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
        }
      } else if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR || hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
        // 수입본선 오더 / 부두간TS 오더
        gr_orderCommodity.setColumnReadOnly("commCd", true); //None
        // gr_orderCommodity.setColumnReadOnly("commNm", true); //None
        gr_orderCommodity.setColumnReadOnly("commIdx", true); //None
      } else {
        gr_orderCommodity.setColumnReadOnly("commCd", false); //"ANY"
        // gr_orderCommodity.setColumnReadOnly("commNm", false); //"ANY"
        gr_orderCommodity.setColumnReadOnly("commIdx", false); //"ANY"
      }
    }
  }
};

/**
 * event
 * @name gr_orderCommodity_oncellindexchange
 * @description
 */
scwin.gr_orderCommodity_oncellindexchange = function (row, col, oldRow, oldCol) {
  //for=ds_orderCommodity OnColumnChanged(row,colid)
  const colid = gr_orderCommodity.getColumnID(col);
  if (btn_Update.getDisabled() && colid == "blNo") {
    // BL 변경시 품명 수정 가능 제어
    scwin.f_chkeckBLEdit(row);
  }
};

/**
 * event
 * @name gr_orderCommodity_ontextimageclick
 * @description
 */
scwin.gr_orderCommodity_ontextimageclick = async function (row, col) {
  const colid = gr_orderCommodity.getColumnID(col);
  let code = null;
  switch (colid) {
    case "blNo":
      code = ds_orderCommodity.getCellData(row, "blNo");
      // ds_orderCommodity.setCellData(row, "blNo", "");
      await scwin.f_openCommPopUpGrid(1, row, code, '', 'F', 'F');
      break;
    case "commCd":
      code = ds_orderCommodity.getCellData(row, "commCd");
      // ds_orderCommodity.setCellData(row, "commCd", "");
      // ds_orderCommodity.setCellData(row, "commNm", "");
      // ds_orderCommodity.setCellData(row, "commIdx", "");
      await scwin.f_openCommPopUpGrid(2, row, code, '', 'F', 'F');
      break;
    case "dptWrkPlCd":
      code = ds_orderCommodity.getCellData(row, "dptWrkPlCd");
      // ds_orderCommodity.setCellData(row, "dptWrkPlCd", "");
      // ds_orderCommodity.setCellData(row, "dptWrkPlNm", "");
      await scwin.f_openCommPopUpGrid(3, row, code, '', 'F', 'F');
      break;
    case "arvWrkPlCd":
      code = ds_orderCommodity.getCellData(row, "arvWrkPlCd");
      // ds_orderCommodity.setCellData(row, "arvWrkPlCd", "");
      // ds_orderCommodity.setCellData(row, "arvWrkPlNm", "");
      await scwin.f_openCommPopUpGrid(4, row, code, '', 'F', 'F');
      break;
    default:
      break;
  }
};

/**
 * event
 * @name gr_orderCommodity_onafteredit
 * @description
 */
scwin.gr_orderCommodity_onafteredit = function (row, col, value) {
  const colid = gr_orderCommodity.getColumnID(col);
  switch (colid) {
    case "qty":
    case "cbm":
    case "len":
      if (value == "" || isNaN(value)) {
        ds_orderCommodity.setCellData(row, colid, "0");
      }
      break;
    case "grossWt":
    case "netWt":
      if (value == "" || isNaN(value)) {
        ds_orderCommodity.setCellData(row, colid, "0");
      }
      scwin.setSumFooter();
      break;
  }
};

/**
 * method
 * @name setSumFooter
 * @description
 */
scwin.setSumFooter = function () {
  let colidArr = ["grossWt", "netWt"];
  let allData = ds_orderCommodity.getAllJSON();
  for (colid of colidArr) {
    let val = allData.reduce((sum, item) => sum.plus(item[colid]), $w.bigDecimal("0"));
    gr_orderCommodity.setFooterData(colid + "Sum", val);
  }
};

/**
 * event
 * @name gr_orderCommodity_onviewchange
 * @description
 */
scwin.gr_orderCommodity_onviewchange = async function (info) {
  const colid = info.colId;
  const row = info.rowIndex;
  //for=gr_orderCommodity event=OnExit(row,colid,olddata)
  switch (colid) {
    // case "commNm": {
    case "commIdx":
      {
        let selected = ds_ctrtComm.getRowJSON(info.newSelectedIndex);
        const commCd = ds_orderCommodity.getCellData(row, "commCd");
        if ((commCd == "" || commCd.trim() != selected.commCd.trim()) && isFinite(selected.commCd)) {
          ds_orderCommodity.setCellData(row, "commCd", selected.commCd);
          ds_orderCommodity.setCellData(row, "commNm", selected.commNm);

          // 품명 코드로 해당 UNIT_CD 값을 조회
          let v_unitCd = "";
          let v_unitUpperCd = "";
          let commIdx = "";
          if (selected.commCd != "") {
            let matched = ds_ctrtComm.getMatchedJSON("commCd", selected.commCd, true);
            if (matched.length) {
              v_unitCd = matched[0].unitCd;
              v_unitUpperCd = matched[0].unitUpperCd;
              commIdx = matched[0].index;
            }
          }
          ds_orderCommodity.setCellData(row, "commIdx", commIdx);
          if (v_unitUpperCd == DsConstants.UNIT_CLS_CD_QTY) {
            ds_orderCommodity.setCellData(row, "qtyUnitCd", v_unitCd); // 수량단위인 경우
          } else if (v_unitUpperCd == DsConstants.UNIT_CLS_CD_WT) {
            ds_orderCommodity.setCellData(row, "unitCd", v_unitCd); // 중량단위인 경우
          }
        }
        break;
      }
    case "blNo":
      if (info.newValue != "" && info.newValue != info.oldValue) {
        await scwin.f_openCommPopUpGrid(1, row, info.newValue, '', 'T', 'T');
      }
      break;
    case "commCd":
      if (info.newValue != "" && info.newValue != info.oldValue) {
        await scwin.f_openCommPopUpGrid(2, row, info.newValue, '', 'T', 'T');
      }
      break;
    case "dptWrkPlCd":
      if (info.newValue != "" && info.newValue != info.oldValue) {
        await scwin.f_openCommPopUpGrid(3, row, info.newValue, '', 'T', 'T');
      }
      break;
    case "arvWrkPlCd":
      if (info.newValue != "" && info.newValue != info.oldValue) {
        await scwin.f_openCommPopUpGrid(4, row, info.newValue, '', 'T', 'T');
      }
      break;
    case "coshippingPsblYn":
      gr_orderCommodity.checkAll(colid, info.newValue);
      break;
    default:
      break;
  }
};

/**
 * event
 * @name ed_odrNo_onkeydown
 * @description
 */
scwin.ed_odrNo_onkeydown = async function (e) {
  // 오더번호 입력후 Enter Key 입력시 조회
  if (e.keyCode == 13) {
    await scwin.f_Retrieve();
  }
};

/**
 * event
 * @name ed_odrNo_onblur
 * @description
 */
scwin.ed_odrNo_onblur = function (e) {
  if (ed_odrNo.getReadOnly()) {
    return;
  }
  ;
  let strOdrNo = ed_odrNo.getValue().replace(/^\s*/, '');
  if (strOdrNo != null && strOdrNo != "") {
    hid_odrNo.setValue(strOdrNo);
  } else {
    hid_odrNo.setValue("");
  }
};

/**
 * event
 * @name ed_reqClntNo_onblur
 * @description
 */
scwin.ed_reqClntNo_onblur = async function (e) {
  lc_reqClntNm.setValue(ed_reqClntNo.getValue());
  if (ed_reqClntNo.getReadOnly()) {
    return;
  }
  ;
  let pCode = ed_reqClntNo.getValue().replace(/^\s*/, '');
  if (pCode != null && pCode != "") {
    if (pCode != hid_chkReqClntNo.getValue() || $c.gus.cfIsNull($p, hid_chkReqClntNo.getValue())) {
      ed_reqClntNo.setValue("");
      lc_reqClntNm.setValue("");
      await scwin.f_openCommonPopUp(2, pCode, "", 'T', 'T');
    }
  } else {
    ed_reqClntNo.setValue("");
    ed_reqClntNo.options.hidVal = "";
    lc_reqClntNm.setValue("");
  }
};

/**
 * event
 * @name ed_bilgClntNo_onblur
 * @description
 */
scwin.ed_bilgClntNo_onblur = async function (e) {
  lc_bilgClntNm.setValue(ed_bilgClntNo.getValue());
  if (ed_bilgClntNo.getReadOnly()) {
    return;
  }
  ;
  let pCode = ed_bilgClntNo.getValue().replace(/^\s*/, '');
  if (pCode != null && pCode != "") {
    if (pCode != hid_chkBilgClntNo.getValue() || $c.gus.cfIsNull($p, hid_chkBilgClntNo.getValue())) {
      ed_bilgClntNo.setValue("");
      lc_bilgClntNm.setValue("");
      await scwin.f_openCommonPopUp(3, pCode, "", 'T', 'T');
    }
  } else {
    ed_bilgClntNo.setValue("");
    ed_bilgClntNo.options.hidVal = "";
    lc_bilgClntNm.setValue("");
  }
};

/**
 * event
 * @name ed_realMchtClntNo_onblur
 * @description
 */
scwin.ed_realMchtClntNo_onblur = async function (e) {
  lc_realMchtClntNm.setValue(ed_realMchtClntNo.getValue());
  if (ed_realMchtClntNo.getReadOnly()) {
    return;
  }
  ;
  let pCode = ed_realMchtClntNo.getValue().replace(/^\s*/, '');
  if (pCode != null && pCode != "") {
    if (pCode != hid_chkRealMchtClntNo.getValue() || $c.gus.cfIsNull($p, hid_chkRealMchtClntNo.getValue())) {
      ed_realMchtClntNo.setValue("");
      lc_realMchtClntNm.setValue("");
      await scwin.f_openCommonPopUp(4, pCode, "", 'T', 'T');
    }
  } else {
    ed_realMchtClntNo.setValue("");
    ed_realMchtClntNo.options.hidVal = "";
    lc_realMchtClntNm.setValue("");
  }
};

/**
 * event
 * @name ed_cvsslMgntNo_onblur
 * @description
 */
scwin.ed_cvsslMgntNo_onblur = async function (e) {
  if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue().trim())) {
    if (hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
      // 벌크 수출 일반 오더 가 아닌경우

      // 본선관리번호 변경시 품명 , B/L 정보 삭제
      scwin.f_clearBillOfLadingCommodity();
    }
    if (hid_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
      // 벌크 수출 일반 오더인 경우
      $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_lane]);
      $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
    } else {
      // 벌크 수출 일반 오더 가 아닌경우
      $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_closeDt, ed_closeHh, ed_wrkStDt, ed_wrkStHh, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_lane]);
      $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
    }
  } else {
    await scwin.f_chkOpenCommonPopUp(ed_cvsslMgntNo, '', 10, true);
  }
};

/**
 * event
 * @name ed_tsCvsslMgntNo_onblur
 * @description
 */
scwin.ed_tsCvsslMgntNo_onblur = async function (e) {
  if ($c.gus.cfIsNull($p, ed_tsCvsslMgntNo.getValue().trim())) {
    $c.gus.cfInitObjects($p, [ed_tsCvsslMgntNo, ed_tsVsslCd, ed_tsVsslNm, ed_tsPortcnt, ed_closeDt, ed_closeHh, ed_wrkEndDt, ed_wrkEndHh, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_tsLane]);
    $c.gus.cfInitHidVal($p, [ed_tsCvsslMgntNo]);
  } else {
    await scwin.f_chkOpenCommonPopUp(ed_tsCvsslMgntNo, '', 13, true);
  }
};

/**
 * event
 * @name ed_portcnt_onblur
 * @description
 */
scwin.ed_portcnt_onblur = function (e) {
  scwin.f_chkBlList();
};

/**
 * event
 * @name ed_wrkStDt_onblur
 * @description
 */
scwin.ed_wrkStDt_onblur = function (e) {
  ed_wrkEndDt.setValue(ed_wrkStDt.getValue()); // 출발일시 변경시 도착일시 변경
};

/**
 * event
 * @name udc_ctrtClnt_onblurCodeEvent
 * @description
 */
scwin.udc_ctrtClnt_onblurCodeEvent = async function (e) {
  $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
  await scwin.f_chkOpenCommonPopUp(ed_ctrtClntNo, ed_ctrtClntNm, 1, true);
  scwin.clearCtrtClntNoInfo = true;
};

/**
 * event
 * @name udc_ctrtClnt_onviewchangeNameEvent
 * @description
 */
scwin.udc_ctrtClnt_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_ctrtClntNm, ed_ctrtClntNo, 1, false);
};

/**
 * event
 * @name udc_ctrtClnt_onclickEvent
 * @description
 */
scwin.udc_ctrtClnt_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(1, ed_ctrtClntNo.getValue(), ed_ctrtClntNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_dmnd_onblurCodeEvent
 * @description
 */
scwin.udc_dmnd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_dmndNo, ed_dmndNm, 5, true);
};

/**
 * event
 * @name udc_dmnd_onviewchangeNameEvent
 * @description
 */
scwin.udc_dmnd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_dmndNm, ed_dmndNo, 5, false);
};

/**
 * event
 * @name udc_dmnd_onclickEvent
 * @description
 */
scwin.udc_dmnd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(5, ed_dmndNo.getValue(), ed_dmndNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_sellLodept_onblurCodeEvent
 * @description
 */
scwin.udc_sellLodept_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd, ed_sellLodeptNm, 6, true);
};

/**
 * event
 * @name udc_sellLodept_onviewchangeNameEvent
 * @description
 */
scwin.udc_sellLodept_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_sellLodeptNm, ed_sellLodeptCd, 6, false);
};

/**
 * event
 * @name udc_sellLodept_onclickEvent
 * @description
 */
scwin.udc_sellLodept_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(6, ed_sellLodeptCd.getValue(), ed_sellLodeptNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_bilgLodept_onblurCodeEvent
 * @description
 */
scwin.udc_bilgLodept_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 7, true);
};

/**
 * event
 * @name udc_bilgLodept_onviewchangeNameEvent
 * @description
 */
scwin.udc_bilgLodept_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 7, false);
};

/**
 * event
 * @name udc_bilgLodept_onclickEvent
 * @description
 */
scwin.udc_bilgLodept_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(7, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_line_onblurCodeEvent
 * @description
 */
scwin.udc_line_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 8, true);
  if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [ed_lineCd]);
  }
};

/**
 * event
 * @name udc_line_onviewchangeNameEvent
 * @description
 */
scwin.udc_line_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 8, false);
  if ($c.gus.cfIsNull($p, ed_lineNm.getValue().trim())) {
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [ed_lineNm]);
  }
};

/**
 * event
 * @name udc_line_onclickEvent
 * @description
 */
scwin.udc_line_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(8, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_vssl_onblurCodeEvent
 * @description
 */
scwin.udc_vssl_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_vsslCd, '', 9, true);
};

/**
 * event
 * @name udc_vssl_onviewchangeNameEvent
 * @description
 */
scwin.udc_vssl_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 9, false);
};

/**
 * event
 * @name udc_vssl_onclickEvent
 * @description
 */
scwin.udc_vssl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(9, ed_vsslCd.getValue(), '', 'F', 'F');
};

/**
 * event
 * @name udc_dptWrkPl_onblurCodeEvent
 * @description
 */
scwin.udc_dptWrkPl_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, ed_dptWrkPlNm, 11, true);
};

/**
 * event
 * @name udc_dptWrkPl_onblurNameEvent
 * @description
 */
scwin.udc_dptWrkPl_onblurNameEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_dptWrkPlNm, ed_dptWrkPlCd, 11, false);
};

/**
 * event
 * @name udc_dptWrkPl_onclickEvent
 * @description
 */
scwin.udc_dptWrkPl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(11, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_arvWrkPl_onblurCodeEvent
 * @description
 */
scwin.udc_arvWrkPl_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, ed_arvWrkPlNm, 12, true);
};

/**
 * event
 * @name udc_arvWrkPl_onblurNameEvent
 * @description
 */
scwin.udc_arvWrkPl_onblurNameEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_arvWrkPlNm, ed_arvWrkPlCd, 12, false);
};

/**
 * event
 * @name udc_arvWrkPl_onclickEvent
 * @description
 */
scwin.udc_arvWrkPl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(12, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_clntMgnt_onblurCodeEvent
 * @description
 */
scwin.udc_clntMgnt_onblurCodeEvent = async function (e) {
  if (ed_clntMgntNonm.getStyle("display") !== "none") {
    await scwin.f_chkOpenCommonPopUp(ed_clntMgntNo, ed_clntMgntNonm, 15, true);
  }
  if (hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR && hid_odrKndCd.getValue() != DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
    // 수입일반, 수출일반 오더가 아닌경우
    let old_clntMchtNo = ed_clntMgntNo.options.hidVal;
    let new_clntMchtNo = ed_clntMgntNo.getValue();
    let rmk = ta_rmk.getValue();
    if (old_clntMchtNo != new_clntMchtNo) {
      if (!$c.gus.cfIsNull($p, new_clntMchtNo)) {
        new_clntMchtNo = "관련번호  :  " + new_clntMchtNo + "/";
      }
      if (!$c.gus.cfIsNull($p, old_clntMchtNo)) {
        // 이전 관리번호를 특이사항에서 제거
        old_clntMchtNo = "관련번호  :  " + old_clntMchtNo + "/";
        if (!$c.gus.cfIsNull($p, rmk.match(old_clntMchtNo))) {
          ta_rmk.setValue(rmk.replace(old_clntMchtNo, new_clntMchtNo));
          ed_clntMgntNo.options.hidVal = ed_clntMgntNo.getValue();
        }
      } else {
        ta_rmk.setValue(new_clntMchtNo + rmk);
        ed_clntMgntNo.options.hidVal = ed_clntMgntNo.getValue();
      }
    }
  }
};

/**
 * event
 * @name udc_clntMgnt_onviewchangeNameEvent
 * @description
 */
scwin.udc_clntMgnt_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_clntMgntNonm, ed_clntMgntNo, 15, false);
};

/**
 * event
 * @name udc_clntMgnt_onclickEvent
 * @description
 */
scwin.udc_clntMgnt_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(15, ed_clntMgntNo.getValue(), ed_clntMgntNonm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_tsVssl_onviewchangeNameEvent
 * @description
 */
scwin.udc_tsVssl_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_tsVsslNm, ed_vsslCd, 13, false);
};

/**
 * event
 * @name udc_tsVssl_onclickEvent
 * @description
 */
scwin.udc_tsVssl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(13, ed_vsslCd.getValue(), '', 'F', 'F');
};

/**
 * event
 * @name acb_odrKndCd_onviewchange
 * @description
 */
scwin.acb_odrKndCd_onviewchange = async function (info) {
  // DateSet 정보를 초기화한다.
  if (ds_order.getRowPosition() !== null && ds_order.getCellData(ds_order.getRowPosition(), "odrNo") == "") {
    scwin.f_clearDataSetAll();

    // 출발일시, 도착일시 초기화
    ed_wrkStDt.setValue(scwin.strCurDate); //출발일자(현재날짜)
    ed_wrkStHh.setValue(""); //출발시간
    ed_wrkEndDt.setValue(scwin.strCurDate); //도착일자(현재날짜)
    ed_wrkEndHh.setValue(""); //도착시간

    hid_selfClsCd.setValue(DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분코드 - 벌크오더(당사운송 : LI)
  }
  hid_odrKndCd.setValue(acb_odrKndCd.getValue()); // 오더종류

  scwin.f_setDisplayOdrKndCd(acb_odrKndCd.getValue());
  let userClsCd = scwin.sUserClsCd;
  // 로그인 대상자가 협력업체인 경우 계약거래처 변경을 하지 못하도록 한다.
  if (userClsCd != "01") {
    ed_ctrtClntNo = "131716"; //KBS
    await scwin.f_chkOpenCommonPopUp(ed_ctrtClntNo, ed_ctrtClntNm, 1, true);
  }
};

/**
 * event
 * @name lc_selfClsCd_onviewchange
 * @description
 */
scwin.lc_selfClsCd_onviewchange = function (info) {
  if (lc_selfClsCd.getSelectedIndex()) {
    hid_selfClsCd.setValue(lc_selfClsCd.getValue()); // 자가구분코드
  }
};

/**
 * event
 * @name lc_ctrtNo_labelFormatter
 * @description
 */
scwin.lc_ctrtNo_labelFormatter = function (label) {
  let row = lc_ctrtNo.getSelectedIndex();
  if (row >= 0) {
    let rowObj = ds_ctrtNo.getRowJSON(row);
    label = `${rowObj.ctrtNo} (${rowObj.clntPicNm} : ~${rowObj.ctrtEndDt} : ${rowObj.crcCd})`;
  }
  return label;
};

/**
 * event
 * @name lc_ctrtNo_onviewchange
 * @description
 */
scwin.lc_ctrtNo_onviewchange = async function (info) {
  if (!ds_ctrtNo.getRowCount() || scwin.mgntTrgtClntYn == 1) {
    return;
  }
  let v_ctrtNo = lc_ctrtNo.getValue();
  if (v_ctrtNo == "선택") {
    //청구/요청거래처/실화주거래처 정보 clear
    scwin.f_clearDataByClntNos();
    return;
  }
  let rowObj = ds_ctrtNo.getRowJSON(lc_ctrtNo.getSelectedIndex());
  hid_crcCd.setValue($c.gus.cfIsNull($p, rowObj.crcCd) ? "KRW" : rowObj.crcCd); // 통화코드
  hid_taxnClsCd.setValue(rowObj.taxnClsCd);
  if (ds_ctrtNo.getRowCount()) {
    scwin.mgntTrgtClntYn = rowObj.mgntTrgtClntYn;
  }
  if (scwin.mgntTrgtClntYn == 1) {
    if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_INSERT) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["본 계약거래처", "관리대상이므로 오더등록"]); // "@은(는) @할 수 없습니다.";

      // DataSet 초기화
      scwin.f_clearDataSetAll();
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableAllBtn($p);
      $c.gus.cfEnableBtnOnly($p, [btn_Create]);

      // 확정 버튼 , B/L 팝업 버튼 비활성화
      $c.gus.cfDisableObjects($p, [btn_ConfirmOrder1, btn_ConfirmOrder2, btn_DcSc, btn_UnitySelling, btn_SelectBL]);
      dscommon.cf_HideObject([btn_SelectBL]);
      return false;
    } else {
      await $c.gus.cfAlertMsg($p, "%1은(는) %2입니다.", ["본 계약거래처", "관리대상"]); //"@은(는) @입니다.
      return false;
    }
  }
  let odrCtrtNo = ds_order.getCellData(ds_order.getRowPosition(), "ctrtNo");
  let ctrtNo = hid_ctrtNo.getValue();
  if (odrCtrtNo != "" && ds_ctrtNo.getRowCount() && odrCtrtNo != ctrtNo && ds_order.getRowCount() && ed_odrNo.getValue() == "") {
    // 2. 계약번호 별 - 요청거래처, 실화주, 청구거래처 조회
    hid_ctrtNo.setValue(v_ctrtNo);
    scwin.f_clearClntDataSet();
    dma_retrieveContractInfo.set("ctrtNo", odrCtrtNo);
    $c.sbm.execute($p, sbm_retrieveCtrtNo);
  }
};

/**
 * event
 * @name lc_reqClntNm_onviewchange
 * @description
 */
scwin.lc_reqClntNm_onviewchange = function (info) {
  let val = lc_reqClntNm.getValue();
  ed_reqClntNo.setValue(val);
  hid_chkReqClntNo.setValue(val);
};

/**
 * event
 * @name lc_realMchtClntNm_onviewchange
 * @description
 */
scwin.lc_realMchtClntNm_onviewchange = function (info) {
  let val = lc_realMchtClntNm.getValue();
  ed_realMchtClntNo.setValue(val);
  ed_realMchtClntNo.options.hidVal = val;
  hid_chkRealMchtClntNo.setValue(val);
};

/**
 * event
 * @name lc_bilgClntNm_onviewchange
 * @description
 */
scwin.lc_bilgClntNm_onviewchange = function (info) {
  let val = lc_bilgClntNm.getValue();
  ed_bilgClntNo.setValue(val);
  hid_chkBilgClntNo.setValue(val);
};

/**
 * event
 * @name ta_rmk_onblur
 * @description
 */
scwin.ta_rmk_onblur = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ta_rmk]))) {
    ta_rmk.setValue("");
    ta_rmk.focus();
  }
};

/**
 * event
 * @name rd_coshippingYn_onviewchange
 * @description
 */
scwin.rd_coshippingYn_onviewchange = async function (info) {
  let rowCnt = ds_orderCommodity.getRowCount();
  if (rd_coshippingYn.getValue() == "1" && rowCnt < 2) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, new Array(`오더품목정보가 ${rowCnt}건인 경우`, "합적"));
    rd_coshippingYn.setValue("0");
    rd_coshippingYn.focus();
    return false;
  }
};

/**
 * event
 * @name btn_ConfirmOrder1_onclick
 * @description
 */
scwin.btn_ConfirmOrder1_onclick = async function (e) {
  await scwin.f_confirmOrder();
};

/**
 * event
 * @name btn_fieldClear_onclick
 * @description
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * event
 * @name btn_retrieve_onclick
 * @description
 */
scwin.btn_retrieve_onclick = async function (e) {
  await scwin.f_Retrieve();
};

/**
 * event
 * @name btn_PopUp2_onclick
 * @description
 */
scwin.btn_PopUp2_onclick = async function (e) {
  let name = lc_reqClntNm.getText(true);
  let code = ed_reqClntNo.getValue();
  lc_reqClntNm.setValue("");
  ed_reqClntNo.setValue("");
  await scwin.f_openCommonPopUp(2, code, name, 'F', 'F');
};

/**
 * event
 * @name btn_PopUp3_onclick
 * @description
 */
scwin.btn_PopUp3_onclick = async function (e) {
  let name = lc_bilgClntNm.getText(true);
  let code = ed_bilgClntNo.getValue();
  lc_bilgClntNm.setValue("");
  ed_bilgClntNo.setValue("");
  await scwin.f_openCommonPopUp(3, code, name, 'F', 'F');
};

/**
 * event
 * @name btn_PopUp4_onclick
 * @description
 */
scwin.btn_PopUp4_onclick = async function (e) {
  let name = lc_realMchtClntNm.gettext(true);
  let code = ed_realMchtClntNo.getValue();
  lc_realMchtClntNm.setValue();
  ed_realMchtClntNo.setValue("");
  await scwin.f_openCommonPopUp(4, code, name, 'F', 'F');
};

/**
 * event
 * @name btn_PopUp10_onclick
 * @description
 */
scwin.btn_PopUp10_onclick = async function (e) {
  let code = ed_cvsslMgntNo.getValue();
  ed_cvsslMgntNo.setValue("");
  await scwin.f_openCommonPopUp(10, code, '', 'F', 'F');
};

/**
 * event
 * @name btn_tsCvsslMgntNo_onclick
 * @description
 */
scwin.btn_tsCvsslMgntNo_onclick = async function (e) {
  let code = ed_tsCvsslMgntNo.getValue();
  ed_tsCvsslMgntNo.setValue("");
  await scwin.f_openCommonPopUp(13, code, '', 'F', 'F');
};

/**
 * event
 * @name btn_odrSelItemArrowDn_onclick
 * @description
 */
scwin.btn_odrSelItemArrowDn_onclick = function (e) {
  scwin.f_showOdrSelItem();
};

/**
 * event
 * @name btn_odrSelItemArrowUp_onclick
 * @description
 */
scwin.btn_odrSelItemArrowUp_onclick = function (e) {
  scwin.f_hideOdrSelItem();
};

/**
 * event
 * @name btn_ConfirmOrder2_onclick
 * @description
 */
scwin.btn_ConfirmOrder2_onclick = async function (e) {
  await scwin.f_confirmOrder();
};

/**
 * event
 * @name btn_DcSc_onclick
 * @description
 */
scwin.btn_DcSc_onclick = async function (e) {
  await scwin.f_discountSurcharge();
};

/**
 * event
 * @name btn_UnitySelling_onclick
 * @description
 */
scwin.btn_UnitySelling_onclick = async function (e) {
  await scwin.f_unitySelling();
};

/**
 * event
 * @name btn_SelectBL_onclick
 * @description
 */
scwin.btn_SelectBL_onclick = async function (e) {
  await scwin.f_selectBL();
};

/**
 * event
 * @name btn_OrderCopyDomestic_onclick
 * @description
 */
scwin.btn_OrderCopyDomestic_onclick = async function (e) {
  // 화면 삭제되어 버튼 관련기능 제거
  // await scwin.f_copyOrderDomestic();
};

/**
 * event
 * @name btn_BulkAlloccarIndict_onclick
 * @description
 */
scwin.btn_BulkAlloccarIndict_onclick = async function (e) {
  // 화면 삭제되어 버튼 관련기능 제거
  // await scwin.f_bulkAlloccarIndict();
};

/**
 * event
 * @name btn_tmlRmkIfno_onclick
 * @description
 */
scwin.btn_tmlRmkIfno_onclick = async function (e) {
  await scwin.f_RmkIfno();
};

/**
 * event
 * @name btn_Create_onclick
 * @description
 */
scwin.btn_Create_onclick = async function (e) {
  scwin.f_Create();
};

/**
 * event
 * @name btn_Update_onclick
 * @description
 */
scwin.btn_Update_onclick = function (e) {
  scwin.f_Update();
};

/**
 * event
 * @name btn_Save_onclick
 * @description
 */
scwin.btn_Save_onclick = async function (e) {
  await scwin.f_Save();
};

/**
 * event
 * @name btn_Delete_onclick
 * @description
 */
scwin.btn_Delete_onclick = async function (e) {
  await scwin.f_Delete();
};

/**
 * method
 * @name etc1ToFltrCd1Formatter
 * @description
 */
scwin.etc1ToFltrCd1Formatter = function (rowObj) {
  return rowObj.etc1;
};

/**
 * method
 * @name etc2ToFltrCd2Formatter
 * @description
 */
scwin.etc2ToFltrCd2Formatter = function (rowObj) {
  return rowObj.etc2;
};

/**
* method
* @name undoMarked
* @description
*/
scwin.undoMarked = function (grdObj, dltObj) {
  let selected = grdObj.getAllFocusedRowIndex();
  selected.sort();
  selected.reverse();
  dltObj.setBroadcast(false);
  for (let idx of selected) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.undoRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
};

/**
* method
* @name deleteAll
* @description
*/
scwin.deleteAll = function (dltObj) {
  dltObj.setBroadcast(false);
  for (let idx = dltObj.getRowCount() - 1; idx >= 0; --idx) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.deleteRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
};

/**
* method
* @name deleteRows
* @description
*/
scwin.deleteRows = function (dltObj, rowArr) {
  rowArr.sort();
  rowArr.reverse();
  dltObj.setBroadcast(false);
  for (let idx of rowArr) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.deleteRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
};

/**
* method
* @name deleteRow
* @description
*/
scwin.deleteRow = function (dltObj, row) {
  if (dltObj.getRowStatus(row) == "C") {
    dltObj.removeRow(row);
  } else {
    dltObj.deleteRow(row);
  }
};

/**
* event
* @name input_onkeyup
* @description inputbox 소문자 -> 대문자
* @returns
*/
scwin.input_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
* event
* @name ds_orderCommodity_ondataload
* @description
* @returns
*/
scwin.ds_orderCommodity_ondataload = function () {
  scwin.setSumFooter();
};

/**
* event
* @name ds_orderCommodity_oninsertrow
* @description
* @returns
*/
scwin.ds_orderCommodity_oninsertrow = function (info) {
  scwin.setSumFooter();
};

/**
* event
* @name ds_orderCommodity_onremoverow
* @description
* @returns
*/
scwin.ds_orderCommodity_onremoverow = function (info) {
  scwin.setSumFooter();
};

/**
* method
* @name sortCtrtNo
* @description
* @returns
*/
scwin.sortCtrtNo = function () {
  //asis 정렬되는 기준을 모르겠다. 일단 선택이 첫번째가 된다.
  let matched = ds_ctrtNo.getMatchedIndex("ctrtNo", "선택", true);
  if (matched.length) {
    let rowObj = ds_ctrtNo.getRowJSON(matched[0]);
    ds_ctrtNo.removeRow(matched[0]);
    ds_ctrtNo.setRowJSON(0, rowObj, false);
    ds_ctrtNo.reform();
    lc_ctrtNo.setSelectedIndex(0);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'grp_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'width: 110px;',id:'ed_odrNo',placeholder:'',class:'',title:'오더번호',maxByteLength:'13',editFormat:'XXXXXXXXXXXXX','ev:onkeyup':'scwin.input_onkeyup','ev:onkeydown':'scwin.ed_odrNo_onkeydown','ev:onblur':'scwin.ed_odrNo_onblur',objType:'Data',fixLength:'13',ref:'data:ds_order.odrNo',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ConfirmOrder1',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_ConfirmOrder1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더확정'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'tb_order',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width: 270px;',submenuSize:'auto',title:'오더종류',mandatory:'true','ev:oneditkeyup':'scwin.input_onkeyup',searchTarget:'value',caseSensitive:'false',sortMethod:'ascending',sortOption:'value','ev:onviewchange':'scwin.acb_odrKndCd_onviewchange',objType:'data',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_ctrtClntNo',id:'udc_ctrtClnt',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',validTitle:'계약처',UpperFlagCode:'1',btnId:'btn_PopUp1',nameId:'ed_ctrtClntNm',maxlengthName:'30',validExpName:'계약거래처:no:maxByteLength=30',validExpCode:'계약처:yes','ev:onblurCodeEvent':'scwin.udc_ctrtClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ctrtClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_ctrtClnt_onclickEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveClntInfo2',codeWidth:'60',refDataCollection:'ds_order',code:'ctrtClntNo',name:'ctrtClntNm',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 270px;',allOption:'false',id:'lc_ctrtNo',class:'',direction:'auto',mandatory:'true',objType:'data',ref:'data:ds_order.ctrtNo',title:'계약번호','ev:onviewchange':'scwin.lc_ctrtNo_onviewchange',visibleRowNum:'20',customLabelFormatter:'scwin.lc_ctrtNo_labelFormatter'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'780px',selectedRowColor:'',label:'clntPicNm',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'width:100px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'width:200px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'width:80px',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_reqClntNo',placeholder:'',style:'width: 60px;',title:'요청처','ev:onkeyup':'scwin.input_onkeyup',editFormat:'XXXXXX',maxByteLength:'6','ev:onblur':'scwin.ed_reqClntNo_onblur',objType:'data',ref:'data:ds_order.reqClntNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp2',style:'',type:'button','ev:onclick':'scwin.btn_PopUp2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqClntNm',objType:'data',ref:'',style:'',submenuSize:'auto','ev:onviewchange':'scwin.lc_reqClntNm_onviewchange',visibleRowNum:'20',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_reqClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClntNo',placeholder:'',style:'width: 60px;',title:'청구처',editFormat:'XXXXXX',maxByteLength:'6','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_bilgClntNo_onblur',objType:'data',ref:'data:ds_order.bilgClntNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp3',style:'',type:'button','ev:onclick':'scwin.btn_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bilgClntNm',objType:'data',ref:'',style:'',submenuSize:'auto','ev:onviewchange':'scwin.lc_bilgClntNm_onviewchange',visibleRowNum:'20',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bilgClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_realMchtClntNo_01',label:'실화주',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_dmndNo_01',label:'수요가',ref:'',style:'display:none;',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_realMchtClntNo_02',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_realMchtClntNo',placeholder:'',style:'width: 60px;',title:'실화주',editFormat:'XXXXXX',maxByteLength:'6','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_realMchtClntNo_onblur',objType:'data',ref:'data:ds_order.realMchtClntNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp4',style:'',type:'button','ev:onclick':'scwin.btn_PopUp4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_realMchtClntNm',objType:'data',ref:'',style:'',submenuSize:'auto','ev:onviewchange':'scwin.lc_realMchtClntNm_onviewchange',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_realMchtClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_dmndNo_02',style:'display:none;'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_dmndNo',id:'udc_dmnd',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',nameId:'ed_dmndNm',maxlengthName:'30',validExpName:'수요가:no:maxByteLength=30',btnId:'btn_PopUp5','ev:onblurCodeEvent':'scwin.udc_dmnd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dmnd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dmnd_onclickEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveDmndList',code:'dmndNo',refDataCollection:'ds_order',name:'dmndNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_sellLodeptCd',validTitle:'매출부서',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',nameId:'ed_sellLodeptNm',maxlengthName:'50',validExpName:'매출부서:no:maxByteLength=50',btnId:'btn_PopUp6',id:'udc_sellLodept','ev:onblurCodeEvent':'scwin.udc_sellLodept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_sellLodept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_sellLodept_onclickEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLogisDeptInfo',codeWidth:'60',code:'sellLodeptCd',refDataCollection:'ds_order',name:'sellLodeptNm',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_bilgLodeptCd',validTitle:'청구부서',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',nameId:'ed_bilgLodeptNm',validExpName:'청구부서:no:maxByteLength=50',maxlengthName:'50',btnId:'btn_PopUp7',id:'udc_bilgLodept','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLogisDeptInfo',codeWidth:'60',code:'bilgLodeptCd',refDataCollection:'ds_order',name:'bilgLodeptNm',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_lineCd_01',label:'Line/선사',class:'req'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_lineCd_02',class:'form-group',style:'width: 270px;'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 180px;',codeId:'ed_lineCd',validTitle:'LINE',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',id:'udc_line',UpperFlagCode:'1',nameId:'ed_lineNm',validExpName:'LINE:no:maxByteLength=30',maxlengthName:'30',btnId:'btn_PopUp8','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_line_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLineInfo',codeWidth:'60',refDataCollection:'ds_order',code:'lineCd',name:'lineNm',mandatoryCode:'true'}},{T:1,N:'xf:input',A:{style:'max-width: 130px;',id:'ed_shpCoClntNm',placeholder:'',class:'',title:'선사',maxByteLength:'30',objType:'key',ref:'data:ds_order.shpCoClntNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'grp_blNo_cvsslMgntNo'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_cvsslMgntNo_01',label:'본번/입항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 60px;',title:'본선관리번호',mandatory:'true',maxByteLength:'8',editFormat:'XXXXXXXX','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_cvsslMgntNo_onblur',objType:'data',ref:'data:ds_order.cvsslMgntNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp10',style:'',type:'button','ev:onclick':'scwin.btn_PopUp10_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_closeDtm',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_closeDt',style:'width:95px',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_order.closeDt'}},{T:1,N:'xf:input',A:{class:'w50',id:'ed_closeHh',placeholder:'',style:'width:97px;',editFormat:'##:##',maxByteLength:'4',displayFormat:'##:##',objType:'data',ref:'data:ds_order.closeHh'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_vsslCd_01',label:'선박명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_vsslCd_02',style:'width: 270px;'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_vsslCd',validTitle:'선박코드',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',nameId:'ed_vsslNm',validExpName:'선박명:yes:maxByteLength=50',maxlengthName:'50',btnId:'btn_PopUp9',id:'udc_vssl','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vssl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_vssl_onclickEvent',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',selectID:'retrieveVsslCdInfo',codeWidth:'60',refDataCollection:'ds_order',code:'vsslCd',name:'vsslNm',mandatoryName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_portcnt',label:'항차/항로',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:85px;',title:'항차',maxByteLength:'10',mandatory:'true','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_portcnt_onblur',objType:'data',ref:'data:ds_order.portcnt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lane',placeholder:'',style:'width:85px;',maxByteLength:'4',editFormat:'XXXX','ev:onkeyup':'scwin.input_onkeyup',objType:'key'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display:none;',id:'grp_tsCvsslMgntNo'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'TS본번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tsCvsslMgntNo',placeholder:'',style:'width:60px;',mandatory:'true',editFormat:'XXXXXXXX','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_tsCvsslMgntNo_onblur',objType:'data',ref:'data:ds_order.tsCvsslMgntNo',maxByteLength:'8'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_tsCvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_tsCvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'TS선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',id:'udc_tsVssl',codeId:'ed_tsVsslCd',UpperFlagCode:'1',nameId:'ed_tsVsslNm',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',validTitle:'선박명',validExpName:'선박명:yes:maxByteLength=50',maxlengthName:'50',btnId:'btn_tsVsslCd','ev:onviewchangeNameEvent':'scwin.udc_tsVssl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_tsVssl_onclickEvent',objTypeCode:'data',objTypeName:'data',code:'tsVsslCd',refDataCollection:'ds_order',name:'tsVsslNm',codeWidth:'60',mandatoryCode:'true',mandatoryName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'TS항차/항로',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tsPortcnt',placeholder:'',style:'width:85px;',mandatory:'true',maxByteLength:'10',title:'TS항차','ev:onkeyup':'scwin.input_onkeyup',objType:'data',ref:'data:ds_order.tsPortcnt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_tsLane',placeholder:'',style:'width:85px;','ev:onkeyup':'scwin.input_onkeyup',maxByteLength:'4',editFormat:'XXXX',objType:'key',ref:'data:ds_order.tslane'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fromTo',label:'From ~ To',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',id:'udc_dptWrkPl',nameId:'ed_dptWrkPlNm',codeId:'ed_dptWrkPlCd',validTitle:'출발작업장',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',validExpName:'From:yes',btnId:'btn_PopUp12','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dptWrkPl_onblurNameEvent','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveWrkPlInfo2',codeWidth:'60',code:'dptWrkPlCd',refDataCollection:'ds_order',name:'dptWrkPlNm',mandatoryCode:'true',mandatoryName:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dptDtl',placeholder:'',style:'width:150px;',title:'출발작업장 상세',maxByteLength:'100',objType:'data',ref:'data:ds_order.dptDtl'}},{T:1,N:'xf:group',A:{id:'grp_arvWrkPlCd',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',refDataCollection:'ds_order',popupID:'',validExpName:'From:yes',code:'arvWrkPlCd',UpperFlagCode:'1',codeWidth:'60',hideName:'Y',btnId:'btn_PopUp13','ev:onclickEvent':'scwin.udc_arvWrkPl_onclickEvent',allowCharCode:'a-zA-Z0-9',codeId:'ed_arvWrkPlCd',selectID:'retrieveWrkPlInfo2',validTitle:'도착작업장',objTypeName:'data',name:'arvWrkPlNm',nameId:'ed_arvWrkPlNm',style:'width: 270px;','ev:onblurNameEvent':'scwin.udc_arvWrkPl_onblurNameEvent',id:'udc_arvWrkPl','ev:onblurCodeEvent':'scwin.udc_arvWrkPl_onblurCodeEvent',mandatoryCode:'true',mandatoryName:'true'}},{T:1,N:'xf:input',A:{ref:'data:ds_order.arvDtl',maxByteLength:'100',style:'width:150px;',id:'ed_arvDtl',placeholder:'',title:'도착작업장 상세',class:'',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_wrkStDtHh_01',label:'출발일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_wrkStDtHh_02',style:'width: 270px;'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wrkStDt',style:'width:95px',title:'출발일자/작업일자',displayFormat:'yyyy/MM/dd','ev:onblur':'scwin.ed_wrkStDt_onblur',objType:'data',ref:'data:ds_order.wrkStDt',mandatory:'true',fixLength:'8'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_wrkStHh',style:'width: 50px;',displayFormat:'HH:mm',mandatory:'true',title:'출발시간',maxByteLength:'4',objType:'data',ref:'data:ds_order.wrkStHh',fixLength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_wrkEndDtHh_01',label:'도착일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_wrkEndDtHh_02',style:'width: 270px;'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wrkEndDt',style:'width:95px;',title:'도착일자',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_order.wrkEndDt',mandatory:'true',fixLength:'8'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_wrkEndHh',style:'width: 50px;',mandatory:'true',title:'도착시간',maxByteLength:'4',displayFormat:'HH:mm',objType:'data',ref:'data:ds_order.wrkEndHh',fixLength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_selfCls_01',label:'자가/BK',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_selfCls_02',class:'form-group',style:'width: 270px;'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'flex_no',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selfClsCd',mandatory:'true',objType:'data',ref:'',style:'width:110px;',submenuSize:'auto','ev:onviewchange':'scwin.lc_selfClsCd_onviewchange',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:group',A:{id:'grp_bk',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:input',A:{maxByteLength:'40',style:'',id:'ed_bk',placeholder:'',title:'BK',class:'',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'grp_picNm_picTelNo'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_onPicNm',placeholder:'',style:'width:150px;',title:'상차담당',maxByteLength:'40',objType:'data',ref:'data:ds_order.onPicNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_onPicTelNo',placeholder:'',style:'',title:'상차담당전화번호',maxByteLength:'20',objType:'data',ref:'data:ds_order.onPicTelNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_offPicNm',placeholder:'',style:'width:150px;',title:'하차담당',maxByteLength:'40',objType:'data',ref:'data:ds_order.offPicNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_offPicTelNo',placeholder:'',style:'',title:'하차담당전화번호',maxByteLength:'20',objType:'data',ref:'data:ds_order.offPicTelNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrPicNm',placeholder:'',style:'width:150px;',title:'오더담당',maxByteLength:'40',objType:'data',ref:'data:ds_order.odrPicNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_odrPicTelNo',placeholder:'',style:'',title:'오더담당전화번호',maxByteLength:'20',objType:'data',ref:'data:ds_order.odrPicTelNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정/완료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_odrDcsnYn',label:'',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_odrCompleteYn',label:'',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_odrCnclYn',label:'',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출/합적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_sellYn',ref:'data:ds_order.sellYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_coshippingYn',ref:'data:ds_order.coshippingYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_coshippingYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_clntMchtNo',label:'관련번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_clntMgntNo',validTitle:'관련번호',id:'udc_clntMgnt',nameId:'ed_clntMgntNonm',btnId:'btn_PopUp15',maxlengthCode:'20',maxlengthName:'30',validExpName:'거래처관리번호명:no:maxByteLength=30','ev:onblurCodeEvent':'scwin.udc_clntMgnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntMgnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clntMgnt_onclickEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveClntMgntList',code:'clntMgntNo',refDataCollection:'ds_order',name:'clntMgntNonm',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ta_rmk',style:'',objType:'data',maxByteLength:'500',ref:'data:ds_order.rmk','ev:onblur':'scwin.ta_rmk_onblur',title:'특이사항'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_trfAdptCd',label:'요율적용',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_trfAdptCd',search:'start',style:'width:150px;',submenuSize:'auto',searchTarget:'value',sortMethod:'ascending',sortOption:'value',caseSensitive:'false',visibleRowNum:'10',ref:'data:ds_order.trfAdptCd',emptyItem:'true',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품명목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section1',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_orderCommodity',grdDownOpts:'{ "fileName": "품명목록.xlsx", "sheetName": "품명목록" }'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_orderCommodity',id:'gr_orderCommodity',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'2',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20',readOnlyTabIgnore:'true',focusFlow:'linear',columnMove:'true',fixedColumnNoMove:'true',enterKeyMove:'edit',columnMoveWithFooter:'true','ev:ontextimageclick':'scwin.gr_orderCommodity_ontextimageclick','ev:onviewchange':'scwin.gr_orderCommodity_onviewchange','ev:oncellindexchange':'scwin.gr_orderCommodity_oncellindexchange',gridName:'오더품명','ev:onafteredit':'scwin.gr_orderCommodity_onafteredit','ev:onrowindexchange':'scwin.gr_orderCommodity_onrowindexchange',editModeEvent:'onclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'오더번호',width:'100',hidden:'true',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'BL번호',width:'150',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'품명순번',width:'100',hidden:'true',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'품명코드',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column19',inputType:'text',value:'품명',width:'280'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column110',value:'합적가능',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column80',inputType:'text',style:'',value:'수량단위',width:'100'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column112',value:'수량',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'중량단위',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column17',inputType:'text',value:'중량(KG)',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column38',inputType:'text',value:'NET중량',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column39',inputType:'text',value:'CBM',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column50',inputType:'text',value:'길이(M)',width:'80'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column48',inputType:'text',value:'고객관리번호',width:'120'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',hidden:'t',id:'column46',inputType:'text',value:'팔레트',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column40',inputType:'text',value:'From',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',hidden:'t',id:'column44',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column42',inputType:'text',value:'To',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column60',inputType:'text',value:'도착지',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'wrkStDtHeader',inputType:'text',value:'출발일자',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'wrkStHhHeader',inputType:'text',value:'출발시간',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDtHeader',inputType:'text',style:'',value:'도착일자',width:'100',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHhHeader',inputType:'text',style:'',value:'도착시간',width:'80',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column104',inputType:'text',style:'',value:'취소여부',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column102',inputType:'text',style:'',value:'설명',width:'200',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column144',value:'실적번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column100',inputType:'text',style:'',value:'실적여부',width:'80',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'blNo',inputType:'textImage',removeBorderStyle:'false',width:'150',textAlign:'center',viewType:'default',maxByteLength:'20'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commCd',inputType:'textImage',removeBorderStyle:'false',width:'100',value:'',textAlign:'center',viewType:'default',maxByteLength:'8'}},{T:1,N:'w2:column',A:{id:'commIdx',inputType:'select',width:'280',textAlign:'left',allOption:'',chooseOption:'',ref:'',copyOption:'display',displayMode:'label',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_ctrtComm'},E:[{T:1,N:'w2:label',A:{ref:'commNm'}},{T:1,N:'w2:value',A:{ref:'index'}}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',style:'',id:'coshippingPsblYn',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qtyUnitCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left',emptyItem:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,###',maxLength:'15',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'unitCd',value:'',displayMode:'label',textAlign:'left',emptyItem:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'15.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'netWt',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',hidden:'true',maxLength:'15.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'70',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'7.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'len',inputType:'text',width:'80',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',maxLength:'8.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cstmrMgntNo',inputType:'text',width:'120',maxLength:'30',textAlign:'right',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'paletYn',inputType:'checkbox',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'textImage',width:'100',maxLength:'5',viewType:'default',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'textImage',width:'100',maxLength:'5',textAlign:'center',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'calendar',width:'100',textAlign:'center',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',width:'80',textAlign:'center',allowChar:'0-9',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'calendar',style:'',value:'',width:'100',textAlign:'center',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'',width:'80',textAlign:'center',allowChar:'0-9',maxLength:'4',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclYn',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'200',textAlign:'left',maxByteLength:'500'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkRsltsNo',value:'',displayMode:'label',readOnly:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkRsltsYn',inputType:'expression',style:'',value:'',width:'80',readOnly:'true',expression:'datalist(\'wrkRsltsNo\')==\'\'?\'미생성\':\'생성\''}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column136',value:'',displayMode:'label',textAlign:'right',class:'',dataType:'bigDecimal',displayFormat:'#,##0',expression:'COUNT(\'qty\')==0?\'0\':SUM(\'qty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grossWtSum',value:'',displayMode:'label',class:'',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'netWtSum',value:'',displayMode:'label',class:'',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column132',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',expression:'COUNT(\'cbm\')==0?\'0\':SUM(\'cbm\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowDelYn:'Y',btnRowAddYn:'Y',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_UndoRow',gridID:'gr_orderCommodity',cancelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',btnRowAddObj:'btn_AddRow',btnRowDelObj:'btn_DeleteRow',btnCancelObj:'btn_UndoMark'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_odrSelItem_01',class:'row-gap-8',style:'display:none;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매출목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'display:none',id:'btn_odrSelItemArrowDn',type:'button',class:'btn','ev:onclick':'scwin.btn_odrSelItemArrowDn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'펼치기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_odrSelItemArrowUp',style:'',type:'button','ev:onclick':'scwin.btn_odrSelItemArrowUp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'접기'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_odrSelItem_btn',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_odrSelItem_02',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_odrSelItem',id:'',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_odrSelItem_02',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_orderSelling',style:'',autoFit:'allColumn',id:'gr_odrSelItem',visibleRowNum:'3',class:'wq_gvw',readOnly:'true',editModeEvent:'onclick',gridName:'매출항목'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption11',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column1',value:'매출항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column17',value:'작업경로',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column15',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'단가',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'textImage',style:'',id:'selpchItemNm',value:'',displayMode:'label',textAlign:'left',viewType:'default'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'ctrtWrkPathNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ctrtTrf',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ConfirmOrder2',style:'display:none;',type:'button','ev:onclick':'scwin.btn_ConfirmOrder2_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_DcSc',style:'display:none;',type:'button','ev:onclick':'scwin.btn_DcSc_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_UnitySelling',style:'display:none;',type:'button','ev:onclick':'scwin.btn_UnitySelling_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합매출입조정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_SelectBL',style:'display:none;',type:'button','ev:onclick':'scwin.btn_SelectBL_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BL 선택'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link dsN',id:'btn_OrderCopyDomestic',style:'display:none;',type:'button','ev:onclick':'scwin.btn_OrderCopyDomestic_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더복사(내수)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link dsN',id:'btn_BulkAlloccarIndict',style:'display:none',type:'button','ev:onclick':'scwin.btn_BulkAlloccarIndict_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업지시등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_tmlRmkIfno',style:'',type:'button','ev:onclick':'scwin.btn_tmlRmkIfno_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특이사항수정'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'dsN'},E:[{T:1,N:'w2:udc_comCode',A:{style:'width: 250px;',id:'udc_clntInfo',selectID:'retrieveClntInfo',codeId:'ed_grdClntInfo'}},{T:1,N:'w2:udc_comCode',A:{style:'width: 250px;',id:'udc_grdCommInfo',selectID:'retrieveCommInfo'}},{T:1,N:'w2:udc_comCode',A:{style:'width: 250px;',id:'udc_grdWrkPl',selectID:'retrieveWrkPlInfo2'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'flex_no',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_unitCd04',mandatory:'true',objType:'data',ref:'',style:'width:110px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{style:'',id:'hid_shpCoClntNo',ref:'data:ds_order.shpCoClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_portCd',ref:'data:ds_order.portCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_ctrtClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_ctrtNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_destPortCd',ref:'data:ds_order.destPortCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrKndCd',ref:'data:ds_order.odrKndCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_bizDivCntrYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_bizDivBulkYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_sellYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_cntrDsgYn',ref:'data:ds_order.cntrDsgYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_repClntNo',ref:'data:ds_order.repClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_clntOdrNo',ref:'data:ds_order.clntOdrNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_transCoNm',ref:'data:ds_order.transCoNm'}},{T:1,N:'xf:input',A:{style:'',id:'hid_transCoTelNo',ref:'data:ds_order.transCoTelNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_selfClsCd',ref:'data:ds_order.elfClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_transCondCd',ref:'data:ds_order.transCondCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_cntrWtCondCd',ref:'data:ds_order.cntrWtCondCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chClsCd',ref:'data:ds_order.chClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_wrkPatternCd',ref:'data:ds_order.wrkPatternCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_coshippingYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_tsCvsslMgntNo',ref:'data:ds_order.tsCvsslMgntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_taxnClsCd',ref:'data:ds_order.taxnClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_upperOdrNo',ref:'data:ds_order.upperOdrNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_tsVsslCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_tsPortcnt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_tsPortCd',ref:'data:ds_order.tsPortCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_tplCoClsCd',ref:'data:ds_order.tplCoClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrClsCd',ref:'data:ds_order.odrClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_smsSndYn',ref:'data:ds_order.smsSndYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_sndDt',ref:'data:ds_order.sndDt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_sndHh',ref:'data:ds_order.sndHh'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrDcsnYn',ref:'data:ds_order.odrDcsnYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrDcsnDt',ref:'data:ds_order.odrDcsnDt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrDcsnHh',ref:'data:ds_order.odrDcsnHh'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCompleteYn',ref:'data:ds_order.odrCompleteYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCompleteDt',ref:'data:ds_order.odrCompleteDt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCompleteHh',ref:'data:ds_order.odrCompleteHh'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCnclYn',ref:'data:ds_order.odrCnclYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCnclDt',ref:'data:ds_order.odrCnclDt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCnclHh',ref:'data:ds_order.odrCnclHh'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCnclItemCd',ref:''}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrCnclRsn',ref:'data:ds_order.odrCnclRsn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrDelYn',ref:'data:ds_order.odrDelYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrDelDt',ref:'data:ds_order.odrDelDt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrDelHh',ref:'data:ds_order.odrDelHh'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrDt',ref:'data:ds_order.odrDt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrJobType'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrWrkPathCnt',ref:'data:ds_order.odrWrkPathCnt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_crcCd',ref:'data:ds_order.crcCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_adptExchRt',ref:'data:ds_order.adptExchRt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_adptExchRtDt',ref:'data:ds_order.adptExchRtDt'}},{T:1,N:'xf:input',A:{style:'',id:'hid_transCargoClsCd',ref:'data:ds_order.transCargoClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_impExpDomesticClsCd',ref:'data:ds_order.impExpDomesticClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_regBranCd',ref:'data:ds_order.regBranCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_fioBtClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_bulkYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_pchsCreatYn',ref:'data:ds_order.pchsCreatYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_bilgOdrKndCd',ref:'data:ds_order.bilgOdrKndCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_regId',ref:'data:ds_order.regId'}},{T:1,N:'xf:input',A:{style:'',id:'hid_regDtm',ref:'data:ds_order.regDtm'}},{T:1,N:'xf:input',A:{style:'',id:'hid_modId',ref:'data:ds_order.modId'}},{T:1,N:'xf:input',A:{style:'',id:'hid_modDtm',ref:'data:ds_order.modDtm'}},{T:1,N:'xf:input',A:{style:'',id:'hid_assgnClsCd',ref:'data:ds_order.assgnClsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_hblNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_msn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_hsn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_commCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_tsYn'}},{T:1,N:'xf:input',A:{style:'',id:'hid_mgntNoclsCd',ref:'data:ds_order.mgntNoclsCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkCtrtClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkReqClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkBilgClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkRealMchtClntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkDmndNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkSellLodeptCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkBilgLodeptCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkLineCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkBlNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkCvsslMgntNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkDptWrkPlCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkArvWrkPlCd'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkReterieve'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkMode'}}]}]}]}]}]})