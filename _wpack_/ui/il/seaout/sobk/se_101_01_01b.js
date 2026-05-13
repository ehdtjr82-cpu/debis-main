/*amd /ui/il/seaout/sobk/se_101_01_01b.xml 303602 339a67053fb2984421b27f943c525cc533920b988ccedd3f3fcebadbe02d7e7a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bkEtd',name:'ETD',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bkbltype',name:'Bltype',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerBookingList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carrierBkNo',name:'선사부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reDt',name:'REQUEST DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etRsltsDt',name:'RESULT DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupNo',name:'GROUP NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docCust',name:'SHIPPER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docTel',name:'SHIPPER TEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docSeq',name:'계약서 순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docMan',name:'SHIPPER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custTel',name:'CUSTOMER TEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custSeq',name:'출하구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custMan',name:'CUSTOMER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractno',name:'거래처계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'facCd',name:'FACTORY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'facNm',name:'출하공장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'facTel',name:'FACTORY TEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'facAttn',name:'FACTORY PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'facMan',name:'FACTORY PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liner',name:'예상선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linernm',name:'선사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linerTel',name:'LINER TEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linerattn',name:'LINER PIC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linerattnnm',name:'LINER PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vslCd',name:'VESSEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vslNm',name:'VESSEL NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voy',name:'VOYAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesCd',name:'영업사원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'영업사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodCd',name:'Loading 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodNm',name:'적재항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disCd',name:'DISCHARGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disNm',name:'DISCHARGE NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvCd',name:'Delivery코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dlvNm',name:'Delivery 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkArea',name:'AREA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkAreanm',name:'AREA NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkEtd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkEta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payTerm',name:'FREIGHT TERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfs',name:'CARGO TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcType',name:'SERVICE TERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mark',name:'SHIPPING MARK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'PACKAGE',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitnm',name:'Unit 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'MT',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'msr',name:'용적',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bkbltype',name:'Bltype',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype1',name:'CONTAINER TYPE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype2',name:'CONTAINER TYPE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype3',name:'CONTAINER TYPE3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype4',name:'CONTAINER TYPE4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntqty1',name:'CONTAINER QTY1',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntqty2',name:'CONTAINER QTY2',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntqty3',name:'CONTAINER QTY3',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cntqty4',name:'CONTAINER QTY4',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'remark1',name:'비고1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark2',name:'비고2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark3',name:'비고3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iptYn',name:'중요여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'triYn',name:'중계여부(대우)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'triItemType',name:'중계화물타입(대우)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'triWrkDesc',name:'중계작업참조',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeDay',name:'FREEDAY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'custTeam',name:'고객사팀명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsNm',name:'CFS작업지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shrNm',name:'SHR작업지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClosingDt',name:'서류마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docClosingTime',name:'서류마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClosingDt',name:'CARGO마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClosingTime',name:'CARGO마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts1VsslCd',name:'환적1선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts1VsslNm',name:'환적1선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts1Voy',name:'환적1항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts1PortCd',name:'환적1항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts1PortNm',name:'환적1항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts1Eta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts1Etd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts2VsslCd',name:'환적2선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts2VsslNm',name:'환적2선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts2Voy',name:'환적2항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts2PortCd',name:'환적2항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts2PortNm',name:'환적2항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts2Eta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts2Etd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refBuyingAmt',name:'참조BUYING',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'refSellingAmt',name:'참조SELLING',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custTeamPic',name:'고객담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remarkMaster',name:'Remark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docPic',name:'DOC PIC NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoPic',name:'CARGO PIC NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docPicNm',name:'DOC PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoPicNm',name:'CARGO PIC NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntYn',name:'관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkPic',name:'BK담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkAgent',name:'PARTNER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkAgentnm',name:'PARTNER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkIncoterm',name:'INCOTERMS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkPicNm',name:'BK담당자  NAME',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerDoorOrder',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_containerDoorOrder_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupNo',name:'GROUP NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doordt',name:'ORDER DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkdoorseq',name:'ORDER SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transcd',name:'운송구분(GRP_CD:EQ01)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transnm',name:'운송사 NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcity',name:'출발지 CODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcitynm',name:'출발지 NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fdt',name:'출발지 도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorcd',name:'도어코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doornm',name:'DOOR명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcity',name:'도착지 CODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcitynm',name:'도착지 NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tdt',name:'도착지 도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closingdt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'발송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orderType',name:'입고구분 Order Send : 1, Odrer Send del :2',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'internalTyp',name:'1:내부부서,2:거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'결과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'결과메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_houseblList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgno',name:'BOOKING  NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbkgseq',name:'BOOKING  SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hheta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhc1',name:'CONSIGNEE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt1type',name:'CONTAINER TYPE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt2type',name:'CONTAINER TYPE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt3type',name:'CONTAINER TYPE3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhcnt4type',name:'CONTAINER TYPE4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhpkg',name:'FACKAGE',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhgwgt',name:'WEIGHT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hhmsr',name:'MEASURE',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autono',name:'B/L TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhio',name:'IN/OUT 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbltype',name:'Cargo type',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bookingHbl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'BOOKING SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupNo',name:'BOOKING GROUP NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oblno',name:'B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerBookingCont',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_containerBookingCont_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkdoorseq',name:'BOOKING ORDER SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntno',name:'CONTAINER NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnttype',name:'CONTAINER TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntseal1',name:'CONTAINER NO1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntseal2',name:'CONTAINER NO2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntpkg',name:'CONTAINER PKG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntwgt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntmsrt',name:'MEASUREMENT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrDate',name:'CNTR DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsInDate',name:'CFS DATE(IN)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsWrkDate',name:'CFS DATE(WRK)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realCntrNo',name:'CONTAINER NO',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerDoorOrderQty',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_containerDoorOrderQty_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkNo',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bkdoorseq',name:'BOOKING ORDER SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtytype',name:'CONTAINER TYPE OR LCL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자 ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'Trans',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'Car',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDate',name:'DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDt',name:'DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclQty',name:'V.QTY',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'realQtytype',name:'MGNT',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_containerType'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveCtrtClnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scDate',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDtYn',name:'ctrtDtYn default :1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드 ZZA : 해운권역 , ZZB : 항공권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'in/out',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'bizDivCntrYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'bizDivBulkYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizDomInatYn',name:'국제 여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'계약담당자 사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'계약담당자 사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'계약등록점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'labelInfo',name:'계약번호라벨텍스트',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bkNo',name:'부킹번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveOrder'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bkdoorseq',name:'ORDER SEQ',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bkNo',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_doorOrderQtyCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_doorOrderQtyCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customerInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_containerReceive'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerReceive',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_doorGridType'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_doorGridType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_containerGridType'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerGridType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_departmentInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_departmentInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_containerType',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_containerType',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_containerType_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_containerReceive',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_containerReceive',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_containerReceive_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_doorGridType',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_doorGridType',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_doorGridType_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_doorOrderQtyCheck',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_doorOrderQtyCheck',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_doorOrderQtyCheck_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_containerGridType',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_containerGridType',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_containerGridType_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_customerInfo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_customerInfo',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_customerInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_departmentInfo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_departmentInfo',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_departmentInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sobk.RetrieveContainerBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_retrieve", "key": "IN_DS1"}, {"id": "ds_containerBookingList", "key": "OUT_DS1"}, {"id": "ds_containerDoorOrder, "key": "OUT_DS2"}, {"id": "ds_houseblList", "key": "OUT_DS3"}]',target:'data:json,[{"id": "ds_containerBookingList", "key": "OUT_DS1"}, {"id": "ds_containerDoorOrder", "key": "OUT_DS2"}, {"id": "ds_houseblList", "key": "OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtClnt',action:'/il.comm.code.RetrieveInternationalContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_retrieveCtrtClnt", "key": "IN_DS1"}, {"id": "ds_ctrtNo", "key": "OUT_DS1"}]',target:'data:json,{"id": "ds_ctrtNo", "key": "OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtClnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievebookingNo',action:'/il.seaout.sobk.RetrieveContainerBookingNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_retrieve", "key": "IN_DS1"}, {"id": "ds_retrieveNo", "key": "OUT_DS1"}]',target:'data:json,{"id": "ds_retrieveNo", "key": "OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievebookingNo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievebookingHbl',action:'/il.seaout.sobk.RetrieveBookingHblCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "ds_retrieve", "key": "IN_DS1"}, {"id": "ds_bookingHbl", "key": "OUT_DS1"}]',target:'data:json,{"id": "ds_bookingHbl", "key": "OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievebookingHbl_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_containerBookingList","key":"IN_DS1"},{"action":"modified","id":"ds_containerDoorOrder","key":"IN_DS2"},{"action":"modified","id":"ds_containerDoorOrderQty","key":"IN_DS3"},{"action":"modified","id":"ds_containerBookingCont","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_containerBookingList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOrder',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id": "dma_retrieveOrder", "key": "IN_DS1"}, {"id": "ds_containerDoorOrderQty", "key": "OUT_DS1"} , {"id": "ds_containerBookingCont", "key": "OUT_DS2"}]',target:'data:json,[{"id": "ds_containerDoorOrderQty", "key": "OUT_DS1"} , {"id": "ds_containerBookingCont", "key": "OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveOrder_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOrderSend',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_containerDoorOrder","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOrderSend_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = "";

// 사용자 정보 가져오기
scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -2);
scwin.params = $c.data.getParameter($p);
scwin.p_linkcheck = scwin.params.linkcheck; //  0:default,1:Booking Search,2:House Search,3:Master Search,4: Booking,5:House,6:master
scwin.p_kcomcd = scwin.params.kcomcd;
scwin.p_blno = scwin.params.blno;
scwin.p_mhno = scwin.params.mhno;
scwin.p_bkno = scwin.params.bkno;
scwin.now = new Date();
scwin.hof = String(scwin.now.getHours()).padStart(2, "0");
scwin.mm = String(scwin.now.getMinutes()).padStart(2, "0");
scwin.currentTime = scwin.hof + scwin.mm;
scwin.statusFlag = ""; //수정/등록 Flag(C:Regist, U:Update)
scwin.processFlag = "";
scwin.v_contractno = "";
scwin.tabIndex = 0; //탭인덱스 0:Booking,1:Door Order 

scwin.v_linkcheck = scwin.p_linkcheck;
scwin.v_kcomcd = scwin.p_kcomcd;
scwin.v_blno = scwin.p_blno;
scwin.v_mhno = scwin.p_mhno;
scwin.v_bkno = scwin.p_bkno;
scwin.vLobranCd = scwin.memJson.lobranCd;
scwin.vLobranNm = scwin.memJson.lobranNm;
scwin.txt_docMan = ""; //ASIS txt_docMan 화면에는 없고 데이터만 바인드 되어있음.
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.hd_kcomcd = "DBEX";
scwin.hd_bkbltype = "C";
scwin.ed_groupNo = "";
scwin.hd_bkIo = "O";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "IL080",
    compID: "lc_triItemType"
  }, {
    grpCd: "IL007",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  tabControl1.setSelectedTabIndex(1);
  tabControl1.setSelectedTabIndex(0);
  setTimeout(function () {
    scwin.f_DefaultValue();
    scwin.f_Check();

    //ASIS 	gr_containerDoorOrderQty에 scwin.f_Check() 기본 정보가 보이고 선택이 되고있어 TOBE 호출정보를 추가하여 처리함.
    scwin.f_doorTypeLoading();
    scwin.f_getParametrSetting(scwin.v_linkcheck); // link처리
    scwin.f_ContainerTypeLoading(); // Container Type 정보    	
  }, 100);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //그리드에 보여질 정보 재매핑
  let dltStr = "dlt_commonCodeIL007"; // FM017 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeIL007_1", true);
  for (let i = 0; i < dlt_commonCodeIL007_1.getRowCount(); i++) {
    dlt_commonCodeIL007_1.setCellData(i, "cdNm", "[" + dlt_commonCodeIL007_1.getCellData(i, "cd") + "]" + dlt_commonCodeIL007_1.getCellData(i, "cdNm"));
  }
};

//-------------------------------------------------------------------------
// Parameter Setting
//-------------------------------------------------------------------------
scwin.f_getParametrSetting = function (gubun) {
  try {
    switch (gubun) {
      case "0":
        break;
      case "1":
        // Booking Search에서 옴
        scwin.v_kcomcd = scwin.p_kcomcd;
        scwin.v_bkno = scwin.p_bkno;
        if (scwin.v_bkno == 'null') {
          $p.setTimeout(function () {
            ed_cnd_ed_bkNo.setValue("");
            ed_cnd_ed_bkNo.focus();
          }, {
            "delay": 50
          });
          return false;
        }
        scwin.hd_kcomcd = scwin.v_kcomcd;
        ed_cnd_ed_bkNo.setValue(scwin.v_bkno);
        scwin.f_Retrieve();
        break;
    }
  } catch (e) {
    console.log("f_getParametrSetting : " + e);
  }
};

//-------------------------------------------------------------------------
// CONTAINER TYPE 가져오기
//-------------------------------------------------------------------------
scwin.f_ContainerTypeLoading = function (gubun) {
  dma_containerType.set("sysCd", "ilCommonEBC");
  dma_containerType.set("queryId", "retriveContainerTypeList");
  $c.sbm.execute($p, sbm_containerType);
};

//-------------------------------------------------------------------------
// CONTAINER TYPE 가져오기 콜백
//-------------------------------------------------------------------------
scwin.sbm_containerType_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_containerType.setJSON(e.responseJSON.GAUCE);
  }
  //console.log("ds_containerType : " + ds_containerType.getRowCount());
};

//-------------------------------------------------------------------------
// Object Check
//-------------------------------------------------------------------------
scwin.f_Check = function () {
  try {
    ed_cnttype1.setValue("22GP");
    ed_cnttype2.setValue("42GP");
    ed_cnttype3.setValue("45GP");
    lc_cfs.setValue("F");
    chb_iptYn.setValue("");
    chb_triYn.setValue("");
  } catch (e) {
    console.log("f_Check : " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  try {
    //f_initSetTab(); //tab세팅
    scwin.f_Set("INIT");
    /* TOBE 데이터셋 정보를 정의하여 따로 기본처리하지 않음.
    f_setDSHeader( ds_retrieve, "1" );            //검색조건
    f_setDSHeader( ds_containerBookingList, "2" );  //OC_BK
    f_setDSHeader( ds_containerDoorOrder, "3" );    //ASIS N/A : Door Order
    f_setDSHeader( ds_containerDoorOrderQty, "4" ); //OC_BK_QTY : Door Order 우측 ds_containerDoorOrderQty, "4" ); //OC_BK_QTY : Door Order 우측
    f_setDSHeader( ds_containerBookingCont, "5" );  //OC_BK_CONT      
    f_setDSHeader( ds_bookingHbl, "6" );            //OC_BK_HBL
    f_setDSHeader( ds_houseblList, "7" );       	//OC_HBLH : Booking Detail
    f_setDSHeader( ds_retrieveCtrtClnt, "8" );  
    f_setDSHeader( ds_ctrtNo, "9" );*/
    ed_cnd_ed_bkNo.focus();
    scwin.processFlag = "T";
  } catch (e) {
    console.log("f_DefaultValue : " + e);
  }
};

//-------------------------------------------------------------------------
// 화면세팅
//-------------------------------------------------------------------------
scwin.f_Set = function (gubun) {
  try {
    //udc_addDel1 : btn_AddRow1,btn_DelRow1,btn_CancelRow1
    //udc_addDel2 : btn_AddRow2,btn_DelRow2,btn_CancelRow2
    //udc_addDel3 : btn_AddRow3,btn_DelRow3,btn_CancelRow3
    switch (gubun) {
      case "INIT":
        //초기화
        $c.gus.cfDisableKeyData($p); // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
        //cfDisableBtnOnly([btn_Copy,btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_Print,btn_HouseBl,btn_DirectBl
        //,btn_OrderSendDel,btn_OrderSend,btn_AddRow1,btn_DelRow1,btn_CancelRow1,btn_AddRow2,btn_DelRow2,btn_CancelRow2,btn_CntrReceive,btn_AddRow3,btn_DelRow3,btn_CancelRow3]);
        $c.gus.cfDisableObjects($p, [btn_Copy, btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_Print, btn_HouseBl, btn_DirectBl, btn_OrderSendDel, btn_OrderSend, udc_addDel1, udc_addDel2, btn_CntrReceive, udc_addDel3]);
        $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Find]);
        scwin.f_DisablePopUpObj();
        $c.gus.cfEnableObjects($p, [tbl_Search]); // 조회조건.
        scwin.statusFlag = "I";
        break;
      case "RETRIEVE":
        //조회모드	
        $c.gus.cfDisableKeyData($p);
        scwin.f_DisablePopUpObj();
        $c.gus.cfDisableObjects($p, [btn_Save, btn_Cancel, udc_addDel1, udc_addDel2, btn_CntrReceive, udc_addDel3]);
        $c.gus.cfEnableObjects($p, [btn_Copy, btn_Create, btn_Delete, btn_Print, btn_OrderSendDel, btn_OrderSend, btn_Find, btn_HouseBl, btn_DirectBl]);
        gr_containerDoorOrder.setColumnVisible("chk", true); //Show
        gr_containerDoorOrder.setReadOnly("column", "chk", false); //edit true
        gr_containerDoorOrder.setReadOnly("column", "doordt", true); //edit none   
        gr_containerDoorOrder.setReadOnly("column", "bkdoorseq", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "internalTyp", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "transcd", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "transnm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "fcity", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "fcitynm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "fdt", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "doorcd", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "doornm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "tcity", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "tcitynm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "closingdt", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "remark", true); //edit none

        gr_containerDoorOrderQty.setReadOnly("grid", true); //gr_containerDoorOrderQty.Editable  = "false";     
        gr_containerBookingCont.setReadOnly("grid", true); //gr_containerBookingCont.Editable  = "false";

        if (scwin.statusFlag == "C") {
          $c.gus.cfDisableBtnOnly($p, [btn_Update]);
        } else {
          $c.gus.cfEnableBtnOnly($p, [btn_Update]);
        }
        $c.gus.cfEnableObjects($p, [tbl_Search]); // 조회조건.
        scwin.statusFlag = ""; // flag nul  
        break;
      case "CREATE":
        //신규	
        $c.gus.cfEnableKeyData($p);
        scwin.f_EnablePopUpObj();
        $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Create, btn_Update, btn_Delete, btn_Print, btn_OrderSendDel, btn_OrderSend, btn_HouseBl, btn_DirectBl]);
        $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_Find, udc_addDel1, udc_addDel2, btn_CntrReceive, udc_addDel3]);
        gr_containerDoorOrder.setColumnVisible("chk", false); //Show
        gr_containerDoorOrder.setReadOnly("column", "doordt", false); //edit Numeric   
        gr_containerDoorOrder.setReadOnly("column", "bkdoorseq", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "internalTyp", false); //edit true
        gr_containerDoorOrder.setReadOnly("column", "transcd", false); //edit upper
        gr_containerDoorOrder.setReadOnly("column", "transnm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "fcity", false); //edit upper
        gr_containerDoorOrder.setReadOnly("column", "fcitynm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "fdt", false); //edit Numeric
        gr_containerDoorOrder.setReadOnly("column", "doorcd", false); //edit upper
        gr_containerDoorOrder.setReadOnly("column", "doornm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "tcity", false); //edit upper
        gr_containerDoorOrder.setReadOnly("column", "tcitynm", true); //edit none
        gr_containerDoorOrder.setReadOnly("column", "closingdt", false); //edit Numeric
        gr_containerDoorOrder.setReadOnly("column", "remark", false); //edit upper

        gr_containerDoorOrderQty.setReadOnly("grid", false); //gr_containerDoorOrderQty.Editable  = "true";
        //ASIS 정의가 없는데 일자는 수정이 가능하여 추가함.
        gr_containerDoorOrderQty.setReadOnly("column", "doorDt", false); //edit uppe  
        gr_containerBookingCont.setReadOnly("grid", false); //gr_containerBookingCont.Editable  = "true";
        $c.gus.cfDisableObjects($p, [tbl_Search]); // 조회조건.
        scwin.statusFlag = "C"; // flag nul  
        break;
      case "UPDATE":
        ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
        ds_retrieve.set("bkNo", ed_bkNo.getValue());
        ds_retrieve.set("seq", ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "bkdoorseq"));
        //console.log("UPDATE : ds_containerDoorOrder.getRowPosition() > " + ds_containerDoorOrder.getRowPosition());
        $c.sbm.execute($p, sbm_retrievebookingHbl); //tr_retrievebookingHbl.Post();싱크처리
        if (ds_bookingHbl.getCellData(0, "hblno") == "" && ds_bookingHbl.getRowCount() == 0) {
          $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Update, btn_Create, btn_Delete, btn_Print, btn_OrderSendDel, btn_OrderSend, btn_HouseBl, btn_DirectBl]);
          $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_Find, udc_addDel1, udc_addDel2, btn_CntrReceive, udc_addDel3]);
          $c.gus.cfDisableKey($p);
          scwin.f_EnablePopUpObj();

          // 그리드 수정   	
          gr_containerDoorOrder.setColumnVisible("chk", true); //Show false
          gr_containerDoorOrder.setReadOnly("column", "doordt", false); //edit Numeric
          gr_containerDoorOrder.setReadOnly("column", "bkdoorseq", true); //edit none

          gr_containerDoorOrder.setReadOnly("column", "internalTyp", false); //edit true
          gr_containerDoorOrder.setReadOnly("column", "transcd", false); //edit upper
          gr_containerDoorOrder.setReadOnly("column", "transnm", true); //edit none
          gr_containerDoorOrder.setReadOnly("column", "fcity", false); //edit upper
          gr_containerDoorOrder.setReadOnly("column", "fcitynm", true); //edit none
          gr_containerDoorOrder.setReadOnly("column", "fdt", false); //edit Numeric
          gr_containerDoorOrder.setReadOnly("column", "doorcd", false); //edit upper
          gr_containerDoorOrder.setReadOnly("column", "doornm", true); //edit none
          gr_containerDoorOrder.setReadOnly("column", "tcity", false); //edit upper
          gr_containerDoorOrder.setReadOnly("column", "tcitynm", true); //edit none
          gr_containerDoorOrder.setReadOnly("column", "closingdt", false); //edit upper
          gr_containerDoorOrder.setReadOnly("column", "remark", true); //edit none
          //gr_containerDoorOrderQty.Editable  = "true"; 
          gr_containerDoorOrderQty.setReadOnly("grid", false); //gr_containerDoorOrderQty.Editable  = "false";
          //ASIS 정의가 없는데 일자는 수정이 가능하여 추가함.
          gr_containerDoorOrderQty.setReadOnly("column", "doorDt", false); //edit uppe 
          gr_containerBookingCont.setReadOnly("grid", false); //gr_containerBookingCont.Editable  = "true";
          $c.gus.cfDisableObjects($p, [tbl_Search]); // 조회조건.
          scwin.statusFlag = "U"; // flag nul
        } else {
          $c.gus.cfDisableBtnOnly($p, [btn_Copy, btn_Update, btn_Create, btn_Delete, btn_Print, btn_OrderSendDel, btn_OrderSend, btn_HouseBl, btn_DirectBl]);
          $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_Find, udc_addDel1, udc_addDel2, btn_CntrReceive, udc_addDel3]);
          $c.gus.cfDisableKeyData($p);
          scwin.f_DisablePopUpObj2();
          $c.gus.cfEnableObjects($p, [chb_triYn, lc_triItemType, ed_triWrkDesc, ed_txt_docPicNm, udc_ts1Vssl, ed_ts1VsslCd, ed_txt_ts1VsslNm, udc_ts2Vssl, ed_ts2VsslCd, ed_txt_ts2VsslNm, ed_ts1Voy, ed_ts2Voy, udc_ts1Port, ed_ts1PortCd, ed_txt_ts1PortNm, udc_ts2Port, ed_ts2PortCd, ed_txt_ts2PortNm, ed_ts1Etd, ed_ts1Eta, ed_ts2Etd, ed_ts2Eta, ed_txt_remarkMaster, ed_refSellingAmt, ed_refBuyingAmt, ed_freeDay]);
          // 그리드 수정 안됨   	
          gr_containerDoorOrder.setReadOnly("grid", true); //gr_containerDoorOrder.Editable  = "false";   	                     
          gr_containerDoorOrderQty.setReadOnly("grid", true); //gr_containerDoorOrderQty.Editable  = "false"; 
          //ASIS 정의가 없는데 일자는 수정이 가능하여 추가함.
          gr_containerDoorOrderQty.setReadOnly("column", "doorDt", false); //edit upper
          gr_containerBookingCont.setReadOnly("grid", true); //gr_containerBookingCont.Editable  = "false";  
          $c.gus.cfDisableObjects($p, [tbl_Search]); // 조회조건.
          scwin.statusFlag = "U"; // flag nul
        }
        break;
      case "SAVE":
        $c.gus.cfDisableObjects($p, [btn_Save, btn_Delete, btn_Cancel, btn_Print]);
        $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Find]);
        scwin.f_Set("RETRIEVE");
        break;
    }
  } catch (e) {
    console.log("f_Set : gubun" + gubun + ",e: " + e);
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다.
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  try {
    $c.gus.cfEnableObjects($p, [ed_reDt, ed_etRsltsDt, udc_img_Date1, ed_docClosingDt, ed_cargoClosingDt, ed_bkEtd, ed_ts1Etd, ed_ts2Etd, ed_bkEta, ed_ts1Eta, ed_ts2Eta]);
    $c.gus.cfEnableObjects($p, [udc_doc, udc_cust, udc_fac, udc_liner, udc_vsl, udc_ts1Vssl, udc_ts2Vssl, udc_lod, udc_ts1Port, udc_ts2Port, udc_dis, udc_dlv, udc_dept, udc_item, udc_unit, udc_bkArea, btn_PopUp17, btn_PopUp18, btn_PopUp19, btn_PopUp20, btn_PopUp21, udc_bkAgent, btn_PopUp24, udc_sales]);
  } catch (e) {
    console.log("f_EnablePopUpObj : " + e);
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다.
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  try {
    /*cfDisableObjects([img_Date1, img_Date2,img_Date3]);
    cfDisableObjects([img_PopUp1,img_PopUp3,img_PopUp5,img_PopUp7
                    ,img_PopUp9,img_PopUp10,img_PopUp11,img_PopUp13,img_PopUp14,img_PopUp15,img_PopUp16
                    ,img_PopUp17,img_PopUp18,img_PopUp19,img_PopUp20,img_PopUp21,img_PopUp23,img_PopUp24]);*/
    //img_Date1 ed_reDt,ed_etRsltsDt,udc_img_Date1
    //img_Date2 ed_docClosingDt, ed_cargoClosingDt,ed_bkEtd ed_ts1Etd ed_ts2Etd
    //img_Date3 ed_bkEta ed_ts1Eta ed_ts2Eta
    $c.gus.cfDisableObjects($p, [ed_reDt, ed_etRsltsDt, udc_img_Date1, ed_docClosingDt, ed_cargoClosingDt, ed_bkEtd, ed_ts1Etd, ed_ts2Etd, ed_bkEta, ed_ts1Eta, ed_ts2Eta]);

    //UDC정보가 cfDisableKeyData 처리가 되지 않아 버튼이미지 대신 UDCID로 대체
    //img_PopUp3 = btn_PopUp3 udc_cust, udc_fac
    //img_PopUp7 udc_vsl, udc_ts1Vssl, udc_ts2Vssl
    //img_PopUp8 udc_sales : ASIS에 미정의되었으나 disable
    //img_PopUp9 udc_lod, udc_ts1Port, udc_ts2Port
    /*$c.gus.cfDisableObjects([btn_PopUp1,btn_PopUp3,btn_PopUp5,btn_PopUp7
                         ,btn_PopUp9,btn_PopUp10,btn_PopUp11,btn_PopUp13,btn_PopUp14,btn_PopUp15,btn_PopUp16
                         ,btn_PopUp17,btn_PopUp18,btn_PopUp19,btn_PopUp20,btn_PopUp21,btn_PopUp23,btn_PopUp24]);*/
    $c.gus.cfDisableObjects($p, [udc_doc, udc_cust, udc_fac, udc_liner, udc_vsl, udc_ts1Vssl, udc_ts2Vssl, udc_lod, udc_ts1Port, udc_ts2Port, udc_dis, udc_dlv, udc_dept, udc_item, udc_unit, udc_bkArea, btn_PopUp17, btn_PopUp18, btn_PopUp19, btn_PopUp20, btn_PopUp21, udc_bkAgent, btn_PopUp24, udc_sales]);
  } catch (e) {
    console.log("f_DisablePopUpObj : " + e);
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다. (B/L발행후)
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj2 = function () {
  try {
    /*cfDisableObjects([img_Date1, img_Date2,img_Date3]);
    cfDisableObjects([img_PopUp1,img_PopUp3,img_PopUp5
                   ,img_PopUp10,img_PopUp11,img_PopUp13,img_PopUp14,img_PopUp15,img_PopUp16
                    ,img_PopUp17,img_PopUp18,img_PopUp19,img_PopUp20,img_PopUp21,img_PopUp23,img_PopUp24]);*/
    $c.gus.cfDisableObjects($p, [ed_reDt, ed_etRsltsDt, udc_img_Date1, ed_docClosingDt, ed_cargoClosingDt, ed_bkEtd, ed_ts1Etd, ed_ts2Etd, ed_bkEta, ed_ts1Eta, ed_ts2Eta]);
    $c.gus.cfDisableObjects($p, [udc_doc, udc_cust, udc_fac, udc_liner, udc_dis, udc_dlv, udc_dept, udc_item, udc_unit, udc_bkArea, btn_PopUp17, btn_PopUp18, btn_PopUp19, btn_PopUp20, btn_PopUp21, udc_bkAgent, btn_PopUp24]);
  } catch (e) {
    console.log("f_DisablePopUpObj2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  try {
    if (ed_cnd_ed_bkNo.getValue() == "") {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_056, ["Booking No"])); //선택된 @이(가) 없습니다.	
      return false;
    } else {
      const params = {
        kcomcd: scwin.hd_kcomcd,
        bkNo: ed_cnd_ed_bkNo.getValue(),
        bkbltype: scwin.hd_bkbltype
      };

      //데이터셋에 정보설정
      ds_retrieve.setJSON(params);
      $c.sbm.execute($p, sbm_retrieve);
    }
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    //tab2 CNT tbx_totalRows.setValue($c.gus.cfInsertComma(ds_containerBookingCont.getRowCount()));// 조회된 건수를Grid 하단에 표시한다.	

    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_houseblList.getRowCount())); //1번째 탭 하단 Booking Detail
    tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_containerDoorOrder.getRowCount())); //2번째 탭 좌측상단 Door Order
    if (ds_containerBookingList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
      scwin.f_Set("INIT");
      scwin.f_Check();
    } else {
      if (ds_houseblList.getRowCount() > 0) {
        ds_houseblList.setRowPosition(0); //기본포지션정의
        $c.gus.cfGoPrevPosition($p, gr_houseblList, 0); //첫번째 row 포지션이동
      }
      if (ds_containerDoorOrder.getRowCount() > 0) {
        ds_containerDoorOrder.setRowPosition(0); //기본포지션정의
        scwin.ds_containerDoorOrder_onrowpositionchange();
        $c.gus.cfGoPrevPosition($p, gr_containerDoorOrder, 0); //첫번째 row 포지션이동
      }
      if (ds_containerBookingList.getRowCount() > 0) {
        ds_containerBookingList.setRowPosition(0); //기본포지션정의

        //TOBE Create시 선택이 안되는데 조회시 결과가 없어도 첫번째가 선택되는경우로 예외 처리함
        if (ds_containerBookingList.getCellData(0, "payTerm") == "") {
          lc_contractno.setSelectedIndex(1);
        }
        if (ds_containerBookingList.getCellData(0, "contractno") == "") {
          lc_contractno.setSelectedIndex(1);
        }
      }
      let v_totPkg = 0;
      let v_totWgt = 0;
      let v_totMsr = 0;
      for (let i = 0; i < ds_containerBookingCont.getRowCount(); i++) {
        v_totPkg += parseInt(ds_containerBookingCont.getCellData(i, "cntpkg"));
        v_totWgt += parseFloat(ds_containerBookingCont.getCellData(i, "cntwgt"));
        v_totMsr += parseFloat(ds_containerBookingCont.getCellData(i, "cntmsrt"));
      }
      ed_totpkg.setValue(v_totPkg);
      ed_totwgt.setValue(v_totWgt);
      ed_totmsr.setValue(v_totMsr);
      scwin.f_Set("RETRIEVE");
    }

    //ds_containerBookingList event=OnLoadCompleted 
    if (ds_containerBookingList.getRowCount() != "0") {
      if (ds_containerBookingList.getCellData(0, "contractno") != "") {
        scwin.v_contractno = ds_containerBookingList.getCellData(0, "contractno");
        if (scwin.v_contractno == "NONE") {
          scwin.f_ContractInfo(); // 이걸하니까 됨. 

          //? f_ContractInfo 에서 계약거래처번호를 가져옴
          ds_ctrtNo.removeAll();
          let ctrtNoRow = ds_ctrtNo.insertRow();
          ds_ctrtNo.setCellData(ctrtNoRow, "ctrtNo", "NONE");
          //기본라벨 정보 처리
          ds_ctrtNo.setCellData(ctrtNoRow, "labelInfo", ds_ctrtNo.getCellData(ctrtNoRow, "ctrtNo") + " (" + ds_ctrtNo.getCellData(ctrtNoRow, "clntPicNm") + ":~" + ds_ctrtNo.getCellData(ctrtNoRow, "ctrtEndDt") + ":" + ds_ctrtNo.getCellData(ctrtNoRow, "crcCd") + ")");
          lc_contractno.setSelectedIndex(0); //lc_contractno.Index = 0;//Contract No		
        } else {
          scwin.f_ContractInfo();
        }
      }
    }
    ed_cnd_ed_bkNo.focus();
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 계약번호 조회
//-------------------------------------------------------------------------
scwin.f_ContractInfo = function (e) {
  try {
    ds_ctrtNo.removeAll();
    ds_retrieveCtrtClnt.removeAll();
    let ctrtClntRow = ds_retrieveCtrtClnt.insertRow();
    ds_retrieveCtrtClnt.setCellData(ctrtClntRow, "ctrtNo", scwin.v_contractno);
    ds_retrieveCtrtClnt.setCellData(ctrtClntRow, "ctrtClntNo", ed_custCd.getValue().trim());
    ds_retrieveCtrtClnt.setCellData(ctrtClntRow, "scDate", ed_bkEtd.getValue().trim());
    ds_retrieveCtrtClnt.setCellData(ctrtClntRow, "ctrtDtYn", "1");
    ds_retrieveCtrtClnt.setCellData(ctrtClntRow, "ctrtDistrictCd", "ZZA"); // ZZA : 해운권역 , ZZB : 항공권역	
    ds_retrieveCtrtClnt.setCellData(ctrtClntRow, "impExpDomesticClsCd", "O"); // in/out		
    ds_retrieveCtrtClnt.setCellData(ctrtClntRow, "bizDivCntrYn", "1"); //container	
    $c.sbm.execute($p, sbm_retrieveCtrtClnt);
  } catch (e) {
    console.log("f_ContractInfo : " + e);
  }
};

//-------------------------------------------------------------------------
// 계약번호조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveCtrtClnt_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (ds_ctrtNo.getRowCount() > 0) {
      ds_ctrtNo.sort("ctrtNo", 1); // [0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)

      //TOBE 라벨정보에 대한 처리 추가
      for (let i = 0; i < ds_ctrtNo.getRowCount(); i++) {
        //"% (%:~%:%);ctrtNo;clntPicNm;ctrtEndDt;crcCd"
        ds_ctrtNo.setCellData(i, "labelInfo", ds_ctrtNo.getCellData(i, "ctrtNo") + " (" + ds_ctrtNo.getCellData(i, "clntPicNm") + ":~" + ds_ctrtNo.getCellData(i, "ctrtEndDt") + ":" + ds_ctrtNo.getCellData(i, "crcCd") + ")");
      }
    }
  } catch (e) {
    console.log("sbm_retrieveCtrtClnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, [ed_cnd_ed_bkNo]);
};

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.tabControl1_ontabclick = function (tabId, index) {
  try {
    if (index == 0) {} else if (index == 1) {
      //-------------------------------------------------------------------------------
      //  Door Order 자동 생성 , 신규가 아닐경우에만 적용
      //-------------------------------------------------------------------------------
      if (ds_containerDoorOrder.getRowCount() == 0) {
        scwin.f_autoCreateDoorOrderInfo();
      }
    }
  } catch (e) {
    console.log("tabControl1_ontabclick :" + e);
  }
};

//-------------------------------------------------------------------------------
//2009.10.28 추가 : Door Order화면의 기능을 자동으로 추가
//조건 :  Door Order 그리드(ds_containerBookingCont)에 행이 없을 경우만 추가
//Order Date : SYSDATE, SEQ : 01, Type : Normal, Trucker : 109856(동부익스프레스)
//SEQ : 01, Type : 22GP, QTY : 1
//-------------------------------------------------------------------------------
scwin.f_autoCreateDoorOrderInfo = function (e) {
  try {
    let rowOrder = ds_containerDoorOrder.insertRow();
    let rowOrderQty = ds_containerDoorOrderQty.insertRow();
    ds_containerDoorOrderQty.setRowPosition(rowOrderQty);
    ds_containerDoorOrder.setCellData(rowOrder, "kcomcd", scwin.hd_kcomcd);
    ds_containerDoorOrder.setCellData(rowOrder, "bkNo", ed_bkNo.getValue());
    ds_containerDoorOrder.setCellData(rowOrder, "doordt", scwin.strCurDate + scwin.currentTime); //ORDER DATE
    ds_containerDoorOrder.setCellData(rowOrder, "bkdoorseq", "01"); //ORDER SEQ
    ds_containerDoorOrder.setCellData(rowOrder, "internalTyp", "2"); //1:내부부서,2:거래처
    ds_containerDoorOrder.setCellData(rowOrder, "transcd", "109856"); //운송사 CODE
    ds_containerDoorOrder.setCellData(rowOrder, "inpid", scwin.userId);

    //ds_containerDoorOrderQty에 기본값 설정
    ds_containerDoorOrderQty.setCellData(rowOrderQty, "kcomcd", scwin.hd_kcomcd);
    ds_containerDoorOrderQty.setCellData(rowOrderQty, "bkNo", ed_bkNo.getValue());
    ds_containerDoorOrderQty.setCellData(rowOrderQty, "bkdoorseq", "01"); //ORDER SEQ

    if (lc_cfs.getValue() == "F") {
      ds_containerDoorOrderQty.setCellData(rowOrderQty, "qtytype", "22GP"); //CONTAINER TYPE OR LCL
      ds_containerDoorOrderQty.setCellData(rowOrderQty, "realQtytype", "22GP"); //CONTAINER TYPE OR LCL
    } else if (lc_cfs.getValue() == "L") {
      ds_containerDoorOrderQty.setCellData(rowOrderQty, "qtytype", "R/T"); //CONTAINER TYPE OR LCL
      ds_containerDoorOrderQty.setCellData(rowOrderQty, "realQtytype", "R/T"); //CONTAINER TYPE OR LCL
    }
    scwin.f_doorTypeQtyLoading(rowOrderQty, "qtytype"); //qty 변경
    ds_containerDoorOrderQty.setCellData(rowOrderQty, "inpid", scwin.userId);
  } catch (e) {
    console.log("f_autoCreateDoorOrderInfo : " + e);
  }
};

//-------------------------------------------------------------------------------
//Door type Qty setting
//-------------------------------------------------------------------------------
scwin.f_doorTypeQtyLoading = function (row, colid) {
  try {
    let wgt = Number(ed_wgt.getValue()) / 1000;
    let msr = Number(ed_msr.getValue());
    if (ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == "WGT" || ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == "M/T") {
      ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", ed_wgt.getValue());
    } else if (ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == "R/T") {
      if (wgt > msr) {
        ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", wgt);
      } else {
        ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", msr);
      }
    } else if (ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == "CBM") {
      ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", msr);
    } else {
      if (ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == ed_cnttype1.getValue()) {
        ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", ed_cntqty1.getValue());
      } else if (ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == ed_cnttype2.getValue()) {
        ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", ed_cntqty2.getValue());
      } else if (ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == ed_cnttype3.getValue()) {
        ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", ed_cntqty3.getValue());
      } else if (ds_containerDoorOrderQty.getCellData(ds_containerDoorOrderQty.getRowPosition(), "qtytype") == ed_cnttype4.getValue()) {
        ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "qty", ed_cntqty4.getValue());
      }
    }
  } catch (e) {
    console.log("f_doorTypeQtyLoading : " + e);
  }
};

//-------------------------------------------------------------------------------
//입력 Booking No 옆(edtxt_bkPicNm)
//-------------------------------------------------------------------------------
scwin.ed_txt_bkPicNm_onviewchange = function (info) {
  if (ed_bkPic.getValue() == '') {
    scwin.f_OpenCommonPopUp('BkPic', 'F', 'F', 'F');
  }
};

//-------------------------------------------------------------------------------
//입력 Booking No 옆(edtxt_bkPicNm) 찾기
//-------------------------------------------------------------------------------
scwin.btn_PopUp24_onclick = function (e) {
  scwin.f_OpenCommonPopUp('BkPic', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Shipper 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_doc_onblurCodeEvent = function (e) {
  try {
    let strClntNo = "";
    strClntNo = ed_docCd.getValue().trim();
    let oldData = ed_docCd.options.hidVal; //TOBE ed_docCd.Modified를 공통팝업의 히든밸류로 대체하여 체크함.,
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        //ed_docTel.Text = "";
        ed_txt_docCust.setValue("");
        scwin.f_PopUp('Shipper', 'T');
      } else {
        ed_txt_docCust.setValue("");
      }
    } else {
      if (ed_docCd.getValue() != "") {
        if (ed_custCd.getValue() == "") {
          ed_custCd.setValue(ed_docCd.getValue());
          scwin.f_PopUp('Customer', 'T');
        }
      }
    }
  } catch (e) {
    console.log("udc_doc_onblurCodeEvent : " + e);
  }
};

//-------------------------------------------------------------------------------
//Shipper Name 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_doc_onviewchangeNameEvent = function (info) {
  if (ed_docCd.getValue() == '') {
    scwin.f_PopUp('Shipper', 'F');
  }
};

//-------------------------------------------------------------------------------
//Shipper 찾기
//-------------------------------------------------------------------------------
scwin.udc_doc_onclickEvent = function (e) {
  scwin.f_PopUp('Shipper', 'F');
};

//-------------------------------------------------------------------------------
//Customer 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_cust_onblurCodeEvent = function (e) {
  try {
    let strClntNo = "";
    strClntNo = ed_custCd.getValue().trim();
    let oldData = ed_custCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        //ed_custTel.getValue() = "";
        ed_txt_custNm.setValue("");
        scwin.f_PopUp('Customer', 'T');
      } else {
        ed_txt_custNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_custCd.setValue(ed_custCd.options.hidVal);
      ed_txt_custNm.setValue(ed_txt_custNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_cust_onviewchangeCodeEvent : " + e);
  }
};

//-------------------------------------------------------------------------------
//Customer Name 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_cust_onviewchangeNameEvent = function (info) {
  if (ed_custCd.getValue() == '') {
    scwin.f_PopUp('Customer', 'F');
  }
};

//-------------------------------------------------------------------------------
//Customer 찾기
//-------------------------------------------------------------------------------
scwin.udc_cust_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};

//-------------------------------------------------------------------------------
//Factory 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_fac_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_facCd.getValue().trim();
    let oldData = ed_facCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_facNm.setValue("");
        scwin.f_PopUp('Factory', 'T');
      } else {
        ed_txt_facNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_facCd.setValue(ed_facCd.options.hidVal);
      ed_txt_facNm.setValue(ed_txt_facNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_fac_onblurCodeEvent : " + e);
  }
};

//-------------------------------------------------------------------------------
//Factory Name 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_fac_onviewchangeNameEvent = function (info) {
  if (ed_facCd.getValue() == '') {
    scwin.f_PopUp('Factory', 'F');
  }
};

//-------------------------------------------------------------------------------
//Factory 찾기
//-------------------------------------------------------------------------------
scwin.udc_fac_onclickEvent = function (e) {
  if (ed_facCd.getValue() == '') {
    scwin.f_PopUp('Factory', 'F');
  }
};

//-------------------------------------------------------------------------------
//Carrier 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_liner_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_liner.getValue().trim();
    let oldData = ed_liner.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_linernm.setValue("");
        scwin.f_PopUp('Liner', 'T');
      } else {
        ed_txt_linernm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_liner.setValue(ed_liner.options.hidVal);
      ed_txt_linernm.setValue(ed_txt_linernm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_liner_onblurCodeEvent : " + e);
  }
};

//-------------------------------------------------------------------------------
//Carrier Name 정보변경시
//-------------------------------------------------------------------------------
scwin.udc_liner_onviewchangeNameEvent = function (info) {
  if (ed_liner.getValue() == '') {
    scwin.f_PopUp('Liner', 'F');
  }
};
//-------------------------------------------------------------------------------
//Carrier 찾기
//-------------------------------------------------------------------------------
scwin.udc_liner_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'F');
};

//-------------------------------------------------------------------------------
//DocPic Name 변경시
//-------------------------------------------------------------------------------
scwin.ed_txt_docPicNm_onviewchange = function (info) {
  if (ed_docPic.getValue() == '') {
    scwin.f_OpenCommonPopUp('DocPic', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//DocPic 찾기
//-------------------------------------------------------------------------------
scwin.btn_PopUp21_onclick = function (e) {
  scwin.f_OpenCommonPopUp('DocPic', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Vessel 변경시
//-------------------------------------------------------------------------------
scwin.udc_vsl_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_vslCd.getValue().trim();
    let oldData = ed_vslCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_vslNm.setValue("");
        scwin.f_OpenCommonPopUp("Vessel", "T", "F", "F");
      } else {
        ed_txt_vslNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_vslCd.setValue(ed_vslCd.options.hidVal);
      ed_txt_vslNm.setValue(ed_txt_vslNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_vsl_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Vessel 찾기
//-------------------------------------------------------------------------------
scwin.udc_vsl_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Vessel', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Salesman 변경시
//-------------------------------------------------------------------------------
scwin.udc_sales_onblurCodeEvent = function (info) {
  try {
    var strClntNo = "";
    strClntNo = ed_salesCd.getValue().trim();
    let oldData = ed_salesCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_salesNm.setValue("");
        scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
      } else {
        ed_txt_salesNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_salesCd.setValue(ed_salesCd.options.hidVal);
      ed_txt_salesNm.setValue(ed_txt_salesNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_sales_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Salesman Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_sales_onviewchangeNameEvent = function (info) {
  try {
    var strClntNo = "";
    strClntNo = ed_salesCd.getValue().trim();
    if (strClntNo.length > 0) {
      ed_salesCd.setValue("");
      scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
    } else {
      //ASIS if(ed_salesCd.Text==''){f_OpenCommonPopUp('Salesman','F','F','F')}
      scwin.f_OpenCommonPopUp("Salesman", "F", "F", "F");
    }
  } catch (e) {
    console.log("udc_sales_onviewchangeNameEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Salesman 찾기
//-------------------------------------------------------------------------------
scwin.udc_sales_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Loading 변경시
//-------------------------------------------------------------------------------
scwin.udc_lod_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_lodCd.getValue().trim();
    let oldData = ed_lodCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_lodNm.setValue("");
        scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
      } else {
        ed_txt_lodNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_lodCd.setValue(ed_lodCd.options.hidVal);
      ed_txt_lodNm.setValue(ed_txt_lodNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_lod_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Loading Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_lod_onviewchangeNameEvent = function (info) {
  if (ed_lodCd.getValue() == '') {
    scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//Loading 찾기
//-------------------------------------------------------------------------------
scwin.udc_lod_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Discharge 변경시
//-------------------------------------------------------------------------------
scwin.udc_dis_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_disCd.getValue().trim();
    let oldData = ed_disCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_disNm.setValue("");
        scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
      } else {
        ed_txt_disNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_disCd.setValue(ed_disCd.options.hidVal);
      ed_txt_disNm.setValue(ed_txt_disNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_dis_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Discharge Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_dis_onviewchangeNameEvent = function (info) {
  if (ed_disCd.getValue() == '') {
    scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//Discharge 찾기
//-------------------------------------------------------------------------------
scwin.udc_dis_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Delivery 변경시
//-------------------------------------------------------------------------------
scwin.udc_dlv_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_dlvCd.getValue().trim();
    let oldData = ed_dlvCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_dlvNm.setValue("");
        scwin.f_OpenCommonPopUp("Delivery", "T", "F", "F");
      } else {
        ed_txt_dlvNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_dlvCd.setValue(ed_dlvCd.options.hidVal);
      ed_txt_dlvNm.setValue(ed_txt_dlvNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_dlv_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Delivery Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_dlv_onviewchangeNameEvent = function (info) {
  if (ed_dlvCd.getValue() == '') {
    scwin.f_OpenCommonPopUp('Delivery', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//Delivery 찾기
//-------------------------------------------------------------------------------
scwin.udc_dlv_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Delivery', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Department 변경시
//-------------------------------------------------------------------------------
scwin.udc_dept_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_dept.getValue().trim();
    let oldData = ed_dept.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_deptnm.setValue("");
        scwin.f_OpenCommonPopUp("Department", "T", "F", "F");
      } else {
        ed_txt_deptnm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_dept.setValue(ed_dept.options.hidVal);
      ed_txt_deptnm.setValue(ed_txt_deptnm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_dept_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Department Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  if (ed_dept.getValue() == '') {
    scwin.f_OpenCommonPopUp('Department', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//Department 찾기
//-------------------------------------------------------------------------------
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Department', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//T/S Vessel 변경시
//-------------------------------------------------------------------------------
scwin.udc_ts1Vssl_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_ts1VsslCd.getValue().trim();
    let oldData = ed_ts1VsslCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_ts1VsslNm.setValue("");
        scwin.f_OpenCommonPopUp("ts1VsslCd", "T", "F", "F");
      } else {
        ed_txt_ts1VsslNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_ts1VsslCd.setValue(ed_ts1VsslCd.options.hidVal);
      ed_txt_ts1VsslNm.setValue(ed_txt_ts1VsslNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_ts1Vssl_onblurCodeEvent : " + e);
  }
};

//-------------------------------------------------------------------------------
//T/S Vessel 찾기
//-------------------------------------------------------------------------------
scwin.udc_ts1Vssl_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('ts1VsslCd', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//T/S Port 변경시
//-------------------------------------------------------------------------------
scwin.udc_ts1Port_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_ts1PortCd.getValue().trim();
    let oldData = ed_ts1PortCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_ts1PortNm.setValue("");
        scwin.f_OpenCommonPopUp("ts1PortCd", "T", "F", "F");
      } else {
        ed_txt_ts1PortNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_ts1PortCd.setValue(ed_ts1PortCd.options.hidVal);
      ed_txt_ts1PortNm.setValue(ed_txt_ts1PortNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_ts1Port_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//T/S Port Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_ts1Port_onviewchangeNameEvent = function (info) {
  if (ed_ts1PortCd.getValue() == '') {
    scwin.f_OpenCommonPopUp('ts1PortCd', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//T/S Port 찾기
//-------------------------------------------------------------------------------
scwin.udc_ts1Port_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('ts1PortCd', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//T/S Vessel 변경시
//-------------------------------------------------------------------------------
scwin.udc_ts2Vssl_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_ts2VsslCd.getValue().trim();
    let oldData = ed_ts2VsslCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_ts2VsslNm.setValue("");
        scwin.f_OpenCommonPopUp("ts2VsslCd", "T", "F", "F");
      } else {
        ed_txt_ts2VsslNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_ts2VsslCd.setValue(ed_ts2VsslCd.options.hidVal);
      ed_txt_ts2VsslNm.setValue(ed_txt_ts2VsslNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_ts2Vssl_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//T/S Vessel 찾기(2)
//-------------------------------------------------------------------------------
scwin.udc_ts2Vssl_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('ts2VsslCd', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//T/S Port 변경시(2)
//-------------------------------------------------------------------------------
scwin.udc_ts2Port_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_ts2PortCd.getValue().trim();
    let oldData = ed_ts2PortCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_ts2PortNm.setValue("");
        scwin.f_OpenCommonPopUp("ts2PortCd", "T", "F", "F");
      } else {
        ed_txt_ts2PortNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_ts2PortCd.setValue(ed_ts2PortCd.options.hidVal);
      ed_txt_ts2PortNm.setValue(ed_txt_ts2PortNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_ts2Port_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//T/S Port Name 변경시(2)
//-------------------------------------------------------------------------------
scwin.udc_ts2Port_onviewchangeNameEvent = function (info) {
  if (ed_ts2PortCd.getValue() == '') {
    scwin.f_OpenCommonPopUp('ts2PortCd', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//T/S Port 찾기(2)
//-------------------------------------------------------------------------------
scwin.udc_ts2Port_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('ts2PortCd', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Partner 변경시
//-------------------------------------------------------------------------------
scwin.udc_bkAgent_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_bkAgent.getValue().trim();
    let oldData = ed_bkAgent.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_bkAgentnm.setValue("");
        scwin.f_PopUp('Partner', 'T');
      } else {
        ed_txt_bkAgentnm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_bkAgent.setValue(ed_bkAgent.options.hidVal);
      ed_txt_bkAgentnm.setValue(ed_txt_bkAgentnm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_bkAgent_onblurCodeEvent : " + e);
  }
};

//-------------------------------------------------------------------------------
//Partner Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_bkAgent_onviewchangeNameEvent = function (info) {
  if (ed_bkAgent.getValue() == '') {
    scwin.f_PopUp('Partner', 'F');
  }
};

//-------------------------------------------------------------------------------
//Partner찾기
//-------------------------------------------------------------------------------
scwin.udc_bkAgent_onclickEvent = function (e) {
  scwin.f_PopUp('Partner', 'F');
};

//-------------------------------------------------------------------------------
//Item 변경시
//-------------------------------------------------------------------------------
scwin.udc_item_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_itemCd.getValue().trim();
    let oldData = ed_itemCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_itemNm.setValue("");
        scwin.f_OpenCommonPopUp("Item", "T", "F", "F");
      } else {
        ed_txt_itemNm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_itemCd.setValue(ed_itemCd.options.hidVal);
      ed_txt_itemNm.setValue(ed_txt_itemNm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_item_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Item Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_item_onviewchangeNameEvent = function (info) {
  if (ed_itemCd.getValue() == '') {
    scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//Item 찾기
//-------------------------------------------------------------------------------
scwin.udc_item_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Area 변경시
//-------------------------------------------------------------------------------
scwin.udc_bkArea_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_bkArea.getValue().trim();
    let oldData = ed_bkArea.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_bkAreanm.setValue("");
        scwin.f_OpenCommonPopUp("Area", "T", "F", "F");
      } else {
        ed_txt_bkAreanm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_bkArea.setValue(ed_bkArea.options.hidVal);
      ed_txt_bkAreanm.setValue(ed_txt_bkAreanm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_bkArea_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Area Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_bkArea_onviewchangeNameEvent = function (info) {
  if (ed_bkArea.getValue() == '') {
    scwin.f_OpenCommonPopUp('Area', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//Area 찾기
//-------------------------------------------------------------------------------
scwin.udc_bkArea_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Area', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//Package Unit 변경시
//-------------------------------------------------------------------------------
scwin.udc_unit_onblurCodeEvent = function (info) {
  try {
    let strClntNo = "";
    strClntNo = ed_unit.getValue().trim();
    let oldData = ed_unit.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (strClntNo != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (strClntNo.length > 0) {
        ed_txt_unitnm.setValue("");
        scwin.f_OpenCommonPopUp("Unit", "T", "F", "F");
      } else {
        ed_txt_unitnm.setValue("");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_unit.setValue(ed_unit.options.hidVal);
      ed_txt_unitnm.setValue(ed_txt_unitnm.options.hidVal);
    }
  } catch (e) {
    console.log("udc_unit_onblurCodeEvent : " + e);
  }
};
//-------------------------------------------------------------------------------
//Package Unit Name 변경시
//-------------------------------------------------------------------------------
scwin.udc_unit_onviewchangeNameEvent = function (info) {
  if (ed_unit.getValue() == '') {
    scwin.f_OpenCommonPopUp('Unit', 'F', 'F', 'F');
  }
};
//-------------------------------------------------------------------------------
//Package Unit 찾기
//-------------------------------------------------------------------------------
scwin.udc_unit_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Unit', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//CNTR Type1 포커스 아웃시
//-------------------------------------------------------------------------------
scwin.ed_cnttype1_onblur = function (e) {
  try {
    //ASIS onKillFocus 함수가 2개 Modified를 먼저체크하고 아래정보를 체크한다.
    let oldData = ed_cnttype1.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (ed_cnttype1.getValue() != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (ed_cnttype1.getValue().trim().length > 0) {
        scwin.f_OpenCommonPopUp("ContainerType1", "T", "F", "F");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_cnttype1.setValue(ed_cnttype1.options.hidVal);
    }

    /*
    ASIS ed_cnttype1 event=onKillFocus()가 2개이나 아래 소스부분은 체크하지 않고 있음
    else{
        scwin.f_containerDualCheck(); // container Dual Check
        if (ed_cnttype1.getValue() != "") {
            
            //var STR = ds_containerType.getCellData(0,ed_cnttype1.getValue());
            let rowList = ds_containerType.getMatchedJSON("code", ed_cnttype1.getValue());
            let STR = "";
            
            if (rowList.length > 0) {
                STR = rowList[0].code;
            }
            if (STR == "0") {  // 값이 없을때
                $c.gus.cfAlertMsg($c.data.getMessage(E_MSG_CM_ERR_049,["Container Type"]));//cfAlertMsg(E_MSG_CM_ERR_049,["Container Type"]); // @이(가) 존재하지 않습니다. 
                return false;
            } else {
                return true;
            }
        }
    }
    */
  } catch (e) {
    console.log("ed_cnttype1_onblur : " + e);
  }
};

//-------------------------------------------------------------------------------
//CNTR Type1 찾기
//-------------------------------------------------------------------------------
scwin.btn_PopUp17_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType1', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//CNTR Type2 변경시
//-------------------------------------------------------------------------------
scwin.ed_cnttype2_onblur = function (e) {
  try {
    //ASIS onKillFocus 함수가 2개 Modified를 먼저체크하고 아래정보를 체크한다.
    let oldData = ed_cnttype2.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (ed_cnttype2.getValue() != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (ed_cnttype2.getValue().trim().length > 0) {
        scwin.f_OpenCommonPopUp("ContainerType2", "T", "F", "F");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_cnttype2.setValue(ed_cnttype2.options.hidVal);
    }
    /*
    ASIS ed_cnttype2 event=onKillFocus()가 2개이나 아래 소스부분은 체크하지 않고 있음
    else{
        scwin.f_containerDualCheck(); // container Dual Check
        if (ed_cnttype2.getValue() != "") {
            
            let rowList = ds_containerType.getMatchedJSON("code", ed_cnttype2.getValue());
            let STR = "";
            
            if (rowList.length > 0) {
                STR = rowList[0].code;
            }
            if (STR == "0") {  // 값이 없을때
                $c.gus.cfAlertMsg($c.data.getMessage(E_MSG_CM_ERR_049,["Container Type"]));//cfAlertMsg(E_MSG_CM_ERR_049,["Container Type"]); // @이(가) 존재하지 않습니다. 
                return false;
            } else {
                return true;
            }
        }
    }
    */
  } catch (e) {
    console.log("ed_cnttype2_onblur : " + e);
  }
};

//-------------------------------------------------------------------------------
//CNTR Type2 찾기
//-------------------------------------------------------------------------------
scwin.btn_PopUp18_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType2', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//CNTR Type3 변경시
//-------------------------------------------------------------------------------
scwin.ed_cnttype3_onblur = function (e) {
  try {
    //ASIS onKillFocus 함수가 2개 Modified를 먼저체크하고 아래정보를 체크한다.
    let oldData = ed_cnttype3.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (ed_cnttype3.getValue() != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (ed_cnttype3.getValue().trim().length > 0) {
        scwin.f_OpenCommonPopUp("ContainerType3", "T", "F", "F");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_cnttype3.setValue(ed_cnttype3.options.hidVal);
    }
    /*
    ASIS ed_cnttype3 event=onKillFocus()가 2개이나 아래 소스부분은 체크하지 않고 있음
    else{ 
        scwin.f_containerDualCheck(); // container Dual Check
        if (ed_cnttype3.getValue() != "") {
            
            let rowList = ds_containerType.getMatchedJSON("code", ed_cnttype3.getValue());
            let STR = "";
            
            if (rowList.length > 0) {
                STR = rowList[0].code;
            }
            if (STR == "0") {  // 값이 없을때
                $c.gus.cfAlertMsg($c.data.getMessage(E_MSG_CM_ERR_049,["Container Type"]));//cfAlertMsg(E_MSG_CM_ERR_049,["Container Type"]); // @이(가) 존재하지 않습니다. 
                return false;
            } else {
                return true;
            }
        }
    }
    */
  } catch (e) {
    console.log("ed_cnttype3_onblur : " + e);
  }
};

//-------------------------------------------------------------------------------
//CNTR Type3 찾기
//-------------------------------------------------------------------------------
scwin.btn_PopUp19_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType3', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//CNTR Type4 변경시
//-------------------------------------------------------------------------------
scwin.ed_cnttype4_onblur = function (e) {
  try {
    //ASIS onKillFocus 함수가 2개 Modified를 먼저체크하고 아래정보를 체크한다.
    let oldData = ed_cnttype4.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (ed_cnttype4.getValue() != oldData) modifiedYn = true;
    if (modifiedYn) {
      if (ed_cnttype4.getValue().trim().length > 0) {
        scwin.f_OpenCommonPopUp("ContainerType4", "T", "F", "F");
      }
      //값이 존재하는 경우 히든값으로 대체한다.
    } else {
      ed_cnttype4.setValue(ed_cnttype4.options.hidVal);
    }
    /*
    ASIS ed_cnttype4 event=onKillFocus()가 2개이나 아래 소스부분은 체크하지 않고 있음
    else{
       scwin.f_containerDualCheck(); // container Dual Check
       if (ed_cnttype4.getValue() != "") {
           
           let rowList = ds_containerType.getMatchedJSON("code", ed_cnttype4.getValue());
           let STR = "";
           
           if (rowList.length > 0) {
               STR = rowList[0].code;
           }
           if (STR == "0") {  // 값이 없을때
               $c.gus.cfAlertMsg($c.data.getMessage(E_MSG_CM_ERR_049,["Container Type"]));//cfAlertMsg(E_MSG_CM_ERR_049,["Container Type"]); // @이(가) 존재하지 않습니다. 
               return false;
           } else {
               return true;
           }
       }
    }
    */
  } catch (e) {
    console.log("ed_cnttype4_onblur : " + e);
  }
};

//-------------------------------------------------------------------------------
//CNTR Type4 찾기
//-------------------------------------------------------------------------------
scwin.btn_PopUp20_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType4', 'F', 'F', 'F');
};

//-------------------------------------------------------------------------------
//공통팝업 열기
//-------------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  try {
    switch (disGubun) {
      case "Shipper":
        udc_doc.setSelectId("retrieveEngClntInfo");
        udc_doc.ilCommonPopUp(scwin.udc_doc_callbackFunc, ed_docCd.getValue(), ed_txt_docCust.getValue(), chgGubun, '10', 'Shipper Code,Shipper Name,Address1,Address2,Address3,Address4,Tel,,,CRN' // Title순서	                                                           
        , '140,300,100,100,100,100,100,,,100' // 보여주는 각 컬럼들의 폭	                                               
        , '8,9' // 컬럼중에서 숨기는	컬럼 지정	                                       
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        , null // 윈도우 위치 Y좌표	                                                   
        , null // 윈도우 위치 X좌표                                                       
        , null // 중복체크여부	("F")                                                      
        , "F" // 전체검색허용여부	("F")                                                  
        , 'Shipper search,Shipper Code,Shipper Name');
        break;
      case "ShipperPic":
        //Shipper PIC	//ASIS ed_docSeq 미사용
        /*
        pParam = ed_docCd.Text.trim();
        rtnList = ilCommonPopUp('retrieveClntPicInfo',			// XML상의 SELECT ID	                                                   
        ed_docSeq.Text.trim(),            // 화면에서의 ??? Code Element의	Value                                  
        txt_docMan.value,                 // 화면에서의 ??? Name Element의	Value                                  
        chgGubun,                       // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
        '4',                            // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        "Shipper PIC", 		                	// Title순서	                                                           
        //'80,200,120,300',               // 보여주는 각 컬럼들의 폭	                                               
        '100,350',               // 보여주는 각 컬럼들의 폭	                                               
        null,                           // 컬럼중에서 숨기는	컬럼 지정	                                       
        pParam,                         // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        '500',                          // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        '500',                          // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        null,                           // 윈도우 위치 Y좌표	                                                   
        null,                           // 윈도우 위치 X좌표                                                       
        null,                           // 중복체크여부	("F")                                                      
        "T",                            // 전체검색허용여부	("F")                                                  
        null);							// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  			
        //if(typeof(rtnList) != "undefined"){	
        cfSetReturnValue(rtnList, ed_docSeq, txt_docMan, ed_docCd);
        if (rtnList[4].trim() != "N/A"){					
        if (rtnList[4].trim() != ""){
        ed_docTel.Text = rtnList[4];
        }   else {
        ed_docTel.Text = rtnList[6];						
        }
        }						
        //}
            */
        break;
      case "Customer":
        udc_cust.setSelectId("retrieveEngClntInfo");
        udc_cust.ilCommonPopUp(scwin.udc_cust_callbackFunc, ed_custCd.getValue(), ed_txt_custNm.getValue(), chgGubun, '10', 'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN' // Title순서
        , '140,300,100,100,100,100,100,,,100' // 보여주는 각 컬럼들의 폭	                                               
        , '8,9' // 컬럼중에서 숨기는	컬럼 지정	                                       
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        , null // 윈도우 위치 Y좌표	                                                   
        , null // 윈도우 위치 X좌표                                                       
        , null // 중복체크여부	("F")                                                      
        , "F" // 전체검색허용여부	("F")                                                  
        , 'Customer search,Customer Code,Customer Name');
        break;
      case "CustomerPic":
        //Customer PIC	/ASIS ed_docSeq 미사용 
        /*pParam = ed_custCd.Text.trim();
        rtnList = ilCommonPopUp('retrieveClntPicInfo',			// XML상의 SELECT ID	                                                   
        ed_custSeq.Text.trim(),            // 화면에서의 ??? Code Element의	Value                                  
        txt_custMan.value,                 // 화면에서의 ??? Name Element의	Value                                  
        chgGubun,                       // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
        '4',                            // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        "Customer PIC", 		                	// Title순서	                                                           
        //'80,200,120,300',               // 보여주는 각 컬럼들의 폭	                                               
        '100,350',               // 보여주는 각 컬럼들의 폭	                                               
        null,                           // 컬럼중에서 숨기는	컬럼 지정	                                       
        pParam,                         // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        '500',                          // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        '500',                          // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        null,                           // 윈도우 위치 Y좌표	                                                   
        null,                           // 윈도우 위치 X좌표                                                       
        null,                           // 중복체크여부	("F")                                                      
        "T",                            // 전체검색허용여부	("F")                                                  
        null);							// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  			
        //if(typeof(rtnList) != "undefined"){	
        cfSetReturnValue(rtnList, ed_custSeq,txt_custMan, ed_custCd);
        				//}
        */
        break;
      case "Factory":
        udc_fac.setSelectId("retrieveEngClntInfo");
        udc_fac.ilCommonPopUp(scwin.udc_fac_callbackFunc, ed_facCd.getValue(), ed_txt_facNm.getValue(), chgGubun, '10' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , 'Factory Code,Factory Name,Address1,Address2,Address3,Address4,Tel,,,CRN' // Title순서
        , '140,300,100,100,100,100,100,,,100' // 보여주는 각 컬럼들의 폭	                                               
        , '8,9' // 컬럼중에서 숨기는	컬럼 지정	                                       
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        , null // 윈도우 위치 Y좌표	                                                   
        , null // 윈도우 위치 X좌표                                                       
        , null // 중복체크여부	("F")                                                      
        , "F" // 전체검색허용여부	("F")                                                  
        , 'Factory search,Factory Code,Factory Name');
        break;
      case "FactoryPic":
        //Factory PIC	/ASIS ed_facAttn 미사용
        /*pParam = ed_facCd.Text.trim();
        rtnList = ilCommonPopUp('retrieveClntPicInfo',			// XML상의 SELECT ID	                                                   
        ed_facAttn.Text.trim(),            // 화면에서의 ??? Code Element의	Value                                  
        txt_facMan.value,                 // 화면에서의 ??? Name Element의	Value                                  
        chgGubun,                       // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
        '4',                            // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        "Factory PIC", 		                	// Title순서	                                                           
        //'80,200,120,300',               // 보여주는 각 컬럼들의 폭	                                               
        '100,350',               // 보여주는 각 컬럼들의 폭	                                               
        null,                           // 컬럼중에서 숨기는	컬럼 지정	                                       
        pParam,                         // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        '500',                          // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        '500',                          // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        null,                           // 윈도우 위치 Y좌표	                                                   
        null,                           // 윈도우 위치 X좌표                                                       
        null,                           // 중복체크여부	("F")                                                      
        "T",                            // 전체검색허용여부	("F")                                                  
        null);							// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  			
        //if(typeof(rtnList) != "undefined"){	
        cfSetReturnValue(rtnList, ed_facAttn,txt_facMan, ed_facCd);
        if (rtnList[4].trim() != "N/A"){					
        if (rtnList[4].trim() != ""){
        ed_facTel.Text = rtnList[4];
        }   else {
        ed_facTel.Text = rtnList[6];						
        }	
        }				
        //}
        */
        break;
      case "Liner":
        udc_liner.setSelectId("retrieveEngClntInfo");
        udc_liner.ilCommonPopUp(scwin.udc_liner_callbackFunc, ed_liner.getValue(), ed_txt_linernm.getValue(), chgGubun, '10' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , 'Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN' // Title순서	                                                           
        , '140,300,100,100,100,100,100,,,100' // 보여주는 각 컬럼들의 폭	                                               
        , '8,9' // 컬럼중에서 숨기는	컬럼 지정	                                       
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        , null // 윈도우 위치 Y좌표	                                                   
        , null // 윈도우 위치 X좌표                                                       
        , null // 중복체크여부	("F")                                                      
        , "F" // 전체검색허용여부	("F")                                                  
        , 'Liner search,Liner Code,Liner Name');
        break;
      case "LinerPic":
        //Liner PIC	/ASIS ed_linerattn 미사용
        /*pParam = ed_liner.Text.trim();
        rtnList = ilCommonPopUp('retrieveClntPicInfo',			// XML상의 SELECT ID	                                                   
        ed_linerattn.Text.trim(),            // 화면에서의 ??? Code Element의	Value                                  
        txt_linerattnnm.value,                 // 화면에서의 ??? Name Element의	Value                                  
        chgGubun,                       // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
        '4',                            // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        "Liner PIC", 		                	// Title순서	                                                           
        //'80,200,120,300',               // 보여주는 각 컬럼들의 폭	                                               
        '100,350',               // 보여주는 각 컬럼들의 폭	                                               
        null,                           // 컬럼중에서 숨기는	컬럼 지정	                                       
        pParam,                         // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        '500',                          // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        '500',                          // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        null,                           // 윈도우 위치 Y좌표	                                                   
        null,                           // 윈도우 위치 X좌표                                                       
        null,                           // 중복체크여부	("F")                                                      
        "T",                            // 전체검색허용여부	("F")                                                  
        null);							// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  			
        //if(typeof(rtnList) != "undefined"){	
        cfSetReturnValue(rtnList, ed_linerattn,txt_linerattnnm, ed_liner);
        if (rtnList[4].trim() != "N/A"){					
        if (rtnList[4].trim() != ""){
        ed_linerTel.Text = rtnList[4];
        }   else {
        ed_linerTel.Text = rtnList[6];						
        }	
        }						
        //}
        */
        break;
      case "Partner":
        udc_bkAgent.setSelectId("retrieveEngClntInfo");
        udc_bkAgent.ilCommonPopUp(scwin.udc_bkAgent_callbackFunc, ed_bkAgent.getValue(), ed_txt_bkAgentnm.getValue(), chgGubun, '10' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , 'Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN' // Title순서	                                                           
        , '140,300,100,100,100,100,100,,,100' // 보여주는 각 컬럼들의 폭	                                               
        , '8,9' // 컬럼중에서 숨기는	컬럼 지정	                                       
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
        , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
        , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
        , null // 윈도우 위치 Y좌표	                                                   
        , null // 윈도우 위치 X좌표                                                       
        , null // 중복체크여부	("F")                                                      
        , "F" // 전체검색허용여부	("F")                                                  
        , 'Partner search,Partner Code,Partner Name');
        break;
    }
  } catch (e) {
    console.log("f_PopUp : " + e);
  }
};

//-------------------------------------------------------------------------------
//Shipper 콜백
//-------------------------------------------------------------------------------
scwin.udc_doc_callbackFunc = function (rtnList) {
  try {
    $c.gus.cfSetReturnValue($p, rtnList, ed_docCd, ed_txt_docCust);
    let oldData = ed_docCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (ed_docCd.getValue() != oldData) modifiedYn = true;
    if (modifiedYn) {
      ed_docSeq.setValue("");
      scwin.txt_docMan = ""; //txt_docMan.value = ""; ASIS 데이터만 바인드되어있음. 화면내 미존재.
      if (ed_dept.getValue() == "") {
        scwin.f_departmentInfo(ed_docCd.getValue().trim());
      }
    }
  } catch (e) {
    console.log("udc_doc_callbackFunc : " + e);
  }
};

//-------------------------------------------------------------------------------
//Customer 콜백
//-------------------------------------------------------------------------------
scwin.udc_cust_callbackFunc = function (rtnList) {
  try {
    $c.gus.cfSetReturnValue($p, rtnList, ed_custCd, ed_txt_custNm);
    let oldData = ed_custCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
    let modifiedYn = false;
    if (ed_custCd.getValue() != oldData) modifiedYn = true;
    if (modifiedYn) {
      //ed_custSeq.Text = "";
      //txt_custMan.value = "";
      lc_contractno.setText(""); //
      ds_ctrtNo.removeAll();
      //2020.05.13 최우성 대리 요청 사항 : 거래처 (CUSTOMER) 에 해당하는 부서 및 영업사원 자돋 지정
      if (ed_custCd.getValue() == "") {
        scwin.f_customerInfo(ed_custCd.getValue().trim());
      }
      if (ed_dept.getValue() == "") scwin.f_departmentInfo(ed_custCd.getValue().trim());
    }
  } catch (e) {
    console.log("udc_cust_callbackFunc : " + e);
  }
};

//-------------------------------------------------------------------------------
//Factory 콜백
//-------------------------------------------------------------------------------
scwin.udc_fac_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_facCd, ed_txt_facNm);
  let oldData = ed_facCd.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
  let modifiedYn = false;
  if (ed_facCd.getValue() != oldData) modifiedYn = true;
  if (modifiedYn) {
    ds_containerBookingList.setCellData(0, "facAttn", ""); //ed_facAttn.Text = ""; //ASIS 화면내 미사용
    ds_containerBookingList.setCellData(0, "facMan", ""); //txt_facMan = ""; //ASIS 화면내 미사용
  }
};

//-------------------------------------------------------------------------------
//Liner 콜백
//-------------------------------------------------------------------------------
scwin.udc_liner_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_liner, ed_txt_linernm);
  let oldData = ed_liner.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
  let modifiedYn = false;
  if (ed_liner.getValue() != oldData) modifiedYn = true;
  if (modifiedYn) {
    ds_containerBookingList.setCellData(0, "linerattn", ""); //ed_linerattn.Text = ""; //ASIS 화면내 미사용
    ds_containerBookingList.setCellData(0, "linerattnnm", ""); //txt_linerattnnm = ""; //ASIS 화면내 미사용
  }
};

//-------------------------------------------------------------------------------
//Partner 콜백
//-------------------------------------------------------------------------------
scwin.udc_bkAgent_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bkAgent, ed_txt_bkAgentnm);
  let oldData = ed_bkAgent.options.hidVal; //TOBE 공통팝업의 히든밸류로 대체하여 체크함.
  let modifiedYn = false;
  if (ed_bkAgent.getValue() != oldData) modifiedYn = true;
  if (modifiedYn) {
    ed_bkAgent.setValue("");
    //txt_ed_bkAgentnm.value = ""; //ASIS 미사용
  }
};

//-------------------------------------------------------------------------------
//공통팝업 열기
//-------------------------------------------------------------------------------
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  try {
    switch (gubun1) {
      case "Vessel":
        udc_vsl.setSelectId("retrieveOrdVsslInfo");
        udc_vsl.ilCommonPopUp(scwin.udc_vsl_callbackFunc, ed_vslCd.getValue(), ed_txt_vslNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Vessel,Code,Name", pNoDataCloseTF);
        break;
      case "ts1VsslCd":
        udc_ts1Vssl.setSelectId("retrieveOrdVsslInfo");
        udc_ts1Vssl.ilCommonPopUp(scwin.udc_ts1Vssl_callbackFunc, ed_ts1VsslCd.getValue(), ed_txt_ts1VsslNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Vessel,Code,Name", pNoDataCloseTF);
        break;
      case "ts2VsslCd":
        udc_ts2Vssl.setSelectId("retrieveOrdVsslInfo");
        udc_ts2Vssl.ilCommonPopUp(scwin.udc_ts2Vssl_callbackFunc, ed_ts2VsslCd.getValue(), ed_txt_ts2VsslNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Vessel,Code,Name", pNoDataCloseTF);
        break;
      case "Salesman":
        udc_sales.setSelectId("retrieveEmpInfo");
        udc_sales.ilCommonPopUp(scwin.udc_sales_callbackFunc, ed_salesCd.getValue(), ed_txt_salesNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
        break;
      case "Loading":
        udc_lod.setSelectId("retrievePortInfo");
        udc_lod.ilCommonPopUp(scwin.udc_lod_callbackFunc, ed_lodCd.getValue(), ed_txt_lodNm.getValue(), pWinCloseTF, '6', "Code, Name,,,, UNCODE", '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Loading,Code,Name", pNoDataCloseTF);
        break;
      case "ts1PortCd":
        udc_ts1Port.setSelectId("retrievePortInfo");
        udc_ts1Port.ilCommonPopUp(scwin.udc_ts1Port_callbackFunc, ed_ts1PortCd.getValue(), ed_txt_ts1PortNm.getValue(), pWinCloseTF, '6', "Code, Name,,,, UNCODE", '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "항구,Code,Name", pNoDataCloseTF);
        break;
      case "ts2PortCd":
        udc_ts2Port.setSelectId("retrievePortInfo");
        udc_ts2Port.ilCommonPopUp(scwin.udc_ts2Port_callbackFunc, ed_ts2PortCd.getValue(), ed_txt_ts2PortNm.getValue(), pWinCloseTF, '6', "Code, Name,,,, UNCODE", '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "항구,Code,Name", pNoDataCloseTF);
        break;
      case "Discharge":
        udc_dis.setSelectId("retrievePortInfo");
        udc_dis.ilCommonPopUp(scwin.udc_udc_dis_callbackFunc, ed_disCd.getValue(), ed_txt_disNm.getValue(), pWinCloseTF, '6', "Code, Name,,,, UNCODE", '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
        break;
      case "Delivery":
        udc_dlv.setSelectId("retrievePortInfo");
        udc_dlv.ilCommonPopUp(scwin.udc_dlv_callbackFunc, ed_dlvCd.getValue(), ed_txt_dlvNm.getValue(), pWinCloseTF, '6', "Code, Name,,,, UNCODE", '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Delivery,Code,Name", pNoDataCloseTF);
        break;
      case "Area":
        udc_bkArea.setSelectId("retrieveAreaCode");
        udc_bkArea.ilCommonPopUp(scwin.udc_bkArea_callbackFunc, ed_bkArea.getValue(), ed_txt_bkAreanm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Area,Code,Name", pNoDataCloseTF);
        break;
      case "Department":
        udc_dept.setSelectId("retrieveOpDeptCdInfo");
        udc_dept.ilCommonPopUp(scwin.udc_dept_callbackFunc, ed_dept.getValue(), ed_txt_deptnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Department,Code,Name", pNoDataCloseTF);
        break;
      case "Item":
        console.log("ed_itemCd.getValue() : " + ed_itemCd.getValue() + ", ed_txt_itemNm.getValue() :" + ed_txt_itemNm.getValue());
        udc_item.setSelectId("retrieveCommGoodsInfo");
        udc_item.ilCommonPopUp(scwin.udc_item_callbackFunc, ed_itemCd.getValue(), ed_txt_itemNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
        break;
      case "Unit":
        udc_unit.setSelectId("retrieveCommCdInfo");
        udc_unit.ilCommonPopUp(scwin.udc_unit_callbackFunc, ed_unit.getValue(), ed_txt_unitnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", 'IL002', null, null, null, null, null, pAllSearchTF, "Unit,Code,Name", pNoDataCloseTF);
        break;
      case "ContainerType1":
        udc_ilcomCode.setSelectId("retriveContainerTypeCodeInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.ed_cnttype1_callbackFunc, ed_cnttype1.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
        //ASIS 창닫기, 닫기 시 명이 없어지는 처리를 위해 추가함.
        ed_cnttype1.setValue("");
        break;
      case "ContainerType2":
        udc_ilcomCode.setSelectId("retriveContainerTypeCodeInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.ed_cnttype2_callbackFunc, ed_cnttype2.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
        //ASIS 창닫기, 닫기 시 명이 없어지는 처리를 위해 추가함.
        ed_cnttype2.setValue("");
        break;
      case "ContainerType3":
        udc_ilcomCode.setSelectId("retriveContainerTypeCodeInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.ed_cnttype3_callbackFunc, ed_cnttype3.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
        //ASIS 창닫기, 닫기 시 명이 없어지는 처리를 위해 추가함.
        ed_cnttype3.setValue("");
        break;
      case "ContainerType4":
        udc_ilcomCode.setSelectId("retriveContainerTypeCodeInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.ed_cnttype4_callbackFunc, ed_cnttype4.getValue(), '', pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Type,Code,Name", 'F');
        //ASIS 창닫기, 닫기 시 명이 없어지는 처리를 위해 추가함.
        ed_cnttype4.setValue("");
        break;
      case "DocPic":
        udc_ilcomCode.setSelectId("retrieveEmpInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.ed_docPic_callbackFunc, ed_docPic.getValue(), ed_txt_docPicNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Employee,Code,Name", pNoDataCloseTF);
        break;
      case "CargoPic":
        //ASIS  주석미사용
        udc_ilcomCode.setSelectId("retrieveEmpInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.ed_cargoPic_callbackFunc, ed_cargoPic.getValue(), ed_txt_cargoPicNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Employee,Code,Name", pNoDataCloseTF);
        break;
      case "BkPic":
        udc_ilcomCode.setSelectId("retrieveEmpInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.ed_bkPic_callbackFunc, ed_bkPic.getValue(), ed_txt_bkPicNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Employee,Code,Name", pNoDataCloseTF);
        //ASIS 창닫기, 닫기 시 명이 없어지는 처리를 위해 추가함.
        ed_txt_bkPicNm.setValue("");
        break;
    }
  } catch (e) {
    console.log("f_OpenCommonPopUp : " + e);
  }
};

//-------------------------------------------------------------------------------
//Vessel 콜백
//-------------------------------------------------------------------------------
scwin.udc_vsl_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vslCd, ed_txt_vslNm);
};

//-------------------------------------------------------------------------------
//ts1VsslCd 콜백
//-------------------------------------------------------------------------------
scwin.udc_ts1Vssl_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ts1VsslCd, ed_txt_ts1VsslNm);
};

//-------------------------------------------------------------------------------
//ts2VsslCd 콜백
//-------------------------------------------------------------------------------
scwin.udc_ts2Vssl_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ts2VsslCd, ed_txt_ts2VsslNm);
};

//-------------------------------------------------------------------------------
//Salesman 콜백
//-------------------------------------------------------------------------------
scwin.udc_sales_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_salesCd, ed_txt_salesNm);
};

//-------------------------------------------------------------------------------
//Loading 콜백
//-------------------------------------------------------------------------------
scwin.udc_lod_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lodCd, ed_txt_lodNm);
};

//-------------------------------------------------------------------------------
//ts1PortCd 콜백
//-------------------------------------------------------------------------------
scwin.udc_ts1Port_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ts1PortCd, ed_txt_ts1PortNm);
};

//-------------------------------------------------------------------------------
//ts2PortCd 콜백
//-------------------------------------------------------------------------------
scwin.udc_ts2Port_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_ts2PortCd, ed_txt_ts2PortNm);
};

//-------------------------------------------------------------------------------
//Discharge 콜백
//-------------------------------------------------------------------------------
scwin.udc_udc_dis_callbackFunc = function (rtnList) {
  try {
    $c.gus.cfSetReturnValue($p, rtnList, ed_disCd, ed_txt_disNm);
    if (ed_disCd.getValue() != "") {
      if (ed_bkArea.getValue() == "" && ed_txt_bkAreanm.getValue() == "") {
        ed_bkArea.setValue(rtnList[4]);
        scwin.f_OpenCommonPopUp("Area", "T", "F", "F");
      }
    }
  } catch (e) {
    console.log("udc_udc_dis_callbackFunc : " + e);
  }
};

//-------------------------------------------------------------------------------
//Area 콜백
//-------------------------------------------------------------------------------
scwin.udc_bkArea_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bkArea, ed_txt_bkAreanm);
};

//-------------------------------------------------------------------------------
//Delivery 콜백
//-------------------------------------------------------------------------------
scwin.udc_dlv_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dlvCd, ed_txt_dlvNm);
};

//-------------------------------------------------------------------------------
//Department 콜백
//-------------------------------------------------------------------------------
scwin.udc_dept_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, ed_txt_deptnm);
};

//-------------------------------------------------------------------------------
//Item 콜백
//-------------------------------------------------------------------------------
scwin.udc_item_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_itemCd, ed_txt_itemNm);
};

//-------------------------------------------------------------------------------
//Unit 콜백
//-------------------------------------------------------------------------------
scwin.udc_unit_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_unit, ed_txt_unitnm);
};

//-------------------------------------------------------------------------------
//ContainerType1 콜백
//-------------------------------------------------------------------------------
scwin.ed_cnttype1_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnttype1, '');
};

//-------------------------------------------------------------------------------
//ContainerType2 콜백
//-------------------------------------------------------------------------------
scwin.ed_cnttype2_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnttype2, '');
};

//-------------------------------------------------------------------------------
//ContainerType3 콜백
//-------------------------------------------------------------------------------
scwin.ed_cnttype3_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnttype3, '');
};

//-------------------------------------------------------------------------------
//ContainerType4 콜백
//-------------------------------------------------------------------------------
scwin.ed_cnttype4_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cnttype4, '');
};

//-------------------------------------------------------------------------------
//DocPic 콜백
//-------------------------------------------------------------------------------
scwin.ed_docPic_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_docPic, ed_txt_docPicNm);
};

//-------------------------------------------------------------------------------
//BkPic 콜백
//-------------------------------------------------------------------------------
scwin.ed_bkPic_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bkPic, ed_txt_bkPicNm);
};

//-------------------------------------------------------------------------------
//Booking Search Popup
//-------------------------------------------------------------------------------
scwin.f_containerDualCheck = async function (e) {
  try {
    let v_containerCheck = "0";
    if (ed_cnttype1.getValue() != "" && ed_cnttype2.getValue() != "" && ed_cnttype1.getValue() == ed_cnttype2.getValue()) v_containerCheck = "1";
    if (ed_cnttype1.getValue() != "" && ed_cnttype3.getValue() != "" && ed_cnttype1.getValue() == ed_cnttype3.getValue()) v_containerCheck = "1";
    if (ed_cnttype1.getValue() != "" && ed_cnttype4.getValue() != "" && ed_cnttype1.getValue() == ed_cnttype4.getValue()) v_containerCheck = "1";
    if (ed_cnttype2.getValue() != "" && ed_cnttype3.getValue() != "" && ed_cnttype2.getValue() == ed_cnttype3.getValue()) v_containerCheck = "1";
    if (ed_cnttype2.getValue() != "" && ed_cnttype4.getValue() != "" && ed_cnttype2.getValue() == ed_cnttype4.getValue()) v_containerCheck = "1";
    if (ed_cnttype3.getValue() != "" && ed_cnttype4.getValue() != "" && ed_cnttype3.getValue() == ed_cnttype4.getValue()) v_containerCheck = "1";
    if (v_containerCheck == "1") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_032, "Container Type")); //cfAlertMsg(E_MSG_CM_ERR_032,Array("Container Type")); //  @은(는) 중복될 수 없습니다.
      return false;
    } else {
      return true;
    }
  } catch (e) {
    console.log("f_containerDualCheck : " + e);
  }
};

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  tabControl1.setSelectedTabIndex(idx);
};

//-------------------------------------------------------------------------------
//신규
//-------------------------------------------------------------------------------
scwin.f_Create = function (e) {
  try {
    scwin.f_Set("CREATE");
    ed_cnd_ed_bkNo.setValue("");

    //ds_containerBookingList.AddRow();  
    ds_containerBookingList.removeAll(); //화면기본입력정보 bind dataset
    let bookingListRow = ds_containerBookingList.insertRow();
    ds_containerBookingList.setRowPosition(bookingListRow); //TOBE 정보매핑을위해 포지션지정

    // dataset clear   	               
    ds_containerDoorOrder.removeAll();
    ds_containerDoorOrderQty.removeAll();
    ds_containerBookingCont.removeAll();
    ds_houseblList.removeAll();
    scwin.f_Check();
    scwin.f_selectTabMenu(0); //cfViewTab(0);  // 1번째 탭으로 이동.
    ed_reDt.setValue(scwin.strCurDate);
    //ed_bkPic.setValue(scwin.userId); //ASIS 코딩잘못으로 실제 값이 매핑되지 않아 주석처리함. ed_bkPic.text 으로 확인하니 값이 없음.
    ed_txt_bkPicNm.setValue(scwin.userNm);

    // 2020.02.27 국제영업3팀 개선사항 Department 기본 설정
    if (!(scwin.vLobranCd == "null" || scwin.vLobranCd == null)) {
      ed_dept.setValue(scwin.vLobranCd);
      ed_txt_deptnm.setValue(scwin.vLobranNm);
    }
    ed_etRsltsDt.setValue("");
    ed_reDt.focus();
  } catch (e) {
    console.log("f_Create : " + e);
  }
};

//-------------------------------------------------------------------------------
//수정
//-------------------------------------------------------------------------------
scwin.f_Update = function (e) {
  try {
    if (ed_bkNo.getValue() == "") {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["HEADER"])); // @은(는) 필수 입력 항목입니다.	
      return false;
    } else {
      scwin.f_Set("UPDATE");
    }
  } catch (e) {
    console.log("f_Update : " + e);
  }
};

//-------------------------------------------------------------------------------
//취소
//-------------------------------------------------------------------------------
scwin.f_Cancel = function (e) {
  try {
    if (scwin.statusFlag == "C") {
      scwin.f_Set("INIT");
    } else {
      scwin.f_Set("RETRIEVE");
      ds_containerBookingList.undoAll(); //ds_containerBookingList.Undo(ds_containerBookingList.UndoAll());
      ds_ctrtNo.removeAll(); //ds_ctrtNo.Undo(ds_ctrtNo.UndoAll());
      scwin.f_cancelRow1(); //f_cancelRow(1);	
      scwin.f_cancelRow2(); //f_cancelRow(2);	
      scwin.f_cancelRow3(); //f_cancelRow(3);
      ed.cnd_ed_bkNo.focus();
      processFlag = "T";
    }
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};
/*
그리드, 연결데이터셋
1: gr_containerDoorOrder data:ds_containerDoorOrder
2: gr_containerDoorOrderQty data:ds_containerDoorOrderQty
3: gr_containerBookingCont data:ds_containerBookingCont
 */
//-------------------------------------------------------------------------------
//행추가1
//-------------------------------------------------------------------------------
scwin.f_addRow1 = function (e) {
  try {
    if (ed_bkNo.getValue() == "") {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Booking Header"])); // @은(는) 필수 입력 항목입니다.	
    } else {
      let addRow = $c.data.insertRow($p, $p.getComponentById("gr_containerDoorOrder"));
      let v_seq = "";
      let v_seqResult = "";
      v_seq = addRow + 1; //aSIS 01부터 번호가 시작됨.
      //v_seq = parseInt(addRow) + 1; //aSIS 01부터 번호가 시작됨.
      console.log("v_seq : " + v_seq);

      //v_seqResult = ilcommon.cf_LPad(v_seq, '0', 2);
      v_seqResult = $c.str.lpad($p, v_seq, 2, "0"); // ilcommon.cf_LPad 오류로 대체
      console.log("v_seqResult : " + v_seqResult);
      ds_containerDoorOrder.setCellData(addRow, "bkdoorseq", v_seqResult);
      ds_containerDoorOrder.setCellData(addRow, "kcomcd", scwin.hd_kcomcd);
      ds_containerDoorOrder.setCellData(addRow, "bkNo", ed_bkNo.getValue());
      ds_containerDoorOrder.setCellData(addRow, "inpid", scwin.userId);
      ds_containerDoorOrder.setCellData(addRow, "doordt", scwin.strCurDate + scwin.currentTime);
      ds_containerDoorOrder.setCellData(addRow, "internalTyp", "1"); //행추가시 1:Internal 선택되도록 추가함

      //gr_containerDoorOrder.Focus();
      gr_containerDoorOrder.setFocusedCell(addRow, "doordt", true); // forcus	
    }
  } catch (e) {
    console.log("f_addRow1 : " + e);
  }
};

//-------------------------------------------------------------------------------
//행추가2
//-------------------------------------------------------------------------------
scwin.f_addRow2 = function (e) {
  try {
    if (ed_bkNo.getValue() == "") {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Booking Header"])); // @은(는) 필수 입력 항목입니다.	
    } else {
      // Door order Seq 미입력시 Door order Qty addition시 alert
      if (ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "bkdoorseq") == "" || ds_containerDoorOrder.getRowCount() == 0) {
        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, ["Booking Door Order"])); // @이(가) 존재하지 않습니다. 
      } else {
        let addRow = $c.data.insertRow($p, $p.getComponentById("gr_containerDoorOrderQty"));
        ds_containerDoorOrderQty.setCellData(addRow, "kcomcd", scwin.hd_kcomcd);
        ds_containerDoorOrderQty.setCellData(addRow, "bkNo", ed_bkNo.getValue());
        //TODO 확인필요
        ds_containerDoorOrderQty.setCellData(addRow, "bkdoorseq", ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "bkdoorseq"));
        ds_containerDoorOrderQty.setCellData(addRow, "inpid", scwin.userId);
        //gr_containerDoorOrderQty.Focus();
        gr_containerDoorOrderQty.setFocusedCell(addRow, "qtytype", true); // forcus	
      }
    }
  } catch (e) {
    console.log("f_addRow2 : " + e);
  }
};

//-------------------------------------------------------------------------------
//행추가3
//-------------------------------------------------------------------------------
scwin.f_addRow3 = function (e) {
  try {
    if (ed_bkNo.getValue() == "") {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Booking Header"])); // @은(는) 필수 입력 항목입니다.	
    } else {
      // Door order Seq 미입력시 Container addition시 alert
      if (ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "bkdoorseq") == "" || ds_containerDoorOrder.getRowCount() == 0) {
        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, ["Booking Door Order"])); // @이(가) 존재하지 않습니다. 
      } else {
        let addRow = $c.data.insertRow($p, $p.getComponentById("gr_containerBookingCont"));
        ds_containerBookingCont.setCellData(addRow, "kcomcd", scwin.hd_kcomcd);
        ds_containerBookingCont.setCellData(addRow, "bkNo", ed_bkNo.getValue());
        ds_containerBookingCont.setCellData(addRow, "bkdoorseq", ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "bkdoorseq"));
        ds_containerBookingCont.setCellData(addRow, "inpid", scwin.userId);
        //gr_containerBookingCont.Focus();
        gr_containerBookingCont.setFocusedCell(addRow, "cntno", true); // forcus	
      }
    }
  } catch (e) {
    console.log("f_addRow3 : " + e);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow1 = async function () {
  try {
    if (ds_containerDoorOrderQty.getRowCount() > 0 || ds_containerBookingCont.getRowCount() > 0) {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_041, "Door Order Quantity Or Container", "delete")); // @은(는) @할 수 없습니다.
    } else if (ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "sendDt") != "") {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_041, "Order sended", "delete")); // @은(는) @할 수 없습니다.
    } else {
      //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
      if (ds_containerDoorOrder.getRowStatus(ds_containerDoorOrder.getRowPosition()) == "C") {
        ds_containerDoorOrder.removeRow(ds_containerDoorOrder.getRowPosition());
      } else {
        ds_containerDoorOrder.deleteRow(ds_containerDoorOrder.getRowPosition());
        $c.gus.cfGoPrevPosition($p, gr_containerDoorOrder, ds_containerDoorOrder.getRowPosition());
      }
    }
  } catch (e) {
    console.log("f_deleteRow1 : " + e);
  }
};

//-------------------------------------------------------------------------
// 행삭제2
//-------------------------------------------------------------------------
scwin.f_deleteRow2 = async function () {
  try {
    //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
    if (ds_containerDoorOrderQty.getRowStatus(ds_containerDoorOrderQty.getRowPosition()) == "C") {
      ds_containerDoorOrderQty.removeRow(ds_containerDoorOrderQty.getRowPosition());
    } else {
      ds_containerDoorOrderQty.deleteRow(ds_containerDoorOrderQty.getRowPosition());
      $c.gus.cfGoPrevPosition($p, gr_containerDoorOrderQty, ds_containerDoorOrderQty.getRowPosition());
    }
  } catch (e) {
    console.log("f_deleteRow2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 행삭제3
//-------------------------------------------------------------------------
scwin.f_deleteRow3 = async function () {
  try {
    //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
    if (ds_containerBookingCont.getRowStatus(ds_containerBookingCont.getRowPosition()) == "C") {
      ds_containerBookingCont.removeRow(ds_containerBookingCont.getRowPosition());
    } else {
      ds_containerBookingCont.deleteRow(ds_containerBookingCont.getRowPosition());
      $c.gus.cfGoPrevPosition($p, gr_containerBookingCont, ds_containerBookingCont.getRowPosition());
    }
  } catch (e) {
    console.log("f_deleteRow3 : " + e);
  }
};

//-------------------------------------------------------------------------------
//행취소1
//-------------------------------------------------------------------------------
scwin.f_cancelRow1 = function (e) {
  try {
    //Door Order
    let i = 0;
    let j = 0;
    for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
      if (ds_containerDoorOrder.getRowStatus(i) == "C") {
        ds_containerDoorOrder.removeRow(i);
      } else {
        ds_containerDoorOrder.undoRow(i);
      }
    }
    for (j = 0; j < ds_containerDoorOrderQty.getRowCount(); j++) {
      if (ds_containerDoorOrderQty.getRowStatus(j) == "C") {
        ds_containerDoorOrderQty.removeRow(j);
      } else {
        ds_containerDoorOrderQty.undoRow(j);
      }
    }
  } catch (e) {
    console.log("f_cancelRow1 : " + e);
  }
};

//-------------------------------------------------------------------------------
//행취소2
//-------------------------------------------------------------------------------
scwin.f_cancelRow2 = function (e) {
  try {
    //Door Order Qty
    let j = 0;
    for (j = 0; j < ds_containerDoorOrderQty.getRowCount(); j++) {
      if (ds_containerDoorOrderQty.getRowStatus(j) == "C") {
        ds_containerDoorOrderQty.removeRow(j);
      } else {
        ds_containerDoorOrderQty.undoRow(j);
      }
    }
  } catch (e) {
    console.log("f_cancelRow2 : " + e);
  }
};

//-------------------------------------------------------------------------------
//행취소3
//-------------------------------------------------------------------------------
scwin.f_cancelRow3 = function (e) {
  try {
    //Container
    let i = 0;
    for (i = 0; i < ds_containerBookingCont.getRowCount(); i++) {
      if (ds_containerBookingCont.getRowStatus(i) == "C") {
        ds_containerBookingCont.removeRow(i);
      } else {
        ds_containerBookingCont.undoRow(i);
      }
    }
  } catch (e) {
    console.log("f_cancelRow3 : " + e);
  }
};

//-------------------------------------------------------------------------------
//Copy
//-------------------------------------------------------------------------------
scwin.f_Copy = function (e) {
  try {
    scwin.f_Set("CREATE");
    ed_cnd_ed_bkNo.setValue("");
    // dataset clear   	               
    ds_containerDoorOrder.removeAll(); //ds_containerDoorOrder.ClearData();	
    ds_containerDoorOrderQty.removeAll(); //ds_containerDoorOrderQty.ClearData();	 
    ds_containerBookingCont.removeAll(); //ds_containerBookingCont.ClearData();
    ds_houseblList.removeAll(); //ds_houseblList.ClearData();
    ds_ctrtNo.removeAll(); //ds_ctrtNo.ClearData();		
    scwin.f_Check();
    if (ds_containerBookingList.getRowCount() != "0") ds_containerBookingList.modifyRowStatus(0, "C"); // insert 로 변경.
    ed_bkNo.setValue("");
    ed_custCd.setValue("");
    ed_txt_custNm.setValue("");
    //ed_salesCd.Text = "";
    //txt_salesNm.value = "";
    ed_docPic.setValue("");
    ed_txt_docPicNm.setValue("");
    //ed_cargoPic.Text = ""; //ASIS ed_cargoPic 주석처리되어있음 스크립트 에러남.
    //txt_cargoPicNm.value = "";	주석처리되어있음 스크립트 에러남.
    scwin.f_selectTabMenu(0); //cfViewTab(0);  // 1번째 탭으로 이동.
    ed_reDt.focus();
  } catch (e) {
    console.log("f_Copy : " + e);
  }
};

//-------------------------------------------------------------------------------
//저장
//-------------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    if (ds_containerBookingList.getModifiedIndex().length == 0 || ds_containerDoorOrder.getModifiedIndex().length == 0 || ds_containerDoorOrderQty.getModifiedIndex().length == 0 || ds_containerBookingCont.getModifiedIndex().length == 0) {
      let validate = await scwin.f_validate();
      if (validate) {
        if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
          //저장하시겠습니까?	
          if (ed_bkNo.getValue() == "") {
            if (ed_bkPic.getValue() == "" && ed_docPic.getValue() == "") {
              $c.win.alert($p, "Booking담당자/Doc담당자 중 한 가지는 필수로 입력하여야 합니다.");
              return false;
            }

            // BOOKING NO 를 생성및 가져온다.
            ds_retrieve.set("kcomcd", scwin.hd_kcomcd);

            // RESULT DATE가 없을 경우에는 ETD로 생성
            if (ds_containerBookingList.getCellData(0, "etRsltsDt") == "") {
              ds_retrieve.set("bkEtd", ds_containerBookingList.getCellData(0, "bkEtd"));
              ds_containerBookingList.setCellData(0, "etRsltsDt", ds_containerBookingList.getCellData(0, "bkEtd"));
            } else {
              ds_retrieve.set("bkEtd", ds_containerBookingList.getCellData(0, "etRsltsDt"));
            }

            // Booking 담당자가 없을 경우에는 등록자(inpid)로 저장
            if (ds_containerBookingList.getCellData(0, "bkPic") == "") {
              //alert("11");
              ds_containerBookingList.setCellData(0, "bkPic", scwin.userId);
              ds_containerBookingList.setCellData(0, "bkPicNm", scwin.userNm);
            }
            $c.sbm.execute($p, sbm_retrievebookingNo); //tr_retrievebookingNo.Post(); 싱크처리
            ed_bkNo.setValue(ds_retrieveNo.getCellData(0, "bkNo"));
          } //ed_bkNo.getValue()

          // OC_BK_HBL 에 HBLNO CHECK
          ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
          ds_retrieve.set("bkNo", ed_bkNo.getValue());
          ds_retrieve.set("seq", ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "bkdoorseq"));
          $c.sbm.execute($p, sbm_retrievebookingHbl); //tr_retrievebookingHbl.Post();싱크처리

          //TODBE ds_containerBookingList의 기본값 처리추가
          if (ds_containerBookingList.getCellData(0, "triYn") == "") ds_containerBookingList.setCellData(0, "triYn", 0);
          if (ds_containerBookingList.getCellData(0, "iptYn") == "") ds_containerBookingList.setCellData(0, "iptYn", 0);

          // OC_BK_HBL 의 HBLNO 가 NULL이 아닐때  ALERT
          if (ds_bookingHbl.getCellData(0, "hblno") == "" || ds_bookingHbl.getRowCount() == 0) {
            // 저장 					    
            ds_containerBookingList.setCellData(0, "kcomcd", scwin.hd_kcomcd);
            ds_containerBookingList.setCellData(0, "bkbltype", scwin.hd_bkbltype);
            ds_containerBookingList.setCellData(0, "bkEtd", ed_bkEtd.getValue());
            ds_containerBookingList.setCellData(0, "inpid", scwin.userId);

            //-------------------------------------------------------------------------------
            //  Door Order 자동 생성 
            //-------------------------------------------------------------------------------
            if (ds_containerDoorOrder.getRowCount() == 0) {
              scwin.f_autoCreateDoorOrderInfo();
            } else {
              //신규로 작성한 건이 아니거나 Door Order 탭을 먼저 선택하여 행이 이미 만들어진경우 bkNo만 다시 설정
              ds_containerDoorOrderQty.setCellData(ds_containerDoorOrderQty.getRowPosition(), "bkNo", ed_bkNo.getValue());
              ds_containerDoorOrder.setCellData(ds_containerDoorOrder.getRowPosition(), "bkNo", ed_bkNo.getValue());
            }
            console.log("저장 케이스 1");
            sbm_save.action = "/il.seaout.sobk.SaveContainerBookingCMD.do";
            $c.sbm.execute($p, sbm_save);
          } else {
            console.log("저장 케이스 2");
            //cfAlertMsg(E_MSG_CM_WRN_011,["House B/L"]); // 이미 존재하는 @입니다.
            sbm_save.action = "/il.seaout.sobk.SaveContainerBookingCMD.do";
            $c.sbm.execute($p, sbm_save);
          }
        }
      } //저장하시겠습니까?
    } else {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_001, ["Container Booking"])); //@는 필수입력항목입니다.
      return false;
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};
//-------------------------------------------------------------------------------
// BookingNo 조회 콜백 (ds_retrieveNo : rowposistion 0)
//-------------------------------------------------------------------------------
scwin.sbm_retrievebookingNo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
};
//-------------------------------------------------------------------------------
// BookingNo 조회 콜백 (ds_bookingHbl : rowposistion 0)
//-------------------------------------------------------------------------------
scwin.sbm_retrievebookingHbl_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
};

//-------------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      scwin.f_Retrieve();
      return; //onFail
    }
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
    scwin.f_Set("SAVE");
    ed_cnd_ed_bkNo.setValue(ed_bkNo.getValue());
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_save_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------------
// function name : f_validate
// function desc : 
//-------------------------------------------------------------------------------
scwin.f_validate = async function (e) {
  let tabIndex = tabControl1.getSelectedTabIndex();
  try {
    if (tabIndex == 0) {
      let bookingTabValidate = await scwin.f_BookingTabValidate();
      console.log("bookingTabValidate : " + bookingTabValidate);
      if (!bookingTabValidate) {
        return false;
      } else {
        return true;
      }
    } else if (tabIndex == 1) {
      let doorOrderTabValidate = await scwin.f_DoorOrderTabValidate();
      if (!doorOrderTabValidate) {
        return false;
      } else {
        return true;
      }
    }
  } catch (e) {
    console.log("f_validate : " + e);
  }
};

//-------------------------------------------------------------------------------
// Booking탭에 있을경우 유효성검사 
//-------------------------------------------------------------------------------
scwin.f_BookingTabValidate = async function (e) {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_reDt, ed_bkEtd, ed_bkEta, ed_etRsltsDt]); //validExp 가 yes일때 check
    if (!ret) {
      return false;
    }
    if (ed_bkEtd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["ETD"])); //@는 필수입력항목입니다.
      //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
      ed_bkEtd.focus();
      return false;
    }
    if (ed_bkEta.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["ETA"])); //@는 필수입력항목입니다.
      //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
      ed_bkEta.focus();
      return false;
    }

    // 날짜 범위 확인
    if (!$c.gus.cfIsAfterDate($p, ed_bkEtd.getValue(), ed_bkEta.getValue())) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_048, "ETD", "ETA")); //@은(는) 보다 작아야 합니다.
      ed_bkEtd.focus();
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_ts1Eta.getValue(), ed_ts1Etd.getValue())) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_048, "T/S ETA", "T/S ETD")); //@은(는) 보다 작아야 합니다.
      ed_ts1Eta.focus();
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_ts2Eta.getValue(), ed_ts2Etd.getValue())) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_048, "T/S ETA", "T/S ETD")); //@은(는) 보다 작아야 합니다.
      ed_ts2Eta.focus();
      return false;
    }

    // Container Type dual check	
    if (!scwin.f_containerDualCheck()) return false;

    // Container Type value check	
    if (ed_cnttype1.getValue() != "") {
      let rowList1 = ds_containerType.getMatchedJSON("code", ed_cnttype1.getValue());
      let STR1 = "";
      if (rowList1.length > 0) {
        STR1 = rowList1[0].code;
      }
      if (STR1 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, ["Container Type"])); // @이(가) 존재하지 않습니다. 
        //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
        ed_cnttype1.focus();
        return false;
      }
    }

    // Container Type value check	
    if (ed_cnttype2.getValue() != "") {
      let rowList2 = ds_containerType.getMatchedJSON("code", ed_cnttype2.getValue());
      let STR2 = "";
      if (rowList2.length > 0) {
        STR2 = rowList2[0].code;
      }
      if (STR2 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, ["Container Type"])); // @이(가) 존재하지 않습니다. 
        //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
        ed_cnttype2.focus();
        return false;
      }
    }

    // Container Type value check	
    if (ed_cnttype3.getValue() != "") {
      let rowList3 = ds_containerType.getMatchedJSON("code", ed_cnttype3.getValue());
      let STR3 = "";
      if (rowList3.length > 0) {
        STR3 = rowList3[0].code;
      }
      if (STR3 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, ["Container Type"])); // @이(가) 존재하지 않습니다. 
        //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
        ed_cnttype3.focus();
        return false;
      }
    }

    // Container Type value check	
    if (ed_cnttype4.getValue() != "") {
      let rowList4 = ds_containerType.getMatchedJSON("code", ed_cnttype4.getValue());
      let STR4 = "";
      if (rowList4.length > 0) {
        STR4 = rowList4[0].code;
      }
      if (STR4 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, ["Container Type"])); // @이(가) 존재하지 않습니다. 
        //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
        ed_cnttype4.focus();
        return false;
      }
    }

    // Customer check  
    if (ed_custCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Customer"])); //@는 필수입력항목입니다.
      //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
      ed_custCd.focus();
      return false;
    }

    // Contract No Null Check 
    //console.log("Contract No Null Check ds_ctrtNo.getRowPosition() : " + ds_ctrtNo.getRowPosition());
    //console.log("Contract No Null Check ctrtNo : " + ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition() , "ctrtNo"));
    //console.log("lc_contractno.getText(true) : " + lc_contractno.getText(true));
    if (ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtNo") == "선택" || $c.util.isEmpty($p, lc_contractno.getText(true))) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Contract No"])); //@는 필수입력항목입니다.
      //cfViewTab(0);  // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.				
      ed_custCd.focus();
      return false;
    }

    // dept
    if (ed_dept.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Department"])); //@는 필수입력항목입니다.
      //cfViewTab(0);  // 1번째 탭으로 이동.  ed_dept.focus() 잡아주기 위함.				
      ed_dept.focus();
      return false;
    }
    console.log("TT");
    return true;
  } catch (e) {
    console.log("f_BookingTabValidate : " + e);
  }
};

//-------------------------------------------------------------------------------
// Door Order탭에 있을경우 유효성검사
//-------------------------------------------------------------------------------
scwin.f_DoorOrderTabValidate = async function (e) {
  try {
    let msg = "[Booking] ";
    let ret = await $c.gus.cfValidate($p, [gr_containerDoorOrder]);
    if (!ret) {
      return false;
    }
    if (ed_bkEtd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, msg + "ETD")); //@는 필수입력항목입니다.
      //ed_bkEtd.focus();
      return false;
    }
    if (ed_bkEta.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, msg + "ETA")); //@는 필수입력항목입니다.
      //ed_bkEta.focus();
      return false;
    }

    // 날짜 범위 확인
    if (!$c.gus.cfIsAfterDate($p, ed_bkEtd.getValue(), ed_bkEta.getValue())) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_048, "ETD", "ETA")); //@은(는) 보다 작아야 합니다.
      //ed_bkEtd.focus();
      return false;
    }

    // Container Type dual check	
    if (!scwin.f_containerDualCheck()) return false;

    // Container Type value check	
    if (ed_cnttype1.getValue() != "") {
      let rowList1 = ds_containerType.getMatchedJSON("code", ed_cnttype1.getValue());
      let STR1 = "";
      if (rowList1.length > 0) {
        STR1 = rowList1[0].code;
      }
      if (STR1 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, msg + "Container Type")); // @이(가) 존재하지 않습니다. 
        //ed_cnttype1.focus();
        return false;
      }
    }

    // Container Type value check	
    if (ed_cnttype2.getValue() != "") {
      let rowList2 = ds_containerType.getMatchedJSON("code", ed_cnttype2.getValue());
      let STR2 = "";
      if (rowList2.length > 0) {
        STR2 = rowList2[0].code;
      }
      if (STR2 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, msg + "Container Type")); // @이(가) 존재하지 않습니다. 
        //ed_cnttype2.focus();
        return false;
      }
    }

    // Container Type value check	
    if (ed_cnttype3.getValue() != "") {
      let rowList3 = ds_containerType.getMatchedJSON("code", ed_cnttype3.getValue());
      let STR3 = "";
      if (rowList3.length > 0) {
        STR3 = rowList3[0].code;
      }
      if (STR3 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, msg + "Container Type")); // @이(가) 존재하지 않습니다. 
        //ed_cnttype3.focus();
        return false;
      }
    }

    // Container Type value check	
    if (ed_cnttype4.getValue() != "") {
      let rowList4 = ds_containerType.getMatchedJSON("code", ed_cnttype4.getValue());
      let STR4 = "";
      if (rowList4.length > 0) {
        STR4 = rowList4[0].code;
      }
      if (STR4 == "0") {
        // 값이 없을때
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_049, msg + "Container Type")); // @이(가) 존재하지 않습니다. 
        //ed_cnttype4.focus();
        return false;
      }
    }

    // Customer check  
    if (ed_custCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, msg + "Customer")); //@는 필수입력항목입니다.
      //ed_custCd.focus();
      return false;
    }

    // Contract No Null Check 
    if (ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtNo") == "선택" || lc_contractno.getText() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, msg + "Contract No")); //@는 필수입력항목입니다.
      //ds_ctrtNo.focus();
      return false;
    }

    // dept
    if (ed_dept.getValue() == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, msg + "Department")); //@는 필수입력항목입니다.
      //ed_dept.focus();
      return false;
    }

    // Door order 등록시 Door order Qty 필수 
    var checked = 0;
    let i = 0;
    for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
      if (ds_containerDoorOrder.getRowStatus(i) != "D") {
        if (ds_containerDoorOrder.getRowCount() > 0) {
          if (ds_containerDoorOrderQty.getRowCount() == 0) {
            $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, "Door Order Qty")); //@는 필수입력항목입니다.
            return false;
          }
        }
      }
      checked++;
    }

    // Door order Seq check
    var checked = 0;
    for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
      if (ds_containerDoorOrder.getCellData(i, "bkdoorseq") == "") {
        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, "Door Order Seq")); //@는 필수입력항목입니다.
        //gr_containerDoorOrder.Focus();
        gr_containerDoorOrder.setFocusedCell(i, "bkdoorseq", true);
        return false;
      }
      checked++;
    }

    // Container Order Date check
    var checked = 0;
    for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
      if (ds_containerDoorOrder.getCellData(i, "doordt") == "") {
        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, "Container Order Date")); //@는 필수입력항목입니다.
        //gr_containerDoorOrder.Focus();
        gr_containerDoorOrder.setFocusedCell(i, "doordt", true);
        return false;
      }
      checked++;
    }

    // Container Order Trucker check
    var checked = 0;
    for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
      if (ds_containerDoorOrder.getCellData(i, "transcd") == "") {
        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, "Container Order Trucker")); //@는 필수입력항목입니다.
        //gr_containerDoorOrder.Focus();
        gr_containerDoorOrder.setFocusedCell(i, "transcd", true);
        return false;
      }
      checked++;
    }

    // Door order Qty Container Type check
    var checked = 0;
    for (i = 0; i < ds_containerDoorOrderQty.getRowCount(); i++) {
      if (ds_containerDoorOrderQty.getCellData(i, "qtytype") == "" && ds_containerDoorOrderQty.getCellData(i, "realQtytype") == "") {
        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, "Door Order Container Type")); //@는 필수입력항목입니다.
        //gr_containerDoorOrder.Focus();
        gr_containerDoorOrder.setFocusedCell(i, "qtytype", true);
        return false;
      }
      checked++;
    }
    return true;
  } catch (e) {
    console.log("f_DoorOrderTabValidate : " + e);
  }
};

//-------------------------------------------------------------------------
// f_Print
//-------------------------------------------------------------------------
scwin.f_Print = function (e) {
  try {
    let printMode = "";

    //미리보기 체크시
    if (chb_previewCheck.getValue() == "1") {
      printMode = "preview";
    } else {
      printMode = "print";
    }
    data = {
      odiName: "se_101_01_01",
      reportName: "/il/seaout/se_101_01_01.ozr",
      odiParam: {
        KCOMCD: scwin.hd_kcomcd,
        BKNO: ed_bkNo.getValue(),
        BKDOORSEQ: ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "bkdoorseq"),
        DEPTCD: ed_dept.getValue(),
        USERID: scwin.userId
      },
      viewerParam: {
        useprogressbar: false,
        // 프로그레스바 쓸지 말지
        zoom: 90,
        // 배율 설정
        mode: printMode
      },
      formParam: {}
    };
    scwin.openPopup(data);
  } catch (e) {
    console.log("f_Print : " + e);
  }
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  try {
    //send date  check
    let checked = 0;
    let errorChk = 0;
    let i = 0;
    for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
      if (ds_containerDoorOrder.getCellData(i, "sendDt") != "") {
        $c.win.alert($p, "Order sended : Order No -> " + ds_containerDoorOrder.getCellData(i, "bkNo") + ",Seq -> " + ds_containerDoorOrder.getCellData(i, "bkdoorseq"));
        errorChk = 1;
      }
      checked++;
    }
    if (errorChk == "1") return;
    // OC_BK_HBL 에 HBLNO CHECK
    //scwin.f_RetrieveBinding(ds_retrieve, "RetrieveBookingHbl"); ASIS 함수가 있지만 RetrieveBookingHbl만 사용하여 직접처리로 변경함
    ds_retrieve.set("kcomcd", scwin.hd_kcomcd);
    ds_retrieve.set("hblno", "");
    ds_retrieve.set("inpid", scwin.userId);
    $c.sbm.execute($p, sbm_retrievebookingHbl); //tr_retrievebookingHbl.Post();싱크처리
    if (ds_bookingHbl.getCellData(0, "hblno") != "undefined" && ds_bookingHbl.getRowCount() != 0) {
      $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_041, "House B/L", "delete")); //@은(는) @할 수 없습니다.
      return false;
    }
    if (await $c.win.confirm($p, E_MSG_CM_CRM_004)) {
      //삭제하시겠습니까?
      for (i = 0; i < ds_containerBookingList.getRowCount(); i++) {
        ds_containerBookingList.deleteRow(i); // 전체삭제. 
      }
      sbm_delete.action = "/il.seaout.sobk.DeleteContainerBookingCMD.do";
      $c.sbm.execute($p, sbm_delete);
    }
  } catch (e) {
    console.log("f_Delete : " + e);
  }
};

//-------------------------------------------------------------------------------
// 삭제 콜백
//-------------------------------------------------------------------------------
scwin.sbm_delete_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
    ed_cnd_ed_bkNo.setValue("");
    //  그리드 초기화        	
    ds_containerBookingList.removeAll(); //ds_containerBookingList.ClearData();	
    ds_containerDoorOrder.removeAll(); //ds_containerDoorOrder.ClearData();	
    ds_containerDoorOrderQty.removeAll(); //ds_containerDoorOrderQty.ClearData();	 
    ds_containerBookingCont.removeAll(); //ds_containerBookingCont.ClearData(); 
    ds_houseblList.removeAll(); //ds_houseblList.ClearData();	

    scwin.f_Set("INIT");
  } catch (e) {
    console.log("sbm_delete_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// Order Send
//-------------------------------------------------------------------------
scwin.f_orderSend = async function (e) {
  try {
    if (ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "internalTyp") == "1") {
      // door order qty시 필수. 
      if (ed_itemCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_002, ["Item"])); // @은(는) 필수 입력 항목입니다.	
        scwin.f_selectTabMenu(0); //cfViewTab(0); // 1번째 탭으로 이동.  cnd_ed_hhblno.focus() 잡아주기 위함.
        ed_itemCd.focus();
        return;
      }
      let checked = 0;
      let errorChk = 0;

      // chk not check
      let j = 0;
      let i = 0;
      for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
        if (ds_containerDoorOrder.getCellData(i, "chk") == "T") {
          j = j + 1;
        }
        checked++;
      }
      if (j == 0) errorChk = 1; // chk를 선택안함.   	

      // order sended check
      for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
        if (ds_containerDoorOrder.getCellData(i, "chk") == "T") {
          var v_orderno = "";
          var v_seq = "";
          var v_kcomcd = scwin.hd_kcomcd;
          v_orderno = ds_containerDoorOrder.getCellData(i, "bkNo");
          v_seq = ds_containerDoorOrder.getCellData(i, "bkdoorseq");
          dma_doorOrderQtyCheck.set("sysCd", "SeaExportBookingEBC");
          dma_doorOrderQtyCheck.set("queryId", "retrivedoorOrderQtyCheck");
          dma_doorOrderQtyCheck.set("param1", v_kcomcd);
          dma_doorOrderQtyCheck.set("param2", v_orderno);
          dma_doorOrderQtyCheck.set("param3", v_seq);
          $c.sbm.execute($p, sbm_doorOrderQtyCheck); //sync처리
          if (ds_doorOrderQtyCheck.getCellData(0, "code") == "0") {
            errorChk = 1;
            $c.win.alert($p, "Door Order Qty is not exist: Order No -> " + v_orderno + ",Seq -> " + v_seq);
          }
        }
        checked++;
      }

      //선사대리점 업무관련 수정  2008.03.07	   START 	
      // Container Order Pickup Date                                                                          	                                                                               
      //for ( var i = 1; i<= ds_containerDoorOrder.CountRow; i++) {
      //  if (ds_containerDoorOrder.NameValue(i, "chk") == "T") {	                                            
      //    if(ds_containerDoorOrder.NameValue(i, "fdt") == ""){	                                       
      //       cfAlertMsg(E_MSG_CM_ERR_002, ["Container Order Pickup Date"]); //@는 필수입력항목입니다.  
      //       errorChk = 1;	     
      //       gr_containerDoorOrder.Focus();				                                                   
      //       gr_containerDoorOrder.setColumn("fdt"); // forcus                                              
      //       return false;                                                                                  
      //    } 
      //  }                                                                                                   
      //checked++;                                                                                             
      //}

      // Container Order Pickup Date  시분확인                                                                         	                                                                               
      //for ( var i = 1; i<= ds_containerDoorOrder.CountRow; i++) {
      //  if (ds_containerDoorOrder.NameValue(i, "chk") == "T") {	                                           
      //    if (!cf_gidHourCheck(ds_containerDoorOrder.NameValue(i, "fdt").substring(8,12))) {
      //     cfAlertMsg("Pickup Date 시분을 확인하십시요.");
      //     errorChk = 1;	     
      //     gr_containerDoorOrder.Focus();				                                                   
      //     gr_containerDoorOrder.setColumn("fdt"); // forcus                                              
      //     return false;                                   
      //    }
      //  }                                                                                                   
      //checked++;                                                                                             
      //}     

      // Container Order Door Date  시분확인                                                                         	                                                                               
      //for ( var i = 1; i<= ds_containerDoorOrder.CountRow; i++) {
      //  if (ds_containerDoorOrder.NameValue(i, "chk") == "T") {	                                            
      //    if (!cf_gidHourCheck(ds_containerDoorOrder.NameValue(i, "doordt").substring(8,12))) {
      //     cfAlertMsg("Order Date 시분을 확인하십시요.");
      //     errorChk = 1;	     
      //     gr_containerDoorOrder.Focus();				                                                   
      //     gr_containerDoorOrder.setColumn("doordt"); // forcus                                              
      //     return false;                                   
      //    }
      //  }                                                                                                   
      //checked++;                                                                                             
      //}

      // Container Order Pickup CY                                                                            	                                                                               
      //for ( var i = 1; i<= ds_containerDoorOrder.CountRow; i++) { 
      //  if (ds_containerDoorOrder.NameValue(i, "chk") == "T") {	                                           
      //    if(ds_containerDoorOrder.NameValue(i, "fcity") == ""){		                                       
      //       cfAlertMsg(E_MSG_CM_ERR_002, ["Container Order Pickup CY"]); //@는 필수입력항목입니다. 
      //       errorChk = 1;        
      //       gr_containerDoorOrder.Focus();				                                                   
      //       gr_containerDoorOrder.setColumn("fcity"); // forcus                                            
      //       return false;                                                                                  
      //    }  
      //  }                                                                                                  
      //checked++;                                                                                             
      //}                                                                                                      

      // Container Order Pickup name                                                                          	                                                                               
      //for ( var i = 1; i<= ds_containerDoorOrder.CountRow; i++) { 
      //  if (ds_containerDoorOrder.NameValue(i, "chk") == "T") {	                                           
      //    if(ds_containerDoorOrder.NameValue(i, "fcitynm") == ""){		                                   
      //       cfAlertMsg(E_MSG_CM_ERR_002, ["Container Order Pickup name"]); //@는 필수입력항목입니다. 
      //       errorChk = 1;	      
      //       gr_containerDoorOrder.Focus();				                                                   
      //       gr_containerDoorOrder.setColumn("fcitynm"); // forcus                                          
      //       return false;                                                                                  
      // 	} 
      //  }	                                                                                                 
      //checked++;                                                                                             
      //}

      //선사대리점 업무관련 수정  2008.03.07	   END
      if (errorChk == "0") {
        //error가 없으면
        // order sended 실행.
        checked = 0;
        for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
          if (ds_containerDoorOrder.getCellData(i, "chk") == "T") {
            ds_containerDoorOrder.setCellData(i, "kcomcd", scwin.hd_kcomcd);
            if (ds_containerDoorOrder.getCellData(i, "sendDt") == "") {
              ds_containerDoorOrder.setCellData(i, "orderType", 1); // Order Send
            } else {
              ds_containerDoorOrder.setCellData(i, "orderType", 2); // Order Send
            }
            ds_containerDoorOrder.setCellData(i, "inpid", scwin.userId);
          }
          checked++;
        }
        sbm_saveOrderSend.action = "/il.seaout.sobk.SaveOrderSendCMD.do";
        $c.sbm.execute($p, sbm_saveOrderSend);
      }
    } else {
      $c.win.alert($p, "Normal Type");
      return false;
    }
  } catch (e) {
    console.log("f_orderSend : " + e);
  }
};

//-------------------------------------------------------------------------
// Order Send Delete
//-------------------------------------------------------------------------
scwin.f_orderSendDel = async function (e) {
  try {
    if (ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowPosition(), "internalTyp") == "1") {
      // order sended check    
      let checked = 0;
      let errorChk = 0;

      // chk not check
      let j = 0;
      let i = 0;
      for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
        if (ds_containerDoorOrder.getCellData(i, "chk") == "T") {
          j = j + 1;
        }
        checked++;
      }
      if (j == 0) errorChk = 1; // chk를 선택안함.

      //send date  check
      j = 0;
      for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
        if (ds_containerDoorOrder.getCellData(i, "chk") == "T") {
          if (ds_containerDoorOrder.getCellData(i, "sendDt") == "") {
            await $c.win.alert($p, "Order is not sended : Order No -> " + ds_containerDoorOrder.getCellData(i, "bkNo") + ",Seq -> " + ds_containerDoorOrder.getCellData(i, "bkdoorseq"));
            errorChk = 1;
          }
        }
        checked++;
      }
      for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
        if (ds_containerDoorOrder.getCellData(i, "chk") == "T") {
          if (ds_containerDoorOrder.getCellData(i, "mcomOdrNo") != "") {
            await $c.win.alert($p, "Order sended : Order No -> " + ds_containerDoorOrder.getCellData(i, "bkNo") + ",Seq -> " + ds_containerDoorOrder.getCellData(i, "bkdoorseq"));
            errorChk = 1;
          }
        }
        checked++;
      }
      if (errorChk == "0") {
        //error가 없으면
        // order sended 실행.
        checked = 0;
        for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
          if (ds_containerDoorOrder.getCellData(i, "chk") == "T") {
            ds_containerDoorOrder.setCellData(i, "kcomcd", scwin.hd_kcomcd);
            ds_containerDoorOrder.setCellData(i, "orderType", 3); // Order Send	Del
            ds_containerDoorOrder.setCellData(i, "inpid", scwin.userId);
          }
          checked++;
        }
        sbm_saveOrderSend.action = "/il.seaout.sobk.SaveOrderSendCMD.do"; //send. send del action 동일함.
        $c.sbm.execute($p, sbm_saveOrderSend);
      }
    } else {
      $c.win.alert($p, "Normal Type");
      return false;
    }
  } catch (e) {
    console.log("f_orderSendDel : " + e);
  }
};
//-------------------------------------------------------------------------
// sbm_doorOrderQtyCheck_submitdone 콜백
//-------------------------------------------------------------------------
scwin.sbm_doorOrderQtyCheck_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_doorOrderQtyCheck.setJSON(e.responseJSON.GAUCE);
  }
  console.log("ds_doorOrderQtyCheck : " + ds_doorOrderQtyCheck.getRowCount());
};

//-------------------------------------------------------------------------
// Order Send/Delete 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveOrderSend_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.ds_containerDoorOrder_onrowpositionchange = function (info) {
  try {
    let v_kcomcd = "";
    let v_bkdoorseq = "";
    let v_bkNo = "";
    //let row = info.newRowIndex;
    let row = ds_containerDoorOrder.getRowPosition();
    let i = 0;
    let checked = 0;
    let v_cnt = ""; //ASIS 0

    v_kcomcd = ds_containerDoorOrder.getCellData(row, "kcomcd");
    v_bkdoorseq = ds_containerDoorOrder.getCellData(row, "bkdoorseq");
    v_bkNo = ds_containerDoorOrder.getCellData(row, "bkNo");
    if (row != -1 && ds_containerDoorOrder.getRowStatus(row) != "C") {
      //if (row != 0 && ds_containerDoorOrder.RowStatus(row) != 1) {	
      dma_retrieveOrder.set("bkdoorseq", v_bkdoorseq);
      dma_retrieveOrder.set("bkNo", v_bkNo);
      dma_retrieveOrder.set("kcomcd", v_kcomcd);
      sbm_retrieveOrder.action = "/il.seaout.sobk.RetrieveContainerBookingOrderCMD.do";
      $c.sbm.execute($p, sbm_retrieveOrder);
    } else if (ds_containerDoorOrder.getRowStatus(row) == "C") {
      for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
        //v_cnt += ds_containerDoorOrder.SysStatus(i)	
        if (ds_containerDoorOrder.getRowStatus(i) == "C") {
          v_cnt = "C";
        }
        checked++;
      }
      if (v_cnt == "C") {
        ds_containerDoorOrderQty.removeAll();
      }
    }
  } catch (e) {
    console.log("ds_containerDoorOrder_onrowpositionchange : " + e);
  }
};

//-------------------------------------------------------------------------------
//
//-------------------------------------------------------------------------------
scwin.sbm_retrieveOrder_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    //TOBE 그리드의 총건수 정보 정의
    tbx_totalRows3.setValue($c.gus.cfInsertComma($p, ds_containerDoorOrderQty.getRowCount())); //2번째 탭 우측 Qty
    tbx_totalRows4.setValue($c.gus.cfInsertComma($p, ds_containerBookingCont.getRowCount())); //2번째 탭 하단 Container

    ds_containerDoorOrderQty.setRowPosition(0);
    scwin.ds_containerDoorOrderQty_onrowpositionchange();
    ds_containerBookingCont.setRowPosition(0);
    scwin.ds_containerBookingCont_onrowpositionchange();
  } catch (e) {
    console.log("sbm_retrieveOrder_submitdone : " + e);
  }
};
scwin.ds_containerDoorOrderQty_onrowpositionchange = function (info) {
  gr_containerDoorOrderQty.setReadOnly("column", "bkdoorseq", true); //edit none
};
scwin.ds_containerBookingCont_onrowpositionchange = function (info) {
  gr_containerBookingCont.setReadOnly("column", "bkdoorseq", true); //edit none
};

//-------------------------------------------------------------------------------
// Find 버튼 클릭
//-------------------------------------------------------------------------------
scwin.f_openPgm1 = function (e) {
  scwin.f_openPgm('BookingFind');
};

//-------------------------------------------------------------------------------
// H B/L 버튼 클릭
//-------------------------------------------------------------------------------
scwin.f_openPgm2 = function (e) {
  scwin.f_openPgm('HouseBl');
};

//-------------------------------------------------------------------------------
// D B/L 버튼 클릭
//-------------------------------------------------------------------------------
scwin.f_openPgm3 = function (e) {
  scwin.f_openPgm('DirectBl');
};

//-------------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------------
scwin.f_openPgm = function (name) {
  var strPath = "";
  paramObj = {};
  var menuNm = "";
  var menuId = "";
  if (name == "BookingFind") {
    strPath = "/ui/il/seaout/sobk/se_103_01_01b.xml";
    menuNm = "Booking Search";
    menuId = "se_103_01_01b";
    paramObj = {
      hhio: scwin.hd_bkIo
    };
  } else if (name == "HouseBl") {
    strPath = "/ui/il/seaout/sobl/se_105_01_01b.xml";
    menuNm = "Export House B/L";
    menuId = "se_105_01_01b";
    paramObj = {
      linkcheck: '4',
      kcomcd: scwin.hd_kcomcd,
      bkno: ed_cnd_ed_bkNo.getValue(),
      carrierBkno: ed_carrierBkNo.getValue()
    };
  } else if (name == "DirectBl") {
    strPath = "/ui/il/seaout/sobl/se_107_01_01b.xml";
    menuNm = "Direct B/L";
    menuId = "se_107_01_01b";
    paramObj = {
      linkcheck: '4',
      kcomcd: scwin.hd_kcomcd,
      bkno: ed_cnd_ed_bkNo.getValue(),
      carrierBkno: ed_carrierBkNo.getValue()
    };
  }
  $c.win.openMenu($p, menuNm, strPath, menuId, paramObj, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------------
// Booking Detail 목록 더블클릭
//-------------------------------------------------------------------------------
scwin.gr_houseblList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  try {
    var strPath = "";
    paramObj = {};
    var menuNm = "";
    var menuId = "";

    //console.log("autono :" + ds_houseblList.getCellData(rowIndex, "autono"));
    //console.log("hhbltype :" + ds_houseblList.getCellData(rowIndex, "hhbltype"));

    if (ds_houseblList.getCellData(rowIndex, "autono") == "DIRECT" && ds_houseblList.getCellData(rowIndex, "hhbltype") != "B") {
      //Direct
      strPath = "/ui/il/seaout/sobl/se_107_01_01b.xml";
      menuNm = "Direct B/L"; //ASIS Export House B/L 이 경우 화면명이 바뀌어 명칭을 변경함.
      menuId = "se_107_01_01b";
      paramObj = {
        linkcheck: "1",
        kcomcd: scwin.hd_kcomcd,
        blno: ds_houseblList.getCellData(rowIndex, "hhblno"),
        mhno: ds_houseblList.getCellData(rowIndex, "mhno")
      };
    } else if (ds_houseblList.getCellData(Row, "autono") == "DIRECT" && ds_houseblList.getCellData(rowIndex, "hhbltype") == "B") {
      // bulk
      strPath = "/ui/il/seaout/sobl/se_108_01_01b.xml";
      menuNm = "Export House B/L";
      menuId = "se_108_01_01b";
      paramObj = {
        linkcheck: "1",
        kcomcd: scwin.hd_kcomcd,
        mhno: ds_houseblList.getCellData(rowIndex, "mhno")
      };
    } else {
      //  house 
      strPath = "/ui/il/seaout/sobl/se_105_01_01b.xml";
      menuNm = "Export House B/L";
      menuId = "se_105_01_01b";
      paramObj = {
        linkcheck: "1",
        kcomcd: scwin.hd_kcomcd,
        mhno: ds_houseblList.getCellData(rowIndex, "mhno")
      };
    }
    $c.win.openMenu($p, menuNm, strPath, menuId, paramObj, {
      openAction: "exist"
    });
  } catch (e) {
    console.log("gr_houseblList_oncelldblclick : " + e);
  }
};

//-------------------------------------------------------------------------------
// Booking Detail 엑셀다운로드
//-------------------------------------------------------------------------------
scwin.f_RunExcel1 = async function () {
  try {
    if (!(ds_houseblList.getRowCount() > 0)) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      return false;
    }
    let sheetTitle;
    sheetTitle = "Booking List";
    const options = {
      fileName: sheetTitle + "xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: sheetTitle,
      //엑셀내시트명지정필요시
      startRowIndex: 1,
      startColumnIndex: 0
    };

    //그리드에 대한 내용을 추가 옵션
    let infoArr = [
    //제목
    {
      rowIndex: 0 //제목을 표시할 행 index
      ,
      colIndex: 0 //제목을 표시할 열 index
      ,
      rowSpan: 1 //병합할 행의 수
      ,
      colSpan: 14 //병합할 열의 수
      ,
      text: sheetTitle //표시할 내용(제목)
      ,
      fontName: "돋움체" //폰트이름 
      ,
      fontSize: "12px" //폰트 size
      ,
      color: "black" //폰트 color
      ,
      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,
      bgColor: "#ffffff" //배경 color
    }];
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_houseblList, options, infoArr);
    }
  } catch (e) {
    console.log("f_RunExcel1 : " + e);
  }
};

//-------------------------------------------------------------------------------
// Booking Detai2 엑셀다운로드
//-------------------------------------------------------------------------------
scwin.f_RunExcel2 = async function () {
  try {
    if (!(ds_containerDoorOrder.getRowCount() > 0)) {
      $c.gus.$c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      return false;
    }
    let sheetTitle;
    sheetTitle = "Booking List";
    const options = {
      fileName: sheetTitle + "xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: "Door Order List",
      //엑셀내시트명지정필요시
      startRowIndex: 1,
      startColumnIndex: 0
    };

    //그리드에 대한 내용을 추가 옵션
    let infoArr = [
    //제목
    {
      rowIndex: 0 //제목을 표시할 행 index
      ,
      colIndex: 0 //제목을 표시할 열 index
      ,
      rowSpan: 1 //병합할 행의 수
      ,
      colSpan: 17 //병합할 열의 수
      ,
      text: sheetTitle //표시할 내용(제목)
      ,
      fontName: "돋움체" //폰트이름 
      ,
      fontSize: "12px" //폰트 size
      ,
      color: "black" //폰트 color
      ,
      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,
      bgColor: "#ffffff" //배경 color
    }];
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_containerDoorOrder, options, infoArr);
    }
  } catch (e) {
    console.log("f_RunExcel2 : " + e);
  }
};

//-------------------------------------------------------------------------------
// Booking Detai2 엑셀다운로드
//-------------------------------------------------------------------------------
scwin.f_RunExcel3 = async function () {
  try {
    if (!(ds_containerBookingCont.getRowCount() > 0)) {
      cfAlertMsg(MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
      return false;
    }
    let sheetTitle;
    sheetTitle = "Booking List";
    const options = {
      fileName: sheetTitle + "xlsx",
      //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      sheetName: "Container List",
      //엑셀내시트명지정필요시
      startRowIndex: 1,
      startColumnIndex: 0
    };

    //그리드에 대한 내용을 추가 옵션
    let infoArr = [
    //제목
    {
      rowIndex: 0 //제목을 표시할 행 index
      ,
      colIndex: 0 //제목을 표시할 열 index
      ,
      rowSpan: 1 //병합할 행의 수
      ,
      colSpan: 12 //병합할 열의 수
      ,
      text: sheetTitle //표시할 내용(제목)
      ,
      fontName: "돋움체" //폰트이름 
      ,
      fontSize: "12px" //폰트 size
      ,
      color: "black" //폰트 color
      ,
      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,
      bgColor: "#ffffff" //배경 color
    }];
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_containerBookingCont, options, infoArr);
    }
  } catch (e) {
    console.log("f_RunExcel3 : " + e);
  }
};

//-------------------------------------------------------------------------------
// customerInfo  가져오기
//-------------------------------------------------------------------------------
scwin.f_customerInfo = function (param) {
  try {
    const params = {
      sysCd: "ilCommonEBC",
      queryId: "retriveCustomerInfo",
      param1: param
    };

    //데이터셋에 정보설정
    dma_customerInfo.setJSON(params);
    $c.sbm.execute($p, sbm_customerInfo);
    if (ds_customerInfo.getRowCount() == 0) {} else {
      ed_dept.setValue(ds_customerInfo.getCellData(0, "col1"));
      ed_txt_deptnm.setValue(ds_customerInfo.getCellData(0, "col2"));
      ed_salesCd.setValue(ds_customerInfo.getCellData(0, "col3"));
      ed_txt_salesNm.setValue(ds_customerInfo.getCellData(0, "col4"));
    }
  } catch (e) {
    console.log("f_customerInfo : " + e);
  }
};

//-------------------------------------------------------------------------
// sbm_customerInfo 콜백
//-------------------------------------------------------------------------
scwin.sbm_customerInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_customerInfo.setJSON(e.responseJSON.GAUCE);
  }
  console.log("ds_customerInfo : " + ds_customerInfo.getRowCount());
};
scwin.lc_contractno_onclick = function (e) {
  if (ds_ctrtNo.getRowCount() == 0) {
    scwin.lc_contractno_onbeforeselect();
  }
};

//lc_contractno event=OnDropDown() ??
scwin.lc_contractno_onbeforeselect = function (selectedIndex, index) {
  //alert("aaa");
  try {
    scwin.v_contractno = "";
    if (ed_bkEtd.getValue() == "" || ed_bkEtd.getValue() == null) {
      $c.win.alert($p, "ETD is mandatory to retrieve Contract No");
      ds_ctrtNo.removeAll();
      ed_salesCd.setValue("");
      ed_txt_salesNm.setValue("");
      return false;
    } else {
      scwin.f_ContractInfo();
      //
      if (scwin.statusFlag == "C" || scwin.statusFlag == "U") {
        if (ds_ctrtNo.getRowCount() == 0) {
          let ctrtNoRow = ds_ctrtNo.insertRow();
          ds_ctrtNo.setRowPosition(ctrtNoRow);
          //기본라벨 정보 처리
          ds_ctrtNo.setCellData(ctrtNoRow, "labelInfo", ds_ctrtNo.getCellData(ctrtNoRow, "ctrtNo") + " (" + ds_ctrtNo.getCellData(ctrtNoRow, "clntPicNm") + ":~" + ds_ctrtNo.getCellData(ctrtNoRow, "ctrtEndDt") + ":" + ds_ctrtNo.getCellData(ctrtNoRow, "crcCd") + ")");
        }
        if (ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "empNo") != "") {
          if (ed_salesCd.getValue() == "") {
            ed_salesCd.setValue(ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "empNo"));
            scwin.f_OpenCommonPopUp('Salesman', 'T', 'F', 'F');
          }
        }
      }
    }
  } catch (e) {
    console.log("lc_contractno_onbeforeselect : " + e);
  }
};

//-------------------------------------------------------------------------------
// Container Receive  가져오기
//-------------------------------------------------------------------------------
scwin.f_cntrReceive = function () {
  try {
    const params = {
      sysCd: "SeaImportBookingEBC",
      queryId: "retriveContainerReceive",
      param1: ed_cnd_ed_bkNo.getValue() + ds_containerDoorOrder.getCellData(ds_containerDoorOrder.getRowCount(), "bkdoorseq")
    };

    //데이터셋에 정보설정
    dma_containerReceive.setJSON(params);
    $c.sbm.execute($p, sbm_containerReceive);
    if (ds_containerReceive.getRowCount() != 0) {
      if (ds_containerBookingCont.getRowCount() != 0) {
        // Container Receive
        let checked = 0;
        for (let i = 0; i < ds_containerReceive.getRowCount(); i++) {
          scwin.f_addRow3(3);
          ds_containerBookingCont.setCellData(i, "cntno", ds_containerReceive.getCellData(i, "code"));
          ds_containerBookingCont.setCellData(i, "cnttype", ds_containerReceive.getCellData(i, "name"));
        }
        checked++;
      }
    }
  } catch (e) {
    console.log("f_cntrReceive : " + e);
  }
};

//-------------------------------------------------------------------------
// sbm_containerReceive 콜백
//-------------------------------------------------------------------------
scwin.sbm_containerReceive_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_containerReceive.setJSON(e.responseJSON.GAUCE);
  }
  console.log("ds_containerReceive : " + ds_containerReceive.getRowCount());
};

//-------------------------------------------------------------------------
// Door type  가져오기
//-------------------------------------------------------------------------
scwin.f_doorTypeLoading = function () {
  try {
    let cnt1 = "0";
    let cnt2 = "0";
    let cnt3 = "0";
    let cnt4 = "0";
    if (ed_cnttype1.getValue() != "" && ed_cntqty1.getValue() != "0") {
      cnt1 = ed_cnttype1.getValue();
    } else {
      cnt1 = "0";
    }
    if (ed_cnttype2.getValue() != "" && ed_cntqty2.getValue() != "0") {
      cnt2 = ed_cnttype2.getValue();
    } else {
      cnt2 = "0";
    }
    if (ed_cnttype3.getValue() != "" && ed_cntqty3.getValue() != "0") {
      cnt3 = ed_cnttype3.getValue();
    } else {
      cnt3 = "0";
    }
    if (ed_cnttype4.getValue() != "" && ed_cntqty4.getValue() != "0") {
      cnt4 = ed_cnttype4.getValue();
    } else {
      cnt4 = "0";
    }
    const params = {
      sysCd: "SeaExportBookingEBC",
      queryId: "retriveTypeList",
      param1: cnt1,
      param2: cnt2,
      param3: cnt3,
      param4: cnt4
    };

    //데이터셋에 정보설정
    dma_doorGridType.setJSON(params);
    $c.sbm.execute($p, sbm_doorGridType);
  } catch (e) {
    console.log("f_doorTypeLoading : " + e);
  }
};

//-------------------------------------------------------------------------
// Door type  가져오기 콜백
//-------------------------------------------------------------------------
scwin.sbm_doorGridType_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_doorGridType.setJSON(e.responseJSON.GAUCE);
  }
  //console.log("ds_doorGridType : " + ds_doorGridType.getRowCount());
};

//-------------------------------------------------------------------------
// Container type  가져오기
//-------------------------------------------------------------------------
scwin.f_containerTypeLoading = function () {
  try {
    let cnt1 = "0";
    let cnt2 = "0";
    let cnt3 = "0";
    let cnt4 = "0";
    if (ed_cnttype1.getValue() != "" && ed_cntqty1.getValue() != "0") {
      cnt1 = ed_cnttype1.getValue();
    } else {
      cnt1 = "0";
    }
    if (ed_cnttype2.getValue() != "" && ed_cntqty2.getValue() != "0") {
      cnt2 = ed_cnttype2.getValue();
    } else {
      cnt2 = "0";
    }
    if (ed_cnttype3.getValue() != "" && ed_cntqty3.getValue() != "0") {
      cnt3 = ed_cnttype3.getValue();
    } else {
      cnt3 = "0";
    }
    if (ed_cnttype4.getValue() != "" && ed_cntqty4.getValue() != "0") {
      cnt4 = ed_cnttype4.getValue();
    } else {
      cnt4 = "0";
    }
    const params = {
      sysCd: "SeaExportBookingEBC",
      queryId: "retriveTypeList",
      param1: cnt1,
      param2: cnt2,
      param3: cnt3,
      param4: cnt4
    };

    //데이터셋에 정보설정
    dma_containerGridType.setJSON(params);
    $c.sbm.execute($p, sbm_containerGridType);
  } catch (e) {
    console.log("f_containerTypeLoading : " + e);
  }
};

//-------------------------------------------------------------------------
// Container type  가져오기 콜백
//-------------------------------------------------------------------------
scwin.sbm_containerGridType_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_containerGridType.setJSON(e.responseJSON.GAUCE);
  }
  console.log("ds_containerGridType : " + ds_containerGridType.getRowCount());
};

//-------------------------------------------------------------------------------
// Department  가져오기
//-------------------------------------------------------------------------------
scwin.f_departmentInfo = function (param) {
  try {
    const params = {
      sysCd: "ilCommonEBC",
      queryId: "retriveDepartmentCodeList",
      param1: "C",
      param2: param
    };

    //데이터셋에 정보설정
    dma_departmentInfo.setJSON(params);
    $c.sbm.execute($p, sbm_departmentInfo);
    if (ds_departmentInfo.getRowCount() == 0) {
      ed_dept.setValue("");
      ed_txt_deptnm.setValue("");
    } else {
      ed_dept.setValue(ds_departmentInfo.getCellData(0, "code"));
      ed_txt_deptnm.setValue(ds_departmentInfo.getCellData(0, "name"));
    }
  } catch (e) {
    console.log("f_departmentInfo : " + e);
  }
};

//-------------------------------------------------------------------------
// Department  가져오기 콜백
//-------------------------------------------------------------------------
scwin.sbm_departmentInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_departmentInfo.setJSON(e.responseJSON.GAUCE);
  }
  console.log("ds_departmentInfo : " + ds_departmentInfo.getRowCount());
};

//-------------------------------------------------------------------------
// 그리드 헤더 클릭
//-------------------------------------------------------------------------
scwin.gr_containerDoorOrder_onheaderclick = function (headerId) {
  try {
    let i = 0;
    if (headerId == "chk") {
      if (gr_containerDoorOrder.getHeaderValue("chk") == "T") {
        for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
          if (ds_containerDoorOrder.getCellData(i, "sendDt") == "") {
            ds_containerDoorOrder.setCellData(i, "chk", "T");
          }
        }
      } else {
        for (i = 0; i < ds_containerDoorOrder.getRowCount(); i++) {
          if (ds_containerDoorOrder.getCellData(i, "sendDt") == "") {
            ds_containerDoorOrder.setCellData(i, "chk", "F");
          }
        }
      }
    }
  } catch (e) {
    console.log("gr_containerDoorOrder_onheaderclick : " + e);
  }
};

//-------------------------------------------------------------------------
// Container Seq  OnExit event for=gr_containerDoorOrder event=OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_containerDoorOrder_onafteredit = function (rowIndex, columnIndex, value) {
  try {
    let Colid = gr_containerDoorOrder.getColumnID(columnIndex);
    //TODO exit가 2개임 둘다 체크하는지 확인할것
    for (let i = 0; i < ds_containerDoorOrder.getRowCount() - 1; i++) {
      for (let j = i + 1; j <= ds_containerDoorOrder.getRowCount(); j++) {
        if (ds_containerDoorOrder.getCellAllData(i, "bkdoorseq") == ds_containerDoorOrder.getCellAllData(j, "bkdoorseq")) {
          $c.gus.cfAlertMsg($p, $c.data.getMessage($p, E_MSG_CM_ERR_032, "Container Seq")); ////  @은(는) 중복될 수 없습니다.
          //gr_containerDoorOrder.Focus();
          gr_containerDoorOrder.setFocusedCell(j, "bkdoorseq", true); // forcus	//gr_containerDoorOrder.setColumn("bkdoorseq"); // forcus
          return false;
        }
      }
    }
    switch (Colid) {
      case "transcd":
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() != "") {
          if (ds_containerDoorOrder.getCellData(rowIndex, "internalTyp") == "1") {
            ds_containerDoorOrder.setCellData(rowIndex, "transnm", "");
            scwin.f_PopUpGrid("Department", rowIndex, "T");
          } else {
            ds_containerDoorOrder.setCellData(rowIndex, "transnm", "");
            scwin.f_PopUpGrid("Customer", rowIndex, "T");
          }
          //Name field 존재시 check.
          //Name Value 가 Blank 일경우 코드값을 Blank 한다.
        } else if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() == "") {
          ds_containerDoorOrder.setCellData(rowIndex, "transcd", "");
          ds_containerDoorOrder.setCellData(rowIndex, "transnm", "");
        }
        break;
      case "fcity":
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.     
        if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() != "") {
          ds_containerDoorOrder.setCellData(rowIndex, "fcitynm", "");
          scwin.f_PopUpGrid("PickupCy", rowIndex, "T");
          //Name field 존재시 check.
          //Name Value 가 Blank 일경우 코드값을 Blank 한다.
        } else if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() == "") {
          ds_containerDoorOrder.setCellData(rowIndex, "fcity", "");
          ds_containerDoorOrder.setCellData(rowIndex, "fcitynm", "");
        }
        break;
      case "doorcd":
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() != "") {
          ds_containerDoorOrder.setCellData(rowIndex, "doornm", "");
          scwin.f_PopUpGrid("Door", rowIndex, "T");
          //Name field 존재시 check.
          //Name Value 가 Blank 일경우 코드값을 Blank 한다.
        } else if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() == "") {
          ds_containerDoorOrder.setCellData(rowIndex, "doorcd", "");
          ds_containerDoorOrder.setCellData(rowIndex, "doornm", "");
        }
        break;
      case "tcity":
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        //if (ds_containerDoorOrder.NameValue(rowIndex,Colid).trim() != "" && ds_containerDoorOrder.NameValue(rowIndex,Colid) != olddata){                                
        if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() != "") {
          ds_containerDoorOrder.setCellData(rowIndex, "tcitynm", "");
          scwin.f_PopUpGrid("GateinCy", rowIndex, "T");
        } else if (ds_containerDoorOrder.getCellData(rowIndex, Colid).trim() == "") {
          ds_containerDoorOrder.setCellData(rowIndex, "tcity", "");
          ds_containerDoorOrder.setCellData(rowIndex, "tcitynm", "");
        }
        break;
      default:
        break;
    }
  } catch (e) {
    console.log("gr_containerDoorOrder_onafteredit : " + e);
  }
};

//-------------------------------------------------------------------------
// for=gr_containerDoorOrder event=OnPopup(Row,Colid,data)
//-------------------------------------------------------------------------
scwin.gr_containerDoorOrder_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    let Colid = gr_containerDoorOrder.getColumnID(columnIndex);
    switch (Colid) {
      case "transcd":
        if (ds_containerDoorOrder.getCellData(rowIndex, "internalTyp") == "1") {
          scwin.f_PopUpGrid("Department", rowIndex, "F");
        } else {
          scwin.f_PopUpGrid("Customer", rowIndex, "F");
        }
        break;
      case "fcity":
        scwin.f_PopUpGrid("PickupCy", rowIndex, "F");
        break;
      case "doorcd":
        scwin.f_PopUpGrid("Door", rowIndex, "F");
        break;
      case "tcity":
        scwin.f_PopUpGrid("GateinCy", rowIndex, "F");
        break;
    }
  } catch (e) {
    console.log("gr_containerDoorOrder_ontextimageclick : " + e);
  }
};

//-------------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, Row, pWinCloseTF, pAllSearchTF) {
  try {
    let pCode = "";
    let pName = "";
    switch (disGubun) {
      case "Customer":
        udc_ilcomCode.setSelectId("retrieveEngClntInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.grd_customer_callbackFunc, ds_containerDoorOrder.getCellData(Row, "transcd") //코드
        , ds_containerDoorOrder.getCellData(Row, "transnm") //코드명
        , pWinCloseTF, '10' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , 'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN' // Title순서
        , '140,300,100,100,100,100,100,,,100' // 보여주는 각 컬럼들의 	폭
        , '8,9' // 컬럼중에서 숨기는	컬럼 지정
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때	원도우의	사용자 정의	폭
        , null // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , 'Customer search,Customer Code,Customer Name' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
        break;
      case "Department":
        udc_ilcomCode.setSelectId("retrieveOpDeptCdInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.grd_department_callbackFunc, ds_containerDoorOrder.getCellData(Row, "transcd") //코드
        , ds_containerDoorOrder.getCellData(Row, "transnm") //코드명
        , pWinCloseTF, '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , "Code, Name" // Title순서
        , '80,230' // 보여주는	각 컬럼들의	폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때	원도우의	사용자 정의	폭
        , null // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , "Department,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
        break;
      case "PickupCy":
        udc_ilcomCode.setSelectId("retrieveWrkPlInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.grd_pickupCy_callbackFunc, ds_containerDoorOrder.getCellData(Row, "fcity") //코드
        , ds_containerDoorOrder.getCellData(Row, "fcitynm") //코드명
        , pWinCloseTF, '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , "Code, Name" // Title순서
        , '80,230' // 보여주는	각 컬럼들의	폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때	원도우의	사용자 정의	폭
        , null // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , "CY,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
        break;
      case "Door":
        udc_ilcomCode.setSelectId("retrieveWrkPlInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.grd_door_callbackFunc, ds_containerDoorOrder.getCellData(Row, "doorcd") //코드
        , ds_containerDoorOrder.getCellData(Row, "doornm") //코드명
        , pWinCloseTF, '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , "Code, Name" // Title순서
        , '80,230' // 보여주는	각 컬럼들의	폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때	원도우의	사용자 정의	폭
        , null // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , 'Door search,Door Code,Door Name' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
        break;
      case "GateinCy":
        udc_ilcomCode.setSelectId("retrieveWrkPlInfo");
        udc_ilcomCode.ilCommonPopUp(scwin.grd_gateinCy_callbackFunc, ds_containerDoorOrder.getCellData(Row, "tcity") //코드
        , ds_containerDoorOrder.getCellData(Row, "tcitynm") //코드명
        , pWinCloseTF, '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , "Code, Name" // Title순서
        , '80,230' // 보여주는	각 컬럼들의	폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때	원도우의	사용자 정의	폭
        , null // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , "CY,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
        break;
    }
  } catch (e) {
    console.log("f_PopUpGrid : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 호출 Customer 콜백
//-------------------------------------------------------------------------
scwin.grd_customer_callbackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_containerDoorOrder, ds_containerDoorOrder.getRowPosition(), "transcd", "transnm");
};

//-------------------------------------------------------------------------
// 그리드 호출 Department 콜백
//-------------------------------------------------------------------------
scwin.grd_department_callbackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_containerDoorOrder, ds_containerDoorOrder.getRowPosition(), "transcd", "transnm");
};

//-------------------------------------------------------------------------
// 그리드 호출 PickupCy 콜백
//-------------------------------------------------------------------------
scwin.grd_pickupCy_callbackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_containerDoorOrder, ds_containerDoorOrder.getRowPosition(), "fcity", "fcitynm");
};

//-------------------------------------------------------------------------
// 그리드 호출 Door 콜백
//-------------------------------------------------------------------------
scwin.grd_door_callbackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_containerDoorOrder, ds_containerDoorOrder.getRowPosition(), "doorcd", "doornm");
};

//-------------------------------------------------------------------------
// 그리드 호출 Door 콜백
//-------------------------------------------------------------------------
scwin.grd_gateinCy_callbackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_containerDoorOrder, ds_containerDoorOrder.getRowPosition(), "tcity", "tcitynm");
};

//-------------------------------------------------------------------------
// ASIS for=gr_containerDoorOrderQty event=OnPopup(Row,Colid,data)
//-------------------------------------------------------------------------
scwin.gr_containerDoorOrderQty_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    let Colid = gr_containerDoorOrderQty.getColumnID(columnIndex);
    switch (Colid) {
      case "qtytype":
        //ASIS f_PopUpGrid에 미정의되어있음.
        scwin.f_PopUpGrid("QtyType", rowIndex, "F");
        break;

      //case "realQtytype":
      //	f_PopUpGrid("QtyType", Row, "F");
      //	break;	

      /*
      TOBE 그리드 달력처리
      case "doorDt":
          cfOpenCalendar(gr_containerDoorOrderQty,rowIndex,Colid); 
          break;*/

      default:
        break;
    }
  } catch (e) {
    console.log("gr_containerDoorOrderQty_ontextimageclick : " + e);
  }
};

//-------------------------------------------------------------------------
// 콤보 창이 열릴때 발생 : 선택전 ASIS for=gr_containerDoorOrderQty event=OnDropDown(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_containerDoorOrderQty_onbeforeedit = function (rowIndex, columnIndex, value) {
  try {
    let Colid = gr_containerDoorOrderQty.getColumnID(columnIndex);
    //Type, MGNT 선택인경우에만 처리
    if (Colid == "qtytype" || Colid == "realQtytype") {
      scwin.f_doorTypeLoading();
    }
  } catch (e) {
    console.log("gr_containerDoorOrderQty_onbeforeedit : " + e);
  }
};

//-------------------------------------------------------------------------
// 콤보 창이 닫힐때 발생 선택이 되면 : gr_containerDoorOrderQty event=OnCloseUp(row,colid)
//-------------------------------------------------------------------------
scwin.gr_containerDoorOrderQty_onviewchange = function (info) {
  try {
    var Colid = gr_containerDoorOrderQty.getColumnID(info.colIndex);
    //Type, MGNT 선택인경우에만 처리
    if (Colid == "qtytype" || Colid == "realQtytype") {
      scwin.f_containerTypeLoading();
    }
  } catch (e) {
    console.log("gr_containerDoorOrderQty_onviewchange : " + e);
  }
};

//-------------------------------------------------------------------------
// 콤보 창이 열릴때 발생 : 선택전 ASIS for=gr_containerBookingCont event=OnDropDown(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_containerBookingCont_onbeforeedit = function (rowIndex, columnIndex, value) {
  try {
    let Colid = gr_containerBookingCont.getColumnID(columnIndex);
    //Type, MGNT 선택인경우에만 처리
    if (Colid == "cnttype") {
      scwin.f_containerTypeLoading();
    }
  } catch (e) {
    console.log("gr_containerBookingCont_onbeforeedit : " + e);
  }
};

//-------------------------------------------------------------------------
// 컨테이너그리드 입력부 Upper처리 ASIS edit = "Upper"
//-------------------------------------------------------------------------
scwin.gr_containerBookingCont_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "cntno":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "realCntrNo":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "cntseal1":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "cntseal2":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 영문 대문자 치환
//-------------------------------------------------------------------------
scwin.ed_carrierBkNo_oneditkeyup = function (info, e) {
  let currentValue = this.getValue();
  let upperValue = currentValue.toUpperCase();
  this.setValue(upperValue);
};

//-------------------------------------------------------------------------
// 영문 대문자 치환
//-------------------------------------------------------------------------
scwin.ed_cnd_ed_bkNo_onkeyup = function (e) {
  let currentValue = this.getValue();
  let upperValue = currentValue.toUpperCase();
  this.setValue(upperValue);
};

//-------------------------------------------------------------------------
// 영문 대문자 치환
//-------------------------------------------------------------------------
scwin.ed_cnttype1_oneditkeyup = function (info, e) {
  let currentValue = this.getValue();
  let upperValue = currentValue.toUpperCase();
  this.setValue(upperValue);
};
scwin.ed_cnttype2_onkeyup = function (e) {
  let currentValue = this.getValue();
  let upperValue = currentValue.toUpperCase();
  this.setValue(upperValue);
};
scwin.ed_cnttype3_onkeyup = function (e) {
  let currentValue = this.getValue();
  let upperValue = currentValue.toUpperCase();
  this.setValue(upperValue);
};
scwin.ed_cnttype4_onkeyup = function (e) {
  let currentValue = this.getValue();
  let upperValue = currentValue.toUpperCase();
  this.setValue(upperValue);
};

//-------------------------------------------------------------------------
// Door Order 입력부 Upper처리 ASIS edit = "Upper"
//-------------------------------------------------------------------------
scwin.gr_containerDoorOrder_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "fcity":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "tcity":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "doorcd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.doordtFormat = function (value, rowIdx, colIdx) {
  let date = value.substring(0, 8);
  let time = value.substring(8);
  let rtnData = "";

  //yyyy/MM/dd-HH:mm 값을 입력시에도 유지하기 위함.
  if (value.length == 0) {
    //
  } else if (value.length <= 8) {
    rtnData = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2);
    rtnData = rtnData + "- : ";
  } else {
    let hour = String(time).substr(0, 2);
    let minute = String(time).substr(2, 2);
    time = hour + ":" + minute;
    rtnData = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2);
    rtnData = rtnData + "-" + time;
  }
  return rtnData;
};

//-------------------------------------------------------------------------
// 그리드 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.fdtFormat = function (value, rowIdx, colIdx) {
  let date = value.substring(0, 8);
  let time = value.substring(8);
  let rtnData = "";

  //yyyy/MM/dd-HH:mm 값을 입력시에도 유지하기 위함.
  if (value.length == 0) {
    //
  } else if (value.length <= 8) {
    rtnData = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2);
    rtnData = rtnData + "- : ";
  } else {
    let hour = String(time).substr(0, 2);
    let minute = String(time).substr(2, 2);
    time = hour + ":" + minute;
    rtnData = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2);
    rtnData = rtnData + "-" + time;
  }
  return rtnData;
};

//-------------------------------------------------------------------------
// 그리드 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.closingdtFormat = function (value, rowIdx, colIdx) {
  let date = value.substring(0, 8);
  let time = value.substring(8);
  let rtnData = "";

  //yyyy/MM/dd-HH:mm 값을 입력시에도 유지하기 위함.
  if (value.length == 0) {
    //
  } else if (value.length <= 8) {
    rtnData = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2);
    rtnData = rtnData + "- : ";
  } else {
    let hour = String(time).substr(0, 2);
    let minute = String(time).substr(2, 2);
    time = hour + ":" + minute;
    rtnData = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2);
    rtnData = rtnData + "-" + time;
  }
  return rtnData;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_Search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Booking No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_bkNo',placeholder:'',style:'width:150px;',mandatory:'true',title:' Booking NO',UpperFlag:'1',maxlength:'16',allowChar:'A-Za-z0-9','ev:onkeyup':'scwin.ed_cnd_ed_bkNo_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',userAuth:'R',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tabControl1',style:'','ev:ontabclick':'scwin.tabControl1_ontabclick'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Booking',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Door Order',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'height: auto;'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Booking No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bkNo',placeholder:'',style:'width:101px;',allowChar:'a-zA-Z0-9',maxlength:'16',readOnly:'true',objType:'key',UpperFlag:'1',ref:'data:ds_containerBookingList.bkNo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_bkPic',placeholder:'',style:'width:0px;',allowChar:'0-9',maxlength:'6',title:' BkPic',ref:'data:ds_containerBookingList.bkPic'}},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_bkPicNm',placeholder:'',style:'width: 85px;',objType:'data',mandatory:'true',UpperFlag:'1',title:' BkPic Name',maxlength:'50',ref:'data:ds_containerBookingList.bkPicNm','ev:onviewchange':'scwin.ed_txt_bkPicNm_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp24',style:'',type:'button','ev:onclick':'scwin.btn_PopUp24_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Cargo Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',objType:'data',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cfs',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_containerBookingList.cfs'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Request/Result',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_img_Date1',refDataMap:'ds_containerBookingList',refEdDt:'etRsltsDt',refStDt:'reDt',style:'',edFromId:'ed_reDt',edToId:'ed_etRsltsDt',titleFrom:'Request Date',titleTo:'Request Date',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier BK ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_carrierBkNo',placeholder:'',class:'',title:'Carrier Booking No',maxlength:'20',allowChar:'a-zA-Z0-9',UpperFlag:'1',objType:'data',ref:'data:ds_containerBookingList.carrierBkNo','ev:oneditkeyup':'scwin.ed_carrierBkNo_oneditkeyup'}},{T:1,N:'xf:select',A:{appearance:'full',style:'',id:'chb_iptYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',ref:'data:ds_containerBookingList.iptYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ref.No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_refNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'20',UpperFlag:'1',ref:'data:ds_containerBookingList.refNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Triangle ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{appearance:'full',style:'',id:'chb_triYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',ref:'data:ds_containerBookingList.triYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_triItemType',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'$blank',ref:'data:ds_containerBookingList.triItemType'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_triWrkDesc',placeholder:'',class:'',objType:'data',maxlength:'20',UpperFlag:'1',ref:'data:ds_containerBookingList.triWrkDesc'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',maxlengthName:'50',codeId:'ed_docCd',nameId:'ed_txt_docCust',id:'udc_doc',btnId:'btn_PopUp1',validTitle:'Shipper',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_doc_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_doc_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_doc_onclickEvent',refDataCollection:'ds_containerBookingList',code:'docCd',name:'docCust',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkPlNm',placeholder:'',style:'width:150px;',maxlength:'20',objType:'data',UpperFlag:'1',ref:'data:ds_containerBookingList.wrkPlNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FREE DAY ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_freeDay',placeholder:'',style:'width:150px;',maxlength:'100',objType:'data',UpperFlag:'1',ref:'data:ds_containerBookingList.freeDay'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Customer ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',allowCharCode:'0-9',mandatoryCode:'true',validTitle:' Customer',codeId:'ed_custCd',nameId:'ed_txt_custNm',id:'udc_cust',btnId:'btn_PopUp3',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',maxlengthName:'50','ev:onviewchangeNameEvent':'scwin.udc_cust_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_cust_onclickEvent',refDataCollection:'ds_containerBookingList',code:'custCd',name:'custNm','ev:onblurCodeEvent':'scwin.udc_cust_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEAM ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_custTeam',placeholder:'',style:'width:150px;',objType:'data',maxlength:'20',UpperFlag:'1',ref:'data:ds_containerBookingList.custTeam'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처담당 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_custTeamPic',placeholder:'',style:'width:150px;',objType:'data',maxlength:'20',UpperFlag:'1',ref:'data:ds_containerBookingList.custTeamPic'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Factory ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',allowCharCode:'0-9',codeId:'ed_facCd',nameId:'ed_txt_facNm',id:'udc_fac',btnId:'btn_PopUp3',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',maxlengthName:'50','ev:onviewchangeNameEvent':'scwin.udc_fac_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_fac_onclickEvent',refDataCollection:'ds_containerBookingList',code:'facCd',name:'facNm','ev:onblurCodeEvent':'scwin.udc_fac_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CFS ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cfsNm',placeholder:'',style:'width:150px;',objType:'data',maxlength:'20',UpperFlag:'1',ref:'data:ds_containerBookingList.cfsNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SHORING ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_shrNm',placeholder:'',style:'width:150px;',objType:'data',maxlength:'20',UpperFlag:'1',ref:'data:ds_containerBookingList.shrNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_liner',nameId:'ed_txt_linernm',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',id:'udc_liner',btnId:'btn_PopUp5','ev:onviewchangeNameEvent':'scwin.udc_liner_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_liner_onclickEvent',refDataCollection:'ds_containerBookingList',code:'liner',name:'linernm','ev:onblurCodeEvent':'scwin.udc_liner_onblurCodeEvent',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC CLOSING ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_docClosingDt',style:'',displayFormat:'yyyy.MM/dd',objType:'data',ref:'data:ds_containerBookingList.docClosingDt'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_docClosingTime',style:'',displayFormat:'HH:mm',allowChar:'0-9',maxlength:'4',objType:'data',ref:'data:ds_containerBookingList.docClosingTime'}},{T:1,N:'xf:input',A:{class:'',id:'ed_docPic',placeholder:'',style:'width: 0px;',objType:'data',mandatory:'true',UpperFlag:'1',maxlength:'8',ref:'data:ds_containerBookingList.docPic'}},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_docPicNm',placeholder:'',style:'width: 50px;',objType:'data',maxlength:'50','ev:onviewchange':'scwin.ed_txt_docPicNm_onviewchange',ref:'data:ds_containerBookingList.docPicNm'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp21',style:'',type:'button','ev:onclick':'scwin.btn_PopUp21_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CARGO CLOSING ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group3',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_cargoClosingDt',style:'',displayFormat:'yyyy/MM/dd',title:'CARGO CLOSING',objType:'data',mandatory:'true',ref:'data:ds_containerBookingList.cargoClosingDt'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_cargoClosingTime',style:'',displayFormat:'HH:mm',allowChar:'0-9',maxlength:'4',objType:'data',ref:'data:ds_containerBookingList.cargoClosingTime'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Vessel ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',codeId:'ed_vslCd',btnId:'btn_PopUp7',nameId:'ed_txt_vslNm',id:'udc_vsl',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_vsl_onclickEvent',refDataCollection:'ds_containerBookingList',code:'vslCd',name:'vslNm','ev:onblurCodeEvent':'udc_vsl_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VOY ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_voy',placeholder:'',style:'width:150px;',maxlength:'100',objType:'data',UpperFlag:'1',ref:'data:ds_containerBookingList.voy'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_salesCd',id:'udc_sales',nameId:'ed_txt_salesNm',objTypeCode:'data',objTypeName:'data',maxlengthCode:'8',maxlengthName:'50',btnId:'btn_PopUp8','ev:onviewchangeNameEvent':'scwin.udc_sales_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_sales_onclickEvent',selectID:'',code:'salesCd',name:'salesNm',refDataCollection:'ds_containerBookingList','ev:onblurCodeEvent':'udc_sales_onblurCodeEvent',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'5',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',codeId:'ed_lodCd',nameId:'ed_txt_lodNm',id:'udc_lod',btnId:'btn_PopUp9','ev:onviewchangeNameEvent':'scwin.udc_lod_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_lod_onclickEvent',refDataCollection:'ds_containerBookingList',code:'lodCd',name:'lodNm','ev:onblurCodeEvent':'scwin.udc_lod_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_disCd',nameId:'ed_txt_disNm',id:'udc_dis',btnId:'btn_PopUp10',maxlengthCode:'5',maxlengthName:'50','ev:onviewchangeNameEvent':'scwin.udc_dis_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dis_onclickEvent',refDataCollection:'ds_containerBookingList',code:'disCd',name:'disNm','ev:onblurCodeEvent':'scwin.udc_dis_onblurCodeEvent',allowCharCode:'a-zA-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Delivery ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'5',maxlengthName:'50',allowCharCode:'a-zA-Z',codeId:'ed_dlvCd',nameId:'ed_txt_dlvNm',btnId:'btn_PopUp11',id:'udc_dlv','ev:onviewchangeNameEvent':'scwin.udc_dlv_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dlv_onclickEvent',refDataCollection:'ds_containerBookingList',code:'dlvCd',name:'dlvNm','ev:onblurCodeEvent':'scwin.udc_dlv_onblurCodeEvent',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Department ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',validTitle:'Department',codeId:'ed_dept',nameId:'ed_txt_deptnm',id:'udc_dept',btnId:'btn_PopUp13','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent',refDataCollection:'ds_containerBookingList',code:'dept',name:'deptnm','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETD ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_bkEtd',pickerType:'dynamic',placeholderLocaleRef:'yearMonthDate',style:'',mandatory:'true',title:'ETD',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_containerBookingList.bkEtd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETA ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_bkEta',pickerType:'dynamic',placeholderLocaleRef:'yearMonthDate',style:'',mandatory:'true',title:'ETA',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_containerBookingList.bkEta'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S Vessel ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_ts1VsslCd',nameId:'ed_txt_ts1VsslNm',id:'udc_ts1Vssl',btnId:'btn_PopUp7',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_ts1Vssl_onclickEvent',refDataCollection:'ds_containerBookingList',code:'ts1VsslCd',name:'ts1VsslNm','ev:onblurCodeEvent':'scwin.udc_ts1Vssl_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S VOY ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ts1Voy',placeholder:'',style:'width:150px;',maxlength:'100',objType:'data',UpperFlag:'1',ref:'data:ds_containerBookingList.ts1Voy'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S Port ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_ts1PortCd',nameId:'ed_txt_ts1PortNm',id:'udc_ts1Port',btnId:'btn_PopUp9',maxlengthCode:'5',maxlengthName:'50',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_ts1Port_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_ts1Port_onclickEvent',refDataCollection:'ds_containerBookingList',code:'ts1PortCd',name:'ts1PortNm','ev:onblurCodeEvent':'scwin.udc_ts1Port_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S ETA ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ts1Eta',pickerType:'dynamic',placeholderLocaleRef:'yearMonthDate',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'ETA',ref:'data:ds_containerBookingList.ts1Eta'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S ETD ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ts1Etd',pickerType:'dynamic',placeholderLocaleRef:'yearMonthDate',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'ETD',ref:'data:ds_containerBookingList.ts1Etd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S Vessel ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',codeId:'ed_ts2VsslCd',nameId:'ed_txt_ts2VsslNm',id:'udc_ts2Vssl',btnId:'btn_PopUp7','ev:onviewchangeCodeEvent':'scwin.udc_ts2Vssl_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_ts2Vssl_onclickEvent',refDataCollection:'ds_containerBookingList',code:'ts2VsslCd',name:'ts2VsslNm','ev:onblurCodeEvent':'scwin.udc_ts2Vssl_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S VOY ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ts2Voy',placeholder:'',style:'width:150px;',maxlength:'100',objType:'data',UpperFlag:'1',ref:'data:ds_containerBookingList.ts2Voy'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S Port ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'5',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',codeId:'ed_ts2PortCd',nameId:'ed_txt_ts2PortNm',id:'udc_ts2Port',btnId:'btn_PopUp9','ev:onviewchangeNameEvent':'scwin.udc_ts2Port_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_ts2Port_onclickEvent',refDataCollection:'ds_containerBookingList',code:'ts2PortCd',name:'ts2PortNm','ev:onblurCodeEvent':'scwin.udc_ts2Port_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S ETA ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ts2Eta',pickerType:'dynamic',placeholderLocaleRef:'yearMonthDate',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'data',title:'ETA',ref:'data:ds_containerBookingList.ts2Eta'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'T/S ETD ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ts2Etd',pickerType:'dynamic',placeholderLocaleRef:'yearMonthDate',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_containerBookingList.ts2Etd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bkAgent',nameId:'ed_txt_bkAgentnm',id:'udc_bkAgent',btnId:'btn_PopUp23',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',maxlengthName:'50','ev:onviewchangeNameEvent':'scwin.udc_bkAgent_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bkAgent_onclickEvent',refDataCollection:'ds_containerBookingList',code:'bkAgent',name:'bkAgentnm','ev:onblurCodeEvent':'scwin.udc_bkAgent_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Term ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payTerm',style:'width: 180px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'$blank',ref:'data:ds_containerBookingList.payTerm'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PREPAID AS ARRANGED'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'COLLECT AS ARRANGED'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Contract No ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_contractno',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:ds_containerBookingList.contractno','ev:onbeforeselect':'scwin.lc_contractno_onbeforeselect','ev:onclick':'scwin.lc_contractno_onclick',displayMode:'label',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'500',selectedRowColor:'',label:'labelInfo',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'',headerStyle:''}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Service Term ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_svcType',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'$blank',ref:'data:ds_containerBookingList.svcType',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CY/CY'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CY/CY'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CY/CFS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CY/CFS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFS/CY'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CFS/CY'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFS/CFS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CFS/CFS'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Item ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_itemCd',nameId:'ed_txt_itemNm',id:'udc_item',btnId:'btn_PopUp14',maxlengthCode:'8',maxlengthName:'60',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_item_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_item_onclickEvent',refDataCollection:'ds_containerBookingList',code:'itemCd',name:'itemNm','ev:onblurCodeEvent':'scwin.udc_item_onblurCodeEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Area ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',UpperFlagCode:'1',codeId:'ed_bkArea',nameId:'ed_txt_bkAreanm',id:'udc_bkArea',btnId:'btn_PopUp16',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_bkArea_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_bkArea_onclickEvent',refDataCollection:'ds_containerBookingList',code:'bkArea',name:'bkAreanm','ev:onblurCodeEvent':'scwin.udc_bkArea_onblurCodeEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Incoterms',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bkIncoterm',style:'width: 150px;',submenuSize:'fixed',objType:'data',chooseOptionLabel:'$blank',ref:'data:ds_containerBookingList.bkIncoterm',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EXW'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'EXW'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FCA'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FCA'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FAS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FAS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'FOB'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'FOB'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CFR'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CIF'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CIF'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CPT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CPT'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CIP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'CIP'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DAF'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DAF'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DES'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEQ'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DEQ'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DDU'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DDU'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DDP'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'DDP'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Package ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_pkg',placeholder:'',class:'',maxlength:'10',allowChar:'0-9',objType:'data',ref:'data:ds_containerBookingList.pkg',displayFormat:'#,###'}},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',hideName:'Y',UpperFlagCode:'1',maxlengthName:'50',maxlengthCode:'2',objTypeCode:'data',objTypeName:'data',codeId:'ed_unit',nameId:'ed_txt_unitnm',id:'udc_unit',btnId:'btn_PopUp15','ev:onviewchangeNameEvent':'scwin.udc_unit_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_unit_onclickEvent',refDataCollection:'ds_containerBookingList',code:'unit',name:'unitnm','ev:onblurCodeEvent':'scwin.udc_unit_onblurCodeEvent',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BUYING ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_refBuyingAmt',placeholder:'',style:'width:150px;',maxlength:'20',allowChar:'0-9',objType:'data',dataType:'number',ref:'data:ds_containerBookingList.refBuyingAmt',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SELLING ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_refSellingAmt',placeholder:'',style:'width:150px;',maxlength:'20',allowChar:'0-9',objType:'data',dataType:'number',ref:'data:ds_containerBookingList.refSellingAmt',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_wgt',placeholder:'',style:'width:150px;',maxlength:'13.3',allowChar:'0-9.',objType:'data',dataType:'float',ref:'data:ds_containerBookingList.wgt',displayFormat:'#,##0.###'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnttype1',placeholder:'',style:'width: 50px;',objType:'data',mandatory:'true',UpperFlag:'1',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_cnttype1_onblur',ref:'data:ds_containerBookingList.cnttype1','ev:oneditkeyup':'scwin.ed_cnttype1_oneditkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp17',style:'',type:'button','ev:onclick':'scwin.btn_PopUp17_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnttype2',placeholder:'',style:'width: 50px;',objType:'data',mandatory:'true',UpperFlag:'1',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_cnttype2_onblur',ref:'data:ds_containerBookingList.cnttype2','ev:onkeyup':'scwin.ed_cnttype2_onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp18',style:'',type:'button','ev:onclick':'scwin.btn_PopUp18_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnttype3',placeholder:'',style:'width: 50px;',objType:'data',mandatory:'true',UpperFlag:'1',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_cnttype3_onblur',ref:'data:ds_containerBookingList.cnttype3','ev:onkeyup':'scwin.ed_cnttype3_onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp19',style:'',type:'button','ev:onclick':'scwin.btn_PopUp19_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnttype4',placeholder:'',style:'width: 50px;',objType:'data',mandatory:'true',UpperFlag:'1',maxlength:'4',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_cnttype4_onblur',ref:'data:ds_containerBookingList.cnttype4','ev:onkeyup':'scwin.ed_cnttype4_onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUp20',style:'',type:'button','ev:onclick':'scwin.btn_PopUp20_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Remark',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ed_txt_remarkMaster',style:'',objType:'data',ref:'data:ds_containerBookingList.remarkMaster'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_msr',placeholder:'',style:'width:150px;',maxlength:'13.3',allowChar:'0-9.',objType:'data',dataType:'float',ref:'data:ds_containerBookingList.msr',displayFormat:'#,##0.###'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR QTY ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:75px;',id:'ed_cntqty1',placeholder:'',class:'tar',maxlength:'3',allowChar:'0-9',objType:'data',ref:'data:ds_containerBookingList.cntqty1'}},{T:1,N:'xf:input',A:{style:'width:75px;',id:'ed_cntqty2',placeholder:'',class:'tar',maxlength:'3',allowChar:'0-9',objType:'data',ref:'data:ds_containerBookingList.cntqty2'}},{T:1,N:'xf:input',A:{style:'width:75px;',id:'ed_cntqty3',placeholder:'',class:'tar',maxlength:'3',allowChar:'0-9',objType:'data',ref:'data:ds_containerBookingList.cntqty3'}},{T:1,N:'xf:input',A:{style:'width:75px;',id:'ed_cntqty4',placeholder:'',class:'tar',maxlength:'3',allowChar:'0-9',objType:'data',ref:'data:ds_containerBookingList.cntqty4'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Booking Detail',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpFn:'N',gridID:'gr_houseblList',gridDownUserAuth:'X',gridDownFn:'scwin.f_RunExcel1',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',style:'',autoFit:'allColumn',id:'gr_houseblList',visibleRowNum:'5',class:'wq_gvw',readOnly:'true',resize:'true',columnMove:'true',dataList:'data:ds_houseblList',sortable:'false','ev:oncelldblclick':'scwin.gr_houseblList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'SEQ',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'ETD',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'ETA',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'House No',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'Consol No',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'Master No',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'Consignee',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'CNTR type1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'CNTR type2',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'CNTR type3',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'CNTR type4',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'PKG',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'Weight',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'Measure',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'B/L Type',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'Cargo type',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'KCOMCD',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'HHIO',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hhbkgseq',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hhetd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hheta',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhblno',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mhno',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhmblno',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhc1',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hhcnt1type',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hhcnt2type',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hhcnt3type',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hhcnt4type',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhpkg',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhgwgt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhmsr',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'autono',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhbltype',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'kcomcd',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhio',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 70%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Door Order',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownFn:'scwin.f_RunExcel2',gridID:'gr_containerDoorOrder'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',style:'',id:'gr_containerDoorOrder',resize:'true',columnMove:'true',dataList:'data:ds_containerDoorOrder',visibleRowNum:'5',class:'wq_gvw',rowStatusVisible:'true','ev:onheaderclick':'scwin.gr_containerDoorOrder_onheaderclick','ev:onafteredit':'scwin.gr_containerDoorOrder_onafteredit','ev:ontextimageclick':'scwin.gr_containerDoorOrder_ontextimageclick','ev:oneditkeyup':'scwin.gr_containerDoorOrder_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'column1',displayMode:'label',value:' '}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'Order Date',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'Order No',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'SEQ',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'Type',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'Trucker',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'Trucker name',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'Pickup Date',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'Pickup CY',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'Pickup name',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column5',value:'Door',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'Door name',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'Gatein CY',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'Gatein name',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',displayMode:'label',value:'Closing Time',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',displayMode:'label',value:'Send Date',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label',value:'Remark',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',displayMode:'label',value:'Group No(Header)',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',displayMode:'label',value:'TR Booking',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label',value:'TR Order',class:'txt-blue',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'doordt',displayMode:'label',textAlign:'left',calendarValueType:'yearMonthDateTime',displayFormatter:'scwin.doordtFormat'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bkNo',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bkdoorseq',displayMode:'label',textAlign:'left',maxLength:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'internalTyp',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'transcd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'transnm',displayMode:'label',textAlign:'left',maxLength:'50',maxByteLength:'50'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'fdt',displayMode:'label',textAlign:'center',calendarValueType:'yearMonthDateTime',displayFormatter:'scwin.fdtFormat'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'fcity',displayMode:'label',textAlign:'left',allowChar:'A-Za-z0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fcitynm',displayMode:'label',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'doorcd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doornm',displayMode:'label',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'tcity',displayMode:'label',textAlign:'left',allowChar:'A-Za-z0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'tcitynm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'closingdt',displayMode:'label',textAlign:'center',calendarValueType:'yearMonthDateTime',displayFormatter:'scwin.closingdtFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sendDt',displayMode:'label',textAlign:'left',displayFormat:'####-##-##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'remark',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'groupNo',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bookingNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mcomOdrNo',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_OrderSend',style:'',type:'button','ev:onclick':'scwin.f_orderSend',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Order Send'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_OrderSendDel',style:'',type:'button','ev:onclick':'scwin.f_orderSendDel',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Order Send Delete'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',gridID:'gr_containerDoorOrderQty',btnRowAddYn:'Y',btnCancelYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_addRow1',rowDelFunction:'scwin.f_deleteRow1',cancelFunction:'scwin.f_cancelRow1',id:'udc_addDel1',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''}},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group18',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',style:'',id:'gr_containerDoorOrderQty',resize:'true',columnMove:'true',dataList:'data:ds_containerDoorOrderQty',visibleRowNum:'5',class:'wq_gvw',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_containerDoorOrderQty_ontextimageclick',gridName:'containerDoorOrderQty List','ev:onbeforeedit':'scwin.gr_containerDoorOrderQty_onbeforeedit','ev:onviewchange':'scwin.gr_containerDoorOrderQty_onviewchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'Order No',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'SEQ',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'DATE',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'Type',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'MGNT',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'QTY',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'V.QTY',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'Car',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'Trans',displayMode:'label',class:'txt-blue',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bkNo',displayMode:'label',hidden:'true',hiddenCol:'true',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bkdoorseq',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'doorDt',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'qtytype',displayMode:'label',textAlign:'left',mandatory:'true',selectedData:'false',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_doorGridType'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'realQtytype',displayMode:'label',textAlign:'left',selectedData:'false',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_doorGridType'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',maxLength:'13',allowChar:'0-9',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vehclQty',displayMode:'label',textAlign:'left',maxLength:'3',allOption:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'carCondCd',displayMode:'label',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeIL007_1'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'transCondCd',displayMode:'label',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Single'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Return'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:3,text:'\n    										-'},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',gridID:'gr_containerDoorOrderQty',btnRowAddYn:'Y',btnCancelYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_addRow2',rowDelFunction:'scwin.f_deleteRow2',cancelFunction:'scwin.f_cancelRow2',id:'udc_addDel2',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 80%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Container',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section5',style:'',id:'',gridUpYn:'N',gridDownFn:'scwin.f_RunExcel3',gridID:'gr_containerBookingCont'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section5',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',style:'',id:'gr_containerBookingCont',resize:'true',columnMove:'true',dataList:'data:ds_containerBookingCont',visibleRowNum:'2',class:'wq_gvw',rowStatusVisible:'true',gridName:'containerBookingCont List','ev:onbeforeedit':'scwin.gr_containerBookingCont_onbeforeedit','ev:oneditkeyup':'scwin.gr_containerBookingCont_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'Order No',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'SEQ',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'Container No',displayMode:'label',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'R-Container No',displayMode:'label',class:'txt-blue',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'Type',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'CNTR DATE',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'CFS DATE(IN)',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'CFS DATE(WRK)',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'Seal No1',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'Seal No2',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'Package',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'Weight',displayMode:'label',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'Measure',displayMode:'label',class:'txt-blue',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bkNo',displayMode:'label',hidden:'true',hiddenCol:'true',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bkdoorseq',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntno',displayMode:'label',textAlign:'left',mandatory:'true',maxLength:'11',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realCntrNo',displayMode:'label',textAlign:'left',mandatory:'true',maxLength:'11',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'cnttype',displayMode:'label',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_containerGridType'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'cntrDate',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'cfsInDate',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'cfsWrkDate',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntseal1',displayMode:'label',textAlign:'left',maxLength:'20',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntseal2',displayMode:'label',textAlign:'left',maxLength:'20',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntpkg',displayMode:'label',textAlign:'right',allowChar:'0-9',maxLength:'13',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntwgt',displayMode:'label',textAlign:'right',maxLength:'13.3',dataType:'float',allowChar:'0-9.',displayFormat:'#,##0.###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntmsrt',displayMode:'label',textAlign:'right',maxLength:'12.3',dataType:'float',allowChar:'0-9.',displayFormat:'#,##0.###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'CNT 총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'PKG',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_totpkg',placeholder:'',class:'tar',maxlength:'12.3',allowChar:'0-9.',objType:'data',dataType:'float',readOnly:'true',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'WGT',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_totwgt',placeholder:'',class:'tar',maxlength:'13.3',allowChar:'0-9.',objType:'data',dataType:'float',displayFormat:'#,##0.###'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'MSR',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_totmsr',placeholder:'',class:'tar',maxlength:'12.3',allowChar:'0-9.',objType:'data',dataType:'float',displayFormat:'#,##0.###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_CntrReceive',type:'button',class:'btn','ev:onclick':'scwin.f_cntrReceive'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CNTR Receive'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',gridID:'gr_containerBookingCont',btnRowAddYn:'Y',btnCancelYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',btnCancelObj:'',rowAddFunction:'scwin.f_addRow3',rowDelFunction:'scwin.f_deleteRow3',cancelFunction:'scwin.f_cancelRow3',id:'udc_addDel3',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Door Order Remark',class:'tit'}}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'ed_txa_remark',style:'',ref:'data:ds_containerDoorOrder.remark'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Find',type:'button',class:'btn','ev:onclick':'scwin.f_openPgm1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_HouseBl',type:'button',class:'btn','ev:onclick':'scwin.f_openPgm2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H B/L'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_DirectBl',type:'button',class:'btn','ev:onclick':'scwin.f_openPgm3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'D B/L'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Copy',label:'Copy',style:'',type:'button','ev:onclick':'scwin.f_Copy',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Copy'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',userAuth:'R',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',label:'Create',style:'',type:'button','ev:onclick':'scwin.f_Create',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'Update',style:'',type:'button','ev:onclick':'scwin.f_Update',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Print',label:'Print',style:'',type:'button','ev:onclick':'scwin.f_Print',userAuth:'P',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]},{T:1,N:'w2:udc_ilcomCode',A:{btnId:'',codeId:'',id:'udc_ilcomCode',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})