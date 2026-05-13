/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_41b.xml 228979 4f3ccf2a099460468be22b6727cf9ed02437e166e9bcc0de8d9f7735715c8452 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condCntrBasisInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'aeq',name:'Seq',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'Size',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'Type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offhireOdrNo',name:'Off Hire 오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onhireOdrNo',name:'On Hire 오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisInfo',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impWt',name:'수입중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impOverLength',name:'수입OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impOverHeight',name:'수입OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impOverWidTh',name:'수입OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impMgsetYn',name:'수입MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impCntrWrkKndCd',name:'수입컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impTransCondCd',name:'수입운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impCntrWtCondCd',name:'수입컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expDangerCd',name:'수출위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expTemper',name:'수출온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'DRY여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expWt',name:'수출중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expOverLength',name:'수출OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expOverHeight',name:'수출OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expOverWidth',name:'수출OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expMgsetYn',name:'수출MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expCntrWrkKndCd',name:'수출컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expTransCondCd',name:'수출운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expCntrWtCondCd',name:'수출컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'stsChgDt',name:'상태변경일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'OFF반납구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LEASE여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'term',name:'TERM',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'arvIntendYn',name:'도착예정여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'creatOdrNo',name:'생성오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'trmntOdrNo',name:'소멸오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'반입시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'crryinGatelogNo',name:'반입gatelog번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'legalAccfCargoDdCnt',name:'법적체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'selfAccfCargoDdCnt',name:'자체체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'화물처리방법코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'strRateOutbrYn',name:'보관료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'sndoutInspRateOutbrYn',name:'파출검사료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'frzMonOutbrYn',name:'냉동모니터링발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'연장만기일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'연장관리번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'관리구분여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'fillerDesc',name:'FILLER 설명',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'aeq',name:'Seq',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisInfoResult',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impWt',name:'수입중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impOverLength',name:'수입OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impOverHeight',name:'수입OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impOverWidTh',name:'수입OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impMgsetYn',name:'수입MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impCntrWrkKndCd',name:'수입컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impTransCondCd',name:'수입운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impCntrWtCondCd',name:'수입컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expDangerCd',name:'수출위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expTemper',name:'수출온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'DRY여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expWt',name:'수출중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expOverLength',name:'수출OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expOverHeight',name:'수출OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expOverWidth',name:'수출OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expMgsetYn',name:'수출MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expCntrWrkKndCd',name:'수출컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expTransCondCd',name:'수출운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expCntrWtCondCd',name:'수출컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'stsChgDt',name:'상태변경일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'OFF반납구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LEASE여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'term',name:'TERM',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'arvIntendYn',name:'도착예정여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'creatOdrNo',name:'생성오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'trmntOdrNo',name:'소멸오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'반입시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'crryinGatelogNo',name:'반입gatelog번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'legalAccfCargoDdCnt',name:'법적체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'selfAccfCargoDdCnt',name:'자체체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'화물처리방법코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'strRateOutbrYn',name:'보관료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'sndoutInspRateOutbrYn',name:'파출검사료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'frzMonOutbrYn',name:'냉동모니터링발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'연장만기일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'연장관리번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'관리구분여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'fillerDesc',name:'FILLER 설명',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'aeq',name:'Seq',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name81',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name93',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'maxArrvlPortDtm',name:'name97',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'chk',name:'name99',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'useOdrNo',name:'name105',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrStsNm',name:'name111',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name129',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_offhireOrder','ev:onrowpositionchange':'scwin.ds_offhireOrder_onrowpositionchange','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'합적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'오더담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'오더담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송회사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortCd',name:'TS항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplCoClsCd',name:'3자물류업체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndYn',name:'SMS전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'오더취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'오더취소시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'오더취소사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'오더삭제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'오더삭제시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOdrNo',name:'상위오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'청구오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgClsCd',name:'선청구구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'자동오더여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispPchsClsCd',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNonm',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortNm',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'name138',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'name145',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'odrRequestCnt',name:'name146',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'name150',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'name153',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'name154',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'name156',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'name160',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name167',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoclsCd',name:'name168',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name171',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name172',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'name173',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'name174',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'name175',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'name179',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'name183',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'name192',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'name194',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'name195',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'name198',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name202',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'name207',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'name217',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'name218',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name222',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_offhireOrderCommodity',saveRemovedData:'false','ev:onremoverow':'scwin.dlt_onremoverow','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:ondataload':'scwin.dlt_onload'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Size',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Type',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL 번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cstmrMgntNo',name:'고객관리번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'paletYn',name:'팔레트',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cnclYn',name:'취소여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'벌크오더별작업지시번호',dataType:'text',defaultValue:'','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'odrWrkPathYn',name:'name34',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'modId',name:'name35',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'name36',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'name37',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'name39',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'name40',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'name43',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dryYn',name:'name46',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'name52',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name56',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'name57',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name59',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'temper',name:'name62',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'name63',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name42',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_offhireOrderContainer',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'dry여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dcsnHh',name:'확정시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cfsInMthdCd',name:'CFS입고방법코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cfsCmpndCgshfYn',name:'CFS구내이적여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrInsYn',name:'컨테이너입력여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'expDryYn',name:'name37',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'expMgsetYn',name:'name38',dataType:'number',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'expWt',name:'name39',dataType:'number',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'frzMonOutbrYn',name:'name40',dataType:'number',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'impDryYn',name:'name41',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'impMgsetYn',name:'name42',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'impWt',name:'name43',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'name44',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'legalAccfCargoDdCnt',name:'name45',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'name46',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'selfAccfCargoDdCnt',name:'name47',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'sndoutInspRateOutbrYn',name:'name48',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'socYn',name:'name49',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'strRateOutbrYn',name:'name50',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'name51',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'name52',dataType:'text',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'chk',name:'name52',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impOverLength',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impOverHeight',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impOverWidTh',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCntrWrkKndCd',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impTransCondCd',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCntrWtCondCd',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expDangerCd',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expTemper',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expOverLength',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expOverHeight',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expOverWidth',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCntrWrkKndCd',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expTransCondCd',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expCntrWtCondCd',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsChgDt',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'creatOdrNo',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name140',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name141',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name142',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name145',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'name146',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrModDtm',name:'name149',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'name150',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_offhireOrderContainerInformation',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impWt',name:'수입중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverLength',name:'수입OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverHeight',name:'수입OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverWidTh',name:'수입OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impMgsetYn',name:'수입MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impCntrWrkKndCd',name:'수입컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impTransCondCd',name:'수입운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impCntrWtCondCd',name:'수입컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expDangerCd',name:'수출위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expTemper',name:'수출온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dryYn',name:'DRY여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expWt',name:'수출중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverLength',name:'수출OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverHeight',name:'수출OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverWidth',name:'수출OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expMgsetYn',name:'수출MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expCntrWrkKndCd',name:'수출컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expTransCondCd',name:'수출운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expCntrWtCondCd',name:'수출컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stsChgDt',name:'상태변경일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'OFF반납구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LEASE여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'term',name:'TERM',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvIntendYn',name:'도착예정여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'creatOdrNo',name:'생성오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'trmntOdrNo',name:'소멸오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'반입시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinGatelogNo',name:'반입gatelog번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'legalAccfCargoDdCnt',name:'법적체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'selfAccfCargoDdCnt',name:'자체체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'화물처리방법코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'strRateOutbrYn',name:'보관료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sndoutInspRateOutbrYn',name:'파출검사료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'frzMonOutbrYn',name:'냉동모니터링발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'연장만기일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'연장관리번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'관리구분여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fillerDesc',name:'FILLER 설명',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name80',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'name86',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name88',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'portNm',name:'name99',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'name104',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'name119',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'name124',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name130',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impDryYn',name:'name148',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name111',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrStsNm',name:'name140',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'name151',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'name152',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'name161',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onhireOrder',saveRemovedData:'false','ev:onrowpositionchange':'scwin.ds_onhireOrder_onrowpositionchange','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtl',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDsgYn',name:'컨테이너지정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chClsCd',name:'CH구분코드',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingYn',name:'합적여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보세운송만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'상차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTelNo',name:'상차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'하차담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTelNo',name:'하차담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicNm',name:'오더담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrPicTelNo',name:'오더담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicTelNo',name:'영업담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoNm',name:'운송회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoTelNo',name:'운송회사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCvsslMgntNo',name:'TS본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslCd',name:'TS선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'TS항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortCd',name:'TS항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplCoClsCd',name:'3자물류업체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrClsCd',name:'오더구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndYn',name:'SMS전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclDt',name:'오더취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclHh',name:'오더취소시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclItemCd',name:'오더취소항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclRsn',name:'오더취소사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelDt',name:'오더삭제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelHh',name:'오더삭제시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOdrNo',name:'상위오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'청구오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgClsCd',name:'선청구구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoOdrYn',name:'자동오더여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispPchsClsCd',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demDt',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNonm',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortNm',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'name138',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'name145',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'odrRequestCnt',name:'name146',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'name150',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'name153',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'odrCtrlClsCd',name:'name154',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicNm',name:'name156',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'name160',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name167',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoclsCd',name:'name168',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name171',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name172',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'name173',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'name174',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'name175',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'name179',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathCnt',name:'name183',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'name192',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'name194',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'name195',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'name198',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name202',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'name208',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'name218',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'name219',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name223',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlYn',name:'name144',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onhireOrderCommodity',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL 번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너 SIZE',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너 TYPE',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'컨테이너 F/E',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'수량단위코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'netWt',name:'NET중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'cstmrMgntNo',name:'고객관리번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'paletYn',name:'팔레트',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cnclYn',name:'취소여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'벌크오더별작업지시번호',dataType:'text',defaultValue:'','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'odrWrkPathYn',name:'name34',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'modId',name:'name35',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'name36',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'name37',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'name39',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'name40',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'name43',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'dryYn',name:'name46',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeHh',name:'name52',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name56',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'name57',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name59',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'temper',name:'name62',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'name63',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name53',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onhireOrderContainer',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dryYn',name:'dry여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'확정여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dcsnHh',name:'확정시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'completeYn',name:'완료여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'완료일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'completeHh',name:'완료시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cfsInMthdCd',name:'CFS입고방법코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cfsCmpndCgshfYn',name:'CFS구내이적여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrInsYn',name:'컨테이너입력여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'name36',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'name38',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'selfAccfCargoDdCnt',name:'name39',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'cntrModDtm',name:'name40',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'name41',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'expDangerCd',name:'name43',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverWidth',name:'name44',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'name45',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impMgsetYn',name:'name46',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'lbay',name:'name47',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expWt',name:'name49',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'name51',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverHeight',name:'name52',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name53',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impWt',name:'name55',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name56',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lblock',name:'name59',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sndoutInspRateOutbrYn',name:'name60',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'name62',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'name63',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'portNm',name:'name64',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'name65',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impCntrWtCondCd',name:'name66',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stsChgDt',name:'name67',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'term',name:'name68',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrWrkClsCd',name:'name69',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name70',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'name71',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'name72',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ltier',name:'name73',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'socYn',name:'name76',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'name77',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'name79',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'name82',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'name84',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impTransCondCd',name:'name86',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'name87',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'name89',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverHeight',name:'name93',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name95',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expTemper',name:'name96',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'name97',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'impOverWidTh',name:'name99',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'chk',name:'name100',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'impTemper',name:'name101',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'strRateOutbrYn',name:'name102',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'expTransCondCd',name:'name103',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverLength',name:'name105',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'portCd',name:'name106',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'creatOdrNo',name:'name107',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'legalAccfCargoDdCnt',name:'name109',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'expCntrWtCondCd',name:'name110',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impDryYn',name:'name113',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name115',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name116',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expCntrWrkKndCd',name:'name119',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'name120',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expDryYn',name:'name121',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'lrow',name:'name122',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverLength',name:'name124',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'frzMonOutbrYn',name:'name127',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'expMgsetYn',name:'name131',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name132',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impCntrWrkKndCd',name:'name133',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onhireOrderContainerInformation',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impDangerCd',name:'수입위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impTemper',name:'수입온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impWt',name:'수입중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverLength',name:'수입OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverHeight',name:'수입OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impOverWidTh',name:'수입OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impMgsetYn',name:'수입MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impCntrWrkKndCd',name:'수입컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impTransCondCd',name:'수입운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impCntrWtCondCd',name:'수입컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출봉인번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expDangerCd',name:'수출위험물코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expTemper',name:'수출온도',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dryYn',name:'DRY여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expWt',name:'수출중량',dataType:'bigDecimal','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverLength',name:'수출OVER_LENGTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverHeight',name:'수출OVER_HEIGHT',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expOverWidth',name:'수출OVER_WIDTH',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expMgsetYn',name:'수출MGSET여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expCntrWrkKndCd',name:'수출컨테이너작업종류코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expTransCondCd',name:'수출운송조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'expCntrWtCondCd',name:'수출컨테이너중량조건코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stsChgDt',name:'상태변경일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'OFF반납구분코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LEASE여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'term',name:'TERM',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvIntendYn',name:'도착예정여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'creatOdrNo',name:'생성오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'trmntOdrNo',name:'소멸오더번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'반입시간',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crryinGatelogNo',name:'반입gatelog번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'legalAccfCargoDdCnt',name:'법적체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'selfAccfCargoDdCnt',name:'자체체화일수',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cargoProcMthdCd',name:'화물처리방법코드',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'strRateOutbrYn',name:'보관료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sndoutInspRateOutbrYn',name:'파출검사료발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'frzMonOutbrYn',name:'냉동모니터링발생여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'extdDueDt',name:'연장만기일자',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'extdMgntNo',name:'연장관리번호',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'관리구분여부',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fillerDesc',name:'FILLER 설명',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name78',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'name80',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'name92',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'name98',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cntrStsNm',name:'name107',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impDryYn',name:'name115',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'name118',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'name119',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'portNm',name:'name127',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'name128',dataType:'number','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'chk',name:'name129',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'expDryYn',name:'name130',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name131',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'name132',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'name133',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'completeYn',name:'name134',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wt',name:'name135',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cfsCmpndCgshfYn',name:'name136',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntrInsYn',name:'name137',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'deprtPortYn',name:'name138',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'selYn',name:'name139',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'detentionYn',name:'name140',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'portYn',name:'name141',dataType:'number',defaultValue:'-1'}},{T:1,N:'w2:column',A:{id:'damageYn',name:'name142',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrSize',saveRemovedData:'false','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cntrType',repeatNode:'map',saveRemovedData:'false',style:'','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',A:{'ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cntrFE',repeatNode:'map',saveRemovedData:'false',style:'','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map','ev:ondataload':'scwin.ds_offhireOrder_ondataload','ev:onrowpositionchange':'scwin.ds_offhireOrder_onrowpositionchange',id:'dma_hireOrder',style:'','ev:onmodelchange':'scwin.dma_hireOrder_onmodelchange'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkHh',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveDirectOnhireAndOffhireOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderQueryCondition","key":"IN_DS1"},{"id":"ds_offhireOrder","key":"OUT_DS1"},{"id":"ds_offhireOrderCommodity","key":"OUT_DS2"},{"id":"ds_offhireOrderContainer","key":"OUT_DS3"},{"id":"ds_offhireOrderContainerInformation","key":"OUT_DS4"},{"id":"ds_onhireOrder","key":"OUT_DS5"},{"id":"ds_onhireOrderCommodity","key":"OUT_DS6"},{"id":"ds_onhireOrderContainer","key":"OUT_DS7"},{"id":"ds_onhireOrderContainerInformation","key":"OUT_DS8"}]',target:'data:json,[{"id":"ds_offhireOrder","key":"OUT_DS1"},{"id":"ds_offhireOrderCommodity","key":"OUT_DS2"},{"id":"ds_offhireOrderContainer","key":"OUT_DS3"},{"id":"ds_offhireOrderContainerInformation","key":"OUT_DS4"},{"id":"ds_onhireOrder","key":"OUT_DS5"},{"id":"ds_onhireOrderCommodity","key":"OUT_DS6"},{"id":"ds_onhireOrderContainer","key":"OUT_DS7"},{"id":"ds_onhireOrderContainerInformation","key":"OUT_DS8"}]',encoding:'UTF-8',mode:'asynchronous'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrreg.RegistDirectOnhireAndOffhireOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_orderQueryCondition","key":"OUT_DS1"},{"id":"ds_offhireOrderCommodity","key":"IN_DS2"},{"id":"ds_offhireOrderContainer","key":"IN_DS3"},{"id":"ds_offhireOrderContainerInformation","key":"IN_DS4"},{"id":"ds_onhireOrderCommodity","key":"IN_DS6"},{"id":"ds_onhireOrderContainer","key":"IN_DS7"},{"id":"ds_onhireOrderContainerInformation","key":"IN_DS8"},{"action":"modified","id":"ds_offhireOrder","key":"IN_DS1"},{"action":"modified","id":"ds_onhireOrder","key":"IN_DS5"}]',target:'data:json,{"id":"dma_orderQueryCondition","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.sd.odrmgnt.odrreg.DeleteDirectOnhireAndOffhireOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_offhireOrder","key":"IN_DS1"},{"id":"ds_offhireOrderContainerInformation","key":"IN_DS2"},{"id":"ds_onhireOrder","key":"IN_DS3"},{"id":"ds_onhireOrderContainerInformation","key":"IN_DS4"}]',encoding:'UTF-8',mode:'asynchronous'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBasisInfo',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condCntrBasisInfo","key":"IN_DS1"},{"id":"ds_cntrBasisInfoResult","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrBasisInfoResult","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submit':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.ds_cntrBasisInfoResult_ondataload,scwin.f_CopyDataSetCntrBasisInfo,scwin.f_Create,scwin.f_EnablePopUpObj,scwin.f_EnablePopUpObj,scwin.f_FieldClear,scwin.f_OnLoad,scwin.f_OnLoad,scwin.f_OnLoad,scwin.f_Retrieve,scwin.f_addCntrBasisInfo,scwin.f_addRow,scwin.f_checkCntrNo,scwin.f_clearCntrIndormation,scwin.f_clearData,scwin.f_delete,scwin.f_deleteRow,scwin.f_openCommonPopUp,scwin.f_openPopUpOdrNo,scwin.f_openPopUpOdrNo,scwin.f_retrieveCntrBasisInfo,scwin.f_save_callback,scwin.f_undoRow,scwin.f_update,scwin.f_update,scwin.f_updateTotalRows,scwin.f_updateTotalRows,scwin.f_updateTotalRows,scwin.f_validChk,scwin.globalVars,scwin.seqFormat,scwin.submitExcute'}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGauceConstants.js',type:'text/javascript',scopeVariable:'DGauceConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = async function () {
  scwin.loginDTO = $c.data.getMemInfo($p);
  scwin.cntrNoInfo = $c.data.getParameter($p, "cntrNo") ?? "";

  // 오류 메시지

  // Off Hire Line 코드[@]와 컨테이너 [@]의 Line코드[@]가 일치하지 않습니다.
  let count = 1;
  scwin.cntrLineErrorMessage = await $c.data.getDMessage($p, 'SD', 'E0125');
  scwin.cntrLineErrorMessage = scwin.cntrLineErrorMessage.replaceAll("@", () => `%${count++}`);

  // 작업장 코드[@]와 컨테이너 [@]의 현위치코드[@]가 일치하지 않습니다.
  count = 1;
  scwin.cntrCurrPosErrorMessage = await $c.data.getDMessage($p, 'SD', 'E0126');
  scwin.cntrCurrPosErrorMessage = scwin.cntrCurrPosErrorMessage.replaceAll("@", () => `%${count++}`);

  // 해당 컨테이너 [@]는 EMPTY 컨테이너가 아닙니다.
  count = 1;
  scwin.cntrEmptyErrorMessage = await $c.data.getDMessage($p, 'SD', 'E0127');
  scwin.cntrEmptyErrorMessage = scwin.cntrEmptyErrorMessage.replaceAll("@", () => `%${count++}`);
  scwin.oldCntrNo = ""; // 이전 컨테이너 변경
  scwin.oldCntrRow = 0; // 변경 컨테이너 Row
  scwin.oldData = "";
  scwin.orginOffOrder = "";
  scwin.orginOnOrder = "";
  scwin.initStatus = "";
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  hid_odrKndCd.setValue(DsConstants.ODR_KND_CD_ON_HIRE_ODR); // Off Hire 오더

  // 초기값 설정
  scwin.f_defaultValue();

  //컨테이너 화물추척화면에서 화면이동 시 
  if (!$c.gus.cfIsNull($p, scwin.cntrNoInfo)) {
    scwin.f_Create();
    scwin.f_addRow();
    ds_cntrBasisInfo.setCellData(ds_cntrBasisInfo.getRowPosition(), "cntrNo", scwin.cntrNoInfo);
    if (scwin.f_checkCntrNo(scwin.cntrNoInfo)) {
      scwin.f_retrieveCntrBasisInfo(scwin.cntrNoInfo);
    }
    ;
  }
  ;

  // 테스트 데이터
  // ed_cntrNo.setValue('TGBU7153394');
  // ed_cntrNo.setValue('TIIU6316855');
  // WHLU5139052

  // ed_cntrNo.setValue('EGHU8288128');
  // ed_offhire_odrNo.setValue('BC42501130006');
  // ed_onhire_odrNo.setValue('DC52602190001');
};

/**
 * @method 
 * @name f_defaultValue 
 * @description 초기값 설정 : Grid  설정 - ID 별로 보여지는 필드 정의
 */
scwin.f_defaultValue = function () {
  // 데이터 초기화
  scwin.f_clearDataSetAll();

  // KeyData 비활성화
  $c.gus.cfDisableKeyData($p);

  // 그리드 행추가 / 삭제 /취소 버튼 비활성화
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfEnableBtnOnly($p, [btnCreate]);

  // PopUp 이미지 버튼을 비활성화 시킨다.
  scwin.f_DisablePopUpObj();
  $c.gus.cfEnableObjects($p, [btn_cntrNo]);

  // 그리드 Editable : false
  gr_commInfo.setGridReadOnly(true);
  gr_cntrInfo.setGridReadOnly(true);

  // 컨테이너번호 EMEDIT 로 FOCUS 이동
  ed_cntrNo.focus();
};

/**
 * @method 
 * @name f_clearDataSetAll 
 * @description DataSet 초기화 처리 : 전체 DataSet 을 초기화 한다.
 */
scwin.f_clearDataSetAll = function () {
  let insertRow;
  dma_hireOrder.setEmptyValue();

  // 오더기본정보 DataSet 초기화
  ds_offhireOrder.setJSON([]);
  insertRow = ds_offhireOrder.insertRow();
  ds_offhireOrder.setRowPosition(insertRow);
  ds_onhireOrder.setJSON([]);
  insertRow = ds_onhireOrder.insertRow();
  ds_onhireOrder.setRowPosition(insertRow);

  // 오더 품목 정보  DataSet 초기화
  ds_offhireOrderCommodity.setJSON([]);
  ds_onhireOrderCommodity.setJSON([]);

  // 오더 컨테이너 정보  DataSet 초기화
  ds_offhireOrderContainer.setJSON([]);
  ds_onhireOrderContainer.setJSON([]);

  // 컨테이너 정보  DataSet 초기화
  ds_offhireOrderContainerInformation.setJSON([]);
  ds_onhireOrderContainerInformation.setJSON([]);
  ds_cntrBasisInfo.setJSON([]);

  // HIDDEN 값 초기화
  scwin.f_clearData();
};

/**
 * @method 
 * @name f_clearData 
 * @description Data 초기화 (HTML INPUT)
 */
scwin.f_clearData = function () {
  // Off Hire 오더 기본값 설정
  ds_offhireOrder.setRowJSON(ds_offhireOrder.getRowPosition(), {
    "odrKndCd": DsConstants.ODR_KND_CD_OFF_HIRE_ODR,
    // 오더종류 - C6
    "selfClsCd": DsConstants.SELF_CLS_CD_MCOM_TRANS,
    // 작여부(당사운송: LS)
    "smsSndYn": DsConstants.YN_NO,
    // SMS전송여부
    "coshippingYn": DsConstants.YN_NO,
    // 합적여부
    "odrDcsnYn": DsConstants.YN_YES,
    // 오더확정여부
    "odrCompleteYn": DsConstants.YN_NO,
    // 오더완료여부
    "odrCnclYn": DsConstants.YN_NO,
    // 오더취소여부
    "odrDelYn": DsConstants.YN_NO,
    // 오더삭제여부
    "wrkPatternCd": "00",
    // 작업유형 default 값
    "chClsCd": "0",
    // CH구분코드 - [0] 화주
    "regBranCd": scwin.loginDTO.lobranCd,
    // 등록점소 - 사용자 설정 물류점소
    "autoOdrYn": DsConstants.YN_YES // SMS전송여부
  }, true);

  // On Hire 오더 기본값 설정
  ds_onhireOrder.setRowJSON(ds_onhireOrder.getRowPosition(), {
    "odrKndCd": DsConstants.ODR_KND_CD_ON_HIRE_ODR,
    // 오더종류 - C5
    "selfClsCd": DsConstants.SELF_CLS_CD_MCOM_TRANS,
    // 작여부(당사운송: LS)
    "smsSndYn": DsConstants.YN_NO,
    // SMS전송여부
    "coshippingYn": DsConstants.YN_NO,
    // 합적여부
    "odrDcsnYn": DsConstants.YN_YES,
    // 오더확정여부
    "odrCompleteYn": DsConstants.YN_NO,
    // 오더완료여부
    "odrCnclYn": DsConstants.YN_NO,
    // 오더취소여부
    "odrDelYn": DsConstants.YN_NO,
    // 오더삭제여부
    "wrkPatternCd": "00",
    // 작업유형 default 값
    "chClsCd": "0",
    // CH구분코드 - [0] 화주
    "regBranCd": scwin.loginDTO.lobranCd,
    // 등록점소 - 사용자 설정 물류점소
    "autoOdrYn": DsConstants.YN_YES // SMS전송여부
  }, true);

  // 매출여부 기본값 설정	
  rd_offhire_sellYn.setValue(DsConstants.YN_NO);
  rd_onhire_sellYn.setValue(DsConstants.YN_NO);
};

/**
 * @method 
 * @name f_EnablePopUpObj 
 * @description PopUp 이미지를 활성화 시킨다.
 */
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [btn_wrkPlCd, btn_offhire_lineCd, btn_onhire_lineCd]);
};

/**
 * @method 
 * @name f_DisablePopUpObj 
 * @description PopUp 이미지를 비활성화 시킨다.
 */
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [btn_wrkPlCd, btn_offhire_lineCd, btn_onhire_lineCd]);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  const validRetrieve = await $c.gus.cfValidate($p, [tbl_odrRetrieveArea]);
  if (!validRetrieve) return;

  // DataSet 초기화
  scwin.f_clearDataSetAll();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfEnableBtnOnly($p, [btnCreate]);
  scwin.f_DisablePopUpObj();
  hid_odrJobType.setValue("");
  await scwin.submitExcute(sbm_retrieve);

  // tobe - asis 콤보 방식이 달라 추가함
  scwin.orginOffOrder = ds_offhireOrder.getRowJSON(0);
  scwin.orginOnOrder = ds_onhireOrder.getRowJSON(0);
};

/**
 * @method 
 * @name f_Create 
 * @description 신규
 */
scwin.f_Create = function () {
  //데이터 헤더만 가져오기 위함을 알린다. 
  //그래야 OnLoadCompleted event에서 메세지 나오지 않도록 할수 있다.
  $c.gus.cfTurnCreateFlag($p, true);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  hid_odrJobType.setValue(DGauceConstants.TB_JOB_INSERT);
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfEnableBtnOnly($p, [btnSave, btnAddRow, btnDeleteRow, btnUndoRow]);

  // PopUp 이미지 버튼을 활성화 시킨다.
  scwin.f_EnablePopUpObj();

  // DataSet 초기화
  scwin.f_clearDataSetAll();

  // 오더 조회조건 DataSet 초기화
  dma_orderQueryCondition.setEmptyValue();

  // 그리드 Editable : True
  gr_cntrInfo.setGridReadOnly(false);
  const serverDate = $c.date.getServerDateTime($p, 'yyyyMMddHHmm');
  ed_wrkDt.setValue(serverDate.slice(0, 8));
  ed_wrkHh.setValue(serverDate.slice(-4));
  ed_wrkPlCd.focus();
};

/**
 * @method 
 * @name f_update 
 * @description 수정
 */
scwin.f_update = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  hid_odrJobType.setValue(DGauceConstants.TB_JOB_UPDATE);
  $c.gus.cfDisableAllBtn($p);
  $c.gus.cfEnableBtnOnly($p, [btnCreate, btnSave, btnDelete, btnAddRow, btnDeleteRow, btnUndoRow]);

  // PopUp 이미지 버튼을 활성화 시킨다.
  scwin.f_EnablePopUpObj();

  // 그리드 Editable : True
  gr_cntrInfo.setGridReadOnly(false);
  ed_wrkPlCd.focus();
};

/**
 * @method 
 * @name f_save 
 * @description 저장
 */
scwin.f_save = async function () {
  if (hid_odrJobType.getValue() == DGauceConstants.TB_JOB_UPDATE) {
    // tobe - asis, tobe Modifiy 되는 방식이 상이하여 추가
    ds_offhireOrder.modifyRowStatus(0, scwin.checkModifiy('off'));
    ds_onhireOrder.modifyRowStatus(0, scwin.checkModifiy('on'));

    // UPDATE
    if (ds_offhireOrder.getModifiedIndex().length == 0 && ds_offhireOrderContainer.getModifiedIndex().length == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["오더정보"]);
      return false;
    }
    ;
  }

  //김재준대리 요청 같은선사 안에서만 라인 변경 할 수 있도록 제어 18 04 26 서동원 MOL->ONE는 제외 
  if (!(ed_offhire_lineCd.getValue() == "MOL" && ed_onhire_lineCd.getValue() == "ONE")) {
    if (ed_offhire_shpCoClntNm.getValue() != ed_onhire_shpCoClntNm.getValue()) {
      await $c.win.alert($p, "Off Hire 선사와 On Hire 선사가 다릅니다.");
      return false;
    }
    ;
  }
  ;

  // 필수 입력사항을 체크 
  const validChk = await scwin.f_validChk();
  if (validChk) {
    let msg = $c.data.getMessage($p, MSG_CM_CRM_001, ['Direct On/Off Hire 오더']);
    const retConfirm = await $c.win.confirm($p, msg);
    if (!retConfirm) return;
    await scwin.submitExcute(sbm_save);
  }
  ;
};

/**
 * @method 
 * @name f_delete 
 * @description 삭제
 */
scwin.f_delete = async function () {
  const odrNos = ed_onhire_odrNo.getValue() + " / " + ed_offhire_odrNo.getValue();
  const msg = $c.data.getMessage($p, MSG_CM_CRM_008, [odrNos]);
  const retConfirm = await $c.win.confirm($p, "오더번호 : " + msg);
  if (!retConfirm) return;
  $c.data.deleteRow($p, ds_offhireOrder); // Off Hire 오더
  const offRowCnt = ds_offhireOrderContainerInformation.getRowCount();
  for (let i = 0; i < offRowCnt; i++) {
    // Off Hire 오더 컨테이너 마스터 정보 
    scwin.dataList_deleteRow(ds_offhireOrderContainerInformation, i);
  }
  ;
  $c.data.deleteRow($p, ds_onhireOrder); // On Hire 오더
  const onRowCnt = ds_onhireOrderContainerInformation.getRowCount();
  for (let i = 0; i < onRowCnt; i++) {
    // On Hire 오더 컨테이너 마스터 정보
    scwin.dataList_deleteRow(ds_onhireOrderContainerInformation, i);
  }
  ;

  // tobe - asis, tobe Modifiy 되는 방식이 상이하여 추가
  scwin.initStatus = 'D';
  await scwin.submitExcute(sbm_delete);
};

/**
 * @method 
 * @name f_validChk 
 * @description 저장전 validation check - 오더 정보, 컨테이너 정보
 */
scwin.f_validChk = async function () {
  const validOdrInfo = await $c.gus.cfValidate($p, [tbl_odrInfoArea], null, true);
  if (!validOdrInfo) return false;
  const validCntrInfo = await $c.gus.cfValidate($p, [gr_cntrInfo], null, true);
  if (!validCntrInfo) return false;

  // ON HIRE 컨테이너 마스터 정보 완성
  const infoRowCnt = ds_onhireOrderContainerInformation.getRowCount();
  for (let i = 0; i < infoRowCnt; i++) {
    // 입항일시, LINE 코드 설정
    ds_onhireOrderContainerInformation.setCellData(i, "arrvlportDtm", ed_wrkDt.getValue() + ed_wrkHh.getValue()); // 입항일시 
    ds_onhireOrderContainerInformation.setCellData(i, "lineCd", ed_onhire_lineCd.getValue()); // LINE 코드 
  }
  ;

  // ON HIRE 오더 컨테이너 정보 완성
  const cntrRowCnt = ds_onhireOrderContainer.getRowCount();
  for (let i = 0; i < cntrRowCnt; i++) {
    // 입항일시  코드 설정
    ds_onhireOrderContainer.setCellData(i, "arrvlportDtm", ed_wrkDt.getValue() + ed_wrkHh.getValue()); // 입항일시 
  }
  ;
  return true;
};

/**
 * @method 
 * @name f_openPopUpOdrNo 
 * @description 오더번호검색 팝업열기
 */
scwin.f_openPopUpOdrNo = async function () {
  const args = [ed_cntrNo.getValue().trim(),
  //컨테이너번호
  hid_odrKndCd.getValue() //오더종류
  ];
  const url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_31p.xml";
  const opts = {
    popupName: "오더검색팝업",
    width: "820px",
    height: "400px"
  };
  const rtnList = await $c.win.openPopup($p, url, opts, args);
  if (rtnList == null || rtnList[0] == "N/A") return;
  ed_onhire_odrNo.setValue(rtnList[0]); // 오더번호
  ed_cntrNo.setValue(rtnList[1]); // 컨테이너번호
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList, modifyStatus;
  let retVal = true;
  switch (disGubun) {
    case 1:
      // 출발작업장 코드팝업	
      rtnList = await udc_wrkPlCd.cfCommonPopUpAsync(rtnList => {
        return rtnList;
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      await $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
      break;
    case 2:
      // Off Hire LINE 코드팝업
      rtnList = await udc_offhire_lineCd.cfCommonPopUpAsync(rtnList => {
        return rtnList;
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "Off Hire LINE,LINE코드,LINE명");
      await $c.gus.cfSetReturnValue($p, rtnList, ed_offhire_lineCd, ed_offhire_lineNm, [,, hid_offhire_shpCoClntNo, ed_offhire_shpCoClntNm]);

      // tobe - asis는 기존 값을 지우지 않지만 tobe는 지우게 되어 로직 추가함
      if (rtnList == null) {
        hid_offhire_shpCoClntNo.setValue('');
        ed_offhire_shpCoClntNm.setValue('');
        retVal = null;
      }
      ;
      if (rtnList?.[0] == 'N/A') {
        ed_offhire_lineCd.setValue(pCode);
        ed_offhire_lineNm.setValue(pName);
        retVal = false;
      }
      ;
      return retVal;
    case 3:
      // On Hire LINE 코드팝업
      rtnList = await udc_onhire_lineCd.cfCommonPopUpAsync(rtnList => {
        return rtnList;
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "On Hire LINE,LINE코드,LINE명");
      await $c.gus.cfSetReturnValue($p, rtnList, ed_onhire_lineCd, ed_onhire_lineNm, [,, hid_onhire_shpCoClntNo, ed_onhire_shpCoClntNm]);

      // tobe - asis는 기존 값을 지우지 않지만 tobe는 지우게 되어 로직 추가함
      if (rtnList == null) {
        hid_onhire_shpCoClntNo.setValue('');
        ed_onhire_shpCoClntNm.setValue('');
        retVal = null;
      }
      ;
      if (rtnList?.[0] == 'N/A') {
        ed_onhire_lineCd.setValue(pCode);
        ed_onhire_lineNm.setValue(pName);
        retVal = false;
      }
      ;
      return retVal;
  }
  ;
  return retVal;
};

/**
 * @method 
 * @name f_addRow 
 * @description 컨테이너 행추가
 */
scwin.f_addRow = function () {
  ds_cntrBasisInfo.insertRow();
  cntrTotalRows.setValue(ds_cntrBasisInfo.getRowCount());
  commTotalRows.setValue(ds_offhireOrderCommodity.getRowCount());
};

/**
 * @method 
 * @name f_deleteRow 
 * @description 컨테이너 행삭제
 */
scwin.f_deleteRow = function () {
  if (ds_cntrBasisInfo.getRowPosition() > -1) {
    const fcsIdx = ds_cntrBasisInfo.getRowPosition();
    const colIdx = gr_cntrInfo.getFocusedColumnIndex();
    scwin.f_deleteCntrBasisInfo(fcsIdx, ds_cntrBasisInfo.getCellData(fcsIdx, "cntrNo"));
    const isDelete = scwin.dataList_deleteRow(ds_cntrBasisInfo, fcsIdx);
    if (isDelete) gr_cntrInfo.setFocusedCell(fcsIdx, colIdx);
  }
  ;
  cntrTotalRows.setValue(ds_cntrBasisInfo.getRowCount());
  commTotalRows.setValue(ds_offhireOrderCommodity.getRowCount());
};

/**
 * @method 
 * @name f_undoRow 
 * @description 컨테이너 행취소
 */
scwin.f_undoRow = function () {
  const fcsIdx = ds_cntrBasisInfo.getRowPosition();
  if (fcsIdx > -1) {
    scwin.f_undoCntrBasisInfo(fcsIdx);
    const rowStatus = ds_cntrBasisInfo.getRowStatus(fcsIdx);
    switch (rowStatus) {
      case "C":
        ds_cntrBasisInfo.removeRow(fcsIdx);
        // tobe - undo시 포커스 이동이 달라 수정
        ds_cntrBasisInfo.setRowPosition(0);
        gr_cntrInfo.setFocusedCell(0, gr_cntrInfo.getFocusedColumnIndex());
        break;
      default:
        ds_cntrBasisInfo.undoRow(fcsIdx);
        break;
    }
  }
  ;
  cntrTotalRows.setValue(ds_cntrBasisInfo.getRowCount());
  commTotalRows.setValue(ds_offhireOrderCommodity.getRowCount());
};

/**
 * @method 
 * @name f_checkCntrNo 
 * @description 컨테이너번호 유효성 체크
 */
scwin.f_checkCntrNo = async function (parCntrNo) {
  let cntrNo = parCntrNo.trim();
  if (cntrNo != "" && !dscommon.cf_CheckCntrNo(cntrNo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
  }
  ;
  return true;
};

/**
 * @method 
 * @name f_retrieveCntrBasisInfo 
 * @description 컨테이너번호 입력시 컨테이너 기본정보 조회
 */
scwin.f_retrieveCntrBasisInfo = async function (cntrNo) {
  if ($c.gus.cfIsNull($p, cntrNo)) return;
  dma_condCntrBasisInfo.set("cntrNo", cntrNo);
  await scwin.submitExcute(sbm_retrieveCntrBasisInfo);
};

/**
 * @method 
 * @name f_addCntrBasisInfo 
 * @description 컨테이너 정보 추가 - 조회된 컨테이너 정보를 추가한다.
 * 오더 품명,  오더 컨테이너, 컨테이너 마스터 정보에 조회된 컨테이너 정보를 추가한다.
 */
scwin.f_addCntrBasisInfo = async function (row) {
  // tobe - 관심사 분리를 위해서 형태 수정
  const cntrBasisInfo = ds_cntrBasisInfoResult.getRowJSON(row);
  const chkProcess = async function () {
    const rowData = ds_cntrBasisInfoResult.getRowJSON(row);
    const focusIdx = ds_cntrBasisInfo.getRowPosition();

    // 작업장과 현위치 정보 확인
    if (ed_wrkPlCd.getValue() != rowData.currPosCd) {
      await $c.gus.cfAlertMsg($p, scwin.cntrCurrPosErrorMessage, [ed_wrkPlCd.getValue() || " ", rowData.cntrNo, rowData.currPosCd]);
      ds_cntrBasisInfo.setCellData(focusIdx, "cntrNo", scwin.oldCntrNo);
      scwin.gr_cntrInfo_onafteredit(focusIdx, "cntrNo");
      // 작업장 코드[@]와 컨테이너 [@]의 현위치코드[@]가 일치하지 않습니다.
      return false;
    }

    // Off Hire Line 과 Line 정보 확인
    if (ed_offhire_lineCd.getValue() != rowData.lineCd) {
      await $c.gus.cfAlertMsg($p, scwin.cntrLineErrorMessage, [ed_offhire_lineCd.getValue() || " ", rowData.cntrNo, rowData.lineCd]);
      ds_cntrBasisInfo.setCellData(focusIdx, "cntrNo", scwin.oldCntrNo);
      scwin.gr_cntrInfo_onafteredit(focusIdx, "cntrNo");
      // Off Hire Line 코드[@]와 컨테이너 [@]의 Line코드[@]가 일치하지 않습니다.
      return false;
    }

    // 화면의 일시와 비교하여 마스터보다 작은 값이 들어오지 못하도록 한다.
    let inputTime = ed_wrkDt.getValue() + ed_wrkHh.getValue();
    if (inputTime < rowData.maxArrvlPortDtm) {
      await $c.win.alert($p, "이미 만들어진 컨테이너 마스터의 값보다 작은 값이 입력 되었습니다. \n\n작업일시를 " + rowData.maxArrvlPortDtm + "보다 큰 값으로 입력해 주십시오.");
      ed_wrkDt.focus();
      return false;
    }
    ;
    return true;
  };

  // 1.1.Off Hire 오더 품명
  const offhireOrderCommodityProcess = function () {
    const commodityIdx = ds_offhireOrderCommodity.getRowPosition();
    const qty = $c.num.parseFloat($p, ds_offhireOrderCommodity.getCellData(commodityIdx, "qty"), 0);
    const odrNo = ds_offhireOrder.getCellData(ds_offhireOrder.getRowPosition(), "odrNo");
    const rowCnt = ds_offhireOrderCommodity.getRowCount();
    if (rowCnt > 0) {
      // tobe - chkOffhireOrderCommodity 에서 chkIdx로 변경
      let chkIdx = -1;
      for (let i = 0; i < rowCnt; i++) {
        const rowData = ds_offhireOrderCommodity.getRowJSON(i);
        // 컨테이너 SIZE, TYPE, F/E 가 동일한 컨테이너 데이터의 정보를 요약한다.
        if (rowData.cntrSizCd == cntrBasisInfo.cntrSizCd && rowData.cntrTypCd == cntrBasisInfo.cntrTypCd && rowData.fullEmptyClsCd == cntrBasisInfo.fullEmptyClsCd) {
          chkIdx = i;
          break;
        }
        ;
      }
      ;
      if (chkIdx > -1) {
        // 동일한 SIZE, TYPE, F/E 정보가 존재하는 경우
        let chkData = ds_offhireOrderCommodity.getRowJSON(chkIdx);
        chkData.odrNo = odrNo;
        chkData.commSeq = commodityIdx + 1; // 품명순번
        chkData.qtyUnitCd = "VAN"; // 수량단위코드	(VAN)
        chkData.qty = qty + 1; // 수량
        chkData.wrkStDt = ed_wrkDt.getValue(); // 작업시작일자
        chkData.wrkStHh = ed_wrkHh.getValue(); // 작업시작시간
        chkData.wrkEndDt = ed_wrkDt.getValue(); // 작업종료일자
        chkData.wrkEndHh = ed_wrkHh.getValue(); // 작업종료시간

        ds_offhireOrderCommodity.setRowJSON(chkIdx, chkData, true);
      } else {
        // 동일한 SIZE, TYPE, F/E 정보가 존재하지 않는 경우
        const insertIdx = ds_offhireOrderCommodity.insertRow();
        ds_offhireOrderCommodity.setRowJSON(insertIdx, {
          "odrNo": odrNo,
          // 오더번호
          "commSeq": commodityIdx + 1,
          // 품명순번
          "cntrSizCd": cntrBasisInfo.cntrSizCd,
          // 컨테이너 SIZE 
          "cntrTypCd": cntrBasisInfo.cntrTypCd,
          // 컨테이너 TYPE
          "fullEmptyClsCd": cntrBasisInfo.fullEmptyClsCd,
          // 컨테이너 F/E
          "qtyUnitCd": "VAN",
          // 수량단위코드	(VAN)
          "qty": 1,
          // 수량
          "wrkStDt": ed_wrkDt.getValue(),
          // 작업시작일자
          "wrkStHh": ed_wrkHh.getValue(),
          // 작업시작시간
          "wrkEndDt": ed_wrkDt.getValue(),
          // 작업종료일자
          "wrkEndHh": ed_wrkHh.getValue() // 작업종료시간
        }, true);
      }
      ;
    } else {
      const insertIdx = ds_offhireOrderCommodity.insertRow();
      ds_offhireOrderCommodity.setRowJSON(insertIdx, {
        "odrNo": odrNo,
        // 오더번호
        "commSeq": insertIdx + 1,
        // 품명순번
        "cntrSizCd": cntrBasisInfo.cntrSizCd,
        // 컨테이너 SIZE 
        "cntrTypCd": cntrBasisInfo.cntrTypCd,
        // 컨테이너 TYPE
        "fullEmptyClsCd": cntrBasisInfo.fullEmptyClsCd,
        // 컨테이너 F/E
        "qtyUnitCd": "VAN",
        // 수량단위코드	(VAN)
        "qty": 1,
        // 수량
        "wrkStDt": ed_wrkDt.getValue(),
        // 작업시작일자
        "wrkStHh": ed_wrkHh.getValue(),
        // 작업시작시간
        "wrkEndDt": ed_wrkDt.getValue(),
        // 작업종료일자
        "wrkEndHh": ed_wrkHh.getValue() // 작업종료시간
      }, true);
    }
    ;
  };

  // 1.2. Off Hire 오더 컨테이너
  const offhireOrderContainerProcess = function () {
    const insertIdx = ds_offhireOrderContainer.insertRow();
    ds_offhireOrderContainer.setRowJSON(insertIdx, {
      "odrNo": ds_offhireOrder.getCellData(ds_offhireOrder.getRowPosition(), "odrNo"),
      // 오더번호
      "cntrSeq": insertIdx + 1,
      // 컨테이너 순번
      "arrvlportDtm": cntrBasisInfo.arrvlportDtm,
      // 입항일시 
      "cntrNo": cntrBasisInfo.cntrNo,
      // 컨테이너번호
      "cntrSizCd": cntrBasisInfo.cntrSizCd,
      // 컨테이너 SIZE 
      "cntrTypCd": cntrBasisInfo.cntrTypCd,
      // 컨테이너 TYPE
      "fullEmptyClsCd": cntrBasisInfo.fullEmptyClsCd,
      // 컨테이너 F/E
      "dptWrkPlCd": ed_wrkPlCd.getValue(),
      // 출발지
      "arvWrkPlCd": ed_wrkPlCd.getValue(),
      // 도착지
      "wrkStDt": ed_wrkDt.getValue(),
      // 출발일자
      "wrkStHh": ed_wrkHh.getValue(),
      // 출발시간
      "wrkEndDt": ed_wrkDt.getValue(),
      // 도착일자
      "wrkEndHh": ed_wrkHh.getValue(),
      // 도착시간
      "sellLodeptCd": cntrBasisInfo.sellLodeptCd,
      // 매출물류부서코드
      "sellYn": cntrBasisInfo.sellYn,
      // 매출여부
      "wt": cntrBasisInfo.wt,
      // 중량
      "temper": cntrBasisInfo.temper,
      // 온도
      "dryYn": cntrBasisInfo.dryYn,
      // dry여부
      "cntrWtCondCd": cntrBasisInfo.cntrWtCondCd,
      // 컨테이너중량조건코드
      "dcsnYn": cntrBasisInfo.dcsnYn,
      // 확정여부
      "dcsnDt": cntrBasisInfo.dcsnDt,
      // 확정일자
      "dcsnHh": cntrBasisInfo.dcsnHh,
      // 확정시간
      "completeYn": cntrBasisInfo.completeYn,
      // 완료여부
      "completeDt": cntrBasisInfo.completeDt,
      // 완료일자
      "completeHh": cntrBasisInfo.completeHh,
      // 완료시간
      "cfsInMthdCd": cntrBasisInfo.cfsInMthdCd,
      // CFS입고방법코드
      "cfsCmpndCgshfYn": cntrBasisInfo.cfsCmpndCgshfYn,
      // CFS구내이적여부
      "cntrInsYn": cntrBasisInfo.cntrInsYn,
      // 컨테이너입력여부
      "expSealNo": cntrBasisInfo.expSealNo,
      // 수출봉인번호
      "bookingNo": cntrBasisInfo.bookingNo,
      // BOOKING번호
      "blNo": cntrBasisInfo.blNo // BL번호
    }, true);
  };

  // 2.1.On Hire 오더 품명
  const onhireOrderCommodityProcess = function () {
    const rowData = ds_onhireOrderCommodity.getRowCount();
    const fcsIdx = ds_onhireOrderCommodity.getRowPosition();
    const odrNo = ds_onhireOrder.getCellData(ds_onhireOrder.getRowPosition(), "odrNo");
    if (rowData > 0) {
      // tobe - chkOnhireOrderCommodity 에서 chkIdx 로 변경
      let chkIdx = -1;
      for (let i = 0; i < rowData; i++) {
        // 컨테이너 SIZE, TYPE, F/E 가 동일한 컨테이너 데이터의 정보를 요약한다.
        if (rowData.cntrSizCd == cntrBasisInfo.cntrSizCd && rowData.cntrTypCd == cntrBasisInfo.cntrTypCd && rowData.fullEmptyClsCd == cntrBasisInfo.fullEmptyClsCd) {
          chkIdx = i;
          break;
        }
      }
      if (chkIdx > -1) {
        // 동일한 SIZE, TYPE, F/E 정보가 존재하는 경우
        let chkData = ds_onhireOrderCommodity.getRowJSON(chkIdx);
        chkData.odrNo = odrNo; // 오더번호
        chkData.commSeq = fcsIdx + 1; // 품명순번
        chkData.qtyUnitCd = "VAN"; // 수량단위코드	(VAN)
        chkData.qty = ds_onhireOrderCommodity.getCellData(fcsIdx, "qty") + 1; // 수량
        chkData.wrkStDt = ed_wrkDt.getValue(); // 작업시작일자
        chkData.wrkStHh = ed_wrkHh.getValue(); // 작업시작시간
        chkData.wrkEndDt = ed_wrkDt.getValue(); // 작업종료일자
        chkData.wrkEndHh = ed_wrkHh.getValue(); // 작업종료시간

        ds_onhireOrderCommodity.setRowJSON(chkIdx, chkData, true);
      } else {
        // 동일한 SIZE, TYPE, F/E 정보가 존재하지 않는 경우
        const insertIdx = ds_onhireOrderCommodity.insertRow();
        ds_onhireOrderCommodity.setRowJSON(insertIdx, {
          "odrNo": odrNo,
          // 오더번호
          "commSeq": fcsIdx,
          // 품명순번
          "cntrSizCd": cntrBasisInfo.cntrSizCd,
          // 컨테이너 SIZE 
          "cntrTypCd": cntrBasisInfo.cntrTypCd,
          // 컨테이너 TYPE
          "fullEmptyClsCd": cntrBasisInfo.fullEmptyClsCd,
          // 컨테이너 F/E
          "qtyUnitCd": "VAN",
          // 수량단위코드	(VAN)
          "qty": 1,
          // 수량
          "wrkStDt": ed_wrkDt.getValue(),
          // 작업시작일자
          "wrkStHh": ed_wrkHh.getValue(),
          // 작업시작시간
          "wrkEndDt": ed_wrkDt.getValue(),
          // 작업종료일자
          "wrkEndHh": ed_wrkHh.getValue() // 작업종료시간
        }, true);
      }
    } else {
      const insertIdx = ds_onhireOrderCommodity.insertRow();
      ds_onhireOrderCommodity.setRowJSON(insertIdx, {
        "odrNo": odrNo,
        // 오더번호
        "commSeq": insertIdx + 1,
        // 품명순번
        "cntrSizCd": cntrBasisInfo.cntrSizCd,
        // 컨테이너 SIZE 
        "cntrTypCd": cntrBasisInfo.cntrTypCd,
        // 컨테이너 TYPE
        "fullEmptyClsCd": cntrBasisInfo.fullEmptyClsCd,
        // 컨테이너 F/E
        "qtyUnitCd": "VAN",
        // 수량단위코드	(VAN)
        "qty": 1,
        // 수량
        "wrkStDt": ed_wrkDt.getValue(),
        // 작업시작일자
        "wrkStHh": ed_wrkHh.getValue(),
        // 작업시작시간
        "wrkEndDt": ed_wrkDt.getValue(),
        // 작업종료일자
        "wrkEndHh": ed_wrkHh.getValue() // 작업종료시간
      }, true);
    }
    ;
  };

  // 2.2. On Hire 오더 컨테이너
  const onhireOrderContainerProcess = function () {
    const insertIdx = ds_onhireOrderContainer.insertRow();
    ds_onhireOrderContainer.setRowJSON(insertIdx, {
      "odrNo": ds_onhireOrder.getCellData(ds_offhireOrder.getRowPosition(), "odrNo"),
      // 오더번호
      "cntrSeq": insertIdx + 1,
      // 컨테이너 순번
      "arrvlportDtm": ed_wrkDt.getValue() + ed_wrkHh.getValue(),
      // 입항일시 
      "cntrNo": cntrBasisInfo.cntrNo,
      // 컨테이너번호
      "cntrSizCd": cntrBasisInfo.cntrSizCd,
      // 컨테이너 SIZE 
      "cntrTypCd": cntrBasisInfo.cntrTypCd,
      // 컨테이너 TYPE
      "fullEmptyClsCd": cntrBasisInfo.fullEmptyClsCd,
      // 컨테이너 F/E
      "dptWrkPlCd": ed_wrkPlCd.getValue(),
      // 출발지
      "arvWrkPlCd": ed_wrkPlCd.getValue(),
      // 도착지
      "wrkStDt": ed_wrkDt.getValue(),
      // 출발일자
      "wrkStHh": ed_wrkHh.getValue(),
      // 출발시간
      "wrkEndDt": ed_wrkDt.getValue(),
      // 도착일자
      "wrkEndHh": ed_wrkHh.getValue(),
      // 도착시간
      "sellLodeptCd": cntrBasisInfo.sellLodeptCd,
      // 매출물류부서코드
      "sellYn": cntrBasisInfo.sellYn,
      // 매출여부
      "wt": cntrBasisInfo.wt,
      // 중량
      "temper": cntrBasisInfo.temper,
      // 온도
      "dryYn": cntrBasisInfo.dryYn,
      // dry여부
      "cntrWtCondCd": cntrBasisInfo.cntrWtCondCd,
      // 컨테이너중량조건코드
      "dcsnYn": cntrBasisInfo.dcsnYn,
      // 확정여부
      "dcsnDt": cntrBasisInfo.dcsnDt,
      // 확정일자
      "dcsnHh": cntrBasisInfo.dcsnHh,
      // 확정시간
      "completeYn": cntrBasisInfo.completeYn,
      // 완료여부
      "completeDt": cntrBasisInfo.completeDt,
      // 완료일자
      "completeHh": cntrBasisInfo.completeHh,
      // 완료시간
      "cfsInMthdCd": cntrBasisInfo.cfsInMthdCd,
      // CFS입고방법코드
      "cfsCmpndCgshfYn": cntrBasisInfo.cfsCmpndCgshfYn,
      // CFS구내이적여부
      "cntrInsYn": cntrBasisInfo.cntrInsYn,
      // 컨테이너입력여부
      "expSealNo": cntrBasisInfo.expSealNo,
      // 수출봉인번호
      "bookingNo": cntrBasisInfo.bookingNo,
      // BOOKING번호
      "blNo": cntrBasisInfo.blNo // BL번호
    }, true);
  };

  // 2.3. On Hire 컨테이너 마스터
  const onhireOrderContainerInformationProcess = function () {
    // ON HIRE 컨테이너 정보에 컨테이너 정보 복사
    $c.gus.cf_CopyDataSetValue($p, ds_cntrBasisInfoResult, ds_onhireOrderContainerInformation);
    const fcsIdx = ds_onhireOrderContainerInformation.getRowPosition();
    const rowData = ds_onhireOrderContainerInformation.getRowJSON(fcsIdx);
    const odrNo = ds_onhireOrder.getCellData(ds_onhireOrder.getRowPosition(), "odrNo");
    rowData.arrvlportDtm = ed_wrkDt.getValue() + ed_wrkHh.getValue(); // 입항일시 
    rowData.lineCd = ed_onhire_lineCd.getValue(); // LINE 코드 
    rowData.shpCoClntNo = hid_onhire_shpCoClntNo.getValue(); // 선사거래처코드
    rowData.odrNo = odrNo; // 오더번호 
    rowData.creatOdrNo = odrNo; // 생성 오더번호 
    rowData.crryinDt = ""; // 반입일자
    rowData.crryinHh = ""; // 반입시간
    rowData.crryinGatelogNo = ""; // 반입gatelog번호		

    ds_onhireOrderContainerInformation.setRowJSON(fcsIdx, rowData, true);

    // 컨테이너 정보에 컨테이너 정보 복사
    scwin.f_CopyDataSetCntrBasisInfo();

    // 이전 컨테이너 정보 삭제
    if (scwin.oldCntrRow > 0 && !$c.gus.cfIsNull($p, scwin.oldCntrNo)) {
      scwin.f_deleteCntrBasisInfo(scwin.oldCntrRow, scwin.oldCntrNo);
    }
    ;
  };
  const retVal = await chkProcess();
  if (!retVal) return false;

  // 1.1.Off Hire 오더 품명
  offhireOrderCommodityProcess();

  // 1.2. Off Hire 오더 컨테이너
  offhireOrderContainerProcess();

  // 1.3. Off Hire 컨테이너 마스터
  // OFF HIRE 컨테이너 정보에 컨테이너 정보 복사
  $c.gus.cf_CopyDataSetValue($p, ds_cntrBasisInfoResult, ds_offhireOrderContainerInformation);

  // 2.1.On Hire 오더 품명
  onhireOrderCommodityProcess();

  // 2.2. On Hire 오더 컨테이너
  onhireOrderContainerProcess();

  // 2.3. On Hire 컨테이너 마스터
  onhireOrderContainerInformationProcess();
};

/**
 * @method 
 * @name f_deleteCntrBasisInfo 
 * @description 컨테이너 정보 삭제 - 조회된 컨테이너 정보를 삭제한다.
 * 오더 품명,  오더 컨테이너, 컨테이너 마스터 정보에 조회된 컨테이너 정보를 삭제한다.
 */
scwin.f_deleteCntrBasisInfo = function (row, cntrNo) {
  // tobe - 관심사 분리를 위해서 형태 수정
  const cntrBasisInfo = ds_cntrBasisInfo.getRowJSON(row);

  // 1.1.Off Hire 오더 품명
  const offhireOrderCommodityProcess = function () {
    const rowCnt = ds_offhireOrderCommodity.getRowCount();

    // tobe - chkOffhireOrderCommodity 를 chkIdx 로 변경
    let chkIdx = -1;
    for (let i = 0; i < rowCnt; i++) {
      const rowData = ds_offhireOrderCommodity.getRowJSON(i);

      // 컨테이너 SIZE, TYPE, F/E 가 동일한 컨테이너 데이터의 정보를 요약한다.
      if (rowData.cntrSizCd == cntrBasisInfo.cntrSizCd && rowData.cntrTypCd == cntrBasisInfo.cntrTypCd && rowData.fullEmptyClsCd == cntrBasisInfo.fullEmptyClsCd) {
        chkIdx = i;
        break;
      }
      ;
    }
    ;
    if (chkIdx > -1) {
      const qty = $c.num.parseFloat($p, ds_offhireOrderCommodity.getCellData(chkIdx, "qty"), 0);
      if (qty > 1) {
        ds_offhireOrderCommodity.setCellData(chkIdx, "qty", qty - 1);
      } else {
        scwin.dataList_deleteRow(ds_offhireOrderCommodity, chkIdx);
      }
      ;
    }
    ;
  };

  // 1.2. Off Hire 오더 컨테이너
  const offhireOrderContainerProcess = function (cntrNo) {
    const rowCnt = ds_offhireOrderContainer.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      // 컨테이너 번호가 동일한 컨테이너 정보를 삭제한다.
      if (ds_offhireOrderContainer.getCellData(i, "cntrNo") == cntrNo) {
        scwin.dataList_deleteRow(ds_offhireOrderContainer, i);
        break;
      }
      ;
    }
    ;
  };

  // 1.3. Off Hire 컨테이너 마스터
  const offhireOrderContainerInformationProcess = function (cntrNo) {
    const rowCnt = ds_offhireOrderContainerInformation.getRowCount();
    for (let i = 1; i < rowCnt; i++) {
      // 컨테이너 번호가 동일한 컨테이너 정보를 삭제한다.
      if (ds_offhireOrderContainerInformation.getCellData(i, "cntrNo") == cntrNo) {
        scwin.dataList_deleteRow(ds_offhireOrderContainerInformation, i);
        break;
      }
      ;
    }
    ;
  };

  // 2.1.Off Hire 오더 품명
  const onhireOrderCommodityProcess = function () {
    // tobe - chkOnhireOrderCommodity 를 chkIdx 로 변경
    let chkIdx = -1;
    const rowCnt = ds_onhireOrderCommodity.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      const rowData = ds_onhireOrderCommodity.getRowJSON(i);

      // 컨테이너 SIZE, TYPE, F/E 가 동일한 컨테이너 데이터의 정보를 요약한다.
      if (rowData.cntrSizCd == cntrBasisInfo.cntrSizCd && rowData.cntrTypCd == cntrBasisInfo.cntrTypCd && rowData.fullEmptyClsCd == cntrBasisInfo.fullEmptyClsCd) {
        chkIdx = i;
        break;
      }
      ;
    }
    ;
    if (chkIdx > -1) {
      const qty = $c.num.parseFloat($p, ds_onhireOrderCommodity.getCellData(chkIdx, "qty"), 0);
      if (qty > 1) {
        ds_onhireOrderCommodity.setCellData(chkIdx, "qty", qty - 1);
      } else {
        scwin.dataList_deleteRow(ds_onhireOrderCommodity, chkIdx);
      }
      ;
    }
    ;
  };

  // // 2.2. Off Hire 오더 컨테이너
  const onhireOrderContainerProcess = function (cntrNo) {
    const rowCnt = ds_onhireOrderContainer.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      // 컨테이너 번호가 동일한 컨테이너 정보를 삭제한다.
      if (ds_onhireOrderContainer.getCellData(i, "cntrNo") == cntrNo) {
        scwin.dataList_deleteRow(ds_onhireOrderContainer, i);
        break;
      }
      ;
    }
    ;
  };

  // 2.3. Off Hire 컨테이너 마스터
  const onhireOrderContainerInformationProcess = function (cntrNo) {
    const rowCnt = ds_onhireOrderContainerInformation.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      // 컨테이너 번호가 동일한 컨테이너 정보를 삭제한다.
      if (ds_onhireOrderContainerInformation.getCellData(i, "cntrNo") == cntrNo) {
        scwin.dataList_deleteRow(ds_onhireOrderContainerInformation, i);
        break;
      }
      ;
    }
    ;
  };

  // 1.1.Off Hire 오더 품명
  offhireOrderCommodityProcess();

  // 1.2. Off Hire 오더 컨테이너
  offhireOrderContainerProcess(cntrNo);

  // 1.3. Off Hire 컨테이너 마스터
  offhireOrderContainerInformationProcess(cntrNo);

  // 2.1.Off Hire 오더 품명
  onhireOrderCommodityProcess();

  // 2.2. Off Hire 오더 컨테이너
  onhireOrderContainerProcess(cntrNo);

  // 2.3. Off Hire 컨테이너 마스터
  onhireOrderContainerInformationProcess(cntrNo);
};

/**
 * @method 
 * @name f_undoCntrBasisInfo 
 * @description 컨테이너 정보 취소 - 조회된 컨테이너 정보를 취소한다.
 * 오더 품명,  오더 컨테이너, 컨테이너 마스터 정보에 조회된 컨테이너 정보를 취소한다.
 */
scwin.f_undoCntrBasisInfo = function () {
  // 1.1.Off Hire 오더 품명
  ds_offhireOrderCommodity.undoAll();

  // 1.2. Off Hire 오더 컨테이너
  ds_offhireOrderContainer.undoAll();

  // 1.3. Off Hire 컨테이너 마스터
  ds_offhireOrderContainerInformation.undoAll();

  // 2.1.Off Hire 오더 품명
  ds_onhireOrderCommodity.undoAll();

  // 2.2. Off Hire 오더 컨테이너
  ds_onhireOrderContainer.undoAll();

  // 2.3. Off Hire 컨테이너 마스터
  ds_onhireOrderContainerInformation.undoAll();
};

/**
 * @method 
 * @name f_CopyDataSetCntrBasisInfo 
 * @description 컨테이너 정보 - 조회된 컨테이너 정보를 설정한다.
 */
scwin.f_CopyDataSetCntrBasisInfo = function () {
  // 컨테이너 정보에 컨테이너 정보 복사
  const resultIdx = ds_cntrBasisInfoResult.getRowPosition();
  const resultData = ds_cntrBasisInfoResult.getRowJSON(resultIdx);
  const originIdx = ds_cntrBasisInfo.getRowPosition();
  ds_cntrBasisInfo.setRowJSON(originIdx, resultData, true);
};

/**
 * @method 
 * @name f_CopyDataSetCntrBasisInfo 
 * @description 컨테이너 정보 - 삭제
 */
scwin.f_clearCntrIndormation = function (obj, gubun) {
  if (!["line", "wrkPlCd"].includes(gubun)) return;

  // 모든 컨테이너 정보를 삭제한다.
  if (!$c.gus.cfIsNull($p, obj.getValue())) return;
  const targetDlt = [
  // 1.1.Off Hire 오더 품명
  ds_offhireOrderCommodity,
  // 1.2. Off Hire 오더 컨테이너
  ds_offhireOrderContainer,
  // 1.3. Off Hire 컨테이너 마스터
  ds_offhireOrderContainerInformation,
  // 2.1.Off Hire 오더 품명
  ds_onhireOrderCommodity,
  // 2.2. Off Hire 오더 컨테이너
  ds_onhireOrderContainer,
  // 2.3. Off Hire 컨테이너 마스터
  ds_onhireOrderContainerInformation,
  // 3. 컨테이너 마스터 정보
  ds_cntrBasisInfo];
  targetDlt.forEach(datalist => {
    let rowCnt = datalist.getRowCount();
    for (let i = rowCnt; i >= 0; i--) {
      scwin.dataList_deleteRow(datalist, i);
    }
    ;
  });
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 조회조건 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_odrRetrieveArea, null);
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name dataList_deleteRow 
 * @description dataList 행삭제
 * @param dataList
 * @param index
 */
scwin.dataList_deleteRow = function (dataList, index) {
  switch (dataList.getRowStatus(index)) {
    case "C":
      dataList.removeRow(index);
      return false;
    default:
      dataList.deleteRow(index);
      return true;
  }
  ;
};

/**
 * @method 
 * @name checkModifiy 
 * @description 저장, 삭제 전 실제 변경사항 반영
 */
scwin.checkModifiy = function (type) {
  switch (type) {
    case 'off':
      gridObj = ds_offhireOrder;
      targetObj = scwin.orginOffOrder;
      break;
    case 'on':
      gridObj = ds_onhireOrder;
      targetObj = scwin.orginOnOrder;
      break;
    default:
      break;
  }
  const colCnt = gridObj.getTotalCol();
  const rowData = gridObj.getRowJSON(0);
  for (let i = 0; i < colCnt; i++) {
    const colId = gridObj.getColumnID(i);
    if (rowData[colId] != targetObj[colId]) {
      return 'U';
    }
  }
  return scwin.initStatus;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieve:
      // TRANSACTION EVENT : tr_retrieve 에서 OnFail이벤트 발생시
      // for=tr_retrieve event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // tobe - 멀티바인딩
      scwin.setMultBindingProcess();
      scwin.ds_offhireOrder_OnLoadCompleted(ds_offhireOrder.getRowCount());
      await scwin.ds_offhireOrderContainerInformation_OnLoadCompleted(ds_offhireOrderContainerInformation.getRowCount());
      scwin.ds_onhireOrder_OnLoadCompleted(ds_onhireOrder.getRowCount());

      // TRANSACTION EVENT : sbm_retrieve 에서 OnSuccess이벤트 발생시
      // for=tr_retrieve event=OnSuccess()

      // 그리드 Editable : false
      gr_commInfo.setGridReadOnly(true);
      gr_cntrInfo.setGridReadOnly(true);
      ds_offhireOrder.initRowStatus();
      ds_offhireOrderCommodity.initRowStatus();
      ds_offhireOrderContainer.initRowStatus();
      ds_offhireOrderContainerInformation.initRowStatus();
      ds_onhireOrder.initRowStatus();
      ds_onhireOrderCommodity.initRowStatus();
      ds_onhireOrderContainer.initRowStatus();
      ds_onhireOrderContainerInformation.initRowStatus();

      // tobe - asis, tobe Modifiy 되는 방식이 상이하여 추가
      scwin.initStatus = 'R';
      break;
    case sbm_save:
      // TRANSACTION EVENT : tr_save 에서 OnFail이벤트 발생시
      // for=tr_save event=OnFail() 
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // TRANSACTION EVENT : tr_save 에서 OnSuccess이벤트 발생시
      // for=tr_save event=OnSuccess()>
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      scwin.f_Retrieve();
      break;
    case sbm_delete:
      // TRANSACTION EVENT : tr_delete 에서 OnFail이벤트 발생시
      // for=tr_delete event=OnFail()>   
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // TRANSACTION EVENT : tr_delete 에서 OnSuccess이벤트 발생시
      // for=tr_delete event=OnSuccess()>
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_011, ["Direct On/Off Hire 오더 [ " + ed_onhire_odrNo.getValue() + " / " + ed_offhire_odrNo.getValue() + " ]"]); // 삭제되었습니다.
      scwin.f_Create();
      break;
    case sbm_retrieveCntrBasisInfo:
      // TRANSACTION EVENT : tr_retrieveCntrBasisInfo 에서 OnFail이벤트 발생시
      // for=tr_retrieveCntrBasisInfo event=OnFail()>  
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      await scwin.ds_cntrBasisInfoResult_OnLoadCompleted(ds_cntrBasisInfoResult.getRowCount());
      break;
  }
};

/**
 * @method 
 * @name ds_cntrBasisInfoResult_OnLoadCompleted 
 * @description 컨테이너 마스터 조회 DataSet
 */
scwin.ds_cntrBasisInfoResult_OnLoadCompleted = async function (rowCnt) {
  if (rowCnt <= 0) return;
  const rowData = ds_cntrBasisInfoResult.getRowJSON(0);
  ed_wrkPlCd.setValue(rowData.currPosCd);
  await scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'T', 'F');

  // tobe - tobe에선 팝업 시 기존 값을 지움. asis의 경우 유지됨 동작 차이로 이후 로직도 달라져 추가함
  const oldLineVal = {
    code: ed_offhire_lineCd.getValue(),
    name: ed_offhire_lineNm.getValue()
  };
  let afterStatus = oldLineVal.code == rowData.lineCd ? 'R' : 'U';
  const retPopup = await scwin.f_openCommonPopUp(2, rowData.lineCd, ed_offhire_lineNm.getValue(), 'T', 'F');
  if (retPopup == false) {
    ds_offhireOrder.undoRow(0);
    ed_offhire_lineCd.setValue(oldLineVal.code);
    ed_offhire_lineNm.setValue(oldLineVal.name);
    afterStatus = 'R';
  } else {
    ed_offhire_lineCd.setValue(rowData.lineCd);
  }
  ds_offhireOrder.modifyRowStatus(0, afterStatus);
  await scwin.f_addCntrBasisInfo(ds_cntrBasisInfoResult.getRowPosition());
};

/**
 * @method 
 * @name ds_cntrBasisInfoResult_OnLoadCompleted 
 * @description OFF HIRE 컨테이너 정보 DataSet
 * @asis for=ds_offhireOrder event=OnLoadCompleted(rowCnt)
 */
scwin.ds_offhireOrder_OnLoadCompleted = function (rowCnt) {
  const odrNo = ds_offhireOrder.getCellData(ds_offhireOrder.getRowPosition(), "odrNo");
  if (rowCnt > 0 && !$c.gus.cfIsNull($p, odrNo)) {
    ed_offhire_odrNo.setValue(odrNo);
  }
  ;
};

/**
 * @event 
 * @name ds_offhireOrder_onrowpositionchange 
 * @description OFF HIRE 컨테이너 행의 인덱스가 변경된 경우에 발생
 * @asis for=ds_offhireOrder event=OnRowPosChanged(row)
 */
scwin.ds_offhireOrder_onrowpositionchange = function (info) {
  $c.gus.cfPrepareObjectHidVal($p, ds_offhireOrder, info.newRowIndex, ["lineCd", "lineNm", "shpCoClntNo", "shpCoClntNm", "dptWrkPlCd", "dptWrkPlNm", "arvWrkPlCd", "arvWrkPlNm", "wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh"], [ed_offhire_lineCd, ed_offhire_lineNm, hid_offhire_shpCoClntNo, ed_offhire_shpCoClntNm, ed_wrkPlCd, ed_wrkPlNm, ed_wrkPlCd, ed_wrkPlNm, ed_wrkDt, ed_wrkHh, ed_wrkDt, ed_wrkHh]);
};

/**
 * @method 
 * @name ds_onhireOrder_OnLoadCompleted 
 * @description ON HIRE 컨테이너 정보 DataSet
 * @asis for=ds_onhireOrder event=OnLoadCompleted(rowCnt)
 */
scwin.ds_onhireOrder_OnLoadCompleted = function (rowCnt) {
  const odrNo = ds_onhireOrder.getCellData(ds_onhireOrder.getRowPosition(), "odrNo");
  if (rowCnt > 0 && !$c.gus.cfIsNull($p, odrNo)) {
    ed_onhire_odrNo.setValue(odrNo);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfEnableBtnOnly($p, [btnCreate, btnUpdate]);
  }
  ;
};

/**
 * @event 
 * @name ds_onhireOrder_onrowpositionchange 
 * @description ON HIRE 컨테이너 행의 인덱스가 변경된 경우에 발생
 * @asis for=ds_onhireOrder event=OnRowPosChanged(row)
 */
scwin.ds_onhireOrder_onrowpositionchange = function (info) {
  $c.gus.cfPrepareObjectHidVal($p, ds_onhireOrder, info.newRowIndex, ["lineCd", "lineNm", "shpCoClntNo", "shpCoClntNm", "dptWrkPlCd", "dptWrkPlNm", "arvWrkPlCd", "arvWrkPlNm", "wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh"], [ed_onhire_lineCd, ed_onhire_lineNm, hid_onhire_shpCoClntNo, ed_onhire_shpCoClntNm, ed_wrkPlCd, ed_wrkPlNm, ed_wrkPlCd, ed_wrkPlNm, ed_wrkDt, ed_wrkHh, ed_wrkDt, ed_wrkHh]);
};

/**
 * @event 
 * @name ds_offhireOrderContainerInformation_OnLoadCompleted 
 * @description OFF HIRE 컨테이너 정보 DataSet
 * @asis for=ds_offhireOrderContainerInformation event=OnLoadCompleted(rowCnt)
 */
scwin.ds_offhireOrderContainerInformation_OnLoadCompleted = async function (rowCnt) {
  // Off Hire 컨테이너 마스터 정보를 컨테이너 목록에 표시
  if (rowCnt > 0) {
    // 컨테이너 정보에 OFF HIRE 컨테이너 정보 복사
    $c.gus.cf_CopyDataSetValue($p, ds_offhireOrderContainerInformation, ds_cntrBasisInfo);
    // tobe - 초기값 설정이 정확히 설정되지 않아 추가함
    ds_cntrBasisInfo.setJSON(ds_cntrBasisInfo.getAllJSON(), false);
    ds_cntrBasisInfo.initRowStatus();
  }
  ;
};

/**
 * @method 
 * @name setMultBindingProcess 
 * @description 멀티 바인딩 구현
 */
scwin.setMultBindingProcess = function () {
  const offData = ds_offhireOrder.getRowJSON(0);
  const onData = ds_onhireOrder.getRowJSON(0); // 우선순위

  ed_wrkPlCd.setValue(onData.dptWrkPlCd || offData.dptWrkPlCd || "");
  ed_wrkPlNm.setValue(onData.dptWrkPlNm || offData.dptWrkPlNm || "");
  ed_wrkPlCd.setValue(onData.arvWrkPlCd || offData.arvWrkPlCd || "");
  ed_wrkPlNm.setValue(onData.arvWrkPlNm || offData.arvWrkPlNm || "");
  ed_wrkDt.setValue(onData.wrkStDt || offData.wrkStDt || "");
  ed_wrkHh.setValue(onData.wrkStHh || offData.wrkStHh || "");
  ed_wrkDt.setValue(onData.wrkEndDt || offData.wrkEndDt || "");
  ed_wrkHh.setValue(onData.wrkEndHh || offData.wrkEndHh || "");
};

/**
 * @event 
 * @name dma_hireOrder_onmodelchange 
 * @description 
 */
scwin.dma_hireOrder_onmodelchange = function (info) {
  let targetKeys;
  switch (info.key) {
    case "wrkPlCd":
      targetKeys = ['dptWrkPlCd', 'arvWrkPlCd'];
      break;
    case "wrkPlNm":
      targetKeys = ['dptWrkPlNm', 'arvWrkPlNm'];
      break;
    case "wrkDt":
      targetKeys = ['wrkStDt', 'wrkEndDt'];
      break;
    case "wrkHh":
      targetKeys = ['wrkStHh', 'wrkEndHh'];
      break;
    default:
      return;
  }
  targetKeys.forEach(key => {
    ds_offhireOrder.setCellData(0, key, info.newValue);
    ds_onhireOrder.setCellData(0, key, info.newValue);
  });
};

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null && this.getRowCount() > 0) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'cntrNo', 0, gr_cntrInfo, cntrTotalRows);
    scwin.gridSetFocus(this, 'cntrSizCd', 0, gr_commInfo, commTotalRows);
  }
  ;
};

/**
 * @method 
 * @name dlt_oninsertrow 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.dlt_oninsertrow = function (info) {
  if (Object.keys(info.insertedDataObj).length < 1) return;
  const rowIdx = Object.keys(info.insertedDataObj)[0] ?? 0;
  this.setRowPosition(rowIdx);
  scwin.gridSetFocus(this, 'cntrNo', rowIdx, gr_cntrInfo, cntrTotalRows);
  scwin.gridSetFocus(this, 'cntrSizCd', rowIdx, gr_commInfo, commTotalRows);
};

/**
 * @method 
 * @name dlt_onremoverow 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.dlt_onremoverow = function (info) {
  if (Object.keys(info.removedDataObj).length < 1) return;
  const rowIdx = Number(Object.keys(info.removedDataObj)[0]) - 1;
  const clacIdx = rowIdx == -1 ? 0 : rowIdx;
  this.setRowPosition(clacIdx);
  scwin.gridSetFocus(this, 'cntrNo', clacIdx, gr_cntrInfo, cntrTotalRows);
  scwin.gridSetFocus(this, 'cntrSizCd', clacIdx, gr_commInfo, commTotalRows);
};

/**
 * @method 
 * @name gridSetFocus 
 * @description dataList 이벤트 후 그리드 실제 포커스 처리
 */
scwin.gridSetFocus = function (dataList, defaultCol, rowIndex, targetGrid, targetRows) {
  if (dataList != targetGrid._dataList) return;
  const focusCol = targetGrid.getFocusedColumnID() ?? defaultCol;
  targetGrid.setFocusedCell(rowIndex, focusCol);
  targetRows.setValue(dataList.getRowCount());
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_cntrInfo_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 */
scwin.gr_cntrInfo_oneditend = function (rowIndex, columnIndex, value) {
  scwin.oldData = gr_cntrInfo._dataList.getCellData(rowIndex, columnIndex);
};

/**
 * @event 
 * @name gr_cntrInfo_oneditend 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 */
scwin.gr_cntrInfo_onafteredit = async function (rowIndex, columnIndex, value) {
  const colId = gr_cntrInfo.getColumnID(columnIndex);
  const rowData = gr_cntrInfo._dataList.getRowJSON(rowIndex);
  switch (colId) {
    case "cntrNo":
      //컨테이너번호
      if (rowData[colId] != scwin.oldData) {
        //컨테이너번호 유효성체크
        const chk = await scwin.f_checkCntrNo(rowData[colId]);
        if (!chk) return;
        const rowCnt = ds_cntrBasisInfo.getRowCount();
        for (let i = 0; i < rowCnt; i++) {
          if (ds_cntrBasisInfo.getCellData(i, "cntrNo") == rowData[colId]) {
            if (rowIndex != i && ds_cntrBasisInfo.getRowStatus(i) != 'D') {
              //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
              await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["컨테이너목록", i + 1, "컨테이너번호"]);
              ds_cntrBasisInfo.setCellData(rowIndex, "cntrNo", scwin.olddata);
              return;
            }
          }
        }
        scwin.oldCntrNo = scwin.olddata;
        scwin.oldCntrRow = rowIndex;
        scwin.f_retrieveCntrBasisInfo(rowData[colId]);
      }
      break;
  }
};

/**
 * @event 
 * @name ed_cntrNo_onblur 
 * @description [컨테이너번호] 포커스를 잃었을 때 발생한다.
 */
scwin.ed_cntrNo_onblur = function (e) {
  if (!$c.gus.cfIsNull($p, ed_cntrNo.getValue().trim())) {
    scwin.f_openPopUpOdrNo();
  }
};

/**
 * @event 
 * @name btn_cntrNo_onclick 
 * @description [컨테이너번호] 검색 버튼 클릭 시 발생
 */
scwin.btn_cntrNo_onclick = function (e) {
  scwin.f_openPopUpOdrNo();
};

/**
 * @event 
 * @name btn_refresh_onclick 
 * @description [초기화] 버튼 클릭 시 발생
 */
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description [조회] 버튼 클릭 시 발생
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name udc_wrkPlCd_onblurCodeEvent 
 * @description [작업장] code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_wrkPlCd_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1, true);

  // 작업장이 변경시 해당 작업장으로 현위치가 설정된 컨테이너 삭제	
  scwin.f_clearCntrIndormation(ed_wrkPlCd, "wrkPlCd");
};

/**
 * @event 
 * @name udc_wrkPlCd_onviewchangeNameEvent 
 * @description [작업장] name 컴포넌트의 value가 변경되었을 때 발생한다
 */
scwin.udc_wrkPlCd_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};

/**
 * @event 
 * @name udc_wrkPlCd_onclickEvent 
 * @description [작업장] 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_wrkPlCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_offhire_lineCd_onblurCodeEvent 
 * @description [Off Hire Line] code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_offhire_lineCd_onblurCodeEvent = async function (e) {
  const codeObj = ed_offhire_lineCd;
  await scwin.f_chkOpenCommonPopUp(codeObj, ed_offhire_lineNm, 2, true);
  if ($c.gus.cfIsNull($p, codeObj.getValue().trim())) {
    $c.gus.cfInitObjects($p, [ed_offhire_lineCd, ed_offhire_lineNm, ed_offhire_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [codeObj]);
  }
  ;

  // OFF LINE이 변경시 해당 LINE으로 LINE이 설정된 컨테이너 삭제
  scwin.f_clearCntrIndormation(codeObj, "line");
};

/**
 * @event 
 * @name udc_offhire_lineCd_onviewchangeNameEvent 
 * @description [Off Hire Line] name 컴포넌트의 value가 변경되었을 때 발생한다
 */
scwin.udc_offhire_lineCd_onviewchangeNameEvent = async function (info) {
  const nameObj = ed_offhire_lineNm;
  await scwin.f_chkOpenCommonPopUp(nameObj, ed_offhire_lineCd, 2, false);
  if ($c.gus.cfIsNull($p, nameObj.getValue().trim())) {
    $c.gus.cfInitObjects($p, [ed_offhire_lineCd, ed_offhire_lineNm, ed_offhire_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [nameObj]);
  }
  ;
};

/**
 * @event 
 * @name udc_offhire_lineCd_onclickEvent 
 * @description [Off Hire Line] 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_offhire_lineCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(2, ed_offhire_lineCd.getValue(), ed_offhire_lineNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name udc_offhire_lineCd_onblurCodeEvent 
 * @description [On Hire Line] code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_onhire_lineCd_onblurCodeEvent = async function (e) {
  const codeObj = ed_onhire_lineCd;
  await scwin.f_chkOpenCommonPopUp(codeObj, ed_onhire_lineNm, 3, true);
  if ($c.gus.cfIsNull($p, codeObj.getValue().trim())) {
    $c.gus.cfInitObjects($p, [codeObj, ed_onhire_lineNm, ed_onhire_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [codeObj]);
  }
};

/**
 * @event 
 * @name udc_offhire_lineCd_onviewchangeNameEvent 
 * @description [On Hire Line] name 컴포넌트의 value가 변경되었을 때 발생한다
 */
scwin.udc_onhire_lineCd_onviewchangeNameEvent = async function (info) {
  const nameObj = ed_onhire_lineNm;
  await scwin.f_chkOpenCommonPopUp(nameObj, ed_onhire_lineCd, 3, false);
  if ($c.gus.cfIsNull($p, nameObj.getValue().trim())) {
    $c.gus.cfInitObjects($p, [ed_onhire_lineCd, ed_onhire_lineNm, ed_onhire_shpCoClntNm]);
    $c.gus.cfInitHidVal($p, [nameObj]);
  }
};

/**
 * @event 
 * @name udc_onhire_lineCd_onclickEvent 
 * @description [On Hire Line] 검색 버튼 클릭 시 발생한다.
 */
scwin.udc_onhire_lineCd_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(3, ed_onhire_lineCd.getValue(), ed_onhire_lineNm.getValue(), 'F', 'F');
};

/**
 * @event 
 * @name btn_refresh_onclick 
 * @description [신규] 버튼 클릭 시 발생
 */
scwin.btnCreate_onclick = function (e) {
  scwin.f_Create();
};

/**
 * @event 
 * @name btn_refresh_onclick 
 * @description [수정] 버튼 클릭 시 발생
 */
scwin.btnUpdate_onclick = function (e) {
  scwin.f_update();
};

/**
 * @event 
 * @name btn_refresh_onclick 
 * @description [저장] 버튼 클릭 시 발생
 */
scwin.btnSave_onclick = function (e) {
  scwin.f_save();
};

/**
 * @event 
 * @name btnDelete_onclick 
 * @description [저장] 버튼 클릭 시 발생
 */
scwin.btnDelete_onclick = function (e) {
  scwin.f_delete();
};

/**
 * @method 
 * @name seqFormat 
 * @description Seq컬럼 포맷
 */
scwin.gr_cntrInfo_formatter = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case 'aeq':
      return rowIndex + 1;
    default:
      return;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_odrRetrieveArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',style:'width: 100px;',allowChar:'a-zA-Z0-9',maxlength:'11',ref:'data:dma_orderQueryCondition.cntrNo',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag','ev:onblur':'scwin.ed_cntrNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cntrNo',style:'',title:'Search',type:'button','ev:onclick':'scwin.btn_cntrNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Off Hire 오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_offhire_odrNo',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'a-zA-Z0-9',ref:'data:dma_orderQueryCondition.offhireOdrNo',title:'오더번호',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'On Hire 오더번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_onhire_odrNo',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',maxlength:'13',ref:'data:dma_orderQueryCondition.onhireOdrNo',title:'오더번호',mandatory:'true',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더정보 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_odrInfoArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'width:250px;',codeId:'ed_wrkPlCd',objTypeCode:'data',maxlengthCode:'4',nameId:'ed_wrkPlNm',btnId:'btn_wrkPlCd',maxlengthName:'50',objTypeName:'data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',validTitle:'작업장',id:'udc_wrkPlCd','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent',selectID:'retrieveWrkPlInfo2','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',refDataCollection:'dma_hireOrder',code:'wrkPlCd',name:'wrkPlNm',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wrkDt',style:'',objType:'data',validExp:'yes:date=YYYYMMDD&length=8',delimiter:'/',useEditFormat:'true',ref:'data:dma_hireOrder.wrkDt',title:'작업일자',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_wrkHh',placeholder:'  :  ',style:'width: 50px;',objType:'data',mandatory:'true',editFormat:'##:##',ref:'data:dma_hireOrder.wrkHh',dataType:'time',displayFormat:'HH:mm',title:'작업시간',maxByteLength:'4',byteCheckIgnoreChar:':',validateOnInput:'true',minLength:'4',validExp:'작업시간:yes:date=HHmm&amp;length=4'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Off Hire Line',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_offhire_lineCd',class:'',code:'lineCd',codeId:'ed_offhire_lineCd','ev:onblurCodeEvent':'scwin.udc_offhire_lineCd_onblurCodeEvent',id:'udc_offhire_lineCd',mandatoryCode:'true',maxlengthCode:'5',name:'lineNm',nameId:'ed_offhire_lineNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'ds_offhireOrder',selectID:'retrieveLineInfoList',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',style:'width:250px;',validTitle:'Off Hire LINE','ev:onclickEvent':'scwin.udc_offhire_lineCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_offhire_lineCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'On Hire Line',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'width:250px;',codeId:'ed_onhire_lineCd',btnId:'btn_onhire_lineCd',id:'udc_onhire_lineCd',objTypeCode:'data',maxlengthCode:'5',UpperFlagCode:'1',nameId:'ed_onhire_lineNm',objTypeName:'data',validTitle:'On Hire LINE','ev:onviewchangeNameEvent':'scwin.udc_onhire_lineCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_onhire_lineCd_onclickEvent',selectID:'retrieveLineInfoList',refDataCollection:'ds_onhireOrder',code:'lineCd',name:'lineNm',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_onhire_lineCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Off Hire 선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_offhire_shpCoClntNm',placeholder:'',style:'width:250px;',objType:'key',readOnly:'true',ref:'data:ds_offhireOrder.shpCoClntNm'}},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'On Hire 선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_onhire_shpCoClntNm',placeholder:'',style:'width:250px;',readOnly:'true',ref:'data:ds_onhireOrder.shpCoClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Off Hire 매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'2',id:'rd_offhire_sellYn',ref:'data:ds_offhireOrder.sellYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'On Hire 매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'2',id:'rd_onhire_sellYn',ref:'data:ds_onhireOrder.sellYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:'grd_section1'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'품명목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_commInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_offhireOrderCommodity',id:'gr_commInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'9',visibleRowNumFix:'true',gridName:'품명목록',sortable:'false',rowStatusVisible:'true',rowStatusWidth:'15',syncRowPositionOption:'style',dataName:'품명목록',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'column10',inputType:'text',removeBorderStyle:'false',value:'오더번호',width:'150',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'column9',inputType:'text',removeBorderStyle:'false',value:'품명순번',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column21',inputType:'text',value:'품명코드',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Size',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Type',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'F/E',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'수량',width:'80',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'150',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'select',width:'80',readOnly:'true',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'select',width:'80',readOnly:'true',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'select',width:'80',readOnly:'true',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'80',readOnly:'true',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column23',displayMode:'label',expression:'SUM(\'qty\')',value:'',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'commTotalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',templateYn:'N',btnPlusYn:'Y',btnUser:'Y',gridID:'gr_cntrInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrBasisInfo',id:'gr_cntrInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',gridName:'컨테이너목록','ev:oneditend':'scwin.gr_cntrInfo_oneditend',rowStatusVisible:'true',rowStatusWidth:'15',validExp:'cntrNo:컨테이너번호:yes,cntrSizCd:Size:yes,cntrTypCd:Type:yes,fullEmptyClsCd:F/E:yes',dataName:'컨테이너목록',validFeatures:'ignoreStatus=no','ev:onafteredit':'scwin.gr_cntrInfo_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'Seq',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column21',inputType:'text',value:'컨테이너번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Size',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Type',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'F/E',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'aeq',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true',customFormatter:'scwin.gr_cntrInfo_formatter'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'150',mandatory:'true',allowChar:'a-zA-Z0-9',maxLength:'11'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'select',width:'100',mandatory:'true',readOnly:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'select',width:'80',mandatory:'true',readOnly:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'select',width:'100',mandatory:'true',readOnly:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'cntrTotalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'f_addRow',rowDelFunction:'f_deleteRow',cancelFunction:'f_undoRow',cancelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btnAddRow',btnRowDelObj:'btnDeleteRow',btnCancelObj:'btnUndoRow',btnDelYn:'N',EngYn:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btnCreate',label:'신규',style:'','ev:onclick':'scwin.btnCreate_onclick',objType:'ctrlBtn',userAuth:'C'}},{T:1,N:'w2:button',A:{class:'btn',id:'btnUpdate',label:'수정',style:'',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btnUpdate_onclick'}},{T:1,N:'w2:button',A:{class:'btn',id:'btnSave',label:'저장',style:'',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btnSave_onclick'}},{T:1,N:'w2:button',A:{class:'btn',id:'btnDelete',label:'삭제',style:'',objType:'ctrlBtn',userAuth:'D','ev:onclick':'scwin.btnDelete_onclick'}}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'xf:input',A:{id:'hid_offhire_shpCoClntNo',style:'',ref:'data:ds_offhireOrder.shpCoClntNo'}},{T:1,N:'xf:input',A:{id:'hid_odrKndCd',ref:'',style:''}},{T:1,N:'xf:input',A:{id:'hid_odrJobType',ref:'',style:''}},{T:1,N:'xf:input',A:{id:'hid_onhire_shpCoClntNo',ref:'data:ds_onhireOrder.shpCoClntNo',style:''}},{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',progressBarSwitch:'Y',validTitle:'',nameId:'',style:'width:%; height:px; ',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',id:'udc_comomCd'}}]}]}]}]}]})