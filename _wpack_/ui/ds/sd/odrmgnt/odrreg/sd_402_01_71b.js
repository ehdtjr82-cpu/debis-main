/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_71b.xml 420169 7845d1289a0b7d8596ff9a2fe5075d3d8682daabfad3d3cbe4930219f1bd8380 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrSize',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrType',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrFE',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBO',saveRemovedData:'true','ev:ondataload':'scwin.ds_cntrBO_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndOdrNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'odrNo',name:'odrNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cndBlNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'cvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpClsCd',name:'impExpClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'mrn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'msn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'hsn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hblNo',name:'hblNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'odrKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfClsCd',name:'selfClsCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outCommInfoByBlNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_outCommInfoByBlNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outCntrInfoByCvsslMgntNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_outCntrInfoByCvsslMgntNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impWt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndCtrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'ctrtClntNo',name:'ctrtClntNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bizDivCntrYn',name:'bizDivCntrYn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bizDivBukYn',name:'bizDivBukYn'}},{T:1,N:'w2:key',A:{dataType:'text',id:'odrKndCd',name:'odrKndCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'impExpDomesticClsCd',name:'impExpDomesticClsCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_ctrtNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'ctrtNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntPicNm',name:'clntPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtStDt',name:'ctrtStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtEndDt',name:'ctrtEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'taxnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTrgtClntYn',name:'mgntTrgtClntYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNo',name:'empNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNm',name:'empNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'allocRt',name:'allocRt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtDistrictCd',name:'ctrtDistrictCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'crcCd'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2',saveRemovedData:'true','ev:ondataload':'scwin.ds_ctrtNo2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배정비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_reqClntNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'clntNm'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_bilgClntNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'clntNm'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_realMchtClntNo',saveRemovedData:'true','ev:oninsertrow':'scwin.ds_realMchtClntNo_oninsertrow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'clntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'clntNm'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condCntrBasisInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'odrKndCd',name:'odrKndCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'selfClsCd',name:'selfClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cntrNo',name:'cntrNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dptWrkPlCd',name:'dptWrkPlCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvWrkPlCd',name:'arvWrkPlCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:key',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportDtm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impSealNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impDangerCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impTemper',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impWt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impOverLength',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impOverHeight',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impOverWidTh',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impMgsetYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impCntrWrkKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impTransCondCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impCntrWtCondCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'xrayLupTrgtYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expSealNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expDangerCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expTemper',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expWt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expOverLength',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expOverHeight',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expOverWidth',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expMgsetYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expCntrWrkKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expTransCondCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expCntrWtCondCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrStsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stsChgDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'destPortCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offRtrnClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'leaseYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'socYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lblock',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lbay',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lrow',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ltier',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transRsltsSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatOdrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinHh',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinGatelogNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'legalAccfCargoDdCnt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfAccfCargoDdCnt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoProcMthdCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strRateOutbrYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndoutInspRateOutbrYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'frzMonOutbrYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'extdDueDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'extdMgntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntClsYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fillerDesc',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'trmntOdrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dryYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expDryYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impDryYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStHh',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndHh',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnHh',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'completeYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'completeDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'completeHh',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'temper',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrWtCondCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfsInMthdCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfsCmpndCgshfYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrInsYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deprtPortYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'destPortNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrStsNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDelYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrCompleteYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrModDtm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useOdrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'launchWrkNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'maxArrvlPortDtm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detentionYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'damageYn',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'true','ev:onbeforecelldatachange':'scwin.ds_odrInfo_onbeforecelldatachange','ev:oncelldatachange':'scwin.ds_odrInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'ctrtNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtClntNo',name:'ctrtClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNo',name:'reqClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNo',name:'bilgClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'realMchtClntNo',name:'realMchtClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'repClntNo',name:'repClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dmndNo',name:'dmndNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgLodeptCd',name:'bilgLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellLodeptCd',name:'sellLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlCd',name:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDtl',name:'dptDtl'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDtl',name:'arvDtl'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellYn',name:'sellYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adptExchRtDt',name:'adptExchRtDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrDsgYn',name:'cntrDsgYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'odrKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCargoClsCd',name:'transCargoClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpDomesticClsCd',name:'impExpDomesticClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfClsCd',name:'selfClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCondCd',name:'transCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWtCondCd',name:'cntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chClsCd',name:'chClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPatternCd',name:'wrkPatternCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coshippingYn',name:'coshippingYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineCd',name:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shpCoClntNo',name:'shpCoClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortCd',name:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bondTransExpireDt',name:'bondTransExpireDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mcomAssgnClsCd',name:'mcomAssgnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntMgntNo',name:'clntMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'onPicNm',name:'onPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'onPicTelNo',name:'onPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offPicNm',name:'offPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offPicTelNo',name:'offPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrPicNm',name:'odrPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrPicTelNo',name:'odrPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'salesPicNm',name:'salesPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'salesPicTelNo',name:'salesPicTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCoNm',name:'transCoNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transCoTelNo',name:'transCoTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'cvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tsCvsslMgntNo',name:'tsCvsslMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'vsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'portcnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tsVsslCd',name:'tsVsslCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tsPortcnt',name:'tsPortcnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tsPortCd',name:'tsPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'taxnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tplCoClsCd',name:'tplCoClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrClsCd',name:'odrClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'smsSndYn',name:'smsSndYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sndDt',name:'sndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sndHh',name:'sndHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrDcsnYn',name:'odrDcsnYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrDcsnDt',name:'odrDcsnDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrDcsnHh',name:'odrDcsnHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCompleteYn',name:'odrCompleteYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCompleteDt',name:'odrCompleteDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCompleteHh',name:'odrCompleteHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCnclYn',name:'odrCnclYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCnclDt',name:'odrCnclDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCnclHh',name:'odrCnclHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCnclItemCd',name:'odrCnclItemCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCnclRsn',name:'odrCnclRsn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrDelYn',name:'odrDelYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrDelDt',name:'odrDelDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrDelHh',name:'odrDelHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperOdrNo',name:'upperOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regBranCd',name:'regBranCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrDt',name:'odrDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsCreatYn',name:'pchsCreatYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgOdrKndCd',name:'bilgOdrKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'closeDt',name:'closeDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'closeHh',name:'closeHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarPicId',name:'alloccarPicId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'autoOdrYn',name:'autoOdrYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'modDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndNm',name:'odrKndNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtClntNm',name:'ctrtClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNm',name:'reqClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNm',name:'bilgClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'realMchtClntNm',name:'realMchtClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dmndNm',name:'dmndNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgLodeptNm',name:'bilgLodeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellLodeptNm',name:'sellLodeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlNm',name:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlNm',name:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineNm',name:'lineNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shpCoClntNm',name:'shpCoClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortNm',name:'destPortNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'vsslNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portNm',name:'portNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkLobranCd',name:'dptWrkLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkLobranNm',name:'dptWrkLobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkLobranCd',name:'arvWrkLobranCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkLobranNm',name:'arvWrkLobranNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'internalSellLodeptCd',name:'internalSellLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'internalSellLodeptNm',name:'internalSellLodeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrWrkPathCnt',name:'odrWrkPathCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrRequestCnt',name:'odrRequestCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarPicNm',name:'alloccarPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrCtrlClsCd',name:'odrCtrlClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'demDt',name:'demDt'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvOprCd',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvTmlVsslPortcnt',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNonm',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispPchsClsCd',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptOprCd',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptTmlVsslPortcnt',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoclsCd',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBlNo',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprDoNo',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprImpexpClsCd',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPchsPrflosAmt',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdAmt',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totStdPrflosAmt',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortNm',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name135',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_commInfo_ondataload','ev:oninsertrow':'scwin.ds_commInfo_oninsertrow','ev:onremoverow':'scwin.ds_commInfo_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commSeq',name:'commSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'commCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'commNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qtyUnitCd',name:'qtyUnitCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'unitCd',name:'unitCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dryYn',name:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlCd',name:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cstmrMgntNo',name:'cstmrMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paletYn',name:'paletYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coCd',name:'coCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizLongCd',name:'bizLongCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cnclYn',name:'cnclYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeYn',name:'completeYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeDt',name:'completeDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeHh',name:'completeHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'modDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkRsltsNo',name:'wrkRsltsNo'}},{T:1,N:'w2:column',A:{id:'cbm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputQty',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathYn',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'name43',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_cntrInfo_ondataload','ev:oninsertrow':'scwin.ds_cntrInfo_oninsertrow','ev:onremoverow':'scwin.ds_cntrInfo_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cntrSeq',name:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'arrvlportDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlCd',name:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellLodeptCd',name:'sellLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'number',id:'sellYn',name:'sellYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'temper'}},{T:1,N:'w2:column',A:{dataType:'number',id:'dryYn',name:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWtCondCd',name:'cntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'number',id:'dcsnYn',name:'dcsnYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnDt',name:'dcsnDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnHh',name:'dcsnHh'}},{T:1,N:'w2:column',A:{dataType:'number',id:'completeYn',name:'completeYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeDt',name:'completeDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeHh',name:'completeHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cfsInMthdCd',name:'cfsInMthdCd'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cfsCmpndCgshfYn',name:'cfsCmpndCgshfYn'}},{T:1,N:'w2:column',A:{dataType:'number',id:'cntrInsYn',name:'cntrInsYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'modDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impSealNo',name:'impSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impDangerCd',name:'impDangerCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impTemper',name:'impTemper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impOverLength',name:'impOverLength'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impOverHeight',name:'impOverHeight'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impOverWidTh',name:'impOverWidTh'}},{T:1,N:'w2:column',A:{dataType:'number',id:'impMgsetYn',name:'impMgsetYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impCntrWrkKndCd',name:'impCntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impTransCondCd',name:'impTransCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impCntrWtCondCd',name:'impCntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'number',id:'xrayLupTrgtYn',name:'xrayLupTrgtYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expSealNo',name:'expSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expDangerCd',name:'expDangerCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expTemper',name:'expTemper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expOverLength',name:'expOverLength'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expOverHeight',name:'expOverHeight'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expOverWidth',name:'expOverWidth'}},{T:1,N:'w2:column',A:{dataType:'number',id:'expMgsetYn',name:'expMgsetYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expCntrWrkKndCd',name:'expCntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expTransCondCd',name:'expTransCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expCntrWtCondCd',name:'expCntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpClsCd',name:'impExpClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrStsCd',name:'cntrStsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stsChgDt',name:'stsChgDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortCd',name:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offRtrnClsCd',name:'offRtrnClsCd'}},{T:1,N:'w2:column',A:{dataType:'number',id:'leaseYn',name:'leaseYn'}},{T:1,N:'w2:column',A:{dataType:'number',id:'socYn',name:'socYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'term',name:'term'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currPosCd',name:'currPosCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineCd',name:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shpCoClntNo',name:'shpCoClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lblock',name:'lblock'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lbay',name:'lbay'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lrow',name:'lrow'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ltier',name:'ltier'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkIndictNo',name:'wrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'number',id:'transRsltsSeq',name:'transRsltsSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'creatOdrNo',name:'creatOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trmntOdrNo',name:'trmntOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinDt',name:'crryinDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinHh',name:'crryinHh'}},{T:1,N:'w2:column',A:{dataType:'number',id:'legalAccfCargoDdCnt',name:'legalAccfCargoDdCnt'}},{T:1,N:'w2:column',A:{dataType:'number',id:'selfAccfCargoDdCnt',name:'selfAccfCargoDdCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cargoProcMthdCd',name:'cargoProcMthdCd'}},{T:1,N:'w2:column',A:{dataType:'number',id:'strRateOutbrYn',name:'strRateOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'number',id:'sndoutInspRateOutbrYn',name:'sndoutInspRateOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'number',id:'frzMonOutbrYn',name:'frzMonOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bookingNo',name:'bookingNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdDueDt',name:'extdDueDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdMgntNo',name:'extdMgntNo'}},{T:1,N:'w2:column',A:{dataType:'number',id:'mgntClsYn',name:'mgntClsYn'}},{T:1,N:'w2:column',A:{dataType:'number',id:'impDryYn',name:'impDryYn'}},{T:1,N:'w2:column',A:{dataType:'number',id:'expDryYn',name:'expDryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrModDtm',name:'cntrModDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlNm',name:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlNm',name:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portNm',name:'portNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currPosNm',name:'currPosNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortNm',name:'destPortNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkRsltsNo',name:'wrkRsltsNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWrkClsCd',name:'cntrWrkClsCd'}},{T:1,N:'w2:column',A:{id:'chk',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expWt',name:'name98',dataType:'number'}},{T:1,N:'w2:column',A:{id:'impWt',name:'name99',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'name100',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_blInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'mrn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'msn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'hsn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'blNo'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bookingInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_bookingInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineCd',name:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bookingNo',name:'bookingNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_sellInfo_ondataload','ev:oninsertrow':'scwin.ds_sellInfo_oninsertrow','ev:onremoverow':'scwin.ds_sellInfo_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgCommInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commSeq',name:'commSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'commCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'commNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qtyUnitCd',name:'qtyUnitCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'unitCd',name:'unitCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dryYn',name:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlCd',name:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cstmrMgntNo',name:'cstmrMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paletYn',name:'paletYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coCd',name:'coCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizLongCd',name:'bizLongCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cnclYn',name:'cnclYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeYn',name:'completeYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeDt',name:'completeDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeHh',name:'completeHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'modDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkRsltsNo',name:'wrkRsltsNo'}},{T:1,N:'w2:column',A:{id:'cbm',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commStsCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingPsblYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputQty',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntSeq',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathYn',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplArvNmCmpy',name:'name43',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgCntrInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSeq',name:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDtm',name:'arrvlportDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlCd',name:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellLodeptCd',name:'sellLodeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellYn',name:'sellYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dryYn',name:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWtCondCd',name:'cntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnYn',name:'dcsnYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnDt',name:'dcsnDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnHh',name:'dcsnHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeYn',name:'completeYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeDt',name:'completeDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeHh',name:'completeHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cfsInMthdCd',name:'cfsInMthdCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cfsCmpndCgshfYn',name:'cfsCmpndCgshfYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrInsYn',name:'cntrInsYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'modDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impSealNo',name:'impSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impDangerCd',name:'impDangerCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impTemper',name:'impTemper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impOverLength',name:'impOverLength'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impOverHeight',name:'impOverHeight'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impOverWidTh',name:'impOverWidTh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impMgsetYn',name:'impMgsetYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impCntrWrkKndCd',name:'impCntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impTransCondCd',name:'impTransCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impCntrWtCondCd',name:'impCntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'xrayLupTrgtYn',name:'xrayLupTrgtYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expSealNo',name:'expSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expDangerCd',name:'expDangerCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expTemper',name:'expTemper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expOverLength',name:'expOverLength'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expOverHeight',name:'expOverHeight'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expOverWidth',name:'expOverWidth'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expMgsetYn',name:'expMgsetYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expCntrWrkKndCd',name:'expCntrWrkKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expTransCondCd',name:'expTransCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expCntrWtCondCd',name:'expCntrWtCondCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpClsCd',name:'impExpClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrStsCd',name:'cntrStsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stsChgDt',name:'stsChgDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortCd',name:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offRtrnClsCd',name:'offRtrnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'leaseYn',name:'leaseYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'socYn',name:'socYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'term',name:'term'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currPosCd',name:'currPosCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lineCd',name:'lineCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shpCoClntNo',name:'shpCoClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lblock',name:'lblock'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lbay',name:'lbay'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lrow',name:'lrow'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ltier',name:'ltier'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkIndictNo',name:'wrkIndictNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transRsltsSeq',name:'transRsltsSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'creatOdrNo',name:'creatOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trmntOdrNo',name:'trmntOdrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinDt',name:'crryinDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crryinHh',name:'crryinHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'legalAccfCargoDdCnt',name:'legalAccfCargoDdCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfAccfCargoDdCnt',name:'selfAccfCargoDdCnt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cargoProcMthdCd',name:'cargoProcMthdCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'strRateOutbrYn',name:'strRateOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sndoutInspRateOutbrYn',name:'sndoutInspRateOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'frzMonOutbrYn',name:'frzMonOutbrYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bookingNo',name:'bookingNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdDueDt',name:'extdDueDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extdMgntNo',name:'extdMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClsYn',name:'mgntClsYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impDryYn',name:'impDryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expDryYn',name:'expDryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrModDtm',name:'cntrModDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlNm',name:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlNm',name:'arvWrkPlNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portNm',name:'portNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currPosNm',name:'currPosNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortNm',name:'destPortNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkRsltsNo',name:'wrkRsltsNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWrkClsCd',name:'cntrWrkClsCd'}},{T:1,N:'w2:column',A:{id:'chk',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expWt',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impWt',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'name100',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgBlInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'mrn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'msn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'hsn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'blNo'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deleteOrderCond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'odrKndCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'impExpDomesticClsCd',name:'impExpDomesticClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selfClsCd',name:'selfClsCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condContainerAdditionSelling',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerAdditionSelling',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commQtyCalByCommSizTyp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commSeq',name:'commSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'commCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'commNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qtyUnitCd',name:'qtyUnitCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'unitCd',name:'unitCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dryYn',name:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStDt',name:'wrkStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'wrkStHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndDt',name:'wrkEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'wrkEndHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptWrkPlCd',name:'dptWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvWrkPlCd',name:'arvWrkPlCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cstmrMgntNo',name:'cstmrMgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paletYn',name:'paletYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'blNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coCd',name:'coCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizLongCd',name:'bizLongCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cnclYn',name:'cnclYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'rmk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeYn',name:'completeYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeDt',name:'completeDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'completeHh',name:'completeHh'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'modDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkRsltsNo',name:'wrkRsltsNo'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSeq',name:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expSealNo',name:'expSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currPosCd',name:'currPosCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortCd',name:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'term',name:'term'}},{T:1,N:'w2:column',A:{dataType:'text',id:'leaseYn',name:'leaseYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'socYn',name:'socYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offRtrnClsCd',name:'offRtrnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dryYn',name:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWtCondCd',name:'cntrWtCondCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSeq',name:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrNo',name:'cntrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSizCd',name:'cntrSizCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrTypCd',name:'cntrTypCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fullEmptyClsCd',name:'fullEmptyClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expSealNo',name:'expSealNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currPosCd',name:'currPosCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portCd',name:'portCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'destPortCd',name:'destPortCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'term',name:'term'}},{T:1,N:'w2:column',A:{dataType:'text',id:'leaseYn',name:'leaseYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'socYn',name:'socYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'offRtrnClsCd',name:'offRtrnClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'temper',name:'temper'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dryYn',name:'dryYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrWtCondCd',name:'cntrWtCondCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderallocarpicnm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'odrNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntrSeq',name:'cntrSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shtlAlloccarPicId',name:'shtlAlloccarPicId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shtlAlloccarPicNm',name:'shtlAlloccarPicNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'regId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'regDtm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'modId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'modDtm'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveClntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'contractNumber',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'cd',E:[{T:4,cdata:'C2'}]},{T:1,N:'cdNm',E:[{T:4,cdata:'컨테이너 수입일반'}]},{T:1,N:'fltrCd2',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndCtrtNo","key":"IN_DS1"},{"action":"modified","id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveCtrtNo_submitdone',action:'/ds.sd.odrmgnt.odrreg.RetrieveContractNumberCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndCtrtNo","key":"IN_DS1"},{"action":"modified","id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveCtrtNo2_submitdone',action:'/ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveClntNo',method:'post',mediatype:'application/json',ref:'data:json,["dma_retrieveClntNo",{"action":"modified","id":"ds_reqClntNo","key":"OUT_DS1"},{"action":"modified","id":"ds_bilgClntNo","key":"OUT_DS2"},{"action":"modified","id":"ds_realMchtClntNo","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_bilgClntNo","key":"OUT_DS2"},{"id":"ds_realMchtClntNo","key":"OUT_DS3"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RetrieveContractBasisCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBasisInfo',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condCntrBasisInfo","key":"IN_DS1"},{"action":"modified","id":"ds_cntrBasisInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrBasisInfo","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBLContainer',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingContainerListCMD.do',ref:'data:json,[{"id":"ds_cndBlNo","key":"IN_DS1"},{"action":"modified","id":"ds_outCommInfoByBlNo","key":"OUT_DS1"},{"action":"modified","id":"ds_outCntrInfoByCvsslMgntNo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_outCommInfoByBlNo","key":"OUT_DS1"},{"id":"ds_outCntrInfoByCvsslMgntNo","key":"OUT_DS2"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBLContainer2',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RetrieveBillOfLadingContainerListCMD.do',ref:'data:json,[{"id":"ds_cndBlNo","key":"IN_DS1"},{"action":"modified","id":"ds_outCommInfoByBlNo","key":"OUT_DS1"},{"action":"modified","id":"ds_cntrInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_outCommInfoByBlNo","key":"OUT_DS1"},{"id":"ds_cntrInfo","key":"OUT_DS2"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cndOdrNo","key":"IN_DS1"},{"action":"modified","id":"ds_odrInfo","key":"OUT_DS1"},{"action":"modified","id":"ds_blInfo","key":"OUT_DS2"},{"action":"modified","id":"ds_commInfo","key":"OUT_DS3"},{"action":"modified","id":"ds_cntrInfo","key":"OUT_DS4"},{"action":"modified","id":"ds_ctrtNo","key":"OUT_DS5"},{"action":"modified","id":"ds_reqClntNo","key":"OUT_DS6"},{"action":"modified","id":"ds_bilgClntNo","key":"OUT_DS7"},{"action":"modified","id":"ds_realMchtClntNo","key":"OUT_DS8"},{"action":"modified","id":"ds_sellInfo","key":"OUT_DS9"},{"action":"modified","id":"ds_bookingInfo","key":"OUT_DS10"},{"action":"modified","id":"ds_orderallocarpicnm","key":"OUT_DS11"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_blInfo","key":"OUT_DS2"},{"id":"ds_commInfo","key":"OUT_DS3"},{"id":"ds_cntrInfo","key":"OUT_DS4"},{"id":"ds_ctrtNo","key":"OUT_DS5"},{"id":"ds_reqClntNo","key":"OUT_DS6"},{"id":"ds_bilgClntNo","key":"OUT_DS7"},{"id":"ds_realMchtClntNo","key":"OUT_DS8"},{"id":"ds_sellInfo","key":"OUT_DS9"},{"id":"ds_bookingInfo","key":"OUT_DS10"},{"id":"ds_orderallocarpicnm","key":"OUT_DS11"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerOrderContractCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_regist',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified","id":"ds_orgCommInfo","key":"IN_DS2"},{"action":"modified","id":"ds_orgCntrInfo","key":"IN_DS3"},{"action":"modified","id":"ds_orgBlInfo","key":"IN_DS4"},{"action":"modified","id":"ds_bookingInfo","key":"IN_DS5"},{"action":"modified","id":"ds_commQtyCalByCommSizTyp","key":"IN_DS6"},{"action":"modified","id":"dma_cndOdrNo","key":"OUT_DS1"},{"action":"modified","id":"ds_sellInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_cndOdrNo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RegistGeneralContainerOrderCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_regist2',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_orderallocarpicnm","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RegistOrderAllocarPicnmCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_update',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.ConfirmOrderCMD.do',ref:'data:json,{"id":"ds_odrInfo","key":"IN_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_update2',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.UpdateGeneralContainerOrderCMD.do',ref:'data:json,[{"id":"ds_odrInfo","key":"IN_DS1"},{"action":"modified","id":"ds_commInfo","key":"IN_DS2"},{"action":"modified","id":"ds_cntrInfo","key":"IN_DS3"},{"action":"modified","id":"ds_blInfo","key":"IN_DS4"},{"action":"modified","id":"ds_bookingInfo","key":"IN_DS5"},{"action":"modified","id":"ds_commQtyCalByCommSizTyp","key":"IN_DS6"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteOrderCond',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_deleteOrderCond","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_deleteOrderCond_submitdone',action:'/ds.sd.odrmgnt.odrreg.DeleteContainerOrderCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveContainerAdditionSelling',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condContainerAdditionSelling","key":"IN_DS1"},{"action":"modified","id":"ds_containerAdditionSelling","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_containerAdditionSelling","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',action:'/ds.sd.odrmgnt.odrreg.RetrieveContainerAdditionSellingCMD.do'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrSize',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP101',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_cntrSize","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrType',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP102',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_cntrType","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrFE',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP171',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_cntrFE","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBO',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP196',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_cntrBO","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.odrKndCd = ""; //오더종류코드 - 오더종류콤보 onSelChange이벤트에서 값 세팅
scwin.impExpClsCd = ""; //수출입내수구분코드 - 오더종류콤보 onSelChange이벤트에서 값 세팅
scwin.statusFlag = ""; //수정/등록 Flag(C:Regist, U:Update)
scwin.chkInputQtyYn = "N"; //컨테이너 입력 여부 - 수입본선인 경우, 본선관리번호로 컨테이너정보 가져왔을 때 컨테이너정보프로세스(sbm_retrieveCntrBasisInfo)를 태우지 않기 위한 flag
scwin.retrieveYn = "N"; //조회여부
scwin.btnPos = ""; //어느 버튼을 클릭했는지 체크(A:AddRow, D:DeleteRow, U:UndoRow)
scwin.orgCommVal = ""; //품명그리드에서 size,type,FE콤보에서 dropdown이벤트 발생시 값세팅하기 위한 변수, 이 변수를 closeUp이벤트에서 사용
scwin.bookingNoYn = "N"; //bookingNo입력 여부
scwin.bkCommInfoRows = 0; //오더번호로 조회한 후, bookingNo에 해당하는 품명정보 row수
scwin.selfClsCd = ""; //자가구분코드 - 자가구분콤보 onSelChange이벤트에서 값 세팅
scwin.assgnWhouseCd = ""; //수입일반인 경우 : bl팝업에서 배정구분코드의 첫째자리가 'B'인 경우, 배정창고코드를 가져온다.
scwin.assgnWhouseNm = ""; //수입일반인 경우 : bl팝업에서 배정구분코드의 첫째자리가 'B'인 경우, 배정창고코드명을 가져온다.
scwin.mgntTrgtClntYn = 0; //거래처 관리대상여부
scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
scwin.odrCtrlClsCd = ""; //TS구분 -01적하,02비적하
scwin.cntrLoadGubun = "";
scwin.strCurDate = null;
scwin.lobranCd = null;
scwin.userNm = null;
scwin.initCnt = 0;
scwin.focusObj = null;

/**
 * event
 * @name onpageload
 * @description
 */
scwin.onpageload = function () {
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd") ?? "";
  scwin.userNm = $c.data.getMemInfo($p, "userNm") ?? "";
  scwin.userMpNo = $c.data.getMemInfo($p, "userMpNo") ?? "";
  scwin.f_showMandatoryMark("S");
  let codeOptions = [{
    grpCd: "SD133",
    compID: "gr_cntrInfo:offRtrnClsCd"
  }, {
    grpCd: "SD102",
    compID: "gr_cntrInfo:cntrWtCondCd"
  }, {
    grpCd: "SD165",
    compID: "gr_cntrInfo:cntrWrkClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.onLoadCommonCode);
  let param = [{
    compID: "lc_mcomAssgnClsCd",
    method: "getCodeList",
    param1: "SD144",
    param2: [1, 3],
    param4: [1, 3]
  }];
  $c.data.setDsCommonUtil($p, param, scwin.onSetDsCommonUtilCompleted);
  scwin.chkInitCnt();
};

/**
 * event
 * @name onSetDsCommonUtilCompleted
 * @description
 */
scwin.onSetDsCommonUtilCompleted = function () {
  dlt_dsCommonUtil_lc_mcomAssgnClsCd.setRowJSON(0, {
    "code": "",
    "name": "선택",
    "etc1": "",
    "etc2": ""
  }, false);
  scwin.chkInitCnt();
};

/**
 * event
 * @name onLoadCommonCode
 * @description
 */
scwin.onLoadCommonCode = function () {
  scwin.chkInitCnt();
};

/**
* event
* @name onUdcCompleted
* @description UDC 초기화 후 이벤트
*/
scwin.onUdcCompleted = function () {
  $p.parent().tac_mxTab.activateTab(1);
  scwin.chkInitCnt();
};

/**
 * method
 * @name chkInitCnt
 * @description
 */
scwin.chkInitCnt = function () {
  if (++scwin.initCnt >= 4) {
    scwin.initObj();
  }
};

/**
 * method
 * @name initObj
 * @description
 */
scwin.initObj = async function () {
  scwin.f_retrieveGridLookup();
  scwin.f_clearDataSet();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableAllBtn($p);
  $c.gus.cfDisableBtnOnly($p, [btn_update, btn_delete]);
  $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2, btn_updateCntrInfo, btn_chgCntrNoInfo, btn_updateRepWrkInfo, btn_dcSc, btn_unitySelling, btn_copyOdr, btn_tmlEdiIfno]);
  scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화

  scwin.f_setActiveGrid("E"); //그리드활성화
  acb_odrKndCd.focus();
  $c.gus.cfInitObjects($p, [grp_cndArea, grp_odrInfoArea, hid_chkReterieve]);
  $c.gus.cfInitHidVal($p, [grp_odrInfoArea]);
  scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
  scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
  scwin.statusFlag = "C"; //수정등록 flag

  hid_chkReterieve.setValue("");
  hid_odrNo.setValue("");
  ed_odrNo.setValue("");
  await scwin.f_setSellAndBilgDept("A");
  scwin.bkCommInfoRows = 0;
  scwin.bookingNoYn = "N";
  scwin.assgnWhouseCd = "";
  scwin.assgnWhouseNm = "";
  scwin.odrKndCd = "C2"; //오더종류코드
  scwin.impExpClsCd = "I";
  scwin.f_setDefaultValue(); //기본정보세팅
  hid_chkMode.setValue("create");
  if (ed_sellLodeptCd.getValue().substring(0, 2) == "6A" || ed_sellLodeptCd.getValue() == null || ed_sellLodeptCd.getValue() == "") {
    $c.gus.cfEnableObj($p, ed_alloccarPicNm1, false); //ed_alloccarPicNm1
    $c.gus.cfEnableObj($p, ed_alloccarPicNm2, false); //ed_alloccarPicNm2
    $c.gus.cfEnableObj($p, ed_alloccarPicNm3, false); //ed_alloccarPicNm3
    $c.gus.cfEnableObj($p, ed_alloccarPicNm4, false); //ed_alloccarPicNm4
    $c.gus.cfEnableObj($p, ed_alloccarPicNm5, false); //ed_alloccarPicNm5
  } else {
    $c.gus.cfEnableObj($p, ed_alloccarPicNm1, true); //ed_alloccarPicNm1
    $c.gus.cfEnableObj($p, ed_alloccarPicNm2, true); //ed_alloccarPicNm2
    $c.gus.cfEnableObj($p, ed_alloccarPicNm3, true); //ed_alloccarPicNm3
    $c.gus.cfEnableObj($p, ed_alloccarPicNm4, true); //ed_alloccarPicNm4
    $c.gus.cfEnableObj($p, ed_alloccarPicNm5, true); //ed_alloccarPicNm5
  }
  $c.gus.cfEnableObj($p, ed_lineCd, false); //Line코드
  $c.gus.cfEnableObj($p, ed_lineNm, false); //Line명
  $c.gus.cfDisableObjects($p, [btn_lineCd]); //Line팝업이미지
  $c.gus.cfDisableBtnOnly($p, [btn_addRow1, btn_deleteRow1, btn_undoRow1]);
  $c.gus.cfEnableObj($p, ed_vsslCd, false);
  $c.gus.cfEnableObj($p, ed_vsslNm, false);
  $c.gus.cfDisableObjects($p, [btn_vsslCd]);
  $c.gus.cfEnableObj($p, ed_portcnt, false);
};

/**
 * method
 * @name f_FieldClear
 * @description 조회조건 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, grp_cndArea);
};

/**
 * method
 * @name f_setTabOrderInfo
 * @description Tab 설정 : Tab 페이지의 오더 정보를 설정
 */
scwin.f_setTabOrderInfo = function () {
  const odrNo = dma_cndOdrNo.get("odrNo");
  $p.parent().hid_odrNo.setValue(odrNo);
};

/**
 * method
 * @name f_setActiveGrid
 * @description 그리드활성/비활성화
 */
scwin.f_setActiveGrid = function (gubun) {
  if (gubun == "E") {
    //활성
    scwin.setGrCommInfoReadOnly(false);
    scwin.setGrCntrInfoReadOnly(false);
  } else if (gubun == "D") {
    //비활성
    scwin.setGrCommInfoReadOnly(true);
    scwin.setGrCntrInfoReadOnly(true);
  }
};

/**
 * method
 * @name f_displayGridColumn
 * @description grid 여러 컬럼 세팅 함수
 */
scwin.f_displayGridColumn = function (gridObject, columnArray, feature, value) {
  if (feature !== "edit") {
    return;
  }
  let readOnly = value === "none" ? true : false;
  for (let colid of columnArray) {
    gridObject.setColumnReadOnly(colid, readOnly);
  }
};

/**
 * method
 * @name f_setActiveImgPopUp
 * @description 팝업버튼활성/비활성화
 */
scwin.f_setActiveImgPopUp = function (gubun) {
  if (gubun == "E") {
    //활성
    $c.gus.cfEnableObjects($p, [btn_ctrtClntNo, btn_reqClntNo, btn_bilgClntNo, btn_realMchtClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_cvsslMgntNo, btn_vsslCd, btn_tsCvsslMgntNo, btn_tsVsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd, btn_destPortCd, btn_blNo, btn_alloccarPicId]);
  } else if (gubun == "D") {
    //비활성
    $c.gus.cfDisableObjects($p, [btn_ctrtClntNo, btn_reqClntNo, btn_bilgClntNo, btn_realMchtClntNo, btn_sellLodeptCd, btn_bilgLodeptCd, btn_lineCd, btn_cvsslMgntNo, btn_vsslCd, btn_tsCvsslMgntNo, btn_tsVsslCd, btn_dptWrkPlCd, btn_arvWrkPlCd, btn_destPortCd, btn_blNo, btn_alloccarPicId]);
  }
};

/**
 * method
 * @name f_clearDataSet
 * @description 데이터셋 지우기
 */
scwin.f_clearDataSet = function () {
  dma_cndCtrtNo.setEmptyValue();
  ds_ctrtNo.removeAll();
  ds_ctrtNo.reform();
  scwin.clearReqClntNo();
  scwin.clearBilgClntNo();
  scwin.clearRealMchtClntNo();
  ds_commInfo.removeAll();
  ds_commInfo.reform();
  ds_cntrInfo.removeAll();
  ds_cntrInfo.reform();
  ds_blInfo.removeAll();
  ds_blInfo.reform();
  ds_bookingInfo.removeAll();
  ds_bookingInfo.reform();
  ds_sellInfo.removeAll();
  ds_sellInfo.reform();
  ds_deleteOrderCond.removeAll();
  ds_deleteOrderCond.reform();
  ds_orgCommInfo.removeAll();
  ds_orgCommInfo.reform();
  ds_orgCntrInfo.removeAll();
  ds_orgCntrInfo.reform();
  ds_orgBlInfo.removeAll();
  ds_orgBlInfo.reform();
  ds_commQtyCalByCommSizTyp.removeAll();
  ds_commQtyCalByCommSizTyp.reform();
  //검색조건 - 오더번호
  dma_cndOdrNo.setEmptyValue();
  //오더정보
  ds_odrInfo.removeAll();
  ds_odrInfo.reform();
  ds_odrInfo.insertRow();
  ds_odrInfo.setRowPosition(0);
  scwin.f_setHidValues(2);
};

/**
 * method
 * @name clearReqClntNo
 * @description 요청처 데이터셋 지우기
 */
scwin.clearReqClntNo = function (init = true) {
  lc_reqClntNm.setValue("");
  ds_reqClntNo.removeAll();
  ds_reqClntNo.reform();
  if (init) {
    $c.gus.cfInitObjects($p, [ed_reqClntNo]);
    $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
  }
};

/**
 * method
 * @name clearBilgClntNo
 * @description 청구처 데이터셋 지우기
 */
scwin.clearBilgClntNo = function (init = true) {
  lc_bilgClntNm.setValue("");
  ds_bilgClntNo.removeAll();
  ds_bilgClntNo.reform();
  if (init) {
    $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
    $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
  }
};

/**
 * method
 * @name clearRealMchtClntNo
 * @description 실화주 데이터셋 지우기
 */
scwin.clearRealMchtClntNo = function () {
  lc_realMchtClntNm.setValue("");
  ds_realMchtClntNo.removeAll();
  ds_realMchtClntNo.reform();
  $c.gus.cfInitObjects($p, [ed_realMchtClntNo]);
  $c.gus.cfInitHidVal($p, [ed_realMchtClntNo]);
};

/**
 * method
 * @name f_set
 * @description 화면 onLoad시 초기 데이타 setting
 * gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
 * gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
 * 1.초기화,신규모드,오더종류변경되는 경우 : 오더기본정보 세팅(scwin.f_setDefaultValue()참조)
 */
scwin.f_set = async function (gubun1, gubun2) {
  switch (gubun1) {
    case "INIT":
      //초기화/신규
      if (gubun2 == "INIT" || gubun2 == "INIT2") {
        //초기화모드
        if (gubun2 == "INIT") {
          scwin.f_clearDataSet();
        } else {
          ed_odrNo.setValue("");
          lc_ctrtNo.setSelectedIndex(-1);
        }
        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfEnableBtnOnly($p, [btn_retrieve, btn_create, btn_create1]);
        $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2, btn_updateCntrInfo, btn_chgCntrNoInfo, btn_updateRepWrkInfo, btn_dcSc, btn_unitySelling, btn_copyOdr, btn_tmlEdiIfno]);
        scwin.f_setActiveImgPopUp("D"); //팝업버튼 비활성화
        scwin.f_setActiveGrid("D"); //그리드 비활성화
        $c.gus.cfInitObjects($p, [grp_cndArea, hid_chkReterieve], [grp_odrInfoArea]);
        $c.gus.cfInitHidVal($p, [grp_odrInfoArea]);
        $c.gus.cfInitObjects($p, acb_odrCtrlClsCd);
        scwin.odrCtrlClsCd = acb_odrCtrlClsCd.getValue();
        scwin.statusFlag = "C"; //수정등록 flag

        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
      } else if (gubun2 == "CREATE") {
        //신규모드
        scwin.f_clearDataSet();
        $c.gus.cfEnableKeyData($p);
        $c.gus.cfDisableKey($p);
        $c.gus.cfEnableAllBtn($p);
        $c.gus.cfDisableBtnOnly($p, [btn_update, btn_delete]);
        $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2, btn_updateCntrInfo, btn_chgCntrNoInfo, btn_updateRepWrkInfo, btn_dcSc, btn_unitySelling, btn_copyOdr, btn_tmlEdiIfno]);
        scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화

        scwin.f_setActiveGrid("E"); //그리드활성화
        acb_odrKndCd.focus();
        $c.gus.cfInitObjects($p, [grp_cndArea, grp_odrInfoArea, hid_chkReterieve]);
        $c.gus.cfInitHidVal($p, [grp_odrInfoArea]);
        scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
        scwin.statusFlag = "C"; //수정등록 flag

        hid_chkReterieve.setValue("");
        hid_odrNo.setValue("");
        ed_odrNo.setValue("");
      }

      //매출부서, 청구부서 세팅
      await scwin.f_setSellAndBilgDept("A");
      scwin.bkCommInfoRows = 0;
      scwin.bookingNoYn = "N";
      scwin.assgnWhouseCd = "";
      scwin.assgnWhouseNm = "";
      //오더별 자가구분코드 LuxeCombo CBData 세팅
      scwin.f_setLuxeComboCBDataSelfClsCd(DsConstants.SELF_CLS_CD_MCOM_TRANS);
      if (gubun2 !== "INIT2") {
        scwin.f_setDefaultValue(); //기본정보세팅
      }
      hid_chkMode.setValue("create");
      break;
    case "RETRIEVE":
      {
        //조회모드
        let odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); //확정여부
        let odrWrkPathCnt = ds_odrInfo.getCellData(0, "odrWrkPathCnt"); //작업경로
        let odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); //삭제여부
        let odrCompleteYn = ds_odrInfo.getCellData(0, "odrCompleteYn"); //오더완료여부
        let autoOdrYn = 0; //자동오더여부
        if (!$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "autoOdrYn"))) {
          autoOdrYn = ds_odrInfo.getCellData(0, "autoOdrYn"); //자동오더여부
        }
        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfDisableObjects($p, [btn_updateCntrInfo, btn_chgCntrNoInfo, btn_updateRepWrkInfo]);
        $c.gus.cfEnableBtnOnly($p, [btn_retrieve, btn_create, btn_create1, btn_update]);
        scwin.f_setActiveImgPopUp("D"); //팝업버튼 비활성화
        scwin.f_setActiveGrid("D"); //그리드 활성화

        $c.gus.cfEnableObjects($p, [btn_dcSc, btn_unitySelling, btn_copyOdr, btn_tmlEdiIfno]);
        //수입일반이고, 도착지가 "43D"인 경우, 대표착지 팝업 활성시키기
        scwin.f_enableBtnUpdateRepWrkInfo();
        //수입본선일반이면  팝업 활성시키기
        scwin.f_enableBtnChgCntrNoInfo();
        //확정버튼 control
        if (autoOdrYn == 1) {
          //자동오더인 경우 모두 비활성
          $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2, btn_copyOdr]);
          $c.gus.cfDisableBtnOnly($p, [btn_update]);
        } else {
          if (odrWrkPathCnt > 0 && odrWrkPathCnt == ds_cntrInfo.getRowCount() && odrDelYn == 0) {
            // 작업경로가 지정된 경우
            if (odrDcsnYn != DsConstants.YN_YES) {
              // 오더가 확정되지 않은 경우
              $c.gus.cfEnableObjects($p, [btn_confirmOdr1, btn_confirmOdr2]);
              $c.gus.cfEnableBtnOnly($p, [btn_update]);
            } else {
              // 오더가 확정된 경우
              $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2]);
              $c.gus.cfEnableBtnOnly($p, [btn_update]);
              if (odrCompleteYn == DsConstants.YN_YES) {
                $c.gus.cfDisableBtnOnly($p, [btn_update]);
                $c.gus.cfDisableObjects($p, [btn_tmlEdiIfno]);
              }
            }
          } else {
            // 작업경로가 지정되지 않은 경우
            $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2]);
          }
        }
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
        break;
      }
    case "UPDATE":
      {
        //수정모드
        scwin.odrKndCd = acb_odrKndCd.getValue(); //오더종류
        let idx = acb_odrKndCd.getSelectedRow();
        scwin.impExpClsCd = ds_odrKndCd.getCellData(idx, "fltrCd2"); //수출입구분코드
        let cntrInfoRows = ds_cntrInfo.getRowCount();
        let odrDcsnYn = ds_odrInfo.getCellData(0, "odrDcsnYn"); //확정여부
        let odrWrkPathCnt = ds_odrInfo.getCellData(0, "odrWrkPathCnt"); //작업경로
        let odrDelYn = ds_odrInfo.getCellData(0, "odrDelYn"); //삭제여부
        let odrCompleteYn = ds_odrInfo.getCellData(0, "odrCompleteYn"); //오더완료여부
        let autoOdrYn = ds_odrInfo.getCellData(0, "autoOdrYn"); //자동오더여부
        $c.gus.cfEnableKeyData($p);
        $c.gus.cfDisableKey($p);
        $c.gus.cfEnableAllBtn($p);
        $c.gus.cfEnableObjects($p, [btn_updateCntrInfo]);
        $c.gus.cfDisableBtnOnly($p, [btn_update]);
        scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화
        scwin.f_setActiveGrid("E"); //그리드 활성화
        //비활성화
        $c.gus.cfEnableObj($p, acb_odrKndCd, false); //오더종류코드
        $c.gus.cfEnableObj($p, ed_ctrtClntNo, false); //계약거래처코드
        $c.gus.cfEnableObj($p, ed_ctrtClntNm, false); //계약거래처명
        $c.gus.cfEnableObj($p, lc_ctrtNo, false); //계약번호 비활성화
        $c.gus.cfEnableObj($p, btn_ctrtClntNo, false); //계약거래처 PopUp버튼
        $c.gus.cfEnableObj($p, acb_odrCtrlClsCd, false); //조정
        scwin.statusFlag = "U";
        scwin.f_setInterfaceByOdrOnUpdate();
        //작업경로 생성시, 매출여부, 왕복여부 비활성화
        if (odrWrkPathCnt > 0) {
          $c.gus.cfEnableObj($p, acb_transCondCd, false);
          $c.gus.cfEnableObj($p, rd_sellYn, false);
        } else {
          //작업경로가 지정되지 않은 경우
          $c.gus.cfEnableObj($p, acb_transCondCd, true);
          $c.gus.cfEnableObj($p, rd_sellYn, true);
        }
        //실적 발생여부를 조회하여 수정항목을 설정
        if (scwin.f_chkResultsConfirmation()) {
          //수정불가 항목을 Disable 한다.
          //수정 불가항목 : 오더번호, 오더종류, 계약거래처, 계약번호, 대표거래처
          //			 , 출발작업장, 도착작업장, 작업시작일자, 작업시작시간, 작업종료일자, 작업종료시간
          //			 , 자가구분, 작업유형, 합적여부 (벌크오더 화면에는 해당되지 않는다.
          $c.gus.cfDisableObjects($p, [ed_dptWrkPlCd, ed_dptWrkPlNm, btn_dptWrkPlCd, ed_arvWrkPlCd, ed_arvWrkPlNm, btn_arvWrkPlCd, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ed_alloccarPicId, ed_alloccarPicNm1, btn_alloccarPicId, rd_sellYn]);
          $c.gus.cfDisableBtnOnly($p, [btn_delete]);
          scwin.f_setLineCd("D");
          scwin.f_setBookingNo("D");
          scwin.f_setSelfClsCd("D");
        } else {
          scwin.f_setLineCd("D");
          scwin.f_setBookingNo("D");

          //컨테이너를 지정하지 않은 경우 , 자가구분코드 활성화
          let cntrAssgnYn = "N";
          for (let i = 0; i < cntrInfoRows; i++) {
            if (ds_cntrInfo.getCellData(i, "cntrNo").trim() != "") {
              cntrAssgnYn = "Y";
              break;
            }
          }
          if (cntrAssgnYn == "N") {
            scwin.f_setSelfClsCd("E");
          } else {
            scwin.f_setSelfClsCd("D");
          }
        }
        //그리드에서 실적발생한 컨테이너는 수정 불가하게 함
        if (cntrInfoRows > 0) {
          scwin.f_setGridCntrInfoByWrkRslts(gr_cntrInfo.getFocusedRowIndex());
        }
        //오더별 자가구분코드 LuxeCombo CBData 세팅
        if (lc_selfClsCd.getDisabled()) {
          scwin.f_setLuxeComboCBDataSelfClsCd(scwin.selfClsCd);
        } else {
          lc_selfClsCd.setValue(scwin.selfClsCd);
        }

        //Booking정보 비활성
        //품명목록/컨테이너목록 그리드 세팅
        scwin.f_setTemperDryByRFCntr(ds_commInfo, gr_commInfo, 0);
        scwin.f_setTemperDryByRFCntr(ds_cntrInfo, gr_cntrInfo, 0);
        hid_chkMode.setValue("");
        scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
        break;
      }
    case "COPY":
      //오더복사
      scwin.odrKndCd = acb_odrKndCd.getValue(); //오더종류
      let idx = acb_odrKndCd.getSelectedRow();
      scwin.impExpClsCd = ds_odrKndCd.getCellData(idx, "fltrCd2"); //수출입구분코드
      if (scwin.impExpClsCd == "null") {
        scwin.impExpClsCd = ""; //TS셔틀컨테이너가 아닌 경우
      }
      //화면 버튼, input,emedit등 활성/비활성 세팅
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableKey($p);
      $c.gus.cfEnableAllBtn($p);
      $c.gus.cfDisableBtnOnly($p, [btn_update, btn_delete]);
      $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2, btn_updateCntrInfo, btn_chgCntrNoInfo, btn_updateRepWrkInfo, btn_dcSc, btn_unitySelling, btn_copyOdr, btn_tmlEdiIfno]);
      scwin.f_setActiveImgPopUp("E"); //팝업버튼 활성화
      scwin.f_setActiveGrid("E"); //그리드활성화
      acb_odrKndCd.focus();
      $c.gus.cfInitObjects($p, [grp_cndArea, hid_chkReterieve]);
      //데이터셋 초기화 세팅
      ds_cntrInfo.removeAll();
      ds_cntrInfo.reform();
      ds_blInfo.removeAll();
      ds_blInfo.reform();
      ds_bookingInfo.removeAll();
      ds_bookingInfo.reform();
      ds_sellInfo.removeAll();
      ds_sellInfo.reform();
      ds_deleteOrderCond.removeAll();
      ds_deleteOrderCond.reform();
      ds_orgCommInfo.removeAll();
      ds_orgCommInfo.reform();
      ds_orgCntrInfo.removeAll();
      ds_orgCntrInfo.reform();
      ds_orgBlInfo.removeAll();
      ds_orgBlInfo.reform();
      ds_commInfo.removeAll();
      ds_commInfo.reform();

      //검색조건 - 오더번호
      dma_cndOdrNo.setEmptyValue();

      //팝업 hidden values 세팅
      scwin.f_setHidValues(2);

      //오더정보 세팅
      ds_odrInfo.setCellData(0, "odrNo", ""); //오더번호
      ds_odrInfo.setCellData(0, "repClntNo", ""); //대표거래처번호
      ds_odrInfo.setCellData(0, "dmndNo", ""); //수요가번호
      ds_odrInfo.setCellData(0, "bilgLodeptCd", ""); //청구부서
      ds_odrInfo.setCellData(0, "sellLodeptCd", ""); //매출부서
      ds_odrInfo.setCellData(0, "dptWrkPlCd", ""); //출발작업장코드
      ds_odrInfo.setCellData(0, "arvWrkPlCd", ""); //도착작업장코드
      ds_odrInfo.setCellData(0, "dptDtl", ""); //출발상세
      ds_odrInfo.setCellData(0, "arvDtl", ""); //도착상세
      ds_odrInfo.setCellData(0, "wrkStDt", ""); //작업시작일자
      ds_odrInfo.setCellData(0, "wrkStHh", ""); //작업시작시간
      ds_odrInfo.setCellData(0, "wrkEndDt", ""); //작업종료일자
      ds_odrInfo.setCellData(0, "wrkEndHh", ""); //작업종료시간
      ds_odrInfo.setCellData(0, "lineCd", ""); //LINE코드
      ds_odrInfo.setCellData(0, "shpCoClntNo", ""); //선사거래처
      ds_odrInfo.setCellData(0, "crcCd", ""); //통화코드
      ds_odrInfo.setCellData(0, "adptExchRt", ""); //적용환율
      ds_odrInfo.setCellData(0, "adptExchRtDt", ""); //적용환율일자
      ds_odrInfo.setCellData(0, "coshippingYn", ""); //합적여부
      ds_odrInfo.setCellData(0, "destPortCd", ""); //목적항구코드
      ds_odrInfo.setCellData(0, "bondTransExpireDt", ""); //보세운송만료일자
      ds_odrInfo.setCellData(0, "mcomAssgnClsCd", ""); //당사배정구분코드
      ds_odrInfo.setCellData(0, "clntMgntNo", ""); //거래처관리번호
      ds_odrInfo.setCellData(0, "onPicNm", ""); //상차담당자명
      ds_odrInfo.setCellData(0, "onPicTelNo", ""); //상차담당자전화번호
      ds_odrInfo.setCellData(0, "offPicNm", ""); //하차담당자명
      ds_odrInfo.setCellData(0, "offPicTelNo", ""); //하차담당자전화번호
      ds_odrInfo.setCellData(0, "odrPicNm", ""); //오더담당자명
      ds_odrInfo.setCellData(0, "odrPicTelNo", ""); //오더담당자전화번호
      ds_odrInfo.setCellData(0, "salesPicNm", ""); //영업담당자명
      ds_odrInfo.setCellData(0, "salesPicTelNo", ""); //영업담당자전화번호
      ds_odrInfo.setCellData(0, "transCoNm", ""); //운송회사명
      ds_odrInfo.setCellData(0, "transCoTelNo", ""); //운송회사전화번호
      ds_odrInfo.setCellData(0, "cvsslMgntNo", ""); //본선관리번호
      ds_odrInfo.setCellData(0, "tsCvsslMgntNo", ""); //TS본선관리번호
      ds_odrInfo.setCellData(0, "vsslCd", ""); //선박코드
      ds_odrInfo.setCellData(0, "portcnt", ""); //항차
      ds_odrInfo.setCellData(0, "portCd", ""); //항구코드
      ds_odrInfo.setCellData(0, "tsVsslCd", ""); //TS선박코드
      ds_odrInfo.setCellData(0, "tsPortcnt", ""); //TS항차
      ds_odrInfo.setCellData(0, "tsPortCd", ""); //TS항구코드
      ds_odrInfo.setCellData(0, "tplCoClsCd", ""); //3자물류업체구분코드
      ds_odrInfo.setCellData(0, "odrClsCd", ""); //오더구분코드
      ds_odrInfo.setCellData(0, "smsSndYn", 0); //SMS전송여부
      ds_odrInfo.setCellData(0, "sndDt", ""); //전송일자
      ds_odrInfo.setCellData(0, "sndHh", ""); //전송시간
      ds_odrInfo.setCellData(0, "odrDcsnYn", 0); //오더확정여부
      ds_odrInfo.setCellData(0, "odrDcsnDt", ""); //오더확정일자
      ds_odrInfo.setCellData(0, "odrDcsnHh", ""); //오더확정시간
      ds_odrInfo.setCellData(0, "odrCompleteYn", 0); //오더완료여부
      ds_odrInfo.setCellData(0, "odrCompleteDt", ""); //오더완료일자
      ds_odrInfo.setCellData(0, "odrCompleteHh", ""); //오더완료시간
      ds_odrInfo.setCellData(0, "odrCnclYn", 0); //오더취소여부
      ds_odrInfo.setCellData(0, "odrCnclDt", ""); //오더취소일자
      ds_odrInfo.setCellData(0, "odrCnclHh", ""); //오더취소시간
      ds_odrInfo.setCellData(0, "odrCnclItemCd", ""); //오더취소항목코드
      ds_odrInfo.setCellData(0, "odrCnclRsn", ""); //오더취소사유
      ds_odrInfo.setCellData(0, "odrDelYn", 0); //오더삭제여부
      ds_odrInfo.setCellData(0, "odrDelDt", ""); //오더삭제일자
      ds_odrInfo.setCellData(0, "odrDelHh", ""); //오더삭제시간
      ds_odrInfo.setCellData(0, "upperOdrNo", ""); //상위오더번호
      ds_odrInfo.setCellData(0, "regBranCd", ""); //등록점소코드
      ds_odrInfo.setCellData(0, "odrDt", ""); //오더일자
      ds_odrInfo.setCellData(0, "pchsCreatYn", 0); //매입생성여부
      ds_odrInfo.setCellData(0, "bilgOdrKndCd", ""); //청구오더종류코드
      ds_odrInfo.setCellData(0, "closeDt", ""); //마감일자
      ds_odrInfo.setCellData(0, "closeHh", ""); //마감시간
      ds_odrInfo.setCellData(0, "alloccarPicId", ""); //배차담당자ID
      ds_odrInfo.setCellData(0, "autoOdrYn", 0); //자동오더여부

      ds_odrInfo.setCellData(0, "bilgLodeptNm", ""); //청구부서명
      ds_odrInfo.setCellData(0, "sellLodeptNm", ""); //매출부서명
      ds_odrInfo.setCellData(0, "dptWrkPlNm", ""); //출발작업장코드명
      ds_odrInfo.setCellData(0, "arvWrkPlNm", ""); //도착작업장코드명
      ds_odrInfo.setCellData(0, "destPortNm", ""); //목적항구명
      ds_odrInfo.setCellData(0, "vsslNm", ""); //선박명
      ds_odrInfo.setCellData(0, "portNm", ""); //항구명
      ds_odrInfo.setCellData(0, "alloccarPicNm", ""); //배정담당자명
      ds_odrInfo.setCellData(0, "lineNm", ""); //라인명
      ds_odrInfo.setCellData(0, "shpCoClntNm", ""); //선사거래처명

      //기본정보세팅
      scwin.f_setDefaultValue();

      //매출부서, 청구부서 세팅
      await scwin.f_setSellAndBilgDept("A");
      //오더별 자가구분코드 LuxeCombo CBData 세팅
      scwin.f_setLuxeComboCBDataSelfClsCd(DsConstants.SELF_CLS_CD_MCOM_TRANS);

      //오더별 화면 세팅
      scwin.f_setInterfaceByOdr2(scwin.odrKndCd, scwin.impExpClsCd);

      //flag세팅
      scwin.mgntTrgtClntYn = 0; // 계약거래처 관리구분여부 초기화
      scwin.statusFlag = "C"; //수정등록 flag
      //chkBlNoOrCvsslNo = "N";
      scwin.bkCommInfoRows = 0;
      scwin.bookingNoYn = "N";
      scwin.assgnWhouseCd = "";
      scwin.assgnWhouseNm = "";
      hid_chkMode.setValue("create");
      scwin.excelUploadYn = 0; //EXCEL UPLOAD (C3) 여부
      break;
  }
};

/**
 * method
 * @name f_setGridCntrInfoByWrkRslts
 * @description 그리드에서 컨테이너의 실적여부에 따라 입력여부 판정
 */
scwin.f_setGridCntrInfoByWrkRslts = function (row) {
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  if (cntrInfoRows > 0 && btn_update.getDisabled()) {
    if (scwin.f_chkResultsConfirmation("CNTR_ROW")) {
      //실적발생한 경우
      scwin.setGrCntrInfoReadOnly(true);
    } else {
      //실적발생하지 않은 경우
      scwin.setGrCntrInfoReadOnly(false);
      if (ds_cntrInfo.getRowStatus(row) == "C") {
        //insert인 경우
        scwin.f_displayGridColumn(gr_cntrInfo, ["cntrNo"], "edit", "upper");
        //오더별 세팅
        scwin.f_setCntrGridForSizTypFE("D");
      } else {
        //현재 컨테이너번호 또는 org컨테이너번호가 미지정인 경우(update인 경우)
        if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(row, "cntrNo")) || $c.gus.cfIsNull($p, ds_cntrInfo.getOriginalCellData(row, "cntrNo"))) {
          scwin.f_displayGridColumn(gr_cntrInfo, ["cntrNo"], "edit", "upper");

          //오더별 세팅
          //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
          if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
            //수출일반(자가영업)
            scwin.f_setCntrGridForSizTypFE("E");
          }
        } else {
          scwin.f_displayGridColumn(gr_cntrInfo, ["cntrNo"], "edit", "none");
          scwin.f_setCntrGridForSizTypFE("D");
        }
      }
      //수출일반인 경우  - 컨테이너 type이 RF인 경우, 온도 또는 dry 체크
      scwin.f_setTemperDryByRFCntr(ds_cntrInfo, gr_cntrInfo, row);
    }
  }
};

/**
 * method
 * @name f_retrieveGridLookup
 * @description 품명,컨테이너목록에서 Size,Type,Full/Empty가져오기
 */
scwin.f_retrieveGridLookup = function () {
  //컨테이너 SIZE
  $c.sbm.execute($p, sbm_retrieveCntrSize);
  //컨테이너 TYPE
  $c.sbm.execute($p, sbm_retrieveCntrType);
  //컨테이너 Full/Empty
  $c.sbm.execute($p, sbm_retrieveCntrFE);
  //컨테이너 작업형태(BobTail, OnGround)
  $c.sbm.execute($p, sbm_retrieveCntrBO);
};

/**
 * method
 * @name f_setDefaultValue
 * @description 오더기본정보 세팅
 * 매출여부,		    컨테이너지정여부,	자가구분코드,	  		작업유형코드, 		등록점소
 * 운송화물구분코드, 수입수출내수구분코드,	수출입구분코드, 		과세구분코드, 		CH구분코드
 * 컨테이너중량조건, 운송조건,			출발일자(현재일자),	도착일자(현재일자)
 */
scwin.f_setDefaultValue = function () {
  //오더 담당 정보 설정
  ed_odrPicNm.setValue(scwin.userNm);
  ed_odrPicTelNo.setValue(dscommon.cf_IgnoreSpaces(scwin.userMpNo));
  ds_odrInfo.setCellData(0, "sellYn", 1); //매출여부
  ds_odrInfo.setCellData(0, "cntrDsgYn", 1); //컨테이너지정여부
  ds_odrInfo.setCellData(0, "selfClsCd", DsConstants.SELF_CLS_CD_MCOM_TRANS); //자가구분코드 - 당사운송
  ds_odrInfo.setCellData(0, "wrkPatternCd", "00"); //작업유형코드
  ds_odrInfo.setCellData(0, "regBranCd", scwin.lobranCd); //등록점소 - 사용자 설정 물류점소
  ds_odrInfo.setCellData(0, "transCargoClsCd", "C"); //운송화물구분코드
  ds_odrInfo.setCellData(0, "impExpDomesticClsCd", scwin.impExpClsCd); //수입수출내수구분코드
  let idx = lc_ctrtNo.getSelectedIndex();
  ds_odrInfo.setCellData(0, "taxnClsCd", ds_ctrtNo.getCellData(idx, "taxnClsCd")); //과세구분코드

  //오더별 기본값 세팅
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //수입일반컨테이너오더
    ds_odrInfo.setCellData(0, "chClsCd", "01"); //CH구분코드
    ds_odrInfo.setCellData(0, "transCondCd", "2"); //운송구분코드
    ds_odrInfo.setCellData(0, "cntrWtCondCd", "H"); //컨테이너중량조건코드
    //출발일자, 도착일자 초기값 설정
    ed_wrkStDt.setValue(scwin.strCurDate);
    ed_wrkEndDt.setValue(scwin.strCurDate);
  }
};

/**
 * method
 * @name f_retrieveCtrtNo
 * @description 계약거래처에 해당 되는 컨테이너 계약번호 리스트 조회
 */
scwin.f_retrieveCtrtNo = function () {
  dma_cndCtrtNo.setEmptyValue();
  //검색조건값 세팅
  dma_cndCtrtNo.set("ctrtClntNo", ed_ctrtClntNo.getValue()); //계약거래처
  dma_cndCtrtNo.set("bizDivCntrYn", "1"); //사업부문컨테이너여부
  dma_cndCtrtNo.set("bizDivBulkYn", ""); //사업부문벌크여부
  dma_cndCtrtNo.set("odrKndCd", scwin.odrKndCd); //사업부문벌크여부
  dma_cndCtrtNo.set("impExpDomesticClsCd", scwin.impExpClsCd); //수출입내수구분코드
  //조회
  $c.sbm.execute($p, sbm_retrieveCtrtNo);
};

/**
 * method
 * @name f_retrieveCtrtNo2
 * @description
 */
scwin.f_retrieveCtrtNo2 = function () {
  dma_cndCtrtNo.setEmptyValue();
  //검색조건값 세팅
  dma_cndCtrtNo.set("ctrtClntNo", ed_bilgClntNo.getValue()); //계약거래처
  dma_cndCtrtNo.set("bizDivCntrYn", "1"); //사업부문컨테이너여부
  dma_cndCtrtNo.set("bizDivBulkYn", ""); //사업부문벌크여부
  dma_cndCtrtNo.set("odrKndCd", scwin.odrKndCd); //사업부문벌크여부
  dma_cndCtrtNo.set("impExpDomesticClsCd", scwin.impExpClsCd); //수출입내수구분코드
  //조회
  $c.sbm.execute($p, sbm_retrieveCtrtNo2);
};

/**
 * method
 * @name f_retrieveClntList
 * @description 계약번호에 해당 되는 청구/요청거래처/실화주거래처 정보 조회
 */
scwin.f_retrieveClntList = async function () {
  if (lc_ctrtNo.getValue() == "선택") {
    //청구/요청거래처/실화주거래처 정보 clear
    scwin.f_clearDataByClntNos();
  } else {
    dma_retrieveClntNo.set("contractNumber", lc_ctrtNo.getValue());
    let e = await $c.sbm.execute($p, sbm_retrieveClntNo);
    if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
      //청구/요청거래처/실화주거래처 정보 clear
      scwin.f_clearDataByClntNos();
    } else {
      await scwin.sbm_retrieveClntNo_submitdone(e);
    }
  }
};

/**
 * method
 * @name f_retrieveCntrBasisInfo
 * @description 컨테이너목록 그리드에서 컨테이너번호 입력시 컨테이너 기본정보 조회
 * 수입본선,수입하역,부두간TS,하선지경유TS오더인 경우 : 입력한 컨테이너에 해당하는 BL정보와 BL정보에 해당되는 컨테이너 모두 가져옴
 */
scwin.f_retrieveCntrBasisInfo = async function (cntrNo, row) {
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd != DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    return;
  }
  //수입일반컨테이너인 경우
  if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
    scwin.f_setCntrInfo(2);
    return;
  }
  dma_condCntrBasisInfo.setEmptyValue();
  dma_condCntrBasisInfo.set("odrKndCd", scwin.odrKndCd);
  dma_condCntrBasisInfo.set("selfClsCd", scwin.selfClsCd);
  dma_condCntrBasisInfo.set("cntrNo", cntrNo);
  dma_condCntrBasisInfo.set("dptWrkPlCd", ed_dptWrkPlCd.getValue().trim());
  dma_condCntrBasisInfo.set("arvWrkPlCd", ed_arvWrkPlCd.getValue().trim());
  let e = await $c.sbm.execute($p, sbm_retrieveCntrBasisInfo);
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    scwin.f_setCntrInfo(2);
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_OFF_HIRE_ODR) {
      //OFF-HIRE
      ds_cntrInfo.setCellData(row, "fullEmptyClsCd", "E");
    }
  } else {
    await scwin.sbm_retrieveCntrBasisInfo_submitdone(e, row);
  }
};

/**
 * method
 * @name f_retrieveBillOfLadingContainerList
 * @description BL번호에 따른 품명,컨테이너조회
 * 수입일반, CFS셔틀, 세관검사, 검색기인 경우
 */
scwin.f_retrieveBillOfLadingContainerList = async function () {
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR //수입일반
  ) {
    //라인코드 체크
    if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
      scwin.f_clearDataByBlNo(); //BL번호와 관련한 데이터셋 Clear
      return;
    }
    scwin.retrieveYn = "Y";
    //검색데이터셋 값세팅
    ds_cndBlNo.removeAll();
    ds_cndBlNo.reform();
    let row = ds_cndBlNo.insertRow();
    ds_cndBlNo.setCellData(row, "cvsslMgntNo", ed_cvsslMgntNo.getValue().trim());
    ds_cndBlNo.setCellData(row, "impExpClsCd", "I");
    ds_cndBlNo.setCellData(row, "mrn", ds_blInfo.getCellData(0, "mrn"));
    ds_cndBlNo.setCellData(row, "msn", ds_blInfo.getCellData(0, "msn"));
    ds_cndBlNo.setCellData(row, "hsn", ds_blInfo.getCellData(0, "hsn"));
    ds_cndBlNo.setCellData(row, "hblNo", ed_blNo.getValue().trim());
    ds_cndBlNo.setCellData(row, "odrKndCd", scwin.odrKndCd);
    ds_cndBlNo.setCellData(row, "selfClsCd", scwin.selfClsCd);
    let e = null;
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR && scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
      //수입일반(자가영업)인 경우
      e = await $c.sbm.execute($p, sbm_retrieveBLContainer);
    } else {
      e = await $c.sbm.execute($p, sbm_retrieveBLContainer2);
    }
    if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
      scwin.f_clearDataByBlNo();
      scwin.retrieveYn = "N";
    } else {
      await scwin.sbm_retrieveBLContainer_submitdone(e);
    }
  }
};

/**
 * method
 * @name f_setCvsslMgntNoByOdrKndCd
 * @description
 */
scwin.f_setCvsslMgntNoByOdrKndCd = function (rtnList, gubun) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      if (gubun == "") {
        //수출일반 : 마감일시 세팅
        //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR) {
          //수출일반
          ed_closeDt.setValue(rtnList[3]); //마감일자
          ed_closeHh.setValue(rtnList[4]); //마감시간
        }
        //본선관리번호에 해당하는 BL정보, 품명정보, 컨테이너정보 가져오기
        //수입본선, 부두간TS, 하선지TS(부두코드 --> 하선지(CY))인 경우, 하선장소를 도착지로 세팅
        //*수입일반 수출일반에 해당 안됨
      }
    }
  } else {
    //rtnList값이 null인 경우
    if (gubun == "") {
      scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
    }
  }
};

/**
 * method
 * @name f_retrieveContainerAdditionSelling
 * @description 수입일반인 경우, 저장시점에 선명항차기준으로 컨테이너별로 추가매출이 생성되었는지 확인하여 보여준다.
 */
scwin.f_retrieveContainerAdditionSelling = async function () {
  //수입일반인 경우
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    let odrNo = ds_odrInfo.getCellData(0, "odrNo").trim();
    if ($c.gus.cfIsNull($p, odrNo)) {
      return;
    }
    ds_condContainerAdditionSelling.removeAll();
    ds_condContainerAdditionSelling.reform();
    let row = ds_condContainerAdditionSelling.insertRow();
    ds_condContainerAdditionSelling.setCellData(row, "odrNo", odrNo);
    let e = await $c.sbm.execute($p, sbm_retrieveContainerAdditionSelling);
    await scwin.sbm_retrieveContainerAdditionSelling_submitdone(e);
  }
};

/**
 * method
 * @name f_chkResultsConfirmation
 * @description 실적 발생여부를 확인
 */
scwin.f_chkResultsConfirmation = function (gubun) {
  if (!ds_cntrInfo.getRowCount()) {
    return false;
  }
  if (gubun == "CNTR_ROW") {
    if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(gr_cntrInfo.getFocusedRowIndex(), "wrkRsltsNo"))) {
      return true; // 실적이 존재하는 경우
    }
  } else {
    for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
      if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
        return true; // 실적이 존재하는 경우
      }
    }
  }
  return false; // 실적이 존재하지 않는 경우
};

/**
 * method
 * @name f_Retrieve
 * @description 컨테이너 오더 계약 조회
 */
scwin.f_Retrieve = async function () {
  if (await $c.gus.cfValidate($p, [grp_cndArea], null, true)) {
    scwin.retrieveYn = "Y";
    scwin.f_clearDataSet();
    scwin.mgntTrgtClntYn = 0;
    dma_cndOdrNo.set("odrNo", ed_odrNo.getValue().trim());
    let e = await $c.sbm.execute($p, sbm_retrieve);
    if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
      await scwin.f_set("INIT", "INIT");
      scwin.retrieveYn = "N";
    } else {
      await scwin.sbm_retrieve_submitdone(e);
    }
    hid_chkMode.setValue("");
  }
};

/**
 * method
 * @name f_save
 * @description 신규/수정 저장
 */
scwin.f_save = async function () {
  //여기
  let k = 0;
  //배차담당자
  ds_orderallocarpicnm.removeAll();
  ds_orderallocarpicnm.reform();
  const odrNo = dma_cndOdrNo.get("odrNo");
  let row = -1;
  if (ed_alloccarPicNm1.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm1.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId1.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm1.getValue());
  }
  if (ed_alloccarPicNm2.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm2.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId2.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm2.getValue());
  }
  if (ed_alloccarPicNm3.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm3.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId3.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm3.getValue());
  }
  if (ed_alloccarPicNm4.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm4.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId4.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm4.getValue());
  }
  if (ed_alloccarPicNm5.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm5.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId5.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm5.getValue());
  }
  if (scwin.statusFlag == "U") {
    //수정
    if ($c.data.isModified($p, ds_odrInfo) || $c.data.isModified($p, ds_commInfo) || $c.data.isModified($p, ds_cntrInfo) || $c.data.isModified($p, ds_blInfo) || $c.data.isModified($p, ds_orderallocarpicnm) || scwin.bookingNoYn == "Y" //|| chkBlNoOrCvsslNo == "Y"
    ) {
      await scwin.f_setValueBeforeValidation(); //validation하기 전에 꼭 세팅되어야 할 값들을 세팅

      if (lc_ctrtNo.getValue() == "선택") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
        return false;
      }
      if (await $c.gus.cfValidate($p, [grp_odrInfoArea, gr_commInfo, gr_cntrInfo], null, true)) {
        //품명목록과 컨테이너목록의 수량 체크
        if (!(await scwin.f_calInputQty("Y"))) {
          return;
        }
        if (!(await scwin.f_validate())) {
          return;
        }
        if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
          //저장하시겠습니까?
          scwin.f_setValueBeforeSave(); //저장하기전 데이터 세팅
          await scwin.f_updateByOdrKndCd(); //오더종류별 저장
        }
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
    }
  } else if (scwin.statusFlag == "C") {
    //신규
    if ($c.data.isModified($p, ds_odrInfo)) {
      await scwin.f_setValueBeforeValidation(); //validation하기 전에 꼭 세팅되어야 할 값들을 세팅

      if (lc_ctrtNo.getValue() == "선택") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약번호"]); //@은(는) 필수 입력 항목입니다
        return false;
      }
      if (await $c.gus.cfValidate($p, [grp_odrInfoArea, gr_commInfo, gr_cntrInfo], null, true)) {
        //품명목록과 컨테이너목록의 Validation 체크 및 수량 체크
        if (!(await scwin.f_calInputQty("Y"))) {
          return;
        }
        if (!(await scwin.f_validate())) {
          return;
        }
        if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
          //저장하시겠습니까?
          scwin.f_setValueBeforeSave(); //저장하기전 데이터 세팅
          await scwin.f_registByOdrKndCd(); //오더종류별 저장
        }
      }
    } else {
      if ($c.data.isModified($p, ds_commInfo) || $c.data.isModified($p, ds_cntrInfo)) {
        if (await $c.gus.cfValidate($p, [grp_odrInfoArea], null, true)) {
          return;
        }
      } else {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); //@은(는) 변경된 사항이 없습니다.
      }
    }
  }
};

/**
 * method
 * @name f_updateByOdrKndCd
 * @description 오더종류별 수정
 */
scwin.f_updateByOdrKndCd = async function () {
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //수입일반컨테이너오더
    let e = await $c.sbm.execute($p, sbm_update2);
    if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
      scwin.undoAll(ds_orgCommInfo);
      scwin.undoAll(ds_orgCntrInfo);
      scwin.undoAll(ds_orgBlInfo);
    } else {
      await scwin.sbm_update_submitdone(e);
    }
  }
};

/**
 * method
 * @name f_setOrgDataSetBeforeSave
 * @description 등록하기전에 본선관리번호 또는 BL정보를 입력하면 리턴받은 데이터셋을 모두 리셋하므로, 다시 데이터셋을 옮겨서 cmd단으로 보낸다.
 */
scwin.f_setOrgDataSetBeforeSave = function () {
  //품명정보를 original품명정보 데이터셋에 세팅하여 보냄
  scwin.f_copyDataSetRow(ds_commInfo, ds_orgCommInfo);

  //컨테이너정보를 original컨테이너정보 데이터셋에 세팅하여 보냄(ds_common.js참조)
  scwin.f_copyDataSetRow(ds_cntrInfo, ds_orgCntrInfo);

  //컨테이너정보를 original컨테이너정보 데이터셋에 세팅하여 보냄(ds_common.js참조)
  scwin.f_copyDataSetRow(ds_blInfo, ds_orgBlInfo);
};

/**
 * method
 * @name f_registByOdrKndCd
 * @description 오더종류별 등록
 */
scwin.f_registByOdrKndCd = async function () {
  //데이터셋을 옮겨 등록
  scwin.f_setOrgDataSetBeforeSave();
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //수입일반컨테이너오더
    $c.sbm.execute($p, sbm_regist);
    if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
      scwin.undoAll(ds_orgCommInfo);
      scwin.undoAll(ds_orgCntrInfo);
      scwin.undoAll(ds_orgBlInfo);
    } else {
      await scwin.sbm_regist_submitdone(e);
    }
  }
};

/**
 * method
 * @name f_update
 * @description 수정
 */
scwin.f_update = async function () {
  await scwin.f_set("UPDATE"); //수정모드
};

/**
 * method
 * @name f_Create
 * @description 신규
 */
scwin.f_Create = async function (gubun) {
  if (gubun !== "C") {
    return;
  }
  await scwin.f_set("INIT", "CREATE"); //신규모드
};

/**
 * method
 * @name f_delete
 * @description 삭제
 */
scwin.f_delete = async function () {
  let msg = ("오더번호 : " + MSG_CM_CRM_008).replace("%1", ds_odrInfo.getCellData(0, "odrNo").trim());
  if (await $c.win.confirm($p, msg)) {
    ds_deleteOrderCond.removeAll();
    ds_deleteOrderCond.reform();
    ds_deleteOrderCond.insertRow();
    ds_deleteOrderCond.setCellData(0, "odrNo", ds_odrInfo.getCellData(0, "odrNo").trim());
    ds_deleteOrderCond.setCellData(0, "odrKndCd", scwin.odrKndCd);
    ds_deleteOrderCond.setCellData(0, "impExpDomesticClsCd", scwin.impExpClsCd);
    ds_deleteOrderCond.setCellData(0, "selfClsCd", scwin.selfClsCd);
    $c.sbm.execute($p, sbm_deleteOrderCond);
  }
};

/**
 * method
 * @name f_confirmOrder
 * @description 오더확정
 */
scwin.f_confirmOrder = async function () {
  //작업경로가 지정된 경우만 오더확정 가능
  let msg = MSG_CM_CRM_010.replace("%1", "오더확정");
  if (await $c.win.confirm($p, msg)) {
    if (ds_odrInfo.getRowCount() > 0 && ds_odrInfo.getCellData(0, "odrWrkPathCnt") > 0) {
      ds_odrInfo.setCellData(0, "odrDcsnYn", 1);
      let e = await $c.sbm.execute($p, sbm_update);
      if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
        scwin.undoAll(ds_orgCommInfo);
        scwin.undoAll(ds_orgCntrInfo);
        scwin.undoAll(ds_orgBlInfo);
      } else {
        await scwin.sbm_update_submitdone(e);
      }
    }
  }
};

/**
 * method
 * @name f_openPopUpUpdateCntrInfo
 * @description 컨테이너정보수정 팝업열기
 */
scwin.f_openPopUpUpdateCntrInfo = async function () {
  let arrParam = new Array(1);
  arrParam[0] = ds_odrInfo.getCellData(0, "odrNo").trim(); //오더번호

  let options = {
    id: "sd_402_01_15b_popup",
    popupName: "컨테이너정보수정",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 1000,
    height: 400
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_15b.xml", options, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "N/A" && rtnList[1] == "Y") {
      await scwin.f_Retrieve();

      //탭선택시 재조회
      $p.parent().tac_mxTab.getFrame(1).getObj("hid_chkReterieve").setValue("");
    }
  }
};

/**
 * method
 * @name f_openPopUpUpdateRepWrkInfo
 * @description 대표착지수정 팝업열기 - 수입일반오더인 경우만 해당
 */
scwin.f_openPopUpUpdateRepWrkInfo = async function () {
  //개발 취소된 화면이라 막음
  return;
  let arrParam = new Array(2);
  arrParam[0] = ds_odrInfo.getCellData(0, "odrNo").trim(); //오더번호
  arrParam[1] = "retrieve";
  let options = {
    id: "sd_402_01_30p_popup",
    popupName: "대표착지 작업장수정",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 720,
    height: 460
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_30p.xml", options, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "N/A" && rtnList[1] == "Y") {
      await scwin.f_Retrieve();

      //탭선택시 재조회
      $p.parent().tac_mxTab.getFrame(1).getObj("hid_chkReterieve").setValue("");
    }
  }
};

/**
 * method
 * @name f_openPopUpOdrNo
 * @description 오더번호검색 팝업열기
 */
scwin.f_openPopUpOdrNo = async function () {
  let args = new Array();
  args[0] = ed_cnd_cntrNo.getValue().trim(); //컨테이너번호
  args[1] = ""; //acb_cnd_odrKndCd.getValue(); //오더종류 //현재 선택된 값을 넘겨줘야 하는것 같지만 asis실제 동작은 전체로 검색함
  let options = {
    id: "sd_402_01_31p_popup",
    popupName: "오더검색",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 820,
    height: 400
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_31p.xml", options, args);
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_odrNo.setValue(rtnList[0]); // 오더번호
    }
  }
};

/**
 * method
 * @name f_chgCntrNoInfo
 * @description 컨테이너번호수정 팝업열기 - 수입본선오더인 경우만 해당
 */
scwin.f_chgCntrNoInfo = async function () {
  let arrParam = new Array(2);
  arrParam[0] = ds_odrInfo.getCellData(0, "odrNo").trim(); //오더번호
  arrParam[1] = "retrieve";
  let options = {
    id: "sd_402_01_16b_popup",
    popupName: "컨테이너번호수정",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 720,
    height: 690
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_16b.xml", options, arrParam);
  if (rtnList != null) {
    if (rtnList[0] == "N/A" && rtnList[1] == "Y") {
      await scwin.f_Retrieve();

      //탭선택시 재조회
      $p.parent().tac_mxTab.getFrame(1).getObj("hid_chkReterieve").setValue("");
    }
  }
};

/**
 * method
 * @name f_addRow
 * @description 행추가
 */
scwin.f_addRow = async function (gubun) {
  let commRows = ds_commInfo.getRowCount();
  let cntrNo = ds_cntrInfo.getCellData(gr_cntrInfo.getFocusedRowIndex(), "cntrNo");
  if (gubun == "A1") {
    let row = -1;
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
      //수출일반인 경우
      if (commRows > 0) {
        row = ds_commInfo.insertRow();
        ds_commInfo.setCellData(row, "wrkStDt", ds_commInfo.getCellData(commRows - 1, "wrkStDt"));
        ds_commInfo.setCellData(row, "wrkStHh", ds_commInfo.getCellData(commRows - 1, "wrkStHh"));
        ds_commInfo.setCellData(row, "wrkEndDt", ds_commInfo.getCellData(commRows - 1, "wrkEndDt"));
        ds_commInfo.setCellData(row, "wrkEndHh", ds_commInfo.getCellData(commRows - 1, "wrkEndHh"));
      } else {
        row = ds_commInfo.insertRow();
        ds_commInfo.setCellData(row, "wrkStDt", ed_wrkStDt.getValue().trim());
        ds_commInfo.setCellData(row, "wrkStHh", ed_wrkStHh.getValue().trim());
        ds_commInfo.setCellData(row, "wrkEndDt", ed_wrkEndDt.getValue().trim());
        ds_commInfo.setCellData(row, "wrkEndHh", ed_wrkEndHh.getValue().trim());
      }

      //F/E를 항상 E로 세팅 - Empty Position, Off-hire
      //F/E를 항상 F로 세팅 - 수출일반
      //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
      if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
        ds_commInfo.setCellData(row, "fullEmptyClsCd", "F");
      }
    } else {
      row = ds_commInfo.insertRow();
      ds_commInfo.setCellData(row, "wrkStDt", ed_wrkStDt.getValue().trim());
      ds_commInfo.setCellData(row, "wrkStHh", ed_wrkStHh.getValue().trim());
      ds_commInfo.setCellData(row, "wrkEndDt", ed_wrkEndDt.getValue().trim());
      ds_commInfo.setCellData(row, "wrkEndHh", ed_wrkEndHh.getValue().trim());
      ds_commInfo.setCellData(row, "inputQty", "0");
      ds_commInfo.setCellData(row, "qty", "0");
    }
    if (row != -1) {
      gr_commInfo.setFocusedCell(row, gr_commInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_commInfo), false);
    }
  } else if (gubun == "A2") {
    //행추가
    let row = -1;
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      //수입일반
      row = ds_cntrInfo.insertRow();
      ds_cntrInfo.setCellData(row, "wrkStDt", ed_wrkStDt.getValue().trim());
      ds_cntrInfo.setCellData(row, "wrkStHh", ed_wrkStHh.getValue().trim());
      ds_cntrInfo.setCellData(row, "wrkEndDt", ed_wrkEndDt.getValue().trim());
      ds_cntrInfo.setCellData(row, "wrkEndHh", ed_wrkEndHh.getValue().trim());
      ds_cntrInfo.setCellData(row, "cntrSeq", "0");
      ds_cntrInfo.setCellData(row, "wt", "0");
    } else {
      //컨테이너목록 rowCount와 품명목록 rowCount가 같은 경우에는 더이상 행추가하지 않게 함
      let commRowsExceptDel = 0;
      let cntrRowsExceptDel = dscommon.cf_CountRowExceptDeleteRow(ds_cntrInfo);

      //품명목록에서 총수량
      for (let i = 0; i < ds_commInfo.getRowCount(); i++) {
        //행추가 또는 행수정만 Count
        if (ds_commInfo.getRowStatus(i) != "D") {
          commRowsExceptDel += $c.num.parseFloat($p, ds_commInfo.getCellData(i, "qty"));
        }
      }
      if (commRowsExceptDel == cntrRowsExceptDel) {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_005); //컨테이너는 품명목록의 총수량 이상 입력할 수 없습니다"
        return;
      }

      //행추가
      let chkFlag = false; //delete 체크 flag
      for (let i = 0; i < commRows; i++) {
        if (ds_commInfo.getRowStatus(i) != "D") {
          chkFlag = true;
        }
      }
      //행추가
      if (chkFlag) {
        let row = ds_cntrInfo.insertRow();
        ds_cntrInfo.setCellData(row, "odrNo", ds_odrInfo.getCellData(0, "odrNo"));
        ds_cntrInfo.setCellData(row, "wrkStDt", ed_wrkStDt.getValue().trim());
        ds_cntrInfo.setCellData(row, "wrkStHh", ed_wrkStHh.getValue().trim());
        ds_cntrInfo.setCellData(row, "wrkEndDt", ed_wrkEndDt.getValue().trim());
        ds_cntrInfo.setCellData(row, "wrkEndHh", ed_wrkEndHh.getValue().trim());
        ds_cntrInfo.setCellData(row, "cntrSeq", "0");
        ds_cntrInfo.setCellData(row, "wt", "0");

        //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
          //수입일반인 경우
          ds_cntrInfo.setCellData(row, "cntrWtCondCd", acb_cntrWtCondCd.getValue());
        }
      }
      // await $c.gus.cfAlertMsg(MSG_CM_ERR_041, ["품명정보가 없으므로 본 컨테이너정보", "추가"]); //"@은(는) @할 수 없습니다.";
    }
    if (row != -1) {
      gr_cntrInfo.setFocusedCell(row, gr_cntrInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_cntrInfo), false);
    }
  }
};

/**
 * method
 * @name f_deleteRow
 * @description 행삭제
 */
scwin.f_deleteRow = async function (gubun) {
  scwin.btnPos = gubun;
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
    return;
  }
  let commInfoRows = ds_commInfo.getRowCount();
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  if (gubun == "D1") {
    if (commInfoRows > 0) {
      let row = gr_commInfo.getFocusedRowIndex();
      const colid = gr_cntrInfo.getFocusedColumnID();
      let cntrSizCd = ds_commInfo.getCellData(row, "cntrSizCd");
      let cntrTypCd = ds_commInfo.getCellData(row, "cntrTypCd");
      let fullEmptyClsCd = ds_commInfo.getCellData(row, "fullEmptyClsCd");
      let sameYn = "N";
      let wrkRsltsYn = "N";
      for (let i = cntrInfoRows - 1; i >= 0; i--) {
        if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
          //실적일어나지 않은 경우만 해당
          if (ds_cntrInfo.getCellData(i, "cntrSizCd") == cntrSizCd && ds_cntrInfo.getCellData(i, "cntrTypCd") == cntrTypCd && ds_cntrInfo.getCellData(i, "fullEmptyClsCd") == fullEmptyClsCd) {
            scwin.deleteRow(ds_cntrInfo, i);
            sameYn = "Y";
          }
        } else {
          if (ds_cntrInfo.getCellData(i, "cntrSizCd") == cntrSizCd && ds_cntrInfo.getCellData(i, "cntrTypCd") == cntrTypCd && ds_cntrInfo.getCellData(i, "fullEmptyClsCd") == fullEmptyClsCd) {
            wrkRsltsYn = "Y";
          }
        }
      }
      if (row >= ds_cntrInfo.getRowCount()) {
        row = ds_cntrInfo.getRowCount() - 1;
      }
      gr_cntrInfo.setFocusedCell(focused, colid, false);
      if (sameYn == "Y") {
        await scwin.f_calInputQty();
      }
      //실적체크
      if (wrkRsltsYn == "Y") {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_002, ["품명"]); //"실적이 발생한 @은 삭제할 수 없습니다."
      } else {
        scwin.deleteMarked(gr_commInfo, ds_commInfo);
      }
    }
  } else if (gubun == "D2") {
    if (cntrInfoRows > 0) {
      let arrCntrNo = new Array();
      let focused = gr_cntrInfo.getFocusedRowIndex();
      let allFocused = gr_cntrInfo.getAllFocusedRowIndex();
      const colid = gr_cntrInfo.getFocusedColumnID();
      for (let i = cntrInfoRows - 1; i >= 0; i--) {
        if (allFocused.includes(i)) {
          if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
            //실적일어나지 않은 경우만 해당
            scwin.deleteRow(ds_cntrInfo, i);
          } else {
            arrCntrNo.push(ds_cntrInfo.getCellData(i, "cntrNo"));
          }
        }
      }
      if (focused >= ds_cntrInfo.getRowCount()) {
        focused = ds_cntrInfo.getRowCount() - 1;
      }
      gr_cntrInfo.setFocusedCell(focused, colid, false);
      if (arrCntrNo.length > 0) {
        let alertStr = "";
        for (let i of arrCntrNo) {
          if (!$c.gus.cfIsNull($p, arrCntrNo[i])) {
            if (i == 0) {
              alertStr += "\n[컨테이너번호]\n" + arrCntrNo[i];
            } else {
              alertStr += "," + arrCntrNo[i];
            }
          }
        }
        alertStr = `현재 선택한 컨테이너 중에서 \n${alertStr}\n\n총 ${arrCntrNo.length} 건의 컨테이너는 실적이 일어난 건이므로 삭제할 수 없습니다.`;
        await $c.gus.cfAlertMsg($p, alertStr);
      }
      await scwin.f_calInputQty();
    }
  }
};

/**
 * method
 * @name f_undoRow
 * @description 행취소
 */
scwin.f_undoRow = async function (gubun) {
  let commInfoRows = ds_commInfo.getRowCount();
  let cntrInfoRows = ds_cntrInfo.getRowCount();
  scwin.btnPos = gubun;

  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
    return;
  }
  if (gubun == "U1") {
    let sameYn = "N";
    let row = gr_commInfo.getFocusedRowIndex();
    scwin.undoRow(ds_commInfo, row);
    for (let i = 0; i < cntrInfoRows; i++) {
      if (ds_cntrInfo.getCellData(i, "cntrSizCd") == ds_commInfo.getCellData(row, "cntrSizCd") && ds_cntrInfo.getCellData(i, "cntrTypCd") == ds_commInfo.getCellData(row, "cntrTypCd") && ds_cntrInfo.getCellData(i, "fullEmptyClsCd") == ds_commInfo.getCellData(row, "fullEmptyClsCd")) {
        scwin.undoRow(ds_cntrInfo, i);
        sameYn = "Y";
      }
    }
    if (sameYn == "Y") {
      await scwin.f_calInputQty();
    }
  } else if (gubun == "U2") {
    let focused = gr_cntrInfo.getAllFocusedRowIndex(); //select된 row만 해당
    focused.sort();
    focused.reverse();
    for (let i of focused) {
      for (let j = commInfoRows - 1; j >= 0; --j) {
        if (ds_cntrInfo.getCellData(i, "cntrSizCd") == ds_commInfo.getCellData(j, "cntrSizCd") && ds_cntrInfo.getCellData(i, "cntrTypCd") == ds_commInfo.getCellData(j, "cntrTypCd") && ds_cntrInfo.getCellData(i, "fullEmptyClsCd") == ds_commInfo.getCellData(j, "fullEmptyClsCd") && ds_commInfo.getRowStatus(j) == "D") {
          scwin.undoRow(ds_commInfo, j);
        }
      }
    }
    scwin.undoMarked(gr_cntrInfo, ds_cntrInfo);
    await scwin.f_calInputQty();
  }
};

/**
 * method
 * @name f_validateCommAndCntr
 * @description scwin.f_calInputQty()하기전에 유효성 확인
 * (처리규칙)
 * 1.수출일반
 *   1.1.size,type,fullEmpty,중량,온도,dry를 체크
 *   1.2.type이 'RF'인 경우 : 온도 또는 dry 중 하나를 꼭 체크해야함
 * 2.그 외 오더
 *   2.1.sie,type,fullEmpty 체크
 *   2.2.컨테이너번호 필수항목 체크
 *     2.2.1.필수항목 체크 제외 - on-hire, off-hire, empty position(컨테이너 미지정 가능한 오더)
 * PARAM : commInfoRows	= ds_commInfo.getRowCount()
 * PARAM : cntrInfoRows	= ds_cntrInfo.getRowCount()
 */
scwin.f_validateCommAndCntr = async function () {
  let commInfoRows = ds_commInfo.getRowCount();
  let cntrInfoRows = ds_cntrInfo.getRowCount();

  /************** 수출일반인 경우 **************/
  /******* 품명정보 - 중복 체크 *******/
  for (let i = 0; i < commInfoRows; i++) {
    if (ds_commInfo.getRowStatus(i) != "D") {
      //삭제건이 아닌 경우만 해당
      let sizeTypeFE = ds_commInfo.getCellData(i, "cntrSizCd").trim() + ds_commInfo.getCellData(i, "cntrTypCd").trim() + ds_commInfo.getCellData(i, "fullEmptyClsCd").trim();
      for (let j = 0; j < commInfoRows; j++) {
        if (i != j) {
          //같은 row인 경우는 제외
          if (ds_commInfo.getRowStatus(j) != "D") {
            //삭제건이 아닌 경우만 해당
            let tempSizeTypeFE = ds_commInfo.getCellData(j, "cntrSizCd").trim() + ds_commInfo.getCellData(j, "cntrTypCd").trim() + ds_commInfo.getCellData(j, "fullEmptyClsCd").trim();
            //품명 중복 체크
            if (sizeTypeFE == tempSizeTypeFE) {
              await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_032), ["품명목록", j + 1, "Size,Type,F/E"]); //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
              return false;
            }
          }
        }
      }
    } //if(ds_commInfo.getRowStatus(i) != 2)의 끝
  } //for(i=1; i<=commInfoRows; i++)의 끝

  /******* 컨테이너정보 - 중복 체크 *******/
  for (let i = 0; i < cntrInfoRows; i++) {
    //삭제건이 아닌 경우만 해당
    if (ds_cntrInfo.getRowStatus(i) != "D") {
      let cntrNo = ds_cntrInfo.getCellData(i, "cntrNo").trim();
      let cntrSizCd = ds_cntrInfo.getCellData(i, "cntrSizCd").trim();
      let cntrTypCd = ds_cntrInfo.getCellData(i, "cntrTypCd").trim();
      let fullEmptyClsCd = ds_cntrInfo.getCellData(i, "fullEmptyClsCd").trim();

      /* 컨테이너번호 필수항목 체크
       * 필수항목 체크 제외 - on-hire, off-hire, empty position(컨테이너 미지정 가능한 오더)
       */
      if ($c.gus.cfIsNull($p, cntrNo)) {
        //컨테이너 미지정하는 오더 : 수입하역, 수출하역
        await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_002), ["컨테이너목록", i + 1, "컨테이너번호"]); //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다.
        return false;
      }

      //컨테이너번호 중복 체크
      for (let j = 0; j < cntrInfoRows; j++) {
        if (i != j) {
          //같은 row인 경우는 제외
          if (ds_cntrInfo.getRowStatus(j) != "D") {
            //삭제건이 아닌 경우만 해당
            let tempCntrNo = ds_cntrInfo.getCellData(j, "cntrNo").trim();

            //컨테이너 중복 체크
            if (!$c.gus.cfIsNull($p, cntrNo)) {
              if (cntrNo == tempCntrNo) {
                await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_032), ["컨테이너목록", j + 1, "컨테이너번호"]); //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
                return false;
              }
            }
          }
        }
      } //for(j=1; j<=cntrInfoRows; j++)의 끝
    } //if(ds_cntrInfo.getRowStatus(i) != 2)의 끝
  } //for(i=1; i<=cntrInfoRows; i++)의 끝

  return true;
};

/**
 * method
 * @name f_calInputQty
 * @description retrieve후에 품명정보의 입력수량 계산하기
 * gubun == "Y" 인 경우, return false를 날림
 * gubun == "N" 인 경우, 조회후, 수량계산하기 위하여 사용, validation체크하지 않고, 오류메세지 나타나지 않게 함.
 */
scwin.f_calInputQty = async function (gubun) {
  //수량계산하기 전에 validation 체크
  if (gubun != "N") {
    if (!(await scwin.f_validateCommAndCntr())) {
      return;
    }
  }
  let cntrRows = ds_cntrInfo.getRowCount();
  let commRows = ds_commInfo.getRowCount();

  //수입/수출하역이 아닌 경우
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (!(scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR)) {
    /* 수입본선/일반,부두간TS,하선지경유TS(부두-->CY)오더인 경우 : 품명목록에 없는 종류인 경우, 자동으로 품명목록에 세팅하고, 수량,입력수량도 세팅
     * 수입일반인 경우 : FullEmpty구분할필요없음
     * 그 외의 경우 : 품명목록에 있는 경우, 수량/입력수량 세팅, 만약 품명목록에 없는 경우, 알림메시지 띄우기
     */
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      //수입일반
      //품명목록의 입력수량을 '0'으로 초기화
      for (let i = 0; i < commRows; i++) {
        //품명목록의 수량과 입력수량의 값이 '0'이 아닌 경우 삭제된 상태를 취소하기
        if (ds_commInfo.getRowStatus(i) == "D" && $c.num.parseFloat($p, ds_commInfo.getCellData(i, "qty")) > 0 && $c.num.parseFloat($p, ds_commInfo.getCellData(i, "inputQty")) > 0) {
          scwin.undoRow(ds_commInfo, i);
        }
        ds_commInfo.setCellData(i, "qty", "0");
        ds_commInfo.setCellData(i, "inputQty", "0");
      }
      //품명목록의 입력수량 계산
      for (let i = 0; i < cntrRows; i++) {
        if (ds_cntrInfo.getRowStatus(i) != "D") {
          //삭제건이 아닌 경우
          let sameYn = "N";
          let cntrSizCd = ds_cntrInfo.getCellData(i, "cntrSizCd");
          let cntrTypCd = ds_cntrInfo.getCellData(i, "cntrTypCd");
          let fullEmptyClsCd = ds_cntrInfo.getCellData(i, "fullEmptyClsCd");
          if (ds_commInfo.getRowCount() > 0) {
            let idx = 0;
            for (let j = 0; j < ds_commInfo.getRowCount(); j++) {
              if (cntrSizCd == ds_commInfo.getCellData(j, "cntrSizCd") && cntrTypCd == ds_commInfo.getCellData(j, "cntrTypCd") && fullEmptyClsCd == ds_commInfo.getCellData(j, "fullEmptyClsCd")) {
                sameYn = "Y";
                idx = j;
                break;
              }
            }
            if (sameYn == "N") {
              if (cntrSizCd != "" && cntrTypCd != "" && fullEmptyClsCd != "") {
                row = ds_commInfo.insertRow();
                ds_commInfo.setCellData(row, "cntrSizCd", cntrSizCd);
                ds_commInfo.setCellData(row, "cntrTypCd", cntrTypCd);
                ds_commInfo.setCellData(row, "fullEmptyClsCd", fullEmptyClsCd);
                ds_commInfo.setCellData(row, "qty", "1");
                ds_commInfo.setCellData(row, "inputQty", "1");
              }
            } else {
              ds_commInfo.setCellData(idx, "qty", $c.num.parseFloat($p, ds_commInfo.getCellData(idx, "qty")) + 1);
              ds_commInfo.setCellData(idx, "inputQty", $c.num.parseFloat($p, ds_commInfo.getCellData(idx, "inputQty")) + 1);
            }
          } else {
            if (cntrSizCd != "" && cntrTypCd != "" && fullEmptyClsCd != "") {
              row = ds_commInfo.insertRow();
              ds_commInfo.setCellData(0, "cntrSizCd", cntrSizCd);
              ds_commInfo.setCellData(0, "cntrTypCd", cntrTypCd);
              ds_commInfo.setCellData(0, "fullEmptyClsCd", fullEmptyClsCd);
              ds_commInfo.setCellData(0, "qty", "1");
              ds_commInfo.setCellData(0, "inputQty", "1");
            }
          } //if(commRows > 0)의 끝
        }
      }
      let focusRow = gr_commInfo.getFocusedRowIndex();
      let focusColid = gr_commInfo.getFocusedColumnID();
      //품명목록의 수량과 입력수량의 값이 '0'인 경우 삭제하기
      for (let i = ds_commInfo.getRowCount() - 1; i >= 0; i--) {
        if ($c.num.parseFloat($p, ds_commInfo.getCellData(i, "qty")) == 0 && $c.num.parseFloat($p, ds_commInfo.getCellData(i, "inputQty")) == 0) {
          scwin.deleteRow(ds_commInfo, i);
        }
      }
      if (focusRow >= ds_commInfo.getRowCount()) {
        focusRow = ds_commInfo.getRowCount() - 1;
      }
      gr_commInfo.setFocusedCell(focusRow, focusColid, false);
    }
  } //수입/수출하역이 아닌 경우, if의 끝

  return true;
};

/**
 * method
 * @name f_checkCommTypeByCntrTypeOnCloseUpEvent
 * @description gr_commInfo에서 OnCloseUp이벤트 발생시, 컨테이너목록을 체크한 후, 품명목록에 컨테이너 종류가 존재하지 않으면 에러
 * 사용자가 입력한 컨테이너 종류와 품명목록의 종류가 다른 것이 있는지 체크
 */
scwin.f_checkCommTypeByCntrTypeOnCloseUpEvent = async function (row, colid) {
  if ($c.num.parseFloat($p, ds_commInfo.getCellData(row, "inputQty")) > 0 && ds_commInfo.getCellData(row, colid) != scwin.orgCommVal && !scwin.f_checkCommTypeByCntrType()) {
    let commVal = "";
    if (colid == "cntrSizCd") {
      commVal = scwin.orgCommVal + ds_commInfo.getCellData(row, "cntrTypCd") + ds_commInfo.getCellData(row, "fullEmptyClsCd");
    } else if (colid == "cntrTypCd") {
      commVal = ds_commInfo.getCellData(row, "cntrSizCd") + scwin.orgCommVal + ds_commInfo.getCellData(row, "fullEmptyClsCd");
    } else if (colid == "fullEmptyClsCd") {
      commVal = ds_commInfo.getCellData(row, "cntrSizCd") + ds_commInfo.getCellData(row, "cntrTypCd") + scwin.orgCommVal;
    }
    await $c.gus.cfAlertMsg($p, MSG_SD_WRN_003, [commVal]); //컨테이너 목록에  [@]컨테이너가 존재하고 있으므로 해당 품명을 수정할 수 없습니다
    ds_commInfo.setCellData(row, colid, scwin.orgCommVal);
  }
};

/**
 * method
 * @name f_checkCommTypeByCntrType
 * @description gr_commInfo에서 OnCloseUp이벤트 발생시, 컨테이너목록을 체크한 후, 품명목록에 컨테이너 종류가 존재하지 않으면 에러
 * 사용자가 입력한 컨테이너 종류와 품명목록의 종류가 다른 것이 있는지 체크
 * scwin.f_checkCommTypeByCntrTypeOnCloseUpEvent()내에서 사용
 */
scwin.f_checkCommTypeByCntrType = function () {
  let cntrRows = ds_cntrInfo.getRowCount();
  let commRows = ds_commInfo.getRowCount();
  for (let i = 0; i < cntrRows; i++) {
    if (ds_cntrInfo.getRowStatus(i) != "D") {
      //삭제한 경우는 제외
      let cntrSize = ds_cntrInfo.getCellData(i, "cntrSizCd");
      let cntrType = ds_cntrInfo.getCellData(i, "cntrTypCd");
      let cntrFE = ds_cntrInfo.getCellData(i, "fullEmptyClsCd");
      let sameYn = "Y";
      for (let j = 0; j < commRows; j++) {
        if (ds_commInfo.getRowStatus(j) != "D") {
          //삭제한 경우는 제외
          if ($c.num.parseFloat($p, ds_commInfo.getCellData(j, "inputQty")) > 0) {
            let commSize = ds_commInfo.getCellData(j, "cntrSizCd");
            let commType = ds_commInfo.getCellData(j, "cntrTypCd");
            let commFE = ds_commInfo.getCellData(j, "fullEmptyClsCd");
            if (cntrSize != commSize || cntrType != commType || cntrFE != commFE) {
              sameYn = "N";
              break;
            }
          }
        }
      }
      if (sameYn == "N") {
        return false;
      }
    }
  }
  return true;
};

/**
 * method
 * @name f_beforeOpenCommonPopUpEdByLc
 * @params {Object} nmLcObj 코드명콤보(LuxCombo)
 * @params {Object} noEdObj 코드(emedit)
 * @params {Number} gubun1
 * @params {String} gubun2
 * @params {String} pWinCloseTF
 * @params {String} pAllSearchTF
 * @description 공통팝업 열기 전에 체크
 */
scwin.f_beforeOpenCommonPopUpEdByLc = async function (nmLcObj, noEdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  let noObjVal = noEdObj.getValue().trim();
  if (noEdObj.getValue() !== noEdObj.options.hidVal) {
    // noEdObj.options.hidVal = noEdObj.getValue();
    if (noObjVal == "") {
      nmLcObj.setValue("");
    } else {
      // nmLcObj.setValue("");
      //pcy
      await scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
    }
  }
};

/**
 * method
 * @name f_beforeOpenCommonPopUpTxt
 * @params {Object} nmObj 코드명(text)
 * @params {Object} cdObj 코드(emedit)
 * @params {Number} gubun1
 * @params {String} gubun2
 * @params {String} pWinCloseTF
 * @params {String} pAllSearchTF
 * @description 공통팝업 열기 전에 체크
 */
scwin.f_beforeOpenCommonPopUpTxt = async function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  if (nmObj.getValue() == nmObj.options.hidVal && cdObj.getValue() == cdObj.options.hidVal) {
    return;
  }
  if (nmObj.getValue() == "") {
    cdObj.setValue("");
    if (gubun1 == "3") {
      //Line조회
      ds_odrInfo.setCellData(0, "shpCoClntNo", "");
      ed_shpCoClntNm.setValue("");
    } else if (gubun1 == 1) {
      //거래처조회
      ds_ctrtNo.removeAll();
      ds_ctrtNo.reform();
      $c.gus.cfInitObjects($p, [ed_ctrtClntNo, ed_ctrtClntNm]);
      $c.gus.cfInitHidVal($p, [ed_ctrtClntNo, ed_ctrtClntNm]);
      scwin.clearReqClntNo();
      scwin.clearBilgClntNo();
      scwin.clearRealMchtClntNo();
    }
    return;
  } else {
    cdObj.setValue("");
    if (gubun1 == 3) {
      //Line조회
      ds_odrInfo.setCellData(0, "shpCoClntNo", "");
      ed_shpCoClntNm.setValue("");
    } else if (gubun1 == 1) {
      //거래처조회
      scwin.clearReqClntNo();
      scwin.clearBilgClntNo();
      scwin.clearRealMchtClntNo();
    }
  }
  await scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
};

/**
 * method
 * @name f_beforeOpenCommonPopUpEd
 * @params {Object} nmObj 코드명(text)
 * @params {Object} cdObj 코드(emedit)
 * @params {Number} gubun1
 * @params {String} gubun2
 * @params {String} pWinCloseTF
 * @params {String} pAllSearchTF
 * @description 공통팝업 열기 전에 체크 - EMEDIT onKillFocus 이벤트 발생시
 * @example scwin.f_beforeOpenCommonPopUpTxt(this,ed_alloccarPicId,9,'','T','F')
 * scwin.f_beforeOpenCommonPopUpEd(ed_alloccarPicNm1, this, 9, "", "T", "F");
 * scwin.f_beforeOpenCommonPopUpEd(ed_alloccarPicNm, this, 9, "", "T", "F");
 */
scwin.f_beforeOpenCommonPopUpEd = async function (nmObj, cdObj, gubun1, gubun2, pWinCloseTF, pAllSearchTF) {
  let cdObjVal = cdObj.getValue().trim();
  if (cdObj.getValue() !== cdObj.options.hidVal) {
    cdObj.options.hidVal = cdObj.getValue();
    if (cdObjVal == "") {
      nmObj.setValue("");
      nmObj.options.hidVal = "";
      if (gubun1 == 3) {
        //Line조회
        ds_odrInfo.setCellData(0, "shpCoClntNo", "");
        ed_shpCoClntNm.setValue("");
      } else if (gubun1 == 1) {
        //거래처조회
        ds_ctrtNo.removeAll();
        ds_ctrtNo.reform();
        $c.gus.cfInitObjects($p, [ed_ctrtClntNo, ed_ctrtClntNm]);
        $c.gus.cfInitHidVal($p, [ed_ctrtClntNo, ed_ctrtClntNm]);
        scwin.clearReqClntNo();
        scwin.clearBilgClntNo();
        scwin.clearRealMchtClntNo();
      }
    } else {
      nmObj.setValue("");
      nmObj.options.hidVal = "";
      await scwin.f_openCommonPopUp(gubun1, gubun2, pWinCloseTF, pAllSearchTF, 'F');
    }
  }
};

/**
 * method
 * @name f_openCommonPopUp
 * @description 공통팝업 열기
 */
scwin.f_openCommonPopUp = async function (gubun1, gubun2, pWinCloseTF, pAllSearchTF, pNoDataCloseTF, extraCallback = null) {
  if ($c.gus.cfIsNull($p, gubun1)) {
    return false;
  }
  let pCode = "";
  let pName = "";
  let pWhere = "";
  let pWtitleSearch = "";
  let rtnList = null;
  let udc = null;
  let callback = null;
  let row = null;
  switch (gubun1) {
    case 1:
      //계약거래처 팝업
      if (gubun2 == "CTRT") {
        //계약거래처
        udc = udc_ctrtClnt;
        callback = rtnList => {
          $c.gus.cfSetReturnValue($p, rtnList, ed_ctrtClntNo, ed_ctrtClntNm);
          scwin.f_retrieveCtrtNo(); //계약번호 가져오기
        };
        pCode = ed_ctrtClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_reqClntNo.options.hidVal = pCode;
          lc_reqClntNm.setValue("");
        }
        pName = ed_ctrtClntNm.getValue();
        pWtitleSearch = "계약 거래처,거래처코드,거래처명";
        pWhere = ",CTRT,CTRT";
      } else if (gubun2 == "REQ") {
        //요청거래처
        udc = udc_hidComCode;
        udc_hidComCode.setSelectId("retrieveClntInfo");
        callback = rtnList => {
          if (rtnList != null) {
            if (rtnList[0] != "N/A") {
              let clntNo = rtnList[0].trim();
              ed_reqClntNo.setValue(clntNo);
              ed_reqClntNo.options.hidVal = clntNo;
              let matched = ds_reqClntNo.getMatchedIndex("clntNo", clntNo, true);
              if (!matched.length) {
                //사용자편의를 위하여 데이터셋에 추가
                row = ds_reqClntNo.insertRow();
                ds_reqClntNo.setCellData(row, "clntNo", clntNo);
                ds_reqClntNo.setCellData(row, "clntNm", rtnList[1]);
              }
              lc_reqClntNm.setValue(clntNo);
            }
          } else {
            $c.gus.cfInitObjects($p, [ed_reqClntNo]);
            $c.gus.cfInitHidVal($p, [ed_reqClntNo]);
            lc_reqClntNm.setValue("");
          }
        };
        pCode = ed_reqClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_reqClntNo.options.hidVal = pCode;
          lc_reqClntNm.setValue("");
        }
        pName = lc_reqClntNm.getText(true);
        ed_reqClntNo.setValue("");
        lc_reqClntNm.setValue("");
        pWtitleSearch = "요청 거래처,거래처코드,거래처명";
        pWhere = ",,CTRT";
      } else if (gubun2 == "BILG") {
        //청구거래처
        udc = udc_hidComCode;
        udc_hidComCode.setSelectId("retrieveClntInfo");
        callback = rtnList => {
          if (rtnList != null) {
            if (rtnList[0] != "N/A") {
              let clntNo = rtnList[0].trim();
              ed_bilgClntNo.setValue(clntNo);
              ed_bilgClntNo.options.hidVal = clntNo;
              let matched = ds_bilgClntNo.getMatchedIndex("clntNo", clntNo, true);
              if (!matched.length) {
                //사용자편의를 위하여 데이터셋에 추가
                row = ds_bilgClntNo.insertRow();
                ds_bilgClntNo.setCellData(row, "clntNo", clntNo);
                ds_bilgClntNo.setCellData(row, "clntNm", rtnList[1]);
              }
              lc_bilgClntNm.setValue(clntNo);
              scwin.f_retrieveCtrtNo2(); //계약번호 가져오기
            }
          } else {
            $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
            $c.gus.cfInitHidVal($p, [ed_bilgClntNo]);
            lc_bilgClntNm.setValue("");
          }
        };
        pCode = ed_bilgClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_bilgClntNo.options.hidVal = pCode;
          lc_bilgClntNm.setValue("");
        }
        pName = lc_bilgClntNm.getText(true);
        ed_bilgClntNo.setValue("");
        lc_bilgClntNm.setValue("");
        pWtitleSearch = "청구 거래처,거래처코드,거래처명";
        pWhere = ",,CTRT";
      } else if (gubun2 == "REAL") {
        //실화주거래처
        udc = udc_hidComCode;
        udc_hidComCode.setSelectId("retrieveClntInfo");
        callback = rtnList => {
          if (rtnList != null) {
            if (rtnList[0] != "N/A") {
              let clntNo = rtnList[0].trim();
              ed_realMchtClntNo.setValue(clntNo);
              ed_realMchtClntNo.options.hidVal = clntNo;
              let matched = ds_realMchtClntNo.getMatchedIndex("clntNo", clntNo, true);
              if (!matched.length) {
                //사용자편의를 위하여 데이터셋에 추가
                row = ds_realMchtClntNo.insertRow();
                ds_realMchtClntNo.setCellData(row, "clntNo", clntNo);
                ds_realMchtClntNo.setCellData(row, "clntNm", rtnList[1]);
              }
              lc_realMchtClntNm.setValue(clntNo);
            }
          } else {
            $c.gus.cfInitObjects($p, [ed_realMchtClntNo]);
            $c.gus.cfInitHidVal($p, [ed_realMchtClntNo]);
            lc_realMchtClntNm.setValue("");
          }
        };
        pCode = ed_realMchtClntNo.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_realMchtClntNo.options.hidVal = pCode;
          lc_realMchtClntNm.setValue("");
        }
        pName = lc_realMchtClntNm.getText(true);
        ed_realMchtClntNo.setValue("");
        lc_realMchtClntNm.setValue("");
        pWtitleSearch = "실화주 거래처,거래처코드,거래처명";
        pWhere = ",,CTRT";
      }
      await udc?.cfCommonPopUpAsync(callback, pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      '9',
      //pDispCnt
      "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,",
      //pTitle
      '100,100,0,120,100,0,100,100,100,0',
      //pWidth
      "3,10",
      //pHidden
      pWhere,
      //pWhere
      '800',
      //pW
      '600',
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 2:
      //매출/청구부서
      if (gubun2 == "SELL") {
        //매출부서
        udc = udc_sellLodept;
        callback = rtnList => {
          if (pNoDataCloseTF == "T" && rtnList == "N/A") {
            //내부적으로 팝업프로세스 돌린 경우
            $c.gus.cfInitObjects($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
            $c.gus.cfInitHidVal($p, [ed_sellLodeptCd, ed_sellLodeptNm]);
          } else {
            $c.gus.cfSetReturnValue($p, rtnList, ed_sellLodeptCd, ed_sellLodeptNm);
          }
        };
        pCode = ed_sellLodeptCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_sellLodeptCd.options.hidVal = pCode;
          ed_sellLodeptNm.setValue("");
          pWhere = "T,J,,,T,T,1";
        } else {
          pWhere = "T,J,,,,T,1";
        }
        pName = ed_sellLodeptNm.getValue();
        pWtitleSearch = "매출부서,부서코드,부서명";
      } else if (gubun2 == "BILG") {
        //청구부서
        udc = udc_bilgLodept;
        callback = rtnList => {
          if (pNoDataCloseTF == "T" && rtnList == "N/A") {
            //내부적으로 팝업프로세스 돌린 경우
            $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
            $c.gus.cfInitHidVal($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
          } else {
            $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
          }
        };
        pCode = ed_bilgLodeptCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_bilgLodeptCd.options.hidVal = pCode;
          ed_bilgLodeptNm.setValue("");
          pWhere = "T,J,,,T,,,1";
        } else {
          pWhere = "T,J,,,,,,1";
        }
        pName = ed_bilgLodeptNm.getValue();
        pWtitleSearch = "청구부서,부서코드,부서명";
      }
      await udc?.cfCommonPopUpAsync(callback, pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 3:
      //Line조회 - Line코드, Line명, 선사코드, 선사코드명
      pCode = ed_lineCd.getValue().trim();
      if (pNoDataCloseTF == "T") {
        ed_lineCd.options.hidVal = pCode;
        $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
        $c.gus.cfInitHidVal($p, [ed_lineNm, ed_shpCoClntNm]);
        ds_odrInfo.setCellData(0, "shpCoClntNo", "");
        pWhere = "T";
      }
      pName = ed_lineNm.getValue();
      pWtitleSearch = "LINE,LINE코드,LINE명";
      callback = async rtnList => {
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
            if (scwin.odrKndCd == DsConstants.ODR_KND_CD_ON_HIRE_ODR) {
              // On-Hire
              if (ed_ctrtClntNo.getValue().trim() != rtnList[2]) {
                await $c.gus.cfAlertMsg($p, "계약거래처와 라인거래처가 상이합니다. 확인 후 다시 입력하여 주세요.");
              }
            }
            ed_lineCd.setValue(rtnList[0]);
            ed_lineCd.options.hidVal = rtnList[0];
            ed_lineNm.setValue(rtnList[1]);
            ed_lineNm.options.hidVal = rtnList[1];
            ds_odrInfo.setCellData(0, "shpCoClntNo", rtnList[4]);
            ed_shpCoClntNm.setValue(rtnList[5]);
            ed_shpCoClntNm.options.hidVal = rtnList[5];
          } else {
            $c.gus.cfInitObjects($p, [ed_lineNm, ed_shpCoClntNm]);
            $c.gus.cfInitHidVal($p, [ed_lineNm, ed_shpCoClntNm]);
            ds_odrInfo.setCellData(0, "shpCoClntNo", "");
          }

          //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
          if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선
          || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR //수입하역
          || scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR //부두간TS
          || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR //하선지경유TS(부두-->CY)
          ) {
            scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
          }
        } else {
          $c.gus.cfInitObjects($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
          $c.gus.cfInitHidVal($p, [ed_lineCd, ed_lineNm, ed_shpCoClntNm]);
          ds_odrInfo.setCellData(0, "shpCoClntNo", "");

          //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
          if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선
          || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR //수입하역
          || scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR //부두간TS
          || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR //하선지경유TS(부두-->CY)
          ) {
            scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
          }
        }
        if (extraCallback !== null) {
          await extraCallback();
        }
      };
      await udc_line.cfCommonPopUpAsync(callback, pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 4:
      {
        //본선관리번호 조회 - 선박코드, (선사)항차, 마감일시, 항구코드 가져오기
        let arrParam = new Array(2);
        if (gubun2 == "") {
          //본선관리번호
          arrParam[0] = ed_cvsslMgntNo.getValue().trim();
          arrParam[1] = scwin.impExpClsCd;
        } else if (gubun2 == "TS") {
          //TS본선관리번호
          arrParam[0] = ed_tsCvsslMgntNo.getValue().trim();
          arrParam[1] = 'O';
        }
        let options = {
          id: "op_204_01_07p_popup",
          popupName: "본선관리번호검색팝업",
          modal: true,
          type: "browserPopup",
          //화면 오픈 타입 ("pageFramePopup", "browserPopup")
          width: 1050,
          height: 650
        };
        rtnList = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, arrParam);
        //본선관리번호팝업의 리턴값에서 오더종류별로 필요한 값 세팅

        scwin.f_setCvsslMgntNoByOdrKndCd(rtnList, gubun2);
        break;
      }
    case 5:
      //출발/도착 작업장 조회 - 코드/명 가져오기
      if (gubun2 == "DPT") {
        //출발작업장
        udc = udc_dptWrkPl;
        callback = rtnList => {
          $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
          //작업장구분코드가 'G'인 경우, 상세를 필수로 변경
          if (rtnList != null) {
            if (rtnList[0] != "N/A") {
              if (!$c.gus.cfIsNull($p, rtnList[2]) && rtnList[2] == "G") {
                ed_dptDtl.setUSerData;
                ed_dptDtl.setUserData("validExp", "From 상세:yes");
              } else {
                ed_dptDtl.setUserData("validExp", "");
              }
            }
          }
        };
        pCode = ed_dptWrkPlCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_dptWrkPlCd.options.hidVal = pCode;
          ed_dptWrkPlNm.setValue("");
        }
        pName = ed_dptWrkPlNm.getValue();
        pWtitleSearch = "출발작업장,작업장코드,작업장명";
        pWhere = ",,,,,,1";
      } else if (gubun2 == "ARV") {
        //도착작업장
        udc = udc_arvWrkPl;
        callback = rtnList => {
          $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvWrkPlNm);
          //작업장구분코드가 'G'인 경우, 상세를 필수로 변경
          if (rtnList != null) {
            if (rtnList[0] != "N/A") {
              //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
              if (!$c.gus.cfIsNull($p, rtnList[2]) && rtnList[2] == "G" && !(scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR)) {
                ed_arvDtl.setUserData("validExp", "To 상세:yes");
              } else {
                ed_arvDtl.setUserData("validExp", "");
              }
            }
          }
        };
        pCode = ed_arvWrkPlCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_arvWrkPlCd.options.hidVal = pCode;
          ed_arvWrkPlNm.setValue("");
        }
        pName = ed_arvWrkPlNm.getValue();
        pWtitleSearch = "도착작업장,작업장코드,작업장명";
        pWhere = ",,,,,,1";

        //컨테이너에 해당되는 도착지(To)의 범위를 벗어나는 경우 세팅 불가
        //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
        if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선
        || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR //수입하역
        || scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR //부두간TS
        || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR //하선지경유TS(부두-->CY)
        ) {
          if (!(await scwin.f_checkOdrArvWrkPlCdForCntr(pCode))) {
            $c.gus.cfInitObjects($p, [ed_arvWrkPlCd, ed_arvWrkPlNm]);
            $c.gus.cfInitHidVal($p, [ed_arvWrkPlCd, ed_arvWrkPlNm]);
            return;
          }
        }
      }
      await udc?.cfCommonPopUpAsync(callback, pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      pWhere,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      "F",
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 6:
      //목적Port조회 - 코드/명 가져오기
      pCode = ed_destPortCd.getValue().trim();
      if (pNoDataCloseTF == "T") {
        ed_destPortCd.options.hidVal = pCode;
        hid_destPortNm.setValue("");
      }
      pName = hid_destPortNm.getValue();
      pWtitleSearch = "목적항구,항구코드,항구명";
      await udc_destPort.cfCommonPopUpAsync(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_destPortCd, hid_destPortNm), pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 7:
      {
        //BL정보 가져오기
        let arrParam = new Array(4);
        arrParam[0] = ed_blNo.getValue().trim(); //bl번호
        arrParam[1] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
        arrParam[2] = lc_mcomAssgnClsCd.getValue(); //배정구분코드
        arrParam[3] = scwin.impExpClsCd; //수출입구분코드
        arrParam[4] = 0; //bulkYn : 0-컨테이너, 1-벌크
        arrParam[5] = ed_lineCd.getValue().trim(); //LINE 코드
        arrParam[6] = DsConstants.YN_NO; // TS 오더가 아닌경우로 세팅
        arrParam[7] = "F"; //다중선택 여부
        arrParam[8] = "F"; // TS 오더가 아닌경우로 세팅
        let options = {
          id: "sd_402_01_29p_popup",
          popupName: "BL조회",
          modal: true,
          type: "browserPopup",
          //화면 오픈 타입 ("pageFramePopup", "browserPopup")
          width: 1500,
          height: 550
        };
        rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml", options, arrParam);
        if (rtnList != null) {
          if (rtnList[0] != "N/A") {
            ed_blNo.setValue(rtnList[3]); // B/L 번호
            ed_blNo.options.hidVal = rtnList[3];
            ed_lineCd.setValue(rtnList[4]); //Line코드
            ed_lineCd.options.hidVal = rtnList[4];
            lc_mcomAssgnClsCd.setValue(rtnList[5]); //배정구분코드
            ed_cvsslMgntNo.setValue(rtnList[6]); // 본선관리번호
            ed_cvsslMgntNo.options.hidVal = rtnList[6];
            ed_portcnt.setValue(rtnList[7]); //항차
            ed_portcnt.options.hidVal = rtnList[7];
            ed_vsslCd.setValue(rtnList[8]); //모선
            ed_vsslCd.options.hidVal = rtnList[8];
            ed_vsslNm.setValue(rtnList[9]); //모선명
            ed_vsslNm.options.hidVal = rtnList[9];
            ds_odrInfo.setCellData(0, "portCd", rtnList[10]); //항구코드
            ed_bondTransExpireDt.setValue(rtnList[11]); //보세운송만료일
            ed_bondTransExpireDt.options.hidVal = rtnList[11];

            //검색기오더인 경우 : 부두코드를 출발지에 세팅
            //그 외 오더 : 하선장소코드를 출발지에 세팅
            //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
            if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXAMINE_ODR) {
              ed_dptWrkPlCd.setValue(rtnList[16]); //부두코드
              ed_dptWrkPlNm.setValue(rtnList[17]); //부두코드명
            } else {
              ed_dptWrkPlCd.setValue(rtnList[12]); //하선장소코드
              ed_dptWrkPlNm.setValue(rtnList[13]); //하선장소명
            }
            ed_arvDt.setValue(rtnList[14]); //입항일자
            ed_arvHh.setValue(rtnList[15]); //입항시간

            //도착작업장 세팅(수입일반오더인 경우 : 당사배정구분코드의 첫째자리가  'B'인 경우 배정창고를 도착작업장으로 세팅)
            scwin.assgnWhouseCd = rtnList[18]; //배정창고코드
            scwin.assgnWhouseNm = rtnList[19]; //배정창고코드명
            scwin.f_setValueArvWrkPlCdByBlNo();
            ds_blInfo.removeAll();
            ds_blInfo.reform();
            ds_blInfo.insertRow();
            ds_blInfo.setCellData(0, "mrn", rtnList[0]); //적하목록관리번호(mrn)
            ds_blInfo.setCellData(0, "msn", rtnList[1]); //MSN
            ds_blInfo.setCellData(0, "hsn", rtnList[2]); //HSN
            ds_blInfo.setCellData(0, "blNo", rtnList[3]); //HOUSE_BL번호

            //Line명과 선사거래처 가져오기
            await scwin.f_openCommonPopUp(3, '', 'T', 'F', 'T', async () => {
              //BL번호로 적하목록 BL 품명 정보를 조회한다.
              await scwin.f_retrieveBillOfLadingContainerList();
            });
          }
        } else {
          scwin.f_clearDataByBlNo();
        }
        break;
      }
    case 8:
      //선박조회
      udc = udc_vssl;
      callback = rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm); //본선의 선박코드
      if (gubun2 == "") {
        //본선의 선박코드
        pCode = ed_vsslCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_vsslCd.options.hidVal = pCode;
          ed_vsslNm.setValue("");
        }
        pName = ed_vsslNm.getValue();
        pWtitleSearch = "선박, 코드, 코드명";
      } else if (gubun2 == "TS") {
        //TS본선의 선박코드
        callback = rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_tsVsslCd, ed_tsVsslNm); //TS본선의 선박코드
        udc = udc_tsVssl;
        pCode = ed_tsVsslCd.getValue().trim();
        if (pNoDataCloseTF == "T") {
          ed_tsVsslCd.options.hidVal = pCode;
          ed_tsVsslNm.setValue("");
        }
        pName = ed_tsVsslNm.getValue();
        pWtitleSearch = "TS선박, 코드, 코드명";
      }
      await udc.cfCommonPopUpAsync(callback, pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      pWtitleSearch,
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 9:
      //배차담당
      pCode = ed_alloccarPicId.getValue().trim();
      if (pNoDataCloseTF == "T") {
        ed_alloccarPicId.options.hidVal = pCode;
        ed_alloccarPicNm.setValue("");
      }
      pName = ed_alloccarPicNm.getValue();
      await udc_alloccarPic.cfCommonPopUpAsync(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, ed_alloccarPicNm), pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "등록자,사용자ID,사용자명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 10:
      //배차담당1  ed_alloccarPicNm1  hid_alloccarPicId1
      pCode = "";
      pName = ed_alloccarPicNm1.getValue();
      await udc_alloccarPic.cfCommonPopUpAsync(rtnList => $c.gus.cfSetReturnValue($p, rtnList, hid_alloccarPicId1, ed_alloccarPicNm1), pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "등록자,사용자ID,사용자명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 11:
      //배차담당1  ed_alloccarPicNm1  hid_alloccarPicId1
      pCode = "";
      pName = ed_alloccarPicNm2.getValue();
      udc_hidComCode.setSelectId("retrieveUserInfo");
      await udc_hidComCode.cfCommonPopUpAsync(rtnList => $c.gus.cfSetReturnValue($p, rtnList, hid_alloccarPicId2, ed_alloccarPicNm2), pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "등록자,사용자ID,사용자명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 12:
      //배차담당1  ed_alloccarPicNm1  hid_alloccarPicId1
      pCode = "";
      pName = ed_alloccarPicNm3.getValue();
      udc_hidComCode.setSelectId("retrieveUserInfo");
      await udc_hidComCode.cfCommonPopUpAsync(rtnList => $c.gus.cfSetReturnValue($p, rtnList, hid_alloccarPicId3, ed_alloccarPicNm3), pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "등록자,사용자ID,사용자명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 13:
      //배차담당1  ed_alloccarPicNm1  hid_alloccarPicId1
      pCode = "";
      pName = ed_alloccarPicNm4.getValue();
      udc_hidComCode.setSelectId("retrieveUserInfo");
      await udc_hidComCode.cfCommonPopUpAsync(rtnList => $c.gus.cfSetReturnValue($p, rtnList, hid_alloccarPicId4, ed_alloccarPicNm4), pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "등록자,사용자ID,사용자명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
    case 14:
      //배차담당1  ed_alloccarPicNm1  hid_alloccarPicId1
      pCode = "";
      pName = ed_alloccarPicNm5.getValue();
      udc_hidComCode.setSelectId("retrieveUserInfo");
      await udc_hidComCode.cfCommonPopUpAsync(rtnList => $c.gus.cfSetReturnValue($p, rtnList, hid_alloccarPicId5, ed_alloccarPicNm5), pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "등록자,사용자ID,사용자명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      pNoDataCloseTF,
      //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      null);
      break;
  }
};

/**
 * method
 * @name f_openPopUpGridBefore
 * @description 그리드에서 팝업오픈하기전 작업(코드와 코드명이 있는 경우)
 */
scwin.f_openPopUpGridBefore = function (ds, row, cdColid, nmColid, olddata, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  if (ds.getCellData(row, cdColid) != "" && ds.getCellData(row, cdColid) != olddata) {
    ds.setCellData(row, nmColid, "");
    scwin.f_openPopUpGrid(ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF);
  } else if (ds.getCellData(row, cdColid) == "") {
    ds.setCellData(row, cdColid, "");
    ds.setCellData(row, nmColid, "");
  }
};

/**
 * method
 * @name f_openPopUpGrid
 * @description 그리드 팝업
 * 1.컨테이너목록(From(출발지)) : 작업장구분코드가 지역인 경우, 에러메시지 띄우고 ''처리하기
 */
scwin.f_openPopUpGrid = function (ds, row, cdColid, nmColid, gubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let pWtitleSearch = null;
  let pWhere = null;
  let pSelectID = null;
  if (gubun == 1) {
    //컨테이너목록 - TO(도착지)
    pSelectID = "retrieveWrkPlInfo";
    pWtitleSearch = "작업장,코드,코드명";
  } else if (gubun == 2) {
    //컨테이너목록 - 현위치
    pSelectID = "retrieveWrkPlInfo";
    pWtitleSearch = "현위치, 코드, 코드명";
  } else if (gubun == 3) {
    //컨테이너목록 - 항구코드
    pSelectID = "retrievePortInfo";
    pWtitleSearch = "항구, 코드, 코드명";
  } else if (gubun == 4) {
    //컨테이너목록 - 항구코드
    pSelectID = "retrievePortInfo";
    pWtitleSearch = "목적항구, 코드, 코드명";
  } else if (gubun == 5) {
    //컨테이너목록 - From(출발지)
    pSelectID = "retrieveWrkPlInfo";
    pWtitleSearch = "작업장,코드,코드명";
    pWhere = "";
  }
  if (!pSelectID) {
    return;
  }
  udc_hidComCode.setSelectId(pSelectID);
  let pCode = ds.getCellData(row, cdColid);
  ds.setCellData(row, cdColid, "");
  udc_hidComCode.cfCommonPopUp(rtnList => $c.gus.cfSetGridReturnValue($p, rtnList, ds, row, cdColid, nmColid), pCode,
  //pCode
  "",
  //pName
  pWinCloseTF,
  //pWinCloseTF
  null,
  //pDispCnt
  null,
  //pTitle
  null,
  //pWidth
  null,
  //pHidden
  pWhere,
  //pWhere
  null,
  //pW
  null,
  //pH
  null,
  //pTop
  null,
  //pLeft
  null,
  //pExistTF - 중복체크여부	("F")
  pAllSearchTF,
  //pAllSearchTF - 전체검색허용여부	("F")
  pWtitleSearch,
  //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  null, null); //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
};

/**
 * method
 * @name f_setValueBeforeValidation
 * @description validate 체크하기 전에 세팅되어야 할 값
 */
scwin.f_setValueBeforeValidation = async function () {
  //수입일반(자가영업), 수출일반(자가영업), Empty Position(자가영업), On-Hire오더인 경우 Line코드 세팅
  //RCL/ANL인경우 청구처 CHECK함./
  if (ed_lineCd.getValue() == "ANL" || ed_lineCd.getValue() == "RCL") {
    if (ed_bilgClntNo.getValue() == "999901") {
      await $c.gus.cfAlertMsg($p, "RCL/AML 라인은  청구처를   공통거래처을 넣을 수  입니다.");
      return;
    }
  }
};

/**
 * method
 * @name f_validate
 * @description 유효성 확인
 */
scwin.f_validate = async function () {
  let commInfoRows = ds_commInfo.getRowCount(); //품명목록 row수
  let cntrInfoRows = ds_cntrInfo.getRowCount(); //컨테이너목록 row수
  let commWrkDtHhShow = "N"; //품명 출발/도착일시 show 여부
  let cntrWrkDtHhShow = "N"; //컨테이너 출발/도착일시 show 여부
  let odrLineCd = ed_lineCd.getValue().trim(); //오더정보의 Line코드

  //품명목록 또는 컨테이너목록이 한건도 입력되지 않은 경우
  if (commInfoRows == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["품명목록"]); //@은(는) 필수 입력 항목입니다
    return false;
  }

  //오더기본정보 - 계약거래처가 '공통거래처'인 경우, 청구거래처가 '공통거래처'가 오면 안됨
  if (lc_bilgClntNm.getText(true).substring(0, 5) == "공통거래처") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["청구거래처", "공통거래처를 입력"]); //@은(는) @할 수 없습니다.
  }

  //오더기본정보-출발일자, 도착일자 체크
  if (!(await scwin.f_chkDate(ed_wrkStDt.getValue(), ed_wrkEndDt.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["출발일자(입항일자)", "도착일자(출항일자) 이전"]); //"@은(는) @이어야 합니다."
    ed_wrkStDt.focus();
    return false;
  }
  if (!scwin.f_chkTime(ed_wrkStDt.getValue(), ed_wrkStHh.getValue(), ed_wrkEndDt.getValue(), ed_wrkEndHh.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["출발시간(입항시간)", "도착시간(출항시간) 이전"]); //"@은(는) @이어야 합니다."
    ed_wrkStDt.focus();
    return false;
  }

  //상차,하차,오더 담당 전화번호 유효성 확인
  if (tr_picNmTelNo.getStyle("display") != "none") {
    if (ed_onPicTelNo.getValue() != "") {
      if (!dscommon.cf_PhoneCheck(ed_onPicTelNo)) {
        return false;
      }
    }
    if (ed_offPicTelNo.getValue() != "") {
      if (!dscommon.cf_PhoneCheck(ed_offPicTelNo)) {
        return false;
      }
    }
    if (ed_odrPicTelNo.getValue() != "") {
      if (!dscommon.cf_PhoneCheck(ed_odrPicTelNo)) {
        return false;
      }
    }
  }

  //품명정보-출발일자, 도착일자 체크
  if (gr_commInfo.getColumnVisible("wrkStDt") && gr_commInfo.getColumnVisible("wrkStHh") && gr_commInfo.getColumnVisible("wrkEndDt") && gr_commInfo.getColumnVisible("wrkEndHh")) {
    commWrkDtHhShow = "Y";
  }

  //컨테이너정보-출발일자, 도착일자 체크
  if (gr_cntrInfo.getColumnVisible("wrkStDt") && gr_cntrInfo.getColumnVisible("wrkStHh") && gr_cntrInfo.getColumnVisible("wrkEndDt") && gr_cntrInfo.getColumnVisible("wrkEndHh")) {
    cntrWrkDtHhShow = "Y";
  }

  //품명정보 validation체크
  for (let i = 0; i < commInfoRows; i++) {
    if (ds_commInfo.getRowStatus(i) != "D") {
      //삭제건이 아닌 경우
      //수량체크
      if ($c.num.parseFloat($p, ds_commInfo.getCellData(i, "inputQty")) > $c.num.parseFloat($p, ds_commInfo.getCellData(i, "qty"))) {
        await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_048), ["품명목록", i + 1, "입력수량 ", "수량"]); //@의 @번째 데이터에서 + @은(는) @보다 작아야 합니다.
        return false;
      }

      //일시체크
      if (commWrkDtHhShow == "Y") {
        //출발일시 입력하지 않은 경우, 오더정보의 출발일시로 대체
        if (ds_commInfo.getCellData(i, "wrkStDt") == "" || ds_commInfo.getCellData(i, "wrkStHh") == "") {
          let msg = (MSG_CM_ERR_031 + "출발일자 또는 시간을 입력하지 않았습니다. 오더정보의 출발(입항)일시로 대체하시겠습니까?").replace("%1", "품명목록").replace("%2", i + 1);
          if (await $c.win.confirm($p, msg)) {
            ds_commInfo.setCellData(i, "wrkStDt", ed_wrkStDt.getValue().trim());
            ds_commInfo.setCellData(i, "wrkStHh", ed_wrkStHh.getValue().trim());
          } else {
            return false;
          }
        }

        //도착일시 입력하지 않은 경우, 오더정보의 도착일시로 대체
        if (ds_commInfo.getCellData(i, "wrkEndDt") == "" || ds_commInfo.getCellData(i, "wrkEndHh") == "") {
          let msg = (MSG_CM_ERR_031 + "도착일자 또는 시간을 입력하지 않았습니다. 오더정보의 도착(출항)일시로 대체하시겠습니까?").replace("%1", "품명목록").replace("%2", i + 1);
          if (await $c.win.confirm($p, msg)) {
            ds_commInfo.setCellData(i, "wrkEndDt", ed_wrkStDt.getValue().trim());
            ds_commInfo.setCellData(i, "wrkEndHh", ed_wrkStHh.getValue().trim());
          } else {
            return false;
          }
        }
        //품명목록의 출발일자와 도착일자 비교
        if (!(await scwin.f_chkDate(ds_commInfo.getCellData(i, "wrkStDt"), ds_commInfo.getCellData(i, "wrkEndDt")))) {
          await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_061), ["품명목록", i + 1, "출발일자", "도착일자 이전"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_commInfo.setFocusedCell(i, gr_commInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_commInfo), false);
          return false;
        }

        //품명목록의 출발시간와 도착시간 비교
        if (!scwin.f_chkTime(ds_commInfo.getCellData(i, "wrkStDt"), ds_commInfo.getCellData(i, "wrkStHh"), ds_commInfo.getCellData(i, "wrkEndDt"), ds_commInfo.getCellData(i, "wrkEndHh"))) {
          await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_061), ["품명목록", i + 1, "출발시간", "도착시간 이전"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          gr_commInfo.setFocusedCell(i, gr_commInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_commInfo), false);
          return false;
        }
      } //일시체크의 끝
    } //if(ds_commInfo.getRowStatus(i) != 2){ //삭제건이 아닌 경우
  } //for(i=1; i<=commInfoRows; i++){	의 끝

  //컨테이너정보 - 수입본선,수입/수출하역, 부두간TS, 하선지경유TS가 아닌 경우
  if (gr_commInfo.getColumnVisible("cntrTypCd") && gr_commInfo.getColumnVisible("inputQty")) {
    //수입/수출하역이 아닌 경우

    //컨테이너정보 validation체크
    for (let i = 0; i < cntrInfoRows; i++) {
      if (ds_cntrInfo.getRowStatus(i) != "D" && $c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
        //삭제건이 아니고, 실적이 일어난 경우가 아닌 경우만 해당
        //라인코드 체크 - 검색기 오더는 제외
        if (scwin.odrKndCd != DsConstants.ODR_KND_CD_EXAMINE_ODR //검색기
        && scwin.odrKndCd != DsConstants.ODR_KND_CD_TS_ODR && !$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "cntrNo")) && odrLineCd != ds_cntrInfo.getCellData(i, "lineCd")) {
          await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_061), ["컨테이너목록", i + 1, "Line코드", "오더정보와 같은 Line코드"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
          return false;
        }

        //컨테이너 type이 RF/RH인 경우, 온도 또는 dry 체크
        let cntrType = ds_cntrInfo.getCellData(i, "cntrTypCd").trim();
        let temper = ds_cntrInfo.getCellData(i, "temper").trim();
        let dryYn = ds_cntrInfo.getCellData(i, "dryYn");
        if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "cntrNo")) && (cntrType == DsConstants.CNTR_TYP_CD_RF || cntrType == DsConstants.CNTR_TYP_CD_RH)) {
          //온도 또는 dry 중 하나라도 입력했는지 체크
          if ($c.gus.cfIsNull($p, temper) && dryYn == DsConstants.YN_NO) {
            await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_002), ["컨테이너목록", i + 1, "TYPE이 RF/RH인 경우, 온도 또는 DRY"]); //@의 @번째 데이터에서 @은(는) 필수 입력 항목입니다.
            return false;
          }

          //온도 또는 dry 모두 입력했는지 체크
          if (!$c.gus.cfIsNull($p, temper) && dryYn == DsConstants.YN_YES) {
            await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_041), ["컨테이너목록", i + 1, "TYPE이 RF/RH인 경우, 온도와 DRY 모두 입력"]); //@의 @번째 데이터에서 @은(는) @할 수 없습니다.
            return false;
          }
        }

        //컨테이너정보-출발일자, 도착일자 체크
        if (cntrWrkDtHhShow == "Y") {
          //출발일시 입력하지 않은 경우, 오더정보의 출발일시로 대체
          if (ds_cntrInfo.getCellData(i, "wrkStDt") == "" || ds_cntrInfo.getCellData(i, "wrkStHh") == "") {
            let msg = (MSG_CM_ERR_031 + "출발일자 또는 시간을 입력하지 않았습니다. 오더정보의 출발(입항)일시로 대체하시겠습니까?").replace("%1", "컨테이너목록").replace("%2", i + 1);
            if (await $c.win.confirm($p, msg)) {
              ds_cntrInfo.setCellData(i, "wrkStDt", ed_wrkStDt.getValue().trim());
              ds_cntrInfo.setCellData(i, "wrkStHh", ed_wrkStHh.getValue().trim());
            } else {
              return false;
            }
          }

          //도착일시 입력하지 않은 경우, 오더정보의 도착일시로 대체
          if (ds_cntrInfo.getCellData(i, "wrkEndDt") == "" || ds_cntrInfo.getCellData(i, "wrkEndHh") == "") {
            let msg = (MSG_CM_ERR_031 + "도착일자 또는 시간을 입력하지 않았습니다. 오더정보의 도착(출항)일시로 대체하시겠습니까?").replace("%1", "컨테이너목록").replace("%2", i + 1);
            if (await $c.win.confirm($p, msg)) {
              ds_cntrInfo.setCellData(i, "wrkEndDt", ed_wrkStDt.getValue().trim());
              ds_cntrInfo.setCellData(i, "wrkEndHh", ed_wrkStHh.getValue().trim());
            } else {
              return false;
            }
          }

          //컨테이너목록의 출발일자와 도착일자 비교
          if (!(await scwin.f_chkDate(ds_cntrInfo.getCellData(i, "wrkStDt"), ds_cntrInfo.getCellData(i, "wrkEndDt")))) {
            await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_061), ["컨테이너목록", i + 1, "출발일자", "도착일자 이전"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
            gr_cntrInfo.setFocusedCell(i, gr_cntrInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_cntrInfo), false);
            //gr_cntrInfo.SetColumn("wrkStDt");
            return false;
          }

          //컨테이너목록의 출발일자와 도착일자 비교
          if (!scwin.f_chkTime(ds_cntrInfo.getCellData(i, "wrkStDt"), ds_cntrInfo.getCellData(i, "wrkStHh"), ds_cntrInfo.getCellData(i, "wrkEndDt"), ds_cntrInfo.getCellData(i, "wrkEndHh"))) {
            await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_061), ["컨테이너목록", i + 1, "출발시간", "도착시간 이전"]); //"@의 @번째 데이터에서"+"@은(는) @이어야 합니다."
            gr_cntrInfo.setFocusedCell(i, gr_cntrInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_cntrInfo), false);
            //gr_cntrInfo.SetColumn("wrkStDt");
            return false;
          }

          //오더별 체크사항
          //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
          if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
            //수출일반
            if (scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
              //자가영업인 경우
              if (ds_cntrInfo.getCellData(i, "currPosCd") == "" && ds_cntrInfo.getCellData(i, "cntrNo") != "") {
                await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_002), ["컨테이너목록", i + 1, "현위치"]); //@의 @번째 데이터에서  @은(는) 필수 입력 항목입니다.
                return false;
              }
            } else {
              //자가영업이 아닌 경우
              if (ds_cntrInfo.getCellData(i, "arrvlportDtm") == "" && ds_cntrInfo.getCellData(i, "cntrNo") != "") {
                await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_053), ["컨테이너목록", i + 1, "입항일시"]); //"@의 @번째 데이터에서"+"@이(가) 누락되었습니다."
                return false;
              }
            }
          }
        } //if(cntrWrkDtHhShow == "Y")의 끝
      } //if(gr_cntrInfo.getRowStatus(i) != 2){ //삭제건이 아닌 경우의 끝
    } //for(i=1; i<=cntrInfoRows; i++)의 끝
  } //수입/수출하역이 아닌 경우의 끝

  return true;
};

/**
 * method
 * @name f_checkCntrNo
 * @description 컨테이너번호 유효성 체크
 */
scwin.f_checkCntrNo = async function (parCntrNo) {
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
    let cntrNo = parCntrNo.trim();
    //수출일반이고, 자가영업인경우
    if (cntrNo != "") {
      if (!dscommon.cf_CheckCntrNo(cntrNo)) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
      }
    }
  }
};

/**
 * method
 * @name f_chkDate
 * @description 시작일자, 종료일자 유효성 체크
 */
scwin.f_chkDate = async function (strDate, endDate) {
  let differDays = await scwin.cfDaysBetween(strDate, endDate);
  if (differDays >= 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * method
 * @name f_chkTime
 * @description 시작시간, 종료시간 유효성 체크
 */
scwin.f_chkTime = function (strDate, strTime, endDate, endTime) {
  let differTime = Number(endDate + endTime) - Number(strDate + strTime);
  if (differTime >= 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * method
 * @name f_showMandatoryMark
 * @description mandatory표시 보이기(본선관리번호, 선박명, 항차)
 */
scwin.f_showMandatoryMark = function (gubun) {
  if (gubun == "S") {
    if (!ft_cvsslMgntNo.hasClass("req")) {
      ft_cvsslMgntNo.addClass("req");
    }
    if (!ft_vsslCd.hasClass("req")) {
      ft_vsslCd.addClass("req");
    }
    if (!ft_portcnt.hasClass("req")) {
      ft_portcnt.addClass("req");
    }
  } else if (gubun == "E") {
    //수입일반이고 자가영업인 경우 해당
    if (ft_cvsslMgntNo.hasClass("req")) {
      ft_cvsslMgntNo.removeClass("req");
    }
    if (ft_vsslCd.hasClass("req")) {
      ft_vsslCd.removeClass("req");
    }
    if (ft_portcnt.hasClass("req")) {
      ft_portcnt.removeClass("req");
    }
  }
};

/**
 * method
 * @name f_setBlNo
 * @description BL번호 활성/비활성
 */
scwin.f_setBlNo = function (gubun) {
  if (gubun == "E") {
    // $c.gus.cfEnableObj(ed_blNo, true);
    $c.gus.cfEnableObjects($p, [ed_blNo, btn_blNo]);
  } else if (gubun == "D") {
    // $c.gus.cfEnableObj(ed_blNo, false);
    $c.gus.cfDisableObjects($p, [ed_blNo, btn_blNo]);
  }
};

/**
 * method
 * @name f_setCvsslMgntNo
 * @description 본선관리번호 활성/비활성
 */
scwin.f_setCvsslMgntNo = function (gubun) {
  if (gubun == "E") {
    // $c.gus.cfEnableObj(ed_cvsslMgntNo, true);
    $c.gus.cfEnableObjects($p, [ed_cvsslMgntNo, btn_cvsslMgntNo]);
  } else if (gubun == "D") {
    // $c.gus.cfEnableObj(ed_cvsslMgntNo, false);
    $c.gus.cfDisableObjects($p, [ed_cvsslMgntNo, btn_cvsslMgntNo]);
  }
};

/**
 * method
 * @name f_setLineCd
 * @description Line코드 활성/비활성
 */
scwin.f_setLineCd = function (gubun) {
  if (gubun == "E") {
    // $c.gus.cfEnableObj(ed_lineCd, true);	//Line코드
    // $c.gus.cfEnableObj(ed_lineNm, true);	//Line명
    $c.gus.cfEnableObjects($p, [ed_lineCd, ed_lineNm, btn_lineCd]); //Line코드, Line명, Line팝업이미지
  } else if (gubun == "D") {
    // $c.gus.cfEnableObj(ed_lineCd, false);	//Line코드
    // $c.gus.cfEnableObj(ed_lineNm, false);	//Line명
    $c.gus.cfDisableObjects($p, [ed_lineCd, ed_lineNm, btn_lineCd]); //Line코드, Line명, Line팝업이미지
  }
};

/**
 * method
 * @name f_setVsslCd
 * @description 선박코드 활성/비활성
 */
scwin.f_setVsslCd = function (gubun) {
  if (gubun == "E") {
    // $c.gus.cfEnableObj(ed_vsslCd, true);
    // $c.gus.cfEnableObj(ed_vsslNm, true);
    $c.gus.cfEnableObjects($p, [ed_vsslCd, ed_vsslNm, btn_vsslCd]);
  } else if (gubun == "D") {
    // $c.gus.cfEnableObj(ed_vsslCd, false);
    // $c.gus.cfEnableObj(ed_vsslNm, false);
    $c.gus.cfDisableObjects($p, [ed_vsslCd, ed_vsslNm, btn_vsslCd]);
  }
};

/**
 * method
 * @name f_setPortcnt
 * @description 항차 활성/비활성
 */
scwin.f_setPortcnt = function (gubun) {
  if (gubun == "E") {
    $c.gus.cfEnableObj($p, ed_portcnt, true);
  } else if (gubun == "D") {
    $c.gus.cfEnableObj($p, ed_portcnt, false);
  }
};

/**
 * method
 * @name f_setDptWrkPlCd
 * @description 입항일시(출발일시) 활성/비활성
 */
scwin.f_setDptWrkPlCd = function (gubun) {
  if (gubun == "E") {
    $c.gus.cfEnableObj($p, ed_wrkStDt, true); //입항일시(출발일시)
    $c.gus.cfEnableObj($p, ed_wrkStHh, true); //입항일시(출발일시)
  } else if (gubun == "D") {
    $c.gus.cfEnableObj($p, ed_wrkStDt, true); //입항일시(출발일시)
    $c.gus.cfEnableObj($p, ed_wrkStHh, true); //입항일시(출발일시)
  }
};

/**
 * method
 * @name f_setSelfClsCd
 * @description 자가구분코드 활성/비활성
 */
scwin.f_setSelfClsCd = function (gubun) {
  if (gubun == "E") {
    $c.gus.cfEnableObj($p, lc_selfClsCd, true);
  } else if (gubun == "D") {
    $c.gus.cfEnableObj($p, lc_selfClsCd, false);
  }
};

/**
 * method
 * @name f_setBookingNo
 * @description BookingNo 활성/비활성
 */
scwin.f_setBookingNo = function (gubun) {
  if (gubun == "E") {
    $c.gus.cfEnableObj($p, ed_bookingNo, true);
  } else if (gubun == "D") {
    $c.gus.cfEnableObj($p, ed_bookingNo, false);
  }
};

/**
 * method
 * @name f_setCommGrid
 * @description 그리드 활성/비활성
 */
scwin.f_setCommGrid = function (gubun) {
  if (gubun == "E") {
    scwin.setGrCommInfoReadOnly(false);
    gr_commInfo.setColumnReadOnly("cntrSizCd", false); //"Any"
    gr_commInfo.setColumnReadOnly("fullEmptyClsCd", false); //"Any"
    $c.gus.cfEnableBtnOnly($p, [btn_addRow1, btn_deleteRow1, btn_undoRow1]);
  } else if (gubun == "D") {
    scwin.setGrCommInfoReadOnly(true);
    $c.gus.cfDisableBtnOnly($p, [btn_addRow1, btn_deleteRow1, btn_undoRow1]);
  } else if (gubun == "O") {
    //수입/수출하역인 경우, 수량만 입력 가능하게 해야 함
    scwin.setGrCommInfoReadOnly(false);
    gr_commInfo.setColumnReadOnly("cntrSizCd", true); //None
    gr_commInfo.setColumnReadOnly("fullEmptyClsCd", true); //None
    gr_commInfo.setColumnReadOnly("qty", false); //"Any"
    $c.gus.cfEnableBtnOnly($p, [btn_addRow1, btn_deleteRow1, btn_undoRow1]);
  }
};

/**
 * method
 * @name f_setCntrGridForSizTypFE
 * @description 컨테이너목록 그리드에서  SIZE,TYPE,F/E를 입력 못하게 함
 */
scwin.f_setCntrGridForSizTypFE = function (gubun) {
  if (gubun == "E") {
    gr_cntrInfo.setColumnReadOnly("cntrSizCd", false); //"Any"
    gr_cntrInfo.setColumnReadOnly("cntrTypCd", false); //"Any"
    gr_cntrInfo.setColumnReadOnly("fullEmptyClsCd", false); //"Any"
  } else if (gubun == "D") {
    gr_cntrInfo.setColumnReadOnly("cntrSizCd", true); //None
    gr_cntrInfo.setColumnReadOnly("cntrTypCd", true); //None
    gr_cntrInfo.setColumnReadOnly("fullEmptyClsCd", true); //None
  } else if (gubun == "EC") {
    //수출본선인 경우, F/E만 수정가능
    gr_cntrInfo.setColumnReadOnly("cntrSizCd", true); //None
    gr_cntrInfo.setColumnReadOnly("cntrTypCd", true); //None
    gr_cntrInfo.setColumnReadOnly("fullEmptyClsCd", false); //"Any"
  }
};

/**
 * method
 * @name f_showHideCntrItemRow
 * @description 수출본선/수출TS 일괄복사 버튼 보이기/숨기기
 */
scwin.f_showHideCntrItemRow = function (gubun) {
  if (gubun == "S") {
    acb_cntrItemRow.show("");
    btnCopy.show("");
  } else if (gubun == "H") {
    acb_cntrItemRow.hide();
    btnCopy.hide();
  }
};

/**
 * method
 * @name f_setMultiRowSelectForCntrGrid
 * @description 컨테이너목록 그리드  - 다중선택 추가
 */
scwin.f_setMultiRowSelectForCntrGrid = function (gubun) {
  if (gubun == "T") {
    gr_cntrInfo.setUseShiftKey(true);
    gr_cntrInfo.options.useCtrlKey = true;
  } else if (gubun == "F") {
    gr_cntrInfo.setUseShiftKey(false);
    gr_cntrInfo.options.useCtrlKey = false;
  }
};

/**
 * method
 * @name f_setInterfaceByOdr2
 * @description
 */
scwin.f_setInterfaceByOdr2 = function (odrKndCd, impExpClsCd) {
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //수입일반컨테이너오더
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      //수입일반컨테이너오더
      //활성/비활성시키기
      scwin.f_setLineCd("D");
      scwin.f_setDptWrkPlCd("E");
      scwin.f_setCommGrid("D");
      scwin.f_setCntrGridForSizTypFE("D");
      scwin.f_setVsslCd("D");
      scwin.f_setPortcnt("D");
      scwin.f_showHideCntrItemRow("S");
      ed_odrDemDt.setUserData("validExp", "체선일자:yes:date=YYYYMMDD");
    }

    //mandatory표시 보이기(본선관리번호, 선박명, 항차)
    scwin.f_showMandatoryMark("S");

    //컨테이너목록 그리드 다중선택(MultiRowSelect) 가능/불가능
    scwin.f_setMultiRowSelectForCntrGrid("T");

    //validation세팅

    ed_tsCvsslMgntNo.setUserData("validExp", "");
    ed_tsVsslCd.setUserData("validExp", "");
    ed_tsPortcnt.setUserData("validExp", "");
    ed_clntMgntNo.setUserData("validExp", "");
    grp_cntrInfo.show(""); //컨테이너정보 그리드 보이기
  }

  //수출입구분
  dscommon.cf_HideObject([ed_alloccarPicId]);
};

/**
 * method
 * @name f_setInterfaceByOdrOnUpdate
 * @description 수정모드시, 오더별 세팅
 */
scwin.f_setInterfaceByOdrOnUpdate = function () {
  scwin.odrKndCd = acb_odrKndCd.getValue(); //오더종류코드
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //수입일반컨테이너오더
    //활성/비활성시키기
    scwin.f_setBlNo("D");
    scwin.f_setBookingNo("E");
    scwin.f_setDptWrkPlCd("E");
    scwin.f_setCommGrid("D");
    scwin.f_setCntrGridForSizTypFE("D");
    scwin.f_setVsslCd("D");

    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      //수입일반컨테이너오더
      //자가영업인경우, 아닌 경우
      if (scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
        //활성/비활성
        scwin.f_setCvsslMgntNo("E");
        scwin.f_setVsslCd("E");
        scwin.f_setPortcnt("E");

        //mandatory표시 보이기(본선관리번호, 선박명, 항차)
        scwin.f_showMandatoryMark("E");

        //validation세팅
        ed_blNo.setUserData("validExp", "BL번호:yes");
        ed_cvsslMgntNo.setUserData("validExp", "");
        ed_vsslCd.setUserData("validExp", "");
        ed_portcnt.setUserData("validExp", "");
      } else {
        //활성/비활성
        scwin.f_setCvsslMgntNo("D");
        scwin.f_setVsslCd("D");
        scwin.f_setPortcnt("D");

        //mandatory표시 보이기(본선관리번호, 선박명, 항차)
        scwin.f_showMandatoryMark("S");

        //validation세팅
        ed_blNo.setUserData("validExp", "BL번호:yes");
        ed_cvsslMgntNo.setUserData("validExp", "본번:yes");
        ed_vsslCd.setUserData("validExp", "선박명:yes");
        ed_portcnt.setUserData("validExp", "항차:yes");
      }

      //그리드 edit가능
      scwin.f_displayGridColumn(gr_cntrInfo, ["portCd", "destPortCd"], "edit", "upper");
      scwin.f_displayGridColumn(gr_cntrInfo, ["impCntrWrkKndCd", "impMgsetYn", "dcsnYn", "xrayLupTrgtYn", "leaseYn", "socYn", "offRtrnClsCd", "temper"], "edit", "any");
      scwin.f_displayGridColumn(gr_cntrInfo, ["wrkStDt", "wrkStHh", "wrkEndDt", "wrkEndHh"], "edit", "numeric");
    }
  }
};

/**
 * method
 * @name f_setDataSetDtHh
 * @description 출발일시, 도착일시 값이 없는 경우, 다시 세팅
 */
scwin.f_setDataSetDtHh = function (ds, row) {
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkStDt"))) {
    ds.setCellData(row, "wrkStDt", ed_wrkStDt.getValue().trim()); //출발일자
  }
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkStHh"))) {
    ds.setCellData(row, "wrkStHh", ed_wrkStHh.getValue().trim()); //출발시간
  }
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkEndDt"))) {
    ds.setCellData(row, "wrkEndDt", ed_wrkEndDt.getValue().trim()); //도착일자
  }
  if ($c.gus.cfIsNull($p, ds.getCellData(row, "wrkEndHh"))) {
    ds.setCellData(row, "wrkEndHh", ed_wrkEndHh.getValue().trim()); //도착시간
  }
};

/**
 * method
 * @name f_setCntrInsYn
 * @description 컨테이너번호를 입력한 경우, 403테이블의 컨테이너입력여부를 1로 update
 */
scwin.f_setCntrInsYn = function (ds, row) {
  if (scwin.statusFlag == "C") {
    //신규 저장인 경우
    if (!$c.gus.cfIsNull($p, ds.getCellData(row, "cntrNo"))) {
      ds.setCellData(row, "cntrInsYn", 1); //컨테이너입력여부
    }
  } else if (scwin.statusFlag == "U") {
    //수정인 경우
    if (ds.getRowStatus(row) == "C" && !$c.gus.cfIsNull($p, ds.getCellData(row, "cntrNo"))) {
      //행추가상태이며, 컨테이너번호를 지정한 경우
      ds.setCellData(row, "cntrInsYn", 1); //컨테이너입력여부
    } else if (ds.getRowStatus(row) == "U" && $c.gus.cfIsNull($p, ds.getOriginalCellData(row, "cntrNo")) && !$c.gus.cfIsNull($p, ds.getCellData(row, "cntrNo"))) {
      //행수정상태이며, 미지정컨테이너를 지정한 경우
      ds.setCellData(row, "cntrInsYn", 1); //컨테이너입력여부
    }
  }
};

/**
 * method
 * @name f_setDryYnByImpExpClsCd
 * @description 저장하기전에 데이터셋value들 재세팅 - 수출입구분에 따른 컨테이너별 중량,온도,dry여부 세팅
 */
scwin.f_setDryYnByImpExpClsCd = function (ds, row) {
  if (scwin.impExpClsCd == DsConstants.IMP_CD) {
    ds.setCellData(row, "impWt", ds.getCellData(row, "wt")); //수입중량
    ds.setCellData(row, "impTemper", ds.getCellData(row, "temper")); //수입온도
    ds.setCellData(row, "impDryYn", ds.getCellData(row, "dryYn")); //dry여부
  } else if (scwin.impExpClsCd == DsConstants.EXP_CD) {
    ds.setCellData(row, "expWt", ds.getCellData(row, "wt")); //수출중량
    ds.setCellData(row, "expTemper", ds.getCellData(row, "temper")); //수출온도
    ds.setCellData(row, "expDryYn", ds.getCellData(row, "dryYn")); //dry여부
  } else {
    //null인 경우, 수출로 보이게 함
    ds.setCellData(row, "expWt", ds.getCellData(row, "wt")); //수출중량
    ds.setCellData(row, "expTemper", ds.getCellData(row, "temper")); //수출온도
    ds.setCellData(row, "expDryYn", ds.getCellData(row, "dryYn")); //dry여부
  }
};

/**
 * method
 * @name f_setValueBeforeSave
 * @description 오더별로 저장하기전에 데이터셋value들 재세팅
 */
scwin.f_setValueBeforeSave = function () {
  let lineCd = ds_odrInfo.getCellData(0, "lineCd"); //Line코드
  let shpCoClntNo = ds_odrInfo.getCellData(0, "shpCoClntNo"); //선사거래처코드
  let sellYn = ds_odrInfo.getCellData(0, "sellYn"); //매출여부

  //오더기본정보 세팅
  let idx = lc_ctrtNo.getSelectedIndex();
  ds_odrInfo.setCellData(0, "crcCd", ds_ctrtNo.getCellData(idx, "crcCd")); //계약번호에 해당하는 통화코드
  ds_odrInfo.setCellData(0, "taxnClsCd", ds_ctrtNo.getCellData(idx, "taxnClsCd")); //관세구분코드
  ds_odrInfo.setCellData(0, "odrKndCd", "C2");

  //오더종류에 따른 값 세팅
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //수입일반컨테이너오더
    //품명정보 값 세팅
    for (let i = 0; i < ds_commInfo.getRowCount(); i++) {
      ds_commInfo.setCellData(i, "qtyUnitCd", "VAN"); //수량단위코드

      //출발일시, 도착일시 값이 없는 경우, 다시 세팅
      scwin.f_setDataSetDtHh(ds_commInfo, i);
    }

    //컨테이너정보 값 세팅
    let currPosCd = ds_odrInfo.getCellData(0, "dptWrkPlCd");
    for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
      if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "wrkRsltsNo"))) {
        //실적이 일어나지 않은 경우에만 update할것!
        ds_cntrInfo.setCellData(i, "dptWrkPlCd", ed_dptWrkPlCd.getValue().trim());
        ds_cntrInfo.setCellData(i, "arvWrkPlCd", ed_arvWrkPlCd.getValue().trim());
        ds_cntrInfo.setCellData(i, "impExpClsCd", scwin.impExpClsCd);
        //ds_cntrInfo.getCellData(i, "lineCd")		= lineCd; //Line코드
        //ds_cntrInfo.getCellData(i, "shpCoClntNo")	= shpCoClntNo; //선사거래처코드
        ds_cntrInfo.setCellData(i, "sellLodeptCd", ed_sellLodeptCd.getValue().trim()); //매출부서코드
        ds_cntrInfo.setCellData(i, "sellYn", sellYn); //매출여부

        //자가구분코드가 자가영업인 경우, 관리여부를 '1'로 세팅
        if (scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
          ds_cntrInfo.setCellData(i, "mgntClsYn", 1);
          ds_cntrInfo.setCellData(i, "shpCoClntNo", shpCoClntNo); //선사거래처코드
          ds_cntrInfo.setCellData(i, "currPosCd", currPosCd); //컨테이너 현위치
        }

        //수출입구분에 따른 컨테이너별 중량,온도,dry여부 세팅
        scwin.f_setDryYnByImpExpClsCd(ds_cntrInfo, i);

        //출발일시, 도착일시 값이 없는 경우, 다시 세팅
        scwin.f_setDataSetDtHh(ds_cntrInfo, i);

        //컨테이너번호를 입력한 경우, 403테이블의 컨테이너입력여부를 1로 update
        scwin.f_setCntrInsYn(ds_cntrInfo, i);
      }
    }
  }
};

/**
 * method
 * @name f_setCntrInfo
 * @description 컨테이너번호에 해당하는 컨테이너정보 세팅
 */
scwin.f_setCntrInfo = function (gubun, row) {
  if (row == undefined) {
    row = gr_cntrInfo.getFocusedRowIndex();
  }
  if (gubun == 1) {
    scwin.f_setDataSetValue("DS2", row, dscommon.ARR_CNTR_COLUMN, ds_cntrInfo, ds_cntrBasisInfo);

    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
      //수입일반인 경우
      ds_cntrInfo.setCellData(row, "cntrWtCondCd", acb_cntrWtCondCd.getValue());
    }

    //수출입구분에 따른 dryYn세팅
    if (scwin.impExpClsCd == DsConstants.IMP_CD) {
      ds_cntrInfo.setCellData(row, "wt", ds_cntrBasisInfo.getCellData(0, "impWt")); //중량
      ds_cntrInfo.setCellData(row, "temper", ds_cntrBasisInfo.getCellData(0, "impTemper")); //온도
      ds_cntrInfo.setCellData(row, "dryYn", ds_cntrBasisInfo.getCellData(0, "impDryYn")); //dry여부
      ds_cntrInfo.setCellData(row, "impDryYn", ds_cntrBasisInfo.getCellData(0, "impDryYn")); //수입dry여부
      ds_cntrInfo.setCellData(row, "expDryYn", ds_cntrBasisInfo.getCellData(0, "dryYn")); //수출dry여부
    } else if (scwin.impExpClsCd == DsConstants.EXP_CD) {
      //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
      //수출일반인 경우(컨테이너 미지정되어 자동생성된 경우)만 제외
      if (scwin.odrKndCd != DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR) {
        ds_cntrInfo.setCellData(row, "wt", ds_cntrBasisInfo.getCellData(0, "expWt")); //중량
        ds_cntrInfo.setCellData(row, "temper", ds_cntrBasisInfo.getCellData(0, "expTemper")); //온도
        ds_cntrInfo.setCellData(row, "dryYn", ds_cntrBasisInfo.getCellData(0, "dryYn")); //dry여부
      }
      ds_cntrInfo.setCellData(row, "impDryYn", ds_cntrBasisInfo.getCellData(0, "impDryYn")); //수입dry여부
      ds_cntrInfo.setCellData(row, "expDryYn", ds_cntrBasisInfo.getCellData(0, "dryYn")); //수출dry여부
    } else {
      //null인 경우, 수출로 보이게 함
      //On-hire, off-hire, empty position인 경우(컨테이너 미지정되어 자동생성된 경우)만 제외
      //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
      if (!(scwin.odrKndCd == DsConstants.ODR_KND_CD_ON_HIRE_ODR //On-hire
      || scwin.odrKndCd == DsConstants.ODR_KND_CD_OFF_HIRE_ODR //Off-hire
      || scwin.odrKndCd == DsConstants.ODR_KND_CD_EMPTY_POSITION_ODR) //Empty Position
      ) {
        ds_cntrInfo.setCellData(row, "wt", ds_cntrBasisInfo.getCellData(0, "expWt")); //중량
        ds_cntrInfo.setCellData(row, "temper", ds_cntrBasisInfo.getCellData(0, "expTemper")); //온도
        ds_cntrInfo.setCellData(row, "dryYn", ds_cntrBasisInfo.getCellData(0, "dryYn")); //dry여부
      }
      ds_cntrInfo.setCellData(row, "impDryYn", ds_cntrBasisInfo.getCellData(0, "impDryYn")); //수입dry여부
      ds_cntrInfo.setCellData(row, "expDryYn", ds_cntrBasisInfo.getCellData(0, "dryYn")); //수출dry여부
    }
  } else if (gubun == 2) {
    scwin.f_setDataSetValue("DS1", row, dscommon.ARR_CNTR_COLUMN, ds_cntrInfo);

    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR //수출일반
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR //수입일반
    ) {
      ds_cntrInfo.setCellData(row, "cntrWtCondCd", acb_cntrWtCondCd.getValue());
    }

    //dryYn세팅
    ds_cntrInfo.setCellData(row, "wt", 0); //중량
    ds_cntrInfo.setCellData(row, "temper", ""); //온도
    ds_cntrInfo.setCellData(row, "dryYn", 0); //dry여부
    ds_cntrInfo.setCellData(row, "impDryYn", 0); //수입dry여부
    ds_cntrInfo.setCellData(row, "expDryYn", 0); //수출dry여부
  }
};

/**
 * method
 * @name f_setDataSetValue
 * @description DataSet에 값세팅하기
 */
scwin.f_setDataSetValue = function (gubun, row, arrColumn, ds1, ds2) {
  if (gubun == "DS2") {
    //dataset이 두개 인경우
    for (let item of arrColumn) {
      if (item != null) {
        ds1.setCellData(row, item, ds2.getCellData(0, item));
      }
    }
  } else if (gubun == "DS1") {
    //dataset이 한개인 경우
    for (let item of arrColumn) {
      let info = ds_cntrInfo.getColumnInfo(item);
      if (info) {
        if (info.dataType == "text") {
          ds1.setCellData(row, item, "");
        } else {
          ds1.setCellData(row, item, "0");
        }
      }
    }
  }
};

/**
 * method
 * @name f_setOdrWrkStEndDtm
 * @description 오더정보의 출발일자, 출발시간, 도착일자, 도착시간
 */
scwin.f_setOdrWrkStEndDtm = async function () {
  if (ed_wrkStDt.getValue().trim() != "" && ed_wrkEndDt.getValue().trim() != "") {
    //오더기본정보-출발일자, 도착일자 체크
    if (!(await scwin.f_chkDate(ed_wrkStDt.getValue(), ed_wrkEndDt.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["출발일자(입항일자)", "도착일자(출항일자) 이전"]); //"@은(는) @이어야 합니다."
      //ed_wrkStDt.focus();
      return;
    }
  }
  if (ed_wrkStDt.getValue().trim() != "" && ed_wrkStHh.getValue().trim() != "" && ed_wrkEndDt.getValue().trim() != "" && ed_wrkEndHh.getValue().trim()) {
    if (!scwin.f_chkTime(ed_wrkStDt.getValue(), ed_wrkStHh.getValue(), ed_wrkEndDt.getValue(), ed_wrkEndHh.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_061, ["출발시간(입항시간)", "도착시간(출항시간) 이전"]); //"@은(는) @이어야 합니다."
      //ed_wrkStDt.focus();
      return;
    }
  }

  //품명목록의 출발일자/시간, 도착일자/시간 값 세팅
  for (let i = 0; i < ds_commInfo.getRowCount(); i++) {
    ds_commInfo.setCellData(i, "wrkStDt", ed_wrkStDt.getValue().trim());
    ds_commInfo.setCellData(i, "wrkStHh", ed_wrkStHh.getValue().trim());
    ds_commInfo.setCellData(i, "wrkEndDt", ed_wrkEndDt.getValue().trim());
    ds_commInfo.setCellData(i, "wrkEndHh", ed_wrkEndHh.getValue().trim());
  }

  //컨테이너목록의 출발일자/시간, 도착일자/시간 값 세팅
  for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
    ds_cntrInfo.setCellData(i, "wrkStDt", ed_wrkStDt.getValue().trim());
    ds_cntrInfo.setCellData(i, "wrkStHh", ed_wrkStHh.getValue().trim());
    ds_cntrInfo.setCellData(i, "wrkEndDt", ed_wrkEndDt.getValue().trim());
    ds_cntrInfo.setCellData(i, "wrkEndHh", ed_wrkEndHh.getValue().trim());
  }
};

/**
 * method
 * @name f_clearDataByClntNos
 * @description 청구/요청거래처/실화주거래처 정보 clear
 */
scwin.f_clearDataByClntNos = function () {
  scwin.clearReqClntNo();
  scwin.clearBilgClntNo();
  scwin.clearRealMchtClntNo();
};

/**
 * method
 * @name f_clearDataByCtrtNo
 * @description 계약번호와 관련한 DataSet초기화
 */
scwin.f_clearDataByCtrtNo = function () {
  ds_ctrtNo.removeAll();
  ds_ctrtNo.reform();
  scwin.clearReqClntNo();
  scwin.clearBilgClntNo();
  scwin.clearRealMchtClntNo();
};

/**
 * method
 * @name f_clearDataByBlNo
 * @description BlNo와 관련한 DataSet초기화(수입일반인 경우)
 */
scwin.f_clearDataByBlNo = function () {
  $c.gus.cfInitObjects($p, [ed_blNo, ed_cvsslMgntNo, ed_bondTransExpireDt, ed_vsslCd, ed_portcnt, ed_vsslNm, ed_lineCd, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_arvDt, ed_arvHh, ed_lineNm, ed_shpCoClntNm]);
  $c.gus.cfInitHidVal($p, [ed_blNo, ed_cvsslMgntNo, ed_bondTransExpireDt, ed_vsslCd, ed_portcnt, ed_vsslNm, ed_lineCd, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_arvDt, ed_arvHh, ed_lineNm, ed_shpCoClntNm]);
  scwin.assgnWhouseCd = "";
  scwin.assgnWhouseNm = "";
  lc_mcomAssgnClsCd.setSelectedIndex(0); //배정구분코드
  ds_odrInfo.setCellData(0, "portCd", ""); //항구코드
  ds_outCommInfoByBlNo.removeAll();
  ds_outCommInfoByBlNo.reform();
  ds_commInfo.removeAll();
  ds_commInfo.reform();
  ds_cntrInfo.removeAll();
  ds_cntrInfo.reform();
  ds_blInfo.removeAll();
  ds_blInfo.reform();
};

/**
 * method
 * @name f_clearDataByCvsslMgntNo
 * @description 본선관리번호와 관련한 DataSet초기화(수입본선인 경우)
 */
scwin.f_clearDataByCvsslMgntNo = function () {
  $c.gus.cfInitObjects($p, [ed_cvsslMgntNo, ed_vsslCd, ed_closeDt, ed_closeHh, ed_wrkStDt, ed_wrkStHh, ed_wrkEndDt, ed_wrkEndHh, ed_portcnt, ed_vsslNm, ed_lane, ed_dptWrkPlCd, ed_dptWrkPlNm, ed_dptDtl, ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvDtl]);
  $c.gus.cfInitHidVal($p, [ed_cvsslMgntNo]);
  ds_odrInfo.setCellData(0, "portCd", ""); //항구코드

  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    //수입일반
    ds_outCntrInfoByCvsslMgntNo.removeAll(); //컨테이너목록
    ds_outCntrInfoByCvsslMgntNo.reform(); //컨테이너목록
    ds_blInfo.removeAll(); //BL목록
    ds_blInfo.reform(); //BL목록
    ds_commInfo.removeAll(); //오더품명목록
    ds_commInfo.reform(); //오더품명목록
    ds_cntrInfo.removeAll(); //오더컨테이너목록
    ds_cntrInfo.reform(); //오더컨테이너목록
  }
};

/**
 * method
 * @name f_clearDataByTsCvsslMgntNo
 * @description TS본선관리번호와 관련한 DataSet초기화(TS셔틀인 경우)
 */
scwin.f_clearDataByTsCvsslMgntNo = function () {
  $c.gus.cfInitObjects($p, [ed_tsCvsslMgntNo, ed_tsVsslCd, ed_tsVsslNm, ed_tsPortcnt, ed_tslane]);
  $c.gus.cfInitHidVal($p, [ed_tsCvsslMgntNo]);
  ds_odrInfo.setCellData(0, "tsPortCd", ""); //항구코드

  //부두간TS인 경우, 도착지값 삭제
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_TS_ODR) {
    $c.gus.cfInitObjects($p, [ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvDtl]);
    $c.gus.cfInitHidVal($p, [ed_arvWrkPlCd, ed_arvWrkPlNm, ed_arvDtl]);
  }
};

/**
 * method
 * @name f_setHidValues
 * @description 오더정보 조회후에 hidValue들 값 세팅하기(팝업 닫기 버튼 클릭시 undefined라고 쓰여지는 것을 막기 위함)
 */
scwin.f_setHidValues = function (gubun) {
  if (gubun == 1) {
    ed_ctrtClntNo.options.hidVal = ed_ctrtClntNo.getValue();
    ed_ctrtClntNm.options.hidVal = ed_ctrtClntNm.getValue();
    ed_reqClntNo.options.hidVal = ed_reqClntNo.getValue();
    ed_bilgClntNo.options.hidVal = ed_bilgClntNo.getValue();
    ed_realMchtClntNo.options.hidVal = ed_realMchtClntNo.getValue();
    ed_sellLodeptCd.options.hidVal = ed_sellLodeptCd.getValue();
    ed_sellLodeptNm.options.hidVal = ed_sellLodeptNm.getValue();
    ed_bilgLodeptCd.options.hidVal = ed_bilgLodeptCd.getValue();
    ed_bilgLodeptNm.options.hidVal = ed_bilgLodeptNm.getValue();
    ed_lineCd.options.hidVal = ed_lineCd.getValue();
    ed_lineNm.options.hidVal = ed_lineNm.getValue();
    ed_shpCoClntNm.options.hidVal = ed_shpCoClntNm.getValue();
    ed_cvsslMgntNo.options.hidVal = ed_cvsslMgntNo.getValue();
    ed_tsCvsslMgntNo.options.hidVal = ed_tsCvsslMgntNo.getValue();
    ed_dptWrkPlCd.options.hidVal = ed_dptWrkPlCd.getValue();
    ed_dptWrkPlNm.options.hidVal = ed_dptWrkPlNm.getValue();
    ed_arvWrkPlCd.options.hidVal = ed_arvWrkPlCd.getValue();
    ed_arvWrkPlNm.options.hidVal = ed_arvWrkPlNm.getValue();
    ed_destPortCd.options.hidVal = ed_destPortCd.getValue();
    hid_destPortNm.options.hidVal = hid_destPortNm.getValue();
    ed_blNo.options.hidVal = ed_blNo.getValue();
    ed_bondTransExpireDt.options.hidVal = ed_bondTransExpireDt.getValue();
    ed_vsslCd.options.hidVal = ed_vsslCd.getValue();
    ed_portcnt.options.hidVal = ed_portcnt.getValue();
    ed_vsslNm.options.hidVal = ed_vsslNm.getValue();
    ed_tsVsslCd.options.hidVal = ed_tsVsslCd.getValue();
    ed_tsVsslNm.options.hidVal = ed_tsVsslNm.getValue();
  } else if (gubun == 2) {
    ed_ctrtClntNo.options.hidVal = "";
    ed_ctrtClntNm.options.hidVal = "";
    ed_reqClntNo.options.hidVal = "";
    ed_bilgClntNo.options.hidVal = "";
    ed_realMchtClntNo.options.hidVal = "";
    ed_sellLodeptCd.options.hidVal = "";
    ed_sellLodeptNm.options.hidVal = "";
    ed_bilgLodeptCd.options.hidVal = "";
    ed_bilgLodeptNm.options.hidVal = "";
    ed_lineCd.options.hidVal = "";
    ed_lineNm.options.hidVal = "";
    ed_shpCoClntNm.options.hidVal = "";
    ed_cvsslMgntNo.options.hidVal = "";
    ed_tsCvsslMgntNo.options.hidVal = "";
    ed_dptWrkPlCd.options.hidVal = "";
    ed_dptWrkPlNm.options.hidVal = "";
    ed_arvWrkPlCd.options.hidVal = "";
    ed_arvWrkPlNm.options.hidVal = "";
    ed_destPortCd.options.hidVal = "";
    hid_destPortNm.options.hidVal = "";
    ed_blNo.options.hidVal = "";
    ed_bondTransExpireDt.options.hidVal = "";
    ed_vsslCd.options.hidVal = "";
    ed_portcnt.options.hidVal = "";
    ed_vsslNm.options.hidVal = "";
    ed_tsVsslCd.options.hidVal = "";
    ed_tsVsslNm.options.hidVal = "";
  }
};

/**
 * method
 * @name f_copyDataSetRow
 * @params {Object} srcDS
 * @params {Object} destDS
 * @description 데이터셋을 copy하기
 * srcDS에서 destDS로 데이터 복사
 */
scwin.f_copyDataSetRow = function (srcDS, destDS) {
  let allData = srcDS.getAllJSON();
  allData = allData.filter(item => item.rowStatus !== "D"); //삭제건이 아닌 경우만 해당
  destDS.setJSON(allData, false);
  ds_bilgClntNo.modifyAllStatus("C");
};

/**
 * method
 * @name f_checkOdrArvWrkPlCdForCntr
 * @description 수입본선, 수입하역, 부두간TS, 하선지경유TS(부두-->CY) 컨테이너 오더인 경우
 * 오더정보에서 도착지 입력시 - 컨테이너에 해당되는 도착지(To)의 범위를 벗어나는 경우 세팅 불가
 */
scwin.f_checkOdrArvWrkPlCdForCntr = async function (odrArvWrkPlCd) {
  for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
    if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(i, "arvWrkPlCd"))) {
      if (odrArvWrkPlCd != ds_cntrInfo.getCellData(i, "arvWrkPlCd")) {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_004); //컨테이너목록의 도착지 정보와 상이합니다
        return false;
      }
    }
  }
  return true;
};

/**
 * method
 * @name f_setTemperDryByRFCntr
 * @description 품명 또는 컨테이너의 type이 RF인 경우, 온도 또는 DRY 필드의 EDIT여부 체크
 */
scwin.f_setTemperDryByRFCntr = function (dsObj, grObj, row) {
  if (row < 0 || row === null) {
    return;
  }
  //품명 또는 컨테이너  type이 RF인 경우, 온도 또는 dry 체크
  let type = dsObj.getCellData(row, "cntrTypCd");
  let temper = dsObj.getCellData(row, "temper");
  let dryYn = dsObj.getCellData(row, "dryYn");

  //오더별 체크
  if (type == DsConstants.CNTR_TYP_CD_RF || type == DsConstants.CNTR_TYP_CD_RH) {
    if (!$c.gus.cfIsNull($p, temper) && dryYn == DsConstants.YN_NO) {
      grObj.setColumnReadOnly("temper", false); //"Any"
      grObj.setColumnReadOnly("dryYn", true); //None
    } else if ($c.gus.cfIsNull($p, temper) && dryYn == DsConstants.YN_YES) {
      grObj.setColumnReadOnly("temper", true); //None
      grObj.setColumnReadOnly("dryYn", false); //"Any"
    } else {
      grObj.setColumnReadOnly("temper", false); //"Any"
      grObj.setColumnReadOnly("dryYn", false); //"Any"
    }
  } else {
    dsObj.setCellData(row, "temper", "");
    dsObj.setCellData(row, "dryYn", "0");
    grObj.setColumnReadOnly("temper", true); //None
    grObj.setColumnReadOnly("dryYn", true); //None
  }
};

/**
 * method
 * @name f_discountSurcharge
 * @description 할인할증 선택
 */
scwin.f_discountSurcharge = async function () {
  let v_odrNo = ds_odrInfo.getCellData(0, "odrNo");
  if (!$c.gus.cfIsNull($p, v_odrNo)) {
    // 선택된 오더 정보 : 오더번호 f_TabMenuUpdate
    // $c.win.openMenu("할인할증", "/ui/tn/ds/sd/odrmgnt/odrreg/sd_402_01_25b.xml", "sd_402_01_25b", { "odrNo": v_odrNo, "type": "retrieve" }, { openAction: "exist" });
    $c.win.openMenu($p, "할인할증", "/ui/tn/ds/sd/odrreg/sd_402_01_25b.xml", "sd_402_01_25b", {
      "odrNo": v_odrNo,
      "type": "retrieve"
    }, {
      openAction: "exist"
    });
  } else {
    await $c.gus.cfAlertMsg($p, "오더번호가 입력되지 않았습니다."); //오더번호가 입력되지 않았습니다.
    return false;
  }
};

/**
 * method
 * @name f_unitySelling
 * @description 통합매출입조정 선택
 */
scwin.f_unitySelling = function () {
  if ($c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrNo").trim())) {
    return;
  }
  let v_odrNo = ds_odrInfo.getCellData(0, "odrNo");
  // 선택된 오더 정보 : 오더번호
  $c.win.openMenu($p, "통합매출입조정", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml", "sd_402_01_26b", {
    "odrNo": v_odrNo,
    "type": "retrieve"
  }, {
    openAction: "exist"
  });
};

/**
 * method
 * @name f_setSellAndBilgDept
 * @description 매출부서, 청구부서 세팅
 * 처리규칙 : 오더등록자의 등록점소의 첫째 둘째자리 + 오더종류의 끝자리
 * 1.수출/수입하역 : 매출부서 - 미지정,	청구부서 - 지정
 * 2.수출/수입본선 : 매출부서 - 미지정,	청구부서 - 지정
 * 3.그외		: 매출부서 - 지정,	청구부서 - 지정
 */
scwin.f_setSellAndBilgDept = async function (gubun) {
  if (gubun == "A") {
    //지정인 경우
    let deptCd1 = scwin.lobranCd; //등록점소 - 사용자 설정 물류점소
    if (deptCd1.length <= 2) {
      return;
    }
    let orgdeptCd1 = deptCd1;
    let deptCd2 = ""; //오더종류에 따른 셋째자리 결정
    let deptCd = ""; //부서코드
    deptCd1 = deptCd1.substring(0, 2);

    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선컨테이너오더
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR //수출본선컨테이너오더
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR //수입하역컨테이너오더
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR //수출하역컨테이너오더
    ) {
      //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
      if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR //수입하역컨테이너오더
      || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR //수출하역컨테이너오더
      ) {
        deptCd2 = "4";
        //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
      } else if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선컨테이너오더
      || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR //수출본선컨테이너오더
      ) {
        deptCd2 = "3";
      }
      deptCd = deptCd1 + deptCd2;

      //청구부서 세팅
      if (orgdeptCd1 == "6AA") {
        if (deptCd2 == "4") {
          ed_bilgLodeptCd.setValue(deptCd);
        } else {
          ed_bilgLodeptCd.setValue("6A1");
        }
      } else {
        ed_bilgLodeptCd.setValue(deptCd);
      }
      await scwin.f_openCommonPopUp(2, 'BILG', 'T', 'F', 'T');
    } else {
      deptCd2 = "2";
      deptCd = deptCd1 + deptCd2;

      //매출부서 세팅
      ed_sellLodeptCd.setValue(deptCd);
      await scwin.f_openCommonPopUp(2, 'SELL', 'T', 'F', 'T');

      //청구부서 세팅 - 부산은 6A3셋팅함.
      if (orgdeptCd1 == "6AA") {
        if (deptCd2 == "4") {
          ed_bilgLodeptCd.setValue(deptCd);
        } else {
          ed_bilgLodeptCd.setValue("6A1");
        }
      } else {
        ed_bilgLodeptCd.setValue(deptCd);
      }
      await scwin.f_openCommonPopUp(2, 'BILG', 'T', 'F', 'T');
    }
  } else if (gubun == "N") {
    //미지정인 경우
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선컨테이너오더
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR //수출본선컨테이너오더
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR //수입하역컨테이너오더
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR //수출하역컨테이너오더
    ) {
      //매출부서 세팅
      ed_sellLodeptCd.setValue(ed_dptWrkPlCd.getValue().trim());
      await scwin.f_openCommonPopUp(2, 'SELL', 'T', 'F', 'T');
    }
  }
};

/**
 * method
 * @name f_setValueArvWrkPlCdByBlNo
 * @description 수입일반오더인 경우 : 당사배정구분코드의 첫째자리가  'B'인 경우 배정창고를 도착작업장상세로 세팅
 */
scwin.f_setValueArvWrkPlCdByBlNo = function () {
  let mcomAssgnClsCd = ds_odrInfo.getCellData(0, "mcomAssgnClsCd"); //당사배정구분코드
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    if (!$c.gus.cfIsNull($p, mcomAssgnClsCd) && mcomAssgnClsCd.charAt(0) == "B") {
      ed_arvDtl.setValue(scwin.assgnWhouseNm);
    } else {
      ed_arvDtl.setValue("");
    }
  }
};

/**
 * method
 * @name f_setLuxeComboCBDataSelfClsCd
 * @description 오더별 자가구분코드 LuxeCombo CBData 세팅
 * 당사운송					    : empty position, port change, return, 컨테이너수입TS, 부두간TS, 수출TS
 * 당사운송, 자가반출입			: on/off-hire
 * 당사운송, 자가반출, 자가영업	: 그 외 오더
 */
scwin.f_setLuxeComboCBDataSelfClsCd = function (selfClsCd) {
  const param = [{
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_CNTR,
    outputFields: ["CD", "CD_NM"]
  }, {
    compID: "lc_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_ALL,
    outputFields: ["CD", "CD_NM"]
  }];
  $c.data.setDsCommonUtil($p, param, () => lc_selfClsCd.setValue(selfClsCd));
};

/**
 * method
 * @name f_onSelChangeSelfClsCd
 * @description 자가구분코드 LuxeCombo에서 OnSelChange이벤트 발생시 실행
 * 1.수입일반 : 자가영업인 경우, 자가영업이 아닌 경우
 */
scwin.f_onSelChangeSelfClsCd = function () {
  scwin.selfClsCd = ds_odrInfo.getCellData(0, "selfClsCd");
  /******* 수입일반인 경우 *******/
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR) {
    if (scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
      //자가영업인 경우
      //mandatory표시 보이기(본선관리번호, 선박명, 항차)
      scwin.f_showMandatoryMark("E");

      //validation세팅
      ed_blNo.setUserData("validExp", "BL번호:yes");
      ed_cvsslMgntNo.setUserData("validExp", "");
      ed_vsslCd.setUserData("validExp", "");
      ed_portcnt.setUserData("validExp", "");
    } else {
      //자가영업이 아닌 경우
      //mandatory표시 보이기(본선관리번호, 선박명, 항차)
      scwin.f_showMandatoryMark("S");
      //validation세팅
      ed_blNo.setUserData("validExp", "BL번호:yes");
      ed_cvsslMgntNo.setUserData("validExp", "본번:yes");
      ed_vsslCd.setUserData("validExp", "선박명:yes");
      ed_portcnt.setUserData("validExp", "항차:yes");
    }
    if (scwin.retrieveYn == "N") {
      scwin.f_clearDataByCvsslMgntNo();
    }
  }
};

/**
 * method
 * @name f_enableBtnUpdateRepWrkInfo
 * @description 수입일반이고, 도착지가 "43D"인 경우, 대표착지 팝업 활성시키기
 */
scwin.f_enableBtnUpdateRepWrkInfo = function () {
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR && ed_arvWrkPlCd.getValue().trim() == "43D" && !$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrNo").trim())) {
    $c.gus.cfEnableObjects($p, [btn_updateRepWrkInfo]);
  }
};

/**
 * method
 * @name f_enableBtnChgCntrNoInfo
 * @description 수입본선일반인 경우, 컨테이너번호 수정 팝업 활성시키기
 */
scwin.f_enableBtnChgCntrNoInfo = function () {
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if ((scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR || scwin.odrKndCd == "CS" || scwin.odrKndCd == "CT") && !$c.gus.cfIsNull($p, ds_odrInfo.getCellData(0, "odrNo").trim())) {
    $c.gus.cfEnableObjects($p, [btn_chgCntrNoInfo]);
  }
};

/**
 * method
 * @name f_setLcOdrKndCd
 * @description 오더 종류 설정, sd_402_01_71t에서 호출함
 */
scwin.f_setLcOdrKndCd = function (odrKndCd) {
  acb_odrKndCd.setValue(odrKndCd);
};

/**
 * method
 * @name f_runExcel
 * @description 엑셀저장
 */
scwin.f_runExcel = function (gubun) {
  switch (gubun) {
    case 1:
      //컨테이너 엑셀저장
      $c.data.downloadGridViewExcel($p, gr_cntrInfo, {
        fileName: '컨테이너오더.xlsx',
        sheetName: '컨테이너오더'
      });
      break;
  }
};

/**
 * method
 * @name f_copyOdr
 * @description 오더 복사
 */
scwin.f_copyOdr = async function () {
  //관리거래처 여부 체크
  scwin.f_retrieveCtrtNo2();
  scwin.odrKndCd = acb_odrKndCd.getValue(); //오더종류
  await scwin.f_set("COPY");
};

/**
 * method
 * @name f_odrRegIfno
 * @description 오더등록현황 화면으로 다시 돌아가기
 */
scwin.f_odrRegIfno = function () {
  //$c.win.openMenu("오더등록현황", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_01b.xml", "sd_402_01_01b", {}, { openAction: "exist" });
};

/**
 * method
 * @name f_tmlEdiIfno
 * @description 터미널 EDI 정보입력 화면 팝업
 */
scwin.f_tmlEdiIfno = async function () {
  let odrNo = ds_odrInfo.getCellData(0, "odrNo");
  if ($c.gus.cfIsNull($p, odrNo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("오더정보"));
    return false;
  }
  let arrParam = new Array(10);
  arrParam[0] = odrNo; //오더번호
  let param = {
    "odrNo": odrNo
  };
  param.arrParam = arrParam;
  let options = {
    id: "sd_402_01_18p_popup",
    popupName: "터미널 EDI 정보입력",
    modal: true,
    type: "browserPopup",
    //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    width: 850,
    height: 355
  };
  await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_18p.xml", options, param);
};

/**
 * method
 * @name f_copyCntrSelectItemRow
 * @description
 */
scwin.f_copyCntrSelectItemRow = async function () {
  if (acb_cntrItemRow.getValue() == "portCd") {
    //첫번째 Row 항구코드
    if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(0, "portCd"))) {
      await $c.gus.cfAlertMsg($p, "첫번째 컨테이너의 PORT을 입력하신 후에 복사하여 주세요.");
      return;
    }
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
            ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          }
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
          ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
              ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
              ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
              ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
              ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
              ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "portCd", ds_cntrInfo.getCellData(0, "portCd"));
              ds_cntrInfo.setCellData(i, "portNm", ds_cntrInfo.getCellData(0, "portNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else if (acb_cntrItemRow.getValue() == "destPortCd") {
    //첫번째 Row 목적항구
    if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(0, "destPortCd"))) {
      await $c.gus.cfAlertMsg($p, "첫번째 컨테이너의 목적항구를 입력하신 후에 복사하여 주세요.");
      return;
    }
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
            ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          }
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
          ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
              ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
              ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
              ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
              ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
              ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "destPortCd", ds_cntrInfo.getCellData(0, "destPortCd"));
              ds_cntrInfo.setCellData(i, "destPortNm", ds_cntrInfo.getCellData(0, "destPortNm"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else if (acb_cntrItemRow.getValue() == "wt") {
    //첫번째 Row 중량
    if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(0, "wt"))) {
      await $c.gus.cfAlertMsg($p, "첫번째 컨테이너의 중량을 입력하신 후에 복사하여 주세요.");
      return;
    }
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          }
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(0, "wt"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else if (acb_cntrItemRow.getValue() == "term") {
    //첫번째 Row TERM
    if ($c.gus.cfIsNull($p, ds_cntrInfo.getCellData(0, "term"))) {
      await $c.gus.cfAlertMsg($p, "첫번째 컨테이너의 TERM을 입력하신 후에 복사하여 주세요.");
      return;
    }
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          }
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "term", ds_cntrInfo.getCellData(0, "term"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else if (acb_cntrItemRow.getValue() == "leaseYn") {
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          } else {}
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "leaseYn", ds_cntrInfo.getCellData(0, "leaseYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else if (acb_cntrItemRow.getValue() == "socYn") {
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          }
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "socYn", ds_cntrInfo.getCellData(0, "socYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else if (acb_cntrItemRow.getValue() == "dryYn") {
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          }
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(0, "dryYn"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else if (acb_cntrItemRow.getValue() == "cntrWrkClsCd") {
    if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
            ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
            ds_cntrInfo.setCellData(i, "chk", 0);
          }
        }
      }
    } else if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
      for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
        if (ds_cntrInfo.getCellData(i, "chk") == true) {
          ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
          ds_cntrInfo.setCellData(i, "chk", 0);
        }
      }
    } else {
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd")) {
              ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) == "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) != "ALL" && acb_efClsCd.getText(true) == "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_typClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrTypCd")) {
              ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
      if (acb_sizClsCd.getText(true) != "ALL" && acb_typClsCd.getText(true) == "ALL" && acb_efClsCd.getText(true) != "ALL") {
        for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
          if (ds_cntrInfo.getCellData(i, "chk") == true) {
            if (acb_sizClsCd.getText(true) == ds_cntrInfo.getCellData(i, "cntrSizCd") && acb_efClsCd.getText(true) == ds_cntrInfo.getCellData(i, "fullEmptyClsCd")) {
              ds_cntrInfo.setCellData(i, "cntrWrkClsCd", ds_cntrInfo.getCellData(0, "cntrWrkClsCd"));
              ds_cntrInfo.setCellData(i, "chk", 0);
            }
          }
        }
      }
    }
    for (let i = 1; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "chk") == true) {
        ds_cntrInfo.setCellData(i, "chk", 0);
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, "복사할 항목을 선택하여 주세요.");
  }
};

/**
 * event
 * @name sbm_retrieveCtrtNo_submitdone
 * @description
 */
scwin.sbm_retrieveCtrtNo_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  let ctrtNoRows = ds_ctrtNo.getRowCount();
  if (!ctrtNoRows) {
    scwin.f_clearDataByCtrtNo();
    if (ed_ctrtClntNo.getValue().trim() != "" && ed_ctrtClntNm.getValue().trim() != "") {
      await $c.gus.cfAlertMsg($p, scwin.appendMessage("거래처 %1의 " + MSG_CM_ERR_049), [ed_ctrtClntNm.getValue(), "계약번호"]);
    }
  } else {
    lc_ctrtNo.setSelectedIndex(0);
    scwin.lc_ctrtNo_onviewchange();
  }
};

/**
 * event
 * @name sbm_retrieveCtrtNo2_submitdone
 * @description
 */
scwin.sbm_retrieveCtrtNo2_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  let ctrtNoRows = ds_ctrtNo2.getRowCount();
  if (ctrtNoRows > 0) {
    //계약번호가 서로 다른 것이 있는 경우, 선택을 default로 보여주기 위한 process
    let sameYn = "N";
    for (i = 0; i < ctrtNoRows; i++) {
      for (j = 0; j < ds_ctrtNo2.getRowCount(); j++) {
        if (1 == ds_ctrtNo2.getCellData(j, "mgntTrgtClntYn")) {
          sameYn = "Y";
          break;
        }
      }
    }
    if (sameYn == "Y") {
      await $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.");
      scwin.clearBilgClntNo(false);
      ed_bilgClntNo.setValue("");
      ed_bilgClntNo.focus();
    }
  } else {
    await $c.gus.cfAlertMsg($p, "청구처가 관리대상 거래처 입니다.");
  }
};

/**
 * event
 * @name sbm_retrieveClntNo_submitdone
 * @description
 */
scwin.sbm_retrieveClntNo_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }

  //요청거래처 데이터가 없는 경우, 계약거래처를 default로 세팅
  if (ds_reqClntNo.getRowCount() == 0) {
    scwin.clearReqClntNo(false);
    ed_reqClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    await scwin.f_openCommonPopUp(1, 'REQ', 'T', 'F', 'T');
  } else {
    lc_reqClntNm.setSelectedIndex(0);
    scwin.lc_reqClntNm_onselected();
  }

  //청구거래처 데이터가 없는 경우
  if (ds_bilgClntNo.getRowCount() == 0) {
    scwin.clearBilgClntNo();
  } else {
    lc_bilgClntNm.setSelectedIndex(0);
    scwin.lc_bilgClntNm_onselected();
    scwin.f_retrieveCtrtNo2();
  }

  //실화주거래처 데이터가 없는 경우, 계약거래처를 default로 세팅
  if (ds_realMchtClntNo.getRowCount() == 0) {
    scwin.clearRealMchtClntNo();
    ed_realMchtClntNo.setValue(ds_odrInfo.getCellData(0, "ctrtClntNo"));
    await scwin.f_openCommonPopUp(1, 'REAL', 'T', 'F', 'T');
  } else {
    lc_realMchtClntNm.setSelectedIndex(0);
    scwin.lc_realMchtClntNm_onselected();
  }
};

/**
 * event
 * @name sbm_retrieveCntrBasisInfo_submitdone
 * @description
 */
scwin.sbm_retrieveCntrBasisInfo_submitdone = async function (e, row) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  if (row == undefined) {
    row = gr_cntrInfo.getFocusedRowIndex();
  }
  //모든 오더에 해당 - LINE코드가 다르면 에러메시지 띄우기
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (!(scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR //수입일반
  || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES //수출일반이고 자가영업인 경우 해당
  )) {
    if (ds_cntrBasisInfo.getCellData(0, "mcomLineCd") == ed_lineCd.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, "해당컨테이너의 Line과 오더정보의 Line이 상이합니다.\n컨테이너를 다시 입력하여 주십시오.");
      ds_cntrInfo.setCellData(row, "cntrNo", "");
      return;
    }
  }

  //오더별 컨테이너정보 세팅
  if (ds_cntrBasisInfo.getRowCount() > 0) {
    scwin.f_setCntrInfo(1, row); //컨테이너정보값 세팅
    await scwin.f_calInputQty(); //품명목록 입력수량 계산

    //컨테이너기본정보값 세팅
    for (let i = 0; i < ds_commInfo.getRowCount(); i++) {
      if (ds_commInfo.getCellData(i, "cntrSizCd") == ds_cntrBasisInfo.getCellData(0, "cntrSizCd") && ds_commInfo.getCellData(i, "cntrTypCd") == ds_cntrBasisInfo.getCellData(0, "cntrTypCd") && ds_commInfo.getCellData(i, "fullEmptyClsCd") == ds_cntrBasisInfo.getCellData(0, "fullEmptyClsCd")) {
        if (ds_commInfo.getRowStatus(i) != "D") {
          //품명정보가 삭제상태가 아닌 경우
          if ($c.num.parseFloat($p, ds_commInfo.getCellData(i, "qty")) < $c.num.parseFloat($p, ds_commInfo.getCellData(i, "inputQty"))) {
            await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["컨테이너 수량 ", "품명 수량"]); //@은(는) @보다 작아야 합니다.
            scwin.f_setCntrInfo(2, row);
            await scwin.f_calInputQty();
            return;
          }
        } else {
          //해당품명정보가 삭제상태인 경우
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["품명정보가 삭제상태이므로 본 컨테이너정보", "추가"]); //"@은(는) @할 수 없습니다.";
          scwin.f_setCntrInfo(2, row);
          await scwin.f_calInputQty();
          return;
        }
      }
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_046, ["컨테이너번호"]); //존재하지 않는 @입니다.
    scwin.f_setCntrInfo(2, row);
  }

  //RF인 경우 온도 또는  dry여부를 enable/disable하기
  if (!$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(row, 'cntrNo')) && !$c.gus.cfIsNull($p, ds_cntrInfo.getCellData(row, 'fullEmptyClsCd'))) {
    scwin.f_setTemperDryByRFCntr(ds_cntrInfo, gr_cntrInfo, row);
  }
};

/**
 * event
 * @name sbm_retrieveBLContainer_submitdone
 * @description
 */
scwin.sbm_retrieveBLContainer_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  ds_commInfo.removeAll();
  ds_commInfo.reform();

  //품명정보세팅
  if (ds_outCommInfoByBlNo.getRowCount() > 0) {
    ds_commInfo.removeAll();
    ds_commInfo.reform();
    for (let i = 0; i < ds_outCommInfoByBlNo.getRowCount(); i++) {
      row = ds_commInfo.insertRow();
      ds_commInfo.setCellData(i, "cntrSizCd", ds_outCommInfoByBlNo.getCellData(i, "cntrSizCd"));
      ds_commInfo.setCellData(i, "cntrTypCd", ds_outCommInfoByBlNo.getCellData(i, "cntrTypCd"));
      ds_commInfo.setCellData(i, "fullEmptyClsCd", ds_outCommInfoByBlNo.getCellData(i, "fullEmptyClsCd"));
      ds_commInfo.setCellData(i, "qty", ds_outCommInfoByBlNo.getCellData(i, "qty"));
    }
  }
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR && scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES) {
    //수입일반(자가영업)인 경우
    ds_cntrInfo.removeAll();
    ds_cntrInfo.reform();
    //컨테이너정보 세팅
    let outCntrInfoCntRows = ds_outCntrInfoByCvsslMgntNo.getRowCount();
    if (outCntrInfoCntRows > 0) {
      for (let i = 0; i < outCntrInfoCntRows; i++) {
        row = ds_cntrInfo.insertRow();
        ds_cntrInfo.setCellData(i, "arrvlportDtm", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "arrvlportDtm"));
        ds_cntrInfo.setCellData(i, "cntrNo", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "cntrNo"));
        ds_cntrInfo.setCellData(i, "cntrSizCd", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "cntrSizCd"));
        ds_cntrInfo.setCellData(i, "cntrTypCd", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "cntrTypCd"));
        ds_cntrInfo.setCellData(i, "fullEmptyClsCd", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "fullEmptyClsCd"));
        ds_cntrInfo.setCellData(i, "lineCd", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "mcomLineCd")); //Line코드
        ds_cntrInfo.setCellData(i, "impSealNo", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "impSealNo"));
        ds_cntrInfo.setCellData(i, "blNo", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "blNo"));
        ds_cntrInfo.setCellData(i, "dptWrkPlCd", ed_dptWrkPlCd.getValue().trim());
        ds_cntrInfo.setCellData(i, "arvWrkPlCd", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "arvWrkPlCd")); //BL테이블의 하선지 코드
        ds_cntrInfo.setCellData(i, "arvWrkPlNm", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "arvWrkPlNm")); //BL테이블의 하선지 코드명
        ds_cntrInfo.setCellData(i, "wt", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "impWt")); //수입중량
        ds_cntrInfo.setCellData(i, "impWt", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "impWt")); //수입중량
        ds_cntrInfo.setCellData(i, "xrayLupTrgtYn", ds_outCntrInfoByCvsslMgntNo.getCellData(i, "xrayLupTrgtYn")); //X-RAY대상여부

        ds_cntrInfo.setCellData(i, "wrkStDt", ed_wrkStDt.getValue().trim());
        ds_cntrInfo.setCellData(i, "wrkStHh", ed_wrkStHh.getValue().trim());
        ds_cntrInfo.setCellData(i, "wrkEndDt", ed_wrkEndDt.getValue().trim());
        ds_cntrInfo.setCellData(i, "wrkEndHh", ed_wrkEndHh.getValue().trim());
        //입항일자 추가되어야 함
      }
    }

    //하선장소코드를 도착지로 세팅
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR //수입본선인 경우
    || scwin.odrKndCd == DsConstants.ODR_KND_CD_CY_IMP_TS_ODR //하선지TS이고, 부두코드-->하선지(CY)인 경우
    ) {
      let idx = 0;
      let cntrRows = ds_cntrInfo.getRowCount();
      for (let i = 0; i < cntrRows; i++) {
        if (ds_cntrInfo.getCellData(i, "arvWrkPlCd").trim() != "") {
          idx = i;
          break;
        }
      }
      ed_arvWrkPlCd.setValue(ds_cntrInfo.getCellData(idx, "arvWrkPlCd"));
      if (cntrRows > 0) {
        ed_arvWrkPlNm.setValue(ds_outCntrInfoByCvsslMgntNo.getCellData(idx, "arvWrkPlNm"));
      } else {
        ed_arvWrkPlNm.setValue("");
      }
    }
    scwin.chkInputQtyYn = "N";
  } else {
    if (ds_cntrInfo.getRowCount() > 0) {
      for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
        ds_cntrInfo.setCellData(i, "dptWrkPlCd", ed_dptWrkPlCd.getValue().trim());
        ds_cntrInfo.setCellData(i, "wt", ds_cntrInfo.getCellData(i, "impWt"));
        ds_cntrInfo.setCellData(i, "temper", ds_cntrInfo.getCellData(i, "impTemper"));
        ds_cntrInfo.setCellData(i, "dryYn", ds_cntrInfo.getCellData(i, "impDryYn"));
        ds_cntrInfo.setCellData(i, "wrkStDt", ed_wrkStDt.getValue().trim());
        ds_cntrInfo.setCellData(i, "wrkStHh", ed_wrkStHh.getValue().trim());
        ds_cntrInfo.setCellData(i, "wrkEndDt", ed_wrkEndDt.getValue().trim());
        ds_cntrInfo.setCellData(i, "wrkEndHh", ed_wrkEndHh.getValue().trim());
        //RF인 경우 DRY,온도 enable/disable
        scwin.f_setTemperDryByRFCntr(ds_cntrInfo, gr_cntrInfo, i);
        ds_cntrInfo.modifyRowStatus(i, "C");
      }
    }
  }

  //컨테이너정보에 따라서 품명정보의 입력수량 계산하기
  await scwin.f_calInputQty();

  //데이터셋의 상태를 normal하게 만들기
  ds_blInfo.reform();
  ds_commInfo.reform();
  ds_cntrInfo.reform();
  //조회여부 세팅
  scwin.retrieveYn = "N";
};

/**
 * event
 * @name sbm_retrieve_submitdone
 * @description
 */
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  let odrCnclYn = 0; //취소여부
  ed_alloccarPicNm1.setValue("");
  ed_alloccarPicNm2.setValue("");
  ed_alloccarPicNm3.setValue("");
  ed_alloccarPicNm4.setValue("");
  ed_alloccarPicNm5.setValue("");
  scwin.f_setTabOrderInfo();
  if (ds_odrInfo.getRowCount()) {
    ds_odrInfo.setRowPosition(0);
    await scwin.lc_ctrtNo_onviewchange();
    odrCnclYn = ds_odrInfo.getCellData(0, "odrCnclYn");
    if (ds_odrInfo.getCellData(0, "odrCtrlClsCd") == "1") {
      acb_odrCtrlClsCd.setValue("1");
      scwin.odrCtrlClsCd = acb_odrCtrlClsCd.getValue();
    } else {
      acb_odrCtrlClsCd.setValue("2");
      scwin.odrCtrlClsCd = acb_odrCtrlClsCd.getValue();
    }
    await scwin.f_set("RETRIEVE");

    //hidValue 세팅하기
    scwin.f_setHidValues(1);

    //수입본선, 부두간TS, 하선지경유TS(부두-->CY), 수입일반인 경우, original품명정보, original컨테이너정보 데이터셋 세팅(오더수정시 필요함)
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR //수입일반
    ) {
      $c.gus.cfCopyDataSet($p, ds_blInfo, ds_orgBlInfo, "copyHeader=yes"); //BL정보
      $c.gus.cfCopyDataSet($p, ds_commInfo, ds_orgCommInfo, "copyHeader=yes"); //품명정보
      $c.gus.cfCopyDataSet($p, ds_cntrInfo, ds_orgCntrInfo, "copyHeader=yes"); //컨테이너정보
    }

    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (!(scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_STV_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_STV_CNTR_ODR)) {
      await scwin.f_calInputQty("N"); //컨테이너정보에 따라서 품명정보의 입력수량 계산하기 - validation체크하지 않고, 오류메세지 나타내지 않음
    }

    //수출일반오더에만 해당 : booking정보 및 booking품명목록 가져오기

    //Booking정보 및 Booking품명정보 그리드 숨기기
    ds_commInfo.reform();
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_046, ["오더번호"]); //존재하지 않는 @입니다.
    await scwin.f_set("INIT", "INIT"); //Clear DataSet
  }
  scwin.ds_blInfo_ondataload();

  //자가구분코드 LuxeCombo
  scwin.f_onSelChangeSelfClsCd(); //자가구분코드 LuxeCombo OnselChange이벤트 발생시, 화면 필수/비필수 세팅
  lc_selfClsCd.setValue(scwin.selfClsCd);

  // 관리대상인 경우 수정모드 불가
  if (scwin.mgntTrgtClntYn == 1 || odrCnclYn == 1) {
    if (scwin.mgntTrgtClntYn == 1) {
      if (odrCnclYn == 1) {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_006, ["해당 오더", "관리대상 계약거래처이고, 취소된 오더"]); //"@은(는) @입니다.
      }
    } else {
      if (odrCnclYn == 1) {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_006, ["해당 오더", "취소된 오더"]); //"@은(는) @입니다.
      }
    }
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2, btn_updateCntrInfo, btn_chgCntrNoInfo, btn_updateRepWrkInfo, btn_dcSc, btn_unitySelling, btn_copyOdr, btn_tmlEdiIfno]);
    $c.gus.cfEnableBtnOnly($p, [btn_create, btn_create1]);
  }

  // 배차담당자
  for (let i = 0; i < ds_orderallocarpicnm.getRowCount(); i++) {
    if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9001) {
      ed_alloccarPicNm1.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm"));
      hid_alloccarPicId1.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId"));
    } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9002) {
      ed_alloccarPicNm2.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm"));
      hid_alloccarPicId2.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId"));
    } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9003) {
      ed_alloccarPicNm3.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm"));
      hid_alloccarPicId3.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId"));
    } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9004) {
      ed_alloccarPicNm4.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm"));
      hid_alloccarPicId4.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId"));
    } else if (ds_orderallocarpicnm.getCellData(i, "cntrSeq") == 9005) {
      ed_alloccarPicNm5.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicNm"));
      hid_alloccarPicId5.setValue(ds_orderallocarpicnm.getCellData(i, "shtlAlloccarPicId"));
    }
  }

  // 조회 성공여부
  hid_chkReterieve.setValue("retrieveIn");
  scwin.retrieveYn = "N";
  if (ds_commInfo.getRowCount()) {
    gr_commInfo.setFocusedCell(0, gr_commInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_commInfo), false);
  }
  if (ds_sellInfo.getRowCount()) {
    gr_sellInfo.setFocusedCell(0, gr_sellInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_sellInfo), false);
  }
  if (ds_cntrInfo.getRowCount()) {
    gr_cntrInfo.setFocusedCell(0, gr_cntrInfo.getFocusedColumnIndex() ?? scwin.getFirstVisibleColumnIndex(gr_cntrInfo), false);
  }
  if (scwin.focusObj) {
    scwin.focusObj.focus();
    let obj = scwin.focusObj;
    scwin.focusObj = null;
    $c.util.setTimeout($p, () => {
      obj.focus();
    }, {
      delay: 40
    });
  }
};

/**
 * event
 * @name sbm_regist_submitdone
 * @description
 */
scwin.sbm_regist_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }

  //수입일반인 경우, 추가매출 확인
  await scwin.f_retrieveContainerAdditionSelling();
  const odrNo = dma_cndOdrNo.get("odrNo");
  ed_odrNo.setValue(odrNo);

  //여기
  let k = 0;
  let row = -1;
  //배차담당자
  ds_orderallocarpicnm.removeAll();
  ds_orderallocarpicnm.reform();
  if (ed_alloccarPicNm1.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm1.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId1.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm1.getValue());
  }
  if (ed_alloccarPicNm2.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm2.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId2.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm2.getValue());
  }
  if (ed_alloccarPicNm3.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm3.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId3.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm3.getValue());
  }
  if (ed_alloccarPicNm4.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm4.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId4.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm4.getValue());
  }
  if (ed_alloccarPicNm5.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm5.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId5.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm5.getValue());
  }
  await $c.sbm.execute($p, sbm_regist2);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.

  //탭선택시 재조회
  $p.parent().tac_mxTab.getFrame(1).getObj("hid_chkReterieve").setValue("");
  scwin.f_setTabOrderInfo();
  await scwin.f_Retrieve();
};

/**
 * event
 * @name sbm_update_submitdone
 * @description
 */
scwin.sbm_update_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }

  //수입일반인 경우, 추가매출 확인
  await scwin.f_retrieveContainerAdditionSelling();
  const odrNo = dma_cndOdrNo.get("odrNo");
  //여기
  let k = 0;
  let row = -1;
  //배차담당자
  ds_orderallocarpicnm.removeAll();
  ds_orderallocarpicnm.reform();
  if (ed_alloccarPicNm1.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm1.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId1.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm1.getValue());
  }
  if (ed_alloccarPicNm2.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm2.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId2.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm2.getValue());
  }
  if (ed_alloccarPicNm3.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm3.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId3.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm3.getValue());
  }
  if (ed_alloccarPicNm4.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm4.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId4.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm4.getValue());
  }
  if (ed_alloccarPicNm5.getValue() != "" && !$c.gus.cfIsNull($p, ed_alloccarPicNm5.getValue())) {
    k = k + 1;
    row = ds_orderallocarpicnm.insertRow();
    ds_orderallocarpicnm.setCellData(row, "odrNo", odrNo);
    ds_orderallocarpicnm.setCellData(row, "cntrSeq", 9000 + k);
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicId", hid_alloccarPicId5.getValue());
    ds_orderallocarpicnm.setCellData(row, "shtlAlloccarPicNm", ed_alloccarPicNm5.getValue());
  }
  $c.sbm.execute($p, sbm_regist2);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_003); // 성공적으로 수정하였습니다
  ed_odrNo.setValue(ds_odrInfo.getCellData(0, "odrNo"));

  //탭선택시 재조회
  $p.parent().tac_mxTab.getFrame(1).getObj("hid_chkReterieve").setValue("");
  await scwin.f_Retrieve();
};

/**
 * event
 * @name sbm_deleteOrderCond_submitdone
 * @description
 */
scwin.sbm_deleteOrderCond_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  await $c.sbm.execute($p, sbm_regist2);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다
  await scwin.f_set("INIT", "CREATE");
  await $c.sbm.execute($p, sbm_regist2);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다
  await scwin.f_set("INIT", "CREATE");
};

/**
 * event
 * @name sbm_retrieveContainerAdditionSelling_submitdone
 * @description
 */
scwin.sbm_retrieveContainerAdditionSelling_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  if (ds_containerAdditionSelling.getRowCount() > 0) {
    let options = {
      id: "sd_402_01_11p_popup",
      popupName: "추가매출확인",
      modal: true,
      type: "browserPopup",
      //화면 오픈 타입 ("pageFramePopup", "browserPopup")
      width: 590,
      height: 330
    };
    await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11p.xml", options, {
      container: ds_containerAdditionSelling.getAllJSON()
    });
  }
};

/**
 * event
 * @name ds_cntrBO_ondataload
 * @description
 */
scwin.ds_cntrBO_ondataload = function () {
  if (ds_cntrBO.getRowCount() > 0) {
    ds_cntrBO.insertRow(0);
    ds_cntrBO.setCellData(0, "cd", "");
  }
};

/**
 * event
 * @name ds_commInfo_ondataload
 * @description
 */
scwin.ds_commInfo_ondataload = async function () {
  commTotalRows.setValue(ds_commInfo.getRowCount().toString());
  $c.util.setTimeout($p, () => ds_commInfo.multisort({
    sortIndex: "cntrSizCd cntrTypCd fullEmptyClsCd",
    sortOrder: "1 1 1"
  }), {
    delay: 50
  });
  if (scwin.retrieveYn == "N") {
    if (await $c.gus.cfValidate($p, [gr_commInfo], null, true)) {
      if (await scwin.f_validateCommAndCntr()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};

/**
 * event
 * @name ds_commInfo_oninsertrow
 * @description
 */
scwin.ds_commInfo_oninsertrow = function (info) {
  commTotalRows.setValue(ds_commInfo.getRowCount().toString());
};

/**
 * event
 * @name ds_commInfo_onremoverow
 * @description
 */
scwin.ds_commInfo_onremoverow = function (info) {
  commTotalRows.setValue(ds_commInfo.getRowCount().toString());
};

/**
 * event
 * @name ds_sellInfo_ondataload
 * @description
 */
scwin.ds_sellInfo_ondataload = function () {
  sellTotalRows.setValue(ds_sellInfo.getRowCount().toString());
};

/**
 * event
 * @name ds_sellInfo_oninsertrow
 * @description
 */
scwin.ds_sellInfo_oninsertrow = function (info) {
  sellTotalRows.setValue(ds_sellInfo.getRowCount().toString());
};

/**
 * event
 * @name ds_sellInfo_onremoverow
 * @description
 */
scwin.ds_sellInfo_onremoverow = function (info) {
  sellTotalRows.setValue(ds_sellInfo.getRowCount().toString());
};

/**
 * event
 * @name ds_cntrInfo_ondataload
 * @description
 */
scwin.ds_cntrInfo_ondataload = function () {
  cntrTotalRows.setValue(ds_cntrInfo.getRowCount().toString());
  $c.util.setTimeout($p, () => ds_cntrInfo.multisort({
    sortIndex: "cntrSizCd cntrTypCd fullEmptyClsCd",
    sortOrder: "1 1 1"
  }), {
    delay: 50
  });
};

/**
 * event
 * @name ds_cntrInfo_oninsertrow
 * @description
 */
scwin.ds_cntrInfo_oninsertrow = function (info) {
  cntrTotalRows.setValue(ds_cntrInfo.getRowCount().toString());
};

/**
 * event
 * @name ds_cntrInfo_onremoverow
 * @description
 */
scwin.ds_cntrInfo_onremoverow = function (info) {
  cntrTotalRows.setValue(ds_cntrInfo.getRowCount().toString());
};

/**
 * event
 * @name ds_blInfo_ondataload
 * @description
 */
scwin.ds_blInfo_ondataload = function () {
  if (ds_blInfo.getRowCount()) {
    ed_blNo.setValue(ds_blInfo.getCellData(0, "blNo"));
  }
};

/**
 * event
 * @name ds_bookingInfo_ondataload
 * @description
 */
scwin.ds_bookingInfo_ondataload = function () {
  if (ds_bookingInfo.getRowCount()) {
    ed_bookingNo.setValue(ds_bookingInfo.getCellData(0, "bookingNo"));
  }
};

/**
 * event
 * @name gr_commInfo_onrowindexchange
 * @description
 */
scwin.gr_commInfo_onrowindexchange = function (row, oldRow) {
  if (scwin.retrieveYn == "N") {
    //품명 또는 컨테이너의 type이 RF인 경우, 온도 또는 DRY 필드의 EDIT여부 체크
    scwin.f_setTemperDryByRFCntr(ds_commInfo, gr_commInfo, row);
  }
};

/**
 * event
 * @name gr_commInfo_oncellclick
 * @description
 */
scwin.gr_commInfo_oncellclick = function (row, col, colid) {
  switch (colid) {
    case "dryYn":
      scwin.f_setTemperDryByRFCntr(ds_commInfo, gr_commInfo, row);
      break;
  }
};

/**
 * event
 * @name gr_commInfo_onafteredit
 * @description
 */
scwin.gr_commInfo_onafteredit = async function (row, col, value) {
  let colid = gr_commInfo.getColumnID(col);
  switch (colid) {
    case "grossWt":
      if (value < 0) {
        ds_commInfo.setCellData(row, "grossWt", Math.abs(value)); //원래값으로 되돌리기
      }
      break;
    case "qty":
      if (value == "" || isNaN(value)) {
        value = "0";
        ds_commInfo.setCellData(row, colid, value);
      }
      if ($c.num.parseFloat($p, value) < $c.num.parseFloat($p, ds_commInfo.getCellData(row, "inputQty"))) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["수량", "컨테이너 입력수량"]); //@은(는) @ 보다 큰 값으로 입력하십시오.
        ds_commInfo.setCellData(row, colid, ds_commInfo.getOriginalCellData(row, colid));
        return;
      }
      break;
    case "temper":
      scwin.f_setTemperDryByRFCntr(ds_commInfo, gr_commInfo, row);
      break;
  }
};

/**
 * event
 * @name gr_commInfo_onbeforeedit
 * @description
 */
scwin.gr_commInfo_onbeforeedit = function (row, col, value) {
  let colid = gr_commInfo.getColumnID(col);
  if (colid == "cntrSizCd" || colid == "cntrTypCd" || colid == "fullEmptyClsCd") {
    scwin.orgCommVal = ds_commInfo.getCellData(row, colid);
  }
};

/**
 * event
 * @name gr_commInfo_onviewchange
 * @description
 */
scwin.gr_commInfo_onviewchange = async function (info) {
  //사용자가 입력한 컨테이너 종류와 품명목록의 종류가 다른 것이 있는지 체크
  let colid = info.colId;
  let row = info.rowIndex;
  switch (colid) {
    case "cntrSizCd":
      //컨테이너 size
      await scwin.f_checkCommTypeByCntrTypeOnCloseUpEvent(row, colid);
      break;
    case "cntrTypCd":
      //컨테이너 type
      await scwin.f_checkCommTypeByCntrTypeOnCloseUpEvent(row, colid);

      //품명 또는 컨테이너의 type이 RF인 경우, 온도 또는 DRY 필드의 EDIT여부 체크
      scwin.f_setTemperDryByRFCntr(ds_commInfo, gr_commInfo, row);
      break;
    case "fullEmptyClsCd":
      //컨테이너 F/E
      await scwin.f_checkCommTypeByCntrTypeOnCloseUpEvent(row, colid);
      break;
  }
};

/**
 * event
 * @name gr_cntrInfo_onrowindexchange
 * @description
 */
scwin.gr_cntrInfo_onrowindexchange = function (row, oldRow) {
  if (oldRow < 0 || oldRow == null) {
    //최초는 동작하지 않게 한다.
    return;
  }
  // 해당 컨테이너의 실적 발생여부를 확인하여 수정 가능 항목을 설정한다.
  // 실적 발생시 수정할 수 없다.
  // 실적 발생여부를 조회하여 수정항목을 설정한다.
  if (scwin.retrieveYn == "N") {
    //그리드에서 실적발생한 컨테이너는 수정 불가하게 함
    scwin.f_setGridCntrInfoByWrkRslts(row);
  }
};

/**
 * event
 * @name gr_cntrInfo_onviewchange
 * @description
 */
scwin.gr_cntrInfo_onviewchange = async function (info) {
  let colid = info.colId;
  let row = info.rowIndex;
  let olddata = info.oldValue;
  //gr_cntrInfo에서 OnCloseUp이벤트 발생시, 품명목록을 체크한 후, 수량 업데이트하기
  switch (colid) {
    case "cntrSizCd":
      //컨테이너 size
      break;
    case "cntrTypCd":
      //컨테이너 type
      //품명 또는 컨테이너의 type이 RF인 경우, 온도 또는 DRY 필드의 EDIT여부 체크
      scwin.f_setTemperDryByRFCntr(ds_cntrInfo, gr_cntrInfo, row);
      break;
    case "fullEmptyClsCd":
      //컨테이너 F/E
      break;
  }

  //팝업관련
  switch (colid) {
    case "dptWrkPlCd":
      scwin.f_openPopUpGridBefore(ds_cntrInfo, row, "dptWrkPlCd", "dptWrkPlNm", olddata, 5, "T", "F");
      break;
    case "arvWrkPlCd":
      scwin.f_openPopUpGridBefore(ds_cntrInfo, row, "arvWrkPlCd", "arvWrkPlNm", olddata, 1, "T", "F");
      //수입본선,수입TS인 경우 : TO작업장변경시 같은 bl의 컨테이너번호의 TO작업장도 변경시킴
      let blNo = ds_cntrInfo.getCellData(row, "blNo");
      let arvWrkPlCd = ds_cntrInfo.getCellData(row, "arvWrkPlCd");
      if (arvWrkPlCd != olddata) {}
      break;
    case "currPosCd":
      scwin.f_openPopUpGridBefore(ds_cntrInfo, row, "currPosCd", "currPosNm", olddata, 2, "T", "F");
      break;
    case "portCd":
      scwin.f_openPopUpGridBefore(ds_cntrInfo, row, "portCd", "portNm", olddata, 3, "T", "F");
      break;
    case "destPortCd":
      //목적항구
      scwin.f_openPopUpGridBefore(ds_cntrInfo, row, "destPortCd", "destPortNm", olddata, 4, "T", "F");
      break;
    case "cntrNo":
      //컨테이너번호
      if (ds_cntrInfo.getCellData(row, colid) == "") {
        //컨테이너정보에 따라서 품명정보의 입력수량 계산하기
        if (ds_cntrInfo.getCellData(row, colid) != olddata) {
          scwin.f_setCntrInfo(2, row);
          await scwin.f_calInputQty();
        }
      } else {
        if (scwin.chkInputQtyYn == "N") {
          //컨테이너번호를 직접 입력한 경우
          if (ds_cntrInfo.getCellData(row, colid) != olddata) {
            //컨테이너번호 유효성체크
            await scwin.f_checkCntrNo(ds_cntrInfo.getCellData(row, colid));
            for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
              if (ds_cntrInfo.getCellData(i, "cntrNo") == ds_cntrInfo.getCellData(row, colid)) {
                if (row != i && ds_cntrInfo.getRowStatus(i) != "D") {
                  await $c.gus.cfAlertMsg($p, scwin.appendMessage(MSG_CM_ERR_031 + MSG_CM_ERR_032), ["컨테이너목록", i + 1, "컨테이너번호"]); //@의 @번째 데이터에서 @은(는) 중복될 수 없습니다.
                  ds_cntrInfo.setCellData(row, "cntrNo", olddata);
                  //gr_cntrInfo.SetColumn("cntrNo");
                  return;
                }
              }
            }
            await scwin.f_retrieveCntrBasisInfo(ds_cntrInfo.getCellData(row, colid), row);
          }
        }
      }
      break;
    case "temper":
      scwin.f_setTemperDryByRFCntr(ds_cntrInfo, gr_cntrInfo, row);
      break;
  }
};

/**
 * event
 * @name gr_cntrInfo_ontextimageclick
 * @description
 */
scwin.gr_cntrInfo_ontextimageclick = function (row, col) {
  let colid = gr_cntrInfo.getColumnID(col);
  switch (colid) {
    case "dptWrkPlCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, row, "dptWrkPlCd", "dptWrkPlNm", 5, "F", "F");
      break;
    case "arvWrkPlCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, row, "arvWrkPlCd", "arvWrkPlNm", 1, "F", "F");
      break;
    case "currPosCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, row, "currPosCd", "currPosNm", 2, "F", "F");
      break;
    case "portCd":
      scwin.f_openPopUpGrid(ds_cntrInfo, row, "portCd", "portNm", 3, "F", "F");
      break;
    case "destPortCd":
      //목적항구
      scwin.f_openPopUpGrid(ds_cntrInfo, row, "destPortCd", "destPortNm", 4, "F", "F");
  }
};

/**
 * event
 * @name gr_cntrInfo_oncellclick
 * @description
 */
scwin.gr_cntrInfo_oncellclick = function (row, col, colid) {
  switch (colid) {
    case "dryYn":
      scwin.f_setTemperDryByRFCntr(ds_cntrInfo, gr_cntrInfo, row);
      break;
  }
};

/**
 * event
 * @name gr_cntrInfo_onafteredit
 * @description
 */
scwin.gr_cntrInfo_onafteredit = function (row, col, value) {
  let colid = gr_cntrInfo.getColumnID(col);
  if (colid === "wt") {
    if (value == "" || isNaN(value)) {
      ds_cntrInfo.setCellData(row, colid, "0");
    }
  }
};

/**
 * event
 * @name gr_cntrInfo_exceldownload
 * @description
 */
scwin.gr_cntrInfo_exceldownload = function () {
  scwin.f_runExcel(1);
};

/**
 * event
 * @name ed_cnd_cntrNo_onblur
 * @description
 */
scwin.ed_cnd_cntrNo_onblur = async function (e) {
  if (!$c.gus.cfIsNull($p, ed_cnd_cntrNo.getValue().trim())) {
    await scwin.f_openPopUpOdrNo();
  }
  ;
};

/**
 * event
 * @name ed_odrNo_onkeydown
 * @description
 */
scwin.ed_odrNo_onkeydown = async function (e) {
  if (e.keyCode == 13) {
    await scwin.f_Retrieve();
  }
};

/**
 * event
 * @name udc_ctrtClnt_onblurCodeEvent
 * @description
 */
scwin.udc_ctrtClnt_onblurCodeEvent = async function (e) {
  ed_ctrtClntNm.setValue("");
  console.log("udc_ctrtClnt_onblurCodeEvent");
  await scwin.f_beforeOpenCommonPopUpEd(ed_ctrtClntNm, ed_ctrtClntNo, 1, 'CTRT', 'T', 'F');
};

/**
 * event
 * @name udc_ctrtClnt_onblurNameEvent
 * @description
 */
scwin.udc_ctrtClnt_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_ctrtClntNo, ed_ctrtClntNm, 1, 'CTRT', 'T', 'F');
};

/**
 * event
 * @name udc_ctrtClnt_onclickEvent
 * @description
 */
scwin.udc_ctrtClnt_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(1, 'CTRT', 'F', 'F', 'F');
};

/**
 * event
 * @name ed_reqClntNo_onblur
 * @description
 */
scwin.ed_reqClntNo_onblur = async function (e) {
  lc_reqClntNm.setValue(ed_reqClntNo.getValue());
  await scwin.f_beforeOpenCommonPopUpEdByLc(lc_reqClntNm, ed_reqClntNo, 1, 'REQ', 'T', 'F');
};

/**
 * event
 * @name ed_bilgClntNo_onblur
 * @description
 */
scwin.ed_bilgClntNo_onblur = async function (e) {
  lc_bilgClntNm.setValue(ed_bilgClntNo.getValue());
  await scwin.f_beforeOpenCommonPopUpEdByLc(lc_bilgClntNm, ed_bilgClntNo, 1, 'BILG', 'T', 'F');
};

/**
 * event
 * @name ed_realMchtClntNo_onblur
 * @description
 */
scwin.ed_realMchtClntNo_onblur = async function (e) {
  lc_realMchtClntNm.setValue(ed_realMchtClntNo.getValue());
  await scwin.f_beforeOpenCommonPopUpEdByLc(lc_realMchtClntNm, ed_realMchtClntNo, 1, 'REAL', 'T', 'F');
};

/**
 * event
 * @name udc_sellLodept_onblurCodeEvent
 * @description
 */
scwin.udc_sellLodept_onblurCodeEvent = async function (e) {
  ed_sellLodeptNm.setValue("");
  await scwin.f_beforeOpenCommonPopUpEd(ed_sellLodeptNm, ed_sellLodeptCd, 2, 'SELL', 'T', 'F');
  //여기다
  if (ed_sellLodeptCd.getValue().substring(0, 2) == "6A") {
    //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
    if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EMPTY_POSITION_ODR) {
      $c.gus.cfEnableObj($p, ed_alloccarPicNm1, false); //ed_alloccarPicNm1
      $c.gus.cfEnableObj($p, ed_alloccarPicNm2, false); //ed_alloccarPicNm2
      $c.gus.cfEnableObj($p, ed_alloccarPicNm3, false); //ed_alloccarPicNm3
      $c.gus.cfEnableObj($p, ed_alloccarPicNm4, false); //ed_alloccarPicNm4
      $c.gus.cfEnableObj($p, ed_alloccarPicNm5, false); //ed_alloccarPicNm5
    } else {
      $c.gus.cfEnableObj($p, ed_alloccarPicNm1, true); //ed_alloccarPicNm1
      $c.gus.cfEnableObj($p, ed_alloccarPicNm2, true); //ed_alloccarPicNm2
      $c.gus.cfEnableObj($p, ed_alloccarPicNm3, true); //ed_alloccarPicNm3
      $c.gus.cfEnableObj($p, ed_alloccarPicNm4, true); //ed_alloccarPicNm4
      $c.gus.cfEnableObj($p, ed_alloccarPicNm5, true); //ed_alloccarPicNm5
    }
  } else {
    $c.gus.cfEnableObj($p, ed_alloccarPicNm1, true); //ed_alloccarPicNm1
    $c.gus.cfEnableObj($p, ed_alloccarPicNm2, true); //ed_alloccarPicNm2
    $c.gus.cfEnableObj($p, ed_alloccarPicNm3, true); //ed_alloccarPicNm3
    $c.gus.cfEnableObj($p, ed_alloccarPicNm4, true); //ed_alloccarPicNm4
    $c.gus.cfEnableObj($p, ed_alloccarPicNm5, true); //ed_alloccarPicNm5
  }
};

/**
 * event
 * @name udc_sellLodept_onblurNameEvent
 * @description
 */
scwin.udc_sellLodept_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_sellLodeptCd, ed_sellLodeptNm, 2, 'SELL', 'T', 'F');
};

/**
 * event
 * @name udc_sellLodept_onclickEvent
 * @description
 */
scwin.udc_sellLodept_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(2, 'SELL', 'F', 'F', 'F');
};

/**
 * event
 * @name udc_bilgLodept_onblurCodeEvent
 * @description
 */
scwin.udc_bilgLodept_onblurCodeEvent = async function (e) {
  ed_bilgLodeptNm.setValue("");
  await scwin.f_beforeOpenCommonPopUpEd(ed_bilgLodeptNm, ed_bilgLodeptCd, 2, 'BILG', 'T', 'F');
};

/**
 * event
 * @name udc_bilgLodept_onblurNameEvent
 * @description
 */
scwin.udc_bilgLodept_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_bilgLodeptCd, ed_bilgLodeptNm, 2, 'BILG', 'T', 'F');
};

/**
 * event
 * @name udc_bilgLodept_onclickEvent
 * @description
 */
scwin.udc_bilgLodept_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(2, 'BILG', 'F', 'F', 'F');
};

/**
 * event
 * @name udc_line_onblurCodeEvent
 * @description
 */
scwin.udc_line_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_lineNm, ed_lineCd, 3, '', 'T', 'F');
};

/**
 * event
 * @name udc_line_onblurNameEvent
 * @description
 */
scwin.udc_line_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_lineCd, ed_lineNm, 3, '', 'T', 'F');
};

/**
 * event
 * @name udc_line_onclickEvent
 * @description
 */
scwin.udc_line_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(3, '', 'F', 'F', 'F');
};

/**
 * event
 * @name ed_blNo_onblur
 * @description
 */
scwin.ed_blNo_onblur = async function (e) {
  let blNo = ed_blNo.getValue().trim();
  if (ed_blNo.getValue() !== ed_blNo.options.hidVal) {
    ed_blNo.options.hidVal = ed_blNo.getValue();
    if (blNo == "") {
      scwin.f_clearDataByBlNo();
    } else {
      if (blNo != ds_odrInfo.getOriginalCellData(1, "blNo")) {
        //pcy
        await scwin.f_openCommonPopUp(7, '', 'T', 'F', 'F');
      }
    }
  }
};

/**
 * event
 * @name ed_blNo_onviewchange
 * @description
 */
scwin.ed_blNo_onviewchange = function (info) {
  if (ds_blInfo.getRowCount()) {
    ds_blInfo.setCellData(0, "blNo", ed_blNo.getValue());
  }
};

/**
 * event
 * @name ed_cvsslMgntNo_onblur
 * @description
 */
scwin.ed_cvsslMgntNo_onblur = async function (e) {
  //수입/수출일반이고 자가영업이 아닌 경우
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (!(scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR && scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR && scwin.selfClsCd == DsConstants.SELF_CLS_CD_SELF_SALES)) {
    let cvsslMgntNo = ed_cvsslMgntNo.getValue().trim();
    if (ed_cvsslMgntNo.getValue() !== ed_cvsslMgntNo.options.hidVal) {
      ed_cvsslMgntNo.options.hidVal = ed_cvsslMgntNo.getValue();
      if (cvsslMgntNo == "") {
        scwin.f_clearDataByCvsslMgntNo(); //본선관리번호와 관련한 데이터셋 Clear
      } else {
        if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
          await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
          ed_cvsslMgntNo.setValue("");
          return;
        }
        //pcy
        await scwin.f_openCommonPopUp(4, '', 'F', 'F', 'F');
      }
    }
  }
};

/**
 * event
 * @name ed_tsCvsslMgntNo_onblur
 * @description
 */
scwin.ed_tsCvsslMgntNo_onblur = async function (e) {
  let cvsslMgntNo = ed_tsCvsslMgntNo.getValue().trim();
  if (ed_tsCvsslMgntNo.getValue() !== ed_tsCvsslMgntNo.options.hidVal) {
    ed_tsCvsslMgntNo.options.hidVal = ed_tsCvsslMgntNo.getValue();
    if (cvsslMgntNo == "") {
      scwin.f_clearDataByTsCvsslMgntNo(); //TS본선관리번호와 관련한 데이터셋 Clear
    } else {
      if ($c.gus.cfIsNull($p, ed_lineCd.getValue().trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["라인코드"]); //@을(를) 입력하십시오
        ed_cvsslMgntNo.setValue("");
        return;
      }
      //pcy
      await scwin.f_openCommonPopUp(4, 'TS', 'F', 'F', 'F');
    }
  }
};

/**
 * event
 * @name udc_dptWrkPl_onblurCodeEvent
 * @description
 */
scwin.udc_dptWrkPl_onblurCodeEvent = async function (e) {
  if (ed_dptWrkPlCd.getValue() == "" || ed_dptWrkPlCd.getValue() == null) {
    ed_dptWrkPlNm.setValue("");
    ed_dptWrkPlCd.options.hidVal = "";
    ed_dptWrkPlNm.options.hidVal = "";
  } else {
    await scwin.f_beforeOpenCommonPopUpEd(ed_dptWrkPlNm, ed_dptWrkPlCd, 5, 'DPT', 'T', 'F');
  }

  //매출부서, 청구부서 세팅 - 미지정인 경우, 출발작업장 입력시마다 매출부서를 새로 세팅함
  await scwin.f_setSellAndBilgDept("N");
};

/**
 * event
 * @name udc_dptWrkPl_onblurNameEvent
 * @description
 */
scwin.udc_dptWrkPl_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_dptWrkPlCd, ed_dptWrkPlNm, 5, 'DPT', 'T', 'F');
};

/**
 * event
 * @name udc_dptWrkPl_onclickEvent
 * @description
 */
scwin.udc_dptWrkPl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(5, 'DPT', 'F', 'F', 'F');
};

/**
 * event
 * @name udc_arvWrkPl_onblurCodeEvent
 * @description
 */
scwin.udc_arvWrkPl_onblurCodeEvent = async function (e) {
  if (ed_arvWrkPlCd.getValue() == "" || ed_arvWrkPlCd.getValue() == null) {
    ed_arvWrkPlNm.setValue("");
    ed_arvWrkPlCd.options.hidVal = "";
    ed_arvWrkPlNm.options.hidVal = "";
  } else {
    await scwin.f_beforeOpenCommonPopUpEd(ed_arvWrkPlNm, ed_arvWrkPlCd, 5, 'ARV', 'T', 'F');
  }
};

/**
 * event
 * @name udc_arvWrkPl_onblurNameEvent
 * @description
 */
scwin.udc_arvWrkPl_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_arvWrkPlCd, ed_arvWrkPlNm, 5, 'ARV', 'T', 'F');
};

/**
 * event
 * @name udc_arvWrkPl_onclickEvent
 * @description
 */
scwin.udc_arvWrkPl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(5, 'ARV', 'F', 'F', 'F');
};

/**
 * event
 * @name ed_wrkStDt_onblur
 * @description
 */
scwin.ed_wrkStDt_onblur = async function (e) {
  //오더정보의 출발일자, 출발시간, 도착일자, 도착시간 값을 품명목록과 컨테이너목록의 해당값에 세팅
  await scwin.f_setOdrWrkStEndDtm();
};

/**
 * event
 * @name ed_wrkStHh_onblur
 * @description
 */
scwin.ed_wrkStHh_onblur = async function (e) {
  //오더정보의 출발일자, 출발시간, 도착일자, 도착시간 값을 품명목록과 컨테이너목록의 해당값에 세팅
  await scwin.f_setOdrWrkStEndDtm();
};

/**
 * event
 * @name ed_wrkEndDt_onblur
 * @description
 */
scwin.ed_wrkEndDt_onblur = async function (e) {
  //오더정보의 출발일자, 출발시간, 도착일자, 도착시간 값을 품명목록과 컨테이너목록의 해당값에 세팅
  await scwin.f_setOdrWrkStEndDtm();
};

/**
 * event
 * @name ed_wrkEndHh_onblur
 * @description
 */
scwin.ed_wrkEndHh_onblur = async function (e) {
  //오더정보의 출발일자, 출발시간, 도착일자, 도착시간 값을 품명목록과 컨테이너목록의 해당값에 세팅
  await scwin.f_setOdrWrkStEndDtm();
};

/**
 * event
 * @name udc_destPort_onblurCodeEvent
 * @description
 */
scwin.udc_destPort_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(hid_destPortNm, ed_destPortCd, 6, '', 'T', 'F');
};

/**
 * event
 * @name udc_destPort_onviewchangeNameEvent
 * @description
 */
scwin.udc_destPort_onviewchangeNameEvent = async function (info) {
  await scwin.f_beforeOpenCommonPopUpTxt(hid_destPortNm, ed_destPortCd, 6, '', 'T', 'F');
};

/**
 * event
 * @name udc_destPort_onclickEvent
 * @description
 */
scwin.udc_destPort_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(6, '', 'F', 'F', 'F');
};

/**
 * event
 * @name udc_vssl_onblurCodeEvent
 * @description
 */
scwin.udc_vssl_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_vsslNm, ed_vsslCd, 8, '', 'T', 'F');
};

/**
 * event
 * @name udc_vssl_onblurNameEvent
 * @description
 */
scwin.udc_vssl_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_vsslCd, ed_vsslNm, 8, '', 'T', 'F');
};

/**
 * event
 * @name udc_vssl_onclickEvent
 * @description
 */
scwin.udc_vssl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(8, '', 'F', 'F', 'F');
};

/**
 * event
 * @name udc_tsVssl_onblurCodeEvent
 * @description
 */
scwin.udc_tsVssl_onblurCodeEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_tsVsslNm, ed_tsVsslCd, 8, 'TS', 'T', 'F');
};

/**
 * event
 * @name udc_tsVssl_onviewchangeNameEvent
 * @description
 */
scwin.udc_tsVssl_onviewchangeNameEvent = async function (info) {
  await scwin.f_beforeOpenCommonPopUpTxt(ed_tsVsslNm, ed_tsVsslCd, 8, 'TS', 'T', 'F');
};

/**
 * event
 * @name udc_tsVssl_onclickEvent
 * @description
 */
scwin.udc_tsVssl_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(8, 'TS', 'F', 'F', 'F');
};

/**
 * event
 * @name ed_bookingNo_onkeyup
 * @description
 */
scwin.ed_bookingNo_onkeyup = function (e) {
  // 입력된 문자를 대문자로 변환
  ed_bookingNo.setValue(e.target.value.toUpperCase());
  // 최대입력 문자(20) 확인
  dscommon.cf_ValidateMaxByteLengthEmEdit(ed_bookingNo, 20, kcode);
};

/**
 * event
 * @name ed_bookingNo_onkeydown
 * @description
 */
scwin.ed_bookingNo_onkeydown = function (e) {
  // 최대입력 문자(20) 확인
  dscommon.cf_ValidateMaxByteLengthEmEdit(ed_bookingNo, 20, kcode);
};

/**
 * event
 * @name ed_bookingNo_onchange
 * @description
 */
scwin.ed_bookingNo_onchange = function (info) {
  if (ds_bookingInfo.getRowCount()) {
    ds_bookingInfo.setCellData(0, "bookingNo", ed_bookingNo.getValue());
  }
};

/**
 * event
 * @name udc_alloccarPic_onclickEvent
 * @description
 */
scwin.udc_alloccarPic_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(10, '', 'F', 'F', 'F');
};

/**
 * event
 * @name udc_alloccarPic_onblurNameEvent
 * @description
 */
scwin.udc_alloccarPic_onblurNameEvent = async function (e) {
  await scwin.f_beforeOpenCommonPopUpEd(ed_alloccarPicNm, ed_alloccarPicId, 9, '', 'T', 'F');
};

/**
 * event
 * @name udc_alloccarPic_onviewchangeCodeEvent
 * @description
 */
scwin.udc_alloccarPic_onviewchangeCodeEvent = async function (info) {
  await scwin.f_beforeOpenCommonPopUpTxt(ed_alloccarPicNm1, ed_alloccarPicId, 10, '', 'T', 'F');
};

/**
 * event
 * @name ta_rmk_onblur
 * @description
 */
scwin.ta_rmk_onblur = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ta_rmk], null, true))) {
    ta_rmk.setValue("");
    ta_rmk.focus();
  }
};

/**
 * event
 * @name acb_cnd_odrKndCd_onviewchange
 * @description
 */
scwin.acb_cnd_odrKndCd_onviewchange = async function (info) {
  //검색조건 컨테이너번호 입력 체크
  if (!$c.gus.cfIsNull($p, ed_cnd_cntrNo.getValue().trim())) {
    await scwin.f_openPopUpOdrNo();
  }
};

/**
 * event
 * @name acb_odrKndCd_onviewchange
 * @description
 */
scwin.acb_odrKndCd_onviewchange = function (info) {
  scwin.odrKndCd = acb_odrKndCd.getValue(); //오더종류코드
  let idx = acb_odrKndCd.getSelectedRow();
  scwin.impExpClsCd = ds_odrKndCd.getCellData(idx, "fltrCd2"); //수출입구분코드
  if (scwin.impExpClsCd == "null") {
    scwin.impExpClsCd = ""; //TS셔틀컨테이너가 아닌 경우
  }
  //scwin.odrKndCd은 DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR = "C2";로 고정된다.
  if (scwin.odrKndCd == DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EXP_GNRL_CNTR_ODR || scwin.odrKndCd == DsConstants.ODR_KND_CD_EMPTY_POSITION_ODR) {
    if (ed_sellLodeptCd.getValue().substring(0, 2) == "6A" || ed_sellLodeptCd.getValue() == null || ed_sellLodeptCd.getValue() == "") {
      $c.gus.cfEnableObj($p, ed_alloccarPicNm1, false); //ed_alloccarPicNm1
      $c.gus.cfEnableObj($p, ed_alloccarPicNm2, false); //ed_alloccarPicNm2
      $c.gus.cfEnableObj($p, ed_alloccarPicNm3, false); //ed_alloccarPicNm3
      $c.gus.cfEnableObj($p, ed_alloccarPicNm4, false); //ed_alloccarPicNm4
      $c.gus.cfEnableObj($p, ed_alloccarPicNm5, false); //ed_alloccarPicNm5
    } else {
      $c.gus.cfEnableObj($p, ed_alloccarPicNm1, true); //ed_alloccarPicNm1
      $c.gus.cfEnableObj($p, ed_alloccarPicNm2, true); //ed_alloccarPicNm2
      $c.gus.cfEnableObj($p, ed_alloccarPicNm3, true); //ed_alloccarPicNm3
      $c.gus.cfEnableObj($p, ed_alloccarPicNm4, true); //ed_alloccarPicNm4
      $c.gus.cfEnableObj($p, ed_alloccarPicNm5, true); //ed_alloccarPicNm5
    }
  } else {
    $c.gus.cfEnableObj($p, ed_alloccarPicNm1, true); //ed_alloccarPicNm1
    $c.gus.cfEnableObj($p, ed_alloccarPicNm2, true); //ed_alloccarPicNm2
    $c.gus.cfEnableObj($p, ed_alloccarPicNm3, true); //ed_alloccarPicNm3
    $c.gus.cfEnableObj($p, ed_alloccarPicNm4, true); //ed_alloccarPicNm4
    $c.gus.cfEnableObj($p, ed_alloccarPicNm5, true); //ed_alloccarPicNm5
  }
};

/**
 * event
 * @name lc_ctrtNo_onviewchange
 * @description
 */
scwin.lc_ctrtNo_onviewchange = async function (info) {
  if (ds_ctrtNo.getRowCount() > 0 && scwin.mgntTrgtClntYn != "1") {
    let idx = lc_ctrtNo.getSelectedIndex();
    scwin.mgntTrgtClntYn = ds_ctrtNo.getCellData(idx, "mgntTrgtClntYn");
    if (scwin.mgntTrgtClntYn == "1") {
      if (scwin.statusFlag == "C") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["본 계약거래처", "관리대상이므로 오더등록"]); //"@은(는) @할 수 없습니다.

        await scwin.f_set("INIT", "INIT2"); //초기화
      } else {
        await $c.gus.cfAlertMsg($p, MSG_SD_WRN_006, ["본 계약거래처", "관리대상"]); //"@은(는) @입니다.

        $c.gus.cfDisableKeyData($p);
        $c.gus.cfDisableAllBtn($p);
        $c.gus.cfDisableObjects($p, [btn_confirmOdr1, btn_confirmOdr2, btn_updateCntrInfo, btn_chgCntrNoInfo, btn_updateRepWrkInfo, btn_dcSc, btn_unitySelling, btn_copyOdr]);
        $c.gus.cfEnableBtnOnly($p, [btn_create, btn_create1]);
      }
    } else {
      if (scwin.retrieveYn == "N") {
        await scwin.f_retrieveClntList();
      }
    }
  }
};

/**
 * event
 * @name lc_reqClntNm_onselected
 * @description
 */
scwin.lc_reqClntNm_onselected = function () {
  let val = lc_reqClntNm.getValue();
  ed_reqClntNo.setValue(val);
};

/**
 * event
 * @name lc_bilgClntNm_onselected
 * @description
 */
scwin.lc_bilgClntNm_onselected = function () {
  let val = lc_bilgClntNm.getValue();
  ed_bilgClntNo.setValue(val);
};

/**
 * event
 * @name lc_realMchtClntNm_onselected
 * @description
 */
scwin.lc_realMchtClntNm_onselected = function () {
  let val = lc_realMchtClntNm.getValue();
  ed_realMchtClntNo.setValue(val);
};

/**
 * event
 * @name lc_selfClsCd_onclick
 * @description
 */
scwin.lc_selfClsCd_onclick = async function (e) {
  if (lc_selfClsCd.getDisabled()) {
    return;
  }
  if (scwin.retrieveYn == "N") {
    //컨테이너를 지정하지 않은 경우 , 자가구분코드를 활성화하므로, 자가구분코드 수정가능하므로 필요한 로직
    let cntrAssgnYn = "N";
    for (let i = 0; i < ds_cntrInfo.getRowCount(); i++) {
      if (ds_cntrInfo.getCellData(i, "cntrNo").trim() != "") {
        cntrAssgnYn = "Y";
        break;
      }
    }
    if (cntrAssgnYn == "Y") {
      ds_odrInfo.setCellData(0, "selfClsCd", ds_odrInfo.getOriginalCellData(0, "selfClsCd"));
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["컨테이너목록에서 컨테이너번호가 지정되어 있으므로, 자가구분코드", "변경"]); //@은(는) @할 수 없습니다
      return;
    }
  }
};

/**
 * event
 * @name lc_selfClsCd_onviewchange
 * @description
 */
scwin.lc_selfClsCd_onviewchange = function (info) {
  scwin.f_onSelChangeSelfClsCd();
};

/**
 * event
 * @name lc_mcomAssgnClsCd_onviewchange
 * @description
 */
scwin.lc_mcomAssgnClsCd_onviewchange = function (info) {
  scwin.f_setValueArvWrkPlCdByBlNo();
};

/**
 * event
 * @name btn_confirmOdr1_onclick
 * @description
 */
scwin.btn_confirmOdr1_onclick = async function (e) {
  await scwin.f_confirmOrder();
};

/**
 * event
 * @name btn_create1_onclick
 * @description
 */
scwin.btn_create1_onclick = async function (e) {
  await scwin.f_Create("C");
};

/**
 * event
 * @name btn_PopUpOdrNoList_onclick
 * @description
 */
scwin.btn_PopUpOdrNoList_onclick = async function (e) {
  await scwin.f_openPopUpOdrNo();
};

/**
 * event
 * @name btn_refresh_onclick
 * @description
 */
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * event
 * @name btn_retrieve_onclick
 * @description
 */
scwin.btn_retrieve_onclick = async function (e) {
  scwin.focusObj = btn_retrieve;
  await scwin.f_Retrieve();
};

/**
 * event
 * @name btn_reqClntNo_onclick
 * @description
 */
scwin.btn_reqClntNo_onclick = async function (e) {
  await scwin.f_openCommonPopUp(1, 'REQ', 'F', 'F', 'F');
};

/**
 * event
 * @name btn_bilgClntNo_onclick
 * @description
 */
scwin.btn_bilgClntNo_onclick = async function (e) {
  await scwin.f_openCommonPopUp(1, 'BILG', 'F', 'F', 'F');
};

/**
 * event
 * @name btn_realMchtClntNo_onclick
 * @description
 */
scwin.btn_realMchtClntNo_onclick = async function (e) {
  await scwin.f_openCommonPopUp(1, 'REAL', 'F', 'F', 'F');
};

/**
 * event
 * @name btn_blNo_onclick
 * @description
 */
scwin.btn_blNo_onclick = async function (e) {
  await scwin.f_openCommonPopUp(7, '', 'F', 'F', 'F');
};

/**
 * event
 * @name btn_cvsslMgntNo_onclick
 * @description
 */
scwin.btn_cvsslMgntNo_onclick = async function (e) {
  await scwin.f_openCommonPopUp(4, '', 'F', 'F', 'F');
};

/**
 * event
 * @name btn_tsCvsslMgntNo_onclick
 * @description
 */
scwin.btn_tsCvsslMgntNo_onclick = async function (e) {
  await scwin.f_openCommonPopUp(4, 'TS', 'F', 'F', 'F');
};

/**
 * event
 * @name ed_alloccarPicNm2_onchange
 * @description
 */
scwin.ed_alloccarPicNm2_onchange = async function (info) {
  await scwin.f_beforeOpenCommonPopUpTxt(ed_alloccarPicNm2, ed_alloccarPicId, 11, '', 'T', 'F');
};

/**
 * event
 * @name ed_alloccarPicNm3_onchange
 * @description
 */
scwin.ed_alloccarPicNm3_onchange = async function (info) {
  await scwin.f_beforeOpenCommonPopUpTxt(ed_alloccarPicNm3, ed_alloccarPicId, 12, '', 'T', 'F');
};

/**
 * event
 * @name ed_alloccarPicNm4_onchange
 * @description
 */
scwin.ed_alloccarPicNm4_onchange = async function (info) {
  await scwin.f_beforeOpenCommonPopUpTxt(ed_alloccarPicNm4, ed_alloccarPicId, 13, '', 'T', 'F');
};

/**
 * event
 * @name ed_alloccarPicNm5_onchange
 * @description
 */
scwin.ed_alloccarPicNm5_onchange = async function (info) {
  await scwin.f_beforeOpenCommonPopUpTxt(ed_alloccarPicNm5, ed_alloccarPicId, 14, '', 'T', 'F');
};

/**
 * event
 * @name btn_undoRow1_onclick
 * @description
 */
scwin.btn_undoRow1_onclick = async function () {
  await scwin.f_undoRow('U1');
};

/**
 * event
 * @name btn_addRow1_onclick
 * @description
 */
scwin.btn_addRow1_onclick = async function () {
  await scwin.f_addRow('A1');
};

/**
 * event
 * @name btn_deleteRow1_onclick
 * @description
 */
scwin.btn_deleteRow1_onclick = async function () {
  await scwin.f_deleteRow('D1');
};

/**
 * event
 * @name btn_undoRow2_onclick
 * @description
 */
scwin.btn_undoRow2_onclick = async function () {
  await scwin.f_undoRow('U2');
};

/**
 * event
 * @name btn_addRow2_onclick
 * @description
 */
scwin.btn_addRow2_onclick = async function () {
  await scwin.f_addRow('A2');
};

/**
 * event
 * @name btn_deleteRow2_onclick
 * @description
 */
scwin.btn_deleteRow2_onclick = async function () {
  await scwin.f_deleteRow('D2');
};

/**
 * event
 * @name btnCopy_onclick
 * @description
 */
scwin.btnCopy_onclick = async function (e) {
  await scwin.f_copyCntrSelectItemRow();
};

/**
 * event
 * @name btn_confirmOdr2_onclick
 * @description
 */
scwin.btn_confirmOdr2_onclick = async function (e) {
  await scwin.f_confirmOrder();
};

/**
 * event
 * @name btn_dcSc_onclick
 * @description
 */
scwin.btn_dcSc_onclick = async function (e) {
  await scwin.f_discountSurcharge();
};

/**
 * event
 * @name btn_unitySelling_onclick
 * @description
 */
scwin.btn_unitySelling_onclick = function (e) {
  scwin.f_unitySelling();
};

/**
 * event
 * @name btn_updateCntrInfo_onclick
 * @description
 */
scwin.btn_updateCntrInfo_onclick = async function (e) {
  await scwin.f_openPopUpUpdateCntrInfo();
};

/**
 * event
 * @name btn_updateRepWrkInfo_onclick
 * @description
 */
scwin.btn_updateRepWrkInfo_onclick = async function (e) {
  await scwin.f_openPopUpUpdateRepWrkInfo();
};

/**
 * event
 * @name btn_copyOdr_onclick
 * @description
 */
scwin.btn_copyOdr_onclick = async function (e) {
  await scwin.f_copyOdr();
};

/**
 * event
 * @name btn_odrRegIfno_onclick
 * @description
 */
scwin.btn_odrRegIfno_onclick = function (e) {
  scwin.f_odrRegIfno();
};

/**
 * event
 * @name btn_tmlEdiIfno_onclick
 * @description
 */
scwin.btn_tmlEdiIfno_onclick = async function (e) {
  await scwin.f_tmlEdiIfno();
};

/**
 * event
 * @name btn_chgCntrNoInfo_onclick
 * @description
 */
scwin.btn_chgCntrNoInfo_onclick = async function (e) {
  await scwin.f_chgCntrNoInfo();
};

/**
 * event
 * @name btn_create_onclick
 * @description
 */
scwin.btn_create_onclick = async function (e) {
  await scwin.f_Create("C");
};

/**
 * event
 * @name btn_update_onclick
 * @description
 */
scwin.btn_update_onclick = async function (e) {
  await scwin.f_update();
};

/**
 * event
 * @name btn_save_onclick
 * @description
 */
scwin.btn_save_onclick = async function (e) {
  await scwin.f_save();
};

/**
 * event
 * @name btn_delete_onclick
 * @description
 */
scwin.btn_delete_onclick = async function (e) {
  await scwin.f_delete();
};

/**
 * event
 * @name lc_ctrtNo_labelFormatter
 * @description
 */
scwin.lc_ctrtNo_labelFormatter = function (label) {
  let row = lc_ctrtNo.getSelectedIndex();
  if (row >= 0) {
    let rowObj = ds_ctrtNo.getRowJSON(row);
    label = `${rowObj.ctrtNo} (${rowObj.clntPicNm} : ~${rowObj.ctrtEndDt} : ${rowObj.crcCd})`;
  }
  return label;
};

/**
 * event
 * @name input_onkeyup
 * @description inputbox 소문자 -> 대문자
 */
scwin.input_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
* method
* @name cfDaysBetween
* @description
*/
scwin.cfDaysBetween = async function (stDt, endDt) {
  let v_daysBetween = 0;
  if (!$c.date.isDate($p, stDt)) {
    await $c.win.alert($p, "시작일자는 'YYYYMMDD' 형식이어야 합니다.");
  } else if (!$c.date.isDate($p, endDt)) {
    await $c.win.alert($p, "종료일자는 'YYYYMMDD' 형식이어야 합니다.");
  } else {
    v_daysBetween = $c.date.diffDate($p, stDt, endDt);
  }
  return v_daysBetween;
};

/**
* method
* @name undoAll
* @description
*/
scwin.undoAll = function (dltObj) {
  for (let idx = dltObj.getRowCount() - 1; idx >= 0; --idx) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.undoRow(idx);
    }
  }
};

/**
  * method
  * @name undoRow
  * @description
  */
scwin.undoRow = function (dltObj, row) {
  if (dltObj.getRowStatus(row) == "C") {
    dltObj.removeRow(row);
  } else {
    dltObj.undoRow(row);
  }
};

/**
* method
* @name undoMarked
* @description
*/
scwin.undoMarked = function (grdObj, dltObj) {
  let selected = grdObj.getAllFocusedRowIndex();
  selected.sort();
  selected.reverse();
  for (let idx of selected) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.undoRow(idx);
    }
  }
};

/**
* method
* @name deleteRow
* @description
*/
scwin.deleteRow = function (dltObj, row) {
  if (dltObj.getRowStatus(row) == "C") {
    dltObj.removeRow(row);
  } else {
    dltObj.deleteRow(row);
  }
};

/**
* method
* @name deleteMarked
* @description
*/
scwin.deleteMarked = function (grdObj, dltObj) {
  let selected = grdObj.getAllFocusedRowIndex();
  selected.sort();
  selected.reverse();
  for (let idx of selected) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.deleteRow(idx);
    }
  }
};

/**
* event
* @name ds_odrInfo_onbeforecelldatachange
* @description
*/
scwin.ds_odrInfo_onbeforecelldatachange = function (info) {
  if (info.colID === "chClsCd") {
    if (info.newValue == "") {
      scwin.prevVal = info.oldValue;
    }
  }
  return true;
};

/**
* event
* @name ds_odrInfo_oncelldatachange
* @description
*/
scwin.ds_odrInfo_oncelldatachange = function (info) {
  if (info.colID === "chClsCd") {
    if (info.newValue == "") {
      ds_odrInfo.setCellData(info.rowIndex, info.colID, scwin.prevVal);
    }
  }
};

/**
* event
* @name ds_outCommInfoByBlNo_ondataload
* @description
*/
scwin.ds_outCommInfoByBlNo_ondataload = function () {
  $c.util.setTimeout($p, () => ds_outCommInfoByBlNo.multisort({
    sortIndex: "cntrSizCd cntrTypCd fullEmptyClsCd",
    sortOrder: "1 1 1"
  }), {
    delay: 50
  });
};

/**
* event
* @name ds_outCntrInfoByCvsslMgntNo_ondataload
* @description
*/
scwin.ds_outCntrInfoByCvsslMgntNo_ondataload = function () {
  $c.util.setTimeout($p, () => ds_outCntrInfoByCvsslMgntNo.multisort({
    sortIndex: "cntrSizCd cntrTypCd fullEmptyClsCd",
    sortOrder: "1 1 1"
  }), {
    delay: 50
  });
};

/**
* event
* @name ds_ctrtNo_ondataload
* @description
*/
scwin.ds_ctrtNo_ondataload = function () {
  ds_ctrtNo.sort("ctrtNo", 1);
};

/**
* event
* @name ds_ctrtNo2_ondataload
* @description
*/
scwin.ds_ctrtNo2_ondataload = function () {
  ds_ctrtNo2.sort("ctrtNo", 1);
};

/**
* event
* @name ds_reqClntNo_ondataload
* @description
*/
scwin.ds_reqClntNo_ondataload = function () {
  ds_reqClntNo.sort("ctrtNo", 0);
};

/**
* event
* @name ds_bilgClntNo_ondataload
* @description
*/
scwin.ds_bilgClntNo_ondataload = function () {
  ds_bilgClntNo.sort("ctrtNo", 0);
};

/**
* event
* @name ds_realMchtClntNo_oninsertrow
* @description
*/
scwin.ds_realMchtClntNo_oninsertrow = function (info) {
  ds_realMchtClntNo.sort("ctrtNo", 0);
};

/**
* method
* @name portcntFormatter
* @description
*/
scwin.portcntFormatter = function (text) {
  return text.replaceAll(/[^a-zA-Z0-9]/g, "");
};

/**
* method
* @name getFirstVisibleColumnIndex
* @description
*/
scwin.getFirstVisibleColumnIndex = function (grdObj) {
  const cols = grdObj.getTotalCol();
  for (let idx = 0; idx < cols; ++idx) {
    if (grdObj.getColumnVisible(idx)) {
      return idx;
    }
  }
  return 0;
};

/**
* method
* @name appendMessage
* @description
*/
scwin.appendMessage = function (msg) {
  let msgArr = msg.split(/%[0-9]+/);
  let result = msgArr[0];
  for (let idx = 1; idx < msgArr.length; ++idx) {
    result += `%${idx}${msgArr[idx]}`;
  }
  return result;
};

/**
* method
* @name setGrCommInfoReadOnly
* @description
*/
scwin.setGrCommInfoReadOnly = function (readOnly) {
  gr_commInfo.setReadOnly("grid", readOnly);
  const cnt = ds_commInfo.getRowCount();
  for (let idx = 0; idx < cnt; ++idx) {
    gr_commInfo.setRowReadOnly(idx, readOnly);
  }
};

/**
* method
* @name setGrCntrInfoReadOnly
* @description
*/
scwin.setGrCntrInfoReadOnly = function (readOnly) {
  gr_cntrInfo.setReadOnly("grid", readOnly);
  const cnt = ds_cntrInfo.getRowCount();
  for (let idx = 0; idx < cnt; ++idx) {
    gr_cntrInfo.setRowReadOnly(idx, readOnly);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_cndArea',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_cnd_odrKndCd',style:'width: 180px;',class:'',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:'',allowChar:'a-zA-Z0-9','ev:onviewchange':'scwin.acb_cnd_odrKndCd_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너 수입일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'컨테이너번호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_cntrNo',placeholder:'',style:'width: 110px;',allowChar:'a-zA-Z0-9',maxlength:'11','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_cnd_cntrNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUpOdrNoList',style:'',type:'button','ev:onclick':'scwin.btn_PopUpOdrNoList_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'오더번호 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 120px;',mandatory:'true',validExp:'오더번호:yes:length>0',allowChar:'a-zA-Z0-9',maxlength:'13','ev:onkeyup':'scwin.input_onkeyup','ev:onkeydown':'scwin.ed_odrNo_onkeydown'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_refresh',type:'button',class:'btn ico refresh','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_retrieve',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_confirmOdr1',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_confirmOdr1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_create1',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_create1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'grp_odrInfoArea',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_odrKndCd',style:'width: 270px;',class:'',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label',displayModeSync:'value delim label',mandatory:'true',title:'오더종류','ev:onviewchange':'scwin.acb_odrKndCd_onviewchange',objType:'data',validExp:'오더종류:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_odrKndCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_ctrtClntNo',id:'udc_ctrtClnt',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',validTitle:'계약처',UpperFlagCode:'1',btnId:'btn_ctrtClntNo',nameId:'ed_ctrtClntNm',maxlengthName:'100',objTypeCode:'data',objTypeName:'data',selectID:'retrieveClntInfo',codeWidth:'60',refDataCollection:'ds_odrInfo',code:'ctrtClntNo',name:'ctrtClntNm',mandatoryCode:'true',UpperFlagName:'1',mandatoryName:'true','ev:onblurCodeEvent':'scwin.udc_ctrtClnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_ctrtClnt_onblurNameEvent','ev:onclickEvent':'scwin.udc_ctrtClnt_onclickEvent',validExpCode:'계약처:yes',validExpName:'계약처:yes',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 270px;',allOption:'false',id:'lc_ctrtNo',class:'',direction:'auto',mandatory:'true',objType:'data',ref:'data:ds_odrInfo.ctrtNo',title:'계약번호','ev:onviewchange':'scwin.lc_ctrtNo_onviewchange',visibleRowNum:'20',customLabelFormatter:'scwin.lc_ctrtNo_labelFormatter',validExp:'계약번호:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'780px',selectedRowColor:'',label:'clntPicNm',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'width:100px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'width:200px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'width:80px',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_reqClntNo',placeholder:'',style:'width: 60px;',title:'요청처','ev:onkeyup':'scwin.input_onkeyup',editFormat:'XXXXXX',maxByteLength:'6','ev:onblur':'scwin.ed_reqClntNo_onblur',objType:'data',ref:'data:ds_odrInfo.reqClntNo',mandatory:'true',validExp:'요청처:yes',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_reqClntNo',style:'',type:'button','ev:onclick':'scwin.btn_reqClntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqClntNm',objType:'data',ref:'',style:'',submenuSize:'auto',visibleRowNum:'20',emptyItem:'true',displayMode:'label','ev:onselected':'scwin.lc_reqClntNm_onselected'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_reqClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClntNo',placeholder:'',style:'width: 60px;',title:'청구처',editFormat:'XXXXXX',maxByteLength:'6','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_bilgClntNo_onblur',objType:'data',ref:'data:ds_odrInfo.bilgClntNo',mandatory:'true',validExp:'청구처:yes',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_bilgClntNo',style:'',type:'button','ev:onclick':'scwin.btn_bilgClntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bilgClntNm',objType:'data',ref:'',style:'',submenuSize:'auto',visibleRowNum:'20',emptyItem:'true',displayMode:'label','ev:onselected':'scwin.lc_bilgClntNm_onselected'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bilgClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실화주',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_realMchtClntNo',placeholder:'',style:'width: 60px;',title:'실화주',editFormat:'XXXXXX',maxByteLength:'6','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_realMchtClntNo_onblur',objType:'data',ref:'data:ds_odrInfo.realMchtClntNo',mandatory:'true',validExp:'실화주:yes',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_realMchtClntNo',style:'',type:'button','ev:onclick':'scwin.btn_realMchtClntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_realMchtClntNm',objType:'data',ref:'',style:'',submenuSize:'auto',emptyItem:'true',displayMode:'label','ev:onselected':'scwin.lc_realMchtClntNm_onselected'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_realMchtClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매출부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_sellLodeptCd',validTitle:'매출부서',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',nameId:'ed_sellLodeptNm',maxlengthName:'100',btnId:'btn_sellLodeptCd',id:'udc_sellLodept','ev:onblurCodeEvent':'scwin.udc_sellLodept_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLogisDeptInfo',codeWidth:'60',code:'sellLodeptCd',refDataCollection:'ds_odrInfo',name:'sellLodeptNm',mandatoryCode:'true',UpperFlagName:'1',mandatoryName:'true','ev:onblurNameEvent':'scwin.udc_sellLodept_onblurNameEvent','ev:onclickEvent':'scwin.udc_sellLodept_onclickEvent',validExpCode:'매출부서:yes',validExpName:'매출부서:yes',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_bilgLodeptCd',validTitle:'청구부서',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',nameId:'ed_bilgLodeptNm',maxlengthName:'100',btnId:'btn_bilgLodeptCd',id:'udc_bilgLodept','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLogisDeptInfo',codeWidth:'60',code:'bilgLodeptCd',refDataCollection:'ds_odrInfo',name:'bilgLodeptNm',mandatoryCode:'true',mandatoryName:'true','ev:onblurNameEvent':'scwin.udc_bilgLodept_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent',validExpCode:'청구부서:yes',validExpName:'청구부서:yes',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Line/선사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width: 270px;'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 180px;',codeId:'ed_lineCd',validTitle:'LINE',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',id:'udc_line',UpperFlagCode:'1',nameId:'ed_lineNm',maxlengthName:'100',btnId:'btn_lineCd','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLineInfoList',codeWidth:'60',refDataCollection:'ds_odrInfo',code:'lineCd',name:'lineNm',mandatoryCode:'true',UpperFlagName:'1','ev:onblurNameEvent':'scwin.udc_line_onblurNameEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',validExpCode:'Line:yes',validExpName:'Line:yes',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'max-width: 130px;',id:'ed_shpCoClntNm',placeholder:'',class:'',title:'선사거래처',maxByteLength:'30',objType:'data',ref:'data:ds_odrInfo.shpCoClntNm','ev:onkeyup':'scwin.input_onkeyup',validExp:'선사거래처:no'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_bl'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th ',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ft_blNo',label:'BL번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'',objType:'data',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:ds_odrInfo.blNo','ev:onkeyup':'scwin.input_onkeyup',mandatory:'true',title:'BL번호','ev:onblur':'scwin.ed_blNo_onblur',validExp:'BL번호:yes','ev:onviewchange':'scwin.ed_blNo_onviewchange'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_blNo',style:'',type:'button','ev:onclick':'scwin.btn_blNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보운/배정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col8'},E:[{T:1,N:'w2:inputCalendar',A:{style:'width:100px;',id:'ed_bondTransExpireDt',class:'',calendarValueType:'yearMonthDate',objType:'data',title:'보세운송만료일자',isDate:'true',validExp:'보세운송만료일자:no:date=YYYYMMDD',ref:'data:ds_odrInfo.bondTransExpireDt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_mcomAssgnClsCd',class:'',direction:'auto',objType:'data','ev:onviewchange':'scwin.lc_mcomAssgnClsCd_onviewchange',ref:'data:ds_odrInfo.mcomAssgnClsCd',visibleRowNum:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입항일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arvDt',style:'width:100px;',objType:'key',delimiter:'/',useEditFormat:'true',ref:''}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_arvHh',placeholder:'',style:'width:50px;',displayFormat:'##:##',maxlength:'4',allowChar:'0-9',objType:'key',ref:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_cvsslMgntNo'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ft_cvsslMgntNo',label:'본번',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 80px;',title:'본선관리번호',maxByteLength:'8',editFormat:'XXXXXXXX','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_cvsslMgntNo_onblur',objType:'data',ref:'data:ds_odrInfo.cvsslMgntNo',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'lay_closeDtm',style:'display:none;'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_closeDt',style:'width:95px',objType:'data',ref:'data:ds_odrInfo.closeDt'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_closeHh',placeholder:'',style:'width: 50px;',maxByteLength:'4',objType:'data',ref:'data:ds_odrInfo.closeHh',dataType:'time',displayFormat:'HH:mm'}}]},{T:1,N:'xf:group',A:{id:'lay_odrCtrlClsCd',style:'display:none;'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',search:'start',ref:'data:ds_odrInfo.odrCtrlClsCd',chooseOption:'',editType:'select',style:'width: 150px;',id:'acb_odrCtrlClsCd',allOption:'',allowChar:'a-zA-Z0-9',class:'',objType:'data',selectedData:'false'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ft_vsslCd',label:'선박명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',codeId:'ed_vsslCd',validTitle:'선박명',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',nameId:'ed_vsslNm',maxlengthName:'100',btnId:'btn_vsslCd',id:'udc_vssl',objTypeCode:'data',objTypeName:'data',selectID:'retrieveVsslCdInfo',codeWidth:'60',refDataCollection:'ds_odrInfo',code:'vsslCd',name:'vsslNm',UpperFlagName:'1','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_vssl_onblurNameEvent','ev:onclickEvent':'scwin.udc_vssl_onclickEvent',validExpName:'선박명:no',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ft_portcnt',label:'항차/항로',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:85px;','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_portcnt_onblur',objType:'data',ref:'data:ds_odrInfo.portcnt',editFormat:'',maxlength:'10',allowChar:'a-zA-Z0-9',displayFormatter:'scwin.portcntFormatter'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lane',placeholder:'',style:'width:85px;',maxByteLength:'4',editFormat:'XXXX','ev:onkeyup':'scwin.input_onkeyup',objType:'key',ref:'data:ds_odrInfo.lane'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display:none;',id:'tr_tsCvsslMgntNo'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'TS본번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tsCvsslMgntNo',placeholder:'',style:'width:80px;',editFormat:'XXXXXXXX','ev:onkeyup':'scwin.input_onkeyup','ev:onblur':'scwin.ed_tsCvsslMgntNo_onblur',objType:'data',ref:'data:ds_odrInfo.tsCvsslMgntNo',maxByteLength:'8'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_tsCvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_tsCvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'TS선박명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',id:'udc_tsVssl',codeId:'ed_tsVsslCd',UpperFlagCode:'1',nameId:'ed_tsVsslNm',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',validTitle:'',maxlengthName:'50',btnId:'btn_tsVsslCd',objTypeCode:'data',objTypeName:'data',code:'tsVsslCd',refDataCollection:'ds_odrInfo',name:'tsVsslNm',codeWidth:'60','ev:onblurCodeEvent':'scwin.udc_tsVssl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_tsVssl_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_tsVssl_onclickEvent',selectID:'retrieveVsslCdInfo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'TS항차/항로',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tsPortcnt',placeholder:'',style:'width:85px;',maxByteLength:'10',title:'TS항차','ev:onkeyup':'scwin.input_onkeyup',objType:'data',ref:'data:ds_odrInfo.tsPortcnt',editFormat:'XXXXXXXXXX'}},{T:1,N:'xf:input',A:{class:'',id:'ed_tsLane',placeholder:'',style:'width:85px;','ev:onkeyup':'scwin.input_onkeyup',maxByteLength:'4',editFormat:'XXXX',objType:'key',ref:'data:ds_odrInfo.tslane'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'From~To',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;',id:'udc_dptWrkPl',nameId:'ed_dptWrkPlNm',codeId:'ed_dptWrkPlCd',validTitle:'From',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',btnId:'btn_dptWrkPlCd','ev:onblurCodeEvent':'scwin.udc_dptWrkPl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dptWrkPl_onblurNameEvent',objTypeCode:'data',objTypeName:'data',selectID:'retrieveWrkPlInfo',codeWidth:'60',code:'dptWrkPlCd',refDataCollection:'ds_odrInfo',name:'dptWrkPlNm',mandatoryCode:'true',mandatoryName:'true',UpperFlagName:'1',maxlengthName:'100','ev:onclickEvent':'scwin.udc_dptWrkPl_onclickEvent',validExpCode:'From:yes',validExpName:'From:yes',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dptDtl',placeholder:'',style:'width:150px;',title:'From',maxByteLength:'100',objType:'data',ref:'data:ds_odrInfo.dptDtl','ev:onkeyup':'scwin.input_onkeyup',validExp:'From:no'}},{T:1,N:'xf:group',A:{id:'lay_arvWrkPl',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',refDataCollection:'ds_odrInfo',popupID:'',code:'arvWrkPlCd',UpperFlagCode:'1',codeWidth:'60',hideName:'Y',btnId:'btn_arvWrkPlCd',allowCharCode:'a-zA-Z0-9',codeId:'ed_arvWrkPlCd',selectID:'retrieveWrkPlInfo',validTitle:'To',objTypeName:'data',name:'arvWrkPlNm',nameId:'ed_arvWrkPlNm',style:'width: 270px;','ev:onblurNameEvent':'scwin.udc_arvWrkPl_onblurNameEvent',id:'udc_arvWrkPl','ev:onblurCodeEvent':'scwin.udc_arvWrkPl_onblurCodeEvent',mandatoryCode:'true',mandatoryName:'true',UpperFlagName:'1',maxlengthName:'100','ev:onclickEvent':'scwin.udc_arvWrkPl_onclickEvent',validExpCode:'To:yes',validExpName:'From:yes',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{ref:'data:ds_odrInfo.arvDtl',maxByteLength:'100',style:'width:150px;',id:'ed_arvDtl',placeholder:'',title:'To',class:'',objType:'data',mandatory:'true','ev:onkeyup':'scwin.input_onkeyup',validExp:'To:yes'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'td_wrkStDt',label:'출발일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td '},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_wrkStDtHh_02',style:'width: 270px;'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wrkStDt',style:'width:95px',title:'입항일자','ev:onblur':'scwin.ed_wrkStDt_onblur',objType:'data',ref:'data:ds_odrInfo.wrkStDt',mandatory:'true',fixLength:'8',validExp:'입항일자:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_wrkStHh',style:'width: 50px;',displayFormat:'HH:mm',mandatory:'true',title:'입항시간',maxByteLength:'4',objType:'data',ref:'data:ds_odrInfo.wrkStHh',fixLength:'4','ev:onblur':'scwin.ed_wrkStHh_onblur',validExp:'입항시간:yes:date=HHmm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'td_wrkEndDt',label:'도착일시',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'grp_wrkEndDtHh_02',style:'width: 270px;'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wrkEndDt',style:'width:95px;',title:'출항일자',objType:'data',ref:'data:ds_odrInfo.wrkEndDt',mandatory:'true',fixLength:'8','ev:onblur':'scwin.ed_wrkEndDt_onblur',validExp:'출항일자:yes:date=YYYYMMDD'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_wrkEndHh',style:'width: 50px;',mandatory:'true',title:'출항시간',maxByteLength:'4',displayFormat:'HH:mm',objType:'data',ref:'data:ds_odrInfo.wrkEndHh',fixLength:'4','ev:onblur':'scwin.ed_wrkEndHh_onblur',validExp:'출항시간:yes:date=HHmm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_sellYn',label:'지정/매출',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{maxByteLength:'4',style:'width:85px;display:none;',id:'ed_bookingNo',placeholder:'',class:'',objType:'data','ev:onkeyup':'scwin.ed_bookingNo_onkeyup','ev:onkeydown':'scwin.ed_bookingNo_onkeydown',ref:'data:ds_bookingInfo.bookingNo','ev:onchange':'scwin.ed_bookingNo_onchange'}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cntrDsgYn',ref:'data:ds_odrInfo.cntrDsgYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_coshippingYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_slash',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_sellYn',ref:'data:ds_odrInfo.sellYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_picNmTelNo'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_onPicNm',placeholder:'',style:'width:150px;',title:'상차담당',maxByteLength:'100',objType:'data',ref:'data:ds_odrInfo.onPicNm','ev:onkeyup':'scwin.input_onkeyup',validExp:'상차담당:no'}},{T:1,N:'xf:input',A:{class:'',id:'ed_onPicTelNo',placeholder:'',style:'',title:'상차담당전화번호',maxByteLength:'20',objType:'data',ref:'data:ds_odrInfo.onPicTelNo',validExp:'상차담당전화번호:no:maxLength=20'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_offPicNm',placeholder:'',style:'width:150px;',title:'하차담당',maxByteLength:'100',objType:'data',ref:'data:ds_odrInfo.offPicNm','ev:onkeyup':'scwin.input_onkeyup',validExp:'하차담당:no'}},{T:1,N:'xf:input',A:{class:'',id:'ed_offPicTelNo',placeholder:'',style:'',title:'하차담당전화번호',maxByteLength:'20',objType:'data',ref:'data:ds_odrInfo.offPicTelNo',validExp:'하차담당전화번호:no:maxLength=20'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_odrPicNm',label:'오더담당/체선',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 270px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrPicNm',placeholder:'',style:'width:150px;',title:'오더담당',maxByteLength:'100',objType:'data',ref:'data:ds_odrInfo.odrPicNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_odrPicTelNo',placeholder:'',style:'display:none',title:'오더담당전화번호',maxByteLength:'20',objType:'data',ref:'data:ds_odrInfo.odrPicTelNo',validExp:'오더담당전화번호:no:maxLength=20'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_odrDemDt',style:'width:100px;',objType:'data',delimiter:'/',useEditFormat:'true',mandatory:'true',title:'체선일자',validExp:'체선일자:yes:date=YYYYMMDD',ref:'data:ds_odrInfo.demDt'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_selfClsCd'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_selfClsCd',label:'자가/CH',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_selfClsCd',class:'',direction:'auto',objType:'data',ref:'data:ds_odrInfo.selfClsCd','ev:onclick':'scwin.lc_selfClsCd_onclick','ev:onviewchange':'scwin.lc_selfClsCd_onviewchange',valueNotInList:'default'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당사운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LI'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가영업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LS'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가방지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LK'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가반출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JE'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_chClsCd',style:'width: 100px;',submenuSize:'auto',class:' w100',search:'start',allOption:'',chooseOption:'',ref:'data:ds_odrInfo.chClsCd',objType:'data',emptyItem:'true',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선사화주'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부인선'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 270px;display:none;',codeId:'ed_destPortCd',id:'udc_destPort',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',validTitle:'',UpperFlagCode:'1',btnId:'btn_destPortCd',nameId:'hid_destPortNm',maxlengthName:'30',objTypeCode:'data',objTypeName:'data',selectID:'retrievePortInfo',codeWidth:'60',UpperFlagName:'1','ev:onblurCodeEvent':'scwin.udc_destPort_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_destPort_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_destPort_onclickEvent',code:'destPortCd',refDataCollection:'ds_odrInfo',name:'destPortNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'운송사',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_transCoNm',placeholder:'',style:'width:100px;',objType:'data',ref:'data:ds_odrInfo.transCoNm'}},{T:1,N:'xf:input',A:{class:' ',id:'ed_transCoTelNo',placeholder:'',style:'width:150px;',objType:'data',maxByteLength:'20',title:'오더담당전화번호',validExp:'오더담당전화번호:no:maxLength=20',ref:'data:ds_odrInfo.transCoTelNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_transCondCdHl',label:'왕복/HL',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'lay_transCondCdHl',class:'form-group '},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'acb_transCondCd',ref:'data:ds_odrInfo.transCondCd',search:'start',style:'width:120px;',submenuSize:'auto',useKeywordHighlight:'false',objType:'data',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'편도'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'왕복'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'acb_cntrWtCondCd',ref:'data:ds_odrInfo.cntrWtCondCd',search:'start',style:'width:120px;',submenuSize:'auto',useKeywordHighlight:'false',objType:'data',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Combine'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Heavy'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Light'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'특이사항',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'xf:textarea',A:{class:'h-full',id:'ta_rmk',style:'',objType:'data',maxByteLength:'500',ref:'data:ds_odrInfo.rmk','ev:onblur':'scwin.ta_rmk_onblur',title:'특이사항',validExp:'특이사항:no:maxByteLength=500'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_clntMgntNo',label:'구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',ref:'data:ds_odrInfo.odrClsCd',chooseOption:'',style:'width: 100px;',allOption:'',id:'acb_odrClsCd',class:'',objType:'data',direction:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소오더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.input_onkeyup',maxByteLength:'30',style:'width:85px;display:none;',id:'ed_clntMgntNo',placeholder:'',class:'',objType:'data',editFormat:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',ref:'data:ds_odrInfo.clntMgntNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'배차담당',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'20',objTypeCode:'data',popupID:'','ev:onviewchangeCodeEvent':'scwin.udc_alloccarPic_onviewchangeCodeEvent',btnId:'btn_alloccarPicId',hideName:'true','ev:onclickEvent':'scwin.udc_alloccarPic_onclickEvent',codeId:'ed_alloccarPicNm1',validTitle:'배차담당',objTypeName:'data',nameId:'ed_alloccarPicId',style:'width:110px;','ev:onblurNameEvent':'scwin.udc_alloccarPic_onblurNameEvent',id:'udc_alloccarPic',class:'col8',selectID:'retrieveUserInfo',validExpCode:'배차담당:no:maxByteLength=20',refDataCollection:'ds_odrInfo',name:'alloccarPicId',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{maxByteLength:'20',style:'width:85px;',readOnly:'true',id:'input6',placeholder:'',title:'배차담당',class:'',objType:'data'}}]},{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.input_onkeyup',maxByteLength:'20',style:'width:85px;display:none;',id:'ed_alloccarPicNm2',placeholder:'',class:'',objType:'data',title:'배차담당',validExp:'배차담당:no:maxByteLength=20','ev:onchange':'scwin.ed_alloccarPicNm2_onchange'}},{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.input_onkeyup',maxByteLength:'20',style:'width:85px;display:none;',id:'ed_alloccarPicNm3',placeholder:'',class:'',objType:'data',title:'배차담당','ev:onchange':'scwin.ed_alloccarPicNm3_onchange',validExp:'배차담당:no:maxByteLength=20'}},{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.input_onkeyup',maxByteLength:'20',style:'width:85px;display:none;',id:'ed_alloccarPicNm4',placeholder:'',class:'',objType:'data',title:'배차담당','ev:onchange':'scwin.ed_alloccarPicNm4_onchange',validExp:'배차담당:no:maxByteLength=20'}},{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.input_onkeyup',maxByteLength:'20',style:'width:85px;display:none;',id:'ed_alloccarPicNm5',placeholder:'',class:'',objType:'data',title:'배차담당','ev:onchange':'scwin.ed_alloccarPicNm5_onchange',validExp:'배차담당:no:maxByteLength=20'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'lybox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'품명목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_commInfo',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_commInfo',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',dataName:'품명목록',editModeEvent:'onclick',rowStatusVisible:'true',rowStatusWidth:'20',focusFlow:'linear',readOnlyTabIgnore:'true','ev:onrowindexchange':'scwin.gr_commInfo_onrowindexchange','ev:oncellclick':'scwin.gr_commInfo_oncellclick','ev:onafteredit':'scwin.gr_commInfo_onafteredit','ev:onviewchange':'scwin.gr_commInfo_onviewchange','ev:onbeforeedit':'scwin.gr_commInfo_onbeforeedit',initFixedHeightByRowNum:'4',columnMoveWithFooter:'true',columnMove:'false',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'Size',class:'col-type1'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'Type',class:'col-type1'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'F/E',class:'col-type1'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'오더번호'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'품명순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column17',value:'수량',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'입력수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'중량(KG)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'온도',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',value:'DRY',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'출발일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'도착일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',value:'시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column44',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'NET중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',value:'확정여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'취소여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'select',id:'cntrSizCd',blockSelect:'false',displayMode:'value',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'select',id:'cntrTypCd',blockSelect:'false',displayMode:'value',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'select',id:'fullEmptyClsCd',blockSelect:'false',displayMode:'value',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'odrNo',blockSelect:'false',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commSeq',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',dataType:'number',maxLength:'15',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inputQty',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right',hidden:'true',maxLength:'15.3',dataType:'float',displayFormat:'#,##0.000',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'temper',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'dryYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkStDt',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',displayMode:'label',hidden:'true',dataType:'time',displayFormat:'HH:mm',maxLength:'4',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkEndDt',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',displayMode:'label',hidden:'true',dataType:'time',displayFormat:'HH:mm',maxLength:'4',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'unitCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'netWt',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cbm',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cnclYn',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',hidden:'true',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'SUM(\'qty\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'SUM(\'inputQty\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'commTotalRows',label:'0',class:'num',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_addRow1',btnRowDelObj:'btn_deleteRow1',btnCancelObj:'btn_undoRow1',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',cancelObjType:'ctrlBtn',gridID:'gr_commInfo',cancelFunction:'scwin.btn_undoRow1_onclick',rowDelFunction:'scwin.btn_deleteRow1_onclick',rowAddFunction:'scwin.btn_addRow1_onclick'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매출목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_sellInfo',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_sellInfo',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_sellInfo',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',focusFlow:'linear',readOnlyTabIgnore:'true',dataName:'매출목록',validFeatures:'ignoreStatus=no',initFixedHeightByRowNum:'5',columnMove:'false',columnMoveWithFooter:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'매출항목'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'작업경로'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'품명'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'단가'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'selpchItemNm',blockSelect:'false',displayMode:'label',textAlign:'left',viewType:'default'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'ctrtWrkPathNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'commNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'ctrtTrf',blockSelect:'false',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.00'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'sellTotalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_cntrInfo',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'복사조건 ',class:''}},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 70px;',allOption:'',id:'acb_sizClsCd',class:'',direction:'auto',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ALL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'45'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{ref:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:70px;',allOption:'',id:'acb_typClsCd',class:'',direction:'auto',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ALL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HC'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{ref:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width:70px;',allOption:'',id:'acb_efClsCd',class:'',direction:'auto',objType:'data',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ALL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'E'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'F'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'복사대상 ',class:''}},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOption:'',allOption:'',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',emptyItem:'true',disabled:'false',style:'width:200px;',id:'acb_cntrItemRow',class:'',objType:'data',direction:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PORT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'portCd'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'목적항구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'destPortCd'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'wt'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TERM'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'term'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'leaseYn'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SOC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'socYn'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DRY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'dryYn'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업구분'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'cntrWrkClsCd'}]}]}]}]},{T:1,N:'xf:trigger',A:{userAuth:'C',style:'',id:'btnCopy',type:'button',class:'btn ','ev:onclick':'scwin.btnCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridDownUserAuth:'X',gridID:'gr_cntrInfo',gridDownFn:'scwin.gr_cntrInfo_exceldownload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox ',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrInfo',id:'gr_cntrInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',fixedColumn:'7',dataName:'컨테이너목록',validFeatures:'ignoreStatus=no',editModeEvent:'onclick',focusFlow:'linear',readOnlyTabIgnore:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:onrowindexchange':'scwin.gr_cntrInfo_onrowindexchange','ev:onviewchange':'scwin.gr_cntrInfo_onviewchange','ev:oncellclick':'scwin.gr_cntrInfo_oncellclick','ev:ontextimageclick':'scwin.gr_cntrInfo_ontextimageclick',useShiftKey:'false',useCtrlKey:'false','ev:onafteredit':'scwin.gr_cntrInfo_onafteredit',columnMove:'false',columnMoveWithFooter:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'header_chk',inputType:'checkbox',removeBorderStyle:'false',width:'50',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'60',value:'Seq'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'60',value:'Seq'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'확정',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'bl',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'번호',width:'110',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SZ',width:'60',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'TP',width:'60',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column43',value:'F/E',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'수입Seal-No',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'수출Seal-No',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'FROM',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'FROM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'TO',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'TO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'현위치',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'현위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'PORT',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'PORT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'목적항구',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'목적PORT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'TERM',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'X-RAY',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column53',value:'LES',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column51',value:'SOC',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'OFF반납',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'작업',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'MG SET',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'중량(KG)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'온도',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',value:'DRY',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'중량조건',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'작업구분',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'출발일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',value:'시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'도착일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',value:'시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'실적여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'creatOdrNo',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'Currow',inputType:'expression',removeBorderStyle:'false',width:'60',hidden:'true',readOnly:'true',expression:'rowindex() + 1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSeq',inputType:'text',removeBorderStyle:'false',width:'60',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnYn',inputType:'checkbox',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'150',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'110',maxByteLength:'11'}},{T:1,N:'w2:column',A:{displayMode:'value',id:'cntrSizCd',inputType:'select',width:'60',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrSize'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'value',id:'cntrTypCd',inputType:'select',width:'60',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrType'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'60',inputType:'select',id:'fullEmptyClsCd',displayMode:'value',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrFE'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'impSealNo',displayMode:'label',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'expSealNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'dptWrkPlCd',displayMode:'label',textAlign:'center',hidden:'true',viewType:'default',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'arvWrkPlCd',displayMode:'label',textAlign:'center',hidden:'true',viewType:'default',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'currPosCd',displayMode:'label',textAlign:'center',hidden:'true',viewType:'default',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'currPosNm',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'portCd',displayMode:'label',textAlign:'center',viewType:'default',maxByteLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portNm',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'destPortCd',displayMode:'label',textAlign:'center',viewType:'default',maxByteLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'destPortNm',displayMode:'label',textAlign:'left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'term',displayMode:'label',maxByteLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'xrayLupTrgtYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'checkbox',id:'leaseYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'checkbox',id:'socYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'offRtrnClsCd',displayMode:'value delim label',textAlign:'left',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'impCntrWrkKndCd',displayMode:'value',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntrBO'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'impMgsetYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'15.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'temper',displayMode:'label',textAlign:'right',maxLength:'15.3',dataType:'float'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'dryYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'cntrWtCondCd',displayMode:'label',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'cntrWrkClsCd',displayMode:'label',hidden:'true',readOnly:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',displayMode:'label',dataType:'text',displayFormat:'##:##',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkEndHh',displayMode:'label',dataType:'text',displayFormat:'##:##',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'wrkRsltsNo',displayMode:'label',readOnly:'true',expression:'datalist(\'wrkRsltsNo\').trim()==\'\'?\'미생성\':\'생성\''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'cntrTotalRows',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_cntrInfo',btnRowAddObj:'btn_addRow2',btnRowDelObj:'btn_deleteRow2',btnCancelObj:'btn_undoRow2',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelFunction:'scwin.btn_undoRow2_onclick',rowAddFunction:'scwin.btn_addRow2_onclick',rowDelFunction:'scwin.btn_deleteRow2_onclick'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_confirmOdr2',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_confirmOdr2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_dcSc',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_dcSc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_unitySelling',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_unitySelling_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합매출입조정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_updateCntrInfo',style:'',type:'button','ev:onclick':'scwin.btn_updateCntrInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link dsN',id:'btn_updateRepWrkInfo',style:'',type:'button','ev:onclick':'scwin.btn_updateRepWrkInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표착지'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_copyOdr',style:'',type:'button','ev:onclick':'scwin.btn_copyOdr_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_odrRegIfno',style:'',type:'button','ev:onclick':'scwin.btn_odrRegIfno_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더등록현황'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_tmlEdiIfno',style:'',type:'button','ev:onclick':'scwin.btn_tmlEdiIfno_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'터미널 EDI정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_chgCntrNoInfo',style:'',type:'button','ev:onclick':'scwin.btn_chgCntrNoInfo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너번호변경'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button',objType:'ctrlBtn',userAuth:'D','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'dsN'},E:[{T:1,N:'w2:udc_comCode',A:{style:'width: 250px;',id:'udc_hidComCode',selectID:''}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkMode'}},{T:1,N:'xf:input',A:{style:'',id:'hid_alloccarPicId1'}},{T:1,N:'xf:input',A:{style:'',id:'hid_alloccarPicId2'}},{T:1,N:'xf:input',A:{style:'',id:'hid_alloccarPicId3'}},{T:1,N:'xf:input',A:{style:'',id:'hid_alloccarPicId4'}},{T:1,N:'xf:input',A:{style:'',id:'hid_alloccarPicId5'}},{T:1,N:'xf:input',A:{style:'',id:'hid_odrNo'}},{T:1,N:'xf:input',A:{style:'',id:'hid_chkReterieve'}}]}]}]}]}]})