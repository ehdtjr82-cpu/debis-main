/*amd /AI/op_202_02_37p.xml 120723 b3a9b149059ec9f3a0fd311297ea6585e6a3242d8d05dba58b94a5c475407305 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclIdCardNo',name:'차량ID번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopinoOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinCrryoutCls',name:'반입반출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cls',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'snd',name:'송신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcv',name:'수신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDes',name:'송신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes',name:'수신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes2',name:'수신자DES2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndId',name:'송신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFrom',name:'운송구간FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFromNm',name:'운송구간FROM명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstTo',name:'운송구간TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstToNm',name:'운송구간TO명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtmMint',name:'반출입일시분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCntSht',name:'운송수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFrtcarNo',name:'차량번호화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFull',name:'차량번호FULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'차량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoCd',name:'운송사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suitCoTransCoNm',name:'소송업체운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세운송차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisPosInfo',name:'샤시위치정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPoint',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPointCont',name:'출발지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arv',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvCont',name:'도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArv',name:'최종도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArvCont',name:'최종도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoCd',name:'입주사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoNm',name:'입주사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizTyp',name:'SIZETYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCls',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtCstmclrncExyn',name:'직통관유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzTemper',name:'냉동온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temperCls',name:'온도구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'OVER_LENGTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'OVER_WIDTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'OVER_HEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlVsslPortcnt',name:'터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPort',name:'양하항구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNo',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayRettlPassYn',name:'XRAY검색기통과여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'iccntctPic',name:'IC연락담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iccntctPl',name:'IC연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslArrvlportYr',name:'모선입항년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCls',name:'TS구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hanjinSelfCls',name:'한진자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfCls',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCoCd',name:'송신업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDd',name:'수탁일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDtm',name:'수탁일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminal',name:'착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminalVssl',name:'착역선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pusanjinHousCd',name:'부산진단지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCls',name:'철송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadIntendCls',name:'철송예정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarCls',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'icdmoveCls',name:'ICD이동구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoCls',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntctPl',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlCd',name:'조작코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docStsCls',name:'문서상태구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errorCls',name:'ERROR구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emcTransCoId',name:'EMC운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpctTransCoId',name:'DPCT운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoGrpClsCd',name:'사전정보그룹구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setGauceJobType',name:'setGauceJobType',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopinoOut2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinCrryoutCls',name:'반입반출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cls',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'snd',name:'송신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcv',name:'수신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDes',name:'송신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes',name:'수신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes2',name:'수신자DES2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndId',name:'송신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFrom',name:'운송구간FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFromNm',name:'운송구간FROM명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstTo',name:'운송구간TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstToNm',name:'운송구간TO명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtmMint',name:'반출입일시분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCntSht',name:'운송수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFrtcarNo',name:'차량번호화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFull',name:'차량번호FULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'차량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoCd',name:'운송사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suitCoTransCoNm',name:'소송업체운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세운송차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisPosInfo',name:'샤시위치정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPoint',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPointCont',name:'출발지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arv',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvCont',name:'도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArv',name:'최종도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArvCont',name:'최종도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoCd',name:'입주사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoNm',name:'입주사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizTyp',name:'SIZETYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCls',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtCstmclrncExyn',name:'직통관유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzTemper',name:'냉동온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temperCls',name:'온도구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'OVER_LENGTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'OVER_WIDTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'OVER_HEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlVsslPortcnt',name:'터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPort',name:'양하항구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNo',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayRettlPassYn',name:'XRAY검색기통과여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'iccntctPic',name:'IC연락담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iccntctPl',name:'IC연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslArrvlportYr',name:'모선입항년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCls',name:'TS구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hanjinSelfCls',name:'한진자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfCls',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCoCd',name:'송신업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDd',name:'수탁일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDtm',name:'수탁일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminal',name:'착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminalVssl',name:'착역선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pusanjinHousCd',name:'부산진단지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCls',name:'철송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadIntendCls',name:'철송예정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarCls',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'icdmoveCls',name:'ICD이동구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoCls',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntctPl',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlCd',name:'조작코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docStsCls',name:'문서상태구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errorCls',name:'ERROR구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emcTransCoId',name:'EMC운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpctTransCoId',name:'DPCT운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoGrpClsCd',name:'사전정보그룹구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setGauceJobType',name:'setGauceJobType',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopinoIn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinCrryoutCls',name:'반입반출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cls',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'snd',name:'송신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcv',name:'수신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDes',name:'송신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes',name:'수신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes2',name:'수신자DES2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndId',name:'송신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFrom',name:'운송구간FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFromNm',name:'운송구간FROM명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstTo',name:'운송구간TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstToNm',name:'운송구간TO명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtmMint',name:'반출입일시분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCntSht',name:'운송수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFrtcarNo',name:'차량번호화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFull',name:'차량번호FULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'차량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoCd',name:'운송사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suitCoTransCoNm',name:'소송업체운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세운송차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisPosInfo',name:'샤시위치정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPoint',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPointCont',name:'출발지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arv',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvCont',name:'도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArv',name:'최종도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArvCont',name:'최종도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoCd',name:'입주사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoNm',name:'입주사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizTyp',name:'SIZETYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCls',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtCstmclrncExyn',name:'직통관유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzTemper',name:'냉동온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temperCls',name:'온도구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'OVER_LENGTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'OVER_WIDTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'OVER_HEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlVsslPortcnt',name:'터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPort',name:'양하항구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNo',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayRettlPassYn',name:'XRAY검색기통과여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'iccntctPic',name:'IC연락담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iccntctPl',name:'IC연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslArrvlportYr',name:'모선입항년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCls',name:'TS구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hanjinSelfCls',name:'한진자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfCls',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCoCd',name:'송신업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDd',name:'수탁일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDtm',name:'수탁일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminal',name:'착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminalVssl',name:'착역선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pusanjinHousCd',name:'부산진단지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCls',name:'철송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadIntendCls',name:'철송예정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarCls',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'icdmoveCls',name:'ICD이동구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoCls',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntctPl',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlCd',name:'조작코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docStsCls',name:'문서상태구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errorCls',name:'ERROR구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emcTransCoId',name:'EMC운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpctTransCoId',name:'DPCT운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoGrpClsCd',name:'사전정보그룹구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setGauceJobType',name:'setGauceJobType',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopinoIn2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinCrryoutCls',name:'반입반출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cls',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'snd',name:'송신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcv',name:'수신자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDes',name:'송신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes',name:'수신자DES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDes2',name:'수신자DES2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndId',name:'송신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvId',name:'수신자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFrom',name:'운송구간FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFromNm',name:'운송구간FROM명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstTo',name:'운송구간TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstToNm',name:'운송구간TO명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtmMint',name:'반출입일시분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCntSht',name:'운송수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFrtcarNo',name:'차량번호화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFull',name:'차량번호FULL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'차량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoCd',name:'운송사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suitCoTransCoNm',name:'소송업체운송사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세운송차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisPosInfo',name:'샤시위치정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPoint',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPointCont',name:'출발지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arv',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvCont',name:'도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArv',name:'최종도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalArvCont',name:'최종도착지내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoCd',name:'입주사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liveCoNm',name:'입주사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizTyp',name:'SIZETYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULLEMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutCls',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtCstmclrncExyn',name:'직통관유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzTemper',name:'냉동온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temperCls',name:'온도구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'OVER_LENGTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'OVER_WIDTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'OVER_HEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlVsslPortcnt',name:'터미널모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPort',name:'양하항구',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNo',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'DO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayRettlPassYn',name:'XRAY검색기통과여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'iccntctPic',name:'IC연락담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iccntctPl',name:'IC연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslArrvlportYr',name:'모선입항년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCls',name:'TS구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hanjinSelfCls',name:'한진자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfCls',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCoCd',name:'송신업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDd',name:'수탁일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustDtm',name:'수탁일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminal',name:'착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teminalVssl',name:'착역선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pusanjinHousCd',name:'부산진단지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCls',name:'철송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadIntendCls',name:'철송예정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarCls',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'icdmoveCls',name:'ICD이동구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoCls',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntctPl',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlCd',name:'조작코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docStsCls',name:'문서상태구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errorCls',name:'ERROR구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emcTransCoId',name:'EMC운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpctTransCoId',name:'DPCT운송사ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'CRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarNo',name:'신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoGrpClsCd',name:'사전정보그룹구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setGauceJobType',name:'setGauceJobType',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lastCarInOutDTO',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryinCrryoutCls',name:'반입반출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFull',name:'차량번호FULL',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclIdCardNo',name:'차량ID번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.edimgnt.RetrieveCarryInAndCarryOutIntendEdiInformationForceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_resultsCopinoOut","key":"OUT_DS1"},{"id":"ds_resultsCopinoIn","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_resultsCopinoOut","key":"OUT_DS1"},{"id":"ds_resultsCopinoIn","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.lo.edimgnt.RetrieveCarryInAndCarryOutIntendEdiInformationForceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_resultsCopinoOut2","key":"OUT_DS1"},{"id":"ds_resultsCopinoIn2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_resultsCopinoOut2","key":"OUT_DS1"},{"id":"ds_resultsCopinoIn2","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'scwin.sbm_retrieve2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.edimgnt.SaveCarryInAndCarryOutIntendEdiInformationForceCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_resultsCopinoOut2","key":"IN_DS1"},{"id":"ds_resultsCopinoIn2","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve3',action:'/ds.lo.edimgnt.RetrieveLastCarInOutCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_lastCarInOutDTO","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_lastCarInOutDTO","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve3_submitdone','ev:submiterror':'scwin.sbm_retrieve3_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.arrRtnVal = [];
scwin.gv_strExistTF = "";
scwin.arrParent = [];
scwin.gv_userClsCd = "";
scwin.gv_clntNo = "";
scwin.gv_clntNm = "";
scwin.dateStr = "";
scwin.dateTime = "";
scwin.gv_userId = "";
scwin.btnFlag = "";
scwin.rowFlag = "";
scwin.hid_odrNo1 = "";
scwin.hid_odrNo2 = "";
scwin.hid_seq1 = "";
scwin.hid_seq2 = "";
scwin.hid_crryinCrryoutCls1 = "";
scwin.hid_crryinCrryoutCls2 = "";
scwin.hid_crryinoutCls1 = "";
scwin.hid_crryinoutCls2 = "";
scwin.hid_sndClsCd1 = "";
scwin.hid_sndClsCd2 = "";
scwin.hid_transCntSht1 = "";
scwin.hid_transCntSht2 = "";
scwin.hid_transDstFromNm1 = "";
scwin.hid_transDstToNm1 = "";
scwin.hid_transDstFromWrkPlCd1 = "";
scwin.hid_startPoint1 = "";
scwin.hid_rcv1 = "";
scwin.hid_rcv2 = "";
scwin.hid_crryinoutDtmMint1 = "";
scwin.hid_crryinoutDtmMint2 = "";
scwin.hid_transDstToNm2 = "";
scwin.hid_transDstFromNm2 = "";
scwin.hid_transDstToWrkPlCd2 = "";
scwin.hid_sizTyp1 = "";
scwin.hid_sizTyp2 = "";
scwin.hid_temperCls2 = "";
scwin.txt_transDstFromNm1 = "";
scwin.txt_transDstToNm2 = "";
scwin.txt_mchtNm1 = "";
scwin.txt_mchtNm2 = "";
scwin.ed_srchSelfTransClntNoHide = "";
scwin.EDI_SND_CLS_CD_SND_WAIT = "0";
scwin.EDI_SND_CLS_CD_SND_COMPLETE = "1";
scwin.EDI_SND_CLS_CD_LATER_SND = "3";
scwin.EDI_SND_CLS_CD_IMPITEM_WARN = "4";
scwin.EDI_DOC_STS_CLS_ORIG = "9";
scwin.EDI_DOC_STS_CLS_CHG = "4";
scwin.EDI_FULL_EMPTY_CLS_FULL = "5";
scwin.EDI_GRPCD_TM = "T";
scwin.EDI_GRPCD_LG = "L";
scwin.EDI_GRPCD_KYUNGIN_ICD = "K";
scwin.WRK_STP_CD_RAILROAD = "R";
scwin.WRK_PL_CLS_CD_PORT = "P";
scwin.EDI_TEMPER_CLS_DRY = "DRY";
scwin.EDI_TEMPER_CLS_CEL = "CEL";
scwin.YN_YES = "Y";
scwin.weekday = "";
scwin.curDtm = "";
scwin.userClsCd = "";
scwin.strEmc = "";
scwin.strId = "";
scwin.stref = "";
scwin.strCurYear = "";
scwin.onpageload = async function () {
  scwin.gv_userClsCd = $c.ses.getUserClsCd();
  scwin.gv_clntNo = $c.ses.getClntNo();
  scwin.gv_clntNm = $c.ses.getClntNm();
  scwin.gv_userId = $c.ses.getUserId();
  scwin.dateStr = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.dateTime = WebSquare.date.getCurrentServerDate("HHmm");
  scwin.strCurYear = scwin.dateStr.substring(0, 4);
  scwin.userClsCd = scwin.gv_userClsCd;
  let params = $c.data.getParameter($p);
  if (params != null) {
    scwin.strEmc = params["strEmc"] || "";
    scwin.strId = params["strId"] || "";
    scwin.stref = params["stref"] || "";
  }
  scwin.weekday = $c.gus.cfGetDayOfWeek($p);
  scwin.curDtm = WebSquare.date.getCurrentServerDate("yyyyMMddHHmm");
  scwin.f_onLoad();
};
scwin.onUdcCompleted = async function () {};
scwin.f_onLoad = async function () {
  let v_strRegNo = $c.data.getParameter($p) != null ? $c.data.getParameter($p)["strRegNo"] || "" : "";
  let strEmc1 = scwin.strEmc;
  let strId1 = scwin.strId;
  let stref1 = scwin.stref;
  let curDate = scwin.dateStr;
  ds_resultsCopinoOut.removeAll();
  ds_resultsCopinoOut.insertRow(0);
  ds_resultsCopinoIn.removeAll();
  ds_resultsCopinoIn.insertRow(0);
  scwin.f_defaultValue();
  if (stref1 == "M") {
    chk_crryInCopino.setValue("Y");
    $c.gus.cfEnableObjects($p, [tb_crryInCopino]);
    $c.gus.cfDisableObjects($p, [tb_crryOutCopino]);
    ds_resultsCopinoOut.removeAll();
    ed_tmlVsslPortcnt2.setValue("ODEM" + curDate.substring(4, 6));
    ed_dchrPort2.setValue("ZZZZZ");
  } else {
    chk_crryOutCopino.setValue("Y");
    $c.gus.cfEnableObjects($p, [tb_crryOutCopino]);
    $c.gus.cfDisableObjects($p, [tb_crryInCopino]);
    ds_resultsCopinoIn.removeAll();
  }
  if ("" != v_strRegNo) {
    let txt = "";
    let parts = v_strRegNo.split("-");
    for (let i = 0; i < parts.length; i++) {
      txt += parts[i];
    }
    let pCode = txt;
    let pName = "";
    let pClose = "T";
    let pAllSearch = "F";
    let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveClntNoFind', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, pAllSearch, "");
    if (rtnList != null) {
      scwin.ed_srchSelfTransClntNoHide = rtnList[0];
    }
    if (rtnList == "N/A") {
      scwin.ed_srchSelfTransClntNoHide = "";
      await $c.win.alert($p, "DPCT 거래처 등록을 확인해주세요, \n 자가담당자에게 거래처등록을 요청하세요");
      $c.gus.cfDisableObjects($p, [ed_vehclIdCardNo, ed_cntrNo]);
      $c.gus.cfDisableBtn($p, [btnCreate, btnSave, btnSelect]);
    }
  }
  lc_selfCls2.setValue("Y");
  lc_selfCls2.setDisabled(true);
  ed_emcId1.setValue(scwin.strEmc);
  ed_emcId2.setValue(scwin.strEmc);
  ed_dpctTransCoId1.setValue(scwin.gv_userId);
  ed_dpctTransCoId2.setValue(scwin.gv_userId);
  ed_transDstFrom1.setValue("5P01");
  ed_transDstTo2.setValue("5P01");
  ed_transDstFrom1.setDisabled(true);
  ed_transDstTo2.setDisabled(true);
  $c.gus.cfDisableObjects($p, [img_transDstFromNm1]);
  $c.gus.cfDisableObjects($p, [img_transDstToNm2]);
  acb_fullEmptyClsCd2.setValue("4");
  $c.gus.cfDisableObjects($p, [acb_fullEmptyClsCd2]);
};
scwin.f_defaultValue = async function () {
  scwin.hid_odrNo1 = "9999999999999";
  scwin.hid_odrNo2 = "9999999999999";
  scwin.hid_seq1 = "0";
  scwin.hid_seq2 = "0";
  scwin.hid_crryinCrryoutCls1 = "1";
  scwin.hid_crryinCrryoutCls2 = "2";
  scwin.hid_crryinoutCls1 = "1";
  scwin.hid_crryinoutCls2 = "2";
  ed_vsslArrvlportYr1.setValue(scwin.strCurYear);
  ed_vsslArrvlportYr2.setValue(scwin.strCurYear);
  scwin.hid_sndClsCd1 = scwin.EDI_SND_CLS_CD_SND_WAIT;
  scwin.hid_sndClsCd2 = scwin.EDI_SND_CLS_CD_SND_WAIT;
  scwin.hid_transCntSht1 = "3";
  scwin.hid_transCntSht2 = "3";
};
scwin.f_create = async function () {
  ds_resultsCopinoOut.removeAll();
  ds_resultsCopinoOut.insertRow(0);
  ds_resultsCopinoIn.removeAll();
  ds_resultsCopinoIn.insertRow(0);
  scwin.f_FieldClear();
  scwin.f_defaultValue();
  $c.gus.cfEnableBtnOnly($p, [btnCreate]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
  chk_crryInCopino.setValue("Y");
  chk_crryOutCopino.setValue("Y");
  scwin.f_switchTransYn(2);
  scwin.f_switchTransYn(1);
};
scwin.f_getNowTime = async function () {
  let now = new Date();
  let hour = now.getHours();
  if (hour <= 9) hour = "0" + hour;
  return hour;
};
scwin.f_Retrieve = async function (gubun) {
  if ((ed_vehclNoFrtcarNo1.getValue() == null || ed_vehclNoFrtcarNo1.getValue() == "") && (ed_cntrNo.getValue() == null || ed_cntrNo.getValue() == "")) {
    await $c.gus.cfAlertMsg($p, "조회시 차량 ID와 CNTR_NO 중 둘중에 하나 기입해야 합니다.");
    return false;
  }
  if (ed_vehclNoFrtcarNo1.getValue() != null && ed_vehclNoFrtcarNo1.getValue() != "") {
    if (ed_vehclNoFrtcarNo1.getValue().length != 8) {
      await $c.gus.cfAlertMsg($p, "조회시 차량 ID는  8자리를  기입해야 합니다.");
      return false;
    }
  }
  if (ed_cntrNo.getValue() != null && ed_cntrNo.getValue() != "") {
    if (ed_cntrNo.getValue().length != 11) {
      await $c.gus.cfAlertMsg($p, "조회시 컨테이너는 번호는 11자리를  기입해야 합니다.");
      return false;
    }
  }
  ds_search.set("vehclIdCardNo", ed_vehclNoFrtcarNo1.getValue());
  ds_search.set("cntrNo", ed_cntrNo.getValue());
  if (gubun == null || gubun == "" || gubun == 0) {
    ds_resultsCopinoOut.removeAll();
    ds_resultsCopinoIn.removeAll();
    scwin.btnFlag = "";
    scwin.rowFlag = "";
    await $c.sbm.execute($p, sbm_retrieve);
  } else {
    if (chk_crryInCopino.getValue() != "Y") {
      ds_resultsCopinoIn2.removeAll();
      if (chk_crryOutCopino.getValue() == "Y") {
        $c.gus.cfCopyDataSet($p, ds_resultsCopinoOut2, ds_resultsCopinoOut, "copyHeader=yes,rowFrom=1,rowCnt=1");
        await $c.sbm.execute($p, sbm_retrieve2);
      }
    }
    if (chk_crryOutCopino.getValue() != "Y") {
      ds_resultsCopinoOut2.removeAll();
      if (chk_crryInCopino.getValue() == "Y") {
        $c.gus.cfCopyDataSet($p, ds_resultsCopinoIn2, ds_resultsCopinoIn, "copyHeader=yes,rowFrom=1,rowCnt=1");
        await $c.sbm.execute($p, sbm_retrieve2);
      }
    }
  }
  if (ds_resultsCopinoOut.getRowCount() == 0) {
    ds_resultsCopinoOut.removeAll();
    ds_resultsCopinoOut.insertRow(0);
    scwin.f_defaultValue();
  } else if (ds_resultsCopinoIn.getRowCount() == 0) {
    ds_resultsCopinoIn.removeAll();
    ds_resultsCopinoIn.insertRow(0);
    scwin.f_defaultValue();
  } else if (ds_resultsCopinoIn.getRowCount() == 0 && ds_resultsCopinoOut.getRowCount() == 0) {
    ds_resultsCopinoOut.removeAll();
    ds_resultsCopinoOut.insertRow(0);
    ds_resultsCopinoIn.removeAll();
    ds_resultsCopinoIn.insertRow(0);
    scwin.f_defaultValue();
  }
  ed_transDstFrom1.setValue("5P01");
  ed_transDstTo2.setValue("5P01");
  acb_fullEmptyClsCd2.setValue("4");
  $c.gus.cfDisableObjects($p, [acb_fullEmptyClsCd2]);
};
scwin.f_validate = async function () {
  if (chk_crryOutCopino.getValue() == "Y") {
    if (ds_resultsCopinoOut.getRowCount() > 0 && !$c.gus.cfIsNull($p, ds_resultsCopinoOut.getCellData(0, "transDstFrom"))) {
      if ($c.gus.cfIsNull($p, acb_expimpClsCd1.getValue())) {
        await $c.win.alert($p, "수출입구분을 선택 하세요.");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_vehclNoFrtcarNo1.getValue())) {
        await $c.win.alert($p, "차량ID를 반드시 입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_tmlVsslPortcnt1.getValue())) {
        await $c.win.alert($p, "모선/항차를 반드시 입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_cntrNo1.getValue())) {
        await $c.win.alert($p, "컨테이너번호를 반드시 입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_shpCoCd1.getValue())) {
        await $c.win.alert($p, "OPERATOR를 반드시 입력하세요 .");
        return false;
      }
      if (!(ed_shpCoCd1.getValue() == "HML" || ed_shpCoCd1.getValue() == "EMC" || ed_shpCoCd1.getValue() == "ITS" || ed_shpCoCd1.getValue() == "EMS" || ed_shpCoCd1.getValue() == "EGH")) {
        await $c.win.alert($p, "EVER 관련 OPERATOR 코드만 입력가능합니다.");
        return false;
      }
      if ($c.gus.cfIsNull($p, acb_fullEmptyClsCd1.getValue())) {
        await $c.win.alert($p, "F/E를 반드시 선객하세요 .");
        return false;
      }
      if (acb_expimpClsCd1.getValue() == "I") {
        if ($c.gus.cfIsNull($p, ed_blNo1.getValue())) {
          await $c.win.alert($p, "BL/NO를 반드시 입력하세요 .");
          return false;
        }
        if ($c.gus.cfIsNull($p, ed_doNo1.getValue())) {
          await $c.win.alert($p, "DO/NO를 반드시 입력하세요 .");
          return false;
        }
      }
      if ($c.gus.cfIsNull($p, ica_crryinoutDt1.getValue())) {
        await $c.win.alert($p, "반입일시를   입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_crryinoutHh1.getValue())) {
        await $c.win.alert($p, "반입일시를   입력하세요 .");
        return false;
      }
      if (!$c.gus.cfIsNull($p, ed_transDstFrom1.getValue())) {
        scwin.hid_startPoint1 = ed_transDstFrom1.getValue();
        if (ed_transDstFrom1.getValue() == "6P42") {
          // TODO: ed_mchtCd1 mandatory 처리
        } else if (ed_transDstFrom1.getValue() == "6P14" || ed_transDstFrom1.getValue() == "6P12") {
          if (acb_fullEmptyClsCd2.getValue() == "4") {
            ed_cntrNo1.setValue("ZZZZ1234567");
          }
        }
      }
      if (!$c.gus.cfIsNull($p, ed_transDstFrom1.getValue())) {
        scwin.hid_rcv1 = ed_transDstFrom1.getValue();
      } else {
        scwin.hid_rcv1 = "";
      }
      if (ed_tmlVsslPortcnt1.getValue().length == 5) {
        ds_resultsCopinoOut.setCellData(0, "tmlVsslPortcnt", ed_tmlVsslPortcnt1.getValue().substring(0, 3) + " " + ed_tmlVsslPortcnt1.getValue().substring(3, 5));
      }
      scwin.hid_crryinoutDtmMint1 = ica_crryinoutDt1.getValue() + ed_crryinoutHh1.getValue();
      if (ds_resultsCopinoOut.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_TM && ds_resultsCopinoOut.getCellData(0, "vehclIdCardNo") == "") {
        await $c.gus.cfAlertMsg($p, "[사전정보그룹구분]이 터미널 일때 [차량ID카드번호]는 필수입니다");
        return false;
      }
      if (chk_crryOutCopino.getValue() == "Y") {
        $c.gus.cfCopyDataSet($p, ds_resultsCopinoOut, ds_resultsCopinoOut2, "copyHeader=yes,rowFrom=1,rowCnt=1");
      }
      if (chk_crryOutCopino.getValue() != "Y") {
        ds_resultsCopinoOut2.removeAll();
      }
      if (ed_vehclNoFull1.getValue().length != 9) {
        await $c.win.alert($p, "차량번호는 FULL NAME을 정확히 입력하세요1  예)경기98자1234");
        return false;
      } else {
        if (Number(ed_vehclNoFull1.getValue().substring(2, 4)) >= 0 && Number(ed_vehclNoFull1.getValue().substring(2, 4)) <= 99 && ed_vehclNoFull1.getValue().substring(2, 4).length == 2) {} else {
          await $c.win.alert($p, "세번째 네번째는 숫자이어야 합니다. ");
          return false;
        }
        if (Number(ed_vehclNoFull1.getValue().substring(5, 10)) >= 0 && Number(ed_vehclNoFull1.getValue().substring(5, 10)) <= 9999 && ed_vehclNoFull1.getValue().substring(5, 10).length == 4) {} else {
          await $c.win.alert($p, "끝에 네자리는 숫자이어야 합니다. ");
          return false;
        }
        let kk = ed_vehclNoFull1.getValue().substring(0, 2);
        if (kk == null) return false;
        for (let i = 0; i < kk.length; i++) {
          let c = kk.charCodeAt(i);
          if (!(0xAC00 <= c && c <= 0xD7A3 || 0x3131 <= c && c <= 0x318E)) {
            await $c.win.alert($p, "처음2자리 한글이어야 합니다.!!! ");
            return false;
          }
        }
        let kkk = ed_vehclNoFull1.getValue().substring(4, 5);
        if (kkk == null) return false;
        for (let i = 0; i < kkk.length; i++) {
          let c = kkk.charCodeAt(i);
          if (!(0xAC00 <= c && c <= 0xD7A3 || 0x3131 <= c && c <= 0x318E)) {
            await $c.win.alert($p, "다서번째는 한글이어야 합니다.!!! ");
            return false;
          }
        }
      }
      let validSizTypes1 = ["2210", "2270", "2232", "2251", "2264", "4310", "4370", "4332", "4351", "4364", "4510", "9510", "4532", "4350", "2250"];
      if (validSizTypes1.indexOf(ed_sizTyp1.getValue()) < 0) {
        await $c.win.alert($p, "SIZ/TYPE을 정확하게 입력하세요!!!");
        ed_sizTyp1.setFocus();
        return false;
      }
    }
  }
  if (chk_crryInCopino.getValue() == "Y") {
    if (ds_resultsCopinoIn.getRowCount() > 0 && !$c.gus.cfIsNull($p, ds_resultsCopinoIn.getCellData(0, "transDstTo"))) {
      if ($c.gus.cfIsNull($p, acb_expimpClsCd2.getValue())) {
        await $c.win.alert($p, "수출입구분을 선택 하세요.");
        return false;
      }
      if ($c.gus.cfIsNull($p, acb_drtCstmclrncExyn2.getValue())) {
        await $c.win.alert($p, "직통관 유류를   선택하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_vehclNoFrtcarNo2.getValue())) {
        await $c.win.alert($p, "차량ID를 반드시 입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_tmlVsslPortcnt2.getValue())) {
        await $c.win.alert($p, "모선/항차를 반드시 입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_cntrNo2.getValue())) {
        await $c.win.alert($p, "컨테이너번호를 반드시 입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_shpCoCd2.getValue())) {
        await $c.win.alert($p, "OPERATOR를 반드시 입력하세요 .");
        return false;
      }
      if (!(ed_shpCoCd2.getValue() == "HML" || ed_shpCoCd2.getValue() == "EMC" || ed_shpCoCd2.getValue() == "ITS" || ed_shpCoCd2.getValue() == "EMS" || ed_shpCoCd2.getValue() == "EGH")) {
        await $c.win.alert($p, "EVER 관련 OPERATOR 코드만 입력가능합니다.");
        return false;
      }
      if ($c.gus.cfIsNull($p, acb_fullEmptyClsCd2.getValue())) {
        await $c.win.alert($p, "F/E를 반드시 선객하세요 .");
        return false;
      }
      if (!$c.gus.cfIsNull($p, acb_expimpClsCd2.getValue()) && acb_expimpClsCd2.getValue() == "I") {
        if ($c.gus.cfIsNull($p, ed_blNo2.getValue())) {
          await $c.win.alert($p, "BL/NO를 반드시 입력하세요 .");
          return false;
        }
        if ($c.gus.cfIsNull($p, ed_doNo2.getValue())) {
          await $c.win.alert($p, "DO/NO를 반드시 입력하세요 .");
          return false;
        }
      } else if (!$c.gus.cfIsNull($p, acb_expimpClsCd2.getValue()) && acb_expimpClsCd2.getValue() == "E") {
        if ($c.gus.cfIsNull($p, ed_bookingNo2.getValue())) {
          await $c.win.alert($p, "BOOKING_NO를 반드시 입력하세요 .");
          return false;
        }
      }
      if ($c.gus.cfIsNull($p, ed_dchrPort2.getValue())) {
        await $c.win.alert($p, "양하항을   입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_totWt2.getValue()) || ed_totWt2.getValue() == "0") {
        await $c.win.alert($p, "정확한 중량을  입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ica_crryinoutDt2.getValue())) {
        await $c.win.alert($p, "반입일시를   입력하세요 .");
        return false;
      }
      if ($c.gus.cfIsNull($p, ed_crryinoutHh2.getValue())) {
        await $c.win.alert($p, "반입일시를   입력하세요 .");
        return false;
      }
      if (!$c.gus.cfIsNull($p, ed_transDstTo2.getValue())) {
        scwin.hid_rcv2 = ed_transDstTo2.getValue();
      } else {
        scwin.hid_rcv2 = "";
      }
      if (ed_tmlVsslPortcnt2.getValue().length == 5) {
        ds_resultsCopinoIn.setCellData(0, "tmlVsslPortcnt", ed_tmlVsslPortcnt2.getValue().substring(0, 3) + " " + ed_tmlVsslPortcnt2.getValue().substring(3, 5));
      }
      scwin.hid_crryinoutDtmMint2 = ica_crryinoutDt2.getValue() + ed_crryinoutHh2.getValue();
      if (ds_resultsCopinoIn.getCellData(0, "fullEmptyClsCd") == scwin.EDI_FULL_EMPTY_CLS_FULL && (ds_resultsCopinoIn.getCellData(0, "totWt") == "0" || ds_resultsCopinoIn.getCellData(0, "totWt") == "")) {
        await $c.gus.cfAlertMsg($p, "[E/F 구분]이 FULL 일때 [WEIGHT]는 필수입니다");
        return false;
      }
      if (ds_resultsCopinoIn.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_TM && ds_resultsCopinoIn.getCellData(0, "vehclIdCardNo") == "") {
        await $c.gus.cfAlertMsg($p, "[사전정보그룹구분]이 터미널 일때 [차량ID카드번호]는 필수입니다");
        return false;
      }
      if (ds_resultsCopinoIn.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_TM && ds_resultsCopinoIn.getCellData(0, "tmlVsslPortcnt") == "") {
        await $c.gus.cfAlertMsg($p, "[사전정보그룹구분]이 터미널 일때 [모선/항차]는 필수입니다");
        return false;
      }
      if (chk_crryInCopino.getValue() == "Y") {
        $c.gus.cfCopyDataSet($p, ds_resultsCopinoIn, ds_resultsCopinoIn2, "copyHeader=yes,rowFrom=1,rowCnt=1");
      }
      if (chk_crryInCopino.getValue() != "Y") {
        ds_resultsCopinoIn2.removeAll();
      }
      if (ed_vehclNoFull2.getValue().length != 9) {
        await $c.win.alert($p, "차량번호는 FULL NAME을 정확히 입력하세요  예)경기98자1234");
        return false;
      } else {
        if (Number(ed_vehclNoFull2.getValue().substring(2, 4)) >= 0 && Number(ed_vehclNoFull2.getValue().substring(2, 4)) <= 99 && ed_vehclNoFull2.getValue().substring(2, 4).length == 2) {} else {
          await $c.win.alert($p, "세번째 네번째는 숫자이어야 합니다. ");
          return false;
        }
        if (Number(ed_vehclNoFull2.getValue().substring(5, 10)) >= 0 && Number(ed_vehclNoFull2.getValue().substring(5, 10)) <= 9999 && ed_vehclNoFull2.getValue().substring(5, 10).length == 4) {} else {
          await $c.win.alert($p, "끝에 네자리는 숫자이어야 합니다. ");
          return false;
        }
        let kk = ed_vehclNoFull2.getValue().substring(0, 2);
        if (kk == null) return false;
        for (let i = 0; i < kk.length; i++) {
          let c = kk.charCodeAt(i);
          if (!(0xAC00 <= c && c <= 0xD7A3 || 0x3131 <= c && c <= 0x318E)) {
            await $c.win.alert($p, "처음2자리 한글이어야 합니다.!!! ");
            return false;
          }
        }
        let kkk = ed_vehclNoFull2.getValue().substring(4, 5);
        if (kkk == null) return false;
        for (let i = 0; i < kkk.length; i++) {
          let c = kkk.charCodeAt(i);
          if (!(0xAC00 <= c && c <= 0xD7A3 || 0x3131 <= c && c <= 0x318E)) {
            await $c.win.alert($p, "다서번째는 한글이어야 합니다.!!! ");
            return false;
          }
        }
      }
      let validSizTypes2 = ["2210", "2270", "2232", "2251", "2264", "4310", "4370", "4332", "4351", "4364", "4510", "9510", "4532", "4350", "2250"];
      if (validSizTypes2.indexOf(ed_sizTyp2.getValue()) >= 0) {
        let sizWeightMap = {
          "2210": "2400",
          "2232": "3020",
          "2251": "2330",
          "4310": "4000",
          "4332": "4760",
          "4351": "4060",
          "4510": "4200",
          "9510": "4700",
          "4532": "4760",
          "4350": "4060",
          "2250": "2330"
        };
        if (sizWeightMap[ed_sizTyp2.getValue()]) {
          ed_totWt2.setValue(sizWeightMap[ed_sizTyp2.getValue()]);
        }
      } else {
        await $c.win.alert($p, "SIZ/TYPE을 정확하게 입력하세요!!!");
        ed_sizTyp2.setFocus();
        return false;
      }
    }
  }
  if (ed_sizTyp2.getValue() == "2232" || ed_sizTyp2.getValue() == "4332" || ed_sizTyp2.getValue() == "4532") {
    if (ed_frzTemper2.getValue() == "") {
      await $c.win.alert($p, "냉동컨테이너 입력시 온도는 필수 입력 사항입니다.");
      ed_frzTemper2.setFocus();
    }
    if (ed_rmk3.getValue() == "") {
      await $c.win.alert($p, "냉동컨테이너 입력시 DRY/CEL은 필수 입력 사항입니다.");
      ed_rmk3.setFocus();
    }
  }
  if (ed_shpCoCd1.getValue() == "HML" || ed_shpCoCd1.getValue() == "EMC" || ed_shpCoCd1.getValue() == "ITS" || ed_shpCoCd1.getValue() == "EMS" || ed_shpCoCd1.getValue() == "EGH") {
    if (acb_expimpClsCd1.getValue() == "I") {
      if (ed_doNo1.getValue() == "" || $c.gus.cfIsNull($p, ed_doNo1.getValue())) {
        await $c.gus.cfAlertMsg($p, "D/O NO 는 필수입니다");
        return false;
      }
      if (ed_blNo1.getValue() == "" || $c.gus.cfIsNull($p, ed_blNo1.getValue())) {
        await $c.gus.cfAlertMsg($p, "BL NO 는 필수입니다");
        return false;
      }
    }
  }
  if (ed_shpCoCd2.getValue() == "HML" || ed_shpCoCd2.getValue() == "EMC" || ed_shpCoCd2.getValue() == "ITS" || ed_shpCoCd2.getValue() == "EMS" || ed_shpCoCd2.getValue() == "EGH") {
    if (acb_expimpClsCd2.getValue() == "I") {
      if (ed_doNo2.getValue() == "" || $c.gus.cfIsNull($p, ed_doNo2.getValue())) {
        await $c.gus.cfAlertMsg($p, "D/O NO 는 필수입니다");
        return false;
      }
      if (ed_blNo2.getValue() == "" || $c.gus.cfIsNull($p, ed_blNo2.getValue())) {
        await $c.gus.cfAlertMsg($p, "BL NO 는 필수입니다");
        return false;
      }
    }
  }
  return true;
};
scwin.f_save = async function () {
  let weekdayVal = scwin.weekday;
  let curDtmVal = scwin.curDtm;
  let curTime = curDtmVal.substring(8);
  let userClsCdVal = scwin.userClsCd;
  if (ed_transDstTo1.getValue() == "6C01" || ed_transDstFrom2.getValue() == "6C01") {
    if (userClsCdVal != "01") {
      if (weekdayVal == "SUN") {
        await $c.gus.cfAlertMsg($p, "일요일엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
        return false;
      } else if (weekdayVal == "SAT") {
        if (curTime > "1200") {
          await $c.gus.cfAlertMsg($p, "토요일 12시 이후엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
          return false;
        }
      } else {
        if (curTime > "1730") {
          await $c.gus.cfAlertMsg($p, "평일 17시 30분 이후엔 COPINO전송을 하실수 없습니다. \n 문의 사항은 담당 배차에게 문의주세요.");
          return false;
        }
      }
    }
  }
  if ($c.gus.cfIsNull($p, ds_resultsCopinoOut.getCellData(0, "transDstFrom")) && $c.gus.cfIsNull($p, ds_resultsCopinoIn.getCellData(0, "transDstTo"))) {
    await $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다");
    return;
  }
  if (!(await scwin.f_validate())) {
    return;
  }
  if (ds_resultsCopinoOut2.getRowCount() > 0) {
    if ($c.gus.cfIsNull($p, ds_resultsCopinoOut2.getCellData(0, "cls"))) {
      ds_resultsCopinoOut2.setCellData(0, "cls", "T");
    }
    if ($c.gus.cfIsNull($p, ds_resultsCopinoOut2.getCellData(0, "snd"))) {
      ds_resultsCopinoOut2.setCellData(0, "snd", "DBE");
    }
    if ($c.gus.cfIsNull($p, ds_resultsCopinoOut2.getCellData(0, "rcv"))) {
      ds_resultsCopinoOut2.setCellData(0, "rcv", "DBE");
    }
    if ($c.gus.cfIsNull($p, ds_resultsCopinoOut2.getCellData(0, "sndClsCd"))) {
      ds_resultsCopinoOut2.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_SND_WAIT);
    }
    if (ds_resultsCopinoOut2.getCellData(0, "docStsCls") == "") {
      ds_resultsCopinoOut2.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopinoOut2.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopinoOut2.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    acb_selfCls1.setValue("Y");
    ds_resultsCopinoOut2.setCellData(0, "selfCls", "Y");
    scwin.hid_crryinoutDtmMint1 = ica_crryinoutDt1.getValue() + ed_crryinoutHh1.getValue();
    ds_resultsCopinoOut2.setCellData(0, "setGauceJobType", "2");
    ds_resultsCopinoOut2.setCellData(0, "emcTransCoId", scwin.strEmc);
  }
  if (ds_resultsCopinoIn2.getRowCount() > 0) {
    if ($c.gus.cfIsNull($p, ds_resultsCopinoIn2.getCellData(0, "snd"))) {
      ds_resultsCopinoIn2.setCellData(0, "snd", "DBE");
    }
    if ($c.gus.cfIsNull($p, ds_resultsCopinoIn2.getCellData(0, "sndClsCd"))) {
      ds_resultsCopinoIn2.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_SND_WAIT);
    }
    if (ds_resultsCopinoIn2.getCellData(0, "docStsCls") == "") {
      ds_resultsCopinoIn2.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopinoIn2.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopinoIn2.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    if (ds_resultsCopinoIn2.getCellData(0, "temperCls") != "") {
      if (ed_frzTemper2.getValue().trim() == null || ed_frzTemper2.getValue().trim() == "") {
        ds_resultsCopinoIn2.setCellData(0, "temperCls", scwin.EDI_TEMPER_CLS_DRY);
      } else {
        ds_resultsCopinoIn2.setCellData(0, "temperCls", scwin.EDI_TEMPER_CLS_CEL);
      }
    } else {
      ds_resultsCopinoIn2.setCellData(0, "temperCls", "");
    }
    lc_selfCls2.setValue("Y");
    ds_resultsCopinoIn2.setCellData(0, "selfCls", "Y");
    scwin.hid_crryinoutDtmMint2 = ica_crryinoutDt2.getValue() + ed_crryinoutHh2.getValue();
    ds_resultsCopinoIn2.setCellData(0, "setGauceJobType", "2");
    ds_resultsCopinoIn2.setCellData(0, "emcTransCoId", scwin.strEmc);
    ds_resultsCopinoIn2.setCellData(0, "dpctTransCoId", scwin.strId);
  }
  scwin.hid_crryinoutDtmMint2 = ica_crryinoutDt2.getValue() + ed_crryinoutHh2.getValue();
  if (chk_crryOutCopino.getValue() == "Y") {
    if (!$c.gus.cfIsNull($p, ed_cntrNo1.getValue()) && ed_cntrNo1.getValue() != "") {
      if (!$c.gus.cf_CheckCntrNo($p, ed_cntrNo1.getValue())) {
        await $c.gus.cfAlertMsg($p, "유효한 컨테이너번호가 아닙니다");
      }
    }
  }
  if (chk_crryInCopino.getValue() == "Y") {
    if (!$c.gus.cfIsNull($p, ed_cntrNo2.getValue()) && ed_cntrNo2.getValue() != "") {
      if (!$c.gus.cf_CheckCntrNo($p, ed_cntrNo2.getValue())) {
        await $c.gus.cfAlertMsg($p, "유효한 컨테이너번호가 아닙니다");
      }
    }
  }
  if (chk_crryInCopino.getValue() != "Y" && chk_crryOutCopino.getValue() != "Y") {
    await $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다~~~");
  } else {
    let chk = await $c.win.confirm($p, "저장하시겠습니까?");
    if (chk) {
      await $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_rtnValue = async function () {
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.f_WinClose = async function () {
  scwin.arrRtnVal[0] = "N/A";
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  let pWhere;
  let pTitle;
  switch (disGubun) {
    case 0:
      pWhere = ",,,," + scwin.YN_YES;
      pTitle = "작업장(반출),작업장코드,작업장명";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfoEdi_ever', pCode.trim(), pName.trim(), pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_transDstFrom1, scwin.hid_transDstFromNm1);
      if (!$c.gus.cfIsNull($p, ed_transDstFrom1.getValue())) {
        scwin.hid_startPoint1 = ed_transDstFrom1.getValue();
      }
      if (!$c.gus.cfIsNull($p, ed_transDstFrom1.getValue())) {
        scwin.hid_rcv1 = ed_transDstFrom1.getValue();
      } else {
        scwin.hid_rcv1 = "";
      }
      break;
    case 1:
      pWhere = ",,,," + scwin.YN_YES;
      pTitle = "작업장(반입),작업장코드,작업장명";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfoEdi_ever', pCode.trim(), pName.trim(), pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_transDstTo2, scwin.hid_transDstToNm2);
      if (!$c.gus.cfIsNull($p, ed_transDstTo2.getValue())) {
        scwin.hid_rcv2 = ed_transDstTo2.getValue();
      } else {
        scwin.hid_rcv2 = "";
      }
      break;
    case 2:
      pWhere = "";
      pTitle = "작업장(반출),작업장코드,작업장명";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo2', pCode.trim(), pName.trim(), pClose, null, "작업장코드,작업장명", null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_transDstTo1, scwin.hid_transDstToNm1);
      break;
    case 3:
      pWhere = "";
      pTitle = "작업장(반입),작업장코드,작업장명";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo2', pCode.trim(), pName.trim(), pClose, null, "작업장코드,작업장명", null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_transDstFrom2, scwin.hid_transDstFromNm2);
      break;
    case 4:
      if (ds_resultsCopinoOut.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_LG) {
        pWhere = "OSIDE_CD2," + ds_resultsCopinoOut.getCellData(0, "transDstFrom") + ",RCVR,COPINO";
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode.trim(), pName.trim(), pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, null);
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ed_mchtCd1.setValue(rtnList[2]);
          scwin.txt_mchtNm1 = rtnList[3];
        } else {
          ed_mchtCd1.setValue("");
          scwin.txt_mchtNm1 = "";
        }
      } else {
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveBilgMchtList', pCode.trim(), pName.trim(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
        $c.gus.cfSetReturnValue($p, rtnList, ed_mchtCd1, scwin.txt_mchtNm1);
      }
      break;
    case 5:
      pWhere = "OSIDE_CD1,,CNTRT,COPINO";
      pTitle = "SIZE/TYPE,코드,SIZE/TYPE";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode.trim(), pName.trim(), pClose, null, "코드,SIZE/TYPE", null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_sizTyp1, scwin.hid_sizTyp1);
      break;
    case 6:
      pWhere = "OSIDE_CD1,,CNTRT,COPINO";
      pTitle = "SIZE/TYPE,코드,SIZE/TYPE";
      pClose = "T";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode.trim(), pName.trim(), pClose, null, "코드,SIZE/TYPE", null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_sizTyp2, scwin.hid_sizTyp2);
      if (!$c.gus.cfIsNull($p, scwin.hid_sizTyp2)) {
        if (scwin.hid_sizTyp2.substr(2, 2) == "RF" || scwin.hid_sizTyp2.substr(2, 2) == "RH") {
          ed_frzTemper2.setDisabled(false);
          scwin.hid_temperCls2 = "CEL";
        } else {
          ed_frzTemper2.setValue("");
          ed_frzTemper2.setDisabled(true);
          scwin.hid_temperCls2 = "";
        }
      }
      break;
    case 7:
      if ($c.gus.cfIsNull($p, ed_transDstFrom1.getValue())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["CY"]);
        return;
      }
      pWhere = "OSIDE_CD1," + ed_transDstFrom1.getValue() + ",OPRCD";
      pTitle = scwin.txt_transDstFromNm1 + " OPERATOR,CODE,LINE";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode.trim(), pName.trim(), pClose, null, "CODE,LINE", null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_shpCoCd1, null);
      break;
    case 8:
      if ($c.gus.cfIsNull($p, ed_transDstTo2.getValue())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["CY"]);
        return;
      }
      pWhere = "OSIDE_CD1," + ed_transDstTo2.getValue() + ",OPRCD";
      pTitle = scwin.txt_transDstToNm2 + " OPERATOR,CODE,LINE";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode.trim(), pName.trim(), pClose, null, "CODE,LINE", null, null, pWhere, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_shpCoCd2, null);
      break;
    case 9:
      pTitle = "항구,항구코드,항구명";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrievePortInfo', pCode.trim(), pName.trim(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_dchrPort2, null);
      break;
    case 10:
      pTitle = "컨테이너(반출),컨테이너번호,오더번호";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveConteinerNo', pCode.trim(), pName.trim(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_cntrNo1, null);
      break;
    case 11:
      pTitle = "컨테이너(반입),컨테이너번호,오더번호";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveConteinerNo', pCode.trim(), pName.trim(), pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, pTitle);
      $c.gus.cfSetReturnValue($p, rtnList, ed_cntrNo2, null);
      break;
    case 12:
      if (ds_resultsCopinoIn.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_LG) {
        pWhere = "OSIDE_CD2," + ds_resultsCopinoIn.getCellData(0, "transDstFrom") + ",RCVR,COPINO";
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, null);
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          ed_mchtCd2.setValue(rtnList[2]);
          scwin.txt_mchtNm2 = rtnList[3];
        } else {
          ed_mchtCd2.setValue("");
          scwin.txt_mchtNm2 = "";
        }
      } else {
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveBilgMchtList', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
        $c.gus.cfSetReturnValue($p, rtnList, ed_mchtCd2, scwin.txt_mchtNm2);
      }
      break;
  }
  $c.gus.cfRefreshMandSign($p);
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_chkOpenCommonPopUp2 = async function (inObj, pairObj, disGubun, isCode, refObj) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    $c.gus.cfClearPairObj($p, refObj);
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  $c.gus.cfClearPairObj($p, refObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tb_srchCond);
  ica_crryinoutDt1.setValue(scwin.dateStr);
  ica_crryinoutDt2.setValue(scwin.dateStr);
  ed_crryinoutHh1.setValue(scwin.dateTime);
  ed_crryinoutHh2.setValue(scwin.dateTime);
};
scwin.f_switchTransYn = async function (gubun) {
  if (gubun == 1) {
    if (chk_crryOutCopino.getValue() == "Y") {
      ds_resultsCopinoOut.removeAll();
      ds_resultsCopinoOut.insertRow(0);
      $c.gus.cfEnableObjects($p, [tb_crryOutCopino]);
      ed_transDstFrom1.setValue("5P01");
      ed_transDstFrom1.setDisabled(true);
      $c.gus.cfDisableObjects($p, [img_transDstFromNm1]);
    } else {
      $c.gus.cfDisableObjects($p, [tb_crryOutCopino]);
      ds_resultsCopinoOut.removeAll();
      ds_resultsCopinoIn.removeAll();
      ds_resultsCopinoOut2.removeAll();
      ed_transDstFrom1.setValue("5P01");
    }
  } else if (gubun == 2) {
    if (chk_crryInCopino.getValue() == "Y") {
      ds_resultsCopinoIn.removeAll();
      ds_resultsCopinoIn.insertRow(0);
      $c.gus.cfEnableObjects($p, [tb_crryInCopino]);
      ed_transDstTo2.setValue("5P01");
      ed_transDstTo2.setDisabled(true);
      $c.gus.cfDisableObjects($p, [img_transDstToNm2]);
    } else {
      $c.gus.cfDisableObjects($p, [tb_crryInCopino]);
      ds_resultsCopinoIn.removeAll();
      ds_resultsCopinoOut.removeAll();
      ds_resultsCopinoIn2.removeAll();
      ed_transDstTo2.setValue("5P01");
    }
  }
  scwin.f_defaultValue();
};
scwin.f_switch = async function () {
  if (chk_damage.getValue() == "Y") {
    ed_dchrPort2.setValue("ODDMD");
  } else {
    ed_dchrPort2.setValue("");
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.rowFlag = "";
  $c.gus.cfEnableBtnOnly($p, [btnCreate, btnSave]);
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve2_submitdone = async function (e) {
  scwin.rowFlag = "";
  $c.gus.cfEnableBtnOnly($p, [btnCreate, btnSave]);
  if (chk_crryInCopino.getValue() != "Y") {
    ds_resultsCopinoIn2.removeAll();
    if (chk_crryOutCopino.getValue() == "Y") {
      $c.gus.cfCopyDataSet($p, ds_resultsCopinoOut2, ds_resultsCopinoOut, "copyHeader=yes,rowFrom=1,rowCnt=1");
    }
  }
  if (chk_crryOutCopino.getValue() != "Y") {
    ds_resultsCopinoOut2.removeAll();
    if (chk_crryInCopino.getValue() == "Y") {
      $c.gus.cfCopyDataSet($p, ds_resultsCopinoIn2, ds_resultsCopinoIn, "copyHeader=yes,rowFrom=1,rowCnt=1");
    }
  }
};
scwin.sbm_retrieve2_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve("1");
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve3_submitdone = async function (e) {};
scwin.sbm_retrieve3_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_resultsCopinoOut_onloadcompleted = async function (e) {
  let rowCnt = ds_resultsCopinoOut.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  for (let i = 0; i < ds_resultsCopinoOut.getRowCount(); i++) {
    td_sndDtHh1.setValue((ds_resultsCopinoOut.getCellData(0, "sndDt") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_resultsCopinoOut.getCellData(0, "sndDt"), "####/##/##")) + " " + (ds_resultsCopinoOut.getCellData(0, "sndHh") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_resultsCopinoOut.getCellData(0, "sndHh"), "##:##:##")));
    if (ds_resultsCopinoOut.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      td_sndClsCd1.setValue("전송완료");
    } else if (ds_resultsCopinoOut.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_LATER_SND) {
      td_sndClsCd1.setValue("사후전송");
    } else if (ds_resultsCopinoOut.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_IMPITEM_WARN) {
      td_sndClsCd1.setValue("필수입력오류");
    } else if (ds_resultsCopinoOut.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_WAIT) {
      td_sndClsCd1.setValue("전송대기");
    } else {
      td_sndClsCd1.setValue("미등록");
    }
    if (ds_resultsCopinoOut.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopinoOut.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD) {
      $c.gus.cfDisableObjects($p, [ed_vehclNoFrtcarNo1]);
    }
    let crryinoutDtmMint1Val = ds_resultsCopinoOut.getCellData(0, "crryinoutDtmMint");
    if (crryinoutDtmMint1Val && crryinoutDtmMint1Val.length >= 8) {
      ica_crryinoutDt1.setValue(crryinoutDtmMint1Val.substring(0, 8));
      if (crryinoutDtmMint1Val.length >= 12) {
        ed_crryinoutHh1.setValue(crryinoutDtmMint1Val.substring(8, 12));
      }
    }
  }
};
scwin.ds_resultsCopinoIn_onloadcompleted = async function (e) {
  let rowCnt = ds_resultsCopinoIn.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  for (let i = 0; i < ds_resultsCopinoIn.getRowCount(); i++) {
    td_sndDtHh2.setValue((ds_resultsCopinoIn.getCellData(0, "sndDt") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_resultsCopinoIn.getCellData(0, "sndDt"), "####/##/##")) + " " + (ds_resultsCopinoIn.getCellData(0, "sndHh") == "" ? "" : $c.gus.cfGetFormatStr($p, ds_resultsCopinoIn.getCellData(0, "sndHh"), "##:##:##")));
    if (ds_resultsCopinoIn.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      td_sndClsCd2.setValue("전송완료");
    } else if (ds_resultsCopinoIn.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_LATER_SND) {
      td_sndClsCd2.setValue("사후전송");
    } else if (ds_resultsCopinoIn.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_IMPITEM_WARN) {
      td_sndClsCd2.setValue("필수입력오류");
    } else if (ds_resultsCopinoIn.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_WAIT) {
      td_sndClsCd2.setValue("전송대기");
    } else {
      td_sndClsCd2.setValue("미등록");
    }
    if (ds_resultsCopinoIn.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopinoIn.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD) {
      $c.gus.cfDisableObjects($p, [ed_vehclNoFrtcarNo2]);
    }
    let crryinoutDtmMint2Val = ds_resultsCopinoIn.getCellData(0, "crryinoutDtmMint");
    if (crryinoutDtmMint2Val && crryinoutDtmMint2Val.length >= 8) {
      ica_crryinoutDt2.setValue(crryinoutDtmMint2Val.substring(0, 8));
      if (crryinoutDtmMint2Val.length >= 12) {
        ed_crryinoutHh2.setValue(crryinoutDtmMint2Val.substring(8, 12));
      }
    }
  }
};
scwin.ed_mchtCd1_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mchtCd1, scwin.txt_mchtNm1, 4);
};
scwin.ed_mchtCd2_onblur = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mchtCd2, scwin.txt_mchtNm2, 12);
};
scwin.ed_sizTyp1_onblur = async function (e) {
  let validSizTypes = ["2210", "2270", "2232", "2251", "2264", "4310", "4370", "4332", "4351", "4364", "4510", "9510", "4532", "4530", "4350", "2250"];
  if (validSizTypes.indexOf(ed_sizTyp1.getValue()) < 0) {
    await $c.win.alert($p, "SIZ/TYPE을 정확하게 입력하세요!!!");
  }
};
scwin.ed_sizTyp2_onblur = async function (e) {
  let validSizTypes = ["2210", "2270", "2232", "2251", "2264", "4310", "4370", "4332", "4351", "4364", "4510", "9510", "4532", "4530", "4350", "2250"];
  if (validSizTypes.indexOf(ed_sizTyp2.getValue()) >= 0) {
    if (ed_sizTyp2.getValue() == "2232" || ed_sizTyp2.getValue() == "4332" || ed_sizTyp2.getValue() == "4532") {
      ed_frzTemper2.setDisabled(false);
      scwin.hid_temperCls2 = "CEL";
    } else {
      ed_frzTemper2.setValue("");
      ed_frzTemper2.setDisabled(true);
      scwin.hid_temperCls2 = "";
    }
    let sizWeightMap = {
      "2210": "2400",
      "2232": "3020",
      "2251": "2330",
      "4310": "4000",
      "4332": "4760",
      "4351": "4060",
      "4510": "4200",
      "9510": "4700",
      "4532": "4760",
      "4350": "4060",
      "2250": "2330"
    };
    if (sizWeightMap[ed_sizTyp2.getValue()]) {
      ed_totWt2.setValue(sizWeightMap[ed_sizTyp2.getValue()]);
    }
  } else {
    await $c.win.alert($p, "SIZ/TYPE을 정확하게 입력하세요!!!");
    ed_sizTyp2.setValue("");
  }
};
scwin.ed_vehclNoFull1_onblur = async function (e) {
  if (ds_resultsCopinoOut.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopinoOut.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD && ds_resultsCopinoOut.getCellData(0, "wrkStpCd") != ed_vehclNoFull1.getValue()) {
    $c.gus.cfEnableObjects($p, [ed_vehclNoFrtcarNo1]);
  }
};
scwin.ed_vehclNoFull2_onblur = async function (e) {
  if (ds_resultsCopinoIn.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopinoIn.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD && ds_resultsCopinoIn.getCellData(0, "wrkStpCd") != ed_vehclNoFull2.getValue()) {
    $c.gus.cfEnableObjects($p, [ed_vehclNoFrtcarNo2]);
  }
};
scwin.ed_vehclNoFrtcarNo1_onblur = async function (e) {
  if (ed_vehclNoFrtcarNo1.getValue().trim() == "") return;
  ds_search.set("vehclIdCardNo", ed_vehclNoFrtcarNo1.getValue().trim());
  await $c.sbm.execute($p, sbm_retrieve3);
  if (ds_lastCarInOutDTO.getRowCount() > 0) {
    for (let i = 0; i < ds_lastCarInOutDTO.getRowCount(); i++) {
      if (ds_lastCarInOutDTO.getCellData(i, "crryinCrryoutCls") == "3" && ed_vehclNoFrtcarNo1.getValue() != "") {
        ed_vehclNoFull1.setValue(ds_lastCarInOutDTO.getCellData(i, "vehclNoFull"));
      }
    }
  }
};
scwin.ed_vehclNoFrtcarNo2_onblur = async function (e) {
  if (ed_vehclNoFrtcarNo2.getValue().trim() == "") return;
  ds_search.set("vehclIdCardNo", ed_vehclNoFrtcarNo2.getValue().trim());
  await $c.sbm.execute($p, sbm_retrieve3);
  if (ds_lastCarInOutDTO.getRowCount() > 0) {
    for (let i = 0; i < ds_lastCarInOutDTO.getRowCount(); i++) {
      if (ds_lastCarInOutDTO.getCellData(i, "crryinCrryoutCls") == "3" && ed_vehclNoFrtcarNo2.getValue() != "") {
        ed_vehclNoFull2.setValue(ds_lastCarInOutDTO.getCellData(i, "vehclNoFull"));
      }
    }
  }
};
scwin.ed_frzTemper2_onblur = async function (e) {
  if (scwin.hid_sizTyp2 && (scwin.hid_sizTyp2.substr(2, 2) == "RF" || scwin.hid_sizTyp2.substr(2, 2) == "RH")) {
    if (ed_frzTemper2.getValue() == "") {
      scwin.hid_temperCls2 = "DRY";
      ed_rmk3.setValue(scwin.EDI_TEMPER_CLS_DRY);
    } else {
      scwin.hid_temperCls2 = "CEL";
      ed_rmk3.setValue(scwin.EDI_TEMPER_CLS_CEL);
    }
  }
};
scwin.acb_expimpClsCd1_onchange = async function (e) {
  if (acb_expimpClsCd1.getValue() == "I") {
    ed_bookingNo1.setDisabled(true);
    ed_blNo1.setDisabled(false);
    ed_doNo1.setDisabled(false);
    ed_bookingNo1.setValue("");
  } else if (acb_expimpClsCd1.getValue() == "E") {
    ed_bookingNo1.setDisabled(false);
    ed_blNo1.setDisabled(true);
    ed_doNo1.setDisabled(true);
    ed_blNo1.setValue("");
  }
};
scwin.acb_fullEmptyClsCd1_onchange = async function (e) {
  if (ds_resultsCopinoOut.getRowCount() > 0) {
    if (acb_fullEmptyClsCd1.getValue() == "4") {
      ed_sealNo1.setValue(" ");
      ed_sealNo1.setDisabled(true);
    } else if (acb_fullEmptyClsCd1.getValue() == "5") {
      ed_sealNo1.setDisabled(false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["E/F 구분"]);
      ed_sealNo1.setDisabled(true);
    }
  }
};
scwin.acb_expimpClsCd2_onchange = async function (e) {
  if (acb_expimpClsCd2.getValue() == "I") {
    ed_bookingNo2.setDisabled(true);
    ed_doNo2.setDisabled(false);
    ed_blNo2.setDisabled(false);
  } else if (acb_expimpClsCd2.getValue() == "E") {
    ed_bookingNo2.setDisabled(false);
    ed_blNo2.setDisabled(true);
    ed_doNo2.setDisabled(true);
    ed_blNo2.setValue("");
  }
};
scwin.acb_fullEmptyClsCd2_onchange = async function (e) {
  if (ds_resultsCopinoIn.getRowCount() > 0) {
    if (acb_fullEmptyClsCd2.getValue() == "4") {
      ed_sealNo2.setValue(" ");
    } else if (acb_fullEmptyClsCd2.getValue() == "5") {
      ed_sealNo2.setDisabled(false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["E/F 구분"]);
    }
  }
  $c.gus.cfRefreshMandSign($p);
};
scwin.chk_crryOutCopino_onviewchange = function (e) {
  scwin.f_switchTransYn(1);
};
scwin.chk_crryInCopino_onviewchange = function (e) {
  scwin.f_switchTransYn(2);
};
scwin.chk_damage_onviewchange = function (e) {
  scwin.f_switch();
};
scwin.btnSelect_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btnCreate_onclick = function (e) {
  scwin.f_create();
};
scwin.btnSave_onclick = function (e) {
  scwin.f_save();
};
scwin.img_transDstFromNm1_onclick = function (e) {
  scwin.f_openCommonPopUp(0, '', scwin.hid_transDstFromNm1, 'F', 'F');
};
scwin.img_dptWrkPlCd_onclick = function (e) {
  scwin.f_openCommonPopUp(2, '', scwin.hid_transDstToNm1, 'F', 'F');
};
scwin.img_sizTyp1_onclick = function (e) {
  scwin.f_openCommonPopUp(5, ed_sizTyp1.getValue(), '', 'F', 'F');
};
scwin.img_transDstToNm2_onclick = function (e) {
  scwin.f_openCommonPopUp(1, '', scwin.hid_transDstToNm2, 'F', 'F');
};
scwin.img_arvWrkPlCd_onclick = function (e) {
  scwin.f_openCommonPopUp(3, '', scwin.hid_transDstFromNm2, 'F', 'F');
};
scwin.img_sizTyp2_onclick = function (e) {
  scwin.f_openCommonPopUp(6, ed_sizTyp2.getValue(), '', 'F', 'F');
};
scwin.img_dchrPort2_onclick = function (e) {
  scwin.f_openCommonPopUp(9, ed_dchrPort2.getValue(), '', 'F', 'F');
};
scwin.trigger17_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량ID번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNoFrtcarNo1',placeholder:'',style:'',ref:'data:ds_resultsCopinoOut.vehclNoFrtcarNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'',ref:'data:ds_search.cntrNo',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'trigger17',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btnSelect',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'반출(COPINO) ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_crryOutCopino',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_transDstFrom1',style:'',ref:'data:ds_resultsCopinoOut.transDstFrom'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_transDstFromNm1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_transDstTo1',style:'',ref:'data:ds_resultsCopinoOut.transDstTo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_dptWrkPlCd',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_expimpClsCd1',search:'start',style:'',submenuSize:'fixed',ref:'data:ds_resultsCopinoOut.expimpClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선입항년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vsslArrvlportYr1',style:'',ref:'data:ds_resultsCopinoOut.vsslArrvlportYr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량ID번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNoFrtcarNo2',style:'',ref:'data:ds_resultsCopinoIn.vehclNoFrtcarNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNoFull1',style:'',ref:'data:ds_resultsCopinoOut.vehclNoFull',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'모선/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tmlVsslPortcnt1',style:'',ref:'data:ds_resultsCopinoOut.tmlVsslPortcnt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo1',style:'',ref:'data:ds_resultsCopinoOut.cntrNo',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'OPERATOR',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_shpCoCd1',style:'',ref:'data:ds_resultsCopinoOut.shpCoCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'SIZE/TYPE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_sizTyp1',style:'',ref:'data:ds_resultsCopinoOut.sizTyp',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_sizTyp1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'E/F 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fullEmptyClsCd1',search:'start',style:'',submenuSize:'fixed',ref:'data:ds_resultsCopinoOut.fullEmptyClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SEAL NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_sealNo1',style:'',disabled:'true',ref:'data:ds_resultsCopinoOut.sealNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'B/L NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo1',style:'',disabled:'true',ref:'data:ds_resultsCopinoOut.blNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/K NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_bookingNo1',style:'',disabled:'true',ref:'data:ds_resultsCopinoOut.bookingNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'D/O NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_doNo1',style:'',ref:'data:ds_resultsCopinoOut.doNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_admitNo1',style:'',ref:'data:ds_resultsCopinoOut.admitNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반출일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'group1',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_crryinoutDt1',style:'',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_crryinoutHh1',style:'width: 50px;',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selfCls1',search:'start',style:'',submenuSize:'fixed',ref:'data:ds_resultsCopinoOut.selfCls'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EMC ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_emcId1',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_mchtCd1',codeId:'ed_mchtCd1',nameId:'txt_mchtNm1',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'X-RAY',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_xrayRettlPassYn1',ref:'data:ds_resultsCopinoOut.xrayRettlPassYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:' '}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_sndClsCd1',label:'데이타',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TS유무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_tsCls1',search:'start',style:'',submenuSize:'fixed',ref:'data:ds_resultsCopinoOut.tsCls'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_sndDtHh1',label:'데이타',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dpctTransCoId1',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.dpctTransCoId'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세차량여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bondTransVehclYn1',search:'start',style:'',submenuSize:'fixed',ref:'data:ds_resultsCopinoOut.bondTransVehclYn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tar',cols:'',id:'chk_crryOutCopino',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송여부  '}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'반입(COPINO) ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_crryInCopino',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_transDstTo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.transDstTo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_transDstToNm2',style:'',type:'button',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_transDstFrom2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.transDstFrom'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_arvWrkPlCd',style:'',type:'button',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_chassisPosInfo1',search:'start',style:'',submenuSize:'fixed',disabled:'true',ref:'data:ds_resultsCopinoOut.chassisPosInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선입항년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vsslArrvlportYr2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.vsslArrvlportYr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직통관유무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_vehclCls1',search:'start',style:'',submenuSize:'fixed',disabled:'true',ref:'data:ds_resultsCopinoOut.vehclCls'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_admitNo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.admitNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량ID번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNoFrtcarNo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.vehclNoFrtcarNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNoFull2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.vehclNoFull',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'모선/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tmlVsslPortcnt2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.tmlVsslPortcnt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.cntrNo',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'OPERATOR',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_shpCoCd2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.shpCoCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'SIZE/TYPE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_sizTyp2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.sizTyp',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_sizTyp2',style:'',type:'button',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'E/F 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_hanjinSelfCls1',search:'start',style:'',submenuSize:'fixed',disabled:'true',ref:'data:ds_resultsCopinoOut.hanjinSelfCls'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SEAL NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_sealNo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.sealNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'양하항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_dchrPort2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.dchrPort',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_dchrPort2',style:'',type:'button',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WEIGHT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_totWt2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.totWt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'B/L NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.blNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/K NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_bookingNo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.bookingNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'D/O NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_doNo2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.doNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dpctTransCoId2',style:'',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'group2',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_crryinoutDt2',style:'',disabled:'true'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_crryinoutHh2',style:'width: 50px;',disabled:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DAMAGE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_damage',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:' '}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EMC ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_emcId2',style:'',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'냉동온도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_frzTemper2',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.frzTemper'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DRY/CEL',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rmk3',style:'',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_expimpClsCd2',search:'start',style:'',submenuSize:'fixed',disabled:'true',ref:'data:ds_resultsCopinoIn.expimpClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TS유무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_drtCstmclrncExyn2',search:'start',style:'',submenuSize:'fixed',disabled:'true',ref:'data:ds_resultsCopinoIn.drtCstmclrncExyn',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_sndDtHh2',label:'데이타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'td_sndClsCd2',label:'데이타',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사핸드폰',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tel1',style:'',disabled:'true',ref:'data:ds_resultsCopinoOut.cntctPl'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_fullEmptyClsCd2',search:'start',style:'',submenuSize:'fixed',disabled:'true',ref:'data:ds_resultsCopinoIn.fullEmptyClsCd',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_mchtCd2',codeId:'ed_mchtCd2',nameId:'txt_mchtNm2',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_ctaNm',style:'',disabled:'true',ref:'data:ds_resultsCopinoIn.iccntctPic'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',disabled:'true',id:'em_ctaTel',style:'',ref:'data:ds_resultsCopinoIn.iccntctPl'}}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'tar',cols:'',id:'chk_crryInCopino',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송여부  '}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot  txt-red',escape:'false',id:'',label:'COPINO전송후 터미널게이트에서 발생하는 오류로 인해 게이트를 통과하지 못하는 사항은 해당 터미널의 전산실로 문의하시기 바랍니다. &nbsp; ',style:''}},{T:1,N:'xf:group',A:{class:'info-list row mt4',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'6P10',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'동부감만',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'6P12',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'HBCT',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'6P13',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'PECT',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'6P14',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'허치슨감만T',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'6P16',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'BICT',class:''}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6P17',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대통감만T',style:''}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6P18',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'한진감천T',style:''}}]}]},{T:1,N:'xf:group',A:{class:'info-list row mt0',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6P19',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'우암T',style:''}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6P60',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부산신항 ',style:''}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6P42',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'울산정일',style:''}}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6P42',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'울산6부두 ',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnCreate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})