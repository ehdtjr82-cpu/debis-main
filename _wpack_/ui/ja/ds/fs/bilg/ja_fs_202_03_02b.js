/*amd /ui/ja/ds/fs/bilg/ja_fs_202_03_02b.xml 95694 8d6021b01708bfa40141c40a523576dd6a850a19e07f4a0d9604565cbac5b944 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'save_dma_order'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgOdrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsCreatYn',name:'매입생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자체구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'환종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiCommon',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'기타금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wcrcDcsnClsCd',name:'원화확정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'외화청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급가액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCertiNo',name:'상위거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiCreatYn',name:'거래명세서생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'기재서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'transCargoClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'save_dma_certiCommon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellVatNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'환종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:key',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fireInsrRateAmt',name:'기타금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wcrcDcsnClsCd',name:'원화확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAmtFcrc',name:'청구금액외화',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fcrcBilgAmt',name:'외화청구금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmtFcrc',name:'공급가액외화',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperCertiNo',name:'상위거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiCreatYn',name:'거래명세서생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inscrpFmlaPatternCd',name:'기재서식유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'transCargoClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCerti',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'save_dma_purchaseCerti'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unitySelling',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출 순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNoQry',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldSellGoodsPatternCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNoDesc',name:'품명 (장비) 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'품명 (장비) 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가_매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가_매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'공급금액_매출원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'공급금액_매출외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'공급금액_매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsVatAmt',name:'부가세_매입(부)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세_매출(부)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'매입합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입 순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR-NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'name36',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name37',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name39',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtYn',name:'name42',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'name48',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wtUnitCd',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'name51',dataType:'number'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpSellItemNm',name:'기재매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCdDesc',name:'매출귀속부서설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_orderNum',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fmlapattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempExcel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출외화',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출외화',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fmlapattern'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGeneralBillingOrder',action:'/ja.ds.fs.bilg.bilg.JaRetrieveGeneralBillingOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_certiCommon","key":"OUT_DS2"},{"id":"ds_purchaseCerti","key":"OUT_DS3"},{"id":"ds_unitySelling","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_certiCommon","key":"OUT_DS2"},{"id":"ds_purchaseCerti","key":"OUT_DS3"},{"id":"ds_unitySelling","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_retrieveGeneralBillingOrder_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_registGeneralBillingOrder',action:'/ja.ds.fs.bilg.bilg.JaRegistGeneralBillingOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"save_dma_order","key":"IN_DS1"},{"id":"ds_unitySelling","key":"IN_DS2"},{"id":"save_dma_certiCommon","key":"IN_DS3"},{"id":"save_dma_purchaseCerti","key":"IN_DS4"},{"id":"ds_orderNum","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_orderNum","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_registGeneralBillingOrder_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteGeneralBillingOrder',action:'/ja.ds.fs.bilg.bilg.JaDeleteGeneralBillingOrderCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_unitySelling","key":"IN_DS2"},{"id":"ds_certiCommon","key":"IN_DS3"},{"id":"ds_purchaseCerti","key":"IN_DS4"}]',target:'','ev:submitdone':'scwin.sbm_deleteGeneralBillingOrder_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFmlaPattern',action:'/ja.ds.fs.bilg.bilg.JaRetrieveProgramEachCertiFormulaCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,dma_fmlapattern',target:'data:json,{"id":"ds_fmlapattern","key":"GAUCE"}'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.quantityOfRows = "";
scwin.pageNumber = "1";
scwin.vCoCd = "";
scwin.vCoClsCd = "";
scwin.txtCoClsCd = "";
scwin.hd_acctCdGbn = "";
scwin.hd_acctDeptCdGbn = "";
scwin.MSG_FS_WRN_020 = "통합매출입 정보를 생성해야 합니다.";
scwin.MSG_FS_WRN_021 = "CNTR-NO를 입력해야 합니다.";
scwin.MSG_FS_WRN_022 = "품명(장비)코드를 입력해야 합니다.";
scwin.pgmId = "ja_fs_202_03_02b.jsp";
scwin.dcsnClsCd = "2";
scwin.arg = "";
scwin.vCurDate = "";
scwin.empNo = "";
scwin.isLoad = false;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.empNo = $c.data.getMemInfo($p, "userId");
  let params = $c.data.getParameter($p);
  if (params != null) {
    if (params["flag"] != null && params["flag"] != "") {
      scwin.arg = params["flag"];
    }
    if (params["odrNo"] != null) {
      scwin.paramOdrNo = params["odrNo"];
    } else {
      scwin.paramOdrNo = "";
    }
  } else {
    scwin.paramOdrNo = "";
  }
  scwin.vLoginCoCd = $c.data.getMemInfo($p, "coCd") || "";
  scwin.vLoginCoClsCd = $c.data.getMemInfo($p, "coClsCd") || "";
  scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd") || "";
  scwin.vCoCd = scwin.vLoginCoCd;
  scwin.vCoClsCd = scwin.vLoginCoClsCd;
};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "JA003",
    compID: "acb_odrKndCd"
  },
  // 셀렉트
  {
    grpCd: "SD070",
    compID: "acb_sellTaxnClsCd, acb_pchsTaxnClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_Clear();
  await scwin.f_setCompanyInfo();
  scwin.f_RetrieveFmalPattern();
  scwin.f_GetSellItemCd();
  scwin.isLoad = true;
  scwin.f_Retrieve(scwin.arg);
  $c.gus.cfDisableObjects($p, [bSave, bDelete]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (arg) {
  let odrNo;
  if (arg == "DETAIL") {
    ed_odrNo.setValue(scwin.paramOdrNo);
    odrNo = scwin.paramOdrNo;
  } else if (arg == "REFERENCE") {
    odrNo = scwin.paramOdrNo;
  } else if (arg == "INPUT") {
    scwin.arg = arg;
    let chk = await $c.gus.cfValidate($p, [ed_odrNo], null, true);
    if (!chk) {
      return;
    }
    odrNo = ed_odrNo.getValue();
  } else {
    odrNo = "";
  }
  dma_queryCondition.undo();
  dma_queryCondition.set("odrNo", odrNo);
  dma_queryCondition.set("coCd", ed_coCd.getValue());
  scwin.f_Clear();
  await $c.sbm.execute($p, sbm_retrieveGeneralBillingOrder);
};

//-------------------------------------------------------------------------
// 조건 서식구분 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveFmalPattern = function () {
  let p_bilgLodeptCd = scwin.vCoCd;
  let p_pgmId = scwin.pgmId;
  let p_fmlaClsCd = acb_fmlaClsCd.getValue();
  dma_fmlapattern.set("sysCd", "JaCertiFormulaEBC");
  dma_fmlapattern.set("queryId", "jaRetrieveProgramEachCertiFormulaList");
  dma_fmlapattern.set("bilgLodeptCd", p_bilgLodeptCd);
  dma_fmlapattern.set("pgmId", p_pgmId);
  dma_fmlapattern.set("fmlaClsCd", p_fmlaClsCd);
  dma_fmlapattern.set("coCd", scwin.vCoCd);
  $c.sbm.execute($p, sbm_retrieveFmlaPattern);
};

//-------------------------------------------------------------------------
// 저장,삭제 후 조회
//-------------------------------------------------------------------------
scwin.f_OdrNORetrieve = async function () {
  scwin.arg = "INPUT";
  dma_queryCondition.set("coCd", ed_coCd.getValue());
  let odrNoVal = dtl_odrNo.getValue();
  if (odrNoVal != null && odrNoVal != "") {
    dma_queryCondition.set("odrNo", odrNoVal);
  } else {
    dma_queryCondition.set("odrNo", ds_orderNum.getCellData(0, "odrNo"));
  }
  await $c.sbm.execute($p, sbm_retrieveGeneralBillingOrder);
};

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (acb_crcCd.getValue() != "KRW" && (acb_sellTaxnClsCd.getValue() == "01" || acb_sellTaxnClsCd.getValue() == "04")) {
    await $c.win.alert($p, "환종이 외화일경우 과세일 수 없습니다.");
    acb_sellTaxnClsCd.focus();
    return;
  }
  let old_rowposition = ds_unitySelling.getRowPosition();
  ds_unitySelling.insertRow(ds_unitySelling.getRowCount());
  ds_unitySelling.setRowPosition(ds_unitySelling.getRowCount() - 1);
  $c.gus.cfEnableObjects($p, [bSave, bDelete]);
  let curRow = ds_unitySelling.getRowPosition();
  if (ds_unitySelling.getRowCount() == 1) {
    acb_odrKndCd.setDisabled(true);
    acb_fmlaClsCd.setDisabled(true);
    acb_fmlaPatternCd.setDisabled(true);
    acb_crcCd.setDisabled(true);
    acb_sellTaxnClsCd.setDisabled(true);
    acb_pchsTaxnClsCd.setDisabled(true);
    ds_unitySelling.setCellData(curRow, "sellSeq", 1);
  } else {
    let maxSellSeq = 0;
    for (let r = 0; r < ds_unitySelling.getRowCount(); r++) {
      let v = Number(ds_unitySelling.getCellData(r, "sellSeq")) || 0;
      if (v > maxSellSeq) maxSellSeq = v;
    }
    ds_unitySelling.setCellData(curRow, "sellSeq", maxSellSeq + 1);
    ds_unitySelling.setCellData(curRow, "sellItemCd", ds_unitySelling.getCellData(old_rowposition, "sellItemCd"));
    ds_unitySelling.setCellData(curRow, "sellItemNm", ds_unitySelling.getCellData(old_rowposition, "sellItemNm"));
    ds_unitySelling.setCellData(curRow, "sellCommNo", ds_unitySelling.getCellData(old_rowposition, "sellCommNo"));
    ds_unitySelling.setCellData(curRow, "sellCommNoQry", ds_unitySelling.getCellData(old_rowposition, "sellCommNoQry"));
    ds_unitySelling.setCellData(curRow, "commCd", ds_unitySelling.getCellData(old_rowposition, "commCd"));
    ds_unitySelling.setCellData(curRow, "sellAmt", ds_unitySelling.getCellData(old_rowposition, "sellAmt"));
    ds_unitySelling.setCellData(curRow, "sellAmtFcrc", ds_unitySelling.getCellData(old_rowposition, "sellAmtFcrc"));
    ds_unitySelling.setCellData(curRow, "vatAmt", ds_unitySelling.getCellData(old_rowposition, "vatAmt"));
    ds_unitySelling.setCellData(curRow, "pchsAmt", ds_unitySelling.getCellData(old_rowposition, "pchsAmt"));
    ds_unitySelling.setCellData(curRow, "pchsVatAmt", ds_unitySelling.getCellData(old_rowposition, "pchsVatAmt"));
    ds_unitySelling.setCellData(curRow, "totSellAmt", ds_unitySelling.getCellData(old_rowposition, "totSellAmt"));
    ds_unitySelling.setCellData(curRow, "totPchsAmt", ds_unitySelling.getCellData(old_rowposition, "totPchsAmt"));
  }
  scwin.f_SetSellYn(ds_unitySelling.getCellData(curRow, "sellItemCd"), curRow);
  if (rd_pchsCreatYn.getValue() == "1") {
    ds_unitySelling.setCellData(curRow, "pchsSeq", ds_unitySelling.getCellData(curRow, "sellSeq"));
  }
  scwin.f_SumAmt();
};
scwin.f_SetSellYn = function (pSellItemCd, curRow) {
  if (pSellItemCd == "0375") {
    ds_unitySelling.setCellData(curRow, "sellYn", "0");
  } else {
    ds_unitySelling.setCellData(curRow, "sellYn", "1");
  }
  scwin.f_mathAmt(curRow, "sellItemCd");
};
scwin.f_DeleteRow = function () {
  let pos = ds_unitySelling.getRowPosition();
  if (pos >= 0) {
    ds_unitySelling.removeRow(pos);
  }
  if (ds_unitySelling.getRowCount() == 0) {
    acb_odrKndCd.setDisabled(false);
    acb_fmlaClsCd.setDisabled(false);
    acb_fmlaPatternCd.setDisabled(false);
    acb_crcCd.setDisabled(false);
    acb_sellTaxnClsCd.setDisabled(false);
    acb_pchsTaxnClsCd.setDisabled(false);
  }
  scwin.f_SumAmt();
};
scwin.f_Save = async function () {
  //if(!ds_order.IsUpdated && ds_certiCommon.IsUpdated && ds_purchaseCerti.IsUpdated && ds_unitySelling.IsUpdated){
  if (ds_order.getModifiedIndex().length == 0 && ds_certiCommon.getModifiedIndex().length != 0 && ds_purchaseCerti.getModifiedIndex().length != 0 && ds_unitySelling.getModifiedIndex().length != 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["일반청구오더 관리"]);
    return;
  }
  if (rd_pchsCreatYn.getValue() == "1") {
    let chk = await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_bilgClntNo, ed_pchsDeptCd, ed_pchsClntNo], null, true);
    if (!chk) return;
  } else {
    let chk = await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_bilgClntNo], null, true);
    if (!chk) return;
  }
  if (acb_crcCd.getValue() != "KRW") {
    let chk = await $c.gus.cfValidate($p, [ed_adptExchRt], null, true);
    if (!chk) return;
  }
  if (ds_unitySelling.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_020);
    return;
  }
  let chkGrid = await $c.gus.cfValidate($p, [gr_unitySelling], null, true);
  if (!chkGrid) {
    return;
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirmResult) return;
  if (acb_sellTaxnClsCd.getValue() == "01" || acb_sellTaxnClsCd.getValue() == "04") {
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      if (Number(ds_unitySelling.getCellData(i, "vatAmt")) == 0) {
        await $c.win.alert($p, "매출순번 " + (i + 1) + "번의 부가세를 입력해주세요.");
        return;
      }
    }
  }
  if (acb_sellTaxnClsCd.getValue() == "02" || acb_sellTaxnClsCd.getValue() == "03") {
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      if (Number(ds_unitySelling.getCellData(i, "vatAmt")) > 0) {
        await $c.win.alert($p, "매출순번 " + (i + 1) + "번의 부가세를 확인해주세요.");
        return;
      }
    }
  }
  scwin.f_OrderDataSet();
  scwin.f_CertiCommonDataSet();
  scwin.f_PurchaseCertiDataSet();
  scwin.f_UnitySellingDataSet();
  await $c.sbm.execute($p, sbm_registGeneralBillingOrder);
};
scwin.f_Delete = async function () {
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (confirmResult == true) {
    ds_order.setCellData(0, "odrDelYn", "1");
    ds_unitySelling.setCellData(0, "delYn", "1");
    ds_order.setCellData(0, "coCd", ed_coCd.getValue());
    ds_certiCommon.setCellData(0, "coCd", ed_coCd.getValue());
    ds_purchaseCerti.setCellData(0, "coCd", ed_coCd.getValue());
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      ds_unitySelling.setCellData(i, "coCd", ed_coCd.getValue());
    }
    await $c.sbm.execute($p, sbm_deleteGeneralBillingOrder);
  }
};
scwin.f_OrderDataSet = function () {
  ds_order.insertRow();
  ds_order.setCellData(0, "coCd", ed_coCd.getValue());
  //ds_order.setCellData(0, "order", dtl_odrNo.getValue());
  ds_order.setCellData(0, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
  ds_order.setCellData(0, "bilgOdrKndCd", acb_odrKndCd.getValue());
  ds_order.setCellData(0, "bilgClntNo", ed_bilgClntNo.getValue());
  ds_order.setCellData(0, "pchsCreatYn", rd_pchsCreatYn.getValue());
  ds_order.setCellData(0, "selfClsCd", "LI");
  ds_order.setCellData(0, "sellLodeptCd", ed_bilgLodeptCd.getValue());
  ds_order.setCellData(0, "sellYn", "1");
  ds_order.setCellData(0, "crcCd", acb_crcCd.getValue());
  ds_order.setCellData(0, "adptExchRt", ed_adptExchRt.getValue());

  // list에서 변경된 첫번째 json map에 세팅
  let modifiedIndexArr = ds_order.getModifiedIndex();
  let json = "";
  if (modifiedIndexArr[0] != null) {
    json = ds_order.getRowJSON(modifiedIndexArr[0]);
  } else {
    json = ds_order.getRowJSON(ds_order.getRowCount() - 1);
  }
  save_dma_order.setJSON(json);
};
scwin.f_CertiCommonDataSet = function () {
  ds_certiCommon.insertRow();
  ds_certiCommon.setCellData(0, "coCd", ed_coCd.getValue());
  ds_certiCommon.setCellData(0, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
  ds_certiCommon.setCellData(0, "certiNo", ed_sellCertiNo.getValue());
  ds_certiCommon.setCellData(0, "sellVatNo", ed_sellVatNo.getValue());
  ds_certiCommon.setCellData(0, "crcCd", acb_crcCd.getValue());
  ds_certiCommon.setCellData(0, "adptExchRt", ed_adptExchRt.getValue());
  ds_certiCommon.setCellData(0, "taxnClsCd", acb_sellTaxnClsCd.getValue());
  ds_certiCommon.setCellData(0, "fmlaClsCd", acb_fmlaClsCd.getValue());
  ds_certiCommon.setCellData(0, "fmlaPatternCd", acb_fmlaPatternCd.getValue());
  ds_certiCommon.setCellData(0, "spplyAmt", ed_sellAmt.getValue());
  ds_certiCommon.setCellData(0, "vatAmt", ed_vatAmt.getValue());
  ds_certiCommon.setCellData(0, "totAmt", ed_totSellAmt.getValue());
  ds_certiCommon.setCellData(0, "fireInsrRateAmt", ed_fireInsrRateAmt.getValue());
  if (acb_crcCd.getValue() == "KRW") {
    let bilgAmt = Number(ds_certiCommon.getCellData(0, "spplyAmt")) + Number(ds_certiCommon.getCellData(0, "vatAmt")) + Number(ds_certiCommon.getCellData(0, "fireInsrRateAmt"));
    ds_certiCommon.setCellData(0, "bilgAmt", bilgAmt);
    ds_certiCommon.setCellData(0, "wcrcDcsnClsCd", "01");
  } else {
    ds_certiCommon.setCellData(0, "bilgAmtFcrc", ed_sellAmtFcrc.getValue());
    ds_certiCommon.setCellData(0, "fcrcBilgAmt", ed_sellAmt.getValue());
    ds_certiCommon.setCellData(0, "wcrcDcsnClsCd", "02");
    ds_certiCommon.setCellData(0, "spplyAmtFcrc", ed_sellAmtFcrc.getValue());
  }
  ds_certiCommon.setCellData(0, "upperCertiNo", "0");
  if (scwin.vCoCd == "029") {
    if (acb_fmlaClsCd.getValue() == "01") {
      ds_certiCommon.setCellData(0, "certiPatternCd", "V");
    } else {
      ds_certiCommon.setCellData(0, "certiPatternCd", "C");
    }
  } else if (scwin.vCoCd == "028") {
    if (acb_fmlaClsCd.getValue() == "01") {
      ds_certiCommon.setCellData(0, "certiPatternCd", "H");
    } else {
      ds_certiCommon.setCellData(0, "certiPatternCd", "E");
    }
  }
  ds_certiCommon.setCellData(0, "confirmDt", ed_confirmDt.getValue());
  ds_certiCommon.setCellData(0, "bilgClntNo", ed_bilgClntNo.getValue());
  ds_certiCommon.setCellData(0, "dcsnClsCd", scwin.dcsnClsCd);
  ds_certiCommon.setCellData(0, "pgmId", scwin.pgmId);
  ds_certiCommon.setCellData(0, "certiCreatYn", rd_certiCreatYn.getValue());

  // list에서 변경된 첫번째 json map에 세팅
  let modifiedIndexArr = ds_certiCommon.getModifiedIndex();
  let json = "";
  if (modifiedIndexArr[0] != null) {
    json = ds_certiCommon.getRowJSON(modifiedIndexArr[0]);
  } else {
    json = ds_certiCommon.getRowJSON(ds_certiCommon.getRowCount() - 1);
  }
  save_dma_certiCommon.setJSON(json);
};
scwin.f_PurchaseCertiDataSet = function () {
  ds_purchaseCerti.insertRow();
  ds_purchaseCerti.setCellData(0, "coCd", ed_coCd.getValue());
  ds_purchaseCerti.setCellData(0, "pchsDeptCd", ed_pchsDeptCd.getValue());
  ds_purchaseCerti.setCellData(0, "pchsClntNo", ed_pchsClntNo.getValue());
  ds_purchaseCerti.setCellData(0, "pchsAmt", ed_pchsAmt.getValue());
  ds_purchaseCerti.setCellData(0, "vat", ed_pchsVatAmt.getValue());

  // list에서 변경된 첫번째 json map에 세팅
  let modifiedIndexArr = ds_purchaseCerti.getModifiedIndex();
  let json = "";
  if (modifiedIndexArr[0] != null) {
    json = ds_purchaseCerti.getRowJSON(modifiedIndexArr[0]);
  } else {
    json = ds_purchaseCerti.getRowJSON(ds_purchaseCerti.getRowCount() - 1);
  }
  save_dma_purchaseCerti.setJSON(json);
};
scwin.f_UnitySellingDataSet = function () {
  for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
    ds_unitySelling.setCellData(i, "coCd", ed_coCd.getValue());
    ds_unitySelling.setCellData(i, "sellCommNo", ds_unitySelling.getCellData(i, "sellItemCd"));
    ds_unitySelling.setCellData(i, "commCd", "");
    ds_unitySelling.setCellData(i, "crcCd", acb_crcCd.getValue());
    ds_unitySelling.setCellData(i, "spplyAmtFcrc", ds_unitySelling.getCellData(i, "sellAmtFcrc"));
    ds_unitySelling.setCellData(i, "spplyAmt", ds_unitySelling.getCellData(i, "sellAmt"));
    ds_unitySelling.setCellData(i, "dcsnClsCd", "1");
    ds_unitySelling.setCellData(i, "wrkStDt", ed_rsltsStdDt.getValue());
    ds_unitySelling.setCellData(i, "rsltsStdDt", ed_rsltsStdDt.getValue());
    ds_unitySelling.setCellData(i, "bilgTrgtYn", "1");
    ds_unitySelling.setCellData(i, "taxnClsCd", acb_sellTaxnClsCd.getValue());
    ds_unitySelling.setCellData(i, "odrDt", scwin.vCurDate);
    ds_unitySelling.setCellData(i, "pchsSeq", ds_unitySelling.getCellData(i, "sellSeq"));
    if (ds_unitySelling.getCellData(i, "wtUnitCd") == "TON") {
      ds_unitySelling.setCellData(i, "unitClsCd", "02");
    } else {
      ds_unitySelling.setCellData(i, "unitClsCd", "01");
    }
    ds_unitySelling.setCellData(i, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
    ds_unitySelling.setCellData(i, "bilgClntNo", ed_bilgClntNo.getValue());
    if (ds_unitySelling.getCellData(i, "sellYn") == "0") {
      ds_unitySelling.setCellData(i, "taxnClsCd", "3");
    }
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = new Array();
  let qryYear = ed_confirmDt.getValue().trim().substring(0, 4);
  switch (disGubun) {
    case 1:
      let param1 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_bilgLodept.setSelectId("retrieveAcctDeptCdInfo6");
      udc_bilgLodept.cfCommonPopUp(scwin.callbackBilgLodept, ed_bilgLodeptCd.getValue().trim(), ed_bilgLodeptNm.getValue(), "T", null, null, null, null, param1, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case 2:
      let param2 = ",,," + ed_coCd.getValue();
      udc_bilgClnt.cfCommonPopUp(scwin.callbackBilgClnt, ed_bilgClntNo.getValue().trim(), ed_bilgClntNm.getValue(), "T", null, null, null, null, param2, null, null, null, null);
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      let param7 = ",,," + ed_coCd.getValue();
      udc_pchsDept.setSelectId("retrieveAcctDeptCdInfo6");
      udc_pchsClnt.cfCommonPopUp(scwin.callbackPchsClntNo, ed_pchsClntNo.getValue().trim(), ed_pchsClntNm.getValue(), "T", null, null, null, null, param7, null, null, null, null);
      break;
    case 8:
      let param8 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_pchsDept.cfCommonPopUp(scwin.callbackPchsDeptCd, ed_pchsDeptCd.getValue().trim(), ed_pchsDeptNm.getValue(), "T", null, null, null, null, param8, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    default:
      break;
  }
};
scwin.callbackBilgLodept = function (rtnList) {
  scwin.f_resultPopEd(ed_bilgLodeptCd, ed_bilgLodeptNm, rtnList);
};
scwin.callbackBilgClnt = function (rtnList) {
  scwin.f_resultPopEd(ed_bilgClntNo, ed_bilgClntNm, rtnList);
};
scwin.callbackPchsClntNo = function (rtnList) {
  scwin.f_resultPopEd(ed_pchsClntNo, ed_pchsClntNm, rtnList);
};
scwin.callbackPchsDeptCd = function (rtnList) {
  scwin.f_resultPopEd(ed_pchsDeptCd, ed_pchsDeptNm, rtnList);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};

// 미사용
scwin.f_grdHeight = function (size) {
  let strHeight = gr_unitySelling.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gr_unitySelling.style.height = intHeight + "px";
  }
};
scwin.f_downExcelSheet = async function () {
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    $c.data.downloadGridViewExcel($p, gr_unitySelling, {
      fileName: "통합매출입내역.xlsx",
      sheetName: "통합매출입내역"
    });
  }
};
scwin.f_SumAmt = function () {
  let sellAmtFcrc = 0;
  let sellAmt = 0;
  let totSellAmt = 0;
  let pchsAmt = 0;
  let totPchsAmt = 0;
  let fireInsrRateAmt = 0;
  for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
    if (ds_unitySelling.getCellData(i, "sellYn") == "1") {
      sellAmtFcrc = sellAmtFcrc + Number(ds_unitySelling.getCellData(i, "sellAmtFcrc"));
      sellAmt = sellAmt + Number(ds_unitySelling.getCellData(i, "sellAmt"));
      totSellAmt = totSellAmt + Number(ds_unitySelling.getCellData(i, "totSellAmt"));
      pchsAmt = pchsAmt + Number(ds_unitySelling.getCellData(i, "pchsAmt"));
      totPchsAmt = totPchsAmt + Number(ds_unitySelling.getCellData(i, "totPchsAmt"));
      ds_unitySelling.setCellData(i, "vatAmt", Number(ds_unitySelling.getCellData(i, "totSellAmt")) - Number(ds_unitySelling.getCellData(i, "sellAmt")));
      ds_unitySelling.setCellData(i, "pchsVatAmt", Number(ds_unitySelling.getCellData(i, "totPchsAmt")) - Number(ds_unitySelling.getCellData(i, "pchsAmt")));
    } else {
      fireInsrRateAmt = fireInsrRateAmt + Number(ds_unitySelling.getCellData(i, "sellAmt"));
      ds_unitySelling.setCellData(i, "vatAmt", 0);
      ds_unitySelling.setCellData(i, "pchsVatAmt", 0);
    }
  }
  ed_sellAmtFcrc.setValue(sellAmtFcrc);
  ed_sellAmt.setValue(sellAmt);
  ed_totSellAmt.setValue(totSellAmt);
  ed_vatAmt.setValue(totSellAmt - sellAmt);
  ed_pchsAmt.setValue(pchsAmt);
  ed_totPchsAmt.setValue(totPchsAmt);
  ed_pchsVatAmt.setValue(totPchsAmt - pchsAmt);
  ed_fireInsrRateAmt.setValue(fireInsrRateAmt);
};
scwin.f_GetSellItemCd = function () {
  let param = [];
  if (scwin.vCoCd == "028") {
    param = [{
      method: "getGridCombo",
      param1: "JA001",
      param2: 1,
      param3: "028",
      param4: false,
      compID: "gr_unitySelling:sellItemCd"
    }];
  } else if (scwin.vCoCd == "029") {
    param = [{
      method: "getGridCombo",
      param1: "JA001",
      param2: 1,
      param3: "029",
      param4: false,
      compID: "gr_unitySelling:sellItemCd"
    }];
  }
  if (param.length > 0) {
    $c.data.setGauceUtil($p, param);
  }
};
scwin.f_Clear = function () {
  $c.gus.cfInitObjects($p, tbl_order);
  $c.gus.cfInitObjects($p, tbl_certiCommon);
  $c.gus.cfInitObjects($p, tbl_purchaseCerti);
  ds_order.setJSON([]);
  ds_certiCommon.setJSON([]);
  ds_purchaseCerti.setJSON([]);
  ds_unitySelling.setJSON([]);
  acb_odrKndCd.setDisabled(false);
  acb_fmlaClsCd.setDisabled(false);
  acb_fmlaPatternCd.setDisabled(false);
  acb_crcCd.setDisabled(false);
  acb_sellTaxnClsCd.setDisabled(false);
  acb_pchsTaxnClsCd.setDisabled(false);
  ed_confirmDt.setValue(scwin.vCurDate);
  ed_rsltsStdDt.setValue(scwin.vCurDate);
  rd_pchsCreatYn.setValue("0");
  rd_pchsCreatYn.setDisabled(true);
  rd_certiCreatYn.setValue("1");
  ed_adptExchRt.setValue("0");
  $c.gus.cfEnableBtnOnly($p, [bSave]);
  $c.gus.cfDisableObjects($p, [ed_adptExchRt]);
  totalRows.setValue("");
  ed_sellCertiNo.setDisabled(true);
  ed_sellVatNo.setDisabled(true);
  ed_sellAmt.setDisabled(true);
  ed_vatAmt.setDisabled(true);
  ed_totSellAmt.setDisabled(true);
  ed_sellAmtFcrc.setDisabled(true);
  ed_fireInsrRateAmt.setDisabled(true);
};
scwin.f_ChangeCrcCd = function () {
  if (acb_crcCd.getValue() == "KRW") {
    $c.gus.cfDisableObjects($p, [ed_adptExchRt]);
    ed_adptExchRt.setMandatory(false);
    gr_unitySelling.setReadOnly("column", "sellAmtFcrc", true);
    gr_unitySelling.setReadOnly("column", "sellAmt", false);
    // 필수 표기 제거
    tbx_adptExchRt.removeClass("req");
  } else {
    $c.gus.cfEnableObjects($p, [ed_adptExchRt]);
    ed_adptExchRt.setMandatory(true);
    gr_unitySelling.setReadOnly("column", "sellAmtFcrc", false);
    gr_unitySelling.setReadOnly("column", "sellAmt", false);
    // 필수 표기 추가
    tbx_adptExchRt.addClass("req");
  }
};
scwin.f_ChangePchsCreatYn = function () {
  if (rd_pchsCreatYn.getValue() == "1") {
    gr_unitySelling.setReadOnly("column", "pchsAmt", true);
    gr_unitySelling.setReadOnly("column", "pchsVatAmt", true);
    gr_unitySelling.setReadOnly("column", "totPchsAmt", false);
    gr_unitySelling.setHeaderClass('pchsAmt', 'col-type1');
    gr_unitySelling.setHeaderClass('pchsVatAmt', 'col-type1');
    ed_pchsDeptCd.setMandatory(true);
    // 필수 표기 추가
    tbx_pchsDept.addClass("req");
  } else {
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      ds_unitySelling.setCellData(i, "pchsAmt", 0);
      ds_unitySelling.setCellData(i, "pchsVatAmt", 0);
      ds_unitySelling.setCellData(i, "totPchsAmt", 0);
    }
    gr_unitySelling.setReadOnly("column", "pchsAmt", true);
    gr_unitySelling.setReadOnly("column", "pchsVatAmt", true);
    gr_unitySelling.setReadOnly("column", "totPchsAmt", true);
    gr_unitySelling.setHeaderClass('pchsAmt', '');
    gr_unitySelling.setHeaderClass('pchsVatAmt', '');
    ed_pchsDeptCd.setMandatory(false);
    // 필수 표기 제거
    tbx_pchsDept.removeClass("req");
  }
};
scwin.f_mathAmt = function (row, colid) {
  let sellAmt = Number(ds_unitySelling.getCellData(row, "sellAmt")) || 0;
  let sellAmtFcrc = Number(ds_unitySelling.getCellData(row, "sellAmtFcrc")) || 0;
  let pchsAmt = Number(ds_unitySelling.getCellData(row, "pchsAmt")) || 0;
  let vatAmt = Number(ds_unitySelling.getCellData(row, "vatAmt")) || 0;
  let pchsVatAmt = Number(ds_unitySelling.getCellData(row, "pchsVatAmt")) || 0;
  let totSellAmt = 0;
  let totPchsAmt = 0;
  let adptExchRt = Number(ed_adptExchRt.getValue()) || 0;
  if (acb_crcCd.getValue() == "KRW") {
    if (!(colid == "vatAmt" || colid == "pchsVatAmt")) {
      if (ds_unitySelling.getCellData(row, "sellYn") == "1") {
        vatAmt = acb_sellTaxnClsCd.getValue() == "01" || acb_sellTaxnClsCd.getValue() == "04" ? Math.round(sellAmt / 10) : 0;
        pchsVatAmt = acb_pchsTaxnClsCd.getValue() == "01" || acb_sellTaxnClsCd.getValue() == "04" ? Math.round(pchsAmt / 10) : 0;
      } else {
        vatAmt = 0;
        pchsVatAmt = 0;
      }
    }
  } else {
    if (colid != "sellAmt") {
      sellAmt = Math.floor(sellAmtFcrc * adptExchRt);
      vatAmt = 0;
    }
    if (colid != "pchsVatAmt") {
      if (ds_unitySelling.getCellData(row, "sellYn") == "1") {
        pchsVatAmt = acb_pchsTaxnClsCd.getValue() == "01" ? Math.round(pchsAmt / 10) : 0;
      } else {
        pchsVatAmt = 0;
      }
    }
  }
  totSellAmt = sellAmt + vatAmt;
  totPchsAmt = pchsAmt + pchsVatAmt;
  ds_unitySelling.setCellData(row, "sellAmt", sellAmt);
  ds_unitySelling.setCellData(row, "sellAmtFcrc", sellAmtFcrc);
  ds_unitySelling.setCellData(row, "pchsAmt", pchsAmt);
  ds_unitySelling.setCellData(row, "vatAmt", vatAmt);
  ds_unitySelling.setCellData(row, "pchsVatAmt", pchsVatAmt);
  ds_unitySelling.setCellData(row, "totSellAmt", totSellAmt);
  ds_unitySelling.setCellData(row, "totPchsAmt", totPchsAmt);
  scwin.f_SumAmt();
};
scwin.f_mathAdptExchRt = function () {
  let sellAmtFcrc = 0;
  let sellAmt = 0;
  let adptExchRt = Number(ed_adptExchRt.getValue()) || 0;
  let sellAmtTot = 0;
  for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
    sellAmtFcrc = Number(ds_unitySelling.getCellData(i, "sellAmtFcrc")) || 0;
    sellAmt = Math.floor(sellAmtFcrc * adptExchRt);
    ds_unitySelling.setCellData(i, "sellAmt", sellAmt);
    sellAmtTot = sellAmtTot + sellAmt;
  }
  ed_sellAmt.setValue(sellAmtTot);
  ed_totSellAmt.setValue(sellAmtTot);
};
scwin.f_SlipPopUp = async function () {
  if (ed_sellCertiNo.getValue().length < 1) {
    await $c.win.alert($p, "거래명세서가 존재하지 않습니다.");
    return;
  }
  if (ds_certiCommon.getCellData(0, "upperCertiNo") != "" && ds_certiCommon.getCellData(0, "upperCertiNo") != "0") {
    await $c.win.alert($p, "BILL이 생성된 CERIT는 세금계산서를 작성 할 수 없습니다.");
    return;
  }
  let arrParam = [];
  arrParam[0] = ds_certiCommon;
  arrParam[1] = ds_unitySelling.getCellData(0, "sellItemNm");
  let returnValue = await $c.win.openPopup($p, "/ui/ja/ds/fs/bilg/ja_fs_202_06_03p.xml", {
    width: 850,
    height: 1000,
    modal: true,
    popupName: "세금계산서 생성"
  }, arrParam);
  if (returnValue != null) {
    if (returnValue[0] != undefined) {
      ed_sellVatNo.setValue(returnValue[0]);
    }
    if (returnValue[1] == "TRUE") {
      scwin.f_OdrNORetrieve();
    }
  }
};

// 사용하지 않는 함수
scwin.f_Print = async function (arg) {
  if (ed_sellCertiNo.getValue().length < 1) {
    await $c.win.alert($p, "거래명세서가 존재하지 않습니다.");
    return;
  }
  let confirmPrint = await $c.win.confirm($p, "인쇄하시겠습니까?");
  if (!confirmPrint) return;
  let odi1 = "01";
  let odi2 = ds_certiCommon.getCellData(0, "inscrpFmlaPatternCd");
};
scwin.f_regstEmail = function () {
  let fileURL = "/ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml";
  let tabTitle = "전자세금계산서거래처관리";
  $c.win.openMenu($p, tabTitle, fileURL, "fi_100_01_03b.xml");
};
scwin.f_deptPopUp = function (deptCd, deptNm) {
  let param = scwin.vCurDate;
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = param + "," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }
  let paramArray = {};
  paramArray.pSelectID = "retrieveAcctDeptCdInfo6";
  paramArray.pCode = deptCd;
  paramArray.pName = deptNm;
  paramArray.pWhere = param;
  scwin.f_PopUp2(paramArray);
};
scwin.f_Popup = function (disGubun, row) {
  let pCode = "";
  let pName = "";
  let qryYear = ed_confirmDt.getValue().trim().substring(0, 4);
  if (row == null) {
    row = ds_unitySelling.getRowPosition();
  }
  switch (disGubun) {
    case 1:
      let param1 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      pCode = (ds_unitySelling.getCellData(row, "sellLodeptCd") || "").replace(/\s*$/, "");
      udc_comCode_Grid.cfCommonPopUpAsync(function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_unitySelling.setCellData(row, "sellLodeptCd", rtnList[0]);
          ds_unitySelling.setCellData(row, "sellLodeptNm", rtnList[1]);
        } else {
          ds_unitySelling.setCellData(row, "sellLodeptCd", "");
          ds_unitySelling.setCellData(row, "sellLodeptNm", "");
        }
      }, pCode, pName, "T", null, null, null, null, param1, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    default:
      break;
  }
};
scwin.f_PopUp2 = function (paramArray) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  udc_bilgLodept.setSelectId(paramArray.pSelectID);
  udc_bilgLodept.cfCommonPopUp(function (rtnList) {
    if (rtnList != null) {
      if (rtnList[0] != "N/A") {
        $c.gus.cfSetValue($p, codeObj, rtnList[0]);
        $c.gus.cfSetValue($p, nameObj, rtnList[1]);
      }
    } else {
      $c.gus.cfSetValue($p, codeObj, "");
      $c.gus.cfSetValue($p, nameObj, "");
    }
  }, $c.gus.cfGetValue($p, codeObj), "", "F", paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.f_openPopUp = function (flag, check) {
  let qryYear = ed_confirmDt.getValue().trim().substring(0, 4);
  let rtnList = new Array();
  switch (flag) {
    case "3":
      let param3 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_bilgLodept.setSelectId("retrieveAcctDeptCdInfo10");
      udc_bilgLodept.cfCommonPopUp(scwin.callbackAcctDeptCdInfo, ed_bilgLodeptCd.getValue().trim(), ed_bilgLodeptNm.getValue(), check, null, null, null, null, param3, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case "4":
      let param4 = ",,," + ed_coCd.getValue();
      udc_bilgClnt.cfCommonPopUp(scwin.callbackClntList, ed_bilgClntNo.getValue().trim(), ed_bilgClntNm.getValue(), check, null, null, null, null, param4, null, null, null, null);
      break;
    case "5":
      break;
    case "6":
      let param6 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_pchsDept.setSelectId("retrieveAcctDeptCdInfo10");
      udc_pchsDept.cfCommonPopUp(scwin.callbackPchsDeptInfo, ed_pchsDeptCd.getValue().trim(), ed_pchsDeptNm.getValue(), check, null, null, null, null, param6, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case "7":
      let param7 = ",,," + ed_coCd.getValue();
      udc_pchsClnt.cfCommonPopUp(scwin.callbackPchsClntList, ed_pchsClntNo.getValue().trim(), ed_pchsClntNm.getValue(), check, null, null, null, null, param7, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.callbackAcctDeptCdInfo = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_bilgLodeptCd, ed_bilgLodeptNm, rtnList);
  }
};
scwin.callbackClntList = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_bilgClntNo, ed_bilgClntNm, rtnList);
  }
};
scwin.callbackPchsDeptInfo = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_pchsDeptCd, ed_pchsDeptNm, rtnList);
  }
};
scwin.callbackPchsClntList = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_pchsClntNo, ed_pchsClntNm, rtnList);
  }
};
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]);
    strNm.setValue(rtnList[1]);
  } else {
    strCd.setValue("");
    strNm.setValue("");
  }
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  return new Promise(resolve => {
    scwin._resolveCompanyPopup = resolve;
    udc_co.cfCommonPopUp(scwin.callbackDongbuGroupCompanyInfo, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  });
};
scwin.callbackDongbuGroupCompanyInfo = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.ed_coCd_hidVal != rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.ed_coCd_hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.ed_coCd_hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (Number(scwin.txtCoClsCd) > Number(ACConstants.CO_CLS_CD_DONGBU)) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin._resolveCompanyPopup) {
    scwin._resolveCompanyPopup(rtnList);
    scwin._resolveCompanyPopup = null;
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  $c.gus.cfInitObjects($p, [ed_bilgClntNo, ed_bilgClntNm]);
};
scwin.f_EventCheck = function () {
  return "T";
};
scwin.f_setCompanyInfo = async function () {
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo("T");
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_co]);
};
scwin.f_upload = function () {
  let options = {
    headerExist: 1,
    header: 1,
    startRowIndex: 1
  };
  ds_excel.removeAll();
  udc_topGrdBtn.uploadGridViewExcel(gr_tmp, options);
};
scwin.gr_tmp_onfilereadend = async function () {
  if (ds_excel.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  if (scwin.f_AddRowUploaded()) {
    await $c.win.alert($p, "업로드작업이 완료되었습니다.");
    if (ds_unitySelling.getRowCount() > 0) {
      $c.gus.cfEnableBtnOnly($p, [bSave]);
    }
  }
};
scwin.f_AddRowUploaded = async function () {
  if (ds_excel.getRowCount() > 0) {
    ds_unitySelling.setJSON([]);
    for (let i = 0; i < ds_excel.getRowCount(); i++) {
      ds_unitySelling.insertRow(ds_unitySelling.getRowCount());
      ds_unitySelling.setRowPosition(i);
      let curRow = ds_unitySelling.getRowCount() - 1;
      ds_unitySelling.setCellData(curRow, "sellSeq", i + 1);
      let sellLodeptCdVal = (ds_excel.getCellData(i, "sellLodeptCd") || "").trim();
      let lengthOfSellLodeptCd = sellLodeptCdVal.length;
      if (lengthOfSellLodeptCd == 5) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 4) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "0" + sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 3) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "00" + sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 2) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "000" + sellLodeptCdVal);
      } else if (lengthOfSellLodeptCd == 1) {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", "0000" + sellLodeptCdVal);
      } else {
        ds_unitySelling.setCellData(curRow, "sellLodeptCd", sellLodeptCdVal.substring(0, 5));
      }
      if (ds_unitySelling.getCellData(curRow, "sellLodeptCd") != "") {
        await scwin.f_Popup(1, i);
      }
      let sellItemCdVal = (ds_excel.getCellData(i, "sellItemCd") || "").trim();
      let lengthOfSellItemCd = sellItemCdVal.length;
      if (lengthOfSellItemCd != 4) {
        alert("매출항목 코드의 자릿수가 맞지 않습니다. 4자리로 입력하세요(ex: 0001)");
        return false;
      }
      scwin.f_SetSellYn(ds_unitySelling.getCellData(curRow, "sellItemCd"), curRow);
      ds_unitySelling.setCellData(curRow, "sellItemCd", sellItemCdVal);
      ds_unitySelling.setCellData(curRow, "sellAmt", ds_excel.getCellData(i, "sellAmt"));
      ds_unitySelling.setCellData(curRow, "sellAmtFcrc", ds_excel.getCellData(i, "sellAmtFcrc"));
      scwin.f_mathAmt(curRow, "sellAmt");
      if (Number(ds_unitySelling.getCellData(curRow, "sellAmtFcrc")) != 0) {
        scwin.f_mathAmt(curRow, "sellAmtFcrc");
      }
      scwin.f_SumAmt();
    }
  }
  return true;
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve("INPUT");
};
scwin.bCreate_onclick = function (e) {
  scwin.f_Clear();
};
scwin.bSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.bDelete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.sbm_retrieveGeneralBillingOrder_submitdone = async function (e) {
  if (scwin.arg == "REFERENCE") {
    dtl_odrNo.setValue("");
    acb_odrKndCd.setDisabled(false);
    acb_fmlaClsCd.setDisabled(false);
    acb_fmlaPatternCd.setDisabled(false);
    acb_crcCd.setDisabled(false);
    acb_sellTaxnClsCd.setDisabled(false);
    acb_pchsTaxnClsCd.setDisabled(false);
    $c.gus.cfDisableBtn($p, [bSave, bDelete]);
    if (ed_sellCertiNo.getValue().length < 1) {
      rd_certiCreatYn.setValue("0");
    } else {
      rd_certiCreatYn.setValue("1");
    }
    for (let i = 0; i < ds_unitySelling.getRowCount(); i++) {
      ds_unitySelling.setCellData(i, "certiNo", "");
    }
  }
  if (ds_certiCommon.getRowCount() == 0 && ds_order.getRowCount() != 0) {
    ed_sellCertiNo.setValue("");
    ed_sellVatNo.setValue("");
    acb_crcCd.setValue(ds_unitySelling.getCellData(0, "crcCd"));
    ed_adptExchRt.setValue(ds_unitySelling.getCellData(0, "adptExchRt"));
    acb_sellTaxnClsCd.setValue(ds_unitySelling.getCellData(0, "taxnClsCd"));
    acb_fmlaClsCd.setValue("01");
    if ($c.gus.cfIsNull($p, ds_certiCommon.getCellData(0, "fmlaPatternCd"))) {
      acb_fmlaPatternCd.setValue("01");
    } else {
      acb_fmlaPatternCd.setValue(ds_certiCommon.getCellData(0, "fmlaPatternCd"));
    }
    scwin.f_ChangeCrcCd();
  }

  // ds_order OnLoadCompleted 처리
  if (ds_order.getRowCount() > 0) {
    dtl_odrNo.setValue(ds_order.getCellData(0, "odrNo"));
    ed_bilgLodeptCd.setValue(ds_order.getCellData(0, "bilgLodeptCd"));
    ed_bilgLodeptNm.setValue(ds_order.getCellData(0, "bilgLodeptNm"));
    acb_odrKndCd.setValue(ds_order.getCellData(0, "bilgOdrKndCd"));
    ed_bilgClntNo.setValue(ds_order.getCellData(0, "bilgClntNo"));
    ed_bilgClntNm.setValue(ds_order.getCellData(0, "bilgClntNm"));
    rd_pchsCreatYn.setValue(ds_order.getCellData(0, "pchsCreatYn"));
    scwin.f_ChangePchsCreatYn();
    $c.gus.cfEnableAllBtn($p);
    if (ds_order.getCellData(0, "odrNo") != null && ds_order.getCellData(0, "odrNo") != "") {
      $c.gus.cfEnableBtnOnly($p, [bSave, bDelete]);
    } else {
      $c.gus.cfDisableBtn($p, [bSave, bDelete]);
    }
  } else {
    $c.gus.cfDisableBtn($p, [bSave, bDelete]);
  }

  // ds_certiCommon OnLoadCompleted 처리
  if (ds_certiCommon.getRowCount() > 0) {
    if (scwin.arg == "REFERENCE") {
      ds_certiCommon.setCellData(0, "certiNo", "");
      ds_certiCommon.setCellData(0, "slipNo", "");
      ds_certiCommon.setCellData(0, "sellVatNo", "");
    }
    ed_sellCertiNo.setValue(ds_certiCommon.getCellData(0, "certiNo"));
    ed_sellVatNo.setValue(ds_certiCommon.getCellData(0, "sellVatNo"));
    acb_crcCd.setValue(ds_certiCommon.getCellData(0, "crcCd"));
    ed_adptExchRt.setValue(ds_certiCommon.getCellData(0, "adptExchRt"));
    acb_sellTaxnClsCd.setValue(ds_certiCommon.getCellData(0, "taxnClsCd"));
    ed_sellAmt.setValue(ds_certiCommon.getCellData(0, "spplyAmt"));
    ed_vatAmt.setValue(ds_certiCommon.getCellData(0, "vatAmt"));
    ed_totSellAmt.setValue(ds_certiCommon.getCellData(0, "totAmt"));
    ed_confirmDt.setValue(ds_certiCommon.getCellData(0, "confirmDt"));
    ed_sellAmtFcrc.setValue(ds_certiCommon.getCellData(0, "spplyAmtFcrc"));
    acb_fmlaClsCd.setValue(ds_certiCommon.getCellData(0, "fmlaClsCd"));
    acb_fmlaPatternCd.setValue(ds_certiCommon.getCellData(0, "fmlaPatternCd"));
    scwin.f_ChangeCrcCd();
  }

  // ds_purchaseCerti OnLoadCompleted 처리
  if (ds_purchaseCerti.getRowCount() > 0) {
    ed_pchsDeptCd.setValue(ds_purchaseCerti.getCellData(0, "pchsDeptCd"));
    ed_pchsDeptNm.setValue(ds_purchaseCerti.getCellData(0, "pchsDeptNm"));
    ed_pchsClntNo.setValue(ds_purchaseCerti.getCellData(0, "pchsClntNo"));
    ed_pchsClntNm.setValue(ds_purchaseCerti.getCellData(0, "pchsClntNm"));
    ed_pchsAmt.setValue(ds_purchaseCerti.getCellData(0, "spplyAmt"));
    ed_pchsVatAmt.setValue(ds_purchaseCerti.getCellData(0, "vat"));
  }

  // ds_unitySelling OnLoadCompleted 처리
  if (ds_unitySelling.getRowCount() > 0) {
    //scwin.f_GetSellItemCd();

    acb_odrKndCd.setDisabled(true);
    acb_fmlaClsCd.setDisabled(true);
    acb_fmlaPatternCd.setDisabled(true);
    acb_crcCd.setDisabled(true);
    acb_sellTaxnClsCd.setDisabled(true);
    acb_pchsTaxnClsCd.setDisabled(true);
    ed_rsltsStdDt.setValue(ds_unitySelling.getCellData(0, "rsltsStdDt"));
  } else {
    acb_odrKndCd.setDisabled(false);
    acb_fmlaClsCd.setDisabled(false);
    acb_fmlaPatternCd.setDisabled(false);
    acb_crcCd.setDisabled(false);
    acb_sellTaxnClsCd.setDisabled(false);
    acb_pchsTaxnClsCd.setDisabled(false);
  }
  // sortExp="sellSeq:매출순번,certiInscrpSellItemNm:매출항목pchsSeq:매입순번" 
  //let options = {};
  //options.sortIndex = "sellSeq certiInscrpSellItemNm pchsSeq";
  //options.sortOrder = "1 1 1";

  //ds_unitySelling.multisort(options);

  totalRows.setValue(ds_unitySelling.getRowCount());
  scwin.f_SumAmt();
  ds_unitySelling.setRowPosition(0);
  if (scwin.isLoad == true) {
    $c.gus.cfDisableObjects($p, [bSave, bDelete]);
    scwin.isLoad = false;
  }
};
scwin.sbm_registGeneralBillingOrder_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.arg = "INPUT";
    scwin.f_OdrNORetrieve();
  }
};
scwin.sbm_deleteGeneralBillingOrder_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
    scwin.f_Clear();
    $c.gus.cfDisableBtn($p, [bSave, bDelete]);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (청구부서)
//-------------------------------------------------------------------------
scwin.udc_bilgLodept_onclickEvent = function (e) {
  scwin.f_deptPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm);
};
scwin.udc_bilgLodept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1, true);
  if (ed_bilgLodeptNm.getValue() != "") {
    ed_pchsDeptCd.setValue(ed_bilgLodeptCd.getValue());
    ed_pchsDeptNm.setValue(ed_bilgLodeptNm.getValue());
  }
};
scwin.udc_bilgLodept_onviewchangeNameEvent = function (info) {
  ed_bilgLodeptCd.setValue("");
  scwin.f_openPopUp('3', 'T');
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (청구 거래처)
//-------------------------------------------------------------------------

scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
};
scwin.udc_bilgClnt_onviewchangeNameEvent = function (info) {
  ed_bilgClntNo.setValue("");
  scwin.f_openPopUp('4', 'T');
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (매입귀속부서)
//-------------------------------------------------------------------------
scwin.udc_pchsDept_onclickEvent = function (e) {
  scwin.f_deptPopUp(ed_pchsDeptCd, txt_pchsDeptNm);
};
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 8); //매입귀속부서
};
scwin.udc_pchsDept_onviewchangeNameEvent = function (info) {
  ed_pchsDeptCd.setValue("");
  scwin.f_openPopUp('6', 'T');
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (협력업체)
//-------------------------------------------------------------------------
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'F');
};
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 7); //협력업체
};
scwin.udc_pchsClnt_onviewchangeNameEvent = function (info) {
  ed_pchsClntNo.setValue("");
  scwin.f_openPopUp('7', 'T');
};
scwin.ed_adptExchRt_onblur = function (e) {
  scwin.f_mathAdptExchRt();
};
/*
    scwin.gr_unitySelling_ontextimageclick = function(rowIndex, columnIndex, columnId) {
        if (columnId == "sellLodeptCd") {
            scwin.f_Popup(1);
        }
    };
*/
scwin.olddata = "";
scwin.gr_unitySelling_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.olddata = value;
};
scwin.gr_unitySelling_onafteredit = async function (rowIndex, columnIndex, value) {
  let colid = gr_unitySelling.getColumnID(columnIndex);
  let olddata = scwin.olddata;
  if (ds_unitySelling.getCellData(rowIndex, colid) == olddata && colid == "sellLodeptCd") {
    scwin.f_Popup(1);
    return;
  }
  if (colid == "sellAmt" || colid == "sellAmtFcrc" || colid == "pchsAmt" || colid == "vatAmt" || colid == "pchsVatAmt") {
    if (acb_crcCd.getValue() != "KRW" && (ed_adptExchRt.getValue().length < 1 || Number(ed_adptExchRt.getValue()) == 0)) {
      await $c.win.alert($p, "먼저 환율을 입력하세요");
      ds_unitySelling.setCellData(rowIndex, colid, olddata);
      ed_adptExchRt.focus();
      return;
    }
    scwin.f_mathAmt(rowIndex, colid);
  }
  switch (colid) {
    case "sellItemCd":
      scwin.f_SetSellYn(ds_unitySelling.getCellData(rowIndex, "sellItemCd"), rowIndex);
      break;
    case "sellLodeptCd":
      scwin.f_Popup(1);
      break;
  }
};
scwin.acb_fmlaClsCd_onchange = function (e) {
  scwin.f_RetrieveFmalPattern();
};
scwin.rd_pchsCreatYn_onviewchange = function (e) {
  scwin.f_ChangePchsCreatYn();
};
scwin.acb_odrKndCd_onchange = function (e) {
  //scwin.f_GetSellItemCd();

  if (acb_odrKndCd.getValue() == "10") {
    acb_fmlaPatternCd.setValue("Y1");
  } else {
    acb_fmlaPatternCd.setValue("01");
  }
};
scwin.acb_crcCd_onchange = function (e) {
  scwin.f_ChangeCrcCd();
};
scwin.btn_slipPopUp_onclick = function (e) {
  scwin.f_SlipPopUp();
};
scwin.f_CancelRow = function () {
  var rowIndex = ds_unitySelling.getRowPosition();
  if (rowIndex < 0) {
    rowIndex = 0;
  }
  if ("C" == ds_unitySelling.getRowStatus(rowIndex)) {
    ds_unitySelling.removeRow(rowIndex);
  } else {
    ds_unitySelling.undoRow(rowIndex);
  }
  totalRows.setValue(ds_unitySelling.getRowCount());
};
scwin.btn_trigger1_onclick = function (e) {
  $c.gus.cfDownloadFile($p, "일반청구오더등록_템플릿.csv", "ja/ds/fs/bilg/ja_fs_202_03_02b_sample.csv");
};
scwin.udc_co_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.toUpperCase = function (e) {
  // toUpperCase
  var val = e.target.value.toUpperCase();
  this.setValue(val);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{validExpCode:'회사코드:yes',mandatoryCode:'true',id:'udc_co',codeId:'ed_coCd',nameId:'ed_coNm',popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',style:'',btnId:'btn_co',allowCharCode:'0-9',maxlengthCode:'3','ev:onclickEvent':'scwin.udc_co_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.toUpperCase',allowChar:'a-zA-Z0-9',maxlength:'15',class:' w150',id:'ed_odrNo',placeholder:'',style:'',mandatory:'true',validExp:'오더번호:yes'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_order',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'dtl_odrNo',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgLodept',selectID:'retrieveAcctDeptCdInfo6',code:'bilgLodeptCd',codeId:'ed_bilgLodeptCd',name:'bilgLodeptNm',nameId:'ed_bilgLodeptNm',popupID:'',popupTitle:'',style:'',validTitle:'',class:'w350',validExpCode:'청구부서:yes:format=00000',allowCharCode:'0-9',maxlengthCode:'5','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서 생성여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_certiCreatYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일반청구오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_odrKndCd',search:'start',style:'',submenuSize:'auto','ev:onchange':'acb_odrKndCd_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClnt',code:'bilgClntNo',codeId:'ed_bilgClntNo',name:'bilgClntNm',nameId:'ed_bilgClntNm',popupID:'',popupTitle:'',selectID:'retrieveClntList2',style:'',validTitle:'',class:'w350',validExpCode:'거래처:yes:format=000000',allowCharCode:'0-9',maxlengthCode:'6',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입생성여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_pchsCreatYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'rd_pchsCreatYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_certiCommon',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_sellCertiNo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_sellVatNo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_confirmDt',style:'',mandatory:'true',validExp:'작성일자:yes:date=YYYYMMDD'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서유형구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_fmlaClsCd',search:'start',style:'',submenuSize:'auto','ev:onchange':'scwin.acb_fmlaClsCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래명세서유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{validExp:'거래명세서유형:yes',class:' w150',editType:'select',id:'acb_fmlaPatternCd',search:'start',style:'',submenuSize:'auto',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_fmlapattern'},E:[{T:1,N:'w2:label',A:{ref:'fmlaNm'}},{T:1,N:'w2:value',A:{ref:'fmlaPatternCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rsltsStdDt',style:'',mandatory:'true',validExp:'실적일자:yes:date=YYYYMMDD'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_adptExchRt',label:'환종/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group w250'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_crcCd',class:' w85 flex_no',displayMode:'label','ev:onchange':'scwin.acb_crcCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KRW'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'KRW'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'USD'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'USD'}]}]}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_adptExchRt',placeholder:'',class:' tar',mandatory:'true','ev:onblur':'ed_adptExchRt_onblur',objType:'Data',maxlength:'9.4',validExp:'환율:yes',displayFormat:'#,##0.####',dataType:'float'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_sellTaxnClsCd',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'w150 tar',id:'ed_sellAmt',style:'',maxlength:'13',editType:'select',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w150 tar',id:'ed_sellAmtFcrc',style:'',maxlength:'15.2',dataType:'number',displayFormat:'#,##0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:input',A:{class:'w150 tar',id:'ed_vatAmt',style:'',editType:'select',maxlength:'13',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w150 tar',id:'ed_totSellAmt',style:'',maxlength:'13',editType:'select',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w150 tar',id:'ed_fireInsrRateAmt',style:'',editType:'select',dataType:'number',displayFormat:'#,##0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:'display: none;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_purchaseCerti',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_pchsDept',label:'매입귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{code:'pchsDeptCd',codeId:'ed_pchsDeptCd',name:'pchsDeptNm',nameId:'ed_pchsDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'매입귀속부서',id:'udc_pchsDept',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'4',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{code:'pchsClntNo',codeId:'ed_pchsClntNo',name:'pchsClntNm',nameId:'ed_pchsClntNm',popupID:'',popupTitle:'',selectID:'retrieveClntList2',style:'',validTitle:'협력업체',id:'udc_pchsClnt',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_pchsTaxnClsCd',search:'start',style:'',submenuSize:'auto',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_pchsCertiNo',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_pchsVatNo',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_pchsAmt',style:'',maxlength:'13',editType:'select',readOnly:'true',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_pchsVatAmt',style:'',readOnly:'true',maxlength:'13',editType:'select',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_totPchsAmt',style:'',readOnly:'true',maxlength:'13',displayFormat:'#,##0',dataType:'number'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn template',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'템플릿 다운로드'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{id:'udc_topGrdBtn',grp:'grp_group4',style:'',btnUser:'N',gridID:'gr_unitySelling',gridDownFn:'scwin.f_downExcelSheet',gridUpFn:'scwin.f_upload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',rowStatusVisible:'true',checkAllType:'false',class:'wq_gvw',dataList:'ds_unitySelling',id:'gr_unitySelling',style:'',readOnly:'false',visibleRowNum:'10',visibleRowNumFix:'true','ev:ontextimageclick':'gr_unitySelling_ontextimageclick','ev:onbeforeedit':'scwin.gr_unitySelling_onbeforeedit','ev:onafteredit':'scwin.gr_unitySelling_onafteredit',dataName:'통합 매출입',validFeatures:'ignoreStatus=yes',validExp:'sellSeq:매출순번:yes:number&maxlength=3:key,sellItemCd:매출항목:yes:string&maxlength=4:key,sellLodeptCd:매출귀속부서:yes:string&maxlength=5:key'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',style:'',value:'매출</br>순번',width:'70'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column2',value:'매출귀속부서',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column3',value:'매출귀속부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{class:'col-type1',colSpan:'',displayMode:'label',id:'column4',inputType:'text',rowSpan:'2',style:'',value:'매출항목',width:'150'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column5',value:'공급금액',displayMode:'label',colSpan:'3',rowSpan:'',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column6',value:'부가세',displayMode:'label',colSpan:'2',rowSpan:'',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column7',inputType:'text',rowSpan:'',style:'',value:'금액',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column8',inputType:'text',rowSpan:'2',style:'',value:'매입</br>순번',width:'70',hidden:'true'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'매출원화',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column10',value:'매출외화',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'매입금액',displayMode:'label',hidden:'true',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column12',value:'매출(부)',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'매입(부)',displayMode:'label',hidden:'true',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',style:'',value:'매출',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매입',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',style:'',value:'',width:'70',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'sellLodeptCd',value:'',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',allowChar:'a-zA-Z0-9',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'sellLodeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'sellItemCd',inputType:'select',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0',defaultValue:'0',maxLength:'13',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmtFcrc',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0.00',dataType:'float',maxLength:'13.2',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0',defaultValue:'0',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0',defaultValue:'0',maxLength:'13',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsVatAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0',defaultValue:'0',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totSellAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',defaultValue:'0',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPchsAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',defaultValue:'0',dataType:'number',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSeq',inputType:'text',style:'',value:'',width:'70',readOnly:'true',defaultValue:'0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bttomBtn',rowAddFunction:'scwin.f_AddRow',btnCancelYn:'Y',btnDelYn:'N',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_cancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',title:'엑셀 UP',type:'button',userAuth:'U','ev:onclick':'scwin.btn_slipPopUp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서 생성'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bCreate',style:'',type:'button','ev:onclick':'scwin.bCreate_onclick',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSave',style:'',type:'button','ev:onclick':'scwin.bSave_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bDelete',style:'',type:'button','ev:onclick':'scwin.bDelete_onclick',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:ds_excel',id:'gr_tmp',visible:'false','ev:onfilereadend':'scwin.gr_tmp_onfilereadend'},E:[{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column20',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출외화',dataType:'number'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display:none;',id:'udc_comCode_Grid'}}]}]}]}]})