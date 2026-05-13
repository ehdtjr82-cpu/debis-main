/*amd /ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_05b.xml 157503 9f08f87cb539545330d4fdedfe503f9c49cb4937182525e41e8a0596767126f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bulkOdrInfoDTO',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_bulkOdrInfoDTO_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urgentYn',name:'긴급여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'화주오더접수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'내부매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'내부매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'CLOSING날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'CLOSING시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발지상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착지상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'출발작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'출발작업점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'도착작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'도착작업점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'오더담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'오더담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송회사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'오더취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'오더취소시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'오더취소사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'오더삭제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'오더삭제시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'표준원가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'순매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'표준원가적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'오더접수번호..',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'출발작업장오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'도착작업장오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'철송,해송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntNm',name:'위탁실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntTelNo',name:'위탁실화주번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntNm',name:'위탁주선업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntTelNo',name:'위탁주선업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCopyMaxWt',name:'name104',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bulkOdrCommList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'품명상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'총매출액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcItemCd',name:'할인할증항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcItemNm',name:'할인할증항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDcAmt',name:'총할인할증액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'관리단위',dataType:'text',defaultValue:'KG'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclYn',name:'취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'ctrtNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'clntPicNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'ctrtStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'ctrtEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'taxnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'mgntTrgtClntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'empNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'allocRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'ctrtDistrictCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'regBranNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'클릭시 표기할 라벨용',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveCtrtClnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약 거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manifestQueryCondition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류:수입본선,수입하역구분하기위함',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'HOUSE_BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsYn',name:'TS여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billOfLading',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'mrn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'msn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'hsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'mblNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'hblNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairNo',name:'dsmbrkDeclarRepairNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'blTypCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'cargoClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'shpCoMark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'mcomLineCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineNm',name:'mcomLineNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslAgcyMark',name:'vsslAgcyMark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslAgcyNm',name:'vsslAgcyNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPortCd',name:'shipwgtPortCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bodCd',name:'bodCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'dsmbrkFrgtCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtNm',name:'dsmbrkFrgtNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'dsmbrkBondZoneCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneNm',name:'dsmbrkBondZoneNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'dsmbrkPlcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcNm',name:'dsmbrkPlcNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'mcomDsmbrkPlcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcNm',name:'mcomDsmbrkPlcNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'assgnBondZoneCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneNm',name:'assgnBondZoneNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'assgnWhouseCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'assgnWhouseNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'assgnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'assgnClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'mcomAssgnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsNm',name:'mcomAssgnClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'mfCommNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'packCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'packUnitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'totWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'totCbm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'lcNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark1',name:'speclCargoMark1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark2',name:'speclCargoMark2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark3',name:'speclCargoMark3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransCoMark',name:'bondTransCoMark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'cargoAttrCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairDtm',name:'dsmbrkDeclarRepairDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'lupDtmFrom',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'lupDtmTo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'rettlPosCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprNmCmpy',name:'shprNmCmpy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprAddr',name:'shprAddr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprTelNo',name:'shprTelNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnCrn',name:'cnsgnCrn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'cnsgnNmCmpy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr',name:'cnsgnAddr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnTelNo',name:'cnsgnTelNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlCrn',name:'ntcPlCrn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'ntcPlNmCmpy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr',name:'ntcPlAddr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlTelNo',name:'ntcPlTelNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'fioBtClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'lclYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'bulkYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doYn',name:'doYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doConfirmDt',name:'doConfirmDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doConfirmHh',name:'doConfirmHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'doNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doConfirmPicId',name:'doConfirmPicId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCvsslOrder',name:'impCvsslOrder',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impGnrlOrder',name:'impGnrlOrder',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'portcnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callsignCd',name:'callsignCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischgPortCd',name:'dischgPortCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischgPortNm',name:'dischgPortNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'arrvlportDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'vsslNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'odrCreateYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colorVal',name:'colorVal',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdBlYn',name:'stdBlYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btProcYn',name:'btProcYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioProcYn',name:'fioProcYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'changeCheck',name:'changeCheck',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcChangeCheck',name:'mcomDsmbrkPlcChangeCheck',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSetting',name:'autoSetting',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billOfLadingCommodity',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hblNo',name:'hblNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'packCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'totWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'totCbm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCopyEachWt',name:'odrCopyEachWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCopyWt',name:'odrCopyWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copyClsCd',name:'copyClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrAddWt',name:'odrAddWt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_copiedOdr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'mcomOdrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_empty',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_odrKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'odrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchGrp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_checkCtrtCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'grp_cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'cd_nm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderBillOfLading',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hblNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'mrn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'msn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'hsn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'blNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unitCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveBulkOdrInfo',encoding:'UTF-8',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderNo","key":"IN_DS1"},{"id":"ds_bulkOdrInfoDTO","key":"OUT_DS1"},{"id":"ds_bulkOdrCommList","key":"OUT_DS2"},{"id":"ds_ctrtNo","key":"OUT_DS3"},{"id":"ds_ctrtWrkPath","key":"OUT_DS4"}]',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RetrieveBulkOdrInfoCMD.do','ev:submit':'','ev:submitdone':'',target:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"OUT_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS3"},{"id":"ds_ctrtWrkPath","key":"OUT_DS4"},{"id":"ds_bulkOdrCommList","key":"OUT_DS2"}]',description:'오더정보 조회'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_registBulkOrder',encoding:'UTF-8',mediatype:'application/json',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RegistBulkOrderCMD.do',description:'동부오더 저장',ref:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"IN_DS1"},{"id":"ds_bulkOdrCommList","key":"IN_DS2"},{"id":"ds_odrCond","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_odrCond","key":"OUT_DS1"}','ev:submitdone':'scwin.sbm_registBulkOrder_submitdone'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_updateBulkOrder',encoding:'UTF-8',mediatype:'application/json',description:'동부오더 수정',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.UpdateBulkOrderCMD.do',ref:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"IN_DS1"},{"action":"modified","id":"ds_bulkOdrCommList","key":"IN_DS2"}]','ev:submitdone':'scwin.sbm_updateBulkOrder_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_delete',encoding:'UTF-8',mediatype:'application/json',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.DeleteOrderCMD.do',description:'오더 삭제',ref:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"IN_DS1"},{"id":"ds_bulkOdrCommList","key":"IN_DS2"}]','ev:submitdone':'scwin.sbm_delete_submitdone'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveCtrtClnt',encoding:'UTF-8',mediatype:'application/json',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',description:'계약거래처 - 계약번호 조회',ref:'data:json,[{"id":"ds_retrieveCtrtClnt","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrtNo","key":"OUT_DS1"}]','ev:submiterror':'','ev:submitdone':'scwin.sbm_retrieveCtrtClnt_submitdone'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_mainfestBillOfLading',encoding:'UTF-8',mediatype:'application/json',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingBulkListCMD.do',description:'BL / 선사항차별 품명 조회  TR : 수입본선벌크 오더인 경우 해당 품명별 합계정보를 설정한다.',ref:'data:json,[{"id":"ds_manifestQueryCondition","key":"IN_DS1"},{"id":"ds_billOfLading","key":"OUT_DS1"},{"id":"ds_billOfLadingCommodity","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_billOfLading","key":"OUT_DS1"},{"id":"ds_billOfLadingCommodity","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_mainfestBillOfLading_submitdone'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_odrCopy',encoding:'UTF-8',mediatype:'application/json',action:'/ncall.ds.tp.dongbusteel.odrmgnt.CopyOrderCMD.do',description:'오더 N건 copy',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_copiedOdr","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_copiedOdr","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_comSearchGrp',encoding:'UTF-8',mediatype:'application/json',action:'/cm.zz.RetrieveCodeCMD.do',ref:'data:json'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_ctrtWrkPath',encoding:'UTF-8',mediatype:'application/json',action:'/cm.zz.RetrieveComboCMD.do'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.f_retrieveOdrInfo,scwin.udc_cvsslMgntNo_onclickEvent'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : tn_202_02_05b
// 이름     : 벌크오더등록
// 경로     : NTIS/오더관리/벌크오더등록
// 작 성 자 : 황동규
// 작 업 일 : 
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
//이전값 복구용
scwin.hid_lineCd;
scwin.hid_lineNm;

// 본선번호
scwin.hid_shpCoClntNo;
scwin.hid_shpCoClntNm;

//f_cvsslMgntNo 본선번호 팝업 파라미터 전달용 ds_bulkOdrInfoDTO binding param
scwin.hid_cvsslMgntNo; //본선번호
scwin.hid_vsslCd; //선박코드
scwin.hid_vsslNm; //선박명
scwin.hid_portCd; //선사항차
scwin.hid_portcnt; //항구코드

//버튼 제어용
scwin.btn_flag; // var button ex) CLEAR UPDATE

//출발지 팝업용
scwin.hid_dptWrkPlNm;

//그리드 셀 변경 좌표 저장 콜백시 좌표를 못가져옴
scwin.gr_row;
scwin.gr_colId;
scwin.gr_colNm;
scwin.params = "";

//BL 조회 용
scwin.hid_impExpDomesticClsCd;
scwin.hid_hblNo;
scwin.hid_hsn;

//접속자 정보
scwin.login_regBranCd; //등록점소

//페이지 넘겨 받는 정보
scwin.odrNo; //오더번호
scwin.odrKndCd; //오더종류
scwin.type; //type
scwin.linkPage; //링크페이지 종류
scwin.odrCopy; //웹오더요청번호
scwin.AA; //웹오더요청번호
scwin.ctrtClntNo; //20151119 jisoo 오더리스트(벌크)에서 화주선택 후 넘어온경우

// 하드코딩 전역변수
scwin.gubun = 0; //중복 체크 flag
scwin.button = ""; //버튼 체크 flag
scwin.flag = ""; //저장시 등록, 수정 체크 flag
scwin.posnClsCd = ""; //업체구분 flag
scwin.odrSchYn = false; //오더 조회구분 flag
scwin.bizDivBulkYn = DsConstants.YN_YES; // 사업부문벌크여부  int bizDivBulkYn = DsConstants.YN_YES; 

//hidden binding param
scwin.hid_odrDcsnYn; // 오더확정여부
scwin.hid_odrCnclYn; // 오더취소여부
scwin.hid_odrDelYn; // 오더삭제여부
scwin.hid_odrCompleteYn; // 오더완료여부
scwin.hid_regBranCd; // 등록점소 - 사용자 설정 물류점소
scwin.hid_sellYn; // 매출여부
scwin.hid_transCargoClsCd; // 운송화물구분코드

scwin.hid_odrDcsnYn = DsConstants.YN_NO; // 오더확정여부
scwin.hid_odrCnclYn = DsConstants.YN_NO; // 오더취소여부
scwin.hid_odrDelYn = DsConstants.YN_NO; // 오더삭제여부
scwin.hid_odrCompleteYn = DsConstants.YN_NO; // 오더완료여부

scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.empNo = scwin.memJson.empNo;
  scwin.regId = scwin.memJson.regId;
  scwin.userId = scwin.memJson.userId;

  //gr_commList.Editable = false ;
  gr_commList.setReadOnly("grid", true);

  //버튼 및 그리드 제어
  $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_update, btn_save, btn_delete]);
  ds_manifestQueryCondition.setColumnDefaultValue("bulkYn", scwin.bizDivBulkYn);
  const codeOptions = [{
    grpCd: "TN003",
    compID: "lc_odrClassCd"
  },
  //오더구분
  {
    grpCd: "SD114",
    compID: "lc_selfClsCd"
  } //자가구분 필터 복수 후처리
  ];
  $c.data.setCommonCode($p, codeOptions);
  let a = $c.gus.gauceUtil($p, "getGridComboByUpperCdNcall", "LO102", "02", true);
  let b = $c.gus.gauceUtil($p, "getGridComboByUpperCdNcall", "LO102", "04", true);
  let c = $c.gus.gauceUtil($p, "getGridComboByUpperCdNcall", "LO102", "01", true);

  //초기화
  ds_unitCd.setJSON([{}]);
  ds_unitCd.setRowPosition(0);
  ds_unitCd.setJSON(a);
  ds_unitCd.setJSON(b, true);
  ds_unitCd.setJSON(c, true);
};
scwin.ondataload = async function () {
  scwin.f_SetDefaultData(); // udc 생성 이후 돌려야 해서 테스트

  let dltStr = "dlt_commonCodeSD114"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  $c.data.dataListFilter($p, dlt, "fltrCd1 == 'A' || fltrCd1 == 'B'"); //$c.data.dataListFilter 함수를 이용해서 필터

  ds_bulkOdrInfoDTO.removeAll();
  ds_bulkOdrInfoDTO.insertRow();
  ds_bulkOdrInfoDTO.setRowPosition(0);
  ds_ctrtNo.removeAll(); //계약번호 초기화
  ds_ctrtNo.insertRow();
  ds_ctrtNo.setRowPosition(0);
  lc_odrKndCd.setValue('D3');
  lc_selfClsCd.setValue('LI');
  lc_transCode.setValue('');
  hid_form_group.hide(); // 하단 문구 영역

  var params = $c.data.getParameter($p);
  scwin.odrNo = params.odrNo;
  scwin.linkPage = params.linkPage;
  scwin.odrCopy = params.odrCopy;
  scwin.ctrtClntNo = params.ctrtClntNo;
  if (scwin.linkPage == "odrList") {
    ed_odrNo.setValue(scwin.odrNo.trim());
    //여기에 await안걸면 조회 전에 아래 소스 전부 타버려서 수정함.
    await scwin.f_retrieveOdrInfo(); // 조회
    /* 오더 복사의 경우.. */
    if (scwin.odrCopy == "copy") {
      ds_bulkOdrInfoDTO.setJSON([{
        "odrNo": "",
        "wrkStDt": $c.date.getServerDateTime($p, "yyyyMMdd"),
        "wrkEndDt": $c.date.getServerDateTime($p, "yyyyMMdd")
      }]);

      //ds_bulkOdrCommList.ClearData();
      //ds_bulkOdrCommList.AddRow();

      for (var i = 0; i < ds_bulkOdrCommList.getRowCount(); i++) {
        ds_bulkOdrCommList.modifyRowStatus(i, 'C'); // AsIs 1은 insert 신규
      }
      scwin.cfEnableObjects([odrMainData, odrDetailData, btn_commList, btn_clear, btn_save]);
      scwin.cfDisableObjects([btn_update, btn_delete]);
      gr_commList.setReadOnly("grid", false);

      //20151119 jisoo 오더리스트(벌크)에서 copy로 넘어온 경우
      var ctrtClntNo = scwin.ctrtClntNo;
      if (ctrtClntNo != "") {
        //txa_rmk.text = "";
        txt_rmk.setValue("");
        ed_ctrtClntNo.setValue(ctrtClntNo);

        //
        // ed_ctrtClntNo killFocus시 하는 이벤트 복사해옴
        //
        scwin.cfInitObjects([ed_sellLodeptCd, ed_sellLodeptNm]); //매출부서셋팅
        await scwin.f_chkOpenCommonPopUp(ed_ctrtClntNo, ed_ctrtClntNm, 1, true); //계약처셋팅
        if (ed_ctrtClntNo.getValue().trim() == "") {
          // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
          scwin.f_clearDataSetRetrieveCtrtClnt();
          // 계약번호 (ds_ctrtNo) DataSet 초기화
          ds_ctrtNo.removeAll();
        }
        scwin.f_checkReqClntCd(); //요청처 필수 값 체크
      }
    }
  }
};

//내부거래처 ds 셋팅
scwin.setCheckCtrtCd = async function () {
  await dma_comSearchGrp.set("grpCd", "FS020");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      return;
    }
    ds_checkCtrtCd.setJSON(e.responseJSON.GAUCE);
  });
};

//-------------------------------------------------------------------------
// 계약작업경로  콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCtrtWrkPath = async function (ctrtNo) {
  //console.log('scwin.f_RetrieveCtrtWrkPath');
  //ds_ctrtWrkPath.removeAll(); 이거 하면 첫 조회시 기존 데이터가 풀린다.

  let param = {
    "sysCd": "BulkOrderEBC",
    "queryId": "retrieveContractWorkPathComboList",
    "param1": ctrtNo,
    "param2": lc_odrKndCd.getValue()
  };
  await $c.sbm.execute($p, sbm_ctrtWrkPath, param).then(function (e) {
    //console.log('sbm_ctrtWrkPath');
    //console.log(e);
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    //debugger;
    ds_ctrtWrkPath.setJSON(e.responseJSON.GAUCE);
  });
};
scwin.f_SetDefaultData = function () {
  var memInfo = $c.data.getMemInfo($p);
  scwin.login_regBranCd = memInfo.lobranCd; // 등록점소 - 사용자 설정 물류점소

  ds_bulkOdrInfoDTO.setJSON([{
    "odrDcsnYn": DsConstants.YN_NO,
    "odrCnclYn": DsConstants.YN_NO,
    "odrDelYn": DsConstants.YN_NO,
    "odrCompleteYn": DsConstants.YN_NO,
    "regBranCd": memInfo.lobranCd,
    "sellYn": DsConstants.YN_YES,
    "transCargoClsCd": DsConstants.ODR_BULK
  }]);
  ds_bulkOdrInfoDTO.setRowPosition(0);
  scwin.hid_odrDcsnYn = DsConstants.YN_NO; // 오더확정여부
  scwin.hid_odrCnclYn = DsConstants.YN_NO; // 오더취소여부
  scwin.hid_odrDelYn = DsConstants.YN_NO; // 오더삭제여부
  scwin.hid_odrCompleteYn = DsConstants.YN_NO; // 오더완료여부
  scwin.hid_regBranCd = memInfo.lobranCd; // 등록점소 - 사용자 설정 물류점소
  scwin.hid_sellYn = DsConstants.YN_YES; // 매출여부
  scwin.hid_transCargoClsCd = DsConstants.ODR_BULK; // 운송화물구분코드

  scwin.f_clearDataSetRetrieveCtrtClnt();
  lc_odrKndCd.setValue('D3'); // 오더종류..
  lc_selfClsCd.setValue('LI'); //자가구분
  scwin.setCheckCtrtCd(); //내부 거래처 조회
};

//-------------------------------------------------------------------------
// DataSet 초기화 처리 : 계약거래처 DataSet 을 초기화 한다.
//-------------------------------------------------------------------------
scwin.f_clearDataSetRetrieveCtrtClnt = function () {
  // 계약거래처 DataSet 을 초기화
  ds_retrieveCtrtClnt.removeAll();
  //f_dsRetrieveCtrtClntHeader();

  // 계약거래처 DataSet 기본값 설정
  ds_retrieveCtrtClnt.insertRow(0);
  ds_retrieveCtrtClnt.setCellData(0, "ctrtClntNo", "");
  ds_retrieveCtrtClnt.setCellData(0, "bizDivCntrYn", DsConstants.YN_NO);
  ds_retrieveCtrtClnt.setCellData(0, "bizDivBulkYn", DsConstants.YN_YES);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchField);
  f_SetDefaultData();
};

//거래처 팝업
scwin.udc_ctrtClntNo_onclickEvent = function (pWinCloseTF) {
  //f_openCommonPopUp(disGubun, pCode, pName, pClose, pAllSearch);
  scwin.f_openCommonPopUp(1, ed_ctrtClntNo.getValue(), ed_ctrtClntNm.getValue(), 'F', 'F');
};

////////////////////////////////////////////////////////
// 거래처 공통 팝업 콜백
////////////////////////////////////////////////////////
scwin.udc_ctrtClntNo_callBackFunc = async function (rtnList) {
  //console.log('계약처');
  //console.log(rtnList);

  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ed_ctrtClntNo.setValue(rtnList[0]); //계약 거래처코드
      ed_ctrtClntNm.setValue(rtnList[1]); //계약 거래처명
      ed_ctrtClntNm.options.hidVal = rtnList[1]; //계약 거래처명

      if (ed_ctrtClntNo.getValue() == "124994") {
        ed_sellLodeptCd.setValue("4A5");
        ed_bilgLodeptCd.setValue("4A5");
        await scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd, ed_sellLodeptNm, 2, true);
        await scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 3, true);
      }
      //20160126 화물위탁증
      var strToken = rtnList[9].split("?");
      //tb_zz510.sell_clnt_cls_cd:[01,02,04] 화주,선사,포워더--> 실화주에 입력
      //tb_zz510.sell_clnt_cls_cd:[03] 운송사 --> 주선사업자에 입력
      if (rtnList[2] == '01' || rtnList[2] == '02' || rtnList[2] == '04') {
        ed_trnsRealMchtClntNm.setValue(rtnList[1]);
        ed_trnsRealMchtClntTelNo.setValue(strToken[1]);
      } else if (rtnList[2] == '03') {
        ed_trnsCnsgMchtClntNm.setValue(rtnList[1]);
        ed_trnsCnsgMchtClntTelNo.setValue(strToken[1]);
      }

      // 계약 거래처 - 계약정보 조회
      // 1. 계약번호
      // 2. 계약번호 별 - 요청거래처, 실화주, 청구거래처 조회
      //f_clearClntDataSet();	// DataSet 초기화
      //ds_retrieveCtrtClnt.NameValue(ds_retrieveCtrtClnt.RowPosition,"odrKndCd") = lc_odrKndCd.ValueOfIndex("code", lc_odrKndCd.Index);
      //tr_retrieveCtrtClnt.post();
      ds_retrieveCtrtClnt.setCellData(0, "odrKndCd", lc_odrKndCd.getValue());
      ds_retrieveCtrtClnt.setCellData(0, "ctrtClntNo", rtnList[0]);
      $c.sbm.execute($p, sbm_retrieveCtrtClnt);
    } else {
      // rtnList[0].trim() == "N/A"
      ed_ctrtClntNo.setValue(scwin.hid_chkCtrtClntNo);
      ed_ctrtClntNm.setValue(ed_ctrtClntNm.options.hidVal);
    }
  } else {
    ed_ctrtClntNo.setValue(""); //계약 거래처코드
    ed_ctrtClntNm.setValue(""); //계약 거래처명
    ed_ctrtClntNm.options.hidVal = ""; //계약 거래처명

    scwin.hid_chkCtrtClntNo = ""; //계약 거래처코드
    scwin.hid_repClntNo = ""; // 대표 거래처코드

    ds_retrieveCtrtClnt.setCellData(0, "odrKndCd", lc_odrKndCd.getValue());
    $c.sbm.execute($p, sbm_retrieveCtrtClnt);

    // 계약 거래처 - 계약정보 조회
    //ds_retrieveCtrtClnt.NameValue(ds_retrieveCtrtClnt.RowPosition,"odrKndCd") = lc_odrKndCd.ValueOfIndex("code", lc_odrKndCd.Index);
    //tr_retrieveCtrtClnt.post();
  }
};

//매출부서
scwin.udc_sellLodeptCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sellLodeptCd, ed_sellLodeptNm);
};

//청구부서
scwin.udc_bilgLodeptCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
};

//Line 선사
scwin.udc_lineNm_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ed_lineCd.setValue(rtnList[0]); //LINE 코드
      ed_lineNm.setValue(rtnList[1]); //LINE 명
      scwin.hid_lineCd = rtnList[0];
      ed_shpCoClntNm.setValue(rtnList[5]);
      ds_bulkOdrInfoDTO.setCellData(0, "shpCoClntNo", rtnList[4]);
      ds_bulkOdrInfoDTO.setCellData(0, "shpCoClntNm", rtnList[5]);
    } else {
      ed_lineCd.setValue(scwin.hid_lineCd);
      ed_shpCoClntNm.setValue(scwin.hid_shpCoClntNm);
    }
  } else {
    ed_lineCd.setValue(""); //LINE 코드
    scwin.hid_lineCd = ""; //LINE 코드
    ed_lineNm.setValue(""); //LINE 명
    scwin.hid_lineNm = ""; //LINE 명
    scwin.hid_shpCoClntNo = ""; //선사코드
    ed_shpCoClntNm.setValue(""); //선사명
    scwin.hid_shpCoClntNm = ""; //선사명
  }
};

//출발처 팝업 콜백
scwin.udc_dptWrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptDtl);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //hid_dptWrkLobranCd.value = rtnList[4];	//작업점소
      scwin.f_gridValueSet('dptWrkPlCd');
      if (rtnList[6].length == 5) {
        ed_dptZip.setValue(rtnList[6]); //우편번호
        scwin.f_openZipPopUp(1, 'T');
      }
    }
    ed_onPicNm.setValue(rtnList[8]);
    ed_onPicTelNo.setValue(rtnList[9]);
  } else {
    ed_dptZip.setValue("");
    ed_dptDtl.setvalue("");
    scwin.f_gridValueSet('dptWrkPlCd');
  }
};

//도착지 팝업 콜백
scwin.udc_arvWrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvDtl);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //hid_dptWrkLobranCd.value = rtnList[4];	//작업점소
      scwin.f_gridValueSet('arvWrkPlCd');
      if (rtnList[6].length == 5) {
        ed_arvZip.setValue(rtnList[6]); //우편번호
        scwin.f_openZipPopUp(2, 'T');
      }
    }
    ed_offPicNm.setValue(rtnList[8]);
    ed_offPicTelNo.setValue(rtnList[9]);
  } else {
    ed_arvZip.setValue("");
    ed_arvDtl.setvalue("");
    scwin.f_gridValueSet('arvWrkPlCd');
  }
};

//오더기본정보의 출발/도착정보가 변경되면 오더상세정보도 변경
scwin.f_gridValueSet = function (gubun) {
  for (var i = 0; i < ds_bulkOdrCommList.getTotalRow(); i++) {
    ds_bulkOdrCommList.setCellData(i, gubun, ds_bulkOdrInfoDTO.getCellData(0, gubun)); // 시간 관련
    if (gubun == 'dptWrkPlCd') {
      ds_bulkOdrCommList.setCellData(i, 'dptWrkPlNm', ds_bulkOdrInfoDTO.getCellData(0, 'dptDtl')); //출발지 AsIs 이상함 이거 cd 아님
    }
    if (gubun == 'arvWrkPlCd') {
      ds_bulkOdrCommList.setCellData(i, 'arvWrkPlNm', ds_bulkOdrInfoDTO.getCellData(0, 'arvDtl')); //도착지
    }
  }
};

// 조회
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieveOdrInfo();
};

//-------------------------------------------------------------------------
// 오더정보  조회
//-------------------------------------------------------------------------
scwin.f_retrieveOdrInfo = async function (e) {
  if (ed_odrNo.getValue().trim() == null || ed_odrNo.getValue().trim() == "") {
    await $c.win.alert($p, "검색하실 오더번호를 입력해주세요");
    ed_odrNo.focus();
    return;
  }
  var res = await $c.sbm.execute($p, sbm_retrieveBulkOdrInfo);

  //console.log(res);
  scwin.sbm_retrieveBulkOdrInfo_submitdoneFnc(res);
};

// 조회 후 처리 <script language=JavaScript for=tr_retrieveBulkOdrInfo event=OnSuccess()>
// copy로 인해 submitdone을 빼고 변수 처리
scwin.sbm_retrieveBulkOdrInfo_submitdoneFnc = async function (e) {
  //console.log(e);

  if (e.responseJSON.OUT_DS1 == undefined || e.responseJSON.OUT_DS1.length < 1) {
    if (e.responseJSON.OUT_DS1 != undefined) {
      await $c.win.alert($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다. 문구 출력

      ed_odrNo.setValue("");

      // 버튼 활성화 cfEnableObjects
      $c.gus.cfEnableObjects($p, [btn_clear]); // 신규 버튼 활성 btn_clear
      $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_update, btn_save, btn_delete]);
      scwin.odrSchYn = false; //오더 조회구분 flag
    } else {
      //Server에서 오류나면 첫 로딩때 타야 하는 오류 안타서 여기에도 추가.
      if (scwin.odrCopy == "copy") {
        ds_bulkOdrInfoDTO.setJSON([{
          "odrNo": "",
          "wrkStDt": $c.date.getServerDateTime($p, "yyyyMMdd"),
          "wrkEndDt": $c.date.getServerDateTime($p, "yyyyMMdd")
        }]);

        //ds_bulkOdrCommList.ClearData();
        //ds_bulkOdrCommList.AddRow();

        for (var i = 0; i < ds_bulkOdrCommList.getRowCount(); i++) {
          ds_bulkOdrCommList.modifyRowStatus(i, 'C'); // AsIs 1은 insert 신규
        }
        $c.gus.cfEnableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_clear, btn_save]);
        $c.gus.cfDisableObjects($p, [btn_update, btn_delete]);
        gr_commList.setReadOnly("grid", false);

        //20151119 jisoo 오더리스트(벌크)에서 copy로 넘어온 경우
        var ctrtClntNo = scwin.ctrtClntNo;
        if (ctrtClntNo != "") {
          //txa_rmk.text = "";
          txt_rmk.setValue("");
          ed_ctrtClntNo.setValue(ctrtClntNo);

          //
          // ed_ctrtClntNo killFocus시 하는 이벤트 복사해옴
          //
          $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]); //매출부서셋팅
          await scwin.f_chkOpenCommonPopUp(ed_ctrtClntNo, ed_ctrtClntNm, 1, true); //계약처셋팅
          if (ed_ctrtClntNo.getValue().trim() == "") {
            // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
            scwin.f_clearDataSetRetrieveCtrtClnt();
            // 계약번호 (ds_ctrtNo) DataSet 초기화
            ds_ctrtNo.removeAll();
          }
          scwin.f_checkReqClntCd(); //요청처 필수 값 체크
        }
      }
    }
  } else {
    $c.gus.cfEnableObjects($p, [btn_clear, btn_update, btn_delete]);
    $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_save]);
    scwin.odrSchYn = true; //오더 조회구분 flag
    gr_commList.setReadOnly("grid", true);
    ds_bulkOdrInfoDTO.setRowPosition(0);
    var rowCnt = ds_bulkOdrCommList.getTotalRow();
    totalRows.setValue(rowCnt);

    // 조회 후 계약 번호 존재시 라벨 생성 % (% % %)
    if (ds_bulkOdrInfoDTO.getCellData(0, 'ctrtNo')) {
      scwin.ds_ctrtNo_setLabelInfo();
    }
    lc_odrKndCd.setValue(ds_bulkOdrInfoDTO.getCellData(0, 'odrKndCd'));
    ed_copyWt.setValue(ds_bulkOdrCommList.getCellData(0, "grossWt"));
    ed_copyCnt.setValue("0");
    ed_copyKg.setValue(ds_bulkOdrInfoDTO.getCellData(0, "odrCopyMaxWt"));
    ed_addKg.setValue("0");
    hid_form_group.show(""); // 하단 문구 영역

    gr_commList.setFocusedCell(0, 0, false);

    // 필수 값 수정시 기존데이터 변경 방지 
    for (var idx = 0; idx < ds_bulkOdrCommList.getRowCount(); idx++) {
      gr_commList.setReadOnly("cell", idx, "ctrtWrkPathSeq", true);
    }
  }
};
scwin.sbm_updateBulkOrder_submitdone = async function (e) {
  if (e.responseJSON) {
    if (e.responseJSON.resultDataSet[0].Code != '0') {} else {
      await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      scwin.f_retrieveOdrInfo();
    }
  }
};

//청구부서 팝업
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'T', 'F');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  var pValue = "";
  var districtGrpCd = ""; // 계약권역 구분코드
  if (ds_ctrtNo.CountRow > 0) districtGrpCd = ds_ctrtNo.NameValue(ds_ctrtNo.RowPosition, "ctrtDistrictCd");
  switch (disGubun) {
    case 1:
      pWhere = ",CTRT";
      // 계약 거래처코드팝업
      rtnList =
      //cfCommonPopUp('retrieveClntInfo_tpro'	// XML상의 SELECT ID
      await udc_ctrtClntNo.cfCommonPopUp(scwin.udc_ctrtClntNo_callBackFunc // 콜백 함수
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
      , "계약 거래처,거래처코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 2:
      // 매출 부서코드팝업
      pValue = "T,J,,,,T,1"; // 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)

      rtnList = udc_sellLodeptCd.cfCommonPopUp(scwin.udc_sellLodeptCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pValue // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "매출부서,부서코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 3:
      // 청구 부서코드팝업
      pValue = "T,J,,,,,,1"; // 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
      //rtnList = cfCommonPopUp('retrieveLogisDeptInfo_tpro'	// XML상의 SELECT ID
      rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pValue // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "청구부서,부서코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 4:
      // 본선관리번호
      if (lc_odrKndCd.getValue() == "B4") {
        pWhere = "E";
      } else {
        pWhere = "I";
      }

      //pWhere = lc_odrKndCd.ValueOfIndex("fltrCd2", lc_odrKndCd.Index); 	// 수출입구분코드 : SD060 - 수입(I), 수출(E)
      var arrParam = new Array(2);
      arrParam[0] = pCode; // 본선관리번호
      arrParam[1] = pWhere; // 수출입구분코드
      //rtnList = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업',arrParam,"dialogWidth:900px; dialogHeight:400px; status:No");

      // 팝업 옵션 설정
      options = {
        id: "cvsslMgntNoPop",
        type: "browserPopup",
        popupName: "본선관리번호검색팝업",
        width: 900,
        height: 400
      };
      let paramObj = {
        "paramData": arrParam
      };
      rtnList = $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, paramObj);

      /******************
      *	본선관리번호 Return List
      ** rtnValues[0] //본선관리번호
      * rtnValues[1] //선박코드
      ** rtnValues[2] //선박명
      * rtnValues[3] //마감일자
      * rtnValues[4] //마감시간
      * rtnValues[5] //도착(입항)일자
      * rtnValues[6] //도착(입항)시간
      * rtnValues[7] //출발(출항)일자
      * rtnValues[8] //출발(출항)시간
      ** rtnValues[9] //선사항차
      * rtnValues[10] //항로
      * rtnValues[11] //항구코드
      * rtnValues[12] //부두코드
      * rtnValues[13] //부두코드명
      ** rtnValues[14] //LINE 코드
      ** 정도만 넘어오고 있음
      ******************/

      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          if (lc_odrKndCd.getValue() != DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
            // 벌크 수출 일반 오더 가 아닌경우
            // 본선관리번호 변경시 품명 , B/L 정보 삭제
            //f_clearBillOfLadingCommodity();
          }
          ed_cvsslMgntNo.setValue(rtnList[0]); //본선관리번호
          //hid_vsslCd.Text			= rtnList[1]; //선박코드
          //hid_vsslNm.Text			= rtnList[2]; //선박명
          //hid_portcnt.Text		= rtnList[9]; //선사항차
          //hid_portCd.Text			= rtnList[11]; //항구코드

          if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
            ed_lineCd.setValue(""); //Line코드
            ed_shpCoClntNm.setValue("");
            scwin.hid_shpCoClntNo = "";
          } else {
            ed_lineCd.setValue(rtnList[14]); //Line코드
          }

          //Line명과 선사거래처 가져오기
          //if(!cfIsNull(ed_lineCd.Text))	f_openCommonPopUp(5, ed_lineCd.Text, "", "T", "F")

          // 오더종류별 설정
          if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
            // 수입일반오더인 경우
            ed_closeDt.setValue(rtnList[5]); //입항일자
            ed_closeHh.setValue(rtnList[6]); //입항시간
          }
        }
      } else {
        if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
          // 벌크 수출 일반 오더인 경우
          $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, hid_vsslCd, hid_portcnt, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
          $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
          hid_portCd.value = "";
        } else {
          // 벌크 수출 일반 오더 가 아닌경우
          $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_closeDt, ed_closeHh, ica_wrkStDt, ed_wrkStHh, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
          //hid_vsslCd, hid_portcnt,

          $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
          hid_portCd.value = "";
        }
      }

      // 수입본선, 벌크 부두간 TS 오더인 경우선박코드,항차,항구 정보로 적하목록 BL 품명 정보를 조회한다.
      //f_chkBlList();
      break;
    case 5:
      // LINE 코드팝업
      rtnList =
      //cfCommonPopUp('retrieveLineInfoList_tpro'	// XML상의 SELECT ID
      udc_lineNm.cfCommonPopUp(scwin.udc_lineNm_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "LINE,LINE코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 6:
      // 출발작업장 코드팝업
      pWhere = ",,,,,,," + ed_ctrtClntNo.getValue();
      rtnList =
      //cfCommonPopUp('retrieveWrkPlInfo_tpro1'	// XML상의 SELECT ID
      udc_dptWrkPlCd.cfCommonPopUp(scwin.udc_dptWrkPlCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "출발지,출발지코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 7:
      // 도착작업장 코드팝업
      pWhere = ",,,,,,," + ed_ctrtClntNo.Text;
      //rtnList = cfCommonPopUp('retrieveWrkPlInfo_tpro1'	// XML상의 SELECT ID
      udc_arvWrkPlCd.cfCommonPopUp(scwin.udc_arvWrkPlCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "도착지,도착지코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 8:
      //pWhere = ",";
      // 요청 거래처코드팝업
      rtnList =
      //cfCommonPopUp('retrieveClntInfo_tpro' // XML상의 SELECT ID
      udc_reqClntNo.cfCommonPopUp(scwin.udc_reqClntNo_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "요청 거래처,요청처코드/명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    default:
      break;
  }
};
scwin.btn_ctrtNo_onclick = async function (e) {
  let data = {
    "paramTitle": "계약번호조회",
    "ds_ctrtNo": ds_ctrtNo,
    "indexCtrtNo": lc_ctrtNo.getValue(),
    "hid_bilgClntNo": hid_bilgClntNo.getValue(),
    "hid_bilgClntNm": hid_bilgClntNm.getValue(),
    "hid_realMchtClntNo": hid_realMchtClntNm.getValue()
  };
  let opts = {
    id: "popup",
    popupName: "계약번호조회"
  };
  data.indexCtrtNo = lc_ctrtNo.getValue();
  rtnList = await $c.win.openPopup($p, "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_02p.xml", opts, data);
  if (rtnList == null) return;
  lc_ctrtNo.setSelectedIndex(rtnList[0]);
  hid_bilgClntNo.setValue(rtnList[2]); //청구처
  hid_realMchtClntNo.setValue(rtnList[3]); //실화주
  hid_bilgClntNm.setValue(rtnList[5]); //청구처명
  hid_realMchtClntNm.setValue(rtnList[6]); //실화주명
};

// 본선관리번호 팝업 호출
scwin.udc_cvsslMgntNo_onclickEvent = async function (e) {
  // 본선관리번호
  if (lc_odrKndCd.getValue() == "B4") pWhere = "E";else pWhere = "I";
  //pWhere = lc_odrKndCd.ValueOfIndex("fltrCd2", lc_odrKndCd.Index); 	// 수출입구분코드 : SD060 - 수입(I), 수출(E)
  var arrParam = new Array(2);
  arrParam[0] = ed_cvsslMgntNo.getValue(); // 본선관리번호
  arrParam[1] = pWhere; // 수출입구분코드

  // 팝업 옵션 설정
  options = {
    id: "cvsslMgntNoPop",
    type: "browserPopup",
    popupName: "본선관리번호검색팝업",
    width: 1200,
    height: 600
  };
  let paramObj = {
    "paramData": arrParam
  };
  rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, paramObj);

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
      if (lc_odrKndCd.getValue() != DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
        // 벌크 수출 일반 오더 가 아닌경우
        // 본선관리번호 변경시 품명 , B/L 정보 삭제
        //f_clearBillOfLadingCommodity();
      }
      ed_cvsslMgntNo.setValue(rtnList[0]); //본선관리번호
      //ed_cvsslMgntNo.hidVal	= rtnList[0]; //본선관리번호
      scwin.hid_vsslCd = rtnList[1]; //선박코드
      scwin.hid_vsslNm = rtnList[2]; //선박명
      scwin.hid_portcnt = rtnList[9]; //선사항차
      scwin.hid_portCd = rtnList[11]; //항구코드

      if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
        // B2 일때
        ed_lineCd.setValue(""); //Line코드
        //ed_lineCd.hidVal		= ""; //Line코드
        //ed_shpCoClntNm.value="";
        //hid_shpCoClntNo.value="";
      } else {
        ed_lineCd.setValue(rtnList[14]);
      }

      //Line명과 선사거래처 가져오기
      //if(!cfIsNull(ed_lineCd.Text))	f_openCommonPopUp(5, ed_lineCd.Text, "", "T", "F")

      // 오더종류별 설정
      if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
        // 수입일반오더인 경우
        ed_closeDt.setValue(rtnList[5]); //입항일자
        ed_closeHh.setValue(rtnList[6]); //입항시간
      }
    }
  } else {
    if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR) {
      // 벌크 수출 일반 오더인 경우
      $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, hid_vsslCd, hid_portcnt, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
      $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
      scwin.hid_portCd = "";
    } else {
      // 벌크 수출 일반 오더 가 아닌경우
      $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, hid_vsslCd, hid_portcnt, ed_closeDt, ed_closeHh, ica_wrkStDt, ed_wrkStHh, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
      $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
      scwin.hid_portCd = "";
    }
  }
  // 수입본선, 벌크 부두간 TS 오더인 경우선박코드,항차,항구 정보로 적하목록 BL 품명 정보를 조회한다.
  //f_chkBlList();
};
scwin.udc_cvsslMgntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_cvsslMgntNo, ed_cvsslMgntNm, 4, true);
};

//본선번호 검색
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_cvsslMgntNo();
};
scwin.f_cvsslMgntNo = async function () {
  var rtnList = new Array();
  arrParam = ds_bulkOdrInfoDTO;
  var cvsslmgntNo = ed_cvsslMgntNo.getValue();
  var vsslCd = scwin.hid_vsslCd;
  var vsslNm = scwin.hid_vsslNm.replace(' ', '');
  var portcnt = scwin.hid_portcnt;
  if (lc_odrKndCd.getValue() == "B4") {
    pWhere = "E";
  } else {
    pWhere = "I";
  }

  // 팝업 옵션 설정
  options = {
    id: "cvsslMgntNoPop",
    type: "browserPopup",
    popupName: "본선관리번호검색팝업",
    width: 1200,
    height: 600
  };
  let paramObj = {
    "paramData": arrParam
  };

  // rtnList =  await $c.win.openPopup("/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, paramObj);  
  // 2026 01 24 해당 화면 없음?!!!
  rtnList = await window.showModalDialog('/tn/sd/odrmgnt/bulkodrreg/tn_202_02_03p.jsp?paramTitle=본선번호팝업&cvsslmgntNo=' + cvsslmgntNo + '&vsslCd=' + vsslCd + '&vsslNm=' + vsslNm + '&portcnt=' + portcnt + '&pWhere=' + pWhere, arrParam, "dialogWidth:500px; dialogHeight:300px; status:No");
  ed_cvsslMgntNo.setValue(rtnList[0]); //본선번호
  scwin.hid_vsslCd = rtnList[1]; //선박코드
  scwin.hid_vsslNm = rtnList[2]; //선박명
  scwin.hid_portcnt = rtnList[3]; //선사항차
};

// 설명 : 매출부서, 청구부서 세팅
// 처리규칙 : 오더등록자의 등록점소의 첫째 둘째자리 + 부서종류
// 1.벌크 장치장 셔틀(B5) 	: 매출부서 - 운송(2),	청구부서 - 운송(2)
// 2.벌크 오더 (B1, B2, B3, B4, BS, BT, BW)		: 매출부서 - 미지정,	청구부서 - 하역(4)
// 3.내수 오더	(D1, D2, D3, D4, D5, D6, D7)	: 매출부서 - 운송(2),	청구부서 - 운송(2)
scwin.f_setSellAndBilgDept = function (odrKndCd) {
  // DateSet 정보를 초기화한다.
  //odrKndCd 오더 종류
  //var deptCd1 =  DCheckIf.isNull(loginDTO.getLobranCd())? "" : loginDTO.getLobranCd(); //등록점소 - 사용자 설정 물류점소
  scwin.memJson = $c.data.getMemInfo($p);
  var deptCd1 = scwin.memJson.lobranCd ? scwin.memJson.lobranCd : ""; //등록점소 - 사용자 설정 물류점소
  var sellLodeptCd = ""; // 매출부서 코드
  var bilgLodeptCd = ""; // 청구부서 코드
  if (deptCd1.length > 2) {
    deptCd1 = deptCd1.substr(0, 2);
  } else {
    return;
  }
  // 매출부서, 청구부서 	값 초기화
  //cfInitObjects([ed_sellLodeptCd, ed_sellLodeptNm, ed_bilgLodeptCd, ed_sellLodeptNm]);
  //$c.gus.cfInitObjects([ed_sellLodeptCd, ed_sellLodeptNm, ed_bilgLodeptCd, ed_sellLodeptNm]);
  //cfInitHidVal([ed_sellLodeptCd, ed_sellLodeptNm, ed_bilgLodeptCd, ed_sellLodeptNm]);
  //$c.gus.cfInitHidVal([ed_sellLodeptCd, ed_sellLodeptNm, ed_bilgLodeptCd, ed_sellLodeptNm]);

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
      sellLodeptCd = deptCd1 + "2"; // 운송
      bilgLodeptCd = deptCd1 + "1"; // 관리..
      break;
    default:
      sellLodeptCd = deptCd1 + "2"; // 운송
      bilgLodeptCd = deptCd1 + "1"; // 관리
      break;
  }

  //매출부서 세팅
  if (sellLodeptCd.length == 3) {
    //ed_sellLodeptCd.Text = sellLodeptCd;
    ed_sellLodeptCd.setValue(sellLodeptCd);
    scwin.f_openCommonPopUp(2, ed_sellLodeptCd.getValue(), ed_sellLodeptNm.getValue(), 'T', 'F');
  }

  //청구부서 세팅
  if (bilgLodeptCd.length == 3) {
    //ed_bilgLodeptCd.Text = bilgLodeptCd;
    ed_bilgLodeptCd.setValue(bilgLodeptCd);
    scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'T', 'F');
  }
};

//Line/선사 팝업
scwin.udc_lineNm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};

//매출부서
scwin.udc_sellLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_sellLodeptCd.getValue(), ed_sellLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_sellLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_sellLodeptCd.getValue(), ed_sellLodeptNm.getValue(), 'T', 'F');
};

// 출발지 팝업
scwin.udc_dptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_dptWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), 'T', 'F');
};

// 도착지 팝업
scwin.udc_arvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_arvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), 'T', 'F');
};

//우편번호 자동설정용
scwin.f_openZipPopUp = function (gubun, pClose) {
  var vZip = "";
  var vTitle = "우편번호, 우편번호, 동이름";
  if (gubun == 1) {
    vZip = ed_dptZip.getValue(); //출발지 우편번호
    udc_hidZipCode.cfCommonPopUp(scwin.udc_hidZipCode_callBackFunc, vZip, '', pClose, null, vTitle, null, null, null, null, null, null, null, null, null, null, null);
  } else if (gubun == 2) {
    vZip = ed_arvZip.getValue(); //도착지 우편번호
    udc_hidArvZipCode.cfCommonPopUp(scwin.udc_hidArvZipCode_callBackFunc, vZip, '', pClose, null, vTitle, null, null, null, null, null, null, null, null, null, null, null);
  }
};
scwin.udc_hidZipCode_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptZip, ed_hidDptDtl);
  ed_dptDtl.focus();
};
scwin.udc_hidArvZipCode_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvZip, ed_hidDptDtl);
  ed_arvDtl.focus();
};
scwin.f_openZipPopUpNew = async function (gubun, pClose) {
  var rtnList = new Array();
  let options = {
    id: "zipPop",
    type: "browserPopup",
    popupName: "주소찾기",
    width: 735,
    height: 400
  };
  let paramObj = {};
  let popupResult = await $c.win.openPopup($p, "/ui/cm/zz/zipcodePopup.xml", options, paramObj);

  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
    if (rtnList[0] == "N/A") return; //
    if (gubun == 1) {
      ed_dptZip.setValue(popupResult.zip); //출발지 우편번호
      ed_dptDtl.focus();
    } else if (gubun == 2) {
      ed_arvZip.setValue(popupResult.zip); //도착지 우편번호
      ed_arvDtl.focus();
    }
  } else {
    if (gubun == 1) {
      ed_dptZip.setValue(""); //출발지 우편번호
    } else if (gubun == 2) {
      ed_arvZip.setValue(""); //도착지 우편번호
    }
  }
};

//출발지 주소
scwin.btn_dptZipPopup_onclick = function (e) {
  scwin.f_openZipPopUpNew(1, 'F');
};

//도착지 주소
scwin.btn_arvZipPopup_onclick = function (e) {
  scwin.f_openZipPopUpNew(2, 'F');
};

//////////////////// 그리드

//-------------------------------------------------------------------------
// 행 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let rowLen = ds_bulkOdrCommList.getTotalRow();

  // 최초 행이 아니면 이전행 복사
  if (rowLen > 0) {
    var maxIdx = ds_bulkOdrCommList.getRowCount();
    var temp = ds_bulkOdrCommList.getRowJSON(maxIdx - 1);
    ds_bulkOdrCommList.setRowJSON(maxIdx, temp);
  } else {
    ds_bulkOdrCommList.insertRow();
  }
  gr_commList.setFocusedCell(ds_bulkOdrCommList.getTotalRow() - 1, 0);
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  let targetIdx = gr_commList.getFocusedRowIndex();
  if (ds_bulkOdrCommList.getRowStatus(targetIdx) == "C") {
    ds_bulkOdrCommList.removeRow(targetIdx);
  } else {
    ds_bulkOdrCommList.deleteRow(targetIdx);
  }
};
scwin.f_CancelRow = function () {
  let nowRow = gr_commList.getFocusedRowIndex();
  let sts = ds_bulkOdrCommList.getRowStatus(nowRow);
  if (nowRow != null) {
    if (scwin.btn_flag == "UPDATE") {
      if (sts == "C") {
        ds_bulkOdrCommList.removeRow(nowRow);
        gr_commList.setFocusedCell(nowRow, 0, false);
        if (nowRow >= ds_bulkOdrCommList.getTotalRow()) {
          gr_commList.setFocusedCell(0, 0, false);
        }
      } else {
        ds_bulkOdrCommList.undoRow(nowRow);
      }
    } else {
      ds_bulkOdrCommList.removeRow(nowRow);
      if (nowRow >= ds_bulkOdrCommList.getTotalRow()) {
        gr_commList.setFocusedCell(0, 0, false);
      }
    }
  }
};

//////////////////////////////////////////////////////////////////////////////////
// 그리드 영역
//////////////////////////////////////////////////////////////////////////////////

//BL번호 검색
scwin.gr_blNo_onPopup = function (row, col, data) {
  scwin.f_openCommPopUpGrid(1, row, ds_bulkOdrCommList.getCellData(row, "blNo"), '', 'F', 'F');
};

//품명코드 검색
scwin.gr_commCd_onPopup = function (row, col, data) {
  scwin.f_openPopUpGrid(ds_bulkOdrCommList, row, "commCd", "commNm", 1, "F", "F");
};

//출발지 검색
scwin.gr_dptWrkPlNm_onPopup = function (row, col, data) {
  scwin.f_openPopUpGrid(ds_bulkOdrCommList, row, "dptWrkPlCd", "dptWrkPlNm", 2, "F", "F");
};

//도착지 검색
scwin.gr_arvWrkPlNm_onPopup = function (row, col, data) {
  scwin.f_openPopUpGrid(ds_bulkOdrCommList, row, "arvWrkPlCd", "arvWrkPlNm", 3, "T", "F");
};

// 그리드 팝업 형식 변경 값들
scwin.f_openPopUpGrid = function (ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = null;
  var pWhere = ",,,T3," + ed_ctrtClntNo.getValue();
  var pNoDataCloseTF = null;
  pCode = ds.getCellData(row, cdColid);
  scwin.gr_row = row;
  scwin.gr_colId = cdColid;
  scwin.gr_colNm = nmColid;
  if (gubun == 1) {
    pSelectID = "retrieveCommInfo_tpro";
    pWhere = ",,,T3,ZZZZ"; // 거래처 상관없도록 수정
    pWtitleSearch = "오더품명,품명 코드/명";
    udc_gr_commCd.cfCommonPopUp(scwin.udc_gr_commCdm_callBackFunc, pCode,
    //pCode
    pName,
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
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch,
    //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    pNoDataCloseTF,
    //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
    null);
  } else if (gubun == 2) {
    pCode = ds.getCellData(row, nmColid);
    pWhere = "";
    pSelectID = "retrieveWrkPlInfo_tpro";
    pWtitleSearch = "출발지,출발지코드/명";
    udc_gr_dptWrkPlCd.cfCommonPopUp(scwin.udc_gr_commCdm_callBackFunc, pCode,
    //pCode
    pName,
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
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch,
    //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    pNoDataCloseTF,
    //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
    null);
  } else if (gubun == 3) {
    pCode = ds.getCellData(row, nmColid);
    pWhere = "";
    pSelectID = "retrieveWrkPlInfo_tpro";
    pWtitleSearch = "도착지,도착지코드/명";
    udc_gr_arvWrkPlCd.cfCommonPopUp(scwin.udc_gr_commCdm_callBackFunc, pCode,
    //pCode
    pName,
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
    //pExistTF - 중복체크여부	("F")
    pAllSearchTF,
    //pAllSearchTF - 전체검색허용여부	("F")
    pWtitleSearch,
    //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    pNoDataCloseTF,
    //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
    null);
  }
};

//-------------------------------------------------------------------------
// BL번호 조회 Popup 처리 : 그리드에서 입력된 코드정보로 BL조회
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var v_clntNo = ""; //품명 팝업시 거래처와 상관없이 될 수 있도록 수정
  var v_clntNm = ed_ctrtClntNm.getValue(); // 계약거래처 명
  var pWhere = ",,,T3," + v_clntNo; // 거래처별 품명 조회
  var districtGrpCd = ""; // 계약권역 구분코드
  if (ds_ctrtNo.getTotalRow() > 0) {
    districtGrpCd = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtDistrictCd");
  }
  switch (disGubun) {
    case 1:
      // BL 번호 팝업
      var arrParam = new Array(10);
      arrParam[0] = pCode; //bl번호	
      arrParam[1] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
      arrParam[2] = ""; //lc_assgnClsCd.ValueOfIndex("cd",lc_assgnClsCd.Index); //배정구분코드
      arrParam[3] = scwin.hid_impExpDomesticClsCd; //bulkYn : 수출입구분코드
      arrParam[4] = DsConstants.YN_YES; //bizDivBulkYn  bulkYn : 0-컨테이너, 1-벌크
      arrParam[5] = ed_lineCd.getValue().trim(); //LINE 코드
      arrParam[6] = DsConstants.YN_NO; // TS 오더가 아닌경우 (TS 여부 : 0)
      arrParam[7] = "F"; // 다중 선택
      arrParam[8] = "E"; // Full / Empty 선택조건 (F: Full 만선택, E : 모두 선택)
      arrParam[9] = "DsConstants.FB";
      ; // FIO/BT 처리구분 : FIO_BT 여부 (FO : FIO_PROC_YN = 1, BT : BT_PROC_YN = 1, FB :  FIO_PROC_YN= 1 or BT_PROC_YN = 1)
      mulitRowSelYn = "F";
      let opts = {
        id: "popup",
        popupName: "BL조회",
        width: 1200,
        height: 800,
        status: "No"
      };
      let paramObj = {
        "data": arrParam
      };
      rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml", opts, paramObj);
      /*
      arrRtnVal[0] //mrn
      arrRtnVal[1] //msn
      arrRtnVal[2] //hsn
      arrRtnVal[3] //bl번호
      arrRtnVal[4] //당사Line코드
      arrRtnVal[5] //당사배정구분코드  
      arrRtnVal[6] //본선관리번호
      arrRtnVal[7] //선사항차	
      arrRtnVal[8] //선박코드
      arrRtnVal[9] //선박명
      arrRtnVal[10] //항구코드
      arrRtnVal[11] //보세운송만료일자(운송기한)
      arrRtnVal[12] //하선장소코드
      arrRtnVal[13] //하선장소명
      arrRtnVal[14] //입항일자
      arrRtnVal[15] //입항시간
      arrRtnVal[16] //부두코드
      arrRtnVal[17] //부두코드명
      arrRtnVal[18] //배정코드
      arrRtnVal[19] //배정코드명
      */
      //ds_manifestQueryCondition.setCellData('0', 'hblNo', rtnList[3]);//HOUSE_BL번호 
      //ds_manifestQueryCondition.setCellData('0', 'hsn', rtnList[2]);	////HSN
      //scwin.f_retrieveBillOfLadingBulk(row); //테스트용

      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          scwin.hid_hblNo = rtnList[3]; //HOUSE_BL번호 
          scwin.hid_hsn = rtnList[2]; //HSN

          ds_manifestQueryCondition.setCellData('0', 'hblNo', rtnList[3]); //HOUSE_BL번호 
          ds_manifestQueryCondition.setCellData('0', 'hsn', rtnList[2]); ////HSN

          if (row == 0) {
            if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
              ed_lineCd.setValue(rtnList[4]); //Line코드
            }
            if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue())) {
              ed_cvsslMgntNo.setValue(rtnList[6]); //본선관리번호
            }
            if ($c.gus.cfIsNull($p, scwin.hid_vsslCd)) {
              scwin.hid_vsslCd = rtnList[8]; //선박코드
            }
            if ($c.gus.cfIsNull($p, scwin.hid_portcnt)) {
              scwin.hid_portcnt = rtnList[7]; //선사항차
            }
            if ($c.gus.cfIsNull($p, scwin.hid_portCd)) {
              scwin.hid_portCd = rtnList[10]; //항구코드
            }

            // 오더종류별 설정
            if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
              // 수입일반오더인 경우
              if ($c.gus.cfIsNull($p, ed_closeDt.getValue())) {
                ed_closeDt.setValue(rtnList[14]); //입항일자
              }
              if ($c.gus.cfIsNull($p, ed_closeHh.getValue())) {
                ed_closeHh.setValue(rtnList[15]); //입항시간						
              }
              if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
                ed_lineCd.setValue(rtnList[4]); //Line코드
              }
            }
            //Line명과 선사거래처 가져오기
            //if (!cfIsNull(ed_lineCd.Text)) {
            //f_openCommonPopUp(14, ed_lineCd.Text, "", "T", "F") //이런 팝업 없음
            //}
          }
          if (scwin.f_chkBillOfLading(rtnList[3])) {
            //BL번호로 적하목록 BL 품명 정보를 조회한다.
            //ds_manifestQueryCondition.setCellData('0', 'hsn', rtnList[2]);	////HSN
            //ds_manifestQueryCondition.setCellData(0, 'cvsslMgntNo', ds_bulkOdrInfoDTO.getCellData(0, 'cvsslMgntNo'));
            ds_manifestQueryCondition.setJSON([{
              'hsn': scwin.hid_hsn,
              'cvsslMgntNo': ed_cvsslMgntNo.getValue(),
              'hblNo': scwin.hid_hblNo
            }]);
            ds_manifestQueryCondition.setRowPosition(0);
            scwin.f_retrieveBillOfLadingBulk(row);
          } else {
            // 여기 수정 되야 함......20061031 박홍준...
            scwin.hid_hblNo = "";
            ds_bulkOdrCommList.setCellData(row, "blNo", "");
            // BL 목록 초기화
            scwin.f_clearBillOfLadingBulk(row);
          }
        }
      } else {
        scwin.hid_hblNo = "";
        ds_bulkOdrCommList.setCellData(row, "blNo", "");
        // BL 목록 초기화
        scwin.f_clearBillOfLadingBulk(row);
      }
      scwin.f_chkeckBLEdit(row);
      break;
  }
};

//BL번호에 따른 품명,컨테이너조회
scwin.f_retrieveBillOfLadingBulk = function (row) {
  if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
    $c.sbm.execute($p, sbm_mainfestBillOfLading);
    return;
  }
};

//-------------------------------------------------------------------------
// 조회된 B/L 이 중복되는지 확인
//----
scwin.f_chkBillOfLading = function (blNo) {
  for (var i = 0; i < ds_orderBillOfLading.getTotalRow(); i++) {
    if (ds_orderBillOfLading.getCellData(i, "blNo") == blNo) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_011, "BL 번호 : [" + blNo + "] ")); // "이미 존재하는 @입니다.
      ds_bulkOdrCommList.setCellData(ds_bulkOdrCommList.getRowPosition(), "blNo", ds_bulkOdrCommList.getCellData(ds_bulkOdrCommList.getRowPosition(), "blNo"));
      return false;
    }
  }
  return true;
};

//BL번호에 초기화
scwin.f_clearBillOfLadingBulk = function (row) {
  //B2일떄
  if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
    // BL 번호 초기화
    hid_hblNo.value = "";
    ds_bulkOdrCommList.getCellData(row, "blNo", "");
    return;
  }
};
scwin.f_chkeckBLEdit = function (row) {
  // BL 번호 존재 여부에 따라 품목 정보 수정모드를 설정한다.
  if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR) {
    // 수입일반 오더 / 수입TS 오더
    if ($c.gus.cfIsNull($p, ds_bulkOdrCommList.getCellData(row, 'blNo'))) {
      gr_commList.setColumnReadOnly("commCd", false); //gr_commList.ColumnProp("commCd", "Edit") = "ANY";
      gr_commList.setColumnReadOnly("commNm", false); //gr_commList.ColumnProp("commNm", "Edit") = "ANY";
    } else {
      gr_commList.setColumnReadOnly("commCd", true); //gr_commList.ColumnProp("commCd", "Edit") = "None";
      gr_commList.setColumnReadOnly("commNm", true); //gr_commList.ColumnProp("commNm", "Edit") = "None";
    }
  }
};
scwin.udc_gr_commCdm_callBackFunc = function (rtnList) {
  //cfSetGridReturnValue(rtnList, ds, row, cdColid, nmColid);
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_bulkOdrCommList, scwin.gr_row, scwin.gr_colId, scwin.gr_colNm);
};

// 하단 작업경로 버튼 클릭시
scwin.btn_chgWrkPath_onclick = function (e) {
  scwin.f_chgWrkPath();
};

// 작업경로로 이동
scwin.f_chgWrkPath = function () {
  if (ed_odrNo.getValue().trim() == "") {
    $c.win.alert($p, "오더번호를 입력하십시오");
    return;
  }
  //var condition = "?odrNo=" + ed_odrNo.Text + "&type=retrieve";
  //cfTabMenuUpdate("/tn/sd/odrmgnt/odrdtlinfo/tn_202_02_02b.jsp" + condition, "작업경로");
  var paramObj = {
    "odrNo": ed_odrNo.getValue().trim(),
    "type": "retrieve"
  };
  $c.win.openMenu($p, "작업경로", "/ui/tn/sd/odrmgnt/odrdtlinfo/tn_202_02_02b.xml", "tn_202_02_02b.jsp", paramObj);
};

// 계약요율 버튼 클릭시
scwin.btn_contract_tariff_onclick = function (e) {
  scwin.f_CtrtTransTrfList();
};
scwin.f_CtrtTransTrfList = function (e) {
  var ctrtNo = ds_bulkOdrInfoDTO.getCellData(0, "ctrtNo"); // 계약번호
  if (ctrtNo == null || ctrtNo == "") {
    $c.win.alert($p, "계약번호가 없습니다.");
    return;
  }
  var paramObj = {
    "ctrtNo": ctrtNo
  };
  $c.win.openMenu($p, "계약요율", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_10b.xml", "tn_201_02_10b.jsp", paramObj);
};

// 오더 복사 버튼
scwin.btn_cntrWebOdr_onclick = function (e) {
  scwin.f_odrCopy();
};
scwin.f_odrCopy = async function () {
  if (scwin.odrSchYn && ed_odrNo.getValue() != "") {
    /* 
    tr_retrieveBulkOdrInfo.Action = "/tn.sd.odrmgnt.bulkodrreg.RetrieveBulkOdrInfoCMD.do?odrNo=" + ed_odrNo.Text.trim();
    tr_retrieveBulkOdrInfo.post();
    */
    var res = await $c.sbm.execute($p, sbm_retrieveBulkOdrInfo);
    scwin.sbm_retrieveBulkOdrInfo_submitdoneFnc(res);
    ed_odrNo.setValue(''); //검색 오더번호 초기화

    ds_bulkOdrInfoDTO.setCellData(0, "odrNo", "");
    ds_bulkOdrInfoDTO.setCellData(0, "wrkStDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
    ds_bulkOdrInfoDTO.setCellData(0, "wrkEndDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
    ds_bulkOdrInfoDTO.setCellData(0, "odrDcsnYn", "0");
    ds_bulkOdrInfoDTO.setCellData(0, "odrCnclYn", "0");
    ds_bulkOdrInfoDTO.setCellData(0, "odrDelYn", "0");
    ds_bulkOdrInfoDTO.setCellData(0, "odrCompleteYn", "0");

    //ds_bulkOdrCommList.ClearData();
    ds_bulkOdrCommList.modifyAllStatus("C");
    //조회와 복사 차이
    for (var idx = 0; idx < ds_bulkOdrCommList.getRowCount(); idx++) {
      gr_commList.setReadOnly("cell", idx, "ctrtWrkPathSeq", false); //복사는 계약작업경로순번 수정 활성화다. 
    }
    $c.gus.cfEnableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_clear, btn_save]);
    $c.gus.cfDisableObjects($p, [btn_update, btn_delete]);
    gr_commList.setReadOnly("grid", false);
    scwin.odrSchYn = false; // 조회 설정
  } else {
    $c.win.alert($p, "복사할 오더가 없습니다");
    return;
  }
};

// 오더 분할 클릭시
scwin.btnCopy_onclick = function (e) {
  scwin.f_odrCopyDvid();
};
scwin.f_odrCopyDvid = function (e) {
  if (ds_order.getTotalRow() == 0) {
    ds_order.insertRow();
  } else {
    ds_order.removeAll();
    ds_order.insertRow();
  }
  if (ed_odrNo.getValue() == "") {
    $c.win.alert($p, "오더 생성 후 오더분할 기능을 사용하세요");
    return false;
  }
  if (ds_bulkOdrInfoDTO.getCellData(0, "odrDcsnYn") == "0") {
    $c.win.alert($p, "오더 확정 후 오더분할 기능을 사용하세요");
    return false;
  }
  if (ds_bulkOdrCommList.getTotalRow() != 1) {
    $c.win.alert($p, "오더분할은  품명이 1개인 오더에 대해서만 진행 가능합니다.");
    return false;
  }
  if ($c.num.parseFloat($p, ed_copyKg.getValue()) < 1000 || $c.num.parseFloat($p, ed_copyKg.getValue()) > $c.num.parseFloat($p, ed_copyWt.getValue())) {
    $c.win.alert($p, "분할 Kg에 1000보다 작은 값을 입력 또는 실 중량보다 큽니다. 유효한 숫자를 입력해 주세요");
    ed_copyKg.focus();
    ed_copyKg.setValue('0');
    return false;
  }
  ds_order.setJSON([{
    "odrNo": ed_odrNo.getValue(),
    "odrCopyEachWt": ed_copyKg.getValue(),
    "odrCopyWt": ed_copyWt.getValue(),
    "copyClsCd": 'D'
  }]);
  $c.sbm.execute($p, sbm_odrCopy);
  //tr_odrCopy.Post();
};

// 추가오더 분할
scwin.btnAdd_onclick = function (e) {
  scwin.f_odrAdd();
};
scwin.f_odrAdd = function () {
  if (ds_order.getTotalRow() == 0) {
    ds_order.insertRow();
  } else {
    ds_order.removeAll();
    ds_order.setRowData(0, [{}]);
  }
  if (ed_odrNo.getValue() == "") {
    $c.win.alert($p, "오더 생성 후 오더추가 기능을 사용하세요");
    return false;
  }
  if (ds_bulkOdrInfoDTO.getCellData(0, "odrDcsnYn") == "0") {
    $c.win.alert($p, "오더 확정 후 오더추가 기능을 사용하세요");
    return false;
  }
  if (ds_bulkOdrCommList.getRowCount() != 1) {
    $c.win.alert($p, "오더추가는 품명이 1개인 오더에 대해서만 진행 가능합니다.");
    return false;
  }
  if ($c.num.parseFloat($p, ed_addKg.getValue()) < 1000) {
    $c.win.alert($p, "추가물량(Kg)에 1000보다 작은 값을 입력했습니다. 유효한 숫자를 입력해 주세요");
    ed_addKg.focus();
    return false;
  }
  ds_order.setJSON([{
    "odrNo": ed_odrNo.getValue(),
    "odrAddWt": ed_addKg.getValue(),
    "copyClsCd": "A"
  }]);
  //tr_odrCopy.Post();
  $c.sbm.execute($p, sbm_odrCopy);
};
scwin.sbm_odrCopy_submitdone = function (e) {
  var odrList = "";
  for (var i = 0; i <= ds_copiedOdr.getRowCount(); i++) {
    odrList = odrList + ds_copiedOdr.getCellData(i, "mcomOdrNo");
    if (i != ds_copiedOdr.getRowCount()) {
      odrList = odrList + " / ";
    }
  }
  newOdrList.innerHTML = "분할, 추가된 오더번호는 : " + odrList;
};
scwin.sbm_retrieveCtrtClnt_submitdone = function (e) {
  //console.log('scwin.sbm_retrieveCtrtClnt_submitdone');
  //console.log(e);
  ds_ctrtNo.sort("ctrtNo", 1);
  scwin.ds_ctrtNo_setLabelInfo();
  lc_ctrtNo.setValue(ds_ctrtNo.getCellData(0, "ctrtNo"));
};

//조회 직후 에도 써야해서 외부로 뺌
scwin.ds_ctrtNo_setLabelInfo = function () {
  for (var i = 0; i < ds_ctrtNo.getTotalRow(); i++) {
    ds_ctrtNo.setCellData(i, "label", "(" + ds_ctrtNo.getCellData(i, "clntPicNm") + ":~" + ds_ctrtNo.getCellData(i, "ctrtEndDt") + ":" + ds_ctrtNo.getCellData(i, "crcCd") + ")");
  }
};

//계약번호 변경시
scwin.lc_ctrtNo_onchange = function (info) {
  /** 
  	if(lc_ctrtNo.ValueOfIndex("ctrtNo", lc_ctrtNo.Index) != "선택"){
  f_RetrieveCtrtWrkPath(lc_ctrtNo.ValueOfIndex("ctrtNo", lc_ctrtNo.Index)) ;
  hid_taxnClsCd.value = lc_ctrtNo.ValueOfIndex("taxnClsCd", lc_ctrtNo.Index); //과세구분코드
  }
  */
  //console.log('scwin.lc_ctrtNo_onchange');
  //console.log(info);
  var tmpValue = lc_ctrtNo.getValue();
  if (tmpValue != '선택') {
    scwin.f_RetrieveCtrtWrkPath(lc_ctrtNo.getValue());
  }
};

//수정하기 버튼 클릭시
scwin.btn_update_onclick = function (e) {
  scwin.f_update();
};
scwin.f_update = function (e) {
  scwin.btn_flag = "UPDATE";
  $c.gus.cfEnableObjects($p, [odrMainData, odrDetailData, btn_commList]);
  $c.gus.cfEnableObjects($p, [btn_clear, btn_save, btn_delete]);
  $c.gus.cfDisableObjects($p, [btn_update]);
  gr_commList.setReadOnly("grid", false);
  var commListRowCnt = ds_bulkOdrCommList.getTotalRow();

  // 필수 값 수정시 기존데이터 변경 방지 
  for (var idx = 0; idx < commListRowCnt; idx++) {
    gr_commList.setReadOnly("cell", idx, "commCd", true);
    gr_commList.setReadOnly("cell", idx, "commNm", true);
    gr_commList.setReadOnly("cell", idx, "ctrtWrkPathSeq", true);
  }
  $c.gus.cfDisableObjects($p, [lc_odrKndCd, lc_ctrtNo, btn_ctrtNo, ed_shpCoClntNm, lc_selfClsCd, ed_dptZip, ica_wrkStDt, ed_wrkStHh, ed_arvZip, ica_wrkEndDt, ed_wrkEndHh, btn_dptZipPopup, btn_arvZipPopup]);
  $c.gus.cfDisableObjects($p, [udc_ctrtClntNo, udc_cvsslMgntNo, udc_lineNm, udc_dptWrkPlCd, udc_arvWrkPlCd]);
};

// 신규 버튼 클릭시
scwin.btn_clear_onclick = function (e) {
  scwin.f_clear();
};
scwin.f_clear = function () {
  dma_orderNo.setEmptyValue(); // 나는 일단 검색결과랑 연동 안해놨다. AsIs 기준 연동되어 있어서 수정하다가 바꾸면 큰일 날수도??

  // 데이터 셋 초기화...
  ds_bulkOdrInfoDTO.removeAll();
  ds_bulkOdrInfoDTO.insertRow();
  ds_bulkOdrCommList.removeAll();
  ds_bulkOdrCommList.insertRow();
  ds_bulkOdrCommList.setCellData(0, "unitCd", "KG"); //관리단위를 KG으로 셋팅..

  gr_commList.setFocusedCell(0, 0, false);
  ds_ctrtWrkPath.removeAll();
  //ds_ctrtNo.removeAll(); //AS-IS에 없는 코드라 주석 처리함.

  /*20160126 화물위탁증 관련 추가*/

  scwin.odrSchYn = false; //조회여부
  scwin.f_SetDefaultData();
  ica_wrkStDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_wrkEndDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  scwin.btn_flag = "CLEAR";
  $c.gus.cfEnableObjects($p, [odrMainData, odrDetailData, btn_save, btn_commList]);
  $c.gus.cfDisableObjects($p, [btn_clear, btn_update, btn_delete]);

  //내수 및 수출 오더에 대하여는 본선번호 disable img_PopUp3 본선번호 옆 img_PopUp4 본선번호 옆옆 이거 화면 없음
  if (lc_odrKndCd.getValue() == "B2") {
    $c.gus.cfEnableObjects($p, [udc_cvsslMgntNo]); // 번호 이름이 아닌 udc로 해야 이미지도 막힘
  } else {
    $c.gus.cfDisableObjects($p, [udc_cvsslMgntNo]);
  }

  //그리드 값 수정 가능
  gr_commList.setReadOnly("grid", false);
  gr_commList.setFocusedCell(0, 0, false);
  scwin.f_setSellAndBilgDept(lc_odrKndCd.BindColVal);
};

// 저장하기 클릭시
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};
scwin.f_save = async function (e) {
  if (!(await $c.gus.cfValidate($p, [lc_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_reqClntNo, ed_dptZip, ed_arvZip]))) {
    return;
  }
  if (lc_ctrtNo.getValue() && lc_ctrtNo.getValue().trim() == '선택') {
    //lc_ctrtNo.ValueOfIndex("ctrtNo", lc_ctrtNo.Index) == "선택"
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, '계약번호')); //@은(는) 필수 입력 항목입니다
    lc_ctrtNo.focus();
    return false;
  }
  if (await $c.gus.cfIsNull($p, scwin.login_regBranCd)) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002 + "\n 사용자 정보[물류점소]를 확인하시기 바랍니다.", '등록점소코드'));
    return false;
  }
  if (!(await $c.gus.cfValidate($p, [ed_sellLodeptCd, ed_bilgLodeptCd, ed_dptWrkPlCd, ica_wrkStDt, ed_wrkStHh, ed_arvWrkPlCd, ica_wrkEndDt, ed_wrkEndHh]))) {
    return;
  }

  // 출발작업일자가 도착작업일자보다 큰 경우
  if (ica_wrkStDt.getValue().trim() > ica_wrkEndDt.getValue().trim()) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_057, "도착일자", "출발일자"));
    ica_wrkEndDt.focus();
    return false;
  }

  // 출발작업시간이 도착작업시간보다 큰 경우
  if (ica_wrkStDt.getValue().trim() == ica_wrkEndDt.getValue().trim() && ed_wrkStHh.getValue().trim() >= ed_wrkEndHh.getValue().trim()) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_057, "도착시간", "출발시간"));
    ed_wrkEndHh.focus();
    return false;
  }

  //수량,중량 중의 하나이상은 0이 아니여야 한다.
  for (var i = 0; i < ds_bulkOdrCommList.getTotalRow(); i++) {
    if (eval(ds_bulkOdrCommList.getCellData(i, "qty")) == 0 && eval(ds_bulkOdrCommList.getCellData(i, "grossWt")) == 0) {
      $c.win.alert($p, "수량,중량 중의 하나이상은 0이 아니여야 합니다.");
      ds_bulkOdrCommList.setRowPosition(i);
      gr_commList.setFocusedCell(i, "qty", true); //gr_commList.SetColumn("qty");
      return;
    }
  }
  var tmpOdrKndValue = lc_odrKndCd.getValue() ? lc_odrKndCd.getValue() : ds_bulkOdrInfoDTO.getCellData(0, 'odrKndCd');
  ds_bulkOdrInfoDTO.setCellData(0, 'odrKndCd', tmpOdrKndValue);
  ds_bulkOdrInfoDTO.setCellData(0, 'sellYn', DsConstants.YN_YES); // AsIs hid로 고정값받아 연동 시키는 값
  ds_bulkOdrInfoDTO.setCellData(0, 'regBranCd', scwin.login_regBranCd); //등록점소 AsIs hid로 고정값받아 연동 시키는 값

  // 수출입구분 셋팅
  scwin.hid_impExpDomesticClsCd = scwin.f_setImpExpDomesticClsCd(); //hid_impExpDomesticClsCd.value = f_setImpExpDomesticClsCd();   // 수출입내수구분코드
  if (!(await scwin.f_gridValidChk())) {
    return;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    if (scwin.btn_flag == "UPDATE") {
      $c.sbm.execute($p, sbm_updateBulkOrder);
    } else {
      $c.sbm.execute($p, sbm_registBulkOrder);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 필수체크
//-------------------------------------------------------------------------
scwin.f_gridValidChk = async function () {
  //오더품목  필수 입력사항을 체크
  if (await $c.gus.cfValidate($p, [gr_commList])) {
    // 작업경로 선택 사항 확인
    for (var idx = 0; idx < ds_bulkOdrCommList.getTotalRow(); idx++) {
      if (ds_bulkOdrCommList.getCellData(idx, "ctrtWrkPathSeq") <= 0) {
        //$c.win.alert([MSG_CM_WRN_007,"작업경로"]);
        $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_007, "작업경로"));
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// 수출입구분 셋팅
scwin.f_setImpExpDomesticClsCd = function () {
  var impExpDomesticClsCd = "";
  var odrKndCd = lc_odrKndCd.getValue(); //lc_odrKndCd.ValueOfIndex("code", lc_odrKndCd.Index);
  switch (odrKndCd) {
    case DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR:
      // 수입
      impExpDomesticClsCd = DsConstants.IMP_CD;
      break;
    case DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR:
      // 수출
      impExpDomesticClsCd = DsConstants.EXP_CD;
      break;
    default:
      // 내수 : DsConstants.ODR_KND_CD_DOMESTIC_FCTY_CRRYOUT_ODR 외...
      impExpDomesticClsCd = DsConstants.DOMESTIC_CD;
      break;
  }
  return impExpDomesticClsCd;
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 요청처 팝업
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_reqClntNo.getValue(), ed_reqClntNm.getValue(), 'F', 'F');
};
scwin.udc_reqClntNo_callBackFunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ed_reqClntNo.setValue(rtnList[0]); //요청 거래처코드
      ed_reqClntNm.setValue(rtnList[1]); //요청 거래처명
    } else {
      ed_reqClntNo.setValue(""); //요청 거래처코드
      ed_reqClntNm.setValue(""); //요청 거래처명
    }
  }
};

// <script language=JavaScript for=ds_bulkOdrInfoDTO event=OnColumnChanged(row,colid)>
scwin.ds_bulkOdrInfoDTO_oncelldatachange = function (info) {
  var colid = info.colID;
  var row = info.rowIndex;
  if (colid == 'wrkStDt' || colid == 'wrkStHh' || colid == 'wrkEndDt' || colid == 'wrkEndHh') {
    scwin.f_gridValueSet(colid);
  } else if (colid == 'odrKndCd') {
    if (ds_bulkOdrInfoDTO.getCellData(row, colid) == "B2") {
      gr_commList.setColumnVisible("blNo", true);
      $c.gus.cfEnableObjects($p, [ed_cvsslMgntNo, btn_cvsslMgntNo]);
    } else if (ds_bulkOdrInfoDTO.getCellData(row, colid) == "B4") {
      gr_commList.setColumnVisible("blNo", false);
      ed_cvsslMgntNo.setValue("");
      $c.gus.cfDisableObjects($p, [ed_cvsslMgntNo, btn_cvsslMgntNo]);
    } else {
      gr_commList.validExp = "commCd:품명코드:yes,commNm:품명:yes,ctrtWrkPathSeq:계약작업경로순번:yes,unitCd:관리단위:yes";
      gr_commList.setColumnStyle("blNo", "Head-color", "FFFFFF");
      gr_commList.setColumnVisible("blNo", false);
      ed_cvsslMgntNo.setValue("");
      $c.gus.cfDisableObjects($p, [ed_cvsslMgntNo, btn_cvsslMgntNo]);
    }
    for (var i = 0; i < ds_bulkOdrCommList.getRowCount(); i++) {
      ds_bulkOdrCommList.setCellData(i, "blNo", "");
    }
  }
};

// 저장 후 처리
scwin.sbm_registBulkOrder_submitdone = async function (e) {
  if (e.responseJSON) {
    if (e.responseJSON.resultDataSet[0].Code != '0') {} else {
      await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      //hid_odrCopy.value = "";
      ed_odrNo.setValue(ds_odrCond.getCellData(0, 'odrNo'));
      scwin.f_retrieveOdrInfo();
      ds_odrCond.removeAll(); // out 초기화 안하면 값 넘어가서 가우스 오류
    }
  }
};

//삭제 버튼 클릭시
scwin.btn_delete_onclick = function (e) {
  scwin.f_delete();
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_delete = async function () {
  button = "DELETE";
  if (await $c.win.confirm($p, "오더번호 : " + $c.data.getMessage($p, MSG_CM_CRM_008, ed_odrNo.getValue()))) {
    $c.sbm.execute($p, sbm_delete);
  }
};

//삭제 후 처리
scwin.sbm_delete_submitdone = function (e) {
  $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_011, ed_odrNo.getValue())); // 삭제되었습니다.
  ds_bulkOdrInfoDTO.removeAll();
  ds_bulkOdrCommList.removeAll();

  //버튼 및 그리드 제어
  $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_update, btn_save, btn_delete]);
  gr_commList.readOnly = false;
  lc_selfClsCd.setValue("LI"); // 자가구분..

  scwin.memJson = $c.data.getMemInfo($p);
  ds_bulkOdrInfoDTO.setJSON([{
    "odrDcsnYn": DsConstants.YN_NO,
    // 오더확정여부
    "odrCnclYn": DsConstants.YN_NO,
    // 오더취소여부
    "odrDelYn": DsConstants.YN_NO,
    // 오더삭제여부
    "odrCompleteYn": DsConstants.YN_NO,
    // 오더완료여부
    "regBranCd": scwin.memJson.lobranCd,
    // 등록점소 - 사용자 설정 물류점소
    "sellYn": DsConstants.YN_YES // 매출여부
  }]);

  // 계약거래처 데이타 설정
  scwin.f_clearDataSetRetrieveCtrtClnt();
  lc_odrKndCd.setValue("D3"); // 오더종류..
};

////// kill focus Events

//오더복사 kg 입력  <script language=JavaScript for=ed_copyKg event=OnKillFocus()>
scwin.ed_copyKg_onblur = function (e) {
  var outValue = $c.num.ceil($p, $c.num.parseFloat($p, ed_copyWt.getValue()) / $c.num.parseFloat($p, ed_copyKg.getValue()));
  if (outValue) {
    ed_copyCnt.setValue(outValue);
  } else {
    //NAN 출력 
    ed_copyCnt.setValue(-1.00);
  }
};

//<script language=JavaScript for=ed_ctrtClntNo event=OnKillFocus()><!-- 계약거래처 EMEdit Focus 이동시 -->
//계약처
scwin.udc_ctrtClntNo_onblurCodeEvent = async function (e) {
  $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
  //scwin.f_chkOpenCommonPopUp(ed_ctrtClntNo, ed_ctrtClntNm, 1, true);
  var pWhere = ",CTRT";
  let rtnList = await udc_ctrtClntNo.cfCommonPopUpAsync(scwin.udc_ctrtClntNo_callBackFunc // 콜백 함수
  , ed_ctrtClntNo.getValue() // 화면에서의 ??? Code Element의	Value
  , '' // 화면에서의 ??? Name Element의	Value
  , 'T' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
  , 'T' // 전체검색허용여부	("F")
  , "계약 거래처,거래처코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  , null, null);
  if (ed_ctrtClntNo.getValue() == "") {
    // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
    scwin.f_clearDataSetRetrieveCtrtClnt();
    // 계약번호 (ds_ctrtNo) DataSet 초기화
    ds_ctrtNo.removeAll();
  }
  scwin.f_checkReqClntCd();
};
scwin.f_checkReqClntCd = function (e) {
  for (i = 0; i < ds_checkCtrtCd.getTotalRow(); i++) {
    if (ed_ctrtClntNo.getValue() == ds_checkCtrtCd.getCellData(i, "cd")) {
      ed_reqClntNo.setValue("");
      ed_reqClntNm.setValue("");
      ed_reqClntNo.validExp = "요청처:Yes";
      break;
    } else {
      ed_reqClntNo.setValue(ed_ctrtClntNo.getValue());
      ed_reqClntNm.setValue(ed_ctrtClntNm.getValue());
      ed_reqClntNo.validExp = "요청처:No";
    }
  }
};

//요청처 내부거래처 판단
scwin.f_checkInnerClntCd = function (e) {
  for (i = 0; i < ds_checkCtrtCd.getTotalRow(); i++) {
    if (e == ds_checkCtrtCd.getCellData(i, "cd")) {
      $c.win.alert($p, "요청처는 내부거래처일 수 없습니다.");
      ed_reqClntNo.setValue("");
      ed_reqClntNm.setValue("");
      break;
    }
  }
};

//콜백후 얼럿 dim 이슈로 async 호출
scwin.udc_reqClntNo_onblurCodeEvent = async function (e) {
  var rtnList = await udc_reqClntNo.cfCommonPopUpAsync(scwin.udc_reqClntNo_callBackFunc, ed_reqClntNo.getValue() // 화면에서의 ??? Code Element의  Value
  , '' // 화면에서의 ??? Name Element의  Value
  , 'T' // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
  , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는    컬럼 지정
  , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의   사용자 정의  폭
  , null // POP-UP뛰을때 우도우의   사용자 정의  높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부   ("F")
  , 'F' // 전체검색허용여부 ("F")
  , "요청 거래처,요청처코드/명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
  , null, null);
  scwin.f_checkInnerClntCd(rtnList[0]);
};

//BL 번호로 품목 조회
scwin.sbm_mainfestBillOfLading_submitdone = function (e) {
  scwin.f_setBillOfLadingCommdityToOrderCommodity();
};

//품목 정보 변환
scwin.f_setBillOfLadingCommdityToOrderCommodity = function () {
  var v_wrkStDt = ica_wrkStDt.getValue();
  var v_wrkStHh = ed_wrkStHh.getValue();
  var v_wrkEndDt = ica_wrkEndDt.getValue();
  var v_wrkEndHh = ed_wrkEndHh.getValue();
  if (scwin.f_copyBillOfLading()) {
    if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR || lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_BULK_YARD_VIA_IMP_TS_ODR) {
      // 수입일반오더, 수입 TS 오더인 경우
      if (mulitRowSelYn == "T") ds_bulkOdrCommList.AddRow(); // B/L 다중선택시 Row 추가
      var blRow = ds_billOfLadingCommodity.getRowPosition() ? ds_billOfLadingCommodity.getRowPosition() : 0;
      var commodityRow = ds_bulkOdrCommList.getRowPosition();
      ds_bulkOdrCommList.setCellData(commodityRow, "odrNo", ds_bulkOdrInfoDTO.getCellData(0, 'odrNo')); // 오더번호
      ds_bulkOdrCommList.setCellData(commodityRow, "blNo", ds_billOfLadingCommodity.getCellData(blRow, "hblNo")); // HOUSE BL 번호
      ds_bulkOdrCommList.setCellData(commodityRow, "commCd", ds_billOfLadingCommodity.getCellData(blRow, "commCd")); // 품명코드
      ds_bulkOdrCommList.setCellData(commodityRow, "commNm", ds_billOfLadingCommodity.getCellData(blRow, "commNm")); // 품명
      ds_bulkOdrCommList.setCellData(commodityRow, "unitCd", DsConstants.BASIC_UNIT_CD_WT_KG); // 중량단위코드
      ds_bulkOdrCommList.setCellData(commodityRow, "qty", ds_billOfLadingCommodity.getCellData(blRow, "packCnt")); // 수량
      ds_bulkOdrCommList.setCellData(commodityRow, "grossWt", ds_billOfLadingCommodity.getCellData(blRow, "totWt")); // GROSS중량
      ds_bulkOdrCommList.setCellData(commodityRow, "cbm", ds_billOfLadingCommodity.getCellData(blRow, "totCbm")); // CBM
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkStDt", v_wrkStDt); // 작업시작일자
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkStHh", v_wrkStHh); // 작업시작시간
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkEndDt", v_wrkEndDt); // 작업종료일자
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkEndHh", v_wrkEndHh); // 작업종료시간
    }
    scwin.f_chkeckBLEdit(ds_bulkOdrCommList.getRowPosition());
  }

  // 저장된 B/L 정보와 품명 B/L 정보를 조회하여 사용하지않는 오더 B/L 정보를 삭제한다. - 수입본선, 부두간 TS 제외
  if (lc_odrKndCd.getValue() != DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR && lc_odrKndCd.getValue() != DsConstants.ODR_KND_CD_BULK_PIER_TS_ODR) {
    for (var j = 0; j < ds_orderBillOfLading.getRowCount(); j++) {
      chkBl = false;
      for (var k = 0; k < ds_bulkOdrCommList.getRowCount(); k++) {
        if (!cfIsNull(ds_bulkOdrCommList.getCellData(k, "blNo"))) {
          if (ds_bulkOdrCommList.getCellData(k, "blNo") == ds_orderBillOfLading.getCellData(j, "blNo")) {
            chkBl = true;
            break;
          }
        }
      }
      if (!chkBl) {
        ds_orderBillOfLading.DeleteRow(j);
      }
    }
  }
};
scwin.f_copyBillOfLading = function () {
  if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR && $c.gus.cfIsNull($p, scwin.hid_commCd)) {
    ds_orderBillOfLading.removeAll(); // 설정된 이전 품명은 모두 삭제한다.  	
  }
  if (ds_billOfLading.getTotalRow() > 0) {
    for (var i = 0; i < ds_billOfLading.getTotalRow(); i++) {
      if (scwin.f_chkBillOfLading(ds_billOfLading.getCellData(i, "hblNo"))) {
        ds_orderBillOfLading.setJSON([{
          'odrNo': ds_bulkOdrInfoDTO.getCellData(0, "odrNo"),
          'mrn': ds_billOfLading.getCellData(i, "mrn"),
          'msn': ds_billOfLading.getCellData(i, "msn"),
          'hsn': ds_billOfLading.getCellData(i, "hsn"),
          'blNo': ds_billOfLading.getCellData(i, "hblNo"),
          'commCd': ds_billOfLading.getCellData(i, "commCd")
        }], true);
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
scwin.lc_odrKndCd_onchange = function (info) {
  scwin.memJson = $c.data.getMemInfo($p);
  var tempOdrKnd = lc_odrKndCd.getValue();

  // DateSet 정보를 초기화한다.
  if (ds_bulkOdrInfoDTO.getCellData(0, "odrNo") == "" && ds_bulkOdrInfoDTO.getCellData(0, "ctrtClntNo") != "" && lc_ctrtNo.getValue() != "선택" && lc_ctrtNo.getValue() != "") {
    scwin.f_clear();

    // 출발일시, 도착일시 초기화
    ica_wrkStDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
    ed_wrkStHh.setValue(""); //출발시간
    ica_wrkEndDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
    ed_wrkEndHh.setValue(""); //도착시간
  }

  //lc_odrKndCd.ValueOfIndex("code", lc_odrKndCd.Index) = tempOdrKnd ;
  lc_odrKndCd.setValue(tempOdrKnd);
  scwin.f_setSellAndBilgDept(lc_odrKndCd.getValue());
};
scwin.ed_odrNo_onviewchange = function (info) {
  ed_odrNo.setValue(ed_odrNo.getValue().toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchField',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;text-transform:uppercase;',ref:'data:dma_orderNo.odrNo',validExp:'오더번호:yes:length=13',objType:'Data',maxlength:'13',allowChar:'0-9a-zA-Z','ev:onviewchange':'scwin.ed_odrNo_onviewchange'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더기본정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'odrMainData',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:150px;',allOption:'',id:'lc_odrKndCd',class:'',direction:'auto',chooseOptionLabel:'전체',ref:'',validExp:'오더종류:yes',objType:'data',mandatory:'true',title:'오더종류',emptyItem:'true','ev:onchange':'scwin.lc_odrKndCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출일반'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수 거점내'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수 거점간'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수 공장반출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수 물류기지반출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수 공장회수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D6'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'계약처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'ctrtClntNo',style:'',code:'ctrtClntNo',refDataCollection:'ds_bulkOdrInfoDTO',selectID:'retrieveClntInfo_tpro',btnId:'btn_ctrtClntNo',codeId:'ed_ctrtClntNo',id:'udc_ctrtClntNo',nameId:'ed_ctrtClntNm',objTypeCode:'data',validExpCode:'계약처:yes',validExpName:'계약거래처:no:maxByteLength=30','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent',name:'ctrtClntNm',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent',validTitle:'계약처',allowCharCode:'0-9A-Z',mandatoryCode:'true',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'계약번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{sortOption:'value',chooseOptionLabel:'',submenuSize:'fixed','ev:onchange':'scwin.lc_ctrtNo_onchange',chooseOption:'',validExp:'계약번호:yes',allOption:'',mandatory:'true',ref:'data:ds_bulkOdrInfoDTO.ctrtNo',sortMethod:'descending',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width:250px;',id:'lc_ctrtNo',class:'',objType:'data',direction:'auto',title:' 계약번호',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'',selectedRowColor:'',label:'label',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'width:120px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'',headerStyle:''}}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_ctrtNo',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_ctrtNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'reqClntNo',style:'',id:'udc_reqClntNo',codeId:'ed_reqClntNo',nameId:'ed_reqClntNm',btnId:'btn_reqClntNo',code:'reqClntNo',name:'reqClntNm',selectID:'retrieveClntInfo_tpro',refDataCollection:'ds_bulkOdrInfoDTO',validExpName:'요청거래처:no:maxByteLength=30',validExpCode:'요청처:no',readOnlyName:'true','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent',validTitle:'요청처'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'위탁증 실화주',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_trnsRealMchtClntNm',placeholder:'',class:'',ref:'data:ds_bulkOdrInfoDTO.trnsRealMchtClntNm',maxlength:'40'}},{T:1,N:'xf:input',A:{style:'',id:'ed_trnsRealMchtClntTelNo',placeholder:'',class:'',ref:'data:ds_bulkOdrInfoDTO.trnsRealMchtClntTelNo',allowChar:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'위탁증 주선사업자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_trnsCnsgMchtClntNm',placeholder:'',class:'',ref:'data:ds_bulkOdrInfoDTO.trnsCnsgMchtClntNm'}},{T:1,N:'xf:input',A:{style:'',id:'ed_trnsCnsgMchtClntTelNo',placeholder:'',class:'',ref:'data:ds_bulkOdrInfoDTO.trnsCnsgMchtClntTelNo',allowChar:'a-zA-Z0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width:150px;',allOption:'false',id:'lc_odrClassCd',class:'',direction:'auto',ref:'',validExp:'오더종류:yes',sortOption:'value',sortMethod:'ascending',mandatory:'true',title:'오더구분'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'매출부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'sellLodeptCd',style:'',hideName:'Y',id:'udc_sellLodeptCd',codeId:'ed_sellLodeptCd',btnId:'btn_sellLodeptCd',nameId:'ed_sellLodeptNm',code:'sellLodeptCd',name:'sellLodeptNm',refDataCollection:'ds_bulkOdrInfoDTO',selectID:'retrieveLogisDeptInfo_tpro','ev:onclickEvent':'scwin.udc_sellLodeptCd_onclickEvent',validExpCode:'매출부서:yes',validExpName:'매출부서:no:maxByteLength=50',readOnlyName:'true',mandatoryCode:'true',validTitle:'매출부서',mandatoryName:'true','ev:onblurCodeEvent':'scwin.udc_sellLodeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'청구부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_bilgLodeptCd',style:'',id:'udc_bilgLodeptCd',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',btnId:'btn_bilgLodeptCd','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent',code:'bilgLodeptCd',name:'bilgLodeptNm',refDataCollection:'ds_bulkOdrInfoDTO',selectID:'retrieveLogisDeptInfo_tpro',validExpCode:'청구부서:yes',validExpName:'청구부서:no:maxByteLength=50',readOnlyName:'true',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent',validTitle:'청구부서'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'본선번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'cvsslMgntNo',style:'',hideName:'true',id:'udc_cvsslMgntNo',btnId:'btn_cvsslMgntNo',codeId:'ed_cvsslMgntNo',nameId:'ed_cvsslMgntNm',refDataCollection:'ds_bulkOdrInfoDTO',code:'cvsslMgntNo',name:'cvsslMgntNm','ev:onclickEvent':'scwin.udc_cvsslMgntNo_onclickEvent',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_cvsslMgntNo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Line/선사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_lineCd',placeholder:'',class:'',ref:'data:ds_bulkOdrInfoDTO.lineCd'}},{T:1,N:'w2:udc_comCode',A:{popupID:'lineNm',style:'',hideName:'Y',id:'udc_lineNm',codeId:'ed_lineNm',btnId:'btn_lineNm',nameId:'ed_shpCoClntNm',code:'lineNm',name:'shpCoClntNm',refDataCollection:'ds_bulkOdrInfoDTO',selectID:'retrieveLineInfoList_tpro','ev:onclickEvent':'scwin.udc_lineNm_onclickEvent',readOnlyCode:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Closing Time',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'group9',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_closeDt',class:'',calendarValueType:'yearMonthDate',ref:'data:ds_bulkOdrInfoDTO.closeDt'}},{T:1,N:'xf:input',A:{dataType:'time',style:'',id:'ed_closeHh',class:'w50 tac',editPlaceholderChar:'_',ref:'data:ds_bulkOdrInfoDTO.closeHh',maxlength:'4',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'자가구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width:150px;',allOption:'false',id:'lc_selfClsCd',class:'',direction:'auto',ref:'data:ds_bulkOdrInfoDTO.selfClsCd',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'긴급여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_bulkOdrInfoDTO.urgentYn',appearance:'full',style:'',id:'cbx_urgentYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'긴급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처관리번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_clntMgntNo',placeholder:'',class:'',ref:'data:ds_bulkOdrInfoDTO.clntMgntNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'odrDetailData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',refDataCollection:'ds_bulkOdrInfoDTO',code:'dptWrkPlCd',popupID:'dptWrkPlCd',btnId:'btn_dptWrkPlCd',codeId:'ed_dptWrkPlCd',selectID:'retrieveWrkPlInfo_tpro1',name:'dptWrkPlNm',nameId:'ed_dptWrkPlNm',style:'width:110px;',id:'udc_dptWrkPlCd',hideName:'true','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent',mandatoryName:'true',validExpName:'출발지:yes',validTitle:'출발지','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onblurCodeEvent',mandatoryCode:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dptZip',placeholder:'',style:'width:100px;',ref:'data:ds_bulkOdrInfoDTO.dptZip',mandatory:'true',validExp:'출발지우편번호:yes:length=5',objType:'data',title:'출발지우편번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_dptZipPopup',style:'',type:'button','ev:onclick':'scwin.btn_dptZipPopup_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_dptDtl',placeholder:'',style:'width:150px;',ref:'data:ds_bulkOdrInfoDTO.dptDtl'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_rmk',style:'height: 100%;',ref:'data:ds_bulkOdrInfoDTO.rmk'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일시',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group17',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'',ref:'data:ds_bulkOdrInfoDTO.wrkStDt',displayFormat:'yyyy/MM/dd',title:'출발일시',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_wrkStHh',style:'',ref:'data:ds_bulkOdrInfoDTO.wrkStHh',maxlength:'4',validExp:'출발시간:yes:date=HHmm&length=4',objType:'data',mandatory:'true',title:'출발시간'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차담당',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_onPicNm',placeholder:'',style:'',ref:'data:ds_bulkOdrInfoDTO.onPicNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_onPicTelNo',placeholder:'',style:'',ref:'data:ds_bulkOdrInfoDTO.onPicTelNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',refDataCollection:'ds_bulkOdrInfoDTO',code:'arvWrkPlCd',popupID:'arvWrkPlCd',validExpName:'출발지:no:maxByteLength=30',validExpCode:'출발지:yes',btnId:'btn_arvWrkPlCd',hideName:'true',codeId:'ed_arvWrkPlCd',selectID:'retrieveWrkPlInfo_tpro1',name:'arvWrkPlNm',nameId:'ed_arvWrkPlNm',style:'width:110px;',id:'udc_arvWrkPlCd','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent',mandatoryName:'true','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent',validTitle:'도착지',mandatoryCode:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_arvZip',placeholder:'',style:'width:100px;',ref:'data:ds_bulkOdrInfoDTO.arvZip',mandatory:'true',validExp:'도착지우편번호:yes:length=5',objType:'data',title:'도착지우편번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_arvZipPopup',style:'',type:'button','ev:onclick':'scwin.btn_arvZipPopup_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_arvDtl',placeholder:'',style:'width:150px;',ref:'data:ds_bulkOdrInfoDTO.arvDtl'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'도착일시',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group18',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkEndDt',style:'',ref:'data:ds_bulkOdrInfoDTO.wrkEndDt',displayFormat:'yyyy/MM/dd',mandatory:'true',title:'도착일시'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_wrkEndHh',style:'',ref:'data:ds_bulkOdrInfoDTO.wrkEndHh',maxlength:'4',title:'도착시간',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차담당',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_offPicNm',placeholder:'',style:'',ref:'data:ds_bulkOdrInfoDTO.offPicNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_offPicTelNo',placeholder:'',style:'',ref:'data:ds_bulkOdrInfoDTO.offPicTelNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transCode',style:'width:150px;',submenuSize:'auto',ref:'data:ds_bulkOdrInfoDTO.railroadAdptDstCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'육송'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'철송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더상세정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grd_section1',style:'',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_bulkOdrCommList',style:';text-align:right;',id:'gr_commList',visibleRowNum:'8',class:'wq_gvw',focusMode:'row',rowStatusVisible:'true',gridName:'오더상세정보'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column1',value:'오더번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column17',value:'BL번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column15',value:'품명순번',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column13',value:'품명상태코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'품명코드',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'품명',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column3',value:'계약작업경로순번',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column5',value:'작업경로',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'140',inputType:'text',id:'column7',value:'출발작업장코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'출발지',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'140',inputType:'text',id:'column39',value:'도착작업장코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'도착지',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'출발<br/>예정일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'출발<br/>예정시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'도착<br/>예정일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'도착<br/>예정시간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'관리<br/>단위',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column21',value:'수량단위',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column23',value:'수량',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'중량<br/>(kg)',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column67',value:'NET중량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column65',value:'CBM',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',value:'길이<br/>(M)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column61',value:'매출항목코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column59',value:'매출항목',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'단가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'140',inputType:'text',id:'column55',value:'할인할증항목코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'할인/할증',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column49',value:'관리순번',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column47',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column41',value:'사업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column43',value:'취소여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column45',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column77',value:'완료여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column75',value:'완료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'80',inputType:'text',id:'column73',value:'완료시간',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column69',value:'작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column71',value:'합적가능여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'blNo',displayMode:'label',imageClickFunction:'scwin.gr_blNo_onPopup'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'commSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commStsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'commCd',displayMode:'label',imageClickFunction:'scwin.gr_commCd_onPopup',mandatory:'true',validExp:'품명코드:yes'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commNm',displayMode:'label',mandatory:'true',validExp:'품명:yes',class:'tal'}},{T:1,N:'w2:column',A:{width:'180',inputType:'select',id:'ctrtWrkPathSeq',displayMode:'label',mandatory:'true',validExp:'계약작업경로순번:yes',chooseOption:'true',chooseOptionLabel:'선택',emptyItem:'true',class:'tal'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_ctrtWrkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ctrtWrkPathNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dptWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'dptWrkPlNm',displayMode:'label',imageClickFunction:'scwin.gr_dptWrkPlNm_onPopup'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'arvWrkPlNm',displayMode:'label',imageClickFunction:'scwin.gr_arvWrkPlNm_onPopup'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkStHh',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkEndHh',displayMode:'label',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'unitCd',displayMode:'label',mandatory:'true',validExp:'관리단위:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_unitCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qtyUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'qty',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWt',displayMode:'label',displayFormat:'#,###.000',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'netWt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cbm',displayMode:'label',dataType:'number',displayFormat:'#,###.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'len',displayMode:'label',dataType:'number',displayFormat:'#,###.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellItemNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totSellAmt',displayMode:'label',displayFormat:'#,###.00',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dcItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcItemNm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totDcAmt',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mgntSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'coCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizLongCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cnclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rmk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'completeYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'completeDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'completeHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkRsltsNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'coshippingPsblYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',id:'btn_commList',cancelFunction:'scwin.f_CancelRow',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_chgWrkPath',type:'button',class:'btn','ev:onclick':'scwin.btn_chgWrkPath_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_contract_tariff',style:'',type:'button','ev:onclick':'scwin.btn_contract_tariff_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약요율'}]}]},{T:1,N:'xf:trigger',A:{class:'btn mr12',id:'btn_cntrWebOdr',style:'',type:'button','ev:onclick':'scwin.btn_cntrWebOdr_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더복사'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group mr12'},E:[{T:1,N:'xf:input',A:{style:'width:50px;text-align:right;',id:'ed_copyWt',placeholder:'',class:'',displayFormat:'#,###.00',dataType:'number',readOnly:'true'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'=',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;text-align:right;',id:'ed_copyKg',placeholder:'',class:'',maxlength:'10.2','ev:onblur':'scwin.ed_copyKg_onblur',displayFormat:'#,###.00',dataType:'float',ignoreChar:'+',adjustMaxLength:'true'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'X',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;text-align:right;',id:'ed_copyCnt',placeholder:'',class:'',readOnly:'true',dataType:'number',displayFormat:'#,###.00'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnCopy',style:'',type:'button','ev:onclick':'scwin.btnCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더분할'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'추가물량(Kg)',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;text-align:right;',id:'ed_addKg',placeholder:'',class:'',dataType:'float',displayFormat:'#,##0',maxlength:'10.2',ignoreChar:'+',adjustMaxLength:'true'}},{T:1,N:'xf:trigger',A:{style:'',id:'btnAdd',type:'button',class:'btn','ev:onclick':'scwin.btnAdd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가오더분할'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_clear',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{id:'hid_form_group',class:'form-group mt4',style:';display:;'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'분할, 추가된 오더번호는 : ',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더번호',class:''}},{T:1,N:'xf:input',A:{id:'hid_bilgClntNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_bilgClntNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_realMchtClntNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_realMchtClntNm',style:'width:144px; height:21px; '}}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display: none;height: 100px;'},E:[{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',refDataCollection:'ds_bulkOdrInfoDTO',code:'dptZip',popupID:'hidZipCode',validExpName:'출발지:no:maxByteLength=30',validExpCode:'출발지:yes',btnId:'btn_hidZip',hideName:'true',codeId:'ed_hidZip',selectID:'retrieveZipList_tpro',nameId:'ed_hidDptDtl',style:'width:110px;display:none;',id:'udc_hidZipCode'}},{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',refDataCollection:'ds_bulkOdrInfoDTO',code:'arvZip',popupID:'hidZipCode',validExpName:'출발지:no:maxByteLength=30',validExpCode:'출발지:yes',btnId:'btn_hidArvZip',hideName:'true',codeId:'ed_hidArvZip',selectID:'retrieveZipList_tpro',nameId:'ed_hidArvDtl',style:'width:110px;display:none;',id:'udc_hidArvZipCode'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_gr_commCd',id:'udc_gr_commCd',nameId:'ed_gr_commNm',popupID:'gr_commNm',selectID:'retrieveCommInfo_tpro',style:'',validTitle:'',btnId:'btn_gr_commCd',code:'commCd',name:'commNm',refDataCollection:'ds_bulkOdrCommList'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_gr_dptWrkPlCd',id:'udc_gr_dptWrkPlCd',nameId:'ed_gr_dptWrkPlNm',popupID:'gr_dptWrkPlCd',selectID:'retrieveWrkPlInfo_tpro',style:'',validTitle:'',btnId:'btn_gr_dptWrkPlCd'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_gr_arvWrkPlCd',id:'udc_gr_arvWrkPlCd',nameId:'ed_gr_arvWrkPlNm',popupID:'gr_arvWrkPlCd',selectID:'retrieveWrkPlInfo_tpro',style:'',validTitle:'',btnId:'btn_gr_arvWrkPlCd'}}]}]}]}]})