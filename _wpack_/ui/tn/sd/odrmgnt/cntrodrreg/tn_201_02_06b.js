/*amd /ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_06b.xml 189243 2ca5a0b45fe250cb04ac0b5fac225e4f786b197ad63c8651d2947836dd87bafe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchSys'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchGrp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'grpCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndOdrNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndClntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'contractNumber',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndCtrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'컨테이너여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBukYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'상대부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'오더조정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'상하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDtl',name:'상하차상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDt',name:'상하차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldHh',name:'상하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldPicNm',name:'상하자작업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldPicTelNo',name:'상하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadDptWrkPlCd',name:'철송출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadDptWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadArvWrkPlCd',name:'철송도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadArvWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'철송/해송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldZip',name:'상하차우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'도착지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'출발지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'체선일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'출발OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'도착OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'출발터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'도착터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liVanTerm',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnCd',name:'사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnTxt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transhipYn',name:'환적화물여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'masterKey',name:'마스터키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonCtrtYn',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeDt',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntTelNo',name:'실화주연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntNm',name:'주선업자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntTelNo',name:'주선업자연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRtrnDt',name:'컨테이너반납일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호   ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'컨테이너작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd1',name:'매출항목코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt1',name:'매출금액1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd2',name:'매출항목코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'매출금액2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c2ClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'컨테이너작업형태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unno',name:'UNNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyEmptyYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'컨테이너작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd1',name:'매출항목코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt1',name:'매출금액1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd2',name:'매출항목코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'매출금액2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c2ClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'컨테이너작업형태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unno',name:'UNNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyEmptyYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배분율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'등록지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배분율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deleteOrderCond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrEtc',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrSize',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrFE',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fltrCd2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'수출입구분코드',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'C3'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'CW'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'CR'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'CP'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_null',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_comSearchSys',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_comSearchGrp',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveBasicOdrListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveClntNo',action:'',method:'post',mediatype:'application/json',ref:'data:json,["dma_cndClntNo",{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_null","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_null","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveManifestBLContainerList',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"=ds_cndCvsslMgntNo","key":"IN_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveManifestBLContainerList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBasisInfo',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveContainerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cntrBasisInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrBasisInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtWrkPath',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_ctrtWrkPath","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtWrkPath_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"},{"id":"ds_cntrInfo","key":"IN_DS2"},{"id":"ds_cndOdrNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cndOdrNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified","id":"ds_cntrInfo","key":"IN_DS2"},{"id":"ds_cndOdrNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cndOdrNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteOrderCond',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.DeleteContainerOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_deleteOrderCond","key":"IN_DS1"}]',target:'data:json,{"id":"ds_cndOdrNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteOrderCond_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 세션정보 가져오기
  scwin.memInfo = $c.data.getMemInfo($p);

  //오늘일자 세팅
  scwin.strCurDate = $c.date.getServerDateTime($p);

  //params
  scwin.params = $c.data.getParameter($p);
  scwin.odrNo = $c.util.isEmpty($p, scwin.params.odrNo) ? "" : scwin.params.odrNo; //오더번호
  scwin.odrKndCd = $c.util.isEmpty($p, scwin.params.odrKndCd) ? "" : scwin.params.odrKndCd; //오더종류
  scwin.type = $c.util.isEmpty($p, scwin.params.type) ? "" : scwin.params.type; //type
  scwin.linkPage = $c.util.isEmpty($p, scwin.params.linkPage) ? "" : scwin.params.linkPage; //링크페이지 종류
  scwin.odrCopy = $c.util.isEmpty($p, scwin.params.odrCopy) ? "" : scwin.params.odrCopy; //웹오더요청번호

  scwin.odrKndCd = ""; //오더종류코드
  scwin.impExpClsCd = ""; //수출입내수구분코드
  scwin.mgntTrgtClntYn = 0; //거래처 관리대상여부
  scwin.retrieveYn = "N"; //조회여부
  scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
  scwin.chkInputQtyYn = "N"; //컨테이너 입력 여부 - 수입본선인 경우, 본선관리번호로 컨테이너정보 가져왔을 때 컨테이너정보프로세스(tr_retrieveCntrBasisInfo)를 태우지 않기 위한 flag
  scwin.findString = "";
  scwin.returnCrryoutList = ""; //반송 선적 컨테이너 목록
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  //$c.gus.cfDisableElement([ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm]);
  await scwin.f_set("INIT", "CREATE");
  if (scwin.linkPage == "odrList") {
    ed_odrNo.setValue($c.str.trim($p, scwin.odrNo));
    await scwin.f_retrieve();
    if (scwin.odrCopy == "copy") {
      scwin.set_copy();
    }
  }
  let readOnlyList = [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm];
  readOnlyList.forEach(function (value, index, arr) {
    value.setReadOnly(true);
  });
  await scwin.f_retrieveGridLookup();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  //console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  scwin.first_YN = 0;
  scwin.first_bilgClntNo = "";
  let chkVal = await $c.gus.cfValidate($p, [tbl_search], null, true);
  if (!chkVal) {
    return;
  }
  let set_odrNo = $c.str.trim($p, ed_odrNo.getValue());
  //gr_cntrInfo.DataID = "";
  scwin.retrieveYn = "Y";
  scwin.f_clearDataSet();
  scwin.mgntTrgtClntYn = 0;

  //scwin.hid_chkMode = "";

  if (ds_cndOdrNo.getTotalRow() > 0) ds_cndOdrNo.removeAll();
  ds_cndOdrNo.insertRow();
  ds_cndOdrNo.setCellData(0, "odrNo", set_odrNo);
  sbm_retrieve.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieve);
  await scwin.sbm_retrieve_submitdone(rtn);
};

//-------------------------------------------------------------------------
// 공통팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  return new Promise(async function (resolve, reject) {
    var pCode = "";
    var pWhere = "";
    var pWtitleSearch = "";
    var pSelectID = "";
    var pWhere = "";

    // 공통 콜백 처리 함수 
    var handleCallback = async function (callbackFn, data) {
      try {
        if (callbackFn) {
          await callbackFn(data); // 기존 async callBack 함수 실행 완료 대기
        }
        resolve(data); // Promise 완료 및 데이터 반환
      } catch (e) {
        console.error("Popup Callback Error:", e);
        reject(e); // 에러 발생 시 처리
      }
    };
    switch (gubun1) {
      case 1:
        //계약거래처 팝업
        if (gubun2 == "CTRT") {
          //계약거래처
          pCode = ed_ctrtClntNo.getValue();
          if (pNoDataCloseTF == "T") {
            //ed_reqClntNo.hidVal	 = pCode;
            lc_reqClntNm.setSelectedIndex(-1);
          }
          pWtitleSearch = "계약 거래처,거래처코드/명";
          pWhere = ",CTRT,CTRT";
          udc_ctrtClntNo.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackClntCtrt, res);
          }, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "BILG") {
          //청구거래처
          pCode = ed_bilgClntNo.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_bilgClntNo.hidVal = pCode;
            lc_bilgClntNm.setSelectedIndex(-1);
          }
          pWtitleSearch = "청구 거래처,거래처코드/명";
          pWhere = ",,CTRT";
          udc_bilgClntNo.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackClntBilg, res);
          }, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "REQ") {
          //요청거래처
          pCode = ed_reqClntNo.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_reqClntNo.hidVal	 = pCode;
            lc_reqClntNm.setSelectedIndex(-1);
          }
          pWtitleSearch = "요청 거래처,거래처코드/명";
          pWhere = ",,CTRT";
          udc_reqClntNo.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackClntReq, res);
          }, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        }
        break;
      case 2:
        //매출/청구부서
        //pWhere = "T,J";	// 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
        if (gubun2 == "SELL") {
          //매출부서
          pCode = ed_sellLodeptCd.getValue().trim();
          scwin.pNoDataCloseTF = pNoDataCloseTF;
          if (pNoDataCloseTF == "T") {
            //ed_sellLodeptCd.hidVal = pCode;
            ed_sellLodeptNm.setValue("");
            pWhere = "T,J,,,T,T,1";
          } else {
            pWhere = "T,J,,,,T,1";
          }
          pWtitleSearch = "매출부서,부서코드/명";
          udc_sellLodeptCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackSellLodept, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "BILG") {
          //청구부서
          pCode = ed_bilgLodeptCd.getValue().trim();
          scwin.pNoDataCloseTF = pNoDataCloseTF;
          if (pNoDataCloseTF == "T") {
            //ed_bilgLodeptCd.hidVal = pCode;
            ed_bilgLodeptNm.setValue("");
            pWhere = "T,J,,,T,,,1";
          } else {
            pWhere = "T,J,,,,,,1";
          }
          pWtitleSearch = "청구부서,부서코드/명";
          udc_bilgLodeptCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackBilgLodept, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        }
        break;
      case 3:
        //Line조회 - Line코드, Line명, 선사코드, 선사코드명
        pCode = ed_lineCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_lineCd.hidVal = pCode;
          $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
          $c.gus.cfInitHidVal($p, [ed_lineNm, ed_shpCoClntNm]);
          ds_odrInfo.setCellData(1, "shpCoClntNo", "");
          pWhere = "T";
        }
        pWtitleSearch = "LINE,LINE코드/명";
        udc_lineCd.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.callBackKLineInfo, res);
        }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        break;
      case 4:
        //본선관리번호 조회 - 선박코드, (선사)항차, 마감일시, 항구코드 가져오기
        var data = new Array(2);
        var opts = {
          id: "op_204_01_07p",
          popupName: "본선관리번호검색팝업",
          modal: true,
          type: "browserPopup",
          title: "본선관리번호검색화면 ",
          width: 1000,
          height: 500
        };
        if (gubun2 == "") {
          //본선관리번호
          data[0] = ed_cvsslMgntNo.getValue().trim();
          data[1] = scwin.impExpClsCd;
        } else if (gubun2 == "TS") {
          //TS본선관리번호
          data[0] = ed_tsCvsslMgntNo.getValue().trim();
          data[1] = 'O';
        }
        var rtnList = await $c.win.openPopup($p, '/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml', opts, data);

        //본선관리번호팝업의 리턴값에서 오더종류별로 필요한 값 세팅
        await scwin.f_setOdrEtc(rtnList[0], gubun2);
        await scwin.f_setCvsslMgntNoByOdrKndCd(rtnList, gubun2);
        break;
      case 5:
        //출발/도착 작업장 조회 - 코드/명 가져오기
        if (gubun2 == "DPT") {
          //출발작업장
          pCode = ed_dptWrkPlCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            ed_dptWrkPlCd.hidVal = pCode;
            ed_dptWrkPlNm.setValue("");
          }
          pWtitleSearch = "출발작업장,작업장코드/명";
          pSelectID = "retrieveWrkPlInfo_tpro";
          pWhere = ",,,12,,,1";
          udc_dptWrkPlCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackWrkDpt, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "ARV") {
          pCode = ed_arvWrkPlCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            ed_arvWrkPlCd.hidVal = pCode;
            ed_arvWrkPlNm.setValue("");
          }
          pWtitleSearch = "도착작업장,작업장코드/명";
          pSelectID = "retrieveWrkPlInfo_tpro";
          pWhere = ",,,12,,,1";
          udc_arvWrkPlCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackWrkArv, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        }
        break;
      case 8:
        //선박조회
        if (gubun2 == "") {
          //본선의 선박코드
          pCode = ed_vsslCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            ed_vsslCd.hidVal = pCode;
            ed_vsslNm.setValue("");
          }
          pWtitleSearch = "선박, 코드/명";
          udc_vsslCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackVsslInfo, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, null, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "TS") {
          //TS본선의 선박코드
          pCode = ed_tsVsslCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            ed_tsVsslCd.hidVal = pCode;
            ed_tsVsslNm.setValue("");
          }
          pWtitleSearch = "TS선박, 코드/명";
          udc_vsslCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackVsslTsInfo, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, null, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        }
        break;
      case 10:
        //우편번호조회
        if (gubun2 == "DPT_ZIP") {
          //상차지
          pCode = ed_dptZip.getValue().trim();
          if (pNoDataCloseTF == "T") {
            ed_dptZip.hidVal = pCode;
          }
          pWtitleSearch = "상차지우편번호,우편번호/동이름";
          udc_dptZip.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackZipDpt, res);
          }, pCode, '', pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        } else if (gubun2 == "ARV_ZIP") {
          //작업지
          pCode = ed_arvZip.getValue().trim();
          if (pNoDataCloseTF == "T") {
            ed_arvZip.hidVal = pCode;
          }
          pWtitleSearch = "작업지우편번호,우편번호/동이름";
          udc_arvZip.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackZipArv, res);
          }, pCode, '', pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        }
        break;
      case 11:
        //배차담당
        pCode = ed_alloccarPicId.getValue().trim();
        if (pNoDataCloseTF == "T") {
          //ed_alloccarPicId.hidVal = pCode;
          ed_alloccarPicNm.setValue("");
        }
        udc_alloccarPicId.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.callBackUserInfo, res);
        }, pCode, '', pWinCloseTF, null, null, null, null, null, null, null, null, null, null, pAllSearchTF, "등록자,사용자ID,사용자명", pNoDataCloseTF, null);
        break;
    }
  });
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//계약거래처
scwin.callBackClntCtrt = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ctrtClntNo, ed_ctrtClntNm);
  await scwin.f_retrieveCtrtNo(); //계약번호 가져오기
};

//청구거래처
scwin.callBackClntBilg = async function (rtnList) {
  if (rtnList == null) {
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    lc_bilgClntNm.setSelectedIndex(-1);
    return;
  }
  if (rtnList[0] == "N/A") {
    return;
  }
  ed_bilgClntNo.setValue(rtnList[0]);
  //ed_bilgClntNo.hidVal = rtnList[0];

  //사용자편의를 위하여 데이터셋에 추가
  var sameYn = "N";
  for (var i = 0; i < ds_bilgClntNo.getTotalRow(); i++) {
    if (ed_bilgClntNo.getValue().trim() == ds_bilgClntNo.getCellData(i, "clntNo")) {
      sameYn = "Y";
      lc_bilgClntNm.setSelectedIndex(i);
      return;
    }
  }
  if (sameYn == "N") {
    let insRow = ds_bilgClntNo.insertRow();
    ds_bilgClntNo.setCellData(insRow, "clntNo", rtnList[0]);
    ds_bilgClntNo.setCellData(insRow, "clntNm", rtnList[1]);
    lc_bilgClntNm.setSelectedIndex(ds_bilgClntNo.getTotalRow() - 1);
  }
  await scwin.f_retrieveCtrtNo2(); //계약번호 가져오기
};

//요청거래처
scwin.callBackClntReq = function (rtnList) {
  if (rtnList == null) {
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    lc_reqClntNm.setSelectedIndex(-1);
    return;
  }
  if (rtnList[0] == "N/A") {
    return;
  }
  ed_reqClntNo.setValue(rtnList[0]);
  //ed_reqClntNo.hidVal = rtnList[0];

  //사용자편의를 위하여 데이터셋에 추가
  var sameYn = "N";
  for (var i = 0; i < ds_reqClntNo.getTotalRow(); i++) {
    if (ed_reqClntNo.getValue().trim() == ds_reqClntNo.getCellData(i, "clntNo")) {
      sameYn = "Y";
      lc_reqClntNm.setSelectedIndex(i);
      return;
    }
  }
  if (sameYn == "N") {
    let insRow = ds_reqClntNo.insertRow();
    ds_reqClntNo.setCellData(insRow, "clntNo", rtnList[0]);
    ds_reqClntNo.setCellData(insRow, "clntNm", rtnList[1]);
    lc_reqClntNm.setSelectedIndex(ds_reqClntNo.getTotalRow() - 1);
  }
};

//Line
scwin.callBackKLineInfo = async function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_ON_HIRE_ODR) {
      // On-Hire
      if (ed_ctrtClntNo.getValue().trim() != rtnList[2]) {
        await $c.gus.cfAlertMsg($p, "계약거래처와 라인거래처가 상이합니다. 확인 후 다시 입력하여 주세요.");
        //ed_lineCd.setValue("";
        //break;
      }
    }
    ed_lineCd.setValue(rtnList[0]);
    ed_lineCd.hidVal = rtnList[0];
    ed_lineNm.setValue(rtnList[1]);
    ed_lineNm.hidVal = rtnList[1];
    ds_odrInfo.getCellData(0, "shpCoClntNo", rtnList[4]);
    ed_shpCoClntNm.setValue(rtnList[5]);
    ed_shpCoClntNm.hidVal = rtnList[5];
  } else {
    $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [ed_lineNm, ed_shpCoClntNm]);
    ds_odrInfo.getCellData(0, "shpCoClntNo", "");
  }
  scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
};

//매출부서
scwin.callBackSellLodept = function (rtnList) {
  if (scwin.pNoDataCloseTF == "T" && rtnList == "N/A") {
    //내부적으로 팝업프로세스 돌린 경우
    $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
    $c.gus.cfInitHidVal($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_sellLodeptCd, ed_sellLodeptNm);
  }
};

//청구부서
scwin.callBackBilgLodept = function (rtnList) {
  if (scwin.pNoDataCloseTF == "T" && rtnList == "N/A") {
    //내부적으로 팝업프로세스 돌린 경우
    $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
    $c.gus.cfInitHidVal($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
  }
};

//출발/도착 작업장 조회
scwin.callBackWrkDpt = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
  if (rtnList != null) {
    ed_dptZip.setValue(rtnList[6]);

    //scwin.f_openZipPopUpNew(1, "T");
    await scwin.f_openCommonPopUp(10, 'DPT_ZIP', 'T', 'F', 'F');
  }
  scwin.f_checkArvWrkPlCd();
};

//도착작업장
scwin.callBackWrkArv = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvWrkPlNm);
  if (rtnList != null) {
    ed_arvZip.setValue(rtnList[6]);
    //scwin.f_openZipPopUpNew(2, "T");
    await scwin.f_openCommonPopUp(10, 'ARV_ZIP', 'T', 'F', 'F');
  }
  scwin.f_checkArvWrkPlCd();
};

//본선의 선박코드
scwin.callBackVsslInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

//TS본선의 선박코드
scwin.callBackVsslTsInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_tsVsslCd, ed_tsVsslNm);
};

//상차지
scwin.callBackZipDpt = function (rtnList) {
  ed_dptZip.setValue(rtnList[0]);
  //$c.gus.cfSetReturnValue(rtnList, ed_dptZip, "");
};

//작업지
scwin.callBackZipArv = function (rtnList) {
  ed_arvZip.setValue(rtnList[0]);
  //$c.gus.cfSetReturnValue(rtnList, ed_arvZip, "");
};

//배차담당
scwin.callBackUserInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, ed_alloccarPicNm);
};

//----------------------------------------
// 본선번호(TS본번)으로 오더 특이사항 세팅
// hurrah015. 2015-06-05
// gubun - 없음: 수입/수출오더, TS: 부두간TS
//----------------------------------------
scwin.f_setOdrEtc = async function (cvsslMgntNo, gubun) {
  var cut_string = "";
  var idx = 0;
  var rmkString = txt_rmk.getValue();
  if (!$c.gus.cfIsNull($p, cvsslMgntNo)) {
    ds_odrEtc.removeAll();
    dma_comSearchSys.set("sysCd", "NcallCommonEBC");
    dma_comSearchSys.set("queryId", "retrieveVessel");
    dma_comSearchSys.set("param1", cvsslMgntNo);
    dma_comSearchSys.set("param2", gubun);
    $c.sbm.setAction($p, sbm_comSearchSys, "/ncall.cm.zz.RetrieveCommonPopupCMD.do");
    sbm_comSearchSys.userData1 = "noError";
    await $c.sbm.execute($p, sbm_comSearchSys, dma_comSearchSys.getJSON()).then(function (e) {
      if (e.responseJSON.resultDataSet[0].Code < 0) return;
      ds_odrEtc.setJSON(e.responseJSON.GAUCE);
      if (!$c.gus.cfIsNull($p, ds_odrEtc.getCellData(0, "col1"))) {
        scwin.findString = ds_odrEtc.getCellData(0, "col1");
        if (gubun == "TS") {
          txt_rmk.setValue(ta_rmk.getValue() + ds_odrEtc.getCellData(0, "col1"));
        } else {
          txt_rmk.setValue(ds_odrEtc.getCellData(0, "col1"));
        }
      }
    });
  } else {
    var indexOfFind = rmkString.search("->");
    if (gubun == "TS") {
      txt_rmk.setValue(rmkString.substring(0, parseInt(indexOfFind) - 1));
    } else {
      txt_rmk.setValue("");
    }
  }
};

//----------------------------------------
// 새우편번호조회
// hurrah015. 2013-12-26
// gubun - 1: 상차지, 2: 하차지
//----------------------------------------
scwin.f_openZipPopUpNew = async function (gubun, pClose) {
  var zip, addr;
  if (gubun == 1) {
    zip = ed_dptZip.getValue();
    addr = ed_dptDtl.getValue();
  } else if (gubun == 2) {
    zip = ed_arvZip.getValue();
    addr = ed_arvDtl.getValue();
  }
  var data = {
    zip: zip,
    mchtAddr1: addr
  };
  let opt = {
    id: "newzipcodePopup",
    popupName: "우편번호 검색",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 550,
    title: "우편번호 검색"
  };
  var rtnList = await $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", opt, data);
  if (rtnList != null) {
    if (gubun == 1) {
      ed_dptZip.setValue(rtnList.zip);
      ed_dptDtl.setValue(rtnList.addr1);
    } else if (gubun == 2) {
      ed_arvZip.setValue(rtnList.zip);
      ed_arvDtl.setValue(rtnList.addr1);
    }
  }
};

//수입본선, 수입하역, 부두간TS, 하선지경유TS(부두-->CY) 컨테이너 오더인 경우
//오더정보에서 도착지 입력시 - 컨테이너에 해당되는 도착지(To)의 범위를 벗어나는 경우 세팅 불가
/*scwin.f_checkOdrArvWrkPlCdForCntr = function(odrArvWrkPlCd) {
	for(var i=0; i<ds_cntrInfo.getTotalRow(); i++) {
		if(!$c.gus.cfIsNull(ds_cntrInfo.getCellData(i, "arvWrkPlCd"))){
			if(odrArvWrkPlCd != ds_cntrInfo.getCellData(i, "arvWrkPlCd")){
				$c.gus.cfAlertMsg(MSG_SD_WRN_004); //컨테이너목록의 도착지 정보와 상이합니다
				return false;
			}
		}
	}
	return true;
}*/

scwin.f_setCvsslMgntNoByOdrKndCd = async function (rtnList, gubun) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      if (gubun == "") {
        if (rtnList[5] == "" || rtnList[6] == "") {
          await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["본선스케줄에서 입항일시"]);
          return;
        }
        ed_cvsslMgntNo.setValue(rtnList[0]);
        //d_cvsslMgntNo.hidVal	= rtnList[0];
        ed_vsslCd.setValue(rtnList[1]); //선박코드
        ed_vsslNm.setValue(rtnList[2]); //선박명
        ed_portcnt.setValue(rtnList[9]); //선사항차
        //ed_lane.getValue()			= rtnList[10]; //항로
        ds_odrInfo.setCellData(0, "portCd", rtnList[11]); //항구코드
        scwin.hid_adptExchRtDt = rtnList[5]; //입항일자

        //수입본선, 수입하역 : 부두코드를 출발지로 세팅, 도착(입항)일시,출발(출항)일시 세팅
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선
        || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR //수입하역
        ) {
          ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
          ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명
          ica_wrkStDt.setValue(rtnList[5]); //도착(입항)일자
          ed_wrkStHh.setValue(rtnList[6]); //도착(입항)시간
          ica_wrkEndDt.setValue(rtnList[7]); //출발(출항)일자
          ed_wrkEndHh.setValue(rtnList[8]); //출발(출항)시간

          //수출본선, 수출하역 : 부두코드를 도착지로 세팅, 마감일시, 도착(입항)일시,출발(출항)일시 세팅
        } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR //수출본선
        || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR //수출하역
        ) {
          if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR) {
            //수출본선
            ed_arvWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_arvWrkPlNm.setValue(rtnList[13]); //부두코드명
            //scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'T');		
          } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR) {
            //수출하역
            ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
            ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명
          }
          ica_closeDt.setValue(rtnList[3]); //마감일자
          ed_closeHh.setValue(rtnList[4]); //마감시간
          ica_wrkStDt.setValue(rtnList[5]); //도착(입항)일자
          ed_wrkStHh.setValue(rtnList[6]); //도착(입항)시간
          ica_wrkEndDt.setValue(rtnList[7]); //출발(출항)일자
          ed_wrkEndHh.setValue(rtnList[8]); //출발(출항)시간

          //부두간TS : 부두코드를 출발지로 세팅, 도착(입항)일시,출발(마감일시)일시 세팅
        } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
          //부두간TS
          ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
          ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명
          ica_wrkStDt.setValue(rtnList[5]); //도착(입항)일자
          ed_wrkStHh.setValue(rtnList[6]); //도착(입항)시간
          await scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'F');

          //하선지 TS인 경우 confirmMsg로 확인한 후, 값 세팅
          //case1: 부두코드 --> 하선지(CY) ==> 부두코드를 출발지로 세팅
          //case2: 하선지(CY) --> 부두코드 ==> 부두코드를 도착지로 세팅
        } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
          //하선지 TS(부두-->CY)
          ed_dptWrkPlCd.setValue(rtnList[12]); //부두코드
          ed_dptWrkPlNm.setValue(rtnList[13]); //부두코드명
          await scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'F');

          //하선지 TS인 경우 confirmMsg로 확인한 후, 값 세팅
          //case1: 부두코드 --> 하선지(CY) ==> 부두코드를 출발지로 세팅
          //case2: 하선지(CY) --> 부두코드 ==> 부두코드를 도착지로 세팅
        } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_EXP_TS_ODR) {
          //하선지 TS(CY-->부두)
          ed_arvWrkPlCd.setVlalue(rtnList[12]); //부두코드
          ed_arvWrkPlNm.setVlalue(rtnList[13]); //부두코드명
        }
        await scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'F');
      } else if (gubun == "TS") {
        ed_tsCvsslMgntNo.setValue(rtnList[0]);
        ed_tsVsslCd.setValue(rtnList[1]); //선박코드
        ed_tsVsslNm.setValue(rtnList[2]); //선박명
        ed_tsPortcnt.setValue(rtnList[9]); //선사항차
        ds_odrInfo.setCellData(0, "tsPortCd", rtnList[11]); //항구코드

        //부두코드를 도착지로 세팅
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
          //부두간TS
          ed_arvWrkPlCd.setValue(rtnList[12]); //부두코드
          ed_arvWrkPlNm.setValue(rtnList[13]); //부두코드명
          ica_wrkEndDt.setValue(rtnList[3]); //도착(마감일자)일자
          ed_wrkEndHh.setValue(rtnList[4]); //도착(마감시간)시간
          await scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'F');
        }
      }
    }
  } else {
    //rtnList값이 null인 경우
    if (gubun == "") {
      scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
    } else if (gubun == "TS") {
      scwin.f_clearDataByTsCvsslMgntNo(); //TS본선관리번호와 관련한 데이터셋 Clear
    }
  }
};

//----------------------------------------
//계약거래처에 해당 되는 컨테이너 계약번호 리스트 조회
//----------------------------------------
scwin.f_retrieveCtrtNo = async function () {
  ds_cndCtrtNo.removeAll();
  //검색조건값 세팅
  let insRow = ds_cndCtrtNo.insertRow();
  ds_cndCtrtNo.setCellData(insRow, "ctrtClntNo", $c.str.trim($p, ed_ctrtClntNo.getValue())); //계약거래처
  ds_cndCtrtNo.setCellData(insRow, "bizDivCntrYn", "1"); //사업부문컨테이너여부
  ds_cndCtrtNo.setCellData(insRow, "bizDivBulkYn", ""); //사업부문벌크여부
  ds_cndCtrtNo.setCellData(insRow, "odrKndCd", scwin.odrKndCd); //사업부문벌크여부
  ds_cndCtrtNo.setCellData(insRow, "impExpDomesticClsCd", scwin.impExpClsCd); //수출입내수구분코드

  //조회해서 가지고온 계약번호가 존재할 경우 계약번호를 세팅  (17/06/07 추가, 서동원)

  if (!$c.util.isEmpty($p, ds_odrInfo.getCellData(0, "ctrtNo"))) {
    ds_cndCtrtNo.setCellData(insRow, "ctrtNo", ds_odrInfo.getCellData(0, "ctrtNo"));
  }
  sbm_retrieveCtrtNo.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieveCtrtNo);
  await scwin.sbm_retrieveCtrtNo_submitdone(rtn);
};
scwin.f_retrieveCtrtNo2 = async function () {
  //if(ds_cndCtrtNo.getTotalRow() > 0)	ds_cndCtrtNo.removeAll();

  //검색조건값 세팅
  let insRow = ds_cndCtrtNo.insertRow();
  ds_cndCtrtNo.setCellData(insRow, "ctrtClntNo", ed_bilgClntNo.getValue()); //계약거래처
  ds_cndCtrtNo.setCellData(insRow, "bizDivCntrYn", "1"); //사업부문컨테이너여부
  ds_cndCtrtNo.setCellData(insRow, "bizDivBulkYn", ""); //사업부문벌크여부
  ds_cndCtrtNo.setCellData(insRow, "odrKndCd", scwin.odrKndCd); //사업부문벌크여부
  ds_cndCtrtNo.setCellData(insRow, "impExpDomesticClsCd", scwin.impExpClsCd); //수출입내수구분코드

  sbm_retrieveCtrtNo2.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieveCtrtNo2);
  await scwin.sbm_retrieveCtrtNo2_submitdone(rtn);
};

//계약번호에 해당 되는 청구/요청거래처 정보 조회
scwin.f_retrieveClntList = async function () {
  var ctrtNo = lc_ctrtNo.getValue();
  if (ctrtNo == "") {
    //청구/요청거래처 정보 clear
    scwin.f_clearDataByClntNos();
    return;
  }

  //동적으로 변경?
  dma_cndClntNo.set("contractNumber", ctrtNo);
  $c.sbm.setAction($p, sbm_retrieveClntNo, "/ncall.ds.sd.odrmgnt.odrreg.RetrieveContractBasisCMD.do");
  sbm_retrieveClntNo.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieveClntNo);
  await scwin.sbm_retrieveClntNo_submitdone(rtn);
};

//계약번호와 관련한 DataSet초기화
scwin.f_clearDataByCtrtNo = function () {
  ds_ctrtNo.removeAll();
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_bilgClntNo]);
};

//공통팝업 열기 전에 체크 - EMEDIT onKillFocus 이벤트 발생시
//param설명 : nmObj-코드명(text), cdObj-코드(emedit), gubun1, gubun2
scwin.f_beforeOpenCommonPopUpEd = async function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
    if (gubun1 == 3) {
      //Line조회
      ed_shpCoClntNm.setValue("");
    } else if (gubun1 == 1) {
      //거래처조회
      if (ds_ctrtNo.getTotalRow() > 0) ds_ctrtNo.removeAll();
      if (ds_reqClntNo.getTotalRow() > 0) ds_reqClntNo.removeAll();
      if (ds_bilgClntNo.getTotalRow() > 0) ds_bilgClntNo.removeAll();
      $c.gus.cfInitObjects($p, [ed_ctrtClntNo, ed_ctrtClntNm, ed_reqClntNo, ed_bilgClntNo]);
    }
  } else {
    nmObj.setValue("");
    await scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
  }
};

//공통팝업 열기 전에 체크
//param설명 : nmLcObj-코드명콤보(LuxCombo), noEdObj-코드(emedit), gubun1, gubun2
scwin.f_beforeOpenCommonPopUpEdByLc = function (nmLcObj, noEdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  let noObjVal = noEdObj.getValue().trim();
  if (noObjVal == "") {
    nmLcObj.setSelectedIndex(-1);
    ;
  } else {
    nmLcObj.setSelectedIndex(-1);
    ;
    scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
  }
};

//-------------------------------------------------------------------------
// 계약작업경로  콤보 조회
//-------------------------------------------------------------------------
scwin.f_retrieveCtrtWrkPath = function (ctrtNo) {
  dma_comSearchSys.setEmptyValue();
  dma_comSearchSys.set("sysCd", "BulkOrderEBC");
  dma_comSearchSys.set("queryId", "retrieveContractWorkPathComboList");
  dma_comSearchSys.set("param1", ctrtNo);
  dma_comSearchSys.set("param2", lc_odrKndCd.getValue());
  sbm_retrieveCtrtWrkPath.userData1 = "noError";
  $c.sbm.setAction($p, sbm_retrieveCtrtWrkPath, "/cm.zz.RetrieveComboCMD.do");
  $c.sbm.execute($p, sbm_retrieveCtrtWrkPath, dma_comSearchSys.getJSON());
};
scwin.sbm_retrieveCtrtWrkPath_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (!$c.gus.cfIsNull($p, lc_ctrtNo.getValue())) {
    gr_cntrInfo.setColumnNodeSet("ctrtWrkPathSeq", "data:ds_ctrtWrkPath", "rmk", "ctrtWrkPathSeq");
    gr_cntrInfo.refreshColumn("ctrtWrkPathSeq");
  }

  /*//조회 완료 시점 후 오더 복사
  if(scwin.linkPage == "odrList") {
  if (scwin.odrCopy == "copy" ) {
  scwin.set_copy();
  }
  }*/
};

//-------------------------------------------------------------------------
// 품명,컨테이너목록에서 Size, Type, Full/Empty 조회
//-------------------------------------------------------------------------
scwin.f_retrieveGridLookup = async function () {
  sbm_comSearchGrp.userData1 = "noError";
  await dma_comSearchGrp.set("grpCd", "OP101");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrSize.setJSON(e.responseJSON.GAUCE);
  });
  await dma_comSearchGrp.set("grpCd", "OP102");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrType.setJSON(e.responseJSON.GAUCE);
  });
  await dma_comSearchGrp.set("grpCd", "OP171");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrFE.setJSON(e.responseJSON.GAUCE);
  });
  gr_cntrInfo.setReadOnly("column", "fullEmptyClsCd", false);
  rd_sellYn.setValue("1");

  //조회
  if (scwin.linkPage == "odrList") {
    ed_odrNo.setValue($c.str.trim($p, scwin.odrNo));
    scwin.f_retrieve();
  }
};

// 복사시 화면설정
scwin.set_copy = function () {
  ed_odrNo.setValue("");
  ed_wrkStHh.setValue("");
  ed_wrkEndHh.setValue("");
  ed_cvsslMgntNo.setValue("");
  ds_cntrInfo.removeAll();
  ds_cndOdrNo.removeAll();
  scwin.f_setDefaultValue();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableAllBtn($p);
  $c.gus.cfEnableObjects($p, [tbl_search, tbl_odrInfoArea, tbl_odrInfoArea2, btn_save, btn_addRow, btn_delRow, btn_cancelRow]);
  $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_updateCntrInfo, ed_alloccarPicNm]); //pcy
  scwin.f_setActiveGrid("E"); //그리드 활성화
};

//그리드활성/비활성화
scwin.f_setActiveGrid = function (gubun) {
  if (gubun == "E") {
    //활성
    gr_cntrInfo.setReadOnly("grid", false);
  } else if (gubun == "D") {
    //비활성
    gr_cntrInfo.setReadOnly("grid", true);
  }
};
scwin.f_setDefaultValue = function () {
  ds_odrInfo.modifyRowStatus(0, "C");
  ds_odrInfo.setCellData(0, "odrNo", "");
  ds_odrInfo.setCellData(0, "sellYn", "1"); //매출여부
  ds_odrInfo.setCellData(0, "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); //자가구분코드 - 당사운송
  ds_odrInfo.setCellData(0, "regBranCd", $c.util.isEmpty($p, scwin.memInfo.lobranCd) ? "" : scwin.memInfo.lobranCd); //등록점소 - 사용자 설정 물류점소
  ds_odrInfo.setCellData(0, "transCargoClsCd", "C"); //운송화물구분코드
  ds_odrInfo.setCellData(0, "impExpDomesticClsCd", scwin.impExpClsCd); //수입수출내수구분코드
  ds_odrInfo.setCellData(0, "taxnClsCd", lc_ctrtNo.getSelectedIndex()); //과세구분코드
  ds_odrInfo.setCellData(0, "chClsCd", ""); //CH구분코드
  ds_odrInfo.setCellData(0, "cntrWtCondCd", ""); //컨테이너중량조건
  ds_odrInfo.setCellData(0, "transCondCd", ""); //운송조건
  ica_wrkStDt.setValue(scwin.strCurDate);
  ica_wrkEndDt.setValue(scwin.strCurDate);
};

//화면 onLoad시 초기 데이타 setting
//gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
//gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
//1.초기화,신규모드,오더종류변경되는 경우 : 오더기본정보 세팅(f_setDefaultValue()참조)
scwin.f_set = async function (gubun1, gubun2) {
  //console.log(gubun1, gubun2);
  var v_odrKndCd = ds_odrInfo.getCellData(0, "odrKndCd");
  switch (gubun1) {
    case "INIT":
      //초기화/신규
      if (gubun2 == "INIT") {
        //초기화모드
        scwin.f_clearDataSet();
        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableAllBtn($p);
        if (v_odrKndCd == "CW") {
          $c.gus.cfEnableBtnOnly($p, [btn_search, btn_clear]);
          $c.gus.cfDisableObjects($p, [btn_confirmOdr, btn_updateCntrInfo, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, ed_alloccarPicNm, cbx_transhipYn]); //pcy				
        } else {
          $c.gus.cfEnableBtnOnly($p, [btn_search, btn_clear, cbx_transhipYn]);
          $c.gus.cfDisableObjects($p, [btn_confirmOdr, btn_updateCntrInfo, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, ed_alloccarPicNm]); //pcy
        }
        scwin.f_setActiveImgPopUp("D"); //팝업버튼 비활성화
        gr_cntrInfo.setReadOnly("grid", false);

        //fInitHidVal([tbl_odrInfoArea]);
        //cfInitObjects(lc_odrCtrlClsCd);
        lc_odrKndCd.setEventPause("onchange", true);
        lc_odrKndCd.setSelectedIndex(0);
        await scwin.lc_odrKndCd_onchange();
        lc_odrKndCd.setEventPause("onchange", false);
        //lc_odrCtrlClsCd.Index = lc_odrCtrlClsCd.IndexOfColumn("cd", "1");
        //odrCtrlClsCd	= lc_odrCtrlClsCd.getValue()OfIndex("cd",lc_odrCtrlClsCd.Index);
        //rd_wrkPathCopy.CodeValue = "0";

        scwin.statusFlag = "C"; //수정등록 flag
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
      } else if (gubun2 == "CREATE") {
        //신규모드
        ed_odrNo.setValue("");
        scwin.f_clearDataSet();
        $c.gus.cfEnableKeyData($p);
        $c.gus.cfDisableKey($p);
        $c.gus.cfEnableAllBtn($p);
        if (v_odrKndCd == "CW") {
          $c.gus.cfEnableObjects($p, [btn_save]);
          $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, ed_alloccarPicNm, cbx_transhipYn]); //pcy			  		
        } else {
          $c.gus.cfEnableObjects($p, [btn_save, cbx_transhipYn]);
          $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, ed_alloccarPicNm]); //pcy			  	
        }
        scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화
        gr_cntrInfo.setReadOnly("grid", false);
        lc_odrKndCd.focus();

        //cfInitHidVal([tbl_odrInfoArea]);
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
        lc_odrKndCd.setEventPause("onchange", true);
        lc_odrKndCd.setSelectedIndex(0);
        await scwin.lc_odrKndCd_onchange();
        lc_odrKndCd.setEventPause("onchange", false);
        //lc_odrCtrlClsCd.Index = lc_odrCtrlClsCd.IndexOfColumn("cd", "1");
        //odrCtrlClsCd	= lc_odrCtrlClsCd.getValue()OfIndex("cd",lc_odrCtrlClsCd.Index);
        //rd_wrkPathCopy.CodeValue = "0";

        scwin.statusFlag = "C"; //수정등록 flag
        scwin.retrieveYn = "N"; //조회여부
        //작업경로 초기화
        /*let insRow = ds_ctrtWrkPath.insertRow();
        ds_ctrtWrkPath.NameValue(insRow, 'ctrtWrkPathSeq', 0) ;
        ds_ctrtWrkPath.NameValue(insRow, 'rmk'           , "선택");*/
      } else if (gubun2 == "ODRKNDCD") {
        //오더종류 변경되는 경우
        if (ds_cndCtrtNo.getTotalRow() > 0) ds_cndCtrtNo.removeAll();
        if (ds_ctrtNo.getTotalRow() > 0) ds_ctrtNo.removeAll();
        if (ds_reqClntNo.getTotalRow() > 0) ds_reqClntNo.removeAll();
        if (ds_bilgClntNo.getTotalRow() > 0) ds_bilgClntNo.removeAll();
        if (ds_cntrInfo.getTotalRow() > 0) ds_cntrInfo.removeAll();
        spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
        $c.gus.cfInitObjects($p, tbl_odrInfoArea, [lc_odrKndCd]);
        $c.gus.cfInitObjects($p, tbl_odrInfoArea2);
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부

        if (v_odrKndCd == "CW") {
          $c.gus.cfDisableObjects($p, [cbx_transhipYn]);
        } else {
          $c.gus.cfEnableObjects($p, [cbx_transhipYn]);
        }
        //lc_odrCtrlClsCd.Index = lc_odrCtrlClsCd.IndexOfColumn("cd", "1");
        //odrCtrlClsCd	= lc_odrCtrlClsCd.getValue()OfIndex("cd",lc_odrCtrlClsCd.Index);
      }
      scwin.f_setDefaultValue(); //기본정보세팅
      await scwin.f_setSellAndBilgDept();
      //scwin.hid_chkMode = "create";
      break;
    case "RETRIEVE":
      //조회모드
      var odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); //확정여부
      var odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); //삭제여부
      //var odrCompleteYn	= ds_odrInfo.getCellData(0, "odrCompleteYn");	//오더완료여부

      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableAllBtn($p);
      //cfDisableObjects([btn_addRow, btn_deleteRow, btn_undoRow]);
      $c.gus.cfDisableObjects($p, [btn_updateCntrInfo, btn_save, btn_delete, btn_addRow, btn_delRow, btn_cancelRow, cbx_transhipYn]);
      $c.gus.cfEnableBtnOnly($p, [btn_search, btn_clear, btn_update, btn_dc, btn_chgWrkPath]);
      scwin.f_setActiveImgPopUp("D"); //팝업버튼 비활성화
      gr_cntrInfo.setReadOnly("grid", true);
      $c.gus.cfEnableObjects($p, [btn_updateCntrInfo]); //pcy
      if (odrDcsnYn != DsConstants.YN_YES) {
        // 오더가 확정되지 않은 경우
        $c.gus.cfEnableObjects($p, [btn_confirmOdr]);
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
      } else {
        // 오더가 확정된 경우
        $c.gus.cfDisableObjects($p, [btn_confirmOdr]);
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
      }
      //ds_odrInfo.UseChangeInfo = "false";
      break;
    case "UPDATE":
      //수정모드
      $c.gus.cfDisableObjects($p, [btn_confirmOdr]);
      scwin.odrKndCd = lc_odrKndCd.getValue(); //오더종류
      scwin.impExpClsCd = scwin.getfltrCd2(scwin.odrKndCd); //수출/입 구분코드

      var cntrInfoRows = ds_cntrInfo.getTotalRow();
      var odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); //확정여부
      var odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); //삭제여부

      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableKey($p);
      $c.gus.cfEnableAllBtn($p);
      $c.gus.cfEnableObjects($p, [btn_updateCntrInfo, btn_delete, btn_save, btn_dc, btn_chgWrkPath, btn_addRow, btn_delRow, btn_cancelRow, rd_sellYn]);
      if (v_odrKndCd == "CW") {
        $c.gus.cfEnableObjects($p, [btn_updateCntrInfo, btn_delete, btn_save, btn_dc, btn_chgWrkPath, btn_addRow, btn_delRow, btn_cancelRow]);
        $c.gus.cfDisableObjects($p, [btn_update, ed_lineCd, btn_lineCd, ed_shpCoClntNm, ed_cvsslMgntNo, btn_cvsslMgntNo, ed_lineNm, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_dptZip, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvZip, ed_alloccarPicNm, cbx_transhipYn]);
      } else {
        $c.gus.cfEnableObjects($p, [btn_updateCntrInfo, btn_delete, btn_save, btn_dc, btn_chgWrkPath, btn_addRow, btn_delRow, btn_cancelRow, cbx_transhipYn]);
        $c.gus.cfDisableObjects($p, [btn_update, ed_lineCd, btn_lineCd, ed_shpCoClntNm, ed_cvsslMgntNo, btn_cvsslMgntNo, ed_lineNm, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_dptZip, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvZip, ed_alloccarPicNm]);
      }
      scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화
      scwin.f_setActiveGrid("E"); //그리드 활성화
      //비활성화

      $c.gus.cfEnableObj($p, lc_odrKndCd, false); //오더종류코드
      $c.gus.cfEnableObj($p, ed_ctrtClntNo, false); //계약거래처코드
      $c.gus.cfEnableObj($p, ed_ctrtClntNm, false); //계약거래처명
      $c.gus.cfEnableObj($p, lc_ctrtNo, false); //계약번호 비활성화
      $c.gus.cfEnableObj($p, btn_ctrtClntNo, false); //계약거래처 PopUp버튼
      scwin.statusFlag = "U";

      //실적 발생여부를 조회하여 수정항목을 설정
      let chkVal = await scwin.f_chkResultsConfirmation();
      if (chkVal) {
        //수정불가 항목을 Disable 한다.
        //수정 불가항목 : 오더번호, 오더종류, 계약거래처, 계약번호, 대표거래처
        //			 , 출발작업장, 도착작업장, 작업시작일자, 작업시작시간, 작업종료일자, 작업종료시간
        //			 , 자가구분, 작업유형, 합적여부 (벌크오더 화면에는 해당되지 않는다.
        $c.gus.cfDisableObjects($p, [ed_dptWrkPlCd, ed_dptWrkPlNm, btn_dptWrkPlCd, ed_arvWrkPlCd, ed_arvWrkPlNm, btn_arvWrkPlCd, ica_wrkStDt, ed_wrkStHh, ica_wrkEndDt, ed_wrkEndHh]);
        $c.gus.cfDisableBtnOnly($p, [btn_delete]);
      } else {
        //컨테이너를 지정하지 않은 경우 , 자가구분코드 활성화
        var cntrAssgnYn = "N";
        for (var i = 0; i < cntrInfoRows; i++) {
          if (ds_cntrInfo.getCellData(i, "cntrNo").trim() != "") {
            cntrAssgnYn = "Y";
            break;
          }
        }
      }

      //hid_chkMode.value = "";
      scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
      break;
  }
};
scwin.f_setActiveImgPopUp = function (gubun) {
  if (gubun == "E") {
    //활성 btn_tsCvsslMgntNo, btn_tsVsslCd,		
    $c.gus.cfEnableObjects($p, [btn_ctrtClntNo, btn_reqClntNo, btn_bilgClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_cvsslMgntNo, btn_vsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd]);
  } else if (gubun == "D") {
    //비활성 btn_tsCvsslMgntNo, btn_tsVsslCd,		
    $c.gus.cfDisableObjects($p, [btn_ctrtClntNo, btn_reqClntNo, btn_bilgClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_cvsslMgntNo, btn_vsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd]);
  }
};

//실적 발생여부를 확인
scwin.f_chkResultsConfirmation = async function (gubun) {
  var cntrTotalRows = ds_cntrInfo.getTotalRow();
  if (gubun == "CNTR_ROW") {
    if (cntrTotalRows > 0) {
      if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(ds_cntrInfo.getRowPosition(), "wrkRsltsNo"))) return true; // 실적이 존재하는 경우
    }
  } else {
    if (cntrTotalRows > 0) {
      for (var i = 0; i < cntrTotalRows; i++) {
        if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) return true; // 실적이 존재하는 경우
      }
    }
  }
  return false; // 실적이 존재하지 않는 경우
};

//오더별 화면 세팅
scwin.f_setInterfaceByOdr = async function (odrKndCd, impExpClsCd) {
  if (ds_odrInfo.getCellData(0, "odrNo").trim() == "" && ds_odrInfo.getTotalRow() > 0) {
    await scwin.f_set("INIT", "ODRKNDCD"); //초기화	ODRKNDCD
  }
  //환적 화물 체크 위해 추가 황창기 cy,cp오더일때만 환적 오더 보여줘야함
  if (odrKndCd == DsConstants.ODR_KND_CD_PORT_CHANGE_ODR || odrKndCd == DsConstants.ODR_KND_CD_CY_EXP_TS_ODR || odrKndCd == DsConstants.ODR_KND_CD_RETURN_ODR) {
    //cy, cp 오더인경우 	        
    tb_transhipYn.show("");
    if (odrKndCd == DsConstants.ODR_KND_CD_CY_EXP_TS_ODR) {
      cbx_transhipYn.setValue("1");
    }
  } else {
    tb_transhipYn.hide();
  }
};

//데이터셋 지우기
scwin.f_clearDataSet = function () {
  if (ds_cndCtrtNo.getTotalRow() > 0) ds_cndCtrtNo.removeAll();
  if (ds_ctrtNo.getTotalRow() > 0) ds_ctrtNo.removeAll();
  if (ds_reqClntNo.getTotalRow() > 0) ds_reqClntNo.removeAll();
  if (ds_bilgClntNo.getTotalRow() > 0) ds_bilgClntNo.removeAll();
  if (ds_cntrInfo.getTotalRow() > 0) ds_cntrInfo.removeAll();
  if (ds_deleteOrderCond.getTotalRow() > 0) ds_deleteOrderCond.removeAll();
  if (ds_ctrtWrkPath.getTotalRow() > 0) ds_ctrtWrkPath.removeAll();
  if (ds_odrEtc.getTotalRow() > 0) ds_odrEtc.removeAll();

  //검색조건 - 오더번호
  ds_cndOdrNo.removeAll();

  //오더정보
  ds_odrInfo.removeAll();
  ds_odrInfo.setRowPosition(ds_odrInfo.insertRow());
};

//본선관리번호와 관련한 DataSet초기화(수입본선인 경우)
scwin.f_clearDataByCvsslMgntNo = function () {
  $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ica_wrkStDt, ed_wrkStHh, ica_wrkEndDt, ed_wrkEndHh, ed_portcnt, ed_vsslNm, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_dptDtl, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvDtl]);
  //cfInitHidVal([ed_cvsslMgntNo]);
  ds_odrInfo.setCellData(0, "portCd", ""); //항구코드

  if (ds_cntrInfo.getTotalRow() > 0) ds_cntrInfo.removeAll(); //오더컨테이너목록
  spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
};

//TS본선관리번호와 관련한 DataSet초기화(TS셔틀인 경우)
scwin.f_clearDataByTsCvsslMgntNo = function () {
  $c.gus.cfInitObjects($p, [ed_tsCvsslMgntNo, ed_tsVsslCd, ed_tsVsslNm, ed_tsPortcnt]);
  //cfInitHidVal([ed_tsCvsslMgntNo]);
  ds_odrInfo.setCellData(0, "tsPortCd", ""); //항구코드

  //부두간TS인 경우, 도착지값 삭제
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
    $c.gus.cfInitObjects($p, [ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvDtl]);
    //cfInitHidVal([ ed_arvWrkPlCd,	ed_arvWrkPlNm,		ed_arvDtl ]);
  }
};

//신규/수정 저장
scwin.f_save = async function () {
  //환적 체크값 세팅 황창기 20150317 CR오더 추가
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_EXP_TS_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_PORT_CHANGE_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_RETURN_ODR) {
    //ct오더
    ds_odrInfo.setCellData(0, "transhipYn", cbx_transhipYn.getValue());
  } else {
    ds_odrInfo.setCellData(0, "transhipYn", "0");
  }
  let chkVal;
  if (scwin.statusFlag == "U") {
    //수정
    if ($c.data.isModified($p, ds_odrInfo) || $c.data.isModified($p, ds_cntrInfo)) {
      //ds_cntrInfo.UseChangeInfo = true;
      if ($c.util.isEmpty($p, lc_ctrtNo.getValue())) {
        // == "선택" 
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
        return false;
      }
      if ($c.util.isEmpty($p, ed_odrNo.getValue())) return;
      chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea, tbl_odrInfoArea2], null, true);
      if (!chkVal) return;
      chkVal = await $c.gus.cfValidate($p, [gr_cntrInfo], null, true);
      if (!chkVal) return;
      if (chkVal) {
        //오더기본정보-상,하차 일,시간체크
        chkVal = await scwin.f_chkDate(ica_wrkStDt.getValue(), ica_wrkEndDt.getValue());
        if (!chkVal) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차일자", "하차일자 이전"]); //"@은(는) @이어야 합니다."
          ica_wrkStDt.focus();
          return false;
        }
        chkVal = await scwin.f_chkTime(ica_wrkStDt.getValue(), ed_wrkStHh.getValue(), ica_wrkEndDt.getValue(), ed_wrkEndHh.getValue());
        if (!chkVal) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차시간", "하차시간 이전"]); //"@은(는) @이어야 합니다."
          ica_wrkStDt.focus();
          return false;
        }
        //컨테이너목록이 한건도 입력되지 않은 경우

        if (ds_cntrInfo.getTotalRow() == 0) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["컨테이너목록"]); //@은(는) 필수 입력 항목입니다
          return false;
        }
        /*
        if (f_chkCntrNo()==false) {//컨테이너번호 입력확인
        	await cfAlertMsg(MSG_CM_ERR_002, ["컨테이너번호"]); //@은(는) 필수 입력 항목입니다
        	return false;
        }
        */

        chkVal = await scwin.f_validate();
        if (!chkVal) return;
        let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
        if (conf) {
          //저장하시겠습니까?
          scwin.f_setValueBeforeSave(); //저장하기전 데이터 세팅
          scwin.f_updateByOdrKndCd(); //오더종류별 저장
        }
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
    }
  } else if (scwin.statusFlag == "C") {
    //신규

    if ($c.data.isModified($p, ds_odrInfo)) {
      //ds_cntrInfo.UseChangeInfo = false;

      if ($c.util.isEmpty($p, lc_ctrtNo.getValue())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
        return false;
      }
      chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea, tbl_odrInfoArea2], null, true);
      if (!chkVal) return;
      chkVal = await $c.gus.cfValidate($p, [gr_cntrInfo], null, true);
      //console.log("gr_cntrInfo");
      if (!chkVal) return;

      //chkVal = await $c.gus.cfValidate([tbl_odrInfoArea, tbl_odrInfoArea2, gr_cntrInfo]);
      if (chkVal) {
        //오더기본정보-상,하차 일,시간체크
        chkVal = await scwin.f_chkDate(ica_wrkStDt.getValue(), ica_wrkEndDt.getValue());
        if (!chkVal) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차일자", "하차일자 이전"]); //"@은(는) @이어야 합니다."
          ica_wrkStDt.focus();
          DCommonEBC;
          return false;
        }
        chkVal = await scwin.f_chkTime(ica_wrkStDt.getValue(), ed_wrkStHh.getValue(), ica_wrkEndDt.getValue(), ed_wrkEndHh.getValue());
        if (!chkVal) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차시간", "하차시간 이전"]); //"@은(는) @이어야 합니다."
          ica_wrkStDt.focus();
          return false;
        }
        chkVal = await scwin.f_validate();
        if (!chkVal) return;
        let conf = await $c.win.confirm($p, MSG_CM_CRM_001);
        if (conf) {
          //저장하시겠습니까?
          scwin.f_setValueBeforeSave(); //저장하기전 데이터 세팅
          scwin.f_registByOdrKndCd(); //오더종류별 저장
        }
      }
    } else {
      if ($c.data.isModified($p, ds_cntrInfo)) {
        let chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea], null, true);
        if (chkVal) return;
      } else {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
      }
    }
  }
};

//컨테이너 번호 입력 확인
/*scwin.f_chkCntrNo = function() {
	var cntrRows = ds_cntrInfo.getTotalRow();
	for(var i=0; i<cntrRows; i++) {
		if (ds_cntrInfo.getCellData(i,  "cntrNo") == "") {
			return false;
		}
	}
}*/

//컨테이너 작업경로 입력 확인
scwin.f_setWrkPath = function () {
  var cntrRows = ds_cntrInfo.getTotalRow();
  var pathSeq = "";
  for (var i = 0; i < cntrRows; i++) {
    if (ds_cntrInfo.getCellData(i, "ctrtWrkPathSeq") != "0" && ds_cntrInfo.getCellData(i, "ctrtWrkPathSeq") != "") {
      pathSeq = ds_cntrInfo.getCellData(i, "ctrtWrkPathSeq");
      break;
    }
  }
  if (pathSeq == "0" || pathSeq == "") {
    return false;
  } else {
    for (var i = 0; i < cntrRows; i++) {
      if (ds_cntrInfo.getCellData(i, "ctrtWrkPathSeq") == "0" || ds_cntrInfo.getCellData(i, "ctrtWrkPathSeq") == "") {
        ds_cntrInfo.setCellData(i, "ctrtWrkPathSeq", pathSeq);
      }
    }
  }
};

//오더별로 저장하기전에 데이터셋value들 재세팅
scwin.f_setValueBeforeSave = function () {
  var lineCd = ds_odrInfo.getCellData(0, "lineCd"); //Line코드
  var shpCoClntNo = ds_odrInfo.getCellData(0, "shpCoClntNo"); //선사거래처코드
  var sellYn = ds_odrInfo.getCellData(0, "sellYn"); //매출여부

  //오더기본정보 세팅
  ds_odrInfo.setCellData(0, "crcCd", ds_ctrtNo.getCellData(lc_ctrtNo.getSelectedIndex() - 1, "crcCd")); //계약번호에 해당하는 통화코드
  ds_odrInfo.setCellData(0, "taxnClsCd", scwin.getfltrCd2(lc_odrKndCd.getValue()));
  ds_odrInfo.setCellData(0, "adptExchRtDt", scwin.hid_adptExchRtDt);
  ds_odrInfo.setCellData(0, "selfClsCd", "LI");
  ds_odrInfo.setCellData(0, "realMchtClntNo", ds_odrInfo.getCellData(0, "ctrtClntNo")); //실화주거래처번호 계약거래처로 셋팅
  ds_odrInfo.setCellData(0, "regBranCd", $c.util.isEmpty($p, scwin.memInfo.lobranCd) ? "" : scwin.memInfo.lobranCd); //등록점소 - 사용자 설정 물류점소
};
scwin.getfltrCd2 = function (value) {
  let list = ds_fltrCd2.getMatchedJSON("cd", value);
  if (list.length > 0) {
    return list[0].fltrCd2;
  }
  return null;
};

//오더종류별 등록
scwin.f_registByOdrKndCd = function () {
  ds_cndOdrNo.removeAll();
  //데이터셋을 옮겨 등록
  sbm_regist.userData1 = "noError";
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR) {
    //컨테이너수출본선오더(C3)
    $c.sbm.setAction($p, sbm_regist, "/ncall.tn.sd.odrmgnt.cntrodrreg.RegistContainerExportCarryingVesselOrderCMD.do");
    $c.sbm.execute($p, sbm_regist);
  } else {
    //포트체인지(CP), 리턴(CR), 컨테이너수출TS(CW)
    $c.sbm.setAction($p, sbm_regist, "/ncall.tn.sd.odrmgnt.cntrodrreg.RegistContainerExportCPCRCWOrderCMD.do");
    $c.sbm.execute($p, sbm_regist);
  }
};

//오더 수정 저장
scwin.f_updateByOdrKndCd = function () {
  var cntrRows = ds_cntrInfo.getTotalRow();
  if (
  //ds_cntrInfo.IsUpdated == true ||
  ds_odrInfo.getOriginalCellData(0, "sellLodeptCd") != ds_odrInfo.getCellData(0, "sellLodeptCd") || ds_odrInfo.getOriginalCellData(0, "bilgLodeptCd") != ds_odrInfo.getCellData(0, "bilgLodeptCd") || ds_odrInfo.getOriginalCellData(0, "dptWrkPlCd") != ds_odrInfo.getCellData(0, "dptWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "arvWrkPlCd") != ds_odrInfo.getCellData(0, "arvWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "wrkStDt") != ds_odrInfo.getCellData(0, "wrkStDt") || ds_odrInfo.getOriginalCellData(0, "wrkEndDt") != ds_odrInfo.getCellData(0, "wrkEndDt") || ds_odrInfo.getOriginalCellData(0, "wrkStHh") != ds_odrInfo.getCellData(0, "wrkStHh") || ds_odrInfo.getOriginalCellData(0, "wrkEndHh") != ds_odrInfo.getCellData(0, "wrkEndHh")) {
    for (var i = 0; i < cntrRows; i++) {
      if (ds_cntrInfo.getRowStatus(i) == "R") {
        ds_cntrInfo.getCellData(i, "dptWrkPlNm", "update");
        ds_cntrInfo.modifyRowStatus(i, "U");
      }
    }
  }
  ds_cndOdrNo.removeAll();
  sbm_update.userData1 = "noError";
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR) {
    //수출본선컨테이너오더 
    $c.sbm.setAction($p, sbm_update, "/ncall.tn.sd.odrmgnt.cntrodrreg.UpdateContainerExportCarryingVesselOrderCMD.do");
    $c.sbm.execute($p, sbm_update);
  } else {
    //그외 셔틀컨테이너
    $c.sbm.setAction($p, sbm_update, "/ncall.tn.sd.odrmgnt.cntrodrreg.UpdateContainerExportCPCRCWOrderCMD.do");
    $c.sbm.execute($p, sbm_update);
  }
};

//유효성 확인
scwin.f_validate = async function () {
  var cntrInfoRows = ds_cntrInfo.getTotalRow(); //컨테이너목록 row수
  var odrLineCd = ed_lineCd.getValue().trim(); //오더정보의 Line코드
  //alert(ds_cntrInfo.NameValue(i, "currPosCd").substr(0,2));
  //컨테이너정보 validation체크

  for (var i = 0; i < cntrInfoRows; i++) {
    if (ds_cntrInfo.getRowStatus(i) != "D" && $c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
      //삭제건이 아니고, 실적이 일어난 경우가 아닌 경우만 해당
      //라인코드 체크 - 검색기 오더는 제외
      if (scwin.odrKndCd != DsConstants.ODR_KND_CD_EXAMINE_ODR //검색기
      && scwin.odrKndCd != DsConstants.ODR_KND_CD_TS_ODR && !$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "cntrNo")) && odrLineCd != ds_cntrInfo.getCellData(i, "lineCd")) {
        //alert("export::"+ds_cntrInfo.ExportData(1,ds_cntrInfo.CountRow,true));
        //alert("export::"+ds_cntrInfo.getValue());
        let msg = $c.data.getMessage($p, MSG_CM_ERR_031, "컨테이너목록", i);
        msg += $c.data.getMessage($p, MSG_CM_ERR_061, "Line코드", "오더정보와 같은 Line코드");
        await $c.win.alert($p, msg); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."	
        return false;
      }
      // 운영에는 반영되어있지만 CVS에 싱크가 안된부분 추가. 20131226-------------------
      //alert(ds_cntrBasisInfo.NameValue(i, "cxOdrNo"));
      // 미청구된 검색기 ,파출검사료 체크
      if (!$c.gus.cfIsNull($p, ds_cntrBasisInfo.getCellData(i, "cxOdrNo"))) {
        if (ds_cntrBasisInfo.getCellData(i, "cxClntNo") == "999906") {
          await $c.win.alert($p, "미청구된 검색기 오더가 존재합니다. 검색기 오더는 :" + ds_cntrBasisInfo.getCellData(i, "cxOdrNo") + "청구거래처를 고쳐야 오더등록이 가능합니다.!!!");
          return false;
        } else {
          await $c.win.alert($p, "미청구된 검색기 오더가 존재합니다. 검색기 오더는 :" + ds_cntrBasisInfo.getCellData(i, "cxOdrNo"));
        }
      }
      if (!$c.gus.cfIsNull($p, ds_cntrBasisInfo.getCellData(i, "ciOdrNo"))) {
        if (ds_cntrBasisInfo.getCellData(i, "ciClntNo") == "999906") {
          await $c.win.alert($p, "미청구된 검색기 오더가 존재합니다. 파출검사 오더는 :" + ds_cntrBasisInfo.getCellData(i, "cxOdrNo") + "청구거래처를 고쳐야 오더등록이 가능합니다.!!!");
          return false;
        } else {
          await $c.win.alert($p, "미청구된 파출검사 오더가 존재합니다. 파추검사 오더는 :" + ds_cntrBasisInfo.getCellData(i, "cxOdrNo"));
        }
      }
      // 운영에는 반영되어있지만 CVS에 싱크가 안된부분 추가. 20131226-------------------
    } //if(gr_cntrInfo.RowStatus(i) != 2){ //삭제건이 아닌 경우의 끝				
    var curPos = ds_cntrInfo.getCellData(i, "currPosCd");
    if (ds_cntrInfo.getRowStatus(i) != "D" && scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR && ds_cntrInfo.getCellData(i, "fullEmptyClsCd") == "F" && (ds_cntrInfo.getCellData(i, "cntrTypCd") == "RF" || ds_cntrInfo.getCellData(i, "cntrTypCd") == "RH") && ds_cntrInfo.getCellData(i, "cyEmptyYn") == "Y") {
      let conf = await $c.win.confirm($p, i + "번째 [" + ds_cntrInfo.getCellData(i, "cntrNo") + "]는 CY에 장치중인 Empty 컨테이너입니다\n계속 진행하시겠습니까?");
      if (!conf) {
        gr_cntrInfo.setFocusedCell(i, "fullEmptyClsCd");
        return false;
      }
    }
  }
  return true;
};

//수정
scwin.f_update = function () {
  scwin.f_set("UPDATE"); //수정모드
};

//신규
scwin.f_create = async function () {
  await scwin.f_set("INIT", "CREATE"); //신규모드

  //RPA 아이디  신규버튼 클릭 시 고정값 셋팅
  if ("811160" == scwin.memInfo.userId) {
    /*
    오더종류 : [CP]PORT CHANGE
    계약처 : 317034 청암물류 주식회사
    계약번호 : C1105000982(정희태:~20271231:KR)
    청구처 : 317034 청암물류 주식회사
    요청처 : 317034 청암물류 주식회사
    매출부서 : 6A2 (부산운송)
    청구부서 : 6A1 (부산관리/영업)
    매출/CT : YES
    본선번호 : D2405033
    선박명 : BASD (CMA CGM VITOR)
    상차지 : 6P90 (DGT) (46767)
    */

    lc_odrKndCd.setValue("CP");
    ed_ctrtClntNo.setValue("317034");
    await scwin.f_openCommonPopUp(1, 'CTRT', 'T', 'F', 'F');
    lc_ctrtNo.setValue("C1105000982");
    ed_sellLodeptCd.setValue("6A2");
    await scwin.f_openCommonPopUp(2, 'SELL', 'T', 'F', 'F');
    ed_bilgLodeptCd.setValue("6A1");
    await scwin.f_openCommonPopUp(2, 'BILG', 'T', 'F', 'F');
    rd_sellYn.setValue("1");
    ed_cvsslMgntNo.setValue("D2405033"); // 팝업버튼 클릭 시 라인코드 입력 필요, 팝업 선택 시 도착지 입력하라고 팝업뜸
    ed_vsslCd.setValue("BASD"); //본선관리번호 팝업호출하면 기본셋팅되긴함
    await scwin.f_openCommonPopUp(8, '', 'T', 'F', 'F');
    ed_dptWrkPlCd.setValue("6P90");
    await scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'F');
  }
};

//삭제
scwin.f_delete = async function () {
  let msg = $c.data.getMessage($p, MSG_CM_CRM_008, ds_odrInfo.getCellData(0, "odrNo").trim());
  let conf = await $c.win.confirm($p, "오더번호 : " + msg);
  if (conf) {
    if (ds_deleteOrderCond.getTotalRow() > 0) {
      ds_deleteOrderCond.removeAll();
    }
    let insRow = ds_deleteOrderCond.insertRow();
    ds_deleteOrderCond.setCellData(insRow, "odrNo", ds_odrInfo.getCellData(0, "odrNo").trim());
    ds_deleteOrderCond.setCellData(insRow, "odrKndCd", scwin.odrKndCd);
    ds_deleteOrderCond.setCellData(insRow, "impExpDomesticClsCd", scwin.impExpClsCd);
    ds_cndCtrtNo.removeAll();
    sbm_deleteOrderCond.userData1 = "noError";
    $c.sbm.execute($p, sbm_deleteOrderCond);
  }
};

//오더확정
scwin.f_confirmOrder = async function () {
  //작업경로가 지정된 경우만 오더확정 가능
  let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_010, "오더확정"));
  if (conf) {
    if (ds_odrInfo.getTotalRow() > 0 && ds_cntrInfo.getTotalRow() > 0) {
      ds_odrInfo.setCellData(0, "odrDcsnYn", 1);

      /*tr_update.KeyValue = "JSP(I:IN_DS1=ds_odrInfo)";
      tr_update.Action = "/tn.sd.odrmgnt.cntrodrreg.ConfirmOrderCMD.do";
      tr_update.Post();*/

      const searchCodeGrpOption = {
        id: "tr_update",
        action: "/ncall.tn.sd.odrmgnt.cntrodrreg.ConfirmOrderCMD.do",
        ref: 'data:json,{"id":"ds_odrInfo","key":"IN_DS1"}',
        submitDoneHandler: scwin.searchCodeGrpCallback,
        isProcessMsg: false
      };
      $c.sbm.executeDynamic($p, searchCodeGrpOption);
    } else {
      $c.win.alert($p, "등록된 컨테이너 정보가 없습니다.");
    }
  }
};
scwin.searchCodeGrpCallback = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  $c.gus.cfAlertMsg($p, MSG_CM_INF_003); // 성공적으로 수정하였습니다
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, "odrNo"));
  scwin.f_retrieve();
};

//시작일자, 종료일자 유효성 체크
scwin.f_chkDate = async function (strDate, endDate) {
  var differDays = $c.date.diffDate($p, strDate, endDate);
  if (differDays >= 0) {
    return true;
  } else {
    return false;
  }
};

//시작시간, 종료시간 유효성 체크
scwin.f_chkTime = async function (strDate, strTime, endDate, endTime) {
  var differTime = Number(endDate + endTime.replaceAll(":", "")) - Number(strDate + strTime.replaceAll(":", ""));
  if (differTime >= 0) {
    return true;
  } else {
    return false;
  }
};

//출발일시, 도착일시 값이 없는 경우, 다시 세팅
scwin.f_setDataSetDtHh = function (ds, row) {
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkStDt"))) ds.setCellData(row, "wrkStDt", ica_wrkStDt.getValue().trim()); //출발일자
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkStHh"))) ds.setCellData(row, "wrkStHh", ed_wrkStHh.getValue().trim()); //출발시간
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkEndDt"))) ds.setCellData(row, "wrkEndDt", ica_wrkEndDt.getValue().trim()); //도착일자
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkEndHh"))) ds.setCellData(row, "wrkEndHh", ed_wrkEndHh.getValue().trim()); //도착시간
};

//청구/요청거래처/실화주거래처 정보 clear
scwin.f_clearDataByClntNos = function () {
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_bilgClntNo]);
  $c.gus.cfInitHidVal($p, [ed_reqClntNo, ed_bilgClntNo]);
};

//오더등록현황 화면으로 다시 돌아가기
scwin.f_odrRegIfno = function () {
  var paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  $c.win.openMenu($p, "오더등록현황", "/ui/tn/sd/odrmgnt/odrregprscond/tn_203_01_02b.xml", "tn_203_01_02b.jsp", paramObj, {
    "openAction": "exist"
  });
};

//작업경로 화면으로 이동하기
scwin.f_chgWrkPath = function () {
  var paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  $c.win.openMenu($p, "작업경로", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_08b.xml", "tn_201_02_08b.jsp", paramObj, {
    "openAction": "exist"
  });
};

//컨테이너상세 화면으로 이동하기
scwin.f_openPopUpUpdateCntrInfo = function () {
  var paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  $c.win.openMenu($p, "컨테이너 상세", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_11b.xml", "tn_201_02_11b.jsp", paramObj, {
    "openAction": "exist"
  });
};

//컨테이너상세ETC 화면으로 이동하기
scwin.f_openPopUpUpdateCntrInfoEtc = function () {
  var arrParam = new Array(1);
  var rtnList = new Array();
  arrParam[0] = ds_odrInfo.getCellData(0, "odrNo").trim(); //오더번호

  var opts = {
    id: "tn_201_02_12b",
    popupName: "컨테이너정보수정",
    popupTitle: "컨테이너정보",
    modal: true,
    type: "browserPopup",
    width: 1100,
    height: 500
  };
  rtnList = $c.win.openPopup($p, "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_12b.xml", opts, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "N/A" && rtnList[1] == "Y") {
      scwin.f_retrieve();

      //탭선택시 재조회
      //parent.iFrame1.hid_chkReterieve.value = "";				
    }
  }
};

//할인할증 화면으로 이동하기
scwin.f_dc = function () {
  var paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  $c.win.openMenu($p, "할인할증", "/ui/tn/ds/sd/odrreg/sd_402_01_25b.xml", "sd_402_01_25b.jsp", paramObj, {
    "openAction": "exist"
  });
};

//행추가
scwin.f_addRow1 = function () {
  let insRow = ds_cntrInfo.insertRow();
  ds_cntrInfo.setRowPosition(insRow);
  //ds_cntrInfo.setCellData(insRow, "cntrSeq"       , insRow+1);
  //ds_cntrInfo.setCellData(insRow, "wrkRsltsNo"    , "");
  gr_cntrInfo.setFocusedCell(insRow, 1, false);
};
scwin.f_addRow = function (gubun) {
  /*if(gubun == "A"){
  	let insRow = ds_cntrInfo.insertRow();
  	ds_cntrInfo.setCellData(insRow, "cntrSizCd"     , lc_sizClsCd.getValue().trim());
  	ds_cntrInfo.setCellData(insRow, "cntrTypCd"     , lc_typClsCd.getValue().trim());
  	ds_cntrInfo.setCellData(insRow, "fullEmptyClsCd", "F");
  	ds_cntrInfo.setCellData(insRow, "wt"            , ds_cntrInfo.getCellData(insRow-1, "wt"));
  } else if(gubun == "B"){
  	
  }*/

  for (var i = 0; i < parseInt(ed_rowMake.getValue().trim()); i++) {
    let insRow = ds_cntrInfo.insertRow();
    ds_cntrInfo.setRowPosition(insRow);
    ds_cntrInfo.setCellData(insRow, "cntrSizCd", lc_sizClsCd.getValue().trim());
    ds_cntrInfo.setCellData(insRow, "cntrTypCd", lc_typClsCd.getValue().trim());
    ds_cntrInfo.setCellData(insRow, "fullEmptyClsCd", lc_efClsCd.getValue().trim());
    ds_cntrInfo.setCellData(insRow, "wt", ds_cntrInfo.getCellData(insRow - 1, "wt"));
    gr_cntrInfo.setFocusedCell(insRow, 1, false);
  }
};

//행삭제
scwin.f_deleteRow = async function () {
  var cntrInfoRows = ds_cntrInfo.getTotalRow();
  var arrCntrNo = new Array();
  var idx = 0;
  var alertStr = "";
  let rowPosition = ds_cntrInfo.getRowPosition();
  let isLast = rowPosition == cntrInfoRows - 1;
  if (cntrInfoRows > 0) {
    for (var i = cntrInfoRows; i > -1; i--) {
      let rowStatus = ds_cntrInfo.getRowStatus(i);
      if (!isLast && i != rowPosition) {
        continue;
      }
      if (rowStatus == "C") {
        if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
          //실적일어나지 않은 경우만 해당
          ds_cntrInfo.removeRow(i);
        } else {
          arrCntrNo[idx] = ds_cntrInfo.getCellData(i, "cntrNo");
          idx = idx + 1;
        }
      }
    }
    if (arrCntrNo.length > 0) {
      for (var i in arrCntrNo) {
        if (!$c.gus.cfIsNull($p, arrCntrNo[i])) {
          if (i == 0) {
            alertStr = alertStr + "\n[컨테이너번호]\n";
            alertStr = alertStr + arrCntrNo[i];
          } else {
            alertStr = alertStr + "," + arrCntrNo[i];
          }
        }
      }
      alertStr = "현재 선택한 컨테이너 중에서 \n" + alertStr + "\n\n총 " + arrCntrNo.length + " 건의 컨테이너는 실적이 일어난 건이므로 삭제할 수 없습니다.";
      await $c.gus.cfAlertMsg($p, alertStr);
    }
    spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
  }
};

//행취소
scwin.f_undoRow = function () {
  let rowIndex = ds_cntrInfo.getRowPosition();
  if (ds_cntrInfo.getRowStatus(rowIndex) == "C") {
    ds_cntrInfo.removeRow(rowIndex);
  } else {
    ds_cntrInfo.undoRow(rowIndex);
  }
};

//컨테이너번호에 해당하는 컨테이너정보 세팅
scwin.f_setCntrInfo = function (gubun, msgYn) {
  //수입본선이 아닌 경우
  if (gubun == 1) {
    scwin.f_setDataSetValue("DS2", ARR_CNTR_COLUMN, ds_cntrInfo, ds_cntrBasisInfo);
  } else if (gubun == 2) {
    scwin.f_setDataSetValue("DS1", ARR_CNTR_COLUMN, ds_cntrInfo);

    //세팅
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "wt", 0);
  }
};

//DataSet에 값세팅하기
scwin.f_setDataSetValue = function (gubun, arrColumn, ds1, ds2) {
  if (gubun == "DS2") {
    //dataset이 두개 인경우
    for (var i in arrColumn) {
      if (arrColumn[i] != null) {
        ds1.setCellData(ds1.getRowPosition(), arrColumn[i], ds2.getCellData(0, arrColumn[i]));
      }
    }
  } else if (gubun == "DS1") {
    //dataset이 한개인 경우
    for (var i in arrColumn) {
      if (arrColumn[i] != null) {
        if (ds1.ColumnType(ds1.ColumnIndex(arrColumn[i])) == 1) {
          ds1.setCellData(ds1.getRowPosition(), arrColumn[i], "");
        } else if (ds1.ColumnType(ds1.ColumnIndex(arrColumn[i])) == 2 || ds1.ColumnType(ds1.ColumnIndex(arrColumn[i])) == 3) {
          ds1.setCellData(ds1.getRowPosition(), arrColumn[i], 0);
        }
      }
    }
  }
};

/*컨테이너목록 그리드에서 컨테이너번호 입력시 컨테이너 기본정보 조회*/
scwin.f_retrieveCntrBasisInfo = async function (cntrNo) {
  let rtn;
  sbm_retrieveCntrBasisInfo.userData1 = "noError";
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_EXP_TS_ODR) {
    //수출본선컨테이너오더, 수출TS컨테이너오더
    sbm_retrieveCntrBasisInfo.action = "/ds.sd.odrmgnt.odrreg.RetrieveExportCarryingVesselContainerCMD.do?containerNumber=" + cntrNo + "&odrKndCd=" + scwin.odrKndCd;
    rtn = await $c.sbm.execute($p, sbm_retrieveCntrBasisInfo);
  } else {
    //일반컨테이너오더 및 셔틀컨테이너
    sbm_retrieveCntrBasisInfo.action = "/ds.sd.odrmgnt.odrreg.RetrieveExportCarryingVesselContainerCMD.do?containerNumber=" + cntrNo;
    rtn = await $c.sbm.execute($p, sbm_retrieveCntrBasisInfo);
  }
  await scwin.sbm_retrieveCntrBasisInfo_submitdone(rtn);
};

// 매출부서, 청구부서 세팅
scwin.f_setSellAndBilgDept = async function () {
  var deptCd1 = $c.util.isEmpty($p, scwin.memInfo.lobranCd) ? "" : scwin.memInfo.lobranCd;
  var orgdeptCd1 = deptCd1;
  var deptCd2 = ""; //오더종류에 따른 셋째자리 결정
  var deptCd = ""; //부서코드

  if (deptCd1.length > 2) deptCd1 = deptCd1.substr(0, 2);else return;
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
    //수입본선컨테이너오더
    deptCd2 = "3";
    deptCd = deptCd1 + deptCd2;
  } else {
    deptCd2 = "2";
    deptCd = deptCd1 + deptCd2;
  }

  //청구부서 세팅 - 부산은 6A3셋팅함.
  if (orgdeptCd1 == "6AA") {
    if (deptCd2 == "4") {
      ed_bilgLodeptCd.setValue(deptCd);
    } else {
      ed_bilgLodeptCd.setValue("6A1");
    }
  } else {
    ed_bilgLodeptCd.setValue(deptCd);
  }
  await scwin.f_openCommonPopUp(2, 'BILG', 'T', 'F', 'F');
};

//retrieve후에 품명정보의 입력수량 계산하기
//gubun == "Y" 인 경우, return false를 날림
//gubun == "N" 인 경우, 조회후, 수량계산하기 위하여 사용, validation체크하지 않고, 오류메세지 나타나지 않게 함.
scwin.f_calInputQty = async function (gubun) {
  let chkVal;
  //수량계산하기 전에 validation 체크
  if (gubun != "N") {
    chkVal = await scwin.f_validateCommAndCntr();
    if (!chkVal) return;
  }
  var cntrRows = ds_cntrInfo.getTotalRow();
  //var commRows = ds_commInfo.CountRow;

  //수입/수출하역이 아닌 경우
  if (!(scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR)) {
    //그 외의 경우에 해당
    //품명목록의 입력수량 계산
    for (var i = 0; i < cntrRows; i++) {
      if (ds_cntrInfo.getRowStatus(i) != "D") {
        //삭제건이 아닌 경우
        var sameYn = "N";
        var curPos = ds_cntrInfo.getCellData(i, "currPosCd");
        if (gubun != "N" && scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR && ds_cntrInfo.getCellData(i, "fullEmptyClsCd") == "F" && (ds_cntrInfo.getCellData(i, "cntrTypCd") == "RF" || ds_cntrInfo.getCellData(i, "cntrTypCd") == "RH") && ds_cntrInfo.getCellData(i, "cyEmptyYn") == "Y") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + " 컨테이너는 " + ds_cntrInfo.getCellData(i, "cntrSizCd") + ds_cntrInfo.getCellData(i, "cntrTypCd") + ds_cntrInfo.getCellData(i, "fullEmptyClsCd") + "입니다. 컨테이너번호를 확인하세요.", ["컨테이너목록", i]); //@의 @번째 데이터에서
        }
        if (gubun == "Y") return false;
      }
    }
  } //수입/수출하역이 아닌 경우, if의 끝

  return true;
};

/* function 설명 : f_calInputQty()하기전에 유효성 확인
 * (처리규칙)
 * 1.수출일반
 *   1.1.size,type,fullEmpty,중량,온도,dry를 체크
 *   1.2.type이 'RF'인 경우 : 온도 또는 dry 중 하나를 꼭 체크해야함
 * 2.그 외 오더
 *   2.1.sie,type,fullEmpty 체크
 *   2.2.컨테이너번호 필수항목 체크
 *     2.2.1.필수항목 체크 제외 - on-hire, off-hire, empty position(컨테이너 미지정 가능한 오더)
 * PARAM : commInfoRows	= ds_commInfo.CountRow
 * PARAM : cntrInfoRows	= ds_cntrInfo.CountRow
 */
scwin.f_validateCommAndCntr = async function () {
  var cntrInfoRows = ds_cntrInfo.getTotalRow();

  /******* 컨테이너정보 - 중복 체크 *******/
  for (var i = 0; i < cntrInfoRows; i++) {
    //삭제건이 아닌 경우만 해당
    if (ds_cntrInfo.getRowStatus(i) != "D") {
      var cntrNo = ds_cntrInfo.getCellData(i, "cntrNo").trim();
      var cntrSizCd = ds_cntrInfo.getCellData(i, "cntrSizCd").trim();
      var cntrTypCd = ds_cntrInfo.getCellData(i, "cntrTypCd").trim();
      var fullEmptyClsCd = ds_cntrInfo.getCellData(i, "fullEmptyClsCd").trim();

      /* 컨테이너번호 필수항목 체크
       */
      if ($c.gus.cfIsNull($p, cntrNo)) {
        //컨테이너번호 지정해야하는 오더
        let msg = $c.data.getMessage($p, MSG_CM_ERR_031, "컨테이너목록", i);
        msg += $c.data.getMessage($p, MSG_CM_ERR_002, "컨테이너번호");
        await $c.win.alert($p, msg); //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다.
        return false;
      }

      //컨테이너번호 중복 체크
      for (var j = 0; j < cntrInfoRows; j++) {
        if (i != j) {
          //같은 row인 경우는 제외
          if (ds_cntrInfo.getRowStatus(j) != "D") {
            //삭제건이 아닌 경우만 해당
            var tempCntrNo = ds_cntrInfo.getCellData(j, "cntrNo").trim();

            //컨테이너 중복 체크
            if (!$c.gus.cfIsNull($p, cntrNo)) {
              if (cntrNo == tempCntrNo) {
                let msg = $c.data.getMessage($p, MSG_CM_ERR_031, "컨테이너목록", i);
                msg += $c.data.getMessage($p, MSG_CM_ERR_032, "컨테이너번호");
                await $c.win.alert($p, msg); //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
                return false;
              }
            }
          }
        }
      } //for(j=1; j<=cntrInfoRows; j++)의 끝
    } //if(ds_cntrInfo.RowStatus(i) != 2)의 끝
  } //for(i=1; i<=cntrInfoRows; i++)의 끝

  return true;
};

//컨테이너번호 유효성 체크
scwin.f_checkCntrNo = async function (parCntrNo) {
  var cntrNo = parCntrNo.trim();

  //불필요할 수 있다.
  if (cntrNo != "") {
    if (!dscommon.cf_CheckCntrNo(cntrNo)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
    }
  }
};

//// README : 20260413 개발미대상 화면으로 버튼 삭제
// //수출본선오더인 경우, 속도개선을 위하여 컨테이너 검색 팝업 열기
// scwin.f_openPopUpCntrLookUp = async function() {
// 	//라인코드 체크
// 	if($c.gus.cfIsNull(ed_lineCd.getValue())){
//     	await $c.gus.cfAlertMsg(MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
//     	return;
//     }
//
//     var opts = {
//           id : "tn_402_01_42p"
//         , popupName : "컨테이너목록 조회"
//         , modal : true
//         , type : "browserPopup" 
//         , title : "컨테이너목록 조회"  
//         , width : 950
//         , height : 580
//     };
//
//     let ret = await $c.win.openPopup("/ui/tn/sd/odrmgnt/cntrodrreg/tn_402_01_42p.xml", opts);
//
// 	//컨테이너정보에 따라서 품명정보의 입력수량 계산하기
//     //팝업에서 callback요청하기
// 	await scwin.f_calInputQty();
// }

//엑셀저장
/*function f_runExcel( gubun ) {
//alert("1::"+ds_tmp_cntr.ExportData(1,ds_tmp_cntr.CountRow,true));
//alert("2::"+ds_cntrInfo.ExportData(1,ds_cntrInfo.CountRow,true));
	switch (gubun){
  		case 1: //컨테이너 엑셀저장
 		    cfGridToExcel(gr_cntrInfo, "컨테이너오더", "컨테이너오더.xls", 4+8+16);
			break;
  	}
}*/

/*function drmFileSubmit() {
    var formObj = document.frm;
    // formObj, fileUpload DataSet, 파일업로드 후 호출할 함수
    cfDrmUploadFile(formObj, fileUploadGDS, "f_Upload");
}*/

//엑셀 파일 얿로드
scwin.f_import = function () {
  let uploadType = udc_topGrdBtn.getUpExt();
  let options = null;
  if (uploadType == "0") {
    options = {
      "status": "C",
      "type": "1",
      "startRowIndex": 1,
      "footerExist": 0
    };
  } else {
    options = {
      "status": "C",
      "startRowIndex": 1,
      "type": "1"
    };
  }
  ds_tmp_cntr.removeAll();
  udc_topGrdBtn.uploadGridViewExcel(gr_tmp, options);
};

//엑셀 파일 업로드 후 처리
scwin.gr_tmp_onfilereadend = function (value) {
  ds_cntrInfo.removeAll();
  scwin.f_addRowUploaded();
};

//업로드 자료 추가
scwin.f_addRowUploaded = async function () {
  let returnCrryoutList = "";
  let odrNo = ds_odrInfo.getCellData(0, "odrNo");
  const colid = "cntrNo";
  for (var i_cntr = 0; i_cntr < ds_tmp_cntr.getTotalRow(); i_cntr++) {
    var row = ds_cntrInfo.getRowPosition();
    if (row == null || ds_cntrInfo.getCellData(row, "cntrNo") !== "") {
      row = ds_cntrInfo.insertRow();
      ds_cntrInfo.setRowPosition(row);
    }
    ds_cntrInfo.setCellData(row, "odrNo", odrNo);
    ds_cntrInfo.setCellData(row, colid, ds_tmp_cntr.getCellData(i_cntr, colid));
    await scwin.f_checkCntrNo(ds_cntrInfo.getCellData(row, colid));
    for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
      if (ds_cntrInfo.getCellData(i, "cntrNo") === ds_cntrInfo.getCellData(row, colid)) {
        if (row !== i && ds_cntrInfo.getRowStatus(i) !== 'D') {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["컨테이너목록", i, "컨테이너번호"]);
          ds_cntrInfo.setCellData(row, "cntrNo", "");
          return;
        }
      }
    }
    ds_cntrInfo.setCellData(row, "wrkStDt", ica_wrkStDt.getValue().trim());
    ds_cntrInfo.setCellData(row, "wrkStHh", ed_wrkStHh.getValue().trim());
    ds_cntrInfo.setCellData(row, "wrkEndDt", ica_wrkEndDt.getValue().trim());
    ds_cntrInfo.setCellData(row, "wrkEndHh", ed_wrkEndHh.getValue().trim());
    ds_cntrInfo.setCellData(row, "cntrSizCd", ds_tmp_cntr.getCellData(i_cntr, "cntrSizCd"));
    ds_cntrInfo.setCellData(row, "cntrTypCd", ds_tmp_cntr.getCellData(i_cntr, "cntrTypCd"));
    ds_cntrInfo.setCellData(row, "fullEmptyClsCd", ds_tmp_cntr.getCellData(i_cntr, "fullEmptyClsCd"));
    await scwin.f_retrieveCntrBasisInfo(ds_cntrInfo.getCellData(row, colid));
    ds_cntrInfo.setCellData(row, "wt", Number(ds_tmp_cntr.getCellData(i_cntr, "wt").replaceAll(",", "")));
    ds_cntrInfo.setCellData(row, "expSealNo", ds_tmp_cntr.getCellData(i_cntr, "expSealNo"));
    ds_cntrInfo.setCellData(row, "portCd", ds_tmp_cntr.getCellData(i_cntr, "portCd"));
    ds_cntrInfo.setCellData(row, "destPortCd", ds_tmp_cntr.getCellData(i_cntr, "destPortCd"));
    ds_cntrInfo.setCellData(row, "bookingNo", ds_tmp_cntr.getCellData(i_cntr, "bookingNo"));
    ds_cntrInfo.setCellData(row, "blNo", ds_tmp_cntr.getCellData(i_cntr, "blNo"));
  }
  if (returnCrryoutList !== "") {
    await $c.win.alert($p, returnCrryoutList + " 컨테이너는 반송 선적분 컨테이너입니다.");
  }
  spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
};
//엑셀upload

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openPopUpGrid = function (ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = null;
  var pWhere = null;
  var pNoDataCloseTF = null;
  var pCallBackFunc;
  var rtnList = new Array();
  pCode = ds.getCellData(row, cdColid);
  if (gubun == 5) {
    //컨테이너목록 - From(출발지), TO(도착지)
    pSelectID = "retrieveWrkPlInfo_tpro";
    pWtitleSearch = "작업장,코드,코드명";
    pWhere = "";
    if (cdColid == "dptWrkPlCd") {
      udc_comCode.setSelectId(pSelectID);
      udc_comCode.cfCommonPopUpAsync(scwin.callBackDptWrk,
      //callBack
      pCode,
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
    } else if (cdColid == "arvWrkPlCd") {
      udc_comCode.setSelectId(pSelectID);
      udc_comCode.cfCommonPopUpAsync(scwin.callBackArvWrk, pCode, pName, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
    } else if (cdColid == "currPosCd") {
      udc_comCode.setSelectId(pSelectID);
      udc_comCode.cfCommonPopUpAsync(scwin.callBackCurWrk, pCode, pName, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
    }
  } else if (gubun == 3) {
    //컨테이너목록 - 항구코드
    pSelectID = "retrievePortInfo";
    pWtitleSearch = "항구, 코드, 코드명";
    udc_comCode.setSelectId(pSelectID);
    udc_comCode.cfCommonPopUpAsync(scwin.callBackPort, pCode, pName, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
  } else if (gubun == 4) {
    //컨테이너목록 - 목적항구코드
    pSelectID = "retrievePortInfo";
    pWtitleSearch = "목적항구, 코드, 코드명";
    udc_comCode.setSelectId(pSelectID);
    udc_comCode.cfCommonPopUpAsync(scwin.callBackDestPort, pCode, pName, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//컨테이너목록 - From(출발지)
scwin.callBackDptWrk = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "dptWrkPlCd", "dptWrkPlNm");
};

//컨테이너목록 - To(도착지)
scwin.callBackArvWrk = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "arvWrkPlCd", "arvWrkPlNm");
};

//컨테이너목록 - To(도착지)
scwin.callBackCurWrk = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "currPosCd", "");
};

//컨테이너목록 - 목적항구코드
scwin.callBackDestPort = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "destPortCd", "destPortNm");
};

//컨테이너목록 - 항구코드
scwin.callBackPort = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "portCd", "portNm");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "destPortCd", "destPortNm");
};

//-------------------------------------------------------------------------
// 20150729_황창기__CSD150723000053_박태홍과장님 요청 CW오더, 도착지가 동측부두 일때 환적구분 체크 풀도록 
//-------------------------------------------------------------------------
scwin.f_checkArvWrkPlCd = function () {
  if (ed_arvWrkPlCd.getValue() == "6P64") {
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_EXP_TS_ODR) {
      cbx_transhipYn.setValue("0");
    }
  }
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  //if($c.gus.cfIsNull(data)) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let color, val;
  if (columnId == "socYn") {
    color = $c.gus.decode($p, data, "1", "red", "black");
    val = $c.gus.decode($p, data, "1", "Y", "");
  } else if (columnId == "wrkRsltsNo") {
    val = $c.gus.decode($p, data, "", "미생성", "생성");
  }
  gr_cntrInfo.setCellColor(rowIndex, colIndex, color);
  return val;
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//기본 정보 조회 완료
scwin.sbm_retrieve_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  ds_odrInfo.setRowPosition(0);
  var v_odrKndCd = ds_odrInfo.getCellData(0, "odrKndCd");
  if (v_odrKndCd == "CW" || v_odrKndCd == "CP" || v_odrKndCd == "CR") {
    if (ds_odrInfo.getCellData(0, "transhipYn") == "1") {
      cbx_transhipYn.setValue("1");
    } else {
      cbx_transhipYn.setValue("0");
    }
  }
  //계약번호 조회
  await scwin.f_retrieveCtrtNo();
  //팝업화면설정(REQ callback에 계약번호 조회, 구분자는 scwin.callBackNoNeed)
  await scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'F');
  await scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'F');
  ds_odrInfo.setCellData(0, "ctrtNo", ds_odrInfo.getOriginalCellData(0, "ctrtNo"));

  //그리드에 데이더셋 바인
  await scwin.f_set("RETRIEVE");
  spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
};

//컨테이너 계약번호 조회 완료
scwin.sbm_retrieveCtrtNo_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieveCtrtNo_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (ds_ctrtNo.getTotalRow() == 0) {
    scwin.f_clearDataByCtrtNo();
    if (ed_ctrtClntNo.getValue().trim() != "" && ed_ctrtClntNm.getValue().trim() != "") {
      await $c.gus.cfAlertMsg($p, "거래처 %2의 " + MSG_CM_ERR_049, ["계약번호", ed_ctrtClntNm.getValue()]);
      return;
    }
  } else {
    for (let i = 0; i < ds_ctrtNo.getTotalRow(); i++) {
      ds_ctrtNo.setCellData(i, "label", "(" + ds_ctrtNo.getCellData(i, "clntPicNm") + ":~" + ds_ctrtNo.getCellData(i, "ctrtEndDt") + ":" + ds_ctrtNo.getCellData(i, "crcCd") + ")");
    }
    var options = {};
    options.sortIndex = "ctrtNo";
    options.sortOrder = "-1";
    ds_ctrtNo.multisort(options);
    //lc_ctrtNo.setNodeSet("data:ds_ctrtNo", "label", "ctrtNo");
    //lc_ctrtNo.setValue(ds_odrInfo.getCellData(0, "ctrtNo")); 
    lc_ctrtNo.setEventPause("onchange", true);
    lc_ctrtNo.setSelectedIndex(0);
    scwin.f_retrieveCtrtWrkPath(lc_ctrtNo.getValue());
    lc_ctrtNo.setEventPause("onchange", false);

    //팝업화면설정
    //scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'F');
    //scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'F');
    //ds_odrInfo.setCellData(0, "ctrtNo", ds_odrInfo.getOriginalCellData(0, "ctrtNo"));        
  }
};
scwin.sbm_retrieveCtrtNo2_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieveCtrtNo2_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  var ctrtNoRows = ds_ctrtNo2.getTotalRow();
  if (ctrtNoRows > 0) {
    //계약번호가 서로 다른 것이 있는 경우, 선택을 default로 보여주기 위한 process

    var sameYn = "N";
    for (var i = 0; i < ctrtNoRows; i++) {
      var ctrtNo = ds_ctrtNo2.getCellData(i, "ctrtNo").substring(0, 8);
      for (var j = 0; j < ds_ctrtNo2.getTotalRow(); j++) {
        if ("1" == ds_ctrtNo2.getCellData(j, "mgntTrgtClntYn")) {
          sameYn = "Y";
          break;
        }
      }
    }
    if (sameYn == "Y") {
      await $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.");
      ds_bilgClntNo.removeAll();
      ed_bilgClntNo.setValue("");
      ed_bilgClntNo.focus();
    }
  } else {
    await $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.");
  }
};

//계약 번호 조회 완료 
scwin.sbm_retrieveClntNo_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieveClntNo_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (ds_reqClntNo.getTotalRow() == 0) {
    ds_reqClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
    ed_reqClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    await scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'T');
  } else {
    ed_reqClntNo.setValue(ds_reqClntNo.getCellData(0, "clntNo"));
    await scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'T');
  }

  //청구거래처 데이터가 없는 경우
  if (ds_bilgClntNo.getTotalRow() == 0) {
    ds_bilgClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
    ed_bilgClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    await scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'T');
  } else {
    ed_bilgClntNo.setValue(ds_bilgClntNo.getCellData(0, "clntNo"));
    await scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'T');
    await scwin.f_retrieveCtrtNo2();
  }
};

//컨테이너 기본 정보 조회 완료
scwin.sbm_retrieveCntrBasisInfo_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieveCntrBasisInfo_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (ds_cntrBasisInfo.getRowCount() > 0) {
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrSizCd", ds_cntrBasisInfo.getCellData(0, "cntrSizCd"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrTypCd", ds_cntrBasisInfo.getCellData(0, "cntrTypCd"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "fullEmptyClsCd", ds_cntrBasisInfo.getCellData(0, "fullEmptyClsCd"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "wt", ds_cntrBasisInfo.getCellData(0, "expWt"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "expSealNo", ds_cntrBasisInfo.getCellData(0, "expSealNo"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "arrvlportDtm", ds_cntrBasisInfo.getCellData(0, "arrvlportDtm"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "odrNo", ds_odrInfo.getCellData(0, "odrNo"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "lineCd", ds_cntrBasisInfo.getCellData(0, "lineCd"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "currPosCd", ds_cntrBasisInfo.getCellData(0, "currPosCd"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "dptWrkPlCd", ds_cntrBasisInfo.getCellData(0, "dptWrkPlCd"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "socYn", ds_cntrBasisInfo.getCellData(0, "socYn"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "rmk", ds_cntrBasisInfo.getCellData(0, "rmk"));
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cyEmptyYn", ds_cntrBasisInfo.getCellData(0, "cyEmptyYn"));
  }

  //박태홍 과장요청 KBCTCY C1 반입 후 C3로 반송 FULL 반출 되는건  컨테이너 목록 저장
  if (ds_cntrBasisInfo.getCellData(0, "returnCrryout") == "Y" && lc_odrKndCd.getValue() == "C3" && ds_cntrBasisInfo.getCellData(0, "fullEmptyClsCd") == "F") {
    if (scwin.returnCrryoutList == "") {
      scwin.returnCrryoutList += ds_cntrBasisInfo.getCellData(0, "cntrNo") + "\n";
    } else {
      scwin.returnCrryoutList += ", " + ds_cntrBasisInfo.getCellData(0, "cntrNo") + "\n";
    }
  }
};

//수정 완료
scwin.sbm_update_submitdone = async function (e) {
  //console.log("scwin.sbm_update_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, "odrNo"));
  scwin.f_retrieve();
};

//저장 완료
scwin.sbm_regist_submitdone = async function (e) {
  //console.log("sbm_regist_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ed_odrNo.setValue(ds_cndOdrNo.getCellData(0, "odrNo"));
  scwin.f_retrieve();
};

//삭제 완료 
scwin.sbm_deleteOrderCond_submitdone = async function (e) {
  //console.log("scwin.sbm_deleteOrderCond_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  await scwin.f_set("INIT", "CREATE");
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//오더번호 소문자 입력 > 대문자 입력 
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_odrNo);
  if (info.keyCode == 13) {
    scwin.f_retrieve();
  }
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  //console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  //console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//계약처 찾기 버튼 
scwin.udc_ctrtClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'CTRT', 'F', 'F', 'F');
};
scwin.udc_ctrtClntNo_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_ctrtClntNm, ed_ctrtClntNo, 1, 'CTRT', 'T', 'F');
};

//청구처 찾기 버튼
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'BILG', 'F', 'F', 'F');
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEdByLc(lc_bilgClntNm, ed_bilgClntNo, 1, 'BILG', 'T', 'F');
};

//요청처 찾기 버튼
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'REQ', 'F', 'F', 'F');
};
scwin.udc_reqClntNo_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEdByLc(lc_reqClntNm, ed_reqClntNo, 1, 'REQ', 'T', 'F');
};

//Line 찾기 버튼
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, '', 'F', 'F', 'F');
};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  if (ed_lineCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
    scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
  } else {
    scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
  }
};

//매출부서 찾기 버튼
scwin.udc_sellLodeptCd_onclickEvent = function (e) {
  if (ed_sellLodeptCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
  } else {
    scwin.f_beforeOpenCommonPopUpEd(ed_sellLodeptNm, ed_sellLodeptCd, 2, 'SELL', 'T', 'F');
  }
};
scwin.udc_sellLodeptCd_onblurCodeEvent = function (e) {
  if (!$c.util.isEmpty($p, ed_sellLodeptCd.getValue())) {
    ed_sellLodeptNm.setValue("");
    scwin.f_openCommonPopUp(2, 'SELL', 'T', 'F', 'F');
  } else {
    ed_sellLodeptNm.setValue("");
  }
};

//청구부서 찾기 버튼
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, 'BILG', 'F', 'F', 'F');
};
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  if (ed_bilgLodeptCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  } else {
    scwin.f_beforeOpenCommonPopUpEd(ed_bilgLodeptNm, ed_bilgLodeptCd, 2, 'BILG', 'T', 'F');
  }
};

//본선관리번호 버튼
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(4, '', '', '', '');
};
scwin.ed_cvsslMgntNo_onviewchange = async function (info) {
  if (info.oldValue == info.newValue) return;
  var cvsslMgntNo = ed_cvsslMgntNo.getValue().toUpperCase();
  if (cvsslMgntNo == "") {
    scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
    await scwin.f_setOdrEtc(cvsslMgntNo, "");
  } else {
    ed_cvsslMgntNo.setValue(cvsslMgntNo);
    if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
      ed_cvsslMgntNo.setValue("");
      return;
    }
    scwin.f_openCommonPopUp(4, '', 'F', 'F', 'F');
  }
};

//선박명 찾기 버튼
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, '', 'F', 'F', 'F');
};
scwin.udc_vsslCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_vsslNm, ed_vsslCd, 8, '', 'T', 'F');
};
scwin.udc_vsslCd_onviewchangeNameEvent = function (info) {
  //console.log("scwin.udc_vsslCd_onviewchangeNameEvent");
  //console.log(info);
  if (!$c.util.isEmpty($p, ed_vsslNm.getValue())) {
    ed_vsslCd.setValue("");
    scwin.f_openCommonPopUp(8, '', 'T', 'F', 'T');
  }
};

//상차지 찾기 버튼 
scwin.udc_dptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'DPT', 'F', 'F', 'F');
};
scwin.udc_dptWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_dptWrkPlNm, ed_dptWrkPlCd, 5, 'DPT', 'T', 'F');
  /*if(!$c.util.isEmpty(ed_dptWrkPlCd.getValue()) && !$c.util.isEmpty(ed_dptWrkPlNm.getValue())) {
      scwin.f_openCommonPopUp(8, '', 'T', 'F', 'T');
  } else if(!$c.util.isEmpty(ed_dptWrkPlCd.getValue())) {
      ed_dptWrkPlNm.setValue("");
      scwin.f_openCommonPopUp(8, '', 'T', 'F', 'T');
  } else if($c.util.isEmpty(ed_dptWrkPlCd.getValue())) {
      ed_dptWrkPlNm.setValue("");
  }*/
};
scwin.ed_dptZip_onblur = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_dptDtl, ed_dptZip, 10, 'DPT_ZIP', 'T', 'F');
};
scwin.btn_dptZip_onclick = function (e) {
  scwin.f_openZipPopUpNew(1, 'F');
};

//하차지 찾기 버튼
scwin.udc_arvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'ARV', 'F', 'F', 'F');
};
scwin.udc_arvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_arvWrkPlNm, ed_arvWrkPlCd, 5, 'ARV', 'T', 'F');
};
scwin.ed_arvZip_onblur = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_arvDtl, ed_arvZip, 10, 'ARV_ZIP', 'T', 'F');
};
scwin.btn_arvZip_onclick = function (e) {
  scwin.f_openZipPopUpNew(2, 'F');
};

//상차 우편번호 찾기 버튼
scwin.udc_dptZip_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, 'DPT_ZIP', 'F', 'F', 'F');
};
scwin.udc_dptZip_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(10, 'DPT_ZIP', 'T', 'F', 'F');
};

//하차 우편번호 찾기 버튼
scwin.udc_arvZip_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(11, 'ARV_ZIP', 'F', 'F', 'F');
};
scwin.udc_arvZip_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(11, 'ARV_ZIP', 'T', 'F', 'F');
};

//배차담당 찾기 버튼
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(11, '', 'F', 'F', 'F');
};
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_alloccarPicNm, ed_alloccarPicId, 11, '', 'T', 'F');
};

//오더종류 값 변경
scwin.lc_odrKndCd_onchange = async function (info) {
  scwin.odrKndCd = lc_odrKndCd.getValue(); //오더종류코드
  scwin.impExpClsCd = scwin.getfltrCd2(lc_odrKndCd.getValue()); //수출/입 구분코드
  if (scwin.impExpClsCd == "null") scwin.impExpClsCd = ""; //TS셔틀컨테이너가 아닌 경우
  //alert(odrKndCd);
  await scwin.f_setInterfaceByOdr(scwin.odrKndCd, scwin.impExpClsCd);
};

//계약번호 값 변경 
scwin.lc_ctrtNo_onchange = async function (info) {
  if (ds_ctrtNo.getTotalRow() > 0 && scwin.mgntTrgtClntYn != "1") {
    scwin.mgntTrgtClntYn = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "mgntTrgtClntYn");
    if (scwin.mgntTrgtClntYn == "1") {
      if (scwin.statusFlag == "C") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["본 계약거래처", "관리대상이므로 오더등록"]); //"@은(는) @할 수 없습니다.

        await scwin.f_set("INIT", "INIT"); //초기화
      } else {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_006, ["본 계약거래처", "관리대상"]); //"@은(는) @입니다.

        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfDisableObjects($p, [btn_confirmOdr, btn_updateCntrInfo]);
        $c.gus.cfEnableBtnOnly($p, [btn_clear]);
      }
    } else {
      if (scwin.retrieveYn == "N") {
        await scwin.f_retrieveClntList();
      }
    }
  }
  if (!$c.util.isEmpty($p, lc_ctrtNo.getValue())) scwin.f_retrieveCtrtWrkPath(lc_ctrtNo.getValue());
};

//생성 버튼(그리드 상단)
scwin.btn_copy_onclick = function (e) {
  scwin.f_addRow();
};

// README : 20260413 개발미대상 화면으로 버튼 삭제
// //컨테이너 검색 버튼
// scwin.btn_cntrSearch_onclick = function (e) {
//     scwin.f_openPopUpCntrLookUp();
// };

//생성 버튼(그리드 행udc 옆)
scwin.btn_addPath_onclick = function (e) {
  scwin.f_setWrkPath();
};

//행추가 버튼
scwin.btn_copy_onclick = function (e) {
  scwin.f_addRow('B');
};

//컨테이너 정보 버튼
scwin.btn_cntrInfo_onclick = function (e) {
  scwin.f_openPopUpUpdateCntrInfoEtc();
};

//확정 버튼 
scwin.btn_confirmOdr_onclick = function (e) {
  scwin.f_confirmOrder();
};

//할인할증 버튼
scwin.btn_dc_onclick = function (e) {
  scwin.f_dc();
};

//컨테이너 상세 버튼 
scwin.btn_updateCntrInfo_onclick = function (e) {
  scwin.f_openPopUpUpdateCntrInfo();
};

//작업경로 버튼
scwin.btn_chgWrkPath_onclick = function (e) {
  scwin.f_chgWrkPath();
};

//등록현황 버튼
scwin.btn_odrRegIfno_onclick = function (e) {
  scwin.f_odrRegIfno();
};

//오더복사 버튼 
scwin.btn_odrCopy_onclick = function (e) {
  scwin.set_copy();
};

//신규 버튼
scwin.btn_create_onclick = function (e) {
  scwin.f_create();
};

//수정 버튼 
scwin.btn_update_onclick = function (e) {
  scwin.f_update();
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//삭제 버튼 
scwin.btn_delete_onclick = function (e) {
  scwin.f_delete();
};

//그리드 더블 클릭
scwin.gr_cntrInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let cntrRows = ds_cntrInfo.getTotalRow();
  if ((columnId == "ctrtWrkPathSeq" || columnId == "cntrWrkClsCd") && cntrRows > 0) {
    let pathSeq = ds_cntrInfo.getCellData(rowIndex, columnId);
    for (var i = 0; i < cntrRows; i++) {
      if (rd_wrkPathCopy.getValue() == "1" || ds_cntrInfo.getCellData(i, columnId) == "0" || ds_cntrInfo.getCellData(i, columnId) == "") {
        ds_cntrInfo.setCellData(i, columnId, pathSeq);
      }
    }
  }
};

//그리드 textImage 클릭 > 공통 팝업 호출
scwin.gr_cntrInfo_ontextimageclick = function (rowIndex, columnIndex) {
  var columnId = gr_cntrInfo.getColumnID(columnIndex);
  switch (columnId) {
    case "dptWrkPlCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "dptWrkPlCd", "dptWrkPlNm", 5, "F", "F");
      break;
    case "arvWrkPlCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "arvWrkPlCd", "arvWrkPlNm", 5, "F", "F");
      break;
    case "destPortCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "destPortCd", "destPortNm", 4, "F", "F");
      break;
    case "portCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "portCd", "portNm", 3, "F", "F");
      break;
    case "currPosCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "currPosCd", "", 5, "F", "F");
      break;
  }
};

//그리드 컨테이너 번호 입력 > 컨테이너 정보 조회
scwin.gr_cntrInfo_onviewchange = async function (info) {
  //colId : "cntrNo" colIndex :  1 newValue :  "GESU9123654" oldValue :  "" rowIndex: 0
  let row = info.rowIndex;
  let colid = info.colId;
  switch (colid) {
    case "cntrNo":
      //컨테이너번호
      if (ds_cntrInfo.getCellData(row, colid) == "") {
        //컨테이너정보에 따라서 품명정보의 입력수량 계산하기
        if (ds_cntrInfo.getCellData(row, colid) != info.oldValue) {
          scwin.f_setCntrInfo(2);
          await scwin.f_calInputQty();
        }
      } else {
        if (scwin.chkInputQtyYn == "N") {
          //컨테이너번호를 직접 입력한 경우
          if (ds_cntrInfo.getCellData(row, colid) != info.oldValue) {
            //컨테이너번호 유효성체크
            await scwin.f_checkCntrNo(ds_cntrInfo.getCellData(row, colid));
            for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
              if (ds_cntrInfo.getCellData(i, "cntrNo") == ds_cntrInfo.getCellData(row, colid)) {
                if (row != i && ds_cntrInfo.getRowStatus(i) != "D") {
                  let msg = $c.data.getMessage($p, MSG_CM_ERR_031, "컨테이너목록", i);
                  msg += $c.data.getMessage($p, MSG_CM_ERR_032, "컨테이너번호");
                  await $c.win.alert($p, msg); //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
                  ds_cntrInfo.setCellDAta(row, "cntrNo", olddata);
                  //gr_cntrInfo.SetColumn("cntrNo");
                  return;
                }
              }
            }
            scwin.returnCrryoutList = "";
            let cntrNo = ds_cntrInfo.getCellData(row, colid);
            await scwin.f_retrieveCntrBasisInfo(cntrNo);

            //박태홍 과장 요청 CHA161229000011_컨테이너 오더(C3)등록시 반송선적분 제어 및 안내문 경고 생성
            if (scwin.returnCrryoutList != null && scwin.returnCrryoutList != "") {
              await $c.win.alert($p, scwin.returnCrryoutList + " 컨테이너는 반송 선적분 컨테이너입니다.");
            }
          }
        }
      }
      break;
    case "portCd":
      //컨테이너번호
      ds_cntrInfo.setCellData(row, "destPortCd", ds_cntrInfo.getCellData(row, "portCd"));
      ds_cntrInfo.setCellData(row, "destPortNm", ds_cntrInfo.getCellData(row, "portNm"));
      break;
    case "wt":
    case "sellAmt":
    case "scAmt":
      if (info.newValue == "") {
        ds_cntrInfo.setCellData(row, colid, 0);
      }
      break;
  }
};
scwin.lc_reqClntNm_onselected = function () {
  ed_reqClntNo.setValue(lc_reqClntNm.getValue());
};
scwin.lc_bilgClntNm_onselected = function () {
  ed_bilgClntNo.setValue(lc_bilgClntNm.getValue());
};
scwin.customFm = function (data, formatData, rowIndex, colIndex) {
  return rowIndex + 1;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th',id:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',maxlength:'13',mandatory:'true',validExp:'오더번호:yes:length=13',allowChar:'0-9A-Za-z','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup',ref:'',title:'오더번호'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더정보 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_odrInfoArea',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:250px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_odrInfo.odrKndCd',objType:'data',mandatory:'true',validExp:'오더종류:yes','ev:onchange':'scwin.lc_odrKndCd_onchange',title:'오더종류',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너 수출본선'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PORT CHANGE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CP'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RETURN'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너 수출TS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CW'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_ctrtClntNo',style:'width:250px;',btnId:'btn_ctrtClntNo',codeId:'ed_ctrtClntNo',id:'udc_ctrtClntNo',nameId:'ed_ctrtClntNm',objTypeCode:'data',validExpCode:'계약처:yes',UpperFlagCode:'1',allowCharCode:'0-9A-Z',mandatoryName:'true',refDataCollection:'ds_odrInfo',code:'ctrtClntNo',name:'ctrtClntNm',selectID:'retrieveClntInfo_tpro',readOnlyName:'true','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ctrtNo',style:'width:250px;',submenuSize:'auto',objType:'data',mandatory:'true',validExp:'계약번호:yes',title:'계약번호',ref:'data:ds_odrInfo.ctrtNo',chooseOptionLabel:'','ev:onchange':'scwin.lc_ctrtNo_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'true',nodeset:'data:ds_ctrtNo',width:'800',selectedRowColor:'',label:'label',visibleRowNum:'20',autoFit:'allColumn',value:'ctrtNo',rowMouseOverColor:'',height:'400'},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9A-Z',btnId:'btn_bilgClntNo',codeId:'ed_bilgClntNo',id:'udc_bilgClntNo',nameId:'ed_bilgClntNm',objTypeCode:'data',popupID:'',style:'',validExpCode:'청구처:yes',maxlengthCode:'6',objTypeName:'data',refDataCollection:'ds_odrInfo',code:'bilgClntNo',name:'bilgClntNm',selectID:'retrieveClntInfo_tpro','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent',hideName:'true',mandatoryCode:'true',keepCodeSwitch:'Y',keepNameSwitch:'Y'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_bilgClntNm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_odrInfo.bilgClntNm',allOption:'',chooseOption:'',displayMode:'label',objType:'data','ev:onselected':'scwin.lc_bilgClntNm_onselected',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bilgClntNo'},E:[{T:1,N:'w2:label',A:{ref:'clntNm'}},{T:1,N:'w2:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9A-Z',btnId:'btn_reqClntNo',code:'reqClntNo',codeId:'ed_reqClntNo',hideName:'true',id:'udc_reqClntNo',maxlengthCode:'6',name:'reqClntNm',nameId:'ed_reqClntNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveClntInfo_tpro',style:'',validExpCode:'요청처:yes','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent',mandatoryCode:'true',keepCodeSwitch:'Y',keepNameSwitch:'Y'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_reqClntNm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_odrInfo.reqClntNm',allOption:'',chooseOption:'',displayMode:'label',objType:'data','ev:onselected':'scwin.lc_reqClntNm_onselected',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_reqClntNo'},E:[{T:1,N:'w2:label',A:{ref:'clntNm'}},{T:1,N:'w2:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_lineCd',style:'',hideName:'Y',btnId:'btn_lineCd',codeId:'ed_lineCd',id:'udc_lineCd',nameId:'ed_lineNm',maxlengthCode:'5',objTypeCode:'data',validExpCode:'Line:yes',objTypeName:'data',validExpName:'Line명:no',refDataCollection:'ds_odrInfo',code:'lineCd',name:'lineNm',selectID:'retrieveLineInfoList_tpro','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent',readOnlyName:'true',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z'}},{T:1,N:'xf:input',A:{class:'',id:'ed_shpCoClntNm',placeholder:'',style:'width:150px;',objType:'data',validExp:'선사거래처:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_sellLodeptCd',style:'width:250px;',btnId:'btn_sellLodeptCd',codeId:'ed_sellLodeptCd',id:'udc_sellLodeptCd',nameId:'ed_sellLodeptNm',objTypeCode:'data',objTypeName:'data',validExpCode:'매출부서:yes',validExpName:'매출부서:yes',maxlengthCode:'4',UpperFlagCode:'1',refDataCollection:'ds_odrInfo',code:'sellLodeptCd',name:'sellLodeptNm',selectID:'retrieveLogisDeptInfo_tpro',readOnlyName:'true','ev:onclickEvent':'scwin.udc_sellLodeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sellLodeptCd_onblurCodeEvent',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_bilgLodeptCd',style:'width:250px;',btnId:'btn_bilgLodeptCd',codeId:'ed_bilgLodeptCd',id:'udc_bilgLodeptCd',nameId:'ed_bilgLodeptNm',maxlengthCode:'4',objTypeCode:'data',validExpCode:'청구부서:yes',objTypeName:'data',validExpName:'청구부서:yes',refDataCollection:'ds_odrInfo',code:'bilgLodeptCd',name:'bilgLodeptNm',selectID:'retrieveLogisDeptInfo_tpro',readOnlyName:'true','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent',allowCharCode:'0-9a-zA-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출/CT',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_sellYn',ref:'data:ds_odrInfo.sellYn',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_closeDt',pickerType:'dynamic',style:'',objType:'data'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'text',id:'ed_closeHh',style:'width: 50px;',displayFormat:'##:##',objType:'data',allowChar:'0-9',maxlength:'4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'본선번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 85px;text-transform: uppercase;',id:'ed_cvsslMgntNo',placeholder:'',class:'',ref:'data:ds_odrInfo.cvsslMgntNo','ev:onviewchange':'scwin.ed_cvsslMgntNo_onviewchange',objType:'data','ev:onfocus':'scwin.ed_cvsslMgntNo_onfocus',title:'본선번호',allowChar:'0-9a-zA-Z',maxlength:'8'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_cvsslMgntNo',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'w2tb_td  bl0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'tb_transhipYn',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',id:'',class:'w2tb'},E:[{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',id:'',class:'w2tb_th bl1'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'환적',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_transhipYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선박명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_vsslCd',style:'width:250px;',btnId:'btn_vsslCd',codeId:'ed_vsslCd',id:'udc_vsslCd',nameId:'ed_vsslNm',maxlengthCode:'4',objTypeCode:'data',UpperFlagCode:'1',refDataCollection:'ds_odrInfo',code:'vsslCd',name:'vsslNm',selectID:'retrieveVsslCdInfo_tpro',readOnlyName:'true',validExpName:'선박명:no','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent',allowCharCode:'0-9A-Za-z','ev:onviewchangeNameEvent':'scwin.udc_vsslCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항차',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:120px;',maxlength:'10',allowChar:'0-9A-Z',objType:'data',ref:'data:ds_odrInfo.portcnt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'FreeDay',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_freeDt',pickerType:'dynamic',style:'',objType:'data',validExp:'FREEDAY:no:date=YYYYMMDD',ref:'data:ds_odrInfo.freeDt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'출도착정보 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_odrInfoArea2',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_dptWrkPlCd',style:'width:250px;',hideName:'Y',btnId:'btn_dptWrkPlCd',codeId:'ed_dptWrkPlCd',id:'udc_dptWrkPlCd',nameId:'ed_dptWrkPlNm',objTypeName:'data',objTypeCode:'data',validExpCode:'From:no',validExpName:'From:no',UpperFlagCode:'1',refDataCollection:'ds_odrInfo',code:'dptWrkPlCd',name:'dptWrkPlNm',selectID:'retrieveWrkPlInfo_tpro',readOnlyName:'true','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onblurCodeEvent',maxlengthCode:'100'}},{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveZipList_tpro',id:'udc_dptZip',style:'display: none;'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dptZip',placeholder:'',style:'width: 85px;',objType:'data',validExp:'상차지우편번호:yes',title:'상차지우편번호',mandatory:'true',ref:'data:ds_odrInfo.dptZip','ev:onblur':'scwin.ed_dptZip_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_dptZip',style:'',type:'button','ev:onclick':'scwin.btn_dptZip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_dptDtl',placeholder:'',style:'width:250px;',objType:'data',validExp:'From:no',ref:'data:ds_odrInfo.dptDtl'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특이사항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'txt_rmk',style:'',objType:'data',validExp:'특이사항:no:maxByteLength=500',ref:'data:ds_odrInfo.rmk',maxByteLength:'250'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',pickerType:'dynamic',style:'',ref:'data:ds_odrInfo.wrkStDt',objType:'data',validExp:'입항일자:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_wrkStHh',style:'width: 50px;',displayFormat:'##:##',mandatory:'true',ref:'data:ds_odrInfo.wrkStHh',objType:'data',validExp:'입항시간:yes:date=HHmm',title:'입항시간',allowChar:'0-9',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_onPicNm',placeholder:'',style:'',objType:'data',validExp:'상차담당:no',ref:'data:ds_odrInfo.onPicNm',maxByteLength:'100'}},{T:1,N:'xf:input',A:{class:'',id:'ed_onPicTelNo',placeholder:'',style:'',objType:'data',validExp:'상차담당전화번호:no',allowChar:'0-9',ref:'data:ds_odrInfo.onPicTelNo',maxlength:'11'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_arvWrkPlCd',style:'width:250px;',btnId:'btn_arvWrkPlCd',codeId:'ed_arvWrkPlCd',id:'udc_arvWrkPlCd',nameId:'ed_arvWrkPlNm',objTypeCode:'data',validExpCode:'To:no',validExpName:'To:no',objTypeName:'data',refDataCollection:'ds_odrInfo',code:'arvWrkPlCd',name:'arvWrkPlNm',selectID:'retrieveWrkPlInfo_tpro',readOnlyName:'true','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent',maxlengthCode:'100',UpperFlagCode:'1'}},{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveZipList_tpro',style:'display: none;',id:'udc_arvZip'}},{T:1,N:'xf:input',A:{class:'',id:'ed_arvZip',placeholder:'',style:'width: 85px;',objType:'data',validExp:'하차지우편번호:yes',title:'하차지우편번호',mandatory:'true',ref:'data:ds_odrInfo.arvZip',maxByteLength:'100','ev:onblur':'scwin.ed_arvZip_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_arvZip',style:'',type:'button','ev:onclick':'scwin.btn_arvZip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_arvDtl',placeholder:'',style:'width:250px;',objType:'data',validExp:'To:no',ref:'data:ds_odrInfo.arvDtl',maxByteLength:'100'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'하차일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkEndDt',pickerType:'dynamic',style:'',ref:'data:ds_odrInfo.wrkEndDt',objType:'data',validExp:'출항일자:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_wrkEndHh',style:'width: 50px;',displayFormat:'##:##',mandatory:'true',objType:'data',validExp:'출항시간:yes:date=HHmm',ref:'data:ds_odrInfo.wrkEndHh',title:'출항시간',maxlength:'4',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_offPicNm',placeholder:'',style:'',ref:'data:ds_odrInfo.offPicNm',objType:'data',validExp:'하차담당:no',maxByteLength:'100'}},{T:1,N:'xf:input',A:{class:'',id:'ed_offPicTelNo',placeholder:'',style:'',maxlength:'11',objType:'data',validExp:'하차담당전화번호:no',ref:'data:ds_odrInfo.offPicTelNo',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_alloccarPicId',style:'width:250px;',btnId:'btn_alloccarPicId',codeId:'ed_alloccarPicId',id:'udc_alloccarPicId',nameId:'ed_alloccarPicNm',objTypeCode:'data',objTypeName:'data',validExpCode:'배차담당:no',refDataCollection:'ds_odrInfo',code:'alloccarPicId',name:'alloccarPicNm',selectID:'retrieveUserInfo_tpro','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent',readOnlyCode:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkPathCopy',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'빈값복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'생성조건',class:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_sizClsCd',search:'start',style:'width:60px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_typClsCd',search:'start',style:'width:60px;',submenuSize:'auto',objType:'data',visibleRowNum:'15',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_efClsCd',search:'start',style:'width:60px;',submenuSize:'auto',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_rowMake',placeholder:'',style:'width:70px;',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copy',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_copy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownObjType:'X',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',templateYn:'N',gridID:'gr_cntrInfo',grdDownOpts:'{"fileName":"컨테이너오더.xlsx", "sheetName" : "컨테이너오더", "removeColumns":"0"}',gridUpYn:'Y',gridUpFn:'scwin.f_import',id:'udc_topGrdBtn'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_cntrInfo',style:'',id:'gr_cntrInfo',visibleRowNum:'10',class:'wq_gvw',fixedColumn:'5','ev:oncelldblclick':'scwin.gr_cntrInfo_oncelldblclick','ev:ontextimageclick':'scwin.gr_cntrInfo_ontextimageclick','ev:onviewchange':'scwin.gr_cntrInfo_onviewchange',editModeEvent:'onclick','ev:onkeydown':'scwin.gr_cntrInfo_onkeydown',rowNumVisible:'false',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'Seq',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'Seq',displayMode:'label',sortable:'false',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'SOC',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'확정',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'입항일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'SZ',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'TP',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'EF',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column53',value:'수입Seal-No',displayMode:'label',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'수출Seal-No',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column49',value:'PORT',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column47',value:'PORT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'목적PORT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'목적항구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'FROM',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'출발장소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'현위치',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'BOOKING NO',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'BL NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column31',value:'작업경로',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'작업경로명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'TO',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'도착장소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'긴급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'매출항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'할인/할증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'특기사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'실적여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column61',value:'CY/E/Yn',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'creatOdrNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'Currow',displayMode:'label',readOnly:'true',customFormatter:'scwin.customFm'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSeq',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'socYn',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dcsnYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrvlportDtm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntrNo',displayMode:'label',maxLength:'11',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrSizCd',displayMode:'label',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrTypCd',displayMode:'label',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'fullEmptyClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.##0',defaultValue:'0',excelCellType:'number',maxLength:'15.3',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'impSealNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'expSealNo',displayMode:'label',maxLength:'18',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'portCd',displayMode:'label',textAlign:'center',allowChar:'0-9a-zA-Z',maxLength:'229'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'portNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'destPortNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'destPortCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'dptWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'currPosCd',displayMode:'label',maxLength:'5',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bookingNo',displayMode:'label',maxByteLength:'18'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label',maxByteLength:'18'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'ctrtWrkPathSeq',textAlign:'left',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'',displayMode:'label',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_ctrtWrkPath'},E:[{T:1,N:'w2:label',A:{ref:'rmk'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtWrkPathNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'arvWrkPlCd',displayMode:'label',maxLength:'229',allowChar:'0-9a-zA-Z'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrWrkClsCd',displayMode:'value delim label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'초긴급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'긴급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selpchItemNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',defaultValue:'0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'scAmt',value:'',displayMode:'label',textAlign:'right',defaultValue:'0',displayFormat:'#,###',dataType:'number',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',maxByteLength:'90'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkRsltsNo',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cyEmptyYn',value:'',displayMode:'label',maxByteLength:'1'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_addPath',style:'',type:'button','ev:onclick':'scwin.btn_addPath_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_delRow',btnCancelObj:'btn_cancelRow',EngYn:'N',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_cntrInfo',rowDelFunction:'scwin.f_deleteRow',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_addRow1',cancelFunction:'scwin.f_undoRow'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_tmp_cntr',style:'display:none;',id:'gr_tmp',visibleRowNum:'10',class:'wq_gvw',fixedColumn:'5',rowNumVisible:'true','ev:onfilereadend':'scwin.gr_tmp_onfilereadend',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSeq',value:'Seq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrNo',value:'No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',value:'SZ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrTypCd',value:'TP',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',value:'EF',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'expSealNo',value:'수출Seal-No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portCd',value:'PORT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'destPortCd',value:'목적항구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bookingNo',value:'BOOKING NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blNo',value:'BL NO',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrTypCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'expSealNo',displayMode:'label'}},{T:3,text:'s\n    								'},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'portCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'destPortCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bookingNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_cntrInfo',label:'저장',type:'button',class:'btn link','ev:onclick':'scwin.btn_cntrInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'컨테이너정보'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_confirmOdr',label:'저장',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_confirmOdr_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_dc',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_dc_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'할인할증'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_updateCntrInfo',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_updateCntrInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'컨테이너상세'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_chgWrkPath',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_chgWrkPath_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrRegIfno',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_odrRegIfno_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'등록현황'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrCopy',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_odrCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더복사'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'저장',style:'',type:'button',userAuth:'D','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_comCode',validTitle:'',nameId:'ed_comCodeNm',style:'width:%; height:px;display: none;',id:'udc_comCode',btnId:'btn_comCode'}}]}]}]}]}]})