/*amd /ui/il/seaout/sobl/se_106_01_03b.xml 230122 8877669c190315d6ed0d52bb3dc43a4053b9641a6dd8c6123ef9871aaaae103b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hmhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hmhno_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hidden'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txt_mhlodnm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_mhdiscnm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_mhcnm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_mhactcustnm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_mhlinernm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hd_kcomcd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hd_mhio',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hd_mhitem',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hd_mhcrdt',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hd_mhdanggb',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hd_commcustomer',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_inpid',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_inpdt',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_updid',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_upddt',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_odrNo',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_buying',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운(S)/항공(A) 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'비엘번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문운임명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외매출구분(국내:1 해외:2)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출(D)/매입(C)구분 (DEBIT/CREDIT구분)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PREPAID/COLLECT구분 (P/C)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'CHARGEABLE WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'TARIFF 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'RATE CLASS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'COMMODITY ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'매출부서코드(내부거래시)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'매출부서명(내부거래시)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTyp',name:'운임 TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'매입거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'결과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'결과메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tabIndex',name:'tabIndex'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsCd',name:'dcsnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regName',name:'regName'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_buyingUnit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_buyingUnit_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_partner',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaAirCls',name:'해운(S)/항공(A) 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'비엘번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'영문운임코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'영문 운임명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareGrpCd',name:'운임그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'운임UNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'국내해외매출구분(국내:1 해외:2)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblHblCls',name:'MASTER/HOUSE구분 (M/H)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrCls',name:'매출(D)/매입(C)구분 (DEBIT/CREDIT구분)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ppccCls',name:'PREPAID/COLLECT구분 (P/C)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWt',name:'CHARGEABLE WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfUpr',name:'TARIFF 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exRateTyp',name:'적용환율 TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rateCls',name:'RATE CLASS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commItem',name:'COMMODITY ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'거래명세서 그룹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnUpr',name:'출력용 단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnAmt',name:'출력용 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'소급매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'Amount (W)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'Result Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'Invoice No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'inpid',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'결과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'결과메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_partnerUnit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_partnerUnit_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표 거래처 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE NO (CND)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Doc NO (16)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhmblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhio',name:'IN/OUT 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhetd',name:'출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpid',name:'입력자 ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inpdt',name:'입력일 DATE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자 ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일 DATE',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_masterblList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표 거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'DOC NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhio',name:'IN/OUT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhmblno',name:'MASTER B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcur',name:'CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mexgb',name:'환율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcurdt',name:'환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhexrate',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhusdrate',name:'US환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt1type',name:'CONTAINER TYPE1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt2type',name:'CONTAINER TYPE2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt3type',name:'CONTAINER TYPE3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt4type',name:'CONTAINER TYPE4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhwgt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt1',name:'CONTAINER 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt2',name:'CONTAINER 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt3',name:'CONTAINER 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnt4',name:'CONTAINER 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhmsr',name:'MEASURE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhlodcd',name:'LOADING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhlodnm',name:'LOADING NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhdisccd',name:'DISCHARGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhdiscnm',name:'DISCHARGE NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhccd',name:'Partner',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcnm',name:'Partner Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhlinercd',name:'LINER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhlinernm',name:'LINER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhcrdt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhactcust',name:'CUSTOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhactcustnm',name:'CUSTOMER NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'ORDER NO',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhmrnno',name:'mhmrnno'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhmsnno',name:'mhmsnno'}},{T:1,N:'w2:column',A:{dataType:'text',id:'docNo',name:'docNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhlinerattn',name:'mhlinerattn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhlinerattnnm',name:'mhlinerattnnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhbuyer',name:'mhbuyer'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhbuyernm',name:'mhbuyernm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhscd',name:'mhscd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhsnm',name:'mhsnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhncd',name:'mhncd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhnnm',name:'mhnnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhfvsl',name:'mhfvsl'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhfvyg',name:'mhfvyg'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhvsl',name:'mhvsl'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhvyg',name:'mhvyg'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhdlvcd',name:'mhdlvcd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhdlvnm',name:'mhdlvnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhdescd',name:'mhdescd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhdesnm',name:'mhdesnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mheta',name:'mheta'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhfeta',name:'mhfeta'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhpkg',name:'mhpkg'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhunit',name:'mhunit'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhandt',name:'mhandt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhattn',name:'mhattn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhcschk',name:'mhcschk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhpccd',name:'mhpccd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhediliner',name:'mhediliner'}},{T:1,N:'w2:column',A:{dataType:'text',id:'groupNo',name:'groupNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhflc',name:'mhflc'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhunitcd',name:'mhunitcd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhbltype',name:'mhbltype'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhlinecd',name:'mhlinecd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhlinenm',name:'mhlinenm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhlineattn',name:'mhlineattn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhlineattnnm',name:'mhlineattnnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mleta',name:'mleta'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdetd',name:'mdetd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mlrmk1',name:'mlrmk1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdrmk1',name:'mdrmk1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdrmk2',name:'mdrmk2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mharea',name:'mharea'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhareanm',name:'mhareanm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhdanggb',name:'mhdanggb'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhstdt',name:'mhstdt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhvslcd',name:'mhvslcd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhitem',name:'mhitem'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhitemNm',name:'mhitemNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shipMgntNo',name:'shipMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhondt',name:'mhondt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'custom',name:'custom'}},{T:1,N:'w2:column',A:{dataType:'text',id:'customnm',name:'customnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'depart',name:'depart'}},{T:1,N:'w2:column',A:{dataType:'text',id:'departnm',name:'departnm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'status',name:'status'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tdt',name:'tdt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhwarecd',name:'mhwarecd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhwarenm',name:'mhwarenm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'callsign',name:'callsign'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveTariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fgubn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'KCOMCD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apdt',name:'ETD, ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customer',name:'CUSTSOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partner',name:'PARTNER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liner',name:'LINER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loading',name:'LOADING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discharge',name:'DISCHARGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'item',name:'ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container1',name:'CONTAINER TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container2',name:'CONTAINER TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container3',name:'CONTAINER TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'container4',name:'CONTAINER TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbgubn',name:'CONTAINER OR BULK GUBN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'incoterm',name:'INCOTERM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userid',name:'USER ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerous',name:'DANGEROUS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commcustomer',name:'공통CUSTSOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcode',name:'FCODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currency',name:'CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'funit',name:'FUNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transTariffYn',name:'TRANS TARIFF YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BLNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'MHNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'결과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'결과메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultTariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'customer',name:'CUSTSOMER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareEngCd',name:'FCODE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareUnit',name:'FUNIT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blgb',name:'BLGB',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amount',name:'AMOUNT',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_postDtChk_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_postDtChk',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_containerType_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_currencyCode_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_currencyCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exMasterRate_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exMasterRate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exRateBuyingGrid_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exRateBuyingGrid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exRatePartnerGrid_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exRatePartnerGrid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_invoiceCheck_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_invoiceCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_buyingDept_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_buyingDept',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cndmhmblno_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndmhmblno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sobl.RetrieveSeaExportMasterBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_masterblList","key":"OUT_DS1"},{"id":"ds_buying","key":"OUT_DS2"},{"id":"ds_partner","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_masterblList","key":"OUT_DS1"},{"id":"ds_buying","key":"OUT_DS2"},{"id":"ds_partner","key":"OUT_DS3"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submit':'scwin.sbm_retrieve_submit','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seaout.sobl.SaveMasterBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_buying","key":"IN_DS2"},{"action":"modified","id":"ds_partner","key":"IN_DS3"},{"action":"modified","id":"ds_masterblList","key":"IN_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone','ev:submit':'scwin.sbm_save_submit','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seaout.sobl.DeleteMasterBlFreightCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_buying","key":"IN_DS1"},{"action":"modified","id":"ds_partner","key":"IN_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submit':'scwin.sbm_delete_submit','ev:submiterror':'scwin.sbm_delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveTariff',action:'/il.seaout.sobl.RetrieveSeaExportTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveTariff","key":"IN_DS1"},{"id":"ds_resultTariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_resultTariff","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'','ev:submit':'scwin.sbm_retrieveTariff_submit','ev:submiterror':'scwin.sbm_retrieveTariff_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_postDtChk',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_postDtChk_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_containerType',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_containerType_search',target:'data:json,ds_containerType',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_currencyCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_currencyCode_search',target:'data:json,ds_currencyCode',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_hmhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_hmhno_search',target:'data:json,ds_hmhno',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exMasterRate',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_exMasterRate_search',target:'data:json,ds_exMasterRate',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exRateBuyingGrid',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_exRateBuyingGrid_search',target:'data:json,ds_exRateBuyingGrid',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exRatePartnerGrid',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_exRatePartnerGrid_search',target:'data:json,ds_exRatePartnerGrid',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_buyingUnit',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_buyingUnit_search',target:'data:json,ds_buyingUnit',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_partnerUnit',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_partnerUnit_search',target:'data:json,ds_partnerUnit',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_invoiceCheck',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_invoiceCheck_search',target:'data:json,ds_invoiceCheck',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_buyingDept',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_buyingDept_search',target:'data:json,ds_buyingDept',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cndmhmblno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_cndmhmblno_search',target:'data:json,ds_cndmhmblno',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : se_106_01_03b 
// 이름     : Export Master B/L Freight
// 경로     : 국제물류/Sea/Sea Export/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-16
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.p_lobranCd;
scwin.p_lobranNm;
scwin.userId;
scwin.p_seaExgbEx;
scwin.p_clntNo;
scwin.sDate;
scwin.p_linkcheck;
scwin.p_kcomcd;
scwin.p_blno;
scwin.p_mhno;
scwin.p_bkno;
scwin.statusFlag;
scwin.processFlag;
scwin.invoiceCheck;
scwin.tabNo;
scwin.mhnoFlag;
scwin.exRateCheck;
scwin.exRate1;
scwin.exRate2;
scwin.crc;
scwin.v_linkcheck;
scwin.v_kcomcd;
scwin.v_blno;
scwin.v_mhno;
scwin.v_bkno;
scwin.ed_mhcnt1type;
scwin.ed_mhcnt2type;
scwin.ed_mhcnt3type;
scwin.ed_mhcnt4type;
scwin.ed_mhlodcd;
scwin.ed_mhdisccd;
scwin.ed_mhccd;
scwin.ed_mhactcust;
scwin.ed_mhlinercd;
scwin.onpageload = function () {
  ds_hidden.set("hd_kcomcd", "DBEX");
  ds_hidden.set("hd_mhio", "O");
  ds_hidden.set("hd_commcustomer", "999999");
  scwin.sDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.p_linkcheck = $c.data.getParameter($p, "linkcheck"); //  0:default,1:Booking Search,2:House Search,3:Master Search,4: Booking,5:House,6:master
  scwin.p_kcomcd = $c.data.getParameter($p, "kcomcd");
  scwin.p_blno = $c.data.getParameter($p, "blno");
  scwin.p_mhno = $c.data.getParameter($p, "mhno");
  scwin.p_bkno = $c.data.getParameter($p, "bkno");

  // 세션정보 가져오기
  let memJson = $c.data.getMemInfo($p);
  scwin.p_lobranCd = memJson.lobranCd; // 귀속부서코드 
  scwin.p_lobranNm = memJson.lobranNm; // 귀속부서 명	

  if (scwin.p_lobranCd == null) {
    scwin.p_lobranCd = " ";
  }
  scwin.userId = memJson.userId;
  var companyInfo = $c.gus.dsCommonUtil($p, "getCompanyInfoDTO", memJson.lobranCd);
  if (!companyInfo) {
    scwin.p_seaExgbEx = companyInfo[0].value.split("seaExgbEx = [")[1].split("]")[0];
    scwin.p_clntNo = companyInfo[0].value.split("clntNo = [")[1].split("]")[0];
  } else {
    scwin.p_seaExgbEx = "";
    scwin.p_clntNo = "";
  }
  scwin.statusFlag = ""; //수정/등록 Flag(C:Regist, U:Update,I:Init)
  scwin.processFlag = "";
  scwin.invoiceCheck = "0";
  scwin.tabNo = 0;
  scwin.mhnoFlag = "0"; // 1일때 mhno onloadComplete후 조회.
  scwin.exRateCheck = "1"; // 환율 존재 유무
  scwin.exRate1 = "0"; // 환율1  
  scwin.exRate2 = "0"; // 환율2  
  scwin.crc = ""; // 환종	 	

  scwin.v_linkcheck = scwin.p_linkcheck;
  scwin.v_kcomcd = scwin.p_kcomcd;
  scwin.v_blno = scwin.p_blno;
  scwin.v_mhno = scwin.p_mhno;
  scwin.v_bkno = scwin.p_bkno;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    // 1번째 탭으로 이동.  ed_hhblno.focus() 잡아주기 위함.
    // tac_tabControl1.setSelectedTabIndex(0);
    // tac_tabControl1.setSelectedTabIndex(1);
    // tac_tabControl1.setSelectedTabIndex(0);

    scwin.f_initSetTab(); //tab세팅	
    scwin.f_DefaultValue();
    scwin.f_Check();
    scwin.f_ContainerTypeLoading(); // Container Type 정보 
    scwin.f_CurrencyLoading(); //환율 코드 정보.
    scwin.f_getParametrSetting(scwin.v_linkcheck); // link처리        
    scwin.f_buyingUnitLoading();
    scwin.f_partnerUnitLoading();

    // ed_hhblno.setValue("060227005")
    // ed_hhblno.setValue("CHDAC20200002")
  }, {
    "delay": 50
  });
};

//---------------------------------------------------------
// Parameter Setting
//---------------------------------------------------------
scwin.f_getParametrSetting = async function (gubun) {
  switch (gubun) {
    case "0":
      break;
    case "6":
      //Master B/L에서 옴
      scwin.mhnoFlag = "1";
      ed_hhblno.setValue(scwin.v_blno);
      ds_hidden.set("hd_kcomcd", scwin.v_kcomcd);
      if (ds_hmhno.getRowCount() == "0") {
        var idx = ds_hmhno.insertRow();
        ds_hmhno.setRowPosition(idx);
      }
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", scwin.v_mhno);
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", scwin.v_mhno);
      acb_mhno.setSelectedIndex(0);
      ed_hhblno.focus();
      ed_hhblno.blur();
      $p.setTimeout(function () {
        scwin.f_Retrieve();
      }, {
        "delay": 100
      });
      break;
  }
};

//---------------------------------------------------------
// Object Check
//---------------------------------------------------------
scwin.f_Check = function () {};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  scwin.f_Set("INIT");
  ed_hhblno.focus();
  $p.setTimeout(function () {
    scwin.tabNo = 0;
  }, 100);
};

//---------------------------------------------------------
// Tab 초기화
//---------------------------------------------------------
scwin.f_initSetTab = function () {
  // $c.gus.cfEnableObjects([tab_center0, tab_center1]);
  $c.gus.cfEnableObjects($p, [tac_tabControl1]);
  tac_tabControl1.setSelectedTabIndex(0);
};

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.f_selectTabMenu = function (tabId, idx, userTabId) {
  switch (idx) {
    case 0:
      //Main tab
      scwin.tabNo = 0;
      break;
    case 1:
      //Other tab
      scwin.tabNo = 1;
      break;
  }
  // cfViewTab(idx);	
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p); // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save, btn_Delete, btn_Update, btn_1, btn_2, btn_3, btn_4, btn_5, btn_7, btn_AddRow1, btn_DelRow1, btn_CancelRow1, btn_AddRow2, btn_DelRow2, btn_CancelRow2]);
      $c.gus.cfEnableBtnOnly($p, [btn_6]);
      scwin.f_DisablePopUpObj();
      $c.gus.cfEnableObjects($p, [tbl_Search]); // 조회조건.
      scwin.statusFlag = "I";
      break;
    case "RETRIEVE":
      //조회모드	
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_2, btn_AddRow1, btn_DelRow1, btn_CancelRow1, btn_AddRow2, btn_DelRow2, btn_CancelRow2]);
      $c.gus.cfEnableBtnOnly($p, [btn_Delete, btn_3, btn_4, btn_5, btn_6, btn_7]);
      // 그리드 수정 못하게 한다.
      gr_buying.setReadOnly("grid", true);
      gr_partner.setReadOnly("grid", true);
      if (scwin.statusFlag == "C") {
        $c.gus.cfDisableBtnOnly($p, [btn_Update]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      }
      $c.gus.cfEnableObjects($p, [tbl_Search]); // 조회조건.
      $c.gus.cfEnableObjects($p, [ed_mhmblno]); // 조회조건.
      scwin.statusFlag = ""; // flag null    	           	      
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Delete, btn_3, btn_4, btn_5, btn_7]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_2, btn_6, btn_AddRow1, btn_DelRow1, btn_CancelRow1, btn_AddRow2, btn_DelRow2, btn_CancelRow2]);
      // 그리드 수정 가능
      gr_buying.setReadOnly("grid", false);
      gr_partner.setReadOnly("grid", false);
      $c.gus.cfDisableObjects($p, [tbl_Search]); // 조회조건. 
      $c.gus.cfEnableObjects($p, [ed_mhmblno]); // 조회조건.          
      scwin.statusFlag = "C";
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Delete, btn_3, btn_4, btn_5, btn_7]);
      $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Cancel, btn_1, btn_2, btn_6, btn_AddRow1, btn_DelRow1, btn_CancelRow1, btn_AddRow2, btn_DelRow2, btn_CancelRow2]);
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      // 그리드 수정 가능
      gr_buying.setReadOnly("grid", false);
      gr_partner.setReadOnly("grid", false);
      $c.gus.cfDisableObjects($p, [tbl_Search]); // 조회조건.  
      $c.gus.cfEnableObjects($p, [ed_mhmblno]); // 조회조건.             	     
      scwin.statusFlag = "U";
      if ($c.gus.cfIsNull($p, ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mexgb"))) {
        ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mexgb", "4");
      }
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      scwin.f_Set("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Delete, btn_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update]);
      scwin.f_Set("RETRIEVE");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  // $c.gus.cfEnableObjects([img_Date1,img_Date2]);
  $c.gus.cfEnableObjects($p, [ica_mhcurdt, ica_mhetd]);
  $c.gus.cfEnableObjects($p, [btn_mhlodcd, btn_mhdisccd, btn_mhccd, btn_mhactcust, btn_mhlinercd, btn_mhcnt1type, btn_mhcnt2type, btn_mhcnt3type, btn_mhcnt4type]);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  // $c.gus.cfDisableObjects([img_Date1,img_Date2]);	
  $c.gus.cfDisableObjects($p, [ica_mhcurdt, ica_mhetd]);
  $c.gus.cfDisableObjects($p, [btn_mhlodcd, btn_mhdisccd, btn_mhccd, btn_mhactcust, btn_mhlinercd, btn_mhcnt1type, btn_mhcnt2type, btn_mhcnt3type, btn_mhcnt4type]);
};

//---------------------------------------------------------
// 조회
//---------------------------------------------------------    
scwin.f_Retrieve = async function () {
  if (acb_mhno.getValue() == "NONE") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_043, ["Document No"]); // 유효하지 않는 @ 입니다.\n다시 입력하여주십시요
    return;
  }
  acb_mhno.focus(); // B/L No 빠져나올때 event처리 .

  ds_retrieve.set("kcomcd", ds_hidden.get("hd_kcomcd"));
  ds_retrieve.set("mhno", acb_mhno.getValue());
  ds_retrieve.set("mhio", ds_hidden.get("hd_mhio"));

  //실행.		       			       			       			       			    							    
  $c.sbm.execute($p, sbm_retrieve);

  //cmd anable        	
  $c.gus.cfEnableObj($p, ed_hhblno, true);
  $c.gus.cfEnableObj($p, acb_mhno, true);

  //    	ed_hhblno.focus(); 				  	    		
};

//---------------------------------------------------------
// 조회 조건 지우기
//---------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_hhblno, ed_mhmblno]);
  ds_hmhno.removeAll(); // DATASET COMBO	

  // ed_hhblno.focus(); 
};

//---------------------------------------------------------
// dataset 초기
//---------------------------------------------------------
scwin.f_dataSetClear = function () {
  ds_masterblList.removeAll();
  ds_buying.removeAll();
  ds_partner.removeAll();
  ds_hidden.set("hd_mhio", "");
  ds_hidden.set("txt_mhlodnm", "");
  ds_hidden.set("txt_mhdiscnm", "");
  ds_hidden.set("txt_mhcnm", "");
  ds_hidden.set("txt_mhlinernm", "");
  ds_hidden.set("hd_mhcrdt", "");
  ds_hidden.set("txt_inpid", "");
  ds_hidden.set("txt_inpdt", "");
  ds_hidden.set("txt_updid", "");
  ds_hidden.set("txt_upddt", "");
  ds_hidden.set("txt_odrNo", "");
  ds_hidden.set("hd_mhitem", "");
  ds_hidden.set("hd_mhdanggb", "");
  ds_hidden.set("txt_mhactcustnm", "");
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  // dataset초기화	
  // scwin.f_FieldClear();
  // ds_hmhno.insertRow();
  // scwin.f_dataSetClear();

  // ds_houseblList.ClearData();
  // ds_houseblList.insertRow();
  // ds_selling.ClearData();		
  // ds_buying.ClearData();		
  // ds_partner.ClearData();				

  // cmd anable        	
  // $c.gus.cfEnableObj(ed_hhblno, true);		
  // $c.gus.cfEnableObj(acb_mhno, true);	  		    	

  // scwin.f_Set("CREATE"); 
  // scwin.f_Check();  	

  // ed_hhblno.focus(); 	       			        	
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (ica_mhetd.getValue() == "") {
    // 등록 화면에 필수인 ETD를 기준으로 잡았음.
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
    return;
  } else {
    //cmd disable		
    scwin.f_Set("UPDATE");
    if (ed_mhcur.getValue() == "") {
      ed_mhcur.setValue("USD");
    }
    if (acb_mexgb.getValue() == "") {
      acb_mexgb.setValue(scwin.p_seaExgbEx);
    }
    if (ica_mhcurdt.getValue() == "") {
      ica_mhcurdt.setValue(ica_mhetd.getValue());
    }
    // gr_buying 
    scwin.gr_buyingEditF();
    // gr_partner
    scwin.gr_partnerEditF();
  }
};

//---------------------------------------------------------
// 저장
//---------------------------------------------------------  
scwin.f_Save = async function () {
  var isUpdateCnt1 = ds_masterblList.getModifiedIndex().length;
  var isUpdateCnt2 = ds_buying.getModifiedIndex().length;
  var isUpdateCnt3 = ds_partner.getModifiedIndex().length;
  if (isUpdateCnt1 > 0 || isUpdateCnt2 > 0 || isUpdateCnt3 > 0) {
    if (await scwin.f_validate()) {
      var STR = "Do you wish to save?";
      var count = 0;
      var tmp = "There is(are)  Amount(s) valued 0. Do you wish to save like this?";
      if (isUpdateCnt3 > 0) {
        //alert("partner update");
        for (var i = 0; i < ds_partner.getRowCount(); i++) {
          if (ds_partner.getRowStatus(i) == "C" || ds_partner.getRowStatus(i) == "U") {
            if (ds_partner.getCellData(i, "crcCd") == "KRW") {
              if (ds_partner.getCellData(i, "sellAmt") == 0) {
                count++;
              }
            } else {
              if (ds_partner.getCellData(i, "sellAmtFcrc") == 0 || ds_partner.getCellData(i, "sellAmt") == 0 || ds_partner.getCellData(i, "usdAmt") == 0) {
                count++;
              }
            }
          }
        }
      }
      if (isUpdateCnt2 > 0) {
        //alert("buying update");
        for (var i = 0; i < ds_buying.getRowCount(); i++) {
          if (ds_buying.getRowStatus(i) == "C" || ds_buying.getRowStatus(i) == "U") {
            if (ds_buying.getCellData(i, "crcCd") == "KRW") {
              if (ds_buying.getCellData(i, "pchsAmt") == 0) {
                count++;
              }
            } else {
              if (ds_buying.getCellData(i, "pchsAmtFcrc") == 0 || ds_buying.getCellData(i, "pchsAmt") == 0 || ds_buying.getCellData(i, "usdAmt") == 0) {
                count++;
              }
            }
          }
        }
      }
      if (count > 0) {
        STR = tmp;
      }
      if (await $c.win.confirm($p, STR)) {
        //저장하시겠습니까?	
        if (scwin.statusFlag == "C") {
          // 저장 
          ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "kcomcd", ds_hidden.get("hd_kcomcd"));
          ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhmblno", ed_mhmblno.getValue());
          ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhno", acb_mhno.getValue());
          ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhio", ds_hidden.get("hd_mhio"));
          ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "inpid", scwin.userId);
        }
        var isUpdateCnt4 = ds_partner.getModifiedIndex().length;
        // master b/l 확인.
        if (ed_mhmblno.getValue() != "") {
          // if (cnd_ed_mhmblno.Modified) {
          if (ds_retrieve.get("mhmblno") != ed_mhmblno.getValue()) {
            var checked = 0;
            for (var i = 0; i < ds_buying.getRowCount(); i++) {
              ds_buying.setCellData(i, "blNo", ed_mhmblno.getValue());
              checked++;
            }
            var checked = 0;
            for (var i = 0; i < ds_partner.getRowCount(); i++) {
              ds_partner.setCellData(i, "blNo", ed_mhmblno.getValue());
              checked++;
            }
          }
        }
        //for(var i=0; i<= ds_masterblList.getRowCount(); i++)
        //{	
        //	if (ds_masterblList.getCellData(i,"mhcur")==scwin.crc){
        //		if (ds_masterblList.getCellData(i,"mhexrate") < scwin.exRate1*0.9 || ds_masterblList.getCellData(i,"mhexrate") > scwin.exRate1*1.1){
        //			alert("Exchange Rate Information의 Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
        //			return false;
        //		}
        //		if (ds_masterblList.getCellData(i,"mhusdrate") < scwin.exRate2*0.9 || ds_masterblList.getCellData(i,"mhusdrate") > scwin.exRate2*1.1){
        //			alert("Exchange Rate Information의 UX Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
        //			return false;
        //		}
        //	} 			
        //} 
        //for(var i=0; i<= ds_partner.getRowCount(); i++)
        //{	if (ds_partner.getCellData(i,"crcCd") == scwin.crc){
        //		if (ds_partner.getCellData(i,"exRate") < scwin.exRate1*0.9 || ds_partner.getCellData(i,"exRate") > scwin.exRate1*1.1){
        //			alert("Partner List의 Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
        //			return false;
        //		} 			
        //	}
        //} 
        //for(var i=0; i<= ds_buying.getRowCount(); i++)
        //{	if (ds_buying.getCellData(i,"crcCd") == scwin.crc){
        //		if (ds_buying.getCellData(i,"exRate") < scwin.exRate1*0.9 || ds_buying.getCellData(i,"exRate") > scwin.exRate1*1.1){
        //			alert("Buying List의 Ex-Rate가 기준환율 대비 10% 이상 차이입니다.");
        //			return false;
        //		} 			
        //	}
        //} 

        // 실행 	 	
        $c.sbm.execute($p, sbm_save);

        //cmd anable        	
        //$c.gus.cfEnableObj(ed_hhblno, true);		
        //$c.gus.cfEnableObj(acb_mhno, true);	 	      			
        //scwin.f_Retrieve();
        //ed_hhblno.focus();  
        //scwin.f_Set("SAVE");			    	
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_001, ["Master B/L Freight"]); // @은(는) 변경된 사항이 없습니다.
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  //cmd anable 
  $c.gus.cfEnableObj($p, ed_hhblno, true);
  $c.gus.cfEnableObj($p, acb_mhno, true);
  ed_hhblno.focus();
  scwin.f_Set("RETRIEVE");
  // ds_masterblList.Undo(ds_masterblList.UndoAll());	
  ds_masterblList.undoAll();
  ds_hidden.set("hd_mhio", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhio"));
  ds_hidden.set("txt_mhlodnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhlodnm"));
  ds_hidden.set("txt_mhdiscnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhdiscnm"));
  ds_hidden.set("txt_mhcnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnm"));
  ds_hidden.set("txt_mhlinernm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhlinernm"));
  ds_hidden.set("hd_mhcrdt", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcrdt"));
  ds_hidden.set("txt_inpid", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "inpid"));
  ds_hidden.set("txt_inpdt", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "inpdt"));
  ds_hidden.set("txt_updid", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "updid"));
  ds_hidden.set("txt_upddt", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "upddt"));
  ds_hidden.set("txt_odrNo", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "odrNo"));
  ds_hidden.set("hd_mhitem", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhitem"));
  ds_hidden.set("hd_mhdanggb", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhdanggb"));
  ds_hidden.set("txt_mhactcustnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhactcustnm"));
  scwin.f_CancelRow(1);
  scwin.f_CancelRow(2);
};

//-------------------------------------------------------------------------------
//  Copy 
//-------------------------------------------------------------------------------
scwin.f_Copy = function () {
  // tr_RetrieveBookingList.Post();
  // if (scwin.processFlag == "T") {
  //     f_BookingListBinding("Copy",ds_MasterBookingInfo, ds_MasterBillInfo);
  // }
};

//---------------------------------------------------------
// 삭제
//---------------------------------------------------------  
scwin.f_Delete = async function () {
  if (ds_buying.getRowCount() == "0" && ds_partner.getRowCount() == "0") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Freight Information"]); //  @이(가) 존재하지 않습니다.
    return;
  }

  // invoice check
  scwin.f_invoiceCheck(); // invoice Check
  if (scwin.invoiceCheck == "1") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]); // @은(는) @할 수 없습니다.
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
    //삭제하시겠습니까?	        	

    // ds_buying.removeAll();  // buying 전체삭제.         	
    // ds_partner.removeAll();  // partner 전체삭제.          	

    ds_buying.modifyAllStatus("D");
    ds_partner.modifyAllStatus("D");
    $c.sbm.execute($p, sbm_delete);
  }
};

//---------------------------------------------------------
//행추가
//--------------------------------------------------------- 
scwin.f_addRow = async function (disGubun) {
  switch (disGubun) {
    case 1:
      // Buying
      if (acb_mhno.getValue() == "NONE" || acb_mhno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다.
      } else {
        var idx = ds_buying.insertRow();
        ds_buying.setRowPosition(idx);
        ds_buying.setCellData(ds_buying.getRowPosition(), "kcomcd", ds_hidden.get("hd_kcomcd"));
        ds_buying.setCellData(ds_buying.getRowPosition(), "blNo", ed_mhmblno.getValue()); //update일때.
        ds_buying.setCellData(ds_buying.getRowPosition(), "mhno", acb_mhno.getValue()); //update일때.
        ds_buying.setCellData(ds_buying.getRowPosition(), "odrNo", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "odrNo"));
        ds_buying.setCellData(ds_buying.getRowPosition(), "locPtnCls", "1"); //국내 : 1, 해외 :2 			
        ds_buying.setCellData(ds_buying.getRowPosition(), "mblHblCls", "M"); //house/master	
        ds_buying.setCellData(ds_buying.getRowPosition(), "seaAirCls", "S"); // sea/air
        ds_buying.setCellData(ds_buying.getRowPosition(), "drcrCls", "C"); // DR/CR		
        // ds_buying.setCellData(ds_buying.getRowPosition(), "ppccCls", hd_hhpcgb.getValue();  		 //pp/cc																	
        ds_buying.setCellData(ds_buying.getRowPosition(), "inpid", scwin.userId);
        ds_buying.setCellData(ds_buying.getRowPosition(), "pchsClntNo", ed_mhlinercd.getValue());
        ds_buying.setCellData(ds_buying.getRowPosition(), "pchsClntNm", ds_hidden.get("txt_mhlinernm")); //Liner name		 					
        ds_buying.setCellData(ds_buying.getRowPosition(), "rsltsStdDt", ds_hidden.get("hd_mhcrdt")); //실적일	
        ds_buying.setCellData(ds_buying.getRowPosition(), "exRateTyp", acb_mexgb.getValue()); //exgb					
        ds_buying.setCellData(ds_buying.getRowPosition(), "pchsTyp", "1");

        // ds_buying.setCellData(ds_buying.getRowPosition(), "pchsUpr", "0");
        // ds_buying.setCellData(ds_buying.getRowPosition(), "pchsAmtFcrc", "0");
        // ds_buying.setCellData(ds_buying.getRowPosition(), "exRate", "0");
        // ds_buying.setCellData(ds_buying.getRowPosition(), "pchsAmt", "0");
        // ds_buying.setCellData(ds_buying.getRowPosition(), "vat", "0");
        // ds_buying.setCellData(ds_buying.getRowPosition(), "trfUpr", "0");
        //gr_buying.ColumnProp("sellDeptCd", "edit", "none";

        //unit처리.
        // scwin.f_buyingUnitLoading();
        var cnt1 = "0";
        var cnt2 = "0";
        var cnt3 = "0";
        var cnt4 = "0";
        if (ed_mhcnt1type.getValue() != "" && ed_mhcnt1.getValue() != "0") {
          cnt1 = ed_mhcnt1type.getValue();
        } else {
          cnt1 = "0";
        }
        if (ed_mhcnt2type.getValue() != "" && ed_mhcnt2.getValue() != "0") {
          cnt2 = ed_mhcnt2type.getValue();
        } else {
          cnt2 = "0";
        }
        if (ed_mhcnt3type.getValue() != "" && ed_mhcnt3.getValue() != "0") {
          cnt3 = ed_mhcnt3type.getValue();
        } else {
          cnt3 = "0";
        }
        if (ed_mhcnt4type.getValue() != "" && ed_mhcnt4.getValue() != "0") {
          cnt4 = ed_mhcnt4type.getValue();
        } else {
          cnt4 = "0";
        }
        ds_buyingUnit_search.set("sysCd", "SeaExportHouseEBC");
        ds_buyingUnit_search.set("queryId", "retriveUnitList");
        ds_buyingUnit_search.set("param1", cnt1);
        ds_buyingUnit_search.set("param2", cnt2);
        ds_buyingUnit_search.set("param3", cnt3);
        ds_buyingUnit_search.set("param4", cnt4);
        var rs = await $c.sbm.execute($p, sbm_buyingUnit);
        if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
          ds_buyingUnit.setJSON(rs.responseJSON.GAUCE);
          ds_buying.setCellData(ds_buying.getRowPosition(), "fareUnit", ds_buyingUnit.getCellData(0, "code"));
        }
        scwin.f_packageRateBuyingLoading(ds_buying.getRowPosition(), '');
        gr_buying.setFocusedCell(ds_buying.getRowPosition(), "pchsTyp");
        scwin.setSeqGrid(1);
      }
      break;
    case 2:
      // Partner
      if (acb_mhno.getValue() == "NONE" || acb_mhno.getValue() == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다.
      } else {
        var idx = ds_partner.insertRow();
        ds_partner.setRowPosition(idx);
        ds_partner.setCellData(ds_partner.getRowPosition(), "kcomcd", ds_hidden.get("hd_kcomcd"));
        ds_partner.setCellData(ds_partner.getRowPosition(), "blNo", ed_mhmblno.getValue()); //update일때.
        ds_partner.setCellData(ds_partner.getRowPosition(), "mhno", acb_mhno.getValue()); //update일때.
        ds_partner.setCellData(ds_partner.getRowPosition(), "odrNo", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "odrNo"));
        ds_partner.setCellData(ds_partner.getRowPosition(), "drcrCls", "D"); //D/C							
        ds_partner.setCellData(ds_partner.getRowPosition(), "locPtnCls", "2"); //국내 : 1, 해외 :2 	
        ds_partner.setCellData(ds_partner.getRowPosition(), "mblHblCls", "M"); //house/master
        ds_partner.setCellData(ds_partner.getRowPosition(), "seaAirCls", "S"); // sea/air	
        // ds_partner.setCellData(ds_partner.getRowPosition(), "ppccCls", hd_hhpcgb.getValue();  	//pp/cc											
        ds_partner.setCellData(ds_partner.getRowPosition(), "inpid", scwin.userId);
        ds_partner.setCellData(ds_partner.getRowPosition(), "bilgClntNo", ed_mhccd.getValue());
        ds_partner.setCellData(ds_partner.getRowPosition(), "bilgClntNm", ds_hidden.get("txt_mhcnm")); //partner name								
        ds_partner.setCellData(ds_partner.getRowPosition(), "rsltsStdDt", ds_hidden.get("hd_mhcrdt")); //실적일	
        ds_partner.setCellData(ds_partner.getRowPosition(), "exRateTyp", acb_mexgb.getValue()); //exgb				

        //unit처리.
        // scwin.f_partnerUnitLoading();
        var cnt1 = "0";
        var cnt2 = "0";
        var cnt3 = "0";
        var cnt4 = "0";
        if (ed_mhcnt1type.getValue() != "" && ed_mhcnt1.getValue() != "0") {
          cnt1 = ed_mhcnt1type.getValue();
        } else {
          cnt1 = "0";
        }
        if (ed_mhcnt2type.getValue() != "" && ed_mhcnt2.getValue() != "0") {
          cnt2 = ed_mhcnt2type.getValue();
        } else {
          cnt2 = "0";
        }
        if (ed_mhcnt3type.getValue() != "" && ed_mhcnt3.getValue() != "0") {
          cnt3 = ed_mhcnt3type.getValue();
        } else {
          cnt3 = "0";
        }
        if (ed_mhcnt4type.getValue() != "" && ed_mhcnt4.getValue() != "0") {
          cnt4 = ed_mhcnt4type.getValue();
        } else {
          cnt4 = "0";
        }
        ds_partnerUnit_search.set("sysCd", "SeaExportHouseEBC");
        ds_partnerUnit_search.set("queryId", "retriveUnitList");
        ds_partnerUnit_search.set("param1", cnt1);
        ds_partnerUnit_search.set("param2", cnt2);
        ds_partnerUnit_search.set("param3", cnt3);
        ds_partnerUnit_search.set("param4", cnt4);
        var rs = await $c.sbm.execute($p, sbm_partnerUnit);
        if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
          ds_partnerUnit.setJSON(rs.responseJSON.GAUCE);
          ds_partner.setCellData(ds_partner.getRowPosition(), "fareUnit", ds_partnerUnit.getCellData(0, "code"));
        }
        scwin.f_packageRatePartnerLoading(ds_partner.getRowPosition(), '');
        gr_partner.setFocusedCell(ds_partner.getRowPosition(), "clntNo");
        scwin.setSeqGrid(2);
      }
      break;
    default:
      break;
  }
};

//---------------------------------------------------------
// 행삭제
//--------------------------------------------------------- 
scwin.f_DeleteRow = async function (disGubun) {
  switch (disGubun) {
    case 1:
      // Buying
      if (ds_buying.getCellData(ds_buying.getRowPosition(), "pchsCertiNo") == "") {
        if (ds_buying.getRowStatus(ds_buying.getRowPosition()) != "C") {
          ds_buying.deleteRow(ds_buying.getRowPosition());
        } else {
          ds_buying.removeRow(ds_buying.getRowPosition());
        }
      } else {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]); // @은(는) @할 수 없습니다.
        return;
      }
      scwin.setSeqGrid(1);
      break;
    case 2:
      // Partner
      if (ds_partner.getCellData(ds_partner.getRowPosition(), "certiNo") == "") {
        if (ds_partner.getRowStatus(ds_partner.getRowPosition()) != "C") {
          ds_partner.deleteRow(ds_partner.getRowPosition());
        } else {
          ds_partner.removeRow(ds_partner.getRowPosition());
        }
      } else {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_041, ["Invoice No", "delete"]); // @은(는) @할 수 없습니다.
        return;
      }
      scwin.setSeqGrid(2);
      break;
    default:
      break;
  }
};

//---------------------------------------------------------
// 행취소
//---------------------------------------------------------
scwin.f_CancelRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      // Buying
      // ds_buying.Undo(ds_buying.UndoAll());
      // ds_buying.undoAll();
      for (var i = ds_buying.getRowCount(); i >= 0; i--) {
        if (ds_buying.getRowStatus(i) == "C") {
          ds_buying.removeRow(i);
        } else {
          ds_buying.undoRow(i);
        }
      }
      scwin.setSeqGrid(1);
      ds_buying.initRowStatus();
      break;
    case 2:
      // Partner
      // ds_partner.Undo(ds_partner.UndoAll());
      // ds_partner.undoAll();
      for (var i = ds_partner.getRowCount(); i >= 0; i--) {
        if (ds_partner.getRowStatus(i) == "C") {
          ds_partner.removeRow(i);
        } else {
          ds_partner.undoRow(i);
        }
      }
      scwin.setSeqGrid(2);
      ds_partner.initRowStatus();
      break;
    default:
      break;
  }
};
scwin.f_postDtChk = async function (odrNo, sellSeq, kcomcd, seaAirCls, blNo, mhno) {
  ds_postDtChk_search.set("sysCd", "ilCommonEBC");
  ds_postDtChk_search.set("queryId", "retrievePostDt");
  ds_postDtChk_search.set("param1", odrNo);
  ds_postDtChk_search.set("param2", sellSeq);
  ds_postDtChk_search.set("param3", kcomcd);
  ds_postDtChk_search.set("param4", seaAirCls);
  ds_postDtChk_search.set("param5", blNo);
  ds_postDtChk_search.set("param6", mhno);
  ds_postDtChk_search.set("param7", "");
  ds_postDtChk_search.set("param8", "");
  ds_postDtChk_search.set("param9", "");
  ds_postDtChk_search.set("param10", "");
  ds_postDtChk_search.set("param11", "");
  ds_postDtChk_search.set("param12", "");
  ds_postDtChk_search.set("param13", "");
  ds_postDtChk_search.set("param14", "");
  var rs = await $c.sbm.execute($p, sbm_postDtChk);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_postDtChk.setJSON(rs.responseJSON.GAUCE);
  }
  ;
  return;
};

//---------------------------------------------------------
// function name : scwin.f_validate
// function desc : 
//---------------------------------------------------------
scwin.f_validate = async function () {
  // VALIDATE

  if (!(await $c.gus.cfValidate($p, [ica_mhcurdt, ica_mhetd, gr_buying, gr_partner]))) {
    //validExp 가 yes일때 check
    return false;
  }
  if (ed_mhcur.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Currency"]); //@는 필수입력항목입니다.				
    ed_mhcur.focus();
    return false;
  }
  if (ica_mhetd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETD"]); //@는 필수입력항목입니다.				
    ica_mhetd.focus();
    return false;
  }

  // Container Type value check	
  if (ed_mhcnt1type.getValue() != "") {
    var idxArr1 = ds_containerType.getMatchedIndex(0, ed_mhcnt1type.getValue());
    if (!(idxArr1.length > 0)) {
      // 값이 없을때
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container type"]); //  @이(가) 존재하지 않습니다.			
      ed_mhcnt1type.focus();
      return false;
    }
  }
  // Container Type value check	
  if (ed_mhcnt2type.getValue() != "") {
    var idxArr2 = ds_containerType.getMatchedIndex(0, ed_mhcnt2type.getValue());
    if (!(idxArr2.length > 0)) {
      // 값이 없을때
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container type"]); //  @이(가) 존재하지 않습니다.			
      ed_mhcnt2type.focus();
      return false;
    }
  }
  // Container Type value check	
  if (ed_mhcnt3type.getValue() != "") {
    var idxArr3 = ds_containerType.getMatchedIndex(0, ed_mhcnt3type.getValue());
    if (!(idxArr3.length > 0)) {
      // 값이 없을때
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container type"]); //  @이(가) 존재하지 않습니다.			
      ed_mhcnt3type.focus();
      return false;
    }
  }
  // Container Type value check	
  if (ed_mhcnt4type.getValue() != "") {
    var idxArr4 = ds_containerType.getMatchedIndex(0, ed_mhcnt4type.getValue());
    if (!(idxArr4.length > 0)) {
      // 값이 없을때
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Container type"]); //  @이(가) 존재하지 않습니다.			
      ed_mhcnt4type.focus();
      return false;
    }
  }
  var checked = 0;
  for (var i = 0; i < ds_buying.getRowCount(); i++) {
    // Buying Type
    if (ds_buying.getCellData(i, "pchsTyp") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Type"]); //@는 필수입력항목입니다.
      gr_buying.setFocusedCell(i, "pchsTyp", true);
      return false;
    }
    // Buying Customer
    if (ds_buying.getCellData(i, "pchsClntNo") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer"]); //@는 필수입력항목입니다.
      gr_buying.setFocusedCell(i, "pchsClntNo", true);
      return false;
    }
    // Buying Customer
    if (ds_buying.getCellData(i, "pchsClntNm") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer Name"]); //@는 필수입력항목입니다.
      gr_buying.setFocusedCell(i, "pchsClntNm", true);
      return false;
    }
    // Buying F/Code
    if (ds_buying.getCellData(i, "fareEngCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["F/Code"]); //@는 필수입력항목입니다.
      gr_buying.setFocusedCell(i, "fareEngCd", true);
      return false;
    }
    // Buying Cur
    if (ds_buying.getCellData(i, "crcCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Currency"]); //@는 필수입력항목입니다.
      gr_buying.setFocusedCell(i, "crcCd", true);
      return false;
    }
    // Buying Unit
    if (ds_buying.getCellData(i, "fareUnit") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Unit"]); //@는 필수입력항목입니다.
      gr_buying.setFocusedCell(i, "fareUnit", true);
      return false;
    }
    // Buying amount(W)
    // if (ds_buying.getCellData(i,"crcCd") == "KRW" && ds_buying.getCellData(i, "pchsAmt") == "0"){		    
    //     await $c.gus.cfAlertMsg(E_MSG_CM_ERR_033, ["Amount(W)","Number:0"]);  // @은(는) 다음 문자가 올 수 없습니다.\n@
    //     gr_buying.setFocusedCell(i, "pchsAmt");
    //     return false;
    // }
    // Buying Inner Dept
    if (ds_buying.getCellData(i, "pchsTyp") == "3" && ds_buying.getCellData(i, "sellDeptCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Inner Department"]); //@는 필수입력항목입니다.
      gr_buying.setFocusedCell(i, "sellDeptCd", true);
      return false;
    }

    //삭제 시 내부거래 체크
    if (ds_buying.getRowStatus(i) == "D") {
      scwin.f_postDtChk(ds_buying.getCellData(i, "odrNo"), ds_buying.getCellData(i, "pchsSeq"), ds_buying.getCellData(i, "kcomcd"), ds_buying.getCellData(i, "seaAirCls"), ds_buying.getCellData(i, "blNo"), ds_buying.getCellData(i, "mhno"));
      var isPostDt = ds_postDtChk.getCellData(0, "col1");
      if (isPostDt != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \nbuying List " + i + "번째 데이터를 확인하세요.");
        return false;
      }
    }
    checked++;
  }
  ;
  var checked = 0;
  for (var i = 0; i < ds_partner.getRowCount(); i++) {
    // Partner Customer
    if (ds_partner.getCellData(i, "bilgClntNm") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Customer Name"]); //@는 필수입력항목입니다.
      gr_partner.setFocusedCell(i, "bilgClntNm", true);
      return false;
    }
    // Partner F/Code
    if (ds_partner.getCellData(i, "fareEngCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["F/Code"]); //@는 필수입력항목입니다.
      gr_partner.setFocusedCell(i, "fareEngCd", true);
      return false;
    }
    // Partner D/C
    if (ds_partner.getCellData(i, "drcrCls") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["D/C"]); //@는 필수입력항목입니다.
      gr_partner.setFocusedCell(i, "drcrCls", true);
      return false;
    }
    // Partner Cur
    if (ds_partner.getCellData(i, "crcCd") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Currency"]); //@는 필수입력항목입니다.
      gr_partner.setFocusedCell(i, "crcCd", true);
      return false;
    }
    // Partner Unit
    if (ds_partner.getCellData(i, "fareUnit") == "") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Unit"]); //@는 필수입력항목입니다.
      gr_partner.setFocusedCell(i, "fareUnit", true);
      return false;
    }
    // Partner amount(W)
    // if (ds_partner.getCellData(i,"crcCd") == "KRW" && ds_partner.getCellData(i, "sellAmt") == "0"){		    
    //     await $c.gus.cfAlertMsg(E_MSG_CM_ERR_033, ["Amount(W)","Number:0"]);  // @은(는) 다음 문자가 올 수 없습니다.\n@
    //     gr_partner.setFocusedCell(i, "sellAmt");
    //     return false;
    // }

    //삭제 시 내부거래 체크
    if (ds_partner.getRowStatus(i) == "D") {
      scwin.f_postDtChk(ds_partner.getCellData(i, "odrNo"), ds_partner.getCellData(i, "sellSeq"), ds_partner.getCellData(i, "kcomcd"), ds_partner.getCellData(i, "seaAirCls"), ds_partner.getCellData(i, "blNo"), ds_partner.getCellData(i, "mhno"));
      var isPostDt = ds_postDtChk.getCellData(0, "col1");
      if (isPostDt != "") {
        await $c.win.alert($p, "내부거래 확정 건 입니다. \nPartner List " + i + "번째 데이터를 확인하세요.");
        return false;
      }
    }
    checked++;
  }
  return true;
};

//---------------------------------------------------------
// 공통팝업 열기
//--------------------------------------------------------- 
scwin.f_PopUp = function (disGubun, chgGubun) {
  var code = "";
  var name = "";
  switch (disGubun) {
    case "Partner":
      code = ed_mhccd.getValue();
      name = ds_hidden.get("txt_mhcnm");
      ed_mhccd.setValue("");
      ds_hidden.set("txt_mhcnm", "");
      udc_popupCom.setSelectId('retrieveEngClntInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupCom1_callBackFunc,
      // XML상의 SELECT ID	                                                   							
      code,
      // 화면에서의 ??? Code Element의	Value                                  
      name,
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Partner Code,Partner Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      'Partner search,Partner Code,Partner Name');
      break;
    case "Customer":
      code = ed_mhactcust.getValue();
      name = ds_hidden.get("txt_mhactcustnm");
      ed_mhactcust.setValue("");
      ds_hidden.set("txt_mhactcustnm", "");
      udc_popupCom.setSelectId('retrieveEngClntInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupCom2_callBackFunc,
      // XML상의 SELECT ID	                                                   							
      code,
      // 화면에서의 ??? Code Element의	Value                                  
      name,
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      'Customer search,Customer Code,Customer Name');
      break;
    case "Liner":
      code = ed_mhlinercd.getValue();
      name = ds_hidden.get("txt_mhlinernm");
      ed_mhlinercd.setValue("");
      ds_hidden.set("txt_mhlinernm", "");
      udc_popupCom.setSelectId('retrieveEngClntInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupCom3_callBackFunc,
      // XML상의 SELECT ID	                                                   							
      code,
      // 화면에서의 ??? Code Element의	Value                                  
      name,
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      'Liner search,Liner Code,Liner Name');
      break;
  }
};

//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------   
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var code = "";
  var name = "";
  switch (gubun1) {
    case "Loading":
      code = ed_mhlodcd.getValue();
      name = ds_hidden.get("txt_mhlodnm");
      ed_mhlodcd.setValue("");
      ds_hidden.set("txt_mhlodnm", "");
      udc_popupCom.setSelectId('retrievePortInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupComPopup1_callBackFunc, code, name, pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Loading,Code,Name", pNoDataCloseTF);
      break;
    case "Discharge":
      code = ed_mhdisccd.getValue();
      name = ds_hidden.get("txt_mhdiscnm");
      ed_mhdisccd.setValue("");
      ds_hidden.set("txt_mhdiscnm", "");
      udc_popupCom.setSelectId('retrievePortInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupComPopup2_callBackFunc, code, name, pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
      break;
    case "ContainerType1":
      code = ed_mhcnt1type.getValue();
      name = "";
      ed_mhcnt1type.setValue("");
      udc_popupCom.setSelectId('retriveContainerTypeCodeInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupComPopup3_callBackFunc, code //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
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
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "ContainerType2":
      code = ed_mhcnt2type.getValue();
      name = "";
      ed_mhcnt2type.setValue("");
      udc_popupCom.setSelectId('retriveContainerTypeCodeInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupComPopup4_callBackFunc, code //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
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
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "ContainerType3":
      code = ed_mhcnt3type.getValue();
      name = "";
      ed_mhcnt3type.setValue("");
      udc_popupCom.setSelectId('retriveContainerTypeCodeInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupComPopup5_callBackFunc, code //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
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
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "ContainerType4":
      code = ed_mhcnt4type.getValue();
      name = "";
      ed_mhcnt4type.setValue("");
      udc_popupCom.setSelectId('retriveContainerTypeCodeInfo');
      udc_popupCom.ilCommonPopUp(scwin.udc_popupComPopup6_callBackFunc, code //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
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
      , "Type,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.f_openPgm = function (name) {
  let src = "";
  let menuNm = "";
  let menuId = "";
  let paramObj = {};
  if (name == "Partner") {
    src = "/ui/il/acc/acpar/ac_104_01_01b.xml";
    paramObj = {
      kcomcd: ds_hidden.get("hd_kcomcd") // kcomcd 
      ,

      seaair: "S" // sea:S,air:A
      ,

      iogb: ds_hidden.get("hd_mhio") // out:O,in:I
      ,

      blno: "" // house blno  
      ,

      mblno: ed_mhmblno.getValue() // master blno
      ,

      mhno: acb_mhno.getValue() // mhno
    };
    menuNm = "Partner Invoice";
    menuId = "ac_104_01_01b";
  } else if (name == "Profit") {
    src = "/ui/il/pfm/pfbs/pe_101_01_01b.xml";
    paramObj = {
      kcomcd: ds_hidden.get("hd_kcomcd") // kcomcd 
      ,

      seaair: "S" // sea:S,air:A
      ,

      iogb: ds_hidden.get("hd_mhio") // out:O,in:I
      ,

      blno: ed_hhblno.getValue() // house blno  
      ,

      mblno: "" // master blno
      ,

      mhno: acb_mhno.getValue() // mhno
    };
    menuNm = "Booking Sheet";
    menuId = "pe_101_01_01b";
  } else if (name == "paymentINV") {
    src = "/ui/il/acc/acpay/ac_106_01_01b.xml";
    paramObj = {
      kcomcd: ds_hidden.get("hd_kcomcd") // kcomcd 
      ,

      seaair: "S" // sea:S,air:A
      ,

      iogb: ds_hidden.get("hd_mhio") // out:O,in:I
      ,

      blno: "" // house blno  
      ,

      mblno: ed_mhmblno.getValue() // master blno
      ,

      mhno: acb_mhno.getValue() // mhno
    };
    menuNm = "Payment Invoice";
    menuId = "ac_106_01_01b";
  } else if (name == "MasterBLFind") {
    src = "/ui/il/seaout/sobl/se_106_01_02b.xml";
    paramObj = {
      mhio: ds_hidden.get("hd_mhio")
    };
    menuNm = "Master B/L Search";
    menuId = "se_106_01_02b";
  } else if (name == "MasterBLHeader") {
    src = "/ui/il/seaout/sobl/se_106_01_01b.xml";
    paramObj = {
      linkcheck: "3",
      kcomcd: ds_hidden.get("hd_kcomcd"),
      blno: ed_hhblno.getValue() // house blno  
      ,

      mhno: acb_mhno.getValue() // mhno
    };
    menuNm = "Export Master B/L";
    menuId = "se_106_01_01b";
  }
  if (menuId != "") {
    $c.win.openMenu($p, menuNm, src, menuId, paramObj);
  }
};

//-------------------------------------------------------------------------
//CONTAINER TYPE 가져오기
//------------------------------------------------------------------------- 	
scwin.f_ContainerTypeLoading = async function () {
  ds_containerType_search.set("sysCd", "ilCommonEBC");
  ds_containerType_search.set("queryId", "retriveContainerTypeList");
  var rs = await $c.sbm.execute($p, sbm_containerType);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_containerType.setJSON(rs.responseJSON.GAUCE);
  }
  ;
};

//-------------------------------------------------------------------------
//환율 Code 가져오기
//------------------------------------------------------------------------- 	
scwin.f_CurrencyLoading = async function () {
  ds_currencyCode_search.set("sysCd", "ilCommonEBC");
  ds_currencyCode_search.set("queryId", "retriveCurrencyCodeList");
  var rs = await $c.sbm.execute($p, sbm_currencyCode);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_currencyCode.setJSON(rs.responseJSON.GAUCE);
  }
  ;
};

//-------------------------------------------------------------------------
//MHNO 가져오기
//------------------------------------------------------------------------- 	
scwin.f_MhnoLoading = async function () {
  ds_hmhno.removeAll();
  var strClntNo = ed_hhblno.getValue();
  if (strClntNo.length > 0) {
    var param1 = strClntNo;
    ds_hmhno_search.set("sysCd", "ilCommonEBC");
    ds_hmhno_search.set("queryId", "retriveSeaHouseMhnoListCombo");
    ds_hmhno_search.set("param1", param1);
    var resultVal = await $c.sbm.execute($p, sbm_hmhno);
    var rs = await $c.sbm.execute($p, sbm_hmhno);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      ds_hmhno.setJSON(rs.responseJSON.GAUCE);
      if (ds_hmhno.getRowCount() == 0) {
        if (scwin.statusFlag != "C") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["House No"]); // @이(가) 존재하지 않습니다.
        }
        var idx = ds_hmhno.insertRow();
        ds_hmhno.setRowPosition(idx);
        ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", "NONE");
        ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", "NONE");
        acb_mhno.setSelectedIndex(0);
      }
      if (scwin.mhnoFlag == "1") {
        scwin.f_Retrieve();
        scwin.mhnoFlag = "0";
      }
    }
    ;
  }
};

//-------------------------------------------------------------------------
//환율  Master 가져오기
//------------------------------------------------------------------------- 	
scwin.f_ExRateMasterLoading = async function () {
  if (ed_mhexrate.getValue() == "" || ed_mhexrate.getValue() == "0") {
    var param1 = ed_mhcur.getValue();
    var param2 = ica_mhcurdt.getValue();
    var param3 = acb_mexgb.getValue();
    ds_exMasterRate_search.set("sysCd", "ilCommonEBC");
    ds_exMasterRate_search.set("queryId", "retrieveExRate");
    ds_exMasterRate_search.set("param1", param1);
    ds_exMasterRate_search.set("param2", param2);
    ds_exMasterRate_search.set("param3", param3);
    var rs = await $c.sbm.execute($p, sbm_exMasterRate);
    if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
      ds_exMasterRate.setJSON(rs.responseJSON.GAUCE);
      ed_mhexrate.setValue(ds_exMasterRate.getCellData(0, "code"));
      ed_mhusdrate.setValue(ds_exMasterRate.getCellData(0, "name"));
      if (ed_mhexrate.getValue() == "" && param1 != "KRW") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다. 
        scwin.exRateCheck = "1";
      } else {
        scwin.exRateCheck = "2";
        scwin.exRate1 = ed_mhexrate.getValue();
        scwin.exRate2 = ed_mhusdrate.getValue();
        scwin.crc = ed_mhcur.getValue();
      }
    }
  }
};

//-------------------------------------------------------------------------
//환율  Grid Buying 가져오기
//------------------------------------------------------------------------- 	
scwin.f_ExRateBuyingGridLoading = async function () {
  if (ed_mhcur.getValue() == ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd")) {
    ds_buying.setCellData(ds_buying.getRowPosition(), "exRate", ed_mhexrate.getValue());
  } else {
    if (ds_buying.getCellData(ds_buying.getRowPosition(), "exRate") == "" || ds_buying.getCellData(ds_buying.getRowPosition(), "exRate") == "0") {
      var param1 = ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd");
      var param2 = ica_mhcurdt.getValue();
      var param3 = acb_mexgb.getValue();
      ds_exRateBuyingGrid_search.set("sysCd", "ilCommonEBC");
      ds_exRateBuyingGrid_search.set("queryId", "retrieveExRate");
      ds_exRateBuyingGrid_search.set("param1", param1);
      ds_exRateBuyingGrid_search.set("param2", param2);
      ds_exRateBuyingGrid_search.set("param3", param3);
      var rs = await $c.sbm.execute($p, sbm_exRateBuyingGrid);
      if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
        ds_exRateBuyingGrid.setJSON(rs.responseJSON.GAUCE);
        ds_buying.setCellData(ds_buying.getRowPosition(), "exRate", ds_exRateBuyingGrid.getCellData(0, "code"));
        if (ds_buying.getCellData(ds_buying.getRowPosition(), "exRate") == "" && param1 != "KRW") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다. 
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
//환율  Grid Partner 가져오기
//------------------------------------------------------------------------- 	
scwin.f_ExRatePartnerGridLoading = async function () {
  if (ed_mhcur.getValue() == ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd")) {
    ds_partner.setCellData(ds_partner.getRowPosition(), "exRate", ed_mhexrate.getValue());
  } else {
    if (ds_partner.getCellData(ds_partner.getRowPosition(), "exRate") == "" || ds_partner.getCellData(ds_partner.getRowPosition(), "exRate") == "0") {
      var param1 = ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd");
      var param2 = ica_mhcurdt.getValue();
      var param3 = acb_mexgb.getValue();
      ds_exRatePartnerGrid_search.set("sysCd", "ilCommonEBC");
      ds_exRatePartnerGrid_search.set("queryId", "retrieveExRate");
      ds_exRatePartnerGrid_search.set("param1", param1);
      ds_exRatePartnerGrid_search.set("param2", param2);
      ds_exRatePartnerGrid_search.set("param3", param3);
      var rs = await $c.sbm.execute($p, sbm_exRatePartnerGrid);
      if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
        ds_exRatePartnerGrid.setJSON(rs.responseJSON.GAUCE);
        ds_partner.setCellData(ds_partner.getRowPosition(), "exRate", ds_exRatePartnerGrid.getCellData(0, "code"));
        if (ds_partner.getCellData(ds_partner.getRowPosition(), "exRate") == "" && param1 != "KRW") {
          await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Ex-Rate"]); // @이(가) 존재하지 않습니다. 
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
//Buying unit 가져오기
//------------------------------------------------------------------------- 	
scwin.f_buyingUnitLoading = async function () {
  var cnt1 = "0";
  var cnt2 = "0";
  var cnt3 = "0";
  var cnt4 = "0";
  if (ed_mhcnt1type.getValue() != "" && ed_mhcnt1.getValue() != "0") {
    cnt1 = ed_mhcnt1type.getValue();
  } else {
    cnt1 = "0";
  }
  if (ed_mhcnt2type.getValue() != "" && ed_mhcnt2.getValue() != "0") {
    cnt2 = ed_mhcnt2type.getValue();
  } else {
    cnt2 = "0";
  }
  if (ed_mhcnt3type.getValue() != "" && ed_mhcnt3.getValue() != "0") {
    cnt3 = ed_mhcnt3type.getValue();
  } else {
    cnt3 = "0";
  }
  if (ed_mhcnt4type.getValue() != "" && ed_mhcnt4.getValue() != "0") {
    cnt4 = ed_mhcnt4type.getValue();
  } else {
    cnt4 = "0";
  }
  ds_buyingUnit_search.set("sysCd", "SeaExportHouseEBC");
  ds_buyingUnit_search.set("queryId", "retriveUnitList");
  ds_buyingUnit_search.set("param1", cnt1);
  ds_buyingUnit_search.set("param2", cnt2);
  ds_buyingUnit_search.set("param3", cnt3);
  ds_buyingUnit_search.set("param4", cnt4);
  var rs = await $c.sbm.execute($p, sbm_buyingUnit);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_buyingUnit.setJSON(rs.responseJSON.GAUCE);
  }
};

//-------------------------------------------------------------------------
//Buying tariffRate 가져오기
//------------------------------------------------------------------------- 	
scwin.f_buyingTariffRateLoading = async function () {
  ds_retrieveTariff.removeAll();
  ds_resultTariff.removeAll();
  var idx = ds_retrieveTariff.insertRow();
  ds_retrieveTariff.setRowPosition(idx);
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "fgubn", '2'); //selling , partner : 1, buying : 2	
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "kcomcd", ds_hidden.get("hd_kcomcd")); //KCOMCD
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "apdt", ica_mhetd.getValue()); //ETD
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "customer", ed_mhactcust.getValue()); //selling,buying : customer, partner:partner		
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "partner", ""); //partner시만 사용			
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "liner", ed_mhlinercd.getValue()); //LINER
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "loading", ed_mhlodcd.getValue()); //LOADING		
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "discharge", ed_mhdisccd.getValue()); //DISCHARGE
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "item", ds_hidden.get("hd_mhitem")); //ITEM
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "cbgubn", "C"); //CONTAINER OR BULK		
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "incoterm", ""); //INCOTERM(bulk시 사용)
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "userid", scwin.userId); //user id
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "dangerous", ds_hidden.get("hd_mhdanggb")); //dangerous
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "commcustomer", ds_hidden.get("hd_commcustomer")); //공통 customer	
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "fcode", ds_buying.getCellData(ds_buying.getRowPosition(), "fareEngCd")); //FCODE
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "currency", ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd")); //CURR
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "funit", ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit")); //TYPE - FUNIT				
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "flag", "2"); //tariff : 1, tariffRate:2
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "transTariffYn", "N"); //TRANS TARIFF YN
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "blNo", ""); //BLNO
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "mhno", ""); //MHNO					

  var rs = await $c.sbm.execute($p, sbm_retrieveTariff);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    if (ds_resultTariff.getRowCount() == "0") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
      return;
    }
    ds_buying.setCellData(ds_buying.getRowPosition(), "pchsUpr", ds_resultTariff.getCellData(ds_retrieveTariff.getRowPosition(), "amount")); //rate	
  }
  ;
};

//-------------------------------------------------------------------------
//Partner unit 가져오기
//------------------------------------------------------------------------- 	
scwin.f_partnerUnitLoading = async function () {
  var cnt1 = "0";
  var cnt2 = "0";
  var cnt3 = "0";
  var cnt4 = "0";
  if (ed_mhcnt1type.getValue() != "" && ed_mhcnt1.getValue() != "0") {
    cnt1 = ed_mhcnt1type.getValue();
  } else {
    cnt1 = "0";
  }
  if (ed_mhcnt2type.getValue() != "" && ed_mhcnt2.getValue() != "0") {
    cnt2 = ed_mhcnt2type.getValue();
  } else {
    cnt2 = "0";
  }
  if (ed_mhcnt3type.getValue() != "" && ed_mhcnt3.getValue() != "0") {
    cnt3 = ed_mhcnt3type.getValue();
  } else {
    cnt3 = "0";
  }
  if (ed_mhcnt4type.getValue() != "" && ed_mhcnt4.getValue() != "0") {
    cnt4 = ed_mhcnt4type.getValue();
  } else {
    cnt4 = "0";
  }
  ds_partnerUnit_search.set("sysCd", "SeaExportHouseEBC");
  ds_partnerUnit_search.set("queryId", "retriveUnitList");
  ds_partnerUnit_search.set("param1", cnt1);
  ds_partnerUnit_search.set("param2", cnt2);
  ds_partnerUnit_search.set("param3", cnt3);
  ds_partnerUnit_search.set("param4", cnt4);
  var rs = await $c.sbm.execute($p, sbm_partnerUnit);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_partnerUnit.setJSON(rs.responseJSON.GAUCE);
  }
};

//-------------------------------------------------------------------------
//Partner tariffRate 가져오기
//------------------------------------------------------------------------- 	
scwin.f_partnerTariffRateLoading = async function () {
  ds_retrieveTariff.removeAll();
  ds_resultTariff.removeAll();
  var idx = ds_retrieveTariff.insertRow();
  ds_retrieveTariff.setRowPosition(idx);
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "fgubn", '3'); //selling , partner : 1, buying : 2	
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "kcomcd", ds_hidden.get("hd_kcomcd")); //KCOMCD
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "apdt", ica_mhetd.getValue()); //ETD
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "customer", ""); //selling,buying : customer, partner:partner		
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "partner", ed_mhccd.getValue()); //partner시만 사용			
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "liner", ""); //LINER
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "loading", ed_mhlodcd.getValue()); //LOADING		
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "discharge", ed_mhdisccd.getValue()); //DISCHARGE
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "item", ds_hidden.get("hd_mhitem")); //ITEM
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "cbgubn", "C"); //CONTAINER OR BULK		
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "incoterm", ""); //INCOTERM(bulk시 사용)
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "userid", scwin.userId); //user id
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "dangerous", ds_hidden.get("hd_mhdanggb")); //dangerous
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "commcustomer", ds_hidden.get("hd_commcustomer")); //공통 customer	
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "fcode", ds_partner.getCellData(ds_partner.getRowPosition(), "fareEngCd")); //FCODE
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "currency", ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd")); //CURR
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "funit", ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit")); //TYPE - FUNIT									
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "flag", "2"); //tariff : 1, tariffRate:2	
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "transTariffYn", "N"); //TRANS TARIFF YN
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "blNo", ""); //BLNO
  ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "mhno", ""); //MHNO				

  var rs = await $c.sbm.execute($p, sbm_retrieveTariff);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    if (ds_resultTariff.getRowCount() == "0") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
      return;
    }
    ds_partner.setCellData(ds_partner.getRowPosition(), "sellUpr", ds_resultTariff.getCellData(ds_retrieveTariff.getRowPosition(), "amount")); //rate	
  }
  ;
};

//-------------------------------------------------------------------------
//Tariff All 가져오기
//------------------------------------------------------------------------- 	
scwin.f_tariffAllLoading = async function () {
  var cnt1 = "0";
  var cnt2 = "0";
  var cnt3 = "0";
  var cnt4 = "0";
  if (ed_mhcnt1type.getValue() != "" && ed_mhcnt1.getValue() != "0") {
    cnt1 = ed_mhcnt1type.getValue();
  } else {
    cnt1 = "0";
  }
  if (ed_mhcnt2type.getValue() != "" && ed_mhcnt2.getValue() != "0") {
    cnt2 = ed_mhcnt2type.getValue();
  } else {
    cnt2 = "0";
  }
  if (ed_mhcnt3type.getValue() != "" && ed_mhcnt3.getValue() != "0") {
    cnt3 = ed_mhcnt3type.getValue();
  } else {
    cnt3 = "0";
  }
  if (ed_mhcnt4type.getValue() != "" && ed_mhcnt4.getValue() != "0") {
    cnt4 = ed_mhcnt4type.getValue();
  } else {
    cnt4 = "0";
  }
  ds_retrieveTariff.removeAll();
  ds_resultTariff.removeAll();
  var idx = ds_retrieveTariff.insertRow();
  ds_retrieveTariff.setRowPosition(idx);
  if (scwin.tabNo == "0") {
    // Buying 
    if (ds_buying.getRowCount() != "0") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Buying Information"]); // @은(는) 필수 입력 항목입니다.
    } else {
      if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "fgubn", '2'); //selling , partner : 1, buying : 2	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "kcomcd", ds_hidden.get("hd_kcomcd")); //KCOMCD
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "apdt", ica_mhetd.getValue()); //ETD
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "customer", ed_mhactcust.getValue()); //selling,buying : customer, partner:partner					
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "partner", ""); //partner시만 사용							
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "liner", ed_mhlinercd.getValue()); //LINER
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "loading", ed_mhlodcd.getValue()); //LOADING			
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "discharge", ed_mhdisccd.getValue()); //DISCHARGE
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "item", ds_hidden.get("hd_mhitem")); //ITEM
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container1", cnt1); //container1
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container2", cnt2); //container2
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container3", cnt3); //container3
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container4", cnt4); //container4
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "cbgubn", "C"); //CONTAINER OR BULK		
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "incoterm", ""); //INCOTERM(bulk시 사용)
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "userid", scwin.userId); //user id
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "dangerous", ds_hidden.get("hd_mhdanggb")); //dangerous
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "commcustomer", ds_hidden.get("hd_commcustomer")); //공통 customer	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "flag", "1"); //tariff : 1, tariffRate:2	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "transTariffYn", "N"); //TRANS TARIFF YN
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "blNo", ""); //BLNO
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "mhno", ""); //MHNO											

        var rs = await $c.sbm.execute($p, sbm_retrieveTariff);
        if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
          if (ds_resultTariff.getRowCount() == "0") {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
            return;
          }
          var checked = 0;
          for (var i = 0; i < ds_resultTariff.getRowCount(); i++) {
            scwin.f_addRow(1); //kcomcd,blno,mhno,orderno,locptncls,mblhblcls,seaaircls,ppcccls,customer,customer name,실적일,inpid
            ds_buying.setCellData(i, "pchsTyp", "1"); //TYPE		            
            ds_buying.setCellData(i, "fareEngCd", ds_resultTariff.getCellData(i, "fareEngCd")); // fareEngCd		
            await scwin.f_PopUpGrid("BuyingFcode", i, "T", "F"); //selpchItemCd,fareGrpCd,vatyn

            ds_buying.setCellData(i, "crcCd", ds_resultTariff.getCellData(i, "crcCd")); //cur
            ds_buying.setCellData(i, "fareUnit", ds_resultTariff.getCellData(i, "fareUnit")); //unit
            scwin.f_packageRateBuyingLoading(i, ""); //package,rate

            ds_buying.setCellData(i, "pchsUpr", ds_resultTariff.getCellData(i, "amount")); //rate	

            scwin.f_buyingAmtFcrc(i, "", ""); //amount(외화)	
            scwin.f_ExRateBuyingGridLoading(); //ex-rate 
            scwin.f_buyingAmt(i, "", ""); //amount(원화)	
            scwin.f_buyingVat(i, "", ""); //vat							
            scwin.f_buyingUsdAmt(i, "", ""); //auount($) 
            checked++;
          }
          // package 0 인것 삭제.	
          for (var i = 0; i < ds_buying.getRowCount(); i++) {
            if (ds_buying.getCellData(i, "chgWt") == "0") {
              ds_buying.removeRow(i);
              checked++;
            }
          }
        }
        ;
      }
    }
  } else if (scwin.tabNo == "1") {
    //partner
    if (ds_partner.getRowCount() != "0") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Partner Information"]); // @은(는) 필수 입력 항목입니다.	
    } else {
      if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "fgubn", '3'); //selling , partner : 1, buying : 2	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "kcomcd", ds_hidden.get("hd_kcomcd")); //KCOMCD
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "apdt", ica_mhetd.getValue()); //ETD
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "customer", ""); //selling,buying : customer, partner:partner					
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "partner", ed_mhccd.getValue()); //partner시만 사용						
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "liner", ""); //LINER
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "loading", ed_mhlodcd.getValue()); //LOADING	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "discharge", ed_mhdisccd.getValue()); //DISCHARGE
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "item", ds_hidden.get("hd_mhitem")); //ITEM
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container1", cnt1); //container1
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container2", cnt2); //container2
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container3", cnt3); //container3
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "container4", cnt4); //container4
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "cbgubn", "C"); //CONTAINER OR BULK		
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "incoterm", ""); //INCOTERM(bulk시 사용)
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "userid", scwin.userId); //user id
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "dangerous", ds_hidden.get("hd_mhdanggb")); //dangerous
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "commcustomer", ds_hidden.get("hd_commcustomer")); //공통 customer	
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "flag", "1"); //tariff : 1, tariffRate:2
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "transTariffYn", "N"); //TRANS TARIFF YN
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "blNo", ""); //BLNO
        ds_retrieveTariff.setCellData(ds_retrieveTariff.getRowPosition(), "mhno", ""); //MHNO										

        var rs = await $c.sbm.execute($p, sbm_retrieveTariff);
        if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
          if (ds_resultTariff.getRowCount() == "0") {
            await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
            return;
          }
          var checked = 0;
          for (var i = 0; i < ds_resultTariff.getRowCount(); i++) {
            scwin.f_addRow(2); //kcomcd,blno,mhno,orderno,locptncls,mblhblcls,seaaircls,ppcccls,customer,customer name,실적일,inpid
            ds_partner.setCellData(i, "fareEngCd", ds_resultTariff.getCellData(i, "fareEngCd")); // fareEngCd
            ds_partner.setCellData(i, "drcrCls", "D"); //d/c
            await scwin.f_PopUpGrid("PartnerFcode", i, "T", "F"); //sellitemcd,faregrpcd,vatyn

            ds_partner.setCellData(i, "crcCd", ds_resultTariff.getCellData(i, "crcCd")); //cur
            ds_partner.setCellData(i, "fareUnit", ds_resultTariff.getCellData(i, "fareUnit")); //unit
            scwin.f_packageRatePartnerLoading(i, ""); //package,rate

            ds_partner.setCellData(i, "sellUpr", ds_resultTariff.getCellData(i, "amount")); //rate	

            await scwin.f_partnerAmtFcrc(i, "", ""); //amount(외화)	
            await scwin.f_ExRatePartnerGridLoading(); //ex-rate 
            await scwin.f_partnerAmt(i, "", ""); //amount(원화)				
            await scwin.f_partnerUsdAmt(i, "", ""); //auount($)
            checked++;
          }
          // package 0 인것 삭제.	
          for (var i = 0; i < ds_partner.getRowCount(); i++) {
            if (ds_partner.getCellData(i, "chgWt") == "0") {
              ds_partner.removeRow(i);
              checked++;
            }
          }
        }
        ;
      }
    }
  }
};

//-------------------------------------------------------------------------
//Customer,Ex-rate Change 가져오기
//------------------------------------------------------------------------- 	
scwin.f_exRateChange = async function () {
  if (scwin.tabNo == "0") {
    // Buying 
    if (ds_buying.getRowCount() == "0") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Buying Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_buying.getRowCount(); i++) {
          ds_buying.setCellData(i, "exRate", ed_mhexrate.getValue()); //ex-rate 
          scwin.f_buyingAmt(i, "", ""); //amount(원화)	
          scwin.f_buyingVat(i, "", ""); //vat							
          scwin.f_buyingUsdAmt(i, "", ""); //auount($) 
        }
      }
    }
  } else if (scwin.tabNo == "1") {
    //partner
    if (ds_partner.getRowCount() == "0") {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Partner Information"]); //  @이(가) 존재하지 않습니다.	
    } else {
      if (await $c.win.confirm($p, E_MSG_CM_CRM_001)) {
        //저장하시겠습니까?	
        for (var i = 0; i < ds_partner.getRowCount(); i++) {
          ds_partner.setCellData(i, "exRate", ed_mhexrate.getValue()); //ex-rate 
          scwin.f_partnerAmt(i, "", ""); //amount(원화)	
          f_partnerVat(i, "", ""); //vat							
          scwin.f_partnerUsdAmt(i, "", ""); //auount($) 
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
//tariff버튼 누르면 grid에 package ,rate계산 (buying)
//------------------------------------------------------------------------- 	
scwin.f_packageRateBuyingLoading = function (row, colid) {
  var v_wgt = parseFloat(ed_mhwgt.getValue()) / 1000;
  var v_msr = parseFloat(ed_mhmsr.getValue());
  var v_wgtR = Math.ceil(v_wgt);
  var v_msrR = Math.ceil(v_msr);
  var wgt = 0;
  var msr = 0;
  if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareEngCd") == "WFG") {
    wgt = v_wgtR;
    msr = v_msrR;
  } else {
    wgt = v_wgt;
    msr = v_msr;
  }
  if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == "WGT" || ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == "M/T") {
    //ds_buying.getCellData(ds_buying.getRowPosition(),"chgWt", ed_mhwgt.getValue();
    if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareEngCd") == "WFG") {
      ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", Math.ceil(parseFloat(ed_mhwgt.getValue())));
    } else {
      ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", ed_mhwgt.getValue());
    }
  } else if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == "R/T") {
    if (v_wgt > v_msr) {
      ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", wgt);
    } else {
      ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", msr);
    }
  } else if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == "CBM") {
    ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", msr);
  } else if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == "CASE") {
    ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", "1");
  } else {
    if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == ed_mhcnt1type.getValue()) {
      ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", ed_mhcnt1.getValue());
    } else if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == ed_mhcnt2type.getValue()) {
      ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", ed_mhcnt2.getValue());
    } else if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == ed_mhcnt3type.getValue()) {
      ds_buying.setCellData(ds_buying.getRowPosition(), "chgWt", ed_mhcnt3.getValue());
    } else if (ds_buying.getCellData(ds_buying.getRowPosition(), "fareUnit") == ed_mhcnt4type.getValue()) {
      ds_buying.setCellData(ds_buying.getRowPosition(), " chgWt", ed_mhcnt4.getValue());
    }
  }
};

//-------------------------------------------------------------------------
//tariff버튼 누르면 grid에 package ,rate계산 (Partner)
//------------------------------------------------------------------------- 	
scwin.f_packageRatePartnerLoading = function (row, colid) {
  var v_wgt = parseFloat(ed_mhwgt.getValue()) / 1000;
  var v_msr = parseFloat(ed_mhmsr.getValue());
  var v_wgtR = Math.ceil(v_wgt);
  var v_msrR = Math.ceil(v_msr);
  var wgt = 0;
  var msr = 0;
  if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareEngCd") == "WFG") {
    wgt = v_wgtR;
    msr = v_msrR;
  } else {
    wgt = v_wgt;
    msr = v_msr;
  }
  if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == "WGT" || ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == "M/T") {
    //ds_partner.getCellData(ds_partner.getRowPosition(),"chgWt", ed_mhwgt.getValue();
    if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareEngCd") == "WFG") {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", Math.ceil(parseFloat(ed_mhwgt.getValue())));
    } else {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", ed_mhwgt.getValue());
    }
  } else if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == "R/T") {
    if (v_wgt > v_msr) {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", wgt);
    } else {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", msr);
    }
  } else if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == "CBM") {
    ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", msr);
  } else if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == "CASE") {
    ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", "1");
  } else {
    if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == ed_mhcnt1type.getValue()) {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", ed_mhcnt1.getValue());
    } else if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == ed_mhcnt2type.getValue()) {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", ed_mhcnt2.getValue());
    } else if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == ed_mhcnt3type.getValue()) {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", ed_mhcnt3.getValue());
    } else if (ds_partner.getCellData(ds_partner.getRowPosition(), "fareUnit") == ed_mhcnt4type.getValue()) {
      ds_partner.setCellData(ds_partner.getRowPosition(), "chgWt", ed_mhcnt4.getValue());
    }
  }
};

//-------------------------------------------------------------------------
//Amount(외화) -- Buying
//------------------------------------------------------------------------- 	
scwin.f_buyingAmtFcrc = async function (Row, Colid, olddata) {
  if (ds_buying.getCellData(Row, "crcCd") == "KRW") {
    ds_buying.setCellData(Row, "pchsAmtFcrc", "0");
  } else {
    ds_buying.setCellData(Row, "pchsAmtFcrc", Math.round(ds_buying.getCellData(Row, "chgWt") * ds_buying.getCellData(Row, "pchsUpr") * 100) / 100);
  }
  scwin.f_BuyingSum();
};

//-------------------------------------------------------------------------
//Amount(외화) -- Partner
//------------------------------------------------------------------------- 	
scwin.f_partnerAmtFcrc = async function (Row, Colid, olddata) {
  if (ds_partner.getCellData(Row, "crcCd") == "KRW") {
    ds_partner.setCellData(Row, "sellAmtFcrc", "0");
  } else {
    ds_partner.setCellData(Row, "sellAmtFcrc", Math.round(ds_partner.getCellData(Row, "chgWt") * ds_partner.getCellData(Row, "sellUpr") * 100) / 100);
  }
  scwin.f_PartnerSum();
};

//-------------------------------------------------------------------------
//Amount(원화) -- buying
//------------------------------------------------------------------------- 	
scwin.f_buyingAmt = async function (Row, Colid, olddata) {
  if (ds_buying.getCellData(Row, "crcCd") == "KRW") {
    ds_buying.setCellData(Row, "pchsAmt", Math.round(ds_buying.getCellData(Row, "chgWt") * ds_buying.getCellData(Row, "pchsUpr")));
  } else {
    ds_buying.setCellData(Row, "pchsAmt", Math.round(ds_buying.getCellData(Row, "pchsAmtFcrc") * ds_buying.getCellData(Row, "exRate")));
  }
  scwin.f_BuyingSum();
};

//-------------------------------------------------------------------------
//Amount(원화) -- partner
//------------------------------------------------------------------------- 	
scwin.f_partnerAmt = async function (Row, Colid, olddata) {
  if (ds_partner.getCellData(Row, "crcCd") == "KRW") {
    ds_partner.setCellData(Row, "sellAmt", Math.round(ds_partner.getCellData(Row, "chgWt") * ds_partner.getCellData(Row, "sellUpr")));
  } else {
    ds_partner.setCellData(Row, "sellAmt", Math.round(ds_partner.getCellData(Row, "sellAmtFcrc") * ds_partner.getCellData(Row, "exRate")));
  }
  scwin.f_PartnerSum();
};

//-------------------------------------------------------------------------
//Amount($) -- Buying
//------------------------------------------------------------------------- 	
scwin.f_buyingUsdAmt = async function (Row, Colid, olddata) {
  if (ed_mhusdrate.getValue() != "0" && ed_mhusdrate.getValue() != "") {
    ds_buying.setCellData(Row, "usdAmt", Math.round(ds_buying.getCellData(Row, "pchsAmt") / ed_mhusdrate.getValue() * 100) / 100);
  }
};

//-------------------------------------------------------------------------
//Amount($) -- Partner
//------------------------------------------------------------------------- 	
scwin.f_partnerUsdAmt = async function (Row, Colid, olddata) {
  if (ed_mhusdrate.getValue() != "0" && ed_mhusdrate.getValue() != "") {
    ds_partner.setCellData(Row, "usdAmt", Math.round(ds_partner.getCellData(Row, "sellAmt") / ed_mhusdrate.getValue() * 100) / 100);
  }
};

//-------------------------------------------------------------------------
//Vat -- Buying
//------------------------------------------------------------------------- 	
scwin.f_buyingVat = async function (Row, Colid, olddata) {
  if (ds_buying.getCellData(Row, "vatYn") == "0") {
    ds_buying.setCellData(Row, "vat", "0");
  } else {
    ds_buying.setCellData(Row, "vat", Math.round(ds_buying.getCellData(Row, "pchsAmt") * 0.1 * 100) / 100);
  }
  scwin.f_BuyingSum();
};

//-------------------------------------------------------------------------
//INVOICE NO 유무
//------------------------------------------------------------------------- 	
scwin.f_invoiceCheck = async function () {
  //House Invoice check	
  var strClntNo = "";
  scwin.invoiceCheck = "0"; // 초기화.
  strClntNo = ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "odrNo");
  param1 = strClntNo;
  ds_invoiceCheck_search.set("sysCd", "SeaExportHouseEBC");
  ds_invoiceCheck_search.set("queryId", "retriveInvoiceCheckCombo");
  ds_invoiceCheck_search.set("param1", param1);
  var rs = await $c.sbm.execute($p, sbm_invoiceCheck);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_invoiceCheck.setJSON(rs.responseJSON.GAUCE);
    if (ds_invoiceCheck.getRowCount() > 0) ds_invoiceCheck.setRowPosition(0);
    if (ds_invoiceCheck.getCellData(ds_invoiceCheck.getRowPosition(), "code") != "0") {
      scwin.invoiceCheck = "1";
    }
  }
};

//-------------------------------------------------------------------------
//Buying sum
//------------------------------------------------------------------------- 	
scwin.f_BuyingSum = function () {
  var checked = 0;
  var v_BuyingSumAmount = 0;
  var v_BuyingSumAmountW = 0;
  var v_BuyingSumVat = 0;
  var v_BuyingSumAmountUs = 0;
  var v_BuyingAmountSum = 0;
  for (var i = 0; i < ds_buying.getRowCount(); i++) {
    if (ds_buying.getRowStatus(i) != "D") {
      v_BuyingSumAmount = v_BuyingSumAmount + parseFloat(ds_buying.getCellData(i, "pchsAmtFcrc"));
      v_BuyingSumAmountW = v_BuyingSumAmountW + parseFloat(ds_buying.getCellData(i, "pchsAmt"));
      v_BuyingSumVat = v_BuyingSumVat + parseFloat(ds_buying.getCellData(i, "vat"));
      v_BuyingSumAmountUs = v_BuyingSumAmountUs + parseFloat(ds_buying.getCellData(i, "usdAmt"));
    }
    checked++;
  }
  ed_BuyingSumAmount.setValue(v_BuyingSumAmount);
  ed_BuyingSumAmountW.setValue(v_BuyingSumAmountW);
  ed_BuyingSumVat.setValue(v_BuyingSumVat);
  v_BuyingAmountSum = v_BuyingSumAmountW + v_BuyingSumVat;
  ed_BuyingAmountSum.setValue(v_BuyingAmountSum);
};

//-------------------------------------------------------------------------
//Partner sum
//------------------------------------------------------------------------- 	
scwin.f_PartnerSum = function () {
  var checked = 0;
  var v_PartnerSumAmount = 0;
  var v_PartnerSumAmountW = 0;
  var v_PartnerSumAmountUs = 0;
  for (var i = 0; i < ds_partner.getRowCount(); i++) {
    if (ds_partner.getRowStatus(i) != "2") {
      v_PartnerSumAmount = v_PartnerSumAmount + parseFloat(ds_partner.getCellData(i, "sellAmtFcrc"));
      v_PartnerSumAmountW = v_PartnerSumAmountW + parseFloat(ds_partner.getCellData(i, "sellAmt"));
      v_PartnerSumAmountUs = v_PartnerSumAmountUs + parseFloat(ds_partner.getCellData(i, "usdAmt"));
    }
    checked++;
  }
  ed_PartnerSumAmount.setValue(v_PartnerSumAmount);
  ed_PartnerSumAmountW.setValue(v_PartnerSumAmountW);
};

//-------------------------------------------------------------------------
//BuyingDept 가져오기
//------------------------------------------------------------------------- 	
scwin.f_BuyingDeptLoading = async function (Row) {
  // Master B/L	: SBE08010003,SBE08020001,SBE08010011
  var param1 = "";
  var param2 = "";
  var v_value = "";
  param1 = acb_mhno.getValue();
  ds_buyingDept_search.set("sysCd", "SeaExportMasterEBC");
  ds_buyingDept_search.set("queryId", "retriveBuyingDeptMasterListCombo");
  ds_buyingDept_search.set("param1", param1);
  var rs = await $c.sbm.execute($p, sbm_buyingDept);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_buyingDept.setJSON(rs.responseJSON.GAUCE);
    v_value = ds_buyingDept.getCellData(0, "code");
    ds_buying.setCellData(Row, "sellDeptCd", v_value);
    gr_buying.setFocusedCell(Row, "sellDeptCd");
    gr_buying.setFocusedCell(Row, "crcCd");
  }
};

//-------------------------------------------------------------------------
// ed_hhblno 가져오기
//------------------------------------------------------------------------- 	
scwin.f_CndMhmblnoLoading = async function () {
  var strClntNo = ed_mhmblno.getValue();
  var param1 = ds_hidden.get("hd_kcomcd");
  var param2 = strClntNo;
  ds_cndmhmblno_search.set("sysCd", "SeaExportMasterEBC");
  ds_cndmhmblno_search.set("queryId", "retriveMasterBlListCombo");
  ds_cndmhmblno_search.set("param1", param1);
  ds_cndmhmblno_search.set("param2", param2);
  var rs = await $c.sbm.execute($p, sbm_cndmhmblno);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_cndmhmblno.setJSON(rs.responseJSON.GAUCE);
    if (ds_cndmhmblno.getRowCount() == 0) {
      ds_hmhno.removeAll();
      var idx = ds_hmhno.insertRow();
      ds_hmhno.setRowPosition(idx);
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "code", "NONE");
      ds_hmhno.setCellData(ds_hmhno.getRowPosition(), "name", "NONE");
      acb_mhno.setSelectedIndex(0);
    } else {
      ds_hmhno.removeAll();
      for (var i = 0; i < ds_cndmhmblno.getRowCount(); i++) {
        var idx = ds_hmhno.insertRow();
        ds_hmhno.setCellData(i, "code", ds_cndmhmblno.getCellData(i, "code"));
        ds_hmhno.setCellData(i, "name", ds_cndmhmblno.getCellData(i, "name"));
      }
      acb_mhno.setSelectedIndex(0);
    }
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_1_onclick = function (e) {
  scwin.f_tariffAllLoading();
};
scwin.btn_2_onclick = function (e) {
  scwin.f_exRateChange();
};
scwin.btn_mhcnt1type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType1', 'F', 'F', 'F');
};
scwin.btn_mhcnt2type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType2', 'F', 'F', 'F');
};
scwin.btn_mhcnt3type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType3', 'F', 'F', 'F');
};
scwin.btn_mhcnt4type_onclick = function (e) {
  scwin.f_OpenCommonPopUp('ContainerType4', 'F', 'F', 'F');
};
scwin.btn_mhlodcd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};
scwin.btn_mhdisccd_onclick = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};
scwin.btn_mhccd_onclick = function (e) {
  scwin.f_PopUp('Partner', 'F');
};
scwin.btn_mhactcust_onclick = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
scwin.btn_mhlinercd_onclick = function (e) {
  scwin.f_PopUp('Liner', 'F');
};
scwin.bottom_cancel1 = function () {
  scwin.f_CancelRow(1);
};
scwin.bottom_addRow1 = function () {
  scwin.f_addRow(1);
};
scwin.bottom_delRow1 = function () {
  scwin.f_DeleteRow(1);
};
scwin.bottom_cancel2 = function () {
  scwin.f_CancelRow(2);
};
scwin.bottom_addRow2 = function () {
  scwin.f_addRow(2);
};
scwin.bottom_delRow2 = function () {
  scwin.f_DeleteRow(2);
};
scwin.btn_3_onclick = function (e) {
  scwin.f_openPgm('Partner');
};
scwin.btn_4_onclick = function (e) {
  scwin.f_openPgm('Profit');
};
scwin.btn_5_onclick = function (e) {
  scwin.f_openPgm('paymentINV');
};
scwin.btn_6_onclick = function (e) {
  scwin.f_openPgm('MasterBLFind');
};
scwin.btn_7_onclick = function (e) {
  scwin.f_openPgm('MasterBLHeader');
};
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
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
scwin.sbm_retrieve_submit = function (e) {
  // ds_retrieve.set("hhblno", ed_hhblno.getValue());
  ds_retrieve.set("mhmblno", ed_mhmblno.getValue());
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_masterblList.getRowCount() > 0) {
    ds_masterblList.setRowPosition(0);

    // acb_mhno.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhno"));
    // ed_mhmblno.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhmblno"));
    // ed_mhcur.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcur"));
    // acb_mexgb.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mexgb"));
    // ica_mhcurdt.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcurdt"));
    // ed_mhexrate.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhexrate"));
    // ed_mhusdrate.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhusdrate"));
    // ed_mhcnt1type.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt1type"));
    // ed_mhcnt2type.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt2type"));
    // ed_mhcnt3type.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt3type"));
    // ed_mhcnt4type.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt4type"));
    // ed_mhwgt.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhwgt"));
    // ed_mhcnt1.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt1"));
    // ed_mhcnt2.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt2"));
    // ed_mhcnt3.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt3"));
    // ed_mhcnt4.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnt4"));
    // ed_mhmsr.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhmsr"));
    // ed_mhlodcd.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhlodcd"));
    // ed_mhdisccd.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhdisccd"));
    // ed_mhccd.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhccd"));
    // ed_mhlinercd.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhlinercd"));
    // ica_mhetd.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhetd"));
    // ed_mhactcust.setValue(ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhactcust"));
    ds_hidden.set("hd_mhio", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhio"));
    ds_hidden.set("txt_mhlodnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhlodnm"));
    ds_hidden.set("txt_mhdiscnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhdiscnm"));
    ds_hidden.set("txt_mhcnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcnm"));
    ds_hidden.set("txt_mhlinernm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhlinernm"));
    ds_hidden.set("hd_mhcrdt", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcrdt"));
    ds_hidden.set("txt_inpid", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "inpid"));
    ds_hidden.set("txt_inpdt", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "inpdt"));
    ds_hidden.set("txt_updid", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "updid"));
    ds_hidden.set("txt_upddt", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "upddt"));
    ds_hidden.set("txt_odrNo", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "odrNo"));
    ds_hidden.set("hd_mhitem", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhitem"));
    ds_hidden.set("hd_mhdanggb", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhdanggb"));
    ds_hidden.set("txt_mhactcustnm", ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhactcustnm"));
    scwin.ed_mhcnt1type = ed_mhcnt1type.getValue();
    scwin.ed_mhcnt2type = ed_mhcnt2type.getValue();
    scwin.ed_mhcnt3type = ed_mhcnt3type.getValue();
    scwin.ed_mhcnt4type = ed_mhcnt4type.getValue();
    scwin.ed_mhlodcd = ed_mhlodcd.getValue();
    scwin.ed_mhdisccd = ed_mhdisccd.getValue();
    scwin.ed_mhccd = ed_mhccd.getValue();
    scwin.ed_mhactcust = ed_mhactcust.getValue();
    scwin.ed_mhlinercd = ed_mhlinercd.getValue();
  }
  if (ds_masterblList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.  
    scwin.f_Set("INIT");
    scwin.f_Check(); // Object Check			
  } else {
    scwin.f_invoiceCheck(); // invoice Check		
    scwin.f_Set("RETRIEVE");
    scwin.f_BuyingSum();
    scwin.f_PartnerSum();
  }

  // ds_masterblList event=OnLoadCompleted(rowcnt)
  if (ds_masterblList.getRowCount() > 0 && ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhexrate") != "0") {
    scwin.exRate1 = ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhexrate");
    scwin.crc = ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhcur");
    scwin.exRateCheck = "3";
  }
  if (ds_masterblList.getRowCount() > 0 && ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhusdrate") != "0") {
    scwin.exRate2 = ds_masterblList.getCellData(ds_masterblList.getRowPosition(), "mhusdrate");
  }
  scwin.setSeqGrid(1);
  scwin.setSeqGrid(2);
  ds_buying.initRowStatus();
  ds_partner.initRowStatus();
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_save_submit = function (e) {
  // ds_masterblList.removeAll();

  // ds_hidden.set("hd_mhio", "");
  // ds_hidden.set("txt_mhlodnm", "");
  // ds_hidden.set("txt_mhdiscnm", "");
  // ds_hidden.set("txt_mhcnm", "");
  // ds_hidden.set("txt_mhlinernm", "");
  // ds_hidden.set("hd_mhcrdt", "");
  // ds_hidden.set("txt_inpid", "");
  // ds_hidden.set("txt_inpdt", "");
  // ds_hidden.set("txt_updid", "");
  // ds_hidden.set("txt_upddt", "");
  // ds_hidden.set("txt_odrNo", "");
  // ds_hidden.set("hd_mhitem", "");
  // ds_hidden.set("hd_mhdanggb", "");
  // ds_hidden.set("txt_mhactcustnm", "");

  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhno", acb_mhno.getValue());
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhio", ds_hidden.get("hd_mhio"));
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhmblno", ed_mhmblno.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcur", ed_mhcur.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mexgb", acb_mexgb.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcurdt", ica_mhcurdt.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhexrate", ed_mhexrate.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhusdrate", ed_mhusdrate.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt1type", ed_mhcnt1type.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt2type", ed_mhcnt2type.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt3type", ed_mhcnt3type.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt4type", ed_mhcnt4type.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhwgt", ed_mhwgt.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt1", ed_mhcnt1.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt2", ed_mhcnt2.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt3", ed_mhcnt3.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnt4", ed_mhcnt4.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhmsr", ed_mhmsr.getValue());
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhlodcd", ed_mhlodcd.getValue());
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhlodnm", ds_hidden.get("txt_mhlodnm"));
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhdisccd", ed_mhdisccd.getValue());
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhdiscnm", ds_hidden.get("txt_mhdiscnm"));
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhccd", ed_mhccd.getValue());
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcnm", ds_hidden.get("txt_mhcnm"));
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhlinercd", ed_mhlinercd.getValue());
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhlinernm", ds_hidden.get("txt_mhlinernm"));
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhcrdt", ds_hidden.get("hd_mhcrdt"));
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhetd", ica_mhetd.getValue());
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "inpid", ds_hidden.get("txt_inpid"));
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "inpdt", ds_hidden.get("txt_inpdt"));
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "updid", ds_hidden.get("txt_updid"));
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "upddt", ds_hidden.get("txt_upddt"));
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "odrNo", ds_hidden.get("txt_odrNo"));
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhitem", ds_hidden.get("hd_mhitem"));
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhdanggb", ds_hidden.get("hd_mhdanggb"));
  // ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhactcust", ed_mhactcust.getValue());
  ds_masterblList.setCellData(ds_masterblList.getRowPosition(), "mhactcustnm", ds_hidden.get("txt_mhactcustnm"));
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_001); //  성공적으로 저장하였습니다.
    $c.gus.cfEnableObj($p, ed_hhblno, true);
    $c.gus.cfEnableObj($p, acb_mhno, true);
    scwin.f_Retrieve();
    scwin.f_Set("SAVE");
  }
};
scwin.sbm_save_submiterror = function (e) {};
scwin.sbm_delete_submit = function (e) {};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_004); // 성공적으로 삭제하였습니다.

  // dataset초기화	
  ds_buying.removeAll();
  ds_partner.removeAll();

  //cmd anable        	
  $c.gus.cfEnableObj($p, ed_hhblno, true);
  $c.gus.cfEnableObj($p, acb_mhno, true);
  ed_hhblno.focus();
  scwin.f_Set("INIT");
};
scwin.sbm_delete_submiterror = function (e) {};
scwin.sbm_retrieveTariff_submit = function (e) {};
scwin.sbm_retrieveTariff_submitdone = function (e) {};
scwin.sbm_retrieveTariff_submiterror = function (e) {};
scwin.ica_mhcurdt_onviewchange = function (info) {
  if (ica_mhcurdt.getValue() != "") {
    scwin.f_ExRateMasterLoading();
  }
};
scwin.ed_mhcnt1type_onblur = async function (e) {
  var strClntNo = ed_mhcnt1type.getValue();
  if (scwin.ed_mhcnt1type != strClntNo) {
    scwin.ed_mhcnt1type = "";
    if (!strClntNo.length > 0) return;
    scwin.f_OpenCommonPopUp("ContainerType1", "T", "F", "F");
  }
};
scwin.ed_mhcnt2type_onblur = async function (e) {
  var strClntNo = ed_mhcnt2type.getValue();
  if (scwin.ed_mhcnt2type != strClntNo) {
    scwin.ed_mhcnt2type = "";
    if (!strClntNo.length > 0) return;
    scwin.f_OpenCommonPopUp("ContainerType2", "T", "F", "F");
  }
};
scwin.ed_mhcnt3type_onblur = async function (e) {
  var strClntNo = ed_mhcnt3type.getValue();
  if (scwin.ed_mhcnt3type != strClntNo) {
    scwin.ed_mhcnt3type = "";
    if (!strClntNo.length > 0) return;
    scwin.f_OpenCommonPopUp("ContainerType3", "T", "F", "F");
  }
};
scwin.ed_mhcnt4type_onblur = async function (e) {
  var strClntNo = ed_mhcnt4type.getValue();
  if (scwin.ed_mhcnt4type != strClntNo) {
    scwin.ed_mhcnt4type = "";
    if (!strClntNo.length > 0) return;
    scwin.f_OpenCommonPopUp("ContainerType4", "T", "F", "F");
  }
};
scwin.ed_hhblno_onblur = function (e) {
  if (ed_hhblno.getValue() != "") {
    scwin.f_MhnoLoading();
    ed_mhmblno.setValue("");
  }
};
scwin.ed_mhmblno_onblur = function (e) {
  if (scwin.statusFlag != "C" && scwin.statusFlag != "U") {
    // 신규시,수정시  제외
    if (ed_mhmblno.getValue() != "") {
      scwin.f_CndMhmblnoLoading();
      ed_hhblno.setValue("");
    }
  }
};
scwin.ed_mhlodcd_onblur = function (e) {
  var strClntNo = ed_mhlodcd.getValue();
  if (scwin.ed_mhlodcd != strClntNo) {
    scwin.ed_mhlodcd = "";
    if (!strClntNo.length > 0) return;
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  }
};
scwin.ed_mhdisccd_onblur = function (e) {
  var strClntNo = ed_mhdisccd.getValue();
  if (scwin.ed_mhdisccd != strClntNo) {
    scwin.ed_mhdisccd = "";
    if (!strClntNo.length > 0) return;
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  }
};
scwin.ed_mhccd_onblur = function (e) {
  var strClntNo = ed_mhccd.getValue();
  if (scwin.ed_mhccd != strClntNo) {
    scwin.ed_mhccd = "";
    if (!strClntNo.length > 0) return;
    scwin.f_PopUp('Partner', 'T');
  }
};
scwin.ed_mhactcust_onblur = function (e) {
  var strClntNo = ed_mhactcust.getValue();
  if (scwin.ed_mhactcust != strClntNo) {
    scwin.ed_mhactcust = "";
    if (!strClntNo.length > 0) return;
    scwin.f_PopUp('Customer', 'T');
  }
};
scwin.ed_mhlinercd_onblur = function (e) {
  var strClntNo = ed_mhlinercd.getValue();
  if (scwin.ed_mhlinercd != strClntNo) {
    scwin.ed_mhlinercd = "";
    if (!strClntNo.length > 0) return;
    scwin.f_PopUp('Liner', 'T');
  }
};
scwin.ed_mhexrate_onblur = function (e) {
  if (scwin.exRateCheck == "1") {
    if (ed_mhusdrate.getValue() == "" || ed_mhusdrate.getValue() == "0") {
      ed_mhusdrate.setValue(ed_mhexrate.getValue());
    }
    scwin.exRate1 = ed_mhexrate.getValue();
    scwin.crc = ed_mhcur.getValue();
  }
};
scwin.ed_mhusdrate_onblur = function (e) {
  if (scwin.exRateCheck == "1") {
    scwin.exRate2 = ed_mhusdrate.getValue();
  }
};

//-------------------------------------------------------------------------
// function	name : scwin.f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = async function (disGubun, Row, pWinCloseTF, pAllSearchTF) {
  // 선언부
  var rtnList;
  var pCode = "";
  var pName = "";
  var code = "";
  var name = "";
  switch (disGubun) {
    case "BuyingCustomer":
      code = ds_buying.getCellData(Row, "pchsClntNo");
      name = ds_buying.getCellData(Row, "pchsClntNm");
      ds_buying.setCellData(Row, "pchsClntNo", "");
      ds_buying.setCellData(Row, "pchsClntNm", "");
      udc_popupCom.setSelectId('retrieveEngClntInfo');
      udc_popupCom.ilCommonPopUp(async function (ref) {
        // $c.gus.cfSetGridReturnValue(ref, ds_buying, Row, "pchsClntNo", "pchsClntNm");
        if (ref[0] == "N/A") {
          ds_buying.setCellData(Row, "pchsClntNo", "");
          ds_buying.setCellData(Row, "pchsClntNm", "");
        } else {
          ds_buying.setCellData(Row, "pchsClntNo", ref[0]);
          ds_buying.setCellData(Row, "pchsClntNm", ref[1]);
        }
      }, code //코드
      , name //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '10' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
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
      , 'Partner search,Partner Code,Partner Name' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "BuyingFcode":
      code = ds_buying.getCellData(Row, "fareEngCd");
      name = ds_buying.getCellData(Row, "fareEngNm");
      ds_buying.setCellData(Row, "fareEngCd", "");
      ds_buying.setCellData(Row, "fareEngNm", "");
      udc_popupCom.setSelectId('retriveFreightCodeInfo');
      await udc_popupCom.ilCommonPopUp(async function (ref) {
        // $c.gus.cfSetGridReturnValue(ref, ds_buying, Row, "fareEngCd", "fareEngNm");
        if (ref[0] == "N/A") {
          ds_buying.setCellData(Row, "fareEngCd", "");
          ds_buying.setCellData(Row, "fareEngNm", "");
        } else {
          ds_buying.setCellData(Row, "fareEngCd", ref[0]);
          ds_buying.setCellData(Row, "fareEngNm", ref[1]);
        }
        ds_buying.setCellData(Row, "selpchItemCd", ref[3]);
        ds_buying.setCellData(Row, "fareGrpCd", ref[5]);
        ds_buying.setCellData(Row, "vatYn", ref[7]);
        ds_buying.setCellData(Row, "vehclYn", ref[8]);
        if (ref[9] == "1") {
          //원화.
          ds_buying.setCellData(Row, "crcCd", "KRW");
        } else {
          ds_buying.setCellData(Row, "crcCd", ed_mhcur.getValue());
        }
        if (ds_buying.getCellData(Row, "fareEngCd") == "OCF") {
          ds_buying.setCellData(Row, "crcCd", "USD");
        }
      }, code //코드
      , name //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , "S,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "FCode,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "BuyingDept":
      code = ds_buying.getCellData(Row, "sellDeptCd");
      name = ds_buying.getCellData(Row, "sellDeptNm");
      ds_buying.setCellData(Row, "sellDeptCd", "");
      ds_buying.setCellData(Row, "sellDeptNm", "");
      udc_popupCom.setSelectId('retrieveOpDeptCdInfo');
      udc_popupCom.ilCommonPopUp(async function (ref) {
        // $c.gus.cfSetGridReturnValue(ref, ds_buying, Row, "sellDeptCd", "sellDeptNm");	
        if (ref[0] == "N/A") {
          ds_buying.setCellData(Row, "sellDeptCd", "");
          ds_buying.setCellData(Row, "sellDeptNm", "");
        } else {
          ds_buying.setCellData(Row, "sellDeptCd", ref[0]);
          ds_buying.setCellData(Row, "sellDeptNm", ref[1]);
        }
      }, code //코드
      , name //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
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
    case "PartnerCustomer":
      code = ds_buying.getCellData(Row, "bilgClntNo");
      name = ds_buying.getCellData(Row, "bilgClntNm");
      ds_buying.setCellData(Row, "bilgClntNo", "");
      ds_buying.setCellData(Row, "bilgClntNm", "");
      udc_popupCom.setSelectId('retrieveEngClntInfo');
      udc_popupCom.ilCommonPopUp(async function (ref) {
        // $c.gus.cfSetGridReturnValue(ref, ds_partner, Row, "bilgClntNo", "bilgClntNm");
        if (ref[0] == "N/A") {
          ds_partner.setCellData(Row, "bilgClntNo", "");
          ds_partner.setCellData(Row, "bilgClntNm", "");
        } else {
          ds_partner.setCellData(Row, "bilgClntNo", ref[0]);
          ds_partner.setCellData(Row, "bilgClntNm", ref[1]);
        }
      }, code //코드
      , name //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '10' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
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
      , 'Partner search,Partner Code,Partner Name' // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "PartnerFcode":
      if (ds_partner.getCellData(Row, "drcrCls") == "D") {
        code = ds_buying.getCellData(Row, "fareEngCd");
        name = ds_buying.getCellData(Row, "fareEngNm");
        ds_buying.setCellData(Row, "fareEngCd", "");
        ds_buying.setCellData(Row, "fareEngNm", "");
        udc_popupCom.setSelectId('retriveFreightCodeInfo');
        udc_popupCom.ilCommonPopUp(async function (ref) {
          // $c.gus.cfSetGridReturnValue(ref, ds_partner, Row, "fareEngCd", "fareEngNm");
          if (ref[0] == "N/A") {
            ds_partner.setCellData(Row, "fareEngCd", "");
            ds_partner.setCellData(Row, "fareEngNm", "");
          } else {
            ds_partner.setCellData(Row, "fareEngCd", ref[0]);
            ds_partner.setCellData(Row, "fareEngNm", ref[1]);
          }
          ds_partner.setCellData(Row, "sellItemCd", ref[3]);
          ds_partner.setCellData(Row, "fareGrpCd", ref[5]);
          ds_partner.setCellData(Row, "vatYn", ref[7]);
          ds_partner.setCellData(Row, "vehclYn", ref[8]);
          ds_partner.setCellData(Row, "crcCd", "USD");
        }, code //코드
        , name //코드명
        , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
        , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , "Code, Name" // Title순서
        , '80,230' // 보여주는	각 컬럼들의	폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , "S,0,1" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때	원도우의	사용자 정의	폭
        , null // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , "FCode,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
      } else if (ds_partner.getCellData(Row, "drcrCls") == "C") {
        code = ds_buying.getCellData(Row, "fareEngCd");
        name = ds_buying.getCellData(Row, "fareEngNm");
        ds_buying.setCellData(Row, "fareEngCd", "");
        ds_buying.setCellData(Row, "fareEngNm", "");
        udc_popupCom.setSelectId('retriveFreightCodeInfo');
        udc_popupCom.ilCommonPopUp(async function (ref) {
          // $c.gus.cfSetGridReturnValue(ref, ds_partner, Row, "fareEngCd", "fareEngNm");	
          if (ref[0] == "N/A") {
            ds_partner.setCellData(Row, "fareEngCd", "");
            ds_partner.setCellData(Row, "fareEngNm", "");
          } else {
            ds_partner.setCellData(Row, "fareEngCd", ref[0]);
            ds_partner.setCellData(Row, "fareEngNm", ref[1]);
          }
          ds_partner.setCellData(Row, "sellItemCd", ref[3]);
          ds_partner.setCellData(Row, "fareGrpCd", ref[5]);
          ds_partner.setCellData(Row, "vatYn", ref[7]);
          ds_partner.setCellData(Row, "vehclYn", ref[8]);
          ds_partner.setCellData(Row, "crcCd", "USD");
        }, code //코드
        , name //코드명
        , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
        , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
        , "Code, Name" // Title순서
        , '80,230' // 보여주는	각 컬럼들의	폭
        , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
        , "S,0,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때	원도우의	사용자 정의	폭
        , null // POP-UP뛰을때	우도우의	사용자 정의	높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearchTF // 전체검색허용여부	("F")
        , "FCode,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
        );
      }
      break;
  }
};
scwin.gr_buying_ontextimageclick = function (Row, columnIndex) {
  var Colid = gr_buying.getColumnID(columnIndex);
  switch (Colid) {
    case "pchsClntNo":
      scwin.f_PopUpGrid("BuyingCustomer", Row, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid("BuyingFcode", Row, "F", "F", "F");
      break;
    case "sellDeptCd":
      scwin.f_PopUpGrid("BuyingDept", Row, "F", "F", "F");
      break;
    // case "rsltsStdDt" :	
    // 	cfOpenCalendar(gr_buying, Row, Colid);
    // 	break;							
    default:
      break;
  }
};
scwin.gr_buying_onviewchange = async function (info) {
  var Row = info.rowIndex;
  var Colid = info.colId;
  var colid = info.colId;
  var olddata = info.oldValue;
  var code = "";
  var name = "";

  // gr_buying event=OnExit(Row,Colid,olddata) 팝업후처리에 넣을지고민
  if (ds_buying.getRowCount() > Row) {
    switch (Colid) {
      case "pchsClntNo":
        if (ds_buying.getCellData(Row, Colid).trim() != "") {
          ds_buying.setCellData(Row, "pchsClntNm", "");
          await scwin.f_PopUpGrid("BuyingCustomer", Row, "T", "F", "F");
        } else if (ds_buying.getCellData(Row, Colid).trim() == "") {
          ds_buying.setCellData(Row, "pchsClntNo", "");
          ds_buying.setCellData(Row, "pchsClntNm", "");
        }
        break;
      case "fareEngCd":
        if (ds_buying.getCellData(Row, Colid).trim() != "") {
          ds_buying.setCellData(Row, "fareEngNm", "");

          // await scwin.f_PopUpGrid("BuyingFcode", Row,"T","F","F");
          var pWinCloseTF = "T";
          var pAllSearchTF = "F";
          code = ds_buying.getCellData(Row, "fareEngCd");
          name = ds_buying.getCellData(Row, "fareEngNm");
          ds_buying.setCellData(Row, "fareEngCd", "");
          ds_buying.setCellData(Row, "fareEngNm", "");
          udc_popupCom.setSelectId('retriveFreightCodeInfo');
          udc_popupCom.ilCommonPopUp(async function (ref) {
            // $c.gus.cfSetGridReturnValue(ref, ds_buying, Row, "fareEngCd", "fareEngNm");
            if (ref[0] == "N/A") {
              ds_buying.setCellData(Row, "fareEngCd", "");
              ds_buying.setCellData(Row, "fareEngNm", "");
            } else {
              ds_buying.setCellData(Row, "fareEngCd", ref[0]);
              ds_buying.setCellData(Row, "fareEngNm", ref[1]);
            }
            ds_buying.setCellData(Row, "selpchItemCd", ref[3]);
            ds_buying.setCellData(Row, "fareGrpCd", ref[5]);
            ds_buying.setCellData(Row, "vatYn", ref[7]);
            ds_buying.setCellData(Row, "vehclYn", ref[8]);
            if (ref[9] == "1") {
              //원화.
              ds_buying.setCellData(Row, "crcCd", "KRW");
            } else {
              ds_buying.setCellData(Row, "crcCd", ed_mhcur.getValue());
            }
            if (ds_buying.getCellData(Row, "fareEngCd") == "OCF") {
              ds_buying.setCellData(Row, "crcCd", "USD");
            }
            if (ds_buying.getCellData(Row, "pchsTyp") == "3") {
              if (ds_buying.getCellData(Row, "fareEngCd") == "TRD") {
                scwin.f_BuyingDeptLoading(Row);
              }
            }
            await scwin.f_buyingAmtFcrc(Row, Colid, olddata);
            await scwin.f_buyingAmt(Row, Colid, olddata);
            await scwin.f_buyingVat(Row, Colid, olddata);
            await scwin.f_buyingUsdAmt(Row, Colid, olddata);
            if (ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd") != "") {
              var idxArr = ds_currencyCode.getMatchedIndex(0, ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd"));
              if (!(idxArr.length > 0)) {
                // 값이 없을때
                ds_buying.setCellData(ds_buying.getRowPosition(), "exRate", "");
                await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Currency Type"]); //  @이(가) 존재하지 않습니다.
              } else {
                if (ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd") != "KRW") {
                  scwin.f_ExRateBuyingGridLoading();
                }
              }
            } else {
              return;
            }
          }, code //코드
          , name //코드명
          , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
          , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
          , "Code, Name" // Title순서
          , '80,230' // 보여주는	각 컬럼들의	폭
          , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
          , "S,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
          , null // POP-UP뛰을때	원도우의	사용자 정의	폭
          , null // POP-UP뛰을때	우도우의	사용자 정의	높이
          , null // 윈도우 위치 Y좌표
          , null // 윈도우 위치 X좌표
          , null // 중복체크여부	("F")
          , pAllSearchTF // 전체검색허용여부	("F")
          , "FCode,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
          );
        } else if (ds_buying.getCellData(Row, Colid).trim() == "") {
          ds_buying.setCellData(Row, "fareEngCd", "");
          ds_buying.setCellData(Row, "fareEngNm", "");
          if (ds_buying.getCellData(Row, "pchsTyp") == "3") {
            if (ds_buying.getCellData(Row, "fareEngCd") == "TRD") {
              scwin.f_BuyingDeptLoading(Row);
            }
          }
          await scwin.f_buyingAmtFcrc(Row, Colid, olddata);
          await scwin.f_buyingAmt(Row, Colid, olddata);
          await scwin.f_buyingVat(Row, Colid, olddata);
          await scwin.f_buyingUsdAmt(Row, Colid, olddata);
        }
        break;
      case "sellDeptCd":
        if (ds_buying.getCellData(Row, Colid).trim() != "") {
          ds_buying.setCellData(Row, "sellDeptNm", "");
          await scwin.f_PopUpGrid("BuyingDept", Row, "T", "F", "F");
        } else if (ds_buying.getCellData(Row, Colid).trim() == "") {
          ds_buying.setCellData(Row, "sellDeptCd", "");
          ds_buying.setCellData(Row, "sellDeptNm", "");
        }
        break;
      case "crcCd":
        await scwin.f_buyingAmtFcrc(Row, Colid, olddata);
        await scwin.f_buyingAmt(Row, Colid, olddata);
        await scwin.f_buyingVat(Row, Colid, olddata);
        await scwin.f_buyingUsdAmt(Row, Colid, olddata);
        break;
      case "chgWt":
        await scwin.f_buyingAmtFcrc(Row, Colid, olddata);
        await scwin.f_buyingAmt(Row, Colid, olddata);
        await scwin.f_buyingVat(Row, Colid, olddata);
        await scwin.f_buyingUsdAmt(Row, Colid, olddata);
        break;
      case "pchsUpr":
        await scwin.f_buyingAmtFcrc(Row, Colid, olddata);
        await scwin.f_buyingAmt(Row, Colid, olddata);
        await scwin.f_buyingVat(Row, Colid, olddata);
        await scwin.f_buyingUsdAmt(Row, Colid, olddata);
        break;
      case "exRate":
        scwin.f_buyingAmt(Row, Colid, olddata);
        break;
      case "pchsAmt":
        scwin.f_buyingVat(Row, Colid, olddata);
        break;
      case "vat":
        scwin.f_buyingUsdAmt(Row, Colid, olddata);
        break;
      default:
        break;
    }
  }

  // ds_buying event=onColumnChanged(row,colid)
  // Currency event
  if (colid == "crcCd") {
    if (ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd") != "") {
      var idxArr = ds_currencyCode.getMatchedIndex(0, ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd"));
      if (!(idxArr.length > 0)) {
        // 값이 없을때
        ds_buying.setCellData(ds_buying.getRowPosition(), "exRate", "");
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Currency Type"]); //  @이(가) 존재하지 않습니다.
      } else {
        if (ds_buying.getCellData(ds_buying.getRowPosition(), "crcCd") != "KRW") {
          scwin.f_ExRateBuyingGridLoading();
        }
      }
    } else {
      return;
    }
  }
  // sum값 call    
  if (colid == "pchsAmtFcrc" || colid == "pchsAmt" || colid == "vat") {
    scwin.f_BuyingSum();
  }
};
scwin.gr_buying_onbeforeedit = function (rowIndex, columnIndex, value) {
  // gr_buying event=OnDropDown(Row,Colid)
  var Colid = gr_buying.getColumnID(columnIndex);
  switch (Colid) {
    case "fareUnit":
      scwin.f_buyingUnitLoading();
      break;
  }
};
scwin.gr_buying_onafteredit = function (Row, columnIndex, value) {
  var Colid = gr_buying.getColumnID(columnIndex);
  switch (Colid) {
    case "fareUnit":
      scwin.f_packageRateBuyingLoading(Row, Colid);
      scwin.f_buyingTariffRateLoading();
      break;
    case "pchsTyp":
      if (ds_buying.getCellData(ds_buying.getRowPosition(), "pchsTyp") == "3") {
        // 내부부서일때. 
        ds_buying.setCellData(ds_buying.getRowPosition(), "pchsClntNo", scwin.p_clntNo);
        ds_buying.setCellData(ds_buying.getRowPosition(), "pchsClntNm", "");
        scwin.f_PopUpGrid("BuyingCustomer", Row, "T", "F", "F");
      } else {
        ds_buying.setCellData(ds_buying.getRowPosition(), "pchsClntNo", "");
        ds_buying.setCellData(ds_buying.getRowPosition(), "pchsClntNm", "");
      }
      break;
  }
  scwin.gr_buyingEditF();
};
scwin.gr_buying_oneditend = function (Row, columnIndex, value) {};
scwin.gr_buying_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  var Colid = gr_buying.getColumnID(columnIndex);
  switch (Colid) {
    case "fareUnit":
      var grdReadOnly = gr_buying.getReadOnly("grid");
      var readonly = gr_buying.getCellReadOnly(rowIndex, "fareUnit");
      // if (gr_buying.ColumnProp("fareUnit","Edit") == "true") {			
      if (!readonly && !grdReadOnly) {
        scwin.f_buyingTariffRateLoading();
      }
      break;
  }
};
scwin.gr_partner_ontextimageclick = function (Row, columnIndex) {
  var rtnList = new Array();
  var Colid = gr_partner.getColumnID(columnIndex);
  switch (Colid) {
    case "bilgClntNo":
      scwin.f_PopUpGrid("PartnerCustomer", Row, "F", "F", "F");
      break;
    case "fareEngCd":
      scwin.f_PopUpGrid("PartnerFcode", Row, "F", "F", "F");
      break;
    // case "rsltsStdDt" :	
    // 	cfOpenCalendar(gr_partner, Row, Colid);
    // 	break;							
    default:
      break;
  }
};
scwin.gr_partner_onviewchange = async function (info) {
  var Row = info.rowIndex;
  var Colid = info.colId;
  var colid = info.colId;
  var olddata = info.oldValue;
  var code = "";
  var name = "";
  if (ds_partner.getRowCount() > 0) {
    switch (Colid) {
      case "bilgClntNo":
        if (ds_partner.getCellData(Row, Colid).trim() != "") {
          ds_partner.setCellData(Row, "bilgClntNm", "");
          await scwin.f_PopUpGrid("PartnerCustomer", Row, "T", "F", "F");
        } else if (ds_partner.getCellData(Row, Colid).trim() == "") {
          ds_partner.setCellData(Row, "bilgClntNo", "");
          ds_partner.setCellData(Row, "bilgClntNm", "");
        }
        break;
      case "fareEngCd":
        if (ds_partner.getCellData(Row, Colid).trim() != "") {
          // await scwin.f_PopUpGrid("PartnerFcode", Row,"T","F","F");
          var pWinCloseTF = "T";
          var pAllSearchTF = "F";
          if (ds_partner.getCellData(Row, "drcrCls") == "D") {
            code = ds_partner.getCellData(Row, "fareEngCd");
            name = ds_partner.getCellData(Row, "fareEngNm");
            ds_partner.setCellData(Row, "fareEngCd", "");
            ds_partner.setCellData(Row, "fareEngNm", "");
            udc_popupCom.setSelectId('retriveFreightCodeInfo');
            udc_popupCom.ilCommonPopUp(async function (ref) {
              // $c.gus.cfSetGridReturnValue(ref, ds_partner, Row, "fareEngCd", "fareEngNm");	
              if (ref[0] == "N/A") {
                ds_partner.setCellData(Row, "fareEngCd", "");
                ds_partner.setCellData(Row, "fareEngNm", "");
              } else {
                ds_partner.setCellData(Row, "fareEngCd", ref[0]);
                ds_partner.setCellData(Row, "fareEngNm", ref[1]);
              }
              ds_partner.setCellData(Row, "sellItemCd", ref[3]);
              ds_partner.setCellData(Row, "fareGrpCd", ref[5]);
              ds_partner.setCellData(Row, "vatYn", ref[7]);
              ds_partner.setCellData(Row, "vehclYn", ref[8]);
              ds_partner.setCellData(Row, "crcCd", "USD");
              await scwin.f_partnerAmtFcrc(Row, Colid, olddata);
              await scwin.f_partnerAmt(Row, Colid, olddata);
              await scwin.f_partnerUsdAmt(Row, Colid, olddata);
              if (ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd") != "") {
                var idxArr = ds_currencyCode.getMatchedIndex(0, ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd"));
                if (!(idxArr.length > 0)) {
                  // 값이 없을때
                  ds_partner.setCellData(ds_partner.getRowPosition(), "exRate", "");
                  await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Currency Type"]); //  @이(가) 존재하지 않습니다.
                } else {
                  if (ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd") != "KRW") {
                    scwin.f_ExRatePartnerGridLoading();
                  }
                }
              } else {
                return;
              }
            }, code //코드
            , name //코드명
            , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
            , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
            , "Code, Name" // Title순서
            , '80,230' // 보여주는	각 컬럼들의	폭
            , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
            , "S,0,1" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
            , null // POP-UP뛰을때	원도우의	사용자 정의	폭
            , null // POP-UP뛰을때	우도우의	사용자 정의	높이
            , null // 윈도우 위치 Y좌표
            , null // 윈도우 위치 X좌표
            , null // 중복체크여부	("F")
            , pAllSearchTF // 전체검색허용여부	("F")
            , "FCode,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
            , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
            );
          } else if (ds_partner.getCellData(Row, "drcrCls") == "C") {
            code = ds_partner.getCellData(Row, "fareEngCd");
            name = ds_partner.getCellData(Row, "fareEngNm");
            ds_partner.setCellData(Row, "fareEngCd", "");
            ds_partner.setCellData(Row, "fareEngNm", "");
            udc_popupCom.setSelectId('retriveFreightCodeInfo');
            udc_popupCom.ilCommonPopUp(async function (ref) {
              // $c.gus.cfSetGridReturnValue(ref, ds_partner, Row, "fareEngCd", "fareEngNm");
              if (ref[0] == "N/A") {
                ds_partner.setCellData(Row, "fareEngCd", "");
                ds_partner.setCellData(Row, "fareEngNm", "");
              } else {
                ds_partner.setCellData(Row, "fareEngCd", ref[0]);
                ds_partner.setCellData(Row, "fareEngNm", ref[1]);
              }
              ds_partner.setCellData(Row, "sellItemCd", ref[3]);
              ds_partner.setCellData(Row, "fareGrpCd", ref[5]);
              ds_partner.setCellData(Row, "vatYn", ref[7]);
              ds_partner.setCellData(Row, "vehclYn", ref[8]);
              ds_partner.setCellData(Row, "crcCd", "USD");
              await scwin.f_partnerAmtFcrc(Row, Colid, olddata);
              await scwin.f_partnerAmt(Row, Colid, olddata);
              await scwin.f_partnerUsdAmt(Row, Colid, olddata);
              if (ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd") != "") {
                var idxArr = ds_currencyCode.getMatchedIndex(0, ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd"));
                if (!(idxArr.length > 0)) {
                  // 값이 없을때
                  ds_partner.setCellData(ds_partner.getRowPosition(), "exRate", "");
                  await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Currency Type"]); //  @이(가) 존재하지 않습니다.
                } else {
                  if (ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd") != "KRW") {
                    scwin.f_ExRatePartnerGridLoading();
                  }
                }
              } else {
                return;
              }
            }, code //코드
            , name //코드명
            , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
            , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
            , "Code, Name" // Title순서
            , '80,230' // 보여주는	각 컬럼들의	폭
            , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
            , "S,0,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
            , null // POP-UP뛰을때	원도우의	사용자 정의	폭
            , null // POP-UP뛰을때	우도우의	사용자 정의	높이
            , null // 윈도우 위치 Y좌표
            , null // 윈도우 위치 X좌표
            , null // 중복체크여부	("F")
            , pAllSearchTF // 전체검색허용여부	("F")
            , "FCode,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
            , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
            );
          }
        } else if (ds_partner.getCellData(Row, Colid).trim() == "") {
          ds_partner.setCellData(Row, "fareEngCd", "");
          ds_partner.setCellData(Row, "fareEngNm", "");
        }
        break;
      case "crcCd":
        await scwin.f_partnerAmtFcrc(Row, Colid, olddata);
        await scwin.f_partnerAmt(Row, Colid, olddata);
        await scwin.f_partnerUsdAmt(Row, Colid, olddata);
        break;
      case "chgWt":
        await scwin.f_partnerAmtFcrc(Row, Colid, olddata);
        await scwin.f_partnerAmt(Row, Colid, olddata);
        await scwin.f_partnerUsdAmt(Row, Colid, olddata);
        break;
      case "sellUpr":
        await scwin.f_partnerAmtFcrc(Row, Colid, olddata);
        await scwin.f_partnerAmt(Row, Colid, olddata);
        await scwin.f_partnerUsdAmt(Row, Colid, olddata);
        break;
      case "exRate":
        scwin.f_partnerAmt(Row, Colid, olddata);
        break;
      case "sellAmt":
        scwin.f_partnerUsdAmt(Row, Colid, olddata);
        break;
      default:
        break;
    }
  }
  // ds_partner event=onColumnChanged(row,colid)
  // Currency event
  if (colid == "crcCd") {
    if (ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd") != "") {
      var idxArr = ds_currencyCode.getMatchedIndex(0, ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd"));
      if (!(idxArr.length > 0)) {
        // 값이 없을때
        ds_partner.setCellData(ds_partner.getRowPosition(), "exRate", "");
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["Currency Type"]); //  @이(가) 존재하지 않습니다.
      } else {
        if (ds_partner.getCellData(ds_partner.getRowPosition(), "crcCd") != "KRW") {
          scwin.f_ExRatePartnerGridLoading();
        }
      }
    } else {
      return;
    }
  }
  // sum값 call
  if (colid == "sellAmtFcrc" || colid == "sellAmt") {
    scwin.f_PartnerSum();
  }
};
scwin.gr_partner_onbeforeedit = function (rowIndex, columnIndex, value) {
  var Colid = gr_partner.getColumnID(columnIndex);
  switch (Colid) {
    case "fareUnit":
      scwin.f_partnerUnitLoading();
      break;
  }
};
scwin.gr_partner_onafteredit = function (Row, columnIndex, value) {
  var Colid = gr_partner.getColumnID(columnIndex);
  switch (Colid) {
    case "fareUnit":
      scwin.f_packageRatePartnerLoading(Row, Colid);
      scwin.f_partnerTariffRateLoading();
      break;
  }
  scwin.gr_buyingEditF();
};
scwin.gr_partner_oneditend = function (Row, columnIndex, value) {};
scwin.gr_partner_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  var Colid = gr_partner.getColumnID(columnIndex);
  switch (Colid) {
    case "fareUnit":
      var grdReadOnly = gr_partner.getReadOnly("grid");
      var readonly = gr_partner.getCellReadOnly(rowIndex, "fareUnit");
      if (!readonly && !grdReadOnly) {
        scwin.f_partnerTariffRateLoading();
      }
      break;
  }
};
scwin.udc_popupCom1_callBackFunc = function (ref) {
  ds_hidden.set("txt_mhcnm", ref[1]);
  scwin.ed_mhccd = ref[0];
  // $c.gus.cfSetReturnValue(ref, ed_mhccd, txt_mhcnm);
  $c.gus.cfSetReturnValue($p, ref, ed_mhccd, "");
};
scwin.udc_popupCom2_callBackFunc = function (ref) {
  ds_hidden.set("txt_mhactcustnm", ref[1]);
  scwin.ed_mhactcust = ref[0];
  // $c.gus.cfSetReturnValue(ref, ed_mhactcust, txt_mhactcustnm);
  $c.gus.cfSetReturnValue($p, ref, ed_mhactcust, "");
};
scwin.udc_popupCom3_callBackFunc = function (ref) {
  ds_hidden.set("txt_mhlinernm", ref[1]);
  scwin.ed_mhlinercd = ref[0];
  // $c.gus.cfSetReturnValue(rtnList, ed_mhlinercd,txt_mhlinernm);
  $c.gus.cfSetReturnValue($p, ref, ed_mhlinercd, "");
};
scwin.udc_popupComPopup1_callBackFunc = function (ref) {
  ds_hidden.set("txt_mhlodnm", ref[1]);
  scwin.ed_mhlodcd = ref[0];
  // $c.gus.cfSetReturnValue(rtnList, ed_mhlodcd, txt_mhlodnm);
  $c.gus.cfSetReturnValue($p, ref, ed_mhlodcd, "");
};
scwin.udc_popupComPopup2_callBackFunc = function (ref) {
  ds_hidden.set("txt_mhdiscnm", ref[1]);
  scwin.ed_mhdisccd = ref[0];
  // $c.gus.cfSetReturnValue(rtnList, ed_mhdisccd, txt_mhdiscnm);
  $c.gus.cfSetReturnValue($p, ref, ed_mhdisccd, "");
};
scwin.udc_popupComPopup3_callBackFunc = function (ref) {
  scwin.ed_mhcnt1type = ref[0];
  $c.gus.cfSetReturnValue($p, ref, ed_mhcnt1type, "");
};
scwin.udc_popupComPopup4_callBackFunc = function (ref) {
  scwin.ed_mhcnt2type = ref[0];
  $c.gus.cfSetReturnValue($p, ref, ed_mhcnt2type, "");
};
scwin.udc_popupComPopup5_callBackFunc = function (ref) {
  scwin.ed_mhcnt3type = ref[0];
  $c.gus.cfSetReturnValue($p, ref, ed_mhcnt3type, "");
};
scwin.udc_popupComPopup6_callBackFunc = function (ref) {
  scwin.ed_mhcnt4type = ref[0];
  $c.gus.cfSetReturnValue($p, ref, ed_mhcnt4type, "");
};
scwin.gr_buyingEditF = function () {
  for (var i = 0; i < ds_buying.getRowCount(); i++) {
    if (ds_buying.getCellData(i, "pchsCertiNo") == "") {
      gr_buying.setCellReadOnly(i, "pchsTyp", false);
      gr_buying.setCellReadOnly(i, "pchsClntNo", false);
      gr_buying.setCellReadOnly(i, "fareEngCd", false);
      gr_buying.setCellReadOnly(i, "crcCd", false);
      gr_buying.setCellReadOnly(i, "fareUnit", false);
      gr_buying.setCellReadOnly(i, "chgWt", false);
      gr_buying.setCellReadOnly(i, "pchsUpr", false);
      gr_buying.setCellReadOnly(i, "pchsAmtFcrc", false);
      gr_buying.setCellReadOnly(i, "exRate", false);
      gr_buying.setCellReadOnly(i, "pchsAmt", false);
      gr_buying.setCellReadOnly(i, "vat", false);
      gr_buying.setCellReadOnly(i, "sellDeptCd", false);
      if (ds_buying.getCellData(i, "crcCd") == "KRW") {
        gr_buying.setCellReadOnly(i, "pchsAmtFcrc", true);
      } else {
        gr_buying.setCellReadOnly(i, "pchsAmtFcrc", false);
      }
      if (ds_buying.getCellData(i, "pchsTyp") == "3") {
        gr_buying.setCellReadOnly(i, "sellDeptCd", false);
      } else {
        gr_buying.setCellReadOnly(i, "sellDeptCd", true);
      }
    } else {
      gr_buying.setCellReadOnly(i, "pchsTyp", true);
      gr_buying.setCellReadOnly(i, "pchsClntNo", true);
      gr_buying.setCellReadOnly(i, "fareEngCd", true);
      gr_buying.setCellReadOnly(i, "crcCd", true);
      gr_buying.setCellReadOnly(i, "fareUnit", true);
      gr_buying.setCellReadOnly(i, "chgWt", true);
      gr_buying.setCellReadOnly(i, "pchsUpr", true);
      gr_buying.setCellReadOnly(i, "pchsAmtFcrc", true);
      gr_buying.setCellReadOnly(i, "exRate", true);
      gr_buying.setCellReadOnly(i, "pchsAmt", true);
      gr_buying.setCellReadOnly(i, "vat", true);
      gr_buying.setCellReadOnly(i, "sellDeptCd", true);
    }
  }
};
scwin.gr_partnerEditF = function () {
  for (var i = 0; i < ds_partner.getRowCount(); i++) {
    if (ds_partner.getCellData(i, "certiNo") == "") {
      gr_partner.setCellReadOnly(i, "bilgClntNo", false);
      gr_partner.setCellReadOnly(i, "drcrCls", false);
      gr_partner.setCellReadOnly(i, "fareEngCd", false);
      gr_partner.setCellReadOnly(i, "crcCd", false);
      gr_partner.setCellReadOnly(i, "fareUnit", false);
      gr_partner.setCellReadOnly(i, "chgWt", false);
      gr_partner.setCellReadOnly(i, "sellUpr", false);
      gr_partner.setCellReadOnly(i, "sellAmtFcrc", false);
      gr_partner.setCellReadOnly(i, "exRate", false);
      gr_partner.setCellReadOnly(i, "sellAmt", false);
      gr_partner.setCellReadOnly(i, "rmk", false);
      if (ds_partner.getCellData(i, "crcCd") == "KRW") {
        gr_buying.setCellReadOnly(i, "pchsAmtFcrc", true);
      } else {
        gr_buying.setCellReadOnly(i, "pchsAmtFcrc", false);
      }
      if (ds_buying.getCellData(i, "drcrCls") == "C") {
        gr_buying.setCellReadOnly(i, "vehclNo", false);
      } else {
        gr_buying.setCellReadOnly(i, "vehclNo", true);
      }
    } else {
      gr_partner.setCellReadOnly(i, "bilgClntNo", true);
      gr_partner.setCellReadOnly(i, "drcrCls", true);
      gr_partner.setCellReadOnly(i, "fareEngCd", true);
      gr_partner.setCellReadOnly(i, "crcCd", true);
      gr_partner.setCellReadOnly(i, "fareUnit", true);
      gr_partner.setCellReadOnly(i, "chgWt", true);
      gr_partner.setCellReadOnly(i, "sellUpr", true);
      gr_partner.setCellReadOnly(i, "sellAmtFcrc", true);
      gr_partner.setCellReadOnly(i, "exRate", true);
      gr_partner.setCellReadOnly(i, "sellAmt", true);
      gr_partner.setCellReadOnly(i, "rmk", true);
    }
  }
};
scwin.gr_buying_onaftercolumnmove = function (info) {};
scwin.tac_tabControl1_ontabload = function (tabId, index, userId) {};
scwin.tac_tabControl1_ondrawcomplete = function (tabId, index, userId) {
  if (index == 1) {}
};
scwin.ed_hhcnttype_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.setSeqGrid = function (id) {
  if (id == 1) {
    for (var i = 0; i < ds_buying.getRowCount(); i++) {
      ds_buying.setCellData(i, "seq", i + 1);
    }
  } else if (id == 2) {
    for (var i = 0; i < ds_partner.getRowCount(); i++) {
      ds_partner.setCellData(i, "seq", i + 1);
    }
  }
};
scwin.ed_mhcur_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.gr_partner_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "fareEngCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "crcCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
scwin.gr_buying_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "fareEngCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    case "crcCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_Search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hhblno',placeholder:'',style:'width:200px;',title:'House No',maxlength:'20',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_hhblno_onblur','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_retrieve.hhblno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DOC No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_mhno',search:'start',style:'width:150px;',submenuSize:'auto',title:'Document No',allOption:'',chooseOption:'',ref:'data:ds_masterblList.mhno',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_hmhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mhmblno',placeholder:'',style:'width:200px;',title:'Master B/L',maxlength:'20',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_mhmblno_onblur','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_masterblList.mhmblno'}},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'display: none;',id:'udc_popupCom'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Exchange Rate Information',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 255px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Currency',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group ',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcur',placeholder:'',style:'width: 50px;',title:'Currency',maxlength:'3',objType:'data',ref:'data:ds_masterblList.mhcur',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_mhcur_onkeyup'}},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_mexgb',search:'start',style:'',submenuSize:'auto',title:'Currency Name',allOption:'',chooseOption:'',ref:'data:ds_masterblList.mexgb',objType:'data',displayMode:'label',emptyItem:'true',emptyIndex:'-1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T BUYING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T SELLING'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/T MID'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_mhcurdt',style:'',title:'Ex-Rate Date','ev:onviewchange':'scwin.ica_mhcurdt_onviewchange',ref:'data:ds_masterblList.mhcurdt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhexrate',placeholder:'',style:'width:100px;',title:'Ex-Rate',displayFormat:'#,###.####',dataType:'float','ev:onblur':'scwin.ed_mhexrate_onblur',objType:'data',applyFormat:'all',maxlength:'11.4',ref:'data:ds_masterblList.mhexrate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'US Ex-Rate',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhusdrate',placeholder:'',style:'width:100px;',title:'US Ex-Rate',dataType:'float',displayFormat:'#,###.####',maxByteLength:'11.4','ev:onblur':'scwin.ed_mhusdrate_onblur',objType:'data',applyFormat:'all',ref:'data:ds_masterblList.mhusdrate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'col-gap-4',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_1',style:'',type:'button','ev:onclick':'scwin.btn_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tariff'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_2',style:'',type:'button','ev:onclick':'scwin.btn_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Customer,Ex-Rate Change'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:160px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:160px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt1type',placeholder:'',style:'width: 50px;',maxlength:'4',title:'Container Type1',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_mhcnt1type_onblur',objType:'data','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_masterblList.mhcnt1type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhcnt1type',style:'',type:'button','ev:onclick':'scwin.btn_mhcnt1type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt2type',placeholder:'',style:'width: 50px;',maxlength:'4',title:'Container Type2',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_mhcnt2type_onblur',objType:'data','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_masterblList.mhcnt2type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhcnt2type',style:'',type:'button','ev:onclick':'scwin.btn_mhcnt2type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt3type',placeholder:'',style:'width: 50px;',maxlength:'4',title:'Container Type3',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_mhcnt3type_onblur',objType:'data','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_masterblList.mhcnt3type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhcnt3type',style:'',type:'button','ev:onclick':'scwin.btn_mhcnt3type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mhcnt4type',placeholder:'',style:'width: 50px;',maxlength:'4',title:'Container Type4',allowChar:'a-zA-Z0-9','ev:onblur':'scwin.ed_mhcnt4type_onblur',objType:'data','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_masterblList.mhcnt4type'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhcnt4type',style:'',type:'button','ev:onclick':'scwin.btn_mhcnt4type_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhwgt',placeholder:'',style:'width:150px;',title:'Weight',dataType:'number',maxByteLength:'13.3',displayFormat:'#,###.###',objType:'data',ref:'data:ds_masterblList.mhwgt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container Quantity',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt1',placeholder:'',style:'width:75px;',title:'Container Quantity1',maxlength:'3',dataType:'number',objType:'data',ref:'data:ds_masterblList.mhcnt1'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt2',placeholder:'',style:'width:75px;',title:'Container Quantity2',maxlength:'3',dataType:'number',objType:'data',ref:'data:ds_masterblList.mhcnt2'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt3',placeholder:'',style:'width:75px;',title:'Container Quantity3',maxlength:'3',dataType:'number',objType:'data',ref:'data:ds_masterblList.mhcnt3'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhcnt4',placeholder:'',style:'width:75px;',title:'Container Quantity4',maxlength:'3',dataType:'number',objType:'data',ref:'data:ds_masterblList.mhcnt4'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_mhmsr',placeholder:'',style:'width:150px;',title:'Measure',dataType:'number',maxByteLength:'11.3',displayFormat:'#,###.###',objType:'data',ref:'data:ds_masterblList.mhmsr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhlodcd',placeholder:'',style:'width: 85px;',title:'Loading',maxlength:'5',allowChar:'a-zA-Z','ev:onblur':'scwin.ed_mhlodcd_onblur',objType:'data','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_masterblList.mhlodcd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhlodcd',style:'',type:'button','ev:onclick':'scwin.btn_mhlodcd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhdisccd',placeholder:'',style:'width: 85px;',title:'Discharge',maxlength:'5',allowChar:'a-zA-Z','ev:onblur':'scwin.ed_mhdisccd_onblur',objType:'data','ev:onkeyup':'scwin.ed_hhcnttype_onkeyup',ref:'data:ds_masterblList.mhdisccd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhdisccd',style:'',type:'button','ev:onclick':'scwin.btn_mhdisccd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhccd',placeholder:'',style:'width: 85px;',maxlength:'6',allowChar:'0-9',title:'Partner','ev:onblur':'scwin.ed_mhccd_onblur',objType:'data',ref:'data:ds_masterblList.mhccd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhccd',style:'',type:'button','ev:onclick':'scwin.btn_mhccd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhactcust',placeholder:'',style:'width: 85px;',title:'Customer',maxlength:'6',allowChar:'0-9','ev:onblur':'scwin.ed_mhactcust_onblur',objType:'data',ref:'data:ds_masterblList.mhactcust'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhactcust',style:'',type:'button','ev:onclick':'scwin.btn_mhactcust_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Carrier',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mhlinercd',placeholder:'',style:'width: 85px;',title:'Carrier',maxlength:'6',allowChar:'0-9','ev:onblur':'scwin.ed_mhlinercd_onblur',objType:'data',ref:'data:ds_masterblList.mhlinercd'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_mhlinercd',style:'',type:'button','ev:onclick':'scwin.btn_mhlinercd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETD',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_mhetd',pickerType:'dynamic',style:'',title:'ETD',mandatory:'true',ref:'data:ds_masterblList.mhetd'}}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:'','ev:onchange':'scwin.f_selectTabMenu','ev:ontabload':'scwin.tac_tabControl1_ontabload','ev:ondrawcomplete':'scwin.tac_tabControl1_ondrawcomplete'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_center0',label:'Buying',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tab_center1',label:'Partner',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'tab_mxTab_page',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'1700',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_buying',defaultCellHeight:'24',evenRowBackgroundColor:'#F8FFF8',id:'gr_buying',oddEvenColorDisplay:'true',rowNumHeaderValue:'SEQ',rowNumVisible:'false',rowNumWidth:'40',showSortableImage:'true',sortable:'true',visibleRowNum:'10',visibleRowNumFix:'true',columnMove:'true',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_buying_ontextimageclick','ev:onviewchange':'scwin.gr_buying_onviewchange','ev:onbeforeedit':'scwin.gr_buying_onbeforeedit','ev:oneditend':'scwin.gr_buying_oneditend','ev:oncellindexchange':'scwin.gr_buying_oncellindexchange',editModeEvent:'onclick','ev:onaftercolumnmove':'scwin.gr_buying_onaftercolumnmove','ev:onafteredit':'scwin.gr_buying_onafteredit','ev:oneditkeyup':'scwin.gr_buying_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column2',inputType:'text',value:'SEQ',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column41',inputType:'text',style:'',value:'Type',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column47',inputType:'text',style:'',value:'SEQ',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column1',inputType:'text',value:'Customer',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column3',inputType:'text',value:'Name',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column5',inputType:'text',value:'F/Code',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column7',inputType:'text',value:'Name',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column51',inputType:'text',style:'',value:'Init',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column49',inputType:'text',style:'',value:'통합매출입코드',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column9',inputType:'text',value:'CUR',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column13',inputType:'text',style:'',value:'Unit',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column15',inputType:'text',style:'',value:'Package',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column17',inputType:'text',style:'',value:'Rate',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column33',inputType:'text',style:'',value:'Amount',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column31',inputType:'text',style:'',value:'Ex-Rate',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column29',inputType:'text',style:'',value:'Amount(W)',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column43',inputType:'text',style:'',value:'VAT',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column25',inputType:'text',style:'',value:'Amount(US$)',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column19',inputType:'text',style:'',value:'Result',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column45',inputType:'text',style:'',value:'Inner Dept',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column53',inputType:'text',style:'',value:'내부부서명',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column21',inputType:'text',style:'',value:'Invoice No',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column63',inputType:'text',style:'',value:'Tariff Rate',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column61',inputType:'text',style:'',value:'vatYn',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column59',inputType:'text',style:'',value:'exRateTyp',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column57',inputType:'text',style:'',value:'Vehicle No',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column55',inputType:'text',style:'',value:'vehclYn',width:'70',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTyp',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',textAlign:'left',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSeq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'textImage',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'80',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'fareEngCd',inputType:'textImage',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'fareEngNm',inputType:'text',width:'80',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'crcCd',inputType:'text',width:'70',UpperFlag:'1',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareUnit',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_buyingUnit'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgWt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###.###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsUpr',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###.##[floor]',textAlign:'right',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmtFcrc',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,###.##[floor]',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRate',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,###.##[floor]',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',textAlign:'right',value:'',width:'70',dataType:'number',displayFormat:'#,###[floor]',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'usdAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'120',dataType:'number',displayFormat:'#,###.##[floor]',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',style:'',value:'',width:'80',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellDeptCd',inputType:'textImage',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellDeptNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsCertiNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfUpr',inputType:'text',style:'',textAlign:'right',value:'',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###.##[floor]',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatYn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRateTyp',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclYn',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount($)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt tar',id:'ed_BuyingSumAmount',placeholder:'',style:'',displayFormat:'#,###.##[floor]',title:'Amount($)',readOnly:'true',dataType:'number',maxByteLength:'12.2'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount(W)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt tar',id:'ed_BuyingSumAmountW',placeholder:'',style:'',maxlength:'12',dataType:'number',displayFormat:'#,###[floor]',title:'AmountW',readOnly:'true'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'VAT',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt tar',id:'ed_BuyingSumVat',placeholder:'',style:'',maxlength:'12',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',title:'VAT'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'AMOUNT(W+VAT)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt tar',id:'ed_BuyingAmountSum',placeholder:'',style:'',maxlength:'12',dataType:'number',displayFormat:'#,###[floor]',readOnly:'true',title:'AmountW'}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',btnRowAddObj:'btn_AddRow1',btnRowDelObj:'btn_DelRow1',btnCancelObj:'btn_CancelRow1',cancelFunction:'scwin.bottom_cancel1',id:'udc_bottomGrdBtn1',gridID:'gr_buying',rowAddFunction:'scwin.bottom_addRow1',rowDelFunction:'scwin.bottom_delRow1'}}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content3',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'1700',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_partner',defaultCellHeight:'24',evenRowBackgroundColor:'#F8FFF8',id:'gr_partner',oddEvenColorDisplay:'true',rowNumHeaderValue:'SEQ',rowNumVisible:'false',rowNumWidth:'40',showSortableImage:'true',sortable:'true',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true',columnMove:'true','ev:ontextimageclick':'scwin.gr_partner_ontextimageclick','ev:onviewchange':'scwin.gr_partner_onviewchange','ev:onbeforeedit':'scwin.gr_partner_onbeforeedit','ev:oneditend':'scwin.gr_partner_oneditend','ev:oncellindexchange':'scwin.gr_partner_oncellindexchange','ev:onafteredit':'scwin.gr_partner_onafteredit','ev:oneditkeyup':'scwin.gr_partner_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'',inputType:'text',value:'SEQ',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column41',inputType:'text',style:'',value:'SEQ',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column1',inputType:'text',value:'Customer',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column3',inputType:'text',value:'Name',width:'71',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column35',inputType:'text',style:'',value:'D/C',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column5',inputType:'text',value:'F/Code',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column7',inputType:'text',value:'Name',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column45',inputType:'text',style:'',value:'Init',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column43',inputType:'text',style:'',value:'통합매출입코드',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column9',inputType:'text',value:'CUR',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column13',inputType:'text',style:'',value:'Unit',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column15',inputType:'text',style:'',value:'Package',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column17',inputType:'text',style:'',value:'Rate',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column33',inputType:'text',style:'',value:'Amount',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column31',inputType:'text',style:'',value:'Ex-Rate',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column29',inputType:'text',style:'',value:'Amount(W)',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column25',inputType:'text',style:'',value:'Amount(US$)',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column19',inputType:'text',style:'',value:'Result',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column21',inputType:'text',style:'',value:'Invoice No',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column57',inputType:'text',style:'',value:'Tariff Rate',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column55',inputType:'text',style:'',value:'vatYn',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column53',inputType:'text',style:'',value:'Remark',width:'200',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column51',inputType:'text',style:'',value:'exRateTyp',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column49',inputType:'text',style:'',value:'Vehicle No',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column47',inputType:'text',style:'',value:'vehclYn',width:'70',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'textImage',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',textAlign:'left',width:'71',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrCls',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',textAlign:'left',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'D'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'fareEngCd',inputType:'textImage',width:'70',textAlign:'left',UpperFlag:'1',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'fareEngNm',inputType:'text',textAlign:'left',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareGrpCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{class:'tar',displayMode:'label',id:'crcCd',inputType:'text',textAlign:'left',width:'70',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fareUnit',inputType:'select',style:'',textAlign:'left',value:'',width:'70',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_partnerUnit'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgWt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###.###[floor]',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###.##[floor]',textAlign:'right',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmtFcrc',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###.##[floor]',textAlign:'right',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRate',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###.##[floor]',textAlign:'right',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###[floor]',textAlign:'right',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'usdAmt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###.##[floor]',textAlign:'right',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',style:'',value:'',width:'80',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfUpr',inputType:'text',style:'',textAlign:'right',value:'',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###.##[floor]',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatYn',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exRateTyp',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclYn',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount($)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt tar',id:'ed_PartnerSumAmount',placeholder:'',style:'',title:'Amount($)',readOnly:'true',dataType:'number',displayFormat:'#,###.##[floor]',maxByteLength:'12.2'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Amount(W)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:' amt tar',id:'ed_PartnerSumAmountW',placeholder:'',style:'',readOnly:'true',dataType:'number',displayFormat:'#,###[floor]',maxlength:'12',title:'AmountW'}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',style:'',gridID:'gr_partner',id:'udc_bottomGrdBtn2',btnRowAddObj:'btn_AddRow2',btnRowDelObj:'btn_DelRow2',btnCancelObj:'btn_CancelRow2',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelFunction:'scwin.bottom_cancel2',rowDelFunction:'scwin.bottom_delRow2',rowAddFunction:'scwin.bottom_addRow2',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_3',style:'',type:'button','ev:onclick':'scwin.btn_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Partner'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_4',style:'',type:'button','ev:onclick':'scwin.btn_4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Profit'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_5',style:'',type:'button','ev:onclick':'scwin.btn_5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Payment INV'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_6',style:'',type:'button','ev:onclick':'scwin.btn_6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link ',id:'btn_7',style:'',type:'button','ev:onclick':'scwin.btn_7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Header'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]}]})