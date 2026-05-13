/*amd /AI/op_205_01_01b.xml 134599 6d31ee06e73b55da6fb8fef2eabec115a089341437e1389b1687814d2e128c2e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'도착역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtTo',name:'작업일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condCntrBasisInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkIndication',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStn',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transLongNo',name:'화물운송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'배분량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsVol',name:'실제작업량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAppTeu',name:'사유화차신청량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'teu',name:'사유화차배분량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppTeu',name:'전용화차신청량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsTeu',name:'전용화차배분량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'btRsltsVol',name:'실제작업량저수요',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptHndlRateSateYn',name:'출발역조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateSateYn',name:'도착역조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSts',name:'전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnCd',name:'출발역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnCd',name:'도착역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'EDI전송여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkIndicationDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prvtAppCnt20Empty',name:'사유20E신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt20Full',name:'사유20F신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt40Empty',name:'사유40E신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt40Full',name:'사유40F신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt45Empty',name:'사유45E신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt45Full',name:'사유45F신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt20Empty',name:'사유20E배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt20Full',name:'사유20F배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt40Empty',name:'사유40E배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt40Full',name:'사유40F배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt45Empty',name:'사유45E배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt45Full',name:'사유45F배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt20Empty',name:'전용20E신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt20Full',name:'전용20F신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt40Empty',name:'전용40E신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt40Full',name:'전용40F신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt45Empty',name:'전용45E신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt45Full',name:'전용45F신청',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt20Empty',name:'전용20E배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt20Full',name:'전용20F배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt40Empty',name:'전용40E배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt40Full',name:'전용40F배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt45Empty',name:'전용45E배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt45Full',name:'전용45F배정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt20Empty',name:'공사20E',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt20Full',name:'공사20F',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt40Empty',name:'공사40E',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt40Full',name:'공사40F',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt45Empty',name:'공사45E',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt45Full',name:'공사45F',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ShippingWeightContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypShowCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Tp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SealNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onewayYn',name:'편도여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnNo',name:'열차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmCd',name:'운송명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmClntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmTrgtYn',name:'철송임미생성',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmEndScYn',name:'월말할증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncportYn',name:'신항여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateSateYn',name:'출발역조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateSateYn',name:'도착역조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadEdiSndYn',name:'EDI전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsNm',name:'전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsMsg',name:'취소전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyState',name:'응답상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCnt',name:'컨테이너수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'frtcarCapa',name:'화차용량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'shipwgtTeu',name:'적재TEU',dataType:'number'}},{T:1,N:'w2:column',A:{id:'frzYn',name:'냉동여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnCd',name:'출발역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnCd',name:'도착역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actState',name:'액션상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldArvDt',name:'이전도착일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldArvHh',name:'이전도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldDptDt',name:'이전출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldDptHh',name:'이전출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnLobranCd',name:'출발역법인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnLobranCd',name:'도착역법인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCutAmt',name:'철도절사금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvUpperWrkPlCd',name:'도착상위작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptUpperWrkPlCd',name:'출발상위작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateWrkStpSeq',name:'출발조작료단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateWrkStpSeq',name:'도착조작료단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btRsnCheck',name:'BT사유체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delAllowFlag',name:'삭제허용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'EDI전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoSndYn',name:'사전정보전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkAutoEdiYn',name:'자동EDI여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptDt',name:'매입적용일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ShippingWeightContentsEdiSend',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_transNmCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RegistShippingWeightSubInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_stateKind',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_preInfoSndYn',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadFare',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFare',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuCnt',name:'TEU수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisInfoResult',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SealNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'WrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'WrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateSateYn',name:'출발조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateSateYn',name:'도착조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnLobranCd',name:'출발역법인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnLobranCd',name:'도착역법인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCutAmt',name:'철도절사금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvUpperWrkPlCd',name:'도착상위작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadEdiSndYn',name:'EDI전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptUpperWrkPlCd',name:'출발상위작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateWrkStpSeq',name:'출발조작료단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateWrkStpSeq',name:'도착조작료단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btRsnCheck',name:'BT사유체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmEndScYn',name:'월말할증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAdptDay',name:'할증적용일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptDt',name:'매입적용일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkIndication',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadWorkIndicationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkIndication","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadWorkIndication","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveRailroadWorkIndication_submitdone','ev:submiterror':'scwin.sbm_RetrieveRailroadWorkIndication_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkIndicationDetail',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadWorkIndicationDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkIndicationDetail","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadWorkIndicationDetail","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveRailroadWorkIndicationDetail_submitdone','ev:submiterror':'scwin.sbm_RetrieveRailroadWorkIndicationDetail_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveShippingWeightContents',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveShippingWeightContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_ShippingWeightContents","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ShippingWeightContents","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveShippingWeightContents_submitdone','ev:submiterror':'scwin.sbm_RetrieveShippingWeightContents_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadFare',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadFareCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadFare","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadFare","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveRailroadFare_submitdone','ev:submiterror':'scwin.sbm_RetrieveRailroadFare_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RegistShippingWeightContents',action:'/ds.op.wrkrslts.railroadwrkrslts.RegistShippingWeightContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_ShippingWeightContents","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_RegistShippingWeightContents_submitdone','ev:submiterror':'scwin.sbm_RegistShippingWeightContents_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RegistShippingWeightBatchTransmissionEdi',action:'/ds.op.wrkrslts.railroadwrkrslts.RegistShippingWeightBatchTransmissionEdiCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_RailroadWorkIndication","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_RegistShippingWeightBatchTransmissionEdi_submitdone','ev:submiterror':'scwin.sbm_RegistShippingWeightBatchTransmissionEdi_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SaveRailroadFare',action:'/ds.op.wrkplan.railroadwrkplan.SaveRailroadFareCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_RailroadFare","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_SaveRailroadFare_submitdone','ev:submiterror':'scwin.sbm_SaveRailroadFare_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RegistShippingWeightContentsEdiSend',action:'/ds.op.wrkrslts.railroadwrkrslts.RegistShippingWeightContentsEdiSendCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_ShippingWeightContentsEdiSend","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_RegistShippingWeightContentsEdiSend_submitdone','ev:submiterror':'scwin.sbm_RegistShippingWeightContentsEdiSend_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBasisInfo',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveContainerInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condCntrBasisInfo","key":"IN_DS1"},{"id":"ds_cntrBasisInfoResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrBasisInfoResult","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveCntrBasisInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveCntrBasisInfo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveTransNmCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_combo_transNmCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_combo_transNmCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveTransNmCd_submitdone','ev:submiterror':'scwin.sbm_RetrieveTransNmCd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveStateKind',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_combo_stateKind","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_combo_stateKind","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveStateKind_submitdone','ev:submiterror':'scwin.sbm_RetrieveStateKind_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrievePreInfoSndYn',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_preInfoSndYn","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_preInfoSndYn","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrievePreInfoSndYn_submitdone','ev:submiterror':'scwin.sbm_RetrievePreInfoSndYn_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.oldrowData = 0;
scwin.dateStr = "";
scwin.dptStnCd = "";
scwin.arvStnCd = "";
scwin.onReqDt = "";
scwin.cntrNo = "";
scwin.frtcarNo = "";
scwin.btCls = "";
scwin.onpageload = async function () {
  scwin.dateStr = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.params = $c.data.getParameter($p);
  scwin.dptStnCd = scwin.params && scwin.params.dptStnCd ? scwin.params.dptStnCd : "";
  scwin.arvStnCd = scwin.params && scwin.params.arvStnCd ? scwin.params.arvStnCd : "";
  scwin.onReqDt = scwin.params && scwin.params.onReqDt ? scwin.params.onReqDt : "";
  scwin.cntrNo = scwin.params && scwin.params.cntrNo ? scwin.params.cntrNo : "";
  scwin.frtcarNo = scwin.params && scwin.params.frtcarNo ? scwin.params.frtcarNo : "";
  scwin.btCls = scwin.params && scwin.params.btCls ? scwin.params.btCls : "";
  ds_RailroadFare.removeAll();
  ds_RailroadFare.insertRow();
};
scwin.onUdcCompleted = async function () {
  udc_wrkDt.setInitDate(scwin.dateStr, scwin.dateStr);
  ed_begintrainWorkPlaceCd.setFocus();
  $c.gus.cfDisableBtn($p, [btn_trigger2, btn_save, btn_trigger4, btn_trigger1]);
  scwin.f_RetrieveTransNmCd("OP147");
  scwin.f_RetrieveStateKind();
  if (scwin.dptStnCd != "" && scwin.arvStnCd != "" && scwin.onReqDt != "") {
    scwin.f_qeryList();
  }
};
scwin.f_createHeader = async function () {
  ds_RailroadFare.removeAll();
  ds_RailroadFare.insertRow();
};
scwin.f_qeryList = async function () {
  let chk = await $c.gus.cfValidate($p, [ica_wrkDt, ica_wrkDtTo]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_wrkDt.getValue(), ica_wrkDtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_wrkDt.setFocus();
    return;
  }
  ds_ShippingWeightContents.removeAll();
  ds_RailroadWorkIndication.removeAll();
  ds_RailroadWorkIndicationDetail.removeAll();
  if (scwin.dptStnCd != "" && scwin.arvStnCd != "" && scwin.onReqDt != "") {
    ica_wrkDt.setValue(scwin.onReqDt);
    ica_wrkDtTo.setValue(scwin.onReqDt);
    ed_begintrainWorkPlaceCd.setValue(scwin.dptStnCd);
    ed_endtrainWorkPlaceCd.setValue(scwin.arvStnCd);
  }
  dma_QueryCondition.set("wrkDt", ica_wrkDt.getValue());
  dma_QueryCondition.set("dptStn", ed_begintrainWorkPlaceCd.getValue());
  dma_QueryCondition.set("arvStn", ed_endtrainWorkPlaceCd.getValue());
  dma_QueryCondition.set("wrkDtTo", ica_wrkDtTo.getValue());
  await $c.sbm.execute($p, sbm_RetrieveRailroadWorkIndication);
  scwin.oldrowData = 0;
  scwin.onReqDt = "";
  scwin.dptStnCd = "";
  scwin.arvStnCd = "";
};
scwin.f_Save = async function (p_gubun) {
  let lastRow = ds_ShippingWeightContents.getRowCount() - 1;
  if (lastRow >= 0 && ds_ShippingWeightContents.getCellData(lastRow, "cntrNo") == "") {
    ds_ShippingWeightContents.setRowPosition(lastRow);
    scwin.f_DeleteAct();
  }
  let curRowPos = ds_RailroadWorkIndication.getRowPosition();
  if (curRowPos >= 0) {
    if (ds_RailroadWorkIndication.getCellData(curRowPos, "dptStnCd") == "4R01" || ds_RailroadWorkIndication.getCellData(curRowPos, "arvStnCd") == "4R01" || ds_RailroadWorkIndication.getCellData(curRowPos, "dptStnCd") == "4R02" || ds_RailroadWorkIndication.getCellData(curRowPos, "arvStnCd") == "4R02") {
      p_gubun = "Auto";
    }
  }
  for (let m = 0; m < ds_ShippingWeightContents.getRowCount(); m++) {
    if (ds_ShippingWeightContents.getCellData(m, "btRsnCheck") == "BT") {
      if (ds_ShippingWeightContents.getCellData(m, "adminfrtcarYn") != "2") {
        await $c.win.alert($p, "컨테이너 " + ds_ShippingWeightContents.getCellData(m, "cntrNo") + " 의 화차구분은 저수요로 지정되어야 합니다.");
        ds_ShippingWeightContents.setCellData(m, "adminfrtcarYn", "2");
        return false;
      }
    }
    if (ds_ShippingWeightContents.getCellData(m, "btRsnCheck") == "RSN") {
      if (ds_ShippingWeightContents.getCellData(m, "adminfrtcarYn") != "0") {
        await $c.win.alert($p, "컨테이너" + ds_ShippingWeightContents.getCellData(m, "cntrNo") + " 의 화차구분은 사유로 지정되어야 합니다.");
        ds_ShippingWeightContents.setCellData(m, "adminfrtcarYn", "0");
        return false;
      }
    }
  }
  for (let n = 0; n < ds_ShippingWeightContents.getRowCount(); n++) {
    if (ds_ShippingWeightContents.getCellData(n, "adminfrtcarYn") != "3" && ds_ShippingWeightContents.getCellData(n, "adminfrtcarYn") != "2" && ds_ShippingWeightContents.getCellData(n, "adminfrtcarYn") != "4" && ds_ShippingWeightContents.getCellData(n, "transNmCd") != "DB" && ds_ShippingWeightContents.getRowStatus(n) != "D") {
      await $c.win.alert($p, "컨테이너" + ds_ShippingWeightContents.getCellData(n, "cntrNo") + " 의 화차구분은 운송명의가 타사이므로 \n\n전용/예비/저수요로 지정되어야 합니다.");
      return false;
    }
  }
  let lastN = ds_ShippingWeightContents.getRowCount() - 1;
  if (lastN >= 0 && ds_ShippingWeightContents.getCellData(lastN, "transNmCd") == "DB") {
    let btTeu = 0;
    let v_curTeu = ds_RailroadFare.getCellData(0, "teuCnt");
    let cur_Rows = ds_ShippingWeightContents.getRowCount();
    for (let i = 0; i < cur_Rows; i++) {
      if (ds_ShippingWeightContents.getCellData(i, "cntrNo") != "" && ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "2") {
        if (ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20") {
          btTeu++;
        } else {
          btTeu = btTeu + 2;
        }
      }
    }
    if (btTeu > v_curTeu) {
      if (curRowPos >= 0) {
        if (ds_RailroadWorkIndication.getCellData(curRowPos, "dptStnCd") == "4R01" && ds_RailroadWorkIndication.getCellData(curRowPos, "arvStnCd") == "6R12" || ds_RailroadWorkIndication.getCellData(curRowPos, "dptStnCd") == "6R12" && ds_RailroadWorkIndication.getCellData(curRowPos, "arvStnCd") == "4R01") {
          await $c.win.alert($p, "배정된 저수요수량[" + v_curTeu + "]보다 많은 컨테이너가 적재되어 저장할 수 없습니다.");
          return;
        }
      }
    }
  }
  let cur_rowpos2 = ds_RailroadWorkIndication.getRowPosition();
  let v_empty20 = 0,
    v_full20 = 0,
    v_empty40 = 0,
    v_full40 = 0,
    v_empty45 = 0,
    v_full45 = 0;
  let v_xcls_empty20 = 0,
    v_xcls_full20 = 0,
    v_xcls_empty40 = 0,
    v_xcls_full40 = 0,
    v_xcls_empty45 = 0,
    v_xcls_full45 = 0;
  let detailRowPos = ds_RailroadWorkIndicationDetail.getRowPosition();
  for (let i = 0; i < ds_ShippingWeightContents.getRowCount(); i++) {
    let rowState = ds_ShippingWeightContents.getRowStatus(i);
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "0" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") v_empty20++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "0" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") v_full20++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "0" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "40" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") v_empty40++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "0" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "40" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") v_full40++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "0" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "45" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") v_empty45++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "0" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "45" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") v_full45++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") v_xcls_empty20++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") v_xcls_full20++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "40" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") v_xcls_empty40++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "40" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") v_xcls_full40++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "45" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") v_xcls_empty45++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "45" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") v_xcls_full45++;
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") {
      if (detailRowPos >= 0 && v_xcls_empty20 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAssgnCnt20Empty")) {
        ds_ShippingWeightContents.setCellData(i, "frtcarCapa", "2");
      }
    }
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") {
      if (detailRowPos >= 0 && v_xcls_full20 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAssgnCnt20Full")) {
        ds_ShippingWeightContents.setCellData(i, "frtcarCapa", "2");
      }
    }
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "40" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") {
      if (detailRowPos >= 0 && v_xcls_empty40 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAssgnCnt40Empty")) {
        ds_ShippingWeightContents.setCellData(i, "frtcarCapa", "2");
      }
    }
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "40" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") {
      if (detailRowPos >= 0 && v_xcls_full40 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAssgnCnt40Full")) {
        ds_ShippingWeightContents.setCellData(i, "frtcarCapa", "2");
      }
    }
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "45" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "E") {
      if (detailRowPos >= 0 && v_xcls_empty45 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAssgnCnt45Empty")) {
        ds_ShippingWeightContents.setCellData(i, "frtcarCapa", "2");
      }
    }
    if (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3" && ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "45" && ds_ShippingWeightContents.getCellData(i, "fullEmptyClsCd") == "F") {
      if (detailRowPos >= 0 && v_xcls_full45 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAssgnCnt45Full")) {
        ds_ShippingWeightContents.setCellData(i, "frtcarCapa", "2");
      }
    }
    if (rowState == "R") {
      continue;
    }
    if (rowState == "C") {
      ds_ShippingWeightContents.setCellData(i, "oldArvDt", "");
      ds_ShippingWeightContents.setCellData(i, "oldArvHh", "");
      ds_ShippingWeightContents.setCellData(i, "oldDptDt", "");
      ds_ShippingWeightContents.setCellData(i, "oldDptHh", "");
    } else {
      ds_ShippingWeightContents.setCellData(i, "oldArvDt", ds_ShippingWeightContents.getOrgCellData(i, "arvDt"));
      ds_ShippingWeightContents.setCellData(i, "oldArvHh", ds_ShippingWeightContents.getOrgCellData(i, "arvHh"));
      ds_ShippingWeightContents.setCellData(i, "oldDptDt", ds_ShippingWeightContents.getOrgCellData(i, "dptDt"));
      ds_ShippingWeightContents.setCellData(i, "oldDptHh", ds_ShippingWeightContents.getOrgCellData(i, "dptHh"));
    }
    if (ds_ShippingWeightContents.getCellData(i, "arvDtm") != "") {
      ds_ShippingWeightContents.setCellData(i, "arvDt", ds_ShippingWeightContents.getCellData(i, "arvDtm").substr(0, 8));
      ds_ShippingWeightContents.setCellData(i, "arvHh", ds_ShippingWeightContents.getCellData(i, "arvDtm").substr(8, 4));
    } else {
      ds_ShippingWeightContents.setCellData(i, "arvDt", "");
      ds_ShippingWeightContents.setCellData(i, "arvHh", "");
    }
    if (rowState == "C") {
      ds_ShippingWeightContents.setCellData(i, "actState", "S");
    } else if (rowState == "D") {
      ds_ShippingWeightContents.setCellData(i, "actState", "D");
    } else if (rowState == "U") {
      ds_ShippingWeightContents.setCellData(i, "actState", "U");
    }
    if (ds_ShippingWeightContents.getCellData(i, "cntrNo") == "") {
      await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "번째 줄]" + MSG_CM_ERR_002, ["컨테이너번호"]);
      ds_ShippingWeightContents.setRowPosition(i);
      gr_ShippingWeightContents.setFocusedCell(i, "cntrNo");
      return;
    }
    if (ds_ShippingWeightContents.getCellData(i, "transWrkIndictNo").trim() == "") {
      ds_ShippingWeightContents.setCellData(i, "transWrkIndictNo", ds_RailroadWorkIndication.getCellData(cur_rowpos2, "wrkIndictNo"));
    }
    if (ds_ShippingWeightContents.getCellData(i, "wrkDt").trim() == "") {
      ds_ShippingWeightContents.setCellData(i, "wrkDt", ds_RailroadWorkIndication.getCellData(cur_rowpos2, "reqDt"));
    }
    if (ds_ShippingWeightContents.getCellData(i, "dptStnCd").trim() == "") {
      ds_ShippingWeightContents.setCellData(i, "dptStnCd", ds_RailroadWorkIndication.getCellData(cur_rowpos2, "dptStnCd"));
    }
    if (ds_ShippingWeightContents.getCellData(i, "arvStnCd").trim() == "") {
      ds_ShippingWeightContents.setCellData(i, "arvStnCd", ds_RailroadWorkIndication.getCellData(cur_rowpos2, "arvStnCd"));
    }
    if (ds_ShippingWeightContents.getCellData(i, "dptStnCd") == "4R01" && ds_ShippingWeightContents.getCellData(i, "arvStnCd") == "6R12") {
      if (ds_ShippingWeightContents.getCellData(i, "transNmCd").trim() == "DB") {
        ds_ShippingWeightContents.setCellData(i, "arvUpperWrkPlCd", "");
      }
    }
    if (ds_ShippingWeightContents.getCellData(i, "dptStnCd") == "4R01" && ds_ShippingWeightContents.getCellData(i, "arvStnCd") == "6R01") {
      if (ds_ShippingWeightContents.getCellData(i, "transNmCd").trim() == "DB") {
        ds_ShippingWeightContents.setCellData(i, "arvUpperWrkPlCd", "");
      } else if (ds_ShippingWeightContents.getCellData(i, "transNmCd").trim() == "GT") {
        ds_ShippingWeightContents.setCellData(i, "arvUpperWrkPlCd", "");
      } else if (ds_ShippingWeightContents.getCellData(i, "transNmCd").trim() == "KL" && ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "2") {
        ds_ShippingWeightContents.setCellData(i, "arvUpperWrkPlCd", "");
      }
    }
  }
  let swcRowPos = ds_ShippingWeightContents.getRowPosition();
  if (swcRowPos >= 0 && ds_ShippingWeightContents.getCellData(swcRowPos, "transNmCd").trim() == "DB" && (ds_ShippingWeightContents.getRowStatus(swcRowPos) == "C" || ds_ShippingWeightContents.getRowStatus(swcRowPos) == "U")) {
    if (detailRowPos >= 0 && v_empty20 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "prvtAssgnCnt20Empty")) {
      if (cur_rowpos2 >= 0 && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "dptStnCd") != "2R05" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "dptStnCd") != "2R06" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "dptStnCd") != "2R07") {
        await $c.gus.cfAlertMsg($p, "20 Feet Empty 컨테이너의 사유화차 배정량을 초과했습니다");
        return;
      }
    }
    if (detailRowPos >= 0 && v_full20 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "prvtAssgnCnt20Full")) {
      if (cur_rowpos2 >= 0 && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "arvStnCd") != "2R05" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "arvStnCd") != "2R06" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "arvStnCd") != "2R07") {
        await $c.gus.cfAlertMsg($p, "20 Feet Full 컨테이너의 사유화차 배정량을 초과했습니다");
        return;
      }
    }
    if (detailRowPos >= 0 && v_empty40 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "prvtAssgnCnt40Empty")) {
      await $c.gus.cfAlertMsg($p, "40 Feet Empty 컨테이너의 사유화차 배정량을 초과했습니다");
      return;
    }
    if (detailRowPos >= 0 && v_full40 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "prvtAssgnCnt40Full")) {
      await $c.gus.cfAlertMsg($p, "40 Feet Full 컨테이너의 사유화차 배정량을 초과했습니다");
      return;
    }
    if (detailRowPos >= 0 && v_empty45 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "prvtAssgnCnt45Empty")) {
      await $c.gus.cfAlertMsg($p, "45 Feet Empty 컨테이너의 사유화차 배정량을 초과했습니다");
      return;
    }
    if (detailRowPos >= 0 && v_full45 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "prvtAssgnCnt45Full")) {
      await $c.gus.cfAlertMsg($p, "45 Feet Full 컨테이너의 사유화차 배정량을 초과했습니다");
      return;
    }
    if (detailRowPos >= 0 && v_xcls_empty20 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAppCnt20Empty")) {
      if (cur_rowpos2 >= 0 && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "dptStnCd") != "2R05" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "dptStnCd") != "2R06" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "dptStnCd") != "2R07") {
        await $c.gus.cfAlertMsg($p, "20 Feet Empty 컨테이너의 전용화차 신청량을 초과했습니다");
        return;
      }
    }
    if (detailRowPos >= 0 && v_xcls_full20 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAppCnt20Full")) {
      if (cur_rowpos2 >= 0 && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "arvStnCd") != "2R05" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "arvStnCd") != "2R06" && ds_RailroadWorkIndication.getCellData(cur_rowpos2, "arvStnCd") != "2R07") {
        await $c.gus.cfAlertMsg($p, "20 Feet Full 컨테이너의 전용화차 신청량을 초과했습니다");
        return;
      }
    }
    if (detailRowPos >= 0 && v_xcls_empty40 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAppCnt40Empty")) {
      await $c.gus.cfAlertMsg($p, "40 Feet Empty 컨테이너의 전용화차 신청량을 초과했습니다");
      return;
    }
    if (detailRowPos >= 0 && v_xcls_full40 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAppCnt40Full")) {
      await $c.gus.cfAlertMsg($p, "40 Feet Full 컨테이너의 전용화차 신청량을 초과했습니다");
      return;
    }
    if (detailRowPos >= 0 && v_xcls_empty45 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAppCnt45Empty")) {
      await $c.gus.cfAlertMsg($p, "45 Feet Empty 컨테이너의 전용화차 신청량을 초과했습니다");
      return;
    }
    if (detailRowPos >= 0 && v_xcls_full45 > ds_RailroadWorkIndicationDetail.getCellData(detailRowPos, "xclsAppCnt45Full")) {
      await $c.gus.cfAlertMsg($p, "45 Feet Full 컨테이너의 전용화차 신청량을 초과했습니다");
      return;
    }
  }
  for (let n = 0; n < ds_ShippingWeightContents.getRowCount(); n++) {
    if (ds_ShippingWeightContents.getCellData(n, "adminfrtcarYn") == "4" && (ds_ShippingWeightContents.getRowStatus(ds_ShippingWeightContents.getRowPosition()) == "C" || ds_ShippingWeightContents.getRowStatus(ds_ShippingWeightContents.getRowPosition()) == "U")) {
      let dpt = ds_ShippingWeightContents.getCellData(n, "dptStnCd");
      let arv = ds_ShippingWeightContents.getCellData(n, "arvStnCd");
      let isValidRoute = false;
      if (dpt == "4R01" && arv == "6R12") isValidRoute = true;else if (dpt == "4R01" && arv == "6R01") isValidRoute = true;else if (dpt == "6R01" && arv == "4R01") isValidRoute = true;else if (dpt == "6R12" && arv == "4R01") isValidRoute = true;else if (dpt == "5R12" && arv == "5R14") isValidRoute = true;else if (dpt == "5R14" && arv == "5R12") isValidRoute = true;
      if (!isValidRoute) {
        await $c.win.alert($p, "예비화차 진행 가능 구간이 아닙니다..");
        return;
      }
    }
  }
  let cntrNoDubleChk = scwin.f_cntrNoDubleChk();
  if (cntrNoDubleChk != "T") {
    await $c.gus.cfAlertMsg($p, "[" + cntrNoDubleChk + "번째 줄]" + MSG_CM_ERR_032, ["컨테이너 번호"]);
    let idx = parseInt(cntrNoDubleChk) - 1;
    ds_ShippingWeightContents.setRowPosition(idx);
    ds_ShippingWeightContents.setCellData(idx, "cntrNo", "");
    ds_ShippingWeightContents.setCellData(idx, "cntrTypCd", "");
    ds_ShippingWeightContents.setCellData(idx, "cntrSizCd", "");
    ds_ShippingWeightContents.setCellData(idx, "fullEmptyClsCd", "");
    ds_ShippingWeightContents.setCellData(idx, "odrNo", "");
    ds_ShippingWeightContents.setCellData(idx, "mchtNm", "");
    ds_ShippingWeightContents.setCellData(idx, "sealNo", "");
    gr_ShippingWeightContents.setFocusedCell(idx, "cntrNo");
    return;
  }
  if (scwin.f_HndlRateSateYn() == "F") {
    return;
  }
  if (p_gubun == "Auto") {
    // TODO: ds_preInfoSndYn 동적 조회 (DataID 방식 → submission 변환 필요)
    for (let i = 0; i < ds_ShippingWeightContents.getRowCount(); i++) {
      let rs = ds_ShippingWeightContents.getRowStatus(i);
      if (rs == "C" || rs == "U") {
        ds_ShippingWeightContents.setCellData(i, "chkAutoEdiYn", "1");
      }
    }
  }
  for (let i = 0; i < ds_ShippingWeightContents.getRowCount(); i++) {
    if (ds_ShippingWeightContents.getCellData(i, "adjmTrgtYn") == "1" && ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") != "2") {
      await $c.win.alert($p, "철송임미생성 기능은 화차구분이 저수요인 경우만 선택할 수 있습니다.");
      ds_ShippingWeightContents.setCellData(i, "adjmTrgtYn", "0");
      return false;
    }
  }
  for (let i = 0; i < ds_ShippingWeightContents.getRowCount(); i++) {
    if (ds_ShippingWeightContents.getCellData(i, "onewayYn") == "1" && ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") != "3") {
      await $c.win.alert($p, "편도 기능은 화차구분이 전용인 경우만 선택할 수 있습니다.");
      ds_ShippingWeightContents.setCellData(i, "onewayYn", "0");
      return false;
    }
  }
  let teuchk = 0;
  for (let i = 0; i < ds_ShippingWeightContents.getRowCount(); i++) {
    if ((ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "40" || ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "45") && ds_ShippingWeightContents.getCellData(i, "onewayYn") == "1") {
      teuchk = teuchk + 2;
    } else if (ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20" && ds_ShippingWeightContents.getCellData(i, "onewayYn") == "1") {
      teuchk++;
    }
    if (ds_ShippingWeightContents.getCellData(i, "dptStnCd") == "4R01" && ds_ShippingWeightContents.getCellData(i, "arvStnCd") == "6R12" && teuchk > 8) {
      await $c.win.alert($p, "오봉역 -> 부산신항역 구간의 경우 편도 상하편차가 8TEU를 넘을 수 없습니다.");
      return false;
    } else if (ds_ShippingWeightContents.getCellData(i, "dptStnCd") == "4R01" && ds_ShippingWeightContents.getCellData(i, "arvStnCd") == "6R01" && teuchk > 3) {
      await $c.win.alert($p, "오봉역 -> 부산진역 구간의 경우 편도 상하편차가 3TEU를 넘을 수 없습니다.");
      return false;
    }
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult == true) {
    await $c.sbm.execute($p, sbm_RegistShippingWeightContents);
  }
};
scwin.f_openNewPortTrf = async function () {
  if (ds_RailroadWorkIndication.getRowCount() == 0) {
    await $c.win.alert($p, "조회 이후 진행해주세요");
    return;
  }
  let rp = ds_RailroadWorkIndication.getRowPosition();
  let dptStn = ds_RailroadWorkIndication.getCellData(rp, "dptStnCd");
  let arvStn = ds_RailroadWorkIndication.getCellData(rp, "arvStnCd");
  let obj = {
    paramTitle: "저수요단가등록",
    ed_startTrainWorkPlaceCd: dptStn,
    ed_endTrainWorkPlaceCd: arvStn
  };
  await $c.win.openPopup($p, "/ui/ds/op/adjmbd/pchstrfmgnt/op_401_05_03b.xml", {
    width: 830,
    height: 490,
    modal: true,
    data: obj
  });
  return true;
};
scwin.f_createBtUnit = async function () {
  if (ds_RailroadWorkIndication.getRowCount() == 0) {
    if (ed_begintrainWorkPlaceCd.getValue() == "") {
      await $c.win.alert($p, "출발역을 입력하여 주십시요.");
      ed_begintrainWorkPlaceCd.setFocus();
      return;
    }
    if (ed_endtrainWorkPlaceCd.getValue() == "") {
      await $c.win.alert($p, "도착역을 입력하여 주십시요.");
      ed_endtrainWorkPlaceCd.setFocus();
      return;
    }
    if (ed_teuCnt.getValue() == "" || ed_teuCnt.getValue() == "0") {
      await $c.win.alert($p, "TEU수를 입력하여 주십시요.");
      ed_teuCnt.setFocus();
      return;
    }
    if (ed_totAmt.getValue() == "" || ed_totAmt.getValue() == "0") {
      await $c.win.alert($p, "저수요배정금액이 0원 입니다. 다시 조회하여 주십시요.");
      ed_teuCnt.setFocus();
      return;
    }
    ds_RailroadFare.setCellData(0, "dptStnWrkPlCd", ed_begintrainWorkPlaceCd.getValue().trim());
    ds_RailroadFare.setCellData(0, "arvStnWrkPlCd", ed_endtrainWorkPlaceCd.getValue().trim());
    ds_RailroadFare.setCellData(0, "adptDt", ica_wrkDt.getValue().trim());
    ds_RailroadFare.setCellData(0, "totAmt", ed_totAmt.getValue());
    ds_RailroadFare.setCellData(0, "railroadFare", ed_railroadFare.getValue());
    ds_RailroadFare.setCellData(0, "teuCnt", ed_teuCnt.getValue());
  } else {
    let rp = ds_RailroadWorkIndication.getRowPosition();
    ds_RailroadFare.setCellData(0, "dptStnWrkPlCd", ds_RailroadWorkIndication.getCellData(rp, "dptStnCd"));
    ds_RailroadFare.setCellData(0, "arvStnWrkPlCd", ds_RailroadWorkIndication.getCellData(rp, "arvStnCd"));
    ds_RailroadFare.setCellData(0, "adptDt", ica_wrkDt.getValue().trim());
    ds_RailroadFare.setCellData(0, "totAmt", ed_totAmt.getValue());
    ds_RailroadFare.setCellData(0, "railroadFare", ed_railroadFare.getValue());
    ds_RailroadFare.setCellData(0, "teuCnt", ed_teuCnt.getValue());
  }
  if (!ds_RailroadFare.isUpdated()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["변경사항"]);
    return;
  }
  let v_dptStn = ds_RailroadFare.getCellData(0, "dptStnWrkPlCd");
  let v_arvStn = ds_RailroadFare.getCellData(0, "arvStnWrkPlCd");
  if (!(v_dptStn == "4R01" && v_arvStn == "6R01" || v_dptStn == "6R01" && v_arvStn == "4R02" || v_dptStn == "6R01" && v_arvStn == "7R05" || v_dptStn == "7R05" && v_arvStn == "6R01" || v_dptStn == "5R14" && v_arvStn == "4R01")) {
    await $c.win.alert($p, "저수요구간이 아니므로 저수요단가를 생성할 수 없습니다.");
    return;
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult == true) {
    await $c.sbm.execute($p, sbm_SaveRailroadFare);
  }
};
scwin.f_addRows = async function () {
  let addCnt = ed_addCnt.getValue();
  if ($c.gus.cfIsNull($p, ed_addCnt.getValue())) addCnt = 0;
  if (ds_RailroadWorkIndication.getRowCount() == 0) return;
  if (addCnt == 0) {
    scwin.f_inputGridAddrow();
  } else {
    for (let j = 1; j <= addCnt; j++) {
      scwin.f_inputGridAddrow();
    }
  }
  ed_addCnt.setValue("");
};
scwin.f_inputGridAddrow = async function () {
  scwin.f_countGridTeu();
  if (ds_RailroadWorkIndication.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ica_wrkDt.setFocus();
    return;
  }
  if (ds_ShippingWeightContents.getRowCount() == 0 && ds_RailroadWorkIndication.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ica_wrkDt.setFocus();
    return;
  }
  if (ica_wrkDt.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["신청일자"]);
    ica_wrkDt.setFocus();
    return;
  }
  ds_ShippingWeightContents.insertRow();
  let newRowPos = ds_ShippingWeightContents.getRowPosition();
  ds_ShippingWeightContents.setCellData(newRowPos, "adminfrtcarYn", "3");
  if (scwin.cntrNo != null && scwin.cntrNo != "") {
    ds_ShippingWeightContents.setCellData(ds_ShippingWeightContents.getRowCount() - 1, "cntrNo", scwin.cntrNo);
  }
  let cur_rowpos = ds_RailroadWorkIndication.getRowPosition();
  let cur_pos = ds_ShippingWeightContents.getRowPosition();
  if (cur_rowpos >= 0) {
    ds_ShippingWeightContents.setCellData(cur_pos, "transWrkIndictNo", ds_RailroadWorkIndication.getCellData(cur_rowpos, "wrkIndictNo"));
    ds_ShippingWeightContents.setCellData(cur_pos, "wrkDt", ds_RailroadWorkIndication.getCellData(cur_rowpos, "reqDt"));
    ds_ShippingWeightContents.setCellData(cur_pos, "dptStnCd", ds_RailroadWorkIndication.getCellData(cur_rowpos, "dptStnCd"));
    ds_ShippingWeightContents.setCellData(cur_pos, "arvStnCd", ds_RailroadWorkIndication.getCellData(cur_rowpos, "arvStnCd"));
    if (ds_RailroadWorkIndication.getCellData(cur_rowpos, "ediSndYn") == "1") {
      ds_ShippingWeightContents.setCellData(cur_pos, "railroadEdiSndYn", "1");
    } else {
      ds_ShippingWeightContents.setCellData(cur_pos, "railroadEdiSndYn", "0");
    }
  }
};
scwin.f_countGridTeu = async function () {
  let rsnTot = 0,
    rsnTeu = 0,
    admTot = 0,
    admTeu = 0,
    btTot = 0,
    btTeu = 0,
    su20 = 0,
    su40 = 0;
  let v_curTeu = ed_teuCnt.getValue();
  let cur_Rows = ds_ShippingWeightContents.getRowCount();
  for (let i = 0; i < cur_Rows; i++) {
    if (ds_ShippingWeightContents.getCellData(i, "cntrNo") != "" && (ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "0" || ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "3")) {
      rsnTot++;
      if (ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20") {
        rsnTeu++;
      } else {
        rsnTeu = rsnTeu + 2;
      }
    } else if (ds_ShippingWeightContents.getCellData(i, "cntrNo") != "" && ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "1") {
      admTot++;
      if (ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20") {
        admTeu++;
      } else {
        admTeu = admTeu + 2;
      }
    } else if (ds_ShippingWeightContents.getCellData(i, "cntrNo") != "" && ds_ShippingWeightContents.getCellData(i, "adminfrtcarYn") == "2") {
      btTot++;
      if (ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20") {
        su20++;
        btTeu++;
      } else {
        su40++;
        btTeu = btTeu + 2;
      }
    }
  }
  // TODO: spn_rsnTot 등 textbox에 값 세팅 (body에 id 매핑 필요)
};
scwin.f_retrieveCntrBasisInfo = async function (cntrNo) {
  if (!$c.gus.cfIsNull($p, cntrNo)) {
    let rp = ds_RailroadWorkIndication.getRowPosition();
    dma_condCntrBasisInfo.set("cntrNo", cntrNo);
    dma_condCntrBasisInfo.set("odrNo", "");
    dma_condCntrBasisInfo.set("transWrkIndictNo", ds_RailroadWorkIndication.getCellData(rp, "wrkIndictNo"));
    dma_condCntrBasisInfo.set("wrkStDt", ds_RailroadWorkIndication.getCellData(rp, "reqDt"));
    dma_condCntrBasisInfo.set("dptWrkPlCd", ds_RailroadWorkIndication.getCellData(rp, "dptStnCd"));
    dma_condCntrBasisInfo.set("arvWrkPlCd", ds_RailroadWorkIndication.getCellData(rp, "arvStnCd"));
    await $c.sbm.execute($p, sbm_retrieveCntrBasisInfo);
  }
};
scwin.f_addCntrBasisInfo = function (row) {
  if (scwin.f_cntrNoDubleRowUnitChk(ds_cntrBasisInfoResult.getCellData(0, "cntrNo")) == "T") {
    let r = ds_ShippingWeightContents.getRowPosition();
    ds_ShippingWeightContents.setCellData(r, "cntrTypShowCd", ds_cntrBasisInfoResult.getCellData(0, "cntrSizCd") + ds_cntrBasisInfoResult.getCellData(0, "fullEmptyClsCd"));
    ds_ShippingWeightContents.setCellData(r, "odrNo", ds_cntrBasisInfoResult.getCellData(0, "odrNo"));
    ds_ShippingWeightContents.setCellData(r, "cntrSizCd", ds_cntrBasisInfoResult.getCellData(0, "cntrSizCd"));
    ds_ShippingWeightContents.setCellData(r, "fullEmptyClsCd", ds_cntrBasisInfoResult.getCellData(0, "fullEmptyClsCd"));
    ds_ShippingWeightContents.setCellData(r, "mchtNm", ds_cntrBasisInfoResult.getCellData(0, "bilgClntNm"));
    ds_ShippingWeightContents.setCellData(r, "sealNo", ds_cntrBasisInfoResult.getCellData(0, "sealNo"));
    ds_ShippingWeightContents.setCellData(r, "cntrNo", ds_cntrBasisInfoResult.getCellData(0, "cntrNo"));
    ds_ShippingWeightContents.setCellData(r, "cntrSeq", ds_cntrBasisInfoResult.getCellData(0, "cntrSeq"));
    ds_ShippingWeightContents.setCellData(r, "odrWrkPathSeq", ds_cntrBasisInfoResult.getCellData(0, "WrkPathSeq"));
    ds_ShippingWeightContents.setCellData(r, "odrWrkStpSeq", ds_cntrBasisInfoResult.getCellData(0, "WrkStpSeq"));
    ds_ShippingWeightContents.setCellData(r, "internalSellLodeptCd", ds_cntrBasisInfoResult.getCellData(0, "internalSellLodeptCd"));
    ds_ShippingWeightContents.setCellData(r, "commCd", ds_cntrBasisInfoResult.getCellData(0, "commCd"));
    ds_ShippingWeightContents.setCellData(r, "cntrTypCd", ds_cntrBasisInfoResult.getCellData(0, "cntrTypCd"));
    ds_ShippingWeightContents.setCellData(r, "dptIntendDt", ds_cntrBasisInfoResult.getCellData(0, "dptIntendDt"));
    ds_ShippingWeightContents.setCellData(r, "dptIntendHh", ds_cntrBasisInfoResult.getCellData(0, "dptIntendHh"));
    ds_ShippingWeightContents.setCellData(r, "arvIntendDt", ds_cntrBasisInfoResult.getCellData(0, "arvIntendDt"));
    ds_ShippingWeightContents.setCellData(r, "arvIntendHh", ds_cntrBasisInfoResult.getCellData(0, "arvIntendHh"));
    ds_ShippingWeightContents.setCellData(r, "mmEndScYn", ds_cntrBasisInfoResult.getCellData(0, "mmEndScYn"));
    ds_ShippingWeightContents.setCellData(r, "arvDtm", "");
    ds_ShippingWeightContents.setCellData(r, "arvDt", "");
    ds_ShippingWeightContents.setCellData(r, "arvHh", "");
    let rp = ds_RailroadWorkIndication.getRowPosition();
    if (ds_cntrBasisInfoResult.getCellData(0, "dptWrkPlCd") == "4R01" && ds_cntrBasisInfoResult.getCellData(0, "arvWrkPlCd") == "6R01") {
      ds_ShippingWeightContents.setCellData(r, "dptDt", ds_RailroadWorkIndication.getCellData(rp, "reqDt"));
      ds_ShippingWeightContents.setCellData(r, "dptHh", "2300");
      let wrkDt = ds_ShippingWeightContents.getCellData(r, "dptDt");
      let dt = $c.date.addDate($p, wrkDt, 1);
      ds_ShippingWeightContents.setCellData(r, "arvDtm", dt + "0700");
    } else {
      let curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
      let curTime = WebSquare.date.getCurrentServerDate("HHmm");
      ds_ShippingWeightContents.setCellData(r, "dptDt", curDate);
      ds_ShippingWeightContents.setCellData(r, "dptHh", curTime);
    }
    ds_ShippingWeightContents.setCellData(r, "dptHndlRateSateYn", ds_cntrBasisInfoResult.getCellData(0, "dptHndlRateSateYn"));
    ds_ShippingWeightContents.setCellData(r, "arvHndlRateSateYn", ds_cntrBasisInfoResult.getCellData(0, "arvHndlRateSateYn"));
    ds_ShippingWeightContents.setCellData(r, "arrvlportDtm", ds_cntrBasisInfoResult.getCellData(0, "arrvlportDtm"));
    ds_ShippingWeightContents.setCellData(r, "transNmCd", "DB");
    ds_ShippingWeightContents.setCellData(r, "dptStnLobranCd", ds_cntrBasisInfoResult.getCellData(0, "dptStnLobranCd"));
    ds_ShippingWeightContents.setCellData(r, "arvStnLobranCd", ds_cntrBasisInfoResult.getCellData(0, "arvStnLobranCd"));
    ds_ShippingWeightContents.setCellData(r, "railroadCutAmt", ds_cntrBasisInfoResult.getCellData(0, "railroadCutAmt"));
    ds_ShippingWeightContents.setCellData(r, "arvUpperWrkPlCd", ds_cntrBasisInfoResult.getCellData(0, "arvUpperWrkPlCd"));
    ds_ShippingWeightContents.setCellData(r, "railroadEdiSndYn", ds_cntrBasisInfoResult.getCellData(0, "railroadEdiSndYn"));
    ds_ShippingWeightContents.setCellData(r, "dptUpperWrkPlCd", ds_cntrBasisInfoResult.getCellData(0, "dptUpperWrkPlCd"));
    ds_ShippingWeightContents.setCellData(r, "dptHndlRateWrkStpSeq", ds_cntrBasisInfoResult.getCellData(0, "dptHndlRateWrkStpSeq"));
    ds_ShippingWeightContents.setCellData(r, "arvHndlRateWrkStpSeq", ds_cntrBasisInfoResult.getCellData(0, "arvHndlRateWrkStpSeq"));
    ds_ShippingWeightContents.setCellData(r, "lineCd", ds_cntrBasisInfoResult.getCellData(0, "lineCd"));
    ds_ShippingWeightContents.setCellData(r, "dptWrkPlCd", ds_cntrBasisInfoResult.getCellData(0, "dptWrkPlCd"));
    ds_ShippingWeightContents.setCellData(r, "arvWrkPlCd", ds_cntrBasisInfoResult.getCellData(0, "arvWrkPlCd"));
    ds_ShippingWeightContents.setCellData(r, "odrKndCd", ds_cntrBasisInfoResult.getCellData(0, "odrKndCd"));
    ds_ShippingWeightContents.setCellData(r, "selfClsCd", ds_cntrBasisInfoResult.getCellData(0, "selfClsCd"));
    ds_ShippingWeightContents.setCellData(r, "impExpClsCd", ds_cntrBasisInfoResult.getCellData(0, "impExpClsCd"));
    ds_ShippingWeightContents.setCellData(r, "destPortCd", ds_cntrBasisInfoResult.getCellData(0, "destPortCd"));
    ds_ShippingWeightContents.setCellData(r, "realMchtClntNo", ds_cntrBasisInfoResult.getCellData(0, "realMchtClntNo"));
    ds_ShippingWeightContents.setCellData(r, "blNo", ds_cntrBasisInfoResult.getCellData(0, "blNo"));
    ds_ShippingWeightContents.setCellData(r, "bookingNo", ds_cntrBasisInfoResult.getCellData(0, "bookingNo"));
    if (ds_cntrBasisInfoResult.getCellData(0, "btRsnCheck") == "BT") {
      ds_ShippingWeightContents.setCellData(r, "adminfrtcarYn", "2");
    }
    if (ds_cntrBasisInfoResult.getCellData(0, "btRsnCheck") == "RSN") {
      ds_ShippingWeightContents.setCellData(r, "adminfrtcarYn", "0");
    }
    ds_ShippingWeightContents.setCellData(r, "btRsnCheck", ds_cntrBasisInfoResult.getCellData(0, "btRsnCheck"));
    if (ds_cntrBasisInfoResult.getCellData(0, "cntrSizCd") > 20) {
      ds_ShippingWeightContents.setCellData(r, "cntrCnt", 2);
    } else {
      ds_ShippingWeightContents.setCellData(r, "cntrCnt", 1);
    }
    scwin.f_setTransCd(r, ds_ShippingWeightContents.getCellData(r, "transNmCd"));
    if (rp >= 0 && ds_RailroadWorkIndication.getCellData(rp, "ediSndYn") == "1") {
      ds_ShippingWeightContents.setCellData(r, "railroadEdiSndYn", "1");
    } else {
      ds_ShippingWeightContents.setCellData(r, "railroadEdiSndYn", "0");
    }
    let dptDtVal = parseInt(ds_ShippingWeightContents.getCellData(r, "dptDt").substring(6, 8));
    if (!$c.gus.cfIsNull($p, ds_cntrBasisInfoResult.getCellData(0, "scAdptDay")) && ds_cntrBasisInfoResult.getCellData(0, "scAdptDay") <= dptDtVal) {
      ds_ShippingWeightContents.setCellData(r, "mmEndScYn", "1");
    } else {
      ds_ShippingWeightContents.setCellData(r, "mmEndScYn", "0");
    }
    scwin.f_railNumSetting(r);
    ds_ShippingWeightContents.setCellData(r, "frtcarNo", scwin.frtcarNo);
    scwin.cntrNo = "";
  }
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  udc_wrkDt.setInitDate(scwin.dateStr, scwin.dateStr);
  ed_begintrainWorkPlaceCd.setFocus();
};
scwin.f_cntrNoDubleChk = async function () {
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  for (let i = 0; i < total_cnt; i++) {
    for (let j = i + 1; j < total_cnt; j++) {
      let rowState = ds_ShippingWeightContents.getRowStatus(i);
      if (rowState == "D") continue;
      if (ds_ShippingWeightContents.getCellData(i, "cntrNo") == ds_ShippingWeightContents.getCellData(j, "cntrNo")) {
        return j + 1;
      }
    }
  }
  return "T";
};
scwin.f_cntrNoDubleRowUnitChk = async function (cntrNo_value) {
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  let cur_RowPos = ds_ShippingWeightContents.getRowPosition();
  for (let i = 0; i < total_cnt; i++) {
    if (cur_RowPos == i) continue;
    let rowState = ds_ShippingWeightContents.getRowStatus(i);
    if (rowState == "D") continue;
    if (ds_ShippingWeightContents.getCellData(i, "cntrNo") == cntrNo_value) {
      return "F";
    }
  }
  return "T";
};
scwin.f_setTransCd = async function (row, transCd) {
  let total_cnt = ds_combo_transNmCd.getRowCount();
  for (let i = 0; i < total_cnt; i++) {
    if (ds_combo_transNmCd.getCellData(i, "code") == transCd) {
      ds_ShippingWeightContents.setCellData(row, "transNmClntCd", ds_combo_transNmCd.getCellData(i, "upperCd"));
    }
  }
};
scwin.f_HndlRateSateYn = async function () {
  for (let i = 0; i < ds_ShippingWeightContents.getRowCount(); i++) {
    if (ds_ShippingWeightContents.getCellData(i, "dptHndlRateSateYn").length < 4) {
      await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "번째 줄]" + MSG_CM_ERR_005, ["출발역", "4"]);
      ds_ShippingWeightContents.setCellData(i, "dptHndlRateSateYn", "");
      gr_ShippingWeightContents.setFocusedCell(i, "dptHndlRateSateYn");
      return "F";
    }
    if (ds_ShippingWeightContents.getCellData(i, "arvHndlRateSateYn").length < 4) {
      await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "번째 줄]" + MSG_CM_ERR_005, ["도착역", "4"]);
      ds_ShippingWeightContents.setCellData(i, "arvHndlRateSateYn", "");
      gr_ShippingWeightContents.setFocusedCell(i, "arvHndlRateSateYn");
      return "F";
    }
    for (let j = 0; j < ds_ShippingWeightContents.getCellData(i, "dptHndlRateSateYn").length; j++) {
      if (!(ds_ShippingWeightContents.getCellData(i, "dptHndlRateSateYn").substring(j, j + 1) == "Y" || ds_ShippingWeightContents.getCellData(i, "dptHndlRateSateYn").substring(j, j + 1) == "N")) {
        await $c.gus.cfAlertMsg($p, "Y,N 만 입력되어야 합니다.");
        ds_ShippingWeightContents.setCellData(i, "dptHndlRateSateYn", "");
        gr_ShippingWeightContents.setFocusedCell(i, "dptHndlRateSateYn");
        return "F";
      }
    }
    for (let j = 0; j < ds_ShippingWeightContents.getCellData(i, "arvHndlRateSateYn").length; j++) {
      if (!(ds_ShippingWeightContents.getCellData(i, "arvHndlRateSateYn").substring(j, j + 1) == "Y" || ds_ShippingWeightContents.getCellData(i, "arvHndlRateSateYn").substring(j, j + 1) == "N")) {
        await $c.gus.cfAlertMsg($p, "Y,N 만 입력되어야 합니다.");
        ds_ShippingWeightContents.setCellData(i, "arvHndlRateSateYn", "");
        gr_ShippingWeightContents.setFocusedCell(i, "arvHndlRateSateYn");
        return "F";
      }
    }
  }
};
scwin.f_RetrieveRailroadWorkIndicationDetail = async function () {
  let rp = ds_RailroadWorkIndication.getRowPosition();
  dma_QueryCondition.set("wrkIndictNo", ds_RailroadWorkIndication.getCellData(rp, "wrkIndictNo"));
  await $c.sbm.execute($p, sbm_RetrieveRailroadWorkIndicationDetail);
};
scwin.f_RetrieveRailroadFare = async function () {
  let rp = ds_RailroadWorkIndication.getRowPosition();
  dma_QueryCondition.set("wrkDt", ds_RailroadWorkIndication.getCellData(rp, "reqDt"));
  dma_QueryCondition.set("dptStn", ds_RailroadWorkIndication.getCellData(rp, "dptStnCd"));
  dma_QueryCondition.set("arvStn", ds_RailroadWorkIndication.getCellData(rp, "arvStnCd"));
  await $c.sbm.execute($p, sbm_RetrieveRailroadFare);
};
scwin.f_RetrieveTransNmCd = async function (param1) {
  // TODO: 콤보 조회 submission 호출 (DataID 방식 → submission 변환 필요)
  await $c.sbm.execute($p, sbm_RetrieveTransNmCd);
};
scwin.f_RetrieveStateKind = async function () {
  await $c.sbm.execute($p, sbm_RetrieveStateKind);
};
scwin.f_DeleteAct = async function () {
  let rp = ds_ShippingWeightContents.getRowPosition();
  if (ds_ShippingWeightContents.getCellData(rp, "delAllowFlag") == "1" && ds_ShippingWeightContents.getCellData(rp, "ediSndYn") == "1") {
    await $c.win.alert($p, "취소전송완료후에 삭제하십시오.");
    scwin.f_countGridTeu();
  } else {
    ds_ShippingWeightContents.removeRow(rp);
    scwin.f_countGridTeu();
  }
};
scwin.f_cancelAct = async function () {
  ds_ShippingWeightContents.undoAll();
  scwin.f_countGridTeu();
};
scwin.f_railroadResultsExcel = async function () {
  $c.data.downloadGridViewExcel($p, gr_ShippingWeightContents, {
    fileName: "적재정보.xlsx",
    sheetName: "적재정보"
  });
};
scwin.f_openPopUpHdlCharge = async function () {
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_02p.xml", {
    width: 820,
    height: 420,
    modal: true,
    data: {
      paramTitle: "철송조작료수정팝업"
    }
  });
};
scwin.f_ediSend = async function (allStsCd, curPosRow) {
  $c.gus.cfCopyDataSet($p, ds_ShippingWeightContents, ds_ShippingWeightContentsEdiSend, "copyHeader=Yes");
  if (allStsCd == "ONE") {
    if ((ds_ShippingWeightContentsEdiSend.getCellData(curPosRow, "sndClsCd") == "3" || ds_ShippingWeightContentsEdiSend.getCellData(curPosRow, "sndClsCd") == "1") && (ds_ShippingWeightContentsEdiSend.getCellData(curPosRow, "sndClsMsg") == "전송" || ds_ShippingWeightContentsEdiSend.getCellData(curPosRow, "sndClsMsg") == "재전송")) {
      ds_ShippingWeightContentsEdiSend.setCellData(curPosRow, "dptHndlRateSateYn", "");
    }
  }
  let confirmResult = await $c.win.confirm($p, "EDI 전송을 시작하시겠습니까?");
  if (confirmResult == true) {
    await $c.sbm.execute($p, sbm_RegistShippingWeightContentsEdiSend);
  }
};
scwin.f_ediSend2 = async function (Row) {
  ds_RailroadWorkIndication.setCellData(Row, "sndSts", "2");
  await $c.sbm.execute($p, sbm_RegistShippingWeightBatchTransmissionEdi);
};
scwin.f_workPathMod = async function () {
  if (ds_ShippingWeightContents.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["대상물량"]);
    return;
  }
  let rp = ds_ShippingWeightContents.getRowPosition();
  let obj = {
    odrNo: ds_ShippingWeightContents.getCellData(rp, "odrNo"),
    cntrSeq: ds_ShippingWeightContents.getCellData(rp, "cntrSeq")
  };
  // TODO: DsConstants.URL_CONTAINER_WORK_PATH_DETAIL_CHANGE_POPUP → 실제 URL 확인 필요
  let rtnVal = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/containerWorkPathDetailChangePopup.xml", {
    width: 930,
    height: 570,
    modal: true,
    data: obj
  });
  if (rtnVal != 0) {
    scwin.f_qeryList();
  }
};
scwin.f_crryInOutEDICheck = async function () {
  let rp = ds_ShippingWeightContents.getRowPosition();
  let arvWrkPlCd = ds_ShippingWeightContents.getCellData(rp, "arvStnCd");
  let dptWrkPlCd = ds_ShippingWeightContents.getCellData(rp, "dptWrkPlCd");
  // TODO: ds_preInfoSndYn 동적 조회 (DataID 방식 → submission 변환 필요)
  let arvWrkPlCdYn = "0";
  let dptWrkPlCdYn = "0";
  if (ds_preInfoSndYn.getRowCount() > 0) {
    arvWrkPlCdYn = ds_preInfoSndYn.getCellData(0, "code");
  }
  if (arvWrkPlCdYn == "1" || dptWrkPlCdYn == "1") {
    let confirmResult = await $c.win.confirm($p, "컨테이너번호" + ds_ShippingWeightContents.getCellData(rp, "cntrNo") + "를 COPINO전송 하겠습니까?");
    if (confirmResult == true) {
      scwin.f_crryInOutEDI();
    }
  } else {
    await $c.win.alert($p, "출발역:" + dptWrkPlCd + " ~ 도착역:" + arvWrkPlCd + "은 COPINO 전송 대상역이 아닙니다.");
    return false;
  }
};
scwin.f_crryInOutEDI = async function () {
  let rowM = ds_RailroadWorkIndication.getRowPosition();
  let rowS = ds_ShippingWeightContents.getRowPosition();
  let obj = {
    paramTitle: "반출입정보EDI등록",
    crryoutEdiType: "CO",
    crryinEdiType: "CO",
    transWrkIndictNo: ds_ShippingWeightContents.getCellData(rowS, "transWrkIndictNo"),
    odrNo: ds_ShippingWeightContents.getCellData(rowS, "odrNo"),
    cntrSeq: ds_ShippingWeightContents.getCellData(rowS, "cntrSeq"),
    odrWrkPathSeq: ds_ShippingWeightContents.getCellData(rowS, "odrWrkPathSeq"),
    odrWrkStpSeq: ds_ShippingWeightContents.getCellData(rowS, "odrWrkStpSeq"),
    frtcarNo: ds_ShippingWeightContents.getCellData(rowS, "frtcarNo"),
    dptDt: ds_ShippingWeightContents.getCellData(rowS, "dptDt"),
    arvDt: ds_ShippingWeightContents.getCellData(rowS, "arvDt"),
    cntrNo: ds_ShippingWeightContents.getCellData(rowS, "cntrNo"),
    dptStnCd: ds_ShippingWeightContents.getCellData(rowS, "dptStnCd"),
    arvStnCd: ds_ShippingWeightContents.getCellData(rowS, "arvStnCd"),
    dptStn: ds_RailroadWorkIndication.getCellData(rowM, "dptStn"),
    arvStn: ds_RailroadWorkIndication.getCellData(rowM, "arvStn"),
    dptHh: ds_ShippingWeightContents.getCellData(rowS, "dptHh")
  };
  await $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_21p.xml", {
    width: 820,
    height: 660,
    modal: true,
    data: obj
  });
  return true;
};
scwin.f_railNumSetting = function (row) {
  let rp = ds_RailroadWorkIndication.getRowPosition();
  let toDay = ds_RailroadWorkIndication.getCellData(rp, "reqDt");
  let nextDay = $c.date.addDate($p, toDay, 1);
  let dptWrkPlCd = ds_cntrBasisInfoResult.getCellData(0, "dptWrkPlCd");
  let arvWrkPlCd = ds_cntrBasisInfoResult.getCellData(0, "arvWrkPlCd");
  if (ds_cntrBasisInfoResult.getCellData(0, "btRsnCheck") == "BT" || ds_ShippingWeightContents.getCellData(row, "adminfrtcarYn") == "2") {
    if (dptWrkPlCd == "6R12" && arvWrkPlCd == "4R01") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "1005");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      ds_ShippingWeightContents.setCellData(row, "trnNo", "3804");
    } else if (dptWrkPlCd == "4R01" && arvWrkPlCd == "6R12") {
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "1505");
        ds_ShippingWeightContents.setCellData(row, "trnNo", "3807");
      } else {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      }
    } else if (dptWrkPlCd == "6R01" && (arvWrkPlCd == "4R01" || arvWrkPlCd == "4R02")) {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "1247");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1855");
      ds_ShippingWeightContents.setCellData(row, "trnNo", "3024");
    } else if (dptWrkPlCd == "5R14" && arvWrkPlCd == "5R13") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "1400");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1655");
      ds_ShippingWeightContents.setCellData(row, "trnNo", "3074");
    } else if (dptWrkPlCd == "5R13" && arvWrkPlCd == "5R14") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "0931");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1244");
      ds_ShippingWeightContents.setCellData(row, "trnNo", "3073");
    } else if (dptWrkPlCd == "6R01" && arvWrkPlCd == "3R13") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "1114");
      ds_ShippingWeightContents.setCellData(row, "trnNo", "3054");
    } else if (dptWrkPlCd == "3R13" && arvWrkPlCd == "6R01") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "1415");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1945");
      ds_ShippingWeightContents.setCellData(row, "trnNo", "3053");
    } else {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      if ($c.gus.cfIsNull($p, ds_ShippingWeightContents.getCellData(row, "trnNo"))) ds_ShippingWeightContents.setCellData(row, "trnNo", "");
    }
    ds_ShippingWeightContents.setCellData(row, "pchsAdptDt", ds_cntrBasisInfoResult.getCellData(0, "pchsAdptDt"));
  } else if (ds_ShippingWeightContents.getCellData(row, "adminfrtcarYn") == "3") {
    if (dptWrkPlCd == "6R01" && arvWrkPlCd == "4R01") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "2120");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0341");
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") ds_ShippingWeightContents.setCellData(row, "trnNo", "3028");
    } else if (dptWrkPlCd == "4R01" && arvWrkPlCd == "6R01") {
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "2145");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0243");
        ds_ShippingWeightContents.setCellData(row, "trnNo", "3027");
      } else {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      }
    } else if (dptWrkPlCd == "6R12" && arvWrkPlCd == "4R01") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "0400");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1002");
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") ds_ShippingWeightContents.setCellData(row, "trnNo", "3002");
    } else if (dptWrkPlCd == "4R01" && arvWrkPlCd == "6R12") {
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "1830");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "2328");
        ds_ShippingWeightContents.setCellData(row, "trnNo", "3007");
      } else {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      }
    } else if (dptWrkPlCd == "5R14" && arvWrkPlCd == "4R01") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "1600");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") ds_ShippingWeightContents.setCellData(row, "trnNo", "3910");
    } else if (dptWrkPlCd == "4R01" && arvWrkPlCd == "5R14") {
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "1251");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1945");
        ds_ShippingWeightContents.setCellData(row, "trnNo", "3909");
      } else {
        ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
        ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
        ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      }
    } else if (dptWrkPlCd == "5R14" && arvWrkPlCd == "5R13") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "1410");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1659");
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") ds_ShippingWeightContents.setCellData(row, "trnNo", "3080");
    } else if (dptWrkPlCd == "5R13" && arvWrkPlCd == "5R14") {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "1026");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", toDay + "1610");
      if (ds_ShippingWeightContents.getCellData(row, "transNmCd") == "DB") ds_ShippingWeightContents.setCellData(row, "trnNo", "3087");
    } else {
      ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
      ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
      ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
      if ($c.gus.cfIsNull($p, ds_ShippingWeightContents.getCellData(row, "trnNo"))) ds_ShippingWeightContents.setCellData(row, "trnNo", "");
    }
  } else {
    ds_ShippingWeightContents.setCellData(row, "dptDt", toDay);
    ds_ShippingWeightContents.setCellData(row, "dptHh", "2300");
    ds_ShippingWeightContents.setCellData(row, "arvDtm", nextDay + "0700");
    if ($c.gus.cfIsNull($p, ds_ShippingWeightContents.getCellData(row, "trnNo"))) ds_ShippingWeightContents.setCellData(row, "trnNo", "");
  }
};
scwin.f_SubInfoDo = async function () {
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  for (let i = 0; i < total_cnt; i++) {
    if (ds_RegistShippingWeightSubInfo.getCellData(0, "cntrNo") == ds_ShippingWeightContents.getCellData(i, "cntrNo")) {
      ds_ShippingWeightContents.setCellData(i, "cntrSeq", ds_RegistShippingWeightSubInfo.getCellData(0, "cntrSeq"));
      ds_ShippingWeightContents.setCellData(i, "odrWrkPathSeq", ds_RegistShippingWeightSubInfo.getCellData(0, "wrkPathSeq"));
      ds_ShippingWeightContents.setCellData(i, "odrWrkStpSeq", ds_RegistShippingWeightSubInfo.getCellData(0, "wrkStpSeq"));
      ds_ShippingWeightContents.setCellData(i, "internalSellLodeptCd", ds_RegistShippingWeightSubInfo.getCellData(0, "internalSellLodeptCd"));
      ds_ShippingWeightContents.setCellData(i, "commCd", ds_RegistShippingWeightSubInfo.getCellData(0, "commCd"));
    }
  }
};
scwin.sbm_RetrieveRailroadWorkIndication_submitdone = async function (e) {
  let rowCnt = ds_RailroadWorkIndication.getRowCount();
  if (rowCnt == 0) {
    await $c.sbm.execute($p, sbm_RetrieveRailroadFare);
    await $c.gus.cfAlertMsg($p, "[작업지시정보] " + MSG_CM_ERR_003);
  }
  if (rowCnt > 0) {
    scwin.f_RetrieveRailroadFare();
    scwin.f_RetrieveRailroadWorkIndicationDetail();
  }
  $c.gus.cfDisableBtn($p, []);
};
scwin.sbm_RetrieveRailroadWorkIndication_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveRailroadWorkIndicationDetail_submitdone = async function (e) {
  let rp = ds_RailroadWorkIndication.getRowPosition();
  dma_QueryCondition.set("wrkIndictNo", ds_RailroadWorkIndication.getCellData(rp, "wrkIndictNo"));
  await $c.sbm.execute($p, sbm_RetrieveShippingWeightContents);
};
scwin.sbm_RetrieveRailroadWorkIndicationDetail_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveShippingWeightContents_submitdone = async function (e) {
  let rowCnt = ds_ShippingWeightContents.getRowCount();
  if (rowCnt == 0) {
    scwin.f_inputGridAddrow();
    if (scwin.cntrNo != null && scwin.cntrNo != "") {
      ds_ShippingWeightContents.setCellData(0, "cntrNo", scwin.cntrNo);
      if (scwin.btCls == "1") {
        scwin.f_retrieveCntrBasisInfo(scwin.cntrNo);
      }
    }
  } else if (rowCnt > 0) {
    scwin.f_countGridTeu();
    if (scwin.btCls == "1") {
      scwin.f_inputGridAddrow();
      scwin.f_retrieveCntrBasisInfo(scwin.cntrNo);
      scwin.btCls = "";
    }
    let rp = ds_RailroadWorkIndication.getRowPosition();
    if (rp >= 0) {
      let dptStnCd = ds_RailroadWorkIndication.getCellData(rp, "dptStnCd");
      let arvStnCd = ds_RailroadWorkIndication.getCellData(rp, "arvStnCd");
      if ((dptStnCd == "4R01" || dptStnCd == "6R01" || dptStnCd == "6R04") && (arvStnCd == "4R01" || arvStnCd == "6R01" || arvStnCd == "6R04")) {
        // TODO: pncportYn 컬럼 편집 가능 설정
      } else {
        // TODO: pncportYn 컬럼 편집 불가 설정
      }
    }
  }
  $c.gus.cfDisableBtn($p, []);
};
scwin.sbm_RetrieveShippingWeightContents_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveRailroadFare_submitdone = async function (e) {
  let rowCnt = ds_RailroadFare.getRowCount();
  if (rowCnt == 0) {
    scwin.f_createHeader();
    if (dma_QueryCondition.get("dptStn") == "4R01" && dma_QueryCondition.get("arvStn") == "6R12") {
      ed_totAmt.setValue("1998000");
    } else if (dma_QueryCondition.get("dptStn") == "6R12" && dma_QueryCondition.get("arvStn") == "4R01") {
      ed_totAmt.setValue("1292400");
    }
  }
  scwin.f_countGridTeu();
};
scwin.sbm_RetrieveRailroadFare_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RegistShippingWeightContents_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_RegistShippingWeightContents_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SaveRailroadFare_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_SaveRailroadFare_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RegistShippingWeightBatchTransmissionEdi_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_qeryList();
};
scwin.sbm_RegistShippingWeightBatchTransmissionEdi_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RegistShippingWeightContentsEdiSend_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, "EDI 취소전송을 성공적으로 처리하였습니다. ");
  scwin.f_qeryList();
};
scwin.sbm_RegistShippingWeightContentsEdiSend_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveCntrBasisInfo_submitdone = async function (e) {
  let rp = ds_RailroadWorkIndication.getRowPosition();
  let sp = ds_ShippingWeightContents.getRowPosition();
  if (rp >= 0 && ds_RailroadWorkIndication.getCellData(rp, "ediSndYn") == "1") {
    ds_ShippingWeightContents.setCellData(sp, "railroadEdiSndYn", "1");
  } else {
    ds_ShippingWeightContents.setCellData(sp, "railroadEdiSndYn", "0");
  }
  if (ds_cntrBasisInfoResult.getRowCount() > 0) {
    scwin.f_addCntrBasisInfo(sp);
  }
};
scwin.sbm_retrieveCntrBasisInfo_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveTransNmCd_submitdone = async function (e) {};
scwin.sbm_RetrieveTransNmCd_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveStateKind_submitdone = async function (e) {};
scwin.sbm_RetrieveStateKind_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrievePreInfoSndYn_submitdone = async function (e) {};
scwin.sbm_RetrievePreInfoSndYn_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_retrieve_onclick = async function (e) {
  scwin.f_qeryList();
};
scwin.btn_fieldClear_onclick = async function (e) {
  scwin.f_FieldClear();
};
scwin.btn_save_onclick = async function (e) {
  scwin.f_Save();
};
scwin.btn_trigger1_onclick = async function (e) {
  scwin.f_workPathMod();
};
scwin.btn_trigger2_onclick = async function (e) {
  scwin.f_createBtUnit();
};
scwin.btn_trigger3_onclick = async function (e) {
  scwin.f_openNewPortTrf();
};
scwin.btn_trigger4_onclick = async function (e) {
  scwin.f_openPopUpHdlCharge();
};
scwin.btn_trigger5_onclick = async function (e) {
  scwin.f_crryInOutEDICheck();
};
scwin.btn_trigger6_onclick = async function (e) {
  scwin.f_Save("Auto");
};
scwin.gr_RailroadWorkIndication_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (scwin.oldrowData != rowIndex) {
    scwin.f_RetrieveRailroadWorkIndicationDetail();
    scwin.f_RetrieveRailroadFare();
  }
  scwin.oldrowData = rowIndex;
  if (columnId == "sndSts") {
    if (ds_RailroadWorkIndication.getCellData(rowIndex, "sndSts") == "1") {
      if (ds_RailroadWorkIndication.getCellData(rowIndex, "transLongNo") != "0" && ds_RailroadWorkIndication.getCellData(rowIndex, "transLongNo") != "") {
        let confirmResult = await $c.win.confirm($p, "EDI 일괄전송을 하시겠습니까?");
        if (confirmResult == true) {
          scwin.f_ediSend2(rowIndex);
        }
      } else {
        await $c.win.alert($p, "철송작업계획에서 운송장을 입력해 주세요.");
      }
    }
  }
};
scwin.gr_ShippingWeightContents_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "sndClsMsg") {
    if ((ds_ShippingWeightContents.getCellData(rowIndex, "sndClsCd") == "3" || ds_ShippingWeightContents.getCellData(rowIndex, "sndClsCd") == "1") && ds_ShippingWeightContents.getCellData(rowIndex, "preInfoSndYn") == "1" && ds_ShippingWeightContents.getCellData(rowIndex, "sndClsMsg") == "전송취소") {
      scwin.f_ediSend("ONE", rowIndex);
    }
  }
  if (columnId == "adjmTrgtYn" && ds_ShippingWeightContents.getCellData(rowIndex, columnId) == "1" && ds_ShippingWeightContents.getCellData(rowIndex, "adminfrtcarYn") != "2") {
    await $c.win.alert($p, "철송임미생성 기능은 공사화차구분이 저수요인 경우만 선택할 수 있습니다.");
    ds_ShippingWeightContents.setCellData(rowIndex, columnId, "0");
    return false;
  }
  if (columnId == "onewayYn" && ds_ShippingWeightContents.getCellData(rowIndex, columnId) == "1" && ds_ShippingWeightContents.getCellData(rowIndex, "adminfrtcarYn") != "3") {
    await $c.win.alert($p, "편도 기능은 공사화차구분이 전용인 경우만 선택할 수 있습니다.");
    ds_ShippingWeightContents.setCellData(rowIndex, columnId, "0");
    return false;
  }
  if (columnId == "cntrNo" || columnId == "adminfrtcarYn") {
    scwin.f_countGridTeu();
    scwin.f_railNumSetting(rowIndex);
  }
};
scwin.gr_ShippingWeightContents_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  let totalRows = ds_ShippingWeightContents.getRowCount();
  if (columnId == "adminfrtcarYn") {
    for (let j = rowIndex + 1; j < totalRows; j++) {
      ds_ShippingWeightContents.setCellData(j, columnId, ds_ShippingWeightContents.getCellData(rowIndex, columnId));
      scwin.f_countGridTeu();
      scwin.f_railNumSetting(j);
    }
  }
  if (columnId == "transNmCd") {
    for (let j = rowIndex + 1; j < totalRows; j++) {
      ds_ShippingWeightContents.setCellData(j, columnId, ds_ShippingWeightContents.getCellData(rowIndex, columnId));
      scwin.f_setTransCd(j, ds_ShippingWeightContents.getCellData(j, "transNmCd"));
      let transNmCd = ds_ShippingWeightContents.getCellData(j, "transNmCd");
      if (transNmCd != "DB") {
        ds_ShippingWeightContents.setCellData(j, "dptHndlRateSateYn", "NNNN");
        ds_ShippingWeightContents.setCellData(j, "arvHndlRateSateYn", "NNNN");
        ds_ShippingWeightContents.setCellData(j, "trnNo", "");
      } else {
        ds_ShippingWeightContents.setCellData(j, "dptHndlRateSateYn", "YNNN");
        ds_ShippingWeightContents.setCellData(j, "arvHndlRateSateYn", "YNNN");
      }
    }
  }
};
scwin.dataSetDebug = async function (dataSet, isDebug) {
  if (isDebug == true) {
    let obj = dataSet;
    let str = "[[[[" + obj.id + "]]]]]\n";
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      let colCount = obj.getColumnCount();
      for (let dsCol = 0; dsCol < colCount; dsCol++) {
        let colId = obj.getColumnID(dsCol);
        str += "[" + colId + "] " + obj.getCellData(dsRow, colId) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
scwin.f_frtcarNoSum = async function () {
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  let curpos = ds_ShippingWeightContents.getRowPosition();
  let sum_cnt = 0;
  for (let i = 0; i < total_cnt; i++) {
    if (ds_ShippingWeightContents.getCellData(i, "frtcarNo") == ds_ShippingWeightContents.getCellData(curpos, "frtcarNo")) {
      if (ds_ShippingWeightContents.getCellData(i, "cntrSizCd") == "20") sum_cnt += 1;else sum_cnt += 2;
    }
  }
  return sum_cnt;
};
scwin.f_frtcarNoSetData = async function (sum_cnt) {
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  let curpos = ds_ShippingWeightContents.getRowPosition();
  let j = 0;
  let oFrtcarCapa = "";
  for (let i = 0; i < total_cnt; i++) {
    if (ds_ShippingWeightContents.getCellData(i, "frtcarNo") == ds_ShippingWeightContents.getCellData(curpos, "frtcarNo")) {
      if (j == 0) {
        oFrtcarCapa = ds_ShippingWeightContents.getCellData(curpos, "frtcarCapa");
        j++;
      }
      if (oFrtcarCapa < sum_cnt) {
        await $c.gus.cfAlertMsg($p, "[" + (curpos + 1) + "번째 줄]" + "적재TEU 값이 화차용량값보다 클수 없습니다.");
        ds_ShippingWeightContents.setCellData(curpos, "frtcarNo", "");
        ds_ShippingWeightContents.setCellData(curpos, "frtcarCapa", "");
        ds_ShippingWeightContents.setCellData(curpos, "shipwgtTeu", "");
        gr_ShippingWeightContents.setFocusedCell(curpos, "frtcarNo");
        return;
      }
      ds_ShippingWeightContents.setCellData(i, "shipwgtTeu", sum_cnt);
      let rp = ds_RailroadWorkIndication.getRowPosition();
      if (rp >= 0 && ds_RailroadWorkIndication.getCellData(rp, "teu") < scwin.f_shipwgtTeuSum()) {
        await $c.gus.cfAlertMsg($p, "[" + (curpos + 1) + "번째 줄]" + "적재TEU 값이 사유화차배정TEU(" + ds_ShippingWeightContents.getCellData(curpos, "teu") + ")보다 클수 없습니다.");
        ds_ShippingWeightContents.setCellData(curpos, "frtcarNo", "");
        ds_ShippingWeightContents.setCellData(curpos, "frtcarCapa", "");
        ds_ShippingWeightContents.setCellData(curpos, "shipwgtTeu", "");
        gr_ShippingWeightContents.setFocusedCell(curpos, "frtcarNo");
        return;
      }
    }
  }
};
scwin.f_shipwgtTeuSum = async function () {
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  let k = 0;
  let shipwgtTeu = 0;
  let frtcarNoList = [];
  let frtcarNoLen = 0;
  let realFlag = "Y";
  for (let i = 0; i < total_cnt; i++) {
    for (let j = i; j < total_cnt; j++) {
      if (ds_ShippingWeightContents.getCellData(i, "frtcarNo") == ds_ShippingWeightContents.getCellData(j, "frtcarNo")) {
        if (k == 0) {
          for (let ka = 0; ka < frtcarNoList.length; ka++) {
            if (frtcarNoList[ka] == ds_ShippingWeightContents.getCellData(j, "frtcarNo")) realFlag = "N";
          }
          if (realFlag == "Y") {
            frtcarNoList[frtcarNoLen] = ds_ShippingWeightContents.getCellData(i, "frtcarNo");
            frtcarNoLen++;
            shipwgtTeu = parseInt(shipwgtTeu) + parseInt(ds_ShippingWeightContents.getCellData(j, "shipwgtTeu"));
          }
          realFlag = "Y";
        }
        k++;
      }
    }
    k = 0;
  }
  return shipwgtTeu;
};
scwin.f_dateChk = async function (row, colid) {
  let dptDateStr = ds_ShippingWeightContents.getCellData(row, "dptDt");
  let arvDateStr = ds_ShippingWeightContents.getCellData(row, "arvDt");
  if (dptDateStr > arvDateStr) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["일자"]);
    ds_ShippingWeightContents.setCellData(row, "arvDt", "");
    ds_ShippingWeightContents.setRowPosition(row);
    gr_ShippingWeightContents.setFocusedCell(row, "arvDt");
    return;
  }
};
scwin.f_railroadSer = async function () {
  await $c.gus.cfAlertMsg($p, "아직 구현되지 않은 기능입니다.");
};
scwin.f_ConteinerReturnValue = function (rtnList) {
  // TODO: 팝업 콜백 방식으로 변환 필요 — 원본 f_ConteinerReturnValue 로직 참조
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let cur_rowpos = ds_RailroadWorkIndication.getRowPosition();
  switch (disGubun) {
    case 1:
      udc_begintrainWorkPlace.ilCommonPopUp(scwin.callbackBeginTrainWorkPlace, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "역명조회,작업장코드,작업장명");
      break;
    case 2:
      udc_endtrainWorkPlace.ilCommonPopUp(scwin.callbackEndTrainWorkPlace, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "역명조회,작업장코드,작업장명");
      break;
    case 3:
      // TODO: 그리드 내 컨테이너 팝업 — cfCommonPopUp → udc.ilCommonPopUp 변환 필요
      break;
    case 4:
      // TODO: 그리드 내 화차번호 팝업 — cfCommonPopUp → udc.ilCommonPopUp 변환 필요
      break;
  }
};
scwin.callbackBeginTrainWorkPlace = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_begintrainWorkPlaceCd, txt_begintrainWorkPlaceNm);
};
scwin.callbackEndTrainWorkPlace = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_endtrainWorkPlaceCd, txt_endtrainWorkPlaceNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_begintrainWorkPlace',codeId:'ed_begintrainWorkPlaceCd',nameId:'txt_begintrainWorkPlaceNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_endtrainWorkPlace',codeId:'ed_endtrainWorkPlaceCd',nameId:'txt_endtrainWorkPlaceNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',edFromId:'ica_wrkDt',edToId:'ica_wrkDtTo',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업지시정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_RailroadWorkIndication',style:'',autoFit:'allColumn',id:'gr_RailroadWorkIndication',visibleRowNum:'3',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptStn',value:'출발역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvStn',value:'도착역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transLongNo',value:'화물운송장<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'frtcarAllocVol',value:'배분량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsVol',value:'실제작업량<br/>(TEU)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'prvtAppTeu',value:'사유화차 신청량(TEU)<br/>(전용포함)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'teu',value:'사유화차 배분량(TEU)<br/>(전용포함)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prvtAppTeu',value:'사유화차<br/>신청량(TEU)',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'teu',value:'사유화차<br/>배분량(TEU)',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xclsAppTeu',value:'전용화차<br/>신청량(TEU)',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xclsTeu',value:'전용화차<br/>배분량(TEU)',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'btRsltsVol',value:'실제작업량<br/>(저수요)',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dptHndlRateSateYn',value:'조작/재조작/구내/정보',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvHndlRateSateYn',value:'전송',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptStn',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvStn',value:'도착역',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptStn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvStn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transLongNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'frtcarAllocVol',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsVol',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'prvtAppTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'teu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prvtAppTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'teu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xclsAppTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xclsTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'btRsltsVol',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptHndlRateSateYn',displayMode:'label',readOnly:'true',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvHndlRateSateYn',displayMode:'label',readOnly:'true',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'sndSts',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',dataType:'number',displayFormat:'#,###',class:'underline'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_RailroadWorkIndicationDetail',style:'',autoFit:'allColumn',id:'gr_RailroadWorkIndicationSub',visibleRowNum:'1',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'No',value:'{currow}',displayMode:'label',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'prvtAppCnt20Empty',value:'사유화차 신청량(전용포함)',displayMode:'label',colSpan:'6'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'prvtAppCnt20Full',value:'사유화차 배정량(전용포함)',displayMode:'label',colSpan:'6'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'prvtAppCnt40Empty',value:'전용화차 신청량',displayMode:'label',colSpan:'6',hidden:'true'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'prvtAppCnt40Full',value:'전용화차 배정량',displayMode:'label',colSpan:'6',hidden:'true'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'prvtAppCnt45Empty',value:'공사화차량',displayMode:'label',colSpan:'6'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'No',value:'20E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt20Empty',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt20Full',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt40Empty',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt40Full',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt45Empty',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt45Full',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt20Empty',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt20Full',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt40Empty',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt40Full',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt45Empty',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt45Full',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt20Empty',value:'20F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt20Full',value:'40E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt40Empty',value:'40F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt40Full',value:'45E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt45Empty',value:'45F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt45Full',value:'20E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt20Empty',value:'20F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt20Full',value:'40E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt40Empty',value:'40F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt40Full',value:'45E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt45Empty',value:'45F',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt45Full',value:'20E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt20Empty',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt20Full',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt40Empty',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt40Full',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt45Empty',value:'45F',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt20Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt20Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt40Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt40Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt45Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt45Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt20Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt20Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt40Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt40Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt45Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt45Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt20Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt20Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt40Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt40Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt45Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt45Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt20Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt20Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt40Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt40Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt45Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt45Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt20Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt20Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt40Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt40Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt45Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt45Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적재정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_ShippingWeightContents',id:'gr_ShippingWeightContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true',fixedColumn:'1',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'컨테이너<br/>번호',width:'100',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypShowCd',inputType:'text',value:'규격',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'Tp',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'F/E',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',value:'SealNo',width:'80',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',value:'화주명',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',value:'중량',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adminfrtcarYn',inputType:'text',value:'화차<br/>구분',width:'70',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onewayYn',inputType:'text',value:'편도<br/>여부',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trnNo',value:'열차<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'frtcarNo',value:'화차<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'transNmCd',value:'운송<br/>명의',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transNmClntCd',value:'거래처<br/>코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'adjmTrgtYn',value:'철송임<br/>미생성',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mmEndScYn',value:'월말<br/>할증여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'pncportYn',value:'신항<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dptDt',value:'출발',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptHh',value:'도착일시',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'arvDtm',value:'조작/재조작/구내/정보',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'dptHndlRateSateYn',value:'EDI전송',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvHndlRateSateYn',value:'컨테이너<br/>수',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'railroadEdiSndYn',value:'화차용량',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsNm',value:'적재TEU',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndClsMsg',value:'냉동<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'cntrNo',value:'일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTypShowCd',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'cntrTypCd',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'fullEmptyClsCd',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sealNo',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'odrNo',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mchtNm',value:'취소전송',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'grossWt',value:'응답상태',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'textImage',width:'100',displayFormat:'###########',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypShowCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'70',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adminfrtcarYn',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'저수요'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사유'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'onewayYn',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trnNo',displayMode:'label',displayFormat:'#####'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',id:'frtcarNo',displayMode:'label',dataType:'date',displayFormat:'yyyyMMdd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'transNmCd',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Code:Name'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_combo_transNmCd'}]}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transNmClntCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',id:'adjmTrgtYn',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'mmEndScYn',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'pncportYn',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'calendar',id:'dptDt',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptHh',displayMode:'label',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDtm',displayMode:'label',allowChar:'0-9',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptHndlRateSateYn',displayMode:'label',readOnly:'true',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvHndlRateSateYn',displayMode:'label',readOnly:'true',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'railroadEdiSndYn',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsMsg',displayMode:'label',readOnly:'true',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'replyState',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrCnt',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'frtcarCapa',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipwgtTeu',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'frzYn',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'추가할 갯수',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_addCnt',placeholder:'',class:''}}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사유(전용포함)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'저수요',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TEU',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20\'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40\'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'',label:'num',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'저수요배정금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_totAmt',placeholder:'',style:'',ref:'data:ds_RailroadFare.totAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'저수요단가',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_railroadFare',placeholder:'',style:'',ref:'data:ds_RailroadFare.railroadFare'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TEU',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_teuCnt',placeholder:'',style:'',ref:'data:ds_RailroadFare.teuCnt'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_trigger1',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_trigger2',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저수요단가생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_trigger3',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저수요단가등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_trigger4',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'조작료수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_trigger5',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI등록(M/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger6',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장(A/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})