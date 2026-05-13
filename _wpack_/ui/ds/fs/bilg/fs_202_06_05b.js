/*amd /ui/ds/fs/bilg/fs_202_06_05b.xml 90546 035327c288df15f9d95d4679c0281d37955a9ca432fa986d0e684acfe704e76f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingEvidenceList',saveRemovedData:'true','ev:ondataload':'scwin.ds_sellingEvidenceList_ondataload','ev:onrowpositionchange':'scwin.ds_sellingEvidenceList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'choice',name:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',id:'button',name:'건별처리;Popup'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNo',name:'청구처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNm',name:'청구처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiNo',name:'거래명세서번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn',name:'사업자번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'confirmDt',name:'거래명세서기간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'원화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmtFcrc',name:'외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sumAmt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyDt',name:'공급일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipDt',name:'전표일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyAcctDeptCd',name:'수금부서;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyAcctDeptNm',name:'수금부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요;(비고)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'goods',name:'품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'email',name:'E-mail'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarExceptYn',name:'신고제외'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellVatNo',name:'세금계산서;번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsNm',name:'전표확정;여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'imntSupplyAmt',name:'면세운임'}},{T:1,N:'w2:column',A:{id:'slipCloseYm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxCloseYm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtFr',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtTo',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainCertiNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLobranNm',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiCnt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRtAdptDt',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fireInsrRateAmt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdFrom',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntFrom',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdTo',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcntTo',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDt',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billTitleNm',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billAggrTitle',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgIntendDt',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curRow',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receiveSellingYn',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptClsCd',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctEvidClsCd',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctZeroTaxClsCd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCdNm',name:'name69',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_sellingEvidence','ev:ondataload':'scwin.ds_sellingEvidenceList_ondataload'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'choice',name:'choice'}},{T:1,N:'w2:key',A:{dataType:'text',id:'button',name:'건별처리;Popup'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgClntNo',name:'청구처'}},{T:1,N:'w2:key',A:{dataType:'text',id:'bilgClntNm',name:'청구처명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'certiNo',name:'거래명세서번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'crn',name:'사업자번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'confirmDt',name:'거래명세서기간'}},{T:1,N:'w2:key',A:{dataType:'text',id:'spplyAmt',name:'원화'}},{T:1,N:'w2:key',A:{dataType:'text',id:'spplyAmtFcrc',name:'외화'}},{T:1,N:'w2:key',A:{dataType:'text',id:'vatAmt',name:'부가세'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sumAmt',name:'금액'}},{T:1,N:'w2:key',A:{dataType:'text',id:'spplyDt',name:'공급일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'slipDt',name:'전표일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'collMoneyAcctDeptCd',name:'수금부서;코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'collMoneyAcctDeptNm',name:'수금부서명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'summary',name:'적요;(비고)'}},{T:1,N:'w2:key',A:{dataType:'text',id:'goods',name:'품명'}},{T:1,N:'w2:key',A:{dataType:'text',id:'email',name:'E-mail'}},{T:1,N:'w2:key',A:{dataType:'text',id:'declarExceptYn',name:'신고제외'}},{T:1,N:'w2:key',A:{dataType:'text',id:'sellVatNo',name:'세금계산서;번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'slipNo',name:'전표번호'}},{T:1,N:'w2:key',A:{dataType:'text',id:'dcsnClsNm',name:'전표확정;여부'}},{T:1,N:'w2:key',A:{dataType:'text',id:'imntSupplyAmt',name:'면세운임'}},{T:1,N:'w2:key',A:{id:'slipCloseYm',name:'name24',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxCloseYm',name:'name25',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDtFr',name:'name26',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDtTo',name:'name27',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiPatternCd',name:'name28',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mainCertiNo',name:'name29',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name30',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLobranNm',name:'name58',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiCnt',name:'name31',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'name32',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidRglClsCd',name:'name33',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'name34',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsNm',name:'name59',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name35',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'name36',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'name37',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptExchRt',name:'name38',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRtAdptDt',name:'name39',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fireInsrRateAmt',name:'name40',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name41',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAmt',name:'name42',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fcrcBilgAmt',name:'name43',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAmtFcrc',name:'name44',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inscrpVsslCd',name:'name45',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inscrpPortcnt',name:'name46',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCdFrom',name:'name47',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcntFrom',name:'name48',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCdTo',name:'name49',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcntTo',name:'name50',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arDepPortDt',name:'name51',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billTitleNm',name:'name52',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billAggrTitle',name:'name53',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'name54',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'name55',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgIntendDt',name:'name56',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtnGrpNo',name:'name57',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiNm',name:'name60',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repstNm',name:'name61',dataType:'text'}},{T:1,N:'w2:key',A:{id:'curRow',name:'name62',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receiveSellingYn',name:'name63',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receptClsCd',name:'name65',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name66',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name67',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctEvidClsCd',name:'name68',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctZeroTaxClsCd',name:'name69',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyAcctDeptCdNm',name:'name70',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveSellingEvidenceList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'choice',name:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',id:'button',name:'건별처리;Popup'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNo',name:'청구처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bilgClntNm',name:'청구처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiNo',name:'거래명세서번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn',name:'사업자번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'confirmDt',name:'거래명세서기간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'원화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmtFcrc',name:'외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sumAmt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyDt',name:'공급일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipDt',name:'전표일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyAcctDeptCd',name:'수금부서;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'collMoneyAcctDeptNm',name:'수금부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요;(비고)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'goods',name:'품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'email',name:'E-mail'}},{T:1,N:'w2:column',A:{dataType:'text',id:'declarExceptYn',name:'신고제외'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellVatNo',name:'세금계산서;번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsNm',name:'전표확정;여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'imntSupplyAmt',name:'면세운임'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commonList',saveRemovedData:'true','ev:ondataload':'scwin.ds_commonList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'choice',name:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiNo',name:'거래명세서번호;(BILL-NO)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'confirmDt',name:'거래명세서일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'대표;매출항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'House'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요;(TITLE)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCdFrom',name:'모선/항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arDepPortDt',name:'입출항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'환종'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adptExchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'원화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmtFcrc',name:'외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totAmt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'imntSupplyAmt',name:'면세운임'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mblNo',name:'Master'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'name49',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commonCopyList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'choice',name:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiNo',name:'거래명세서번호;(BILL-NO)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'confirmDt',name:'거래명세서일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'대표;매출항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'House'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요;(TITLE)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCdFrom',name:'모선/항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arDepPortDt',name:'입출항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'환종'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adptExchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'원화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmtFcrc',name:'외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totAmt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'imntSupplyAmt',name:'면세운임'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mblNo',name:'Master'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'name33',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveCommonList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'choice',name:'choice'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiNo',name:'거래명세서번호;(BILL-NO)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'confirmDt',name:'거래명세서일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'대표;매출항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blNo',name:'House'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요;(TITLE)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCdFrom',name:'모선/항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arDepPortDt',name:'입출항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'환종'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adptExchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'원화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmtFcrc',name:'외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세'}},{T:1,N:'w2:column',A:{dataType:'text',id:'totAmt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'imntSupplyAmt',name:'면세운임'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mblNo',name:'Master'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpVsslCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpPortcnt',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnGrpNo',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'name49',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiPatternCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDtConKnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'myModId',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inscrpVsslCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'creatClsCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cndCtrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_outSellingEvidenceList','ev:onsetdata':'scwin.ds_outSellingEvidenceList_onsetdata',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'curRow',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_billingCommonMessage','ev:onsetdata':'scwin.ds_billingCommonMessage_onsetdata'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'msg',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_eachUnsettledList',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_sellingEvidenceList","key":"OUT_DS1"},{"id":"ds_commonList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_sellingEvidenceList","key":"OUT_DS1"},{"id":"ds_commonList","key":"OUT_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_eachUnsettledList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_eachSellingEvidenceList',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_sellingEvidenceList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellingEvidenceList","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_eachSellingEvidenceList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_decisionCertiCommonList',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_sellingEvidence","key":"IN_DS1"},{"id":"ds_commonList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_commonList","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_decisionCertiCommonList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_decisionBillList',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_sellingEvidence","key":"IN_DS1"},{"id":"ds_commonList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_commonList","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_decisionBillList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveTaxInvoiceWhole',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_saveSellingEvidenceList","key":"IN_DS1"},{"id":"ds_saveCommonList","key":"IN_DS2"},{"id":"ds_outSellingEvidenceList","key":"OUT_DS1"},{"id":"ds_billingCommonMessage","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_outSellingEvidenceList","key":"OUT_DS1"},{"id":"ds_billingCommonMessage","key":"OUT_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveTaxInvoiceWhole_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo2","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strToDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.strFrDate = scwin.strToDate.substring(0, 6) + "01";

//다른 화면에서 넘어 오는 값 셋팅
scwin.bilgLodeptCd;
scwin.bilgLodeptNm;
scwin.bilgClntNo;
scwin.bilgClntNm;
scwin.certiPatternCd;
scwin.qryConDtFm;
scwin.qryConDtTo;
scwin.taxnClsCd;
scwin.kcomcd;
scwin.seaair;
scwin.iogb;
scwin.userId;
scwin.type;
scwin.rmk;
scwin.eng;
scwin.locPtnCls;
scwin.pic;
scwin.pgmId = "fs_202_06_05b.xml"; // 프로그램ID
scwin.isFilter = true;
scwin.spplyAmt = 0;
scwin.vatAmt = 0;
scwin.spplyAmtFcrc = 0;
scwin.bilgAmt = 0;
scwin.bilgAmtFcrc = 0;
scwin.fcrcBilgAmt = 0;
scwin.clntMgntYn = 0; //관리거래처 체크 
scwin.imntSupplyAmt = 0;

//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "SD070",
    compID: "rd_taxnClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);
  let memJson = $c.data.getMemInfo($p);
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  scwin.bilgLodeptCd = $c.data.getParameter($p, "bilgLodeptCd") || '';
  scwin.bilgLodeptNm = $c.data.getParameter($p, "bilgLodeptNm") || '';
  scwin.bilgClntNo = $c.data.getParameter($p, "bilgClntNo") || '';
  scwin.bilgClntNm = $c.data.getParameter($p, "bilgClntNm") || '';
  scwin.certiPatternCd = $c.data.getParameter($p, "certiPatternCd") || '';
  scwin.qryConDtFm = $c.data.getParameter($p, "qryConDtFm") || '';
  scwin.qryConDtTo = $c.data.getParameter($p, "qryConDtTo") || '';
  scwin.taxnClsCd = $c.data.getParameter($p, "taxnClsCd") || '';
  scwin.kcomcd = $c.data.getParameter($p, "kcomcd") || '';
  scwin.seaair = $c.data.getParameter($p, "seaair") || '';
  scwin.iogb = $c.data.getParameter($p, "iogb") || '';
  scwin.userId = $c.data.getParameter($p, "userId") || '';
  scwin.type = $c.data.getParameter($p, "type") || '';
  scwin.rmk = $c.data.getParameter($p, "rmk") || '';
  scwin.eng = $c.data.getParameter($p, "eng") || '';
  scwin.locPtnCls = $c.data.getParameter($p, "locPtnCls") || '';
  scwin.pic = $c.data.getParameter($p, "pic") || '';
  ed_qryConDtFm.setValue(scwin.strFrDate);
  ed_qryConDtTo.setValue(scwin.strToDate);
  rd_certiPatternCd.setValue("01");
  //rd_taxnClsCd.CodeValue = "01";
  rd_taxnClsCd.setSelectedIndex(0);
  rd_creatClsCd.setValue("Certi");

  //국제 물류에서 넘어 온값 Default값 셋팅
  if (scwin.bilgLodeptCd != "") {
    ed_bilgLodeptCd.setValue(scwin.bilgLodeptCd);
    txt_bilgLodeptNm.setValue(scwin.bilgLodeptNm);
  }
  if (scwin.bilgClntNo != "") {
    ed_bilgClntNo.setValue(scwin.bilgClntNo);
    txt_bilgClntNm.setValue(scwin.bilgClntNm);
  }
  if (scwin.certiPatternCd != "") {
    rd_certiPatternCd.setValue(scwin.certiPatternCd);
  }
  if (scwin.qryConDtFm != "") {
    ed_qryConDtFm.setValue(scwin.qryConDtFm);
    ed_qryConDtTo.setValue(scwin.qryConDtTo);
  }
  if (scwin.taxnClsCd != "") {
    rd_taxnClsCd.setValue(scwin.taxnClsCd);
  }
  if (scwin.certiPatternCd == "04") {
    gr_sellingEvidenceList.setColumnVisible("imntSupplyAmt", true);
    gr_commonList.setColumnVisible("imntSupplyAmt", true);
    gr_commonList.setColumnVisible("mblNo", true);
  } else {
    gr_sellingEvidenceList.setColumnVisible("imntSupplyAmt", false);
    gr_commonList.setColumnVisible("imntSupplyAmt", false);
    gr_commonList.setColumnVisible("mblNo", false);
  }
  $c.gus.cfDisableBtnOnly($p, [btn_save]);
  $c.gus.cfEnableObj($p, ed_slipCloseYm, false);
  $c.gus.cfEnableObj($p, ed_taxCloseYm, false);

  // alert("테스트값 셋팅");
  // ed_bilgLodeptCd.setValue("6A1");
  // ed_qryConDtFm.setValue("20250701");
  // ed_qryConDtTo.setValue("20250730");

  ed_bilgLodeptCd.focus();
  debugger;
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.setInit = function () {
  rd_taxnClsCd.setValue(scwin.taxnClsCd);
};
scwin.f_Retrieve = async function () {
  //validation check
  if (!$c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_qryConDtFm, ed_qryConDtTo])) {
    return;
  }
  if (ed_bilgLodeptCd.getValue() == "") {
    await $c.win.alert($p, "청구부서은(는) 필수 입력 항목입니다.");
    ed_bilgLodeptCd.focus();
    return;
  }

  //조회시작일자가 더 클경우 체크
  if (!$c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  ds_queryCondition.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  ds_queryCondition.set("certiPatternCd", rd_certiPatternCd.getValue());
  ds_queryCondition.set("qryDtConKnd", lc_qryDtConKnd.getValue());
  ds_queryCondition.set("qryConDtFm", ed_qryConDtFm.getValue());
  ds_queryCondition.set("qryConDtTo", ed_qryConDtTo.getValue());
  ds_queryCondition.set("bilgClntNo", ed_bilgClntNo.getValue());
  ds_queryCondition.set("myModId", ed_myModId.getValue());
  ds_queryCondition.set("taxnClsCd", rd_taxnClsCd.getValue());
  ds_queryCondition.set("lineCd", ed_lineCd.getValue());
  ds_queryCondition.set("inscrpVsslCd", txt_inscrpVsslCd.getValue());
  ds_queryCondition.set("portcnt", txt_portcnt.getValue());
  ds_queryCondition.set("creatClsCd", rd_creatClsCd.getValue());

  //상세화면 데이타 Clear
  ds_sellingEvidenceList.removeAll();
  ds_commonList.removeAll();
  ed_totRow.setValue("0");
  ed_totRow2.setValue("0");
  if (lc_qryDtConKnd.getValue() == "SPPLY" || lc_qryDtConKnd.getValue() == "POST") {
    sbm_eachSellingEvidenceList.action = "/ds.fs.bilg.bilg.RetrieveCustomerEachSellingEvidenceListCMD.do";
    $c.sbm.execute($p, sbm_eachSellingEvidenceList);
  } else if (rd_certiPatternCd.getValue() == "01" || rd_certiPatternCd.getValue() == "04") {
    sbm_eachUnsettledList.action = "/ds.fs.bilg.bilg.RetrieveCustomerEachUnsettledCertiListCMD.do";
    $c.sbm.execute($p, sbm_eachUnsettledList);
  } else {
    sbm_eachUnsettledList.action = "/ds.fs.bilg.bilg.RetrieveCustomerEachUnsettledBillListCMD.do";
    $c.sbm.execute($p, sbm_eachUnsettledList);
  }
};
scwin.f_Clear = function () {
  ds_sellingEvidenceList.removeAll();
  ds_commonList.removeAll();
  ed_totRow.setValue("0");
  ed_totRow2.setValue("0");
  $c.gus.cfDisableBtnOnly($p, [btn_save]);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_bilgLodeptCd, txt_bilgLodeptNm]);
  ed_qryConDtFm.setValue(scwin.strFrDate);
  ed_qryConDtTo.setValue(scwin.strToDate);
  rd_certiPatternCd.setValue("01");

  //rd_taxnClsCd.CodeValue = "01";
  rd_taxnClsCd.setSelectedIndex(0);
  ed_bilgLodeptCd.focus();
};
scwin.emailValidator = function (value) {
  var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
  if (value.search(format) == -1) {
    return false;
  } else {
    return true;
  }
};
scwin.f_Save = async function () {
  if (ds_sellingEvidenceList.getTotalRow() < 1 || ds_commonList.getTotalRow() < 1) {
    return;
  }
  $c.gus.cfCopyDataSetHeader($p, ds_sellingEvidenceList, ds_saveSellingEvidenceList);
  var transRow;
  var chkCnt = 0;
  for (var i = 0; i < ds_sellingEvidenceList.getTotalRow(); i++) {
    if (ds_sellingEvidenceList.getCellData(i, "choice") == "T") {
      // 청구 / 영수가 청구일 경우에만 관리거래처 체크
      await scwin.f_retrieveCtrtNo2(ds_sellingEvidenceList.getCellData(i, "bilgClntNo"));
      if (scwin.clntMgntYn == 1) {
        $c.gus.cfAlertMsg($p, "청구처(" + ds_sellingEvidenceList.getCellData(i, "bilgClntNo") + ") 업체가  관리대상 거래처 입니다.\n거래처코드의 상태를 확인하시고, 관리거래처인 경우에는 저장할 수 없습니다.");
        return;
      }

      // 청구일  경우 매출입구분이 영수매출인 경우는 세금계산서 생성 불가 2011.06.22
      if (ds_sellingEvidenceList.getCellData(i, "receiveSellingYn") == "1") {
        $c.gus.cfAlertMsg($p, "청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 청구처는  영수매출 거래처입니다.");
        return;
      }
      if (ds_sellingEvidenceList.getCellData(i, "spplyDt") == null || ds_sellingEvidenceList.getCellData(i, "spplyDt") == "") {
        $c.gus.cfAlertMsg($p, "청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 공급일자는 필수입력 항목입니다.");
        return;
      }
      // if (!$c.gus.cfValidate(ds_sellingEvidenceList.getCellData(i, "spplyDt"), "date=YYYYMMDD")) {
      //     $c.gus.cfAlertMsg("청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 공급일자는 유효한 날짜 형식이 아닙니다.");
      //     return;
      // }
      if (ds_sellingEvidenceList.getCellData(i, "slipDt") == null || ds_sellingEvidenceList.getCellData(i, "slipDt") == "") {
        $c.gus.cfAlertMsg($p, "청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 전표일자는 필수입력 항목입니다.");
        return;
      }
      // if (!$c.gus.cfValidate(ds_sellingEvidenceList.getCellData(i, "slipDt"), "date=YYYYMMDD")) {
      //     $c.gus.cfAlertMsg("청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 전표일자는 유효한 날짜 형식이 아닙니다.");
      //     return;
      // }
      if (ds_sellingEvidenceList.getCellData(i, "collMoneyAcctDeptCd") == null || ds_sellingEvidenceList.getCellData(i, "collMoneyAcctDeptCd") == "") {
        $c.gus.cfAlertMsg($p, "청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 수금부서는 필수 입력 항목입니다. \r\r [/공통/거래처/거래처관리] 화면에서 수금부서를 먼저 등록하세요.."); //@은(는) 필수 입력 항목입니다
        return;
      }
      if (ds_sellingEvidenceList.getCellData(i, "summary") == null || ds_sellingEvidenceList.getCellData(i, "summary") == "") {
        $c.gus.cfAlertMsg($p, "청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 적요는 필수입력 항목입니다.");
        return;
      }
      if (ds_sellingEvidenceList.getCellData(i, "goods") == null || ds_sellingEvidenceList.getCellData(i, "goods") == "") {
        $c.gus.cfAlertMsg($p, "청구세금계산서 내역의 " + (i + 1) + "번째 데이터에 품명은 필수입력 항목입니다.");
        return;
      }

      // 세금계산서거 발행되었으면....
      if (ds_sellingEvidenceList.getCellData(i, "slipNo") != null && ds_sellingEvidenceList.getCellData(i, "slipNo") != "") {
        $c.gus.cfAlertMsg($p, "청구세금계산서 내역의 " + (i + 1) + "번째 데이터는 매출증빙 내역이 있는 자료입니다.\n일괄저장 할 수 없습니다.");
        return;
      }

      // transRow = ds_sellingEvidenceList.ExportData(i, 1, false);
      // ds_saveSellingEvidenceList.ImportData(transRow);
      ds_saveSellingEvidenceList.setRowJSON(i, ds_sellingEvidenceList.getRowJSON(i));
      chkCnt++;
      ds_saveSellingEvidenceList.setCellData(chkCnt, "curRow", i + 1);
    }
  }

  // isFilter = false;
  // gr_commonList.DataID = '';
  // ds_commonList.filter();
  // gr_commonList.DataID = 'ds_commonList';

  $c.gus.cfCopyDataSetHeader($p, ds_commonList, ds_saveCommonList);
  var transRow2;
  var chkCnt2 = 0;
  if (ds_queryCondition.get("creatClsCd") == "Clnt") {
    for (var i = 0; i < ds_commonList.getTotalRow(); i++) {
      if (ds_commonList.getCellData(i, "choice") == "T") {
        var target = ds_commonList.getCellData(i, "bilgClntNo");
        for (var j = 0; j < ds_sellingEvidenceList.getRowCount(); j++) {
          if (ds_sellingEvidenceList.getCellData(j, "bilgClntNo") == target && ds_sellingEvidenceList.getCellData(j, "choice") == "T") {
            // 처리
            ds_saveCommonList.setRowJSON(i, ds_commonList.getRowJSON(i));
            chkCnt2++;
            break;
          }
        }
        // if (ds_sellingEvidenceList.getCellData(ds_sellingEvidenceList.getMatchedData('bilgClntNo', ds_commonList.getCellData(i, "bilgClntNo")[0]), "choice") == "T") {
        //     // transRow2 = ds_commonList.ExportData(i, 1, false);
        //     // ds_saveCommonList.ImportData(transRow2);
        //     ds_saveCommonList.setRowJSON(i, ds_commonList.getRowJSON(i));
        //     chkCnt2++;
        // }
      }
    }
  } else {
    for (var i = 0; i < ds_commonList.getTotalRow(); i++) {
      if (ds_commonList.getCellData(i, "choice") == "T") {
        var target = ds_commonList.getCellData(i, "certiNo");
        for (var j = 0; j < ds_sellingEvidenceList.getRowCount(); j++) {
          if (ds_sellingEvidenceList.getCellData(j, "certiNo") == target && ds_sellingEvidenceList.getCellData(j, "choice") == "T") {
            // 처리
            ds_saveCommonList.setRowJSON(i, ds_commonList.getRowJSON(i));
            chkCnt2++;
            break;
          }
        }
        // if (ds_sellingEvidenceList.getCellData(ds_sellingEvidenceList.getMatchedData('certiNo', ds_commonList.getCellData(i, "certiNo")[0]), "choice") == "T") {
        //     // transRow2 = ds_commonList.ExportData(i, 1, false);
        //     // ds_saveCommonList.ImportData(transRow2);
        //     ds_saveCommonList.setRowJSON(i, ds_commonList.getRowJSON(i));
        //     chkCnt2++;
        // }
      }
    }
  }

  // isFilter = true;
  // gr_commonList.DataID = '';
  // ds_commonList.filter();
  // gr_commonList.DataID = 'ds_commonList';

  if (chkCnt < 1 || chkCnt2 < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["저장할 자료"]);
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;

  /////////////////////////////////////
  // 전자세금계산서 조회를 위한 URL 생성  //
  /////////////////////////////////////
  var locPtnCls = scwin.locPtnCls; // 1.Invoice, 2.Partner
  var seaair = scwin.seaair;
  if (rd_certiPatternCd.getValue() == "04" && seaair == "") {
    $c.gus.cfAlertMsg($p, "국제물류 청구는 Invoice나 Partner Invoice화면에서 조회후 작업 하세요!");
    return;
  }
  for (var i = 0; i < ds_saveCommonList.getTotalRow(); i++) {
    if (seaair != "") {
      if (locPtnCls == "1") {
        if (seaair == "S") {
          var url = scwin.f_createUrl("/il/acc/ac_101_01_01_sea.ozr", "ac_101_01_01_sea.odi", scwin.f_createParameter(i));
          ds_saveCommonList.setCellData(i, "url", url);
        } else {
          var url = scwin.f_createUrl("/il/acc/ac_101_01_01_air.ozr", "ac_101_01_01_air.odi", scwin.f_createParameter(i));
          ds_saveCommonList.setCellData(i, "url", url);
        }
      } else {
        var url = scwin.f_createUrl("/il/acc/ac_104_01_01.ozr", "ac_104_01_01.odi", scwin.f_createPartnerParam(i));
        ds_saveCommonList.setCellData(i, "url", url);
      }
    } else {
      var odi1 = "01";
      var odi2 = ds_saveCommonList.getCellData(i, "inscrpFmlaPatternCd");
      var url = scwin.f_createUrl("/ds/fs/fs_202_06_10_" + odi1 + "_" + odi2 + ".ozr", "fs_202_06_10_" + odi1 + "_" + odi2 + ".odi", scwin.f_createParam(i));
      ds_saveCommonList.setCellData(i, "url", url);
    }
  }

  // dataSetDebug(ds_saveCommonList, false);

  sbm_saveTaxInvoiceWhole.action = "/ds.fs.bilg.bilg.SaveTaxInvoiceWholeCMD.do";
  $c.sbm.execute($p, sbm_saveTaxInvoiceWhole);
};
scwin.f_createUrl = function (ozrFileNm, odiFileNm, ozParam) {
  var url = "";
  url = "http://ebiz.debis.co.kr/common/xml/external_interface.xml?" + "SYS_CD=OSIDE_CERTI&certiOzrFileNm=" + ozrFileNm + "&certiOdiFileNm=" + odiFileNm + "&certiOzParam=" + ozParam;
  return url;
};
scwin.f_createParam = function (idx) {
  var param = "";
  param = "bilgLodeptCd=" + ds_saveCommonList.getCellData(idx, "bilgLodeptCd") + ",bilgClntNo=" + ds_saveCommonList.getCellData(idx, "bilgClntNo") + ",qryConKnd=" + "02" + ",confirmDtFm=" + "" + ",confirmDtTo=" + "" + ",spplyDtFm=" + "" + ",spplyDtTo=" + "" + ",modId=" + "" + ",printFg=" + "" + ",certiAggregateFg=" + "" + ",dcsnClsCd=" + "" + ",certiNo=" + ds_saveCommonList.getCellData(idx, "certiNo") + ",fmlaClsCd=" + ds_saveCommonList.getCellData(idx, "fmlaClsCd") + ",fmlaPatternCd=" + ds_saveCommonList.getCellData(idx, "fmlaPatternCd") + ",upperFmlaClsCd=" + "" + ",upperFmlaPatternCd=" + "" + ",sellVatNo=" + "" + ",inscrpFmlaClsCd=" + ds_saveCommonList.getCellData(idx, "inscrpFmlaClsCd") + ",inscrpFmlaPatternCd=" + ds_saveCommonList.getCellData(idx, "inscrpFmlaPatternCd") + ",spplyFg=" + "receive" //발행로직이 없으므로 고정
  + ",sumGbn=" + "Y"; //발행로직이 없으므로 고정

  return param;
};
scwin.f_createParameter = function (idx) {
  var param = "";
  param = "KCOMCD=" + scwin.kcomcd;
  +",PRTN_GRP_NO=" + ds_saveCommonList.getCellData(idx, "prtnGrpNo") + ",SEAAIR=" + scwin.seaair + ",IOGB=" + scwin.iogb + ",BILG_CLNT_NO=" + ds_saveCommonList.getCellData(idx, "bilgClntNo") + ",USER_ID=" + scwin.userId + ",TYPE=" + scwin.type + ",RMK=" + scwin.rmk + ",REMARK=" + ds_saveCommonList.getCellData(idx, "summary") + ",ENG=" + scwin.eng + ",PIC=" + scwin.pic;
  return param;
};
scwin.f_createPartnerParam = function (idx) {
  var param = "";
  param = "KCOMCD=" + scwin.kcomcd + ",PRTN_GRP_NO=" + ds_saveCommonList.getCellData(idx, "prtnGrpNo") + ",SEAAIR=" + scwin.seaair + ",IOGB=" + scwin.iogb + ",BILG_CLNT_NO=" + ds_saveCommonList.getCellData(idx, "bilgClntNo") + ",USER_ID=" + scwin.userId + ",TYPE=" + scwin.type + ",PIC=" + scwin.pic;
  return param;
};
scwin.f_crtParam = function (idx) {
  var param = "";
  param = "bilgLodeptCd=" + ds_commonCopyList.getCellData(idx, "bilgLodeptCd") + ",bilgClntNo=" + ds_commonCopyList.getCellData(idx, "bilgClntNo") + ",qryConKnd=" + "02" + ",confirmDtFm=" + "" + ",confirmDtTo=" + "" + ",spplyDtFm=" + "" + ",spplyDtTo=" + "" + ",modId=" + "" + ",printFg=" + "" + ",certiAggregateFg=" + "" + ",dcsnClsCd=" + "" + ",certiNo=" + ds_commonCopyList.getCellData(idx, "certiNo") + ",fmlaClsCd=" + ds_commonCopyList.getCellData(idx, "fmlaClsCd") + ",fmlaPatternCd=" + ds_commonCopyList.getCellData(idx, "fmlaPatternCd") + ",upperFmlaClsCd=" + "" + ",upperFmlaPatternCd=" + "" + ",sellVatNo=" + "" + ",inscrpFmlaClsCd=" + ds_commonCopyList.getCellData(idx, "inscrpFmlaClsCd") + ",inscrpFmlaPatternCd=" + ds_commonCopyList.getCellData(idx, "inscrpFmlaPatternCd") + ",spplyFg=" + "receive" //발행로직이 없으므로 고정
  + ",sumGbn=" + "Y"; //발행로직이 없으므로 고정

  return param;
};
scwin.f_crtParameter = function (idx) {
  var param = "";
  param = "KCOMCD=" + scwin.kcomcd + ",PRTN_GRP_NO=" + ds_commonCopyList.getCellData(idx, "prtnGrpNo") + ",SEAAIR=" + scwin.seaair + ",IOGB=" + scwin.iogb + ",BILG_CLNT_NO=" + ds_commonCopyList.getCellData(idx, "bilgClntNo") + ",USER_ID=" + scwin.userId + ",TYPE=" + scwin.type + ",RMK=" + scwin.rmk + ",REMARK=" + ds_commonCopyList.getCellData(idx, "summary") + ",ENG=" + scwin.eng + ",PIC=" + scwin.pic;
  return param;
};
scwin.f_crtPartnerParam = function (idx) {
  var param = "";
  param = "KCOMCD=" + scwin.kcomcd + ",PRTN_GRP_NO=" + ds_commonCopyList.getCellData(idx, "prtnGrpNo") + ",SEAAIR=" + scwin.seaair + ",IOGB=" + scwin.iogb + ",BILG_CLNT_NO=" + ds_commonCopyList.getCellData(idx, "bilgClntNo") + ",USER_ID=" + scwin.userId + ",TYPE=" + scwin.type + ",PIC=" + scwin.pic;
  return param;
};
scwin.f_retrieveCtrtNo2 = async function (bilgClntNo) {
  // dsHeader = "ctrtClntNo:STRING(6)";				// 계약거래처 번호
  // ds_cndCtrtNo.SetDataHeader(dsHeader);

  ds_cndCtrtNo.set("ctrtClntNo", bilgClntNo); //거래처 코드 

  //조회
  sbm_retrieveCtrtNo2.action = "/ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do";
  await $c.sbm.execute($p, sbm_retrieveCtrtNo2);
  var ctrtNoRows = ds_ctrtNo2.getTotalRow();
  if (ctrtNoRows > 0) {
    //계약번호가 서로 다른 것이 있는 경우, 선택을 default로 보여주기 위한 process
    var sameYn = "N";
    for (var j = 0; j < ds_ctrtNo2.getTotalRow(); j++) {
      if (1 == ds_ctrtNo2.getCellData(j, "mgntTrgtClntYn")) {
        sameYn = "Y";
        break;
      }
    }
    if (sameYn == "Y") {
      //cfAlertMsg("청구처가 관리대상 거래처 입니다.\n거래처코드의 상태를 확인하시고, 관리거래처인 경우에는 저장할 수 없습니다.");
      scwin.clntMgntYn = 1;
    } else {
      scwin.clntMgntYn = 0;
    }
  } else {
    $c.gus.cfAlertMsg($p, "거래처의 기본사항이 없습니다.");
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부

  switch (disGubun) {
    case 1:
      // 라인코드팝업
      udc_line.setSelectId("retrieveLineInfo");
      udc_line.cfCommonPopUp(scwin.udc_line_callbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      //청구담당자코드팝업
      udc_modId.setSelectId("retrieveEmpInfo");
      udc_modId.cfCommonPopUp(scwin.udc_modId_callbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      //청구부서코드팝업
      udc_dept.setSelectId("retrieveOpDeptCdInfo");
      udc_dept.cfCommonPopUp(scwin.udc_dept_callbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      //청구화주코드팝업
      udc_clnt.setSelectId("retrieveClntInfo");
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callbackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 5:
      //E-mail팝업
      var where = "";
      var check = "F";
      var bilgClntNo = ds_sellingEvidenceList.getCellData(ds_sellingEvidenceList.getRowPosition(), "bilgClntNo"); //청구처번호
      var email = ds_sellingEvidenceList.getCellData(ds_sellingEvidenceList.getRowPosition(), "email"); //이메일

      udc_email.setSelectId("retrieveClntEmail");
      udc_email.cfCommonPopUp(scwin.udc_email_callbackFunc, bilgClntNo, email, check, null, null, null, null, where, null, null, null, null);
    default:
      break;
  }
};
scwin.udc_line_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm); // 라인코드, 라인명
};
scwin.udc_modId_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_myModId, txt_empNm); // 청구담당자코드, 청구담당자명
};
scwin.udc_dept_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm); // 청구부서코드, 청구부서명
};
scwin.udc_clnt_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm); // 청구화주코드, 청구화주명
};
scwin.udc_email_callbackFunc = function (rtnList) {
  ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "email", rtnList[0]); //Email
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_CollMoneyPopup = function (pClose) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  var pCode = "";
  var pName = "";

  // 수금부서 코드를 가져온다
  pCode = ds_sellingEvidenceList.getCellData(ds_sellingEvidenceList.getRowPosition(), "collMoneyAcctDeptCd");

  // 수금부서 PopUp 호출
  udc_money.setSelectId("retrieveAcctDeptCdInfo");
  udc_money.cfCommonPopUp(pCallback, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null);
  ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "collMoneyAcctDeptCd", rtnList[0]); //수금부서
  ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "collMoneyAcctDeptNm", rtnList[1]); //수급숩서명
};
scwin.f_downExcelSheet = async function () {
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    grdId = this.grid.id;
    grdObj = $p.getComponentById(grdId);
    const infoArr = [];
    filename = grdId.indexOf("gr_sellingEvidenceList") > -1 ? "청구처별 청구서 내역" : "거래명세서별 청구서 내역";
    const options = {
      fileName: filename + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: filename
    };
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
scwin.filter = function (str) {
  ds_commonList.clearFilter();
  ds_commonList.setColumnFilter({
    type: 'row',
    colIndex: 'certiNo',
    key: str,
    condition: 'and'
  });
};
scwin.setDate = function (d, fd, r, c) {
  data = ds_sellingEvidenceList.getRowJSON(r);
  return scwin.formatYmd8(data.confirmDtFr) + " - " + scwin.formatYmd8(data.confirmDtTo);
};
scwin.formatYmd8 = function (v) {
  const s = String(v ?? "").replace(/\D/g, ""); // 숫자만
  if (s.length !== 8) return ""; // 필요하면 원본 반환으로 바꿔도 됨
  return `${s.slice(0, 4)}/${s.slice(4, 6)}/${s.slice(6, 8)}`;
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   

scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_email_onclick = function (e) {
  // fi_100_01_03b
  menuNm = "";
  src = "";
  menuId = "11111";
  paramObj = {};
  src = "/ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml";
  menuNm = "전자세금계산서거래처정보관리";
  paramObj.pgmInfo = {};
  $c.win.openMenu($p, menuNm, src, menuId, paramObj);
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Clear();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_eachUnsettledList_submitdone = function (e) {
  // 국제영업1팀, 2팀, 3팀에만 해당되도록
  //1. 국제 PI 품목 : 일반화물 디폴트 
  //2. 국제 PI : 적요(비고) : WFG금액 표기

  if (rd_certiPatternCd.getValue() == "04") {
    if ((ed_bilgLodeptCd.getValue() == "1G34" || ed_bilgLodeptCd.getValue() == "1G35" || ed_bilgLodeptCd.getValue() == "1G36") && !$c.gus.cfIsNull($p, ed_bilgClntNo.getValue())) {
      for (var i = 0; i < ds_sellingEvidenceList.getTotalRow(); i++) {
        ds_sellingEvidenceList.setCellData(i, "goods", "일반화물");
        if (ds_sellingEvidenceList.getCellData(i, "imntSupplyAmt") > 0) {
          ds_sellingEvidenceList.setCellData(i, "summary", "면세금액 : " + ds_sellingEvidenceList.getCellData(i, "imntSupplyAmt") + "원");
        }
      }
    }
  }

  // 21.03.22 RPA개발 관련 요청 : 조회 후 그리드 스크롤 맨 앞으로 고정
  // gr_sellingEvidenceList.SetHScrolling(1);
};
scwin.ds_sellingEvidenceList_ondataload = function () {
  rowcnt = ds_sellingEvidenceList.getTotalRow();
  ed_totRow.setValue(rowcnt);
  ed_slipCloseYm.setValue(ds_sellingEvidenceList.getCellData(0, "slipCloseYm")); //회계마감월
  ed_taxCloseYm.setValue(ds_sellingEvidenceList.getCellData(0, "taxCloseYm")); //세무마감월

  if (rowcnt > 0) {
    // ds_sellingEvidenceList.RowPosition = 1;
    gr_sellingEvidenceList.setFocusedCell(0, 0);

    // 세금계산서거 발행되었으면....
    if (ds_sellingEvidenceList.getCellData(0, "slipNo") != null && ds_sellingEvidenceList.getCellData(0, "slipNo") != "") {
      // var transRow;
      // $c.gus.cfCopyDataSetHeader(ds_sellingEvidenceList, ds_sellingEvidence);
      // transRow = ds_sellingEvidenceList.ExportData(1, 1, false);
      // ds_sellingEvidence.ImportData(transRow);
      ds_sellingEvidence.setJSON(ds_sellingEvidenceList.getRowJSON(0));
      if (ds_sellingEvidenceList.getCellData(0, "fmlaClsCd") == "01") {
        sbm_decisionCertiCommonList.action = "/ds.fs.bilg.bilg.RetrieveDecisionCertiCommonListCMD.do";
        $c.sbm.execute($p, sbm_decisionCertiCommonList);
      } else if (ds_sellingEvidenceList.getCellData(0, "fmlaClsCd") == "03") {
        sbm_decisionBillList.action = "/ds.fs.bilg.bilg.RetrieveDecisionBillListCMD.do";
        $c.sbm.execute($p, sbm_decisionBillList);
      } else {
        return;
      }
      // ds_commonList.UseFilter = false;
      $c.gus.cfDisableBtnOnly($p, [btn_save]);
      // gr_sellingEvidenceList.setColumnVisible(, 'Show') = "false";
      gr_sellingEvidenceList.setColumnVisible('choice', false);
      // gr_commonList.setColumnVisible('choice', 'Show') = "false";
      gr_commonList.setColumnVisible('choice', false);
    } else {
      // ds_commonList.UseFilter = true;
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      // gr_sellingEvidenceList.setColumnVisible(, 'Show') = "true";
      gr_sellingEvidenceList.setColumnVisible('choice', true);
      // gr_commonList.setColumnVisible('choice', 'Show') = "true";
      gr_commonList.setColumnVisible('choice', true);
    }
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.ds_commonList_ondataload = function () {
  scwin.filter(ds_sellingEvidenceList.getCellData(0, "certiNo"));
  ed_totRow2.setValue(ds_commonList.getFilterList().length);
};
scwin.ds_outSellingEvidenceList_onsetdata = function () {
  for (var i = 0; i < rowcnt; i++) {
    ds_sellingEvidenceList.setCellData(ds_outSellingEvidenceList.getCellData(i, "curRow"), "sellVatNo", ds_outSellingEvidenceList.getCellData(i, "sellVatNo"));
    ds_sellingEvidenceList.setCellData(ds_outSellingEvidenceList.getCellData(i, "curRow"), "slipNo", ds_outSellingEvidenceList.getCellData(i, "slipNo"));
    ds_sellingEvidenceList.setCellData(ds_outSellingEvidenceList.getCellData(i, "curRow"), "dcsnClsNm", ds_outSellingEvidenceList.getCellData(i, "dcsnClsNm"));
    if (i == rowcnt - 1) {
      ds_sellingEvidenceList.setRowPosition(ds_outSellingEvidenceList.getCellData(i, "curRow"));
      ds_sellingEvidenceList.setCellData(ds_outSellingEvidenceList.getCellData(i, "curRow"), "choice", "F");
      gr_sellingEvidenceList.setColumnReadOnly('choice', true);
      gr_commonList.setColumnVisible('choice', false);
      //cfDisableBtnOnly([bSave]);
    }
  }
};
scwin.ds_billingCommonMessage_onsetdata = function () {
  msg = ds_billingCommonMessage.get("msg");
  if (msg == "") return;
  $c.gus.cfAlertMsg($p, msg);
};
scwin.gr_sellingEvidenceList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  scwin.filter(ds_sellingEvidenceList.getCellData(rowIndex, "certiNo"));
  if (columnId != "button") return;
  row = rowIndex;

  //$c.gus.cfCopyDataSetHeader(ds_sellingEvidenceList, ds_sellingEvidence);
  ds_sellingEvidence.setJSON(ds_sellingEvidenceList.getRowJSON(row));
  ds_sellingEvidence.set("curRow", row);

  // 과세구분명 추가
  ds_sellingEvidence.set("taxnClsNm", rd_taxnClsCd.getText(rd_taxnClsCd.getValue()));

  //$c.gus.cfCopyDataSet(ds_commonList, ds_commonCopyList);
  // 2026/03/12 filter된 Row만 복사
  ds_commonCopyList.setJSON(ds_commonList.getMatchedJSON());

  //////////////////////////////////////////////////////////////////////////////
  // 전자세금계산서 조회를 위한 URL 생성  <개별생성은 URL자체를 넘겨준다 2010.12.24>  //
  //////////////////////////////////////////////////////////////////////////////
  var locPtnCls = scwin.locPtnCls; // 1.Invoice, 2.Partner
  var seaair = scwin.seaair;
  if (rd_certiPatternCd.getValue() == "04" && seaair == "") {
    $c.gus.cfAlertMsg($p, "국제물류 청구는 Invoice나 Partner Invoice화면에서 조회후 작업 하세요!");
    return;
  }
  for (var i = 0; i < ds_commonCopyList.getTotalRow(); i++) {
    if (scwin.seaair != "") {
      if (scwin.locPtnCls == "1") {
        if (scwin.seaair == "S") {
          var url = scwin.f_createUrl("/il/acc/ac_101_01_01_sea.ozr", "ac_101_01_01_sea.odi", scwin.f_crtParameter(i));
          ds_commonCopyList.setCellData(i, "url", url);
        } else {
          var url = f_createUrl("/il/acc/ac_101_01_01_air.ozr", "ac_101_01_01_air.odi", scwin.f_crtParameter(i));
          ds_commonCopyList.setCellData(i, "url", url);
        }
      } else {
        var url = scwin.f_createUrl("/il/acc/ac_104_01_01.ozr", "ac_104_01_01.odi", scwin.f_crtPartnerParam(i));
        ds_commonCopyList.setCellData(i, "url", url);
      }
    } else {
      var odi1 = "01";
      var odi2 = ds_commonCopyList.getCellData(i, "inscrpFmlaPatternCd");
      var url = scwin.f_createUrl("/ds/fs/fs_202_06_10_" + odi1 + "_" + odi2 + ".ozr", "fs_202_06_10_" + odi1 + "_" + odi2 + ".odi", scwin.f_crtParam(i));
      ds_commonCopyList.setCellData(i, "url", url);
    }
  }
  var valueObject = {
    "sellingEvidence": ds_sellingEvidence.getJSON(),
    "commonList": ds_commonCopyList.getAllJSON()
  };

  //상세화면 호출
  var opts = {
    id: "smpPop",
    popupName: "세금계산서 개별 생성",
    modal: true,
    type: "browserPopup",
    width: 1220,
    height: 770,
    title: "세금계산서 개별 생성"
  };
  var result = await $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_202_06_06p.xml", opts, valueObject);
  if ($c.util.isEmpty($p, result)) return;
  if (result.flag == "DELETE") {
    if (ds_sellingEvidenceList.getCellData(result.curRow, "slipNo") != null && ds_sellingEvidenceList.getCellData(result.curRow, "slipNo") != "") {
      ds_sellingEvidenceList.removeRow(r2026esult.curRow);
      //ds_commonList.ClearData();
    }
    //필터링
    // gr_commonList.DataID = '';
    // ds_commonList.filter();
    // gr_commonList.DataID = 'ds_commonList';
  } else if (result.flag == "UPDATE") {
    ds_sellingEvidenceList.setCellData(result.curRow, "sellVatNo", result.sellVatNo);
    ds_sellingEvidenceList.setCellData(result.curRow, "slipNo", result.slipNo);
    ds_sellingEvidenceList.setCellData(result.curRow, "dcsnClsNm", result.dcsnClsNm);
    ds_sellingEvidenceList.setCellData(result.curRow, "spplyDt", result.spplyDt);
    ds_sellingEvidenceList.setCellData(result.curRow, "slipDt", result.slipDt);
    ds_sellingEvidenceList.setCellData(result.curRow, "summary", result.summary);
    ds_sellingEvidenceList.setCellData(result.curRow, "goods", result.goods);
    ds_sellingEvidenceList.setCellData(result.curRow, "collMoneyAcctDeptCd", result.collMoneyAcctDeptCd);
    ds_sellingEvidenceList.setCellData(result.curRow, "collMoneyAcctDeptNm", result.collMoneyAcctDeptNm);
    ds_sellingEvidenceList.setRowPosition(result.curRow);
    ds_sellingEvidenceList.setCellData(result.curRow, "choice", "F");
    gr_sellingEvidenceList.setColumnReadOnly('choice', true);
    gr_commonList.setColumnVisible('choice', false);
    //cfDisableBtnOnly([bSave]);
  } else {
    ds_sellingEvidenceList.setCellData(result.curRow, "spplyDt", result.spplyDt);
    ds_sellingEvidenceList.setCellData(result.curRow, "slipDt", result.slipDt);
    ds_sellingEvidenceList.setCellData(result.curRow, "summary", result.summary);
    ds_sellingEvidenceList.setCellData(result.curRow, "goods", result.goods);
    ds_sellingEvidenceList.setCellData(result.curRow, "collMoneyAcctDeptCd", result.collMoneyAcctDeptCd);
    ds_sellingEvidenceList.setCellData(result.curRow, "collMoneyAcctDeptNm", result.collMoneyAcctDeptNm);
  }
};
scwin.gr_sellingEvidenceList_onviewchange = function (info) {
  if (info.colId == "declarExceptYn") {
    if (ds_sellingEvidenceList.getCellData(row, "declarExceptYn") == 1) {
      ds_sellingEvidenceList.setCellData(row, "email", "");
      gr_sellingEvidenceList.setColumnReadOnly('email', true);
    } else {
      gr_sellingEvidenceList.setColumnReadOnly('email', false);
    }
  }
};
scwin.gr_sellingEvidenceList_oneditkeyup = async function (info) {
  if (info.colID == "email") {
    await $c.win.alert($p, "E-mail은 팝업을 통해서만 입력하실 수 있습니다.\n입력을 원하시면 버튼을 클릭하여 주세요.");
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "email", "");
  }
};
scwin.gr_sellingEvidenceList_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_CollMoneyPopup('F');
};
scwin.ds_sellingEvidenceList_onrowpositionchange = function (info) {
  row = info.rowIndex;
  // 세금계산서거 발행되었으면....
  if ((ds_queryCondition.get("qryDtConKnd") == "SPPLY" || ds_queryCondition.get("qryDtConKnd") == "POST") && ds_sellingEvidenceList.getCellData(row, "slipNo") != null && ds_sellingEvidenceList.getCellData(row, "slipNo") != "") {
    var transRow;
    $c.gus.cfCopyDataSetHeader($p, ds_sellingEvidenceList, ds_sellingEvidence);
    ds_sellingEvidence.setJSON(ds_sellingEvidenceList.getRowJSON(row));
    if (ds_sellingEvidenceList.getCellData(row, "fmlaClsCd") == "01") {
      sbm_decisionCertiCommonList.action = "/ds.fs.bilg.bilg.RetrieveDecisionCertiCommonListCMD.do";
      $c.sbm.execute($p, sbm_decisionCertiCommonList);
    } else if (ds_sellingEvidenceList.getCellData(row, "fmlaClsCd") == "03") {
      sbm_decisionBillList.action = "/ds.fs.bilg.bilg.RetrieveDecisionBillListCMD.do";
      $c.sbm.execute($p, sbm_decisionBillList);
    } else {
      return;
    }
    // 미확정 거래명세서....
  } else {
    if (ds_sellingEvidenceList.getCellData(row, "slipNo") != null && ds_sellingEvidenceList.getCellData(row, "slipNo") != "") {
      ds_sellingEvidenceList.setCellData(row, "choice", "F");
      gr_sellingEvidenceList.setColumnReadOnly('choice', true);
      gr_commonList.setColumnVisible('choice', false);
    } else {
      gr_sellingEvidenceList.setColumnReadOnly('choice', false);
      gr_commonList.setColumnVisible('choice', true);
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
    }
  }
};
scwin.rd_certiPatternCd_onchange = function (info) {
  if (rd_certiPatternCd.getValue() == "01") {
    lc_qryDtConKnd.setItem("거래명세서일자", "CERTI", null, 0);
  } else {
    lc_qryDtConKnd.setItem("BILL일자", "BILL", null, 0);
  }
  lc_qryDtConKnd.setSelectedIndex(0);
  if (rd_certiPatternCd.getValue() == "04") {
    gr_sellingEvidenceList.setColumnVisible("imntSupplyAmt", true);
    gr_commonList.setColumnVisible("imntSupplyAmt", true);
    gr_commonList.setColumnVisible("mblNo", true);
  } else {
    gr_sellingEvidenceList.setColumnVisible("imntSupplyAmt", false);
    gr_commonList.setColumnVisible("imntSupplyAmt", false);
    gr_commonList.setColumnVisible("mblNo", false);
  }
};
scwin.gr_commonList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "choice") {
    spplyAmt = 0;
    vatAmt = 0;
    spplyAmtFcrc = 0;
    bilgAmt = 0;
    bilgAmtFcrc = 0;
    fcrcBilgAmt = 0;
    imntSupplyAmt = 0;
    for (var i = 0; i < ds_commonList.getTotalRow(); i++) {
      if (ds_commonList.getCellData(i, "choice") == "T") {
        spplyAmt = spplyAmt + +ds_commonList.getCellData(i, "spplyAmt");
        vatAmt = vatAmt + +ds_commonList.getCellData(i, "vatAmt");
        spplyAmtFcrc = spplyAmtFcrc + +ds_commonList.getCellData(i, "spplyAmtFcrc");
        bilgAmt = bilgAmt + +ds_commonList.getCellData(i, "bilgAmt");
        bilgAmtFcrc = bilgAmtFcrc + +ds_commonList.getCellData(i, "bilgAmtFcrc");
        fcrcBilgAmt = fcrcBilgAmt + +ds_commonList.getCellData(i, "fcrcBilgAmt");
        imntSupplyAmt = imntSupplyAmt + +ds_commonList.getCellData(i, "imntSupplyAmt");
      }
    }
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "spplyAmt", spplyAmt);
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "vatAmt", vatAmt);
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "sumAmt", spplyAmt + vatAmt);
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "spplyAmtFcrc", spplyAmtFcrc);
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "bilgAmtFcrc", bilgAmtFcrc);
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "fcrcBilgAmt", fcrcBilgAmt);
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "bilgAmt", bilgAmt);
    ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "imntSupplyAmt", imntSupplyAmt);
    if (rd_certiPatternCd.getValue() == "04") {
      //청구서유형 국제 물류일때만 계산
      if (imntSupplyAmt > 0) {
        ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "summary", "면세금액 : " + imntSupplyAmt + "원");
      } else {
        ds_sellingEvidenceList.setCellData(ds_sellingEvidenceList.getRowPosition(), "summary", "");
      }
    }
  }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 3);
};
scwin.udc_dept_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_bilgLodeptNm, ed_bilgLodeptCd, 3, false);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 4);
};
scwin.udc_clnt_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_bilgClntNm, ed_bilgClntNo, 4, false);
};
scwin.udc_modId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_myModId.getValue(), txt_empNm.getValue(), 'F', 'F');
};
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'F');
};
scwin.gr_sellingEvidenceList_onbeforecolumnmove = function (info) {
  if (info.startColumnIndex < 5 || info.endColumnIndex < 5) return false;
};
scwin.sbm_saveTaxInvoiceWhole_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code <= 0) {
    for (var i = 0; i < ds_outSellingEvidenceList.getTotalRow(); i++) {
      rData = ds_outSellingEvidenceList.getRowJSON(i);
      row = Number(rData.curRow);
      ds_sellingEvidenceList.setCellData(row, "sellVatNo", rData.sellVatNo);
      ds_sellingEvidenceList.setCellData(row, "slipNo", rData.slipNo);
      ds_sellingEvidenceList.setCellData(row, "dcsnClsNm", rData.dcsnClsNm);
    }
    var errorMsg = e.responseJSON.OUT_DS2[0].msg;
    for (var i = 0; i < ds_sellingEvidenceList.getTotalRow(); i++) {
      scwin.ds_sellingEvidenceList_onrowpositionchange({
        rowIndex: i
      });
    }
    await $c.win.alert($p, errorMsg);
    //$c.gus.cfShowError(sbm_retrieve);

    return;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',id:'udc_dept','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_dept_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구서유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_certiPatternCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_certiPatternCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BILL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'lc_qryDtConKnd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CERTI'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구예정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'INTEND'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SPPLY'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'POST'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_date',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',id:'udc_clnt','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clnt_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_myModId',hideName:'true',nameId:'txt_empNm',popupID:'',style:'',id:'udc_modId','ev:onclickEvent':'scwin.udc_modId_onclickEvent','ev:onblurCodeEvent':'scwin.udc_modId_onblurCodeEvent',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'rd_taxnClsCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'라인',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_lineCd',hideName:'true',nameId:'txt_lineNm',popupID:'',style:'',id:'udc_line','ev:onclickEvent':'scwin.udc_line_onclickEvent','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent',allowCharCode:'a-zA-Z0-9'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_inscrpVsslCd',placeholder:'',style:'width:85px;'}},{T:1,N:'xf:input',A:{class:'',id:'txt_portcnt',placeholder:'',style:'width:85px;'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'생성기준',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_creatClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Certi'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구처별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Clnt'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_sellingEvidenceList',btnUser:'Y',gridDownFn:'scwin.f_downExcelSheet',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_sellingEvidenceList',style:'',id:'gr_sellingEvidenceList',visibleRowNum:'5',class:'wq_gvw',fixedColumn:'5','ev:oncellclick':'scwin.gr_sellingEvidenceList_oncellclick','ev:onviewchange':'scwin.gr_sellingEvidenceList_onviewchange','ev:oneditkeyup':'scwin.gr_sellingEvidenceList_oneditkeyup','ev:ontextimageclick':'scwin.gr_sellingEvidenceList_ontextimageclick',readOnly:'true','ev:onbeforecolumnmove':'scwin.gr_sellingEvidenceList_onbeforecolumnmove'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'건별처리<br/>Popup',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'청구처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'청구처명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'거래명세서번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'사업자번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column3',value:'거래명세서기간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column5',value:'공급금액',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'부가세',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'공급일자',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'전표일자',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column29',value:'수금부서<br/>코드',displayMode:'label',colSpan:'2',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'수금부서명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'적요<br/>(비고)',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'품명',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'E-mail',displayMode:'label',rowSpan:'2',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'신고제외',displayMode:'label',rowSpan:'2',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'세금계산서<br/>번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'전표번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'전표확정<br/>여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'면세운임',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'외화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'button',displayMode:'label',class:'underline',style:'color : blue;'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'certiNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crn',displayMode:'label',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'confirmDt',displayMode:'label',customFormatter:'scwin.setDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmtFcrc',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.#0',excelCellType:'bigDecimal',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'spplyDt',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'slipDt',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyAcctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'25',inputType:'textImage',id:'column65',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyAcctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'summary',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'goods',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'email',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'declarExceptYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'imntSupplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_commonList',btnUser:'Y',gridDownFn:'scwin.f_downExcelSheet',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_commonList',id:'gr_commonList',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_commonList_oncellclick',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래명세서번호<br/>(BILL-NO)',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래명세서일자',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'대표<br/>매출항목명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'House B/L',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'적요<br/>(TITLE)',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'모선/항차',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'입출항일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'환종',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'환율',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column31',value:'공급금액',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'면세운임',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'Master B/L',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'외화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confirmDt',inputType:'text',width:'120',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCdFrom',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arDepPortDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptExchRt',inputType:'text',width:'70',dataType:'number',displayFormat:'#,##0.0000',excelCellType:'bigDecimal',excelFormat:'#,##0.0000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmtFcrc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',excelCellType:'bigDecimal',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'imntSupplyAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mblNo',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회계마감월',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ed_slipCloseYm',class:'',calendarValueType:'yearMonth'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'세무마감월',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ed_taxCloseYm',class:'',calendarValueType:'yearMonth'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',hideName:'Y',nameId:'',popupID:'',style:'display:none;',id:'udc_email'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',hideName:'Y',id:'udc_money',nameId:'',popupID:'',style:'display:none;'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_email',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_email_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'E-mail등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄저장'}]}]}]}]}]}]}]}]}]})