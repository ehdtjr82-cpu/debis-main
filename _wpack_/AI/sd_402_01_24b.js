/*amd /AI/sd_402_01_24b.xml 76745 8a7b03e69ce74ef39afcfa14d92207d0d210d91c7cf44d3d205784fd491752d6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cndOdrNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCnclYn',name:'오더취소여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orgSellInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitySellSeq',name:'통합매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtAll',name:'할증금액통합',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtAll',name:'매출금액통합',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWtNm',name:'조건중량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgWt',name:'원본중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgSellUpr',name:'원본매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempSellInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtAll',name:'할증금액통합',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtAll',name:'매출금액통합',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWtNm',name:'조건중량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgWt',name:'원본중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgSellUpr',name:'원본매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너SIZE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitySellSeq',name:'통합매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtAll',name:'할증금액통합',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtAll',name:'매출금액통합',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWtNm',name:'조건중량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgWt',name:'원본중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgSellUpr',name:'원본매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcScInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScSelpchItemCd',name:'할인할증매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScSelpchItemNm',name:'할인할증매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCtrtTrfSeq',name:'할인할증계약요율순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'계약요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrfFcrc',name:'계약요율외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrfRt',name:'계약요율비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'법인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprtCnfrYn',name:'분리확인여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPathSeq',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'upperCommCd',name:'상위품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'매출중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'매출단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellUnitCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crcCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condWt',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrSellSeq',name:'오더매출순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'condWt',name:'조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmtFcrc',name:'할증금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAmt',name:'할증금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scRt',name:'할증율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcScCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dcScCd',name:'할인할증코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증항목명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveDiscountSurchargeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_cndOdrNo","key":"IN_DS1"},{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"},{"id":"ds_dcScInfo","key":"OUT_DS3"},{"id":"ds_wrkStpInfo","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_odrInfo","key":"OUT_DS1"},{"id":"ds_sellInfo","key":"OUT_DS2"},{"id":"ds_dcScInfo","key":"OUT_DS3"},{"id":"ds_wrkStpInfo","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrreg.RegistDiscountSurchargeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_sellInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.wtDcScCd = "0086";
scwin.hid_odrKndCd = "";
scwin.hid_chkReterieve = "";
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
scwin.f_clearTabOrderInfo = function () {
  // TODO: parent.hid_odrNo 접근 불가 - 탭 구조 변환 필요
  // 원본: parent.hid_odrNo.value = "";
  if (typeof parent !== "undefined" && parent.scwin) {
    parent.scwin.hid_odrNo = "";
  }
};
scwin.f_setTabOrderInfo = function (odrNo) {
  // TODO: parent.hid_odrNo 접근 불가 - 탭 구조 변환 필요
  // 원본: parent.hid_odrNo.value = odrNo;
  if (typeof parent !== "undefined" && parent.scwin) {
    parent.scwin.hid_odrNo = odrNo;
  }
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
      td_ctrtClntNm.setValue("");
      td_ctrtNo.setValue("");
      td_bilgClntNm.setValue("");
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
    dma_cndOdrNo.set("transCargoClsCd", "B");
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
      let vld = await $c.gus.cfValidate($p, [tbl_sellInfoArea, gr_sellInfo]);
      if (vld) {
        if (!(await scwin.f_validate())) return;
        await $c.sbm.execute($p, sbm_save);
      }
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["할인할증정보"]);
    }
  }
};
scwin.f_addRow = function () {
  let selpchItemCd = lc_selpchItemNm.getValue();
  let ctrtWrkPathSeq = lc_ctrtWrkPathNm.getValue();
  ds_sellInfo.insertRow();
  let rowPos = ds_sellInfo.getRowPosition();
  ds_sellInfo.setCellData(rowPos, "odrNo", ed_odrNo.getValue());
  ds_sellInfo.setCellData(rowPos, "selpchItemCd", selpchItemCd);
  gr_sellInfo.setFocusedCell(rowPos, "dcScNm");
};
scwin.f_deleteRow = function () {
  ds_sellInfo.removeRow(ds_sellInfo.getRowPosition());
  totalRows.setValue(ds_sellInfo.getRowCount());
};
scwin.f_undoRow = function () {
  ds_sellInfo.undoRow(ds_sellInfo.getRowPosition());
};
scwin.f_checkOdrStatus = async function () {
  let odrNo = ds_odrInfo.getCellData(0, "odrNo");
  let odrCompleteYn = ds_odrInfo.getCellData(0, "odrCompleteYn");
  let odrCnclYn = ds_odrInfo.getCellData(0, "odrCnclYn");
  if (odrCompleteYn == 1) {
    await $c.gus.cfAlertMsg($p, MSG_SD_WRN_001, [odrNo, "완료", "할인할증"]);
    $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
    return;
  }
  if (odrCnclYn == 1) {
    await $c.gus.cfAlertMsg($p, MSG_SD_WRN_001, ["취소", "할인할증"]);
    $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
    return;
  }
};
scwin.f_filter = function () {
  let selpchItemCd = lc_selpchItemNm.getValue();
  let ctrtWrkPathSeq = lc_ctrtWrkPathNm.getValue();
  ds_sellInfo.setFilterByFunction(function (row) {
    if (ds_sellInfo.getCellData(row, "selpchItemCd") == selpchItemCd && ds_sellInfo.getCellData(row, "ctrtWrkPathSeq") == ctrtWrkPathSeq && ds_sellInfo.getCellData(row, "dcScCd") != "") {
      return true;
    } else {
      return false;
    }
  });
  scwin.f_createCommCdComboDsForGridByCond(ds_orgSellInfo, ds_commCd);
  scwin.f_createComboDsForGridByCond(ds_orgSellInfo, ds_sellUnitCd, "sellUnitCd");
  scwin.f_createComboDsForGridByCond(ds_orgSellInfo, ds_crcCd, "crcCd");
  scwin.f_createComboDsForCondWtGrid(ds_sellInfo, ds_condWt, "condWtNm");
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
      let lastRow = ds_dcScCd.getRowCount() - 1;
      ds_dcScCd.setCellData(lastRow, "dcScCd", ds_dcScInfo.getCellData(i, "dcScSelpchItemCd"));
      ds_dcScCd.setCellData(lastRow, "dcScNm", ds_dcScInfo.getCellData(i, "dcScSelpchItemNm"));
    }
  }
  totalRows.setValue(ds_sellInfo.getRowCount());
  ds_sellInfo.removeFilter();
};
scwin.f_setCommCdToSellInfo = function (ds_sellInfoRowPos, ds_commCdRowPos, gubun) {
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellCommNo", ds_commCd.getCellData(ds_commCdRowPos, "sellCommNo"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellCommNm", ds_commCd.getCellData(ds_commCdRowPos, "sellCommNm"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "commSeq", ds_commCd.getCellData(ds_commCdRowPos, "commSeq"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "odrWrkPathSeq", ds_commCd.getCellData(ds_commCdRowPos, "odrWrkPathSeq"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "upperCommCd", ds_commCd.getCellData(ds_commCdRowPos, "upperCommCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "unitCd", ds_commCd.getCellData(ds_commCdRowPos, "unitCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "sellUnitCd", ds_commCd.getCellData(ds_commCdRowPos, "sellUnitCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "adptExchRt", ds_commCd.getCellData(ds_commCdRowPos, "adptExchRt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "crcCd", ds_commCd.getCellData(ds_commCdRowPos, "crcCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "wrkStpCd", ds_commCd.getCellData(ds_commCdRowPos, "wrkStpCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "orgWt", ds_commCd.getCellData(ds_commCdRowPos, "wt"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "orgSellUpr", ds_commCd.getCellData(ds_commCdRowPos, "sellUpr"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "famtFratClsCd", ds_commCd.getCellData(ds_commCdRowPos, "famtFratClsCd"));
  ds_sellInfo.setCellData(ds_sellInfoRowPos, "ctrtClntNo", ds_commCd.getCellData(ds_commCdRowPos, "ctrtClntNo"));
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
  if (dcScCd == "" && commCd != "") {
    for (let i = 0; i < ds_commCd.getRowCount(); i++) {
      if (ds_commCd.getCellData(i, "commCd") == commCd && ds_commCd.getCellData(i, "sellCommNm") == sellCommNm) {
        scwin.f_setCommCdToSellInfo(sellRowPos, i, "1");
        return;
      }
    }
  } else if (dcScCd != "" && commCd != "") {
    let commCdYn = "N";
    if (ds_dcScInfo.getRowCount() > 0) {
      for (let i = 0; i < ds_dcScInfo.getRowCount(); i++) {
        for (let j = 0; j < ds_commCd.getRowCount(); j++) {
          if (ds_commCd.getCellData(j, "sellCommNm") == sellCommNm && ds_dcScInfo.getCellData(i, "commCd") == commCd && ds_dcScInfo.getCellData(i, "dcScSelpchItemCd") == dcScCd) {
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
            if (ds_commCd.getCellData(j, "sellCommNm") == sellCommNm && ds_dcScInfo.getCellData(i, "commCd") == ds_commCd.getCellData(j, "upperCommCd") && ds_dcScInfo.getCellData(i, "dcScSelpchItemCd") == dcScCd) {
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
        if (ds_commCd.getCellData(i, "commCd") == commCd && ds_commCd.getCellData(i, "sellCommNm") == sellCommNm) {
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
    let wrkStpCd = ds_sellInfo.getCellData(i, "wrkStpCd");
    let condWtNm = ds_sellInfo.getCellData(i, "condWtNm");
    if (ds_sellInfo.getRowStatus(i) != "D") {
      for (let j = 0; j < ds_sellInfo.getRowCount(); j++) {
        if (ds_sellInfo.getRowStatus(j) != "D") {
          if (j != i) {
            if (ds_sellInfo.getCellData(j, "dcScCd") == dcScCd && ds_sellInfo.getCellData(j, "sellCommNo") == sellCommNo && ds_sellInfo.getCellData(j, "wrkStpCd") == wrkStpCd) {
              if (ds_sellInfo.getCellData(j, "dcScCd") == scwin.wtDcScCd) {
                if (ds_sellInfo.getCellData(j, "condWtNm") == condWtNm) {
                  await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["할인할증", j + 1, "할증항목, 품명, 작업단계, 중량조건"]);
                  return false;
                }
              } else {
                await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_032, ["할인할증", j + 1, "할증항목, 품명, 작업단계"]);
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
    if (ds_sellInfo.getCellData(i, "wt") == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_013, ["할인할증", i + 1, "적용중량", "0"]);
      return false;
    }
    if (ds_sellInfo.getCellData(i, "wt") > ds_sellInfo.getCellData(i, "orgWt")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_031 + MSG_CM_ERR_014, ["할인할증", i + 1, "적용중량", "매출중량"]);
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
      let lastRow = comboDs.getRowCount() - 1;
      comboDs.setCellData(lastRow, code, orgDs.getCellData(i, code));
      comboDs.setCellData(lastRow, name, orgDs.getCellData(i, name));
    }
  }
};
scwin.f_createCommCdComboDsForGridByCond = function (orgSellInfoDs, commCdDs) {
  let selpchItemCd = lc_selpchItemNm.getValue();
  let ctrtWrkPathSeq = lc_ctrtWrkPathNm.getValue();
  commCdDs.removeAll();
  for (let i = 0; i < orgSellInfoDs.getRowCount(); i++) {
    if (orgSellInfoDs.getCellData(i, "selpchItemCd") == selpchItemCd && orgSellInfoDs.getCellData(i, "ctrtWrkPathSeq") == ctrtWrkPathSeq && orgSellInfoDs.getCellData(i, "dcScCd") == "") {
      let sameYn = "N";
      for (let j = 0; j < commCdDs.getRowCount(); j++) {
        if (commCdDs.getCellData(j, "sellCommNo") == orgSellInfoDs.getCellData(i, "sellCommNo") && commCdDs.getCellData(j, "commSeq") == orgSellInfoDs.getCellData(i, "commSeq")) {
          sameYn = "Y";
          break;
        }
      }
      if (orgSellInfoDs.getCellData(i, "sellCommNo") != "" && sameYn == "N") {
        commCdDs.insertRow();
        let lastRow = commCdDs.getRowCount() - 1;
        commCdDs.setCellData(lastRow, "sellCommNo", orgSellInfoDs.getCellData(i, "sellCommNo"));
        commCdDs.setCellData(lastRow, "sellCommNm", orgSellInfoDs.getCellData(i, "sellCommNm"));
        commCdDs.setCellData(lastRow, "commCd", orgSellInfoDs.getCellData(i, "commCd"));
        commCdDs.setCellData(lastRow, "commSeq", orgSellInfoDs.getCellData(i, "commSeq"));
        commCdDs.setCellData(lastRow, "odrWrkPathSeq", orgSellInfoDs.getCellData(i, "odrWrkPathSeq"));
        commCdDs.setCellData(lastRow, "upperCommCd", orgSellInfoDs.getCellData(i, "upperCommCd"));
        commCdDs.setCellData(lastRow, "unitCd", orgSellInfoDs.getCellData(i, "unitCd"));
        commCdDs.setCellData(lastRow, "sellUnitCd", orgSellInfoDs.getCellData(i, "sellUnitCd"));
        commCdDs.setCellData(lastRow, "adptExchRt", orgSellInfoDs.getCellData(i, "adptExchRt"));
        commCdDs.setCellData(lastRow, "crcCd", orgSellInfoDs.getCellData(i, "crcCd"));
        commCdDs.setCellData(lastRow, "wrkStpCd", orgSellInfoDs.getCellData(i, "wrkStpCd"));
        commCdDs.setCellData(lastRow, "wt", orgSellInfoDs.getCellData(i, "wt"));
        commCdDs.setCellData(lastRow, "sellUpr", orgSellInfoDs.getCellData(i, "sellUpr"));
        commCdDs.setCellData(lastRow, "famtFratClsCd", orgSellInfoDs.getCellData(i, "famtFratClsCd"));
        commCdDs.setCellData(lastRow, "ctrtClntNo", orgSellInfoDs.getCellData(i, "ctrtClntNo"));
        commCdDs.setCellData(lastRow, "reqClntNo", orgSellInfoDs.getCellData(i, "reqClntNo"));
        commCdDs.setCellData(lastRow, "bilgClntNo", orgSellInfoDs.getCellData(i, "bilgClntNo"));
        commCdDs.setCellData(lastRow, "bilgLodeptCd", orgSellInfoDs.getCellData(i, "bilgLodeptCd"));
        commCdDs.setCellData(lastRow, "sellLodeptCd", orgSellInfoDs.getCellData(i, "sellLodeptCd"));
        commCdDs.setCellData(lastRow, "transCargoClsCd", orgSellInfoDs.getCellData(i, "transCargoClsCd"));
        commCdDs.setCellData(lastRow, "odrDt", orgSellInfoDs.getCellData(i, "odrDt"));
        commCdDs.setCellData(lastRow, "ctrtNo", orgSellInfoDs.getCellData(i, "ctrtNo"));
        commCdDs.setCellData(lastRow, "ctrtWrkPathSeq", orgSellInfoDs.getCellData(i, "ctrtWrkPathSeq"));
        commCdDs.setCellData(lastRow, "bizDomCd", orgSellInfoDs.getCellData(i, "bizDomCd"));
        commCdDs.setCellData(lastRow, "taxnClsCd", orgSellInfoDs.getCellData(i, "taxnClsCd"));
      }
    }
  }
};
scwin.f_createComboDsForGridByCond = function (orgDs, comboDs, code) {
  let selpchItemCd = lc_selpchItemNm.getValue();
  let ctrtWrkPathSeq = lc_ctrtWrkPathNm.getValue();
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
        let lastRow = comboDs.getRowCount() - 1;
        comboDs.setCellData(lastRow, code, orgDs.getCellData(i, code));
      }
    }
  }
};
scwin.f_createComboDsForCondWtGrid = function (orgDs, comboDs, code) {
  comboDs.removeAll();
  for (let i = 0; i < orgDs.getRowCount(); i++) {
    let sameYn = "N";
    for (let j = 0; j < comboDs.getRowCount(); j++) {
      if (comboDs.getCellData(j, "condWt") == orgDs.getCellData(i, code)) {
        sameYn = "Y";
        break;
      }
    }
    if (orgDs.getCellData(i, code) != "" && sameYn == "N") {
      comboDs.insertRow();
      let lastRow = comboDs.getRowCount() - 1;
      comboDs.setCellData(lastRow, "odrSellSeq", orgDs.getCellData(i, "odrSellSeq"));
      comboDs.setCellData(lastRow, "commCd", orgDs.getCellData(i, "sellCommNo"));
      comboDs.setCellData(lastRow, "unitCd", orgDs.getCellData(i, "unitCd"));
      comboDs.setCellData(lastRow, "crcCd", orgDs.getCellData(i, "crcCd"));
      comboDs.setCellData(lastRow, "condWt", orgDs.getCellData(i, "condWtNm"));
      comboDs.setCellData(lastRow, "scAmtFcrc", orgDs.getCellData(i, "scAmtFcrc"));
      comboDs.setCellData(lastRow, "scAmt", orgDs.getCellData(i, "scAmt"));
      comboDs.setCellData(lastRow, "scRt", orgDs.getCellData(i, "scRt"));
      comboDs.setCellData(lastRow, "famtFratClsCd", orgDs.getCellData(i, "famtFratClsCd"));
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
  let pSelectID = "retrieveCtrtSelpchItemInfo";
  pCode = ds.getCellData(ds.getRowPosition(), cdColid);
  pName = ds.getCellData(ds.getRowPosition(), nmColid);
  pDispCnt = "2";
  pHidden = "3,4,5,6,7,8,9,10";
  pWhere = ",,,,1";
  pWtitleSearch = "할인할증,코드,코드명";
  let rtnList = $c.gus.cfCommonPopUp($p, pSelectID, pCode, pName, pWinCloseTF, pDispCnt, null, null, pHidden, pWhere, null, null, null, null, null, null, pWtitleSearch);
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
          let lastRow = ds_dcScCd.getRowCount() - 1;
          ds_dcScCd.setCellData(lastRow, "dcScCd", rtnList[0]);
          ds_dcScCd.setCellData(lastRow, "dcScNm", rtnList[1]);
        }
      }
    }
  } else {
    ds.setCellData(ds.getRowPosition(), cdColid, "");
    ds.setCellData(ds.getRowPosition(), nmColid, "");
  }
  scwin.f_setValue();
};
scwin.f_calAmt = function () {
  let rowPos = ds_sellInfo.getRowPosition();
  let transCargoClsCd = ds_sellInfo.getCellData(rowPos, "transCargoClsCd");
  let adptExchRt = ds_sellInfo.getCellData(rowPos, "adptExchRt");
  let crcCd = ds_sellInfo.getCellData(rowPos, "crcCd");
  let unitCd = ds_sellInfo.getCellData(rowPos, "unitCd");
  let sellUnitCd = ds_sellInfo.getCellData(rowPos, "sellUnitCd");
  let famtFratClsCd = ds_sellInfo.getCellData(rowPos, "famtFratClsCd");
  let orgSellUpr = ds_sellInfo.getCellData(rowPos, "orgSellUpr");
  let wt = ds_sellInfo.getCellData(rowPos, "wt");
  let scRt = ds_sellInfo.getCellData(rowPos, "scRt");
  let scAmtAll = 0;
  let sellAmtAll = 0;
  if (transCargoClsCd == "B") {
    scAmtAll = ds_sellInfo.getCellData(rowPos, "scAmtAll");
    if (unitCd != sellUnitCd) wt = $c.gus.cfConvert2Weight($p, wt, sellUnitCd, unitCd);
    if (famtFratClsCd == "FM") sellAmtAll = scAmtAll * wt;else if (famtFratClsCd == "FR") sellAmtAll = orgSellUpr * wt * scRt / 100;
    if (crcCd == "KRW") {
      sellAmtAll = sellAmtAll.toFixed(0);
      ds_sellInfo.setCellData(rowPos, "sellAmtAll", sellAmtAll);
      ds_sellInfo.setCellData(rowPos, "sellAmt", sellAmtAll);
      ds_sellInfo.setCellData(rowPos, "sellAmtFcrc", 0);
    } else {
      sellAmtAll = sellAmtAll.toFixed(2);
      ds_sellInfo.setCellData(rowPos, "sellAmtAll", sellAmtAll);
      ds_sellInfo.setCellData(rowPos, "sellAmt", (sellAmtAll * adptExchRt).toFixed(0));
      ds_sellInfo.setCellData(rowPos, "sellAmtFcrc", sellAmtAll);
    }
  } else if (transCargoClsCd == "C") {
    sellAmtAll = ds_sellInfo.getCellData(rowPos, "qty") * orgSellUpr;
    if (crcCd == "KRW") {
      sellAmtAll = sellAmtAll.toFixed(0);
      ds_sellInfo.setCellData(rowPos, "sellAmtAll", sellAmtAll);
      ds_sellInfo.setCellData(rowPos, "sellAmt", sellAmtAll);
      ds_sellInfo.setCellData(rowPos, "sellAmtFcrc", 0);
    } else {
      sellAmtAll = sellAmtAll.toFixed(2);
      ds_sellInfo.setCellData(rowPos, "sellAmtAll", sellAmtAll);
      ds_sellInfo.setCellData(rowPos, "sellAmt", (sellAmtAll * adptExchRt).toFixed(0));
      ds_sellInfo.setCellData(rowPos, "sellAmtFcrc", sellAmtAll);
    }
  }
};
scwin.f_setEditByValue = function () {
  let rowPos = ds_sellInfo.getRowPosition();
  let scAmtFcrc = ds_sellInfo.getCellData(rowPos, "scAmtFcrc");
  let scRt = ds_sellInfo.getCellData(rowPos, "scRt");
  if (scAmtFcrc > 0 && scRt == 0) {
    gr_sellInfo.setColumnProp("scAmtAll", "readOnly", false);
    gr_sellInfo.setColumnProp("scRt", "readOnly", true);
  } else if (scAmtFcrc == 0 && scRt > 0) {
    gr_sellInfo.setColumnProp("scAmtAll", "readOnly", true);
    gr_sellInfo.setColumnProp("scRt", "readOnly", false);
  } else {
    gr_sellInfo.setColumnProp("scAmtAll", "readOnly", false);
    gr_sellInfo.setColumnProp("scRt", "readOnly", false);
  }
};
scwin.f_createComboCondWtGridByCtrt = function () {
  ds_condWt.removeAll();
  if (ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "dcScCd") == scwin.wtDcScCd) {
    let commCdYn = "N";
    for (let i = 0; i < ds_dcScInfo.getRowCount(); i++) {
      if (ds_dcScInfo.getCellData(i, "dcScSelpchItemCd") == scwin.wtDcScCd && ds_dcScInfo.getCellData(i, "commCd") == ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "commCd")) {
        let condWt = ds_dcScInfo.getCellData(i, "minCondWt") + "~" + ds_dcScInfo.getCellData(i, "maxCondWt");
        let sameYn = "N";
        for (let j = 0; j < ds_condWt.getRowCount(); j++) {
          if (ds_condWt.getCellData(j, "commCd") == ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "commCd") && ds_condWt.getCellData(j, "condWt") == condWt) {
            sameYn = "Y";
            break;
          }
        }
        if (condWt != "" && sameYn == "N") {
          ds_condWt.insertRow();
          let lastRow = ds_condWt.getRowCount() - 1;
          let adptExchRt = ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "adptExchRt");
          ds_condWt.setCellData(lastRow, "odrSellSeq", 0);
          ds_condWt.setCellData(lastRow, "commCd", ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "commCd"));
          ds_condWt.setCellData(lastRow, "unitCd", ds_dcScInfo.getCellData(i, "unitCd"));
          ds_condWt.setCellData(lastRow, "crcCd", ds_dcScInfo.getCellData(i, "crcCd"));
          ds_condWt.setCellData(lastRow, "condWt", condWt);
          if (ds_dcScInfo.getCellData(i, "crcCd") == "KRW") {
            ds_condWt.setCellData(lastRow, "scAmt", ds_dcScInfo.getCellData(i, "ctrtTrf"));
            ds_condWt.setCellData(lastRow, "scAmtFcrc", 0);
          } else {
            ds_condWt.setCellData(lastRow, "scAmt", (ds_dcScInfo.getCellData(i, "ctrtTrf") * adptExchRt).toFixed(0));
            ds_condWt.setCellData(lastRow, "scAmtFcrc", ds_dcScInfo.getCellData(i, "ctrtTrf"));
          }
          ds_condWt.setCellData(lastRow, "scRt", ds_dcScInfo.getCellData(i, "ctrtTrfRt"));
          ds_condWt.setCellData(lastRow, "famtFratClsCd", ds_dcScInfo.getCellData(i, "famtFratClsCd"));
          commCdYn = "Y";
        }
      }
    }
    if (commCdYn == "N") {
      for (let i = 0; i < ds_dcScInfo.getRowCount(); i++) {
        if (ds_dcScInfo.getCellData(i, "dcScSelpchItemCd") == scwin.wtDcScCd && ds_dcScInfo.getCellData(i, "commCd") == ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "upperCommCd")) {
          let condWt = ds_dcScInfo.getCellData(i, "minCondWt") + "~" + ds_dcScInfo.getCellData(i, "maxCondWt");
          let sameYn = "N";
          for (let j = 0; j < ds_condWt.getRowCount(); j++) {
            if (ds_condWt.getCellData(j, "commCd") == ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "commCd") && ds_condWt.getCellData(j, "condWt") == condWt) {
              sameYn = "Y";
              break;
            }
          }
          if (condWt != "" && sameYn == "N") {
            ds_condWt.insertRow();
            let lastRow = ds_condWt.getRowCount() - 1;
            let adptExchRt = ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "adptExchRt");
            ds_condWt.setCellData(lastRow, "odrSellSeq", 0);
            ds_condWt.setCellData(lastRow, "commCd", ds_sellInfo.getCellData(ds_sellInfo.getRowPosition(), "commCd"));
            ds_condWt.setCellData(lastRow, "unitCd", ds_dcScInfo.getCellData(i, "unitCd"));
            ds_condWt.setCellData(lastRow, "crcCd", ds_dcScInfo.getCellData(i, "crcCd"));
            ds_condWt.setCellData(lastRow, "condWt", condWt);
            if (ds_dcScInfo.getCellData(i, "crcCd") == "KRW") {
              ds_condWt.setCellData(lastRow, "scAmt", ds_dcScInfo.getCellData(i, "ctrtTrf"));
              ds_condWt.setCellData(lastRow, "scAmtFcrc", 0);
            } else {
              ds_condWt.setCellData(lastRow, "scAmt", (ds_dcScInfo.getCellData(i, "ctrtTrf") * adptExchRt).toFixed(0));
              ds_condWt.setCellData(lastRow, "scAmtFcrc", ds_dcScInfo.getCellData(i, "ctrtTrf"));
            }
            ds_condWt.setCellData(lastRow, "scRt", ds_dcScInfo.getCellData(i, "ctrtTrfRt"));
            ds_condWt.setCellData(lastRow, "famtFratClsCd", ds_dcScInfo.getCellData(i, "famtFratClsCd"));
          }
        }
      }
    }
  } else {
    ds_condWt.removeAll();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_sellInfo.getRowCount() > 0) {
    td_ctrtClntNm.setValue(" " + ds_sellInfo.getCellData(0, "ctrtClntNm"));
    td_ctrtNo.setValue(" " + ds_sellInfo.getCellData(0, "ctrtNo"));
    td_bilgClntNm.setValue(" " + ds_sellInfo.getCellData(0, "bilgClntNm"));
    let odrNo = ds_sellInfo.getCellData(0, "odrNo");
    scwin.f_set("RETRIEVE");
    for (let i = 0; i < ds_sellInfo.getRowCount(); i++) {
      let famtFratClsCd = "";
      if (ds_sellInfo.getCellData(i, "scAmt") > 0 && ds_sellInfo.getCellData(i, "scRt") == 0) {
        ds_sellInfo.setCellData(i, "famtFratClsCd", "FM");
      } else if (ds_sellInfo.getCellData(i, "scAmt") == 0 && ds_sellInfo.getCellData(i, "scRt") > 0) {
        ds_sellInfo.setCellData(i, "famtFratClsCd", "FR");
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
    lc_selpchItemNm.setSelectedIndex(0);
    lc_ctrtWrkPathNm.setSelectedIndex(0);
    scwin.f_filter();
    scwin.f_checkOdrStatus();
  } else {
    await $c.gus.cfAlertMsg($p, "작업경로를 먼저 등록하신 후에 할인할증을 등록할 수 있습니다.");
    scwin.f_set("INIT");
  }
  totalRows.setValue(ds_sellInfo.getRowCount());
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  scwin.f_set("INIT");
};
scwin.sbm_save_submitdone = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_sellInfo_onrowpositionchange = function (rowIndex, oldRowIndex) {
  scwin.f_setEditByValue();
};
scwin.gr_sellInfo_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "dcScCd") {
    scwin.f_openPopUpGrid(ds_sellInfo, columnId, "dcScNm", "F");
  }
};
scwin.gr_sellInfo_oneditend = async function (rowIndex, columnId, oldValue, newValue) {
  let row = rowIndex;
  let colid = columnId;
  let val = newValue;
  let olddata = oldValue;
  if (colid == "dcScCd") {
    let dcScCd = ds_sellInfo.getCellData(row, colid);
    if (dcScCd == "") {
      ds_sellInfo.setCellData(row, "dcScNm", "");
      scwin.f_setValue();
    } else {
      if (dcScCd != olddata) {
        ds_sellInfo.setCellData(row, "dcScNm", "");
        scwin.f_openPopUpGrid(ds_sellInfo, colid, "dcScNm", "T");
      }
    }
    scwin.f_calAmt();
  } else if (colid == "dcScNm") {
    scwin.f_calAmt();
  } else if (colid == "scAmtAll") {
    let adptExchRt = ds_sellInfo.getCellData(row, "adptExchRt");
    let crcCd = ds_sellInfo.getCellData(row, "crcCd");
    if (val > 0) {
      ds_sellInfo.setCellData(row, "famtFratClsCd", "FM");
      gr_sellInfo.setColumnProp("scRt", "readOnly", true);
      scwin.f_calAmt();
    } else if (val < 0) {
      gr_sellInfo.setColumnProp("scRt", "readOnly", true);
    } else {
      gr_sellInfo.setColumnProp("scRt", "readOnly", false);
      scwin.f_calAmt();
    }
    if (crcCd == "KRW") {
      ds_sellInfo.setCellData(row, "scAmtFcrc", 0);
      ds_sellInfo.setCellData(row, "scAmt", ds_sellInfo.getCellData(row, "scAmtAll"));
    } else {
      ds_sellInfo.setCellData(row, "scAmtFcrc", ds_sellInfo.getCellData(row, "scAmtAll"));
      ds_sellInfo.setCellData(row, "scAmt", (ds_sellInfo.getCellData(row, "scAmtAll") * adptExchRt).toFixed(0));
    }
  } else if (colid == "scRt") {
    if (val > 0) {
      ds_sellInfo.setCellData(row, "famtFratClsCd", "FR");
      gr_sellInfo.setColumnProp("scAmtAll", "readOnly", true);
      scwin.f_calAmt();
    } else if (val < 0) {
      gr_sellInfo.setColumnProp("scAmtAll", "readOnly", true);
    } else {
      gr_sellInfo.setColumnProp("scAmtAll", "readOnly", false);
      gr_sellInfo.setColumnProp("condWtNm", "readOnly", false);
      scwin.f_calAmt();
    }
  } else if (colid == "wt") {
    let orgWt = ds_sellInfo.getCellData(row, "orgWt");
    let wt = val;
    if (wt > 0) {
      if (orgWt > 0) {
        if (wt > orgWt) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_014, ["적용중량", "오더매출중량"]);
          ds_sellInfo.setCellData(row, "wt", ds_sellInfo.getOrgCellData(row, "wt"));
          return;
        }
        scwin.f_calAmt();
      }
    } else {
      ds_sellInfo.setCellData(row, "wt", Math.abs(ds_sellInfo.getCellData(row, "wt")));
    }
  } else if (colid == "sellAmtAll") {
    let adptExchRt = ds_sellInfo.getCellData(row, "adptExchRt");
    let crcCd = ds_sellInfo.getCellData(row, "crcCd");
    if (val > 0) {
      if (crcCd == "KRW") {
        ds_sellInfo.setCellData(row, "sellAmt", ds_sellInfo.getCellData(row, "sellAmtAll"));
        ds_sellInfo.setCellData(row, "sellAmtFcrc", 0);
      } else {
        ds_sellInfo.setCellData(row, "sellAmt", (ds_sellInfo.getCellData(row, "sellAmtAll") * adptExchRt).toFixed(0));
        ds_sellInfo.setCellData(row, "sellAmtFcrc", ds_sellInfo.getCellData(row, "sellAmtAll"));
      }
    } else if (val < 0) {}
  } else if (colid == "sellCommNm") {
    let sellCommNm = ds_sellInfo.getCellData(row, colid);
    for (let i = 0; i < ds_commCd.getRowCount(); i++) {
      if (ds_commCd.getCellData(i, "sellCommNm") == sellCommNm) {
        ds_sellInfo.setCellData(row, "commCd", ds_commCd.getCellData(i, "commCd"));
        break;
      }
    }
    scwin.f_setValue();
    scwin.f_calAmt();
  } else if (colid == "condWtNm") {
    let condWtNm = ds_sellInfo.getCellData(row, colid);
    ds_sellInfo.setCellData(row, "minCondWt", condWtNm.substring(0, condWtNm.indexOf("~", 0)));
    ds_sellInfo.setCellData(row, "maxCondWt", condWtNm.substring(condWtNm.indexOf("~", 0) + 1));
    for (let i = 0; i < ds_condWt.getRowCount(); i++) {
      if (ds_condWt.getCellData(i, "commCd") == ds_sellInfo.getCellData(row, "commCd") && ds_condWt.getCellData(i, "condWt") == ds_sellInfo.getCellData(row, "condWtNm")) {
        let adptExchRt = ds_sellInfo.getCellData(row, "adptExchRt");
        if (ds_condWt.getCellData(i, "crcCd") == ds_sellInfo.getCellData(row, "crcCd")) {
          if (ds_condWt.getCellData(i, "crcCd") == "KRW") {
            ds_sellInfo.setCellData(row, "scAmtAll", ds_condWt.getCellData(i, "scAmt"));
          } else {
            ds_sellInfo.setCellData(row, "scAmtAll", ds_condWt.getCellData(i, "scAmtFcrc"));
          }
          ds_sellInfo.setCellData(row, "scAmtFcrc", ds_condWt.getCellData(i, "scAmtFcrc"));
          ds_sellInfo.setCellData(row, "scAmt", ds_condWt.getCellData(i, "scAmt"));
          ds_sellInfo.setCellData(row, "scRt", ds_condWt.getCellData(i, "scRt"));
          ds_sellInfo.setCellData(row, "famtFratClsCd", ds_condWt.getCellData(i, "famtFratClsCd"));
        } else {
          ds_sellInfo.setCellData(row, "crcCd", ds_condWt.getCellData(i, "crcCd"));
          if (ds_condWt.getCellData(i, "crcCd") == "KRW") {
            ds_sellInfo.setCellData(row, "scAmtAll", ds_condWt.getCellData(i, "scAmt"));
          } else {
            ds_sellInfo.setCellData(row, "scAmtAll", ds_condWt.getCellData(i, "scAmtFcrc"));
          }
          ds_sellInfo.setCellData(row, "scAmtFcrc", ds_condWt.getCellData(i, "scAmtFcrc"));
          ds_sellInfo.setCellData(row, "scAmt", ds_condWt.getCellData(i, "scAmt"));
          ds_sellInfo.setCellData(row, "scRt", ds_condWt.getCellData(i, "scRt"));
          ds_sellInfo.setCellData(row, "famtFratClsCd", ds_condWt.getCellData(i, "famtFratClsCd"));
        }
        if (ds_sellInfo.getCellData(row, "famtFratClsCd") == "FM") {
          gr_sellInfo.setColumnProp("scRt", "readOnly", true);
          gr_sellInfo.setColumnProp("scAmtAll", "readOnly", false);
        } else if (ds_sellInfo.getCellData(row, "famtFratClsCd") == "FR") {
          gr_sellInfo.setColumnProp("scRt", "readOnly", false);
          gr_sellInfo.setColumnProp("scAmtAll", "readOnly", true);
        } else {
          gr_sellInfo.setColumnProp("scRt", "readOnly", false);
          gr_sellInfo.setColumnProp("scAmtAll", "readOnly", false);
        }
        scwin.f_calAmt();
        return;
      }
    }
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
scwin.gr_sellInfo_ondropdown = function (rowIndex, columnId) {
  if (columnId == "condWtNm") {
    scwin.f_createComboCondWtGridByCtrt();
  }
};
scwin.ed_odrNo_onkeyup = function (e) {
  if (e.keyCode == 13) scwin.f_Retrieve();
};
scwin.lc_selpchItemNm_onchange = async function (e) {
  let vld = await $c.gus.cfValidate($p, [tbl_sellInfoArea, gr_sellInfo]);
  if (!vld) return;
  scwin.f_filter();
};
scwin.lc_ctrtWrkPathNm_onchange = async function (e) {
  let vld = await $c.gus.cfValidate($p, [tbl_sellInfoArea, gr_sellInfo]);
  if (!vld) return;
  scwin.f_filter();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_fieldClear();
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'grp_content',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_searchBox',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'grp_searchInner',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'grp_cndRow1',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_odrNoLabel',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width: 150px;',checkMaxByteOnInput:' ',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'grp_searchBtn',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btnRetrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_dataArea',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'grp_sellInfoBox',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_sellInfoArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_ctrtClntNmLabel',label:'계약처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'td_ctrtClntNm',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_ctrtNoLabel',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_ctrtNo',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_bilgClntNmLabel',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_bilgClntNm',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_selpchItemNmLabel',label:'요율항목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_selpchItemNm',search:'start',style:'width:250px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_ctrtWrkPathNmLabel',label:'작업경로',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtWrkPathNm',search:'start',style:'width:250px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_gridArea',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_sellInfo',focusMode:'row',id:'gr_sellInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dcScCd',inputType:'text',removeBorderStyle:'false',width:'120',value:'할증항목코드',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dcScNm',inputType:'text',removeBorderStyle:'false',width:'100',value:'할증항목',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commCd',inputType:'text',removeBorderStyle:'false',width:'100',value:'품명코드',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'100',value:'품명순번',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNm',inputType:'text',value:'품명',width:'150',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',value:'계약단위',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'text',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'scAmtAll',inputType:'text',value:'할증금액',width:'100',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'scAmtFcrc',value:'할증금액(외화)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'scAmt',value:'할증금액(원화)',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scRt',value:'할증률(%)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',value:'작업단계',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'minCondWt',value:'최소조건중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'maxCondWt',value:'최대조건중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'condWtNm',value:'조건중량',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orgWt',value:'매출중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orgSellUpr',value:'매출단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'적용중량',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellAmtAll',value:'적용할증금액',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmtFcrc',value:'외화',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'원화',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'famtFratClsCd',value:'정액정률구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptExchRt',value:'환율',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dcScCd',inputType:'textImage',removeBorderStyle:'false',width:'120',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dcScNm',inputType:'text',removeBorderStyle:'false',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'dcScNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_dcScCd'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commSeq',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNm',inputType:'text',width:'150',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'sellCommNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_commCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'text',width:'70',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'sellUnitCd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_sellUnitCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'crcCd'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_crcCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'scAmtAll',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'scAmtFcrc',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'scAmt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scRt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpCd',displayMode:'label',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpInfo'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'minCondWt',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'maxCondWt',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'condWtNm',displayMode:'label',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'condWt'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_condWt'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orgWt',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'orgSellUpr',displayMode:'label',textAlign:'rigth',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellAmtAll',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmtFcrc',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'famtFratClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptExchRt',value:'',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'grp_gridBottom',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'grp_gridLeft'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_totalRows'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalLabel',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_totalUnit',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_gridRight',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'grp_btnBox'},E:[{T:1,N:'xf:group',A:{class:'right',id:'grp_btnRight'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btnUpdate',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnSave',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})