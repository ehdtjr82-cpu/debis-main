/*amd /ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_01b.xml 168223 4fac3b12334921231fbb8219bbd43027cc54b38d8d57032ab8264be4515ce9c9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'도착역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtTo',name:'작업일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condCntrBasisInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkIndication',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStn',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transLongNo',name:'화물운송장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'배분량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsVol',name:'실제작업량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prvtAppTeu',name:'사유화차신청량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'teu',name:'사유화차배분량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsAppTeu',name:'전용화차신청량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'xclsTeu',name:'전용화차배분량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'btRsltsVol',name:'실제작업량저수요',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dptHndlRateSateYn',name:'출발역조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateSateYn',name:'도착역조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSts',name:'전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnCd',name:'출발역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnCd',name:'도착역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'EDI전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'calcPrvtAppTeu',name:'사유화차신청량(TEU)(전용포함)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'calcTeu',name:'사유화차배분량(TEU)(전용포함)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actState',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnLobranCd',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnLobranCd',name:'name41',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadWorkIndicationDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prvtAppCnt20Empty',name:'사유20E신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt20Full',name:'사유20F신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt40Empty',name:'사유40E신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt40Full',name:'사유40F신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt45Empty',name:'사유45E신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAppCnt45Full',name:'사유45F신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt20Empty',name:'사유20E배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt20Full',name:'사유20F배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt40Empty',name:'사유40E배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt40Full',name:'사유40F배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt45Empty',name:'사유45E배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'prvtAssgnCnt45Full',name:'사유45F배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt20Empty',name:'전용20E신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt20Full',name:'전용20F신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt40Empty',name:'전용40E신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt40Full',name:'전용40F신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt45Empty',name:'전용45E신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAppCnt45Full',name:'전용45F신청',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt20Empty',name:'전용20E배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt20Full',name:'전용20F배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt40Empty',name:'전용40E배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt40Full',name:'전용40F배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt45Empty',name:'전용45E배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsAssgnCnt45Full',name:'전용45F배정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt20Empty',name:'공사20E',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt20Full',name:'공사20F',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt40Empty',name:'공사40E',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt40Full',name:'공사40F',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt45Empty',name:'공사45E',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adminfrtcarCnt45Full',name:'공사45F',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ShippingWeightContents',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_ShippingWeightContents_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypShowCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Tp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SealNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onewayYn',name:'편도여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnNo',name:'열차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmCd',name:'운송명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmClntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmTrgtYn',name:'철송임미생성',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmEndScYn',name:'월말할증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pncportYn',name:'신항여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateSateYn',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateSateYn',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadEdiSndYn',name:'여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsNm',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsMsg',name:'취소전송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyState',name:'응답상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCnt',name:'컨테이너수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarCapa',name:'화차용량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtTeu',name:'적재TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzYn',name:'냉동여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnCd',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnCd',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actState',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldArvDt',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldArvHh',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldDptDt',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldDptHh',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnLobranCd',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnLobranCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCutAmt',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvUpperWrkPlCd',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptUpperWrkPlCd',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateWrkStpSeq',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateWrkStpSeq',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btRsnCheck',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delAllowFlag',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndYn',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoSndYn',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkAutoEdiYn',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptDt',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldAdminfrtcarYn',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateYn',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptReHndlRateYn',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptCmpndPrtgCostYn',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptInfoUseRateYn',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateYn',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvReHndlRateYn',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvCmpndPrtgCostYn',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvInfoUseRateYn',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntCd',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadErrCd',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediSndDocCls',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prevGatelogNo',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nextGatelogNo',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldAdjmTrgtYn',name:'name123',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ShippingWeightContentsEdiSend',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_transNmCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RegistShippingWeightSubInfo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_combo_stateKind',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_preInfoSndYn',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadFare',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptStnWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFare',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuCnt',name:'TEU수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrBasisInfoResult',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SealNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'WrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'WrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateSateYn',name:'출발조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateSateYn',name:'도착조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnLobranCd',name:'출발역법인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnLobranCd',name:'도착역법인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCutAmt',name:'철도절사금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvUpperWrkPlCd',name:'도착상위작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadEdiSndYn',name:'EDI전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptUpperWrkPlCd',name:'출발상위작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateWrkStpSeq',name:'출발조작료단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateWrkStpSeq',name:'도착조작료단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'부킹번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'btRsnCheck',name:'BT사유체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmEndScYn',name:'월말할증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scAdptDay',name:'할증적용일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptDt',name:'매입적용일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_RailroadFare',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'dptStnWrkPlCd',name:'출발작업장'}},{T:1,N:'w2:key',A:{dataType:'text',id:'arvStnWrkPlCd',name:'도착작업장'}},{T:1,N:'w2:key',A:{dataType:'text',id:'adptDt',name:'적용일자'}},{T:1,N:'w2:key',A:{dataType:'text',id:'totAmt',name:'총금액'}},{T:1,N:'w2:key',A:{dataType:'text',id:'railroadFare',name:'단가'}},{T:1,N:'w2:key',A:{dataType:'text',id:'teuCnt',name:'TEU수'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condCntrBasisInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkIndication',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadWorkIndicationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkIndication","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadWorkIndication","key":"OUT_DS1"}]','ev:submitdone':'','ev:submiterror':'','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadWorkIndicationDetail',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadWorkIndicationDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadWorkIndicationDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RailroadWorkIndicationDetail","key":"OUT_DS1"}','ev:submitdone':'','ev:submiterror':'','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveShippingWeightContents',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveShippingWeightContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_ShippingWeightContents","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ShippingWeightContents","key":"OUT_DS1"}]','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRailroadFare',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailroadFareCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RailroadFare","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadFare","key":"OUT_DS1"}]','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RegistShippingWeightContents',action:'/ds.op.wrkrslts.railroadwrkrslts.RegistShippingWeightContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_ShippingWeightContents","key":"IN_DS1"}]',target:'','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RegistShippingWeightBatchTransmissionEdi',action:'/ds.op.wrkrslts.railroadwrkrslts.RegistShippingWeightBatchTransmissionEdiCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_RailroadWorkIndication","key":"IN_DS1"}]',target:'','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_SaveRailroadFare',action:'/ds.op.wrkplan.railroadwrkplan.SaveRailroadFareCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_RailroadFare","key":"IN_DS1"}]',target:'','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RegistShippingWeightContentsEdiSend',action:'/ds.op.wrkrslts.railroadwrkrslts.RegistShippingWeightContentsEdiSendCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_ShippingWeightContentsEdiSend","key":"IN_DS1"}]',target:'','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCntrBasisInfo',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveContainerInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condCntrBasisInfo","key":"IN_DS1"},{"id":"ds_cntrBasisInfoResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrBasisInfoResult","key":"OUT_DS1"}]','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveTransNmCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_combo_transNmCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_combo_transNmCd","key":"OUT_DS1"}]','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveStateKind',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_combo_stateKind","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_combo_stateKind","key":"OUT_DS1"}]','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrievePreInfoSndYn',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_preInfoSndYn","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_preInfoSndYn","key":"OUT_DS1"}]','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_preInfoSndYn',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_preInfoSndYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.submitPre','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_combo_transNmCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_combo_transNmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.submitPre','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_combo_stateKind',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_combo_stateKind","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.submitPre','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.ds_RailroadWorkIndication_OnLoadCompleted,scwin.ds_RailroadWorkIndication_OnLoadCompleted,scwin.ds_RailroadWorkIndication_OnLoadCompleted,scwin.ds_RailroadWorkIndication_OnLoadCompleted,scwin.ds_RailroadWorkIndication_OnLoadCompleted,scwin.f_HndlRateSateYn,scwin.f_OnLoad,scwin.f_RetrieveTransNmCd,scwin.f_RetrieveTransNmCd,scwin.f_RetrieveTransNmCd,scwin.f_RetrieveTransNmCd,scwin.f_RetrieveTransNmCd,scwin.f_RetrieveTransNmCd,scwin.f_RetrieveTransNmCd,scwin.f_Save,scwin.f_addCntrBasisInfo,scwin.f_addCntrBasisInfo,scwin.f_addRows,scwin.f_cancelAct,scwin.f_chkOpenCommonPopUp,scwin.f_chkOpenCommonPopUp,scwin.f_chkOpenCommonPopUp,scwin.f_cntrNoDubleChk,scwin.f_cntrNoDubleChk,scwin.f_countGridTeu,scwin.f_crryInOutEDI,scwin.f_crryInOutEDICheck,scwin.f_ediSend,scwin.f_ediSend,scwin.f_ediSend2,scwin.f_inputGridAddrow,scwin.f_openNewPortTrf,scwin.f_openPopUpHdlCharge,scwin.f_qeryList,scwin.f_railNumSetting,scwin.f_railroadResultsExcel,scwin.f_retrieveCntrBasisInfo,scwin.globalVars,scwin.gr_RailroadWorkIndicationSub_format,scwin.gr_RailroadWorkIndication_format,scwin.moveRowPosition,scwin.submitExcute'}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.oldrowData = 0;
  scwin.dateStr = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 현재일자
  scwin.dptStnCd = $c.data.getParameter($p, 'dptStnCd') ?? '';
  scwin.arvStnCd = $c.data.getParameter($p, 'arvStnCd') ?? '';
  scwin.onReqDt = $c.data.getParameter($p, 'onReqDt') ?? '';
  scwin.cntrNo = $c.data.getParameter($p, 'cntrNo') ?? '';
  scwin.frtcarNo = $c.data.getParameter($p, 'frtcarNo') ?? '';
  scwin.btCls = $c.data.getParameter($p, 'btCls') ?? ''; // BT컨테이너적재화면 LINK여부

  scwin.oldData = "";
  scwin.oldColId = "";
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  // 초기화면 설정
  const initBlankComps = [spn_rsnTot, spn_rsnTeu, spn_admTot, spn_admTeu, spn_btTot, spn_btTeu, spn_20Tot, spn_40Tot];
  initBlankComps.forEach(component => {
    component.setValue('');
  });
  const initZeroComps = [ed_totAmt, ed_railroadFare, ed_teuCnt];
  initZeroComps.forEach(component => {
    component.setValue(0);
  });

  // 기본값 설정
  ica_wrkDt.setValue(scwin.dateStr);
  ica_wrkDtTo.setValue(scwin.dateStr);
  ed_begintrainWorkPlaceCd.focus();
  $c.gus.cfDisableBtn($p, [btn_bSave2, btn_bSave, btn_bUpdate, btn_bUpdate2]);
  scwin.f_RetrieveTransNmCd('OP147');
  scwin.f_RetrieveStateKind();

  // IME 미지원
  // cfSetIMEModeObject(txt_begintrainWorkPlaceNm, 'active');
  // cfSetIMEModeObject(txt_endtrainWorkPlaceNm, 'active');

  if (scwin.dptStnCd != '' && scwin.arvStnCd != '' && scwin.onReqDt != '') {
    scwin.f_qeryList();
  }
  ;

  //test data
  // ica_wrkDt.setValue('20250701');
  // ed_begintrainWorkPlaceCd.setValue('6R12');

  // ica_wrkDt.setValue('20250730');
  // ica_wrkDtTo.setValue('20250730');
};

/**
 * @method 
 * @name f_qeryList 
 * @description 조회
 */
scwin.f_qeryList = async function () {
  // 작업일자
  let retValid = await $c.gus.cfValidate($p, [ica_wrkDt, ica_wrkDtTo]);
  if (!retValid) return;
  if (!$c.gus.cfIsAfterDate($p, ica_wrkDt.getValue(), ica_wrkDtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_wrkDt.focus();
    return;
  }
  ;
  ds_ShippingWeightContents.removeAll();
  ds_RailroadWorkIndication.removeAll();
  ds_RailroadWorkIndicationDetail.removeAll();
  SubtotalRows.setValue(0);
  dma_QueryCondition.setEmptyValue();
  if (scwin.dptStnCd != '' && scwin.arvStnCd != '' && scwin.onReqDt != '') {
    ica_wrkDt.setValue(scwin.onReqDt);
    ica_wrkDtTo.setValue(scwin.onReqDt);
    ed_begintrainWorkPlaceCd.setValue(scwin.dptStnCd);
    ed_endtrainWorkPlaceCd.setValue(scwin.arvStnCd);
  }
  ;
  dma_QueryCondition.set('wrkDt', ica_wrkDt.getValue()); // 작업일자
  dma_QueryCondition.set('dptStn', ed_begintrainWorkPlaceCd.getValue()); // 출발역
  dma_QueryCondition.set('arvStn', ed_endtrainWorkPlaceCd.getValue()); // 도착역
  dma_QueryCondition.set('wrkDtTo', ica_wrkDtTo.getValue()); // 작업일자To
  await scwin.submitExcute(sbm_RetrieveRailroadWorkIndication);

  //PCY
  scwin.oldrowData = 0;
  scwin.onReqDt = '';
  scwin.dptStnCd = '';
  scwin.arvStnCd = '';
};

/**
 * @method 
 * @name f_Save 
 * @description 저장버튼 처리
 */
scwin.f_Save = async function (p_gubun) {
  const swcRowCnt = ds_ShippingWeightContents.getRowCount();
  const swcRowData = ds_ShippingWeightContents.getRowJSON(swcRowCnt - 1);
  const rwiFocusedIdx = ds_RailroadWorkIndication.getRowPosition();
  const rwiRowData = ds_RailroadWorkIndication.getRowJSON(rwiFocusedIdx);
  if (swcRowData['cntrNo'] == '') {
    ds_ShippingWeightContents.setRowPosition(swcRowCnt - 1);
    scwin.f_DeleteAct();
  }
  ;

  //경인ICD의 경우 Copino자동전송 되도록 . -> 군포역추가 2013.04.22
  if (['4R01', '4R02'].includes(rwiRowData['dptStnCd']) || ['4R01', '4R02'].includes(rwiRowData['arvStnCd'])) {
    p_gubun = 'Auto';
  }
  ;

  //BT->BT, 우선권배정->사유 로 청화차여부 check
  for (let m = 0; m < swcRowCnt; m++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(m);
    if (rowData['btRsnCheck'] == 'BT' && rowData['adminfrtcarYn'] != '2') {
      await $c.win.alert($p, '컨테이너 ' + rowData['cntrNo'] + ' 의 화차구분은 저수요로 지정되어야 합니다.');
      ds_ShippingWeightContents.setCellData(m, 'adminfrtcarYn', '2');
      return false;
    }
    ;
    if (rowData['btRsnCheck'] == 'RSN' && rowData['adminfrtcarYn'] != '0') {
      await $c.win.alert($p, '컨테이너' + rowData['cntrNo'] + ' 의 화차구분은 사유로 지정되어야 합니다.');
      ds_ShippingWeightContents.setCellData(m, 'adminfrtcarYn', '0');
      return false;
    }
    ;
  }
  ;
  for (let n = 0; n < swcRowCnt; n++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(n);
    if (!['2', '3', '4'].includes(rowData['adminfrtcarYn']) &&
    //예비화차 추가 2016.02.05
    rowData['transNmCd'] != 'DB' && ds_ShippingWeightContents.getRowStatusValue(n) != 2) {
      //삭제가 아닌경우 체크
      await $c.win.alert($p, '컨테이너' + ds_ShippingWeightContents.getCellData(n, 'cntrNo') + ' 의 화차구분은 운송명의가 타사이므로 \n\n전용/예비/저수요로 지정되어야 합니다.');
      return false;
    }
    ;
  }
  ;

  // BT배정수량 체크
  // 운송명의가 동부인 경우만 체크 (타사명의 체크들어가서 진행 안됨)2016.01.22 이종훈대리
  if (swcRowData['transNmCd'] == 'DB') {
    let btTeu = 0;
    let v_curTeu = dma_RailroadFare.get('teuCnt') ?? 0;
    let cur_Rows = ds_ShippingWeightContents.getRowCount();
    for (i = 0; i < cur_Rows; i++) {
      let rowData = ds_ShippingWeightContents.getRowJSON(i);
      if (rowData['cntrNo'] != '' && rowData['adminfrtcarYn'] == '2') {
        if (rowData['cntrSizCd'] == 20) {
          btTeu++;
        } else {
          btTeu = btTeu + 2;
        }
        ;
      }
      ;
    }
    ;
    if (btTeu > v_curTeu) {
      if (rwiRowData['dptStnCd'] == '4R01' && rwiRowData['arvStnCd'] == '6R12' || rwiRowData['dptStnCd'] == '6R12' && rwiRowData['arvStnCd'] == '4R01') {
        await $c.win.alert($p, '배정된 저수요수량[' + v_curTeu + ']보다 많은 컨테이너가 적재되어 저장할 수 없습니다.');
        return;
      }
      ;
    }
    ;
  }
  ;

  // 사유화차 수량 체크
  let cur_rowpos = ds_RailroadWorkIndication.getRowPosition();
  let cur_rowData = ds_RailroadWorkIndication.getRowJSON(cur_rowpos);
  let rowState = 0;
  let v_obj = {
    empty20: 0,
    full20: 0,
    empty40: 0,
    full40: 0,
    empty45: 0,
    full45: 0
  };
  let v_xcls_obj = {
    empty20: 0,
    full20: 0,
    empty40: 0,
    full40: 0,
    empty45: 0,
    full45: 0
  };
  for (let i = 0; i < swcRowCnt; i++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(i);
    let origingRowData = ds_ShippingWeightContents.getOriginalRowData(i);

    //0=nomal, 1=insert, 2=delete, 3=update, 4=logical
    rowState = ds_ShippingWeightContents.getRowStatusValue(i);
    let size = rowData['cntrSizCd'];
    let type = rowData['fullEmptyClsCd'] == 'E' ? 'Empty' : 'Full';
    if (rowData['adminfrtcarYn'] == 0) {
      let key = type.toLowerCase() + size;
      if (v_obj.hasOwnProperty(key)) v_obj[key]++;
    }
    ;
    if (rowData['adminfrtcarYn'] == 3) {
      let key = type.toLowerCase() + size;
      if (v_xcls_obj.hasOwnProperty(key)) v_xcls_obj[key]++;
    }
    ;

    //20140922 황창기 전용화차 미배정건인지 체크 한다.(전용호차 미배정건은 청화차 요율을 적용)
    if (rowData['adminfrtcarYn'] == 3) {
      let key = type.toLowerCase() + size;
      let rowKey = 'xclsAssgnCnt' + size + type;
      let xclsVal = v_xcls_obj?.[key];
      let rowVal = cur_rowData?.[rowKey];
      if (xclsVal != null && rowVal != null && xclsVal > rowVal) {
        ds_ShippingWeightContents.setCellData(i, 'frtcarCapa', '2');
      }
      ;
    }
    ;
    if (rowState == 0) continue;
    let columns = {
      'oldArvDt': 'arvDt',
      'oldArvHh': 'arvHh',
      'oldDptDt': 'dptDt',
      'oldDptHh': 'dptHh'
    };
    Object.entries(columns).forEach(([targetCol, sourceKey]) => {
      let value = rowState == 1 ? '' : origingRowData[sourceKey];
      ds_ShippingWeightContents.setCellData(i, targetCol, value);
    });
    columns = {
      'arvDt': rowData['arvDtm'].slice(0, 8),
      'arvHh': rowData['arvDtm'].slice(8, 4)
    };
    Object.entries(columns).forEach(([targetCol, sourceVal]) => {
      let value = rowData['arvDtm'] == '' ? '' : sourceVal;
      ds_ShippingWeightContents.setCellData(i, targetCol, value);
    });
    let actStates = {
      1: 'S',
      2: 'D',
      3: 'U'
    };
    ds_ShippingWeightContents.setCellData(i, 'actState', actStates[rowState] ?? '');
    if (rowData['cntrNo'] == '') {
      // 컨테이너번호
      await $c.gus.cfAlertMsg($p, '[' + (i + 1) + '번째 줄]' + MSG_CM_ERR_002, ['컨테이너번호']);
      ds_ShippingWeightContents.setRowPosition(i);
      gr_ShippingWeightContents.setFocusedCell(i, 'cntrNo');
      return;
    }
    ;
    columns = {
      'transWrkIndictNo': 'wrkIndictNo',
      'wrkDt': 'reqDt',
      'dptStnCd': 'dptStnCd',
      'arvStnCd': 'arvStnCd'
    };
    Object.entries(columns).forEach(([targetKey, sourceKey]) => {
      if (rowData[targetKey] == '') {
        ds_ShippingWeightContents.setCellData(i, targetKey, cur_rowData[sourceKey]);
      }
    });

    //4R01 -> 6R12 이구간을 타사명의 도착작업장의 상위 작업장 삭제안함
    if (rowData['dptStnCd'] == '4R01' && rowData['arvStnCd'] == '6R12' && rowData['transNmCd'] == 'DB') {
      ds_ShippingWeightContents.setCellData(i, 'arvUpperWrkPlCd', '');
    }
    ;

    //4R01 -> 6R01 도 GTC명의 제외한 타사명의는 상위 작업장 삭제안함
    //4R01 -> 6R01 KL(코레일로지스)명의 화차구분 저수요(2) 인건도 동부에서 철송이후 반입  셔틀구간 운송  도착상위작업장 삭제함 20170517 황창기
    if (rowData['dptStnCd'] == '4R01' && rowData['sarvStnCd'] == '6R01') {
      if (['DB', 'GT'].includes(rowData['transNmCd'])) {
        ds_ShippingWeightContents.setCellData(i, 'arvUpperWrkPlCd', '');
      } else if (rowData['transNmCd'] == 'KL' && rowData['adminfrtcarYn'] == '2') {
        ds_ShippingWeightContents.setCellData(i, 'arvUpperWrkPlCd', '');
      }
      ;
    }
    ;
  } //for

  const swcFocuesdIdx = ds_ShippingWeightContents.getRowPosition();
  const swcFocuesdData = ds_ShippingWeightContents.getRowJSON(swcFocuesdIdx);
  const swcFoucesdStatus = ds_ShippingWeightContents.getRowStatusValue(swcFocuesdIdx);
  const rwidFocuesdIdx = ds_RailroadWorkIndicationDetail.getRowPosition();
  const rwidFocuesdData = ds_RailroadWorkIndicationDetail.getRowJSON(rwidFocuesdIdx);

  ////0=nomal, 1=insert, 2=delete, 3=update, 4=logical
  if (swcFocuesdData['transNmCd'] == 'DB' && [1, 3].includes(swcFoucesdStatus)) {
    if (v_obj['empty20'] > rwidFocuesdData['prvtAssgnCnt20Empty']) {
      // 남동발전 관련 옥계, 안인, 안인(소내)일 경우 체크 pass
      if (!['2R05', '2R06', '2R07'].includes(cur_rowData['dptStnCd'])) {
        await $c.gus.cfAlertMsg($p, '20 Feet Empty 컨테이너의 사유화차 배정량을 초과했습니다');
        return;
      }
      ;
    }
    ;
    if (v_obj['full20'] > rwidFocuesdData['prvtAssgnCnt20Full']) {
      // 남동발전 관련 옥계, 안인, 안인(소내)일 경우 체크 pass
      if (!['2R05', '2R06', '2R07'].includes(cur_rowData['arvStnCd'])) {
        await $c.gus.cfAlertMsg($p, '20 Feet Full 컨테이너의 사유화차 배정량을 초과했습니다');
        return;
      }
      ;
    }
    ;
    if (v_obj['empty40'] > rwidFocuesdData['prvtAssgnCnt40Empty']) {
      await $c.gus.cfAlertMsg($p, '40 Feet Empty 컨테이너의 사유화차 배정량을 초과했습니다');
      return;
    }
    ;
    if (v_obj['full40'] > rwidFocuesdData['prvtAssgnCnt40Full']) {
      await $c.gus.cfAlertMsg($p, '40 Feet Full 컨테이너의 사유화차 배정량을 초과했습니다');
      return;
    }
    ;
    if (v_obj['empty45'] > rwidFocuesdData['prvtAssgnCnt45Empty']) {
      await $c.gus.cfAlertMsg($p, '45 Feet Empty 컨테이너의 사유화차 배정량을 초과했습니다');
      return;
    }
    ;
    if (v_obj['full45'] > rwidFocuesdData['prvtAssgnCnt45Full']) {
      await $c.gus.cfAlertMsg($p, '45 Feet Full 컨테이너의 사유화차 배정량을 초과했습니다');
      return;
    }
    ;

    //20140918 황창기 전용화차 배정받지 못한건도 등록가능하도록 수정
    if (v_xcls_obj['empty20'] > rwidFocuesdData['xclsAppCnt20Empty']) {
      // 남동발전 관련 옥계, 안인, 안인(소내)일 경우 체크 pass
      if (!['2R05', '2R06', '2R07'].includes(cur_rowData['dptStnCd'])) {
        await $c.gus.cfAlertMsg($p, '20 Feet Empty 컨테이너의 전용화차 신청량을 초과했습니다');
        return;
      }
      ;
    }
    ;
    if (v_xcls_obj['full20'] > rwidFocuesdData['xclsAppCnt20Full']) {
      // 남동발전 관련 옥계, 안인, 안인(소내)일 경우 체크 pass
      if (!['2R05', '2R06', '2R07'].includes(cur_rowData['arvStnCd'])) {
        await $c.gus.cfAlertMsg($p, '20 Feet Full 컨테이너의 전용화차 신청량을 초과했습니다');
        return;
      }
      ;
    }
    ;
    if (v_xcls_obj['empty40'] > rwidFocuesdData['xclsAppCnt40Empty']) {
      await $c.gus.cfAlertMsg($p, '40 Feet Empty 컨테이너의 전용화차 신청량을 초과했습니다');
      return;
    }
    ;
    if (v_xcls_obj['full40'] > rwidFocuesdData['xclsAppCnt40Full']) {
      await $c.gus.cfAlertMsg($p, '40 Feet Full 컨테이너의 전용화차 신청량을 초과했습니다');
      return;
    }
    ;
    if (v_xcls_obj['empty45'] > rwidFocuesdData['xclsAppCnt45Empty']) {
      await $c.gus.cfAlertMsg($p, '45 Feet Empty 컨테이너의 전용화차 신청량을 초과했습니다');
      return;
    }
    ;
    if (v_xcls_obj['full45'] > rwidFocuesdData['xclsAppCnt45Full']) {
      await $c.gus.cfAlertMsg($p, '45 Feet Full 컨테이너의 전용화차 신청량을 초과했습니다');
      return;
    }
    ;
  }
  ;

  //예비화차 구간만 진행가능 2016.03.07
  for (let n = 0; n < swcRowCnt; n++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(n);

    //예비화차인 경우
    if (rowData['adminfrtcarYn'] == '4' && [1, 3].includes(swcFoucesdStatus)) {
      //4R01 -> 6R12 오봉 신항 예비화차 구간
      if (rowData['dptStnCd'] == '4R01' && rowData['arvStnCd'] == '6R12') {
        //pass!!
      }
      //4R01 -> 6R01 오봉 진역 예비화차 구간
      else if (rowData['dptStnCd'] == '4R01' && rowData['arvStnCd'] == '6R01') {
        //pass!!
      }
      //6R01 -> 4R01  진역 오봉 예비화차 구간
      else if (rowData['dptStnCd'] == '6R01' && rowData['arvStnCd'] == '4R01') {
        //pass!!
      }
      //6R12 -> 4R01 신항 오봉 예비화차 구간
      else if (rowData['dptStnCd'] == '6R12' && rowData['arvStnCd'] == '4R01') {
        //pass!!
      }
      //5R12 -> 5R14  군산역 -> 신광양항역 예비화차 구간
      else if (rowData['dptStnCd'] == '5R12' && rowData['arvStnCd'] == '5R14') {
        //pass!!
      }
      //5R14 -> 5R12 신광양항역 -> 군산역 예비화차 구간
      else if (rowData['dptStnCd'] == '5R14' && rowData['arvStnCd'] == '5R12') {
        //pass!!
      }
      //예비화차구간이 아니면 진행불가
      else {
        await $c.win.alert($p, '예비화차 진행 가능 구간이 아닙니다..');
        return;
      }
      ;
    }
    ;
  }
  ;
  let cntrNoDubleChk = scwin.f_cntrNoDubleChk();
  if (cntrNoDubleChk != 'T') {
    await $c.gus.cfAlertMsg($p, '[' + cntrNoDubleChk + '번째 줄]' + MSG_CM_ERR_032, ['컨테이너 번호']);
    ds_ShippingWeightContents.setRowPosition(cntrNoDubleChk);
    ds_ShippingWeightContents.setCellData(cntrNoDubleChk, 'cntrNo', '');
    ds_ShippingWeightContents.setCellData(cntrNoDubleChk, 'cntrTypCd', '');
    ds_ShippingWeightContents.setCellData(cntrNoDubleChk, 'cntrSizCd', '');
    ds_ShippingWeightContents.setCellData(cntrNoDubleChk, 'fullEmptyClsCd', '');
    ds_ShippingWeightContents.setCellData(cntrNoDubleChk, 'odrNo', '');
    ds_ShippingWeightContents.setCellData(cntrNoDubleChk, 'mchtNm', '');
    ds_ShippingWeightContents.setCellData(cntrNoDubleChk, 'sealNo', '');
    gr_ShippingWeightContents.setFocusedCell(cntrNoDubleChk, 'cntrNo');
  }
  ;
  if (scwin.f_HndlRateSateYn() == 'F') return;
  if (p_gubun == 'Auto') {
    let arvWrkPlCd = swcFocuesdData['arvStnCd'];
    sbm_preInfoSndYn.action = '/cm.zz.RetrieveComboCMD.do' + '?sysCd=StationEachRailroadResultsEBC' + '&queryId=RetrievePreInfoSndYnForJSP' + '&param1=' + arvWrkPlCd;
    await scwin.submitExcute(sbm_preInfoSndYn);
    for (let i = 0; i < swcRowCnt; i++) {
      let rowStatus = ds_ShippingWeightContents.getRowStatusValue(i);
      if ([1, 3].includes(rowStatus)) {
        ds_ShippingWeightContents.setCellData(i, 'chkAutoEdiYn', '1');
      }
      ;
    }
    ;
  }
  ;
  for (let i = 0; i < swcRowCnt; i++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(i);
    if (rowData['adjmTrgtYn'] == 1 && rowData['adminfrtcarYn'] != 2) {
      await $c.win.alert($p, '철송임미생성 기능은 화차구분이 저수요인 경우만 선택할 수 있습니다.');
      ds_ShippingWeightContents.setCellData(i, 'adjmTrgtYn', 0);
      return false;
    }
    ;
  }
  ;
  for (let i = 0; i < swcRowCnt; i++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(i);
    if (rowData['onewayYn'] == 1 && rowData['adminfrtcarYn'] != 3) {
      await $c.win.alert($p, '편도 기능은 화차구분이 전용인 경우만 선택할 수 있습니다.');
      ds_ShippingWeightContents.setCellData(i, 'onewayYn', 0);
      return false;
    }
    ;
  }
  ;

  //편도운임체크
  let teuchk = 0;
  for (let i = 0; i < swcRowCnt; i++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(i);
    if (rowData['onewayYn'] == 1) {
      switch (rowData['cntrSizCd']) {
        case '40':
        case '45':
          teuchk = teuchk + 2;
          break;
        case '20':
          teuchk++;
          break;
      }
      ;
    }
    ;
    if (rowData['dptStnCd'] == '4R01') {
      switch (rowData['arvStnCd']) {
        case '6R12':
          if (teuchk > 8) {
            await $c.win.alert($p, '오봉역 -> 부산신항역 구간의 경우 ' + '편도 상하편차가 8TEU를 넘을 수 없습니다.');
            return false;
          }
          break;
        case '6R01':
          if (teuchk > 3) {
            await $c.win.alert($p, '오봉역 -> 부산진역 구간의 경우 ' + '편도 상하편차가 3TEU를 넘을 수 없습니다.');
            return false;
          }
          break;
      }
      ;
    }
    ;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (retConfirm) await scwin.submitExcute(sbm_RegistShippingWeightContents);
};

/**
 * @method 
 * @name f_openNewPortTrf 
 * @description 저수요단가등록 화면 팝업 (2015.09.17)
 */
scwin.f_openNewPortTrf = function () {
  let focusedIdx = ds_RailroadWorkIndication.getRowPosition();
  let focusedData = ds_RailroadWorkIndication.getRowJSON(focusedIdx);
  if (ds_RailroadWorkIndication.getRowCount() == 0) {
    $c.win.alert($p, '조회 이후 진행해주세요');
    return;
  }
  ;
  const url = '/ui/ds/op/adjmbd/pchstrfmgnt/op_401_05_03b.xml';
  const options = {
    popupName: '저수요단가등록',
    width: '1100px',
    height: '600px'
  };
  const data = {
    ed_startTrainWorkPlaceCd: focusedData['dptStnCd'],
    // 출발작업장,
    ed_endTrainWorkPlaceCd: focusedData['arvStnCd'] // 도착작업장,
  };
  $c.data.setPopupTitle($p, "저수요단가등록");
  $c.win.openPopup($p, url, options, data);
  return true;
};

/**
 * @method 
 * @name f_addRows 
 * @description 행추가  처리
 */
scwin.f_addRows = function () {
  let addCnt = ed_addCnt.getValue();
  if ($c.gus.cfIsNull($p, ed_addCnt.getValue())) addCnt = 0;
  if (ds_RailroadWorkIndication.getRowCount() == 0) return;
  if (ed_addCnt.getValue() == 0) {
    scwin.f_inputGridAddrow();
  } else {
    for (let j = 0; j < addCnt; j++) {
      scwin.f_inputGridAddrow();
    }
    ;
  }
  ;
  ed_addCnt.setValue('');
};

/**
 * @method 
 * @name f_inputGridAddrow 
 * @description 행추가 실제 처리
 */
scwin.f_inputGridAddrow = async function () {
  await scwin.f_countGridTeu();
  // todo - tobe에선 직접 추가 하고 사용하므로 진입 가능성 없어보임
  // if (ds_RailroadWorkIndication.Text == '') {
  //     await $c.gus.cfAlertMsg(MSG_CM_WRN_002);
  //     ica_wrkDt.focus();
  //     return;
  // };

  // if (ds_ShippingWeightContents.Text == '') {
  //     await $c.gus.cfAlertMsg(MSG_CM_WRN_002);
  //     ica_wrkDt.focus();
  //     return;
  // };

  if (ica_wrkDt.getValue() == '') {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ['신청일자']);
    ica_wrkDt.focus();
    return;
  }
  ;
  let insertIdx = ds_ShippingWeightContents.insertRow(); // 데이타셋에 행추가.
  let insertData = {};
  insertData['adminfrtcarYn'] = '3';
  if (scwin.cntrNo != null && scwin.cntrNo != '') {
    insertData['cntrNo'] = scwin.cntrNo;
  }
  ;
  ds_ShippingWeightContents.setRowJSON(insertIdx, insertData, true);
  ds_ShippingWeightContents.setRowPosition(insertIdx);
  scwin.moveRowPosition(insertIdx, gr_ShippingWeightContents);

  // 현재 Row 위치값
  let cur_rowpos = ds_RailroadWorkIndication.getRowPosition();
  let cur_pos = ds_ShippingWeightContents.getRowPosition();
  if (cur_rowpos < 0) return;
  let sourceData = ds_RailroadWorkIndication.getRowJSON(cur_rowpos);
  let targetData = ds_ShippingWeightContents.getRowJSON(cur_pos);
  targetData['transWrkIndictNo'] = sourceData['wrkIndictNo'];
  targetData['wrkDt'] = sourceData['reqDt'];
  targetData['dptStnCd'] = sourceData['dptStnCd'];
  targetData['arvStnCd'] = sourceData['arvStnCd'];
  targetData['railroadEdiSndYn'] = sourceData['ediSndYn'] == 1 ? 1 : 0;
  ds_ShippingWeightContents.setRowJSON(cur_pos, targetData, true);
};

/**
 * @method 
 * @name moveRowPosition 
 * @description 포지션 이동 시 동작 제어
 */
scwin.moveRowPosition = function (rowIndex, targetGrid) {
  // 첫번째 visible 되어있는 컬럼 확인
  const totalCol = targetGrid.getTotalCol();
  let firstVisibleColIdx = 0;
  for (let i = 0; i < totalCol; i++) {
    if (targetGrid.getColumnVisible(i)) {
      firstVisibleColIdx = i;
      break;
    }
    ;
  }
  ;

  // 기존 포커스 된 컬럼 확인
  const focusedColIdx = targetGrid.getFocusedColumnIndex() ?? -1;
  const newColIdx = focusedColIdx < 0 ? firstVisibleColIdx : focusedColIdx;
  const newRowIdx = rowIndex < 0 ? 0 : rowIndex;

  // 실제 포커스
  targetGrid.setFocusedCell(newRowIdx, newColIdx);
};

/**
 * @method 
 * @name f_countGridTeu 
 * @description 적재등록된 사유,공사,BT의 건수 및 TEU구하기
 */
scwin.f_countGridTeu = async function () {
  let rsnTot = 0,
    rsnTeu = 0,
    admTot = 0,
    admTeu = 0,
    btTot = 0,
    btTeu = 0,
    su20 = 0,
    su40 = 0,
    v_curTeu = 0;
  v_curTeu = ed_teuCnt.getValue();
  let cur_Rows = ds_ShippingWeightContents.getRowCount();
  let cur_Pos = ds_ShippingWeightContents.getRowPosition();
  for (i = 0; i < cur_Rows; i++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(i);
    if (rowData['cntrNo'] == '') continue;
    switch (rowData['adminfrtcarYn']) {
      case '0':
      case '3':
        rsnTot++;
        if (rowData['cntrSizCd'] == 20) {
          rsnTeu++;
        } else {
          rsnTeu = rsnTeu + 2;
        }
        ;
        break;
      case '1':
        admTot++;
        if (rowData['cntrSizCd'] == 20) {
          admTeu++;
        } else {
          admTeu = admTeu + 2;
        }
        ;
        break;
      case '2':
        btTot++;
        if (rowData['cntrSizCd'] == 20) {
          su20++;
          btTeu++;
        } else {
          su40++;
          btTeu = btTeu + 2;
        }
        ;
        break;
      default:
        break;
    }
    ;
  }
  ;
  spn_rsnTot.setValue(rsnTot);
  spn_rsnTot.setStyle('text-decoration', 'none');
  spn_rsnTeu.setValue(rsnTeu);
  spn_rsnTeu.setStyle('text-decoration', 'none');
  spn_admTot.setValue(admTot);
  spn_admTot.setStyle('text-decoration', 'none');
  spn_admTeu.setValue(admTeu);
  spn_admTeu.setStyle('text-decoration', 'none');
  if (v_curTeu < btTeu) {
    spn_btTot.setValue(btTot);
    spn_btTot.setStyle('color', 'red');
    spn_btTot.setStyle('text-decoration', 'underline');
    spn_btTeu.setValue(btTeu);
    spn_btTeu.setStyle('color', 'red');
    spn_btTeu.setStyle('text-decoration', 'underline');
  } else {
    spn_btTot.setValue(btTot);
    spn_btTot.setStyle('color', 'blue');
    spn_btTot.setStyle('text-decoration', 'none');
    spn_btTeu.setValue(btTeu);
    spn_btTeu.setStyle('color', 'blue');
    spn_btTeu.setStyle('text-decoration', 'none');
  }
  ;
  spn_20Tot.setValue(su20);
  spn_20Tot.setStyle('text-decoration', 'none');
  spn_40Tot.setValue(su40);
  spn_40Tot.setStyle('text-decoration', 'none');
};

/**
 * @method 
 * @name f_retrieveCntrBasisInfo 
 * @description 적재등록된 사유,공사,BT의 건수 및 TEU구하기
 */
scwin.f_retrieveCntrBasisInfo = function (cntrNo) {
  if ($c.gus.cfIsNull($p, cntrNo)) return;
  const focusedIdx = ds_RailroadWorkIndication.getRowPosition();
  const focusedData = ds_RailroadWorkIndication.getRowJSON(focusedIdx);
  let jsonData = dma_condCntrBasisInfo.getJSON();
  jsonData['cntrNo'] = cntrNo;
  jsonData['odrNo'] = '';
  jsonData['transWrkIndictNo'] = focusedData['wrkIndictNo'];
  jsonData['wrkStDt'] = focusedData['reqDt'];
  jsonData['dptWrkPlCd'] = focusedData['dptStnCd'];
  jsonData['arvWrkPlCd'] = focusedData['arvStnCd'];
  dma_condCntrBasisInfo.setJSON(jsonData);
  scwin.submitExcute(sbm_retrieveCntrBasisInfo);
};

/**
 * @method 
 * @name f_addCntrBasisInfo 
 * @description 
 */
scwin.f_addCntrBasisInfo = function (row) {
  scwin.cntrNoNotCnt = 0;
  const cntrFirstData = ds_cntrBasisInfoResult.getRowJSON(0);
  if (scwin.f_cntrNoDubleRowUnitChk(cntrFirstData['cntrNo']) != 'T') {
    scwin.cntrNoNotCnt++;
    return;
  }
  ;
  let targetRowData = ds_ShippingWeightContents.getRowJSON(row);
  targetRowData['cntrTypShowCd'] = cntrFirstData['cntrSizCd'] + cntrFirstData['fullEmptyClsCd'];
  targetRowData['odrNo'] = cntrFirstData['odrNo'];
  targetRowData['cntrSizCd'] = cntrFirstData['cntrSizCd'];
  targetRowData['fullEmptyClsCd'] = cntrFirstData['fullEmptyClsCd'];
  targetRowData['mchtNm'] = cntrFirstData['bilgClntNm'];
  targetRowData['sealNo'] = cntrFirstData['sealNo'];
  targetRowData['cntrNo'] = cntrFirstData['cntrNo'];
  targetRowData['cntrSeq'] = cntrFirstData['cntrSeq'];
  targetRowData['odrWrkPathSeq'] = cntrFirstData['WrkPathSeq'];
  targetRowData['odrWrkStpSeq'] = cntrFirstData['WrkStpSeq'];
  targetRowData['internalSellLodeptCd'] = cntrFirstData['internalSellLodeptCd'];
  targetRowData['commCd'] = cntrFirstData['commCd'];
  targetRowData['cntrTypCd'] = cntrFirstData['cntrTypCd'];
  targetRowData['dptIntendDt'] = cntrFirstData['dptIntendDt'];
  targetRowData['dptIntendHh'] = cntrFirstData['dptIntendHh'];
  targetRowData['arvIntendDt'] = cntrFirstData['arvIntendDt'];
  targetRowData['arvIntendHh'] = cntrFirstData['arvIntendHh'];
  targetRowData['mmEndScYn'] = cntrFirstData['mmEndScYn'];
  targetRowData['arvDtm'] = '';
  targetRowData['arvDt'] = '';
  targetRowData['arvHh'] = '';
  if (cntrFirstData['dptWrkPlCd'] == '4R01' && cntrFirstData['arvWrkPlCd'] == '6R01') {
    const focusIdx = ds_RailroadWorkIndication.getRowPosition();
    targetRowData['dptDt'] = ds_RailroadWorkIndication.getCellData(focusIdx, 'reqDt');
    targetRowData['dptHh'] = '2300';
    let wrkDt = targetRowData['dptDt'];
    let dt = $c.date.addDate($p, wrkDt, 1);
    targetRowData['arvDtm'] = dt + '0700';
  } else {
    let serverDateTime = $c.date.getServerDateTime($p, 'yyyyMMddHHmmss');
    targetRowData['dptDt'] = serverDateTime.slice(0, 8);
    targetRowData['dptHh'] = serverDateTime.slice(-6);
  }
  ;
  targetRowData['dptHndlRateSateYn'] = cntrFirstData['dptHndlRateSateYn'];
  targetRowData['arvHndlRateSateYn'] = cntrFirstData['arvHndlRateSateYn'];
  targetRowData['arrvlportDtm'] = cntrFirstData['arrvlportDtm'];
  targetRowData['transNmCd'] = 'DB';
  targetRowData['dptStnLobranCd'] = cntrFirstData['dptStnLobranCd'];
  targetRowData['arvStnLobranCd'] = cntrFirstData['arvStnLobranCd'];
  targetRowData['railroadCutAmt'] = cntrFirstData['railroadCutAmt'];
  targetRowData['arvUpperWrkPlCd'] = cntrFirstData['arvUpperWrkPlCd'];
  targetRowData['railroadEdiSndYn'] = cntrFirstData['railroadEdiSndYn'];
  targetRowData['dptUpperWrkPlCd'] = cntrFirstData['dptUpperWrkPlCd'];
  targetRowData['dptHndlRateWrkStpSeq'] = cntrFirstData['dptHndlRateWrkStpSeq'];
  targetRowData['arvHndlRateWrkStpSeq'] = cntrFirstData['arvHndlRateWrkStpSeq'];
  targetRowData['lineCd'] = cntrFirstData['lineCd'];
  targetRowData['dptWrkPlCd'] = cntrFirstData['dptWrkPlCd'];
  targetRowData['arvWrkPlCd'] = cntrFirstData['arvWrkPlCd'];
  targetRowData['odrKndCd'] = cntrFirstData['odrKndCd'];
  targetRowData['selfClsCd'] = cntrFirstData['selfClsCd'];
  targetRowData['impExpClsCd'] = cntrFirstData['impExpClsCd'];
  targetRowData['destPortCd'] = cntrFirstData['destPortCd'];
  targetRowData['realMchtClntNo'] = cntrFirstData['realMchtClntNo'];
  targetRowData['blNo'] = cntrFirstData['blNo'];
  targetRowData['bookingNo'] = cntrFirstData['bookingNo'];
  switch (cntrFirstData['btRsnCheck']) {
    case 'BT':
      targetRowData['adminfrtcarYn'] = '2';
      break;
    case 'RSN':
      targetRowData['adminfrtcarYn'] = '0';
      break;
  }
  ;
  targetRowData['btRsnCheck'] = cntrFirstData['btRsnCheck'];
  targetRowData['cntrCnt'] = cntrFirstData['cntrSizCd'] > 20 ? 2 : 1;
  const rwiRowData = ds_RailroadWorkIndication.getRowJSON(row);
  targetRowData['railroadEdiSndYn'] = rwiRowData['ediSndYn'] == 1 ? 1 : 0;

  //월말할증여부 체크
  let dptDt = $c.num.parseInt($p, targetRowData['dptDt'].slice(6, 8)); //출발일자 

  //월말할증일이 NULL이 아니고, 월말할증일이 출발일자보다 작거나 같으면 월말할증여부 Y
  if (!$c.gus.cfIsNull($p, cntrFirstData['scAdptDay']) && cntrFirstData['scAdptDay'] <= dptDt) {
    targetRowData['mmEndScYn'] = 1;
  } else {
    targetRowData['mmEndScYn'] = 0;
  }
  ;
  ds_ShippingWeightContents.setRowJSON(row, targetRowData, true);
  scwin.f_setTransCd(row, targetRowData['transNmCd']);
  scwin.f_railNumSetting(row);
  ds_ShippingWeightContents.setCellData(row, 'frtcarNo', scwin.frtcarNo);
  scwin.cntrNo = '';
};

/**
 * @method 
 * @name f_addCntrBasisInfo 
 * @description 조회조기 필드 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  ica_wrkDt.setValue(scwin.dateStr);
  ica_wrkDtTo.setValue(scwin.dateStr);
  ed_begintrainWorkPlaceCd.focus();
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 getValue() Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let focusedIdx = 0;
  let pWhere = '';
  let cur_rowpos = ds_RailroadWorkIndication.getRowPosition();
  switch (disGubun) {
    case 1:
      // 출발역 역명 팝업
      udc_comPop.setSelectId('retrieveTrainWorkPlace');
      udc_comPop.cfCommonPopUp(rtnList => {
        $c.gus.cfSetReturnValue($p, rtnList, ed_begintrainWorkPlaceCd,
        // 도착지코드
        txt_begintrainWorkPlaceNm // 도착지명
        );
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, '역명조회,작업장코드,작업장명');
      break;
    case 2:
      // 도착역 역명 팝업
      udc_comPop.setSelectId('retrieveTrainWorkPlace');
      udc_comPop.cfCommonPopUp(rtnList => {
        $c.gus.cfSetReturnValue($p, rtnList, ed_endtrainWorkPlaceCd, txt_endtrainWorkPlaceNm);
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, '역명조회,작업장코드,작업장명');
      break;
    case 3:
      // 그리드내의 컨테이너 번호 팝업
      let rowData = ds_RailroadWorkIndication.getRowJSON(cur_rowpos);
      pWhere = rowData['wrkIndictNo'] + ',' + rowData['dptStnCd'] + ',' + rowData['arvStnCd'] + ',' + rowData['reqDt'];
      udc_comPop.setSelectId('retrieveConteinerInfo');
      udc_comPop.cfCommonPopUp(async rtnList => {
        focusedIdx = ds_ShippingWeightContents.getRowPosition();
        if (rtnList != null && rtnList[0][0] != "N/A") {
          scwin.f_ConteinerReturnValue(rtnList);
        } else {
          ds_ShippingWeightContents.undoRow(focusedIdx);
        }
        ;
        const cntrNoDubleChk = scwin.f_cntrNoDubleChk() ?? 0;
        if (cntrNoDubleChk != 'T') {
          await $c.gus.cfAlertMsg($p, '[' + cntrNoDubleChk + '번째 줄]' + MSG_CM_ERR_032, ['컨테이너 번호']);
          ds_ShippingWeightContents.setRowPosition(cntrNoDubleChk);
          ds_ShippingWeightContents.undoRow(focusedIdx);
          gr_ShippingWeightContents.setFocusedCell(focusedIdx, 'cntrNo');
        }
        ;
      }, pCode, pName, pClose, null, null, '60,90,60,70,90,100,110', null, pWhere, '900', null, null, null, null, pAllSearch, null);
      break;
    case 4:
      // 그리드내의 화차 번호 팝업
      udc_comPop.setSelectId('retrieveFrtcarNoInfo');
      udc_comPop.cfCommonPopUp(rtnList => {
        focusedIdx = ds_ShippingWeightContents.getRowPosition();
        let frtcarNoVal = '',
          frtcarCapaVal = '';
        if (rtnList != null && rtnList[0] != 'N/A') {
          frtcarNoVal = rtnList[0];
          frtcarCapaVal = rtnList[1];
        }
        ;
        ds_ShippingWeightContents.setCellData(focusedIdx, 'frtcarNo', frtcarNoVal);
        ds_ShippingWeightContents.setCellData(focusedIdx, 'frtcarCapa', frtcarCapaVal);
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
  }
  ;
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 작업경로 변경 팝업
 */
scwin.f_workPathMod = async function () {
  if (ds_ShippingWeightContents.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ['대상물량']); //'선택된 @이(가) 없습니다.';
    return;
  }
  ;
  let focusedIdx = ds_ShippingWeightContents.getRowPosition();
  let focusedData = ds_ShippingWeightContents.getRowJSON(focusedIdx);
  const data = [focusedData['odrNo'], focusedData['cntrSeq']];
  const options = {
    popupName: '작업경로상세정보변경(컨테이너)',
    width: '1430px',
    height: '740px'
  };
  const sliceUrl = DsConstants.URL_CONTAINER_WORK_PATH_DETAIL_CHANGE_POPUP.slice(0, -3);
  const url = '/ui' + sliceUrl + 'xml';
  const rtnVal = await $c.win.openPopup($p, url, options, data);

  //작업단계경로가 변경될 팝업후 무조건 재조회를 한다.(데이터 오류를 막기 위하여)
  if (rtnVal != 0) scwin.f_qeryList();
};

/**
 * @method 
 * @name f_ediSend 
 * @description  EDI 전송 버튼 처리 **
 */
scwin.f_ediSend = async function (allStsCd, curPosRow) {
  $c.gus.cfCopyDataSet($p, ds_ShippingWeightContents, ds_ShippingWeightContentsEdiSend, 'copyHeader=Yes' // 무조건 덮어씌움
  );
  const curPosData = ds_ShippingWeightContentsEdiSend.getRowJSON(curPosRow);
  if (allStsCd == 'ONE') {
    if (['1', '3'].includes(curPosData['sndClsCd']) && ['전송', '재전송'].includes(curPosData['sndClsMsg'])) {
      ds_ShippingWeightContentsEdiSend.setCellData(curPosRow, 'dptHndlRateSateYn', '');
    }
    ;
  }
  ;
  const retConfirm = await $c.win.confirm($p, 'EDI 전송을 시작하시겠습니까?');
  if (!retConfirm) return;
  await scwin.submitExcute(sbm_RegistShippingWeightContentsEdiSend);
};

/**
 * @method 
 * @name f_ediSend 
 * @description 철송물량전송 전송 버튼 처리 **
 */
scwin.f_dateChk = async function (row, colid) {
  const rowData = ds_ShippingWeightContents.getRowJSON(row);
  let dptDateStr = rowData['dptDt'];
  let arvDateStr = rowData['arvDt'];
  if (dptDateStr > arvDateStr) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ['일자']);
    ds_ShippingWeightContents.setCellData(row, 'arvDt', '');
    gr_ShippingWeightContents.setFocusedCell(row, 'arvDt');
    ;
    return;
  }
  ;
};

/**
 * @method 
 * @name f_cntrNoDubleChk 
 * @description 컨테이너번호 중복입력을 전체로 체크하는 함수
 * 리턴값-->  row값 = 실행중지, T = 진행가능
 */
scwin.f_cntrNoDubleChk = function () {
  let rowState = 0;
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  for (let i = 0; i < total_cnt; i++) {
    for (j = i + 1; j < total_cnt; j++) {
      let targetData = ds_ShippingWeightContents.getRowJSON(i);
      let compareData = ds_ShippingWeightContents.getRowJSON(j);
      rowState = ds_ShippingWeightContents.getRowStatusValue(i);

      // 해당 Row 가 삭제상태일 경우 무시함.
      if (rowState == 3) continue;
      if (targetData['cntrNo'] == compareData['cntrNo']) {
        return j;
      }
      ;
    }
    ;
  }
  ;
  return 'T';
};

/**
 * @method 
 * @name f_cntrNoDubleChk 
 * @description 컨테이너번호 중복입력을 Row단위로 하나씩 체크하는 함수
 * 리턴값-->  row값 = 실행중지, T = 진행가능
 */
scwin.f_cntrNoDubleRowUnitChk = function (cntrNo_value) {
  let rowState = 0;
  let total_cnt = ds_ShippingWeightContents.getRowCount();
  let cur_RowPos = ds_ShippingWeightContents.getRowPosition();
  for (let i = 0; i < total_cnt; i++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(i);
    if (cur_RowPos == i) continue;
    rowState = ds_ShippingWeightContents.getRowStatusValue(i);
    if (rowState == 3) continue; // 해당 Row 가 삭제상태일 경우 무시함.
    if (rowData['cntrNo'] == cntrNo_value) {
      return 'F';
    }
    ;
  }
  ;
  return 'T';
};

/**
 * @method 
 * @name f_RetrieveTransNmCd 
 * @description 운송명의 콤보 조회
 */
scwin.f_RetrieveTransNmCd = function (param1) {
  sbm_combo_transNmCd.action = '/cm.zz.RetrieveComboCMD.do?' + 'sysCd=StationEachRailroadResultsEBC' + '&queryId=retrieveCommUpperCdList' + '&param1=' + param1;
  scwin.submitExcute(sbm_combo_transNmCd);
};

/**
 * @method 
 * @name f_RetrieveTransNmCd 
 * @description 운송명의코드에 대한 상위코드 가져와서 거래처번호 등록
 */
scwin.f_setTransCd = function (row, transCd) {
  const total_cnt = ds_combo_transNmCd.getRowCount();
  for (let i = 0; i < total_cnt; i++) {
    let rowData = ds_combo_transNmCd.getRowJSON(i);
    if (rowData['code'] == transCd) {
      ds_ShippingWeightContents.setCellData(row, 'transNmClntCd', rowData['upperCd']);
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveTransNmCd 
 * @description 컨테이너번호에 대한 값 리턴한다.
 */
scwin.f_ConteinerReturnValue = function (rtnList) {
  scwin.cntrNoNotCnt = 0;
  let total_cnt = rtnList.length;
  for (let i = 0; i < total_cnt; i++) {
    if (scwin.f_cntrNoDubleRowUnitChk(rtnList[i][5]) != 'T') {
      scwin.cntrNoNotCnt++;
    }
    let row = ds_ShippingWeightContents.getRowPosition();
    let rowData = ds_ShippingWeightContents.getRowJSON(row);
    let railData = ds_RailroadWorkIndication.getRowJSON(row);
    let serverDateTime = $c.date.getServerDateTime($p, 'yyyyMMddHHmm');
    rowData['cntrTypShowCd'] = rtnList[i][1] + rtnList[i][2];
    rowData['odrNo'] = rtnList[i][0];
    rowData['cntrSizCd'] = rtnList[i][1];
    rowData['fullEmptyClsCd'] = rtnList[i][2];
    rowData['mchtNm'] = rtnList[i][3];
    rowData['sealNo'] = rtnList[i][4];
    rowData['cntrNo'] = rtnList[i][5];
    rowData['cntrSeq'] = rtnList[i][6];
    rowData['odrWrkPathSeq'] = rtnList[i][7];
    rowData['odrWrkStpSeq'] = rtnList[i][8];
    rowData['internalSellLodeptCd'] = rtnList[i][9];
    rowData['commCd'] = rtnList[i][10];
    rowData['cntrTypCd'] = rtnList[i][11];
    rowData['dptIntendDt'] = rtnList[i][12];
    rowData['dptIntendHh'] = rtnList[i][13];
    rowData['arvIntendDt'] = rtnList[i][14];
    rowData['arvIntendHh'] = rtnList[i][15];
    rowData['dptDt'] = serverDateTime.slice(0, 8);
    rowData['dptHh'] = serverDateTime.slice(-4);
    rowData['arvDtm'] = '';
    rowData['arvDt'] = '';
    rowData['arvHh'] = '';
    rowData['dptHndlRateSateYn'] = rtnList[i][16];
    rowData['arvHndlRateSateYn'] = rtnList[i][17];
    rowData['arrvlportDtm'] = rtnList[i][18];

    //7R06 -> 2R07 일때 운송명의 세팅(신현영) 2017.09.13 서동원
    const transNmCd = rtnList[i][28] == '7R06' && rtnList[i][29] == '2R07' ? 'NH' : 'DB';
    rowData['transNmCd'] = transNmCd;
    rowData['dptStnLobranCd'] = rtnList[i][19];
    rowData['arvStnLobranCd'] = rtnList[i][20];
    rowData['railroadCutAmt'] = rtnList[i][21];
    rowData['arvUpperWrkPlCd'] = rtnList[i][22];
    rowData['railroadEdiSndYn'] = rtnList[i][23];
    rowData['dptUpperWrkPlCd'] = rtnList[i][24];
    rowData['dptHndlRateWrkStpSeq'] = rtnList[i][25];
    rowData['arvHndlRateWrkStpSeq'] = rtnList[i][26];
    rowData['lineCd'] = rtnList[i][27];
    rowData['dptWrkPlCd'] = rtnList[i][28];
    rowData['arvWrkPlCd'] = rtnList[i][29];
    rowData['odrKndCd'] = rtnList[i][30];
    rowData['selfClsCd'] = rtnList[i][31];
    rowData['impExpClsCd'] = rtnList[i][32];
    rowData['destPortCd'] = rtnList[i][33];
    rowData['realMchtClntNo'] = rtnList[i][34];
    rowData['blNo'] = rtnList[i][35];
    rowData['bookingNo'] = rtnList[i][36];

    //id='adminfrtcarYn' name='청화차;여부' 	 Data='0:사유,1:공사,2:BT'
    let adminfrtcarYn = '';
    switch (rtnList[i][37]) {
      case 'BT':
        adminfrtcarYn = '2';
        break;
      case 'RSN':
        adminfrtcarYn = '0';
        break;
      default:
        if ($c.gus.cfIsNull($p, rtnList[i][37])) adminfrtcarYn = '3';
        break;
    }
    ;
    rowData['adminfrtcarYn'] = adminfrtcarYn;
    rowData['btRsnCheck'] = rtnList[i][37];
    rowData['cntrCnt'] = rtnList[i][1] > 20 ? 2 : 1;
    scwin.f_setTransCd(row, rowData['transNmCd']);
    rowData['transNmClntCd'] = ds_ShippingWeightContents.getCellData(row, 'transNmClntCd');
    rowData['railroadEdiSndYn'] = railData['ediSndYn'] == 1 ? 1 : 0;

    //2014.04.24 열차번호, 출발일시, 도착일시 수정
    let toDay = railData['reqDt'];
    let nextDay = $c.date.addDate($p, toDay, 1);

    // 저수요
    if (rtnList[i][37] == 'BT' || rowData['adminfrtcarYn'] == 2) {
      if (rtnList[i][28] == '6R12' && rtnList[i][29] == '4R01') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1005';
        rowData['arvDtm'] = nextDay + '0700';
        rowData['trnNo'] = '3804';
      } else if (rtnList[i][28] == '4R01' && rtnList[i][29] == '6R12') {
        //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
        if (rowData['transNmCd'] == 'DB') {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '2300';
          rowData['arvDtm'] = nextDay + '1505';
          rowData['trnNo'] = '3807';
        }
        //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
        else {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '2300';
          rowData['arvDtm'] = nextDay + '0700';
        }
        ;
      } else if (rtnList[i][28] == '6R01' && ['4R01', '4R02'].includes(rtnList[i][29])) {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1247';
        rowData['arvDtm'] = toDay + '1855';
        rowData['trnNo'] = '3024';
      } else if (rtnList[i][28] == '5R14' && rtnList[i][29] == '5R13') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1400';
        rowData['arvDtm'] = toDay + '1655';
        rowData['trnNo'] = '3074';
      } else if (rtnList[i][28] == '5R13' && rtnList[i][29] == '5R14') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '0931';
        rowData['arvDtm'] = toDay + '1244';
        rowData['trnNo'] = '3073';
      } else if (rtnList[i][28] == '6R01' && rtnList[i][29] == '3R13') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '1114';
        rowData['trnNo'] = '3054';
      } else if (rtnList[i][28] == '3R13' && rtnList[i][29] == '6R01') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1415';
        rowData['arvDtm'] = toDay + '1945';
        rowData['trnNo'] = '3053';
      } else {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '0700';
        rowData['trnNo'] = '';
      }
      rowData['pchsAdptDt'] = rtnList[i][39];
    }

    // 전용
    else if (rowData['adminfrtcarYn'] == 3) {
      if (rtnList[i][28] == '6R01' && rtnList[i][29] == '4R01') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2120';
        rowData['arvDtm'] = nextDay + '0341';
        rowData['trnNo'] = '3028';
      } else if (rtnList[i][28] == '4R01' && rtnList[i][29] == '6R01') {
        //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
        if (ds_ShippingWeightContents.getCellData(row, 'transNmCd') == 'DB') {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '2145';
          rowData['arvDtm'] = nextDay + '0243';
          rowData['trnNo'] = '3027';
        }

        //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
        else {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '2300';
          rowData['arvDtm'] = nextDay + '0700';
        }
      } else if (rtnList[i][28] == '6R12' && rtnList[i][29] == '4R01') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '0400';
        rowData['arvDtm'] = toDay + '1002';
        rowData['trnNo'] = '3002';
      } else if (rtnList[i][28] == '4R01' && rtnList[i][29] == '6R12') {
        //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
        if (ds_ShippingWeightContents.getCellData(row, 'transNmCd') == 'DB') {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '1830';
          rowData['arvDtm'] = toDay + '2328';
          rowData['trnNo'] = '3007';
        }

        //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
        else {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '2300';
          rowData['arvDtm'] = nextDay + '0700';
        }
      } else if (rtnList[i][28] == '5R14' && rtnList[i][29] == '4R01') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1600';
        rowData['arvDtm'] = nextDay + '0700';
        rowData['trnNo'] = '3910';
      } else if (rtnList[i][28] == '4R01' && rtnList[i][29] == '5R14') {
        //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
        if (ds_ShippingWeightContents.getCellData(row, 'transNmCd') == 'DB') {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '1251';
          rowData['arvDtm'] = toDay + '1945';
          rowData['trnNo'] = '3909';
        }

        //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
        else {
          rowData['dptDt'] = toDay;
          rowData['dptHh'] = '2300';
          rowData['arvDtm'] = nextDay + '0700';
        }
      } else if (rtnList[i][28] == '5R14' && rtnList[i][29] == '5R13') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1400';
        rowData['arvDtm'] = toDay + '1655';
        rowData['trnNo'] = '3074';
      } else if (rtnList[i][28] == '5R13' && rtnList[i][29] == '5R14') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '0931';
        rowData['arvDtm'] = toDay + '1244';
        rowData['trnNo'] = '3073';
      } else {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '0700';
        rowData['trnNo'] = '';
      }
    }

    // 그 외
    else {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '2300';
      rowData['arvDtm'] = nextDay + '0700';
      rowData['trnNo'] = '';
    }
    scwin.cntrNo = '';
    ds_ShippingWeightContents.setRowJSON(row, rowData, true);
    if (i != total_cnt - 1) ds_ShippingWeightContents.insertRow();
  }
  ;
};

/**
 * @method 
 * @name f_HndlRateSateYn 
 * @description 저장시에 조작/재조작/구내/정보 출발역 ,도착역을 조사 한다.
 */
scwin.f_HndlRateSateYn = async function () {
  const rowCnt = ds_ShippingWeightContents.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    let rowData = ds_ShippingWeightContents.getRowJSON(i);
    let countIdx = i + 1;
    if (rowData['dptHndlRateSateYn'].length < 4) {
      await $c.gus.cfAlertMsg($p, '[' + countIdx + '번째 줄]' + MSG_CM_ERR_005, ['출발역', '4']);
      ds_ShippingWeightContents.setCellData(i, 'dptHndlRateSateYn', '');
      gr_ShippingWeightContents.setFocusedCell(i, 'dptHndlRateSateYn');
      return 'F';
    }
    ;
    if (rowData['arvHndlRateSateYn'].length < 4) {
      await $c.gus.cfAlertMsg($p, '[' + countIdx + '번째 줄]' + MSG_CM_ERR_005, ['도착역', '4']);
      ds_ShippingWeightContents.setCellData(i, 'arvHndlRateSateYn', '');
      gr_ShippingWeightContents.setFocusedCell(i, 'arvHndlRateSateYn');
      return 'F';
    }
    ;
    for (let j = 0; j < rowData['dptHndlRateSateYn'].length; j++) {
      if (!['Y', 'N'].includes(rowData['dptHndlRateSateYn'].slice(j, j + 1))) {
        await $c.gus.cfAlertMsg($p, 'Y, N 만 입력되어야 합니다.');
        ds_ShippingWeightContents.setCellData(i, 'dptHndlRateSateYn', '');
        gr_ShippingWeightContents.setFocusedCell(i, 'dptHndlRateSateYn');
        return 'F';
      }
      ;
    }
    ;
    for (let j = 0; j < rowData['arvHndlRateSateYn'].length; j++) {
      if (!['Y', 'N'].includes(rowData['arvHndlRateSateYn'].slice(j, j + 1))) {
        // Y,N만 입력되어야 합니다.
        await $c.gus.cfAlertMsg($p, 'Y,N 만 입력되어야 합니다.');
        ds_ShippingWeightContents.setCellData(i, 'arvHndlRateSateYn', '');
        gr_ShippingWeightContents.setFocusedCell(i, 'arvHndlRateSateYn');
        return 'F';
      }
      ;
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_RetrieveTransNmCd 
 * @description 작업지시번호 상세정보 조회
 */
scwin.f_RetrieveRailroadWorkIndicationDetail = function () {
  dma_QueryCondition.setEmptyValue();

  // 운송작업지시번호
  const focusedIdx = ds_RailroadWorkIndication.getRowPosition();
  const keyValue = ds_RailroadWorkIndication.getCellData(focusedIdx, 'wrkIndictNo');
  dma_QueryCondition.set('wrkIndictNo', keyValue);
  scwin.submitExcute(sbm_RetrieveRailroadWorkIndicationDetail); // 작업지시번호 상세정보 조회
};

/**
 * @method 
 * @name f_RetrieveTransNmCd 
 * @description onClick시 BT단가 조회
 */
scwin.f_RetrieveRailroadFare = async function () {
  dma_QueryCondition.setEmptyValue();
  const focusedIdx = ds_RailroadWorkIndication.getRowPosition();
  const focusedData = ds_RailroadWorkIndication.getRowJSON(focusedIdx);
  dma_QueryCondition.set('wrkDt', focusedData['reqDt']); // 작업일자
  dma_QueryCondition.set('dptStn', focusedData['dptStnCd']); // 출발작업장
  dma_QueryCondition.set('arvStn', focusedData['arvStnCd']); // 도착작업장

  await scwin.submitExcute(sbm_RetrieveRailroadFare); // BT단가 조회
};

/**
 * @method 
 * @name f_RetrieveTransNmCd 
 * @description 상태구분  콤보조회  **
 */
scwin.f_RetrieveStateKind = function () {
  let param1 = 'SD136';
  sbm_combo_stateKind.action = '/cm.zz.RetrieveComboCMD.do?' + 'sysCd=CooperationCompanyEquipmentEBC' + '&queryId=retrivecComboOneGrp' + '&param1=' + param1;
  scwin.submitExcute(sbm_combo_stateKind);
};

/**
 * @method 
 * @name f_RetrieveTransNmCd 
 * @description 행삭제 처리시
 */
scwin.f_DeleteAct = async function () {
  const focusedIdx = ds_ShippingWeightContents.getRowPosition();
  const focusedData = ds_ShippingWeightContents.getRowJSON(focusedIdx);
  if (focusedData['delAllowFlag'] == 1 && focusedData['ediSndYn'] == 1) {
    await $c.win.alert($p, '취소전송완료후에 삭제하십시오.');
    scwin.f_countGridTeu();
  } else {
    $c.data.deleteRow($p, gr_ShippingWeightContents);
    scwin.moveRowPosition(focusedIdx - 1, gr_ShippingWeightContents);
    scwin.f_countGridTeu();
  }
  ;
};

/**
 * @method 
 * @name f_cancelAct 
 * @description 행취소 처리시
 */
scwin.f_cancelAct = function () {
  $c.data.undoRow($p, ds_ShippingWeightContents);
  scwin.moveRowPosition(0, gr_ShippingWeightContents);
  scwin.f_countGridTeu();
};

/**
 * @method 
 * @name f_railroadResultsExcel 
 * @description 엑셀파일로 저장
 */
scwin.f_railroadResultsExcel = function () {
  const excelName = '적재정보';
  const options = {
    sheetName: excelName,
    fileName: excelName + '.xlsx'
  };
  $c.data.downloadGridViewExcel($p, gr_ShippingWeightContents, options);
};

/**
 * @method 
 * @name f_openPopUpHdlCharge 
 * @description 철송조작료 팝업 호출
 */
scwin.f_openPopUpHdlCharge = function () {
  const options = {
    popupName: '철송조작료수정팝업',
    width: '1800px',
    height: '620px'
  };
  const url = '/ui/ds/op/wrkplan/railroadwrkplan/op_205_01_02p.xml';
  // const url = '/ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_02p.xml';

  $c.win.openPopup($p, url, options);
};

/**
 * @method 
 * @name f_crryInOutEDICheck 
 * @description 반출입예정정보EDI등록
 */
scwin.f_crryInOutEDICheck = async function () {
  const focusedIdx = ds_ShippingWeightContents.getRowPosition();
  const focusedData = ds_ShippingWeightContents.getRowJSON(focusedIdx);
  let arvWrkPlCd = focusedData['arvStnCd'];
  sbm_preInfoSndYn.action = '/cm.zz.RetrieveComboCMD.do?' + 'sysCd=StationEachRailroadResultsEBC' + '&queryId=RetrievePreInfoSndYnForJSP' + '&param1=' + arvWrkPlCd;
  await scwin.submitExcute(sbm_preInfoSndYn);
  let arvWrkPlCdYn = ds_preInfoSndYn.getCellData(0, 'code');
  let dptWrkPlCd = focusedData['dptWrkPlCd'];
  sbm_preInfoSndYn.action = '/cm.zz.RetrieveComboCMD.do?' + 'sysCd=StationEachRailroadResultsEBC' + '&queryId=RetrievePreInfoSndYnForJSP' + '&param1=' + dptWrkPlCd;
  await scwin.submitExcute(sbm_preInfoSndYn);
  let dptWrkPlCdYn = ds_preInfoSndYn.getCellData(0, 'code');
  if (arvWrkPlCdYn != 1 && dptWrkPlCdYn != 1) {
    $c.win.alert($p, '출발역:' + dptWrkPlCd + ' ~ 도착역:' + arvWrkPlCd + '은 COPINO 전송 대상역이 아닙니다.');
    return false;
  }
  ;
  const retConfirm = await $c.win.confirm($p, '컨테이너번호' + focusedData['cntrNo'] + '를 COPINO전송 하겠습니까?');
  if (!retConfirm) return;
  scwin.f_crryInOutEDI();
};

/**
 * @method 
 * @name f_crryInOutEDI 
 * @description 반출입예정정보EDI등록
 */
scwin.f_crryInOutEDI = function () {
  let arrParam = [];
  const rowM = ds_RailroadWorkIndication.getRowPosition();
  const rowS = ds_ShippingWeightContents.getRowPosition();
  const rwiRowData = ds_RailroadWorkIndication.getRowJSON(rowM);
  const swcRowData = ds_ShippingWeightContents.getRowJSON(rowS);
  const dptWrkPlCd = swcRowData['dptStnCd'];
  const arvWrkPlCd = swcRowData['arvStnCd'];
  const dptWrkPlNm = rwiRowData['dptStn'];
  const arvWrkPlNm = rwiRowData['arvStn'];

  //조회구분 ('' : 운송작업지시, '1' : 반출입)
  arrParam.push(['1', swcRowData['transWrkIndictNo'], swcRowData['odrNo'], swcRowData['cntrSeq'], swcRowData['odrWrkPathSeq'], swcRowData['odrWrkStpSeq'], swcRowData['frtcarNo'], swcRowData['frtcarNo'], swcRowData['frtcarNo'], swcRowData['dptDt'], swcRowData['arvDt'], swcRowData['cntrNo'], dptWrkPlCd, arvWrkPlCd, dptWrkPlNm, arvWrkPlNm, 'CO', 'CO']);
  arrParam.push([swcRowData['transWrkIndictNo'], swcRowData['frtcarNo'], swcRowData['frtcarNo'], swcRowData['frtcarNo'], swcRowData['frtcarNo'], '', '', swcRowData['dptDt'], swcRowData['dptHh'], swcRowData['frtcarNo'], '']);

  // // todo - 팝업 파라미터 받는 방법에 맞춰서 변경
  // let arrParam = [
  //     [
  //         '1',
  //         swcRowData['transWrkIndictNo'],
  //         swcRowData['odrNo'],
  //         swcRowData['cntrSeq'],
  //         swcRowData['odrWrkPathSeq'],
  //         swcRowData['odrWrkStpSeq'],
  //         swcRowData['frtcarNo'],
  //         swcRowData['frtcarNo'],
  //         swcRowData['frtcarNo'],
  //         swcRowData['dptDt'],
  //         swcRowData['arvDt'],
  //         swcRowData['cntrNo'],
  //         dptWrkPlCd,
  //         arvWrkPlCd,
  //         dptWrkPlNm,
  //         arvWrkPlNm,
  //         'CO',
  //         'CO'
  //     ], [
  //         swcRowData['transWrkIndictNo'],
  //         swcRowData['frtcarNo'],
  //         swcRowData['frtcarNo'],
  //         swcRowData['frtcarNo'],
  //         swcRowData['frtcarNo'],
  //         '',
  //         '',
  //         swcRowData['dptDt'],
  //         swcRowData['dptHh'],
  //         swcRowData['frtcarNo'],
  //         ''
  //     ]
  // ];

  const data = {
    crryoutEdiType: 'CO',
    crryinEdiType: 'CO',
    arrParam
  };
  const options = {
    popupName: '반출입정보EDI등록',
    width: '1100px',
    height: '850px'
  };
  const url = '/ui/ds/op/wrkplan/transwrkplan/op_202_02_21p.xml';
  $c.win.openPopup($p, url, options, data);
  return true;
};

/**
 * @method 
 * @name f_ediSend2 
 * @description 
 */
scwin.f_ediSend2 = function (Row) {
  ds_RailroadWorkIndication.setCellData(Row, 'sndSts', 2);
  scwin.submitExcute(sbm_RegistShippingWeightBatchTransmissionEdi);
};

/**
 * @method 
 * @name f_railNumSetting 
 * @description 
 */
scwin.f_railNumSetting = function (row) {
  //2014.04.24 열차번호, 출발일시, 도착일시 수정
  const focusedIdx = ds_RailroadWorkIndication.getRowPosition();
  const toDay = ds_RailroadWorkIndication.getCellData(focusedIdx, 'reqDt');
  const nextDay = $c.date.addDate($p, toDay, 1);
  const firstData = ds_cntrBasisInfoResult.getRowJSON(0);
  let rowData = ds_ShippingWeightContents.getRowJSON(row);

  // 저수요
  if (firstData['btRsnCheck'] == 'BT' || rowData['adminfrtcarYn'] == 2) {
    if (firstData['dptWrkPlCd'] == '6R12' && firstData['arvWrkPlCd'] == '4R01') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '1005';
      rowData['arvDtm'] = nextDay + '0700';
      rowData['trnNo'] = '3804';
    } else if (firstData['dptWrkPlCd'] == '4R01' && firstData['arvWrkPlCd'] == '6R12') {
      //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
      if (rowData['transNmCd'] == 'DB') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '1505';
        rowData['trnNo'] = '3807';
      } else {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '0700';
      }
      ;
    } else if (firstData['dptWrkPlCd'] == '6R01' && ['4R01', '4R02'].includes(firstData['arvWrkPlCd'])) {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '1247';
      rowData['arvDtm'] = toDay + '1855';
      rowData['trnNo'] = '3024';
    } else if (firstData['dptWrkPlCd'] == '5R14' && firstData['arvWrkPlCd'] == '5R13') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '1400';
      rowData['arvDtm'] = toDay + '1655';
      rowData['trnNo'] = '3074';
    } else if (firstData['dptWrkPlCd'] == '5R13' && firstData['arvWrkPlCd'] == '5R14') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '0931';
      rowData['arvDtm'] = toDay + '1244';
      rowData['trnNo'] = '3073';
    } else if (firstData['dptWrkPlCd'] == '6R01' && firstData['arvWrkPlCd'] == '3R13') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '2300';
      rowData['arvDtm'] = nextDay + '1114';
      rowData['trnNo'] = '3054';
    } else if (firstData['dptWrkPlCd'] == '3R13' && firstData['arvWrkPlCd'] == '6R01') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '1415';
      rowData['arvDtm'] = toDay + '1945';
      rowData['trnNo'] = '3053';
    } else {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '2300';
      rowData['arvDtm'] = nextDay + '0700';
      if ($c.gus.cfIsNull($p, rowData['trnNo'])) rowData['trnNo'] = '';
    }
    rowData['pchsAdptDt'] = firstData['pchsAdptDt'];
  }

  // 전용
  else if (rowData['adminfrtcarYn'] == 3) {
    if (firstData['dptWrkPlCd'] == '6R01' && firstData['arvWrkPlCd'] == '4R01') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '2120';
      rowData['arvDtm'] = nextDay + '0341';
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      if (rowData['transNmCd'] == 'DB') rowData['trnNo'] = '3028';
    } else if (firstData['dptWrkPlCd'] == '4R01' && firstData['arvWrkPlCd'] == '6R01') {
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      if (rowData['transNmCd'] == 'DB') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2145';
        rowData['arvDtm'] = nextDay + '0243';
        rowData['trnNo'] = '3027';
      }
      //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
      else {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '0700';
      }
    } else if (firstData['dptWrkPlCd'] == '6R12' && firstData['arvWrkPlCd'] == '4R01') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '0400';
      rowData['arvDtm'] = toDay + '1002';
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      // 		  		if(ds_ShippingWeightContents.getCellData(row,'transNmCd')=='DB') ds_ShippingWeightContents.setCellData(row,'trnNo', '3004');
      if (rowData['transNmCd'] == 'DB') rowData['trnNo'] = '3002';
    } else if (firstData['dptWrkPlCd'] == '4R01' && firstData['arvWrkPlCd'] == '6R12') {
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      if (rowData['transNmCd'] == 'DB') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1830';
        rowData['arvDtm'] = toDay + '2328';
        rowData['trnNo'] = '3007';
        // 		  			ds_ShippingWeightContents.setCellData(row,'trnNo', '3017');
      }
      //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
      else {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '0700';
      }
    } else if (firstData['dptWrkPlCd'] == '5R14' && firstData['arvWrkPlCd'] == '4R01') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '1600';
      rowData['arvDtm'] = nextDay + '0700';
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      if (rowData['transNmCd'] == 'DB') rowData['trnNo'] = '3910';
    } else if (firstData['dptWrkPlCd'] == '4R01' && firstData['arvWrkPlCd'] == '5R14') {
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      if (rowData['transNmCd'] == 'DB') {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '1251';
        rowData['arvDtm'] = toDay + '1945';
        rowData['trnNo'] = '3909';
      }
      //타사명의이고 출발이 4R01일때 출발시간 당일23시, 도착시간 익일07시
      else {
        rowData['dptDt'] = toDay;
        rowData['dptHh'] = '2300';
        rowData['arvDtm'] = nextDay + '0700';
      }
    } else if (firstData['dptWrkPlCd'] == '5R14' && firstData['arvWrkPlCd'] == '5R13') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '1410';
      rowData['arvDtm'] = toDay + '1659';
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      if (rowData['transNmCd'] == 'DB') rowData['trnNo'] = '3080';
    } else if (firstData['dptWrkPlCd'] == '5R13' && firstData['arvWrkPlCd'] == '5R14') {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '1026';
      rowData['arvDtm'] = toDay + '1610';
      //동부명의일때만 열차번호 세팅하도록 변경. 2015.10.02 hurrah
      if (rowData['transNmCd'] == 'DB') rowData['trnNo'] = '3087';
    } else {
      rowData['dptDt'] = toDay;
      rowData['dptHh'] = '2300';
      rowData['arvDtm'] = nextDay + '0700';
      if ($c.gus.cfIsNull($p, rowData['trnNo'])) rowData['trnNo'] = '';
    }
  }
  // 그 외
  else {
    rowData['dptDt'] = toDay;
    rowData['dptHh'] = '2300';
    rowData['arvDtm'] = nextDay + '0700';
    if ($c.gus.cfIsNull($p, rowData['trnNo'])) rowData['trnNo'] = '';
  }
  ;
  ds_ShippingWeightContents.setRowJSON(row, rowData, true);
};

/**
 * @event 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitPre 
 * @description submit 요청전
 */
scwin.submitPre = function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_SaveRailroadFare:
      ds_RailroadFare.setJSON(0, dma_RailroadFare.getJSON(), false);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  let submitObj = $p.getComponentById(e.id);
  let gridDlt, rowCnt;
  switch (submitObj) {
    // 작업지시정보 조회 TR
    case sbm_RetrieveRailroadWorkIndication:
      gridDlt = ds_RailroadWorkIndication;
      rowCnt = gridDlt.getRowCount();
      for (let i = 0; i < rowCnt; i++) {
        let rowData = gridDlt.getRowJSON(i);
        let calcVal;
        calcVal = rowData['prvtAppTeu'] + rowData['xclsAppTeu'];
        gridDlt.setCellData(i, 'calcPrvtAppTeu', calcVal);
        calcVal = rowData['teu'] + rowData['xclsTeu'];
        gridDlt.setCellData(i, 'calcTeu', calcVal);
      }
      ;
      gr_RailroadWorkIndication.setFocusedCell(0, 'dptStn');
      scwin.ds_RailroadWorkIndication_OnLoadCompleted();
      break;

    // 작업지시정보 상세 조회 TR
    case sbm_RetrieveRailroadWorkIndicationDetail:
      ds_RailroadWorkIndicationDetail.setRowPosition(0);
      totalRowsDetail.setValue(ds_RailroadWorkIndicationDetail.getRowCount());
      scwin.ds_RailroadWorkIndicationDetail_OnLoadCompleted();
      break;

    // BT단가 조회 TR
    case sbm_RetrieveRailroadFare:
      dma_RailroadFare.setJSON(ds_RailroadFare.getRowJSON(0));
      ds_RailroadFare.setRowPosition(0);
      break;

    // BT단가구하기 TR
    case sbm_SaveRailroadFare:
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_qeryList();
      break;

    // 적재정보 조회 TR
    case sbm_RetrieveShippingWeightContents:
      gr_ShippingWeightContents.setFocusedCell(0, 'cntrNo');
      scwin.ds_ShippingWeightContents_OnLoadCompleted();
      break;

    // 저장 TR1
    case sbm_RegistShippingWeightContents:
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_qeryList();
      break;

    // 저장 TR2
    case sbm_RegistShippingWeightBatchTransmissionEdi:
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_qeryList();
      break;

    // EDI 전송 저장 TR1
    case sbm_RegistShippingWeightContentsEdiSend:
      await $c.gus.cfAlertMsg($p, 'EDI 취소전송을 성공적으로 처리하였습니다. ');
      scwin.f_qeryList();
      break;

    // 컨테이너번호에 해당하는 컨테이너 기본정보 조회 Transation
    case sbm_retrieveCntrBasisInfo:
      ds_cntrBasisInfoResult.setRowPosition(0);
      scwin.ds_cntrBasisInfoResult_OnLoadCompleted();
      const focusedIdx = ds_RailroadWorkIndication.getRowPosition();
      const focusedData = ds_RailroadWorkIndication.getRowJSON(focusedIdx);
      const railroadEdiSndYn = focusedData['ediSndYn'] == 1 ? 1 : 0;
      ds_ShippingWeightContents.setCellData(ds_ShippingWeightContents.getRowPosition(), 'railroadEdiSndYn', railroadEdiSndYn);
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name ds_RailroadWorkIndication_OnLoadCompleted 
 * @description 조회 DataSet
 * @asis for="ds_RailroadWorkIndication" event="OnLoadCompleted(rowCnt)"
 */
scwin.ds_RailroadWorkIndication_OnLoadCompleted = async function () {
  const rowCnt = ds_RailroadWorkIndication.getRowCount();
  if (rowCnt == 0) {
    await scwin.submitExcute(sbm_RetrieveRailroadFare);
    await $c.gus.cfAlertMsg($p, '[작업지시정보] ' + MSG_CM_ERR_003);
  }
  ;
  if (rowCnt > 0) {
    await scwin.f_RetrieveRailroadFare();
    scwin.f_RetrieveRailroadWorkIndicationDetail();
  }
  ;
  totalRows.setValue(rowCnt);
  $c.gus.cfEnable($p, [btn_bSave2, btn_bSave, btn_bUpdate, btn_bUpdate2]);
};

/**
 * @method 
 * @name ds_RailroadWorkIndication_OnLoadCompleted 
 * @description 
 * @asis for="ds_ShippingWeightContents" event="OnLoadCompleted(rowCnt)"
 */
scwin.ds_ShippingWeightContents_OnLoadCompleted = function () {
  rowCnt = ds_ShippingWeightContents.getRowCount();
  if (rowCnt == 0) {
    scwin.f_inputGridAddrow();
    if ([null, ''].includes(scwin.cntrNo)) {
      ds_ShippingWeightContents.setCellData(0, 'cntrNo', scwin.cntrNo);

      //PCY BT에서 넘어온 경우...
      if (scwin.btCls == '1') {
        scwin.f_retrieveCntrBasisInfo(scwin.cntrNo);
      }
      ;
    }
    ;
  } else if (rowCnt > 0) {
    scwin.f_countGridTeu();
    if (scwin.btCls == '1') {
      scwin.f_inputGridAddrow();
      scwin.f_retrieveCntrBasisInfo(scwin.cntrNo);
      scwin.btCls = '';
    }
    ;

    // 오봉역 <--> 부산진역, 신선대역(PECT)구간의 경우 신항여부를 Enable
    const focusedIdx = ds_RailroadWorkIndication.getRowPosition();
    const focusedData = ds_RailroadWorkIndication.getRowJSON(focusedIdx);
    const readOnly = ['4R01', '6R01', '6R04'].includes(focusedData['dptStnCd']) && ['4R01', '6R01', '6R04'].includes(focusedData['arvStnCd']);
    gr_ShippingWeightContents.setColumnReadOnly('pncportYn', readOnly);
  }
  ;
  SubtotalRows.setValue(rowCnt);
  $c.gus.cfEnable($p, [btn_bSave2, btn_bSave, btn_bUpdate, btn_bUpdate2]);
};

/**
 * @method 
 * @name ds_RailroadWorkIndication_OnLoadCompleted 
 * @description 
 * @asis for="ds_RailroadWorkIndicationDetail" event="OnLoadCompleted(rowCnt)"
 */
scwin.ds_RailroadWorkIndicationDetail_OnLoadCompleted = function () {
  dma_QueryCondition.setEmptyValue();
  const targetDlt = ds_RailroadWorkIndication;
  const wrkIndictNo = targetDlt.getCellData(targetDlt.getRowPosition(), 'wrkIndictNo');
  dma_QueryCondition.set('wrkIndictNo', wrkIndictNo); // 운송작업지시번호

  // 적재내역정보조회
  scwin.submitExcute(sbm_RetrieveShippingWeightContents);
};

/**
 * @method 
 * @name ds_RailroadWorkIndication_OnLoadCompleted 
 * @description 
 * @asis for="ds_RailroadFare" event="OnLoadCompleted(rowCnt)"
 */
scwin.ds_RailroadFare_OnLoadCompleted = function () {
  if (rowCnt == 0) {
    ds_RailroadFare.removeAll();
    dma_RailroadFare.setEmptyValue();
    const queryCondition = dma_QueryCondition.getJSON();
    if (queryCondition['dptStn'] == '4R01' && queryCondition['arvStn'] == '6R12') {
      //(2015.01.05 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청) 20TEU , teu당단가 1998000
      ed_totAmt.setValue('1998000');
    } else if (queryCondition['dptStn'] == '6R12' && queryCondition['arvStn'] == '4R01') {
      //(2015.01.05 수정 BT화차량 변동_물류 운영관리팀 이종훈님 요청) 22TEU , teu당단가 1292400
      ed_totAmt.setValue('1292400');
    }
    ;
  }
  ;
  scwin.f_countGridTeu();
};

/**
 * @method 
 * @name ds_RailroadWorkIndication_OnLoadCompleted 
 * @description 
 * @asis for="ds_cntrBasisInfoResult" event="OnLoadCompleted(rowCnt)"
 */
scwin.ds_cntrBasisInfoResult_OnLoadCompleted = function () {
  const rowCnt = ds_cntrBasisInfoResult.getRowCount();
  if (rowCnt > 0) {
    scwin.f_addCntrBasisInfo(ds_ShippingWeightContents.getRowPosition());
  }
};

/**
 * @event 
 * @name ds_RailroadWorkIndication_OnLoadCompleted 
 * @description 행의 인덱스가 변경된 경우에 발생 
 * @asis for=ds_ShippingWeightContents event=OnRowPosChanged(row)
 */
scwin.ds_ShippingWeightContents_onrowpositionchange = function (info) {
  const row = info.newRowIndex;
  if (row == -1) return;

  // 고정 편집가능 컬럼
  gr_ShippingWeightContents.setColumnReadOnly('adjmTrgtYn', false);
  gr_ShippingWeightContents.setColumnReadOnly('onewayYn', false);
  gr_ShippingWeightContents.setColumnReadOnly('arvHndlRateSateYn', false);
  const targetColumns = ['cntrNo', 'sealNo', 'adminfrtcarYn', 'transNmCd', 'dptHndlRateSateYn', 'railroadEdiSndYn'];
  const readOnly = ds_ShippingWeightContents.getRowStatusValue(row) != 2;
  targetColumns.forEach(column => {
    gr_ShippingWeightContents.setColumnReadOnly(column, readOnly);
  });
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name udc_begintrainWorkPlace_onblurCodeEvent 
 * @description [출발역] code 포커스를 잃었을 때 발생
 */
scwin.udc_begintrainWorkPlace_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_begintrainWorkPlaceCd, txt_begintrainWorkPlaceNm, 1, true);
};

/**
 * @event 
 * @name udc_begintrainWorkPlace_onviewchangeCodeEvent 
 * @description [출발역] name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_begintrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_begintrainWorkPlaceNm, ed_begintrainWorkPlaceCd, 1, false);
};

/**
 * @event 
 * @name udc_begintrainWorkPlace_onclickEvent 
 * @description [출발역] 검색 버튼 클릭 시 발생
 */
scwin.udc_begintrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_begintrainWorkPlaceCd.getValue(), txt_begintrainWorkPlaceNm.value, 'F', 'T');
};

/**
 * @event 
 * @name udc_endtrainWorkPlace_onblurCodeEvent 
 * @description [도착역] code 포커스를 잃었을 때 발생
 */
scwin.udc_endtrainWorkPlace_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_endtrainWorkPlaceCd, txt_endtrainWorkPlaceNm, 2, true);
};

/**
 * @event 
 * @name udc_begintrainWorkPlace_onviewchangeCodeEvent 
 * @description [도착역] name 컴포넌트의 value가 변경되었을 때 발생
 */
scwin.udc_endtrainWorkPlace_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_endtrainWorkPlaceNm, ed_endtrainWorkPlaceCd, 2, false);
};

/**
 * @event 
 * @name udc_endtrainWorkPlace_onclickEvent 
 * @description [도착역] 검색 버튼 클릭 시 발생
 */
scwin.udc_endtrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_endtrainWorkPlaceCd.getValue(), txt_endtrainWorkPlaceNm.value, 'F', 'T');
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회조건 초기화 버튼 클릭 시 발생
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_trigger1_onclick 
 * @description [작업경로수정] 버튼 클릭 시 발생
 */
scwin.btn_bUpdate2_onclick = function (e) {
  scwin.f_workPathMod();
};

/**
 * @event 
 * @name btn_trigger2_onclick 
 * @description [저수요단가등록] 버튼 클릭 시 발생
 */
scwin.btn_bSave2_onclick = function (e) {
  scwin.f_openNewPortTrf();
};

/**
 * @event 
 * @name btn_trigger3_onclick 
 * @description [조작료수정] 버튼 클릭 시 발생
 */
scwin.btn_bUpdate_onclick = function (e) {
  scwin.f_openPopUpHdlCharge();
};

/**
 * @event 
 * @name btn_trigger5_onclick 
 * @description [EDI등록(M/S)] 버튼 클릭 시 발생
 */
scwin.btn_trigger5_onclick = function (e) {
  scwin.f_crryInOutEDICheck();
};

/**
 * @event 
 * @name btn_trigger6_onclick 
 * @description [저장(A/S)] 버튼 클릭 시 발생
 */
scwin.btn_trigger6_onclick = function (e) {
  scwin.f_Save('Auto');
};

/**
 * @event 
 * @name btn_trigger6_onclick 
 * @description [저장] 버튼 클릭 시 발생
 */
scwin.btn_bSave_onclick = function (e) {
  scwin.f_Save();
};

/**
 * @event 
 * @name gr_RailroadWorkIndication_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for="gr_RailroadWorkIndication" event="OnClick(Row,Colid)"
 */
scwin.gr_RailroadWorkIndication_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (scwin.oldrowData != rowIndex) {
    scwin.f_RetrieveRailroadWorkIndicationDetail();
    scwin.f_RetrieveRailroadFare();
  }
  ;
  scwin.oldrowData = rowIndex;
  const rowData = ds_RailroadWorkIndication.getRowJSON(rowIndex);
  if (columnId == 'sndSts') {
    if (rowData['sndSts'] != 1) return;
    if (rowData['transLongNo'] == 0 || rowData['transLongNo'] == '') {
      $c.win.alert($p, '철송작업계획에서 운송장을 입력해 주세요.');
      return;
    }
    const retConfirm = await $c.win.confirm($p, 'EDI 일괄전송을 하시겠습니까?');
    if (!retConfirm) return;
    scwin.f_ediSend2(rowIndex);
  }
  ;
};

/**
 * @event 
 * @name gr_ShippingWeightContents_onbeforeedit 
 * @description 셀의 편집모드로 들어가기 전에 발생
 * @asis FOR=gr_ShippingWeightContents EVENT=OnEnter(row,colid)
 */
scwin.gr_ShippingWeightContents_onbeforeedit = async function (rowIndex, columnIndex, value) {
  const colID = this.getColumnID(columnIndex);
  const rowData = this._dataList.getRowJSON(rowIndex);
  let originVal = '';
  switch (colID) {
    case 'dptDt':
      if (rowData['cntrNo'] == '') {
        await $c.gus.cfAlertMsg($p, '컨테이너번호가 없습니다');
        originVal = ds_ShippingWeightContents.getOriginalCellData(rowIndex, 'dptDt');
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptDt', originVal);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'odrNo');
        return;
      }
      ;
      break;
    case 'dptHh':
      if (rowData['cntrNo'] == '') {
        await $c.gus.cfAlertMsg($p, '컨테이너번호가 없습니다');
        originVal = ds_ShippingWeightContents.getOriginalCellData(rowIndex, 'dptDt');
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptDt', originVal);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'odrNo');
        return;
      }
      ;
      if (rowData['dptDt'] == '') {
        await $c.gus.cfAlertMsg($p, '출발일자가 없습니다');
        originVal = ds_ShippingWeightContents.getOriginalCellData(rowIndex, 'dptHh');
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptHh', originVal);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'odrNo');
        return;
      }
      ;
      break;
    case 'arvDtm':
      if (rowData['cntrNo'] == '') {
        await $c.gus.cfAlertMsg($p, '컨테이너번호가 없습니다');
        originVal = ds_ShippingWeightContents.getOriginalCellData(rowIndex, 'arvDtm');
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDtm', originVal);
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDt', rowData['arvDtm'].slice(0, 8));
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHh', rowData['arvDtm'].slice(8, 4));
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'odrNo');
        return;
      }
      ;
      if (rowData['dptDt'] == '' || rowData['dptHh'] == '') {
        await $c.gus.cfAlertMsg($p, '출발일자를 입력하지 않았습니다');
        originVal = ds_ShippingWeightContents.getOriginalCellData(rowIndex, 'arvDtm');
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDtm', originVal);
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDt', rowData['arvDtm'].slice(0, 8));
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHh', rowData['arvDtm'].slice(8, 4));
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'odrNo');
        return;
      }
      ;
      break;
    default:
      break;
  }
};
scwin.f_normalizeShippingWeightDateValue = function (colId, value) {
  value = (value ?? "").toString().replace(/\D/g, "");
  if (colId === "dptHh" && /^\d{3}$/.test(value)) {
    return "0" + value;
  }
  return value;
};
scwin.f_validateShippingWeightDateCell = async function (rowIndex, colId, value) {
  const msgPrefix = "[" + (rowIndex + 1) + "번째 줄]";
  let msgLabel = colId;
  let expectedLength = "";
  let result = {
    ok: true
  };
  const validateDate = function (targetValue) {
    if (!/^\d{8}$/.test(targetValue)) {
      return {
        ok: false,
        type: "length"
      };
    }
    const y = parseInt(targetValue.substring(0, 4), 10);
    const m = parseInt(targetValue.substring(4, 6), 10);
    const d = parseInt(targetValue.substring(6, 8), 10);
    if (y < 1) {
      return {
        ok: false,
        type: "year"
      };
    }
    if (m < 1 || m > 12) {
      return {
        ok: false,
        type: "month"
      };
    }
    if (d < 1 || d > 31) {
      return {
        ok: false,
        type: "day"
      };
    }
    const dt = new Date(y, m - 1, d);
    if (dt.getFullYear() !== y || dt.getMonth() + 1 !== m || dt.getDate() !== d) {
      return {
        ok: false,
        type: "none"
      };
    }
    return {
      ok: true
    };
  };
  const validateTime = function (targetValue) {
    if (!/^\d{4}$/.test(targetValue)) {
      return {
        ok: false,
        type: "length"
      };
    }
    const hh = parseInt(targetValue.substring(0, 2), 10);
    const mm = parseInt(targetValue.substring(2, 4), 10);
    if (hh < 0 || hh > 23) {
      return {
        ok: false,
        type: "hour"
      };
    }
    if (mm < 0 || mm > 59) {
      return {
        ok: false,
        type: "minute"
      };
    }
    return {
      ok: true
    };
  };
  const validateDateTime = function (targetValue) {
    if (!/^\d{12}$/.test(targetValue)) {
      return {
        ok: false,
        type: "length"
      };
    }
    const dateResult = validateDate(targetValue.substring(0, 8));
    if (!dateResult.ok) {
      return dateResult;
    }
    const timeResult = validateTime(targetValue.substring(8, 12));
    if (!timeResult.ok) {
      return timeResult;
    }
    return {
      ok: true
    };
  };
  if ($c.gus.cfIsNull($p, value)) {
    return true;
  }
  if (colId === "dptDt") {
    msgLabel = "출발일자";
    expectedLength = "8";
    result = validateDate(value);
  } else if (colId === "dptHh") {
    msgLabel = "출발일시";
    expectedLength = "4";
    result = validateTime(value);
  } else if (colId === "arvDtm") {
    msgLabel = "도착일시";
    expectedLength = "12";
    result = validateDateTime(value);
  }
  if (result.ok) {
    return true;
  }
  if (result.type === "length") {
    await $c.gus.cfAlertMsg($p, msgPrefix + MSG_CM_ERR_005, [msgLabel, expectedLength]);
  } else if (result.type === "year") {
    await $c.gus.cfAlertMsg($p, msgPrefix + MSG_CM_ERR_015, [msgLabel]);
  } else if (result.type === "month") {
    await $c.gus.cfAlertMsg($p, msgPrefix + MSG_CM_ERR_019, [msgLabel]);
  } else if (result.type === "day") {
    await $c.gus.cfAlertMsg($p, msgPrefix + MSG_CM_ERR_020, [msgLabel]);
  } else if (result.type === "hour") {
    await $c.gus.cfAlertMsg($p, msgPrefix + MSG_CM_ERR_021, [msgLabel]);
  } else if (result.type === "minute") {
    await $c.gus.cfAlertMsg($p, msgPrefix + MSG_CM_ERR_022, [msgLabel]);
  } else {
    await $c.gus.cfAlertMsg($p, msgPrefix + MSG_CM_ERR_018, [msgLabel]);
  }
  return false;
};

/**
 * @event 
 * @name gr_ShippingWeightContents_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 * @asis for=gr_ShippingWeightContents event=OnExit(row,colid,olddata)
 */
scwin.gr_ShippingWeightContents_onafteredit = async function (rowIndex, columnIndex, value) {
  // tobe - 동작 상이하여 로직이 많이 바뀜
  const colID = this.getColumnID(columnIndex);
  const rowData = ds_ShippingWeightContents.getRowJSON(rowIndex);
  const row = rowIndex + 1;
  let validCol;

  // if(rowData[colID] == scwin.oldData) return;

  switch (colID) {
    case 'dptHndlRateSateYn':
      if (value.length < 4) {
        // 자릿수가 4자리 미만입니다.
        await $c.gus.cfAlertMsg($p, '[' + row + '번째 줄]' + MSG_CM_ERR_005, ['출발역 조작료상태', '4']);
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptHndlRateSateYn', '');
        return;
      }
      ;
      for (let i = 0; i < value.length; i++) {
        if (!['Y', 'N'].includes(value.slice(i, i + 1))) {
          // Y,N만 입력되어야 합니다.
          await $c.gus.cfAlertMsg($p, 'Y,N 만 입력되어야 합니다.');
          ds_ShippingWeightContents.setCellData(rowIndex, 'dptHndlRateSateYn', '');
          return;
        }
        ;
      }
      ;
      break;
    case 'frtcarNo':
      if (rowData['cntrNo'] == '') {
        await $c.gus.cfAlertMsg($p, '[' + row + '번째 줄]' + MSG_CM_ERR_002, ['컨테이너번호']);
        ds_ShippingWeightContents.setRowPosition(rowIndex);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'cntrNo');
      }
      ;
      break;
    case 'dptHh':
      value = scwin.f_normalizeShippingWeightDateValue(colID, value);
      validCol = await scwin.f_validateShippingWeightDateCell(rowIndex, colID, value);
      if (!validCol) {
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptHh', value);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'dptHh');
        return;
      }
      ;
      ds_ShippingWeightContents.setCellData(rowIndex, 'dptHh', value);
      if (rowData['arvDt'] != '' && rowData['arvHh'] != '' && rowData['dptDt'] != '' && value != '' && rowData['dptDt'] + value >= rowData['arvDt'] + rowData['arvHh']) {
        await $c.gus.cfAlertMsg($p, '출발일자가 도착일자보다 큽니다');
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptHh', scwin.oldData);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'dptHh');
        return;
      }
      ;
      break;
    case 'dptDt':
      if (value == '') {
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptDt', scwin.oldData);
      }
      ;
      value = scwin.f_normalizeShippingWeightDateValue(colID, scwin.oldData);
      validCol = await scwin.f_validateShippingWeightDateCell(rowIndex, colID, value);
      if (!validCol) {
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptDt', value);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'dptDt');
        return;
      }
      ;
      ds_ShippingWeightContents.setCellData(rowIndex, 'dptDt', value);
      if (rowData['arvDt'] != '' && rowData['arvHh'] != '' && value != '' && rowData['dptHh'] != '' && value + rowData['dptHh'] >= rowData['arvDt'] + rowData['arvHh']) {
        await $c.gus.cfAlertMsg($p, '출발일자가 도착일자보다 큽니다');
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptDt', scwin.oldData);
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'cntrNo');
      }
      ;
      break;
    case 'arvDtm':
      value = scwin.f_normalizeShippingWeightDateValue(colID, value);
      if (value != '') {
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDt', value.slice(0, 8));
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHh', value.slice(8, 12));
      } else {
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDt', '');
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHh', '');
      }
      ;
      validCol = await scwin.f_validateShippingWeightDateCell(rowIndex, colID, value);
      if (!validCol) {
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDtm', scwin.oldData);
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDt', scwin.oldData.slice(0, 8));
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHh', scwin.oldData.slice(8, 12));
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'arvDtm');
        return;
      }
      ;
      ds_ShippingWeightContents.setCellData(rowIndex, 'arvDtm', value);
      if (value != '' && rowData['dptDt'] != '' && rowData['dptHh'] != '' && rowData['dptDt'] + rowData['dptHh'] >= value) {
        await $c.gus.cfAlertMsg($p, '출발일자가 도착일자보다 큽니다');
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDtm', value);
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvDt', value.slice(0, 8));
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHh', value.slice(8, 12));
        gr_ShippingWeightContents.setFocusedCell(rowIndex, 'cntrNo');
      }
      break;
    case 'cntrNo':
      if (scwin.oldData != value) scwin.cntrNo = value;
      scwin.f_retrieveCntrBasisInfo(scwin.cntrNo);
      scwin.f_countGridTeu();
      break;
    case 'adminfrtcarYn':
      scwin.f_countGridTeu();
      scwin.f_railNumSetting(row);
      break;

    // for=gr_ShippingWeightContents event=OnCloseUp(row,colid)
    case 'transNmCd':
      //운송명의에 해당하는 거래처코드 세팅
      scwin.f_setTransCd(rowIndex, value);

      //동부명의가 아니면 조작료 생성되지 않도록 세팅
      //2015.01.06 hurrah
      if (value != 'DB') {
        //동부명의가 아니면
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptHndlRateSateYn', 'NNNN');
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHndlRateSateYn', 'NNNN');
        ds_ShippingWeightContents.setCellData(rowIndex, 'trnNo', '');
      } else {
        //동부명의이면
        ds_ShippingWeightContents.setCellData(rowIndex, 'dptHndlRateSateYn', 'YNNN');
        ds_ShippingWeightContents.setCellData(rowIndex, 'arvHndlRateSateYn', 'YNNN');
      }
      ;
      scwin.f_railNumSetting(rowIndex);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_ShippingWeightContents_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @asis for=gr_ShippingWeightContents event=OnExit(row,colid,olddata)
 */
scwin.gr_ShippingWeightContents_oneditend = async function (rowIndex, columnIndex, value) {
  scwin.oldData = this._dataList.getCellData(rowIndex, columnIndex);
};

/**
 * @event 
 * @name gr_ShippingWeightContents_oncellclick 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @asis for="gr_ShippingWeightContents" event="OnClick(Row,Colid)"
 */
scwin.gr_ShippingWeightContents_oncellclick = function (rowIndex, columnIndex, columnId) {
  const rowData = ds_ShippingWeightContents.getRowJSON(rowIndex);
  switch (columnId) {
    case 'sndClsMsg':
      if (['3', '1'].includes(rowData['sndClsCd']) && rowData['preInfoSndYn'] == '1' && rowData['sndClsMsg'] == '전송취소') {
        scwin.f_ediSend('ONE', rowIndex);
      }
      break;
    case 'adjmTrgtYn':
      if (rowData[columnId] == 1 && rowData['adminfrtcarYn'] != 2) {
        $c.win.alert($p, '철송임미생성 기능은 공사화차구분이 저수요인 경우만 선택할 수 있습니다.');
        ds_ShippingWeightContents.setCellData(rowIndex, columnId, 0);
        return false;
      }
      ;
      break;
    case 'onewayYn':
      if (rowData[columnId] == 1 && rowData['adminfrtcarYn'] != 3) {
        $c.win.alert($p, '편도 기능은 공사화차구분이 전용인 경우만 선택할 수 있습니다.');
        ds_ShippingWeightContents.setCellData(rowIndex, columnId, 0);
        return false;
      }
      ;
      break;
    case 'cntrNo':
    case 'adminfrtcarYn':
      scwin.f_countGridTeu();
      scwin.f_railNumSetting(rowIndex);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_ShippingWeightContents_oncelldblclick 
 * @description 셀이 더블 클릭된 경우 발생
 * @asis for=gr_ShippingWeightContents event=OnDblClick(row,colid)
 */
scwin.gr_ShippingWeightContents_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let totalRows = ds_ShippingWeightContents.getRowCount();
  let rowData = ds_ShippingWeightContents.getRowJSON(rowIndex);
  switch (columnId) {
    case 'adminfrtcarYn':
      // 화차구분
      if (!gr_ShippingWeightContents.getColumnReadOnly('adjmTrgtYn')) {
        for (let j = rowIndex; j < totalRows; j++) {
          ds_ShippingWeightContents.setCellData(j, columnId, rowData[columnId]);
          scwin.f_countGridTeu();
          scwin.f_railNumSetting(j);
        }
        ;
      }
      ;
      break;
    case 'transNmCd':
      // 운송명의
      if (!gr_ShippingWeightContents.getColumnReadOnly('transNmCd')) {
        for (let j = rowIndex; j < totalRows; j++) {
          let jRowData = ds_ShippingWeightContents.getRowJSON(j);
          ds_ShippingWeightContents.setCellData(j, columnId, rowData[columnId]);

          //운송명의에 해당하는 거래처코드 세팅
          scwin.f_setTransCd(j, jRowData['transNmCd']);

          //동부명의가 아니면 조작료 생성되지 않도록 세팅
          //2015.01.06 hurrah
          let transNmCd = jRowData['transNmCd']; //dptHndlRateSateYn
          if (transNmCd != 'DB') {
            //동부명의가 아니면
            ds_ShippingWeightContents.setCellData(j, 'dptHndlRateSateYn', 'NNNN');
            ds_ShippingWeightContents.setCellData(j, 'arvHndlRateSateYn', 'NNNN');
            ds_ShippingWeightContents.setCellData(j, 'trnNo', '');
          } else {
            //동부명의이면
            ds_ShippingWeightContents.setCellData(j, 'dptHndlRateSateYn', 'YNNN');
            ds_ShippingWeightContents.setCellData(j, 'arvHndlRateSateYn', 'YNNN');
          }
          ;
        }
        ;
      }
      ;
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_ShippingWeightContents_ontextimageclick 
 * @description inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 * @asis for=gr_ShippingWeightContents event=OnPopup(row,colid,data)
 */
scwin.gr_ShippingWeightContents_ontextimageclick = function (rowIndex, columnIndex) {
  const colID = gr_ShippingWeightContents.getColumnID(columnIndex);
  const rowData = ds_ShippingWeightContents.getRowJSON(rowIndex);

  // 컨테이너번호, 화차번호 , 시작일자

  switch (colID) {
    case 'cntrNo':
      // 컨테이너 번호
      scwin.f_openCommonPopUp(3, '', '', 'F', 'F');
      break;
    case 'frtcarNo':
      // 화차 번호
      scwin.f_openCommonPopUp(4, rowData['frtcarNo'], '', 'F', 'T');
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭된 경우 발생
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_qeryList();
};

//-----------------------------------------------------------------------------
//   Format method  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name gr_RailroadWorkIndication_format 
 * @description gr_RailroadWorkIndication customFomatter
 */
scwin.gr_RailroadWorkIndication_format = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  let rowData = $p.getComponentById(this.getDataList()).getRowJSON(rowIndex);
  switch (colID) {
    case 'calcPrvtAppTeu':
      let nPrvtAppTeu = $c.num.parseFloat($p, rowData['prvtAppTeu'], 0);
      let nXclsAppTeu = $c.num.parseFloat($p, rowData['xclsAppTeu'], 0);
      return nPrvtAppTeu + nXclsAppTeu;
    case 'calcTeu':
      let nTeu = $c.num.parseFloat($p, rowData['teu'], 0);
      let nXclsTeu = $c.num.parseFloat($p, rowData['xclsTeu'], 0);
      return nTeu + nXclsTeu;
    case 'sndSts':
      return data == 0 ? '' : '전송';
    default:
      break;
  }
};

/**
 * @method 
 * @name gr_RailroadWorkIndicationSub_format 
 * @description gr_RailroadWorkIndicationSub customFomatter
 */
scwin.gr_RailroadWorkIndicationSub_format = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  let originRowData = $p.getComponentById(this.getDataList()).getRowJSON(rowIndex);
  const rowData = {};
  Object.entries(originRowData).forEach(([key, value]) => {
    rowData[key] = $c.num.parseFloat($p, value, 0);
  });
  switch (colID) {
    case 'No':
      return rowIndex + 1;
    // 사유화차 신청량(전용포함)
    case 'prvtAppCnt20Empty':
      return rowData['prvtAppCnt20Empty'] + rowData['xclsAppCnt20Empty'];
    case 'prvtAppCnt20Full':
      return rowData['prvtAppCnt20Full'] + rowData['xclsAppCnt20Full'];
    case 'prvtAssgnCnt20Full':
      return rowData['prvtAssgnCnt20Full'] + rowData['xclsAssgnCnt20Full'];
    case 'prvtAppCnt40Empty':
      return rowData['prvtAppCnt40Empty'] + rowData['xclsAppCnt40Empty'];
    case 'prvtAppCnt40Full':
      return rowData['prvtAppCnt40Full'] + rowData['xclsAppCnt40Full'];
    case 'prvtAppCnt45Empty':
      return rowData['prvtAppCnt45Empty'] + rowData['xclsAppCnt45Empty'];
    case 'prvtAppCnt45Full':
      return rowData['prvtAppCnt45Full'] + rowData['xclsAppCnt45Full'];

    // 사유화차 배정량(전용포함)
    case 'prvtAssgnCnt20Empty':
      return rowData['prvtAssgnCnt20Empty'] + rowData['xclsAssgnCnt20Empty'];
    case 'prvtAssgnCnt20Full':
      return rowData['prvtAssgnCnt20Full'] + rowData['xclsAssgnCnt20Full'];
    case 'prvtAssgnCnt40Empty':
      return rowData['prvtAssgnCnt40Empty'] + rowData['xclsAssgnCnt40Empty'];
    case 'prvtAssgnCnt40Full':
      return rowData['prvtAssgnCnt40Full'] + rowData['xclsAssgnCnt40Full'];
    case 'prvtAssgnCnt45Empty':
      return rowData['prvtAssgnCnt45Empty'] + rowData['xclsAssgnCnt45Empty'];
    case 'prvtAssgnCnt45Full':
      return rowData['prvtAssgnCnt45Full'] + rowData['xclsAssgnCnt45Full'];
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_begintrainWorkPlaceCd',nameId:'txt_begintrainWorkPlaceNm',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'key',objTypeName:'data',id:'udc_begintrainWorkPlace','ev:onblurCodeEvent':'scwin.udc_begintrainWorkPlace_onblurCodeEvent','ev:onclickEvent':'scwin.udc_begintrainWorkPlace_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_begintrainWorkPlace_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_endtrainWorkPlace',codeId:'ed_endtrainWorkPlaceCd',nameId:'txt_endtrainWorkPlaceNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'key',objTypeName:'data',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_endtrainWorkPlace_onblurCodeEvent','ev:onclickEvent':'scwin.udc_endtrainWorkPlace_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_endtrainWorkPlace_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_wrkDt',edToId:'ica_wrkDtTo',titleFrom:'작업일자',titleTo:'작업일자',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업지시정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_RailroadWorkIndication',style:'',autoFit:'allColumn',id:'gr_RailroadWorkIndication',visibleRowNum:'3',class:'wq_gvw',gridName:'작업지시정보','ev:oncellclick':'scwin.gr_RailroadWorkIndication_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'출발역',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'도착역',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'작업지시번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'화물운송장<br/>번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'배분량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'실제작업량<br/>(TEU)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'사유화차 신청량(TEU)<br/>(전용포함)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column5',value:'사유화차 배분량(TEU)<br/>(전용포함)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'사유화차<br/>신청량(TEU)',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'사유화차<br/>배분량(TEU)',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'전용화차<br/>신청량(TEU)',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'전용화차<br/>배분량(TEU)',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'실제작업량<br/>(저수요)',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column23',value:'조작/재조작/구내/정보',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'전송',displayMode:'label',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'도착역',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptStn',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvStn',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkIndictNo',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transLongNo',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'frtcarAllocVol',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsVol',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'calcPrvtAppTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'calcTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prvtAppTeu',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',dataType:'number',displayFormat:'#,##0',customFormatter:'scwin.gr_RailroadWorkIndication_format'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'teu',displayMode:'label',textAlign:'right',hidden:'true',readOnly:'true',dataType:'number',displayFormat:'#,##0',customFormatter:'scwin.gr_RailroadWorkIndication_format'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xclsAppTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'xclsTeu',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'btRsltsVol',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptHndlRateSateYn',displayMode:'label',readOnly:'true',textAlign:'center',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvHndlRateSateYn',displayMode:'label',readOnly:'true',textAlign:'center',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',id:'sndSts',displayMode:'label',readOnly:'true',textAlign:'center',customFormatter:'scwin.gr_RailroadWorkIndication_format'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_RailroadWorkIndicationDetail',style:'',autoFit:'allColumn',id:'gr_RailroadWorkIndicationSub',visibleRowNum:'1',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',displayMode:'label',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column17',value:'사유화차 신청량(전용포함)',displayMode:'label',colSpan:'6',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column15',value:'사유화차 배정량(전용포함)',displayMode:'label',colSpan:'6',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column13',value:'전용화차 신청량',displayMode:'label',colSpan:'6',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column11',value:'전용화차 배정량',displayMode:'label',colSpan:'6',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column9',value:'공사화차량',displayMode:'label',colSpan:'6',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column92',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column86',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column84',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column83',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column80',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column74',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column68',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',value:'45F',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'No',displayMode:'label',hidden:'true',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt20Empty',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt20Full',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt40Empty',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt40Full',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt45Empty',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAppCnt45Full',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt20Empty',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt20Full',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt40Empty',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt40Full',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt45Empty',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'prvtAssgnCnt45Full',displayMode:'label',textAlign:'right',customFormatter:'scwin.gr_RailroadWorkIndicationSub_format',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt20Empty',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt20Full',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt40Empty',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt40Full',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt45Empty',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAppCnt45Full',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt20Empty',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt20Full',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt40Empty',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt40Full',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt45Empty',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsAssgnCnt45Full',displayMode:'label',textAlign:'right',hidden:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt20Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt20Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt40Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt40Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt45Empty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'adminfrtcarCnt45Full',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRowsDetail',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적재정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ShippingWeightContents',gridDownFn:'scwin.f_railroadResultsExcel',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ShippingWeightContents',id:'gr_ShippingWeightContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true',fixedColumn:'1','ev:onbeforeedit':'scwin.gr_ShippingWeightContents_onbeforeedit','ev:oncellclick':'scwin.gr_ShippingWeightContents_oncellclick','ev:oncelldblclick':'scwin.gr_ShippingWeightContents_oncelldblclick','ev:ontextimageclick':'scwin.gr_ShippingWeightContents_ontextimageclick',rowStatusVisible:'true',fixedColumnNoMove:'true',dataName:'적재정보',validExp:'dptDt:출발일자:no:date=YYYYMMDD,dptHh:출발일시:no:date=HHmm,arvDtm:도착일시:no:date=YYYYMMDDHHmm','ev:oneditend':'scwin.gr_ShippingWeightContents_oneditend','ev:onafteredit':'scwin.gr_ShippingWeightContents_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'컨테이너<br/>번호',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'규격',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Tp',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'F/E',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'SealNo',width:'80',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'오더번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'화주명',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'중량',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'화차<br/>구분',width:'70',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'편도<br/>여부',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column59',value:'열차<br/>번호',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'화차<br/>번호',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'운송<br/>명의',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column53',value:'거래처<br/>코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',value:'철송임<br/>미생성',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'월말<br/>할증여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'신항<br/>여부',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column45',value:'출발',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'도착일시',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column39',value:'조작/재조작/구내/정보',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column35',value:'EDI전송',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'컨테이너<br/>수',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'화차용량',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'적재TEU',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'냉동<br/>여부',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column73',value:'일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column70',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column68',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',value:'취소전송',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column65',value:'응답상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'textImage',width:'100',textAlign:'center',allowChar:'a-zA-Z0-9',maxLength:'11'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypShowCd',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'80',textAlign:'left',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'70',textAlign:'right',hidden:'true',readOnly:'true',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adminfrtcarYn',inputType:'select',width:'70',textAlign:'center',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'저수요'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사유'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'onewayYn',inputType:'checkbox',width:'70',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trnNo',displayMode:'label',textAlign:'center',allowChar:'a-zA-Z0-9',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'frtcarNo',displayMode:'label',textAlign:'center',allowChar:'a-zA-Z0-9',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'transNmCd',displayMode:'label',textAlign:'left',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_combo_transNmCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transNmClntCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',id:'adjmTrgtYn',displayMode:'label',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'mmEndScYn',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'pncportYn',displayMode:'label',hidden:'true',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'calendar',id:'dptDt',displayMode:'label',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd',dateValidCheck:'false',date:'YYYYMMDD',dateValidSet:'false',dateValidSetCustom:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptHh',displayMode:'label',textAlign:'center',dataType:'text',displayFormat:'##:##',allowChar:'0-9',maxLength:'4',validateOnInput:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDtm',displayMode:'label',textAlign:'center',dataType:'text',allowChar:'0-9',validateOnInput:'false',editFormat:'####/##/## ##:##',maxByteLength:'16'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptHndlRateSateYn',displayMode:'label',textAlign:'center',readOnly:'true',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvHndlRateSateYn',displayMode:'label',textAlign:'center',readOnly:'true',displayFormat:'#/#/#/#'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'railroadEdiSndYn',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndClsNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsMsg',displayMode:'label',hidden:'true',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'replyState',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrCnt',displayMode:'label',hidden:'true',textAlign:'center',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'frtcarCapa',displayMode:'label',hidden:'true',textAlign:'center',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipwgtTeu',displayMode:'label',hidden:'true',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'frzYn',displayMode:'label',hidden:'true',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'SubtotalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'추가할 갯수',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_addCnt',placeholder:'',class:'',objType:'data',allowChar:'0-9'}}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',rowAddFunction:'scwin.f_addRows',rowDelFunction:'scwin.f_DeleteAct',cancelFunction:'scwin.f_cancelAct',gridID:'gr_ShippingWeightContents'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'detailInfoRslts',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사유(전용포함)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'저수요',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th tac'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TEU',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'건',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TEU',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'20\'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'40\'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'spn_rsnTot',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'spn_rsnTeu',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'spn_admTot',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'spn_admTeu',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'bold',id:'spn_btTot',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'bold',id:'spn_btTeu',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'spn_20Tot',label:'num',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue bold',id:'spn_40Tot',label:'num',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'저수요배정금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_totAmt',placeholder:'',style:'',ref:'data:dma_RailroadFare.totAmt',objType:'data','ev:onkeyup':'scwin.upperFlag',readOnly:'true',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'저수요단가',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_railroadFare',placeholder:'',style:'',ref:'data:dma_RailroadFare.railroadFare','ev:onkeyup':'scwin.upperFlag',objType:'data',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TEU',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_teuCnt',placeholder:'',style:'',ref:'data:dma_RailroadFare.teuCnt',objType:'data','ev:onkeyup':'scwin.upperFlag',dataType:'number',displayFormat:'#,##0',maxlength:'3'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bUpdate2',label:'저장',style:'',type:'button',objType:'bUpdate2','ev:onclick':'scwin.btn_bUpdate2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'',label:'저장',style:'display: none;',type:'button',objType:'bSave2'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저수요단가생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bSave2',label:'저장',style:'',type:'button',objType:'bUpdate','ev:onclick':'scwin.btn_bSave2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저수요단가등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bUpdate',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_bUpdate_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'조작료수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_trigger5',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI등록(M/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger6',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_trigger6_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장(A/S)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bSave',label:'저장',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.btn_bSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',progressBarSwitch:'',validTitle:'',nameId:'',style:'width:%; height:px; ',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',id:'udc_comPop'}}]}]}]}]})