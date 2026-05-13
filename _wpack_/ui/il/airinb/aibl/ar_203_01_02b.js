/*amd /ui/il/airinb/aibl/ar_203_01_02b.xml 261320 d74cb5039666a0dd347ec93d42e12b4ecd64ddd35388287d6922651ab193620c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_SearchInfo',name:'FreightSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'text',name:'kcomcd'}},{T:1,N:'w2:key',A:{id:'blno',dataType:'text',name:'blno'}},{T:1,N:'w2:key',A:{id:'mhno',dataType:'text',name:'mhno'}},{T:1,N:'w2:key',A:{id:'odrNo',dataType:'text',name:'odrNo'}},{T:1,N:'w2:key',A:{id:'iogb',dataType:'text',name:'iogb'}},{T:1,N:'w2:key',A:{id:'mblHblCls',dataType:'text',name:'mblHblCls'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_comCode',name:'comCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',dataType:'text',name:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',dataType:'text',name:'queryId'}},{T:1,N:'w2:key',A:{id:'param1',dataType:'text',name:'param1'}},{T:1,N:'w2:key',A:{id:'param2',dataType:'text',name:'param2'}},{T:1,N:'w2:key',A:{id:'param3',dataType:'text',name:'param3'}},{T:1,N:'w2:key',A:{id:'param4',dataType:'text',name:'param4'}},{T:1,N:'w2:key',A:{id:'param5',dataType:'text',name:'param5'}},{T:1,N:'w2:key',A:{id:'param6',dataType:'text',name:'param6'}},{T:1,N:'w2:key',A:{id:'param7',dataType:'text',name:'param7'}},{T:1,N:'w2:key',A:{id:'param8',dataType:'text',name:'param8'}},{T:1,N:'w2:key',A:{id:'param9',dataType:'text',name:'param9'}},{T:1,N:'w2:key',A:{id:'param10',dataType:'text',name:'param10'}},{T:1,N:'w2:key',A:{id:'param11',dataType:'text',name:'param11'}},{T:1,N:'w2:key',A:{id:'param12',dataType:'text',name:'param12'}},{T:1,N:'w2:key',A:{id:'param13',dataType:'text',name:'param13'}},{T:1,N:'w2:key',A:{id:'param14',dataType:'text',name:'param14'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_HouseFreightInfo',name:'HouseFreightInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'House B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'mblno',dataType:'string',name:'Master B/L No'}},{T:1,N:'w2:column',A:{id:'iogb',dataType:'string',name:'수출(O)/수입(I) 구분'}},{T:1,N:'w2:column',A:{id:'cucd',dataType:'string',name:'화폐단위'}},{T:1,N:'w2:column',A:{id:'exdt',dataType:'string',name:'환율일자'}},{T:1,N:'w2:column',A:{id:'rate',dataType:'string',name:'환율'}},{T:1,N:'w2:column',A:{id:'exrate',dataType:'string',name:'USD 환율'}},{T:1,N:'w2:column',A:{id:'exgb',dataType:'string',name:'적용환율'}},{T:1,N:'w2:column',A:{id:'pfchg',dataType:'string',name:'(PP) Freight Charge'}},{T:1,N:'w2:column',A:{id:'cfchg',dataType:'string',name:'(CC) Freight Charge'}},{T:1,N:'w2:column',A:{id:'cfuchg',dataType:'string',name:'(CC) Freight Foreign Currency Charge'}},{T:1,N:'w2:column',A:{id:'pvchg',dataType:'string',name:'(PP) Valuation Charge'}},{T:1,N:'w2:column',A:{id:'cvchg',dataType:'string',name:'(CC) Valuation Charge'}},{T:1,N:'w2:column',A:{id:'cvuchg',dataType:'string',name:'(CC) Valuation Foreign Currency Charge'}},{T:1,N:'w2:column',A:{id:'pachg',dataType:'string',name:'(PP) Agent Charge'}},{T:1,N:'w2:column',A:{id:'cachg',dataType:'string',name:'(CC) Agent Charge'}},{T:1,N:'w2:column',A:{id:'cauchg',dataType:'string',name:'(CC) Agent Foreign Currency Charge'}},{T:1,N:'w2:column',A:{id:'pcchg',dataType:'string',name:'(PP) Carrier Charge'}},{T:1,N:'w2:column',A:{id:'ccchg',dataType:'string',name:'(CC) Carrier Charge'}},{T:1,N:'w2:column',A:{id:'ccuchg',dataType:'string',name:'(CC) Carrier Foreign Currency Charge'}},{T:1,N:'w2:column',A:{id:'ptchg',dataType:'string',name:'(PP) Total Charge'}},{T:1,N:'w2:column',A:{id:'ctchg',dataType:'string',name:'(CC) Total Charge'}},{T:1,N:'w2:column',A:{id:'ctuchg',dataType:'string',name:'(CC) Total Foreign Currency Charge'}},{T:1,N:'w2:column',A:{id:'innerPkg',dataType:'string',name:'Inner Package'}},{T:1,N:'w2:column',A:{id:'tcwht',dataType:'string',name:'Chargeable Weight'}},{T:1,N:'w2:column',A:{id:'mftpkg',dataType:'string',name:'수량'}},{T:1,N:'w2:column',A:{id:'mftwht',dataType:'string',name:'Gross Weight'}},{T:1,N:'w2:column',A:{id:'cjdt',dataType:'string',name:'실적일자'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:column',A:{id:'ondt',dataType:'string',name:'ONBOARD'}},{T:1,N:'w2:column',A:{id:'dpcd',dataType:'string',name:'출발지'}},{T:1,N:'w2:column',A:{id:'dstn',dataType:'string',name:'도착지'}},{T:1,N:'w2:column',A:{id:'lrgb',dataType:'string',name:'Co-Load 여부'}},{T:1,N:'w2:column',A:{id:'carrier',dataType:'string',name:'항공사 거래처 코드'}},{T:1,N:'w2:column',A:{id:'status',dataType:'string',name:'status'}},{T:1,N:'w2:column',A:{id:'avdt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asnm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pnnm',name:'name42',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_SellingFreightInfo',name:'SellingFreightInfo','ev:oncelldatachange':'scwin.ds_SellingFreightInfo_oncelldatachange','ev:oninsertrow':'scwin.ds_SellingFreightInfo_oninsertrow','ev:onremoverow':'scwin.ds_SellingFreightInfo_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',dataType:'string',name:'chk'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'오더번호'}},{T:1,N:'w2:column',A:{id:'sellSeq',dataType:'string',name:'매출순번'}},{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string',name:'해운/항공 구분'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',dataType:'string',name:'청구처코드'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',dataType:'string',name:'청구처명'}},{T:1,N:'w2:column',A:{id:'blNo',dataType:'string',name:'B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'sellItemCd',dataType:'string',name:'매출입항목코드'}},{T:1,N:'w2:column',A:{id:'fareEngCd',dataType:'string',name:'영문운임코드'}},{T:1,N:'w2:column',A:{id:'fareEngNm',dataType:'string',name:'영문운임명'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',dataType:'string',name:'운임그룹코드'}},{T:1,N:'w2:column',A:{id:'fareUnit',dataType:'string',name:'운임 Unit'}},{T:1,N:'w2:column',A:{id:'locPtnCls',dataType:'string',name:'국내해외매출구분'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string',name:'Master/House 구분'}},{T:1,N:'w2:column',A:{id:'drcrCls',dataType:'string',name:'매출/매입 구분'}},{T:1,N:'w2:column',A:{id:'ppccCls',dataType:'string',name:'Prepaid/Collect'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'string',name:'통화코드'}},{T:1,N:'w2:column',A:{id:'qty',dataType:'string',name:'수량'}},{T:1,N:'w2:column',A:{id:'grossWt',dataType:'string',name:'Gross Weight'}},{T:1,N:'w2:column',A:{id:'chgWt',dataType:'string',name:'Chargeable Weight'}},{T:1,N:'w2:column',A:{id:'trfUpr',dataType:'string',name:'Tariff 단가'}},{T:1,N:'w2:column',A:{id:'sellUpr',dataType:'string',name:'단가'}},{T:1,N:'w2:column',A:{id:'usdAmt',dataType:'string',name:'USD 금액'}},{T:1,N:'w2:column',A:{id:'exRate',dataType:'string',name:'환율'}},{T:1,N:'w2:column',A:{id:'exRateTyp',dataType:'string',name:'적용환율'}},{T:1,N:'w2:column',A:{id:'rateCls',dataType:'string',name:'Rate Class'}},{T:1,N:'w2:column',A:{id:'commItem',dataType:'string',name:'Commodity Item'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',dataType:'string',name:'거래명세서 그룹번호'}},{T:1,N:'w2:column',A:{id:'prtnUpr',dataType:'string',name:'출력용 단가'}},{T:1,N:'w2:column',A:{id:'prtnAmt',dataType:'string',name:'출력용 금액'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',dataType:'string',name:'실적일자'}},{T:1,N:'w2:column',A:{id:'sellAmt',dataType:'string',name:'매출금액'}},{T:1,N:'w2:column',A:{id:'vatAmt',dataType:'string',name:'부가세 금액'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',dataType:'string',name:'매출금액 외화'}},{T:1,N:'w2:column',A:{id:'certiNo',dataType:'string',name:'거래명세서번호'}},{T:1,N:'w2:column',A:{id:'vatYn',dataType:'string',name:'VAT 유무'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_PartnerFreightInfo',name:'PartnerFreightInfo','ev:oncelldatachange':'scwin.ds_PartnerFreightInfo_oncelldatachange','ev:oninsertrow':'scwin.ds_PartnerFreightInfo_oninsertrow','ev:onremoverow':'scwin.ds_PartnerFreightInfo_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',dataType:'string',name:'chk'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'오더번호'}},{T:1,N:'w2:column',A:{id:'sellSeq',dataType:'string',name:'매출순번'}},{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string',name:'해운/항공 구분'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',dataType:'string',name:'청구처코드'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',dataType:'string',name:'청구처명'}},{T:1,N:'w2:column',A:{id:'blNo',dataType:'string',name:'B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'sellItemCd',dataType:'string',name:'매출입항목코드'}},{T:1,N:'w2:column',A:{id:'fareEngCd',dataType:'string',name:'영문운임코드'}},{T:1,N:'w2:column',A:{id:'fareEngNm',dataType:'string',name:'영문운임명'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',dataType:'string',name:'운임그룹코드'}},{T:1,N:'w2:column',A:{id:'fareUnit',dataType:'string',name:'운임 Unit'}},{T:1,N:'w2:column',A:{id:'locPtnCls',dataType:'string',name:'국내해외매출구분'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string',name:'Master/House 구분'}},{T:1,N:'w2:column',A:{id:'drcrCls',dataType:'string',name:'매출/매입 구분'}},{T:1,N:'w2:column',A:{id:'ppccCls',dataType:'string',name:'Prepaid/Collect'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'string',name:'통화코드'}},{T:1,N:'w2:column',A:{id:'qty',dataType:'string',name:'수량'}},{T:1,N:'w2:column',A:{id:'grossWt',dataType:'string',name:'Gross Weight'}},{T:1,N:'w2:column',A:{id:'chgWt',dataType:'string',name:'Chargeable Weight'}},{T:1,N:'w2:column',A:{id:'trfUpr',dataType:'string',name:'Tariff 단가'}},{T:1,N:'w2:column',A:{id:'sellUpr',dataType:'string',name:'단가'}},{T:1,N:'w2:column',A:{id:'usdAmt',dataType:'string',name:'USD 금액'}},{T:1,N:'w2:column',A:{id:'exRate',dataType:'string',name:'환율'}},{T:1,N:'w2:column',A:{id:'exRateTyp',dataType:'string',name:'적용환율'}},{T:1,N:'w2:column',A:{id:'rateCls',dataType:'string',name:'Rate Class'}},{T:1,N:'w2:column',A:{id:'commItem',dataType:'string',name:'Commodity Item'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',dataType:'string',name:'거래명세서 그룹번호'}},{T:1,N:'w2:column',A:{id:'prtnUpr',dataType:'string',name:'출력용 단가'}},{T:1,N:'w2:column',A:{id:'prtnAmt',dataType:'string',name:'출력용 금액'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',dataType:'string',name:'실적일자'}},{T:1,N:'w2:column',A:{id:'sellAmt',dataType:'string',name:'매출금액'}},{T:1,N:'w2:column',A:{id:'vatAmt',dataType:'string',name:'부가세 금액'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',dataType:'string',name:'매출금액 외화'}},{T:1,N:'w2:column',A:{id:'certiNo',dataType:'string',name:'거래명세서번호'}},{T:1,N:'w2:column',A:{id:'rmk',dataType:'string',name:'적요'}},{T:1,N:'w2:column',A:{id:'vatYn',dataType:'string',name:'VAT 유무'}},{T:1,N:'w2:column',A:{id:'vehclNo',dataType:'string',name:'차량번호'}},{T:1,N:'w2:column',A:{id:'vehclYn',dataType:'string',name:'vehclYn'}},{T:1,N:'w2:column',A:{id:'regName',dataType:'string',name:'등록 담당자 이름'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_BuyingFreightInfo',name:'BuyingFreightInfo','ev:oncelldatachange':'scwin.ds_BuyingFreightInfo_oncelldatachange','ev:oninsertrow':'scwin.ds_BuyingFreightInfo_oninsertrow','ev:onremoverow':'scwin.ds_BuyingFreightInfo_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',dataType:'string',name:'chk'}},{T:1,N:'w2:column',A:{id:'odrNo',dataType:'string',name:'Order No'}},{T:1,N:'w2:column',A:{id:'pchsSeq',dataType:'string',name:'매입순번'}},{T:1,N:'w2:column',A:{id:'kcomcd',dataType:'string',name:'법인코드'}},{T:1,N:'w2:column',A:{id:'seaAirCls',dataType:'string',name:'해운/항공 구분'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',dataType:'string',name:'매입거래처 코드'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',dataType:'string',name:'매입거래처명'}},{T:1,N:'w2:column',A:{id:'blNo',dataType:'string',name:'B/L No'}},{T:1,N:'w2:column',A:{id:'mhno',dataType:'string',name:'Consol No'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',dataType:'string',name:'매출입항목코드'}},{T:1,N:'w2:column',A:{id:'fareEngCd',dataType:'string',name:'영문운임코드'}},{T:1,N:'w2:column',A:{id:'fareEngNm',dataType:'string',name:'영문운임명'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',dataType:'string',name:'운임그룹코드'}},{T:1,N:'w2:column',A:{id:'fareUnit',dataType:'string',name:'운임 Unit'}},{T:1,N:'w2:column',A:{id:'locPtnCls',dataType:'string',name:'국내해외매출구분'}},{T:1,N:'w2:column',A:{id:'mblHblCls',dataType:'string',name:'Master/House 구분'}},{T:1,N:'w2:column',A:{id:'drcrCls',dataType:'string',name:'매출/매입 구분'}},{T:1,N:'w2:column',A:{id:'ppccCls',dataType:'string',name:'Prepaid/Collect 구분'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'string',name:'통화코드'}},{T:1,N:'w2:column',A:{id:'qty',dataType:'string',name:'수량'}},{T:1,N:'w2:column',A:{id:'grossWt',dataType:'string',name:'Gross Weight'}},{T:1,N:'w2:column',A:{id:'chgWt',dataType:'string',name:'Chargeable Weight'}},{T:1,N:'w2:column',A:{id:'trfUpr',dataType:'string',name:'Tariff 단가'}},{T:1,N:'w2:column',A:{id:'pchsUpr',dataType:'string',name:'단가'}},{T:1,N:'w2:column',A:{id:'usdAmt',dataType:'string',name:'USD 금액'}},{T:1,N:'w2:column',A:{id:'exRate',dataType:'string',name:'환율'}},{T:1,N:'w2:column',A:{id:'exRateTyp',dataType:'string',name:'적용환율 Type'}},{T:1,N:'w2:column',A:{id:'rateCls',dataType:'string',name:'Rate Class'}},{T:1,N:'w2:column',A:{id:'commItem',dataType:'string',name:'Commditi Item'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',dataType:'string',name:'거래명세서 그룹번호'}},{T:1,N:'w2:column',A:{id:'prtnUpr',dataType:'string',name:'출력용 단가'}},{T:1,N:'w2:column',A:{id:'prtnAmt',dataType:'string',name:'출력용 금액'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',dataType:'string',name:'매출부서코드'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',dataType:'string',name:'매출부서명'}},{T:1,N:'w2:column',A:{id:'pchsTyp',dataType:'string',name:'운임 Type'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',dataType:'string',name:'실적 일자'}},{T:1,N:'w2:column',A:{id:'pchsAmt',dataType:'string',name:'매입금액'}},{T:1,N:'w2:column',A:{id:'vat',dataType:'string',name:'부가세'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',dataType:'string',name:'매입금액 외화'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',dataType:'string',name:'매입거래명세서 번호'}},{T:1,N:'w2:column',A:{id:'vatYn',dataType:'string',name:'VAT 유무'}},{T:1,N:'w2:column',A:{id:'vehclNo',dataType:'string',name:'차량번호'}},{T:1,N:'w2:column',A:{id:'vehclYn',dataType:'string',name:'vehclYn'}},{T:1,N:'w2:column',A:{id:'regName',dataType:'string',name:'등록 담당자 이름'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_frtMapping',name:'BuyingFrtMapping'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fromCd',dataType:'string',name:'fromCd'}},{T:1,N:'w2:column',A:{id:'toCd',dataType:'string',name:'toCd'}},{T:1,N:'w2:column',A:{id:'description',dataType:'string',name:'description'}},{T:1,N:'w2:column',A:{id:'dtlCd1',dataType:'string',name:'dtlCd1'}},{T:1,N:'w2:column',A:{id:'dtlCd2',dataType:'string',name:'dtlCd2'}},{T:1,N:'w2:column',A:{id:'dtlCd3',dataType:'string',name:'dtlCd3'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_frt_condition',name:'BuyingFrtCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromCd',dataType:'text',name:'fromCd'}},{T:1,N:'w2:key',A:{id:'hhliner',dataType:'text',name:'hhliner'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_profit',name:'profit'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellAmt',dataType:'string',name:'sellAmt'}},{T:1,N:'w2:column',A:{id:'pchsAmt',dataType:'string',name:'pchsAmt'}},{T:1,N:'w2:column',A:{id:'profit',dataType:'string',name:'profit'}},{T:1,N:'w2:column',A:{id:'profitRate',dataType:'string',name:'profitRate'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_InvoiceCheckParam',name:'InvoiceCheckParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',dataType:'text',name:'kcomcd'}},{T:1,N:'w2:key',A:{id:'blNo',dataType:'text',name:'blNo'}},{T:1,N:'w2:key',A:{id:'mhno',dataType:'text',name:'mhno'}},{T:1,N:'w2:key',A:{id:'odrNo',dataType:'text',name:'odrNo'}},{T:1,N:'w2:key',A:{id:'seaAirCls',dataType:'text',name:'seaAirCls'}},{T:1,N:'w2:key',A:{id:'mblHblCls',dataType:'text',name:'mblHblCls'}},{T:1,N:'w2:key',A:{id:'gbun',dataType:'text',name:'gbun'}},{T:1,N:'w2:key',A:{id:'spRtn',dataType:'text',name:'spRtn'}},{T:1,N:'w2:key',A:{id:'spMsg',dataType:'text',name:'spMsg'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_tmpCnd',name:'tmpCnd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'blno',dataType:'text',name:'blno'}},{T:1,N:'w2:key',A:{id:'rtrvTypCd',dataType:'text',name:'rtrvTypCd'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_hmhno',name:'hmhnoParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',dataType:'text',name:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',dataType:'text',name:'queryId'}},{T:1,N:'w2:key',A:{id:'param1',dataType:'text',name:'param1'}},{T:1,N:'w2:key',A:{id:'param2',dataType:'text',name:'param2'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_exRate',name:'exRateParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',dataType:'text',name:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',dataType:'text',name:'queryId'}},{T:1,N:'w2:key',A:{id:'param1',dataType:'text',name:'param1'}},{T:1,N:'w2:key',A:{id:'param2',dataType:'text',name:'param2'}},{T:1,N:'w2:key',A:{id:'param3',dataType:'text',name:'param3'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_InvoiceCheck',name:'InvoiceCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'spMsg',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_hmhno',name:'hmhno','ev:ondataload':'scwin.ds_hmhno_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',dataType:'string',name:'code'}},{T:1,N:'w2:column',A:{id:'name',dataType:'string',name:'name'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_ExRate',name:'ExRate'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_AirFreightTariff',name:'AirFreightTariff'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_AirOtherTariff',name:'AirOtherTariff'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_AirTruckingTariff',name:'AirTruckingTariff'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_AirCustBookingCargoPickupList',name:'AirCustBookingCargoPickupList'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_FcodeInfo',name:'FcodeInfo'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_AirportInfo',name:'AirportInfo'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_CcfeePer',name:'CcfeePer'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_SellingCode',name:'SellingCode'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{id:'ds_tmpCnd',name:'SellingCode'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rtrvTypCd',dataType:'string',name:'rtrvTypCd'}},{T:1,N:'w2:column',A:{id:'blno',dataType:'string',name:'rtrvTypCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_comCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/il.airinb.aibl.RetrieveAirImpHouseFreightCMD.do',method:'post',mode:'asynchronous',ref:'data:json,[{"id":"dma_SearchInfo","key":"IN_DS1"},{"id":"ds_HouseFreightInfo","key":"OUT_DS1"},{"id":"ds_SellingFreightInfo","key":"OUT_DS2"},{"id":"ds_PartnerFreightInfo","key":"OUT_DS3"},{"id":"ds_BuyingFreightInfo","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_HouseFreightInfo","key":"OUT_DS1"},{"id":"ds_SellingFreightInfo","key":"OUT_DS2"},{"id":"ds_PartnerFreightInfo","key":"OUT_DS3"},{"id":"ds_BuyingFreightInfo","key":"OUT_DS4"}]','ev:submiterror':'scwin.sbm_default_submiterror',mediatype:'application/json'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveProfit',action:'/il.airinb.aibl.RetrieveAirHouseFreightProfitCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',ref:'data:json,[{"id":"dma_SearchInfo","key":"IN_DS1"},{"id":"ds_profit","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_profit","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.airinb.aibl.SaveAirImpHouseFreightCMD.do',method:'post',mode:'asynchronous',mediatype:'application/json',ref:'data:json,[{"id":"ds_HouseFreightInfo","key":"IN_DS1"},{"id":"ds_SellingFreightInfo","key":"IN_DS2"},{"id":"ds_PartnerFreightInfo","key":"IN_DS3"},{"id":"ds_BuyingFreightInfo","key":"IN_DS4"}]','ev:submiterror':'scwin.sbm_Save_submiterror','ev:submitdone':'scwin.sbm_Save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_InvoiceCheck',action:'/il.comm.util.CoInvoiceCheckCMD.do',method:'post',mode:'asynchronous',mediatype:'application/json',ref:'data:json,[{"id":"dma_InvoiceCheckParam","key":"IN_DS1"},{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_InvoiceCheck","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_hmhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_hmhno',target:'data:json,{"id":"ds_hmhno","key":"GAUCE"}',encoding:'UTF-8','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_exRate',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_exRate',target:'data:json,{"id":"ds_ExRate","key":"GAUCE"}',encoding:'UTF-8','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveTmp_Selling',action:'/il.airinb.aibl.RetrieveAirPreHouseBLFreightCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',ref:'data:json,[{"id":"dma_tmpCnd","key":"IN_DS1"},{"id":"ds_SellingFreightInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_SellingFreightInfo","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveTmp_Partner',action:'/il.airinb.aibl.RetrieveAirPreHouseBLFreightCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',ref:'data:json,[{"id":"dma_tmpCnd","key":"IN_DS1"},{"id":"ds_PartnerFreightInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_PartnerFreightInfo","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveTmp_Buying',action:'/il.airinb.aibl.RetrieveAirPreHouseBLFreightCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',ref:'data:json,[{"id":"dma_tmpCnd","key":"IN_DS1"},{"id":"ds_BuyingFreightInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_BuyingFreightInfo","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_frtMapping',action:'/il.seaout.sobl.RetrieveAPIFreightMappingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',ref:'data:json,[{"id":"dma_frt_condition","key":"IN_DS1"},{"id":"ds_frtMapping","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_frtMapping","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_comCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_comCode","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',mode:'synchronous','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// 경로     : 해외물류
// 작 성 자 : 김용호
// 작 업 일 : 2026-01-19
// 사용계정 : 내부
// 비고     : House Air Waybill Freight(Import)
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출   

scwin.MSG_LO_WRN_001 = "@ 에 등록 되어 있어 삭제 불가능 합니다.";
scwin.MSG_LO_WRN_002 = "이미 인보이스가 발행 되어 삭제 불가능 합니다.";
scwin.processFlag = "";
scwin.actionFlag = "";
scwin.spRtn = "";
scwin.spMsg = "";
scwin.tabIndex = 0;
scwin.linkType = "";
scwin.exRateCheck = "1";
scwin.exRate1 = "0";
scwin.exRate2 = "0";
scwin.crc = "";
scwin.cvsslMgntNo = "";
scwin.p_lobranCd = "";
scwin.p_lobranNm = "";
scwin.p_clntNo = "";
scwin.p_clntNm = "";
scwin.airexgbim = "";
scwin.p_kcomcd = "";
scwin.p_blno = "";
scwin.p_iogb = "";
scwin.p_mblno = "";
scwin.p_no = "";
scwin.p_row_cnt = "";
scwin.p_data = "";
scwin.p_hblno2 = "";
scwin.p_docuno = "";
scwin.v_linkcheck = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_iogb = "I";
scwin.hd_seaAirCls = "";
scwin.hd_mblHblCls = "";
scwin.userId = "";
scwin.strCurDate = "";

//--------------------------------------------------------------------------
// Page Load
//--------------------------------------------------------------------------
scwin.f_OnLoad = function () {};
scwin.onUdcCompleted = function () {
  scwin.userId = $c.data.getMemInfo($p, "userId") || "";
  scwin.p_lobranCd = $c.data.getMemInfo($p, "lobranCd") || " ";
  scwin.p_lobranNm = $c.data.getMemInfo($p, "lobranNm") || "";
  scwin.cvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") || "";
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd") || "";
  scwin.p_blno = $c.data.getParameter($p, "blno") || "";
  scwin.p_iogb = $c.data.getParameter($p, "iogb") || "";
  scwin.p_mblno = $c.data.getParameter($p, "mblno") || "";
  scwin.p_no = $c.data.getParameter($p, "no") || "";
  scwin.p_row_cnt = $c.data.getParameter($p, "row_cnt") || "";
  scwin.p_data = $c.data.getParameter($p, "data") || "";
  scwin.p_hblno2 = $c.data.getParameter($p, "hblno") || "";
  scwin.p_docuno = $c.data.getParameter($p, "docuno") || "";
  scwin.v_linkcheck = $c.data.getParameter($p, "linkcheck") || "";
  scwin.hd_kcomcd = scwin.p_kcomcd || "DBEX";
  scwin.hd_iogb = scwin.p_iogb || "I";
  scwin.hd_seaAirCls = "A";
  scwin.hd_mblHblCls = "H";
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  if (scwin.f_OnLoad) {
    scwin.f_OnLoad();
  }
  scwin.p_clntNo = $c.data.getMemInfo($p, "clntNo") || "";
  scwin.p_clntNm = $c.data.getMemInfo($p, "clntNm") || "";
  scwin.airexgbim = $c.data.getMemInfo($p, "airExgbIm") || "";
  if (!scwin.airexgbim) scwin.airexgbim = "3";
  scwin.f_initSetTab();
  scwin.f_getParametrSetting();
  scwin.f_Set("INIT");
  gr_SellingFreightInfo.setHeaderDisabled("column1", true);
  gr_PartnerFreightInfo.setHeaderDisabled("column1", true);
  gr_BuyingFreightInfo.setHeaderDisabled("column1", true);
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "lc_cucd"
  } //열위치
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);
};
scwin.f_Currency_Unit = function (curr) {
  if (curr !== "JPY" && curr !== "ITL" && curr !== "IDR" && curr !== "ESP") {
    return 1;
  }
  return 100;
};
scwin.setInit = function () {
  ds_comCode.setJSON(dlt_commonCodeZZ006.getAllJSON());
};
//--------------------------------------------------------------------------
// Parameter Setting
//--------------------------------------------------------------------------
scwin.f_getParametrSetting = function () {
  if (scwin.v_linkcheck == 9) {
    ed_blno.setValue(scwin.p_hblno2 || "");
    scwin.linkType = "API_LINK";
    scwin.f_MhnoLoading();
    return;
  }
  var hblno = scwin.p_blno || "";
  if (hblno === "null") {
    ed_blno.setValue("");
    ed_blno.focus();
    return false;
  }
  ed_blno.setValue(hblno);
  scwin.linkType = "BL_LINK";
  scwin.f_MhnoLoading();
  ed_mblno.setValue(scwin.p_mblno);
};

//--------------------------------------------------------------------------
// Tab init
//--------------------------------------------------------------------------
scwin.f_initSetTab = function () {
  //$c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1, tr_tab_center2]);
  scwin.f_selectTabMenu(0);
};

//--------------------------------------------------------------------------
// Tab select
//--------------------------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  tab_main.setSelectedTabIndex(idx);
};
scwin.f_SetDSHeader = function (ds, gubun) {
  // Header 정의는 XML DataList에서 처리
};

//--------------------------------------------------------------------------
// Default value
//--------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  if (lc_exgb && lc_exgb.setValue) {
    lc_exgb.setValue(scwin.airexgbim || "");
  }
};

//--------------------------------------------------------------------------
// Screen setup
//--------------------------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowPartner, btn_DeleteRowPartner, btn_UndoRowPartner, btn_DeleteAllRowPartner]);
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [pu_MasterLink, pu_HouseLink, pu_PartnerInv, pu_CustInv, pu_PaymentInv, pu_ArrivalNotice]);
      $c.gus.cfDisableBtnOnly($p, [pu_Tariff, pu_Plsheet, pu_exRateChange, pu_CustomerChange, pu_ResultdateChange]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create]);
      scwin.f_DisablePopUpObj();
      scwin.f_GridSet("Init");
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      $c.gus.cfDisableBtnOnly($p, [btn_AddRowPartner, btn_DeleteRowPartner, btn_UndoRowPartner, btn_DeleteAllRowPartner]);
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [pu_MasterLink, pu_HouseLink, pu_PartnerInv, pu_CustInv, pu_PaymentInv, pu_ArrivalNotice, pu_Plsheet]);
      $c.gus.cfDisableBtnOnly($p, [pu_Tariff, pu_exRateChange, pu_CustomerChange, pu_ResultdateChange]);
      scwin.f_GridSet("Retrieve");
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowPartner, btn_DeleteRowPartner, btn_UndoRowPartner, btn_DeleteAllRowPartner]);
      scwin.f_DefaultValue();
      scwin.f_GridSet("Create");
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
      $c.gus.cfEnableBtnOnly($p, [btn_AddRowPartner, btn_DeleteRowPartner, btn_UndoRowPartner, btn_DeleteAllRowPartner]);
      $c.gus.cfEnableBtnOnly($p, [pu_Tariff, pu_exRateChange, pu_CustomerChange, pu_ResultdateChange]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      scwin.f_GridSet("Update");
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
  if (lc_exgb && lc_exgb.getValue && $c.str.trim($p, lc_exgb.getValue()) === "") {
    lc_exgb.setValue(scwin.airexgbim || "");
  }
};
scwin.f_GridSet = function (gubun) {
  switch (gubun) {
    case "Init":
    case "Retrieve":
      for (var i = 0; i < ds_BuyingFreightInfo.getTotalRow(); i++) {
        ds_BuyingFreightInfo.undoRow(i);
      }
      for (var i = 0; i < gr_SellingFreightInfo.getTotalRow(); i++) {
        ds_SellingFreightInfo.undoRow(i);
      }
      for (var i = 0; i < gr_PartnerFreightInfo.getTotalRow(); i++) {
        ds_PartnerFreightInfo.undoRow(i);
      }
      gr_BuyingFreightInfo.setReadOnly("grid", true);
      gr_SellingFreightInfo.setReadOnly("grid", true);
      gr_PartnerFreightInfo.setReadOnly("grid", true);
      for (var i = 0; i < ds_BuyingFreightInfo.getTotalRow(); i++) {
        gr_BuyingFreightInfo.setCellReadOnly(i, "pchsTyp", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "pchsClntNo", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "fareEngCd", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "crcCd", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "chgWt", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "pchsUpr", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "exRate", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "pchsAmt", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "vat", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "rsltsStdDt", true);
        gr_BuyingFreightInfo.setCellReadOnly(i, "vehclNo", true);
      }
      for (var i = 0; i < ds_SellingFreightInfo.getTotalRow(); i++) {
        gr_SellingFreightInfo.setCellReadOnly(i, "bilgClntNo", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "fareEngCd", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "fareEngNm", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "crcCd", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "chgWt", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "sellUpr", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "exRate", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "sellAmt", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "vatAmt", true);
        gr_SellingFreightInfo.setCellReadOnly(i, "rsltsStdDt", true);
      }
      for (var i = 0; i < ds_PartnerFreightInfo.getTotalRow(); i++) {
        gr_PartnerFreightInfo.setCellReadOnly(i, "bilgClntNo", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "drcrCls", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "fareEngCd", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "crcCd", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "chgWt", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "sellUpr", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "sellAmtFcrc", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "exRate", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "sellAmt", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "vatAmt", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "rsltsStdDt", true);
        gr_PartnerFreightInfo.setCellReadOnly(i, "vehclNo", true);
      }
      break;
    case "Create":
    case "Update":
      gr_BuyingFreightInfo.setReadOnly("grid", false);
      gr_SellingFreightInfo.setReadOnly("grid", false);
      gr_PartnerFreightInfo.setReadOnly("grid", false);
      for (var i = 0; i < ds_BuyingFreightInfo.getTotalRow(); i++) {
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "pchsTyp", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "pchsClntNo", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "fareEngCd", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "crcCd", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "chgWt", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "pchsUpr", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "exRate", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "pchsAmt", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "vat", false);
        gr_BuyingFreightInfo.setCellReadOnly(i, "rsltsStdDt", false);
        if (ds_BuyingFreightInfo.getRowStatus(i) == "C" || ds_BuyingFreightInfo.getRowStatus(i) == "U") gr_BuyingFreightInfo.setCellReadOnly(i, "vehclNo", false);
      }
      for (var i = 0; i < ds_SellingFreightInfo.getTotalRow(); i++) {
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "bilgClntNo", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "fareEngCd", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "fareEngNm", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "crcCd", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "chgWt", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "sellUpr", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "exRate", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "sellAmt", false);
        if (ds_SellingFreightInfo.getRowStatus(i) == "C" || ds_SellingFreightInfo.getRowStatus(i) == "U") gr_SellingFreightInfo.setCellReadOnly(i, "vatAmt", false);
        gr_SellingFreightInfo.setCellReadOnly(i, "rsltsStdDt", false);
      }
      for (var i = 0; i < ds_PartnerFreightInfo.getTotalRow(); i++) {
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "bilgClntNo", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "drcrCls", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "fareEngCd", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "crcCd", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "chgWt", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "sellUpr", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "sellAmtFcrc", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "exRate", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "sellAmt", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "vatAmt", false);
        gr_PartnerFreightInfo.setCellReadOnly(i, "rsltsStdDt", false);
        if (ds_PartnerFreightInfo.getRowStatus(i) == "C" || ds_PartnerFreightInfo.getRowStatus(i) == "U") gr_PartnerFreightInfo.setCellReadOnly(i, "vehclNo", false);
      }
      break;
  }
};

//--------------------------------------------------------------------------
// PopUp enable/disable
//--------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  //$c.gus.cfEnableObjects([img_exdt]);
};
scwin.f_DisablePopUpObj = function () {
  //$c.gus.cfDisableObjects([img_exdt]);
};

//--------------------------------------------------------------------------
// Binding
//--------------------------------------------------------------------------
scwin._isDataMap = function (ds) {
  return !!(ds && ds.set && ds.get && !ds.setCellData);
};
scwin.f_ProcessBinding = function (ds, gubun) {
  if (!ds) return;
  switch (gubun) {
    case "FreightSearch":
      if (scwin._isDataMap(ds)) {
        ds.undo();
        ds.set("kcomcd", scwin.hd_kcomcd);
        ds.set("blno", $c.str.trim($p, ed_blno.getValue()));
        ds.set("mhno", $c.str.trim($p, lc_hmhno.getValue()));
        ds.set("iogb", scwin.hd_iogb);
        ds.set("mblHblCls", "H");
      } else {
        if (ds.removeAll) ds.removeAll();
        scwin._insertRow(ds);
        var row = ds.getRowPosition();
        if (row < 0) row = 0;
        ds.setCellData(row, "kcomcd", scwin.hd_kcomcd);
        ds.setCellData(row, "blno", $c.str.trim($p, ed_blno.getValue()));
        ds.setCellData(row, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
        ds.setCellData(row, "iogb", scwin.hd_iogb);
        ds.setCellData(row, "mblHblCls", "H");
      }
      break;
    case "FreightSave":
      var row2 = ds.getRowPosition();
      if (row2 < 0) row2 = 0;
      ds.setCellData(row2, "kcomcd", scwin.hd_kcomcd);
      ds.setCellData(row2, "blno", $c.str.trim($p, ed_blno.getValue()));
      break;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  debugger;
  scwin.actionFlag = "Retrieve";
  if (ed_blno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]); // @은(는) 필수 입력 항목 입니다.	
    ed_blno.focus();
    return false;
  }
  if (lc_hmhno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Consol No"]); // @은(는) 필수 입력 항목 입니다.		
    ed_blno.focus();
    return false;
  }
  // HouseFreightInfo  상속 후 Clear
  scwin.f_ProcessBinding(dma_SearchInfo, "FreightSearch");
  ds_HouseFreightInfo.removeAll();
  ds_SellingFreightInfo.removeAll();
  ds_PartnerFreightInfo.removeAll();
  ds_BuyingFreightInfo.removeAll();
  await $c.sbm.execute($p, sbm_Retrieve);
  ed_totalRow1.setValue(ds_SellingFreightInfo.getTotalRow());
  gr_SellingFreightInfo.setFocusedCell(0, 2);
  ed_totalRow2.setValue(ds_PartnerFreightInfo.getTotalRow());
  gr_PartnerFreightInfo.setFocusedCell(0, 2);
  ed_totalRow3.setValue(ds_BuyingFreightInfo.getTotalRow());
  gr_BuyingFreightInfo.setFocusedCell(0, 2);
  await scwin.sbm_Retrieve_submitdone();
  if (ds_HouseFreightInfo.getRowCount() == 0) return;
  ds_profit.removeAll();
  await $c.sbm.execute($p, sbm_RetrieveProfit);
  ds_profit.setRowPosition(0);
  gr_SellingFreightInfo.setHeaderDisabled("column1", false);
  gr_PartnerFreightInfo.setHeaderDisabled("column1", false);
  gr_BuyingFreightInfo.setHeaderDisabled("column1", false);

  // f_ProcessResult handled in sbm_Retrieve_submitdone
};

//--------------------------------------------------------------------------
// Retrieve result
//--------------------------------------------------------------------------
scwin.f_ProcessResult = async function (gubun) {
  switch (gubun) {
    case "None":
      scwin.f_Set("INIT");
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      ed_blno.focus();
      break;
    case "FreightInfo":
      scwin.f_Set("RETRIEVE");
      scwin._syncHiddenFromHouse();
      if ($c.str.trim($p, lc_cucd.getValue()) === "") {
        lc_cucd.setValue(ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "cucd"));
      }
      if ($c.str.trim($p, ed_exdt.getValue()) == "") {
        ed_exdt.setValue(ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "avdt"));
      }
      scwin._syncExRateFromHouse();
      scwin.f_TotalCac("Selling");
      scwin.f_TotalCac("Partner");
      scwin.f_TotalCac("Buying");
      scwin.f_pcSummery();
      scwin.f_MhnoLoading();
      scwin.f_Update();
      break;
  }
};

//-------------------------------------------------------------------------
//Invoice Chedk
//-------------------------------------------------------------------------
scwin.f_InvoiceCheck_All = async function () {
  var dsHeader = "";
  var ds = dma_InvoiceCheckParam;
  if (ds) ds.undo();
  ds.set("odrNo", ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "odrNo")); // Order No
  ds.set("mblHblCls", "H");
  ds.set("kcomcd", scwin.hd_kcomcd); // 법인코드
  ds.set("seaAirCls", "A"); // 해운/항공 구분 
  ds.set("blNo", ed_blno.getValue()); // Master Bill No
  ds.set("mhno", lc_hmhno.getValue()); // Consol No
  ds.set("gbun", "F"); // b/l 운임 구분 ('B','F'))

  scwin.spMsg = "";
  scwin.spRtn = "-1";
  await $c.sbm.execute($p, sbm_InvoiceCheck);
  scwin.spMsg = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition() || 0, "spMsg");
  scwin.spRtn = ds_InvoiceCheck.getCellData(ds_InvoiceCheck.getRowPosition() || 0, "spRtn");
};

//--------------------------------------------------------------------------
// Create/Update/Save/Delete/Cancel
//--------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.actionFlag = "Create";
  if (ds_HouseFreightInfo) ds_HouseFreightInfo.removeAll();
  if (ds_SellingFreightInfo) ds_SellingFreightInfo.removeAll();
  if (ds_PartnerFreightInfo) ds_PartnerFreightInfo.removeAll();
  if (ds_BuyingFreightInfo) ds_BuyingFreightInfo.removeAll();
  if (ds_profit) ds_profit.removeAll();
  scwin.f_Set("CREATE");
};
scwin._isModified = function (ds) {
  return !!(ds && ds.getModifiedIndex && ds.getModifiedIndex().length > 0);
};
scwin.f_Update = function () {
  scwin.actionFlag = "Update";
  scwin.f_Set("UPDATE");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin._syncHiddenToHouse();
  if (scwin._isModified(ds_HouseFreightInfo) || scwin._isModified(ds_BuyingFreightInfo) || scwin._isModified(ds_SellingFreightInfo) || scwin._isModified(ds_PartnerFreightInfo)) {
    scwin.f_ProcessBinding(ds_HouseFreightInfo, "FreightSave");
    if ((await scwin.f_ReqFieldChk()) && (await scwin.f_JobCloseYn())) {
      scwin.actionFlag = "Save";

      // UserStatus-JSP 화면에 Head 와 Body(그리드)가 있을경우 Body가 변경 될 경우 무조건 Head도 서버 로 전송 해서 업데이트 하기 위해서 사용 됨
      if (ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "status") == "U") {
        ds_HouseFreightInfo.setCellData(ds_HouseFreightInfo.getRowPosition(), "status", ""); // status
      } else {
        ds_HouseFreightInfo.setCellData(ds_HouseFreightInfo.getRowPosition(), "status", "U"); // status
      }

      //for(var i=0; i<= ds_HouseFreightInfo.getRowCount(); i++)
      //{	
      //	if(ds_HouseFreightInfo.Namevalue(i,"cucd")==crc){
      //		if(ds_HouseFreightInfo.Namevalue(i,"rate") < exRate1*0.9 || ds_HouseFreightInfo.Namevalue(i,"rate") > exRate1*1.1){
      //			alert("Exchange Rate Information의 Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
      //			return false;
      //		}
      //		if(ds_HouseFreightInfo.Namevalue(i,"exrate") < exRate2*0.9 || ds_HouseFreightInfo.Namevalue(i,"exrate") > exRate2*1.1){
      //			alert("Exchange Rate Information의 UX Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
      //			return false;
      //		}
      //	} 			

      //} 

      //for(var i=0; i<= ds_SellingFreightInfo.getRowCount(); i++)
      //{	if(ds_SellingFreightInfo.Namevalue(i,"crcCd") == crc){
      //		if(ds_SellingFreightInfo.Namevalue(i,"exRate") < exRate1*0.9 || ds_SellingFreightInfo.Namevalue(i,"exRate") > exRate1*1.1){
      //			alert("Selling List의 Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
      //			return false;
      //		} 			
      //	}
      //} 

      //for(var i=0; i<= ds_PartnerFreightInfo.getRowCount(); i++)
      //{	if(ds_PartnerFreightInfo.Namevalue(i,"crcCd") == crc){
      //		if(ds_PartnerFreightInfo.Namevalue(i,"exRate") < exRate1*0.9 || ds_PartnerFreightInfo.Namevalue(i,"exRate") > exRate1*1.1){
      //			alert("Partner List의 Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
      //			return false;
      //		} 			
      //	}
      //} 

      //for(var i=0; i<= ds_BuyingFreightInfo.getRowCount(); i++)
      //{	if(ds_BuyingFreightInfo.Namevalue(i,"crcCd") == crc){
      //		if(ds_BuyingFreightInfo.Namevalue(i,"exRate") < exRate1*0.9 || ds_BuyingFreightInfo.Namevalue(i,"exRate") > exRate1*1.1){
      //			alert("Buying List의 Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
      //			return false;
      //		} 			
      //	}
      //} 
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?				
        scwin.v_linkcheck = "";
        await $c.sbm.execute($p, sbm_Save);
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["Master Freight Info"]); //@은(는) 변경된 사항이 없습니다.
  }
};
scwin.f_postDtChk = function (odrNo, sellSeq, kcomcd, seaAirCls, blNo, mhno) {
  var dcoptions = {
    baseNode: "list",
    repeatNode: "map",
    saveRemovedData: "true"
  };
  postDtDataSet_ = $c.data.createDataList($p, "postDtDataSet_", ["col1"], ["text"], dcoptions);
  scwin._execDataId(postDtDataSet_, "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ilCommonEBC" + "&queryId=" + "retrievePostDt" + "&param1=" + odrNo + "&param2=" + sellSeq + "&param3=" + kcomcd + "&param4=" + seaAirCls + "&param5=" + blNo + "&param6=" + mhno + "&param7=" + "" + "&param8=" + "" + "&param9=" + "" + "&param10=" + "" + "&param11=" + "" + "&param12=" + "" + "&param13=" + "" + "&param14=" + "");
  //  	       postDtDataSet_.SyncLoad="true";
  //  	       postDtDataSet_.Reset();
  //   	  	alert(tmpDataSet.getRowCount());
  //   	  	dataSetDebug(postDtDataSet_, true);
  return postDtDataSet_;
};

//유효성검사
scwin.f_ReqFieldChk = async function () {
  if (lc_cucd.getValue() == "") {
    // 2008.10.13 체크 추가 
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Currency Code"]); // @은(는) 필수 입력 항목입니다.
    lc_cucd.focus();
    return false;
  }
  if (ed_exdt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Ex-Rate Date"]); // @은(는) 필수 입력 항목입니다.
    ed_exdt.focus();
    return false;
  }
  if (ed_rate.getValue() == "" || ed_rate.getValue() == "0") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Ex-Rate"]); // @은(는) 필수 입력 항목입니다.
    ed_rate.focus();
    return false;
  }
  if (ed_exrate.getValue() == "" || ed_exrate.getValue() == "0") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["US Ex-Rate"]); // @은(는) 필수 입력 항목입니다.
    ed_exrate.focus();
    return false;
  }

  // Buying Inner Dept
  var checked = 0;
  for (var i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    if (ds_BuyingFreightInfo.getCellData(i, "pchsTyp") == "3") {
      if (ds_BuyingFreightInfo.getCellData(i, "sellDeptCd") == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Inner Department"]); //@는 필수입력항목입니다.
        gr_BuyingFreightInfo.focus();
        gr_BuyingFreightInfo.Focus("sellDeptCd"); // forcus
        scwin.f_selectTabMenu(2);
        return false;
      }
    }
    checked++;
  }
  for (var i = 0; i < ds_SellingFreightInfo.getRowCount(); i++) {
    if (ds_SellingFreightInfo.getCellData(i, "vatYn") == 0) {
      if (ds_SellingFreightInfo.getCellData(i, "vatAmt") > 0) {
        await $c.win.alert($p, "영세코드와 부가세 금액은 함께 입력될 수 없습니다. \nSelling List " + i + "번째 데이터를 확인하세요.");
        // gr_SellingFreightInfo.focus();
        scwin.f_selectTabMenu(0);
        gr_SellingFreightInfo.setFocusedCell(i, "vatAmt");
        return false;
      }
    }
    if (ds_SellingFreightInfo.getCellData(i, "vatYn") == 1) {
      if (Math.abs(Math.round(ds_SellingFreightInfo.getCellData(i, "sellAmt") * 0.1) - ds_SellingFreightInfo.getCellData(i, "vatAmt")) > 1) {
        await $c.win.alert($p, "VAT 금액은 Amount(W)금액의 10%입니다.\nSelling List " + i + "번째 데이터를 확인하세요.");
        // gr_SellingFreightInfo.focus();
        // gr_SellingFreightInfo.setColumn("vatAmt");
        gr_SellingFreightInfo.setFocusedCell(i, "vatAmt");
        return false;
      }
    }
    if (ds_SellingFreightInfo.getCellData(i, "sellAmt") == "0") {
      await $c.win.alert($p, "Amount(W) 금액이 0입니다. \nSelling List " + i + "번째 데이터를 확인하세요.");
      // gr_SellingFreightInfo.focus();
      // gr_SellingFreightInfo.setColumn("sellAmt"); // forcus
      gr_SellingFreightInfo.setFocusedCell(i, "sellAmt");
      return false;
    }

    //삭제 시 내부거래 체크
    var sStatus = ds_SellingFreightInfo.getRowStatus ? ds_SellingFreightInfo.getRowStatus(i) : ds_SellingFreightInfo.RowStatus(i);
    if (sStatus == "2" || sStatus == 2 || sStatus == "D") {
      scwin.f_postDtChk(ds_SellingFreightInfo.getCellData(i, "odrNo"), ds_SellingFreightInfo.getCellData(i, "sellSeq"), ds_SellingFreightInfo.getCellData(i, "kcomcd"), ds_SellingFreightInfo.getCellData(i, "seaAirCls"), ds_SellingFreightInfo.getCellData(i, "blNo"), ds_SellingFreightInfo.getCellData(i, "mhno"));
      var isPostDt = postDtDataSet_.getCellData(0, "col1");
      if (isPostDt != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \nSelling List " + i + "번째 데이터를 확인하세요.");
        return false;
      }
    }
  }
  for (var i = 0; i < ds_PartnerFreightInfo.getRowCount(); i++) {
    if (ds_PartnerFreightInfo.getCellData(i, "vatYn") == 0) {
      if (ds_PartnerFreightInfo.getCellData(i, "vatAmt") > 0) {
        await $c.win.alert($p, "영세코드와 부가세 금액은 함께 입력될 수 없습니다. \nPartner List " + i + "번째 데이터를 확인하세요.");
        // gr_PartnerFreightInfo.focus();
        scwin.f_selectTabMenu(1);
        gr_PartnerFreightInfo.setFocusedCell(i, "vatAmt");
        return false;
      }
    }
    if (ds_PartnerFreightInfo.getCellData(i, "sellAmt") == "0") {
      await $c.win.alert($p, "Amount(W) 금액이 0입니다. \nPartner List " + i + "번째 데이터를 확인하세요.");
      // gr_PartnerFreightInfo.focus();
      // gr_PartnerFreightInfo.setColumn("sellAmt");
      scwin.f_selectTabMenu(1);
      gr_PartnerFreightInfo.setFocusedCell(i, "sellAmt");
      return false;
    }

    //삭제 시 내부거래 체크
    var pStatus = ds_PartnerFreightInfo.getRowStatus ? ds_PartnerFreightInfo.getRowStatus(i) : ds_PartnerFreightInfo.RowStatus(i);
    if (pStatus == "2" || pStatus == 2 || pStatus == "D") {
      scwin.f_postDtChk(ds_PartnerFreightInfo.getCellData(i, "odrNo"), ds_PartnerFreightInfo.getCellData(i, "sellSeq"), ds_PartnerFreightInfo.getCellData(i, "kcomcd"), ds_PartnerFreightInfo.getCellData(i, "seaAirCls"), ds_PartnerFreightInfo.getCellData(i, "blNo"), ds_PartnerFreightInfo.getCellData(i, "mhno"));
      var isPostDt = postDtDataSet_.getCellData(0, "col1");
      if (isPostDt != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \nPartner List " + i + "번째 데이터를 확인하세요.");
        return false;
      }
    }
  }
  for (var i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
    if (ds_BuyingFreightInfo.getCellData(i, "vatYn") == 0) {
      if (ds_BuyingFreightInfo.getCellData(i, "vat") > 0) {
        await $c.win.alert($p, "영세코드와 부가세 금액은 함께 입력될 수 없습니다. \nBuying List " + i + "번째 데이터를 확인하세요.");
        // gr_BuyingFreightInfo.focus();
        scwin.f_selectTabMenu(2);
        gr_BuyingFreightInfo.setFocusedCell(i, "vat");
        return false;
      }
    }
    if (ds_BuyingFreightInfo.getCellData(i, "pchsAmt") == "0") {
      await $c.win.alert($p, "Amount(W) 금액이 0입니다. \nBuying List " + i + "번째 데이터를 확인하세요.");
      // gr_BuyingFreightInfo.focus();
      // gr_BuyingFreightInfo.setColumn("pchsAmt");
      scwin.f_selectTabMenu(2);
      gr_BuyingFreightInfo.setFocusedCell(i, "pchsAmt");
      return false;
    }

    //삭제 시 내부거래 체크
    var bStatus = ds_BuyingFreightInfo.getRowStatus ? ds_BuyingFreightInfo.getRowStatus(i) : ds_BuyingFreightInfo.RowStatus(i);
    if (bStatus == "2" || bStatus == 2 || bStatus == "D") {
      scwin.f_postDtChk(ds_BuyingFreightInfo.getCellData(i, "odrNo"), ds_BuyingFreightInfo.getCellData(i, "pchsSeq"), ds_BuyingFreightInfo.getCellData(i, "kcomcd"), ds_BuyingFreightInfo.getCellData(i, "seaAirCls"), ds_BuyingFreightInfo.getCellData(i, "blNo"), ds_BuyingFreightInfo.getCellData(i, "mhno"));
      var isPostDt = postDtDataSet_.getCellData(0, "col1");
      if (isPostDt != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \nbuying List " + i + "번째 데이터를 확인하세요.");
        return false;
      }
    }
  }
  if ($c.gus.cfValidate($p, [gr_BuyingFreightInfo, gr_SellingFreightInfo, gr_PartnerFreightInfo]) == false) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
    //삭제하시겠습니까?
    scwin.actionFlag = "Delete";
    await scwin.f_InvoiceCheck_All();
    if (scwin.spRtn == "0") {
      // var _delIdx = ds_HouseFreightInfo.getDeletedIndex();
      // if (_delIdx && _delIdx.length) ds_HouseFreightInfo.deleteRows(_delIdx);
      ds_HouseFreightInfo.modifyRowStatus(0, "D");
      // Buying Info
      ds_BuyingFreightInfo.modifyAllStatus("D");
      // Selling Info
      ds_SellingFreightInfo.modifyAllStatus("D");
      // Partner Info
      ds_PartnerFreightInfo.modifyAllStatus("D");
      await $c.sbm.execute($p, sbm_Save);
    } else {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_002);
    }
    ed_blno.focus();
  }
};
scwin.f_Cancel = function () {
  if (scwin.actionFlag == "Create") {
    scwin.f_Set("INIT");
    scwin.processFlag = "None";
  } else {
    scwin.f_Set("RETRIEVE");
  }
};
scwin.undoAll = function (ds) {
  for (var i = 0; i < ds.getTotalRow(); i++) {
    if (ds.getRowStatus(i) == "C") {
      ds.removeRow(i);
    } else {
      ds.undoRow(i);
    }
  }
  scwin.undoAll(ds_HouseFreightInfo);
  scwin.undoAll(ds_BuyingFreightInfo);
  scwin.undoAll(ds_SellingFreightInfo);
  scwin.undoAll(ds_PartnerFreightInfo);
};
//--------------------------------------------------------------------------
// Add row
//--------------------------------------------------------------------------
scwin.f_AddRow = function (gubun) {
  var dsHouse = ds_HouseFreightInfo;
  var houseRow = dsHouse.getRowPosition();
  if (houseRow < 0) houseRow = 0;
  switch (gubun) {
    case "Selling":
      {
        var dsSelling = ds_SellingFreightInfo;
        scwin._insertRow(dsSelling);
        row = dsSelling.getRowCount() - 1;
        if (gr_SellingFreightInfo && gr_SellingFreightInfo.setFocusedCell) {
          gr_SellingFreightInfo.setFocusedCell(row, "bilgClntNo");
        }
        dsSelling.setCellData(row, "odrNo", dsHouse.getCellData(houseRow, "odrNo"));
        dsSelling.setCellData(row, "kcomcd", scwin.hd_kcomcd);
        dsSelling.setCellData(row, "seaAirCls", scwin.hd_seaAirCls);
        dsSelling.setCellData(row, "blNo", $c.str.trim($p, ed_blno.getValue()));
        dsSelling.setCellData(row, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
        dsSelling.setCellData(row, "locPtnCls", "1");
        dsSelling.setCellData(row, "mblHblCls", scwin.hd_mblHblCls);
        dsSelling.setCellData(row, "drcrCls", "D");
        dsSelling.setCellData(row, "rsltsStdDt", dsHouse.getCellData(houseRow, "cjdt"));
        dsSelling.setCellData(row, "chgWt", "0");
        dsSelling.setCellData(row, "sellUpr", "0");
        dsSelling.setCellData(row, "sellAmt", "0");
        dsSelling.setCellData(row, "vatAmt", "0");
        dsSelling.setCellData(row, "sellAmtFcrc", "0");
        if (dsSelling.getRowCount() === 1) {
          dsSelling.setCellData(row, "bilgClntNo", dsHouse.getCellData(houseRow, "ascd"));
          dsSelling.setCellData(row, "bilgClntNm", dsHouse.getCellData(houseRow, "asnm"));
          dsSelling.setCellData(row, "crcCd", $c.str.trim($p, lc_cucd.getValue()));
          dsSelling.setCellData(row, "exRate", ed_rate.getValue());
        } else {
          var prev = row - 1;
          dsSelling.setCellData(row, "bilgClntNo", dsSelling.getCellData(prev, "bilgClntNo"));
          dsSelling.setCellData(row, "bilgClntNm", dsSelling.getCellData(prev, "bilgClntNm"));
          dsSelling.setCellData(row, "crcCd", dsSelling.getCellData(prev, "crcCd"));
          dsSelling.setCellData(row, "exRate", dsSelling.getCellData(prev, "exRate"));
        }
        gr_SellingFreightInfo.setCellReadOnly(row, "bilgClntNo", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "fareEngCd", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "fareEngNm", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "crcCd", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "chgWt", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "sellUpr", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "exRate", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "sellAmt", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "vatAmt", false);
        gr_SellingFreightInfo.setCellReadOnly(row, "rsltsStdDt", false);
        break;
      }
    case "Partner":
      {
        var dsPartner = ds_PartnerFreightInfo;
        if (dsPartner.getRowCount() === 0) {
          if (scwin.f_SellingToPartner) scwin.f_SellingToPartner();
        }
        if (dsPartner.getRowCount() === 0) {
          scwin._insertRow(dsPartner);
        } else {
          scwin._insertRow(dsPartner);
        }
        rowP = dsPartner.getRowCount() - 1;
        if (gr_PartnerFreightInfo && gr_PartnerFreightInfo.setFocusedCell) {
          gr_PartnerFreightInfo.setFocusedCell(rowP, "bilgClntNo");
        }
        dsPartner.setCellData(rowP, "odrNo", dsHouse.getCellData(houseRow, "odrNo"));
        dsPartner.setCellData(rowP, "kcomcd", scwin.hd_kcomcd);
        dsPartner.setCellData(rowP, "seaAirCls", scwin.hd_seaAirCls);
        dsPartner.setCellData(rowP, "blNo", $c.str.trim($p, ed_blno.getValue()));
        dsPartner.setCellData(rowP, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
        dsPartner.setCellData(rowP, "locPtnCls", "2");
        dsPartner.setCellData(rowP, "mblHblCls", scwin.hd_mblHblCls);
        dsPartner.setCellData(rowP, "rsltsStdDt", dsHouse.getCellData(houseRow, "cjdt"));
        dsPartner.setCellData(rowP, "chgWt", "0");
        dsPartner.setCellData(rowP, "sellUpr", "0");
        dsPartner.setCellData(rowP, "sellAmt", "0");
        dsPartner.setCellData(rowP, "vatAmt", "0");
        dsPartner.setCellData(rowP, "sellAmtFcrc", "0");
        if (dsPartner.getRowCount() === 1) {
          dsPartner.setCellData(rowP, "bilgClntNo", dsHouse.getCellData(houseRow, "pncd"));
          dsPartner.setCellData(rowP, "bilgClntNm", dsHouse.getCellData(houseRow, "pnnm"));
          dsPartner.setCellData(rowP, "crcCd", $c.str.trim($p, lc_cucd.getValue()));
          dsPartner.setCellData(rowP, "exRate", ed_rate.getValue());
        } else {
          var prevP = rowP - 1;
          dsPartner.setCellData(rowP, "bilgClntNo", dsPartner.getCellData(prevP, "bilgClntNo"));
          dsPartner.setCellData(rowP, "bilgClntNm", dsPartner.getCellData(prevP, "bilgClntNm"));
          dsPartner.setCellData(rowP, "crcCd", dsPartner.getCellData(prevP, "crcCd"));
          dsPartner.setCellData(rowP, "exRate", dsPartner.getCellData(prevP, "exRate"));
        }
        dsPartner.setCellData(rowP, "drcrCls", "C");
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "bilgClntNo", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "drcrCls", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "fareEngCd", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "crcCd", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "chgWt", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "sellUpr", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "sellAmtFcrc", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "exRate", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "sellAmt", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "vatAmt", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "rsltsStdDt", false);
        gr_PartnerFreightInfo.setCellReadOnly(rowP, "vehclNo", false);
        break;
      }
    case "Buying":
      {
        var dsBuying = ds_BuyingFreightInfo;
        scwin._insertRow(dsBuying);
        rowB = dsBuying.getRowCount() - 1;
        if (gr_BuyingFreightInfo && gr_BuyingFreightInfo.setFocusedCell) {
          gr_BuyingFreightInfo.setFocusedCell(rowB, "pchsTyp");
        }
        dsBuying.setCellData(rowB, "odrNo", dsHouse.getCellData(houseRow, "odrNo"));
        dsBuying.setCellData(rowB, "kcomcd", scwin.hd_kcomcd);
        dsBuying.setCellData(rowB, "seaAirCls", scwin.hd_seaAirCls);
        dsBuying.setCellData(rowB, "blNo", $c.str.trim($p, ed_blno.getValue()));
        dsBuying.setCellData(rowB, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
        dsBuying.setCellData(rowB, "locPtnCls", "1");
        dsBuying.setCellData(rowB, "mblHblCls", scwin.hd_mblHblCls);
        dsBuying.setCellData(rowB, "rsltsStdDt", dsHouse.getCellData(houseRow, "cjdt"));
        dsBuying.setCellData(rowB, "drcrCls", "C");
        dsBuying.setCellData(rowB, "chgWt", "0");
        dsBuying.setCellData(rowB, "sellUpr", "0");
        dsBuying.setCellData(rowB, "sellAmt", "0");
        dsBuying.setCellData(rowB, "vatAmt", "0");
        dsBuying.setCellData(rowB, "sellAmtFcrc", "0");
        dsBuying.setCellData(rowB, "pchsUpr", "0");
        dsBuying.setCellData(rowB, "pchsAmt", "0");
        dsBuying.setCellData(rowB, "vat", "0");
        dsBuying.setCellData(rowB, "pchsAmtFcrc", "0");
        if (dsBuying.getRowCount() === 1) {
          dsBuying.setCellData(rowB, "pchsClntNo", "");
          dsBuying.setCellData(rowB, "pchsClntNm", "");
          dsBuying.setCellData(rowB, "crcCd", "KRW");
          dsBuying.setCellData(rowB, "exRate", ed_rate.getValue());
        } else {
          var prevB = rowB - 1;
          dsBuying.setCellData(rowB, "pchsClntNo", dsBuying.getCellData(prevB, "pchsClntNo"));
          dsBuying.setCellData(rowB, "pchsClntNm", dsBuying.getCellData(prevB, "pchsClntNm"));
          dsBuying.setCellData(rowB, "crcCd", dsBuying.getCellData(prevB, "crcCd"));
          dsBuying.setCellData(rowB, "exRate", dsBuying.getCellData(prevB, "exRate"));
        }
        dsBuying.setCellData(rowB, "pchsTyp", "1");
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "pchsTyp", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "pchsClntNo", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "fareEngCd", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "crcCd", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "chgWt", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "pchsUpr", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "exRate", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "pchsAmt", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "vat", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "rsltsStdDt", false);
        gr_BuyingFreightInfo.setCellReadOnly(rowB, "vehclNo", false);
        break;
      }
    default:
      break;
  }
};

//--------------------------------------------------------------------------
// Add row multi
//--------------------------------------------------------------------------
scwin.f_AddRowMulti = function (gubun) {
  var rowMakeSelling = parseInt($c.str.trim($p, ed_rowMake_selling.getValue()) || "1", 10);
  var rowMakePartner = parseInt($c.str.trim($p, ed_rowMake_partner.getValue()) || "1", 10);
  var rowMakeBuying = parseInt($c.str.trim($p, ed_rowMake_buying.getValue()) || "1", 10);
  if (gubun === "Selling") {
    for (var i = 0; i < rowMakeSelling; i++) scwin.f_AddRow("Selling");
  } else if (gubun === "Partner") {
    for (var j = 0; j < rowMakePartner; j++) scwin.f_AddRow("Partner");
  } else if (gubun === "Buying") {
    for (var k = 0; k < rowMakeBuying; k++) scwin.f_AddRow("Buying");
  }
};

//invoice 발생 여부에 의해 수정 가능 여부 
scwin.f_InvoiceCheck = function (disGubun, row) {
  switch (disGubun) {
    case "Selling":
      var dsSelling = ds_SellingFreightInfo;
      if (dsSelling.getCellData(row, "certiNo") == "") {
        gr_SellingFreightInfo.setReadOnly("grid", false);
      } else {
        gr_SellingFreightInfo.setReadOnly("grid", true);
      }
      break;
    case "Partner":
      var dsPartner = ds_PartnerFreightInfo;
      if (dsPartner.getCellData(row, "certiNo") == "") {
        gr_SellingFreightInfo.setReadOnly("grid", false);
      } else {
        gr_SellingFreightInfo.setReadOnly("grid", true);
      }
      break;
    case "Buying":
      var dsBuying = ds_BuyingFreightInfo;
      if (dsBuying.getCellData(row, "pchsCertiNo") == "") {
        gr_SellingFreightInfo.setReadOnly("grid", false);
      } else {
        gr_SellingFreightInfo.setReadOnly("grid", true);
      }
      break;
  } // end switch		
};
scwin.f_removeAllRow = async function (gubun) {
  var ds = null;
  if (gubun === "Selling") ds = ds_SellingFreightInfo;else if (gubun === "Partner") ds = ds_PartnerFreightInfo;else if (gubun === "Buying") ds = ds_BuyingFreightInfo;
  if (!ds) return;
  for (var i = ds.getRowCount() - 1; i >= 0; i--) {
    ds.setRowPosition(i);
    await scwin.f_DeleteRow(gubun);
  }
};
scwin.f_DeleteRow = async function (gubun) {
  var tmp = null;
  if (gubun === "Selling") tmp = ds_SellingFreightInfo;else if (gubun === "Partner") tmp = ds_PartnerFreightInfo;else if (gubun === "Buying") tmp = ds_BuyingFreightInfo;
  if (!tmp) return;
  var curRow = tmp.getRowPosition() || 0;
  var rowCount = tmp.getRowCount();
  for (var i = rowCount - 1; i >= 0; i--) {
    var checked = tmp.getCellData(i, "chk") === "T";
    if (checked || i === curRow) {
      if (gubun === "Buying") {
        if ($c.str.trim($p, tmp.getCellData(i, "pchsCertiNo")) !== "") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
          return;
        }
      } else {
        if ($c.str.trim($p, tmp.getCellData(i, "certiNo")) !== "") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]);
          return;
        }
      }
      scwin._deleteRowByStatus(tmp, i);
    }
  }
};

//--------------------------------------------------------------------------
// Undo row
//--------------------------------------------------------------------------
scwin.f_UndoRow = function (gubun) {
  if (gubun === "Selling") {
    ds_SellingFreightInfo.undoMarked();
  } else if (gubun === "Partner") {
    ds_PartnerFreightInfo.undoMarked();
  } else if (gubun === "Buying") {
    ds_BuyingFreightInfo.undoMarked();
  }
};

//--------------------------------------------------------------------------
// Common popup
//--------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList;
  var pWhere;
};

//--------------------------------------------------------------------------
// Field clear
//--------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_blno.setValue("");
  // lc_hmhno.setValue("");
  $p.getComponentById(lc_hmhno.getDataListInfo().id).removeAll();
  ed_mblno.setValue("");
};

//--------------------------------------------------------------------------
// Grid popup
//--------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  function normalizeRtn(rtnList) {
    if (!rtnList || rtnList == "N/A") return null;
    if (rtnList.list && Array.isArray(rtnList.list)) rtnList = rtnList.list;
    if (Array.isArray(rtnList) && rtnList.length > 0 && Array.isArray(rtnList[0])) return rtnList[0];
    if (Array.isArray(rtnList)) return rtnList;
    var arr = [];
    if (rtnList.code != null) arr[0] = rtnList.code;
    if (rtnList.name != null) arr[1] = rtnList.name;
    return arr.length ? arr : null;
  }
  function openCommon(args) {
    var onReturn = function (rtnList) {
      var r = normalizeRtn(rtnList);
      if (!r) {
        if (args.onEmpty) args.onEmpty();
        return;
      }
      if (args.onReturn) args.onReturn(rtnList, r);
    };
    udc_ilcomCode.setSelectId(args.selectId);
    udc_ilcomCode.ilCommonPopUp(onReturn, args.codeValue || "", args.nameValue || "", args.winCloseTF, args.colCnt, args.titles, args.widths, args.hideCols, args.whereOpt || "", args.winW || "500", args.winH || "500", args.posY || "", args.posX || "", args.dupTF || "", args.allTF || pAllSearchTF, args.winTitle || "", args.noDataTF || pNoDataCloseTF);
  }
  var curr = $c.str.trim($p, lc_cucd.getValue());
  switch (disGubun) {
    case "BuyingCustomer":
      pCode = ds_BuyingFreightInfo.getCellData(row, "pchsClntNo");
      pName = ds_BuyingFreightInfo.getCellData(row, "pchsClntNm");
      ds_BuyingFreightInfo.setCellData(row, "pchsClntNo", "");
      ds_BuyingFreightInfo.setCellData(row, "pchsClntNm", "");
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Customer,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_BuyingFreightInfo, row, "pchsClntNo", "pchsClntNm");
        }
      });
      break;
    case "BuyingFreight":
      pCode = ds_BuyingFreightInfo.getCellData(row, "fareEngCd");
      pName = ds_BuyingFreightInfo.getCellData(row, "fareEngNm");
      ds_BuyingFreightInfo.setCellData(row, "fareEngCd", "");
      ds_BuyingFreightInfo.setCellData(row, "fareEngNm", "");
      openCommon({
        selectId: "retriveFreightCodeInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "A,2",
        allTF: pAllSearchTF,
        winTitle: "Freight,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_BuyingFreightInfo, row, "fareEngCd", "fareEngNm");
          ds_BuyingFreightInfo.setCellData(row, "selpchItemCd", rtnList[3]);
          ds_BuyingFreightInfo.setCellData(row, "fareGrpCd", rtnList[5]);
          ds_BuyingFreightInfo.setCellData(row, "vatYn", rtnList[7]);
          ds_BuyingFreightInfo.setCellData(row, "vehclYn", rtnList[8]);
          if ($c.str.trim($p, rtnList[9]) === "0") {
            ds_BuyingFreightInfo.setCellData(row, "crcCd", curr);
          } else {
            ds_BuyingFreightInfo.setCellData(row, "crcCd", "KRW");
          }
        }
      });
      break;
    case "BuyingInnerDept":
      pCode = ds_BuyingFreightInfo.getCellData(row, "sellDeptCd");
      pName = ds_BuyingFreightInfo.getCellData(row, "sellDeptNm");
      ds_BuyingFreightInfo.setCellData(row, "sellDeptNm", "");
      ds_BuyingFreightInfo.setCellData(row, "sellDeptNm", "");
      openCommon({
        selectId: "retrieveOpDeptCdInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Department,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_BuyingFreightInfo, row, "sellDeptCd", "sellDeptNm");
        }
      });
      break;
    case "SellingCustomer":
      pCode = ds_SellingFreightInfo.getCellData(row, "bilgClntNo");
      pName = ds_SellingFreightInfo.getCellData(row, "bilgClntNm").replace("&", "N");
      ds_SellingFreightInfo.setCellData(row, "bilgClntNo", "");
      ds_SellingFreightInfo.setCellData(row, "bilgClntNm", "");
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Customer,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_SellingFreightInfo, row, "bilgClntNo", "bilgClntNm");
        }
      });
      break;
    case "SellingFreight":
      pCode = ds_SellingFreightInfo.getCellData(row, "fareEngCd");
      pName = ds_SellingFreightInfo.getCellData(row, "fareEngNm");
      ds_SellingFreightInfo.setCellData(row, "fareEngCd", "");
      ds_SellingFreightInfo.setCellData(row, "fareEngNm", "");
      openCommon({
        selectId: "retriveFreightCodeInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: "A,1",
        allTF: pAllSearchTF,
        winTitle: "Freight,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_SellingFreightInfo, row, "fareEngCd", "fareEngNm");
          ds_SellingFreightInfo.setCellData(row, "sellItemCd", rtnList[3]);
          ds_SellingFreightInfo.setCellData(row, "fareGrpCd", rtnList[5]);
          ds_SellingFreightInfo.setCellData(row, "vatYn", rtnList[7]);
          if ($c.str.trim($p, rtnList[9]) === "0") {
            ds_SellingFreightInfo.setCellData(row, "crcCd", curr);
          } else {
            ds_SellingFreightInfo.setCellData(row, "crcCd", "KRW");
          }
        }
      });
      break;
    case "PartnerCustomer":
      pCode = ds_PartnerFreightInfo.getCellData(row, "bilgClntNo");
      pName = ds_PartnerFreightInfo.getCellData(row, "bilgClntNm");
      ds_PartnerFreightInfo.setCellData(row, "bilgClntNo", "");
      ds_PartnerFreightInfo.setCellData(row, "bilgClntNm", "");
      openCommon({
        selectId: "retrieveEngClntInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        allTF: pAllSearchTF,
        winTitle: "Customer,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_PartnerFreightInfo, row, "bilgClntNo", "bilgClntNm");
        }
      });
      break;
    case "PartnerFreight":
      var drcr = ds_PartnerFreightInfo.getCellData(row, "drcrCls");
      pCode = ds_PartnerFreightInfo.getCellData(row, "fareEngCd");
      pName = ds_PartnerFreightInfo.getCellData(row, "fareEngNm");
      ds_PartnerFreightInfo.setCellData(row, "fareEngCd", "");
      ds_PartnerFreightInfo.setCellData(row, "fareEngNm", "");
      openCommon({
        selectId: "retriveFreightCodeInfo",
        codeValue: pCode,
        nameValue: pName,
        winCloseTF: pWinCloseTF,
        colCnt: "2",
        titles: "Code, Name",
        widths: "80,230",
        hideCols: "3,4,5,6,7,8,9,10",
        whereOpt: drcr === "D" ? "A,0,1" : "A,0,2",
        allTF: pAllSearchTF,
        winTitle: "Freight,Code,Name",
        noDataTF: pNoDataCloseTF,
        onReturn: function (rtnList) {
          $c.gus.cfSetGridReturnValue($p, rtnList, ds_PartnerFreightInfo, row, "fareEngCd", "fareEngNm");
          ds_PartnerFreightInfo.setCellData(row, "sellItemCd", rtnList[3]);
          ds_PartnerFreightInfo.setCellData(row, "fareGrpCd", rtnList[5]);
          ds_PartnerFreightInfo.setCellData(row, "vatYn", rtnList[7]);
          ds_PartnerFreightInfo.setCellData(row, "vehclYn", rtnList[8]);
          if ($c.str.trim($p, rtnList[9]) === "0") {
            ds_PartnerFreightInfo.setCellData(row, "crcCd", curr);
          } else {
            ds_PartnerFreightInfo.setCellData(row, "crcCd", "KRW");
          }
        }
      });
      break;
    default:
      break;
  }
};
scwin.f_openPgm = function (name) {
  var common = {
    kcomcd: scwin.hd_kcomcd,
    blno: $c.str.trim($p, ed_blno.getValue()),
    mhno: $c.str.trim($p, lc_hmhno.getValue()),
    mblno: $c.str.trim($p, ed_mblno.getValue()),
    iogb: scwin.hd_iogb,
    seaair: scwin.hd_seaAirCls
  };
  switch (name) {
    case "Main":
      scwin._openMenu("Import House B/L", "/ui/il/airinb/aibl/ar_203_01_01b.xml", "ar_203_01_01b.xml", {
        kcomcd: common.kcomcd,
        blno: common.blno,
        mhno: common.mhno
      });
      break;
    case "Mawb":
      scwin._openMenu("Import Master B/L", "/ui/il/airinb/aibl/ar_202_01_01b.xml", "ar_202_01_01b.xml", {
        blno: common.mblno,
        kcomcd: common.kcomcd,
        mhno: common.mhno
      });
      break;
    case "Find":
      scwin._openMenu("House B/L Search", "/ui/il/airout/aobl/ar_104_01_02b.xml", "ar_104_01_02b.xml", {
        iogb: "I"
      });
      break;
    case "PL":
      scwin._openMenu("Booking Sheet", "/ui/il/pfm/pfbs/pe_101_01_01b.xml", "pe_101_01_01b.xml", {
        kcomcd: common.kcomcd,
        seaair: "A",
        iogb: common.iogb,
        blno: "",
        mblno: common.mblno,
        mhno: common.mhno
      });
      break;
    case "AN":
      scwin._openMenu("Arrival Notice", "/ui/il/seainb/sith/se_204_01_01b.xml", "se_204_01_01b.xml", {
        kcomcd: common.kcomcd,
        blno: common.blno,
        mhno: common.mhno,
        eta: ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "avdt"),
        seaair: common.seaair
      });
      break;
    case "Inv":
      scwin._openMenu("Invoice", "/ui/il/acc/acinv/ac_101_01_01b.xml", "ac_101_01_01b.xml", {
        kcomcd: common.kcomcd,
        seaair: common.seaair,
        iogb: common.iogb,
        blno: common.blno,
        mblno: "",
        mhno: common.mhno
      });
      break;
    case "PayInv":
      scwin._openMenu("Payment Invoice", "/ui/il/acc/acpay/ac_106_01_01b.xml", "ac_106_01_01b.xml", {
        kcomcd: common.kcomcd,
        seaair: common.seaair,
        iogb: common.iogb,
        blno: common.blno,
        mblno: "",
        mhno: common.mhno
      });
      break;
    case "PartnerInv":
      scwin._openMenu("Partner Invoice", "/ui/il/acc/acpar/ac_104_01_01b.xml", "ac_104_01_01b.xml", {
        kcomcd: common.kcomcd,
        seaair: common.seaair,
        iogb: common.iogb,
        blno: common.blno,
        mblno: "",
        mhno: common.mhno
      });
      break;
  }
};

//MHNNO 가져오기
scwin.f_MhnoLoading = async function () {
  var strClntNo = "";
  strClntNo = ed_blno.getValue();
  if (strClntNo.length > 0) {
    param1 = strClntNo;
    await scwin._execDataId(ds_hmhno, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirHouseMhnoListCombo&param1=" + param1 + "&param2=" + scwin.hd_iogb);
    //ds_hmhno.Reset();				
  } else {
    ds_hmhno.removeAll();
  }
};

// 환율정보가져오기
scwin.f_ExrateLoading = async function (param1, param2, param3) {
  if (param1.length > 0) {
    if (param1 == "KRW") {
      param1 = "USD";
    }
    await scwin._execDataId(ds_ExRate, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveExRate&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3);
    "&param3=" + param3;
  }
};

//-------------------------------------------------------------------------
// Freight Calc
//-------------------------------------------------------------------------
scwin.f_PkgWegihtSetting = function (rowIndex, colId, gubun) {
  let dsPartner, dsHouse;
  switch (gubun) {
    case "Selling":
      dsSelling = ds_SellingFreightInfo;
      dsHouse = ds_HouseFreightInfo;
      if (colId == "fareEngCd") {
        if (dsSelling.getCellData(rowIndex, "fareGrpCd") == "AF") {
          dsSelling.setCellData(rowIndex, "qty", dsHouse.getCellData(dsHouse.getRowPosition(), "mftpkg"));
          dsSelling.setCellData(rowIndex, "grossWt", dsHouse.getCellData(dsHouse.getRowPosition(), "mftwht"));
          dsSelling.setCellData(rowIndex, "chgWt", dsHouse.getCellData(dsHouse.getRowPosition(), "tcwht"));
        } else if (dsSelling.getCellData(rowIndex, "fareGrpCd") == "CC") {
          dsSelling.setCellData(rowIndex, "qty", 0);
          dsSelling.setCellData(rowIndex, "grossWt", 0);
          dsSelling.setCellData(rowIndex, "chgWt", 1);
          f_CcFee();
        } else {
          dsSelling.setCellData(rowIndex, "qty", dsHouse.getCellData(dsHouse.getRowPosition(), "mftpkg"));
          dsSelling.setCellData(rowIndex, "grossWt", dsHouse.getCellData(dsHouse.getRowPosition(), "mftwht"));
          dsSelling.setCellData(rowIndex, "chgWt", dsHouse.getCellData(dsHouse.getRowPosition(), "tcwht"));
        }
      } // end if	
      break;
    case "Partner":
      dsPartner = ds_PartnerFreightInfo;
      dsHouse = ds_HouseFreightInfo;
      if (colId == "fareEngCd") {
        //사용자 요구에 의해 풀어줌 
        dsPartner.setCellData(rowIndex, "qty", dsHouse.getCellData(dsHouse.getRowPosition(), "mftpkg"));
        dsPartner.setCellData(rowIndex, "grossWt", dsHouse.getCellData(dsHouse.getRowPosition(), "mftwht"));
        dsPartner.setCellData(rowIndex, "chgWt", dsHouse.getCellData(dsHouse.getRowPosition(), "tcwht"));
      } // end if
      break;
    case "Buying":
      dsBuying = ds_BuyingFreightInfo;
      dsHouse = ds_HouseFreightInfo;
      if (colId == "fareEngCd") {
        dsBuying.setCellData(rowIndex, "qty", dsHouse.getCellData(dsHouse.getRowPosition(), "mftpkg"));
        dsBuying.setCellData(rowIndex, "grossWt", dsHouse.getCellData(dsHouse.getRowPosition(), "mftwht"));
        dsBuying.setCellData(rowIndex, "chgWt", dsHouse.getCellData(dsHouse.getRowPosition(), "tcwht"));
      } // end if					
      break;
  } // end switch
};
scwin.f_CcFee = function () {
  var dsSelling = ds_SellingFreightInfo;
  dsSelling.setCellData(dsSelling.getRowPosition(), "exRate", ed_rate.getValue());
  var Exrate = dsSelling.getCellData(dsSelling.getRowPosition(), "exRate");

  //ccfee가져오기 		
  //  		var GB_CCRate =0.05; // 회사 정보에서 등록 돼 있는거....
  var GB_CCRate = 0;
  var GB_CCFAmt = 0;
  var strClntNo = "";
  strClntNo = dsSelling.getCellData(dsSelling.getRowPosition(), "bilgClntNo");
  if (strClntNo.length > 0) {
    param1 = strClntNo;
    scwin._execDataId(ds_CcfeePer, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveCcfeePerCombo&param1=" + param1);
  }
  if (ds_CcfeePer.getRowCount() == 0) {
    GB_CCRate = 0.05;
    GB_CCFAmt = 0;
  } else {
    GB_CCRate = ds_CcfeePer.getCellData(0, "COL1") / 100;
    GB_CCFAmt = ds_CcfeePer.getCellData(0, "COL2");
  }
  var nUnit = 1;
  var uchag = 0.0;
  var dTot_AMT = 0.0;
  var dTemp = 0.0;
  var oR_KCHG = 0;
  var oR_UCHG = 0.0;
  var curr = "";
  if (lc_cucd.getValue() == "KRW") {
    dsSelling.setCellData(dsSelling.getRowPosition(), "crcCd", "USD");
  } else {
    dsSelling.setCellData(dsSelling.getRowPosition(), "crcCd", lc_cucd.getValue());
  }
  curr = dsSelling.getCellData(i, "crcCd");
  for (var i = 0; i < dsSelling.getRowCount(); i++) {
    if (curr != "KRW") {
      uchag = uchag + dsSelling.getCellData(i, "sellAmtFcrc");
    } //end if 
  } //end for

  if (dsSelling.getCellData(dsSelling.getRowPosition(), "fareEngCd") == "ACF") {
    dTot_AMT = uchag * 0.03; //총 외화금액
  } else if (dsSelling.getCellData(dsSelling.getRowPosition(), "fareEngCd") == "ACP") {
    dTot_AMT = uchag * 0.02; //총 외화금액
  } else {
    dTot_AMT = uchag * GB_CCRate; //총 외화금액
  } //end if

  nUnit = scwin.f_Currency_Unit(curr);
  dTemp = dTot_AMT * Exrate / nUnit; //외화 --> 원화

  if (dTemp < 12900) {
    //MIN 12,900원
    oR_KCHG = 12900;
    oR_UCHG = oR_KCHG * nUnit / Exrate;
  } else {
    oR_KCHG = dTot_AMT * Exrate / nUnit;
    oR_UCHG = dTot_AMT;
  } // End If 	

  // Department Code 에 등록 되어 있는 CCF 금액으로 MIN 적용   2008.07.09
  if (GB_CCFAmt > 0) {
    if (dTemp < GB_CCFAmt) {
      oR_KCHG = GB_CCFAmt;
      oR_UCHG = oR_KCHG * nUnit / Exrate;
    } else {
      oR_KCHG = dTot_AMT * Exrate / nUnit;
      oR_UCHG = dTot_AMT;
    }
  }
  dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", scwin.f_TruncAmount("1", oR_KCHG));
  dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", oR_UCHG);
};
scwin.f_RateAmount = function (rowIndex, colId, gubun, olddata) {
  let dsSelling, dsPartner, dsBuying, dsHouse, nUnit;
  switch (gubun) {
    case "Selling":
      dsSelling = ds_SellingFreightInfo;
      dsHouse = ds_HouseFreightInfo;
      nUnit = scwin.f_Currency_Unit(dsSelling.getCellData(rowIndex, "crcCd"));
      if (colId == "sellUpr" && dsSelling.getCellData(rowIndex, colId) != olddata || colId == "chgWt" && dsSelling.getCellData(rowIndex, colId) != olddata) {
        let Cweight = +dsSelling.getCellData(rowIndex, "chgWt");
        let Exrate = +dsSelling.getCellData(rowIndex, "exRate");
        if (dsSelling.getCellData(rowIndex, "crcCd") == "KRW") {
          let Amount = Math.round(Cweight * dsSelling.getCellData(rowIndex, "sellUpr"));
          dsSelling.setCellData(rowIndex, "sellAmt", Amount);
          if (dsSelling.getCellData(rowIndex, "vatYn") == 0) {
            dsSelling.setCellData(rowIndex, "vatAmt", 0);
          } else {
            dsSelling.setCellData(rowIndex, "vatAmt", Math.round(Amount * 0.1));
          }
          //Selling,Buying 은 원화 일경우 외화 무조건 0
          //dsSelling.setCellData(rowIndex, "sellAmtFcrc", (Math.round((Amount * nUnit / Exrate) * 100) / 100));
          dsSelling.setCellData(rowIndex, "sellAmtFcrc", 0);
          // gr_SellingFreightInfo.setFocusedCell(rowIndex, "exRate");
        } else {
          let Amount = +Math.round(Cweight * dsSelling.getCellData(rowIndex, "sellUpr") * 100) / 100;
          dsSelling.setCellData(rowIndex, "sellAmtFcrc", Amount);
          dsSelling.setCellData(rowIndex, "sellAmt", Math.round(Amount * Exrate / nUnit));
          if (dsSelling.getCellData(rowIndex, "vatYn") == 0) {
            dsSelling.setCellData(rowIndex, "vatAmt", 0);
          } else {
            dsSelling.setCellData(rowIndex, "vatAmt", Math.round(Amount * Exrate / nUnit * 0.1));
          }

          // gr_SellingFreightInfo.setFocusedCell(rowIndex, "vatAmt");
        }
      } else if (colId == "sellAmt" && dsSelling.getCellData(rowIndex, colId) != olddata) {
        // 원화 amount 변경 시 외화 amount 수정 
        let Exrate = +dsSelling.getCellData(rowIndex, "exRate");
        let Amount = +dsSelling.getCellData(rowIndex, "sellAmt"); // 원화 Amount 금액

        if (dsSelling.getCellData(rowIndex, "vatYn") == 0) {
          //부가세 재 계산
          dsSelling.setCellData(rowIndex, "vatAmt", 0);
        } else {
          dsSelling.setCellData(rowIndex, "vatAmt", Math.round(Amount * 0.1));
        }
        if (dsSelling.getCellData(rowIndex, "crcCd") == "KRW") {
          dsSelling.setCellData(rowIndex, "sellAmtFcrc", 0);
        } else {
          dsSelling.setCellData(rowIndex, "sellAmtFcrc", Math.round(Amount * nUnit / Exrate * 100) / 100);
        }
      } else if (colId == "sellAmtFcrc" && dsSelling.getCellData(rowIndex, colId) != olddata || colId == "exRate" && dsSelling.getCellData(rowIndex, colId) != olddata) {
        // 외화  amount 변경 시 원화 amount 수정 					
        let Exrate = +dsSelling.getCellData(rowIndex, "exRate");
        let Amount = +dsSelling.getCellData(rowIndex, "sellAmtFcrc"); // 외화 Amount 금액

        if (dsSelling.getCellData(rowIndex, "vatYn") == 0) {
          //부가세 재 계산
          dsSelling.setCellData(rowIndex, "vatAmt", 0);
        } else {
          dsSelling.setCellData(rowIndex, "vatAmt", Math.round(Amount * Exrate / nUnit * 0.1));
        }
        dsSelling.setCellData(rowIndex, "sellAmt", Math.round(Amount * Exrate / nUnit));
      }
      break;
    case "Partner":
      dsPartner = ds_PartnerFreightInfo;
      dsHouse = ds_HouseFreightInfo;
      nUnit = scwin.f_Currency_Unit(dsPartner.getCellData(rowIndex, "crcCd"));
      if (colId == "sellUpr" && dsPartner.getCellData(rowIndex, colId) != olddata || colId == "chgWt" && dsPartner.getCellData(rowIndex, colId) != olddata) {
        let Cweight = +dsPartner.getCellData(rowIndex, "chgWt");
        let Exrate = +dsPartner.getCellData(rowIndex, "exRate");
        if (dsPartner.getCellData(rowIndex, "crcCd") == "KRW") {
          let Amount = +Math.round(Cweight * dsPartner.getCellData(rowIndex, "sellUpr"));
          dsPartner.setCellData(rowIndex, "sellAmt", Amount);
          if (dsPartner.getCellData(rowIndex, "vatYn") == 0) {
            dsPartner.setCellData(rowIndex, "vatAmt", 0);
          } else {
            dsPartner.setCellData(rowIndex, "vatAmt", Math.round(Amount * 0.1));
          }
          rtn = Math.round(Amount * nUnit / Exrate * 100) / 100;
          dsPartner.setCellData(rowIndex, "sellAmtFcrc", !isFinite(rtn) ? 0 : rtn);
        } else {
          Amount = Math.round(Cweight * dsPartner.getCellData(rowIndex, "sellUpr") * 100) / 100;
          dsPartner.setCellData(rowIndex, "sellAmtFcrc", !isFinite(Amount) ? 0 : Amount);
          dsPartner.setCellData(rowIndex, "sellAmt", Math.round(Amount * Exrate / nUnit));
          if (dsPartner.getCellData(rowIndex, "vatYn") == 0) {
            dsPartner.setCellData(rowIndex, "vatAmt", 0);
          } else {
            dsPartner.setCellData(rowIndex, "vatAmt", Math.round(Amount * Exrate / nUnit * 0.1));
          }
          // gr_PartnerFreightInfo.setColumn("exRate");
        }
      } else if (colId == "sellAmt" && dsPartner.getCellData(rowIndex, colId) != olddata) {
        // 원화 amount 변경 시 외화 amount 수정 		
        let Exrate = +dsPartner.getCellData(rowIndex, "exRate");
        let Amount = +dsPartner.getCellData(rowIndex, "sellAmt"); // 원화 Amount 금액

        if (dsPartner.getCellData(rowIndex, "vatYn") == 0) {
          //부가세 재 계산
          dsPartner.setCellData(rowIndex, "vatAmt", 0);
        } else {
          dsPartner.setCellData(rowIndex, "vatAmt", Math.round(Amount * 0.1));
        }
        rtn = Math.round(Amount * nUnit / Exrate * 100) / 100;
        dsPartner.setCellData(rowIndex, "sellAmtFcrc", !isFinite(rtn) ? 0 : rtn);
      } else if (colId == "sellAmtFcrc" && dsPartner.getCellData(rowIndex, colId) != olddata || colId == "exRate" && dsPartner.getCellData(rowIndex, colId) != olddata) {
        // 외화  amount 변경 시 원화 amount 수정 					
        let Exrate = +dsPartner.getCellData(rowIndex, "exRate");
        let Amount = +dsPartner.getCellData(rowIndex, "sellAmtFcrc"); // 외화 Amount 금액

        dsPartner.setCellData(rowIndex, "sellAmt", Math.round(Amount * Exrate / nUnit));
        if (dsPartner.getCellData(rowIndex, "vatYn") == 0) {
          //부가세 재 계산
          dsPartner.setCellData(rowIndex, "vatAmt", 0);
        } else {
          dsPartner.setCellData(rowIndex, "vatAmt", Math.round(Amount * Exrate / nUnit * 0.1));
        }
        //파트너  외화 변경시 rate변경 되게 수정 
        let cWeight = +dsPartner.getCellData(rowIndex, "chgWt");
        //dsPartner.setCellData(rowIndex, "sellUpr") = Math.round(Amount / cWeight);
        rtn = Math.round((Amount / cWeight - 0.005) * 100) / 100;
        dsPartner.setCellData(rowIndex, "sellUpr", !isFinite(rtn) ? 0 : rtn);
      }
      break;
    case "Buying":
      dsBuying = ds_BuyingFreightInfo;
      dsHouse = ds_HouseFreightInfo;
      nUnit = scwin.f_Currency_Unit(dsBuying.getCellData(rowIndex, "crcCd"));
      if (colId == "pchsUpr" && dsBuying.getCellData(rowIndex, colId) != olddata || colId == "chgWt" && dsBuying.getCellData(rowIndex, colId) != olddata) {
        let Cweight = +dsBuying.getCellData(rowIndex, "chgWt");
        let Exrate = +dsBuying.getCellData(rowIndex, "exRate");
        if (dsBuying.getCellData(rowIndex, "crcCd") == "KRW") {
          let Amount = +Math.round(Cweight * dsBuying.getCellData(rowIndex, "pchsUpr"));
          dsBuying.setCellData(rowIndex, "prtnAmt", Amount);
          dsBuying.setCellData(rowIndex, "pchsAmt", Amount);
          if (dsBuying.getCellData(rowIndex, "vatYn") == 0) {
            dsBuying.setCellData(rowIndex, "vat", 0);
          } else {
            //dsBuying.setCellData(rowIndex, "vat") = Math.round(Amount * 0.1);
            //buying 부가세 소수점 버림 
            dsBuying.setCellData(rowIndex, "vat", Math.round(Amount * 0.1 - 0.5));
          }
          //Selling,Buying 은 원화 일경우 외화 무조건 0
          //dsBuying.setCellData(rowIndex, "pchsAmtFcrc") = (Math.round((Amount  * nUnit / Exrate) * 100) / 100);
          dsBuying.setCellData(rowIndex, "pchsAmtFcrc", 0);
        } else {
          let Amount = +Math.round(Cweight * dsBuying.getCellData(rowIndex, "pchsUpr") * 100) / 100;
          dsBuying.setCellData(rowIndex, "pchsAmtFcrc", Amount);
          dsBuying.setCellData(rowIndex, "prtnAmt", Math.round(Amount * Exrate / nUnit));
          dsBuying.setCellData(rowIndex, "pchsAmt", Math.round(Amount * Exrate / nUnit));
          if (dsBuying.getCellData(rowIndex, "vatYn") == 0) {
            dsBuying.setCellData(rowIndex, "vat", 0);
          } else {
            //dsBuying.setCellData(rowIndex, "vat") = Math.round((Amount * Exrate) / nUnit * 0.1);
            //buying 부가세 소수점 버림 
            dsBuying.setCellData(rowIndex, "vat", Math.round(Amount * Exrate / nUnit * 0.1 - 0.5));
          }
          // gr_BuyingFreightInfo.setFocusedCell(rowIndex, "vat");
        }
      } else if (colId == "pchsAmt" && dsBuying.getCellData(rowIndex, colId) != olddata) {
        // 원화 amount 변경 시 외화 amount 수정 
        let Exrate = +dsBuying.getCellData(rowIndex, "exRate");
        let Amount = +dsBuying.getCellData(rowIndex, "pchsAmt"); // 원화 Amount 금액

        if (dsBuying.getCellData(rowIndex, "vatYn") == 0) {
          //부가세 재 계산
          dsBuying.setCellData(rowIndex, "vat", 0);
        } else {
          //dsBuying.setCellData(rowIndex, "vat") = Math.round(Amount * 0.1);
          //buying 부가세 소수점 버림 
          dsBuying.setCellData(rowIndex, "vat", Math.round(Amount * 0.1 - 0.5));
        }
        if (dsBuying.getCellData(rowIndex, "crcCd") == "KRW") {
          dsBuying.setCellData(rowIndex, "pchsAmtFcrc", 0);
        } else {
          dsBuying.setCellData(rowIndex, "pchsAmtFcrc", Math.round(Amount * nUnit / Exrate * 100) / 100);
        }
      }
      break;
  } // end switch
};

// Currency 에 따른 Ex-Rate 적용
scwin.f_CurrRateSetting = function (row, colid, disGubun) {
  var param1 = "";
  var param2 = "";
  var param3 = "";
  switch (disGubun) {
    case "Selling":
      var dsSelling = ds_SellingFreightInfo;
      if (colid == "crcCd") {
        dsSelling.setCellData(row, "exRate", ed_rate.getValue());
      } else {
        param1 = dsSelling.getCellData(row, "crcCd");
        param2 = ed_exdt.getValue();
        param3 = lc_exgb.getValue();
        scwin.f_ExrateLoading(param1, param2, param3);
        dsSelling.setCellData(row, "exRate", ds_ExRate.getCellData(0, "code"));
      }
      break;
    case "Partner":
      var dsPartner = ds_PartnerFreightInfo;
      if (colid == "crcCd") {
        dsPartner.setCellData(row, "exRate", ed_rate.getValue());
      } else {
        param1 = dsPartner.getCellData(row, "crcCd");
        param2 = ed_exdt.getValue();
        param3 = lc_exgb.getValue();
        scwin.f_ExrateLoading(param1, param2, param3);
        dsPartner.setCellData(row, "exRate", ds_ExRate.getCellData(0, "code"));
      }
      break;
    case "Buying":
      var dsBuying = ds_BuyingFreightInfo;
      if (colid == "crcCd") {
        dsBuying.setCellData(row, "exRate", ed_rate.getValue());
      } else {
        param1 = dsBuying.getCellData(row, "crcCd");
        param2 = ed_exdt.getValue();
        param3 = lc_exgb.getValue();
        scwin.f_ExrateLoading(param1, param2, param3);
        dsBuying.setCellData(row, "exRate", ds_ExRate.getCellData(0, "code"));
      }
      break;
  } // end switch		
};
scwin.f_TruncAmount = function (gubun, Amount) {
  switch (gubun) {
    case "1":
      return Math.round(Amount);
    case "2":
      return Math.round(Amount - 0.5);
    case "3":
      return parseInt(Math.round(Amount / 10) * 10, 10);
    case "4":
      return Math.round((Amount - 5) / 10) * 10;
    case "5":
      return Math.round(Math.round(Amount) / 10) * 10;
    case "6":
      return Math.round((Math.round(Amount) - 5) / 10) * 10;
    default:
      return Math.round(Amount);
  }
};
scwin.f_pcSummery = function () {
  var dsSelling = ds_SellingFreightInfo;
  var dsPartner = ds_PartnerFreightInfo;
  var pfchg = 0;
  var cfchg = 0;
  var cfuchg = 0;
  var pvchg = 0;
  var cvchg = 0;
  var cvuchg = 0;
  var pachg = 0;
  var cachg = 0;
  var cauchg = 0;
  var ptchg = 0;
  var ctchg = 0;
  var ctuchg = 0;
  var getStatus = function (ds, row) {
    if (ds && ds.getRowStatus) return ds.getRowStatus(row);
    if (ds && ds.RowStatus) return ds.RowStatus(row);
    return null;
  };
  if (dsSelling && dsSelling.getRowCount() > 0) {
    for (var i = 0; i < dsSelling.getRowCount(); i++) {
      var status = getStatus(dsSelling, i);
      if (status === "D" || status === "2") continue;
      var crcCd = dsSelling.getCellData(i, "crcCd");
      var fareGrpCd = dsSelling.getCellData(i, "fareGrpCd");
      if (crcCd !== "KRW" || fareGrpCd === "AF") {
        if (fareGrpCd !== "CC") {
          cfuchg += Number(dsSelling.getCellData(i, "sellAmtFcrc") || 0);
          cfchg += Number(dsSelling.getCellData(i, "sellAmt") || 0);
        } else {
          cvuchg += Number(dsSelling.getCellData(i, "sellAmtFcrc") || 0);
          cvchg += Number(dsSelling.getCellData(i, "sellAmt") || 0);
        }
      } else {
        if (fareGrpCd !== "CC") {
          cauchg += Number(dsSelling.getCellData(i, "sellAmtFcrc") || 0);
          cachg += Number(dsSelling.getCellData(i, "sellAmt") || 0);
        } else {
          cvuchg += Number(dsSelling.getCellData(i, "sellAmtFcrc") || 0);
          cvchg += Number(dsSelling.getCellData(i, "sellAmt") || 0);
        }
      }
    }
  }

  // Partner 계산은 기존 로직대로 미적용 (원본 주석 유지)
  // if (dsPartner && dsPartner.getRowCount() > 0) { ... }

  ed_pfchg.setValue(pfchg);
  ed_pvchg.setValue(pvchg);
  ed_pachg.setValue(pachg);
  ed_ptchg.setValue(pfchg + pvchg + pachg);
  ed_cfchg.setValue(cfchg);
  ed_cvchg.setValue(cvchg);
  ed_cachg.setValue(cachg);
  ed_ctchg.setValue(cfchg + cvchg + cachg);
  ed_cfuchg.setValue(cfuchg);
  ed_cvuchg.setValue(cvuchg);
  ed_cauchg.setValue(cauchg);
  ed_ctuchg.setValue(cfuchg + cvuchg + cauchg);
};
scwin.f_TotalCac = function (gubun) {
  var getStatus = function (ds, row) {
    if (ds && ds.getRowStatus) return ds.getRowStatus(row);
    if (ds && ds.RowStatus) return ds.RowStatus(row);
    return null;
  };
  switch (gubun) {
    case "Selling":
      {
        var dsSelling = ds_SellingFreightInfo;
        var Selling_utotal = 0;
        var Selling_total = 0;
        var Selling_totalVat = 0;
        if (dsSelling && dsSelling.getRowCount() > 0) {
          for (var i = 0; i < dsSelling.getRowCount(); i++) {
            var status = getStatus(dsSelling, i);
            if (status === "D" || status === "2") continue;
            Selling_utotal += Number(dsSelling.getCellData(i, "sellAmtFcrc") || 0);
            Selling_total += Number(dsSelling.getCellData(i, "sellAmt") || 0);
            Selling_totalVat += Number(dsSelling.getCellData(i, "vatAmt") || 0);
          }
        }
        ed_Selling_utotal.setValue(Selling_utotal);
        ed_Selling_total.setValue(Selling_total);
        ed_Selling_totalVat.setValue(Selling_totalVat);
        break;
      }
    case "Partner":
      {
        var dsPartner = ds_PartnerFreightInfo;
        var Partner_utotal = 0;
        var Partner_total = 0;
        var Partner_totalVat = 0;
        if (dsPartner && dsPartner.getRowCount() > 0) {
          for (var j = 0; j < dsPartner.getRowCount(); j++) {
            var status = getStatus(dsPartner, j);
            if (status === "D" || status === "2") continue;
            Partner_utotal += Number(dsPartner.getCellData(j, "sellAmtFcrc") || 0);
            Partner_total += Number(dsPartner.getCellData(j, "sellAmt") || 0);
            Partner_totalVat += Number(dsPartner.getCellData(j, "vatAmt") || 0);
          }
        }
        ed_Partner_utotal.setValue(Partner_utotal);
        ed_Partner_total.setValue(Partner_total);
        ed_Partner_totalVat.setValue(Partner_totalVat);
        break;
      }
    case "Buying":
      {
        var dsBuying = ds_BuyingFreightInfo;
        var Buying_utotal = 0;
        var Buying_total = 0;
        var Buying_totalVat = 0;
        var Buying_totalVatSum = 0;
        if (dsBuying && dsBuying.getRowCount() > 0) {
          for (var k = 0; k < dsBuying.getRowCount(); k++) {
            var status = getStatus(dsBuying, k);
            if (status === "D" || status === "2") continue;
            Buying_utotal += Number(dsBuying.getCellData(k, "pchsAmtFcrc") || 0);
            Buying_total += Number(dsBuying.getCellData(k, "pchsAmt") || 0);
            Buying_totalVat += Number(dsBuying.getCellData(k, "vat") || 0);
          }
        }
        Buying_totalVatSum = Buying_total + Buying_totalVat;
        ed_Buying_utotal.setValue(Buying_utotal);
        ed_Buying_total.setValue(Buying_total);
        ed_Buying_totalVat.setValue(Buying_totalVat);
        ed_Buying_totalVatSum.setValue(Buying_totalVatSum);
        break;
      }
  }
};
scwin.f_SellingToPartner = function () {
  var dsHouse = ds_HouseFreightInfo;
  var dsSelling = ds_SellingFreightInfo;
  var dsPartner = ds_PartnerFreightInfo;
  if (dsSelling.getTotalRow() > 0) {
    for (var i = 0; i < dsSelling.getTotalRow(); i++) {
      if (dsSelling.getCellData(i, "crcCd") != "KRW") {
        if (dsSelling.getCellData(i, "fareGrpCd") != "CC") {
          dsPartner.insertRow();
          gr_PartnerFreightInfo.setColumn("bilgClntNo");
          //Data Binding 
          dsPartner.setCellData(dsPartner.getRowPosition(), "odrNo", dsHouse.getCellData(dsHouse.getRowPosition(), "odrNo")); // Order No
          dsPartner.setCellData(dsPartner.getRowPosition(), "kcomcd", hd_kcomcd.getValue()); // 법인코드
          dsPartner.setCellData(dsPartner.getRowPosition(), "seaAirCls", hd_seaAirCls.getValue()); // 해운/항공 구분 
          dsPartner.setCellData(dsPartner.getRowPosition(), "blNo", ed_blno.getValue()); // Master Bill No
          dsPartner.setCellData(dsPartner.getRowPosition(), "mhno", lc_hmhno.getValue()); // Consol No
          dsPartner.setCellData(dsPartner.getRowPosition(), "locPtnCls", "2"); // 국내해외매출 구분
          dsPartner.setCellData(dsPartner.getRowPosition(), "mblHblCls", hd_mblHblCls.getValue()); // Master / House 구분
          dsPartner.setCellData(dsPartner.getRowPosition(), "rsltsStdDt", dsHouse.getCellData(dsHouse.getRowPosition(), "cjdt")); // 실적 일자				
          dsPartner.setCellData(dsPartner.getRowPosition(), "bilgClntNo", dsHouse.getCellData(dsHouse.getRowPosition(), "pncd")); // 파트너 
          dsPartner.setCellData(dsPartner.getRowPosition(), "bilgClntNm", dsHouse.getCellData(dsHouse.getRowPosition(), "pnnm")); // 파트너 
          dsPartner.setCellData(dsPartner.getRowPosition(), "drcrCls", "C"); // 매출/매입 구분 

          //실제 selling 값  추가 해줌 
          dsPartner.setCellData(dsPartner.getRowPosition(), "fareEngCd", dsSelling.getCellData(i, "fareEngCd")); // F/Code 
          dsPartner.setCellData(dsPartner.getRowPosition(), "fareEngNm", dsSelling.getCellData(i, "fareEngNm")); // F/Name
          dsPartner.setCellData(dsPartner.getRowPosition(), "fareGrpCd", dsSelling.getCellData(i, "fareGrpCd")); // Initial
          dsPartner.setCellData(dsPartner.getRowPosition(), "sellItemCd", dsSelling.getCellData(i, "sellItemCd")); // sellItemCd
          dsPartner.setCellData(dsPartner.getRowPosition(), "crcCd", dsSelling.getCellData(i, "crcCd")); // CURR
          dsPartner.setCellData(dsPartner.getRowPosition(), "chgWt", dsSelling.getCellData(i, "chgWt")); //C/Weight
          dsPartner.setCellData(dsPartner.getRowPosition(), "sellUpr", dsSelling.getCellData(i, "sellUpr")); // Rate
          dsPartner.setCellData(dsPartner.getRowPosition(), "exRate", dsSelling.getCellData(i, "exRate")); // exRate
          if (dsPartner.getCellData(dsPartner.getRowPosition(), "fareEngCd") == "AAF") {
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmt", dsSelling.getCellData(i, "sellAmt")); // sellAmt
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmtFcrc", dsSelling.getCellData(i, "sellAmtFcrc"));
            scwin.f_Tariff(); //파트너 AAF Tariff 가져 옴 
          } else {
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmt", dsSelling.getCellData(i, "sellAmt")); // sellAmt
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmtFcrc", dsSelling.getCellData(i, "sellAmtFcrc"));
          }
          dsPartner.setCellData(dsPartner.getRowPosition(), "vatYn", dsSelling.getCellData(i, "vatYn")); // vatYn
        } // end if
      } // end if
    } // end for
  } // end if
};
scwin.f_Tariff = async function () {
  var rtnList;
  switch (scwin.tabIndex) {
    case 0:
      //Selling
      var dsSelling = ds_SellingFreightInfo;
      if (dsSelling.getRowCount() > 0) {
        await $c.win.alert($p, "House Selling 에 등록 되어 있어 삭제 불가능 합니다.");
      } else {
        scwin.f_AirFreightTariff("Selling"); //항공운임 aaf tariff 조회 

        if (ds_AirFreightTariff.getRowCount() == 0) {//Tairff 조회 값이 없을 경우 빠져 나감. 
        } else {
          rtnList = scwin.f_AirFreightTariffCalc("Selling"); // rtnList[0] = chgWt;     // C/Weight
          // rtnList[1] = rate;      // rate
          // rtnList[2] = Amount;    // AMOUNT
          // rtnList[3] = Item;      // ITEM
          // rtnList[4] = urate;      // urate
          // rtnList[5] = uAmount;    // uAMOUNT
          // rtnList[6] = cucd;    // 화폐      

          // 그리드 ROW 추가 해 준다  
          scwin.f_FreightCodeInfo("AAF", "");
          scwin.f_AddRow("Selling");
          dsSelling.setCellData(dsSelling.getRowPosition(), "fareEngCd", ds_FcodeInfo.getCellData(0, "col1"));
          dsSelling.setCellData(dsSelling.getRowPosition(), "fareEngNm", ds_FcodeInfo.getCellData(0, "col2"));
          dsSelling.setCellData(dsSelling.getRowPosition(), "fareGrpCd", ds_FcodeInfo.getCellData(0, "col6"));
          dsSelling.setCellData(dsSelling.getRowPosition(), "sellItemCd", ds_FcodeInfo.getCellData(0, "col4"));
          dsSelling.setCellData(dsSelling.getRowPosition(), "vatYn", ds_FcodeInfo.getCellData(0, "col8"));

          // CurrencyRateSetting
          // Tariff 적용은 KRW 로 적용한다.
          dsSelling.setCellData(dsSelling.getRowPosition(), "crcCd", rtnList[6]);
          scwin.f_CurrRateSetting(dsSelling.getRowPosition(), "crcCd", "Selling");
          scwin.f_PkgWegihtSetting(dsSelling.getRowPosition(), "fareEngCd", "Selling");
          if (dsSelling.getCellData(dsSelling.getRowPosition(), "chgWt") < rtnList[0]) {
            dsSelling.setCellData(dsSelling.getRowPosition(), "chgWt", rtnList[0]);
          }
          if (rtnList[6] != "KRW") {
            //외화 
            nUnit = scwin.f_Currency_Unit(rtnList[6]);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellUpr", rtnList[4]);
            dsSelling.setCellData(dsSelling.getRowPosition(), "trfUpr", rtnList[4]);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", rtnList[5]);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", scwin.f_TruncAmount("1", rtnList[5] * ed_rate.getValue() / nUnit));
          } else {
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellUpr", rtnList[1]);
            dsSelling.setCellData(dsSelling.getRowPosition(), "trfUpr", rtnList[1]);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", rtnList[2]);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", 0);
          }
        }
        scwin.f_AirOtherTariff("Selling"); //항공 other tariff 조회 

        if (ds_AirOtherTariff.getRowCount() == 0) {//Tairff 조회 값이 없을 경우 빠져 나감. 
          //return;
        } else {
          scwin.f_AirOtherTariffCalc("Selling");
        }

        //Customer booking Cargo Pickup 자료 조회 해서 적용 
        scwin._execDataId(ds_AirCustBookingCargoPickupList, "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=retrieveCoCargoPickupInfoDTOList" + "&param1=" + 'H' +
        //하우스:H , 마스터:M 구분
        "&param2=" + scwin.hd_kcomcd + "&param3=" + ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "blno"));
        for (var i = 0; i < ds_AirCustBookingCargoPickupList.getRowCount(); i++) {
          scwin.f_AirTruckingTariff(i, "Selling"); //항공 Trucking tariff 조회 
          if (ds_AirTruckingTariff.getRowCount() >= 1) {
            //Tairff 조회 값이 없을 경우 빠져 나감. 
            scwin.f_AirTruckingTariffCalc(i, "Selling");
          }
        }
      }
      break;
    case 1:
      // Partner 				
      var dsPartner = ds_PartnerFreightInfo;
      scwin.f_AirFreightTariff("Partner"); //Partner aaf tariff 조회 

      if (ds_AirFreightTariff.getRowCount() == 0) {//Tairff 조회 값이 없을 경우 빠져 나감. 
      } else {
        rtnList = scwin.f_AirFreightTariffCalc("Partner"); // rtnList[0] = chgWt;     // C/Weight
        // rtnList[1] = rate;      // rate
        // rtnList[2] = Amount;    // AMOUNT
        // rtnList[3] = Item;      // ITEM
        // rtnList[4] = urate;      // urate
        // rtnList[5] = uAmount;    // uAMOUNT
        // rtnList[6] = cucd;    // 화폐      

        //dsPartner.setCellData(dsPartner.getRowPosition(), "fareEngCd", ds_FcodeInfo.getCellData(0, "col1"); 
        //dsPartner.setCellData(dsPartner.getRowPosition(), "fareEngNm", ds_FcodeInfo.getCellData(0, "col2"); 
        //dsPartner.setCellData(dsPartner.getRowPosition(), "fareGrpCd", ds_FcodeInfo.getCellData(0, "col6"); 
        //dsPartner.setCellData(dsPartner.getRowPosition(), "sellItemCd", ds_FcodeInfo.getCellData(0, "col4"); 
        //dsPartner.setCellData(dsPartner.getRowPosition(), "vatYn", ds_FcodeInfo.getCellData(0, "col8"); 

        //dsPartner.setCellData(dsPartner.getRowPosition(), "chgWt", rtnList[0]; 

        if (rtnList[6] != "KRW") {
          //외화 
          dsPartner.setCellData(dsPartner.getRowPosition(), "sellUpr", rtnList[4]);
          dsPartner.setCellData(dsPartner.getRowPosition(), "trfUpr", rtnList[4]);
          nUnit = scwin.f_Currency_Unit(rtnList[6]);
          if (rtnList[5] > 0) {
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmtFcrc", rtnList[5]);
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmt", scwin.f_TruncAmount("1", rtnList[5] * ed_rate.getValue() / nUnit));
          }
        } else {
          dsPartner.setCellData(dsPartner.getRowPosition(), "sellUpr", rtnList[1]);
          dsPartner.setCellData(dsPartner.getRowPosition(), "trfUpr", rtnList[1]);
          if (rtnList[2] > 0) {
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmt", rtnList[2]);
            dsPartner.setCellData(dsPartner.getRowPosition(), "sellAmtFcrc", 0);
          }
        }
      }
      break;
    case 2:
      // Buying 				

      //Customer booking Cargo Pickup 자료 조회 해서 적용 
      scwin._execDataId(ds_AirCustBookingCargoPickupList, "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=retrieveCoCargoPickupInfoDTOList" + "&param1=" + 'H' +
      //하우스:H , 마스터:M 구분
      "&param2=" + scwin.hd_kcomcd + "&param3=" + ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "blno"));
      for (var i = 0; i < ds_AirCustBookingCargoPickupList.getRowCount(); i++) {
        scwin.f_AirTruckingTariff(i, "Buying"); //항공 Trucking tariff 조회 
        if (ds_AirTruckingTariff.getRowCount() >= 1) {
          //Tairff 조회 값이 없을 경우 빠져 나감. 
          scwin.f_AirTruckingTariffCalc(i, "Buying");
        }
      }
      break;
  }
};

// Freight Code Info 조회 하기 
// col1 : 운임영문코드
// col2 : 매출입항목 영문명
// col3 : 운임약호
// col4 : 매출입항목코드
// col5 : 매출입항목명 
// col6 : 운임그룹코드
// col7 : 해운항공구분 코드 
// col8 : 부가세여부
// col9 : B/L 출력코드
scwin.f_FreightCodeInfo = function (Fcode, Fname) {
  var SeaAirClsCd = 'A';
  scwin._execDataId(ds_FcodeInfo, "/cm.zz.RetrieveComboCMD.do?" + "sysCd=ilCommonEBC" + "&queryId=retriveFreightCodeInfo" + "&param1=" + Fcode + "&param2=" + Fname + "&param3=" + SeaAirClsCd);
};
scwin.f_AirFreightTariffCalc = function (dsGubun) {
  // 운임 계산 해줌
  var rtnList = new Array();
  var dsTariff = "";
  var MinWgt = 0;
  var MinRate = 0;
  var MinChg = 0;
  var MidWgt = 0;
  var MidRate = 0;
  var MidChg = 0;
  var MaxWgt = 0;
  var MaxRate = 0;
  var MaxChg = 0;
  var chgWt = 0;
  var rate = 0;
  var Amount = 0;
  var uMinWgt = 0;
  var uMinRate = 0;
  var uMinChg = 0;
  var uMidWgt = 0;
  var uMidRate = 0;
  var uMidChg = 0;
  var uMaxWgt = 0;
  var uMaxRate = 0;
  var uMaxChg = 0;
  var urate = 0;
  var uAmount = 0;
  var Item = "";
  var asgb = 0;
  var cucd = "";
  var Gweight = 0;
  if (ds_HouseFreightInfo.getCellData(0, "tcwht") > 0) {
    Gweight = ds_HouseFreightInfo.getCellData(0, "tcwht");
  } else {
    Gweight = ds_HouseFreightInfo.getCellData(0, "mftwht");
  }

  //switch (gubun){
  //	case "Selling" :
  //		var dsTariff = ds_SellingFreightInfo;
  //		break;  		
  //		
  //	case "Buying" :
  //		var dsTariff = ds_BuyingFreightInfo;
  //}
  dsTariff = ds_AirFreightTariff;
  for (var i = 0; i < dsTariff.getRowCount(); i++) {
    asgb = dsTariff.getCellData(i, "asgb");
    cucd = dsTariff.getCellData(i, "cucd");
    if (dsTariff.getCellData(i, "rank") == 'M') {
      MinWgt = 0;
      MinRate = 0;
      MinChg = dsTariff.getCellData(i, "rate");
      uMinWgt = 0;
      uMinRate = 0;
      uMinChg = dsTariff.getCellData(i, "rateus");
    }
    if (dsTariff.getCellData(i, "wgt") <= Gweight) {
      MidWgt = Gweight;
      MidRate = dsTariff.getCellData(i, "rate");
      MidChg = MidWgt * MidRate;
      uMidWgt = Gweight;
      uMidRate = dsTariff.getCellData(i, "rateus");
      uMidChg = uMidWgt * uMidRate;
    }
    if (dsTariff.getCellData(i, "wgt") > Gweight) {
      MaxWgt = dsTariff.getCellData(i, "wgt");
      MaxRate = dsTariff.getCellData(i, "rate");
      MaxChg = MaxWgt * MaxRate;
      uMaxWgt = dsTariff.getCellData(i, "wgt");
      uMaxRate = dsTariff.getCellData(i, "rateus");
      uMaxChg = uMaxWgt * uMaxRate;
      break;
    }
  } // end for

  if (MaxChg > 0 || uMaxChg > 0) {
    if (MidChg < MaxChg || uMidChg < uMaxChg || asgb == 0) {
      chgWt = MidWgt;
      rate = MidRate;
      Amount = MidChg;
      chgWt = uMidWgt;
      urate = uMidRate;
      uAmount = uMidChg;
    } else {
      chgWt = MaxWgt;
      rate = MaxRate;
      Amount = MaxChg;
      chgWt = uMaxWgt;
      urate = uMaxRate;
      uAmount = uMaxChg;
      Item = "AS";
    }
  } else {
    chgWt = MidWgt;
    rate = MidRate;
    Amount = MidChg;
    chgWt = uMidWgt;
    urate = uMidRate;
    uAmount = uMidChg;
  }
  // Minimum 하고의 비교 후 큰 값을 취한다.
  if (MinChg > Amount || uMinChg > uAmount) {
    chgWt = MinWgt;
    rate = MinRate;
    Amount = MinChg;
    chgWt = uMinWgt;
    urate = uMinRate;
    uAmount = uMinChg;
  }
  rtnList[0] = chgWt; // C/Weight
  rtnList[1] = rate; // rate
  rtnList[2] = Amount; // AMOUNT
  rtnList[3] = Item; // ITEM
  rtnList[4] = urate; // urate
  rtnList[5] = uAmount; // uAMOUNT
  rtnList[6] = cucd; // 화폐        

  return rtnList;
};

//==================================================================================================================
// JSP Missing Functions (added)
//==================================================================================================================
scwin.f_AirFreightTariff = function (Gubun) {
  var kcomcd = scwin.hd_kcomcd;
  var cust = ""; // 거래쳐 	
  var on_avdt = ds_HouseFreightInfo.getCellData(0, "avdt"); //Onboard or Arrival Date 
  var dpcd = ds_HouseFreightInfo.getCellData(0, "dpcd"); // 출발지 
  var dscd = ds_HouseFreightInfo.getCellData(0, "dscd1"); //도착지 
  var carrier = ds_HouseFreightInfo.getCellData(0, "carrier"); // 항공사 거래처 코드 
  var partner = ds_HouseFreightInfo.getCellData(0, "pncd"); // 파트너  코드 
  var shpr_cd = ds_HouseFreightInfo.getCellData(0, "shcd"); // Shipper
  var cnsn_cd = ds_HouseFreightInfo.getCellData(0, "cncd"); // Consignee
  var itgb = ds_HouseFreightInfo.getCellData(0, "itgb"); // item_type
  var blgb = ""; // selling , Buying (H, M)

  switch (Gubun) {
    // Air Freight Selling Tariff 적용   	
    case "Selling":
      blgb = "H"; // selling , Buying (H, M)
      cust = ds_HouseFreightInfo.getCellData(0, "ascd"); // 실화주 
      //scwin._execDataId(ds_AirFreightTariff, "/cm.zz.RetrieveComboCMD.do?"+
      //                       "sysCd=CoCommonEBC"+
      //                       "&queryId=CoRetrieveAirFreightSellingTariffList"+
      //                       "&param1=" + kcomcd + 
      //                       "&param2=" + cust +
      //                       "&param3=" + on_avdt + 
      //                       "&param4=" + dpcd + 
      //                       "&param5=" + dscd + 
      //                       "&param6=" + carrier + 
      //                       "&param7=" + partner + 
      //                       "&param8=" + blgb );  

      scwin._execDataId(ds_AirFreightTariff, "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoRetrieveAirFreightInboundSellingTariffList" + "&param1=" + kcomcd + "&param2=" + cust + "&param3=" + on_avdt + "&param4=" + dpcd + "&param5=" + dscd + "&param6=" + shpr_cd + "&param7=" + partner + "&param8=" + carrier + "&param9=" + itgb + "&param10=" + blgb);
      break;
    // Air Freight Partner Tariff 적용   		
    case "Partner":
      blgb = "M"; // selling , Buying (H, M)
      //거래처(파트너)/Shipper/파트너(consignee)/항공사으로 적용
      cust = ds_HouseFreightInfo.getCellData(0, "ascd"); // 실화주 

      scwin._execDataId(ds_AirFreightTariff, "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoRetrieveAirFreightInboundPartnerTariffList" + "&param1=" + kcomcd + "&param2=" + partner + "&param3=" + on_avdt + "&param4=" + dpcd + "&param5=" + dscd + "&param6=" + cust + "&param7=" + shpr_cd + "&param8=" + itgb + "&param9=" + blgb);
      break;
    // Air Freight Buying Tariff 적용   		
    case "Buying":
      break;
  }
};
scwin.f_AirOtherTariffCalc = function (Gubun) {
  // 운임 계산 해줌
  var dsTariff = ds_AirOtherTariff;
  var curr = "KRW";
  var rate = 0;
  var type = "";
  var exrate = ed_rate.getValue();
  var chgWt = ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "tcwht");
  var vatgb = "";
  var fcode = "";
  switch (Gubun) {
    case "Buying":
      break;
    case "Selling":
      var dsSelling = ds_SellingFreightInfo;
      var nUnit = 1;
      for (var i = 0; i < dsTariff.getRowCount(); i++) {
        fcode = dsTariff.getCellData(i, "fcode");

        // 그리드 ROW 추가 해 준다  
        scwin.f_FreightCodeInfo(fcode, "");
        scwin.f_AddRow("Selling");
        dsSelling.setCellData(dsSelling.getRowPosition(), "fareEngCd", ds_FcodeInfo.getCellData(0, "col1"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "fareEngNm", ds_FcodeInfo.getCellData(0, "col2"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "fareGrpCd", ds_FcodeInfo.getCellData(0, "col6"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "sellItemCd", ds_FcodeInfo.getCellData(0, "col4"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "vatYn", ds_FcodeInfo.getCellData(0, "col8"));
        vatgb = ds_FcodeInfo.getCellData(0, "col8");
        // CurrencyRateSetting
        // Tariff 적용은 KRW 로 적용한다.
        dsSelling.setCellData(dsSelling.getRowPosition(), "crcCd", dsTariff.getCellData(i, "curr"));
        scwin.f_CurrRateSetting(dsSelling.getRowPosition(), "crcCd", "Selling");
        scwin.f_PkgWegihtSetting(dsSelling.getRowPosition(), "fareEngCd", "Selling");
        curr = dsTariff.getCellData(i, "curr");
        rate = dsTariff.getCellData(i, "amount");
        type = dsTariff.getCellData(i, "type");
        var Amount = 0.00;
        if (curr == "KRW") {
          dsSelling.setCellData(dsSelling.getRowPosition(), "chgWt", chgWt);
          Amount = Math.round(chgWt * rate * 100) / 100;
          if (type == "Case") {
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellUpr", 0);
            dsSelling.setCellData(dsSelling.getRowPosition(), "trfUpr", 0);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", rate);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", 0);
          } else {
            // w/t
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellUpr", rate);
            dsSelling.setCellData(dsSelling.getRowPosition(), "trfUpr", rate);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", Amount);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", 0);
          }
          if (vatgb == 0) {
            //부가세 재 계산 
            dsSelling.setCellData(dsSelling.getRowPosition(), "vatAmt", 0);
          } else {
            dsSelling.setCellData(dsSelling.getRowPosition(), "vatAmt", Math.round(Amount * 0.1));
          }
        } else {
          //외화 경우 
          nUnit = scwin.f_Currency_Unit(curr);
          dsSelling.setCellData(dsSelling.getRowPosition(), "chgWt", chgWt);
          Amount = chgWt * rate;
          if (type == "Case") {
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellUpr", 0);
            dsSelling.setCellData(dsSelling.getRowPosition(), "trfUpr", 0);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", rate * exrate / nUnit);
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", rate);
          } else {
            // w/t
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellUpr", rate);
            dsSelling.setCellData(dsSelling.getRowPosition(), "trfUpr", rate);
            //dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", Amount * exrate / nUnit;
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", scwin.f_TruncAmount("1", Amount * exrate / nUnit));
            dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", Amount);
          }
          if (vatgb == 0) {
            //부가세 재 계산 
            dsSelling.setCellData(dsSelling.getRowPosition(), "vatAmt", 0);
          } else {
            dsSelling.setCellData(dsSelling.getRowPosition(), "vatAmt", 0);
          }
        }
      } // end for		

      break;
  }
};
scwin.f_AirOtherTariff = function (Gubun) {
  var kcomcd = scwin.hd_kcomcd;
  var on_avdt = ds_HouseFreightInfo.getCellData(0, "avdt"); //Onboard or Arrival Date 
  var from_na = ""; // 출발지  국가
  var to_na = ""; //도착지 국가
  var carrier = ds_HouseFreightInfo.getCellData(0, "carrier"); // 항공사 거래처 코드 
  var sellgb = ""; // selling 1,0
  var buygb = ""; //  Buying 1,0
  var iogb = "I";
  param1 = ds_HouseFreightInfo.getCellData(0, "dpcd"); // 출발지  국가
  param2 = "";
  scwin._execDataId(ds_AirportInfo, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveAirPortCode&param1=" + param1 + "&param2=" + param2);
  from_na = ds_AirportInfo.getCellData(0, "COL4");
  param1 = ds_HouseFreightInfo.getCellData(0, "dscd1"); //도착지 국가
  param2 = "";
  scwin._execDataId(ds_AirportInfo, "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveAirPortCode&param1=" + param1 + "&param2=" + param2);
  to_na = ds_AirportInfo.getCellData(0, "COL4");
  switch (Gubun) {
    // Air Other Buying Tariff 적용   		
    case "Buying":
      break;

    // Air Other Selling Tariff 적용   	
    case "Selling":
      sellgb = "1";
      buygb = "0";
      scwin._execDataId(ds_AirOtherTariff, "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoRetrieveAirOtherTariffList" + "&param1=" + kcomcd + "&param2=" + iogb + "&param3=" + sellgb + "&param4=" + buygb + "&param5=" + from_na + "&param6=" + to_na + "&param7=" + on_avdt + "&param8=" + carrier);
      break;
  }
};
scwin.f_AirTruckingTariff = function (Rows, Gubun) {
  //var kcomcd = scwin.hd_kcomcd;
  var adpt_dt = ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "avdt"); //Onboard or Arrival Date 
  var dpt_district_cd = ds_AirCustBookingCargoPickupList.getCellData(Rows, "fromDistrictCd"); // 출발지  지역
  var arv_district_cd = ds_AirCustBookingCargoPickupList.getCellData(Rows, "toDistrictCd"); //도착지 지역 
  var clnt_no = ds_AirCustBookingCargoPickupList.getCellData(Rows, "customerCd"); // 실화주 
  var trans_clnt_no = ds_AirCustBookingCargoPickupList.getCellData(Rows, "transCd"); // 운송사 
  var trans_cond_cd = ds_AirCustBookingCargoPickupList.getCellData(Rows, "transCondCd"); //  편도:1/왕복:2 
  var car_cond_cd = ds_AirCustBookingCargoPickupList.getCellData(Rows, "carCondCd"); // 차종 
  var sell_buy_typ = ""; //selling , buying 
  var full_yn = ds_AirCustBookingCargoPickupList.getCellData(Rows, "fullYn"); //독차 여부 0:1
  var wtBreak = ds_AirCustBookingCargoPickupList.getCellData(Rows, "cwht"); //weight  							     		

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
  scwin._execDataId(ds_AirTruckingTariff, "/cm.zz.RetrieveComboCMD.do?" + "sysCd=CoCommonEBC" + "&queryId=CoLclTransRateTairffList" + "&param1=" + dpt_district_cd + "&param2=" + arv_district_cd + "&param3=" + clnt_no + "&param4=" + trans_clnt_no + "&param5=" + trans_cond_cd + "&param6=" + car_cond_cd + "&param7=" + sell_buy_typ + "&param8=" + full_yn + "&param9=" + wtBreak + "&param10=" + adpt_dt);
};
scwin.f_AirTruckingTariffCalc = function (Rows, Gubun) {
  // 운임 계산 해줌
  var dsTariff = ds_AirTruckingTariff;
  var curr = "KRW";
  var rate = 0;
  var type = "";
  var exrate = ed_rate.getValue();
  //var chgWt = ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "tcwht");
  var chgWt = ds_AirCustBookingCargoPickupList.getCellData(Rows, "wtBreak"); //weight 
  var vatgb = "";
  var fcode = "";
  switch (Gubun) {
    case "Buying":
      var dsBuying = ds_BuyingFreightInfo;
      var nUnit = 1;
      var custcd = ""; // 운송사 
      var custnm = ""; // 운송사 
      var type = ds_AirCustBookingCargoPickupList.getCellData(Rows, "internalTyp");
      if (type == "Y") {
        //internal 경우 
        custcd = scwin.p_clntNo || "";
        custnm = scwin.p_clntNm || "";
      } else {
        custcd = ds_AirCustBookingCargoPickupList.getCellData(Rows, "transCd"); // 운송사 
        custnm = ds_AirCustBookingCargoPickupList.getCellData(Rows, "transNm"); // 운송사 
      }
      for (var i = 0; i < dsTariff.getRowCount(); i++) {
        fcode = 'BTCV';

        // 그리드 ROW 추가 해 준다  
        scwin.f_FreightCodeInfo(fcode, "");
        scwin.f_AddRow("Buying");
        dsBuying.setCellData(dsBuying.getRowPosition(), "pchsClntNo", custcd); // 운송사  
        dsBuying.setCellData(dsBuying.getRowPosition(), "pchsClntNm", custnm); // 운송사  						

        if (type == "Y") {
          dsBuying.setCellData(dsBuying.getRowPosition(), "pchsTyp", "3");
          dsBuying.setCellData(dsBuying.getRowPosition(), "sellDeptCd", scwin.p_lobranCd);
          dsBuying.setCellData(dsBuying.getRowPosition(), "sellDeptNm", scwin.p_lobranNm);
          gr_BuyingFreightInfo.setCellReadOnly(dsBuying.getRowPosition(), "sellDeptCd", false);
        } else {
          dsBuying.setCellData(dsBuying.getRowPosition(), "pchsTyp", "1");
        }
        dsBuying.setCellData(dsBuying.getRowPosition(), "fareEngCd", ds_FcodeInfo.getCellData(0, "col1"));
        dsBuying.setCellData(dsBuying.getRowPosition(), "fareEngNm", ds_FcodeInfo.getCellData(0, "col2"));
        dsBuying.setCellData(dsBuying.getRowPosition(), "fareGrpCd", ds_FcodeInfo.getCellData(0, "col6"));
        dsBuying.setCellData(dsBuying.getRowPosition(), "selpchItemCd", ds_FcodeInfo.getCellData(0, "col4"));
        dsBuying.setCellData(dsBuying.getRowPosition(), "vatYn", ds_FcodeInfo.getCellData(0, "col8"));
        vatgb = ds_FcodeInfo.getCellData(0, "col8");
        // CurrencyRateSetting
        // Tariff 적용은 KRW 로 적용한다.
        dsBuying.setCellData(dsBuying.getRowPosition(), "crcCd", curr);
        scwin.f_CurrRateSetting(dsBuying.getRowPosition(), "crcCd", "Buying");
        scwin.f_PkgWegihtSetting(dsBuying.getRowPosition(), "fareEngCd", "Buying");
        rate = dsTariff.getCellData(i, "transRate");
        var Amount = rate;
        dsBuying.setCellData(dsBuying.getRowPosition(), "chgWt", chgWt);
        dsBuying.setCellData(dsBuying.getRowPosition(), "pchsUpr", "1");
        dsBuying.setCellData(dsBuying.getRowPosition(), "trfUpr", "1");
        dsBuying.setCellData(dsBuying.getRowPosition(), "prtnAmt", Amount);
        dsBuying.setCellData(dsBuying.getRowPosition(), "pchsAmt", Amount);
        dsBuying.setCellData(dsBuying.getRowPosition(), "pchsAmtFcrc", 0);
        if (vatgb == 0) {
          //부가세 재 계산 zoot
          dsBuying.setCellData(dsBuying.getRowPosition(), "vatAmt", 0);
        } else {
          dsBuying.setCellData(dsBuying.getRowPosition(), "vatAmt", Math.round(Amount * 0.1));
        }
      } // end for		

      break;
    case "Selling":
      var dsSelling = ds_SellingFreightInfo;
      var nUnit = 1;
      var custcd = ds_AirCustBookingCargoPickupList.getCellData(Rows, "customerCd"); // 실화주 
      var custnm = ds_AirCustBookingCargoPickupList.getCellData(Rows, "customerNm"); // 실화주 

      for (var i = 0; i < dsTariff.getRowCount(); i++) {
        fcode = 'BTCV';

        // 그리드 ROW 추가 해 준다  
        scwin.f_FreightCodeInfo(fcode, "");
        scwin.f_AddRow("Selling");
        dsSelling.setCellData(dsSelling.getRowPosition(), "bilgClntNo", custcd); // 실화주  
        dsSelling.setCellData(dsSelling.getRowPosition(), "bilgClntNm", custnm); // 실화주  

        dsSelling.setCellData(dsSelling.getRowPosition(), "fareEngCd", ds_FcodeInfo.getCellData(0, "col1"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "fareEngNm", ds_FcodeInfo.getCellData(0, "col2"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "fareGrpCd", ds_FcodeInfo.getCellData(0, "col6"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "sellItemCd", ds_FcodeInfo.getCellData(0, "col4"));
        dsSelling.setCellData(dsSelling.getRowPosition(), "vatYn", ds_FcodeInfo.getCellData(0, "col8"));
        vatgb = ds_FcodeInfo.getCellData(0, "col8");
        // CurrencyRateSetting
        // Tariff 적용은 KRW 로 적용한다.
        dsSelling.setCellData(dsSelling.getRowPosition(), "crcCd", curr);
        scwin.f_CurrRateSetting(dsSelling.getRowPosition(), "crcCd", "Selling");
        scwin.f_PkgWegihtSetting(dsSelling.getRowPosition(), "fareEngCd", "Selling");
        rate = dsTariff.getCellData(i, "transRate");
        var Amount = rate;
        dsSelling.setCellData(dsSelling.getRowPosition(), "chgWt", chgWt);
        dsSelling.setCellData(dsSelling.getRowPosition(), "sellUpr", "1");
        dsSelling.setCellData(dsSelling.getRowPosition(), "trfUpr", "1");
        dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmt", Amount);
        dsSelling.setCellData(dsSelling.getRowPosition(), "sellAmtFcrc", 0);
        if (vatgb == 0) {
          //부가세 재 계산 zoot
          dsSelling.setCellData(dsSelling.getRowPosition(), "vatAmt", 0);
        } else {
          dsSelling.setCellData(dsSelling.getRowPosition(), "vatAmt", Math.round(Amount * 0.1));
        }
      } // end for		

      break;
  }
};
scwin.f_GridChangeValidate = function (ds, row, colId) {
  var val = Number(ds.getCellData(row, colId) || 0);
  if (val < 0) {
    ds.setCellData(row, colId, 0);
  }
};

//-------------------------------------------------------------------------
//Result date Change
//------------------------------------------------------------------------- 	
scwin.f_ResultdateChange = async function () {
  var opt = {
    width: "460",
    height: "280",
    popupName: "Result Date Change",
    modal: true,
    id: "pop_resultDateChange"
  };
  var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonResultDateChange.xml", opt, {});
  if (!$c.util.isEmpty($p, rtnList)) {
    if (rtnList[0] == "N/A") {
      await scwin.f_GridResultdateChange(rtnList);
    }
  }
};
scwin.f_GridResultdateChange = async function (rtnList) {
  if (scwin.tabIndex == "0") {
    // Selling 
    var ds_selling = ds_SellingFreightInfo;
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Selling Information"]); //  @이(가) 존재하지 않습니다.		
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_selling.getRowCount(); i++) {
          if ($c.str.trim($p, ds_selling.getCellData(i, "certiNo")) == "") {
            ds_selling.setCellData(i, "rsltsStdDt", rtnList[1]);
          }
        }
      }
    }
  } else if (scwin.tabIndex == "1") {
    //partner
    var ds_partner = ds_PartnerFreightInfo;
    if (ds_partner.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Partner Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_partner.getRowCount(); i++) {
          if ($c.str.trim($p, ds_partner.getCellData(i, "certiNo")) == "") {
            ds_partner.setCellData(i, "rsltsStdDt", rtnList[1]);
          }
        }
      }
    }
  } else if (scwin.tabIndex == "2") {
    // Buying 
    var ds_buying = ds_BuyingFreightInfo;
    if (ds_buying.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Buying Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_buying.getRowCount(); i++) {
          if ($c.str.trim($p, ds_buying.getCellData(i, "pchsCertiNo")) == "") {
            ds_buying.setCellData(i, "rsltsStdDt", rtnList[1]);
          }
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
//Customer Change 
//------------------------------------------------------------------------- 	
scwin.f_CustomerChange = async function () {
  var opt = {
    width: "460",
    popupName: "Customer Change",
    height: "280",
    modal: true,
    id: "pop_customerChange"
  };
  var rtnList = await $c.win.openPopup($p, "/ui/il/common/xml/ilCommonCustomerChange.xml", opt, {});
  if (!$c.util.isEmpty($p, rtnList)) {
    if (rtnList[0] == "N/A") {
      await scwin.f_GridCustomerChange(rtnList);
    }
  }
};
scwin.f_GridCustomerChange = async function (rtnList) {
  if (scwin.tabIndex == "0") {
    // Selling 
    var ds_selling = ds_SellingFreightInfo;
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Selling Information"]); //  @이(가) 존재하지 않습니다.		
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_selling.getRowCount(); i++) {
          if ($c.str.trim($p, ds_selling.getCellData(i, "certiNo")) == "") {
            if (ds_selling.getCellData(i, "bilgClntNo") == rtnList[1]) {
              ds_selling.setCellData(i, "bilgClntNo", rtnList[3]);
              ds_selling.setCellData(i, "bilgClntNm", rtnList[4]);
            }
          }
        }
      }
    }
  } else if (scwin.tabIndex == "1") {
    //partner
    var ds_partner = ds_PartnerFreightInfo;
    if (ds_partner.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Partner Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_partner.getRowCount(); i++) {
          if ($c.str.trim($p, ds_partner.getCellData(i, "certiNo")) == "") {
            if (ds_partner.getCellData(i, "bilgClntNo") == rtnList[1]) {
              ds_partner.setCellData(i, "bilgClntNo", rtnList[3]);
              ds_partner.setCellData(i, "bilgClntNm", rtnList[4]);
            }
          }
        }
      }
    }
  } else if (scwin.tabIndex == "2") {
    // Buying 
    var ds_buying = ds_BuyingFreightInfo;
    if (ds_buying.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Buying Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_buying.getRowCount(); i++) {
          if ($c.str.trim($p, ds_buying.getCellData(i, "pchsCertiNo")) == "") {
            if (ds_buying.getCellData(i, "pchsClntNo") == rtnList[1]) {
              ds_buying.setCellData(i, "pchsClntNo", rtnList[3]);
              ds_buying.setCellData(i, "pchsClntNm", rtnList[4]);
            }
          }
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
//Ex-rate Change 
//------------------------------------------------------------------------- 	
scwin.f_exRateChange = async function () {
  var nUnit = 1;
  nUnit = scwin.f_Currency_Unit(lc_cucd.getValue());
  if (scwin.tabIndex == "0") {
    // Selling 
    var ds_selling = ds_SellingFreightInfo;
    if (ds_selling.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Selling Information"]); //  @이(가) 존재하지 않습니다.		
    } else {
      if (await $c.win.confirm($p, "Do you wish to save?")) {
        //저장하시겠습니까?	

        /* 수정 20110718 by kimseok Ex-Rage Change 버튼으로 환종에 따른 금액 산출을 할때,
           기존에 그리드에 존재하는 전체 데이터가 산출되는것에서 그리드의 커서가 있는 데이터만 변경되는것으로 수정 
           기존 소스는 주석 처리 
        */
        /* 수정 20170801 by heejae Ex-Rage Change 버튼으로 환종에 따른 금액 산출을 할때,
            기존에 그리드에 존재하는 전체 데이터가 산출되는것으로 재변경
        */
        for (var i = 0; i < ds_selling.getRowCount(); i++) {
          if ($c.str.trim($p, ds_selling.getCellData(i, "certiNo")) == "") {
            if (ds_selling.getCellData(i, "crcCd") == lc_cucd.getValue()) {
              ds_selling.setCellData(i, "exRate", ed_rate.getValue()); //ex-rate 								
              if (ds_selling.getCellData(i, "crcCd") == "KRW") {
                //ds_selling.setCellData(i, "sellAmt", Math.round(ds_selling.getCellData(i, "chgWt") * ds_selling.getCellData(i, "sellUpr"));
              } else {
                ds_selling.setCellData(i, "sellAmt", Math.round(ds_selling.getCellData(i, "sellAmtFcrc") * ds_selling.getCellData(i, "exRate") / nUnit));
              }
              //vat	
              if (ds_selling.getCellData(i, "vatYn") == "0") {
                ds_selling.setCellData(i, "vatAmt", "0");
              } else {
                ds_selling.setCellData(i, "vatAmt", Math.round(ds_selling.getCellData(i, "sellAmt") * 0.1 * 100) / 100);
              }
            }
          }
        }
        /*
                if ($c.str.trim(ds_selling.getCellData(ds_selling.getRowPosition(), "certiNo")) == ""){	
            	
                    ds_selling.setCellData(ds_selling.getRowPosition(), "exRate", ed_rate.getValue());//ex-rate 
                	
                    if (ds_selling.getCellData(ds_selling.getRowPosition(), "crcCd") == "KRW") {
                        //ds_selling.setCellData(i, "sellAmt", Math.round(ds_selling.getCellData(i, "chgWt") * ds_selling.getCellData(i, "sellUpr"));
                    } else {
                        ds_selling.setCellData(ds_selling.getRowPosition(), "crcCd", lc_cucd.getValue());
                        ds_selling.setCellData(ds_selling.getRowPosition(), "sellAmt", Math.round( (ds_selling.getCellData(ds_selling.getRowPosition(), "sellAmtFcrc") )))
                                 * ds_selling.getCellData(ds_selling.getRowPosition(), "exRate")) / nUnit );					
                    }	
                    //vat	
                    if (ds_selling.getCellData(ds_selling.getRowPosition(), "vatYn") == "0") {
                        ds_selling.setCellData(ds_selling.getRowPosition(), "vatAmt", "0");
                    } else {
                        ds_selling.setCellData(ds_selling.getRowPosition(), "vatAmt", Math.round((ds_selling.getCellData(ds_selling.getRowPosition(), "sellAmt") * 0.1) * 100) / 100);
                    }
                }
                */
      }
    }
  } else if (scwin.tabIndex == "1") {
    //partner
    var ds_partner = ds_PartnerFreightInfo;
    if (ds_partner.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Partner Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	

        for (var i = 0; i < ds_partner.getRowCount(); i++) {
          if ($c.str.trim($p, ds_partner.getCellData(i, "certiNo")) == "") {
            if (ds_partner.getCellData(i, "crcCd") == lc_cucd.getValue()) {
              ds_partner.setCellData(i, "exRate", ed_rate.getValue()); //ex-rate 
              if (ds_partner.getCellData(i, "crcCd") == "KRW") {
                //ds_partner.setCellData(i, "sellAmt", Math.round(ds_partner.getCellData(i, "chgWt") * ds_partner.getCellData(i, "sellUpr"));
              } else {
                //									ds_partner.setCellData(i, "crcCd", lc_cucd.getValue();
                ds_partner.setCellData(i, "sellAmt", Math.round(ds_partner.getCellData(i, "sellAmtFcrc") * ds_partner.getCellData(i, "exRate") / nUnit));
              }
              //vat	
              if (ds_partner.getCellData(i, "vatYn") == "0") {
                ds_partner.setCellData(i, "vatAmt", "0");
              } else {
                ds_partner.setCellData(i, "vatAmt", Math.round(ds_partner.getCellData(i, "sellAmt") * 0.1 * 100) / 100);
              }
            }
          }
        }

        /*
            if (ds_partner.getCellData(ds_partner.getRowPosition(), "certiNo") == ""){	
        	
                ds_partner.setCellData(ds_partner.getRowPosition(), "exRate", ed_rate.getValue());//ex-rate 
                if (ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd") == "KRW") {
                    //ds_partner.setCellData(ds_partner.getRowPosition(), "sellAmt", Math.round(ds_partner.getCellData(i, "chgWt") * ds_partner.getCellData(i, "sellUpr"));
                } else {
                    ds_partner.setCellData(ds_partner.getRowPosition(), "crcCd", lc_cucd.getValue());
                    ds_partner.setCellData(ds_partner.getRowPosition(), "sellAmt", Math.round( (ds_partner.getCellData(ds_partner.getRowPosition(), "sellAmtFcrc") )))
                          * ds_partner.getCellData(ds_partner.getRowPosition(), "exRate")) / nUnit );			
                }
                //vat	
                if (ds_partner.getCellData(ds_partner.getRowPosition(), "vatYn") == "0") {
                    ds_partner.setCellData(ds_partner.getRowPosition(), "vatAmt", "0");
                } else {
                    ds_partner.setCellData(ds_partner.getRowPosition(), "vatAmt", Math.round((ds_partner.getCellData(ds_partner.getRowPosition(), "sellAmt") * 0.1) * 100) / 100);
                }	
            }
            */
      }
    }
  } else if (scwin.tabIndex == "2") {
    // Buying 
    var ds_buying = ds_BuyingFreightInfo;
    if (ds_buying.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["Buying Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_buying.getRowCount(); i++) {
          if ($c.str.trim($p, ds_buying.getCellData(i, "pchsCertiNo")) == "") {
            if (ds_buying.getCellData(i, "crcCd") == lc_cucd.getValue()) {
              ds_buying.setCellData(i, "exRate", ed_rate.getValue()); //ex-rate 
              if (ds_buying.getCellData(i, "crcCd") == "KRW") {
                //ds_buying.setCellData(i, "pchsAmt", Math.round(ds_buying.getCellData(i, "chgWt") * ds_buying.getCellData(i, "pchsUpr"));
              } else {
                //									ds_buying.setCellData(i, "crcCd", lc_cucd.getValue();
                ds_buying.setCellData(i, "pchsAmt", Math.round(ds_buying.getCellData(i, "pchsAmtFcrc") * ds_buying.getCellData(i, "exRate") / nUnit));
              }
              //vat	
              if (ds_buying.getCellData(i, "vatYn") == "0") {
                ds_buying.setCellData(i, "vat", "0");
              } else {
                ds_buying.setCellData(i, "vat", Math.round(ds_buying.getCellData(i, "pchsAmt") * 0.1 * 100) / 100);
              }
            }
          }
        }
        /*
           if (ds_buying.getCellData(ds_buying.getRowPosition(), "pchsCertiNo") == ""){	
               ds_buying.setCellData(ds_buying.getRowPosition(), "exRate", ed_rate.getValue());//ex-rate 
               if (ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd") == "KRW") {
                   //ds_buying.setCellData(i, "pchsAmt", Math.round(ds_buying.getCellData(i, "chgWt") * ds_buying.getCellData(i, "pchsUpr"));
               } else {
                   ds_buying.setCellData(ds_buying.getRowPosition(), "crcCd", lc_cucd.getValue());
                   ds_buying.setCellData(ds_buying.getRowPosition(), "pchsAmt", Math.round( (ds_buying.getCellData(ds_buying.getRowPosition(), "pchsAmtFcrc") )))
                          * ds_buying.getCellData(ds_buying.getRowPosition(), "exRate")) / nUnit );				
               }	
               //vat	
               if (ds_buying.getCellData(ds_buying.getRowPosition(), "vatYn") == "0") {
                   ds_buying.setCellData(ds_buying.getRowPosition(), "vat", "0");
               } else {
                   ds_buying.setCellData(ds_buying.getRowPosition(), "vat", Math.round((ds_buying.getCellData(ds_buying.getRowPosition(), "pchsAmt") * 0.1) * 100) / 100);
               }		
           }	
               */
      }
    }
  }
};

// 기존의 매출입 선조회 기능
scwin.f_RetrieveTmp = async function () {
  if (dma_tmpCnd) dma_tmpCnd.undo();
  if (ed_blnoTmp.getValue() == "") {
    await $c.win.alert($p, "선조회할 BL번호가 없습니다");
    return false;
  }
  dma_tmpCnd.set("blno", ed_blnoTmp.getValue());
  if (scwin.tabIndex == "0") {
    // Selling 
    dma_tmpCnd.set("rtrvTypCd", "SELLING");
    if (ds_SellingFreightInfo.getRowCount() > 0) {
      await $c.win.alert($p, "이미 매출이 등록된 건은 선조회 할 수 없습니다");
      return false;
    }
    await $c.sbm.execute($p, sbm_RetrieveTmp_Selling);
    scwin._applyRetrieveTmp(0);
  } else if (scwin.tabIndex == "1") {
    //partner
    dma_tmpCnd.set("rtrvTypCd", "PARTNER");
    if (ds_PartnerFreightInfo.getRowCount() > 0) {
      await $c.win.alert($p, "이미 PARTNER 실적이 등록된 건은 선조회 할 수 없습니다");
      return false;
    }
    await $c.sbm.execute($p, sbm_RetrieveTmp_Partner);
    scwin._applyRetrieveTmp(1);
  } else if (scwin.tabIndex == "2") {
    // Buying 
    dma_tmpCnd.set("rtrvTypCd", "BUYING");
    if (ds_BuyingFreightInfo.getRowCount() > 0) {
      await $c.win.alert($p, "이미 매입이 등록된 건은 선조회 할 수 없습니다");
      return false;
    }
    await $c.sbm.execute($p, sbm_RetrieveTmp_Buying);
    scwin._applyRetrieveTmp(2);
  }
};
scwin.f_copyBuying = function () {
  for (var i = 0; i < ds_BuyingFreightInfo.getTotalRow(); i++) {
    var selpchItemCd = ds_BuyingFreightInfo.getCellData(i, "selpchItemCd");
    /*
        BTCV 0503 -> BTC 0494 보세운송수수료
        BTFV 0502 -> BTF 0489 보세운송면허수수료
        ASTV 0458 -> AST 0483 STORAGE CHARGE
        ATCV 0505 -> ATC 0733 THC(TERMINAL HANDRING CHARGE)
        AEDV 0544 -> AED 0665 EDI CHARGE
    */

    //if(selpchItemCd == "0503" || selpchItemCd == "0502" || selpchItemCd == "0458" 
    //    || selpchItemCd == "0505" || selpchItemCd == "0544"  ){

    scwin.f_AddRow('Selling');
    //}

    var rowPosition = ds_SellingFreightInfo.getRowPosition();

    /* 수입담당 장미현 주임 요청으로 주석처리 */
    //ds_SellingFreightInfo.NameValue(rowPosition, "bilgClntNo") = "236576";  
    //ds_SellingFreightInfo.NameValue(rowPosition, "bilgClntNm") = "DONGBU HITEK CO.,LTD";

    ds_SellingFreightInfo.setCellData(rowPosition, "fareEngCd", ds_BuyingFreightInfo.getCellData(i, "fareEngCd"));
    ds_SellingFreightInfo.setCellData(rowPosition, "fareEngNm", ds_BuyingFreightInfo.getCellData(i, "fareEngNm"));
    ds_SellingFreightInfo.setCellData(rowPosition, "fareGrpCd", ds_BuyingFreightInfo.getCellData(i, "fareGrpCd"));
    ds_SellingFreightInfo.setCellData(rowPosition, "sellItemCd", ds_BuyingFreightInfo.getCellData(i, "selpchItemCd"));
    ds_SellingFreightInfo.setCellData(rowPosition, "crcCd", ds_BuyingFreightInfo.getCellData(i, "crcCd"));
    ds_SellingFreightInfo.setCellData(rowPosition, "qty", ds_BuyingFreightInfo.getCellData(i, "qty"));
    ds_SellingFreightInfo.setCellData(rowPosition, "grossWt", ds_BuyingFreightInfo.getCellData(i, "grossWt"));
    ds_SellingFreightInfo.setCellData(rowPosition, "sellUpr", ds_BuyingFreightInfo.getCellData(i, "pchsUpr"));
    ds_SellingFreightInfo.setCellData(rowPosition, "sellAmtFcrc", ds_BuyingFreightInfo.getCellData(i, "pchsAmtFcrc"));
    ds_SellingFreightInfo.setCellData(rowPosition, "vatYn", ds_BuyingFreightInfo.getCellData(i, "vatYn"));
    ds_SellingFreightInfo.setCellData(rowPosition, "chgWt", ds_BuyingFreightInfo.getCellData(i, "chgWt"));
    ds_SellingFreightInfo.setCellData(rowPosition, "exRate", ds_BuyingFreightInfo.getCellData(i, "exRate"));
    ds_SellingFreightInfo.setCellData(rowPosition, "sellAmt", ds_BuyingFreightInfo.getCellData(i, "pchsAmt"));
    ds_SellingFreightInfo.setCellData(rowPosition, "rsltsStdDt", ds_BuyingFreightInfo.getCellData(i, "rsltsStdDt"));
    ds_SellingFreightInfo.setCellData(rowPosition, "vatAmt", ds_BuyingFreightInfo.getCellData(i, "vat"));
  }
  scwin.f_selectTabMenu(0);
};
scwin.f_copyFromBuyingToSelling = async function () {
  // for (var i = 0; i < ds_BuyingFreightInfo.getRowCount(); i++) {
  //     scwin._insertRow(ds_SellingFreightInfo);
  //     scwin._copyRow(ds_BuyingFreightInfo, i, ds_SellingFreightInfo, ds_SellingFreightInfo.getRowPosition());
  // }
  if (ds_BuyingFreightInfo.getTotalRow() == 0 || ds_SellingFreightInfo.getTotalRow() > 0) {
    $c.win.alert($p, "buying 데이터가 없거나, selling 데이터가 이미 있는 경우는 해당 기능을 사용할 수 없습니다");
    return false;
  } else {
    dma_comCode.setEmptyValue();
    ds_SellingCode.setJSON([]);
    for (var i = 0; i < ds_BuyingFreightInfo.getTotalRow(); i++) {
      var code = ds_BuyingFreightInfo.getCellData(i, "fareEngCd");
      debugger;
      if (code.substring(code.length - 1) == "J") {
        scwin.f_AddRow("Selling");
        var param1 = code.substring(0, code.length - 1);
        dma_comCode.set("sysCd", "ilCommonEBC");
        dma_comCode.set("queryId", "retriveFreightCodeInfo");
        dma_comCode.set("param1", param1);
        e = await $c.sbm.execute($p, sbm_comCode);
        ds_SellingCode.setJSON(e.responseJSON.GAUCE[0]);
        rtn = e.responseJSON.GAUCE[0];
        ds_SellingFreightInfo.setCellData(i, "sellSeq", ds_BuyingFreightInfo.getCellData(i, "pchsSeq"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareEngCd", rtn.col1);
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellItemCd", rtn.col4);
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareEngNm", rtn.col2);
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareGrpCd", ds_BuyingFreightInfo.getCellData(i, "fareGrpCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "crcCd", ds_BuyingFreightInfo.getCellData(i, "crcCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "qty", ds_BuyingFreightInfo.getCellData(i, "qty"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "grossWt", ds_BuyingFreightInfo.getCellData(i, "grossWt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellUpr", ds_BuyingFreightInfo.getCellData(i, "pchsUpr"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellAmtFcrc", ds_BuyingFreightInfo.getCellData(i, "pchsAmtFcrc"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "vatYn", ds_BuyingFreightInfo.getCellData(i, "vatYn"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "chgWt", ds_BuyingFreightInfo.getCellData(i, "chgWt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "exRate", ds_BuyingFreightInfo.getCellData(i, "exRate"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellAmt", ds_BuyingFreightInfo.getCellData(i, "pchsAmt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "rsltsStdDt", ds_BuyingFreightInfo.getCellData(i, "rsltsStdDt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "vatAmt", ds_BuyingFreightInfo.getCellData(i, "vat"));
      } else if (code.substring(code.length - 1) == "K") {
        scwin.f_AddRow("Selling");
        var param1 = code.substring(0, code.length - 1) + "V";
        dma_comCode.set("sysCd", "ilCommonEBC");
        dma_comCode.set("queryId", "retriveFreightCodeInfo");
        dma_comCode.set("param1", param1);
        e = await $c.sbm.execute($p, sbm_comCode);
        rtn = e.responseJSON.GAUCE[0];
        ds_SellingFreightInfo.setCellData(i, "sellSeq", ds_BuyingFreightInfo.getCellData(i, "pchsSeq"));
        //		        	    dataSetDebug(ds_SellingFreightInfoCode, true);
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareEngCd", rtn.col1);
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellItemCd", rtn.col4);
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareEngNm", rtn.col2);
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareGrpCd", ds_BuyingFreightInfo.getCellData(i, "fareGrpCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "crcCd", ds_BuyingFreightInfo.getCellData(i, "crcCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "qty", ds_BuyingFreightInfo.getCellData(i, "qty"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "grossWt", ds_BuyingFreightInfo.getCellData(i, "grossWt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellUpr", ds_BuyingFreightInfo.getCellData(i, "pchsUpr"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellAmtFcrc", ds_BuyingFreightInfo.getCellData(i, "pchsAmtFcrc"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "vatYn", ds_BuyingFreightInfo.getCellData(i, "vatYn"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "chgWt", ds_BuyingFreightInfo.getCellData(i, "chgWt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "exRate", ds_BuyingFreightInfo.getCellData(i, "exRate"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellAmt", ds_BuyingFreightInfo.getCellData(i, "pchsAmt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "rsltsStdDt", ds_BuyingFreightInfo.getCellData(i, "rsltsStdDt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "vatAmt", ds_BuyingFreightInfo.getCellData(i, "vat"));
      } else {
        scwin.f_AddRow("Selling");
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareEngCd", ds_BuyingFreightInfo.getCellData(i, "fareEngCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareEngNm", ds_BuyingFreightInfo.getCellData(i, "fareEngNm"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "fareGrpCd", ds_BuyingFreightInfo.getCellData(i, "fareGrpCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellItemCd", ds_BuyingFreightInfo.getCellData(i, "selpchItemCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "crcCd", ds_BuyingFreightInfo.getCellData(i, "crcCd"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "qty", ds_BuyingFreightInfo.getCellData(i, "qty"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "grossWt", ds_BuyingFreightInfo.getCellData(i, "grossWt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellUpr", ds_BuyingFreightInfo.getCellData(i, "pchsUpr"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellAmtFcrc", ds_BuyingFreightInfo.getCellData(i, "pchsAmtFcrc"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "vatYn", ds_BuyingFreightInfo.getCellData(i, "vatYn"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "chgWt", ds_BuyingFreightInfo.getCellData(i, "chgWt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "exRate", ds_BuyingFreightInfo.getCellData(i, "exRate"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "sellAmt", ds_BuyingFreightInfo.getCellData(i, "pchsAmt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "rsltsStdDt", ds_BuyingFreightInfo.getCellData(i, "rsltsStdDt"));
        ds_SellingFreightInfo.setCellData(ds_SellingFreightInfo.getRowPosition(), "vatAmt", ds_BuyingFreightInfo.getCellData(i, "vat"));
      }
    }
  }
};
scwin.f_setupApi = function () {
  var sURL = "ftp://172.21.1.42:7000/Home/Setup/Setup_CarrierAPI.exe";
  window.open(sURL);
};
scwin.f_openApi = function () {
  var linecode = "";
  try {
    var objWSH = new ActiveXObject("WScript.Shell");
    var cmd = "C:\\dbexp_scrap1\\upgrade.exe job=invsearch2&linecode=" + linecode + "&no=" + (ed_mblno.getValue() || "") + "&bound=I&callerID=IH&hblno=" + (ed_blno.getValue() || "") + "&docuno=" + (lc_hmhno.getValue() || "");
    objWSH.Run(cmd, 1, true);
  } catch (e) {
    $c.win.alert($p, "API 실행을 지원하지 않는 환경입니다.");
  }
};
scwin.f_divPlus = function () {
  scwin.f_TotalCac("Selling");
};
scwin.f_divMinus = function () {
  scwin.f_TotalCac("Buying");
};
scwin.f_RunExcel = async function (dataId, gridId) {
  if ($c.data.getMatchedJSON($p, gridId).getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  $c.data.downloadGridViewExcel($p, {
    gridId: gridId,
    fileName: "freight.xls",
    sheetName: "Freight",
    startRowIndex: 2
  });
};
scwin.f_JobCloseYn = async function () {
  var preWrkNo = "FI01";
  var minRsltsDt = (scwin.strCurDate || "").substring(0, 6);
  for (var i = 0; i < ds_SellingFreightInfo.getRowCount(); i++) {
    var st = ds_SellingFreightInfo.getRowStatus(i);
    if (st == "C" || st == "I" || st == "1") {
      var rsltsStdDt = ds_SellingFreightInfo.getCellData(i, "rsltsStdDt");
      if (rsltsStdDt && rsltsStdDt.substring(0, 6) < minRsltsDt) {
        minRsltsDt = rsltsStdDt.substring(0, 6);
      }
      var isClose = await udc_chkRes.cfJobCloseYN("CUR", minRsltsDt, "00", preWrkNo, "0", "", "", "000");
      if (isClose == "2" || isClose == "DNF") {
        await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nSelling List Result Date를 확인하세요.");
        return false;
      }
    }
  }
  minRsltsDt = (scwin.strCurDate || "").substring(0, 6);
  for (var j = 0; j < ds_PartnerFreightInfo.getRowCount(); j++) {
    var st2 = ds_PartnerFreightInfo.getRowStatus(j);
    if (st2 == "C" || st2 == "I" || st2 == "1") {
      var rsltsStdDt2 = ds_PartnerFreightInfo.getCellData(j, "rsltsStdDt");
      if (rsltsStdDt2 && rsltsStdDt2.substring(0, 6) < minRsltsDt) {
        minRsltsDt = rsltsStdDt2.substring(0, 6);
      }
      var isClose2 = await udc_chkRes.cfJobCloseYN("CUR", minRsltsDt, "00", preWrkNo, "0", "", "", "000");
      if (isClose2 == "2" || isClose2 == "DNF") {
        await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nPartner List Result Date를 확인하세요.");
        return false;
      }
    }
  }
  minRsltsDt = (scwin.strCurDate || "").substring(0, 6);
  for (var k = 0; k < ds_BuyingFreightInfo.getRowCount(); k++) {
    var st3 = ds_BuyingFreightInfo.getRowStatus(k);
    if (st3 == "C" || st3 == "I" || st3 == "1") {
      var rsltsStdDt3 = ds_BuyingFreightInfo.getCellData(k, "rsltsStdDt");
      if (rsltsStdDt3 && rsltsStdDt3.substring(0, 6) < minRsltsDt) {
        minRsltsDt = rsltsStdDt3.substring(0, 6);
      }
      var isClose3 = await udc_chkRes.cfJobCloseYN("CUR", minRsltsDt, "00", preWrkNo, "0", "", "", "000");
      if (isClose3 == "2" || isClose3 == "DNF") {
        await $c.gus.cfAlertMsg($p, "회계마감 된 날짜로는 Result Date를 입력할 수 없습니다.  \nBuying List Result Date를 확인하세요.");
        return false;
      }
    }
  }
  return true;
};
scwin.setSeq = function (d, df, r, c) {
  return r + 1;
};

//-------------------------------------------------------------------------
// submission handlers
//-------------------------------------------------------------------------
scwin.sbm_default_submiterror = function (e) {
  if ($c.gus && $c.gus.cfShowError) {
    $c.gus.cfShowError($p, e);
    return;
  }
  if (e && e.errorMsg) {
    $c.win.alert($p, e.errorMsg);
    return;
  }
  if (e && e.responseText) {
    $c.win.alert($p, e.responseText);
    return;
  }
  $c.win.alert($p, "Error");
};
scwin.sbm_Save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  if (scwin.actionFlag == "Save") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001);
    await scwin.f_MhnoLoading();
  }
  if (scwin.actionFlag == "Delete") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004);
    ed_blno.setValue("");
    ds_hmhno.removeAll();
    ed_mblno.setValue("");
    ds_HouseFreightInfo.setJSON([]);
    ds_SellingFreightInfo.setJSON([]);
    ds_PartnerFreightInfo.setJSON([]);
    ds_BuyingFreightInfo.setJSON([]);
  }
  processFlag = "None";
  scwin.f_Retrieve();
  scwin.f_Set("SAVE");
};
scwin.sbm_Save_submiterror = function (e) {
  scwin.sbm_default_submiterror(e);
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  if (ds_HouseFreightInfo.getRowCount() == 0) {
    scwin.f_ProcessResult("None");
  } else {
    ds_HouseFreightInfo.setRowPosition(0);
    scwin.f_ProcessResult("FreightInfo");
  }
  if (scwin.v_linkcheck == 9) {
    scwin.f_Set("UPDATE");
    var rowCnt = parseInt(scwin.p_row_cnt || "0", 10);
    var data = scwin.p_data || "";
    var rtnValues = data ? data.split("$") : null;
    if (!rtnValues || rowCnt <= 0) return;
    for (var t = 0; t <= rowCnt - 1; t++) {
      rtnValues[t] = String(rtnValues[t] || "").split("_");
    }
    var k = ds_BuyingFreightInfo.getRowCount();
    for (var i = k; i < rtnValues.length + k - 1; i++) {
      scwin.f_AddRow("Buying");
      var row = ds_BuyingFreightInfo.getRowPosition();
      if (row < 0) row = 0;
      dma_frt_condition.set("fromCd", rtnValues[i - k][2] || "");
      await $c.sbm.execute($p, sbm_retrieve_frtMapping);
      if (ds_frtMapping.getRowCount() > 0) {
        ds_BuyingFreightInfo.setCellData(row, "fareEngCd", ds_frtMapping.getCellData(0, "toCd"));
        ds_BuyingFreightInfo.setCellData(row, "fareEngNm", ds_frtMapping.getCellData(0, "description"));
        ds_BuyingFreightInfo.setCellData(row, "selpchItemCd", ds_frtMapping.getCellData(0, "dtlCd1"));
        ds_BuyingFreightInfo.setCellData(row, "fareGrpCd", ds_frtMapping.getCellData(0, "dtlCd2"));
        ds_BuyingFreightInfo.setCellData(row, "vatYn", ds_frtMapping.getCellData(0, "dtlCd3"));
      }
      if (String(ds_BuyingFreightInfo.getCellData(row, "vatYn")) !== "0") {
        var baseAmt = parseFloat(rtnValues[i - k][6] || "0");
        ds_BuyingFreightInfo.setCellData(row, "vat", Math.round(baseAmt * 0.1 - 0.5));
      }
      if (gr_BuyingFreightInfo && gr_BuyingFreightInfo.focus) gr_BuyingFreightInfo.focus();
      if (gr_BuyingFreightInfo && gr_BuyingFreightInfo.setColumn) gr_BuyingFreightInfo.setColumn("pchsTyp");
      ds_BuyingFreightInfo.setCellData(row, "pchsClntNo", rtnValues[i - k][0]);
      ds_BuyingFreightInfo.setCellData(row, "pchsClntNm", rtnValues[i - k][1]);
      ds_BuyingFreightInfo.setCellData(row, "fareEngCd", rtnValues[i - k][2]);
      ds_BuyingFreightInfo.setCellData(row, "crcCd", rtnValues[i - k][3]);
      ds_BuyingFreightInfo.setCellData(row, "pchsAmtFcrc", rtnValues[i - k][4]);
      ds_BuyingFreightInfo.setCellData(row, "exRate", rtnValues[i - k][5]);
      ds_BuyingFreightInfo.setCellData(row, "pchsAmt", rtnValues[i - k][6]);
      ds_BuyingFreightInfo.setCellData(row, "chgWt", rtnValues[i - k][7]);
      ds_BuyingFreightInfo.setCellData(row, "pchsUpr", rtnValues[i - k][8]);
    }
    tab_main.setSelectedTabIndex(2);
  }
};
scwin.onpageload = function () {};
scwin.f_TruncAmount_backup = function (amount, step) {
  if (!step || step <= 0) return amount;
  return Math.floor(amount / step) * step;
};

//--------------------------------------------------------------------------
// Pre-Retrieve result (tmp)
//--------------------------------------------------------------------------
scwin._applyRetrieveTmp = function (tabIndex) {
  var dsHouse = ds_HouseFreightInfo;
  var houseRow = dsHouse.getRowPosition();
  if (houseRow < 0) houseRow = 0;
  if (scwin.tabIndex === 0) {
    // Selling
    var sCnt = ds_SellingFreightInfo.getRowCount();
    for (var i = 0; i < sCnt; i++) {
      ds_SellingFreightInfo.setCellData(i, "odrNo", dsHouse.getCellData(houseRow, "odrNo"));
      ds_SellingFreightInfo.setCellData(i, "kcomcd", scwin.hd_kcomcd);
      ds_SellingFreightInfo.setCellData(i, "seaAirCls", scwin.hd_seaAirCls);
      ds_SellingFreightInfo.setCellData(i, "blNo", $c.str.trim($p, ed_blno.getValue()));
      ds_SellingFreightInfo.setCellData(i, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
      ds_SellingFreightInfo.setCellData(i, "locPtnCls", "1");
      ds_SellingFreightInfo.setCellData(i, "mblHblCls", scwin.hd_mblHblCls);
      ds_SellingFreightInfo.setCellData(i, "drcrCls", "D");
      ds_SellingFreightInfo.setCellData(i, "rsltsStdDt", dsHouse.getCellData(houseRow, "cjdt"));
      if (ds_SellingFreightInfo.setRowStatus) ds_SellingFreightInfo.setRowStatus(i, "I");
    }
    $c.gus.cfDisableObjects($p, [btn_AddRowBuying, btn_DeleteRowBuying, btn_UndoRowBuying, btn_DeleteAllRowBuying]);
    $c.gus.cfDisableObjects($p, [btn_AddRowSelling, btn_DeleteRowSelling, btn_UndoRowSelling, btn_DeleteAllRowSelling]);
    $c.gus.cfDisableObjects($p, [btn_AddRowPartner, btn_DeleteRowPartner, btn_UndoRowPartner, btn_DeleteAllRowPartner]);
  } else if (scwin.tabIndex === 1) {
    // Partner
    var pCnt = ds_PartnerFreightInfo.getRowCount();
    for (var j = 0; j < pCnt; j++) {
      ds_PartnerFreightInfo.setCellData(j, "odrNo", dsHouse.getCellData(houseRow, "odrNo"));
      ds_PartnerFreightInfo.setCellData(j, "kcomcd", scwin.hd_kcomcd);
      ds_PartnerFreightInfo.setCellData(j, "seaAirCls", scwin.hd_seaAirCls);
      ds_PartnerFreightInfo.setCellData(j, "blNo", $c.str.trim($p, ed_blno.getValue()));
      ds_PartnerFreightInfo.setCellData(j, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
      ds_PartnerFreightInfo.setCellData(j, "locPtnCls", "2");
      ds_PartnerFreightInfo.setCellData(j, "mblHblCls", scwin.hd_mblHblCls);
      ds_PartnerFreightInfo.setCellData(j, "rsltsStdDt", dsHouse.getCellData(houseRow, "cjdt"));
      ds_PartnerFreightInfo.setCellData(j, "drcrCls", "C");
      if (ds_PartnerFreightInfo.setRowStatus) ds_PartnerFreightInfo.setRowStatus(j, "I");
    }
    $c.gus.cfDisableObjects($p, [btnObj2, btnObj2, btnObj2]);
  } else if (scwin.tabIndex === 2) {
    // Buying
    var bCnt = ds_BuyingFreightInfo.getRowCount();
    for (var k = 0; k < bCnt; k++) {
      ds_BuyingFreightInfo.setCellData(k, "odrNo", dsHouse.getCellData(houseRow, "odrNo"));
      ds_BuyingFreightInfo.setCellData(k, "kcomcd", scwin.hd_kcomcd);
      ds_BuyingFreightInfo.setCellData(k, "seaAirCls", scwin.hd_seaAirCls);
      ds_BuyingFreightInfo.setCellData(k, "blNo", $c.str.trim($p, ed_blno.getValue()));
      ds_BuyingFreightInfo.setCellData(k, "mhno", $c.str.trim($p, lc_hmhno.getValue()));
      ds_BuyingFreightInfo.setCellData(k, "locPtnCls", "1");
      ds_BuyingFreightInfo.setCellData(k, "mblHblCls", scwin.hd_mblHblCls);
      ds_BuyingFreightInfo.setCellData(k, "rsltsStdDt", dsHouse.getCellData(houseRow, "cjdt"));
      ds_BuyingFreightInfo.setCellData(k, "drcrCls", "C");
      ds_BuyingFreightInfo.setCellData(k, "pchsTyp", "1");
      if (ds_BuyingFreightInfo.setRowStatus) ds_BuyingFreightInfo.setRowStatus(k, "I");
    }
    $c.gus.cfDisableObjects($p, [grpBtn3, grpBtn3, grpBtn3]);
  }
};

//--------------------------------------------------------------------------
// Delete row
//--------------------------------------------------------------------------
scwin._deleteRowByStatus = function (ds, rowIndex) {
  if (!ds) return;
  if (ds.getRowStatus && ds.getRowStatus(rowIndex) === "C") {
    if (ds.removeRow) ds.removeRow(rowIndex);else ds.deleteRow(rowIndex);
  } else {
    ds.deleteRow(rowIndex);
  }
};
scwin._setGridOldValue = function (gridId, rowIndex, colId, value) {
  if (!scwin._gridOldValue[gridId]) scwin._gridOldValue[gridId] = {};
  scwin._gridOldValue[gridId][rowIndex + ":" + colId] = value;
};
scwin._getGridOldValue = function (gridId, rowIndex, colId) {
  if (!scwin._gridOldValue[gridId]) return "";
  var v = scwin._gridOldValue[gridId][rowIndex + ":" + colId];
  return v === undefined || v === null ? "" : v;
};
scwin.gr_SellingFreightInfo_onbeforeedit = function (rowIndex, columnIndex, value) {
  return;
  var colId = gr_SellingFreightInfo.getColumnID(columnIndex);
  scwin._setGridOldValue("gr_SellingFreightInfo", rowIndex, colId, value);
  switch (colId) {
    case "bilgClntNo":
      scwin.f_PopUpGrid("SellingCustomer", rowIndex, "F", "F", "F");
      return false;
    case "fareEngCd":
      scwin.f_PopUpGrid("SellingFreight", rowIndex, "F", "F", "F");
      return false;
    case "rsltsStdDt":
      if ($c.gus.cfOpenCalendar) $c.gus.cfOpenCalendar($p, gr_SellingFreightInfo, rowIndex, colId);
      return false;
    default:
      break;
  }
  return true;
};
scwin.gr_SellingFreightInfo_ontextimageclick = function (rowIndex, columnIndex) {
  var colId = gr_SellingFreightInfo.getColumnID(columnIndex);
  switch (colId) {
    case "bilgClntNo":
      scwin.f_PopUpGrid("SellingCustomer", rowIndex, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid("SellingFreight", rowIndex, "F", "F", "F");
      break;
    case "rsltsStdDt":
      if ($c.gus.cfOpenCalendar) $c.gus.cfOpenCalendar($p, gr_SellingFreightInfo, rowIndex, colId);
      break;
    default:
      break;
  }
};
scwin.gr_SellingFreightInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.actionFlag == "Update") {
    if (columnId == "fareEngNm") {
      // gr_SellingFreightInfo.setCellReadOnly(rowIndex, "fareEngNm", false);
    } else {
      // gr_SellingFreightInfo.setCellReadOnly(rowIndex, "fareEngNm", true);
    }
  }
};
scwin.gr_SellingFreightInfo_onviewchange = function (info) {
  let rowIndex = info.rowIndex;
  let colId = info.colId;
  let newValue = info.newValue;
  let oldValue = info.oldValue;

  // 1. 값이 변경되지 않았으면 실행하지 않음
  if (newValue === oldValue) return;
  switch (colId) {
    case "bilgClntNo":
      if (newValue !== "") {
        ds_SellingFreightInfo.setCellData(rowIndex, "bilgClntNm", "");
        scwin.f_PopUpGrid("SellingCustomer", rowIndex, "T", "F", "F");
      } else {
        ds_SellingFreightInfo.setCellData(rowIndex, "bilgClntNm", "");
        ds_SellingFreightInfo.setCellData(rowIndex, "bilgClntNo", "");
      }
      break;
    case "fareEngCd":
      if (newValue !== "") {
        ds_SellingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        scwin.f_PopUpGrid("SellingFreight", rowIndex, "T", "F", "F");

        // VAT(부가세) 계산 로직
        var vatYn = ds_SellingFreightInfo.getCellData(rowIndex, "vatYn");
        if (vatYn === "0") {
          ds_SellingFreightInfo.setCellData(rowIndex, "vatAmt", 0);
        } else {
          var sellAmt = Number(ds_SellingFreightInfo.getCellData(rowIndex, "sellAmt") || 0);
          // 소수점 2자리 반올림 로직
          var calcVat = Math.round(sellAmt * 0.1 * 100) / 100;
          ds_SellingFreightInfo.setCellData(rowIndex, "vatAmt", calcVat);
        }
      } else {
        ds_SellingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        ds_SellingFreightInfo.setCellData(rowIndex, "fareEngCd", "");
      }
      break;
  }

  // 2. 환율 정보 세팅 (Selling)
  if (colId === "crcCd") {
    scwin.f_CurrRateSetting(rowIndex, colId, "Selling");
  }

  // 3. 공통 무게 및 금액 계산 로직
  scwin.f_PkgWegihtSetting(rowIndex, colId, "Selling");

  // [특이로직] ATC, ATCV 자동 계산 (Selling용)
  if (colId === "fareEngCd") {
    if (newValue === "ATC" || newValue === "ATCV") {
      // 타 데이터셋(ds_HouseFreightInfo)의 현재 행에서 mftwht 값 참조
      var mftwht = Number(ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "mftwht") || 0);
      ds_SellingFreightInfo.setCellData(rowIndex, "crcCd", "KRW");
      ds_SellingFreightInfo.setCellData(rowIndex, "exRate", 1);
      ds_SellingFreightInfo.setCellData(rowIndex, "sellUpr", 1);
      ds_SellingFreightInfo.setCellData(rowIndex, "chgWt", mftwht);

      // 금액 계산: (Gweight * 41 + 2300), 소수점 버림 처리 (Math.floor 사용)
      var calcSellAmt = Math.floor(mftwht * 41 + 2300);
      ds_SellingFreightInfo.setCellData(rowIndex, "sellAmt", calcSellAmt);
      if (newValue === "ATCV") {
        // 가우스 원문에서는 pchsAmt를 참조하고 있으나, 
        // Selling 로직이므로 현재 행의 금액(calcSellAmt) 기준으로 계산하는 것이 일반적입니다.
        // 만약 원문 그대로 pchsAmt(매입금액)를 참조해야 한다면 getCellData("pchsAmt")를 사용하세요.
        var vatVal = Math.round(calcSellAmt * 0.1);
        ds_SellingFreightInfo.setCellData(rowIndex, "vat", vatVal);
      }
    }
  }

  // 4. 최종 금액/율 확정 함수 호출
  scwin.f_RateAmount(rowIndex, colId, "Selling", oldValue);
};
scwin.gr_SellingFreightInfo_onheaderclick = function (headerId) {
  if (headerId != "chk") return;
  var bCheck = gr_SellingFreightInfo.getHeaderValue(headerId);
  var val = bCheck === true || bCheck === "1" || bCheck === "true" ? "T" : "F";
  var cnt = ds_SellingFreightInfo.getRowCount();
  for (var i = 0; i < cnt; i++) {
    ds_SellingFreightInfo.setCellData(i, "chk", val);
  }
};
scwin.gr_PartnerFreightInfo_onbeforeedit = function (rowIndex, columnIndex, value) {
  return;
  var colId = gr_PartnerFreightInfo.getColumnID(columnIndex);
  scwin._setGridOldValue("gr_PartnerFreightInfo", rowIndex, colId, value);
  switch (colId) {
    case "bilgClntNo":
      scwin.f_PopUpGrid("PartnerCustomer", rowIndex, "F", "F", "F");
      return false;
    case "fareEngCd":
      scwin.f_PopUpGrid("PartnerFreight", rowIndex, "F", "F", "F");
      return false;
    case "rsltsStdDt":
      if ($c.gus.cfOpenCalendar) $c.gus.cfOpenCalendar($p, gr_PartnerFreightInfo, rowIndex, colId);
      return false;
    default:
      break;
  }
  return true;
};
scwin.gr_PartnerFreightInfo_ontextimageclick = function (rowIndex, columnIndex) {
  var colId = gr_PartnerFreightInfo.getColumnID(columnIndex);
  switch (colId) {
    case "bilgClntNo":
      scwin.f_PopUpGrid("PartnerCustomer", rowIndex, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid("PartnerFreight", rowIndex, "F", "F", "F");
      break;
    case "rsltsStdDt":
      if ($c.gus.cfOpenCalendar) $c.gus.cfOpenCalendar($p, gr_PartnerFreightInfo, rowIndex, colId);
      break;
    default:
      break;
  }
};
scwin.gr_PartnerFreightInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  // scwin.f_InvoiceCheck("Partner", rowIndex);
};
scwin.gr_PartnerFreightInfo_onviewchange = function (info) {
  debugger;
  let rowIndex = info.rowIndex;
  let colId = info.colId;
  let newValue = info.newValue;
  let oldValue = info.oldValue;

  // 1. 값이 변경되지 않았다면 로직 중단 (가우스의 if(ds... != olddata) 역할)
  if (newValue === oldValue) return;
  switch (colId) {
    case "bilgClntNo":
      if (newValue !== "") {
        // 코드가 입력/변경되면 명칭 초기화 후 팝업 호출
        ds_PartnerFreightInfo.setCellData(rowIndex, "bilgClntNm", "");
        scwin.f_PopUpGrid("PartnerCustomer", rowIndex, "T", "F", "F");
      } else {
        // 코드가 공백이 되면 명칭도 공백 처리
        ds_PartnerFreightInfo.setCellData(rowIndex, "bilgClntNm", "");
        ds_PartnerFreightInfo.setCellData(rowIndex, "bilgClntNo", "");
      }
      break;
    case "fareEngCd":
      if (newValue !== "") {
        ds_PartnerFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        scwin.f_PopUpGrid("PartnerFreight", rowIndex, "T", "F", "F");

        // VAT(부가세) 계산 로직
        var vatYn = ds_PartnerFreightInfo.getCellData(rowIndex, "vatYn");
        if (vatYn === "0") {
          ds_PartnerFreightInfo.setCellData(rowIndex, "vatAmt", 0);
        } else {
          var sellAmt = Number(ds_PartnerFreightInfo.getCellData(rowIndex, "sellAmt") || 0);
          // 소수점 2자리 반올림 (가우스 로직 유지)
          var calcVat = Math.round(sellAmt * 0.1 * 100) / 100;
          ds_PartnerFreightInfo.setCellData(rowIndex, "vatAmt", calcVat);
        }
      } else {
        ds_PartnerFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        ds_PartnerFreightInfo.setCellData(rowIndex, "fareEngCd", "");
      }
      break;
    case "crcCd":
      // 통화코드 변경 시 환율 정보 가져오기
      scwin.f_CurrRateSetting(rowIndex, colId, "Partner");
      break;
  }

  // 2. 공통 후속 처리 (값이 변했을 때만 실행)
  scwin.f_PkgWegihtSetting(rowIndex, colId, "Partner");
  scwin.f_RateAmount(rowIndex, colId, "Partner", oldValue);
};
scwin.gr_PartnerFreightInfo_onheaderclick = function (headerId) {
  if (headerId != "chk") return;
  var bCheck = gr_PartnerFreightInfo.getHeaderValue(headerId);
  var val = bCheck === true || bCheck === "1" || bCheck === "true" ? "T" : "F";
  var cnt = ds_PartnerFreightInfo.getRowCount();
  for (var i = 0; i < cnt; i++) {
    ds_PartnerFreightInfo.setCellData(i, "chk", val);
  }
};
scwin.gr_BuyingFreightInfo_onbeforeedit = async function (rowIndex, columnIndex, value) {
  return;
  var colId = gr_BuyingFreightInfo.getColumnID(columnIndex);
  await $c.win.alert($p, value);
  scwin._setGridOldValue("gr_BuyingFreightInfo", rowIndex, colId, value);
  switch (colId) {
    case "pchsClntNo":
      scwin.f_PopUpGrid("BuyingCustomer", rowIndex, "F", "F", "F");
      return false;
    case "fareEngCd":
      scwin.f_PopUpGrid("BuyingFreight", rowIndex, "F", "F", "F");
      return false;
    case "sellDeptCd":
      scwin.f_PopUpGrid("BuyingInnerDept", rowIndex, "F", "F", "F");
      return false;
    //case "rsltsStdDt":
    //	if ($c.gus.cfOpenCalendar) $c.gus.cfOpenCalendar(gr_BuyingFreightInfo, rowIndex, colId);
    //		return false;
    default:
      break;
  }
  return true;
};
scwin.gr_BuyingFreightInfo_ontextimageclick = function (rowIndex, columnIndex) {
  var colId = gr_BuyingFreightInfo.getColumnID(columnIndex);
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
    case "rsltsStdDt":
      if ($c.gus.cfOpenCalendar) $c.gus.cfOpenCalendar($p, gr_BuyingFreightInfo, rowIndex, colId);
      break;
    default:
      break;
  }
};
scwin.gr_BuyingFreightInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  // scwin.f_InvoiceCheck("Buying", rowIndex);
};
scwin.gr_BuyingFreightInfo_onviewchange = function (info) {
  let rowIndex = info.rowIndex;
  let colId = info.colId;
  let newValue = info.newValue;
  let oldValue = info.oldValue;

  // 1. 값이 변하지 않았으면 리턴
  if (newValue === oldValue) return;
  switch (colId) {
    case "pchsClntNo":
      if (newValue !== "") {
        ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNm", "");
        scwin.f_PopUpGrid("BuyingCustomer", rowIndex, "T", "F", "F");
      } else {
        ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNm", "");
        ds_BuyingFreightInfo.setCellData(rowIndex, "pchsClntNo", "");
      }
      break;
    case "fareEngCd":
      if (newValue !== "") {
        ds_BuyingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        scwin.f_PopUpGrid("BuyingFreight", rowIndex, "T", "F", "F");

        // 과세 여부에 따른 부가세 계산
        var vatYn = ds_BuyingFreightInfo.getCellData(rowIndex, "vatYn");
        if (vatYn === "0") {
          ds_BuyingFreightInfo.setCellData(rowIndex, "vat", 0);
        } else {
          var pchsAmt = Number(ds_BuyingFreightInfo.getCellData(rowIndex, "pchsAmt") || 0);
          // 소수점 2자리 반올림 (가우스 Math.round(val * 100) / 100 로직)
          var calcVat = Math.round(pchsAmt * 0.1 * 100) / 100;
          ds_BuyingFreightInfo.setCellData(rowIndex, "vat", calcVat);
        }
      } else {
        ds_BuyingFreightInfo.setCellData(rowIndex, "fareEngNm", "");
        ds_BuyingFreightInfo.setCellData(rowIndex, "fareEngCd", "");
      }
      break;
    case "sellDeptCd":
      if (newValue !== "") {
        ds_BuyingFreightInfo.setCellData(rowIndex, "sellDeptNm", "");
        scwin.f_PopUpGrid("BuyingInnerDept", rowIndex, "T", "F", "F");
      } else {
        ds_BuyingFreightInfo.setCellData(rowIndex, "sellDeptNm", "");
        ds_BuyingFreightInfo.setCellData(rowIndex, "sellDeptCd", "");
      }
      break;
  }

  // 2. 환율 정보 세팅
  if (colId === "crcCd") {
    scwin.f_CurrRateSetting(rowIndex, colId, "Buying");
  }

  // 3. 무게 및 금액 재계산 로직
  scwin.f_PkgWegihtSetting(rowIndex, colId, "Buying");

  // [특이로직] ATC, ATCV 자동 계산 부분
  if (colId === "fareEngCd") {
    if (newValue === "ATC" || newValue === "ATCV") {
      // 타 데이터셋(ds_HouseFreightInfo)의 현재 행에서 mftwht 값을 가져옴
      var mftwht = Number(ds_HouseFreightInfo.getCellData(ds_HouseFreightInfo.getRowPosition(), "mftwht") || 0);
      ds_BuyingFreightInfo.setCellData(rowIndex, "crcCd", "KRW");
      ds_BuyingFreightInfo.setCellData(rowIndex, "exRate", 1);
      ds_BuyingFreightInfo.setCellData(rowIndex, "pchsUpr", 1);
      ds_BuyingFreightInfo.setCellData(rowIndex, "chgWt", mftwht);

      // 금액 계산: (Gweight * 41 + 2300), 소수점 버림 처리
      // 가우스의 Math.round(val - 0.5)는 자바스크립트의 Math.floor()와 유사하게 버림으로 작동함
      var calcPchsAmt = Math.floor(mftwht * 41 + 2300);
      ds_BuyingFreightInfo.setCellData(rowIndex, "pchsAmt", calcPchsAmt);
      if (newValue === "ATCV") {
        // ATCV일 경우 부가세 별도 계산 (소수점 버림)
        var calcAtcVat = Math.floor(calcPchsAmt * 0.1);
        ds_BuyingFreightInfo.setCellData(rowIndex, "vat", calcAtcVat);
      }
    }
  }

  // 최종 금액/율 계산 함수 호출
  scwin.f_RateAmount(rowIndex, colId, "Buying", oldValue);
  gr_BuyingFreightInfo.setFocusedCell(rowIndex, "crcCd");
};
scwin.gr_BuyingFreightInfo_onheaderclick = function (headerId) {
  if (headerId != "chk") return;
  var bCheck = gr_BuyingFreightInfo.getHeaderValue(headerId);
  var val = bCheck === true || bCheck === "1" || bCheck === "true" ? "T" : "F";
  var cnt = ds_BuyingFreightInfo.getRowCount();
  for (var i = 0; i < cnt; i++) {
    ds_BuyingFreightInfo.setCellData(i, "chk", val);
  }
};

//--------------------------------------------------------------------------
// Sync ex-rate from house info
//--------------------------------------------------------------------------
scwin._syncExRateFromHouse = function () {
  if (!ds_HouseFreightInfo || ds_HouseFreightInfo.getRowCount() === 0) return;
  var row = ds_HouseFreightInfo.getRowPosition();
  if (row < 0) row = 0;
  var rate = ds_HouseFreightInfo.getCellData(row, "rate");
  if (rate != null && rate !== "" && rate !== "0") {
    scwin.exRate1 = rate;
    scwin.crc = ds_HouseFreightInfo.getCellData(row, "cucd");
    scwin.exRateCheck = "3";
  }
  var exrate = ds_HouseFreightInfo.getCellData(row, "exrate");
  if (exrate != null && exrate !== "" && exrate !== "0") {
    scwin.exRate2 = exrate;
  }
};

//--------------------------------------------------------------------------
// Sync hidden fields (from/to house info)
//--------------------------------------------------------------------------
scwin._syncHiddenFromHouse = function () {
  if (!ds_HouseFreightInfo || ds_HouseFreightInfo.getRowCount() === 0) return;
  var row = ds_HouseFreightInfo.getRowPosition();
  if (row < 0) row = 0;
  scwin.hd_kcomcd = ds_HouseFreightInfo.getCellData(row, "kcomcd") || scwin.hd_kcomcd || "";
  scwin.hd_iogb = ds_HouseFreightInfo.getCellData(row, "iogb") || scwin.hd_iogb || "";
};
scwin._syncHiddenToHouse = function () {
  if (!ds_HouseFreightInfo || ds_HouseFreightInfo.getRowCount() === 0) return;
  var row = ds_HouseFreightInfo.getRowPosition();
  if (row < 0) row = 0;
  ds_HouseFreightInfo.setCellData(row, "kcomcd", scwin.hd_kcomcd);
  ds_HouseFreightInfo.setCellData(row, "iogb", scwin.hd_iogb);
};

//--------------------------------------------------------------------------
// Field events (blur)
//--------------------------------------------------------------------------
scwin.ed_blno_onblur = function (e) {
  ed_blno.setValue(ed_blno.getValue().toUpperCase());
  scwin.f_MhnoLoading();
};
scwin.ed_rate_onblur = function (e) {
  if (scwin.exRateCheck == "1") {
    if ($c.str.trim($p, ed_exrate.getValue()) === "" || ed_exrate.getValue() == "0") {
      ed_exrate.setValue(ed_rate.getValue());
    }
    scwin.exRate1 = ed_rate.getValue();
    scwin.crc = $c.str.trim($p, lc_cucd.getValue());
  }
};
scwin.ed_exrate_onblur = function (e) {
  if (scwin.exRateCheck == "1") {
    scwin.exRate2 = ed_exrate.getValue();
  }
};
scwin._pick = function (obj, path, fallback) {
  if (!path) return obj == undefined ? fallback : obj;
  var cur = obj;
  var parts = Array.isArray(path) ? path : String(path).split(".");
  for (var i = 0; i < parts.length; i++) {
    if (cur == null) return fallback;
    cur = cur[parts[i]];
  }
  return cur == undefined ? fallback : cur;
};
scwin._applyToDataList = function (dl, data) {
  if (!dl) return;
  if (dl.setJSON) {
    dl.setJSON(data);
    return;
  }
  throw new Error("Target DataList has no setJSON()");
};
scwin._comboQueue = Promise.resolve();
scwin.execComboAndCopy = function (params, options) {
  options = options || {};
  var target = options.target;
  var responsePath = options.responsePath || "GAUCE";
  var transform = options.transform;
  if (!target) throw new Error("options.target(DataList) is required");
  scwin._comboQueue = scwin._comboQueue.then(function () {
    dma_comCode.setJSON(params);
    return async function () {
      return await $c.sbm.execute($p, sbm_comCode).then(function (e) {
        var json = e && e.responseJSON ? e.responseJSON : {};
        var data = scwin._pick(json, responsePath, null);
        if (transform) data = transform(data, e);
        scwin._applyToDataList(target, data);
        return e;
      });
    }();
  });
  scwin._comboQueue = scwin._comboQueue.catch(function () {});
  return scwin._comboQueue;
};
scwin._parseQuery = function (url) {
  var idx = String(url || "").indexOf("?");
  if (idx < 0) return {};
  var q = url.substring(idx + 1);
  var obj = {};
  var parts = q.split("&");
  for (var i = 0; i < parts.length; i++) {
    if (!parts[i]) continue;
    var kv = parts[i].split("=");
    var key = decodeURIComponent(kv[0] || "");
    var val = decodeURIComponent((kv[1] || "").replace(/\+/g, " "));
    obj[key] = val;
  }
  return obj;
};
scwin._execDataId = async function (ds, url) {
  var q = scwin._parseQuery(url);
  var params = {
    sysCd: q.sysCd || "",
    queryId: q.queryId || "",
    param1: q.param1 || "",
    param2: q.param2 || "",
    param3: q.param3 || "",
    param4: q.param4 || "",
    param5: q.param5 || "",
    param6: q.param6 || "",
    param7: q.param7 || "",
    param8: q.param8 || "",
    param9: q.param9 || "",
    param10: q.param10 || "",
    param11: q.param11 || "",
    param12: q.param12 || "",
    param13: q.param13 || "",
    param14: q.param14 || ""
  };
  if (scwin._isDataMap(ds)) {
    ds.undo();
  } else if (ds && ds.removeAll) {
    ds.removeAll();
  }
  return await scwin.execComboAndCopy(params, {
    target: ds
  });
};
scwin._insertRow = function (ds) {
  if (!ds || !ds.insertRow || !ds.getRowCount) return;
  ds.insertRow(ds.getRowCount());
};
scwin._gridOldValue = {};
scwin._setGridOldValue = function (gridId, rowIndex, colId, value) {
  if (!scwin._gridOldValue[gridId]) scwin._gridOldValue[gridId] = {};
  scwin._gridOldValue[gridId][rowIndex + ":" + colId] = value;
};
scwin._getGridOldValue = function (gridId, rowIndex, colId) {
  if (!scwin._gridOldValue[gridId]) return "";
  var v = scwin._gridOldValue[gridId][rowIndex + ":" + colId];
  return v === undefined || v === null ? "" : v;
};
scwin._copyRow = function (src, sRow, tgt, tRow) {
  if (!src || !tgt) return;
  if ($c.gus && $c.gus.f_CopyDataRow) {
    $c.gus.f_CopyDataRow($p, src, sRow, tgt, tRow);
    return;
  }
  if (!src.getCellData || !tgt.setCellData || !src.getColumnCount || !src.getColumnID) return;
  for (var i = 0; i < src.getColumnCount(); i++) {
    var colId = src.getColumnID(i);
    tgt.setCellData(tRow, colId, src.getCellData(sRow, colId));
  }
};
scwin._num = function (v) {
  var n = parseFloat(v);
  return isNaN(n) ? 0 : n;
};
scwin._row = function (ds) {
  var r = ds && ds.getRowPosition ? ds.getRowPosition() : 0;
  return r < 0 ? 0 : r;
};

//--------------------------------------------------------------------------
// Open program
//--------------------------------------------------------------------------
scwin._openMenu = function (title, path, menuId, param) {
  $c.win.openMenu($p, title, path, menuId, param || {});
};

//--------------------------------------------------------------------------
// Click handlers
//--------------------------------------------------------------------------
scwin.pu_MasterLink_onclick = function (e) {
  scwin.f_openPgm("Mawb");
};
scwin.pu_Find_onclick = function (e) {
  scwin.f_openPgm("Find");
};
scwin.pu_HouseLink_onclick = function (e) {
  scwin.f_openPgm("Main");
};
scwin.pu_CustInv_onclick = function (e) {
  scwin.f_openPgm("Inv");
};
scwin.pu_PartnerInv_onclick = function (e) {
  scwin.f_openPgm("PartnerInv");
};
scwin.pu_PaymentInv_onclick = function (e) {
  scwin.f_openPgm("PayInv");
};
scwin.pu_ArrivalNotice_onclick = function (e) {
  scwin.f_openPgm("AN");
};
scwin.pu_Plsheet_onclick = function (e) {
  scwin.f_openPgm("PL");
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_FieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_copyBuying_onclick = function (e) {
  if (scwin.f_copyBuying) scwin.f_copyBuying();
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_Update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.pu_Tariff_onclick = function (e) {
  if (scwin.f_Tariff) scwin.f_Tariff();
};
scwin.pu_CustomerChange_onclick = function (e) {
  if (scwin.f_CustomerChange) scwin.f_CustomerChange();
};
scwin.pu_exRateChange_onclick = function (e) {
  if (scwin.f_exRateChange) scwin.f_exRateChange();
};
scwin.pu_ResultdateChange_onclick = function (e) {
  if (scwin.f_ResultdateChange) scwin.f_ResultdateChange();
};
scwin.f_AddRow1 = function (e) {
  scwin.f_AddRowMulti('Selling');
};
scwin.f_DeleteRow1 = function (e) {
  scwin.f_DeleteRow('Selling');
};
scwin.f_removeAllRow1 = function (e) {
  scwin.f_removeAllRow('Selling');
};
scwin.f_UndoRow1 = function (e) {
  scwin.f_UndoRow('Selling');
};
scwin.f_AddRow2 = function (e) {
  scwin.f_AddRowMulti('Partner');
};
scwin.f_DeleteRow2 = function (e) {
  scwin.f_DeleteRow('Partner');
};
scwin.f_removeAllRow2 = function (e) {
  scwin.f_removeAllRow('Partner');
};
scwin.f_UndoRow2 = function (e) {
  scwin.f_UndoRow('Partner');
};
scwin.f_AddRow3 = function (e) {
  scwin.f_AddRowMulti('Buying');
};
scwin.f_DeleteRow3 = function (e) {
  scwin.f_DeleteRow('Buying');
};
scwin.f_removeAllRow3 = function (e) {
  scwin.f_removeAllRow('Buying');
};
scwin.f_UndoRow3 = function (e) {
  scwin.f_UndoRow('Buying');
};
scwin.ed_exdt_onblur = async function (e) {
  var param1 = lc_cucd.getValue();
  var param2 = ed_exdt.getValue();
  var param3 = lc_exgb.getValue();
  if (ed_rate.getValue() == "") {
    ed_rate.setValue(0);
  }
  if (ed_exrate.getValue() == "") {
    ed_exrate.setValue(0);
  }

  //이규복씨가 무조건 환율 적용 되게 수정 요청 함 
  //if (ed_rate.getValue() == 0 ){
  await scwin.f_ExrateLoading(param1, param2, param3);
  //}

  if (ds_ExRate.getTotalRow() > 0) {
    ed_rate.setValue(ds_ExRate.getCellData(0, "code"));
    ed_exrate.setValue(ds_ExRate.getCellData(0, "name"));
    scwin.exRateCheck = "2";
    scwin.exRate1 = ed_rate.getValue();
    scwin.exRate2 = ed_exrate.getValue();
    scwin.crc = lc_cucd.getValue();
  } else {
    // $c.gus.cfAlertMsg(E_MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다. 
    await $c.win.alert($p, "Ex-Rate does not exist.");
    scwin.exRateCheck = "1";
    ed_rate.setValue(1);
    ed_exrate.setValue(1);
  }
};
scwin.ds_hmhno_ondataload = function () {
  if (scwin.linkType == "BL_LINK") {
    scwin.linkType = "";
    scwin.f_Retrieve();
  } else if (scwin.linkType == "API_LINK") {
    scwin.linkType = "";
    scwin.f_Retrieve();
  }
};
scwin.tab_main_onchange = function (tabId, index, userTabId) {
  scwin.tabIndex = index;
};

//--------------------------------------------------------------------------
// DataList cell change events
//--------------------------------------------------------------------------
scwin.ds_SellingFreightInfo_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var colId = info.colId;
  if (colId == "chgWt") {
    scwin.f_GridChangeValidate(ds_SellingFreightInfo, row, colId);
  }
  scwin.f_pcSummery();
  scwin.f_TotalCac("Selling");
};
scwin.ds_PartnerFreightInfo_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var colId = info.colId;
  if (colId == "chgWt") {
    scwin.f_GridChangeValidate(ds_PartnerFreightInfo, row, colId);
  }
  scwin.f_pcSummery();
  scwin.f_TotalCac("Partner");
};
scwin.ds_BuyingFreightInfo_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var colId = info.colId;
  if (colId == "chgWt") {
    scwin.f_GridChangeValidate(ds_BuyingFreightInfo, row, colId);
  } else if (colId == "pchsTyp") {
    if (ds_BuyingFreightInfo.getCellData(row, "pchsTyp") == "3") {
      if ($c.str.trim($p, ds_BuyingFreightInfo.getCellData(row, "pchsClntNo")) === "") {
        ds_BuyingFreightInfo.setCellData(row, "pchsClntNo", scwin.p_clntNo || "");
        ds_BuyingFreightInfo.setCellData(row, "pchsClntNm", scwin.p_clntNm || "");
      }
    }
  }
  scwin.f_TotalCac("Buying");
};
scwin.ds_SellingFreightInfo_oninsertrow = function (info) {
  ed_totalRow1.setValue(ds_SellingFreightInfo.getTotalRow());
};
scwin.ds_SellingFreightInfo_onremoverow = function (info) {
  ed_totalRow1.setValue(ds_SellingFreightInfo.getTotalRow());
};
scwin.ds_PartnerFreightInfo_oninsertrow = function (info) {
  ed_totalRow2.setValue(ds_PartnerFreightInfo.getTotalRow());
};
scwin.ds_PartnerFreightInfo_onremoverow = function (info) {
  ed_totalRow2.setValue(ds_PartnerFreightInfo.getTotalRow());
};
scwin.ds_BuyingFreightInfo_oninsertrow = function (info) {
  ed_totalRow3.setValue(ds_BuyingFreightInfo.getTotalRow());
};
scwin.ds_BuyingFreightInfo_onremoverow = function (info) {
  ed_totalRow3.setValue(ds_BuyingFreightInfo.getTotalRow());
};
scwin.gr_SellingFreightInfo_oneditkeyup = function (info) {
  event.target.value = info.newValue.toUpperCase();
};
scwin.gr_PartnerFreightInfo_oneditkeyup = function (info) {
  event.target.value = info.newValue.toUpperCase();
};
scwin.gr_BuyingFreightInfo_oneditkeyup = function (info) {
  event.target.value = info.newValue.toUpperCase();
};
scwin.f_CancelRow1 = function () {
  scwin.f_cancelRow(1);
};
scwin.f_CancelRow2 = function () {
  scwin.f_cancelRow(2);
};
scwin.f_CancelRow3 = function () {
  scwin.f_cancelRow(3);
};
scwin.f_cancelRow = function (divn) {
  var ds;
  if (divn == 1) ds = ds_SellingFreightInfo;else if (divn == 2) ds = ds_PartnerFreightInfo;else if (divn == 3) ds = ds_BuyingFreightInfo;else return;
  for (var i = ds.getTotalRow() - 1; i >= 0; i--) {
    if (ds.getRowStatus(i) == "C") {
      ds.removeRow(i);
    } else {
      ds.undoRow(i);
    }
  }
};
scwin.setEmpty = function (d, fd, r, c) {
  if (c == 10 || c == 14 || c == 15) if (d == "") return "0";
  if (d == "") return "0.00";
  return fd;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_blno',style:';text-transform:uppercase;',ref:'',editType:'select','ev:onviewchange':'scwin.ed_blno_onblur',maxlength:'20',allowChar:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consol No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_hmhno',search:'start',style:'',submenuSize:'auto',ref:'',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mblno',class:' w150',ref:'data:ds_HouseFreightInfo.mblno',editType:'select',adjustMaxLength:'true',maxlength:'20',displayFormat:'###-#################',editFormat:'XXX-XXXXXXXXXXXXXXXXX',objType:'data'}},{T:1,N:'xf:trigger',A:{style:'',id:'pu_MasterLink',type:'button',class:'btn link','ev:onclick':'scwin.pu_MasterLink_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Master B/L'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'retrieveEngClntInfo',style:'display:none','ev:onblurCodeEvent':'scwin.udc_udc_ilcomCode_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_udc_ilcomCode_onblurNameEvent'}},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'display : none;'}}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'display : none;',id:'udc_chkRes'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'f_FieldClear',style:'',type:'button','ev:onclick':'scwin.btn_FieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger1',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Currency ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_cucd',class:' w150',ref:'data:ds_HouseFreightInfo.cucd',objType:'data',emptyItem:'true',emptyIndex:'-1'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_exgb',class:' w150',ref:'data:ds_HouseFreightInfo.exgb',allOption:'',chooseOption:'',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T Buying'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T Selling'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Ex-Rate Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_exdt',style:'text-align: left;',ref:'data:ds_HouseFreightInfo.exdt','ev:onblur':'scwin.ed_exdt_onblur',editType:'select',placeholder:'입력',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_rate',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.rate',dataType:'number',maxlength:'15.2',adjustMaxLength:'true',objType:'data',displayFormat:'#,###.##','ev:onviewchange':'scwin.ed_rate_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'US Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_exrate',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.exrate',dataType:'number',maxlength:'15.2',adjustMaxLength:'true',objType:'data',displayFormat:'#,###.##','ev:onviewchange':'scwin.ed_exrate_onblur'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tab_main',style:'','ev:onchange':'scwin.tab_main_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'Selling',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'Partner',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'Buying'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Selling List',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"selling list.xlsx","type":"4+8+16"}',gridID:'gr_SellingFreightInfo',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_SellingFreightInfo',style:'',autoFit:'none',id:'gr_SellingFreightInfo',visibleRowNum:'10',class:'wq_gvw','ev:onbeforeedit':'scwin.gr_SellingFreightInfo_onbeforeedit','ev:oneditend':'','ev:oncellclick':'scwin.gr_SellingFreightInfo_oncellclick','ev:onheaderclick':'scwin.gr_SellingFreightInfo_onheaderclick','ev:ontextimageclick':'scwin.gr_SellingFreightInfo_ontextimageclick',readOnly:'true',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_SellingFreightInfo_onviewchange','ev:oneditkeyup':'scwin.gr_SellingFreightInfo_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'column1',value:' ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'SEQ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'Customer',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column13',value:'Cust Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'F/Code',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column9',value:'F/Name',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'Initial',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column5',value:'통합매출입코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'CURR',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'Package',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column31',value:'G/Weight',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'C/Weight',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'Rate',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'Ex-Rate',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column21',value:'Amount(W)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'VAT',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column39',value:'Amount',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column37',value:'Result Date',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'Inovice No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'vatYn',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'17',inputType:'checkbox',id:'chk',displayMode:'label',textAlign:'center',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'30',inputType:'rowIndex',id:'currow',displayMode:'label',textAlign:'center',customFormatter:'scwin.setSeq',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'textImage',width:'80',textAlign:'center',editModeEvent:'ondblclick',editModeEventIcon:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'75',inputType:'textImage',id:'fareEngCd',displayMode:'label',textAlign:'center',allowChar:'a-z|A-Z',editModeEventIcon:'onclick',editModeEvent:'ondblclick',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareEngNm',displayMode:'label',textAlign:'left',readOnly:'true',maxLength:'50'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareGrpCd',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellItemCd',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'crcCd',displayMode:'label',textAlign:'left',allowChar:'a-z|A-Z',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'sellAmtFcrc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'calendar',id:'rsltsStdDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'certiNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'1',inputType:'text',id:'vatYn',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'string',displayFormat:'#,##0',style:'',id:'ed_totalRow1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'ul',style:'',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_SbilgClntNm',placeholder:'',class:' amt',ref:'data:ds_SellingFreightInfo.bilgClntNm',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_SfareEngNm',placeholder:'',class:' amt',ref:'data:ds_SellingFreightInfo.fareEngNm',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{tagname:'ul',style:'',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''}},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'xf:input',A:{style:'text-align: right;',id:'ed_Selling_utotal',placeholder:'',class:' amt',readOnly:'true',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'xf:input',A:{style:'text-align: right;',id:'ed_Selling_total',placeholder:'',class:' amt',readOnly:'true',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'xf:input',A:{style:'text-align: right;',id:'ed_Selling_totalVat',placeholder:'',class:' amt',readOnly:'true',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li',style:''},E:[{T:1,N:'xf:input',A:{class:' w50',id:'ed_rowMake_selling',placeholder:'',style:'width: 80[',editType:'select',objType:'data'}}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',btnCancelYn:'Y',style:'',id:'grpBtn1',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_CancelRow1',rowAddFunction:'scwin.f_AddRow1',rowDelFunction:'scwin.f_DeleteRow1',gridID:'gr_SellingFreightInfo',EngYn:'Y',btnRowAddObj:'btn_AddRowSelling',btnRowDelObj:'btn_DeleteRowSelling',btnCancelObj:'btn_UndoRowSelling'}},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_DeleteAllRowSelling',style:'width: 80px;height: 23px;',class:'btn','ev:onclick':'scwin.f_removeAllRow1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' Partner List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',grdDownOpts:'{"fileName":"Partner list.xlsx","type":"4+8+16"}',gridID:'gr_PartnerFreightInfo',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'no',class:'wq_gvw',dataList:'data:ds_PartnerFreightInfo',id:'gr_PartnerFreightInfo',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:onbeforeedit':'scwin.gr_PartnerFreightInfo_onbeforeedit','ev:oneditend':'','ev:oncellclick':'scwin.gr_PartnerFreightInfo_oncellclick','ev:onheaderclick':'scwin.gr_PartnerFreightInfo_onheaderclick','ev:ontextimageclick':'scwin.gr_PartnerFreightInfo_ontextimageclick',readOnly:'true',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_PartnerFreightInfo_onviewchange','ev:oneditkeyup':'scwin.gr_PartnerFreightInfo_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'70',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Customer',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Cust Name',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'D/C',width:'70',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'F/Code',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'F/Name',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Initial',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'통합매출입코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'CURR',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column33',value:'C/Weight',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'Rate',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column29',value:'Amount',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'Ex-Rate',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column21',value:'Amount(W)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'VAT',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',value:'Result Date',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'Inovice No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'Remark',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'vatYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column39',value:'Vehicle No',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'vehclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column45',value:'업로드 담당자',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'17',inputType:'checkbox',id:'chk',displayMode:'label',textAlign:'center',readOnly:'false',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'30',inputType:'rowIndex',id:'currow',displayMode:'label',textAlign:'center',customFormatter:'scwin.setSeq',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'bilgClntNo',displayMode:'label',textAlign:'center',editModeEventIcon:'onclick',editModeEvent:'ondblclick',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'select',id:'drcrCls',displayMode:'label',textAlign:'center',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'D'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{width:'75',inputType:'textImage',id:'fareEngCd',displayMode:'label',textAlign:'center',allowChar:'a-z|A-Z',editModeEventIcon:'onclick',editModeEvent:'ondblclick',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareEngNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareGrpCd',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellItemCd',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'select',id:'crcCd',displayMode:'label',textAlign:'left',allowChar:'a-z|A-Z',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_comCode'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true',excelFormat:'#,##0',excelCellType:'number',customFormatter:'scwin.setEmpty'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelFormat:'#,##0.00',excelCellType:'number',customFormatter:'scwin.setEmpty'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'sellAmtFcrc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelFormat:'#,##0',excelCellType:'number',customFormatter:'scwin.setEmpty'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelFormat:'#,##0.00',excelCellType:'number',customFormatter:'scwin.setEmpty'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true',excelFormat:'#,##0',excelCellType:'number',customFormatter:'scwin.setEmpty'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true',excelFormat:'#,##0',excelCellType:'number',customFormatter:'scwin.setEmpty'}},{T:1,N:'w2:column',A:{width:'90',inputType:'calendar',id:'rsltsStdDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'certiNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'1',inputType:'text',id:'vatYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'1',inputType:'text',id:'vehclYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regName',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'string',displayFormat:'#,##0',id:'ed_totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_PbilgClntNm',placeholder:'',style:'',ref:'',readOnly:'true',allowChar:'A-Z'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_PfareEngNm',placeholder:'',style:'',ref:'',readOnly:'true',allowChar:'A-Z'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_P1',placeholder:'',style:'display:none;'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_P2',placeholder:'',style:'display:none;'}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'}},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_Partner_utotal',placeholder:'',style:'text-align: right;',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_Partner_total',placeholder:'',style:'text-align: right;',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_Partner_totalVat',placeholder:'',style:'text-align: right;',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_rowMake_partner',placeholder:'',class:' w50',editType:'select'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',EngYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_CancelRow2',rowAddFunction:'scwin.f_AddRow2',rowDelFunction:'scwin.f_DeleteRow2',gridID:'gr_PartnerFreightInfo',btnDelYn:'N',id:'ddd',btnRowAddObj:'btn_AddRowPartner',btnRowDelObj:'btn_DeleteRowPartner',btnCancelObj:'btn_UndoRowPartner'}},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_DeleteAllRowPartner',style:'width: 80px;height: 23px;',class:'btn','ev:onclick':'scwin.f_removeAllRow2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' Buying List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',grdDownOpts:'{"fileName":"Buying list.xlsx","type":"4+8+16"}',gridID:'gr_BuyingFreightInfo',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'no',class:'wq_gvw',dataList:'data:ds_BuyingFreightInfo',id:'gr_BuyingFreightInfo',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:onbeforeedit':'scwin.gr_BuyingFreightInfo_onbeforeedit','ev:oneditend':'','ev:oncellclick':'scwin.gr_BuyingFreightInfo_oncellclick','ev:onheaderclick':'scwin.gr_BuyingFreightInfo_onheaderclick','ev:ontextimageclick':'scwin.gr_BuyingFreightInfo_ontextimageclick',readOnly:'true',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_BuyingFreightInfo_onviewchange','ev:oneditkeyup':'scwin.gr_BuyingFreightInfo_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'70',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Type',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Customer',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Cust Name',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'F/Code',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'F/Name',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Initial',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'통합매출입코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'CURR',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column31',value:'C/Weight',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'Rate',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'Ex-Rate',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column25',value:'Amount(W)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'VAT',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'Amount',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column47',value:'Result Date',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column45',value:'Inner Dept',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column43',value:'Dept Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column41',value:'Inovice No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'vatYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column37',value:'Vehicle No',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'vehclYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'업로드 담당자',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'17',inputType:'checkbox',id:'chk',displayMode:'label',textAlign:'center',readOnly:'false',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'30',inputType:'rowIndex',id:'currow',displayMode:'label',textAlign:'center',customFormatter:'scwin.setSeq',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',id:'pchsTyp',displayMode:'label',textAlign:'center',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'pchsClntNo',displayMode:'label',textAlign:'center',editModeEvent:'ondblclick',editModeEventIcon:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'75',inputType:'textImage',id:'fareEngCd',displayMode:'label',textAlign:'center',allowChar:'a-z|A-Z',editModeEvent:'ondblclick',editModeEventIcon:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareEngNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareGrpCd',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selpchItemCd',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'crcCd',displayMode:'label',textAlign:'left',allowChar:'a-z|A-Z',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exRate',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'pchsAmtFcrc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'calendar',id:'rsltsStdDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'sellDeptCd',displayMode:'label',textAlign:'center',allowChar:'A-Z',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellDeptNm',displayMode:'label',textAlign:'center',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pchsCertiNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'1',inputType:'text',id:'vatYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'1',inputType:'text',id:'vehclYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regName',displayMode:'label',textAlign:'center',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'string',displayFormat:'#,##0',id:'ed_totalRow3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_BpchsClntNm',placeholder:'',style:'',ref:'',readOnly:'true',allowChar:'A-Z'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_BfareEngNm',placeholder:'',style:'',ref:'',readOnly:'true',allowChar:'A-Z'}}]}]},{T:1,N:'xf:input',A:{class:' w100',id:'ed_BsellDeptNm',placeholder:'',style:'',ref:'data:ds_BuyingFreightInfo.sellDeptNm',readOnly:'true',allowChar:'A-Z'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'}},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_Buying_utotal',placeholder:'',style:'text-align: right;',readOnly:'true',allowChar:'A-Z',dataType:'float',maxlength:'.2',adjustMaxLength:'true'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_Buying_total',placeholder:'',style:'text-align: right;',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'xf:input',A:{class:' w80',id:'ed_Buying_totalVat',placeholder:'',style:'text-align: right;',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li',style:''},E:[{T:1,N:'xf:input',A:{class:' amt',id:'ed_Buying_totalVatSum',placeholder:'',style:'text-align: right;',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_copyBuying',type:'button',class:'btn','ev:onclick':'scwin.btn_copyBuying_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Copy Buying'}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_rowMake_buying',placeholder:'',class:' w50'}},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'Y',btnDelYn:'N',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_CancelRow3',rowAddFunction:'scwin.f_AddRow3',rowDelFunction:'scwin.f_DeleteRow3',gridID:'gr_BuyingFreightInfo',btnRowAddObj:'btn_AddRowBuying',btnRowDelObj:'btn_DeleteRowBuying',btnCancelObj:'btn_UndoRowBuying'}},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_DeleteAllRowBuying',style:'width: 80px;height: 23px;',class:'btn','ev:onclick':'scwin.f_removeAllRow3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Delete'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_Tariff',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_Tariff_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tariff'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_CustomerChange',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_CustomerChange_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer Change'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_exRateChange',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_exRateChange_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Ex-Rate Change'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'pu_ResultdateChange',style:'',title:'엑셀 UP',type:'button',userAuth:'U','ev:onclick':'scwin.f_ResultdateChange'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Result Date Change'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' Prepaid(CUR) / Collect(CUR / KRW)',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'width:180px;',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_pfchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.pfchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Freight Charge ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_cfuchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.cfuchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_cfchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.cfchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'width:180px;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_pvchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.pvchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'C.C Fee',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_cvuchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.cvuchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_cvchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.cvchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'width:180px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_pachg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.pachg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Handling Charge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_cauchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.cauchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_cachg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.cachg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'width:180px;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_ptchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.ptchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Total Charge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_ctuchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.ctuchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_ctchg',style:'text-align: right;',ref:'data:ds_HouseFreightInfo.ctchg',readOnly:'true',allowChar:'A-Z',dataType:'number',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###.##'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ed_selling_total',style:'text-align: right;',ref:'data:ds_profit.sellAmt',readOnly:'true',allowChar:'A-Z',dataType:'float',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_purchase_total',style:'text-align: right;',ref:'data:ds_profit.pchsAmt',readOnly:'true',allowChar:'A-Z',dataType:'float',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'손익',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{id:'ed_profit_total',style:'text-align: right;',ref:'data:ds_profit.profit',readOnly:'true',allowChar:'A-Z',dataType:'float',maxlength:'.2',adjustMaxLength:'true',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마진율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_profitRate_total',style:'text-align: right;',ref:'data:ds_profit.profitRate',readOnly:'true',allowChar:'A-Z',dataType:'float',maxlength:'.2',adjustMaxLength:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'이전 실적 조회',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'House B/L No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_blnoTmp',class:' w150',editType:'select',adjustMaxLength:'true',maxlength:'20'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'trigger11',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_RetrieveTmp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Find',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_Find_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_HouseLink',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_HouseLink_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H B/L'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_CustInv',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_CustInv_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cust INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_PartnerInv',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_PartnerInv_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_PaymentInv',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_PaymentInv_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_ArrivalNotice',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_ArrivalNotice_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Arrival Notice'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_Plsheet',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.pu_Plsheet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B.Sheet'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick',objType:'bCreate',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',objType:'bCreate',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_10',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_openApi'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Get Freight'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_11',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_setupApi'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'API Setup'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_12',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_copyFromBuyingToSelling'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'copy buy to sell'}]}]}]}]}]}]}]}]}]})