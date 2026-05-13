/*amd /AI/sd_402_01_03b.xml 105289 1ec019195b5cd601833969dee265b018b90a8d8d4c867e7c997c7af761fe63a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_orderSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchWrkStep'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lobranQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptmentCd',name:'부서조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'자동오더여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'오더작업경로수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'출발작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'출발작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'도착작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'도착작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCommWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'오더품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsYn',name:'실적여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'작업장구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlCd',name:'대표작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlNm',name:'대표작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStepDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNmOrg',name:'작업물류점소명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNmOrg',name:'출발작업장명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'선명항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNmOrg',name:'매출귀속부서명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStepDetailTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNmOrg',name:'출발작업장명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstClsCd',name:'작업구간구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAdptYn',name:'매출적용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCommWrkPathTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'오더품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsYn',name:'실적여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'상위작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranNm',name:'상위물류점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrreg.SaveBulkWorkPathDetailInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_odrCommWrkPath","key":"IN_DS2"},{"id":"ds_odrWrkPathStepDetail","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractOrderContractPathCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCommWrkPath","key":"OUT_DS2"},{"id":"ds_ctrtWrkPath","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCommWrkPath","key":"OUT_DS2"},{"id":"ds_ctrtWrkPath","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchWorkStep',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractOrderWorkStepCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_searchWrkStep","key":"IN_DS1"},{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_searchWorkStep_submitdone','ev:submiterror':'scwin.sbm_searchWorkStep_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLobranTrans',action:'/ds.sd.odrmgnt.odrreg.RetrieveLogisticsBranchDepartmentCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_lobranQueryCondition","key":"IN_DS1"},{"id":"ds_lobran","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_lobran","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveLobranTrans_submitdone','ev:submiterror':'scwin.sbm_retrieveLobranTrans_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_confirmOrder',action:'/ds.sd.odrmgnt.odrreg.ConfirmOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_confirmOrder_submitdone','ev:submiterror':'scwin.sbm_confirmOrder_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlClsCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=LO121',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[,{"id":"ds_wrkPlClsCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_wrkPlClsCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_wrkPlClsCd_submitdone','ev:submiterror':'scwin.sbm_wrkPlClsCd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_LkStepNo',action:'/ds.lo.comninfomgnt.RetrieveStdWorkPathCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[,{"id":"ds_LkStepNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_LkStepNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_LkStepNo_submitdone','ev:submiterror':'scwin.sbm_LkStepNo_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.wrkLobranCd = "";
scwin.wrkLobranNm = "";
scwin.internalSellLodeptCd = "";
scwin.internalSellLodeptNm = "";
scwin.wrkLobranCdRow = 0;
scwin.hid_odrKndCd = "";
scwin.hid_ctrtClntNo = "";
scwin.hid_ctrtNo = "";
scwin.hid_realMchtclntNo = "";
scwin.hid_rowNo = "";
scwin.hid_chkUseFilter = "";
scwin.hid_chkReterieve = "";
scwin.v_row = 0;
scwin.v_colid = "";
scwin.SELPCH_ITEM_CD_NOSELL = "";
scwin.SELL_ITEM_CD_TRANS_RATE = "";
scwin.YN_YES = 1;
scwin.YN_NO = 0;
scwin.TRANS_DEPARTMENT = "";
scwin.IMP_CD = "";
scwin.EXP_CD = "";
scwin.WRK_PL_CLS_CD_DOOR = "";
scwin.WRK_PL_CLS_CD_RGN = "";
scwin.WRK_PL_CLS_CD_PIER = "";
scwin.WRK_PL_CLS_CD_BERTH = "";
scwin.WRK_PL_CLS_CD_RAILSTN = "";
scwin.WRK_PL_CLS_CD_MARTRPIER = "";
scwin.BIZ_DOM_CD_TRANS = "";
scwin.BIZ_DOM_CD_STV = "";
scwin.BIZ_DOM_CD_STR = "";
scwin.WRK_STP_CD_CGSHF = "";
scwin.WRK_STP_CD_SHUTTLE = "";
scwin.WRK_STP_CD_GROUND_TRANS = "";
scwin.WRK_STP_CD_RAILROAD = "";
scwin.WRK_STP_CD_MARTR = "";
scwin.ODR_KND_CD_IMP_CVSSL_BULK_ODR = "";
scwin.ODR_KND_CD_IMP_GNRL_BULK_ODR = "";
scwin.ODR_KND_CD_EXP_CVSSL_BULK_ODR = "";
scwin.ODR_KND_CD_EXP_GNRL_BULK_ODR = "";
scwin.loginUserId = "";
scwin.onpageload = async function () {
  scwin.wrkLobranCd = $c.ses.getLobranCd();
  scwin.wrkLobranNm = $c.ses.getLobranNm();
  scwin.loginUserId = $c.ses.getUserId();

  // TODO: 서버에서 상수값 조회 필요 - JSP 서버사이드 상수를 클라이언트에서 사용
  scwin.SELPCH_ITEM_CD_NOSELL = $c.data.getConstant($p, "SdConstants.SELPCH_ITEM_CD_NOSELL");
  scwin.SELL_ITEM_CD_TRANS_RATE = $c.data.getConstant($p, "DsConstants.SELL_ITEM_CD_TRANS_RATE");
  scwin.TRANS_DEPARTMENT = $c.data.getConstant($p, "DsConstants.TRANS_DEPARTMENT");
  scwin.IMP_CD = $c.data.getConstant($p, "DsConstants.IMP_CD");
  scwin.EXP_CD = $c.data.getConstant($p, "DsConstants.EXP_CD");
  scwin.WRK_PL_CLS_CD_DOOR = $c.data.getConstant($p, "SdConstants.WRK_PL_CLS_CD_DOOR");
  scwin.WRK_PL_CLS_CD_RGN = $c.data.getConstant($p, "SdConstants.WRK_PL_CLS_CD_RGN");
  scwin.WRK_PL_CLS_CD_PIER = $c.data.getConstant($p, "SdConstants.WRK_PL_CLS_CD_PIER");
  scwin.WRK_PL_CLS_CD_BERTH = $c.data.getConstant($p, "SdConstants.WRK_PL_CLS_CD_BERTH");
  scwin.WRK_PL_CLS_CD_RAILSTN = $c.data.getConstant($p, "SdConstants.WRK_PL_CLS_CD_RAILSTN");
  scwin.WRK_PL_CLS_CD_MARTRPIER = $c.data.getConstant($p, "SdConstants.WRK_PL_CLS_CD_MARTRPIER");
  scwin.BIZ_DOM_CD_TRANS = $c.data.getConstant($p, "SdConstants.BIZ_DOM_CD_TRANS");
  scwin.BIZ_DOM_CD_STV = $c.data.getConstant($p, "SdConstants.BIZ_DOM_CD_STV");
  scwin.BIZ_DOM_CD_STR = $c.data.getConstant($p, "SdConstants.BIZ_DOM_CD_STR");
  scwin.WRK_STP_CD_CGSHF = $c.data.getConstant($p, "DsConstants.WRK_STP_CD_CGSHF");
  scwin.WRK_STP_CD_SHUTTLE = $c.data.getConstant($p, "DsConstants.WRK_STP_CD_SHUTTLE");
  scwin.WRK_STP_CD_GROUND_TRANS = $c.data.getConstant($p, "DsConstants.WRK_STP_CD_GROUND_TRANS");
  scwin.WRK_STP_CD_RAILROAD = $c.data.getConstant($p, "DsConstants.WRK_STP_CD_RAILROAD");
  scwin.WRK_STP_CD_MARTR = $c.data.getConstant($p, "DsConstants.WRK_STP_CD_MARTR");
  scwin.ODR_KND_CD_IMP_CVSSL_BULK_ODR = $c.data.getConstant($p, "DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR");
  scwin.ODR_KND_CD_IMP_GNRL_BULK_ODR = $c.data.getConstant($p, "DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR");
  scwin.ODR_KND_CD_EXP_CVSSL_BULK_ODR = $c.data.getConstant($p, "DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR");
  scwin.ODR_KND_CD_EXP_GNRL_BULK_ODR = $c.data.getConstant($p, "DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR");
  scwin.f_defaultValue();
};
scwin.f_clearTabOrderInfo = async function () {
  // TODO: parent frame 참조 - parent.hid_odrNo.value = ""
};
scwin.f_setTabOrderInfo = async function (odrNo) {
  // TODO: parent frame 참조 - parent.hid_odrNo.value = odrNo
};
scwin.f_setDisplayOdrKndCd = async function (odrKndCd) {
  switch (odrKndCd) {
    case scwin.ODR_KND_CD_IMP_CVSSL_BULK_ODR:
    case scwin.ODR_KND_CD_IMP_GNRL_BULK_ODR:
    case scwin.ODR_KND_CD_EXP_CVSSL_BULK_ODR:
    case scwin.ODR_KND_CD_EXP_GNRL_BULK_ODR:
      gr_odrWrkPathStpDetail.setColumnVisible("vsslCdPortcnt", false);
      break;
    default:
      gr_odrWrkPathStpDetail.setColumnVisible("vsslCdPortcnt", false);
      break;
  }
};
scwin.f_defaultValue = async function () {
  ds_orderSearch.set("odrNo", "");
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableAllBtn($p);
  ds_lobranQueryCondition.set("lobranCd", scwin.wrkLobranCd);
  ds_lobranQueryCondition.set("lobranClsCd", "T");
  ds_lobranQueryCondition.set("deptmentCd", scwin.TRANS_DEPARTMENT);
  ds_lobranQueryCondition.set("useYn", String(scwin.YN_YES));
  scwin.hid_ctrtClntNo = "";
  scwin.hid_ctrtNo = "";
  scwin.hid_realMchtclntNo = "";
  if (scwin.wrkLobranCd == "4A5") {
    ds_lobranQueryCondition.set("deptmentCd", "5");
  } else {
    ds_lobranQueryCondition.set("deptmentCd", scwin.TRANS_DEPARTMENT);
  }
  await $c.sbm.execute($p, sbm_retrieveLobranTrans);
  gr_odrCommWrkPath.setReadOnly("grid", false);
  scwin.hid_chkUseFilter = "true";
  scwin.f_clearTabOrderInfo();
  $c.gus.cfDisableObjects($p, [btnConfirmOrder, btnOrderWrkStepDetail, btnDcSc]);
  ed_odrNo.setFocus();
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_odrNo]);
  if (chk) {
    let odrNo = ed_odrNo.getValue().replace(/\s*$/, '');
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfEnableBtnOnly($p, [btnSave]);
    ds_order.removeAll();
    ds_odrCommWrkPath.removeAll();
    ds_ctrtWrkPath.removeAll();
    ds_odrWrkPathStep.removeAll();
    ds_ctrtWrkPathStep.removeAll();
    $c.gus.cfDisableObjects($p, [btnConfirmOrder, btnOrderWrkStepDetail, btnDcSc]);
    ds_odrWrkPathStepDetail.removeAll();
    ds_odrWrkPathStepDetailTemp.removeAll();
    await $c.sbm.execute($p, sbm_wrkPlClsCd);
    await $c.sbm.execute($p, sbm_LkStepNo);
    ds_orderSearch.set("odrNo", odrNo);
    await $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_FieldClear = async function () {
  ed_odrNo.setValue("");
  ed_odrNo.setFocus();
};
scwin.f_RetrieveWorkStep = async function () {
  if (ds_searchWrkStep.get("ctrtWrkPathSeq") == "0" || ds_searchWrkStep.get("ctrtWrkPathSeq") == "") {
    return;
  }
  await $c.sbm.execute($p, sbm_searchWorkStep);
};
scwin.f_InsertRow = async function () {
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  let v_tempSeq = parseInt(parseInt(ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq")) / 10) * 10;
  if (scwin.f_checkOdrWrkStpSeq(ds_odrWrkPathStepDetail, v_tempSeq)) {
    ds_odrWrkPathStepDetail.insertRow(curRow + 1);
    scwin.f_CopyDataRow(ds_odrWrkPathStepDetail, curRow, curRow + 1);
    scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["작업단계"]);
    return;
  }
};
scwin.f_AddRow = function () {
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  let v_tempSeq = parseInt(parseInt(ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq")) / 10) * 10;
  if (scwin.f_checkOdrWrkStpSeq(ds_odrWrkPathStepDetail, v_tempSeq)) {
    ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
  }
  let newRow = ds_odrWrkPathStepDetail.getRowPosition();
  scwin.f_CopyDataRow(ds_odrWrkPathStepDetail, newRow - 1, newRow);
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};
scwin.f_DeleteRow = function () {
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  ds_odrWrkPathStepDetail.removeRow(curRow);
  curRow = ds_odrWrkPathStepDetail.getRowPosition();
  if (curRow >= 0) {
    let v_tempSeq = parseInt(parseInt(ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq")) / 10) * 10;
    scwin.f_refreshOdrWrkStpSeq(ds_odrWrkPathStepDetail, v_tempSeq);
  }
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};
scwin.f_UndoRow = async function () {
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  ds_odrWrkPathStepDetail.undoRow(curRow);
  if (curRow >= 0) {
    let v_tempSeq = parseInt(parseInt(ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq")) / 10) * 10;
    scwin.f_refreshOdrWrkStpSeq(ds_odrWrkPathStepDetail, v_tempSeq);
  }
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};
scwin.f_CopyDataRow = async function (dataObject, sourceRow, targetRow) {
  let v_odrWrkStpSeq = parseInt(dataObject.getCellData(sourceRow, "odrWrkStpSeq"));
  let v_tempSeq = parseInt(v_odrWrkStpSeq / 10) * 10;
  let colCount = dataObject.getColumnCount();
  for (let i = 0; i < colCount; i++) {
    let colId = dataObject.getColumnID(i);
    if (colId == "odrWrkStpSeq") {
      dataObject.setCellData(targetRow, colId, parseInt(dataObject.getCellData(sourceRow, colId)) + 1);
    } else if (colId == "wrkPlClsCd" || colId == "wrkStpCd" || colId == "dptWrkPlCd" || colId == "dptWrkPlNm" || colId == "arvWrkPlCd" || colId == "arvWrkPlNm" || colId == "wrkLobranCd" || colId == "wrkLobranNm" || colId == "wrkStDt" || colId == "wrkStHh" || colId == "wrkEndDt" || colId == "wrkEndHh" || colId == "internalSellLodeptCd" || colId == "internalSellLodeptNm" || colId == "bizDomCd" || colId == "completeYn") {
      // skip
    } else if (colId == "selpchItemCd") {
      dataObject.setCellData(targetRow, colId, scwin.SELPCH_ITEM_CD_NOSELL);
    } else if (colId == "selpchItemNm") {
      dataObject.setCellData(targetRow, colId, "무매출");
    } else {
      dataObject.setCellData(targetRow, colId, dataObject.getCellData(sourceRow, colId));
    }
  }
  scwin.f_refreshOdrWrkStpSeq(dataObject, v_tempSeq);
};
scwin.f_checkOdrWrkStpSeq = async function (dataObject, v_tempSeq) {
  for (let j = 0; j < dataObject.getRowCount(); j++) {
    let v_compSeq = parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) - v_tempSeq;
    if (parseInt(parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) / 10) * 10 == v_tempSeq && v_compSeq >= 9) {
      return false;
    }
  }
  return true;
};
scwin.f_refreshOdrWrkStpSeq = async function (dataObject, v_tempSeq) {
  for (let j = 0; j < dataObject.getRowCount(); j++) {
    let v_compSeq = parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) - v_tempSeq;
    if (parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) > v_tempSeq && v_compSeq > 0 && v_compSeq < 10) {
      if (j > 0) {
        dataObject.setCellData(j, "odrWrkStpSeq", parseInt(dataObject.getCellData(j - 1, "odrWrkStpSeq")) + 1);
      }
    }
  }
};
scwin.f_Update = async function () {
  $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
  gr_odrCommWrkPath.setReadOnly("grid", false);
  gr_odrWrkPathStpDetail.setReadOnly("grid", false);
  if (ds_odrWrkPathStep.getRowCount() > 0) {
    gr_odrWrkPathStpDetail.setColumnReadOnly("selpchItemNm", true);
    $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
  }
  gr_odrWrkPathStpDetail.setFocusedCell(ds_odrWrkPathStepDetail.getRowPosition(), "dptWrkPlNm");
  scwin.v_row = ds_odrWrkPathStepDetail.getRowPosition();
  scwin.v_colid = "dptWrkPlNm";
  let odrCommWrkPathRow = ds_odrCommWrkPath.getRowPosition();
  if (odrCommWrkPathRow >= 0 && btnUpdate.getDisabled()) {
    if (scwin.f_chkResultsConfirmationCommodity(odrCommWrkPathRow)) {
      gr_odrCommWrkPath.setReadOnly("grid", true);
      gr_odrWrkPathStpDetail.setReadOnly("grid", true);
      $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    } else {
      gr_odrCommWrkPath.setReadOnly("grid", false);
      gr_odrWrkPathStpDetail.setReadOnly("grid", false);
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    }
  }
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};
scwin.f_Save = async function () {
  if (ds_odrCommWrkPath.getCellData(0, "ctrtWrkPathSeq") <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업경로"]);
    gr_odrCommWrkPath.setFocusedCell(0, "ctrtWrkPathSeq");
    return;
  }
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if (ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim() == "" && i > 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "dptWrkPlCd"))) {
        ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd"));
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "arvWrkPlCd")) && i + 1 < ds_odrWrkPathStepDetail.getRowCount()) {
        ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"));
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "arvWrkPlNm")) && i + 1 < ds_odrWrkPathStepDetail.getRowCount()) {
        ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlNm", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlNm"));
      }
    }
  }
  let chkValidGrid = await $c.gus.cfValidate($p, [gr_odrWrkPathStpDetail]);
  if (!chkValidGrid) {
    return;
  }
  for (let idx = 0; idx < ds_odrWrkPathStepDetail.getRowCount(); idx++) {
    if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim()) && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "dptWrkPlCd").trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업장"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "dptWrkPlNm");
      return false;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkLobranCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업점소"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkLobranNm");
        return false;
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "internalSellLodeptCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["매출귀속부서"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "internalSellLodeptNm");
        return false;
      }
    }
  }
  let chkValidAll = await $c.gus.cfValidate($p, [gr_odrCommWrkPath, gr_odrWrkPathStpDetail]);
  if (!chkValidAll) {
    return;
  }
  if (scwin.f_validChk()) {
    scwin.f_chkOdrWrkPathStep();
    let chk = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001, ["작업단계정보"]);
    if (chk) {
      await $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_validChk = async function () {
  let chk = await $c.gus.cfValidate($p, [gr_odrCommWrkPath, gr_odrWrkPathStpDetail]);
  if (chk) {
    for (let idx = 0; idx < ds_odrCommWrkPath.getRowCount(); idx++) {
      if (ds_odrCommWrkPath.getCellData(idx, "ctrtWrkPathSeq") <= 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업경로"]);
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
scwin.f_ResultsExcel1 = function () {
  $c.data.downloadGridViewExcel($p, gr_odrCommWrkPath, {
    fileName: "작업경로.xlsx",
    sheetName: "작업경로"
  });
};
scwin.f_ResultsExcel2 = function () {
  $c.data.downloadGridViewExcel($p, gr_odrWrkPathStpDetail, {
    fileName: "작업단계.xlsx",
    sheetName: "작업단계"
  });
};
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  let rtnList = null;
  let chkValue = false;
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, pName, pClose, null, null, null, null, "A,B", null, null, null, null, null, pAllSearch, "작업점소,점소코드,점소명", null, null);
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[1]);
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", rtnList[1]);
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", "");
      }
      break;
    case 2:
      let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
      let pWhere2 = pWrkPlClsCd;
      pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
      pName = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlNm");
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', pCode, pName, pClose, null, null, null, null, pWhere2, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", null, null);
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNmOrg", rtnList[1]);
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNmOrg", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", "");
      }
      break;
    case 3:
      let pWhere3 = "T,J,,,,T,1";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, pName, pClose, null, null, null, null, pWhere3, null, null, null, null, null, pAllSearch, "매출귀속부서,부서코드,부서명", null, null);
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[1]);
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", rtnList[1]);
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", "");
      }
      break;
    default:
      break;
  }
  scwin.f_copyTempDataSet();
  return chkValue;
};
scwin.f_setWorkPathStepDetail = async function () {
  scwin.wrkLobranCd = $c.ses.getLobranCd();
  scwin.wrkLobranNm = $c.ses.getLobranNm();
  if (scwin.loginUserId == "040239") {
    scwin.internalSellLodeptCd = "4A5";
    scwin.internalSellLodeptNm = "인천제강운송";
  } else {
    if (ds_lobran.getRowCount() > 0) {
      scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
      scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
    }
  }
  scwin.wrkLobranCdRow = 0;
  let commWrkPathRow = ds_odrCommWrkPath.getRowPosition();
  if (ds_odrWrkPathStep.getRowCount() > 0 && ds_odrCommWrkPath.getCellData(commWrkPathRow, "ctrtWrkPathSeq") == ds_odrCommWrkPath.getOriginalCellData(commWrkPathRow, "ctrtWrkPathSeq")) {
    scwin.f_setOdrWrkPathStepToWrkPathStepDetail();
    $c.gus.cfEnableObjects($p, [btnOrderWrkStepDetail, btnDcSc]);
  } else if (ds_ctrtWrkPathStep.getRowCount() > 0) {
    scwin.f_setCtrtWrkPathStepToWrkPathStepDetail();
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  ds_odrWrkPathStepDetail.setRowPosition(0);
  $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};
scwin.f_setOdrWrkPathStepToWrkPathStepDetail = function () {
  for (let i = 0; i < ds_odrWrkPathStep.getRowCount(); i++) {
    ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
    let newRow = ds_odrWrkPathStepDetail.getRowCount() - 1;
    let colCount = ds_odrWrkPathStep.getColumnCount();
    for (let c = 0; c < colCount; c++) {
      let colId = ds_odrWrkPathStep.getColumnID(c);
      try {
        ds_odrWrkPathStepDetail.setCellData(newRow, colId, ds_odrWrkPathStep.getCellData(i, colId));
      } catch (e) {}
    }
  }
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNm", "");
      ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNmOrg", "");
    }
    if (ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") == scwin.SELPCH_ITEM_CD_NOSELL) {
      ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranCd", "");
      ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranNm", "");
      ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptCd", "");
      ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptNm", "");
    }
  }
};
scwin.f_setCtrtWrkPathStepToWrkPathStepDetail = async function () {
  let commRow = ds_odrCommWrkPath.getRowPosition();
  for (let i = 0; i < ds_ctrtWrkPathStep.getRowCount(); i++) {
    ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
    let newRow = ds_odrWrkPathStepDetail.getRowCount() - 1;
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrNo", ds_odrCommWrkPath.getCellData(commRow, "odrNo"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "commSeq", ds_odrCommWrkPath.getCellData(commRow, "commSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkPathSeq", ds_odrCommWrkPath.getCellData(commRow, "odrWrkPathSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(commRow, "ctrtWrkPathSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkPathNm", ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkPathNm"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkStpSeq", ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkStpSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "wrkPlClsCd", ds_ctrtWrkPathStep.getCellData(i, "wrkPlClsCd"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "bizDomCd", ds_ctrtWrkPathStep.getCellData(i, "bizDomCd"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStpCd", ds_ctrtWrkPathStep.getCellData(i, "wrkStpCd"));
    try {
      ds_odrWrkPathStepDetail.setCellData(newRow, "selpchItemCd", ds_ctrtWrkPathStep.getCellData(i, "selpchItemCd"));
    } catch (e) {}
    try {
      ds_odrWrkPathStepDetail.setCellData(newRow, "selpchItemNm", ds_ctrtWrkPathStep.getCellData(i, "selpchItemNm"));
    } catch (e) {}
    try {
      ds_odrWrkPathStepDetail.setCellData(newRow, "vsslCd", ds_ctrtWrkPathStep.getCellData(i, "vsslCd"));
    } catch (e) {}
    try {
      ds_odrWrkPathStepDetail.setCellData(newRow, "vsslNm", ds_ctrtWrkPathStep.getCellData(i, "vsslNm"));
    } catch (e) {}
    try {
      ds_odrWrkPathStepDetail.setCellData(newRow, "portcnt", ds_ctrtWrkPathStep.getCellData(i, "portcnt"));
    } catch (e) {}
  }
  scwin.f_setOdrWrkPathStepDptArv();
  scwin.f_setWorkStepInfoRefresh();
};
scwin.f_chkOdrWrkPathStep = async function () {
  for (let i = 0; i < ds_odrCommWrkPath.getRowCount(); i++) {
    let v_odrNo = ds_odrCommWrkPath.getCellData(i, "odrNo");
    let v_commSeq = ds_odrCommWrkPath.getCellData(i, "commSeq");
    let v_odrWrkPathSeq = ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq");
    let v_ctrtWrkPathSeq = ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq");
    for (let j = ds_odrWrkPathStepDetail.getRowCount() - 1; j >= 0; j--) {
      if (v_odrNo == ds_odrWrkPathStepDetail.getCellData(j, "odrNo") && v_commSeq == ds_odrWrkPathStepDetail.getCellData(j, "commSeq")) {
        if (v_odrWrkPathSeq != ds_odrWrkPathStepDetail.getCellData(j, "odrWrkPathSeq") || v_ctrtWrkPathSeq != ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq")) {
          ds_odrWrkPathStepDetail.removeRow(j);
        }
        if (!$c.gus.cfIsNull($p, ds_odrCommWrkPath.getCellData(i, "wrkRsltsNo"))) {
          if (ds_odrCommWrkPath.getCellData(i, "odrNo") == ds_odrWrkPathStepDetail.getCellData(j, "odrNo") && ds_odrCommWrkPath.getCellData(i, "commSeq") == ds_odrWrkPathStepDetail.getCellData(j, "commSeq") && ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq") == ds_odrWrkPathStepDetail.getCellData(j, "odrWrkPathSeq")) {
            ds_odrWrkPathStepDetail.removeRow(j);
          }
        }
      }
    }
  }
};
scwin.f_orderWrkStepDetail = async function () {
  let row = ds_odrWrkPathStepDetail.getRowPosition();
  if (row >= 0) {
    let v_odrNo = ds_order.getCellData(0, "odrNo");
    let param = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    $c.win.openMenu($p, "작업일시배분조회및수정", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_14b.xml", "sd_402_01_14b.xml", param);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["작업단계"]);
    return;
  }
};
scwin.f_chkResultsConfirmationCommodity = function (row) {
  if (row >= 0) {
    if (!$c.gus.cfIsNull($p, ds_odrCommWrkPath.getCellData(row, "wrkRsltsNo").trim())) {
      return true;
    }
  }
  return false;
};
scwin.f_setOdrWrkPathStepDptArv = function () {
  let commRow = ds_odrCommWrkPath.getRowPosition();
  let v_impExpDomesticClsCd = ds_order.getCellData(ds_order.getRowPosition(), "impExpDomesticClsCd");
  let v_dptWrkPlCd = ds_odrCommWrkPath.getCellData(commRow, "dptWrkPlCd");
  let v_dptWrkPlNm = ds_odrCommWrkPath.getCellData(commRow, "dptWrkPlNm");
  let v_dptWrkPlClsCd = ds_odrCommWrkPath.getCellData(commRow, "dptWrkPlClsCd");
  let v_arvWrkPlCd = ds_odrCommWrkPath.getCellData(commRow, "arvWrkPlCd");
  let v_arvWrkPlNm = ds_odrCommWrkPath.getCellData(commRow, "arvWrkPlNm");
  let v_arvWrkPlClsCd = ds_odrCommWrkPath.getCellData(commRow, "arvWrkPlClsCd");
  let v_dptRow = -1;
  let totalRows = ds_odrWrkPathStepDetail.getRowCount();
  let matchesDptCls = function (wrkPlClsCd, targetClsCd) {
    if (targetClsCd == scwin.WRK_PL_CLS_CD_DOOR || targetClsCd == scwin.WRK_PL_CLS_CD_RGN) {
      return wrkPlClsCd == scwin.WRK_PL_CLS_CD_RGN || wrkPlClsCd == scwin.WRK_PL_CLS_CD_DOOR;
    } else if (targetClsCd == scwin.WRK_PL_CLS_CD_PIER || targetClsCd == scwin.WRK_PL_CLS_CD_BERTH) {
      return wrkPlClsCd == scwin.WRK_PL_CLS_CD_PIER || wrkPlClsCd == scwin.WRK_PL_CLS_CD_BERTH;
    } else {
      return wrkPlClsCd == targetClsCd;
    }
  };
  let setDptPlace = function (idx, plCd, plNm) {
    ds_odrWrkPathStepDetail.setCellData(idx, "dptWrkPlCd", plCd);
    ds_odrWrkPathStepDetail.setCellData(idx, "dptWrkPlNm", plNm);
    scwin.f_setWorkLobranNoDataAutoClose(idx, plCd, '', 'T', 'F', 'T', 'F', 'T');
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(idx, "dptWrkPlNm", "");
    }
  };
  if (v_impExpDomesticClsCd == scwin.IMP_CD) {
    if (!$c.gus.cfIsNull($p, v_arvWrkPlCd)) {
      for (let j = totalRows - 1; j >= 0; j--) {
        if (matchesDptCls(ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd"), v_arvWrkPlClsCd)) {
          setDptPlace(j, v_arvWrkPlCd, v_arvWrkPlNm);
          break;
        }
      }
    }
    if (!$c.gus.cfIsNull($p, v_dptWrkPlCd)) {
      for (let i = 0; i < totalRows; i++) {
        if (matchesDptCls(ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd"), v_dptWrkPlClsCd)) {
          setDptPlace(i, v_dptWrkPlCd, v_dptWrkPlNm);
          v_dptRow = i;
          break;
        }
      }
    }
  } else {
    if (!$c.gus.cfIsNull($p, v_dptWrkPlCd)) {
      for (let i = 0; i < totalRows; i++) {
        if (matchesDptCls(ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd"), v_dptWrkPlClsCd)) {
          setDptPlace(i, v_dptWrkPlCd, v_dptWrkPlNm);
          v_dptRow = i;
          break;
        }
      }
    }
    if (!$c.gus.cfIsNull($p, v_arvWrkPlCd)) {
      for (let j = totalRows - 1; j >= 0; j--) {
        if (v_dptRow >= 0 && v_dptRow >= j) break;
        if (matchesDptCls(ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd"), v_arvWrkPlClsCd)) {
          if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd"))) {
            setDptPlace(j, v_arvWrkPlCd, v_arvWrkPlNm);
          }
          break;
        }
      }
    }
  }
};
scwin.f_setWorkStepInfoRefresh = function () {
  let totalRows = ds_odrWrkPathStepDetail.getRowCount();
  for (let i = 0; i < totalRows; i++) {
    if (i == 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim()) && i + 1 < totalRows && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"))) {
        ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"));
      }
    }
    if (i > 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkPlClsCd").trim())) {
        if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "arvWrkPlCd"))) {
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "arvWrkPlCd"));
        }
      }
      if (ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim() == ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkPlClsCd").trim()) {
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "dptWrkPlCd"))) {
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd"));
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlNm"));
        }
        if (ds_odrWrkPathStepDetail.getCellData(i, "wrkStpCd").trim() == scwin.WRK_STP_CD_CGSHF) {
          if (i + 1 < totalRows && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"))) {
            ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"));
          }
        }
      } else if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
        ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd"));
        if (i + 1 < totalRows) {
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"))) {
            ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"));
          }
        }
      } else {
        if (ds_odrWrkPathStepDetail.getCellData(i, "wrkStpCd").trim() == scwin.WRK_STP_CD_CGSHF) {
          if (i + 1 < totalRows && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"))) {
            ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"));
          }
        }
      }
    }
    if (i == totalRows - 1) {
      if (i > 0 && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkPlClsCd").trim())) {
        if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "arvWrkPlCd"))) {
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "arvWrkPlCd"));
        }
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
        ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i, "dptWrkPlCd"));
      }
    }
    scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(i);
  }
  for (let j = totalRows - 1; j >= 0; j--) {
    if (j >= 0 && j < totalRows - 1) {
      if (ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim() == ds_odrWrkPathStepDetail.getCellData(j + 1, "wrkPlClsCd").trim()) {
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd"))) {
          ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));
          ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlNm"));
        }
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim()) && j + 1 < totalRows) {
        ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlNm", "");
        ds_odrWrkPathStepDetail.setCellData(j, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));
      }
      if (ds_odrWrkPathStepDetail.getCellData(j, "wrkStpCd").trim() == scwin.WRK_STP_CD_CGSHF) {
        if (j + 1 < totalRows && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"))) {
          if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "arvWrkPlCd"))) {
            ds_odrWrkPathStepDetail.setCellData(j, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));
          }
        }
      }
    }
    scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(j);
  }
  scwin.f_copyTempDataSet();
};
scwin.f_setOdrWorkStepWorkLobranInternalSellLodept = function (row) {
  if (row < 0 || row >= ds_odrWrkPathStepDetail.getRowCount()) return;
  if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd"))) {
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", scwin.wrkLobranCd);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", scwin.wrkLobranNm);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", scwin.wrkLobranNm);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", scwin.internalSellLodeptCd);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", scwin.internalSellLodeptNm);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", scwin.internalSellLodeptNm);
    } else if (row > scwin.wrkLobranCdRow) {
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", scwin.wrkLobranCd);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", scwin.wrkLobranNm);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", scwin.wrkLobranNm);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", scwin.internalSellLodeptCd);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", scwin.internalSellLodeptNm);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", scwin.internalSellLodeptNm);
    }
  } else {
    if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() != scwin.SELPCH_ITEM_CD_NOSELL || ds_odrWrkPathStepDetail.getCellData(row, "wrkStpCd").trim() == scwin.WRK_STP_CD_CGSHF) {
      let wrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
      if (wrkPlClsCd == scwin.WRK_PL_CLS_CD_RAILSTN && row > 0 && ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_RAILROAD) {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNm"));
        let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
        if (!$c.gus.cfIsNull($p, pCode)) {
          let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, wrkPlClsCd);
          if (rtnList != null && rtnList[0].trim() != "N/A") {
            scwin.wrkLobranCd = rtnList[2];
            scwin.wrkLobranNm = rtnList[3];
            scwin.internalSellLodeptCd = rtnList[4];
            scwin.internalSellLodeptNm = rtnList[5];
            scwin.wrkLobranCdRow = row;
          }
        }
      } else if (wrkPlClsCd == scwin.WRK_PL_CLS_CD_MARTRPIER && row > 0 && ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_MARTR) {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNm"));
        let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
        if (!$c.gus.cfIsNull($p, pCode)) {
          let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, wrkPlClsCd);
          if (rtnList != null && rtnList[0].trim() != "N/A") {
            scwin.wrkLobranCd = rtnList[2];
            scwin.wrkLobranNm = rtnList[3];
            scwin.internalSellLodeptCd = rtnList[4];
            scwin.internalSellLodeptNm = rtnList[5];
            scwin.wrkLobranCdRow = row;
          }
        }
      } else {
        let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
        let pWrkLobranCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd");
        let pInternalSellLodeptCd = ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptCd");
        let pBizDomCd = wrkPlClsCd == scwin.WRK_PL_CLS_CD_PIER ? scwin.BIZ_DOM_CD_STV : scwin.BIZ_DOM_CD_STR;
        if (!$c.gus.cfIsNull($p, pCode) && ($c.gus.cfIsNull($p, pWrkLobranCd) || $c.gus.cfIsNull($p, pInternalSellLodeptCd))) {
          let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', pBizDomCd, wrkPlClsCd);
          if (rtnList != null && rtnList[0].trim() != "N/A") {
            ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
            ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
            ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[2]);
            ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[3]);
            ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", rtnList[3]);
            ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[4]);
            ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[5]);
            ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", rtnList[5]);
          }
        }
      }
    }
  }
};
scwin.f_setWorkLobranNoDataAutoClose = function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName)) return false;
  let pWhere = pWrkPlClsCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfoNoDataAutoClose', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF, null);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (pDptWrkChangeTF == "F") {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
        if (!$c.gus.cfIsNull($p, rtnList[3])) ds_odrWrkPathStepDetail.setCellData(row, "bizDomCd", rtnList[3]);
      }
      if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
      }
    }
  } else {
    if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
      ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
    }
  }
};
scwin.f_setWorkLobranInternalSellLodept = function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  let pBizDomCd = ds_odrWrkPathStepDetail.getCellData(row, "bizDomCd").trim();
  let pSelpchItemCd = ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName) || pSelpchItemCd == scwin.SELPCH_ITEM_CD_NOSELL) return false;
  let pWhere = pWrkPlClsCd + "," + pBizDomCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWorkStepEachWorkPlaceInfo', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF, null);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (pDptWrkPlsYn == "T") {
        if (pDptWrkChangeTF == "F") {
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
          if (!$c.gus.cfIsNull($p, rtnList[2])) ds_odrWrkPathStepDetail.setCellData(row, "bizDomCd", rtnList[2]);
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
            ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
          }
        }
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "arvWrkPlCd", rtnList[0]);
      }
    }
  } else {
    if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
      ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
    }
    ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
    ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
  }
};
scwin.f_setWorkPlaceLobranCd = async function (pCode, pName, pBizDomCd, pWrkPlClsCd) {
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pBizDomCd)) return false;
  let pWhere = pWrkPlClsCd + "," + pBizDomCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWorkPlaceLobranCd', pCode, pName, 'T', null, null, null, null, pWhere, null, null, null, null, null, 'F', "작업장,작업장코드,작업장명", 'T', null);
  return rtnList;
};
scwin.f_copyTempDataSet = async function () {
  let commRow = ds_odrCommWrkPath.getRowPosition();
  let v_commSeq = ds_odrCommWrkPath.getCellData(commRow, "commSeq");
  let v_odrWrkPathSeq = ds_odrCommWrkPath.getCellData(commRow, "odrWrkPathSeq");
  let v_ctrtWrkPathSeq = ds_odrCommWrkPath.getCellData(commRow, "ctrtWrkPathSeq");
  scwin.f_CopyDataSetOdrCommWrkPath(ds_odrCommWrkPath, ds_odrCommWrkPathTemp);
  ds_odrWrkPathStepDetailTemp.removeAll();
  scwin.f_CopyDataSetValue(ds_odrWrkPathStepDetail, ds_odrWrkPathStepDetailTemp);
};
scwin.f_CopyDataSetValue = async function (ds1, ds2) {
  let commRow = ds_odrCommWrkPath.getRowPosition();
  let v_commSeq = ds_odrCommWrkPath.getCellData(commRow, "commSeq");
  let v_odrWrkPathSeq = ds_odrCommWrkPath.getCellData(commRow, "odrWrkPathSeq");
  let v_ctrtWrkPathSeq = ds_odrCommWrkPath.getCellData(commRow, "ctrtWrkPathSeq");
  for (let i = 0; i < ds1.getRowCount(); i++) {
    ds2.insertRow(ds2.getRowCount());
    let newRow = ds2.getRowCount() - 1;
    let colCount = ds1.getColumnCount();
    for (let j = 0; j < colCount; j++) {
      let colId = ds1.getColumnID(j);
      switch (colId) {
        case "commSeq":
          ds2.setCellData(newRow, colId, v_commSeq);
          break;
        case "odrWrkPathSeq":
          ds2.setCellData(newRow, colId, v_odrWrkPathSeq);
          break;
        case "ctrtWrkPathSeq":
          ds2.setCellData(newRow, colId, v_ctrtWrkPathSeq);
          break;
        default:
          try {
            ds2.setCellData(newRow, colId, ds1.getCellData(i, colId));
          } catch (e) {}
          break;
      }
    }
  }
};
scwin.f_CopyDataSetOdrCommWrkPath = async function (ds1, ds2) {
  let row = ds1.getRowPosition();
  if (row >= 0) {
    ds2.removeAll();
    ds2.insertRow(0);
    let colCount = ds1.getColumnCount();
    for (let j = 0; j < colCount; j++) {
      let colId = ds1.getColumnID(j);
      try {
        ds2.setCellData(0, colId, ds1.getCellData(row, colId));
      } catch (e) {}
    }
  }
};
scwin.f_confirmOrder = async function () {
  let chk = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_010, ["오더확정"]);
  if (chk) {
    await $c.sbm.execute($p, sbm_confirmOrder);
  }
};
scwin.f_checkWorkStepEditMode = async function (row) {
  if (row < 0 || row >= ds_odrWrkPathStepDetail.getRowCount()) return false;
  if (gr_odrWrkPathStpDetail.getReadOnly && gr_odrWrkPathStpDetail.getReadOnly()) {
    $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    return false;
  }
  let v_odrWrkStpSeq = parseInt(ds_odrWrkPathStepDetail.getCellData(row, "odrWrkStpSeq"));
  if (row == 0) {
    $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
    $c.gus.cfDisableBtnOnly($p, [btnDeleteRow, btnUndoMark]);
    return false;
  }
  if (v_odrWrkStpSeq == 10) {
    $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
    $c.gus.cfDisableBtnOnly($p, [btnDeleteRow, btnUndoMark]);
    return false;
  }
  if (row == ds_odrWrkPathStepDetail.getRowCount() - 1) {
    $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    return false;
  }
  if (v_odrWrkStpSeq % 10 == 0) {
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
      let wrkStpCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkStpCd");
      if (wrkStpCd == scwin.WRK_STP_CD_SHUTTLE || wrkStpCd == scwin.WRK_STP_CD_GROUND_TRANS) {
        $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
        return false;
      } else {
        $c.gus.cfDisableBtnOnly($p, [btnDeleteRow, btnUndoMark]);
        if (row + 1 < ds_odrWrkPathStepDetail.getRowCount()) {
          let nextWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row + 1, "wrkPlClsCd");
          let nextSeq = parseInt(ds_odrWrkPathStepDetail.getCellData(row + 1, "odrWrkStpSeq"));
          if ((nextWrkPlClsCd == scwin.WRK_PL_CLS_CD_DOOR || nextWrkPlClsCd == scwin.WRK_PL_CLS_CD_RAILSTN || nextWrkPlClsCd == scwin.WRK_PL_CLS_CD_MARTRPIER) && nextSeq % 10 == 0) {
            $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnUndoMark]);
            return false;
          }
        }
        $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
        return false;
      }
    }
    let curWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
    if (curWrkPlClsCd == scwin.WRK_PL_CLS_CD_DOOR || curWrkPlClsCd == scwin.WRK_PL_CLS_CD_RAILSTN || curWrkPlClsCd == scwin.WRK_PL_CLS_CD_MARTRPIER) {
      if (row + 1 < ds_odrWrkPathStepDetail.getRowCount()) {
        let nextWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row + 1, "wrkPlClsCd");
        let nextSeq = parseInt(ds_odrWrkPathStepDetail.getCellData(row + 1, "odrWrkStpSeq"));
        if ($c.gus.cfIsNull($p, nextWrkPlClsCd.trim()) && nextSeq % 10 == 0) {
          $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
          return false;
        }
      }
      $c.gus.cfDisableBtnOnly($p, [btnDeleteRow, btnUndoMark]);
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
      return false;
    }
    $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    return false;
  } else {
    $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    return false;
  }
};
scwin.f_discountSurcharge = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_odrNo]);
  if (chk) {
    let v_odrNo = ed_odrNo.getValue().replace(/\s*$/, '');
    let param = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    $c.win.openMenu($p, "할인할증", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_24b.xml", "sd_402_01_24b.xml", param);
  }
};
scwin.f_chkCommodityWorkPath = async function () {
  let chkWorkPath = true;
  for (let i = 0; i < ds_odrCommWrkPath.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_odrCommWrkPath.getCellData(i, "wrkRsltsNo"))) {
      chkWorkPath = false;
    }
  }
  if (chkWorkPath) {
    $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
  $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.hid_chkUseFilter = "true";
  gr_odrCommWrkPath.setReadOnly("grid", true);
  gr_odrWrkPathStpDetail.setReadOnly("grid", true);
  if (ds_order.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    scwin.f_FieldClear();
    return;
  }
  let odrRow = ds_order.getRowPosition();
  let odrKndCd = ds_order.getCellData(odrRow, "odrKndCd");
  let odrDcsnYn = ds_order.getCellData(odrRow, "odrDcsnYn");
  let odrCompleteYn = ds_order.getCellData(odrRow, "odrCompleteYn");
  let odrDelYn = ds_order.getCellData(odrRow, "odrDelYn");
  let autoOdrYn = ds_order.getCellData(odrRow, "autoOdrYn");
  if (odrKndCd.substr(0, 1) == "D") {
    // TODO: lay_realMchtclntNm, lay_ctrtClntNm 등 textbox 값 설정
  }
  scwin.f_setDisplayOdrKndCd(odrKndCd);
  scwin.hid_odrKndCd = odrKndCd;
  scwin.hid_ctrtClntNo = ds_order.getCellData(odrRow, "ctrtClntNo");
  scwin.hid_ctrtNo = ds_order.getCellData(odrRow, "ctrtNo");
  if (odrCompleteYn != scwin.YN_YES) {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
    scwin.f_chkCommodityWorkPath();
  } else {
    $c.gus.cfDisableBtnOnly($p, [btnUpdate, btnSave]);
  }
  $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
  if (ds_odrCommWrkPath.getRowCount() > 0 && odrDcsnYn != scwin.YN_YES && odrCompleteYn != scwin.YN_YES) {
    if (ds_odrCommWrkPath.getCellData(ds_odrCommWrkPath.getRowPosition(), "odrWrkPathSeq") == "0" || ds_odrCommWrkPath.getCellData(ds_odrCommWrkPath.getRowPosition(), "odrWrkPathSeq") == "") {
      scwin.f_Update();
    }
  }
  scwin.f_setTabOrderInfo(ds_orderSearch.get("odrNo"));
  scwin.hid_chkReterieve = "retrieveIn";
  let v_odrWrkPathCnt = parseInt(ds_order.getCellData(odrRow, "odrWrkPathCnt"));
  if (v_odrWrkPathCnt > 0 && v_odrWrkPathCnt >= ds_odrCommWrkPath.getRowCount()) {
    if (odrDcsnYn != scwin.YN_YES) {
      $c.gus.cfEnableObjects($p, [btnConfirmOrder]);
    } else {
      $c.gus.cfDisableObjects($p, [btnConfirmOrder]);
      if (odrCompleteYn == scwin.YN_YES) {
        $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
      }
    }
  } else {
    $c.gus.cfDisableObjects($p, [btnConfirmOrder]);
  }
  if (autoOdrYn == scwin.YN_YES) {
    $c.gus.cfDisableBtnOnly($p, [btnUpdate, btnSave]);
  }
  if (odrDelYn == String(scwin.YN_YES)) {
    gr_odrCommWrkPath.setReadOnly("grid", true);
    gr_odrWrkPathStpDetail.setReadOnly("grid", true);
    $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark, btnSave]);
  }
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchWorkStep_submitdone = async function (e) {
  scwin.f_setWorkPathStepDetail();
};
scwin.sbm_searchWorkStep_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveLobranTrans_submitdone = async function (e) {
  if (ds_lobran.getRowCount() > 0) {
    if (scwin.loginUserId == "040239") {
      scwin.internalSellLodeptCd = "4A5";
      scwin.internalSellLodeptNm = "인천제강운송";
    } else {
      scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
      scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
    }
  }
};
scwin.sbm_retrieveLobranTrans_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_confirmOrder_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_010, ["오더확정"]);
  scwin.f_Retrieve();
};
scwin.sbm_confirmOrder_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_wrkPlClsCd_submitdone = function (e) {
  $c.gus.cfChangeCdNmFormat($p, ds_wrkPlClsCd, "cd", "cdNm");
  ds_wrkPlClsCd.insertRow(0);
  ds_wrkPlClsCd.setCellData(0, "cd", " ");
  ds_wrkPlClsCd.setCellData(0, "cdNm", "→");
};
scwin.sbm_wrkPlClsCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_LkStepNo_submitdone = function (e) {
  $c.gus.cfChangeCdNmFormat($p, ds_LkStepNo, "wrkStpCd", "wrkStpNm");
};
scwin.sbm_LkStepNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ed_odrNo_onkeydown = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};
scwin.gr_odrWrkPathStpDetail_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  switch (columnId) {
    case "wrkLobranNm":
      scwin.f_openCommPopUpGrid(1, row, ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd"), ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranNm"), 'F', 'F');
      break;
    case "dptWrkPlNm":
      let chkPopup = scwin.f_openCommPopUpGrid(2, row, ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd"), ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlNm"), 'F', 'F');
      if (chkPopup) scwin.f_setWorkStepInfoRefresh();
      break;
    case "internalSellLodeptNm":
      scwin.f_openCommPopUpGrid(3, row, ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptCd"), ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptNm"), 'F', 'F');
      break;
    case "vsslCdPortcnt":
      scwin.f_openCommPopUpGrid(4, row, ds_odrWrkPathStepDetail.getCellData(row, "vsslCd"), ds_odrWrkPathStepDetail.getCellData(row, "vsslNm"), 'F', 'F');
      break;
    default:
      break;
  }
};
scwin.ds_odrCommWrkPath_oncelldatachange = function (info) {
  let row = info.row;
  let colid = info.colId;
  if (colid == "ctrtWrkPathSeq") {
    if (ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq") > 0) {
      ds_searchWrkStep.set("odrNo", ds_odrCommWrkPath.getCellData(row, "odrNo"));
      ds_searchWrkStep.set("commSeq", ds_odrCommWrkPath.getCellData(row, "commSeq"));
      ds_searchWrkStep.set("odrWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "odrWrkPathSeq"));
      ds_searchWrkStep.set("ctrtNo", ds_odrCommWrkPath.getCellData(row, "ctrtNo"));
      ds_searchWrkStep.set("ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq"));
      scwin.f_RetrieveWorkStep();
    }
  }
};
scwin.ds_odrCommWrkPath_onrowpositionchange = function (info) {
  let row = info.row;
  if (row < 0) return;
  if (ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq") > 0) {
    ds_searchWrkStep.set("odrNo", ds_odrCommWrkPath.getCellData(row, "odrNo"));
    ds_searchWrkStep.set("commSeq", ds_odrCommWrkPath.getCellData(row, "commSeq"));
    ds_searchWrkStep.set("odrWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "odrWrkPathSeq"));
    ds_searchWrkStep.set("ctrtNo", ds_odrCommWrkPath.getCellData(row, "ctrtNo"));
    ds_searchWrkStep.set("ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq"));
    scwin.f_RetrieveWorkStep();
  }
  if (row >= 0 && btnUpdate.getDisabled()) {
    if (scwin.f_chkResultsConfirmationCommodity(row)) {
      gr_odrCommWrkPath.setReadOnly("grid", true);
      gr_odrWrkPathStpDetail.setReadOnly("grid", true);
      $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark, btnUpdate, btnSave]);
    } else {
      gr_odrCommWrkPath.setReadOnly("grid", false);
      gr_odrWrkPathStpDetail.setReadOnly("grid", false);
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    }
  }
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
  scwin.wrkLobranCd = $c.ses.getLobranCd();
  scwin.wrkLobranNm = $c.ses.getLobranNm();
  if (scwin.loginUserId == "040239") {
    scwin.internalSellLodeptCd = "4A5";
    scwin.internalSellLodeptNm = "인천제강운송";
  } else if (ds_lobran.getRowCount() > 0) {
    scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
    scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
  }
  scwin.wrkLobranCdRow = 0;
};
scwin.ds_odrWrkPathStepDetail_onrowpositionchange = function (info) {
  let row = info.row;
  if (row >= 0) {
    scwin.f_checkWorkStepEditMode(row);
    if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim() == "") {
      gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", true);
    } else {
      gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", false);
    }
    if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() == scwin.SELPCH_ITEM_CD_NOSELL) {
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", true);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", true);
    } else {
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", false);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", false);
    }
  }
};
scwin.f_openCommonPopUpNoDataClose = function (pCode) {
  if ($c.gus.cfIsNull($p, pCode)) return;
  let pValue = "T,J,,,T,T,1";
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, '', 'T', null, null, null, null, pValue, null, null, null, null, null, 'F', "매출귀속부서,부서코드,부서명", 'T', null);
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] != "N/A") {
      scwin.internalSellLodeptCd = rtnList[0];
      scwin.internalSellLodeptNm = rtnList[1];
    }
  }
};
scwin.f_RetrieveWorkStepReUse = function () {
  let row = parseInt(scwin.hid_rowNo);
  if (ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq") > 0) {
    ds_searchWrkStep.set("odrNo", ds_odrCommWrkPath.getCellData(row, "odrNo"));
    ds_searchWrkStep.set("commSeq", ds_odrCommWrkPath.getCellData(row, "commSeq"));
    ds_searchWrkStep.set("odrWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "odrWrkPathSeq"));
    ds_searchWrkStep.set("ctrtNo", ds_odrCommWrkPath.getCellData(row, "ctrtNo"));
    ds_searchWrkStep.set("ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq"));
    scwin.f_RetrieveWorkStep();
  }
  if (row >= 0 && btnUpdate.getDisabled()) {
    if (scwin.f_chkResultsConfirmationCommodity(row)) {
      gr_odrCommWrkPath.setReadOnly("grid", true);
      gr_odrWrkPathStpDetail.setReadOnly("grid", true);
      $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark, btnUpdate, btnSave]);
    } else {
      gr_odrCommWrkPath.setReadOnly("grid", false);
      gr_odrWrkPathStpDetail.setReadOnly("grid", false);
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
    }
  }
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
  scwin.wrkLobranCd = $c.ses.getLobranCd();
  scwin.wrkLobranNm = $c.ses.getLobranNm();
  if (scwin.loginUserId == "040239") {
    scwin.internalSellLodeptCd = "4A5";
    scwin.internalSellLodeptNm = "인천제강운송";
  } else if (ds_lobran.getRowCount() > 0) {
    scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
    scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
  }
  scwin.wrkLobranCdRow = 0;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'content',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 200px;',ref:'data:ds_orderSearch.odrNo',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업경로 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section ',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_odrCommWrkPath',fixedColumn:'0',focusMode:'row',id:'gr_odrCommWrkPath',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',autoFit:'allColumn',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'odrNo',inputType:'text',removeBorderStyle:'false',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'commSeq',inputType:'text',removeBorderStyle:'false',value:'오더품명순번',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'commCd',inputType:'text',removeBorderStyle:'false',value:'품명코드',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'text',removeBorderStyle:'false',value:'품명',width:'220'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'qty',inputType:'text',value:'수량',width:'80'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'grossWt',inputType:'text',style:'',value:'중량(KG)',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'cbm',inputType:'text',value:'CBM',width:'80'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'dptWrkPlClsCd',inputType:'text',value:'출발작업장구분코드',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'dptWrkPlCd',inputType:'text',value:'출발작업장코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'dptWrkPlNm',inputType:'text',style:'',value:'출발작업장',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'arvWrkPlClsCd',inputType:'text',style:'',value:'도착작업장구분코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'arvWrkPlCd',inputType:'text',style:'',value:'도착작업장코드',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'arvWrkPlNm',inputType:'text',value:'도착작업장',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'odrWrkPathSeq',inputType:'text',value:'오더작업경로순번',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'ctrtNo',inputType:'text',value:'계약번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',value:'작업경로',width:'210'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkStDt',inputType:'text',value:'작업시작일자',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStHh',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkEndDt',inputType:'text',value:'작업종료일자',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkEndHh',inputType:'text',value:'작업종료시간',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'sellYn',inputType:'text',value:'매출여부',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkRsltsNo',inputType:'text',value:'실적번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkRsltsYn',inputType:'text',style:'',value:'실적여부',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'text',removeBorderStyle:'false',width:'220',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'80',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'80',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlClsCd',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlClsCd',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',width:'210'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ctrtWrkPathSeq:ctrtWrkPathNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_ctrtWrkPath'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellYn',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkRsltsNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkRsltsYn',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단계',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_odrWrkPathStepDetail',fixedColumn:'0',focusMode:'row',id:'gr_odrWrkPathStpDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',value:'오더번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',value:'품명순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrWrkPathSeq',inputType:'text',removeBorderStyle:'false',value:'작업경로순번',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',removeBorderStyle:'false',value:'계약작업경로순번',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'odrWrkPathNm',inputType:'text',value:'작업경로',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'odrWrkStpSeq',inputType:'text',style:'',value:'작업단계순번',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkPlClsCd',inputType:'text',value:'작업장구분',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',hidden:'false',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'140'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'bizDomCd',inputType:'text',value:'사업영역코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'selpchItemCd',inputType:'text',value:'매출입항목코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'selpchItemNm',inputType:'text',value:'매출입항목',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'t',id:'dptWrkPlCd',inputType:'text',value:'출발작업장코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'dptWrkPlNm',inputType:'text',value:'작업장',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'t',id:'dptWrkPlNmOrg',inputType:'text',value:'출발작업장',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'arvWrkPlCd',inputType:'text',value:'도착작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'arvWrkPlNm',inputType:'text',value:'도착작업장',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'wrkLobranCd',inputType:'text',value:'작업물류점소코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'wrkLobranNm',inputType:'text',value:'작업점소',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranNmOrg',inputType:'text',style:'',value:'작업물류점소',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',style:'',value:'작업시작일자',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'작업시작시간',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',style:'',value:'작업종료일자',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'작업종료시간',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalSellLodeptCd',inputType:'text',style:'',value:'매출귀속부서코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'internalSellLodeptNm',inputType:'text',style:'',value:'매출귀속부서',width:'150'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'internalSellLodeptNmOrg',value:'매출귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'선박코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',style:'',value:'선박명',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',style:'',value:'항차',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCdPortcnt',inputType:'text',style:'',value:'선명항차',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'RegID',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'RegDTM',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrWrkPathSeq',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkStpSeq',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsCd',inputType:'text',width:'120',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkPlClsCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',width:'140',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_LkStepNo'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'textImage',width:'150',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNmOrg',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranCd',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranNm',inputType:'textImage',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranNmOrg',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalSellLodeptCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalSellLodeptNm',inputType:'textImage',style:'',value:'',width:'150',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'internalSellLodeptNmOrg',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCdPortcnt',inputType:'textImage',style:'',value:'',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btnInsertRow',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btnDeleteRow',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btnUndoMark',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:button',A:{class:'btn link',id:'btnConfirmOrder',label:'오더확정',style:''}},{T:1,N:'w2:button',A:{class:'btn link',id:'btnDcSc',label:'할인할증',style:''}},{T:1,N:'w2:button',A:{class:'btn link',id:'btnOrderWrkStepDetail',label:'작업일시배분 조회 및 수정',style:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btnUpdate',label:'수정',style:''}},{T:1,N:'w2:button',A:{class:'btn',id:'btnSave',label:'저장',style:''}}]}]}]}]}]}]}]})