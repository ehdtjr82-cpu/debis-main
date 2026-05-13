/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_03b.xml 169591 aabd34f244e357403dcbf5c759b8c1028a2cb97492c069c002be8a9189b18d32 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_orderSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchWrkStep'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lobranQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptmentCd',name:'부서조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'자동오더여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'오더작업경로수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'출발작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'출발작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'도착작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'도착작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'taxnClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'odrClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'coshippingYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'odrPicNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'bilgLodeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'reqClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'reqClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'vsslCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'date'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'lineCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'cntrDsgYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'cvsslMgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'portNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'totSellAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRequestCnt',name:'odrRequestCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'sellLodeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'wrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'regBranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'totStdAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'wrkStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'bilgLodeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'repClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'pchsCreatYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'lineNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'selfClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'portCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndYn',name:'smsSndYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'totPchsPrflosAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'shpCoClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'shpCoClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'sellLodeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'vsslNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'transCargoClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'wrkPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'totPchsAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'odrDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'portcnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'adptExchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'date'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'odrPicTelNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'totStdPrflosAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'sellYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'bilgClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'bilgClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplCoClsCd',name:'tplCoClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routrpYn',name:'routrpYn',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'odrCnclYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'sellVol',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'sellAmtFcrc',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'sellAmt',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'vatAmt',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'totAmt',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'msn',name:'msn',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hsn',name:'hsn',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntlYn',name:'cntlYn',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'liVanTerm',name:'liVanTerm',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCommWrkPath',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_odrCommWrkPath_oncelldatachange','ev:onrowpositionchange':'scwin.ds_odrCommWrkPath_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_odrCommWrkPath_onbeforerowpositionchange','ev:onaftercolumnfilterchange':'scwin.ds_odrCommWrkPath_onaftercolumnfilterchange','ev:ondataload':'scwin.ds_odrCommWrkPath_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'오더품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsYn',name:'실적여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveodrCommWrkPath',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_odrCommWrkPath_oncelldatachange','ev:onrowpositionchange':'scwin.ds_odrCommWrkPath_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_odrCommWrkPath_onbeforerowpositionchange','ev:onaftercolumnfilterchange':'scwin.ds_odrCommWrkPath_onaftercolumnfilterchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'오더품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsYn',name:'실적여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath','ev:ondataload':'scwin.ds_ctrtWrkPath_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'작업장구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlCd',name:'대표작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlNm',name:'대표작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStepDetail',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_odrWrkPathStepDetail_oncelldatachange','ev:onrowpositionchange':'scwin.ds_odrWrkPathStepDetail_onrowpositionchange','ev:ondataload':'scwin.ds_odrWrkPathStepDetail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNmOrg',name:'작업물류점소명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNmOrg',name:'출발작업장명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'선명항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNmOrg',name:'매출귀속부서명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'name35',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvLobranCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOut',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvLobranNm',name:'name47',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveodrWrkPathStepDetail',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_odrWrkPathStepDetail_oncelldatachange','ev:onrowpositionchange':'scwin.ds_odrWrkPathStepDetail_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNmOrg',name:'작업물류점소명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNmOrg',name:'출발작업장명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'선명항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNmOrg',name:'매출귀속부서명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvLobranCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOut',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvLobranNm',name:'name47',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStepDetailTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNmOrg',name:'출발작업장명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstClsCd',name:'작업구간구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAdptYn',name:'매출적용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCommWrkPathTemp',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_odrCommWrkPathTemp_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_odrCommWrkPathTemp_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'오더품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsYn',name:'실적여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'upperWrkStpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'상위작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'bizDomCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'lvl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'useYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initYN',name:'initYN',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranNm',name:'상위물류점소명',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_LkStepNo',id:'ds_linkedLkStepNo'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrreg.SaveBulkWorkPathDetailInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_saveodrCommWrkPath","key":"IN_DS2"},{"id":"ds_saveodrWrkPathStepDetail","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractOrderContractPathCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCommWrkPath","key":"OUT_DS2"},{"id":"ds_ctrtWrkPath","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCommWrkPath","key":"OUT_DS2"},{"id":"ds_ctrtWrkPath","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_searchWorkStep',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractOrderWorkStepCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_searchWrkStep","key":"IN_DS1"},{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_searchWorkStep_submitdone','ev:submiterror':'scwin.sbm_searchWorkStep_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLobranTrans',action:'/ds.sd.odrmgnt.odrreg.RetrieveLogisticsBranchDepartmentCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_lobranQueryCondition","key":"IN_DS1"},{"id":"ds_lobran","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_lobran","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveLobranTrans_submitdone','ev:submiterror':'scwin.sbm_retrieveLobranTrans_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_confirmOrder',action:'/ds.sd.odrmgnt.odrreg.ConfirmOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_confirmOrder_submitdone','ev:submiterror':'scwin.sbm_confirmOrder_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlClsCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=LO121',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'data:json,[{"id":"ds_wrkPlClsCd","key":"GAUCE"}]','ev:submitdone':'scwin.sbm_wrkPlClsCd_submitdone','ev:submiterror':'scwin.sbm_wrkPlClsCd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_LkStepNo',action:'/ds.lo.comninfomgnt.RetrieveStdWorkPathCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'data:json,[{"id":"ds_LkStepNo","key":"GAUCE"}]','ev:submitdone':'scwin.sbm_LkStepNo_submitdone','ev:submiterror':'scwin.sbm_LkStepNo_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/SdConstants.js',scopeVariable:'SdConstants',type:'text/javascript'}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.wrkLobranCd = "";
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
scwin.memJson = $c.data.getMemInfo($p);
scwin.gr_odrWrkPathStpDetailValidateInfo = [{
  id: "odrNo",
  mandatory: true
},
//오더번호
{
  id: "commSeq",
  mandatory: true
},
//품명순번
{
  id: "odrWrkPathSeq",
  mandatory: true
},
//오더작업경로    
{
  id: "wrkStpCd",
  mandatory: true
} //작업단계
];
scwin.onpageload = async function () {
  udc_compopup.hide("");
  scwin.wrkLobranCd = scwin.memJson.lobranCd; // $c.ses.getLobranCd();
  scwin.wrkLobranNm = scwin.memJson.lobranNm; //$c.ses.getLobranNm();
  scwin.loginUserId = scwin.memJson.userId; //$c.ses.getUserId();    
};
scwin.onUdcCompleted = function () {
  // TODO: 서버에서 상수값 조회 필요 - JSP 서버사이드 상수를 클라이언트에서 사용
  scwin.SELPCH_ITEM_CD_NOSELL = SdConstants.SELPCH_ITEM_CD_NOSELL;
  scwin.SELL_ITEM_CD_TRANS_RATE = DsConstants.SELL_ITEM_CD_TRANS_RATE;
  scwin.TRANS_DEPARTMENT = DsConstants.TRANS_DEPARTMENT;
  scwin.IMP_CD = DsConstants.IMP_CD;
  scwin.EXP_CD = DsConstants.EXP_CD;
  scwin.WRK_PL_CLS_CD_DOOR = SdConstants.WRK_PL_CLS_CD_DOOR;
  scwin.WRK_PL_CLS_CD_RGN = SdConstants.WRK_PL_CLS_CD_RGN;
  scwin.WRK_PL_CLS_CD_PIER = SdConstants.WRK_PL_CLS_CD_PIER;
  scwin.WRK_PL_CLS_CD_BERTH = SdConstants.WRK_PL_CLS_CD_BERTH;
  scwin.WRK_PL_CLS_CD_RAILSTN = SdConstants.WRK_PL_CLS_CD_RAILSTN;
  scwin.WRK_PL_CLS_CD_MARTRPIER = SdConstants.WRK_PL_CLS_CD_MARTRPIER;
  scwin.BIZ_DOM_CD_TRANS = SdConstants.BIZ_DOM_CD_TRANS;
  scwin.BIZ_DOM_CD_STV = SdConstants.BIZ_DOM_CD_STV;
  scwin.BIZ_DOM_CD_STR = SdConstants.BIZ_DOM_CD_STR;
  scwin.WRK_STP_CD_CGSHF = DsConstants.WRK_STP_CD_CGSHF;
  scwin.WRK_STP_CD_SHUTTLE = DsConstants.WRK_STP_CD_SHUTTLE;
  scwin.WRK_STP_CD_GROUND_TRANS = DsConstants.WRK_STP_CD_GROUND_TRANS;
  scwin.WRK_STP_CD_RAILROAD = DsConstants.WRK_STP_CD_RAILROAD;
  scwin.WRK_STP_CD_MARTR = DsConstants.WRK_STP_CD_MARTR;
  scwin.ODR_KND_CD_IMP_CVSSL_BULK_ODR = DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR;
  scwin.ODR_KND_CD_IMP_GNRL_BULK_ODR = DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR;
  scwin.ODR_KND_CD_EXP_CVSSL_BULK_ODR = DsConstants.ODR_KND_CD_EXP_CVSSL_BULK_ODR;
  scwin.ODR_KND_CD_EXP_GNRL_BULK_ODR = DsConstants.ODR_KND_CD_EXP_GNRL_BULK_ODR;
  scwin.f_defaultValue();
};
scwin.f_clearTabOrderInfo = async function () {
  $p.parent().hid_odrNo.setValue("");
};
scwin.f_setTabOrderInfo = async function (odrNo) {
  $p.parent().hid_odrNo.setValue(odrNo);
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
  lay_realMchtclntNm.setValue("");

  //$c.gus.cfDisableKeyData();
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
  $c.sbm.execute($p, sbm_retrieveLobranTrans);
  gr_odrCommWrkPath.setReadOnly("grid", false);
  scwin.hid_chkUseFilter = "true";
  scwin.f_clearTabOrderInfo();
  $c.gus.cfDisableObjects($p, [btnConfirmOrder, btnOrderWrkStepDetail, btnDcSc]);
  ed_odrNo.focus();
};

//조회
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_odrNo]);
  if (chk) {
    let odrNo = ed_odrNo.getValue().replace(/\s*$/, '');

    //$c.gus.cfDisableKeyData();
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfEnableBtnOnly($p, [btnSave]);
    ds_order.removeAll();
    //ds_odrCommWrkPath.removeAll();
    //ds_ctrtWrkPath.removeAll();
    ds_odrWrkPathStep.removeAll();
    ds_ctrtWrkPathStep.removeAll();
    $c.gus.cfDisableObjects($p, [btnConfirmOrder, btnOrderWrkStepDetail, btnDcSc]);
    ds_odrWrkPathStepDetail.removeAll();
    ds_odrWrkPathStepDetailTemp.removeAll();
    $c.sbm.execute($p, sbm_wrkPlClsCd);
    $c.sbm.execute($p, sbm_LkStepNo);
    ds_orderSearch.set("odrNo", odrNo);
    await $c.sbm.execute($p, sbm_retrieve);
  }
};

//조회 조건 초기화
scwin.f_FieldClear = async function () {
  ed_odrNo.setValue("");
  ed_odrNo.focus();
};

//선택된 작업경로에 대한 작업 단계 조회
scwin.f_RetrieveWorkStep = async function () {
  if (ds_searchWrkStep.get("ctrtWrkPathSeq") == "0" || ds_searchWrkStep.get("ctrtWrkPathSeq") == "") {
    return;
  }
  await $c.sbm.execute($p, sbm_searchWorkStep);
};

//선택된 그리드에 작업단계 삽입 : 첫번째열을 선택한 경우 해당열 아래에 행삽입 후 이전 작업단계 정보 복사
scwin.f_InsertRow = async function () {
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  if (curRow == null) {
    ds_odrWrkPathStepDetail.insertRow(0);
    ds_odrWrkPathStepDetail.setRowJSON(0, {
      "odrWrkStpSeq": 2,
      //as-is 에서 2로 시작..     
      "selpchItemNm": "무매출"
    }, true);
    gr_odrWrkPathStpDetail.setFocusedCell(0, 0);
    return;
  }
  let v_tempSeq = parseInt(parseInt(ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq")) / 10) * 10;
  if (scwin.f_checkOdrWrkStpSeq(ds_odrWrkPathStepDetail, v_tempSeq)) {
    ds_odrWrkPathStepDetail.insertRow(curRow + 1);
    gr_odrWrkPathStpDetail.setFocusedCell(curRow + 1, 0);
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

//선택된 그리드에 작업단계 삭제
scwin.f_DeleteRow = function () {
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  if (ds_odrWrkPathStepDetail.getRowStatus(curRow) == "C") {
    ds_odrWrkPathStepDetail.removeRow(curRow);
  } else {
    ds_odrWrkPathStepDetail.deleteRow(curRow);
  }
  if (curRow >= 0) {
    let v_tempSeq = parseInt(parseInt(ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq")) / 10) * 10;
    scwin.f_refreshOdrWrkStpSeq(ds_odrWrkPathStepDetail, v_tempSeq);
  }
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};

//선택된 그리드에 작업단계 작업 취소
scwin.f_UndoRow = async function () {
  //scwin.gr_odrCommWrkPath_oncellclick(gr_odrCommWrkPath.getFocusedRowIndex());
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  if (ds_odrWrkPathStepDetail.getRowStatus(curRow) == "C") {
    ds_odrWrkPathStepDetail.removeRow(curRow);
  } else {
    ds_odrWrkPathStepDetail.undoRow(curRow);
  }
  if (curRow >= 0) {
    let v_tempSeq = parseInt(parseInt(ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq")) / 10) * 10;
    scwin.f_refreshOdrWrkStpSeq(ds_odrWrkPathStepDetail, v_tempSeq);
  }
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};

//선택된 DATASET에 ROW 복사 ( 대상 DataSet, 원본 Row, 대상 Row )
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

//선택된 DATASET에 오더 작업단계 추가 가능 확인
scwin.f_checkOdrWrkStpSeq = async function (dataObject, v_tempSeq) {
  for (let j = 0; j < dataObject.getRowCount(); j++) {
    let v_compSeq = parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) - v_tempSeq;
    if (parseInt(parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) / 10) * 10 == v_tempSeq && v_compSeq >= 9) {
      return false;
    }
  }
  return true;
};

//선택된 DATASET에 오더 작업단계순번 재정의
scwin.f_refreshOdrWrkStpSeq = async function (dataObject, v_tempSeq) {
  for (let j = 0; j < dataObject.getRowCount(); j++) {
    let v_compSeq = parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) - v_tempSeq;
    if (parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) > v_tempSeq && v_compSeq > 0 && v_compSeq < 10) {
      if (dataObject.getRowStatus(j) == "D") break;
      if (j == 0) {
        dataObject.setCellData(j, "odrWrkStpSeq", parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) + 1);
      } else {
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

  // 해당 품명의 실적 발생여부를 확인하여 수정 가능 항목을 설정한다.
  // 실적 발생시 수정할 수 없다.
  // 실적 발생여부를 조회하여 수정항목을 설정한다.
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

  // 작업단계 추가 가능여부 확인 및 행삽입, 행삭제, 취소 버튼 관리
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
};
scwin.f_Save = async function () {
  if (ds_odrCommWrkPath.getCellData(0, "ctrtWrkPathSeq") <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업경로"]);
    gr_odrCommWrkPath.setFocusedCell(0, "ctrtWrkPathSeq", true);
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

  // 현재 품명의 작업단계 정보의  Vaildation 을 검사한다.
  let chkValidGrid = await $c.gus.cfValidateGrid($p, "gr_odrWrkPathStpDetail", null, null, scwin.gr_odrWrkPathStpDetailValidateInfo, "작업단계");
  if (!chkValidGrid) {
    return;
  }
  for (let idx = 0; idx < ds_odrWrkPathStepDetail.getRowCount(); idx++) {
    if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim()) && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "dptWrkPlCd").trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업장"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "dptWrkPlNm", true);
      return false;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkLobranCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업점소"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkLobranNm", true);
        return false;
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "internalSellLodeptCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["매출귀속부서"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "internalSellLodeptNm", true);
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
    let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chk) {
      ds_saveodrCommWrkPath.removeAll();
      ds_saveodrCommWrkPath.setJSON(ds_odrCommWrkPath.getModifiedJSON(), false);
      ds_saveodrWrkPathStepDetail.removeAll();
      for (var i = 0; i < ds_odrWrkPathStepDetail.getTotalRow(); i++) {
        ds_saveodrWrkPathStepDetail.setRowJSON(i, ds_odrWrkPathStepDetail.getRowJSON(i));
        if (ds_odrWrkPathStepDetail.getRowStatus(i) == "R") {
          ds_saveodrWrkPathStepDetail.modifyRowStatus(i, 'U');
        } else if (ds_odrWrkPathStepDetail.getRowStatus(i) == "D") {
          ds_saveodrWrkPathStepDetail.modifyRowStatus(i, 'D');
        }
      }
      await $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_Save_backup = async function () {
  if (ds_odrCommWrkPath.getCellData(0, "ctrtWrkPathSeq") <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업경로"]);
    gr_odrCommWrkPath.setFocusedCell(0, "ctrtWrkPathSeq", true);
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

  // 현재 품명의 작업단계 정보의  Vaildation 을 검사한다.
  let chkValidGrid = await $c.gus.cfValidateGrid($p, "gr_odrWrkPathStpDetail", null, null, scwin.gr_odrWrkPathStpDetailValidateInfo, "작업단계");
  if (!chkValidGrid) {
    return;
  }

  // 필수 입력 확인
  for (let idx = 0; idx < ds_odrWrkPathStepDetail.getRowCount(); idx++) {
    if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim()) && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "dptWrkPlCd").trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업장"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "dptWrkPlNm", true);
      return false;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkLobranCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업점소"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkLobranNm", true);
        return false;
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "internalSellLodeptCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["매출귀속부서"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "internalSellLodeptNm", true);
        return false;
      }
    }
  }

  // 첫번째 품명의 작업단계 정보의  Vaildation 을 검사한다.
  // let detailchk = !$c.gus.cfValidate([gr_odrWrkPathStpDetail])
  // if(!detailchk){
  // 	return;
  // }

  // scwin.hid_chkUseFilter = false;
  // scwin.fn_ds_odrWrkPathStepDetailFilter();

  let v_wrkPathRows = ds_odrCommWrkPath.getTotalRow();
  let v_wrkPathStepRows = ds_odrWrkPathStepDetail.getTotalRow();

  // 첫번째 작업단계의 정보를 저장한다.
  let v_odrNo = ds_odrCommWrkPath.getCellData(0, "odrNo");
  let v_commSeq = ds_odrCommWrkPath.getCellData(0, "commSeq");

  // 첫번째 작업 경로 중 사용하지 않는 작업단계를 삭제한다.
  var i = 0;

  // for(let j = 0; j < ds_odrWrkPathStepDetail.getTotalRow(); j++){ 
  // 	// 삭제 대상 작업단계를 삭제한다.
  // 	if(	ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo")
  // 		&& ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq")
  // 		&& ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") != ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") 
  // 		&& ds_odrWrkPathStepDetail.getRowStatus(j) != "D"){
  // 		ds_odrWrkPathStepDetail.deleteRow(j);
  // 	} 

  //     // 실적이 발생한 작업단계를 제외
  // 	if(!$c.gus.cfIsNull(ds_odrCommWrkPath.getCellData(i, "wrkRsltsNo"))
  // 		&& ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo")
  // 		&& ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq")
  // 		&& ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") == ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq")
  // 		&& ds_odrWrkPathStepDetail.getRowStatus(j) != "D"){
  // 		ds_odrWrkPathStepDetail.deleteRow(j);
  // 	}  	 
  // }

  // 작업경로/작업단계가 설정되지 않은 품명의 경우 첫번째 작업경로/작업단계를 자동 설정한다.
  for (var i = 0; i < v_wrkPathRows; i++) {
    // 첫번째 작업 경로 중 사용하지 않는 작업단계를 삭제한다.
    // if(i == 0){    		
    // 	for(var j = 0; j < ds_odrWrkPathStepDetail.getTotalRow(); j++){

    // 		// 삭제 대상 작업단계를 삭제한다.
    // 		if(	ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo")
    // 			&& ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq")
    // 			&& ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") != ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") 
    // 			&& ds_odrWrkPathStepDetail.getRowStatus(j) != "D"){    			
    // 			ds_odrWrkPathStepDetail.deleteRow(j);
    // 		}
    // 	}

    // }

    if (ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") <= 0 && i > 0) {
      ds_odrCommWrkPath.setCellData(i, "ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(0, "ctrtWrkPathSeq"));

      // 작업경로별 사용하지 않는 작업단계를 삭제한다.
      // for(var j = 0; j < ds_odrWrkPathStepDetail.getTotalRow(); j++){

      // 	// 삭제 대상 작업단계를 삭제한다.
      // 	if(	ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo")
      // 		&& ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq")
      // 		&& ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") == ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") 
      // 		&& ds_odrWrkPathStepDetail.getRowStatus(j) != "D"){    			
      // 		ds_odrWrkPathStepDetail.deleteRow(j);
      // 	} else if(	ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo") 
      // 		&& ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq") 
      // 		&& ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") != ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") 
      // 		&& ds_odrWrkPathStepDetail.getRowStatus(j) != "D"){    			
      // 		ds_odrWrkPathStepDetail.deleteRow(j);
      // 	}
      // }

      // 첫번째 품명의 작업 단계를 작업 경로가 지정되지 않은 작업단계에 설정한다.
      // 작업단계 정보 설정확인
      for (var j = 0; j < v_wrkPathStepRows; j++) {
        if (ds_odrWrkPathStepDetail.getRowStatus(j) != "D" // RowStatus : 2 (DELETE) 가 아닌경우
        && v_odrNo == ds_odrWrkPathStepDetail.getCellData(j, "odrNo") && v_commSeq == ds_odrWrkPathStepDetail.getCellData(j, "commSeq")) {
          let detailRownum = ds_odrWrkPathStepDetail.insertRow();
          ds_odrWrkPathStepDetail.setRowPosition(detailRownum);
          for (var k = 0; k < ds_odrWrkPathStepDetail.getTotalCol(); k++) {
            switch (ds_odrWrkPathStepDetail.getColumnID(k)) {
              case "commSeq":
                ds_odrWrkPathStepDetail.setCellData(ds_odrWrkPathStepDetail.getRowPosition(), ds_odrWrkPathStepDetail.getColumnID(k), ds_odrCommWrkPath.getCellData(i, "commSeq"));
                break;
              case "odrWrkPathSeq":
                ds_odrWrkPathStepDetail.setCellData(ds_odrWrkPathStepDetail.getRowPosition(), ds_odrWrkPathStepDetail.getColumnID(k), ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq"));
                break;
              case "ctrtWrkPathSeq":
                ds_odrWrkPathStepDetail.setCellData(ds_odrWrkPathStepDetail.getRowPosition(), ds_odrWrkPathStepDetail.getColumnID(k), ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq"));
                break;
              default:
                ds_odrWrkPathStepDetail.setCellData(ds_odrWrkPathStepDetail.getRowPosition(), ds_odrWrkPathStepDetail.getColumnID(k), ds_odrWrkPathStepDetail.getCellData(j, ds_odrWrkPathStepDetail.getColumnID(k)));
                break;
            }
          }
        }
      }
    }
  }

  // 작업장구분이 운송인 경우 출발작업장, 도착작업장 정보를 자동 설정한다.
  for (var j = 0; j < ds_odrWrkPathStepDetail.getTotalRow(); j++) {
    if (ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim() == "") {
      if (j > 0 && j < ds_odrWrkPathStepDetail.getTotalRow()) {
        // 작업점소
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranNm"));

        // 출발 작업장
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd").trim())) ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlCd"));

        // 도착작업장
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "arvWrkPlCd").trim())) ds_odrWrkPathStepDetail.setCellData(j, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));

        // 매출귀속부서
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) {
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptCd").tirm())) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptCd"));
        }
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) {
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm").tirm())) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm"));
        }
      } else if (j == 0) {
        // 작업점소
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "wrkLobranCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "wrkLobranNm"));

        // 도착작업장
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "arvWrkPlCd").trim())) ds_odrWrkPathStepDetail.setCellData(j, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));

        // 매출귀속부서
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "internalSellLodeptNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm"))) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm"));
      } else {
        // 작업점소
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranNm"));

        // 출발 작업장
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd").trim())) ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlCd"));

        // 매출귀속부서
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "internalSellLodeptCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "internalSellLodeptNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j - 1, "internalSellLodeptNm"))) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(j - 1, "internalSellLodeptNm"));
      }
    }
  }

  // let chkValidAll = await $c.gus.cfValidate([gr_odrCommWrkPath, gr_odrWrkPathStpDetail]);
  // if (!chkValidAll) {
  //     return;
  // }

  // scwin.hid_chkUseFilter = true;
  // scwin.fn_ds_odrWrkPathStepDetailFilter();

  // 필수 입력사항을 체크    
  if (scwin.f_validChk()) {
    // 선택되지 않은 작업단계정보 삭제
    //scwin.f_chkOdrWrkPathStep();

    let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
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
scwin.f_openCommPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  let rtnList = null;
  let chkValue = false;
  switch (disGubun) {
    case 1:
      udc_compopup.setSelectId("retrieveLogisDeptInfo");
      rtnList = await udc_compopup.cfCommonPopUpAsync(null, pCode, pName, pClose, null, null, null, null, "A,B", null, null, null, null, null, pAllSearch, "작업점소,점소코드,점소명", null, null);
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
      udc_compopup.setSelectId("retrieveWrkPlInfo");
      rtnList = await udc_compopup.cfCommonPopUpAsync(null, pCode, pName, pClose, null, null, null, null, pWhere2, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", null, null);
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCOrg", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNmOrg", rtnList[1]);
          /*
          if(ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() != SdConstants.SELPCH_ITEM_CD_NOSELL){
          // 작업점소 정보 설정                        
          if(!$c.gus.cfIsNull(rtnList[4])){
          ds_odrWrkPathStepDetail.setCellData(row,"wrkLobranCd", rtnList[4]);	//작업점소코드
          ds_odrWrkPathStepDetail.setCellData(row,"wrkLobranNm", rtnList[7]);	//작업점소명
          ds_odrWrkPathStepDetail.setCellData(row,"wrkLobranNmOrg", rtnList[7]);	//작업점소명	
          }	
          // 매출귀속부서정보 설정
          if(!$c.gus.cfIsNull(rtnList[8])){
          ds_odrWrkPathStepDetail.setCellData(row,"internalSellLodeptCd", rtnList[8]);	//매출귀속부서코드
          ds_odrWrkPathStepDetail.setCellData(row,"internalSellLodeptNm", rtnList[9]);	//매출귀속부서명
          ds_odrWrkPathStepDetail.setCellData(row,"internalSellLodeptNmOrg", rtnList[9]);	//매출귀속부서명	
          }
          }      
          */
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
      udc_compopup.setSelectId("retrieveLogisDeptInfo");
      rtnList = await udc_compopup.cfCommonPopUpAsync(null, pCode, pName, pClose, null, null, null, null, pWhere3, null, null, null, null, null, pAllSearch, "매출귀속부서,부서코드,부서명", null, null);
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

//-------------------------------------------------------------------------
// 작업단계 정보를 설정한다.
// - 작업경로별 조회된 오더작업단계, 계약작업단계 정보 중
//   오더작업단계 정보가 존재하는 경우 작업단계 그리드에 오더작업단계정보를 설정하고
//   오더작업단계 정보가 존재하지 않는경우 계약작업단계정보를 작업단계 그리드에 설정한다. 
//-------------------------------------------------------------------------
scwin.f_setWorkPathStepDetail = async function () {
  ds_odrWrkPathStepDetail.removeAll();
  scwin.wrkLobranCd = scwin.memJson.lobranCd;
  scwin.wrkLobranNm = scwin.memJson.lobranNm;
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
  if (!btnUpdate.getDisabled()) {
    if (ds_odrWrkPathStepDetail.getCellData(0, "wrkPlClsCd").trim() == "") {
      gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", true);
    } else {
      gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", false);
    }
    if (ds_odrWrkPathStepDetail.getCellData(0, "selpchItemCd").trim() == scwin.SELPCH_ITEM_CD_NOSELL) {
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", true);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", true);
    } else {
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", false);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", false);
    }
  }
  $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark]);
  scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());
  ds_odrWrkPathStepDetail.sort("odrWrkStpSeq", 0);
  gr_odrWrkPathStpDetail.setHeaderSortImage("odrWrkStpSeq", 0);
};

//-------------------------------------------------------------------------
// 오더작업단계정보를 작업단계 그리드에 설정한다.
//-------------------------------------------------------------------------
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
  ds_odrWrkPathStepDetail.initRowStatus();
  txt_gr_odrWrkPathStpDetailTot.setValue(ds_odrWrkPathStepDetail.getTotalRow());
};

//-------------------------------------------------------------------------
// 계약작업단계정보를 작업단계 그리드에 설정한다.
//-------------------------------------------------------------------------
scwin.f_setCtrtWrkPathStepToWrkPathStepDetail = async function () {
  let wrkStDt = ds_odrCommWrkPath.getCellData(ds_odrCommWrkPath.getRowPosition(), "wrkStDt");
  let wrkStHh = ds_odrCommWrkPath.getCellData(ds_odrCommWrkPath.getRowPosition(), "wrkStHh");
  let wrkEndDt = ds_odrCommWrkPath.getCellData(ds_odrCommWrkPath.getRowPosition(), "wrkEndDt");
  let wrkEndHh = ds_odrCommWrkPath.getCellData(ds_odrCommWrkPath.getRowPosition(), "wrkEndHh");
  let nextWorkEndDate = new Date();
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
    if (i == 0) {
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStDt", wrkStDt); // 작업시작일자
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStHh", wrkStHh); // 작업시작시간
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndDt", nextWorkEndDate.format("YYYYMMDD")); // 작업종료일자
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndHh", nextWorkEndDate.format("HHmm")); // 작업종료시간
    } else if (i > 0 && i < ds_ctrtWrkPathStep.getRowCount()) {
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStDt", ds_odrWrkPathStepDetail.getCellData(newRow - 1, "wrkEndDt")); // 작업시작일자
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStHh", ds_odrWrkPathStepDetail.getCellData(newRow - 1, "wrkEndHh")); // 작업시작시간
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndDt", nextWorkEndDate.format("YYYYMMDD")); // 작업종료일자
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndHh", nextWorkEndDate.format("HHmm")); // 작업종료시간
    } else {
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStDt", ds_odrWrkPathStepDetail.getCellData(newRow - 1, "wrkEndDt")); // 작업시작일자
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStHh", ds_odrWrkPathStepDetail.getCellData(newRow - 1, "wrkEndHh")); // 작업시작시간
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndDt", workEndDate.format("YYYYMMDD")); // 작업종료일자
      ds_odrWrkPathStepDetail.setCellData(newRow, "wrkEndHh", workEndDate.format("HHmm")); // 작업종료시간
    }
  }
  txt_gr_odrWrkPathStpDetailTot.setValue(ds_odrWrkPathStepDetail.getTotalRow());
  scwin.f_setOdrWrkPathStepDptArv();
  await scwin.f_setWorkStepInfoRefresh();
  ds_odrWrkPathStepDetail.initRowStatus();
};

//-------------------------------------------------------------------------
// 저장하기전 선택하지 않은 작업단계 정보를 삭제한다.
// 저장하기전 수정되지 않은 작업경로의 작업단계가 수정되지 않은 경우  삭제하여 전송하지 않는다.
//-------------------------------------------------------------------------
scwin.f_chkOdrWrkPathStep = async function () {
  // scwin.hid_chkUseFilter = false;
  // scwin.fn_ds_odrWrkPathStepDetailFilter();

  let v_maxOdrWrkPathSeq = 0;
  // 오더작업경로순번 최대값
  for (var i = 0; i < ds_odrCommWrkPath.getRowCount(); i++) {
    let val = Number(ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq"));
    if (val > v_maxOdrWrkPathSeq) {
      v_maxOdrWrkPathSeq = val;
    }
  }

  //품명별 작업경로 정보
  for (let i = 0; i < ds_odrCommWrkPath.getRowCount(); i++) {
    let v_odrNo = ds_odrCommWrkPath.getCellData(i, "odrNo");
    let v_commSeq = ds_odrCommWrkPath.getCellData(i, "commSeq");
    let v_odrWrkPathSeq = ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq");
    let v_ctrtWrkPathSeq = ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq");
    if (ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq") <= 0) {
      ds_odrCommWrkPath.modifyRowStatus(i, "C"); // UserStatus : 1 (INSERT)로 설정 : 오더작업경로 정보가 존재하지 않는 경우
      v_maxOdrWrkPathSeq++;
    }
    for (let j = 0; j < ds_odrWrkPathStepDetail.getRowCount(); j++) {
      if (v_odrNo == ds_odrWrkPathStepDetail.getCellData(j, "odrNo") && v_commSeq == ds_odrWrkPathStepDetail.getCellData(j, "commSeq")) {
        // 저장하기전 선택하지 않은 작업단계 정보를 삭제한다.		
        // if (v_odrWrkPathSeq != ds_odrWrkPathStepDetail.getCellData(j, "odrWrkPathSeq") || v_ctrtWrkPathSeq != ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq")) {
        //     ds_odrWrkPathStepDetail.deleteRow(j);
        // }

        // 저장하기전 수정되지 않은 작업경로의 작업단계가 수정되지 않은 경우  삭제하여 전송하지 않는다.
        // if (!$c.gus.cfIsNull(ds_odrCommWrkPath.getCellData(i, "wrkRsltsNo"))) {
        //     if (ds_odrCommWrkPath.getCellData(i, "odrNo") == ds_odrWrkPathStepDetail.getCellData(j, "odrNo")
        //         && ds_odrCommWrkPath.getCellData(i, "commSeq") == ds_odrWrkPathStepDetail.getCellData(j, "commSeq")
        //         && ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq") == ds_odrWrkPathStepDetail.getCellData(j, "odrWrkPathSeq")) {
        //         ds_odrWrkPathStepDetail.deleteRow(j);
        //     }
        // }

        if (v_odrWrkPathSeq == 0) {
          ds_odrWrkPathStepDetail.setCellData(j, "odrWrkPathSeq", v_maxOdrWrkPathSeq);
        }
      }
    }
    if (v_odrWrkPathSeq == 0) {
      ds_odrCommWrkPath.setCellData(i, "odrWrkPathSeq", v_maxOdrWrkPathSeq);
    }
  }

  // scwin.hid_chkUseFilter = true;
  // scwin.fn_ds_odrWrkPathStepDetailFilter();
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

//-------------------------------------------------------------------------
// 작업단계의 정보가 변경되었을경우 
// - 작업단계의 출발지 정보를 다시 설정한다.
// - 매출입항목이 무매출이 아닌경우 작업점소, 매출 귀속 부서를 다시 설정한다.
// - 작업단계별 작업시작일시, 작업완료일시를 설정한다.
//-------------------------------------------------------------------------
scwin.f_setWorkStepInfoRefresh = async function () {
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
    await scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(i);
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
    await scwin.f_setOdrWorkStepWorkLobranInternalSellLodept(j);
  }
  await scwin.f_copyTempDataSet();
};

//-------------------------------------------------------------------------
// 작업단계별 작업점소, 매출귀속부서 설정
// 1. 운송모드 
//	1.1. 기준
//		1.1.1. 작업점소 : 오더등록자의 소속점소
//		1.1.2. 매출귀속부서 : 오더등록자의 소속점소의 운송부서
//	1.2. 예외 
//		1.2.1. 작업점소 : 철송 도착역, 해송의 도착 해송부두 이후는 해당 작업장의 상위 작업장의 소속점소
//		1.2.2. 매출귀속부서 : 설정된 작업장 소속점소의 운송부서
// 2. 작업노드	
//	2.1. 기준 
// 		2.1.1. 작업점소 : 작업장의 소속점소
//		2.1.2. 매출귀속부서 : 설정된 작업점소의 보관부서, 단 부두의 경우 설정된 작업점소의 하역부서	
//	2.2. 예외
//		2.2.1. 작업점소 : 철송역, 해송부두는 상위 작업단계(운송)의 작업점소 
//		2.2.2. 매출귀속부서 : 설정된 작업점소의 운송부서
//-------------------------------------------------------------------------
scwin.f_setOdrWorkStepWorkLobranInternalSellLodept = async function (row) {
  if (row < 0 || row >= ds_odrWrkPathStepDetail.getRowCount()) return;
  if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) {
    // 운송모드인 경우
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd"))) {
      // 작업점소설정
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", scwin.wrkLobranCd);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", scwin.wrkLobranNm);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", scwin.wrkLobranNm);
      // 매출귀속부서 설정
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", scwin.internalSellLodeptCd);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", scwin.internalSellLodeptNm);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", scwin.internalSellLodeptNm);
    } else if (row > scwin.wrkLobranCdRow) {
      // 작업점소설정
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", scwin.wrkLobranCd);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", scwin.wrkLobranNm);
      ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", scwin.wrkLobranNm);
      // 매출귀속부서 설정
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", scwin.internalSellLodeptCd);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", scwin.internalSellLodeptNm);
      ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", scwin.internalSellLodeptNm);
    }
  } else {
    // 작업노드인 경우 - 무매출이 아닌경우, 이적 단계인 경우만 설정
    if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() != scwin.SELPCH_ITEM_CD_NOSELL || ds_odrWrkPathStepDetail.getCellData(row, "wrkStpCd").trim() == scwin.WRK_STP_CD_CGSHF) {
      let wrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd");
      // 작업장 구분이 철도역인 경우인 경우
      if (wrkPlClsCd == scwin.WRK_PL_CLS_CD_RAILSTN) {
        // 작업점소설정
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNmOrg"));
        // 매출귀속부서 설정
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNmOrg"));

        // 이전 단계가 철송인 경우 해당 작업장(철도역)의 소속점소로 작업점소 변경 매출부서 설정
        if (ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_RAILROAD) {
          let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
          if (!$c.gus.cfIsNull($p, pCode)) {
            let rtnList = await scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, wrkPlClsCd);
            if (rtnList != null && rtnList[0] != undefined && rtnList[0].trim() != "N/A") {
              scwin.wrkLobranCd = rtnList[2];
              scwin.wrkLobranNm = rtnList[3];
              scwin.internalSellLodeptCd = rtnList[4];
              scwin.internalSellLodeptNm = rtnList[5];
              scwin.wrkLobranCdRow = row;
            }
          }
        }

        // 작업장 구분이 해송부두인 경우    
      } else if (wrkPlClsCd == scwin.WRK_PL_CLS_CD_MARTRPIER) {
        // 작업점소설정
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkLobranNmOrg"));
        // 매출귀속부서 설정
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptCd"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNm"));
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", ds_odrWrkPathStepDetail.getCellData(row - 1, "internalSellLodeptNmOrg"));

        // 이전 단계가 해송인 경우 해당 작업장(해송부두)의 소속점소로 작업점소 변경 매출부서 설정
        if (ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == scwin.WRK_STP_CD_MARTR) {
          let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
          if (!$c.gus.cfIsNull($p, pCode)) {
            let rtnList = await scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, wrkPlClsCd);
            if (rtnList != null && rtnList[0] != undefined && rtnList[0].trim() != "N/A") {
              scwin.wrkLobranCd = rtnList[2];
              scwin.wrkLobranNm = rtnList[3];
              scwin.internalSellLodeptCd = rtnList[4];
              scwin.internalSellLodeptNm = rtnList[5];
              scwin.wrkLobranCdRow = row;
            }
          }
        }

        // 기타 작업노드인 경우    
      } else {
        let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
        let pWrkLobranCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd");
        let pInternalSellLodeptCd = ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptCd");
        let pBizDomCd = wrkPlClsCd == scwin.WRK_PL_CLS_CD_PIER ? scwin.BIZ_DOM_CD_STV : scwin.BIZ_DOM_CD_STR;
        if (!$c.gus.cfIsNull($p, pCode) && ($c.gus.cfIsNull($p, pWrkLobranCd) || $c.gus.cfIsNull($p, pInternalSellLodeptCd))) {
          let rtnList = await scwin.f_setWorkPlaceLobranCd(pCode, '', pBizDomCd, wrkPlClsCd);
          if (rtnList != null && rtnList[0] != undefined && rtnList[0].trim() != "N/A") {
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
    } else {
      if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd") == SdConstants.WRK_PL_CLS_CD_RAILSTN) {
        if (ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == DsConstants.WRK_STP_CD_RAILROAD || ds_odrWrkPathStepDetail.getCellData(row - 1, "wrkStpCd") == DsConstants.WRK_STP_CD_MARTR) {
          let pCode = ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd");
          if (!$c.gus.cfIsNull($p, pCode)) {
            let rtnList = await scwin.f_setWorkPlaceLobranCd(pCode, '', scwin.BIZ_DOM_CD_TRANS, wrkPlClsCd);
            if (rtnList != null && rtnList[0] != undefined && rtnList[0].trim() != "N/A") {
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
  }
};
scwin.f_setWorkLobranNoDataAutoClose = async function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName)) return false;
  let pWhere = pWrkPlClsCd;
  udc_compopup.setSelectId("retrieveWrkPlInfoNoDataAutoClose");
  let rtnList = await udc_compopup.cfCommonPopUpAsync(null, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF, null);
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
scwin.f_setWorkLobranInternalSellLodept = async function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  let pBizDomCd = ds_odrWrkPathStepDetail.getCellData(row, "bizDomCd").trim();
  let pSelpchItemCd = ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName) || pSelpchItemCd == scwin.SELPCH_ITEM_CD_NOSELL) return false;
  let pWhere = pWrkPlClsCd + "," + pBizDomCd;
  udc_compopup.setSelectId("retrieveWorkStepEachWorkPlaceInfo");
  let rtnList = udc_compopup.cfCommonPopUpAsync(null, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF, null);
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
  udc_compopup.setSelectId("retrieveWorkPlaceLobranCd");
  let rtnList = await udc_compopup.cfCommonPopUpAsync(null, pCode, pName, 'T', null, null, null, null, pWhere, null, null, null, null, null, 'F', "작업장,작업장코드,작업장명", 'T', null);
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
  let chk = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_010, "오더확정"));
  if (chk) {
    await $c.sbm.execute($p, sbm_confirmOrder);
  }
};

//오더 작업단계 수정 모드 확인
scwin.f_checkWorkStepEditMode = async function (row) {
  if (row < 0 || row >= ds_odrWrkPathStepDetail.getRowCount()) return false;
  if (gr_odrWrkPathStpDetail.getReadOnly()) {
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

//품명별 실적 생성여부 확인 - 모든 품명의 실적이 생성된 경우 수정할 수 없음.
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
  $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.fn_ds_order_OnLoadCompleted();
  scwin.hid_chkUseFilter = "true";
  gr_odrCommWrkPath.setReadOnly("grid", true);
  gr_odrWrkPathStpDetail.setReadOnly("grid", true);
  txt_gr_odrCommWrkPathTot.setValue(ds_odrCommWrkPath.getTotalRow());
  btnUpdate.setDisabled(false);
  ds_ctrtWrkPath.sort("ctrtWrkPathSeq", 0);
  gr_odrCommWrkPath.setColumnNodeSet("ctrtWrkPathSeq", "data:ds_ctrtWrkPath", "ctrtWrkPathNm", "ctrtWrkPathSeq");
  if (ds_order.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    scwin.f_FieldClear();
    return;
  }
  for (var i = 0; i < ds_odrCommWrkPath.getTotalRow(); i++) {
    let sWrkRsltsNo = ds_odrCommWrkPath.getCellData(i, "wrkRsltsNo");
    ds_odrCommWrkPath.setCellData(i, "wrkRsltsYn", sWrkRsltsNo == "" ? "미생성" : "생성");
  }
  ds_odrCommWrkPath.initRowStatus();
  ds_order.setRowPosition(0);
  gr_odrCommWrkPath.setFocusedCell(0, 0, false);
  let odrRow = ds_order.getRowPosition();
  let odrKndCd = ds_order.getCellData(odrRow, "odrKndCd");
  let odrDcsnYn = ds_order.getCellData(odrRow, "odrDcsnYn");
  let odrCompleteYn = ds_order.getCellData(odrRow, "odrCompleteYn");
  let odrDelYn = ds_order.getCellData(odrRow, "odrDelYn");
  let autoOdrYn = ds_order.getCellData(odrRow, "autoOdrYn");
  scwin.f_setDisplayOdrKndCd(odrKndCd);
  scwin.hid_odrKndCd = odrKndCd;
  scwin.hid_ctrtClntNo = ds_order.getCellData(odrRow, "ctrtClntNo");
  scwin.hid_ctrtNo = ds_order.getCellData(odrRow, "ctrtNo");
  if (odrDcsnYn != scwin.YN_YES) {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
    scwin.f_chkCommodityWorkPath();
  } else {
    $c.gus.cfDisableBtnOnly($p, [btnUpdate, btnSave]);
  }
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
  hid_chkReterieve.setValue("retrieveIn");
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
scwin.fn_ds_order_OnLoadCompleted = function () {
  //as-is for=ds_order event=OnLoadCompleted(rowCnt)
  if (ds_order.getTotalRow() <= 0) return;

  // 오더 종류가 내수운송인 경우 수요가로 명칭 변환    
  if (ds_order.getCellData(0, "odrKndCd").substr(0, 1) == "D") {
    td_realMchtClntNm.setValue("수요가");
    // 수요가명 설정
    lay_realMchtclntNm.setValue(ds_order.getCellData(0, "dmndNm"));
    // 수요가 코드 설정
    //hid_realMchtclntNo.value = ds_order.NameValue(ds_order.RowPosition, "dmndNo");
  } else {
    td_realMchtClntNm.setValue("실화주");
    // 실화주명 설정
    lay_realMchtclntNm.setValue(ds_order.getCellData(0, "realMchtClntNm"));
    // 실화주 코드 설정
    //hid_realMchtclntNo.value = ds_order.NameValue(ds_order.RowPosition, "realMchtClntNo");    

    scwin.f_setDisplayOdrKndCd(ds_order.getCellData(0, "odrKndCd"));
  }

  // 계약거래처명 설정
  // lay_ctrtClntNm.innerHTML = ds_order.NameValue(ds_order.RowPosition, "ctrtClntNm");
  // // 계약번호 설정
  // lay_ctrtNo.innerHTML = ds_order.NameValue(ds_order.RowPosition, "ctrtNo");
  // // 오더종류명 설정
  // lay_odrKndNm.innerHTML = ds_order.NameValue(ds_order.RowPosition, "odrKndNm");

  // // 계약거래처 코드 설정
  // hid_ctrtClntNo.value = ds_order.NameValue(ds_order.RowPosition, "ctrtClntNo");
  // // 계약번호 설정
  // hid_ctrtNo.value = ds_order.NameValue(ds_order.RowPosition, "ctrtNo");
  // // 오더종류코드 설정
  // hid_odrKndCd.value = ds_order.NameValue(ds_order.RowPosition, "odrKndCd");

  if (ds_order.getCellData(0, "odrDelYn") == DsConstants.YN_YES) {
    gr_odrCommWrkPath.setGridReadOnly(true);
    gr_odrWrkPathStpDetail.setGridReadOnly(true);
    $c.gus.cfDisableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark, btnSave]);
  } else {
    gr_odrCommWrkPath.setGridReadOnly(false);
    gr_odrWrkPathStpDetail.setGridReadOnly(false);
    $c.gus.cfEnableBtnOnly($p, [btnInsertRow, btnDeleteRow, btnUndoMark, btnSave]);
  }
  //scwin.gr_odrCommWrkPath_oncellclick(0, 0, "odrNo");
};
scwin.sbm_searchWorkStep_submitdone = async function (e) {
  scwin.f_setWorkPathStepDetail();
};
scwin.sbm_searchWorkStep_submiterror = async function (e) {};
scwin.sbm_retrieveLobranTrans_submitdone = async function (e) {
  if (ds_lobran.getRowCount() > 0) {
    if (scwin.loginUserId == "040239") {
      scwin.internalSellLodeptCd = "4A5";
      scwin.internalSellLodeptNm = "인천제강운송";
    } else {
      if (ds_lobran.getRowPosition() == null) ds_lobran.setRowPosition(0);
      scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
      scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
    }
  }
};
scwin.sbm_confirmOrder_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0] != 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_010, ["오 더확정"]);
  scwin.f_Retrieve();
};
scwin.sbm_wrkPlClsCd_submitdone = function (e) {
  ds_wrkPlClsCd.insertRow(0);
  ds_wrkPlClsCd.setCellData(0, "cd", " ");
  ds_wrkPlClsCd.setCellData(0, "cdNm", "→");
  ds_wrkPlClsCd.sort("sortSeq", 0);
};
scwin.sbm_LkStepNo_submitdone = function (e) {
  //gr_odrWrkPathStpDetail.setColumnNodeSet("wrkStpCd", "data:ds_LkStepNo", "wrkStpNm", "wrkStpCd");    	    
  //gr_odrWrkPathStpDetail.setColumnNodeSet("wrkStpCd", "data:ds_linkedLkStepNo", "wrkStpNm", "wrkStpCd");    
};
scwin.ed_odrNo_onkeydown = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};
scwin.gr_odrWrkPathStpDetail_ontextimageclick = async function (rowIndex, columnIndex) {
  let row = rowIndex;
  let columnId = gr_odrWrkPathStpDetail.getColumnID(columnIndex);
  switch (columnId) {
    case "wrkLobranNm":
      await scwin.f_openCommPopUpGrid(1, row, ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd"), ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranNm"), 'F', 'F');
      break;
    case "dptWrkPlNm":
      let chkPopup = await scwin.f_openCommPopUpGrid(2, row, "", ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlNm"), 'F', 'F');
      if (chkPopup) await scwin.f_setWorkStepInfoRefresh();
      break;
    case "internalSellLodeptNm":
      await scwin.f_openCommPopUpGrid(3, row, ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptCd"), ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptNm"), 'F', 'F');
      break;
    case "vsslCdPortcnt":
      await scwin.f_openCommPopUpGrid(4, row, "", ds_odrWrkPathStepDetail.getCellData(row, "vsslNm"), 'F', 'F');
      break;
    default:
      break;
  }
};

//작업경로 변경시 작업단계 조회  as-is event OnColumnChanged
scwin.ds_odrCommWrkPath_oncelldatachange = function (info) {
  let row = info.rowIndex;
  let colid = info.colID;
  let copyTempDataSet = false;
  if (colid == "ctrtWrkPathSeq") {
    scwin.fn_ds_odrWrkPathStepDetailFilter();
    if (ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq") > 0) {
      if (ds_odrWrkPathStepDetail.getRowCount() > 0) {
        return;
      }
      if (ds_odrCommWrkPathTemp.getRowCount() > 0) {
        if (ds_odrCommWrkPath.getCellData(row, "dptWrkPlCd") == ds_odrCommWrkPathTemp.getCellData(ds_odrCommWrkPathTemp.getRowPosition(), "dptWrkPlCd") && ds_odrCommWrkPath.getCellData(row, "arvWrkPlCd") == ds_odrCommWrkPathTemp.getCellData(ds_odrommWrkPathTemp.getRowPosition(), "arvWrkPlCd")) {
          // 임시 데이터셋에 존재하는 작업경로인지 확인
          //ds_odrWrkPathStepDetailTemp.filter();
          if (ds_odrWrkPathStepDetailTemp.getRowCount() > 0) {
            scwin.f_CopyDataSetValue(ds_odrWrkPathStepDetailTemp, ds_odrWrkPathStepDetail);
            copyTempDataSet = true;
          }
        }
      }
      if (!copyTempDataSet) {
        ds_searchWrkStep.set("odrNo", ds_odrCommWrkPath.getCellData(row, "odrNo"));
        ds_searchWrkStep.set("commSeq", ds_odrCommWrkPath.getCellData(row, "commSeq"));
        ds_searchWrkStep.set("odrWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "odrWrkPathSeq"));
        ds_searchWrkStep.set("ctrtNo", ds_odrCommWrkPath.getCellData(row, "ctrtNo"));
        ds_searchWrkStep.set("ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq"));
        scwin.f_RetrieveWorkStep();
      }
    }
  }
};

//작업단계 DataSet Filter
scwin.fn_ds_odrWrkPathStepDetailFilter = function () {
  let v_odrNo = "";
  let v_commSeq = 0;
  let v_wrkPathSeq = 0;
  let chkFilter = scwin.hid_chkUseFilter;
  if (eval(chkFilter)) {
    let nRowPos = ds_odrCommWrkPath.getRowPosition();
    if (ds_odrCommWrkPath.getRowPosition() > -1) {
      v_odrNo = ds_odrCommWrkPath.getCellData(nRowPos, "odrNo");
      v_commSeq = ds_odrCommWrkPath.getCellData(nRowPos, "commSeq");
      v_odrWrkPathSeq = ds_odrCommWrkPath.getCellData(nRowPos, "odrWrkPathSeq");
      v_ctrtWrkPathSeq = ds_odrCommWrkPath.getCellData(nRowPos, "ctrtWrkPathSeq");
    }
    ds_odrWrkPathStepDetail.setColumnFilter({
      type: 'row',
      colIndex: 'odrNo',
      key: v_odrNo,
      condition: 'and'
    });
    ds_odrWrkPathStepDetail.setColumnFilter({
      type: 'row',
      colIndex: 'commSeq',
      key: v_commSeq,
      condition: 'and'
    });
    ds_odrWrkPathStepDetail.setColumnFilter({
      type: 'row',
      colIndex: 'odrWrkPathSeq',
      key: v_odrWrkPathSeq,
      condition: 'and'
    });
    ds_odrWrkPathStepDetail.setColumnFilter({
      type: 'row',
      colIndex: 'ctrtWrkPathSeq',
      key: v_ctrtWrkPathSeq,
      condition: 'and'
    });
  } else {
    ds_odrWrkPathStepDetail.clearFilter();
  }
};
scwin.ds_odrCommWrkPath_onrowpositionchange = function (info) {
  // let row = info.newRowIndex;
  // if (row < 0) return;
  // if (ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq") > 0) {
  //     ds_linkedLkStepNo.removeColumnFilterAll();
  //     ds_searchWrkStep.set("odrNo", ds_odrCommWrkPath.getCellData(row, "odrNo"));
  //     ds_searchWrkStep.set("commSeq", ds_odrCommWrkPath.getCellData(row, "commSeq"));
  //     ds_searchWrkStep.set("odrWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "odrWrkPathSeq"));
  //     ds_searchWrkStep.set("ctrtNo", ds_odrCommWrkPath.getCellData(row, "ctrtNo"));
  //     ds_searchWrkStep.set("ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq"));
  //     scwin.f_RetrieveWorkStep();
  // }

  // if (row >= 0 && btnUpdate.getDisabled()) {
  //     if (scwin.f_chkResultsConfirmationCommodity(row)) {
  //         gr_odrCommWrkPath.setReadOnly("grid", true);
  //         gr_odrWrkPathStpDetail.setReadOnly("grid", true);
  //         $c.gus.cfDisableBtnOnly([btnInsertRow, btnDeleteRow, btnUndoMark, btnUpdate, btnSave]);
  //     } else {
  //         gr_odrCommWrkPath.setReadOnly("grid", false);
  //         gr_odrWrkPathStpDetail.setReadOnly("grid", false);
  //         $c.gus.cfEnableBtnOnly([btnInsertRow, btnDeleteRow, btnUndoMark]);
  //     }
  // }

  // scwin.f_checkWorkStepEditMode(ds_odrWrkPathStepDetail.getRowPosition());

  // scwin.wrkLobranCd = scwin.memJson.lobranCd;
  // scwin.wrkLobranNm = scwin.memJson.lobranNm;
  // if (scwin.loginUserId == "040239") {
  //     scwin.internalSellLodeptCd = "4A5";
  //     scwin.internalSellLodeptNm = "인천제강운송";
  // } else if (ds_lobran.getRowCount() > 0) {
  //     scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
  //     scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
  // }
  // scwin.wrkLobranCdRow = 0;    
};

//as-is ds_odrWrkPathStepDetail event=OnRowPosChanged(row)>
scwin.ds_odrWrkPathStepDetail_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  if (row >= 0) {
    scwin.f_checkWorkStepEditMode(row);
    if (gr_odrWrkPathStpDetail.getReadOnly()) return;
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
scwin.f_openCommonPopUpNoDataClose = async function (pCode) {
  if ($c.gus.cfIsNull($p, pCode)) return;
  let pValue = "T,J,,,T,T,1";
  udc_compopup.setSelectId("retrieveLogisDeptInfo");
  let rtnList = await udc_compopup.cfCommonPopUpAsync(null, pCode, '', 'T', null, null, null, null, pValue, null, null, null, null, null, 'F', "매출귀속부서,부서코드,부서명", 'T', null);
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
  scwin.wrkLobranCd = scwin.memJson.lobranCd;
  scwin.wrkLobranNm = scwin.memJson.lobranNm;
  if (scwin.loginUserId == "040239") {
    scwin.internalSellLodeptCd = "4A5";
    scwin.internalSellLodeptNm = "인천제강운송";
  } else if (ds_lobran.getRowCount() > 0) {
    scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
    scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
  }
  scwin.wrkLobranCdRow = 0;
};
scwin.gr_odrCommWrkPath_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {};

//as-is ds_odrCommWrkPath OnRowPosChanged event
//scwin.gr_odrCommWrkPath_oncellclick = function (rowIndex, columnIndex, columnId) {               
scwin.gr_odrCommWrkPath_onrowindexchange = function (rowIndex, oldRow) {
  let row = rowIndex;
  //if (row < 0) return;    
  scwin.fn_ds_odrWrkPathStepDetailFilter();
  if (ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq") > 0) {
    //ds_linkedLkStepNo.removeColumnFilterAll();
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
  scwin.wrkLobranCd = scwin.memJson.lobranCd;
  scwin.wrkLobranNm = scwin.memJson.lobranNm;
  if (scwin.loginUserId == "040239") {
    scwin.internalSellLodeptCd = "4A5";
    scwin.internalSellLodeptNm = "인천제강운송";
  } else if (ds_lobran.getRowCount() > 0) {
    scwin.internalSellLodeptCd = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranCd");
    scwin.internalSellLodeptNm = ds_lobran.getCellData(ds_lobran.getRowPosition(), "lobranNm");
  }
  scwin.wrkLobranCdRow = 0;
};
scwin.ds_ctrtWrkPath_ondataload = function () {
  if (ds_order.getTotalRow() > 0 && ds_ctrtWrkPath.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//as-is ds_odrWrkPathStepDetail event=OnRowPosChanged(row)>
scwin.ds_odrWrkPathStepDetail_oncelldatachange = function (info) {
  let row = info.rowIndex;
  let colid = info.colID;
  if (row > -1 && btnUpdate.getDisabled()) {
    if (gr_odrWrkPathStpDetail.getReadOnly()) return;
    if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim() == "") {
      // 작업구분이 운송인 경우 작업장 입력불가
      gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", true);
    } else {
      gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", false);
    }
    if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() == SdConstants.SELPCH_ITEM_CD_NOSELL) {
      // 매출입항목이 무매출인 경우 작업점소, 매출귀속부서 입력 불가
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", true);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", true);
    } else {
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", false);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", false);
    }
  }
};

// 품명 변경 이전에 작업단계 정보 유효성확인  as-is event CanRowPosChange
scwin.ds_odrCommWrkPath_onbeforerowpositionchange = function (info) {
  if (!gr_odrWrkPathStpDetail.getReadOnly("grid")) {
    // 수정모드일 경우
    // 작업경로별 작업단계 입력 데이터 필수항목 확인
    // 현재 품명의 작업단계 정보의  Vaildation 을 검사한다.
    if (!$c.gus.cfValidate($p, [gr_odrWrkPathStpDetail])) {
      return;
    }

    // 필수 입력 확인
    for (var idx = 0; idx < ds_odrWrkPathStepDetail.getRowCount(); idx++) {
      // 작업장 확인 - 작업구분이 운송이 아닌 경우 작업장은 필수 입력 항목입니다.
      if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim()) && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "dptWrkPlCd").trim())) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업장"]);
        ds_odrWrkPathStepDetail.setRowPosition(idx);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "dptWrkPlNm", true);
        return false;
      }

      // 매출입항목이 무매출이 아니경우에는 작업점소, 매출귀속부서는 필수 입력항목입니다.
      if (ds_odrWrkPathStepDetail.getCellData(idx, "selpchItemCd") != scwin.SELPCH_ITEM_CD_NOSELL) {
        // 작업점소 확인
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkLobranCd").trim())) {
          $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업점소"]);
          ds_odrWrkPathStepDetail.setRowPosition(idx);
          gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkLobranNm", true);
          return false;
        }

        //매출귀속부서 확인
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.NameValue(idx, "internalSellLodeptCd").trim())) {
          $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["매출귀속부서"]);
          ds_odrWrkPathStepDetail.setRowPosition(idx);
          gr_odrWrkPathStpDetail.setFocusedCell(idx, "internalSellLodeptNm", true);
          return false;
        }
      }
    }
  }
};

//as-is ds_odrCommWrkPath event=OnRowsetChanged()> 
scwin.ds_odrCommWrkPath_onaftercolumnfilterchange = function () {
  if (ds_odrCommWrkPath.getRowCount() > 0) ds_odrCommWrkPath.setRowPosition(0);
};

//as-is gr_odrWrkPathStpDetail event=OnCloseUp(row,colid)>
scwin.gr_odrWrkPathStpDetail_oneditend = async function (row, columnIndex, value) {
  // 작업장구분이 변경될때 작업단계로 Filter 처리	        
  let colid = gr_odrWrkPathStpDetail.getColumnID(columnIndex);
  let oldValue = ds_odrWrkPathStepDetail.getCellData(row, colid);
  switch (colid) {
    case "wrkPlClsCd":
      // 작업장 구분    
      scwin.fn_ds_LkStepNo(row, colid, value);
      //scwin.f_openCommPopUpGrid(1, row, "", ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranNm"), 'F', 'F');
      if (ds_odrWrkPathStepDetail.getCellData(row, colid) != value) {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
      }

      // 추가된 작업단계의 작업장 구분이 운송인 경우 매출입항목을 운송료로, 운송이 아닌경우 무매출로 설정한다.
      if (ds_odrWrkPathStepDetail.getCellData(row, "odrWrkStpSeq") % 10 != 0) {
        // 작업단계순번을 10으로 나눈 나머지가 0이 아닌 경우 - 추가된 작업단계
        if ($c.gus.cfIsNull($p, value)) {
          // 운송 단계인 경우
          ds_odrWrkPathStepDetail.setCellData(row, "selpchItemCd", scwin.SELL_ITEM_CD_TRANS_RATE);
          ds_odrWrkPathStepDetail.setCellData(row, "selpchItemNm", "운송료");
        } else {
          // 운송 단계가 아닌 경우
          ds_odrWrkPathStepDetail.setCellData(row, "selpchItemCd", scwin.SELPCH_ITEM_CD_NOSELL);
          ds_odrWrkPathStepDetail.setCellData(row, "selpchItemNm", "무매출");
        }
      }
      break;
    case "wrkStpCd":
      // 작업단계 
      scwin.fn_ds_LkStepNo(row, colid, value);
      break;
    case "wrkLobranNm":
      if (!$c.gus.cfIsNull($p, value) && value != oldValue) {
        await scwin.f_openCommPopUpGrid(1, row, '', value, 'T', 'T');
      } else if ($c.gus.cfIsNull($p, value)) {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
      }
      break;
    case "dptWrkPlNm":
      if (!$c.gus.cfIsNull($p, value) && value != oldValue) {
        await scwin.f_openCommPopUpGrid(2, row, '', value, 'T', 'T');
      } else if ($c.gus.cfIsNull($p, value)) {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNmOrg", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", "");
      }
      // 작업 단계 정보 재설정
      await scwin.f_setWorkStepInfoRefresh();
      break;
    case "internalSellLodeptNm":
      if (!$c.gus.cfIsNull($p, value) && value != oldValue) {
        await scwin.f_openCommPopUpGrid(3, row, '', value, 'T', 'T');
      } else if ($c.gus.cfIsNull($p, value)) {
        ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptCd", "");
      }
      break;
    case "vsslCdPortcnt":
      if (!$c.gus.cfIsNull($p, value) && value != oldValue) {
        await scwin.f_openCommPopUpGrid(4, row, '', value, 'T', 'T');
      } else if ($c.gus.cfIsNull($p, value)) {
        ds_odrWrkPathStepDetail.setCellData(row, "vsslCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "vsslNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "portcnt", "");
      }
      break;
    default:
      break;
  }
};
scwin.fn_ds_LkStepNo = function (rowIndex, columnId, value) {
  if (columnId == "wrkPlClsCd") {
    //empty 값 셋팅위한 최상위 row 추가. 
    if (ds_LkStepNo.getCellData(0, "initYN") == "") {
      ds_LkStepNo.insertRow(0);
      ds_LkStepNo.setCellData(0, "initYN", "Y");
      ds_LkStepNo.reform();
    }
  } else if (columnId == "wrkStpCd") {
    //empty 값 셋팅위한 최상위 row 추가. 
    if (value == "" && ds_LkStepNo.getCellData(0, "initYN") == "") {
      ds_LkStepNo.insertRow(0);
      ds_LkStepNo.setCellData(0, "initYN", "Y");
      ds_LkStepNo.reform();
    }
  }
};
scwin.gr_odrWrkPathStpDetail_oncellclick = function (rowIndex, columnIndex, columnId) {
  // if(columnId == "wrkStpCd") { //작업단계
  //     var val = ds_odrWrkPathStepDetail.getCellData(rowIndex, "wrkPlClsCd");        
  //     let arrMatch = ds_wrkPlClsCd.getMatchedJSON("cd", val); 
  //     let sKey = null;
  //     if (arrMatch.length == 0){
  //         sKey = "02";
  //     } else {
  //         sKey = arrMatch[0].fltrCd1;
  //     }

  //     let sTopKey = null;
  //     if (sKey == "02"){
  //         sTopKey = "01";
  //     } else if (sKey != "02" && sKey != ""){
  //         sTopKey = "03";
  //     } else {
  //         sTopKey = "02";
  //     }

  //     ds_linkedLkStepNo.removeColumnFilterAll();
  //     ds_linkedLkStepNo.setColumnFilter( {type : "row", colIndex : "topWrkStpCd" , key : sTopKey, condition : "and"} );
  // }

  ds_odrWrkPathStepDetail.setRowNumData(rowIndex);
};
scwin.ds_odrCommWrkPath_ondataload = function () {
  if (ds_order.getTotalRow() > 0 && ds_odrCommWrkPath.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.ds_odrWrkPathStepDetail_ondataload = function () {
  if (ds_odrWrkPathStepDetail.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ds_odrWrkPathStepDetail.sort("odrNo", 0);
};
scwin.gr_odrWrkPathStpDetail_onbeforeedit = function (rowIndex, columnIndex, value) {
  let colId = gr_odrWrkPathStpDetail.getColumnID(columnIndex);
  //작업단계 item 필터링 처리.
  if (colId == "wrkStpCd") {
    scwin.gr_odrWrkPathStpDetail_wrkStpCd_setFilter(rowIndex);
  }
};
scwin.gr_odrWrkPathStpDetail_wrkStpCd_setFilter = function (rowIndex) {
  if (ds_odrWrkPathStepDetail.getRowCount() > 0) {
    var fn_colFilter = function (cellData, tmpParam, rowIdx) {
      var v_wrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(rowIndex, "wrkPlClsCd").trim();
      var v_fltrCd1 = "";

      // 작업장구분 코드로 FLTR_CD_1 값 조회 
      if (v_wrkPlClsCd != "") {
        for (i = 0; i < ds_wrkPlClsCd.getRowCount(); i++) {
          if (v_wrkPlClsCd == ds_wrkPlClsCd.getCellData(i, "cd")) {
            v_fltrCd1 = ds_wrkPlClsCd.getCellData(i, "fltrCd1");
            break;
          }
        }
      }
      if (v_fltrCd1 == "02") {
        // 하역 (작업단계코드 : 01)
        if (cellData == "01") {
          return true;
        } else {
          return false;
        }
      } else if (v_fltrCd1 != "02" && v_fltrCd1 != "") {
        // 본관,포장 (작업단계코드 : 03,04)
        if (cellData == "03") {
          return true;
        } else {
          return false;
        }
      } else {
        // 운송 (작업단계코드 : 02)
        if (cellData == "02") {
          return true;
        } else {
          return false;
        }
      }
      // return이 true인 경우 적용하고 false인 경우 넘김
    };
    ds_LkStepNo.setColumnFilter({
      type: 'func',
      colIndex: 'topWrkStpCd',
      key: fn_colFilter,
      condition: 'and'
    });
    ds_LkStepNo.reform();
  }
};
scwin.gr_odrWrkPathStpDetail_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_odrWrkPathStpDetail.getColumnID(columnIndex);
  if (columnId == "wrkPlClsCd" || columnId == "wrkStpCd") {
    //작업단계 item 필터링 해제 및 empty 값 셋팅된 row 삭제 처리.
    if (ds_LkStepNo.getRowCount() < ds_LkStepNo.getAllJSON().length) {
      ds_LkStepNo.clearFilter();

      //작업단계 item 보여주기전 empty 값 셋팅된 row 삭제처리.
      for (var i = 0; i < ds_LkStepNo.getRowCount(); i++) {
        if (ds_LkStepNo.getCellData(i, "initYN") == "Y") {
          ds_LkStepNo.removeRow(i);
        }
      }
      ds_LkStepNo.reform();
    }
  }
};
scwin.gr_odrWrkPathStpDetail_onviewchange = function (info) {
  let rowIndex = info.rowIndex;
  let columnId = gr_odrWrkPathStpDetail.getColumnID(info.colIndex);
  if (columnId == "wrkPlClsCd") {
    if (ds_odrWrkPathStepDetail.getCellData(rowIndex, "wrkStpCd") != "") {
      ds_odrWrkPathStepDetail.setCellData(rowIndex, "wrkStpCd", "");
    }
  }
};
scwin.ed_odrNo_onkeyup = function (e) {
  $c.gus.cfToUpper($p, this);
};
scwin.gr_odrWrkPathStpDetail_onheaderclick = function (headerId) {
  return false;
};
scwin.wrkPlClsCd_customFormatter = function (value, formattedData, rowIndex, colIndex) {
  if (rowIndex === 0) return formattedData;
  var prev = gr_odrWrkPathStpDetail.getCellData(rowIndex - 1, colIndex);
  if (prev === value) {
    return ""; // 같은 값이면 안 보이게
  }
  return formattedData;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'content',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 200px;',ref:'data:ds_orderSearch.odrNo',mandatory:'true',allowChar:'a-zA-Z0-9',maxByteLength:'13',objType:'data',title:'오더번호',fixLength:'13','ev:onkeydown':'scwin.ed_odrNo_onkeydown','ev:onkeyup':'scwin.ed_odrNo_onkeyup'}},{T:1,N:'xf:input',A:{class:'','ev:onkeydown':'scwin.ed_odrNo_onkeydown',fixLength:'13',id:'hid_chkReterieve',objType:'data',placeholder:'',ref:'',style:'width: 200px;visibility: hidden;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btnClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:'',ref:'data:ds_order.ctrtClntNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:'',ref:'data:ds_order.ctrtNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'td_realMchtClntNm',label:'실화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_realMchtclntNm',label:'text',style:'',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:'',ref:'data:ds_order.odrKndNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업경로 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'section ',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_ResultsExcel1',gridID:'gr_odrCommWrkPath',id:'aa'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_odrCommWrkPath',fixedColumn:'0',id:'gr_odrCommWrkPath',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'false','ev:oncellclick':'scwin.gr_odrCommWrkPath_oncellclick',rowStatusVisible:'true','ev:oncellindexchange':'scwin.gr_odrCommWrkPath_oncellindexchange','ev:onrowindexchange':'scwin.gr_odrCommWrkPath_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'odrNo',inputType:'text',removeBorderStyle:'false',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'commSeq',inputType:'text',removeBorderStyle:'false',value:'오더품명순번',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'commCd',inputType:'text',removeBorderStyle:'false',value:'품명코드',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'text',removeBorderStyle:'false',value:'품명',width:'220'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'qty',inputType:'text',value:'수량',width:'80'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'grossWt',inputType:'text',style:'',value:'중량(KG)',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'cbm',inputType:'text',value:'CBM',width:'80'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'dptWrkPlClsCd',inputType:'text',value:'출발작업장구분코드',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'dptWrkPlCd',inputType:'text',value:'출발작업장코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'출발작업장',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'arvWrkPlClsCd',inputType:'text',style:'',value:'도착작업장구분코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'arvWrkPlCd',inputType:'text',style:'',value:'도착작업장코드',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'arvWrkPlNm',inputType:'text',value:'도착작업장',width:'130'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'odrWrkPathSeq',inputType:'text',value:'오더작업경로순번',width:'150'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'ctrtNo',inputType:'text',value:'계약번호',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',value:'작업경로',width:'210'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkStDt',inputType:'text',value:'작업시작일자',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStHh',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkEndDt',inputType:'text',value:'작업종료일자',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkEndHh',inputType:'text',value:'작업종료시간',width:'120'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'sellYn',inputType:'text',value:'매출여부',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'wrkRsltsNo',inputType:'text',value:'실적번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkRsltsYn',inputType:'text',style:'',value:'실적여부',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',maxByteLength:'13',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true',maxByteLength:'3',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',maxByteLength:'5',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'text',removeBorderStyle:'false',width:'220',readOnly:'true',dataType:'text',textAlign:'left',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'80',readOnly:'true',dataType:'number',displayFormat:'#,###',textAlign:'right',maxByteLength:'5',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'80',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlClsCd',inputType:'text',width:'150',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlClsCd',inputType:'text',style:'',value:'',width:'150',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'120',readOnly:'true',textAlign:'left',dataType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',width:'150',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'ctrtWrkPathSeq',inputType:'select',width:'210',textAlign:'left',dataType:'text',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'120',readOnly:'true',hidden:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',readOnly:'true',hidden:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',width:'120',readOnly:'true',hidden:'true',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',width:'120',readOnly:'true',hidden:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellYn',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkRsltsNo',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkRsltsYn',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormatter:'scwin.fn_fmtWrkRsltsYn'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_gr_odrCommWrkPathTot',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단계',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_ResultsExcel2',gridID:'gr_odrWrkPathStpDetail'}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'ds_odrWrkPathStepDetail',fixedColumn:'0',id:'gr_odrWrkPathStpDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'false',sortable:'false',preventMultisort:'true',showSortableImage:'false',showSortableUseFilter:'false',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_odrWrkPathStpDetail_ontextimageclick','ev:oneditend':'scwin.gr_odrWrkPathStpDetail_oneditend',keyMoveEditMode:'true','ev:onbeforeedit':'scwin.gr_odrWrkPathStpDetail_onbeforeedit','ev:oncellclick':'scwin.gr_odrWrkPathStpDetail_oncellclick','ev:onafteredit':'scwin.gr_odrWrkPathStpDetail_onafteredit','ev:onviewchange':'scwin.gr_odrWrkPathStpDetail_onviewchange',columnMove:'false',sortHeaderDiv:'false','ev:onheaderclick':'scwin.gr_odrWrkPathStpDetail_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',value:'오더번호',width:'100',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',value:'품명순번',width:'100',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrWrkPathSeq',inputType:'text',removeBorderStyle:'false',value:'작업경로순번',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',removeBorderStyle:'false',value:'계약작업경로순번',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'odrWrkPathNm',inputType:'text',value:'작업경로',width:'100',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'odrWrkStpSeq',inputType:'text',style:'',value:'작업단계순번',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkPlClsCd',inputType:'text',value:'작업장구분',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red ',displayMode:'label',hidden:'false',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'bizDomCd',inputType:'text',value:'사업영역코드',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'selpchItemCd',inputType:'text',value:'매출입항목코드',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'selpchItemNm',inputType:'text',value:'매출입항목',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'dptWrkPlCd',inputType:'text',value:'출발작업장코드',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'dptWrkPlNm',inputType:'text',value:'작업장',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',hidden:'true',id:'dptWrkPlNmOrg',inputType:'text',value:'출발작업장',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'arvWrkPlCd',inputType:'text',value:'도착작업장코드',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'arvWrkPlNm',inputType:'text',value:'도착작업장',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'wrkLobranCd',inputType:'text',value:'작업물류점소코드',width:'150',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'wrkLobranNm',inputType:'text',value:'작업점소',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranNmOrg',inputType:'text',style:'',value:'작업물류점소',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',style:'',value:'작업시작일자',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'작업시작시간',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',style:'',value:'작업종료일자',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'작업종료시간',width:'120',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalSellLodeptCd',inputType:'text',style:'',value:'매출귀속부서코드',width:'150',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'internalSellLodeptNm',inputType:'text',style:'',value:'매출귀속부서',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'선박코드',width:'100',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',style:'',value:'선박명',width:'100',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',style:'',value:'항차',width:'100',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCdPortcnt',inputType:'text',style:'',value:'선명항차',width:'100',hidden:'true',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrWrkPathSeq',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',removeBorderStyle:'false',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathNm',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkStpSeq',inputType:'text',style:'',value:'',width:'120',readOnly:'true',maxByteLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'wrkPlClsCd',inputType:'select',width:'120',allOption:'',chooseOption:'',ref:'',textAlign:'left',dataType:'text',class:'',emptyValue:'true',displayFormatter:'scwin.wrkPlClsCd_displayFormatter',customFormatter:'scwin.wrkPlClsCd_customFormatter'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkPlClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'wrkStpCd',inputType:'select',width:'140',textAlign:'left',dataType:'text',allOption:'',chooseOption:'',ref:'',class:'req',emptyValue:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LkStepNo'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',width:'120',colMerge:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'150',readOnly:'true',textAlign:'left',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'textImage',width:'150',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',dataType:'text',textAlign:'left',maxByteLength:'50',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNmOrg',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranCd',inputType:'text',width:'150',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranNm',inputType:'textImage',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',dataType:'text',textAlign:'left',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLobranNmOrg',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hidden:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalSellLodeptCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalSellLodeptNm',inputType:'textImage',style:'',value:'',width:'150',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',textAlign:'left',dataType:'text',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',style:'',value:'',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCdPortcnt',inputType:'textImage',style:'',value:'',width:'70',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_gr_odrWrkPathStpDetailTot',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btnInsertRow',label:'삭제',style:'',type:'button','ev:onclick':'scwin.f_InsertRow',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btnDeleteRow',label:'삭제',style:'',type:'button','ev:onclick':'scwin.f_DeleteRow',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btnUndoMark',label:'삭제',style:'',type:'button','ev:onclick':'scwin.f_UndoRow',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:button',A:{class:'btn link',id:'btnConfirmOrder',label:'오더확정',style:'',userAuth:'U','ev:onclick':'scwin.f_confirmOrder'}},{T:1,N:'w2:button',A:{class:'btn link',id:'btnDcSc',label:'할인할증',style:'',userAuth:'U','ev:onclick':'scwin.f_discountSurcharge'}},{T:1,N:'w2:button',A:{class:'btn link',id:'btnOrderWrkStepDetail',label:'작업일시배분 조회 및 수정',style:'',userAuth:'R','ev:onclick':'scwin.f_orderWrkStepDetail'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'width:%; height:px; ',id:'udc_compopup'}},{T:1,N:'w2:button',A:{class:'btn',id:'btnUpdate',label:'수정',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Update'}},{T:1,N:'w2:button',A:{class:'btn',id:'btnSave',label:'저장',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]}]})