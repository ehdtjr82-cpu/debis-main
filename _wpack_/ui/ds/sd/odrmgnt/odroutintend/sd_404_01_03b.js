/*amd /ui/ds/sd/odrmgnt/odroutintend/sd_404_01_03b.xml 203989 48d420584c55f7a413138439ce5d1f015c9b82fbe4282e3bce3289c0f448ed0b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgClsCd',name:'선청구구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgMgntNo',name:'담보번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipPldgNo',name:'세금계산서담보번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAdjmPatternCd',name:'출고정산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAdjmStsCd',name:'출고정산상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'청구구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'청구유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendDt',name:'출고기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inIntendDt',name:'입고예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgClntNo',name:'담보거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgClntNm',name:'담보거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO/BT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whouseClsNm',name:'창고명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'의뢰거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'적용환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saveGubun',name:'저장구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fireInsYn',name:'화재보험여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtl',name:'도착상세',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results2',saveRemovedData:'true','ev:ondataload':'scwin.ds_results2_ondataload','ev:oncelldatachange':'scwin.ds_results2_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO/BT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'오더수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWt',name:'오더중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCbm',name:'오더CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendDt',name:'출고기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt1',name:'관세가1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outLimit',name:'출고기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjQty',name:'정산수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjWt',name:'정산중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjCbm',name:'정산CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjAmt',name:'보관료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransExpireDt',name:'보운',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'배정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitNo',name:'면장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDropDt',name:'면허일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnPrcSum',name:'감정가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjAmt2',name:'보관료2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results3',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_results3_oncelldatachange','ev:onrowpositionchange':'scwin.ds_results3_onrowpositionchange','ev:ondataload':'scwin.ds_results3_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'실적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출물량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'공급가액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sumSellAmt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'중기종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'중기종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'중기규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'중기규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'freeday',name:'면제일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'basisDdCnt',name:'기본일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stdDay',name:'적용일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'shpCoDdCnt',name:'선사일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rofDdCnt',name:'귀책일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'valmTrf',name:'종가요율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'meraTrf',name:'종량요율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'보관차수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendSeq',name:'출고예정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgUnitCd',name:'청구단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volAmtDivsClsCd',name:'분할구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volAmtDivsClsNm',name:'분할구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL-NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtSellSeq',name:'청구대상매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtOdrNo',name:'청구대상오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addRowYn',name:'행추가여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgCreatYn',name:'선청구생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'의뢰거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowColor',name:'행색상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateYn',name:'보관요율여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outPsblYn',name:'출고가능여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveBulkSellingItemCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'청구구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'청구유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outAdjmPatternCd',name:'출고정산유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inIntendDt',name:'입고예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendDt',name:'출고예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jdgAmt',name:'감정가',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cstmdtAmt',name:'관세가',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrCommCd',name:'컨테이너품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsBulkSellingItem',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateYn',name:'보관요율여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outPsblYn',name:'출고가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'청구구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'청구유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAdjmPatternCd',name:'출고정산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inIntendDt',name:'입고예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendDt',name:'출고예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCommCd',name:'컨테이너품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgYn',name:'실적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출물량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSellAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRtDt',name:'환율일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'중기종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'중기규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrowDdCnt',name:'경과일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeday',name:'면제일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'basisDdCnt',name:'기본일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDay',name:'적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoDdCnt',name:'선사일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rofDdCnt',name:'귀책일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'valmTrf',name:'종가요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'meraTrf',name:'종량요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strDeg',name:'보관차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendSeq',name:'출고예정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgUnitCd',name:'청구단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volAmtDivsClsCd',name:'분할구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'volAmtDivsClsNm',name:'분할구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL-NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtSellSeq',name:'청구대상매출순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgTrgtOdrNo',name:'청구대상오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addRowYn',name:'행추가여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prebilgCreatYn',name:'선청구생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'의뢰거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitClsCd',name:'단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowColor',name:'행색상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellItem'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BulkOutHistoryList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioDt',name:'출고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'보관료',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bulkOutHistoryCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'commSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'blNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'의뢰거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착지역코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellUnitCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveSellitem'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매출항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'jdgAmt',name:'감정가액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoDngrClsCd',name:'화물위험구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_returnSellitem'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndCtrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_orderselling_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd2',name:'조회조건종류2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'조회조건종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConCd',name:'조회조건코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'청구유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comCode',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'key3',name:'시스템구분'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key4',name:'SQL ID'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key5',name:'파라메터1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key6',name:'파라메터2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key7',name:'파라메터3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key8',name:'파라메터4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key9',name:'파라메터5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key10',name:'파라메터6'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key11',name:'파라메터7'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key12',name:'파라메터8'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key13',name:'파라메터9'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key14',name:'파라메터10'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key15',name:'파라메터11'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key16',name:'파라메터12'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key17',name:'파라메터13'}},{T:1,N:'w2:key',A:{dataType:'text',id:'key18',name:'파라메터14'}}]}]},{T:1,N:'w2:dataList',A:{'ev:ondataload':'scwin.ds_hmhno_ondataload',id:'ds_commCode',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'string',id:'code',name:'Mhno code'}},{T:1,N:'w2:column',A:{dataType:'string',id:'name'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RetrieveComboCMD'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_comCode',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_comCode","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sd.odrmgnt.odroutintend.RetrieveBulkOutIntendCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results1","key":"OUT_DS1"},{"id":"ds_results2","key":"OUT_DS2"},{"id":"ds_results3","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_results1","key":"OUT_DS1"},{"id":"ds_results2","key":"OUT_DS2"},{"id":"ds_results3","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBulkOutHistory',action:'/ds.sd.odrmgnt.odroutintend.RetrieveBulkOutHistoryCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_bulkOutHistoryCond","key":"IN_DS1"},{"id":"ds_BulkOutHistoryList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_BulkOutHistoryList","key":"OUT_DS1"}]','ev:submiterror':'','ev:submitdone':'scwin.sbm_retrieveBulkOutHistory_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odroutintend.RegistBulkOutInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_results1","key":"IN_DS1"},{"id":"ds_results2","key":"IN_DS2"},{"id":"ds_results3","key":"IN_DS3"},{"id":"ds_results1","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results1","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.sd.odrmgnt.odroutintend.DeleteBulkOutInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_results1","key":"IN_DS1"},{"id":"ds_results2","key":"IN_DS2"},{"id":"ds_results3","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBulkSellingItem',action:'/ds.sd.odrmgnt.odroutintend.RetrieveBulkSellingItemCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieveBulkSellingItemCond","key":"IN_DS1"},{"id":"ds_results2","key":"IN_DS2"},{"id":"ds_resultsBulkSellingItem","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultsBulkSellingItem","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveBulkSellingItem_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSellItem',action:'/ds.sd.odrmgnt.odroutintend.CancelContainerSellingItemCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_results3","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_cancelSellItem_submitdone','ev:submiterror':'scwin.sbm_cancelSellItem_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_odrSearch',action:'/ds.sd.odrmgnt.odroutintend.RetrieveOtherOrderInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_odrSearch_submitdone','ev:submiterror':'scwin.sbm_odrSearch_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSellitem',action:'/ds.op.wrkrslts.cfsimprslts.RetrieveCfsWorkSellingCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieveSellitem","key":"IN_DS1"},{"id":"ds_returnSellitem","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_returnSellitem","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveSellitem_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBilgClntNoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndCtrtNo","key":"IN_DS1"},{"id":"ds_ctrtNo2","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrtNo2","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCtrtNo2_submitdone','ev:submiterror':'scwin.sbm_retrieveCtrtNo2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveComboCMD',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_RetrieveComboCMD',target:'data:json,{"id":"ds_sellItem","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveSellUnitCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_RetrieveComboCMD',target:'data:json,{"id":"ds_sellUnitCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveSellUnitCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sCurrDate = "";
scwin.odrNo = "";
scwin.outIntendNo = "";
scwin.gOutIntendDt = "";
scwin.fmlaClsCd = "";
scwin.fmlaPatternCd = "";
scwin.sellItemGubun = "";
scwin.cmd = "";
scwin.outPsblYn = "";
scwin.sellVol = 0;
scwin.sellUpr = 0;
scwin.sellAmt = 0;
scwin.fitRow = 0;
scwin.keepOdrRow = 0;
scwin.prevRow = 0;
scwin.ed_odrDcsnYn = "";
scwin.onpageload = async function () {
  scwin.sinit();
  scwin.sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.params = $c.data.getParameter($p);
  scwin.odrNo = scwin.params && scwin.params.odrNo ? scwin.params.odrNo : "";
  scwin.outIntendNo = scwin.params && scwin.params.outIntendNo ? se_201_01_04bscwin.params.outIntendNo : "";
  rd_prebilgClsCd.setValue("02");
  ica_rsltsStdDt.setValue(scwin.sCurrDate);
  $c.gus.cfDisableObjects($p, [ica_outIntendDt]);
  $c.gus.cfDisableBtnOnly($p, [btn_VolDivision, btn_AmtDivision, btn_RetrieveBulkSellingItem, btn_CancelBulkSellingItem, btn_BalUnpaid, btn_Save, btn_Delete, udc_btnGrp, btn_outIndication, btn_taxEstimat]);
  if (scwin.odrNo != "") {
    ed_outIntendNo.setValue(scwin.outIntendNo);
    ed_odrNo.setValue(scwin.odrNo);
    scwin.f_Retrieve("Conn");
  }
  chb_previewCheck.setValue("Y");
};
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "LO130",
    compID: "lc_dangeCls"
  }, {
    grpCd: "ZZ006",
    compID: "gr_results3:crcCd"
  }, {
    grpCd: "CO028",
    compID: "gr_results3:dcScCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  rd_prebilgClsCd.setValue("02");
  ica_rsltsStdDt.setValue(scwin.sCurrDate);
};
scwin.f_Retrieve = async function (selFg) {
  if (selFg == "Conn") {
    dma_search.set("odrNo", ed_odrNo.getValue());
    dma_search.set("outIntendNo", ed_outIntendNo.getValue());
  } else if (selFg == "Enter") {
    dma_search.set("odrNo", ed_odrNo.getValue());
    dma_search.set("outIntendNo", "");
  } else if (selFg == "Button") {
    let chk = await $c.gus.cfValidate($p, [ed_outIntendNo]);
    if (!chk) {
      return;
    }
    dma_search.set("odrNo", "");
    dma_search.set("outIntendNo", ed_outIntendNo.getValue());
  }
  ds_results1.removeAll();
  ds_results2.removeAll();
  ds_results3.removeAll();
  $c.gus.cfDisableBtnOnly($p, [btn_VolDivision, btn_AmtDivision, btn_RetrieveBulkSellingItem, btn_CancelBulkSellingItem, btn_Save, btn_Delete, btn_outIndication, btn_taxEstimat, udc_btnGrp]);
  await $c.sbm.execute($p, sbm_search);
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, [ed_outIntendNo]);
  ed_outIntendNo.focus();
};
scwin.f_Save = async function () {
  let chk1 = await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ica_rsltsStdDt]);
  if (!chk1) return;
  let chk2 = await $c.gus.cfValidate($p, [gr_results2], null, true);
  if (!chk2) return;
  let chk3 = await $c.gus.cfValidate($p, [gr_results3], null, true);
  $c.gus.cfVal;
  if (!chk3) return;
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    let check = ds_results3.getCellData(i, "choice");
    if (check == "T") {
      if (ds_results3.getCellData(i, "sellItemCd") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째줄의 매출항목을 입력하십시오.");
        ds_results3.setRowPosition(i);
        gr_results3.setFocusedCell(i, "sellItemCd", true);
        return;
      }
      if (ds_results3.getCellData(i, "sellVol") == 0) {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째줄의 매출물량을 입력하십시오.");
        ds_results3.setRowPosition(i);
        gr_results3.setFocusedCell(i, "sellVol", true);
        return;
      }
      if (ds_results3.getCellData(i, "sellUpr") == 0) {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째줄의 단가를 입력하십시오.");
        ds_results3.setRowPosition(i);
        gr_results3.setFocusedCell(i, "sellUpr", true);
        return;
      }
      if (ds_results3.getCellData(i, "sellAmt") == 0) {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째줄의 공급가액을 입력하십시오.");
        ds_results3.setRowPosition(i);
        gr_results3.setFocusedCell(i, "sellAmt", true);
        return;
      }
    }
  }
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "volAmtDivsClsCd") != "N" && ds_results3.getCellData(i, "volAmtDivsClsCd") != "A" && ds_results3.getCellData(i, "volAmtDivsClsCd") != "V") {
      ds_results3.setCellData(i, "volAmtDivsClsCd", "N");
    }
    ds_results3.setCellData(i, "dcScCd", ds_results3.getCellData(i, "dcScCd").trim());
    if (ds_results3.getCellData(i, "choice") == "T") {
      ds_results3.setCellData(i, "bilgClntNo", ed_bilgClntNo.getValue());
      ds_results3.setCellData(i, "bilgLodeptCd", ed_bilgLodeptCd.getValue());
    }
  }
  if (rd_prebilgClsCd.getValue() == "01") {
    let v_fmlaClsCd = acb_fmlaPatternCd.getValue().substring(0, 2);
    let v_fmlaPatternCd = acb_fmlaPatternCd.getValue().substring(2, 4);
    ds_results1.setCellData(0, "fmlaClsCd", v_fmlaClsCd);
    ds_results1.setCellData(0, "fmlaPatternCd", v_fmlaPatternCd);
  } else {
    ds_results1.setCellData(0, "fmlaPatternCd", scwin.fmlaPatternCd);
  }
  let maxAdptExchRt = 0;
  let maxAdptExchRtDt = "";
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    let rt = Number(ds_results3.getCellData(i, "adptExchRt"));
    if (rt > maxAdptExchRt) {
      maxAdptExchRt = rt;
      maxAdptExchRtDt = ds_results3.getCellData(i, "adptExchRtDt");
    }
  }
  if (Number(ds_results1.getCellData(0, "adptExchRt")) <= 0) {
    ds_results1.setCellData(0, "adptExchRt", maxAdptExchRt);
    ds_results1.setCellData(0, "adptExchRtDt", maxAdptExchRtDt);
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    let outAdjmVal = acb_outAdjmPatternCd.getValue();
    if (outAdjmVal == "02" || outAdjmVal == "03" || outAdjmVal == "04" || outAdjmVal == "05" || outAdjmVal == "01" && (scwin.fmlaPatternCd == "21" || scwin.fmlaPatternCd == "22" && ds_results2.getCellData(0, "dsmbrkFrgtCd").substring(0, 1) == "I" && ds_results1.getCellData(0, "arvWrkPlCd") != "6E26" && ds_results1.getCellData(0, "arvWrkPlCd") != "6E37")) {
      ds_results1.setCellData(0, "saveGubun", "Y");
    } else {
      ds_results1.setCellData(0, "saveGubun", "N");
    }
    if (ds_results1.getCellData(0, "odrNo").substring(1, 3) == "CK") {
      for (let j = 0; j < ds_results3.getRowCount(); j++) {
        if (ds_results3.getCellData(j, "sellItemCd") == "0050" && ds_results3.getCellData(j, "choice") == "T") {
          ds_results1.setCellData(0, "saveGubun", "Y");
        }
      }
    }
    scwin.cmd = "S";
    scwin.prevRow = ds_results3.getRowPosition();
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_ChkOutPsbl = function () {
  if (ds_results2.getCellData(0, "dsmbrkFrgtCd") != null) {
    let outAdjmVal = acb_outAdjmPatternCd.getValue();
    if (outAdjmVal == "02" || outAdjmVal == "03" || outAdjmVal == "04" || outAdjmVal == "05" || outAdjmVal == "01" && (scwin.fmlaPatternCd == "21" || scwin.fmlaPatternCd == "22" && ds_results2.getCellData(0, "dsmbrkFrgtCd").substring(0, 1) == "I" && ds_results1.getCellData(0, "arvWrkPlCd") != "6E26" && ds_results1.getCellData(0, "arvWrkPlCd") != "6E37")) {
      scwin.outPsblYn = "  (출고가능)";
    } else {
      scwin.outPsblYn = "  (출고불가)";
    }
    if (ds_results1.getCellData(0, "odrNo").substring(1, 3) == "CK") {
      for (let j = 0; j < ds_results3.getRowCount(); j++) {
        if (ds_results3.getCellData(j, "sellItemCd") == "0050" && ds_results3.getCellData(j, "choice") == "T") {
          scwin.outPsblYn = "  (출고가능)";
        }
      }
    }
    scwin.f_setOutPsblYn();
  }
};
scwin.f_setOutPsblYn = function () {
  //txt_outAdjmStsNm.setValue(txt_outAdjmStsNm.getValue());
  txt_outPsblYn.setValue(scwin.outPsblYn);
  // TODO: div_outPsblYn innerHTML replacement - use textbox setValue if mapped
};
scwin.f_AddRow = async function () {
  let row = ds_results2.getRowPosition();
  if (ds_results3.getRowCount() < 1) {
    ds_results3.insertRow(ds_results3.getRowCount());
    let newRow = ds_results3.getRowCount() - 1;
    ds_results3.setCellData(newRow, "sellCommNo", ds_results2.getCellData(row, "commCd"));
    ds_results3.setCellData(newRow, "commSeq", ds_results2.getCellData(row, "commSeq"));
    ds_results3.setCellData(newRow, "commNm", ds_results2.getCellData(row, "commNm"));
    ds_results3.setCellData(newRow, "odrNo", ds_results2.getCellData(row, "odrNo"));
    ds_results3.setCellData(newRow, "outIntendNo", ds_results1.getCellData(0, "outIntendNo"));
    ds_results3.setCellData(newRow, "prebilgYn", 1);
    ds_results3.setCellData(newRow, "prebilgCreatYn", 1);
    ds_results3.setCellData(newRow, "sellSeq", 0);
    ds_results3.setCellData(newRow, "dcsnClsCd", 1);
    ds_results3.setCellData(newRow, "dcsnClsNm", "미확인");
    ds_results3.setCellData(newRow, "choice", "T");
    ds_results3.setCellData(newRow, "volAmtDivsClsCd", "R");
    ds_results3.setCellData(newRow, "bilgTrgtSellSeq", "");
    ds_results3.setCellData(newRow, "bilgTrgtOdrNo", "");
    ds_results3.setCellData(newRow, "sellUnitCd", "RNT");
    ds_results3.setCellData(newRow, "mrn", ds_results1.getCellData(0, "mrn"));
    ds_results3.setCellData(newRow, "msn", ds_results1.getCellData(0, "msn"));
    ds_results3.setCellData(newRow, "hsn", ds_results1.getCellData(0, "hsn"));
    ds_results3.setCellData(newRow, "bilgLodeptCd", ds_results1.getCellData(0, "bilgLodeptCd"));
    ds_results3.setCellData(newRow, "sellLodeptCd", ds_results1.getCellData(0, "sellLodeptCd"));
    ds_results3.setCellData(newRow, "lineCd", ds_results1.getCellData(0, "lineCd"));
    ds_results3.setCellData(newRow, "wrkStDt", ds_results1.getCellData(0, "odrDt"));
    ds_results3.setCellData(newRow, "bilgClntNo", ds_results1.getCellData(0, "bilgClntNo"));
    ds_results3.setCellData(newRow, "ctrtClntNo", ds_results1.getCellData(0, "ctrtClntNo"));
    ds_results3.setCellData(newRow, "reqClntNo", ds_results1.getCellData(0, "reqClntNo"));
    ds_results3.setCellData(newRow, "taxnClsCd", ds_results1.getCellData(0, "taxnClsCd"));
    ds_results3.setCellData(newRow, "odrDt", ds_results1.getCellData(0, "odrDt"));
    ds_results3.setCellData(newRow, "vsslCd", ds_results1.getCellData(0, "vsslCd"));
    ds_results3.setCellData(newRow, "portcnt", ds_results1.getCellData(0, "portcnt"));
    ds_results3.setCellData(newRow, "dptDistrictCd", ds_results1.getCellData(0, "dptDistrictCd"));
    ds_results3.setCellData(newRow, "arvDistrictCd", ds_results1.getCellData(0, "arvDistrictCd"));
    ds_results3.setCellData(newRow, "impExpDomesticClsCd", ds_results1.getCellData(0, "impExpDomesticClsCd"));
    ds_results3.setCellData(newRow, "ctrtNo", ds_results1.getCellData(0, "ctrtNo"));
    ds_results3.setCellData(newRow, "ctrtWrkPathSeq", ds_results1.getCellData(0, "ctrtWrkPathSeq"));
    ds_results3.setCellData(newRow, "addRowYn", "Y");
  } else {
    let curPos = ds_results3.getRowPosition() == null ? 0 : ds_results3.getRowPosition();
    ds_results3.insertRow(curPos + 1);
    for (let ci = 0; ci < ds_results3.getColumnCount(); ci++) {
      ds_results3.setCellData(curPos + 1, ds_results3.getColumnID(ci), ds_results3.getCellData(curPos, ds_results3.getColumnID(ci)));
    }
    let newPos = curPos + 1;
    gr_results3.setFocusedCell(newPos, 0);
    ds_results3.setCellData(newPos, "sellSeq", 0);
    ds_results3.setCellData(newPos, "dcsnClsCd", 1);
    ds_results3.setCellData(newPos, "dcsnClsNm", "미확인");
    ds_results3.setCellData(newPos, "choice", "T");
    ds_results3.setCellData(newPos, "outIntendNo", "");
    ds_results3.setCellData(newPos, "volAmtDivsClsCd", "R");
    ds_results3.setCellData(newPos, "bilgTrgtSellSeq", "");
    ds_results3.setCellData(newPos, "bilgTrgtOdrNo", "");
    ds_results3.setCellData(newPos, "sellAmt", 0);
    ds_results3.setCellData(newPos, "vatAmt", 0);
    ds_results3.setCellData(newPos, "sumSellAmt", 0);
    ds_results3.setCellData(newPos, "addRowYn", "Y");
    ds_results3.setCellData(newPos, "prebilgYn", 1);
    ds_results3.setCellData(newPos, "prebilgCreatYn", 1);
    ds_results3.setCellData(newPos, "odrNo", ds_results1.getCellData(0, "odrNo"));
    for (let i = 0; i < ds_results3.getRowCount(); i++) {
      if (ds_results3.getCellData(newPos, "sellItemCd") == "0010" && ds_results3.getCellData(i, "sellItemCd") == "0010") {
        ds_results3.setCellData(newPos, "odrNo", ds_results3.getCellData(i, "odrNo"));
        break;
      }
      if (ds_results3.getCellData(newPos, "sellItemCd") == "0042" && ds_results3.getCellData(i, "sellItemCd") == "0042") {
        ds_results3.setCellData(newPos, "odrNo", ds_results3.getCellData(i, "odrNo"));
        break;
      }
    }
  }
};
scwin.f_DeleteRow = async function () {
  if (ds_results3.getRowCount() > 0) {
    let curPos = ds_results3.getRowPosition();
    if (curPos == null) return;
    if (ds_results3.getCellData(curPos, "dcsnClsCd") != "1") {
      await $c.gus.cfAlertMsg($p, "확정인 경우 삭제할수 없습니다.");
      return;
    }
    if (ds_results3.getCellData(curPos, "odrNo") != ds_results1.getCellData(0, "odrNo")) {
      await $c.gus.cfAlertMsg($p, "오더번호가 다를 경우 삭제할수 없습니다.");
      return;
    }
    if (ds_results3.getCellData(curPos, "prebilgYn") != 1) {
      await $c.gus.cfAlertMsg($p, "실적매출은 삭제할수 없습니다.");
      return;
    }
    if (ds_results3.getCellData(curPos, "volAmtDivsClsCd") == "A") {
      if (ds_results3.getCellData(curPos, "bilgTrgtOdrNo") == "") {
        let isHaveChild = false;
        for (let i = 0; i < ds_results3.getRowCount(); i++) {
          if (ds_results3.getCellData(curPos, "volAmtDivsClsCd") == ds_results3.getCellData(i, "volAmtDivsClsCd") && ds_results3.getCellData(curPos, "odrNo") == ds_results3.getCellData(i, "bilgTrgtOdrNo") && ds_results3.getCellData(curPos, "sellSeq") == ds_results3.getCellData(i, "bilgTrgtSellSeq") && ds_results3.getRowStatus(i) != "D") {
            isHaveChild = true;
            break;
          }
        }
        if (isHaveChild) {
          await $c.gus.cfAlertMsg($p, "분할된 금액이 존재할 경우 삭제할수 없습니다.");
          return;
        }
      } else {
        ds_results3.setCellData(scwin.fitRow, "sellUpr", Number(ds_results3.getCellData(scwin.fitRow, "sellUpr")) + Number(ds_results3.getCellData(curPos, "sellUpr")));
        ds_results3.setCellData(scwin.fitRow, "sellAmt", Number(ds_results3.getCellData(scwin.fitRow, "sellAmt")) + Number(ds_results3.getCellData(curPos, "sellAmt")));
        ds_results3.setCellData(scwin.fitRow, "vatAmt", Number(ds_results3.getCellData(scwin.fitRow, "vatAmt")) + Number(ds_results3.getCellData(curPos, "vatAmt")));
        ds_results3.setCellData(scwin.fitRow, "sumSellAmt", Number(ds_results3.getCellData(scwin.fitRow, "sumSellAmt")) + Number(ds_results3.getCellData(curPos, "sumSellAmt")));
      }
    } else if (ds_results3.getCellData(curPos, "volAmtDivsClsCd") == "V") {
      if (ds_results3.getCellData(curPos, "bilgTrgtOdrNo") == "") {
        let isHaveChild = false;
        for (let i = 0; i < ds_results3.getRowCount(); i++) {
          if (ds_results3.getCellData(curPos, "volAmtDivsClsCd") == ds_results3.getCellData(i, "volAmtDivsClsCd") && ds_results3.getCellData(curPos, "odrNo") == ds_results3.getCellData(i, "bilgTrgtOdrNo") && ds_results3.getCellData(curPos, "sellSeq") == ds_results3.getCellData(i, "bilgTrgtSellSeq") && ds_results3.getRowStatus(i) != "D") {
            isHaveChild = true;
            break;
          }
        }
        if (isHaveChild) {
          await $c.gus.cfAlertMsg($p, "분할된 금액이 존재할 경우 삭제할수 없습니다.");
          return;
        }
      } else {
        ds_results3.setCellData(scwin.fitRow, "sellVol", Number(ds_results3.getCellData(scwin.fitRow, "sellVol")) + Number(ds_results3.getCellData(curPos, "sellVol")));
        ds_results3.setCellData(scwin.fitRow, "sellAmt", Number(ds_results3.getCellData(scwin.fitRow, "sellAmt")) + Number(ds_results3.getCellData(curPos, "sellAmt")));
        ds_results3.setCellData(scwin.fitRow, "vatAmt", Number(ds_results3.getCellData(scwin.fitRow, "vatAmt")) + Number(ds_results3.getCellData(curPos, "vatAmt")));
        ds_results3.setCellData(scwin.fitRow, "sumSellAmt", Number(ds_results3.getCellData(scwin.fitRow, "sumSellAmt")) + Number(ds_results3.getCellData(curPos, "sumSellAmt")));
        ds_results3.setCellData(scwin.fitRow, "qty", Number(ds_results3.getCellData(scwin.fitRow, "qty")) + Number(ds_results3.getCellData(curPos, "qty")));
        ds_results3.setCellData(scwin.fitRow, "wt", Number(ds_results3.getCellData(scwin.fitRow, "wt")) + Number(ds_results3.getCellData(curPos, "wt")));
        ds_results3.setCellData(scwin.fitRow, "cbm", Number(ds_results3.getCellData(scwin.fitRow, "cbm")) + Number(ds_results3.getCellData(curPos, "cbm")));
      }
    }
    if (ds_results3.getRowStatus(curPos) == "C") {
      ds_results3.removeRow(curPos);
    } else {
      ds_results3.deleteRow(curPos);
    }
  }
};
scwin.f_retrieveBulkSellingItem = async function (row, sellVolParam) {
  let localSellVol = scwin.f_Round(sellVolParam, 0, 'F');
  let chk1 = await $c.gus.cfValidate($p, [acb_outAdjmPatternCd]);
  if (!chk1) return;
  let chk2 = await $c.gus.cfValidate($p, [ica_outIntendDt]);
  if (!chk2) return;

  //매출항목리스트조회	
  if (rd_prebilgClsCd.getValue() == "01") {
    scwin.fmlaClsCd = acb_fmlaPatternCd.getValue().substring(0, 2);
    scwin.fmlaPatternCd = acb_fmlaPatternCd.getValue().substring(2, 4);
  } else {
    scwin.fmlaClsCd = ds_results1.getCellData(0, "fmlaClsCd");
  }
  await scwin.f_RetrieveSellItem(ds_results1.getCellData(0, "bilgLodeptCd"), scwin.fmlaClsCd, scwin.fmlaPatternCd);
  for (let k = 0; k < ds_results2.getRowCount(); k++) {
    if (row == 0) {
      let outAdjmVal = acb_outAdjmPatternCd.getValue();
      if ((outAdjmVal == "02" || outAdjmVal == "03" || outAdjmVal == "04") && scwin.fmlaPatternCd == "22" && (ds_results1.getCellData(0, "arvWrkPlCd") != "6E26" || ds_results1.getCellData(0, "arvWrkPlCd") != "6E37")) {
        if (ds_results1.getCellData(0, "inIntendDt") != "") {
          let diffDay = $c.date.diffDate($p, ds_results1.getCellData(0, "inIntendDt"), ica_inIntendDt.getValue());
          if (diffDay > 10) {
            if (Number(ds_results2.getCellData(k, "jdgAmt")) < 1) {
              await $c.gus.cfAlertMsg($p, "감정가는 필수 입력 항목입니다.");
              return;
            }
          }
        }
      }
    }
    dma_retrieveBulkSellingItemCond.set("outIntendNo", ds_results1.getCellData(0, "outIntendNo"));
    dma_retrieveBulkSellingItemCond.set("odrNo", ed_odrNo.getValue());
    dma_retrieveBulkSellingItemCond.set("commSeq", ds_results2.getCellData(k, "commSeq"));
    dma_retrieveBulkSellingItemCond.set("bilgLodeptCd", ds_results1.getCellData(0, "bilgLodeptCd"));
    dma_retrieveBulkSellingItemCond.set("outAdjmPatternCd", acb_outAdjmPatternCd.getValue());
    dma_retrieveBulkSellingItemCond.set("outIntendDt", ds_results2.getCellData(k, "outIntendDt"));
    dma_retrieveBulkSellingItemCond.set("inIntendDt", ica_inIntendDt.getValue());
    dma_retrieveBulkSellingItemCond.set("cntrCommCd", "");
    dma_retrieveBulkSellingItemCond.set("fmlaClsCd", "01");
    dma_retrieveBulkSellingItemCond.set("fmlaPatternCd", scwin.fmlaPatternCd);
    if (row > 0) {
      let curPos = ds_results3.getRowPosition();
      dma_retrieveBulkSellingItemCond.set("sellItemCd", ds_results3.getCellData(curPos, "sellItemCd"));
      dma_retrieveBulkSellingItemCond.set("eqKndCd", ds_results3.getCellData(curPos, "eqKndCd"));
      dma_retrieveBulkSellingItemCond.set("eqNrmCd", ds_results3.getCellData(curPos, "eqNrmCd"));
      if (localSellVol == undefined || localSellVol == 0) {
        dma_retrieveBulkSellingItemCond.set("qty", ds_results3.getCellData(curPos, "qty"));
      } else {
        dma_retrieveBulkSellingItemCond.set("qty", localSellVol);
      }
      dma_retrieveBulkSellingItemCond.set("wt", ds_results3.getCellData(curPos, "wt"));
      dma_retrieveBulkSellingItemCond.set("cbm", ds_results3.getCellData(curPos, "cbm"));
      dma_retrieveBulkSellingItemCond.set("jdgAmt", ds_results3.getCellData(curPos, "jdgAmt"));
      dma_retrieveBulkSellingItemCond.set("cstmdtAmt", ds_results3.getCellData(curPos, "cstmdtAmt"));
    } else {
      dma_retrieveBulkSellingItemCond.set("sellItemCd", "");
      dma_retrieveBulkSellingItemCond.set("eqKndCd", "");
      dma_retrieveBulkSellingItemCond.set("eqNrmCd", "");
      dma_retrieveBulkSellingItemCond.set("qty", ds_results2.getCellData(k, "qty"));
      dma_retrieveBulkSellingItemCond.set("wt", ds_results2.getCellData(k, "wt"));
      dma_retrieveBulkSellingItemCond.set("cbm", ds_results2.getCellData(k, "cbm"));
      dma_retrieveBulkSellingItemCond.set("jdgAmt", ds_results2.getCellData(k, "jdgAmt"));
      dma_retrieveBulkSellingItemCond.set("cstmdtAmt", ds_results2.getCellData(k, "cstmdtAmt"));
      scwin.sellItemGubun = "ALL";
    }

    //일단 에러가 발생하니 막음.
    await $c.sbm.execute($p, sbm_retrieveBulkSellingItem);
  }
};

//매출항목조회취소
scwin.f_CancelSellItem = async function () {
  let cnt = ds_results3.getRowCount();
  for (let i = cnt - 1; i >= 0; i--) {
    if (ds_results3.getCellData(i, "sellSeq") == 0) {
      ds_results3.removeRow(i);
    }
  }
  $c.gus.cfEnableObjects($p, [acb_outAdjmPatternCd]);
  scwin.f_ChkOutPsbl();
  if (ds_results1.getCellData(0, "outIntendNo").length > 0) {
    for (let j = 0; j < ds_results3.getRowCount(); j++) {
      if (ds_results3.getCellData(j, "outIntendNo") == ds_results1.getCellData(0, "outIntendNo")) {
        ds_results3.modifyRowStatus(j, "U");
      }
    }
    await $c.sbm.execute($p, sbm_cancelSellItem);
  }
};
scwin.f_addDataSet = function (sellItemGubunParam) {
  let rowCnt = ds_results3.getRowCount();
  if (ds_resultsBulkSellingItem.getRowCount() > 0) {
    let app_mod = '';
    let maxDate = ica_inIntendDt.getValue();
    let commCd = ds_results2.getCellData(ds_results2.getRowPosition(), "commCd");
    for (let app_idx = 0; app_idx < ds_resultsBulkSellingItem.getRowCount(); app_idx++) {
      app_mod = '';
      for (let org_idx = 0; org_idx < rowCnt; org_idx++) {
        if (Number(ds_resultsBulkSellingItem.getCellData(app_idx, "strRateYn")) == 0) {
          if (ds_results3.getCellData(org_idx, "sellItemCd") == ds_resultsBulkSellingItem.getCellData(app_idx, "sellItemCd") && ds_results3.getCellData(org_idx, "commSeq") == ds_resultsBulkSellingItem.getCellData(app_idx, "commSeq") && ds_results3.getCellData(org_idx, "dcScCd") == ds_resultsBulkSellingItem.getCellData(app_idx, "dcScCd")) {
            if (sellItemGubunParam != "ALL") {
              if (Number(ds_resultsBulkSellingItem.getCellData(app_idx, "wrkEndDt")) > Number(maxDate)) {
                maxDate = ds_resultsBulkSellingItem.getCellData(app_idx, "wrkEndDt");
              }
              let curPos = ds_results3.getRowPosition();
              for (let j = 0; j < ds_results3.getColumnCount(); j++) {
                ds_results3.setCellData(curPos, ds_results3.getColumnID(j), ds_resultsBulkSellingItem.getCellData(app_idx, ds_results3.getColumnID(j)));
              }
              ds_results3.setCellData(curPos, "commCd", ds_results2.getCellData(ds_results2.getRowPosition(), "commCd"));
            }
            app_mod = '수정';
            break;
          }
        } else if (Number(ds_resultsBulkSellingItem.getCellData(app_idx, "strRateYn")) == 1) {
          if (ds_results3.getCellData(org_idx, "sellItemCd") == ds_resultsBulkSellingItem.getCellData(app_idx, "sellItemCd") && ds_results3.getCellData(org_idx, "commSeq") == ds_resultsBulkSellingItem.getCellData(app_idx, "commSeq") && ds_results3.getCellData(org_idx, "dcScCd") == ds_resultsBulkSellingItem.getCellData(app_idx, "dcScCd") && ds_results3.getCellData(org_idx, "wrkEndDt") == ds_resultsBulkSellingItem.getCellData(app_idx, "wrkEndDt")) {
            if (sellItemGubunParam != "ALL") {
              if (Number(ds_resultsBulkSellingItem.getCellData(app_idx, "wrkEndDt")) > Number(maxDate)) {
                maxDate = ds_resultsBulkSellingItem.getCellData(app_idx, "wrkEndDt");
              }
              let curPos = ds_results3.getRowPosition();
              for (let j = 0; j < ds_results3.getColumnCount(); j++) {
                ds_results3.setCellData(curPos, ds_results3.getColumnID(j), ds_resultsBulkSellingItem.getCellData(app_idx, ds_results3.getColumnID(j)));
              }
              ds_results3.setCellData(curPos, "commCd", ds_results2.getCellData(ds_results2.getRowPosition(), "commCd"));
            }
            app_mod = '수정';
            break;
          }
        }
      }
      let curPos2 = ds_results3.getRowPosition();
      if (ds_results3.getCellData(curPos2, "sellItemCd") == "0042") {
        for (let i = 0; i < ds_results3.getRowCount(); i++) {
          if (ds_results3.getCellData(i, "sellItemCd") == "0010") {
            ds_results3.setCellData(curPos2, "odrNo", ds_results3.getCellData(i, "odrNo"));
            ds_results3.setCellData(curPos2, "qty", 1);
            break;
          }
        }
        ds_results3.setCellData(curPos2, "sellUnitCd", "VAN");
        ds_results3.setCellData(curPos2, "sellVol", "1");
      }
      if (ds_results3.getCellData(curPos2, "sellItemCd") == "0010") {
        ds_results3.setCellData(curPos2, "sellUnitCd", "VAN");
      }
      if (app_mod != '수정') {
        if (Number(ds_resultsBulkSellingItem.getCellData(app_idx, "wrkEndDt")) > Number(maxDate)) {
          maxDate = ds_resultsBulkSellingItem.getCellData(app_idx, "wrkEndDt");
        }
        ds_results3.insertRow(ds_results3.getRowCount());
        let newIdx = ds_results3.getRowCount() - 1;
        for (let j = 0; j < ds_results3.getColumnCount(); j++) {
          ds_results3.setCellData(newIdx, ds_results3.getColumnID(j), ds_resultsBulkSellingItem.getCellData(app_idx, ds_results3.getColumnID(j)));
        }
        ds_results3.setCellData(newIdx, "commCd", ds_results2.getCellData(ds_results2.getRowPosition(), "commCd"));
      }
    }
    ica_inIntendDt.setValue(maxDate);
    ds_results3.setRowPosition(0);
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = null;
  switch (disGubun) {
    case 1:
      udc_bilgClnt.cfCommonPopUp(scwin.callback_bilgClnt, pCode.trim(), pName, pClose, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", ",,CTRT", '800', '600', null, null, null, pAllSearch, null);
      break;
    case 2:
      udc_pldgClnt.cfCommonPopUp(scwin.callback_pldgClnt, pCode.trim(), pName, pClose, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", ",,CTRT", '800', '600', null, null, null, pAllSearch, null);
      break;
    case 3:
      udc_bilgLodept.cfCommonPopUp(scwin.callback_bilgLodept, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.callback_bilgClnt = async function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, txt_bilgClntNm);
    scwin.f_retrieveCtrtNo2();
  }
};
scwin.callback_pldgClnt = async function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_pldgClntNo, txt_pldgClntNm);
  }
};
scwin.callback_bilgLodept = async function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, txt_bilgLodeptNm);
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_openPopUpOdrNo = async function () {
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml", {
    width: 1200,
    height: 510,
    modal: true,
    title: "오더번호검색",
    popupName: "오더번호검색",
    data: {}
  });
  if (rtnValues != null) {
    ed_odrNo.setValue(rtnValues[0]);
    scwin.f_Retrieve("Enter");
  }
};
scwin.f_Create = async function () {
  let C_odrNo = ds_results1.getCellData(0, "odrNo");
  ds_results1.removeAll();
  ds_results2.removeAll();
  ds_results3.removeAll();
  ds_BulkOutHistoryList.removeAll();
  ed_odrNo.setValue(C_odrNo);
  ed_odrNo.setReadOnly(false);
  $c.gus.cfEnableObj($p, btn_odrNoPopUp, true);
  rd_prebilgClsCd.setValue("02");
  div_detailTable.show("");
  txt_taxnClsCd.setValue("");
  txt_outAdjmStsNm.setValue("");
  txt_fmlaPatternCd.setValue("");
  //txt_outPsblYn.setValue("");
  txt_WrkPlNm.setValue("");
  txt_whouseClsNm.setValue("");
  txt_outLimit_adjAmt.setValue("");
  txt_adjQty.setValue("");
  txt_adjWt.setValue("");
  txt_adjCbm.setValue("");
  txt_blNo.setValue("");
  txt_dsmbrkFrgtCd.setValue("");
  txt_mcomAssgnClsCd.setValue("");
  txt_arrvlportDt.setValue("");
  txt_crryoutAdmitNo.setValue("");
  txt_admitDropDt.setValue("");
  txt_taxnPrcSum.setValue("");
  txt_cstmdtAmt.setValue("");
  $c.gus.cfDisableBtnOnly($p, [btn_VolDivision, btn_AmtDivision, btn_RetrieveBulkSellingItem, btn_CancelBulkSellingItem, btn_BalUnpaid, btn_Save, btn_Delete, udc_btnGrp, btn_outIndication, btn_taxEstimat]);
  ed_odrNo.focus();
  if (rd_prebilgClsCd.getValue() == "01") {
    txt_fmlaPatternCd.hide("");
    acb_fmlaPatternCd.show("");
  } else {
    txt_fmlaPatternCd.show("");
    acb_fmlaPatternCd.hide("");
  }
};
scwin.sinit = function () {
  ds_results1.removeAll();
  txt_taxnClsCd.setValue("");
  txt_outAdjmStsNm.setValue("");
  txt_fmlaPatternCd.setValue("");
  //txt_outPsblYn.setValue("");
  txt_WrkPlNm.setValue("");
  txt_whouseClsNm.setValue("");
  txt_outLimit_adjAmt.setValue("");
  txt_adjQty.setValue("");
  txt_adjWt.setValue("");
  txt_adjCbm.setValue("");
  txt_blNo.setValue("");
  txt_dsmbrkFrgtCd.setValue("");
  txt_mcomAssgnClsCd.setValue("");
  txt_arrvlportDt.setValue("");
  txt_crryoutAdmitNo.setValue("");
  txt_admitDropDt.setValue("");
  txt_taxnPrcSum.setValue("");
  txt_cstmdtAmt.setValue("");
  txt_vsslCd.setValue("");
  txt_portcnt.setValue("");
  txt_outPsblYn.setValue("");
  acb_fmlaPatternCd.hide("");
};
scwin.f_Delete = async function () {
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "choice") == "T") {
      if (ds_results3.getCellData(i, "dcsnClsCd") != "1") {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째줄의 매출항목이 확정되었습니다.");
        return;
      }
    }
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (confirmResult) {
    ds_results3.undoAll();
    await $c.sbm.execute($p, sbm_delete);
  }
};
scwin.f_outIndication = async function () {
  // let slipNo = ds_results1.getCellData(0, "slipNo");
  // let printClsCd = "99p";

  // // TODO: OZ Report 연동 - $c.gus.cfOZReport 호출
  // $c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/fs/fs_999_99_" + printClsCd + ".ozr", null, null, null);

  let printClsCd = "99p";
  let nSlipNo = "";
  if (ds_results1.getCellData(0, "outAdjmStsCd") == "02") {
    nSlipNo = ds_results1.getCellData(0, "pldgMgntNo"); //담보번호 Set...				
  } else if (ds_results1.getCellData(0, "outAdjmStsCd") == "03") {
    nSlipNo = ds_results1.getCellData(0, "slipNo"); //전표번호 Set...		
  }
  let data = {
    odiName: "fs_999_99_" + printClsCd,
    reportName: "/ds/fs/fs_999_99_" + printClsCd + ".ozr",
    odiParam: {
      slipNo: nSlipNo
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: "print"
    },
    formParam: {}
  };
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 1000,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.f_taxEstimat = async function () {
  let valueObject = new Object();
  valueObject.sellWrkRsltsNo = ds_results1.getCellData(0, "outIntendNo");
  valueObject.sellWrkRsltsClsCd = "05";
  if (rd_prebilgClsCd.getValue() != ds_results1.getOriginalCellData(0, "prebilgClsCd")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["선청구구분", "세금계산서"]);
    rd_prebilgClsCd.focus();
    return;
  }
  if (ed_bilgClntNo.getValue() != ds_results1.getOriginalCellData(0, "bilgClntNo")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["청구거래처", "세금계산서"]);
    ed_bilgClntNo.focus();
    return;
  }
  if (ed_pldgClntNo.getValue() != ds_results1.getOriginalCellData(0, "pldgClntNo")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["담보거래처", "세금계산서"]);
    ed_pldgClntNo.focus();
    return;
  }
  if (txt_summary.getValue() != ds_results1.getOriginalCellData(0, "summary")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["적요", "세금계산서"]);
    txt_summary.focus();
    return;
  }
  if (acb_outAdjmPatternCd.getValue() != ds_results1.getOriginalCellData(0, "outAdjmPatternCd")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["출고정산유형", "세금계산서"]);
    acb_outAdjmPatternCd.focus();
    return;
  }
  if (ds_results3.getUpdatedIndex().length > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["오더매출목록", "세금계산서"]);
    return;
  }
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "outIntendNo") == ds_results1.getCellData(0, "outIntendNo") && ds_results3.getCellData(i, "dcsnClsCd") == "2") {
      await $c.gus.cfAlertMsg($p, "거래명세서를 먼저 삭제후 작성하십시오.");
      return;
    }
  }
  if (ds_results1.getCellData(0, "slipNo") == "N" || ds_results1.getCellData(0, "slipNo") == "") {
    valueObject.slipNo = "";
  } else {
    valueObject.slipNo = ds_results1.getCellData(0, "slipNo");
  }
  valueObject.bilgLodeptCd = ds_results1.getCellData(0, "bilgLodeptCd");
  valueObject.bilgClntNo = ds_results1.getCellData(0, "bilgClntNo");
  valueObject.taxnClsCd = ds_results1.getCellData(0, "taxnClsCd");
  valueObject.fmlaClsCd = "01";
  valueObject.fmlaPatternCd = scwin.fmlaPatternCd;
  valueObject.pldgMgntNo = ds_results1.getCellData(0, "pldgMgntNo");
  valueObject.summary = txt_summary.getValue();
  await $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_202_06_04p.xml", {
    width: 980,
    height: 730,
    title: "영수 세금 계산서 생성",
    popupName: "영수 세금 계산서 생성",
    modal: true
  }, valueObject);
  ed_outIntendNo.setValue(ds_results1.getCellData(0, "outIntendNo"));
  scwin.cmd = "S";
  scwin.f_Retrieve("Button");
};
scwin.f_pldgMgnt = async function () {
  let valueObject = {};
  valueObject.outIntendNo = ds_results1.getCellData(0, "outIntendNo");
  valueObject.sellWrkRsltsClsCd = "05";
  if (rd_prebilgClsCd.getValue() != ds_results1.getOriginalCellData(0, "prebilgClsCd")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["선청구구분", "담보"]);
    rd_prebilgClsCd.focus();
    return;
  }
  if (ed_bilgClntNo.getValue() != ds_results1.getOriginalCellData(0, "bilgClntNo")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["청구거래처", "담보"]);
    ed_bilgClntNo.focus();
    return;
  }
  if (ed_pldgClntNo.getValue() != ds_results1.getOriginalCellData(0, "pldgClntNo")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["담보거래처", "담보"]);
    ed_pldgClntNo.focus();
    return;
  }
  if (txt_summary.getValue() != ds_results1.getOriginalCellData(0, "summary")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["적요", "담보"]);
    txt_summary.focus();
    return;
  }
  if (acb_outAdjmPatternCd.getValue() != ds_results1.getOriginalCellData(0, "outAdjmPatternCd")) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["출고정산유형", "담보"]);
    acb_outAdjmPatternCd.focus();
    return;
  }
  if (ds_results3.getUpdatedIndex().length > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["오더매출목록", "담보"]);
    return;
  }
  if (ds_results1.getCellData(0, "pldgMgntNo") == "N" || ds_results1.getCellData(0, "pldgMgntNo") == "") {
    valueObject.pldgMgntNo = "";
  } else {
    valueObject.pldgMgntNo = ds_results1.getCellData(0, "pldgMgntNo");
  }
  valueObject.bilgLodeptCd = ds_results1.getCellData(0, "bilgLodeptCd");
  valueObject.bilgClntNo = ds_results1.getCellData(0, "bilgClntNo");
  valueObject.taxnClsCd = "01";
  valueObject.fmlaClsCd = "01";
  valueObject.fmlaPatternCd = scwin.fmlaPatternCd;
  let result = await $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_202_06_07p.xml", {
    width: 620,
    height: 440,
    modal: true
  }, valueObject);
  if (result && result.pldgMgntNo) {
    ds_results1.setCellData(0, "pldgMgntNo", result.pldgMgntNo);
  }
  ed_outIntendNo.setValue(ds_results1.getCellData(0, "outIntendNo"));
  scwin.cmd = "S";
  scwin.f_Retrieve("Button");
};
scwin.f_calendar = async function (id) {
  if (id == 'outIntendDt') {
    if (scwin.gOutIntendDt != ica_inIntendDt.getValue()) {
      if (ds_results1.getCellData(0, "outIntendNo") != "") {
        let chk = await $c.win.confirm($p, "출고기한을 변경하시면 매출데이타가 재정산 됩니다.\n변경하시겠습니까?");
        if (chk) {
          scwin.gOutIntendDt = ica_inIntendDt.getValue();
          scwin.f_changeCalendar();
        } else {
          ica_inIntendDt.setValue(scwin.gOutIntendDt);
        }
      } else {
        scwin.gOutIntendDt = ica_inIntendDt.getValue();
      }
    }
  }
  if (id == 'rsltsStdDt') {
    for (let i = 0; i < ds_results3.getRowCount(); i++) {
      if (ds_results3.getCellData(i, "choice") == "T") {
        ds_results3.setCellData(i, "rsltsStdDt", ica_rsltsStdDt.getValue());
        ds_results3.setCellData(i, "wrkStDt", ica_rsltsStdDt.getValue());
      }
    }
  }
};
scwin.f_RetrieveSellItem = async function (param1, param2, param3) {
  dma_RetrieveComboCMD.setJSON({
    "sysCd": "OrderOutIntendEBC",
    "queryId": "retrieveSellItem",
    "param1": param1,
    "param2": param2,
    "param3": param3
  });
  await $c.sbm.execute($p, sbm_RetrieveComboCMD).then(function (e) {
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    gr_results3.setColumnNodeSet("sellItemCd", "data:ds_sellItem", "name", "code");
  });
};
scwin.sbm_RetrieveComboCMD_submitdone = function (e) {};
scwin.f_EditableSet = async function () {
  if (ds_results1.getCellData(0, "outIntendNo") != "") {
    scwin.fmlaPatternCd = ds_results1.getCellData(0, "fmlaPatternCd");
  }
  if (rd_prebilgClsCd.getValue() == "01") {
    div_detailTable.hide("");
  } else {
    div_detailTable.show("");
  }
};
scwin.f_changeCalendar = async function () {
  ds_results3.removeAll();
  for (let i = 0; i < ds_results2.getRowCount(); i++) {
    ds_results2.setCellData(i, "outIntendDt", ds_results1.getCellData(0, "outIntendNo"));
    ds_results2.setCellData(i, "qty", 0);
    ds_results2.setCellData(i, "wt", 0);
    ds_results2.setCellData(i, "cbm", 0);
    ds_results2.setCellData(i, "jdgAmt", 0);
    ds_results2.setCellData(i, "cstmdtAmt", 0);
  }
};
scwin.f_toExcel1 = async function () {
  $c.data.downloadGridViewExcel($p, gr_results2, {
    fileName: "출고예정정보.xlsx",
    sheetName: "출고예정정보"
  });
};
scwin.f_toExcel2 = async function () {
  $c.data.downloadGridViewExcel($p, gr_results3, {
    fileName: "매출정보.xlsx",
    sheetName: "매출정보"
  });
};
scwin.f_totalCal = async function () {
  let totalSellVol = 0;
  let totalSellAmt = 0;
  let totalVatAmt = 0;
  let totalSumSellAmt = 0;
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "choice") == "T") {
      totalSellVol = totalSellVol + Number(ds_results3.getCellData(i, "sellVol"));
      totalSellAmt = totalSellAmt + Number(ds_results3.getCellData(i, "sellAmt"));
      totalVatAmt = totalVatAmt + Number(ds_results3.getCellData(i, "vatAmt"));
      totalSumSellAmt = totalSumSellAmt + Number(ds_results3.getCellData(i, "sumSellAmt"));
    }
  }
  ds_results1.setCellData(0, "spplyAmt", totalSellAmt);
  ds_results1.setCellData(0, "vatAmt", totalVatAmt);
  ed_totalAmt.setValue(totalSellAmt + totalVatAmt);
};
scwin.f_AmtDivision = async function () {
  let curPos = ds_results3.getRowPosition();
  if (ds_results3.getCellData(curPos, "sellSeq") == 0) {
    await $c.gus.cfAlertMsg($p, "출고예정내역이 있는 상태에서만 금액분할이 가능합니다.");
    return;
  }
  if (ds_results3.getCellData(curPos, "dcsnClsCd") != 1) {
    await $c.gus.cfAlertMsg($p, "미확정 상태에서만 금액분할이 가능합니다.");
    return;
  }
  if (ds_results3.getCellData(curPos, "volAmtDivsClsCd") == "V") {
    await $c.gus.cfAlertMsg($p, "물량분할된 자료입니다.");
    return;
  }
  if (ds_results3.getCellData(curPos, "bilgTrgtOdrNo") != "") {
    await $c.gus.cfAlertMsg($p, "이미 분할된 자료입니다.");
    return;
  }
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(curPos, "odrNo") == ds_results3.getCellData(i, "bilgTrgtOdrNo") && ds_results3.getCellData(curPos, "sellSeq") == ds_results3.getCellData(i, "bilgTrgtSellSeq") && ds_results3.getRowStatus(i) == "C") {
      await $c.gus.cfAlertMsg($p, "분할된 자료가 존재합니다.\n저장 후 작업하세요");
      return;
    }
  }
  ds_results3.insertRow(curPos + 1);
  for (let i = 0; i < ds_results3.getColumnCount(); i++) {
    ds_results3.setCellData(curPos + 1, ds_results3.getColumnID(i), ds_results3.getCellData(curPos, ds_results3.getColumnID(i)));
  }
  let newPos = curPos + 1;
  ds_results3.setCellData(newPos, "bilgTrgtSellSeq", ds_results3.getCellData(curPos, "sellSeq"));
  ds_results3.setCellData(newPos, "bilgTrgtOdrNo", ds_results3.getCellData(curPos, "odrNo"));
  ds_results3.setCellData(newPos, "volAmtDivsClsCd", "A");
  ds_results3.setCellData(newPos, "choice", "F");
  ds_results3.setCellData(newPos, "outIntendNo", "");
  ds_results3.setCellData(newPos, "outIntendSeq", "");
  ds_results3.setCellData(newPos, "sellSeq", 0);
  ds_results3.setCellData(newPos, "sellAmt", 0);
  ds_results3.setCellData(newPos, "vatAmt", 0);
  ds_results3.setCellData(newPos, "sumSellAmt", 0);
  ds_results3.setCellData(newPos, "sellUpr", 0);
  ds_results3.setCellData(curPos, "volAmtDivsClsCd", "A");
  gr_results3.setFocusedCell(newPos, "sellAmt", true);
  gr_results3.setCellReadOnly(newPos, "choice", false);
  gr_results3.setCellReadOnly(newPos, "sellVol", true);
  gr_results3.setCellReadOnly(newPos, "sellItemCd", true);
  gr_results3.setCellReadOnly(newPos, "sellAmt", false);
  for (var i = 0; i < gr_results3.getColCnt(); i++) {
    gr_results3.setCellReadOnly(curPos, i, true);
  }
  scwin.f_findParentRow(newPos);
};
scwin.f_VolDivision = async function () {
  let curPos = ds_results3.getRowPosition();
  if (ds_results3.getCellData(curPos, "sellSeq") == 0) {
    await $c.gus.cfAlertMsg($p, "출고예정내역이 있는 상태에서만 물량분할이 가능합니다.");
    return;
  }
  if (ds_results3.getCellData(curPos, "dcsnClsCd") != 1) {
    await $c.gus.cfAlertMsg($p, "미확정 상태에서만 물량분할이 가능합니다.");
    return;
  }
  if (ds_results3.getCellData(curPos, "volAmtDivsClsCd") == "A") {
    await $c.gus.cfAlertMsg($p, "금액분할된 자료입니다.");
    return;
  }
  if (ds_results3.getCellData(curPos, "bilgTrgtOdrNo") != "") {
    await $c.gus.cfAlertMsg($p, "이미 분할된 자료입니다.");
    return;
  }
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(curPos, "odrNo") == ds_results3.getCellData(i, "bilgTrgtOdrNo") && ds_results3.getCellData(curPos, "sellSeq") == ds_results3.getCellData(i, "bilgTrgtSellSeq") && ds_results3.getRowStatus(i) == "C") {
      await $c.gus.cfAlertMsg($p, "이미 분할된 자료가 존재합니다.\n저장 후 작업하세요");
      return;
    }
  }
  ds_results3.insertRow(curPos + 1);
  for (let i = 0; i < ds_results3.getColumnCount(); i++) {
    ds_results3.setCellData(curPos + 1, ds_results3.getColumnID(i), ds_results3.getCellData(curPos, ds_results3.getColumnID(i)));
  }
  let r2Pos = ds_results2.getRowPosition();
  let outWt = Number(ds_results2.getCellData(r2Pos, "wt"));
  let odrWt = Number(ds_results2.getCellData(r2Pos, "odrWt")) - Number(ds_results2.getCellData(r2Pos, "adjWt"));
  let sellVol = 0,
    qty = 0,
    wt = 0,
    cbm = 0;
  if (odrWt != 0) {
    sellVol = Math.round(Number(ds_results3.getCellData(curPos, "sellVol")) * outWt / odrWt * 1000) / 1000;
    qty = Math.round(Number(ds_results3.getCellData(curPos, "qty")) * outWt / odrWt * 1000) / 1000;
    wt = Math.round(Number(ds_results3.getCellData(curPos, "wt")) * outWt / odrWt * 1000) / 1000;
    cbm = Math.round(Number(ds_results3.getCellData(curPos, "cbm")) * outWt / odrWt * 1000) / 1000;
  } else {
    sellVol = 0;
    qty = 0;
    wt = 0;
    cbm = 0;
  }
  let sellAmt = sellVol * Number(ds_results3.getCellData(curPos + 1, "sellUpr"));
  let vatAmt = 0;
  if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
    if (ds_results3.getCellData(curPos + 1, "sellItemCd") == "0255") {
      vatAmt = 0;
    } else {
      vatAmt = Math.round(sellAmt * 0.1);
    }
  } else {
    vatAmt = 0;
  }
  let sumSellAmt = sellAmt + vatAmt;
  let newPos = curPos + 1;
  ds_results3.setCellData(newPos, "bilgTrgtSellSeq", ds_results3.getCellData(curPos, "sellSeq"));
  ds_results3.setCellData(newPos, "bilgTrgtOdrNo", ds_results3.getCellData(curPos, "odrNo"));
  ds_results3.setCellData(newPos, "volAmtDivsClsCd", "V");
  ds_results3.setCellData(newPos, "choice", "F");
  ds_results3.setCellData(newPos, "outIntendNo", "");
  ds_results3.setCellData(newPos, "outIntendSeq", "");
  ds_results3.setCellData(newPos, "sellSeq", 0);
  ds_results3.setCellData(newPos, "sellVol", sellVol);
  ds_results3.setCellData(newPos, "sellAmt", sellAmt);
  ds_results3.setCellData(newPos, "vatAmt", vatAmt);
  ds_results3.setCellData(newPos, "sumSellAmt", sumSellAmt);
  ds_results3.setCellData(newPos, "qty", qty);
  ds_results3.setCellData(newPos, "wt", wt);
  ds_results3.setCellData(newPos, "cbm", cbm);

  //원본ROW 설정
  ds_results3.setCellData(curPos, "volAmtDivsClsCd", "V");
  if (Number(ds_results2.getCellData(r2Pos, "wt")) == Number(ds_results2.getCellData(r2Pos, "odrWt")) - Number(ds_results2.getCellData(r2Pos, "adjWt"))) {
    ds_results3.setCellData(curPos, "sellVol", 0);
    ds_results3.setCellData(curPos, "sellAmt", 0);
    ds_results3.setCellData(curPos, "vatAmt", 0);
    ds_results3.setCellData(curPos, "sumSellAmt", 0);
    ds_results3.setCellData(curPos, "qty", 0);
    ds_results3.setCellData(curPos, "wt", 0);
    ds_results3.setCellData(curPos, "cbm", 0);
  } else {
    ds_results3.setCellData(curPos, "sellVol", Number(ds_results3.getCellData(curPos, "sellVol")) - sellVol);
    ds_results3.setCellData(curPos, "sellAmt", Number(ds_results3.getCellData(curPos, "sellAmt")) - sellAmt);
    ds_results3.setCellData(curPos, "vatAmt", Number(ds_results3.getCellData(curPos, "vatAmt")) - vatAmt);
    ds_results3.setCellData(curPos, "sumSellAmt", Number(ds_results3.getCellData(curPos, "sumSellAmt")) - sumSellAmt);
    ds_results3.setCellData(curPos, "qty", Number(ds_results3.getCellData(curPos, "qty")) - qty);
    ds_results3.setCellData(curPos, "wt", Number(ds_results3.getCellData(curPos, "wt")) - wt);
    ds_results3.setCellData(curPos, "cbm", Number(ds_results3.getCellData(curPos, "cbm")) - cbm);
  }
  gr_results3.setFocusedCell(newPos, "sellAmt", true);
  gr_results3.setRowReadOnly(newPos, false);
  gr_results3.setCellReadOnly(newPos, "choice", false);
  let arrReadColId = ["sellItemCd", "sellVol", "sellUpr"];
  arrReadColId.forEach(pColId => gr_results3.setCellReadOnly(newPos, pColId, true));

  // for (var i = 0; i < gr_results3.getColCnt(); i++){        
  //     gr_results3.setCellReadOnly(curPos, i, true);
  // }    

  scwin.f_findParentRow(newPos);
};
scwin.f_findParentRow = async function (row) {
  scwin.fitRow = 0;
  scwin.sellVol = 0;
  scwin.sellUpr = 0;
  scwin.sellAmt = 0;
  let volAmtDivsClsCd = ds_results3.getCellData(row, "volAmtDivsClsCd");
  let bilgTrgtOdrNo = ds_results3.getCellData(row, "bilgTrgtOdrNo");
  let bilgTrgtSellSeq = ds_results3.getCellData(row, "bilgTrgtSellSeq");
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "volAmtDivsClsCd") == volAmtDivsClsCd && ds_results3.getCellData(i, "odrNo") == bilgTrgtOdrNo && ds_results3.getCellData(i, "sellSeq") == bilgTrgtSellSeq && ds_results3.getCellData(i, "bilgTrgtOdrNo") == "") {
      scwin.fitRow = i;
    }
    if (ds_results3.getCellData(i, "volAmtDivsClsCd") == volAmtDivsClsCd && ds_results3.getCellData(i, "bilgTrgtOdrNo") == bilgTrgtOdrNo && ds_results3.getCellData(i, "bilgTrgtSellSeq") == bilgTrgtSellSeq) {
      scwin.sellVol = scwin.sellVol + Number(ds_results3.getCellData(i, "sellVol"));
      scwin.sellUpr = scwin.sellUpr + Number(ds_results3.getCellData(i, "sellUpr"));
      scwin.sellAmt = scwin.sellAmt + Number(ds_results3.getCellData(i, "sellAmt"));
    }
  }
  scwin.sellVol = scwin.sellVol + Number(ds_results3.getCellData(scwin.fitRow, "sellVol"));
  scwin.sellUpr = scwin.sellUpr + Number(ds_results3.getCellData(scwin.fitRow, "sellUpr"));
  scwin.sellAmt = scwin.sellAmt + Number(ds_results3.getCellData(scwin.fitRow, "sellAmt"));
  if (scwin.fitRow == 0) await $c.gus.cfAlertMsg($p, "원본 데이터를 찾을 수 없습니다.");
};
scwin.f_CancelRow = function () {
  $c.data.undoAll($p, ds_results3);
  scwin.f_totalCal();
};
scwin.f_RetrieveSellUnitCd = async function () {
  dma_RetrieveComboCMD.setJSON({
    "sysCd": "OrderOutIntendEBC",
    "queryId": "retrieveSellUnitCd"
  });
  await $c.sbm.execute($p, sbm_RetrieveSellUnitCd);
};
scwin.sbm_RetrieveSellUnitCd_submitdone = function (e) {
  gr_results3.setColumnNodeSet("sellUnitCd", "data:ds_sellUnitCd", "code", "code");
};
scwin.f_SetSellVol = function (row) {
  for (let i = 0; i < ds_results2.getRowCount(); i++) {
    if (ds_results3.getCellData(row, "sellUnitCd") == "CBM") {
      if (ds_results2.getCellData(i, "commCd") == ds_results3.getCellData(row, "sellCommNo")) {
        ds_results3.setCellData(row, "sellVol", ds_results2.getCellData(i, "cbm"));
        ds_results3.setCellData(row, "bilgUnitCd", ds_results3.getCellData(row, "sellUnitCd"));
      }
    } else if (ds_results3.getCellData(row, "sellUnitCd") == "MST") {
      if (ds_results2.getCellData(i, "commCd") == ds_results3.getCellData(row, "sellCommNo")) {
        ds_results3.setCellData(row, "sellVol", scwin.f_Round(Number(ds_results2.getCellData(i, "cbm")) / 1.133, 3, 'F'));
        ds_results3.setCellData(row, "bilgUnitCd", ds_results3.getCellData(row, "sellUnitCd"));
      }
    } else if (ds_results3.getCellData(row, "sellUnitCd") == "R/T") {
      if (ds_results2.getCellData(i, "commCd") == ds_results3.getCellData(row, "sellCommNo")) {
        let v_Wt = Number(ds_results2.getCellData(i, "wt"));
        let v_Cbm = Number(ds_results2.getCellData(i, "cbm"));
        if (v_Wt > v_Cbm) {
          ds_results3.setCellData(row, "sellVol", v_Wt);
          ds_results3.setCellData(row, "bilgUnitCd", "K/T");
        } else {
          ds_results3.setCellData(row, "sellVol", v_Cbm);
          ds_results3.setCellData(row, "bilgUnitCd", "CBM");
        }
      }
    } else if (ds_results3.getCellData(row, "sellUnitCd") == "RNT") {
      if (ds_results2.getCellData(i, "commCd") == ds_results3.getCellData(row, "sellCommNo")) {
        let v_Wt = Number(ds_results2.getCellData(i, "wt"));
        let v_Cbm = scwin.f_Round(Number(ds_results2.getCellData(i, "cbm")) / 1.133, 3, 'F');
        if (v_Wt > v_Cbm) {
          ds_results3.setCellData(row, "sellVol", v_Wt);
          ds_results3.setCellData(row, "bilgUnitCd", "K/T");
        } else {
          ds_results3.setCellData(row, "sellVol", v_Cbm);
          ds_results3.setCellData(row, "bilgUnitCd", "MST");
        }
      }
    } else if (ds_results3.getCellData(row, "sellUnitCd") == "TON") {
      if (ds_results2.getCellData(i, "commCd") == ds_results3.getCellData(row, "sellCommNo")) {
        ds_results3.setCellData(row, "sellVol", ds_results2.getCellData(i, "wt"));
        ds_results3.setCellData(row, "bilgUnitCd", ds_results3.getCellData(row, "sellUnitCd"));
      }
    } else if (ds_results3.getCellData(row, "sellUnitCd") == "VAN") {
      ds_results3.setCellData(row, "sellVol", 1);
      ds_results3.setCellData(row, "bilgUnitCd", ds_results3.getCellData(row, "sellUnitCd"));
    }
  }
  ds_results3.setCellData(row, "sellAmt", Number(ds_results3.getCellData(row, "sellUpr")) * Number(ds_results3.getCellData(row, "sellVol")));
  if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
    if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
      ds_results3.setCellData(row, "vatAmt", 0);
    } else {
      ds_results3.setCellData(row, "vatAmt", Number(ds_results3.getCellData(row, "sellAmt")) * 0.1);
    }
  } else {
    ds_results3.setCellData(row, "vatAmt", 0);
  }
  ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
};
scwin.f_Round = function (Num, Position, Base) {
  if (typeof Num === "undefined") return 0;
  if (Position == 0) {
    return Math.round(Num);
  } else if (Position > 0) {
    let cipher = '1';
    for (let i = 0; i < Position; i++) cipher = cipher + '0';
    let no = Number(cipher);
    if (Base == "F") {
      return Math.round(Num * no) / no;
    } else {
      return Math.round(Num / no) * no;
    }
  } else {
    //return false;
  }
};
scwin.f_calSc = async function (row) {
  let offInRate = 0;
  let devanningRate = 0;
  let paperSell20 = 0;
  let paperSell40 = 0;
  let paperSell = 0;
  let bExistPaperSell = false;
  let rate = 0;
  let scRt = 0;
  let localSellVol = 0;
  let sellItemCd = ds_results3.getCellData(row, "sellItemCd");
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "sellItemCd") == "0050") offInRate = Number(ds_results3.getCellData(i, "sellAmt"));
    if (ds_results3.getCellData(i, "sellItemCd") == "0179") devanningRate = Number(ds_results3.getCellData(i, "sellAmt"));
    if (ds_results3.getCellData(i, "sellItemCd") == "0278") {
      paperSell20 = Number(ds_results3.getCellData(i, "sellAmt"));
      bExistPaperSell = true;
    }
    if (ds_results3.getCellData(i, "sellItemCd") == "0279") {
      paperSell40 = Number(ds_results3.getCellData(i, "sellAmt"));
      bExistPaperSell = true;
    }
  }
  paperSell = paperSell20 >= paperSell40 ? paperSell20 : paperSell40;
  if (sellItemCd == "0093" || sellItemCd == "0094" || sellItemCd == "0095" || sellItemCd == "0096" || sellItemCd == "0097") {
    rate = (offInRate + devanningRate) * 0.1;
  } else if (sellItemCd == "0088") {
    scRt = Number(ds_results3.getCellData(row, "scRt"));
    rate = (offInRate + devanningRate) * scRt / 100;
  } else if (sellItemCd == "0098") {
    rate = (offInRate + devanningRate) * 0.5;
  } else if (sellItemCd == "0089") {
    rate = bExistPaperSell ? paperSell * 0.5 : (offInRate + devanningRate) * 0.5;
  } else if (sellItemCd == "0090") {
    rate = bExistPaperSell ? paperSell * 0.25 : (offInRate + devanningRate) * 0.25;
  }
  for (let j = 0; j < ds_results3.getRowCount(); j++) {
    if (ds_results3.getCellData(j, "sellItemCd") == "0050" || ds_results3.getCellData(j, "sellItemCd") == "0179" || ds_results3.getCellData(j, "sellItemCd") == "0278" || ds_results3.getCellData(j, "sellItemCd") == "0279") {
      ds_results3.setCellData(row, "sellVol", ds_results3.getCellData(j, "sellVol"));
      ds_results3.setCellData(row, "sellUnitCd", ds_results3.getCellData(j, "sellUnitCd"));
      ds_results3.setCellData(row, "unitClsCd", ds_results3.getCellData(j, "unitClsCd"));
      break;
    }
  }
  localSellVol = Number(ds_results3.getCellData(row, "sellVol"));
  ds_results3.setCellData(row, "sellAmt", rate);
  ds_results3.setCellData(row, "sellUpr", localSellVol == 0 ? 0 : rate / localSellVol);
  ds_results3.setCellData(row, "vatAmt", rate * 0.1);
};
scwin.f_Popup = async function (disGubun) {
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      pCode = ds_results3.getCellData(ds_results3.getRowPosition(), "eqKndCd").replace(/\s*$/, '');
      pName = ds_results3.getCellData(ds_results3.getRowPosition(), "eqKndNm");
      udc_hidden.setSelectId("retrieveClntHeavyMachineryInfo");
      udc_hidden.cfCommonPopUpAsync(function (rtnList) {
        if (rtnList != null) {
          let rp = ds_results3.getRowPosition();
          ds_results3.setCellData(rp, "eqKndCd", rtnList[0]);
          ds_results3.setCellData(rp, "eqKndNm", rtnList[1]);
          ds_results3.setCellData(rp, "eqNrmCd", rtnList[2]);
          ds_results3.setCellData(rp, "eqNrmNm", rtnList[3]);
        }
      }, pCode, pName, "T", null, null, null, null, null, 420, 500, null, null, "중기,중기코드,중기명");
      break;
    case 2:
      pCode = ds_results2.getCellData(ds_results2.getRowPosition(), "commCd").replace(/\s*$/, '');
      let pWhere = "2,4,,," + ds_results1.getCellData(0, "bilgClntNo");
      // TODO: cfCommonPopUp for commInfo
      break;
    default:
      break;
  }
};
scwin.f_BalUnpaid = async function () {
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "choice") == "T") {
      let b_sellAmt = Number(ds_results3.getCellData(i, "sellAmt")).toString();
      let b_vatAmt = scwin.f_Round(Number(ds_results3.getCellData(i, "vatAmt")), 0, 'F').toString();
      b_sellAmt = b_sellAmt.substr(0, b_sellAmt.length - 1) + "0";
      b_vatAmt = b_vatAmt.substr(0, b_vatAmt.length - 1) + "0";
      ds_results3.setCellData(i, "sellAmt", b_sellAmt);
      ds_results3.setCellData(i, "vatAmt", b_vatAmt);
      ds_results3.setCellData(i, "sumSellAmt", Number(ds_results3.getCellData(i, "sellAmt")) + Number(ds_results3.getCellData(i, "vatAmt")));
    }
  }
  scwin.f_totalCal();
};
scwin.f_clickFireAmt = async function () {
  if (chk_fireAmt.getValue() == "Y") {
    if (ds_results3.getRowCount() < 1) {
      await $c.gus.cfAlertMsg($p, "매출항목이 존재하지 않습니다.");
      chk_fireAmt.setValue("");
      return;
    }
    if (ica_inIntendDt.getValue() == "") {
      await $c.gus.cfAlertMsg($p, "입고예정일자를 입력하십시오.");
      ica_inIntendDt.focus();
      chk_fireAmt.setValue("");
      return;
    }
    if (ica_inIntendDt.getValue() == "") {
      await $c.gus.cfAlertMsg($p, "출고기한을 입력하십시오.");
      ica_inIntendDt.focus();
      chk_fireAmt.setValue("");
      return;
    }
    dma_retrieveSellitem.set("selpchItemCd", "0255");
    dma_retrieveSellitem.set("adptDt", ica_inIntendDt.getValue());
    dma_retrieveSellitem.set("inDt", ica_inIntendDt.getValue());
    dma_retrieveSellitem.set("odrNo", ds_results1.getCellData(0, "odrNo"));
    dma_retrieveSellitem.set("jdgAmt", ds_results2.getCellData(ds_results2.getRowPosition(), "jdgAmt"));
    dma_retrieveSellitem.set("wrkPlCd", ds_results1.getCellData(0, "dptWrkPlCd"));
    dma_retrieveSellitem.set("cargoDngrClsCd", lc_dangeCls.getValue());
    await $c.sbm.execute($p, sbm_retrieveSellitem);
  } else {
    let curPos = ds_results3.getRowPosition();
    if (ds_results3.getCellData(curPos, "dcsnClsCd") != '1') {
      await $c.gus.cfAlertMsg($p, "확정구분이 미확인상태가 아닙니다.");
      chk_fireAmt.setValue("Y");
      return;
    }
    for (let i = ds_results3.getRowCount() - 1; i >= 0; i--) {
      if (ds_results3.getCellData(i, "sellItemCd") == "0255") {
        ds_results3.removeRow(i);
      }
    }
  }
};
scwin.f_odrNoRetrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_odrNo]);
  if (!chk) return;
  scwin.f_Retrieve("Enter");
};
scwin.f_retrieveCtrtNo2 = async function () {
  dma_cndCtrtNo.set("ctrtClntNo", ed_bilgClntNo.getValue());
  await $c.sbm.execute($p, sbm_retrieveCtrtNo2);
};
scwin.f_regstEmail = async function () {
  $c.win.openMenu($p, "전자세금계산서거래처관리", "/ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml", "fi_100_01_03b.xml");
};
scwin.f_certiLink = async function () {
  if (ds_results1.getCellData(0, "outIntendNo") == "") {
    await $c.gus.cfAlertMsg($p, "출고예정번호가 존재하지 않습니다.");
    return;
  }
  dma_orderselling_con.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  dma_orderselling_con.set("bilgLodeptNm", txt_bilgLodeptNm.getValue());
  dma_orderselling_con.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_orderselling_con.set("bilgClntNm", txt_bilgClntNm.getValue());
  dma_orderselling_con.set("qryConKnd", "오더");
  dma_orderselling_con.set("qryConKnd2", "품명");
  dma_orderselling_con.set("qryConCd", ds_results1.getCellData(0, "odrNo"));
  dma_orderselling_con.set("fmlaPatternCd", ds_results1.getCellData(0, "fmlaPatternCd"));
  dma_orderselling_con.set("taxnClsCd", ds_results1.getCellData(0, "taxnClsCd"));
  if (ds_results1.getCellData(0, "odrNo").substring(1, 3) == "CK") {
    dma_orderselling_con.set("transCargoClsCd", "C");
  } else {
    dma_orderselling_con.set("transCargoClsCd", "B");
  }
  dma_orderselling_con.set("lineCd", ds_results1.getCellData(0, "lineCd"));
  dma_orderselling_con.set("pgmId", "fs_202_04_01b.xml");
  $c.win.openMenu($p, "수출입거래명세서 작성", "/ui/ds/fs/bilg/fs_202_04_01b.xml", "fs_202_04_01b.xml", {
    "dma_orderselling_con": dma_orderselling_con.getJSON(),
    "flag": Window.name
  });
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_Retrieve("Button");
};
scwin.btn_fieldClear_onclick = async function (e) {
  scwin.f_FieldClear();
};
scwin.btn_odrNoPopUp_onclick = async function (e) {
  scwin.f_openPopUpOdrNo();
};
scwin.btn_odrNoRetrieve_onclick = async function (e) {
  scwin.f_odrNoRetrieve();
};
scwin.btn_Create_onclick = async function (e) {
  scwin.f_Create();
};
scwin.btn_Save_onclick = async function (e) {
  scwin.f_Save();
};
scwin.btn_Delete_onclick = async function (e) {
  scwin.f_Delete();
};
scwin.btn_VolDivision_onclick = async function (e) {
  scwin.f_VolDivision();
};
scwin.btn_AmtDivision_onclick = async function (e) {
  scwin.f_AmtDivision();
};
scwin.btn_RetrieveBulkSellingItem_onclick = async function (e) {
  scwin.f_retrieveBulkSellingItem(0);
};
scwin.btn_CancelBulkSellingItem_onclick = async function (e) {
  scwin.f_CancelSellItem();
};
scwin.btn_BalUnpaid_onclick = async function (e) {
  scwin.f_BalUnpaid();
};
scwin.btn_outIndication_onclick = async function (e) {
  scwin.f_outIndication();
};
scwin.btn_taxEstimat_onclick = async function (e) {
  scwin.f_taxEstimat();
};
scwin.btn_certiLink_onclick = async function (e) {
  scwin.f_certiLink();
};
scwin.btn_regstEmail_onclick = async function (e) {
  scwin.f_regstEmail();
};
scwin.chk_fireAmt_onviewchange = async function (e) {
  scwin.f_clickFireAmt();
};
scwin.ed_odrNo_onkeydown = async function (e) {
  if (e.keyCode == 13) {
    scwin.f_odrNoRetrieve();
  }
};
scwin.rd_prebilgClsCd_onviewchange = async function (e) {
  scwin.f_EditableSet();
  if (rd_prebilgClsCd.getValue() == "01") {
    txt_fmlaPatternCd.hide("");
    acb_fmlaPatternCd.show("");
    if (ds_results1.getCellData(0, "outIntendNo") != '') {
      acb_fmlaPatternCd.setDisabled(true);
    } else {
      acb_fmlaPatternCd.setDisabled(false);
    }
  } else {
    txt_fmlaPatternCd.show("");
    acb_fmlaPatternCd.hide("");
  }
};
scwin.acb_outAdjmPatternCd_onchange = async function (info) {
  scwin.f_ChkOutPsbl();
  scwin.f_EditableSet();
};
scwin.ed_bilgClntNo_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 1);
};
scwin.ed_pldgClntNo_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pldgClntNo, txt_pldgClntNm, 2);
};
scwin.ed_bilgLodeptCd_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 3);
};
scwin.ica_rsltsStdDt_onblur = async function (e) {
  for (let i = 0; i < ds_results3.getRowCount(); i++) {
    if (ds_results3.getCellData(i, "choice") == "T") {
      ds_results3.setCellData(i, "rsltsStdDt", ica_rsltsStdDt.getValue());
      ds_results3.setCellData(i, "wrkStDt", ica_rsltsStdDt.getValue());
    }
  }
};

/**
 * event
 * @name sbm_search_submitdone
 * @description 조회 submitdone
 */
scwin.sbm_search_submitdone = async function (e) {
  // ds_results1 OnLoadCompleted
  txt_gr_results2Cnt.setValue(ds_results2.getRowCount());
  txt_gr_results3Cnt.setValue(ds_results3.getRowCount());

  //조회된 내역만 readonly
  for (var i = 0; i < gr_results3.getTotalRow(); i++) {
    //gr_results3.setRowReadOnly(i, true);        
    scwin.fn_result1_rowreadonly(i);
  }
  let rowCnt1 = ds_results1.getRowCount();
  if (rowCnt1 == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_results1.setRowPosition(0);
    scwin.ed_odrDcsnYn = ds_results1.getCellData(0, "odrDcsnYn");
    if (scwin.ed_odrDcsnYn == "1") {
      $c.gus.cfEnableBtnOnly($p, [btn_taxEstimat]);
    } else {
      $c.gus.cfDisableBtnOnly($p, [btn_taxEstimat]);
    }

    //작업구간
    txt_WrkPlNm.setValue(ds_results1.getCellData(0, "dptWrkPlNm") + " ~ " + ds_results1.getCellData(0, "arvWrkPlNm"));
    //창고명(도착지)
    txt_whouseClsNm.setValue(ds_results1.getCellData(0, "arvDtl"));
    ed_odrNo.setReadOnly(true);
    $c.gus.cfEnableObj($p, btn_odrNoPopUp, false);
    if (ds_results1.getCellData(0, "prebilgClsCd") == "") {
      rd_prebilgClsCd.setValue("02");
    }
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableObjects($p, [ica_inIntendDt, ica_outIntendDt]);
    let outAdjmStsCd = ds_results1.getCellData(0, "outAdjmStsCd");
    if (outAdjmStsCd == "01") {
      txt_outAdjmStsNm.setValue("생성");
      $c.gus.cfEnableBtnOnly($p, [btn_VolDivision, btn_AmtDivision, btn_RetrieveBulkSellingItem, btn_CancelBulkSellingItem, btn_Save, btn_Delete, btn_BalUnpaid, udc_btnGrp]);
      $c.gus.cfDisableBtnOnly($p, [btn_outIndication]);
      if (scwin.cmd == "S") {
        scwin.cmd = "";
      } else {
        if (ds_results1.getCellData(0, "outIntendNo") != "") {
          await $c.gus.cfAlertMsg($p, "출고예정번호[" + ds_results1.getCellData(0, "outIntendNo") + "]이 아직 정산되지 않았습니다.");
        }
      }
      $c.gus.cfEnableObjects($p, [ica_outIntendDt]);
    } else if (outAdjmStsCd == "02") {
      txt_outAdjmStsNm.setValue("담보");
      $c.gus.cfEnableBtnOnly($p, [btn_VolDivision, btn_AmtDivision, btn_RetrieveBulkSellingItem, btn_CancelBulkSellingItem, btn_Save, btn_Delete, btn_BalUnpaid, udc_btnGrp]);
      $c.gus.cfEnableObjects($p, [ica_outIntendDt]);
    } else if (outAdjmStsCd == "03") {
      txt_outAdjmStsNm.setValue("계산서");
      $c.gus.cfDisableBtnOnly($p, [btn_VolDivision, btn_AmtDivision, btn_RetrieveBulkSellingItem, btn_Save, btn_Delete, btn_BalUnpaid, udc_btnGrp]);
      $c.gus.cfEnableBtnOnly($p, [btn_outIndication]);
      $c.gus.cfDisableBtnOnly($p, [ica_outIntendDt]);
    }

    //부가세 구분
    if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
      txt_taxnClsCd.setValue("과세");
    } else if (ds_results1.getCellData(0, "taxnClsCd") == "02") {
      txt_taxnClsCd.setValue("영세");
    } else if (ds_results1.getCellData(0, "taxnClsCd") == "03") {
      txt_taxnClsCd.setValue("기타");
    }

    //출고기한
    ica_outIntendDt.setValue(scwin.sCurrDate);
    scwin.gOutIntendDt = scwin.sCurrDate;

    //출고청구유형
    let ctrtNo = ds_results1.getCellData(0, "ctrtNo");
    if (ctrtNo == "C0000000600") {
      scwin.fmlaPatternCd = "21";
      txt_fmlaPatternCd.setValue("하역-육상기본");
    } else if (ctrtNo == "C0000000700") {
      scwin.fmlaPatternCd = "22";
      txt_fmlaPatternCd.setValue("하역-부두장치장(부산)");
    } else if (ctrtNo == "C0000000500") {
      scwin.fmlaPatternCd = "23";
      txt_fmlaPatternCd.setValue("하역-타창고");
    } else if (ctrtNo == "C0000000400") {
      scwin.fmlaPatternCd = "24";
      txt_fmlaPatternCd.setValue("하역-세관창고");
    } else if (ctrtNo == "C0000000800") {
      scwin.fmlaPatternCd = "09";
      txt_fmlaPatternCd.setValue("CNTR-타창고");
    } else {
      scwin.fmlaPatternCd = "20";
      txt_fmlaPatternCd.setValue("하역-계약");
    }
    if (ds_results1.getCellData(0, "prebilgClsCd") == "01") {
      acb_fmlaPatternCd.setValue('01' + ds_results1.getCellData(0, "fmlaPatternCd"));
    }
    if (ds_results1.getCellData(0, "outAdjmPatternCd") == "") {
      acb_outAdjmPatternCd.setSelectedIndex(0);
    }
    scwin.f_EditableSet();

    //전표번호가 없는경우 출고지시서 발행 못함
    if (rd_prebilgClsCd.getValue() == "01") {
      scwin.fmlaClsCd = acb_fmlaPatternCd.getValue().substring(0, 2);
      let sCd = acb_fmlaPatternCd.getValue().substring(2, 4);
      if (sCd != "") {
        scwin.fmlaPatternCd = acb_fmlaPatternCd.getValue().substring(2, 4);
      }
    } else {
      scwin.fmlaClsCd = ds_results1.getCellData(0, "fmlaClsCd");
    }
    scwin.f_RetrieveSellItem(ds_results1.getCellData(0, "bilgLodeptCd"), scwin.fmlaClsCd, scwin.fmlaPatternCd);
    if (ds_results1.getCellData(0, "outIntendNo").length > 0) {
      if (scwin.ed_odrDcsnYn == "0") {
        $c.gus.cfDisableObjects($p, [btn_taxEstimat]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_taxEstimat]);
        $c.gus.cfDisableObjects($p, [acb_outAdjmPatternCd]);
      }
    } else {
      $c.gus.cfDisableBtnOnly($p, [btn_taxEstimat]);
      $c.gus.cfEnableObjects($p, [acb_outAdjmPatternCd]);
    }
    if (rd_prebilgClsCd.getValue() == "01") {
      txt_fmlaPatternCd.hide("");
      acb_fmlaPatternCd.show("");
    } else {
      txt_fmlaPatternCd.show("");
      acb_fmlaPatternCd.hide("");
    }
    if (ds_results1.getCellData(0, "fireInsYn") == "Y") {
      chk_fireAmt.setValue("Y");
    } else {
      chk_fireAmt.setValue("");
    }
  }

  // ds_results2 OnLoadCompleted
  ds_results2.setRowPosition(0);
  gr_results2.setFocusedCell(0, "choice");
  let rowCnt2 = ds_results2.getRowCount();
  if (rowCnt2 > 0) {
    for (let i = 0; i < ds_results2.getRowCount(); i++) {
      if (ds_results2.getCellData(i, "outIntendNo") == "") {
        ds_results2.setCellData(i, "outIntendDt", scwin.sCurrDate);
        ds_results2.setCellData(i, "qty", Number(ds_results2.getCellData(i, "odrQty")) - Number(ds_results2.getCellData(i, "adjQty")));
      }
      if (ds_results2.getCellData(i, "outIntendNo") != ds_results1.getCellData(0, "outIntendNo")) {
        ds_results2.setCellData(i, "qty", Number(ds_results2.getCellData(i, "odrQty")) - Number(ds_results2.getCellData(i, "adjQty")));
      }
      if (Number(ds_results2.getCellData(i, "odrQty")) == 0) {
        ds_results2.setCellData(i, "wt", Number(ds_results2.getCellData(i, "odrWt")) - Number(ds_results2.getCellData(i, "adjWt")));
        ds_results2.setCellData(i, "cbm", Number(ds_results2.getCellData(i, "odrCbm")) - Number(ds_results2.getCellData(i, "adjCbm")));
      }
    }
    if (ds_results2.getCellData(0, "inDt") == "") {
      ica_inIntendDt.setValue(ds_results1.getCellData(0, "arrvlportDt"));
    } else {
      ica_inIntendDt.setValue(ds_results2.getCellData(0, "inDt"));
    }
    scwin.f_ChkOutPsbl();
  }

  //실적기준일자.
  if (ds_results3.getRowCount() > 0) {
    let maxRsltsStdDt = "";
    for (let i = 0; i < ds_results3.getRowCount(); i++) {
      let val = ds_results3.getCellData(i, "rsltsStdDt");
      if (val > maxRsltsStdDt) maxRsltsStdDt = val;
    }
    if (maxRsltsStdDt == "") {
      ica_rsltsStdDt.setValue(scwin.sCurrDate);
    } else {
      ica_rsltsStdDt.setValue(maxRsltsStdDt);
    }
    gr_results3.setFocusedCell(0, "prebilgYn");
  } else {
    if (ica_rsltsStdDt.getValue() == "") ica_rsltsStdDt.setValue(scwin.sCurrDate);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  ed_outIntendNo.setValue(ds_results1.getCellData(0, "outIntendNo"));
  scwin.cmd = "S";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve("Button");
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_delete_submitdone = async function (e) {
  ed_outIntendNo.setValue("");
  ed_odrNo.setValue(ds_results1.getCellData(0, "odrNo"));
  scwin.cmd = "S";
  scwin.f_Retrieve("Enter");
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
};
scwin.sbm_delete_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveBulkSellingItem_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_resultsBulkSellingItem.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfDisableObjects($p, [acb_outAdjmPatternCd]);
    if (ds_resultsBulkSellingItem.getCellData(0, "outPsblYn") != undefined) {
      scwin.outPsblYn = ds_resultsBulkSellingItem.getCellData(0, "outPsblYn") == "Y" ? "  (출고가능)" : "  (출고불가)";
    }
    scwin.f_setOutPsblYn();
    scwin.f_addDataSet(scwin.sellItemGubun);
  }
};
scwin.sbm_cancelSellItem_submitdone = async function (e) {
  ed_outIntendNo.setValue(ds_results1.getCellData(0, "outIntendNo"));
  scwin.cmd = "S";
  scwin.f_Retrieve("Button");
};
scwin.sbm_cancelSellItem_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_odrSearch_submitdone = async function (e) {
  if (ds_odrInfo.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_results3.setCellData(scwin.keepOdrRow, "bilgLodeptCd", ds_odrInfo.getCellData(0, "bilgLodeptCd"));
    ds_results3.setCellData(scwin.keepOdrRow, "sellLodeptCd", ds_odrInfo.getCellData(0, "sellLodeptCd"));
    ds_results3.setCellData(scwin.keepOdrRow, "lineCd", ds_odrInfo.getCellData(0, "lineCd"));
    ds_results3.setCellData(scwin.keepOdrRow, "wrkStDt", ds_odrInfo.getCellData(0, "wrkStDt"));
    ds_results3.setCellData(scwin.keepOdrRow, "mrn", ds_odrInfo.getCellData(0, "mrn"));
    ds_results3.setCellData(scwin.keepOdrRow, "msn", ds_odrInfo.getCellData(0, "msn"));
    ds_results3.setCellData(scwin.keepOdrRow, "hsn", ds_odrInfo.getCellData(0, "hsn"));
    ds_results3.setCellData(scwin.keepOdrRow, "ctrtClntNo", ds_odrInfo.getCellData(0, "ctrtClntNo"));
    ds_results3.setCellData(scwin.keepOdrRow, "reqClntNo", ds_odrInfo.getCellData(0, "reqClntNo"));
    ds_results3.setCellData(scwin.keepOdrRow, "bilgClntNo", ds_odrInfo.getCellData(0, "bilgClntNo"));
    ds_results3.setCellData(scwin.keepOdrRow, "dptDistrictCd", ds_odrInfo.getCellData(0, "dptDistrictCd"));
    ds_results3.setCellData(scwin.keepOdrRow, "arvDistrictCd", ds_odrInfo.getCellData(0, "arvDistrictCd"));
  }
};
scwin.sbm_odrSearch_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveSellitem_submitdone = async function (e) {
  if (ds_returnSellitem.getRowCount() > 0) {
    let curPos = ds_results3.getRowPosition();
    ds_results3.insertRow(curPos + 1);
    for (let i = 0; i < ds_results3.getColumnCount(); i++) {
      ds_results3.setCellData(curPos + 1, ds_results3.getColumnID(i), ds_results3.getCellData(curPos, ds_results3.getColumnID(i)));
    }
    let newPos = curPos + 1;
    ds_results3.setCellData(newPos, "sellItemCd", "0255");
    ds_results3.setCellData(newPos, "sellUnitCd", "CBM");
    ds_results3.setCellData(newPos, "unitClsCd", "04");
    ds_results3.setCellData(newPos, "sellVol", 1);
    ds_results3.setCellData(newPos, "sellUpr", ds_returnSellitem.getCellData(ds_returnSellitem.getRowPosition(), "sellAmt"));
    ds_results3.setCellData(newPos, "sellAmt", ds_returnSellitem.getCellData(ds_returnSellitem.getRowPosition(), "sellAmt"));
    ds_results3.setCellData(newPos, "vatAmt", 0);
    ds_results3.setCellData(newPos, "sumSellAmt", ds_returnSellitem.getCellData(ds_returnSellitem.getRowPosition(), "sellAmt"));
    ds_results3.setCellData(newPos, "sellYn", 0);
    ds_results3.setCellData(newPos, "addRowYn", "Y");
    ds_results3.setCellData(newPos, "sellSeq", 0);
    ds_results3.setCellData(newPos, "dcsnClsCd", 1);
    ds_results3.setCellData(newPos, "dcsnClsNm", "미확인");
    ds_results3.setCellData(newPos, "choice", "T");
    ds_results3.setCellData(newPos, "outIntendNo", "");
    ds_results3.setCellData(newPos, "volAmtDivsClsCd", "R");
    ds_results3.setCellData(newPos, "bilgTrgtSellSeq", "");
    ds_results3.setCellData(newPos, "bilgTrgtOdrNo", "");
    ds_results3.setCellData(newPos, "prebilgYn", 1);
    ds_results3.setCellData(newPos, "prebilgCreatYn", 1);
    ds_results3.setCellData(newPos, "odrNo", ds_results1.getCellData(0, "odrNo"));
    ds_results3.setCellData(newPos, "taxnClsCd", "03");
    gr_results3.setRowReadOnly(newPos, false);
  }
};
scwin.sbm_retrieveCtrtNo2_submitdone = async function (e) {
  let ctrtNoRows = ds_ctrtNo2.getRowCount();
  if (ctrtNoRows > 0) {
    let sameYn = "N";
    for (let i = 0; i < ctrtNoRows; i++) {
      if (ds_ctrtNo2.getCellData(i, "mgntTrgtClntYn") == 1) {
        sameYn = "Y";
        break;
      }
    }
    if (sameYn == "Y") {
      let msg = "관리거래처입니다\n\n관리거래처 변경으로 문제발생 시 책임을 물을 수 있습니다.\n\n책임을 물어도 변경하시겠습니까?";
      let chk = await $c.win.confirm($p, msg);
      if (!chk) {
        ed_bilgClntNo.setValue("");
        txt_bilgClntNm.setValue("");
      }
    }
  }
};
scwin.sbm_retrieveCtrtNo2_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_results3_oncelldatachange = async function (info) {
  scwin.f_totalCal();
  let row = info.rowIndex;
  let colid = info.colID;
  if (colid == "sellItemCd") {
    if (ds_results3.getCellData(row, "sellItemCd") == "0042") {
      for (let i = 0; i < ds_results3.getRowCount(); i++) {
        if (ds_results3.getCellData(i, "sellItemCd") == "0010") {
          ds_results3.setCellData(row, "odrNo", ds_results3.getCellData(i, "odrNo"));
        }
      }
      ds_results3.setCellData(row, "sellUnitCd", "VAN");
    }
    if (ds_results3.getCellData(row, "sellItemCd") == "0010") {
      ds_results3.setCellData(row, "sellUnitCd", "VAN");
    }
  }

  //숫자 컬럼이 비어있는 경우 0 값 처리.
  let arrNumCol = ["scRt", "sellVol", "sellUpr", "sellAmt", "vatAmt", "sellAmtFcrc", "qty", "wt", "cbm", "jdgAmt", "cstmdtAmt", "arrowDdCnt", "freeday", "basisDdCnt", "stdDay", "shpCoDdCnt", "rofDdCnt", "valmTrf", "meraTrf", "strDeg"];
  if (arrNumCol.includes(colid)) {
    if (info.newValue == "") ds_results3.setCellData(row, colid, 0);
  }
};
scwin.ds_results2_oncelldatachange = async function (info) {
  let row = info.rowIndex;
  let colid = info.colID;
  if (colid == "qty") {
    if (Number(ds_results2.getCellData(row, "qty")) > Number(ds_results2.getCellData(row, "odrQty")) - Number(ds_results2.getCellData(row, "adjQty"))) {
      await $c.gus.cfAlertMsg($p, "출고예정물량 초과입니다. 다시 확인하세요");
      ds_results2.setCellData(row, "qty", 0);
    }
    ds_results2.setCellData(row, "wt", Math.round(Number(ds_results2.getCellData(row, "qty")) / Number(ds_results2.getCellData(row, "odrQty")) * Number(ds_results2.getCellData(row, "odrWt")) * 1000) / 1000);
    ds_results2.setCellData(row, "cbm", Math.round(Number(ds_results2.getCellData(row, "qty")) / Number(ds_results2.getCellData(row, "odrQty")) * Number(ds_results2.getCellData(row, "odrCbm")) * 1000) / 1000);
  }

  //숫자 컬럼이 비어있는 경우 0 값 처리.
  if (["qty", "wt", "cbm", "jdgAmt", "cstmdtAmt"].includes(colid)) {
    if (info.newValue == "") ds_results2.setCellData(row, colid, 0);
  }
};
scwin.gr_results3_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "choice") {
    if (ds_results3.getCellData(rowIndex, "choice") == "T") {
      if (ds_results3.getCellData(rowIndex, "sellItemCd") == "") {
        ds_results3.setCellData(rowIndex, "choice", "F");
        await $c.gus.cfAlertMsg($p, "매출항목을 입력하십시오.");
        return;
      }
      if (ds_results3.getCellData(rowIndex, "") == "") {
        ds_results3.setCellData(rowIndex, "choice", "F");
        await $c.gus.cfAlertMsg($p, "매출단위를 입력하십시오.");
        return;
      }
      if (ds_results3.getCellData(rowIndex, "qty") == "" && ds_results3.getCellData(rowIndex, "wt") == "") {
        ds_results3.setCellData(rowIndex, "choice", "F");
        await $c.gus.cfAlertMsg($p, "수량 또는 중량을 입력하십시오.");
        return;
      }
      ds_results3.setCellData(rowIndex, "outIntendNo", ds_results1.getCellData(0, "outIntendNo"));
    } else {
      ds_results3.setCellData(rowIndex, "outIntendNo", "");
    }
  }
};
scwin.gr_results3_oneditend = function (row, columnIndex, value) {
  let colid = gr_results3.getColumnID(columnIndex);

  //as-is  gr_results3 onCloseup	

  if (colid == "sellItemCd") {
    ds_results3.setCellData(row, "sellUpr", 0);
    ds_results3.setCellData(row, "sellVol", 0);
    ds_results3.setCellData(row, "sellAmt", 0);
    ds_results3.setCellData(row, "vatAmt", 0);
    ds_results3.setCellData(row, "sumSellAmt", 0);
    ds_results3.setCellData(row, "sellItemCd", value);
    scwin.sellItemGubun = "ONE";
    if (["0003", "0009", "0008"].includes(ds_results3.getCellData(row, "sellItemCd"))) {
      if (ds_results3.getCellData(row, "sellVol") == 0) {
        $c.gus.cfAlertMsg($p, "매출물량을 입력하십시오.");
        gr_results3.setFocusedCell(row, "sellVol", true);
        return;
      }
      scwin.f_retrieveBulkSellingItem(row, ds_results3.getCellData(row, "sellVol"));
    } else {
      scwin.f_retrieveBulkSellingItem(row);
    }
    if (["0098", "0089", "0090", "0094", "0093", "0095", "0096", "0097", "0088"].includes(ds_results3.getCellData(row, "sellItemCd"))) {
      scwin.f_calSc(row);
    }
  } else if (colid == "dcScCd") {
    // if(ds_results3.getCellData(row, "dcScCd") == '0257'){
    // 	gr_results3.ColumnProp('scRt','Edit') = "ANY";
    //     gr_results3.setread
    // 	if(ds_results3.getCellData(row,"sellUpr") < 0){
    // 		ds_results3.NameValue(row,"sellUpr") = ds_results3.NameValue(row,"sellUpr") * -1;
    // 	}					
    // 	if(ds_results3.getCellData(row,"scRt") < 0){
    // 		ds_results3.NameValue(row,"scRt") = ds_results3.NameValue(row,"scRt") * -1;
    // 	}									    				    							
    // } else if(ds_results3.getCellData(row, "dcScCd") == '0256'){
    // 	gr_results3.ColumnProp('scRt','Edit') = "ANY";
    // 	if(ds_results3.getCellData(row,"sellUpr") > 0){
    // 		ds_results3.NameValue(row,"sellUpr") = ds_results3.NameValue(row,"sellUpr") * -1;
    // 	}						
    // 	if(ds_results3.getCellData(row,"scRt") > 0){
    // 		ds_results3.NameValue(row,"scRt") = ds_results3.NameValue(row,"scRt") * -1;
    // 	}							    			    		
    // } else {
    // 	gr_results3.ColumnProp('scRt','Edit') = "None";
    // 	if(ds_results3.getCellData(row,"sellUpr") < 0){
    // 		ds_results3.NameValue(row,"sellUpr") = ds_results3.NameValue(row,"sellUpr") * -1;
    // 	}							    			
    // 	if(ds_results3.getCellData(row,"scRt") < 0){
    // 		ds_results3.NameValue(row,"scRt") = ds_results3.NameValue(row,"scRt") * -1;
    // 	}									    		    				    		
    // }

    ds_results3.setCellData(row, "sellAmt", Number(ds_results3.getCellData(row, "sellUpr")) * Number(ds_results3.getCellData(row, "sellVol")));
    if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
      if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
        ds_results3.setCellData(row, "vatAmt", 0);
      } else {
        ds_results3.setCellData(row, "vatAmt", Number(ds_results3.getCellData(row, "sellAmt")) * 0.1);
      }
    } else {
      ds_results3.setCellData(row, "vatAmt", 0);
    }
    ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt") + Number(ds_results3.getCellData(row, "vatAmt"))));

    // } else if (colid == "sellUnitCd")	{
    //     //매출물량 세팅
    //     scwin.f_SetSellVol(row);		
  }
};

//as-is gr_results3 OnExit    
scwin.gr_results3_onviewchange = async function (info) {
  let row = info.rowIndex;
  let colid = info.colId;
  let olddata = info.oldValue;
  let value = info.newValue;
  if (colid == "sellVol") {
    if (["0003", "0009", "0008"].includes(ds_results3.getCellData(row, "sellItemCd"))) {
      scwin.sellItemGubun = "ONE";
      await scwin.f_retrieveBulkSellingItem(row, ds_results3.getCellData(row, "sellVol"));
    }
    let sellUpr = $p.bigDecimal(ds_results3.getCellData(row, "sellUpr"));
    let sellVol = $p.bigDecimal(ds_results3.getCellData(row, "sellVol"));

    //공급가액,부가세,금액 계산
    ds_results3.setCellData(row, "sellAmt", parseInt(sellUpr.times(sellVol)));
    let sellAmt = $p.bigDecimal(ds_results3.getCellData(row, "sellAmt"));
    if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
      if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
        ds_results3.setCellData(row, "vatAmt", 0);
      } else {
        ds_results3.setCellData(row, "vatAmt", parseInt(sellAmt.times("0.1").toString()));
      }
    } else {
      ds_results3.setCellData(row, "vatAmt", 0);
    }
    let vatAmt = $p.bigDecimal(ds_results3.getCellData(row, "vatAmt"));
    ds_results3.setCellData(row, "sumSellAmt", parseInt(sellAmt.plus(vatAmt).toString()));
  }
  if (colid == "sellUpr") {
    //금액분할시 세팅 (sellUpr)
    if (ds_results3.getCellData(row, "volAmtDivsClsCd") == "A" && ds_results3.getCellData(row, "bilgTrgtOdrNo") != "") {
      var P_sellUpr = ds_results3.getCellData(scwin.fitRow, "sellUpr");
      var C_orgSellUpr = Number(ds_results3.getCellData(row, "sellUpr")) - eval(olddata);
      //원본Row 보다 단가가 클경우
      if (C_orgSellUpr > P_sellUpr) {
        $c.gus.cfAlertMsg($p, "분할 금액이 원본 금액을 초과할수 없습니다.");
        ds_results3.setCellData(row, "sellUpr", olddata);
        return;
      }
      var P_orgSellUpr = Number(ds_results3.getCellData(scwin.fitRow, "sellUpr")) + eval(olddata);
      if (ds_results3.getCellData(row, "sellUpr") <= P_orgSellUpr) {
        let sellUpr = $p.bigDecimal(ds_results3.getCellData(row, "sellUpr"));
        let sellVol = $p.bigDecimal(ds_results3.getCellData(row, "sellVol"));
        let fitRowsellUpr = $p.bigDecimal(ds_results3.getCellData(scwin.fitRow, "sellUpr"));
        let fitRowsellVol = $p.bigDecimal(ds_results3.getCellData(scwin.fitRow, "sellVol"));
        ds_results3.setCellData(scwin.fitRow, "sellUpr", P_orgSellUpr - Number(ds_results3.getCellData(row, "sellUpr")));
        ds_results3.setCellData(scwin.fitRow, "sellAmt", parseInt(fitRowsellUpr.times(fitRowsellVol)));
        ds_results3.setCellData(row, "sellAmt", parseInt(sellUpr.times(sellVol)));
        let fitRowsellAmt = $p.bigDecimal(ds_results3.getCellData(scwin.fitRow, "sellAmt"));
        let sellAmt = $p.bigDecimal(ds_results3.getCellData(row, "sellAmt"));

        //원본 ROW 공급가액,부가세,금액 계산
        if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
          if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
            ds_results3.setCellData(row, "vatAmt", 0);
          } else {
            ds_results3.setCellData(scwin.fitRow, "vatAmt", parseInt(fitRowsellAmt.times("0.1").toString()));
          }
        } else {
          ds_results3.setCellData(scwin.fitRow, "vatAmt", 0);
        }
        let fitRowvatAmt = $p.bigDecimal(ds_results3.getCellData(scwin.fitRow, "vatAmt"));
        ds_results3.setCellData(scwin.fitRow, "sumSellAmt", parseInt(fitRowsellAmt.plus(fitRowvatAmt).toString()));

        //분할 ROW 공급가액,부가세,금액 계산
        if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
          if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
            ds_results3.setCellData(row, "vatAmt", 0);
          } else {
            ds_results3.setCellData(row, "vatAmt", parseInt(sellAmt.times("0.1").toString()));
          }
        } else {
          ds_results3.setCellData(row, "vatAmt", 0);
        }
        let vatAmt = $p.bigDecimal(ds_results3.getCellData(row, "vatAmt"));
        ds_results3.setCellData(row, "sumSellAmt", parseInt(sellAmt.plus(vatAmt).toString()));
      }
    } else {
      //공급가액,부가세,금액 계산                            
      let sellUpr = $p.bigDecimal(ds_results3.getCellData(row, "sellUpr"));
      let sellVol = $p.bigDecimal(ds_results3.getCellData(row, "sellVol"));
      ds_results3.setCellData(row, "sellAmt", parseInt(sellUpr.times(sellVol)));
      let sellAmt = $p.bigDecimal(ds_results3.getCellData(row, "sellAmt"));
      if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
        if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
          ds_results3.setCellData(row, "vatAmt", 0);
        } else {
          ds_results3.setCellData(row, "vatAmt", parseInt(sellAmt.times("0.1").toString()));
        }
      } else {
        ds_results3.setCellData(row, "vatAmt", 0);
      }
      let vatAmt = $p.bigDecimal(ds_results3.getCellData(row, "vatAmt"));
      ds_results3.setCellData(row, "sumSellAmt", parseInt(sellAmt.plus(vatAmt).toString()));
    }

    //금액분할시 세팅(sellAmt)    
  } else if (colid == "sellAmt") {
    if (ds_results3.getCellData(row, "volAmtDivsClsCd") == "A" && ds_results3.getCellData(row, "bilgTrgtOdrNo") != "") {
      var P_sellAmt = ds_results3.getCellData(scwin.fitRow, "sellAmt");
      var C_orgSellAmt = Number(ds_results3.getCellData(row, "sellAmt")) - eval(olddata);

      //원본Row 보다 금액이 클경우
      if (C_orgSellAmt > P_sellAmt) {
        $c.gus.cfAlertMsg($p, "분할 금액이 원본 금액을 초과할수 없습니다.");
        ds_results3.setCellData(row, "sellAmt", olddata);
        return;
      }
      var P_orgSellAmt = Number(ds_results3.getCellData(scwin.fitRow, "sellAmt")) + eval(olddata);
      if (ds_results3.getCellData(row, "sellAmt") <= P_orgSellAmt) {
        ds_results3.setCellData(scwin.fitRow, "sellAmt", P_orgSellAmt - Number(ds_results3.getCellData(row, "sellAmt")));
        ds_results3.setCellData(scwin.fitRow, "sellUpr", Number(ds_results3.getCellData(scwin.fitRow, "sellAmt")) / Number(ds_results3.getCellData(scwin.fitRow, "sellVol")));
        ds_results3.setCellData(row, "sellUpr", Number(ds_results3.getCellData(row, "sellAmt")) / Number(ds_results3.getCellData(row, "sellVol")));

        //원본 ROW 공급가액,부가세,금액 계산
        if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
          if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
            ds_results3.setCellData(row, "vatAmt", 0);
          } else {
            ds_results3.setCellData(scwin.fitRow, "vatAmt", Number(ds_results3.getCellData(scwin.fitRow, "sellAmt")) * 0.1);
          }
        } else {
          ds_results3.setCellData(scwin.fitRow, "vatAmt", 0);
        }
        ds_results3.setCellData(scwin.fitRow, "sumSellAmt", Number(ds_results3.getCellData(scwin.fitRow, "sellAmt")) + Number(ds_results3.getCellData(scwin.fitRow, "vatAmt")));

        //분할 ROW 공급가액,부가세,금액 계산
        if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
          if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
            ds_results3.setCellData(row, "vatAmt", 0);
          } else {
            ds_results3.setCellData(row, "vatAmt", Number(ds_results3.getCellData(row, "sellAmt")) * 0.1);
          }
        } else {
          ds_results3.setCellData(row, "vatAmt", 0);
        }
        ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
      }
    } else {
      if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
        if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
          ds_results3.setCellData(row, "vatAmt", 0);
        } else {
          ds_results3.setCellData(row, "vatAmt", Number(ds_results3.getCellData(row, "sellAmt")) * 0.1);
        }
      } else {
        ds_results3.setCellData(row, "vatAmt", 0);
      }
      ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
    }
  } else if (colid == "vatAmt") {
    ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
  } else if (colid == "scRt") {
    ds_results3.setCellData(row, "sellUpr", Number(ds_results3.getCellData(row, "sellUpr")) * (Number(ds_results3.getCellData(row, "scRt")) / 100));
    ds_results3.setCellData(row, "sellAmt", Number(ds_results3.getCellData(row, "sellUpr")) * Number(ds_results3.getCellData(row, "sellVol")));
    if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
      if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
        ds_results3.setCellData(row, "vatAmt", 0);
      } else {
        ds_results3.setCellData(row, "vatAmt", Number(ds_results3.getCellData(row, "sellAmt")) * 0.1);
      }
    } else {
      ds_results3.setCellData(row, "vatAmt", 0);
    }
    ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
    if (ds_results3.getCellData(row, "dcScCd") == '0256') {
      if (ds_results3.getCellData(row, "scRt") > 0) {
        ds_results3.setCellData(row, "scRt", Number(ds_results3.getCellData(row, "scRt")) * -1);
      }
    } else {
      if (ds_results3.getCellData(row, "scRt") < 0) {
        ds_results3.setCellData(row, "scRt", Number(ds_results3.getCellData(row, "scRt")) * -1);
      }
    }
  } else if (colid == "odrNo") {
    dma_search.set("odrNo", ds_results3.getCellData(row, "odrNo"));
    scwin.keepOdrRow = row;
    await $c.sbm.execute($p, sbm_odrSearch);
  } else if (colid == "commSeq") {
    var isCntr = 'TRUE';
    for (var i = 0; i < ds_results2.getTotalRow(); i++) {
      if (ds_results2.getCellData(i, "commSeq") != ds_results3.getCellData(row, "commSeq")) {
        isCntr = 'FALSE';
      } else {
        ds_results3.setCellData(row, "sellCommNo", ds_results2.getCellData(i, "commCd"));
        isCntr = 'TRUE';
        break;
      }
    }
    if (isCntr == 'TRUE' && ds_results3.getCellData(row, "sellUnitCd") != '') {
      //매출물량 세팅
      scwin.f_SetSellVol(row);
    }
  } else if (colid == "adptExchRt") {
    ds_results3.setCellData(row, "sellAmt", Number(ds_results3.getCellData(row, "sellAmtFcrc")) * Number(ds_results3.getCellData(row, "adptExchRt")));
    ds_results3.setCellData(row, "vatAmt", 0);
    ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
  } else if (colid == "sellUnitCd") {
    //매출물량 세팅
    scwin.f_SetSellVol(row);
  } else if (colid == "crcCd") {
    if (ds_results3.getCellData(row, "crcCd") != "KRW") {
      ds_results3.setCellData(row, "sellAmtFcrc", Number(ds_results3.getCellData(row, "sellUpr")) * Number(ds_results3.getCellData(row, "sellVol")));
      ds_results3.setCellData(row, "sellAmt", ds_results3.getCellData(row, "sellAmtFcrc") * ds_results3.getCellData(row, "adptExchRt"));
      ds_results3.setCellData(row, "vatAmt", 0);
      ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
    } else {
      ds_results3.setCellData(row, "sellAmtFcrc", 0);
      ds_results3.setCellData(row, "adptExchRt", 0);
      ds_results3.setCellData(row, "sellAmt", Number(ds_results3.getCellData(row, "sellUpr")) * Number(ds_results3.getCellData(row, "sellVol")));
      if (ds_results1.getCellData(0, "taxnClsCd") == "01") {
        if (ds_results3.getCellData(row, "sellItemCd") == "0255") {
          ds_results3.setCellData(row, "vatAmt", 0);
        } else {
          ds_results3.setCellData(row, "vatAmt", Number(ds_results3.getCellData(row, "sellAmt")) * 0.1);
        }
      } else {
        ds_results3.setCellData(row, "vatAmt", 0);
      }
      ds_results3.setCellData(row, "sumSellAmt", Number(ds_results3.getCellData(row, "sellAmt")) + Number(ds_results3.getCellData(row, "vatAmt")));
    }
  }
};
scwin.gr_results2_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_results2.getColumnID(columnIndex);
  if (columnId == "outIntendDt") {
    // TODO: calendar popup for grid cell
  }
  if (columnId == "commCd") {
    scwin.f_Popup(2);
  }
};
scwin.gr_results3_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_results3.getColumnID(columnIndex);
  if (columnId == "wrkStDt" || columnId == "wrkEndDt" || columnId == "rsltsStdDt") {
    // TODO: calendar popup for grid cell
  }
  if (columnId == "eqKndCd") {
    scwin.f_Popup(1);
  }
};
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), txt_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_bilgClntNm, ed_bilgClntNo, 1, false);
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, txt_bilgClntNm, 1, true);
};
scwin.udc_pldgClnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pldgClntNo.getValue(), txt_pldgClntNm.getValue(), 'F', 'F');
};
scwin.udc_pldgClnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_pldgClntNm, ed_pldgClntNo, 2, false);
};
scwin.udc_pldgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pldgClntNo, txt_pldgClntNm, 2);
};
scwin.udc_bilgLodept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgLodeptCd.getValue(), txt_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_bilgLodept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_bilgLodeptNm, ed_bilgLodeptCd, 3, false);
};
scwin.udc_bilgLodept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, txt_bilgLodeptNm, 3);
};
scwin.gr_results2_onrowindexchange = async function (row, oldRow) {
  if (row > -1) {
    if (ds_results1.getCellData(0, "odrKndCd") == "CK") {
      gr_results2.setColumnEnableColumn("commCd", "Type", true);
    } else {
      gr_results2.setColumnEnableColumn("commCd", "Type", false);
    }
    if (ds_results2.getCellData(row, "outLimit") != undefined) {
      if (ds_results2.getCellData(row, "outLimit").length == 8) {
        txt_outLimit_adjAmt.setValue($c.gus.cfGetFormatStr($p, ds_results2.getCellData(row, "outLimit"), "####/##/##") + " | " + $c.gus.cfInsertComma($p, ds_results2.getCellData(row, "adjAmt")));
      } else {
        txt_outLimit_adjAmt.setValue(ds_results2.getCellData(row, "outLimit") + " | " + $c.gus.cfInsertComma($p, ds_results2.getCellData(row, "adjAmt")));
      }
    }
    txt_adjQty.setValue($c.gus.cfInsertComma($p, ds_results2.getCellData(row, "adjQty")));
    txt_adjWt.setValue($c.gus.cfInsertComma($p, ds_results2.getCellData(row, "adjWt")));
    txt_adjCbm.setValue($c.gus.cfInsertComma($p, ds_results2.getCellData(row, "adjCbm")));
    txt_blNo.setValue(ds_results2.getCellData(row, "blNo"));
    txt_dsmbrkFrgtCd.setValue(ds_results2.getCellData(row, "dsmbrkFrgtCd"));
    txt_mcomAssgnClsCd.setValue(ds_results2.getCellData(row, "mcomAssgnClsCd"));
    if (ds_results2.getCellData(row, "arrvlportDt") != undefined) {
      txt_arrvlportDt.setValue(ds_results2.getCellData(row, "arrvlportDt").length == 8 ? $c.gus.cfGetFormatStr($p, ds_results2.getCellData(row, "arrvlportDt"), "####/##/##") : ds_results2.getCellData(row, "arrvlportDt"));
    }
    txt_crryoutAdmitNo.setValue(ds_results2.getCellData(row, "crryoutAdmitNo"));
    if (ds_results2.getCellData(row, "admitDropDt") != undefined) {
      txt_admitDropDt.setValue(ds_results2.getCellData(row, "admitDropDt").length == 8 ? $c.gus.cfGetFormatStr($p, ds_results2.getCellData(row, "admitDropDt"), "####/##/##") : ds_results2.getCellData(row, "admitDropDt"));
    }
    txt_taxnPrcSum.setValue($c.gus.cfInsertComma($p, ds_results2.getCellData(row, "taxnPrcSum")));
    txt_cstmdtAmt.setValue($c.gus.cfInsertComma($p, ds_results2.getCellData(row, "cstmdtAmt")));
    dma_bulkOutHistoryCond.setJSON(ds_results2.getRowJSON(row));
    await $c.sbm.execute($p, sbm_retrieveBulkOutHistory);
  }
};
scwin.btn_results2Sort_onclick = function (e) {
  $c.gus.cfShowSortPopup($p, gr_results2);
};
scwin.btn_Create_top_onclick = function (e) {
  scwin.f_Create();
};

//as-is ds_results3 OnRowPosChanged
scwin.ds_results3_onrowpositionchange = function (info) {
  let row = info.newRowIndex; //oldRowIndex

  if (scwin.fn_result1_rowreadonly(row)) {
    return;
  }
  if ((ds_results3.getCellData(row, "volAmtDivsClsCd") == "A" || ds_results3.getCellData(row, "volAmtDivsClsCd") == "V") && ds_results3.getCellData(row, "bilgTrgtOdrNo") == "") {
    for (var i = 0; i < ds_results3.getTotalRow(); i++) {
      if (ds_results3.getCellData(row, "odrNo") == ds_results3.getCellData(i, "bilgTrgtOdrNo") && ds_results3.getCellData(row, "sellSeq") == ds_results3.getCellData(i, "bilgTrgtSellSeq") && ds_results3.getRowStatus(i) == "C") {
        //gr_results3.ColumnProp('choice','Edit') = "None";
        gr_results3.setRowReadOnly(i, true);
        return;
      }
    }
    let arrReadColId = ["sellItemCd", "sellVol", "sellUpr"];
    arrReadColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, true));
    let arrEditColId = ["sellAmt", "vatAmt", "odrNo", "commSeq", "sellAmtFcrc", "crcCd", "eqKndCd", "rsltsStdDt"];
    arrEditColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, false));
  } else if (ds_results3.getCellData(row, "volAmtDivsClsCd") == "A") {
    scwin.f_findParentRow(row);
    let arrReadColId = ["sellItemCd", "sellVol", "odrNo", "commSeq"];
    arrReadColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, true));
    let arrEditColId = ["sellUpr", "sellAmt", "vatAmt", "sellAmtFcrc", "crcCd", "eqKndCd", "rsltsStdDt"];
    arrEditColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, false));
  } else if (ds_results3.getCellData(row, "volAmtDivsClsCd") == "V") {
    scwin.f_findParentRow(row);
    let arrReadColId = ["sellItemCd", "sellVol", "sellUpr", "sellAmt", "vatAmt", "odrNo", "commSeq", "sellAmtFcrc", "crcCd", "eqKndCd", "rsltsStdDt"];
    arrReadColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, true));
  } else if (ds_results3.getCellData(row, "volAmtDivsClsCd") == "R") {
    gr_results3.setCellReadOnly(row, "commSeq", true);
    let arrEditColId = ["sellItemCd", "sellVol", "sellUpr", "sellAmt", "vatAmt", "odrNo", "sellAmtFcrc", "crcCd", "eqKndCd", "rsltsStdDt"];
    arrEditColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, false));
  } else {
    let arrReadColId = ["odrNo"];
    arrReadColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, true));
    let arrEditColId = ["sellItemCd", "sellVol", "sellUpr", "sellAmt", "vatAmt", "sellAmtFcrc", "crcCd", "eqKndCd", "rsltsStdDt"];
    arrEditColId.forEach(pColId => gr_results3.setCellReadOnly(row, pColId, false));
    if (ds_results3.getCellData(row, "addRowYn") == "N") {
      gr_results3.setCellReadOnly(row, "commSeq", true);
    } else {
      gr_results3.setCellReadOnly(row, "commSeq", false);
    }
  }
};

//ds_results1 의 outAdjmStsCd 값에 따른  ds_results3 readonly 처리.
scwin.fn_result1_rowreadonly = function (row) {
  if (ds_results3.getRowStatus(row) == "C") {
    return false;
  }
  let returnBoolean = false;
  if (ds_results1.getCellData(0, "outAdjmStsCd") == "01") {
    if (ds_results3.getCellData(row, "outIntendNo") == ds_results1.getCellData(0, "outIntendNo") || ds_results3.getCellData(row, "outIntendNo") == "0" || ds_results3.getCellData(row, "outIntendNo") == "") {
      if (ds_results3.getCellData(row, "dcsnClsCd") != "1") {
        gr_results3.setRowReadOnly(row, true);
        returnBoolean = true;
      } else {
        gr_results3.setRowReadOnly(row, false);
      }
    } else {
      gr_results3.setRowReadOnly(row, true);
      returnBoolean = true;
    }
  } else if (ds_results1.getCellData(0, "outAdjmStsCd") == "02") {
    if (ds_results3.getCellData(row, "outIntendNo") == ds_results1.getCellData(0, "outIntendNo") || ds_results3.getCellData(row, "outIntendNo") == "0" || ds_results3.getCellData(row, "outIntendNo") == "") {
      if (ds_results3.getCellData(row, "dcsnClsCd") != "1") {
        gr_results3.setRowReadOnly(row, true);
        returnBoolean = true;
      } else {
        gr_results3.setRowReadOnly(row, false);
      }
    } else {
      gr_results3.setRowReadOnly(row, true);
      returnBoolean = true;
    }
  } else if (ds_results1.getCellData(0, "outAdjmStsCd") == "03") {
    gr_results3.setRowReadOnly(row, true);
    returnBoolean = true;
  }
  return returnBoolean;
};
scwin.ds_results3_ondataload = function () {
  // ds_results3 OnLoadCompleted
  scwin.f_totalCal();
  scwin.f_RetrieveSellUnitCd();
  let rowCnt3 = ds_results3.getRowCount();
  if (rowCnt3 > 0) {
    let maxRsltsStdDt = "";
    for (let i = 0; i < ds_results3.getRowCount(); i++) {
      let val = ds_results3.getCellData(i, "rsltsStdDt");
      if (val > maxRsltsStdDt) maxRsltsStdDt = val;
      if (ds_results3.getCellData(i, "rowColor") == "GRAY") {
        gr_results3.setRowBackgroundColor(i, "#DDDDDD");
      }
      //gr_results3.setRowReadOnly(i, true);
    }
    if (maxRsltsStdDt == "") {
      ica_rsltsStdDt.setValue(scwin.sCurrDate);
    } else {
      ica_rsltsStdDt.setValue(maxRsltsStdDt);
    }
  } else {
    ica_rsltsStdDt.setValue(scwin.sCurrDate);
  }
  // $c.gus.cfGoPrevPosition(ds_results3, scwin.prevRow);
};
scwin.ds_results2_ondataload = function () {
  for (var i = 0; i < ds_results2.getTotalRow(); i++) {
    if (ds_results2.getCellData(i, "outIntendNo") == "") {
      ds_results2.setCellData(i, "outIntendDt", scwin.sCurrDate);
      ds_results2.setCellData(i, "qty", ds_results2.getCellData(i, "odrQty") - ds_results2.getCellData(i, "adjQty"));
    }
    if (ds_results2.getCellData(i, "outIntendNo") != ds_results1.getCellData(0, "outIntendNo")) {
      ds_results2.setCellData(i, "qty", ds_results2.getCellData(i, "odrQty") - ds_results2.getCellData(i, "adjQty"));
    }
    if (ds_results2.getCellData(i, "odrQty") == 0) {
      ds_results2.setCellData(i, "wt", ds_results2.getCellData(i, "odrWt") - ds_results2.getCellData(i, "adjWt"));
      ds_results2.setCellData(i, "cbm", ds_results2.getCellData(i, "odrCbm") - ds_results2.getCellData(i, "adjCbm"));
    }
    ds_results2.setCellData(i, "cstmdtAmt1", ds_results2.getCellData(i, "cstmdtAmt"));
  }
  if (ds_results2.getCellData(0, "inDt") == "") {
    ica_inIntendDt.setValue(ds_results1.getCellData(0, "arrvlportDt"));
  } else {
    ica_inIntendDt.setValue(ds_results2.getCellData(0, "inDt"));
  }
  scwin.f_ChkOutPsbl();
};
scwin.btn_pldgMgnt_onclick = function (e) {
  scwin.f_pldgMgnt();
};
scwin.chk_fireAmt_onchange = function (info) {
  scwin.f_clickFireAmt();
};
scwin.f_numberFormatter = function (value) {
  if (!$c.gus.cfIsNull($p, value)) {
    return $c.num.formatNumber($p, value);
  } else {
    return 0;
  }
};
scwin.sbm_retrieveBulkOutHistory_submitdone = function (e) {
  txt_gr_BulkOutHistoryListCnt.setValue(ds_BulkOutHistoryList.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고예정번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_outIntendNo',placeholder:'',style:'width: 150px;',mandatory:'true',maxByteLength:'10',allowChar:'A-Z0-9',title:'출고예정번호'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn pt-blue',id:'btn_Create_top',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_Create_top_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:160px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:160px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:160px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고예정번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_outIntendNo',label:'text',ref:'data:ds_results1.outIntendNo',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgLodept',codeId:'ed_bilgLodeptCd',nameId:'txt_bilgLodeptNm',popupID:'',style:'',class:'w250',refDataCollection:'ds_results1',code:'bilgLodeptCd',name:'bilgLodeptNm',selectID:'retrieveOpDeptCdInfo',maxlengthCode:'4',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent',validTitle:'청구부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_dptWrkPlNm1',label:'text',ref:'data:ds_results1.dptWrkPlNm',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group w250',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_odrNo',placeholder:'',style:'',ref:'data:ds_results1.odrNo',mandatory:'true',title:'오더번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_odrNoPopUp',style:'',type:'button','ev:onclick':'scwin.btn_odrNoPopUp_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',id:'btn_odrNoRetrieve',style:'',type:'button','ev:onclick':'scwin.btn_odrNoRetrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_ctrtNo',label:'text',ref:'data:ds_results1.ctrtNo',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선청구 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_prebilgClsCd',ref:'data:ds_results1.prebilgClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true',objType:'Data','ev:onviewchange':'scwin.rd_prebilgClsCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선청구'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClnt',codeId:'ed_bilgClntNo',nameId:'txt_bilgClntNm',popupID:'',style:'',class:'w250',refDataCollection:'ds_results1',code:'bilgClntNo',name:'bilgClntNm','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onviewchangeNameEvent',selectID:'retrieveClntInfo',allowCharCode:'A-Z0-9','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent',maxlengthCode:'6',UpperFlagCode:'1',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_taxnClsCd',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서번호/담보번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_slipPldgNo',label:'text',ref:'data:ds_results1.slipPldgNo',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_pldgClnt',codeId:'ed_pldgClntNo',nameId:'txt_pldgClntNm',popupID:'',style:'',class:'w250',refDataCollection:'ds_results1',code:'pldgClntNo',name:'pldgClntNm',maxlengthCode:'6',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_pldgClnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_pldgClnt_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_pldgClnt_onblurCodeEvent',selectID:'retrieveClntInfo',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_inIntendDt',style:'',ref:'data:ds_results1.inIntendDt',title:'입고예정일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'라인/모선/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_lineCd',label:'text',ref:'data:ds_results1.lineCd',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'txt_vsslCd',label:'text',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'txt_portcnt',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_selfClsNm',label:'text',ref:'data:ds_results1.selfClsNm',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_WrkPlNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'창고명(도착지)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_whouseClsNm',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고정산유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_outAdjmPatternCd',search:'start',objType:'key',style:'width: 250px;',submenuSize:'auto',ref:'data:ds_results1.outAdjmPatternCd',mandatory:'true',allOption:'',chooseOption:'',title:'출고정산유형',emptyItem:'true','ev:onchange':'scwin.acb_outAdjmPatternCd_onchange',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역(일괄)+보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역(분할)+보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고정산상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_outAdjmStsNm',label:'text',ref:'',style:'',userData2:''}},{T:1,N:'w2:textbox',A:{class:'',id:'txt_outPsblYn',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_summary',placeholder:'',style:'',ref:'data:ds_results1.summary'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고청구유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_fmlaPatternCd',label:'text',ref:'',style:'',userData2:''}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fmlaPatternCd',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역-계약'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0120'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역-육상기본'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0121'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역-부두장치장(부산)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0122'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역-타창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0123'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역-세관창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0124'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CNTR-타창고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0109'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동부제강선청구'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01C1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고기한',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_outIntendDt',style:'',ref:'data:ds_results1.outIntendDt',mandatory:'true',objType:'key',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적기준일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_rsltsStdDt',style:'',ref:'data:ds_results1.rsltsStdDt',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'실적기준일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급가액/부가세합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group w250',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_spplyAmt',placeholder:'',style:'text-align: right;',ref:'data:ds_results1.spplyAmt',dataType:'number',displayFormat:'#,###',byteCheckIgnoreChar:',',maxByteLength:'13',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vatAmt',placeholder:'',style:'text-align: right;',ref:'data:ds_results1.vatAmt',dataType:'number',displayFormat:'#,###',byteCheckIgnoreChar:',',maxByteLength:'13',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totalAmt',placeholder:'',style:'width: 150px;text-align: right;',byteCheckIgnoreChar:',',maxByteLength:'13',displayFormat:'#,###',readOnly:'true',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담보금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pldgAmt',placeholder:'',style:'width: 150px;',ref:'data:ds_results1.pldgAmt',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'txt_rmk',placeholder:'',style:'',ref:'data:ds_results1.rmk',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'위험구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_dangeCls',search:'start',style:'width: 150px;',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'출고예정정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_results2',gridDownFn:'scwin.f_toExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_results2',id:'gr_results2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false','ev:onrowindexchange':'scwin.gr_results2_onrowindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선택',width:'50',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'순번',width:'50',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'품명',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'품명명',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'하선물품<br/>코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',value:'FIO<br/>/BT',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'입고일자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',value:'오더물량',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',id:'column9',value:'출고예정물량',displayMode:'label',colSpan:'7',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',id:'column10',displayMode:'label',value:'정산(보관료)물량',colSpan:'5',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',displayMode:'label',value:'B/L',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column12',displayMode:'label',value:'보운',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',displayMode:'label',value:'배정',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column14',displayMode:'label',value:'입항일자',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',id:'column15',displayMode:'label',value:'면장번호',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column16',value:'면허일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'감정가',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column18',value:'관세가',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column18',displayMode:'label',value:'수량'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',displayMode:'label',value:'중량'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column20',displayMode:'label',value:'CBM'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label',value:'출고예정번호'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label',value:'출고기한',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label',value:'수량',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label',value:'중량',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label',value:'CBM',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label',value:'감정가',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label',value:'관세가',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label',value:'출고기한'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label',value:'수량'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label',value:'중량'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',displayMode:'label',value:'CBM'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column32',displayMode:'label',value:'보관료'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'text',width:'50',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'textImage',width:'70',textAlign:'left',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dsmbrkFrgtCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fioBtClsCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'text',width:'100',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrQty',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',maxLength:'15',ignoreChar:'.'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWt',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number',maxLength:'15.3',applyFormat:'all'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrCbm',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number',maxLength:'15.3'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outIntendNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'outIntendDt',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',emptyItem:'true',emptyValue:'0',maxLength:'15',displayFormat:'#,##0',ignoreChar:'.+'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number',maxLength:'15.3',applyFormat:'all',ignoreChar:'+'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number',maxLength:'15.3',applyFormat:'all',ignoreChar:'+'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'jdgAmt',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0',maxLength:'15',ignoreChar:'.+'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmdtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',maxLength:'15',ignoreChar:'.+'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outLimit',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adjQty',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'adjWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adjCbm',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'adjAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bondTransExpireDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mcomAssgnClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrvlportDt',displayMode:'label',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',id:'crryoutAdmitNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'admitDropDt',displayMode:'label',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'taxnPrcSum',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmdtAmt1',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_gr_results2Cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'div_detailTable',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox mt32'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'B/L',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_blNo',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하선물품',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_dsmbrkFrgtCd',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'당사배정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_mcomAssgnClsCd',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입항일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_arrvlportDt',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'면장번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'txt_crryoutAdmitNo',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'면허일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_admitDropDt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'감정가',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_taxnPrcSum',label:'text',ref:'',style:'width: 100px',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관세가',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_cstmdtAmt',label:'text',ref:'',style:'text-align: right;',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출고기한│보관료',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_outLimit_adjAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정산수량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_adjQty',label:'text',ref:'',style:'width: 100px;',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정산중량',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_adjWt',label:'text',ref:'',style:'width: 100px;',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정산CBM',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'txt_adjCbm',label:'text',ref:'',style:'text-align: right;',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_BulkOutHistoryList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BulkOutHistoryList',id:'gr_BulkOutHistoryList',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioDt',inputType:'text',value:'출고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsWt',inputType:'text',value:'중량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsCbm',inputType:'text',value:'CBM',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',value:'보관료',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioDt',inputType:'text',width:'100',readOnly:'true',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsWt',inputType:'text',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0.000',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsCbm',inputType:'text',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0.000',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',width:'80',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_gr_BulkOutHistoryListCnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_results3',gridDownFn:'scwin.f_toExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results3',id:'gr_results3',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true',focusMode:'row','ev:ontextimageclick':'scwin.gr_results3_ontextimageclick','ev:oncellclick':'scwin.gr_results3_oncellclick','ev:oneditend':'scwin.gr_results3_oneditend','ev:onviewchange':'scwin.gr_results3_onviewchange',keyMoveEditMode:'true',readOnlyTabIgnore:'true',dataName:'매출정보',validExp:'sellItemCd:매출항목:yes,commSeq:순번:yes,sellUnitCd:적용기준:yes,wrkStDt:작업시작일자:no:date=YYYYMMDD,wrkEndDt:작업종료일자:no:date=YYYYMMDD'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',value:'선택'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prebilgYn',inputType:'text',value:'실적<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'text',value:'매출항목',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScCd',inputType:'text',value:'할인할증',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'text',value:'순번',width:'50',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNo',inputType:'text',value:'품명',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품명명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scRt',inputType:'text',value:'할증율',width:'80',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnClsNm',inputType:'text',value:'확정구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'text',value:'적용기준',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVol',value:'매출물량',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',value:'단가',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',value:'공급가액',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',value:'부가세',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmtFcrc',value:'외화금액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adptExchRt',value:'환율',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crcCd',value:'통화코드',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',value:'중량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',value:'CBM',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'odrNo',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndCd',value:'중기종류',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndNm',value:'중기종류명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',value:'중기규격코드',displayMode:'label',hidden:'true',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmNm',value:'중기규격',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'jdgAmt',value:'감정가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmdtAmt',value:'관세가',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrowDdCnt',value:'경과일수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'freeday',value:'면제일수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'basisDdCnt',value:'기본일수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdDay',value:'적용일수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shpCoDdCnt',value:'선사일수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rofDdCnt',value:'귀책일수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'valmTrf',value:'종가요율',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'meraTrf',value:'종량요율',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strDeg',value:'보관차수',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outIntendNo',value:'출고예정번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgLodeptCd',value:'청구부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNo',value:'청구거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'bilgClntNm',value:'청구거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgUnitCd',value:'청구단위코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'volAmtDivsClsNm',value:'분할구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',value:'BL-NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rsltsStdDt',value:'실적기준일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStDt',value:'작업시작일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkEndDt',value:'작업종료일자',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prebilgYn',inputType:'select',width:'70',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellItemCd',inputType:'select',width:'100',textAlign:'left',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScCd',inputType:'select',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNo',inputType:'text',width:'90',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'180',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scRt',inputType:'text',width:'80',textAlign:'right',displayFormat:'#,##0.000',dataType:'float',excelCellType:'number',maxLength:'3.3',applyFormat:'all'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnClsNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'select',width:'100',allOption:'',ref:'',selectedData:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVol',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0.000',excelCellType:'number',maxLength:'15.3',applyFormat:'all',ignoreChar:'+'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'bigDecimal',excelCellType:'number',maxLength:'15.2',applyFormat:'all',ignoreChar:'+-'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',maxLength:'15',allowChar:'0-9',ignoreChar:'.+'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',maxLength:'15',allowChar:'0-9',ignoreChar:'.+'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumSellAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmtFcrc',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number',maxLength:'15.3',applyFormat:'all',ignoreChar:'+'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adptExchRt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0.0000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0',excelCellType:'number',maxLength:'15.0',applyFormat:'all',ignoreChar:'.+'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',excelCellType:'number',maxLength:'15.3',applyFormat:'all',ignoreChar:'+'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number',maxLength:'15.3',applyFormat:'all',ignoreChar:'+'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'eqKndCd',displayMode:'label',textAlign:'left',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'jdgAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',maxByteLength:'15',applyFormat:'all',imageHeight:'0',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmdtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',maxLength:'15',ignoreChar:'.',applyFormat:'all'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arrowDdCnt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'3',applyFormat:'all',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'freeday',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'3',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'basisDdCnt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'3',applyFormat:'all',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stdDay',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'3',applyFormat:'all',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shpCoDdCnt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'3',applyFormat:'all',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rofDdCnt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'3',applyFormat:'all',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'valmTrf',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'6',ignoreChar:'+'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'meraTrf',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number',maxLength:'6',ignoreChar:'+',checkcomboboxVisibleRowNum:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strDeg',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',maxLength:'3',ignoreChar:'.'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outIntendNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgLodeptCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNo',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgUnitCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'volAmtDivsClsNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'rsltsStdDt',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'wrkStDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'wrkEndDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column78',displayMode:'label',textAlign:'right',expression:'sum(\'sellVol\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column72',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',expression:'sum(\'vatAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',expression:'sum(\'sumSellAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmtFcrc\')',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column60',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'sum(\'wt\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'sum(\'cbm\')',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column99',displayMode:'label',textAlign:'right',expression:'sum(\'jdgAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column96',displayMode:'label',textAlign:'right',expression:'sum(\'cstmdtAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column81',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column135',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column132',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column129',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column126',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_gr_results3Cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_BalUnpaid',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_BalUnpaid_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'끝전조정'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowDelUserAuth:'D',rowAddUserAuth:'C',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',btnRowAddObj:'btn_AddRow',btnRowDelObj:'btn_DeleteRow',gridID:'gr_results3',rowDelFunction:'scwin.f_DeleteRow',rowAddFunction:'scwin.f_AddRow',id:'udc_btnGrp',cancelFunction:'scwin.f_CancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_VolDivision',label:'삭제',type:'button',class:'btn ','ev:onclick':'scwin.btn_VolDivision_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물량분할'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_AmtDivision',label:'삭제',type:'button',class:'btn ','ev:onclick':'scwin.btn_AmtDivision_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금액분할'}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chk_fireAmt',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'','ev:onviewchange':'scwin.chk_fireAmt_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화재보험료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_RetrieveBulkSellingItem',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_RetrieveBulkSellingItem_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매출항목조회'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_CancelBulkSellingItem',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_CancelBulkSellingItem_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매출항목취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create',label:'저장',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',label:'저장',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Delete',label:'저장',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_outIndication',label:'삭제',type:'button',class:'btn ',userAuth:'P','ev:onclick':'scwin.btn_outIndication_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출고지시서발행'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_taxEstimat',label:'삭제',type:'button',class:'btn ',userAuth:'U','ev:onclick':'scwin.btn_taxEstimat_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서작성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_certiLink',label:'삭제',type:'button',class:'btn ',objType:'bDelete2','ev:onclick':'scwin.btn_certiLink_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서 연결'}]}]},{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_regstEmail',label:'삭제',type:'button',class:'btn ','ev:onclick':'scwin.btn_regstEmail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'E-mail등록'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'',class:'chk-grp',cols:'',value:'Y'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_hidden',popupID:'',selectID:'',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'width:%; height:px; ;visibility:hidden;'}}]}]}]}]}]}]}]}]})