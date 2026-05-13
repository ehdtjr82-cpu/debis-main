/*amd /ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml 246687 74b27a2ae8f6e57f6a38861bbf163748126179cdd22b641cfc709c16167b6a28 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchSys'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchGrp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'grpCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndOdrNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndClntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'contractNumber',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndCtrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'컨테이너여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBukYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condCntrBasisInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'상대부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'오더조정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'상하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDtl',name:'상하차상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDt',name:'상하차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldHh',name:'상하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldPicNm',name:'상하자작업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldPicTelNo',name:'상하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadDptWrkPlCd',name:'철송출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadDptWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadArvWrkPlCd',name:'철송도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadArvWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'철송/해송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldZip',name:'상하차우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'도착지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'출발지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'체선일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'출발OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'도착OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'출발터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'도착터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liVanTerm',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnCd',name:'사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnTxt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transhipYn',name:'환적화물여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'masterKey',name:'마스터키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonCtrtYn',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeDt',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntTelNo',name:'실화주연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntNm',name:'주선업자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntTelNo',name:'주선업자연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRtrnDt',name:'컨테이너반납일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호   ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfoForCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'상대부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'오더조정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlCd',name:'상하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDtl',name:'상하차상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldDt',name:'상하차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldHh',name:'상하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldPicNm',name:'상하자작업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldPicTelNo',name:'상하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadDptWrkPlCd',name:'철송출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadDptWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadArvWrkPlCd',name:'철송도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadArvWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'철송/해송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lduldZip',name:'상하차우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'도착지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'출발지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'체선일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'출발OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'도착OPERATOR코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'출발터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'도착터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'배차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liVanTerm',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnCd',name:'사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsnTxt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transhipYn',name:'환적화물여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'masterKey',name:'마스터키',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonCtrtYn',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeDt',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntNm',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsRealMchtClntTelNo',name:'실화주연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntNm',name:'주선업자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnsCnsgMchtClntTelNo',name:'주선업자연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRtrnDt',name:'컨테이너반납일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호   ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_cntrInfo_ondatachage','ev:oninsertrow':'scwin.ds_cntrInfo_ondatachage','ev:onremoverow':'scwin.ds_cntrInfo_ondatachage','ev:onrowpositionchange':'scwin.ds_cntrInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'컨테이너작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd1',name:'매출항목코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt1',name:'매출금액1',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellItemCd2',name:'매출항목코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'매출금액2',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c2ClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'컨테이너작업형태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unno',name:'UNNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyEmptyYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelTmp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_relationClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배분율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'등록지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배분율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addCntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'컨테이너작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd1',name:'매출항목코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt1',name:'매출금액1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd2',name:'매출항목코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'매출금액2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciOdrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c2ClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'컨테이너작업형태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unno',name:'UNNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyEmptyYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deleteOrderCond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndBkInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrSize',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrFE',saveRemovedData:'true','ev:ondataload':''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_internalTxn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mchtClntNoYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_offdockLine',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_masterKeyInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndBkInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lineCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_comSearchSys',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_comSearchGrp',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveBasicOdrListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveClntNo',action:'',method:'post',mediatype:'application/json',ref:'data:json,["dma_cndClntNo",{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_relationClntNo", "key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_relationClntNo", "key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBasisInfo',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveContainerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condCntrBasisInfo","key":"IN_DS1"},{"id":"ds_addCntrInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_addCntrInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtWrkPath',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_ctrtWrkPath","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBookingInfo',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndBkInfo","key":"IN_DS1"}, {"id":"ds_bkInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bkInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RegistExportGeneralCntrOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"},{"id":"ds_cntrInfo","key":"IN_DS2"},{"id":"ds_cndOdrNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cndOdrNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateRmk',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.UpdateRmkOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateCntrNoArrvlportDtm',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.UpdateOrderContainerOdrNoAndArrvlportDtmAndCntrNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"},{"id":"ds_cntrInfo","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteOrderCond',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.DeleteContainerOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_deleteOrderCond","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_confirm',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.ConfirmOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.UpdateExportGeneralCntrOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified", "id":"ds_cntrInfo","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //console.log("scwin.onpageload");
  // 세션정보 가져오기
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.lobranCd = scwin.memInfo.lobranCd;
  scwin.loginId = scwin.memInfo.userId;
  scwin.rentcarOfcCd = scwin.memInfo.rentcarOfcCd;

  //오늘일자 세팅
  scwin.sDate = $c.date.getServerDateTime($p);
  scwin.strCurDate = scwin.sDate;
  //scwin.nowDt = DDate.getDate();	
  scwin.nextDt = $c.date.addDate($p, scwin.sDate, 1);
  scwin.beforeDt = $c.date.addDate($p, scwin.sDate, -1);

  //다른화면에서 넘어오는 경우
  scwin.params = $c.data.getParameter($p);
  scwin.mchtOdrNo = scwin.params.mchtOdrNo == null ? "" : scwin.params.mchtOdrNo;
  scwin.odrNo = scwin.params.odrNo == null ? "" : scwin.params.odrNo; //오더번호
  scwin.odrKndCd = scwin.params.odrKndCd == null ? "" : scwin.params.odrKndCd; //오더종류
  scwin.type = scwin.params.type == null ? "" : scwin.params.type; //type
  scwin.linkPage = scwin.params.linkPage == null ? "" : scwin.params.linkPage; //링크페이지 종류
  scwin.odrCopy = scwin.params.odrCopy == null ? "" : scwin.params.odrCopy; //웹오더요청번호

  //웹오더로 넘어오는 값
  scwin.reqNo = scwin.params.hid_reqNo == null ? "" : scwin.params.hid_reqNo; //웹오더요청번호
  scwin.web_clntNo = scwin.params.hid_clntNo == null ? "" : scwin.params.hid_clntNo; //거래처번호
  scwin.web_wrkDt = scwin.params.hid_wrkDt == null ? "" : scwin.params.hid_wrkDt; //작업일자
  scwin.web_wrkHh = scwin.params.hid_wrkHh == null ? "" : scwin.params.hid_wrkHh; // 작업시간
  scwin.web_lineNm = scwin.params.hid_lineNm == null ? "" : scwin.params.hid_lineNm; // LINE명
  scwin.web_rltNo = scwin.params.hid_rltNo == null ? "" : scwin.params.hid_rltNo; // 관련번호
  scwin.web_vsslNm = scwin.params.hid_vsslNm == null ? "" : scwin.params.hid_vsslNm; // 선박명
  scwin.web_portcnt = scwin.params.hid_portcnt == null ? "" : scwin.params.hid_portcnt; // 항차
  scwin.web_portCd = scwin.params.hid_portCd == null ? "" : scwin.params.hid_portCd; // 목적항
  scwin.web_closeDt = scwin.params.hid_closeDt == null ? "" : scwin.params.hid_closeDt; // 마감일자
  scwin.web_closeHh = scwin.params.hid_closeHh == null ? "" : scwin.params.hid_closeHh; // 마감시간
  scwin.web_odrRmk = scwin.params.hid_odrRmk == null ? "" : scwin.params.hid_odrRmk; // 비고
  scwin.web_odrNo = scwin.params.hid_odrNo == null ? "" : scwin.params.hid_odrNo; // 오더번호
  scwin.web_onRgnCd = scwin.params.hid_onRgnCd == null ? "" : scwin.params.hid_onRgnCd; // 상차지역코드
  scwin.web_onRgnNm = scwin.params.hid_onRgnNm == null ? "" : scwin.params.hid_onRgnNm; // 상차지역명
  scwin.web_onZip = scwin.params.hid_onZip == null ? "" : scwin.params.hid_onZip; // 상차지우편번호
  scwin.web_onDtl = scwin.params.hid_onDtl == null ? "" : scwin.params.hid_onDtl; // 상차상세
  scwin.web_doorRgnCd = scwin.params.hid_doorRgnCd == null ? "" : scwin.params.hid_doorRgnCd; // DOOR지역코드
  scwin.web_doorRgnNm = scwin.params.hid_doorRgnNm == null ? "" : scwin.params.hid_doorRgnNm; // DOOR지역명
  scwin.web_doorZip = scwin.params.hid_doorZip == null ? "" : scwin.params.hid_doorZip; // DOOR우편번호
  scwin.web_doorDtl = scwin.params.hid_doorDtl == null ? "" : scwin.params.hid_doorDtl; // DOOR상세
  scwin.web_doorPicNm = scwin.params.hid_doorPicNm == null ? "" : scwin.params.hid_doorPicNm; // DOOR담당자명
  scwin.web_doorTelNo = scwin.params.hid_doorTelNo == null ? "" : scwin.params.hid_doorTelNo; // DOOR전화번호
  scwin.web_offRgnCd = scwin.params.hid_offRgnCd == null ? "" : scwin.params.hid_offRgnCd; // 하차지역코드
  scwin.web_offRgnNm = scwin.params.hid_offRgnNm == null ? "" : scwin.params.hid_offRgnNm; // 하차지역명
  scwin.web_offZip = scwin.params.hid_offZip == null ? "" : scwin.params.hid_offZip; // 하차지우편번호
  scwin.web_offDtl = scwin.params.hid_offDtl == null ? "" : scwin.params.hid_offDtl;
  scwin.odrKndCd = ""; //오더종류코드
  scwin.impExpClsCd = ""; //수출입내수구분코드
  scwin.statusFlag = ""; //수정/등록 Flag(C:Regist, U:Update)
  scwin.mgntTrgtClntYn = 0; //거래처 관리대상여부
  scwin.retrieveYn = "N"; //조회여부
  scwin.odrCtrlClsCd = ""; //TS구분 -01적하,02비적하
  scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
  scwin.selfClsCd = ""; //자가구분코드 - 자가구분콤보 onSelChange이벤트에서 값 세팅
  scwin.first_YN = 0;
  scwin.vCtrtWrkPathSeq = 0; // 경기지사 복사 관련 변수
  scwin.offdock_yn = 1; // default offdock처리
  scwin.gClntClsCd = ""; //화물위탁증 세팅을 위한 매출구분코드값 저장.
  scwin.search_clntClsYn = 0;
  scwin.UPLOAD_STOP_YN = 'N';
  //scwin.callBackNoNeed   = "N";   //계약번호조회구부코드

  if (scwin.linkPage == "webOdr") {
    grp_header.hide();
    txt_odrNo2.setValue('웹오더생성 [의뢰번호 : ' + scwin.reqNo + ']');
  } else {
    txt_odrNo2.hide();
  }
  if ("4AA" != scwin.lobranCd) {
    tbx_onPicNm.setValue("상차담당");
    lc_time.unbindRef();
    lc_time.hide();
  } else {
    tbx_onPicNm.setValue("입고구분");
    ed_lduldPicNm.unbindRef();
    ed_lduldPicNm.hide();
  }
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  //console.log("scwin.onUdcCompleted");

  try {
    const results = await Promise.all([scwin.loadCommonCodePromise(), scwin.loadDsCommonUtilPromise(), scwin.loadGauceUtilPromise()]);
  } catch (error) {
    console.error("공통코드 조회 중 오류 발생", error);
  }
  await scwin.f_retrieveGridLookup();
  await scwin.f_set("INIT", "CREATE");
  if (scwin.linkPage == "odrList") {
    ed_odrNo.setValue($c.str.trim($p, scwin.odrNo));
    await scwin.f_retrieve();
    if (scwin.odrCopy == "copy") {
      set_copy();
    }
  }

  //특이사항저장버튼 숨김
  btn_saveRmk.hide();
  if (scwin.linkPage == "webOdr") {
    ed_ctrtClntNo.setValue(scwin.web_clntNo);
    await scwin.f_openCommonPopUp(1, 'CTRT', 'T', 'F', 'F');
    if (scwin.web_lineNm != "") {
      ed_lineCd.Text = scwin.web_lineNm;
      await scwin.f_openCommonPopUp(3, '', 'T', 'F', 'F');
    }
    if (scwin.web_vsslNm != "") {
      ed_vsslCd.Text = scwin.web_vsslNm;
      await scwin.f_openCommonPopUp(8, '', 'T', 'F', 'F');
    }
    ed_bookingNo.setValue(scwin.web_rltNo);
    ed_lduldWrkPlCd.setValue(scwin.web_onRgnCd);
    ed_lduldWrkPlNm.setValue(scwin.web_onRgnNm);
    ed_lduldZip.setValue(scwin.web_onZip);
    ed_lduldDtl.setValue(scwin.web_onRgnNm);
    ed_dptWrkPlCd.setValue(scwin.web_doorRgnCd);
    ed_dptWrkPlNm.setValue(scwin.web_doorRgnNm);
    ed_dptZip.setValue(scwin.web_doorZip);
    ed_dptDtl.setValue(scwin.web_doorRgnNm);
    ed_onPicNm.setValue(scwin.web_doorPicNm);
    ed_onPicTelNo.setValue(scwin.web_doorTelNo);
    ed_arvWrkPlCd.setValue(scwin.web_offRgnCd);
    ed_arvWrkPlNm.setValue(scwin.web_offRgnNm);
    ed_arvZip.setValue(scwin.web_offZip);
    ed_arvDtl.setValue(scwin.web_offRgnNm);
    if (web_portCd != "") {
      ed_destPortCd.setValue(scwin.web_portCd);
      await scwin.f_openCommonPopUp(6, '', 'T', 'F', 'F');
    }
    ed_portcnt.setValue(scwin.web_portcnt);
    ed_closeDt.setValue(scwin.web_closeDt);
    ed_closeHh.setValue(scwin.web_closeHh);
    ta_rmk.setValue(scwin.web_odrRmk);
  }
  if (ed_lineCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    tr_vanTerm.hide();
    //common.cf_HideObject([tr_vanTerm]);
  } else if (scwin.selfClsCd == "LI" && (ed_lineCd.getValue().trim() == "WJS" || ed_lineCd.getValue().trim() == "wjs")) {
    tr_vanTerm.show("");
    //dscommon.cf_ShowObject([tr_vanTerm]);
    //scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
  } else {
    tr_vanTerm.hide();
    //dscommon.cf_HideObject([tr_vanTerm]);
    //scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
  }
  title_MasterKey.hide();
  ed_masterKey.hide();
  //dscommon.cf_HideObject([title_MasterKey, ed_masterKey]);
  lc_wrkTypCd.setValue("");
};
scwin.loadCommonCodePromise = function () {
  const codeOptions = [{
    grpCd: "SD101",
    compID: "lc_transCondCd"
  }, {
    grpCd: "SD102",
    compID: "lc_cntrWtCondCd"
  }, {
    grpCd: "SD220",
    compID: "lc_rsnCd"
  }, {
    grpCd: "SD165",
    compID: "gr_cntrInfo:cntrWrkClsCd"
  }, {
    grpCd: "SD191",
    compID: "gr_cntrInfo:sellItemCd1"
  }, {
    grpCd: "SD192",
    compID: "gr_cntrInfo:sellItemCd2"
  }];
  if ("4AA" == scwin.lobranCd) {
    codeOptions.push({
      grpCd: "SD401",
      compID: "lc_time"
    });
  }

  // Promise 반환
  return new Promise(resolve => {
    $c.data.setCommonCode($p, codeOptions, function () {
      resolve(true);
    });
  });
};
scwin.loadDsCommonUtilPromise = function () {
  const listOptions = [{
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_CNTR,
    outputFields: ["CD", "CD_NM"]
  }, {
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_ALL,
    outputFields: ["CD", "CD_NM"]
  }];

  // Promise 반환
  return new Promise(resolve => {
    $c.data.setDsCommonUtil($p, listOptions, function () {
      resolve(true);
    });
  });
};
scwin.loadGauceUtilPromise = function () {
  const comboOptions = [{
    method: "getCodeList",
    param1: "SD125",
    param2: 1,
    param3: "1",
    compID: "lc_odrClsCd"
  }];

  // Promise 반환
  return new Promise(resolve => {
    $c.data.setGauceUtil($p, comboOptions, function () {
      resolve(true);
    });
  });
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
  let chkVal = await $c.gus.cfValidate($p, [tbl_search], null, true);
  if (!chkVal) {
    return;
  }
  var set_odrNo = ed_odrNo.getValue();
  scwin.f_clearDataSet();
  scwin.mgntTrgtClntYn = 0;
  scwin.search_clntClsYn = 1;
  scwin.hid_chkMode = "";
  if (ds_cndOdrNo.getTotalRow() > 0) ds_cndOdrNo.removeAll();
  ds_cndOdrNo.setRowPosition(ds_cndOdrNo.insertRow());
  ds_cndOdrNo.setCellData(0, "odrNo", set_odrNo);
  sbm_retrieve.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieve);
  await scwin.sbm_retrieve_submitdone(rtn);
  ed_odrNo.setValue(set_odrNo);
  scwin.hid_chkMode = "";
};

//-------------------------------------------------------------------------
// 공통팝업 호출
//-------------------------------------------------------------------------
scwin.f_beforeOpenCommonPopUpEd = function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    //alert("1");
    nmObj.setValue("");
    if (gubun1 == 3) {
      //Line조회
      ds_odrInfo.setCellData(0, "shpCoClntNo", "");
      ed_shpCoClntNm.setValue("");
      ;
    } else if (gubun1 == 1) {
      //거래처조회
      if (ds_ctrtNo.getTotalRow() > 0) ds_ctrtNo.removeAll();
      if (ds_reqClntNo.getTotalRow() > 0) ds_reqClntNo.removeAll();
      if (ds_bilgClntNo.getTotalRow() > 0) ds_bilgClntNo.removeAll();
      $c.gus.cfInitObjects($p, [ed_ctrtClntNo, ed_ctrtClntNm, ed_reqClntNo, ed_bilgClntNo]);
      //cfInitHidVal([ed_ctrtClntNo, ed_ctrtClntNm, ed_reqClntNo, ed_bilgClntNo]);
    }
  } else {
    //alert("2::"+cdObj);
    nmObj.setValue("");
    scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
  }
};
scwin.f_openCommonPopUp = function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  return new Promise(function (resolve, reject) {
    var pCode = "";
    var pName = "";
    var pWhere = "";
    var pWtitleSearch = "";
    var pSelectId = "";

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
          pCode = ed_ctrtClntNo.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_reqClntNo.hidVal	 = pCode;
            lc_reqClntNm.setSelectedIndex(-1);
          }
          pWtitleSearch = "계약 거래처,거래처코드/명";
          pWhere = ",CTRT,CTRT";
          udc_ctrtClntNo.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackClntCtrt, res);
          }, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "REQ") {
          //요청거래처
          pCode = ed_reqClntNo.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_reqClntNo.hidVal  = pCode;
            lc_reqClntNm.setSelectedIndex(-1);
          }
          pWtitleSearch = "요청 거래처,거래처코드,거래처명";
          pWhere = ",,CTRT";
          if (scwin.search_clntClsYn == 1) pWhere = pWhere + ",,SEARCH_CLNT";
          udc_reqClntNo.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackClntReq, res);
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
          if (scwin.search_clntClsYn == 1) pWhere = pWhere + ",,SEARCH_CLNT";
          udc_bilgClntNo.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackClntBilg, res);
          }, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        }
        break;
      case 2:
        //매출/청구부서
        //pWhere = "T,J";	// 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
        if (gubun2 == "SELL") {
          //매출부서
          scwin.pNoDataCloseTF = pNoDataCloseTF;
          pCode = ed_sellLodeptCd.getValue().trim();
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
          scwin.pNoDataCloseTF = pNoDataCloseTF;
          pCode = ed_bilgLodeptCd.getValue().trim();
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
        pName = ed_lineNm.getValue().trim();
        if (pNoDataCloseTF == "T") {
          //ed_lineCd.hidVal = pCode;
          $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
          //$c.gus.cfInitHidVal([ed_lineNm, ed_shpCoClntNm]);
          ds_odrInfo.setCellData(0, "shpCoClntNo", "");
          pWhere = "T";
        }
        pWtitleSearch = "LINE,LINE코드/명";
        udc_lineCd.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.callBackKLineInfo, res);
        }, pCode, pName, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        break;
      case 5:
        //출발/도착 작업장 조회 - 코드/명 가져오기
        if (gubun2 == "DPT") {
          //작업지
          pCode = ed_dptWrkPlCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_dptWrkPlCd.hidVal = pCode;
            ed_dptWrkPlNm.setValue("");
          }
          pWtitleSearch = "작업지,작업장코드/명";
          if (scwin.memInfo.loginId == "281776" || scwin.memInfo.loginId == "811160") {
            pSelectId = "retrieveWrkPlInfo_byCd";
          } else {
            pSelectId = "retrieveWrkPlInfo_tpro";
          }
          pWhere = ",,,,,,," + ed_ctrtClntNo.getValue();
          udc_dptWrkPlCd.setSelectId(pSelectId);
          udc_dptWrkPlCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackWrkDpt, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "ARV") {
          //하차지
          pCode = ed_arvWrkPlCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_arvWrkPlCd.hidVal = pCode;
            ed_arvWrkPlNm.setValue("");
          }
          pWtitleSearch = "하차지,작업장코드/명";
          if (scwin.memInfo.loginId == "281776" || scwin.memInfo.loginId == "811160") {
            pSelectId = "retrieveWrkPlInfo_byCd";
          } else {
            pSelectId = "retrieveWrkPlInfo_tpro";
          }
          //pWhere = ",,,,,,1";
          pWhere = ",,,,,,," + ed_ctrtClntNo.getValue();
          udc_arvWrkPlCd.setSelectId(pSelectId);
          udc_arvWrkPlCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackWrkArv, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "LDULD") {
          //상차지
          pCode = ed_lduldWrkPlCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_lduldWrkPlCd.hidVal = pCode;
            ed_lduldWrkPlNm.setValue("");
          }
          pWtitleSearch = "상차지,작업장코드/명";
          if (scwin.memInfo.loginId == "281776" || scwin.memInfo.loginId == "811160") {
            pSelectId = "retrieveWrkPlInfo_byCd";
          } else {
            pSelectId = "retrieveWrkPlInfo_tpro";
          }
          //pWhere = ",,,,,,1";
          pWhere = ",,,,,,," + ed_ctrtClntNo.getValue();
          udc_lduldWrkPlCd.setSelectId(pSelectId);
          udc_lduldWrkPlCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackWrkLduld, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "RAILDPT") {
          //철송출발작업장
          pCode = ed_railroadDptWrkPlCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_railroadDptWrkPlCd.hidVal = pCode;
            ed_railroadDptWrkPlNm.setValue("");
          }
          pWtitleSearch = "철송출발작업장,작업장코드/명";
          pSelectId = "retrieveWrkPlInfo_tpro";
          pWhere = ",,,13,,,1";
          udc_railroadDptWrkPlCd.setSelectId(pSelectId);
          udc_railroadDptWrkPlCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackRailWrkDpt, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        } else if (gubun2 == "RAILARV") {
          //철송도착작업장
          pCode = ed_railroadArvWrkPlCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_railroadArvWrkPlCd.hidVal = pCode;
            ed_railroadArvWrkPlNm.setValue("");
          }
          pWtitleSearch = "철송도착작업장,작업장코드/명";
          pSelectId = "retrieveWrkPlInfo_tpro";
          pWhere = ",,,13,,,1";
          udc_railroadArvWrkPlCd.setSelectId(pSelectId);
          udc_railroadArvWrkPlCd.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackRailWrkArv, res);
          }, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        }
        break;
      case 6:
        //목적Port조회 - 코드/명 가져오기
        pCode = ed_destPortCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          //ed_destPortCd.hidVal = pCode;
          hid_destPortNm.setValue("");
        }
        pWtitleSearch = "목적항구,항구코드/명";
        udc_destPortCd.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.callBackDestPort, res);
        }, pCode, pCode, pWinCloseTF, null, null, null, null, null, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        break;
      case 8:
        //선박조회
        if (gubun2 == "") {
          //본선의 선박코드
          pCode = ed_vsslCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_vsslCd.hidVal = pCode;
            ed_vsslNm.setValue("");
          }
          pWtitleSearch = "선박, 코드/명";
        } else if (gubun2 == "TS") {
          //TS본선의 선박코드
          pCode = ed_tsVsslCd.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_tsVsslCd.hidVal = pCode;
            ed_tsVsslNm.setValue("");
          }
          pWtitleSearch = "TS선박, 코드/명";
        }
        udc_vsslCd.cfCommonPopUpAsync(function (res) {
          handleCallback(scwin.callBackVsslInfo, res);
        }, pCode, pCode, pWinCloseTF, null, null, null, null, null, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
        break;
      case 10:
        //우편번호조회
        if (gubun2 == "DPT_ZIP") {
          //작업지
          pCode = ed_dptZip.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_dptZip.hidVal = pCode;
          }
          pWtitleSearch = "작업지우편번호,우편번호/동이름";
          udc_zip.setSelectId("retrieveZipList_tpro");
          udc_zip.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackZipDpt, res);
          }, pCode, '', pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        } else if (gubun2 == "ARV_ZIP") {
          //하차지
          pCode = ed_arvZip.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_arvZip.hidVal = pCode;
          }
          pWtitleSearch = "하차지우편번호,우편번호/동이름";
          udc_zip.setSelectId("retrieveZipList_tpro");
          udc_zip.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackZipArv, res);
          }, pCode, '', pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
        } else if (gubun2 == "LDULD_ZIP") {
          //상차지
          pCode = ed_lduldZip.getValue().trim();
          if (pNoDataCloseTF == "T") {
            //ed_lduldZip.hidVal = pCode;
          }
          pWtitleSearch = "상차지우편번호,우편번호/동이름";
          udc_zip.setSelectId("retrieveZipList_tpro");
          udc_zip.cfCommonPopUpAsync(function (res) {
            handleCallback(scwin.callBackZipLduld, res);
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
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, ed_ctrtClntNo, ed_ctrtClntNm);
    //화물위탁증 세팅을 위한 값 초기화
    ed_trnsRealMchtClntNm.setValue("");
    ed_trnsRealMchtClntTelNo.setValue("");
    ed_trnsCnsgMchtClntNm.setValue("");
    ed_trnsCnsgMchtClntTelNo.setValue("");

    //실화주세팅
    if (rtnList != null && rtnList[0] != "N/A") {
      var strToken = rtnList[9].split("?");

      //운송사(03)가 아니면
      if (rtnList[2] != "03") {
        //공통거래처체크, 공통거래처가 아니면 실화주에 계약거래처 세팅
        if (ed_ctrtClntNo.getValue().substring(0, 4) != "9999") {
          ed_trnsRealMchtClntNm.setValue(rtnList[1]);
          ed_trnsRealMchtClntTelNo.setValue(strToken[1]);
        }
      } else {
        //운송사인 경우 전역변수에 저장
        scwin.gClntClsCd = rtnList[2];
      }
    }
    await scwin.f_retrieveCtrtNo(); //계약번호 가져오기
  }
};

//청구거래처
scwin.callBackClntReq = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_reqClntNo.setValue(rtnList[0]);

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
        var insRow = ds_reqClntNo.insertRow();
        ds_reqClntNo.setCellData(insRow, "clntNo", rtnList[0]);
        ds_reqClntNo.setCellData(insRow, "clntNm", rtnList[1]);
        lc_reqClntNm.setSelectedIndex(ds_reqClntNo.getTotalRow() - 1);
      }

      // if(scwin.callBackNoNeed == "Y") {
      //     await scwin.f_retrieveCtrtNo();
      // }   
    }
  } else {
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
    lc_reqClntNm.setSelectedIndex(-1);
  }
};

//요청거래처
scwin.callBackClntBilg = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
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
        var insRow = ds_bilgClntNo.insertRow();
        ds_bilgClntNo.setCellData(insRow, "clntNo", rtnList[0]);
        ds_bilgClntNo.setCellData(insRow, "clntNm", rtnList[1]);
        lc_bilgClntNm.setSelectedIndex(ds_bilgClntNo.getTotalRow() - 1);
      }
      await scwin.f_retrieveCtrtNo2(); //계약번호 가져오기

      //화물위탁증 세팅을 위한 값 초기화
      if ($c.gus.cfIsNull($p, ed_odrNo.getValue())) {
        ed_trnsRealMchtClntNm.setValue("");
        ed_trnsRealMchtClntTelNo.setValue("");
        ed_trnsCnsgMchtClntNm.setValue("");
        ed_trnsCnsgMchtClntTelNo.setValue("");
      }

      //계약거래처가 운송사인 경우
      var strToken = rtnList[9].split("?");
      //alert("gClntClsCd="+gClntClsCd+",strToken="+strToken[1]);
      if (scwin.gClntClsCd == "03") {
        //주선업자 세팅
        if (rtnList != null && rtnList[0] != "N/A") {
          //공통거래처체크, 공통거래처가 아니면 주선업자에 계약거래처 세팅
          if (ed_ctrtClntNo.getValue().substring(0, 4) != "9999") {
            ed_trnsCnsgMchtClntNm.setValue(rtnList[1]);
            ed_trnsCnsgMchtClntTelNo.setValue(strToken[1]);
          }
        }
      } else {
        if (scwin.statusFlag == "R") {} else {
          if (rtnList[2] != "03") {
            ed_trnsRealMchtClntNm.setValue(rtnList[1]);
            ed_trnsRealMchtClntTelNo.setValue(strToken[1]);
          } else {
            ed_trnsCnsgMchtClntNm.setValue(rtnList[1]);
            ed_trnsCnsgMchtClntTelNo.setValue(strToken[1]);
          }
        }
      }
    }
  } else {
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
    lc_bilgClntNm.setSelectedIndex(-1);
  }
};

//매출부서
scwin.callBackSellLodept = function (rtnList) {
  if (scwin.pNoDataCloseTF == "T" && rtnList == "N/A") {
    //내부적으로 팝업프로세스 돌린 경우
    $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
    //$c.gus.cfInitHidVal([ed_sellLodeptCd, ed_sellLodeptNm]);
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_sellLodeptCd, ed_sellLodeptNm);
  }
};

//청구부서
scwin.callBackBilgLodept = function (rtnList) {
  if (scwin.pNoDataCloseTF == "T" && rtnList == "N/A") {
    //내부적으로 팝업프로세스 돌린 경우
    $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
    //$c.gus.cfInitHidVal([ed_bilgLodeptCd, ed_bilgLodeptNm]);
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
  }
};

//Line
scwin.callBackKLineInfo = async function (rtnList) {
  //console.log(rtnList);

  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      if (scwin.odrKndCd == DsConstants.ODR_KND_CD_ON_HIRE_ODR) {
        // On-Hire
        if (ed_ctrtClntNo.getValue().trim() != rtnList[2]) {
          await $c.win.alert($p, "계약거래처와 라인거래처가 상이합니다. 확인 후 다시 입력하여 주세요.");
        }
      }
      ed_lineCd.setValue(rtnList[0]);
      //ed_lineCd.hidVal = rtnList[0];
      ed_lineNm.setValue(rtnList[1]);
      //ed_lineNm.hidVal = rtnList[1];

      ds_odrInfo.setCellData(0, "shpCoClntNo", rtnList[4]);
      ed_shpCoClntNm.setValue(rtnList[5]);
      //ed_shpCoClntNm.hidVal = rtnList[5];
    } else {
      $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
      //$c.gus.cfInitHidVal([ed_lineNm, ed_shpCoClntNm]);
      ds_odrInfo.setCellData(0, "shpCoClntNo", "");
    }
    scwin.f_getOffdockYn();
  } else {
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    //$c.gus.cfInitHidVal([ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    ds_odrInfo.setCellData(0, "shpCoClntNo", "");
  }
};

//작업지
scwin.callBackWrkDpt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
  if (rtnList != null) {
    ed_dptZip.setValue(rtnList[6]);
    scwin.f_openCommonPopUp(10, 'DPT_ZIP', 'T', 'F', 'F');
  }
};

//하차지
scwin.callBackWrkArv = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvWrkPlNm);
  if (rtnList != null) {
    ed_arvZip.setValue(rtnList[6]);
    scwin.f_openCommonPopUp(10, 'ARV_ZIP', 'T', 'F', 'F');
  }
};

//상차지
scwin.callBackWrkLduld = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lduldWrkPlCd, ed_lduldWrkPlNm);
  if (rtnList != null) {
    ed_lduldZip.setValue(rtnList[6]);
    scwin.f_openCommonPopUp(10, 'LDULD_ZIP', 'T', 'F', 'F');
  }
};

//철송출발작업장
scwin.callBackRailWrkDpt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_railroadDptWrkPlCd, ed_railroadDptWrkPlNm);
};

//철송도착작업장
scwin.callBackRailWrkArv = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_railroadArvWrkPlCd, ed_railroadArvWrkPlNm);
};

//목적항구
scwin.callBackDestPort = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_destPortCd, hid_destPortNm);
};

//작업지우편번호
scwin.callBackZipDpt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptZip, "");
};

//하차지우편번호
scwin.callBackZipArv = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvZip, "");
};

//상차지우편번호
scwin.callBackZipLduld = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lduldZip, "");
};

//배차담당		
scwin.callBackUserInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, ed_alloccarPicNm);
};

//----------------------------------------
// 새우편번호조회 > gubun - 1: 상차지, 2: 작업지, 3:하차지
//----------------------------------------
scwin.f_openZipPopUpNew = async function (gubun, pClose) {
  var zip, addr;
  if (gubun == 1) {
    zip = ed_lduldZip.getValue();
    addr = ed_lduldDtl.getValue();
  } else if (gubun == 2) {
    zip = ed_dptZip.getValue();
    addr = ed_dptDtl.getValue();
  } else if (gubun == 3) {
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
  // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (gubun == 1) {
      ed_lduldZip.setValue(rtnList.zip);
      ed_lduldDtl.setValue(rtnList.addr1);
    } else if (gubun == 2) {
      ed_dptZip.setValue(rtnList.zip);
      ed_dptDtl.setValue(rtnList.addr1);
    } else if (gubun == 3) {
      ed_arvZip.setValue(rtnList.zip);
      ed_arvDtl.setValue(rtnList.addr1);
    }
  }
};

//본선의 선박코드
scwin.callBackVsslInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

//TS본선의 선박코드
scwin.callBackVsslTsInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_tsVsslCd, ed_tsVsslNm);
};

//----------------------------------------
//계약거래처에 해당 되는 컨테이너 계약번호 리스트 조회
//----------------------------------------
scwin.f_retrieveCtrtNo = async function () {
  //console.log("scwin.f_retrieveCtrtNo")
  if (ds_cndCtrtNo.getTotalRow() > 0) ds_cndCtrtNo.removeAll();

  //검색조건값 세팅
  ds_cndCtrtNo.insertRow();
  ds_cndCtrtNo.setCellData(0, "ctrtClntNo", $c.str.trim($p, ed_ctrtClntNo.getValue())); //계약거래처
  ds_cndCtrtNo.setCellData(0, "bizDivCntrYn", "1"); //사업부문컨테이너여부
  ds_cndCtrtNo.setCellData(0, "bizDivBulkYn", ""); //사업부문벌크여부
  ds_cndCtrtNo.setCellData(0, "odrKndCd", scwin.odrKndCd); //사업부문벌크여부
  ds_cndCtrtNo.setCellData(0, "impExpDomesticClsCd", scwin.impExpClsCd); //수출입내수구분코드

  //조회해서 가지고온 계약번호가 존재할 경우 계약번호를 세팅  (17/06/07 추가, 서동원)
  if (ds_odrInfo.getCellData(0, "ctrtNo") != null) {
    ds_cndCtrtNo.setCellData(0, "ctrtNo", ds_odrInfo.getCellData(0, "ctrtNo"));
  }
  sbm_retrieveCtrtNo.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieveCtrtNo);
  await scwin.sbm_retrieveCtrtNo_submitdone(rtn);
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
    }
  } else {
    for (var i = 0; i < ds_ctrtNo.getTotalRow(); i++) {
      ds_ctrtNo.setCellData(i, "label", "(" + ds_ctrtNo.getCellData(i, "clntPicNm") + ":~" + ds_ctrtNo.getCellData(i, "ctrtEndDt") + ":" + ds_ctrtNo.getCellData(i, "crcCd") + ")");
    }
    var options = {};
    options.sortIndex = "ctrtNo";
    options.sortOrder = "-1";
    ds_ctrtNo.multisort(options);

    //lc_ctrtNo.setNodeSet("data:ds_ctrtNo", "label", "ctrtNo");
    lc_ctrtNo1.setSelectedIndex(0);
    //lc_ctrtNo.setValue(ds_odrInfo.getCellData(0, "ctrtNo"));

    //팝업화면설정
    //scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'F');
    //scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'F');
    //ds_odrInfo.setCellData(0, "ctrtNo", ds_odrInfo.getOriginalCellData(0, "ctrtNo"));        
  }
};
scwin.f_retrieveCtrtNo2 = async function () {
  if (ds_cndCtrtNo.getTotalRow() > 0) ds_cndCtrtNo.removeAll();

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
  if (!$c.gus.cfIsNull($p, ed_bilgClntNo.getValue())) {
    scwin.f_openBilgClnt();
  }

  //특이사항 숨김여부체크
  if (!$c.gus.cfIsNull($p, lc_ctrtNo1.getValue())) {
    btn_saveRmk.hide();
  } else {
    btn_saveRmk.show();
  }
};

//----------------------------------------
//계약번호에 해당 되는 청구/요청거래처 정보 조회
//----------------------------------------
scwin.f_retrieveClntList = async function () {
  let ctrtNo = lc_ctrtNo1.getValue();
  if (ctrtNo == "선택") {
    //청구/요청거래처 정보 clear
    scwin.f_clearDataByClntNos();
  } else {
    //동적으로 변경?
    dma_cndClntNo.set("contractNumber", ctrtNo);
    sbm_retrieveClntNo.userData1 = "noError";
    $c.sbm.setAction($p, sbm_retrieveClntNo, "/ncall.ds.sd.odrmgnt.odrreg.RetrieveContractBasisCMD.do");
    let rtn = await $c.sbm.execute($p, sbm_retrieveClntNo);
    await scwin.sbm_retrieveClntNo_submitdone(rtn);
  }
};
scwin.sbm_retrieveClntNo_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }

  //요청거래처 데이터가 없는 경우, 계약거래처를 default로 세팅
  if (ds_reqClntNo.getRowCount() == 0) {
    ds_reqClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    //cfInitHidVal([ed_reqClntNo]);       
    ed_reqClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    await scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'T');
  }

  //청구거래처 데이터가 없는 경우
  if (ds_bilgClntNo.getRowCount() == 0) {
    ds_bilgClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    //cfInitHidVal([ed_bilgClntNo]);
    ed_bilgClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    await scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'T');
  } else {
    await scwin.f_retrieveCtrtNo2();
  }
  if (ds_reqClntNo.getRowCount() > 0) {
    let reqClntNo = ds_reqClntNo.getCellData(0, "clntNo");
    let internalCnt = 0;
    for (let i = 0; i < ds_internalTxn.getRowCount(); i++) {
      if (ds_internalTxn.getCellData(i, "cd") == reqClntNo) {
        //ed_reqClntNo.text = "";
        internalCnt++;
      }
    }
    if (internalCnt > 0) {
      ed_reqClntNo.setValue("");
      lc_reqClntNm.setSelectedIndex(-1);
    }
  }
};

//----------------------------------------
//청구/요청거래처/실화주거래처 정보 clear
//----------------------------------------
scwin.f_clearDataByClntNos = function () {
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_bilgClntNo]);
  //$c.gus.cfInitHidVal([ ed_reqClntNo, ed_bilgClntNo ]);
};

//----------------------------------------
//데이터셋 지우기
//----------------------------------------
scwin.f_clearDataSet = function () {
  if (ds_cndCtrtNo.getTotalRow() > 0) ds_cndCtrtNo.removeAll();
  if (ds_ctrtNo.getTotalRow() > 0) ds_ctrtNo.removeAll();
  if (ds_reqClntNo.getTotalRow() > 0) ds_reqClntNo.removeAll();
  if (ds_bilgClntNo.getTotalRow() > 0) ds_bilgClntNo.removeAll();
  if (ds_cntrInfo.getTotalRow() > 0) ds_cntrInfo.removeAll();
  if (ds_deleteOrderCond.getTotalRow() > 0) ds_deleteOrderCond.removeAll();
  if (ds_cndBkInfo.getTotalRow() > 0) ds_cndBkInfo.removeAll();

  //검색조건 - 오더번호
  //ds_cndOdrNo.removeAll();

  //오더정보
  ds_odrInfo.removeAll();
  ds_odrInfo.setRowPosition(ds_odrInfo.insertRow());
  spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
};

//-------------------------------------------------------------------------
// 품명,컨테이너목록에서 Size, Type, Full/Empty 조회
//-------------------------------------------------------------------------
scwin.f_retrieveGridLookup = async function () {
  await dma_comSearchGrp.set("grpCd", "OP101");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    //console.log('dma_comSearchGrp.set("grpCd", "OP101")');
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrSize.setJSON(e.responseJSON.GAUCE);
  });
  await dma_comSearchGrp.set("grpCd", "OP102");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    //console.log('dma_comSearchGrp.set("grpCd", "OP102")');
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrType.setJSON(e.responseJSON.GAUCE);
  });
  await dma_comSearchGrp.set("grpCd", "OP171");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    //console.log('dma_comSearchGrp.set("grpCd", "OP171")');
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrFE.setJSON(e.responseJSON.GAUCE);
    lc_efClsCd.setValue("F");
  });
  await dma_comSearchGrp.set("grpCd", "FS020");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    //console.log('dma_comSearchGrp.set("grpCd", "FS020")');
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_internalTxn.setJSON(e.responseJSON.GAUCE);
  });
  await dma_comSearchGrp.set("grpCd", "OP408");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    //console.log('dma_comSearchGrp.set("grpCd", "OP408")');
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_wrkType.setJSON(e.responseJSON.GAUCE);
  });
};

//--------------------------------------------------------
// 복사시 화면설정
//--------------------------------------------------------	
scwin.set_copy = async function () {
  // 2015.03.04 경기운송인 경우 복사 : 복사할 오더와 모두 똑같이 복사
  if (ds_odrInfo.getCellData(0, "sellLodeptCd") == "4B2") {
    ica_wrkStDt.setValue(scwin.strCurDate);
    ica_wrkEndDt.setValue(scwin.strCurDate);
    ica_lduldDt.setValue(scwin.strCurDate);
    ed_odrNo.setValue("");
    ed_wrkStHh.setValue("");
    ed_wrkEndHh.setValue("");
    ed_lduldHh.setValue("");
    ed_bookingNo.setValue("");
    ds_cndOdrNo.removeAll();
    ds_cntrInfo.removeAll();
    scwin.hid_cls = "COPY";
    vCtrtWrkPathSeq = ds_cntrInfo.getCellData(0, "ctrtWrkPathSeq");
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [tbl_search, tbl_odrInfoArea, tbl_odrInfoArea2, btn_save, btn_addRow, btn_deleteRow, btn_undoRow]);
    $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
    $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_lduldWrkPlNm, ed_railroadDptWrkPlNm, ed_railroadArvWrkPlNm, ed_alloccarPicNm]);
    scwin.f_setActiveGrid("E"); //그리드 활성화
    scwin.statusFlag = "C";
  } else {
    ica_wrkStDt.setValue(scwin.strCurDate);
    ica_wrkEndDt.setValue(scwin.strCurDate);
    ica_lduldDt.setValue(scwin.strCurDate);
    ed_odrNo.setValue("");
    ed_wrkStHh.setValue("");
    ed_wrkEndHh.setValue("");
    ed_lduldHh.setValue("");
    ed_bookingNo.setValue("");
    ds_cndOdrNo.removeAll();
    ds_cntrInfo.removeAll();
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableAllBtn($p);
    $c.gus.cfEnableObjects($p, [tbl_search, tbl_odrInfoArea, tbl_odrInfoArea2, btn_save, btn_addRow, btn_deleteRow, btn_undoRow]);
    $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
    $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_lduldWrkPlNm, ed_railroadDptWrkPlNm, ed_railroadArvWrkPlNm, ed_alloccarPicNm]);
    scwin.f_setActiveGrid("E"); //그리드 활성화
    scwin.statusFlag = "C";
    if (ds_odrInfo.getCellData(0, "sellLodeptCd") == "5A2") scwin.hid_chkMode = "COPY";
  }

  // 2009.12.15 부강운송(3B2)이면서 철송인 경우 오더복사 팝업창 호출
  if (ds_odrInfo.getCellData(0, "sellLodeptCd") == "3B2" && ds_odrInfo.getCellData(0, "railroadDptWrkPlCd") != "") {
    //수출일반
    var odrNo = ds_odrInfo.getCellData(0, "odrNo");
    if ($c.gus.cfIsNull($p, odrNo)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("오더정보"));
      return false;
    }
    var arrParam = new Array(10);
    arrParam[0] = odrNo; //오더번호

    var opts = {
      id: "sd_402_01_43p",
      popupName: "오더복사(컨테이너수출일반)",
      modal: true,
      type: "browserPopup",
      title: "오더복사(컨테이너수출일반)",
      width: 850,
      height: 650
    };
    let rtnList = $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_43p.xml", opts, arrParam);
    if (rtnList != null) {
      if (rtnList[0] != "N/A") {
        ed_odrNo.setValue(rtnList[0]); // 오더번호 설정
        await scwin.f_retrieve();
      }
    } else {
      if (rtnList[0] == null || rtnList[0] == "") {
        ed_odrNo.setValue("");
      }
    }
  }

  // 2015.03.04 경기운송인 경우 복사 : Focus on Line info after copy
  //ed_lineCd.focus();

  // 2015.09.23 전남운송(5A2)이면 포커스이동
  //alert(ds_odrInfo.NameValue(1, "sellLodeptCd"));
  if (ds_odrInfo.getCellData(0, "sellLodeptCd") == "5A2") {
    ed_bookingNo.focus();
  }
};

//--------------------------------------------------------
//화면 onLoad시 초기 데이타 setting
//gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
//gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
//1.초기화,신규모드,오더종류변경되는 경우 : 오더기본정보 세팅(f_setDefaultValue()참조)
//--------------------------------------------------------
scwin.f_set = async function (gubun1, gubun2) {
  //console.log("scwin.f_set");

  switch (gubun1) {
    case "INIT":
      //초기화/신규

      //수정사유 TR숨기기 hurrah by 20140219
      txt_rsn.hide();
      lc_rsnCd.hide();
      ed_rsnTxt.hide();
      if (btn_saveRmk.getStyle("display") == "none") {
        tr_rsn.hide();
      }
      if (gubun2 == "INIT") {
        //초기화모드
        scwin.f_clearDataSet();
        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfEnableBtnOnly($p, [btn_search, btn_clear]);
        $c.gus.cfDisableObjects($p, [btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
        $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_lduldWrkPlNm, ed_railroadDptWrkPlNm, ed_railroadArvWrkPlNm, ed_alloccarPicNm]);
        scwin.f_setActiveImgPopUp("D"); //팝업버튼 비활성화
        scwin.f_setActiveGrid("D"); //그리드 비활성화

        //$c.gus.cfInitHidVal([tbl_odrInfoArea]);
        $c.gus.cfInitObjects($p, lc_odrCtrlClsCd);
        rd_wrkPathCopy.setValue("0");
        scwin.statusFlag = "C"; //수정등록 flag
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
        lc_odrKndCd.setEventPause("onchange", true);
        lc_odrKndCd.setValue("C4");
        await scwin.lc_odrKndCd_onchange();
        lc_odrKndCd.setEventPause("onchange", false);
      } else if (gubun2 == "CREATE") {
        //신규모드
        ed_odrNo.setValue("");
        scwin.f_clearDataSet();
        $c.gus.cfEnableKeyData($p);
        $c.gus.cfDisableKey($p);
        $c.gus.cfEnableAllBtn($p);
        $c.gus.cfEnableObjects($p, [btn_save, ck_ctrtComm, btn_addRow, btn_deleteRow, btn_undoRow]);
        $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
        $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_lduldWrkPlNm, ed_railroadDptWrkPlNm, ed_railroadArvWrkPlNm, ed_alloccarPicNm]);
        scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화
        scwin.f_setActiveGrid("E"); //그리드활성화
        lc_odrKndCd.focus();

        //$c.gus.cfInitHidVal([tbl_odrInfoArea]);
        $c.gus.cfInitObjects($p, [ed_rowMake]);
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
        rd_wrkPathCopy.setValue("0");

        //작업구분 초기화
        //ds_wrkType.insertRow();
        lc_wrkTypCd.setValue("");

        //작업경로 초기화
        let insRow = ds_ctrtWrkPath.insertRow();
        ds_ctrtWrkPath.setCellData(insRow, 'ctrtWrkPathSeq', 0);
        ds_ctrtWrkPath.setCellData(insRow, 'rmk', "선택");
        scwin.statusFlag = "C"; //수정등록 flag
        scwin.retrieveYn = "N"; //조회여부
        lc_odrKndCd.setEventPause("onchange", true);
        lc_odrKndCd.setValue("C4");
        await scwin.lc_odrKndCd_onchange();
        lc_odrKndCd.setEventPause("onchange", false);
        ed_odrNo.setValue("");
      } else if (gubun2 == "ODRKNDCD") {
        //오더종류 변경되는 경우
        if (ds_cndCtrtNo.getTotalRow() > 0) ds_cndCtrtNo.removeAll();
        if (ds_ctrtNo.getTotalRow() > 0) ds_ctrtNo.removeAll();
        if (ds_reqClntNo.getTotalRow() > 0) ds_reqClntNo.removeAll();
        if (ds_bilgClntNo.getTotalRow() > 0) ds_bilgClntNo.removeAll();
        if (ds_cntrInfo.getTotalRow() > 0) ds_cntrInfo.removeAll();

        //총건수 세팅
        spn_totalRow.setValue(ds_cntrInfo.getTotalRow());

        //초기화
        $c.gus.cfInitObjects($p, [tbl_odrInfoArea], [lc_odrKndCd, scwin.type]);
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        await scwin.f_setSellAndBilgDept(); //매출청구부서셋팅
      }

      //chkBlNoOrCvsslNo = "N";
      scwin.bkCommInfoRows = 0;
      scwin.bookingNoYn = "N";
      scwin.assgnWhouseCd = "";
      scwin.assgnWhouseNm = "";
      lc_selfClsCd.setValue(DsConstants.SELF_CLS_CD_MCOM_TRANS);
      scwin.f_setDefaultValue(); //기본정보세팅

      scwin.hid_chkMode = "create";
      break;
    case "RETRIEVE":
      //조회모드
      var odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); //확정여부
      var odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); //삭제여부
      //var odrCompleteYn	= ds_odrInfo.NameValue(1, "odrCompleteYn");	//오더완료여부
      //alert("odrCompleteYn::"+ds_odrInfo.NameValue(1, "odrCompleteYn"));
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableAllBtn($p);
      $c.gus.cfDisableObjects($p, [btn_save, btn_delete, ck_ctrtComm, btn_addRow, btn_deleteRow, btn_undoRow, btn_saveRmk]);
      $c.gus.cfEnableObjects($p, [btn_search, btn_clear, btn_update, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
      scwin.f_setActiveImgPopUp("D"); //팝업버튼 비활성화
      scwin.f_setActiveGrid("D"); //그리드 활성화

      //확정버튼 control
      if (odrDcsnYn != DsConstants.YN_YES) {
        // 오더가 확정되지 않은 경우
        $c.gus.cfEnableObjects($p, [btn_confirmOdr]);
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
      } else {
        // 오더가 확정된 경우
        $c.gus.cfDisableObjects($p, [btn_confirmOdr]);
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
      }
      scwin.statusFlag = "R";
      scwin.retrieveYn = "Y";
      //ds_odrInfo.UseChangeInfo = "false";
      break;
    case "UPDATE":
      //수정모드
      $c.gus.cfDisableObjects($p, [btn_confirmOdr]);
      scwin.odrKndCd = lc_odrKndCd.getValue(); //오더종류
      scwin.impExpClsCd = "O"; //수출/입 구분코드

      var cntrInfoRows = ds_cntrInfo.getTotalRow();
      var odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); //확정여부
      var odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); //삭제여부

      //수정사유 TR노출 hurrah by 20140219
      if (odrDcsnYn == DsConstants.YN_YES) {
        // 오더가 확정된 경우
        tr_rsn.show("");
        txt_rsn.show("");
        lc_rsnCd.show("");
        ed_rsnTxt.show("");
      }
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableKey($p);
      $c.gus.cfEnableAllBtn($p);
      $c.gus.cfEnableObjects($p, [btn_delete, btn_save, btn_addRow, btn_deleteRow, btn_undoRow, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_saveRmk, ta_rmk]);
      $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_lduldWrkPlNm, ed_expDeclarNo, ed_railroadDptWrkPlNm, ed_railroadArvWrkPlNm, ed_alloccarPicNm]);
      $c.gus.cfDisableBtnOnly($p, [btn_update]);
      scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화
      scwin.f_setActiveGrid("E"); //그리드 활성화
      //비활성화

      $c.gus.cfEnableObj($p, lc_odrKndCd, false); //오더종류코드
      $c.gus.cfEnableObj($p, ed_ctrtClntNo, false); //계약거래처코드
      $c.gus.cfEnableObj($p, ed_ctrtClntNm, false); //계약거래처명
      $c.gus.cfEnableObj($p, lc_ctrtNo1, false); //계약번호 비활성화
      $c.gus.cfEnableObj($p, btn_ctrtClntNo, false); //계약거래처 PopUp버튼

      //오더확정이후 요청처 변경 불가
      if (odrDcsnYn == DsConstants.YN_YES && !$c.gus.cfIsNull($p, ed_reqClntNo.getValue())) {
        // 오더가 확정된 경우
        $c.gus.cfEnableObj($p, ed_reqClntNo, false); //요청처코드
        $c.gus.cfEnableObj($p, lc_reqClntNm, false); //요청처명
        $c.gus.cfEnableObj($p, btn_reqClntNo, false); //요청처 PopUp버튼
      }
      scwin.statusFlag = "U";
      $c.gus.cfEnableObj($p, lc_transCondCd, false);
      $c.gus.cfEnableObj($p, rd_sellYn, false);

      //실적 발생여부를 조회하여 수정항목을 설정
      let chkVal = await scwin.f_chkResultsConfirmation();
      if (chkVal) {
        //수정불가 항목을 Disable 한다.
        //수정 불가항목 : 오더번호, 오더종류, 계약거래처, 계약번호, 대표거래처
        //			 , 출발작업장, 도착작업장, 작업시작일자, 작업시작시간, 작업종료일자, 작업종료시간
        //			 , 자가구분, 작업유형, 합적여부 (벌크오더 화면에는 해당되지 않는다.
        $c.gus.cfDisableObjects($p, [ed_dptWrkPlCd, ed_dptWrkPlNm, btn_dptWrkPlCd, ed_arvWrkPlCd, ed_arvWrkPlNm, btn_arvWrkPlCd, ed_lduldWrkPlCd, ed_lduldWrkPlNm, btn_lduldWrkPlCd, ica_wrkStDt, ed_wrkStHh, ica_wrkEndDt, ed_wrkEndHh, ica_lduldDt, ed_lduldHh, ed_railroadDptWrkPlCd, btn_railroadDptWrkPlCd, ed_railroadArvWrkPlCd, btn_railroadArvWrkPlCd, rd_sellYn]);
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

      //오더별 자가구분코드 LuxeCombo CBData 세팅
      //lc_selfClsCd.Index = lc_selfClsCd.IndexOfColumn("cd", selfClsCd);
      scwin.hid_chkMode = "";

      //수정사항 체크를 위한 데이터셋 copy hurrah 20140220.
      ed_rsnTxt.setValue("");
      ds_odrInfoForCheck.removeAll();
      $c.gus.cfCopyDataSet($p, ds_odrInfo, ds_odrInfoForCheck);

      //alert(ds_odrInfoForCheck);
      //dataSetDebug(ds_odrInfoForCheck, true);
      break;
    case "COPY":
      //오더복사
      break;
  }
};
scwin.f_openBilgClnt = function () {
  pAllSearchTF = "F";
  pNoDataCloseTF = "F";
  pWinCloseTF = "T";
  pCode = ed_bilgClntNo.getValue().trim();
  if (pNoDataCloseTF == "T") {
    //ed_bilgClntNo.hidVal = pCode;
    lc_bilgClntNm.setSelectedIndex(-1);
  }
  pWtitleSearch = "청구 거래처,거래처코드/명";
  pWhere = ",,CTRT,,SEARCH_CLNT";
  udc_bilgClntNo2.cfCommonPopUp(scwin.callBackClntBilg2, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
};
scwin.callBackClntBilg2 = function (rtnList) {
  var strToken = rtnList[9].split("?");
  if (scwin.gClntClsCd == "03") {
    //주선업자 세팅
    if (rtnList != null && rtnList[0] != "N/A") {
      //공통거래처체크, 공통거래처가 아니면 주선업자에 계약거래처 세팅
      if (ed_ctrtClntNo.getValue().substring(0, 4) != "9999") {
        ed_trnsCnsgMchtClntNm.setValue(rtnList[1]);
        ed_trnsCnsgMchtClntTelNo.setValue(strToken[1]);
      }
    }
  } else {
    if (scwin.statusFlag == "R") {} else {
      //alert(rtnList[2]);
      //청구거래처의 매출구분이 운송사가 아니면 실화주, 운송사면 주선업자에 세팅. 김병찬대리 요청
      if (rtnList[2] != "03") {
        if (ed_bilgClntNo.getValue().substr(0, 4) == "9999") {
          ed_trnsRealMchtClntNm.setValue("");
          ed_trnsRealMchtClntTelNo.setValue("");
        } else {
          ed_trnsRealMchtClntNm.setValue(rtnList[1]);
          ed_trnsRealMchtClntTelNo.setValue(strToken[1]);
        }
      } else {
        if (ed_bilgClntNo.getValue().substring(0, 4) == "9999") {
          ed_trnsCnsgMchtClntNm.setValue("");
          ed_trnsCnsgMchtClntTelNo.setValue("");
        } else {
          ed_trnsCnsgMchtClntNm.setValue(rtnList[1]);
          ed_trnsCnsgMchtClntTelNo.setValue(strToken[1]);
        }
      }
    }
  }
};

//공통팝업 열기 전에 체크
//param설명 : nmLcObj-코드명콤보(LuxCombo), noEdObj-코드(emedit), gubun1, gubun2
scwin.f_beforeOpenCommonPopUpEdByLc = async function (nmLcObj, noEdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  let noObjVal = noEdObj.getValue().trim();
  if (noObjVal == "") {
    nmLcObj.setSelectedIndex(-1);
  } else {
    nmLcObj.setSelectedIndex(-1);
    await scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
  }
};

//----------------------------------------
//실적 발생여부를 확인
//----------------------------------------
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
        if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "reqNo"))) return true; // 실적이 존재하는 경우
      }
    }
  }
  return false; // 실적이 존재하지 않는 경우
};

//----------------------------------------
//팝업버튼활성/비활성화
//----------------------------------------
scwin.f_setActiveImgPopUp = function (gubun) {
  if (gubun == "E") {
    //활성
    $c.gus.cfEnableObjects($p, [btn_ctrtClntNo, btn_bilgClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_vsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd, btn_destPortCd, btn_dptZip, ica_wrkStDt, btn_arvZip, ica_wrkEndDt, btn_lduldZip, ica_lduldDt, btn_railroadDptWrkPlCd, btn_railroadArvWrkPlCd]);
  } else if (gubun == "D") {
    //비활성
    $c.gus.cfDisableObjects($p, [btn_ctrtClntNo, btn_bilgClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_vsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd, btn_destPortCd, btn_dptZip, ica_wrkStDt, btn_arvZip, ica_wrkEndDt, btn_lduldZip, ica_lduldDt, btn_railroadDptWrkPlCd, btn_railroadArvWrkPlCd]);
  }
};

//----------------------------------------
//그리드활성/비활성화
//----------------------------------------
scwin.f_setActiveGrid = function (gubun) {
  if (gubun == "E") {
    //활성
    gr_cntrInfo.setReadOnly("grid", false);
  } else if (gubun == "D") {
    //비활성
    gr_cntrInfo.setReadOnly("grid", true);
  }
};

//----------------------------------------
/* 오더기본정보 세팅
 * 매출여부,		    컨테이너지정여부,	자가구분코드,	  		작업유형코드, 		등록점소
 * 운송화물구분코드, 수입수출내수구분코드,	수출입구분코드, 		과세구분코드, 		CH구분코드
 * 컨테이너중량조건, 운송조건,			출발일자(현재일자),	도착일자(현재일자)
 */
//----------------------------------------
scwin.f_setDefaultValue = function () {
  //오더 담당 정보 설정
  ds_odrInfo.modifyRowStatus(0, "C");
  ds_odrInfo.setCellData(0, "sellYn", "1"); //매출여부
  ds_odrInfo.setCellData(0, "cntrDsgYn", "1"); //컨테이너지정여부
  ds_odrInfo.setCellData(0, "wrkPatternCd", "00"); //작업유형코드
  ds_odrInfo.setCellData(0, "regBranCd", scwin.lobranCd == null ? "" : scwin.lobranCd); //등록점소 - 사용자 설정 물류점소
  ds_odrInfo.setCellData(0, "transCargoClsCd", "C"); //운송화물구분코드
  ds_odrInfo.setCellData(0, "impExpDomesticClsCd", scwin.impExpClsCd); //수입수출내수구분코드
  ds_odrInfo.setCellData(0, "taxnClsCd", lc_ctrtNo1.getValue()); //과세구분코드
  ds_odrInfo.setCellData(0, "chClsCd", ""); //CH구분코드 
  ds_odrInfo.setCellData(0, "transCondCd", "2"); //운송구분코드
  ds_odrInfo.setCellData(0, "cntrWtCondCd", "H"); //컨테이너중량조건코드

  //출발일자, 도착일자 초기값 설정
  ica_wrkStDt.setValue(scwin.sDate);
  ica_wrkEndDt.setValue(scwin.sDate);
  ica_lduldDt.setValue(scwin.sDate);
};

//----------------------------------------
//오더별 화면 세팅
//----------------------------------------
scwin.f_setInterfaceByOdr = async function (odrKndCd, impExpClsCd) {
  if (ds_odrInfo.getCellData(0, "odrNo").trim() == "" && ds_odrInfo.getTotalRow() > 0) {
    await scwin.f_set("INIT", "ODRKNDCD"); //초기화	ODRKNDCD
  }
};

//----------------------------------------
//행추가
//----------------------------------------
scwin.f_addRowA = function () {
  // ds_cntrInfo.AddRow();
  // ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition, "cntrSizCd") = lc_sizClsCd.Text.trim();
  // ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition, "cntrTypCd") = lc_typClsCd.Text.trim();
  // ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition, "fullEmptyClsCd") = "F";
  // ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition, "wt") = ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition-1, "wt");
  // ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition, "expDeclarNo") = ed_expDeclarNo.Text;
  // ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition, "cntrWrkShapeCd") = lc_wrkTypCd.Text.trim();
  let insRow = ds_cntrInfo.insertRow();
  ds_cntrInfo.setCellData(insRow, "cntrSizCd", lc_sizClsCd.getValue().trim());
  ds_cntrInfo.setCellData(insRow, "cntrTypCd", lc_typClsCd.getValue().trim());
  ds_cntrInfo.setCellData(insRow, "fullEmptyClsCd", "F");
  ds_cntrInfo.setCellData(insRow, "wt", ds_cntrInfo.getCellData(insRow - 1, "wt") == "" ? "0" : ds_cntrInfo.getCellData(insRow - 1, "wt"));
  ds_cntrInfo.setCellData(insRow, "expDeclarNo", ed_expDeclarNo.getValue());
  ds_cntrInfo.setCellData(insRow, "cntrWrkShapeCd", lc_wrkTypCd.getValue().trim());
  //ds_cntrInfo.setCellData(insRow, "cntrSeq"       , "0");
  //ds_cntrInfo.setCellData(insRow, "sellAmt1"      , "0");
  //ds_cntrInfo.setCellData(insRow, "sellAmt2"      , "0");
  gr_cntrInfo.setFocusedCell(insRow, 0);
};
scwin.f_addRowB = function () {
  let sizClsCd = lc_sizClsCd.getValue().trim();
  let typClsCd = lc_typClsCd.getValue().trim();
  let efClsCd = lc_efClsCd.getValue().trim();
  let expDeclarNo = ed_expDeclarNo.getValue();
  let wrkTypCd = lc_wrkTypCd.getValue().trim();
  if (ed_sellLodeptCd.getValue() == "4B2") {
    let wt = ed_setWt.getValue().trim();
    for (var i = 0; i < parseInt(ed_rowMake.getValue().trim()); i++) {
      let insRow = ds_cntrInfo.insertRow();
      ds_cntrInfo.setCellData(insRow, "cntrSizCd", sizClsCd);
      ds_cntrInfo.setCellData(insRow, "cntrTypCd", typClsCd);
      ds_cntrInfo.setCellData(insRow, "fullEmptyClsCd", efClsCd);
      ds_cntrInfo.setCellData(insRow, "wt", wt);
      ds_cntrInfo.setCellData(insRow, "expDeclarNo", expDeclarNo);
      ds_cntrInfo.setCellData(insRow, "ctrtWrkPathSeq", vCtrtWrkPathSeq);
      ds_cntrInfo.setCellData(insRow, "cntrWrkShapeCd", wrkTypCd);
      ds_cntrInfo.setCellData(insRow, "sellAmt1", "0");
      ds_cntrInfo.setCellData(insRow, "sellAmt2", "0");
      gr_cntrInfo.setFocusedCell(insRow, 0);
    }
  } else {
    for (var i = 0; i < parseInt(ed_rowMake.getValue().trim()); i++) {
      let insRow = ds_cntrInfo.insertRow();
      ds_cntrInfo.setCellData(insRow, "cntrSizCd", sizClsCd);
      ds_cntrInfo.setCellData(insRow, "cntrTypCd", typClsCd);
      ds_cntrInfo.setCellData(insRow, "fullEmptyClsCd", efClsCd);
      ds_cntrInfo.setCellData(insRow, "wt", ds_cntrInfo.getCellData(insRow - 1, "wt"));
      ds_cntrInfo.setCellData(insRow, "expDeclarNo", expDeclarNo);
      ds_cntrInfo.setCellData(insRow, "cntrWrkShapeCd", wrkTypCd);
      ds_cntrInfo.setCellData(insRow, "sellAmt1", "0");
      ds_cntrInfo.setCellData(insRow, "sellAmt2", "0");
      gr_cntrInfo.setFocusedCell(insRow, 0);
    }
  }
};

//----------------------------------------
//행삭제
//----------------------------------------
scwin.f_deleteRow = async function () {
  var cntrInfoRows = ds_cntrInfo.getTotalRow();
  var arrCntrNo = new Array();
  var idx = 0;
  var alertStr = "";
  if (cntrInfoRows > 0) {
    for (var i = 0; i < cntrInfoRows; i++) {
      if (ds_cntrInfo.getRowPosition() == i) {
        if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
          //실적일어나지 않은 경우만 해당
          let rowStatus = ds_cntrInfo.getRowStatus(i);
          if (rowStatus == "C") {
            ds_cntrInfo.removeRow(i);
          } else {
            ds_cntrInfo.deleteRow(i);
          }
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

// 행취소
scwin.f_undoRow = function () {
  let rowIndex = ds_cntrInfo.getRowPosition();
  if (ds_cntrInfo.getRowStatus(rowIndex) == "C") {
    ds_cntrInfo.removeRow(rowIndex);
  } else {
    ds_cntrInfo.undoRow(rowIndex);
  }
};

/*************************************************************************
	수정사유 입력대상여부 체크(오더이력관리용)
	- 청구거래처를 제외한 모든항목중 변경내용이 있으면 수정사항을 입력해야함.
	hurrah. 20140220
*************************************************************************/
scwin.f_checkRsn = async function () {
  //alert("<" + ds_odrInfoForCheck.NameValue(1, "sellLodeptCd") + ">?<" + ed_sellLodeptCd.getValue() + ">");
  // 매출부서
  if (ds_odrInfoForCheck.getCellData(0, "sellLodeptCd") != ed_sellLodeptCd.getValue()) {
    return true;
  }
  // 청구부서
  if (ds_odrInfoForCheck.getCellData(0, "bilgLodeptCd") != ed_bilgLodeptCd.getValue()) {
    return true;
  }
  // 매출여부
  if (ds_odrInfoForCheck.getCellData(0, "sellYn") != rd_sellYn.getValue()) {
    return true;
  }
  // LINE코드
  if (ds_odrInfoForCheck.getCellData(0, "lineCd") != ed_lineCd.getValue()) {
    return true;
  }
  // 선사거래처번호
  /*if(ds_odrInfoForCheck.getCellData(0, "shpCoClntNo") != ed_shpCoClntNo.getValue()){
  	return true;
  }*/
  // BK_NO
  if (ds_odrInfoForCheck.getCellData(0, "bkNo") != ed_bookingNo.getValue()) {
    return true;
  }
  // 수출No
  if (ds_odrInfoForCheck.getCellData(0, "expDeclarNo") != ed_expDeclarNo.getValue()) {
    return true;
  }
  // 선박코드
  if (ds_odrInfoForCheck.getCellData(0, "vsslCd") != ed_vsslCd.getValue()) {
    return true;
  }
  // 항차
  if (ds_odrInfoForCheck.getCellData(0, "portcnt") != ed_portcnt.getValue()) {
    return true;
  }
  // 목적항
  if (ds_odrInfoForCheck.getCellData(0, "destPortCd") != ed_portcnt.getValue()) {
    return true;
  }
  // closeDt
  if (ds_odrInfoForCheck.getCellData(0, "closeDt") != ica_closeDt.getValue()) {
    return true;
  }
  // closeHh
  if (ds_odrInfoForCheck.getCellData(0, "closeHh") != ed_closeHh.getValue()) {
    return true;
  }
  // 작업시작일자
  if (ds_odrInfoForCheck.getCellData(0, "wrkStDt") != ica_wrkStDt.getValue()) {
    return true;
  }
  // 작업시작시간
  if (ds_odrInfoForCheck.getCellData(0, "wrkStHh") != ed_wrkStHh.getValue()) {
    return true;
  }
  // 상차지상세
  if (ds_odrInfoForCheck.getCellData(0, "dptDtl") != ed_dptDtl.getValue()) {
    return true;
  }
  // 상차담당자명
  if (ds_odrInfoForCheck.getCellData(0, "onPicNm") != ed_onPicNm.getValue()) {
    return true;
  }
  // 상차담당자전화번호
  if (ds_odrInfoForCheck.getCellData(0, "onPicTelNo") != ed_onPicTelNo.getValue()) {
    return true;
  }
  // 작업종료일자
  if (ds_odrInfoForCheck.getCellData(0, "wrkEndDt") != ica_wrkEndDt.getValue()) {
    return true;
  }
  // 작업종료시간
  if (ds_odrInfoForCheck.getCellData(0, "wrkEndHh") != ed_wrkEndHh.getValue()) {
    return true;
  }
  // 작업지상세
  if (ds_odrInfoForCheck.getCellData(0, "arvDtl") != ed_arvDtl.getValue()) {
    return true;
  }
  // 작업지담당자명
  if (ds_odrInfoForCheck.getCellData(0, "offPicNm") != ed_offPicNm.getValue()) {
    return true;
  }
  // 작업지담당자전화번호
  if (ds_odrInfoForCheck.getCellData(0, "offPicTelNo") != ed_offPicTelNo.getValue()) {
    return true;
  }
  // 상하차일자
  if (ds_odrInfoForCheck.getCellData(0, "lduldDt") != ica_lduldDt.getValue()) {
    return true;
  }
  // 상하차시간
  if (ds_odrInfoForCheck.getCellData(0, "lduldHh") != ed_lduldHh.getValue()) {
    return true;
  }
  // 하차지상세
  if (ds_odrInfoForCheck.getCellData(0, "lduldDtl") != ed_lduldDtl.getValue()) {
    return true;
  }
  if (scwin.lobranCd != "4AA") {
    // 하차지담당자명
    if (ds_odrInfoForCheck.getCellData(0, "lduldPicNm") != ed_lduldPicNm.getValue()) {
      return true;
    }
  } else {
    if (ds_odrInfoForCheck.getCellData(0, "lduldPicNm") != lc_time.getValue()) {
      return true;
    }
  }

  // 하차지담당자전화번호
  if (ds_odrInfoForCheck.getCellData(0, "lduldPicTelNo") != ed_lduldPicTelNo.getValue()) {
    return true;
  }
  // 하차지우편번호
  if (ds_odrInfoForCheck.getCellData(0, "lduldZip") != ed_lduldZip.getValue()) {
    return true;
  }
  // 작업지우편번호
  if (ds_odrInfoForCheck.getCellData(0, "arvZip") != ed_arvZip.getValue()) {
    return true;
  }
  // 상차지우편번호
  if (ds_odrInfoForCheck.getCellData(0, "dptZip") != ed_dptZip.getValue()) {
    return true;
  }
  // 자가
  if (ds_odrInfoForCheck.getCellData(0, "selfClsCd") != lc_selfClsCd.getValue()) {
    return true;
  }
  // 컨테이너중량조건
  if (ds_odrInfoForCheck.getCellData(0, "cntrWtCondCd") != lc_cntrWtCondCd.getValue()) {
    return true;
  }
  // 취소구분
  if (ds_odrInfoForCheck.getCellData(0, "odrClsCd") != lc_odrClsCd.getValue()) {
    return true;
  }
  // 배차담당
  if (ds_odrInfoForCheck.getCellData(0, "alloccarPicId") != ed_alloccarPicId.getValue()) {
    return true;
  }
  // 화물위탁증정보
  if (ds_odrInfoForCheck.getCellData(0, "trnsRealMchtClntNm") != ed_trnsRealMchtClntNm.getValue()) {
    return true;
  }
  // 화물위탁증정보
  if (ds_odrInfoForCheck.getCellData(0, "trnsRealMchtClntTelNo") != ed_trnsRealMchtClntTelNo.getValue()) {
    return true;
  }
  // 화물위탁증정보
  if (ds_odrInfoForCheck.getCellData(0, "trnsCnsgMchtClntNm") != ed_trnsCnsgMchtClntNm.getValue()) {
    return true;
  }
  // 화물위탁증정보
  if (ds_odrInfoForCheck.getCellData(0, "trnsCnsgMchtClntTelNo") != ed_trnsCnsgMchtClntTelNo.getValue()) {
    return true;
  }
  // 특이사항
  if (ds_odrInfoForCheck.getCellData(0, "rmk") != ta_rmk.getValue()) {
    return true;
  }
  return false;
};

//----------------------------------------
//신규/수정 저장
//----------------------------------------
scwin.f_save = async function () {
  let chkVal;
  var v_odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn");
  if (scwin.statusFlag == "U") {
    //수정
    if ($c.data.isModified($p, ds_odrInfo) || $c.data.isModified($p, ds_cntrInfo)) {
      //f_setValueBeforeValidation(); //validation하기 전에 꼭 세팅되어야 할 값들을 세팅
      //ds_cntrInfo.UseChangeInfo = true;

      //확정인 경우 수정사유 입력대상체크 hurrah 20140220
      if (v_odrDcsnYn == DsConstants.YN_YES) {
        chkVal = await scwin.f_checkRsn();
        if (chkVal) {
          //수정사유 입력대상이지만 사유내용 입력이 안된경우
          if ((lc_rsnCd.getValue() == "" || lc_rsnCd.getValue() == "01") && ed_rsnTxt.getValue() == "") {
            await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["수정사유"]); //@은(는) 필수 입력 항목입니다
            ed_rsnTxt.focus();
            return false;
          }
        } else {
          //청구처가 변경되었지만 사유내용 입력이 안된경우
          if (ds_odrInfoForCheck.getCellData(1, "bilgClntNo") != ed_bilgClntNo.getValue() && lc_rsnCd.getValue() == "01" && ed_rsnTxt.getValue() == "") {
            //컨테이너 변경여부 확인
            if ($c.data.isModified($p, ds_cntrInfo)) {
              await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["컨테이너 정보가 변경되었습니다.\n\n수정사유"]); //@은(는) 필수 입력 항목입니다
              ed_rsnTxt.focus();
              return false;
            } else {
              //통과
              //alert("1");
            }

            //청구처가 변경되지 않았지만 사유내용 입력이 안된경우
          } else if (ds_odrInfoForCheck.getCellData(0, "bilgClntNo") == ed_bilgClntNo.getValue() && lc_rsnCd.getValue() == "01" && ed_rsnTxt.getValue() == "") {
            //컨테이너 변경여부 확인
            if ($c.data.isModified($p, ds_cntrInfo)) {
              await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["컨테이너 정보가 변경되었습니다.\n\n수정사유"]); //@은(는) 필수 입력 항목입니다
              ed_rsnTxt.focus();
              return false;
            } else {
              await $c.win.alert($p, "변경사항이 없습니다.");
              return false;
            }
          } else {
            // 사유내용이 입력된경우
            if (ed_rsnTxt.getValue() != "") {
              //통과
              //alert("3");
            } else {
              //컨테이너 변경여부 확인
              if ($c.data.isModified($p, ds_cntrInfo)) {
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["컨테이너 정보가 변경되었습니다.\n\n수정사유"]); //@은(는) 필수 입력 항목입니다
                ed_rsnTxt.focus();
                return false;
              } else {
                await $c.win.alert($p, "변경사항이 없습니다.");
                return false;
              }
            }
          }
        }
      }
      if (lc_ctrtNo1.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
        return false;
      }

      //요청거래처가 내부거래매핑 거래처이면 진행안됨.
      chkVal = await scwin.f_checkInternal();
      if (chkVal) {
        await $c.gus.cfAlertMsg($p, "요청처는 원 청구거래처를 입력해주세요.");
        ed_reqClntNo.focus();
        return false;
      }
      if ($c.util.isEmpty($p, ed_odrNo.getValue())) return;
      chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea, tbl_odrInfoArea2], null, true);
      if (!chkVal) return;
      chkVal = await $c.gus.cfValidate($p, [gr_cntrInfo], null, true);
      if (!chkVal) return;
      if (chkVal) {
        chkVal = await scwin.f_validate();
        if (!chkVal) return;
        let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
        if (conf) {
          //저장하시겠습니까?
          scwin.f_setValueBeforeSave(); //저장하기전 데이터 세팅

          //오더가(C4)오더이고, 부강운송(3B2)이며, 철송이며, 컨테이너 갱신여부가 체크되어있다면
          //1. TB_SD403에 컨테이너번호와 입항일시 UPDATE
          //2. TB_SD404에 오더번호를 UPDATE
          //alert("odrNo=" + ds_odrInfo.NameValue(1, "odrNo").substr(1,2) + ", sellLodeptCd=" +  ds_odrInfo.NameValue(1, "sellLodeptCd") + ", railroadDptWrkPlCd=" + ds_odrInfo.NameValue(1, "railroadDptWrkPlCd") + ",  CHECK=" + chb_cntrRegYn.checked);
          if (ds_odrInfo.getCellData(0, "odrNo").substring(1, 2) == "C4" && ds_odrInfo.getCellData(0, "sellLodeptCd") == "3B2" && ds_odrInfo.getCellData(0, "railroadDptWrkPlCd") != "" && chb_cntrRegYn.getValue() == "1") {
            await scwin.f_updateCntrNoArrvlportDtm();
          } else {
            scwin.f_updateByOdrKndCd(); //오더종류별 저장
          }
        }
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
    }
    //PCY
    setTimeout(async function () {
      await scwin.f_retrieve();
    }, 1000); //바로 조회하면 컨테이너 수정된 것이 반영되지 않음.... ㅜ
  } else if (scwin.statusFlag == "C") {
    //신규
    if ($c.data.isModified($p, ds_odrInfo)) {
      //f_setValueBeforeValidation(); //validation하기 전에 꼭 세팅되어야 할 값들을 세팅
      //ds_cntrInfo.UseChangeInfo = false;

      if (lc_ctrtNo1.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
        return false;
      }

      //요청거래처가 내부거래매핑 거래처이면 진행안됨.
      chkVal = await scwin.f_checkInternal();
      if (chkVal) {
        await $c.gus.cfAlertMsg($p, "요청처는 원 청구거래처를 입력해주세요.");
        ed_reqClntNo.focus();
        return false;
      }
      chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea, tbl_odrInfoArea2], null, true);
      if (!chkVal) return;
      chkVal = await $c.gus.cfValidate($p, [gr_cntrInfo], null, true);
      if (!chkVal) return;
      if (chkVal) {
        chkVal = await scwin.f_validate();
        if (!chkVal) return;
        chkVal = await scwin.f_getCntrCntForMasterKey();
        if (!chkVal) return;

        //최종 저장
        chkVal = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
        if (chkVal) {
          //저장하시겠습니까?
          //오더확정구분을 0으로 변경
          ds_odrInfo.setCellData(0, "odrDcsnYn", "0");
          scwin.f_setValueBeforeSave(); //저장하기전 데이터 세팅
          await scwin.f_registByOdrKndCd(); //오더종류별 저장
        }
      }
    } else {
      if ($c.data.isModified($p, ds_cntrInfo)) {
        chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea], null, true);
        if (chkVal) return;
      } else {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
      }
      //PCY
      setTimeout(async function () {
        await scwin.f_retrieve();
      }, 1000); //바로 조회하면 컨테이너 수정된 것이 반영되지 않음.... ㅜ
    }
  }
};
scwin.f_getCntrCntForMasterKey = async function () {
  if (!$c.gus.cfIsNull($p, ed_masterKey.getValue().trim()) && (ed_lineCd.getValue().trim() == "EVER" || ed_lineCd.getValue().trim() == "HTML" || ed_lineCd.getValue().trim() == "EMS" || ed_lineCd.getValue().trim() == "ITS")) {
    var regBranCd = ds_odrInfo.getCellData(0, "regBranCd");
    var masterKey = ed_masterKey.getValue();
    var tmpCntrSiz = "";
    var tmpCntrTyp = "";
    var regCnt = 0; //오더의 컨테이너 등록개수
    var useCnt = 0; //반출개수
    var usableCnt = 0; //주당 반출가능 개수
    var remainCnt = 0;
    var odrCntrCnt = ds_cntrInfo.getTotalRow();
    for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
      var cntrSiz = ds_cntrInfo.getCellData(i, "cntrSizCd");
      var cntrTyp = ds_cntrInfo.getCellData(i, "cntrTypCd");
      if (tmpCntrSiz != cntrSiz && tmpCntrTyp != cntrTyp) {
        dma_comSearchSys.set("sysCd", "CommonEBC");
        dma_comSearchSys.set("queryId", "retrieveMasterKeyInfo");
        dma_comSearchSys.set("param1", regBranCd);
        dma_comSearchSys.set("param2", masterKey);
        dma_comSearchSys.set("param3", cntrSiz);
        dma_comSearchSys.set("param4", cntrTyp);
        sbm_comSearchSys.userData1 = "noError";
        $c.sbm.setAction($p, sbm_comSearchSys, "/cm.zz.RetrieveComboCMD.do");
        $c.sbm.execute($p, sbm_comSearchSys, dma_comSearchSys.getJSON()).then(async function (e) {
          //console.log("f_retrieveMasterKeyInfo");
          if (e.responseJSON.resultDataSet[0].Code < 0) {
            await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
            return;
          }
          ds_masterKeyInfo.setJSON(e.responseJSON.GAUCE);
          if (!$c.gus.cfIsNull($p, ds_masterKeyInfo.getCellData(0, "col1"))) {
            regCnt = ds_masterKeyInfo.getCellData(0, "col1"); //등록개수
            useCnt = ds_masterKeyInfo.getCellData(0, "col2"); //반출개수
            usableCnt = ds_masterKeyInfo.getCellData(0, "col3"); //주당 반출가능 개수
            remainCnt = parseInt(usableCnt) - parseInt(useCnt);
          } else {
            await $c.win.alert($p, "요청한 마스터키의 SIZE/TYPE이 올바르지 않습니다.\n\n 위에 마스터키를 클릭하셔서 확인바랍니다.");
            return false;
          }
          tmpCntrSiz = cntrSiz;
          tmpCntrTyp = cntrTyp;
          await $c.win.alert($p, "마스터키 : " + masterKey + "  (" + cntrSiz + "/" + cntrTyp + ")" + "\n\n" + "이번주 등록된 컨테이너 개수 : " + regCnt + "개\n\n" + "이번주 반출 개수 : " + useCnt + "개\n\n" + "주당 반출가능 개수 : " + usableCnt + "개");
          if (parseInt(usableCnt) < parseInt(useCnt) + parseInt(odrCntrCnt)) {
            let conf = await $c.win.confirm($p, "반출가능 소진개수를 초과했습니다. 오더승인을 진행하시겠습니까?\n\n" + "남은개수 : " + remainCnt);
            if (conf) {
              return true; //초과이지만 확인후 진행
            } else {
              return false;
            }
          } else {
            return true; //가능하므로 진행
          }
        });
      }
    }
  } else {
    return true; //마스터키 없는건이라 그냥 진행
  }
};

//----------------------------------------
//내부매핑거래처인지 체크
//----------------------------------------
scwin.f_checkInternal = async function () {
  var reqClntNo = ed_reqClntNo.getValue();
  var internalCnt = 0;
  for (var i = 0; i < ds_internalTxn.getTotalRow(); i++) {
    //alert(i);
    if (ds_internalTxn.getCellData(i, "cd") == reqClntNo) {
      //alert(i+"번째 내부거래매핑거래처와 동일!!");
      internalCnt++;
    }
  }
  if (internalCnt > 0) {
    //alert("내부거래매핑거래처와 동일!!");
    return true;
  }
  return false;
};

//----------------------------------------
//유효성체크
//----------------------------------------
scwin.f_validate = async function () {
  //오더기본정보-상,하차 일,시간체크
  let chkVal = await scwin.f_chkDate(ica_lduldDt.getValue(), ica_wrkStDt.getValue());
  if (!chkVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차일자", "작업일자 이전"]); //"@은(는) @이어야 합니다."
    ica_wrkStDt.focus();
    return false;
  }
  chkVal = await scwin.f_chkDate(ica_wrkStDt.getValue(), ica_wrkEndDt.getValue());
  if (!chkVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["작업일자", "하차일자 이전"]); //"@은(는) @이어야 합니다."
    ica_wrkEndDt.focus();
    return false;
  }
  chkVal = await scwin.f_chkTime(ica_lduldDt.getValue(), ed_lduldHh.getValue(), ica_wrkStDt.getValue(), ed_wrkStHh.getValue());
  if (!chkVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차시간", "작업시간 이전"]); //"@은(는) @이어야 합니다."
    ica_wrkStDt.focus();
    return false;
  }
  chkVal = await scwin.f_chkTime(ica_wrkStDt.getValue(), ed_wrkStHh.getValue(), ica_wrkEndDt.getValue(), ed_wrkEndHh.getValue());
  if (!chkVal) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["작업시간", "하차시간 이전"]); //"@은(는) @이어야 합니다."
    ica_wrkEndDt.focus();
    return false;
  }

  //철송구간 체크
  chkVal = await scwin.f_railCheck();
  if (chkVal && ed_railroadDptWrkPlCd.getValue() == "" && ed_railroadArvWrkPlCd.getValue() == "") {
    await $c.win.alert($p, "철송구간이 있습니다. \n철송구간을 입력하세요.");
    ed_railroadDptWrkPlCd.focus();
    return false;
  }
  if (ed_railroadDptWrkPlCd.getValue() != "") {
    if (ed_railroadArvWrkPlCd.getValue() == "") {
      await $c.win.alert($p, "철송구간은 From ~ To 둘다 있어야 합니다.\n 철송구간 To를 입력하세요.");
      ed_railroadArvWrkPlCd.focus();
      return false;
    }
  }
  if (ed_railroadArvWrkPlCd.getValue() != "") {
    if (ed_railroadDptWrkPlCd.getValue() == "") {
      await $c.win.alert($p, "철송구간은 From ~ To 둘다 있어야 합니다.\n 철송구간 From을 입력하세요.");
      ed_railroadDptWrkPlCd.focus();
      return false;
    }
  }
  //컨테이너목록이 한건도 입력되지 않은 경우
  if (ds_cntrInfo.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["컨테이너목록"]); //@은(는) 필수 입력 항목입니다
    return false;
  }
  chkVal = await scwin.f_setWrkPath();
  if (!chkVal) {
    //작업경로 입력확인
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업경로"]); //@은(는) 필수 입력 항목입니다
    return false;
  }
  chkVal = await scwin.f_setWtCheck();
  if (!chkVal) {
    //중량 확인
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["중량", "0 이상"]); //"@은(는) @이어야 합니다."
    return false;
  }
  chkVal = await scwin.f_setMaeChulCheck();
  if (!chkVal) {
    //중량 확인
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상/하차료 ", "매출항목 및 금액 0 이상"]); //"@은(는) @이어야 합니다."
    return false;
  }
  return true;
};

//----------------------------------------
//문자체크
//----------------------------------------
scwin.containsCharsOnly = function (objValue, chars) {
  for (inx = 0; inx < objValue.length; inx++) {
    if (chars.indexOf(objValue.charAt(inx)) != -1) return false;
  }
  return true;
};

//----------------------------------------
//컨테이너 철송확인 
//----------------------------------------
scwin.f_railCheck = async function () {
  var chars = "R";
  var cntrRows = ds_cntrInfo.getTotalRow();
  var wrkPathRows = ds_ctrtWrkPath.getTotalRow();
  var chekRail = "";
  for (var i = 0; i < wrkPathRows; i++) {
    if (scwin.containsCharsOnly(ds_ctrtWrkPath.getCellData(i, "rmk"), chars) == false) {
      for (var j = 0; j < cntrRows; j++) {
        if (ds_ctrtWrkPath.getCellData(i, "ctrtWrkPathSeq") == ds_cntrInfo.getCellData(j, "ctrtWrkPathSeq")) {
          return true;
          break;
        }
      }
    }
  }
  return false;
};

//----------------------------------------
//시작일자, 종료일자 유효성 체크
//----------------------------------------
scwin.f_chkDate = async function (strDate, endDate) {
  var differDays = $c.date.diffDate($p, strDate, endDate);
  if (differDays >= 0) {
    return true;
  } else {
    return false;
  }
};

//----------------------------------------
//시작시간, 종료시간 유효성 체크
//----------------------------------------
scwin.f_chkTime = async function (strDate, strTime, endDate, endTime) {
  var differTime = Number(endDate + endTime.replaceAll(":", "")) - Number(strDate + strTime.replaceAll(":", ""));
  if (differTime > 0) {
    return true;
  } else {
    return false;
  }
};

//----------------------------------------
//컨테이너 작업경로 입력 확인
//----------------------------------------
scwin.f_setWrkPath = async function () {
  let cntrRows = ds_cntrInfo.getTotalRow();
  let pathSeq = "";
  for (let i = 0; i < cntrRows; i++) {
    let ctrtWrkPathSeq = ds_cntrInfo.getCellData(i, "ctrtWrkPathSeq");
    if (ctrtWrkPathSeq != "0" && ctrtWrkPathSeq != "") {
      pathSeq = ctrtWrkPathSeq;
      break;
    }
  }
  if (pathSeq == "0" || pathSeq == "") {
    return false;
  } else {
    for (let i = 0; i < cntrRows; i++) {
      let curPathSeq = ds_cntrInfo.getCellData(i, "ctrtWrkPathSeq");
      if (curPathSeq == "0" || curPathSeq == "") {
        let prePathSeq = ds_cntrInfo.getCellData(i - 1, "ctrtWrkPathSeq");
        if (prePathSeq == "0" || prePathSeq == "") {
          ds_cntrInfo.setCellData(i, "ctrtWrkPathSeq", pathSeq);
        } else {
          ds_cntrInfo.setCellData(i, "ctrtWrkPathSeq", prePathSeq);
        }
      }
    }
  }
  return true;
};

//----------------------------------------
//컨테이너 중량 확인
//----------------------------------------
scwin.f_setWtCheck = async function () {
  var cntrRows = ds_cntrInfo.getTotalRow();
  for (var i = 0; i < cntrRows; i++) {
    if (ds_cntrInfo.getCellData(i, "wt") == "0" || ds_cntrInfo.getCellData(i, "wt") == "") {
      return false;
    }
  }
  return true;
};
scwin.f_setMaeChulCheck = async function () {
  var cntrRows = ds_cntrInfo.getTotalRow();
  for (var i = 0; i < cntrRows; i++) {
    //console.log($c.util.isEmpty(ds_cntrInfo.getCellData(i, "sellItemCd1")));
    //console.log(ds_cntrInfo.getCellData(i, "sellAmt1"));

    if (!$c.util.isEmpty($p, ds_cntrInfo.getCellData(i, "sellItemCd1")) && ds_cntrInfo.getCellData(i, "sellAmt1") == "0") {
      //console.log("1");
      return false;
    }
    if ($c.util.isEmpty($p, ds_cntrInfo.getCellData(i, "sellItemCd1")) && ds_cntrInfo.getCellData(i, "sellAmt1") != "0") {
      //console.log("2");
      return false;
    }
    if (!$c.util.isEmpty($p, ds_cntrInfo.getCellData(i, "sellItemCd2")) && ds_cntrInfo.getCellData(i, "sellAmt2") == "0") {
      //console.log("3");
      return false;
    }
    if ($c.util.isEmpty($p, ds_cntrInfo.getCellData(i, "sellItemCd2")) && ds_cntrInfo.getCellData(i, "sellAmt2") != "0") {
      //console.log("4");
      return false;
    }
  }
  return true;
};

//----------------------------------------
//오더별로 저장하기전에 데이터셋value들 재세팅
//----------------------------------------
scwin.f_setValueBeforeSave = function () {
  var lineCd = ds_odrInfo.getCellData(0, "lineCd"); //Line코드
  var shpCoClntNo = ds_odrInfo.getCellData(0, "shpCoClntNo"); //선사거래처코드
  var sellYn = ds_odrInfo.getCellData(0, "sellYn"); //매출여부

  //오더기본정보 세팅
  ds_odrInfo.set;
  ds_odrInfo.setCellData(0, "crcCd", ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "crcCd")); //계약번호에 해당하는 통화코드
  ds_odrInfo.setCellData(0, "taxnClsCd", lc_ctrtNo1.getSelectedIndex()); //관세구분코드
  ds_odrInfo.setCellData(0, "reqClntNo", ed_reqClntNo.getValue()); //ds_odrInfo.NameValue(1, "ctrtClntNo"); //요청거래처번호 계약거래처로 셋팅
  if (ds_odrInfo.getCellData(0, "realMchtClntNo") == "") {
    ds_odrInfo.setCellData(0, "realMchtClntNo", ds_odrInfo.getCellData(0, "ctrtClntNo")); //실화주거래처번호 계약거래처로 셋팅
  }
  ds_odrInfo.setCellData(0, "regBranCd", $c.gus.cfIsNull($p, scwin.memInfo.lobranCd) ? "" : scwin.memInfo.lobranCd); //등록점소 - 사용자 설정 물류점소
  if (scwin.linkPage == "webOdr") {
    ds_odrInfo.setCellData(0, "clntMgntNo", scwin.reqNo); //웹오더 의뢰번호
  }
  if (ds_odrInfo.getCellData(0, "clntMgntNo") == null || ds_odrInfo.getCellData(0, "clntMgntNo") == "") {
    ds_odrInfo.setCellData(0, "clntMgntNo", scwin.mchtOdrNo); // 동부메탈오더번호가 있을 경우 setting
  }
};

//----------------------------------------
//오더종류별 수정
//----------------------------------------
scwin.f_registByOdrKndCd = async function () {
  var cntrRows = ds_cntrInfo.getTotalRow();
  for (var i = 0; i < cntrRows; i++) {
    //2009.09.04 컨테이너정보의 수출신고번호필드에 값을 입력한다.
    ds_cntrInfo.setCellData(i, "expDeclarNo", ed_expDeclarNo.getValue());
  }
  ds_cndOdrNo.removeAll();
  sbm_regist.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_regist);
  await scwin.sbm_regist_submitdone(rtn);
};

//----------------------------------------
//오더 수정(입항일시, 컨테이너번호, 오더번호만 update)
//----------------------------------------
scwin.f_updateCntrNoArrvlportDtm = async function () {
  sbm_updateCntrNoArrvlportDtm.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_updateCntrNoArrvlportDtm);
  await scwin.sbm_updateCntrNoArrvlportDtm_submitdone(rtn);
};

//----------------------------------------
//오더 수정 저장
//----------------------------------------
scwin.f_updateByOdrKndCd = function () {
  var cntrRows = ds_cntrInfo.getTotalRow();
  if (
  //ds_cntrInfo.IsUpdated == true ||
  ds_odrInfo.getOriginalCellData(0, "sellLodeptCd") != ds_odrInfo.getCellData(0, "sellLodeptCd") || ds_odrInfo.getOriginalCellData(0, "bilgLodeptCd") != ds_odrInfo.getCellData(0, "bilgLodeptCd") || ds_odrInfo.getOriginalCellData(0, "dptWrkPlCd") != ds_odrInfo.getCellData(0, "dptWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "arvWrkPlCd") != ds_odrInfo.getCellData(0, "arvWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "lduldWrkPlCd") != ds_odrInfo.getCellData(0, "lduldWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "railroadDptWrkPlCd") != ds_odrInfo.getCellData(0, "railroadDptWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "railroadArvWrkPlCd") != ds_odrInfo.getCellData(0, "railroadArvWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "wrkStDt") != ds_odrInfo.getCellData(0, "wrkStDt") || ds_odrInfo.getOriginalCellData(0, "wrkEndDt") != ds_odrInfo.getCellData(0, "wrkEndDt") || ds_odrInfo.getOriginalCellData(0, "lduldDt") != ds_odrInfo.getCellData(0, "lduldDt") || ds_odrInfo.getOriginalCellData(0, "wrkStHh") != ds_odrInfo.getCellData(0, "wrkStHh") || ds_odrInfo.getOriginalCellData(0, "wrkEndHh") != ds_odrInfo.getCellData(0, "wrkEndHh") || ds_odrInfo.getOriginalCellData(0, "lduldHh") != ds_odrInfo.getCellData(0, "lduldHh") || ds_odrInfo.getOriginalCellData(0, "expDeclarNo") != ds_odrInfo.getCellData(0, "expDeclarNo")) {
    for (var i = 0; i < cntrRows; i++) {
      if (ds_cntrInfo.getRowStatus(i) == "R") {
        ds_cntrInfo.setCellData(i, "arvWrkPlNm", "update");
        //ds_cntrInfo.UserStatus(i) = "3";
      }

      //2009.09.04 컨테이너정보의 수출신고번호필드에 값을 입력한다.
      ds_cntrInfo.setCellData(i, "expDeclarNo", ed_expDeclarNo.getValue());
    }
  }
  const sbmOption = {
    id: "sbm_update",
    action: "/ncall.tn.sd.odrmgnt.cntrodrreg.UpdateExportGeneralCntrOrderCMD.do",
    ref: 'data:json,[{"action":"modified", "id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified", "id":"ds_cntrInfo","key":"IN_DS2"}]',
    isProcessMsg: false
  };
  $c.sbm.execute($p, sbm_update);
};

//----------------------------------------
//수정
//----------------------------------------
scwin.f_update = function () {
  scwin.f_set("UPDATE"); //수정모드
};

//----------------------------------------
//신규
//----------------------------------------
scwin.f_create = function () {
  scwin.f_set("INIT", "CREATE"); //신규모드
};

//----------------------------------------
//삭제
//----------------------------------------
scwin.f_delete = async function () {
  let msg = $c.data.getMessage($p, MSG_CM_CRM_008, new Array(ds_odrInfo.getCellData(0, "odrNo").trim()));
  let conf = await $c.win.confirm($p, "오더번호 : " + msg);
  if (conf) {
    if (ds_deleteOrderCond.getTotalRow() > 0) {
      ds_deleteOrderCond.removeAll();
    }
    let insRow = ds_deleteOrderCond.insertRow();
    ds_deleteOrderCond.setCellData(insRow, "odrNo", ds_odrInfo.getCellData(0, "odrNo").trim());
    ds_deleteOrderCond.setCellData(insRow, "odrKndCd", scwin.odrKndCd);
    ds_deleteOrderCond.setCellData(insRow, "impExpDomesticClsCd", scwin.impExpClsCd);
    ds_deleteOrderCond.setCellData(insRow, "selfClsCd", ds_odrInfo.getCellData(0, "selfClsCd").trim());
    sbm_deleteOrderCond.userData1 = "noError";
    let rtn = await $c.sbm.execute($p, sbm_deleteOrderCond);
    await scwin.sbm_deleteOrderCond_submitdone(rtn);
  }
};

//----------------------------------------
// 오더 확정
//----------------------------------------
scwin.f_confirmOrder = async function () {
  //작업경로가 지정된 경우만 오더확정 가능
  let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_010, "오더확정"));
  if (!conf) {
    return;
  }
  if (ds_odrInfo.getTotalRow() > 0 && ds_cntrInfo.getTotalRow() > 0) {
    ds_odrInfo.setCellData(0, "odrDcsnYn", "1");
    sbm_confirm.userData1 = "noError";
    let rtn = await $c.sbm.execute($p, sbm_confirm);
    await scwin.orderUpdateCallbackFunc(rtn);
  }
};
scwin.orderUpdateCallbackFunc = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  await $c.win.alert($p, MSG_CM_INF_003); // 성공적으로 수정하였습니다
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, "odrNo"));
  await scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 계약작업경로  콤보 조회
//-------------------------------------------------------------------------
scwin.f_retrieveCtrtWrkPath = async function (ctrtNo) {
  dma_comSearchSys.setEmptyValue();
  dma_comSearchSys.set("sysCd", "BulkOrderEBC");
  dma_comSearchSys.set("queryId", "retrieveContractWorkPathSeqComboList1");
  dma_comSearchSys.set("param1", ctrtNo);
  dma_comSearchSys.set("param2", lc_odrKndCd.getValue());
  sbm_retrieveCtrtWrkPath.userData1 = "noError";
  $c.sbm.setAction($p, sbm_retrieveCtrtWrkPath, "/cm.zz.RetrieveComboCMD.do");
  let rtn = await $c.sbm.execute($p, sbm_retrieveCtrtWrkPath, dma_comSearchSys.getJSON());
  await scwin.sbm_retrieveCtrtWrkPath_submitdone(rtn);
};
scwin.sbm_retrieveCtrtWrkPath_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (!$c.gus.cfIsNull($p, lc_ctrtNo1.getValue())) {
    gr_cntrInfo.setColumnNodeSet("ctrtWrkPathSeq", "data:ds_ctrtWrkPath", "rmk", "ctrtWrkPathSeq");
    gr_cntrInfo.refreshColumn("ctrtWrkPathSeq");
  }

  //조회 완료 시점 후 오더 복사
  /*if(scwin.linkPage == "odrList") {
       
  if (scwin.odrCopy == "copy" ) {
  scwin.set_copy() ;
  }
  }*/
};

//----------------------------------------
//계약번호와 관련한 DataSet초기화
//----------------------------------------
scwin.f_clearDataByCtrtNo = function () {
  ds_ctrtNo.removeAll();
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_bilgClntNo]);
  //$c.gus.cfInitHidVal([ed_reqClntNo, ed_bilgClntNo]);
};

//----------------------------------------
//check box 체크시 공통거래처 셋팅
//----------------------------------------
scwin.setCommCtrt = function () {
  if (ck_ctrtComm.getValue() == "1") {
    ed_ctrtClntNo.setValue("공통거래처(운송)");
    scwin.f_openCommonPopUp(1, 'CTRT', 'T', 'F', 'F');
  } else {
    ed_ctrtClntNo.setValue("");
    ed_ctrtClntNm.setValue("");
    scwin.f_clearDataByCtrtNo();
  }
};

//----------------------------------------
//컨테이너 번호로 컨테이너 마스트 체크
//----------------------------------------
scwin.f_retrieveCntrBasisInfo = async function (cntrNo) {
  if (ds_condCntrBasisInfo.getTotalRow() > 0) ds_condCntrBasisInfo.removeAll();
  let insRow = ds_condCntrBasisInfo.insertRow();
  ds_condCntrBasisInfo.setCellData(insRow, "odrKndCd", scwin.odrKndCd);
  ds_condCntrBasisInfo.setCellData(insRow, "selfClsCd", scwin.selfClsCd);
  ds_condCntrBasisInfo.setCellData(insRow, "cntrNo", cntrNo);
  ds_condCntrBasisInfo.setCellData(insRow, "dptWrkPlCd", ed_dptWrkPlCd.getValue().trim());
  ds_condCntrBasisInfo.setCellData(insRow, "arvWrkPlCd", ed_arvWrkPlCd.getValue().trim());
  sbm_retrieveCntrBasisInfo.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieveCntrBasisInfo);
  await scwin.sbm_retrieveCntrBasisInfo_submitdone(rtn);
  /*tr_retrieveCntrBasisInfo.KeyValue = "JSP(I:IN_DS1=ds_condCntrBasisInfo, O:OUT_DS1=ds_addCntrInfo)";
  tr_retrieveCntrBasisInfo.Action = "/tn.sd.odrmgnt.cntrodrreg.RetrieveContainerCMD.do";
  tr_retrieveCntrBasisInfo.Post();*/
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  //if($c.gus.cfIsNull(data)) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val;
  if (columnId == "wrkRsltsNo") {
    val = $c.gus.decode($p, data, "", "미생성", "생성");
  }
  return val;
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
scwin.f_checkFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  elen = ext.length;
  flen = path.length;
  return ext == path.substring(flen - elen, flen);
};

// 매출부서, 청구부서 세팅
scwin.f_setSellAndBilgDept = async function () {
  var deptCd1 = scwin.lobranCd == null ? "" : scwin.lobranCd; //등록점소 - 사용자 설정 물류점소
  var orgdeptCd1 = deptCd1;
  var deptCd = ""; //부서코드

  if (deptCd1.length > 2) deptCd1 = deptCd1.substr(0, 2);else return;
  deptCd = deptCd1 + "2";

  //매출부서 세팅
  var newDeptCd = scwin.rentcarOfcCd;
  if ($c.gus.cfIsNull($p, newDeptCd)) {
    ed_sellLodeptCd.setValue(deptCd);
  } else {
    ed_sellLodeptCd.setValue(newDeptCd);
  }
  await scwin.f_openCommonPopUp(2, 'SELL', 'T', 'F', 'F');

  //청구부서 세팅 - 부산은 6A3셋팅함.
  if ($c.gus.cfIsNull($p, newDeptCd)) {
    if (orgdeptCd1 == "6AA") {
      ed_bilgLodeptCd.setValue("6A1");
    } else {
      ed_bilgLodeptCd.setValue(deptCd);
    }
  } else {
    ed_bilgLodeptCd.setValue(newDeptCd);
  }
  await scwin.f_openCommonPopUp(2, 'BILG', 'T', 'F', 'F');
};

//booking no 체크
scwin.f_retrieveBookingInfo = async function () {
  //라인코드 체크
  if ($c.gus.cfIsNull($p, ed_lineCd.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
    return;
  }

  //검색조건값 세팅
  if (ds_cndBkInfo.getTotalRow() > 0) ds_cndBkInfo.removeAll();
  let insRow = ds_cndBkInfo.insertRow();
  ds_cndBkInfo.setCellData(insRow, "lineCd", ed_lineCd.getValue().trim());
  ds_cndBkInfo.setCellData(insRow, "bookingNo", ed_bookingNo.getValue().trim());
  sbm_retrieveBookingInfo.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_retrieveBookingInfo);
  await scwin.sbm_retrieveBookingInfo_submitdone(rtn);
};

// 특이사항 저장(계약기간 종료건 수정불가하여 특이사항만 변경)
scwin.f_saveRmk = async function () {
  sbm_updateRmk.userData1 = "noError";
  let rtn = await $c.sbm.execute($p, sbm_updateRmk);
  await scwin.sbm_updateCntrNoArrvlportDtm_submitdone(rtn);
};
scwin.f_calBeforeDay = function () {
  var arr = "";
  var dt = new Date(arr[0], arr[1], arr[2]);
  var dt_v = new Date(arr[0], arr[1], arr[2]);
  dt_v.setDate(dt.getDate() - 1);
  //dt_v.getFullYear() + dt_v.getMnth() + dt_v.getDate()
};

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
  ds_excelTmp.removeAll();
  udc_topGrdBtn.uploadGridViewExcel(gr_excel, options);
};

//엑셀 파일 업로드 후 처리
scwin.gr_excel_onfilereadend = async function (value) {
  ds_cntrInfo.removeAll();
  await scwin.f_addRowUploaded();
};

//업로드 자료 추가
scwin.f_addRowUploaded = async function () {
  let excelRowCnt = ds_excelTmp.getTotalRow();
  for (let i = 0; i < excelRowCnt; i++) {
    let setRow = ds_cntrInfo.insertRow();
    ds_cntrInfo.setRowPosition(setRow);
    let cntrNo = ds_excelTmp.getCellData(i, "cntrNo") ?? "";
    let cntrSizCd = ds_excelTmp.getCellData(i, "cntrSizCd") ?? "";
    let cntrTypCd = ds_excelTmp.getCellData(i, "cntrTypCd") ?? "";
    let fullEmptyClsCd = ds_excelTmp.getCellData(i, "fullEmptyClsCd") ?? "";
    let wt = ds_excelTmp.getCellData(i, "wt") ?? "";
    let expSealNo = ds_excelTmp.getCellData(i, "expSealNo") ?? "";

    //콤마가 있으면 콤마를 제거한다.
    if (wt.indexOf(",") > -1) {
      wt = wt.replaceAll(",", "");
    }
    ds_cntrInfo.setCellData(setRow, "cntrNo", cntrNo.trim());
    ds_cntrInfo.setCellData(setRow, "cntrSizCd", cntrSizCd.trim());
    ds_cntrInfo.setCellData(setRow, "cntrTypCd", cntrTypCd.trim());
    ds_cntrInfo.setCellData(setRow, "fullEmptyClsCd", fullEmptyClsCd.trim());
    ds_cntrInfo.setCellData(setRow, "wt", wt.trim());
    ds_cntrInfo.setCellData(setRow, "expSealNo", expSealNo.trim());
    await scwin.f_onExit(setRow, "cntrNo");
    if (scwin.UPLOAD_STOP_YN == 'Y') break;
  }
};
scwin.f_onExit = async function (row, colid) {
  var result = false;
  switch (colid) {
    case "cntrNo":
      //컨테이너번호
      let chkVal = dscommon.cf_CheckCntrNo(ds_cntrInfo.getCellData(row, colid));
      if (!chkVal && lc_selfClsCd.getValue() == DsConstants.SELF_CLS_CD_SELF_SALES) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
      } else {
        for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
          if (ds_cntrInfo.getCellData(i, "cntrNo") == ds_cntrInfo.getCellData(row, colid)) {
            if (row != i) {
              await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["컨테이너목록", i, "컨테이너번호"]); //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
              ds_cntrInfo.setCellData(row, "cntrNo", olddata);
              return false;
            }
          }
        }
        await scwin.f_retrieveCntrBasisInfo(ds_cntrInfo.getCellData(row, colid));
      }
      break;
    case "wt":
      //중량 
      var j = -1;
      for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
        if (ds_cntrInfo.getCellData(i, colid) != "0") {
          j++;
        }
      }
      if (j == 0) {
        for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
          ds_cntrInfo.setCellData(i, colid, ds_cntrInfo.getCelldata(row, colid));
        }
      }
      break;
  }
};

//지사별 관리중인 라인여부 확인
scwin.f_getOffdockYn = function () {
  if (!$c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
    dma_comSearchSys.setEmptyValue();
    dma_comSearchSys.set("sysCd", "CommonEBC");
    dma_comSearchSys.set("queryId", "retrieveCommonCodeList");
    dma_comSearchSys.set("param1", "OP420");
    dma_comSearchSys.set("param2");
    dma_comSearchSys.set("param3", ed_lineCd.getValue());
    dma_comSearchSys.set("param4", ds_odrInfo.getCellData(0, "regBranCd"));
    sbm_comSearchSys.userData1 = "noError";
    $c.sbm.setAction($p, sbm_comSearchSys, "/ncall.cm.zz.RetrieveCommonPopupCMD.do");
    $c.sbm.execute($p, sbm_comSearchSys, dma_comSearchSys.getJSON()).then(async function (e) {
      //console.log("c.sbm.executeDynamic f_srchCMDOption");
      if (e.responseJSON.resultDataSet[0].Code < 0) {
        await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
        return;
      }
      ds_offdockLine.setJSON(e.responseJSON.GAUCE);
      if (!$c.gus.cfIsNull($p, ds_offdockLine.getCellData(0, "col1"))) {
        scwin.offdock_yn = 1;
      } else {
        scwin.offdock_yn = 0;
      }
    });
  }
};

//오더등록현황 화면으로 다시 돌아가기
scwin.f_odrRegIfno = function () {
  $c.win.openMenu($p, "오더등록현황", "/ui/tn/sd/odrmgnt/odrregprscond/tn_203_01_02b.xml", "tn_203_01_02b.jsp", null, {
    "openAction": "exist"
  });
};

//작업경로 화면으로 이동하기
scwin.f_chgWrkPath = function () {
  let paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  $c.win.openMenu($p, "작업경로", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_08b.xml", "tn_201_02_08b.jsp", paramObj, {
    "openAction": "exist"
  });
};

//컨테이너상세 화면으로 이동하기
scwin.f_openPopUpUpdateCntrInfo = function () {
  let paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  $c.win.openMenu($p, "컨테이너 상세", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_11b.xml", "tn_201_02_11b.jsp", paramObj, {
    "openAction": "exist"
  });
};

//컨테이너상세ETC 화면으로 이동하기
scwin.f_openPopUpUpdateCntrInfoEtc = async function () {
  var arrParam = new Array(1);
  var rtnList = new Array();
  arrParam[0] = ds_odrInfo.getCellData(0, "odrNo").trim(); //오더번호

  var opts = {
    id: "tn_201_02_12b",
    popupName: "컨테이너정보수정",
    modal: true,
    type: "browserPopup",
    title: "컨테이너정보수정",
    width: 1100,
    height: 500
  };
  rtnList = $c.win.openPopup($p, "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_12b.xml", opts, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "N/A" && rtnList[1] == "Y") {
      await scwin.f_retrieve();

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

// README : 20260413 개발미대상 화면으로 버튼 삭제
// // 컨테이너 오더 업로드 등록
// scwin.f_openPopUpUploadOrderList = function() {
//     let paramObj = {
//         odrKndCd : "C4"
//     };

//     $c.win.openMenu("수출일반 컨테이너 오더 업로드 등록", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_15b.xml", "tn_201_02_15b.xml", paramObj, {"openAction": "exist"});
// }

//대표착지 화면으로 이동하기
scwin.f_repwrk = async function () {
  var arrParam = new Array(2);
  var rtnList = new Array();
  arrParam[0] = ds_odrInfo.getCellData(0, "odrNo").trim(); //오더번호
  arrParam[1] = "retrieve";
  var opts = {
    id: "sd_402_01_30p",
    popupName: "대표착지 작업장수정",
    modal: true,
    type: "browserPopup",
    title: "대표착지 작업장수정",
    width: 850,
    height: 550
  };
  rtnList = $c.win.openPopup($p, "/ui/tn/ds/sd/odrreg/sd_402_01_30p.xml", opts, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "N/A" && rtnList[1] == "Y") {
      await scwin.f_retrieve();

      //탭선택시 재조회
      //parent.iFrame1.hid_chkReterieve.value = "";
    }
  }
};

// 비계약요율 팝업
/* README : 2018년 마지막 호출이력 확인됨 > 메인화면에서 버튼 삭제
scwin.f_spotNonCtrtTrfPopup = async function () {
    
	await scwin.f_getMchtClntNoYn();

	var	arrParam = new Array();
	arrParam[0] = lc_ctrtNo1.getValue();                                                         // 계약번호 
	arrParam[1] = $c.gus.cfIsNull(scwin.memInfo.lobranCd)? "" : scwin.memInfo.lobranCd          // 작업점소
	arrParam[2] = ed_bilgClntNo.getValue(); // 청구거래처 코드
	arrParam[3] = ds_bilgClntNo.getCellData(ds_bilgClntNo.getRowPosition(), "clntNm");          // 청구거래처명

	if(     !$c.gus.cfIsNull(arrParam[0]) 
		&&  !$c.gus.cfIsNull(arrParam[1]) 
		&&  !$c.gus.cfIsNull(arrParam[2])
		&&  ds_mchtClntNoYn.getTotalRow() > 0
		&&  ed_ctrtClntNo.getValue().substring(0, 4) == "9999" ) {

            var opts = {
                  id : "sd_401_05_04p"
                , popupName : "계약요율추가등록"
                , modal : true
                , type : "browserPopup" 
                , title : "계약요율추가등록"  
                , width : 1100
                , height : 600
            };

            let ret = $c.win.openPopup("/ui/tn/sd/odrmgnt/cntrodrreg/tn_301_01_01p.xml", opts, arrParam);
	} else {
		if($c.gus.cfIsNull(arrParam[0])) {
			await $c.win.alert("계약번호를 선택하세요.");
		}
		else if($c.gus.cfIsNull(arrParam[2])) {
			await $c.win.alert("청구거래처를 입력하세요.");
		}
		else if(ed_ctrtClntNo.getValue().substring(0,4) != "9999") {
			await $c.win.alert("계약거래처가 공통거래처인 경우 비계약요율등록 할 수 있습니다.");
		}
		else if(ds_mchtClntNoYn.getTotalRow() == 0) {
			await $c.win.alert("청구거래처가 화주거래처인 경우 비계약요율등록 할 수 있습니다.");
		}
	}
}
*/

// 화주거래처 여부
scwin.f_getMchtClntNoYn = async function () {
  // SELECT 절 
  var param1 = " CLNT_NO as COL1 " + ",''	 	as COL2 " + ",'' 		as COL3 " + ",'' 		as COL4 " + ",'' 		as COL5 " + ",'' 		as COL6 " + ",''      as COL7 " + ",''      as COL8 " + ",''      as COL9 " + ",''      as COL10";

  // 대상테이블 	
  var param2 = " TB_ZZ510 ";

  // 조건절
  var param3 = " AND CLNT_NO = '" + ed_bilgClntNo.getValue() + "' " + " AND SELL_CLNT_CLS_CD = '02' " + " AND CLNT_DEL_YN = 0 " + " AND SUBSTR(CLNT_NO, 0, 4) <> '9999' " + " AND ROWNUM = 1 ";

  // 정렬    
  var param4 = " CLNT_NO ";
  dma_comSearchSys.set("sysCd", "CommonEBC");
  dma_comSearchSys.set("queryId", "dinymicQueryTest");
  dma_comSearchSys.set("param1", param1);
  dma_comSearchSys.set("param2", param2);
  dma_comSearchSys.set("param3", param3);
  dma_comSearchSys.set("param4", param4);
  sbm_comSearchSys.userData1 = "noError";
  $c.sbm.setAction($p, sbm_comSearchSys, "/ncall.cm.zz.RetrieveCommonPopupCMD.do");
  await $c.sbm.execute($p, sbm_comSearchSys, dma_comSearchSys.getJSON()).then(async function (e) {
    //console.log("c.sbm.executeDynamic f_srchCMDOption");
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
      return;
    }
    ds_mchtClntNoYn.setJSON(e.responseJSON.GAUCE);

    /*if(!$c.gus.cfIsNull(ds_odrEtc.getCellData(0, "col1"))) {
        scwin.findString = ds_odrEtc.getCellData(0, "col1");
        if(gubun == "TS"){
            ta_rmk.setValue(ta_rmk.getValue() + ds_odrEtc.getCellData(0, "col1"));
        }else{
            ta_rmk.setValue(ds_odrEtc.getCellData(0, "col1"));
        }
    }*/
  });
};

//계약요율
scwin.f_ctrtTransTrfList = async function () {
  var ctrtNo = ds_odrInfo.getCellData(0, "ctrtNo"); // 계약번호
  if (ctrtNo == null || ctrtNo == "") {
    await $c.win.alert($p, "계약번호가 없습니다.");
    return;
  }
  var paramObj = {
    ctrtNo: ctrtNo
  };
  $c.win.openMenu($p, "계약요율", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_10b.xml", "tn_201_02_10b.jsp", paramObj, {
    "openAction": "exist"
  });
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  let v_odrNo = ds_odrInfo.getCellData(0, "odrNo");
  let v_odrKndCd = ds_odrInfo.getCellData(0, "odrKndCd");
  let odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); //확정여부

  let paramObj = {
    odrNo: v_odrNo,
    linkPage: "odrList"
  };
  let menuNm = "";
  let strOrderDetailUrl = "";
  let MSG_CM_CRM = "Page로 이동하시겠습니까?";
  //condition += "odrNo="+v_odrNo+"&linkPage=odrList";

  //수정사유 TR숨기기 hurrah by 20140219
  if (odrDcsnYn == DsConstants.YN_YES) {
    // 오더가 확정된 경우
    txt_rsn.hide();
    lc_rsnCd.hide();
    ed_rsnTxt.hide();
    if (btn_saveRmk.getStyle("display") == "none") {
      tr_rsn.hide();
    }
  }
  lc_rsnCd.setSelectedIndex(0);
  if (v_odrKndCd == "C4") {
    // 수출일반오더
    ds_odrInfo.setRowPosition(0);
    //scwin.callBackNoNeed = "Y";
    scwin.f_set("RETRIEVE");
    await scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'F');
    await scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'F');
    await scwin.f_retrieveCtrtNo();
    ds_odrInfo.setCellData(0, "ctrtNo", ds_odrInfo.getOriginalCellData(0, "ctrtNo"));

    //컨테이너 갱신여부 display여부
    //cntrRegYn
    if (ds_odrInfo.getCellData(0, "odrNo").substring(1, 2) == "C4" && ds_odrInfo.getCellData(0, "sellLodeptCd") == "3B2" && ds_odrInfo.getCellData(0, "railroadDptWrkPlCd") != "") {
      cbx_cntrRegYn.show("");
      /*if (cntrRegYn != null) {
      cntrRegYn.style.display = 'block';
      }*/
    } else {
      cbx_cntrRegYn.hide();
      /*if (cntrRegYn != null) {
      	cntrRegYn.style.display = 'none';
      }*/
    }
  } else {
    await $c.win.alert($p, "해당 오더의 정보가 없습니다.");
    scwin.f_set("INIT", "CREATE");
    let paramObj = {
      odrNo: v_odrNo,
      linkPage: "odrList"
    };
    let menuNm = "";
    let strOrderDetailUrl = "";
    if (v_odrKndCd == "C1" || v_odrKndCd == "CS" || v_odrKndCd == "CT") {
      // 수입본선오더
      menuNm = "수입본선오더";
      programId = "tn_201_02_05b.xml";
      strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_05b.xml";
    } else if (v_odrKndCd == "C2" || v_odrKndCd == "CX") {
      // 수입일반오더
      menuNm = "수입일반오더";
      programId = "tn_201_02_03b.xml";
      strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml";
    } else if (v_odrKndCd == "C3" || v_odrKndCd == "CW" || v_odrKndCd == "CR" || v_odrKndCd == "CP") {
      // 수출본선오더
      menuNm = "수출본선오더";
      programId = "tn_201_02_06b.xml";
      strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_06b.xml";
    } else if (v_odrKndCd == "C5" || v_odrKndCd == "C6" || v_odrKndCd == "C7") {
      // 기타오더
      menuNm = "기타오더";
      programId = "tn_201_02_07b.xml";
      strOrderDetailUrl = "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_07b.xml";
    }
    if (strOrderDetailUrl != "") {
      let con = await $c.win.confirm($p, menuNm + "Page로 이동하시겠습니까?");
      if (con) {
        $c.win.openMenu($p, menuNm, strOrderDetailUrl, programId, paramObj, {
          "openAction": "exist"
        });
      }
    }
  }
  if (scwin.selfClsCd == "LI" && ed_lineCd.getValue() == "WJS") {
    tr_vanTerm.show("");
    //dscommon.cf_ShowObject([tr_vanTerm]);
  } else {
    tr_vanTerm.hide();
    //dscommon.cf_HideObject([tr_vanTerm]);
  }

  //특이사항 숨김여부체크
  if (!$c.gus.cfIsNull($p, lc_ctrtNo1.getValue())) {
    btn_saveRmk.hide();
  } else {
    btn_saveRmk.show();
  }

  // 에버라인인 경우 마스터키 OBJECT 노출
  if (ed_lineCd.getValue().trim() == "EVER" || ed_lineCd.getValue().trim() == "HTML" || ed_lineCd.getValue().trim() == "EMS" || ed_lineCd.getValue().trim() == "ITS") {
    //dscommon.cf_ShowObject([title_MasterKey, ed_masterKey]);
    title_MasterKey.show("");
    ed_masterKey.show("");
  } else {
    $c.gus.cfInitObjects($p, [ed_masterKey]);
    title_MasterKey.hide();
    ed_masterKey.hide();
    //dscommon.cf_HideObject([title_MasterKey, ed_masterKey]);
  }
  ed_rowMake.setValue("");
  ed_setWt.setValue("");
  scwin.search_clntClsYn = 0;
};

//컨테이너 기본 정보 조회 완료
scwin.sbm_retrieveCntrBasisInfo_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieveCntrBasisInfo_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  scwin.UPLOAD_STOP_YN = 'N';
  if (lc_selfClsCd.getValue() == DsConstants.SELF_CLS_CD_SELF_SALES) {
    // 자가영업인 경우 해당
    if (ds_addCntrInfo.getTotalRow() > 0 && scwin.offdock_yn == 1) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_011, ["컨테이너번호"]); //이미 존재하는 @입니다
      ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrNo", "");
      scwin.UPLOAD_STOP_YN = 'Y';
      return;
    }
  } else {
    //수출일반 - F/E가 F면 에러메시지 띄우기
    if (ds_addCntrInfo.getTotalRow() > 0) {
      if (ds_addCntrInfo.getCellData(0, "fullEmptyClsCd") == "F") {
        await $c.gus.cfAlertMsg($p, dscommon.MSG_SD_ERR_001, ["Full"]); //@컨테이너를 지정할 수 없습니다
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrNo", "");
        scwin.UPLOAD_STOP_YN = 'Y';
        return;
      } else if (ds_addCntrInfo.getCellData(0, "lineCd") != ed_lineCd.getValue().trim()) {
        await $c.gus.cfAlertMsg($p, "해당컨테이너의 Line이 오더정보의 Line과 상이합니다.\n컨테이너를 다시 입력하여 주십시오.");
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrNo", "");
        scwin.UPLOAD_STOP_YN = 'Y';
        return;
      } else {
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "arrvlportDtm", ds_addCntrInfo.getCellData(0, "arrvlportDtm"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrNo", ds_addCntrInfo.getCellData(0, "cntrNo"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrSizCd", ds_addCntrInfo.getCellData(0, "cntrSizCd"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrTypCd", ds_addCntrInfo.getCellData(0, "cntrTypCd"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "fullEmptyClsCd", "F");
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "wt", ds_addCntrInfo.getCellData(0, "wt"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "impSealNo", ds_addCntrInfo.getCellData(0, "impSealNo"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "blNo", ds_addCntrInfo.getCellData(0, "blNo"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "arvWrkPlCd", ds_addCntrInfo.getCellData(0, "arvWrkPlCd"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "arvWrkPlNm", ds_addCntrInfo.getCellData(0, "arvWrkPlNm"));
        ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "odrNo", ds_odrInfo.getCellData(0, "odrNo"));
        spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
        if (ds_addCntrInfo.getTotalRow() > 0) ds_addCntrInfo.removeAll();
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_046, ["컨테이너번호"]); //존재하지 않는 @입니다.
      ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrNo", "");
      scwin.UPLOAD_STOP_YN = 'Y';
      return;
    }
  }
};

//BKNO 조회 완료
scwin.sbm_retrieveBookingInfo_submitdone = async function (e) {
  //console.log("scwin.sbm_retrieveBookingInfo_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  var bkRows = ds_bkInfo.getTotalRow();
  if (bkRows > 0) {
    await $c.gus.cfAlertMsg($p, "Booking번호[" + ed_bookingNo.getValue() + "]는 품명정보가 존재하므로 입력할 수 없습니다.");
    if (ed_lineCd.getValue() != "EVER") {
      ed_bookingNo.setValue("");
    }
  }
};

//저장 완료
scwin.sbm_regist_submitdone = async function (e) {
  //console.log("scwin.sbm_regist_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  ed_odrNo.setValue(ds_cndOdrNo.getCellData(0, "odrNo"));
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
  await scwin.f_retrieve();
};

//특이사항 저장 완료 
scwin.sbm_updateCntrNoArrvlportDtm_submitdone = async function (e) {
  //console.log("scwin.sbm_updateCntrNoArrvlportDtm_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_003); // 성공적으로 수정하였습니다
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, "odrNo"));
  await scwin.f_retrieve();
};

//삭제 완료
scwin.sbm_deleteOrderCond_submitdone = async function (e) {
  //console.log("scwin.sbm_deleteOrderCond_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다
  scwin.f_set("INIT", "CREATE");
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//오더번호 소문자 입력 > 대문자 입력
scwin.ed_odrNo_oneditkeyup = async function (info, e) {
  $c.gus.cfToUpper($p, ed_odrNo);
  if (info.keyCode == 13) {
    await scwin.f_retrieve();
  }
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  //console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = async function (e) {
  //console.log("scwin.btn_search_onclick");
  await scwin.f_retrieve();
};

//오더종류 값 변경
scwin.lc_odrKndCd_onchange = async function (info) {
  scwin.odrKndCd = lc_odrKndCd.getValue(); //오더종류코드
  scwin.impExpClsCd = "O"; //수출입구분코드
  if ($c.gus.cfIsNull($p, scwin.impExpClsCd)) scwin.impExpClsCd = ""; //TS셔틀컨테이너가 아닌 경우

  await scwin.f_setInterfaceByOdr();
};

//계약서체크박스
scwin.ck_ctrtComm_onchange = function (info) {
  scwin.setCommCtrt();
};

//계약번호 값 변경 
scwin.lc_ctrtNo_onchange = async function (info) {
  //console.log("scwin.lc_ctrtNo_onchange");
  if (ds_ctrtNo.getTotalRow() > 0 && scwin.mgntTrgtClntYn != "1") {
    let rowIndex = lc_ctrtNo1.getSelectedIndex();
    scwin.mgntTrgtClntYn = ds_ctrtNo.getCellData(rowIndex, "mgntTrgtClntYn");
    if (scwin.mgntTrgtClntYn == "1") {
      if (scwin.statusFlag == "C") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["본 계약거래처", "관리대상이므로 오더등록"]); //"@은(는) @할 수 없습니다.

        scwin.f_set("INIT", "INIT"); //초기화
      } else {
        await $c.gus.cfAlertMsg($p, dscommon.MSG_SD_WRN_006, ["본 계약거래처", "관리대상"]); //"@은(는) @입니다.

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
  if (!$c.util.isEmpty($p, lc_ctrtNo1.getValue())) {
    await scwin.f_retrieveCtrtWrkPath(lc_ctrtNo1.getValue());
  }

  //특이사항 숨김여부체크
  if (!$c.gus.cfIsNull($p, lc_ctrtNo1.getValue())) {
    btn_saveRmk.hide();
  } else {
    btn_saveRmk.show();
  }
};

//자가구분 콤보 값 변경 > 전역변수 설정
scwin.lc_selfClsCd_onchange = function (info) {
  scwin.selfClsCd = info.newValue;
};

//부킹번호이후 상차일시로 포커스이동
scwin.ed_bookingNo_oneditkeyup = function (info, e) {
  if (info.keyCode == 9 && ed_sellLodeptCd.getValue() == "4B2") {
    lc_cntrWtCondCd.focus();
  } else if (info.keyCode == 9 && ed_sellLodeptCd.getValue() == "5A2" && scwin.hid_chkMode == "COPY") {
    ed_lduldDt.focus();
  }
};

//상차일시 이후 작업일시로 포커스이동 
scwin.ed_lduldHh_oneditkeyup = function (info, e) {
  if (info.keyCode == 9 && ed_sellLodeptCd.getValue() == "5A2" && scwin.hid_chkMode == "COPY") {
    ed_wrkStDt.focus();
  }
};

//C/T 일시로 포커스이동
scwin.ed_closeHh_oneditkeyup = function (info, e) {
  if (info.keyCode == 9 && ed_sellLodeptCd.getValue() == "4B2") {
    ed_dptDtl.focus();
  }
};

//작업일시 이후 하차일시로 포커스이동 
scwin.ed_wrkStHh_oneditkeyup = function (info, e) {
  if (info.keyCode == 9 && ed_sellLodeptCd.getValue() == "4B2") {
    rd_wrkPathCopy.focus();
  } else if (info.keyCode == 9 && ed_sellLodeptCd.getValue() == "5A2" && scwin.hid_chkMode == "COPY") {
    ed_wrkEndDt.focus();
  }
  if (ed_lduldHh.getValue() == "" && ed_wrkEndHh.getValue() == "" && ed_sellLodeptCd.getValue() == "4B2" && ed_wrkStHh.getValue() != "") {
    var hH = Number(ed_wrkStHh.getValue().replaceAll(":", "")) - 100;
    var sHh = hH.toString(10); // 작업시간		
    var getDt = ed_wrkStDt.getValue(); // 작업시작일
    var getHh = ed_wrkStHh.getValue(); // 작업시작시간
    var dT = getDt.toDate(); // 작업일
    var bDDate = new Date(Date.parse(dT) - 1000 * 60 * 60 * 24);
    var bYear = bDDate.getFullYear();
    var bMonth = bDDate.getMonth();
    var bDate = bDDate.getDate();
    var nDDate = new Date(Date.parse(dT) + 1000 * 60 * 60 * 24);
    var nYear = nDDate.getFullYear();
    var nMonth = nDDate.getMonth() + 1;
    var nDate = nDDate.getDate();
    nMonth = nMonth.toString(10);
    nDate = nDate.toString(10);
    var vMonth;
    var vDate;
    if (sHh.length == 3) {
      sHh = "0" + sHh;
    }
    ed_lduldHh.setValue(sHh);
    ed_lduldDt.setValue(getDt);
    if (nMonth.length == 1) {
      vMonth = "0" + nMonth;
    } else {
      vMonth = nMonth;
    }
    if (nDate.length == 1) {
      vDate = "0" + nDate;
    } else {
      vDate = nDate;
    }
    var setDt = nYear + "" + vMonth + "" + vDate;
    ed_wrkEndDt.setValue(setDt);
    ed_wrkEndHh.setValue(getHh);
  }
};

//특이사항 blur
scwin.ta_rmk_onblur = async function (e) {
  let chkVal = await $c.gus.cfValidate($p, [ta_rmk], null, true);
  if (!chkVal) {
    ta_rmk.setValue("");
    ta_rmk.focus();
  }
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
scwin.udc_bilgClntNo_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEdByLc(lc_bilgClntNm, ed_bilgClntNo, 1, 'BILG', 'T', 'F');
  if ($c.gus.cfIsNull($p, ed_bilgClntNo.getValue())) {
    //화물위탁증 세팅을 위한 값 초기화
    ed_trnsCnsgMchtClntNm.setValue("");
    ed_trnsCnsgMchtClntTelNo.setValue("");
  }
};
scwin.lc_bilgClntNm_onchange = function (info) {
  ed_bilgClntNo.setValue(lc_bilgClntNm.getValue());
};

//매출부서 찾기 버튼
scwin.udc_sellLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, 'SELL', 'F', 'F', 'F');
};
scwin.udc_sellLodeptCd_onblurCodeEvent = async function (e) {
  if (ed_sellLodeptCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
  } else {
    await scwin.f_beforeOpenCommonPopUpEd(ed_sellLodeptNm, ed_sellLodeptCd, 2, 'SELL', 'T', 'F');
  }
};

//청구부서 찾기 버튼
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, 'BILG', 'F', 'F', 'F');
};
scwin.udc_bilgLodeptCd_onblurCodeEvent = async function (e) {
  if (ed_bilgLodeptCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  } else {
    await scwin.f_beforeOpenCommonPopUpEd(ed_bilgLodeptNm, ed_bilgLodeptCd, 2, 'BILG', 'T', 'F');
  }
};

//Line/선사 찾기 버튼
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, '', 'F', 'F', 'F');
};
scwin.udc_lineCd_onblurCodeEvent = async function (e) {
  scwin.f_getOffdockYn();
  let lineCd = ed_lineCd.getValue();
  if (lineCd.trim() == "") {
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    //$c.gus.cf_HideObject([trVanTerm]);
    tr_vanTerm.hide();
  } else if (scwin.selfClsCd == "LI" && (lineCd.trim() == "WJS" || lineCd.trim() == "wjs")) {
    //$c.gus.cf_ShowObject([trVanTerm]);
    tr_vanTerm.show("");
    await scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
  } else {
    //$c.gus.cf_HideObject([trVanTerm]);
    tr_vanTerm.hide();
    await scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
  }

  // 에버라인인 경우 마스터키 OBJECT 노출
  if (lineCd.trim() == "EVER" || lineCd.trim() == "HTML" || lineCd.trim() == "EMS" || lineCd.trim() == "ITS") {
    //$c.gus.cf_ShowObject([title_MasterKey, td_contents_MasterKey]);
    title_MasterKey.show("");
    ed_masterKey.show("");
  } else {
    if (ds_odrInfo.getCellData(0, "sellLodeptCd") == "4B2") {
      $c.gus.cfInitObjects($p, [ed_masterKey]);
      //$c.gus.cf_HideObject([title_MasterKey, td_contents_MasterKey]);
      title_MasterKey.hide();
      ed_masterKey.hide();
    } else {
      $c.gus.cfInitObjects($p, [ed_bookingNo, ed_masterKey]);
      //$c.gus.cf_HideObject([title_MasterKey, td_contents_MasterKey]);
      title_MasterKey.hide();
      ed_masterKey.hide();
    }
  }
};

//선박 찾기 버튼
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, '', 'F', 'F', 'F');
};
scwin.udc_vsslCd_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_vsslNm, ed_vsslCd, 8, '', 'T', 'F');
};

//항차/목적항 찾기 버튼
scwin.udc_destPortCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, '', 'F', 'F', 'F');
};
scwin.udc_destPortCd_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(hid_destPortNm, ed_destPortCd, 6, '', 'T', 'F');
};

//요청처 찾기 버튼 
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'REQ', 'F', 'F', 'F');
};
scwin.udc_reqClntNo_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEdByLc(lc_reqClntNm, ed_reqClntNo, 1, 'REQ', 'T', 'F');
};
scwin.lc_reqClntNm_onchange = function (e) {
  ed_reqClntNo.setValue(lc_reqClntNm.getValue());
};

//상차지 찾기 버튼
scwin.udc_lduldWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'LDULD', 'F', 'F', 'F');
};
scwin.udc_lduldWrkPlCd_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_lduldWrkPlNm, ed_lduldWrkPlCd, 5, 'LDULD', 'T', 'F');
};

// 하차지 우편번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_lduldZip_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_lduldDtl, ed_lduldZip, 10, 'LDULD_ZIP', 'T', 'F');
};
scwin.udc_lduldZip_onclickEvent = function (e) {
  scwin.f_openZipPopUpNew(1, 'F');
};

//작업지 찾기 버튼
scwin.udc_dptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'DPT', 'F', 'F', 'F');
};
scwin.udc_dptWrkPlCd_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_dptWrkPlNm, ed_dptWrkPlCd, 5, 'DPT', 'T', 'F');
};

// 상차지 우편번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_dptZip_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_dptDtl, ed_dptZip, 10, 'DPT_ZIP', 'T', 'F');
};
scwin.udc_dptZip_onclickEvent = function (e) {
  scwin.f_openZipPopUpNew(2, 'F');
};

//하차지 찾기 버튼
scwin.udc_arvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'ARV', 'F', 'F', 'F');
};
scwin.udc_arvWrkPlCd_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_arvWrkPlNm, ed_arvWrkPlCd, 5, 'ARV', 'T', 'F');
};

// 작업지 우편번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_arvZip_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_arvDtl, ed_arvZip, 10, 'ARV_ZIP', 'T', 'F');
};
scwin.udc_arvZip_onclickEvent = function (e) {
  scwin.f_openZipPopUpNew(3, 'F');
};

//철송구간 찾기 버튼
scwin.udc_railroadDptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'RAILDPT', 'F', 'F', 'F');
};
scwin.udc_railroadDptWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_railroadDptWrkPlNm, ed_railroadDptWrkPlCd, 5, 'RAILDPT', 'T', 'F');
};
scwin.udc_railroadArvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'RAILARV', 'F', 'F', 'F');
};
scwin.udc_railroadArvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_railroadArvWrkPlNm, ed_railroadArvWrkPlCd, 5, 'RAILARV', 'T', 'F');
};
scwin.udc_masterKey_onblur = function (e) {
  if (ed_bookingNo.getValue().trim() == "") {
    ed_bookingNo.setValue(ed_masterKey.getValue());
  }
};

//배차담당 찾기 버튼
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(11, '', 'F', 'F', 'F');
};
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_alloccarPicNm, ed_alloccarPicId, 11, '', 'T', 'F');
};

//특이사항 저장 버튼
scwin.btn_saveRmk_onclick = async function (e) {
  await scwin.f_saveRmk();
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

//컨테이너 정보 버튼
scwin.btn_cntrInfo_onclick = function (e) {
  scwin.f_openPopUpUpdateCntrInfoEtc();
};
scwin.udc_lineCd_onviewchangeCodeEvent = function (info) {
  //console.log("scwin.udc_lineCd_onviewchangeCodeEvent")
  scwin.f_getOffdockYn();
  if (ed_lineCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    tr_vanTerm.hide();
    //dscommon.cf_HideObject([tr_vanTerm]);
  } else if (scwin.selfClsCd == "LI" && (ed_lineCd.getValue().trim() == "WJS" || ed_lineCd.getValue().trim() == "wjs")) {
    tr_vanTerm.show("");
    //dscommon.cf_ShowObject([tr_vanTerm]);
    //f_beforeOpenCommonPopUpEd(ed_lineNm, this, 3, '', 'T', 'F');
  } else {
    tr_vanTerm.hide();
    //dscommon.cf_HideObject([tr_vanTerm]);
    //f_beforeOpenCommonPopUpEd(ed_lineNm, this, 3, '', 'T', 'F');
  }

  // 에버라인인 경우 마스터키 OBJECT 노출
  if (ed_lineCd.getValue().trim() == "EVER" || ed_lineCd.getValue().trim() == "HTML" || ed_lineCd.getValue().trim() == "EMS" || ed_lineCd.getValue().trim() == "ITS") {
    title_MasterKey.show("");
    ed_masterKey.show("");
    //dscommon.cf_ShowObject([title_MasterKey, ed_masterKey]);
  } else {
    if (ds_odrInfo.getCellData(0, "sellLodeptCd") == "4B2") {
      $c.gus.cfInitObjects($p, [ed_masterKey]);
      title_MasterKey.hide();
      ed_masterKey.hide();
      //dscommon.cf_HideObject([title_MasterKey, ed_masterKey]);
    } else {
      $c.gus.cfInitObjects($p, [ed_bookingNo, ed_masterKey]);
      title_MasterKey.hide();
      ed_masterKey.hide();
      //dscommon.cf_HideObject([title_MasterKey, ed_masterKey]);
    }
  }
};

//README : 20260413 개발미대상 화면으로 버튼 삭제
// //오더 업로드 버튼
// scwin.btn_uploadOdr_onclick = function (e) {
//     scwin.f_openPopUpUploadOrderList();
// };

//생성 버튼
scwin.btn_copy_onclick = function (e) {
  scwin.f_addRowB();
};

//행 추가
scwin.ed_rowMake_oneditkeyup = function (info, e) {
  if (info.keyCode == 13) {
    scwin.f_addRowB();
  }
};

//그리드 더블 클릭
scwin.gr_cntrInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if ((columnId == "ctrtWrkPathSeq" || columnId == "cntrWrkClsCd") && rowIndex >= 0) {
    var cntrRows = ds_cntrInfo.getTotalRow();
    pathSeq = ds_cntrInfo.getCellData(rowIndex, columnId);
    for (var i = 0; i < cntrRows; i++) {
      if (rd_wrkPathCopy.getValue() == "1" || ds_cntrInfo.getCellData(i, columnId) == "0" || ds_cntrInfo.getCellData(i, columnId) == "") {
        ds_cntrInfo.setCellData(i, columnId, pathSeq);
      }
    }
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
      if (ds_cntrInfo.getCellData(row, colid) != info.oldValue && ds_cntrInfo.getCellData(row, colid) != "") {
        if (!dscommon.cf_CheckCntrNo(ds_cntrInfo.getCellData(row, colid)) && lc_selfClsCd.getValue() == DsConstants.SELF_CLS_CD_SELF_SALES) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
          //ds_cntrInfo.NameValue(ds_cntrInfo.RowPosition, "cntrNo") = "";
        } else {
          for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
            if (ds_cntrInfo.getCellData(i, "cntrNo") == ds_cntrInfo.getCellData(row, colid)) {
              if (row != i) {
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["컨테이너목록", i, "컨테이너번호"]); //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
                ds_cntrInfo.setCellData(row, "cntrNo", info.oldValue);
                return;
              }
            }
          }
          await scwin.f_retrieveCntrBasisInfo(ds_cntrInfo.getCellData(row, colid));
        }
      }
      break;
    case "wt":
      //중량 
      if (info.newValue == "") {
        ds_cntrInfo.setCellData(row, colid, 0);
      }
      var j = -1;
      for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
        if (ds_cntrInfo.getCellData(i, colid) != 0) {
          j++;
        }
      }
      if (j == 0) {
        for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
          ds_cntrInfo.setCellData(i, colid, ds_cntrInfo.getCellData(row, colid));
        }
      }
      break;
    case "sellAmt":
    case "scAmt":
    case "sellAmt1":
    case "sellAmt2":
      if (info.newValue == "") {
        ds_cntrInfo.setCellData(row, colid, 0);
      }
      break;
  }
};
scwin.ds_cntrInfo_ondatachage = function () {
  spn_totalRow.setValue(ds_cntrInfo.getTotalRow());
};
scwin.ds_cntrInfo_onrowpositionchange = function (info) {
  if (scwin.statusFlag == "U") {
    let row = info.newRowIndex;
    if (ds_cntrInfo.getCellData(row, "cntrNo") != "" && ds_cntrInfo.getCellData(row, "cntrSeq") > 0) {
      gr_cntrInfo.setReadOnly("grid", true);
    } else {
      gr_cntrInfo.setReadOnly("grid", false);
    }
  }
};
scwin.ed_portcnt_onviewchange = function (info) {
  ed_portcnt.setValue(ed_portcnt.getValue().toUpperCase());
};
scwin.ed_bookingNo_onviewchange = function (info) {
  ed_bookingNo.setValue(ed_bookingNo.getValue().toUpperCase());
};
scwin.ed_expDeclarNo_onviewchange = function (info) {
  ed_expDeclarNo.setValue(ed_expDeclarNo.getValue().toUpperCase());
};
scwin.ed_masterKey_onviewchange = function (info) {
  ed_masterKey.setValue(ed_masterKey.getValue().toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'grp_header',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_odrNo2',label:'웹오더생성 [의뢰번호 : XXXXXXXXXXX]',style:'margin-right: 50px;font-weight: bold;'}},{T:1,N:'w2:textbox',A:{class:'req',id:'txt_odrNo',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',style:'width: 150px;',maxlength:'13',allowChar:'0-9A-Za-z',mandatory:'true',validExp:'오더번호:yes:length=13','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_odrInfoArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 500px;'}},{T:1,N:'xf:group',A:{style:'width: 140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrKndCd',search:'start',style:'width:250px;',submenuSize:'auto',allOption:'',ref:'data:ds_odrInfo.odrKndCd',objType:'data',mandatory:'true',validExp:'오더종류:yes','ev:onchange':'scwin.lc_odrKndCd_onchange',emptyItem:'true',emptyIndex:'-1',emptyValue:' '},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너 수출일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C4'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'ck_ctrtComm',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onchange':'scwin.ck_ctrtComm_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_ctrtClntNo',selectID:'retrieveClntInfo_tpro',popupID:'',validTitle:'계약처',nameId:'ed_ctrtClntNm',style:'width:%; height:px; ',objTypeCode:'data',validExpCode:'계약처:yes',UpperFlagCode:'1',btnId:'btn_ctrtClntNo',id:'udc_ctrtClntNo',mandatoryName:'true',objTypeName:'data',code:'ctrtClntNo',name:'ctrtClntNm',refDataCollection:'ds_odrInfo','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ctrtNo1',style:'width:250px;',submenuSize:'auto',objType:'data',mandatory:'true',validExp:'계약번호:yes',title:'계약번호',ref:'data:ds_odrInfo.ctrtNo',chooseOptionLabel:'','ev:onchange':'scwin.lc_ctrtNo_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'true',nodeset:'data:ds_ctrtNo',width:'800',selectedRowColor:'',label:'label',visibleRowNum:'20',autoFit:'allColumn',value:'ctrtNo',rowMouseOverColor:'',height:'400'},E:[{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',btnId:'btn_bilgClntNo',code:'bilgClntNo',codeId:'ed_bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',hideName:'true',id:'udc_bilgClntNo',maxlengthCode:'6',nameId:'ed_bilgClntNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveClntInfo_tpro',style:'',validExpCode:'청구처:yes',mandatoryCode:'true',validTitle:'청구처',skipOnBlurCodeValueEmpty:'N',keepCodeSwitch:'Y',keepNameSwitch:'Y'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_bilgClntNm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_odrInfo.bilgClntNm',allOption:'',chooseOption:'',displayMode:'label',mandatory:'true',objType:'data','ev:onchange':'scwin.lc_bilgClntNm_onchange',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bilgClntNo'},E:[{T:1,N:'w2:label',A:{ref:'clntNm'}},{T:1,N:'w2:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',btnId:'btn_sellLodeptCd',code:'sellLodeptCd',codeId:'ed_sellLodeptCd',id:'udc_sellLodeptCd',mandatoryName:'true',maxlengthCode:'5',name:'sellLodeptNm',nameId:'ed_sellLodeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveLogisDeptInfo_tpro',style:'',validExpCode:'매출부서:yes','ev:onclickEvent':'scwin.udc_sellLodeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sellLodeptCd_onblurCodeEvent',validTitle:'매출부서',maxlengthName:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_bilgLodeptCd',code:'bilgLodeptCd',codeId:'ed_bilgLodeptCd','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent',hideName:'Y',id:'udc_bilgLodeptCd',maxlengthCode:'5',name:'bilgLodeptNm',nameId:'ed_bilgLodeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_odrInfo',selectID:'retrieveLogisDeptInfo_tpro',style:'',validExpCode:'청구부서:yes',validExpName:'',validTitle:'청구부서',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',maxlengthName:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Line/선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_lineCd',code:'lineCd',codeId:'ed_lineCd','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',hideName:'Y',id:'udc_lineCd',maxlengthCode:'5',nameId:'ed_lineNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveLineInfoList_tpro',style:'',validExpCode:'Line:yes',validExpName:'',name:'lineNm','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent',validTitle:'Line',allowCharCode:'0-9A-Za-z',UpperFlagCode:'1'}},{T:1,N:'xf:input',A:{class:'',id:'ed_shpCoClntNm',objType:'data',placeholder:'',style:'width:150px;',validExp:'선사거래처:no',ref:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'BK NO/수출신고번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_bookingNo',initValue:'',style:'width:150px; text-transform:uppercase;',allowChar:'0-9A-Za-z',maxlength:'20',mandatory:'true',validExp:'BKNO:yes:maxByteLength=20',ref:'data:ds_odrInfo.bkNo',objType:'data','ev:oneditkeyup':'scwin.ed_bookingNo_oneditkeyup',title:'BKNO','ev:onviewchange':'scwin.ed_bookingNo_onviewchange'}},{T:1,N:'xf:input',A:{id:'ed_expDeclarNo',initValue:'',style:'width:150px;text-transform: uppercase;',maxlength:'15',allowChar:'0-9a-zA-Z',ref:'data:ds_odrInfo.expDeclarNo',objType:'data',validExp:'수출NO:no:length=15','ev:onviewchange':'scwin.ed_expDeclarNo_onviewchange'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_sellYn',ref:'data:ds_odrInfo.sellYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',btnId:'btn_vsslCd',code:'vsslCd',codeId:'ed_vsslCd','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent',hideName:'Y',id:'udc_vsslCd',maxlengthCode:'4',name:'vsslNm',nameId:'ed_vsslNm',objTypeCode:'data',popupID:'pop_vsslCd',readOnlyName:'true',refDataCollection:'ds_odrInfo',selectID:'retrieveVsslCdInfo_tpro',style:'width:250px;',validExpCode:'선박명:no',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차/목적항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{id:'ed_portcnt',style:'width:83px; text-transform:uppercase;',objType:'data',validExp:'항차:no',maxlength:'10',allowChar:'0-9a-zA-Z','ev:onviewchange':'scwin.ed_portcnt_onviewchange'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_destPortCd',nameId:'hid_destPortNm',popupID:'',selectID:'retrievePortInfo_tpro',style:'width:%; height:px; ',validTitle:'',btnId:'btn_destPortCd',id:'udc_destPortCd',objTypeCode:'data',objTypeName:'',validExpCode:'목적항:no',validExpName:'',UpperFlagCode:'1',code:'portcnt',refDataCollection:'ds_odrInfo','ev:onclickEvent':'scwin.udc_destPortCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_destPortCd_onblurCodeEvent',allowCharCode:'0-9A-Za-z',hideName:'true',maxlengthCode:'5'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selfClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_odrInfo.selfClsCd',objType:'data','ev:onchange':'scwin.lc_selfClsCd_onchange',emptyItem:'',emptyValue:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'왕복/HL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_transCondCd',search:'start',style:'',submenuSize:'fixed',objType:'data',searchTarget:'value',ref:'data:ds_odrInfo.transCondCd',emptyIndex:'1',emptyItem:'true'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cntrWtCondCd',search:'start',style:'',submenuSize:'fixed',objType:'data',searchTarget:'value',ref:'data:ds_odrInfo.cntrWtCondCd',emptyItem:'true',emptyIndex:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'C/T',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group7',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_closeDt',style:'',ref:'data:ds_odrInfo.closeDt',objType:'data'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_closeHh',style:'',ref:'data:ds_odrInfo.closeHh',objType:'data','ev:oneditkeyup':'scwin.ed_closeHh_oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취소구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrClsCd',search:'start',style:'width: 100px;',submenuSize:'fixed',searchTarget:'value',chooseOption:'true',chooseOptionLabel:'선택',objType:'data',ref:'data:ds_odrInfo.odrClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',btnId:'btn_reqClntNo',code:'reqClntNo',codeId:'ed_reqClntNo','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent',hideName:'true',id:'udc_reqClntNo',maxlengthCode:'6',nameId:'ed_reqClntNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveClntInfo_tpro',style:'',validExpCode:'요청처:yes','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent',mandatoryCode:'true',validTitle:'요청처',skipOnBlurCodeValueEmpty:'N',keepCodeSwitch:'Y',keepNameSwitch:'Y'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_reqClntNm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_odrInfo.reqClntNm',allOption:'',chooseOption:'',displayMode:'label',mandatory:'true',objType:'data','ev:onchange':'scwin.lc_reqClntNm_onchange',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_reqClntNo'},E:[{T:1,N:'w2:label',A:{ref:'clntNm'}},{T:1,N:'w2:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'title_MasterKey',label:'마스터키',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9a-zA-Z',id:'ed_masterKey',initValue:'',maxlength:'9',style:'width:150px;text-transform: uppercase;',validExp:'MASTER KEY:no:maxByteLength=9',ref:'data:ds_odrInfo.masterKey',objType:'data','ev:onblur':'scwin.udc_masterKey_onblur','ev:onviewchange':'scwin.ed_masterKey_onviewchange'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_mgntNo',style:'width: 150px;',objType:'data',validExp:'관리번호:no',maxByteLength:'100',ref:'data:ds_odrInfo.mgntNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_vanTerm'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VAN TERM',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_vanTerm',search:'start',style:'width: 200px;',submenuSize:'fixed'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물위탁증',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-16'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주',class:''}},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_trnsRealMchtClntNm',objType:'data',maxByteLength:'100',ref:'data:ds_odrInfo.trnsRealMchtClntNm'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_trnsRealMchtClntTelNo',objType:'data',maxByteLength:'100',ref:'data:ds_odrInfo.trnsRealMchtClntTelNo'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'주선업자',class:''}},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_trnsCnsgMchtClntNm',objType:'data',maxByteLength:'100',ref:'data:ds_odrInfo.trnsCnsgMchtClntNm'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_trnsCnsgMchtClntTelNo',objType:'data',maxByteLength:'100',ref:'data:ds_odrInfo.trnsCnsgMchtClntTelNo'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClntNo2',selectID:'retrieveClntInfo_tpro',style:'display:none;'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'출도착정보 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_odrInfoArea2',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 500px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차지',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_lduldWrkPlCd',selectID:'',popupID:'',validTitle:'상차지',nameId:'ed_lduldWrkPlNm',style:'width:200px;',btnId:'btn_lduldWrkPlCd',id:'udc_lduldWrkPlCd',UpperFlagCode:'1',objTypeCode:'data',validExpCode:'상차지:yes',mandatoryName:'true',objTypeName:'data',code:'lduldWrkPlCd',refDataCollection:'ds_odrInfo',name:'lduldWrkPlNm','ev:onclickEvent':'scwin.udc_lduldWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lduldWrkPlCd_onblurCodeEvent',allowCharCode:'0-9a-zA-Z'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_lduldZip',nameId:'ed_lduldDtl',popupID:'',selectID:'retrieveZipList_tpro',style:'',validTitle:'상차지우편번호',btnId:'btn_lduldZip',id:'udc_lduldZip','ev:onclickEvent':'scwin.udc_lduldZip_onclickEvent','ev:onblurCodeEvent':'scwin.udc_lduldZip_onblurCodeEvent',refDataCollection:'ds_odrInfo',code:'lduldZip',name:'lduldDtl',validExpCode:'상차지우편번호:no',objTypeCode:'data',objTypeName:'data',validExpName:'상차지상세:no',mandatoryCode:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group9',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_lduldDt',style:'',objType:'data',validExp:'상차일시:yes',mandatory:'true',ref:'data:ds_odrInfo.lduldDt'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'text',id:'ed_lduldHh',style:'',objType:'data',mandatory:'true',validExp:'상차시간:yes:date=HHmm',displayFormat:'##:##',ref:'data:ds_odrInfo.lduldHh','ev:oneditkeyup':'scwin.ed_lduldHh_oneditkeyup',title:'상차시간',allowChar:'0-9',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_onPicNm',label:'상차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{allowChar:'0-9A-Za-z',id:'ed_lduldPicNm',initValue:'',objType:'data',ref:'data:ds_odrInfo.lduldPicNm',style:'width:150px;'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_time',search:'start',ref:'data:ds_odrInfo.lduldPicNm',style:'width: 150px;',submenuSize:'fixed',chooseOption:'true',chooseOptionLabel:'전체',objType:'data'}},{T:1,N:'xf:input',A:{allowChar:'0-9',id:'ed_lduldPicTelNo',initValue:'',maxlength:'11',objType:'data',ref:'data:ds_odrInfo.lduldPicTelNo',style:'width:150px;'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업지',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_dptWrkPlCd',nameId:'ed_dptWrkPlNm',popupID:'',selectID:'',style:'width:200px;',validTitle:'작업지',btnId:'btn_dptWrkPlCd',id:'udc_dptWrkPlCd',UpperFlagCode:'1',objTypeCode:'data',validExpCode:'작업지:yes',code:'dptWrkPlCd',name:'dptWrkPlNm',refDataCollection:'ds_odrInfo','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onblurCodeEvent',allowCharCode:'0-9a-zA-Z',mandatoryName:'true',objTypeName:'data'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_dptZip',selectID:'retrieveZipList_tpro',popupID:'',validTitle:'상차지우편번호',nameId:'ed_dptDtl',style:'',objTypeCode:'data',validExpName:'작업지상세:yes',btnId:'btn_dptZip',id:'udc_dptZip',refDataCollection:'ds_odrInfo',code:'dptZip',name:'dptDtl','ev:onclickEvent':'scwin.udc_dptZip_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dptZip_onblurCodeEvent',objTypeName:'data',mandatoryCode:'true',validExpCode:'no',mandatoryName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group10',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'',objType:'data',validExp:'작업일자:no',ref:'data:ds_odrInfo.wrkStDt'}},{T:1,N:'xf:input',A:{class:'w50 tac',id:'ed_wrkStHh',style:'',objType:'data',validExp:'작업시간:yes:date=HHmm',mandatory:'true',displayFormat:'##:##',ref:'data:ds_odrInfo.wrkStHh',dataType:'text','ev:oneditkeyup':'scwin.ed_wrkStHh_oneditkeyup',title:'작업시간',allowChar:'0-9',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_onPicNm',initValue:'',style:'width:150px;',maxlength:'13',allowChar:'0-9A-Za-z',objType:'data',ref:'data:ds_odrInfo.onPicNm'}},{T:1,N:'xf:input',A:{id:'ed_onPicTelNo',initValue:'',style:'width:150px;',objType:'data',allowChar:'0-9',maxlength:'11',ref:'data:ds_odrInfo.onPicTelNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차지',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_arvWrkPlCd',nameId:'ed_arvWrkPlNm',popupID:'',selectID:'',style:'width:200px;',validTitle:'하차지',btnId:'btn_arvWrkPlCd',id:'udc_arvWrkPlCd',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',validExpCode:'하차지:yes',mandatoryName:'true',code:'arvWrkPlCd',name:'arvWrkPlNm',refDataCollection:'ds_odrInfo','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent',allowCharCode:'0-9a-zA-Z'}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_arvZip',nameId:'ed_arvDtl',popupID:'',selectID:'retrieveZipList_tpro',style:'',validTitle:'하차지우편번호',btnId:'btn_arvZip',id:'udc_arvZip','ev:onclickEvent':'scwin.udc_arvZip_onclickEvent','ev:onblurCodeEvent':'scwin.udc_arvZip_onblurCodeEvent',refDataCollection:'ds_odrInfo',code:'arvZip',name:'arvDtl',validExpCode:'하차지우편번호:no',validExpName:'하차지상세:no',objTypeCode:'data',objTypeName:'data',hideName:'true',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group11',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkEndDt',style:'',objType:'data',validExp:'하차일자:yes:date=YYYYMMDD',ref:'data:ds_odrInfo.wrkEndDt'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'text',id:'ed_wrkEndHh',style:'',displayFormat:'##:##',mandatory:'true',objType:'data',validExp:'하차시간:yes:date=HHmm',ref:'data:ds_odrInfo.wrkEndHh',title:'하차시간',maxlength:'4',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_offPicNm',initValue:'',style:'width:150px;',allowChar:'0-9a-zA-Z',objType:'data',ref:'data:ds_odrInfo.offPicNm'}},{T:1,N:'xf:input',A:{id:'ed_offPicTelNo',initValue:'',style:'width:150px;',objType:'data',maxlength:'11',allowChar:'0-9',ref:'data:ds_odrInfo.offPicTelNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일시조정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 100px;',allOption:'',id:'lc_termCd',class:'',direction:'auto',chooseOptionLabel:'선택',ref:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'TERM'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_termHh',objType:'data',validExp:'일시조정시간:no:date=HH',allowChar:'0-9',maxlength:'2'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'시간',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_termMm',objType:'data',validExp:'일시조정분:no:date=mm',maxlength:'2',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'분',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:textarea',A:{class:'h-80',id:'ta_rmk',style:'',objType:'data',validExp:'특이사항:no:maxByteLength=500',ref:'data:ds_odrInfo.rmk','ev:onblur':'scwin.ta_rmk_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_saveRmk',style:'',type:'button','ev:onclick':'scwin.btn_saveRmk_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'철송구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_railroadDptWrkPlCd',selectID:'',popupID:'',validTitle:'철송구간',nameId:'ed_railroadDptWrkPlNm',style:'width:200px;',btnId:'btn_railroadDptWrkPlCd',id:'udc_railroadDptWrkPlCd',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data',code:'railroadDptWrkPlCd',name:'railroadDptWrkPlNm',refDataCollection:'ds_odrInfo','ev:onclickEvent':'scwin.udc_railroadDptWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_railroadDptWrkPlCd_onblurCodeEvent'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_railroadArvWrkPlCd',selectID:'',popupID:'',validTitle:'철송구간',nameId:'ed_railroadArvWrkPlNm',style:'width:200px;',btnId:'btn_railroadArvWrkPlCd',id:'udc_railroadArvWrkPlCd',UpperFlagCode:'1',code:'railroadArvWrkPlCd',name:'railroadArvWrkPlNm',refDataCollection:'ds_odrInfo',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_railroadArvWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_railroadArvWrkPlCd_onblurCodeEvent'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_alloccarPicId',nameId:'ed_alloccarPicNm',popupID:'',selectID:'retrieveUserInfo_tpro',style:'width:%; height:px; ',validTitle:'배차담당',btnId:'btn_alloccarPicId',id:'udc_alloccarPicId',objTypeName:'data',objTypeCode:'data',validExpCode:'배차담당:no',UpperFlagCode:'1',code:'alloccarPicId',name:'alloccarPicNm',refDataCollection:'ds_odrInfo','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent'}},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_cntrRegYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'display: none'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너 갱신여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_rsn'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'txt_rsn',label:'수정사유',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rsnCd',style:'width: 50%;',submenuSize:'fixed',ref:'data:ds_odrInfo.rsnCd'}},{T:1,N:'xf:input',A:{id:'ed_rsnTxt',objType:'data',style:'width: 50%',validExp:'수정사유:no',ref:'data:ds_odrInfo.rsnTxt'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkPathCopy',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'빈값복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'생성조건',class:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_sizClsCd',search:'start',style:'width:60px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_typClsCd',search:'start',style:'width:60px;',submenuSize:'auto',objType:'data',visibleRowNum:'15',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_efClsCd',search:'start',style:'width:60px;',submenuSize:'auto',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkTypCd',objType:'data',search:'start',style:'width:60px;',submenuSize:'auto',displayMode:'label',ref:'',allOption:'',chooseOption:'true',emptyItem:'true',emptyValue:'',emptyIndex:'-1',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_setWt',placeholder:'',style:'width:70px;',objType:'data',maxlength:'18',displayFormat:'#,##0'}},{T:1,N:'xf:input',A:{class:'',id:'ed_rowMake',objType:'data',placeholder:'',style:'width:35px;','ev:oneditkeyup':'scwin.ed_rowMake_oneditkeyup',allowChar:'0-9',maxlength:'2'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_copy',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_copy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'Y',grp:'grd_section1',templateYn:'N',style:'',gridID:'gr_cntrInfo',btnPlusYn:'Y',grdDownOpts:'{"fileName":"수입일반컨테이너오더.xlsx", "sheetName" : "수입일반컨테이너오더", "removeColumns":"0"}',btnUser:'N',id:'udc_topGrdBtn',gridUpFn:'scwin.f_import'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_cntrInfo',style:'',autoFit:'none',id:'gr_cntrInfo',visibleRowNum:'5',class:'wq_gvw',dataDragSelect:'true',dataDragSelectAutoScroll:'true',resize:'true','ev:oncelldblclick':'scwin.gr_cntrInfo_oncelldblclick','ev:onviewchange':'scwin.gr_cntrInfo_onviewchange',editModeEvent:'onclick',rowStatusVisible:'true',fixedColumn:'3'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column1',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'Seq',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'확정',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'입항일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'컨테이너</br>번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'SZ',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'TP',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'EF',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'중량',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'수입</br>Seal-No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'수출</br>Seal-No',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column23',value:'작업경로',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'작업경로명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'BL번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'작업구분',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'긴급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'매출항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'할인',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'특기사항',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'실적여부',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'상차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'상차</br>매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'하차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'하차</br>매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'수출신고번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'creatOdrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSeq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcsnYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arrvlportDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrNo',value:'',displayMode:'label',allowChar:'0-9a-zA-Z',maxLength:'11'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'cntrSizCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'cntrTypCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'fullEmptyClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',displayFormat:'#,###',defaultValue:'0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'impSealNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'expSealNo',value:'',displayMode:'label',allowChar:'0-9a-zA-Z',maxLength:'10'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'ctrtWrkPathSeq',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',selectedData:'false',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_ctrtWrkPath'},E:[{T:1,N:'w2:label',A:{ref:'rmk'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'ctrtWrkPathNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'cntrWrkShapeCd',value:'',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'cntrWrkClsCd',value:'',displayMode:'value delim label',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selpchItemNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true',defaultValue:'0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'scAmt',value:'',displayMode:'label',readOnly:'true',defaultValue:'0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkRsltsNo',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'sellItemCd1',value:'',displayMode:'value delim label',chooseOption:'true',chooseOptionLabel:'$blank'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellAmt1',value:'',displayMode:'label',defaultValue:'0',textAlign:'right',maxLength:'13',allowChar:'0-9',displayFormat:'#,###,###,###,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'sellItemCd2',value:'',displayMode:'value delim label',chooseOption:'true',chooseOptionLabel:'$blank'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellAmt2',value:'',displayMode:'label',defaultValue:'0',textAlign:'right',allowChar:'0-9',maxLength:'13',displayFormat:'#,###,###,###,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'expDeclarNo',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowDelUserAuth:'D',rowAddUserAuth:'C',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_undoRow',gridID:'gr_cntrInfo',rowAddFunction:'scwin.f_addRowA',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_undoRow'}}]}]},{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_excelTmp',style:'display: none;',autoFit:'none',id:'gr_excel',visibleRowNum:'5',class:'wq_gvw',dataDragSelect:'true',dataDragSelectAutoScroll:'true',resize:'true','ev:onviewchange':'scwin.gr_cntrInfo_onviewchange',editModeEvent:'onclick',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'h_cntrNo',inputType:'text',width:'150',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'h_cntrSizCd',inputType:'text',width:'100',value:'컨테이너사이즈',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'h_cntrTypCd',inputType:'text',width:'100',value:'컨테이너타입',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'h_fullEmptyClsCd',inputType:'text',width:'130',value:'FULL/EMPTY구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'h_wt',inputType:'text',width:'90',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'h_expSealNo',inputType:'text',width:'130',value:'수출봉인번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'cntrNo',inputType:'text',width:'150',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'cntrSizCd',inputType:'text',width:'100',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'cntrTypCd',inputType:'text',width:'100',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'fullEmptyClsCd',inputType:'text',width:'130',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'wt',inputType:'text',width:'90',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'expSealNo',inputType:'text',width:'130',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_tariff',style:'',type:'button','ev:onclick':'scwin.f_ctrtTransTrfList'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약요율'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_confirmOdr',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_confirmOdr_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_dc',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_dc_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'할인할증'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_updateCntrInfo',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_updateCntrInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'컨테이너상세'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_chgWrkPath',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_chgWrkPath_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrRegIfno',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_odrRegIfno_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'등록현황'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrCopy',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_odrCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더복사'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'저장',style:'',type:'button',userAuth:'D','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_cntrInfo',label:'저장',type:'button',class:'btn link',userAuth:'U','ev:onclick':'scwin.btn_cntrInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'컨테이너정보'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_zip',popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'display:none;'}}]}]}]})