/*amd /ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_05b.xml 194389 c06ec9591641727e2d5623ac41334fdef34f52eb187ebf6b3ca321b1cb5f1630 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchSys',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param4',name:'param4'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchGrp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'grpCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_odrKndCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'name3'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'C1'}]},{T:1,N:'cdNm',E:[{T:4,cdata:'컨테이너 수입본선'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cdNm',E:[{T:4,cdata:'컨테이너 수입TS'}]},{T:1,N:'cd',E:[{T:4,cdata:'CS'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'cdNm',E:[{T:4,cdata:'부두간 TS'}]},{T:1,N:'cd',E:[{T:4,cdata:'CT'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'I'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndCtrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDivBukYn',name:'사업부문벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_relClntNo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출물류부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구물류부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'조정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'TS 선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'출발지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'도착지우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortCd',name:'TS항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부코드',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transhipYn',name:'환적여부',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_cntrInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'Booking번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'컨테이너작업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할인/할증',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'실적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현재위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd1',name:'매출품목코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt1',name:'매출금액1',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellItemCd2',name:'매출품목코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'매출금액2',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDeclarNo',name:'수출신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cxOdrNo',name:'CX오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cxClntNo',name:'CX거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciOdrNo',name:'CI오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ciClntNo',name:'CI거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c2ClntNo',name:'C2거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeCd',name:'컨테이너작업형태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unno',name:'UNNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyEmptyYn',name:'CY공컨여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toCd',name:'name49',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndOdrNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndCvsslMgntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsYn',name:'TS여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deleteOrderCond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'고객담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배정비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'고객담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배정비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'계약작업경로 비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unno',name:'UNNO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unno',name:'UNNO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrEtc',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'계약작업경로 비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cntrSize',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cntrType',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cntrFE',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_addCntrInfo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'도착항일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'컨테이너번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'컨테이너사이즈코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'컨테이너타입코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'풀공컨구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wt',name:'중량'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impSealNo',name:'수입씰번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'B/L번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'도착작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlNm',name:'도착작업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveBasicOdrListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveContractNumberCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_retrieveCtrtNo',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',replace:'',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_retrieveCtrtNo2',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',replace:'',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_retrieveClntNo',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,["dma_cndClntNo",{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_relClntNo","key":"OUT_DS3"}]',replace:'',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_relClntNo","key":"OUT_DS3"}]',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveManifestBLContainerList',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveManifestBillOfLadingContainerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndCvsslMgntNo","key":"IN_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_retrieveCtrtWrkPath',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',style:'',target:'data:json,{"id":"ds_ctrtWrkPath","key":"GAUCE"}'}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.DeleteContainerOrderCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_deleteOrderCond',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"id":"ds_deleteOrderCond","key":"IN_DS1"}',replace:'',style:'',target:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.ConfirmOrderCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',id:'sbm_update',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"action":"modified", "id":"ds_odrInfo","key":"IN_DS1"}',replace:'',style:'',target:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_comSearchSys',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',target:'',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCodeCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_comSearchGrp',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',target:'',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RegistCarryingVesselContainerOrderCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_registByOdrKndCd',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"action":"modified","id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified","id":"ds_cntrInfo","key":"IN_DS2"},{"id":"ds_cndOdrNo","key":"OUT_DS1"}]',replace:'',style:'',target:'data:json,{"id":"ds_cndOdrNo","key":"OUT_DS1"}',userData1:'noError'}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.UpdateCarryingVesselContainerOrderCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_updateByOdrKndCd',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"action":"modified","id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified","id":"ds_cntrInfo","key":"IN_DS2"}]',replace:'',style:'',target:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ncall.tn.sd.odrmgnt.cntrodrreg.RetrieveManifestBillOfLadingContainerListCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_retrieveCntrBasisInfo',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_cndCvsslMgntNo","key":"IN_DS1"},{"id":"ds_addCntrInfo","key":"OUT_DS1"}]',replace:'',style:'',target:'data:json,{"id":"ds_addCntrInfo","key":"OUT_DS1"}'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//설명 - 수입일반오더

// 세션정보 가져오기
scwin.memJson = $c.data.getMemInfo($p);
scwin.lobranCd = scwin.memJson.lobranCd;
scwin.rentcarOfcCd = scwin.memJson.rentcarOfcCd;
scwin.loginId = scwin.memJson.loginId;
scwin.strCurDate = $c.date.getServerDateTime($p);

// 사용자 정보 가져오기
//UserDTO userDTO = UserUtil.getCurrentUserDTO();

// 다른화면에서 넘어오는 경우
scwin.odrNo = ""; // 오더번호
scwin.odrKndCd = ""; // 오더종류
scwin.type = ""; // type
scwin.linkPage = ""; // 링크페이지 종류
scwin.odrCopy = ""; // 웹오더요청번호

scwin.odrCtrlClsCd = "";
scwin.odrKndCd = ""; // 오더종류코드 
scwin.impExpClsCd = ""; // 수출입내수구분코드
scwin.mgntTrgtClntYn = 0; // 거래처 관리대상여부
scwin.retrieveYn = "N"; // 조회여부
scwin.excelUploadYn = 0; // EXCEL UPLOAD (C3) 여부 
scwin.findString = "";
scwin.hid_odrNo = ""; // 오더번호 odrNo
scwin.hid_odrKndCd = ""; // 오더종류 odrKndCd
scwin.hid_chkReterieve = ""; // 조회 여부 확인
scwin.hid_linkPage = ""; // link page 명 linkPage
scwin.hid_odrCopy = "";
scwin.hid_chkMode = ""; // 작업 모드
scwin.hid_dptWrkLobranCd = ""; // 작업점소
scwin.hid_adptExchRtDt = ""; // 적용환율일자

scwin.cntrLoadGubun = "";
scwin.gridOldData = "";
scwin.gridSelRow = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);

  // 다른화면에서 넘어오는 경우
  scwin.odrNo = scwin.params["odrNo"]; // 오더번호
  scwin.odrKndCd = scwin.params["odrKndCd"]; // 오더종류
  scwin.type = scwin.params["type"]; // type
  scwin.linkPage = scwin.params["linkPage"]; // 링크페이지 종류
  scwin.odrCopy = scwin.params["odrCopy"]; // 웹오더요청번호

  scwin.hid_odrNo = scwin.odrNo;
  scwin.hid_odrKndCd = scwin.odrKndCd;
  scwin.hid_chkReterieve = scwin.type;
  scwin.hid_linkPage = scwin.linkPage;
  scwin.hid_odrCopy = scwin.odrCopy;

  // 공통코드 설정
  const codeOptions = [{
    grpCd: "SD158",
    compID: "lc_odrCtrlClsCd"
  }, {
    grpCd: "SD165",
    compID: "gr_cntrInfo:cntrWrkClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  let dltStr = "dlt_commonCodeSD158"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  $c.data.dataListFilter($p, dlt, "fltrCd1 == 'CT'"); //$c.data.dataListFilter 함수를 이용해서 필터
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_set("INIT", "CREATE");
  if (scwin.hid_linkPage == "odrList") {
    ed_odrNo.setValue(scwin.hid_odrNo.trim());
    scwin.f_Retrieve();
    if (scwin.hid_odrCopy == "copy") {
      scwin.set_copy();
    }
  }
  scwin.f_retrieveGridLookup();
};

//-------------------------------------------------------------------------
// Function@@
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// 화면 onLoad시 초기 데이타 setting
// gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
// gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
// 1.초기화,신규모드,오더종류변경되는 경우 : 오더기본정보 세팅(f_setDefaultValue()참조)
//-------------------------------------------------------------------------
scwin.f_set = function (gubun1, gubun2) {
  switch (gubun1) {
    case "INIT":
      // 초기화/신규 
      scwin.odrKndCd = lc_odrKndCd.getValue(); // 오더종류
      if (gubun2 == "INIT") {
        // 초기화모드
        scwin.f_clearDataSet();
        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfEnableBtnOnly($p, [btn_retrieve, btn_create]);
        $c.gus.cfDisableObjects($p, [btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy, chk_ctTranshipYn, chk_csTranshipYn]);
        $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_tsVsslNm, ed_alloccarPicNm]);
        $c.gus.f_setActiveImgPopUp($p, "D"); // 팝업버튼 비활성화
        //gr_cntrInfo.setReadOnly("grid", true); // 그리드 비활성화
        scwin.f_setActiveGrid("D");
        $c.gus.cfInitHidVal($p, [tbl_odrInfoArea]);
        $c.gus.cfInitObjects($p, lc_odrCtrlClsCd);
        lc_odrKndCd.setSelectedIndex(0);
        lc_odrCtrlClsCd.setValue("1");
        scwin.odrCtrlClsCd = lc_odrCtrlClsCd.getValue();
        rd_wrkPathCopy.setValue("0");
        scwin.statusFlag = "C"; // 수정등록 flag
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; // EXCEL UPLOAD (C3) 여부 
      } else if (gubun2 == "CREATE") {
        // 신규모드
        scwin.f_clearDataSet();
        $c.gus.cfEnableKeyData($p);
        $c.gus.cfDisableKey($p);
        $c.gus.cfEnableAllBtn($p);
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
          // ct오더 이거나 cs오더일경우
          $c.gus.cfEnableObjects($p, [btn_save]);
          $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy, chk_ctTranshipYn, chk_csTranshipYn]);
        } else {
          $c.gus.cfEnableObjects($p, [btn_save, chk_ctTranshipYn, chk_csTranshipYn]);
          $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
        }
        $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_tsVsslNm, ed_alloccarPicNm]);
        scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화
        //gr_cntrInfo.setReadOnly("grid", false); // 그리드 활성화
        scwin.f_setActiveGrid("E");
        lc_odrKndCd.focus();
        $c.gus.cfInitHidVal($p, [tbl_odrInfoArea]);
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화 
        scwin.excelUploadYn = 0; // EXCEL UPLOAD (C3) 여부 

        lc_odrKndCd.setSelectedIndex(0);
        lc_odrKndCd.focus();
        scwin.lc_odrKndCd_onchange();
        lc_odrCtrlClsCd.setValue("1");
        scwin.odrCtrlClsCd = lc_odrCtrlClsCd.getValue();
        rd_wrkPathCopy.setValue("0");

        // 작업경로 초기화
        let index = ds_ctrtWrkPath.insertRow();
        ds_ctrtWrkPath.setCellData(index, 'ctrtWrkPathSeq', 0);
        ds_ctrtWrkPath.setCellData(index, 'rmk', "선택");
        scwin.statusFlag = "C"; // 수정등록 flag   
        scwin.retrieveYn = "N"; // 조회여부 
      } else if (gubun2 == "ODRKNDCD") {
        // 오더종류 변경되는 경우
        if (ds_cndCtrtNo.getRowCount() > 0) ds_cndCtrtNo.removeAll();
        if (ds_ctrtNo.getRowCount() > 0) ds_ctrtNo.removeAll();
        if (ds_reqClntNo.getRowCount() > 0) ds_reqClntNo.removeAll();
        if (ds_bilgClntNo.getRowCount() > 0) ds_bilgClntNo.removeAll();
        if (ds_cntrInfo.getRowCount() > 0) ds_cntrInfo.removeAll();
        cntrTotalRows.setValue(ds_cntrInfo.getRowCount());
        $c.gus.cfInitObjects($p, tbl_odrInfoArea, [lc_odrKndCd, scwin.hid_chkReterieve]);
        $c.gus.cfInitObjects($p, tbl_odrInfoArea2);
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; // EXCEL UPLOAD (C3) 여부

        lc_odrCtrlClsCd.setValue("1");
        scwin.odrCtrlClsCd = lc_odrCtrlClsCd.getValue();
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
          // ct오더 이거나 cs오더일경우
          $c.gus.cfDisableObjects($p, [chk_ctTranshipYn, chk_csTranshipYn]);
        } else {
          $c.gus.cfEnableObjects($p, [chk_ctTranshipYn, chk_csTranshipYn]);
        }
        scwin.f_setSellAndBilgDept(); // 매출청구부서셋팅
      }

      // 오더별 자가구분코드 LuxeCombo CBData 세팅
      ds_odrInfo.setRowPosition(0);
      scwin.f_setDefaultValue(); // 기본정보세팅                
      scwin.hid_chkMode = "create";
      break;
    case "RETRIEVE":
      //조회모드         
      var odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); // 확정여부
      var odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); // 삭제여부
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableAllBtn($p);
      $c.gus.cfDisableObjects($p, [btn_save, btn_delete, btn_addRow, btn_deleteRow, btn_undoRow, chk_ctTranshipYn, chk_csTranshipYn]);
      $c.gus.cfEnableBtnOnly($p, [btn_retrieve, btn_create, btn_update, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
      scwin.f_setActiveImgPopUp("D"); // 팝업버튼 비활성화
      //gr_cntrInfo.setReadOnly("grid", true); // 그리드 비활성화
      scwin.f_setActiveGrid("D");
      if (odrDcsnYn != DsConstants.YN_YES) {
        // 오더가 확정되지 않은 경우                       
        $c.gus.cfEnableObjects($p, [btn_confirmOdr]);
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
      } else {
        // 오더가 확정된 경우
        $c.gus.cfDisableObjects($p, [btn_confirmOdr]);
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
        $c.gus.cfDisableObjects($p, [lc_socYn]);
      }

      // EVER라인은 RPO NO 노출
      if ((ed_lineCd.getValue().trim() == "EVER" || ed_lineCd.getValue().trim() == "HTML" || ed_lineCd.getValue().trim() == "EMS" || ed_lineCd.getValue().trim() == "ITS") && lc_odrKndCd.getValue() == "C1") {
        tr_clntMgntNo.show("table-row");
      } else {
        tr_clntMgntNo.hide();
      }

      // CT오더일경우 적하, 비적하 구분
      if (scwin.odrKndCd == "CT" && ds_odrInfo.getCellData(0, "odrCtrlClsCd") == "2") {
        gr_cntrInfo.setColumnVisible("portCd", true);
        gr_cntrInfo.setColumnVisible("blNo", true);
        gr_cntrInfo.setColumnVisible("impDangerCd", true);
        gr_cntrInfo.setColumnVisible("temper", true);
        gr_cntrInfo.setColumnVisible("unno", true);
        gr_tmp.setColumnVisible("portCd", true);
        gr_tmp.setColumnVisible("blNo", true);
        gr_tmp.setColumnVisible("impDangerCd", true);
        gr_tmp.setColumnVisible("temper", true);
        gr_tmp.setColumnVisible("unno", true);

        //  udc_topGrdBtn.setDisabledBtn("btn_excelUp", false);
      } else {
        gr_cntrInfo.setColumnVisible("portCd", false);
        gr_cntrInfo.setColumnVisible("blNo", false);
        gr_cntrInfo.setColumnVisible("impDangerCd", false);
        gr_cntrInfo.setColumnVisible("temper", false);
        gr_cntrInfo.setColumnVisible("unno", false);
        gr_tmp.setColumnVisible("portCd", false);
        gr_tmp.setColumnVisible("blNo", false);
        gr_tmp.setColumnVisible("impDangerCd", false);
        gr_tmp.setColumnVisible("temper", false);
        gr_tmp.setColumnVisible("unno", false);
        //     
        //    udc_topGrdBtn.setDisabledBtn("btn_excelUp", true);
      }
      break;
    case "UPDATE":
      // 수정모드
      $c.gus.cfDisableObjects($p, [btn_confirmOdr]);
      scwin.odrKndCd = lc_odrKndCd.getValue(); //오더종류
      scwin.impExpClsCd = ds_odrKndCd.getCellData(lc_odrKndCd.getSelectedIndex(), "fltrCd2"); // 수출/입 구분코드

      var cntrInfoRows = ds_cntrInfo.getRowCount();
      var odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); // 확정여부
      var odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); // 삭제여부

      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableKey($p);
      $c.gus.cfEnableAllBtn($p);
      if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
        // ct오더 이거나 cs오더일경우
        $c.gus.cfEnableObjects($p, [btn_updateCntrInfo, btn_delete, btn_save, btn_addRow, btn_deleteRow, btn_undoRow, btn_dc, btn_chgWrkPath]);
        $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_tsVsslNm, chk_ctTranshipYn, chk_csTranshipYn]);
      } else {
        $c.gus.cfEnableObjects($p, [btn_updateCntrInfo, btn_delete, btn_save, btn_addRow, btn_deleteRow, btn_undoRow, btn_dc, btn_chgWrkPath, chk_ctTranshipYn, chk_csTranshipYn]);
        $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_tsVsslNm]);
      }
      $c.gus.cfDisableObjects($p, [btn_update, ed_lineCd, btn_lineCd, ed_shpCoClntNm, ed_cvsslMgntNo, btn_cvsslMgntNo, ed_lineNm, ed_vsslCd, ed_vsslNm, ed_portcnt, ed_alloccarPicNm]);
      // 비활성화
      $c.gus.cfEnableObj($p, lc_odrKndCd, false); // 오더종류코드 
      $c.gus.cfEnableObj($p, ed_ctrtClntNo, false); // 계약거래처코드
      $c.gus.cfEnableObj($p, ed_ctrtClntNm, false); // 계약거래처명    
      $c.gus.cfEnableObj($p, lc_ctrtNo, false); // 계약번호 비활성화
      $c.gus.cfEnableObj($p, btn_ctrtClntNo, false); // 계약거래처 PopUp버튼             
      $c.gus.cfEnableObj($p, lc_odrCtrlClsCd, false); // 조정
      $c.gus.cfEnableObjects($p, [lc_socYn]); // PCY 모선제어    
      scwin.statusFlag = "U";
      $c.gus.cfEnableObj($p, rd_sellYn, false);

      //gr_cntrInfo.setReadOnly("grid", false); // 그리드 비활성화
      scwin.f_setActiveGrid("E");

      // 그리드 edit={decode(wrkRsltsNo, "","true","false")} 로직 추가
      for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
        var isReadOnly = !$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, 'wrkRsltsNo'));
        gr_cntrInfo.setCellReadOnly(i, "wt", isReadOnly);
        gr_cntrInfo.setCellReadOnly(i, "impSealNo", isReadOnly);
        gr_cntrInfo.setCellReadOnly(i, "toCd", isReadOnly);
        gr_cntrInfo.setCellReadOnly(i, "ctrtWrkPathSeq", isReadOnly);
        gr_cntrInfo.setCellReadOnly(i, "cntrWrkClsCd", isReadOnly);
        gr_cntrInfo.setCellReadOnly(i, "rmk", isReadOnly);
      }

      // 실적 발생여부를 조회하여 수정항목을 설정
      if (scwin.f_chkResultsConfirmation()) {
        // 수정불가 항목을 Disable 한다.
        // 수정 불가항목 : 오더번호, 오더종류, 계약거래처, 계약번호, 대표거래처
        //           , 출발작업장, 도착작업장, 작업시작일자, 작업시작시간, 작업종료일자, 작업종료시간
        //           , 자가구분, 작업유형, 합적여부 (벌크오더 화면에는 해당되지 않는다.
        $c.gus.cfDisableObjects($p, [ed_dptWrkPlCd, ed_dptWrkPlNm, btn_dptWrkPlCd, ed_arvWrkPlCd, ed_arvWrkPlNm, btn_arvWrkPlCd, ed_wrkStDt, ed_wrkStHh, ed_wrkStDt, ed_wrkEndDt, ed_wrkEndHh, ed_wrkEndDt, rd_sellYn]);
        $c.gus.cfDisableBtnOnly($p, [btn_delete]);
      } else {
        // 컨테이너를 지정하지 않은 경우 , 자가구분코드 활성화 
        var cntrAssgnYn = "N";
        for (var i = 0; i < cntrInfoRows; i++) {
          if (ds_cntrInfo.getCellData(i, "cntrNo").trim() != "") {
            cntrAssgnYn = "Y";
            break;
          }
        }
      }
      scwin.hid_chkMode.value = "";
      scwin.excelUploadYn = 0; // EXCEL UPLOAD (C3) 여부 
      break;
  }
};
scwin.f_setDefaultValue = function () {
  ds_odrInfo.setCellData(0, "sellYn", 1); // 매출여부  
  ds_odrInfo.setCellData(0, "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); // 자가구분코드 - 당사운송
  ds_odrInfo.setCellData(0, "regBranCd", scwin.lobranCd); // 등록점소 - 사용자 설정 물류점소        
  ds_odrInfo.setCellData(0, "transCargoClsCd", "C"); // 운송화물구분코드  
  ds_odrInfo.setCellData(0, "impExpDomesticClsCd", scwin.impExpClsCd); // 수입수출내수구분코드 
  ds_odrInfo.setCellData(0, "taxnClsCd", ds_ctrtNo.getCellData(lc_ctrtNo.getSelectedIndex(), "taxnClsCd")); // 과세구분코드
  ds_odrInfo.setCellData(0, "chClsCd", ""); // CH구분코드
  ds_odrInfo.setCellData(0, "cntrWtCondCd", ""); // 컨테이너중량조건    
  ds_odrInfo.setCellData(0, "transCondCd", ""); // 운송조건

  // 상차일시, 하차일시 초기값 설정
  ed_wrkStDt.setValue(scwin.strCurDate);
  ed_wrkEndDt.setValue(scwin.strCurDate);
};

// 데이터셋 지우기
scwin.f_clearDataSet = function () {
  if (ds_cndCtrtNo.getRowCount() > 0) ds_cndCtrtNo.removeAll();
  if (ds_ctrtNo.getRowCount() > 0) ds_ctrtNo.removeAll();
  if (ds_reqClntNo.getRowCount() > 0) ds_reqClntNo.removeAll();
  if (ds_bilgClntNo.getRowCount() > 0) ds_bilgClntNo.removeAll();
  if (ds_cntrInfo.getRowCount() > 0) ds_cntrInfo.removeAll();
  if (ds_deleteOrderCond.getRowCount() > 0) ds_deleteOrderCond.removeAll();
  if (ds_ctrtWrkPath.getRowCount() > 0) ds_ctrtWrkPath.removeAll();
  if (ds_odrEtc.getRowCount() > 0) ds_odrEtc.removeAll();

  // 검색조건 - 오더번호
  ds_cndOdrNo.removeAll();

  // 오더정보
  ds_odrInfo.removeAll();
  ds_odrInfo.insertRow();
};
scwin.f_setActiveImgPopUp = function (gubun) {
  if (gubun == "E") {
    // 활성
    $c.gus.cfEnableObjects($p, [btn_ctrtClntNo, btn_reqClntNo, btn_bilgClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_cvsslMgntNo, btn_vsslCd, btn_tsCvsslMgntNo, btn_dptZip, ed_wrkStDt, btn_arvZip, ed_wrkEndDt, btn_tsVsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd]);
  } else if (gubun == "D") {
    // 비활성
    $c.gus.cfDisableObjects($p, [btn_ctrtClntNo, btn_reqClntNo, btn_bilgClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_cvsslMgntNo, btn_vsslCd, btn_tsCvsslMgntNo, btn_dptZip, ed_wrkStDt, btn_arvZip, ed_wrkEndDt, btn_tsVsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd]);
  }
};

// 품명, 컨테이너목록에서 Size,Type,Full / Empty가져오기
scwin.f_retrieveGridLookup = async function () {
  // 컨테이너 SIZE
  await dma_comSearchGrp.set("grpCd", "OP101");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrSize.setJSON(e.responseJSON.GAUCE);
  });

  // 컨테이너 TYPE
  await dma_comSearchGrp.set("grpCd", "OP102");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrType.setJSON(e.responseJSON.GAUCE);
  });

  // 컨테이너 Full/Empty
  await dma_comSearchGrp.set("grpCd", "OP171");
  await $c.sbm.execute($p, sbm_comSearchGrp, dma_comSearchGrp.getJSON()).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_cntrFE.setJSON(e.responseJSON.GAUCE);
  });
  scwin.setColumnStatus(["cntrSizCd", "cntrTypCd", "fullEmptyClsCd"], true);
};

// 컨테이너상세ETC 화면으로 이동하기
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
  rtnList = await $c.win.openPopup($p, "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_12b.xml", opts, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "N/A" && rtnList[1] == "Y") {
      scwin.f_retrieve();

      //탭선택시 재조회
      //parent.iFrame1.hid_chkReterieve.value = "";				
    }
  }
};

// 공통팝업 호출
scwin.f_openCommonPopUp = async function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, pOnlyCdTF) {
  var pCode = "";
  var pWhere = "";
  var pWtitleSearch = "";
  var pSelectID = "";
  var pWhere = "";
  var rtnList = new Array();
  scwin.sellBilgPNoDataCloseTF = "";
  switch (gubun1) {
    case 1:
      // 계약처 팝업
      if (gubun2 == "CTRT") {
        // 계약처
        pCode = ed_ctrtClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_reqClntNo.setValue(pCode);
          lc_reqClntNm.setSelectedIndex(-1);
        }
        pWtitleSearch = "계약 거래처,거래처코드,거래처명";
        pWhere = ",CTRT,CTRT";
        udc_ctrtClntNo.cfCommonPopUp(scwin.callBackClntCtrt, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      } else if (gubun2 == "REQ") {
        // 요청처
        pCode = ed_reqClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_reqClntNo.setValue(pCode);
          lc_reqClntNm.setSelectedIndex(-1);
        }
        pWtitleSearch = "요청 거래처,거래처코드,거래처명";
        pWhere = ",,CTRT";
        udc_reqClntNo.cfCommonPopUp(scwin.callBackClntReq, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      } else if (gubun2 == "BILG") {
        // 청구처
        pCode = ed_bilgClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_bilgClntNo.setValue(pCode);
          lc_bilgClntNm.setSelectedIndex(-1);
        }
        pWtitleSearch = "청구 거래처,거래처코드,거래처명";
        pWhere = ",,CTRT";
        udc_bilgClntNo.cfCommonPopUp(scwin.callBackClntBilg, pCode, pCode, pWinCloseTF, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", pWhere, '800', '600', null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      }
      break;
    case 2:
      //매출/청구부서
      // pWhere = "T,J";   // 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
      if (gubun2 == "SELL") {
        // 매출부서
        pCode = ed_sellLodeptCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_sellLodeptNm.setValue("");
          pWhere = "T,J,,,T,T,1";
        } else {
          pWhere = "T,J,,,,T,1";
        }
        pWtitleSearch = "매출부서,부서코드,부서명";
        scwin.sellBilgPNoDataCloseTF = pNoDataCloseTF;
        udc_sellLodeptCd.cfCommonPopUp(scwin.callBackSellLodept, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      } else if (gubun2 == "BILG") {
        // 청구부서  
        pCode = ed_bilgLodeptCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_bilgLodeptNm.setValue("");
          pWhere = "T,J,,,T,,,1";
        } else {
          pWhere = "T,J,,,,,,1";
        }
        pWtitleSearch = "청구부서,부서코드,부서명";
        scwin.sellBilgPNoDataCloseTF = pNoDataCloseTF;
        udc_bilgLodeptCd.cfCommonPopUp(scwin.callBackBilgLodept, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      }
      break;
    case 3:
      //Line조회 - Line코드, Line명, 선사코드, 선사코드명   
      pCode = ed_lineCd.getValue().trim();
      if (pNoDataCloseTF == "T") {
        ed_lineCd.setValue(pCode);
        $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
        $c.gus.cfInitHidVal($p, [ed_lineNm, ed_shpCoClntNm]);
        ds_odrInfo.setCellData(0, "shpCoClntNo", "");
        pWhere = "T";
      }
      pWtitleSearch = "LINE,LINE코드,LINE명";
      udc_lineCd.cfCommonPopUp(scwin.callBacklineCd, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      break;
    case 4:
      // 본선관리번호 조회 - 선박코드, (선사)항차, 마감일시, 항구코드 가져오기     
      var arrParam = new Array(2);
      if (gubun2 == "") {
        // 본선관리번호
        arrParam[0] = ed_cvsslMgntNo.getValue().trim();
        arrParam[1] = scwin.impExpClsCd;
      } else if (gubun2 == "TS") {
        // TS본선관리번호
        arrParam[0] = ed_tsCvsslMgntNo.getValue().trim();
        arrParam[1] = 'O';
      }
      var opts = {
        id: "op_204_01_07p",
        popupName: "본선관리번호검색팝업",
        modal: true,
        type: "browserPopup",
        title: "본선관리번호검색화면",
        width: 1200,
        height: 500
      };
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", opts, arrParam);
      if (rtnList) {
        // 본선관리번호팝업의 리턴값에서 오더종류별로 필요한 값 세팅
        scwin.f_setCvsslMgntNoByOdrKndCd(rtnList, gubun2);
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            scwin.f_setOdrEtc(rtnList[0], gubun2);
          }
        }
      }
      break;
    case 5:
      // 출발/도착 작업장 조회 - 코드/명 가져오기
      if (gubun2 == "DPT") {
        // 출발작업장
        pCode = ed_dptWrkPlCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_dptWrkPlCd.setValue(pCode);
        }
        pWtitleSearch = "출발작업장,작업장코드,작업장명";
        pSelectID = "retrieveWrkPlInfo_tpro";
        pWhere = ",,,12,,,1";
        udc_dptWrkPlCd.setSelectId(pSelectID);
        udc_dptWrkPlCd.cfCommonPopUp(scwin.callBackDptWrkPlCd, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      } else if (gubun2 == "ARV") {
        // 도착작업장
        pCode = ed_arvWrkPlCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_arvWrkPlCd.setValue(pCode);
        }
        pWtitleSearch = "도착작업장,작업장코드,작업장명";
        pSelectID = "retrieveWrkPlInfo_tpro";
        pWhere = ",,,12,,,1";
        udc_arvWrkPlCd.setSelectId(pSelectID);
        udc_arvWrkPlCd.cfCommonPopUp(scwin.callBackArvWrkPlCd, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      }
      break;
    case 8:
      // 선박조회
      if (gubun2 == "") {
        //본선의 선박코드
        pCode = ed_vsslCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_vsslCd.setValue(pCode);
          ed_vsslNm.setValue("");
        }
        pWtitleSearch = "선박, 코드, 코드명";
        udc_vsslCd.cfCommonPopUp(scwin.callBackVsslCd, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      } else if (gubun2 == "TS") {
        // TS본선의 선박코드
        pCode = ed_tsVsslCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_tsVsslCd.setValue(pCode);
          ed_tsVsslNm.setValue("");
          ed_tsVsslCd.hidVal = pCode;
        }
        pWtitleSearch = "TS선박, 코드, 코드명";
        udc_vsslCd.cfCommonPopUp(scwin.callBackVsslCdTs, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      }
      break;
    case 10:
      //우편번호조회
      if (gubun2 == "DPT_ZIP") {
        //상차지
        pCode = ed_dptZip.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_dptZip.setValue(pCode);
        }
        pWtitleSearch = "상차지우편번호,우편번호,동이름";
        pSelectID = "retrieveZipList_tpro";
        udc_dptZip.cfCommonPopUp(scwin.callBackDptZip, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      } else if (gubun2 == "ARV_ZIP") {
        // 하차지
        pCode = ed_arvZip.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_arvZip.setValue(pCode);
        }
        pWtitleSearch = "작업지우편번호,우편번호,동이름";
        pSelectID = "retrieveZipList_tpro";
        udc_arvZip.cfCommonPopUp(scwin.callBackArvZip, pCode, pCode, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
      }
      break;
    case 11:
      // 배차담당1
      pCode = ed_alloccarPicId.getValue().trim();
      if (pNoDataCloseTF == "T") {
        ed_alloccarPicId.setValue(pCode);
        ed_alloccarPicNm.setValue("");
      }
      udc_alloccarPicId.cfCommonPopUp(scwin.callBackAlloccarPicId, pCode, '', pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, "등록자,사용자ID,사용자명", pNoDataCloseTF, null);
      break;
    default:
      break;
  }
};

// 공통팝업 열기 전에 체크 - EMEDIT onKillFocus 이벤트 발생시
// param설명 : nmObj-코드명(text), cdObj-코드(emedit), gubun1, gubun2
scwin.f_beforeOpenCommonPopUpEd = function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();
  if (!$c.gus.cfCanOpenPopup($p, cdObj, nmObj)) return;
  if (cdObjVal == "") {
    nmObj.value = "";
    if (gubun1 == 3) {
      // Line조회
      ed_shpCoClntNm.setValue("");
    } else if (gubun1 == 1) {
      // 거래처조회
      if (ds_ctrtNo.getRowCount() > 0) ds_ctrtNo.removeAll();
      if (ds_reqClntNo.getRowCount() > 0) ds_reqClntNo.removeAll();
      if (ds_bilgClntNo.getRowCount() > 0) ds_bilgClntNo.removeAll();
      $c.gus.cfInitObjects($p, [ed_ctrtClntNo, ed_ctrtClntNm, ed_reqClntNo, ed_bilgClntNo]);
      $c.gus.cfInitHidVal($p, [ed_ctrtClntNo, ed_ctrtClntNm, ed_reqClntNo, ed_bilgClntNo]);
    }
  } else {
    nmObj.setValue("");
    scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
  }
};

// 공통팝업 열기 전에 체크
// param설명 : nmLcObj-코드명콤보(LuxCombo), noEdObj-코드(emedit), gubun1, gubun2
scwin.f_beforeOpenCommonPopUpEdByLc = async function (nmLcObj, noEdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  var noObjVal = noEdObj.getValue().trim();
  if (noObjVal.length > 0) {
    if (noObjVal == "") {
      nmLcObj.setValue("");
    } else {
      nmLcObj.setValue("");
      scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
    }
  }
};

// 계약거래처에 해당 되는 컨테이너 계약번호 리스트 조회
scwin.f_retrieveCtrtNo = async function () {
  if (ds_cndCtrtNo.getRowCount() > 0) ds_cndCtrtNo.removeAll();

  // 검색조건값 세팅
  let rowIndex = ds_cndCtrtNo.insertRow();
  ds_cndCtrtNo.setCellData(rowIndex, "ctrtClntNo", ed_ctrtClntNo.getValue().trim()); // 계약거래처
  ds_cndCtrtNo.setCellData(rowIndex, "bizDivCntrYn", "1"); // 사업부문컨테이너여부
  ds_cndCtrtNo.setCellData(rowIndex, "bizDivBulkYn", ""); // 사업부문벌크여부
  ds_cndCtrtNo.setCellData(rowIndex, "odrKndCd", scwin.odrKndCd); // 사업부문벌크여부
  ds_cndCtrtNo.setCellData(rowIndex, "impExpDomesticClsCd", scwin.impExpClsCd); // 수출입내수구분코드

  // 조회해서 가지고온 계약번호가 존재할 경우 계약번호를 세팅  (17/06/07 추가, 서동원)
  if (ds_odrInfo.getCellData(0, "ctrtNo") != null) {
    ds_cndCtrtNo.setCellData(0, "ctrtNo", ds_odrInfo.getCellData(0, "ctrtNo"));
  }

  // 조회
  let e = await $c.sbm.execute($p, sbm_retrieveCtrtNo);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieveCtrtNo_submitdone(e);
  }
};
scwin.f_retrieveCtrtNo2 = async function () {
  if (ds_cndCtrtNo.getRowCount() > 0) ds_cndCtrtNo.removeAll();

  // 검색조건값 세팅
  let rowIndex = ds_cndCtrtNo.insertRow();
  ds_cndCtrtNo.setCellData(rowIndex, "ctrtClntNo", ed_bilgClntNo.getValue()); // 계약거래처
  ds_cndCtrtNo.setCellData(rowIndex, "bizDivCntrYn", "1"); // 사업부문컨테이너여부
  ds_cndCtrtNo.setCellData(rowIndex, "bizDivBulkYn", ""); // 사업부문벌크여부
  ds_cndCtrtNo.setCellData(rowIndex, "odrKndCd", scwin.odrKndCd); // 사업부문벌크여부
  ds_cndCtrtNo.setCellData(rowIndex, "impExpDomesticClsCd", scwin.impExpClsCd); // 수출입내수구분코드

  // 조회
  let e = await $c.sbm.execute($p, sbm_retrieveCtrtNo2);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieveCtrtNo2_submitdone(e);
  }
};

// 계약번호와 관련한 DataSet초기화
scwin.f_clearDataByCtrtNo = function () {
  ds_ctrtNo.removeAll();
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_bilgClntNo]);
  $c.gus.cfInitHidVal($p, [ed_reqClntNo, ed_bilgClntNo]);
};

// 계약번호에 해당 되는 청구/요청거래처 정보 조회
scwin.f_retrieveClntList = async function () {
  var ctrtNo = lc_ctrtNo.getValue();
  if (ctrtNo == "선택") {
    // 청구 / 요청거래처 정보 clear
    scwin.f_clearDataByClntNos();
  } else {
    $c.sbm.setAction($p, sbm_retrieveClntNo, "/ncall.ds.sd.odrmgnt.odrreg.RetrieveContractBasisCMD.do?contractNumber=" + ctrtNo);
    let e = await $c.sbm.execute($p, sbm_retrieveClntNo);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_retrieveClntNo_submitdone(e);
    }
  }
};

// 청구 / 요청거래처 / 실화주거래처 정보 clear
scwin.f_clearDataByClntNos = function () {
  ds_reqClntNo.removeAll();
  ds_bilgClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_bilgClntNo]);
  $c.gus.cfInitHidVal($p, [ed_reqClntNo, ed_bilgClntNo]);
};

// 오더별 화면 세팅
scwin.f_setInterfaceByOdr = function () {
  if (ds_odrInfo.getCellData(0, "odrNo").trim() == "" && ds_odrInfo.getRowCount() > 0) {
    scwin.f_set("INIT", "ODRKNDCD"); // 초기화	ODRKNDCD
  }
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
    // 부두간TS셔틀컨테이너인 경우 (CT) 	
    // 오더종류 바뀌면 CT, CS, CW 는 세팅해줘야함
    chk_ctTranshipYn.setValue("1");
    tr_tsCvsslMgntNo.show("table-row");
    lay_odrCtrlClsCd.show("table-row");
    div_transhipYn.hide();
  } else {
    tr_tsCvsslMgntNo.hide();
    lay_odrCtrlClsCd.hide();
    chk_ctTranshipYn.setValue("0");
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
      // 부두간TS셔틀컨테이너인 경우 (CS)
      chk_csTranshipYn.setValue("1");
      div_transhipYn.show("table-row");
    } else {
      div_transhipYn.hide();
      chk_csTranshipYn.setValue("0");
    }
  }
};

// 매출부서, 청구부서 세팅
scwin.f_setSellAndBilgDept = function () {
  var deptCd1 = scwin.lobranCd; // 등록점소 - 사용자 설정 물류점소
  var orgdeptCd1 = deptCd1;
  var deptCd2 = ""; // 오더종류에 따른 셋째자리 결정
  var deptCd = ""; // 부서코드

  if (deptCd1.length > 2) {
    deptCd1 = deptCd1.substr(0, 2);
  } else {
    return;
  }
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR) {
    // 수입본선컨테이너오더    
    deptCd2 = "3";
    deptCd = deptCd1 + deptCd2;
  } else {
    deptCd2 = "2";
    deptCd = deptCd1 + deptCd2;

    // 매출부서 세팅
    ed_sellLodeptCd.setValue(deptCd);
    scwin.f_openCommonPopUp(2, 'SELL', 'T', 'F', 'F');
  }

  // 청구부서 세팅 - 부산은 6A3셋팅함.
  if (orgdeptCd1 == "6AA") {
    if (deptCd2 == "4") {
      ed_bilgLodeptCd.setValue(deptCd);
    } else {
      ed_bilgLodeptCd.setValue("6A1");
    }
  } else {
    ed_bilgLodeptCd.setValue(deptCd);
  }
  scwin.f_openCommonPopUp(2, 'BILG', 'T', 'F', 'F');
};

// 컨테이너 오더 계약 조회
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_cndArea]);
  if (ret) {
    scwin.retrieveYn = "Y";
    var set_odrNo = ed_odrNo.getValue().trim();
    scwin.f_clearDataSet();
    scwin.mgntTrgtClntYn = 0;
    if (ds_cndOdrNo.getTotalRow() > 0) ds_cndOdrNo.removeAll();
    ds_cndOdrNo.insertRow();
    ds_cndOdrNo.setCellData(0, "odrNo", set_odrNo);
    ed_odrNo.setValue(set_odrNo);
    let e = await $c.sbm.execute($p, sbm_retrieve);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_retrieve_submitdone(e);
    }
    scwin.hid_chkMode.value = "";
  }
};
scwin.f_setCvsslMgntNoByOdrKndCd = function (rtnList, gubun) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      if (gubun == "") {
        if (rtnList[5] == "" || rtnList[6] == "") {
          $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["본선스케줄에서 입항일시"]); //@을(를) 입력하십시오.
          return;
        }
        ed_cvsslMgntNo.setValue(rtnList[0]);
        if (rtnList[1] != "" && rtnList[2] != "") {
          ed_vsslCd.setValue(rtnList[1]); // 선박코드
          ed_vsslNm.setValue(rtnList[2]); // 선박명
        }
        ed_portcnt.setValue(rtnList[9]); // 선사항차
        ds_odrInfo.setCellData(0, "portCd", rtnList[11]); // 항구코드
        scwin.hid_adptExchRtDt = rtnList[5]; // 입항일자

        // 수입본선, 수입하역 : 부두코드를 출발지로 세팅, 도착(입항)일시,출발(출항)일시 세팅
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR // 수입본선
        || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR // 수입하역
        ) {
          ed_dptWrkPlCd.setValue(rtnList[12]); // 부두코드
          ed_dptWrkPlNm.setValue(rtnList[13]); // 부두코드명
          ed_wrkStDt.setValue(rtnList[5]); // 도착(입항)일자
          ed_wrkStHh.setValue(rtnList[6]); // 도착(입항)시간
          ed_wrkEndDt.setValue(rtnList[7]); // 출발(출항)일자
          ed_wrkEndHh.setValue(rtnList[8]); // 출발(출항)시간
          scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'F');

          // 부두간TS : 부두코드를 출발지로 세팅, 도착(입항)일시,출발(마감일시)일시 세팅
        } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
          // 부두간TS
          ed_dptWrkPlCd.setValue(rtnList[12]); // 부두코드
          ed_dptWrkPlNm.setValue(rtnList[13]); // 부두코드명
          ed_wrkStDt.setValue(rtnList[5]); // 도착(입항)일자
          ed_wrkStHh.setValue(rtnList[6]); // 도착(입항)시간
          scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'F');

          // 하선지 TS인 경우 confirmMsg로 확인한 후, 값 세팅
          // case1: 부두코드 --> 하선지(CY) ==> 부두코드를 출발지로 세팅
          // case2: 하선지(CY) --> 부두코드 ==> 부두코드를 도착지로 세팅
        } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
          // 하선지 TS(부두-->CY)
          ed_dptWrkPlCd.setValue(rtnList[12]); // 부두코드
          ed_dptWrkPlNm.setValue(rtnList[13]); // 부두코드명
          scwin.f_openCommonPopUp(5, 'DPT', 'T', 'F', 'F');

          // 하선지 TS인 경우 confirmMsg로 확인한 후, 값 세팅
          // case1: 부두코드 --> 하선지(CY) ==> 부두코드를 출발지로 세팅
          // case2: 하선지(CY) --> 부두코드 ==> 부두코드를 도착지로 세팅
        } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_EXP_TS_ODR) {
          // 하선지 TS(CY-->부두)
          ed_arvWrkPlCd.setValue(rtnList[12]); //부두코드
          ed_arvWrkPlNm.setValue(rtnList[13]); //부두코드명   
          scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'F');
        }
        // 본선관리번호에 해당하는 BL정보, 품명정보, 컨테이너정보 가져오기
        // 수입본선, 부두간TS, 하선지TS(부두코드 --> 하선지(CY))인 경우, 하선장소를 도착지로 세팅
        scwin.f_retrieveManifestBLContainerList();
      } else if (gubun == "TS") {
        ed_tsCvsslMgntNo.setValue(rtnList[0]);
        ed_tsVsslCd.setValue(rtnList[1]); // 선박코드
        ed_tsVsslNm.setValue(rtnList[2]); // 선박명
        ed_tsPortcnt.setValue(rtnList[9]); // 선사항차
        ds_odrInfo.setCellData(0, "tsPortCd", rtnList[11]); // 항구코드    

        // 부두코드를 도착지로 세팅
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
          // 부두간TS
          ed_arvWrkPlCd.setValue(rtnList[12]); // 부두코드
          ed_arvWrkPlNm.setValue(rtnList[13]); // 부두코드명
          ed_wrkEndDt.setValue(rtnList[3]); // 도착(마감일자)일자
          ed_wrkEndHh.setValue(rtnList[4]); // 도착(마감시간)시간 
          scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', ' F');

          // 본선관리번호에 해당하는 BL정보, 품명정보, 컨테이너정보 가져오기
          // 수입본선, 부두간TS, 하선지TS(부두코드 --> 하선지(CY))인 경우, 하선장소를 도착지로 세팅
          if (scwin.odrCtrlClsCd == "1") {
            scwin.f_retrieveManifestBLContainerList();
          }

          // TS본번 변경 시 컨테이너 목록 TO 변경 20211109 박철홍과장
          for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
            ds_cntrInfo.setCellData(i, "arvWrkPlCd", rtnList[12]);
          }
        }
      }
    }
  } else {
    // rtnList값이 null인 경우
    if (gubun == "") {
      scwin.f_clearDataByCvsslMgntNo(); // 본선관리번호와 관련한 데이터셋 Clear
    } else if (gubun == "TS") {
      scwin.f_clearDataByTsCvsslMgntNo(); // TS본선관리번호와 관련한 데이터셋 Clear    
    }
  }
};

// 본선관리번호와 관련한 DataSet초기화(수입본선인 경우)
scwin.f_clearDataByCvsslMgntNo = function () {
  $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_wrkStDt, txt_rmk, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ed_portcnt, ed_vsslNm, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_dptZip, ed_dptDtl, ed_onPicNm, ed_onPicTelNo, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvZip, ed_arvDtl, ed_offPicNm, ed_offPicTelNo]);
  $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
  ds_odrInfo.setCellData(0, "portCd", ""); // 항구코드   

  ed_wrkStDt.setValue(scwin.strCurDate);
  ed_wrkEndDt.setValue(scwin.strCurDate);
  if (ds_cntrInfo.getRowCount() > 0) ds_cntrInfo.removeAll(); // 오더컨테이너목록

  cntrTotalRows.setValue(0);
};

// TS본선관리번호와 관련한 DataSet초기화(TS셔틀인 경우)
scwin.f_clearDataByTsCvsslMgntNo = function () {
  $c.gus.cfInitObjects($p, [ed_tsCvsslMgntNo, ed_tsVsslCd, ed_tsVsslNm, ed_tsPortcnt]);
  $c.gus.cfInitHidVal($p, [ed_tsCvsslMgntNo]);
  ds_odrInfo.setCellData(0, "tsPortCd", ""); // 항구코드 

  // 부두간TS인 경우, 도착지값 삭제
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
    $c.gus.cfInitObjects($p, [ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvDtl]);
    $c.gus.cfInitHidVal($p, [ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvDtl]);
  }
};

// 본선번호(TS본번)으로 오더 특이사항 세팅(gubun - 없음: 수입/수출오더, TS: 부두간TS)
scwin.f_setOdrEtc = function (cvsslMgntNo, gubun) {
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
    $c.sbm.execute($p, sbm_comSearchSys, dma_comSearchSys.getJSON()).then(function (e) {
      if (e.responseJSON.resultDataSet[0].Code < 0) return;
      ds_odrEtc.setJSON(e.responseJSON.GAUCE);
      if (!$c.gus.cfIsNull($p, ds_odrEtc.getCellData(0, "col1"))) {
        scwin.findString = ds_odrEtc.getCellData(0, "col1");
        if (gubun == "TS") {
          txt_rmk.setValue(txt_rmk.getValue() + ds_odrEtc.getCellData(0, "col1"));
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

// 본선관리번호에 해당하는 BL목록, 품명목록, 컨테이너목록 조회
// 수입본선,수입하역,부두간TS,하선지경유TS오더인 경우
scwin.f_retrieveManifestBLContainerList = async function () {
  // 수입본선컨테이너 또는 수입하역컨테이너인 경우
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR // 수입본선
  || scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR // 부두간TS
  || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR // 하선지경유TS(부두-->CY)
  ) {
    // 라인코드 체크
    if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); // @을(를) 입력하십시오
      scwin.f_clearDataByCvsslMgntNo(); // 본선관리번호와 관련한 데이터셋 Clear
      return;
    }

    // 부두간TS인 경우, 도착지 체크
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
      // 부두간TS
      //본선관리번호 입력 여부 체크
      if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue().trim())) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["본선관리번호"]); // @을(를) 입력하십시오
        scwin.f_clearDataByCvsslMgntNo(); // 본선관리번호와 관련한 데이터셋 Clear
        return;
      }
      // TS본선관리번호 입력 여부 체크 
      if ($c.gus.cfIsNull($p, ed_tsCvsslMgntNo.getValue().trim())) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["TS본선관리번호"]); //@ 을(를) 입력하십시오
        return;
      }
      // 도착지 입력 여부 체크 
      if ($c.gus.cfIsNull($p, ed_arvWrkPlCd.getValue().trim())) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["도착지"]); // @을(를) 입력하십시오
        return;
      }
    }
    scwin.retrieveYn = "Y";

    // 검색조건 데이터셋 세팅
    if (ds_cndCvsslMgntNo.getRowCount() > 0) ds_cndCvsslMgntNo.removeAll();
    var rowIndex = ds_cndCvsslMgntNo.insertRow();
    ds_cndCvsslMgntNo.setCellData(rowIndex, "odrKndCd", scwin.odrKndCd); // 오더종류 : 수입본선, 수입하역  구분하기 위함
    ds_cndCvsslMgntNo.setCellData(rowIndex, "cvsslMgntNo", ed_cvsslMgntNo.getValue().trim());
    ds_cndCvsslMgntNo.setCellData(rowIndex, "impExpClsCd", scwin.impExpClsCd);
    ds_cndCvsslMgntNo.setCellData(rowIndex, "mcomLineCd", ed_lineCd.getValue().trim());
    ds_cndCvsslMgntNo.setCellData(rowIndex, "arvWrkPlCd", "");

    // ts여부 세팅
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR // 부두간TS
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR // 하선지경유TS(부두-->CY)
    ) {
      ds_cndCvsslMgntNo.setCellData(rowIndex, "tsYn", "1");

      // 검색조건 데이터셋에 도착지 세팅
      if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
        // 부두간TS  
        ds_cndCvsslMgntNo.setCellData(rowIndex, "arvWrkPlCd", ed_arvWrkPlCd.getValue().trim());
      }
    } else {
      ds_cndCvsslMgntNo.setCellData(rowIndex, "tsYn", "0");
    }
    let e = await $c.sbm.execute($p, sbm_retrieveManifestBLContainerList);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_retrieveManifestBLContainerList_submitdone(e);
    }
  }
};

// 새우편번호조회(gubun - 1: 상차지, 2: 작업)
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
  } else {
    if (gubun == 1) {
      ed_dptZip.setValue("");
      ed_dptDtl.setValue("");
    } else if (gubun == 2) {
      ed_arvZip.setValue("");
      ed_arvDtl.setValue("");
    }
  }
};

// 컨테이너목록 그리드 실적여부 정보처리
scwin.grdFormatter_wrkRsltsNo = function (wrkRsltsNo) {
  return $c.gus.decode($p, wrkRsltsNo, "", "미생성", "생성");
};

// 그리드 팝업
// 1.컨테이너목록(To(하선지)) : 작업장구분코드가 지역인 경우, 에러메시지 띄우고 ''처리하기
scwin.f_openPopUpGrid = async function (ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var pCode = "";
  var pName = "";
  var pWtitleSearch = null;
  var pWhere = null;
  var pNoDataCloseTF = null;
  var rtnList = new Array();
  pCode = ds.getCellData(row, cdColid);
  if (gubun == 5) {
    //컨테이너목록 - From(출발지)
    pSelectID = "retrieveWrkPlInfo_tpro";
    pWtitleSearch = "작업장,코드,코드명";
    pWhere = "";
    udc_comCode.setSelectId(pSelectID);
    await udc_comCode.cfCommonPopUp(scwin.callBackArvWrk,
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
  } else if (gubun == 3) {
    // 컨테이너목록 - 항구코드
    pSelectID = "retrievePortInfo";
    pWtitleSearch = "항구, 코드, 코드명";
    udc_comCode.setSelectId(pSelectID);
    udc_comCode.cfCommonPopUp(scwin.callBackPort, pCode, pName, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null, null, pAllSearchTF, pWtitleSearch, pNoDataCloseTF, null);
  }
};

// 행추가
scwin.f_addRow = function () {
  let index = ds_cntrInfo.insertRow();
  ds_cntrInfo.setCellData(index, 'cntrSeq', 0);
  gr_cntrInfo.setFocusedCell(index, 0);

  // 그리드 edit={decode(wrkRsltsNo, "","true","false")} 로직 추가
  var isReadOnly = !$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(index, 'wrkRsltsNo'));
  gr_cntrInfo.setCellReadOnly(index, "cntrNo", isReadOnly);
  gr_cntrInfo.setCellReadOnly(index, "wt", isReadOnly);
  gr_cntrInfo.setCellReadOnly(index, "impSealNo", isReadOnly);
  gr_cntrInfo.setCellReadOnly(index, "toCd", isReadOnly);
  gr_cntrInfo.setCellReadOnly(index, "ctrtWrkPathSeq", isReadOnly);
  gr_cntrInfo.setCellReadOnly(index, "cntrWrkClsCd", isReadOnly);
  gr_cntrInfo.setCellReadOnly(index, "rmk", isReadOnly);
};

// 행삭제
scwin.f_deleteRow = async function () {
  var cntrInfoRows = ds_cntrInfo.getRowCount();
  var arrRowNo = new Array();
  var idx = 0;
  var alertStr = "";
  var row = ds_cntrInfo.getRowPosition();
  if (cntrInfoRows > 0) {
    var cntrNo = ds_cntrInfo.getCellData(row, "cntrNo");
    var blNo = ds_cntrInfo.getCellData(row, "blNo");
    var cntrFEcls = ds_cntrInfo.getCellData(row, "fullEmptyClsCd");

    // 실적체크
    if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(row, "wrkRsltsNo"))) {
      $c.gus.cfAlertMsg($p, MSG_SD_WRN_002, ["컨테이너"]); // "실적이 발생한 컨테이너는 삭제할 수 없습니다." 
      return;
    }

    // 2015.04.27 미양하컨테이너 F인경우만 체크 후 삭제처리하고 E인 경우는 그냥 삭제처리
    if (cntrNo != "" && cntrFEcls == "F") {
      // 컨테이너번호를 삭제하는 경우 해당 컨테이너의 BL번호에 속해 있는 모든 컨테이너를 동시에 삭제하도록한다. BL기준 삭제됨
      for (var i = 0; i < cntrInfoRows; i++) {
        if (ds_cntrInfo.getCellData(i, "blNo") == blNo && ds_cntrInfo.getRowStatus(i) != "U") {
          arrRowNo[idx] = i;
          if (idx == 0) {
            alertStr = alertStr + "<br>[컨테이너번호]<br>";
            alertStr = alertStr + ds_cntrInfo.getCellData(i, "cntrNo");
          } else {
            alertStr = alertStr + "," + ds_cntrInfo.getCellData(i, "cntrNo");
          }
          idx = idx + 1;
        }
      }
      if (arrRowNo.length > 0) {
        alertStr = alertStr + "<br><br> BL번호[" + blNo + "]가 같은 " + idx + " 건을 모두 삭제하시겠습니까?";
        if (await $c.win.confirm($p, alertStr)) {
          for (var i = arrRowNo.length - 1; i >= 0; i--) {
            var status = ds_cntrInfo.getRowStatus(arrRowNo[i]);
            if (status == "C" || status == "I") {
              ds_cntrInfo.removeRow(arrRowNo[i]);
            } else {
              ds_cntrInfo.deleteRow(arrRowNo[i]);
              scwin.fn_setRowAllCellReadOnly(gr_cntrInfo, arrRowNo[i], true);
            }
          }
        } else {
          if (await $c.win.confirm($p, "선택하신 컨테이너만 삭제하시겠습니까?")) {
            ds_cntrInfo.deleteRow(row);
            scwin.fn_setRowAllCellReadOnly(gr_cntrInfo, row, true);
          }
        }
      }
    } else {
      var status = ds_cntrInfo.getRowStatus(row);
      if (status == "C" || status == "I") {
        ds_cntrInfo.removeRow(row);
      } else {
        ds_cntrInfo.deleteRow(row);
        scwin.fn_setRowAllCellReadOnly(gr_cntrInfo, row, true);
      }
    }
    cntrTotalRows.setValue(ds_cntrInfo.getRowCount());
  }
};

// 행취소
scwin.f_undoRow = async function () {
  var cntrInfoRows = ds_cntrInfo.getRowCount();
  var row = ds_cntrInfo.getRowPosition();
  var cntrNo = ds_cntrInfo.getCellData(row, "cntrNo");
  var blNo = ds_cntrInfo.getCellData(row, "blNo");
  var arrRowNo = new Array();
  var idx = 0;
  var alertStr = "";
  var status = ds_cntrInfo.getRowStatus(row);
  if (["D"].includes(status)) {
    // 컨테이너번호를 삭제하는 경우 해당 컨테이너의 BL번호에 속해 있는 모든 컨테이너를 동시에 삭제하도록한다. BL기준 삭제됨
    for (var i = 0; i < cntrInfoRows; i++) {
      if (ds_cntrInfo.getCellData(i, "blNo") == blNo && ds_cntrInfo.getRowStatus(i) != "U") {
        arrRowNo[idx] = i;
        if (idx == 0) {
          alertStr = alertStr + "<br>[컨테이너번호]<br>";
          alertStr = alertStr + ds_cntrInfo.getCellData(i, "cntrNo");
        } else {
          alertStr = alertStr + "," + ds_cntrInfo.getCellData(i, "cntrNo");
        }
        idx = idx + 1;
      }
    }
    if (arrRowNo.length > 0) {
      alertStr = alertStr + "<br><br> BL번호[" + blNo + "]가 같은 " + idx + " 건을 모두 취소하시겠습니까?";
      if (await $c.win.confirm($p, alertStr)) {
        for (var i = arrRowNo.length - 1; i >= 0; i--) {
          //ds_cntrInfo.undoRow(arrRowNo[i]);
          var status = ds_cntrInfo.getRowStatus(arrRowNo[i]);
          //(status == "C" || status == "I") ? ds_cntrInfo.removeRow(arrRowNo[i]) : ds_cntrInfo.undoRow(arrRowNo[i]);
          ds_cntrInfo.undoRow(arrRowNo[i]);
          scwin.fn_setRowAllCellReadOnly(gr_cntrInfo, arrRowNo[i], false);
        }
      } else {
        if (await $c.win.confirm($p, "선택하신 컨테이너만 취소하시겠습니까?")) {
          //ds_cntrInfo.undoRow(ds_cntrInfo.getRowPosition()); 
          var status = ds_cntrInfo.getRowStatus(row);
          //(status == "C" || status == "I") ? ds_cntrInfo.removeRow(ds_cntrInfo.getRowPosition()) : ds_cntrInfo.undoRow(ds_cntrInfo.getRowPosition());
          ds_cntrInfo.undoRow(row);
          scwin.fn_setRowAllCellReadOnly(gr_cntrInfo, row, false);
        }
      }
    }
  } else {
    if (["C"].includes(status)) {
      ds_cntrInfo.removeRow(row);
    } else {
      ds_cntrInfo.undoRow(row);
      scwin.fn_setRowAllCellReadOnly(gr_cntrInfo, row, false);
    }
  }
};

// 계약작업경로 콤보 조회
scwin.f_RetrieveCtrtWrkPath = async function (ctrtNo) {
  if (!$c.gus.cfIsNull($p, ctrtNo)) {
    sbm_retrieveCtrtWrkPath.action = "/cm.zz.RetrieveComboCMD.do?sysCd=BulkOrderEBC" + "&queryId=retrieveContractWorkPathComboList" + "&param1=" + ctrtNo + "&param2=" + lc_odrKndCd.getValue();
    let e = await $c.sbm.execute($p, sbm_retrieveCtrtWrkPath);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_retrieveCtrtWrkPath_submitdone(e);
    }
  }
};

// 신규
scwin.f_create = function () {
  scwin.f_set("INIT", "CREATE"); // 신규모드
};

// 수정
scwin.f_update = function () {
  scwin.f_set("UPDATE"); // 수정모드
};

// 저장
scwin.f_save = async function () {
  await $c.gus.cfValidate($p, [gr_cntrInfo]);
  let chkVal;
  // 환적 체크값 세팅
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
    // ct오더
    if (chk_ctTranshipYn.getValue()) {
      ds_odrInfo.setCellData(0, "transhipYn", 1);
    } else {
      ds_odrInfo.setCellData(0, "transhipYn", 0);
    }
  } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
    // cs오더
    if (document.getElementById("chk_csTranshipYn").checked) {
      ds_odrInfo.setCellData(0, "transhipYn", 1);
    } else {
      ds_odrInfo.setCellData(0, "transhipYn", 0);
    }
  } else {
    ds_odrInfo.setCellData(0, "transhipYn", 0);
  }
  if (scwin.statusFlag == "U") {
    // 수정
    if ($c.data.isModified($p, ds_odrInfo) || $c.data.isModified($p, ds_cntrInfo)) {
      if ($c.util.isEmpty($p, lc_ctrtNo.getValue())) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); // @은(는) 필수 입력 항목입니다
        return false;
      }
      chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea, tbl_odrInfoArea2]);
      if (chkVal) {
        if (!scwin.f_validate()) return;
        chkVal = await $c.gus.cfValidate($p, [gr_cntrInfo, ed_odrNo]);
        if (chkVal) {
          if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
            // 저장하시겠습니까?
            scwin.f_setValueBeforeSave(); // 저장하기전 데이터 세팅
            scwin.f_updateByOdrKndCd(); // 오더종류별 저장
          }
        }
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
    }
  } else if (scwin.statusFlag == "C") {
    // 신규
    if ($c.data.isModified($p, ds_odrInfo)) {
      if (lc_ctrtNo.getValue() == "선택") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); // @은(는) 필수 입력 항목입니다
        return false;
      }
      chkVal = await $c.gus.cfValidate($p, [tbl_odrInfoArea, tbl_odrInfoArea2]);
      if (chkVal) {
        chkVal = await $c.gus.cfValidate($p, [gr_cntrInfo]);
        if (chkVal) {
          if (!scwin.f_validate()) return;
          if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
            // 저장하시겠습니까?
            // 오더확정구분을 0으로 변경
            scwin.f_setValueBeforeSave(); // 저장하기전 데이터 세팅
            scwin.f_registByOdrKndCd(); // 오더종류별 저장
          }
        }
      }
    } else {
      if ($c.data.isModified($p, ds_cntrInfo)) {
        if ($c.gus.cfValidate($p, [tbl_odrInfoArea])) return;
      } else {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
      }
    }
  }
};

// 삭제
scwin.f_delete = async function () {
  let msg = $c.data.getMessage($p, MSG_CM_CRM_008, new Array(ds_odrInfo.getCellData(0, "odrNo").trim()));
  let conf = await $c.win.confirm($p, "오더번호 : " + msg);
  if (conf) {
    if (ds_deleteOrderCond.getRowCount() > 0) {
      ds_deleteOrderCond.removeAll();
    }
    var delIndex = ds_deleteOrderCond.insertRow();
    ds_deleteOrderCond.setCellData(delIndex, "odrNo", ds_odrInfo.getCellData(0, "odrNo").trim());
    ds_deleteOrderCond.setCellData(delIndex, "odrKndCd", scwin.odrKndCd);
    ds_deleteOrderCond.setCellData(delIndex, "impExpDomesticClsCd", scwin.impExpClsCd);
    let e = await $c.sbm.execute($p, sbm_deleteOrderCond);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_deleteOrderCond_submitdone(e);
    }
  }
};

// 오더확정 
scwin.f_confirmOrder = async function () {
  const msg = $c.data.getMessage($p, MSG_CM_CRM_010, ["오더확정"]);

  // 작업경로가 지정된 경우만 오더확정 가능 
  if (await $c.win.confirm($p, msg)) {
    if (ds_odrInfo.getRowCount() > 0 && ds_cntrInfo.getRowCount() > 0) {
      ds_odrInfo.setCellData(0, "odrDcsnYn", 1);
      let e = await $c.sbm.execute($p, sbm_update);
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        scwin.sbm_update_submitdone(e);
      }
    }
  }
};

// 할인할증 화면으로 이동
scwin.f_dc = async function () {
  var paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  let options = {
    "openAction": "exist"
  };
  $c.win.openMenu($p, "할인할증", "/ui/tn/ds/sd/odrreg/sd_402_01_25b.xml", "sd_402_01_25b.jsp", paramObj, options);
};

// 컨테이너상세 화면으로 이동
scwin.f_openPopUpUpdateCntrInfo = async function () {
  let paramObj = {
    "odrNo": ds_odrInfo.getCellData(0, "odrNo")
  };
  let options = {
    "openAction": "exist"
  };
  $c.win.openMenu($p, "컨테이너 상세", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_11b.xml", "tn_201_02_11b.jsp", paramObj, options);
};

// 작업경로 화면으로 이동
scwin.f_chgWrkPath = async function () {
  let paramObj = {
    odrNo: ds_odrInfo.getCellData(0, "odrNo")
  };
  let options = {
    "openAction": "exist"
  };
  $c.win.openMenu($p, "작업경로", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_08b.xml", "tn_201_02_08b.jsp", paramObj, options);
};

// 등록현황 화면으로 이동
scwin.f_odrRegIfno = async function () {
  let paramObj = {};
  let options = {
    "openAction": "exist"
  };
  $c.win.openMenu($p, "오더등록현황", "/ui/tn/sd/odrmgnt/odrregprscond/tn_203_01_02b.xml", "tn_203_01_02b.jsp", paramObj, options);
};

// 복사시 화면설정
scwin.set_copy = async function () {
  ed_odrNo.setValue("");
  ed_wrkStHh.setValue("");
  ed_wrkEndHh.setValue("");
  ed_cvsslMgntNo.setValue("");
  ds_cntrInfo.removeAll();
  scwin.f_setDefaultValue();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableAllBtn($p);
  $c.gus.cfEnableObjects($p, [tbl_cndArea, tbl_odrInfoArea, tbl_odrInfoArea2, btn_save, btn_addRow, btn_deleteRow, btn_undoRow]);
  $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_confirmOdr, btn_updateCntrInfo, btn_dc, btn_chgWrkPath, btn_odrCopy]);
  $c.gus.cfDisableObjects($p, [ed_ctrtClntNm, ed_sellLodeptNm, ed_bilgLodeptNm, ed_dptWrkPlNm, ed_arvWrkPlNm, ed_lineNm, ed_vsslNm, ed_tsVsslNm, ed_alloccarPicNm]);
  scwin.f_setActiveGrid("D");
  //gr_cntrInfo.setReadOnly("grid", false);
};

// 실적 발생여부를 확인
scwin.f_chkResultsConfirmation = function (gubun) {
  var totalRows = ds_cntrInfo.getRowCount();
  if (gubun == "CNTR_ROW") {
    if (totalRows > 0) {
      if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(ds_cntrInfo.getRowPosition(), "wrkRsltsNo"))) return true; // 실적이 존재하는 경우
    }
  } else {
    if (totalRows > 0) {
      for (var i = 0; i < totalRows; i++) {
        if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) return true; // 실적이 존재하는 경우
      }
    }
  }
  return false; // 실적이 존재하지 않는 경우
};

// CT - 비적하 오더 화면 세팅 
scwin.f_setInterfaceByCtOdr = function (odrCtrlClsCd) {
  if (odrCtrlClsCd == "C1") {
    gr_cntrInfo.setColumnVisible("portCd", false);
    gr_cntrInfo.setColumnVisible("blNo", false);
    gr_cntrInfo.setColumnVisible("impDangerCd", false);
    gr_cntrInfo.setColumnVisible("temper", false);
    gr_cntrInfo.setColumnVisible("unno", false);
    gr_tmp.setColumnVisible("portCd", false);
    gr_tmp.setColumnVisible("blNo", false);
    gr_tmp.setColumnVisible("impDangerCd", false);
    gr_tmp.setColumnVisible("temper", false);
    gr_tmp.setColumnVisible("unno", false);

    //   udc_topGrdBtn.setDisabledBtn("btn_excelUp", true);
  } else {
    gr_cntrInfo.setColumnVisible("portCd", true);
    gr_cntrInfo.setColumnVisible("blNo", true);
    gr_cntrInfo.setColumnVisible("impDangerCd", true);
    gr_cntrInfo.setColumnVisible("temper", true);
    gr_cntrInfo.setColumnVisible("unno", true);
    gr_tmp.setColumnVisible("portCd", true);
    gr_tmp.setColumnVisible("blNo", true);
    gr_tmp.setColumnVisible("impDangerCd", true);
    gr_tmp.setColumnVisible("temper", true);
    gr_tmp.setColumnVisible("unno", true);

    //    udc_topGrdBtn.setDisabledBtn("btn_excelUp", false);
  }
};

// 컨테이너 작업경로 입력 확인 
scwin.f_setWrkPath = function () {
  var cntrRows = ds_cntrInfo.getRowCount();
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

// 유효성체크
scwin.f_validate = function () {
  // 오더기본정보-상,하차 일,시간체크
  if (!scwin.f_chkDate(ed_wrkStDt.getValue(), ed_wrkEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차일자", "하차일자 이전"]); //"@은(는) @이어야 합니다."        
    ed_wrkStDt.focus();
    return false;
  }
  if (!scwin.f_chkTime(ed_wrkStDt.getValue(), ed_wrkStHh.getValue(), ed_wrkEndDt.getValue(), ed_wrkEndHh.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["상차시간", "하차시간 이전"]); //"@은(는) @이어야 합니다."        
    ed_wrkStDt.focus();
    return false;
  }
  // 컨테이너목록이 한건도 입력되지 않은 경우
  if (ds_cntrInfo.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["컨테이너목록"]); // @은(는) 필수 입력 항목입니다
    return false;
  }
  if (scwin.f_chkCntrNo() == false) {
    //컨테이너번호 입력확인
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["컨테이너번호"]); // @은(는) 필수 입력 항목입니다
    return false;
  }
  return true;
};

// 컨테이너 번호 입력 확인 
scwin.f_chkCntrNo = function () {
  var cntrRows = ds_cntrInfo.getRowCount();
  for (var i = 0; i < cntrRows; i++) {
    if (ds_cntrInfo.getCellData(i, "cntrNo") == "") {
      return false;
    }
  }
};

// 오더별로 저장하기전에 데이터셋value들 재세팅
scwin.f_setValueBeforeSave = function () {
  var lineCd = ds_odrInfo.getCellData(0, "lineCd"); // Line코드
  var shpCoClntNo = ds_odrInfo.getCellData(0, "shpCoClntNo"); // 선사거래처코드
  var sellYn = ds_odrInfo.getCellData(0, "sellYn"); // 매출여부

  // 오더기본정보 세팅
  ds_odrInfo.setCellData(0, "crcCd", ds_ctrtNo.getCellData(lc_ctrtNo.getSelectedIndex(), "crcCd")); // 계약번호에 해당하는 통화코드
  ds_odrInfo.setCellData(0, "taxnClsCd", ds_ctrtNo.getCellData(lc_ctrtNo.getSelectedIndex(), "taxnClsCd")); // 관세구분코드
  ds_odrInfo.setCellData(0, "adptExchRtDt", scwin.hid_adptExchRtDt);
  ds_odrInfo.setCellData(0, "realMchtClntNo", ds_odrInfo.getCellData(0, "ctrtClntNo")); // 실화주거래처번호 계약거래처로 셋팅
  ds_odrInfo.setCellData(0, "regBranCd", $c.util.isEmpty($p, scwin.lobranCd) ? "" : scwin.lobranCd); // 등록점소 - 사용자 설정 물류점소     

  // 오더별 특정 모선관리 기능(오더종류 : C1, 라인코드 : SITC, 모선제어 : checked)
  if (lc_odrKndCd.getValue() == 'C1' && lineCd == 'SITC') {
    if (lc_socYn.getValue() == "3") {
      lc_odrCtrlClsCd.setValue("3");
      for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        ds_cntrInfo.setCellData(i, "socYn", 1);
      }
    } else if (lc_socYn.getValue() == "4") {
      lc_odrCtrlClsCd.setValue("4");
      for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        ds_cntrInfo.setCellData(i, "socYn", 0);
      }
    } else if (lc_socYn.getValue() == "5") {
      lc_odrCtrlClsCd.setValue("5");
      for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        ds_cntrInfo.setCellData(i, "socYn", 1);
      }
    } else if (lc_socYn.getValue() == "6") {
      lc_odrCtrlClsCd.setValue("6");
      for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        ds_cntrInfo.setCellData(i, "socYn", 1);
      }
    } else if (lc_socYn.getValue() == "7") {
      lc_odrCtrlClsCd.setValue("7");
      for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        ds_cntrInfo.setCellData(i, "socYn", 1);
      }
    } else {
      lc_odrCtrlClsCd.setValue("");
      for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        ds_cntrInfo.setCellData(i, "socYn", 0);
      }
    }
  }
};

// 오더종류별 등록
scwin.f_registByOdrKndCd = async function () {
  // 저장시 컨테이너목록 RowStatus 변경("CREATE")
  for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
    if (ds_cntrInfo.getRowStatus(i) == "R") {
      ds_cntrInfo.modifyRowStatus(i, "C");
    }
  }
  ;
  let e = await $c.sbm.execute($p, sbm_registByOdrKndCd);
  if (e.responseJSON.resultDataSet[0].Code == -1) {
    await $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
    for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getRowStatus(i) == "C") {
        ds_cntrInfo.modifyRowStatus(i, "R");
      }
    }
    ;
  } else if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_registByOdrKndCd_submitdone(e);
  }
};

// 오더 수정 저장
scwin.f_updateByOdrKndCd = async function () {
  var cntrRows = ds_cntrInfo.getRowCount();
  if (ds_odrInfo.getOriginalCellData(0, "sellLodeptCd") != ds_odrInfo.getCellData(0, "sellLodeptCd") || ds_odrInfo.getOriginalCellData(0, "bilgLodeptCd") != ds_odrInfo.getCellData(0, "bilgLodeptCd") || ds_odrInfo.getOriginalCellData(0, "dptWrkPlCd") != ds_odrInfo.getCellData(0, "dptWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "arvWrkPlCd") != ds_odrInfo.getCellData(0, "arvWrkPlCd") || ds_odrInfo.getOriginalCellData(0, "wrkStDt") != ds_odrInfo.getCellData(0, "wrkStDt") || ds_odrInfo.getOriginalCellData(0, "wrkEndDt") != ds_odrInfo.getCellData(0, "wrkEndDt") || ds_odrInfo.getOriginalCellData(0, "wrkStHh") != ds_odrInfo.getCellData(0, "wrkStHh") || ds_odrInfo.getOriginalCellData(0, "wrkEndHh") != ds_odrInfo.getCellData(0, "wrkEndHh")) {
    for (var i = 0; i < cntrRows; i++) {
      if (ds_cntrInfo.getRowStatus(i) == "R") {
        ds_cntrInfo.setCellData(i, "arvWrkPlNm", "update");
        ds_cntrInfo.modifyRowStatus(i, "U");
      }
    }
  }
  let e = await $c.sbm.execute($p, sbm_updateByOdrKndCd);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_updateByOdrKndCd_submitdone(e);
  }
};

// 시작일자, 종료일자 유효성 체크
scwin.f_chkDate = async function (strDate, endDate) {
  var differDays = $c.date.diffDate($p, strDate, endDate);
  if (differDays >= 0) {
    return true;
  } else {
    return false;
  }
};

// 시작시간, 종료시간 유효성 체크
scwin.f_chkTime = async function (strDate, strTime, endDate, endTime) {
  var differTime = Number(endDate + endTime.replaceAll(":", "")) - Number(strDate + strTime.replaceAll(":", ""));
  if (differTime >= 0) {
    return true;
  } else {
    return false;
  }
};

// 컨테이너번호 유효성 체크
scwin.f_checkCntrNo = function (parCntrNo) {
  var cntrNo = parCntrNo.trim();
  if (cntrNo != "") {
    if (!dscommon.cf_CheckCntrNo(cntrNo)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); // 유효한 @가 아닙니다
    }
  }
};

// 엑셀 파일 업로드
scwin.f_upload = async function () {
  if (scwin.odrKndCd != "CT" || ds_odrInfo.getCellData(0, "odrCtrlClsCd") != "2") {
    $c.gus.cfAlertMsg($p, "CT오더 비적하건만 업로드 가능합니다.");
    return;
  }
  ds_up_cntr.removeAll();
  ds_tmp_cntr.removeAll();
  ds_cntrInfo.removeAll();
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
  udc_topGrdBtn.uploadGridViewExcel(gr_tmp, options);
};
scwin.gr_tmp_onfilereadend = function (value) {
  scwin.f_import();
};
scwin.f_import = function () {
  scwin.excelUploadYn = 1;

  // 박태홍 과장 요청 컨테이너 오더(C3)등록시 반송선적분 체크 위해 변수 초기화
  var returnCrryoutList = "";

  // EXCEL 로 UPLOAD 된 컨테이너 정보를 설정
  for (var i_cntr = 0; i_cntr < ds_tmp_cntr.getRowCount(); i_cntr++) {
    var colid = "cntrNo";
    //	var row = ds_cntrInfo.getRowPosition();
    var row = 0;

    // 컨테이너 정보 설정 - 칸테이너 번호가 존재하는 경우 행추가 / 아닌경우 컨테이너 번호 대체
    if (row == 0 || ds_cntrInfo.getCellData(row, "cntrNo") != "") {
      row = ds_cntrInfo.insertRow();
    }
    ds_cntrInfo.setCellData(row, "odrNo", ds_odrInfo.getCellData(0, "odrNo"));
    ds_cntrInfo.setCellData(row, colid, ds_tmp_cntr.getCellData(i_cntr, colid));

    // 컨테이너번호 유효성체크
    scwin.f_checkCntrNo(ds_cntrInfo.getCellData(row, colid));
    for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "cntrNo") == ds_cntrInfo.getCellData(row, colid)) {
        if (row != i && ds_cntrInfo.getRowStatus(i) != 'D') {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["컨테이너목록", i, "컨테이너번호"]); // @의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
          ds_cntrInfo.setCellData(row, "cntrNo", "");
          return;
        }
      }
    }
    ds_cntrInfo.setCellData(row, "cntrSizCd", ds_tmp_cntr.getCellData(i_cntr, "cntrSizCd"));
    ds_cntrInfo.setCellData(row, "cntrTypCd", ds_tmp_cntr.getCellData(i_cntr, "cntrTypCd"));
    ds_cntrInfo.setCellData(row, "fullEmptyClsCd", ds_tmp_cntr.getCellData(i_cntr, "fullEmptyClsCd"));

    //scwin.f_retrieveCntrBasisInfo(ds_cntrInfo.getCellData(row, colid));

    ds_cntrInfo.setCellData(row, "wt", Number(ds_tmp_cntr.getCellData(i_cntr, "wt").replace(",", "")));
    ds_cntrInfo.setCellData(row, "impSealNo", ds_tmp_cntr.getCellData(i_cntr, "impSealNo"));
    ds_cntrInfo.setCellData(row, "portCd", ds_tmp_cntr.getCellData(i_cntr, "portCd"));
    ds_cntrInfo.setCellData(row, "blNo", ds_tmp_cntr.getCellData(i_cntr, "blNo"));
    ds_cntrInfo.setCellData(row, "temper", ds_tmp_cntr.getCellData(i_cntr, "temper"));
    ds_cntrInfo.setCellData(row, "impDangerCd", ds_tmp_cntr.getCellData(i_cntr, "impDangerCd"));
    ds_cntrInfo.setCellData(row, "unno", ds_tmp_cntr.getCellData(i_cntr, "unno"));
  }

  // 총건수 세팅 
  cntrTotalRows.setValue(ds_cntrInfo.getRowCount());
  scwin.excelUploadYn = 0;
  scwin.cntrLoadGubun = "";
};

// 컨테이너목록 그리드에서 컨테이너번호 입력시 컨테이너 기본정보 조회
// 수입본선,수입하역,부두간TS,하선지경유TS오더인 경우 : 입력한 컨테이너에 해당하는 BL정보와 BL정보에 해당되는 컨테이너 모두 가져옴
scwin.f_retrieveCntrBasisInfo = async function (cntrNo) {
  if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue().trim())) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["본선관리번호"]); //@을(를) 입력하십시오
    ds_cntrInfo.setCellData(ds_cntrInfo.getRowPosition(), "cntrNo", "");
    return;
  }

  // 부두간TS인 경우, 도착지 체크
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
    // 부두간TS
    // 본선관리번호 입력 여부 체크
    if ($c.gus.cfIsNull($p, ed_cvsslMgntNo.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["본선관리번호"]); // @을(를) 입력하십시오
      scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
      return;
    }
    // TS본선관리번호 입력 여부 체크 
    if ($c.gus.cfIsNull($p, ed_tsCvsslMgntNo.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["TS본선관리번호"]); // @을(를) 입력하십시오
      return;
    }
    // 도착지 입력 여부 체크 
    if ($c.gus.cfIsNull($p, ed_arvWrkPlCd.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["도착지"]); // @을(를) 입력하십시오
      return;
    }
  }

  // 검색조건 데이터셋 세팅
  if (ds_cndCvsslMgntNo.getRowCount() > 0) ds_cndCvsslMgntNo.removeAll();
  var rowIndex = ds_cndCvsslMgntNo.insertRow();
  ds_cndCvsslMgntNo.setCellData(rowIndex, "odrKndCd", scwin.odrKndCd);
  ds_cndCvsslMgntNo.setCellData(rowIndex, "cvsslMgntNo", ed_cvsslMgntNo.getValue().trim());
  ds_cndCvsslMgntNo.setCellData(rowIndex, "impExpClsCd", "I");
  ds_cndCvsslMgntNo.setCellData(rowIndex, "mcomLineCd", ed_lineCd.getValue().trim());
  ds_cndCvsslMgntNo.setCellData(rowIndex, "arvWrkPlCd", "");
  ds_cndCvsslMgntNo.setCellData(rowIndex, "cntrNo", cntrNo);

  // ts여부 세팅
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR // 부두간TS
  || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR // 하선지경유TS(부두-->CY)
  ) {
    ds_cndCvsslMgntNo.setCellData(rowIndex, "tsYn", "1");

    // 검색조건 데이터셋에 도착지 세팅
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
      // 부두간TS  
      ds_cndCvsslMgntNo.setCellData(rowIndex, "arvWrkPlCd", ed_arvWrkPlCd.getValue().trim());
    }
  } else {
    ds_cndCvsslMgntNo.setCellData(rowIndex, "tsYn", "0");
  }
  let e = await $c.sbm.execute($p, sbm_retrieveCntrBasisInfo);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieveCntrBasisInfo_submitdone(e);
  }
};

// 그리드에서 팝업오픈하기전 작업(코드와 코드명이 있는 경우)
scwin.f_openPopUpGridBefore = async function (ds, row, cdColid, nmColid, oldData, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  if (ds.getCellData(row, cdColid) != "" && ds.getCellData(row, cdColid) != oldData) {
    ds.setCellData(row, nmColid, "");
    await scwin.f_openPopUpGrid(ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF);
  } else if (ds.getCellData(row, cdColid) == "") {
    ds.setCellData(row, cdColid, "");
    ds.setCellData(row, nmColid, "");
  }
};

/**
 * 특정 행(Row)의 전체 셀 ReadOnly 제어 (해제 시에만 userData1 조건 체크)
 * @param {Object} gridObj - 그리드 객체
 * @param {Number} rowIdx - 대상 행 인덱스
 * @param {Boolean} isReadOnly - true(전체 잠금), false(조건부 해제)
 */
scwin.fn_setRowAllCellReadOnly = function (gridObj, rowIdx, isReadOnly) {
  if (gridObj && rowIdx !== undefined && rowIdx !== -1) {
    // 인자값이 없으면 기본적으로 true(잠금) 처리
    var readOnlyFlag = isReadOnly === false ? false : true;
    var colCount = gridObj.getColumnCount();
    for (var i = 0; i < colCount; i++) {
      if (readOnlyFlag === true) {
        gridObj.setCellReadOnly(rowIdx, i, true);
      } else {
        var cellInfo = gridObj.getCellInfo(i);
        var userData = cellInfo && cellInfo.options ? cellInfo.options.userData1 : "";
        if (userData === "Y" || userData === "N") {
          gridObj.setCellReadOnly(rowIdx, i, true);
        } else {
          gridObj.setCellReadOnly(rowIdx, i, false);
        }
      }
    }
  }
};

// 그리드활성/비활성화
scwin.f_setActiveGrid = function (gubun) {
  if (gubun == "E") {
    // 활성
    //gr_cntrInfo.Editable = true;
    for (var i = 0; i < gr_cntrInfo.getColumnCount(); i++) {
      var colId = gr_cntrInfo.getColumnID(i);
      if (gr_cntrInfo.getCellInfo(colId).options.userData1 == "Y" || gr_cntrInfo.getCellInfo(colId).options.userData1 == "N") {
        gr_cntrInfo.setColumnReadOnly(colId, true);
      } else {
        gr_cntrInfo.setColumnReadOnly(colId, false);
      }
    }
  } else if (gubun == "D") {
    // 비활성
    for (var i = 0; i < gr_cntrInfo.getColumnCount(); i++) {
      var colId = gr_cntrInfo.getColumnID(i);
      gr_cntrInfo.setColumnReadOnly(colId, true);
    }
    //gr_cntrInfo.Editable = false;
  }
};

/**
 * 특정 컬럼들의 ReadOnly 설정 및 userData1 값 변경
 * @param {Array} colIds - 대상 컬럼 ID 배열
 * @param {Boolean} isReadOnly - true(잠금/Y), false(해제/"")
 */
scwin.setColumnStatus = function (colIds, isReadOnly) {
  // 그리드 객체 ID (예: gr_cntrInfo)
  var gridObj = gr_cntrInfo;
  if (!gridObj || !colIds) return;
  for (var i = 0; i < colIds.length; i++) {
    var colId = colIds[i];

    // 1. 실제 그리드 ReadOnly 설정
    gridObj.setColumnReadOnly(colId, isReadOnly);

    // 2. 가우스의 흔적이 남은 userData1 값 세팅
    // getCellInfo를 통해 options 객체에 접근 (WebSquare 표준 방식 호환)
    var cellInfo = gridObj.getCellInfo(colId);
    if (cellInfo && cellInfo.options) {
      cellInfo.options.userData1 = isReadOnly ? "Y" : "";
    }
  }
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 오더번호 초기화 버튼 클릭 이벤트
scwin.btn_clear_onclick = function (e) {
  //$c.gus.cfInitObjects([tbl_cndArea]);
  ed_odrNo.setValue("");
};

// 컨테이너 조회 클릭 이벤트
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 계약처 찾기 버튼 클릭 이벤트 
scwin.udc_ctrtClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'CTRT', 'F', 'F', 'F');
};

// 청구처 찾기 버튼 클릭 이벤트 
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'BILG', 'F', 'F', 'F');
};

// 요청처 찾기 버튼 클릭 이벤트 
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'REQ', 'F', 'F', 'F');
};

// Line 찾기 버튼 클릭 이벤트
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, '', 'F', 'F', 'F');
};

// 매출부서 찾기 버튼 클릭 이벤트
scwin.udc_sellLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, 'BILG', 'F', 'F', 'F', 'F');
};

// 청구부서 찾기 버튼 클릭 이벤트
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, 'BILG', 'F', 'F', 'F', 'F');
};

// 본선번호 버튼 클릭 이벤트
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(4, '', 'F', 'F', 'F', 'F');
};

// TS본번 버튼 클릭 이벤트
scwin.btn_tsCvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(4, 'TS', 'F', 'F', 'F');
};

// 선박명 버튼 클릭 이벤트
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, '', 'F', 'F', 'F', 'F');
};

// Ts선박명 버튼 클릭이벤트
scwin.udc_tsVsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, 'TS', 'F', ' F', 'F');
};

// 상차지 버튼 클릭 이벤트
scwin.udc_dptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'DPT', 'F', 'F', 'F');
};

// 하차지 버튼 클릭 이벤트
scwin.udc_arvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, 'ARV', 'F', 'F', 'F');
};

// 상차지 우편번호 찾기 버튼 클릭 이벤트 
scwin.udc_dptZip_onclickEvent = function (e) {
  scwin.f_openZipPopUpNew(1, 'F');
};

// 하차지 우편번호 찾기 버튼 클릭 이벤트 
scwin.udc_arvZip_onclickEvent = function (e) {
  scwin.f_openZipPopUpNew(2, 'F');
};

// 배차담당 찾기 버튼 클릭 이벤트 
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(11, '', 'F', 'F', 'F', 'F');
};

// 컨테이너 정보 클릭 이벤트
scwin.btn_cntrInfo_onclick = function (e) {
  scwin.f_openPopUpUpdateCntrInfoEtc();
};

// 확정 클릭 이벤트
scwin.btn_confirmOdr_onclick = function (e) {
  scwin.f_confirmOrder();
};

// 할인할증 클릭 이벤트
scwin.btn_dc_onclick = function (e) {
  scwin.f_dc();
};

// 컨테이너 상세 클릭 이벤트
scwin.btn_updateCntrInfo_onclick = function (e) {
  scwin.f_openPopUpUpdateCntrInfo();
};

// 작업경로 클릭 이벤트
scwin.btn_chgWrkPath_onclick = function (e) {
  scwin.f_chgWrkPath();
};

// 등록현황 클릭이벤트
scwin.btn_odrRegIfno_onclick = function (e) {
  scwin.f_odrRegIfno();
};

// 오더복사 클릭이벤트
scwin.btn_odrCopy_onclick = function (e) {
  scwin.set_copy();
};

// 신규 버튼 클릭 이벤트 
scwin.btn_create_onclick = function (e) {
  scwin.f_create();
};

// 수정 버튼 클릭 이벤트 
scwin.btn_update_onclick = function (e) {
  scwin.f_update();
};

// 저장 버튼 클릭 이벤트 
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

// 삭제 버튼 클릭 이벤트 
scwin.btn_delete_onclick = function (e) {
  scwin.f_delete();
};

// 생성 버튼 클릭이벤트
scwin.btnCopy_onclick = function (e) {
  scwin.f_setWrkPath();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 계약처 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_ctrtClntNo_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_ctrtClntNm, ed_ctrtClntNo, 1, 'CTRT', 'T', 'F');
};

// 청구처 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEdByLc(ed_bilgClntNm, ed_bilgClntNo, 1, 'BILG', 'T', 'F');
};

// 요청처 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_reqClntNo_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEdByLc(ed_reqClntNm, ed_reqClntNo, 1, 'REQ', 'T', 'F');
};

// Line Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  if (ed_lineCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
    scwin.f_clearDataByCvsslMgntNo(); // 본선관리번호와 관련한 데이터셋 Clear

    if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR && ds_odrInfo.getCellData(0, "lineCd") == 'SITC') {
      lay_socYn.show();
    } else {
      lay_socYn.hide();
    }
    tr_clntMgntNo.hide();
  } else {
    scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
  }
};

// 매출부서 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_sellLodeptCd_onblurCodeEvent = function (e) {
  if (ed_sellLodeptCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
  } else {
    scwin.f_beforeOpenCommonPopUpEd(ed_sellLodeptNm, ed_sellLodeptCd, 2, 'SELL', 'T', 'F');
  }
};

// 청구부서 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  if (ed_bilgLodeptCd.getValue().trim() == "") {
    $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  } else {
    scwin.f_beforeOpenCommonPopUpEd(ed_bilgLodeptNm, ed_bilgLodeptCd, 2, 'BILG', 'T', 'F');
  }
};

// 본선번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_cvsslMgntNo_onblur = function (e) {
  var cvsslMgntNo = ed_cvsslMgntNo.getValue().trim();
  if (cvsslMgntNo == "") {
    scwin.f_clearDataByCvsslMgntNo(); // 본선관리번호와 관련한 데이터셋 Clear
  } else {
    if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); // @을(를) 입력하십시오
      ed_cvsslMgntNo.setValue("");
      return;
    }
    scwin.f_openCommonPopUp(4, '', 'F', 'F', 'F', 'F');
  }
};

// TS본번 Onbluer(onKillFocus) 이벤트 발생시
scwin.ed_tsCvsslMgntNo_onblur = function (e) {
  var cvsslMgntNo = ed_tsCvsslMgntNo.getValue().trim();
  if (cvsslMgntNo == "") {
    scwin.f_clearDataByTsCvsslMgntNo(); // TS본선관리번호와 관련한 데이터셋 Clear    
    scwin.f_setOdrEtc(cvsslMgntNo, "TS");
  } else {
    if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); // @을(를) 입력하십시오
      ed_tsCvsslMgntNo.setValue("");
      return;
    }
    scwin.f_openCommonPopUp(4, 'TS', 'F', 'F', 'F');
  }
};

// 선박명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_vsslCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_vsslNm, ed_vsslCd, 8, '', 'T', 'F');
};

// TS선박명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_tsVsslCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_tsVsslNm, ed_tsVsslCd, 8, 'TS', 'T', 'F');
};

// 상차지 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_dptWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_dptWrkPlNm, ed_dptWrkPlCd, 5, 'DPT', 'T', 'F');
};

// 하차지 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_arvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_arvWrkPlNm, ed_arvWrkPlCd, 5, 'ARV', 'T', 'F');
};

// 상차지 우편번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_dptZip_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_dptDtl, ed_dptZip, 10, 'DPT_ZIP', 'T', 'F');
};

// 하차지 우편번호 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_arvZip_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_arvDtl, ed_arvZip, 10, 'ARV_ZIP', 'T', 'F');
};

// 특이사항 Onbluer(onKillFocus) 이벤트 발생시
scwin.txt_rmk_onblur = async function (e) {
  let ret = await !$c.gus.cfValidate($p, [txt_rmk]);
  if (ret) {
    txt_rmk.setValue("");
    txt_rmk.focus();
  }
};

// 배차담당 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_beforeOpenCommonPopUpEd(ed_alloccarPicNm, ed_alloccarPicId, 11, '', 'T', 'F');
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------
// 오더종류에서 OnSelChange이벤트 발생시
scwin.lc_odrKndCd_onchange = function (info) {
  if (lc_odrKndCd.getSelectedIndex() != -1) {
    scwin.odrKndCd = ds_odrKndCd.getCellData(lc_odrKndCd.getSelectedIndex(), "cd"); // 오더종류코드
    scwin.impExpClsCd = ds_odrKndCd.getCellData(lc_odrKndCd.getSelectedIndex(), "fltrCd2"); // 수출입구분코드

    if (scwin.impExpClsCd == "null") scwin.impExpClsCd = ""; // TS셔틀컨테이너가 아닌 경우

    scwin.f_setInterfaceByOdr(scwin.odrKndCd, scwin.impExpClsCd);
    tr_clntMgntNo.hide();
    if (lc_odrKndCd.getValue() != "CT") {
      scwin.setColumnStatus(["cntrSizCd", "cntrTypCd", "fullEmptyClsCd"], true);
      // gr_cntrInfo.setColumnReadOnly("cntrSizCd", true);
      // gr_cntrInfo.setColumnReadOnly("cntrTypCd", true);
      // gr_cntrInfo.setColumnReadOnly("fullEmptyClsCd", true);
    } else if (lc_odrKndCd.getValue() == "CT" && lc_odrCtrlClsCd.getValue() != 1) scwin.setColumnStatus(["cntrSizCd", "cntrTypCd"], false);
    {
      // gr_cntrInfo.setColumnReadOnly("cntrSizCd", false);
      // gr_cntrInfo.setColumnReadOnly("cntrTypCd", false);
    }
  }
};

// 계약번호에서 OnSelChange이벤트 발생시
scwin.lc_ctrtNo_onchange = function (info) {
  if (ds_ctrtNo.getRowCount() > 0 && scwin.mgntTrgtClntYn != "1") {
    scwin.mgntTrgtClntYn = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "mgntTrgtClntYn");
    if (scwin.mgntTrgtClntYn == "1") {
      if (scwin.statusFlag == "C") {
        if ($c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["본 계약거래처", "관리대상이므로 오더등록"])) {
          // @은(는) @할 수 없습니다.  
          scwin.f_set("INIT", "INIT"); // 초기화 
        }
      } else {
        if ($c.gus.cfAlertMsg($p, MSG_SD_WRN_006, ["본 계약거래처", "관리대상"])) {
          // @은(는) @입니다.
          $c.gus.cfDisableKeyData($p);
          $c.gus.cfDisableAllBtn($p);
          $c.gus.cfDisableObjects($p, [btn_confirmOdr, btn_updateCntrInfo]);
          $c.gus.cfEnableBtnOnly($p, [btn_clear]);
        }
      }
    } else {
      if (scwin.retrieveYn == "N") {
        scwin.f_retrieveClntList();
      }
    }
  }
  if (lc_ctrtNo.getValue() != "선택") scwin.f_RetrieveCtrtWrkPath(lc_ctrtNo.getValue());
};

// 청구처명 Onchange(OnSelChange2) 이벤트 발생시
scwin.lc_bilgClntNm_onchange = function (info) {
  ed_bilgClntNo.setValue(lc_bilgClntNm.getValue());
};

// 요청처명 Onchange(OnSelChange2) 이벤트 발생시
scwin.lc_reqClntNm_onchange = function (info) {
  ed_reqClntNo.setValue(lc_reqClntNm.getValue());
};

// 적하목록 onchange(OnSelChange) 이벤트 발생시
scwin.lc_odrCtrlClsCd_onchange = function (info) {
  scwin.odrCtrlClsCd = ds_odrKndCd.getCellData(lc_odrCtrlClsCd.getSelectedIndex(), "cd"); // 적하(C1) / 비적하(CT)
  scwin.f_setInterfaceByCtOdr(scwin.odrCtrlClsCd);

  // var odrCtrlClsCd = lc_odrCtrlClsCd.ValueOfIndex("cd",lc_odrCtrlClsCd.Index);
  if (lc_odrCtrlClsCd.getValue() == "1") {
    // 1. 편집 불가 설정 (ReadOnly = true)
    // gr_cntrInfo.setColumnReadOnly("cntrSizCd", true);
    // gr_cntrInfo.setColumnReadOnly("cntrTypCd", true);
    // gr_cntrInfo.setColumnReadOnly("fullEmptyClsCd", true);
    scwin.setColumnStatus(["cntrSizCd", "cntrTypCd", "fullEmptyClsCd"], true);
  } else {
    // 2. 편집 가능 설정 (ReadOnly = false)
    // gr_cntrInfo.setColumnReadOnly("cntrSizCd", false);
    // gr_cntrInfo.setColumnReadOnly("cntrTypCd", false);
    // gr_cntrInfo.setColumnReadOnly("fullEmptyClsCd", false);
    scwin.setColumnStatus(["cntrSizCd", "cntrTypCd", "fullEmptyClsCd"], false);
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 계약거래처
scwin.callBackClntCtrt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ctrtClntNo, ed_ctrtClntNm);
  scwin.f_retrieveCtrtNo(); // 계약번호 가져오기
};

// 요청거래처
scwin.callBackClntReq = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_reqClntNo.setValue(rtnList[0]);

      //사용자편의를 위하여 데이터셋에 추가
      var sameYn = "N";
      for (var i = 0; i < ds_reqClntNo.getTotalRow(); i++) {
        if (ed_reqClntNo.getValue().trim() == ds_reqClntNo.getCellData(i, "clntNo")) {
          sameYn = "Y";
          lc_reqClntNm.setSelectedIndex(i - 1);
          return;
        }
      }
      if (sameYn == "N") {
        let rowIndex = ds_reqClntNo.insertRow();
        ds_reqClntNo.setCellData(rowIndex, "clntNo", rtnList[0]);
        ds_reqClntNo.setCellData(rowIndex, "clntNm", rtnList[1]);
        lc_reqClntNm.setSelectedIndex(ds_reqClntNo.getTotalRow() - 1);
      }
    }
  } else {
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
    lc_reqClntNm.setSelectedIndex(-1);
  }
};

// 청구거래처
scwin.callBackClntBilg = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_bilgClntNo.setValue(rtnList[0]);

      // 사용자편의를 위하여 데이터셋에 추가
      var sameYn = "N";
      for (var i = 0; i < ds_bilgClntNo.getTotalRow(); i++) {
        if (ed_bilgClntNo.getValue().trim() == ds_bilgClntNo.getCellData(i, "clntNo")) {
          sameYn = "Y";
          lc_bilgClntNm.Index = i;
          lc_bilgClntNm.setSelectedIndex(i);
          return;
        }
      }
      if (sameYn == "N") {
        let rowIndex = ds_bilgClntNo.insertRow();
        ds_bilgClntNo.setCellData(rowIndex, "clntNo", rtnList[0]);
        ds_bilgClntNo.setCellData(rowIndex, "clntNm", rtnList[1]);
        lc_bilgClntNm.setSelectedIndex(ds_bilgClntNo.getTotalRow() - 1);
      }
      scwin.f_retrieveCtrtNo2(); //계약번호 가져오기
    }
  } else {
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
    lc_bilgClntNm.setSelectedIndex(-1);
  }
};

// 매출부서
scwin.callBackSellLodept = function (rtnList) {
  if (scwin.sellBilgPNoDataCloseTF == "T" && rtnList == "N/A") {
    $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
    $c.gus.cfInitHidVal($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_sellLodeptCd, ed_sellLodeptNm);
  }
};

// 청구부서 
scwin.callBackBilgLodept = function (rtnList) {
  if (scwin.sellBilgPNoDataCloseTF == "T" && rtnList == "N/A") {
    $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
    $c.gus.cfInitHidVal($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
  }
};

// Line
scwin.callBacklineCd = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      if (scwin.odrKndCd == DsConstants.ODR_KND_CD_ON_HIRE_ODR) {
        // On-Hire
        if (ed_ctrtClntNo.getValue().trim() != rtnList[2]) {
          $c.gus.cfAlertMsg($p, "계약거래처와 라인거래처가 상이합니다. 확인 후 다시 입력하여 주세요.");
        }
      }
      ed_lineCd.setValue(rtnList[0]);
      ed_lineNm.setValue(rtnList[1]);
      ds_odrInfo.setCellData(0, "shpCoClntNo", rtnList[4]);
      ed_shpCoClntNm.setValue(rtnList[5]);
      if (lc_odrKndCd.getValue() == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR && ds_odrInfo.getCellData(0, "lineCd") == 'SITC') {
        lay_socYn.show();
      } else {
        lay_socYn.hide();
      }

      // RPO NO 노출여부
      if ((ed_lineCd.getValue().trim() == "EVER" || ed_lineCd.getValue().trim() == "HTML" || ed_lineCd.getValue().trim() == "EMS" || ed_lineCd.getValue().trim() == "ITS") && lc_odrKndCd.getValue() == "C1") {
        tr_clntMgntNo.show("table-row");
      } else {
        tr_clntMgntNo.hide();
      }
    } else {
      $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
      $c.gus.cfInitHidVal($p, [ed_lineNm, ed_shpCoClntNm]);
      ds_odrInfo.setCellData(0, "shpCoClntNo", "");
    }
    scwin.f_clearDataByCvsslMgntNo(); // 본선관리번호와 관련한 데이터셋 Clear
  } else {
    $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
    ds_odrInfo.setCellData(0, "shpCoClntNo", "");
    scwin.f_clearDataByCvsslMgntNo(); // 본선관리번호와 관련한 데이터셋 Clear
  }
};

// 상차지
scwin.callBackDptWrkPlCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
  if (rtnList != null) {
    ed_dptZip.setValue(rtnList[6]);
    scwin.f_openCommonPopUp(10, 'DPT_ZIP', 'T', 'F', 'F', 'F');
  }
};

// 하차지
scwin.callBackArvWrkPlCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvWrkPlNm);
  if (rtnList != null) {
    ed_arvZip.setValue(rtnList[6]);
    scwin.f_openCommonPopUp(10, 'ARV_ZIP', 'T', 'F', 'F', 'F');
  }
};

// 선박명
scwin.callBackVsslCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

// Ts선박명
scwin.callBackVsslCdTs = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_tsVsslCd, ed_tsVsslNm);
};

// 상차지 우편번호
scwin.callBackDptZip = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptZip, ed_dptDtl);
  ed_dptDtl.setValue("");
};

// 하차지 우편번호
scwin.callBackArvZip = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvZip, ed_arvDtl);
  ed_arvDtl.setValue("");
};

// 배차담당 우편번호
scwin.callBackAlloccarPicId = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, ed_alloccarPicNm);
};

// 컨테이너목록(그리드) - To(도착지)
scwin.callBackArvWrk = async function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "arvWrkPlCd", "arvWrkPlNm");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "toCd", "arvWrkPlNm");

  // 수입본선,수입TS인 경우 : TO작업장변경시 같은 bl의 컨테이너번호의 TO작업장도 변경시킴
  var blNo = ds_cntrInfo.getCellData(scwin.gridSelRow, "blNo");
  var arvWrkPlCd = ds_cntrInfo.getCellData(scwin.gridSelRow, "arvWrkPlCd");
  var arvWrkPlNm = ds_cntrInfo.getCellData(scwin.gridSelRow, "arvWrkPlNm");
  if (arvWrkPlCd != scwin.olddata) {
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR // 수입본선
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR // 하선지경유TS(부두-->CY)
    ) {
      for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        if (scwin.gridSelRow != i && blNo == ds_cntrInfo.getCellData(i, "blNo")) {
          // blNo가 같은 경우만 해당
          ds_cntrInfo.setCellData(i, "toCd", arvWrkPlCd);
          ds_cntrInfo.setCellData(i, "arvWrkPlCd", arvWrkPlCd);
          ds_cntrInfo.setCellData(i, "arvWrkPlNm", arvWrkPlNm);
        }
      }
    }
  }
};

// 컨테이너목록(그리드) - 항구코드
scwin.callBackPort = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "portCd", "portNm");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_cntrInfo, ds_cntrInfo.getRowPosition(), "destPortCd", "destPortNm");
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  var v_odrNo = ds_odrInfo.getCellData(0, "odrNo");
  var v_odrKndCd = ds_odrInfo.getCellData(0, "odrKndCd");
  var paramObj = {
    odrNo: v_odrNo,
    linkPage: "odrList"
  };
  let options = {
    "openAction": "exist"
  };
  var MSG_CM_CRM = "Page로 이동하시겠습니까?";
  if (ds_odrInfo.getRowCount() > 0) {
    ds_odrInfo.setRowPosition(0);

    // arvWrkPlCd 데이터를 ToCd로 추가함
    for (var i = 0; i < ds_cntrInfo.getTotalRow(); i++) {
      ds_cntrInfo.setCellData(i, "toCd", ds_cntrInfo.getCellData(i, 'arvWrkPlCd'));
    }
    ds_cntrInfo.reform();
  }
  if (v_odrKndCd == "C1" || v_odrKndCd == "CS" || v_odrKndCd == "CT") {
    // 수입본선오더
    // cs, ct 오더 일때 각각 조회해온 transhipYn 값으로 환적 체크박스 체크  황창기
    if (v_odrKndCd == "CS") {
      if (ds_odrInfo.getCellData(0, "transhipYn") == 1) {
        chk_csTranshipYn.setValue("1");
      } else {
        chk_csTranshipYn.setValue("0");
      }
    } else if (v_odrKndCd == "CT") {
      if (ds_odrInfo.getCellData(0, "transhipYn") == 1) {
        chk_ctTranshipYn.setValue("1");
      } else {
        chk_ctTranshipYn.setValue("0");
      }
    }
    scwin.f_retrieveCtrtNo();
    scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'F');
    scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'F');
    ds_odrInfo.setCellData(0, "ctrtNo", ds_odrInfo.getOriginalCellData(0, "ctrtNo"));
    scwin.f_set("RETRIEVE");

    // 모선제어(SOC_YN) Checkbox 활성화 및 체크상태 설정
    if (ds_odrInfo.getCellData(0, "lineCd") == 'SITC') {
      lay_socYn.show();
      if (!$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrCtrlClsCd")) && lc_odrCtrlClsCd.getValue() == "3") {
        lc_socYn.setValue("3");
      } else if (!$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrCtrlClsCd")) && lc_odrCtrlClsCd.getValue() == "4") {
        lc_socYn.setValue("4");
      } else if (!$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrCtrlClsCd")) && lc_odrCtrlClsCd.getValue() == "5") {
        lc_socYn.setValue("5");
      } else if (!$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrCtrlClsCd")) && lc_odrCtrlClsCd.getValue() == "6") {
        lc_socYn.setValue("6");
      } else if (!$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrCtrlClsCd")) && lc_odrCtrlClsCd.getValue() == "7") {
        lc_socYn.setValue("7");
      } else if ($c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrCtrlClsCd"))) {
        lc_socYn.setValue("");
        lc_odrCtrlClsCd.setValue("");
      }
    } else {
      lay_socYn.hide();
    }
    cntrTotalRows.setValue(ds_cntrInfo.getTotalRow());
  } else {
    let ret = await $c.gus.cfAlertMsg($p, "해당 오더의 정보가 없습니다.");
    if (ret) {
      scwin.f_set("INIT", "CREATE");
      if (v_odrKndCd == "C2" || v_odrKndCd == "CX") {
        // 수입일반오더
        // strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.jsp";
        // if (cfConfirmMsg("수입일반오더" + MSG_CM_CRM)) {
        //     cfTabMenuUpdate(strOrderDetailUrl + condition , "수입일반오더") ;  
        // }
        if (await $c.win.confirm($p, "수입일반오더" + MSG_CM_CRM)) {
          $c.win.openMenu($p, "수입일반 오더(C2)", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml", "tn_201_02_03b.jsp", paramObj, options);
        }
      } else if (v_odrKndCd == "C3" || v_odrKndCd == "CW" || v_odrKndCd == "CR" || v_odrKndCd == "CP") {
        // 수출본선오더
        // strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_06b.jsp";
        // if (cfConfirmMsg("수출본선오더" + MSG_CM_CRM)) {
        //     cfTabMenuUpdate(strOrderDetailUrl + condition , "수출본선오더") ;  
        // }
        if (await $c.win.confirm($p, "수출본선오더" + MSG_CM_CRM)) {
          $c.win.openMenu($p, "수출본선 오더(C3/CW/CR/CP)", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_06b.xml", "tn_201_02_06b.jsp", paramObj, options);
        }
      } else if (v_odrKndCd == "C4") {
        // 수출일반오더
        // strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.jsp";
        // if (cfConfirmMsg("수출일반오더" + MSG_CM_CRM)) {
        //     cfTabMenuUpdate(strOrderDetailUrl + condition , "수출일반오더") ;  
        // }
        if (await $c.win.confirm($p, "수출일반오더" + MSG_CM_CRM)) {
          $c.win.openMenu($p, "수출일반 오더(C4)", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml", "tn_201_02_04b.jsp", paramObj, options);
        }
      } else if (v_odrKndCd == "C5" || v_odrKndCd == "C6" || v_odrKndCd == "C7") {
        // 기타오더
        // strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_07b.jsp";
        // if (cfConfirmMsg("기타오더" + MSG_CM_CRM)) {
        //     cfTabMenuUpdate(strOrderDetailUrl + condition , "기타오더") ;  
        // }
        if (await $c.win.confirm($p, "기타오더" + MSG_CM_CRM)) {
          $c.win.openMenu($p, "기타 오더(C5/C6/C7)", "/ui/tn/sd/odrmgnt/cntrodrreg/tn_201_02_07b.xml", "tn_201_02_07b.jsp", paramObj, options);
        }
      }
    }
  }
};
scwin.sbm_retrieveCtrtNo_submitdone = async function (e) {
  var ctrtNoRows = ds_ctrtNo.getRowCount();
  if (ctrtNoRows < 1) {
    scwin.f_clearDataByCtrtNo();
    if (ed_ctrtClntNo.getValue().trim() != "" && ed_ctrtClntNm.getValue().trim() != "") {
      $c.gus.cfAlertMsg($p, "거래처 " + ed_ctrtClntNm.getValue() + "의 " + MSG_CM_ERR_049, ["계약번호"]);
    }
  } else {
    for (var i = 0; i < ds_ctrtNo.getTotalRow(); i++) {
      ds_ctrtNo.setCellData(i, "label", ds_ctrtNo.getCellData(i, "ctrtNo") + " (" + ds_ctrtNo.getCellData(i, "clntPicNm") + ":~" + ds_ctrtNo.getCellData(i, "ctrtEndDt") + ":" + ds_ctrtNo.getCellData(i, "crcCd") + ")");
    }
    ds_ctrtNo.sort("ctrtNo", 1);
    lc_ctrtNo.setSelectedIndex(-1);
    lc_ctrtNo.setValue(ds_ctrtNo.getCellData(0, "ctrtNo"));
  }
};
scwin.sbm_retrieveCtrtNo2_submitdone = async function (e) {
  var ctrtNoRows = ds_ctrtNo2.getRowCount();
  if (ctrtNoRows > 0) {
    // 계약번호가 서로 다른 것이 있는 경우, 선택을 default로 보여주기 위한 process
    var sameYn = "N";
    for (var i = 0; i < ctrtNoRows; i++) {
      var ctrtNo = ds_ctrtNo2.getCellData(i, "ctrtNo").substring(0, 8);
      for (var j = 0; j < ds_ctrtNo2.getRowCount(); j++) {
        if (1 == ds_ctrtNo2.getCellData(j, "mgntTrgtClntYn")) {
          sameYn = "Y";
          break;
        }
      }
    }
    if (sameYn == "Y") {
      let ret = await $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.");
      if (ret) {
        ds_bilgClntNo.removeAll();
        ed_bilgClntNo.setValue("");
        ed_bilgClntNo.focus();
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.");
  }
};
scwin.sbm_retrieveClntNo_submitdone = async function (e) {
  // 요청처 데이터가 없는 경우, 계약거래처를 default로 세팅
  if (ds_reqClntNo.getRowCount() == 0) {
    ds_reqClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
    ed_reqClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'T');
  } else {
    ed_reqClntNo.setValue(ds_reqClntNo.getCellData(0, "clntNo"));
    scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'T');
  }

  // 청구처 데이터가 없는 경우
  if (ds_bilgClntNo.getRowCount() == 0) {
    ds_bilgClntNo.removeAll();
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
    ed_bilgClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'T');
  } else {
    ed_bilgClntNo.setValue(ds_bilgClntNo.getCellData(0, "clntNo"));
    scwin.f_openCommonPopUp(1, 'BILG', 'T', 'F', 'T');
    scwin.f_retrieveCtrtNo2();
  }
};
scwin.sbm_retrieveManifestBLContainerList_submitdone = async function (e) {
  scwin.chkInputQtyYn = "N";
  // 그리드에 데이터셋 바인딩하기
  var idx = 0;
  var cntrRows = ds_cntrInfo.getRowCount();
  for (var i = 0; i < cntrRows; i++) {
    if (ds_cntrInfo.getCellData(i, "arvWrkPlCd").trim() != "") {
      idx = i;
      break;
    }
  }
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR) {
    // 수입본선
    ed_arvWrkPlCd.setValue(ds_cntrInfo.getCellData(idx, "arvWrkPlCd"));
    ed_arvWrkPlNm.setValue(ds_cntrInfo.getCellData(idx, "arvWrkPlNm"));
    scwin.f_openCommonPopUp(5, 'ARV', 'T', 'F', 'F');
  }
  cntrTotalRows.setValue(cntrRows);

  // 조회여부 세팅
  scwin.retrieveYn = "N";
};
scwin.sbm_retrieveCtrtWrkPath_submitdone = async function (e) {
  if (ds_ctrtWrkPath.getRowCount() > 0) {
    var rowIndex = ds_ctrtWrkPath.insertRow(0);
    ds_ctrtWrkPath.setCellData(rowIndex, 'ctrtWrkPathSeq', 0);
    ds_ctrtWrkPath.setCellData(rowIndex, 'rmk', "선택");
  }
  if (!$c.gus.cfIsNull($p, lc_ctrtNo.getValue())) {
    gr_cntrInfo.refreshColumn('ctrtWrkPathSeq');
  }
};
scwin.sbm_registByOdrKndCd_submitdone = async function (e) {
  let ret = await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
  if (ret) {
    ed_odrNo.setValue(ds_cndOdrNo.getCellData(0, "odrNo"));
    scwin.f_Retrieve();
  }
};
scwin.sbm_updateByOdrKndCd_submitdone = async function (e) {
  let ret = await $c.gus.cfAlertMsg($p, MSG_CM_INF_003); // 성공적으로 수정하였습니다
  if (ret) {
    ed_odrNo.setValue(ds_cndOdrNo.getCellData(0, "odrNo"));
    scwin.f_Retrieve();
  }
};
scwin.sbm_deleteOrderCond_submitdone = async function (e) {
  let ret = await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다
  if (ret) {
    scwin.f_set("INIT", "CREATE");
  }
};
scwin.sbm_update_submitdone = async function (e) {
  let ret = await $c.gus.cfAlertMsg($p, MSG_CM_INF_003); // 성공적으로 수정하였습니다
  if (ret) {
    ed_odrNo.setValue(ds_cndOdrNo.getCellData(0, "odrNo"));
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieveCntrBasisInfo_submitdone = async function (e) {
  var odrCtrlClsCd = lc_odrCtrlClsCd.getValue();
  if (scwin.excelUploadYn != "1" && odrCtrlClsCd != "2") {
    var cntrInfoRows = ds_addCntrInfo.getRowCount();
    var alertStr = "";
    var cntrRows = ds_cntrInfo.getRowCount() - 1; // 방금 입력한 컨테이너 row 삭제

    // 받아온데이타 값중 중복컨테이너 비교 제거
    for (var j = cntrInfoRows; j > 0; j--) {
      for (var i = 0; i < cntrRows + 1; i++) {
        if (ds_cntrInfo.getCellData(i, "cntrNo") == ds_addCntrInfo.getCellData(j, "cntrNo")) {
          ds_addCntrInfo.deleteRow(j);
          cntrInfoRows = cntrInfoRows - 1;
        }
      }
    }
    if (cntrInfoRows > 0) {
      // 컨테이너번호 추가
      for (var i = 0; i < cntrInfoRows; i++) {
        if (i == 0) {
          alertStr = alertStr + "\n[컨테이너번호]\n";
          alertStr = alertStr + ds_addCntrInfo.getCellData(i, "cntrNo");
        } else {
          alertStr = alertStr + "," + ds_addCntrInfo.getCellData(i, "cntrNo");
        }
      }
      alertStr = alertStr + "\n\n BL번호가 같은 " + cntrInfoRows + " 건을 모두 추가하시겠습니까?";
      if (await $c.win.confirm($p, alertStr)) {
        ds_cntrInfo.deleteRow(ds_cntrInfo.getRowPosition()); // 컨테이너 입력한 row 삭제
        for (var i = 0; i < cntrInfoRows; i++) {
          if (!$c.gus.cfIsNull($p, ds_addCntrInfo.getCellData(i + 1, "cntrNo"))) {
            ds_cntrInfo.insertRow();
            cntrRows = cntrRows + 1;
            ds_cntrInfo.setCellData(cntrRows, "arrvlportDtm", ds_addCntrInfo.getCellData(i + 1, "arrvlportDtm"));
            ds_cntrInfo.setCellData(cntrRows, "cntrNo", ds_addCntrInfo.getCellData(i + 1, "cntrNo"));
            ds_cntrInfo.setCellData(cntrRows, "cntrSizCd", ds_addCntrInfo.getCellData(i + 1, "cntrSizCd"));
            ds_cntrInfo.setCellData(cntrRows, "cntrTypCd", ds_addCntrInfo.getCellData(i + 1, "cntrTypCd"));
            ds_cntrInfo.setCellData(cntrRows, "fullEmptyClsCd", ds_addCntrInfo.getCellData(i + 1, "fullEmptyClsCd"));
            ds_cntrInfo.setCellData(cntrRows, "wt", ds_addCntrInfo.getCellData(i + 1, "wt"));
            ds_cntrInfo.setCellData(cntrRows, "impSealNo", ds_addCntrInfo.getCellData(i + 1, "impSealNo"));
            ds_cntrInfo.setCellData(cntrRows, "blNo", ds_addCntrInfo.getCellData(i + 1, "blNo"));
            ds_cntrInfo.setCellData(cntrRows, "arvWrkPlCd", ds_addCntrInfo.getCellData(i + 1, "arvWrkPlCd"));
            ds_cntrInfo.setCellData(cntrRows, "arvWrkPlNm", ds_addCntrInfo.getCellData(i + 1, "arvWrkPlNm"));
            ds_cntrInfo.setCellData(cntrRows, "odrNo", ds_odrInfo.getCellData(0, "odrNo"));
            //ds_cntrInfo.UserStatus(cntrRows) = "1";
            ds_cntrInfo.modifyRowStatus(cntrRows, "C");
          }
        }
        cntrTotalRows.setValue(ds_cntrInfo.getRowCount());
        if (ds_addCntrInfo.getRowCount() > 0) ds_addCntrInfo.removeAll();
      }
    }
  }
};

//-------------------------------------------------------------------------
// Event oneditkeyup
//-------------------------------------------------------------------------
// 검색조건 오더번호 Enter 이벤트
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_odrNo);
  if (info.keyCode == 13) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
// 그리드 textImage 클릭 > 공통 팝업 호출
scwin.gr_cntrInfo_ontextimageclick = function (rowIndex, columnIndex) {
  var columnId = gr_cntrInfo.getColumnID(columnIndex);
  switch (columnId) {
    case "toCd":
      // To
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "toCd", "arvWrkPlNm", 5, "F", "F");
      break;
    case "arvWrkPlCd":
      // 도착장소
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "arvWrkPlCd", "arvWrkPlNm", 5, "F", "F");
      break;
    case "portCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, rowIndex, "portCd", "portNm", 3, "F", "F");
      break;
  }
};
scwin.gr_cntrInfo_onviewchange = async function (info) {
  var row = info.rowIndex;
  var colId = info.colId;
  var data = info.newValue;
  var oldData = info.oldValue;
  if (colId == 'toCd' || colId == 'arvWrkPlCd') {
    scwin.gridOldData = oldData;
    scwin.gridSelRow = row;
    await scwin.f_openPopUpGridBefore(ds_cntrInfo, row, colId, "arvWrkPlNm", oldData, 5, "T", "F");
  } else if (colId == 'cntrNo') {
    // 컨테이너번호
    if (ds_cntrInfo.getCellData(row, colId) != oldData && ds_cntrInfo.getCellData(row, colId) != "") {
      if (!dscommon.cf_CheckCntrNo(ds_cntrInfo.getCellData(row, colId))) {
        ds_cntrInfo.setCellData(row, colId, "");
      } else {
        for (var i = 0; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "cntrNo") == ds_cntrInfo.getCellData(row, colId)) {
            if (row != i) {
              let ret = await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["컨테이너목록", i, "컨테이너번호"]); // @의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
              if (ret) {
                ds_cntrInfo.setCellData(row, "cntrNo", oldData);
                return;
              }
            }
          }
        }
        scwin.f_retrieveCntrBasisInfo(ds_cntrInfo.getCellData(row, colId));
      }
    }
  }
};
scwin.gr_cntrInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var colid = columnId;
  var cntrRows = ds_cntrInfo.getRowCount();
  if ((colid == "ctrtWrkPathSeq" || colid == "cntrWrkClsCd") && cntrRows > 0) {
    pathSeq = ds_cntrInfo.getCellData(rowIndex, colid);
    for (var i = 0; i < cntrRows; i++) {
      if (rd_wrkPathCopy.getValue() == "1" || ds_cntrInfo.getCellData(i, colid) == "0" || ds_cntrInfo.getCellData(i, colid) == "") {
        ds_cntrInfo.setCellData(i, colid, pathSeq);
      }
    }
  }
};
scwin.gr_cntrInfo_onaftercolumnmove = function (info) {
  if (ds_cntrInfo.getCellData(row, "cntrNo") == "") {
    gr_cntrInfo.setCellReadOnly(row, "cntrNo", false);
  } else {
    gr_cntrInfo.setCellReadOnly(row, "cntrNo", true);
  }
};
scwin.f_runExcel = function () {
  const options = {
    fileName: "수입본선컨테이너오더" + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "수입본선컨테이너오더",
    removeColumns: "0",
    type: 4 + 8 + 16
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_cntrInfo, options, infoArr);
};

//-------------------------------------------------------------------------
// InputBox 대문자 설정
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ed_portcnt_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ed_tsCvsslMgntNo_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ed_tsPortcnt_onkeyup = function (e) {
  $c.win.chUpper($p, e);
};
scwin.ds_cntrInfo_oncelldatachange = function (info) {
  if (info.colID === "wt") {
    if ($c.util.isEmpty($p, info.newValue)) {
      ds_cntrInfo.unbind("oncelldatachang");
      ds_cntrInfo.setCellData(info.rowIndex, info.colID, "0");
      ds_cntrInfo.bind("oncelldatachang", scwin.ds_cntrInfo_oncelldatachange);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',mandatory:'true','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup',title:'오더번호',ref:'data:ds_odrInfo.odrNo',minLength:'13',maxlength:'13',allowChar:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_odrInfoArea',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_odrKndCd',objType:'data',ref:'data:ds_odrInfo.odrKndCd',refreshSelectedIndex:'true',style:'width:250px;',submenuSize:'fixed',validExp:'오더종류:yes','ev:onchange':'scwin.lc_odrKndCd_onchange',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_odrKndCd'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',btnId:'btn_ctrtClntNo',code:'ctrtClntNo',codeId:'ed_ctrtClntNo','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent',id:'udc_ctrtClntNo',mandatoryCode:'true',name:'ctrtClntNm',nameId:'ed_ctrtClntNm',objTypeCode:'data',popupID:'pop_ctrtClntNo',selectID:'retrieveClntInfo_tpro',style:'',validExpCode:'계약처:yes',validTitle:'계약처',refDataCollection:'ds_odrInfo',objTypeName:'data',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'form-control',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label','ev:onchange':'scwin.lc_ctrtNo_onchange',id:'lc_ctrtNo',mandatory:'true',objType:'data',ref:'data:ds_odrInfo.ctrtNo',style:'width: 250px;',submenuSize:'auto',textAlign:'left',validExp:'계약번호:yes',emptyItem:'true',title:'계약번호'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'750',selectedRowColor:'',label:'label',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'width:100px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'width:50px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'width:70px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'width:90px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'width:150px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'width:50px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'width:60px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'width:60px',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',btnId:'btn_bilgClntNo',code:'bilgClntNo',codeId:'ed_bilgClntNo','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',id:'udc_bilgClntNo',mandatoryCode:'true',name:'bilgClntNm',nameId:'ed_bilgClntNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveClntInfo_tpro',style:'',validExpCode:'청구처:yes',validTitle:'청구처','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent',readOnlyName:'true',hideName:'true'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label','ev:onchange':'scwin.lc_bilgClntNm_onchange',id:'lc_bilgClntNm',mandatory:'true',objType:'data',ref:'',style:'',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bilgClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_reqClntNo',code:'reqClntNo',codeId:'ed_reqClntNo','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent',id:'udc_reqClntNo',mandatoryCode:'true',name:'reqClntNm',nameId:'ed_reqClntNm',objTypeCode:'data',objTypeName:'data',popupID:'pop_reqClntNo',refDataCollection:'ds_odrInfo',selectID:'retrieveClntInfo_tpro',style:'',validExpCode:'요청처:yes',validTitle:'요청처',readOnlyName:'true',hideName:'true',UpperFlagCode:'0'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label','ev:onchange':'scwin.lc_reqClntNm_onchange',id:'lc_reqClntNm',mandatory:'true',objType:'data',ref:'',style:'',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_reqClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line/선사',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'10',objTypeCode:'data',refDataCollection:'ds_odrInfo',code:'lineCd',popupID:'pop_lineCd',UpperFlagCode:'1',readOnlyName:'true',validExpCode:'Line:yes',btnId:'btn_lineCd',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',codeId:'ed_lineCd',selectID:'retrieveLineInfoList_tpro',validTitle:'Line',name:'lineNm',objTypeName:'data',nameId:'ed_lineNm',style:'width: 250px;',id:'udc_lineCd',allowCharCode:'a-zA-Z0-9',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'max-width:150px;',id:'ed_shpCoClntNm',placeholder:'',class:'',objType:'data',validExp:'선사거래처:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',btnId:'btn_sellLodeptCd',code:'sellLodeptCd',codeId:'ed_sellLodeptCd','ev:onblurCodeEvent':'scwin.udc_sellLodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_sellLodeptCd_onclickEvent',id:'udc_sellLodeptCd',mandatoryCode:'true',name:'sellLodeptNm',nameId:'ed_sellLodeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_odrInfo',selectID:'retrieveLogisDeptInfo_tpro',style:'',validExpCode:'매출부서:yes',validTitle:'매출부서'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',btnId:'btn_bilgLodeptCd',code:'bilgLodeptCd',codeId:'ed_bilgLodeptCd','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent',id:'udc_bilgLodeptCd',mandatoryCode:'true',name:'bilgLodeptNm',nameId:'ed_bilgLodeptNm',objTypeCode:'data',objTypeName:'data',popupID:'pop_bilgLodeptCd',readOnlyName:'true',refDataCollection:'ds_odrInfo',selectID:'retrieveLogisDeptInfo_tpro',style:'',validExpCode:'청구부서:yes',validTitle:'청구부서'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_sellYn',ref:'data:ds_odrInfo.sellYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 85px;',title:'본선번호',validExp:'본선번호:yes',objType:'data','ev:onblur':'scwin.ed_cvsslMgntNo_onblur',ref:'data:ds_odrInfo.cvsslMgntNo',mandatory:'true',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_cvsslMgntNo_onkeyup',maxlength:'8'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:group',A:{id:'',class:'ml8'},E:[{T:1,N:'xf:group',A:{style:'display: none',id:'lay_odrCtrlClsCd',class:'',objType:'data'},E:[{T:1,N:'xf:select1',A:{refreshSelectedIndex:'true',submenuSize:'fixed',chooseOption:'',allOption:'',ref:'data:ds_odrInfo.odrCtrlClsCd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width:100px;',id:'lc_odrCtrlClsCd',class:'',objType:'data',direction:'auto','ev:onchange':'scwin.lc_odrCtrlClsCd_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'',id:'lay_socYn',style:'display: none;',objType:'data',validExp:'제어:no'},E:[{T:1,N:'w2:textbox',A:{class:'mr4',id:'',label:'제어',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'$blank',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_socYn',objType:'data',ref:'',refreshSelectedIndex:'true',style:'width:100px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BICT제어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부산제어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HBCT제어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BPT감만제어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BPT신선대제어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'7'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'display: none;',tagname:'tr',id:'div_transhipYn'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'mr4',id:'',label:'환적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_csTranshipYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'0',btnId:'btn_vsslCd',code:'vsslCd',codeId:'ed_vsslCd','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent',id:'udc_vsslCd',mandatoryCode:'true',maxlengthCode:'4',name:'vsslNm',nameId:'ed_vsslNm',objTypeCode:'data',popupID:'pop_vsslCd',readOnlyName:'true',refDataCollection:'ds_odrInfo',selectID:'retrieveVsslCdInfo_tpro',style:'width: 250px;',validExpCode:'선박명:yes',validTitle:'선박명',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:150px;',mandatory:'true',title:'항차',validExp:'항차:yes',objType:'data',ref:'data:ds_odrInfo.portcnt',maxlength:'10',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_portcnt_onkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'tr_tsCvsslMgntNo'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'TS본번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tsCvsslMgntNo',objType:'data',placeholder:'',style:'width: 85px;',title:'TS본번','ev:onblur':'scwin.ed_tsCvsslMgntNo_onblur',ref:'data:ds_odrInfo.tsCvsslMgntNo','ev:onkeyup':'scwin.ed_tsCvsslMgntNo_onkeyup',maxlength:'8',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_tsCvsslMgntNo',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_tsCvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr',class:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bl1',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'mr4',id:'',label:'환적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_ctTranshipYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TS선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',codeId:'ed_tsVsslCd',nameId:'ed_tsVsslNm',id:'udc_tsVsslCd',btnId:'btn_tsVsslCd',code:'tsVsslCd',name:'tsVsslNm','ev:onclickEvent':'scwin.udc_tsVsslCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_tsVsslCd_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',readOnlyName:'true',validExpName:'TS선박명:no',refDataCollection:'ds_odrInfo',selectID:'retrieveVsslCdInfo_tpro',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TS항차/항로',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tsPortcnt',placeholder:'',style:'width:150px;',objType:'data',ref:'data:ds_odrInfo.tsPortcnt','ev:onkeyup':'scwin.ed_tsPortcnt_onkeyup',allowChar:'a-zA-Z0-9',maxlength:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'tr_clntMgntNo'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'RPO No',ref:'',style:'',userData2:'',validExp:'RPO_No:no',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'}},{T:1,N:'xf:input',A:{class:'',id:'ed_clntMgntNo',placeholder:'',style:'width:150px;',validExp:'RPO_No:no',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'출도착정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_odrInfoArea2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',btnId:'btn_dptWrkPlCd',code:'dptWrkPlCd',codeId:'ed_dptWrkPlCd','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent',id:'udc_dptWrkPlCd',mandatoryCode:'true',name:'dptWrkPlNm',nameId:'ed_dptWrkPlNm',objTypeCode:'data',objTypeName:'data',popupID:'pop_dptWrkPlCd',readOnlyName:'true',refDataCollection:'ds_odrInfo',selectID:'',style:'width: 250px;',validExpCode:'상차지:yes',validTitle:'상차지'}},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_dptZip',code:'dptZip',codeId:'ed_dptZip','ev:onblurCodeEvent':'scwin.udc_dptZip_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dptZip_onclickEvent',id:'udc_dptZip',mandatoryCode:'true',name:'dptDtl',nameId:'ed_dptDtl',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveZipList_tpro',style:'width: 250px;',validExpCode:'상차지우편번호:yes',validTitle:'상차지우편번호'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'txt_rmk',style:'',objType:'data',validExp:'특이사항:no:maxByteLength=500','ev:onblur':'scwin.txt_rmk_onblur',ref:'data:ds_odrInfo.rmk'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상차일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_wrkStDt',objType:'data',ref:'data:ds_odrInfo.wrkStDt',style:'',title:'상차일시',validExp:'상차일:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'w50 tac',dataType:'time',displayFormat:'HH:mm',editFormat:'##:##',id:'ed_wrkStHh',ioFormat:'HHmmss',mandatory:'true',maxByteLength:'4',objType:'data',ref:'data:ds_odrInfo.wrkStHh',style:'',title:'상차시간',validExp:'상차시간:yes:date=HHmm'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_onPicNm',placeholder:'',style:'',ref:'data:ds_odrInfo.onPicNm',objType:'data',validExp:'상차담당:no'}},{T:1,N:'xf:input',A:{class:'',id:'ed_onPicTelNo',placeholder:'',style:'',ref:'data:ds_odrInfo.onPicTelNo',objType:'data',validExp:'상차담당전화번호:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'하차지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',btnId:'btn_arvWrkPlCd',code:'arvWrkPlCd',codeId:'ed_arvWrkPlCd','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent',id:'udc_arvWrkPlCd',mandatoryCode:'true',name:'arvWrkPlNm',nameId:'ed_arvWrkPlNm',objTypeCode:'data',objTypeName:'data',popupID:'',readOnlyName:'true',refDataCollection:'ds_odrInfo',selectID:'',style:'width: 250px;',validExpCode:'하차지:yes',validTitle:'하차지'}},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_arvZip',code:'arvZip',codeId:'ed_arvZip','ev:onblurCodeEvent':'scwin.udc_arvZip_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arvZip_onclickEvent',id:'udc_arvZip',mandatoryCode:'true',name:'arvDtl',nameId:'ed_arvDtl',objTypeCode:'data',objTypeName:'data',popupID:'pop_arvZip',refDataCollection:'ds_odrInfo',selectID:'retrieveZipList_tpro',style:'width: 250px;',validExpCode:'하차지우편번호:yes',validExpName:'To:no',validTitle:'하차지우편번호'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'하차일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wrkEndDt',objType:'data',ref:'data:ds_odrInfo.wrkEndDt',style:'',validExp:'하차일:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',displayFormat:'HH:mm',editFormat:'##:##',id:'ed_wrkEndHh',ioFormat:'HHmmss',mandatory:'true',maxByteLength:'4',objType:'data',ref:'data:ds_odrInfo.wrkEndHh',style:'',title:'작업시간',validExp:'하차시간:yes:date=HHmm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_offPicNm',placeholder:'',style:'',ref:'data:ds_odrInfo.offPicNm',validExp:'하차담당:no',objType:'data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_offPicTelNo',placeholder:'',style:'',ref:'data:ds_odrInfo.offPicTelNo',objType:'data',validExp:'To:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_alloccarPicId',code:'alloccarPicId',codeId:'ed_alloccarPicId','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent',id:'udc_alloccarPicId',name:'alloccarPicNm',nameId:'ed_alloccarPicNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_odrInfo',selectID:'retrieveUserInfo_tpro',style:'width: 250px;',validExpCode:'배차담당:yes',validTitle:'배차담당',readOnlyName:'true',readOnlyCode:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkPathCopy',objType:'data',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반값복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnCopy',style:'',type:'button','ev:onclick':'scwin.btnCopy_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'생성'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',templateYn:'N',btnUser:'N',btnPlusYn:'Y',gridID:'gr_cntrInfo',gridUpFn:'scwin.f_upload',id:'udc_topGrdBtn',gridDownFn:'scwin.f_runExcel',gridUpYn:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_cntrInfo',style:'',autoFit:'none',id:'gr_cntrInfo',visibleRowNum:'4',class:'wq_gvw',fixedColumn:'1',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_cntrInfo_ontextimageclick','ev:onviewchange':'scwin.gr_cntrInfo_onviewchange','ev:oncelldblclick':'scwin.gr_cntrInfo_oncelldblclick','ev:onaftercolumnmove':'scwin.gr_cntrInfo_onaftercolumnmove',readOnly:'true',gridName:'컨테이너목록',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'25',inputType:'checkbox',id:'column1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column17',value:'Seq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column15',value:'Seq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'입항일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'컨테이너<br/>번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'SZ',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'TP',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'EF',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'수입<br/>Seal-No',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'수출<br/>Seal-No',displayMode:'label',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'PORT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'BlNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'온도',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'위험물코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'UNNO',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'TO',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column39',value:'작업경로',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'BookingNo',displayMode:'label',class:'txt-blue'},E:[{T:3,text:'userdata1=\n    								'}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'긴급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'매출항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'할인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'특기사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'도착장소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'도착장소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'실적여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'SOC여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'25',inputType:'checkbox',id:'chk',displayMode:'label',readOnly:'true',userData1:'N'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'cntrSeq',displayMode:'label',readOnly:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'Currow',displayMode:'label',hidden:'true',readOnly:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrvlportDtm',displayMode:'label',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrNo',displayMode:'label',maxLength:'11',readOnly:'true',mandatory:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrSizCd',displayMode:'label',emptyItem:'true',mandatory:'true',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrTypCd',displayMode:'label',emptyItem:'true',mandatory:'true',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'fullEmptyClsCd',displayMode:'label',emptyItem:'true',mandatory:'true',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',displayFormat:'#,###',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'impSealNo',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'expSealNo',displayMode:'label',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'portCd',displayMode:'label',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'temper',displayMode:'label',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'impDangerCd',displayMode:'label',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unno',displayMode:'label',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'toCd',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'250',inputType:'select',id:'ctrtWrkPathSeq',displayMode:'label',textAlign:'left',selectedData:'false',chooseOptionLabel:'선택',mandatory:'true',readOnly:'false',allOption:'',chooseOption:'true',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_ctrtWrkPath'},E:[{T:1,N:'w2:label',A:{ref:'rmk'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bookingNo',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'cntrWrkClsCd',displayMode:'label',chooseOption:'true',chooseOptionLabel:'$blank',readOnly:'false'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selpchItemNm',displayMode:'label',readOnly:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',defaultValue:'0',dataType:'number',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',defaultValue:'0',dataType:'number',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkRsltsNo',displayMode:'label',displayFormatter:'scwin.grdFormatter_wrkRsltsNo',readOnly:'true',userData1:'Y'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'socYn',displayMode:'label',defaultValue:'0',readOnly:'true',userData1:'Y'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'cntrTotalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelObj:'btn_undoRow',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_addRow',btnRowAddYn:'Y',btnRowDelObj:'btn_deleteRow',btnRowDelYn:'Y',cancelFunction:'scwin.f_undoRow',gridID:'gr_cntrInfo',rowAddFunction:'scwin.f_addRow',rowAddUserAuth:'C',rowDelFunction:'scwin.f_deleteRow',rowDelUserAuth:'D',style:''}}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tmp_cntr','ev:onviewchange':'scwin.gr_cntrInfo_onviewchange',fixedColumn:'1',id:'gr_tmp',readOnly:'true',style:'display: none;',visibleRowNum:'10',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_tmp_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Seq',width:'40'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',value:'컨테이너<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',value:'SZ',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column3',inputType:'text',value:'TP',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column5',inputType:'text',value:'EF',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'중량',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column19',inputType:'text',value:'수입<br/>Seal-No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column51',inputType:'text',value:'PORT',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column49',inputType:'text',value:'BlNo',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column47',inputType:'text',value:'온도',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column45',inputType:'text',value:'위험물코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column43',inputType:'text',value:'UNNO',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',value:'특기사항',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column21',inputType:'text',value:'도착장소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column23',inputType:'text',value:'도착장소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',value:'실적여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',value:'SOC여부',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',readOnly:'true',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',mandatory:'true',maxLength:'11',readOnly:'true',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',emptyItem:'true',id:'cntrSizCd',inputType:'select',mandatory:'true',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',emptyItem:'true',id:'cntrTypCd',inputType:'select',mandatory:'true',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',emptyItem:'true',id:'fullEmptyClsCd',inputType:'select',mandatory:'true',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayFormat:'#,###',displayMode:'label',id:'wt',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impSealNo',inputType:'text',readOnly:'scwin.ttt',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portCd',inputType:'textImage',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'temper',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impDangerCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unno',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.grdFormatter_wrkRsltsNo',displayMode:'label',id:'wrkRsltsNo',inputType:'text',readOnly:'true',width:'100'}},{T:1,N:'w2:column',A:{defaultValue:'0',displayMode:'label',id:'socYn',inputType:'text',readOnly:'true',width:'100'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'display: none;'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_cntrInfo',label:'저장',type:'button',class:'btn link','ev:onclick':'scwin.btn_cntrInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'컨테이너정보'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_confirmOdr',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_confirmOdr_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_dc',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_dc_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'할인할증'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_updateCntrInfo',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_updateCntrInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'컨테이너상세'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_chgWrkPath',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_chgWrkPath_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrRegIfno',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_odrRegIfno_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'등록현황'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrCopy',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_odrCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더복사'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_comCode',validTitle:'',nameId:'ed_comCodeNm',style:'width:%; height:px;display: none;',id:'udc_comCode',btnId:'btn_comCode'}}]}]}]}]}]})