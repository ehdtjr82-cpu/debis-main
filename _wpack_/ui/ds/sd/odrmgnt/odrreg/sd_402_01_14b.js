/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_14b.xml 71456 bb3b2941f2511449333b1b30e3b84eea8a4d1891f2a257ee0d1b06b7c90765c2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_orderSearch',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'odrNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true','ev:ondataload':'scwin.ds_order_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'합적여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'오더담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'오더담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송회사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortCd',name:'TS항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplCoClsCd',name:'3자물류업체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndYn',name:'SMS전송여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'오더취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'오더취소시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'오더취소사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'오더삭제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'오더삭제시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOdrNo',name:'상위오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'청구오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'자동오더여부',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'출발OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'도착OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'출발터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'도착터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'출발OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'출발OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'출발OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구물류부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출물류부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'TS선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortNm',name:'TS항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'출발작업장물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'출발작업장물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'도착작업장물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'도착작업장물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'내부매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'내부매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'오더작업경로갯수',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'odrRequestCnt',name:'오더요청횟수',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'원화금액',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'매입원가',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'표준원가',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'표준원가미포함손익',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'표준원가포함손익',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배정담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'조정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNonm',name:'거래처관리번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoclsCd',name:'관리번호구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'체선일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispPchsClsCd',name:'name134',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderWrkPath',saveRemovedData:'true','ev:ondataload':'scwin.ds_orderWrkPath_ondataload','ev:onrowpositionchange':'scwin.ds_orderWrkPath_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'number',name:'name3',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'arrvlportDtm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'sellLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'sellYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'wt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'cntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'dcsnYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'dcsnDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'dcsnHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'completeYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name25',id:'completeDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name26',id:'completeHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name27',id:'cfsInMthdCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name28',id:'cfsCmpndCgshfYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name29',id:'cntrInsYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name30',id:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name31',id:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name32',id:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name33',id:'modDtm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name34',id:'impSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name35',id:'impDangerCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name36',id:'impTemper'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name37',id:'impWt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name38',id:'impOverLength'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name39',id:'impOverHeight'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name40',id:'impOverWidTh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name41',id:'impMgsetYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name42',id:'impCntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name43',id:'impTransCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name44',id:'impCntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name45',id:'xrayLupTrgtYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name46',id:'expSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name47',id:'expDangerCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name48',id:'expTemper'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name49',id:'expWt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name50',id:'expOverLength'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name51',id:'expOverHeight'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name52',id:'expOverWidth'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name53',id:'expMgsetYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name54',id:'expCntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name55',id:'expTransCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name56',id:'expCntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name57',id:'impExpClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name58',id:'cntrStsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name59',id:'stsChgDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name60',id:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name61',id:'offRtrnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name62',id:'leaseYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name63',id:'socYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name64',id:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name65',id:'term'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name66',id:'currPosCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name67',id:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name68',id:'shpCoClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name69',id:'lblock'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name70',id:'lbay'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name71',id:'lrow'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name72',id:'ltier'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name73',id:'wrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name74',id:'transRsltsSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name75',id:'creatOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name76',id:'crryinDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name77',id:'crryinHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name78',id:'legalAccfCargoDdCnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name79',id:'selfAccfCargoDdCnt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name80',id:'cargoProcMthdCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name81',id:'strRateOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name82',id:'sndoutInspRateOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name83',id:'frzMonOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name84',id:'bookingNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name85',id:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name86',id:'extdDueDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name87',id:'extdMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name88',id:'mgntClsYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name89',id:'impDryYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name90',id:'expDryYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name91',id:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name92',id:'cntrModDtm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name93',id:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name94',id:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name95',id:'portNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name96',id:'currPosNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name97',id:'destPortNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name98',id:'wrkRsltsNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name99',id:'cntrWrkClsCd'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'name101',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderWrkPathStep',saveRemovedData:'true','ev:ondataload':'scwin.ds_orderWrkPathStep_ondataload','ev:onrowpositionchange':'scwin.ds_orderWrkPathStep_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'commSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'odrWrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'ctrtWrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'ctrtWrkPathNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'wrkPlClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'wrkPlClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'wrkPlClsNmV'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'odrWrkStpSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'wrkStpCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'wrkStpNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'selpchItemCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'selpchItemNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'wrkLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'wrkLobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'wrkEndHh'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstClsCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDstClsNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name38',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderWrkPathStepDistanceHour',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'commSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'odrWrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'ctrtWrkPathSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'ctrtWrkPathNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'wrkPlClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'wrkPlClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'wrkPlClsNmV'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'odrWrkStpSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'wrkStpCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'wrkStpNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'selpchItemCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'selpchItemNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'wrkLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'wrkLobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'wrkEndHh'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve',encoding:'UTF-8',mediatype:'application/json',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_orderWrkPath","key":"OUT_DS2"},{"id":"ds_orderWrkPathStep","key":"OUT_DS3"}]',action:'/ds.sd.odrmgnt.odrreg.RetrieveOrderCommodityContainerCMD.do',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_orderWrkPath","key":"OUT_DS2"},{"id":"ds_orderWrkPathStep","key":"OUT_DS3"}]','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_timeAllocate',encoding:'UTF-8',mediatype:'application/json',action:'/ds.sd.odrmgnt.odrreg.AllocationBulkWorkDateTimeCMD.do',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"action":"modified","id":"ds_orderWrkPathStep","key":"IN_DS2"},{"id":"ds_orderWrkPathStepDistanceHour","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderWrkPathStepDistanceHour","key":"OUT_DS1"}','ev:submitdone':'scwin.sbm_timeAllocate_submitdone'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_save',encoding:'UTF-8',mediatype:'application/json',action:'/ds.sd.odrmgnt.odrreg.UpdateBulkOrderWorkStepAllocationDateTimeCMD.do',ref:'data:json,{"id":"ds_orderWrkPathStep","key":"IN_DS1"}','ev:submitdone':'scwin.sbm_save_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/SdConstants.js',scopeVariable:'SdConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.odrNo = "";
scwin.type = "";

// hidden
scwin.hid_ctrtClntNo = "";
scwin.hid_realMchtClntNo = "";
scwin.hid_chkUseFilter = "";
scwin.hid_chkReterieve = "";
scwin.v_row = 0;
scwin.v_colid = "wrkStDt";
scwin.onpageload = function () {
  scwin.odrNo = $c.data.getParameter($p, "odrNo") == null ? "" : $c.data.getParameter($p, "odrNo");
  scwin.type = $c.data.getParameter($p, "type") == null ? "" : $c.data.getParameter($p, "type");
};
scwin.onUdcCompleted = function () {
  // 초기화
  scwin.f_defaultValue();
  ed_odrNo.setValue(scwin.odrNo);
  scwin.hid_chkReterieve = scwin.type;
  if (ed_odrNo.getValue() != "" && scwin.hid_chkReterieve == "retrieve") {
    scwin.f_Retrieve();
  }
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
// DataSet Header 정의 - 조회
scwin.f_dsOrderSearchHeader = function () {
  ds_orderSearch.removeAll();
};

// 초기화
scwin.f_defaultValue = function () {
  // DataSet HEADER 정의
  scwin.f_dsOrderSearchHeader();

  // 조회 DataSet 초기화
  ds_orderSearch.insertRow();
  ds_orderSearch.setRowPosition(0);
  ds_orderSearch.setCellData(0, "odrNo", "");
  lay_ctrtClntNm.setValue(""); // 계약거래처명 설정
  lay_realMchtClntNm.setValue(""); // 실화주명 설정
  td_realMchtClntNm.setValue("실화주거래처");
  scwin.hid_ctrtClntNo = ""; // 계약거래처 코드 설정
  scwin.hid_realMchtClntNo = ""; // 실화주 코드 설정

  scwin.hid_chkUseFilter = true;
  $c.gus.cfDisableAllBtn($p);
  ed_odrNo.focus();
};

// 조회 조건 초기화
scwin.f_FieldClear = function () {
  ed_odrNo.setValue("");
  ed_odrNo.focus();
};

// 조회
scwin.f_Retrieve = async function () {
  var odrNo = ed_odrNo.getValue().replace(/\s*$/, '');
  if (odrNo.length == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["오더번호"]);
    return;
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableAllBtn($p);
  ds_order.removeAll();
  ds_orderWrkPath.removeAll();
  ds_orderWrkPathStep.removeAll();
  let e = await $c.sbm.execute($p, sbm_retrieve);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieve_submitdone(e);
  }
};

// 수정
scwin.f_Update = function () {
  $c.gus.cfDisableBtnOnly($p, [btn_update]);
  $c.gus.cfEnableBtnOnly($p, [btn_timeAllocate, btn_save]);
  gr_odrWrkPathStep.setReadOnly("grid", false);
  scwin.v_row = ds_orderWrkPathStep.getRowPosition();
  scwin.v_colid = "wrkStDt";
  setTimeout(() => {
    gr_odrWrkPathStep.setFocusedCell(scwin.v_row, "wrkEndDt", true);
  }, 300);
  //////gr_odrWrkPathStep.SetColumn("wrkEndDt");
};

// 시간배분
scwin.f_TimeAllocate = async function () {
  //ds_orderWrkPathStep.UseChangeInfo = false;

  let e = await $c.sbm.execute($p, sbm_timeAllocate);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_timeAllocate_submitdone(e);
  }
};

// 저장
scwin.f_Save = async function () {
  // 변경한 데이터가 있는지 체크한다. 
  if (ds_orderWrkPathStep.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("작업단계")); //변경된 정보가 없습니다.
    return;
  }

  // 필수 입력사항을 체크  
  let chk = await scwin.f_validChk();
  if (chk) {
    let confirmYn = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmYn) {
      // disable 처리
      $c.gus.cfDisableKeyData($p);

      //gr_odrWrkPathStep.Editable = "false";
      gr_odrWrkPathStep.setReadOnly("grid", true);

      // 벌크오더/컨테이너오더에 따른 Action 변경
      if (ds_order.getCellData(ds_order.getRowPosition(), "transCargoClsCd") == DsConstants.ODR_BULK) {
        // 벌크오더
        sbm_save.action = "/ds.sd.odrmgnt.odrreg.UpdateBulkOrderWorkStepAllocationDateTimeCMD.do";
      } else {
        // 컨테이너오더
        sbm_save.action = "/ds.sd.odrmgnt.odrreg.UpdateContainerOrderWorkStepAllocationDateTimeCMD.do";
      }
      let e = await $c.sbm.execute($p, sbm_save);
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        scwin.sbm_save_submitdone(e);
      }
    }
  }
};

// 저장
scwin.f_validChk = async function () {
  // 작업단계 필수 입력 사항 확인
  for (var i = 0; i < ds_orderWrkPathStep.getRowCount(); i++) {
    if ($c.util.isEmpty($p, ds_orderWrkPathStep.getCellData(i, "wrkStDt"))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + "작업시작일자은(는) 필수 입력 항목입니다.", ["작업단계목록", i + 1])) {
        //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        //ds_orderWrkPathStep.setRowPosition(i);
        ds_orderWrkPathStep.setRowPosition(i);
        gr_odrWrkPathStep.setFocusedCell(i, "wrkStDt", true);
        return false;
      }
    }
    if ($c.util.isEmpty($p, ds_orderWrkPathStep.getCellData(i, "wrkStHh"))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + "작업시작시간은(는) 필수 입력 항목입니다.", ["작업단계목록", i + 1])) {
        //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        //ds_orderWrkPathStep.setRowPosition(i);
        ds_orderWrkPathStep.setRowPosition(i);
        gr_odrWrkPathStep.setFocusedCell(i, "wrkStHh", true);
        return false;
      }
    }
    if ($c.util.isEmpty($p, ds_orderWrkPathStep.getCellData(i, "wrkEndDt"))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + "작업종료일자은(는) 필수 입력 항목입니다.", ["작업단계목록", i + 1])) {
        //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        //ds_orderWrkPathStep.setRowPosition(i);
        ds_orderWrkPathStep.setRowPosition(i);
        gr_odrWrkPathStep.setFocusedCell(i, "wrkEndDt", true);
        return false;
      }
    }
    if ($c.util.isEmpty($p, ds_orderWrkPathStep.getCellData(i, "wrkEndHh"))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + "작업종료시간은(는) 필수 입력 항목입니다.", ["작업단계목록", i + 1])) {
        //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        //ds_orderWrkPathStep.setRowPosition(i);
        ds_orderWrkPathStep.setRowPosition(i);
        gr_odrWrkPathStep.setFocusedCell(i, "wrkEndHh", true);
        return false;
      }
    }

    // 작업시작일시 와 작업도착일시 비교
    if (!scwin.f_chkTime(ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_061, ["작업단계목록", i + 1, "작업시작일자", "오더정보의 도착작업일자/도착작업시간 이후"])) {
        //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        //ds_orderWrkPathStep.setRowPosition(i);
        gr_odrWrkPathStep.SetColumn("wrkStDt");
        return false;
      }
    }

    // 작업시작일시 와 작업도착일시 비교
    if (!scwin.f_chkTime(ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_061, ["작업단계목록", i, "작업종료일자/작업종료시간", "오더정보의 도착작업일자/도착작업시간 이후"])) {
        //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        //ds_orderWrkPathStep.setRowPosition(i);
        gr_odrWrkPathStep.SetColumn("wrkStDt");
        return false;
      }
    }

    // 작업시작일시 와 작업도착일시 비교
    if (!scwin.f_chkTime(ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"))) {
      if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_061, ["작업단계목록", i, "작업종료일자/작업종료시간", "오더정보의 도착작업일자/도착작업시간 이후"])) {
        //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        //ds_orderWrkPathStep.setRowPosition(i);
        gr_odrWrkPathStep.SetColumn("wrkStDt");
        return false;
      }
    }
  }

  // 작업단계 필수 입력 사항 확인
  //if (await $c.gus.cfValidate([gr_odrWrkPathStep])) {

  /*   for (var i = 0; i < ds_orderWrkPathStep.getRowCount(); i++) {
         // 작업시작일시 와 작업도착일시 비교
         if (!scwin.f_chkTime(ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"))) {
             if (await $c.gus.cfAlertMsg(MSG_CM_ERR_031 + MSG_CM_ERR_061, ["작업단계목록", i, "작업종료일자/작업종료시간", "오더정보의 도착작업일자/도착작업시간 이후"])) { //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
                 //ds_orderWrkPathStep.setRowPosition(i);
                 gr_odrWrkPathStep.SetColumn("wrkStDt");
                 return false;
             } 
         }
     }
     */

  // 작업시작일자, 작업시작시간 확인 - 오더 출발일시와 비교
  if (!scwin.f_chkTime(ds_order.getCellData(0, "wrkStDt"), ds_order.getCellData(0, "wrkStDt"), ds_orderWrkPathStep.getCellData(0, "wrkStDt"), ds_orderWrkPathStep.getCellData(0, "wrkStDt"))) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_061, ["작업단계목록", 1, "작업시작일자/작업시작시간", "오더정보의 출발작업일자/출발작업시간 이후"])) {
      //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
      ds_orderWrkPathStep.setRowPosition(1);
      //gr_odrWrkPathStep.SetColumn("wrkStDt");	
      return false;
    }
    ;
  }

  // 작업종료일자, 작업종료시간 확인 - 오더 도착일시와 비교
  if (!scwin.f_chkTime(ds_order.getCellData(0, "wrkEndDt"), ds_order.getCellData(0, "wrkEndDt"), ds_orderWrkPathStep.getCellData(ds_orderWrkPathStep.getRowCount() - 1, "wrkEndDt"), ds_orderWrkPathStep.getCellData(ds_orderWrkPathStep.getRowCount() - 1, "wrkEndDt"))) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_061, ["작업단계목록", ds_orderWrkPathStep.getRowCount(), "작업종료일자/작업종료시간", "오더정보의 도착작업일자/도착작업시간 이후"])) {
      //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
      ds_orderWrkPathStep.setRowPosition(ds_orderWrkPathStep.getRowCount() - 1);
      //gr_odrWrkPathStep.SetColumn("wrkStDt");
      return false;
    }
  }

  /*   for (var i = 0; i < ds_orderWrkPathStep.getRowCount(); i++) {
         // 작업시작일시 와 작업도착일시 비교
         if (!scwin.f_chkTime(ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"), ds_orderWrkPathStep.getCellData(i, "wrkEndDt"))) {
             if (await $c.gus.cfAlertMsg(MSG_CM_ERR_031 + MSG_CM_ERR_061, ["작업단계목록", i, "작업종료일자/작업종료시간", "오더정보의 도착작업일자/도착작업시간 이후"])) { //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
                 //ds_orderWrkPathStep.setRowPosition(i);
                 gr_odrWrkPathStep.SetColumn("wrkStDt");
                 return false;
             } 
         }
     } */
  return true;
  //} else {
  //	return false;
  //}	
};

// 시간배분한 시간 정보를 작업경로별 작업단계에 설정
scwin.f_setAllocationBulkWorkDateTime = function () {
  // 시간배분된 DataSet 을 작업단계 DataSet 으로 복사
  // Filter 해제
  scwin.hid_chkUseFilter = false;
  //ds_orderWrkPathStep.filter();
  scwin.f_onFilter();

  // 시간배분된 일시가 다른 경우 일시 복사
  for (i = 0; i < ds_orderWrkPathStep.getRowCount(); i++) {
    for (j = 0; j < ds_orderWrkPathStepDistanceHour.getRowCount(); j++) {
      if (ds_orderWrkPathStep.getCellData(i, "odrNo") == ds_orderWrkPathStepDistanceHour.getCellData(j, "odrNo") && ds_orderWrkPathStep.getCellData(i, "commSeq") == ds_orderWrkPathStepDistanceHour.getCellData(j, "commSeq") && ds_orderWrkPathStep.getCellData(i, "odrWrkPathSeq") == ds_orderWrkPathStepDistanceHour.getCellData(j, "odrWrkPathSeq") && ds_orderWrkPathStep.getCellData(i, "odrWrkStpSeq") == ds_orderWrkPathStepDistanceHour.getCellData(j, "odrWrkStpSeq")) {
        // 동일한 작업단계의 경우 시간배분된 일시와 비교하여 변경된 경우 설정 	
        if (ds_orderWrkPathStep.getCellData(i, "wrkStDt") != ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkStDt")) ds_orderWrkPathStep.setCellData(i, "wrkStDt", ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkStDt")); // 시작일자
        if (ds_orderWrkPathStep.getCellData(i, "wrkStHh") != ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkStHh")) ds_orderWrkPathStep.setCellData(i, "wrkStHh", ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkStHh")); // 시작시간
        if (ds_orderWrkPathStep.getCellData(i, "wrkEndDt") != ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkEndDt")) ds_orderWrkPathStep.setCellData(i, "wrkEndDt", ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkEndDt")); // 도착일자
        if (ds_orderWrkPathStep.getCellData(i, "wrkEndHh") != ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkEndHh")) ds_orderWrkPathStep.setCellData(i, "wrkEndHh", ds_orderWrkPathStepDistanceHour.getCellData(j, "wrkEndHh")); // 도착시간
      }
    }
  }

  // Filter 설정
  scwin.hid_chkUseFilter = true;
  ds_orderWrkPath.setRowPosition(1);
  //ds_orderWrkPathStep.filter();
  scwin.f_onFilter();
  totalRows.setValue(ds_orderWrkPathStep.getRowCount());
};

// 시작시간, 종료시간 유효성 체크
scwin.f_chkTime = function (strDate, strTime, endDate, endTime) {
  var differTime = eval(endDate + endTime) - eval(strDate + strTime);
  if (differTime >= 0) {
    return true;
  } else {
    return false;
  }
};
scwin.f_onFilter = function (row) {
  // 1. 기준 데이터의 포지션 및 필터 사용 여부 체크
  var rowPos = ds_orderWrkPath.getRowPosition();
  var chkFilter = scwin.hid_chkUseFilter;

  // 필터 초기화 (새로운 필터를 걸기 전 기존 필터 제거)
  ds_orderWrkPathStep.removeColumnFilterAll();

  // 필터 미사용이거나 마스터 행 선택이 없으면 필터 해제 상태로 종료
  if (!chkFilter || rowPos < 0) {
    return;
  }

  // 2. 기준값 가져오기
  var v_transCargoClsCd = ds_order.getCellData(ds_order.getRowPosition(), "transCargoClsCd");
  var v_odrNo = ds_orderWrkPath.getCellData(rowPos, "odrNo");
  var condition = "";

  // 3. 분류코드(Bulk 여부)에 따라 조건식(condition) 문자열 동적 생성
  if (v_transCargoClsCd == DsConstants.ODR_BULK) {
    var v_commSeq = ds_orderWrkPath.getCellData(rowPos, "commSeq");
    // 예: odrNo == 'ODR001' && commSeq == '1'
    condition = "odrNo == '" + v_odrNo + "' && commSeq == '" + v_commSeq + "'";
  } else {
    var v_cntrSeq = ds_orderWrkPath.getCellData(rowPos, "cntrSeq");
    // 예: odrNo == 'ODR001' && cntrSeq == '1'
    condition = "odrNo == '" + v_odrNo + "' && cntrSeq == '" + v_cntrSeq + "'";
  }

  // 4. 공통함수를 이용해 필터 적용
  $c.data.dataListFilter($p, ds_orderWrkPathStep, condition);

  // (선택사항) 필터 결과 건수를 표시해야 한다면 아래 주석 해제
  totalRows.setValue(ds_orderWrkPathStep.getRowCount());
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_order.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
    scwin.f_FieldClear();

    // 오더정보 초기화
    lay_realMchtClntNm.setValue("");
    lay_ctrtClntNm.setValue("");
  } else {
    ds_order.setRowPosition(0);

    // 계약거래처명 설정
    lay_ctrtClntNm.setValue(ds_order.getCellData(ds_order.getRowPosition(), "ctrtClntNm"));

    // 오더 종류가 내수운송인 경우 수요가로 명칭 변환
    if (ds_order.getCellData(0, "odrKndCd").substr(0, 1) == "D") {
      td_realMchtClntNm.setValue("수요가");
      // 수요가명 설정
      lay_realMchtClntNm.setValue(ds_order.getCellData(ds_order.getRowPosition(), "dmndNm"));
      // 수요가 코드 설정
      scwin.hid_realMchtClntNo = ds_order.getCellData(ds_order.getRowPosition(), "dmndNo");
    } else {
      td_realMchtClntNm.setValue("실화주거래처");
      // 실화주명 설정
      lay_realMchtClntNm.setValue(ds_order.getCellData(ds_order.getRowPosition(), "realMchtClntNm"));
      // 실화주 코드 설정
      scwin.hid_realMchtClntNo = ds_order.getCellData(ds_order.getRowPosition(), "realMchtClntNo");
    }

    // 계약거래처 코드 설정
    scwin.hid_ctrtClntNo = ds_order.getCellData(ds_order.getRowPosition(), "ctrtClntNo");

    // 실화주 코드 설정
    scwin.hid_realMchtClntNo = ds_order.getCellData(ds_order.getRowPosition(), "realMchtClntNo");
    if (ds_order.getCellData(ds_order.getRowPosition(), "odrCompleteYn") != DsConstants.YN_YES) {
      $c.gus.cfEnableBtnOnly($p, [btn_update]);
    } else {
      $c.gus.cfDisableBtnOnly($p, [btn_update]);
    }
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  scwin.hid_chkUseFilter = true;
  if (ds_orderWrkPath.getRowCount() > 0) {
    debugger;
    ds_orderWrkPath.setRowPosition(0);
    //ds_orderWrkPathStep.setRowPosition(0); 
    if (ds_order.getCellData(ds_order.getRowPosition(), "transCargoClsCd") == DsConstants.ODR_BULK) {
      td_odrCommCntr.setValue("품명");
      // ds_orderWrkPath.SortExpr = "+commSeq";
      // ds_orderWrkPath.Sort();
      ds_orderWrkPath.sort("commSeq", 0);
      acb_commContainer.setNodeSet("data:ds_orderWrkPath", "commNm", "commSeq");
      acb_commContainer.refresh();

      // ds_orderWrkPathStep.SortExpr = commSortExpr; 
      // ds_orderWrkPathStep.Sort();

      // multisort API를 호출하여 정렬을 적용합니다.
      var commSortExpr = {};
      commSortExpr.sortIndex = "odrNo commSeq odrWrkPathSeq odrWrkStpSeq";
      commSortExpr.sortOrder = "1 1 1 1"; // -1 내림차순, 1 오름차순 
      ds_orderWrkPathStep.multisort(commSortExpr);
      sbm_timeAllocate.action = "/ds.sd.odrmgnt.odrreg.AllocationBulkWorkDateTimeCMD.do";
      sbm_save.action = "/ds.sd.odrmgnt.odrreg.UpdateBulkOrderWorkStepAllocationDateTimeCMD.do";
    } else {
      td_odrCommCntr.setValue("컨테이너");
      // ds_orderWrkPath.SortExpr = "+cntrSeq";
      // ds_orderWrkPath.Sort();
      ds_orderWrkPath.sort("cntrSeq", 0);
      acb_commContainer.setNodeSet("data:ds_orderWrkPath", "cntrNo", "cntrSeq");
      acb_commContainer.refresh();

      // ds_orderWrkPathStep.SortExpr = cntrSortExpr; 
      // ds_orderWrkPathStep.Sort();
      // multisort API를 호출하여 정렬을 적용합니다.

      var cntrSortExpr = {};
      cntrSortExpr.sortIndex = "odrNo cntrSeq odrWrkPathSeq odrWrkStpSeq";
      cntrSortExpr.sortOrder = "1 1 1 1"; // -1 내림차순, 1 오름차순 
      ds_orderWrkPathStep.multisort(cntrSortExpr);
      sbm_timeAllocate.action = "/ds.sd.odrmgnt.odrreg.AllocationContainerWorkDateTimeCMD.do";
      sbm_save.action = "/ds.sd.odrmgnt.odrreg.UpdateContainerOrderWorkStepAllocationDateTimeCMD.do";
    }
  }
  totalRows.setValue(ds_orderWrkPathStep.getRowCount());
};
scwin.sbm_timeAllocate_submitdone = async function (e) {
  //ds_orderWrkPathStep.UseChangeInfo = true;

  scwin.f_setAllocationBulkWorkDateTime();
  var msg = await $c.data.getDMessage($p, DSystemCode.SD, "I0029"); // @(이)가 성공적으로 완료되었습니다.
  msg = msg.replaceAll('@', '시간배분');
  $c.win.alert($p, msg);
};
scwin.sbm_save_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // 성공적으로 저장하였습니다
    //gr_odrWrkPathStep.Editable = "false";
    gr_odrWrkPathStep.setReadOnly("grid", true);
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfDisableKey($p);
    $c.gus.cfEnableBtnOnly($p, [btn_update]);
  }
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 조회 버튼 클릭 이벤트 
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 초기화 버튼 클릭 이벤트 
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 시간배분 버튼 클릭 이벤트 
scwin.btn_timeAllocate_onclick = function (e) {
  scwin.f_TimeAllocate();
};

// 수정 버튼 클릭 이벤트
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};

// 저장 버튼 클릭 이벤트 
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// Event onselected
//-------------------------------------------------------------------------
scwin.acb_commContainer_onselected = function () {
  ds_orderWrkPath.setRowPosition(this.getSelectedIndex());
};

//-------------------------------------------------------------------------
// DataSet 이벤트
//-------------------------------------------------------------------------
scwin.ds_orderWrkPath_ondataload = async function () {
  if (ds_order.getRowCount() > 0 && ds_orderWrkPath.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_odrWrkPathStep.setReadOnly("grid", true);
  }
};
scwin.ds_orderWrkPathStep_ondataload = async function () {
  if (ds_order.getRowCount() > 0 && ds_orderWrkPath.getRowCount() > 0 && ds_orderWrkPathStep.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    totalRows.setValue(ds_orderWrkPathStep.getRowCount());
  }
};
scwin.ds_orderWrkPath_onrowpositionchange = function (info) {
  scwin.v_row = 0;

  //ds_orderWrkPathStep.filter();
  scwin.f_onFilter();
  totalRows.setValue(ds_orderWrkPathStep.getRowCount());

  // 작업장구분이 운송인 경우 작업장 정보를 표시하지 않는다.
  for (var i = 0; i < ds_orderWrkPathStep.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i, "wrkPlClsCd"))) {
      ds_orderWrkPathStep.setCellData(i, "dptWrkPlNm", "");
    }
  }
  ds_orderWrkPathStep.modifyAllStatus("R");
  ds_orderWrkPathStep.reform();
  if (ds_order.getCellData(ds_order.getRowPosition(), "transCargoClsCd") == DsConstants.ODR_BULK) {
    var commSortExpr = {};
    commSortExpr.sortIndex = "odrNo commSeq odrWrkPathSeq odrWrkStpSeq";
    commSortExpr.sortOrder = "1 1 1 1"; // -1 내림차순, 1 오름차순 
    ds_orderWrkPathStep.multisort(commSortExpr);
  } else {
    var cntrSortExpr = {};
    cntrSortExpr.sortIndex = "odrNo cntrSeq odrWrkPathSeq odrWrkStpSeq";
    cntrSortExpr.sortOrder = "1 1 1 1"; // -1 내림차순, 1 오름차순 
    ds_orderWrkPathStep.multisort(cntrSortExpr);
  }
  for (var i = 0; i < ds_orderWrkPathStep.getRowCount(); i++) {
    // 작업시작일자, 작업시작시간 변경시 이전 row의 작업종료일자, 작업종료시간 변경
    if (i > 0) {
      if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i - 1, "wrkEndDt").trim()) && !$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i, "wrkStDt").trim()) && ds_orderWrkPathStep.getCellData(i, "wrkStDt") != ds_orderWrkPathStep.getCellData(i - 1, "wrkEndDt")) {
        ds_orderWrkPathStep.setCellData(i - 1, "wrkEndDt", ds_orderWrkPathStep.getCellData(i, "wrkStDt"));
      }
      if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i - 1, "wrkEndHh").trim()) && !$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i, "wrkStHh").trim()) && ds_orderWrkPathStep.getCellData(i, "wrkStDt") != ds_orderWrkPathStep.getCellData(i - 1, "wrkEndHh")) {
        ds_orderWrkPathStep.setCellData(i - 1, "wrkEndHh", ds_orderWrkPathStep.getCellData(i, "wrkStHh"));
      }
    }
    // 작업종료일자, 작업종료시간 변경시 이후 row의 작업시작일자, 작업시작시간 변경
    if (i < ds_orderWrkPathStep.getRowCount() - 1) {
      if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i + 1, "wrkStDt").trim()) && !$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i, "wrkEndDt").trim()) && ds_orderWrkPathStep.getCellData(i, "wrkEndDt") != ds_orderWrkPathStep.getCellData(i + 1, "wrkStDt")) {
        ds_orderWrkPathStep.setCellData(i + 1, "wrkStDt", ds_orderWrkPathStep.getCellData(i, "wrkEndDt"));
      }
      if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i + 1, "wrkStHh").trim()) && !$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(i, "wrkEndHh").trim()) && ds_orderWrkPathStep.getCellData(i, "wrkEndHh") != ds_orderWrkPathStep.getCellData(i + 1, "wrkStHh")) {
        ds_orderWrkPathStep.setCellData(i + 1, "wrkStHh", ds_orderWrkPathStep.getCellData(i, "wrkEndHh"));
      }
    }
  }

  /**
  * 첫번째 Row의 작업시작일자, 작업시작시간 완성하기
  * 첫번째 Row의 작업시작일자, 작업시작시간 입력되지 않은경우
  * 오더 시작일자, 시작시간을
  * 첫번째 Row의 작업시작일자, 작업시작시간으로 설정하기
  **/
  if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(0, "wrkStDt"))) ds_orderWrkPathStep.setCellData(0, "wrkStDt", ds_order.getCellData(0, "wrkStDt"));
  if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(0, "wrkStHh"))) ds_orderWrkPathStep.setCellData(0, "wrkStHh", ds_order.getCellData(0, "wrkStHh"));

  /**
  * 마지막 Row의 작업종료일자, 작업종료시간 완성하기
  * 마지막 Row의 작업종료일자, 작업종료시간이 입력되지 않은경우
  * 오더 종료일자, 종료시간을
  * 마지막 Row의 작업종료일자, 작업종료시간으로 설정하기
  **/
  if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(ds_orderWrkPathStep.getRowCount(), "wrkEndDt"))) ds_orderWrkPathStep.setCellData(ds_orderWrkPathStep.getRowCount(), "wrkEndDt", ds_order.getCellData(0, "wrkEndDt"));
  if ($c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(ds_orderWrkPathStep.getRowCount(), "wrkEndHh"))) ds_orderWrkPathStep.setCellData(ds_orderWrkPathStep.getRowCount(), "wrkEndHh", ds_order.getCellData(0, "wrkEndHh"));
};
scwin.ds_orderWrkPathStep_onrowpositionchange = function (info) {
  if (scwin.v_row > 0) {
    // 작업시작일자, 작업시작시간 변경시 이전 row의 작업종료일자, 작업종료시간 변경
    if (scwin.v_row > 1) {
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStDt").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStDt") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkStDt")) ds_orderWrkPathStep.setCellData(eval(scwin.v_row - 1), "wrkEndDt", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStDt"));
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStHh").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStHh") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkStHh")) ds_orderWrkPathStep.setCellData(eval(scwin.v_row - 1), "wrkEndHh", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStHh"));
    }
    // 작업종료일자, 작업종료시간 변경시 이후 row의 작업시작일자, 작업시작시간 변경
    if (scwin.v_row < ds_orderWrkPathStep.getRowCount()) {
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndDt").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndDt") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkEndDt")) ds_orderWrkPathStep.setCellData(eval(scwin.v_row + 1), "wrkStDt", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndDt"));
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndHh").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndHh") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkEndHh")) {
        ds_orderWrkPathStep.setCellData(eval(scwin.v_row + 1), "wrkStHh", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndHh"));
      }
    }
  }
  scwin.v_row = info.newRowIndex;

  /**
  * 첫번째 작업단계 작업 시작일자/시간
  * 마지막 작업단계 작업 종료일자/시간 정보는 수정 할수 없음.
  */

  var rowIndex = info.newRowIndex;
  var lastRowIndex = ds_orderWrkPathStep.getRowCount() - 1;
  if (gr_odrWrkPathStep.getReadOnly("grid") != true) {
    if (rowIndex == 0) {
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkStDt", true);
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkStHh", true);
      // gr_odrWrkPathStep.setColumnReadOnly("wrkStDt", true); 
      // gr_odrWrkPathStep.setColumnReadOnly("wrkStHh", true); 
    } else {
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkStDt", false);
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkStHh", false);
      // gr_odrWrkPathStep.setColumnReadOnly("wrkStDt", false); 
      // gr_odrWrkPathStep.setColumnReadOnly("wrkStHh", false);         
    }
    if (rowIndex == lastRowIndex) {
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkEndDt", true);
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkEndHh", true);
      // gr_odrWrkPathStep.setColumnReadOnly("wrkEndDt", true); 
      // gr_odrWrkPathStep.setColumnReadOnly("wrkEndHh", true);  
    } else {
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkEndDt", false);
      gr_odrWrkPathStep.setCellReadOnly(rowIndex, "wrkEndHh", false);
      // gr_odrWrkPathStep.setColumnReadOnly("wrkEndDt", false); 
      // gr_odrWrkPathStep.setColumnReadOnly("wrkEndHh", false); 
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_odrWrkPathStep_CustomFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "wrkPlClsNmV") {
    var wrkPlClsNm = ds_orderWrkPathStep.getCellData(rowIndex, 'wrkPlClsNm');
    if (wrkPlClsNm == '') {
      val = "→";
    } else {
      val = wrkPlClsNm;
    }
    // 특정 컬럼에 세로 병합 적용
    //gr_odrWrkPathStep.mergeCol(columnIndex, include)
    gr_odrWrkPathStep.mergeCol("wrkPlClsNmV", true);
  } else if (columnId == "wrkPlClsNm") {
    var wrkPlClsNm = ds_orderWrkPathStep.getCellData(rowIndex, 'wrkPlClsNm');
    if (wrkPlClsNm == '') {
      val = "→";
    } else {
      val = wrkPlClsNm;
    }
    // 특정 컬럼에 세로 병합 적용
    //gr_odrWrkPathStep.mergeCol(columnIndex, include)
    gr_odrWrkPathStep.mergeCol("wrkPlClsNmV", true);
  }
  return val;
};
scwin.gr_odrWrkPathStep_onviewchange = function (info) {
  var colId = info.colId;
  var colIndex = info.colIndex;
  var newValue = info.newValue;
  var oldValue = info.oldValue;
  var rowIndex = info.rowIndex;
  scwin.v_colid = colId;
  if (scwin.v_row >= 0) {
    // 작업시작일자, 작업시작시간 변경시 이전 row의 작업종료일자, 작업종료시간 변경
    if (scwin.v_row > 0) {
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStDt").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStDt") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkStDt")) ds_orderWrkPathStep.setCellData(eval(scwin.v_row - 1), "wrkEndDt", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStDt"));
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStHh").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStHh") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkStHh")) ds_orderWrkPathStep.setCellData(eval(scwin.v_row - 1), "wrkEndHh", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkStHh"));
    }
    // 작업종료일자, 작업종료시간 변경시 이후 row의 작업시작일자, 작업시작시간 변경
    if (scwin.v_row < ds_orderWrkPathStep.getRowCount() - 1) {
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndDt").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndDt") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkEndDt")) ds_orderWrkPathStep.setCellData(eval(scwin.v_row + 1), "wrkStDt", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndDt"));
      if (!$c.gus.cfIsNull($p, ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndHh").trim()) && ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndHh") != ds_orderWrkPathStep.getOriginalCellData(scwin.v_row, "wrkEndHh")) {
        ds_orderWrkPathStep.setCellData(eval(scwin.v_row + 1), "wrkStHh", ds_orderWrkPathStep.getCellData(scwin.v_row, "wrkEndHh"));
      }
    }
  }
  scwin.v_row = rowIndex;
};

//-------------------------------------------------------------------------
// Event oneditkeyup
//-------------------------------------------------------------------------
// 오더번호 Enter 이벤트
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_odrNo);
  if (info.keyCode == 13) {
    scwin.f_Retrieve();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',style:'width: 150px;',ref:'data:ds_orderSearch.odrNo',objType:'Data',mandatory:'true',maxlength:'13','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_ctrtClntNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_realMchtClntNm',label:'실화주거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_realMchtClntNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_odrCommCntr',label:'품명(컨테이너)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_commContainer',search:'start',style:'width: 250px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',objType:'data',displayMode:'label','ev:onselected':'scwin.acb_commContainer_onselected',visibleRowNum:'25'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품명(컨테이너)별 작업단계 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_orderWrkPathStep',id:'gr_odrWrkPathStep',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn','ev:onviewchange':'scwin.gr_odrWrkPathStep_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품명순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'컨테이너순번',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'오더작업경로순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'계약작업경로순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업경로',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업장구분코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'작업장구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'작업장구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업단계순번',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'작업단계코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'매출입항목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'매출입항목',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column31',value:'출발작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column29',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'작업물류점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column21',value:'작업점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'도착작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'작업시작일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'작업시작시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'작업종료일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'작업종료시간',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',hiddenCol:'true',readOnly:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'text',width:'100',hiddenCol:'true',readOnly:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'120',hiddenCol:'true',readOnly:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',width:'150',hiddenCol:'true',readOnly:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',width:'150',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathNm',inputType:'text',width:'160',textAlign:'left',readOnly:'true',userData1:'Y',customFormatter:'scwin.groupColmerge',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsCd',inputType:'text',width:'120',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',userData1:'Y',customFormatter:'scwin.gr_odrWrkPathStep_CustomFormatter',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsNmV',inputType:'text',width:'100',textAlign:'left',readOnly:'true',userData1:'Y',customFormatter:'scwin.gr_odrWrkPathStep_CustomFormatter',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkStpSeq',inputType:'text',width:'120',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStpCd',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'wrkStpNm',displayMode:'label',textAlign:'left',readOnly:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'selpchItemCd',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'dptWrkPlCd',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'wrkLobranCd',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'wrkLobranNm',displayMode:'label',textAlign:'left',readOnly:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'arvWrkPlCd',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true',hiddenCol:'true',hidden:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'wrkStDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',displayMode:'label',displayFormat:'##:##',readOnly:'true',maxByteLength:'4',allOption:'0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'wrkEndDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',displayMode:'label',displayFormat:'##:##',readOnly:'true',maxByteLength:'4',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_timeAllocate',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_timeAllocate_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'시간배분'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})