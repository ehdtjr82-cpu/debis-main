/*amd /ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_01b.xml 162385 6e3f89c178274cd4d05fcf60d3935ca595ad8da439f29b53b0e5dd1a8d98be2f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mchtOdrList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_mchtOdrList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpDomesticClsNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkLobranNm',name:'담당점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrClsNm',name:'오더구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'의뢰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrClsCd',name:'화주오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpDomesticClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onRgnCd',name:'상차지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onRgnNm',name:'상차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnCd',name:'DOOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorRgnNm',name:'DOOR명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRgnCd',name:'하차지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRgnNm',name:'하차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDtl',name:'상차지상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDtl',name:'DOOR상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDtl',name:'하차지상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorPicNm',name:'DOOR담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorTelNo',name:'DOOR연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col23',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHh',name:'작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNeedHh',name:'작업소요시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portnm',name:'PORT명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'오더비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqCommSeq',name:'의뢰품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNeedCnt',name:'차량소요대수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlRmk',name:'품명비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_attach',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqAttachSeq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileSiz',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFilePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bulkOdrCommList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'품명상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'관리단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량(kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이(M)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcItemCd',name:'할인할증항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcItemNm',name:'할인/할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDcAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclYn',name:'취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_file'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blBkNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDtFrom',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpDomesticClsCd',name:'수출입내수구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsGu',name:'상차구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_bulkOdrInfoDTO','ev:onmodelchange':'scwin.ds_bulkOdrInfoDTO_onmodelchange',repeatNode:'map',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_bulkOdrInfoDTO_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urgentYn',name:'긴급여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'화주오더접수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'내부매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'내부매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'CLOSING날짜',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'CLOSING시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발지상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착지상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'출발작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'출발작업점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'도착작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'도착작업점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'오더담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'오더담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송회사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'오더취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'오더취소시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'오더취소사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'오더삭제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'오더삭제시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'표준원가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'순매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'표준원가적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'오더접수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'출발작업장 오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'도착작업장 오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveCtrtClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ctrtNo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_odrCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_manifestQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'HOUSE_BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tsYn',name:'TS 여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bulkYn',name:'벌크 여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ctrtWrkPath',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderBillOfLading',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billOfLading',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ctrtWrkPath'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billOfLadingCommodity',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_mchtOdrRegDTO'},E:[{T:1,N:'w2:keyInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_mchtOdrCommDTO',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'품명상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'관리단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량<br>(kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이<br>(M)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcItemCd',name:'할인할증항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcItemNm',name:'할인/할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDcAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'관리순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclYn',name:'취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'합적가능여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBulkOdrInfo',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RetrieveBulkOdrInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"OUT_DS1"},{"id":"ds_bulkOdrCommList","key":"OUT_DS2"},{"id":"ds_ctrtNo","key":"OUT_DS3"},{"id":"ds_ctrtWrkPath","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"OUT_DS1"},{"id":"ds_bulkOdrCommList","key":"OUT_DS2"},{"id":"ds_ctrtNo","key":"OUT_DS3"},{"id":"ds_ctrtWrkPath","key":"OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBulkOdrInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMchtOdrList',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RetrieveMchtOdrListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryConditionDTO","key":"IN_DS1"},{"id":"ds_mchtOdrList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_mchtOdrList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveMchtOdrList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_registBulkOrder',action:'/tn.sd.odrmgnt.bulkodrreg.RegistBulkOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"IN_DS1"},{"id":"ds_bulkOdrCommList","key":"IN_DS2"},{"id":"ds_odrCond","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_odrCond","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_registBulkOrder_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/tn.sd.odrmgnt.bulkodrreg.DeleteOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"IN_DS1"},{"id":"ds_bulkOdrCommList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mainfestBillOfLading',action:'/ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingBulkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_manifestQueryCondition","key":"IN_DS1"},{"id":"ds_billOfLading","key":"OUT_DS1"},{"id":"ds_billOfLadingCommodity","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_billOfLading","key":"OUT_DS1"},{"id":"ds_billOfLadingCommodity","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mainfestBillOfLading_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ctrtWrkPath',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ctrtWrkPath_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateBulkOrder',action:'/tn.sd.odrmgnt.bulkodrreg.UpdateBulkOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_bulkOdrInfoDTO","key":"IN_DS1"},{"id":"ds_bulkOdrCommList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updateBulkOrder_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtClnt',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveCtrtClnt","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFileList',action:'/ncall.tn.sd.webodrmgnt.bulkwebodrmgnt.RetrieveBulkPreOdrCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_file","key":"IN_DS1"},{"id":"ds_mchtOdrRegDTO","key":"OUT_DS1"},{"id":"ds_mchtOdrCommDTO","key":"OUT_DS2"},{"id":"ds_attach","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_mchtOdrRegDTO","key":"OUT_DS1"},{"id":"ds_mchtOdrCommDTO","key":"OUT_DS2"},{"id":"ds_attach","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveFileList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 조회조건 -- 요청일자 : 2008/01/01 ~ 2008/12/31 

// hidden 컴포넌트
scwin.hid_chkCtrtClntNo;
scwin.hid_odrDt; // 오더일자
scwin.hid_transCargoClsCd; // 운송화물구분코드 
scwin.hid_impExpDomesticClsCd; // 수출입내수구분코드 
scwin.hid_sellYn; // 매출여부
scwin.hid_regBranCd; // 등록점소
scwin.hid_reqClntNo; // 요청거래처번호 
scwin.hid_reqClntNm; // 요청거래처명 
scwin.hid_bilgClntNo; // 청구거래처번호 
scwin.hid_bilgClntNm; // 청구거래처명 
scwin.hid_realMchtClntNo; // 실화주거래처번호 
scwin.hid_realMchtClntNm; // 실화주거래처명 
scwin.hid_repClntNo; // 대표거래처번호 
scwin.hid_internalSellLodeptCd; // 내부매출부서코드
scwin.hid_internalSellLodeptNm; // 내부매출부서 
scwin.hid_shpCoClntNo; // 선사거래처번호 
scwin.hid_vsslCd; // 선박번호 
scwin.hid_vsslNm; // 선박명
scwin.hid_portcnt; // 항차
scwin.hid_portCd; // 항구코드 
scwin.hid_portNm; // 항구명
scwin.hid_destPortCd; // 목적항구코드 
scwin.hid_destPortNm; // 목적항구명 
scwin.hid_dmndNo; // 수요가번호 
scwin.hid_dmndNm; // 수요가명 
scwin.hid_dptWrkLobranCd; // 출발작업점소코드
scwin.hid_dptWrkLobranNm; // 출발작업점소명 
scwin.hid_arvWrkLobranCd; // 도착작업점소코드
scwin.hid_arvWrkLobranNm; // 도착작업점소명 
scwin.hid_odrPicNm; // 오더담당자 
scwin.hid_odrPicTelNo; // 오더담당자전화번호 
scwin.hid_salesPicNm; // 영업담당자 
scwin.hid_salesPicTelNo; // 영업담당자전화번호 
scwin.hid_transCoNm; // 운송회사명 
scwin.hid_transCoTelNo; // 운송회사전화번호
scwin.hid_sndDt; // 전송일자
scwin.hid_sndHh; // 전송시간
scwin.hid_odrDcsnYn; // 오더확정여부 
scwin.hid_odrDcsnDt; // 오더확정일자 
scwin.hid_odrDcsnHh; // 오더확정시간 
scwin.hid_odrCompleteYn; // 오더완료여부 
scwin.hid_odrCompleteDt; // 오더완료일자 
scwin.hid_odrCompleteHh; // 오더완료시간 
scwin.hid_odrCnclYn; // 오더취소여부 
scwin.hid_odrCnclDt; // 오더취소일자 
scwin.hid_odrCnclHh; // 오더취소시간 
scwin.hid_odrCnclItemCd; // 오더취소항목코드
scwin.hid_odrCnclRsn; // 오더취소사유 
scwin.hid_odrDelYn; // 오더삭제여부 
scwin.hid_odrDelDt; // 오더삭제일자 
scwin.hid_odrDelHh; // 오더삭제시간 
scwin.hid_totSellAmt; // 매출금액 
scwin.hid_totPchsAmt; // 매입금액 
scwin.hid_totStdAmt; // 표준원가 
scwin.hid_totPchsPrflosAmt;
scwin.hid_totStdPrflosAmt;
scwin.hid_crcCd; // 통화코드
scwin.hid_adptExchRt; // 적용환율 
scwin.hid_adptExchRtDt; // 적용환율일자 
scwin.hid_taxnClsCd; // 과세구분코드 
scwin.hid_alloccarPicId; // 배차담당자ID 
scwin.hid_alloccarPicNm; // 배차담당자 
scwin.hid_reqNo; // 화주오더접수번호
scwin.hid_hblNo; // HOUSE BL NO  
scwin.hid_msn; // HSN 
scwin.hid_hsn; // HSN 
scwin.hid_commCd; // 품명코드 
scwin.hid_tsYn; // TS 여부 

scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.memJson = $c.data.getMemInfo($p);
scwin.bizDivBulkYn = 1; // int bizDivBulkYn = DsConstants.YN_YES;	// 사업부문벌크여부
// scwin.bizDivBulkYn = scwin.param.bizDivBulkYn        // 벌크
// scwin.loUpperLobranCd = ""; // 점소
scwin.loUpperLobranCd = scwin.memJson.loUpperLobranCd; // 점소

// // 세션정보 가져오기
// LoginDTO loginDTO = LoginUtil.getLoginDTO(request);
scwin.gubun = 0; // 중복 체크 flag
scwin.button = ""; // 버튼 체크 flag
scwin.flag = ""; // 저장시 등록, 수정 체크 flag
scwin.posnClsCd = ""; // 업체구분 flag

scwin.onpageload = function () {
  scwin.f_SetDataHeader();
  // scwin.f_SetDefaultData();

  lc_expimpDomesticClsCd.setValue(""); // 수출입 구분
  lc_districtCd.setValue(""); // 권역구분
  //cfSetIMEModeActiveObjects([txt_lobranNm, txt_txnBankNm, txt_dpstr]);  // IME 한글입력

  //버튼 및 그리드 제어

  gr_commList.setReadOnly("grid", true); // gr_commList.Editable = false;
};

// UDC에 값 세팅 방법 
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = async function () {
  console.log("----------- onUdcCompleted");
  scwin.f_SetDefaultData();

  // odrMainData 이거 에러뜸.
  $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_update, btn_save, btn_delete]);
  ed_reqDtFrom.setValue(scwin.vCurDate); // 조회기준일
  ed_reqDtTo.setValue(scwin.vCurDate); // 조회기준일

  ed_reqDtFrom.focus();
  const codeOptions = [{
    grpCd: "TN003",
    compID: "lc_odrClassCd"
  },
  // 오더구분 // <%= GauceUtil.getCodeList("TN003") %>
  {
    grpCd: "SD114",
    compID: "lc_selfClsCd",
    opt: {
      "range": "1,C"
    }
  },
  //    
  {
    grpCd: "LO102",
    compID: "gr_commList:unitCd"
  }
  //,{ grpCd: "LO121", compID: "acb_wrkPlClsCd", opt :{"range" : "1,03"} }   //작업장구분 GauceUtil.getCodeList("LO121",1,"03");
  ];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "RegionEBC",
    param2: "retrieveDistrict",
    param3: ["", "", "1", "2", "BBK"],
    compID: "lc_districtCd"
  }];
  await $c.data.setGauceUtil($p, param);
};
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, tb_searchField);
  scwin.f_SetDefaultData();
  ed_reqDtFrom.setValue(scwin.vCurDate); // 조회기준일
  ed_reqDtTo.setValue(scwin.vCurDate); // 조회기준일
  ed_reqDtFrom.focus();
  lc_expimpDomesticClsCd.setValue(""); // 수출입 구분
  lc_districtCd.setValue(""); // 권역구분
};

// 조회 버튼 클릭 이벤트
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve('1');
};

//-------------------------------------------------------------------------getLobranCd
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  scwin.hid_odrDcsnYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더확정여부
  scwin.hid_odrCnclYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더취소여부
  scwin.hid_odrDelYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더삭제여부
  scwin.hid_odrCompleteYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더완료여부
  scwin.hid_regBranCd = scwin.loUpperLobranCd; // "<%= loginDTO.getLobranCd()%>";	// 등록점소 - 사용자 설정 물류점소
  scwin.hid_sellYn = 1; // "<%= DsConstants.YN_YES%>";		// 매출여부

  scwin.hid_transCargoClsCd = "B"; // "<%= DsConstants.ODR_BULK%>";       // 운송화물구분코드

  // 계약거래처 데이타 설정
  scwin.f_clearDataSetRetrieveCtrtClnt();
  lc_odrKndCd.setValue("D3"); // 오더종류..
  lc_selfClsCd.setValue("LI"); //자가구분
};

//-------------------------------------------------------------------------
// DataSet의 Header 정보 생성
//-------------------------------------------------------------------------
scwin.f_SetDataHeader = function () {
  scwin.f_dsManifestQueryConditionHeader(); // 적하목록조회조건 (BL / 선사항차별 품명 조회 조건 )
};

//-------------------------------------------------------------------------
// DataSet Header 정의 - 적하목록조회조건 (BL / 선사항차별 품명 조회 조건 )
//-------------------------------------------------------------------------    
scwin.f_dsManifestQueryConditionHeader = function () {
  // var dsHeader = "odrKndCd:STRING(2)"			//오더종류 : 수입본선, 수입하역  구분하기 위함
  //     + ",msn:INT(4)" 				//MSN
  //     + ",hsn:INT(4)" 				//HSN
  //     + ",hblNo:STRING(20)" 			//HOUSE_BL번호
  //     + ",cvsslMgntNo:STRING(8)"  	//본선관리번호
  //     + ",impExpClsCd:STRING(1)"		//수출입구분코드
  //     + ",fioBtClsCd:STRING(2)"		//FIO_BT구분코드  
  //     + ",commCd:STRING(8)"           // 품명코드   
  //     + ",tsYn:STRING(1)"				// TS 여부
  //     + ",bulkYn:STRING(1)";			// 벌크 여부

  // ds_manifestQueryCondition.SetDataHeader(dsHeader);

  // 조회 DataSet 초기화
  // ds_manifestQueryCondition.insertRow();
  ds_manifestQueryCondition.set("odrKndCd", "");
  ds_manifestQueryCondition.set("msn", -1);
  ds_manifestQueryCondition.set("hsn", -1);
  ds_manifestQueryCondition.set("hblNo", "");
  ds_manifestQueryCondition.set("cvsslMgntNo", "");
  ds_manifestQueryCondition.set("impExpClsCd", "");
  ds_manifestQueryCondition.set("fioBtClsCd", "");
  ds_manifestQueryCondition.set("commCd", "");
  ds_manifestQueryCondition.set("tsYn", "");
  ds_manifestQueryCondition.set("bulkYn", scwin.bizDivBulkYn);
};

//-------------------------------------------------------------------------
// DataSet 초기화 처리 : 계약거래처 DataSet 을 초기화 한다.
//-------------------------------------------------------------------------
scwin.f_clearDataSetRetrieveCtrtClnt = function () {
  // 계약거래처 DataSet 을 초기화
  ds_retrieveCtrtClnt.setEmptyValue();
  // scwin.f_dsRetrieveCtrtClntHeader();

  // 계약거래처 DataSet 기본값 설정
  // ds_retrieveCtrtClnt.AddRow();
  ds_retrieveCtrtClnt.set("ctrtClntNo", "");
  ds_retrieveCtrtClnt.set("bizDivCntrYn", 0);
  ds_retrieveCtrtClnt.set("bizDivBulkYn", 1); // 일단 벌크만 된다...
};

//-------------------------------------------------------------------------
// 목록 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function (gubun) {
  if ($c.gus.cfIsNull($p, ed_reqDtFrom.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["요청일자"]);
    ed_reqDtFrom.focus();
    return;
  } else if ($c.gus.cfIsNull($p, ed_reqDtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["요청일자"]);
    ed_reqDtTo.focus();
    return;
  }

  // 요청일자 조회조건  시작일의 값이 더 큰 경우에 return
  if (ed_reqDtFrom.getValue().trim() > ed_reqDtTo.getValue().trim()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, new Array("요청일자 조회종료일", "요청일자 조회시작일"));
    ed_reqDtTo.focus();
    return false;
  }
  $c.sbm.execute($p, sbm_retrieveMchtOdrList); // tr_retrieveMchtOdrList.post();

  if (gubun == "1") {
    // 초기화..
    scwin.f_clear();
    //버튼 및 그리드 제어
    // asis 에 코드 있으나 일단 주석처리...
    // $c.gus.cfDisableObjects([odrMainData, odrDetailData, btn_commList, btn_update, btn_save, btn_delete]);
    gr_commList.setReadOnly("grid", true); // gr_commList.Editable = false;
  }
};

//-------------------------------------------------------------------------
// 오더정보  조회
//-------------------------------------------------------------------------
scwin.f_retrieveOdrInfo = function () {
  if (ed_odrNo.getValue().trim() == null || ed_odrNo.getValue().trim() == "") {
    $c.win.alert($p, "검색하실 오더번호를 입력해주세요");
    ed_odrNo.focus();
    return;
  }

  // tr_retrieveBulkOdrInfo.Action = "/tn.sd.odrmgnt.bulkodrreg.RetrieveBulkOdrInfoCMD.do?odrNo=" + ed_odrNo.getValue().trim();

  ds_bulkOdrInfoDTO.setCellData(ds_bulkOdrInfoDTO.rowPosition, "odrNo", ed_odrNo.getValue().trim());
  // ds_bulkOdrInfoDTO.set("odrNo", ed_odrNo.getValue().trim());
  $c.sbm.execute($p, sbm_retrieveBulkOdrInfo); // tr_retrieveBulkOdrInfo.post();
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_clear = function () {
  // 데이터 셋 초기화...
  ds_bulkOdrInfoDTO.removeAll();
  ds_bulkOdrCommList.removeAll();
  // ds_bulkOdrInfoDTO.AddRow();
  ds_bulkOdrCommList.insertRow();
  ds_bulkOdrCommList.setCellData(0, "unitCd", "KG"); //관리단위를 KG으로 셋팅..

  ds_ctrtWrkPath.removeAll();
  ds_ctrtWrkPath.insertRow();
  ds_ctrtWrkPath.setCellData(0, 'ctrtWrkPathSeq', 0);
  ds_ctrtWrkPath.setCellData(0, 'ctrtWrkPathNm', "선택");
  scwin.f_SetDefaultData();
  ed_wrkStDt.setValue(scwin.vCurDate);
  ed_wrkEndDt.setValue(scwin.vCurDate);
  scwin.button = "CLEAR";
  $c.gus.cfEnableObjects($p, [odrMainData, odrDetailData, btn_save, btn_commList]);
  $c.gus.cfDisableObjects($p, [btn_new, btn_update, btn_delete]);
  gr_commList.setReadOnly("grid", false); // gr_commList.Editable = true;

  //내수 및 수출 오더에 대하여는 본선번호 disable
  if (lc_odrKndCd.getValue() == "B2") {
    $c.gus.cfEnableObjects($p, [ed_cvsslMgntNo, img_PopUp3, img_PopUp4]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_cvsslMgntNo, img_PopUp3, img_PopUp4]);
  }
  scwin.f_setSellAndBilgDept(lc_odrKndCd.getValue());
};

//-------------------------------------------------------------------------
// 상세 정보 등록 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let validateVal = $c.gus.cfValidate($p, [lc_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_dptZip, ed_arvZip]);
  if (!validateVal) {
    return;
  }
  if (lc_ctrtNo.getValue() == "선택") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
    lc_ctrtNo.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, scwin.hid_regBranCd)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002 + "\n 사용자 정보[물류점소]를 확인하시기 바랍니다.", new Array("등록점소코드"));
    return false;
  }
  if (!$c.gus.cfValidate($p, [ed_sellLodeptCd, ed_bilgLodeptCd, ed_dptWrkPlCd, ed_wrkStDt, ed_wrkStHh, ed_arvWrkPlCd, ed_wrkEndDt, ed_wrkEndHh])) return;

  // 출발작업일자가 도착작업일자보다 큰 경우
  if (ed_wrkStDt.getValue().trim() > ed_wrkEndDt.getValue().trim()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, new Array("도착일자", "출발일자"));
    ed_wrkEndDt.focus();
    return false;
  }

  // 출발작업시간이 도착작업시간보다 큰 경우
  if (ed_wrkStDt.getValue().trim() == ed_wrkEndDt.getValue().trim() && ed_wrkStHh.getValue().trim() >= ed_wrkEndHh.getValue().trim()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, new Array("도착시간", "출발시간"));
    ed_wrkEndHh.focus();
    return false;
  }

  //수량,중량,CBM 중의 하나이상은 0이 아니여야 한다.
  for (var i = 0; i < ds_bulkOdrCommList.getTotalRow(); i++) {
    if (eval(ds_bulkOdrCommList.getCellData(i, "qty")) == 0 && eval(ds_bulkOdrCommList.getCellData(i, "grossWt")) == 0 && eval(ds_bulkOdrCommList.getCellData(i, "cbm")) == 0) {
      await $c.win.alert($p, "수량,중량,CBM 중의 하나이상은 0이 아니여야 합니다.");
      ds_bulkOdrCommList.rowPosition = i;
      gr_commList.setFocusedCell(i, "qty", false); // gr_commList.SetColumn("qty");
      return;
    }
  }

  // 수출입구분 셋팅
  scwin.hid_impExpDomesticClsCd = scwin.f_setImpExpDomesticClsCd(); // 수출입내수구분코드

  if (!scwin.f_gridValidChk()) {
    return;
  }
  if (scwin.button == "UPDATE") {
    $c.sbm.execute($p, sbm_retrieveBulkOdrInfo); // tr_updateBulkOrder.post();
  } else {
    $c.sbm.execute($p, sbm_registBulkOrder); // tr_registBulkOrder.post();
  }
};

//-------------------------------------------------------------------------
// 그리드 필수체크
//-------------------------------------------------------------------------
scwin.f_gridValidChk = function () {
  //오더품목  필수 입력사항을 체크
  if ($c.gus.cfValidate($p, [gr_commList])) {
    // 작업경로 선택 사항 확인
    for (var idx = 0; idx < ds_bulkOdrCommList.getTotalRow(); idx++) {
      if (ds_bulkOdrCommList.getCellData(idx, "ctrtWrkPathSeq") <= 0) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, new Array("작업경로"));
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_update = function () {
  scwin.button = "UPDATE";
  $c.gus.cfEnableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_new, btn_save, btn_delete]);
  $c.gus.cfDisableObjects($p, [btn_update]);
  gr_commList.setReadOnly('grid', false); // gr_commList.Editable = true;

  $c.gus.cfDisableObjects($p, [lc_odrKndCd, ed_ctrtClntNo, lc_ctrtNo, ed_cvsslMgntNo, ed_lineCd, txt_shpCoClntNm, lc_selfClsCd, ed_dptWrkPlCd, ed_dptZip, ed_wrkStDt, ed_wrkStHh, ed_arvWrkPlCd, ed_arvZip, ed_wrkEndDt, ed_wrkEndHh, txa_rmk, img_PopUp1, img_PopUp2, img_PopUp3, img_PopUp4, img_PopUp5, img_PopUp6, img_PopUp7, img_PopUp8, img_PopUp9, img_PopUp10, img_PopUp11]);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_delete = async function () {
  scwin.button = "DELETE";

  // let confirmVal = await $c.win.confirm("오더번호 : " + MSG_CM_CRM_008, new Array(ed_odrNo.getValue()));
  let confirmVal = await $c.win.confirm($p, "오더번호 : " + MSG_CM_CRM_008, ed_odrNo.getValue());
  if (confirmVal) {
    // ds_bulkOdrInfoDTO.UseChangeInfo = "false";
    // ds_bulkOdrCommList.UseChangeInfo = "false";
    $c.sbm.execute($p, sbm_delete); // tr_delete.Post();
  }
};

//-------------------------------------------------------------------------
// 상세 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_bulkOdrCommList.insertRow();
  var row = ds_bulkOdrCommList.rowPosition;
  if (ds_bulkOdrCommList.getTotalRow() > 1) {
    for (var i = 0; i < ds_bulkOdrCommList.getTotalRow(); i++) {
      // to-do

      // ds_bulkOdrCommList.NameValue(row, ds_bulkOdrCommList.ColumnID(i)) = ds_bulkOdrCommList.NameValue(row - 1, ds_bulkOdrCommList.ColumnID(i));
    }
  } else {
    ds_bulkOdrCommList.setCellData(row, "dptWrkPlCd", ds_bulkOdrInfoDTO.get("dptWrkPlCd"));
    ds_bulkOdrCommList.setCellData(row, "dptWrkPlNm", ds_bulkOdrInfoDTO.get("dptWrkPlNm"));
    ds_bulkOdrCommList.setCellData(row, "arvWrkPlCd", ds_bulkOdrInfoDTO.get("arvWrkPlCd"));
    ds_bulkOdrCommList.setCellData(row, "arvWrkPlNm", ds_bulkOdrInfoDTO.get("arvWrkPlNm"));
    ds_bulkOdrCommList.setCellData(row, "wrkStDt", ds_bulkOdrInfoDTO.get("wrkStDt"));
    ds_bulkOdrCommList.setCellData(row, "wrkStHh", ds_bulkOdrInfoDTO.get("wrkStHh"));
    ds_bulkOdrCommList.setCellData(row, "wrkEndDt", ds_bulkOdrInfoDTO.get("wrkEndDt"));
    ds_bulkOdrCommList.setCellData(row, "wrkEndHh", ds_bulkOdrInfoDTO.get("wrkEndHh"));
  }
};

//-------------------------------------------------------------------------
// 상세 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  // ds_bulkOdrCommList.DeleteRow(ds_bulkOdrCommList.rowPosition);
  ds_bulkOdrCommList.deleteRow(ds_bulkOdrCommList.rowPosition);
};

//-------------------------------------------------------------------------
// 상세 취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  // ds_bulkOdrCommList.UndoMarked();
  ds_bulkOdrCommList.deleteRow(ds_bulkOdrCommList.rowPosition);
  ds_bulkOdrCommList.removeRow(ds_bulkOdrCommList.rowPosition);
};

//-------------------------------------------------------------------------
//오더반려
//-------------------------------------------------------------------------
scwin.f_reject = async function () {
  if (ds_mchtOdrList.rowPosition < 1) {
    $c.win.alert($p, "선택된 웹오더정보가 없습니다.");
    return;
  }
  var rtnList = new Array();
  var arrParam = new Array();
  arrParam[0] = ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "reqNo");

  // var sUrl = "/tn/sd/odrmgnt/bulkodrreg/tn_202_02_01p.jsp?paramTitle=오더반려팝업";

  // rtnList = window.showModalDialog(sUrl, arrParam, "dialogWidth:400px; dialogHeight:250px; status:No");

  let v_url = "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_01p.xml";
  let opts = {
    id: "pupup",
    popupName: "오더반려팝업",
    modal: true,
    type: "browserPopup",
    width: 400,
    height: 250,
    title: "오더반려팝업"
  };
  rtnList = await $c.win.openPopup($p, v_url, opts, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "1") {
      scwin.f_retrieve("2");
    }
  }
};

//-------------------------------------------------------------------------
// 동부 오더로 이관하여 오더생성
//-------------------------------------------------------------------------
scwin.f_convertMchtOdr = function () {
  if (ds_mchtOdrList.getRowPosition() < 0 || ds_mchtOdrList.getRowPosition() == null) {
    $c.win.alert($p, "선택된 웹오더정보가 없습니다.");
    return;
  }

  // 데이터 셋 초기화...
  ds_bulkOdrInfoDTO.removeAll();
  ds_bulkOdrCommList.removeAll();
  // ds_bulkOdrInfoDTO.AddRow();
  ds_bulkOdrCommList.insertRow();
  scwin.button = "CLEAR";
  $c.gus.cfEnableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_new, btn_save, btn_delete]);
  $c.gus.cfDisableObjects($p, [btn_update]);
  gr_commList.setReadOnly('grid', false); // gr_commList.Editable = true;
  scwin.f_setSellAndBilgDept(lc_odrKndCd.getValue());

  // 동부오더로 복사..
  scwin.f_copyMchtOdrToDMOdr();

  //내수 및 수출 오더에 대하여는 본선번호 disable
  if (lc_odrKndCd.getValue() == "B2") {
    $c.gus.cfEnableObjects($p, [ed_cvsslMgntNo, img_PopUp3, img_PopUp4]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_cvsslMgntNo, img_PopUp3, img_PopUp4]);
  }
  ed_ctrtClntNo.focus();
};
scwin.f_copyMchtOdrToDMOdr = function () {
  ///////////////////////////////////////////////////////
  // 오더 메인 데이터 Copy
  ///////////////////////////////////////////////////////

  ds_bulkOdrInfoDTO.setCellData(ds_mchtOdrList.rowPosition, "transCargoClsCd", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "transCargoClsCd")); // 운송화물구분코드
  ds_bulkOdrInfoDTO.setCellData(ds_mchtOdrList.rowPosition, "impExpDomesticClsCd", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "expimpDomesticClsCd")); // 수출입내수구분코드
  // lc_odrKndCd 이거와 컴버트해서 연결해야 한다.
  ds_bulkOdrInfoDTO.setCellData(ds_mchtOdrList.rowPosition, "odrKndCd", scwin.f_convertExpImpCd(ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "expimpDomesticClsCd"))); // 오더종류코드
  ds_bulkOdrInfoDTO.setCellData(ds_mchtOdrList.rowPosition, "ctrtClntNo", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "ClntNo")); // 계약처코드
  ds_bulkOdrInfoDTO.setCellData(ds_mchtOdrList.rowPosition, "ctrtClntNm", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "ClntNm")); // 계약처 명
  ds_bulkOdrInfoDTO.setCellData(ds_mchtOdrList.rowPosition, "clntMgntNo", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "reqNo")); // 화주오더접수번호

  // 오더와 품명의 RMK를 구분해야 하는데, 어떻게 하지.. 
  var strNewLine = "";
  if (ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "odrRmk").length > -1) {
    strNewLine = "\n";
    let posVal = ds_mchtOdrList.rowPosition;
    ds_bulkOdrInfoDTO.setCellData(ds_mchtOdrList.rowPosition, "rmk", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "odrRmk") + strNewLine + ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "dtlRmk")); // 비고

    ds_bulkOdrInfoDTO.setCellData(posVal, "lineCd", ds_mchtOdrList.getCellData(posVal, "lineNm")); // LINE코드
    ds_bulkOdrInfoDTO.setCellData(posVal, "portcnt", ds_mchtOdrList.getCellData(posVal, "portcnt")); // 항차
    ds_bulkOdrInfoDTO.setCellData(posVal, "closeDt", ds_mchtOdrList.getCellData(posVal, "closeDt")); // CLOSING날짜
    ds_bulkOdrInfoDTO.setCellData(posVal, "closeHh", ds_mchtOdrList.getCellData(posVal, "closeHh")); // CLOSING시간
    ds_bulkOdrInfoDTO.setCellData(posVal, "selfClsCd", "LI"); // 자가구분
    ds_bulkOdrInfoDTO.setCellData(posVal, "dptWrkPlCd", ds_mchtOdrList.getCellData(posVal, "onRgnCd")); // 출발작업장코드
    ds_bulkOdrInfoDTO.setCellData(posVal, "dptWrkPlNm", ds_mchtOdrList.getCellData(posVal, "onRgnNm")); // 출발작업장명
    ds_bulkOdrInfoDTO.setCellData(posVal, "dptZip", ds_mchtOdrList.getCellData(posVal, "onZip")); // 출발작업장 우편번호
    ds_bulkOdrInfoDTO.setCellData(posVal, "arvWrkPlCd", ds_mchtOdrList.getCellData(posVal, "offRgnCd")); // 도착작업장코드
    ds_bulkOdrInfoDTO.setCellData(posVal, "arvWrkPlNm", ds_mchtOdrList.getCellData(posVal, "offRgnNm")); // 도착작업장명
    ds_bulkOdrInfoDTO.setCellData(posVal, "arvZip", ds_mchtOdrList.getCellData(posVal, "offZip")); // 도착작업장 우편번호
    ds_bulkOdrInfoDTO.setCellData(posVal, "dptDtl", ds_mchtOdrList.getCellData(posVal, "onRgnNm")); // 출발지상세
    ds_bulkOdrInfoDTO.setCellData(posVal, "arvDtl", ds_mchtOdrList.getCellData(posVal, "offRgnNm")); // 도착지상세
    ds_bulkOdrInfoDTO.setCellData(posVal, "wrkStDt", ds_mchtOdrList.getCellData(posVal, "wrkDt")); // 출발일자
    ds_bulkOdrInfoDTO.setCellData(posVal, "wrkStHh", ds_mchtOdrList.getCellData(posVal, "wrkHh")); // 출발시간
    ds_bulkOdrInfoDTO.setCellData(posVal, "wrkEndDt", ds_mchtOdrList.getCellData(posVal, "wrkDt")); // 도착일자

    // asis 와 동일하게 하기 위해 추가한 코드.
    ed_dptWrkPlCd.setValue(ds_mchtOdrList.getCellData(posVal, "onRgnCd")); // 출발작업장코드
    txt_dptDtl.setValue(ds_mchtOdrList.getCellData(posVal, "onRgnNm")); // 출발작업장명

    ed_arvWrkPlCd.setValue(ds_mchtOdrList.getCellData(posVal, "offRgnCd")); // 도착작업장코드
    txt_arvDtl.setValue(ds_mchtOdrList.getCellData(posVal, "offRgnNm")); // 도착작업장명
    txa_rmk.setValue(ds_mchtOdrList.getCellData(posVal, "dtlRmk")); // 비고

    scwin.hid_odrDcsnYn = 0; // 오더확정여부
    scwin.hid_odrCnclYn = 0; // 오더취소여부
    scwin.hid_odrDelYn = 0; // 오더삭제여부
    scwin.hid_odrCompleteYn = 0; // 오더완료여부
    scwin.hid_regBranCd = scwin.loUpperLobranCd; // "<%= loginDTO.getLobranCd()%>";	// 등록점소 - 사용자 설정 물류점소
    scwin.hid_sellYn = 1; // 매출여부
    scwin.hid_reqNo = ds_mchtOdrList.getCellData(posVal, "reqNo"); // 화주오더 접수번호

    ///////////////////////////////////////////////////////
    // 품명리스트 Copy
    ///////////////////////////////////////////////////////
    ds_bulkOdrCommList.setCellData(posVal, "commSeq", ds_mchtOdrList.getCellData(posVal, "reqCommSeq")); // 품명순번
    ds_bulkOdrCommList.setCellData(posVal, "blNo", ds_mchtOdrList.getCellData(posVal, "rltNo")); // BL번호
    ds_bulkOdrCommList.setCellData(posVal, "commNm", ds_mchtOdrList.getCellData(posVal, "commNm")); // 품명
    ds_bulkOdrCommList.setCellData(posVal, "qty", ds_mchtOdrList.getCellData(posVal, "qty")); // 수량
    ds_bulkOdrCommList.setCellData(posVal, "grossWt", ds_mchtOdrList.getCellData(posVal, "wt")); // 중량
    ds_bulkOdrCommList.setCellData(posVal, "cbm", ds_mchtOdrList.getCellData(posVal, "cbm")); // CBM
    ds_bulkOdrCommList.setCellData(posVal, "wrkStDt", ds_mchtOdrList.getCellData(posVal, "wrkDt")); // 작업시작일자
    ds_bulkOdrCommList.setCellData(posVal, "wrkStHh", ds_mchtOdrList.getCellData(posVal, "wrkHh")); // 작업시작시간
    ds_bulkOdrCommList.setCellData(posVal, "dptWrkPlCd", ds_mchtOdrList.getCellData(posVal, "onRgnCd")); // 출발작업장코드
    ds_bulkOdrCommList.setCellData(posVal, "dptWrkPlNm", ds_mchtOdrList.getCellData(posVal, "onRgnNm")); // 출발작업장명
    ds_bulkOdrCommList.setCellData(posVal, "arvWrkPlCd", ds_mchtOdrList.getCellData(posVal, "offRgnCd")); // 도착작업장코드
    ds_bulkOdrCommList.setCellData(posVal, "arvWrkPlNm", ds_mchtOdrList.getCellData(posVal, "offRgnNm")); // 도착작업장명
    ds_bulkOdrCommList.setCellData(posVal, "rmk", ds_mchtOdrList.getCellData(posVal, "dtlRmk")); // 비고
    ds_bulkOdrCommList.setCellData(posVal, "unitCd", "KG"); //관리단위를 KG으로 셋팅..

    ds_ctrtWrkPath.removeAll(); // ds_ctrtWrkPath.ClearData();
    ds_ctrtWrkPath.insertRow(); // ds_ctrtWrkPath.AddRow();
    ds_ctrtWrkPath.setCellData(posVal, 'ctrtWrkPathSeq', 0);
    ds_ctrtWrkPath.setCellData(posVal, 'ctrtWrkPathNm', "선택");
    ds_bulkOdrCommList.setCellData(posVal, "ctrtWrkPathSeq", 0);
  }
};

//-------------------------------------------------------------------------
// 화주 수출입내수 구분코드를 동부오더의 오더종류로 바꾼다.
//-------------------------------------------------------------------------
scwin.f_convertExpImpCd = function (expImpCd) {
  var odrKndCd = "";
  switch (expImpCd) {
    case "I":
      // 수입
      odrKndCd = "B2";
      break;
    case "O":
      // 수출
      odrKndCd = "B4";
      break;
    case "D":
      // 내수
      odrKndCd = "D3";
      break;
  }
  return odrKndCd;
};
scwin.f_setImpExpDomesticClsCd = function () {
  var impExpDomesticClsCd = "";
  var odrKndCd = lc_odrKndCd.getValue();
  switch (odrKndCd) {
    case "B2":
      // 수입
      impExpDomesticClsCd = "I";
      break;
    case "B4":
      // 수출
      impExpDomesticClsCd = "O";
      break;
    default:
      // 내수 : DsConstants.ODR_KND_CD_DOMESTIC_FCTY_CRRYOUT_ODR 외...
      impExpDomesticClsCd = "D";
      break;
  }
  return impExpDomesticClsCd;
};

// 계약 거래처코드팝업 case 1:
scwin.udc__ctrtClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_ctrtClntNo.getValue(), txt_ctrtClntNm.getValue(), 'T', 'F');
};

// 계약 거래처코드팝업 콜백
scwin.udc__ctrtClnt_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ed_ctrtClntNo.setValue(rtnList[0]); //계약 거래처코드
      txt_ctrtClntNm.setValue(rtnList[1]); //계약 거래처명
      txt_ctrtClntNm.setValue(rtnList[1]); //계약 거래처명

      scwin.hid_chkCtrtClntNo = rtnList[0]; //계약 거래처코드
      scwin.hid_repClntNo = rtnList[2]; // 대표 거래처코드

      if (ed_ctrtClntNo.getValue() == "124994") {
        ed_sellLodeptCd.setValue("4A5");
        ed_bilgLodeptCd.setValue("4A5");
        scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd, txt_sellLodeptNm, 2, true);
        scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 3, true);
      }

      // 계약 거래처 - 계약정보 조회
      // 1. 계약번호
      // 2. 계약번호 별 - 요청거래처, 실화주, 청구거래처 조회
      //f_clearClntDataSet();	// DataSet 초기화

      ds_retrieveCtrtClnt.setCellData(ds_retrieveCtrtClnt.rowPosition, "odrKndCd", lc_odrKndCd.getValue());
      $c.sbm.execute($p, sbm_retrieveCtrtClnt); // tr_retrieveCtrtClnt.post();
    } else {
      ed_ctrtClntNo.setValue(scwin.hid_chkCtrtClntNo);
      txt_ctrtClntNm.setValue(txt_ctrtClntNm);
    }
  } else {
    ed_ctrtClntNo.setValue(""); //계약 거래처코드
    txt_ctrtClntNm.setValue(""); //계약 거래처명
    txt_ctrtClntNm.setValue(""); //계약 거래처명

    scwin.hid_chkCtrtClntNo = ""; //계약 거래처코드
    scwin.hid_repClntNo = ""; // 대표 거래처코드

    // 계약 거래처 - 계약정보 조회
    ds_retrieveCtrtClnt.setCellData(ds_retrieveCtrtClnt.rowPosition, "odrKndCd", lc_odrKndCd.getValue());
    $c.sbm.execute($p, sbm_retrieveCtrtClnt); // tr_retrieveCtrtClnt.post();
  }
};

// 매출 부서코드팝업 case 2:
scwin.udc_sellLodept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_sellLodeptCd.getValue(), txt_sellLodeptNm.getValue(), 'T', 'F');
};

// 매출 부서코드팝업 콜백
scwin.udc_sellLodept_callBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sellLodeptCd, txt_sellLodeptNm); // 매출부서코드, 출부서명
};

// 청구 부서코드팝업 case 3:
scwin.udc_bilgLodept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'T', 'F');
};

// 청구 부서코드팝업 콜백
scwin.udc_bilgLodept_callBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm); // 청구부서코드, 청구부서명
};

// 본선번호 팝업 클릭 이벤트 case 4:
scwin.img_PopUp3_onclick = async function (disGubun, pCode, pName, pClose, pAllSearch) {
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
  // rtnList = window.showModalDialog('/ds/op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업', arrParam,
  //     "dialogWidth:900px; dialogHeight:400px; status:No");
  let v_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let opts = {
    id: "pupup",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 900,
    height: 400,
    title: "본선관리번호검색팝업"
  };
  rtnList = await $c.win.openPopup($p, v_url, opts, arrParam);
  await scwin.img_PopUp3_callback(rtnList);
};
scwin.img_PopUp3_callback = async function (rtnList) {
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
      if (lc_odrKndCd.getValue() != "B4") {
        // 벌크 수출 일반 오더 가 아닌경우

        // 본선관리번호 변경시 품명 , B/L 정보 삭제
        //f_clearBillOfLadingCommodity();
      }
      ed_cvsslMgntNo.setValue(rtnList[0]); //본선관리번호
      scwin.hid_vsslCd = rtnList[1]; //선박코드
      scwin.hid_vsslNm = rtnList[2]; //선박명
      scwin.hid_portcnt = rtnList[9]; //선사항차
      scwin.hid_portCd = rtnList[11]; //항구코드

      if (lc_odrKndCd.getValue() == "B2") {
        ed_lineCd.setValue(""); //Line코드
        txt_shpCoClntNm.setValue("");
        scwin.hid_shpCoClntNo = "";
      } else {
        ed_lineCd.setValue(rtnList[14]); //Line코드
      }

      //Line명과 선사거래처 가져오기
      // 오더종류별 설정
      if (lc_odrKndCd.getValue() == "B2") {
        // 수입일반오더인 경우
        ed_closeDt.setValue(rtnList[5]); //입항일자
        ed_closeHh.setValue(rtnList[6]); //입항시간
      }
    }
  } else {
    if (lc_odrKndCd.getValue() == "B4") {
      // 벌크 수출 일반 오더인 경우
      $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, hid_vsslCd, hid_portcnt, ed_lineCd, txt_lineNm, txt_shpCoClntNm]);
      $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
      scwin.hid_portCd = "";
    } else {
      // 벌크 수출 일반 오더 가 아닌경우
      $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, hid_vsslCd, hid_portcnt, ed_closeDt, ed_closeHh, ed_wrkStDt, ed_wrkStHh, ed_dptWrkPlCd, txt_dptWrkPlNm, ed_lineCd, txt_lineNm, txt_shpCoClntNm]);
      $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
      scwin.hid_portCd = "";
    }
  }
  // 수입본선, 벌크 부두간 TS 오더인 경우선박코드,항차,항구 정보로 적하목록 BL 품명 정보를 조회한다.
  //f_chkBlList();
};

// LINE 코드팝업 case 5:
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_lineCd.getValue(), txt_lineNm.getValue(), 'T', 'F');
};

// LINE 코드팝업 콜백
scwin.udc_line_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      ed_lineCd.setValue(rtnList[0]); //LINE 코드
      txt_lineNm.setValue(rtnList[1]); //LINE 명

      scwin.hid_shpCoClntNo = rtnList[4]; //선사코드
      txt_shpCoClntNm.setValue(rtnList[5]); //선사명
    } else {
      ed_lineCd.setValue(ed_lineCd.getValue());
      txt_shpCoClntNm.setValue(txt_shpCoClntNm.getValue());
    }
  } else {
    ed_lineCd.setValue(""); //LINE 코드
    txt_lineNm.setValue(""); //LINE 명
    scwin.hid_shpCoClntNo = ""; //선사코드
    txt_shpCoClntNm.setValue(""); //선사명
  }
};

// 출발작업장 코드팝업 case 6:
// scwin.btn_dptWrkPl_onclick = function (e) {
//     scwin.udc_dptWrkPl_onclickEvent()
// };

// 출발작업장 코드팝업 case 6:
scwin.udc_dptWrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), 'T', 'F');
};
scwin.udc_dptWrkPl_callback = function (rtnList) {
  // $c.gus.cfSetReturnValue(rtnList, ed_dptWrkPlCd, txt_dptWrkPlNm);  // 출발지코드, 출발지명

  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, txt_dptDtl); // 출발지코드, 출발지명
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      scwin.hid_dptWrkLobranCd = rtnList[4]; //작업점소
      scwin.f_gridValueSet('dptWrkPlCd');
      if (rtnList[6].length == 6) {
        ed_dptZip.setValue(rtnList[6]); //우편번호
        scwin.f_openZipPopUp(1, 'T');
      }
    }
  } else {
    ed_dptZip.setValue("");
    txt_dptDtl.setValue("");
    scwin.f_gridValueSet('dptWrkPlCd');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  var pValue = "";
  var districtGrpCd = ""; // 계약권역 구분코드
  if (ds_ctrtNo.getTotalRow() > 0) districtGrpCd = ds_ctrtNo.getCellData(ds_ctrtNo.rowPosition, "ctrtDistrictCd");
  switch (disGubun) {
    case 1:
      pWhere = ",CTRT";
      // 계약 거래처코드팝업

      rtnList = udc__ctrtClnt.cfCommonPopUp(scwin.udc__ctrtClnt_callBack // XML상의 SELECT ID
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

      rtnList = udc_sellLodept.cfCommonPopUp(scwin.udc_sellLodept_callBack // XML상의 SELECT ID
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

      // $c.gus.cfSetReturnValue(rtnList, ed_sellLodeptCd, txt_sellLodeptNm);  // 매출부서코드, 출부서명
      break;
    case 3:
      // 청구 부서코드팝업
      pValue = "T,J,,,,,,1"; // 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)

      rtnList = udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBack // XML상의 SELECT ID
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

      // $c.gus.cfSetReturnValue(rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm);  // 청구부서코드, 청구부서명
      break;
    case 4:
      // 본선관리번호
      scwin.img_PopUp3_onclick(disGubun, pCode, pName, pClose, pAllSearch);
      break;
    case 5:
      // LINE 코드팝업
      rtnList = udc_line.cfCommonPopUp(scwin.udc_line_callback // XML상의 SELECT ID
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
      , "LINE,LINE코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 6:
      // 출발작업장 코드팝업
      pWhere = ",,,,,,," + ed_ctrtClntNo.getValue();
      rtnList = udc_dptWrkPl.cfCommonPopUp(scwin.udc_dptWrkPl_callback // XML상의 SELECT ID
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
      , "출발지,출발지코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);
      break;
    case 7:
      // 도착작업장 코드팝업
      pWhere = ",,,,,,," + ed_ctrtClntNo.getValue();
      rtnList = cfCommonPopUp('retrieveWrkPlInfo_tpro' // XML상의 SELECT ID
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
      , "도착지,도착지코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , null, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_arvWrkPlCd, txt_arvWrkPlNm);  // 작업지코드, 작업지명
      $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, txt_arvDtl); // 작업지코드, 작업지명
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          //return value Assign
          scwin.hid_arvWrkLobranCd = rtnList[4]; //작업점소
          scwin.f_gridValueSet('arvWrkPlCd');
          if (rtnList[6].length == 6) {
            ed_arvZip.setValue(rtnList[6]); //우편번호
            scwin.f_openZipPopUp(2, 'T');
          }
        }
      } else {
        ed_arvZip.setValue("");
        txt_arvDtl.setValue("");
        scwin.f_gridValueSet('arvWrkPlCd');
      }
      break;
    default:
      break;
  }
};

//그리드 팝업
function f_openPopUpGrid(ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = null;
  var pWhere = ",,,T3," + ed_ctrtClntNo.Text;
  var pNoDataCloseTF = null;
  var rtnList = new Array();
  pCode = ds.getCellData(row, cdColid);
  if (gubun == 1) {
    pSelectID = "retrieveCommInfo_tpro";
    pWhere = ",,,T3,ZZZZ"; // 거래처 상관없도록 수정
    pWtitleSearch = "오더품명,품명 코드/명";
  } else if (gubun == 2) {
    pCode = ds.getCellData(row, nmColid);
    pWhere = "";
    pSelectID = "retrieveWrkPlInfo_tpro";
    pWtitleSearch = "출발지,출발지코드/명";
  } else if (gubun == 3) {
    pCode = ds.getCellData(row, nmColid);
    pWhere = "";
    pSelectID = "retrieveWrkPlInfo_tpro";
    pWtitleSearch = "도착지,도착지코드/명";
  }
  rtnList = cfCommonPopUp(pSelectID, pCode,
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
  $c.gus.cfSetGridReturnValue($p, rtnList, ds, row, cdColid, nmColid);
}

//-------------------------------------------------------------------------
// BL번호 조회 Popup 처리 : 그리드에서 입력된 코드정보로 BL조회
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var v_clntNo = ed_ctrtClntNo.getValue().replace(/^\s*/, ''); // 계약거래처 번호
  v_clntNo = ""; //품명 팝업시 거래처와 상관없이 될 수 있도록 수정
  var v_clntNm = txt_ctrtClntNm.getValue(); // 계약거래처 명
  var pWhere = ",,,T3," + v_clntNo; // 거래처별 품명 조회
  var districtGrpCd = ""; // 계약권역 구분코드
  if (ds_ctrtNo.getTotalRow() > 0) districtGrpCd = ds_ctrtNo.getCellData(ds_ctrtNo.rowPosition, "ctrtDistrictCd");
  switch (disGubun) {
    case 1:
      // BL 번호 팝업
      var arrParam = new Array(10);
      arrParam[0] = pCode; //bl번호	
      arrParam[1] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
      arrParam[2] = ""; //lc_assgnClsCd.ValueOfIndex("cd",lc_assgnClsCd.Index); //배정구분코드
      arrParam[3] = scwin.hid_impExpDomesticClsCd; //bulkYn : 수출입구분코드
      arrParam[4] = scwin.bizDivBulkYn; //bulkYn : 0-컨테이너, 1-벌크
      arrParam[5] = ed_lineCd.getValue().trim(); //LINE 코드
      arrParam[6] = 0; // TS 오더가 아닌경우 (TS 여부 : 0)
      arrParam[7] = "F"; // 다중 선택
      arrParam[8] = "E"; // Full / Empty 선택조건 (F: Full 만선택, E : 모두 선택)
      arrParam[9] = "FB";
      ; // FIO/BT 처리구분 : FIO_BT 여부 (FO : FIO_PROC_YN = 1, BT : BT_PROC_YN = 1, FB :  FIO_PROC_YN= 1 or BT_PROC_YN = 1)
      mulitRowSelYn = "F";

      // rtnList = window.showModalDialog("/ds/sd/odrmgnt/odrreg/sd_402_01_29p.jsp"
      //     , arrParam
      //     , "dialogWidth:900px; dialogHeight:400px; status:No");

      let v_url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml";
      let opts = {
        id: "pupup",
        popupName: "",
        modal: true,
        type: "browserPopup",
        width: 900,
        height: 400,
        title: ""
      };
      rtnList = await $c.win.openPopup($p, v_url, opts, arrParam);
      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          scwin.hid_hblNo = rtnList[3]; //HOUSE_BL번호 
          scwin.hid_hsn = rtnList[2]; //HSN

          if (row == 1) {
            if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
              ed_lineCd.setValue(rtnList[4]); //Line코드
            }
            if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue())) {
              ed_cvsslMgntNo.setValue(rtnList[6]); //본선관리번호
            }
            if ($c.gus.cfIsNull($p, scwin.hid_vsslCd)) scwin.hid_vsslCd = rtnList[8]; //선박코드
            if ($c.gus.cfIsNull($p, scwin.hid_portcnt)) scwin.hid_portcnt = rtnList[7]; //선사항차
            if ($c.gus.cfIsNull($p, scwin.hid_portCd)) scwin.hid_portCd = rtnList[10]; //항구코드		

            // 오더종류별 설정

            if (lc_odrKndCd.getValue() == "B2") {
              // 수입일반오더인 경우
              if ($c.gus.cfIsNull($p, ed_closeDt.getValue())) ed_closeDt.setValue(rtnList[14]); //입항일자
              if ($c.gus.cfIsNull($p, ed_closeHh.getValue())) ed_closeHh.setValue(rtnList[15]); //입항시간						
              if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
                ed_lineCd.setValue(rtnList[4]); //Line코드
              }
            }
            //Line명과 선사거래처 가져오기
            if (!$c.gus.cfIsNull($p, ed_lineCd.getValue())) scwin.f_openCommonPopUp(14, ed_lineCd.getValue(), "", "T", "F");
          }
          if (scwin.f_chkBillOfLading(rtnList[3])) {
            //BL번호로 적하목록 BL 품명 정보를 조회한다.
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
scwin.f_clearBillOfLadingBulk = function (row) {
  if (lc_odrKndCd.getValue() == "B2") {
    // BL 번호 초기화
    scwin.hid_hblNo = "";
    ds_bulkOdrCommList.setCellData(row, "blNo", "");
    return;
  }
};
scwin.f_chkeckBLEdit = function (row) {
  // BL 번호 존재 여부에 따라 품목 정보 수정모드를 설정한다.
  if (lc_odrKndCd.getValue() == "B2") {
    // 수입일반 오더 / 수입TS 오더
    let rowIndex = gr_commList.getTotalRow() - 1;
    if ($c.gus.cfIsNull($p, ds_bulkOdrCommList.getCellData(row, "blNo"))) {
      gr_commList.setCellReadOnly(rowIndex, 'commCd', false);
      gr_commList.setCellReadOnly(rowIndex, 'commNm', false);
    } else {
      gr_commList.setCellReadOnly(rowIndex, 'commCd', true);
      gr_commList.setCellReadOnly(rowIndex, 'commNm', true);
    }
  }
};

//-------------------------------------------------------------------------
// 조회된 B/L 이 중복되는지 확인
//-------------------------------------------------------------------------
scwin.f_chkBillOfLading = function (blNo) {
  for (var i = 0; i < ds_orderBillOfLading.getTotalRow(); i++) {
    if (ds_orderBillOfLading.getCellData(i, "blNo") == blNo) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_011, ["BL 번호 : [" + blNo + "] "]); // "이미 존재하는 @입니다.
      let val = ds_bulkOdrCommList.getCellData(ds_bulkOdrCommList.rowPosition, "blNo");
      ds_bulkOdrCommList.setCellData(ds_bulkOdrCommList.rowPosition, "blNo", val);
      return false;
    }
  }
  return true;
};

//BL번호에 따른 품명,컨테이너조회
scwin.f_retrieveBillOfLadingBulk = function (row) {
  if (lc_odrKndCd.getValue() == "B2") {
    if (!$c.gus.cfIsNull($p, scwin.hid_hblNo)) {
      // 선박코드,항차 정보로 적하목록 BL 품명 정보를 조회한다.
      // tr_mainfestBillOfLading.Action = "/ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingBulkListCMD.do";

      $c.sbm.execute($p, sbm_mainfestBillOfLading); // tr_mainfestBillOfLading.post();
      return;
    }
  }
};

//-------------------------------------------------------------------------
// BL 품명 정보를 품명 목록에 설정한다.
// 이전에 설정된 BL정보는 삭제한다.
//-------------------------------------------------------------------------
scwin.f_setBillOfLadingCommdityToOrderCommodity = function () {
  var v_wrkStDt = ed_wrkStDt.getValue();
  var v_wrkStHh = ed_wrkStHh.getValue();
  var v_wrkEndDt = ed_wrkEndDt.getValue();
  var v_wrkEndHh = ed_wrkEndHh.getValue();
  if (scwin.f_copyBillOfLading()) {
    if (["B2", "BS"].includes(lc_odrKndCd.getValue())) {
      // 수입일반오더, 수입 TS 오더인 경우
      if (mulitRowSelYn == "T") ds_bulkOdrCommList.insertRow(); // B/L 다중선택시 Row 추가

      var blRow = ds_billOfLadingCommodity.rowPosition;
      var commodityRow = ds_bulkOdrCommList.rowPosition;
      ds_bulkOdrCommList.setCellData(commodityRow, "odrNo", ds_bulkOdrInfoDTO.get("odrNo")); // 오더번호
      ds_bulkOdrCommList.setCellData(commodityRow, "blNo", ds_billOfLadingCommodity.getCellData(blRow, "hblNo")); // HOUSE BL 번호
      ds_bulkOdrCommList.setCellData(commodityRow, "commCd", ds_billOfLadingCommodity.getCellData(blRow, "commCd")); // 품명코드
      ds_bulkOdrCommList.setCellData(commodityRow, "commNm", ds_billOfLadingCommodity.getCellData(blRow, "commNm")); // 품명
      ds_bulkOdrCommList.setCellData(commodityRow, "unitCd", "KG"); // 중량단위코드
      ds_bulkOdrCommList.setCellData(commodityRow, "qty", ds_billOfLadingCommodity.getCellData(blRow, "packCnt")); // 수량
      ds_bulkOdrCommList.setCellData(commodityRow, "grossWt", ds_billOfLadingCommodity.getCellData(blRow, "totWt")); // GROSS중량
      ds_bulkOdrCommList.setCellData(commodityRow, "cbm", ds_billOfLadingCommodity.getCellData(blRow, "totCbm")); // CBM
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkStDt", v_wrkStDt); // 작업시작일자
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkStHh", v_wrkStHh); // 작업시작시간
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkEndDt", v_wrkEndDt); // 작업종료일자
      ds_bulkOdrCommList.setCellData(commodityRow, "wrkEndHh", v_wrkEndHh); // 작업종료시간
    }
    scwin.f_chkeckBLEdit(ds_bulkOdrCommList.rowPosition);
  }

  // 저장된 B/L 정보와 품명 B/L 정보를 조회하여 사용하지않는 오더 B/L 정보를 삭제한다. - 수입본선, 부두간 TS 제외
  if (lc_odrKndCd.getValue() != "B1" && lc_odrKndCd.getValue() != "BT") {
    for (var j = 0; j < ds_orderBillOfLading.getTotalRow(); j++) {
      chkBl = false;
      for (var k = 0; k < ds_bulkOdrCommList.getTotalRow(); k++) {
        if (!$c.gus.cfIsNull($p, ds_bulkOdrCommList.getCellData(k, "blNo"))) {
          if (ds_bulkOdrCommList.getCellData(k, "blNo") == ds_orderBillOfLading.getCellData(j, "blNo")) {
            chkBl = true;
            break;
          }
        }
      }
      if (!chkBl) {
        ds_orderBillOfLading.deleteRow(j);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 조회된 B/L 정보를 오더 B/L 에 추가
//-------------------------------------------------------------------------
scwin.f_copyBillOfLading = function () {
  if (lc_odrKndCd.getValue() == "<%=DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR%>" && cfIsNull(scwin.hid_commCd)) {
    // ds_orderBillOfLading.DeleteAll();	// 설정된 이전 품명은 모두 삭제한다.
    ds_orderBillOfLading.removeAll();
  }
  if (ds_billOfLading.getTotalRow() > 0) {
    for (var i = 0; i < ds_billOfLading.getTotalRow(); i++) {
      if (scwin.f_chkBillOfLading(ds_billOfLading.getCellData(i, "hblNo"))) {
        ds_orderBillOfLading.insertRow();
        let val = ds_orderBillOfLading.rowPosition;
        ds_orderBillOfLading.setCellData(val, "odrNo", ds_bulkOdrInfoDTO.get("odrNo")); // 오더번호
        ds_orderBillOfLading.setCellData(val, "mrn", ds_billOfLading.getCellData(i, "mrn")); // 적하목록관리번호
        ds_orderBillOfLading.setCellData(val, "msn", ds_billOfLading.getCellData(i, "msn")); // MSN
        ds_orderBillOfLading.setCellData(val, "hsn", ds_billOfLading.getCellData(i, "hsn")); // HSN
        ds_orderBillOfLading.setCellData(val, "blNo", ds_billOfLading.getCellData(i, "hblNo")); // BL번호
        ds_orderBillOfLading.setCellData(val, "commCd", ds_billOfLading.getCellData(i, "commCd")); // 품명코드
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
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
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 계약작업경로  콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCtrtWrkPath = function (ctrtNo) {
  // ds_ctrtWrkPath.ClearData();
  // ds_ctrtWrkPath.setEmptyValue()
  // ds_ctrtWrkPath.DataID =
  //     "/cm.zz.RetrieveComboCMD.do?sysCd=BulkOrderEBC&queryId=retrieveContractWorkPathComboList&param1="
  //     + ctrtNo + "&param2=" + lc_odrKndCd.getValue();
  dma_ctrtWrkPath.set("sysCd", "BulkOrderEBC");
  dma_ctrtWrkPath.set("queryId", "retrieveContractWorkPathComboList");
  dma_ctrtWrkPath.set("param1", ctrtNo);
  dma_ctrtWrkPath.set("param2", lc_odrKndCd.getValue());
  $c.sbm.execute($p, sbm_ctrtWrkPath); // ds_ctrtWrkPath.Reset();
};
scwin.f_ctrtNo = async function () {
  var rtnList = new Array();
  var arrParam = new Array();
  arrParam[0] = ds_ctrtNo;
  arrParam[1] = scwin.hid_reqClntNo;
  arrParam[2] = scwin.hid_reqClntNm;
  arrParam[3] = scwin.hid_bilgClntNo;
  arrParam[4] = scwin.hid_bilgClntNm;
  arrParam[5] = scwin.hid_realMchtClntNo;
  arrParam[6] = scwin.hid_realMchtClntNm;

  // var sUrl =
  //     "/tn/sd/odrmgnt/bulkodrreg/tn_202_02_02p.jsp?paramTitle=계약번호검색팝업&indexCtrtNo=" + lc_ctrtNo.Index;

  // rtnList = window.showModalDialog(sUrl, arrParam, "dialogWidth:500px; dialogHeight:300px; status:No");

  let v_url = "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_02p.xml";
  let opts = {
    id: "pupup",
    popupName: "계약번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 300,
    title: "계약번호검색팝업"
    // indexCtrtNo: lc_ctrtNo.getValue(),
  };
  rtnList = await $c.win.openPopup($p, v_url, opts, arrParam);
  lc_ctrtNo.setValue(rtnList[0]); //계약번호
  scwin.hid_reqClntNo = rtnList[1]; //요청처
  scwin.hid_bilgClntNo = rtnList[2]; //청구처
  scwin.hid_realMchtClntNo = rtnList[3]; //실화주
  scwin.hid_reqClntNm = rtnList[4]; //요청처명
  scwin.hid_bilgClntNm = rtnList[5]; //청구처명
  scwin.hid_realMchtClntNm = rtnList[6]; //실화주명
};
scwin.f_cvsslMgntNo = async function () {
  if (ed_cvsslMgntNo.getValue().trim() == "") {
    $c.win.alert($p, "본선번호 먼저 입력해주세요");
    return;
  }
  var rtnList = new Array();
  arrParam = ds_bulkOdrInfoDTO;
  var cvsslmgntNo = ed_cvsslMgntNo.getValue();
  var vsslCd = scwin.hid_vsslCd;
  var vsslNm = scwin.hid_vsslNm.replace(' ', '');
  var portcnt = scwin.hid_portcnt;
  if (lc_odrKndCd.getValue() == "B4") pWhere = "E";else pWhere = "I";

  // rtnList =
  //     window.showModalDialog('/tn/sd/odrmgnt/bulkodrreg/tn_202_02_03p.jsp?paramTitle=본선번호팝업&cvsslmgntNo='
  //         + cvsslmgntNo + '&vsslCd=' + vsslCd + '&vsslNm='
  //         + vsslNm + '&portcnt=' + portcnt + '&pWhere='
  //         + pWhere, arrParam, "dialogWidth:500px; dialogHeight:300px; status:No");

  let v_url = "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_03p.xml";
  let opts = {
    id: "pupup",
    popupName: "본선번호팝업",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 300,
    title: "본선번호팝업"
  };
  rtnList = await $c.win.openPopup($p, v_url, opts, arrParam);
  ed_cvsslMgntNo.setValue(rtnList[0]); //본선번호
  scwin.hid_vsslCd = rtnList[1]; //선박코드
  scwin.hid_vsslNm = rtnList[2]; //선박명
  scwin.hid_portcnt = rtnList[3]; //선사항차
  //hid_realMchtClntNo.value = rtnList[4]; //항로
};

//오더기본정보의 출발/도착정보가 변경되면 오더상세정보도 변경
scwin.f_gridValueSet = function (gubun) {
  for (var i = 0; i < ds_bulkOdrCommList.getTotalRow(); i++) {
    ds_bulkOdrCommList.setCellData(i, gubun, ds_bulkOdrInfoDTO.get(gubun));
    if (gubun == 'dptWrkPlCd') ds_bulkOdrCommList.setCellData(i, 'dptWrkPlNm', ds_bulkOdrInfoDTO.get('dptDtl'));
    if (gubun == 'arvWrkPlCd') ds_bulkOdrCommList.setCellData(i, 'arvWrkPlNm', ds_bulkOdrInfoDTO.get('arvDtl'));
  }
};

//작업경로 화면으로 이동하기
scwin.f_chgWrkPath = function () {
  if (ed_odrNo.getValue().trim() == "") {
    $c.win.alert($p, "오더번호를 입력하십시오");
    return;
  }
  let title = "작업경로";
  let strOrderDetailUrl = "/tn/sd/odrmgnt/odrdtlinfo/tn_202_02_02b.xml";
  let pgmId = "tn_202_02_02b.jsp";
  let condition = "?odrNo=" + ed_odrNo.getValue() + "&type=retrieve";
  $c.win.openMenu($p, title, strOrderDetailUrl, pgmId, condition);
  // cfTabMenuUpdate("/tn/sd/odrmgnt/odrdtlinfo/tn_202_02_02b.jsp" + condition, "작업경로");
};

//계약요율
scwin.f_CtrtTransTrfList = function () {
  var ctrtNo = ds_bulkOdrInfoDTO.get("ctrtNo"); // 계약번호

  if (ctrtNo == null || ctrtNo == "" || ctrtNo == "선택") {
    $c.win.alert($p, "계약번호가 없습니다.");
    return;
  }
  let title = "계약요율";
  let strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_10b.xml";
  let pgmId = "tn_201_02_10b.jsp";
  let condition = "?ctrtNo=" + ctrtNo;
  $c.win.openMenu($p, title, strOrderDetailUrl, pgmId, condition);
  // cfTabMenuUpdate("/tn/sd/odrmgnt/cntrodrreg/tn_201_02_10b.jsp?ctrtNo=" + ctrtNo, "계약요율");
};
scwin.f_openZipPopUp = function (gubun, pClose) {
  var vZip = "";
  var vTitle = "우편번호, 우편번호, 동이름";
  if (gubun == 1) {
    vZip = ed_dptZip.getValue(); //출발지 우편번호
  } else if (gubun == 2) {
    vZip = ed_arvZip.getValue(); //도착지 우편번호
  }
  var rtnList = new Array();
  rtnList = cfCommonPopUp('retrieveZipList_tpro', vZip, '', pClose, null, vTitle, null, null, null, null, null, null, null, null, null, null, null);
  if (gubun == 1) {
    //cfSetReturnValue(rtnList, ed_dptZip,txt_dptDtl);
    $c.gus.cfSetReturnValue($p, rtnList, ed_dptZip, "");
    txt_dptDtl.focus();
  } else if (gubun == 2) {
    //cfSetReturnValue(rtnList, ed_arvZip,txt_arvDtl);
    $c.gus.cfSetReturnValue($p, rtnList, ed_arvZip, "");
    txt_arvDtl.focus();
  }
};

// 출발지 zipcode 버튼 클릭 이벤트
scwin.udc_zipCode_onclickEvent = function (e) {
  scwin.f_openZipPopUpNew(1, "T"); //  출발지는 1
};
scwin.f_openZipPopUpNew = async function (gubun, pClose) {
  var rtnList = new Array();
  // var popupResult = window.showModalDialog("/cm/zz/zipcodePopup.jsp", "",
  //     "dialogHeight:400px;dialogWidth:735px;center:yes;scroll:no;status:no;help:no");

  let v_url = "/ui/cm/zz/zipcodePopup.xml";
  let opts = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 735,
    height: 400,
    title: ""
  };
  var popupResult = await $c.win.openPopup($p, v_url, opts, gubun);
  scwin.f_openZipPopUpNew_callback(popupResult, gubun);
};
scwin.f_openZipPopUpNew_callback = function (popupResult, gubun) {
  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (popupResult != null) {
    if (rtnList[0] == "N/A") return;
    if (gubun == 1) {
      ed_dptZip.setValue(popupResult.zip); //출발지 우편번호
      txt_dptDtl.focus();
    } else if (gubun == 2) {
      ed_arvZip.setValue(popupResult.zip); //도착지 우편번호
      txt_arvDtl.focus();
    }
  } else {
    if (gubun == 1) {
      ed_dptZip.setValue(""); //출발지 우편번호
    } else if (gubun == 2) {
      ed_arvZip.setValue(""); //도착지 우편번호
    }
  }
};

//-------------------------------------------------------------------------
// 설명 : 매출부서, 청구부서 세팅
// 처리규칙 : 오더등록자의 등록점소의 첫째 둘째자리 + 부서종류
// 1.벌크 장치장 셔틀(B5) 	: 매출부서 - 운송(2),	청구부서 - 운송(2)
// 2.벌크 오더 (B1, B2, B3, B4, BS, BT, BW)		: 매출부서 - 미지정,	청구부서 - 하역(4)
// 3.내수 오더	(D1, D2, D3, D4, D5, D6, D7)	: 매출부서 - 운송(2),	청구부서 - 운송(2)
//-------------------------------------------------------------------------
scwin.f_setSellAndBilgDept = function (odrKndCd) {
  var deptCd1 = scwin.hid_regBranCd;
  var sellLodeptCd = ""; // 매출부서 코드
  var bilgLodeptCd = ""; // 청구부서 코드

  if (deptCd1.length > 2) deptCd1 = deptCd1.substr(0, 2);else return;

  // 매출부서, 청구부서 	값 초기화
  $c.gus.cfInitObjects($p, [ed_sellLodeptCd, txt_sellLodeptNm, ed_bilgLodeptCd, txt_sellLodeptNm]);
  $c.gus.cfInitHidVal($p, [ed_sellLodeptCd, txt_sellLodeptNm, ed_bilgLodeptCd, txt_sellLodeptNm]);
  switch (odrKndCd) {
    case "B5":
      // 벌크 장치장 셔틀 (B5)
      sellLodeptCd = deptCd1 + "2"; // 운송
      bilgLodeptCd = deptCd1 + "2"; // 운송
      break;
    case "BW":
      //  벌크 수출 TS (BW)
      sellLodeptCd = deptCd1 + "2";
      ; // 운송
      bilgLodeptCd = deptCd1 + "1"; // 관리/영업
      break;
    default:
      sellLodeptCd = deptCd1 + "2"; // 운송
      bilgLodeptCd = deptCd1 + "1"; // 관리/영업
      break;
  }

  //매출부서 세팅
  if (sellLodeptCd.length == 3) {
    ed_sellLodeptCd.setValue(sellLodeptCd);
    scwin.f_openCommonPopUp(2, ed_sellLodeptCd.getValue(), txt_sellLodeptNm.getValue(), 'T', 'F');
  }

  //청구부서 세팅
  if (bilgLodeptCd.length == 3) {
    ed_bilgLodeptCd.setValue(bilgLodeptCd);
    scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'T', 'F');
  }
};

// 화주오더 목록 조회 TR
// for=tr_retrieveMchtOdrList event=OnSuccess()
// for=tr_retrieveMchtOdrList event=OnLoadCompleted(rowCnt)
scwin.sbm_retrieveMchtOdrList_submitdone = function (e) {
  gr_mchtOdrList.setFocusedCell(0, "wrkDt", true);
  if (ds_mchtOdrList.getTotalRow() < 1) {
    $c.win.alert($p, "조회된 결과가 없습니다.");
  } else {
    let rowCnt = ds_mchtOdrList.getTotalRow();
    totalRows.setValue(rowCnt);
    // ds_file.addrow();
    ds_file.set("reqNo", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "reqNo"));
    $c.sbm.execute($p, sbm_retrieveFileList); // tr_retrieveFileList.post();
  }
};

// for=gr_mchtOdrList event=OnClick(row,colid)
scwin.gr_mchtOdrList_oncellclick = function (rowIndex, columnIndex, columnId) {
  // ds_file.addrow();
  // ds_file.NameValue(i, "reqNo") = ds_mchtOdrList.NameValue(i, "reqNo");
  ds_file.set("reqNo", ds_mchtOdrList.getCellData(ds_mchtOdrList.rowPosition, "reqNo"));
  $c.sbm.execute($p, sbm_retrieveFileList); // tr_retrieveFileList.post();
};

// to-do 어디에 이벤트 추가하는지 모르겠음. gr_attachFile 가 udc_fileMultiUpload 컴포넌트임
// for=gr_attachFile event=OnDblClick(row,colid)
// cfDownloadFile(ds_attach.NameValue(ds_attach.RowPosition ,"attachFileNm"),ds_attach.NameValue(ds_attach.RowPosition ,"attachFilePath"));
//

// for=tr_retrieveBulkOdrInfo event=OnSuccess()
scwin.sbm_retrieveBulkOdrInfo_submitdone = function (e) {
  if (ds_bulkOdrInfoDTO.getTotalRow() < 1) {
    $c.win.alert($p, "조회된 결과가 없습니다.");
    $c.gus.cfEnableObjects($p, [btn_new]);
    $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_save, btn_update, btn_delete]);
    gr_commList.setReadOnly('grid', true); // gr_commList.Editable = false;
  } else {
    $c.gus.cfEnableObjects($p, [btn_new, btn_update, btn_delete]);
    $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_save]);
    gr_commList.setReadOnly('grid', true); // gr_commList.Editable = false;
  }
};

// 오더 삭제 TR
// for=tr_delete event=OnSuccess()
scwin.sbm_delete_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_011, new Array(ed_odrNo.getValue())); // 삭제되었습니다.

  ds_bulkOdrInfoDTO.setEmptyValue()();
  ds_bulkOdrCommList.removeAll();

  //버튼 및 그리드 제어
  $c.gus.cfDisableObjects($p, [odrMainData, odrDetailData, btn_commList, btn_update, btn_save, btn_delete]);
  gr_commList.setReadOnly('grid', true); // gr_commList.Editable = false;

  lc_selfClsCd.setValue("LI"); // 자가구분..

  scwin.hid_odrDcsnYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더확정여부
  scwin.hid_odrCnclYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더취소여부
  scwin.hid_odrDelYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더삭제여부
  scwin.hid_odrCompleteYn = 0; // "<%= DsConstants.YN_NO%>";		// 오더완료여부
  scwin.hid_regBranCd = scwin.loUpperLobranCd; // "<%= loginDTO.getLobranCd()%>";	// 등록점소 - 사용자 설정 물류점소
  scwin.hid_sellYn = 1; // "<%= DsConstants.YN_YES%>";		// 매출여부

  // 계약거래처 데이타 설정
  scwin.f_clearDataSetRetrieveCtrtClnt();
  lc_odrKndCd.setValue("D3"); // 오더종류..
};

// 오더 정보 저장 TR
// for=tr_registBulkOrder event=OnSuccess()
scwin.sbm_registBulkOrder_submitdone = function (e) {
  // cfHideDSWaitMsg(gr_commList);
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_retrieve("2");
};

// for=tr_updateBulkOrder event=OnSuccess()
scwin.sbm_updateBulkOrder_submitdone = function (e) {
  // cfHideDSWaitMsg(gr_commList);
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_retrieveOdrInfo();
};

// for=ds_ctrtWrkPath event=OnLoadCompleted(rowCnt)
scwin.sbm_ctrtWrkPath_submitdone = function (e) {
  let rowCnt = ds_ctrtWrkPath.getTotalRow();
  if (rowCnt > 0) {
    ds_ctrtWrkPath.insertRow();
    ds_ctrtWrkPath.setCellData(ds_ctrtWrkPath.rowPosition, 'ctrtWrkPathSeq', 0);
    ds_ctrtWrkPath.setCellData(ds_ctrtWrkPath.rowPosition, 'ctrtWrkPathNm', "선택");
  }
};

// 화주오더 상세 목록
// for=ds_mchtOdrList event=OnRowPosChanged(row)
scwin.ds_mchtOdrList_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (row >= 0) {
    lay_onRgnNm.setValue(ds_mchtOdrList.getCellData(row, "onRgnNm"));
    lay_pickupTime.setValue((ds_mchtOdrList.getCellData(row, "wrkDt") + ds_mchtOdrList.getCellData(row, "wrkHh")).toDate("YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm"));
    lay_wrkNeedHh.setValue(ds_mchtOdrList.getCellData(row, "wrkNeedHh").toDate("HHmm").format("HH:mm"));
    lay_offRgnNm.setValue(ds_mchtOdrList.getCellData(row, "offRgnNm"));
    lay_doorPicNm.setValue(ds_mchtOdrList.getCellData(row, "doorPicNm"));
    lay_doorTelNo.setValue(ds_mchtOdrList.getCellData(row, "doorTelNo"));
    lay_LineNo.setValue(ds_mchtOdrList.getCellData(row, "lineNm"));
    lay_blBooking.setValue(ds_mchtOdrList.getCellData(row, "rltNo"));
    lay_vessl.setValue(ds_mchtOdrList.getCellData(row, "vsslNm") + " / " + ds_mchtOdrList.getCellData(row, "portcnt"));
    lay_portNo.setValue(ds_mchtOdrList.getCellData(row, "portnm"));
    if (ds_mchtOdrList.getCellData(row, "closeDt") != "") lay_clTime.setValue((ds_mchtOdrList.getCellData(row, "closeDt") + ds_mchtOdrList.getCellData(row, "closeHh")).toDate("YYYYMMDDHHmmss").format("YYYY/MM/DD HH:mm"));else lay_clTime.setValue("");
    lay_bilgClntNm.setValue(ds_mchtOdrList.getCellData(row, "bilgClntNm"));
    lay_vehclCnt.setValue(ds_mchtOdrList.getCellData(row, "vehclNeedCnt"));
    lay_selfClsNm.setValue(ds_mchtOdrList.getCellData(row, "selfClsNm"));
    lay_etc.setValue(ds_mchtOdrList.getCellData(row, "dtlRmk")); // 품명레벨의 비고...
    lay_qtyWeight.setValue(ds_mchtOdrList.getCellData(row, "qty") + " / " + ds_mchtOdrList.getCellData(row, "wt"));
    lay_commNm.setValue(ds_mchtOdrList.getCellData(row, "commNm"));
    lay_qtyWeight.setValue(ds_mchtOdrList.getCellData(row, "qty") + " / " + ds_mchtOdrList.getCellData(row, "wt"));
  } else {
    lay_onRgnNm.innerHTML = "";
    lay_pickupTime.innerHTML = "";
    lay_wrkNeedHh.innerHTML = "";
    lay_offRgnNm.innerHTML = "";
    lay_doorPicNm.innerHTML = "";
    lay_doorTelNo.innerHTML = "";
    lay_LineNo.innerHTML = "";
    lay_blBooking.innerHTML = "";
    lay_vessl.innerHTML = "";
    lay_portNo.innerHTML = "";
    lay_clTime.innerHTML = "";
    lay_bilgClntNm.innerHTML = "";
    lay_vehclCnt.innerHTML = "";
    lay_selfClsNm.innerHTML = "";
    lay_etc.innerHTML = "";
    lay_qtyWeight.innerHTML = "";
    lay_commNm.innerHTML = "";
  }
};

// for=ed_ctrtClntNo event=OnKillFocus()
scwin.udc__ctrtClnt_onblurCodeEvent = function (e) {
  //cfInitObjects([ed_sellLodeptCd, txt_sellLodeptNm]);

  scwin.f_chkOpenCommonPopUp(this, txt_ctrtClntNm, 1, true);
  if (ed_ctrtClntNo.getValue().trim() == "") {
    // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
    scwin.f_clearDataSetRetrieveCtrtClnt();
    // 계약번호 (ds_ctrtNo) DataSet 초기화
    ds_ctrtNo.removeAll(); // ds_ctrtNo.ClearData();
    // 요청 거래처 정보 (ds_reqClntNo) DataSet 초기화
    //ds_reqClntNo.ClearData();
    //ed_reqClntNo.Text = "";
    //ed_reqClntNo.hidVal = "";
    // 실화주 정보 (ds_realMchtClntNo) DataSet 초기화
    //ds_realMchtClntNo.ClearData();
    //ed_realMchtClntNo.Text = "";
    //ed_realMchtClntNo.hidVal = "";
    // 청구 거래처 정보 (ds_bilgClntNo) DataSet 초기화
    //ds_bilgClntNo.ClearData();
    //ed_bilgClntNo.Text = "";
    //ed_bilgClntNo.hidVal = "";
  }
};

// for=ed_dptWrkPlCd event=OnKillFocus()
scwin.ed_dptWrkPlCd_onblur = function (e) {
  if (ed_dptWrkPlCd.getValue().trim() != "") {
    scwin.f_openCommonPopUp(6, ed_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), 'T', 'F');
  } else {
    txt_dptWrkPlNm.setValue("");
  }
};

// 출발지 우편번호
// for=ed_dptZip event=OnKillFocus()
scwin.ed_dptZip_onblur = function (e) {
  if (ed_dptZip.getValue().trim() != "") {
    scwin.f_openZipPopUp(1, 'T');
  }
};

// 작업지
// for=ed_arvWrkPlCd event=OnKillFocus()
scwin.ed_arvWrkPlCd_onblur = function (e) {
  if (ed_arvWrkPlCd.getValue().trim() != "") {
    scwin.f_openCommonPopUp(7, ed_arvWrkPlCd.getValue(), txt_arvWrkPlNm.getValue(), 'T', 'F');
  } else {
    txt_arvWrkPlNm.setValue("");
  }
};

// 작업지 우편번호
// for=ed_arvZip event=OnKillFocus()
scwin.ed_arvZip_onblur = function (e) {
  if (ed_arvZip.getValue().trim() != "") {
    scwin.f_openZipPopUp(2, 'T');
  }
};

// 오더기본정보 출발/도착정보 일자/시간 변경시
// for=ds_bulkOdrInfoDTO event=OnColumnChanged(row,colid)
scwin.ds_bulkOdrInfoDTO_oncelldatachange = function (info) {
  var colid = info.colID;
  var row = info.rowIndex;
  if (colid == 'wrkStDt' || colid == 'wrkStHh' || colid == 'wrkEndDt' || colid == 'wrkEndHh') scwin.f_gridValueSet(colid);else if (colid == 'odrKndCd') {
    if (ds_bulkOdrInfoDTO.getCellData(row, colid) == "B2") {
      gr_commList.setColumnVisible('blNo', true);
      $c.gus.cfEnableObjects($p, [ed_cvsslMgntNo, img_PopUp3, img_PopUp4]);
    } else if (ds_bulkOdrInfoDTO.getCellData(row, colid) == "B4") {
      gr_commList.setColumnVisible('blNo', false);
      ed_cvsslMgntNo.setValue("");
      $c.gus.cfDisableObjects($p, [ed_cvsslMgntNo, img_PopUp3, img_PopUp4]);
    } else {
      gr_commList.validExp = "commCd:품명코드:yes,commNm:품명:yes,ctrtWrkPathSeq:계약작업경로순번:yes,unitCd:관리단위:yes";
      gr_commList.setHeaderColor('blNo', 'FFFFFF');
      gr_commList.setColumnVisible('blNo', false);
      ed_cvsslMgntNo.setValue("");
      $c.gus.cfDisableObjects($p, [ed_cvsslMgntNo, img_PopUp3, img_PopUp4]);
    }
    for (var i = 0; i < ds_bulkOdrCommList.getTotalRow(); i++) {
      ds_bulkOdrCommList.setCellData(i, "blNo", "");
    }
    $c.gus.cfRefreshMandSign($p);
  }
};

// to-do
// 품명/출발/도착작업장 변경시 팝업 호출
// for=gr_commList event=OnExit(row,colid,olddata)
//     if(colid == "blNo" && ds_bulkOdrCommList.NameValue(row, colid) != olddata )
//     {
//         if(ds_bulkOdrCommList.NameValue(row , colid) != "" && lc_odrKndCd.BindColVal == "B2"){
//             f_openCommPopUpGrid(1, row, ds_bulkOdrCommList.NameValue(row,"blNo"), '', 'T', 'T');
//         }
//     }
//     else if(colid == "commCd" && ds_bulkOdrCommList.NameValue(row, colid) != olddata )
//     {
//         if(ds_bulkOdrCommList.NameValue(row , colid) == ""){
//             ds_bulkOdrCommList.NameValue(row, "commNm" ) = "";
//         }else{
//             f_openPopUpGrid(ds_bulkOdrCommList, row, "commCd", "commNm", 1, "T", "F");
//         }
//     }else if(colid == "dptWrkPlNm" && ds_bulkOdrCommList.NameValue(row, colid) != olddata )
//     {
//         if(ds_bulkOdrCommList.NameValue(row, colid) == ""){
//             ds_bulkOdrCommList.NameValue(row, "dptWrkPlNm" ) = "";
//         }else{
//             f_openPopUpGrid(ds_bulkOdrCommList, row, "dptWrkPlCd", "dptWrkPlNm", 2, "T", "F");
//         }
//     }else if(colid == "arvWrkPlNm" && ds_bulkOdrCommList.NameValue(row, colid) != olddata )
//     {
//         if(ds_bulkOdrCommList.NameValue(row, colid) == ""){
//             ds_bulkOdrCommList.NameValue(row, "arvWrkPlNm" ) = "";
//         }else{
//             f_openPopUpGrid(ds_bulkOdrCommList, row, "arvWrkPlCd", "arvWrkPlNm", 3, "T", "F");
//         }
//     }

// for=lc_ctrtNo event=OnSelChange()
scwin.lc_ctrtNo_onchange = function (info) {
  if (lc_ctrtNo.getValue() != "선택") {
    scwin.f_RetrieveCtrtWrkPath(lc_ctrtNo.getValue());
    scwin.hid_taxnClsCd = lc_ctrtNo.getValue(); //과세구분코드
  }
};

// for=lc_odrKndCd event=OnSelChange()
scwin.lc_odrKndCd_onchange = function (info) {
  var tempOdrKnd = lc_odrKndCd.getValue();

  // DateSet 정보를 초기화한다.
  if (ds_bulkOdrInfoDTO.getCellData(ds_bulkOdrInfoDTO.rowPosition, "odrNo") == "" && ds_bulkOdrInfoDTO.getCellData(ds_bulkOdrInfoDTO.rowPosition, "ctrtClntNo") != "" && lc_ctrtNo.getValue() != "선택" && lc_ctrtNo.getValue() != "" && ds_bulkOdrInfoDTO.rowPosition > 0) {
    scwin.f_clear();

    // 출발일시, 도착일시 초기화
    ed_wrkStDt.setValue(scwin.vCurDate); //출발일자(현재날짜)
    ed_wrkStHh.setValue(""); //출발시간
    ed_wrkEndDt.setValue(scwin.vCurDate); //도착일자(현재날짜)
    ed_wrkEndHh.setValue(""); //도착시간
  }
  lc_odrKndCd.setValue(tempOdrKnd);
  scwin.f_setSellAndBilgDept(lc_odrKndCd.getValue());
};

// for=ds_billOfLadingCommodity event=OnLoadCompleted(rowCnt)
scwin.sbm_mainfestBillOfLading_submitdone = function (e) {
  let rowCnt = ds_billOfLadingCommodity.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("B/L 품명 조회결과"));
  } else {
    scwin.f_setBillOfLadingCommdityToOrderCommodity(); // BL 품명 정보를 오더 품명 으로 복사
  }
};
scwin.gr_commList_onaftercolumnmove = function (info) {
  console.log("gr_out_onaftercolumnmove");
  console.log("info.rowIndex :" + info.rowIndex);
  console.log("info.colId :" + info.colId);
  let rowStatusVal = ds_bulkOdrCommList.getRowStatusValue(row);
  if ([0, 3].includes(rowStatusVal)) {
    if (["dptWrkPlNm", "arvWrkPlNm", "unitCd"].includes(colid)) {
      gr_commList.setCellReadOnly(info.rowIndex, colid, false);
    } else if (["wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh", "qty", "grossWt", "cbm", "len"].includes(colid)) {
      gr_commList.setCellReadOnly(info.rowIndex, colid, false);
    } else {
      gr_commList.setCellReadOnly(info.rowIndex, colid, true);
    }
  } else {
    if (["wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh", "qty", "grossWt", "cbm", "len", "totDcAmt"].includes(colid)) {
      gr_commList.setCellReadOnly(info.rowIndex, colid, true);
    } else {
      gr_commList.setCellReadOnly(info.rowIndex, colid, false);
    }
  }
  if (["wrkStDt", "wrkEndDt"].includes(colid)) {
    gr_commList.UrlImages = "<I>Type='PopupBotton', Url='/common/images/calendar.gif', Fit='AutoFit', Flat='True'</I>";
  } else {
    gr_commList.UrlImages = "<I>Type='PopupBotton', Url='/common/images/search.gif', Fit='AutoFit', Flat='True'</I>";
  }
};

// GRID EVENT: gr_commList에서 OnPopUp이벤트 발생시
// for=gr_commList event=OnPopup(row, colid, data)

scwin.gr_commList_onPopup = function (rowIndex, columnIndex) {
  let colid = gr_commList.getColumnID(columnIndex);
  switch (colid) {
    case "blNo":
      scwin.f_openCommPopUpGrid(1, rowIndex, ds_bulkOdrCommList.getCellData(rowIndex, "blNo"), '', 'F', 'F');
      break;
    case "wrkStDt":
      cfOpenCalendar(gr_commList, rowIndex, colid);
      break;
    case "wrkEndDt":
      cfOpenCalendar(gr_commList, rowIndex, colid);
      break;
    case "commCd":
      scwin.f_openPopUpGrid(ds_bulkOdrCommList, rowIndex, "commCd", "commNm", 1, "F", "F");
      break;
    case "dptWrkPlNm":
      scwin.f_openPopUpGrid(ds_bulkOdrCommList, rowIndex, "dptWrkPlCd", "dptWrkPlNm", 2, "F", "F");
      break;
    case "arvWrkPlNm":
      scwin.f_openPopUpGrid(ds_bulkOdrCommList, rowIndex, "arvWrkPlCd", "arvWrkPlNm", 3, "F", "F");
      break;
  }
};

// 해당 이벤트는 asis에 없음. 테스트 위해 추가하였음.
scwin.sbm_retrieveFileList_submitdone = function (e) {
  ds_attach.insertRow();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchField',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'temp1',refDataMap:'ds_queryConditionDTO',refEdDt:'reqDtTo',refStDt:'reqDtFrom',style:'',edFromId:'ed_reqDtFrom',edToId:'ed_reqDtTo',mandatoryFrom:'true',mandatoryTo:'true',mandatory:'true',isDate:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_expimpDomesticClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:ds_queryConditionDTO.expimpDomesticClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송작업지사 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_districtCd',search:'start',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_queryConditionDTO.districtCd',allOption:'true',chooseOption:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송조건 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_selfClsGu',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:ds_queryConditionDTO.selfClsGu'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상차도'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'도착도'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'웹오더정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_mchtOdrList',id:'gr_mchtOdrList',style:'',visibleRowNum:'4',visibleRowNumFix:'true',sortable:'true','ev:oncellclick':'scwin.gr_mchtOdrList_oncellclick',readOnly:'true',scrollByColumn:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column85',value:'오더<br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column83',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column81',value:'담당점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column79',value:'운송조건',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'오더구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'의뢰번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'운송화물구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'화주오더구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'수출입구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'상차지코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'상차지명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'DOOR코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'DOOR명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'하차지코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'하차지명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'상차지상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'DOOR상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'하차지상세',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'DOOR담당자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'DOOR연락처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'작업일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'작업시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'작업소요시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'라인명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'관련번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'선박명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'PORT명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'마감일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'마감시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'오더비고',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'의뢰품명순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'품명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'CBM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'차량소요대수',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'품명비고',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'expimpDomesticClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'transWrkLobranNm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'selfClsNm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transCargoClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expimpDomesticClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offRgnNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offDtl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorPicNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'workDate',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkNeedHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rltNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portnm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'closeHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRmk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqCommSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qty',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cbm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNeedCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dtlRmk',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_onRgnNm',label:'',ref:'data:ds_mchtOdrList.onRgnNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_pickupTime',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예상작업시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_wrkNeedHh',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_offRgnNm',label:'',ref:'data:ds_mchtOdrList.offRgnNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorPicNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지연락처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_doorTelNo',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_LineNo',label:'',ref:'data:ds_mchtOdrList.lineNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL/Booking',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_blBooking',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_vessl',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Port',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_portNo',label:'',ref:'data:ds_mchtOdrList.portnm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Closing Time',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_clTime',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_bilgClntNm',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량대수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_vehclCnt',label:'',ref:'data:ds_mchtOdrList.vehclNeedCnt',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송조건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_selfClsNm',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량/중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_qtyWeight',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_etc',label:'',ref:'data:ds_mchtOdrList.dtlRmk',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_commNm',label:'',ref:'data:ds_mchtOdrList.commNm',style:'',userData2:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap mt16',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',escape:'false',id:'',label:'첨부파일',style:'',tagname:'h3'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200',id:'gr_attachFile'}}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더기본정보 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더번호 ',class:''}},{T:1,N:'xf:input',A:{style:'width: 120px;',id:'ed_odrNo',class:'',validExp:'오더번호:yes:length=13',mandatory:'true'}}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrCrate',type:'button',class:'btn','ev:onclick':'scwin.f_convertMchtOdr'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_reject',type:'button',class:'btn','ev:onclick':'scwin.f_reject'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더반려'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_retrieve1',type:'button',class:'btn','ev:onclick':'scwin.f_retrieveOdrInfo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'odrMainData',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더종류 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'lc_odrKndCd',class:'',validExp:'오더종류:yes',mandatory:'true',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.lc_odrKndCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수 거점내'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수 거점간'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수 공장반출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수 물류기지반출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수 공장회수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D6'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약처 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_ctrtClntNo',nameId:'txt_ctrtClntNm',id:'udc__ctrtClnt','ev:onblurCodeEvent':'scwin.udc__ctrtClnt_onblurCodeEvent','ev:onclickEvent':'scwin.udc__ctrtClnt_onclickEvent',selectID:'retrieveClntInfo_tpro',validExp:'계약처:yes',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'lc_ctrtNo',validExp:'계약번호:yes',mandatory:'true','ev:onchange':'scwin.lc_ctrtNo_onchange'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp2',type:'button',class:'btn ico sch','ev:onclick':'scwin.f_ctrtNo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더구분 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'lc_odrClassCd',class:'',mandatory:'true',validExp:'오더종류:yes'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출부서 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_sellLodeptCd',nameId:'txt_sellLodeptNm',id:'udc_sellLodept','ev:onclickEvent':'scwin.udc_sellLodept_onclickEvent',selectID:'retrieveLogisDeptInfo_tpro'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구부서 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',id:'udc_bilgLodept','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent',selectID:'retrieveLogisDeptInfo_tpro'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'본선번호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_cvsslMgntNo'}},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp3',type:'button',class:'btn ico sch','ev:onclick':'scwin.img_PopUp3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'img_PopUp4',type:'button',class:'btn','ev:onclick':'scwin.f_cvsslMgntNo'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line/선사 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',validExp:'LINE:yes',codeId:'ed_lineCd',nameId:'txt_lineNm',id:'udc_line',selectID:'retrieveLineInfoList_tpro','ev:onclickEvent':'scwin.udc_line_onclickEvent'}},{T:1,N:'xf:input',A:{style:'width: 80px;',id:'txt_shpCoClntNm',class:'',validExp:'선사:no:maxByteLength=30'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Closing Time ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'group3',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_closeDt',class:'',calendarValueType:'yearMonthDate',validExp:'Closing Time:yes:date=YYYYMMDD&length=8'}},{T:1,N:'xf:input',A:{dataType:'time',style:'',id:'ed_closeHh',class:'w50 tac',validExp:'Closing TM:yes:date=HHmm&length=4',maxlength:'4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자가구분 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'lc_selfClsCd',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'긴급여부 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_urgentYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'긴급'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처관리번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 173px;',id:'txt_clntMgntNo',class:'',validExp:'거래처관리번호:no:maxByteLength=18',ref:'data:ds_bulkOdrInfoDTO.clntMgntNo'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'odrDetailData',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출발지 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:group',A:{style:'width: 285px;',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'display: none',id:'',validExp:'출발지:yes','ev:onblur':'scwin.ed_dptWrkPlCd_onblur'}},{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_dptWrkPl',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_dptWrkPl_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_dptWrkPlCd','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent',id:'udc_dptWrkPl',nameId:'txt_dptWrkPlNm',popupID:'',selectID:'retrieveWrkPlInfo_tpro',style:'width:%; height:px; ',validTitle:'',hideName:'true'}}]},{T:1,N:'xf:group',A:{style:'width: 285px;',id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveZipList_tpro',codeId:'ed_dptZip',validTitle:'',nameId:'',style:'width:%; height:px; ',hideName:'true',id:'udc_zipCode','ev:onclickEvent':'scwin.udc_zipCode_onclickEvent'}},{T:1,N:'xf:input',A:{style:'display: none;',id:'ed_dptZip'}},{T:1,N:'xf:trigger',A:{style:'display: none;',id:'trigger15',type:'button',class:'btn ico sch','ev:onclick':'scwin.f_openZipPopUpNew'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]},{T:1,N:'xf:input',A:{style:'',id:'txt_dptDtl',class:'',validExp:'출발지우편번호:yes:length=6',mandatory:'true','ev:onblur':'scwin.ed_dptZip_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특이사항 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'4'}]}]},{T:1,N:'xf:textarea',A:{style:'',id:'txa_rmk',class:'full',validExp:'특이사항:no:maxByteLength=500',maxlength:'500'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출발일시 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{style:'',id:'group4',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkStDt',class:'',calendarValueType:'yearMonthDate',validExp:'출발일자/도착일자:yes:date=YYYYMMDD&length=8'}},{T:1,N:'xf:input',A:{dataType:'time',style:'',id:'ed_wrkStHh',class:'w50 tac',validExp:'출발시간:yes:date=HHmm&length=4',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차담당 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;l',id:'txt_onPicNm',validExp:'상차담당:no:maxByteLength=40'}},{T:1,N:'xf:input',A:{style:'',id:'ed_onPicTelNo',validExp:'상차담당전화번호:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도착지 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 285px;'},E:[{T:1,N:'xf:input',A:{id:'ed_arvWrkPlCd',style:'',validExp:'도착지:yes','ev:onblur':'scwin.ed_arvWrkPlCd_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'trigger20',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 285px;'},E:[{T:1,N:'xf:input',A:{id:'ed_arvZip',style:'',validExp:'도착작업장우편번호:yes:length=6',mandatory:'true','ev:onblur':'scwin.ed_arvZip_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'trigger21',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_arvDtl',style:'',validExp:'도착지 상세:no:maxByteLength=100'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도착일시 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'group5',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkEndDt',class:'',calendarValueType:'yearMonthDate',validExp:'도착일자:yes:date=YYYYMMDD&length=8'}},{T:1,N:'xf:input',A:{dataType:'time',style:'',id:'ed_wrkEndHh',class:'w50 tac',validExp:'도착시간:yes:date=HHmm&length=4',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차담당 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'txt_offPicNm',validExp:'하차담당:no:maxByteLength=40'}},{T:1,N:'xf:input',A:{style:'',id:'ed_offPicTelNo',validExp:'하차담당전화번호:no'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더상세정보 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_commList',btnPlusYn:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_bulkOdrCommList',style:'',autoFit:'none',id:'gr_commList',visibleRowNum:'5',class:'wq_gvw','ev:onaftercolumnmove':'scwin.gr_commList_onaftercolumnmove'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'BL번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'품명순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'품명상태코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'품명코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column9',value:'품명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'계약작업경로순번',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'작업경로',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'출발작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column19',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column75',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'출발<br>예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'출발<br>예정시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'도착<br>예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'도착<br>예정시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'관리<br>단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'수량단위',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'중량<br>(kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'NET중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label',value:'CBM'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label',value:'길이<br>(M)'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label',value:'매출항목코드',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',displayMode:'label',value:'매출항목'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label',value:'단가'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label',value:'할인할증항목코드',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label',value:'할인/할증'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label',value:'금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label',value:'관리순번',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',displayMode:'label',value:'회사코드',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',displayMode:'label',value:'사업장코드',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label',value:'취소여부',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label',value:'비고',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'완료여부',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label',value:'완료일자',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'완료시간',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label',value:'작업지시번호',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label',value:'합적가능여부',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commStsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'commCd',displayMode:'label',validExp:'commCd:품명코드:yes',imageClickFunction:'scwin.gr_commList_onPopup'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',validExp:'commNm:품명:yes'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'ctrtWrkPathSeq',displayMode:'label',validExp:'ctrtWrkPathSeq:계약작업경로순번:yes'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtWrkPathNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'textImage',id:'dptWrkPlNm',displayMode:'label',imageClickFunction:'scwin.gr_commList_onPopup'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'textImage',id:'arvWrkPlNm',displayMode:'label',imageClickFunction:'scwin.gr_commList_onPopup'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'unitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qtyUnitCd',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'netWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cbm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'len',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellItemNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totSellAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcItemCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcItemNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totDcAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mgntSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bizLongCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cnclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'completeYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'completeDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'completeHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkRsltsNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coshippingPsblYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'btn_commList',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',gridID:'gr_commList',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_CancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_chgWrkPath',style:'',type:'button','ev:onclick':'scwin.f_chgWrkPath'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_contract_tariff',style:'',type:'button','ev:onclick':'scwin.f_CtrtTransTrfList'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약요율'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',style:'',type:'button','ev:onclick':'scwin.f_clear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button','ev:onclick':'scwin.f_update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})