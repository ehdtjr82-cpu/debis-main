/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_09_01b.xml 79993 c1487cd1e21ad490f6eda14e43e45e3126e43a325fcb749d1911c8572c3ebc26 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'approveDateFrom',name:'승인일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'approveDateTo',name:'승인일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardNum',name:'카드번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipYn',name:'전표여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cancelYn',name:'취소여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cardNum',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'4670090020888774'}]},{T:1,N:'col2',E:[{T:4,cdata:'4670-0900-2088-8774'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_card',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transDate',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNum',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'매입추신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveTime',name:'승인시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyDate',name:'매입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeDate',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveNum',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dealDate',name:'원)거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currency',name:'CURRENCY',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'approveAmt',name:'승인금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'tax',name:'세금',dataType:'number',ignoreStatus:'',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'serviceCharge',name:'봉사료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'approveTotal',name:'승인합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'buyExchangeRate',name:'매입시적용환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'krwAmt',name:'원화환산금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payDate',name:'결제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useType',name:'상품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payTotal',name:'결제총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payInterest',name:'결제이자',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fee',name:'수수료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'membershipFee',name:'연회비',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'installmentMonths',name:'할부개월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainInstallmentMonths',name:'잔여할부개월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorNum',name:'가맹점번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadUse',name:'해외사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadCurrency',name:'해외사용통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTaxNum',name:'가맹점사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorName',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorPerson',name:'가맹점대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTel',name:'가맹점전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress1',name:'가맹점주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress2',name:'가맹점주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorCloseInfo',name:'가맹점휴폐업정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcCode',name:'업종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcName',name:'업종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorZipCode',name:'가맹점우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actualPlaceAmt',name:'현지금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxGubun',name:'과세유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxGubunName',name:'과세유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizRegDate',name:'휴폐업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxDate',name:'세무일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateDate',name:'업데이트일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'address',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGbn',name:'승인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cardNum',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_card_import',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDate',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNum',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'매입추신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveTime',name:'승인시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyDate',name:'매입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeDate',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveNum',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dealDate',name:'원)거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currency',name:'CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveAmt',name:'승인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax',name:'세금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'serviceCharge',name:'봉사료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveTotal',name:'승인합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyExchangeRate',name:'매입시적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'krwAmt',name:'원화환산금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDate',name:'결제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useType',name:'상품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payTotal',name:'결제총금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payInterest',name:'결제이자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fee',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'membershipFee',name:'연회비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'installmentMonths',name:'할부개월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainInstallmentMonths',name:'잔여할부개월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorNum',name:'가맹점번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadUse',name:'해외사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadCurrency',name:'해외사용통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTaxNum',name:'가맹점사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorName',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorPerson',name:'가맹점대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTel',name:'가맹점전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress1',name:'가맹점주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress2',name:'가맹점주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorCloseInfo',name:'가맹점휴폐업정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcCode',name:'업종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcName',name:'업종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorZipCode',name:'가맹점우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actualPlaceAmt',name:'현지금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxGubun',name:'과세유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxGubunName',name:'과세유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizRegDate',name:'휴폐업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxDate',name:'세무일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateDate',name:'업데이트일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'address',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGbn',name:'승인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_card_dump',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDate',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNum',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'매입추신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveTime',name:'승인시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyDate',name:'매입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeDate',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveNum',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dealDate',name:'원)거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currency',name:'CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveAmt',name:'승인금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'tax',name:'세금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'serviceCharge',name:'봉사료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'approveTotal',name:'승인합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'buyExchangeRate',name:'매입시적용환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'krwAmt',name:'원화환산금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payDate',name:'결제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useType',name:'상품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payTotal',name:'결제총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payInterest',name:'결제이자',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fee',name:'수수료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'membershipFee',name:'연회비',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'installmentMonths',name:'할부개월수',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'remainInstallmentMonths',name:'잔여할부개월수',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vendorNum',name:'가맹점번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadUse',name:'해외사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadCurrency',name:'해외사용통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTaxNum',name:'가맹점사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorName',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorPerson',name:'가맹점대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTel',name:'가맹점전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress1',name:'가맹점주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress2',name:'가맹점주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorCloseInfo',name:'가맹점휴폐업정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcCode',name:'업종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcName',name:'업종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorZipCode',name:'가맹점우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actualPlaceAmt',name:'현지금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxGubun',name:'과세유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxGubunName',name:'과세유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizRegDate',name:'휴폐업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxDate',name:'세무일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateDate',name:'업데이트일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'address',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGbn',name:'승인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_card_del',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDate',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNum',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'매입추신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveTime',name:'승인시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyDate',name:'매입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeDate',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveNum',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dealDate',name:'원)거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currency',name:'CURRENCY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveAmt',name:'승인금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'tax',name:'세금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'serviceCharge',name:'봉사료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'approveTotal',name:'승인합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'buyExchangeRate',name:'매입시적용환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'usdAmt',name:'US$ 금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'krwAmt',name:'원화환산금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payDate',name:'결제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useType',name:'상품구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payTotal',name:'결제총금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payInterest',name:'결제이자',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fee',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'membershipFee',name:'연회비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'installmentMonths',name:'할부개월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainInstallmentMonths',name:'잔여할부개월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorNum',name:'가맹점번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadUse',name:'해외사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'abroadCurrency',name:'해외사용통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTaxNum',name:'가맹점사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorName',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorPerson',name:'가맹점대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorTel',name:'가맹점전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress1',name:'가맹점주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorAddress2',name:'가맹점주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorCloseInfo',name:'가맹점휴폐업정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcCode',name:'업종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmcName',name:'업종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vendorZipCode',name:'가맹점우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actualPlaceAmt',name:'현지금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxGubun',name:'과세유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxGubunName',name:'과세유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizRegDate',name:'휴폐업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxDate',name:'세무일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateDate',name:'업데이트일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'address',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvGbn',name:'승인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'param7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'param8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'param9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'param10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCard',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCard_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveCorporationCardAdjustCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_card","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_card","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fi.gnrlaccount.slipmgnt.DeleteCorporationCardAdjustContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_card_del","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveProv',action:'/ac.fi.gnrlaccount.slipmgnt.CancelDeleteCorporationCardAdjustContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_card","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveProv_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_09_01b
// 이름     : 개인형법인카드정산
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     :
//            ▶ 그리드의 체크박스 값이 check_yn 이 "F" 로 넘어옴  (ds컬럼 속성 세팅 필요)
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            
//            
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호
/*
var acctDeptCd = "<%=login.getAcctDeptCd()%>";    // 접속자 귀속부서코드 
var appCheck = 0;
var vCostClsCd  = "";
var vBizDomCd = "";
var vAcctDeptCd = acctDeptCd;
var vCoCd =cfIsNull(<%=login.getCoCd()%>)?'':'<%=login.getCoCd()%>'; // 소속 자회사  
var vCoClsCd =cfIsNull(<%=login.getCoClsCd()%>)?'': '<%=login.getCoClsCd()%>'  ;//회계_회사구분('CO035' : 0:동부 EXPRESS)
var isSubCompany = false;
*/
scwin.acctDeptCd = ""; // 접속자 귀속부서코드
scwin.appCheck = 0;
scwin.vCostClsCd = "";
scwin.vBizDomCd = "";
scwin.vAcctDeptCd = "";
scwin.vCoCd = ""; // 소속자회사
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false; // 미사용

//String slipDt =  DDate.getDate();
scwin.slipDt = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.txt_empNo = ""; // 사원번호 (hidden)
scwin.txt_acctDeptCd = ""; // 회계부서코드 (hidden)

scwin.delCancelYn = "N"; // 삭제취소 여부 (N: 삭제, Y: 삭제취소)

scwin.ed_acctCd_hidVal = ""; // 계정과목 히든

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.userId = userId;
  scwin.privAdmin = privAdmin;
  scwin.empNo = empNo;

  // 추가 추출
  scwin.acctDeptCd = acctDeptCd;
  scwin.vAcctDeptCd = scwin.acctDeptCd; // 접속자 귀속부서코드

  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  scwin.vCoCd = coCd; // 소속자회사
  scwin.vCoClsCd = coClsCd; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

  console.log("▶▶ vLoginCoCd  : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ userId      : " + scwin.userId + "   empNo : " + scwin.empNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   privAdmin : " + scwin.privAdmin);

  // 추가 추출
  //    console.log("▶▶ vCoCd       : "+ scwin.vCoCd +"   vCoClsCd : "+ scwin.vCoClsCd);
  console.log("▶▶ vAcctDeptCd : " + scwin.vAcctDeptCd + "   vCoCd : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);

  // console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI069",
    compID: "gr_prov:taxnCls"
  } // 과세구분
  ];
  console.log(" codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // KYU_NEW : 사업영역조회 UDC 숨김 처리
    udc_bizDomCd.hide();

    //lc_delYn.index=0;
    lc_delYn.setSelectedIndex(0);
    // 2025-10-24 : 초기에 for=lc_delYn event=OnSelChange2() 이벤트가 안먹으므로 직접 실행
    scwin.f_DelYn();
    /*
    		txt_empNo.value 		= "<%=login.getEmpNo()%>";
    		txt_empNm.value 		= "<%=login.getUserNm()%>";
    		txt_acctDeptCd.value    = "<%=login.getAcctDeptCd()%>";
    		txt_acctDeptNm.value 	= "<%=login.getDeptNm()%>";
    		txt_occpgrdNm.value 	= "<%=login.getOccpgrdNm()%>";
    		//txt_empNo.value 		= "051749";
    */

    scwin.txt_empNo = scwin.empNo;
    ds_search.set("empNo", scwin.txt_empNo);
    ed_empNm.setValue($c.data.getMemInfo($p, "empNm"));
    scwin.txt_acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
    ds_search.set("acctDeptCd", scwin.txt_acctDeptCd);
    ed_acctDeptNm.setValue($c.data.getMemInfo($p, "acctDeptNm"));
    ed_occpgrdNm.setValue($c.data.getMemInfo($p, "occpgrdNm")); // 직급명

    //디폴트 날짜 변경(1월1일 ~ 해당월말일까지)	
    //		em_approveDateTo.text   = "<%=slipDt.substring(0,6)%>"+"<%=DDate.getLastDate(slipDt) %>";
    //		em_approveDateFrom.text = "<%=slipDt.substring(0,6)%>"+"01";
    //		cfDisableObjects([txt_empNm,txt_occpgrdNm,txt_acctDeptNm,txt_acctNm]);

    ed_approveDateTo.setValue($c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6) + $c.date.getLastDateOfMonth($p, $c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6)));
    ed_approveDateFrom.setValue($c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6) + "01");
    $c.gus.cfDisableObjects($p, [ed_empNm, ed_occpgrdNm, ed_acctDeptNm, ed_acctNm]);

    // 귀속부서 조회
    // temp = em_approveDateFrom.text.trim()+",,,"+vCoCd;
    // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo8',vAcctDeptCd,'','T',null,null,null,null,temp,",,,,,,1","450","500",null,null); // 귀속부서
    // vCostClsCd  = rtnList[9];	//비용구분코드
    // vBizDomCd = rtnList[3];	//사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)

    // 사업영역 조회
    scwin.f_openPopUp('2', 'T');

    //		f_Retrieve();
    scwin.f_Retrieve();

    //가우스의 데이터셋 오브젝트 간에 컬럼 헤더 정보를 복사
    //$c.gus.cfCopyDataSetHeader(ds_card, ds_card_import);

    // KYU_TEST
    scwin.getCardNum();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 그리드 - 구분 DECODE
//-------------------------------------------------------------------------
scwin.gubunExp = function (data) {
  return $c.gus.decode($p, data, "01", "승인", "02", "승인취소", "03", "매입", "04", "매입취소", "05", "청구");
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 카드번호 조회
//-------------------------------------------------------------------------
scwin.getCardNum = async function (e) {
  // 카드조회								
  // ds_cardNum.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  //                           + "&queryId=retrievecardNum&param1="+txt_empNo.value + "&param2=2";							
  // ds_cardNum.Reset();

  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "retrievecardNum" // 쿼리ID
    ,

    param1: scwin.txt_empNo //
    ,

    param2: 2 //
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  await $c.sbm.execute($p, sbm_searchCard);
};

//-------------------------------------------------------------------------
// 카드번호 조회
//-------------------------------------------------------------------------
scwin.sbm_searchCard_submitdone = function (e) {
  console.log("▷ sbm_searchCard_submitdone (카드번호 조회) submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_cardNum.setJSON(e.responseJSON.GAUCE);
  }

  // 전체는 넣을 필요가 없음
  //  language=JavaScript for=ds_cardNum event=OnLoadCompleted(rowcnt)>
  // 	ds_cardNum.InsertRow(1);
  // 	ds_cardNum.NameValue(1,"COL1") = "";
  // 	ds_cardNum.NameValue(1,"COL2") = "전체";
  // 	lc_cardNum.BindColVal = "";

  // ds_cardNum.insertRow(0);
  // ds_cardNum.setCellData(0,"col1","")
  // ds_cardNum.setCellData(0,"col2","전체");
  // lc_cardNum.setSelectedIndex(0);
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!cfValidate([em_approveDateFrom,em_approveDateTo,lc_delYn ]))
  // return true;

  // ds_search.UseChangeInfo = false;
  // em_approveDateFrom.text=em_approveDateFrom.text.trim();
  // em_approveDateTo.text=em_approveDateTo.text.trim();

  // tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveCorporationCardAdjustCMD.do";
  // tr_search.post();	

  // // em_cardNum.text = ds_card.NameValue(1,"cardNum");
  // appCheck = 0;

  // KYU_TEST 오류 발생
  //	if (!$c.gus.cfValidate([udc_approveDate.em_approveDateFrom, udc_approveDate.em_approveDateTo, lc_delYn ]))
  //	return true;

  let rtn = $c.gus.cfValidate($p, [ed_approveDateFrom, ed_approveDateTo, lc_delYn]);
  if (!rtn) return true;

  // KYU_NEW : 시작일자,종료일자 비교 : cfIsAfterDate - true 이면 동일할 때 오류 발생함. true 삭제
  ret = await $c.gus.cfIsAfterDate($p, ed_approveDateFrom.getValue(), ed_approveDateTo.getValue());
  if (!ret) {
    await $c.gus.cfAlertMsg($p, "종료일자는 시작일자 보다 이후 날짜 이어야 합니다.");
    ed_approveDateFrom.focus();
    return;
  }
  ;
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  await $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone ==================");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  scwin.appCheck = 0;
  //  language=JavaScript for=ds_card event=OnLoadCompleted(rowCnt)>
  // 	cfHideDSWaitMsg(gr_prov);
  // 	cfShowTotalRows(totalRows, rowCnt);

  var rowCnt = ds_card.getRowCount();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 헤더 체크박스 클릭
//-------------------------------------------------------------------------
scwin.gr_prov_onheaderclick = function (headerId) {
  console.log("----- gr_prov_onheaderclick (헤더 체크박스 클릭)");

  //  language="javascript"  for=gr_prov event=OnHeadCheckClick(Col,Colid,bCheck)>
  // 	var i = 0;
  // 	if ( Colid == "checkYn"){
  // 		if ( bCheck == "1"){
  // 			for ( i = 1 ; i <= ds_card.CountRow ; i++){
  // 				if (ds_card.NameValue(i,"gubun") != "04"){
  // 					ds_card.NameValue(i,"checkYn") = "T";
  // 				}
  // 			}
  // 		} else {
  // 			for ( i = 1 ; i <= ds_card.CountRow ; i++){
  // 				ds_card.NameValue(i,"checkYn") = "F";
  // 			}
  // 		}
  // 	}
  // 	appCheck = 0;

  var CountRow = ds_card.getTotalRow();
  var i = 0;
  if (headerId == "checkYn") {
    //var bCheck = headerId.getValue();
    var bCheck = gr_prov.getHeaderValue("checkYn");
    console.log("---  bCheck : " + bCheck);
    //        console.log("---  headerId.checked : "+ JSON.stringify(headerId.checked));

    if (bCheck) {
      for (i = 0; i < CountRow; i++) {
        //console.log("["+i+"] gubun : "+ ds_card.getCellData(i,"gubun"));

        if (ds_card.getCellData(i, "gubun") != "04") {
          // 구분(01:승인,02:승인취소,03:매입,04:매입취소,05:청구)
          ds_card.setCellData(i, "checkYn", "T");
        } else {
          //console.log("["+i+"] gubun 체크 안함 !! : "+ ds_card.getCellData(i,"gubun"));
          ds_card.setCellData(i, "checkYn", "F"); // 일괄적으로 T (체크) 되는 것 방지
        }
      }
    } else {
      for (i = 0; i < CountRow; i++) {
        ds_card.setCellData(i, "checkYn", "F");
      }
    }
  }
  scwin.appCheck = 0;
};

//-------------------------------------------------------------------------
// 그리드 - 컬럼 클릭
//-------------------------------------------------------------------------
scwin.gr_prov_oncellclick = async function (rowIndex, columnIndex, columnId) {
  //  language="javascript"  for=gr_prov event=OnCheckClick(Row,Colid,Check)>
  // 	if ( Colid == "checkYn"){
  // 		if (ds_card.NameValue(Row,"gubun") == "04"){
  // 	   		alert("매입취소는 전표를 발행 할 수 없습니다.")	;
  // 	   		ds_card.NameValue(Row,"checkYn") = "F";
  // 		}
  // 		var i = 0;
  // 		if(ds_card.NameValue(Row,"checkYn") == "T"){
  // 			for ( i = 1 ; i <= ds_card.CountRow ; i++){
  // 				if ((ds_card.NameValue(Row,"approveNum")==ds_card.NameValue(i,"approveNum")) &&(ds_card.NameValue(i,"gubun")== ds_card.NameValue(Row,"gubun"))){
  // 					ds_card.NameValue(i,"checkYn") = "T";
  // 				}
  // 			}
  // 		} else if(ds_card.NameValue(Row,"checkYn") == "F") {
  // 			for ( i = 1 ; i <= ds_card.CountRow ; i++){
  // 				if ((ds_card.NameValue(i,"approveNum")==ds_card.NameValue(Row,"approveNum")) &&(ds_card.NameValue(i,"gubun") == ds_card.NameValue(Row,"gubun"))){
  // 					ds_card.NameValue(i,"checkYn") = "F";
  // 				}
  // 			}
  // 		}

  var Row = rowIndex;
  // 체크박스
  if (columnId == "checkYn" && Row >= 0) {
    var checkYn = ds_card.getCellData(Row, "checkYn");
    if (ds_card.getCellData(Row, "gubun") == "04") {
      await $c.win.alert($p, "매입취소는 전표를 발행 할 수 없습니다.");
      ds_card.setCellData(Row, "checkYn", "F");
    }
    var i = 0;
    if (ds_card.getCellData(Row, "checkYn") == "T") {
      for (i = 0; i < ds_card.CountRow; i++) {
        if (ds_card.getCellData(Row, "approveNum") == ds_card.getCellData(i, "approveNum") && ds_card.getCellData(i, "gubun") == ds_card.getCellData(Row, "gubun")) {
          ds_card.setCellData(i, "checkYn", "T");
        }
      }
    } else if (ds_card.getCellData(Row, "checkYn") == "F") {
      for (i = 0; i < ds_card.CountRow; i++) {
        if (ds_card.getCellData(i, "approveNum") == ds_card.getCellData(Row, "approveNum") && ds_card.getCellData(i, "gubun") == ds_card.getCellData(Row, "gubun")) {
          ds_card.setCellData(i, "checkYn", "F");
        }
      }
    }
  }

  //  language="javascript"  for=gr_prov event=OnClick(Row,Colid)>
  // 	var i = 0;
  // 	if(Colid=="slipNo" && Row >0 && ds_card.NameValue(Row,"slipNo") != ""){
  // 		cfShowSlipInfo(ds_card.NameValue(Row,"slipNo"));	

  // 전표번호
  if (columnId == "slipNo" && rowIndex >= 0) {
    var slipNo = ds_card.getCellData(Row, "slipNo");
    if (slipNo != "") {
      //scwin.f_showSlipInofo(slipNo);
      let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 계정과목 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 계정과목 focus out
//-------------------------------------------------------------------------
scwin.udc_acctCd_onblurCodeEvent = function (e) {
  // KYU_NEW
  scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '1');
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:계정과목,2:사업영역)");
  // var rtnList = new Array();

  switch (flag) {
    case '1':
      // 계정과목

      // 팝업파라미터 정의
      var param = "T" // 01. 추가 WHERE 조건절 PARAM3
      + "," + ed_approveDateFrom.getValue().trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자
      + "," // 03. 추가 WHERE 조건절 PARAM5
      + "," // 04. 추가 WHERE 조건절 PARAM6
      + "," // 05. 추가 WHERE 조건절 PARAM7
      + "," + scwin.vCostClsCd // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드
      + "," + scwin.vBizDomCd // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드
      + "," // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
      ;
      console.log("  계정과목 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveExpenseAcctCdInfo2',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check /* 3 */, null, null, null, null, param, null, null, null, null);
      break;

    // KYU_NEW
    case '2':
      // 사업영역 : bizDomCd 가 없으면 계정과목이 잘못 나옴 (5 이외로 시작하는 계정 나옴)

      var temp = ed_approveDateFrom.getValue().trim() + ",,," + scwin.vCoCd;
      console.log("  사업영역 popup  temp [" + temp + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo8',vAcctDeptCd,'','T',null,null,null,null,temp,",,,,,,1","450","500",null,null); // 귀속부서
      udc_bizDomCd.cfCommonPopUp(scwin.udc_bizDomCd_callBackFunc, scwin.acctDeptCd, '', 'T' /* 3 */, null, null, null, null, temp, ",,,,,,1", "450", "500", null, null); // 귀속부서
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// udc_acctCd_callBackFunc (계정과목 조회 팝업 callBackFunc) (3)
//-------------------------------------------------------------------------
scwin.udc_acctCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_acctCd_callBackFunc (계정과목 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_acctCd, ed_acctNm, rtnList, '1');

  // if(ed_acctCd.text == "") {
  // 	ed_acctCd.text = ed_acctCd.text;
  //     f_checkPopEd(ed_acctCd,txt_acctNm,'1');
  // }
};

//-------------------------------------------------------------------------
// udc_acctCd_callBackFunc (사업영역 조회 팝업 callBackFunc) (3)
//-------------------------------------------------------------------------
scwin.udc_bizDomCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_bizDomCd_callBackFunc (사업영역 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.vCostClsCd = rtnList[9]; //비용구분코드
  scwin.vBizDomCd = rtnList[3]; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)

  // console.log("  vCostClsCd ["+scwin.vCostClsCd+"]  vBizDomCd ["+scwin.vBizDomCd+"]");
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:작성부서From,2:작성부서To,3:작성자)");

  // if (rtnList != null ) {
  // 	if (rtnList[0] == "N/A") return;
  // 	strCd.Text = rtnList[0];	// 코드
  // 	strNm.value = rtnList[1];	// 명
  // 	strCd.hidVal = rtnList[0];  // 히든값
  // }else{
  // 	strCd.Text = "";
  // 	strNm.value = "";
  // 	strCd.hidVal = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_acctCd_hidVal = "";
          break;
        default:
          break;
      }
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_acctCd_hidVal = rtnList[0];
        break;
      default:
        break;
    }
  } else {
    // strCd.Text = "";
    // strNm.value = "";
    // strCd.hidVal = "";

    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_acctCd_hidVal = "";
        break;
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  // if (strCd.text.trim() == strCd.hidVal)
  //        return;

  // strNm.value="";
  // strCd.hidVal="";
  // if(strCd.text.trim()!="") f_openPopUp(flag,'T');

  if (flag == '1' && strCd.getValue().trim() == scwin.ed_acctCd_hidVal // 계정과목히든
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return; // 리턴 안함. KYU_TEST 일단 리턴으로 변경
  }
  strNm.setValue("");

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_acctCd_hidVal = "";
      break;
    // 계정과목히든
    default:
      break;
  }
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 삭제여부변경시
//-------------------------------------------------------------------------
scwin.lc_delYn_onchange = function (info) {
  scwin.f_DelYn();
};

//-------------------------------------------------------------------------
// 삭제 / 삭제취소 버튼 SWAP
//-------------------------------------------------------------------------
scwin.f_DelYn = function (e) {
  /*
  <!-- 삭제여부변경시 LuxeCombo -->
  <script language=JavaScript for=lc_delYn event=OnSelChange2()>	
  	f_DelYn();
  
  	function f_DelYn(){
  		// "0^미삭제,1^삭제"
  		if(lc_delYn.BindColVal=="0"){
  			pu_evid3.style.display = "none";
  			pu_evid2.style.display = "inline";
  		}else if(lc_delYn.BindColVal=="1"){
  			pu_evid3.style.display = "inline";
  			pu_evid2.style.display = "none";
  		}
  	}
  */
  // "0^미삭제,1^삭제"
  if (lc_delYn.getSelectedIndex() == "0") {
    btn_pu_evid3.hide(); // 삭제취소
    btn_pu_evid2.show(""); // 삭제
  } else if (lc_delYn.getSelectedIndex() == "1") {
    btn_pu_evid3.show(""); // 삭제취소
    btn_pu_evid2.hide(); // 삭제
  }
};

// @@ ====== 삭제 ============================================================================== //

//-------------------------------------------------------------------------
// 삭제 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  console.log("=== f_Delete (삭제)");
  scwin.delCancelYn = "N"; // 삭제취소 여부 (N: 삭제, Y: 삭제취소)

  //if(ds_card.isUpdated==false){
  if (ds_card.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_056, "데이타"));
    return;
  }
  var countRow = ds_card.getTotalRow();

  // 이미 삭제된건 삭제하지 않는다.
  for (i = 0; i < countRow; i++) {
    var j = i + 1;
    //if( ds_card.RowStatus(i)==3 && ds_card.NameValue(i,"slipNo") != "" ) {

    var slipNo = ds_card.getCellData(i, "slipNo");
    //console.log(" ds_card.getRowStatus("+i+") ["+ ds_card.getRowStatus(i) +"]  slipNo ["+ slipNo +"]"  );

    if (ds_card.getRowStatus(i) == "U" && slipNo != "") {
      await $c.gus.cfAlertMsg($p, j + "번째 데이타는 전표내역이 있어 삭제할 수 없습니다.");
      return;
    }
  }

  // 삭제 전용 ds 구성 start
  ds_card_del.removeAll();
  var dcJSON = ds_card.getAllJSON(); // JSON 배열로 담기
  ds_card_del.setJSON(dcJSON, true); // append
  var dc = ds_card_del.getAllArray();
  var delChk = ds_card.getMatchedIndex("checkYn", "F", true); // 체크 안된 건의 INDEX
  var rsData = ds_card_del.removeRows(delChk); // 체크된 건만 남김

  var dc = ds_card_del.getAllArray();
  console.log("  ===== ds_card_del : " + JSON.stringify(dc));
  // 삭제 전용 ds 구성 end

  //if( $c.gus.cfConfirmMsg(MSG_CM_CRM_008,Array("선택하신 데이타"))==true) {	
  let rtn = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, "선택하신 데이타"));
  console.log("  rtn : " + rtn);
  if (rtn) {
    //		tr_delete.Action = "/ac.fi.gnrlaccount.slipmgnt.DeleteCorporationCardAdjustContentsCMD.do";
    //		tr_delete.Post();
    var subObj = $p.getSubmission("sbm_delete");
    subObj.action = "/ac.fi.gnrlaccount.slipmgnt.DeleteCorporationCardAdjustContentsCMD.do";
    console.log(" subObj [" + JSON.stringify(subObj.action) + "]");
    await $c.sbm.execute($p, subObj);
  }
};

//-------------------------------------------------------------------------
// 삭제취소 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_DeleteCancel = async function (e) {
  console.log("=== f_DeleteCancel (삭제취소)");
  scwin.delCancelYn = "Y"; // 삭제취소 여부 (N: 삭제, Y: 삭제취소)

  //if(ds_card.isUpdated==false){
  if (ds_card.getModifiedIndex().length == 0) {
    $c.win.alert($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }
  var countRow = ds_card.getTotalRow();

  // 삭제된건만 삭제취소를 한다.
  for (i = 0; i < countRow; i++) {
    //if(ds_card.RowStatus(i)==3 && ds_card.NameValue(i,"delYn")=="0"){

    var delYn = ds_card.getCellData(i, "delYn");
    //console.log(" ds_card.getRowStatus("+i+") ["+ ds_card.getRowStatus(i) +"]  delYn ["+ delYn +"]"  );

    if (ds_card.getRowStatus(i) == "U" && delYn == "0") {
      await $c.gus.cfAlertMsg($p, i + "번째 데이타는 삭제된 데이타가 아닙니다.");
      return;
    }
  }

  // 삭제 전용 ds 구성 start
  ds_card_del.removeAll();
  var dcJSON = ds_card.getAllJSON(); // JSON 배열로 담기
  ds_card_del.setJSON(dcJSON, true); // append
  var dc = ds_card_del.getAllArray();
  var delChk = ds_card.getMatchedIndex("checkYn", "F", true); // 체크 안된 건의 INDEX
  var rsData = ds_card_del.removeRows(delChk); // 체크된 건만 남김

  var dc = ds_card_del.getAllArray();
  console.log("  ===== ds_card_del : " + JSON.stringify(dc));
  // 삭제 전용 ds 구성 end

  //if(cfConfirmMsg("선택하신 데이타를 취소처리하시겠습니까?")==true){	
  let rtn = await $c.win.confirm($p, "선택하신 데이타를 취소처리하시겠습니까?");
  if (rtn) {
    //tr_delete.Action = "/ac.fi.gnrlaccount.slipmgnt.CancelDeleteCorporationCardAdjustContentsCMD.do";
    //tr_delete.Post();

    var subObj = $p.getSubmission("sbm_delete");
    subObj.action = "/ac.fi.gnrlaccount.slipmgnt.CancelDeleteCorporationCardAdjustContentsCMD.do";
    console.log(" subObj [" + JSON.stringify(subObj.action) + "]");
    await $c.sbm.execute($p, subObj);
  }
};

//-------------------------------------------------------------------------
// 삭제/삭제취소 submitdone
//-------------------------------------------------------------------------
scwin.sbm_delete_submitdone = async function (e) {
  console.log("▷ sbm_delete_submitdone ==================");
  /*
   language=JavaScript for=tr_delete event=OnSuccess()>
  	cfAlertMsg(MSG_CM_INF_004);
  	f_Retrieve() ;
  */
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  scwin.f_Retrieve();

  // 삭제취소 여부 (N: 삭제, Y: 삭제취소)
  //    if ( scwin.delCancelYn == "N" ) {
  //    }
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 발행 버튼 클릭
//   ds_card --> ds_card_import ---> ds_card_dump
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("=== f_Save (발행)");

  // 필수 입력 항목 중 빈 내용이 있다면
  //if (!cfCheckMandatory()) return;
  var i = 0;
  var j = 0;
  var count = 0;
  var slipCount = 0;
  var amt = 0; //매입금액
  var cancelAmt = 0; //매입취소금액
  var appNum = 0; //승인번호
  var gubun = 0; //구분 ( 03 - 매입, 04 - 매입취소 )
  var cancelAmt1 = 0; //이용금액 (매입취소처리 후)
  var cancelTex = 0; //부가세 (매입취소처리 후)
  var tax = 0; //세금
  var serviceCharge = 0; //봉사료
  var chkUseDt = "";
  var dtCnt = 0;
  /*
  	// 그리드의 데이터 헤더를 발행팝업용 데이터셋에 복사한다.
  	cfCopyDataSetHeader(ds_card, ds_card_import);
  	cfCopyDataSetHeader(ds_card, ds_card_dump);
   */

  var z = 1;

  // 조회결과 데이터셋의 루프만큼
  // for ( i = 1 ; i <= ds_card.CountRow ; i++){
  for (i = 0; i < ds_card.getTotalRow(); i++) {
    // 체크된 것만 로직을 타고,
    if (ds_card.getCellData(i, "checkYn") == "T") {
      count = count + 1;
      // 행의 전표번호가 없다면 전표번호의 갯수를 1증가한다.
      if (ds_card.getCellData(i, "slipNo") != "") {
        slipCount = slipCount + 1;
      }
      ds_card_import.setCellData(i, "acctCd", ds_card.getCellData(i, "acctCd"));
      ds_card_import.setCellData(i, "acctNm", ds_card.getCellData(i, "acctNm"));
      ds_card_import.setCellData(i, "summary", ds_card.getCellData(i, "summary"));

      // 한 ROW 씩 append
      //ds_card_import.ImportData(ds_card.ExportData(i, 1, true));

      // console.log(" ds_card_import.getTotalRow() : "+ ds_card_import.getTotalRow());

      ds_card_import.setRowData(ds_card_import.getTotalRow(), ds_card.getRowData(i)); // true : overwrite

      var dc = ds_card_import.getAllArray();
      console.log("111 [" + i + "]  ===== ds_card_import : " + JSON.stringify(dc));
    }
  }
  // 조회결과 데이터셋의 루프만큼
  //for ( i = 1 ; i <= ds_card_import.CountRow ; i++){
  for (i = 0; i < ds_card_import.getTotalRow(); i++) {
    ds_card_import.setCellData(i, "checkYn", "F");
  }
  var dc = ds_card_import.getAllArray();
  console.log("222 [" + i + "]  ===== ds_card_import : " + JSON.stringify(dc));

  // 조회결과 데이터셋의 루프만큼
  //for ( i = 1 ; i <= ds_card_import.CountRow ; i++){
  for (i = 0; i < ds_card_import.getTotalRow(); i++) {
    appNum = ds_card_import.getCellData(i, "approveNum"); // 승인번호
    gubun = ds_card_import.getCellData(i, "gubun"); // 매출입구분코드
    vendorTaxNum = ds_card_import.getCellData(i, "vendorTaxNum");
    chkUseDt = ds_card_import.getCellData(i, "dealDate");
    amt = 0; // 사용금액
    tax = 0; // 부가세액
    serviceCharge = 0; // 봉사료
    cancelAmt = 0;
    cancelTex = 0;

    // 전체 조회된 데이터 중에 선택된 행과 같은 승인번호를 검색하여,
    // 취소 금액을 합산하여 준다. ( 이유!. 할인의 경우에는 같은 승인번호에 마이너스 금액으로 입력되기 때문에 합쳐서 생각해줄 필요가 있다.)
    //for ( j = 1 ; j <= ds_card.CountRow ; j++ ) {
    for (j = 0; j < ds_card.getTotalRow(); j++) {
      if (appNum == ds_card.getCellData(j, "approveNum") && gubun != ds_card.getCellData(j, "gubun") && vendorTaxNum == ds_card.getCellData(j, "vendorTaxNum")) {
        cancelAmt = cancelAmt + parseInt(ds_card.getCellData(j, "approveAmt"));
        cancelTex = cancelTex + parseInt(ds_card.getCellData(j, "tax"));
      }
      if (appNum == ds_card.getCellData(j, "approveNum") && gubun == ds_card.getCellData(j, "gubun") && vendorTaxNum == ds_card.getCellData(j, "vendorTaxNum")) {
        amt = amt + parseInt(ds_card.getCellData(j, "approveAmt")); // 사용금액
        tax = tax + parseInt(ds_card.getCellData(j, "tax")); // 부가세액
        serviceCharge = serviceCharge + parseInt(ds_card.getCellData(j, "serviceCharge")); // 봉사료
      }
    }
    if (tax == 0) {
      ds_card_import.setCellData(i, "approveAmt", amt + cancelAmt);
      ds_card_import.setCellData(i, "approveTotal", amt + cancelAmt + serviceCharge);
    } else {
      ds_card_import.setCellData(i, "approveAmt", amt + cancelAmt);
      ds_card_import.setCellData(i, "tax", tax + cancelTex);
      ds_card_import.setCellData(i, "approveTotal", amt + tax + cancelAmt + cancelTex + serviceCharge);
    }
    if (chkUseDt.substring(0, 6) != ds_card_import.getCellData(i, "dealDate").substring(0, 6)) {
      dtCnt += 1;
    }

    // for ( var k = i+1 ; k <= ds_card_import.CountRow ;k++ ) {
    for (var k = i + 1; k < ds_card_import.getTotalRow(); k++) {
      if (appNum == ds_card_import.getCellData(k, "approveNum") && vendorTaxNum == ds_card_import.getCellData(k, "vendorTaxNum")) {
        ds_card_import.setCellData(k, "checkYn", "T");
      }
    }
  }

  // 조회결과 데이터셋의 루프만큼
  //for ( i = 1 ; i <= ds_card_import.CountRow ; i++){
  for (i = 0; i < ds_card_import.getTotalRow(); i++) {
    // 체크된 것만 로직을 타고,
    if (ds_card_import.getCellData(i, "checkYn") == "F") {
      //ds_card_dump.ImportData(ds_card_import.ExportData(i, 1, true));
      ds_card_dump.setRowData(i, ds_card_import.getRowData(i)); // true 옵션 빼야함

      var dc = ds_card_dump.getAllArray();
      console.log("333 [" + i + "]  ===== ds_card_dump : " + JSON.stringify(dc));
    }
  }
  cancelAmt = 0;
  cancelTex = 0;
  if (dtCnt > 0) {
    await $c.win.alert($p, "이용월이 다른건을 같이 처리할 수 없습니다.");
    return false;
  }
  if (count < 1) {
    await $c.win.alert($p, "선택한 데이타가 없습니다.");
    return false;
  } else {
    if (slipCount > 0) {
      await $c.win.alert($p, "이미 전표가 처리 된 데이타가 " + slipCount + "건 있습니다.");
      //ds_card_import.Reset();
      //ds_card_dump.Reset();
      ds_card_import.removeAll();
      ds_card_dump.removeAll();
      return false;
    }
  }

  //	var style       = "center:yes; dialogwidth:840px; dialogheight:660px; scroll:yes; resizable:yes; status:yes;";
  //	var strPath     = "fi_201_09_02p.jsp";  // 경비전표팝업
  //	var returnValue = window.showModalDialog(strPath, ds_card_dump ,style ) ;
  // returnValue 사용하는 곳 없음.

  /*
        getAllArray()        : 데이터 리스트의 전체 데이터를 컬럼 정보와 함께 1차원 배열로 변환하여 JSON에 담아 반환
        getAllJSON()         : 데이터 리스트의 각 행을 JSON 객체로 변환하고, 이 JSON 객체들을 1차원 배열에 담아 반환
  */

  var dc = ds_card_dump.getAllArray();
  console.log("444 ===== ds_card_dump : " + JSON.stringify(dc));
  var data = {
    ds_card_dump: ds_card_dump.getAllJSON() // 내역 전체
    //, callbackFn: scwin.callBackFunc
  };
  console.log("  before fi_201_09_02p (경비전표팝업) data " + JSON.stringify(data));

  // await $c.win.alert("[팝업호출] fi_201_09_02p (경비전표팝업) data");

  var opts = {
    id: "smpPop",
    popupName: "경비전표팝업" // 경비전표팝업
    ,

    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 950,
    title: "Win pop"
  };

  // 경비전표팝업
  let rtnList = await $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_09_02p.xml", opts, data);

  //ds_card_import.Reset();
  //ds_card_dump.Reset();

  ds_card_import.removeAll();
  ds_card_dump.removeAll();
  console.log("=== f_Save (발행) END ============================");
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 발행 submitdone
//-------------------------------------------------------------------------
scwin.sbm_saveProv_submitdone = function (e) {
  console.log("▷ sbm_saveProv_submitdone (발행) ==================");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
};

// @@ ====== 기타 ============================================================================== //

//-------------------------------------------------------------------------
// 일괄적용 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Modify = function (e) {
  console.log("=== f_Modify (일괄적용)");
  var i = 0;
  var rowCnt = ds_card.getTotalRow();

  // 조회결과 데이터셋의 루프만큼
  for (i = 0; i < rowCnt; i++) {
    // 체크된 것만 로직을 타고, 
    // if ( ds_card.NameValue(i,"checkYn")=="T"){
    if (ds_card.getCellData(i, "checkYn") == "T") {
      // 전표발행 안된것만 변경
      if (ds_card.getCellData(i, "slipNo") == "") {
        ds_card.setCellData(i, "acctCd", ed_acctCd.getValue()); // 계정과목코드
        ds_card.setCellData(i, "acctNm", ed_acctNm.getValue()); // 계정과목명
        ds_card.setCellData(i, "summary", ed_summary.getValue()); // 적요
      }
    }
  }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_prov");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "개인형법인카드정산","개인형법인카드정산.xls",8+16);
  // }

  if (ds_card.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "개인형법인카드정산";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: "개인형법인카드정산" + ".xlsx",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_prov, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이용기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'approveDateFrom',style:'',id:'udc_approveDate',refEdDt:'approveDateTo',refDataMap:'ds_search',edFromId:'ed_approveDateFrom',edToId:'ed_approveDateTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_delYn',ref:'data:ds_search.delYn',renderType:'',style:'width: 100px;',submenuSize:'auto',objType:'data','ev:onchange':'scwin.lc_delYn_onchange',title:'삭제여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표발행',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipYn',ref:'data:ds_search.slipYn',renderType:'',style:'width: 100px;',submenuSize:'auto',objType:'data',title:'전표발행'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미발행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입취소제외',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cancelYn',ref:'data:ds_search.cancelYn',renderType:'',style:'width: 100px;',submenuSize:'auto',objType:'data',title:'매입취소제외'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미제외'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'lc_cardNum',objType:'data',ref:'data:ds_search.cardNum',search:'start',style:'width: 300px;',submenuSize:'auto',title:'카드번호'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cardNum'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_empNm',placeholder:'',style:'width: 208px;',objType:'data',ref:'data:ds_search.empNm',title:'성명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_occpgrdNm',placeholder:'',style:'',objType:'data',ref:'data:ds_search.occpgrdNm',title:'직급'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_acctDeptNm',objType:'data',placeholder:'',ref:'data:ds_search.acctDeptNm',style:';',title:'부서'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctCd',codeId:'ed_bizDomCd','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent',id:'udc_bizDomCd',maxlengthCode:'6',maxlengthName:'50',nameId:'udc_bizDomNm',popupID:'retrieveAcctDeptCdInfo8popup',selectID:'retrieveAcctDeptCdInfo8',style:'',validTitle:'사업영역',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'개인형법인카드 사용내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_prov',id:'udc_topGrdBtn',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_card',id:'gr_prov',visibleRowNum:'15',class:'wq_gvw','ev:oncellclick':'scwin.gr_prov_oncellclick',rowStatusVisible:'false','ev:onheaderclick':'scwin.gr_prov_onheaderclick',evenRowBackgroundColor:'#F8FFF8',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'checkYn',displayMode:'label',checkboxLabel:' ',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column2',value:'카드번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'이용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'이용금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'봉사료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'상호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'업종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column59',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'과세유형구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'대표자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column53',value:'거래처주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'승인번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column49',value:'전결위임구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'checkYn',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cardNum',value:'',displayMode:'label',displayFormat:'####-####-####-####'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'gubun',displayMode:'label',displayFormatter:'scwin.gubunExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dealDate',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'approveAmt',class:'',displayMode:'label',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'tax',class:'',displayMode:'label',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'serviceCharge',class:'',displayMode:'label',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'vendorName',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mmcName',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vendorTaxNum',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'taxnCls',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vendorPerson',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'250',inputType:'text',style:'',id:'address',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'approveNum',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'apprvGbn',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',expression:'sum(\'approveAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column78',value:'',displayMode:'label',expression:'sum(\'tax\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',expression:'sum(\'serviceCharge\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정과목',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveExpenseAcctCdInfo2popup',style:'',codeId:'ed_acctCd',nameId:'ed_acctNm',objTypeCode:'Data',UpperFlagCode:'1',allowCharCode:'0-9',objTypeName:'data',maxlengthCode:'7',code:'acctCd',selectID:'retrieveExpenseAcctCdInfo2',id:'udc_acctCd',btnId:'btn_acctCd','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent',validTitle:'계정과목',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',style:''}},{T:1,N:'xf:input',A:{class:'form-control w300',id:'ed_summary',placeholder:'',style:'',title:'적요',maxlength:'100'}},{T:1,N:'w2:button',A:{class:'btn sm',id:'btn_bMod',label:'일괄적용',style:'',userAuth:'U','ev:onclick':'scwin.f_Modify'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_pu_evid2',label:'삭제',style:'','ev:onclick':'scwin.f_Delete',userAuth:'D'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_pu_evid3',label:'삭제취소',style:'',userAuth:'D','ev:onclick':'scwin.f_DeleteCancel'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_bSav1',label:'발행',style:'','ev:onclick':'scwin.f_Save',userAuth:'U'}}]}]}]}]}]}]}]})