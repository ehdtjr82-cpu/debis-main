/*amd /AI/sd_402_01_71b.xml 141383 ba42586cb2f40f6cfd86a075c7552199ac0e1006d145654eed368b28d9d8b4b9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndCtrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivBukYn',name:'사업부문벌크여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndOdrNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndBlNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'HOUSE_BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndCvsslMgntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tsYn',name:'TS여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condCntrBasisInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condContainerAdditionSelling'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndBkInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_deleteOrderCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'합적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'오더담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'오더담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송회사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortCd',name:'TS항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplCoClsCd',name:'3자물류업체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndYn',name:'SMS전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'오더취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'오더취소시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'오더취소사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'오더삭제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'오더삭제시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOdrNo',name:'상위오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'청구오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'자동오더여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRequestCnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배정담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'조정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'체선일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Size',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'DRY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmrMgntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paletYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclYn',name:'취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputQty',name:'입력수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'Seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SZ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'DRY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'중량조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsInMthdCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsCmpndCgshfYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrInsYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입Seal-No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impOverLength',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impOverHeight',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impOverWidTh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impMgsetYn',name:'MG SET',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCntrWrkKndCd',name:'작업',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTransCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCntrWtCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'X-RAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출Seal-No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDangerCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expTemper',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expOverLength',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expOverHeight',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expOverWidth',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expMgsetYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCntrWrkKndCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expTransCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCntrWtCondCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsChgDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'OFF반납',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term',name:'TERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creatOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trmntOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'legalAccfCargoDdCnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfAccfCargoDdCnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateOutbrYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndoutInspRateOutbrYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzMonOutbrYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'bl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDryYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDryYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrModDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'작업구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'단가',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_realMchtClntNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bookingInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgCommInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgCntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgBlInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commQtyCalByCommSizTyp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputQty',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisBlInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outCommInfoByBlNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outCommInfoByCvsslMgntNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outCntrInfoByCvsslMgntNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveBLAndCntrForCvssl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerAdditionSelling'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderallocarpicnm'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo',action:'/ds.sd.odrmgnt.odrreg.RetrieveContractNumberCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrtNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCtrtNo_submitdone','ev:submiterror':'scwin.sbm_retrieveCtrtNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrtNo2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCtrtNo2_submitdone','ev:submiterror':'scwin.sbm_retrieveCtrtNo2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveClntNo',action:'/ds.sd.odrmgnt.odrreg.RetrieveContractBasisCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_realMchtClntNo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_realMchtClntNo","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieveClntNo_submitdone','ev:submiterror':'scwin.sbm_retrieveClntNo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBasisInfo',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condCntrBasisInfo","key":"IN_DS1"},{"id":"ds_cntrBasisInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrBasisInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCntrBasisInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveCntrBasisInfo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBLContainer',action:'/ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingContainerListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndBlNo","key":"IN_DS1"},{"id":"ds_outCommInfoByBlNo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_outCommInfoByBlNo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieveBLContainer_submitdone','ev:submiterror':'scwin.sbm_retrieveBLContainer_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveManifestBLContainerList',action:'/ds.sd.odrmgnt.odrreg.RetrieveManifestBillOfLadingContainerListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndCvsslMgntNo","key":"IN_DS1"},{"id":"ds_outCommInfoByCvsslMgntNo","key":"OUT_DS1"},{"id":"ds_outCntrInfoByCvsslMgntNo","key":"OUT_DS2"},{"id":"ds_blInfo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_outCommInfoByCvsslMgntNo","key":"OUT_DS1"},{"id":"ds_outCntrInfoByCvsslMgntNo","key":"OUT_DS2"},{"id":"ds_blInfo","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieveManifestBLContainerList_submitdone','ev:submiterror':'scwin.sbm_retrieveManifestBLContainerList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBLAndCntrForCvssl',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerStandardBillOfLadingAndContainerListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_retrieveBLAndCntrForCvssl","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveBLAndCntrForCvssl","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveBLAndCntrForCvssl_submitdone','ev:submiterror':'scwin.sbm_retrieveBLAndCntrForCvssl_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerOrderContractCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_blInfo","key":"OUT_DS2"},{"id":"ds_commInfo","key":"OUT_DS3"},{"id":"ds_cntrInfo","key":"OUT_DS4"},{"id":"ds_ctrtNo","key":"OUT_DS5"},{"id":"ds_reqClntNo","key":"OUT_DS6"},{"id":"ds_bilgClntNo","key":"OUT_DS7"},{"id":"ds_realMchtClntNo","key":"OUT_DS8"},{"id":"ds_sellInfo","key":"OUT_DS9"},{"id":"ds_bookingInfo","key":"OUT_DS10"},{"id":"ds_orderallocarpicnm","key":"OUT_DS11"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_blInfo","key":"OUT_DS2"},{"id":"ds_commInfo","key":"OUT_DS3"},{"id":"ds_cntrInfo","key":"OUT_DS4"},{"id":"ds_ctrtNo","key":"OUT_DS5"},{"id":"ds_reqClntNo","key":"OUT_DS6"},{"id":"ds_bilgClntNo","key":"OUT_DS7"},{"id":"ds_realMchtClntNo","key":"OUT_DS8"},{"id":"ds_sellInfo","key":"OUT_DS9"},{"id":"ds_bookingInfo","key":"OUT_DS10"},{"id":"ds_orderallocarpicnm","key":"OUT_DS11"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.sd.odrmgnt.odrreg.RegistGeneralContainerOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"},{"id":"ds_orgCommInfo","key":"IN_DS2"},{"id":"ds_orgCntrInfo","key":"IN_DS3"},{"id":"ds_orgBlInfo","key":"IN_DS4"},{"id":"ds_bookingInfo","key":"IN_DS5"},{"id":"ds_commQtyCalByCommSizTyp","key":"IN_DS6"},{"id":"dma_cndOdrNo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_cndOdrNo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'scwin.sbm_regist_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_regist2',action:'/ds.sd.odrmgnt.odrreg.RegistOrderAllocarPicnmCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_orderallocarpicnm","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_regist2_submitdone','ev:submiterror':'scwin.sbm_regist2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.sd.odrmgnt.odrreg.UpdateGeneralContainerOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"},{"id":"ds_commInfo","key":"IN_DS2"},{"id":"ds_cntrInfo","key":"IN_DS3"},{"id":"ds_blInfo","key":"IN_DS4"},{"id":"ds_bookingInfo","key":"IN_DS5"},{"id":"ds_commQtyCalByCommSizTyp","key":"IN_DS6"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'scwin.sbm_update_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteOrderCond',action:'/ds.sd.odrmgnt.odrreg.DeleteContainerOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_deleteOrderCond","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deleteOrderCond_submitdone','ev:submiterror':'scwin.sbm_deleteOrderCond_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContainerAdditionSelling',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerAdditionSellingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condContainerAdditionSelling","key":"IN_DS1"},{"id":"ds_containerAdditionSelling","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_containerAdditionSelling","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveContainerAdditionSelling_submitdone','ev:submiterror':'scwin.sbm_retrieveContainerAdditionSelling_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_confirmOrder',action:'/ds.sd.odrmgnt.odrreg.ConfirmOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_confirmOrder_submitdone','ev:submiterror':'scwin.sbm_confirmOrder_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.odrKndCd = "";
scwin.impExpClsCd = "";
scwin.statusFlag = "";
scwin.chkInputQtyYn = "N";
scwin.retrieveYn = "N";
scwin.btnPos = "";
scwin.orgCommVal = "";
scwin.bookingNoYn = "N";
scwin.bkCommInfoRows = 0;
scwin.selfClsCd = "";
scwin.assgnWhouseCd = "";
scwin.assgnWhouseNm = "";
scwin.orgLineCd = "";
scwin.orgBookingNo = "";
scwin.mgntTrgtClntYn = 0;
scwin.excelUploadYn = 0;
scwin.odrCtrlClsCd = "";
scwin.cntrLoadGubun = "";
scwin.MSG_CM_CRM_199 = "컨테이너 마스터를 CHECK 하지 않겠습니다까?";
scwin.hd_chkMode = "";
scwin.hd_alloccarPicId1 = "";
scwin.hd_alloccarPicId2 = "";
scwin.hd_alloccarPicId3 = "";
scwin.hd_alloccarPicId4 = "";
scwin.hd_alloccarPicId5 = "";
scwin.hd_odrNo = "";
scwin.hd_chkReterieve = "";
scwin.hd_destPortNm = "";
scwin.txt_alloccarPicNm1 = "";
scwin.txt_alloccarPicNm2 = "";
scwin.txt_alloccarPicNm3 = "";
scwin.txt_alloccarPicNm4 = "";
scwin.txt_alloccarPicNm5 = "";
scwin.txt_odrPicNm = "";
scwin.txt_odrPicTelNo = "";
scwin.txt_onPicTelNo = "";
scwin.txt_offPicTelNo = "";
scwin.txt_transCoNm = "";
scwin.txt_transCoTelNo = "";
scwin.txt_alloccarPicNm = "";
scwin.txt_tsVsslNm = "";
scwin.vCurDate = "";
scwin.userNm = "";
scwin.userMpNo = "";
scwin.lobranCd = "";
scwin.SELF_CLS_CD_MCOM_TRANS = "LI";
scwin.YN_YES = "1";
scwin.YN_NO = "0";
scwin.IMP_CD = "I";
scwin.EXP_CD = "E";
scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";
scwin.ODR_KND_CD_EXP_GNRL_CNTR_ODR = "C3";
scwin.ODR_KND_CD_IMP_CVSSL_CNTR_ODR = "C1";
scwin.ODR_KND_CD_EXP_CVSSL_CNTR_ODR = "CW";
scwin.ODR_KND_CD_IMP_STV_CNTR_ODR = "C4";
scwin.ODR_KND_CD_EXP_STV_CNTR_ODR = "CX";
scwin.ODR_KND_CD_TS_ODR = "CS";
scwin.ODR_KND_CD_CY_IMP_TS_ODR = "CT";
scwin.ODR_KND_CD_ON_HIRE_ODR = "C5";
scwin.ODR_KND_CD_OFF_HIRE_ODR = "C6";
scwin.ODR_KND_CD_EMPTY_POSITION_ODR = "C7";
scwin.ODR_KND_CD_PORT_CHANGE_ODR = "C8";
scwin.ODR_KND_CD_EXAMINE_ODR = "C9";
scwin.SELF_CLS_CD_SELF_SALES = "LS";
scwin.CNTR_TYP_CD_RF = "RF";
scwin.CNTR_TYP_CD_RH = "RH";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.userNm = $c.ses.getUserNm();
  scwin.userMpNo = $c.ses.getUserMpNo();
  scwin.lobranCd = $c.ses.getLobranCd();
  scwin.params = $c.data.getParameter($p);
  if (scwin.params) {
    scwin.hd_odrNo = scwin.params.odrNo || "";
    scwin.hd_chkReterieve = scwin.params.type || "";
  }
  scwin.f_OnLoad();
};
scwin.f_OnLoad = function () {
  scwin.f_clearDataSet();
  scwin.odrKndCd = "C2";
  scwin.impExpClsCd = "I";
  scwin.f_setDefaultValue();
  scwin.hd_chkMode = "create";
  scwin.statusFlag = "C";
  scwin.mgntTrgtClntYn = 0;
  scwin.excelUploadYn = 0;
  scwin.hd_chkReterieve = "";
  scwin.hd_odrNo = "";
  ed_odrNo.setValue("");
  scwin.bkCommInfoRows = 0;
  scwin.bookingNoYn = "N";
  scwin.assgnWhouseCd = "";
  scwin.assgnWhouseNm = "";
  scwin.f_setSellAndBilgDept("A");
};
scwin.f_clearDataSet = function () {
  ds_odrInfo.removeAll();
  ds_odrInfo.insertRow();
  ds_commInfo.removeAll();
  ds_cntrInfo.removeAll();
  ds_blInfo.removeAll();
  ds_bookingInfo.removeAll();
  ds_sellInfo.removeAll();
  ds_orgCommInfo.removeAll();
  ds_orgCntrInfo.removeAll();
  ds_orgBlInfo.removeAll();
  ds_commQtyCalByCommSizTyp.removeAll();
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  ds_realMchtClntNo.removeAll();
  ds_ctrtNo.removeAll();
  ds_orderallocarpicnm.removeAll();
};
scwin.f_setDefaultValue = function () {
  scwin.txt_odrPicNm = scwin.userNm || "";
  scwin.txt_odrPicTelNo = (scwin.userMpNo || "").replace(/\s/g, "");
  ds_odrInfo.setCellData(0, "sellYn", 1);
  ds_odrInfo.setCellData(0, "cntrDsgYn", 1);
  ds_odrInfo.setCellData(0, "selfClsCd", scwin.SELF_CLS_CD_MCOM_TRANS);
  ds_odrInfo.setCellData(0, "wrkPatternCd", "00");
  ds_odrInfo.setCellData(0, "regBranCd", scwin.lobranCd || "");
  ds_odrInfo.setCellData(0, "transCargoClsCd", "C");
  ds_odrInfo.setCellData(0, "impExpDomesticClsCd", scwin.impExpClsCd);
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    ds_odrInfo.setCellData(0, "chClsCd", "0");
    ds_odrInfo.setCellData(0, "transCondCd", "2");
    ds_odrInfo.setCellData(0, "cntrWtCondCd", "H");
  }
};
scwin.f_set = function (gubun1, gubun2) {
  switch (gubun1) {
    case "INIT":
      if (gubun2 == "INIT") {
        scwin.f_clearDataSet();
        scwin.statusFlag = "C";
        scwin.mgntTrgtClntYn = 0;
        scwin.excelUploadYn = 0;
      } else if (gubun2 == "CREATE") {
        scwin.f_clearDataSet();
        scwin.mgntTrgtClntYn = 0;
        scwin.excelUploadYn = 0;
        scwin.statusFlag = "C";
        scwin.hd_chkReterieve = "";
        scwin.hd_odrNo = "";
        ed_odrNo.setValue("");
      }
      scwin.f_setSellAndBilgDept("A");
      scwin.bkCommInfoRows = 0;
      scwin.bookingNoYn = "N";
      scwin.assgnWhouseCd = "";
      scwin.assgnWhouseNm = "";
      scwin.f_setDefaultValue();
      scwin.hd_chkMode = "create";
      break;
    case "RETRIEVE":
      let odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn");
      let odrWrkPathCnt = ds_odrInfo.getCellData(0, "odrWrkPathCnt");
      let odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn");
      let odrCompleteYn = ds_odrInfo.getCellData(0, "odrCompleteYn");
      let autoOdrYn = $c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "autoOdrYn")) ? 0 : ds_odrInfo.getCellData(0, "autoOdrYn");
      scwin.excelUploadYn = 0;
      break;
    case "UPDATE":
      scwin.statusFlag = "U";
      scwin.excelUploadYn = 0;
      scwin.hd_chkMode = "";
      break;
    case "COPY":
      scwin.statusFlag = "C";
      scwin.mgntTrgtClntYn = 0;
      scwin.bkCommInfoRows = 0;
      scwin.bookingNoYn = "N";
      scwin.assgnWhouseCd = "";
      scwin.assgnWhouseNm = "";
      scwin.hd_chkMode = "create";
      scwin.excelUploadYn = 0;
      break;
  }
};
scwin.f_Retrieve = async function () {
  scwin.retrieveYn = "Y";
  scwin.f_clearDataSet();
  scwin.mgntTrgtClntYn = 0;
  dma_cndOdrNo.set("odrNo", ed_odrNo.getValue().trim());
  await $c.sbm.execute($p, sbm_retrieve);
  scwin.hd_chkMode = "";
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_save = async function () {
  let k = 0;
  ds_orderallocarpicnm.removeAll();
  if (scwin.txt_alloccarPicNm1 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm1)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId1);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm1);
  }
  if (scwin.txt_alloccarPicNm2 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm2)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId2);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm2);
  }
  if (scwin.txt_alloccarPicNm3 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm3)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId3);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm3);
  }
  if (scwin.txt_alloccarPicNm4 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm4)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId4);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm4);
  }
  if (scwin.txt_alloccarPicNm5 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm5)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId5);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm5);
  }
  if (scwin.statusFlag == "U") {
    if (ds_odrInfo.isUpdated() || ds_commInfo.isUpdated() || ds_cntrInfo.isUpdated() || ds_blInfo.isUpdated() || ds_orderallocarpicnm.isUpdated() || scwin.bookingNoYn == "Y") {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        scwin.f_setValueBeforeSave();
        await $c.sbm.execute($p, sbm_update);
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]);
    }
  } else if (scwin.statusFlag == "C") {
    if (ds_odrInfo.isUpdated()) {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        scwin.f_setValueBeforeSave();
        scwin.f_setOrgDataSetBeforeSave();
        await $c.sbm.execute($p, sbm_regist);
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]);
    }
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};
scwin.f_delete = async function () {
  let chk = await $c.win.confirm($p, "오더번호 : " + ds_odrInfo.getCellData(0, "odrNo").trim() + "을(를) 삭제하시겠습니까?");
  if (chk) {
    dma_deleteOrderCond.set("odrNo", ds_odrInfo.getCellData(0, "odrNo").trim());
    dma_deleteOrderCond.set("odrKndCd", scwin.odrKndCd);
    dma_deleteOrderCond.set("impExpDomesticClsCd", scwin.impExpClsCd);
    dma_deleteOrderCond.set("selfClsCd", scwin.selfClsCd);
    await $c.sbm.execute($p, sbm_deleteOrderCond);
  }
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_delete();
};
scwin.f_update = function () {
  scwin.f_set("UPDATE");
};
scwin.btn_update_onclick = function (e) {
  scwin.f_update();
};
scwin.f_Create = function (gubun) {
  if (gubun == "C") {
    scwin.f_set("INIT", "CREATE");
  }
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create("C");
};
scwin.f_confirmOrder = async function () {
  let chk = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_010, ["오더확정"]);
  if (chk) {
    if (ds_odrInfo.getRowCount() > 0 && ds_odrInfo.getCellData(0, "odrWrkPathCnt") > 0) {
      ds_odrInfo.setCellData(0, "odrDcsnYn", 1);
      await $c.sbm.execute($p, sbm_confirmOrder);
    }
  }
};
scwin.f_addRow = function (gubun) {
  if (gubun == "A1") {
    ds_commInfo.insertRow();
  } else if (gubun == "A2") {
    ds_cntrInfo.insertRow();
  }
};
scwin.btn_addRow1_onclick = function (e) {
  scwin.f_addRow("A1");
};
scwin.btn_deleteRow1_onclick = function (e) {
  scwin.f_deleteRow("D1");
};
scwin.btn_undoRow1_onclick = function (e) {
  scwin.f_undoRow("U1");
};
scwin.btn_addRow2_onclick = function (e) {
  scwin.f_addRow("A2");
};
scwin.btn_deleteRow2_onclick = function (e) {
  scwin.f_deleteRow("D2");
};
scwin.btn_undoRow2_onclick = function (e) {
  scwin.f_undoRow("U2");
};
scwin.f_deleteRow = function (gubun) {
  let commInfoRows = ds_commInfo.getRowCount();
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  scwin.btnPos = gubun;
  if (gubun == "D1") {
    if (commInfoRows > 0) {
      ds_commInfo.removeRow(ds_commInfo.getRowPosition());
    }
  } else if (gubun == "D2") {
    if (cntrInfoRows > 0) {
      ds_cntrInfo.removeRow(ds_cntrInfo.getRowPosition());
    }
  }
};
scwin.f_undoRow = function (gubun) {
  let commInfoRows = ds_commInfo.getRowCount();
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  scwin.btnPos = gubun;
  if (gubun == "U1") {
    if (commInfoRows > 0) {
      ds_commInfo.undoRow(ds_commInfo.getRowPosition());
    }
  } else if (gubun == "U2") {
    if (cntrInfoRows > 0) {
      ds_cntrInfo.undoRow(ds_cntrInfo.getRowPosition());
    }
  }
};
scwin.f_setValueBeforeSave = function () {
  ds_odrInfo.setCellData(0, "odrKndCd", "C2");
  for (let i = 0; i < ds_commInfo.getRowCount(); i++) {
    ds_commInfo.setCellData(i, "qtyUnitCd", "VAN");
  }
  for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
      ds_cntrInfo.setCellData(i, "impExpClsCd", scwin.impExpClsCd);
    }
  }
};
scwin.f_setOrgDataSetBeforeSave = function () {
  // TODO: copy ds_commInfo -> ds_orgCommInfo, ds_cntrInfo -> ds_orgCntrInfo, ds_blInfo -> ds_orgBlInfo
};
scwin.f_setSellAndBilgDept = function (gubun) {
  if (gubun == "A") {
    let deptCd1 = scwin.lobranCd || "";
    if (deptCd1.length > 2) {
      deptCd1 = deptCd1.substr(0, 2);
    } else {
      return;
    }
    let deptCd2 = "2";
    let deptCd = deptCd1 + deptCd2;
    // TODO: set sell/bilg dept codes
  }
};
scwin.f_chkDate = function (strDate, endDate) {
  let differDays = $c.date.diffDate($p, strDate, endDate);
  return differDays >= 0;
};
scwin.f_chkTime = function (strDate, strTime, endDate, endTime) {
  let differTime = Number(endDate + endTime) - Number(strDate + strTime);
  return differTime >= 0;
};
scwin.f_chkResultsConfirmation = function (gubun) {
  let cntrTotalRows = ds_cntrInfo.getRowCount();
  if (gubun == "CNTR_ROW") {
    if (cntrTotalRows > 0) {
      if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(ds_cntrInfo.getRowPosition(), "wrkRsltsNo"))) return true;
    }
  } else {
    if (cntrTotalRows > 0) {
      for (let i = 0; i < cntrTotalRows; i++) {
        if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) return true;
      }
    }
  }
  return false;
};
scwin.f_calInputQty = function (gubun) {
  let cntrRows = ds_cntrInfo.getRowCount();
  let commRows = ds_commInfo.getRowCount();
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    for (let i = 0; i < commRows; i++) {
      ds_commInfo.setCellData(i, "qty", 0);
      ds_commInfo.setCellData(i, "inputQty", 0);
    }
    for (let i = 0; i < cntrRows; i++) {
      if (ds_cntrInfo.getRowStatus(i) != "D") {
        let sameYn = "N";
        let cntrSizCd = ds_cntrInfo.getCellData(i, "cntrSizCd");
        let cntrTypCd = ds_cntrInfo.getCellData(i, "cntrTypCd");
        let fullEmptyClsCd = ds_cntrInfo.getCellData(i, "fullEmptyClsCd");
        if (ds_commInfo.getRowCount() > 0) {
          let idx = 0;
          for (let j = 0; j < ds_commInfo.getRowCount(); j++) {
            if (cntrSizCd == ds_commInfo.getCellData(j, "cntrSizCd") && cntrTypCd == ds_commInfo.getCellData(j, "cntrTypCd") && fullEmptyClsCd == ds_commInfo.getCellData(j, "fullEmptyClsCd")) {
              sameYn = "Y";
              idx = j;
              break;
            }
          }
          if (sameYn == "N") {
            if (cntrSizCd != "" && cntrTypCd != "" && fullEmptyClsCd != "") {
              ds_commInfo.insertRow();
              let rowPos = ds_commInfo.getRowPosition();
              ds_commInfo.setCellData(rowPos, "cntrSizCd", cntrSizCd);
              ds_commInfo.setCellData(rowPos, "cntrTypCd", cntrTypCd);
              ds_commInfo.setCellData(rowPos, "fullEmptyClsCd", fullEmptyClsCd);
              ds_commInfo.setCellData(rowPos, "qty", 1);
              ds_commInfo.setCellData(rowPos, "inputQty", 1);
            }
          } else {
            ds_commInfo.setCellData(idx, "qty", Number(ds_commInfo.getCellData(idx, "qty")) + 1);
            ds_commInfo.setCellData(idx, "inputQty", Number(ds_commInfo.getCellData(idx, "inputQty")) + 1);
          }
        }
      }
    }
    for (let i = ds_commInfo.getRowCount() - 1; i >= 0; i--) {
      if (ds_commInfo.getCellData(i, "qty") == 0 && ds_commInfo.getCellData(i, "inputQty") == 0) {
        ds_commInfo.removeRow(i);
      }
    }
  }
  return true;
};
scwin.f_discountSurcharge = function () {
  let v_odrNo = ds_odrInfo.getCellData(0, "odrNo");
  if (!$c.gus.cfIsNull($p, v_odrNo)) {
    let param = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    $c.win.openMenu($p, "할인할증", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_25b.xml", "sd_402_01_25b.xml", param);
  }
};
scwin.f_unitySelling = function () {
  let v_odrNo = ds_odrInfo.getCellData(0, "odrNo");
  if ($c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrNo").trim())) {
    return;
  }
  let param = {
    odrNo: v_odrNo,
    type: "retrieve"
  };
  $c.win.openMenu($p, "통합매출입조정", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml", "sd_402_01_26b.xml", param);
};
scwin.f_openPopUpUpdateCntrInfo = async function () {
  let obj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo").trim()
  };
  let rtnValue = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_15b.xml", {
    width: 1000,
    height: 400,
    modal: true,
    data: obj
  });
  if (rtnValue != null) {
    if (rtnValue[0] == "N/A" && rtnValue[1] == "Y") {
      scwin.f_Retrieve();
    }
  }
};
scwin.f_openPopUpUpdateRepWrkInfo = async function () {
  let obj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo").trim(),
    gubun: "retrieve"
  };
  let rtnValue = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_30p.xml", {
    width: 720,
    height: 460,
    modal: true,
    data: obj
  });
  if (rtnValue != null) {
    if (rtnValue[0] == "N/A" && rtnValue[1] == "Y") {
      scwin.f_Retrieve();
    }
  }
};
scwin.f_chgCntrNoInfo = async function () {
  let obj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo").trim(),
    gubun: "retrieve"
  };
  let rtnValue = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_16b.xml", {
    width: 720,
    height: 460,
    modal: true,
    data: obj
  });
  if (rtnValue != null) {
    if (rtnValue[0] == "N/A" && rtnValue[1] == "Y") {
      scwin.f_Retrieve();
    }
  }
};
scwin.f_tmlEdiIfno = async function () {
  let odrNo = ds_odrInfo.getCellData(0, "odrNo");
  if ($c.gus.cfIsNull($p, odrNo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["오더정보"]);
    return false;
  }
  let obj = {
    odrNo: odrNo
  };
  await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_18p.xml", {
    width: 680,
    height: 265,
    modal: true,
    data: obj
  });
};
scwin.f_copyOdr = async function () {
  scwin.f_set("COPY");
};
scwin.f_runExcel = function (gubun) {
  if (gubun == 1) {
    $c.data.downloadGridViewExcel($p, gr_cntrInfo, {
      fileName: "컨테이너오더.xlsx",
      sheetName: "컨테이너오더"
    });
  }
};
scwin.f_retrieveCtrtNo = async function () {
  dma_cndCtrtNo.set("ctrtClntNo", ed_reqClntNo.getValue ? ed_reqClntNo.getValue() : "");
  dma_cndCtrtNo.set("bizDivCntrYn", "1");
  dma_cndCtrtNo.set("bizDivBukYn", "");
  dma_cndCtrtNo.set("odrKndCd", scwin.odrKndCd);
  dma_cndCtrtNo.set("impExpDomesticClsCd", scwin.impExpClsCd);
  await $c.sbm.execute($p, sbm_retrieveCtrtNo);
};
scwin.f_retrieveCtrtNo2 = async function () {
  dma_cndCtrtNo.set("ctrtClntNo", ed_bilgClntNo.getValue());
  dma_cndCtrtNo.set("bizDivCntrYn", "1");
  dma_cndCtrtNo.set("bizDivBukYn", "");
  dma_cndCtrtNo.set("odrKndCd", scwin.odrKndCd);
  dma_cndCtrtNo.set("impExpDomesticClsCd", scwin.impExpClsCd);
  await $c.sbm.execute($p, sbm_retrieveCtrtNo2);
};
scwin.f_retrieveCntrBasisInfo = async function (cntrNo) {
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    dma_condCntrBasisInfo.set("odrKndCd", scwin.odrKndCd);
    dma_condCntrBasisInfo.set("selfClsCd", scwin.selfClsCd);
    dma_condCntrBasisInfo.set("cntrNo", cntrNo);
    dma_condCntrBasisInfo.set("dptWrkPlCd", ds_odrInfo.getCellData(0, "dptWrkPlCd"));
    dma_condCntrBasisInfo.set("arvWrkPlCd", ds_odrInfo.getCellData(0, "arvWrkPlCd"));
    await $c.sbm.execute($p, sbm_retrieveCntrBasisInfo);
  }
};
scwin.f_retrieveContainerAdditionSelling = async function () {
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    let odrNo = ds_odrInfo.getCellData(0, "odrNo").trim();
    if ($c.gus.cfIsNull($p, odrNo)) return;
    dma_condContainerAdditionSelling.set("odrNo", odrNo);
    await $c.sbm.execute($p, sbm_retrieveContainerAdditionSelling);
  }
};
scwin.f_CntrOrderLink = function (odrKndCd) {
  let v_odrNo = ed_odrNo.getValue();
  let param = {
    odrNo: v_odrNo,
    type: "retrieve"
  };
  $c.win.openMenu($p, "작업경로상세등록", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_62b.xml", "sd_402_01_62b.xml", param);
};
scwin.sbm_retrieveCtrtNo_submitdone = async function (e) {
  let ctrtNoRows = ds_ctrtNo.getRowCount();
  if (ctrtNoRows <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["계약번호"]);
  }
};
scwin.sbm_retrieveCtrtNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveCtrtNo2_submitdone = async function (e) {
  let ctrtNoRows = ds_ctrtNo2.getRowCount();
  if (ctrtNoRows > 0) {
    let sameYn = "N";
    for (let j = 0; j < ds_ctrtNo2.getRowCount(); j++) {
      if (1 == ds_ctrtNo2.getCellData(j, "mgntTrgtClntYn")) {
        sameYn = "Y";
        break;
      }
    }
    if (sameYn == "Y") {
      await $c.win.alert($p, "청구처가 관리대상 거래처 입니다.");
      ds_bilgClntNo.removeAll();
      ed_bilgClntNo.setValue("");
    }
  }
};
scwin.sbm_retrieveCtrtNo2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveClntNo_submitdone = async function (e) {
  if (ds_reqClntNo.getRowCount() == 0) {
    ds_reqClntNo.removeAll();
  }
  if (ds_bilgClntNo.getRowCount() == 0) {
    ds_bilgClntNo.removeAll();
  } else {
    scwin.f_retrieveCtrtNo2();
  }
  if (ds_realMchtClntNo.getRowCount() == 0) {
    ds_realMchtClntNo.removeAll();
  }
};
scwin.sbm_retrieveClntNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveCntrBasisInfo_submitdone = async function (e) {
  if (ds_cntrBasisInfo.getRowCount() > 0) {
    scwin.f_calInputQty();
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_046, ["컨테이너번호"]);
  }
};
scwin.sbm_retrieveCntrBasisInfo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveBLContainer_submitdone = function (e) {
  ds_commInfo.removeAll();
  if (ds_outCommInfoByBlNo.getRowCount() > 0) {
    for (let i = 0; i < ds_outCommInfoByBlNo.getRowCount(); i++) {
      ds_commInfo.insertRow();
      ds_commInfo.setCellData(i, "cntrSizCd", ds_outCommInfoByBlNo.getCellData(i, "cntrSizCd"));
      ds_commInfo.setCellData(i, "cntrTypCd", ds_outCommInfoByBlNo.getCellData(i, "cntrTypCd"));
      ds_commInfo.setCellData(i, "fullEmptyClsCd", ds_outCommInfoByBlNo.getCellData(i, "fullEmptyClsCd"));
      ds_commInfo.setCellData(i, "qty", ds_outCommInfoByBlNo.getCellData(i, "qty"));
    }
  }
  scwin.f_calInputQty();
  scwin.retrieveYn = "N";
};
scwin.sbm_retrieveBLContainer_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  scwin.retrieveYn = "N";
};
scwin.sbm_retrieveManifestBLContainerList_submitdone = function (e) {
  scwin.retrieveYn = "N";
};
scwin.sbm_retrieveManifestBLContainerList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  scwin.retrieveYn = "N";
};
scwin.sbm_retrieveBLAndCntrForCvssl_submitdone = function (e) {
  // TODO: f_successRetrieveBLAndCntrForCvssl logic
};
scwin.sbm_retrieveBLAndCntrForCvssl_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.txt_alloccarPicNm1 = "";
  scwin.txt_alloccarPicNm2 = "";
  scwin.txt_alloccarPicNm3 = "";
  scwin.txt_alloccarPicNm4 = "";
  scwin.txt_alloccarPicNm5 = "";
  if (ds_odrInfo.getRowCount() > 0) {
    scwin.f_set("RETRIEVE");
    if (ds_commInfo.getRowCount() > 0) {
      scwin.f_calInputQty("N");
    }
    for (let i = 0; i < ds_orderallocarpicnm.getRowCount(); i++) {
      if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9001) {
        scwin.txt_alloccarPicNm1 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm");
        scwin.hd_alloccarPicId1 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId");
      } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9002) {
        scwin.txt_alloccarPicNm2 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm");
        scwin.hd_alloccarPicId2 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId");
      } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9003) {
        scwin.txt_alloccarPicNm3 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm");
        scwin.hd_alloccarPicId3 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId");
      } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9004) {
        scwin.txt_alloccarPicNm4 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm");
        scwin.hd_alloccarPicId4 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId");
      } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9005) {
        scwin.txt_alloccarPicNm5 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm");
        scwin.hd_alloccarPicId5 = ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId");
      }
    }
    scwin.hd_chkReterieve = "retrieveIn";
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_046, ["오더번호"]);
    scwin.f_set("INIT", "INIT");
  }
  scwin.retrieveYn = "N";
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  scwin.f_set("INIT", "INIT");
  scwin.retrieveYn = "N";
};
scwin.sbm_regist_submitdone = async function (e) {
  scwin.f_retrieveContainerAdditionSelling();
  ed_odrNo.setValue(dma_cndOdrNo.get("odrNo"));
  let k = 0;
  ds_orderallocarpicnm.removeAll();
  if (scwin.txt_alloccarPicNm1 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm1)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId1);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm1);
  }
  if (scwin.txt_alloccarPicNm2 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm2)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId2);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm2);
  }
  if (scwin.txt_alloccarPicNm3 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm3)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId3);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm3);
  }
  if (scwin.txt_alloccarPicNm4 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm4)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId4);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm4);
  }
  if (scwin.txt_alloccarPicNm5 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm5)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId5);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm5);
  }
  await $c.sbm.execute($p, sbm_regist2);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_regist_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_regist2_submitdone = function (e) {};
scwin.sbm_regist2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_update_submitdone = async function (e) {
  scwin.f_retrieveContainerAdditionSelling();
  let k = 0;
  ds_orderallocarpicnm.removeAll();
  if (scwin.txt_alloccarPicNm1 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm1)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId1);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm1);
  }
  if (scwin.txt_alloccarPicNm2 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm2)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId2);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm2);
  }
  if (scwin.txt_alloccarPicNm3 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm3)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId3);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm3);
  }
  if (scwin.txt_alloccarPicNm4 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm4)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId4);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm4);
  }
  if (scwin.txt_alloccarPicNm5 != "" && !$c.gus.cfIsNull($p, scwin.txt_alloccarPicNm5)) {
    k = k + 1;
    ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "odrNo", dma_cndOdrNo.get("odrNo"));
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicId", scwin.hd_alloccarPicId5);
    ds_orderallocarpicnm.setCellData(ds_orderallocarpicnm.getRowPosition(), "shtlAlloccarPicNm", scwin.txt_alloccarPicNm5);
  }
  await $c.sbm.execute($p, sbm_regist2);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_003);
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, "odrNo"));
  scwin.f_Retrieve();
};
scwin.sbm_update_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_deleteOrderCond_submitdone = async function (e) {
  await $c.sbm.execute($p, sbm_regist2);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  scwin.f_set("INIT", "CREATE");
};
scwin.sbm_deleteOrderCond_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveContainerAdditionSelling_submitdone = async function (e) {
  if (ds_containerAdditionSelling.getRowCount() > 0) {
    await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11p.xml", {
      width: 590,
      height: 330,
      modal: true
    });
  }
};
scwin.sbm_retrieveContainerAdditionSelling_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_confirmOrder_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_003);
  scwin.f_Retrieve();
};
scwin.sbm_confirmOrder_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_setOdrWrkStEndDtm = function () {
  for (let i = 0; i < ds_commInfo.getRowCount(); i++) {
    ds_commInfo.setCellData(i, "wrkStDt", ds_odrInfo.getCellData(0, "wrkStDt"));
    ds_commInfo.setCellData(i, "wrkStHh", ds_odrInfo.getCellData(0, "wrkStHh"));
    ds_commInfo.setCellData(i, "wrkEndDt", ds_odrInfo.getCellData(0, "wrkEndDt"));
    ds_commInfo.setCellData(i, "wrkEndHh", ds_odrInfo.getCellData(0, "wrkEndHh"));
  }
  for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
    ds_cntrInfo.setCellData(i, "wrkStDt", ds_odrInfo.getCellData(0, "wrkStDt"));
    ds_cntrInfo.setCellData(i, "wrkStHh", ds_odrInfo.getCellData(0, "wrkStHh"));
    ds_cntrInfo.setCellData(i, "wrkEndDt", ds_odrInfo.getCellData(0, "wrkEndDt"));
    ds_cntrInfo.setCellData(i, "wrkEndHh", ds_odrInfo.getCellData(0, "wrkEndHh"));
  }
};
scwin.f_clearDataByClntNos = function () {
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  ds_realMchtClntNo.removeAll();
};
scwin.f_clearDataByCtrtNo = function () {
  ds_ctrtNo.removeAll();
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  ds_realMchtClntNo.removeAll();
};
scwin.f_clearDataByBlNo = function () {
  scwin.assgnWhouseCd = "";
  scwin.assgnWhouseNm = "";
  ds_outCommInfoByBlNo.removeAll();
  ds_commInfo.removeAll();
  ds_cntrInfo.removeAll();
  ds_blInfo.removeAll();
};
scwin.f_clearDataByCvsslMgntNo = function () {
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    ds_outCommInfoByCvsslMgntNo.removeAll();
    ds_outCntrInfoByCvsslMgntNo.removeAll();
    ds_blInfo.removeAll();
    ds_commInfo.removeAll();
    ds_cntrInfo.removeAll();
  }
};
scwin.f_validateCommAndCntr = async function () {
  let commInfoRows = ds_commInfo.getRowCount();
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  for (let i = 0; i < commInfoRows; i++) {
    if (ds_commInfo.getRowStatus(i) != "D") {
      let sizeTypeFE = ds_commInfo.getCellData(i, "cntrSizCd").trim() + ds_commInfo.getCellData(i, "cntrTypCd").trim() + ds_commInfo.getCellData(i, "fullEmptyClsCd").trim();
      for (let j = 0; j < commInfoRows; j++) {
        if (i != j) {
          if (ds_commInfo.getRowStatus(j) != "D") {
            let tempSizeTypeFE = ds_commInfo.getCellData(j, "cntrSizCd").trim() + ds_commInfo.getCellData(j, "cntrTypCd").trim() + ds_commInfo.getCellData(j, "fullEmptyClsCd").trim();
            if (sizeTypeFE == tempSizeTypeFE) {
              await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["품명목록", j + 1, "Size,Type,F/E"]);
              return false;
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < cntrInfoRows; i++) {
    if (ds_cntrInfo.getRowStatus(i) != "D") {
      let cntrNo = ds_cntrInfo.getCellData(i, "cntrNo").trim();
      if ($c.gus.cfIsNull($p, cntrNo)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_002, ["컨테이너목록", i + 1, "컨테이너번호"]);
        return false;
      }
      for (let j = 0; j < cntrInfoRows; j++) {
        if (i != j) {
          if (ds_cntrInfo.getRowStatus(j) != "D") {
            let tempCntrNo = ds_cntrInfo.getCellData(j, "cntrNo").trim();
            if (!$c.gus.cfIsNull($p, cntrNo)) {
              if (cntrNo == tempCntrNo) {
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["컨테이너목록", j + 1, "컨테이너번호"]);
                return false;
              }
            }
          }
        }
      }
    }
  }
  return true;
};
scwin.f_validate = async function () {
  let commInfoRows = ds_commInfo.getRowCount();
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  if (commInfoRows == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["품명목록"]);
    return false;
  }
  return true;
};
scwin.f_setDs_commQtyCalByCommSizTyp = function () {
  ds_commQtyCalByCommSizTyp.removeAll();
  for (let i = 0; i < ds_commInfo.getRowCount(); i++) {
    if (ds_commInfo.getRowStatus(i) != "D") {
      if (ds_commQtyCalByCommSizTyp.getRowCount() > 0) {
        let sameYn = "N";
        let idx = 0;
        for (let j = 0; j < ds_commQtyCalByCommSizTyp.getRowCount(); j++) {
          if (ds_commQtyCalByCommSizTyp.getCellData(j, "cntrSizCd") == ds_commInfo.getCellData(i, "cntrSizCd") && ds_commQtyCalByCommSizTyp.getCellData(j, "cntrTypCd") == ds_commInfo.getCellData(i, "cntrTypCd")) {
            sameYn = "Y";
            idx = j;
            break;
          }
        }
        if (sameYn == "N") {
          ds_commQtyCalByCommSizTyp.insertRow();
          let rowPos = ds_commQtyCalByCommSizTyp.getRowPosition();
          ds_commQtyCalByCommSizTyp.setCellData(rowPos, "cntrSizCd", ds_commInfo.getCellData(i, "cntrSizCd"));
          ds_commQtyCalByCommSizTyp.setCellData(rowPos, "cntrTypCd", ds_commInfo.getCellData(i, "cntrTypCd"));
          ds_commQtyCalByCommSizTyp.setCellData(rowPos, "qty", ds_commInfo.getCellData(i, "qty"));
        } else {
          ds_commQtyCalByCommSizTyp.setCellData(idx, "qty", Number(ds_commQtyCalByCommSizTyp.getCellData(idx, "qty")) + Number(ds_commInfo.getCellData(i, "qty")));
        }
      } else {
        ds_commQtyCalByCommSizTyp.insertRow();
        ds_commQtyCalByCommSizTyp.setCellData(0, "cntrSizCd", ds_commInfo.getCellData(i, "cntrSizCd"));
        ds_commQtyCalByCommSizTyp.setCellData(0, "cntrTypCd", ds_commInfo.getCellData(i, "cntrTypCd"));
        ds_commQtyCalByCommSizTyp.setCellData(0, "qty", ds_commInfo.getCellData(i, "qty"));
      }
    }
  }
};
scwin.f_setTemperDryByRFCntr = function (ds, gr, row) {
  if (row >= 0 && row < ds.getRowCount()) {
    let type = ds.getCellData(row, "cntrTypCd");
    if (type == scwin.CNTR_TYP_CD_RF || type == scwin.CNTR_TYP_CD_RH) {
      // TODO: enable/disable temper and dryYn columns
    } else {
      ds.setCellData(row, "temper", "");
      ds.setCellData(row, "dryYn", 0);
    }
  }
};
scwin.f_enableBtnUpdateRepWrkInfo = function () {
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR && ds_odrInfo.getCellData(0, "arvWrkPlCd") == "43D" && !$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrNo").trim())) {
    // TODO: enable btn_updateRepWrkInfo
  }
};
scwin.f_enableBtnChgCntrNoInfo = function () {
  if ((scwin.odrKndCd == scwin.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || scwin.odrKndCd == "CS" || scwin.odrKndCd == "CT") && !$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrNo").trim())) {
    // TODO: enable btn_chgCntrNoInfo
  }
};
scwin.f_setInterfaceByOdr2 = function (odrKndCd, impExpClsCd) {
  if (odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    // TODO: set interface for import general container order
  }
};
scwin.f_setInterfaceByOdrOnUpdate = function () {
  scwin.odrKndCd = ds_odrInfo.getCellData(0, "odrKndCd");
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    // TODO: set interface for update mode
  }
};
scwin.f_onSelChangeSelfClsCd = function () {
  scwin.selfClsCd = ds_odrInfo.getCellData(0, "selfClsCd");
};
scwin.f_setValueArvWrkPlCdByBlNo = function () {
  let mcomAssgnClsCd = ds_odrInfo.getCellData(0, "mcomAssgnClsCd");
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    if (!$c.gus.cfIsNull($p, mcomAssgnClsCd) && mcomAssgnClsCd.charAt(0) == "B") {
      ds_odrInfo.setCellData(0, "arvDtl", scwin.assgnWhouseNm);
    } else {
      ds_odrInfo.setCellData(0, "arvDtl", "");
    }
  }
};
scwin.f_setGridCntrInfoByWrkRslts = function (row) {
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  if (cntrInfoRows > 0) {
    if (scwin.f_chkResultsConfirmation("CNTR_ROW")) {
      gr_cntrInfo.setReadOnly("grid", true);
    } else {
      gr_cntrInfo.setReadOnly("grid", false);
    }
  }
};
scwin.f_setDryYnByImpExpClsCd = function (ds, row) {
  if (scwin.impExpClsCd == scwin.IMP_CD) {
    ds.setCellData(row, "impWt", ds.getCellData(row, "wt"));
    ds.setCellData(row, "impTemper", ds.getCellData(row, "temper"));
    ds.setCellData(row, "impDryYn", ds.getCellData(row, "dryYn"));
  } else if (scwin.impExpClsCd == scwin.EXP_CD) {
    ds.setCellData(row, "expWt", ds.getCellData(row, "wt"));
    ds.setCellData(row, "expTemper", ds.getCellData(row, "temper"));
    ds.setCellData(row, "expDryYn", ds.getCellData(row, "dryYn"));
  } else {
    ds.setCellData(row, "expWt", ds.getCellData(row, "wt"));
    ds.setCellData(row, "expTemper", ds.getCellData(row, "temper"));
    ds.setCellData(row, "expDryYn", ds.getCellData(row, "dryYn"));
  }
};
scwin.f_setCntrInsYn = function (ds, row) {
  if (scwin.statusFlag == "C") {
    if (!$c.gus.cfIsNull($p, ds.getCellData(row, "cntrNo"))) {
      ds.setCellData(row, "cntrInsYn", 1);
    }
  } else if (scwin.statusFlag == "U") {
    if (ds.getRowStatus(row) == "C" && !$c.gus.cfIsNull($p, ds.getCellData(row, "cntrNo"))) {
      ds.setCellData(row, "cntrInsYn", 1);
    }
  }
};
scwin.f_setDataSetDtHh = function (ds, row) {
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkStDt"))) ds.setCellData(row, "wrkStDt", ds_odrInfo.getCellData(0, "wrkStDt"));
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkStHh"))) ds.setCellData(row, "wrkStHh", ds_odrInfo.getCellData(0, "wrkStHh"));
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkEndDt"))) ds.setCellData(row, "wrkEndDt", ds_odrInfo.getCellData(0, "wrkEndDt"));
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkEndHh"))) ds.setCellData(row, "wrkEndHh", ds_odrInfo.getCellData(0, "wrkEndHh"));
};
scwin.f_checkOdrArvWrkPlCdForCntr = async function (odrArvWrkPlCd) {
  for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
    if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "arvWrkPlCd"))) {
      if (odrArvWrkPlCd != ds_cntrInfo.getCellData(i, "arvWrkPlCd")) {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_004);
        return false;
      }
    }
  }
  return true;
};
scwin.f_setHidValues = function (gubun) {
  if (gubun == 1) {
    // TODO: set hidVal from current values
  } else if (gubun == 2) {
    // TODO: clear hidVal
  }
};
scwin.f_copyDataSetRow = function (oDS1, oDS2) {
  for (let i = 0; i < oDS1.getRowCount(); i++) {
    if (oDS1.getRowStatus(i) != "D") {
      oDS2.insertRow();
      // TODO: copy all columns
    }
  }
};
scwin.f_setCommInfoByBkCommInfo = function (gubun) {
  // TODO: implement booking comm info transfer logic
};
scwin.f_copyCntrItemRow = function () {
  // TODO: implement container item row copy logic
};
scwin.f_copyCntrSelectItemRow = function () {
  // TODO: implement container select item row copy logic
};
scwin.f_checkCntrNo = async function (parCntrNo) {
  let cntrNo = parCntrNo.trim();
  if (scwin.odrKndCd == scwin.ODR_KND_CD_EXP_GNRL_CNTR_ODR && scwin.selfClsCd == scwin.SELF_CLS_CD_SELF_SALES) {
    if (cntrNo != "") {
      if (!$c.gus.cf_CheckCntrNo($p, cntrNo)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]);
      }
    }
  }
};
scwin.f_FieldClear = function () {
  ed_odrNo.setValue("");
};
scwin.f_clearTabOrderInfo = function () {
  scwin.hd_odrNo = "";
};
scwin.f_setTabOrderInfo = function () {
  scwin.hd_odrNo = dma_cndOdrNo.get("odrNo");
};
scwin.f_setActiveGrid = function (gubun) {
  if (gubun == "E") {
    gr_commInfo.setReadOnly("grid", false);
    gr_cntrInfo.setReadOnly("grid", false);
  } else if (gubun == "D") {
    gr_commInfo.setReadOnly("grid", true);
    gr_cntrInfo.setReadOnly("grid", true);
  }
};
scwin.f_setLuxeComboCBDataSelfClsCd = function () {
  // TODO: set self class code combo data
};
scwin.f_showOdrSelItem = function (gubun) {
  // TODO: show/hide booking info sections
};
scwin.f_retrieveManifestBLContainerList = function () {
  // TODO: not applicable for import general
};
scwin.f_setCvsslMgntNoByOdrKndCd = function (rtnList, gubun) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      if (gubun == "") {
        scwin.f_retrieveManifestBLContainerList();
      }
    }
  } else {
    if (gubun == "") {
      scwin.f_clearDataByCvsslMgntNo();
    }
  }
};
scwin.f_retrieveBillOfLadingContainerList = async function () {
  if (scwin.odrKndCd == scwin.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    scwin.retrieveYn = "Y";
    dma_cndBlNo.set("cvsslMgntNo", ds_odrInfo.getCellData(0, "cvsslMgntNo"));
    dma_cndBlNo.set("impExpClsCd", "I");
    dma_cndBlNo.set("mrn", ds_blInfo.getCellData(0, "mrn"));
    dma_cndBlNo.set("msn", ds_blInfo.getCellData(0, "msn"));
    dma_cndBlNo.set("hsn", ds_blInfo.getCellData(0, "hsn"));
    dma_cndBlNo.set("hblNo", ds_odrInfo.getCellData(0, "blNo"));
    dma_cndBlNo.set("odrKndCd", scwin.odrKndCd);
    dma_cndBlNo.set("selfClsCd", scwin.selfClsCd);
    await $c.sbm.execute($p, sbm_retrieveBLContainer);
  }
};
scwin.f_setCntrBasisInfoAndBlInfo = function () {
  // TODO: implement container basis info and BL info setting
};
scwin.f_successRetrieveBLAndCntrForCvssl = function () {
  // TODO: implement success handler for BL and container retrieval
};
scwin.f_setCntrGridCloseUp = function (row) {
  // TODO: implement container grid close up logic
};
scwin.f_checkCommTypeByCntrTypeOnCloseUpEvent = function (row, colid) {
  // TODO: implement comm type check by container type
};
scwin.f_checkCommTypeByCntrType = function () {
  let cntrRows = ds_cntrInfo.getRowCount();
  let commRows = ds_commInfo.getRowCount();
  for (let i = 0; i < cntrRows; i++) {
    if (ds_cntrInfo.getRowStatus(i) != "D") {
      let cntrSize = ds_cntrInfo.getCellData(i, "cntrSizCd");
      let cntrType = ds_cntrInfo.getCellData(i, "cntrTypCd");
      let cntrFE = ds_cntrInfo.getCellData(i, "fullEmptyClsCd");
      let sameYn = "Y";
      for (let j = 0; j < commRows; j++) {
        if (ds_commInfo.getRowStatus(j) != "D") {
          if (Number(ds_commInfo.getCellData(j, "inputQty")) > 0) {
            let commSize = ds_commInfo.getCellData(j, "cntrSizCd");
            let commType = ds_commInfo.getCellData(j, "cntrTypCd");
            let commFE = ds_commInfo.getCellData(j, "fullEmptyClsCd");
            if (cntrSize != commSize || cntrType != commType || cntrFE != commFE) {
              sameYn = "N";
              break;
            }
          }
        }
      }
      if (sameYn == "N") {
        return false;
      }
    }
  }
  return true;
};
scwin.f_setCntrInfo = function (gubun, msgYn) {
  if (gubun == 1) {
    // TODO: set container info from basis info
  } else if (gubun == 2) {
    // TODO: clear container info
  }
};
scwin.f_setDataSetValue = function (gubun, arrColumn, ds1, ds2) {
  // TODO: implement dataset value setting
};
scwin.f_displayGridColumn = function (gridObject, columnArray, feature, value) {
  // TODO: implement grid column display setting
};
scwin.f_setActiveImgPopUp = function (gubun) {
  // TODO: implement popup button enable/disable
};
scwin.f_openCommonPopUp = function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: implement common popup opening logic
};
scwin.f_beforeOpenCommonPopUpEd = function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  // TODO: implement before open common popup for emedit
};
scwin.f_beforeOpenCommonPopUpTxt = function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  // TODO: implement before open common popup for text
};
scwin.f_beforeOpenCommonPopUpEdByLc = function (nmLcObj, noEdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  // TODO: implement before open common popup for luxecombo
};
scwin.f_openPopUpGrid = function (ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: implement grid popup
};
scwin.f_openPopUpGridBefore = function (ds, row, cdColid, nmColid, olddata, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // TODO: implement grid popup before
};
scwin.f_openPopUpOdrNo = async function () {
  // TODO: implement order number search popup
};
scwin.f_setValueBeforeValidation = function () {
  // TODO: implement value setting before validation
};
scwin.f_showMandatoryMark = function (gubun) {
  // TODO: implement mandatory mark show/hide
};
scwin.f_showBlNoAndCvsslMgntNoPopUp = function (gubun) {
  // TODO: implement BL/CvsslMgntNo popup show/hide
};
scwin.f_setGridHeight = function (gubun) {
  // TODO: implement grid height setting
};
scwin.f_setBlNo = function (gubun) {
  // TODO: implement BL number enable/disable
};
scwin.f_setCvsslMgntNo = function (gubun) {
  // TODO: implement CvsslMgntNo enable/disable
};
scwin.f_setLineCd = function (gubun) {
  // TODO: implement line code enable/disable
};
scwin.f_setVsslCd = function (gubun) {
  // TODO: implement vessel code enable/disable
};
scwin.f_setPortcnt = function (gubun) {
  // TODO: implement portcnt enable/disable
};
scwin.f_setDptWrkPlCd = function (gubun) {
  // TODO: implement departure workplace enable/disable
};
scwin.f_setSelfClsCd = function (gubun) {
  // TODO: implement self class code enable/disable
};
scwin.f_setBookingNo = function (gubun) {
  // TODO: implement booking number enable/disable
};
scwin.f_setCommGrid = function (gubun) {
  // TODO: implement comm grid enable/disable
};
scwin.f_setCommGridForFE = function (gubun) {
  // TODO: implement comm grid F/E enable/disable
};
scwin.f_setCntrGridForSizTypFE = function (gubun) {
  // TODO: implement container grid Size/Type/FE enable/disable
};
scwin.f_showHideCntrLookUp = function (gubun) {
  // TODO: implement container lookup show/hide
};
scwin.f_showHideCntrExcelUp = function (gubun) {
  // TODO: implement excel upload show/hide
};
scwin.f_showHideCntrItemRow = function (gubun) {
  // TODO: implement container item row show/hide
};
scwin.f_setMultiRowSelectForCntrGrid = function (gubun) {
  // TODO: implement multi row select for container grid
};
scwin.f_setInterfaceByOdr = function (odrKndCd, impExpClsCd) {
  // TODO: implement interface setting by order kind
};
scwin.f_onChangeDptWrkPlNm = function () {
  scwin.f_setSellAndBilgDept("N");
};
scwin.f_setGrCommInfoWidthByOdrKndCd = function (gubun) {
  // TODO: implement grid column width setting by order kind
};
scwin.f_grdHeight = function (objGrd, size) {
  // TODO: implement grid height adjustment
};
scwin.f_upload = function () {
  // TODO: implement CSV upload logic
};
scwin.f_calInputQtyUpload = function (row) {
  // TODO: implement input qty calculation after upload
};
scwin.f_checkCntr = function (ds, chkStr) {
  let v_chk = false;
  for (let i_ds = 0; i_ds < ds.getRowCount(); i_ds++) {
    if (ds.getCellData(i_ds, "cd") == chkStr) {
      v_chk = true;
    }
  }
  return v_chk;
};
scwin.f_retrieveClntList = async function () {
  // TODO: implement client list retrieval
};
scwin.f_setLcOdrKndCd = function (odrKndCd) {
  // TODO: implement order kind code setting
};
scwin.f_odrRegIfno = function () {
  // TODO: implement order registration info navigation
};
scwin.f_openPopUpCntrLookUp = async function () {
  // TODO: implement container lookup popup
};
scwin.f_clearDataByTsCvsslMgntNo = function () {
  // TODO: implement TS CvsslMgntNo data clear
};
scwin.f_retrieveBlAndCntrForCvssl = async function (cntrNo) {
  // TODO: implement BL and container retrieval for Cvssl
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'section row-gap-20'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:95px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' col8',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'rd_cntrDsgYn',style:'',submenuSize:'auto',ref:'data:ds_odrInfo.cntrDsgYn'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'컨테이너번호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box col6',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더번호 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' col6',id:'ed_odrNo',placeholder:'',style:'',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' col8',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'rd_sellYn',style:'',submenuSize:'auto',ref:'data:ds_odrInfo.sellYn'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'ed_cnd_cntrNo',class:'col8',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' col8',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_reqClntNo',placeholder:'',class:' w85',ref:'data:ds_odrInfo.reqClntNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'',class:'',direction:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col8',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w85',id:'ed_bilgClntNo',placeholder:'',style:'',ref:'data:ds_odrInfo.bilgClntNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col8',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w85',id:'ed_realMchtClntNo',placeholder:'',style:'',ref:'data:ds_odrInfo.realMchtClntNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',style:'',submenuSize:'auto'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'ed_ctrtClntNm',popupID:'',style:'',class:'col8'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'ed_sellLodeptNm',class:'col8',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line/선사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'w2:udc_comCode',A:{id:'ed_bilgLodeptNm',popupID:'',style:'',class:''}},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' w85'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'BL번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box col8',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_blNo',placeholder:'',style:'',ref:'data:ds_odrInfo.blNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보운/배정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'',class:' cal',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'',class:'',direction:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입항일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'',style:''}},{T:1,N:'xf:input',A:{class:' w50 tac',id:'',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'본번',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box col5',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'',placeholder:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선박명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'ed_lineNm',class:'col8',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항차/항로',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:' w50',id:'',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'From~To',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'w2:udc_comCode',A:{id:'ed_blNo',popupID:'',style:'',class:'col8'}},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' col6',checkMaxByteOnInput:'true'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{id:'ed_cvsslMgntNo',popupID:'',style:'',class:'col8'}},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' col6',checkMaxByteOnInput:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출발일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td '},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'',class:' cal',calendarValueType:'yearMonthDate'}},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' w50 tac'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'도착일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'',style:''}},{T:1,N:'xf:input',A:{class:' w50 tac',id:'',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지정/매출',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_onPicNm',placeholder:'',class:' w100',ref:'data:ds_odrInfo.onPicNm'}},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' '}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_offPicNm',placeholder:'',class:' ',ref:'data:ds_odrInfo.offPicNm'}},{T:1,N:'xf:input',A:{style:'',id:'',placeholder:'',class:' '}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더담당/체선',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100 ',id:'',placeholder:'',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'자가/CH',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'',class:'',direction:'auto'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'',class:' w100',direction:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'운송사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group col8',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'',placeholder:'',style:''}},{T:1,N:'xf:input',A:{class:' ',id:'',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'왕복/HL',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group '},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'',class:' w100',direction:'auto'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'',class:' w120',direction:'auto'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특이사항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:textarea',A:{class:' h-full',id:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'배차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'ed_vsslNm',class:'col8',popupID:'',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'section half'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'품명목록 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'grid-wrap'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_commInfo',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_commInfo',visibleRowNum:'2',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'cntrSizCd',blockSelect:'false',displayMode:'label',value:'Size',class:'col-type1'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'cntrTypCd',blockSelect:'false',displayMode:'label',value:'Type',class:'col-type1'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'fullEmptyClsCd',blockSelect:'false',displayMode:'label',value:'F/E',class:'col-type1'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'odrNo',blockSelect:'false',displayMode:'label',value:'오더번호',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commSeq',value:'품명순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'qty',value:'수량',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inputQty',value:'입력수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grossWt',value:'중량(KG)',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'temper',value:'온도',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dryYn',value:'DRY',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStDt',value:'출발일자',displayMode:'label',class:'col-type1',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStHh',value:'시간',displayMode:'label',class:'col-type1',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkEndDt',value:'도착일자',displayMode:'label',class:'col-type1',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndHh',value:'시간',displayMode:'label',class:'col-type1',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'unitCd',value:'단위',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'netWt',value:'NET중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cbm',value:'CBM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnYn',value:'확정여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclYn',value:'취소여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'비고',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'cntrSizCd',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_cntrSize'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'cntrTypCd',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_cntrType'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'fullEmptyClsCd',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_cntrFE'}]}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'odrNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inputQty',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grossWt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'temper',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'dryYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkStDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkEndDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndHh',value:'',displayMode:'label',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'unitCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'netWt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cbm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'netWt',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'cbm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:'',id:'cnclYn',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'ctrtTrf',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'inputQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnYn',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'dryYn',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrtTrf',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selpchItemNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSizCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cntrTypCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'qty',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'',type:'button',class:'btn sm',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'',type:'button',class:'btn sm',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'',type:'button',class:'btn sm',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'section row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매출목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'grid-wrap'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_sellInfo',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_sellInfo',visibleRowNum:'3',class:'wq_gvw',checkReadOnlyOnPasteEnable:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'selpchItemNm',blockSelect:'false',displayMode:'label',value:'매출항목'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'ctrtWrkPathNm',blockSelect:'false',displayMode:'label',value:'작업경로'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'commNm',blockSelect:'false',displayMode:'label',value:'품명'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'ctrtTrf',blockSelect:'false',displayMode:'label',value:'단가'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'selpchItemNm',blockSelect:'false',displayMode:'label',textAlign:'left',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'ctrtWrkPathNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'commNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'ctrtTrf',blockSelect:'false',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'복사조건 ',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'auto',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'',class:' w70',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select1',A:{ref:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'',class:' w70',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select1',A:{ref:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'',class:' w70',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'복사대상 ',class:''}},{T:1,N:'xf:select1',A:{ref:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'',class:' w100',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrInfo',focusMode:'row',id:'gr_cntrInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',fixedColumn:'7',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'50',value:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'creatOdrNo',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더번호',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'Currow',inputType:'text',removeBorderStyle:'false',width:'60',value:'Seq',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSeq',inputType:'text',removeBorderStyle:'false',width:'60',value:'Seq'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnYn',inputType:'text',style:'',value:'확정',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',style:'',value:'bl',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',style:'',value:'번호',width:'95',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'SZ',width:'60',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',style:'',value:'TP',width:'60',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'fullEmptyClsCd',value:'F/E',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'impSealNo',value:'수입Seal-No',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'expSealNo',value:'수출Seal-No',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptWrkPlCd',value:'FROM',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptWrkPlNm',value:'FROM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlCd',value:'TO',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlNm',value:'TO',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'currPosCd',value:'현위치',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'currPosNm',value:'현위치',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portCd',value:'PORT',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portNm',value:'PORT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'destPortCd',value:'목적항구',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'destPortNm',value:'목적PORT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'term',value:'TERM',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'xrayLupTrgtYn',value:'X-RAY',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'leaseYn',value:'LES',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'socYn',value:'SOC',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'offRtrnClsCd',value:'OFF반납',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'impCntrWrkKndCd',value:'작업',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'impMgsetYn',value:'MG SET',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'중량(KG)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'temper',value:'온도',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dryYn',value:'DRY',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrWtCondCd',value:'중량조건',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrWrkClsCd',value:'작업구분',displayMode:'label',class:'col-type2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStDt',value:'출발일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStHh',value:'시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkEndDt',value:'도착일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndHh',value:'시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkRsltsNo',value:'실적여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'creatOdrNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'Currow',inputType:'text',removeBorderStyle:'false',width:'60',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSeq',inputType:'text',removeBorderStyle:'false',width:'60',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnYn',inputType:'checkbox',style:'',value:'',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',style:'',value:'',width:'95'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'',width:'60',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_cntrSize'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',style:'',value:'',width:'60',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_cntrType'}]}]}]}]},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'fullEmptyClsCd',value:'',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_cntrFE'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'impSealNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'expSealNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'dptWrkPlCd',value:'',displayMode:'label',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptWrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'arvWrkPlCd',value:'',displayMode:'label',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvWrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'currPosCd',value:'',displayMode:'label',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'currPosNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'portCd',value:'',displayMode:'label',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'portNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'destPortCd',value:'',displayMode:'label',textAlign:'center',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'destPortNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'term',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'xrayLupTrgtYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'checkbox',style:'',id:'leaseYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'checkbox',style:'',id:'socYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'offRtrnClsCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'impCntrWrkKndCd',value:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_cntrBO'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'impMgsetYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'temper',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'dryYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'cntrWtCondCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'cntrWrkClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkStDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkEndDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndHh',value:'',displayMode:'label',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wrkRsltsNo',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미생성'}]},{T:1,N:'w2:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합매출입조정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표착지'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더등록현황'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널 EDI정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'',style:'',title:'엑셀 UP',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너번호변경'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_del',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]})