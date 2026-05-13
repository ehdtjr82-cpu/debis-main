/*amd /AI/op_202_02_27p.xml 106061 7ed837fe72c17883726002dfe154730243a35e81e8286563cf54d5d37d6a284c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryClsCd',name:'배차미배차구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchWrkStep'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobranQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptmentCd',name:'부서조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchPchsAmt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'협력업체거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTrfCd',name:'컨테이너요율코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCommodity',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCntrSummary',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCntrWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstClsCd',name:'작업구간구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAdptYn',name:'매출적용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outMgntYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inMgntYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'PDA작업지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'작업장구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlCd',name:'대표작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlNm',name:'대표작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtnDptWrkPlCd',name:'리턴출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtnDptWrkPlClsCd',name:'리턴출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtnWrkStDt',name:'리턴작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtnWrkStHh',name:'리턴작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtnWrkEndDt',name:'리턴작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtnWrkEndHh',name:'리턴작업종료시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStepDetail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'작업장구분코드출발',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'작업장구분코드도착',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCdChange',name:'작업장구분코드변경출발',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCdChange',name:'작업장구분코드변경도착',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd2',name:'출발작업장코드비교용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd2',name:'도착작업장코드비교용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstClsCd',name:'작업구간구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAdptYn',name:'매출적용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictYn',name:'작업지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'컨테이너FE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsYn',name:'SMS여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm2',name:'출발작업장명비교용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryClsCd',name:'배차미배차구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'PDA작업지시여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outMgntYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inMgntYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNmOrg',name:'작업물류점소명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNmOrg',name:'매출귀속부서명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderSearch',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryClsCd',name:'배차미배차구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlClsCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'상위작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultPchsAmt',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.transwrkplan.SaveOperationContainerWorkPathDetailInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_odrCntrWrkPath","key":"IN_DS1"},{"id":"ds_odrWrkPathStepDetail","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerContractOrderWorkPathCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCntrWrkPath","key":"OUT_DS2"},{"id":"ds_odrCommodity","key":"OUT_DS3"},{"id":"ds_ctrtWrkPath","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCntrWrkPath","key":"OUT_DS2"},{"id":"ds_odrCommodity","key":"OUT_DS3"},{"id":"ds_ctrtWrkPath","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchWorkStep',action:'/ds.op.wrkplan.transwrkplan.RetrieveOrderOperationContainerContractOrderWorkStepCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchWrkStep","key":"IN_DS1"},{"id":"ds_order","key":"IN_DS2"},{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_searchWorkStep_submitdone','ev:submiterror':'scwin.sbm_searchWorkStep_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLobranTrans',action:'/ds.sd.odrmgnt.odrreg.RetrieveLogisticsBranchDepartmentCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_lobranQueryCondition","key":"IN_DS1"},{"id":"ds_lobran","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_lobran","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveLobranTrans_submitdone','ev:submiterror':'scwin.sbm_retrieveLobranTrans_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePchsAmt',action:'/ds.op.wrkplan.transwrkplan.RetrieveTransTpchsFareComparisonCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchPchsAmt","key":"IN_DS1"},{"id":"ds_resultPchsAmt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultPchsAmt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrievePchsAmt_submitdone','ev:submiterror':'scwin.sbm_retrievePchsAmt_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.wrkLobranCd = "";
scwin.wrkLobranNm = "";
scwin.internalSellLodeptCd = "";
scwin.internalSellLodeptNm = "";
scwin.wrkLobranCdRow = 0;
scwin.gv_rtnValue = 0;
scwin.gv_modifyYn = false;
scwin.rail_yn = "";
scwin.v_odrWrkStpSeq = 0;
scwin.v_odrWrkStpSeqMax = 0;
scwin.v_dptWrkPlCd = "";
scwin.v_bizDomCd = "";
scwin.hid_odrKndCd = "";
scwin.hid_ctrtClntNo = "";
scwin.hid_ctrtNo = "";
scwin.hid_realMchtclntNo = "";
scwin.hid_chkUseFilter = "";
scwin.hid_chkReterieve = "";
scwin.hid_cntrSeq = "";
scwin.hid_qryClsCd = "";
scwin.v_row = 0;
scwin.v_colid = "";
scwin.userId = "";
scwin.loUpperLobranCd = "";
scwin.ODR_KND_CD_EXP_GNRL_CNTR_ODR = "C4";
scwin.ODR_KND_CD_IMP_STV_CNTR_ODR = "C8";
scwin.ODR_KND_CD_EXP_STV_CNTR_ODR = "C9";
scwin.ODR_KND_CD_IMP_CVSSL_CNTR_ODR = "C1";
scwin.ODR_KND_CD_EXP_CVSSL_CNTR_ODR = "C3";
scwin.ODR_KND_CD_EXAMINE_ODR = "CX";
scwin.ODR_KND_CD_RETURN_ODR = "CR";
scwin.ODR_KND_CD_PORT_CHANGE_ODR = "CP";
scwin.ODR_KND_CD_EMPTY_POSITION_ODR = "C7";
scwin.ODR_KND_CD_OFF_HIRE_ODR = "C6";
scwin.ODR_KND_CD_ON_HIRE_ODR = "C5";
scwin.ODR_KND_CD_CUSTOM_INSPECTION_ODR = "CI";
scwin.IMP_CD = "I";
scwin.EXP_CD = "E";
scwin.IMP_EXP_CLS_CD_IMP = "I";
scwin.YN_YES = 1;
scwin.YN_NO = 0;
scwin.TRANS_DEPARTMENT = "T";
scwin.SELPCH_ITEM_CD_NOSELL = "0000";
scwin.WRK_PL_CLS_CD_PIER = "P";
scwin.WRK_PL_CLS_CD_BERTH = "B";
scwin.WRK_PL_CLS_CD_DOOR = "D";
scwin.WRK_PL_CLS_CD_RAILSTN = "R";
scwin.WRK_PL_CLS_CD_MARTRPIER = "M";
scwin.WRK_STP_CD_FULL_IN = "0024";
scwin.WRK_STP_CD_FULL_OUT = "0025";
scwin.WRK_STP_CD_TRANS = "0002";
scwin.WRK_STP_CD_RETRV = "0003";
scwin.WRK_STP_CD_SHUTTLE = "0001";
scwin.WRK_STP_CD_GROUND_TRANS = "0047";
scwin.WRK_STP_CD_RAILROAD = "0004";
scwin.WRK_STP_CD_MARTR = "0005";
scwin.WRK_STP_CD_LOAD = "0010";
scwin.WRK_STP_CD_UNLOAD = "0011";
scwin.BIZ_DOM_CD_TRANS = "120";
scwin.BIZ_DOM_CD_STV = "110";
scwin.BIZ_DOM_CD_STR = "130";
scwin.CNTR_FULL_EMPTY_CLS_CD_EMPTY = "E";
scwin.CNTR_FULL_EMPTY_CLS_CD_FULL = "F";
scwin.PUSAN_DEFAULT_RETRV_CY = "6C01";
scwin.INCHEON_DEFAULT_RETRV_CY = "4C01";
scwin.SELL_ITEM_CD_TRANS_RATE = "0001";
scwin.BASIS_LDULD_WAIT_HH = 20;
scwin.onpageload = async function () {
  scwin.userId = $c.ses.getUserId();
  scwin.loUpperLobranCd = $c.ses.getLoUpperLobranCd ? $c.ses.getLoUpperLobranCd() : "";
  scwin.wrkLobranCd = $c.ses.getLobranCd();
  scwin.wrkLobranNm = $c.ses.getLobranNm();
  if (scwin.userId == "040239") {
    scwin.internalSellLodeptCd = "4A5";
    scwin.internalSellLodeptNm = "인천제강운송";
  }
  scwin.f_defaultValue();
  let params = $c.data.getParameter($p);
  if (params != null) {
    if (params.odrNo) ed_odrNo.setValue(params.odrNo);
    if (params.cntrSeq) scwin.hid_cntrSeq = params.cntrSeq;
    if (params.qryClsCd) scwin.hid_qryClsCd = params.qryClsCd;
  }
  scwin.f_Retrieve();
  scwin.f_Update();
};
scwin.f_defaultValue = async function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfEnableBtnOnly($p, [btnClose]);
  ds_orderSearch.insertRow(0);
  ds_orderSearch.setCellData(0, "odrNo", "");
  lay_ctrtClntNm.setValue("");
  lay_ctrtNo.setValue("");
  td_realMchtClntNm.setValue("실화주");
  lay_realMchtclntNm.setValue("");
  lay_odrKndNm.setValue("");
  scwin.hid_ctrtClntNo = "";
  scwin.hid_ctrtNo = "";
  scwin.hid_realMchtclntNo = "";
  dma_lobranQueryCondition.set("lobranCd", scwin.wrkLobranCd);
  dma_lobranQueryCondition.set("lobranClsCd", "T");
  dma_lobranQueryCondition.set("deptmentCd", scwin.TRANS_DEPARTMENT);
  dma_lobranQueryCondition.set("useYn", String(scwin.YN_YES));
  await $c.sbm.execute($p, sbm_retrieveLobranTrans);
  scwin.hid_chkUseFilter = "true";
  $c.gus.cfDisableObjects($p, [btnOrderWrkStepDetail]);
  ed_odrNo.setFocus();
};
scwin.f_setDisplayOdrKndCd = function (odrKndCd) {
  switch (odrKndCd) {
    case scwin.ODR_KND_CD_EXP_GNRL_CNTR_ODR:
      break;
    case scwin.ODR_KND_CD_IMP_STV_CNTR_ODR:
    case scwin.ODR_KND_CD_EXP_STV_CNTR_ODR:
      gr_odrCntrWrkPath.setColumnVisible("qty", false);
      gr_odrCntrWrkPath.setColumnVisible("cntrTypCd", false);
      gr_odrCntrWrkPath.setColumnVisible("arvWrkPlNm", false);
      break;
    default:
      gr_odrCntrWrkPath.setColumnVisible("qty", false);
      gr_odrCntrWrkPath.setColumnVisible("cntrTypCd", true);
      gr_odrCntrWrkPath.setColumnVisible("arvWrkPlNm", true);
      break;
  }
};
scwin.f_Retrieve = async function () {
  scwin.rail_yn = "";
  scwin.v_odrWrkStpSeq = 0;
  scwin.v_odrWrkStpSeqMax = 0;
  let chk = await $c.gus.cfValidate($p, [ed_odrNo]);
  if (!chk) return;
  let odrNo = ed_odrNo.getValue().replace(/\s*$/, '');
  scwin.v_dptWrkPlCd = "";
  scwin.v_bizDomCd = "";
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfEnableBtnOnly($p, [btnClose]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
  ds_order.removeAll();
  ds_odrCntrSummary.removeAll();
  ds_ctrtWrkPath.removeAll();
  ds_odrWrkPathStep.removeAll();
  ds_odrCntrWrkPath.removeAll();
  ds_ctrtWrkPathStep.removeAll();
  ds_odrWrkPathStepDetail.removeAll();
  $c.gus.cfDisableObjects($p, [btnOrderWrkStepDetail]);
  ds_orderSearch.setCellData(ds_orderSearch.getRowPosition(), "odrNo", odrNo);
  scwin.gv_modifyYn = false;
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_FieldClear = function () {
  ed_odrNo.setValue("");
  ed_odrNo.setFocus();
};
scwin.f_RetrieveWorkStep = async function () {
  if (dma_searchWrkStep.get("ctrtWrkPathSeq") == 0) return;
  await $c.sbm.execute($p, sbm_searchWorkStep);
};
scwin.f_InsertRow = async function () {
  let rowPos = ds_odrWrkPathStepDetail.getRowPosition();
  let totalRow = ds_odrWrkPathStepDetail.getRowCount();
  for (let i = rowPos; i < totalRow; i++) {
    if (ds_odrWrkPathStepDetail.getCellData(i, "transRsltsSeq") > 0) {
      await $c.gus.cfAlertMsg($p, "삽입하고자 하는 이후의 작업단계에 운송실적이 발생되어서 삽입할 수 없습니다.");
      return;
    } else if (ds_odrWrkPathStepDetail.getCellData(i, "transWrkIndictNo") != "") {
      await $c.gus.cfAlertMsg($p, "삽입하고자 하는 이후의 작업단계에 운송작업지시가 발생되어서 삽입할 수 없습니다.");
      return;
    }
  }
  if (ds_odrWrkPathStepDetail.getCellData(rowPos, "odrWrkStpSeq") % 10 < 9) {
    ds_odrWrkPathStepDetail.insertRow(rowPos + 1);
    scwin.f_CopyDataRow(ds_odrWrkPathStepDetail, rowPos, rowPos + 1);
    scwin.f_setWorkStepInfoRefresh2(rowPos + 1);
  } else {
    await $c.gus.cfAlertMsg($p, "더이상 작업단계를 추가할수 없습니다.");
    return;
  }
  let curRowPos = ds_odrWrkPathStepDetail.getRowPosition();
  if (ds_odrWrkPathStepDetail.getCellData(curRowPos, "odrNo").substring(0, 3) == "BC4" && scwin.rail_yn == "Y" && scwin.userId != "991166" && scwin.userId != "030706") {
    if (ds_odrWrkPathStepDetail.getCellData(curRowPos, "odrWrkStpSeq") >= scwin.v_odrWrkStpSeq) {
      await $c.win.alert($p, "철송이후 단계를 수정하실수 없습니다.");
      scwin.f_Retrieve();
    }
  }
};
scwin.f_DeleteRow = async function () {
  let rowPos = ds_odrWrkPathStepDetail.getRowPosition();
  let totalRow = ds_odrWrkPathStepDetail.getRowCount();
  for (let i = rowPos; i < totalRow; i++) {
    if (ds_odrWrkPathStepDetail.getCellData(i, "transRsltsSeq") > 0) {
      await $c.gus.cfAlertMsg($p, "삭제하고자 하는 이후의 작업단계에 운송실적이 발생되어서 삭제할 수 없습니다.");
      return;
    }
    if (i - 1 >= 0) {
      if (ds_odrWrkPathStepDetail.getCellData(i - 1, "transRsltsSeq") > 0) {
        await $c.gus.cfAlertMsg($p, "삭제하고자 하는 단계가 포함된 운송작업단계에 운송실적이 발생되어서 삭제할 수 없습니다.");
        return;
      }
    }
    if (ds_odrWrkPathStepDetail.getCellData(i, "transWrkIndictNo") != "") {
      await $c.gus.cfAlertMsg($p, "삭제하고자 하는 이후의 작업단계에 운송작업지시가 발생되어서 삭제할 수 없습니다.");
      return;
    }
    if (i - 1 >= 0) {
      if (ds_odrWrkPathStepDetail.getCellData(i - 1, "transWrkIndictNo") != "") {
        await $c.gus.cfAlertMsg($p, "삭제하고자 하는 단계가 포함된 운송작업단계에 운송작업지시가 발생되어서 삭제할 수 없습니다.");
        return;
      }
    }
  }
  ds_odrWrkPathStepDetail.removeRow(rowPos);
  scwin.f_setWorkStepInfoRefresh2(ds_odrWrkPathStepDetail.getRowPosition());
};
scwin.f_CopyDataRow = function (dataObject, sourceRow, targetRow) {
  let v_odrWrkStpSeqVal = parseInt(dataObject.getCellData(sourceRow, "odrWrkStpSeq"));
  let v_tempSeq = parseInt(v_odrWrkStpSeqVal / 10) * 10;
  let colCount = dataObject.getColumnCount();
  for (let i = 0; i < colCount; i++) {
    let colId = dataObject.getColumnID(i);
    if (colId == "odrWrkStpSeq") {
      dataObject.setCellData(targetRow, colId, dataObject.getCellData(sourceRow, colId) * 1 + 1);
    } else if (colId == "arvWrkPlClsCd" || colId == "dptWrkPlClsCd" || colId == "dptWrkPlClsCdChange" || colId == "arvWrkPlClsCdChange") {
      dataObject.setCellData(targetRow, colId, " ");
    } else if (colId == "wrkPlClsCd" || colId == "wrkStpCd" || colId == "dptWrkPlCd" || colId == "dptWrkPlNm" || colId == "arvWrkPlCd" || colId == "arvWrkPlNm" || colId == "wrkLobranCd" || colId == "wrkLobranNm" || colId == "internalSellLodeptCd" || colId == "internalSellLodeptNm" || colId == "bizDomCd" || colId == "completeYn") {} else if (colId == "selpchItemCd" || colId == "selpchItemNm") {
      dataObject.setCellData(targetRow, colId, dataObject.getCellData(sourceRow, colId));
    } else {
      dataObject.setCellData(targetRow, colId, dataObject.getCellData(sourceRow, colId));
    }
  }
  for (let j = 0; j < dataObject.getRowCount(); j++) {
    let v_compSeq = parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) - v_tempSeq;
    if (dataObject.getCellData(j, "odrWrkStpSeq") > v_tempSeq && v_compSeq > 0 && v_compSeq < 10) {
      if (j > 0) {
        dataObject.setCellData(j, "odrWrkStpSeq", parseInt(dataObject.getCellData(j - 1, "odrWrkStpSeq")) + 1);
      }
    }
  }
};
scwin.f_Update = function () {
  let countWrkIndictNo = 0;
  let countModify = 0;
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if (ds_odrWrkPathStepDetail.getCellData(i, "transWrkIndictNo") != "") countWrkIndictNo++;
    if (ds_odrWrkPathStepDetail.getCellData(i, "odrWrkStpSeq") % 10 != 0) countModify++;
  }
  gr_odrCntrWrkPath.setReadOnly("grid", false);
  gr_odrWrkPathStpDetail.setReadOnly("grid", false);
  $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
  if (ds_odrWrkPathStep.getRowCount() > 0) {
    scwin.gv_modifyYn = true;
  }
  gr_odrWrkPathStpDetail.setFocusedCell(ds_odrWrkPathStepDetail.getRowPosition(), "wrkLobranNm");
  scwin.v_row = ds_odrWrkPathStepDetail.getRowPosition();
  scwin.v_colid = "wrkLobranNm";
};
scwin.f_Close = function () {
  $c.win.closePopup($p, scwin.gv_rtnValue);
};
scwin.f_retrievePchsAmt = async function (row) {
  dma_searchPchsAmt.set("branCd", ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd"));
  dma_searchPchsAmt.set("clntNo", ds_odrWrkPathStepDetail.getCellData(row, "ctrtClntNo"));
  dma_searchPchsAmt.set("copCoClntNo", ds_odrWrkPathStepDetail.getCellData(row, "copCoClntNo"));
  dma_searchPchsAmt.set("odrKndCd", ds_odrWrkPathStepDetail.getCellData(row, "odrKndCd"));
  dma_searchPchsAmt.set("adptDt", ds_odrWrkPathStepDetail.getCellData(row, "wrkStDt"));
  dma_searchPchsAmt.set("dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd"));
  dma_searchPchsAmt.set("arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(row, "arvWrkPlCd"));
  dma_searchPchsAmt.set("cntrSizCd", ds_odrWrkPathStepDetail.getCellData(row, "cntrSizCd"));
  dma_searchPchsAmt.set("fullEmptyClsCd", ds_odrWrkPathStepDetail.getCellData(row, "fullEmptyClsCd"));
  dma_searchPchsAmt.set("wrkStpCd", ds_odrWrkPathStepDetail.getCellData(row, "wrkStpCd"));
  if (ds_odrWrkPathStepDetail.getCellData(row, "cntrSizCd") == "20") {
    dma_searchPchsAmt.set("cntrTrfCd", "H");
  } else {
    dma_searchPchsAmt.set("cntrTrfCd", " ");
  }
  await $c.sbm.execute($p, sbm_retrievePchsAmt);
  let rowNumber = ds_odrWrkPathStepDetail.getRowPosition();
  let totalRow = ds_odrWrkPathStepDetail.getRowCount();
  if (ds_resultPchsAmt.getRowCount() > 0) {
    if (rowNumber >= 0 && rowNumber != totalRow - 1) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "wrkPlClsCd").trim())) {
        if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "transWrkIndictNo")) && ds_resultPchsAmt.getCellData(0, "pchsAmt") != ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "pchsAmt")) {
          let confirmResult = await $c.win.confirm($p, "매입금액이 다릅니다. 계속하시겠습니까?");
          if (!confirmResult) {
            ds_odrWrkPathStepDetail.undoRow(rowNumber);
            return;
          }
        }
      }
    }
    if (rowNumber != 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "wrkPlClsCd").trim())) {
        if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "transWrkIndictNo")) && ds_resultPchsAmt.getCellData(0, "pchsAmt") != ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "pchsAmt")) {
          let confirmResult = await $c.win.confirm($p, "매입금액이 다릅니다. 계속하시겠습니까?");
          if (!confirmResult) {
            ds_odrWrkPathStepDetail.undoRow(rowNumber);
            return;
          }
        }
      }
    }
  }
};
scwin.f_Save = async function () {
  if (!ds_odrWrkPathStepDetail.isUpdated()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["작업단계"]);
    return;
  }
  if (ds_odrCntrWrkPath.getCellData(0, "ctrtWrkPathSeq") <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업경로"]);
    gr_odrCntrWrkPath.setFocusedCell(0, "ctrtWrkPathSeq");
    return;
  }
  let v_wrkIndictYn = "";
  let v_eqCd = "";
  for (let j = 0; j < ds_odrWrkPathStepDetail.getRowCount(); j++) {
    if (ds_odrWrkPathStep.getRowCount() > j && ds_odrWrkPathStep.getCellData(j, "wrkIndictYn") != "") {
      v_wrkIndictYn = "Y";
      v_eqCd = ds_odrWrkPathStep.getCellData(j, "eqCd");
      break;
    }
  }
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if (ds_odrWrkPathStep.getRowCount() > i) {
      ds_odrWrkPathStepDetail.setCellData(i, "outMgntYn", ds_odrWrkPathStep.getCellData(i, "outMgntYn"));
      ds_odrWrkPathStepDetail.setCellData(i, "inMgntYn", ds_odrWrkPathStep.getCellData(i, "inMgntYn"));
    }
    ds_odrWrkPathStepDetail.setCellData(i, "qryClsCd", scwin.hid_qryClsCd);
    ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNm2", ds_odrWrkPathStepDetail.getOrgCellData(i, "dptWrkPlNm"));
    ds_odrWrkPathStepDetail.setCellData(i, "wrkIndictYn", v_wrkIndictYn);
    ds_odrWrkPathStepDetail.setCellData(i, "eqCd", v_eqCd);
    if (ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim() == "" && i > 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkLobranCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkLobranNm")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkLobranNm"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "dptWrkPlCd"))) ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "arvWrkPlCd")) && i + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "arvWrkPlNm")) && i + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlNm", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlNm"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "internalSellLodeptCd")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "internalSellLodeptCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "internalSellLodeptNm")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000" && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "internalSellLodeptNm"))) ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(i - 1, "internalSellLodeptNm"));
    }
  }
  let chkValidate = await $c.gus.cfValidate($p, [gr_odrWrkPathStpDetail]);
  if (!chkValidate) return;
  for (let idx = 0; idx < ds_odrWrkPathStepDetail.getRowCount(); idx++) {
    if (ds_odrWrkPathStepDetail.getRowStatus(idx) == "R") continue;
    if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim()) && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "dptWrkPlNm").trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업장"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "dptWrkPlNm");
      return;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "selpchItemCd") != "0000") {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkLobranCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업점소"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkLobranNm");
        return;
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "internalSellLodeptCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["매출귀속부서"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "internalSellLodeptNm");
        return;
      }
    } else if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim())) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkLobranCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업점소"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkLobranNm");
        return;
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "internalSellLodeptCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["매출귀속부서"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "internalSellLodeptNm");
        return;
      }
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "wrkStDt").length < 8) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["시작일자"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkStDt");
      return;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "wrkStHh").length < 4) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["시작시간"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkStHh");
      return;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "wrkEndDt").length < 8) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["종료일자"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkEndDt");
      return;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "wrkEndHh").length < 4) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["종료시간"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkEndHh");
      return;
    }
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "fullEmptyClsCd"))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["F/E"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "fullEmptyClsCd");
      return;
    }
  }
  let chkValidate2 = await $c.gus.cfValidate($p, [gr_odrWrkPathStpDetail]);
  if (!chkValidate2) return;
  let chkValid = await scwin.f_validChk();
  if (chkValid) {
    let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_001, ["작업단계정보"]);
    if (confirmResult) {
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableAllBtn($p);
      $c.gus.cfEnableBtnOnly($p, [btnClose]);
      await $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_validChk = async function () {
  let chk = await $c.gus.cfValidate($p, [gr_odrCntrWrkPath, gr_odrWrkPathStpDetail]);
  return chk;
};
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  let rtnList = null;
  let chkValue = false;
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, pName, pClose, null, null, null, null, "A,B", null, null, null, null, null, pAllSearch, "작업점소,점소코드,점소명");
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[1]);
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
      }
      break;
    case 2:
      let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
      let pWhere = pWrkPlClsCd;
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
          if (!$c.gus.cfIsNull($p, rtnList[3])) ds_odrWrkPathStepDetail.setCellData(row, "bizDomCd", rtnList[3]);
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
          if (row > 0 && row < ds_odrWrkPathStepDetail.getRowCount() - 1) {
            if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row + 1, "wrkPlClsCd").trim()) && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd"))) {
              ds_odrWrkPathStepDetail.setCellData(row + 1, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd"));
            }
          }
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
      }
      break;
    case 3:
      let pWhere3 = "T,J";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, pName, pClose, null, null, null, null, pWhere3, null, null, null, null, null, pAllSearch, "매출귀속부서,부서코드,부서명");
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[1]);
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
      }
      break;
    default:
      break;
  }
  return chkValue;
};
scwin.f_setWorkStepInfoRefresh2 = function (rowNumber) {
  let modifyYn = true;
  if (rowNumber > 0) {
    for (let i = rowNumber - 1; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
      if (ds_odrWrkPathStepDetail.getCellData(i, "transWrkIndictNo") != "") modifyYn = false;
    }
  }
  scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(rowNumber);
  let totalRow = ds_odrWrkPathStepDetail.getRowCount();
  if (rowNumber == 0) {
    if (rowNumber + 1 < totalRow && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(rowNumber + 1, "dptWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(rowNumber, "wrkPlClsCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber + 1, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber + 1, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlNm"));
      scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(rowNumber + 1);
    }
  }
  if (rowNumber > 0 && rowNumber != totalRow - 1) {
    if (rowNumber + 1 < totalRow && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(rowNumber + 1, "dptWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(rowNumber, "wrkPlClsCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber + 1, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber + 1, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlNm"));
      scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(rowNumber + 1);
    }
    if (rowNumber - 1 >= 0 && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(rowNumber - 1, "arvWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(rowNumber, "wrkPlClsCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber - 1, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber - 1, "arvWrkPlNm", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlNm"));
      if (modifyYn) scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(rowNumber - 1);
    }
  }
  if (rowNumber == totalRow - 1 && rowNumber > 0) {
    if (rowNumber - 1 >= 0 && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(rowNumber - 1, "arvWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(rowNumber, "wrkPlClsCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber - 1, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber - 1, "arvWrkPlNm", ds_odrWrkPathStepDetail.getCellData(rowNumber, "dptWrkPlNm"));
      if (modifyYn) scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(rowNumber - 1);
    }
  }
  if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(rowNumber, "wrkPlClsCd").trim())) {
    if (rowNumber - 1 >= 0) {
      ds_odrWrkPathStepDetail.setCellData(rowNumber, "dptWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "wrkPlClsCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "dptWrkPlCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(rowNumber - 1, "dptWrkPlNm"));
    }
    if (rowNumber + 1 < totalRow) {
      ds_odrWrkPathStepDetail.setCellData(rowNumber, "arvWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "wrkPlClsCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "dptWrkPlCd"));
      ds_odrWrkPathStepDetail.setCellData(rowNumber, "arvWrkPlNm", ds_odrWrkPathStepDetail.getCellData(rowNumber + 1, "dptWrkPlNm"));
    }
  }
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
    if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() != scwin.SELPCH_ITEM_CD_NOSELL) {
      if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == scwin.WRK_PL_CLS_CD_RAILSTN && row > 0) {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNm"));
        if (row > 0 && ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_RAILROAD) {
          let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
          let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
          if (!$c.gus.cfIsNull($p, pCode)) {
            let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, pWrkPlClsCd);
            if (rtnList != null && rtnList[0].trim() != "N/A") {
              scwin.wrkLobranCd = rtnList[2];
              scwin.wrkLobranNm = rtnList[3];
              scwin.internalSellLodeptCd = rtnList[4];
              scwin.internalSellLodeptNm = rtnList[5];
              scwin.wrkLobranCdRow = row;
            }
          }
        }
      } else if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == scwin.WRK_PL_CLS_CD_MARTRPIER && row > 0) {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNm"));
        if (row > 0 && ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_MARTR) {
          let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
          let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
          if (!$c.gus.cfIsNull($p, pCode)) {
            let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, pWrkPlClsCd);
            if (rtnList != null && rtnList[0].trim() != "N/A") {
              scwin.wrkLobranCd = rtnList[2];
              scwin.wrkLobranNm = rtnList[3];
              scwin.internalSellLodeptCd = rtnList[4];
              scwin.internalSellLodeptNm = rtnList[5];
              scwin.wrkLobranCdRow = row;
            }
          }
        }
      } else {
        let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
        let pName = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlNm");
        let pOrgName = ds_odrWrkPathStepDetail.getOrgCellData(row, "dptWrkPlNm");
        let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
        let pBizDomCd = pWrkPlClsCd == scwin.WRK_PL_CLS_CD_PIER ? scwin.BIZ_DOM_CD_STV : scwin.BIZ_DOM_CD_STR;
        let pWrkLobranCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd");
        let pInternalSellLodeptCd = ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptCd");
        if (!$c.gus.cfIsNull($p, pCode)) {
          if ($c.gus.cfIsNull($p, pWrkLobranCd) || $c.gus.cfIsNull($p, pInternalSellLodeptCd) || pName != pOrgName) {
            let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', pBizDomCd, pWrkPlClsCd);
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
    } else {
      if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == scwin.WRK_PL_CLS_CD_RAILSTN && row > 0 && ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_RAILROAD) {
        let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
        let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
        if (!$c.gus.cfIsNull($p, pCode)) {
          let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, pWrkPlClsCd);
          if (rtnList != null && rtnList[0].trim() != "N/A") {
            scwin.wrkLobranCd = rtnList[2];
            scwin.wrkLobranNm = rtnList[3];
            scwin.internalSellLodeptCd = rtnList[4];
            scwin.internalSellLodeptNm = rtnList[5];
            scwin.wrkLobranCdRow = row;
          }
        }
      } else if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == scwin.WRK_PL_CLS_CD_MARTRPIER && row > 0 && ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_MARTR) {
        let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
        let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
        if (!$c.gus.cfIsNull($p, pCode)) {
          let rtnList = scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, pWrkPlClsCd);
          if (rtnList != null && rtnList[0].trim() != "N/A") {
            scwin.wrkLobranCd = rtnList[2];
            scwin.wrkLobranNm = rtnList[3];
            scwin.internalSellLodeptCd = rtnList[4];
            scwin.internalSellLodeptNm = rtnList[5];
            scwin.wrkLobranCdRow = row;
          }
        }
      }
    }
  }
};
scwin.f_setWorkPathStepDetail = async function () {
  if (ds_odrWrkPathStep.getRowCount() > 0 && ds_odrCntrWrkPath.getCellData(ds_odrCntrWrkPath.getRowPosition(), "ctrtWrkPathSeq") == ds_odrCntrWrkPath.getOrgCellData(ds_odrCntrWrkPath.getRowPosition(), "ctrtWrkPathSeq")) {
    scwin.f_setOdrWrkPathStepToWrkPathStepDetail();
    $c.gus.cfEnableObjects($p, [btnOrderWrkStepDetail]);
  } else if (ds_ctrtWrkPathStep.getRowCount() > 0) {
    scwin.f_setCtrtWrkPathStepToWrkPathStepDetail();
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  ds_odrWrkPathStepDetail.setRowPosition(0);
  $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
};
scwin.f_setOdrWrkPathStepToWrkPathStepDetail = function () {
  ds_odrWrkPathStepDetail.removeAll();
  $c.gus.cf_CopyDataSetValue($p, ds_odrWrkPathStep, ds_odrWrkPathStepDetail);
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    ds_odrWrkPathStepDetail.setCellData(i, "smsYn", 1);
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNm", "");
      ds_odrWrkPathStepDetail.setCellData(i, "smsYn", 0);
    }
    if (ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") == scwin.SELPCH_ITEM_CD_NOSELL && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranCd", "");
      ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranNm", "");
      ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptCd", "");
      ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptNm", "");
    }
    if (ds_odrWrkPathStepDetail.getCellData(i, "wrkStpCd") == "0004") {
      scwin.rail_yn = "Y";
      scwin.v_odrWrkStpSeq = ds_odrWrkPathStepDetail.getCellData(i, "odrWrkStpSeq");
    }
  }
  if (ds_odrWrkPathStepDetail.getRowCount() > 0) {
    scwin.v_odrWrkStpSeqMax = ds_odrWrkPathStepDetail.getCellData(ds_odrWrkPathStepDetail.getRowCount() - 1, "odrWrkStpSeq");
  }
};
scwin.f_setCtrtWrkPathStepToWrkPathStepDetail = async function () {
  ds_odrWrkPathStepDetail.undoAll();
  if (!ds_odrCntrWrkPath.isUpdated()) return;
  let tsltsRow = -1;
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if (ds_odrWrkPathStepDetail.getCellData(i, "transRsltsSeq") > 0) tsltsRow = i;else if (ds_odrWrkPathStepDetail.getCellData(i, "transWrkIndictNo") != "") tsltsRow = i;
  }
  if (tsltsRow >= ds_ctrtWrkPathStep.getRowCount() - 1) {
    await $c.gus.cfAlertMsg($p, "현재의경로에 발생한 실적 및 작업지시가\n\n변경하고자 하는 경로보다 많이 진행되어 변경할 수 없습니다.");
    ds_odrCntrWrkPath.undoRow(ds_odrCntrWrkPath.getRowPosition());
    return;
  }
  let deleteStartRow = tsltsRow < 0 ? 0 : tsltsRow + 2;
  let insertFE = tsltsRow < 0 ? ds_odrWrkPathStepDetail.getCellData(0, "fullEmptyClsCd") : ds_odrWrkPathStepDetail.getCellData(tsltsRow + 1, "fullEmptyClsCd");
  let deleteStartWrkStpSeq = tsltsRow < 0 ? 0 : ds_odrWrkPathStepDetail.getCellData(tsltsRow + 1, "odrWrkStpSeq");
  for (let i = deleteStartRow; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    ds_odrWrkPathStepDetail.removeRow(i);
    i--;
  }
  let jukipWrkStpSeq = 0;
  let jukchulWrkStpSeq = 0;
  for (let i = 0; i < ds_ctrtWrkPathStep.getRowCount(); i++) {
    if (ds_ctrtWrkPathStep.getCellData(i, "wrkStpCd") == scwin.WRK_STP_CD_FULL_IN) jukipWrkStpSeq = ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkStpSeq");else if (ds_ctrtWrkPathStep.getCellData(i, "wrkStpCd") == scwin.WRK_STP_CD_FULL_OUT) jukchulWrkStpSeq = ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkStpSeq");
  }
  let rowPos = ds_odrCntrWrkPath.getRowPosition();
  for (let i = 0; i < ds_ctrtWrkPathStep.getRowCount(); i++) {
    if (deleteStartWrkStpSeq < ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkStpSeq")) {
      ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
      let newRow = ds_odrWrkPathStepDetail.getRowCount() - 1;
      ds_odrWrkPathStepDetail.setCellData(newRow, "odrNo", ds_odrCntrWrkPath.getCellData(rowPos, "odrNo"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "cntrSeq", ds_odrCntrWrkPath.getCellData(rowPos, "cntrSeq"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkPathSeq", ds_odrCntrWrkPath.getCellData(rowPos, "odrWrkPathSeq"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "ctrtWrkPathSeq", ds_odrCntrWrkPath.getCellData(rowPos, "ctrtWrkPathSeq"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkPathNm", ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkPathNm"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkStpSeq", ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkStpSeq"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkPlClsCd", ds_ctrtWrkPathStep.getCellData(i, "rtnDptWrkPlClsCd"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStpCd", ds_ctrtWrkPathStep.getCellData(i, "wrkStpCd"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStpNm", ds_ctrtWrkPathStep.getCellData(i, "wrkStpNm"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "bizDomCd", ds_ctrtWrkPathStep.getCellData(i, "bizDomCd"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "selpchItemCd", ds_ctrtWrkPathStep.getCellData(i, "selpchItemCd"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "selpchItemNm", ds_ctrtWrkPathStep.getCellData(i, "selpchItemNm"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStDt", ds_ctrtWrkPathStep.getCellData(i, "rtnWrkStDt"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStHh", ds_ctrtWrkPathStep.getCellData(i, "rtnWrkStHh"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndDt", ds_ctrtWrkPathStep.getCellData(i, "rtnWrkEndDt"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndHh", ds_ctrtWrkPathStep.getCellData(i, "rtnWrkEndHh"));
      ds_odrWrkPathStepDetail.setCellData(newRow, "fullEmptyClsCd", insertFE);
    }
  }
  scwin.v_dptWrkPlCd = "";
  scwin.v_bizDomCd = "";
  scwin.f_setOdrWrkPathStepDptArv();
};
scwin.f_setOdrWrkPathStepDptArv = function () {
  let rowPos = ds_odrCntrWrkPath.getRowPosition();
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    let v_dptWrkPlCd = ds_ctrtWrkPathStep.getRowCount() > i ? ds_ctrtWrkPathStep.getCellData(i, "rtnDptWrkPlCd") : "";
    let v_dptWrkPlClsCd = ds_ctrtWrkPathStep.getRowCount() > i ? ds_ctrtWrkPathStep.getCellData(i, "rtnDptWrkPlClsCd") : "";
    if (!$c.gus.cfIsNull($p, v_dptWrkPlCd)) {
      ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", v_dptWrkPlCd);
      let pCode = ds_odrWrkPathStepDetail.getCellData(i, "dptWrkPlCd");
      if (ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000") {
        scwin.f_setWorkLobranInternalSellLodept(i, pCode, '', 'T', 'F', 'T', 'F', 'T');
      } else {
        scwin.f_setWorkLobranNoDataAutoClose(i, pCode, '', 'T', 'F', 'T', 'F', 'T');
      }
      scwin.f_setWorkStepInfoRefresh2(i);
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
        ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNm", "");
      }
    }
  }
};
scwin.f_setWorkLobranInternalSellLodept = function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  let pBizDomCd = ds_odrWrkPathStepDetail.getCellData(row, "bizDomCd").trim();
  let pSelpchItemCd = ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName) || pSelpchItemCd == "0000") return false;
  if (pOrgValueCheck == "T") {
    if (pDptWrkPlsYn == "T") {
      if (pCode == ds_odrWrkPathStepDetail.getOrgCellData(row, "dptWrkPlCd")) return false;
    } else {
      if (pCode == ds_odrWrkPathStepDetail.getOrgCellData(row, "arvWrkPlCd")) return false;
    }
  }
  let pWhere = pWrkPlClsCd + "," + pBizDomCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWorkStepEachWorkPlaceInfo', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (pDptWrkPlsYn == "T") {
        if (pDptWrkChangeTF == "F") {
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
          if (!$c.gus.cfIsNull($p, rtnList[2])) {
            ds_odrWrkPathStepDetail.setCellData(row, "bizDomCd", rtnList[2]);
            scwin.v_bizDomCd = rtnList[2];
          }
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
        }
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "arvWrkPlCd", rtnList[0]);
      }
      if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() != "0000") {
        if (ds_odrWrkPathStepDetail.getCellData(row, "odrWrkStpSeq") == "20" && rtnList[5] == "4AA" && scwin.loUpperLobranCd == "4BB") {
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "4BB");
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "의왕지점");
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "4B2");
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "의왕운송");
        } else {
          if (!$c.gus.cfIsNull($p, rtnList[5])) {
            ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[5]);
            ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[6]);
          }
          if (!$c.gus.cfIsNull($p, rtnList[7])) {
            ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[7]);
            ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[8]);
          }
        }
      }
    }
  } else {
    if (pDptWrkChangeTF == "F") {
      ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
      ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
    }
    ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
    ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
  }
  return true;
};
scwin.f_setWorkLobranNoDataAutoClose = function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName)) return false;
  let pWhere = pWrkPlClsCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfoNoDataAutoClose', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (pDptWrkChangeTF == "F") {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
        if (!$c.gus.cfIsNull($p, rtnList[3])) ds_odrWrkPathStepDetail.setCellData(row, "bizDomCd", rtnList[3]);
      }
      if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
      ds_odrWrkPathStepDetail.setCellData(row, "lobranCd", rtnList[4]);
    }
  } else {
    ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
  }
};
scwin.f_setLogisDeptInfo = function (row, pCode, pName, pClose, pAllSearch, pNoDataCloseTF) {
  let pWhere = "T";
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "매출부서,부서코드,부서명", pNoDataCloseTF);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (!$c.gus.cfIsNull($p, rtnList[3])) {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[3]);
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[6]);
      }
      if (!$c.gus.cfIsNull($p, rtnList[0])) {
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[0]);
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[1]);
      }
    }
  } else {
    ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
    ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
  }
};
scwin.f_setWorkPlaceLobranCd = function (pCode, pName, pBizDomCd, pWrkPlClsCd) {
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pBizDomCd)) return false;
  let pWhere = pWrkPlClsCd + "," + pBizDomCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWorkPlaceLobranCd', pCode, pName, "T", null, null, null, null, pWhere, null, null, null, null, null, "F", "작업장,작업장코드,작업장명", "T");
  return rtnList;
};
scwin.f_checkWorkStepEditMode = function (row) {
  if (row >= 0) {
    if (!scwin.gv_modifyYn) {
      $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
      return;
    }
    let v_odrWrkStpSeqVal = ds_odrWrkPathStepDetail.getCellData(row, "odrWrkStpSeq");
    if (row == 0) {
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
      $c.gus.cfDisableBtnOnly($p, [btnDeleteRow]);
      return false;
    }
    if (v_odrWrkStpSeqVal == 10) {
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
      $c.gus.cfDisableBtnOnly($p, [btnDeleteRow]);
      return false;
    }
    if (row == ds_odrWrkPathStepDetail.getRowCount() - 1) {
      $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
      return false;
    }
    if (v_odrWrkStpSeqVal % 10 == 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
        if (ds_odrWrkPathStepDetail.getCellData(row, "wrkStpCd") == scwin.WRK_STP_CD_SHUTTLE || ds_odrWrkPathStepDetail.getCellData(row, "wrkStpCd") == scwin.WRK_STP_CD_GROUND_TRANS) {
          $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
          return false;
        } else {
          $c.gus.cfDisableBtnOnly($p, [btnDeleteRow]);
          if (row + 1 < ds_odrWrkPathStepDetail.getRowCount()) {
            let nextWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row + 1, "wrkPlClsCd");
            let nextOdrWrkStpSeq = ds_odrWrkPathStepDetail.getCellData(row + 1, "odrWrkStpSeq");
            if ((nextWrkPlClsCd == scwin.WRK_PL_CLS_CD_DOOR || nextWrkPlClsCd == scwin.WRK_PL_CLS_CD_RAILSTN || nextWrkPlClsCd == scwin.WRK_PL_CLS_CD_MARTRPIER) && nextOdrWrkStpSeq % 10 == 0) {
              $c.gus.cfDisableBtnOnly($p, [btnInsertRow]);
              return false;
            }
          }
          $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
          return false;
        }
      }
      if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == scwin.WRK_PL_CLS_CD_DOOR || ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == scwin.WRK_PL_CLS_CD_RAILSTN || ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == scwin.WRK_PL_CLS_CD_MARTRPIER) {
        if (row + 1 < ds_odrWrkPathStepDetail.getRowCount() && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row + 1, "wrkPlClsCd").trim()) && ds_odrWrkPathStepDetail.getCellData(row + 1, "odrWrkStpSeq") % 10 == 0) {
          $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
          return false;
        } else {
          $c.gus.cfDisableBtnOnly($p, [btnDeleteRow]);
          $c.gus.cfEnableBtnOnly($p, [btnInsertRow]);
          return false;
        }
      }
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
      return false;
    } else {
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
      return false;
    }
  }
};
scwin.f_openPopUpOdrNo = async function () {
  let obj = {
    cntrNo: ed_cnd_cntrNo.getValue().trim(),
    odrKndCd: lc_cnd_odrKndCd.getValue()
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_31p.xml", {
    width: 820,
    height: 400,
    modal: true,
    data: obj
  });
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_odrNo.setValue(rtnList[0]);
      scwin.hid_cntrSeq = rtnList[2];
    }
  }
};
scwin.f_chkResultsConfirmationCommodity = function (row) {
  if (row >= 0) {
    if (!$c.gus.cfIsNull($p, ds_odrCntrWrkPath.getCellData(row, "wrkRsltsNo").trim())) return true;
  }
  return false;
};
scwin.f_orderWrkStepDetail = async function () {
  let row = ds_odrWrkPathStepDetail.getRowPosition();
  if (row >= 0) {
    let v_odrNo = ds_order.getCellData(0, "odrNo");
    $c.win.openMenu($p, "작업일시배분조회및수정", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_14b.xml", "sd_402_01_14b.xml", {
      odrNo: v_odrNo,
      type: "retrieve"
    });
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["작업단계"]);
    return;
  }
};
scwin.f_setWorkStepInfoRefresh = function () {
  let v_impExpDomesticClsCd = ds_order.getCellData(ds_order.getRowPosition(), "impExpDomesticClsCd");
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if (i > 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkPlClsCd").trim())) {
        if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "arvWrkPlCd"))) {
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkPlClsCd"));
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "arvWrkPlCd"));
        }
      } else {
        if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd")) && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "dptWrkPlCd"))) {
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkPlClsCd"));
          ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd"));
        }
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
        ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkPlClsCd"));
        ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd"));
        if (i < ds_odrWrkPathStepDetail.getRowCount() - 1) {
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"))) {
            ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlClsCdChange", ds_odrWrkPathStepDetail.getCellData(i + 1, "wrkPlClsCd"));
            ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlCd"));
          }
        }
      }
    }
  }
};
scwin.f_setWorkStepDateTimeAllocation = function () {
  if (scwin.hid_odrKndCd == scwin.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || scwin.hid_odrKndCd == scwin.ODR_KND_CD_EXP_CVSSL_CNTR_ODR) {
    let rowPos = ds_odrCntrWrkPath.getRowPosition();
    let v_wrkStDtm = ds_odrCntrWrkPath.getCellData(rowPos, "wrkStDt") + ds_odrCntrWrkPath.getCellData(rowPos, "wrkStHh");
    let v_wrkEndDtm = ds_odrCntrWrkPath.getCellData(rowPos, "wrkEndDt") + ds_odrCntrWrkPath.getCellData(rowPos, "wrkEndHh");
    for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) break;
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.gv_rtnValue = 1;
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.hid_chkUseFilter = "true";
  gr_odrCntrWrkPath.setReadOnly("grid", true);
  gr_odrWrkPathStpDetail.setReadOnly("grid", true);
  if (ds_order.getCellData(ds_order.getRowPosition(), "odrDcsnYn") != scwin.YN_YES) {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
  }
  if (ds_order.getCellData(ds_order.getRowPosition(), "odrCompleteYn") != scwin.YN_YES) {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btnUpdate, btnSave]);
  }
  if (ds_odrCntrWrkPath.getRowCount() > 0 && ds_order.getCellData(ds_order.getRowPosition(), "odrDcsnYn") != scwin.YN_YES && ds_order.getCellData(ds_order.getRowPosition(), "odrCompleteYn") != scwin.YN_YES) {
    if (ds_odrCntrWrkPath.getCellData(ds_odrCntrWrkPath.getRowPosition(), "odrWrkPathSeq") == 0) scwin.f_Update();
  }
  $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
  if (ds_order.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    scwin.f_FieldClear();
    lay_realMchtclntNm.setValue("");
    lay_ctrtClntNm.setValue("");
    lay_ctrtNo.setValue("");
    lay_odrKndNm.setValue("");
  } else {
    if (ds_order.getCellData(0, "odrKndCd").substr(0, 1) == "D") {
      td_realMchtClntNm.setValue("수요가");
      lay_realMchtclntNm.setValue(ds_order.getCellData(ds_order.getRowPosition(), "dmndNm"));
      scwin.hid_realMchtclntNo = ds_order.getCellData(ds_order.getRowPosition(), "dmndNo");
    } else {
      td_realMchtClntNm.setValue("실화주");
      lay_realMchtclntNm.setValue(ds_order.getCellData(ds_order.getRowPosition(), "realMchtClntNm"));
      scwin.hid_realMchtclntNo = ds_order.getCellData(ds_order.getRowPosition(), "realMchtClntNo");
    }
    scwin.f_setDisplayOdrKndCd(ds_order.getCellData(0, "odrKndCd"));
    lay_ctrtClntNm.setValue(ds_order.getCellData(ds_order.getRowPosition(), "ctrtClntNm"));
    lay_ctrtNo.setValue(ds_order.getCellData(ds_order.getRowPosition(), "ctrtNo"));
    lay_odrKndNm.setValue(ds_order.getCellData(ds_order.getRowPosition(), "odrKndNm"));
    scwin.hid_ctrtClntNo = ds_order.getCellData(ds_order.getRowPosition(), "ctrtClntNo");
    scwin.hid_ctrtNo = ds_order.getCellData(ds_order.getRowPosition(), "ctrtNo");
    scwin.hid_odrKndCd = ds_order.getCellData(ds_order.getRowPosition(), "odrKndCd");
    if (ds_order.getCellData(ds_order.getRowPosition(), "odrDelYn") == String(scwin.YN_YES)) {
      gr_odrCntrWrkPath.setReadOnly("grid", true);
      gr_odrWrkPathStpDetail.setReadOnly("grid", true);
      $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
    } else {
      gr_odrCntrWrkPath.setReadOnly("grid", false);
      gr_odrWrkPathStpDetail.setReadOnly("grid", false);
      $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow]);
    }
  }
  scwin.hid_chkReterieve = "retrieveIn";
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchWorkStep_submitdone = function (e) {
  scwin.f_setWorkPathStepDetail();
};
scwin.sbm_searchWorkStep_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveLobranTrans_submitdone = function (e) {
  if (ds_lobran.getRowCount() > 0) {
    if (scwin.userId == "040239") {
      scwin.internalSellLodeptCd = "4A5";
      scwin.internalSellLodeptNm = "인천제강운송";
    } else {
      scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
      scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
    }
  }
};
scwin.sbm_retrieveLobranTrans_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrievePchsAmt_submitdone = function (e) {};
scwin.sbm_retrievePchsAmt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btnSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.btnUpdate_onclick = function (e) {
  scwin.f_Update();
};
scwin.btnClose_onclick = function (e) {
  scwin.f_Close();
};
scwin.btnInsertRow_onclick = function (e) {
  scwin.f_InsertRow();
};
scwin.img_PopUpOdrNoList_onclick = function (e) {
  scwin.f_openPopUpOdrNo();
};
scwin.ed_odrNo_onkeydown = function (e) {
  if (e.keyCode == 13) scwin.f_Retrieve();
};
scwin.ed_cnd_cntrNo_onblur = function (e) {
  if (!$c.gus.cfIsNull($p, ed_cnd_cntrNo.getValue().trim())) scwin.f_openPopUpOdrNo();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'lc_cnd_odrKndCd',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_cnd_cntrNo',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_PopUpOdrNoList',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_odrNo',style:'',ref:'data:ds_orderSearch.odrNo',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_ctrtClntNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_ctrtNo',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_realMchtClntNm',label:'실화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_realMchtclntNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrKndNm',label:'text',ref:'',style:'',userData2:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업경로',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_odrCntrWrkPath',id:'gr_odrCntrWrkPath',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',value:'오더컨테이너순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlClsCd',inputType:'text',value:'출발작업장구분코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',value:'출발작업장코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',value:'출발작업장',width:'110',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'arvWrkPlClsCd',value:'도착작업장구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlCd',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'arvWrkPlNm',value:'도착작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'odrWrkPathSeq',value:'오더작업경로순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtNo',value:'계약번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ctrtWrkPathSeq',value:'작업경로',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStDt',value:'작업시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndDt',value:'작업종료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',value:'작업종료시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellYn',value:'매출여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkRsltsNo',value:'실적번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlClsCd',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'110',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'arvWrkPlClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'odrWrkPathSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ctrtWrkPathSeq',displayMode:'label',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ctrtWrkPathSeq:ctrtWrkPathNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_ctrtWrkPath'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkRsltsNo',displayMode:'label',readOnly:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단계',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_odrWrkPathStepDetail',id:'gr_odrWrkPathStpDetail',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',value:'컨테이너순번',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',value:'작업경로순번',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',value:'계약작업경로순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathNm',inputType:'text',value:'작업경로',width:'100',class:'col-type1',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkStpSeq',inputType:'text',value:'Seq',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsCd',inputType:'text',value:'작업장구분',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',value:'사업영코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',value:'매출입항목코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selpchItemNm',value:'매출입항목',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlClsCd',value:'이전작업장구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlClsCdChange',value:'수정작업장구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlClsCd',value:'이전작업장구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlClsCdChange',value:'수정작업장구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlCd',value:'출발작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',value:'작업장',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlCd',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',value:'도착작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'wrkLobranCd',value:'작업물류점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranNm',value:'작업점소',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',value:'시작일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh',value:'시작시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',value:'종료일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh',value:'종료시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'internalSellLodeptCd',value:'매출귀속부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'internalSellLodeptNm',value:'매출귀속부서',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transRsltsSeq',value:'실적순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'transWrkIndictNo',value:'운송작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',value:'매입금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellSeq',value:'매출순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictYn',value:'작업지시여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fullEmptyClsCd',value:'F/E',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'AA',value:'실적<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'BB',value:'지시<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'smsYn',value:'SMS',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkStpSeq',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsCd',inputType:'text',width:'100',textAlign:'left',colMerge:'true',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkPlClsCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',width:'100',textAlign:'left',colMerge:'true',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_LkStepNo'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlClsCdChange',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlClsCdChange',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'wrkLobranCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh',displayMode:'label',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'internalSellLodeptCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'internalSellLodeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transRsltsSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'transWrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellSeq',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transWrkIndictYn',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fullEmptyClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'AA',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'BB',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'null'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'smsYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btnInsertRow',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삽입'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'Y',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'N',style:'',btnRowAddYn:'Y'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btnClose',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnUpdate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})