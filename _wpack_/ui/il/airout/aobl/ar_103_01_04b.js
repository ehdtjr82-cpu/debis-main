/*amd /ui/il/airout/aobl/ar_103_01_04b.xml 198772 259f577b8cde92cffc3e6b8b4f53f20b0aebdb0f44a187ed47e2506014c166f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_InvoiceCheckParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaAirCls',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gbun',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spRtn',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spMsg',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_InvoiceCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SellingFreightInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_SellingFreightInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name11',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'name12',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'name15',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'name17',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'exRate',name:'name18',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name19',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name20',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'name21',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCdCopy',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currow',name:'name40',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BuyingFreightInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_BuyingFreightInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'currow',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'pchsSeq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'kcomcd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'seaAirCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'pchsClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'pchsClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'mhno'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'selpchItemCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'fareEngCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'fareEngNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'fareGrpCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'fareUnit'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'locPtnCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'mblHblCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name18',id:'drcrCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name19',id:'ppccCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name20',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name21',id:'qty',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name22',id:'grossWt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name23',id:'chgWt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name24',id:'trfUpr'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name25',id:'pchsUpr',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name26',id:'usdAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name27',id:'exRate'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name28',id:'exRateTyp'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name29',id:'rateCls'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name30',id:'commItem'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name31',id:'prtnGrpNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name32',id:'prtnUpr'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name33',id:'prtnAmt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name34',id:'sellDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name35',id:'sellDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name36',id:'pchsTyp'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name37',id:'rsltsStdDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name38',id:'pchsAmt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name39',id:'vat',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name40',id:'pchsAmtFcrc',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name41',id:'pchsCertiNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name42',id:'vatYn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name43',id:'vehclNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name44',id:'vehclYn'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_frt_condition'},E:[{T:1,N:'w2:keyInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mmhno',saveRemovedData:'true','ev:ondataload':'scwin.ds_mmhno_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_FreightSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_postDtDataSet',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ExRate',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_FcodeInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'운임영문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'매출입항목 영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'운임약호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'해운항공구분 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'B/L 출력코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirOtherTariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirCustBookingCargoPickupList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromDistrictCd',name:'출발지  지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDistrictCd',name:'도착지 지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerCd',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCd',name:'운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'편도:1/왕복:2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullYn',name:'독차 여부 0:1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cwht',name:'weight',dataType:'text',defaultValue:'',encYN:'',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'wtBreak',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTyp',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNm',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirFreightTariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asgb',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rank',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirportInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirTruckingTariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transRate',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_tmpCnd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'blno',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rtrvTypCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_MasterFreightInfo',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.ds_MasterFreightInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcomcd',name:'법인코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blno',name:'Master B/L No'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhno',name:'Consol No'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cucd',name:'Currency Type'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pfchg',name:'(PP) Freight Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cfchg',name:'(CC) Freight Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pvchg',name:'(PP) Valuation Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cvchg',name:'(CC) Valuation Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pachg',name:'(PP) Total Agent Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cachg',name:'(CC) Total Agent Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pcchg',name:'(PP) Total Carrier Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ccchg',name:'(CC) Total Carrier Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ptchg',name:'(PP) Total Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ctchg',name:'(CC) Total Charge',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'lrate',name:'항공사단가',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ulRate',name:'항공사 외화 단가'}},{T:1,N:'w2:column',A:{dataType:'number',id:'lcharge',name:'항공사 Air Freight 원화금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ulCharge',name:'항공사 Air Freight 외화금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'comm',name:'Commision (%)',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cchg',name:'항공사 Commision 원화금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ucchg',name:'항공사 Commision 외화금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cvat',name:'항공사 Commision VAT',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'ucvat',name:'USD VAT'}},{T:1,N:'w2:column',A:{dataType:'number',id:'disc',name:'Discount (%)',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'dchg',name:'Discount 원화금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'udchg',name:'Discount 외화금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'nert',name:'Nego 원화단가',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'unert',name:'Nego 외화단가'}},{T:1,N:'w2:column',A:{dataType:'number',id:'tcwht',name:'Chargeable Weight'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exgb',name:'적용환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exdt',name:'환율일자'}},{T:1,N:'w2:column',A:{dataType:'number',id:'rate',name:'환율',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'exrate',name:'USD 환율',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'number',id:'innerPkg',name:'Inner Package',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'Order No'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hodrNo',name:'Direct House Order No'}},{T:1,N:'w2:column',A:{dataType:'number',id:'mftpkg',name:'Package'}},{T:1,N:'w2:column',A:{dataType:'number',id:'mftwht',name:'Gross Weight'}},{T:1,N:'w2:column',A:{dataType:'number',id:'linenet',name:'Air Freight 항공사 지급금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntCacd',name:'name41'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntCanm',name:'name42'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dscd',name:'name43'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpcd',name:'name44'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ondt',name:'name45'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shipgb',name:'name46'}},{T:1,N:'w2:column',A:{dataType:'text',id:'status',name:'name47'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name48',id:'cjdt'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchInfo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'key1',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key2',name:'name2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key3',name:'name3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key4',name:'name4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key5',name:'name5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key6',name:'name6'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_AirMasterSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'param1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirMasterCommInvno'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CommissionSellingFreightInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name36',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_LineAccSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntCacd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LineAccInfo','ev:ondataload':'scwin.ds_LineAccInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_IataTariff'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'tfseq',name:'일련번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tfrank',name:'Rate Class',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tfitem',name:'Item 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tfwgt',name:'Weight Break',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'tfrate',name:'단가',dataType:'number',defaultValue:'0.0'}},{T:1,N:'w2:column',A:{id:'tfchg',name:'금액',dataType:'number',defaultValue:'0.0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_postDtDataSet',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'col1'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_mmhno',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'string',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'string',id:'name',name:'name'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_InvoiceCheck',action:'/il.comm.util.CoInvoiceCheckCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_InvoiceCheckParam","key":"IN_DS1"},{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_InvoiceCheck","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/il.airout.aobl.RetrieveAirExpMasterFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SearchInfo","key":"IN_DS1"},{"id":"ds_MasterFreightInfo","key":"OUT_DS1"},{"id":"ds_BuyingFreightInfo","key":"OUT_DS2"},{"id":"ds_SellingFreightInfo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_MasterFreightInfo","key":"OUT_DS1"},{"id":"ds_BuyingFreightInfo","key":"OUT_DS2"},{"id":"ds_SellingFreightInfo","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:'','ev:submitdone':'scwin.sbm_Retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.airout.aobl.SaveAirExpMasterFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_MasterFreightInfo","key":"IN_DS1"},{"id":"ds_BuyingFreightInfo","key":"IN_DS2"},{"id":"ds_SellingFreightInfo","key":"IN_DS3"},{"id":"ds_CommissionSellingFreightInfo","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:'','ev:submitdone':'scwin.sbm_Save_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.ds_MasterFreightInfo_ondataload,scwin.f_AirFreightTariffCalc,scwin.f_AirFreightTariffCalc,scwin.f_AirFreightTariffCalc,scwin.f_AirTruckingTariffCalc,scwin.f_Delete_callback,scwin.f_GridCustomerChange,scwin.f_GridResultdateChange,scwin.f_ReqFieldChk,scwin.f_TotalCac'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.cvsslMgntNo = "";
scwin.p_lobranCd = ""; // 귀속부서코드 
scwin.p_lobranNm = ""; // 귀속부서 명
scwin.p_clntNo = "";
scwin.p_clntNm = "";
scwin.airexgbim = "";
scwin.mblNo = "";
scwin.MSG_LO_WRN_002 = "이미 인보이스가 발행 되어 삭제 불가능 합니다.";
scwin.processFlag = ""; // 처리 결과를 체크하는 Flag 	
scwin.actionFlag = "";
scwin.spRtn = ""; // 인보이스 체크 결과 
scwin.spMsg = ""; // 인보이스 체크 메세지 
scwin.TabIndex = 0; // Tab 선택 구분자 
scwin.linkType = ""; // 페이지 링크로 들어 왔을때 해당 b/l, CONSOL 번호  조회 여부 체크

// Line Account inof 정보 가져 오기 (항공사  사사 오입 )
scwin.Trunc_Discount = "";
scwin.Trunc_Rate = "";
scwin.Trunc_Commission = "";
scwin.Trunc_vat = "";
scwin.exRateCheck = "1"; // 환율 존재 유무 
scwin.exRate1 = "0"; // 환율1  
scwin.exRate2 = "0"; // 환율2  
scwin.crc = ""; // 환종	

scwin.hd_kcomcd = "DBEX";
scwin.hd_iogb = "O";
scwin.hd_seaAirCls = "A";
scwin.hd_locPtnCls = "1";
scwin.hd_mblHblCls = "M";
scwin.olddata = "";
scwin.buyingGridReadOnly = ["pchsTyp", "pchsClntNo", "fareEngCd", "crcCd", "qty", "grossWt", "rateCls", "ppccCls", "commItem", "chgWt", "fareUnit", "pchsUpr", "exRate", "prtnAmt", "vat", "pchsAmtFcrc"];
scwin.sellingGridReadOnly = ["bilgClntNo", "fareEngCd", "crcCd", "qty", "grossWt", "rateCls", "chgWt", "sellUpr", "exRate", "sellAmt", "vatAmt", "sellAmtFcrc"];
scwin.saveFlag = 0;
scwin.count = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  let codeOptions = [{
    grpCd: "ZZ006",
    compID: "lc_cucd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // 세션정보 가져오기
  let loginDTO = $c.data.getMemInfo($p);
  scwin.p_lobranCd = loginDTO.lobranCd || ""; // 귀속부서코드 
  scwin.p_lobranNm = loginDTO.lobranNm || ""; // 귀속부서 명

  let resData = $c.gus.dsCommonUtil($p, "getCompanyInfoDTO", scwin.p_lobranCd)[0]?.value.split("\n");
  let commDTO = resData.reduce((acc, curr) => {
    let match = curr.match(/^\s*\w+\s+(\w+)\s+=\s+\[(.*)\]/);
    if (match) {
      let key = match[1];
      let value = match[2];
      if (value == "null") value = null;
      acc[key] = value;
    }
    return acc;
  }, {});

  //  default 동부국제물류
  scwin.p_clntNo = commDTO.clntNo || "";
  scwin.p_clntNm = commDTO.name1 || "";
  scwin.airexgbim = commDTO.airExgbIm || "3";
  let paramData = $c.data.getParameter($p);
  scwin.mblNo = paramData["blno"] || "";
  scwin.f_initSetTab(); //초기화
  scwin.f_Set("INIT");
  scwin.f_getParametrSetting();
};
scwin.f_Currency_Unit = function (Curr) {
  // 화폐코드의 Unit를 Check 한다
  let Check_Unit = 1;
  if (Curr != "JPY" && Curr != "ITL" && Curr != "IDR" && Curr != "ESP") {
    Check_Unit = 1;
  } else {
    Check_Unit = 100;
  }
  return Check_Unit;
};

//---------------------------------------------------------
// Parameter Setting
//---------------------------------------------------------
scwin.f_getParametrSetting = function () {
  let mblno = scwin.mblNo;
  if (mblno == "") {
    ed_blno.setValue("");
    ed_blno.focus();
    return false;
  }
  ed_blno.setValue(mblno);
  scwin.linkType = "BL_LINK";
  scwin.f_MhnoLoading();
};

//---------------------------------------------------------
// Tab 초기화
//---------------------------------------------------------
scwin.f_initSetTab = function () {
  $c.gus.cfEnableObjects($p, [tr_tab]);
  scwin.f_selectTabMenu(0);
};

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  let ds;
  switch (idx) {
    // Buying tab
    case 0:
      scwin.TabIndex = 0;
      ds = ds_BuyingFreightInfo;
      break;
    // Selling tab
    case 1:
      if (ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "shipgb") != "D") {
        idx = 0;
        scwin.TabIndex = 0;
        ds = ds_BuyingFreightInfo;
      } else {
        scwin.TabIndex = 1;
        ds = ds_SellingFreightInfo;
      }
      break;
    default:
      break;
  }
  tr_tab.setSelectedTabIndex(idx);
  if (ds.getRowCount() > 0) {
    ds.setRowPosition(ds.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 화면 초기화
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  lc_exgb.setValue(scwin.airexgbim);
  ed_blno.setValue("");
  scwin.ed_blno_onblur();
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [pu_MasterLink, pu_Dimens, pu_Invoice, pu_PayInvoice, pu_Tariff, pu_Plsheet, pu_exRateChange, pu_CustomerChange]);
      $c.gus.cfDisableBtnOnly($p, [pu_ResultdateChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create]);
      scwin.f_DisablePopUpObj();
      scwin.f_GridSet("Init");
      break;
    case "RETRIEVE":
      //조회모드	          
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [pu_MasterLink, pu_Dimens, pu_Invoice, pu_PayInvoice, pu_Plsheet]);
      $c.gus.cfDisableBtnOnly($p, [pu_Tariff, pu_exRateChange, pu_CustomerChange, pu_ResultdateChange]);
      scwin.f_GridSet("Retrieve");
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      scwin.f_DefaultValue();
      ed_payno.setValue("");
      scwin.f_GridSet("Create");
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      $c.gus.cfEnableBtnOnly($p, [pu_Tariff, pu_exRateChange, pu_CustomerChange, pu_ResultdateChange]);
      scwin.f_GridSet("Update");
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      scwin.f_Set("RETRIEVE");
      break;
  }
  if (lc_exgb.getValue().trim() == "") {
    lc_exgb.setValue(scwin.airexgbim);
  }
  scwin.f_CarrierNegoAccounting_InvChk();
};
scwin.f_GridSet = function (gubun) {
  switch (gubun) {
    case "Init":
      scwin.gridReadOnly(gr_BuyingFreightInfo, false);
      scwin.gridReadOnly(gr_SellingFreightInfo, false);
      break;
    case "Retrieve":
      scwin.gridReadOnly(gr_BuyingFreightInfo, false);
      scwin.gridReadOnly(gr_SellingFreightInfo, false);
      break;
    case "Create":
      scwin.gridReadOnly(gr_BuyingFreightInfo, true);
      scwin.gridReadOnly(gr_SellingFreightInfo, true);
      break;
    case "Update":
      scwin.gridReadOnly(gr_BuyingFreightInfo, true);
      scwin.gridReadOnly(gr_SellingFreightInfo, true);
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [ed_rate]);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [ed_rate]);
};

//-------------------------------------------------------------------------
//조회조건 바인딩
//-------------------------------------------------------------------------
scwin.f_ProcessBinding = function (ds, gubun) {
  switch (gubun) {
    case "FreightSearch":
      ds.setEmptyValue();
      ds.set("kcomcd", scwin.hd_kcomcd);
      ds.set("blno", ed_blno.getValue().trim());
      ds.set("mhno", lc_mmhno.getValue());
      ds.set("iogb", scwin.hd_iogb);
      ds.set("mblHblCls", "M");
      break;
    case "FreightSave":
      ds.setCellData(ds.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
      ds.setCellData(ds.getRowPosition(), "blno", ed_blno.getValue().trim());
      ds.setCellData(ds.getRowPosition(), "mhno", lc_mmhno.getValue());
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.actionFlag = "Retrieve";
  if (ed_blno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master B/L No"]);
    ed_blno.focus();
    return false;
  }
  if (lc_mmhno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Consol No"]);
    ed_blno.focus();
    return false;
  }
  ds_MasterFreightInfo.setJSON([]);
  ds_BuyingFreightInfo.setJSON([]);
  ds_SellingFreightInfo.setJSON([]);
  scwin.f_ProcessBinding(dma_SearchInfo, "FreightSearch");
  await $c.sbm.execute($p, sbm_Retrieve);
  scwin.f_AirMasterCommInvno();
  scwin.f_CarrierNegoAccounting_InvChk();
  gr_BuyingFreightInfo.setHeaderValue("choiceHeader", 0);
  gr_SellingFreightInfo.setHeaderValue("choiceHeader", 0);
};

//-------------------------------------------------------------------------
//조회 결과 
//-------------------------------------------------------------------------
scwin.f_ProcessResult = async function (gubun) {
  switch (gubun) {
    case "None":
      scwin.f_Set("INIT");
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); // 해당 되는 자료가 없습니다. 
      ed_blno.focus();
      break;
    case "FreightInfo":
      scwin.f_Set("RETRIEVE");
      let rowJson = ds_MasterFreightInfo.getRowJSON(ds_MasterFreightInfo.getRowPosition());
      if (lc_cucd.getValue().trim() == "") {
        lc_cucd.setValue(rowJson.cucd);
      }
      if (ed_exdt.getValue().trim() == "") {
        ed_exdt.setValue(rowJson.cjdt);
      }
      scwin.f_TotalCac("Selling");
      scwin.f_TotalCac("Buying");
      scwin.f_MhnoLoading(); // Consol No 가져오기

      scwin.f_LineAccInfo(); // Line Account inof 정보 가져 오기 (항공사  사사 오입 )
      scwin.f_Update();
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
//CarrierNegoAccounting Invoice Chedk
//-------------------------------------------------------------------------
scwin.f_CarrierNegoAccounting_InvChk = function () {
  for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    let rowJson = ds_BuyingFreightInfo.getRowJSON(i);
    if (rowJson.fareEngCd == "AAF") {
      if (rowJson.pchsCertiNo != "") {
        $c.gus.cfDisableObjects($p, [ed_lrate, ed_lcharge, ed_disc, ed_nert, ed_dchg, ed_linenet]);
        break;
      }
    }
  }
  if (ed_payno.getValue() != "") {
    $c.gus.cfDisableObjects($p, [ed_comm, ed_cchg, ed_cvat]);
  }
};

//-------------------------------------------------------------------------
//Invoice Chedk 
//-------------------------------------------------------------------------
scwin.f_InvoiceCheck_All = async function () {
  let rowJson = ds_MasterFreightInfo.getRowJSON(ds_MasterFreightInfo.getRowPosition());
  dma_InvoiceCheckParam.setEmptyValue();
  dma_InvoiceCheckParam.set("odrNo", rowJson.odrNo);
  dma_InvoiceCheckParam.set("mblHblCls", "M");
  dma_InvoiceCheckParam.set("kcomcd", scwin.hd_kcomcd);
  dma_InvoiceCheckParam.set("seaAirCls", "A");
  dma_InvoiceCheckParam.set("blNo", ed_blno.getValue().trim());
  dma_InvoiceCheckParam.set("mhno", lc_mmhno.getValue().trim());
  dma_InvoiceCheckParam.set("gbun", "F");
  scwin.spMsg = "";
  scwin.spRtn = "-1";
  let e = await $c.sbm.execute($p, sbm_InvoiceCheck);
  let responseData = e.responseJSON.OUT_DS1[0];
  scwin.spMsg = responseData.spMsg;
  scwin.spRtn = responseData.spRtn;
  let shipgb = rowJson.shipgb;
  if (shipgb == "D" && scwin.spRtn == "0") {
    //Direct house order no 로 한번 더 체크 해줌 
    dma_InvoiceCheckParam.setEmptyValue();
    dma_InvoiceCheckParam.set("odrNo", rowJson.hodrNo);
    dma_InvoiceCheckParam.set("mblHblCls", "H");
    dma_InvoiceCheckParam.set("kcomcd", scwin.hd_kcomcd);
    dma_InvoiceCheckParam.set("seaAirCls", "A");
    dma_InvoiceCheckParam.set("blNo", ed_blno.getValue().trim());
    dma_InvoiceCheckParam.set("mhno", lc_mmhno.getValue().trim());
    dma_InvoiceCheckParam.set("gbun", "F");
    scwin.spMsg = "";
    scwin.spRtn = "-1";
    e = await $c.sbm.execute($p, sbm_InvoiceCheck);
    responseData = e.responseJSON.OUT_DS1[0];
    scwin.spMsg = responseData.spMsg;
    scwin.spRtn = responseData.spRtn;
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  // 추가
  ds_mmhno.setJSON([]);
  ds_MasterFreightInfo.setJSON([]);
  ds_MasterFreightInfo.insertRow();
  ds_MasterFreightInfo.setRowPosition(0);
  ds_SellingFreightInfo.setJSON([]);
  ds_BuyingFreightInfo.setJSON([]);
  scwin.actionFlag = "Create";
  scwin.f_Set("CREATE");
  ed_blno.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.actionFlag = "Update";
  scwin.f_Set("UPDATE");
  lc_cucd.focus();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_MasterFreightInfo.getModifiedIndex().length > 0 || ds_BuyingFreightInfo.getModifiedIndex().length > 0 || ds_SellingFreightInfo.getModifiedIndex().length > 0) {
    scwin.f_ProcessBinding(ds_MasterFreightInfo, "FreightSave");
    let chk = await scwin.f_ReqFieldChk();
    if (chk) {
      scwin.actionFlag = "Save";
      scwin.f_Commission();
      for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
        let rowJson = ds_BuyingFreightInfo.getRowJSON(i);
        if (rowJson.fareEngCd == "AAF") {
          ds_BuyingFreightInfo.setCellData(i, "pchsAmt", ed_linenet.getValue());
        }
      }

      // UserStatus-JSP 화면에 Head 와 Body(그리드)가 있을경우 Body가 변경 될 경우 무조건 Head도 서버 로 전송 해서 업데이트 하기 위해서 사용 됨
      if (ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "status") == "U") {
        ds_MasterFreightInfo.setCellData(ds_MasterFreightInfo.getRowPosition(), "status", "");
      } else {
        ds_MasterFreightInfo.setCellData(ds_MasterFreightInfo.getRowPosition(), "status", "U");
      }

      // 금액(Amt) 12자리로 제한
      if (ed_pfchg.getValue().length > 12 || ed_cfchg.getValue().length > 12) {
        await $c.win.alert($p, "Weight Charge의 최대 자리수는 12자리입니다.");
        return false;
      }
      if (ed_pvchg.getValue().length > 12 || ed_cvchg.getValue().length > 12) {
        await $c.win.alert($p, "Valuation Charge의 최대 자리수는 12자리입니다.");
        return false;
      }
      if (ed_pachg.getValue().length > 12 || ed_cachg.getValue().length > 12) {
        await $c.win.alert($p, "Total Due Agent의 최대 자리수는 12자리입니다.");
        return false;
      }
      if (ed_pcchg.getValue().length > 12 || ed_ccchg.getValue().length > 12) {
        await $c.win.alert($p, "Total Due Carrier의 최대 자리수는 12자리입니다.");
        return false;
      }
      if (ed_ptchg.getValue().length > 12 || ed_ctchg.getValue().length > 12) {
        await $c.win.alert($p, "Total Charge의 최대 자리수는 12자리입니다.");
        return false;
      }
      let STR = "Do you want to save?";
      let count = 0;
      let tmp = "There is(are) Amount(s) valued 0. Do you want to save it as it is?";
      if (ds_BuyingFreightInfo.getModifiedIndex().length > 0) {
        for (var i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
          let rowJson = ds_BuyingFreightInfo.getRowJSON(i);
          if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") {
            if (rowJson.crcCd == "KRW") {
              if (rowJson.pchsAmt == 0) {
                count++;
              }
            } else {
              if (rowJson.pchsAmtFcrc == 0 || rowJson.pchsAmt == 0) {
                count++;
              }
            }
          }
        }
      }
      if (count > 0) {
        STR = tmp;
      }
      let chk = await $c.win.confirm($p, STR);
      if (chk) {
        // 저장하시겠습니까?  							
        $c.sbm.execute($p, sbm_Save);
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["Master Freight Info"]); // @은(는) 변경된 사항이 없습니다.
  }
};
scwin.f_postDtChk = async function (odrNo, sellSeq, kcomcd, seaAirCls, blNo, mhno) {
  let sbm_postDtDataSet = {};
  sbm_postDtDataSet.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ilCommonEBC" + "&queryId=" + "retrievePostDt" + "&param1=" + odrNo + "&param2=" + sellSeq + "&param3=" + kcomcd + "&param4=" + seaAirCls + "&param5=" + blNo + "&param6=" + mhno + "&param7=" + "" + "&param8=" + "" + "&param9=" + "" + "&param10=" + "" + "&param11=" + "" + "&param12=" + "" + "&param13=" + "" + "&param14=" + "";
  let e = await $c.sbm.executeDynamic($p, sbm_postDtDataSet);
  ds_postDtDataSet.setJSON(e.responseJSON.GAUCE);
};

/**
 * @method 
 * @name f_ReqFieldChk 
 * @description 유효성검사
 */
scwin.f_ReqFieldChk = async function () {
  if (ed_exdt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Ex-Rate Date"]); // @은(는) 필수 입력 항목입니다.
    ed_exdt.focus();
    return false;
  }
  if (ed_rate.getValue() == "" || ed_rate.getValue() == "0") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Ex-Rate"]); // @은(는) 필수 입력 항목입니다.
    ed_rate.focus();
    return false;
  }
  if (ed_exrate.getValue() == "" || ed_exrate.getValue() == "0") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["US Ex-Rate"]); // @은(는) 필수 입력 항목입니다.
    ed_exrate.focus();
    return false;
  }

  // Buying
  for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    let rowJson = ds_BuyingFreightInfo.getRowJSON(i);
    if (rowJson.pchsTyp == "3" && rowJson.sellDeptCd == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Inner Department"]); //@는 필수입력항목입니다.
      gr_BuyingFreightInfo.setFocusedCell(i, "sellDeptCd");
      return false;
    }
    if (rowJson.fareEngCd == "AAF" && rowJson.rateCls == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["If F/Code is AAF, R/C"]); //@는 필수입력항목입니다.
      gr_BuyingFreightInfo.setFocusedCell(i, "rateCls");
      return false;
    }

    //삭제 시 내부거래 체크
    if (ds_BuyingFreightInfo.getRowStatus(i) == "D") {
      await scwin.f_postDtChk(rowJson.odrNo, rowJson.pchsSeq, rowJson.kcomcd, rowJson.seaAirCls, rowJson.blNo, rowJson.mhno);
      let isPostDt = ds_postDtDataSet.getCellData(0, "col1");
      if (isPostDt != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \nbuying List " + (i + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
    }
  }

  // Selling
  for (let i = 0; i < ds_SellingFreightInfo.getRowCount(); i++) {
    let rowJson = ds_SellingFreightInfo.getRowJSON(i);

    // 삭제 시 내부거래 체크
    if (ds_SellingFreightInfo.getRowStatus(i) == "D") {
      await scwin.f_postDtChk(rowJson.odrNo, rowJson.sellSeq, rowJson.kcomcd, rowJson.seaAirCls, rowJson.blNo, rowJson.mhno);
      let isPostDt = ds_postDtDataSet.getCellData(0, "col1");
      if (isPostDt != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \nSelling List " + (i + 1) + "번째 데이터를 확인하세요.");
        return false;
      }
    }
  }
  let chk = await $c.gus.cfValidate($p, [gr_BuyingFreightInfo, gr_SellingFreightInfo], null, true);
  return chk;
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let chk = await $c.win.confirm($p, E_MSG_CM_CRM_004);
  if (chk) {
    scwin.actionFlag = "Delete";
    await scwin.f_InvoiceCheck_All();
    if (scwin.spRtn == "0") {
      ds_MasterFreightInfo.modifyRowStatus(0, "D");

      // Buying Info
      scwin.deleteAll(ds_BuyingFreightInfo);

      // Selling Info
      scwin.deleteAll(ds_SellingFreightInfo);
      await scwin.f_Commission();
      await $c.sbm.execute($p, sbm_Save);
    } else {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_002);
    }
    ed_blno.focus();
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  if (scwin.actionFlag == "Create") {
    scwin.actionFlag = "Cancel";
    scwin.f_Set("INIT");
    scwin.processFlag = "None";
  } else {
    scwin.actionFlag = "Cancel";
    scwin.f_Set("RETRIEVE");
  }
  $c.data.undoAll($p, ds_MasterFreightInfo);
  $c.data.undoAll($p, ds_BuyingFreightInfo);
  $c.data.undoAll($p, ds_SellingFreightInfo);
  for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    ds_BuyingFreightInfo.setCellData(i, "currow", i + 1);
  }
  for (let i = 0; i < ds_SellingFreightInfo.getRowCount(); i++) {
    ds_SellingFreightInfo.setCellData(i, "currow", i + 1);
  }
};

// Line Account inof 정보 setup
scwin.f_LineAccInfoSet = function () {
  if (ds_LineAccInfo.getRowCount() == 0) {
    scwin.Trunc_Commission = "4";
    scwin.Trunc_Rate = "4";
    scwin.Trunc_vat = "4";
    scwin.Trunc_Discount = "4";
  } else {
    let LineAcc = ds_LineAccInfo.getCellData(0, "name");
    scwin.Trunc_Commission = LineAcc.substring(0, 1);
    scwin.Trunc_Rate = LineAcc.substring(1, 2);
    scwin.Trunc_vat = LineAcc.substring(2, 3);
    scwin.Trunc_Discount = LineAcc.substring(3, 4);
  }
};

// commission 저장 하기 위하 ds
scwin.f_Commission = function () {
  ds_CommissionSellingFreightInfo.setJSON([]);
  let rowJson = ds_MasterFreightInfo.getRowJSON(ds_MasterFreightInfo.getRowPosition());
  let row = ds_CommissionSellingFreightInfo.insertRow();
  ds_CommissionSellingFreightInfo.setRowPosition(row);
  ds_CommissionSellingFreightInfo.setCellData(row, "odrNo", hd_odrNo.getValue()); // Order No
  ds_CommissionSellingFreightInfo.setCellData(row, "sellSeq", "0");
  ds_CommissionSellingFreightInfo.setCellData(row, "kcomcd", scwin.hd_kcomcd); // 법인코드
  ds_CommissionSellingFreightInfo.setCellData(row, "seaAirCls", scwin.hd_seaAirCls); // 해운/항공 구분 
  ds_CommissionSellingFreightInfo.setCellData(row, "bilgClntNo", rowJson.clntCacd); // 항공사
  ds_CommissionSellingFreightInfo.setCellData(row, "bilgClntNm", rowJson.clntCanm); // 항공사  
  ds_CommissionSellingFreightInfo.setCellData(row, "blNo", ed_blno.getValue().trim()); // Master Bill No
  ds_CommissionSellingFreightInfo.setCellData(row, "mhno", lc_mmhno.getValue()); // Consol No

  ds_CommissionSellingFreightInfo.setCellData(row, "sellItemCd", ""); //	
  ds_CommissionSellingFreightInfo.setCellData(row, "fareEngCd", "ACM");
  ds_CommissionSellingFreightInfo.setCellData(row, "fareEngNm", "");
  ds_CommissionSellingFreightInfo.setCellData(row, "fareGrpCd", "");
  ds_CommissionSellingFreightInfo.setCellData(row, "fareUnit", "");
  ds_CommissionSellingFreightInfo.setCellData(row, "locPtnCls", "1");
  ds_CommissionSellingFreightInfo.setCellData(row, "mblHblCls", "M");
  ds_CommissionSellingFreightInfo.setCellData(row, "drcrCls", "D"); // 매출/매입 구분 	
  ds_CommissionSellingFreightInfo.setCellData(row, "ppccCls", "");
  ds_CommissionSellingFreightInfo.setCellData(row, "crcCd", "KRW");
  ds_CommissionSellingFreightInfo.setCellData(row, "qty", "0");
  ds_CommissionSellingFreightInfo.setCellData(row, "grossWt", "0.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "chgWt", "0.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "trfUpr", "0.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "sellUpr", "0.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "usdAmt", "0.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "exRate", "1.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "exRateTyp", lc_exgb.getValue());
  ds_CommissionSellingFreightInfo.setCellData(row, "rateCls", "");
  ds_CommissionSellingFreightInfo.setCellData(row, "commItem", "");
  ds_CommissionSellingFreightInfo.setCellData(row, "prtnGrpNo", "");
  ds_CommissionSellingFreightInfo.setCellData(row, "prtnUpr", "0.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "prtnAmt", "0.0");
  ds_CommissionSellingFreightInfo.setCellData(row, "rsltsStdDt", hd_cjdt.getValue()); // 실적 일자
  ds_CommissionSellingFreightInfo.setCellData(row, "sellAmt", ed_cchg.getValue());
  ds_CommissionSellingFreightInfo.setCellData(row, "vatAmt", ed_cvat.getValue());
  ds_CommissionSellingFreightInfo.setCellData(row, "sellAmtFcrc", ed_cchg.getValue());
  ds_CommissionSellingFreightInfo.setCellData(row, "certiNo", "");
  if (ed_cvat.getValue().trim() == "" || ed_cvat.getValue().trim() == "0") {
    ds_CommissionSellingFreightInfo.setCellData(row, "vatYn", "0");
  } else {
    ds_CommissionSellingFreightInfo.setCellData(row, "vatYn", "1");
  }
};

// 행추가
scwin.f_AddRow = function (gubun) {
  let dsMaster = ds_MasterFreightInfo;
  let ds;
  let row;
  switch (gubun) {
    case "Buying":
      ds = ds_BuyingFreightInfo;
      row = ds.insertRow();
      ds.setRowPosition(row);
      gr_BuyingFreightInfo.setFocusedCell(row, "pchsTyp", true);
      scwin.gr_BuyingFreightInfo_onafteredit(row, "pchsTyp", ds_BuyingFreightInfo.getCellData(row, "pchsTyp"));

      // Data Binding 
      ds.setCellData(row, "currow", row + 1);
      ds.setCellData(row, "odrNo", hd_odrNo.getValue()); // Order No
      ds.setCellData(row, "kcomcd", scwin.hd_kcomcd); // 법인코드
      ds.setCellData(row, "seaAirCls", scwin.hd_seaAirCls); // 해운/항공 구분 
      ds.setCellData(row, "blNo", ed_blno.getValue().trim()); // Master Bill No
      ds.setCellData(row, "mhno", lc_mmhno.getValue()); // Consol No
      ds.setCellData(row, "locPtnCls", scwin.hd_locPtnCls); // 국내해외매출 구분
      ds.setCellData(row, "mblHblCls", scwin.hd_mblHblCls); // Master / House 구분
      ds.setCellData(row, "drcrCls", "C"); // 매출/매입 구분 
      ds.setCellData(row, "rsltsStdDt", hd_cjdt.getValue()); // 실적 일자

      if (ds.getRowCount() == 1) {
        // 처음은 b/l 항공 사 뿌려 주고 다음 부터는 바로 앞에 row 화주 뿌려줌 			
        ds.setCellData(row, "pchsClntNo", dsMaster.getCellData(dsMaster.getRowPosition(), "clntCacd")); // 항공사  
        ds.setCellData(row, "pchsClntNm", dsMaster.getCellData(dsMaster.getRowPosition(), "clntCanm")); // 항공사  
        ds.setCellData(row, "crcCd", "KRW"); //lc_cucd.BindColVal;	
        ds.setCellData(row, "exRate", ed_rate.getValue());
      } else {
        ds.setCellData(row, "pchsClntNo", ds.getCellData(ds.getRowCount() - 2, "pchsClntNo"));
        ds.setCellData(row, "pchsClntNm", ds.getCellData(ds.getRowCount() - 2, "pchsClntNm"));
        ds.setCellData(row, "crcCd", ds.getCellData(ds.getRowCount() - 2, "crcCd"));
        ds.setCellData(row, "exRate", ds.getCellData(ds.getRowCount() - 2, "exRate"));
      }

      // Default Setting
      ds.setCellData(row, "pchsTyp", "4");
      ds.setCellData(row, "ppccCls", "P");
      ds.setCellData(row, "exRateTyp", lc_exgb.getValue());
      gr_BuyingFreightInfo.setColumnReadOnly("sellDeptCd", true);
      break;
    case "Selling":
      ds = ds_SellingFreightInfo;
      row = ds.insertRow();
      ds.setRowPosition(row);
      gr_SellingFreightInfo.setFocusedCell(row, "bilgClntNo");
      scwin.gr_SellingFreightInfo_onafteredit(row, "bilgClntNo", ds_SellingFreightInfo.getCellData(row, "bilgClntNo"));

      // Data Binding
      ds.setCellData(row, "currow", row + 1);
      ds.setCellData(row, "odrNo", hd_hodrNo.getValue()); // Order No
      ds.setCellData(row, "kcomcd", scwin.hd_kcomcd); // 법인코드
      ds.setCellData(row, "seaAirCls", scwin.hd_seaAirCls); // 해운/항공 구분 
      ds.setCellData(row, "blNo", ed_blno.getValue().trim()); // Master Bill No
      ds.setCellData(row, "mhno", lc_mmhno.getValue()); // Consol No
      ds.setCellData(row, "locPtnCls", scwin.hd_locPtnCls); // 국내해외매출 구분

      ds.setCellData(row, "mblHblCls", "H"); //hd_mblHblCls.value;	// Master / House 구분	
      ds.setCellData(row, "drcrCls", "D"); // 매출/매입 구분 	
      ds.setCellData(row, "rsltsStdDt", hd_cjdt.getValue()); // 실적 일자

      if (ds.getRowCount() == 1) {
        //처음은 b/l 실화주  뿌려 주고 다음 부터는 바로 앞에 row 화주 뿌려줌 				
        ds.setCellData(row, "bilgClntNo", dsMaster.getCellData(dsMaster.getRowPosition(), "ascd")); // 실화주 
        ds.setCellData(row, "bilgClntNm", dsMaster.getCellData(dsMaster.getRowPosition(), "asnm")); // 실화주 	// 항공사  
        ds.setCellData(row, "crcCd", "KRW"); //lc_cucd.BindColVal;		
        ds.setCellData(row, "exRate", ed_rate.getValue());
      } else {
        ds.setCellData(row, "bilgClntNo", ds.getCellData(ds.getRowCount() - 2, "bilgClntNo"));
        ds.setCellData(row, "bilgClntNm", ds.getCellData(ds.getRowCount() - 2, "bilgClntNm"));
        ds.setCellData(row, "crcCd", ds.getCellData(ds.getRowCount() - 2, "crcCd"));
        ds.setCellData(row, "exRate", ds.getCellData(ds.getRowCount() - 2, "exRate"));
      }

      // Default Setting
      ds.setCellData(row, "exRateTyp", lc_exgb.getValue());
      break;
    default:
      break;
  }
};

// 행추가
scwin.f_AddRowMulti = function (gubun) {
  let dsMaster = ds_MasterFreightInfo;
  let rowMake_selling = ed_rowMake_selling.getValue() == "" ? 1 : $c.num.parseInt($p, ed_rowMake_selling.getValue().trim(), 0);
  let rowMake_buying = ed_rowMake_buying.getValue() == "" ? 1 : $c.num.parseInt($p, ed_rowMake_buying.getValue().trim(), 0);
  let ds;
  let row;
  switch (gubun) {
    case "Buying":
      for (let i = 0; i < rowMake_buying; i++) {
        ds = ds_BuyingFreightInfo;
        row = ds.insertRow();
        ds.setCellData(row, "currow", row + 1);
        ds.setRowPosition(row);
        gr_BuyingFreightInfo.setFocusedCell(row, "pchsTyp");

        // Data Binding 
        ds.setCellData(row, "odrNo", hd_odrNo.getValue()); // Order No
        ds.setCellData(row, "kcomcd", scwin.hd_kcomcd); // 법인코드
        ds.setCellData(row, "seaAirCls", scwin.hd_seaAirCls); // 해운/항공 구분 
        ds.setCellData(row, "blNo", ed_blno.getValue().trim()); // Master Bill No
        ds.setCellData(row, "mhno", lc_mmhno.getValue()); // Consol No
        ds.setCellData(row, "locPtnCls", scwin.hd_locPtnCls); // 국내해외매출 구분
        ds.setCellData(row, "mblHblCls", scwin.hd_mblHblCls); // Master / House 구분
        ds.setCellData(row, "drcrCls", "C"); // 매출/매입 구분 
        ds.setCellData(row, "rsltsStdDt", hd_cjdt.getValue()); // 실적 일자

        if (ds.getRowCount() == 1) {
          //처음은 b/l 항공 사 뿌려 주고 다음 부터는 바로 앞에 row 화주 뿌려줌 			
          ds.setCellData(row, "pchsClntNo", dsMaster.getCellData(dsMaster.getRowPosition(), "clntCacd")); // 항공사  
          ds.setCellData(row, "pchsClntNm", dsMaster.getCellData(dsMaster.getRowPosition(), "clntCanm")); // 항공사  
          ds.setCellData(row, "crcCd", "KRW"); //lc_cucd.BindColVal;	
          ds.setCellData(row, "exRate", ed_rate.getValue());
        } else {
          ds.setCellData(row, "pchsClntNo", ds.getCellData(ds.getRowCount() - 2, "pchsClntNo"));
          ds.setCellData(row, "pchsClntNm", ds.getCellData(ds.getRowCount() - 2, "pchsClntNm"));
          ds.setCellData(row, "crcCd", ds.getCellData(ds.getRowCount() - 2, "crcCd"));
          ds.setCellData(row, "exRate", ds.getCellData(ds.getRowCount() - 2, "exRate"));
        }

        // Default Setting
        ds.setCellData(row, "pchsTyp", "4");
        ds.setCellData(row, "ppccCls", "P");
        ds.setCellData(row, "exRateTyp", lc_exgb.getValue());
        gr_BuyingFreightInfo.setColumnReadOnly("sellDeptCd", true);
      }
      totalRows1.setValue(ds.getRowCount());
      break;
    case "Selling":
      for (let i = 0; i < rowMake_selling; i++) {
        ds = ds_SellingFreightInfo;
        row = ds_SellingFreightInfo.insertRow();
        ds.setCellData(row, "currow", row + 1);
        ds.setRowPosition(row);
        gr_SellingFreightInfo.setFocusedCell(row, "bilgClntNo");

        // Data Binding
        ds.setCellData(row, "odrNo", hd_hodrNo.getValue()); // Order No
        ds.setCellData(row, "kcomcd", scwin.hd_kcomcd); // 법인코드
        ds.setCellData(row, "seaAirCls", scwin.hd_seaAirCls); // 해운/항공 구분 
        ds.setCellData(row, "blNo", ed_blno.getValue().trim()); // Master Bill No
        ds.setCellData(row, "mhno", lc_mmhno.getValue()); // Consol No
        ds.setCellData(row, "locPtnCls", scwin.hd_locPtnCls); // 국내해외매출 구분

        ds.setCellData(row, "mblHblCls", "H"); //hd_mblHblCls.value;	// Master / House 구분	
        ds.setCellData(row, "drcrCls", "D"); // 매출/매입 구분 	
        ds.setCellData(row, "rsltsStdDt", hd_cjdt.getValue()); // 실적 일자

        if (ds.getRowCount() == 1) {
          //처음은 b/l 실화주  뿌려 주고 다음 부터는 바로 앞에 row 화주 뿌려줌 				
          ds.setCellData(row, "bilgClntNo", dsMaster.getCellData(dsMaster.getRowPosition(), "ascd")); // 실화주 
          ds.setCellData(row, "bilgClntNm", dsMaster.getCellData(dsMaster.getRowPosition(), "asnm")); // 실화주 	// 항공사  
          ds.setCellData(row, "crcCd", "KRW"); //lc_cucd.BindColVal;		
          ds.setCellData(row, "exRate", ed_rate.getValue());
        } else {
          ds.setCellData(row, "bilgClntNo", ds.getCellData(ds.getRowCount() - 2, "bilgClntNo"));
          ds.setCellData(row, "bilgClntNm", ds.getCellData(ds.getRowCount() - 2, "bilgClntNm"));
          ds.setCellData(row, "crcCd", ds.getCellData(ds.getRowCount() - 2, "crcCd"));
          ds.setCellData(row, "exRate", ds.getCellData(ds.getRowCount() - 2, "exRate"));
        }

        // Default Setting
        ds.setCellData(row, "exRateTyp", lc_exgb.getValue());
      }
      totalRows2.setValue(ds.getRowCount());
      break;
    default:
      break;
  }
};

// invoice 발생 여부에 의해 수정 가능 여부 
scwin.f_InvoiceCheck = function (disGubun, row) {
  let grid, readOnlyValid;
  switch (disGubun) {
    case "Selling":
      grid = gr_SellingFreightInfo;
      readOnlyValid = ds_SellingFreightInfo.getCellData(row, "certiNo").trim() == "" ? true : false;
      break;
    case "Buying":
      grid = gr_BuyingFreightInfo;
      readOnlyValid = ds_BuyingFreightInfo.getCellData(row, "pchsCertiNo").trim() == "" ? true : false;
      break;
    default:
      break;
  }
  scwin.gridReadOnly(grid, readOnlyValid);
};

/**
 * @method 
 * @name f_Delete_callback 
 * @description 다중 행삭제
 */
scwin.f_DeleteAllRow = async function (gubun) {
  let ds = "";
  switch (gubun) {
    case "Selling":
      ds = ds_SellingFreightInfo;
      break;
    case "Buying":
      ds = ds_BuyingFreightInfo;
      break;
    default:
      break;
  }
  for (var i = ds.getRowCount() - 1; i >= 0; i--) {
    ds.setRowPosition(i);
    await scwin.f_DeleteRow(gubun);
  }
};

//-------------------------------------------------------------------------
// function name : f_DelRow
// function desc : 그리드  행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = async function (gubun) {
  let tmp, tmpRowPosition, rowJson;
  switch (gubun) {
    case "Selling":
      tmp = ds_SellingFreightInfo;
      tmpRowPosition = tmp.getRowPosition();
      for (let i = tmp.getRowCount() - 1; i >= 0; i--) {
        rowJson = tmp.getRowJSON(i);
        if (rowJson.choice == "T" || i == tmpRowPosition) {
          if (rowJson.certiNo.trim() == "") {
            tmp.getRowStatus(i) == "C" ? tmp.removeRow(i) : tmp.deleteRow(i);
          } else {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
            return;
          }
        }
      }
      for (let i = 0; i < tmp.getRowCount(); i++) {
        tmp.setCellData(i, "currow", i + 1);
      }
      totalRows2.setValue(tmp.getRowCount());
      break;
    case "Buying":
      tmp = ds_BuyingFreightInfo;
      tmpRowPosition = tmp.getRowPosition();
      for (let i = tmp.getRowCount() - 1; i >= 0; i--) {
        rowJson = tmp.getRowJSON(i);
        if (rowJson.choice == "T" || i == tmpRowPosition) {
          if (rowJson.pchsCertiNo == "") {
            tmp.getRowStatus(i) == "C" ? tmp.removeRow(i) : tmp.deleteRow(i);
          } else {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
            return;
          }
        }
      }
      for (let i = 0; i < tmp.getRowCount(); i++) {
        tmp.setCellData(i, "currow", i + 1);
      }
      totalRows1.setValue(tmp.getRowCount());
      break;
    default:
      break;
  }
};

// 행취소
scwin.f_UndoRow = function (gubun) {
  let ds;
  if (gubun == "Selling") {
    // 개선요청
    $c.data.undoAll($p, ds_SellingFreightInfo);
    ds = ds_SellingFreightInfo;
  } else if (gubun == "Buying") {
    // 개선요청
    $c.data.undoAll($p, ds_BuyingFreightInfo);
    ds = ds_BuyingFreightInfo;
  }
  for (let i = 0; i < ds.getRowCount(); i++) {
    ds.setCellData(i, "currow", i + 1);
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  ds_mmhno.setJSON([]);
  ed_blno.focus();
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let buyRowJson = ds_BuyingFreightInfo.getRowJSON(row);
  let sellRowJson = ds_SellingFreightInfo.getRowJSON(row);
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case "BuyingCustomer":
      // Buying Customer Info
      // 개선요청
      ds_BuyingFreightInfo.setCellData(row, "pchsClntNo", "");
      ds_BuyingFreightInfo.setCellData(row, "pchsClntNm", "");
      pCode = buyRowJson.pchsClntNo;
      pName = buyRowJson.pchsClntNm;
      udc_buyingCustomer.ilCommonPopUp(rtnList => {
        if (typeof rtnList == "undefined" || rtnList[0] == "N/A") return;
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_BuyingFreightInfo, row, "pchsClntNo", "pchsClntNm");
      }, pCode //코드
      , pName //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , "80,230" // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Customer,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "BuyingFreight":
      // Buying Freight Info
      // 개선요청
      ds_BuyingFreightInfo.setCellData(row, "fareEngCd", "");
      ds_BuyingFreightInfo.setCellData(row, "fareEngNm", "");
      pCode = buyRowJson.fareEngCd;
      pName = buyRowJson.fareEngNm;
      udc_buyingFreight.ilCommonPopUp(rtnList => {
        if (typeof rtnList == "undefined" || rtnList[0] == "N/A") return;
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_BuyingFreightInfo, row, "fareEngCd", "fareEngNm");
        ds_BuyingFreightInfo.setCellData(row, "selpchItemCd", rtnList[3]);
        ds_BuyingFreightInfo.setCellData(row, "fareGrpCd", rtnList[5]);
        ds_BuyingFreightInfo.setCellData(row, "vatYn", rtnList[7]);
        ds_BuyingFreightInfo.setCellData(row, "vehclYn", rtnList[8]);
        if (rtnList[9] == "0") {
          ds_BuyingFreightInfo.setCellData(row, "crcCd", lc_cucd.getValue());
        } else {
          ds_BuyingFreightInfo.setCellData(row, "crcCd", "KRW");
        }
      }, pCode //코드
      , pName //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , "80,230" // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , "A,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Freight,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "BuyingInnerDept":
      // Buying Inner Department
      // 개선요청
      ds_BuyingFreightInfo.setCellData(row, "sellDeptCd", "");
      ds_BuyingFreightInfo.setCellData(row, "sellDeptNm", "");
      pCode = buyRowJson.sellDeptCd;
      pName = buyRowJson.sellDeptNm;
      udc_buyingInnerDept.ilCommonPopUp(rtnList => {
        if (typeof rtnList == "undefined" || rtnList[0] == "N/A") return;
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_BuyingFreightInfo, row, "sellDeptCd", "sellDeptNm");
      }, pCode //코드
      , pName //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , "80,230" // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Department,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "SellingCustomer":
      // Selling Customer Info
      // 개선요청
      ds_SellingFreightInfo.setCellData(row, "bilgClntNo", "");
      ds_SellingFreightInfo.setCellData(row, "bilgClntNm", "");
      pCode = sellRowJson.bilgClntNo;
      pName = sellRowJson.bilgClntNm;
      udc_sellingCustomer.ilCommonPopUp(rtnList => {
        if (typeof rtnList == "undefined" || rtnList[0] == "N/A") return;
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_SellingFreightInfo, row, "bilgClntNo", "bilgClntNm");
      }, pCode //코드
      , pName //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , "80,230" // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Customer,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "SellingFreight":
      // Selling Freight Info
      // 개선요청
      ds_SellingFreightInfo.setCellData(row, "fareEngCd", "");
      ds_SellingFreightInfo.setCellData(row, "fareEngNm", "");
      pCode = sellRowJson.fareEngCd;
      pName = sellRowJson.fareEngNm;
      udc_sellingFreight.ilCommonPopUp(rtnList => {
        if (typeof rtnList == "undefined" || rtnList[0] == "N/A") return;
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_SellingFreightInfo, row, "fareEngCd", "fareEngNm");
        ds_SellingFreightInfo.setCellData(row, "sellItemCd", rtnList[3]);
        ds_SellingFreightInfo.setCellData(row, "fareGrpCd", rtnList[5]);
        ds_SellingFreightInfo.setCellData(row, "vatYn", rtnList[7]);
        if (rtnList[9] == "0") {
          ds_SellingFreightInfo.setCellData(row, "crcCd", lc_cucd.getValue());
        } else {
          ds_SellingFreightInfo.setCellData(row, "crcCd", "KRW");
        }
      }, pCode //코드
      , pName //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , "80,230" // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , "A,1" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Freight,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.f_openPgm = function (name) {
  let url, menuCode, menuNm, paramObj, menuInfo;
  switch (name) {
    case "Main":
      url = "/ui/il/airout/aobl/ar_103_01_01b.xml";
      menuCode = "ar_103_01_01b.xml";
      menuNm = "Master Air Waybill";
      paramObj = {
        "kcomcd": scwin.hd_kcomcd,
        "blno": ed_blno.getValue(),
        "mhno": lc_mmhno.getValue()
      };
      menuInfo = {
        pgmNm: "Export Master B/L"
      };
      break;
    case "Find":
      url = "/ui/il/airout/aobl/ar_103_01_02b.xml";
      menuCode = "ar_103_01_02b.xml";
      menuNm = "Master Air Waybill Search";
      paramObj = {
        "kcomcd": scwin.hd_kcomcd,
        "iogb": "O"
      };
      menuInfo = {
        pgmNm: "Master B/L Search"
      };
      break;
    case "DIM":
      url = "/ui/il/airout/aobl/ar_103_01_03b.xml";
      menuCode = "ar_103_01_03b.xml";
      menuNm = "Master Dimension";
      paramObj = {
        "kcomcd": scwin.hd_kcomcd,
        "blno": ed_blno.getValue(),
        "mhno": lc_mmhno.getValue()
      };
      menuInfo = {
        pgmNm: "Master Dimension"
      };
      break;
    case "SR":
      url = "/ui/il/ar/airout/aoth/ar_106_01_01b.xml";
      menuCode = "ar_106_01_01b.xml";
      menuNm = "Shipping Request";
      paramObj = {
        "blno": ed_blno.getValue(),
        "mhno": lc_mmhno.getValue()
      };
      menuInfo = {
        pgmNm: "Shipping Request"
      };
      break;
    case "Inv":
      url = "/ui/il/acc/acinv/ac_101_01_01b.xml";
      menuCode = "ar_106_01_01b.xml";
      menuNm = "Invoice";
      paramObj = {
        "kcomcd": scwin.hd_kcomcd,
        // kcomcd
        "seaair": scwin.hd_seaAirCls,
        // sea:S,air:A
        "iogb": scwin.hd_iogb,
        //out:O,in:I
        "blno": "",
        //house blno
        "mblno": ed_blno.getValue(),
        //master blno
        "mhno": lc_mmhno.getValue() //mhno
      };
      menuInfo = {
        pgmNm: "Invoice"
      };
      break;
    case "PL":
      url = "/ui/il/pfm/pfbs/pe_101_01_01b.xml";
      menuCode = "pe_101_01_01b.xml";
      menuNm = "Booking Sheet";
      paramObj = {
        "kcomcd": scwin.hd_kcomcd,
        "seaair": "A",
        // sea:S,air:A
        "iogb": scwin.hd_iogb,
        //out:O,in:I
        "blno": "",
        //house blno
        "mblno": ed_blno.getValue(),
        //master blno
        "mhno": lc_mmhno.getValue() //mhno 
      };
      menuInfo = {
        pgmNm: "Booking Sheet"
      };
      break;
    case "PayInv":
      url = "/ui/il/acc/acpay/ac_106_01_01b.xml";
      menuCode = "ac_106_01_01b.xml";
      menuNm = "Payment Invoice";
      paramObj = {
        "kcomcd": scwin.hd_kcomcd,
        // kcomcd
        "seaair": scwin.hd_seaAirCls,
        // sea:S,air:A
        "iogb": scwin.hd_iogb,
        //out:O,in:I
        "blno": "",
        //house blno
        "mblno": ed_blno.getValue(),
        //master blno
        "mhno": lc_mmhno.getValue() //mhno
      };
      menuInfo = {
        pgmNm: "Payment Invoice"
      };
      break;
    default:
      break;
  }
  $c.win.openMenu($p, menuNm, url, menuCode, paramObj, menuInfo);
};

// MHNNO 가져오기
scwin.f_MhnoLoading = async function () {
  let strClntNo = ed_blno.getValue().trim();
  if (strClntNo.length > 0) {
    let param1 = strClntNo;
    let sbm_hmhno = {};
    sbm_hmhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterMhnoListCombo&param1=" + param1;
    let e = await $c.sbm.executeDynamic($p, sbm_hmhno);
    ds_mmhno.setJSON(e.responseJSON.GAUCE);
    if (scwin.linkType == "BL_LINK") {
      scwin.linkType = "";
      scwin.f_Retrieve();
    }
  } else {
    lc_mmhno.setValue("");
  }
};

// Line Account inof 정보 가져 오기 (항공사  사사 오입 )
scwin.f_LineAccInfo = async function () {
  let strClntNo = ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "clntCacd").trim();
  if (strClntNo.length > 0) {
    let param1 = strClntNo;
    let sbm_LineAccInfo = {};
    sbm_LineAccInfo.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterLineAccInfoCombo&param1=" + param1;
    let e = await $c.sbm.executeDynamic($p, sbm_LineAccInfo);
    ds_LineAccInfo.setJSON(e.responseJSON.GAUCE);
  }
};

// 환율정보가져오기
scwin.f_ExrateLoading = async function (param1, param2, param3) {
  if (param1.length > 0) {
    if (param1 == "KRW") {
      param1 = "USD";
    }
    let sbm_ExRate = {};
    sbm_ExRate.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveExRate" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3;
    let e = await $c.sbm.executeDynamic($p, sbm_ExRate);
    ds_ExRate.setJSON(e.responseJSON.GAUCE);
  }
};

// Carrier Nego Accounting
scwin.f_NegoAccounting = async function (gubun) {
  let Cweight = 0;
  for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    //그리드에 업데이트 해줌 
    let rowJson = ds_BuyingFreightInfo.getRowJSON(i);
    if (rowJson.fareEngCd == "AAF") {
      Cweight = $c.num.parseFloat($p, rowJson.chgWt, 0);
      break;
    }
  }
  ed_lcharge.setValue(await scwin.f_TruncAmount("1", ed_lcharge.getValue()));
  switch (gubun) {
    case "Commission":
      if ($c.num.parseInt($p, ed_comm.getValue(), 0) > 0) {
        ed_cchg.setValue($c.num.parseInt($p, ed_lcharge.getValue(), 0) * ($c.num.parseInt($p, ed_comm.getValue(), 0) / 100)); //commission 계산 
        ed_cchg.setValue(await scwin.f_TruncAmount(scwin.Trunc_Commission, ed_cchg.getValue()));
        ed_cvat.setValue($c.num.parseInt($p, ed_cchg.getValue(), 0) * 0.1);
        ed_cvat.setValue(await scwin.f_TruncAmount(scwin.Trunc_vat, ed_cvat.getValue()));
      } else {
        ed_comm.setValue(0);
        ed_cchg.setValue(0);
        ed_cvat.setValue(0);
      }
      break;
    case "Discount":
      if ($c.num.parseInt($p, ed_disc.getValue(), 0) > 0) {
        ed_nert.setValue(0);
        ed_dchg.setValue($c.num.parseInt($p, ed_lcharge.getValue(), 0) * ($c.num.parseInt($p, ed_disc.getValue(), 0) / 100));
        ed_dchg.setValue(await scwin.f_TruncAmount(scwin.Trunc_Discount, $c.num.parseFloat($p, ed_dchg.getValue(), 0)));
      }
      break;
    case "NegoRate":
      if ($c.num.parseInt($p, ed_nert.getValue(), 0) > 0) {
        ed_disc.setValue(0);
        Cweight = 0;
        for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
          let rowJson = ds_BuyingFreightInfo.getRowJSON(i);
          if (rowJson.fareEngCd == "AAF") {
            Cweight = $c.num.parseFloat($p, rowJson.chgWt, 0);
            break;
          }
        }
        if (Cweight != 0) {
          ed_nert.setValue($c.num.parseInt($p, ed_nert.getValue(), 0) + $c.num.parseInt($p, ed_cchg.getValue(), 0) / Cweight);
        }
        ed_nert.setValue(await scwin.f_TruncAmount(scwin.Trunc_Rate, $c.num.parseFloat($p, ed_nert.getValue(), 0)));
        ed_dchg.setValue($c.num.parseInt($p, ed_lcharge.getValue(), 0) - Cweight * $c.num.parseInt($p, ed_nert.getValue(), 0));
        ed_dchg.setValue(await scwin.f_TruncAmount(scwin.Trunc_Discount, $c.num.parseFloat($p, ed_dchg.getValue(), 0)));
      }
      break;
  }
  ed_dchg.setValue(await scwin.f_TruncAmount(scwin.Trunc_Discount, $c.num.parseInt($p, ed_dchg.getValue(), 0)));
  ed_linenet.setValue($c.num.parseInt($p, ed_lcharge.getValue(), 0) - $c.num.parseInt($p, ed_dchg.getValue(), 0));
  for (var i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    //그리드에 업데이트 해줌 
    if (ds_BuyingFreightInfo.getCellData(i, "fareEngCd") == "AAF") {
      ds_BuyingFreightInfo.setCellData(i, "pchsAmt", ed_linenet.getValue());
      break;
    }
  }

  // USD 금액 생성 
  let Exrate = ed_rate.getValue();
  ds_MasterFreightInfo.setCellData(0, "ulRate", Math.round(ed_lrate.getValue() / Exrate * 100) / 100);
  ds_MasterFreightInfo.setCellData(0, "ulCharge", Math.round(ed_lcharge.getValue() / Exrate * 100) / 100);
  ds_MasterFreightInfo.setCellData(0, "ucchg", Math.round(ed_cchg.getValue() / Exrate * 100) / 100);
  ds_MasterFreightInfo.setCellData(0, "ucvat", Math.round(ed_cvat.getValue() / Exrate * 100) / 100);
  ds_MasterFreightInfo.setCellData(0, "udchg", Math.round(ed_dchg.getValue() / Exrate * 100) / 100);
  ds_MasterFreightInfo.setCellData(0, "unert", Math.round(ed_nert.getValue() / Exrate * 100) / 100);
};

// 금액에서 소숫점 처리
scwin.f_TruncAmount = function (gubun, Amount) {
  let TruncAmount = 0;
  switch (gubun) {
    case "1":
      // 소숫점 1자리 사사오입
      TruncAmount = Math.round(Amount);
      return TruncAmount;
      break;
    case "2":
      // 소숫점 버림
      TruncAmount = Math.round(Amount - 0.5);
      return TruncAmount;
      break;
    case "3":
      // 소숫점  버림 후 단자리 사사오입
      TruncAmount = $c.num.parseInt($p, Math.round(Amount / 10) * 10, 0);
      return TruncAmount;
      break;
    case "4":
      // 소숫점 버림 후 단자리 버림
      TruncAmount = Math.round((Amount - 5) / 10) * 10;
      return TruncAmount;
      break;
    case "5":
      // 소숫점 1자리 사사오입 후 단자리 사사오입
      TruncAmount = Math.round(Math.round(Amount) / 10) * 10;
      return TruncAmount;
      break;
    case "6":
      // 소숫점 1자리 사사오입 후 단자리 버림
      TruncAmount = Math.round((Math.round(Amount) - 5) / 10) * 10;
      return TruncAmount;
      break;
    default:
      // 소숫점 1자리 사사오입
      TruncAmount = Math.round(Amount);
      return TruncAmount;
      break;
  }
};

// Prepaid / Collect Summery 구하기
// Master Buying 금액만 Summery 에 포함 된다.
scwin.f_pcSummery = function () {
  let dsBuying = ds_BuyingFreightInfo;
  let pfchg = 0;
  let cfchg = 0;
  let pvchg = 0;
  let cvchg = 0;
  let pachg = 0;
  let cachg = 0;
  let pcchg = 0;
  let ccchg = 0;

  // Buying
  if (dsBuying.getRowCount() > 0) {
    for (let i = 0; i < dsBuying.getRowCount(); i++) {
      let rowJson = dsBuying.getRowJSON(i);
      if (dsBuying.getRowStatus(i) != "D") {
        //delete가 아닌 경우만 계산 한다.
        switch (rowJson.ppccCls) {
          case "P":
            if (rowJson.fareEngCd == "AAF") {
              pfchg = pfchg + $c.num.parseInt($p, rowJson.prtnAmt, 0);
            } else {
              pcchg = pcchg + $c.num.parseInt($p, rowJson.prtnAmt, 0);
            }
            break;
          case "C":
            if (rowJson.fareEngCd == "AAF") {
              cfchg = cfchg + $c.num.parseInt($p, rowJson.prtnAmt, 0);
            } else {
              ccchg = ccchg + $c.num.parseInt($p, rowJson.prtnAmt, 0);
            }
            break;
        }
      }
    }
  }
  ed_pfchg.setValue(pfchg);
  ed_pvchg.setValue(pvchg);
  ed_pachg.setValue(pachg);
  ed_pcchg.setValue(pcchg);
  ed_ptchg.setValue(pfchg + pvchg + pachg + pcchg);
  ed_cfchg.setValue(cfchg);
  ed_cvchg.setValue(cvchg);
  ed_cachg.setValue(cachg);
  ed_ccchg.setValue(ccchg);
  ed_ctchg.setValue(cfchg + cvchg + cachg + ccchg);
};

/**
 * @method 
 * @name f_TotalCac 
 * @description
 * @param {string} gubun
 */
scwin.f_TotalCac = function (gubun) {
  switch (gubun) {
    case "Selling":
      let dsSelling = ds_SellingFreightInfo;
      let Selling_utotal = 0;
      let Selling_total = 0;
      let Selling_totalVat = 0;
      if (dsSelling.getRowCount() > 0) {
        for (let i = 0; i < dsSelling.getRowCount(); i++) {
          let rowJson = dsSelling.getRowJSON(i);
          if (dsSelling.getRowStatus(i) != "D") {
            //delete가 아닌 경우만 계산 한다.	
            let numSellAmtFcrc = $c.num.parseInt($p, rowJson.sellAmtFcrc, 0);
            let numSellAmt = $c.num.parseInt($p, rowJson.sellAmt, 0);
            let numVatAmt = $c.num.parseInt($p, rowJson.vatAmt, 0);
            Selling_utotal = Selling_utotal + numSellAmtFcrc;
            Selling_total = Selling_total + numSellAmt;
            Selling_totalVat = Selling_totalVat + numVatAmt;
          }
        }
      }
      ed_Selling_utotal.setValue(Selling_utotal);
      ed_Selling_total.setValue(Selling_total);
      ed_Selling_totalVat.setValue(Selling_totalVat);
      break;
    case "Buying":
      let dsBuying = ds_BuyingFreightInfo;
      let Buying_utotal = 0;
      let Buying_total = 0;
      let Buying_totalVat = 0;
      let Buying_totalVatSum = 0;
      if (dsBuying.getRowCount() > 0) {
        for (let i = 0; i < dsBuying.getRowCount(); i++) {
          let rowJson = dsBuying.getRowJSON(i);
          if (dsBuying.getRowStatus(i) != "D") {
            //delete가 아닌 경우만 계산 한다.
            let numPchsAmtFcrc = $c.num.parseInt($p, rowJson.pchsAmtFcrc, 0);
            let numPchsAmt = $c.num.parseInt($p, rowJson.pchsAmt, 0);
            let numVat = $c.num.parseInt($p, rowJson.vat, 0);
            Buying_utotal = Buying_utotal + numPchsAmtFcrc;
            Buying_total = Buying_total + numPchsAmt;
            Buying_totalVat = Buying_totalVat + numVat;
          }
        }
        Buying_totalVatSum = Buying_total + Buying_totalVat;
        ed_Buying_utotal.setValue(Buying_utotal);
        ed_Buying_total.setValue(Buying_total);
        ed_Buying_totalVat.setValue(Buying_totalVat);
        ed_Buying_totalVatSum.setValue(Buying_totalVatSum);
      }
      break;
    default:
      break;
  }
};

// Currency 에 따른 Ex-Rate 적용
scwin.f_CurrRateSetting = async function (row, colid, disGubun) {
  let param1 = "";
  let param2 = "";
  let param3 = "";
  let ds;
  switch (disGubun) {
    case "Selling":
      ds = ds_SellingFreightInfo;
      break;
    case "Buying":
      ds = ds_BuyingFreightInfo;
      break;
    default:
      break;
  }
  let value = ds.getCellData(row, colid);
  if (value == lc_cucd.getValue().trim()) {
    ds.setCellData(row, "exRate", ed_rate.getValue());
  } else {
    param1 = ds.getCellData(row, "crcCd");
    ;
    param2 = ed_exdt.getValue().trim();
    param3 = lc_exgb.getValue();
    await scwin.f_ExrateLoading(param1, param2, param3);
    ds.setCellData(row, "exRate", ds_ExRate.getCellData(0, "code"));
  }
};
scwin.f_PkgWegihtSetting = function (row, colid, gubun) {
  let rowJson = ds_MasterFreightInfo.getRowJSON(ds_MasterFreightInfo.getRowPosition());
  switch (gubun) {
    case "Selling":
      if (colid == "fareEngCd") {
        ds_SellingFreightInfo.setCellData(row, "qty", rowJson.mftpkg);
        ds_SellingFreightInfo.setCellData(row, "grossWt", rowJson.mftwht);
        ds_SellingFreightInfo.setCellData(row, "chgWt", rowJson.tcwht);
      }
      break;
    case "Buying":
      if (colid == "fareEngCd") {
        ds_BuyingFreightInfo.setCellData(row, "qty", rowJson.mftpkg);
        ds_BuyingFreightInfo.setCellData(row, "grossWt", rowJson.mftwht);
        ds_BuyingFreightInfo.setCellData(row, "chgWt", rowJson.tcwht);
      }
      break;
  }
};
scwin.f_Carrier_Nego_Accounting_calculation = function (gubun) {
  switch (gubun) {
    case "Grid":
      if (ed_lcharge.getValue().trim() == "" || ed_lcharge.getValue() == 0) {
        for (var i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
          let rowJson = ds_BuyingFreightInfo.getRowJSON(i);
          if (rowJson.fareEngCd == "AAF") {
            ed_lcharge.setValue(rowJson.pchsAmt); //매입 금액 
            ed_lrate.setValue(rowJson.pchsUpr); //단가 	  
            break;
          }
        }
      }
      break;
    case "Object":
      break;
  }
};
scwin.f_RateAmount = async function (row, colid, gubun, olddata) {
  // Rate 에 따른   Amount 계산 
  let rowJson;
  let nUnit = 1;
  switch (gubun) {
    case "Selling":
      let dsSelling = ds_SellingFreightInfo;
      rowJson = dsSelling.getRowJSON(row);
      nUnit = await scwin.f_Currency_Unit(rowJson.crcCd);
      if (colid == "sellUpr" && rowJson[colid] != olddata || colid == "chgWt") {
        let Cweight = rowJson.chgWt;
        let Exrate = rowJson.exRate;
        if (rowJson.crcCd == "KRW") {
          let Amount = Math.round(Cweight * rowJson.sellUpr);
          dsSelling.setCellData(row, "sellAmt", Amount);
          if (rowJson.vatYn == 0) {
            dsSelling.setCellData(row, "vatAmt", 0);
          } else {
            dsSelling.setCellData(row, "vatAmt", Math.round(Amount * 0.1));
          }

          // Selling,Buying 은 원화 일경우 외화 무조건 0
          dsSelling.setCellData(row, "sellAmtFcrc", 0);
        } else {
          let Amount = Math.round(Cweight * rowJson.sellUpr * 100) / 100;
          dsSelling.setCellData(row, "sellAmtFcrc", Amount);
          dsSelling.setCellData(row, "sellAmt", Math.round(Amount * Exrate / nUnit));
          if (rowJson.vatYn == 0) {
            dsSelling.setCellData(row, "vatAmt", 0);
          } else {
            dsSelling.setCellData(row, "vatAmt", Math.round(Amount * Exrate / nUnit * 0.1));
          }
        }
      } else if (colid == "sellAmt" && rowJson[colid] != olddata) {
        let Exrate = rowJson.exRate;
        let Amount = rowJson.sellAmt; // 원화 Amount 금액

        if (rowJson.vatYn == 0) {
          //부가세 재 계산
          dsSelling.setCellData(row, "vatAmt", 0);
        } else {
          dsSelling.setCellData(row, "vatAmt", Math.round(Amount * 0.1));
        }
        if (rowJson.crcCd == "KRW") {
          dsSelling.setCellData(row, "sellAmtFcrc", 0);
        } else {
          dsSelling.setCellData(row, "sellAmtFcrc", Math.round(Amount * nUnit / Exrate * 100) / 100);
        }
      } else if (colid == "sellAmtFcrc" && rowJson[colid] != olddata || colid == "exRate" && rowJson[colid] != olddata) {
        let Exrate = rowJson.exRate;
        let Amount = rowJson.sellAmtFcrc; // 외화 Amount 금액

        if (rowJson.vatYn == 0) {
          //부가세 재 계산
          dsSelling.setCellData(row, "vatAmt", 0);
        } else {
          dsSelling.setCellData(row, "vatAmt", Math.round(Amount * Exrate / nUnit * 0.1));
        }
        dsSelling.setCellData(row, "sellAmt", Math.round(Amount * Exrate / nUnit));
      }
      break;
    case "Buying":
      let dsBuying = ds_BuyingFreightInfo;
      rowJson = dsBuying.getRowJSON(row);
      nUnit = await scwin.f_Currency_Unit(rowJson.crcCd);
      if (colid == "pchsUpr" && rowJson[colid] != olddata || colid == "chgWt") {
        let Cweight = rowJson.chgWt;
        let Exrate = rowJson.exRate;
        if (rowJson.crcCd == "KRW") {
          let Amount = Math.round(Cweight * rowJson.pchsUpr);
          if (rowJson.rateCls == "M") {
            dsBuying.setCellData(row, "prtnAmt", rowJson.pchsUpr);
            dsBuying.setCellData(row, "pchsAmt", rowJson.pchsUpr);
          } else {
            dsBuying.setCellData(row, "prtnAmt", Amount);
            dsBuying.setCellData(row, "pchsAmt", Amount);
          }
          if (rowJson.vatYn == 0) {
            dsBuying.setCellData(row, "vat", 0);
          } else {
            // buying 부가세 소수점 버림 
            dsBuying.setCellData(row, "vat", Math.round(Amount * 0.1 - 0.5));
          }

          // Selling,Buying 은 원화 일경우 외화 무조건 0
          dsBuying.setCellData(row, "pchsAmtFcrc", 0);
        } else {
          let Amount = Math.round(Cweight * rowJson.pchsUpr * 100) / 100;
          dsBuying.setCellData(row, "pchsAmtFcrc", Amount);
          dsBuying.setCellData(row, "prtnAmt", Math.round(Amount * Exrate / nUnit));
          dsBuying.setCellData(row, "pchsAmt", Math.round(Amount * Exrate / nUnit));
          if (rowJson.vatYn == 0) {
            dsBuying.setCellData(row, "vat", 0);
          } else {
            // buying 부가세 소수점 버림 
            dsBuying.setCellData(row, "vat", Math.round(Amount * Exrate / nUnit * 0.1 - 0.5));
          }
          gr_BuyingFreightInfo.setFocusedCell(row, "pchsAmtFcrc");
        }
      } else if (colid == "pchsAmt" && rowJson[colid] != olddata) {
        let Exrate = rowJson.exRate;
        let Amount = rowJson.pchsAmt; // 원화 Amount 금액

        if (rowJson.vatYn == 0) {
          //부가세 재 계산
          dsBuying.setCellData(row, "vat", 0);
        } else {
          // buying 부가세 소수점 버림 
          dsBuying.setCellData(row, "vat", Math.round(Amount * 0.1 - 0.5));
        }
        if (rowJson.crcCd == "KRW") {
          dsBuying.setCellData(row, "pchsAmtFcrc", 0);
        } else {
          dsBuying.setCellData(row, "pchsAmtFcrc", Math.round(Amount * nUnit / Exrate * 100) / 100);
        }
        if (rowJson.fareEngCd != "AAF") {
          dsBuying.setCellData(row, "pchsAmt", rowJson.prtnAmt);
        }
      }
      break;
  }
};
scwin.f_Tariff = async function () {
  let rtnList;
  let ds;
  switch (scwin.TabIndex) {
    case 0:
      // Buying 				
      ds = ds_BuyingFreightInfo;
      let Cweight = 0.0;
      if (ds.getRowCount() > 0) {
        // @ 운임 자료가 존재 합니다. 삭제 후 적용 하세요.
        await $c.gus.cfAlertMsg($p, "Master Buying 운임 자료가 존재 합니다. 삭제 후 적용 하세요.");
      } else {
        await scwin.f_IataTariff(); // iata tariff 조회 

        // Tairff 조회 값이 없을 경우 빠져 나감.
        if (ds_IataTariff.getRowCount() > 0) {
          await scwin.f_AirFreightTariff("Buying");
          if (ds_AirFreightTariff.getRowCount() > 0) {
            rtnList = await scwin.f_AirFreightTariffCalc("Buying");
            ed_disc.setValue(0);
            ed_dchg.setValue(0);
            ed_linenet.setValue(0);

            // commission 계산 
            ed_comm.setValue("5");
            ed_cchg.setValue($c.num.parseInt($p, ed_lcharge.getValue(), 0) * ($c.num.parseInt($p, ed_comm.getValue(), 0) / 100)); //commission 계산 
            ed_cchg.setValue(await scwin.f_TruncAmount(scwin.Trunc_Commission, ed_cchg.getValue()));
            ed_cvat.setValue($c.num.parseInt($p, ed_cchg.getValue(), 0) * 0.1);
            ed_cvat.setValue(await scwin.f_TruncAmount(scwin.Trunc_vat, ed_cvat.getValue()));
            // commission 계산  끝		

            Cweight = $c.num.parseFloat($p, ds_BuyingFreightInfo.getCellData(0, "chgWt"), 0);
            ed_nert.setValue(rtnList[1] + $c.num.parseInt($p, ed_cchg.getValue(), 0) / Cweight);
            ed_nert.setValue(await scwin.f_TruncAmount(Trunc_Rate, ed_nert.getValue()));
            if (ed_nert.getValue() == 0) {
              // min 적용이라는 의미
              ed_linenet.setValue(rtnList[2]);
            } else {
              Cweight = $c.num.parseFloat($p, ds_BuyingFreightInfo.getCellData(0, "chgWt"), 0);
              ed_linenet.setValue(Cweight * $c.num.parseInt($p, ed_nert.getValue(), 0));
            }
            ed_dchg.setValue($c.num.parseInt($p, ed_lcharge.getValue(), 0) - $c.num.parseInt($p, ed_linenet.getValue(), 0));
            ed_dchg.setValue(await scwin.f_TruncAmount(Trunc_Discount, ed_dchg.getValue()));
            ds.setCellData(0, "pchsAmt", ed_linenet.getValue());
          }
        }
        scwin.f_AirOtherTariff("Buying"); // 항공 other tariff 조회 

        // Tairff 조회 값이 없을 경우 빠져 나감.
        if (ds_AirOtherTariff.getRowCount() != 0) {
          scwin.f_AirOtherTariffCalc("Buying");
        }
        if (ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "shipgb") == "D") {
          // Customer booking Cargo Pickup 자료 조회 해서 적용 
          let sbm_AirCustBookingCargoPickupList = {};
          sbm_AirCustBookingCargoPickupList.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=retrieveCoCargoPickupInfoDTOList" + "&param1=" + "H" +
          //하우스:H , 마스터:M 구분
          "&param2=" + scwin.hd_kcomcd + "&param3=" + ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "blno");
          ;
          let e = await $c.sbm.executeDynamic($p, sbm_AirCustBookingCargoPickupList);
          ds_AirCustBookingCargoPickupList.setJSON(e.responseJSON.GAUCE);
          for (let i = 0; i < ds_AirCustBookingCargoPickupList.getRowCount(); i++) {
            scwin.f_AirTruckingTariff(i, "Buying"); // 항공 Trucking tariff 조회 

            if (ds_AirTruckingTariff.getRowCount() > 0) {
              // Tairff 조회 값이 없을 경우 빠져 나감. 
              scwin.f_AirTruckingTariffCalc(i, "Buying");
            }
          }
        }
      }
      break;
    case 1:
      //Selling
      ds = ds_SellingFreightInfo;
      if (ds.getRowCount() > 0) {
        await $c.gus.cfAlertMsg($p, "Master Buying 운임 자료가 존재 합니다. 삭제 후 적용 하세요."); // @ 운임 자료가 존재 합니다. 삭제 후 적용 하세요.
      } else {
        scwin.f_AirFreightTariff("Selling"); // 항공운임 aaf tariff 조회 

        // Tairff 조회 값이 없을 경우 빠져 나감.
        if (ds_AirFreightTariff.getRowCount() != 0) {
          rtnList = await scwin.f_AirFreightTariffCalc("Selling");

          // 그리드 ROW 추가 해 준다  
          scwin.f_FreightCodeInfo("AAF", "");
          scwin.f_AddRow("Selling");
          ds.setCellData(ds.getRowPosition(), "fareEngCd", ds_FcodeInfo.getCellData(0, "col1"));
          ds.setCellData(ds.getRowPosition(), "fareEngNm", ds_FcodeInfo.getCellData(0, "col2"));
          ds.setCellData(ds.getRowPosition(), "fareGrpCd", ds_FcodeInfo.getCellData(0, "col6"));
          ds.setCellData(ds.getRowPosition(), "sellItemCd", ds_FcodeInfo.getCellData(0, "col4"));
          ds.setCellData(ds.getRowPosition(), "vatYn", ds_FcodeInfo.getCellData(0, "col8"));

          // CurrencyRateSetting
          // Tariff 적용은 KRW 로 적용한다.
          ds.setCellData(ds.getRowPosition(), "crcCd", "KRW");
          scwin.f_CurrRateSetting(ds.getRowPosition(), "crcCd", "Selling");
          scwin.f_PkgWegihtSetting(ds.getRowPosition(), "fareEngCd", "Selling");
          if (ds.getCellData(ds.getRowPosition(), "chgWt") < rtnList[0]) {
            ds.setCellData(ds.getRowPosition(), "chgWt", rtnList[0]);
          }
          ds.setCellData(ds.getRowPosition(), "sellUpr", rtnList[1]);
          ds.setCellData(ds.getRowPosition(), "trfUpr", rtnList[1]);
          ds.setCellData(ds.getRowPosition(), "sellAmt", rtnList[2]);
        }
        scwin.f_AirOtherTariff("Selling"); // 항공 other tariff 조회 

        // Tairff 조회 값이 없을 경우 빠져 나감.
        if (ds_AirOtherTariff.getRowCount() != 0) {
          scwin.f_AirOtherTariffCalc("Selling");
        }
        if (ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "shipgb") == "D") {
          // Customer booking Cargo Pickup 자료 조회 해서 적용 
          let sbm_AirCustBookingCargoPickupList = {};
          sbm_AirCustBookingCargoPickupList.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=retrieveCoCargoPickupInfoDTOList" + "&param1=" + "H" +
          //하우스:H , 마스터:M 구분
          "&param2=" + scwin.hd_kcomcd + "&param3=" + ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "blno");
          let e = await $c.sbm.executeDynamic($p, sbm_AirCustBookingCargoPickupList);
          ds_AirCustBookingCargoPickupList.setJSON(e.responseJSON.GAUCE);
          for (let i = 0; i < ds_AirCustBookingCargoPickupList.getRowCount(); i++) {
            scwin.f_AirTruckingTariff(i, "Selling"); // 항공 Trucking tariff 조회 

            if (ds_AirTruckingTariff.getRowCount() > 0) {
              // Tairff 조회 값이 없을 경우 빠져 나감. 
              scwin.f_AirTruckingTariffCalc(i, "Selling");
            }
          }
        }
      }
      break;
    default:
      break;
  }
};

// Freight Code Info 조회 하기 
scwin.f_FreightCodeInfo = async function (Fcode, Fname) {
  let SeaAirClsCd = "A";
  let sbm_FcodeInfo = {};
  sbm_FcodeInfo.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=ilCommonEBC" + "&queryId=retriveFreightCodeInfo" + "&param1=" + Fcode + "&param2=" + Fname + "&param3=" + SeaAirClsCd;
  let e = await $c.sbm.executeDynamic($p, sbm_FcodeInfo);
  ds_FcodeInfo.setJSON(e.responseJSON.GAUCE);
};

// 운임 계산 해줌
scwin.f_AirFreightTariffCalc = function (dsGubun) {
  let rtnList = new Array();
  let dsTariff = "";
  let MinWgt = 0;
  let MinRate = 0;
  let MinChg = 0;
  let MidWgt = 0;
  let MidRate = 0;
  let MidChg = 0;
  let MaxWgt = 0;
  let MaxRate = 0;
  let MaxChg = 0;
  let chgWt = 0;
  let rate = 0;
  let Amount = 0;
  let Item = "";
  let asgb = 0;
  let Gweight = 0;
  if (ds_MasterFreightInfo.getCellData(0, "tcwht") > 0) {
    Gweight = ds_MasterFreightInfo.getCellData(0, "tcwht");
  } else {
    Gweight = ds_MasterFreightInfo.getCellData(0, "mftwht");
  }
  dsTariff = ds_AirFreightTariff;
  for (let i = 0; i < dsTariff.getRowCount(); i++) {
    let rowJson = dsTariff.getRowJSON(i);
    asgb = rowJson.asgb;
    if (rowJson.rank == "M") {
      MinWgt = 0;
      MinRate = 0;
      MinChg = rowJson.rate;
    }
    if (rowJson.wgt <= Gweight) {
      MidWgt = Gweight;
      MidRate = rowJson.rate;
      MidChg = MidWgt * MidRate;
    }
    if (rowJson.wgt > Gweight) {
      MaxWgt = rowJson.wgt;
      MaxRate = rowJson.rate;
      MaxChg = MaxWgt * MaxRate;
      break;
    }
  }
  if (MaxChg > 0) {
    if (MidChg < MaxChg || asgb == 0) {
      chgWt = MidWgt;
      rate = MidRate;
      Amount = MidChg;
    } else {
      chgWt = MaxWgt;
      rate = MaxRate;
      Amount = MaxChg;
      Item = "AS";
    }
  } else {
    chgWt = MidWgt;
    rate = MidRate;
    Amount = MidChg;
  }

  // Minimum 하고의 비교 후 큰 값을 취한다.
  if (MinChg >= Amount) {
    chgWt = MinWgt;
    rate = MinRate;
    Amount = MinChg;
  }
  rtnList[0] = chgWt; // C/Weight
  rtnList[1] = rate; // rate
  rtnList[2] = Amount; // AMOUNT
  rtnList[3] = Item; // ITEM

  return rtnList;
};

/**
 * @method 
 * @name f_AirFreightTariffCalc
 * @description 운임 계산 해줌
 * @param {string} dsGubun
 */
scwin.f_AirFreightTariff = async function (Gubun) {
  let rowJson = ds_MasterFreightInfo.getRowJSON(0);
  let kcomcd = scwin.hd_kcomcd;
  let cust = ""; // 거래쳐 	
  let on_avdt = rowJson.ondt; //Onboard or Arrival Date 
  let dpcd = rowJson.dpcd; // 출발지 
  let dscd = rowJson.dstn; //도착지 
  let carrier = rowJson.carrier; // 항공사 거래처 코드 
  let partner = ""; // 파트너  코드 
  let blgb = ""; // selling , Buying (H, M)
  let sbm_AirFreightTariff = {};
  let e;
  switch (Gubun) {
    // Air Freight Buying Tariff 적용   		
    case "Buying":
      blgb = "M"; // selling , Buying (H, M)
      cust = rowJson.agcd; // 매입처  

      sbm_AirFreightTariff = {};
      sbm_AirFreightTariff.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoRetrieveAirFreightBuyingTariffList" + "&param1=" + kcomcd + "&param2=" + cust + "&param3=" + on_avdt + "&param4=" + dpcd + "&param5=" + dscd + "&param6=" + blgb;
      e = await $c.sbm.executeDynamic($p, sbm_AirFreightTariff);
      ds_AirFreightTariff.setJSON(e.responseJSON.GAUCE);
      break;
    // Air Freight Selling Tariff 적용   	
    case "Selling":
      blgb = "H"; // selling , Buying (H, M)
      cust = rowJson.ascd; // 실화주 

      sbm_AirFreightTariff = {};
      sbm_AirFreightTariff.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoRetrieveAirFreightSellingTariffList" + "&param1=" + kcomcd + "&param2=" + cust + "&param3=" + on_avdt + "&param4=" + dpcd + "&param5=" + dscd + "&param6=" + carrier + "&param7=" + partner + "&param8=" + blgb;
      e = await $c.sbm.executeDynamic($p, sbm_AirFreightTariff);
      ds_AirFreightTariff.setJSON(e.responseJSON.GAUCE);
      break;
  }
};

// 운임 계산 해줌
scwin.f_AirOtherTariffCalc = async function (Gubun) {
  let dsTariff = ds_AirOtherTariff;
  let curr = "KRW";
  let rate = 0;
  let type = "";
  let exrate = ed_rate.getValue();
  let chgWt = ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "tcwht");
  let vatgb = "";
  let fcode = "";
  let nUnit = 1;
  let ds;
  let row;
  let rowJson = ds_FcodeInfo.getRowJSON(0);
  switch (Gubun) {
    case "Buying":
      ds = ds_BuyingFreightInfo;
      row = ds.getRowPosition();
      for (let i = 0; i < dsTariff.getRowCount(); i++) {
        let dsTariffRowJson = dsTariff.getRowJSON(i);
        fcode = dsTariffRowJson.fcode;

        // 그리드 ROW 추가 해 준다  
        scwin.f_FreightCodeInfo(fcode, "");
        scwin.f_AddRow("Buying");
        ds.setCellData(row, "fareEngCd", rowJson.col1);
        ds.setCellData(row, "fareEngNm", rowJson.col2);
        ds.setCellData(row, "fareGrpCd", rowJson.col6);
        ds.setCellData(row, "selpchItemCd", rowJson.col4);
        ds.setCellData(row, "vatYn", rowJson.col8);
        vatgb = rowJson.col8;

        // CurrencyRateSetting
        // Tariff 적용은 KRW 로 적용한다.
        ds.setCellData(row, "crcCd", dsTariffRowJson.curr);
        scwin.f_CurrRateSetting(row, "crcCd", "Buying");
        scwin.f_PkgWegihtSetting(row, "fareEngCd", "Buying");
        curr = dsTariffRowJson.curr;
        rate = dsTariffRowJson.amount;
        type = dsTariffRowJson.type;
        let Amount = 0.00;
        if (curr == "KRW") {
          ds.setCellData(row, "chgWt", chgWt);
          Amount = Math.round(chgWt * rate * 100) / 100;
          if (type == "Case") {
            ds.setCellData(row, "pchsUpr", 0);
            ds.setCellData(row, "trfUpr", 0);
            ds.setCellData(row, "prtnAmt", rate);
            ds.setCellData(row, "pchsAmt", rate);
            ds.setCellData(row, "pchsAmtFcrc", 0);
          } else {
            // w/t
            ds.setCellData(row, "pchsUpr", rate);
            ds.setCellData(row, "trfUpr", rate);
            ds.setCellData(row, "prtnAmt", Amount);
            ds.setCellData(row, "pchsAmt", Amount);
            ds.setCellData(row, "pchsAmtFcrc", 0);
          }
          if (vatgb == 0) {
            //부가세 재 계산 zoot
            ds.setCellData(row, "vatAmt", 0);
          } else {
            ds.setCellData(row, "vatAmt", Math.round(Amount * 0.1));
          }
        } else {
          // 외화 경우 
          nUnit = await scwin.f_Currency_Unit(curr);
          ds.setCellData(row, "chgWt", chgWt);
          Amount = chgWt * rate;
          if (type == "Case") {
            ds.setCellData(row, "pchsUpr", 0);
            ds.setCellData(row, "trfUpr", 0);
            ds.setCellData(row, "prtnAmt", await scwin.f_TruncAmount("1", rate * exrate / nUnit));
            ds.setCellData(row, "pchsAmt", await scwin.f_TruncAmount("1", rate * exrate / nUnit));
            ds.setCellData(row, "pchsAmtFcrc", rate);
          } else {
            // w/t
            ds.setCellData(row, "pchsUpr", rate);
            ds.setCellData(row, "trfUpr", rate);
            ds.setCellData(row, "prtnAmt", await scwin.f_TruncAmount("1", rate * exrate / nUnit));
            ds.setCellData(row, "pchsAmt", await scwin.f_TruncAmount("1", rate * exrate / nUnit));
            ds.setCellData(row, "pchsAmtFcrc", Amount);
          }
          ds.setCellData(row, "vatAmt", 0);
        }
      }
      break;
    case "Selling":
      ds = ds_SellingFreightInfo;
      row = ds.getRowPosition();
      for (let i = 0; i < dsTariff.getRowCount(); i++) {
        let dsTariffRowJson = dsTariff.getRowJSON(i);
        fcode = dsTariffRowJson.fcode;

        // 그리드 ROW 추가 해 준다  
        scwin.f_FreightCodeInfo(fcode, "");
        scwin.f_AddRow("Selling");
        ds.setCellData(row, "fareEngCd", rowJson.col1);
        ds.setCellData(row, "fareEngNm", rowJson.col2);
        ds.setCellData(row, "fareGrpCd", rowJson.col6);
        ds.setCellData(row, "sellItemCd", rowJson.col4);
        ds.setCellData(row, "vatYn", rowJson.col8);
        vatgb = rowJson.col8;

        // CurrencyRateSetting
        // Tariff 적용은 KRW 로 적용한다.
        ds.setCellData(row, "crcCd", dsTariffRowJson.curr);
        scwin.f_CurrRateSetting(row, "crcCd", "Selling");
        scwin.f_PkgWegihtSetting(row, "fareEngCd", "Selling");
        curr = dsTariffRowJson.curr;
        rate = dsTariffRowJson.amount;
        type = dsTariffRowJson.type;
        let Amount = 0.00;
        if (curr == "KRW") {
          ds.setCellData(row, "chgWt", chgWt);
          Amount = Math.round(chgWt * rate * 100) / 100;
          if (type == "Case") {
            ds.setCellData(row, "sellUpr", 0);
            ds.setCellData(row, "trfUpr", 0);
            ds.setCellData(row, "sellAmt", rate);
            ds.setCellData(row, "sellAmtFcrc", 0);
          } else {
            // w/t
            ds.setCellData(row, "sellUpr", rate);
            ds.setCellData(row, "trfUpr", rate);
            ds.setCellData(row, "sellAmt", Amount);
            ds.setCellData(row, "sellAmtFcrc", 0);
          }
          if (vatgb == 0) {
            //부가세 재 계산 zoot
            ds.setCellData(row, "vatAmt", 0);
          } else {
            ds.setCellData(row, "vatAmt", Math.round(Amount * 0.1));
          }
        } else {
          //외화 경우 
          nUnit = await scwin.f_Currency_Unit(curr);
          ds.setCellData(row, "chgWt", chgWt);
          Amount = chgWt * rate;
          if (type == "Case") {
            ds.setCellData(row, "sellUpr", 0);
            ds.setCellData(row, "trfUpr", 0);
            ds.setCellData(row, "sellAmt", await scwin.f_TruncAmount("1", rate * exrate / nUnit));
            ds.setCellData(row, "sellAmtFcrc", rate);
          } else {
            // w/t
            ds.setCellData(row, "sellUpr", rate);
            ds.setCellData(row, "trfUpr", rate);
            ds.setCellData(row, "sellAmt", await scwin.f_TruncAmount("1", Amount * exrate / nUnit));
            ds.setCellData(row, "sellAmtFcrc", Amount);
          }
          ds.setCellData(row, "vatAmt", 0);
        }
      }
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name f_AirFreightTariffCalc
 * @description 운임 계산 해줌
 * @param {string} Gubun
 */
scwin.f_AirOtherTariff = async function (Gubun) {
  let dmJson = ds_MasterFreightInfo.getRowJSON(0);
  let kcomcd = scwin.hd_kcomcd;
  let on_avdt = dmJson.ondt; //Onboard or Arrival Date 
  let from_na = ""; // 출발지  국가
  let to_na = ""; //도착지 국가
  let carrier = dmJson.carrier; // 항공사 거래처 코드 
  let sellgb = ""; // selling 1,0
  let buygb = ""; //  Buying 1,0
  let iogb = "O";
  let param1 = dmJson.dpcd; // 출발지  국가
  let param2 = "";
  let sbm_AirportInfo = {};
  sbm_AirportInfo.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=ilCommonEBC" + "&queryId=retrieveAirPortCode" + "&param1=" + param1 + "&param2=" + param2;
  let e = await $c.sbm.executeDynamic($p, sbm_AirportInfo);
  ds_AirportInfo.setJSON(e.responseJSON.GAUCE);
  from_na = ds_AirportInfo.getCellData(0, "col4");
  param1 = dmJson.dstn; //도착지 국가
  param2 = "";

  // 초기화
  ds_AirportInfo.setJSON([]);
  sbm_AirportInfo.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=ilCommonEBC" + "&queryId=retrieveAirPortCode" + "&param1=" + param1 + "&param2=" + param2;
  e = await $c.sbm.executeDynamic($p, sbm_AirportInfo);
  ds_AirportInfo.setJSON(e.responseJSON.GAUCE);
  to_na = ds_AirportInfo.getCellData(0, "col4");
  let sbm_AirOtherTariff = {};
  let res;
  switch (Gubun) {
    // Air Other Buying Tariff 적용   		
    case "Buying":
      sellgb = "0";
      buygb = "1";
      sbm_AirOtherTariff.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoRetrieveAirOtherTariffList" + "&param1=" + kcomcd + "&param2=" + iogb + "&param3=" + sellgb + "&param4=" + buygb + "&param5=" + from_na + "&param6=" + to_na + "&param7=" + on_avdt + "&param8=" + carrier;
      res = await $c.sbm.executeDynamic($p, sbm_AirOtherTariff);
      ds_AirOtherTariff.setJSON(res.responseJSON.GAUCE);
      break;
    // Air Other Selling Tariff 적용   	
    case "Selling":
      sellgb = "1";
      buygb = "0";
      sbm_AirOtherTariff.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoRetrieveAirOtherTariffList" + "&param1=" + "DBEX" + "&param2=" + scwin.iogb + "&param3=" + sellgb + "&param4=" + buygb + "&param5=" + from_na + "&param6=" + to_na + "&param7=" + on_avdt + "&param8=" + carrier;
      res = await $c.sbm.executeDynamic($p, sbm_AirOtherTariff);
      ds_AirOtherTariff.setJSON(res.responseJSON.GAUCE);
      break;
    default:
      break;
  }
};
scwin.f_IataTariff = async function () {
  let rowJson = ds_MasterFreightInfo.getRowJSON(0);
  let clntCacd = rowJson.clntCacd;
  let clntCanm = rowJson.clntCanm;
  let dpcd = rowJson.dpcd;
  let dscd = rowJson.dscd;
  let dsBuying = ds_BuyingFreightInfo;

  // IATA Tariff 적용
  let sbm_IataTariff = {};
  sbm_IataTariff.action = "/cm.zz.RetrieveComboCMD.do?sysCd=AirExportMasterEBC" + "&queryId=" + "retrieveAirExpIataTariffDTOList" + "&param1=" + dpcd + "&param2=" + dscd;
  let e = await $c.sbm.executeDynamic($p, sbm_IataTariff);
  ds_IataTariff.setJSON(e.responseJSON.GAUCE);
  let MinWgt = 0;
  let MinRate = 0;
  let MinChg = 0;
  let MidWgt = 0;
  let MidRate = 0;
  let MidChg = 0;
  let MaxWgt = 0;
  let MaxRate = 0;
  let MaxChg = 0;
  let chgWt = 0;
  let pchsUpr = 0;
  let prtnAmt = 0;
  let commItem = "";
  let Tfrank = "";
  let MinTfrank = "";
  let MidTfrank = "";
  let MaxTfrank = "";
  let Gweight = 0;
  if ($c.num.parseInt($p, rowJson.tcwht, 0) > 0) {
    Gweight = $c.num.parseInt($p, rowJson.tcwht, 0);
  } else {
    Gweight = $c.num.parseInt($p, rowJson.mftwht, 0);
  }
  if (ds_IataTariff.getRowCount() == 0) {
    //조회 값이 없을 경우 빠져 나감. 
    return;
  }

  // 그리드 ROW 추가 해 준다  
  await scwin.f_FreightCodeInfo("AAF", "");
  await scwin.f_AddRow("Buying");
  let = dfRowJson = ds_FcodeInfo.getRowJSON(0);
  dsBuying.setCellData(dsBuying.getRowPosition(), "pchsClntNo", clntCacd);
  dsBuying.setCellData(dsBuying.getRowPosition(), "pchsClntNm", clntCanm);
  dsBuying.setCellData(dsBuying.getRowPosition(), "fareEngCd", dfRowJson.col1);
  dsBuying.setCellData(dsBuying.getRowPosition(), "fareEngNm", dfRowJson.col2);
  dsBuying.setCellData(dsBuying.getRowPosition(), "fareGrpCd", dfRowJson.col6);
  dsBuying.setCellData(dsBuying.getRowPosition(), "selpchItemCd", dfRowJson.col4);
  dsBuying.setCellData(dsBuying.getRowPosition(), "vatYn", dfRowJson.col8);

  // CurrencyRateSetting
  // Tariff 적용은 KRW 로 적용한다.
  dsBuying.setCellData(dsBuying.getRowPosition(), "crcCd", "KRW");
  scwin.f_CurrRateSetting(dsBuying.getRowPosition(), "crcCd", "Buying");
  scwin.f_PkgWegihtSetting(dsBuying.getRowPosition(), "fareEngCd", "Buying");
  for (let i = 0; i < ds_IataTariff.getRowCount(); i++) {
    let diRowJson = ds_IataTariff.getRowJSON(i);
    if (diRowJson.tfrank == "M") {
      MinWgt = 0;
      MinRate = 0;
      MinChg = diRowJson.tfchg;
      MinTfrank = diRowJson.tfrank;
    }
    if (diRowJson.tfwgt <= Gweight) {
      MidWgt = Gweight;
      MidRate = diRowJson.tfrate;
      MidChg = MidWgt * MidRate;
      MidTfrank = diRowJson.tfrank;
    }
    if (diRowJson.tfwgt > Gweight) {
      MaxWgt = diRowJson.tfwgt;
      MaxRate = diRowJson.tfrate;
      MaxChg = MaxWgt * MaxRate;
      //i = ds_IataTariff.CountRow + 1;
      MaxTfrank = diRowJson.tfrank;
      break;
    }
  }
  if (MaxChg > 0) {
    if (MidChg < MaxChg) {
      chgWt = MidWgt;
      pchsUpr = MidRate;
      prtnAmt = MidChg;
      Tfrank = MidTfrank;
    } else {
      chgWt = MaxWgt;
      pchsUpr = MaxRate;
      prtnAmt = MaxChg;
      Tfrank = MaxTfrank;
      commItem = "AS";
    }
  } else {
    chgWt = MidWgt;
    pchsUpr = MidRate;
    prtnAmt = MidChg;
    Tfrank = MidTfrank;
  }

  // Minimum 하고의 비교 후 큰 값을 취한다.
  if (MinChg >= prtnAmt) {
    chgWt = MinWgt;
    pchsUpr = MinRate;
    prtnAmt = MinChg;
    Tfrank = MinTfrank;
  }
  if (Tfrank == "M") {
    dsBuying.setCellData(dsBuying.getRowPosition(), "chgWt", dsBuying.getCellData(dsBuying.getRowPosition(), "grossWt"));
  } else {
    dsBuying.setCellData(dsBuying.getRowPosition(), "chgWt", chgWt);
  }
  dsBuying.setCellData(dsBuying.getRowPosition(), "pchsUpr", pchsUpr);
  dsBuying.setCellData(dsBuying.getRowPosition(), "trfUpr", pchsUpr);
  dsBuying.setCellData(dsBuying.getRowPosition(), "prtnAmt", prtnAmt);
  dsBuying.setCellData(dsBuying.getRowPosition(), "pchsAmt", prtnAmt);
  ed_linenet.setValue(prtnAmt);
  dsBuying.setCellData(dsBuying.getRowPosition(), "commItem", commItem);
  dsBuying.setCellData(dsBuying.getRowPosition(), "rateCls", Tfrank);
  ed_lrate.setValue(pchsUpr);
  ed_lcharge.setValue(prtnAmt);
};

// Grid 특정 컬럼 자리수 지정 해주기 위한 함수 
scwin.f_GridChangeValidate = function (dsSet, row, colid) {
  switch (colid) {
    case "chgWt":
      dsSet.setCellData(row, "chgWt", Math.round(dsSet.getCellData(row, "chgWt") * 10) / 10); //소수점  3째자리에서 반올림 ㅡ 
      break;
    case "prtnAmt":
      dsSet.setCellData(row, "prtnAmt", Math.round(dsSet.getCellData(row, "prtnAmt"))); //소수점 1째자리에서 반올림 ㅡ 
      break;
    default:
      break;
  }
};

// Air MASTER Commission 인보이스 번호 조회
scwin.f_AirMasterCommInvno = async function () {
  let param1 = scwin.hd_kcomcd.trim();
  let param2 = ed_blno.getValue().trim();
  let param3 = hd_odrNo.getValue();
  let sbm_AirMasterCommInvno = {};
  sbm_AirMasterCommInvno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveAirMasterCommInvno" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3;
  let e = await $c.sbm.executeDynamic($p, sbm_AirMasterCommInvno);
  ds_AirMasterCommInvno.setJSON(e.responseJSON.GAUCE);
};

/**
 * @method 
 * @name f_AirFreightTariffCalc
 * @description 운임 계산 해줌
 * @param {number} Rows
 * @param {string} Gubun
 */
scwin.f_AirTruckingTariff = async function (Rows, Gubun) {
  let adpt_dt = ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "ondt"); //Onboard or Arrival Date 
  let rowJson = ds_AirCustBookingCargoPickupList.getRowJSON(Rows);
  let dpt_district_cd = rowJson.fromDistrictCd; // 출발지  지역
  let arv_district_cd = rowJson.toDistrictCd; //도착지 지역 
  let clnt_no = rowJson.customerCd; // 실화주 
  let trans_clnt_no = rowJson.transCd; // 운송사 
  let trans_cond_cd = rowJson.transCondCd; //  편도:1/왕복:2 
  let car_cond_cd = rowJson.carCondCd; // 차종 
  let sell_buy_typ = ""; //selling , buying 
  let full_yn = rowJson.fullYn; //독차 여부 0:1
  let wtBreak = rowJson.cwht; //weight  							     		

  switch (Gubun) {
    // Air Trucking Buying Tariff 적용   		
    case "Buying":
      sell_buy_typ = "B";
      break;
    // Air Trucking Selling Tariff 적용   	
    case "Selling":
      sell_buy_typ = "S";
      break;
  }
  let sbm_AirTruckingTariff = {};
  sbm_AirTruckingTariff.action = "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoLclTransRateTairffList" + "&param1=" + dpt_district_cd + "&param2=" + arv_district_cd + "&param3=" + clnt_no + "&param4=" + trans_clnt_no + "&param5=" + trans_cond_cd + "&param6=" + car_cond_cd + "&param7=" + sell_buy_typ + "&param8=" + full_yn + "&param9=" + wtBreak + "&param10=" + adpt_dt;
  let e = await $c.sbm.executeDynamic($p, sbm_AirTruckingTariff);
  ds_AirTruckingTariff.setJSON(e.responseJSON.GAUCE);
};

/**
 * @method 
 * @name f_AirTruckingTariffCalc
 * @description 운임 계산 해줌
 * @param {number} Rows
 * @param {string} Gubun
 */
scwin.f_AirTruckingTariffCalc = async function (Rows, Gubun) {
  let daRowJson = ds_AirCustBookingCargoPickupList.getRowJSON(Rows);
  let dfRowJson = ds_FcodeInfo.getRowJSON(0);
  let dsTariff = ds_AirTruckingTariff;
  let curr = "KRW";
  let rate = 0;
  let type = "";
  let chgWt = daRowJson.wtBreak; //weight 
  let vatgb = "";
  let fcode = "";
  let custcd = "";
  let custnm = "";
  let rowPosition = 0;
  switch (Gubun) {
    case "Buying":
      let dsBuying = ds_BuyingFreightInfo;
      type = daRowJson.internalTyp;
      custnm = ""; // 운송사 
      custcd = ""; // 운송사 

      if (type == "Y") {
        //internal 경우 
        custcd = scwin.p_clntNo;
        custnm = scwin.p_clntNm;
      } else {
        custcd = daRowJson.transCd; // 운송사 
        custnm = daRowJson.transNm; // 운송사 
      }
      for (let i = 0; i < dsTariff.getRowCount(); i++) {
        fcode = "BTCV";

        // 그리드 ROW 추가 해 준다  
        scwin.f_FreightCodeInfo(fcode, "");
        await scwin.f_AddRow("Buying");
        rowPosition = dsBuying.getRowPosition();
        dsBuying.setCellData(rowPosition, "pchsClntNo", custcd); // 운송사  
        dsBuying.setCellData(rowPosition, "pchsClntNm", custnm); // 운송사  						

        if (type == "Y") {
          dsBuying.setCellData(rowPosition, "pchsTyp", "3");
          dsBuying.setCellData(rowPosition, "sellDeptCd", scwin.p_lobranCd);
          dsBuying.setCellData(rowPosition, "sellDeptNm", scwin.p_lobranNm);
          gr_BuyingFreightInfo.setColumnReadOnly("sellDeptCd", false);
        } else {
          dsBuying.setCellData(rowPosition, "pchsTyp", "1");
        }
        dsBuying.setCellData(rowPosition, "fareEngCd", dfRowJson.col1);
        dsBuying.setCellData(rowPosition, "fareEngNm", dfRowJson.col2);
        dsBuying.setCellData(rowPosition, "fareGrpCd", dfRowJson.col6);
        dsBuying.setCellData(rowPosition, "selpchItemCd", dfRowJson.col4);
        dsBuying.setCellData(rowPosition, "vatYn", dfRowJson.col8);
        vatgb = dfRowJson.col8;

        // CurrencyRateSetting
        // Tariff 적용은 KRW 로 적용한다.
        dsBuying.setCellData(rowPosition, "crcCd", curr);
        scwin.f_CurrRateSetting(rowPosition, "crcCd", "Buying");
        scwin.f_PkgWegihtSetting(rowPosition, "fareEngCd", "Buying");
        rate = dsTariff.getCellData(i, "transRate");
        let Amount = rate;
        dsBuying.setCellData(rowPosition, "chgWt", chgWt);
        dsBuying.setCellData(rowPosition, "pchsUpr", "1");
        dsBuying.setCellData(rowPosition, "trfUpr", "1");
        dsBuying.setCellData(rowPosition, "prtnAmt", Amount);
        dsBuying.setCellData(rowPosition, "pchsAmt", Amount);
        dsBuying.setCellData(rowPosition, "pchsAmtFcrc", 0);
        if (vatgb == 0) {
          //부가세 재 계산 zoot
          dsBuying.setCellData(rowPosition, "vatAmt", 0);
        } else {
          dsBuying.setCellData(rowPosition, "vatAmt", Math.round(Amount * 0.1));
        }
      }
      break;
    case "Selling":
      let dsSelling = ds_SellingFreightInfo;
      custcd = daRowJson.customerCd; // 실화주 
      custnm = daRowJson.customerNm; // 실화주 

      for (let i = 0; i < dsTariff.getRowCount(); i++) {
        fcode = "BTCV";

        // 그리드 ROW 추가 해 준다  
        scwin.f_FreightCodeInfo(fcode, "");
        await scwin.f_AddRow("Selling");
        rowPosition = dsSelling.getRowPosition();
        dsSelling.setCellData(rowPosition, "bilgClntNo", custcd); // 실화주  
        dsSelling.setCellData(rowPosition, "bilgClntNm", custnm); // 실화주  
        dsSelling.setCellData(rowPosition, "fareEngCd", dfRowJson.col1);
        dsSelling.setCellData(rowPosition, "fareEngNm", dfRowJson.col2);
        dsSelling.setCellData(rowPosition, "fareGrpCd", dfRowJson.col6);
        dsSelling.setCellData(rowPosition, "sellItemCd", dfRowJson.col4);
        dsSelling.setCellData(rowPosition, "vatYn", dfRowJson.col8);
        vatgb = dfRowJson.col8;

        // CurrencyRateSetting
        // Tariff 적용은 KRW 로 적용한다.
        dsSelling.setCellData(rowPosition, "crcCd", curr);
        scwin.f_CurrRateSetting(rowPosition, "crcCd", "Selling");
        scwin.f_PkgWegihtSetting(rowPosition, "fareEngCd", "Selling");
        rate = dsTariff.getCellData(i, "transRate");
        let Amount = rate;
        dsSelling.setCellData(rowPosition, "chgWt", chgWt);
        dsSelling.setCellData(rowPosition, "sellUpr", "1");
        dsSelling.setCellData(rowPosition, "trfUpr", "1");
        dsSelling.setCellData(rowPosition, "sellAmt", Amount);
        dsSelling.setCellData(rowPosition, "sellAmtFcrc", 0);
        if (vatgb == 0) {
          //부가세 재 계산 zoot
          dsSelling.setCellData(rowPosition, "vatAmt", 0);
        } else {
          dsSelling.setCellData(rowPosition, "vatAmt", Math.round(Amount * 0.1));
        }
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
//Result date Change
//------------------------------------------------------------------------- 	
scwin.f_ResultdateChange = async function () {
  let popupName = "Result Date Change";
  let url = "/ui/il/common/xml/ilCommonResultDateChange.xml";
  let options = {
    width: "460px",
    height: "280px",
    popupName: popupName,
    title: popupName
  };
  let rtnList = await $c.win.openPopup($p, url, options);
  if (typeof rtnList != "undefined") {
    if (rtnList[0] == "N/A") scwin.f_GridResultdateChange(rtnList);
  }
};

/**
 * @method 
 * @name f_GridResultdateChange
 * @description
 */
scwin.f_GridResultdateChange = async function (rtnList) {
  switch (scwin.TabIndex) {
    case 1:
      // Selling
      if (ds_SellingFreightInfo.getRowCount() == 0) {
        $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]); //  @이(가) 존재하지 않습니다.		
      } else {
        let msg = await $c.win.confirm($p, E_MSG_CM_CRM_001);
        if (msg) {
          for (let i = 0; i < ds_SellingFreightInfo.getRowCount(); i++) {
            if (ds_SellingFreightInfo.getCellData(i, "certiNo").trim() == "") {
              ds_SellingFreightInfo.setCellData(i, "rsltsStdDt", rtnList[1]);
            }
          }
        }
      }
      break;
    case 0:
      // Buying
      if (ds_BuyingFreightInfo.getRowCount() == "0") {
        $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]); //  @이(가) 존재하지 않습니다.	
      } else {
        let msg = await $c.win.confirm($p, E_MSG_CM_CRM_001);
        if (msg) {
          for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
            if (ds_BuyingFreightInfo.getCellData(i, "pchsCertiNo").trim() == "") {
              ds_BuyingFreightInfo.setCellData(i, "rsltsStdDt", rtnList[1]);
            }
          }
        }
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
//Customer Change 
//------------------------------------------------------------------------- 
scwin.f_CustomerChange = async function () {
  let options = {
    width: "460px",
    height: "240px",
    popupName: "Customer Change",
    title: "Customer Change"
  };
  let url = "/ui/il/common/xml/ilCommonCustomerChange.xml";
  let rtnList = await $c.win.openPopup($p, url, options);
  if (typeof rtnList != "undefined") {
    if (rtnList[0] == "N/A") scwin.f_GridCustomerChange(rtnList);
  }
};

/**
 * @method 
 * @name f_GridCustomerChange
 * @description Customer Change
 * @param {array} rtnList 
 */
scwin.f_GridCustomerChange = async function (rtnList) {
  let ds, errorParam, col1, col2, col3;
  switch (scwin.TabIndex) {
    case 1:
      // Selling
      ds = ds_SellingFreightInfo;
      errorParam = ["Selling Information"];
      col1 = "certiNo";
      col2 = "bilgClntNo";
      col3 = "bilgClntNm";
      break;
    case 0:
      // Buying
      ds = ds_BuyingFreightInfo;
      errorParam = ["Buying Information"];
      col1 = "pchsCertiNo";
      col2 = "pchsClntNo";
      col3 = "pchsClntNm";
      break;
    default:
      break;
  }
  if (ds.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, errorParam);
    return;
  }

  // 저장하시겠습니까?
  let msg = await $c.win.confirm($p, E_MSG_CM_CRM_001);
  if (msg) {
    for (let i = 0; i < ds.getRowCount(); i++) {
      if (ds.getCellData(i, col1) == "" && ds.getCellData(i, col2) == rtnList[1]) {
        ds.setCellData(i, col2, rtnList[3]);
        ds.setCellData(i, col3, rtnList[4]);
      }
    }
  }
};

//-------------------------------------------------------------------------
//Ex-rate Change 
//------------------------------------------------------------------------- 	
scwin.f_exRateChange = async function () {
  let nUnit = 1;
  nUnit = await scwin.f_Currency_Unit(lc_cucd.getValue());
  let ds;
  if (scwin.TabIndex == 0) {
    ds = ds_BuyingFreightInfo;
    if (ds.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]);
    } else {
      let msg = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (msg) {
        for (let i = 0; i < ds.getRowCount(); i++) {
          let rowJson = ds.getRowJSON(i);
          if (rowJson.pchsCertiNo.trim() == "") {
            ds.setCellData(i, "exRate", ed_rate.getValue());
            if (rowJson.crcCd != "KRW") {
              ds.setCellData(i, "crcCd", lc_cucd.getValue().trim());
              ds.setCellData(i, "pchsAmt", Math.round(rowJson.pchsAmtFcrc * rowJson.exRate / nUnit));
            }
            if (rowJson.vatYn == "0") {
              ds.setCellData(i, "vat", "0");
            } else {
              ds.setCellData(i, "vat", Math.round(rowJson.pchsAmt * 0.1 * 100) / 100);
            }
          }
        }
      }
    }
  } else if (scwin.TabIndex == 1) {
    ds = ds_SellingFreightInfo;
    if (ds.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Selling Information"]);
    } else {
      let msg = await $c.win.confirm($p, E_MSG_CM_CRM_001);
      if (msg) {
        for (let i = 0; i < ds.getRowCount(); i++) {
          let rowJson = ds.getRowJSON(i);
          if (rowJson.certiNo.trim() == "") {
            ds.setCellData(i, "exRate", ed_rate.getValue());
            if (rowJson.crcCd != "KRW") {
              ds.setCellData(i, "crcCd", lc_cucd.getValue().trim());
              ds.setCellData(i, "sellAmt", Math.round(rowJson.sellAmtFcrc * rowJson.exRate / nUnit));
            }
            if (rowJson.vatYn == "0") {
              ds.setCellData(i, "vatAmt", "0");
            } else {
              ds.setCellData(i, "vatAmt", Math.round(rowJson.sellAmt * 0.1 * 100) / 100);
            }
          }
        }
      }
    }
  }
};
scwin.ed_blno_onblur = function (e) {
  scwin.f_MhnoLoading();
};
scwin.ds_LineAccInfo_ondataload = function () {
  scwin.f_LineAccInfoSet();
};

/**
 * @event 
 * @name ed_exdt_onchange
 * @description Ex-Rate Date component의 value가 변경되었을 때 발생
 */
scwin.ed_exdt_onblur = async function () {
  // Ex-Rate 가져 오기
  let param1 = lc_cucd.getValue();
  let param2 = ed_exdt.getValue();
  let param3 = lc_exgb.getValue();
  if (ed_rate.getValue().trim() == "") ed_rate.setValue(0);
  if (ed_exrate.getValue().trim() == "") ed_exrate.setValue(0);

  // 이규복씨가 무조건 환율 적용 되게 수정 요청 함 
  await scwin.f_ExrateLoading(param1, param2, param3);
  if (ds_ExRate.getRowCount() > 0) {
    ed_rate.setValue(ds_ExRate.getCellData(0, "code"));
    ed_exrate.setValue(ds_ExRate.getCellData(0, "name"));
    scwin.exRateCheck = "2";
    scwin.exRate1 = ed_rate.getValue();
    scwin.crc = lc_cucd.getValue();
    scwin.exRate2 = ed_exrate.getValue();
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다. 
    scwin.exRateCheck = "1";
  }
};
scwin.ed_rate_onblur = function (e) {
  if (scwin.exRateCheck == "1") {
    if (ed_exrate.getValue() == "" || ed_exrate.getValue() == "0") {
      ed_exrate.setValue(ed_rate.getValue());
    }
    scwin.exRate1 = ed_rate.getValue();
    scwin.crc = lc_cucd.getValue();
  }
};
scwin.ed_exrate_onblur = function (e) {
  if (scwin.exRateCheck == "1") {
    scwin.exRate2 = ed_exrate.getValue();
  }
};

/**
 * @method 
 * @name ds_MasterFreightInfo_ondataload
 * @description for=ds_MasterFreightInfo event=OnLoadCompleted(rowcnt) 
 */
scwin.ds_MasterFreightInfo_ondataload = function () {
  let cnt = ds_MasterFreightInfo.getRowCount();
  if (cnt > 0) {
    ds_MasterFreightInfo.setRowPosition(0);
  }
  let rowJson = ds_MasterFreightInfo.getRowJSON(ds_MasterFreightInfo.getRowPosition());
  if (cnt > 0 && rowJson.rate != "0") {
    scwin.exRate1 = rowJson.rate;
    scwin.crc = rowJson.cucd;
    scwin.exRateCheck = "3";
  }
  if (cnt > 0 && rowJson.exrate != "0") {
    scwin.exRate2 = rowJson.exrate;
  }
};
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let cnt1 = ds_BuyingFreightInfo.getRowCount();
  if (cnt1 > 0) {
    ds_BuyingFreightInfo.setIgnoreStatus("currow", true);
    for (let i = 0; i < cnt1; i++) {
      ds_BuyingFreightInfo.setCellData(i, "currow", i + 1);
    }
    ds_BuyingFreightInfo.setRowPosition(0);
  }
  totalRows1.setValue(cnt1);
  let cnt2 = ds_SellingFreightInfo.getRowCount();
  if (cnt2 > 0) {
    ds_SellingFreightInfo.setIgnoreStatus("currow", true);
    for (let i = 0; i < cnt2; i++) {
      ds_SellingFreightInfo.setCellData(i, "currow", i + 1);
    }
    ds_SellingFreightInfo.setRowPosition(0);
  }
  totalRows2.setValue(cnt2);
  ds_MasterFreightInfo.getRowCount() == 0 ? scwin.f_ProcessResult("None") : scwin.f_ProcessResult("FreightInfo");
  if (scwin.saveFlag == 1) {
    scwin.f_Set("SAVE");
    scwin.saveFlag = 0;
  }
};
scwin.sbm_Save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (scwin.actionFlag == "Save") {
    scwin.saveFlag = 1;
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
    scwin.f_MhnoLoading();
    await scwin.f_Retrieve();
  }
  if (scwin.actionFlag == "Delete") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
  }
  scwin.processFlag = "None";
};
scwin.ed_lrate_onblur = function (e) {
  scwin.f_NegoAccounting();
};
scwin.ed_comm_onblur = async function (e) {
  if ($c.num.parseInt($p, ed_comm.getValue(), 0) > 0) {
    ed_cchg.setValue($c.num.parseInt($p, ed_lcharge.getValue()) * ($c.num.parseInt($p, ed_comm.getValue()) / 100)); //commission 계산 
    ed_cchg.setValue(await scwin.f_TruncAmount(scwin.Trunc_Commission, ed_cchg.getValue()));
    ed_cvat.setValue($c.num.parseInt($p, ed_cchg.getValue()) * 0.1);
    ed_cvat.setValue(await scwin.f_TruncAmount(scwin.Trunc_vat, ed_cvat.getValue()));
  } else {
    ed_comm.setValue(0);
    ed_cchg.setValue(0);
    ed_cvat.setValue(0);
  }
};
scwin.ed_disc_onblur = function (e) {
  scwin.f_NegoAccounting("Discount");
};
scwin.ed_nert_onviewchange = function (info) {
  scwin.f_NegoAccounting("NegoRate");
};
scwin.ed_dchg_onblur = function (e) {
  scwin.f_NegoAccounting();
};
scwin.ed_linenet_onblur = function (e) {
  if (ed_linenet.getValue() == "") {
    ed_linenet.setValue(0);
  }
  for (let i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    if (ds_BuyingFreightInfo.getCellData(i, "fareEngCd") == "AAF") {
      ds_BuyingFreightInfo.setCellData(i, "pchsAmt", ed_linenet.getValue());
    }
  }
};

/**
 * @event 
 * @name gr_BuyingFreightInfo_ontextimageclick
 * @description Buying탭 inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 */
scwin.gr_BuyingFreightInfo_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_BuyingFreightInfo.getColumnID(columnIndex);
  switch (colId) {
    case "pchsClntNo":
      scwin.f_PopUpGrid("BuyingCustomer", rowIndex, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid("BuyingFreight", rowIndex, "F", "F", "F");
      break;
    case "sellDeptCd":
      scwin.f_PopUpGrid("BuyingInnerDept", rowIndex, "F", "F", "F");
      break;
    default:
      break;
  }
};
scwin.gr_BuyingFreightInfo_onbeforeedit = function (rowIndex, columnIndex, value) {
  if (scwin.count == 1) {
    scwin.count = 0;
    return false;
  }
  scwin.count++;
  scwin.olddata = value;
};

/**
 * @event 
 * @name gr_BuyingFreightInfo_onafteredit
 * @description Buying) 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 * @asis for=gr_BuyingFreightInfo event=OnCloseUp(Row,Colid)
 * @asis for=gr_BuyingFreightInfo event=OnExit(row,colid,olddata)
 */
scwin.gr_BuyingFreightInfo_onafteredit = async function (rowIndex, columnIndex, value) {
  let rowJson = ds_BuyingFreightInfo.getRowJSON(rowIndex);
  let colId = gr_BuyingFreightInfo.getColumnID(columnIndex);
  let Amount = 0;
  switch (colId) {
    case "pchsClntNo":
      if (rowJson[colId] != "" && rowJson[colId] != scwin.olddata) {
        ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNm", "");
        scwin.f_PopUpGrid("BuyingCustomer", rowIndex, "T", "F", "F");
      } else if (rowJson[colId].trim() == "") {
        ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNm", "");
        ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNo", "");
      }
      break;
    case "fareEngCd":
      if (rowJson[colId].trim() != "" && rowJson[colId] != scwin.olddata) {
        ds_BuyingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        scwin.f_PopUpGrid("BuyingFreight", rowIndex, "T", "F", "F");
      } else if (rowJson[colId].trim() == "") {
        ds_BuyingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        ds_BuyingFreightInfo.setCellData(rowIndex, "fareEngCd", "");
      }
      break;
    case "sellDeptCd":
      if (rowJson[colId].trim() != "" && rowJson[colId] != scwin.olddata) {
        ds_BuyingFreightInfo.setCellData(rowIndex, "sellDeptNm", "");
        scwin.f_PopUpGrid("BuyingInnerDept", rowIndex, "T", "F", "F");
      } else if (rowJson[colId].trim() == "") {
        ds_BuyingFreightInfo.setCellData(rowIndex, "sellDeptNm", "");
        ds_BuyingFreightInfo.setCellData(rowIndex, "sellDeptCd", "");
      }
      break;
    case "rateCls":
      Amount = Math.round(rowJson.chgWt * rowJson.pchsUpr);
      if (rowJson.crcCd == "KRW") {
        if (rowJson.rateCls == "M") {
          ds_BuyingFreightInfo.setCellData(rowIndex, "prtnAmt", rowJson.pchsUpr);
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsAmt", rowJson.pchsUpr);
        } else {
          ds_BuyingFreightInfo.setCellData(rowIndex, "prtnAmt", Amount);
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsAmt", Amount);
        }
      }
      break;
    case "pchsUpr":
      Amount = Math.round(rowJson.chgWt * rowJson.pchsUpr);
      if (rowJson.crcCd == "KRW") {
        if (rowJson.rateCls == "M") {
          ds_BuyingFreightInfo.setCellData(rowIndex, "prtnAmt", rowJson.pchsUpr);
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsAmt", rowJson.pchsUpr);
        } else {
          ds_BuyingFreightInfo.setCellData(rowIndex, "prtnAmt", Amount);
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsAmt", Amount);
        }
      }
      break;
    default:
      break;
  }
  if (colId == "crcCd") {
    await scwin.f_CurrRateSetting(rowIndex, colId, "Buying"); // 화율정보에 따른 EX-Rate 가져오기
  }
  if (rowJson[colId] != scwin.olddata) {
    // 운입코드에 따른 Package, Weight 기본 설정 부분
    await scwin.f_PkgWegihtSetting(rowIndex, colId, "Buying");
    if (colId == "fareEngCd") {
      //ATC, ATCV 자동 계산 부분 (Gweight *35 +2000원) 소수 점 버림 처리 
      if (rowJson[colId] != scwin.olddata) {
        if (rowJson[colId] == "ATC" || rowJson[colId] == "ATCV") {
          ds_BuyingFreightInfo.setCellData(rowIndex, "crcCd", "KRW");
          ds_BuyingFreightInfo.setCellData(rowIndex, "exRate", 1);
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsUpr", 1);
          ds_BuyingFreightInfo.setCellData(rowIndex, "chgWt", ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "mftwht"));
          ds_BuyingFreightInfo.setCellData(rowIndex, "prtnAmt", Math.round(rowJson.chgWt * 35 + 2000 - 0.5));
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsAmt", Math.round(rowJson.chgWt * 35 + 2000 - 0.5));
          if (rowJson[colId] == "ATCV") {
            ds_BuyingFreightInfo.setCellData(rowIndex, "vat", Math.round(rowJson.pchsAmt * 0.1 - 0.5));
          }
        }
      }
    }

    // Rate 에 따른   Amount 계산 
    await scwin.f_RateAmount(rowIndex, colId, "Buying", scwin.olddata);
    // Carrier_Nego_Accounting 계산 해줌 
    await scwin.f_Carrier_Nego_Accounting_calculation("Grid");
  }
  if (ds_BuyingFreightInfo.getRowStatus(rowIndex) == "D" && rowJson.fareEngCd == "AAF") {
    //delete인경우 NegoAccounting 제거 해줌 
    ed_lrate.setValue(0);
    ed_lcharge.setValue(0);
    ed_comm.setValue(0);
    ed_cchg.setValue(0);
    ed_cvat.setValue(0);
    ed_disc.setValue(0);
    ed_nert.setValue(0);
    ed_dchg.setValue(0);
    ed_linenet.setValue(0);
  }
  switch (colId) {
    case "chgWt":
      scwin.f_GridChangeValidate(ds_BuyingFreightInfo, rowIndex, colId);
      break;
    case "prtnAmt":
      scwin.f_GridChangeValidate(ds_BuyingFreightInfo, rowIndex, colId);
      break;
    case "pchsTyp":
      if (rowJson.pchsTyp == "3") {
        if (rowJson.pchsClntNo == "") {
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNo", scwin.p_clntNo);
          ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNm", scwin.p_clntNm);
        }
      }
      break;
    default:
      break;
  }
  await scwin.f_pcSummery();
  scwin.f_TotalCac("Buying");
};

/**
 * @event 
 * @name gr_SellingFreightInfo_ontextimageclick
 * @description Selling탭 inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 */
scwin.gr_SellingFreightInfo_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_SellingFreightInfo.getColumnID(columnIndex);
  switch (colId) {
    case "bilgClntNo":
      scwin.f_PopUpGrid("SellingCustomer", rowIndex, "T", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid("SellingFreight", rowIndex, "T", "F", "F");
      break;
    default:
      break;
  }
};
scwin.gr_SellingFreightInfo_onbeforeedit = function (rowIndex, columnIndex, value) {
  if (scwin.count == 1) {
    scwin.count = 0;
    return false;
  }
  scwin.count++;
  scwin.olddata = value;
};

/**
 * @event 
 * @name gr_SellingFreightInfo_onafteredit
 * @description Selling) 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 * @asis for=gr_SellingFreightInfo event=OnCloseUp(Row,Colid)
 */
scwin.gr_SellingFreightInfo_onafteredit = async function (rowIndex, columnIndex, value) {
  let rowJson = ds_SellingFreightInfo.getRowJSON(rowIndex);
  let colId = gr_SellingFreightInfo.getColumnID(columnIndex);
  switch (colId) {
    case "bilgClntNo":
      // 코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (rowJson[colId].trim() != "" && rowJson[colId] != scwin.olddata) {
        ds_SellingFreightInfo.setCellData(rowIndex, "bilgClntNm", "");
        scwin.f_PopUpGrid("SellingCustomer", rowIndex, "T", "F", "F");
      } else if (rowJson[colId].trim() == "") {
        ds_SellingFreightInfo.setCellData(rowIndex, "bilgClntNm", "");
        ds_SellingFreightInfo.setCellData(rowIndex, "bilgClntNo", "");
      }
      break;
    case "fareEngCd":
      if (rowJson[colId].trim() != "" && rowJson[colId] != scwin.olddata) {
        ds_SellingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        scwin.f_PopUpGrid("SellingFreight", rowIndex, "T", "F", "F");
      } else if (rowJson[colId].trim() == "") {
        ds_SellingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        ds_SellingFreightInfo.setCellData(rowIndex, "fareEngCd", "");
      }
      break;
    default:
      break;
  }
  if (colId == "crcCd") {
    await scwin.f_CurrRateSetting(rowIndex, colId, "Selling"); // 화율정보에 따른 EX-Rate 가져오기
  }
  if (rowJson[colId] != scwin.olddata) {
    // 운입코드에 따른 Package, Weight 기본 설정 부분
    await scwin.f_PkgWegihtSetting(rowIndex, colId, "Selling");
    if (colId == "fareEngCd") {
      //ATC, ATCV 자동 계산 부분 (Gweight *35 +2000원) 소수 점 버림 처리 
      if (rowJson[colId] != scwin.olddata) {
        if (rowJson[colId] == "ATC" || rowJson[colId] == "ATCV") {
          ds_SellingFreightInfo.setCellData(rowIndex, "crcCd", "KRW");
          ds_SellingFreightInfo.setCellData(rowIndex, "exRate", 1);
          ds_SellingFreightInfo.setCellData(rowIndex, "sellUpr", 1);
          ds_SellingFreightInfo.setCellData(rowIndex, "grossWt", ds_MasterFreightInfo.getCellData(ds_MasterFreightInfo.getRowPosition(), "mftwht"));
          ds_SellingFreightInfo.setCellData(rowIndex, "sellAmt", Math.round(rowJson.grossWt * 35 + 2000 - 0.5));
          if (rowJson[colId] == "ATCV") {
            ds_SellingFreightInfo.setCellData(rowIndex, "vat", Math.round(rowJson.pchsAmt * 0.1));
          }
        }
      }
    }

    // Rate 에 따른   Amount 계산 
    await scwin.f_RateAmount(rowIndex, colId, "Selling", scwin.olddata);
  }
  switch (colId) {
    case "chgWt":
      scwin.f_GridChangeValidate(ds_SellingFreightInfo, rowIndex, colId);
      break;
    case "prtnAmt":
      break;
    default:
      break;
  }
  scwin.f_TotalCac("Selling");
};
scwin.f_AddRowMulti1 = function (e) {
  scwin.f_AddRowMulti("Buying");
};
scwin.f_DeleteRow1 = function (e) {
  scwin.f_DeleteRow("Buying");
};
scwin.f_DeleteAllRow1 = function (e) {
  scwin.f_DeleteAllRow("Buying");
};
scwin.f_UndoRow1 = function (e) {
  scwin.f_UndoRow("Buying");
};
scwin.f_AddRowMulti2 = function (e) {
  scwin.f_AddRowMulti("Selling");
};
scwin.f_DeleteRow2 = function (e) {
  scwin.f_DeleteRow("Selling");
};
scwin.f_DeleteAllRow2 = function (e) {
  scwin.f_DeleteAllRow("Selling");
};
scwin.f_UndoRow2 = function (e) {
  scwin.f_UndoRow("Selling");
};
scwin.pu_Find_onclick = function (e) {
  scwin.f_openPgm("Find");
};
scwin.pu_MasterLink_onclick = function (e) {
  scwin.f_openPgm("Main");
};
scwin.pu_Dimens_onclick = function (e) {
  scwin.f_openPgm("DIM");
};
scwin.pu_Invoice_onclick = function (e) {
  scwin.f_openPgm("Inv");
};
scwin.btn_PaymentInv_onclick = function (e) {
  scwin.f_openPgm("PayInv");
};
scwin.pu_Plsheet_onclick = function (e) {
  scwin.f_openPgm("PL");
};
scwin.ed_blno_onkeyup = function (e) {
  this.setValue(e.target.value.replace("-", "").toUpperCase());
};
scwin.ed_innerPkg_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.tr_tab_onchange = function (tabId, index, userTabId) {
  scwin.f_selectTabMenu(index);
};
scwin.gridReadOnly = function (grd, edit) {
  let target;
  if (grd == gr_BuyingFreightInfo) {
    target = scwin.buyingGridReadOnly;
    gr_BuyingFreightInfo.setColumnReadOnly("choice", true);
    gr_BuyingFreightInfo.setColumnReadOnly("rsltsStdDt", true);
    gr_BuyingFreightInfo.setColumnReadOnly("vehclNo", true);
    gr_BuyingFreightInfo.setColumnReadOnly("sellDeptCd", true);
  } else if (grd == gr_SellingFreightInfo) {
    target = scwin.sellingGridReadOnly;
    gr_SellingFreightInfo.setColumnReadOnly("choice", true);
    gr_SellingFreightInfo.setColumnReadOnly("rsltsStdDt", true);
  }
  if (scwin.actionFlag == "Cancel") {
    for (let i = 0; i < target.length; i++) {
      grd.setColumnReadOnly(target[i], true);
    }
    return;
  }
  if (grd == gr_BuyingFreightInfo) {
    gr_BuyingFreightInfo.setColumnReadOnly("choice", false);
    gr_BuyingFreightInfo.setColumnReadOnly("rsltsStdDt", false);
    gr_BuyingFreightInfo.setColumnReadOnly("vehclNo", false);
    gr_BuyingFreightInfo.setColumnReadOnly("sellDeptCd", false);
  } else if (grd == gr_SellingFreightInfo) {
    gr_SellingFreightInfo.setColumnReadOnly("choice", false);
    gr_SellingFreightInfo.setColumnReadOnly("rsltsStdDt", false);
  }
  if (edit) {
    if (grd == gr_BuyingFreightInfo) {
      let flag = ds_BuyingFreightInfo.getCellData(ds_BuyingFreightInfo.getRowPosition() || 0, "pchsCertiNo") == "" ? true : false;
      for (let i = 0; i < target.length; i++) {
        if (target[i] == "pchsAmtFcrc") {
          flag = ds_BuyingFreightInfo.getCellData(ds_BuyingFreightInfo.getRowPosition() || 0, "crcCd") == "KRW" ? false : true;
        }
        grd.setColumnReadOnly(target[i], !flag);
      }
    } else if (grd == gr_SellingFreightInfo) {
      let flag = ds_SellingFreightInfo.getCellData(ds_SellingFreightInfo.getRowPosition() || 0, "certiNo") == "" ? true : false;
      for (let i = 0; i < target.length; i++) {
        if (target[i] == "sellAmtFcrc") {
          flag = ds_SellingFreightInfo.getCellData(ds_SellingFreightInfo.getRowPosition() || 0, "crcCd") == "KRW" ? false : true;
        }
        grd.setColumnReadOnly(target[i], !flag);
      }
    }
  } else {
    for (let i = 0; i < target.length; i++) {
      grd.setColumnReadOnly(target[i], !edit);
    }
  }
};
scwin.ds_SellingFreightInfo_onrowpositionchange = function (info) {
  ds_SellingFreightInfo.setRowPosition(info.newRowIndex);
  scwin.f_InvoiceCheck("Selling", info.newRowIndex);
};
scwin.ds_BuyingFreightInfo_onrowpositionchange = function (info) {
  ds_BuyingFreightInfo.setRowPosition(info.newRowIndex);
  scwin.f_InvoiceCheck("Buying", info.newRowIndex);
};
scwin.gr_BuyingFreightInfo_oneditkeyup = function (info) {
  // 개선요청
  if (info.colID == "fareEngCd" || info.colID == "crcCd") {
    event.target.value = info.newValue.toUpperCase();
  }
};
scwin.gr_SellingFreightInfo_oneditkeyup = function (info) {
  // 개선요청
  if (info.colID == "fareEngCd" || info.colID == "crcCd") {
    event.target.value = info.newValue.toUpperCase();
  }
};
scwin.deleteAll = function (ds) {
  for (let i = 0; i < ds.getRowCount(); i++) {
    ds.getRowStatus(i) == "C" ? ds.removeRow(i) : ds.deleteRow(i);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:' Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blno',placeholder:'',style:'width:200px;',validExp:'Master B/L No:no',ref:'','ev:onblur':'scwin.ed_blno_onblur',editFormat:'XXX-XXXXXXXXXXXXXXXXX','ev:onkeyup':'scwin.ed_blno_onkeyup',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mmhno',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',validExp:'Consol No:no',sortOption:'value',disableEdit:'true',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_master',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Currency',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cucd',search:'start',style:'',submenuSize:'auto',objType:'data',ref:'data:ds_MasterFreightInfo.cucd',emptyIndex:'-1',emptyItem:'true',displayMode:'value delim label',visibleRowNum:'25'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_exgb',search:'start',style:'width: 210px;',submenuSize:'auto',objType:'data',validExp:'Rate Type:no',allOption:'',chooseOption:'',ref:'data:ds_MasterFreightInfo.exgb',displayMode:'value delim label',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T Buying'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T Selling'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Ex-Rate Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_exdt',pickerType:'dynamic',style:'',objType:'data',mandatory:'true',validExp:'Ex Date:no',ref:'data:ds_MasterFreightInfo.exdt','ev:onblur':'scwin.ed_exdt_onblur',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_rate',placeholder:'',style:'width:150px;',objType:'data',validExp:'Ex-Rate:no',ref:'data:ds_MasterFreightInfo.rate',dataType:'float',displayFormat:'###,###,###,###,###.##','ev:onblur':'scwin.ed_rate_onblur',maxlength:'15.2'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'US Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_exrate',placeholder:'',style:'width:150px;',objType:'data',validExp:'US Ex-Rate:no',maxlength:'15.2',ref:'data:ds_MasterFreightInfo.exrate',dataType:'float',displayFormat:'###,###,###,###,###.##','ev:onblur':'scwin.ed_exrate_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Inner PKG',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_innerPkg',placeholder:'',style:'width:150px;',objType:'data',validExp:'Inner PKG:no',maxlength:'8',allowChar:'a-zA-Z0-9',ref:'data:ds_MasterFreightInfo.innerPkg',displayFormat:'########','ev:onkeyup':'scwin.ed_innerPkg_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tr_tab',style:'','ev:onchange':'scwin.tr_tab_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center0',label:'Buying',style:'',dataName:'House Buying'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'height:40px',id:'tr_tab_center1',label:'Selling'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'tr_tab_center1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Buying List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BuyingFreightInfo',id:'gr_BuyingFreightInfo',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_BuyingFreightInfo_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'20','ev:onafteredit':'scwin.gr_BuyingFreightInfo_onafteredit',columnMove:'true',dataName:'Master Buying',validFeatures:'ignoreStatus=no',validExp:'rsltsStdDt:Result Date:yes:maxlength=8&date=YYYYMMDD,pchsTyp:Buying Type:yes,pchsClntNo:Customer Info:yes,fareEngCd:Freight Info:yes,selpchItemCd:통합매출입코드:yes',readOnly:'true','ev:onbeforeedit':'scwin.gr_BuyingFreightInfo_onbeforeedit','ev:oneditkeyup':'scwin.gr_BuyingFreightInfo_oneditkeyup',keyMoveEditMode:'false',ignoreNonEditableCell:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'choiceHeader',inputType:'checkbox',width:'50',valueType:'boolean'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',value:'Type',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column13',inputType:'text',value:'Customer',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Cust Name',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',value:'F/Code',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'F/Name',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column5',inputType:'text',value:'Initial',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'통합매출입코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column53',inputType:'text',value:'CURR',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'PKG',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column66',value:'G/Weight',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'R/C',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'P/C',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column72',value:'C/Item',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'C/Weight',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'Unit',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column51',inputType:'text',value:'Ex-Rate',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column41',inputType:'text',value:'PRT AMT(W)',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column39',inputType:'text',value:'VAT',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column37',inputType:'text',value:'Amount',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column35',inputType:'text',value:'Result Date',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column33',inputType:'text',value:'inner Dept',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column31',inputType:'text',value:'Dept Name',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'Inovice No',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'Tariff No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column58',value:'Amount(W)',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column27',inputType:'text',value:'vatYn',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column21',inputType:'text',value:'Vehicle No',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column23',inputType:'text',value:'vehclYn',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'choice',inputType:'checkbox',width:'50',valueType:'other',trueValue:'T',falseValue:'F',defaultValue:'F',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currow',inputType:'text',width:'70',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTyp',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:'',readOnly:'false',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Agent'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Carrier'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'textImage',width:'100',readOnly:'false',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'textImage',width:'100',readOnly:'false',maxLength:'4',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',textAlign:'left',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'',textAlign:'center',width:'70',readOnly:'false',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',dataType:'number',textAlign:'right',maxLength:'38',displayFormat:'#,###',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'grossWt',value:'',displayMode:'label',maxLength:'14.3',dataType:'float',displayFormat:'##,###,###,###,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rateCls',value:'',displayMode:'label',maxLength:'1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'ppccCls',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PP'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'commItem',value:'',displayMode:'label',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chgWt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###,###,###,##0.###',maxLength:'13.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fareUnit',value:'',displayMode:'label',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsUpr',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###,###,###,##0.00',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRate',inputType:'text',textAlign:'right',width:'100',dataType:'float',displayFormat:'#,###,###,###,##0.00',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtnAmt',inputType:'text',textAlign:'right',width:'120',dataType:'float',displayFormat:'#,###,###,###,###.##',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',textAlign:'right',width:'70',displayFormat:'#,##0',dataType:'number',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmtFcrc',inputType:'text',textAlign:'right',width:'100',displayFormat:'#,###,###,###,##0.00',dataType:'float',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'120',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'false',maxLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellDeptCd',inputType:'textImage',width:'120',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellDeptNm',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsCertiNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'trfUpr',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatYn',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'false',maxLength:'12'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclYn',inputType:'text',width:'100',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_BpchsClntNm',placeholder:'',style:'width:150px;',ref:'data:ds_BuyingFreightInfo.pchsClntNm',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_BfareEngNm',placeholder:'',style:'width:150px;',ref:'data:ds_BuyingFreightInfo.fareEngNm',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_BsellDeptNm',placeholder:'',style:'width:150px;',ref:'data:ds_BuyingFreightInfo.sellDeptNm',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_utotal',placeholder:'',style:'width:150px;',allowChar:'0-9',objType:'data',dataType:'number',displayFormat:'###,###,###,###,###.##',validExp:'Freight Charge CC KRW:no',maxlength:'15.2',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_total',placeholder:'',style:'width:150px;',allowChar:'0-9',objType:'data',dataType:'number',displayFormat:'###,###,###,###,###.##',validExp:'Freight Charge CC KRW:no',maxlength:'15.2',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_totalVat',placeholder:'',style:'width:150px;',allowChar:'0-9',objType:'data',dataType:'number',displayFormat:'###,###,###,###,###.##',validExp:'Freight Charge CC KRW:no',maxlength:'15.2',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_Buying_totalVatSum',placeholder:'',style:'width:150px;',allowChar:'0-9',objType:'data',dataType:'number',displayFormat:'###,###,###,###,###.##',validExp:'Freight Charge CC KRW:no',maxlength:'15.2',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_rowMake_buying',placeholder:'',style:'width:50px;',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_AddRowMulti1',id:'btn_AddRowBuying',style:'',type:'button',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Addition'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_DeleteRow1',id:'btn_DeleteRowBuying',style:'',type:'button',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_DeleteAllRow1',id:'btn_DeleteAllRowBuying',style:'',type:'button',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_UndoRow1',id:'btn_UndoRowBuying',style:'',type:'button',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'tr_tab_center2'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Selling List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SellingFreightInfo','ev:onafteredit':'scwin.gr_SellingFreightInfo_onafteredit','ev:oneditkeyup':'scwin.gr_SellingFreightInfo_oneditkeyup','ev:ontextimageclick':'scwin.gr_SellingFreightInfo_ontextimageclick',id:'gr_SellingFreightInfo',rowStatusVisible:'true',rowStatusWidth:'20',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true',dataName:'Master Selling',validFeatures:'ignoreStatus=no',validExp:'rsltsStdDt:Result Date:yes:maxlength=8&date=YYYYMMDD,bilgClntNo:Customer Info:yes,fareEngCd:Freight Info:yes,sellItemCd:통합매출입코드:yes',readOnly:'true','ev:onbeforeedit':'scwin.gr_SellingFreightInfo_onbeforeedit',keyMoveEditMode:'false',ignoreNonEditableCell:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'choiceHeader',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',value:'Customer',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Cust Name',width:'130'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',value:'F/Code',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column9',inputType:'text',value:'F/Name',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column3',inputType:'text',value:'Initial',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column5',inputType:'text',value:'통합매출입코드',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column19',inputType:'text',value:'CURR',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column57',inputType:'text',value:'PKG',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column55',inputType:'text',value:'G/Weight',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column53',inputType:'text',value:'R/C',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column51',inputType:'text',value:'C/Item',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column49',inputType:'text',value:'C/Weight',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',hidden:'true',id:'column61',inputType:'text',value:'Unit',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column59',inputType:'text',value:'Rate',width:'110'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column37',inputType:'text',value:'Ex-Rate',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column25',inputType:'text',value:'Amount(W)',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column47',inputType:'text',value:'VAT',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column45',inputType:'text',value:'Amount',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column43',inputType:'text',value:'Result Date',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',value:'Inovice No',width:'100'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column62',value:'Tariff Rate',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column41',inputType:'text',value:'vatYn',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',falseValue:'F',fixColumnWidth:'true',id:'choice',inputType:'checkbox',trueValue:'T',valueType:'other',width:'50',defaultValue:'F',readOnly:'false'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.gridFormat',displayMode:'label',id:'currow',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'textImage',width:'100',readOnly:'false',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',textAlign:'left',width:'130'}},{T:1,N:'w2:column',A:{allowChar:'a-zA-Z0-9',displayMode:'label',id:'fareEngCd',inputType:'textImage',width:'100',readOnly:'false',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',textAlign:'left',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'fareGrpCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'sellItemCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'',textAlign:'left',width:'70',readOnly:'false',maxLength:'3',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',excelCellType:'number',id:'qty',inputType:'text',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{dataType:'float',displayFormat:'##,###,###,###,##0.000',displayMode:'label',id:'grossWt',inputType:'text',textAlign:'right',width:'100',maxLength:'14.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rateCls',inputType:'text',width:'70',maxLength:'1'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'commItem',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{dataType:'float',displayFormat:'#,###,###,###,##0.###',displayMode:'label',id:'chgWt',inputType:'text',textAlign:'right',width:'100',maxLength:'13.3'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'fareUnit',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{dataType:'float',displayFormat:'#,###,###,###,##0.00',displayMode:'label',id:'sellUpr',inputType:'text',textAlign:'right',width:'110',maxLength:'13.2'}},{T:1,N:'w2:column',A:{dataType:'float',displayFormat:'#,###,###,###,##0.00',displayMode:'label',id:'exRate',inputType:'text',textAlign:'right',width:'100',maxLength:'13.2'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'sellAmt',inputType:'text',textAlign:'right',width:'100',maxLength:'13'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'vatAmt',inputType:'text',textAlign:'right',width:'70',maxLength:'13'}},{T:1,N:'w2:column',A:{dataType:'float',displayFormat:'#,###,###,###,##0.00',displayMode:'label',id:'sellAmtFcrc',inputType:'text',textAlign:'right',width:'100',maxLength:'13.2'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy/MM/dd',displayMode:'label',id:'rsltsStdDt',inputType:'calendar',maxLength:'8',width:'120',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'trfUpr',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'vatYn',inputType:'text',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_SbilgClntNm',objType:'data',placeholder:'',ref:'data:ds_SellingFreightInfo.bilgClntNm',style:'width:150px;',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_SfareEngNm',objType:'data',placeholder:'',ref:'data:ds_SellingFreightInfo.fareEngNm',style:'width:150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:input',A:{allowChar:'0-9',class:'tar',dataType:'number',displayFormat:'###,###,###,###,###.##',id:'ed_Selling_utotal',objType:'data',placeholder:'',style:'width:150px;',validExp:'Freight Charge CC:no',maxlength:'15.2',readOnly:'true'}},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'tar',dataType:'number',displayFormat:'###,###,###,###,###.##',id:'ed_Selling_total',objType:'data',placeholder:'',style:'width:150px;',maxlength:'15.2',validExp:'Freight Charge CC KRW:no',readOnly:'true'}},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'tar',dataType:'number',displayFormat:'###,###,###,###,###.##',id:'ed_Selling_totalVat',objType:'data',placeholder:'',style:'width:150px;',validExp:'Freight Charge CC KRW:no',maxlength:'15.2',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_rowMake_selling',objType:'data',placeholder:'',style:'width:50px;'}},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_AddRowMulti2',id:'btn_AddRowSelling',style:'',type:'button',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Addition'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_DeleteRow2',id:'btn_DeleteRowSelling',style:'',type:'button',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_DeleteAllRow2',id:'btn_DeleteAllRowSelling',style:'',type:'button',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_UndoRow2',id:'btn_UndoRowSelling',style:'',type:'button',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'pu_Tariff',type:'button',class:'btn link','ev:onclick':'scwin.f_Tariff'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tariff'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_CustomerChange',type:'button',class:'btn link','ev:onclick':'scwin.f_CustomerChange',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer Change'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_exRateChange',type:'button',class:'btn link',userAuth:'U','ev:onclick':'scwin.f_exRateChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate Change'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_ResultdateChange',type:'button',class:'btn link',userAuth:'U','ev:onclick':'scwin.f_ResultdateChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Result Date Change'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' Prepaid / Collect Summary',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:240px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_pfchg',style:'width:150px;',objType:'data',validExp:'Weight Charge PP:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.pfchg',maxlength:'15.2',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight Charge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_cfchg',style:'width:150px;',objType:'data',validExp:'Weight Charge CC:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.cfchg',maxlength:'15.2',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pvchg',style:'width:150px;',objType:'data',validExp:'Valuation Charge PP:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.pvchg',maxlength:'15.2',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Valuation Charge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_cvchg',style:'width:150px;',objType:'data',validExp:'Valuation Charge CC:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.cvchg',maxlength:'15.2',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pachg',style:'width:150px;',objType:'data',validExp:'Total Due Agent PP:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.pachg',maxlength:'15.2',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Total Due Agent',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_cachg',style:'width:150px;',objType:'data',validExp:'Total Due Agent CC:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.cachg',maxlength:'15.2',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pcchg',style:'width:150px;',objType:'data',validExp:'Total Due Carrier PP:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.pcchg',maxlength:'15.2',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Total Due Carrier',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_ccchg',style:'width:150px;',objType:'data',validExp:'Total Due Carrier CC:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.ccchg',maxlength:'15.2',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ptchg',style:'width:150px;',objType:'data',validExp:'Total Charge PP:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.ptchg',maxlength:'15.2',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Total Charge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_ctchg',style:'width:150px;',objType:'data',validExp:'Total Charge CC:no',allowChar:'0-9',dataType:'number',displayFormat:'###,###,###,###,###.##',ref:'data:ds_MasterFreightInfo.ctchg',maxlength:'15.2',readOnly:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Carrier Nego Accounting',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Commission Inv No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'',dataType:'number',displayFormat:'###############',editFormat:'',id:'ed_payno',placeholder:'',style:'width:150px;',objType:'data',validExp:'Payment No:no',maxlength:'15',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'###,###','ev:onblur':'scwin.ed_lrate_onblur',id:'ed_lrate',initValue:'',maxlength:'6',placeholder:'',style:'width:150px;',ref:'data:ds_MasterFreightInfo.lrate',objType:'data',validExp:'Carrier Rate:no'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FRT/Charge',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'###,###,###,###,###',id:'ed_lcharge',initValue:'',maxlength:'15',placeholder:'',style:'width:150px;',ref:'data:ds_MasterFreightInfo.lcharge',objType:'data',validExp:'FRT/Charge:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'IATA Commission',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',dataType:'float',displayFormat:'#,###.#','ev:onblur':'scwin.ed_comm_onblur',id:'ed_comm',initValue:'',minByteLength:'',placeholder:'',style:'width:80px;',maxlength:'4.1',ref:'data:ds_MasterFreightInfo.comm',objType:'data',validExp:'IATA Commission:no'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'%',style:''}},{T:1,N:'xf:input',A:{class:'tar',dataType:'float',displayFormat:'###,###,###,###,###.##',id:'ed_cchg',initValue:'',maxlength:'15.2',placeholder:'',style:'width:150px;',ref:'data:ds_MasterFreightInfo.cchg',objType:'data',validExp:'IATA Commission Amount:no'}},{T:1,N:'xf:input',A:{class:'tar',dataType:'float',displayFormat:'###,###,###,###,###.##',id:'ed_cvat',initValue:'',maxlength:'15.2',placeholder:'',style:'width:100px;',ref:'data:ds_MasterFreightInfo.cvat',objType:'data',validExp:'IATA Commission Vat:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discount',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'tar',dataType:'float',displayFormat:'#,###.#',id:'ed_disc',initValue:'',maxlength:'4.1',placeholder:'',style:'width:80px;',ref:'data:ds_MasterFreightInfo.disc',objType:'data',validExp:'Discount:no','ev:onblur':'scwin.ed_disc_onblur'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'%',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Nego Rate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'float',displayFormat:'###,###,###,###,###.##',id:'ed_nert',initValue:'',maxlength:'15.2',placeholder:'',style:'width:150px;',ref:'data:ds_MasterFreightInfo.nert',objType:'data',validExp:'Nego Rate:no','ev:onviewchange':'scwin.ed_nert_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discount Amount',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'float',displayFormat:'###,###,###,###,###.##',id:'ed_dchg',initValue:'',maxlength:'15.2',placeholder:'',style:'width:150px;',ref:'data:ds_MasterFreightInfo.dchg',objType:'data',validExp:'Discount Amount:no','ev:onblur':'scwin.ed_dchg_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Pay Amount',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'float',displayFormat:'###,###,###,###,###.##',id:'ed_linenet',initValue:'',maxlength:'15.2',placeholder:'',style:'width:150px;',ref:'data:ds_MasterFreightInfo.linenet',objType:'data',validExp:'Pay Amount:no','ev:onblur':'scwin.ed_linenet_onblur'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Find',style:'',type:'button','ev:onclick':'scwin.pu_Find_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_MasterLink',style:'',type:'button','ev:onclick':'scwin.pu_MasterLink_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M B/L'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Dimens',style:'display: none;',type:'button','ev:onclick':'scwin.pu_Dimens_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DIMEN\'S'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Invoice',style:'',type:'button','ev:onclick':'scwin.pu_Invoice_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Invoice'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_PayInvoice',style:'',type:'button','ev:onclick':'scwin.btn_PaymentInv_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment Invoice'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Plsheet',style:'',type:'button','ev:onclick':'scwin.pu_Plsheet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B.Sheet'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.f_Create',userAuth:'C',objType:'bCreate',disabled:'false'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'hideGroup'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'hd_odrNo',ref:'data:ds_MasterFreightInfo.odrNo'}},{T:1,N:'xf:input',A:{id:'hd_hodrNo',style:'width:144px; height:21px; ',ref:'data:ds_MasterFreightInfo.hodrNo'}},{T:1,N:'xf:input',A:{id:'hd_cjdt',style:'width:144px; height:21px; ',ref:'data:ds_MasterFreightInfo.cjdt'}},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'udc_buyingCustomerCd',nameId:'udc_buyingCustomerNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',id:'udc_buyingCustomer'}},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'udc_buyingFreightCd',nameId:'udc_buyingFreightNm',popupID:'',selectID:'retriveFreightCodeInfo',style:'',validTitle:'',id:'udc_buyingFreight'}},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'udc_buyingInnerDeptCd',nameId:'udc_buyingInnerDeptNm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'',id:'udc_buyingInnerDept'}},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'udc_sellingCustomerCd',nameId:'udc_sellingCustomerNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',id:'udc_sellingCustomer'}},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'udc_sellingFreightCd',nameId:'udc_sellingFreightNm',popupID:'',selectID:'retriveFreightCodeInfo',style:'',validTitle:'',id:'udc_sellingFreight'}}]}]}]}]}]})