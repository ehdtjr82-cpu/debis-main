/*amd /ui/il/acc/acpay/ac_106_01_01b.xml 190204 7cc93d63c148d38454728a8ea7b41326090dd220c30b94d804319d9cb3b66feb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Init'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'processFlag',name:'processFlag',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'EXPORT IMPORT 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Console 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'부서 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'청구처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dvgb',name:'Credit / 전도금 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'UseChangeInfo',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchFreight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'Import/Export 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Console',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'거래명세서Group번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dvgb',name:'전도금 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'locPtnCls',name:'국내해외매출구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCertiDetail',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_purchaseCertiDetail_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'refkey',name:'참고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTyp',name:'Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'F/Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'CUR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'Unit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'QTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'Rate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'Amount',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'Ex-Rate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'Amount(W)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expr',name:'Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'Amount(US$)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Export / Import 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운/항공/Trans 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'출발지(DEPARTURE) 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itnm',name:'메인 Item',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo_',name:'매입처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm_',name:'매입처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd_',name:'영문운임코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm_',name:'영문 운임명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit_',name:'운임UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출(D)/매입(C)구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PREPAID/COLLECT구분)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd_',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'TARIFF 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt_',name:'매입금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate_',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'RATE CLASS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'COMMODITY ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNo',name:'매입처 담당자 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNm',name:'매입처 담당자 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'VAT 유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo_dup',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNoSeq',name:'거래명세서번호순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdmitDt',name:'매입승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternCd',name:'매입품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommNo',name:'매입품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshipVsslCd',name:'연안선선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshipPortcnt',name:'연안선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkPathSeq',name:'컨테이너작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkStpSeq',name:'컨테이너작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTransWrkIndictNo',name:'컨테이너운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTransRsltsSeq',name:'컨테이너운송실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkWrkPathSeq',name:'벌크작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkWrkStpSeq',name:'벌크작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkTransWrkIndictNo',name:'벌크운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkTransRsltsSeq',name:'벌크운송실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'하역작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvRsltsSeq',name:'하역실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoShiftingRsltsSeq',name:'화물SHIFTING실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkImpleRsltsSeq',name:'작업도구실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk_dup',name:'거래명세서 생성 여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refkey_dup',name:'거래명세서 GROUP 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsInscrpAmtFcrc',name:'BILL표기금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'상차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'하차작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'보관차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'선박코드_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntFrom',name:'항차_FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'선박코드_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntTo',name:'항차_TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'입출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingDt',name:'선적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'회수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lane',name:'항로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOn',name:'운송구간_상차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstOff',name:'운송구간_하차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndReqDt',name:'EDI전송요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediCreatSeq',name:'EDI생성순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn',name:'EDI전송대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndClsCd',name:'EDI전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndDt',name:'EDI전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndHh',name:'EDI전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndTrgtYn2',name:'EDI 전송대상여부 2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'JOB TYPE',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymentInvoiceList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_paymentInvoiceList_onrowpositionchange','ev:oncelldatachange':'scwin.ds_paymentInvoiceList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'Invoice No(G)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Import/Export 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'Customer Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNo',name:'청구처 담당자 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNm',name:'청구처 담당자 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptnm',name:'부서코드 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exdt',name:'환율일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cucd',name:'Currency',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exgb',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdt',name:'etd/eta',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpcd',name:'출발지(DEPARTURE) 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpnm',name:'출발지(DEPARTURE) 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstn',name:'도착지 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm1',name:'도착지 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'편명 / vessel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EXP',name:'Billing Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'Billing Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBilgDocNo',name:'Customer INV No.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo_',name:'Print No.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromArea',name:'운송 FROM 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromAreaNm',name:'운송 FROM 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDt',name:'운송 FROM 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromTm',name:'운송 FROM 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toArea',name:'운송 TO 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toAreaNm',name:'운송 TO 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDt',name:'운송 TO 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toTm',name:'운송 TO 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transTyp',name:'운송 Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumPchsAmtFcrc',name:'Amount',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumPchsAmt',name:'Amount(W)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumVat',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Expr',name:'Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'remark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternCd',name:'Certi 구분 R',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'VAT 유무',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCerti',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'refkey',name:'참고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternCd',name:'매입품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiDtlCnt',name:'거래명세서상세건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col17',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsCd',name:'증빙정상구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBilgDocNo',name:'거래처청구서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col23',name:'거래명세서 생성 유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col24',name:'거래명세서 GROUP번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDtSt',name:'매입예정일자시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDtEnd',name:'매입예정일자종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsEvidNo',name:'매입증빙번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetNo1',name:'OFFSET번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetNo2',name:'OFFSET번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'거래처 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNo',name:'청구처 담당자 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNm',name:'청구처 담당자 명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_paymentInvoice'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'Invoice No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'Invoice No(G)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'Order No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 Trans 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'Import/Export 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'Customer Name',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsPicNo',name:'청구처 담당자 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsPicNm',name:'청구처 담당자 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'부서코드 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exdt',name:'환율일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cucd',name:'Currency',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exgb',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rate',name:'환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdt',name:'etd/eta',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpcd',name:'출발지(DEPARTURE) 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpnm',name:'출발지(DEPARTURE) 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dstn',name:'도착지 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsnm1',name:'도착지 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'편명 / vessel',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EXP',name:'Billing Type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDt',name:'Billing Date',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntBilgDocNo',name:'Customer INV No.',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo_',name:'Print No.',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromArea',name:'운송 FROM 지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromAreaNm',name:'운송 FROM 지역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDt',name:'운송 FROM 일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromTm',name:'운송 FROM 시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toArea',name:'운송 TO 지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toAreaNm',name:'운송 TO 지역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDt',name:'운송 TO 일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toTm',name:'운송 TO 시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transTyp',name:'운송 Type',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumPchsAmtFcrc',name:'Amount',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumPchsAmt',name:'Amount(W)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sumVat',name:'VAT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'Expr',name:'Total',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseCerti'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchFreight'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운 항공 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'EXPORT IMPORT 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'HOUSE B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Console 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'출력그룹번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptnm',name:'부서 명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'locPtnCls',name:'국내해외매출구분(국내:1 해외:2)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateFrom',name:'ETD/ETA From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateTo',name:'ETD/ETA To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgIntendDtFrom',name:'Billing Date From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgIntendDtTo',name:'Billing Date To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'createInvoice',name:'Invoice 생성 유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatYn',name:'영세 : 0 , 과세:1  구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ClntPicInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ed_anno',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ed_annm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.acc.acpay.RetrievePaymentInvoiceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_paymentInvoiceList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymentInvoiceList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommon',action:'/il.acc.acpay.RetrievePaymentInvoiceCommonCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchFreight","key":"IN_DS1"},{"id":"ds_purchaseCerti","key":"OUT_DS1"},{"id":"ds_purchaseCertiDetail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_purchaseCerti","key":"OUT_DS1"},{"id":"ds_purchaseCertiDetail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCommon_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.acc.acpay.SavePaymentInvoiceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseCerti","key":"IN_DS1"},{"id":"ds_purchaseCertiDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mhno","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mhno_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : ar_106_01_01b
// 이름     : Payment Invoice
// 경로     : 물류
// 작 성 자 : 성태영
// 작 업 일 : 2026-02-05
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 1
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.processFlag = ""; // 처리 결과를 체크하는 Flag 	
scwin.E_MSG_ERR_001 = "전표번호가  (@) 존재 합니다. 수정 삭제 할 수 없습니다.";
scwin.rd_billgb_flag = "retrieve";
scwin.refkey = ""; //TO-BE에서 추가함.

scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

scwin.oldRow_1 = -1; //첫번째 그리드 RowChange 여부 체크
scwin.oldRow_2 = -1; //두번째 그리드 RowChange 여부 체크
scwin.onLoad = true; //화면 onLoad 여부 체크

//==================================================================================================================
// AS-IS Hidden type Tag 선언
//==================================================================================================================
scwin.dtl_sellVatNo = "";
//scwin.dtl_offsetVatNo      = "";          //현 화면에서는 사용되는곳 없음
scwin.hid_kcomcd = "DBEX";
scwin.txt_countRow = "";
scwin.txa_pchsGoodsPatternCd = "";
scwin.txa_vatYn = "";
scwin.hid_commNm = "DBEX";
scwin.hid_acctDeptCd = ""; //회계 귀속부서 코드
scwin.hid_acctDeptNm = ""; //회계 귀속 부서 명
scwin.hid_intendDt = "";
scwin.hid_pchsPicNo = "";
scwin.hid_pchsPicNm = "";
//==================================================================================================================

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);

  //대표거래처 코드
  scwin.kcomcd = scwin.params.kcomcd == null ? "DBEX" : scwin.params.kcomcd;
  //해운 항공 구분
  scwin.seaair = scwin.params.seaair == null ? "S" : scwin.params.seaair;
  //Import / Export 구분
  scwin.iogb = scwin.params.iogb == null ? "O" : scwin.params.iogb;
  //Master B/L No
  scwin.mblno = scwin.params.mblno == null ? "" : scwin.params.mblno;
  //Console No
  scwin.mhno = scwin.params.mhno == null ? "" : scwin.params.mhno;
  //House B/L No
  scwin.blno = scwin.params.blno == null ? "" : scwin.params.blno;
  //Invoice No
  scwin.prtnGrpNo = scwin.params.prtnGrpNo == null ? "" : scwin.params.prtnGrpNo;
  //청구 거래처 코드
  scwin.pchsClntNo = scwin.params.pchsClntNo == null ? "" : scwin.params.pchsClntNo;

  //TO-BE에서 추가(AS-IS에는 없네 아래 컨트롤 Disable 용도임.)
  //scwin.img_pchsPicNo.setDisabled(true);
  //scwin.ed_pchsPicNo.setDisabled(true);
  //scwin.txt_pchsPicNm.setDisabled(true);

  scwin.f_initSetTab();
  //f_HeaderCreate();		//헤더만드는 함수라 제외
  //scwin.f_Set("INIT");
  scwin.f_DefaultValue();

  //dma_Init.set("processFlag", "INIT");        //processFlag = "INIT";
  scwin.processFlag = "INIT";
  cnd_ed_mblno.focus();
  scwin.onLoad = false;
};

//-------------------------------------------------------------------------
// Tab 초기화
//-------------------------------------------------------------------------
scwin.f_initSetTab = function () {
  $c.gus.cfEnableObjects($p, [tr_tab_center]);
  tr_tab_center.setSelectedTabIndex(0); //disabled 되어 있는 탭 $c.gus.cfEnableObjects 함수로 활성화 시켜도 탭 내용이 열려 있지 않아서 추가
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
      //$c.gus.cfDisableObjects([img_pchsDt,img_pchsPicNo]);     //f_DisablePopUpObj(); 이걸로 대체.
      $c.gus.cfDisableObjects($p, [ed_pchsIntendDt, img_pchsPicNo]); ////img_pchsDt:Billing Date의 날력 아이콘, img_pchsPicNo:PIC의 돋보기 아이콘.

      break;
    case "RETRIEVE":
      //조회모드

      $c.gus.cfDisableKeyData($p); //cfDisableKeyData();
      $c.gus.cfDisableObjects($p, [ed_pchsIntendDt, img_pchsPicNo]); //$c.gus.cfDisableObjects([img_pchsDt,img_pchsPicNo]);		//$c.gus.cfDisableObjects f_DisablePopUpObj();
      if (scwin.processFlag == "RETRIEVE") {
        $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
        $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete]);
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
      $c.gus.cfEnableObjects($p, [ed_pchsIntendDt, img_pchsPicNo]); //f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
      break;
    case "UPDATE":
      //ed_clntBilgDocNo
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableObjects($p, [ed_pchsIntendDt, img_pchsPicNo]); //$c.gus.cfEnableObjects([img_pchsDt,img_pchsPicNo]);        //f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel]);
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
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (cnd_ed_mblno.getValue().trim() == "" && cnd_ed_blno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, Array("Master or House B/L"));
    cnd_ed_mblno.focus();
    return;
  }
  if (cnd_lc_mhno.getValue() == '') {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, Array("Console No"));
    return;
  }

  //dataset clear
  ds_paymentInvoiceList.removeAll();
  ds_purchaseCerti.removeAll();
  ds_purchaseCertiDetail.removeAll();
  dma_search.set("kcomcd", scwin.hid_kcomcd); // 대표 거래처 코드
  dma_search.set("seaair", cnd_lc_seaair.getValue()); // 해운 항공 Trans 구분
  dma_search.set("iogb", cnd_lc_iogb.getValue()); // Import/Export 구분
  dma_search.set("mblno", cnd_ed_mblno.getValue()); // MASTER B/L NO
  dma_search.set("blno", cnd_ed_blno.getValue()); // HOUSE B/L NO
  dma_search.set("mhno", cnd_lc_mhno.getValue()); // Console NO

  dma_search.set("prtnGrpNo", cnd_ed_prtnGrpNo.getValue()); // 거래명세서Group번호

  //-------------------------------------------------------------------------------------------------
  //pchsClntNo, pchsClntNm 셋팅 
  //as-is에서는 bind object로 연결되어 있네...원래는 udc_ilcomCode_pchsClnt의 .code, .name에 걸어야 되나 문제가 있어 아래와 같이 처리함.
  dma_search.set("pchsClntNo", cnd_ed_pchsClntNo.getValue());
  dma_search.set("pchsClntNm", cnd_txt_pchsClntNm.getValue());
  //-------------------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------------------
  dma_search.set("bilgClntNo", cnd_ed_pchsClntNo.getValue()); // 청구처 코드
  dma_search.set("bilgClntNm", cnd_txt_pchsClntNm.getValue()); // 청구처명

  dma_search.set("dept", cnd_ed_dept.getValue()); // 부서 코드
  dma_search.set("deptnm", cnd_txt_deptnm.getValue()); // 부서 명
  //-------------------------------------------------------------------------------------------------

  $c.sbm.execute($p, sbm_retrieve); //tr_retrieve.post();
};

//-------------------------------------------------------------------------
// 운임 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCommon = async function (pRow) {
  ds_purchaseCerti.removeAll(); //ds_purchaseCerti.ClearData();
  ds_purchaseCertiDetail.removeAll(); //ds_purchaseCertiDetail.ClearData();

  let curRowPos = gr_paymentInvoiceList.getFocusedRowIndex() == -1 ? pRow : gr_paymentInvoiceList.getFocusedRowIndex(); //AS-IS RowPosition
  //ds_paymentInvoiceList.getRealRowIndex()
  var kcomcd = ds_paymentInvoiceList.getCellData(curRowPos, "kcomcd"); // 대표 거래처 코드
  var seaair = ds_paymentInvoiceList.getCellData(curRowPos, "seaair"); // 해운 항공 Trans 구분
  var iogb = ds_paymentInvoiceList.getCellData(curRowPos, "iogb"); // Import/Export 구분

  var mblno = ds_paymentInvoiceList.getCellData(curRowPos, "mblno"); // MASTER B/L NO 
  var blno = ds_paymentInvoiceList.getCellData(curRowPos, "blno"); // HOUSE B/L NO
  var mhno = ds_paymentInvoiceList.getCellData(curRowPos, "mhno"); // Console No

  var certiNo = ds_paymentInvoiceList.getCellData(curRowPos, "certiNo"); // 거래명세서번호
  var prtnGrpNo = ds_paymentInvoiceList.getCellData(curRowPos, "prtnGrpNo"); // 거래명세서Group번호
  var pchsClntNo = ds_paymentInvoiceList.getCellData(curRowPos, "pchsClntNo"); // 청구처 코드 
  var pchsClntNm = ds_paymentInvoiceList.getCellData(curRowPos, "pchsClntNm"); // 청구처명
  var vatYn = ds_paymentInvoiceList.getCellData(curRowPos, "vatYn"); // 부가세 유무

  var slipNo = ds_paymentInvoiceList.getCellData(curRowPos, "slipNo"); // 전표번호
  var odrNo = ds_paymentInvoiceList.getCellData(curRowPos, "odrNo"); // Order No

  if ((blno != "" || mblno != "") && pchsClntNo != "") {
    dma_searchFreight.set("kcomcd", kcomcd); // 대표 거래처 코드
    dma_searchFreight.set("seaair", seaair); // 해운 항공 Trans 구분
    dma_searchFreight.set("iogb", iogb); // Import/Export 구분
    dma_searchFreight.set("mblno", mblno); // MASTER B/L NO 
    dma_searchFreight.set("blno", blno); // HOUSE B/L NO
    dma_searchFreight.set("mhno", mhno); // Console No

    dma_searchFreight.set("certiNo", certiNo); // 거래명세서번호
    dma_searchFreight.set("prtnGrpNo", prtnGrpNo); // 거래명세서Group번호
    dma_searchFreight.set("bilgClntNo", pchsClntNo); // 청구처 코드 - customer 의 code와 name에 레퍼런스 되어 있음. ( 그래서 이 값이 셋팅되면 자동 셋팅됬는데.... udc_ilcomCode_pchsClnt에서 code, name 빼버림...
    dma_searchFreight.set("bilgClntNm", pchsClntNm); // 청구처명    - customer 의 code와 name에 레퍼런스 되어 있음.

    dma_searchFreight.set("odrNo", odrNo); // Order No
    dma_searchFreight.set("slipNo", slipNo); // 전표 번호
    dma_searchFreight.set("locPtnCls", "1"); // 국내해외매출구분

    await $c.sbm.execute($p, sbm_retrieveCommon); //tr_retrieveCommon.post();
  }
};

//-------------------------------------------------------------------------
// function name : f_DefaultValue
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  //scwin.params = $c.data.getParameter();

  scwin.hid_kcomcd = scwin.kcomcd;
  cnd_lc_seaair.setValue(scwin.seaair);
  cnd_lc_iogb.setValue(scwin.iogb);
  cnd_ed_mblno.setValue(scwin.mblno);
  cnd_ed_blno.setValue(scwin.blno);
  cnd_ed_prtnGrpNo.setValue(scwin.prtnGrpNo);
  //cnd_ed_pchsClntNo.setValue(scwin.params.pchsClntNo);      scwin.onUdcCompleted 함수로 옮김.

  if (cnd_ed_mblno.getValue() != "") {
    scwin.f_MhnoLoading("M", cnd_ed_mblno.getValue()); // cnd_ed_mblno.text --> Master B/L No
  }
  if (cnd_ed_blno.getValue() != "") {
    scwin.f_MhnoLoading("H", cnd_ed_blno.getValue());
  }
  cnd_lc_mhno.setValue(scwin.mhno);
};

//udc 컨트롤 화면 로딩시 초기화 (onLoad에서는 적용안됨...)
scwin.onUdcCompleted = function () {
  scwin.f_Set("INIT"); //onLoad에서 호출하던 초기화 함수
  cnd_ed_pchsClntNo.setValue(scwin.params.pchsClntNo);
  tr_tab_center.activateTab(1); // 두번째 탭 활성화 (이거 안해주면 이 탭안에 컨트롤 인식을 못함.)
  scwin.onLoad = false;
};

//-------------------------------------------------------------------------
//MHNNO 가져오기
//-------------------------------------------------------------------------
scwin.f_MhnoLoading = async function (mhgb, blno) {
  let strClntNo = "";
  strClntNo = blno;
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
        //ds_mhno.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaMasterMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.BindColVal;		//--> M
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaMasterMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
      } else {
        //ds_mhno.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.BindColVal;
        sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1 + "&param2=" + cnd_lc_iogb.getValue();
      }
      await $c.sbm.execute($p, sbm_mhno);
    } else if (cnd_lc_seaair.getValue() == "T") {
      if (mhgb == "M") {
        alert("After House B/L No Input. Search Pls.");
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
// 세금계산서일괄생성 이동
//-------------------------------------------------------------------------
scwin.f_SlipCreate = function () {
  let pchsDeptCd = ed_dept.getValue().trim();
  let pchsDeptNm = txt_deptnm.getValue().trim();
  let pchsClntNo = ed_pchsClntNo.getValue().trim();
  let pchsClntNm = txt_pchsClntNm.getValue().trim();
  let pchsIntendDtSt = ed_pchsIntendDt.getValue().trim();
  let pchsIntendDtEnd = ed_pchsIntendDt.getValue().trim();
  //Master B/L No

  //let certiNo = ds_paymentInvoiceList.NameValue(ds_paymentInvoiceList.RowPosition, "certiNo");
  let certiNo = ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "certiNo");
  let ccChk = "0";
  let inuChk = "0";
  let k = 0;
  let l = 0;
  let m = 0;
  for (i = 0; i < ds_purchaseCertiDetail.getTotalRow(); i++) {
    if (ds_purchaseCertiDetail.getCellData(i, "fareEngCd") == "CCF") {
      k++;
    }
    if (ds_purchaseCertiDetail.getCellData(i, "fareEngCd") == "INU") {
      l++;
    }
    if (ds_purchaseCertiDetail.getCellData(i, "fareEngCd") != "INU") {
      m++;
    }
  }
  if (k > 0) {
    ccChk = "1";
  }
  if (l > 0 && m == 0) {
    inuChk = "1";
  }

  /* tn_200_01_02b.xml - f_Result 함수 참조해서 만듬. */
  var param = {
    pchsDeptCd: pchsDeptCd,
    pchsDeptNm: pchsDeptNm,
    pchsClntNo: pchsClntNo,
    pchsClntNm: pchsClntNm,
    certiNo: certiNo,
    pchsIntendDtSt: pchsIntendDtSt,
    pchsIntendDtEnd: pchsIntendDtEnd,
    ccChk: ccChk,
    inuChk: inuChk
  };
  let strOrderDetailTitle = "세금계산서 접수 등록";
  let strOrderDetailUrl = "/ui/ds/fs/adjm/fs_103_01_01b.xml";
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "fs_103_01_01b.xml", param);
};

//-------------------------------------------------------------------------
// 세금계산서일괄생성 이동() - Multi Tax Create
//-------------------------------------------------------------------------
scwin.f_SlipCreateMulti = function () {
  let pchsDeptCd = ed_dept.getValue().trim();
  let pchsDeptNm = txt_deptnm.getValue().trim();
  let pchsClntNo = ed_pchsClntNo.getValue().trim();
  let pchsClntNm = txt_pchsClntNm.getValue().trim();
  let pchsIntendDtSt = ed_pchsIntendDt.getValue().trim();
  let pchsIntendDtEnd = ed_pchsIntendDt.getValue().trim();
  //Master B/L No

  let certiNo = ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "certiNo");
  let inuChk = "0";
  let l = 0;
  let m = 0;
  for (i = 0; i < ds_purchaseCertiDetail.getTotalRow(); i++) {
    if (ds_purchaseCertiDetail.getCellData(i, "fareEngCd") == "INU") {
      l++;
    }
    if (ds_purchaseCertiDetail.getCellData(i, "fareEngCd") != "INU") {
      m++;
    }
  }
  if (l > 0 && m == 0) {
    inuChk = "1";
  }
  var param = {
    pchsDeptCd: pchsDeptCd,
    pchsDeptNm: pchsDeptNm,
    pchsClntNo: pchsClntNo,
    pchsClntNm: pchsClntNm,
    certiNo: certiNo,
    pchsIntendDtSt: pchsIntendDtSt,
    pchsIntendDtEnd: pchsIntendDtEnd,
    inuChk: inuChk
  };
  let strOrderDetailTitle = "매입 세금계산서 일괄생성";
  let strOrderDetailUrl = "/ui/il/acc/acetc/ac_304_01_01b.xml";
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "ac_304_01_01b.xml", param);
};

//-------------------------------------------------------------------------
// 대납금 전표 생성 이동
//-------------------------------------------------------------------------
scwin.f_Slip = function () {
  // 주석 처리한 부분은 f_Slip_callbackFn 함수에 정의함.

  // let pchsDeptCd = ed_dept.getValue().trim(); //물류 귀속 부서 코드
  // let pchsDeptNm = txt_deptnm.getValue().trim();

  // let pchsClntNo = ed_pchsClntNo.getValue().trim();
  // let pchsClntNm = txt_pchsClntNm.getValue().trim();

  // let pchsIntendDtSt = ed_pchsIntendDt.getValue().trim();
  // let pchsIntendDtEnd = ed_pchsIntendDt.getValue().trim();

  let certiNo = ds_paymentInvoiceList.getCellData(ds_paymentInvoiceList.getRowPosition(), "certiNo");
  let prtnGrpNo = ds_paymentInvoiceList.getCellData(ds_paymentInvoiceList.getRowPosition(), "prtnGrpNo");

  // let cucd = ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "cucd");
  // let rate = ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "rate");

  // let amtFcrc = ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "sumPchsAmtFcrc");
  // let amt = ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "sumPchsAmt")
  //         + ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "sumVat");
  // let vat = ds_paymentInvoiceList.getCellData(gr_paymentInvoiceList.getFocusedRowIndex(), "sumVat");

  if (certiNo == "" || prtnGrpNo == "") {
    alert("Payment Invoice를 먼저 생성 하세요");
    return;
  }
  let curRow = gr_paymentInvoiceList.getFocusedRowIndex();
  if (ds_paymentInvoiceList.getCellData(curRow, "slipNo") != "") {
    alert("전표생성이 된 상태입니다.확인해 주십시오.");
    return;
  }

  // let fareEngCd = ds_purchaseCertiDetail.getCellData(1, "fareEngCd");     //계정코드
  scwin.f_PopUp(4, 'T');

  // let acctDeptCd = hid_acctDeptCd.getValue(); //회계 귀속 부서 코드		
  // let acctDeptNm = hid_acctDeptNm.getValue(); //회계 귀속 부서 명

  // let rmk = $c.gus.cfIsNull(txa_rmk.getValue()) ? '' : txa_rmk.getValue();    //적요

  // var param = {
  //       pchsDeptCd      : pchsDeptCd
  //     , pchsDeptNm      : pchsDeptNm
  //     , pchsClntNo      : pchsClntNo
  //     , pchsClntNm      : pchsClntNm
  //     , certiNo         : certiNo
  //     , prtnGrpNo       : prtnGrpNo
  //     , fareEngCd       : fareEngCd
  //     , pchsIntendDtSt  : pchsIntendDtSt
  //     , pchsIntendDtEnd : pchsIntendDtEnd
  //     , cucd            : cucd
  //     , rate            : rate
  //     , amtFcrc         : amtFcrc
  //     , amt             : amt
  //     , vat             : vat
  //     , acctDeptCd      : acctDeptCd
  //     , acctDeptCd2     : pchsDeptCd
  //     , acctDeptNm      : acctDeptNm
  //     , rmk             : rmk
  // };

  // let strOrderDetailTitle = "대납금 전표 생성";
  // let strOrderDetailUrl = "/ui/il/acc/acpay/ac_106_01_04b.xml";

  // $c.win.openMenu(strOrderDetailTitle, strOrderDetailUrl, "ac_106_01_04b.xml", param);
};

//-------------------------------------------------------------------------
//f_Slip() 함수 내 값 할당부 동기/비동기 문제로 이 함수에 구현함.
//-------------------------------------------------------------------------
scwin.f_Slip_callbackFn = function () {
  let pchsDeptCd = ed_dept.getValue().trim(); //물류 귀속 부서 코드
  let pchsDeptNm = txt_deptnm.getValue().trim();
  let pchsClntNo = ed_pchsClntNo.getValue().trim();
  let pchsClntNm = txt_pchsClntNm.getValue().trim();
  let pchsIntendDtSt = ed_pchsIntendDt.getValue().trim();
  let pchsIntendDtEnd = ed_pchsIntendDt.getValue().trim();
  var curRow = ds_paymentInvoiceList.getRowPosition() == null ? 0 : ds_paymentInvoiceList.getRowPosition();
  let certiNo = ds_paymentInvoiceList.getCellData(curRow, "certiNo");
  let prtnGrpNo = ds_paymentInvoiceList.getCellData(curRow, "prtnGrpNo");
  let cucd = ds_paymentInvoiceList.getCellData(curRow, "cucd");
  let rate = ds_paymentInvoiceList.getCellData(curRow, "rate");
  let amtFcrc = ds_paymentInvoiceList.getCellData(curRow, "sumPchsAmtFcrc");
  var amt = BigInt(ds_paymentInvoiceList.getCellData(curRow, "sumPchsAmt")) + BigInt(ds_paymentInvoiceList.getCellData(curRow, "sumVat"));
  let vat = ds_paymentInvoiceList.getCellData(curRow, "sumVat");
  let fareEngCd = ds_purchaseCertiDetail.getCellData(0, "fareEngCd"); //계정코드 ( 아래 그리드 첫번째 Row로 강제 셋팅)

  let acctDeptCd = scwin.hid_acctDeptCd; //회계 귀속 부서 코드		
  let acctDeptNm = scwin.hid_acctDeptNm; //회계 귀속 부서 명

  let rmk = $c.gus.cfIsNull($p, txa_rmk.getValue()) ? '' : txa_rmk.getValue(); //적요

  var param = {
    pchsDeptCd: pchsDeptCd,
    pchsDeptNm: pchsDeptNm,
    pchsClntNo: pchsClntNo,
    pchsClntNm: pchsClntNm,
    certiNo: certiNo,
    prtnGrpNo: prtnGrpNo,
    fareEngCd: fareEngCd,
    pchsIntendDtSt: pchsIntendDtSt,
    pchsIntendDtEnd: pchsIntendDtEnd,
    cucd: cucd,
    rate: rate,
    amtFcrc: amtFcrc,
    amt: amt.toString(),
    vat: vat,
    acctDeptCd: acctDeptCd,
    acctDeptCd2: pchsDeptCd,
    acctDeptNm: acctDeptNm,
    rmk: rmk
  };
  let strOrderDetailTitle = "대납금 전표 생성";
  let strOrderDetailUrl = "/ui/il/acc/acpay/ac_106_01_04b.xml";
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "ac_106_01_04b.xml", param, {
    openAction: "exist"
  });
};

//------------------------------------------------------------------------------------------------------- 
// 팝업
//-------------------------------------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  let rtnList = new Array();
  switch (disGubun) {
    case 1:
      //거래처 팝업(Customer)
      rtnList = udc_ilcomCode_pchsClnt.ilCommonPopUp(scwin.udc_ilcomCode_pchsClnt_callBackFunc //pCallback
      , cnd_ed_pchsClntNo.getValue().trim(), cnd_txt_pchsClntNm.getValue() //pName
      , chgGubun //pWinCloseTF
      , '5' //pDispCnt
      , 'Customer' //pTitle
      , '140,300' //pWidth
      , null //pHidden
      , null //pWhere
      , '500' //pW
      , '500' //pH
      , null //pTop
      , null //pLeft
      , null //pExistTF
      , 'F' //pAllSearchTF
      , 'Customer Search,Customer Code,Customer Name' //pWtitleSearch
      //pNoDataCloseTF
      //tmpDataSet
      );
      break;
    case 2:
      //거래처 담당자 팝업(PIC) udc_ilcomCode_ed_pchsPicNo       
      var pParam = ed_pchsClntNo.getValue().trim();
      if (pParam == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("Customer")); // 선택된 @이(가) 없습니다.
        ed_pchsClntNo.focus();
        return;
      }
      udc_ilcomCode_ed_pchsPicNo.setSelectId("retrieveClntPicInfo"); //retrieveClntPicInfo
      rtnList = udc_ilcomCode_ed_pchsPicNo.ilCommonPopUp(scwin.udc_ilcomCode_ed_pchsPicNo_callBackFunc, ed_pchsPicNo.getValue().trim() // 화면에서의 ??? Code Element의	Value
      , txt_pchsPicNm.getValue() // 화면에서의 ??? Name Element의	Value
      , chgGubun // 결과가 1건 일때  원도우를	AutoClose 여부	(T:CloseF:Opened)
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
      //검색 부서 코드 udc_ilcomCode_dept
      trnList = udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue().trim() //pCode
      , cnd_txt_deptnm.getValue() //pName
      , "T" //pWinCloseTF
      , '2' //pDispCnt
      , "Code, Name" //pTitle
      , '80,230' //pWidth
      , "3,4,5,6,7,8,9,10" //pHidden
      , null //pWhere
      , null //pW
      , null //pH
      , null //pTop
      , null //pLeft
      , null //pExistTF
      , "F" //pAllSearchTF
      , "Department,Code,Name" //pWtitleSearch
      , "F" //pNoDataCloseTF
      //tmpDataSet
      );
      break;
    case 4:
      // 부서 코드(회계 부서 코드)
      let pCode = ed_dept.getValue();
      let pName = "";
      trnList = hid_udc_ed_dept.ilCommonPopUp(scwin.hid_udc_ed_dept_callBackFunc //pCallback
      , pCode //pCode
      , pName //pName
      , "T" //pWinCloseTF 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' //pDispCnt 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" //pTitle Tit1le순서
      , '80,230' //pWidth 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" //pHidden 컬럼중에서 숨기는	컬럼 지정
      , '' //pWhere SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null //pW POP-UP뛰을때	원도우의	사용자 정의	폭
      , null //pH POP-UP뛰을때	우도우의	사용자 정의	높이
      , null //pTop 윈도우 위치 Y좌표
      , null //pLeft 윈도우 위치 X좌표
      , null //pExistTF 중복체크여부	("F")
      , "F" //pAllSearchTF 전체검색허용여부	("F")
      , "귀속부서,Code,Name" //pWtitleSearch POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , "T" //pNoDataCloseTF Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      , null //tmpDataSet
      );
      break;
    default:
      break;
  }
};

// ========================================================================================
// f_popUp에서 호출되는  콜백 함수들
// ========================================================================================
// Customer
scwin.udc_ilcomCode_pchsClnt_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    cnd_ed_pchsClntNo.setValue(rtnList[0]); //udc_ilcomCode_pchsClnt.codeId
    cnd_txt_pchsClntNm.setValue(rtnList[1]); //udc_ilcomCode_pchsClnt.nameId
    cnd_ed_pchsClntNo.options.hidVal = rtnList[0];
    cnd_txt_pchsClntNm.options.hidVal = rtnList[1];
  } else {
    cnd_ed_pchsClntNo.setValue("");
    cnd_txt_pchsClntNm.setValue("");
    cnd_ed_pchsClntNo.options.hidVal = "";
    cnd_txt_pchsClntNm.options.hidVal = "";
  }
};

//PIC
scwin.udc_ilcomCode_ed_pchsPicNo_callBackFunc = function (rtnList) {
  var curRow = ds_paymentInvoiceList.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_pchsPicNo.setValue(rtnList[0]);
    txt_pchsPicNm.setValue(rtnList[1]);
    // ed_pchsPicNo.options.hidVal = rtnList[0];
    // ed_annm.options.hidVal = rtnList[1];

    ds_paymentInvoiceList.setCellData(curRow, "pchsPicNo", rtnList[0].slice(0, 2)); //청구처담당자코드
    ds_paymentInvoiceList.setCellData(curRow, "pchsPicNm", rtnList[1]); //청구처담당자명

    // for (var idx = 0; idx < gr_paymentInvoiceFreightList.getTotalRow(); idx++) {
    //     gr_paymentInvoiceFreightList.setCellData(curRow, "pchsPicNo", rtnList[0]);       //청구처담당자코드
    //     gr_paymentInvoiceFreightList.setCellData(curRow, "pchsPicNm", rtnList[1]);       //청구처담당자명
    // }
    for (var idx = 0; idx < ds_purchaseCertiDetail.getTotalRow(); idx++) {
      ds_purchaseCertiDetail.setCellData(curRow, "pchsPicNo", rtnList[0].slice(0, 2)); //청구처담당자코드
      ds_purchaseCertiDetail.setCellData(curRow, "pchsPicNm", rtnList[1]); //청구처담당자명
    }
    ds_purchaseCerti.setCellData(curRow, "pchsPicNo", rtnList[0].slice(0, 2)); //청구처담당자코드
    ds_purchaseCerti.setCellData(curRow, "pchsPicNm", rtnList[1]); //청구처담당자명
  } else {
    ed_pchsPicNo.setValue("");
    txt_pchsPicNm.setValue("");
    // ed_pchsPicNo.options.hidVal = "";
    // txt_pchsPicNm.options.hidVal = "";
    ds_paymentInvoiceList.setCellData(curRow, "pchsPicNo", ""); //청구처담당자코드
    ds_paymentInvoiceList.setCellData(curRow, "pchsPicNm", ""); //청구처담당자명

    for (var idx = 0; idx < ds_purchaseCertiDetail.getTotalRow(); idx++) {
      ds_purchaseCertiDetail.setCellData(curRow, "pchsPicNo", ""); //청구처담당자코드
      ds_purchaseCertiDetail.setCellData(curRow, "pchsPicNm", ""); //청구처담당자명
    }
  }
};

//부서코드 (회계 부서 코드)
scwin.hid_udc_ed_dept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    scwin.hid_acctDeptCd = rtnList[4]; //귀속부서
    scwin.hid_acctDeptNm = rtnList[1]; //귀속부서
  } else {
    scwin.hid_acctDeptCd = ""; //귀속부서
    scwin.hid_acctDeptNm = ""; //귀속부서 명
  }

  //원래 f_Slip 로직 여기에 구현
  scwin.f_Slip_callbackFn();
};

//Department CallBack
scwin.udc_ilcomCode_dept_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    cnd_ed_dept.setValue(rtnList[0]);
    cnd_ed_deptnm.setValue(rtnList[1]);
    cnd_ed_dept.options.hidVal = rtnList[0];
    cnd_ed_deptnm.options.hidVal = rtnList[1];
  } else {
    cnd_ed_dept.setValue("");
    cnd_ed_deptnm.setValue("");
    cnd_ed_dept.options.hidVal = "";
    cnd_ed_deptnm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.f_openPgm = function (name) {
  if (name == "Profit") {
    //AS-IS에서 blno, mblno 동일한 값 바인딩 하고 있음.
    var param = {
      kcomcd: "",
      seaair: cnd_lc_seaair.getValue(),
      iogb: cnd_lc_iogb.getValue(),
      blno: cnd_ed_blno.getValue(),
      mblno: cnd_ed_blno.getValue(),
      mhno: cnd_lc_mhno.getValue()
    };
    let strPath = "/ui/il/pfm/pfbs/pe_101_01_01b.xml";
    let strTitle = "Booking Sheet";
    $c.win.openMenu($p, strTitle, strPath, "pe_101_01_01b.xml", param);
  }
};

//-------------------------------------------------------------------------
//rd_billgb KRW선택시 셋팅하는 함수 (라디오 버튼)
//------------------------------------------------------------------------
scwin.f_billgbSetting = function () {
  rd_billgb.setSelectedIndex(1);
  var cr = ds_purchaseCertiDetail.getRowCount();
  if (cr > 0) {
    for (var i = 0; i < cr; i++) {
      if (ds_purchaseCertiDetail.getCellData(i, "crcCd").trim() != "KRW") {
        ds_purchaseCertiDetail.setCellData(i, "crcCd", "KRW");
        ds_purchaseCertiDetail.setCellData(i, "exRate", 0);
        ds_purchaseCertiDetail.setCellData(i, "pchsAmtFcrc", 0);
        ds_purchaseCertiDetail.setCellData(i, "spplyAmtFcrc", 0);
        ds_purchaseCertiDetail.setCellData(i, "pchsInscrpAmtFcrc", 0);
        scwin.refkey = ds_purchaseCertiDetail.getCellData(i, "refkey");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ds_mhno.setJSON([]); //Console No 초기화 안되서 추가
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  //$c.data.undoRow(ds_paymentInvoiceList, "Y");    //ds_paymentInvoiceList.Undo(ds_paymentInvoiceList.RowPosition);

  var curRow = ds_paymentInvoiceList.getRowPosition();
  ds_paymentInvoiceList.undoRow(curRow); //ds_paymentInvoiceList.Undo(ds_paymentInvoiceList.RowPosition);

  if (ds_paymentInvoiceList.getCellData(curRow, "cucd") == "KRW") {
    ds_paymentInvoiceList.setCellData(curRow, "EXP", "원화");
    gr_paymentInvoiceList.setCellColor(curRow, "EXP", "Blue");
  } else {
    ds_paymentInvoiceList.setCellData(curRow, "EXP", "외화");
    gr_paymentInvoiceList.setCellColor(curRow, "EXP", "Red");
  }
  ds_paymentInvoiceList.modifyRowStatus(curRow, "R");
  ds_purchaseCerti.undoAll();
  ; //ds_purchaseCerti.ClearData();
  ds_purchaseCertiDetail.undoAll(); //ds_purchaseCertiDetail.ClearData();

  //기존값 원복
  dma_paymentInvoice.set("pchsIntendDt", ds_paymentInvoiceList.getCellData(curRow, "pchsIntendDt")); //Billing Date
  dma_paymentInvoice.set("clntBilgDocNo", ds_paymentInvoiceList.getCellData(curRow, "clntBilgDocNo")); //Customer INV
  dma_paymentInvoice.set("pchsPicNo", ds_paymentInvoiceList.getCellData(curRow, "pchsPicNo")); //pic code
  dma_paymentInvoice.set("pchsPicNm", ds_paymentInvoiceList.getCellData(curRow, "pchsPicNm")); //pic Name

  scwin.f_Set("CANCEL");
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_Set("CREATE");
  scwin.f_billgbSetting();

  //여기서 그리드에 값 넣어버리자.status도 여기서 바뀌지.
  var curRow = ds_paymentInvoiceList.getRowPosition() == null ? 0 : ds_paymentInvoiceList.getRowPosition();
  ds_paymentInvoiceList.setCellData(curRow, "pchsIntendDt", scwin.strCurDate);
  ds_paymentInvoiceList.setCellData(curRow, "confirmDt", scwin.strCurDate);
  ed_pchsIntendDt.setValue(scwin.strCurDate); //Billing Date
  ed_pchsIntendDt.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  var curRow = ds_paymentInvoiceList.getRowPosition();

  //Loading OR Search 후 Invoice 그리드 선택 안하면 알림
  if (curRow == null) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Invoice"]); //var MSG_CM_ERR_056   =  "선택된 @이(가) 없습니다.";
    return;
  }
  scwin.f_Set("UPDATE");
  ds_paymentInvoiceList.modifyRowStatus(curRow, "U"); //2026.03.23 추가("상태변경")

  ed_pchsIntendDt.focus(); //Billing Date
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let curRowIdx = gr_paymentInvoiceList.getFocusedRowIndex();
  if (ds_paymentInvoiceList.getCellData(curRowIdx, "slipNo") != "") {
    await $c.gus.cfAlertMsg($p, E_MSG_ERR_001, [ds_paymentInvoiceList.getCellData(curRowIdx, "slipNo")]);
    return;
  }
  if (ds_purchaseCerti.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Invoice"]); //var MSG_CM_ERR_056   =  "선택된 @이(가) 없습니다.";
    return false;
  }
  if (ds_purchaseCertiDetail.getRowCount() < 1) {
    E_MSG_CM_ERR_056;
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_056, ["Invoice"]); //@는 변경된 사항이 없습니다.
    return false;
  }
  if (ds_paymentInvoiceList.getModifiedIndex().length == 0 || ds_purchaseCerti.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["Invoice"]); //@는 변경된 사항이 없습니다.
    return false;
  }
  if (rd_billgb.getValue() == "2") {
    for (var i = 0; i < ds_purchaseCerti.getRowCount(); i++) {
      ds_purchaseCerti.setCellData(i, "crcCd", "KRW");
    }
  } else {
    var cnt = 0;
    for (var i = 0; i < ds_purchaseCertiDetail.getRowCount(); i++) {
      if (ds_purchaseCertiDetail.getCellData(i, "crcCd") != "KRW") {
        cnt++;
      }
    }
    if (cnt == 0) {
      for (var j = 0; j < ds_purchaseCerti.getRowCount(); j++) {
        ds_purchaseCerti.setCellData(j, "crcCd", "KRW");
      }
    }
  }
  if (!scwin.f_AcctCdCheck()) {
    return false;
  }
  if (await scwin.f_ReqFieldChk()) {
    if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
      ds_purchaseCerti.setCellData(0, "pchsIntendDt", ed_pchsIntendDt.getValue());
      $c.sbm.execute($p, sbm_save); //tr_save.Post();
      //processFlag = "RETRIEVE"; sbm_save의 submit_done으로 옮김....
      //f_Set("RETRIEVE");        sbm_save의 submit_done으로 옮김....
    }
  }
};

//-------------------------------------------------------------------------
// Validate check
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if ((await $c.gus.cfValidate($p, [tbl_PaymentInfo])) == false) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
//  거래명세서 생성 전, 외상매입 계정과 전도금 계정 섞여있는지 확인하는 함수
//-------------------------------------------------------------------------
scwin.f_AcctCdCheck = function () {
  var cnt = 0; //일반매입계정 count
  var cnt_j = 0; //전도금계정 count

  for (var i = 0; i < ds_purchaseCertiDetail.getRowCount(); i++) {
    if (ds_purchaseCertiDetail.getCellData(i, "chk") == "T") {
      if (ds_purchaseCertiDetail.getCellData(i, "pchsCrAcctCd") == "2100110")
        //외상매입계정 
        {
          cnt++;
        }
      if (ds_purchaseCertiDetail.getCellData(i, "pchsCrAcctCd") == "1110121")
        //전도금-일반 
        {
          cnt_j++;
        }
      if (ds_purchaseCertiDetail.getCellData(i, "pchsCrAcctCd") == "2100860")
        //미지급비용-전도금
        {
          cnt_j++;
        }
    }
  }
  if (cnt > 0 && cnt_j > 0) {
    alert("외상매입계정과 전도금 계정을 동시에 사용할 수 없습니다.");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let curRowIdx = gr_paymentInvoiceList.getFocusedRowIndex();
  if (ds_paymentInvoiceList.getCellData(curRowIdx, "slipNo") != "") {
    await $c.gus.cfAlertMsg($p, E_MSG_ERR_001, [ds_paymentInvoiceList.getCellData(curRowIdx, "slipNo")]);
    return;
  }
  if (await $c.win.confirm($p, E_MSG_CM_CRM_004)) {
    //삭제하시겠습니까?

    var cf = ds_purchaseCerti.getRowCount();
    for (var i = 0; i < cf; i++) {
      //ds_purchaseCerti.setRowPosition(i);     //이게 필요할라나 모르겠다...
      if (ds_purchaseCerti.getCellData(i, "chk") == "T") {
        ds_purchaseCerti.deleteRow(i); //상태값만 "D로 변경"
      }
    }
    $c.sbm.execute($p, sbm_save); //tr_save.Post();
  }
};
scwin.f_oldRowInit = function () {
  scwin.oldRow_1 = -1;
  scwin.oldRow_2 = -1;
};

//-------------------------------------------------------------------------
//컨트롤 이벤트 함수 정의부
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//Search Button click event
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_oldRowInit(); //oldRow 초기화

  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
//Tax Create Button click event
//-------------------------------------------------------------------------
scwin.btn_odrRegIfnoTax_onclick = function (e) {
  scwin.f_SlipCreate(); //세금계산서일괄생성 이동
};

//-------------------------------------------------------------------------
//Multi Tax Create Button click event
//-------------------------------------------------------------------------
scwin.btn_odrRegIfnoMultTax_onclick = function (e) {
  scwin.f_SlipCreateMulti();
};

//-------------------------------------------------------------------------
//대납금 전표 생성 Button click event
//-------------------------------------------------------------------------
scwin.btn_odrRegIfnoAcc_onclick = function (e) {
  scwin.f_Slip();
};

//-------------------------------------------------------------------------
//Profit Button click event
//-------------------------------------------------------------------------
scwin.btn_profitrus_onclick = function (e) {
  scwin.f_openPgm('Profit');
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
//Cancel Button click event
//-------------------------------------------------------------------------
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Undo();
};

//-------------------------------------------------------------------------
//Create Button click event
//-------------------------------------------------------------------------
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};

//-------------------------------------------------------------------------
//Update Button click event
//-------------------------------------------------------------------------
scwin.btn_Update_onclick = function (e) {
  scwin.f_Update();
};

//-------------------------------------------------------------------------
//Save Button click event
//-------------------------------------------------------------------------
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
//Delete Button click event
//-------------------------------------------------------------------------
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};

//-------------------------------------------------------------------------
//sbm_save_submitdone event
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  //scwin.processFlag = "RETRIEVE";   //2026.03.24 주석 처리 함. 나중에 삭제 합시다.
  //await scwin.f_Set("RETRIEVE");    //2026.03.24 주석 처리 함. 나중에 삭제 합시다.

  scwin.f_oldRowInit(); //oldRow 초기화 (이놈아를 안해서 그리드 click 이벤트가 안먹었음....)
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
//조회(성공)
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  rd_billgb.setValue("1");
  scwin.rd_billgb_flag = "OnSelChange";
  //scwin.f_RetrieveCommon(1);      // 맨 나중에 호출되게 위치 바꿈
  scwin.rd_billgb_flag = "retrieve";

  //AS-SI ds_paymentInvoiceList event=OnLoadCompleted(rowcnt)
  //cfHideDSWaitMsg(gr_paymentInvoiceList);       --> 웹스퀘어 내장함수로 대체 한다함.
  if (ds_paymentInvoiceList.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    scwin.processFlag = "INIT";
    scwin.f_Set("INIT");
  } else {
    gr_paymentInvoiceList.setFocusedCell(0, 0);
    txt_paymentInvoiceCnt.setValue(ds_paymentInvoiceList.getTotalRow());
  }

  //Billing Type Docode Setting
  //AS-IS Value={Decode(cucd,"KRW","원화","외화")} show=true color={Decode(cucd,"KRW","blue","red")}
  if (ds_paymentInvoiceList.getTotalRow() > 0) {
    for (let idx = 0; idx < ds_paymentInvoiceList.getTotalRow(); idx++) {
      if (ds_paymentInvoiceList.getCellData(idx, "cucd") == "KRW") {
        ds_paymentInvoiceList.setCellData(idx, "EXP", "원화");
        gr_paymentInvoiceList.setCellColor(idx, "EXP", "Blue");
      } else {
        ds_paymentInvoiceList.setCellData(idx, "EXP", "외화");
        gr_paymentInvoiceList.setCellColor(idx, "EXP", "Red");
      }
    }
    ds_paymentInvoiceList.modifyAllStatus("R"); // 데이터셋 상태값 초기화(위 for문에서 값 변경해서 상태값이 수정(U)로 셋팅됨...)

    //첫번째 그리드값 컨트롤들에게 바인딩 하기 위해서....
    dma_paymentInvoice.setEmptyValue();
    let rowJSON = ds_paymentInvoiceList.getRowJSON(0);
    dma_paymentInvoice.setJSON(rowJSON);

    //ed_pchsIntendDt.setValue(dma_paymentInvoice.get("pchsIntendDt"));   //Billing Data
    ed_pchsPicNo.setValue(dma_paymentInvoice.get("pchsPicNo")); //PIC 담당자코드
    txt_pchsPicNm.setValue(dma_paymentInvoice.get("pchsPicNm")); //PIC 담당자명

    //2026.03.23 주석 처리
    //scwin.f_OnRowPosChanged(0);     //AS-IS <script language=JavaScript for=ds_paymentInvoiceList event=OnRowPosChanged(row)> 일부 소스 작성함.
    scwin.gr_paymentInvoiceList_oncellclick(0);
    ds_paymentInvoiceList.setRowPosition(0);
  }

  //scwin.f_RetrieveCommon(0);
};

//-------------------------------------------------------------------------
//조회 TR EVENT(실패)
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submiterror = async function (e) {};
scwin.udc_ilcomCode_pchsClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_ed_pchsClntNo, cnd_txt_pchsClntNm);
  console.log(ret);
};

//-------------------------------------------------------------------------
//udc ilComCode - Customer CodeEvent --> ac_106_01_02b.xml 소스 참조함. cnd_ed_schsClntNm
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_pchsClnt_onblurCodeEvent = function (e) {
  if (cnd_ed_pchsClntNo.getValue() === "") {
    cnd_txt_pchsClntNm.setValue("");
  } else {
    //udc_ilcomCode_pchsClnt.ilCommonPopUp(scwin.udc_ilcomCode_pchsClnt_callBackFunc,cnd_ed_pchsClntNo.getValue(), cnd_txt_pchsClntNm.getValue(),null,"5","Customer",null,null,null,null,null,null,null,null,"T",null,null);
    udc_ilcomCode_pchsClnt.ilCommonPopUp(scwin.udc_ilcomCode_pchsClnt_callBackFunc, cnd_ed_pchsClntNo.getValue(), cnd_txt_pchsClntNm.getValue(), "T", '5', 'Customer', '140,300', null, null, '500', '500', null, null, null, 'F', 'Customer Search,Customer Code,Customer Name', 'T');
  }
};

//-------------------------------------------------------------------------
//udc ilComCode - Customer onviewchangeNameEvent--> ac_106_01_02b.xml 소스 참조함.
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_pchsClnt_onviewchangeNameEvent = function (info) {
  if (cnd_txt_pchsClntNm.getValue() === "") {
    cnd_ed_pchsClntNo.setValue("");
  }
};

//-------------------------------------------------------------------------
//customer pop(거래처)
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_pchsClnt_onclickEvent = function (e) {
  udc_ilcomCode_pchsClnt.ilCommonPopUp(scwin.udc_ilcomCode_pchsClnt_callBackFunc, cnd_ed_pchsClntNo.getValue(), cnd_txt_pchsClntNm.getValue(), null, "5", "Customer", null, null, null, null, null, null, null, null, "F", null, null);
};

//-------------------------------------------------------------------------
//Department CallBack Funciton
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_ed_dept, cnd_txt_deptnm);
  console.log(ret);
};

//-------------------------------------------------------------------------
//udc ilComCode - Department onblurCodeEvent--> ac_106_01_02b.xml 소스 참조함.
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_dept_onblurCodeEvent = function (e) {
  if (cnd_ed_dept.getValue() === "") {
    cnd_txt_deptnm.setValue("");
  } else {
    udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue(), cnd_txt_deptnm.getValue(), null, "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Department,Code,Name", null);
  }
};

//-------------------------------------------------------------------------
//udc ilComCode - Department onblurCodeEvent--> ac_106_01_02b.xml 소스 참조함.
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_dept_onviewchangeNameEvent = function (info) {
  if (cnd_txt_deptnm.getValue() === "") {
    cnd_ed_dept.setValue("");
  }
};

//-------------------------------------------------------------------------
//udc ilComCode - Department onblurCodeEvent--> ac_106_01_02b.xml 소스 참조함.
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_dept_onclickEvent = function (e) {
  udc_ilcomCode_dept.ilCommonPopUp(scwin.udc_ilcomCode_dept_callBackFunc, cnd_ed_dept.getValue(), cnd_txt_deptnm.getValue(), null, "2", "Code, Name", null, null, null, null, null, null, null, null, "F", "Department,Code,Name", null);
};

//-------------------------------------------------------------------------
//Master B/L No onblur Event
//-------------------------------------------------------------------------
scwin.cnd_ed_mblno_onblur = function (e) {
  scwin.f_oldRowInit(); //oldRow 초기화

  scwin.f_MhnoLoading("M", cnd_ed_mblno.getValue().trim());
};

//-------------------------------------------------------------------------
//House B/L No onblur Event
//-------------------------------------------------------------------------
scwin.cnd_ed_blno_onblur = function (e) {
  scwin.f_oldRowInit(); //oldRow 초기화

  scwin.f_MhnoLoading("H", cnd_ed_blno.getValue().trim());
};
scwin.sbm_mhno_submitdone = async function (e) {
  //<script language=JavaScript for=ds_mhno event=OnLoadCompleted(rowcnt)>

  if (ds_mhno.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  } else {
    if (scwin.mblno != "" || scwin.blno) {
      scwin.f_Retrieve();
    }
  }
};

//-------------------------------------------------------------------------
// paymentInvoiceList Grid CellClick Event
// AS-IS <script language=JavaScript for=gr_paymentInvoiceList event=OnClick(row,colid)>
//       및 <script language=JavaScript for=ds_paymentInvoiceList event=OnRowPosChanged(row)> EVENT 여기다 전환함.
// 그리고 <script language=JavaScript for=ds_paymentInvoiceList event=onColumnChanged(row,colid)> 놈아도 여기서 호출되게 함.
//-------------------------------------------------------------------------
scwin.gr_paymentInvoiceList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (scwin.oldRow_1 != rowIndex) {
    //선택된 Row가 바뀌었을때만 event 발생되게 수정함. ( 쓸때없이 submit 날라가서 바꿈...)        

    //이전row 상태값 체크하자. 2026.03.23 추가
    if (!scwin.rowStatusChk()) return;
    dma_paymentInvoice.setEmptyValue();
    ds_purchaseCerti.setJSON([]);
    let rowJSON = ds_paymentInvoiceList.getRowJSON(rowIndex);
    dma_paymentInvoice.setJSON(rowJSON);
    ds_purchaseCerti.setJSON(rowJSON);

    //CKCD STYYCYG [2026.03.24] 여기가 잘못 되었네... 그리드값 변하는 이벤트에서 호출되게 바꾸자....
    await scwin.paymentInvoiceList_onColumnChanged(rowIndex, columnId); //<script language=JavaScript for=ds_paymentInvoiceList event=onColumnChanged(row,colid)>

    //가운데 컨트롤들에 바인딩 안되서 추가함.
    ed_pchsPicNo.setValue(dma_paymentInvoice.get("pchsPicNo")); //PIC 담당자코드
    txt_pchsPicNm.setValue(dma_paymentInvoice.get("pchsPicNm")); //PIC 담당자명

    if (!scwin.f_OnRowPosChanged(rowIndex)) return; //<script language=JavaScript for=ds_paymentInvoiceList event=OnRowPosChanged(row)> 대체 함수임
    await scwin.f_RetrieveCommon(rowIndex); //<script language=JavaScript for=gr_paymentInvoiceList event=OnClick(row,colid)>에서 호출되는 함수

    scwin.oldRow_1 = rowIndex;
  }
};

//-------------------------------------------------------------------------
//<script language=JavaScript for=ds_paymentInvoiceList event=OnRowPosChanged(row)> 대체 함수임.
//-------------------------------------------------------------------------
scwin.f_OnRowPosChanged = function (row) {
  //var vRowPosition = row;                                             //ds_paymentInvoiceList.RowPosition;
  var vCountRow = ds_paymentInvoiceList.getTotalRow(); //txt_countRow.value;
  var vRowStatus = ds_paymentInvoiceList.getRowStatusValue(row); //ds_paymentInvoiceList.RowStatus(ds_paymentInvoiceList.RowPosition);

  if (row > -1) {
    if (!scwin.rowStatusChk()) return;

    // var vCountRow = ds_paymentInvoiceList.getTotalRow();            //ds_paymentInvoiceList.CountRow;
    // var vChgCount = 0;
    // var vChgRow = 0;

    // for(var i = 0; i < vCountRow; i++) {
    //     var vCurRowStatus = ds_paymentInvoiceList.getRowStatusValue(i);

    //     if (vCurRowStatus == 1 || vCurRowStatus == 3) {
    //         vChgCount++;
    // 		vChgRow = i;
    //     }
    // }

    // if(vChgCount > 0 && row != vChgRow){
    // 	alert("프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
    //     ds_paymentInvoiceList.setRowPosition(vChgRow);      //ds_paymentInvoiceList.RowPosition = vChgRow;
    // 	return false;
    // }

    // dma_searchFreight.set("kcomcd",     ds_paymentInvoiceList.getCellData(row, "kcomcd"));          // 대표 거래처 코드
    // dma_searchFreight.set("seaair",     ds_paymentInvoiceList.getCellData(row, "seaair"));          // 해운 항공 Trans 구분
    // dma_searchFreight.set("iogb",       ds_paymentInvoiceList.getCellData(row, "iogb"));            // Import/Export 구분
    // dma_searchFreight.set("mblno",      ds_paymentInvoiceList.getCellData(row, "mblno"));           // MASTER B/L NO
    // dma_searchFreight.set("blno",       ds_paymentInvoiceList.getCellData(row, "blno"));            // HOUSE B/L NO
    // dma_searchFreight.set("mhno",       ds_paymentInvoiceList.getCellData(row, "mhno"));            // Console

    // dma_searchFreight.set("certiNo",    ds_paymentInvoiceList.getCellData(row, "certiNo"));         // 거래명세서번호
    // dma_searchFreight.set("prtnGrpNo",  ds_paymentInvoiceList.getCellData(row, "prtnGrpNo"));       // 거래명세서Group번호
    // dma_searchFreight.set("bilgClntNo", ds_paymentInvoiceList.getCellData(row, "bilgClntNo"));      // 청구처 코드
    // dma_searchFreight.set("bilgClntNm", ds_paymentInvoiceList.getCellData(row, "bilgClntNm"));      // 청구처명
    // dma_searchFreight.set("dvgb",       ds_paymentInvoiceList.getCellData(row, "dvgb"));            // 전도금 구분

    // dma_searchFreight.set("odrNo",      ds_paymentInvoiceList.getCellData(row, "odrNo"));           // Order No
    // dma_searchFreight.set("slipNo",     ds_paymentInvoiceList.getCellData(row, "slipNo"));          // 전표 번호

    // scwin.hid_intendDt  = ds_paymentInvoiceList.getCellData(row,"pchsIntendDt");	    // billing date //intendDt
    // scwin.hid_pchsPicNo = ds_paymentInvoiceList.getCellData(row,"pchsPicNo");           //pchsPicNo;
    // scwin.hid_pchsPicNm = ds_paymentInvoiceList.getCellData(row,"pchsPicNm");           //pchsPicNm;

    if (vRowStatus == 0) {
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete, rd_billgb]);
      //if(dma_searchFreight.get("prtnGrpNo").trim() == "" ) {        //2026.03.13 기준맵 변경....
      if (dma_paymentInvoice.get("prtnGrpNo").trim() == "") {
        $c.gus.cfEnableBtnOnly($p, [btn_Create, rd_billgb]);
        scwin.processFlag = "INIT";
      } else {
        $c.gus.cfDisableObjects($p, [rd_billgb]);
        //if(dma_searchFreight.get("slipNo") == "") {       //2026.03.13 기준맵 변경....
        if (dma_paymentInvoice.get("slipNo") == "") {
          $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete]);
          scwin.processFlag = "RETRIEVE";
        } else {
          scwin.processFlag = "INIT";
        }
      }
    } else if (vRowStatus == 1) {
      //Create
      scwin.f_Set("CREATE");
    } else if (vRowStatus == 3) {
      //Update
      scwin.f_Set("UPDATE");
    }
  } else {
    scwin.f_Set("INIT");
    scwin.processFlag = "INIT";
  }
  return true;
};
scwin.paymentInvoiceList_onColumnChanged = function (pRowIdx, pColId) {
  //<script language=JavaScript for=ds_paymentInvoiceList event=onColumnChanged(row,colid)>
  if (ds_paymentInvoiceList.getRowCount() > 0) {
    switch (pColId) {
      case "confirmDt":
        //Billing Date
        var confirmDt = ds_paymentInvoiceList.getCellData(pRowIdx, "confirmDt");
        for (var i = 0; i < ds_purchaseCerti.getRowCount(); i++) {
          //	       			ds_purchaseCerti.NameValue(i,"confirmDt") = confirmDt;
          ds_purchaseCerti.setCellData(i, "pchsIntendDt", confirmDt);
        }
        break;
      case "pchsPicNo":
        //거래처 담당자 팝업(PIC)
        var pchsPicNo = ed_pchsPicNo.getValue();
        var pchsPicNm = txt_pchsPicNm.getValue();
        for (var i = 0; i < ds_purchaseCerti.getRowCount(); i++) {
          ds_purchaseCerti.setCellData(i, "pchsPicNo", pchsPicNo);
          ds_purchaseCerti.setCellData(i, "pchsPicNm", pchsPicNm);
        }
        break;
      case "clntBilgDocNo":
        //Customer INV
        var clntBilgDocNo = ds_paymentInvoiceList.getCellData(pRowIdx, "clntBilgDocNo");
        for (var i = 0; i < ds_purchaseCerti.getRowCount(); i++) {
          ds_purchaseCerti.setCellData(i, "clntBilgDocNo", clntBilgDocNo);
        }
        break;
      default:
        break;
    }
  }
};
scwin.excelDw = async function () {
  let options = {
    fileName: "Payment Invoice List.xlsx",
    sheetName: "Payment Invoice List"
  };
  let grdObj = gr_paymentInvoiceList;
  let infoArr = {};
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// ds_paymentInvoiceList rowStatus Check; ( 그리드 이동 못하게 막는 기능 추가)
//-------------------------------------------------------------------------
scwin.rowStatusChk = function () {
  var curRow = ds_paymentInvoiceList.getRowPosition();
  if (scwin.oldRow_1 == curRow) return true;
  var oldRowStatus = "";
  if (scwin.oldRow_1 != -1) {
    //oldRowStatus = ds_paymentInvoiceList.getRowStatus(scwin.oldRow_1);
    oldRowStatus = ds_paymentInvoiceList.getRowStatusValue(scwin.oldRow_1);
  }
  if (oldRowStatus != 0) {
    alert("프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
    ds_paymentInvoiceList.setRowPosition(scwin.oldRow_1); //ds_paymentInvoiceList.RowPosition = vChgRow;
    gr_paymentInvoiceList.setFocusedCell(scwin.oldRow_1, 0);
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// <script language=JavaScript for=ds_purchaseCerti event=OnLoadCompleted(rowcnt)> 로직도 옮겨옴
// 그리고 <script language=JavaScript for=ds_purchaseCertiDetail event=OnLoadCompleted(rowcnt)> 로직 옮겨옴.
//-------------------------------------------------------------------------
scwin.sbm_retrieveCommon_submitdone = async function (e) {
  //<script language=JavaScript for=ds_purchaseCerti event=OnLoadCompleted(rowcnt)> 로직은 여기 있는게 맞음.
  let rowcnt = 0;
  //ds_purchaseCerti start --------------------------------------------------------------------------------------------------------------------
  rowcnt = ds_purchaseCerti.getRowCount();
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    scwin.processFlag = "INIT";
    scwin.f_Set("INIT");
  } else {
    //default 모두 check
    for (var i = 0; i < rowcnt; i++) {
      if (ds_purchaseCerti.getCellData(i, "chk") == "F") {
        ds_purchaseCerti.setCellData(i, "chk", "T");
        ds_purchaseCerti.setCellData(i, "pchsAmt", 0);
        ds_purchaseCerti.setCellData(i, "pchsAmtFcrc", 0);
        ds_purchaseCerti.setCellData(i, "vat", 0);
      }
    }

    //ed_pchsIntendDt.setValue(scwin.hid_intendDt);
    //ed_pchsPicNo.setValue(scwin.hid_pchsPicNo);
    //txt_pchsPicNm.setValue(scwin.hid_pchsPicNm);
  }
  //<script language=JavaScript for=ds_purchaseCerti event=OnLoadCompleted(rowcnt)> 로직

  //ds_purchaseCerti end --------------------------------------------------------------------------------------------------------------------

  //ds_purchaseCertiDetail start --------------------------------------------------------------------------------------------------------------------
  //<script language=JavaScript for=ds_purchaseCertiDetail event=OnLoadCompleted(rowcnt)>
  rowcnt = ds_purchaseCertiDetail.getRowCount();
  if (rowcnt == 0) {

    //위에 동일한 로직 있어서 주석처리함. by STY
    //await $c.gus.cfAlertMsg(E_MSG_CM_WRN_002);
    //scwin.processFlag = "INIT";
    //scwin.f_Set("INIT");
  } else {
    var curRow = ds_paymentInvoiceList.getRowPosition() == "" ? 0 : ds_paymentInvoiceList.getRowPosition();
    var vInvoiceNo = ds_paymentInvoiceList.getCellData(curRow, "certiNo"); //InvoiceNo

    scwin.hid_commNm = ds_purchaseCertiDetail.getCellData(i, "commNm");
    for (var i = 0; i < rowcnt; i++) {
      if (ds_purchaseCertiDetail.getCellData(i, "chk") == "F") {
        ds_purchaseCertiDetail.setCellData(i, "chk", "T");
        // 추가 금액들 계산이 되어야함
        scwin.gr_paymentInvoiceFreightList_oncellclick(i, 0, "chk");
      }

      //03.17 추가
      if (ds_purchaseCertiDetail.getCellData(i, "fareUnit") == "P") {
        ds_purchaseCertiDetail.setCellData(i, "fareUnit", "CASE");
      } else if (ds_purchaseCertiDetail.getCellData(i, "fareUnit") == "C") {
        ds_purchaseCertiDetail.setCellData(i, "fareUnit", "C/WT");
      } else if (ds_purchaseCertiDetail.getCellData(i, "fareUnit") == "G") {
        ds_purchaseCertiDetail.setCellData(i, "fareUnit", "G/WT");
      } else {
        ds_purchaseCertiDetail.setCellData(i, "fareUnit", "");
      }
      if (vInvoiceNo != "") {
        //InvoiceNo가 생성됬으면 개별선택 불가
        gr_paymentInvoiceFreightList.setRowReadOnly(i, true);
      }
    }

    //ds_purchaseCertiDetail.modifyAllStatus("R");     // 데이터셋 상태값 초기화        //2026.03.30 수정[상태값 초기화를 하면 안됬음.]

    totalFreightRows.setValue(rowcnt);

    //Remark값 셋팅
    let tmpVal = $c.gus.cfIsNull($p, ds_purchaseCerti.getOriginalCellData(0, "rmk")) ? '' : ds_purchaseCerti.getOriginalCellData(0, "rmk");
    dma_purchaseCerti.set("rmk", tmpVal);

    // 경충호씨 요청 default 설정 2월 6일 변경   (남연희씨 요청 default 설정 6월 15일 변경)
    let mblno = cnd_ed_mblno.getValue().trim(); // MASTER B/L NO
    if (scwin.rd_billgb_flag == "retrieve") {
      if (cnd_lc_seaair.getValue() == "S" && cnd_lc_iogb.getValue() == "I" || cnd_lc_seaair.getValue() == "S" && cnd_lc_iogb.getValue() == "O" && mblno.substring(1, 2) == "B") {
        if (ds_purchaseCertiDetail.getCellData(0, "certiNo") == "") {
          //if(ds_purchaseCertiDetail.NameValue(ds_purchaseCertiDetail.RowPosition,"certiNo") == ""){
          var cr = rowcnt; //ds_purchaseCertiDetail.CountRow;
          if (cr > 0) {
            for (var i = 0; i < cr; i++) {
              if (ds_purchaseCertiDetail.getCellData(i, "crcCd") != "KRW") {
                ds_purchaseCertiDetail.setCellData(i, "crcCd", "KRW"); //ds_purchaseCertiDetail.NameValue(i,"crcCd") = "KRW";
                ds_purchaseCertiDetail.setCellData(i, "exRate", 0); //ds_purchaseCertiDetail.NameValue(i,"exRate") = 0;
                ds_purchaseCertiDetail.setCellData(i, "pchsAmtFcrc", 0); //ds_purchaseCertiDetail.NameValue(i,"pchsAmtFcrc") = 0;

                ds_purchaseCertiDetail.setCellData(i, "spplyAmtFcrc", 0); //ds_purchaseCertiDetail.NameValue(i,"spplyAmtFcrc") = 0;
                ds_purchaseCertiDetail.setCellData(i, "pchsInscrpAmtFcrc", 0); //ds_purchaseCertiDetail.NameValue(i,"pchsInscrpAmtFcrc") = 0;

                //scwin.refkey = ds_purchaseCertiDetail.setCellData(i, "refkey");   //ds_purchaseCertiDetail.NameValue(i,"refkey");
                scwin.refkey = ds_purchaseCertiDetail.getCellData(i, "refkey"); //ds_purchaseCertiDetail.NameValue(i,"refkey");
              }
            }
          }
          rd_billgb.setValue("2"); //1:Default, 2:KRW 
        }
      }
    }
  }
  //ds_purchaseCertiDetail end --------------------------------------------------------------------------------------------------------------------

  // 추가
  if (scwin.rd_billgb_flag == "OnSelChange") {
    scwin.rd_billgb_flag = "retrieve";
  }
};

//-------------------------------------------------------------------------
// AS-IS : <script language=JavaScript for=ds_purchaseCertiDetail event=onColumnChanged(row,colid)>
// gr_paymentInvoiceFreightList_oncellclick Event
//-------------------------------------------------------------------------
scwin.gr_paymentInvoiceFreightList_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 운임 check에 따라서  영세 과세(refkey) 구분
  let vatCnt = 0;
  let pchsAmt = 0;
  let pchsAmtFcrc = 0;
  let vat = 0;
  if (ds_purchaseCertiDetail.getTotalRow() > 0) {
    if (columnId == "chk") {
      scwin.refkey = ds_purchaseCertiDetail.getCellData(rowIndex, "refkey");
      pchsAmt = parseFloat(ds_purchaseCertiDetail.getCellData(rowIndex, "pchsAmt")); // 매입금액
      pchsAmtFcrc = parseFloat(ds_purchaseCertiDetail.getCellData(rowIndex, "pchsAmtFcrc")); // 매입금액외화
      vat = parseFloat(ds_purchaseCertiDetail.getCellData(rowIndex, "vat")); // 부가세금액

      pchsAmt = pchsAmt * Math.pow(10, 0) / Math.pow(10, 0);
      pchsAmtFcrc = pchsAmtFcrc * Math.pow(10, 2) / Math.pow(10, 2);
      vat = vat * Math.pow(10, 0) / Math.pow(10, 0);
      if (ds_purchaseCertiDetail.getCellData(rowIndex, "chk") == "T") {
        //선택 //if(ds_purchaseCertiDetail.NameValue(row,"chk")=="T"){	//선택
        for (var i = 0; i < ds_purchaseCerti.getTotalRow(); i++) {
          if (scwin.refkey == ds_purchaseCerti.getCellData(i, "refkey")) {
            let tmp_pchsAmt = (parseFloat(ds_purchaseCerti.getCellData(i, "pchsAmt")) + parseFloat(pchsAmt)) * Math.pow(10, 0) / Math.pow(10, 0); // 매입금액
            let tmp_pchsAmtFcrc = (parseFloat(ds_purchaseCerti.getCellData(i, "pchsAmtFcrc")) + parseFloat(pchsAmtFcrc)) * Math.pow(10, 2) / Math.pow(10, 2); // 매입금액_외화
            let tmp_vat = (parseFloat(ds_purchaseCerti.getCellData(i, "vat")) + parseFloat(vat)) * Math.pow(10, 0) / Math.pow(10, 0); // 부가세

            ds_purchaseCerti.setCellData(i, "pchsAmt", tmp_pchsAmt);
            ds_purchaseCerti.setCellData(i, "pchsAmtFcrc", tmp_pchsAmtFcrc);
            ds_purchaseCerti.setCellData(i, "vat", tmp_vat);
          }
        }
      } else {
        // 선택 취소

        for (var i = 0; i < ds_purchaseCerti.getTotalRow(); i++) {
          if (scwin.refkey == ds_purchaseCerti.getCellData(i, "refkey")) {
            let tmp_pchsAmt = (parseFloat(ds_purchaseCerti.getCellData(i, "pchsAmt")) - parseFloat(pchsAmt)) * Math.pow(10, 0) / Math.pow(10, 0); // 매입금액
            let tmp_pchsAmtFcrc = (parseFloat(ds_purchaseCerti.getCellData(i, "pchsAmtFcrc")) - parseFloat(pchsAmtFcrc)) * Math.pow(10, 3) / Math.pow(10, 3); // 매입금액_외화
            let tmp_vat = (parseFloat(ds_purchaseCerti.getCellData(i, "vat")) - parseFloat(vat)) * Math.pow(10, 0) / Math.pow(10, 0); // 부가세

            ds_purchaseCerti.setCellData(i, "pchsAmt", tmp_pchsAmt);
            ds_purchaseCerti.setCellData(i, "pchsAmtFcrc", tmp_pchsAmtFcrc);
            ds_purchaseCerti.setCellData(i, "vat", tmp_vat);
          }
        }
      }
      //합계 금액 다시 계산
      for (var i = 0; i < ds_purchaseCertiDetail.getTotalRow(); i++) {
        if (ds_purchaseCertiDetail.getCellData(i, "chk") == "T" && scwin.refkey == ds_purchaseCertiDetail.getCellData(i, "refkey")) {
          vatCnt = vatCnt + 1;
        }
      }
      if (vatCnt < 1) {
        for (var i = 0; i < ds_purchaseCerti.getTotalRow(); i++) {
          if (ds_purchaseCerti.getCellData(i, "chk") == "T" && scwin.refkey == ds_purchaseCerti.getCellData(i, "refkey")) {
            ds_purchaseCerti.setCellData(i, "chk", "F");
          }
        }
      } else {
        for (var i = 0; i < ds_purchaseCerti.getTotalRow(); i++) {
          if (ds_purchaseCerti.getCellData(i, "chk") == "F" && scwin.refkey == ds_purchaseCerti.getCellData(i, "refkey")) {
            ds_purchaseCerti.setCellData(i, "chk", "T");
          }
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// Freigth Info Tab Grid Event
// AS-IS  <script language="javascript"  for=gr_paymentInvoiceFreightList event=OnHeadCheckClick(Col,Colid,bCheck)>
//-------------------------------------------------------------------------
scwin.gr_paymentInvoiceFreightList_onheaderclick = function (headerId) {
  // var chk = bCheck == 1 ? "T":"F";
  // var cr = ds_purchaseCertiDetail.CountRow;
  var curRow = ds_paymentInvoiceList.getRowPosition() == "" ? 0 : ds_paymentInvoiceList.getRowPosition();
  var vInvoiceNo = ds_paymentInvoiceList.getCellData(curRow, "certiNo"); //InvoiceNo

  if (vInvoiceNo != "") {
    if (headerId == "header_chk") {
      for (let idx = 0; idx < gr_paymentInvoiceFreightList.getTotalRow(); idx++) {
        if (ds_purchaseCertiDetail.getCellData(idx, "chk") == "T") {
          ds_purchaseCertiDetail.setCellData(idx, "chk", "F");
        } else {
          ds_purchaseCertiDetail.setCellData(idx, "chk", "T");
        }
      }
    }
  }
};
scwin.cnd_ed_prtnGrpNo_onblur = function (e) {
  //<script language=JavaScript for=cnd_ed_prtnGrpNo event=onKillFocus()>
  dma_search.set("prtnGrpNo", cnd_ed_prtnGrpNo.getValue().trim());
};

//-------------------------------------------------------------------------
// radio : Default, KRW
//-------------------------------------------------------------------------
scwin.rd_billgb_onviewchange = async function (info) {
  //<script language=JavaScript for=rd_billgb event=OnSelChange()>

  var cr = ds_purchaseCertiDetail.getTotalRow();
  if (rd_billgb.getValue() == "1") {
    //Default
    if (cr > 0) {
      scwin.rd_billgb_flag = "OnSelChange";
      var curRow = gr_paymentInvoiceList.getFocusedRowIndex(); //2026.03.23 추가
      //await scwin.f_RetrieveCommon(curRow);

      await scwin.f_RetrieveCommon(ds_paymentInvoiceList.getRowPosition());
      scwin.rd_billgb_flag = "retrieve";
    }
  } else {
    if (cr > 0) {
      for (var i = 0; i < cr; i++) {
        if (ds_purchaseCertiDetail.getCellData(i, "crcCd").trim() != "KRW") {
          ds_purchaseCertiDetail.setCellData(i, "crcCd", "KRW");
          ds_purchaseCertiDetail.setCellData(i, "exRate", 0);
          ds_purchaseCertiDetail.setCellData(i, "pchsAmtFcrc", 0);
          ds_purchaseCertiDetail.setCellData(i, "spplyAmtFcrc", 0);
          ds_purchaseCertiDetail.setCellData(i, "pchsInscrpAmtFcrc", 0);
          scwin.refkey = ds_purchaseCertiDetail.setCellData(i, "refkey");
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
//<script language=JavaScript for=ds_paymentInvoiceList event=OnRowPosChanged(row)>
//-------------------------------------------------------------------------
scwin.ds_paymentInvoiceList_onrowpositionchange = function (info) {
  //Mouse 케럿만 바뀌어도 이벤트 발생되어 다른곳에 구현....
  return;
  var vCountRow = ds_paymentInvoiceList.getTotalRow(); //txt_countRow.value;
  var vRowStatus = ds_paymentInvoiceList.getRowStatusValue(info.newRowIndex); //ds_paymentInvoiceList.RowStatus(ds_paymentInvoiceList.RowPosition);

  if (info.newRowIndex >= 0) {
    var vCountRow = ds_paymentInvoiceList.getTotalRow(); //ds_paymentInvoiceList.CountRow;
    var vChgCount = 0;
    var vChgRow = 0;
    for (var i = 0; i < vCountRow; i++) {
      var vCurRowStatus = ds_paymentInvoiceList.getRowStatusValue(i);
      if (vCurRowStatus == 1 || vCurRowStatus == 3) {
        vChgCount++;
        vChgRow = i;
      }
    }
    if (vChgCount > 0 && info.newRowIndex != vChgRow) {
      alert("프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
      ds_paymentInvoiceList.setRowPosition(vChgRow); //ds_paymentInvoiceList.RowPosition = vChgRow;
      return;
    }
    dma_searchFreight.set("kcomcd", ds_paymentInvoiceList.getCellData(info.newRowIndex, "kcomcd")); // 대표 거래처 코드
    dma_searchFreight.set("seaair", ds_paymentInvoiceList.getCellData(info.newRowIndex, "seaair")); // 해운 항공 Trans 구분
    dma_searchFreight.set("iogb", ds_paymentInvoiceList.getCellData(info.newRowIndex, "iogb")); // Import/Export 구분
    dma_searchFreight.set("mblno", ds_paymentInvoiceList.getCellData(info.newRowIndex, "mblno")); // MASTER B/L NO
    dma_searchFreight.set("blno", ds_paymentInvoiceList.getCellData(info.newRowIndex, "blno")); // HOUSE B/L NO
    dma_searchFreight.set("mhno", ds_paymentInvoiceList.getCellData(info.newRowIndex, "mhno")); // Console

    dma_searchFreight.set("certiNo", ds_paymentInvoiceList.getCellData(info.newRowIndex, "certiNo")); // 거래명세서번호
    dma_searchFreight.set("prtnGrpNo", ds_paymentInvoiceList.getCellData(info.newRowIndex, "prtnGrpNo")); // 거래명세서Group번호
    dma_searchFreight.set("bilgClntNo", ds_paymentInvoiceList.getCellData(info.newRowIndex, "bilgClntNo")); // 청구처 코드
    dma_searchFreight.set("bilgClntNm", ds_paymentInvoiceList.getCellData(info.newRowIndex, "bilgClntNm")); // 청구처명
    dma_searchFreight.set("dvgb", ds_paymentInvoiceList.getCellData(info.newRowIndex, "dvgb")); // 전도금 구분

    dma_searchFreight.set("odrNo", ds_paymentInvoiceList.getCellData(info.newRowIndex, "odrNo")); // Order No
    dma_searchFreight.set("slipNo", ds_paymentInvoiceList.getCellData(info.newRowIndex, "slipNo")); // 전표 번호

    scwin.hid_intendDt = ds_paymentInvoiceList.getCellData(info.newRowIndex, "pchsIntendDt"); // billing date //intendDt
    scwin.hid_pchsPicNo = ds_paymentInvoiceList.getCellData(info.newRowIndex, "pchsPicNo"); //pchsPicNo;
    scwin.hid_pchsPicNm = ds_paymentInvoiceList.getCellData(info.newRowIndex, "pchsPicNm"); //pchsPicNm;

    if (vRowStatus == 0) {
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Cancel, btn_Save, btn_Delete, rd_billgb]);
      if (dma_searchFreight.get("prtnGrpNo").trim() == "") {
        $c.gus.cfEnableBtnOnly($p, [btn_Create, rd_billgb]);
        scwin.processFlag = "INIT";
      } else {
        $c.gus.cfDisableObjects($p, [rd_billgb]);
        if (dma_searchFreight.get("slipNo") == "") {
          $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Delete]);
          scwin.processFlag = "RETRIEVE";
        } else {
          scwin.processFlag = "INIT";
        }
      }
    } else if (vRowStatus == 1) {
      //Create
      scwin.f_Set("CREATE");
    } else if (vRowStatus == 3) {
      //Update
      scwin.f_Set("UPDATE");
    }
  } else {
    scwin.f_Set("INIT");
    scwin.processFlag = "INIT";
  }
};

//-------------------------------------------------------------------------
//PIC 돋보기 onclick Event
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_ed_pchsPicNo_onclickEvent = function (e) {
  scwin.f_PopUp(2, 'F');
};

//-------------------------------------------------------------------------
//PIC Code onblur Event
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_ed_pchsPicNo_onblurCodeEvent = async function (e) {
  await scwin.f_PopUp(2, 'F');
};

//-------------------------------------------------------------------------
//PIC Code onviewchangeCode Event
//-------------------------------------------------------------------------
scwin.udc_ilcomCode_ed_pchsPicNo_onviewchangeCodeEvent = function (info) {
  var curRow = ds_paymentInvoiceList.getRowPosition();
  ds_paymentInvoiceList.setCellData(curRow, "pchsPicNo", ed_pchsPicNo.getValue());
  if (ed_pchsPicNo.getValue() == "") {
    txt_pchsPicNm.setValue("");
  }
  ds_paymentInvoiceList.setCellData(curRow, "pchsPicNm", txt_pchsPicNm.getValue());
  for (var idx = 0; idx < ds_purchaseCertiDetail.getTotalRow(); idx++) {
    ds_purchaseCertiDetail.setCellData(idx, "pchsPicNo", ed_pchsPicNo.getValue());
    ds_purchaseCertiDetail.setCellData(idx, "pchsPicNm", txt_pchsPicNm.getValue());
  }
  ds_purchaseCerti.setCellData(0, "pchsPicNo", ed_pchsPicNo.getValue());
  ds_purchaseCerti.setCellData(0, "pchsPicNm", txt_pchsPicNm.getValue());
};

//-------------------------------------------------------------------------
//<script language=JavaScript for=ds_purchaseCertiDetail event=OnRowPosChanged(row)>
//-------------------------------------------------------------------------
scwin.ds_purchaseCertiDetail_onrowpositionchange = function (info) {
  //여기는 Freight Info Grid Bind된 DataList RowChang Event
  if (ds_purchaseCertiDetail.getCellData(info.newRowIndex, "certiNo") == "") {
    gr_paymentInvoiceFreightList.setCellDisableEdit(info.newRowIndex, "chk", true);
  } else {
    gr_paymentInvoiceFreightList.setCellDisableEdit(info.newRowIndex, "chk", false);
  }
};

//-------------------------------------------------------------------------
//Billing Date 값 수정시...ds_paymentInvoiceList에 반영
//-------------------------------------------------------------------------
scwin.ed_pchsIntendDt_onviewchange = function (info) {
  if (!scwin.rowStatusChk()) return;
  var curRow = ds_paymentInvoiceList.getRowPosition();
  ds_paymentInvoiceList.setCellData(curRow, "pchsIntendDt", ed_pchsIntendDt.getValue());
  ds_paymentInvoiceList.setCellData(curRow, "confirmDt", ed_pchsIntendDt.getValue());
  ds_purchaseCerti.setCellData(0, "pchsIntendDt", ed_pchsIntendDt.getValue()); //crud시 실제 사용되는 DataCollection임. ( 이놈아는 map로 만들었어도...)
  //dma_purchaseCerti
};

//-------------------------------------------------------------------------
//Billing Date 값 수정시...ds_paymentInvoiceList에 반영
//-------------------------------------------------------------------------
scwin.ed_pchsIntendDt_onblur = function (e) {
  //onviewChange 이벤트와 충돌이 나서 난리남..... 소스 전체 확인 후 이 이벤트는 삭제 하도록 하자....
  return;
  if (!scwin.rowStatusChk()) return;
  var curRow = ds_paymentInvoiceList.getRowPosition();
  ds_paymentInvoiceList.setCellData(curRow, "pchsIntendDt", ed_pchsIntendDt.getValue());
  ds_purchaseCerti.setCellData(0, "pchsIntendDt", ed_pchsIntendDt.getValue()); //crud시 실제 사용되는 DataCollection임. ( 이놈아는 map로 만들었어도...)
};

//-------------------------------------------------------------------------
//Customer INV 값 수정시...ds_paymentInvoiceList에 반영
//-------------------------------------------------------------------------
scwin.ed_clntBilgDocNo_onviewchange = function (info) {
  var curRow = ds_paymentInvoiceList.getRowPosition();
  ds_paymentInvoiceList.setCellData(curRow, "clntBilgDocNo", ed_clntBilgDocNo.getValue());
  ds_purchaseCerti.setCellData(0, "clntBilgDocNo", ed_clntBilgDocNo.getValue()); //crud시 실제 사용되는 DataCollection임. ( 이놈아는 map로 만들었어도...)
};

//<script language=JavaScript for=ds_paymentInvoiceList event=onColumnChanged(row,colid)>
scwin.ds_paymentInvoiceList_oncelldatachange = function (info) {
  if (ds_paymentInvoiceList.getRowCount() > 0) {
    switch (info.colID) {
      case "confirmDt":
        //Billing Date pchsIntendDt 
        var confirmDt = ds_paymentInvoiceList.getCellData(info.rowIndex, "confirmDt");
        for (var i = 0; i < ds_purchaseCerti.getRowCount(); i++) {
          //	       			ds_purchaseCerti.NameValue(i,"confirmDt") = confirmDt;
          ds_purchaseCerti.setCellData(i, "pchsIntendDt", confirmDt);
        }
        break;
      case "pchsPicNo":
        //거래처 담당자 팝업(PIC)
        var pchsPicNo = ed_pchsPicNo.getValue();
        var pchsPicNm = txt_pchsPicNm.getValue();
        for (var i = 0; i < ds_purchaseCerti.getRowCount(); i++) {
          ds_purchaseCerti.setCellData(i, "pchsPicNo", pchsPicNo);
          ds_purchaseCerti.setCellData(i, "pchsPicNm", pchsPicNm);
        }
        break;
      case "clntBilgDocNo":
        //Customer INV
        var clntBilgDocNo = ds_paymentInvoiceList.getCellData(info.rowIndex, "clntBilgDocNo");
        for (var i = 0; i < ds_purchaseCerti.getRowCount(); i++) {
          ds_purchaseCerti.setCellData(i, "clntBilgDocNo", clntBilgDocNo);
        }
        break;
      default:
        break;
    }
  }
};
scwin.cnd_ed_blno_onchange = function (info) {
  //T-5829 조회조건 Master B/L No,  House B/L No 지우면 console no도 지워지게 개선요청드립니다.
  ds_mhno.removeAll();
};
scwin.cnd_ed_mblno_onchange = function (info) {
  //T-5829 조회조건 Master B/L No,  House B/L No 지우면 console no도 지워지게 개선요청드립니다.
  ds_mhno.removeAll();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_seaair',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',validExp:'Job Type:no'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Trans'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',validExp:'Export/Import:no'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mblno',placeholder:'',style:'width:150px;text-transform:uppercase','ev:onblur':'scwin.cnd_ed_mblno_onblur',validExp:'Master B/L No:no',maxlength:'20',mandatory:'true',allowChar:'0-9a-zA-Z','ev:onchange':'scwin.cnd_ed_mblno_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:150px;text-transform:uppercase',validExp:'House B/L No:no',maxlength:'20',allowChar:'0-9a-zA-Z','ev:onblur':'scwin.cnd_ed_blno_onblur','ev:onchange':'scwin.cnd_ed_blno_onchange'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Console No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_mhno',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Invoice Group No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_prtnGrpNo',placeholder:'',style:'width:150px;text-transform:uppercase','ev:onblur':'scwin.cnd_ed_prtnGrpNo_onblur',validExp:'Invoice Group No:no',allowChar:'a-zA-Z0-9',minlength:'16'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'cnd_txt_pchsClntNm',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_pchsClntNo',nameId:'cnd_txt_pchsClntNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',id:'udc_ilcomCode_pchsClnt',btnId:'img_pchsClntNo','ev:onblurCodeEvent':'scwin.udc_ilcomCode_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_pchsClnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_ilcomCode_pchsClnt_onclickEvent',validExp:'Customer:no',refDataCollection:'dma_searchFreight',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'cnd_txt_deptnm',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_dept',nameId:'cnd_txt_deptnm',popupID:'',selectID:'retrieveOpDeptCdInfo',style:'',validTitle:'',id:'udc_ilcomCode_dept',btnId:'img_cncd','ev:onblurCodeEvent':'scwin.udc_ilcomCode_dept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_dept_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_ilcomCode_dept_onclickEvent',validExp:'Department Name:no',code:'dept',name:'deptnm',refDataCollection:'dma_searchFreight',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',UpperFlagCode:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridDownUserAuth:'X',btnPlusYn:'Y',gridID:'gr_paymentInvoiceList',gridDownFn:'scwin.excelDw',grdDownOpts:'{"fileName":"Payment Invoice List.xlsx", "sheetName": "Payment Invoice List"}',gridUpYn:'N',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_paymentInvoiceList',style:'',id:'gr_paymentInvoiceList',visibleRowNum:'5',class:'wq_gvw',autoFit:'allColumn','ev:oncellclick':'scwin.gr_paymentInvoiceList_oncellclick',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'법인코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'Invoice No',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'Invoice No(G)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'Order No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'Master B/L No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'House B/L No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'CONSOL NO',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'해운 항공 Trans 구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'Import/Export 구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'Customer',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'Customer Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column73',value:'청구처 담당자 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column70',value:'청구처 담당자 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',value:'부서코드 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',value:'환율일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',value:'Currency',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'적용환율 TYPE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'환율',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column49',value:'etd/eta',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column46',value:'출발지(DEPARTURE) 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',value:'출발지(DEPARTURE) 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'도착지 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'도착지 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column100',value:'편명 / vessel',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'MASTER/HOUSE구분 (M/H)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',value:'Billing Type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',value:'Billing Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',value:'Customer INV No.',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column76',value:'Print No.',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column79',value:'확인일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column82',value:'운송 FROM 지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column85',value:'운송 FROM 지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column136',value:'운송 FROM 일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column133',value:'운송 FROM 시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column130',value:'운송 TO 지역코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column127',value:'운송 TO 지역명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column124',value:'운송 TO 일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column121',value:'운송 TO 시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column118',value:'운송 Type',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column115',value:'Amount',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column112',value:'Amount(W)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column103',value:'VAT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column106',value:'Total',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'kcomcd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'slipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'prtnGrpNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'odrNo',displayMode:'label',hidden:'true',hiddenClass:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mblno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mhno',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'seaair',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'iogb',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsClntNm',displayMode:'label',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsPicNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsPicNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dept',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'deptnm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'exdt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cucd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'exgb',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rate',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stdt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dpcd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dpnm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dstn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dsnm1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fltno',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mblHblCls',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'EXP',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsIntendDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntBilgDocNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'col31',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'confirmDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fromTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toArea',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toAreaNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'toTm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sumPchsAmtFcrc',displayMode:'label',displayFormat:'#,##0',dataType:'number',style:';text-align:right;'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sumPchsAmt',displayMode:'label',style:';text-align:right;',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sumVat',displayMode:'label',style:';text-align:right;',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'Expr',displayMode:'label',style:';text-align:right;',expression:'sum("sumPchsAmt", "sumVat")',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column138',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column135',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column132',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column129',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column117',displayMode:'label',value:'0',displayFormat:'#,##0',expression:'!sum("sumPchsAmtFcrc") ? 0 : sum("sumPchsAmtFcrc")',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column114',displayMode:'label',value:'0',expression:'!sum("sumPchsAmt") ? 0 : sum("sumPchsAmt")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column105',displayMode:'label',value:'0',textAlign:'right',displayFormat:'#,##0',expression:'!sum("sumVat") ? 0 : sum("sumVat")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column108',displayMode:'label',value:'0',textAlign:'right',displayFormat:'#,##0',expression:'!sum("Expr") ? 0 : sum("Expr")',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'txt_paymentInvoiceCnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_PaymentInfo',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'INV Group No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_prtnGrpNo',placeholder:'',style:'width:150px;',editFormat:'################',ref:'data:dma_paymentInvoice.prtnGrpNo',readOnly:'true',validExp:'Invoice Group No:no'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Master B/L No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',placeholder:'',style:'width:150px;',ref:'data:dma_paymentInvoice.mblno',readOnly:'true',validExp:'Master B/L No:no'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'House B/L No',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blno',placeholder:'',style:'width:150px;',ref:'data:dma_paymentInvoice.blno',readOnly:'true',validExp:'House B/L No:no'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'Customer INV',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntBilgDocNo',placeholder:'',style:'width:150px;text-transform:uppercase;',ref:'data:dma_paymentInvoice.clntBilgDocNo',objType:'data','ev:onviewchange':'scwin.ed_clntBilgDocNo_onviewchange',allowChar:'0-9a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue req',id:'',label:'Billing Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_pchsIntendDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:';display:;',ref:'data:dma_paymentInvoice.pchsIntendDt',mandatory:'true',objType:'data','ev:onviewchange':'scwin.ed_pchsIntendDt_onviewchange','ev:onblur':'scwin.ed_pchsIntendDt_onblur',title:'Billing Date'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_pchsClntNo',placeholder:'',style:';max-width:60px;min-width:60px;width:60px;',editFormat:'######',ref:'data:dma_paymentInvoice.pchsClntNo',readOnly:'true',validExp:'Customer Code:yes'}},{T:1,N:'xf:input',A:{class:'',id:'txt_pchsClntNm',placeholder:'',style:';width:537px;',maxlength:'50',readOnly:'true',ref:'data:dma_paymentInvoice.pchsClntNm',validExp:'Customer Nmae:yes',objType:'data',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'PIC',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:'img_pchsPicNo'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_pchsPicNo',nameId:'txt_pchsPicNm',popupID:'',selectID:'retrieveClntPicInfo',style:'',validTitle:'',id:'udc_ilcomCode_ed_pchsPicNo',btnId:'img_pchsPicNo',code:'pchsPicNo',name:'pchsPicNm',refDataCollection:'dma_paymentInvoice','ev:onclickEvent':'scwin.udc_ilcomCode_ed_pchsPicNo_onclickEvent',objTypeCode:'data',maxlengthCode:'2',allowCharCode:'0-9',allowCharCodeLength:'2',maxlengthName:'13','ev:onblurCodeEvent':'scwin.udc_ilcomCode_ed_pchsPicNo_onblurCodeEvent',readOnlyName:'true','ev:onviewchangeCodeEvent':'scwin.udc_ilcomCode_ed_pchsPicNo_onviewchangeCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Department',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_dept',placeholder:'',style:'',ref:'data:dma_paymentInvoice.dept',readOnly:'true',validExp:'Department:no'}},{T:1,N:'xf:input',A:{class:'',id:'txt_deptnm',placeholder:'',style:'',maxlength:'50',ref:'data:dma_paymentInvoice.deptnm',readOnly:'true',mandatory:'false',validExp:'Department Name:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EX Date/CUR',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group3',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_exdt',style:'',ref:'data:dma_paymentInvoice.exdt',readOnly:'true',validExp:'EX Date:no'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'text',id:'ed_cucd',style:'',ref:'data:dma_paymentInvoice.cucd',readOnly:'true',validExp:'CUR:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate Type',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_exgb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_paymentInvoice.exgb',chooseOptionLabel:' ',readOnly:'true',validExp:'Ex-Rate Type:no'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T SELLING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rate',placeholder:'',style:'width:150px;text-align:right;',maxlength:'10',ref:'data:dma_paymentInvoice.rate',readOnly:'true',validExp:'Ex-Rate:no',mandatory:'false',dataType:'float',displayFormat:'#,###'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tr_tab_center',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'true',id:'tr_tab_center0',label:'Freight Info',style:''}},{T:1,N:'w2:tabs',A:{disabled:'true',id:'tr_tab_center1',label:'Remark',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:'height: auto;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group5',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:ds_purchaseCertiDetail',id:'gr_paymentInvoiceFreightList',readOnly:'false',rowNumHeaderValue:'SEQ',rowNumWidth:'50',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:onviewchange':'scwin.gr_paymentInvoiceFreightList_onviewchange','ev:oncellclick':'scwin.gr_paymentInvoiceFreightList_oncellclick','ev:onheaderclick':'scwin.gr_paymentInvoiceFreightList_onheaderclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',width:'80',value:'참고번호',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'header_chk',inputType:'checkbox',width:'40',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'80',value:'SEQ',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'80',value:'Type',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',width:'80',value:'Invoice No',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'80',value:'Customer',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'80',value:'Name',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'80',value:'F/Code',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'80',value:'Name',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'80',value:'CUR',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label',value:'Unit',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label',value:'QTY',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label',value:'Rate',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'Amount',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column71',value:'Ex-Rate',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'Amount(W)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'VAT',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column65',value:'Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'Amount(US$)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',value:'법인코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'Master B/L No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'House B/L No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'CONSOL번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'Export / Import 구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'해운/항공/Trans 구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column49',value:'출발지(DEPARTURE) 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'메인 Item',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'오더번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'매입순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'매입처 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'매입처명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',value:'매출입항목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column35',value:'영문운임코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'영문 운임명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'운임그룹코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'운임UNIT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column117',value:'국내해외매출구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column115',value:'MASTER/HOUSE구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column113',value:'매출(D)/매입(C)구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column111',value:'PREPAID/COLLECT구분)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',value:'통화코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column107',value:'수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column105',value:'GROSS WEIGHT',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column103',value:'TARIFF 단가',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column101',value:'매입금액외화',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',value:'환율',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column97',value:'적용환율 TYPE',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column95',value:'RATE CLASS',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column93',value:'COMMODITY ITEM',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column91',value:'거래명세서 그룹번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'출력용 단가',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'출력용 금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'실적일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'적요',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column81',value:'매입처 담당자 코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column79',value:'매입처 담당자 명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'VAT 유무',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column75',value:'거래명세서번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column77',value:'거래명세서번호순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column147',value:'매입승인일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column145',value:'삭제여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column143',value:'할인할증코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column141',value:'물량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column139',value:'단위코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column137',value:'단위구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column135',value:'매입품목유형코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column133',value:'매입품명번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column131',value:'출발작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column129',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column127',value:'작업시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column119',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column121',value:'작업종료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column123',value:'작업종료시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column125',displayMode:'label',value:'차량번호',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column197',value:'연안선선박코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column195',value:'연안선항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column193',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column191',value:'컨테이너SIZE코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column189',value:'컨테이너TYPE코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column187',value:'FULLEMPTY구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column185',value:'장비종류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column183',value:'장비규격코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column181',value:'컨테이너순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column179',value:'컨테이너작업경로순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column177',value:'컨테이너작업단계순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column175',value:'컨테이너운송작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column173',value:'컨테이너운송실적순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column171',value:'품명순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column169',value:'벌크작업경로순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column167',value:'벌크작업단계순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column165',value:'벌크운송작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column163',value:'벌크운송실적순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column161',value:'하역작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column159',value:'수입수출구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column157',value:'하역실적순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column149',value:'화물SHIFTING실적순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column151',value:'작업도구실적순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column153',value:'거래명세서 생성 여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column155',value:'거래명세서 GROUP 번호',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'refkey',inputType:'text',width:'80',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTyp',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'80',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngCd',inputType:'text',width:'80',readOnly:'true',style:';text-align:left;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',width:'80',readOnly:'true',style:';text-align:left;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'80',readOnly:'true',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'80',inputType:'',id:'fareUnit',readOnly:'true',radioLabelPosition:'t',style:';text-align:left;'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chgWt',displayMode:'label',displayFormat:'#,###,###,###,###,###,###',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsUpr',displayMode:'label',displayFormat:'#,###,###,###,###,###,###',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmtFcrc',displayMode:'label',displayFormat:'#,##0.00',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'exRate',displayMode:'label',displayFormat:'#,##0.00',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',displayFormat:'#,###,###,###,###,###',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vat',displayMode:'label',displayFormat:'#,###,###,###,###,###,###',dataType:'number',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'Expr',displayMode:'label',displayFormat:'#,###,###,###,###,###,###',textAlign:'right',expression:'sum("pchsAmt","vat")',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'usdAmt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'kcomcd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mblno',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blno',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mhno',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'iogb',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'seaair',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dpcd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'itnm',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsSeq',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsClntNo_',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsClntNm_',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'selpchItemCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'fareEngCd_',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fareEngNm_',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fareGrpCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fareUnit_',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'locPtnCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'mblHblCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'drcrCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'ppccCls',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd_',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qty',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'grossWt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'trfUpr',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'usdAmt_',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'exRate_',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'exRateTyp',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rateCls',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commItem',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'prtnGrpNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prtnUpr',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prtnAmt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsStdDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsPicNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsPicNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'certiNo_dup',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'certiNoSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAdmitDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'delYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vol',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'unitCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'unitClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'pchsGoodsPatternCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCommNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStHh',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkEndHh',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'coshipVsslCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coshipPortcnt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrSizCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrTypCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fullEmptyClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqKndCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'eqNrmCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'cntrWrkPathSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'cntrWrkStpSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'cntrTransWrkIndictNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'cntrTransRsltsSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'bulkWrkPathSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'bulkWrkStpSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'bulkTransWrkIndictNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'bulkTransRsltsSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'impExpClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvRsltsSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'cargoShiftingRsltsSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'wrkImpleRsltsSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'chk_dup',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'refkey_dup',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column297',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column296',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column295',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column294',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column293',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column292',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column291',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column290',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column289',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column288',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column287',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column286',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column285',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column284',value:'',displayMode:'label',textAlign:'right',expression:'sum("pchsAmtFcrc")',readOnly:'true',dataType:'number',displayFormat:'#,###.00'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column283',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column282',value:'0',displayMode:'label',textAlign:'right',expression:'sum("pchsAmt")',displayFormat:'#,###,###,###,###,###,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column281',value:'',displayMode:'label',textAlign:'right',expression:'sum("vat")',displayFormat:'#,###,###,###,###,###,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column280',value:'0',displayMode:'label',textAlign:'right',expression:'sum("Expr")',displayFormat:'#,###,###,###,###,###,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column279',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column278',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column277',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column276',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column275',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column274',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column273',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column272',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column271',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column270',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column269',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column268',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column267',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column266',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column265',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column264',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column263',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column262',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column261',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column260',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column259',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column258',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column257',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column256',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column255',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column254',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column253',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column252',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column251',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column250',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column249',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column248',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column247',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column246',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column245',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column244',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column243',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column242',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column241',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column240',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column239',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column238',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column237',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column236',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column235',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column234',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column233',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column232',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column231',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column230',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column229',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column228',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column227',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column226',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column225',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column224',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column223',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column222',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column221',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column220',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column219',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column218',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column217',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column216',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column215',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column214',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column213',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column212',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column211',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column210',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column209',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column208',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column207',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column206',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column205',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column204',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column203',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column202',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column201',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column200',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column199',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalFreightRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_rmk',style:'height: 150px;',ref:'data:dma_purchaseCerti.rmk'}},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'',id:'gr_paymentInvoiceCommonList',style:'display:none',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'참고번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'chk',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래명세서번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'과세구분코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매입부서코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매입거래처번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매입예정일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매출입항목코드',width:'120'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column21',value:'매입품목유형코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'매입금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'매입금액_외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column31',value:'거래명세서상세건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'삭제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'확정구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'증빙정상구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'거래처청구서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'출력그룹번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column47',value:'거래명세서 생성 유무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column49',value:'거래명세서 GROUP번호',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매입예정일자시작',width:'150'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column69',value:'매입예정일자종료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column67',value:'매입증빙번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column65',value:'OFFSET번호1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column63',value:'OFFSET번호2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',value:'등록자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column59',value:'등록일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',value:'수정자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'수정일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column53',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column51',value:'거래처 명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'checkbox',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column28',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column50',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column54',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column52',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_billgb',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1','ev:onviewchange':'scwin.rd_billgb_onviewchange',validExp:'Delivery 구분:no'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Default'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KRW'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{btnUser:'Y',gridDownYn:'N',gridUpYn:'N',grp:'grp_group5',style:'',gridID:'gr_paymentInvoiceFreightList'}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_odrRegIfnoTax',type:'button',class:'btn link','ev:onclick':'scwin.btn_odrRegIfnoTax_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tax Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_odrRegIfnoMultTax',style:'',type:'button','ev:onclick':'scwin.btn_odrRegIfnoMultTax_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Multi Tax Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_odrRegIfnoAcc',style:'',type:'button','ev:onclick':'scwin.btn_odrRegIfnoAcc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대납금 전표 생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_profitrus',style:'',type:'button','ev:onclick':'scwin.btn_profitrus_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'retrieveOpDeptCdInfo',codeId:'hid_acctDeptCd',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'hid_acctDeptNm',style:'width:%; height:px;display:none;',id:'hid_udc_ed_dept',refDataCollection:'dma_paymentInvoice'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})