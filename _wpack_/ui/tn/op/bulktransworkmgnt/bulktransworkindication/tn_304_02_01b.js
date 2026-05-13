/*amd /ui/tn/op/bulktransworkmgnt/bulktransworkindication/tn_304_02_01b.xml 247059 d4e8520129e8a05201d99fe15ea3bc0cccf7fc75933d1b1c3c869e6ecf917e98 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upper',name:'upper',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'upperCd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehicleLobranCd',name:'vehicleLobranCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDistrictCd1',name:'wrkDistrictCd1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDistrictCd2',name:'wrkDistrictCd2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logisKcgClsCd1',name:'logisKcgClsCd1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'cargoClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDstCd',name:'wrkDstCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'stDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'odrKndCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'noClsCd',name:'noClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stWt',name:'stWt',dataType:'number'}},{T:1,N:'w2:key',A:{id:'endWt',name:'endWt',dataType:'number'}},{T:1,N:'w2:key',A:{id:'blNo',name:'blNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNoList',name:'odrNoList',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSaleClsCd',name:'tplSaleClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplOrderClsCd',name:'tplOrderClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplSelfClsCd',name:'tplSelfClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dmndNo',name:'dmndNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'schGubun',name:'schGubun',dataType:'text'}},{T:1,N:'w2:key',A:{id:'functionYn',name:'functionYn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tplCoClsCd',name:'tplCoClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railroadAdptDstCd',name:'railroadAdptDstCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBulkGubun',name:'cntrBulkGubun',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onWrkPlCd',name:'onWrkPlCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offWrkPlCd',name:'offWrkPlCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transList',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_transList_oncelldatachange','ev:ondataload':'scwin.ds_transList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'clntMgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dificulty',name:'dificulty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'reqClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'reqClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'repClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'ctrtClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntMpNo',name:'ctrtClntMpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'bilgClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'dptWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'dptWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'arvWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'arvWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'wrkStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'wrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'wrkIndictYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'csctPrtYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'eqCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'vehclShortCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'copCoClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'copCoClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'commSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'upperCommCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrUnitCd',name:'odrUnitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrUnitNm',name:'odrUnitNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'unitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'qty',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'grossWt',dataType:'float'}},{T:1,N:'w2:column',A:{id:'netWt',name:'netWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'cbm',dataType:'float'}},{T:1,N:'w2:column',A:{id:'len',name:'len',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbmQty',name:'cbmQty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbmGrossWt',name:'cbmGrossWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbmNetWt',name:'cbmNetWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'minYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'marvYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'trfAdptYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'coshippingNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNoTemp',name:'coshippingNoTemp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPatternCd',name:'coshippingPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'mchtOdrKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'ctrtNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'wrkPathSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'wrkStpSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'wrkStpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'wrkPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'impExpDomesticClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnYn',name:'returnYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnYnc',name:'returnYnc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxAmt',name:'maxAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'minAmt',name:'minAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptAmt',name:'adptAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'scReg',name:'scReg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRegCd',name:'scRegCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'scAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'scAmtRate',name:'scAmtRate',dataType:'float'}},{T:1,N:'w2:column',A:{id:'cmpstcrgMargin',name:'cmpstcrgMargin',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkPool',name:'chkPool',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsYn',name:'rsltsYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urgentYn',name:'urgentYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befCargoCd',name:'befCargoCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befCargoNm',name:'befCargoNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'tplArvNmCmpy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'transWrkIndictNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routrpYn',name:'routrpYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'odrRmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mstOdrNo',name:'mstOdrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplClntNm',name:'tplClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplClntTel',name:'tplClntTel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openYn',name:'openYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'sellLodeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkEndDt',name:'odrWrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkEndHh',name:'odrWrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrShtPrtYn',name:'odrShtPrtYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'railroadAdptDstCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'arvZip',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'dptZip',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smQty',name:'smQty',dataType:'number'}},{T:1,N:'w2:column',A:{id:'takeMobile',name:'takeMobile',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'arvDtl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'mbssysVehclYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkVehclBpYn',name:'bulkVehclBpYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipToCd',name:'shipToCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipTo',name:'shipTo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copyOdrNo',name:'copyOdrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_bulkCmpstcrgSrchCond',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'transWrkIndictNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'commSeq',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'odrWrkPathSeq',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'odrWrkStpSeq',dataType:'number'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'copCoClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'eqCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'wrkUnitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPatternCd',name:'coshippingPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'minYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'minAdptYn',name:'minAdptYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'allClnt',name:'allClnt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trfAdptChkCnt',name:'trfAdptChkCnt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'trfAdptYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'allQty',name:'allQty',dataType:'number'}},{T:1,N:'w2:column',A:{id:'allWt',name:'allWt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'allCbm',name:'allCbm',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'wrkQty',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'wrkWt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'wrkCbm',dataType:'number'}},{T:1,N:'w2:column',A:{id:'len',name:'len',dataType:'number'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'marvYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'calcYn',name:'calcYn',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_UnitySelling',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'작업권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossSum',name:'작업권역2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Unity',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'unit',name:'unit',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bulkCmpstcrg',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'returnYn',name:'returnYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxAmt',name:'maxAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minAmt',name:'minAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptAmt',name:'adptAmt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ChassisInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'inspKndNm',name:'inspKndNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rglintInspExpireDt',name:'rglintInspExpireDt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CarNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'carNo',name:'배차차량단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AllocateCnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'twoDaysAllocateCnt',name:'twoDaysAllocateCnt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'longdistanceCnt',name:'longdistanceCnt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hiredcarCnt',name:'hiredcarCnt',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_history',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'vehclShortCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageNo',name:'messageNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'qty',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'coshippingNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'dptWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'arvWrkPlCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coshippingPatternCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unitCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrShtPrtYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coshippingNo',name:'coshippingNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingSeq',name:'coshippingSeq',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'commSeq',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'wrkPathSeq',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'wrkStpSeq',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transList_ori',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'clntMgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dificulty',name:'dificulty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'reqClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'reqClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'repClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'ctrtClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntMpNo',name:'ctrtClntMpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'bilgClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'dptWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'dptWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'arvWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'arvWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'wrkStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'wrkStHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'wrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'wrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictYn',name:'wrkIndictYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csctPrtYn',name:'csctPrtYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'eqCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'vehclNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'vehclShortCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'copCoClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'copCoClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'commSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'commNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'upperCommCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrUnitCd',name:'odrUnitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrUnitNm',name:'odrUnitNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'unitCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'qty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'grossWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'netWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'cbm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'len',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbmQty',name:'cbmQty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbmGrossWt',name:'cbmGrossWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbmNetWt',name:'cbmNetWt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minYn',name:'minYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'marvYn',name:'marvYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptYn',name:'trfAdptYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'coshippingNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNoTemp',name:'coshippingNoTemp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPatternCd',name:'coshippingPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'odrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'mchtOdrKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'ctrtNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'wrkPathSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'wrkStpSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'wrkStpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'wrkPatternCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'impExpDomesticClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnYn',name:'returnYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'returnYnc',name:'returnYnc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxAmt',name:'maxAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minAmt',name:'minAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptAmt',name:'adptAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scReg',name:'scReg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRegCd',name:'scRegCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'scAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtRate',name:'scAmtRate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgMargin',name:'cmpstcrgMargin',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkPool',name:'chkPool',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsYn',name:'rsltsYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urgentYn',name:'urgentYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befCargoCd',name:'befCargoCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befCargoNm',name:'befCargoNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'tplArvNmCmpy',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'transWrkIndictNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routrpYn',name:'routrpYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'eqKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'eqNrmCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRmk',name:'odrRmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mstOdrNo',name:'mstOdrNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplClntNm',name:'tplClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplClntTel',name:'tplClntTel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openYn',name:'openYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'sellLodeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkEndDt',name:'odrWrkEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkEndHh',name:'odrWrkEndHh',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrShtPrtYn',name:'odrShtPrtYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadAdptDstCd',name:'railroadAdptDstCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvZip',name:'arvZip',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptZip',name:'dptZip',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smQty',name:'smQty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'takeMobile',name:'takeMobile',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'arvDtl',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'mbssysVehclYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkVehclBpYn',name:'bulkVehclBpYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipToCd',name:'shipToCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipTo',name:'shipTo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copyOdrNo',name:'copyOdrNo',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_vehclKnd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_eqKndCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_vehclNrm',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_eqNrmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.RetrieveBulkTransVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchCond","key":"IN_DS1"},{"id":"ds_transList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_transList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveUnitySelling',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveLafargeSettingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_UnitySelling","key":"IN_DS1"},{"id":"ds_Unity","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Unity","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveUnitySelling_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBulkCmpstcrg',action:'/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.RetrieveBulkCmpstcrgCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_bulkCmpstcrgSrchCond","key":"IN_DS1"},{"id":"ds_bulkCmpstcrg","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bulkCmpstcrg","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveChassis',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ChassisInfo","key":"OUT_DS1"}',target:'data:json,{"id":"ds_ChassisInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveChassis_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveRestrictiveAllocate',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveRestrictiveAllocateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_CarNo","key":"IN_DS1"},{"id":"ds_AllocateCnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_AllocateCnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveRestrictiveAllocate_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_history',action:'/ncall.ds.op.wrkplan.transwrkplan.InsertBoralHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_history","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_coshippingPatternCd',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_coshippingPatternCd","key":"OUT_DS1"}',target:'data:json,{"id":"ds_coshippingPatternCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_coshippingPatternCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_unitCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_unitCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_unitCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveNrm',action:'/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.UpdateBulkEqNrmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_srchCond","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveNrm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_odrShtPrtYn',action:'/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.SavePrintOdrSheetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_odrShtPrtYn","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_transList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_openTransVolume',action:'/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.SaveOpenToDrvrTransVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_transList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_openTransVolume_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  // 서버 오늘 일자
  scwin.toDay = $c.date.getServerDateTime($p, "yyyyMMdd");

  // 세션 정보
  scwin.sessionInfo = $c.data.getMemInfo($p);
  scwin.userId = scwin.sessionInfo.userId;
  scwin.loUpperLobranCd = $c.gus.cfIsNull($p, scwin.sessionInfo.loUpperLobranCd) ? "" : scwin.sessionInfo.loUpperLobranCd;
  scwin.lobranCd = $c.gus.cfIsNull($p, scwin.sessionInfo.lobranCd) ? "" : scwin.sessionInfo.lobranCd;
  // 파라미터 셋팅
  scwin.params = $c.data.getParameter($p);
  scwin.odrNo = $c.gus.cfIsNull($p, scwin.params.odrNo) ? "" : scwin.params.odrNo;
  scwin.wrkStDt = $c.gus.cfIsNull($p, scwin.params.wrkStDt) ? "" : scwin.params.wrkStDt;
  scwin.wrkEndDt = $c.gus.cfIsNull($p, scwin.params.wrkEndDt) ? "" : scwin.params.wrkEndDt;
  scwin.eqClntNo = $c.gus.cfIsNull($p, scwin.params.eqClntNo) ? "" : scwin.params.eqClntNo;
  scwin.eqNrmCd = $c.gus.cfIsNull($p, scwin.params.eqNrmCd) ? "" : scwin.params.eqNrmCd;
  scwin.eqKndCd = $c.gus.cfIsNull($p, scwin.params.eqKndCd) ? "" : scwin.params.eqKndCd;

  // 기타 전역 변수 셋팅
  scwin.chk = true; // 체크박스 이벤트 발생 체크하기 위한 변수
  scwin.cntCoshipping = 0; // 합적물량 카운트
  scwin.schGubun = false; // 배차(false) , 미배차 (true)조회구분
  scwin.gv_canSearchWrkUnitCd;
  scwin.tabYn = false; //0421
  scwin.focusCdYn = false; //0421
  scwin.copFocusCdYn = false; //0421
  scwin.transYn = "N"; //0423

  // 차량종류 셋팅
  scwin.f_vehclKnd();

  // 차량규격 셋팅
  scwin.f_vehclNrm();

  // 버튼 비활성화
  $c.gus.cfDisableObjects($p, [btn_cancel, btn_mb, btn_allocate_car, btn_save_allocate, btn_Open, ed_divisionVehcl]);
  chb_functionYn.setSelectedIndex(0);

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "SD113",
    compID: "lc_srchOdrKndCd"
  } // 오더종류
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
  await scwin.getLuxeComboData();
  ds_coshippingPatternCd.insertRow();
  ds_coshippingPatternCd.setCellData(0, "code", DsConstants.COSHIPPING_PATTERN_CD_GROSS_WT);
  ds_unitCd.insertRow();
  ds_unitCd.setCellData(0, "code", "TON");
  ds_unitCd.setCellData(0, "name", "TON");
};

//-------------------------------------------------------------------------
// 데이타 로드 이후(공통코드 필터링용)
//-------------------------------------------------------------------------
scwin.ondataload = async function (e) {
  // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dltStr = "dlt_commonCodeSD113";

  // 데이터 리스트 객체
  let dlt = $c.gus.object($p, dltStr);

  // $c.data.dataListFilter 함수를 이용해서 필터
  await $c.data.dataListFilter($p, dlt, "fltrCd1 == 'B' && fltrCd3 == '1'");

  // 검색조건 default 값 셋팅
  lc_noClsCd.setValue("O");
  lc_srchLobranCd.setValue(scwin.lobranCd);
};

//-------------------------------------------------------------------------
// 조회조건 콤보박스 셋팅
//-------------------------------------------------------------------------
scwin.getLuxeComboData = function () {
  // 공통 getLuxeComboData
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_srchLobranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "RegionEBC",
    param2: "retrieveDistrict",
    param3: ["", "", "1", "2", "WDE"],
    compID: "lc_srchWrkDistrictCd1"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
};

//-------------------------------------------------------------------------
// UDC값 초기화(scwin.onpageload 이후 세팅)
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // 출발예정일 셋팅
  if ($c.gus.cfIsNull($p, scwin.wrkStDt)) {
    ed_srchFromDate.setValue(scwin.toDay);
    ed_srchToDate.setValue(scwin.toDay);
  } else {
    ed_srchFromDate.setValue(scwin.wrkStDt);
    ed_srchToDate.setValue(scwin.wrkEndDt);
  }

  // odrNo 있으면 바로 조회
  if (!$c.gus.cfIsNull($p, scwin.odrNo)) {
    ed_srchOdrNo.setValue(scwin.odrNo);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 차량종류 목록 조회
//-------------------------------------------------------------------------
scwin.f_vehclKnd = function () {
  sbm_vehclKnd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=NcallDsCommonEBC&queryId=retriveDsCommonEqCd";
  $c.sbm.execute($p, sbm_vehclKnd);
};

//-------------------------------------------------------------------------
// 차량규격 목록 조회
//-------------------------------------------------------------------------
scwin.f_vehclNrm = function () {
  sbm_vehclNrm.action = "/cm.zz.RetrieveComboCMD.do?sysCd=NcallDsCommonEBC&queryId=retriveEqNrmTotalList";
  $c.sbm.execute($p, sbm_vehclNrm);
};

//-------------------------------------------------------------------------
// 합적유형코드
//-------------------------------------------------------------------------
scwin.f_ComboCoshippingPatternCd = function (param1, param2, param3, param4, param5, param6) {
  //합적번호를 param5로 넘겨서 합적번호가 있는 경우와 없는경우로 나누어 조회한다
  //합적이 아닌 단일물량은 합적유형이 C로 시작하는 값을 가져오면 안된다.
  if (param5 == "") {
    param5 = "1"; // 단일물량인경우
  } else {
    param5 = "2"; // 합적인경우
  }
  sbm_coshippingPatternCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=NcallDsCommonEBC&queryId=retriveCoshippingPatternCdCombo&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4 + "&param5=" + param5 + "&param6=" + param6;
  $c.sbm.execute($p, sbm_coshippingPatternCd);
};

//-------------------------------------------------------------------------
// 합적유형코드 조회 성공
//-------------------------------------------------------------------------
scwin.sbm_coshippingPatternCd_submitdone = async function (e) {
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  if (ds_coshippingPatternCd.getRowCount() == 0 && ds_transList.getCellData(scwin.rowPosition, "coshippingNo") == "") {
    // [합적번호="", 합적유형코드 DB 데이터 없음] 이면 합적유형코드는 B01
    ds_transList.setCellData(scwin.rowPosition, "coshippingPatternCd", DsConstants.COSHIPPING_PATTERN_CD_GROSS_WT);
    await scwin.f_ComboUnitCd(ds_transList.getCellData(scwin.rowPosition, "ctrtClntNo"), ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd"), ds_transList.getCellData(scwin.rowPosition, "wrkStDt"), ds_transList.getCellData(scwin.rowPosition, "ctrtNo"), ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"), ds_transList.getCellData(scwin.rowPosition, "arvWrkPlCd"));
    return;
  }
  if (ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd") == "") {
    ds_transList.setCellData(scwin.rowPosition, "coshippingPatternCd", ds_coshippingPatternCd.getCellData(0, "code"));
  }
  await scwin.f_ComboUnitCd(ds_transList.getCellData(scwin.rowPosition, "ctrtClntNo"), ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd"), ds_transList.getCellData(scwin.rowPosition, "wrkStDt"), ds_transList.getCellData(scwin.rowPosition, "ctrtNo"), ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"), ds_transList.getCellData(scwin.rowPosition, "arvWrkPlCd"));
};

//-------------------------------------------------------------------------
// 단위코드 조회
//-------------------------------------------------------------------------
scwin.f_ComboUnitCd = async function (param1, param2, param3, param4, param5, param6) {
  //합적유형에 단위코드가 없을경우 벌크계약하불요율 테이블에서 읽어온다
  scwin.gv_canSearchWrkUnitCd = true;
  sbm_unitCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=NcallDsCommonEBC&queryId=retriveUnitCdCombo&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4 + "&param5=" + param5 + "&param6=" + param6;
  await $c.sbm.execute($p, sbm_unitCd);
};

//-------------------------------------------------------------------------
// 단위코드2(합적유형에 단위코드가 없을경우 벌크계약하불요율 테이블에서 읽어온다)
//-------------------------------------------------------------------------   
scwin.f_ComboWrkUnitCd = async function (param1) {
  scwin.gv_canSearchWrkUnitCd = false;
  sbm_unitCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=NcallDsCommonEBC&queryId=retriveWrkUnitCdCombo&param1=" + param1;
  await $c.sbm.execute($p, sbm_unitCd);
};

//-------------------------------------------------------------------------
// 단위코드 조회 성공
//-------------------------------------------------------------------------
scwin.sbm_unitCd_submitdone = async function (e) {
  let rowCnt = ds_unitCd.getRowCount();
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }

  // 하불요율 기준에 단위는 합적유형과 상관 없이 가져오기 
  if (scwin.gv_canSearchWrkUnitCd) {
    await scwin.f_ComboWrkUnitCd(ds_transList.getCellData(scwin.rowPosition, "ctrtNo"));
    return;
  }
  if (ds_unitCd.getRowCount() == 0) {
    ds_unitCd.insertRow();
    ds_unitCd.setCellData(0, "code", "TON");
    ds_unitCd.setCellData(0, "name", "TON");
  }
  if (ds_transList.getCellData(scwin.rowPosition, "unitCd") == "") {
    ds_transList.setCellData(scwin.rowPosition, "unitCd", ds_unitCd.getCellData(0, "code"));
  }
};

//-------------------------------------------------------------------------
// 계약처 조회 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    // 계약처  팝업
    case 1:
      await udc_srchCtrtClntCd.cfCommonPopUp(scwin.udc_srchCtrtClntCd_callBackFunc,
      // 팝업 콜백 리턴결과 Array 형태로 SQL Select 순서로 Return됨.
      pCode,
      // 화면에서의 ??? Code Element의 Value null "1234"
      pName,
      // 화면에서의 ??? Name Element의  Value
      pClose,
      // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      null,
      // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      null,
      // Title순서  
      null,
      // 보여주는 각 컬럼들의 폭    
      "3,4,5,6,7,8,9,10",
      // 컬럼중에서 숨기는    컬럼 지정   
      ",5",
      // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      null,
      // POP-UP뛰을때 원도우의   사용자 정의  폭
      null,
      // POP-UP뛰을때 우도우의   사용자 정의  높이  
      null,
      // 윈도우 위치 Y좌표   
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부   ("F")
      pAllSearch,
      // 전체검색허용여부 ("F")
      null,
      // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      null);
      break;

    // 협력업체(차량매입)
    case 2:
      //0421 차량번호에서 탭 눌러서 왔을 경우 실행 안함
      if (scwin.tabYn) {
        scwin.tabYn = false;
        break;
      }
      ;
      //pCode = $c.gus.cfGetHiddenValue(ed_srchCarKindClntInfoForGrid);
      //pName = $c.gus.cfGetHiddenValue(ed_srchCarKindClntInfoNmForGrid);

      await udc_srchCarKindClntInfoForGrid.cfCommonPopUp(scwin.udc_srchCarKindClntInfoForGrid_callBackFunc,
      // 팝업 콜백 리턴결과 Array 형태로 SQL Select 순서로 Return됨.
      pCode,
      // 화면에서의 ??? Code Element의 Value null "1234"
      pName,
      // 화면에서의 ??? Name Element의  Value
      pClose,
      // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      null,
      // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      null,
      // Title순서  
      null,
      // 보여주는 각 컬럼들의 폭    
      null,
      // 컬럼중에서 숨기는    컬럼 지정   
      DsConstants.PCHS_CLNT_CLS_CD_HIRECAR,
      // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      null,
      // POP-UP뛰을때 원도우의   사용자 정의  폭
      null,
      // POP-UP뛰을때 우도우의   사용자 정의  높이  
      null,
      // 윈도우 위치 Y좌표   
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부   ("F")
      pAllSearch,
      // 전체검색허용여부 ("F")
      "협력업체,협력업체코드,협력업체명",
      // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      null);
      break;

    // 차량 조회 팝업
    case 3:
      const popupRowPosition = !$c.util.isEmpty($p, scwin.vehclPopupRowPosition) ? scwin.vehclPopupRowPosition : scwin.rowPosition;
      if ($c.util.isEmpty($p, popupRowPosition)) {
        break;
      }
      pCode = $c.gus.cfGetHiddenValue($p, ed_srchVehclShortCdForGrid);
      if (scwin.isVehclShortCdPopupOpening) {
        break;
      }
      scwin.isVehclShortCdPopupOpening = true;
      scwin.vehclPopupRowPosition = popupRowPosition;
      scwin.syncTransListRowPosition(popupRowPosition);
      let pWhere = ds_transList.getCellData(popupRowPosition, "wrkStDt") + "," + ds_transList.getCellData(popupRowPosition, "repClntNo").replace(/\s*$/, "");
      //0421 
      await udc_srchVehclShortCdForGrid.cfCommonPopUpAsync(scwin.udc_srchVehclShortCdForGrid_callBackFunc,
      // 팝업 콜백 리턴결과 Array 형태로 SQL Select 순서로 Return됨.
      pCode,
      // 화면에서의 ??? Code Element의 Value null "1234"
      pName,
      // 화면에서의 ??? Name Element의  Value
      pClose,
      // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      null,
      // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      null,
      // Title순서  
      null,
      // 보여주는 각 컬럼들의 폭    
      "7,8,9,10",
      // 컬럼중에서 숨기는  컬럼 지정
      pWhere,
      // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      null,
      // POP-UP뛰을때 원도우의   사용자 정의  폭
      null,
      // POP-UP뛰을때 우도우의   사용자 정의  높이  
      null,
      // 윈도우 위치 Y좌표   
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부   ("F")
      pAllSearch,
      // 전체검색허용여부 ("F")
      null,
      // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      null).then(function () {
        scwin.resetVehclShortCdPopupState();
      }, function (error) {
        scwin.resetVehclShortCdPopupState();
        throw error;
      });
      break;

    // 차량 조회 팝업
    case 5:
      await udc_srchBefCargoForGrid.cfCommonPopUp(scwin.udc_srchBefCargoForGrid_callBackFunc,
      // 팝업 콜백 리턴결과 Array 형태로 SQL Select 순서로 Return됨.
      pCode,
      // 화면에서의 ??? Code Element의 Value null "1234"
      pName,
      // 화면에서의 ??? Name Element의  Value
      pClose,
      // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      null,
      // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      null,
      // Title순서  
      null,
      // 보여주는 각 컬럼들의 폭    
      null,
      // 컬럼중에서 숨기는  컬럼 지정
      null,
      // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      null,
      // POP-UP뛰을때 원도우의   사용자 정의  폭
      null,
      // POP-UP뛰을때 우도우의   사용자 정의  높이  
      null,
      // 윈도우 위치 Y좌표   
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부   ("F")
      pAllSearch,
      // 전체검색허용여부 ("F")
      null,
      // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      null);
      break;

    // 출발 작업장(구간) 팝업
    case 8:
      // 출발작업장 팝업			
      udc_onWrkPlCd.cfCommonPopUp(scwin.udc_onWrkPlCd_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null, null);
      break;

    // 도착 작업장(구간) 팝업
    case 9:
      // 도착작업장 팝업			
      udc_offWrkPlCd.cfCommonPopUp(scwin.udc_offWrkPlCd_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 계약처 조회 팝업 callback
//-------------------------------------------------------------------------
scwin.udc_srchCtrtClntCd_callBackFunc = function (rtnList) {
  if (rtnList == "N/A") {
    ed_srchCtrtClntCd.setValue("");
    txt_ctrtClntNm.setValue("");
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_srchCtrtClntCd, txt_ctrtClntNm);
  }
};

//-------------------------------------------------------------------------
// 그리드내 차량단축번호 조회 팝업 callback
//-------------------------------------------------------------------------
scwin.normalizeVehclLobranNm = function (lobranNm) {
  if ($c.util.isEmpty($p, lobranNm)) {
    return "";
  }
  return lobranNm.toString().replace(/\s+/g, "").trim();
};
scwin.getVehclLobranKey = function (lobranNm) {
  const normalizedLobranNm = scwin.normalizeVehclLobranNm(lobranNm);
  if ($c.util.isEmpty($p, normalizedLobranNm)) {
    return "";
  }
  const lobranAliasList = [{
    key: "동해",
    aliases: ["동해"]
  }, {
    key: "중부",
    aliases: ["중부", "당진", "평택"]
  }, {
    key: "인천",
    aliases: ["인천"]
  }, {
    key: "서부",
    aliases: ["서부", "의왕"]
  }, {
    key: "용인",
    aliases: ["용인"]
  }, {
    key: "경기",
    aliases: ["경기"]
  }, {
    key: "전남",
    aliases: ["전남", "서남"]
  }, {
    key: "군산",
    aliases: ["군산"]
  }, {
    key: "전북",
    aliases: ["전북"]
  }, {
    key: "부산",
    aliases: ["부산"]
  }, {
    key: "영남",
    aliases: ["영남"]
  }, {
    key: "포항",
    aliases: ["포항"]
  }, {
    key: "대구",
    aliases: ["대구"]
  }, {
    key: "세종",
    aliases: ["세종"]
  }];
  for (let i = 0; i < lobranAliasList.length; i++) {
    for (let j = 0; j < lobranAliasList[i].aliases.length; j++) {
      if (normalizedLobranNm.indexOf(lobranAliasList[i].aliases[j]) > -1) {
        return lobranAliasList[i].key;
      }
    }
  }
  const hangulWords = normalizedLobranNm.match(/[가-힣]+/g);
  if (hangulWords != null && hangulWords.length > 0) {
    return hangulWords[0].substring(0, 2);
  }
  return normalizedLobranNm.substring(0, 2);
};
scwin.getVehclLobranMsgNm = function (lobranNm) {
  return scwin.getVehclLobranKey(lobranNm);
};
scwin.getVehclLobranKeys = function (lobranNm) {
  const lobranKey = scwin.getVehclLobranKey(lobranNm);
  if ($c.util.isEmpty($p, lobranKey)) {
    return [];
  }
  return [lobranKey];
};
scwin.getVehclLobranNm = function () {
  let lobranLabel = "";
  if (typeof lc_srchLobranCd.getSelectedLabel == "function") {
    lobranLabel = lc_srchLobranCd.getSelectedLabel();
  }
  if ($c.util.isEmpty($p, lobranLabel)) {
    lobranLabel = lc_srchLobranCd.getText();
  }
  return scwin.normalizeVehclLobranNm(lobranLabel);
};
scwin.isSameVehclLobranNm = function (expectedLobranNm, actualLobranNm) {
  const expectedLobranKeys = scwin.getVehclLobranKeys(expectedLobranNm);
  const actualLobranKeys = scwin.getVehclLobranKeys(actualLobranNm);
  if (expectedLobranKeys.length == 0 || actualLobranKeys.length == 0) {
    return true;
  }
  for (let i = 0; i < expectedLobranKeys.length; i++) {
    if (actualLobranKeys.indexOf(expectedLobranKeys[i]) > -1) {
      return true;
    }
  }
  return false;
};
scwin.clearVehclInfoByOdrNo = function (rowIndex) {
  if (rowIndex == null || rowIndex < 0) {
    return;
  }
  const odrNo = ds_transList.getCellData(rowIndex, "odrNo");
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (!$c.util.isEmpty($p, odrNo)) {
      if (ds_transList.getCellData(i, "odrNo") != odrNo) {
        continue;
      }
    } else if (i != rowIndex) {
      continue;
    }
    scwin.setTransListRowData(i, {
      vehclShortCd: "",
      vehclNo: "",
      eqKndCd: "",
      eqNrmCd: "",
      eqCd: "",
      copCoClntNo: "",
      copCoClntNm: "",
      wrkIndictYn: 0,
      csctPrtYn: 0,
      minAmt: 0,
      maxAmt: 0,
      adptAmt: 0,
      scAmt: 0,
      scAmtRate: 0,
      scReg: "",
      scRegCd: "",
      cmpstcrgMargin: 0
    });
  }
  ds_transList.setRowPosition(rowIndex);
};
scwin.getSameCoshippingNoRowIndexes = function (rowIndex) {
  let rowIndexes = [];
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return rowIndexes;
  }
  const coshippingNo = ds_transList.getCellData(rowIndex, "coshippingNo");
  //0423 임시번호가 같은것도 똑같이 작동하게 추가
  //coshippingNoTemp 들어간 부분이 추가한 부분 
  const coshippingNoTemp = ds_transList.getCellData(rowIndex, "coshippingNoTemp");
  if (($c.util.isEmpty($p, coshippingNo) || coshippingNo.toString().trim() == "") && coshippingNoTemp == "0") {
    rowIndexes.push(rowIndex);
    return rowIndexes;
  }
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (coshippingNoTemp != "0" && ds_transList.getCellData(i, "coshippingNoTemp") == coshippingNoTemp) {
      rowIndexes.push(i);
    } else if (ds_transList.getCellData(i, "coshippingNo") == coshippingNo && !($c.util.isEmpty($p, coshippingNo) || coshippingNo.toString().trim() == "")) {
      rowIndexes.push(i);
    }
  }

  // 물량분할로 생성된 행이 섞여 있으면 같은 오더번호 자동 전파를 막는다.
  for (let i = 0; i < rowIndexes.length; i++) {
    if (ds_transList.getRowStatus(rowIndexes[i]) == "C") {
      return [rowIndex];
    }
  }
  return rowIndexes;
};
scwin.resetVehclShortCdPopupState = function () {
  scwin.isVehclShortCdPopupOpening = false;
  scwin.vehclPopupRowPosition = null;
  scwin.clickVehclShortCd = false;
};
scwin.udc_srchVehclShortCdForGrid_callBackFunc = function (rtnList) {
  scwin.udc_srchVehclShortCdForGrid_callBackFuncAsync(rtnList).catch(function (e) {
    console.error("[scwin.udc_srchVehclShortCdForGrid_callBackFunc]", e);
  });
};
scwin.udc_srchVehclShortCdForGrid_callBackFuncAsync = async function (rtnList) {
  try {
    if (scwin.clickVehclShortCd) {
      $c.gus.cfSetHiddenValue($p, ed_srchVehclShortCdForGrid, "");
      scwin.clickVehclShortCd = false;
    }
    const popupRowPosition = !$c.util.isEmpty($p, scwin.vehclPopupRowPosition) ? scwin.vehclPopupRowPosition : scwin.rowPosition;
    if (!$c.util.isEmpty($p, popupRowPosition)) {
      scwin.rowPosition = popupRowPosition;
      ds_transList.setRowPosition(popupRowPosition);
    }
    scwin.resetVehclShortCdPopupState();
    const isClosedWithoutSelection = rtnList == null || rtnList == "N/A" || !$c.util.isEmpty($p, rtnList[0]) && rtnList[0].trim() == "N/A";
    if (isClosedWithoutSelection) {
      $c.gus.cfSetHiddenValue($p, ed_srchVehclShortCdForGrid, "");
      scwin.clearVehclInfoByOdrNo(scwin.rowPosition);
      scwin.resetVehclShortCdPopupState();
      return;
    }
    //0423 밑에서 어느순간 로우포지션을 변경시킴, 변경 시켰을 때 다시 되돌리기 위해 세팅 
    const rowpo = scwin.rowPosition;

    // 합적이 되있거나 같이 선택된 물량들은 같은 값으로 변경해준다.
    if (rtnList != null) {
      const vehclLobranNm = scwin.getVehclLobranNm();
      const alertLobranNm = scwin.getVehclLobranMsgNm(vehclLobranNm);
      if (!scwin.isSameVehclLobranNm(vehclLobranNm, rtnList[1])) {
        await $c.gus.f_cfAlertMsg($p, alertLobranNm + " 차량이 아닙니다.");
      }
      if (false && !scwin.isSameVehclLobranNm(vehclLobranNm, rtnList[1])) {
        const messageIdx = new Date().getTime();
        $c.util.setTimeout($p, function () {
          $c.gus.f_cfAlertMsg($p, alertLobranNm + " 차량이 아닙니다.");
          ds_transList.setCellData(scwin.rowPosition, "vehclShortCd", "");
        }, {
          delay: 0,
          args: [messageIdx],
          key: "AlertMessage" + messageIdx
        });
      }
      if (rtnList[0].trim() != "N/A") {
        ds_transList.setCellData(scwin.rowPosition, "vehclShortCd", rtnList[0]);
        ds_transList.setCellData(scwin.rowPosition, "vehclNo", rtnList[2]);
        ds_transList.setCellData(scwin.rowPosition, "eqKndCd", rtnList[4]);
        ds_transList.setCellData(scwin.rowPosition, "eqNrmCd", rtnList[5]);
        ds_transList.setCellData(scwin.rowPosition, "bulkVehclBpYn", rtnList[6]);
        ds_transList.setCellData(scwin.rowPosition, "mbssysVehclYn", rtnList[7]);
        ds_transList.setCellData(scwin.rowPosition, "eqCd", rtnList[8]);
        scwin.rowPosition = rowpo;
        if (rtnList[9] == "1") {
          ds_transList.setCellData(scwin.rowPosition, "wrkIndictYn", 1);
          ds_transList.setCellData(scwin.rowPosition, "csctPrtYn", 1); /* 201601 화물위탁증관련 발행여부 csctPrtYn 추가  jisoo */
        } else {
          ds_transList.setCellData(scwin.rowPosition, "wrkIndictYn", 0);
          ds_transList.setCellData(scwin.rowPosition, "csctPrtYn", 0); /* 201601 화물위탁증관련 발행여부 csctPrtYn 추가  jisoo */
        }
        scwin.rowPosition = rowpo;
        if (rtnList[6] == 1) {
          if (ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd").substring(0, 1) != "C") {
            ds_transList.setCellData(scwin.rowPosition, "coshippingPatternCd", "D02");
          }
        } else if (rtnList[7] == 1) {
          //회원제 차량이면 합적유형이 D01 이어야 한다
          if (ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd").substring(0, 1) != "C") {
            ds_transList.setCellData(scwin.rowPosition, "coshippingPatternCd", DsConstants.COSHIPPING_PATTERN_CD_MBSSYS);
          }
        } else {
          if (ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd") == DsConstants.COSHIPPING_PATTERN_CD_MBSSYS) {
            ds_transList.setCellData(scwin.rowPosition, "coshippingPatternCd", ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"));
            ds_transList.setCellData(scwin.rowPosition, "unitCd", ds_transList.getCellData(scwin.rowPosition, "unitCd"));
          }
        }
        scwin.rowPosition = rowpo;
        if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") == "" && ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") == 0 && scwin.isTransListChkChecked(scwin.rowPosition)) {
          let transCount = 0;
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (scwin.isTransListChkChecked(i)) {
              transCount++;
            }
          }
          if (transCount > 1) {
            //2개이상의 운송물량에 차량배정할 경우  임시 합적번호 부여
            scwin.cntCoshipping++;
            for (let i = 0; i < ds_transList.getRowCount(); i++) {
              if (scwin.isTransListChkChecked(i)) {
                ds_transList.setCellData(i, "coshippingNoTemp", scwin.cntCoshipping);
              }
            }
          }
        }
        scwin.rowPosition = rowpo;
        if (ds_transList.getCellData(scwin.rowPosition, "repClntNo") == "000001" && rtnList[3] > 0 && rtnList[4] != "TR" && (ds_transList.getCellData(scwin.rowPosition, "lobranCd") == "3AA" || ds_transList.getCellData(scwin.rowPosition, "lobranCd") == "5AA")) {
          let grossSumChk = 0;

          // 선택한것들의 중량의 합을 구한다.
          if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") == "" && ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") == 0) {
            for (let i = 0; i < ds_transList.getRowCount(); i++) {
              if (i == scwin.rowPosition || scwin.isTransListChkChecked(i)) {
                grossSumChk = grossSumChk + ds_transList.getCellData(i, "grossWt");
              }
            }
          } else {
            if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "") {
              for (let i = 0; i < ds_transList.getRowCount(); i++) {
                if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(scwin.rowPosition, "coshippingNo")) {
                  grossSumChk = grossSumChk + ds_transList.getCellData(i, "grossWt");
                }
              }
            } else if (ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") != 0) {
              for (let i = 0; i < ds_transList.getRowCount(); i++) {
                if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp")) {
                  grossSumChk = grossSumChk + ds_transList.getCellData(i, "grossWt");
                }
              }
            }
          }
          if (rtnList[3] * 1.1 < grossSumChk) {
            // jisoo, 20150803 김병찬대리요청 *1.1 추가
            $c.gus.f_cfAlertMsg($p, "과적입니다. 차량번호를 다시 입력하세요");
            // jisoo, 20150803 허윤석사원요청 alert후 빈값으로 변경 후 return;
            scwin.clearVehclInfoByOdrNo(scwin.rowPosition);
            scwin.resetVehclShortCdPopupState();
            return;
          }
        }
        // 차량팝업이 닫힐때 OP655에 저장된거를 조회한다. 울산 라파즈경우 하불을 다르게 적용하기때문, 울산라파즈 하불단위, 톤수세팅
        if (ds_transList.getCellData(scwin.rowPosition, "bilgClntNo") == "100002") {
          scwin.f_UnitySelling();
        }
        //0423
        await scwin.copyCoshipping(2);

        // 복화 관련해서 값 세팅하는 부분 - 미 배차시에만 적용됨
        if (ds_srchCond.get("schGubun") != "C") {
          //0427 체크한 데이터의 최고최저적용 금액 모두 세팅해야해서 for 추가
          //체크한게 없으면 그냥 한번만 진행 
          let tempCnt = 0;
          let checkedIdxList = [];
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (ds_transList.getCellData(i, "chk") == "1") {
              checkedIdxList.push(i);
            }
          }
          tempCnt = checkedIdxList.length;
          if (tempCnt > 0) {
            for (let j = 0; j < checkedIdxList.length; j++) {
              let targetIdx = checkedIdxList[j];
              await scwin.setBulkCmpstcrgSrchCond(targetIdx);
            }
          } else {
            await scwin.setBulkCmpstcrgSrchCond(scwin.rowPosition);
          }
          //await scwin.setBulkCmpstcrgSrchCond(scwin.rowPosition);
          // scwin.copyBulkCmpstcrg(scwin.rowPosition);
          await scwin.checkReturnYn();
        }

        //차량 정기검사/정기점검/정밀검사 체크
        sbm_retrieveChassis.action = "/ncall.tn.op.transwrkindict.cntr.RetrieveCarInspInfoCMD.do?chassShortNo=" + rtnList[0];
        $c.sbm.execute($p, sbm_retrieveChassis);
      }
      // gr_transList.SetColumn("reqClntNm"); TODO: SetColumn이 뭐하는거지?
    } else {
      ds_transList.setCellData(scwin.rowPosition, "vehclShortCd", "");
      ds_transList.setCellData(scwin.rowPosition, "vehclNo", "");
      ds_transList.setCellData(scwin.rowPosition, "eqKndCd", "");
      ds_transList.setCellData(scwin.rowPosition, "eqNrmCd", "");
      ds_transList.setCellData(scwin.rowPosition, "eqCd", "");
      ds_transList.setCellData(scwin.rowPosition, "wrkIndictYn", 0);
      ds_transList.setCellData(scwin.rowPosition, "csctPrtYn", 0); /* 201601 화물위탁증관련 발행여부 csctPrtYn 추가  jisoo */
      ds_transList.setCellData(scwin.rowPosition, "coshippingPatternCd", ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"));
      ds_transList.setCellData(scwin.rowPosition, "unitCd", ds_transList.getCellData(scwin.rowPosition, "unitCd"));
      ds_transList.setCellData(scwin.rowPosition, "bulkVehclBpYn", ds_transList.getCellData(scwin.rowPosition, "bulkVehclBpYn"));
      ds_transList.setCellData(scwin.rowPosition, "mbssysVehclYn", ds_transList.getCellData(scwin.rowPosition, "mbssysVehclYn"));
      ds_transList.setCellData(scwin.rowPosition, "minAmt", 0);
      ds_transList.setCellData(scwin.rowPosition, "maxAmt", 0);
      ds_transList.setCellData(scwin.rowPosition, "adptAmt", 0);
      ds_transList.setCellData(scwin.rowPosition, "scAmt", 0);
      ds_transList.setCellData(scwin.rowPosition, "scAmtRate", 0);
      ds_transList.setCellData(scwin.rowPosition, "scReg", "");
      ds_transList.setCellData(scwin.rowPosition, "scRegCd", "");
      ds_transList.setCellData(scwin.rowPosition, "cmpstcrgMargin", 0);
      await scwin.copyCoshipping(2);
    }
    if (ds_transList.getCellData(scwin.rowPosition, "repClntNo") == "247741" && ds_transList.getCellData(scwin.rowPosition, "wrkPatternCd") == "s") {
      scwin.f_openCommonPopUp(5, ds_transList.getCellData(scwin.rowPosition, "eqCd"), ds_transList.getCellData(scwin.rowPosition, "eqCd"), 'T', 'T');
    }

    // 보랄 여수/당진공장에서만 배차제한 팝업창 띄움    sh1004dd 
    if (ds_transList.getCellData(scwin.rowPosition, "repClntNo") == "000001" && (ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd") == "3M01" || ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd") == "5M01" || ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd") == "3W05")) {
      await scwin.f_RestrictiveAllocate();
    }
    scwin.resetVehclShortCdPopupState();
  } catch (e) {
    scwin.resetVehclShortCdPopupState();
    throw e;
  }
};

//-------------------------------------------------------------------------
// 보랄 배차 한정 동일 차량이 이틀 연속 3회/일 이상 배차 시, 차량 1대가 13회/주 배차 시 Alert
//-------------------------------------------------------------------------
scwin.f_RestrictiveAllocate = async function () {
  // cmd 로 넘길 데이터셋 초기화
  ds_CarNo.removeAll();
  ds_CarNo.insertRow();
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }

  // 조회된 데이터셋에서 넘길 데이터셋으로 카피
  ds_CarNo.setCellData(0, 'carNo', ds_transList.getCellData(scwin.rowPosition, "vehclShortCd"));
  ds_CarNo.setCellData(0, 'wrkStDt', ds_transList.getCellData(scwin.rowPosition, "wrkStDt"));
  ds_CarNo.setCellData(0, 'wrkEndDt', ds_transList.getCellData(scwin.rowPosition, "wrkEndDt"));
  await $c.sbm.execute($p, sbm_retrieveRestrictiveAllocate);
};

//-------------------------------------------------------------------------
// 보랄 배차 한정 동일 차량이 이틀 연속 3회/일 이상 배차 시, 차량 1대가 13회/주 배차 시 Alert 조회 완료
//-------------------------------------------------------------------------
scwin.sbm_retrieveRestrictiveAllocate_submitdone = async function (e) {
  let toDay = new Date();
  let toHours = toDay.getHours();
  let toMinutes = toDay.getMinutes();
  let toSeconds = toDay.getSeconds();
  let ret;
  if (ds_AllocateCnt.getRowCount() > 0) {
    if (!$c.util.isEmpty($p, scwin.rowPosition)) {
      ds_transList.setRowPosition(scwin.rowPosition);
    }

    // 전일 3회전이상 된 차량은 익일 오전(11시59분59초까지) 배차 제한    sh1004dd          		
    if (ds_AllocateCnt.getCellData(0, "twoDaysAllocateCnt") >= 3 && toHours <= "11" && toMinutes <= "59" && toSeconds <= "59") {
      ret = await $c.win.confirm($p, "전일 3회전 이상 운행 차량입니다. 오전 출하시 공장 출하팀과 협의 바랍니다.");
      if (ret) {
        let flag = "001";
        scwin.f_history(flag);
      } else {
        scwin.clearVehclInfoByOdrNo(scwin.rowPosition);
      }
    }

    // 장거리 익일차 지역 당일 2회 이상시 배차 제한
    if (ds_AllocateCnt.getCellData(0, "longdistanceCnt") >= 2) {
      ret = await $c.win.confirm($p, "장거리 운행 후 금일 2회 이상 배차되었습니다. 공장 출하팀과 협의 바랍니다.");
      if (ret) {
        let flag = "002";
        scwin.f_history(flag);
      } else {
        scwin.clearVehclInfoByOdrNo(scwin.rowPosition);
      }
    }

    // 용차 차량 2회 이상시 배차 제한
    if (ds_AllocateCnt.getCellData(0, "hiredcarCnt") >= 2) {
      ret = await $c.win.confirm($p, "용차 차량 금일 2회 이상 배차되었습니다. 공장 출하팀과 협의 바랍니다.");
      if (ret) {
        let flag = "003";
        scwin.f_history(flag);
      } else {
        scwin.clearVehclInfoByOdrNo(scwin.rowPosition);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 보랄 배차 제한 이력
//-------------------------------------------------------------------------
scwin.f_history = function (flag) {
  ds_history.removeAll();
  ds_history.insertRow();
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }

  // 조회된 데이터셋에서 넘길 데이터셋으로 카피
  ds_history.setCellData(0, "odrNo", ds_transList.getCellData(scwin.rowPosition, "odrNo"));
  ds_history.setCellData(0, "vehclShortCd", ds_transList.getCellData(scwin.rowPosition, "vehclShortCd"));
  ds_history.setCellData(0, "vehclNo", ds_transList.getCellData(scwin.rowPosition, "vehclNo"));
  ds_history.setCellData(0, "messageNo", flag);
  ds_history.setCellData(0, "commCd", ds_transList.getCellData(scwin.rowPosition, "commCd"));
  ds_history.setCellData(0, "commNm", ds_transList.getCellData(scwin.rowPosition, "commNm"));
  ds_history.setCellData(0, "qty", ds_transList.getCellData(scwin.rowPosition, "qty"));
  ds_history.setCellData(0, "coshippingNo", ds_transList.getCellData(scwin.rowPosition, "coshippingNo"));
  ds_history.setCellData(0, "dptWrkPlCd", ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd"));
  ds_history.setCellData(0, "arvWrkPlCd", ds_transList.getCellData(scwin.rowPosition, "arvWrkPlCd"));
  $c.sbm.execute($p, sbm_history);
};

//-------------------------------------------------------------------------
// 차량 조회 팝업 callback
//-------------------------------------------------------------------------
scwin.udc_srchBefCargoForGrid_callBackFunc = function (rtnList) {
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_transList, scwin.rowPosition, "befCargoCd", "befCargoNm");
  if (rtnList[0] != "N/A") {
    $c.gus.f_cfAlertMsg($p, "이전화물은 " + ds_transList.getCellData(scwin.rowPosition, "befCargoCd") + " 입니다");
  } else {
    ds_transList.setCellData(scwin.rowPosition, "befCargoCd", "");
    ds_transList.setCellData(scwin.rowPosition, "befCargoNm", "");
  }
};

//-------------------------------------------------------------------------
// 협력업체(차량매입) 조회 팝업 callback
//-------------------------------------------------------------------------
scwin.udc_srchCarKindClntInfoForGrid_callBackFunc = async function (rtnList) {
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  let row = scwin.rowPosition;
  if (scwin.clickCopCoClntNo) {
    scwin.clickCopCoClntNo = false;
    $c.gus.cfSetHiddenValue($p, ed_srchCarKindClntInfoForGrid, "");
    $c.gus.cfSetHiddenValue($p, ed_srchCarKindClntInfoNmForGrid, "");
  }
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_transList, row, "copCoClntNo", "copCoClntNm");

  // 합적이 되있거나 같이 선택된 물량들은 같은 값으로 변경해준다.
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ds_transList.setCellData(row, "bulkVehclBpYn", ds_transList.getCellData(row, "bulkVehclBpYn"));
      ds_transList.setCellData(row, "mbssysVehclYn", ds_transList.getCellData(row, "mbssysVehclYn"));
      ds_transList.setCellData(row, "coshippingPatternCd", ds_transList.getCellData(row, "coshippingPatternCd"));
      ds_transList.setCellData(row, "unitCd", ds_transList.getCellData(row, "unitCd"));
      if (ds_transList.getCellData(row, "coshippingNo") == "" && ds_transList.getCellData(row, "coshippingNoTemp") == 0 && scwin.isTransListChkChecked(row)) {
        let transCount = 0;
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (scwin.isTransListChkChecked(i)) {
            transCount++;
          }
        }
        if (transCount > 1) {
          //2개이상의 운송물량에 차량배정할 경우  임시 합적번호 부여
          scwin.cntCoshipping++;
          for (let i = 1; i < ds_transList.getRowCount(); i++) {
            if (scwin.isTransListChkChecked(i)) {
              ds_transList.setCellData(i, "coshippingNoTemp", scwin.cntCoshipping);
            }
          }
        }
      }
      await scwin.copyCoshipping(1);
    }
  } else {
    await scwin.copyCoshipping(1);
  }
};

//-------------------------------------------------------------------------
// 차량 정기검사/정기점검/정밀검사 체크 성공
//-------------------------------------------------------------------------
scwin.sbm_retrieveChassis_submitdone = function (e) {
  let str = "";
  let str2 = "";
  let temp1 = "";
  for (let i = 0; i < ds_ChassisInfo.getRowCount(); i++) {
    if (!$c.gus.cfIsNull($p, ds_ChassisInfo.getCellData(i, "inspKndNm"))) {
      str = ds_ChassisInfo.getCellData(i, "inspKndNm");
      temp1 = ds_ChassisInfo.getCellData(i, "rglintInspExpireDt").substr(0, 4) + "년" + ds_ChassisInfo.getCellData(i, "rglintInspExpireDt").substr(4, 2) + "월" + ds_ChassisInfo.getCellData(i, "rglintInspExpireDt").substr(6, 2) + "일";
      str2 = str2 + str + temp1 + "<br/>";
    }
  }
  if (str != "") {
    $c.gus.f_cfAlertMsg($p, str2);
  }
};

//-------------------------------------------------------------------------
// 출발 작업장(구간) 조회 팝업 callback
//-------------------------------------------------------------------------
scwin.udc_onWrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList == "N/A") {
    ed_onWrkPlCd.setValue("");
    txt_onWrkPlNm.setValue("");
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_onWrkPlCd, txt_onWrkPlNm);
  }
};

//-------------------------------------------------------------------------
// 도착 작업장(구간) 조회 팝업 callback
//-------------------------------------------------------------------------
scwin.udc_offWrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList == "N/A") {
    ed_offWrkPlCd.setValue("");
    txt_offWrkPlNm.setValue("");
  } else {
    $c.gus.cfSetReturnValue($p, rtnList, ed_offWrkPlCd, txt_offWrkPlNm);
  }
};

//-------------------------------------------------------------------------
// 차량팝업이 닫힐때 OP655에 저장된거를 조회, 울산 라파즈공장의 경우 다른 하불체계 적용위해 울산라파즈 하불단위, 톤수세팅
//-------------------------------------------------------------------------
scwin.f_UnitySelling = async function () {
  let grossSum = 0;
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  // 선택한것들의 중량의 합을 구한다.
  if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") == "" && ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") == 0) {
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      if (i == scwin.rowPosition || scwin.isTransListChkChecked(i)) {
        grossSum = grossSum + ds_transList.getCellData(i, "grossWt");
      }
    }
  } else {
    if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "") {
      for (let i = 0; i < ds_transList.getRowCount(); i++) {
        if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(scwin.rowPosition, "coshippingNo")) {
          grossSum = grossSum + ds_transList.getCellData(i, "grossWt");
        }
      }
    } else if (ds_transList.getCellData(ds_transList.RowPosition, "coshippingNoTemp") != 0) {
      for (let i = 1; i < ds_transList.getRowCount(); i++) {
        if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp")) {
          grossSum = grossSum + ds_transList.getCellData(i, "grossWt");
        }
      }
    }
  }

  // cmd 로 넘길 데이터셋 초기화
  ds_UnitySelling.removeAll();
  ds_UnitySelling.insertRow();

  // 조회된 데이터셋에서 넘길 데이터셋으로 카피
  ds_UnitySelling.setCellData(0, "bilgClntNo", ds_transList.getCellData(scwin.rowPosition, "bilgClntNo"));
  ds_UnitySelling.setCellData(0, "dptWrkPlCd", ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd"));
  ds_UnitySelling.setCellData(0, "arvWrkPlCd", ds_transList.getCellData(scwin.rowPosition, "arvWrkPlCd"));
  ds_UnitySelling.setCellData(0, "grossSum", grossSum);
  ds_UnitySelling.setCellData(0, "wrkStDt", ds_transList.getCellData(scwin.rowPosition, "wrkStDt"));
  await $c.sbm.execute($p, sbm_retrieveUnitySelling);
};

//-------------------------------------------------------------------------
// 차량팝업이 닫힐때 OP655에 저장된거를 조회, 울산 라파즈공장의 경우 다른 하불체계 적용위해 울산라파즈 하불단위, 톤수세팅 조회 완료
//-------------------------------------------------------------------------
scwin.sbm_retrieveUnitySelling_submitdone = function (e) {
  // 조회결과 하불단위가 대당으로 나오면 하불단위와 , 조회된 차량규격을 세팅하고, TON 당이면 하불단위만 세팅한다.
  if (ds_Unity.getCellData(0, "unit") == 'VEH' || ds_Unity.getCellData(0, "unit") == 'KG') {
    if (!$c.util.isEmpty($p, scwin.rowPosition)) {
      ds_transList.setRowPosition(scwin.rowPosition);
    }
    if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") == "" && ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") == 0) {
      for (let i = 0; i < ds_transList.getRowCount(); i++) {
        if (i == scwin.rowPosition || scwin.isTransListChkChecked(i)) {
          ds_transList.setCellData(i, "unitCd", ds_Unity.getCellData(0, "unit"));
        }
      }
    } else {
      if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "") {
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(scwin.rowPosition, "coshippingNo")) {
            ds_transList.setCellData(i, "unitCd", ds_Unity.getCellData(0, "unit"));
          }
        }
      } else if (ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") != 0) {
        for (var i = 0; i < ds_transList.getRowCount(); i++) {
          if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp")) {
            ds_transList.setCellData(i, "unitCd", ds_Unity.getCellData(0, "unit"));
          }
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 차량이나 협력업체 배정시 같이 합적하여 배정된 운송물량들의 정보를 전부 통일
//-------------------------------------------------------------------------
scwin.copyCoshipping = async function (gubun) {
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }

  //밑에서 ds_trans가 변경되면서 rowposition이 또 변경 되기 때문에 ori를 따로 설정
  const oriRowPos = scwin.rowPosition;
  scwin.transYn = "Y"; //0423
  switch (gubun) {
    // 협력업체
    case 1:
      ds_transList.setCellData(scwin.rowPosition, "vehclShortCd", "");
      ds_transList.setCellData(scwin.rowPosition, "vehclNo", "");
      ds_transList.setCellData(scwin.rowPosition, "eqKndCd", "");
      ds_transList.setCellData(scwin.rowPosition, "eqNrmCd", "");
      ds_transList.setCellData(scwin.rowPosition, "eqCd", "");
      ds_transList.setCellData(scwin.rowPosition, "wrkIndictYn", 0);
      ds_transList.setCellData(scwin.rowPosition, "csctPrtYn", 0); /* 201601 화물위탁증관련 발행여부 csctPrtYn 추가  jisoo */
      const carKindClntTargetRows = scwin.getSameCoshippingNoRowIndexes(scwin.rowPosition);
      const carKindClntRowData = {
        copCoClntNo: ds_transList.getCellData(scwin.rowPosition, "copCoClntNo"),
        copCoClntNm: ds_transList.getCellData(scwin.rowPosition, "copCoClntNm"),
        vehclShortCd: "",
        vehclNo: "",
        eqKndCd: "",
        eqNrmCd: "",
        eqCd: "",
        wrkIndictYn: 0,
        csctPrtYn: 0,
        coshippingPatternCd: ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"),
        unitCd: ds_transList.getCellData(scwin.rowPosition, "unitCd"),
        bulkVehclBpYn: ds_transList.getCellData(scwin.rowPosition, "bulkVehclBpYn"),
        mbssysVehclYn: ds_transList.getCellData(scwin.rowPosition, "mbssysVehclYn")
      };
      for (let i = 0; i < carKindClntTargetRows.length; i++) {
        const targetRow = carKindClntTargetRows[i];
        scwin.setTransListRowData(targetRow, carKindClntRowData);
        scwin.resetTransListChkValue(targetRow);
      }
      break;

    // 차량
    case 2:
      //0423
      ds_transList.setCellData(scwin.rowPosition, "copCoClntNo", "");
      ds_transList.setCellData(scwin.rowPosition, "copCoClntNm", "");
      const isVehclEmpty = $c.util.isEmpty($p, ds_transList.getCellData(scwin.rowPosition, "vehclShortCd"));
      let vehclTargetRows = scwin.getSameCoshippingNoRowIndexes(scwin.rowPosition);
      const vehclRowData = {
        vehclShortCd: ds_transList.getCellData(scwin.rowPosition, "vehclShortCd"),
        vehclNo: ds_transList.getCellData(scwin.rowPosition, "vehclNo"),
        eqKndCd: ds_transList.getCellData(scwin.rowPosition, "eqKndCd"),
        eqNrmCd: ds_transList.getCellData(scwin.rowPosition, "eqNrmCd"),
        eqCd: isVehclEmpty ? "" : ds_transList.getCellData(scwin.rowPosition, "eqCd"),
        copCoClntNo: "",
        copCoClntNm: "",
        wrkIndictYn: isVehclEmpty ? 0 : ds_transList.getCellData(scwin.rowPosition, "wrkIndictYn"),
        csctPrtYn: isVehclEmpty ? 0 : ds_transList.getCellData(scwin.rowPosition, "csctPrtYn"),
        coshippingPatternCd: ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"),
        unitCd: ds_transList.getCellData(scwin.rowPosition, "unitCd"),
        bulkVehclBpYn: ds_transList.getCellData(scwin.rowPosition, "bulkVehclBpYn"),
        mbssysVehclYn: ds_transList.getCellData(scwin.rowPosition, "mbssysVehclYn")
      };
      const vehclAmountRowData = {
        maxAmt: ds_transList.getCellData(scwin.rowPosition, "maxAmt"),
        minAmt: ds_transList.getCellData(scwin.rowPosition, "minAmt"),
        adptAmt: ds_transList.getCellData(scwin.rowPosition, "adptAmt"),
        scAmt: ds_transList.getCellData(scwin.rowPosition, "scAmt"),
        scAmtRate: ds_transList.getCellData(scwin.rowPosition, "scAmtRate"),
        scRegCd: ds_transList.getCellData(scwin.rowPosition, "scRegCd"),
        scReg: ds_transList.getCellData(scwin.rowPosition, "scReg"),
        cmpstcrgMargin: ds_transList.getCellData(scwin.rowPosition, "cmpstcrgMargin")
      };

      //0423
      //check 된 애들은 전부 같은 차 번호 입력 되게 해야함 0423
      //1.현재 입력한 차량번호가 체크 된 로우인지 확인 
      //2.나머지 체크 된 애들도 같은 번호로 세팅
      const chkYn = ds_transList.getCellData(scwin.rowPosition, "chk");
      const checkedIndices = gr_transList.getCheckedIndex("chk");
      const checkedCount = checkedIndices.length;
      const checkedCoshippingNoTemp = ds_transList_ori.getCellData(scwin.rowPosition, "coshippingNoTemp");
      scwin.rowPosition = oriRowPos;
      if ("1" == chkYn && "0" == checkedCoshippingNoTemp) {
        for (let i = 0; i < checkedCount; i++) {
          const targetRow = checkedIndices[i];
          scwin.setTransListRowData(targetRow, vehclRowData);
          if (isVehclEmpty) {
            scwin.setTransListRowData(targetRow, vehclAmountRowData);
          }
          ds_transList_ori.setCellData(targetRow, "coshippingNoTemp", ds_transList.getCellData(targetRow, "coshippingNoTemp"));
          //scwin.setTransListChkValue(targetRow,1);//체크 풀린애들 다시 체크
        }
      } else {
        for (let i = 0; i < vehclTargetRows.length; i++) {
          const targetRow = vehclTargetRows[i];
          scwin.setTransListRowData(targetRow, vehclRowData);
          if (isVehclEmpty) {
            scwin.setTransListRowData(targetRow, vehclAmountRowData);
          }
          scwin.resetTransListChkValue(targetRow);
        }
      }
      break;

    // 귀로차량 여부
    case 3:
      if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "") {
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(scwin.rowPosition, "coshippingNo") && i != scwin.rowPosition) {
            await scwin.setBulkCmpstcrgSrchCond(i);
            scwin.copyBulkCmpstcrg(i);
          }
        }
      } else if (ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") != 0) {
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") && i != scwin.rowPosition) {
            await scwin.setBulkCmpstcrgSrchCond(i);
            scwin.copyBulkCmpstcrg(i);
          }
        }
      }
      break;

    // 협력배차
    case 4:
      if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "") {
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(scwin.rowPosition, "coshippingNo")) {
            ds_transList.setCellData(i, "vehclShortCd", ds_transList.getCellData(scwin.rowPosition, "vehclShortCd"));
            ds_transList.setCellData(i, "vehclNo", ds_transList.getCellData(scwin.rowPosition, "vehclNo"));
            ds_transList.setCellData(i, "eqKndCd", ds_transList.getCellData(scwin.rowPosition, "eqKndCd"));
            ds_transList.setCellData(i, "eqNrmCd", ds_transList.getCellData(scwin.rowPosition, "eqNrmCd"));
            ds_transList.setCellData(i, "eqCd", ds_transList.getCellData(scwin.rowPosition, "eqCd"));
            ds_transList.setCellData(i, "copCoClntNo", ds_transList.getCellData(scwin.rowPosition, "copCoClntNo"));
            ds_transList.setCellData(i, "copCoClntNm", ds_transList.getCellData(scwin.rowPosition, "copCoClntNm"));
            ds_transList.setCellData(i, "wrkIndictYn", ds_transList.getCellData(scwin.rowPosition, "wrkIndictYn"));
            ds_transList.setCellData(i, "csctPrtYn", ds_transList.getCellData(scwin.rowPosition, "csctPrtYn")); /* 201601 화물위탁증관련 발행여부 csctPrtYn 추가  jisoo */
            ds_transList.setCellData(i, "coshippingPatternCd", ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"));
            ds_transList.setCellData(i, "unitCd", ds_transList.getCellData(scwin.rowPosition, "unitCd"));
            ds_transList.setCellData(i, "bulkVehclBpYn", ds_transList.getCellData(scwin.rowPosition, "bulkVehclBpYn"));
            ds_transList.setCellData(i, "mbssysVehclYn", ds_transList.getCellData(scwin.rowPosition, "mbssysVehclYn"));
            if (ds_transList.getCellData(scwin.rowPosition, "vehclShortCd") == "" || ds_transList.getCellData(scwin.rowPosition, "vehclShortCd") == null) {
              ds_transList.setCellData(i, "maxAmt", ds_transList.getCellData(scwin.rowPosition, "maxAmt"));
              ds_transList.setCellData(i, "minAmt", ds_transList.getCellData(scwin.rowPosition, "minAmt"));
              ds_transList.setCellData(i, "adptAmt", ds_transList.getCellData(scwin.rowPosition, "adptAmt"));
              ds_transList.setCellData(i, "scAmt", ds_transList.getCellData(scwin.rowPosition, "scAmt"));
              ds_transList.setCellData(i, "scAmtRate", ds_transList.getCellData(scwin.rowPosition, "scAmtRate"));
              ds_transList.setCellData(i, "scRegCd", ds_transList.getCellData(scwin.rowPosition, "scRegCd"));
              ds_transList.setCellData(i, "scReg", ds_transList.getCellData(scwin.rowPosition, "scReg"));
              ds_transList.setCellData(i, "cmpstcrgMargin", ds_transList.getCellData(scwin.rowPosition, "cmpstcrgMargin"));
            }
          }
          scwin.resetTransListChkValue(i);
        }
      } else if (ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") != 0) {
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp")) {
            ds_transList.setCellData(i, "vehclShortCd", ds_transList.getCellData(scwin.rowPosition, "vehclShortCd"));
            ds_transList.setCellData(i, "vehclNo", ds_transList.getCellData(scwin.rowPosition, "vehclNo"));
            ds_transList.setCellData(i, "eqKndCd", ds_transList.getCellData(scwin.rowPosition, "eqKndCd"));
            ds_transList.setCellData(i, "eqNrmCd", ds_transList.getCellData(scwin.rowPosition, "eqNrmCd"));
            ds_transList.setCellData(i, "eqCd", ds_transList.getCellData(scwin.rowPosition, "eqCd"));
            ds_transList.setCellData(i, "copCoClntNo", ds_transList.getCellData(scwin.rowPosition, "copCoClntNo"));
            ds_transList.setCellData(i, "copCoClntNm", ds_transList.getCellData(scwin.rowPosition, "copCoClntNm"));
            ds_transList.setCellData(i, "wrkIndictYn", ds_transList.getCellData(scwin.rowPosition, "wrkIndictYn"));
            ds_transList.setCellData(i, "csctPrtYn", ds_transList.getCellData(scwin.rowPosition, "csctPrtYn")); /* 201601 화물위탁증관련 발행여부 csctPrtYn 추가  jisoo */
            ds_transList.setCellData(i, "coshippingPatternCd", ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"));
            ds_transList.setCellData(i, "unitCd", ds_transList.getCellData(scwin.rowPosition, "unitCd"));
            ds_transList.setCellData(i, "bulkVehclBpYn", ds_transList.getCellData(scwin.rowPosition, "bulkVehclBpYn"));
            ds_transList.setCellData(i, "mbssysVehclYn", ds_transList.getCellData(scwin.rowPosition, "mbssysVehclYn"));
            if (ds_transList.getCellData(scwin.rowPosition, "vehclShortCd") == "" || ds_transList.getCellData(scwin.rowPosition, "vehclShortCd") == null) {
              ds_transList.setCellData(i, "maxAmt", ds_transList.getCellData(scwin.rowPosition, "maxAmt"));
              ds_transList.setCellData(i, "minAmt", ds_transList.getCellData(scwin.rowPosition, "minAmt"));
              ds_transList.setCellData(i, "adptAmt", ds_transList.getCellData(scwin.rowPosition, "adptAmt"));
              ds_transList.setCellData(i, "scAmt", ds_transList.getCellData(scwin.rowPosition, "scAmt"));
              ds_transList.setCellData(i, "scAmtRate", ds_transList.getCellData(scwin.rowPosition, "scAmtRate"));
              ds_transList.setCellData(i, "scRegCd", ds_transList.getCellData(scwin.rowPosition, "scRegCd"));
              ds_transList.setCellData(i, "scReg", ds_transList.getCellData(scwin.rowPosition, "scReg"));
              ds_transList.setCellData(i, "cmpstcrgMargin", ds_transList.getCellData(scwin.rowPosition, "cmpstcrgMargin"));
            }
          }
          scwin.resetTransListChkValue(i);
        }
      } else {
        scwin.resetTransListChkValue(scwin.rowPosition);
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 복화 정보 조회를 위한 조회 조건을 세팅
//-------------------------------------------------------------------------
scwin.setBulkCmpstcrgSrchCond = async function (rowPosition) {
  let minYn = 0;
  let count = 0;
  let trfAdptChkCnt = 0;
  let allQty = 0;
  let allWt = 0;
  let allCbm = 0;
  if (ds_transList.getCellData(rowPosition, "coshippingNo") != "") {
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(rowPosition, "coshippingNo")) {
        count++;
        allQty += ds_transList.getCellData(i, "qty");
        allWt += ds_transList.getCellData(i, "grossWt");
        allCbm += ds_transList.getCellData(i, "cbm");
        if (ds_transList.getCellData(i, "trfAdptYn") == "1") {
          trfAdptChkCnt++;
        }
        if (ds_transList.getCellData(i, "minYn") == "1") {
          minYn = 1;
        }
      }
    }
  } else if (ds_transList.getCellData(rowPosition, "coshippingNoTemp") != 0) {
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(rowPosition, "coshippingNoTemp")) {
        count++;
        allQty += ds_transList.getCellData(i, "qty");
        allWt += ds_transList.getCellData(i, "grossWt");
        allCbm += ds_transList.getCellData(i, "cbm");
        if (ds_transList.getCellData(i, "trfAdptYn") == "1") {
          trfAdptChkCnt++;
        }
        if (ds_transList.getCellData(i, "minYn") == "1") {
          minYn = 1;
        }
      }
    }
  } else {
    count = 1;
    allQty = ds_transList.getCellData(rowPosition, "qty");
    allWt = ds_transList.getCellData(rowPosition, "grossWt");
    allCbm = ds_transList.getCellData(rowPosition, "cbm");
    if (ds_transList.getCellData(rowPosition, "trfAdptYn") == "1") {
      trfAdptChkCnt = 1;
    }
    if (ds_transList.getCellData(rowPosition, "minYn") == "1") {
      minYn = 1;
    }
  }
  ds_bulkCmpstcrgSrchCond.removeAll(); //0427
  ds_bulkCmpstcrgSrchCond.insertRow(); //0427
  ds_bulkCmpstcrgSrchCond.setCellData(0, "transWrkIndictNo", ds_transList.getCellData(rowPosition, "transWrkIndictNo"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "lobranCd", ds_srchCond.get("lobranCd"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "odrNo", ds_transList.getCellData(rowPosition, "odrNo"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "commSeq", ds_transList.getCellData(rowPosition, "commSeq"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "odrWrkPathSeq", ds_transList.getCellData(rowPosition, "wrkPathSeq"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "odrWrkStpSeq", ds_transList.getCellData(rowPosition, "wrkStpSeq"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "copCoClntNo", ds_transList.getCellData(rowPosition, "copCoClntNo"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "vehclNo", ds_transList.getCellData(rowPosition, "vehclNo"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "eqCd", ds_transList.getCellData(rowPosition, "eqCd"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "eqKndCd", ds_transList.getCellData(rowPosition, "eqKndCd"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "eqNrmCd", ds_transList.getCellData(rowPosition, "eqNrmCd"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "wrkUnitCd", ds_transList.getCellData(rowPosition, "unitCd"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "coshippingPatternCd", ds_transList.getCellData(rowPosition, "coshippingPatternCd"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "minYn", minYn);
  ds_bulkCmpstcrgSrchCond.setCellData(0, "minAdptYn", ds_transList.getCellData(rowPosition, "minYn"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "allClnt", count);
  ds_bulkCmpstcrgSrchCond.setCellData(0, "trfAdptChkCnt", trfAdptChkCnt);
  ds_bulkCmpstcrgSrchCond.setCellData(0, "trfAdptYn", ds_transList.getCellData(rowPosition, "trfAdptYn"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "allQty", allQty);
  ds_bulkCmpstcrgSrchCond.setCellData(0, "allWt", allWt);
  ds_bulkCmpstcrgSrchCond.setCellData(0, "allCbm", allCbm);
  ds_bulkCmpstcrgSrchCond.setCellData(0, "wrkQty", ds_transList.getCellData(rowPosition, "qty"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "wrkWt", ds_transList.getCellData(rowPosition, "grossWt"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "wrkCbm", ds_transList.getCellData(rowPosition, "cbm"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "len", ds_transList.getCellData(rowPosition, "len"));
  ds_bulkCmpstcrgSrchCond.setCellData(0, "marvYn", ds_transList.getCellData(rowPosition, "marvYn"));
  if (ds_srchCond.get("functionYn") == "1") {
    //0428 asis가 Y가 아니라 1을 사용 중 
    ds_bulkCmpstcrgSrchCond.setCellData(0, "calcYn", 1);
  } else {
    ds_bulkCmpstcrgSrchCond.setCellData(0, "calcYn", 0);
  }
  await $c.sbm.execute($p, sbm_retrieveBulkCmpstcrg);
  await scwin.copyBulkCmpstcrg(rowPosition);
};

//-------------------------------------------------------------------------
// 조회된 복화 정보를 기존 DATASET에 세팅
//-------------------------------------------------------------------------
scwin.copyBulkCmpstcrg = function (rowPosition) {
  if (ds_bulkCmpstcrg.getCellData(0, "returnYn") == 1) {
    ds_transList.setCellData(rowPosition, "returnYn", 1);
    ds_transList.setCellData(rowPosition, "routrpYn", 0);
  } else if (ds_bulkCmpstcrg.getCellData(0, "returnYn") == 0) {
    ds_transList.setCellData(rowPosition, "returnYn", 0);
  }

  //0427 ds_bulkCmpstcrg 단건조회라 1->0으로 변경
  // ds_transList.setCellData(rowPosition,"returnYnc", ds_bulkCmpstcrg.getCellData(1,"returnYn"));
  // ds_transList.setCellData(rowPosition,"maxAmt", ds_bulkCmpstcrg.getCellData(1,"maxAmt"));
  // ds_transList.setCellData(rowPosition,"minAmt", ds_bulkCmpstcrg.getCellData(1,"minAmt"));
  // ds_transList.setCellData(rowPosition,"adptAmt", ds_bulkCmpstcrg.getCellData(1,"adptAmt"));
  ds_transList.setCellData(rowPosition, "returnYnc", ds_bulkCmpstcrg.getCellData(0, "returnYn"));
  ds_transList.setCellData(rowPosition, "maxAmt", ds_bulkCmpstcrg.getCellData(0, "maxAmt"));
  ds_transList.setCellData(rowPosition, "minAmt", ds_bulkCmpstcrg.getCellData(0, "minAmt"));
  ds_transList.setCellData(rowPosition, "adptAmt", ds_bulkCmpstcrg.getCellData(0, "adptAmt"));
  scwin.setCmpstcrgMargin(rowPosition);
  ds_transList.setCellData(rowPosition, "scReg", "");
  ds_transList.setCellData(rowPosition, "scRegCd", "");
  ds_transList.setCellData(rowPosition, "scAmtRate", 0);
  ds_transList.setCellData(rowPosition, "scAmt", 0);
  ds_transList.setCellData(rowPosition, "cmpstcrgMargin", 0);
};

//-------------------------------------------------------------------------
// 복화 이익 계산
//-------------------------------------------------------------------------
scwin.setCmpstcrgMargin = function (rowPosition) {
  if (ds_transList.getCellData(rowPosition, "scAmt") != null && ds_transList.getCellData(rowPosition, "scAmt") != 0) {
    if (ds_transList.getCellData(rowPosition, "returnYnc") == 1) {
      ds_transList.setCellData(rowPosition, "cmpstcrgMargin", Number(ds_transList.getCellData(rowPosition, "minAmt")) + Number(ds_transList.getCellData(rowPosition, "scAmt")) - Number(ds_transList.getCellData(rowPosition, "adptAmt")));
    } else if (ds_transList.getCellData(rowPosition, "returnYnc") == 2 || ds_transList.getCellData(rowPosition, "routrpYn") == 1) {
      ds_transList.setCellData(rowPosition, "cmpstcrgMargin", ds_transList.getCellData(rowPosition, "scAmt"));
    }
  } else {
    ds_transList.setCellData(rowPosition, "cmpstcrgMargin", 0);
  }
};

//-------------------------------------------------------------------------
// 선택한 차량이 귀로 차량인지 여부를 판단하여 체크박스 값 표시
//-------------------------------------------------------------------------
scwin.checkReturnYn = async function () {
  await scwin.copyCoshipping(3);
};

//-------------------------------------------------------------------------
// 할인비율 계산
//-------------------------------------------------------------------------
scwin.calcScAmtRate = function (rowPosition, gubun) {
  let adptAmtSum = 0;
  let scAmt;
  let scAmtRate;
  if (ds_transList.getCellData(rowPosition, "adptAmt") != null && ds_transList.getCellData(rowPosition, "adptAmt") != 0) {
    if (ds_transList.getCellData(rowPosition, "coshippingNo") != "") {
      for (let i = 0; i < ds_transList.getRowCount(); i++) {
        if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(rowPosition, "coshippingNo")) {
          adptAmtSum = adptAmtSum + ds_transList.getCellData(i, "adptAmt");
        }
      }
    } else if (ds_transList.getCellData(rowPosition, "coshippingNoTemp") != 0) {
      for (let i = 0; i < ds_transList.getRowCount(); i++) {
        if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(rowPosition, "coshippingNoTemp")) {
          adptAmtSum = adptAmtSum + ds_transList.getCellData(i, "adptAmt");
        }
      }
    } else {
      adptAmtSum = ds_transList.getCellData(rowPosition, "adptAmt");
    }
    scAmt = Number(ds_transList.getCellData(rowPosition, "scAmt"));
    scAmtRate = Number(ds_transList.getCellData(rowPosition, "scAmtRate"));
    if (gubun == "scAmt") {
      ds_transList.setCellData(rowPosition, "scAmtRate", Math.round(scAmt / adptAmtSum * 1000) / 10);
    } else if (gubun == "scAmtRate") {
      ds_transList.setCellData(rowPosition, "scAmt", Math.round(adptAmtSum * (scAmtRate / 100)));
      scwin.setCmpstcrgMargin(rowPosition);
    }
  } else {
    ds_transList.setCellData(rowPosition, "scAmtRate", 0);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 검색조건 유효성 체크
  let ret = await $c.gus.cfValidate($p, [lc_srchLobranCd, ed_srchFromDate, ed_srchToDate]);
  if (!ret) {
    return;
  }
  let ret2 = await !$c.gus.cfIsAfterDate($p, ed_srchFromDate.getValue(), ed_srchToDate.getValue());
  if (ret2) {
    await $c.win.alert($p, "조회 청구일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_srchFromDate.focus();
    return;
  }
  let ret3 = (await $c.date.diffDate($p, ed_srchFromDate.getValue(), ed_srchToDate.getValue())) > 7;
  if (ret3) {
    let ret4 = await $c.win.confirm($p, "출발예정일 조회 기간이 7일 이상입니다. \n계속 진행하시겠습니까?");
    if (ret4) {
      $c.sbm.execute($p, sbm_retrieve); // 미배차조회
      return;
    }
  } else {
    $c.sbm.execute($p, sbm_retrieve); // 미배차조회
  }

  // TODO: $c.gus.cfShowDSWaitMsg 안먹어서 주석처리 
  // $c.gus.cfShowDSWaitMsg(gr_transList);
};

//-------------------------------------------------------------------------
// 조회조건에 따른 Grid 형태 수정
//-------------------------------------------------------------------------
scwin.f_setTPLGrid = function (flag) {
  let gubun = lc_schGubun.getValue(); // 조회조건이 배차인지 미배차인지 구분
  let gridColumnOrder = [];

  // 3자물류 체크
  if (flag) {
    gridColumnOrder = ["chk", "rmk", "dptWrkPlNm", "arvWrkPlNm", "tplClntNm", "tplClntTel", "clntMgntNo", "commNm", "qty", "grossWt", "trfAdptYn", "vehclShortCd", "eqKndCd", "eqNrmCd", "wrkEndDt", "wrkEndHh", "odrRmk", "tplArvNmCmpy", "coshippingNo", "coshippingPatternCd", "unitCd", "len", "wrkStDt", "wrkStHh", "coshippingNoTemp", "wrkIndictYn", "csctPrtYn", "routrpYn", "returnYn", "maxAmt", "minAmt", "adptAmt", "copCoClntNo", "copCoClntNm", "scReg", "scAmt", "scAmtRate", "cmpstcrgMargin", "minYn", "marvYn", "reqClntNm", "odrNo", "transWrkIndictNo", "vehclNo", "scRegCd", "commSeq", "mchtOdrKndCd", "openYn", "sellLodeptCd", "odrWrkEndDt", "odrWrkEndHh", "odrShtPrtYn", "urgentYn", "rsltsYn", "smQty", "arvDtl"];

    // 3자 물류 체크 시 그리드 형태 변경
    gr_transList.setColumnVisible("chk", true);
    gr_transList.setColumnVisible("rmk", false);
    gr_transList.setColumnVisible("dptWrkPlNm", true);
    gr_transList.setColumnVisible("arvWrkPlNm", true);
    gr_transList.setColumnVisible("tplClntNm", true);
    gr_transList.setColumnVisible("tplClntTel", true);
    gr_transList.setColumnVisible("clntMgntNo", true);
    gr_transList.setColumnVisible("commNm", true);
    gr_transList.setColumnVisible("qty", true);
    gr_transList.setColumnVisible("grossWt", true);
    gr_transList.setColumnVisible("trfAdptYn", true);
    gr_transList.setColumnVisible("vehclShortCd", true);
    gr_transList.setColumnVisible("eqKndCd", true);
    gr_transList.setColumnVisible("eqNrmCd", true);
    gr_transList.setColumnVisible("wrkEndDt", true);
    gr_transList.setColumnVisible("wrkEndHh", true);
    gr_transList.setColumnVisible("odrRmk", true);
    gr_transList.setColumnVisible("tplArvNmCmpy", true);
    gr_transList.setColumnVisible("coshippingNo", true);
    gr_transList.setColumnVisible("coshippingPatternCd", true);
    gr_transList.setColumnVisible("unitCd", true);
    gr_transList.setColumnVisible("len", true);
    gr_transList.setColumnVisible("wrkStDt", true);
    gr_transList.setColumnVisible("wrkStHh", true);
    gr_transList.setColumnVisible("coshippingNoTemp", true);
    gr_transList.setColumnVisible("wrkIndictYn", true);
    gr_transList.setColumnVisible("csctPrtYn", true);
    gr_transList.setColumnVisible("routrpYn", true);
    gr_transList.setColumnVisible("returnYn", true);
    gr_transList.setColumnVisible("maxAmt", true);
    gr_transList.setColumnVisible("minAmt", true);
    gr_transList.setColumnVisible("adptAmt", true);
    gr_transList.setColumnVisible("copCoClntNo", true);
    gr_transList.setColumnVisible("copCoClntNm", true);
    gr_transList.setColumnVisible("scReg", true);
    gr_transList.setColumnVisible("scAmt", true);
    gr_transList.setColumnVisible("scAmtRate", true);
    gr_transList.setColumnVisible("cmpstcrgMargin", true);
    gr_transList.setColumnVisible("minYn", true);
    gr_transList.setColumnVisible("marvYn", true);
    gr_transList.setColumnVisible("reqClntNm", true);
    gr_transList.setColumnVisible("odrNo", true);
    gr_transList.setColumnVisible("transWrkIndictNo", false);
    gr_transList.setColumnVisible("vehclNo", false);
    gr_transList.setColumnVisible("scRegCd", false);
    gr_transList.setColumnVisible("commSeq", false);
    gr_transList.setColumnVisible("mchtOdrKndCd", true);
    gr_transList.setColumnVisible("openYn", true);
    gr_transList.setColumnVisible("sellLodeptCd", false);
    gr_transList.setColumnVisible("odrWrkEndDt", true);
    gr_transList.setColumnVisible("odrWrkEndHh", true);
    gr_transList.setColumnVisible("odrShtPrtYn", true);
    gr_transList.setColumnVisible("urgentYn", true);
    gr_transList.setColumnVisible("rsltsYn", true);
    gr_transList.setColumnVisible("smQty", true);
    gr_transList.setColumnVisible("arvDtl", true);
    gr_transList.setColumnVisible("cbm", false);
    gr_transList.setColumnVisible("mstOdrNo", false);
    gr_transList.setColumnVisible("railroadAdptDstCd", false);
    gr_transList.setColumnVisible("regDtm", false);
    gr_transList.setColumnVisible("befCargoCd", false);
    gr_transList.setColumnVisible("takeMobile", false);
    gr_transList.setHeaderValue("column273", "고객요청도착");

    // 3자물류 체크 해제
  } else {
    gridColumnOrder = ["chk", "rmk", "reqClntNm", "dptWrkPlNm", "arvWrkPlNm", "wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh", "clntMgntNo", "tplArvNmCmpy", "transWrkIndictNo", "coshippingNo", "coshippingNoTemp", "wrkIndictYn", "csctPrtYn", "vehclNo", "routrpYn", "returnYn", "vehclShortCd", "maxAmt", "minAmt", "adptAmt", "scRegCd", "scReg", "scAmt", "scAmtRate", "cmpstcrgMargin", "copCoClntNo", "copCoClntNm", "eqKndCd", "eqNrmCd", "commNm", "qty", "grossWt", "len", "coshippingPatternCd", "unitCd", "minYn", "marvYn", "trfAdptYn", "odrNo", "commSeq", "mchtOdrKndCd", "tplClntNm", "tplClntTel", "odrRmk", "openYn", "sellLodeptCd", "odrWrkEndDt", "odrWrkEndHh", "odrShtPrtYn", "urgentYn", "rsltsYn", "reqClntNo", "smQty", "arvDtl"];

    // 3자 물류 체크해제 시 그리드 형태 변경
    gr_transList.setColumnVisible("chk", true);
    gr_transList.setColumnVisible("rmk", false);
    gr_transList.setColumnVisible("reqClntNm", true);
    gr_transList.setColumnVisible("dptWrkPlNm", true);
    gr_transList.setColumnVisible("arvWrkPlNm", true);
    gr_transList.setColumnVisible("wrkStDt", true);
    gr_transList.setColumnVisible("wrkStHh", true);
    gr_transList.setColumnVisible("wrkEndDt", true);
    gr_transList.setColumnVisible("wrkEndHh", true);
    gr_transList.setColumnVisible("clntMgntNo", true);
    gr_transList.setColumnVisible("tplArvNmCmpy", true);
    gr_transList.setColumnVisible("transWrkIndictNo", false);
    gr_transList.setColumnVisible("coshippingNo", true);
    gr_transList.setColumnVisible("coshippingNoTemp", true);
    gr_transList.setColumnVisible("wrkIndictYn", true);
    gr_transList.setColumnVisible("csctPrtYn", true);
    gr_transList.setColumnVisible("vehclNo", false);
    gr_transList.setColumnVisible("routrpYn", true);
    gr_transList.setColumnVisible("returnYn", true);
    gr_transList.setColumnVisible("vehclShortCd", true);
    gr_transList.setColumnVisible("maxAmt", true);
    gr_transList.setColumnVisible("minAmt", true);
    gr_transList.setColumnVisible("adptAmt", true);
    gr_transList.setColumnVisible("scRegCd", false);
    gr_transList.setColumnVisible("scReg", true);
    gr_transList.setColumnVisible("scAmt", true);
    gr_transList.setColumnVisible("scAmtRate", true);
    gr_transList.setColumnVisible("cmpstcrgMargin", true);
    gr_transList.setColumnVisible("copCoClntNo", true);
    gr_transList.setColumnVisible("copCoClntNm", true);
    gr_transList.setColumnVisible("eqKndCd", true);
    gr_transList.setColumnVisible("eqNrmCd", true);
    gr_transList.setColumnVisible("commNm", true);
    gr_transList.setColumnVisible("qty", true);
    gr_transList.setColumnVisible("grossWt", true);
    gr_transList.setColumnVisible("len", true);
    gr_transList.setColumnVisible("coshippingPatternCd", true);
    gr_transList.setColumnVisible("unitCd", true);
    gr_transList.setColumnVisible("minYn", true);
    gr_transList.setColumnVisible("marvYn", true);
    gr_transList.setColumnVisible("trfAdptYn", true);
    gr_transList.setColumnVisible("odrNo", true);
    gr_transList.setColumnVisible("commSeq", false);
    gr_transList.setColumnVisible("mchtOdrKndCd", true);
    gr_transList.setColumnVisible("tplClntNm", true);
    gr_transList.setColumnVisible("tplClntTel", true);
    gr_transList.setColumnVisible("odrRmk", true);
    gr_transList.setColumnVisible("openYn", true);
    gr_transList.setColumnVisible("sellLodeptCd", false);
    gr_transList.setColumnVisible("odrWrkEndDt", true);
    gr_transList.setColumnVisible("odrWrkEndHh", true);
    gr_transList.setColumnVisible("odrShtPrtYn", true);
    gr_transList.setColumnVisible("urgentYn", true);
    gr_transList.setColumnVisible("rsltsYn", true);
    gr_transList.setColumnVisible("reqClntNo", false);
    gr_transList.setColumnVisible("smQty", true);
    gr_transList.setColumnVisible("arvDtl", true);
    gr_transList.setColumnVisible("cbm", true);
    gr_transList.setColumnVisible("mstOdrNo", true);
    gr_transList.setColumnVisible("railroadAdptDstCd", true);
    gr_transList.setColumnVisible("regDtm", true);
    gr_transList.setColumnVisible("befCargoCd", true);
    gr_transList.setColumnVisible("takeMobile", true);
    gr_transList.setHeaderValue("column273", "오더도착예정");
  }
  if (gubun == "C") {
    gr_transList.setColumnVisible("odrShtPrtYn", false);
  } else {
    gr_transList.setColumnVisible("odrShtPrtYn", true);
  }

  // rowStatus가 C인 경우는 체크박스 readonly 처리
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (ds_transList.getRowStatus(i) == "C") {
      gr_transList.setCellReadOnly(i, "chk", true);
    } else {
      gr_transList.setCellReadOnly(i, "chk", false);
    }
  }

  // 각 조건에 맞는 그리드 칼럼 순서 셋팅
  gr_transList.setColumnOrder(gridColumnOrder);
};

//-------------------------------------------------------------------------
// 운송물량에 따른 Grid 형태 수정
//-------------------------------------------------------------------------
scwin.f_showGrid = function (param) {
  let gridColumnOrder = [];

  // view01
  if (param == "01") {
    gridColumnOrder = ["chk", "odrNo", "arvWrkPlNm", "wrkStDt", "wrkStHh", "qty", "grossWt", "vehclNo", "vehclShortCd", "copCoClntNo", "copCoClntNm", "eqKndCd", "eqNrmCd", "unitCd", "clntMgntNo", "rmk", "reqClntNm", "dptWrkPlNm", "tplArvNmCmpy", "wrkEndDt", "wrkEndHh", "transWrkIndictNo", "coshippingNo", "coshippingNoTemp", "wrkIndictYn", "csctPrtYn", "routrpYn", "returnYn", "urgentYn", "rsltsYn", "minYn", "marvYn", "cbm", "odrRmk", "maxAmt", "minAmt", "adptAmt", "scRegCd", "scReg", "scAmt", "scAmtRate", "cmpstcrgMargin", "commNm", "len", "coshippingPatternCd", "trfAdptYn", "mstOdrNo", "commSeq", "mchtOdrKndCd", "tplClntNm", "tplClntTel", "openYn", "sellLodeptCd", "odrWrkEndDt", "odrWrkEndHh", "odrShtPrtYn", "chkPool", "railroadAdptDstCd", "repClntNo", "regDtm", "befCargoCd", "befCargoNm", "wrkPathSeq", "wrkStpSeq", "arvZip", "dptZip", "smQty", "takeMobile", "arvDtl"];
    gr_transList.setColumnVisible("chk", true);
    gr_transList.setColumnVisible("odrNo", true);
    gr_transList.setColumnVisible("arvWrkPlNm", true);
    gr_transList.setColumnVisible("wrkStDt", true);
    gr_transList.setColumnVisible("wrkStHh", true);
    gr_transList.setColumnVisible("qty", true);
    gr_transList.setColumnVisible("grossWt", true);
    gr_transList.setColumnVisible("vehclNo", false);
    gr_transList.setColumnVisible("vehclShortCd", true);
    gr_transList.setColumnVisible("copCoClntNo", true);
    gr_transList.setColumnVisible("copCoClntNm", true);
    gr_transList.setColumnVisible("eqKndCd", true);
    gr_transList.setColumnVisible("eqNrmCd", true);
    gr_transList.setColumnVisible("unitCd", true);
    gr_transList.setColumnVisible("clntMgntNo", true);
    gr_transList.setColumnVisible("rmk", false);
    gr_transList.setColumnVisible("reqClntNm", true);
    gr_transList.setColumnVisible("dptWrkPlNm", true);
    gr_transList.setColumnVisible("tplArvNmCmpy", true);
    gr_transList.setColumnVisible("wrkEndDt", true);
    gr_transList.setColumnVisible("wrkEndHh", true);
    gr_transList.setColumnVisible("transWrkIndictNo", false);
    gr_transList.setColumnVisible("coshippingNo", true);
    gr_transList.setColumnVisible("coshippingNoTemp", true);
    gr_transList.setColumnVisible("wrkIndictYn", true);
    gr_transList.setColumnVisible("csctPrtYn", true);
    gr_transList.setColumnVisible("routrpYn", true);
    gr_transList.setColumnVisible("returnYn", false);
    gr_transList.setColumnVisible("urgentYn", true);
    gr_transList.setColumnVisible("rsltsYn", true);
    gr_transList.setColumnVisible("minYn", true);
    gr_transList.setColumnVisible("marvYn", true);
    gr_transList.setColumnVisible("cbm", true);
    gr_transList.setColumnVisible("odrRmk", true);
    gr_transList.setColumnVisible("maxAmt", true);
    gr_transList.setColumnVisible("minAmt", true);
    gr_transList.setColumnVisible("adptAmt", true);
    gr_transList.setColumnVisible("scRegCd", false);
    gr_transList.setColumnVisible("scReg", true);
    gr_transList.setColumnVisible("scAmt", true);
    gr_transList.setColumnVisible("scAmtRate", true);
    gr_transList.setColumnVisible("cmpstcrgMargin", true);
    gr_transList.setColumnVisible("commNm", true);
    gr_transList.setColumnVisible("len", true);
    gr_transList.setColumnVisible("coshippingPatternCd", true);
    gr_transList.setColumnVisible("trfAdptYn", true);
    gr_transList.setColumnVisible("mstOdrNo", true);
    gr_transList.setColumnVisible("commSeq", false);
    gr_transList.setColumnVisible("mchtOdrKndCd", true);
    gr_transList.setColumnVisible("tplClntNm", true);
    gr_transList.setColumnVisible("tplClntTel", true);
    gr_transList.setColumnVisible("openYn", true);
    gr_transList.setColumnVisible("sellLodeptCd", false);
    gr_transList.setColumnVisible("odrWrkEndDt", true);
    gr_transList.setColumnVisible("odrWrkEndHh", true);
    gr_transList.setColumnVisible("odrShtPrtYn", true);
    gr_transList.setColumnVisible("chkPool", false);
    gr_transList.setColumnVisible("railroadAdptDstCd", true);
    gr_transList.setColumnVisible("repClntNo", false);
    gr_transList.setColumnVisible("regDtm", true);
    gr_transList.setColumnVisible("befCargoCd", true);
    gr_transList.setColumnVisible("befCargoNm", false);
    gr_transList.setColumnVisible("wrkPathSeq", false);
    gr_transList.setColumnVisible("wrkStpSeq", false);
    gr_transList.setColumnVisible("arvZip", false);
    gr_transList.setColumnVisible("dptZip", false);
    gr_transList.setColumnVisible("smQty", true);
    gr_transList.setColumnVisible("takeMobile", true);
    gr_transList.setColumnVisible("arvDtl", true);

    // view02
  } else if (param == "02") {
    gridColumnOrder = ["chk", "clntMgntNo", "arvWrkPlNm", "wrkEndDt", "wrkEndHh", "coshippingNo", "commNm", "qty", "grossWt", "vehclShortCd", "copCoClntNo", "copCoClntNm", "eqKndCd", "eqNrmCd", "unitCd", "trfAdptYn", "tplClntNm", "tplClntTel", "rmk", "odrRmk", "arvDtl", "odrNo", "tplArvNmCmpy", "dptWrkPlNm", "wrkStDt", "wrkStHh", "vehclNo", "reqClntNm", "transWrkIndictNo", "coshippingNoTemp", "wrkIndictYn", "csctPrtYn", "routrpYn", "returnYn", "urgentYn", "rsltsYn", "minYn", "marvYn", "cbm", "maxAmt", "minAmt", "adptAmt", "scRegCd", "scReg", "scAmt", "scAmtRate", "cmpstcrgMargin", "len", "coshippingPatternCd", "mstOdrNo", "commSeq", "mchtOdrKndCd", "openYn", "sellLodeptCd", "odrWrkEndDt", "odrWrkEndHh", "odrShtPrtYn", "chkPool", "railroadAdptDstCd", "repClntNo", "regDtm", "befCargoCd", "befCargoNm", "wrkPathSeq", "wrkStpSeq", "arvZip", "dptZip", "smQty", "takeMobile"];
    gr_transList.setColumnVisible("chk", true);
    gr_transList.setColumnVisible("clntMgntNo", true);
    gr_transList.setColumnVisible("arvWrkPlNm", true);
    gr_transList.setColumnVisible("wrkEndDt", true);
    gr_transList.setColumnVisible("wrkEndHh", true);
    gr_transList.setColumnVisible("coshippingNo", true);
    gr_transList.setColumnVisible("commNm", true);
    gr_transList.setColumnVisible("qty", true);
    gr_transList.setColumnVisible("grossWt", true);
    gr_transList.setColumnVisible("vehclShortCd", true);
    gr_transList.setColumnVisible("copCoClntNo", true);
    gr_transList.setColumnVisible("copCoClntNm", true);
    gr_transList.setColumnVisible("eqKndCd", true);
    gr_transList.setColumnVisible("eqNrmCd", true);
    gr_transList.setColumnVisible("unitCd", true);
    gr_transList.setColumnVisible("trfAdptYn", true);
    gr_transList.setColumnVisible("tplClntNm", true);
    gr_transList.setColumnVisible("tplClntTel", true);
    gr_transList.setColumnVisible("rmk", false);
    gr_transList.setColumnVisible("odrRmk", true);
    gr_transList.setColumnVisible("arvDtl", true);
    gr_transList.setColumnVisible("odrNo", true);
    gr_transList.setColumnVisible("tplArvNmCmpy", true);
    gr_transList.setColumnVisible("dptWrkPlNm", true);
    gr_transList.setColumnVisible("wrkStDt", true);
    gr_transList.setColumnVisible("wrkStHh", true);
    gr_transList.setColumnVisible("vehclNo", false);
    gr_transList.setColumnVisible("reqClntNm", true);
    gr_transList.setColumnVisible("transWrkIndictNo", false);
    gr_transList.setColumnVisible("coshippingNoTemp", true);
    gr_transList.setColumnVisible("wrkIndictYn", true);
    gr_transList.setColumnVisible("csctPrtYn", true);
    gr_transList.setColumnVisible("routrpYn", true);
    gr_transList.setColumnVisible("returnYn", false);
    gr_transList.setColumnVisible("urgentYn", true);
    gr_transList.setColumnVisible("rsltsYn", true);
    gr_transList.setColumnVisible("minYn", true);
    gr_transList.setColumnVisible("marvYn", true);
    gr_transList.setColumnVisible("cbm", true);
    gr_transList.setColumnVisible("maxAmt", true);
    gr_transList.setColumnVisible("minAmt", true);
    gr_transList.setColumnVisible("adptAmt", true);
    gr_transList.setColumnVisible("scRegCd", false);
    gr_transList.setColumnVisible("scReg", true);
    gr_transList.setColumnVisible("scAmt", true);
    gr_transList.setColumnVisible("scAmtRate", true);
    gr_transList.setColumnVisible("cmpstcrgMargin", true);
    gr_transList.setColumnVisible("len", true);
    gr_transList.setColumnVisible("coshippingPatternCd", true);
    gr_transList.setColumnVisible("mstOdrNo", true);
    gr_transList.setColumnVisible("commSeq", false);
    gr_transList.setColumnVisible("mchtOdrKndCd", true);
    gr_transList.setColumnVisible("openYn", true);
    gr_transList.setColumnVisible("sellLodeptCd", false);
    gr_transList.setColumnVisible("odrWrkEndDt", true);
    gr_transList.setColumnVisible("odrWrkEndHh", true);
    gr_transList.setColumnVisible("odrShtPrtYn", true);
    gr_transList.setColumnVisible("chkPool", false);
    gr_transList.setColumnVisible("railroadAdptDstCd", true);
    gr_transList.setColumnVisible("repClntNo", false);
    gr_transList.setColumnVisible("regDtm", true);
    gr_transList.setColumnVisible("befCargoCd", true);
    gr_transList.setColumnVisible("befCargoNm", false);
    gr_transList.setColumnVisible("wrkPathSeq", false);
    gr_transList.setColumnVisible("wrkStpSeq", false);
    gr_transList.setColumnVisible("arvZip", false);
    gr_transList.setColumnVisible("dptZip", false);
    gr_transList.setColumnVisible("smQty", true);
    gr_transList.setColumnVisible("takeMobile", true);

    // 기본
  } else {
    gridColumnOrder = ["chk", "odrNo", "clntMgntNo", "rmk", "reqClntNm", "dptWrkPlNm", "arvWrkPlNm", "tplArvNmCmpy", "wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh", "transWrkIndictNo", "coshippingNo", "coshippingNoTemp", "wrkIndictYn", "csctPrtYn", "vehclNo", "routrpYn", "returnYn", "urgentYn", "rsltsYn", "minYn", "marvYn", "qty", "grossWt", "cbm", "vehclShortCd", "copCoClntNo", "copCoClntNm", "eqKndCd", "eqNrmCd", "odrRmk", "maxAmt", "minAmt", "adptAmt", "scRegCd", "scReg", "scAmt", "scAmtRate", "cmpstcrgMargin", "commNm", "len", "coshippingPatternCd", "unitCd", "trfAdptYn", "mstOdrNo", "commSeq", "mchtOdrKndCd", "tplClntNm", "tplClntTel", "openYn", "sellLodeptCd", "odrWrkEndDt", "odrWrkEndHh", "odrShtPrtYn", "chkPool", "railroadAdptDstCd", "repClntNo", "regDtm", "befCargoCd", "befCargoNm", "wrkPathSeq", "wrkStpSeq", "arvZip", "dptZip", "smQty", "takeMobile", "arvDtl"];
    gr_transList.setColumnVisible("chk", true);
    gr_transList.setColumnVisible("odrNo", true);
    gr_transList.setColumnVisible("clntMgntNo", true);
    gr_transList.setColumnVisible("rmk", false);
    gr_transList.setColumnVisible("reqClntNm", true);
    gr_transList.setColumnVisible("dptWrkPlNm", true);
    gr_transList.setColumnVisible("arvWrkPlNm", true);
    gr_transList.setColumnVisible("tplArvNmCmpy", true);
    gr_transList.setColumnVisible("wrkStDt", true);
    gr_transList.setColumnVisible("wrkStHh", true);
    gr_transList.setColumnVisible("wrkEndDt", true);
    gr_transList.setColumnVisible("wrkEndHh", true);
    gr_transList.setColumnVisible("transWrkIndictNo", false);
    gr_transList.setColumnVisible("coshippingNo", true);
    gr_transList.setColumnVisible("coshippingNoTemp", true);
    gr_transList.setColumnVisible("wrkIndictYn", true);
    gr_transList.setColumnVisible("csctPrtYn", true);
    gr_transList.setColumnVisible("vehclNo", false);
    gr_transList.setColumnVisible("routrpYn", true);
    gr_transList.setColumnVisible("returnYn", false);
    gr_transList.setColumnVisible("urgentYn", true);
    gr_transList.setColumnVisible("rsltsYn", true);
    gr_transList.setColumnVisible("minYn", true);
    gr_transList.setColumnVisible("marvYn", true);
    gr_transList.setColumnVisible("qty", true);
    gr_transList.setColumnVisible("grossWt", true);
    gr_transList.setColumnVisible("cbm", true);
    gr_transList.setColumnVisible("vehclShortCd", true);
    gr_transList.setColumnVisible("copCoClntNo", true);
    gr_transList.setColumnVisible("copCoClntNm", true);
    gr_transList.setColumnVisible("eqKndCd", true);
    gr_transList.setColumnVisible("eqNrmCd", true);
    gr_transList.setColumnVisible("odrRmk", true);
    gr_transList.setColumnVisible("maxAmt", true);
    gr_transList.setColumnVisible("minAmt", true);
    gr_transList.setColumnVisible("adptAmt", true);
    gr_transList.setColumnVisible("scRegCd", false);
    gr_transList.setColumnVisible("scReg", true);
    gr_transList.setColumnVisible("scAmt", true);
    gr_transList.setColumnVisible("scAmtRate", true);
    gr_transList.setColumnVisible("cmpstcrgMargin", true);
    gr_transList.setColumnVisible("commNm", true);
    gr_transList.setColumnVisible("len", true);
    gr_transList.setColumnVisible("coshippingPatternCd", true);
    gr_transList.setColumnVisible("unitCd", true);
    gr_transList.setColumnVisible("trfAdptYn", true);
    gr_transList.setColumnVisible("mstOdrNo", true);
    gr_transList.setColumnVisible("commSeq", false);
    gr_transList.setColumnVisible("mchtOdrKndCd", true);
    gr_transList.setColumnVisible("tplClntNm", true);
    gr_transList.setColumnVisible("tplClntTel", true);
    gr_transList.setColumnVisible("openYn", true);
    gr_transList.setColumnVisible("sellLodeptCd", false);
    gr_transList.setColumnVisible("odrWrkEndDt", true);
    gr_transList.setColumnVisible("odrWrkEndHh", true);
    gr_transList.setColumnVisible("odrShtPrtYn", true);
    gr_transList.setColumnVisible("chkPool", false);
    gr_transList.setColumnVisible("railroadAdptDstCd", true);
    gr_transList.setColumnVisible("repClntNo", false);
    gr_transList.setColumnVisible("regDtm", true);
    gr_transList.setColumnVisible("befCargoCd", true);
    gr_transList.setColumnVisible("befCargoNm", false);
    gr_transList.setColumnVisible("wrkPathSeq", false);
    gr_transList.setColumnVisible("wrkStpSeq", false);
    gr_transList.setColumnVisible("arvZip", false);
    gr_transList.setColumnVisible("dptZip", false);
    gr_transList.setColumnVisible("smQty", true);
    gr_transList.setColumnVisible("takeMobile", true);
    gr_transList.setColumnVisible("arvDtl", true);
  }

  // rowStatus가 C인 경우는 체크박스 readonly 처리
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (ds_transList.getRowStatus(i) == "C") {
      gr_transList.setCellReadOnly(i, "chk", true);
    } else {
      gr_transList.setCellReadOnly(i, "chk", false);
    }
  }

  // 각 조건에 맞는 그리드 칼럼 순서 셋팅
  gr_transList.setColumnOrder(gridColumnOrder);
  // 가로 스크롤 초기화
  gr_transList.setScrollLeft(0);
};

//-------------------------------------------------------------------------
// 조회 - 성공
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  ds_transList_ori.setJSON(ds_transList.getAllJSON(), true);
  ds_transList.initRowStatus();
  // 그리드 셋팅
  gr_transList.setColumnStyle("odrNo", "text-decoration", "underline");
  gr_transList.setColumnStyle("odrNo", "cursor", "hand");
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    let cellColorColumnId = ["odrNo", "clntMgntNo", "reqClntNm", "dptWrkPlNm", "arvWrkPlNm", "tplArvNmCmpy", "wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh", "transWrkIndictNo", "coshippingNo", "coshippingNoTemp", "wrkIndictYn", "csctPrtYn", "vehclNo", "minYn", "marvYn", "qty", "grossWt", "cbm", "vehclShortCd", "copCoClntNo", "copCoClntNm", "eqKndCd", "eqNrmCd", "odrRmk", "maxAmt", "minAmt", "adptAmt", "scRegCd", "scReg", "scAmt", "scAmtRate", "cmpstcrgMargin", "commNm", "len", "coshippingPatternCd", "unitCd", "trfAdptYn", "mchtOdrKndCd", "tplClntNm", "tplClntTel", "sellLodeptCd", "odrWrkEndDt", "odrWrkEndHh", "odrShtPrtYn", "arvDtl"];
    let color = "";
    if (ds_transList.getCellData(i, "odrShtPrtYn") == "1") {
      color = "Red";
    } else if (ds_transList.getCellData(i, "odrShtPrtYn") == "2") {
      color = "Blue";
    } else {
      color = "Black";
    }
    for (let j = 0; j < cellColorColumnId.length; j++) {
      gr_transList.setCellColor(i, cellColorColumnId[j], color);
    }
  }
  scwin.cntCoshipping = 0; // 합적카운트 초기화

  // 버튼 및 그리드  제어
  if (lc_schGubun.getValue() == "C") {
    // 배차시
    scwin.schGubun = false; // 배차 조회구분 설정

    // 비활성화
    $c.gus.cfDisableObjects($p, [btn_allocate_car, btn_save_allocate, btn_Open, ed_divisionVehcl]);
    if (ds_transList.getRowCount() > 0) {
      $c.gus.cfEnableObjects($p, [btn_cancel]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_cancel]);
    }
    gr_transList.setColumnVisible("transWrkIndictNo", true);
    gr_transList.setColumnVisible("routrpYn", true);
    gr_transList.setColumnReadOnly("routrpYn", true);
    gr_transList.setColumnReadOnly('wrkIndictYn', true);
    gr_transList.setColumnReadOnly('vehclShortCd', true);
    gr_transList.setColumnReadOnly('copCoClntNo', true);
    gr_transList.setColumnReadOnly('eqKndCd', true);
    gr_transList.setColumnReadOnly('eqNrmCd', true);
    gr_transList.setColumnReadOnly('qty', true);
    gr_transList.setColumnReadOnly('grossWt', true);
    gr_transList.setColumnReadOnly('len', true);
    gr_transList.setColumnReadOnly('coshippingPatternCd', true);
    gr_transList.setColumnReadOnly('unitCd', true);
    gr_transList.setColumnReadOnly('minYn', true);
    gr_transList.setColumnReadOnly('marvYn', true);
    gr_transList.setColumnReadOnly('trfAdptYn', true);
    gr_transList.setColumnReadOnly('scAmt', true);
    gr_transList.setColumnReadOnly('scAmtRate', true);
    gr_transList.setColumnReadOnly('cmpstcrgMargin', true);
    gr_transList.setColumnReadOnly('returnYn', true);
    gr_transList.setColumnVisible('odrShtPrtYn', false);
    gr_transList.setColumnReadOnly('urgentYn', true);
    gr_transList.setColumnReadOnly('rsltsYn', true);
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      //0428 설명추가, 할인금액이 있고, 조회조건 금액계산이 체크 인 경우 
      if (ds_transList.getCellData(i, "scAmt") != null && ds_transList.getCellData(i, "scAmt") != 0 && ds_srchCond.get("functionYn") == "1") {
        if (ds_transList.getCellData(i, "returnYnc") == "1") {
          ds_transList.setCellData(i, "cmpstcrgMargin", Number(ds_transList.getCellData(i, "minAmt")) + Number(ds_transList.getCellData(i, "scAmt")) - Number(ds_transList.getCellData(i, "adptAmt")));
        } else {
          ds_transList.setCellData(i, "cmpstcrgMargin", ds_transList.getCellData(i, "scAmt"));
        }
        scwin.calcScAmtRate(i, "scAmt");
      }
    }
    ds_transList.modifyAllStatus("R");
  } else {
    // 미배차
    $c.gus.cfDisableObjects($p, [btn_cancel]);
    if (ds_transList.getRowCount() > 0) {
      scwin.schGubun = true; // 미배차 조회구분 설정
      $c.gus.cfEnableObjects($p, [btn_allocate_car, btn_save_allocate, btn_Open, ed_divisionVehcl]);
    } else {
      scwin.schGubun = false; // 조회된 오더가 없으면 배차 조회구분으로 설정
      $c.gus.cfDisableObjects($p, [btn_allocate_car, btn_save_allocate, btn_Open, ed_divisionVehcl]);
    }
    gr_transList.setColumnVisible("transWrkIndictNo", false);
    gr_transList.setColumnVisible("routrpYn", true);
    gr_transList.setColumnReadOnly('wrkIndictYn', true);
    gr_transList.setColumnReadOnly("routrpYn", false);
    gr_transList.setColumnReadOnly('vehclShortCd', false);
    gr_transList.setColumnReadOnly('copCoClntNo', false);
    gr_transList.setColumnReadOnly('eqKndCd', false);
    gr_transList.setColumnReadOnly('eqNrmCd', false);
    gr_transList.setColumnReadOnly('qty', false);
    gr_transList.setColumnReadOnly('grossWt', false);
    gr_transList.setColumnReadOnly('len', false);
    gr_transList.setColumnReadOnly('coshippingPatternCd', false);
    gr_transList.setColumnReadOnly('unitCd', false);
    gr_transList.setColumnReadOnly('minYn', false);
    gr_transList.setColumnReadOnly('marvYn', false);
    gr_transList.setColumnReadOnly('scAmt', false);
    gr_transList.setColumnReadOnly('scAmtRate', false);
    gr_transList.setColumnReadOnly('trfAdptYn', false);
    gr_transList.setColumnReadOnly('returnYn', false);
    gr_transList.setColumnVisible('odrShtPrtYn', true);
    gr_transList.setColumnReadOnly('urgentYn', false);
    gr_transList.setColumnReadOnly('rsltsYn', false);
    for (let j = 0; j < ds_transList.getRowCount(); j++) {
      if (ds_transList.getCellData(j, "chkMobile") == "Y") {
        scwin.f_openCommonPopUp(6, null, null, 'T', 'T');
        break;
      }
    }
  }
  let rowCnt = ds_transList.getRowCount();
  spn_totRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  if (lc_schGubun.getValue() != "C") {
    scwin.f_setSteelCopCo();
  }
  if (scwin.odrNo != "" && scwin.eqClntNo != "") {
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      ds_transList.setCellData(i, "copCoClntNo", scwin.eqClntNo);
      ds_transList.setCellData(i, "eqNrmCd", scwin.eqNrmCd);
      ds_transList.setCellData(i, "eqKndCd", scwin.eqKndCd);
    }
  }
  scwin.syncRetrieveRowStatusByCopCoClntNo();
  if (rowCnt > 0) {
    scwin.rowPosition = 0;
    //0428 조회 후 포커스 바로 안가서 딜레이 줌
    setTimeout(function () {
      // ds_transList.setRowPosition(0);
      gr_transList.setFocusedCell(0, 1, false);
    }, 500);
  } else {
    scwin.rowPosition = null;
  }
};

//-------------------------------------------------------------------------
// 그리드 협력업체 셋팅
//-------------------------------------------------------------------------
scwin.f_setSteelCopCo = function () {
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (ds_transList.getCellData(i, "repClntNo") == "000012") {
      ds_transList.setCellData(i, "copCoClntNo", ds_transList.getCellData(i, "shipToCd"));
      ds_transList.setCellData(i, "copCoClntNm", ds_transList.getCellData(i, "shipTo"));
    }
  }
};

//-------------------------------------------------------------------------
// 조회 - 실패
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submiterror = function (e) {
  console.log("[sbm_retrieve] error: ", e);
};

//-------------------------------------------------------------------------
// 중량 계산
//-------------------------------------------------------------------------
scwin.f_getQtyWtCurculate = function () {
  let retVal = new Object();
  let odrNo = ds_transList.getCellData(scwin.rowPosition, "odrNo");
  retVal.qty = 0;
  retVal.grossWt = 0;
  retVal.orgRow = 0;
  retVal.qtySum = 0;
  retVal.grossWtSum = 0;
  retVal.editQty = 0;
  retVal.editGrossWt = 0;
  retVal.err = 0;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (odrNo == ds_transList.getCellData(i, "odrNo") && ds_transList.getRowStatus(i) != "C") {
      //원본 수량
      retVal.qty = ds_transList.getCellData(i, "qty");

      //원본 중량
      retVal.grossWt = ds_transList.getCellData(i, "grossWt");

      //원본 row
      retVal.orgRow = i;
    } else if (odrNo == ds_transList.getCellData(i, "odrNo") && ds_transList.getRowStatus(i) == "C") {
      //원본데이터 외의 수량합.
      retVal.qtySum = retVal.qtySum + ds_transList.getCellData(i, "qty");

      //원본데이터 외의 중량합. 
      retVal.grossWtSum = retVal.grossWtSum + ds_transList.getCellData(i, "grossWt");
    }
  }

  //수정될 수량
  retVal.editQty = retVal.qty - retVal.qtySum;

  //수정될 중량
  retVal.editGrossWt = retVal.grossWt - retVal.grossWtSum;
  if (retVal.editQty < 0) {
    retVal.err = 1; //수량오버
  } else if (retVal.editGrossWt < 0) {
    retVal.err = 2; //중량오버
  }
  return retVal;
};

//-------------------------------------------------------------------------
// copy record
//-------------------------------------------------------------------------
scwin.f_copyRecord = function (orgDs, orgRow, tgDs, tgRow) {
  for (var i = 0; i < orgDs.getColumnCount(); i++) {
    tgDs.setCellData(tgRow, tgDs.getColumnID(i), orgDs.getCellData(orgRow, orgDs.getColumnID(i)));
  }
};
scwin.divisionOriginalRowSnapshots = scwin.divisionOriginalRowSnapshots || {};
scwin.getDivisionSnapshotKey = function (odrNo, rowIndex) {
  if (!$c.util.isEmpty($p, odrNo) && odrNo.toString().trim() != "") {
    return odrNo.toString();
  }
  return "ROW_" + rowIndex;
};
scwin.getTransListRowSnapshot = function (rowIndex) {
  const snapshot = {
    rowStatus: ds_transList.getRowStatus(rowIndex),
    rowData: {}
  };
  for (let i = 0; i < ds_transList.getColumnCount(); i++) {
    const colId = ds_transList.getColumnID(i);
    snapshot.rowData[colId] = ds_transList.getCellData(rowIndex, colId);
  }
  return snapshot;
};
scwin.saveDivisionOriginalRowSnapshot = function (rowIndex) {
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return;
  }
  const odrNo = ds_transList.getCellData(rowIndex, "odrNo");
  const key = scwin.getDivisionSnapshotKey(odrNo, rowIndex);
  scwin.divisionOriginalRowSnapshots[key] = scwin.getTransListRowSnapshot(rowIndex);
};
scwin.findDivisionOriginalRowIndex = function (odrNo) {
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (ds_transList.getCellData(i, "odrNo") == odrNo && ds_transList.getRowStatus(i) != "C") {
      return i;
    }
  }
  return -1;
};
scwin.restoreDivisionOriginalRowSnapshot = function (odrNo) {
  const key = scwin.getDivisionSnapshotKey(odrNo, "");
  const snapshot = scwin.divisionOriginalRowSnapshots[key];
  const rowIndex = scwin.findDivisionOriginalRowIndex(odrNo);
  if ($c.util.isEmpty($p, snapshot) || rowIndex < 0) {
    return false;
  }
  for (let colId in snapshot.rowData) {
    ds_transList.setCellData(rowIndex, colId, snapshot.rowData[colId]);
  }
  ds_transList.modifyRowStatus(rowIndex, snapshot.rowStatus);
  delete scwin.divisionOriginalRowSnapshots[key];
  return true;
};

//-------------------------------------------------------------------------
// check division
//-------------------------------------------------------------------------
scwin.f_chkDivision = function (odrNo) {
  return;
};

//-------------------------------------------------------------------------
// 오더SHEET 대상 row
//-------------------------------------------------------------------------
scwin.f_getOdrSheetRowPosition = function () {
  if (ds_transList.getRowCount() < 1) {
    return -1;
  }
  if (!$c.util.isEmpty($p, scwin.rowPosition) && scwin.rowPosition >= 0 && scwin.rowPosition < ds_transList.getRowCount()) {
    return scwin.rowPosition;
  }
  return 0;
};
scwin.syncTransListRowPosition = function (rowIndex) {
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return false;
  }
  scwin.rowPosition = rowIndex;
  ds_transList.setRowPosition(rowIndex);
  return true;
};
scwin.normalizeTransListCellValue = function (value) {
  if (value == null) {
    return "";
  }
  return value.toString();
};
scwin.getTransListColumnDataType = function (colId) {
  const columnInfo = ds_transList.getColumnInfo(colId);
  if ($c.util.isEmpty($p, columnInfo) || $c.util.isEmpty($p, columnInfo.dataType)) {
    return "text";
  }
  return columnInfo.dataType;
};
scwin.normalizeTransListChkValue = function (value) {
  if (value === true || value === 1) {
    return "1";
  }
  if (value == null) {
    return "0";
  }
  const stringValue = value.toString().toUpperCase();
  if (stringValue == "1" || stringValue == "TRUE" || stringValue == "Y") {
    return "1";
  }
  return "0";
};
scwin.getTransListChkValue = function (rowIndex) {
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return "0";
  }
  return scwin.normalizeTransListChkValue(ds_transList.getCellData(rowIndex, "chk"));
};
scwin.isTransListChkChecked = function (rowIndex) {
  return scwin.getTransListChkValue(rowIndex) == "1";
};
scwin.normalizeTransListColumnValue = function (colId, value) {
  if (colId == "chk") {
    return scwin.normalizeTransListChkValue(value);
  }
  const dataType = scwin.getTransListColumnDataType(colId);
  if (value == null) {
    return dataType == "text" ? "" : value;
  }
  if (dataType == "text") {
    return value.toString();
  }
  if (dataType == "number" || dataType == "float") {
    if (value === "") {
      return "";
    }
    return Number(value);
  }
  return value;
};
scwin.setTransListCellData = function (rowIndex, colId, value) {
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return false;
  }
  const normalizedValue = scwin.normalizeTransListColumnValue(colId, value);
  const currentValue = scwin.normalizeTransListColumnValue(colId, ds_transList.getCellData(rowIndex, colId));
  if (currentValue === normalizedValue) {
    return false;
  }
  ds_transList.setCellData(rowIndex, colId, normalizedValue);
  return true;
};
scwin.setTransListRowData = function (rowIndex, rowData) {
  scwin.transYn = "Y"; //0423
  let isChanged = false;
  for (let colId in rowData) {
    if (scwin.setTransListCellData(rowIndex, colId, rowData[colId])) {
      isChanged = true;
    }
  }
  return isChanged;
};
scwin.getTransListOriginalCellValue = function (rowIndex, colId, defaultValue) {
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return scwin.normalizeTransListColumnValue(colId, defaultValue);
  }
  const originalValue = ds_transList.getOriginalCellData(rowIndex, colId);
  if (originalValue == null || originalValue === "") {
    return scwin.normalizeTransListColumnValue(colId, defaultValue);
  }
  return scwin.normalizeTransListColumnValue(colId, originalValue);
};
scwin.resetTransListChkValue = function (rowIndex) {
  return scwin.setTransListChkValue(rowIndex, scwin.getTransListOriginalCellValue(rowIndex, "chk", "0"));
};
scwin.setTransListChkValue = function (rowIndex, value) {
  return scwin.setTransListCellData(rowIndex, "chk", scwin.normalizeTransListChkValue(value));
};
scwin.transListHiddenDebugColumns = {
  transWrkIndictNo: true,
  vehclNo: true,
  eqCd: true,
  returnYn: true,
  returnYnc: true,
  scRegCd: true,
  scReg: true,
  sellLodeptCd: true,
  repClntNo: true,
  befCargoNm: true,
  wrkPathSeq: true,
  wrkStpSeq: true,
  arvZip: true,
  dptZip: true,
  reqClntNo: true,
  bulkVehclBpYn: true,
  mbssysVehclYn: true,
  maxAmt: true,
  minAmt: true,
  adptAmt: true,
  scAmt: true,
  scAmtRate: true,
  cmpstcrgMargin: true,
  copyOdrNo: true
};
scwin.getTransListRowDiffColumns = function (rowIndex) {
  const diffColumns = [];
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return diffColumns;
  }
  for (let i = 0; i < ds_transList.getColumnCount(); i++) {
    const colId = ds_transList.getColumnID(i);
    const currentValue = scwin.normalizeTransListColumnValue(colId, ds_transList.getCellData(rowIndex, colId));
    const originalValue = scwin.normalizeTransListColumnValue(colId, ds_transList.getOriginalCellData(rowIndex, colId));
    if (currentValue != originalValue) {
      diffColumns.push({
        colId: colId,
        currentValue: currentValue,
        originalValue: originalValue
      });
    }
  }
  return diffColumns;
};
scwin.getTransListRawDiffColumns = function (rowIndex) {
  const diffColumns = [];
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return diffColumns;
  }
  for (let i = 0; i < ds_transList.getColumnCount(); i++) {
    const colId = ds_transList.getColumnID(i);
    const currentValue = ds_transList.getCellData(rowIndex, colId);
    const originalValue = ds_transList.getOriginalCellData(rowIndex, colId);
    if (currentValue !== originalValue) {
      diffColumns.push({
        colId: colId,
        currentValue: currentValue,
        currentType: typeof currentValue,
        originalValue: originalValue,
        originalType: typeof originalValue
      });
    }
  }
  return diffColumns;
};
scwin.getTransListHiddenDiffColumns = function (rowIndex) {
  const diffColumns = scwin.getTransListRowDiffColumns(rowIndex);
  return diffColumns.filter(function (diffColumn) {
    return scwin.transListHiddenDebugColumns[diffColumn.colId] === true;
  });
};
scwin.logTransListDirtyColumns = function (rowIndex, reason) {
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return;
  }
  console.warn("[tn_304_02_01b logTransListDirtyColumns]", {
    reason: reason,
    rowIndex: rowIndex,
    odrNo: ds_transList.getCellData(rowIndex, "odrNo"),
    rowStatus: ds_transList.getRowStatus(rowIndex),
    hiddenDiffColumns: scwin.getTransListHiddenDiffColumns(rowIndex),
    diffColumns: scwin.getTransListRowDiffColumns(rowIndex),
    rawDiffColumns: scwin.getTransListRawDiffColumns(rowIndex)
  });
};
scwin.scheduleLogTransListDirtyColumns = function (rowIndex, reason) {
  $c.util.setTimeout($p, function () {
    scwin.logTransListDirtyColumns(rowIndex, reason);
  }, {
    delay: 0,
    key: "tn_304_02_01b_logTransListDirtyColumns_" + rowIndex + "_" + reason
  });
};
scwin.normalizeTransListRowStatus = function (rowIndex) {
  if (rowIndex == null || rowIndex < 0 || rowIndex >= ds_transList.getRowCount()) {
    return false;
  }
  if (ds_transList.getRowStatus(rowIndex) != "U") {
    return false;
  }
  const diffColumns = scwin.getTransListRowDiffColumns(rowIndex);
  if (diffColumns.length > 0) {
    return false;
  }
  for (let i = 0; i < ds_transList.getColumnCount(); i++) {
    const colId = ds_transList.getColumnID(i);
    ds_transList.setOriginalCellData(rowIndex, colId, ds_transList.getCellData(rowIndex, colId));
  }
  ds_transList.modifyRowStatus(rowIndex, "R");
  if (ds_transList.getRowStatus(rowIndex) == "U") {
    ds_transList.undoRow(rowIndex);
    ds_transList.modifyRowStatus(rowIndex, "R");
  }
  if (ds_transList.getRowStatus(rowIndex) != "R") {
    console.warn("[tn_304_02_01b normalizeTransListRowStatus] rowStatus restore failed", {
      rowIndex: rowIndex,
      odrNo: ds_transList.getCellData(rowIndex, "odrNo"),
      rowStatus: ds_transList.getRowStatus(rowIndex),
      hiddenDiffColumns: scwin.getTransListHiddenDiffColumns(rowIndex),
      diffColumns: scwin.getTransListRowDiffColumns(rowIndex),
      rawDiffColumns: scwin.getTransListRawDiffColumns(rowIndex)
    });
    return false;
  }
  return true;
};
scwin.normalizeAllTransListRowStatus = function () {
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    scwin.normalizeTransListRowStatus(i);
  }
};
scwin.syncRetrieveRowStatusByCopCoClntNo = function () {
  const schGubunValue = lc_schGubun.getValue();
  const schGubunLabel = lc_schGubun.getText(true);
  const isAllocatedView = schGubunValue == "C" || schGubunLabel == "배차";
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    const copCoClntNo = ds_transList.getCellData(i, "copCoClntNo");
    const hasCopCoClntNo = !$c.util.isEmpty($p, copCoClntNo) && copCoClntNo.toString().trim() != "";
    ds_transList.modifyRowStatus(i, !isAllocatedView && hasCopCoClntNo ? "U" : "R");
  }
};
scwin.scheduleNormalizeAllTransListRowStatus = function () {
  $c.util.setTimeout($p, function () {
    scwin.normalizeAllTransListRowStatus();
  }, {
    delay: 0,
    key: "tn_304_02_01b_normalizeAllTransListRowStatus"
  });
};

//-------------------------------------------------------------------------
// odrShtPrtYn
//-------------------------------------------------------------------------
scwin.f_odrShtPrtYn = async function () {
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  } else {
    return;
  }
  let rowPos = scwin.rowPosition;
  let coshippingNo = ds_transList.getCellData(rowPos, "coshippingNo");
  ds_odrShtPrtYn.removeAll();
  ds_odrShtPrtYn.insertRow();
  ds_odrShtPrtYn.setRowPosition(0);
  ds_odrShtPrtYn.setCellData(0, "coshippingNo", coshippingNo);
  ds_odrShtPrtYn.setCellData(0, "coshippingSeq", ds_transList.getCellData(rowPos, "coshippingSeq"));
  ds_odrShtPrtYn.setCellData(0, "odrNo", ds_transList.getCellData(rowPos, "odrNo"));
  ds_odrShtPrtYn.setCellData(0, "commSeq", ds_transList.getCellData(rowPos, "commSeq"));
  ds_odrShtPrtYn.setCellData(0, "wrkPathSeq", ds_transList.getCellData(rowPos, "wrkPathSeq"));
  ds_odrShtPrtYn.setCellData(0, "wrkStpSeq", ds_transList.getCellData(rowPos, "wrkStpSeq"));

  // 합적된 경우라면 같은 합적번호로 연결되어있는 로들의 정보를 모두 데이터셋에 저장해준다.
  if (coshippingNo != "") {
    //루프를 돌면서 같은 합적번호를 가지고 있는지 판단하고 같은 합적번호를 가지고 있는 것들 중에 처음에 저장했던 로는 제외하고  저장한다.
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      if (ds_transList.getCellData(i, "coshippingNo") == coshippingNo && i != rowPos) {
        ds_odrShtPrtYn.insertRow();
        ds_odrShtPrtYn.setCellData(ds_odrShtPrtYn.getRowPosition(), "coshippingNo", ds_transList.getCellData(i, "coshippingNo"));
        ds_odrShtPrtYn.setCellData(ds_odrShtPrtYn.getRowPosition(), "coshippingSeq", ds_transList.getCellData(i, "coshippingSeq"));
        ds_odrShtPrtYn.setCellData(ds_odrShtPrtYn.getRowPosition(), "odrNo", ds_transList.getCellData(i, "odrNo"));
        ds_odrShtPrtYn.setCellData(ds_odrShtPrtYn.getRowPosition(), "commSeq", ds_transList.getCellData(i, "commSeq"));
        ds_odrShtPrtYn.setCellData(ds_odrShtPrtYn.getRowPosition(), "wrkPathSeq", ds_transList.getCellData(i, "wrkPathSeq"));
        ds_odrShtPrtYn.setCellData(ds_odrShtPrtYn.getRowPosition(), "wrkStpSeq", ds_transList.getCellData(i, "wrkStpSeq"));
      }
    }
  }
  await $c.sbm.execute($p, sbm_odrShtPrtYn);
};

//-------------------------------------------------------------------------
// 그리드 칼럼 강제등록 displayFormatter
//-------------------------------------------------------------------------
scwin.gridOdrShtPrtYnDisplayFormatter = function (value) {
  switch (value) {
    case "0":
      return "미출력";
    case "1":
      return "출력후미배차";
    case "2":
      return "출력후일부배차";
    default:
      return "";
  }
};

//-------------------------------------------------------------------------
// 배차점소 콤보박스 onchange
//-------------------------------------------------------------------------
scwin.lc_srchLobranCd_onchange = function (info) {
  if (lc_srchLobranCd.getValue() == "2AA") {
    btn_edit_nrm.show();
  } else {
    btn_edit_nrm.hide();
  }
};

//-------------------------------------------------------------------------
// 조회 버튼 onclick
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 휴지통 버튼 onclick
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_srchCond, [ed_srchFromDate, ed_srchToDate]);
};

//-------------------------------------------------------------------------
// 계약처 UDC Code onviewchange
//-------------------------------------------------------------------------
scwin.udc_srchCtrtClntCd_onviewchangeCodeEvent = function (info) {
  // 코드에 값이 없으면 코드명도 "" 처리 / 있으면 계약처 팝업 open
  if ($c.gus.cfIsNull($p, ed_srchCtrtClntCd.getValue().trim())) {
    txt_ctrtClntNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(1, ed_srchCtrtClntCd.getValue(), txt_ctrtClntNm.getValue(), 'T', 'F');
  }
};

//-------------------------------------------------------------------------
// 계약처 UDC 조회 버튼 onclick
//-------------------------------------------------------------------------
scwin.udc_srchCtrtClntCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_srchCtrtClntCd.getValue(), txt_ctrtClntNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 금액계산 체크박스 onviewchange
//-------------------------------------------------------------------------
scwin.chb_functionYn_onviewchange = function (info) {
  //0428 asis Y가 아니라 1을 사용
  if (info.checked) {
    ds_srchCond.set("functionYn", "1");
  } else {
    ds_srchCond.set("functionYn", "0");
  }
};

//-------------------------------------------------------------------------
// 출발 작업장(구간) 버튼 onclick
//-------------------------------------------------------------------------
scwin.udc_onWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_onWrkPlCd.getValue(), txt_onWrkPlNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 출발 작업장(구간) 코드영역 onviewchange
//-------------------------------------------------------------------------
scwin.udc_onWrkPlCd_onviewchangeCodeEvent = function (info) {
  if ($c.gus.cfIsNull($p, ed_onWrkPlCd.getValue().trim())) {
    txt_onWrkPlNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(8, ed_onWrkPlCd.getValue(), txt_onWrkPlNm.getValue(), 'T', 'F');
  }
};

//-------------------------------------------------------------------------
// 출발 작업장(구간) 코드명영역 onviewchange
//-------------------------------------------------------------------------
scwin.udc_onWrkPlCd_onviewchangeNameEvent = function (info) {
  if ($c.gus.cfIsNull($p, txt_onWrkPlNm.getValue().trim())) {
    ed_onWrkPlCd.setValue("");
  } else {
    scwin.f_openCommonPopUp(8, ed_onWrkPlCd.getValue(), txt_onWrkPlNm.getValue(), 'T', 'F');
  }
};

//-------------------------------------------------------------------------
// 도착 작업장(구간) 버튼 onclick
//-------------------------------------------------------------------------
scwin.udc_offWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_offWrkPlCd.getValue(), txt_offWrkPlNm.getValue(), 'F', 'T');
};

//-------------------------------------------------------------------------
// 도착 작업장(구간) 코드영역 onviewchange
//-------------------------------------------------------------------------
scwin.udc_offWrkPlCd_onviewchangeCodeEvent = function (info) {
  if ($c.gus.cfIsNull($p, ed_offWrkPlCd.getValue().trim())) {
    txt_offWrkPlNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(9, ed_offWrkPlCd.getValue(), txt_offWrkPlNm.getValue(), 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 도착 작업장(구간) 코드명영역 onviewchange
//-------------------------------------------------------------------------
scwin.udc_offWrkPlCd_onviewchangeNameEvent = function (info) {
  if ($c.gus.cfIsNull($p, txt_offWrkPlNm.getValue().trim())) {
    ed_offWrkPlCd.setValue("");
  } else {
    scwin.f_openCommonPopUp(9, ed_offWrkPlCd.getValue(), txt_offWrkPlNm.getValue(), 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 3자물류 onchange
//-------------------------------------------------------------------------
scwin.chkTPL_onchange = function (info) {
  let gubun = lc_schGubun.getValue();
  if (info.checked) {
    scwin.f_setTPLGrid(true);
  } else {
    scwin.f_setTPLGrid(false);
  }
};

//-------------------------------------------------------------------------
// 3자물류 onviewchange
//-------------------------------------------------------------------------
scwin.chkTPL_onviewchange = function (info) {
  let gubun = lc_schGubun.getValue();
  if (info.checked) {
    scwin.f_setTPLGrid(true);
  } else {
    scwin.f_setTPLGrid(false);
  }
};

//-------------------------------------------------------------------------
// 그리드 oncellclick
//-------------------------------------------------------------------------
scwin.gr_transList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.syncTransListRowPosition(rowIndex);
  let info = {
    rowIndex,
    columnIndex,
    columnId
  };
  if (columnId == "urgentYn" || columnId == "rsltsYn") {
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      if (rowIndex != i && ds_transList.getCellData(rowIndex, "odrNo") == ds_transList.getCellData(i, "odrNo") && ds_transList.getCellData(i, "odrNo").trim() == '') {
        ds_transList.setCellData(i, "urgentYn", ds_transList.getCellData(rowIndex, "urgentYn"));
        ds_transList.setCellData(i, "rsltsYn", ds_transList.getCellData(rowIndex, "rsltsYn"));
      }
    }
  } else if (columnId == "eqNrmCd") {
    // jisoo, 이동현씨 요청으로 ListCount 수정
    ds_eqNrmCd.clearFilter();
    if (!$c.util.isEmpty($p, scwin.rowPosition)) {
      ds_transList.setRowPosition(scwin.rowPosition);
    }
    let ft = ds_transList.getCellData(scwin.rowPosition, "eqKndCd"); // 첫번째 Combo선택값
    let filterOptions = {
      type: "row",
      colIndex: "upperCd",
      key: ft,
      condition: "and",
      exactMatch: true,
      param: ""
    };
    ds_eqNrmCd.setColumnFilter(filterOptions); // 두번째 Combo에 대한 필터링 수행
    // TODO: ListCount?
    // gr_transList.ColumnProp('eqNrmCd', 'ListCount') = "11";
  } else if (columnId === "wrkIndictYn") {
    //0429
    const vehclShortCd = ds_transList.getCellData(rowIndex, "vehclShortCd");
    if (vehclShortCd !== "" && scwin.schGubun) {
      gr_transList.setCellReadOnly(rowIndex, "wrkIndictYn", false);
    } else {
      gr_transList.setCellReadOnly(rowIndex, "wrkIndictYn", true);
      const originalVal = ds_transList_ori.getCellData(rowIndex, columnId);
      ds_transList.setCellData(rowIndex, columnId, originalVal);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 oncelldblclick
//-------------------------------------------------------------------------
scwin.gr_transList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let info = {
    rowIndex,
    columnIndex,
    columnId
  };
  if (columnId == "odrNo") {
    if (!$c.util.isEmpty($p, scwin.rowPosition)) {
      ds_transList.setRowPosition(scwin.rowPosition);
    }
    let sellLodeptCd = ds_transList.getCellData(scwin.rowPosition, "sellLodeptCd");
    let odrNo = ds_transList.getCellData(scwin.rowPosition, "odrNo");
    let paramObj = {
      sellLodeptCd: sellLodeptCd,
      odrNo: odrNo
    };
    $c.win.openMenu($p, "오더별작업물량집계표(BULK)", "/ui/ds/fs/bilg/fs_204_02_60b.xml", "fs_204_02_60b.jsp", paramObj);
  }
};

//-------------------------------------------------------------------------
// ds_transList oncelldatachange
//-------------------------------------------------------------------------
scwin.ds_transList_oncelldatachange = async function (info) {
  if (!scwin.dsTransListUnbind) {
    let row = info.rowIndex;
    let colid = info.colID;
    let olddata = info.oldValue;
    let value = info.newValue;
    scwin.syncTransListRowPosition(row);
    let coshippingNo = ds_transList.getCellData(row, "coshippingNo"); //합적번호
    let coshippingNoTemp = ds_transList.getCellData(row, "coshippingNoTemp"); //임시합적번호
    /** 체크박스 관련 Start */
    if (colid == "chk") {
      const chkValue = scwin.normalizeTransListChkValue(value);
      // 미합적 운송물량 클릭시
      if (coshippingNo == "") {
        if (chkValue == "1" && scwin.schGubun) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (scwin.isTransListChkChecked(i)) {
              if (ds_transList.getCellData(i, "coshippingNo") != "" || ds_transList.getCellData(i, "coshippingNoTemp") != coshippingNoTemp) {
                $c.win.alert($p, "이미 합적된 물량과 같이 합적할 수 없습니다");
                scwin.resetTransListChkValue(row);
                scwin.scheduleNormalizeAllTransListRowStatus();
                return;
              }
            }
          }
        }
        if (coshippingNoTemp != 0) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (i == row || ds_transList.getCellData(i, "coshippingNoTemp") != coshippingNoTemp) {
              continue;
            }
            scwin.setTransListCellData(i, colid, chkValue);
          }
        }
        // 합적물량 클릭시
      } else if (coshippingNo != "") {
        if (chkValue == "1" && scwin.schGubun) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (scwin.isTransListChkChecked(i) && ds_transList.getCellData(i, "coshippingNo") != coshippingNo) {
              $c.win.alert($p, "이미 합적되어 있는 물량은 다시 합적할 수 없습니다");
              scwin.resetTransListChkValue(row);
              scwin.scheduleNormalizeAllTransListRowStatus();
              return;
            }
          }
        }
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (i == row || coshippingNo != ds_transList.getCellData(i, "coshippingNo")) {
            continue;
          }
          scwin.setTransListCellData(i, colid, chkValue);
        }
      }
      // 합적된 물량들 내에서 minYn은 하나만 체크될수 있도록 한다.
    } else if (colid == "minYn") {
      if (coshippingNo != "" || coshippingNoTemp != 0) {
        if (value == 1) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (i == row) {
              ds_transList.setCellData(i, "trfAdptYn", "1");
              await scwin.setBulkCmpstcrgSrchCond(i);
              //0428 scwin.copyBulkCmpstcrg(i);
              await scwin.checkReturnYn();
              continue;
            }
            if (ds_transList.getCellData(i, "coshippingNo") != "" && ds_transList.getCellData(i, "coshippingNo") == coshippingNo || ds_transList.getCellData(i, "coshippingNoTemp") != 0 && ds_transList.getCellData(i, "coshippingNoTemp") == coshippingNoTemp) {
              ds_transList.setCellData(i, "minYn", 0);
              ds_transList.setCellData(i, "trfAdptYn", 0);
            }
          }
        } else if (value == 0) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (i == row) {
              await scwin.setBulkCmpstcrgSrchCond(i);
              //0428 scwin.copyBulkCmpstcrg(i);
              await scwin.checkReturnYn();
              continue;
            }
            if (ds_transList.getCellData(i, "coshippingNo") != "" && ds_transList.getCellData(i, "coshippingNo") == coshippingNo || ds_transList.getCellData(i, "coshippingNoTemp") != 0 && ds_transList.getCellData(i, "coshippingNoTemp") == coshippingNoTemp) {
              ds_transList.setCellData(i, "minYn", 0);
              ds_transList.setCellData(i, "trfAdptYn", 1);
              await scwin.setBulkCmpstcrgSrchCond(i);
              //0428 scwin.copyBulkCmpstcrg(i);
              await scwin.checkReturnYn();
            }
          }
        }
      }
      if (ds_transList.getCellData(row, "vehclShortCd") != "") {
        await scwin.setBulkCmpstcrgSrchCond(row);
        //0428 scwin.copyBulkCmpstcrg(row);
        await scwin.checkReturnYn();
      }
    } else if (colid == "trfAdptYn") {
      if (coshippingNo != "" || coshippingNoTemp != 0) {
        if (ds_transList.getCellData(row, "minYn") == 1) {
          ds_transList.setCellData(row, "trfAdptYn", 1);
        } else if (ds_transList.getCellData(row, "minYn") == "0") {
          if (scwin.f_chkCoshippingMinYn(row, ds_transList.getCellData(row, "coshippingNo"))) {
            // 같은 합적번호의 다른 물량이 Min체크가 돼어있는지 확인
            ds_transList.setCellData(row, "trfAdptYn", 0);
          }
        }
      }
      if (ds_transList.getCellData(row, "vehclShortCd") != "") {
        await scwin.setBulkCmpstcrgSrchCond(row);
        scwin.copyBulkCmpstcrg(row);
        await scwin.checkReturnYn();
      }
    } else if (colid == "wrkIndictYn" || colid == "csctPrtYn") {
      if (coshippingNoTemp != 0) {
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (i == row || coshippingNoTemp != ds_transList.getCellData(i, "coshippingNoTemp")) {
            continue;
          }
          ds_transList.setCellData(i, colid, value);
        }
      }
      if (coshippingNo != "") {
        for (let i = 0; i < ds_transList.getRowCount(); i++) {
          if (i == row || coshippingNo != ds_transList.getCellData(i, "coshippingNo")) {
            continue;
          }
          ds_transList.setCellData(i, colid, value);
        }
      }
    } else if (colid == "routrpYn") {
      if (ds_transList.getCellData(row, "returnYn") == 1 && ds_transList.getCellData(row, "routrpYn") == 1) {
        $c.win.alert($p, "왕복배차와 귀로배차를 동시에 선택할 수 없습니다.");
        ds_transList.setCellData(row, "routrpYn", 0);
      } else {
        if (coshippingNoTemp != 0) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (coshippingNoTemp == ds_transList.getCellData(i, "coshippingNoTemp")) {
              ds_transList.setCellData(i, "routrpYn", value);
              scwin.setCmpstcrgMargin(i);
            }
          }
        }
        if (coshippingNo != "") {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (coshippingNo == ds_transList.getCellData(i, "coshippingNo")) {
              ds_transList.setCellData(i, "routrpYn", value);
              scwin.setCmpstcrgMargin(i);
            }
          }
        }
      }
      if (ds_transList.getCellData(row, "vehclShortCd") == "") {
        $c.win.alert($p, "차량번호를 입력하세요");
        ds_transList.setCellData(row, "returnYn", 0);
      }
    } else if (colid == "returnYn") {
      if (ds_transList.getCellData(row, "returnYnc") != 0) {
        if (ds_transList.getCellData(row, "returnYn") == 1 && ds_transList.getCellData(row, "routrpYn") == 1) {
          $c.win.alert($p, "왕복배차와 귀로배차를 동시에 선택할 수 없습니다.");
          ds_transList.setCellData(row, "returnYn", 0);
        } else {
          if (coshippingNoTemp != 0) {
            for (let i = 0; i < ds_transList.getRowCount(); i++) {
              if (coshippingNoTemp == ds_transList.getCellData(i, "coshippingNoTemp")) {
                ds_transList.setCellData(i, "returnYn", value);
              }
            }
          }
          if (coshippingNo != "") {
            for (let i = 0; i < ds_transList.getRowCount(); i++) {
              if (coshippingNo == ds_transList.getCellData(i, "coshippingNo")) {
                ds_transList.setCellData(i, "returnYn", value);
              }
            }
          }
        }
      } else if (ds_transList.getCellData(row, "vehclShortCd") == "") {
        $c.win.alert($p, "차량번호를 입력하세요");
        ds_transList.setCellData(row, "returnYn", 0);
      } else if (ds_transList.getCellData(row, "returnYnc") == 0) {
        $c.win.alert($p, "직영차량은 귀로배차 할 수 없습니다.");
        ds_transList.setCellData(row, "returnYn", 0);
      }
      // 다착지, 요율적용
    } else if (colid == "marvYn") {
      if (ds_transList.getCellData(row, "vehclShortCd") != "") {
        await scwin.setBulkCmpstcrgSrchCond(row);
        scwin.copyBulkCmpstcrg(row);
        await scwin.checkReturnYn();
      }
    }
    /** 체크박스 관련 End */

    if (colid == "chk") {
      scwin.scheduleNormalizeAllTransListRowStatus();
      scwin.scheduleLogTransListDirtyColumns(row, "chk");
    }
    if (row > -1 && ds_transList.getRowCount() > row) {
      switch (colid) {
        case "vehclShortCd":
          scwin.olddata_vehclShortCd = olddata;
          break;
        case "copCoClntNo":
          scwin.olddata_copCoClntNo = olddata;
          break;
        case "eqKndCd":
          scwin.olddata_eqKndCd = olddata;
          break;
      }
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 onaftercolumnmove
//-------------------------------------------------------------------------
scwin.gr_transList_onaftercolumnmove = function (info) {
  let columnId = info.startColumnID;
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  if (columnId == "wrkIndictYn") {
    if (ds_transList.getCellData(row, "vehclShortCd") != "" && scwin.schGubun) {
      gr_transList.setColumnReadOnly("wrkIndictYn", false);
    } else {
      gr_transList.setColumnReadOnly("wrkIndictYn", true);
    }
  } else if (columnId == "unitCd") {
    scwin.f_ComboUnitCd(ds_transList.getCellData(scwin.rowPosition, "ctrtClntNo"), ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd"), ds_transList.getCellData(scwin.rowPosition, "wrkStDt"), ds_transList.getCellData(scwin.rowPosition, "ctrtNo"), ds_transList.getCellData(scwin.rowPosition, "coshippingPatternCd"), ds_transList.getCellData(scwin.rowPosition, "arvWrkPlCd"));
  } else if (columnId == "coshippingPatternCd") {
    // 합적유형코드가 바뀌면 하불단위코드를 지워준다      
    scwin.f_ComboCoshippingPatternCd(ds_transList.getCellData(scwin.rowPosition, "ctrtClntNo"), ds_transList.getCellData(scwin.rowPosition, "dptWrkPlCd"), ds_transList.getCellData(scwin.rowPosition, "wrkStDt"), ds_transList.getCellData(scwin.rowPosition, "ctrtNo"), ds_transList.getCellData(scwin.rowPosition, "coshippingNo"), ds_transList.getCellData(scwin.rowPosition, "arvWrkPlCd"));
  }
};

//-------------------------------------------------------------------------
// 그리드 oneditend
//-------------------------------------------------------------------------
scwin.gr_transList_oneditend = async function (rowIndex, columnIndex, value) {
  let info = {
    rowIndex,
    columnIndex,
    value
  };
  let colid = gr_transList.getColumnID(columnIndex);
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }

  // 합적운송물량인 인경우에는 차량종류, 차량규격, 합적유형, 하불단위를 같은 값으로 저장한다.
  if (colid == "eqKndCd" || colid == "eqNrmCd" || colid == "coshippingPatternCd" || colid == "unitCd") {
    if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "") {
      for (let i = 0; i < ds_transList.getRowCount(); i++) {
        if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(scwin.rowPosition, "coshippingNo")) {
          ds_transList.setCellData(i, colid, value);
          if (colid == "eqKndCd") {
            ds_transList.setCellData(i, "eqNrmCd", ds_transList.getCellData(scwin.rowPosition, "eqNrmCd"));
          }
        }
      }
    } else if (ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") != 0) {
      for (let i = 0; i < ds_transList.getRowCount(); i++) {
        if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp")) {
          ds_transList.setCellData(i, colid, value);
          if (colid == "eqKndCd") {
            ds_transList.setCellData(i, "eqNrmCd", ds_transList.getCellData(scwin.rowPosition, "eqNrmCd"));
          }
        }
      }
    }
  }
  if (colid == "coshippingPatternCd") {
    await scwin.f_ComboWrkUnitCd(ds_transList.getCellData(scwin.rowPosition, "ctrtNo"));
    let chkUnit = "F";
    for (let i = 0; i < ds_unitCd.getRowCount(); i++) {
      if (ds_transList.getCellData(scwin.rowPosition, "unitCd") == ds_unitCd.getCellData(i, "code")) {
        chkUnit = "T";
      }
    }
    if (chkUnit == "F") {
      ds_transList.setCellData(scwin.rowPosition, "unitCd", ds_unitCd.getCellData(0, "code"));
    }
  }
  if (ds_transList.getCellData(rowIndex, "vehclShortCd") != "" && (colid == "coshippingPatternCd" || colid == "unitCd")) {
    await scwin.setBulkCmpstcrgSrchCond(scwin.rowPosition);
    scwin.copyBulkCmpstcrg(scwin.rowPosition);
    await scwin.checkReturnYn();
  }
};

//-------------------------------------------------------------------------
// 물량분할 버튼 onclick
//-------------------------------------------------------------------------
scwin.f_divisionVehcl = async function (e) {
  let addVehcl = ed_divisionVehcl.getValue() - 1;
  const clearCarKindClnt = chkCopyClnt.getValue() != "Y";
  if (ed_divisionVehcl.getDisabled()) {
    return;
  }
  if (addVehcl < 1) {
    $c.gus.f_cfAlertMsg($p, "분할은 2대 이상 할 수 있습니다.");
    ed_divisionVehcl.focus();
    return;
  }
  let checkedRowCount = 0;
  let orgRow = -1;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (scwin.isTransListChkChecked(i)) {
      checkedRowCount++;
      orgRow = i;
    }
  }
  if (checkedRowCount > 1) {
    await $c.win.alert($p, "배차분할은 하나의 배차선택 행에서만 가능합니다.");
    return;
  }
  orgRow = checkedRowCount == 1 ? orgRow : scwin.rowPosition == null ? 0 : scwin.rowPosition;
  scwin.rowPosition = orgRow;
  ds_transList.setRowPosition(orgRow);
  gr_transList.setFocusedCell(orgRow, 0);
  let retVal = new Object();
  retVal = scwin.f_getQtyWtCurculate();
  if (ds_transList.getCellData(orgRow, "coshippingNo") != "" || ds_transList.getCellData(orgRow, "coshippingNoTemp") != "" && ds_transList.getCellData(orgRow, "coshippingNoTemp") != "0") {
    $c.gus.f_cfAlertMsg($p, "이미 합적된 물량입니다. 분할 할 수 없습니다.");
    return;
  }
  let ret = await $c.win.confirm($p, "물량을 1/" + (addVehcl + 1) + " 하시겠습니까?");
  if (!ret) {
    return;
  }
  if (clearCarKindClnt) {
    scwin.f_divisionVehclCancel(null, orgRow);
  }
  scwin.saveDivisionOriginalRowSnapshot(orgRow);
  scwin.setTransListChkValue(orgRow, "0");
  if (clearCarKindClnt) {
    ds_transList.setCellData(orgRow, "copCoClntNo", "");
    ds_transList.setCellData(orgRow, "copCoClntNm", "");
  }
  if (true) {
    var orgQty = ds_transList.getCellData(orgRow, "qty");
    var orgGrossWt = ds_transList.getCellData(orgRow, "grossWt");
    var qty = parseInt(orgQty / (addVehcl + 1));
    var grossWt = parseFloat(orgGrossWt / (addVehcl + 1));
    var qtySum = qty;
    var grossWtSum = grossWt;

    // 복사시엔 타면 안됨(unbind가 안먹어서 전역변수로 처리)
    scwin.dsTransListUnbind = true;
    for (let i = 1; i <= addVehcl; i++) {
      if (i != addVehcl) {
        ds_transList.insertRow(orgRow + 1);
        scwin.f_copyRecord(ds_transList, orgRow, ds_transList, orgRow + 1);
        ds_transList.setCellData(orgRow + 1, "vehclShortCd", "");
        ds_transList.setCellData(orgRow + 1, "vehclNo", "");
        if (clearCarKindClnt) {
          ds_transList.setCellData(orgRow + 1, "copCoClntNo", "");
          ds_transList.setCellData(orgRow + 1, "copCoClntNm", "");
          ds_transList.setCellData(orgRow + 1, "eqKndCd", "");
          ds_transList.setCellData(orgRow + 1, "eqNrmCd", "");
        }
        ds_transList.setCellData(orgRow + 1, "eqCd", "");
        ds_transList.setCellData(orgRow + 1, "qty", qty);
        ds_transList.setCellData(orgRow + 1, "grossWt", grossWt);
        scwin.setTransListChkValue(orgRow + 1, "0");
        qtySum = qtySum + qty;
        grossWtSum = grossWtSum + grossWt;
      } else {
        ds_transList.setCellData(orgRow, "qty", qty);
        ds_transList.setCellData(orgRow, "grossWt", grossWt);
        ds_transList.insertRow(orgRow + 1);
        scwin.f_copyRecord(ds_transList, orgRow, ds_transList, orgRow + 1);
        ds_transList.setCellData(orgRow + 1, "vehclShortCd", "");
        ds_transList.setCellData(orgRow + 1, "vehclNo", "");
        if (clearCarKindClnt) {
          ds_transList.setCellData(orgRow + 1, "copCoClntNo", "");
          ds_transList.setCellData(orgRow + 1, "copCoClntNm", "");
          ds_transList.setCellData(orgRow + 1, "eqKndCd", "");
          ds_transList.setCellData(orgRow + 1, "eqNrmCd", "");
        }
        ds_transList.setCellData(orgRow + 1, "eqCd", "");
        ds_transList.setCellData(orgRow + 1, "qty", orgQty - qtySum);
        ds_transList.setCellData(orgRow + 1, "grossWt", orgGrossWt - grossWtSum);
        scwin.setTransListChkValue(orgRow + 1, "0");
      }
    }
    gr_transList.setFocusedCell(orgRow + 1, 0);

    // 복사시엔 타면 안되서 unbind한거 다시 bind
    scwin.dsTransListUnbind = false;
  } else {
    // 복사시엔 타면 안됨(unbind가 안먹어서 전역변수로 처리)
    scwin.dsTransListUnbind = true;
    for (let i = 0; i < addVehcl; i++) {
      ds_transList.insertRow(orgRow + 1);
      scwin.f_copyRecord(ds_transList, orgRow, ds_transList, orgRow + 1);
      ds_transList.setCellData(orgRow + 1, "vehclShortCd", "");
      ds_transList.setCellData(orgRow + 1, "vehclNo", "");
      if (clearCarKindClnt) {
        ds_transList.setCellData(orgRow + 1, "copCoClntNo", "");
        ds_transList.setCellData(orgRow + 1, "copCoClntNm", "");
        ds_transList.setCellData(orgRow + 1, "eqKndCd", "");
        ds_transList.setCellData(orgRow + 1, "eqNrmCd", "");
      }
      ds_transList.setCellData(orgRow + 1, "eqCd", "");
      ds_transList.setCellData(orgRow + 1, "qty", 0);
      ds_transList.setCellData(orgRow + 1, "grossWt", 0.0);
      scwin.setTransListChkValue(orgRow + 1, "0");
    }
    gr_transList.setFocusedCell(orgRow + 1, 0);

    // 복사시엔 타면 안되서 unbind한거 다시 bind
    scwin.dsTransListUnbind = false;
  }
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (ds_transList.getRowStatus(i) == "C") {
      gr_transList.setCellReadOnly(i, "chk", true);
    } else {
      gr_transList.setCellReadOnly(i, "chk", false);
    }
  }
};

//-------------------------------------------------------------------------
// 물량분할취소 버튼 onclick
//-------------------------------------------------------------------------
scwin.f_divisionVehclCancel = function (e, orgRow) {
  let rowPosition = orgRow;
  if (rowPosition == null) {
    let checkedRowCount = 0;
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      if (scwin.isTransListChkChecked(i)) {
        checkedRowCount++;
        rowPosition = i;
      }
    }
    if (checkedRowCount > 1) {
      $c.win.alert($p, "배차분할은 하나의 배차선택 행에서만 가능합니다.");
      return;
    }
    rowPosition = checkedRowCount == 1 ? rowPosition : scwin.rowPosition == null ? 0 : scwin.rowPosition;
  }
  scwin.rowPosition = rowPosition;
  ds_transList.setRowPosition(rowPosition);
  gr_transList.setFocusedCell(rowPosition, 0);
  let odrNo = ds_transList.getCellData(rowPosition, "odrNo");
  if (scwin.f_chkDivision(odrNo)) {
    $c.gus.f_cfAlertMsg($p, "분할되지 않은 물량입니다.");
    return;
  }
  let removeRowIndexArray = [];
  let cancelQty = 0;
  let cancelGrossWt = 0;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (odrNo == ds_transList.getCellData(i, "odrNo") && ds_transList.getRowStatus(i) == "C") {
      removeRowIndexArray.push(i);
      cancelQty += Number(ds_transList.getCellData(i, "qty") || 0);
      cancelGrossWt += Number(ds_transList.getCellData(i, "grossWt") || 0);
    }
  }
  if (removeRowIndexArray.length > 0) {
    ds_transList.removeRows(removeRowIndexArray);
    if (!scwin.restoreDivisionOriginalRowSnapshot(odrNo)) {
      const originalRowIndex = scwin.findDivisionOriginalRowIndex(odrNo);
      if (originalRowIndex > -1) {
        ds_transList.setCellData(originalRowIndex, "qty", Number(ds_transList.getCellData(originalRowIndex, "qty") || 0) + cancelQty);
        ds_transList.setCellData(originalRowIndex, "grossWt", Number(ds_transList.getCellData(originalRowIndex, "grossWt") || 0) + cancelGrossWt);
      }
    }
    const restoredRowIndex = scwin.findDivisionOriginalRowIndex(odrNo);
    if (restoredRowIndex > -1) {
      scwin.rowPosition = restoredRowIndex;
      ds_transList.setRowPosition(restoredRowIndex);
      gr_transList.setFocusedCell(restoredRowIndex, 0);
    }
    ed_divisionVehcl.setValue("");
  }
};

//-------------------------------------------------------------------------
// 규격수정 onclick(동해지사 규격 수정)
//-------------------------------------------------------------------------
scwin.f_SaveNrm = async function (e) {
  let ret = await $c.win.confirm($p, ed_srchFromDate.getValue() + " ~ " + ed_srchToDate.getValue() + " 기간 동안의  차량규격(덤프25t)을 교정하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_saveNrm);
  }
};

//-------------------------------------------------------------------------
// 동해지사 규격 수정 완료
//-------------------------------------------------------------------------
scwin.sbm_saveNrm_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
};

//-------------------------------------------------------------------------
// 유입차량 onclick
//-------------------------------------------------------------------------
scwin.f_usablecar = async function (e) {
  let lobranCd = ds_srchCond.get("lobranCd");
  let data = {
    lobranCd: lobranCd
  };
  let opts = {
    id: "pop_usablecar",
    popupName: "가용유입차량조회",
    width: "1000px",
    height: "480px"
  };
  let ret = await $c.win.openPopup($p, "/ui/tn/op/rscmgnt/tn_305_01_05p.xml?lobranCd=" + lobranCd, opts, data);
};

//-------------------------------------------------------------------------
// 오더SHEET onclick
//-------------------------------------------------------------------------
scwin.f_print = async function (e) {
  const printRowPosition = scwin.f_getOdrSheetRowPosition();
  if (printRowPosition < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더"));
    return;
  }
  scwin.rowPosition = printRowPosition;
  ds_transList.setRowPosition(printRowPosition);
  if ((ds_transList.getCellData(printRowPosition, "odrNo") == null || ds_transList.getCellData(printRowPosition, "odrNo") == "") && (ds_transList.getCellData(printRowPosition, "coshippingNo") == null || ds_transList.getCellData(printRowPosition, "coshippingNo") == "")) {
    $c.gus.f_cfAlertMsg($p, "선택한 건에 대하여 발행정보가 존재하지 않습니다.");
    return;
  } else {
    let v_odrNo = ds_transList.getCellData(printRowPosition, "odrNo");
    let v_coshippingNo = ds_transList.getCellData(printRowPosition, "coshippingNo");
    let v_repClntNo = ds_transList.getCellData(printRowPosition, "repClntNo");
    let data = {
      reportName: "/ds/op/wrkplan/transwrkplan/tn_304_02_01b.ozr",
      odiName: "tn_304_02_01b1",
      odiParam: {
        ODR_NO: v_odrNo,
        COSHIPPING_NO: v_coshippingNo
      },
      formParam: {
        repClntNo: v_repClntNo
      }
    };
    let opts = {
      type: "viewer",
      printMode: "view"
    };
    $c.ext.openOzReport($p, data, opts);

    /*
      // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    let data = {
        reportName: "/ds/op/wrkplan/transwrkplan/tn_304_02_01b.ozr",
        odiName : "tn_304_02_01b1", 
        odiParam : {
            ODR_NO: v_odrNo,
            COSHIPPING_NO: v_coshippingNo
        },
        viewerParam : {
            zoom : 100, // 배율 설정
        },
        formParam : {
            repClntNo: v_repClntNo
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
      await $c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);
    */
    await scwin.f_odrShtPrtYn();
    await $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 출도착등록 onclick
//-------------------------------------------------------------------------
scwin.f_openTrans = function (e) {
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  let wrkLobranCd = lc_srchLobranCd.getValue();
  let wrkStDt = ds_transList.getCellData(scwin.rowPosition, "wrkStDt");
  let stDt = !$c.gus.cfIsNull($p, wrkStDt) ? wrkStDt.substring(0, 8) : "";
  let odrNo = ds_transList.getCellData(scwin.rowPosition, "odrNo");
  let paramObj = {
    wrkLobranCd: wrkLobranCd,
    wrkDt: stDt,
    odrNo: odrNo
  };
  $c.win.openMenu($p, "벌크출도착(NEW)", "/ui/tn/ds/wrkrslts/transwrkrslts/op_304_01_02b.xml?wrkLobranCd=" + wrkLobranCd + "&wrkDt=" + stDt + "&odrNo=" + odrNo, "op_304_01_02b.jsp", paramObj);
};

//-------------------------------------------------------------------------
// 매입요율 onclick
//-------------------------------------------------------------------------
scwin.f_openBulkTpchsTrfPopup = async function (e) {
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  if (ds_transList.getRowCount() < 0) {
    $c.win.alert($p, "조회 결과가 없습니다.");
    return;
  }
  let data = {
    lobranCd: ds_transList.getCellData(scwin.rowPosition, "lobranCd"),
    clntNo: ds_transList.getCellData(scwin.rowPosition, "ctrtClntNo"),
    clntNm: ds_transList.getCellData(scwin.rowPosition, "reqClntNm"),
    ctrtNo: ds_transList.getCellData(scwin.rowPosition, "ctrtNo"),
    eqKndCd: ds_transList.getCellData(scwin.rowPosition, "eqKndCd")
  };
  let opts = {
    id: "pop_usablecar",
    popupName: "벌크하불요율추가등록",
    width: 1250,
    height: 630
  };
  let url = "/ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_10p.xml?lobranCd=" + data.lobranCd + "&clntNo=" + data.lobranCd;
  +"&clntNm=" + "";
  +"&ctrtNo=" + data.ctrtNo;
  +"&eqKndCd=" + data.eqKndCd;
  let ret = await $c.win.openPopup($p, url, opts, data);
};

//-------------------------------------------------------------------------
// 배차취소 onclick
//-------------------------------------------------------------------------
scwin.f_hasTransWorkResults = function (value) {
  return value == "1" || value == 1 || value == true || value == "true" || value == "Y";
};
scwin.f_buildCancelRequestData = function () {
  let selectedRows = [];
  let coshippingNoTempMap = {};
  let chkPool = "0";
  scwin.cntCoshipping = 0;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (!scwin.isTransListChkChecked(i)) {
      continue;
    }
    if (scwin.f_hasTransWorkResults(ds_transList.getCellData(i, "rsltsYn"))) {
      return {
        hasResults: true,
        selectedRows: []
      };
    }
    let rowData = Object.assign({}, ds_transList.getRowJSON(i));
    rowData.chk = scwin.getTransListChkValue(i);
    let coshippingNo = rowData.coshippingNo;
    let coshippingNoTemp = $c.util.isEmpty($p, rowData.coshippingNoTemp) ? "" : String(rowData.coshippingNoTemp);
    if (!$c.util.isEmpty($p, coshippingNo)) {
      if (!$c.util.isEmpty($p, coshippingNoTempMap[coshippingNo])) {
        rowData.coshippingNoTemp = coshippingNoTempMap[coshippingNo];
      } else if (coshippingNoTemp != "" && coshippingNoTemp != "0") {
        coshippingNoTempMap[coshippingNo] = rowData.coshippingNoTemp;
      } else {
        scwin.cntCoshipping++;
        coshippingNoTempMap[coshippingNo] = scwin.cntCoshipping;
        rowData.coshippingNoTemp = scwin.cntCoshipping;
      }
    }
    if (rowData.vehclShortCd != "" && rowData.copCoClntNo != "") {
      chkPool = "1";
    }
    selectedRows.push(rowData);
  }
  return {
    hasResults: false,
    chkPool: chkPool,
    selectedRows: selectedRows
  };
};
scwin.f_executeCancel = function (cancelData) {
  let submissionObj = {
    id: "sbm_cancelSelected",
    action: "/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.DeleteBulkTransWorkIndicationCMD.do?cntCoshipping=" + scwin.cntCoshipping + "&chkPool=" + cancelData.chkPool,
    method: "post",
    mediatype: "application/json",
    encoding: "UTF-8",
    submitDoneHandler: scwin.sbm_save_submitdone
  };
  return $c.sbm.executeDynamic($p, submissionObj, {
    IN_DS1: cancelData.selectedRows
  });
};
scwin.f_Cancel = async function (e) {
  let cancelData = scwin.f_buildCancelRequestData();
  if (cancelData.hasResults) {
    scwin.cntCoshipping = 0;
    await $c.gus.cfAlertMsg($p, "이미 운송작업실적이 발생하였습니다.");
    return;
  }
  if (cancelData.selectedRows.length == 0) {
    scwin.cntCoshipping = 0;
    $c.gus.f_cfAlertMsg($p, "선택한 운송물량이 없습니다");
    return;
  }
  if (!(await $c.win.confirm($p, "삭제하시겠습니까?"))) {
    scwin.cntCoshipping = 0;
    return;
  }
  await scwin.f_executeCancel(cancelData);
  return;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (scwin.isTransListChkChecked(i)) {
      cntOdr++; // 선택된 오더 카운트 
      lastIndex = i;
      //합적되어 있는 물량도 임시 합적번호가 없다면 번호부여 
      if (ds_transList.getCellData(i, "coshippingNo") != "" && ds_transList.getCellData(i, "coshippingNoTemp") == 0) {
        scwin.cntCoshipping++;
        for (let j = 0; j < ds_transList.getRowCount(); j++) {
          if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(j, "coshippingNo")) {
            ds_transList.setCellData(j, "coshippingNoTemp", scwin.cntCoshipping);
          }
        }
      }
    }
  }
  if (cntOdr == 0) {
    $c.gus.f_cfAlertMsg($p, "선택된 운송물량이 없습니다");
    return;
  }
  if (lastIndex > -1 && ds_transList.getCellData(cntOdr, "vehclShortCd") != "" && ds_transList.getCellData(cntOdr, "copCoClntNo") != "") {
    chkPool = "1";
  } else {
    chkPool = "0";
  }
  let ret = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (ret) {
    sbm_save.action = "/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.DeleteBulkTransWorkIndicationCMD.do?cntCoshipping=" + scwin.cntCoshipping + "&chkPool=" + chkPool;
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 배차 onclick
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  // 고객요청번호별 최소중량(>23000) MIN 체크
  let arrParam = new Array();
  let chkcnt = 0;
  let chkPool;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (scwin.isTransListChkChecked(i) && ds_transList.getCellData(i, "repClntNo") == "000012") {
      arrParam[chkcnt] = new Array(ds_transList.getCellData(i, "clntMgntNo"));
      chkcnt++;
    }
  }
  for (let i = 0; i < chkcnt; i++) {
    let odrNo = arrParam[i];
    let wtchk = 0;
    for (let j = 0; j < ds_transList.getRowCount(); j++) {
      if (ds_transList.getCellData(j, "clntMgntNo") == odrNo && scwin.isTransListChkChecked(j) && ds_transList.getCellData(j, "minYn") == "1") {
        wtchk = 25000;
      }
      if (ds_transList.getCellData(j, "clntMgntNo") == odrNo && scwin.isTransListChkChecked(j) && ds_transList.getCellData(j, "minYn") == "0") {
        wtchk += ds_transList.getCellData(j, "grossWt");
      }
    }
    if (wtchk < 23000) {
      let ret = await $c.win.confirm($p, arrParam[i] + "번 화물은 23톤 미만입니다. 최소화물(MIN)체크를 하시기바랍니다.");
      if (ret) {
        continue;
      } else {
        return;
      }
    }
  }
  if (ds_transList.getRowCount() == 0) {
    /* 사용하는곳이 없어 주석처리 && ds_vehiclesList.getRowCount() == 0 */
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_001, ""));
    return;
  }
  if (ds_transList.getModifiedIndex().length < 1) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "운송물량"));
    return;
  }
  let cntOdr = 0;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (ds_transList.getRowStatus(i) != "U" && ds_transList.getRowStatus(i) != "C") {
      continue;
    }

    // 합적되어 있는 물량도 임시 합적번호가 없다면 번호부여 
    if (ds_transList.getCellData(i, "coshippingNo") != "" && ds_transList.getCellData(i, "coshippingNoTemp") == 0) {
      scwin.cntCoshipping++;
      for (let j = 0; j < ds_transList.getRowCount(); j++) {
        if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(j, "coshippingNo")) {
          ds_transList.setCellData(j, "coshippingNoTemp", scwin.cntCoshipping);
        }
      }
    }

    // 회원제 차량인지 확인
    if (ds_transList.getCellData(i, "mbssysVehclYn") == 1 && ds_transList.getCellData(i, "coshippingPatternCd") != DsConstants.COSHIPPING_PATTERN_CD_MBSSYS && ds_transList.getCellData(i, "coshippingNo") == "" && ds_transList.getCellData(i, "coshippingNoTemp") == 0 && ds_transList.getCellData(i, "bulkVehclBpYn") != 1 // 차량BP유무 
    ) {
      $c.win.alert($p, "회원제 차량인 경우에는 합적유형을 변경할 수 없습니다");
      ds_transList.setCellData(i, "coshippingPatternCd", DsConstants.COSHIPPING_PATTERN_CD_MBSSYS);
      return;
    }

    // 차량이나 협력업체가 입력된 운송물량은 차량종류 및 규격 입력값 체크
    if (ds_transList.getCellData(i, "vehclShortCd") != "" || ds_transList.getCellData(i, "copCoClntNo") != "") {
      cntOdr++; // 차량이나 협력업체가 배정된 오더 카운트

      if (ds_transList.getCellData(i, "eqKndCd") == "" || ds_transList.getCellData(i, "eqNrmCd") == "") {
        let userRowNum = i + 1;
        $c.gus.f_cfAlertMsg($p, userRowNum + "행의 종류/규격 코드를 입력해주세요");
        return;
      }
    }

    //합적물량에 대해 minYn이 하나만 체크되었는지 확인
    let minYnCnt = 0;
    if (ds_transList.getCellData(i, "coshippingNoTemp") != 0) {
      for (let j = 0; j < ds_transList.getRowCount(); j++) {
        if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(j, "coshippingNoTemp")) {
          minYnCnt += Number(ds_transList.getCellData(j, "minYn") ? ds_transList.getCellData(j, "minYn") : 0);
        }
        if (minYnCnt > 1) {
          $c.gus.f_cfAlertMsg($p, "합적물량은 minYn이 하나 이상 선택될수 없습니다");
          return;
        }
      }
      if (minYnCnt == 1) {
        for (let j = 0; j < ds_transList.getRowCount(); j++) {
          if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(j, "coshippingNoTemp")) {
            if (ds_transList.getCellData(j, "minYn") == "1") {
              ds_transList.setCellData(j, "trfAdptYn", "1");
            } else {
              ds_transList.setCellData(j, "trfAdptYn", "0");
            }
          }
        }
      }
    }
    if (ds_transList.getCellData(i, "qty") == 0 && ds_transList.getCellData(i, "grossWt") == 0 && ds_transList.getCellData(i, "cbm") == 0) {
      $c.gus.f_cfAlertMsg($p, "수량, 중량 둘 중 하나는 필수 입력입니다.");
      gr_transList.setFocusedCell(i, "qty", true);
      return;
    }
    if (ds_transList.getCellData(i, "vehclShortCd") != "" && ds_transList.getCellData(i, "copCoClntNo") != "") {
      chkPool = "1";
    } else {
      chkPool = "0";
    }
  }
  if (cntOdr == 0) {
    $c.gus.f_cfAlertMsg($p, "차량이나 협력업체가 배정된 운송물량이 없습니다");
    return;
  }
  let ret2 = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret2) {
    sbm_save.action = "/ncall.tn.op.bulktransworkmgnt.bulktransworkindication.RegsistBulkTransWorkIndicationCMD.do?cntCoshipping=" + scwin.cntCoshipping + "&chkPool=" + chkPool;
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 저장 완료
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.cntCoshipping = 0; //합적카운트 초기화
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 물량공개 onclick
//-------------------------------------------------------------------------
scwin.f_openTransVolume = async function (e) {
  let ret = await $c.win.confirm($p, "선택된 물량을 공개 하시겠습니까?");
  if (ret) {
    for (let i = 0; i < ds_transList.getRowCount(); i++) {
      if (scwin.isTransListChkChecked(i) || ds_transList.getRowStatus(i) == "C") {
        if (ds_transList.getCellData(i, "openYn") == 1) {
          $c.gus.f_cfAlertMsg($p, "이미 공개된 화물입니다. " + ds_transList.getCellData(i, "odrNo"));
          return;
        }
      }
    }
    $c.sbm.execute($p, sbm_openTransVolume);
  }
};

//-------------------------------------------------------------------------
// 물량공개 성공
//-------------------------------------------------------------------------
scwin.sbm_openTransVolume_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// ds_transList ondataload
//-------------------------------------------------------------------------
scwin.ds_transList_ondataload = async function () {
  // AS-IS는 조회 후 자동적으로 OnColumnPosChanged 타는 것으로 보이는데, TO-BE는 그렇지 않아 작성
  let info = {
    startColumnID: "coshippingPatternCd"
  };
  await scwin.gr_transList_onaftercolumnmove(info);
};

//-------------------------------------------------------------------------
// gr_transList onafteredit
//-------------------------------------------------------------------------
scwin.gr_transList_onafteredit = async function (rowIndex, columnIndex, value) {
  let info = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    newValue: value
  };
  scwin.syncTransListRowPosition(rowIndex);
  if (!$c.util.isEmpty($p, scwin.rowPosition)) {
    ds_transList.setRowPosition(scwin.rowPosition);
  }
  let row = info.rowIndex;
  let colid = gr_transList.getColumnID(info.columnIndex);
  if (colid == "qty") {
    if (ds_transList.getCellData(row, "grossWt") > 0 && ds_transList.getRowStatus(row) != "C") {
      if (ds_transList.getCellData(row, "qty") == 0) {
        return;
      }
      let v_wtPerQty = parseFloat(ds_transList.getCellData(row, "grossWt") / ds_transList.getCellData(row, "qty"));
      ds_transList.setCellData(row, "grossWt", ds_transList.getCellData(row, "qty") * v_wtPerQty);
    } else if (ds_transList.getRowStatus(row) == "C") {
      let retVal = {};
      retVal = scwin.f_getQtyWtCurculate();
      if (retVal.qty == 0) {
        return;
      }
      let v_wtPerQty = parseFloat(retVal.grossWt / retVal.qty);
      ds_transList.setCellData(row, "grossWt", ds_transList.getCellData(row, "qty") * v_wtPerQty);
      ds_transList.setCellData(retVal.orgRow, "qty", retVal.editQty);
    }
  }
  if (row > -1 && ds_transList.getRowCount() > row) {
    switch (colid) {
      case "vehclShortCd":
        scwin.tabYn = true;
        scwin.focusCdYn = true; //0421
        if (ds_transList.getCellData(row, colid) == "" || ds_transList.getCellData(row, colid) == null) {
          ds_transList.setCellData(row, "minAmt", 0);
          ds_transList.setCellData(row, "maxAmt", 0);
          ds_transList.setCellData(row, "adptAmt", 0);
          ds_transList.setCellData(row, "scAmt", 0);
          ds_transList.setCellData(row, "scAmtRate", 0);
          ds_transList.setCellData(row, "scReg", "");
          ds_transList.setCellData(row, "scRegCd", "");
          ds_transList.setCellData(row, "cmpstcrgMargin", 0);
          await scwin.copyCoshipping(2);
        }
        if (ds_transList.getCellData(row, colid) != "" && ds_transList.getCellData(row, colid) != scwin.olddata_vehclShortCd) {
          // onclick 동작 때문에 넣어 놓음
          scwin.syncTransListRowPosition(row);
          scwin.vehclPopupRowPosition = row;
          $c.gus.cfSetHiddenValue($p, "ed_srchVehclShortCdForGrid", ds_transList.getCellData(row, colid) || "");
          scwin.focusCdYn = false; //0421
          await scwin.f_openCommonPopUp(3, null, "", 'T', 'F');
        } else if (ds_transList.getCellData(row, colid) == "") {
          ds_transList.setCellData(row, "eqKndCd", "");
          ds_transList.setCellData(row, "eqNrmCd", "");
          ds_transList.setCellData(row, "wrkIndictYn", 0);
          if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "" || ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") != 0) {
            await scwin.copyCoshipping(2);
          }
        }
        break;
      case "copCoClntNo":
        //script로 변경 된 경우 아래 작동 멈춤 0423
        // if(scwin.transYn =="Y"){
        //     scwin.transYn = "N"; 
        //     break;
        // }
        scwin.copFocusCdYn = true; //0421
        if (ds_transList.getCellData(row, colid) != "" && ds_transList.getCellData(row, colid) != scwin.olddata_copCoClntNo) {
          // onclick 동작 때문에 넣어 놓음
          scwin.syncTransListRowPosition(row);
          $c.gus.cfSetHiddenValue($p, "ed_srchCarKindClntInfoForGrid", ds_transList.getCellData(row, colid));
          $c.gus.cfSetHiddenValue($p, "ed_srchCarKindClntInfoNmForGrid", ds_transList.getCellData(row, "copCoClntNm"));
          ds_transList.setCellData(row, "copCoClntNm", "");
          scwin.copFocusCdYn = false; //0421
          // await scwin.f_openCommonPopUp(2,null,null,'T','F');
          await scwin.f_openCommonPopUp(2, ds_transList.getCellData(row, colid), null, 'T', 'F'); //0421
        } else if (ds_transList.getCellData(row, colid) == "") {
          ds_transList.setCellData(row, "copCoClntNm", "");
          ds_transList.setCellData(row, "eqKndCd", "");
          ds_transList.setCellData(row, "eqNrmCd", "");
          if (ds_transList.getCellData(scwin.rowPosition, "coshippingNo") != "" || ds_transList.getCellData(scwin.rowPosition, "coshippingNoTemp") != 0) {
            await scwin.copyCoshipping(1);
          }
        }
        break;
      case "scAmt":
        let flag = true;
        if (ds_transList.getCellData(row, "coshippingNo") != "") {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(row, "coshippingNo")) {
              if (i != row && ds_transList.getCellData(i, "scAmt") != null && ds_transList.getCellData(i, "scAmt") != 0) {
                flag = false;
              }
            }
          }
        } else if (ds_transList.getCellData(row, "coshippingNoTemp") != 0) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(row, "coshippingNoTemp") && i != row && ds_transList.getCellData(i, "scAmt") != null && ds_transList.getCellData(i, "scAmt") != 0) {
              flag = false;
            }
          }
        }
        if (flag && ds_transList.getCellData(row, "scAmt") != null && ds_transList.getCellData(row, "scAmt") != 0) {
          ds_transList.setCellData(row, "scReg", "복화할인");
          ds_transList.setCellData(row, "scRegCd", "0365");
          scwin.calcScAmtRate(row, "scAmt");
        } else {
          ds_transList.setCellData(row, "scReg", "");
          ds_transList.setCellData(row, "scRegCd", "");
          ds_transList.setCellData(row, "scAmtRate", 0);
          ds_transList.setCellData(row, "scAmt", 0);
        }
        scwin.setCmpstcrgMargin(row);
        break;
      case "scAmtRate":
        let flagRate = true;
        if (ds_transList.getCellData(row, "coshippingNo") != "") {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (ds_transList.getCellData(i, "coshippingNo") == ds_transList.getCellData(row, "coshippingNo") && i != row && ds_transList.getCellData(i, "scAmt") != null && ds_transList.getCellData(i, "scAmt") != 0) {
              flagRate = false;
            }
          }
        } else if (ds_transList.getCellData(row, "coshippingNoTemp") != 0) {
          for (let i = 0; i < ds_transList.getRowCount(); i++) {
            if (ds_transList.getCellData(i, "coshippingNoTemp") == ds_transList.getCellData(row, "coshippingNoTemp")) {
              if (i != row && ds_transList.getCellData(i, "scAmt") != null && ds_transList.getCellData(i, "scAmt") != 0) {
                flagRate = false;
              }
            }
          }
        }
        if (flagRate && ds_transList.getCellData(row, "scAmtRate") != null && ds_transList.getCellData(row, "scAmtRate") != 0) {
          ds_transList.setCellData(row, "scReg", "복화할인");
          ds_transList.setCellData(row, "scRegCd", "0365");
          scwin.calcScAmtRate(row, "scAmtRate");
        } else {
          ds_transList.setCellData(row, "scReg", "");
          ds_transList.setCellData(row, "scRegCd", "");
          ds_transList.setCellData(row, "scAmt", 0);
          ds_transList.setCellData(row, "scAmtRate", 0);
        }
        scwin.setCmpstcrgMargin(row);
        break;
      case "eqKndCd":
        if (scwin.olddata_eqKndCd != info.newValue) {
          ds_transList.setCellData(row, "eqNrmCd", "");
        }
        break;
    }
    if (colid == "qty" || colid == "grossWt" || colid == "len") {
      await scwin.setBulkCmpstcrgSrchCond(row);
      scwin.copyBulkCmpstcrg(row);
      await scwin.checkReturnYn();
      scwin.setCmpstcrgMargin(row);
    }
  }

  //0428 편집모드에서 방향키로 이동 시 , 포커스 사라지는 현상 때문에 강제로 다시 포커스 세팅
  setTimeout(function () {
    const tempRow = gr_transList.getFocusedRowIndex();
    const tempCol = gr_transList.getFocusedColumnIndex();
    // console.log(rowIndex+" : "+columnIndex);
    // console.log(tempRow+" : "+tempCol);
    gr_transList.setFocusedCell(tempRow, tempCol, false);
  }, 300);
};
scwin.gr_transList_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = gr_transList.getColumnID(columnIndex);
  scwin.syncTransListRowPosition(rowIndex);
  if (colid == "vehclShortCd") {
    //260421 차량단축번호
    scwin.tabYn = true; //260421
    scwin.clickVehclShortCd = true;
    scwin.vehclPopupRowPosition = rowIndex;
    $c.gus.cfSetHiddenValue($p, "ed_srchVehclShortCdForGrid", ds_transList.getCellData(rowIndex, "vehclShortCd") || "");
    if (scwin.focusCdYn) await scwin.f_openCommonPopUp(3, null, "", "F", "F");
  } else if (colid == "copCoClntNo") {
    scwin.clickCopCoClntNo = true;
    $c.gus.cfSetHiddenValue($p, "ed_srchCarKindClntInfoForGrid", ds_transList.getCellData(rowIndex, "copCoClntNo"));
    $c.gus.cfSetHiddenValue($p, "ed_srchCarKindClntInfoNmForGrid", ds_transList.getCellData(rowIndex, "copCoClntNm"));
    if (scwin.copFocusCdYn) await scwin.f_openCommonPopUp(2, null, null, "F", "F"); //0421
  }
};
scwin.f_chkCoshippingMinYn = function (row, coshippingNo) {
  let isYn = false;
  for (let i = 0; i < ds_transList.getRowCount(); i++) {
    if (i != row && ds_transList.getCellData(i, "coshippingNo") == coshippingNo) {
      if (ds_transList.getCellData(i, "minYn") == "1") {
        isYn = true;
        break;
      }
    }
  }
  return isYn;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchLobranCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true','ev:onchange':'scwin.lc_srchLobranCd_onchange',allOption:'',chooseOption:'',ref:'data:ds_srchCond.lobranCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발예정일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToDate',refDataMap:'ds_srchCond',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_srchFromDate',edToId:'ed_srchToDate',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',mandatoryTo:'true',mandatoryFrom:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업권역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchWrkDistrictCd1',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_srchCond.wrkDistrictCd1',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_schGubun',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_srchCond.schGubun'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미배차'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'배차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_transKndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_srchCond.railroadAdptDstCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'육송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'철송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'해송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_srchCtrtClntCd',codeId:'ed_srchCtrtClntCd',nameId:'txt_ctrtClntNm',UpperFlagCode:'0',code:'clntNo',refDataCollection:'ds_srchCond',selectID:'retrieveClntList_tpro','ev:onclickEvent':'scwin.udc_srchCtrtClntCd_onclickEvent',readOnlyName:'true','ev:onviewchangeCodeEvent':'scwin.udc_srchCtrtClntCd_onviewchangeCodeEvent',codeWidth:'60'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display:none;',id:'udc_srchVehclShortCdForGrid',codeId:'ed_srchVehclShortCdForGrid',nameId:'ed_srchVehclShortNmForGrid',UpperFlagCode:'0',code:'vehclShortCd',refDataCollection:'ds_transList',selectID:'retrieveUsableVehclNo_tpro',readOnlyName:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display:none;',id:'udc_srchBefCargoForGrid',codeId:'ed_srchBefCargoForGrid',nameId:'ed_srchBefCargoNmForGrid',UpperFlagCode:'0',code:'befCargoCd',refDataCollection:'ds_transList',selectID:'retrieveBefCargo_tpro',readOnlyName:'true',name:'befCargoNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'display:none;',id:'udc_srchCarKindClntInfoForGrid',codeId:'ed_srchCarKindClntInfoForGrid',nameId:'ed_srchCarKindClntInfoNmForGrid',UpperFlagCode:'0',code:'copCoClntNo',refDataCollection:'ds_transList',selectID:'retrieveCarKindClntInfo_tpro',readOnlyName:'true',name:'copCoClntNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_srchOdrKndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_srchCond.odrKndCd',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_functionYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'','ev:onviewchange':'scwin.chb_functionYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금액계산'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_noClsCd',search:'start',style:'width: 130px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_srchCond.noClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'고객요청번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_srchOdrNo',placeholder:'',class:'',ref:'data:ds_srchCond.odrNo'}},{T:1,N:'w2:udc_schInput',A:{style:'width:150px;',class:'',iptNm:'odrNoList',id:'udc_odrNoList',refDataMap:'ds_srchCond'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장(구간)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_onWrkPlCd',codeId:'ed_onWrkPlCd',nameId:'txt_onWrkPlNm',code:'onWrkPlCd',refDataCollection:'ds_srchCond',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_onWrkPlCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_onWrkPlCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_onWrkPlCd_onviewchangeNameEvent'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_offWrkPlCd',id:'udc_offWrkPlCd',nameId:'txt_offWrkPlNm',code:'offWrkPlCd',refDataCollection:'ds_srchCond',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_offWrkPlCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_offWrkPlCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_offWrkPlCd_onviewchangeNameEvent'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송물량 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chkTPL',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'','ev:onviewchange':'scwin.chkTPL_onviewchange','ev:onchange':'scwin.chkTPL_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chkCopyClnt',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력업체복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_divisionVehcl',placeholder:'',class:' w50 tar',allowChar:'0-9',maxByteLength:'2'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'대',class:''}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_divisionVehcl',style:'',type:'button','ev:onclick':'scwin.f_divisionVehcl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차분할시작'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger11',style:'',type:'button','ev:onclick':'scwin.f_divisionVehclCancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차분할취소'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_transList',id:'udc_topGrdBtn',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',grdDownOpts:'{"fileName" : "벌크운송물량.xlsx" ,"type" : "4+8+16", "sheetName" : "벌크운송물량" }'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transList',id:'gr_transList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'1','ev:oncellclick':'scwin.gr_transList_oncellclick',columnMove:'true','ev:onaftercolumnmove':'scwin.gr_transList_onaftercolumnmove','ev:oncelldblclick':'scwin.gr_transList_oncelldblclick','ev:oneditend':'scwin.gr_transList_oneditend',rowStatusVisible:'true',hideDeletedRow:'false','ev:onafteredit':'scwin.gr_transList_onafteredit','ev:ontextimageclick':'scwin.gr_transList_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'배차<br/>선택',width:'50',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'고객<br/>요청번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'비고',width:'150',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'요청화주',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'출발지',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도착지',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'납품처명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'출발예정',width:'140',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column77',value:'도착예정',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'작업<br/>지시번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'합적번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',value:'임시<br/>합적',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'스마트폰<br/>전송',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'화물위탁증<br/>발행여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'차량번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column41',value:'왕복<br/>배차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column45',value:'귀로<br/>배차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column49',value:'긴급',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column177',value:'실적',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column173',value:'MIN',displayMode:'label',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column169',value:'다착지',displayMode:'label',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column165',value:'수량',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column161',value:'중량',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column157',value:'CBM',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column153',value:'차량<br/>단축번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column149',value:'협력업체',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column141',value:'종류',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column137',value:'규격',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column133',value:'비고',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column129',value:'최고금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column125',value:'최저금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'적용금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column117',value:'할인등록코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',value:'할인코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',value:'할인금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',value:'할인비율<br/>(%)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',value:'복화이익',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column97',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'길이',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'합적<br/>유형',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',value:'하불<br/>단위',displayMode:'label',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column305',value:'요율<br/>적용',displayMode:'label',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column301',value:'Master오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column297',value:'CommSeq',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column293',value:'오더구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column289',value:'납품처',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column281',value:'물량<br/>공개',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column277',value:'매출부서코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column273',value:'오더도착예정',displayMode:'label',colSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column265',value:'오더시트발행',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column261',value:'컬럼헤더명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column257',value:'운송구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column253',value:'대표거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column249',value:'오더전송일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column245',value:'이전화물',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column241',value:'이전화물명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column237',value:'컬럼헤더명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column233',value:'컬럼헤더명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column229',value:'컬럼헤더명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column225',value:'컬럼헤더명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column221',value:'SM수량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column217',value:'모바일<br/>전송유무',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column213',value:'상세주소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column309',value:'요청화주코드',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column22',displayMode:'label',value:'일'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column21',displayMode:'label',value:'시'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column78',displayMode:'label',value:'일'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column82',value:'시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column150',displayMode:'label',value:'코드'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column146',displayMode:'label',value:'이름'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column290',displayMode:'label',value:'명'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column286',displayMode:'label',value:'전화번호'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column274',displayMode:'label',value:'일'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column270',displayMode:'label',value:'시'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',readOnly:'true',sortable:'true',style:';font-style:;;allowChar;id;readonly;hidden;align;class;maxByteLength;editFormat;displayFormat;value;sortable;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',width:'100',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'150',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplArvNmCmpy',inputType:'text',width:'100',textAlign:'left',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'text',width:'90',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',width:'50',readOnly:'true',dataType:'time',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'wrkEndDt',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date',sortable:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'wrkEndHh',displayMode:'label',readOnly:'true',dataType:'time',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transWrkIndictNo',displayMode:'label',sortable:'true',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coshippingNo',displayMode:'label',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'coshippingNoTemp',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'wrkIndictYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'csctPrtYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'routrpYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'returnYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'urgentYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'rsltsYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'minYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',id:'marvYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',maxByteLength:'20',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.##0',allowChar:'.0-9',maxByteLength:'15',maxLength:'.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',displayFormat:'#,###.##0',allowChar:'.0-9',maxLength:'.3',maxByteLength:'19',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'vehclShortCd',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'copCoClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'copCoClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'eqKndCd',displayMode:'label',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqKndCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'eqNrmCd',displayMode:'label',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'odrRmk',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'maxAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'minAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'adptAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'scRegCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scReg',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scAmt',displayMode:'label',textAlign:'right',allowChar:'0-9',maxByteLength:'15',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scAmtRate',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.1',maxByteLength:'15',allowChar:'.0-9',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmpstcrgMargin',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'len',displayMode:'label',textAlign:'right',dataType:'float',allowChar:'.0-9',maxLength:'.2',maxByteLength:'10'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'coshippingPatternCd',displayMode:'label',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_coshippingPatternCd'},E:[{T:1,N:'w2:label',A:{ref:'code'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'unitCd',displayMode:'label',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_unitCd'},E:[{T:1,N:'w2:label',A:{ref:'code'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'trfAdptYn',displayMode:'label',selectedData:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mstOdrNo',displayMode:'label',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commSeq',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrKndCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'tplClntNm',displayMode:'label',textAlign:'left',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tplClntTel',displayMode:'label',sortable:'true',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'openYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellLodeptCd',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'odrWrkEndDt',displayMode:'label',sortable:'true',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'odrWrkEndHh',displayMode:'label',dataType:'time',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrShtPrtYn',displayMode:'label',textAlign:'left',sortable:'true',displayFormatter:'scwin.gridOdrShtPrtYnDisplayFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chkPool',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'railroadAdptDstCd',displayMode:'label',sortable:'true',maxByteLength:'4'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repClntNo',displayMode:'label',textAlign:'left',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regDtm',displayMode:'label',sortable:'true',readOnly:'true',displayFormat:'####/##/## ##:##',dataType:'text'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'befCargoCd',displayMode:'label',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'befCargoNm',displayMode:'label',textAlign:'left',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPathSeq',displayMode:'label',hidden:'true',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpSeq',displayMode:'label',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvZip',displayMode:'label',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptZip',displayMode:'label',hidden:'true',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'smQty',displayMode:'label',textAlign:'right',sortable:'true',readOnly:'true',dataType:'float',maxLength:'.1',displayFormat:'#,###.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'takeMobile',displayMode:'label',sortable:'true',readOnly:'true',dataType:'text',maxLength:'.1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'arvDtl',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'reqClntNo',displayMode:'label',hidden:'true',readOnly:'true',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column40',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column180',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column176',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column172',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sum_qty',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',displayFormat:'#,##0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sum_grossWt',displayMode:'label',textAlign:'right',expression:'sum(\'grossWt\')',displayFormat:'#,###.##0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'sum_cbm',displayMode:'label',textAlign:'right',expression:'sum(\'cbm\')',displayFormat:'#,###.##0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column156',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column152',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column148',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column144',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column140',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column136',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_maxAmt',displayMode:'label',textAlign:'right',expression:'sum(\'maxAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_minAmt',displayMode:'label',textAlign:'right',expression:'sum(\'minAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_adptAmt',displayMode:'label',textAlign:'right',expression:'sum(\'adptAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column116',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_scAmt',displayMode:'label',textAlign:'right',expression:'sum(\'scAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column108',displayMode:'label',textAlign:'right',displayFormat:'#,##0.0',maxByteLength:'0',maxLength:'.1',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_cmpstcrgMargin',displayMode:'label',textAlign:'right',expression:'sum(\'cmpstcrgMargin\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column100',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column308',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column304',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column300',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column296',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column292',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column288',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column284',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column280',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column276',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column272',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column268',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column264',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column260',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column256',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column252',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column248',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column244',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column240',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column236',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column232',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column228',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sum_smQty',displayMode:'label',textAlign:'right',expression:'sum(\'smQty\')',maxLength:'.1',displayFormat:'#,###.0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column220',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column216',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column312',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit_nrm',style:'display:none;',type:'button','ev:onclick':'scwin.f_SaveNrm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'규격수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_usablecar',style:'display:none;',type:'button','ev:onclick':'scwin.f_usablecar'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'유입차량'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print1',style:'',type:'button','ev:onclick':'scwin.f_print'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더SHEET'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_openTrans',style:'',type:'button','ev:onclick':'scwin.f_openTrans'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출도착등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_addTpchsTrf',style:'',type:'button','ev:onclick':'scwin.f_openBulkTpchsTrfPopup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입요율'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_mb',style:'display:none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'MB오더전환'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_allocate_car',style:'display:none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량배정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save_allocate',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Open',style:'',type:'button','ev:onclick':'scwin.f_openTransVolume'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물량공개'}]}]}]}]}]}]}]}]}]})