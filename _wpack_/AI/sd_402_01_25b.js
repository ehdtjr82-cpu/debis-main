/*amd /AI/sd_402_01_25b.xml 83283 c72fa03f7d22d438dd2ea178588b474921d99b9aa12f6cdd3a986c7de2b5412a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndOdrNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgSellInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitySellSeq',name:'통합매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtAll',name:'통화코드에따른할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtAll',name:'통화코드에따른매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWtNm',name:'조건중량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgSellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'계약정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempSellInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitySellSeq',name:'통합매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtAll',name:'통화코드에따른할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtAll',name:'통화코드에따른매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWtNm',name:'조건중량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgSellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'계약정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitySellSeq',name:'통합매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtAll',name:'통화코드에따른할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtAll',name:'통화코드에따른매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWtNm',name:'조건중량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgSellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'계약정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'scSellAmt',name:'순수할인금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcScInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScSelpchItemCd',name:'할인할증매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScSelpchItemNm',name:'할인할증매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCtrtTrfSeq',name:'할인할증계약요율순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrfFcrc',name:'계약요율외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrfRt',name:'계약요율비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprtCnfrYn',name:'분리확인여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPathSeq',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'매출중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'계약정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellUnitCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crcCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condWt',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWt',name:'최소최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'계약정액정률구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcScCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempSellAmt',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveDiscountSurchargeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"},{"id":"ds_dcScInfo","key":"OUT_DS3"},{"id":"ds_wrkStpInfo","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"},{"id":"ds_dcScInfo","key":"OUT_DS3"},{"id":"ds_wrkStpInfo","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrreg.RegistDiscountSurchargeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_sellInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.wtDcScCd = "0086";
scwin.GsellAmt = 0;
scwin.GcntrSizCd = "";
scwin.GcntrTypCd = "";
scwin.GfullEmptyClsCd = "";
scwin.GfamtFratClsCd = "";
scwin.hid_odrKndCd = "";
scwin.hid_chkReterieve = "";
scwin.ODR_CNTR = "C";
scwin.onpageload = function () {
  scwin.f_set("INIT");
  let params = $c.data.getParameter($p);
  let odrNo = params && params.odrNo ? params.odrNo : "";
  let type = params && params.type ? params.type : "";
  ed_odrNo.setValue(odrNo);
  scwin.hid_chkReterieve = type;
  if (ed_odrNo.getValue() != "" && scwin.hid_chkReterieve == "retrieve") {
    scwin.f_Retrieve();
  }
};
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  let rtnList = [];
  let cd = "";
  let nm = "";
  if (flag != "SKIP") {
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = orgObjCd.getValue();
      nm = orgObjNm.getValue();
    }
  } else {
    cd = orgObjCd;
    nm = "";
  }
  switch (select_code) {
    case '1':
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveCtrtSelpchItemInfo', cd, nm, "T", "2", null, null, "3,4,5,6,7,8,9,10", ",,,,1", null, null, null, null, null, null, "할인할증,코드,코드명");
      scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.getUserData("hidVal")) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.getUserData("hidVal")) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.setUserData("hidVal", "");
  }
};
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]);
    orgObjNm.setValue(rtnList[1]);
    orgObjCd.setUserData("hidVal", rtnList[0]);
    orgObjNm.setUserData("hidVal", rtnList[1]);
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.setUserData("hidVal", "");
    orgObjNm.setUserData("hidVal", "");
  }
};
scwin.f_clearTabOrderInfo = function () {
  // TODO: parent.hid_odrNo 접근 불가 - 탭 구조 변경 필요
};
scwin.f_setTabOrderInfo = function (odrNo) {
  // TODO: parent.hid_odrNo 접근 불가 - 탭 구조 변경 필요
};
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_cndArea, null);
};
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "INIT":
      dma_cndOdrNo.undo();
      ds_orgSellInfo.removeAll();
      ds_tempSellInfo.removeAll();
      ds_sellInfo.removeAll();
      ds_dcScInfo.removeAll();
      ds_wrkStpInfo.removeAll();
      ds_selpchItemCd.removeAll();
      ds_ctrtWrkPathSeq.removeAll();
      ds_commCd.removeAll();
      ds_sellUnitCd.removeAll();
      ds_crcCd.removeAll();
      ds_condWt.removeAll();

      // TODO: td_ctrtClntNm, td_ctrtNo, td_bilgClntNm innerText 설정 - textbox ref 바인딩 필요

      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableAllBtn($p);
      $c.gus.cfEnableBtnOnly($p, [btnRetrieve]);
      gr_sellInfo.setReadOnly("grid", true);
      ed_odrNo.setFocus();
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableAllBtn($p);
      $c.gus.cfEnableBtnOnly($p, [btnRetrieve, btnUpdate]);
      gr_sellInfo.setReadOnly("grid", true);
      break;
    case "UPDATE":
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableAllBtn($p);
      $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
      gr_sellInfo.setReadOnly("grid", false);
      break;
  }
};
scwin.f_Retrieve = async function () {
  if (await $c.gus.cfValidate($p, [tbl_cndArea])) {
    let odrNo = ed_odrNo.getValue().trim();
    dma_cndOdrNo.set("odrNo", odrNo);
    dma_cndOdrNo.set("transCargoClsCd", scwin.ODR_CNTR);
    await $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_update = function () {
  scwin.f_set("UPDATE");
};
scwin.f_save = async function () {
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk) {
    if (ds_sellInfo.getUpdatedIndex().length > 0) {
      if (await $c.gus.cfValidate($p, [tbl_sellInfoArea, gr_sellInfo])) {
        if (!(await scwin.f_validate())) return;
        for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
          ds_sellInfo.setCellData(i, "sellAmt", ds_sellInfo.getCellData(i, "scSellAmt"));
          ds_sellInfo.setCellData(i, "scAmt", ds_sellInfo.getCellData(i, "scAmtAll"));
          ds_sellInfo.setCellData(i, "cntrSizCd", scwin.GcntrSizCd);
          ds_sellInfo.setCellData(i, "cntrTypCd", scwin.GcntrTypCd);
          ds_sellInfo.setCellData(i, "fullEmptyClsCd", scwin.GfullEmptyClsCd);
          if (parseInt(ds_sellInfo.getCellData(i, "scAmtAll")) != 0 && parseInt(ds_sellInfo.getCellData(i, "scRt")) != 0) {
            await $c.gus.cfAlertMsg($p, i + 1 + "번째 입력한 할증금액, 할증율중 한개의 값만 입력 하시기 바랍니다.");
            return;
          }
        }
        await $c.sbm.execute($p, sbm_save);
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["할인할증정보"]);
    }
  }
};
scwin.f_addRow = function () {
  let selpchItemCd = scwin.getComboValue(acb_selpchItemNm, "selpchItemCd");
  let ctrtWrkPathSeq = scwin.getComboValue(acb_ctrtWrkPathNm, "ctrtWrkPathSeq");
  ds_sellInfo.insertRow();
  let rowPos = ds_sellInfo.getRowPosition();
  ds_sellInfo.setCellData(rowPos, "odrNo", ed_odrNo.getValue());
  ds_sellInfo.setCellData(rowPos, "selpchItemCd", selpchItemCd);
  ds_sellInfo.setCellData(rowPos, "famtFratClsCd", scwin.GfamtFratClsCd);
  gr_sellInfo.setFocusedCell(rowPos, "dcScNm");
};
scwin.f_deleteRow = function () {
  let checkedRows = ds_sellInfo.getMatchedIndex("chk", "1", true);
  if (checkedRows && checkedRows.length > 0) {
    for (let i = checkedRows.length - 1; i >= 0; i--) {
      ds_sellInfo.removeRow(checkedRows[i]);
    }
  } else {
    let rowPos = ds_sellInfo.getRowPosition();
    if (rowPos >= 0) {
      ds_sellInfo.removeRow(rowPos);
    }
  }
};
scwin.f_undoRow = function () {
  ds_sellInfo.undoRow(ds_sellInfo.getRowPosition());
};
scwin.f_checkOdrStatus = async function () {
  let odrNo = ds_odrInfo.getCellData(0, "odrNo");
  let odrCompleteYn = ds_odrInfo.getCellData(0, "odrCompleteYn");
  let odrCnclYn = ds_odrInfo.getCellData(0, "odrCnclYn");
  if (odrCompleteYn == "1") {
    await $c.gus.cfAlertMsg($p, MSG_SD_WRN_001, [odrNo, "완료", "할인할증"]);
    $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
    return;
  }
  if (odrCnclYn == "1") {
    await $c.gus.cfAlertMsg($p, MSG_SD_WRN_001, ["취소", "할인할증"]);
    $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
    return;
  }
};
scwin.getComboValue = function (comboObj, colId) {
  let idx = comboObj.getSelectedIndex();
  if (idx < 0) return "";
  let dsId = "";
  if (comboObj == acb_selpchItemNm) {
    dsId = "ds_selpchItemCd";
  } else if (comboObj == acb_ctrtWrkPathNm) {
    dsId = "ds_ctrtWrkPathSeq";
  }
  if (dsId != "") {
    let ds = $p.getComponentById(dsId);
    if (ds && idx < ds.getRowCount()) {
      return ds.getCellData(idx, colId);
    }
  }
  return comboObj.getValue();
};
scwin.f_filter = function () {
  let selpchItemCd = scwin.getComboValue(acb_selpchItemNm, "selpchItemCd");
  let ctrtWrkPathSeq = scwin.getComboValue(acb_ctrtWrkPathNm, "ctrtWrkPathSeq");
  ds_sellInfo.setFilterByExpression("selpchItemCd == '" + selpchItemCd + "' && ctrtWrkPathSeq == '" + ctrtWrkPathSeq + "' && dcScCd != ''");
  scwin.f_createComboDsForGridByCond(ds_orgSellInfo, ds_sellUnitCd, "sellUnitCd");
  scwin.f_createComboDsForGridByCond(ds_orgSellInfo, ds_crcCd, "crcCd");
  scwin.f_createComboDsForCondWtGrid(ds_sellInfo, ds_condWt, "condWt");
  $c.gus.cfCopyDataSet($p, ds_sellInfo, ds_tempSellInfo, "copyHeader=yes");
  ds_dcScCd.removeAll();
  scwin.f_createComboDS(ds_sellInfo, ds_dcScCd, "dcScCd", "dcScNm");
  for (let i = 0; i < ds_dcScInfo.getRowCount(); i++) {
    let sameYn = "N";
    for (let j = 0; j < ds_dcScCd.getRowCount(); j++) {
      if (ds_dcScCd.getCellData(j, "dcScCd") == ds_dcScInfo.getCellData(i, "dcScSelpchItemCd")) {
        sameYn = "Y";
        break;
      }
    }
    if (ds_dcScInfo.getCellData(i, "dcScSelpchItemCd") != "" && sameYn == "N") {
      ds_dcScCd.insertRow();
      let newRow = ds_dcScCd.getRowCount() - 1;
      ds_dcScCd.setCellData(newRow, "dcScCd", ds_dcScInfo.getCellData(i, "dcScSelpchItemCd"));
      ds_dcScCd.setCellData(newRow, "dcScNm", ds_dcScInfo.getCellData(i, "dcScSelpchItemNm"));
    }
  }
  $c.gus.cfShowTotalRows($p, totalRows, ds_sellInfo.getRowCount());
  ds_sellInfo.removeFilterByExpression();
};
scwin.f_setCommCdToSellInfo = function (ds_sellInfoRowPos, ds_commCdRowPos, gubun) {
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellCommNo", ds_commCd.getCellData(ds_commCdRowPos, "sellCommNo"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellCommNm", ds_commCd.getCellData(ds_commCdRowPos, "sellCommNm"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "commSeq", ds_commCd.getCellData(ds_commCdRowPos, "commSeq"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "odrWrkPathSeq", ds_commCd.getCellData(ds_commCdRowPos, "odrWrkPathSeq"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "upperCommCd", ds_commCd.getCellData(ds_commCdRowPos, "upperCommCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "unitCd", ds_commCd.getCellData(ds_commCdRowPos, "unitCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellUnitCd", "VAN");
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "adptExchRt", ds_commCd.getCellData(ds_commCdRowPos, "adptExchRt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "crcCd", "KRW");
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "wrkStpCd", ds_commCd.getCellData(ds_commCdRowPos, "wrkStpCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "orgWt", ds_commCd.getCellData(ds_commCdRowPos, "wt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "orgSellUpr", ds_commCd.getCellData(ds_commCdRowPos, "sellUpr"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "famtFratClsCd", ds_commCd.getCellData(ds_commCdRowPos, "famtFratClsCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "ctrtClntNo", ds_commCd.getCellData(ds_commCdRowPos, "ctrtClntNo"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "reqClntNo", ds_commCd.getCellData(ds_commCdRowPos, "reqClntNo"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "bilgClntNo", ds_commCd.getCellData(ds_commCdRowPos, "bilgClntNo"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "bilgLodeptCd", ds_commCd.getCellData(ds_commCdRowPos, "bilgLodeptCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellLodeptCd", ds_commCd.getCellData(ds_commCdRowPos, "sellLodeptCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "transCargoClsCd", ds_commCd.getCellData(ds_commCdRowPos, "transCargoClsCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "odrDt", ds_commCd.getCellData(ds_commCdRowPos, "odrDt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "ctrtNo", ds_commCd.getCellData(ds_commCdRowPos, "ctrtNo"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "ctrtWrkPathSeq", ds_commCd.getCellData(ds_commCdRowPos, "ctrtWrkPathSeq"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "bizDomCd", ds_commCd.getCellData(ds_commCdRowPos, "bizDomCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "taxnClsCd", ds_commCd.getCellData(ds_commCdRowPos, "taxnClsCd"));
  if (gubun == "1") {
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmtAll", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmt", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmtFcrc", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scRt", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "minCondWt", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "maxCondWt", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "condWtNm", "");
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "famtFratClsCd", "");
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "wt", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellAmtAll", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellAmt", 0);
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellAmtFcrc", 0);
  }
};
scwin.f_setDcScInfoToSellInfo = function (ds_sellInfoRowPos, ds_dcScInfoRowPos) {
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "crcCd", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "crcCd"));
  if (ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "crcCd") == "KRW") {
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmtAll", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "ctrtTrf"));
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmt", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "ctrtTrf"));
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmtFcrc", 0);
  } else {
    let adptExchRt = ds_sellInfo.getCellData(ds_sellInfoRowPos, "adptExchRt");
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmtAll", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "ctrtTrf"));
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmt", (ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "ctrtTrf") * adptExchRt).toFixed(0));
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "scAmtFcrc", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "ctrtTrf"));
  }
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "scRt", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "ctrtTrfRt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "minCondWt", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "minCondWt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "maxCondWt", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "maxCondWt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "condWtNm", ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "minCondWt") + "~" + ds_dcScInfo.getCellData(ds_dcScInfoRowPos, "maxCondWt"));
  if (ds_sellInfo.getCellData(ds_sellInfoRowPos, "scAmt") > 0 && ds_sellInfo.getCellData(ds_sellInfoRowPos, "scRt") == 0) {
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "famtFratClsCd", "FM");
  } else if (ds_sellInfo.getCellData(ds_sellInfoRowPos, "scAmt") == 0 && ds_sellInfo.getCellData(ds_sellInfoRowPos, "scRt") > 0) {
    ds_sellInfo.setCellData(ds_sellInfoRowPos, "famtFratClsCd", "FR");
  }
};
scwin.f_setValue = function () {
  let sellRowPos = ds_sellInfo.getRowPosition();
  let dcScCd = ds_sellInfo.getCellData(sellRowPos, "dcScCd");
  let commCd = ds_sellInfo.getCellData(sellRowPos, "commCd");
  let sellCommNo = ds_sellInfo.getCellData(sellRowPos, "sellCommNo");
  let sellCommNm = ds_sellInfo.getCellData(sellRowPos, "sellCommNm");
  let commSeq = ds_sellInfo.getCellData(sellRowPos, "commSeq");
  if (dcScCd == "" && commCd != "") {
    for (let i = 0; i < ds_commCd.getRowCount(); i++) {
      if (ds_commCd.getCellData(i, "commCd") == commCd && ds_commCd.getCellData(i, "commSeq") == commSeq) {
        scwin.f_setCommCdToSellInfo(sellRowPos, i, "1");
        return;
      }
    }
  } else if (dcScCd != "" && commCd != "") {
    let commCdYn = "N";
    if (ds_dcScInfo.getRowCount() > 0) {
      for (let i = 0; i < ds_dcScInfo.getRowCount(); i++) {
        for (let j = 0; j < ds_commCd.getRowCount(); j++) {
          if (ds_commCd.getCellData(j, "commSeq") == commSeq && ds_dcScInfo.getCellData(i, "commCd") == commCd && ds_dcScInfo.getCellData(i, "dcScSelpchItemCd") == dcScCd) {
            scwin.f_setCommCdToSellInfo(sellRowPos, j);
            scwin.f_setDcScInfoToSellInfo(sellRowPos, i);
            commCdYn = "Y";
            scwin.f_calAmt();
            scwin.f_setEditByValue();
            return;
          }
        }
        if (commCdYn == "N") {
          let tempCommCdYn = "N";
          for (let j = 0; j < ds_commCd.getRowCount(); j++) {
            if (ds_commCd.getCellData(j, "commSeq") == commSeq && ds_dcScInfo.getCellData(i, "commCd") == commCd && ds_dcScInfo.getCellData(i, "dcScSelpchItemCd") == dcScCd) {
              scwin.f_setCommCdToSellInfo(sellRowPos, j);
              scwin.f_setDcScInfoToSellInfo(sellRowPos, i);
              tempCommCdYn = "Y";
              scwin.f_calAmt();
              scwin.f_setEditByValue();
              return;
            }
          }
          if (tempCommCdYn == "N") {
            for (let j = 0; j < ds_commCd.getRowCount(); j++) {
              if (ds_commCd.getCellData(j, "commCd") == commCd && ds_commCd.getCellData(j, "sellCommNm") == sellCommNm) {
                scwin.f_setCommCdToSellInfo(sellRowPos, j, "1");
                return;
              }
            }
          }
        }
      }
    } else {
      for (let i = 0; i < ds_commCd.getRowCount(); i++) {
        if (ds_commCd.getCellData(i, "commCd") == commCd && ds_commCd.getCellData(i, "commSeq") == sellCommNm) {
          scwin.f_setCommCdToSellInfo(sellRowPos, i);
          return;
        }
      }
    }
  }
};
scwin.f_validate = async function () {
  for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
    let dcScCd = ds_sellInfo.getCellData(i, "dcScCd");
    let sellCommNo = ds_sellInfo.getCellData(i, "sellCommNo");
    let commSeq = ds_sellInfo.getCellData(i, "commSeq");
    let wrkStpCd = ds_sellInfo.getCellData(i, "wrkStpCd");
    if (ds_sellInfo.getRowStatus(i) != "D") {
      for (let j = 0; j < ds_sellInfo.getRowCount(); j++) {
        if (ds_sellInfo.getRowStatus(j) != "D") {
          if (j != i) {
            if (ds_sellInfo.getCellData(j, "dcScCd") == dcScCd && ds_sellInfo.getCellData(j, "commSeq") == commSeq && ds_sellInfo.getCellData(j, "wrkStpCd") == wrkStpCd) {
              await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["할인할증", j + 1, "할증항목, 컨테이너번호, 작업단계"]);
              return false;
            }
            if (wrkStpCd == "") {
              if (ds_sellInfo.getCellData(j, "dcScCd") == dcScCd && ds_sellInfo.getCellData(j, "commSeq") == commSeq) {
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["할인할증", j + 1, "작업단계가 전체일경우는 할증항목, 컨테이너번호"]);
                return false;
              }
            }
          }
        }
      }
    }
    if (ds_sellInfo.getCellData(i, "scAmtAll") == 0 && ds_sellInfo.getCellData(i, "scRt") == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_013, ["할인할증", i + 1, "할증금액 또는 할증률", "0"]);
      return false;
    }
  }
  return true;
};
scwin.f_createComboDS = function (orgDs, comboDs, code, name) {
  comboDs.removeAll();
  for (let i = 0; i < orgDs.getRowCount(); i++) {
    let sameYn = "N";
    for (let j = 0; j < comboDs.getRowCount(); j++) {
      if (comboDs.getCellData(j, code) == orgDs.getCellData(i, code)) {
        sameYn = "Y";
        break;
      }
    }
    if (orgDs.getCellData(i, code) != "" && sameYn == "N") {
      comboDs.insertRow();
      let newRow = comboDs.getRowCount() - 1;
      comboDs.setCellData(newRow, code, orgDs.getCellData(i, code));
      comboDs.setCellData(newRow, name, orgDs.getCellData(i, name));
    }
  }
};
scwin.f_createCommCdComboDsForGridByCond = function (orgSellInfo, commCdDs) {
  let selpchItemCd = scwin.getComboValue(acb_selpchItemNm, "selpchItemCd");
  let ctrtWrkPathSeq = scwin.getComboValue(acb_ctrtWrkPathNm, "ctrtWrkPathSeq");
  commCdDs.removeAll();
  for (let i = 0; i < orgSellInfo.getRowCount(); i++) {
    if (orgSellInfo.getCellData(i, "selpchItemCd") == selpchItemCd && orgSellInfo.getCellData(i, "ctrtWrkPathSeq") == ctrtWrkPathSeq && orgSellInfo.getCellData(i, "dcScCd") == "") {
      let sameYn = "N";
      for (let j = 0; j < commCdDs.getRowCount(); j++) {
        if (commCdDs.getCellData(j, "commSeq") == orgSellInfo.getCellData(i, "commSeq")) {
          sameYn = "Y";
          break;
        }
      }
      if (orgSellInfo.getCellData(i, "commSeq") != "" && orgSellInfo.getCellData(i, "commSeq") > 0 && sameYn == "N") {
        commCdDs.insertRow();
        let newRow = commCdDs.getRowCount() - 1;
        commCdDs.setCellData(newRow, "sellCommNo", orgSellInfo.getCellData(i, "sellCommNo"));
        commCdDs.setCellData(newRow, "sellCommNm", "(" + orgSellInfo.getCellData(i, "commSeq") + ")" + orgSellInfo.getCellData(i, "sellCommNm") + "(" + orgSellInfo.getCellData(i, "commNm") + ")");
        commCdDs.setCellData(newRow, "commCd", orgSellInfo.getCellData(i, "commCd"));
        commCdDs.setCellData(newRow, "commSeq", orgSellInfo.getCellData(i, "commSeq"));
        commCdDs.setCellData(newRow, "odrWrkPathSeq", orgSellInfo.getCellData(i, "odrWrkPathSeq"));
        commCdDs.setCellData(newRow, "upperCommCd", orgSellInfo.getCellData(i, "upperCommCd"));
        commCdDs.setCellData(newRow, "unitCd", orgSellInfo.getCellData(i, "unitCd"));
        commCdDs.setCellData(newRow, "sellUnitCd", orgSellInfo.getCellData(i, "sellUnitCd"));
        commCdDs.setCellData(newRow, "adptExchRt", orgSellInfo.getCellData(i, "adptExchRt"));
        commCdDs.setCellData(newRow, "crcCd", orgSellInfo.getCellData(i, "crcCd"));
        commCdDs.setCellData(newRow, "wrkStpCd", orgSellInfo.getCellData(i, "wrkStpCd"));
        commCdDs.setCellData(newRow, "wt", orgSellInfo.getCellData(i, "wt"));
        commCdDs.setCellData(newRow, "sellUpr", orgSellInfo.getCellData(i, "sellUpr"));
        commCdDs.setCellData(newRow, "famtFratClsCd", orgSellInfo.getCellData(i, "famtFratClsCd"));
        commCdDs.setCellData(newRow, "ctrtClntNo", orgSellInfo.getCellData(i, "ctrtClntNo"));
        commCdDs.setCellData(newRow, "reqClntNo", orgSellInfo.getCellData(i, "reqClntNo"));
        commCdDs.setCellData(newRow, "bilgClntNo", orgSellInfo.getCellData(i, "bilgClntNo"));
        commCdDs.setCellData(newRow, "bilgLodeptCd", orgSellInfo.getCellData(i, "bilgLodeptCd"));
        commCdDs.setCellData(newRow, "sellLodeptCd", orgSellInfo.getCellData(i, "sellLodeptCd"));
        commCdDs.setCellData(newRow, "transCargoClsCd", orgSellInfo.getCellData(i, "transCargoClsCd"));
        commCdDs.setCellData(newRow, "odrDt", orgSellInfo.getCellData(i, "odrDt"));
        commCdDs.setCellData(newRow, "ctrtNo", orgSellInfo.getCellData(i, "ctrtNo"));
        commCdDs.setCellData(newRow, "ctrtWrkPathSeq", orgSellInfo.getCellData(i, "ctrtWrkPathSeq"));
        commCdDs.setCellData(newRow, "bizDomCd", orgSellInfo.getCellData(i, "bizDomCd"));
        commCdDs.setCellData(newRow, "taxnClsCd", orgSellInfo.getCellData(i, "taxnClsCd"));
        commCdDs.setCellData(newRow, "cntrNo", orgSellInfo.getCellData(i, "cntrNo"));
      }
    }
  }
};
scwin.f_createComboDsForGridByCond = function (orgDs, comboDs, code) {
  let selpchItemCd = scwin.getComboValue(acb_selpchItemNm, "selpchItemCd");
  let ctrtWrkPathSeq = scwin.getComboValue(acb_ctrtWrkPathNm, "ctrtWrkPathSeq");
  comboDs.removeAll();
  for (let i = 0; i < orgDs.getRowCount(); i++) {
    if (orgDs.getCellData(i, "selpchItemCd") == selpchItemCd && orgDs.getCellData(i, "ctrtWrkPathSeq") == ctrtWrkPathSeq && orgDs.getCellData(i, "dcScCd") == "") {
      let sameYn = "N";
      for (let j = 0; j < comboDs.getRowCount(); j++) {
        if (comboDs.getCellData(j, code) == orgDs.getCellData(i, code)) {
          sameYn = "Y";
          break;
        }
      }
      if (orgDs.getCellData(i, code) != "" && sameYn == "N") {
        comboDs.insertRow();
        let newRow = comboDs.getRowCount() - 1;
        comboDs.setCellData(newRow, code, orgDs.getCellData(i, code));
      }
    }
  }
};
scwin.f_createComboDsForCondWtGrid = function (orgDs, comboDs, code) {
  comboDs.removeAll();
  for (let i = 0; i < orgDs.getRowCount(); i++) {
    let sameYn = "N";
    for (let j = 0; j < comboDs.getRowCount(); j++) {
      if (comboDs.getCellData(j, code) == orgDs.getCellData(i, code)) {
        sameYn = "Y";
        break;
      }
    }
    if (orgDs.getCellData(i, code) != "" && sameYn == "N") {
      comboDs.insertRow();
      let newRow = comboDs.getRowCount() - 1;
      comboDs.setCellData(newRow, "odrSellSeq", orgDs.getCellData(i, "odrSellSeq"));
      comboDs.setCellData(newRow, "commCd", orgDs.getCellData(i, "sellCommNo"));
      comboDs.setCellData(newRow, "unitCd", orgDs.getCellData(i, "unitCd"));
      comboDs.setCellData(newRow, "crcCd", orgDs.getCellData(i, "crcCd"));
      comboDs.setCellData(newRow, "condWt", orgDs.getCellData(i, "condWtNm"));
      comboDs.setCellData(newRow, "scAmtFcrc", orgDs.getCellData(i, "scAmtFcrc"));
      comboDs.setCellData(newRow, "scAmt", orgDs.getCellData(i, "scAmt"));
      comboDs.setCellData(newRow, "scRt", orgDs.getCellData(i, "scRt"));
      comboDs.setCellData(newRow, "famtFratClsCd", orgDs.getCellData(i, "famtFratClsCd"));
    }
  }
};
scwin.f_openPopUpGrid = function (ds, cdColid, nmColid, pWinCloseTF) {
  let pWtitleSearch = "";
  let pCode = "";
  let pName = "";
  let pDispCnt = "";
  let pHidden = "";
  let pWhere = "";
  let rtnList = [];
  let pSelectID = "retrieveCtrtSelpchItemInfo";
  pCode = ds.getCellData(ds.getRowPosition(), cdColid);
  pName = ds.getCellData(ds.getRowPosition(), nmColid);
  pDispCnt = "2";
  pHidden = "3,4,5,6,7,8,9,10";
  pWhere = ",,,,1";
  pWtitleSearch = "할인할증,코드,코드명";
  rtnList = $c.gus.cfCommonPopUp($p, pSelectID, pCode, pName, pWinCloseTF, pDispCnt, null, null, pHidden, pWhere, null, null, null, null, null, null, pWtitleSearch);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ds.setCellData(ds.getRowPosition(), cdColid, ds.getOrgCellData(ds.getRowPosition(), cdColid));
      ds.setCellData(ds.getRowPosition(), nmColid, ds.getOrgCellData(ds.getRowPosition(), nmColid));
    } else {
      ds.setCellData(ds.getRowPosition(), cdColid, rtnList[0]);
      ds.setCellData(ds.getRowPosition(), nmColid, rtnList[1]);
      if (cdColid == "dcScCd") {
        let sameYn = "N";
        for (let i = 0; i < ds_dcScCd.getRowCount(); i++) {
          if (ds_dcScCd.getCellData(i, "dcScCd") == ds.getCellData(ds.getRowPosition(), cdColid)) {
            sameYn = "Y";
            break;
          }
        }
        if (sameYn == "N") {
          ds_dcScCd.insertRow();
          let newRow = ds_dcScCd.getRowPosition();
          ds_dcScCd.setCellData(newRow, "dcScCd", rtnList[0]);
          ds_dcScCd.setCellData(newRow, "dcScNm", rtnList[1]);
        }
      }
    }
  } else {
    ds.setCellData(ds.getRowPosition(), cdColid, "");
    ds.setCellData(ds.getRowPosition(), nmColid, "");
  }
  scwin.f_setValue();
};
scwin.f_addScRt = function () {
  let localGsellAmt = 0;
  let scRt = 0;
  let scAmtAll = 0;
  let tempScRtAmt = 0;
  let scSum = 0;
  let tempAmt = 0;
  let temp1 = 0;
  for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
    localGsellAmt = 0;
    scAmtAll = 0;
    tempScRtAmt = 0;
    scSum = 0;
    scRt = ds_sellInfo.getCellData(i, "scRt");
    tempAmt = 0;
    temp1 = 0;
    for (let j = 0; j < ds_tempSellAmt.getRowCount(); j++) {
      if (ds_sellInfo.getCellData(i, "commSeq") == ds_tempSellAmt.getCellData(j, "commSeq")) {
        localGsellAmt = ds_tempSellAmt.getCellData(j, "sellAmt");
      }
    }
    for (let k = 0; k <= i; k++) {
      if (ds_sellInfo.getCellData(i, "commSeq") == ds_sellInfo.getCellData(k, "commSeq")) {
        for (let l = 0; l < ds_tempSellAmt.getRowCount(); l++) {
          if (ds_sellInfo.getCellData(k, "commSeq") == ds_tempSellAmt.getCellData(l, "commSeq")) {
            tempAmt = ds_tempSellAmt.getCellData(l, "sellAmt");
          }
        }
        if (parseInt(ds_sellInfo.getCellData(k, "scAmtAll")) != 0) {
          temp1 += parseFloat(ds_sellInfo.getCellData(k, "scAmtAll"));
        } else if (parseInt(ds_sellInfo.getCellData(k, "scRt")) != 0) {
          if (chb_roundYn.getValue() == "1" || chb_roundYn.getValue() == "true") {
            temp1 += Math.round(tempAmt * parseFloat(ds_sellInfo.getCellData(k, "scRt")) / 100 / 1000) * 1000;
          } else {
            temp1 += tempAmt * parseFloat(ds_sellInfo.getCellData(k, "scRt")) / 100;
          }
        }
      }
    }
    ds_sellInfo.setCellData(i, "sellAmt", parseFloat(localGsellAmt) + temp1);
    if (parseInt(ds_sellInfo.getCellData(i, "scAmtAll")) != 0) {
      ds_sellInfo.setCellData(i, "scSellAmt", ds_sellInfo.getCellData(i, "scAmtAll"));
    } else if (parseInt(ds_sellInfo.getCellData(i, "scRt")) != 0) {
      if (chb_roundYn.getValue() == "1" || chb_roundYn.getValue() == "true") {
        ds_sellInfo.setCellData(i, "scSellAmt", Math.round(localGsellAmt * parseFloat(ds_sellInfo.getCellData(i, "scRt")) / 100 / 1000) * 1000);
      } else {
        ds_sellInfo.setCellData(i, "scSellAmt", localGsellAmt * parseFloat(ds_sellInfo.getCellData(i, "scRt")) / 100);
      }
    }
  }
};
scwin.f_roundYn = function () {
  scwin.f_calAmt();
};
scwin.f_calAmt = function () {
  scwin.f_addScRt();
};
scwin.f_setEditByValue = function () {
  let rowPos = ds_sellInfo.getRowPosition();
  let scAmtFcrc = ds_sellInfo.getCellData(rowPos, "scAmtFcrc");
  let scRt = ds_sellInfo.getCellData(rowPos, "scRt");
  if (ds_sellInfo.getCellData(rowPos, "famtFratClsCd") == "FM") {
    gr_sellInfo.setCellReadOnly(rowPos, "scAmtAll", false);
    gr_sellInfo.setCellReadOnly(rowPos, "scRt", true);
  } else if (ds_sellInfo.getCellData(rowPos, "famtFratClsCd") == "FR") {
    gr_sellInfo.setCellReadOnly(rowPos, "scAmtAll", true);
    gr_sellInfo.setCellReadOnly(rowPos, "scRt", false);
  } else {
    if (parseInt(scAmtFcrc) != 0 && scRt == 0) {
      gr_sellInfo.setCellReadOnly(rowPos, "scAmtAll", false);
      gr_sellInfo.setCellReadOnly(rowPos, "scRt", true);
    } else if (scAmtFcrc == 0 && parseInt(scRt) != 0) {
      gr_sellInfo.setCellReadOnly(rowPos, "scAmtAll", true);
      gr_sellInfo.setCellReadOnly(rowPos, "scRt", false);
    } else {
      gr_sellInfo.setCellReadOnly(rowPos, "scAmtAll", false);
      gr_sellInfo.setCellReadOnly(rowPos, "scRt", false);
    }
  }
};
scwin.f_selectAll = async function () {
  let tempCheck = 0;
  let selpchItemCd = scwin.getComboValue(acb_selpchItemNm, "selpchItemCd");
  let ctrtWrkPathSeq = scwin.getComboValue(acb_ctrtWrkPathNm, "ctrtWrkPathSeq");
  if (ed_iAmt.getValue().trim() == "" && ed_iRt.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, "할증금액 혹은 할증율중 하나는 입력하셔야 합니다.");
    return;
  }
  if (ed_iAmt.getValue().trim() != "" && ed_iRt.getValue().trim() != "") {
    await $c.gus.cfAlertMsg($p, "할증금액 혹은 할증율중 하나만 입력하셔야 합니다.");
    return;
  }
  if (ed_iAmt.getValue().trim() == "") {
    if (!(await $c.gus.cfValidate($p, [ed_iRt, ed_dcScCd]))) {
      return;
    }
  }
  if (ed_iRt.getValue().trim() == "") {
    if (!(await $c.gus.cfValidate($p, [ed_iAmt, ed_dcScCd]))) {
      return;
    }
  }
  for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
    if (ds_sellInfo.getRowStatus(i) == "C") {
      ds_sellInfo.undoRow(i);
    }
  }
  for (let i = 0; i < ds_commCd.getRowCount(); i++) {
    tempCheck = 0;
    for (let j = 0; j < ds_sellInfo.getRowCount(); j++) {
      if (ds_commCd.getCellData(i, "commSeq") == ds_sellInfo.getCellData(j, "commSeq")) {
        if (ed_iRt.getValue().trim() == "") {
          ds_sellInfo.setCellData(j, "scAmtAll", ed_iAmt.getValue());
          ds_sellInfo.setCellData(j, "scRt", "");
        } else {
          ds_sellInfo.setCellData(j, "scAmtAll", "");
          ds_sellInfo.setCellData(j, "scRt", ed_iRt.getValue());
        }
        tempCheck++;
      }
    }
    if (tempCheck <= 0) {
      ds_sellInfo.insertRow();
      let rowPos = ds_sellInfo.getRowPosition();
      if (ed_iRt.getValue().trim() == "") {
        ds_sellInfo.setCellData(rowPos, "scAmtAll", ed_iAmt.getValue());
      } else {
        ds_sellInfo.setCellData(rowPos, "scRt", ed_iRt.getValue());
      }
      ds_sellInfo.setCellData(rowPos, "sellCommNm", ds_commCd.getCellData(i, "commSeq"));
      ds_sellInfo.setCellData(rowPos, "dcScCd", ed_dcScCd.getValue());
      ds_sellInfo.setCellData(rowPos, "dcScNm", ed_dcScNm.getValue());
      ds_sellInfo.setCellData(rowPos, "odrNo", ed_odrNo.getValue());
      ds_sellInfo.setCellData(rowPos, "selpchItemCd", selpchItemCd);
      ds_sellInfo.setCellData(rowPos, "famtFratClsCd", scwin.GfamtFratClsCd);
      scwin.f_onCloseUp(rowPos, "sellCommNm");
    }
  }
  scwin.f_calAmt();
};
scwin.f_onCloseUp = function (row, colid) {
  if (colid == "sellCommNm") {
    let sellCommNm = ds_sellInfo.getCellData(row, colid);
    for (let i = 0; i < ds_commCd.getRowCount(); i++) {
      if (ds_commCd.getCellData(i, "commSeq") == sellCommNm) {
        ds_sellInfo.setCellData(row, "commCd", ds_commCd.getCellData(i, "commCd"));
        break;
      }
    }
    for (let i = 0; i < ds_commCd.getRowCount(); i++) {
      for (let j = 0; j < ds_tempSellAmt.getRowCount(); j++) {
        if (ds_commCd.getCellData(i, "commSeq") == ds_tempSellAmt.getCellData(j, "commSeq")) {
          ds_sellInfo.setCellData(ds_sellInfo.getRowPosition(), "sellAmt", ds_tempSellAmt.getCellData(j, "sellAmt"));
          break;
        }
      }
    }
    scwin.f_setValue();
    scwin.f_calAmt();
  } else if (colid == "wrkStpCd") {
    for (let i = 0; i < ds_wrkStpInfo.getRowCount(); i++) {
      if (ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "wrkStpCd") == ds_wrkStpInfo.getCellData(i, "wrkStpCd")) {
        ds_sellInfo.setCellData(ds_sellInfo.getRowPosition(), "ctrtWrkStpSeq", ds_wrkStpInfo.getCellData(i, "ctrtWrkStpSeq"));
      }
    }
  } else if (colid == "dcScNm") {
    let dcScNm = ds_sellInfo.getCellData(row, "dcScNm");
    for (let i = 0; i < ds_dcScCd.getRowCount(); i++) {
      if (ds_dcScCd.getCellData(i, "dcScNm") == dcScNm) {
        ds_sellInfo.setCellData(row, "dcScCd", ds_dcScCd.getCellData(i, "dcScCd"));
      }
    }
    scwin.f_setValue();
    scwin.f_calAmt();
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  scwin.f_set("INIT");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_sellInfo.getRowCount() > 0) {
    if (ds_dcScInfo.getRowCount() <= 0) {
      scwin.GfamtFratClsCd = "";
    } else {
      for (let i = 0; i < ds_dcScInfo.getRowCount(); i++) {
        if (ds_sellInfo.getCellData(0, "commCd") == ds_dcScInfo.getCellData(i, "commCd")) {
          scwin.GfamtFratClsCd = ds_dcScInfo.getCellData(i, "famtFratClsCd");
        } else if (ds_sellInfo.getCellData(0, "upperCommCd") == ds_dcScInfo.getCellData(i, "commCd")) {
          scwin.GfamtFratClsCd = ds_dcScInfo.getCellData(i, "famtFratClsCd");
        } else {
          scwin.GfamtFratClsCd = "";
        }
      }
    }

    // TODO: td_ctrtClntNm, td_ctrtNo, td_bilgClntNm textbox setValue 필요
    let odrNo = ds_sellInfo.getCellData(0, "odrNo");
    scwin.f_set("RETRIEVE");
    ds_tempSellAmt.removeAll();
    for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
      let checkCntrNo = 0;
      let tempDcScCd = ds_sellInfo.getCellData(i, "dcScCd");
      if (tempDcScCd == "") {
        for (let j = 0; j < ds_tempSellAmt.getRowCount(); j++) {
          if (ds_sellInfo.getCellData(i, "commSeq") == ds_tempSellAmt.getCellData(j, "commSeq")) {
            ds_tempSellAmt.setCellData(j, "sellAmt", parseFloat(ds_tempSellAmt.getCellData(j, "sellAmt")) + parseFloat(ds_sellInfo.getCellData(i, "sellAmt")));
            checkCntrNo++;
          }
        }
        if (checkCntrNo == 0) {
          ds_tempSellAmt.insertRow();
          let newRow = ds_tempSellAmt.getRowPosition();
          ds_tempSellAmt.setCellData(newRow, "cntrNo", ds_sellInfo.getCellData(i, "sellCommNo"));
          ds_tempSellAmt.setCellData(newRow, "commSeq", ds_sellInfo.getCellData(i, "commSeq"));
          ds_tempSellAmt.setCellData(newRow, "sellAmt", ds_sellInfo.getCellData(i, "sellAmt"));
        }
      }
    }
    for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
      if (i == 0) {
        scwin.GcntrSizCd = ds_sellInfo.getCellData(i, "cntrSizCd");
        scwin.GcntrTypCd = ds_sellInfo.getCellData(i, "cntrTypCd");
        scwin.GfullEmptyClsCd = ds_sellInfo.getCellData(i, "fullEmptyClsCd");
      }
      if (ds_sellInfo.getCellData(i, "dcScCd") == "") {
        for (let j = 0; j < ds_sellInfo.getRowCount(); j++) {
          if (ds_sellInfo.getCellData(j, "dcScCd") != "" && ds_sellInfo.getCellData(i, "selpchItemCd") == ds_sellInfo.getCellData(j, "selpchItemCd") && ds_sellInfo.getCellData(i, "ctrtWrkPathSeq") == ds_sellInfo.getCellData(j, "ctrtWrkPathSeq") && ds_sellInfo.getCellData(i, "sellCommNo") == ds_sellInfo.getCellData(j, "sellCommNo") && ds_sellInfo.getCellData(i, "commSeq") == ds_sellInfo.getCellData(j, "commSeq") && ds_sellInfo.getCellData(i, "odrWrkPathSeq") == ds_sellInfo.getCellData(j, "odrWrkPathSeq")) {
            ds_sellInfo.setCellData(j, "orgWt", ds_sellInfo.getCellData(i, "wt"));
            ds_sellInfo.setCellData(j, "orgSellUpr", ds_sellInfo.getCellData(i, "sellUpr"));
          }
        }
      }
    }
    $c.gus.cfCopyDataSet($p, ds_sellInfo, ds_orgSellInfo, "copyHeader=yes");
    ds_sellInfo.removeAll();
    $c.gus.cfCopyDataSet($p, ds_orgSellInfo, ds_sellInfo, "copyHeader=yes");
    scwin.f_createComboDS(ds_sellInfo, ds_selpchItemCd, "selpchItemCd", "selpchItemNm");
    scwin.f_createComboDS(ds_sellInfo, ds_ctrtWrkPathSeq, "ctrtWrkPathSeq", "ctrtWrkPathNm");
    acb_selpchItemNm.setSelectedIndex(0);
    acb_ctrtWrkPathNm.setSelectedIndex(0);
    scwin.f_filter();
    scwin.f_createCommCdComboDsForGridByCond(ds_orgSellInfo, ds_commCd);
    await scwin.f_checkOdrStatus();
    for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
      if (ds_sellInfo.getCellData(i, "dcScCd") != "") {
        for (let j = 0; j < ds_tempSellAmt.getRowCount(); j++) {
          if (ds_sellInfo.getCellData(i, "commSeq") == ds_tempSellAmt.getCellData(j, "commSeq")) {
            let tempSellAmt = parseFloat(ds_tempSellAmt.getCellData(j, "sellAmt"));
            if (parseInt(ds_sellInfo.getCellData(i, "scRt")) != 0) {
              let tempAmt1 = parseFloat(ds_sellInfo.getCellData(i, "scRt"));
              let tempAmt2 = tempSellAmt * tempAmt1 / 100;
              ds_sellInfo.setCellData(i, "sellAmt", tempSellAmt + tempAmt2);
            }
            if (parseInt(ds_sellInfo.getCellData(i, "scAmtAll")) != 0) {
              let tempAmt1 = parseFloat(ds_sellInfo.getCellData(i, "scAmtAll"));
              ds_sellInfo.setCellData(i, "sellAmt", tempSellAmt + tempAmt1);
            }
          }
        }
      }
    }
    ds_wrkStpInfo.insertRow();
    let wrkStpNewRow = ds_wrkStpInfo.getRowPosition();
    ds_wrkStpInfo.setCellData(wrkStpNewRow, "wrkStpCd", "");
    ds_wrkStpInfo.setCellData(wrkStpNewRow, "wrkStpNm", "");
    for (let i = 0; i < ds_orgSellInfo.getRowCount(); i++) {
      if (ds_orgSellInfo.getCellData(i, "dcScCd") != "") {
        for (let j = 0; j < ds_sellInfo.getRowCount(); j++) {
          if (ds_sellInfo.getCellData(j, "commSeq") == ds_orgSellInfo.getCellData(i, "commSeq")) {
            ds_sellInfo.setCellData(j, "sellCommNm", ds_orgSellInfo.getCellData(i, "commSeq"));
          }
        }
      }
    }
    scwin.f_calAmt();
  } else {
    await $c.gus.cfAlertMsg($p, "작업경로를 먼저 등록하신 후에 할인할증을 등록할 수 있습니다.");
    scwin.f_set("INIT");
  }
  $c.gus.cfShowTotalRows($p, totalRows, ds_sellInfo.getRowCount());
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = function (e) {
  scwin.f_Retrieve();
};
scwin.ed_odrNo_onkeyup = function (e) {
  if (e.keyCode == 13) scwin.f_Retrieve();
};
scwin.acb_selpchItemNm_onviewchange = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tbl_sellInfoArea, gr_sellInfo]))) return;
  scwin.f_filter();
};
scwin.acb_ctrtWrkPathNm_onviewchange = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tbl_sellInfoArea, gr_sellInfo]))) return;
  scwin.f_filter();
};
scwin.ed_dcScCd_onblur = function (e) {
  scwin.f_CheckPopUp(ed_dcScCd, ed_dcScNm, '1', 'CD');
};
scwin.ed_dcScNm_onblur = function (e) {
  scwin.f_CheckPopUp(ed_dcScCd, ed_dcScNm, '1', 'NM');
};
scwin.gr_sellInfo_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "dcScCd") {
    scwin.f_openPopUpGrid(ds_sellInfo, columnId, "dcScNm", "F");
  }
};
scwin.gr_sellInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  if (ds_dcScInfo.getRowCount() <= 0) {
    scwin.GfamtFratClsCd = "";
  } else {
    for (let i = 0; i < ds_dcScInfo.getRowCount(); i++) {
      if (ds_sellInfo.getCellData(row, "commCd") == ds_dcScInfo.getCellData(i, "commCd")) {
        scwin.GfamtFratClsCd = ds_dcScInfo.getCellData(i, "famtFratClsCd");
      } else if (ds_sellInfo.getCellData(row, "upperCommCd") == ds_dcScInfo.getCellData(i, "commCd")) {
        scwin.GfamtFratClsCd = ds_dcScInfo.getCellData(i, "famtFratClsCd");
      } else {
        scwin.GfamtFratClsCd = "";
      }
    }
  }
  if (scwin.GfamtFratClsCd == "FM") {
    gr_sellInfo.setCellReadOnly(row, "scAmtAll", false);
    gr_sellInfo.setCellReadOnly(row, "scRt", true);
  } else if (scwin.GfamtFratClsCd == "FR") {
    gr_sellInfo.setCellReadOnly(row, "scAmtAll", true);
    gr_sellInfo.setCellReadOnly(row, "scRt", false);
  } else if (scwin.GfamtFratClsCd == "") {
    if (parseInt(ds_sellInfo.getCellData(row, "scAmtAll")) != 0) {
      gr_sellInfo.setCellReadOnly(row, "scAmtAll", false);
      gr_sellInfo.setCellReadOnly(row, "scRt", true);
    } else if (parseInt(ds_sellInfo.getCellData(row, "scRt")) != 0) {
      gr_sellInfo.setCellReadOnly(row, "scAmtAll", true);
      gr_sellInfo.setCellReadOnly(row, "scRt", false);
    } else {
      gr_sellInfo.setCellReadOnly(row, "scAmtAll", false);
      gr_sellInfo.setCellReadOnly(row, "scRt", false);
    }
  }
};
scwin.gr_sellInfo_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  let row = rowIndex;
  let colid = columnId;
  let scAmtFcrc = ds_sellInfo.getCellData(row, "scAmtAll");
  let scRt = ds_sellInfo.getCellData(row, "scRt");
  if (ds_sellInfo.getCellData(row, "famtFratClsCd") == "FM") {
    gr_sellInfo.setCellReadOnly(row, "scRt", true);
    gr_sellInfo.setCellReadOnly(row, "scAmtAll", false);
  } else if (ds_sellInfo.getCellData(row, "famtFratClsCd") == "FR") {
    gr_sellInfo.setCellReadOnly(row, "scRt", false);
    gr_sellInfo.setCellReadOnly(row, "scAmtAll", true);
  } else {
    if (parseInt(scAmtFcrc) != 0 && scRt == 0) {
      gr_sellInfo.setCellReadOnly(row, "scAmtAll", false);
      gr_sellInfo.setCellReadOnly(row, "scRt", true);
    } else if (scAmtFcrc == 0 && parseInt(scRt) != 0) {
      gr_sellInfo.setCellReadOnly(row, "scAmtAll", true);
      gr_sellInfo.setCellReadOnly(row, "scRt", false);
    } else {
      gr_sellInfo.setCellReadOnly(row, "scAmtAll", false);
      gr_sellInfo.setCellReadOnly(row, "scRt", false);
    }
  }
  scwin.f_calAmt();
  if (colid == "dcScCd") {
    let dcScCd = ds_sellInfo.getCellData(row, colid);
    if (dcScCd != oldValue) {
      ds_sellInfo.setCellData(row, "dcScNm", "");
      scwin.f_openPopUpGrid(ds_sellInfo, colid, "dcScNm", "T");
    }
  }
};
scwin.gr_sellInfo_oncloseup = function (rowIndex, columnIndex, columnId) {
  scwin.f_onCloseUp(rowIndex, columnId);
};
scwin.ds_sellInfo_onrowpositionchange = function (rowIndex) {
  scwin.f_setEditByValue();
};
scwin.btnRetrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btnUpdate_onclick = function (e) {
  scwin.f_update();
};
scwin.btnSave_onclick = function (e) {
  scwin.f_save();
};
scwin.btnAll_onclick = function (e) {
  scwin.f_selectAll();
};
scwin.chb_roundYn_onchange = function (e) {
  scwin.f_roundYn();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',style:'width: 150px;',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',style:'width: 150px;',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'위험물할증대상 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_roundYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btnRetrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요율항목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_selpchItemNm',style:'width: 150px;',submenuSize:'fixed',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업경로',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_ctrtWrkPathNm',style:'width: 150px;',submenuSize:'fixed',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반올림여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_checkbox2',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'할증항목코드',class:'req'}},{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'ed_dcScCd',popupID:'',validTitle:'',nameId:'ed_dcScNm',id:'udc_dcSc',style:'width:%; height:px; '}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증금액',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_dcScCd',style:'width: 150px;',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할증률(%)',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_input4',style:'width: 150px;'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnAll',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_sellInfo',focusMode:'row',id:'gr_sellInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScCd',inputType:'text',style:'',value:'할증항목코드',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScNm',inputType:'text',style:'',value:'할증항목',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNm',inputType:'text',style:'',value:'컨테이너번호',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scAmtAll',inputType:'text',style:'',value:'UNNO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scRt',inputType:'text',style:'',value:'등급',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',style:'',value:'할증금액',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmtFcrc',inputType:'text',style:'',value:'할증률(%)',width:'100',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'작업단계',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'scAmtFcrc',value:'매출금액(외화)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'scAmt',value:'매출금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'condWtNm',value:'할증금액(외화)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'minCondWt',value:'할증금액(원화)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'maxCondWt',value:'조건중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'qty',value:'최소조건중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'unitCd',value:'최대조건중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commCd',value:'수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commSeq',value:'계약단위',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'orgWt',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'orgSellUpr',value:'품명순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'매출중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmtAll',value:'매출단가',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'famtFratClsCd',value:'적용중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'adptExchRt',value:'적용할증금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column74',value:'정액정률구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'환율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScCd',inputType:'textImage',style:'',value:'',width:'130',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScNm',inputType:'text',style:'',value:'',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'dcScNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_dcScCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNm',inputType:'text',style:'',value:'',width:'120'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'commSeq:sellCommNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_commCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'sellUnitCd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_sellUnitCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'crcCd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_crcCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'scAmtAll',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scRt',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpInfo'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'scAmtFcrc',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'scAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'condWtNm',value:'',displayMode:'label',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'condWt'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_condWt'}]}]}]}]},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'minCondWt',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'maxCondWt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'qty',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'unitCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'orgWt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'orgSellUpr',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmtAll',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'famtFratClsCd',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'adptExchRt',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btnUpdate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})