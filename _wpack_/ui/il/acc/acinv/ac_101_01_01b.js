/*amd /ui/il/acc/acinv/ac_101_01_01b.xml 216489 57336ec9761a51374851156bce54e00c319d580899cbf227a3f22a1f0a5de4cf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'EXPORT IMPORT 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Console 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'부서 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellVatNo',name:'부가세 번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_invoiceList',saveRemovedData:'false','ev:onrowpositionchange':'scwin.ds_invoiceList_onrowpositionchange','ev:oncelldatachange':'scwin.ds_invoiceList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'Invoice No(G)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Import/Export 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'Customer Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'청구처 담당자 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNm',name:'청구처 담당자 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'부서코드 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exdt',name:'환율일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exgb',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdt',name:'etd/eta',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'출발지(DEPARTURE) 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'출발지(DEPARTURE) 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'도착지 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'도착지 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'편명 / vessel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cucd',name:'Billing Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EXP',name:'Billing Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgIntendDt',name:'Billing Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBilgDocNo',name:'Customer INV No.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col30',name:'Print No.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromArea',name:'운송 FROM 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromAreaNm',name:'운송 FROM 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDt',name:'운송 FROM 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromTm',name:'운송 FROM 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toArea',name:'운송 TO 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toAreaNm',name:'운송 TO 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDt',name:'운송 TO 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toTm',name:'운송 TO 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transTyp',name:'운송 Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSellAmtFcrc',name:'Amount',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSellAmt',name:'Amount(W)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumVatAmt',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expr',name:'Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'Slip No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'Tax No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receiveSellingYn',name:'영수거래처 여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'신고유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'remark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipCloseYm',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxCloseYm',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'Certi 구분 R',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'VAT 유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'선청구 유무',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_invoiceCommon',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCertiNo',name:'상위거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainCertiNo',name:'주요거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'청구담당자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNm',name:'청구처 담당자 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiCnt',name:'거래명세서건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsCd',name:'증빙정상구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgExchRt',name:'BILL환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRtAdptDt',name:'환율적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtInscrpYn',name:'적용환율표기여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'화재보험료금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'외화청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgInscrpAmtFcrc',name:'BILL표기금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wcrcDcsnClsCd',name:'원화확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'선청구여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslCd',name:'표기선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslEngNm',name:'표기선박영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'표기항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'선박코드_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntFrom',name:'항차_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'선박코드_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntTo',name:'항차_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billCoverPatternSeq',name:'BILLCOVER유형순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billTitleNm',name:'BILLTITLE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subTitleNm1',name:'SUB_TITLE명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subTitleNm2',name:'SUB_TITLE명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subTitleNm3',name:'SUB_TITLE명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAggrTitle',name:'BILL집계TITLE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAggrSeq',name:'BILL집계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgMgntNo',name:'담보관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgIntendDt',name:'청구예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNoInscrpYn',name:'계좌번호표기여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetNo1',name:'OFFSET번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetNo2',name:'OFFSET번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndReqDt',name:'EDI전송요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'EDI전송대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndClsCd',name:'EDI전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndDt',name:'EDI전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndHh',name:'EDI전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiAutoCreatClsCd',name:'거래명세서자동생성구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBilgDocNo',name:'거래처청구서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'거래명세서 생성 유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refkey',name:'거래명세서 GROUP번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptClsCd',name:'수령구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtOri',name:'기존 공급금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_invoiceFreight',saveRemovedData:'false','ev:oncelldatachange':'scwin.ds_invoiceFreight_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'refkey',name:'참고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'CHK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'Init',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'통합매출입코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'F/Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name=CUR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'Unit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'QTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'Rate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'Amount',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'Ex-Rate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'Amount(W)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expr',name:'Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'Amount(US$)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'Result',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'Tariff Rate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Export / Import 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운/항공/Trans 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'부서 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col32',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col33',name:'영문 운임명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col34',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col35',name:'운임UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출/매입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PREPAID/COLLECT구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col40',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col43',name:'TARIFF 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col44',name:'US 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col45',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'RATE CLASS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'COMMODITY ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col53',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNo',name:'청구처 담당자 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgPicNm',name:'청구처 담당자 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'Slip No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'summary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'VAT 유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNoSeq',name:'거래명세서번호순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgInscrpAmtFcrc',name:'BILL표기금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'상차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'보관차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'선박코드_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntFrom',name:'항차_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'선박코드_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntTo',name:'항차_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingDt',name:'선적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'회수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lane',name:'항로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOn',name:'운송구간_상차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOff',name:'운송구간_하차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndReqDt',name:'EDI전송요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediCreatSeq',name:'EDI생성순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'EDI전송대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndClsCd',name:'EDI전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndDt',name:'EDI전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndHh',name:'EDI전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn2',name:'EDI 전송대상여부 2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'JOB TYPE',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchFreight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'EXPORT IMPORT 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Console 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'Order NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'부서 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'locPtnCls',name:'국내해외매출구분(국내:1 해외:2)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billgb',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_billgb_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'billgb',name:'환종구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_heinzInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_invoice'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'Invoice No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'Invoice No(G)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'Import/Export 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'Customer Name',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgPicNo',name:'청구처 담당자 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgPicNm',name:'청구처 담당자 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'부서코드 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exdt',name:'환율일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exgb',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rate',name:'환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdt',name:'etd/eta',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpcd',name:'출발지(DEPARTURE) 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpnm',name:'출발지(DEPARTURE) 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dstn',name:'도착지 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsnm1',name:'도착지 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'편명 / vessel',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cucd',name:'Billing Type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EXP',name:'Billing Type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgIntendDt',name:'Billing Date',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntBilgDocNo',name:'Customer INV No.',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key30',name:'Print No.',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromArea',name:'운송 FROM 지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromAreaNm',name:'운송 FROM 지역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDt',name:'운송 FROM 일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromTm',name:'운송 FROM 시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toArea',name:'운송 TO 지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toAreaNm',name:'운송 TO 지역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'운송 TO 일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toTm',name:'운송 TO 시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transTyp',name:'운송 Type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumSellAmtFcrc',name:'Amount',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumSellAmt',name:'Amount(W)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumVatAmt',name:'VAT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'Expr',name:'Total',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'Slip No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellVatNo',name:'Tax No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receiveSellingYn',name:'영수거래처 여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'신고유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'remark',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipCloseYm',name:'회계마감월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxCloseYm',name:'세무마감월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key54',name:'name54',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mhno","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mhno_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.acc.acinv.RetrieveInvoiceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_invoiceList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_invoiceList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommon',action:'/il.acc.acinv.RetrieveInvoiceCommonCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchFreight","key":"IN_DS1"},{"id":"ds_invoiceCommon","key":"OUT_DS1"},{"id":"ds_invoiceFreight","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_invoiceCommon","key":"OUT_DS1"},{"id":"ds_invoiceFreight","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCommon_submitdone','ev:submiterror':'scwin.sbm_retrieveCommon_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.acc.acinv.SaveInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_invoiceCommon","key":"IN_DS1"},{"id":"ds_invoiceFreight","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCertiPrint',action:'/il.acc.acinv.RetrieveCertiPrintCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCertiPrint_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTaxPrint',action:'/il.acc.acinv.RetrieveTaxPrintCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveTaxPrint_submitdone','ev:submiterror':'scwin.sbm_retrieveTaxPrint_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_prtnGrpNo',action:'/il.acc.acinv.SaveInvoicePrtnGrpNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_invoiceList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_prtnGrpNo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_heinzInfo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"dma_heinzInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_heinzInfo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.globalVars'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : ac_101_01_01b
// 이름     : Invoice
// 경로     : 국제물류 > Accounting 
// 작 성 자 : 성태영
// 작 업 일 : 2026-03-06
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 1
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.login = "";
scwin.empNo = "";
scwin.userId = "";
scwin.nowDt = "";
scwin.kcomcd = "";
scwin.seaair = "";
scwin.iogb = "";
scwin.mblno = "";
scwin.mhno = "";
scwin.blno = "";
scwin.prtnGrpNo = "";
scwin.bilgClntNo = "";
scwin.processFlag = ""; // 처리 결과를 체크하는 Flag 	
scwin.mhnoFlg = ""; // Console 가져 왔는지 Check
scwin.E_MSG_ERR_001 = "전표번호가  (@) 존재 합니다. 수정 삭제 할 수 없습니다.";
scwin.vUserId = "";
scwin.oldRow_1 = -1; //gr_invoiceList check용
scwin.oldRow_2 = -1; //gr_invoiceFreightList check용

scwin.cancelFlag = false;

/**
 * @event
 * @name onpageload
 * @description 화면 초기화
 */
scwin.onpageload = function () {
  btn_rsmInvoice.hide(); //RSM Invoice 버튼 숨김.( 사용안함. )

  scwin.f_hidTag();
  //scwin.globalVars();
};

//-------------------------------------------------------------------------
//AS-IS Hidden Tag
//-------------------------------------------------------------------------
scwin.f_hidTag = function () {
  dtl_sellVatNo.hide();
  dtl_offsetVatNo.hide();
  hid_kcomcd.hide();
  txt_countRow.hide();
  txa_certiPatternCd.hide();
  txa_vatYn.hide();
  hid_commNm.hide();
  hid_sellVatNo.hide();
  hid_intendDt.hide();
  hid_bilgPicNo.hide();
  hid_bilgPicNm.hide();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언 --> AS-IS SCRIPTLET부 옮겨옴.
 */
scwin.globalVars = function () {
  // 세션정보 가져오기
  scwin.login = $c.data.getMemInfo($p); // LoginDTO login = LoginUtil.getLoginDTO( request ) ;로그인 정보를 가져온다. 

  scwin.userId = scwin.login.userId; //사원번호
  scwin.empNo = scwin.login.empNo; //사원번호
  scwin.nowDt = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.paramData = $c.data.getParameter($p);

  //대표거래처 코드
  scwin.kcomcd = scwin.paramData.kcomcd == null ? "DBEX" : scwin.paramData.kcomcd;
  //해운 항공 구분
  scwin.seaair = scwin.paramData.seaair == null ? "S" : scwin.paramData.seaair;
  //Import / Export 구분
  scwin.iogb = scwin.paramData.iogb == null ? "O" : scwin.paramData.iogb;
  //Master B/L No
  scwin.mblno = scwin.paramData.mblno == null ? "" : scwin.paramData.mblno;
  //Console No
  scwin.mhno = scwin.paramData.mhno == null ? "" : scwin.paramData.mhno;
  //House B/L No
  scwin.blno = scwin.paramData.blno == null ? "" : scwin.paramData.blno;
  //Invoice No
  scwin.prtnGrpNo = scwin.paramData.prtnGrpNo == null ? "" : scwin.paramData.prtnGrpNo;
  //청구 거래처 코드
  scwin.bilgClntNo = scwin.paramData.bilgClntNo == null ? "" : scwin.paramData.bilgClntNo;
  scwin.vUserId = scwin.empNo;
};

//-------------------------------------------------------------------------
//onLoad시 udc관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  tr_tab_center.activateTab(1); // 두번째 탭 활성화 (이거 안해주면 이 탭안에 컨트롤 인식을 못함.)
  grdDonwBtn.setStyle("display", "none");
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  scwin.globalVars();
  scwin.f_initSetTab();
  //scwin.f_HeaderCreate();     //TOBE에서는 필요가 없네....
  scwin.f_Set("INIT");
  scwin.f_DefaultValue(); //요 함수안에 submission 호출 로직 있음....
  scwin.processFlag = "INIT";
  $c.gus.cfEnableObj($p, ed_slipCloseYm, false); //회계마감일
  $c.gus.cfEnableObj($p, ed_taxCloseYm, false); //세무마감일
  $c.gus.cfDisableObjects($p, [ed_tempBilgIntendDt, ed_tempBilgIntendDt]);
  lc_printOp.setValue(0); //print Option init Val Setting
  cnd_ed_mblno.focus();
};

//---------------------------------------------------------
// Tab 초기화
//---------------------------------------------------------
scwin.f_initSetTab = function () {
  $c.gus.cfEnableObjects($p, [tr_tab_center]);
  //scwin.f_selectTabMenu(0); 
};

//---------------------------------------------------------
// Tab Menu 선택시 처리 --> 필요 없을거 같음....... 호출하지 말자...
//---------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  switch (idx) {
    case 0:
      //Header tab			
      break;
    case 1:
      //REMARK
      break;
    case 2:
      //INFORMATION
      break;
  }
  $c.gus.cfViewTab($p, idx);
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      //$c.gus.cfDisableBtnOnly([btn_Print, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]); //2026.04.07 김진성책임요청사항.(print버튼 활성화)
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      //조회모드
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      if (scwin.processFlag == "RETRIEVE") {
        $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
        $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete, btn_Print]);
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Update, btn_Save, btn_Delete]);
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
      }
      break;
    case "CANCEL":
      //취소
      scwin.f_Set("RETRIEVE");
      break;
    case "CREATE":
      //신규            
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
      //Billing Type이 원화일때는 KRW 체크박스 체크로 고정
      if (ds_invoiceCommon.getRowPosition() == null) ds_invoiceCommon.setRowPosition(0);
      if (ds_invoiceCommon.getCellData(ds_invoiceCommon.getRowPosition(), "crcCd") == "KRW") {
        //if(ds_invoiceCommon.NameValue(ds_invoiceCommon.RowPosition,"crcCd")=="KRW"){
        chb_billgb.setDisabled(true); //chb_billgb.disabled=true;
      } else {
        chb_billgb.setDisabled(false); //chb_billgb.disabled=false;
      }
      break;
    case "UPDATE":
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
      chb_billgb.setDisabled(true); //chb_billgb.disabled=true;
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
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [ed_bilgIntendDt, img_bilgPicNo]); //Billing Date, PIC
};

//-------------------------------------------------------------------------
// function name : f_DefaultValue
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  hid_kcomcd.setValue(scwin.kcomcd);
  cnd_lc_seaair.setValue(scwin.seaair);
  cnd_lc_iogb.setValue(scwin.iogb);
  cnd_ed_mblno.setValue(scwin.mblno);
  cnd_ed_blno.setValue(scwin.blno);
  cnd_ed_prtnGrpNo.setValue(scwin.prtnGrpNo);
  cnd_ed_bilgClntNo.setValue(scwin.bilgClntNo);
  cnd_lc_mhno.setValue(scwin.mhno); //cnd_lc_mhno.BindColVal 	= "<%-=mhno-%>";

  if (cnd_ed_mblno.getValue() != "") {
    //Master B/L No
    scwin.f_MhnoLoading("M", cnd_ed_mblno.getValue());
  }
  if (cnd_ed_blno.getValue != "") {
    scwin.f_MhnoLoading("H", cnd_ed_blno.getValue());
  }
  chb_billgb.checkAll(true);
  rd_enggb.setValue("1"); //KOR, ENG
  rd_prebilgYn.setValue("0"); //Yes, No
  //chb_pre.checkAll(true);         
  chb_pre.setValue(1); //미리보기
};

//-------------------------------------------------------------------------
//MHNNO 가져오기
//-------------------------------------------------------------------------
scwin.f_MhnoLoading = async function (mhgb, blno) {
  var strClntNo = "";
  strClntNo = blno; //Master B/L No

  if (strClntNo.length > 0) {
    param1 = strClntNo;
    if (cnd_lc_seaair.getValue() == "A") {
      if (mhgb == "M") {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
      } else {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirHouseMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
      }
      await $c.sbm.execute($p, sbm_mhno);
    } else if (cnd_lc_seaair.getValue() == "S") {
      if (mhgb == "M") {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaMasterMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
      } else {
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
      }
      await $c.sbm.execute($p, sbm_mhno);
    } else if (cnd_lc_seaair.getValue() == "T") {
      if (mhgb == "M") {
        await $c.win.alert($p, "After House B/L No Input. Search Pls.");
      } else {
        //ds_mhno.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveTransMhnoListCombo&param1=" + param1;  //--> T     f_retriveTransMhnoListComboT
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveTransMhnoListCombo&param1=" + param1;
        await $c.sbm.execute($p, sbm_mhno);
      }
    }
    //ds_mhno.Reset();
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리 shbSearch
//-------------------------------------------------------------------------
scwin.f_FieldClear = async function () {
  await $c.gus.cfInitObjects($p, shbSearch, null);
  cnd_lc_mhno.initAutoComplete(); //autoComplete Component만 공통함수에서 초기화 안되서 추가함.
};
scwin.f_lengthCheck = function () {
  if ($c.gus.cfGetByteLength($p, txa_summary.value) > 500) {
    $c.gus.cfAlertMsg($p, "Remark는 공백포함 영문500자, 한글250자 만 입력가능합니다.");
    txa_summary.setValue(txa_summary.getValue().substring(0, 500)); //txa_summary.value = txa_summary.value.substring(0,500);
    txa_summary.focus();
    return;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (cnd_ed_mblno.getValue().trim() == '' && cnd_ed_blno.getValue().trim() == '') {
    // Master B/L No && House B/L No
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, Array("Master or House B/L"));
    cnd_ed_mblno.Focus();
    return;
  }

  //dataset clear
  ds_invoiceList.removeAll(); //ds_invoiceList.ClearData();
  ds_invoiceCommon.removeAll(); //ds_invoiceCommon.ClearData();
  ds_invoiceFreight.removeAll(); //ds_invoiceFreight.ClearData();

  dma_search.setJSON([]);
  dma_search.set("kcomcd", hid_kcomcd.getValue()); // 대표 거래처 코드
  dma_search.set("seaair", cnd_lc_seaair.getValue()); // 해운 항공 Trans 구분
  dma_search.set("iogb", cnd_lc_iogb.getValue()); // Import/Export 구분
  dma_search.set("mblno", cnd_ed_mblno.getValue()); // MASTER B/L NO
  dma_search.set("blno", cnd_ed_blno.getValue()); // HOUSE B/L NO
  dma_search.set("mhno", cnd_lc_mhno.getValue()); // Console NO

  dma_search.set("prtnGrpNo", cnd_ed_prtnGrpNo.getValue()); // 거래명세서Group번호
  dma_search.set("bilgClntNo", cnd_ed_bilgClntNo.getValue()); // 청구처 코드
  dma_search.set("bilgClntNm", cnd_txt_bilgClntNm.getValue()); // 청구처명
  dma_search.set("dept", cnd_ed_dept.getValue()); // 부서 코드
  dma_search.set("deptnm", cnd_txt_deptnm.getValue()); // 부서 명
  dma_search.set("certiNo", ""); // 거래명세서번호

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [ed_bilgIntendDt, img_bilgPicNo]);
};

//-------------------------------------------------------------------------
// 운임 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCommon = function () {
  ds_invoiceCommon.removeAll();
  ds_invoiceFreight.removeAll();

  //tr_retrieveCommon.post();
  $c.sbm.execute($p, sbm_retrieveCommon); //공통 Invoice 및  운임 조회 TR
};

//-------------------------------------------------------------------------
//  세금계산서 생성 팝업
//-------------------------------------------------------------------------
scwin.f_SlipPopUp = async function () {
  if (ds_invoiceList.getRowPosition() == null) return;
  for (var idx = 0; idx < ds_invoiceCommon.getTotalRow(); idx++) {
    if (ds_invoiceCommon.getCellData(idx, "chk") == "T") {
      var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
      var blno = ds_invoiceList.getCellData(curRow, "blno");
      var intendDt = ed_bilgIntendDt.getValue().trim();
      var kcomcd = ds_invoiceList.getCellData(curRow, "kcomcd");
      var prtnGrpNo = ds_invoiceList.getCellData(curRow, "prtnGrpNo");
      var seaair = ds_invoiceList.getCellData(curRow, "seaair");
      var iogb = ds_invoiceList.getCellData(curRow, "iogb");
      var bilgClntNo = ds_invoiceList.getCellData(curRow, "bilgClntNo");
      var userId = ds_invoiceList.getCellData(curRow, "modId");
      var type = lc_printOp.getValue(); //lc_printOp.BindColVal;
      var rmk = rd_rmk.getValue(); //rd_rmk.CodeValue;
      var remark = txa_summary.getValue(); //txa_summary.value;
      var summary = ds_invoiceFreight.getCellData(0, "summary"); //var summary = ds_invoiceFreight.NameValue(1,"summary");
      var eng = rd_enggb.getValue(); //rd_enggb.CodeValue;
      var locPtnCls = "1";
      var pic = 2;
      if (ed_bilgPicNo.getValue() != "") {
        pic = 1;
      }
      var pop_url = "/ui/ds/fs/bilg/fs_202_06_03p.xml"; //debis-main/src/main/webapp/ui/ds/fs/bilg/fs_202_06_03p.xml;

      ds_invoiceCommon.setCellData(0, "receptClsCd", "02");
      //hid_commNm

      var param = {
        blno: blno,
        intendDt: intendDt,
        kcomcd: kcomcd,
        prtnGrpNo: prtnGrpNo,
        seaair: seaair,
        iogb: iogb,
        bilgClntNo: bilgClntNo,
        userId: userId,
        type: type,
        rmk: rmk,
        remark: remark,
        eng: eng,
        locPtnCls: locPtnCls,
        pic: pic,
        summary: summary,
        ds_certiCommon: ds_invoiceCommon,
        sellItemNm: hid_commNm.getValue()
      };
      var opts = scwin.opts || {};
      opts.model = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 730;
      opts.height = 850;
      opts.title = "영수 세금계산서 생성", opts.popupName = '세금계산서 생성';
      rtnList = await $c.win.openPopup($p, pop_url, opts, param);
      if (rtnList[0] != undefined && rtnList[0] != null) {
        dtl_sellVatNo.setValue(rtnList[0]);
      }
      if (rtnList[1] == "TRUE") {
        scwin.f_Retrieve();
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_FS_WRN_002);
      return;
    }
  }
};

//-------------------------------------------------------------------------
// 세금계산서일괄생성 이동
//-------------------------------------------------------------------------  
scwin.f_SlipCreate = function () {
  var bilgLodeptCd = ed_dept.getValue().trim(); //ed_dept.Text.trim();
  var bilgLodeptNm = txt_deptnm.getValue().trim(); //txt_deptnm.value.trim();

  var bilgClntNo = ed_bilgClntNo.getValue().trim(); //ed_bilgClntNo.Text.trim();
  var bilgClntNm = txt_bilgClntNm.getValue().trim(); //txt_bilgClntNm.value.trim();

  var certiPatternCd = "04";
  var qryConDtFm = ed_bilgIntendDt.getValue().trim(); //ed_bilgIntendDt.Text.trim();
  var qryConDtTo = ed_bilgIntendDt.getValue().trim(); //ed_bilgIntendDt.Text.trim();

  var taxnClsCd = "01";
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  if (ds_invoiceList.getCellData(curRow, "sumVatAmt") == 0) {
    taxnClsCd = "02";
    if (lc_taxnClsCd.getValue() == "03") {
      taxnClsCd = "03";
    }
  }

  // 전자세금계산서 URL 연결을 위한 파라메터
  var kcomcd = ds_invoiceList.getCellData(curRow, "kcomcd");
  var seaair = ds_invoiceList.getCellData(curRow, "seaair");
  var iogb = ds_invoiceList.getCellData(curRow, "iogb");
  var userId = ds_invoiceList.getCellData(curRow, "modId");
  var type = lc_printOp.getValue(); //lc_printOp.BindColVal;
  var rmk = rd_rmk.getValue(); //rd_rmk.CodeValue;
  var eng = rd_enggb.getValue(); //rd_enggb.CodeValue;

  var locPtnCls = "1";
  var pic = 2;
  if (ed_bilgPicNo.getValue() != "") {
    pic = 1;
  }
  var param = {
    bilgLodeptCd: bilgLodeptCd,
    bilgLodeptNm: bilgLodeptNm,
    bilgClntNo: bilgClntNo,
    bilgClntNm: bilgClntNm,
    certiPatternCd: certiPatternCd,
    qryConDtFm: qryConDtFm,
    qryConDtTo: qryConDtTo,
    taxnClsCd: taxnClsCd,
    kcomcd: kcomcd,
    seaair: seaair,
    iogb: iogb,
    userId: userId,
    type: type,
    rmk: rmk,
    eng: eng,
    locPtnCls: locPtnCls,
    pic: pic
  };
  var strOrderDetailTitle = "청구세금계산서일괄생성";
  var strOrderDetailUrl = "/ui/ds/fs/bilg/fs_202_06_05b.xml"; //debis-main/src/main/webapp/ui/ds/fs/bilg/fs_202_06_05b.xml

  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "fs_202_06_05b.xml", param, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case "bilgClntNo":
      //거래처 팝업(Customer-검색 udc_ilcomCd_bilgClnt)
      rtnList = udc_ilcomCd_bilgClnt.ilCommonPopUp(scwin.udc_ilcomCd_bilgClnt_callBackFunc, cnd_ed_bilgClntNo.getValue().trim() // 화면에서의 ??? Code Element의	Value
      , cnd_txt_bilgClntNm.getValue() // 화면에서의 ??? Name Element의	Value
      , chgGubun // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , 'Customer' // Title순서
      , '140,300' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , 'Customer Search,Customer Code,Customer Name');
      break;
    case 2:
      //거래처 담당자 팝업(PIC)

      var pParam = ed_bilgClntNo.getValue().trim();
      if (pParam == "") {
        $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Customer"]); // 선택된 @이(가) 없습니다.
        ed_bilgClntNo.focus();
        return;
      }
      udc_ilcomCd_bilgPic.setSelectId("retrieveClntPicInfoInvoice");
      rtnList = udc_ilcomCd_bilgPic.ilCommonPopUp(scwin.udc_ilcomCd_bilgPic_callBackFunc, ed_bilgPicNo.getValue().trim() // 화면에서의 ??? Code Element의	Value
      , txt_bilgPicNm.getValue() // 화면에서의 ??? Name Element의	Value
      , chgGubun // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '4' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "PIC" // Title순서
      , '100,350' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , pParam // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , null);
      break;
    case 3:
      //부서 팝업 (Department-검색)
      rtnList = udc_comCd_dept.cfCommonPopUp(scwin.udc_comCd_callBackFunc, cnd_ed_dept.getValue().trim(), cnd_txt_deptnm.getValue(), "T", '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Department,Code,Name", "F");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.f_openPgm = async function (pName) {
  if (pName == "Profit") {
    var param = {
      kcomcd: "",
      seaair: cnd_lc_seaair.getValue(),
      iogb: cnd_lc_iogb.getValue(),
      blno: cnd_ed_blno.getValue(),
      mblno: cnd_ed_blno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    };
    var strOrderDetailTitle = "Booking Sheet";
    var strOrderDetailUrl = "/ui/il/pfm/pfbs/pe_101_01_01b.xml"; //pe_101_01_01b debis-main/src/main/webapp/ui/il/pfm/pfbs/pe_101_01_01b.xml

    $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "pe_101_01_01b.xml", param);
  } else if (pName == "RSM") {
    //이 로직 사용 안함.(죽은 화면이라함.)
    var win_url = "";
    var args = new Array();
    args[0] = cnd_lc_seaair.getValue();
    args[1] = cnd_lc_iogb.getValue();
    let opts = {
      id: "ac_101_01_01p",
      popupName: "InvoicePopup",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 500,
      title: "InvoicePopup",
      status: "No"
    };
    const rtnList = await $c.win.openPopup($p, win_url, opts, args);
    if (rtnList == null) {
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// chb_billgb KRW 디폴트로 체크하는 함수
//-------------------------------------------------------------------------
scwin.f_billgbSetting = function () {
  chb_billgb.checkAll(true); //KRW checkBox

  for (var idx = 0; idx < ds_invoiceFreight.getTotalRow(); idx++) {
    if (ds_invoiceFreight.getCellData(idx, "chk") == 'T') {
      //if (ds_invoiceFreight.NameValue(i, "chk") == "T" ){

      if (ds_invoiceFreight.getCellData(idx, "crcCd").trim() != "KRW") {
        ds_invoiceFreight.setCellData(idx, "crcCd", "KRW"); //ds_invoiceFreight.NameValue(i,"crcCd") = "KRW";									
        ds_invoiceFreight.setCellData(idx, "exRate", 0); //ds_invoiceFreight.NameValue(i,"exRate") = 0;
        ds_invoiceFreight.setCellData(idx, "sellAmtFcrc", 0); //ds_invoiceFreight.NameValue(i,"sellAmtFcrc") = 0;          		
        ds_invoiceFreight.setCellData(idx, "spplyAmtFcrc", 0); //ds_invoiceFreight.NameValue(i,"spplyAmtFcrc") = 0;
        ds_invoiceFreight.setCellData(idx, "bilgInscrpAmtFcrc", 0); //ds_invoiceFreight.NameValue(i,"bilgInscrpAmtFcrc") = 0;   
      }
    }
  }

  //var rc = ds_invoiceCommon.CountRow;
  if (ds_invoiceCommon.getTotalRow() > 0) {
    for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
      ds_invoiceCommon.setCellData(i, "crcCd", "KRW");
      ds_invoiceCommon.setCellData(i, "spplyAmtFcrc", 0);
      ds_invoiceCommon.setCellData(i, "fcrcBilgAmt", 0);
      ds_invoiceCommon.setCellData(i, "bilgAmtFcrc", 0);
      ds_invoiceCommon.setCellData(i, "bilgAmt", parseInt(ds_invoiceCommon.getCellData(i, "spplyAmt")) + parseInt(ds_invoiceCommon.getCellData(i, "vatAmt")) - parseInt(ds_invoiceCommon.getCellData(i, "fcrcBilgAmt")));
      ds_invoiceCommon.setCellData(i, "crcCd", "KRW");
    }
  }
};

//-------------------------------------------------------------------------
// 신규 Create Btn Fn
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_Set("CREATE");
  scwin.f_billgbSetting();

  //여기서 그리드에 값 넣어버리자.status도 여기서 바뀌지.
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  ds_invoiceList.setCellData(curRow, "bilgIntendDt", scwin.nowDt);
  ds_invoiceList.setCellData(curRow, "confirmDt", scwin.nowDt);
  ds_invoiceCommon.setCellData(0, "confirmDt", scwin.nowDt);
  ed_bilgIntendDt.setValue(scwin.nowDt); //ed_bilgIntendDt.text = "<%-=nowDt-%>"; 
  ed_bilgIntendDt.focus(); //document.all.ed_bilgIntendDt.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.f_Set("UPDATE");
  ed_bilgIntendDt.focus();
};

//-------------------------------------------------------------------------
// 취소 Cancle Btn Fn
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  scwin.cancelFlag = true;
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  if (ds_invoiceList.getRowStatus(curRow) == "C") {
    ds_invoiceList.removeRow(curRow);
  } else {
    ds_invoiceList.undoRow(curRow);
    if (ds_invoiceList.getCellData(curRow, "cucd") == "KRW") {
      ds_invoiceList.setCellData(curRow, "EXP", "원화");
      gr_invoiceList.setCellColor(curRow, "EXP", "Blue");
    } else {
      ds_invoiceList.setCellData(curRow, "EXP", "외화");
      gr_invoiceList.setCellColor(curRow, "EXP", "Red");
    }
    ed_bilgIntendDt.setValue(ds_invoiceList.getCellData(curRow, "bilgIntendDt")); //Billing Date 원복
    ed_clntBilgDocNo.setValue(ds_invoiceList.getCellData(curRow, "clntBilgDocNo")); //Customer IVN 원복
    ed_bilgPicNo.setValue(ds_invoiceList.getCellData(curRow, "bilgPicNo")); //PIC Code 원복
    txt_bilgPicNm.setValue(ds_invoiceList.getCellData(curRow, "bilgPicNm")); //PIC Name 원복

    ds_invoiceList.modifyRowStatus(curRow, "R");
  }
  var curRow2 = ds_invoiceCommon.getRowPosition();
  if (ds_invoiceCommon.getRowStatus(curRow2) == "C") {
    ds_invoiceCommon.removeRow(curRow2);
  } else {
    ds_invoiceCommon.undoRow(curRow2);
    ds_invoiceCommon.modifyRowStatus(curRow2, "R");
  }

  //ds_purchaseCertiDetail.undoAll();
  //CKCD STYYCYG [2026.03.17]여기에서 3종세트 기존값으로 원복되어야 하는데 그리드처럼 undo메소드가 없네.... 
  //우선 김현욱 과장에게 문의 후 답 안나오면 Map 만들어서 create 버튼 클릭 시점에 해당 맵에 3종값 채워 넣고 여기에서 다시 Map값으로 채워놓자....
  ds_invoiceFreight.removeAll(); //ds_invoiceFreight.ClearData();
  scwin.f_Set("CANCEL");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  for (var idx = 0; idx < ds_invoiceList.getTotalRow(); idx++) {
    var vCurRowStatus = ds_invoiceList.getRowStatus(idx); //(초기상태:R, 갱신:U, 삽입:C, 삭제:D, 삽입 후 삭제:V)
    if (vCurRowStatus == "D" || vCurRowStatus == "U") {
      if (ds_invoiceList.getCellData(idx, "slipNo") != "") {
        $c.gus.cfAlertMsg($p, scwin.E_MSG_ERR_001, [ds_invoiceList.getCellData(idx, "slipNo")]);
        return;
      }
    }
  }
  if (ds_invoiceCommon.getTotalRow() < 0) {
    //if (ds_invoiceCommon.CountRow<1) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Invoice"]); //var MSG_CM_ERR_056   =  "선택된 @이(가) 없습니다.";
    return false;
  }
  if (ds_invoiceFreight.getTotalRow() < 0) {
    //if (ds_invoiceFreight.CountRow<1) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Invoice"]); //@는 변경된 사항이 없습니다.
    return false;
  }

  //getModifiedIndex().length를 사용 하여 비교
  // if (ds_invoiceList.IsUpdated == false && ds_invoiceCommon.IsUpdated == false && ds_invoiceFreight.IsUpdated == false) {
  //     cfAlertMsg(E_MSG_CM_ERR_001, new Array("Invoice")); //@는 변경된 사항이 없습니다.
  //     return false;
  // }
  if (ds_invoiceList.getModifiedIndex().length == 0 && ds_invoiceCommon.getModifiedIndex().length == 0 && ds_invoiceFreight.getModifiedIndex().length == 0) {
    //ds_invoiceCommon은 언제 변경이되지????  이 로직에서 빠져야 하는거 아닌지...
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["Invoice"]); //@는 변경된 사항이 없습니다.
    return false;
  }
  if ($c.gus.cfGetByteLength($p, txa_summary.getValue()) > 500) {
    $c.gus.cfAlertMsg($p, "Remark는 공백포함 영문500자, 한글250자 만 입력가능합니다.");
    txa_summary.focus();
    return;
  }
  if (ds_invoiceCommon.getTotalRow() >= 0) {
    //if(ds_invoiceCommon.CountRow > 1){
    //for (var i = 0; i <= ds_invoiceCommon.getTotalRow(); i++) {     //for(var i = 2 ; i <= ds_invoiceCommon.CountRow ; i++){
    for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
      //for(var i = 2 ; i <= ds_invoiceCommon.CountRow ; i++){
      if (ds_invoiceCommon.getCellData(i, "summary") != "") {
        //if(ds_invoiceCommon.NameValue(1, "summary") != ""){
        ds_invoiceCommon.setCellData(i, "summary", ds_invoiceCommon.getCellData(0, "summary")); //ds_invoiceCommon.NameValue(i, "summary") = ds_invoiceCommon.NameValue(1, "summary");
      }
    }
  }

  //-------------------------------------------------------------------------
  // WFG / TSG REMARK에 추가하는 로직
  //-------------------------------------------------------------------------
  var fcodecnt = 0;
  var fcodesum = 0; // 해당 F/CODE 금액 합계
  var fcode = ""; // F/CODE 종류
  var pos = 0; // summary를 저장하기 위한 첫번째 거래명세서 상세 위치

  var wfcode = 0; //WFG 여부
  var tfcode = 0; //TSG 여부

  for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
    //for(var i = 1; i <= ds_invoiceFreight.CountRow;i++) {
    if (ds_invoiceFreight.getCellData(i, "chk") == "T") {
      //if(ds_invoiceFreight.NameValue(i,"chk")=="T" ){
      if (ds_invoiceFreight.getCellData(i, "fareEngCd") == "WFG" || ds_invoiceFreight.getCellData(i, "fareEngCd") == "TSG") {
        fcodesum += parseInt(ds_invoiceFreight.getCellData(i, "sellAmt")); //체크해서 문제되면 parseInt 사용...
        //					fcode +=  ds_invoiceFreight.NameValue(i,"fareEngCd")+" " ;					
        if (ds_invoiceFreight.getCellData(i, "fareEngCd") == "WFG") {
          wfcode++;
        }
        if (ds_invoiceFreight.getCellData(i, "fareEngCd") == "TSG") {
          tfcode++;
        }
        fcodecnt++;
      }
    }
  }
  if (wfcode > 0 && tfcode > 0) {
    fcode = "WFG/TSG";
  } else if (wfcode > 0) {
    fcode = "WFG";
  } else if (tfcode > 0) {
    fcode = "TSG";
  }
  if (fcodecnt > 0) {
    for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
      if (ds_invoiceFreight.getCellData(i, "chk") == "T" && ds_invoiceFreight.getCellData(i, "vatAmt") == 0) {
        ds_invoiceFreight.setCellData(i, "summary", fcode + " : " + fcodesum + "  " + ds_invoiceCommon.getCellData(0, "crcCd"));
      }
    }
  }

  //통화구분(KRW)를 클릭하면 조건에 따라 ds_invoiceCommon이 재 조회 되어서 confirmDt와 crdCd가 날아가버리는 경우가 있음.
  //그래서 여기서 다시 셋팅해줌.
  var vChbBillgb = chb_billgb.getValue() == "0" ? "USD" : "KRW";
  for (var i = 0; i < ds_invoiceCommon.getRowCount(); i++) {
    ds_invoiceCommon.setCellData(i, "crcCd", vChbBillgb); //통화구분 셋팅

    ds_invoiceCommon.setCellData(i, "confirmDt", ed_bilgIntendDt.getValue()); //BillingDate 셋팅
    ds_invoiceCommon.setCellData(i, "bilgIntendDt", ed_bilgIntendDt.getValue()); //BillingDate 셋팅
    ds_invoiceCommon.setCellData(i, "clntBilgDocNo", ed_clntBilgDocNo.getValue());
  }
  if (await scwin.f_chk_billgbSetting()) {
    if (await scwin.f_ReqFieldChk()) {
      if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
        ds_invoiceCommon.setCellData(0, "summary", txa_summary.getValue());
        $c.sbm.execute($p, sbm_save); //tr_save.Post(); // Invoice Save  TR
      }
    }
  }
};

//-------------------------------------------------------------------------
// Group 번호 같게
//-------------------------------------------------------------------------
scwin.f_PrtnGrpNo = async function () {
  for (var i = 1; i < ds_invoiceList.getTotalRow(); i++) {
    //ds_invoiceList.RowPosition = i;
    if (ds_invoiceList.getCellData(i, "prtnGrpNo") != "") {
      ds_invoiceList.setCellData(i, "prtnGrpNo", ed_prtnGrpNo.getValue()); //ds_invoiceList.setCellData(i,"prtnGrpNo", ) = ed_prtnGrpNo.text;
    }
  }
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  if (ds_invoiceList.getCellData(curRow, "slipNo") != "") {
    // if(ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"slipNo") !=""){
    $c.gus.cfAlertMsg($p, scwin.E_MSG_ERR_001, [ds_invoiceList.getCellData(curRow, "slipNo")]);
    return;
  }
  if (ds_invoiceCommon.getRowCount() < 0) {
    //if (ds_invoiceCommon.CountRow<1) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Invoice"]); //var MSG_CM_ERR_056   =  "선택된 @이(가) 없습니다.";
    return false;
  }
  if (ds_invoiceFreight.getRowCount < 0) {
    // if (ds_invoiceFreight.CountRow<1) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Invoice"]); //@는 변경된 사항이 없습니다.
    return false;
  }

  //ds_invoiceList.getModifiedIndex().length == 0
  if (ds_invoiceList.getModifiedIndex().length == 0) {
    //if (ds_invoiceList.IsUpdated == false ) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["Invoice"]); //@는 변경된 사항이 없습니다.
    return false;
  }
  if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_prtnGrpNo); // tr_prtnGrpNo.Post();
    //아래코드는 콜백으로 옮기자.(scwin.sbm_prtnGrpNo_submitdone)
    //scwin.processFlag = "RETRIEVE";
    //scwin.f_Set("RETRIEVE");
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  var curRow = ds_invoiceList.getRowPosition();
  if (ds_invoiceList.getCellData(curRow, "slipNo") != "") {
    $c.gus.cfAlertMsg($p, scwin.E_MSG_ERR_001, [ds_invoiceList.getCellData(curRow, "slipNo")]);
    return;
  }
  if (await $c.win.confirm($p, E_MSG_CM_CRM_004)) {
    //삭제하시겠습니까?

    //var cf = ds_invoiceCommon.CountRow;

    for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
      if (ds_invoiceCommon.getCellData(i, "chk") == "T") {
        ds_invoiceCommon.deleteRow(i); //ds_invoiceCommon.DeleteMarked();
      }
    }
    $c.sbm.execute($p, sbm_save); //tr_save.Post(); // Invoice Save  TR
  }
};

//-------------------------------------------------------------------------
// 오즈화면 - 이전함수 ( 화면 검증 후 정리 하자.)
//-------------------------------------------------------------------------
scwin.f_Print_old = async function () {
  if (chb_pre.getValue() == 1 && chb_directSave.getValue() == 1) {
    await $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    chb_pre.setValue(0); //chb_pre.checked = false;
    chb_directSave.setValue(0); //chb_directSave.checked = false;
    return false;
  }

  //통관용, 경리용은 FS210 테이블에 데이터를 저장하지 않고 바로 출력한다.
  //if(sp.BindColVal=="4" || lc_printOp.BindColVal=="2" || lc_printOp.BindColVal=="6"){
  //sp라는 컨트롤 AS-IS 화면에 없어서 빼버림.  

  if (lc_printOp.getValue() == "4" || lc_printOp.getValue() == "2" || lc_printOp.getValue() == "6") {
    //lc_printOp:PRINT OPTION 4:통관용, 2:경리용, 6:통관용(외화)

    //Billing Date == null > 저장되지 않은 내역 출력
    if (ed_bilgIntendDt.getValue() == "") {
      var param = "";
      for (i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
        if (ds_invoiceFreight.getCellData(i, "chk") == "T") {
          //if (ds_invoiceFreight.NameValue(i, "chk") == "T") {
          param = param + "," + ds_invoiceFreight.getCellData(i, "sellSeq"); // 매출순번
        }
      }
      //1set
      var curRow = ds_invoiceList.getRowPosition();
      var pic = 2; //담당자 없다
      if (ed_bilgPicNo.getValue() != "") {
        pic = 1; //담당자 있다
      }
      let data = {
        odiName: "ac_101_01_01_sea",
        reportName: "/il/acc/ac_101_01_01_sea_02_temp.ozr",
        odiParam: {
          KCOMCD: ds_invoiceList.getCellData(curRow, "kcomcd"),
          SEAAIR: '',
          IOGB: ds_invoiceList.getCellData(curRow, "iogb"),
          BILG_CLNT_NO: ds_invoiceList.getCellData(curRow, "bilgClntNo"),
          USER_ID: scwin.vUserId,
          TYPE: lc_printOp.getValue(),
          RMK: rd_rmk.getValue(),
          REMARK: txa_summary.getValue(),
          ENG: rd_enggb.getValue(),
          RECEIVE_SELLING_YN: ds_invoiceList.getCellData(curRow, "receiveSellingYn"),
          ODR_NO: ds_invoiceFreight.getCellData(curRow, "odrNo"),
          SELL_SEQ: param.substring(1),
          PIC: pic
        },
        viewerParam: {
          useprogressbar: true,
          // 프로그레스바 쓸지 말지
          zoom: 90,
          // 배율 설정
          "viewer.mode": "preview"
        },
        formParam: {
          BILLING_DT: "",
          PIC_NAME: ""
        }
      };
      let opts = {
        id: "ozReportPopup",
        popupName: "오즈 리포트",
        modal: true,
        type: "browserPopup",
        width: 1000,
        height: 600,
        title: "오즈 리포트"
      };
      if (ds_invoiceList.getCellData(curRow, "seaair") == "S") {
        //if(ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"seaair") == "S") {
        data.odiName = "ac_101_01_01_sea";
        data.reportName = "/il/acc/ac_101_01_01_sea_02_temp.ozr";
        data.odiParam.SEAAIR = "S";
        if (lc_printOp.getValue() == "2") {
          data.formParam.BILLING_DT = ed_tempBilgIntendDt.getValue();
        }

        //1set end
      } else {
        data.odiName = "ac_101_01_01_air";
        data.reportName = "/il/acc/ac_101_01_01_air_02.ozr";
        data.odiParam.SEAAIR = "A";
        data.formParam.PIC_NAME = txt_bilgPicNm.getValue();
      }
      await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);

      //Billing Date == null > 저장되지 않은 내역 출력 end
    } else {
      var curRow = ds_invoiceList.getRowPosition();
      var pic = 2; //담당자 없다
      if (ed_bilgPicNo.getValue() != "") {
        pic = 1; //담당자 있다
      }
      let data = {
        odiName: "ac_101_01_01_sea",
        reportName: "/il/acc/ac_101_01_01_sea_02_temp.ozr",
        odiParam: {
          KCOMCD: ds_invoiceList.getCellData(curRow, "kcomcd"),
          PRTN_GRP_NO: ds_invoiceList.getCellData(curRow, "prtnGrpNo"),
          SEAAIR: '',
          IOGB: ds_invoiceList.getCellData(curRow, "iogb"),
          BILG_CLNT_NO: ds_invoiceList.getCellData(curRow, "bilgClntNo"),
          USER_ID: ds_invoiceList.getCellData(curRow, "modId"),
          TYPE: lc_printOp.getValue(),
          RMK: rd_rmk.getValue(),
          REMARK: txa_summary.getValue(),
          ENG: rd_enggb.getValue(),
          RECEIVE_SELLING_YN: ds_invoiceList.getCellData(curRow, "receiveSellingYn"),
          PIC: pic
        },
        viewerParam: {
          useprogressbar: true,
          // 프로그레스바 쓸지 말지
          zoom: 90,
          // 배율 설정
          "viewer.mode": "preview"
        },
        formParam: {
          PIC_NAME: txt_bilgPicNm.getValue()
        }
      };
      let opts = {
        id: "ozReportPopup",
        popupName: "오즈 리포트",
        modal: true,
        type: "browserPopup",
        width: 1000,
        height: 600,
        title: "오즈 리포트"
      };
      if (ds_invoiceList.getCellData(curRow, "seaair") == "S") {
        //if(ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"seaair")=="S"){
        data.odiName = "ac_101_01_01_sea";
        data.reportName = "/il/acc/ac_101_01_01_sea_01_temp.ozr";
        data.odiParam.SEAAIR = "S";
      } else {
        data.odiName = "ac_101_01_01_air";
        data.reportName = "/il/acc/ac_101_01_01_air_01.ozr";
        data.odiParam.SEAAIR = "A";
      }
      await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
    }

    //처음 if 
  } else {
    var curRow = ds_invoiceList.getRowPosition();
    var pic = 2; //담당자 없다
    if (ed_bilgPicNo.getValue() != "") {
      pic = 1; //담당자 있다
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let data = {
      odiName: "ac_101_01_01_sea",
      reportName: "/il/acc/ac_101_01_01_sea_02_temp.ozr",
      odiParam: {
        KCOMCD: ds_invoiceList.getCellData(curRow, "kcomcd"),
        PRTN_GRP_NO: ds_invoiceList.getCellData(curRow, "prtnGrpNo"),
        SEAAIR: '',
        IOGB: ds_invoiceList.getCellData(curRow, "iogb"),
        BILG_CLNT_NO: ds_invoiceList.getCellData(curRow, "bilgClntNo"),
        USER_ID: ds_invoiceList.getCellData(curRow, "modId"),
        TYPE: lc_printOp.getValue(),
        RMK: rd_rmk.getValue(),
        REMARK: txa_summary.getValue(),
        ENG: rd_enggb.getValue(),
        RECEIVE_SELLING_YN: ds_invoiceList.getCellData(curRow, "receiveSellingYn"),
        PIC: pic
      },
      viewerParam: {
        useprogressbar: true,
        // 프로그레스바 쓸지 말지
        zoom: 90,
        // 배율 설정
        "viewer.mode": "preview"
      },
      formParam: {
        PIC_NAME: txt_bilgPicNm.getValue()
      }
    };
    let opts = {
      id: "ozReportPopup",
      popupName: "오즈 리포트",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트"
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (ds_invoiceList.getCellData(curRow, "seaair") == "S") {
      //if(ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"seaair")=="S") {
      data.odiName = "ac_101_01_01_sea";
      data.reportName = "/il/acc/ac_101_01_01_sea_01.ozr";
      data.odiParam.SEAAIR = "S";
    } else {
      data.odiName = "ac_101_01_01_air";
      data.reportName = "/il/acc/ac_101_01_01_air_01.ozr";
      data.odiParam.SEAAIR = "A";
    }
    await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
  }
  //OZExecuteBatch();
};

//-------------------------------------------------------------------------
// 오즈화면
//-------------------------------------------------------------------------
scwin.f_Print = async function () {
  //새로만든 oz Report Function
  if (chb_pre.getValue() == 1 && chb_directSave.getValue() == 1) {
    await $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    chb_pre.setValue(0); //chb_pre.checked = false;
    chb_directSave.setValue(0); //chb_directSave.checked = false;
    return false;
  }
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  var curRow2 = ds_invoiceFreight.getRowPosition() == null ? 0 : ds_invoiceFreight.getRowPosition();
  var vSeaAirDiv = ds_invoiceList.getCellData(curRow, "seaair"); //JobType

  let odiName = "";
  let reportName = "";
  var pic = 2; //담당자 없다
  if (ed_bilgPicNo.getValue() != "") {
    pic = 1; //담당자 있다
  }
  let odiParam = {
    KCOMCD: ds_invoiceList.getCellData(curRow, "kcomcd"),
    PRTN_GRP_NO: '',
    SEAAIR: '',
    IOGB: ds_invoiceList.getCellData(curRow, "iogb"),
    BILG_CLNT_NO: ds_invoiceList.getCellData(curRow, "bilgClntNo"),
    USER_ID: scwin.vUserId,
    TYPE: lc_printOp.getValue(),
    RMK: rd_rmk.getValue(),
    REMARK: txa_summary.getValue(),
    ENG: rd_enggb.getValue(),
    RECEIVE_SELLING_YN: ds_invoiceList.getCellData(curRow, "receiveSellingYn"),
    ODR_NO: ds_invoiceFreight.getCellData(curRow, "odrNo"),
    SELL_SEQ: '',
    PIC: pic
  };
  let data = {
    reportName: reportName,
    odiParam: odiParam,
    viewerParam: {
      useprogressbar: true,
      printcommand: true,
      zoom: 100,
      mode: 'preview'
    },
    formParam: {
      odiName: odiName,
      BILLING_DT: '',
      PIC_NAME: ''
    },
    odiName
  };
  debugger;
  if (lc_printOp.getValue() == "4" || lc_printOp.getValue() == "2" || lc_printOp.getValue() == "6") {
    //4:통관용, 2:경리용, 6:통관용(외화)
    if (ed_bilgIntendDt.getValue() == "") {
      //Billing Data 없으면
      var param = "";
      for (i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
        if (ds_invoiceFreight.getCellData(i, "chk") == "T") {
          param = param + "," + ds_invoiceFreight.getCellData(i, "sellSeq"); //매출순번
        }
      }
      odiParam.PRTN_GRP_NO = "";
      odiParam.ODR_NO = ds_invoiceFreight.getCellData(curRow2, "odrNo"); //odiParam.add("ODR_NO", ds_invoiceFreight.NameValue(ds_invoiceFreight.RowPosition,"odrNo"));
      odiParam.SELL_SEQ = param.substring(1); //매출순번

      if (vSeaAirDiv == "S") {
        odiName = "ac_101_01_01_sea";
        reportName = "/il/acc/ac_101_01_01_sea_02_temp.ozr";
        odiParam.SEAAIR = "S";
        if (lc_printOp.getValue() == "2") {
          data.formParam.BILLING_DT = ed_tempBilgIntendDt.getValue();
        }
      } else {
        odiName = "ac_101_01_01_air";
        reportName = "/il/acc/ac_101_01_01_air_02.ozr";
        odiParam.SEAAIR = "A";
        data.formParam.PIC_NAME = txt_bilgPicNm.getValue();
      }
    } else {
      odiParam.PRTN_GRP_NO = ds_invoiceList.getCellData(curRow, "prtnGrpNo");
      odiParam.USER_ID = ds_invoiceList.getCellData(curRow, "modId"); //ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"modId")
      odiParam.ODR_NO = "";
      data.formParam.PIC_NAME = txt_bilgPicNm.getValue();
      if (vSeaAirDiv == "S") {
        odiName = "ac_101_01_01_sea";
        reportName = "/il/acc/ac_101_01_01_sea_01_temp.ozr";
        odiParam.SEAAIR = "S";
      } else {
        odiName = "ac_101_01_01_air";
        reportName = "/il/acc/ac_101_01_01_air_01.ozr";
        odiParam.SEAAIR = "A";
      }
    }
  } else {
    odiParam.PRTN_GRP_NO = ds_invoiceList.getCellData(curRow, "prtnGrpNo"); //odiParam.add("PRTN_GRP_NO", ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"prtnGrpNo"));
    odiParam.USER_ID = ds_invoiceList.getCellData(curRow, "modId"); //ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"modId")
    odiParam.ODR_NO = "";
    data.formParam.PIC_NAME = txt_bilgPicNm.getValue();
    if (vSeaAirDiv == "S") {
      odiName = "ac_101_01_01_sea";
      reportName = "/il/acc/ac_101_01_01_sea_01.ozr";
      odiParam.SEAAIR = "S";
    } else {
      odiName = "ac_101_01_01_air";
      reportName = "/il/acc/ac_101_01_01_air_01.ozr";
      odiParam.SEAAIR = "A";
    }
  }
  if (reportName == "") return;
  let previewMode = chb_pre.getValue() == "" ? "0" : chb_pre.getValue(); //미리보기
  let printMode = chb_directSave.getValue() == "1" ? 'silent' : 'view'; //바로저장 (인쇄옵션처리-Print)

  /* let data = {
        reportName : reportName
      , odiParam : odiParam
      , viewerParam : {
            useprogressbar : true
          , printcommand   : true
          , zoom           : 100
          , mode           : 'preview'
      }, forParam : {
          odiName : odiName
      }
      , odiName
  }; */

  data.reportName = reportName;
  data.odiParam = odiParam;
  data.formParam.odiName = odiName;
  data.odiName = odiName;
  let opts = {
    type: 'viewer',
    printMode: 'view',
    exportFilename: ds_invoiceList.getCellData(ds_invoiceList.getRowPosition(), "blno") + "_INVOICE_" + ds_invoiceList.getCellData(ds_invoiceList.getRowPosition(), "certiNo"),
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf',
    exportMode: 'view'
  };
  if (previewMode == "1") {
    //미리보기 호출
    $c.ext.openOzReport($p, data, opts);
  } else {
    //바로저장 호출(printMode)
    data.viewerParam.zoom = 0; //초기화
    data.viewerParam.mode = ""; //초기화

    data.viewerParam.useprogressbar = true; //Property 추가
    data.viewerParam.viewer = 100; //Property 추가

    if (printMode == "view") {
      $c.ext.printOzReport($p, data, opts); //print???
    } else {
      opts.exportMode = ""; //초기화

      $c.ext.downloadOzReport($p, data, opts); //downLoad???
    }
  }
};

//-------------------------------------------------------------------------
// 인쇄 (세금계산서)
//-------------------------------------------------------------------------
scwin.f_TaxPrint = async function () {
  //신규 로직으로 변경
  if (chb_pre.getValue() == 1 && chb_directSave.getValue() == 1) {
    //if(chb_pre.checked==true && chb_directSave.checked==true){
    await $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    chb_pre.setValue(0); //chb_pre.checked = false;
    chb_directSave.setValue(0); //chb_directSave.checked = false;
    return false;
  }
  let odiName = "ac_101_01_01";
  let reportName = "/il/acc/ac_101_01_01.ozr";
  if (reportName == "") {
    return;
  }
  var pic = 2; //담당자 없다
  if (ed_bilgPicNo.getValue() != "") {
    pic = 1; //담당자 있다
  }
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  let odiParam = {
    SEAAIR: ds_invoiceList.getCellData(curRow, "seaair"),
    PCHSSELLCLS: ds_invoiceList.getCellData(curRow, "sellVatNo"),
    SELL_VAT_NO: ds_invoiceList.getCellData(curRow, "sellVatNo"),
    RMK: rd_rmk.getValue(),
    PIC: pic
  };
  let data = {
    reportName: reportName,
    odiParam: odiParam,
    viewerParam: {
      useprogressbar: true,
      printcommand: true,
      zoom: 100,
      mode: 'preview'
    },
    formParam: {
      odiName: odiName
    },
    odiName
  };
  var exportFilname = ds_invoiceList.getCellData(curRow, "blno") + "_TAX" + curRow; //ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"blno")+"_TAX"+ds_invoiceList.RowPosition;
  let opts = {
    type: 'viewer',
    printMode: 'view',
    exportFilename: exportFilname,
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf',
    exportMode: 'view'
  };
  let previewMode = chb_pre.getValue() == "" ? "0" : chb_pre.getValue(); //미리보기
  let printMode = chb_directSave == "1" ? 'silent' : 'view'; //바로저장 (인쇄옵션처리-Print)

  if (previewMode == "1") {
    //미리보기 호출
    $c.ext.openOzReport($p, data, opts);
  } else {
    //바로저장 호출(printMode)
    data.viewerParam.zoom = 0; //초기화
    data.viewerParam.mode = ""; //초기화

    data.viewerParam.useprogressbar = true; //Property 추가
    data.viewerParam.viewer = 100; //Property 추가

    if (printMode == "view") {
      $c.ext.printOzReport($p, data, opts); //print???
    } else {
      opts.exportFilename = ""; //초기화
      opts.exportPath = ""; //초기화
      opts.exportFormat = ""; //초기화
      opts.exportMode = ""; //초기화

      let saveOptions = {};
      $c.ext.downloadOzReport($p, data, saveOptions); //downLoad???
    }
  }
};

//-------------------------------------------------------------------------
// 인쇄 (세금계산서) - 이전함수 ( 화면 검증 후 정리 하자.)
//-------------------------------------------------------------------------
scwin.f_TaxPrint_old = async function () {
  if (chb_pre.getValue() == 1 && chb_directSave.getValue() == 1) {
    //if(chb_pre.checked==true && chb_directSave.checked==true){
    await $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    chb_pre.setValue(0); //chb_pre.checked = false;
    chb_directSave.setValue(0); //chb_directSave.checked = false;
    return false;
  }
  var pic = 2; //담당자 없다
  if (ed_bilgPicNo.getValue() != "") {
    pic = 1; //담당자 있다
  }
  var curRow = ds_invoiceList.getRowPosition();
  let data = {
    odiName: "ac_101_01_01",
    reportName: "/il/acc/ac_101_01_01.ozr",
    odiParam: {
      SEAAIR: ds_invoiceList.getCellData(curRow, "seaair"),
      PCHSSELLCLS: ds_invoiceList.getCellData(curRow, "sellVatNo"),
      SELL_VAT_NO: ds_invoiceList.getCellData(curRow, "sellVatNo"),
      RMK: rd_rmk.getValue(),
      PIC: pic
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      "viewer.mode": "preview"
    },
    formParam: {}
  };
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
// 세금 계산서 Report
//-------------------------------------------------------------------------
scwin.f_RetrievePrint = async function () {
  if (lc_printOp.getValue() == "5") {
    //if (lc_printOp.BindColVal == "5"){
    await scwin.f_RetrieveCertiPrint(); // 거래명세표 출력 
  } else {
    await scwin.f_RetrieveTaxPrint(); // 세금계산서 출력 
  }
};

//-------------------------------------------------------------------------
// 거래명세표  Report
//-------------------------------------------------------------------------
scwin.f_RetrieveCertiPrint = async function () {
  var curRow = ds_invoiceList.getRowPosition();
  if (ds_invoiceList.getCellRow(curRow, "certiNo") == "") {
    await $c.win.alert($p, "Invoice를 먼저 생성 하세요");
    return;
  }
  //ds_search.NameValue(1,"certiNo") = ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"certiNo");	// certiNo
  dma_search.set("certiNo", ds_invoiceList.getCellData(curRow, "certiNo"));
  $c.sbm.execute($p, sbm_retrieveCertiPrint); //거래명세표 조회 TR    tr_retrieveCertiPrint.post();
};

//-------------------------------------------------------------------------
// 세금 계산서 Report
//-------------------------------------------------------------------------
scwin.f_RetrieveTaxPrint = async function () {
  var curRow = ds_invoiceList.getRowPosition();
  if (ds_invoiceList.getCellData(curRow, "sellVatNo") == "") {
    await $c.win.alert($p, "세금계산서 / 전표를 먼저 생성 하세요");
    return;
  }
  hid_sellVatNo.setValue(ds_invoiceList.getCellData(curRow, "sellVatNo")); //hid_sellVatNo.value = ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"sellVatNo");
  dma_search.set("sellVatNo", ds_invoiceList.getCellData(curRow, "sellVatNo")); //세금 계산서 번호     //ds_search.NameValue(1,"sellVatNo") = ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"sellVatNo");	// 세금 계산서 번호

  $c.sbm.execute($p, sbm_retrieveTaxPrint); //tr_retrieveTaxPrint.post();
};

//-------------------------------------------------------------------------
// Billing Type 원화일때, 체크 로직 추가
//-------------------------------------------------------------------------
scwin.f_chk_billgbSetting = async function () {
  var rc = ds_invoiceCommon.getTotalRow();
  //var cr   = ds_invoiceFreight.getTotalRow();
  var cucd = ds_invoiceCommon.getCellData(0, "crcCd"); //NameValue(1,"crcCd");

  if (rc >= 0 && cucd == "KRW") {
    for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
      if (ds_invoiceFreight.getCellData(i, "chk") == "T") {
        if (ds_invoiceFreight.getCellData(i, "crcCd").trim() != "KRW") {
          await $c.win.alert($p, "Billing Type이 원화입니다. \n재조회 후 진행하세요");
          return false;
        }
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// Customer Code 308556 ㈜한국하인즈건에 한하여 Remark 란에 자동 입력 될 수 있도록
//-------------------------------------------------------------------------
scwin.f_heinzRmk = async function () {
  //ds_heinzInfo.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveHeinzInfo&param1=" + ds_invoiceList.NameValue(ds_invoiceList.RowPosition,"blno");	            			
  //ds_heinzInfo.Reset();
  var curRow = ds_invoiceList.getRowPosition();
  sbm_heinzInfo.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveHeinzInfo&param1=" + ds_invoiceList.getCellData(curRow, "blno");
  await $c.sbm.execute($p, sbm_heinzInfo);
};

//-------------------------------------------------------------------------
// Validate check
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if ((await $c.gus.cfValidate($p, [oDetailInfo])) == false) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
//이마트의 경우 Document 추가 저장 필요
//-------------------------------------------------------------------------
scwin.f_SaveDocument = async function () {
  if (ds_invoiceList.getTotalRow() == 0) {
    return;
  }
  var curRow = ds_invoiceList.getRowPosition();
  if (ds_invoiceList.getCellData(curRow, "certiNo") == "") {
    await $c.win.alert($p, "Invoice를 먼저 생성 하세요");
    return;
  }
  var pop_url = "/ui/il/acc/acinv/ac_101_01_05b.xml"; //sURL = "ac_101_01_05b.jsp";
  var param = {
    kcomcd: hid_kcomcd.getValue(),
    mblno: ed_mblno.getValue(),
    blno: ed_blno.getValue(),
    mhno: cnd_lc_mhno.getValue(),
    certiNo: ds_invoiceList.getCellData(curRow, "certiNo"),
    userId: scwin.vUserId,
    prtnGrpNo: ds_invoiceList.getCellData(curRow, "prtnGrpNo"),
    type: cnd_lc_seaair.getValue()
  };
  console.log(param);
  var opts = scwin.opts || {};
  opts.model = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 500;
  opts.height = 560;
  opts.popupName = 'Document Management';
  rtnList = await $c.win.openPopup($p, pop_url, opts, param);
};
scwin.f_oldRowInit = function () {
  scwin.oldRow_1 = -1;
  scwin.oldRow_2 = -1;
};

//-------------------------------------------------------------------------
// 오즈화면
//-------------------------------------------------------------------------
scwin.f_BulkBlPrint = async function () {
  //alert('reoprt view');
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  //var odiParam = new ODIParam("ac_101_01_01_bulk");
  //	odiParam.add("KCOMCD", 'DBEX');
  //	odiParam.add("PRTN_GRP_NO", 'CE07073102401');
  //	odiParam.add("SEAAIR", 'S');
  //	odiParam.add("IOGB", 'O');
  //	odiParam.add("BILG_CLNT_NO", '125342');
  //	odiParam.add("USER_ID", 'fwadmin');
  //	odiParam.add("TYPE", '1');

  if (chb_pre.getValue() == 1 && chb_directSave.getValue() == 1) {
    await $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    chb_pre.setValue(0);
    chb_directSave.setValue(0);
    return false;
  }
  let odiName = "ac_101_01_01_bulk";
  let reportName = "/il/acc/ac_101_01_01_bulk.ozr";
  if (reportName == "") {
    return;
  }
  var pic = 2;
  if (ed_bilgPicNo.getValue() != "") {
    pic = 1;
  }
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  let odiParam = {
    KCOMCD: ds_invoiceList.getCellData(curRow, "kcomcd"),
    PRTN_GRP_NO: ds_invoiceList.getCellData(curRow, "prtnGrpNo"),
    SEAAIR: 'S',
    IOGB: ds_invoiceList.getCellData(curRow, "iogb"),
    BILG_CLNT_NO: ds_invoiceList.getCellData(curRow, "bilgClntNo"),
    USER_ID: ds_invoiceList.getCellData(curRow, "modId"),
    TYPE: lc_printOp.getValue(),
    RMK: rd_rmk.getValue(),
    REMARK: txa_summary.getValue(),
    ENG: rd_enggb.getValue(),
    PIC: pic
  };
  let data = {
    reportName: reportName,
    odiParam: odiParam,
    viewerParam: {
      useprogressbar: true,
      printcommand: true,
      zoom: 100,
      mode: 'preview'
    },
    formParam: {
      odiName: odiName
    },
    odiName
  };
  var exportFilname = ds_invoiceList.getCellData(curRow, "blno") + "_INVOICE" + "_" + ds_invoiceList.getCellData(curRow, "certiNo");
  let opts = {
    type: 'viewer',
    printMode: 'view',
    exportFilename: exportFilname,
    exportPath: 'C:\\OZExport',
    exportFormat: 'pdf',
    exportMode: 'view'
  };
  let previewMode = chb_pre.getValue() == "" ? "0" : chb_pre.getValue(); //미리보기
  let printMode = chb_directSave == "1" ? 'silent' : 'view'; //바로저장 (인쇄옵션처리-Print)

  if (previewMode == "1") {
    //미리보기 호출
    $c.ext.openOzReport($p, data, opts);
  } else {
    //바로저장 호출(printMode)
    data.viewerParam.zoom = 0; //초기화
    data.viewerParam.mode = ""; //초기화

    data.viewerParam.useprogressbar = true; //Property 추가
    data.viewerParam.viewer = 100; //Property 추가

    if (printMode == "view") {
      $c.ext.printOzReport($p, data, opts); //print???
    } else {
      opts.exportFilename = ""; //초기화
      opts.exportPath = ""; //초기화
      opts.exportFormat = ""; //초기화
      opts.exportMode = ""; //초기화

      let saveOptions = {};
      $c.ext.downloadOzReport($p, data, saveOptions); //downLoad???
    }
  }
};

//-------------------------------------------------------------------------
// 오즈화면
//-------------------------------------------------------------------------
scwin.f_BulkBlPrint_old = async function () {
  //alert('reoprt view');
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  //var odiParam = new ODIParam("ac_101_01_01_bulk");
  //	odiParam.add("KCOMCD", 'DBEX');
  //	odiParam.add("PRTN_GRP_NO", 'CE07073102401');
  //	odiParam.add("SEAAIR", 'S');
  //	odiParam.add("IOGB", 'O');
  //	odiParam.add("BILG_CLNT_NO", '125342');
  //	odiParam.add("USER_ID", 'fwadmin');
  //	odiParam.add("TYPE", '1');

  if (chb_pre.getValue() == 1 && chb_directSave.getValue() == 1) {
    await $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    chb_pre.setValue(0);
    chb_directSave.setValue(0);
    return false;
  }
  var curRow = ds_invoiceList.getRowPosition();
  let data = {
    odiName: "ac_101_01_01_bulk",
    reportName: "/il/acc/ac_101_01_01_bulk.ozr",
    odiParam: {
      KCOMCD: ds_invoiceList.getCellData(curRow, "kcomcd"),
      PRTN_GRP_NO: ds_invoiceList.getCellData(curRow, "prtnGrpNo"),
      SEAAIR: 'S',
      IOGB: ds_invoiceList.getCellData(curRow, "iogb"),
      BILG_CLNT_NO: ds_invoiceList.getCellData(curRow, "bilgClntNo"),
      USER_ID: ds_invoiceList.getCellData(curRow, "modId"),
      TYPE: lc_printOp.getValue(),
      RMK: rd_rmk.getValue(),
      REMARK: txa_summary.getValue(),
      ENG: rd_enggb.getValue(),
      PIC: ''
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      "viewer.mode": "preview"
    },
    formParam: {}
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  var pic = 2;
  if (ed_bilgPicNo.getValue() != "") {
    pic = 1;
  }
  data.odiParam.PIC = pic;
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 인쇄 (거래명세표)
//-------------------------------------------------------------------------
scwin.f_CertiPrint = async function () {
  if (chb_pre.getValue() == 1 && chb_directSave.getValue() == 1) {
    await $c.win.alert($p, "미리보기 와 바로저장을 동시에 체크할 수 없습니다.");
    chb_pre.setValue(0);
    chb_directSave.setValue(0);
    return false;
  }
  var curRow = ds_invoiceList.getRowPosition();
  let data = {
    odiName: "ac_101_01_01_certi",
    reportName: "/il/acc/ac_101_01_01_certi.ozr",
    odiParam: {
      PCHSSELLCLS: ds_invoiceList.getCellData(curRow, "certiNo"),
      SEAAIR: ds_invoiceList.getCellData(curRow, "seaair"),
      certiNo: ds_invoiceList.getCellData(curRow, "certiNo"),
      bilgLodeptCd: ds_invoiceList.getCellData(curRow, "dept"),
      bilgClntNo: ds_invoiceList.getCellData(curRow, "bilgClntNo"),
      SELL_VAT_NO: ds_invoiceList.getCellData(curRow, "sellVatNo")
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      "viewer.mode": "preview"
    },
    formParam: {}
  };
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

////////////////////////////////////////////////////////////////////////////////////////////////
// Control Event Function 
////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------
//Customer Name change Event
//-------------------------------------------------------------------------
scwin.udc_ilcomCd_bilgClnt_onviewchangeNameEvent = function (info) {
  //scwin.f_PopUp('bilgClntNo', 'T');
  if (cnd_txt_bilgClntNm.getValue() === "") {
    cnd_ed_bilgClntNo.setValue("");
  } else {
    scwin.f_PopUp('bilgClntNo', 'T');
  }
};

//-------------------------------------------------------------------------
//AS-IS : <script language=JavaScript for=cnd_ed_bilgClntNo event=onKillFocus()>
//-------------------------------------------------------------------------
scwin.udc_ilcomCd_bilgClnt_onblurCodeEvent = function (e) {
  // 조회 CostomerCode
  if (cnd_ed_bilgClntNo.getValue() === "") {
    cnd_ed_bilgClntNo.setValue(""); //Customer Name 초기화
  } else {
    scwin.f_PopUp('bilgClntNo', 'T');
  }
};

//-------------------------------------------------------------------------
//<!-- Department change event -->
//AS-IS : <script language=JavaScript for=cnd_ed_dept event=onKillFocus()>
//-------------------------------------------------------------------------
scwin.udc_comCd_dept_onblurCodeEvent = function (e) {
  if (cnd_ed_dept.getValue() === "") {
    cnd_txt_deptnm.setValue("");
  } else {
    scwin.f_PopUp(3, 'T');
  }
};

//-------------------------------------------------------------------------
//Customer image click Event
//-------------------------------------------------------------------------
scwin.udc_ilcomCd_bilgClnt_onclickEvent = function (e) {
  scwin.f_PopUp('bilgClntNo', 'F');
};

//-------------------------------------------------------------------------
//Department Name change Event
//-------------------------------------------------------------------------
scwin.udc_comCd_dept_onviewchangeNameEvent = function (info) {
  if (cnd_txt_deptnm.getValue() === "") {
    cnd_ed_dept.setValue("");
  } else {
    scwin.f_PopUp(3, 'T');
  }
};

//-------------------------------------------------------------------------
//Department image click Event
//-------------------------------------------------------------------------
scwin.udc_comCd_dept_onclickEvent = function (e) {
  scwin.f_PopUp(3, 'F');
};

//-------------------------------------------------------------------------
//<!-- Customer PIC change event -->
//AS-IS : <script language=JavaScript for=ed_bilgPicNo event=onKillFocus()>
//-------------------------------------------------------------------------
scwin.udc_ilcomCd_bilgPic_onblurCodeEvent = function (e) {
  if (ed_bilgPicNo.getValue() === "") {
    txt_bilgPicNm.setValue("");
  } else {
    scwin.f_PopUp(2, 'T');
  }
};

//-------------------------------------------------------------------------
//PIC image click Event
//-------------------------------------------------------------------------
scwin.udc_ilcomCd_bilgPic_onclickEvent = function (e) {
  scwin.f_PopUp(2, 'T');
};

//-------------------------------------------------------------------------
//Group No Button Click Event
//-------------------------------------------------------------------------
scwin.btn_PrtnGrpNo_onclick = function (e) {
  scwin.f_PrtnGrpNo();
};

//-------------------------------------------------------------------------
//txa_summary onkeyup Event ( Remark tab )
//-------------------------------------------------------------------------
scwin.txa_summary_onkeyup = function (e) {
  scwin.f_lengthCheck();
};

//-------------------------------------------------------------------------
//btn_odrRegIfno Click Event(Tax Creat btn)
//-------------------------------------------------------------------------
scwin.btn_odrRegIfno_onclick = function (e) {
  scwin.f_SlipPopUp();
};

//-------------------------------------------------------------------------
//btn_odrRegIfnoMult Click Event(Multi Tax Create btn)
//-------------------------------------------------------------------------
scwin.btn_odrRegIfnoMulti_onclick = function (e) {
  scwin.f_SlipCreate();
};

//-------------------------------------------------------------------------
//btn_profit Click Event(Profit)
//-------------------------------------------------------------------------
scwin.btn_profit_onclick = function (e) {
  scwin.f_openPgm('Profit');
};

//-------------------------------------------------------------------------
//btn_rsmInvoic Click Event(RSM Invoice)
//-------------------------------------------------------------------------
scwin.btn_rsmInvoice_onclick = function (e) {
  //이 버튼에서 호출되는 화면 사용 안하는 화면이라서 이 버튼 숨김 처리 하면 됨.( 2026.03.09 윤성호 이사님 확인 사항.)
  scwin.f_openPgm('RSM');
};

//-------------------------------------------------------------------------
//Cancel Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Undo();
  scwin.f_oldRowInit();
};

//-------------------------------------------------------------------------
//Create Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};

//-------------------------------------------------------------------------
//Update Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Update_onclick = function (e) {
  scwin.f_Update();
};

//-------------------------------------------------------------------------
//Save Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Save_onclick = async function (e) {
  await scwin.f_Save();
  scwin.f_oldRowInit();
};

//-------------------------------------------------------------------------
//Delete Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};

//-------------------------------------------------------------------------
//Print Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Print_onclick = function (e) {
  scwin.f_Print();
  //scwin.f_Print_old();
};

//-------------------------------------------------------------------------
//Tax Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Tax_onclick = function (e) {
  scwin.f_RetrievePrint();
};

//-------------------------------------------------------------------------
//Emart Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_Emart_onclick = function (e) {
  scwin.f_SaveDocument();
};

//-------------------------------------------------------------------------
//Bulk B/L Print Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_BulkBLPrint_onclick = function (e) {
  scwin.f_BulkBlPrint();
};

//-------------------------------------------------------------------------
//휴지통 Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
//Search Btn Click Event
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.oldRow_1 = -1; //초기화
  scwin.oldRow_2 = -1; //초기화
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
//Master B/L No onBlur Event
//<script language=JavaScript for=cnd_ed_mblno event=onKillFocus()>
//-------------------------------------------------------------------------
scwin.cnd_ed_mblno_onblur = function (e) {
  scwin.f_oldRowInit();
  scwin.f_MhnoLoading("M", cnd_ed_mblno.getValue());
};

//-------------------------------------------------------------------------
//cnd_ed_mblno oneditkeyup Event ( 대문자로 변경 )
//-------------------------------------------------------------------------
scwin.cnd_ed_mblno_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};

//-------------------------------------------------------------------------
//sbm_retrieve(검색) Callback Function
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  dma_invoice.setArray([]); //invoice DataMap 초기화
  ed_slipCloseYm.setValue(""); //회계마감일
  ed_taxCloseYm.setValue(""); //세무마감일

  if (e.responseJSON.OUT_DS1.length >= 1) {
    ds_invoiceList.setRowPosition(0);
    for (var idx = 0; idx < ds_invoiceList.getTotalRow(); idx++) {
      if (ds_invoiceList.getCellData(idx, "cucd") == "KRW") {
        ds_invoiceList.setCellData(idx, "EXP", "원화");
        gr_invoiceList.setCellColor(idx, "EXP", "Blue");
      } else {
        ds_invoiceList.setCellData(idx, "EXP", "외화");
        gr_invoiceList.setCellColor(idx, "EXP", "Red");
      }

      //sumSellAmt + sumVatAmt
      var vExpr = parseInt(ds_invoiceList.getCellData(idx, "sumSellAmt")) + parseInt(ds_invoiceList.getCellData(idx, "sumVatAmt"));
      ds_invoiceList.setCellData(idx, "Expr", vExpr);
      //ds_invoiceList.modifyRowStatus(idx, "");
    }
    //요 for문에서 ds_invoiceList에 값 셋팅되어 rowStatus값이 수정("U")으로 변해서 강제로 상태값 초기화함..
    ds_invoiceList.modifyAllStatus("R");
    total_gr_invoiceList.setValue(e.responseJSON.OUT_DS1.length); //총##건

    ed_bilgPicNo.setValue(ds_invoiceList.getCellData(0, "bilgPicNo")); //PIC Code
    txt_bilgPicNm.setValue(ds_invoiceList.getCellData(0, "bilgPicNm")); //PIC Name

    //scwin.gr_invoiceList_oncellclick(0, 0, 0);      //Freight Info 그리드 호출

    //ds_invoiceList.setRowPosition(0);     //CKCD STYYCYG [2026.03.30] 여기서 그리드 포커스 주고 있었네...

    //중간에 있는 Component들 바인딩값 셋팅
    scwin.f_Set_dma_invoice(0);
    ed_slipCloseYm.setValue(ds_invoiceList.getCellData(0, "slipCloseYm")); //회계마감일 데이터 바인딩
    ed_taxCloseYm.setValue(ds_invoiceList.getCellData(0, "taxCloseYm")); //세무마감일 데이터 바인딩

    //scwin.ds_invoiceList_onrowpositionchange();     //CKCD STYYCYG [2026.03.24] 오후7시34분경 신고 유무 활성화, 비활성화 땜에 추가함. 필요없음 삭제하자....

    //ASIS <script language=JavaScript for=ds_invoiceList event=OnRowPosChanged(row)> 하단부 여기에 선언
    //TOBE에 여기 말고 scwin.ds_invoiceList_onrowpositionchange에도 선언되어 있음.
    var vRowStatus = ds_invoiceList.getRowStatusValue(0);
    var prtnGrpNo = ds_invoiceList.getCellData(0, "prtnGrpNo"); // 거래명세서Group번호
    var slipNo = ds_invoiceList.getCellData(0, "slipNo"); // 전표번호
    var certiNo = ds_invoiceList.getCellData(0, "certiNo"); // 거래명세서번호

    if (vRowStatus == 0) {
      //getRowStatusValue[초기상태:0, 갱신(U):1, 삽입(I):2, 삭제(D):3, 삽입 후 삭제:4]
      //$c.gus.cfDisableBtnOnly([btn_Print, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]); //2026.04.07 김진성책임요청사항.(print버튼 활성화)
      if (prtnGrpNo.trim() == "") {
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
        scwin.processFlag = "INIT";
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Create, btn_Save, btn_Update, btn_Delete, btn_Print, btn_Tax]);
        if (slipNo == "") {
          $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete, btn_Print]);
          if (certiNo != "") {
            $c.gus.cfEnableBtnOnly($p, [btn_Tax]);
          }
          scwin.processFlag = "RETRIEVE";
        } else {
          $c.gus.cfEnableBtnOnly($p, [btn_Print, btn_Tax]);
          scwin.processFlag = "RETRIEVE";
        }
      }
    } else if (vRowStatus == 2) {
      //Create
      scwin.f_Set("CREATE");
    } else if (vRowStatus == 1) {
      //Update
      scwin.f_Set("UPDATE");
    }
  } else {
    //<script language=JavaScript for=ds_invoiceList event=OnLoadCompleted(rowcnt)>
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    scwin.processFlag = "INIT";
    scwin.f_Set("INIT");
  }

  //<script language="JavaScript" for="tr_retrieve" event="OnSuccess()">
  chb_billgb.setValue(0); //chb_billgb.checked = false;
};

//-------------------------------------------------------------------------
//공통 Invoice 및  운임 조회 TR Callback Fn
//-------------------------------------------------------------------------
scwin.sbm_retrieveCommon_submitdone = function (e) {
  var chkMsgCnt = 0;
  if (e.responseJSON.OUT_DS1.length >= 1) {
    // chb_billgb.setDisabled(false); 
    // if (ds_invoiceCommon.getCellData(0, "crcCd") == "KRW") {
    //     chb_billgb.checkAll(true);          //chb_billgb.checked=true;
    // } else {
    //     chb_billgb.checkAll(false);         //chb_billgb.checked = false;
    // }
    // chb_billgb.setDisabled(true);

    //<script language=JavaScript for=ds_invoiceCommon event=OnLoadCompleted(rowcnt)>로직 구현
    //default 모두 check
    for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
      if (ds_invoiceCommon.getCellData(i, "certiNo") == "") {
        ds_invoiceCommon.setCellData(i, "spplyAmt", 0);
        ds_invoiceCommon.setCellData(i, "spplyAmtFcrc", 0);
        ds_invoiceCommon.setCellData(i, "vatAmt", 0);
        ds_invoiceCommon.setCellData(i, "fcrcBilgAmt", 0);
        ds_invoiceCommon.setCellData(i, "bilgAmt", 0);
        ds_invoiceCommon.setCellData(i, "bilgAmtFcrc", 0);
      }
      if (ds_invoiceCommon.getCellData(i, "chk") == "F") {
        //if(ds_invoiceCommon.NameValue(i,"chk")=="F"){
        ds_invoiceCommon.setCellData(i, "chk", "T"); //ds_invoiceCommon.NameValue(i,"chk") = "T";
      }
      //ds_invoiceCommon.NameValue(i,"spplyAmtOri") =ds_invoiceCommon.NameValue(i,"spplyAmt")+ds_invoiceCommon.NameValue(i,"vatAmt");
      var vSpplyAmtOri = parseInt(ds_invoiceCommon.getCellData(i, "spplyAmt")) + parseInt(ds_invoiceCommon.getCellData(i, "vatAmt"));
      ds_invoiceCommon.setCellData(i, "spplyAmtOri", vSpplyAmtOri);
    }

    //첫 조회 후 상태값 초기화
    //ds_invoiceList.modifyAllStatus("R");  2026.03.30 주석 처리

    //중간에 있는 Component들 바인딩값 셋팅 -- 이놈들 ds_invoiceCommon랑 ds_invoiceList 섞여있다....
    //var curRow = ds_invoiceList.getRowPosition();
    //scwin.f_Set_dma_invoice(curRow);

    //요기서 태우자......(처음 그리드 첫번째 Row click )
    //scwin.ds_invoiceList_onrowpositionchange();       //2026.03.24 주석처리함. ( 필요 없네...)

    dma_invoice.set("summary", ds_invoiceCommon.getCellData(0, "summary")); //summary가 ds_invoice가 아니고 invoiceCommon에 있다.수정함.
  } else {
    chkMsgCnt = 1;
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    scwin.processFlag = "INIT";
    scwin.f_Set("INIT");
  }

  //ed_bilgClntNo.setValue(hid_intendDt.getValue());        //ed_bilgIntendDt.text = hid_intendDt.value;
  ed_bilgPicNo.setValue(hid_bilgPicNo.getValue()); //ed_bilgPicNo.text = hid_bilgPicNo.value;
  txt_bilgPicNm.setValue(hid_bilgPicNm.getValue()); //txt_bilgPicNm.value = hid_bilgPicNm.value;

  if (ds_invoiceList.getCellData(ds_invoiceList.getRowPosition(), "certiNo") == "" && ds_invoiceList.getCellData(ds_invoiceList.getRowPosition(), "bilgClntNo") == "308556") {
    scwin.f_heinzRmk();
  }
  var curRow = ds_invoiceList.getRowPosition() == "" ? 0 : ds_invoiceList.getRowPosition();
  var vInvoiceNo = ds_invoiceList.getCellData(curRow, "certiNo"); //InvoceNo

  if (e.responseJSON.OUT_DS2.length >= 1) {
    for (var idx = 0; idx < ds_invoiceFreight.getTotalRow(); idx++) {
      var vExpr = parseInt(ds_invoiceFreight.getCellData(idx, "sellAmt")) + parseInt(ds_invoiceFreight.getCellData(idx, "vatAmt"));
      ds_invoiceFreight.setCellData(idx, "Expr", vExpr); //Total

      //그리드 체크박스 선택 셋팅
      gr_invoiceFreightList.setCellChecked(idx, "chk", true);

      //invoiceNo가 있으면 체크박스 readOnly 셋팅(개별선택불가처리)
      if (vInvoiceNo != "") {
        gr_invoiceFreightList.setRowReadOnly(idx, true);
      }
    }

    //<script language=JavaScript for=ds_invoiceFreight event=OnLoadCompleted(rowcnt)> 요기다 구현.
    hid_commNm.setValue(ds_invoiceFreight.getCellData(0, "commNm")); //hid_commNm.value = ds_invoiceFreight.NameValue(1,"commNm");
    for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
      // if(ds_invoiceFreight.NameValue(i,"chk")=="F"){
      // 	ds_invoiceFreight.NameValue(i,"chk") = "T";
      // }
      if (ds_invoiceFreight.getCellData(i, "chk") == "F") {
        ds_invoiceFreight.setCellData(i, "chk", "T");
      }
    }
  } else {
    if (chkMsgCnt == 0) {
      $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    }
    scwin.processFlag = "INIT";
    scwin.f_Set("INIT");
  }
  total_gr_invoiceFreightList.setValue(e.responseJSON.OUT_DS2.length); //총##건

  //AS-IS <script language=JavaScript for=ds_invoiceList event=OnRowPosChanged(row)> 로직 호출
  //로직 확인 후 삭제 할 수 있으면 아래 scwin.f_invoiceListRowChange 호출 삭제 하자.
  return;
  var curRow = gr_invoiceList.getFocusedRowIndex();
  scwin.f_invoiceListRowChange(gr_invoiceList.getFocusedRowIndex(curRow));
};

//-------------------------------------------------------------------------
// 중간에 있는 Component들 바인딩값 셋팅 -  첫 로딩시, 그리드 클릭시 호출됨.
//-------------------------------------------------------------------------
scwin.f_Set_dma_invoice = function (pRow) {
  //중간에 있는 Component들 바인딩값 셋팅
  dma_invoice.setJSON([]);
  dma_invoice.setJSON(ds_invoiceList.getRowJSON(pRow));
};

//-------------------------------------------------------------------------
//AS-IS <script language=JavaScript for=ds_invoiceList event=OnRowPosChanged(row)> 에서 구현된 코드로 만든 함수.
//scwin.sbm_retrieveCommon_submitdone 에서 호출되게 구현함.
//2026.03.24 이 함수는 호출부 없네....확인 후 삭제 합시다. 헤깔려서 막 만들었나부다...ㅜㅜ
//-------------------------------------------------------------------------
scwin.f_invoiceListRowChange = function (pRow) {
  return;
  var vRowPosition = ds_invoiceList.getRowPosition();
  var vCountRow = txt_countRow.getValue(); //hidden Tag
  var vRowStatus = ds_invoiceList.getRowStatusValue(vRowPosition);
  if (pRow >= 0) {
    var vCountRow = ds_invoiceList.getTotalRow();
    var vChgCount = 0;
    var vChgRow = 0;
    for (var i = 0; i <= vCountRow; i++) {
      var vCurRowStatus = ds_invoiceList.getRowStatusValue(i);
      if (vCurRowStatus == 2 || vCurRowStatus == 3) {
        //asis : [1:Insert, 3:Delete],  //getRowStatusValue[초기상태:0, 갱신(U):1, 삽입(I):2, 삭제(D):3, 삽입 후 삭제:4]
        vChgCount++;
        vChgRow = i;
      }
    }
    var kcomcd = ds_invoiceList.getCellData(vRowPosition, "kcomcd"); // 대표 거래처 코드
    var seaair = ds_invoiceList.getCellData(vRowPosition, "seaair"); // 해운 항공 Trans 구분
    var iogb = ds_invoiceList.getCellData(vRowPosition, "iogb"); // Import/Export 구분
    var mblno = ds_invoiceList.getCellData(vRowPosition, "mblno"); // MASTER B/L NO 
    var blno = ds_invoiceList.getCellData(vRowPosition, "blno"); // HOUSE B/L NO
    var mhno = ds_invoiceList.getCellData(vRowPosition, "mhno"); // Console NO

    var certiNo = ds_invoiceList.getCellData(vRowPosition, "certiNo"); // 거래명세서번호
    var prtnGrpNo = ds_invoiceList.getCellData(vRowPosition, "prtnGrpNo"); // 거래명세서Group번호
    var bilgClntNo = ds_invoiceList.getCellData(vRowPosition, "bilgClntNo"); // 청구처 코드 
    var bilgClntNm = ds_invoiceList.getCellData(vRowPosition, "bilgClntNm"); // 청구처명

    var slipNo = ds_invoiceList.getCellData(vRowPosition, "slipNo"); // 전표번호
    var odrNo = ds_invoiceList.getCellData(vRowPosition, "odrNo"); // Order No

    var intendDt = ds_invoiceList.getCellData(vRowPosition, "confirmDt"); // billing date
    var bilgPicNo = ds_invoiceList.getCellData(vRowPosition, "bilgPicNo"); // PIC Code
    var bilgPicNm = ds_invoiceList.getCellData(vRowPosition, "bilgPicNm"); // PIC Name

    //ds_searchFreight --> dma_searchFreight

    dma_searchFreight.set("kcomcd", kcomcd); // 대표 거래처 코드
    dma_searchFreight.set("seaair", seaair); // 해운 항공 Trans 구분
    dma_searchFreight.set("iogb", iogb); // Import/Export 구분
    dma_searchFreight.set("mblno", mblno); // MASTER B/L NO 
    dma_searchFreight.set("blno", blno); // HOUSE B/L NO
    dma_searchFreight.set("mhno", mhno); // Console NO

    dma_searchFreight.set("certiNo", certiNo); // 거래명세서번호
    dma_searchFreight.set("prtnGrpNo", prtnGrpNo); // 거래명세서Group번호
    dma_searchFreight.set("bilgClntNo", bilgClntNo); // 청구처 코드 
    dma_searchFreight.set("bilgClntNm", bilgClntNm); // 청구처명

    dma_searchFreight.set("odrNo", odrNo); // Order No
    dma_searchFreight.set("slipNo", slipNo); // 전표 번호

    //2026.03.21 get에서 set으로 변경
    hid_intendDt.setValue(intendDt); //hid_intendDt.value = intendDt;
    hid_bilgPicNo.setValue(bilgPicNo); //hid_bilgPicNo.value = bilgPicNo;
    hid_bilgPicNm.setValue(bilgPicNm); //hid_bilgPicNm.value = bilgPicNm;

    lc_taxnClsCd.setValue(ds_invoiceList.getCellAllData(vRowPosition, "taxnClsCd")); //과세구분
    if (ds_invoiceList.getCellData(vRowPosition, "taxnClsCd") == "") {
      //과세구분
      if (ds_invoiceList.getCellData(vRowPosition, "sumVatAmt") == 0) {
        lc_taxnClsCd.setValue("02");
        $c.gus.cfDisableObjects($p, [lc_taxnClsCd]); //비활성화
      } else {
        lc_taxnClsCd.setValue("01");
        $c.gus.cfEnableObjects($p, [lc_taxnClsCd]); //활성화
      }
    }
    if (vRowStatus == 0) {
      //getRowStatusValue[초기상태:0, 갱신(U):1, 삽입(I):2, 삭제(D):3, 삽입 후 삭제:4]
      $c.gus.cfDisableBtnOnly($p, [btn_Print, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      if (prtnGrpNo.trim() == "") {
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
        scwin.processFlag = "INIT";
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Create, btn_Save, btn_Update, btn_Delete, btn_Print, btn_Tax]);
        if (slipNo == "") {
          $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete, btn_Print]);
          if (certiNo != "") {
            $c.gus.cfEnableBtnOnly($p, [btn_Tax]);
          }
          scwin.processFlag = "RETRIEVE";
        } else {
          $c.gus.cfEnableBtnOnly($p, [btn_Print, btn_Tax]);
          scwin.processFlag = "RETRIEVE";
        }
      }
    } else if (vRowStatus == 2) {
      //Create
      scwin.f_Set("CREATE");
    } else if (vRowStatus == 1) {
      //Update
      scwin.f_Set("UPDATE");
    }
  } else {
    scwin.f_Set("INIT");
    scwin.processFlag = "INIT";
  }
};

//-------------------------------------------------------------------------
//Invoice Info Grid Cell Click Event <script language=JavaScript for=gr_invoiceList event=OnClick(row,colid)>
//-------------------------------------------------------------------------
scwin.gr_invoiceList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.oldRow_1 != rowIndex) {
    scwin.oldRow_1 = rowIndex;
    ed_bilgPicNo.setValue(dma_invoice.get("bilgPicNo")); //PIC Code
    txt_bilgPicNm.setValue(dma_invoice.get("bilgPicNm")); //PIC Name
    //ds_searchFreight --> dma_searchFreight
    dma_searchFreight.set("kcomcd", ds_invoiceList.getCellData(rowIndex, "kcomcd")); //대표거래처코드
    dma_searchFreight.set("seaair", ds_invoiceList.getCellData(rowIndex, "seaair")); //해운 항공 Transe 구분
    dma_searchFreight.set("iogb", ds_invoiceList.getCellData(rowIndex, "iogb")); // Import/Export 구분
    dma_searchFreight.set("mblno", ds_invoiceList.getCellData(rowIndex, "mblno")); // MASTER B/L NO
    dma_searchFreight.set("blno", ds_invoiceList.getCellData(rowIndex, "blno")); // HOUSE B/L NO
    dma_searchFreight.set("mhno", ds_invoiceList.getCellData(rowIndex, "mhno")); // Console No

    dma_searchFreight.set("certiNo", ds_invoiceList.getCellData(rowIndex, "certiNo")); // 거래명세서번호
    dma_searchFreight.set("prtnGrpNo", ds_invoiceList.getCellData(rowIndex, "prtnGrpNo")); // 거래명세서Group번호
    dma_searchFreight.set("bilgClntNo", ds_invoiceList.getCellData(rowIndex, "bilgClntNo")); // 청구처 코드
    dma_searchFreight.set("bilgClntNm", ds_invoiceList.getCellData(rowIndex, "bilgClntNm")); // 청구처명
    dma_searchFreight.set("vatYn", ds_invoiceList.getCellData(rowIndex, "vatYn")); // 부가세 유무

    dma_searchFreight.set("vatYn", ds_invoiceList.getCellData(rowIndex, "slipNo")); // 전표번호
    dma_searchFreight.set("odrNo", ds_invoiceList.getCellData(rowIndex, "odrNo")); // Order No

    dma_searchFreight.set("locPtnCls", "1"); //국내해외매출구분(국내:1 해외:2)       -  ASIS f_HeaderCreate 함수내에서 셋팅함. 이쪽으로 옮김.

    if (dma_searchFreight.get("mhno") != "" && dma_searchFreight.get("bilgClntNo") != "") {
      scwin.f_RetrieveCommon(); //운임조회
    }

    // if(ds_invoiceCommon.NameValue(ds_invoiceCommon.RowPosition,"crcCd")=="KRW"){
    //     chb_billgb.checked=true;
    //     chb_billgb.disabled=true;
    // }else{
    //     chb_billgb.checked = false;
    //     chb_billgb.disabled=true;
    // }

    //중간에 있는 Component들 바인딩값 셋팅
    scwin.f_Set_dma_invoice(rowIndex);
    chb_billgb.setDisabled(false);
    var curRow = ds_invoiceList.getRowPosition();
    if (ds_invoiceList.getCellData(curRow, "cucd") == "KRW") {
      chb_billgb.checkAll(true); //chb_billgb.checked=true;
    } else {
      chb_billgb.checkAll(false); //chb_billgb.checked = false;
    }
    chb_billgb.setDisabled(true);
  }
};

//-------------------------------------------------------------------------
//InvoiceFreightList Grid Cell Click Event <script language=JavaScript for=ds_invoiceFreight event=OnRowPosChanged(row)>
//-------------------------------------------------------------------------
scwin.gr_invoiceFreightList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.oldRow_2 != rowIndex) {
    scwin.oldRow_2 = rowIndex;
    if (ds_invoiceFreight.getCellData(rowIndex, "certiNo") == "") {
      //gr_invoiceFreightList.ColumnProp("chk","Edit") = "ANY";
      gr_invoiceFreightList.setCellDisableEdit(rowIndex, "chk", false);
    } else {
      //gr_invoiceFreightList.ColumnProp("chk","Edit") = "None";
      gr_invoiceFreightList.setCellDisableEdit(rowIndex, "chk", true);
    }
  }
};

//-------------------------------------------------------------------------
// AS-IS : <script language="javascript"  for=gr_invoiceFreightList event=OnHeadCheckClick(Col,Colid,bCheck)>
//-------------------------------------------------------------------------
scwin.gr_invoiceFreightList_onheaderclick = function (headerId) {

  /*
  if (headerId == "chkH") {
      for (var idx = 0; idx < ds_invoiceFreight.getTotalRow(); idx++){
          if (ds_invoiceFreight.getCellData(idx, "chk") == "T") {
              ds_invoiceFreight.setCellData(idx, "chk", "F");
          }else {
              ds_invoiceFreight.setCellData(idx, "chk", "T");
          }
      }
  }
  */
};

//-------------------------------------------------------------------------
//AS-IS <script language=JavaScript for=ds_invoiceList event=onColumnChanged(row,colid)> 로직 호출
//-------------------------------------------------------------------------
scwin.f_invoiceListColChange = function (pRow, pCol) {
  if (pRow >= 0) {
    switch (pCol) {
      case "confirmDt":
        //Billing Date  confirmDt
        var confirmDt = ds_invoiceList.getCellData(pRow, pCol);
        for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
          ds_invoiceCommon.setCellData(i, pCol, confirmDt);
        }
        break;
      case "bilgPicNo":
        //거래처 담당자 팝업(PIC)
        var bilgPicNo = ed_bilgPicNo.text;
        var bilgPicNm = txt_bilgPicNm.value;
        for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
          ds_invoiceCommon.setCellData(i, pCol, ed_bilgPicNo.getValue());
          ds_invoiceCommon.setCellData(i, "bilgPicNm", ed_bilgPicNo.getValue());
        }
        break;
      case "clntBilgDocNo":
        //Customer INV
        var clntBilgDocNo = ds_invoiceList.getCellData(pRow, "clntBilgDocNo");
        for (var i = 0; i < ds_invoiceList.getTotalRow(); i++) {
          ds_invoiceCommon.setCellData(i, pCol, clntBilgDocNo);
        }
        break;
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
//ds_invoiceList OnRowPositionChange Event
//<script language=JavaScript for=ds_invoiceList event=OnRowPosChanged(row)>
//-------------------------------------------------------------------------
scwin.ds_invoiceList_onrowpositionchange = function (info) {
  //TODO STYYCYG [2026.03.11] 그리드에 마우스 포커스만 가도 요 이벤트 발생이 됨...못씀.    
  //사용자 함수로 빼서 scwin.gr_invoiceList_oncellclick 이벤트 함수에서 호출하는걸로 바꿈.
  var vRowPosition = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition(); //그리드 선택 없이 호출되는 경우가 있음. ( Search event에서 호출됨...)
  var vCountRow = txt_countRow.getValue(); //hidden Tag
  var vRowStatus = ds_invoiceList.getRowStatusValue(vRowPosition);

  //if (info.newRowIndex >= 0 ) {
  if (vRowPosition >= 0) {
    var vCountRow = ds_invoiceList.getTotalRow();
    var vChgCount = 0;
    var vChgRow = 0;
    for (var i = 0; i <= vCountRow; i++) {
      var vCurRowStatus = ds_invoiceList.getRowStatusValue(i);
      if (vCurRowStatus == 2 || vCurRowStatus == 3) {
        //asis : [1:Insert, 3:Delete],  //getRowStatusValue[초기상태:0, 갱신(U):1, 삽입(I):2, 삭제(D):3, 삽입 후 삭제:4]
        vChgCount++;
        vChgRow = i;
      }
    }
    var kcomcd = ds_invoiceList.getCellData(vRowPosition, "kcomcd"); // 대표 거래처 코드
    var seaair = ds_invoiceList.getCellData(vRowPosition, "seaair"); // 해운 항공 Trans 구분
    var iogb = ds_invoiceList.getCellData(vRowPosition, "iogb"); // Import/Export 구분
    var mblno = ds_invoiceList.getCellData(vRowPosition, "mblno"); // MASTER B/L NO 
    var blno = ds_invoiceList.getCellData(vRowPosition, "blno"); // HOUSE B/L NO
    var mhno = ds_invoiceList.getCellData(vRowPosition, "mhno"); // Console NO

    var certiNo = ds_invoiceList.getCellData(vRowPosition, "certiNo"); // 거래명세서번호
    var prtnGrpNo = ds_invoiceList.getCellData(vRowPosition, "prtnGrpNo"); // 거래명세서Group번호
    var bilgClntNo = ds_invoiceList.getCellData(vRowPosition, "bilgClntNo"); // 청구처 코드 
    var bilgClntNm = ds_invoiceList.getCellData(vRowPosition, "bilgClntNm"); // 청구처명

    var slipNo = ds_invoiceList.getCellData(vRowPosition, "slipNo"); // 전표번호
    var odrNo = ds_invoiceList.getCellData(vRowPosition, "odrNo"); // Order No

    var intendDt = ds_invoiceList.getCellData(vRowPosition, "confirmDt"); // billing date
    var bilgPicNo = ds_invoiceList.getCellData(vRowPosition, "bilgPicNo"); // PIC Code
    var bilgPicNm = ds_invoiceList.getCellData(vRowPosition, "bilgPicNm"); // PIC Name

    //ds_searchFreight --> dma_searchFreight

    dma_searchFreight.set("kcomcd", kcomcd); // 대표 거래처 코드
    dma_searchFreight.set("seaair", seaair); // 해운 항공 Trans 구분
    dma_searchFreight.set("iogb", iogb); // Import/Export 구분
    dma_searchFreight.set("mblno", mblno); // MASTER B/L NO 
    dma_searchFreight.set("blno", blno); // HOUSE B/L NO
    dma_searchFreight.set("mhno", mhno); // Console NO

    dma_searchFreight.set("certiNo", certiNo); // 거래명세서번호
    dma_searchFreight.set("prtnGrpNo", prtnGrpNo); // 거래명세서Group번호
    dma_searchFreight.set("bilgClntNo", bilgClntNo); // 청구처 코드 
    dma_searchFreight.set("bilgClntNm", bilgClntNm); // 청구처명

    dma_searchFreight.set("odrNo", odrNo); // Order No
    dma_searchFreight.set("slipNo", slipNo); // 전표 번호

    //2026.03.21 get에서 set으로 변경
    hid_intendDt.setValue(intendDt); //hid_intendDt.value = intendDt;
    hid_bilgPicNo.setValue(bilgPicNo); //hid_bilgPicNo.value = bilgPicNo;
    hid_bilgPicNm.setValue(bilgPicNm); //hid_bilgPicNm.value = bilgPicNm;

    lc_taxnClsCd.setValue(ds_invoiceList.getCellAllData(vRowPosition, "taxnClsCd")); //과세구분
    if (ds_invoiceList.getCellData(vRowPosition, "taxnClsCd") == "") {
      //과세구분
      if (ds_invoiceList.getCellData(vRowPosition, "sumVatAmt") == 0) {
        lc_taxnClsCd.setValue("02");
        $c.gus.cfDisableObjects($p, [lc_taxnClsCd]); //비활성화
      } else {
        lc_taxnClsCd.setValue("01");
        $c.gus.cfEnableObjects($p, [lc_taxnClsCd]); //활성화
      }
    }
    if (vRowStatus == 0) {
      //getRowStatusValue[초기상태:0, 갱신(U):1, 삽입(I):2, 삭제(D):3, 삽입 후 삭제:4]
      //$c.gus.cfDisableBtnOnly([btn_Print, btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]); //2026.04.07 김진성책임요청사항.(print버튼 활성화)
      if (prtnGrpNo.trim() == "") {
        $c.gus.cfEnableBtnOnly($p, [btn_Create]);
        scwin.processFlag = "INIT";
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Create, btn_Save, btn_Update, btn_Delete, btn_Print, btn_Tax]);
        if (slipNo == "") {
          $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete, btn_Print]);
          if (certiNo != "") {
            $c.gus.cfEnableBtnOnly($p, [btn_Tax]);
          }
          scwin.processFlag = "RETRIEVE";
        } else {
          $c.gus.cfEnableBtnOnly($p, [btn_Print, btn_Tax]);
          scwin.processFlag = "RETRIEVE";
        }
      }
    } else if (vRowStatus == 2) {
      //Create
      scwin.f_Set("CREATE");
    } else if (vRowStatus == 1) {
      //Update
      scwin.f_Set("UPDATE");
    }
  } else {
    scwin.f_Set("INIT");
    scwin.processFlag = "INIT";
  }
};

//------------------------------------------------------------------------- 
//AS-IS <script language=JavaScript for=ds_invoiceList event=onColumnChanged(row,colid)> 로직 호출
//------------------------------------------------------------------------- 
scwin.ds_invoiceList_oncelldatachange = function (info) {
  scwin.f_invoiceListColChange(info.rowIndex, info.colID);
};

//------------------------------------------------------------------------- 
//AS-IS <script language=JavaScript for=ds_invoiceFreight event=onColumnChanged(row,colid)>
//------------------------------------------------------------------------- 
scwin.ds_invoiceFreight_oncelldatachange = function (info) {
  // 운임 check에 따라서  영세 과세(refkey) 구분
  var vatCnt = 0;
  var refkey = "";
  var spplyAmt = 0;
  var spplyAmtFcrc = 0;
  var vatAmt = 0;
  var bilgAmt = 0;
  var bilgAmtFcrc = 0;
  var fcrcBilgAmt = 0;
  if (ds_invoiceFreight.getTotalRow() > 0) {
    if (info.colID == "chk") {
      refkey = ds_invoiceFreight.getCellData(info.rowIndex, "refkey");
      spplyAmt = parseInt(ds_invoiceFreight.getCellData(info.rowIndex, "sellAmt"));
      spplyAmtFcrc = parseInt(ds_invoiceFreight.getCellData(info.rowIndex, "sellAmtFcrc")); //이놈아때메 createCreditLimitCheckHistory 에러가 났는데....
      vatAmt = parseInt(ds_invoiceFreight.getCellData(info.rowIndex, "vatAmt"));
      if (ds_invoiceFreight.getCellData(info.rowIndex, "crcCd") == "KRW") {
        fcrcBilgAmt = 0;
      } else {
        fcrcBilgAmt = parseInt(ds_invoiceFreight.getCellData(info.rowIndex, "sellAmt"));
      }
      bilgAmt = parseInt(spplyAmt) + parseInt(vatAmt) - parseInt(fcrcBilgAmt);
      bilgAmtFcrc = parseInt(ds_invoiceFreight.getCellData(info.rowIndex, "sellAmtFcrc"));
      for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
        if (ds_invoiceFreight.getCellData(i, "chk") == "T" && refkey == ds_invoiceFreight.getCellData(i, "refkey")) {
          vatCnt = vatCnt + 1;
        }
      }
      for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
        if (ds_invoiceFreight.getCellData(info.rowIndex, "chk") == "T" && refkey == ds_invoiceCommon.getCellData(i, "refkey")) {
          ds_invoiceCommon.setCellData(i, "spplyAmt", parseInt(ds_invoiceCommon.getCellData(i, "spplyAmt")) + spplyAmt);
          ds_invoiceCommon.setCellData(i, "spplyAmtFcrc", parseInt(ds_invoiceCommon.getCellData(i, "spplyAmtFcrc")) + spplyAmtFcrc);
          ds_invoiceCommon.setCellData(i, "vatAmt", parseInt(ds_invoiceCommon.getCellData(i, "vatAmt")) + vatAmt);
          ds_invoiceCommon.setCellData(i, "fcrcBilgAmt", parseInt(ds_invoiceCommon.getCellData(i, "fcrcBilgAmt")) + fcrcBilgAmt);
          ds_invoiceCommon.setCellData(i, "bilgAmt", parseInt(ds_invoiceCommon.getCellData(i, "bilgAmt")) + bilgAmt);
          ds_invoiceCommon.setCellData(i, "bilgAmtFcrc", parseInt(ds_invoiceCommon.getCellData(i, "bilgAmtFcrc")) + bilgAmtFcrc);
        } else if (ds_invoiceFreight.getCellData(info.rowIndex, "chk") == "F" && refkey == ds_invoiceCommon.getCellData(i, "refkey")) {
          ds_invoiceCommon.setCellData(i, "spplyAmt", parseInt(ds_invoiceCommon.getCellData(i, "spplyAmt")) - spplyAmt);
          ds_invoiceCommon.setCellData(i, "spplyAmtFcrc", parseInt(ds_invoiceCommon.getCellData(i, "spplyAmtFcrc")) - spplyAmtFcrc);
          ds_invoiceCommon.setCellData(i, "vatAmt", parseInt(ds_invoiceCommon.getCellData(i, "vatAmt")) - vatAmt);
          ds_invoiceCommon.setCellData(i, "fcrcBilgAmt", parseInt(ds_invoiceCommon.getCellData(i, "fcrcBilgAmt")) - fcrcBilgAmt);
          ds_invoiceCommon.setCellData(i, "bilgAmt", parseInt(ds_invoiceCommon.getCellData(i, "bilgAmt")) - bilgAmt);
          ds_invoiceCommon.setCellData(i, "bilgAmtFcrc", parseInt(ds_invoiceCommon.getCellData(i, "bilgAmtFcrc")) - bilgAmtFcrc);
        }
      }
      if (vatCnt < 1) {
        for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
          if (ds_invoiceCommon.getCellData(i, "chk") == "T" && refkey == ds_invoiceCommon.getCellData(i, "refkey")) {
            ds_invoiceCommon.setCellData(i, "chk", "F"); // = "F";
          }
        }
      } else {
        for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
          if (ds_invoiceCommon.getCellData(i, "chk") == "F" && refkey == ds_invoiceCommon.getCellData(i, "refkey")) {
            ds_invoiceCommon.setCellData(i, "chk", "T"); //= "T";
          }
        }
      }
    }
  }
};

//------------------------------------------------------------------------- 
//AS-IS <script language=JavaScript for=ds_billgb event=onColumnChanged(row,colid)>
//------------------------------------------------------------------------- 
scwin.ds_billgb_oncelldatachange = function (info) {
  if (ds_invoiceList.getTotalRow() > 0) {
    var curRow = ds_invoiceList.getRowPosition();
    switch (info.colID) {
      case "billgb":
        if (ds_invoiceList.getCellData(curRow, "certiNo") == "") {
          if (chb_billgb.getValue() == 0 && lc_printOp.getValue() != "6") {
            scwin.f_RetrieveCommon();
          } else if (chb_billgb.getValue() == 1) {
            //var cr = ds_invoiceFreight.CountRow;
            if (ds_invoiceFreight.getTotalRow() > 0) {
              for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
                if (ds_invoiceFreight.getCellData(i, "chk") == "T") {
                  if (ds_invoiceFreight.getCellData(i, "crcCd").trim() != "KRW") {
                    ds_invoiceFreight.setCellData(i, "crcCd", "KRW");
                    ds_invoiceFreight.setCellData(i, "exRate", 0);
                    ds_invoiceFreight.setCellData(i, "sellAmtFcrc", 0);
                    ds_invoiceFreight.setCellData(i, "spplyAmtFcrc", 0);
                    ds_invoiceFreight.setCellData(i, "bilgInscrpAmtFcrc", 0);
                  }
                }
              }
            }

            //var rc = ds_invoiceCommon.CountRow;
            if (ds_invoiceCommon.getTotalRow() > 0) {
              for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
                ds_invoiceCommon.setCellData(i, "crcCd", "KRW");
                ds_invoiceCommon.setCellData(i, "spplyAmtFcrc", 0);
                ds_invoiceCommon.setCellData(i, "fcrcBilgAmt", 0);
                ds_invoiceCommon.setCellData(i, "bilgAmtFcrc", 0);
                ds_invoiceCommon.setCellData(i, "bilgAmt", parseInt(ds_invoiceCommon.getCellData(i, "spplyAmt")) + parseInt(ds_invoiceCommon.getCellData(i, "vatAmt")) - parseInt(ds_invoiceCommon.getCellData(i, "fcrcBilgAmt")));
                ds_invoiceCommon.setCellData(i, "crcCd", "KRW");
              }
            }
          }
        }
        break;
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
//sbm_save Callback Function (AS-IS Invoice Save TR)
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.processFlag = "RETRIEVE";
    scwin.f_Set("RETRIEVE");

    //<script language="JavaScript" for="tr_save" event="OnSuccess()"> 시작
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

    scwin.f_oldRowInit();
    scwin.f_Retrieve();
    //<script language="JavaScript" for="tr_save" event="OnSuccess()"> 시작
  }
};

//-------------------------------------------------------------------------
//sbm_save Callback Function (AS-IS Invoice Save TR)
//-------------------------------------------------------------------------
scwin.sbm_save_submiterror = function (e) {};

//-------------------------------------------------------------------------
//인쇄 (세금계산서) 콜백
//<script language="JavaScript" for="tr_retrieveTaxPrint" event="OnSuccess()">
//-------------------------------------------------------------------------
scwin.sbm_retrieveTaxPrint_submitdone = async function (e) {
  await scwin.f_TaxPrint();
};

//-------------------------------------------------------------------------
//인쇄 (거래명세표) 콜백
//<script language="JavaScript" for="tr_retrieveCertiPrint" event="OnSuccess()">
//-------------------------------------------------------------------------
scwin.sbm_retrieveCertiPrint_submitdone = async function (e) {
  await scwni.f_CertiPrint();
};
scwin.sbm_retrieveTaxPrint_submiterror = function (e) {
  //alert("submiterror : " + e.responseJSON);
};
scwin.sbm_prtnGrpNo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.processFlag = "RETRIEVE";
    scwin.f_Set("RETRIEVE");
  }
};
scwin.sbm_retrieveCommon_submiterror = function (e) {
  //<script language="JavaScript" for="tr_retrieveCommon" event="OnFail()">
  chb_billgb.setValue(0); //chb_billgb.checked = false;
};
scwin.sbm_mhno_submitdone = function (e) {
  //<script language=JavaScript for=ds_mhno event=OnLoadCompleted(rowcnt)> 
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (scwin.mblno != "" || scwin.blno != "") {
      scwin.f_Retrieve();
    } else {
      if (e.responseJSON.GAUCE == "") {
        //T-5826 수정사항.
        $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  }
};

// ========================================================================================
// f_popUp에서 호출되는  콜백 함수들
// ========================================================================================
// Customer
scwin.udc_ilcomCd_bilgClnt_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    cnd_ed_bilgClntNo.setValue(rtnList[0]);
    cnd_txt_bilgClntNm.setValue(rtnList[1]);
  } else {
    cnd_ed_bilgClntNo.setValue("");
    cnd_txt_bilgClntNm.setValue("");
  }
};

//Department
scwin.udc_comCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    cnd_ed_dept.setValue(rtnList[0]);
    cnd_txt_deptnm.setValue(rtnList[1]);
  } else {
    cnd_ed_dept.setValue("");
    cnd_txt_deptnm.setValue("");
  }
};

//PIC
scwin.udc_ilcomCd_bilgPic_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_bilgPicNo.setValue(rtnList[0]);
    txt_bilgPicNm.setValue(rtnList[1]);
    var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
    ds_invoiceList.setCellData(curRow, "bilgPicNo", rtnList[0]);
    ds_invoiceList.setCellData(curRow, "bilgPicNm", rtnList[1]);
    for (var idx = 0; idx < ds_invoiceCommon.getTotalRow(); idx++) {
      ds_invoiceCommon.setCellData(idx, "bilgPicNo", rtnList[0]);
      ds_invoiceCommon.setCellData(idx, "bilgPicNm", rtnList[1]);
    }

    //ed_bilgClntNo.setValue(rtnList[2]);     //맞나 모르겠네...
  } else {
    ed_bilgPicNo.setValue("");
    txt_bilgPicNm.setValue("");
    var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
    ds_invoiceList.setCellData(curRow, "bilgPicNo", rtnList[0]);
    ds_invoiceList.setCellData(curRow, "bilgPicNm", rtnList[1]);
    for (var idx = 0; idx < ds_invoiceCommon.getTotalRow(); idx++) {
      ds_invoiceCommon.setCellData(idx, "bilgPicNo", "");
      ds_invoiceCommon.setCellData(idx, "bilgPicNm", "");
    }

    //ed_bilgClntNo.setValue("");
  }
};

//-------------------------------------------------------------------------
// Customer Code 308556 ㈜한국하인즈건에 한하여 Remark 란에 자동 입력 될 수 있도록 콜백함수
//------------------------------------------------------------------------- 
scwin.sbm_heinzInfo_submitdone = function (e) {
  // if( ds_heinzInfo.CountRow > 0){
  //     txa_summary.value = ds_heinzInfo.NameValue(1,"col1");
  // }

  if (e.responseJSON.resultDataSet[0].Code == 0) {
    //txa_summary.value = ds_heinzInfo.NameValue(1,"col1");
    txa_summary.setValue(dma_heinzInfo.get("col1"));
  }
};

//-------------------------------------------------------------------------
// AS-IS : <script language=JavaScript for=lc_taxnClsCd event=OnCloseUp()> cnd_ed_blno
//-------------------------------------------------------------------------
scwin.lc_taxnClsCd_onchange = function (info) {
  if (lc_taxnClsCd.getValue() == "03") {
    for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
      if (ds_invoiceCommon.getCellData(i, "taxnClsCd") == "02") {
        ds_invoiceCommon.setCellData(i, "taxnClsCd", lc_taxnClsCd.getValue());
      }
    }
  }
};

//-------------------------------------------------------------------------
// House B/L No oneditkeyup Event
// <script language=JavaScript for=cnd_ed_blno event=onKillFocus()>
// (MHNO 가져 오기)
//------------------------------------------------------------------------
scwin.cnd_ed_blno_onblur = function (e) {
  scwin.f_oldRowInit();
  scwin.f_MhnoLoading("H", cnd_ed_blno.getValue().trim());
};

//-------------------------------------------------------------------------
// House B/L No oneditkeyup Event ( 대문자로 변경 )
//-------------------------------------------------------------------------
scwin.cnd_ed_blno_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};

//-------------------------------------------------------------------------
// AS-IS : <script language=JavaScript for=cnd_ed_prtnGrpNo event=onKillFocus()>
//-------------------------------------------------------------------------
scwin.cnd_ed_prtnGrpNo_onblur = function (e) {
  //ds_search.NameValue(ds_search.RowPosition, "prtnGrpNo") = cnd_ed_prtnGrpNo.text.trim();
  dma_search.set("prtnGrpNo", cnd_ed_prtnGrpNo.getValue().trim());
};

//-------------------------------------------------------------------------
//cnd_ed_prtnGrpNo oneditkeyup Event ( 대문자로 변경 )
//-------------------------------------------------------------------------
scwin.cnd_ed_prtnGrpNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};

//-------------------------------------------------------------------------
// AS-IS : <script language=JavaScript for=lc_printOp event=onSelChange()>
// 조회조건(업체확인일자/실적일자/운송일자) 선택
//-------------------------------------------------------------------------
scwin.lc_printOp_onchange = function (info) {
  if (lc_printOp.getValue() == "5") {
    $c.gus.cfEnableBtnOnly($p, [btn_Tax]);
  }
  if (lc_printOp.getValue() == "2") {
    //$c.gus.cfEnableObjects([ed_tempBilgIntendDt,img_tempBilgDt]);
    $c.gus.cfEnableObjects($p, [ed_tempBilgIntendDt]);
  } else {
    //$c.gus.cfDisableObjects([ed_tempBilgIntendDt,img_tempBilgDt]);
    $c.gus.cfDisableObjects($p, [ed_tempBilgIntendDt]);
    ed_tempBilgIntendDt.setValue("");
  }
  if (lc_printOp.getValue() == "6") {
    for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
      if (ds_invoiceFreight.getCellData(i, "crcCd") == "KRW") {
        ds_invoiceFreight.setCellData(i, "chk", "F"); //원화
      } else {
        ds_invoiceFreight.setCellData(i, "chk", "T"); //외화
      }
    }
  }
};

//-------------------------------------------------------------------------
// Billing Data(ed_bilgIntendDt) ds_invoiceList.confirmDt에 값 바인딩.
//-------------------------------------------------------------------------
scwin.ed_bilgIntendDt_onchange = function () {
  if (ed_bilgIntendDt.getDisabled()) return;
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  ds_invoiceList.setCellData(curRow, "bilgIntendDt", ed_bilgIntendDt.getValue());
  ds_invoiceList.setCellData(curRow, "confirmDt", ed_bilgIntendDt.getValue());
  ds_invoiceCommon.setCellData(0, "confirmDt", ed_bilgIntendDt.getValue());
  ds_invoiceCommon.setCellData(0, "bilgIntendDt", ed_bilgIntendDt.getValue());
};

//-------------------------------------------------------------------------
//Customer INV 값 수정시...ds_paymentInvoiceList에 반영
//-------------------------------------------------------------------------
scwin.ed_clntBilgDocNo_onviewchange = function (info) {
  var curRow = ds_invoiceList.getRowPosition();
  ds_invoiceList.setCellData(curRow, "clntBilgDocNo", ed_clntBilgDocNo.getValue());
  for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
    ds_invoiceCommon.setCellData(i, "clntBilgDocNo", ed_bilgIntendDt.getValue());
  }
};
scwin.ed_bilgIntendDt_onviewchange = function (info) {
  //CKCD STYYCYG [2026.03.26] ac_106_01_01b화면에서 아래 함수 옮겨와야 할지 생각중....
  //if (!scwin.rowStatusChk()) return;

  return;
  var curRow = ds_invoiceList.getRowPosition() == null ? 0 : ds_invoiceList.getRowPosition();
  ds_invoiceList.setCellData(curRow, "bilgIntendDt", ed_bilgIntendDt.getValue());
  ds_invoiceList.setCellData(curRow, "confirmDt", ed_bilgIntendDt.getValue());
  for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
    ds_invoiceCommon.setCellData(i, "confirmDt", ed_bilgIntendDt.getValue());
    ds_invoiceCommon.setCellData(i, "bilgIntendDt", ed_bilgIntendDt.getValue()); //2026.03.26추가
  }
  //ds_purchaseCerti.setCellData(0, "pchsIntendDt", ed_bilgIntendDt.getValue());            //crud시 실제 사용되는 DataCollection임. ( 이놈아는 map로 만들었어도...)
};

//-------------------------------------------------------------------------
// KRW 체크
//-------------------------------------------------------------------------
scwin.chb_billgb_onviewchange = function (info) {
  //선택 안됨 : info.checked = false
  if (ds_invoiceList.getTotalRow() > 0) {
    var curRow = ds_invoiceList.getRowPosition();
    if (ds_invoiceList.getCellData(curRow, "certiNo") == "") {
      //if (chb_billgb.getValue() == 0 && lc_printOp.getValue() != "6") {
      if (info.checked == false && lc_printOp.getValue() != "6") {
        scwin.f_RetrieveCommon();
      } else if (chb_billgb.getValue() == 1) {
        //var cr = ds_invoiceFreight.CountRow;
        if (ds_invoiceFreight.getTotalRow() > 0) {
          for (var i = 0; i < ds_invoiceFreight.getTotalRow(); i++) {
            if (ds_invoiceFreight.getCellData(i, "chk") == "T") {
              if (ds_invoiceFreight.getCellData(i, "crcCd").trim() != "KRW") {
                ds_invoiceFreight.setCellData(i, "crcCd", "KRW");
                ds_invoiceFreight.setCellData(i, "exRate", 0);
                ds_invoiceFreight.setCellData(i, "sellAmtFcrc", 0);
                ds_invoiceFreight.setCellData(i, "spplyAmtFcrc", 0);
                ds_invoiceFreight.setCellData(i, "bilgInscrpAmtFcrc", 0);
              }
            }
          }
        }

        //var rc = ds_invoiceCommon.CountRow;
        if (ds_invoiceCommon.getTotalRow() > 0) {
          for (var i = 0; i < ds_invoiceCommon.getTotalRow(); i++) {
            ds_invoiceCommon.setCellData(i, "crcCd", "KRW");
            ds_invoiceCommon.setCellData(i, "spplyAmtFcrc", 0);
            ds_invoiceCommon.setCellData(i, "fcrcBilgAmt", 0);
            ds_invoiceCommon.setCellData(i, "bilgAmtFcrc", 0);
            ds_invoiceCommon.setCellData(i, "bilgAmt", parseInt(ds_invoiceCommon.getCellData(i, "spplyAmt")) + parseInt(ds_invoiceCommon.getCellData(i, "vatAmt")) - parseInt(ds_invoiceCommon.getCellData(i, "fcrcBilgAmt")));
            ds_invoiceCommon.setCellData(i, "crcCd", "KRW");
          }
        }
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'shbSearch',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_seaair',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.seaair',allOption:'',chooseOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Trans'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.iogb',allOption:'',chooseOption:'','ev:onchange':'scwin.cnd_lc_iogb_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mblno',placeholder:'',style:'width:150px;text-transform:uppercase',ref:'data:dma_search.mblno','ev:onblur':'scwin.cnd_ed_mblno_onblur',mandatory:'true',allowChar:'a-zA-Z0-9',maxlength:'20','ev:oneditkeyup':'scwin.cnd_ed_mblno_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:150px;text-transform:uppercase',ref:'data:dma_search.blno',allowChar:'a-zA-Z0-9',maxlength:'20','ev:oneditkeyup':'scwin.cnd_ed_blno_oneditkeyup','ev:onblur':'scwin.cnd_ed_blno_onblur'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Console No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_mhno',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.mhno',allOption:'',chooseOption:'',displayMode:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Group No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_prtnGrpNo',placeholder:'',style:'width:150px;text-transform:uppercase',ref:'data:dma_search.prtnGrpNo',allowChar:'a-zA-Z0-9',maxlength:'16','ev:onblur':'scwin.cnd_ed_prtnGrpNo_onblur','ev:oneditkeyup':'scwin.cnd_ed_prtnGrpNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'retrieveEngClntInfo',codeId:'cnd_ed_bilgClntNo',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'cnd_txt_bilgClntNm',style:'width:%; height:px; ',hideName:'Y',id:'udc_ilcomCd_bilgClnt','ev:onviewchangeNameEvent':'scwin.udc_ilcomCd_bilgClnt_onviewchangeNameEvent',btnId:'img_bilgClntNo',refDataCollection:'dma_search',code:'bilgClntNo',name:'bilgClntNm','ev:onclickEvent':'scwin.udc_ilcomCd_bilgClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCd_bilgClnt_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_comCd_dept',codeId:'cnd_ed_dept',nameId:'cnd_txt_deptnm',btnId:'img_cncd','ev:onviewchangeNameEvent':'scwin.udc_comCd_dept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_comCd_dept_onclickEvent',selectID:'retrieveOpDeptCdInfo',refDataCollection:'dma_search',code:'dept',name:'deptnm',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',maxlengthCode:'3','ev:onblurCodeEvent':'scwin.udc_comCd_dept_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_invoiceList',gridDownFn:'scwin.excelDown',gridDownYn:'N',id:'peUdc1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_invoiceList',id:'gr_invoiceList',style:'',visibleRowNum:'4',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_invoiceList_oncellclick',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'법인코드',width:'80',hidden:'true'}},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'tittle',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Invoice No',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Invoice No(G)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Order No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Master B/L No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'House B/L No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'CONSOL NO',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'해운 항공 Trans 구분',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'Import/Export 구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'Customer',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'Customer Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'청구처 담당자 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'청구처 담당자 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'부서코드 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'환율일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'적용환율 TYPE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'환율',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'etd/eta',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'출발지(DEPARTURE) 코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'출발지(DEPARTURE) 명',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'도착지 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'도착지 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column59',value:'편명 / vessel',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'MASTER/HOUSE구분 (M/H)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'Billing Type',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'Billing Type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'Billing Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'Customer INV No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'Print No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'확인일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'운송 FROM 지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'운송 FROM 지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'운송 FROM 일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'운송 FROM 시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',value:'운송 TO 지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'운송 TO 지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'운송 TO 일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'운송 TO 시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'운송 Type',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column71',value:'Amount',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column65',value:'Amount(W)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column67',value:'VAT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column69',value:'Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column97',value:'Slip No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column95',value:'Tax No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column89',value:'영수거래처 여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column91',value:'담당자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtnGrpNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seaair',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'iogb',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgPicNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgPicNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dept',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'deptnm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exdt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exgb',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rate',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stdt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpcd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpnm',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dstn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dsnm1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fltno',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mblHblCls',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cucd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'EXP',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgIntendDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntBilgDocNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col30',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'confirmDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fromArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fromAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fromDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fromTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'toArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'toAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'toDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'toTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sumSellAmtFcrc',displayMode:'label',style:';text-align:right;',displayFormat:'#,###.##',dataType:'float'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sumSellAmt',displayMode:'label',style:';text-align:right;',displayFormat:'#,###,###,###,###,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sumVatAmt',displayMode:'label',style:';text-align:right;',displayFormat:'#,###,###,###,###,###,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'Expr',displayMode:'label',style:';text-align:right;',displayFormat:'#,###,###,###,###,###,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'slipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'sellVatNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'receiveSellingYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'regId',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column144',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column136',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column116',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column110',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:';text-align:right;',id:'column106',value:'',displayMode:'label',expression:'!sum("sumSellAmtFcrc") ? 0 : sum("sumSellAmtFcrc")',displayFormat:'#,###.##',textAlign:'right',dataType:'float'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:';text-align:right;',id:'column105',value:'',displayMode:'label',expression:'!sum("sumSellAmt") ? 0 : sum("sumSellAmt")',displayFormat:'#,###,###,###,###,###,###,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:';text-align:right;',id:'column104',value:'',displayMode:'label',expression:'!sum("sumVatAmt") ? 0 : sum("sumVatAmt")',displayFormat:'#,###,###,###,###,###,###,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',style:';text-align:right;',id:'column103',value:'',displayMode:'label',expression:'!sum("Expr") ? 0 : sum("Expr")',displayFormat:'#,###,###,###,###,###,###,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total_gr_invoiceList',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'grdDonwBtn',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'oDetailInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_PrtnGrpNo',style:'',type:'button','ev:onclick':'scwin.btn_PrtnGrpNo_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Group No'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_prtnGrpNo',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:dma_invoice.prtnGrpNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:dma_invoice.mblno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blno',placeholder:'',style:'width:150px;',readOnly:'true',ref:'data:dma_invoice.blno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'Customer INV',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntBilgDocNo',placeholder:'',style:'width:150px;text-transform:uppercase',readOnly:'false',ref:'data:dma_invoice.clntBilgDocNo',objType:'data','ev:onviewchange':'scwin.ed_clntBilgDocNo_onviewchange',allowChar:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req txt-blue',id:'',label:'Billing Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_bilgIntendDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:dma_invoice.confirmDt',mandatory:'true','ev:onchange':'scwin.ed_bilgIntendDt_onchange','ev:onviewchange':'scwin.ed_bilgIntendDt_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'신고 유무',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_taxnClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'','ev:onchange':'scwin.lc_taxnClsCd_onchange',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'과세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타(신고하지 않음)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClntNo',placeholder:'',style:'',readOnly:'true',ref:'data:dma_invoice.bilgClntNo'}},{T:1,N:'xf:input',A:{class:'',id:'txt_bilgClntNm',placeholder:'',style:'',readOnly:'true',ref:'data:dma_invoice.bilgClntNm'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'retrieveClntPicInfoInvoice',codeId:'ed_bilgPicNo',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'txt_bilgPicNm',style:'width:%; height:px; ',id:'udc_ilcomCd_bilgPic',maxlengthName:'13',btnId:'img_bilgPicNo','ev:onclickEvent':'scwin.udc_ilcomCd_bilgPic_onclickEvent',maxlengthCode:'2',UpperFlagCode:'1',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_ilcomCd_bilgPic_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',allowCharCodeLength:'2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_dept',placeholder:'',style:'',readOnly:'true',ref:'data:dma_invoice.dept'}},{T:1,N:'xf:input',A:{class:'',id:'txt_deptnm',placeholder:'',style:'',readOnly:'true',ref:'data:dma_invoice.deptnm'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EX Date/CUR',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_exdt',style:'',readOnly:'true',ref:'data:dma_invoice.exdt'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'text',id:'ed_cucd',style:'',readOnly:'true',ref:'data:dma_invoice.cucd'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_exgb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'',ref:'data:dma_invoice.exgb',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T SELLING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rate',placeholder:'',style:'width:150px;text-align:right;',readOnly:'true',ref:'data:dma_invoice.rate',dataType:'float',displayFormat:'#,###'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tr_tab_center',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center0',label:'Freight Info',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center1',label:'Remark',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'height: auto;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_invoiceFreight',id:'gr_invoiceFreightList',readOnly:'false',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true',autoFit:'allColumn','ev:oncellclick':'scwin.gr_invoiceFreightList_oncellclick','ev:onheaderclick':'scwin.gr_invoiceFreightList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',displayMode:'label',value:'참고번호',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chkH',inputType:'checkbox',width:'40',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',width:'51',value:'SEQ'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'80',value:'Invoice No',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'80',value:'Customer',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',width:'80',value:'Name',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'Init',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'통합매출입코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'F/Code',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'Name',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'CUR',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'Unit',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'QTY',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'80',value:'Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'80',value:'Amount',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'80',value:'Ex-Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'80',value:'Amount(W)',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'80',value:'VAT',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'Amount(US$)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'Result',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'Tariff Rate',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'법인코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'Master B/L No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'House B/L No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'CONSOL번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'Export / Import 구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'해운/항공/Trans 구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',value:'매출순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'부서 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column101',value:'매출입항목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column99',value:'영문 운임명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column97',value:'운임그룹코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column95',value:'운임UNIT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',value:'국내해외매출구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',value:'MASTER/HOUSE구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'매출/매입구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',value:'PREPAID/COLLECT구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'통화코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',value:'수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',value:'GROSS WEIGHT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'TARIFF 단가',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'US 금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',value:'환율',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',value:'적용환율',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'적용환율 TYPE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',value:'RATE CLASS',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',value:'COMMODITY ITEM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',value:'거래명세서 그룹번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'출력용 단가',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column115',value:'출력용 금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column113',value:'실적일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column111',value:'적요',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column109',value:'청구처 담당자 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column103',value:'청구처 담당자 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',value:'Slip No',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'refkey',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'51',readOnly:'true',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'80',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'80',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareGrpCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellItemCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareEngCd',displayMode:'label',readOnly:'true',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareEngNm',displayMode:'label',readOnly:'true',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',readOnly:'true',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fareUnit',displayMode:'label',readOnly:'true',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'chgWt',displayMode:'label',readOnly:'true',style:';text-align:right;',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',width:'80',readOnly:'true',style:';text-align:right;',displayFormat:'#,###,###,###,###,###,###.00',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmtFcrc',inputType:'text',width:'80',readOnly:'true',style:';text-align:right;',displayFormat:'#,###.00',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRate',inputType:'text',width:'80',readOnly:'true',style:';text-align:right;',displayFormat:'#,###.00',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'80',readOnly:'true',style:';text-align:right;',displayFormat:'#,###,###,###,###,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',width:'80',readOnly:'true',style:';text-align:right;',displayFormat:'#,###,###,###,###,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'Expr',displayMode:'label',readOnly:'true',style:';text-align:right;',displayFormat:'#,###',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'usdAmt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsStdDt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trfUpr',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'kcomcd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mblno',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blno',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mhno',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'iogb',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'seaair',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellSeq',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellLodeptCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col32',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col33',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col34',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col35',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'locPtnCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mblHblCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drcrCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ppccCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col40',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'grossWt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col43',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col44',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col45',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adptExchRt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exRateTyp',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rateCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commItem',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prtnGrpNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prtnUpr',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prtnAmt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col53',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rmk',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgPicNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgPicNm',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'slipNo',displayMode:'label',readOnly:'true',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column286',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',style:'',id:'column285',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'51',inputType:'text',style:'',id:'column284',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column283',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column282',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column281',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column280',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column279',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column278',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column277',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column276',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column275',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column274',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column273',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:';text-align:right;',id:'column272',value:'',displayMode:'label',expression:'!sum("sellAmtFcrc") ? 0 : sum("sellAmtFcrc")',displayFormat:'#,###.00',textAlign:'right',dataType:'float'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column271',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:';text-align:right;',id:'column270',value:'',displayMode:'label',expression:'!sum("sellAmt") ? 0 : sum("sellAmt")',displayFormat:'#,###',dataType:'bigDecimal',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:';text-align:right;',id:'column269',value:'',displayMode:'label',expression:'!sum("vatAmt") ? 0 : sum("vatAmt")',displayFormat:'#,###',dataType:'bigDecimal',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:';text-align:right;',id:'column268',value:'',displayMode:'label',expression:'!sum("Expr") ? 0 : sum("Expr")',displayFormat:'#,###',dataType:'bigDecimal',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column267',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column266',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column265',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column264',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column263',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column262',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column261',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column260',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column259',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column258',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column257',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column256',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column255',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column254',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column253',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column252',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column251',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column250',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column249',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column248',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column247',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column246',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column245',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column244',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column243',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column242',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column241',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column240',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column239',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column238',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column237',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column236',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column235',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column234',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column233',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column232',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column231',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column230',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total_gr_invoiceFreightList',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_summary',style:'height: 200px;',maxlength:'500','ev:onkeyup':'scwin.txa_summary_onkeyup',ref:'data:dma_invoice.summary'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{style:'width: 330px;',id:'',class:'flex-between'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_billgb',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onviewchange':'scwin.chb_billgb_onviewchange',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KRW'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_enggb',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KOR'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ENG'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_prebilgYn',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_invoiceFreightList',id:'peUdc2'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8 mt8'},E:[{T:1,N:'xf:group',A:{tagname:'ul',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Print Option',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_printOp',class:'',allOption:'',chooseOption:'',chooseOptionLabel:'',ref:'','ev:onchange':'scwin.lc_printOp_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경리용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'통관용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세표'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'통관용(외화)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Remark표시여부',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_rmk',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_pre',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_directSave',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'바로저장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'ul',style:'',id:'',class:'amt-wrap'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회계마감월',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',placeholderLocaleRef:'yearMonth',style:'',id:'ed_slipCloseYm',class:'',calendarValueType:'yearMonth',ref:'data:dma_invoice.slipCloseYm'}}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'세무마감월',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',placeholderLocaleRef:'yearMonth',style:'',id:'ed_taxCloseYm',class:'',calendarValueType:'yearMonth',ref:'data:dma_invoice.taxCloseYm'}}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'경리용 Billing Date',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',id:'ed_tempBilgIntendDt',class:'',calendarValueType:'yearMonthDate'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_odrRegIfno',style:'',type:'button','ev:onclick':'scwin.btn_odrRegIfno_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tax Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_odrRegIfnoMulti',style:'',type:'button','ev:onclick':'scwin.btn_odrRegIfnoMulti_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Multi Tax Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_profit',style:'',type:'button','ev:onclick':'scwin.btn_profit_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_rsmInvoice',style:'',type:'button','ev:onclick':'scwin.btn_rsmInvoice_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'RSM Invoice'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Print',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick',userAuth:'R',objType:'ctrlBtn',label:'프린트'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Tax',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Tax_onclick',objType:'ctrlBtn',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Tax Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Emart',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Emart_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'INV-Document'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_BulkBLPrint',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_BulkBLPrint_onclick',userAuth:'R',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Bulk B/L Print'}]}]}]}]},{T:1,N:'xf:input',A:{id:'dtl_sellVatNo',style:'width:144px; height:21px; ',initValue:'DBEX'}},{T:1,N:'xf:input',A:{id:'dtl_offsetVatNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_kcomcd',style:'width:144px; height:21px; ',ref:'data:dma_search.kcomcd'}},{T:1,N:'xf:input',A:{id:'txt_countRow',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txa_certiPatternCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txa_vatYn',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_commNm',style:'width:144px; height:21px; ',initValue:'DBEX'}},{T:1,N:'xf:input',A:{id:'hid_sellVatNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_intendDt',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_bilgPicNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'hid_bilgPicNm',style:'width:144px; height:21px; '}}]}]}]}]}]})